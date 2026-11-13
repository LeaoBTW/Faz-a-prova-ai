# -*- coding: utf-8 -*-
"""Resultado da validação do agente 5 sobre as questões geradas (variacoes-*.js).

Os geradores (agente2/gerar.py, agente3/gerar.py, agente4/gerar.py) chamam `aplicar(obj)` em cada
questão antes de gravar o banco: o status ("validada", "rejeitada" ou "duvida") e
validacao = {"por": "agente-5", "em": DATA, "obs": ...} vêm de validacao-agente5.json.
Correções de conteúdo NÃO ficam aqui: foram feitas nos próprios dados (q_*.py, dados_*.py, lp.py...),
e a obs de cada questão registra o que mudou.
Questão sem entrada no JSON continua como o gerador a produziu ("rascunho").
"""
import json
import os

ARQ = os.path.join(os.path.dirname(os.path.abspath(__file__)), "validacao-agente5.json")
DATA = "2026-11-13"
STATUS = ("validada", "rejeitada", "duvida")

_cache = None


def tabela():
    global _cache
    if _cache is None:
        _cache = json.load(open(ARQ, encoding="utf-8")) if os.path.exists(ARQ) else {}
    return _cache


def aplicar(obj):
    v = tabela().get(obj["id"])
    if not v:
        return obj
    st = v["status"]
    assert st in STATUS, (obj["id"], st)
    obs = v.get("obs", "")
    assert st == "validada" or obs.strip(), "%s: %s exige obs" % (obj["id"], st)
    autor = (obj.get("validacao") or {}).get("por")
    obj["status"] = st
    obj["validacao"] = {"por": "agente-5", "em": DATA,
                        "obs": obs or "Conferida pelo agente 5 (resolvida sem o gabarito; criada por %s)." % autor}
    return obj
