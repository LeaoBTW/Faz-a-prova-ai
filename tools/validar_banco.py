#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Valida o banco de questões (banco/*.js).

Confere esquema, campos obrigatórios, ids únicos, alternativas, gabarito,
matérias, eixos, textos-base e imagens. Sai com código 1 se houver erro.

Uso:
    python3 tools/validar_banco.py [--raiz CAMINHO] [--quieto]
"""
import argparse
import collections
import glob
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import catalogo as C  # noqa: E402

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

RE_ID_GERAL = re.compile(r"^(LP|RLE|ATU|ETI)-(V?\d{3,4})$")
RE_ID_ESP = re.compile(r"^ESP-(%s)-(V?\d{3,4})$" % "|".join(C.EIXOS))
PREFIXO_MATERIA = {v[2]: v[0] for v in C.GERAIS.values()}

OBRIGATORIOS = ["id", "concursos", "bloco", "materia", "eixo", "topico", "ref_apostila", "origem",
                "formato", "dificuldade", "texto_base", "enunciado", "imagem", "alternativas",
                "gabarito", "comentario", "tags", "embaralhavel", "status", "versao"]


def extrair_chamadas(texto, nome="BANCO"):
    """Encontra NOME.push( {json} ) respeitando strings e comentários; devolve [(linha, json_txt)]."""
    saida = []
    i, n = 0, len(texto)
    alvo = nome + ".push("
    while i < n:
        c = texto[i]
        if texto.startswith("//", i):
            j = texto.find("\n", i)
            i = n if j < 0 else j
            continue
        if texto.startswith("/*", i):
            j = texto.find("*/", i + 2)
            i = n if j < 0 else j + 2
            continue
        if c in "\"'`":
            j = i + 1
            while j < n and texto[j] != c:
                j += 2 if texto[j] == "\\" else 1
            i = j + 1
            continue
        if texto.startswith(alvo, i):
            ini = i + len(alvo)
            prof, j, em_str = 0, ini, None
            while j < n:
                ch = texto[j]
                if em_str:
                    if ch == "\\":
                        j += 2
                        continue
                    if ch == em_str:
                        em_str = None
                elif ch in "\"'":
                    em_str = ch
                elif ch in "({[":
                    prof += 1
                elif ch in ")}]":
                    if prof == 0:
                        break
                    prof -= 1
                j += 1
            saida.append((texto.count("\n", 0, i) + 1, texto[ini:j].strip()))
            i = j + 1
            continue
        i += 1
    return saida


ARQ_CORRECOES = "correcoes.js"
CAMPOS_CORRIGIVEIS = set(OBRIGATORIOS) - {"id"} | {"validacao", "banca_estilo"}


def carregar_correcoes(raiz):
    """Lê banco/correcoes.js: CORRECOES.push({"id", "campos": {...}, "motivo"})."""
    caminho = os.path.join(raiz, "banco", ARQ_CORRECOES)
    corr, erros = [], []
    if not os.path.exists(caminho):
        return corr, erros
    with open(caminho, encoding="utf-8") as f:
        txt = f.read()
    for linha, js in extrair_chamadas(txt, "CORRECOES"):
        try:
            obj = json.loads(js)
        except json.JSONDecodeError as e:
            erros.append("%s:%d: correção não é JSON válido (%s)" % (ARQ_CORRECOES, linha, e))
            continue
        obj["__arquivo"] = "%s:%d" % (ARQ_CORRECOES, linha)
        corr.append(obj)
    return corr, erros


def aplicar_correcoes(questoes, correcoes):
    """Aplica as correções (troca de campos inteiros), como o app faz em app/dados.js."""
    erros = []
    por_id = {}
    for q in questoes:
        por_id.setdefault(q.get("id"), q)
    for c in correcoes:
        onde = c["__arquivo"]
        q = por_id.get(c.get("id"))
        campos = c.get("campos")
        if q is None:
            erros.append("%s: correção para id inexistente %r" % (onde, c.get("id")))
            continue
        if not isinstance(campos, dict) or not campos:
            erros.append("%s: correção sem campos" % onde)
            continue
        if not str(c.get("motivo") or "").strip():
            erros.append("%s: correção sem motivo" % onde)
        if q["__arquivo"].startswith("variacoes-"):
            erros.append("%s: %s é gerada (variacoes-*.js); corrija na fonte do gerador" % (onde, c["id"]))
        for k, v in campos.items():
            if k not in CAMPOS_CORRIGIVEIS:
                erros.append("%s: campo não corrigível %r" % (onde, k))
                continue
            q[k] = v
        q["__corrigida"] = True
    return erros


def carregar(raiz, correcoes=True):
    questoes, textos, erros = [], [], []
    for caminho in sorted(glob.glob(os.path.join(raiz, "banco", "*.js"))):
        nome = os.path.basename(caminho)
        if nome == ARQ_CORRECOES:
            continue
        with open(caminho, encoding="utf-8") as f:
            txt = f.read()
        var = "TEXTOS_BASE" if nome == "textos-base.js" else "BANCO"
        for linha, js in extrair_chamadas(txt, var):
            try:
                obj = json.loads(js)
            except json.JSONDecodeError as e:
                erros.append("%s:%d: objeto não é JSON válido (%s)" % (nome, linha, e))
                continue
            obj["__arquivo"] = "%s:%d" % (nome, linha)
            (textos if var == "TEXTOS_BASE" else questoes).append(obj)
    if correcoes:
        corr, e1 = carregar_correcoes(raiz)
        erros += e1 + aplicar_correcoes(questoes, corr)
    return questoes, textos, erros


def validar(questoes, textos, raiz):
    erros, avisos = [], []
    ids_textos = set()
    for t in textos:
        if not t.get("id") or not t.get("texto"):
            erros.append("%s: texto-base sem id ou texto" % t["__arquivo"])
        if t.get("id") in ids_textos:
            erros.append("%s: texto-base com id repetido %s" % (t["__arquivo"], t.get("id")))
        ids_textos.add(t.get("id"))
    vistos = {}
    for q in questoes:
        onde = "%s (%s)" % (q.get("id", "?"), q["__arquivo"])

        def erro(msg):
            erros.append("%s: %s" % (onde, msg))
        for campo in OBRIGATORIOS:
            if campo not in q:
                erro("campo obrigatório ausente: %s" % campo)
        qid = q.get("id")
        if not isinstance(qid, str):
            erro("id inválido")
            continue
        if qid in vistos:
            erro("id repetido (também em %s)" % vistos[qid])
        vistos[qid] = q["__arquivo"]
        bloco, materia, eixo = q.get("bloco"), q.get("materia"), q.get("eixo")
        if bloco not in C.BLOCOS:
            erro("bloco inválido: %r" % bloco)
        if bloco == "gerais":
            m = RE_ID_GERAL.match(qid)
            if not m:
                erro("id fora do padrão dos Gerais (LP-0001, RLE-V001...)")
            elif PREFIXO_MATERIA[m.group(1)] != materia:
                erro("prefixo do id não bate com a matéria %r" % materia)
            if materia not in PREFIXO_MATERIA.values():
                erro("matéria inválida: %r" % materia)
            if eixo is not None:
                erro("questão dos Gerais não tem eixo")
        elif bloco == "especificos":
            m = RE_ID_ESP.match(qid)
            if materia != C.MATERIA_ESPECIFICOS:
                erro("matéria dos Específicos deve ser %r" % C.MATERIA_ESPECIFICOS)
            if eixo not in C.SIGLA_POR_EIXO:
                erro("eixo inválido: %r" % eixo)
            elif not m:
                erro("id fora do padrão dos Específicos (ESP-BD-0001, ESP-BD-V001...)")
            elif C.SIGLA_POR_EIXO[eixo] != m.group(1):
                erro("sigla do id não bate com o eixo %r" % eixo)
        if C.CONCURSO not in (q.get("concursos") or []):
            erro("concursos deve incluir %r" % C.CONCURSO)
        if not str(q.get("topico") or "").strip():
            erro("tópico vazio")
        if not str(q.get("enunciado") or "").strip():
            erro("enunciado vazio")
        ref = q.get("ref_apostila")
        if not isinstance(ref, dict) or not all(ref.get(k) for k in ("modulo", "secao", "link")):
            erro("ref_apostila precisa de modulo, secao e link")
        elif not re.match(r"^\[\[.+#.+\]\]$", ref["link"]):
            erro("ref_apostila.link deve ser um link wiki [[arquivo#seção]]")
        elif ref.get("modulo") not in C.MODULOS:
            erro("módulo da apostila inexistente: %r" % ref.get("modulo"))
        org = q.get("origem")
        if not isinstance(org, dict):
            erro("origem ausente")
            org = {}
        if org.get("tipo") not in C.TIPOS_ORIGEM:
            erro("origem.tipo inválido: %r" % org.get("tipo"))
        if not str(org.get("fonte") or "").strip():
            erro("origem.fonte é obrigatório")
        if org.get("tipo") == "variacao" and not org.get("id_pai"):
            erro("variação precisa de origem.id_pai")
        if not isinstance(org.get("anulada", False), bool):
            erro("origem.anulada deve ser booleano")
        if org.get("tipo") == "prova_real" and not (org.get("prova") and isinstance(org.get("numero"), int)):
            erro("prova real precisa de origem.prova e origem.numero")
        fmt = q.get("formato")
        alts = q.get("alternativas")
        gab = q.get("gabarito")
        anulada = bool(org.get("anulada"))
        if fmt not in C.FORMATOS:
            erro("formato inválido: %r" % fmt)
        elif fmt in ("multipla_5", "multipla_4"):
            letras = "ABCDE" if fmt == "multipla_5" else "ABCD"
            if not isinstance(alts, dict) or "".join(sorted(alts)) != letras:
                erro("%s exige alternativas %s" % (fmt, "–".join([letras[0], letras[-1]])))
            else:
                textos_alt = [str(v).strip() for v in alts.values()]
                if any(not v for v in textos_alt):
                    erro("alternativa vazia")
                if len(set(v.lower() for v in textos_alt)) != len(textos_alt):
                    erro("alternativas repetidas")
            if anulada:
                if gab not in (None, *letras):
                    erro("gabarito inválido: %r" % gab)
            elif gab not in letras:
                erro("gabarito inválido: %r (esperado uma letra %s)" % (gab, letras))
        elif fmt == "certo_errado":
            if alts not in (None, {}):
                erro("certo_errado não tem alternativas")
            if gab not in ("C", "E") and not anulada:
                erro("gabarito de certo_errado deve ser 'C' ou 'E'")
        if q.get("dificuldade") not in (1, 2, 3):
            erro("dificuldade deve ser 1, 2 ou 3")
        st = q.get("status")
        if st not in C.STATUS:
            erro("status inválido: %r" % st)
        if q.get("texto_base") and q["texto_base"] not in ids_textos:
            erro("texto_base inexistente: %r" % q["texto_base"])
        img = q.get("imagem")
        if img and not os.path.exists(os.path.join(raiz, img)):
            erro("imagem não encontrada: %s" % img)
        if not isinstance(q.get("tags"), list):
            erro("tags deve ser lista")
        if not isinstance(q.get("embaralhavel"), bool):
            erro("embaralhavel deve ser booleano")
        if not isinstance(q.get("versao"), int):
            erro("versao deve ser inteiro")
        if st in ("rejeitada", "duvida") and not str((q.get("validacao") or {}).get("obs") or "").strip():
            erro("status %r exige validacao.obs com o motivo" % st)
        if st == "validada" and not str(q.get("comentario") or "").strip() and org.get("tipo") == "variacao":
            avisos.append("%s: variação validada sem comentário" % onde)
    # id_pai precisa existir
    for q in questoes:
        pai = (q.get("origem") or {}).get("id_pai")
        if pai and pai not in vistos:
            erros.append("%s: id_pai inexistente %r" % (q.get("id"), pai))
    return erros, avisos


def resumo(questoes):
    por = collections.Counter()
    for q in questoes:
        por[q.get("eixo") or q.get("materia")] += 1
    st = collections.Counter(q.get("status") for q in questoes)
    fm = collections.Counter(q.get("formato") for q in questoes)
    return por, st, fm


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--raiz", default=RAIZ)
    ap.add_argument("--quieto", action="store_true")
    args = ap.parse_args()
    questoes, textos, erros = carregar(args.raiz)
    e2, avisos = validar(questoes, textos, args.raiz)
    erros += e2
    por, st, fm = resumo(questoes)
    if not args.quieto:
        print("Questões: %d | textos-base: %d" % (len(questoes), len(textos)))
        print("Status: " + ", ".join("%s=%d" % kv for kv in sorted(st.items())))
        print("Correções aplicadas (banco/correcoes.js): %d" % sum(1 for q in questoes if q.get("__corrigida")))
        print("Formatos: " + ", ".join("%s=%d" % kv for kv in sorted(fm.items())))
        for k, v in sorted(por.items()):
            print("  %-45s %4d" % (k, v))
    for a in avisos:
        print("AVISO:", a)
    for e in erros:
        print("ERRO:", e)
    if erros:
        print("\n%d erro(s) encontrado(s)." % len(erros))
        sys.exit(1)
    print("OK: nenhum erro.")


if __name__ == "__main__":
    main()
