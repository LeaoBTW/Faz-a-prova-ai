#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Monta banco/correcoes-comentarios.js a partir de tools/comentarios/*.txt.

Os comentários das questões IMPORTADAS (banco/gerais-*.js e banco/esp-*.js, gerados por
tools/importar.py) eram, em geral, de uma linha. Os comentários revisados ficam nos .txt desta
pasta e viram correções (CORRECOES.push) aplicadas no carregamento, depois de banco/correcoes.js,
para sobreviver a uma reimportação.

Formato dos .txt: cada questão começa com uma linha "@@ <id>"; o texto seguinte, até o próximo
"@@", é o comentário em Markdown. Linhas antes do primeiro "@@" são ignoradas.
O comentário deve começar com "**Gabarito: X.**" (ou "**Gabarito: Certo.**"/"**Gabarito: Errado.**").

Uso:
    python3 tools/comentarios/montar.py             (gera o arquivo)
    python3 tools/comentarios/montar.py --conferir  (falha se houver erro ou se o arquivo estiver desatualizado)
"""
import glob
import json
import os
import re
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(os.path.dirname(AQUI))
sys.path.insert(0, os.path.dirname(AQUI))
import validar_banco as V  # noqa: E402

SAIDA = os.path.join(RAIZ, "banco", "correcoes-comentarios.js")
MOTIVO = "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
CABECALHO = """/*
 * GERADO por tools/comentarios/montar.py a partir de tools/comentarios/*.txt. Não edite aqui.
 * Comentários revisados das questões importadas: justificam o gabarito e as alternativas erradas.
 * Aplicado depois de banco/correcoes.js (no app e em tools/validar_banco.py).
 */
window.CORRECOES = window.CORRECOES || [];
"""


def ler():
    itens, erros = [], []
    for caminho in sorted(glob.glob(os.path.join(AQUI, "*.txt"))):
        nome = os.path.basename(caminho)
        atual, linhas = None, []
        with open(caminho, encoding="utf-8") as f:
            conteudo = f.read().splitlines()
        for n, linha in enumerate(conteudo + ["@@ FIM"], 1):
            m = re.match(r"^@@\s+(\S+)\s*$", linha)
            if m:
                if atual:
                    itens.append((atual[0], "\n".join(linhas).strip(), "%s:%d" % (nome, atual[1])))
                atual, linhas = (m.group(1), n), []
            elif atual:
                linhas.append(linha.rstrip())
    return itens, erros


def conferir(itens):
    erros = []
    qs, _, e0 = V.carregar(RAIZ, correcoes=False)
    erros += e0
    por_id = {q["id"]: q for q in qs}
    vistos = {}
    for qid, txt, onde in itens:
        q = por_id.get(qid)
        if qid in vistos:
            erros.append("%s: %s repetido (já em %s)" % (onde, qid, vistos[qid]))
        vistos[qid] = onde
        if q is None:
            erros.append("%s: id inexistente %s" % (onde, qid))
            continue
        if q["__arquivo"].startswith(("variacoes-", "reforco")):
            erros.append("%s: %s é gerada; corrija na fonte do gerador" % (onde, qid))
        if not txt:
            erros.append("%s: %s sem comentário" % (onde, qid))
            continue
        g = q.get("gabarito")
        if q.get("formato") == "certo_errado":
            g = {"C": "Certo", "E": "Errado"}.get(g, g)
        m = re.match(r"^\*\*Gabarito: ([^.*]+)\.\*\*", txt)
        if g and (not m or m.group(1) != g):
            erros.append("%s: %s deve começar com **Gabarito: %s.**" % (onde, qid, g))
    return erros


def gerar(itens):
    partes = [CABECALHO]
    for qid, txt, _ in itens:
        obj = {"id": qid, "campos": {"comentario": txt}, "motivo": MOTIVO}
        partes.append("\nCORRECOES.push(%s);\n" % json.dumps(obj, ensure_ascii=False, indent=2))
    return "".join(partes)


def main():
    itens, erros = ler()
    erros += conferir(itens)
    for e in erros:
        print("ERRO:", e)
    novo = gerar(itens)
    if "--conferir" in sys.argv:
        atual = open(SAIDA, encoding="utf-8").read() if os.path.exists(SAIDA) else ""
        if atual != novo:
            print("banco/correcoes-comentarios.js desatualizado: rode python3 tools/comentarios/montar.py")
            sys.exit(1)
        if erros:
            sys.exit(1)
        print("OK: %d comentários revisados, arquivo em dia." % len(itens))
        return
    if erros:
        sys.exit(1)
    with open(SAIDA, "w", encoding="utf-8") as f:
        f.write(novo)
    print("%d comentários gravados em banco/correcoes-comentarios.js" % len(itens))


if __name__ == "__main__":
    main()
