#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Gera banco/variacoes-gerais.js e docs/log-agente2.md a partir de lp.py, rle.py, atu.py e eti.py.

Uso: python3 tools/verificacao/agente2/gerar.py
As contas de RLE são refeitas (e conferidas com assert) ao importar rle.py.
"""
import collections
import json
import os
import random
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, AQUI)
sys.path.insert(0, os.path.join(AQUI, "..", ".."))

import base  # noqa: E402
import lp, rle, atu, eti  # noqa: E402,F401

import validar_banco as V  # noqa: E402
sys.path.insert(0, os.path.join(AQUI, ".."))
import validacao_agente5  # noqa: E402

DATA = "2026-11-13"
LETRAS = "ABCDE"


def fonte_pai(banco, pid):
    return banco[pid]["origem"]["fonte"]


def main():
    existentes, _, _ = V.carregar(base.RAIZ)
    banco = {q["id"]: q for q in existentes if not q["__arquivo"].startswith("variacoes-gerais")}

    cont = collections.Counter()
    objs, log = [], collections.defaultdict(list)
    for spec in base.QUESTOES:
        mat = spec["mat"]
        i = cont[mat]
        cont[mat] += 1
        rnd = random.Random("%s-%d" % (mat, i // 5))
        perm = list(LETRAS)
        rnd.shuffle(perm)
        letra_ok = perm[i % 5]
        rnd2 = random.Random("%s-dist-%d" % (mat, i))
        err = list(spec["erradas"])
        rnd2.shuffle(err)
        alts, expl = {}, {}
        k = 0
        for L in LETRAS:
            if L == letra_ok:
                alts[L], expl[L] = spec["correta"]
            else:
                alts[L], expl[L] = err[k]
                k += 1
        partes = ["**Gabarito: %s.** %s" % (letra_ok, spec["explic"])] if spec["explic"] else \
                 ["**Gabarito: %s.**" % letra_ok]
        for L in LETRAS:
            marca = " (correta)" if L == letra_ok else ""
            partes.append("- **%s%s:** %s" % (L, marca, expl[L]))
        comentario = partes[0] + "\n\n" + "\n".join(partes[1:])

        qid = "%s-V%03d" % (mat, i + 1)
        pai = spec["pai"]
        if pai:
            assert pai in banco, ("pai inexistente", qid, pai)
            assert banco[pai]["materia"] == base.MATERIAS[mat][0] or mat in ("ATU", "ETI"), (qid, pai)
            origem = {"tipo": "variacao", "fonte": "Variação de " + fonte_pai(banco, pai),
                      "id_pai": pai, "anulada": False}
        else:
            origem = {"tipo": "simulado",
                      "fonte": "Inédita – Apostila %s §%s" % (spec["modulo"], spec["secao"]),
                      "id_pai": None, "anulada": False}
        r = base.ref(spec["modulo"], spec["secao"])
        obj = {
            "id": qid,
            "concursos": ["banestes-2027-analista-ti"],
            "banca_estilo": "FCC",
            "bloco": "gerais",
            "materia": base.MATERIAS[mat][0],
            "eixo": None,
            "topico": spec["topico"] or r["titulo"],
            "ref_apostila": r,
            "origem": origem,
            "formato": "multipla_5",
            "dificuldade": spec["dif"],
            "texto_base": None,
            "enunciado": spec["enunciado"],
            "imagem": None,
            "alternativas": alts,
            "gabarito": letra_ok,
            "comentario": comentario,
            "tags": spec["tags"],
            "embaralhavel": not spec["ordem"],
            "status": "rascunho",
            "validacao": {"por": "agente-2", "em": DATA, "obs": spec["verif"] or ""},
            "versao": 1,
        }
        objs.append(validacao_agente5.aplicar(obj))
        log[mat].append((qid, pai, origem["fonte"], spec["var"] or ("inédita" if not pai else "variação"),
                         spec["verif"], letra_ok))

    # ---- grava o banco ----
    linhas = [
        "/*",
        " * Variações (gerais) — gerado por tools/verificacao/agente2/gerar.py (agente 2).",
        " * Não edite à mão: altere lp.py, rle.py, atu.py ou eti.py e rode o gerador.",
        " * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.",
        " */",
        "window.BANCO = window.BANCO || [];",
        "",
    ]
    for o in objs:
        linhas.append("BANCO.push(" + json.dumps(o, ensure_ascii=False, indent=2) + ");")
        linhas.append("")
    with open(os.path.join(base.RAIZ, "banco", "variacoes-gerais.js"), "w", encoding="utf-8") as f:
        f.write("\n".join(linhas))

    # ---- log ----
    nomes = {k: v[0] for k, v in base.MATERIAS.items()}
    L = ["# Log do agente 2 – Variações dos Conhecimentos Gerais", "",
         "Gerado por `tools/verificacao/agente2/gerar.py` em %s. Arquivo do banco: `banco/variacoes-gerais.js`." % DATA,
         "As questões saem do gerador como `status: \"rascunho\"` e recebem o status final (validada/rejeitada/dúvida) da validação do agente 5 (`tools/verificacao/validacao-agente5.json`; ver `docs/relatorio-validacao.md`).", "",
         "## Resumo", "",
         "| Matéria | Cota | Criadas | Variações | Inéditas | A | B | C | D | E |",
         "|---|---|---|---|---|---|---|---|---|---|"]
    cotas = {"LP": 91, "RLE": 103, "ATU": 47, "ETI": 75}
    for m in ("LP", "RLE", "ATU", "ETI"):
        it = log[m]
        g = collections.Counter(x[5] for x in it)
        nv = sum(1 for x in it if x[1])
        L.append("| %s | %d | %d | %d | %d | %s |" % (nomes[m], cotas[m], len(it), nv, len(it) - nv,
                                                      " | ".join(str(g[c]) for c in LETRAS)))
    L += ["", "## Como verificar", "",
          "- `python3 tools/verificacao/agente2/gerar.py` refaz todas as contas de RLE (cada questão calcula a resposta e os distratores em Python e confere com `assert`) e regrava o banco e este log.",
          "- `python3 tools/validar_banco.py` confere o esquema.",
          "- Português: cada questão aplica uma regra da apostila 01 (seção indicada) e o comentário explica a regra e o erro de cada alternativa.",
          "- Atualidades e Ética: conferidas contra a apostila 03 (seções indicadas, revisão de nov/2026); fatos datados têm a tag `datado`.",
          ""]
    for m in ("LP", "RLE", "ATU", "ETI"):
        L += ["## %s" % nomes[m], "", "| id | pai / fonte | tipo de variação | verificação |", "|---|---|---|---|"]
        for qid, pai, fonte, var, verif, _ in log[m]:
            pf = ("%s (%s)" % (pai, fonte)) if pai else fonte
            L.append("| %s | %s | %s | %s |" % (qid, pf, var.replace("|", "/"), (verif or "").replace("|", "/")))
        L.append("")
    obs = getattr(sys.modules[__name__], "OBS_LOG", [])
    for mod in (lp, rle, atu, eti):
        obs += getattr(mod, "OBS", [])
    if obs:
        L += ["## Observações sobre questões importadas", ""] + ["- " + o for o in obs] + [""]
    with open(os.path.join(base.RAIZ, "docs", "log-agente2.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(L))

    for m in ("LP", "RLE", "ATU", "ETI"):
        g = collections.Counter(x[5] for x in log[m])
        print(m, len(log[m]), dict(sorted(g.items())))


if __name__ == "__main__":
    main()
