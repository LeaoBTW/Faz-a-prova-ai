#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Agente 3 – conferências de código sem 'saida' simples:
- codigo/cs_v6/: das 5 alternativas em C#, só A compila (mcs) e imprime 'Ana 500';
- codigo/V45.java: o trecho JDBC compila (não há banco para executar);
- codigo/git_cherry.sh: o cherry-pick traz só o arquivo do commit escolhido."""
import os
import re
import subprocess
import sys
import tempfile

AQUI = os.path.dirname(os.path.abspath(__file__))
COD = os.path.join(AQUI, "codigo")
ENV = {k: v for k, v in os.environ.items() if k != "JAVA_TOOL_OPTIONS"}
falhas = 0


def informa(ok, desc, det=""):
    global falhas
    falhas += not ok
    print("%-5s código   %-48s %s" % ("OK" if ok else "FALHA", desc, det))


with tempfile.TemporaryDirectory() as t:
    for letra in "ABCDE":
        exe = os.path.join(t, letra + ".exe")
        r = subprocess.run(["mcs", "-nologo", "-out:" + exe, os.path.join(COD, "cs_v6", letra + ".cs")],
                           capture_output=True, text=True)
        compilou = r.returncode == 0
        if letra == "A":
            saida = subprocess.run(["mono", exe], capture_output=True, text=True).stdout.strip() if compilou else ""
            informa(compilou and saida == "Ana 500", "C# cs_v6/A.cs compila e imprime", repr(saida))
        else:
            m = re.search(r"error (CS\d+)", r.stdout + r.stderr)
            erro = m.group(1) if m else ""
            informa(not compilou, "C# cs_v6/%s.cs não compila" % letra, erro)
    r = subprocess.run(["javac", "-d", t, os.path.join(COD, "V45.java")], capture_output=True, text=True, env=ENV)
    informa(r.returncode == 0, "Java V45.java (JDBC) compila", r.stderr.strip()[:80])
r = subprocess.run(["sh", os.path.join(COD, "git_cherry.sh")], capture_output=True, text=True)
informa(r.stdout.strip() == "a.txt c.txt", "git cherry-pick traz só c.txt", repr(r.stdout.strip()))
sys.exit(1 if falhas else 0)
