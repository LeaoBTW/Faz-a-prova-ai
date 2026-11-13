#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Agente 3 – executa os scripts de sql/ no PostgreSQL (e, quando portáveis, no SQLite)
e compara com o resultado usado no gabarito.

PostgreSQL: servidor local acessado por psql (variáveis PGHOST/PGPORT/PGUSER; padrão
/tmp, 5433, postgres). Cada script roda num banco descartável 'ag3_conf'.
"""
import os
import sqlite3
import subprocess
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
SQL = os.path.join(AQUI, "sql")
ENV = dict(os.environ, PGHOST=os.environ.get("PGHOST", "/tmp"), PGPORT=os.environ.get("PGPORT", "5433"),
           PGUSER=os.environ.get("PGUSER", "postgres"))

# arquivo -> (saída esperada do psql -At, portável para SQLite?)
ESPERADO = {
    "bd1_funcao.sql": ("120|-1", False),
    "bd2_janela.sql": ("14|1|1|1\n13|2|2|2", True),
    "bd3_cte.sql": ("1|1\n2|2\n3|2\n4|1", True),
}


def psql(*args):
    return subprocess.run(["psql", "-X", "-q", "-At", "-v", "ON_ERROR_STOP=1", *args],
                          capture_output=True, text=True, env=ENV)


falhas = 0
for arq, (esp, portavel) in ESPERADO.items():
    caminho = os.path.join(SQL, arq)
    r = psql("-d", "postgres", "-c", "DROP DATABASE IF EXISTS ag3_conf", "-c", "CREATE DATABASE ag3_conf")
    if r.returncode:
        print("FALHA postgres indisponível:", r.stderr.strip())
        sys.exit(1)
    r = psql("-d", "ag3_conf", "-f", caminho)
    ok = r.returncode == 0 and r.stdout.strip() == esp
    falhas += not ok
    print("%-5s SQL postgres %-16s %r" % ("OK" if ok else "FALHA", arq, r.stdout.strip() or r.stderr.strip()))
    if portavel:
        txt = open(caminho, encoding="utf-8").read()
        pre, resto = txt.split("-- <<<")
        consulta = resto.split("-- >>>")[0]
        con = sqlite3.connect(":memory:")
        con.executescript(pre)
        obtido = "\n".join("|".join(str(c) for c in l) for l in con.execute(consulta))
        ok = obtido == esp
        falhas += not ok
        print("%-5s SQL sqlite   %-16s %r" % ("OK" if ok else "FALHA", arq, obtido))
psql("-d", "postgres", "-c", "DROP DATABASE IF EXISTS ag3_conf")
sys.exit(1 if falhas else 0)
