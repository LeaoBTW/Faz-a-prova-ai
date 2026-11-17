# -*- coding: utf-8 -*-
"""Gera os arquivos do banco que são só do Banestes 2026 – Técnico Bancário.

  banco/tb-ineditas.js      inéditas (dados_vendas, dados_bancarios, dados_informatica_estatistica)
  banco/tb-prova-2023.js    prova real FGV 2023 do Técnico Bancário (dados_prova_2023)

Uso: python3 tools/tecnico/gerar.py            (gera os arquivos e mostra as contagens)
     python3 tools/tecnico/gerar.py --checar   (só confere as questões, sem gravar nada)
     python3 tools/tecnico/gerar.py --conferir (falha se os arquivos estiverem desatualizados ou
                                                se um cálculo conferido por execução divergir)

Ids: TB-<SIGLA>-0001 por matéria, na ordem de MODULOS (só acrescente módulos no fim, para não
renumerar), e TB23-001 a TB23-070 na prova real (número original).
"""
import collections
import importlib
import json
import os
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comum import RAIZ, SECOES, MATERIAS, CONCURSO  # noqa: E402

MODULOS = ["dados_vendas", "dados_bancarios", "dados_informatica_estatistica"]
PROVA = "dados_prova_2023"
LETRAS = "ABCDE"
DATA = "2026-11-17"
CAB = ("/*\n * %s\n * Gerado por tools/tecnico/gerar.py (não editar à mão). Só para o concurso %s.\n"
       " * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.\n */\n"
       "window.BANCO = window.BANCO || [];\nwindow.TEXTOS_BASE = window.TEXTOS_BASE || [];\n")


def ref_apostila(ref):
    if not ref:
        return None
    nome, titulo = SECOES[ref]
    mod, sec = ref.split("/")
    return {"modulo": mod, "secao": sec, "titulo": titulo, "link": "[[%s#%s. %s]]" % (nome, sec, titulo)}


def executar(ver):
    codigo, _ = ver
    return subprocess.run([sys.executable, "-c", codigo], capture_output=True, text=True, check=True).stdout.strip()


def montar_inedita(q, qid, pos):
    erradas = q["erradas"][:]
    giro = pos % 4
    erradas = erradas[giro:] + erradas[:giro]
    ordem = erradas[:pos] + [q["certa"]] + erradas[pos:]
    gab = LETRAS[pos]
    materia, bloco = MATERIAS[q["sigla"]]
    ref = ref_apostila(q["ref"])
    return collections.OrderedDict([
        ("id", qid), ("concursos", [CONCURSO]), ("banca_estilo", "FCC"),
        ("bloco", bloco), ("materia", materia), ("eixo", None), ("topico", q["topico"]),
        ("ref_apostila", ref),
        ("origem", {"tipo": "simulado", "fonte": "Inédita Técnico Bancário (nov/2026)", "id_pai": None, "anulada": False}),
        ("formato", "multipla_5"), ("dificuldade", q["dif"]), ("texto_base", None),
        ("enunciado", q["enun"]), ("imagem", None), ("alternativas", dict(zip(LETRAS, ordem))), ("gabarito", gab),
        ("comentario", "**Gabarito: %s.** %s" % (gab, q["exp"]) +
         ("\n\nRevisar: Apostila %s, §%s." % (ref["modulo"], ref["secao"]) if ref else "")),
        ("tags", ["tecnico-bancario"] + q["tags"]), ("embaralhavel", q["embaralhavel"]), ("status", "validada"),
        ("validacao", {"por": "autor", "em": DATA, "obs": "Inédita para o Técnico Bancário; conferida pelo autor."}),
        ("versao", 1),
    ])


def montar_prova(q, info):
    materia, bloco = MATERIAS[q["sigla"]]
    return collections.OrderedDict([
        ("id", "TB23-%03d" % q["numero"]), ("concursos", [CONCURSO]), ("banca_estilo", "FGV"),
        ("bloco", bloco), ("materia", materia), ("eixo", None), ("topico", q["topico"]),
        ("ref_apostila", ref_apostila(q["ref"])),
        ("origem", {"tipo": "prova_real", "fonte": "%s – Q%d" % (info["nome"], q["numero"]), "id_pai": None,
                    "anulada": q["anulada"], "prova": info["id"], "numero": q["numero"]}),
        ("formato", "multipla_5"), ("dificuldade", q["dif"]), ("texto_base", q["texto_base"]),
        ("enunciado", q["enun"]), ("imagem", q["imagem"]), ("alternativas", q["alternativas"]),
        ("gabarito", None if q["anulada"] and q["gabarito"] not in LETRAS else q["gabarito"]),
        ("comentario", q["comentario"]),
        ("tags", ["tecnico-bancario", "prova-2023"] + q["tags"]), ("embaralhavel", False),
        # sem a figura não dá para resolver: fica só no modo "Refazer prova real", fora de treino e simulados
        ("status", "duvida" if "figura-ausente" in q["tags"] else "validada"),
        ("validacao", {"por": "autor", "em": DATA, "obs": q["obs"] or "Transcrita da prova e do gabarito definitivo da FGV."}),
        ("versao", 1),
    ])


def escrever(caminho, titulo, objs, textos=()):
    txt = CAB % (titulo, CONCURSO)
    for t in textos:
        txt += "\nTEXTOS_BASE.push(" + json.dumps(t, ensure_ascii=False, indent=2) + ");\n"
    for o in objs:
        txt += "\nBANCO.push(" + json.dumps(o, ensure_ascii=False, indent=2) + ");\n"
    return caminho, txt


def main():
    conferir = "--conferir" in sys.argv
    ok = True
    saidas = []
    cont = collections.Counter()
    gab = collections.defaultdict(collections.Counter)
    tops = collections.defaultdict(collections.Counter)
    objs, enuns = [], set()
    for nome in MODULOS:
        try:
            mod = importlib.import_module(nome)
        except ModuleNotFoundError:
            continue
        for q in mod.QUESTOES:
            s = q["sigla"]
            pos = (cont[s] * 2 + len(s)) % 5
            cont[s] += 1
            qid = "TB-%s-%04d" % (s, cont[s])
            if len(set(a.lower() for a in [q["certa"]] + q["erradas"])) != 5:
                print("ALTERNATIVAS REPETIDAS:", qid, q["enun"][:60]); ok = False
            if q["enun"] in enuns:
                print("ENUNCIADO REPETIDO:", qid, q["enun"][:60]); ok = False
            enuns.add(q["enun"])
            if q["ver"]:
                obtido = executar(q["ver"])
                if obtido != q["ver"][1]:
                    print("CÁLCULO DIFERENTE:", qid, repr(obtido), "esperado", repr(q["ver"][1])); ok = False
            objs.append(montar_inedita(q, qid, pos))
            gab[s][LETRAS[pos]] += 1
            tops[s][q["topico"]] += 1
    for s in cont:
        print("%-4s %4d | gab %s" % (s, cont[s], " ".join("%s=%d" % (l, gab[s][l]) for l in LETRAS)))
        for t, n in tops[s].most_common():
            print("        %3d  %s" % (n, t))
    print("inéditas:", len(objs))
    saidas.append(escrever(os.path.join(RAIZ, "banco", "tb-ineditas.js"),
                           "Técnico Bancário — questões inéditas para as matérias com pouca cobertura no banco.", objs))
    try:
        mod = importlib.import_module(PROVA)
    except ModuleNotFoundError:
        mod = None
    if mod:
        nums = [q["numero"] for q in mod.PROVA]
        if sorted(nums) != list(range(1, len(nums) + 1)):
            print("PROVA: numeração incompleta ou repetida"); ok = False
        ids_textos = {t["id"] for t in mod.TEXTOS}
        for q in mod.PROVA:
            if q["texto_base"] and q["texto_base"] not in ids_textos:
                print("PROVA: texto-base inexistente", q["numero"]); ok = False
        pobjs = [montar_prova(q, mod.INFO) for q in sorted(mod.PROVA, key=lambda x: x["numero"])]
        print("prova real:", len(pobjs), "questões,", sum(q["anulada"] for q in mod.PROVA), "anuladas")
        saidas.append(escrever(os.path.join(RAIZ, "banco", "tb-prova-2023.js"),
                               mod.INFO["nome"] + " — prova real, na ordem original.", pobjs, mod.TEXTOS))
    if not ok:
        sys.exit(1)
    if "--checar" in sys.argv:
        print("OK: questões conferidas (nada gravado).")
        return
    for caminho, txt in saidas:
        if conferir:
            atual = open(caminho, encoding="utf-8").read() if os.path.exists(caminho) else ""
            if atual != txt:
                print("%s desatualizado: rode python3 tools/tecnico/gerar.py" % os.path.relpath(caminho, RAIZ))
                sys.exit(1)
        else:
            with open(caminho, "w", encoding="utf-8") as f:
                f.write(txt)
    if conferir:
        print("OK: arquivos do Técnico Bancário em dia.")


if __name__ == "__main__":
    main()
