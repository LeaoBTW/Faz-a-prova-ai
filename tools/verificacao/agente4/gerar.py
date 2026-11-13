# -*- coding: utf-8 -*-
"""Gera banco/variacoes-esp-b.js a partir de dados_*.py (agente 4).

Uso: python3 tools/verificacao/agente4/gerar.py
"""
import collections
import importlib
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comum import RAIZ, carregar_pais, montar  # noqa: E402
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import validacao_agente5  # noqa: E402

COTAS = {"ARQ": 42, "DEVOPS": 43, "SO": 14, "REDES": 26, "SERV": 21, "SEG": 29, "NUVEM": 7}
ORDEM = ["arq", "devops", "so", "redes", "serv", "seg", "nuvem"]
LIMITE_CONCEITO = 2
LIMITE_CALCULO = 5


def todas():
    lista = []
    for nome in ORDEM:
        mod = importlib.import_module("dados_" + nome)
        lista.extend(mod.QUESTOES)
    return lista


def com_ids(lista):
    cont = collections.Counter()
    saida = []
    for q in lista:
        cont[q["eixo"]] += 1
        saida.append(("ESP-%s-V%03d" % (q["eixo"], cont[q["eixo"]]), q))
    return saida


def main():
    pais = carregar_pais()
    lista = com_ids(todas())
    objs = [validacao_agente5.aplicar(montar(q, qid, pais)) for qid, q in lista]
    # checagens
    por_eixo = collections.Counter(q["eixo"] for _, q in lista)
    gab = collections.defaultdict(collections.Counter)
    filhos = collections.Counter()
    ok = True
    for qid, q in lista:
        gab[q["eixo"]][q["gab"]] += 1
        if q["pai"]:
            filhos[q["pai"]] += 1
        alts = list(q["alts"].values())
        if len(set(a.strip().lower() for a in alts)) != 5:
            print("ALTERNATIVAS REPETIDAS:", qid)
            ok = False
    for pai, n in filhos.items():
        lim = LIMITE_CALCULO if any(q["pai"] == pai and "calculo" in q["tags"] for _, q in lista) else LIMITE_CONCEITO
        if n > lim:
            print("LIMITE POR PAI EXCEDIDO:", pai, n)
            ok = False
    for e, cota in COTAS.items():
        n = por_eixo[e]
        flag = "" if cota <= n <= int(cota * 1.1) else "  <-- FORA DA COTA"
        if flag:
            ok = False
        var = sum(1 for _, q in lista if q["eixo"] == e and q["pai"])
        print("%-7s %3d (cota %3d) variações %3d inéditas %3d | gab %s%s" % (
            e, n, cota, var, n - var, " ".join("%s=%d" % (l, gab[e][l]) for l in "ABCDE"), flag))
    keys = [q["k"] for _, q in lista if q["k"]]
    dup = [k for k, c in collections.Counter(keys).items() if c > 1]
    if dup:
        print("CHAVES REPETIDAS:", dup)
        ok = False
    with open(os.path.join(RAIZ, "banco", "variacoes-esp-b.js"), "w", encoding="utf-8") as f:
        f.write("/*\n * Variações (esp-b) — agente 4: Arquitetura, DevOps, SO, Redes, Serviços, Segurança e Nuvem.\n"
                " * Gerado por tools/verificacao/agente4/gerar.py a partir de dados_*.py (não editar à mão).\n"
                " * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.\n */\n")
        f.write("window.BANCO = window.BANCO || [];\n")
        for o in objs:
            f.write("\nBANCO.push(" + json.dumps(o, ensure_ascii=False, indent=2) + ");\n")
    print("Total:", len(objs))
    return 0 if ok else 1


def por_chave():
    """Mapa chave -> (id, questão), para os scripts de verificação."""
    return {q["k"]: (qid, q) for qid, q in com_ids(todas()) if q["k"]}


if __name__ == "__main__":
    sys.exit(main())
