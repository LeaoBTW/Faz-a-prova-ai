# -*- coding: utf-8 -*-
"""Gera banco/reforco.js a partir de dados_*.py (questões inéditas de reforço).

Uso: python3 tools/reforco/gerar.py            (gera o arquivo)
     python3 tools/reforco/gerar.py --conferir (também executa os códigos e as consultas SQL)

A alternativa correta é escrita primeiro em cada Q(...); a posição do gabarito é distribuída
em rodízio por eixo, de forma determinística. Os ids continuam a numeração V de cada eixo.
"""
import collections
import importlib
import json
import os
import sqlite3
import subprocess
import sys
import tempfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comum import RAIZ, SECOES, EIXOS  # noqa: E402

MODULOS = ["dados_proc_gov", "dados_prog_bd", "dados_web_arq_devops", "dados_so_redes_serv", "dados_seg_nuvem"]
# Último número V já usado por eixo nos outros arquivos do banco (nov/2026). Não alterar:
# os ids das questões de reforço dependem destes valores.
BASE = {"PROC": 55, "PROG": 38, "GOV": 66, "BD": 5, "WEB": 6, "SEG": 30, "ARQ": 45,
        "DEVOPS": 44, "SO": 15, "REDES": 27, "SERV": 22, "NUVEM": 7}
LETRAS = "ABCDE"
DATA = "2026-11-16"


def executar(ver):
    tipo = ver[0]
    if tipo == "sql":
        _, preparo, consulta, _ = ver
        con = sqlite3.connect(":memory:")
        con.executescript(preparo)
        linhas = con.execute(consulta.rstrip().rstrip(";")).fetchall()
        return "\n".join("|".join("NULL" if v is None else str(v) for v in l) for l in linhas)
    if tipo == "fifo":
        _, refs, quadros, _ = ver
        mem, faltas = [], 0
        for r in refs:
            if r not in mem:
                faltas += 1
                if len(mem) == quadros:
                    mem.pop(0)
                mem.append(r)
        return faltas
    _, codigo, _ = ver
    with tempfile.TemporaryDirectory() as d:
        if tipo == "python":
            return subprocess.run([sys.executable, "-c", codigo], capture_output=True, text=True, check=True).stdout.strip()
        if tipo == "php":
            arq = os.path.join(d, "a.php")
            open(arq, "w").write(codigo)
            return subprocess.run(["php", arq], capture_output=True, text=True, check=True).stdout.strip()
        if tipo == "c":
            arq = os.path.join(d, "a.c")
            open(arq, "w").write(codigo)
            subprocess.run(["gcc", "-std=c99", "-Wall", "-o", os.path.join(d, "a"), arq], check=True)
            return subprocess.run([os.path.join(d, "a")], capture_output=True, text=True, check=True).stdout.strip()
    raise ValueError(tipo)


def montar(q, qid, pos):
    nome, titulo = SECOES[q["ref"]]
    mod, sec = q["ref"].split("/")
    erradas = q["erradas"][:]
    giro = pos % 4
    erradas = erradas[giro:] + erradas[:giro]
    ordem = erradas[:pos] + [q["certa"]] + erradas[pos:]
    alts = dict(zip(LETRAS, ordem))
    gab = LETRAS[pos]
    return collections.OrderedDict([
        ("id", qid), ("concursos", ["banestes-2027-analista-ti"]), ("banca_estilo", "FCC"),
        ("bloco", "especificos"), ("materia", "Desenvolvimento de Sistemas"), ("eixo", EIXOS[q["eixo"]]),
        ("topico", q["topico"]),
        ("ref_apostila", {"modulo": mod, "secao": sec, "titulo": titulo,
                          "link": "[[%s#%s. %s]]" % (nome, sec, titulo)}),
        ("origem", {"tipo": "simulado", "fonte": "Inédita de reforço (nov/2026) – Apostila %s §%s" % (mod, sec),
                    "id_pai": None, "anulada": False}),
        ("formato", "multipla_5"), ("dificuldade", q["dif"]), ("texto_base", None),
        ("enunciado", q["enun"]), ("imagem", None), ("alternativas", alts), ("gabarito", gab),
        ("comentario", "**Gabarito: %s.** %s\n\nRevisar: Apostila %s, §%s." % (gab, q["exp"], mod, sec)),
        ("tags", ["reforco"] + q["tags"]), ("embaralhavel", True), ("status", "validada"),
        ("validacao", {"por": "autor", "em": DATA,
                       "obs": "Inédita de reforço; conferida pelo autor (códigos e SQL conferidos por execução)."}),
        ("versao", 1),
    ])


def main():
    conferir = "--conferir" in sys.argv
    cont = collections.Counter()
    gab = collections.defaultdict(collections.Counter)
    objs, ok, enuns = [], True, set()
    for nome in MODULOS:
        for q in importlib.import_module(nome).QUESTOES:
            e = q["eixo"]
            pos = (cont[e] * 2 + len(e)) % 5
            cont[e] += 1
            qid = "ESP-%s-V%03d" % (e, BASE[e] + cont[e])
            alts = [q["certa"]] + q["erradas"]
            if len(set(a.lower() for a in alts)) != 5:
                print("ALTERNATIVAS REPETIDAS:", qid, q["enun"][:60]); ok = False
            if q["enun"] in enuns:
                print("ENUNCIADO REPETIDO:", qid); ok = False
            enuns.add(q["enun"])
            if conferir and q["ver"]:
                obtido = executar(q["ver"])
                if obtido != q["ver"][-1]:
                    print("SAÍDA DIFERENTE:", qid, repr(obtido), "esperado", repr(q["ver"][-1])); ok = False
                else:
                    print("conferida por execução:", qid, repr(obtido))
            objs.append(montar(q, qid, pos))
            gab[e][LETRAS[pos]] += 1
    for e in BASE:
        print("%-7s %3d | gab %s" % (e, cont[e], " ".join("%s=%d" % (l, gab[e][l]) for l in LETRAS)))
    print("total", len(objs))
    if not ok:
        sys.exit(1)
    with open(os.path.join(RAIZ, "banco", "reforco.js"), "w", encoding="utf-8") as f:
        f.write("/*\n * Reforço — questões inéditas para temas do edital com poucas questões (Específicos).\n"
                " * Gerado por tools/reforco/gerar.py a partir de dados_*.py (não editar à mão).\n"
                " * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.\n */\n")
        f.write("window.BANCO = window.BANCO || [];\n")
        for o in objs:
            f.write("\nBANCO.push(" + json.dumps(o, ensure_ascii=False, indent=2) + ");\n")


if __name__ == "__main__":
    main()
