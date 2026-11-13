#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Agente 3 – executa todo código citado nas questões (campo 'codigo' com 'saida')
e os scripts de conferência (cálculos e SQL). Sai com código 1 se algo divergir.
Uso: python3 tools/verificacao/agente3/verificar.py
"""
import os
import re
import subprocess
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, AQUI)
import q_proc, q_prog, q_gov, q_bdweb  # noqa: E401,E402


def norm(s):
    return re.sub(r"\s+", " ", s.replace("`", "")).strip()


falhas = 0
for nome, lista in (("PROC", q_proc.Q), ("PROG", q_prog.Q), ("GOV", q_gov.Q), ("BD", q_bdweb.BD), ("WEB", q_bdweb.WEB)):
    for n, q in enumerate(lista, 1):
        if q.get("codigo") and q.get("saida") is not None:
            r = subprocess.run([os.path.join(AQUI, "executar.sh"), q["codigo"]], capture_output=True, text=True)
            ok = norm(r.stdout) == norm(q["saida"])
            falhas += not ok
            print("%-4s ESP-%s-V%03d %-14s %s  saída=%r" % ("OK" if ok else "FALHA", nome, n, q["codigo"], "" if ok else "esperado=%r" % q["saida"], r.stdout.strip()))
for script in sorted(os.listdir(AQUI)):
    if script.startswith("conf_") and script.endswith(".py"):
        r = subprocess.run([sys.executable, os.path.join(AQUI, script)], capture_output=True, text=True)
        print(r.stdout.rstrip())
        if r.returncode:
            print(r.stderr)
            falhas += 1
print("\n%d falha(s)." % falhas)
sys.exit(1 if falhas else 0)
