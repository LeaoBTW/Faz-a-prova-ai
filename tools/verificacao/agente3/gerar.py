#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Agente 3 – gera banco/variacoes-esp-a.js e docs/log-agente3.md a partir de q_*.py.

Cada questão é um dict (ver q_proc.py). O gabarito é distribuído de forma equilibrada
por eixo: a alternativa correta ('ok') é colocada na letra menos usada até o momento;
as erradas ocupam as demais letras na ordem em que foram escritas. Questões com
'fixa' (ordem que importa) mantêm a ordem e a letra informadas.
Uso: python3 tools/verificacao/agente3/gerar.py
"""
import collections
import json
import os
import re
import sys
import textwrap

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(AQUI)))
sys.path.insert(0, AQUI)
sys.path.insert(0, os.path.join(RAIZ, "tools"))
from validar_banco import extrair_chamadas  # noqa: E402

LETRAS = "ABCDE"
DATA = "2026-11-14"
CONCURSO = "banestes-2027-analista-ti"

ARQ_APOSTILA = {
    "03": "03 - Conhecimentos Bancários e Governança de TIC",
    "04": "04 - Fundamentos, SO, Redes e Segurança",
    "05": "05 - Bancos de Dados e Linguagens",
    "06": "06 - Engenharia de Software, Requisitos e Desenvolvimento",
    "07": "07 - Nuvem, TypeScript e Front-end moderno",
}
EIXOS = {
    "PROC": "Processo de desenvolvimento de software",
    "PROG": "Programação",
    "GOV": "Gestão e Governança de TI",
    "BD": "Banco de Dados",
    "WEB": "Desenvolvimento web e mobile",
}


def carregar_banco():
    qs = {}
    for nome in sorted(os.listdir(os.path.join(RAIZ, "banco"))):
        if not nome.endswith(".js") or nome.startswith("variacoes") or nome == "textos-base.js":
            continue
        txt = open(os.path.join(RAIZ, "banco", nome), encoding="utf-8").read()
        for _, js in extrair_chamadas(txt):
            q = json.loads(js)
            qs[q["id"]] = q
    return qs


def refs_existentes(banco):
    r = {}
    for q in banco.values():
        a = q["ref_apostila"]
        r[(a["modulo"], a["secao"])] = (a["titulo"], a["link"])
    return r


# Seções da apostila sem questão importada (título copiado do cabeçalho '## N. ...').
TITULOS_EXTRA = {("05", "26"): 'Bateria de exercícios "qual a saída do código"'}


def titulo_secao(mod, sec):
    if (mod, sec) in TITULOS_EXTRA:
        return TITULOS_EXTRA[(mod, sec)]
    raise SystemExit("seção %s §%s sem título conhecido" % (mod, sec))


def ler_codigo(arq):
    """Trecho exibido de um arquivo de código: entre marcadores <<< e >>> (ou o arquivo todo)."""
    linhas = open(os.path.join(AQUI, "codigo", arq), encoding="utf-8").read().split("\n")
    mostra, dentro, tem_marca = [], False, any("<<<" in l for l in linhas)
    if not tem_marca:
        return "\n".join(linhas).strip("\n")
    for l in linhas:
        if "<<<" in l:
            dentro = True
            continue
        if ">>>" in l:
            dentro = False
            continue
        if dentro:
            mostra.append(l)
    return textwrap.dedent("\n".join(mostra)).strip("\n")


def norm(s):
    return re.sub(r"\s+", " ", str(s).replace("`", "")).strip()


def montar(eixo, lista, banco, refs, log):
    saida, cont = [], collections.Counter()
    for q in lista:  # primeiro, as fixas contam
        if "fixa" in q:
            cont[q["gab"]] += 1
    rot = 0
    for n, q in enumerate(lista, 1):
        qid = "ESP-%s-V%03d" % (eixo, n)
        pai = q.get("pai")
        p = banco.get(pai) if pai else None
        if pai and not p:
            raise SystemExit("%s: pai inexistente %s" % (qid, pai))
        mod = q.get("mod") or p["ref_apostila"]["modulo"]
        sec = str(q.get("sec") or p["ref_apostila"]["secao"])
        if (mod, sec) in refs:
            tit, link = refs[(mod, sec)]
        else:
            tit = titulo_secao(mod, sec)
            link = "[[%s#%s. %s]]" % (ARQ_APOSTILA[mod], sec, tit)
        if p:
            origem = {"tipo": "variacao", "fonte": "Variação de " + p["origem"]["fonte"], "id_pai": pai, "anulada": False}
        else:
            origem = {"tipo": "simulado", "fonte": q.get("fonte") or "Inédita – Apostila %s §%s" % (mod, sec),
                      "id_pai": None, "anulada": False}
        enun = q["enun"]
        if "{codigo}" in enun:
            enun = enun.replace("{codigo}", ler_codigo(q["codigo"]))
        # alternativas
        if "fixa" in q:
            itens = q["fixa"]
            gab = q["gab"]
        else:
            menor = min(cont[l] for l in LETRAS)
            cands = [l for l in LETRAS if cont[l] == menor]
            gab = cands[rot % len(cands)]
            rot += 1
            erradas = list(q["erradas"])
            itens = []
            for l in LETRAS:
                itens.append(q["ok"] if l == gab else erradas.pop(0))
            cont[gab] += 1
        assert len(itens) == 5, qid
        alts = {l: itens[i][0] for i, l in enumerate(LETRAS)}
        if len(set(norm(v).lower() for v in alts.values())) != 5:
            raise SystemExit("%s: alternativas repetidas" % qid)
        if q.get("saida") is not None:
            if norm(alts[gab]) != norm(q["saida"]):
                raise SystemExit("%s: alternativa correta %r != saída %r" % (qid, alts[gab], q["saida"]))
            for l in LETRAS:
                if l != gab and norm(alts[l]) == norm(q["saida"]):
                    raise SystemExit("%s: distrator igual à saída" % qid)
        linhas = ["**Gabarito: %s.** %s" % (gab, q["resumo"]), ""]
        for i, l in enumerate(LETRAS):
            marca = "correta" if l == gab else "errada"
            linhas.append("- **%s** (%s): %s" % (l, marca, itens[i][1]))
        if q.get("extra"):
            linhas += ["", q["extra"]]
        linhas += ["", "Revisar: Apostila %s §%s – %s." % (mod, sec, tit)]
        tags = list(q.get("tags", []))
        if p and "variacao" not in tags:
            tags.append("variacao")
        obj = {
            "id": qid,
            "concursos": [CONCURSO],
            "banca_estilo": "FCC",
            "bloco": "especificos",
            "materia": "Desenvolvimento de Sistemas",
            "eixo": EIXOS[eixo],
            "topico": q.get("topico") or p["topico"],
            "ref_apostila": {"modulo": mod, "secao": sec, "titulo": tit, "link": link},
            "origem": origem,
            "formato": "multipla_5",
            "dificuldade": q.get("dif", 2),
            "texto_base": None,
            "enunciado": enun,
            "imagem": None,
            "alternativas": alts,
            "gabarito": gab,
            "comentario": "\n".join(linhas),
            "tags": tags,
            "embaralhavel": q.get("emb", "fixa" not in q),
            "status": "rascunho",
            "validacao": {"por": "agente-3", "em": DATA, "obs": q.get("obs", "")},
            "versao": 1,
        }
        saida.append(obj)
        log.append((qid, pai or "—", origem["fonte"], q.get("var", "inédita"), q.get("verif", "")))
    return saida


def main():
    import q_proc, q_prog, q_gov, q_bdweb  # noqa: E401
    banco = carregar_banco()
    refs = refs_existentes(banco)
    log, todas, resumo = [], [], []
    for eixo, lista in (("PROC", q_proc.Q), ("PROG", q_prog.Q), ("GOV", q_gov.Q),
                        ("BD", q_bdweb.BD), ("WEB", q_bdweb.WEB)):
        objs = montar(eixo, lista, banco, refs, log)
        todas += objs
        dist = collections.Counter(o["gabarito"] for o in objs)
        nvar = sum(1 for o in objs if o["origem"]["tipo"] == "variacao")
        resumo.append((EIXOS[eixo], len(objs), nvar, len(objs) - nvar, dist))
    with open(os.path.join(RAIZ, "banco", "variacoes-esp-a.js"), "w", encoding="utf-8") as f:
        f.write("/*\n * Variações (esp-a) — agente 3: Processo, Programação, Governança, Banco de Dados e Web.\n"
                " * Gerado por tools/verificacao/agente3/gerar.py a partir de q_*.py (não edite à mão).\n"
                " * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.\n */\n")
        f.write("window.BANCO = window.BANCO || [];\n\n")
        for o in todas:
            f.write("BANCO.push(%s);\n\n" % json.dumps(o, ensure_ascii=False, indent=2))
    with open(os.path.join(RAIZ, "docs", "log-agente3.md"), "w", encoding="utf-8") as f:
        f.write("# Log do agente 3 – variações dos Específicos (parte A)\n\n")
        f.write("Arquivo gerado: `banco/variacoes-esp-a.js` (por `tools/verificacao/agente3/gerar.py`). "
                "Todas as questões estão em `status: \"rascunho\"`.\n\n## Resumo\n\n")
        f.write("| Eixo | Total | Variações | Inéditas | A | B | C | D | E |\n|---|---|---|---|---|---|---|---|---|\n")
        for nome, tot, nv, ni, d in resumo:
            f.write("| %s | %d | %d | %d | %s |\n" % (nome, tot, nv, ni, " | ".join(str(d[l]) for l in LETRAS)))
        f.write("\n## Verificação\n\n" + open(os.path.join(AQUI, "LEIAME.txt"), encoding="utf-8").read() + "\n")
        if os.path.exists(os.path.join(AQUI, "observacoes.md")):
            f.write("\n" + open(os.path.join(AQUI, "observacoes.md"), encoding="utf-8").read() + "\n")
        f.write("\n## Questões criadas\n\n| id | id_pai | fonte | tipo de variação | verificação |\n|---|---|---|---|---|\n")
        for linha in log:
            f.write("| %s |\n" % " | ".join(str(c).replace("|", "\\|") for c in linha))
    for nome, tot, nv, ni, d in resumo:
        print("%-42s total=%3d var=%3d ined=%3d  %s" % (nome, tot, nv, ni, " ".join("%s=%d" % (l, d[l]) for l in LETRAS)))


if __name__ == "__main__":
    main()
