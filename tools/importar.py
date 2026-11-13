#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Importa as questões da apostila e das provas (Markdown do vault) para banco/*.js.

Uso:
    python3 tools/importar.py --fontes CAMINHO/DAS/FONTES [--data AAAA-MM-DD]

A pasta de fontes deve conter:
    apostila/01 - Língua Portuguesa.md ... 07 - Nuvem, TypeScript e Front-end moderno.md
    provas/Simulado 2021 - Desenvolvimento de Sistemas.md
    provas/Simulado 2024 - Desenvolvimento de Sistemas.md
    provas/Simulado FCC 1 - Específicos e Bancários.md
    provas/2024 - Q16 curva S.png

Gera banco/gerais-*.js, banco/esp-*.js, banco/textos-base.js, copia a imagem para img/
e escreve docs/relatorio-importacao.md. Só biblioteca padrão.

Atenção: rodar de novo sobrescreve os arquivos gerados (as variações dos agentes
ficam em banco/variacoes-*.js e não são tocadas).
"""
import argparse
import collections
import json
import os
import re
import shutil
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import catalogo as C  # noqa: E402

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ---------------------------------------------------------------------------
# utilidades
# ---------------------------------------------------------------------------

def ler(caminho):
    with open(caminho, encoding="utf-8") as f:
        return f.read().replace("\r\n", "\n")


def limpar_bloco(linhas):
    """Remove linhas vazias nas pontas e a indentação comum."""
    linhas = list(linhas)
    while linhas and not linhas[0].strip():
        linhas.pop(0)
    while linhas and (not linhas[-1].strip() or linhas[-1].strip() == "---"):
        linhas.pop()
    ind = None
    for l in linhas:
        if l.strip():
            n = len(l) - len(l.lstrip(" "))
            ind = n if ind is None else min(ind, n)
    ind = ind or 0
    out = [l[ind:] if len(l) >= ind else l.lstrip(" ") for l in linhas]
    return "\n".join(x.rstrip() for x in out).strip("\n")


def colapsar_vazias(texto):
    return re.sub(r"\n{3,}", "\n\n", texto)


ESTILOS = {"fcc": "FCC", "fgv": "FGV", "access": "ACCESS", "cespe": "Cebraspe",
           "cebraspe": "Cebraspe", "vunesp": "Vunesp", "cesgranrio": "Cesgranrio"}


def extrair_estilo(texto):
    """Tira a etiqueta '(Estilo FCC)' / '(Certo/Errado)' do início do enunciado."""
    estilo = None
    ce = False
    m = re.match(r"^\s*\(([^)]{0,60})\)\s*", texto)
    if m and re.search(r"estilo|certo|errado", m.group(1), re.I):
        etq = m.group(1)
        if re.search(r"certo\s*/\s*errado", etq, re.I):
            ce = True
        m2 = re.search(r"estilo\s+([A-Za-zÀ-ú]+)", etq, re.I)
        if m2:
            estilo = ESTILOS.get(m2.group(1).lower(), m2.group(1))
        texto = texto[m.end():]
    return estilo, ce, texto


# ---------------------------------------------------------------------------
# apostila
# ---------------------------------------------------------------------------
RE_INICIO = [
    re.compile(r"^\*\*Questão\s+(\d+)\.?\*\*\.?\s*(.*)$"),
    re.compile(r"^\*\*Q(\d+)\.?\*\*\.?\s*(.*)$"),
    re.compile(r"^\*\*(\d+)\.\*\*\s*(.*)$"),
]
RE_INICIO_NUM = re.compile(r"^(\d+)\.\s+(.*)$")
RE_ALT = re.compile(r"^\s*([A-Ea-e])\)\s+(.*)$")
RE_GAB = [
    re.compile(r"^\*\*Q?(\d+)\s*[–—-]\s*([A-Ea-e]|Certo|Errado)\.?\*\*[.:]?\s*(.*)$"),
    re.compile(r"^(\d+)\.\s*\*\*([A-Ea-e]|Certo|Errado)\.?\*\*[.:]?\s*(.*)$"),
    re.compile(r"^\*\*(\d+)\.\s*([A-Ea-e]|Certo|Errado)\.?\*\*[.:]?\s*(.*)$"),
]
RE_FONTES = re.compile(r"^\**Fontes(\s+de apoio)?\**\s*:?", re.I)
LETRAS = "ABCDE"


def titulo_topico(titulo):
    t = titulo.replace("⭐", "").strip()
    t = re.sub(r"^Complemento do edital 2027:\s*", "", t)
    t = re.sub(r"^Complementos FCC:\s*", "", t)
    t = t.split(";")[0].strip()
    if len(t) > 70:
        t = re.sub(r"\s*\([^)]*\)", "", t).strip()
    if len(t) > 90:
        t = t[:87].rstrip(" ,") + "…"
    return t[:1].upper() + t[1:]


def link_wiki(mod, num, titulo):
    """Link wiki do Obsidian para a seção. O Obsidian não aceita |, #, ^, [ e ] no alvo de um
    link de cabeçalho (o "#" de "C#" seria lido como subseção) e casa o cabeçalho ignorando esses
    caracteres; quando algum é removido, o título original vai como texto exibido (alias)."""
    original = "%d. %s" % (num, titulo)
    alvo = re.sub(r"[|#^\[\]]", " ", original)
    alvo = re.sub(r"\s+", " ", alvo).strip()
    if alvo != original:
        return "[[%s#%s|%s §%s]]" % (C.MODULOS[mod], alvo, mod, original.replace("|", "/").replace("[", "(").replace("]", ")"))
    return "[[%s#%s]]" % (C.MODULOS[mod], alvo)


def dividir_inline(conteudo, proxima):
    """'X b) Y c) Z' -> ['X', 'Y', 'Z'] começando na letra `proxima` (b, c...)."""
    partes = [conteudo]
    idx = "abcde".index(proxima)
    while idx < 5:
        letra = "abcde"[idx]
        ult = partes[-1]
        m = re.search(r"(?:^|\s)(%s|%s)\)\s+" % (letra, letra.upper()), ult)
        if not m or m.start() == 0:
            break
        partes[-1] = ult[:m.start()].rstrip()
        partes.append(ult[m.end():])
        idx += 1
    return partes


def parse_alternativas(linhas):
    """Separa enunciado e alternativas a)–e) (em linhas ou na mesma linha)."""
    enun, alts = [], []
    em_codigo = False
    for l in linhas:
        if l.strip().startswith("```"):
            em_codigo = not em_codigo
            (alts[-1].append(l) if alts else enun.append(l))
            continue
        if em_codigo:
            (alts[-1].append(l) if alts else enun.append(l))
            continue
        m = RE_ALT.match(l)
        esperado = "abcde"[len(alts)] if len(alts) < 5 else None
        if m and esperado and m.group(1).lower() == esperado:
            pedacos = dividir_inline(m.group(2), "abcde"[len(alts) + 1]) if len(alts) < 4 else [m.group(2)]
            for p in pedacos:
                alts.append([p])
            continue
        if alts:
            alts[-1].append(l)
        else:
            enun.append(l)
    alts_txt = [limpar_bloco(a) for a in alts]
    return limpar_bloco(enun), alts_txt


def parse_gabarito(linhas_callout):
    """Recebe as linhas do callout (sem '> ') e devolve {num: (resp, comentario)}."""
    gab = collections.OrderedDict()
    atual = None
    repetidos = []
    vazia_antes = False
    for l in linhas_callout:
        s = l.strip()
        if not s:
            vazia_antes = True
            continue
        achou = None
        for r in RE_GAB:
            m = r.match(s)
            if m:
                achou = m
                break
        if achou:
            n = int(achou.group(1))
            if n in gab:
                repetidos.append(n)
            resp = achou.group(2)
            resp = resp.upper() if len(resp) == 1 else resp.capitalize()
            gab[n] = [resp, achou.group(3).strip()]
            atual = n
            vazia_antes = False
        elif atual is not None and not vazia_antes:
            gab[atual][1] = (gab[atual][1] + "\n" + s).strip()
    return gab, repetidos


def ler_modulo(caminho, mod):
    L = ler(caminho).split("\n")
    titulos = {}
    secoes_q = []  # (num_secao, titulo_secao, titulo_sub, ini, fim)
    em_codigo = False
    sec_num, sec_tit = None, None
    cabecalhos = []  # (linha, nivel, texto)
    for i, l in enumerate(L):
        if l.strip().startswith("```"):
            em_codigo = not em_codigo
            continue
        if em_codigo:
            continue
        m = re.match(r"^(#{1,6})\s+(.*)$", l)
        if m:
            cabecalhos.append((i, len(m.group(1)), m.group(2).strip()))
    for k, (i, nivel, texto) in enumerate(cabecalhos):
        if nivel == 2:
            m = re.match(r"^(\d+)\.\s+(.*)$", texto)
            if m:
                sec_num, sec_tit = int(m.group(1)), m.group(2).strip()
                titulos[sec_num] = sec_tit
            else:
                sec_num, sec_tit = None, None
        if nivel >= 2 and "Questões de fixação" in texto and sec_num is not None:
            fim = len(L)
            for (j, n2, _t) in cabecalhos[k + 1:]:
                if n2 <= nivel:
                    fim = j
                    break
            secoes_q.append((sec_num, sec_tit, texto, i + 1, fim))
    return L, titulos, secoes_q


def parse_secao(L, ini, fim):
    """Devolve (questoes, gabarito, avisos). questoes: lista de (num, linhas)."""
    corpo, callouts = [], []
    i = ini
    em_codigo = False
    parou = False
    while i < fim:
        l = L[i]
        if not em_codigo and l.startswith("> [!"):
            bloco = []
            eh_gab = l.lower().startswith("> [!success]")
            i += 1
            while i < fim and L[i].startswith(">"):
                bloco.append(L[i][2:] if L[i].startswith("> ") else L[i][1:])
                i += 1
            if eh_gab:
                callouts.append(bloco)
            continue
        if l.strip().startswith("```"):
            em_codigo = not em_codigo
        if not em_codigo and RE_FONTES.match(l.strip()):
            parou = True
        if not parou:
            corpo.append(l)
        i += 1
    # estilo de numeração
    usa_negrito = any(r.match(l) for l in corpo for r in RE_INICIO)
    questoes = []
    preambulo = []
    em_codigo = False
    for l in corpo:
        if l.strip().startswith("```"):
            em_codigo = not em_codigo
            if questoes:
                questoes[-1][1].append(l)
            continue
        m = None
        if not em_codigo:
            if usa_negrito:
                for r in RE_INICIO:
                    m = r.match(l)
                    if m:
                        break
            else:
                mm = RE_INICIO_NUM.match(l)
                ult = questoes[-1][0] if questoes else 0
                if mm and int(mm.group(1)) == ult + 1:
                    m = mm
        if m:
            questoes.append((int(m.group(1)), [m.group(2)]))
        elif questoes:
            questoes[-1][1].append(l)
        else:
            preambulo.append(l)
    gab = collections.OrderedDict()
    avisos = []
    for bloco in callouts:
        g, rep = parse_gabarito(bloco)
        for n in rep:
            avisos.append("gabarito repetido para a questão %d" % n)
        for n, v in g.items():
            if n in gab:
                avisos.append("gabarito repetido para a questão %d" % n)
            gab[n] = v
    return questoes, gab, avisos, limpar_bloco(preambulo)


def texto_base_da_secao(L, mod, sec_num, ini_secao, preambulo, nums):
    """Texto introdutório antes da 1ª questão vira texto-base (ex.: trecho em inglês)."""
    linhas = [re.sub(r"^> ?", "", l) for l in preambulo.split("\n")]
    texto = "\n".join(linhas).strip()
    if re.search(r"in[ií]cio do t[oó]pico", texto, re.I):
        # anexa o primeiro bloco de código da seção (a base de exemplo)
        i = ini_secao
        while i < len(L) and not L[i].startswith("```"):
            i += 1
        j = i + 1
        while j < len(L) and not L[j].startswith("```"):
            j += 1
        intro = ""
        k = i - 1
        while k > ini_secao and not L[k].strip():
            k -= 1
        if k > ini_secao and not L[k].startswith("#"):
            intro = L[k].strip() + "\n\n"
        texto = intro + "\n".join(L[i:j + 1])
    alvo = set(nums)
    m = re.search(r"quest[õo]es\s+(\d+)\s*(?:e|a)\s*(\d+)", preambulo, re.I)
    if m:
        a, b = int(m.group(1)), int(m.group(2))
        alvo = set(range(a, b + 1))
    tid = "TB-APO-%s-%02d" % (mod, sec_num)
    return {"id": tid, "fonte": "Apostila %s §%d" % (mod, sec_num), "texto": texto}, alvo


def exemplo_de_subsecao(L, mod, a, b, textos_base):
    """Primeiro bloco de código da subseção ### a.b (exemplo citado no enunciado)."""
    tid = "TB-APO-%s-%s-%s" % (mod, a, b)
    if any(t["id"] == tid for t in textos_base):
        return tid
    ini = next((i for i, l in enumerate(L) if l.startswith("### %s.%s " % (a, b))), None)
    if ini is None:
        return None
    i = ini + 1
    while i < len(L) and not L[i].startswith("```") and not L[i].startswith("#"):
        i += 1
    if i >= len(L) or not L[i].startswith("```"):
        return None
    j = i + 1
    while j < len(L) and not L[j].startswith("```"):
        j += 1
    texto = "Exemplo da seção %s.%s da apostila:\n\n%s" % (a, b, "\n".join(L[i:j + 1]))
    textos_base.append({"id": tid, "fonte": "Apostila %s §%s.%s" % (mod, a, b), "texto": texto})
    return tid


def importar_apostila(dir_apostila, data, relatorio):
    resultado = []
    textos_base = []
    titulos_todos = {}
    for mod, nome in C.MODULOS.items():
        caminho = os.path.join(dir_apostila, nome + ".md")
        L, titulos, secoes = ler_modulo(caminho, mod)
        titulos_todos[mod] = titulos
        for (sec_num, sec_tit, sub_tit, ini, fim) in secoes:
            questoes, gab, avisos, preambulo = parse_secao(L, ini, fim)
            nums = [q[0] for q in questoes]
            tb, tb_alvo = None, set()
            if preambulo.strip():
                ini_sec = max(j for j in range(ini) if re.match(r"^## %d\. " % sec_num, L[j]))
                tb, tb_alvo = texto_base_da_secao(L, mod, sec_num, ini_sec, preambulo, nums)
                textos_base.append(tb)
            for a in avisos:
                relatorio["avisos"].append("Apostila %s §%d: %s" % (mod, sec_num, a))
            sobra = sorted(set(gab) - set(nums))
            if sobra:
                relatorio["avisos"].append("Apostila %s §%d: gabarito sem questão correspondente: %s" % (mod, sec_num, sobra))
            if len(nums) != len(set(nums)):
                relatorio["avisos"].append("Apostila %s §%d: numeração repetida %s" % (mod, sec_num, nums))
            for num, linhas in questoes:
                bruto = "\n".join(linhas)
                estilo, ce_tag, _ = extrair_estilo(linhas[0])
                linhas = list(linhas)
                _, _, linhas[0] = extrair_estilo(linhas[0])
                enun, alts = parse_alternativas(linhas)
                enun = re.sub(r"\s*\(\s*\)\s*Certo\s*\(\s*\)\s*Errado\s*$", "", enun).strip()
                enun = colapsar_vazias(enun)
                resp, coment = gab.get(num, (None, ""))
                problemas = []
                tb_q = tb["id"] if tb and num in tb_alvo else None
                mref = re.search(r"exemplo da se[cç][aã]o (\d+)\.(\d+)", enun)
                if mref and not tb_q:
                    tb_q = exemplo_de_subsecao(L, mod, mref.group(1), mref.group(2), textos_base)
                    if not tb_q:
                        problemas.append("exemplo citado da seção %s.%s não encontrado" % mref.groups())
                if resp in ("Certo", "Errado"):
                    formato = "certo_errado"
                    gabarito = "C" if resp == "Certo" else "E"
                    if alts:
                        problemas.append("item Certo/Errado com alternativas")
                elif resp is None:
                    formato = "multipla_5" if len(alts) == 5 else ("certo_errado" if not alts else "multipla_5")
                    gabarito = None
                    problemas.append("gabarito não encontrado no callout")
                else:
                    formato = "multipla_5"
                    gabarito = resp
                    if len(alts) != 5:
                        problemas.append("%d alternativas lidas (esperado 5)" % len(alts))
                if ce_tag and formato != "certo_errado":
                    problemas.append("etiqueta Certo/Errado mas gabarito é letra")
                if formato != "certo_errado" and len(set(a.strip().lower() for a in alts)) != len(alts):
                    problemas.append("alternativas repetidas")
                if any(not a.strip() for a in alts):
                    problemas.append("alternativa vazia")
                if not enun:
                    problemas.append("enunciado vazio")
                regra = C.SECOES[mod].get(sec_num)
                texto_cls = enun
                if regra is None:
                    cod = None
                    problemas.append("seção sem classificação")
                elif callable(regra):
                    cod = regra(texto_cls)
                else:
                    cod = regra
                tags = []
                if mod == "06" and sec_num == 19:
                    tags.append("ingles")
                if formato == "certo_errado":
                    tags.append("certo-errado")
                resultado.append({
                    "_cod": cod,
                    "banca_estilo": estilo,
                    "topico": titulo_topico(sec_tit),
                    "ref": (mod, sec_num),
                    "origem": {"tipo": "apostila",
                               "fonte": "Apostila %s §%d – Q%d" % (mod, sec_num, num),
                               "id_pai": None, "anulada": False},
                    "formato": formato,
                    "texto_base": tb_q,
                    "enunciado": enun,
                    "imagem": None,
                    "alternativas": {LETRAS[i]: a for i, a in enumerate(alts)} if formato != "certo_errado" else None,
                    "gabarito": gabarito,
                    "comentario": coment,
                    "tags": tags,
                    "problemas": problemas,
                    "_bruto": bruto,
                })
                relatorio["por_secao"][(mod, sec_num)] += 1
    return resultado, titulos_todos, textos_base


# ---------------------------------------------------------------------------
# provas e simulado
# ---------------------------------------------------------------------------
RE_ALT_PROVA = re.compile(r"^- \[[ xX]\] \*\*\(([A-E])\)\*\*\s?(.*)$")


def parse_prova(caminho):
    L = ler(caminho).split("\n")
    questoes = collections.OrderedDict()
    textos = []
    atual = None
    i = 0
    gab_ini = None
    while i < len(L):
        l = L[i]
        if l.startswith("## Gabarito"):
            gab_ini = i
            break
        m = re.match(r"^### Questão (\d+)\s*$", l)
        if m:
            atual = int(m.group(1))
            questoes[atual] = {"linhas": [], "pos_texto": len(textos)}
            i += 1
            continue
        if l.startswith("## "):
            atual = None
            i += 1
            continue
        if l.strip() == "---":
            atual = None
            i += 1
            continue
        if atual is None and l.startswith(">"):
            bloco = []
            while i < len(L) and L[i].startswith(">"):
                bloco.append(L[i][2:] if L[i].startswith("> ") else L[i][1:])
                i += 1
            textos.append(limpar_bloco(bloco))
            continue
        if atual is not None:
            questoes[atual]["linhas"].append(l)
        i += 1
    # gabarito
    gab = {}
    for l in L[gab_ini:]:
        if not l.startswith(">"):
            continue
        cel = [c.strip() for c in l[1:].strip().strip("|").split("|")]
        if len(cel) >= 2 and cel[0].isdigit():
            n = int(cel[0])
            resp = cel[1].replace("*", "").strip()
            coment = ""
            if len(cel) >= 4:
                coment = " | ".join(cel[2:-1]).strip()
                rev = cel[-1].strip()
                if rev:
                    coment = (coment + "\n\nRevisar: " + rev).strip()
            gab[n] = (resp, coment)
    # alternativas
    for n, q in questoes.items():
        enun, alts, atual_alt = [], [], None
        for l in q["linhas"]:
            m = RE_ALT_PROVA.match(l)
            if m:
                alts.append([m.group(1), [m.group(2)]])
                continue
            if alts:
                alts[-1][1].append(l[2:] if l.startswith("  ") else l)
            else:
                enun.append(l)
        q["enunciado"] = colapsar_vazias(limpar_bloco(enun))
        q["alternativas"] = collections.OrderedDict((a, limpar_bloco(t)) for a, t in alts)
    return questoes, textos, gab


def importar_prova(caminho, tabela, anuladas, textos_map, imagens, nome_fonte, prova_id,
                   tipo, estilo, relatorio):
    questoes, textos, gab = parse_prova(caminho)
    saida = []
    ids_textos = list(textos_map.keys())
    if len(textos) != len(ids_textos):
        relatorio["avisos"].append("%s: %d textos-base lidos, esperados %d" % (nome_fonte, len(textos), len(ids_textos)))
    textos_out = []
    for tid, txt in zip(ids_textos, textos):
        faixa = textos_map[tid]
        textos_out.append({"id": tid, "fonte": "%s – questões %d a %d" % (nome_fonte, faixa[0], faixa[-1]),
                           "texto": txt})
    for n in sorted(tabela):
        q = questoes.get(n)
        cod, topico, mod, sec = tabela[n]
        problemas = []
        if q is None:
            relatorio["avisos"].append("%s: questão %d não encontrada" % (nome_fonte, n))
            continue
        resp, coment = gab.get(n, (None, ""))
        anulada = n in anuladas
        if anulada:
            if resp is None or not resp.lower().startswith("anulada"):
                problemas.append("anulada no catálogo mas não no gabarito")
            gabarito = None
        else:
            gabarito = resp if resp in LETRAS else None
            if gabarito is None:
                problemas.append("gabarito não encontrado (%r)" % (resp,))
        alts = q["alternativas"]
        letras = "".join(alts.keys())
        if letras == "ABCDE":
            formato = "multipla_5"
        elif letras == "ABCD":
            formato = "multipla_4"
        else:
            formato = "multipla_5"
            problemas.append("alternativas lidas: %s" % letras)
        if len(set(v.strip().lower() for v in alts.values())) != len(alts):
            problemas.append("alternativas repetidas")
        enun = q["enunciado"]
        imagem = imagens.get(n)
        if imagem:
            enun = re.sub(r"\n*!\[\[[^\]]+\]\]\n*", "\n\n", enun).strip()
        texto_base = None
        for tid, faixa in textos_map.items():
            if n in faixa:
                texto_base = tid
        tags = []
        if formato == "multipla_4":
            tags.append("4-alternativas")
        if anulada:
            tags.append("anulada")
        saida.append({
            "_cod": cod,
            "banca_estilo": estilo,
            "topico": topico,
            "ref": (mod, sec),
            "origem": {"tipo": tipo, "fonte": "%s – Q%d" % (nome_fonte, n), "id_pai": None,
                       "anulada": anulada, "prova": prova_id, "numero": n},
            "formato": formato,
            "texto_base": texto_base,
            "enunciado": enun,
            "imagem": imagem,
            "alternativas": dict(alts),
            "gabarito": gabarito,
            "comentario": coment,
            "tags": tags,
            "problemas": problemas,
        })
    extras = sorted(set(questoes) - set(tabela))
    if extras:
        relatorio["avisos"].append("%s: questões sem classificação no catálogo: %s" % (nome_fonte, extras))
    return saida, textos_out


# ---------------------------------------------------------------------------
# montagem final
# ---------------------------------------------------------------------------

def montar(questoes, titulos, data):
    contadores = collections.Counter()
    finais = []
    for q in questoes:
        cod = q["_cod"]
        if cod in C.GERAIS:
            nome, arq, pref = C.GERAIS[cod]
            bloco, materia, eixo = "gerais", nome, None
            prefixo = pref
        else:
            nome, arq, _n = C.EIXOS[cod]
            bloco, materia, eixo = "especificos", C.MATERIA_ESPECIFICOS, nome
            prefixo = "ESP-" + cod
        contadores[prefixo] += 1
        qid = "%s-%04d" % (prefixo, contadores[prefixo])
        mod, sec = q["ref"]
        tit = titulos[mod].get(sec, "")
        ref = {"modulo": mod, "secao": str(sec), "titulo": tit, "link": link_wiki(mod, sec, tit)}
        status = "duvida" if q["problemas"] else "validada"
        obj = collections.OrderedDict()
        obj["id"] = qid
        obj["concursos"] = [C.CONCURSO]
        obj["banca_estilo"] = q["banca_estilo"]
        obj["bloco"] = bloco
        obj["materia"] = materia
        obj["eixo"] = eixo
        obj["topico"] = q["topico"]
        obj["ref_apostila"] = ref
        obj["origem"] = q["origem"]
        obj["formato"] = q["formato"]
        obj["dificuldade"] = 2
        obj["texto_base"] = q["texto_base"]
        obj["enunciado"] = q["enunciado"]
        obj["imagem"] = q["imagem"]
        obj["alternativas"] = q["alternativas"]
        obj["gabarito"] = q["gabarito"]
        obj["comentario"] = q["comentario"]
        obj["tags"] = q["tags"]
        obj["embaralhavel"] = False
        obj["status"] = status
        obj["validacao"] = {"por": "importador", "em": data, "obs": "; ".join(q["problemas"])}
        obj["versao"] = 1
        obj["_arquivo"] = arq
        finais.append(obj)
    return finais


CABECALHO = """/*
 * {titulo}
 * Gerado por tools/importar.py a partir das fontes do vault ({data}).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 * Rodar o importador de novo sobrescreve este arquivo.
 */
window.BANCO = window.BANCO || [];
"""


def escrever_js(caminho, titulo, objetos, data, var="BANCO"):
    partes = [CABECALHO.format(titulo=titulo, data=data).replace("BANCO", var)]
    for o in objetos:
        o = {k: v for k, v in o.items() if not k.startswith("_")}
        partes.append("%s.push(%s);\n" % (var, json.dumps(o, ensure_ascii=False, indent=2)))
    with open(caminho, "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(partes))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--fontes", default=os.environ.get("FAZAPROVA_FONTES"),
                    help="pasta com apostila/ e provas/ (ou variável FAZAPROVA_FONTES)")
    ap.add_argument("--data", default="2026-11-13", help="data gravada em validacao.em")
    ap.add_argument("--saida", default=RAIZ, help="raiz do repositório")
    args = ap.parse_args()
    if not args.fontes:
        ap.error("informe --fontes")
    fontes = os.path.abspath(args.fontes)
    d_apo = os.path.join(fontes, "apostila")
    d_pro = os.path.join(fontes, "provas")

    relatorio = {"avisos": [], "por_secao": collections.Counter()}
    apostila, titulos, t_apo = importar_apostila(d_apo, args.data, relatorio)
    p21, t21 = importar_prova(os.path.join(d_pro, "Simulado 2021 - Desenvolvimento de Sistemas.md"),
                              C.PROVA_2021, C.ANULADAS_2021, C.TEXTOS_2021, {},
                              "Banestes 2021 (FGV)", "banestes-2021", "prova_real", "FGV", relatorio)
    p24, t24 = importar_prova(os.path.join(d_pro, "Simulado 2024 - Desenvolvimento de Sistemas.md"),
                              C.PROVA_2024, C.ANULADAS_2024, C.TEXTOS_2024, C.IMAGENS_2024,
                              "Banestes 2024 (ACCESS)", "banestes-2024", "prova_real", "ACCESS", relatorio)
    fcc, _ = importar_prova(os.path.join(d_pro, "Simulado FCC 1 - Específicos e Bancários.md"),
                            C.SIMULADO_FCC1, set(), {}, {},
                            "Simulado FCC 1", "simulado-fcc-1", "simulado", "FCC", relatorio)

    todas = montar(p21 + p24 + fcc + apostila, titulos, args.data)

    os.makedirs(os.path.join(args.saida, "banco"), exist_ok=True)
    os.makedirs(os.path.join(args.saida, "img"), exist_ok=True)
    por_arq = collections.OrderedDict()
    for cod, (nome, arq, _p) in C.GERAIS.items():
        por_arq[arq] = (nome, [])
    for sig, (nome, arq, _n) in C.EIXOS.items():
        por_arq[arq] = ("Específicos – " + nome, [])
    for q in todas:
        por_arq[q["_arquivo"]][1].append(q)
    for arq, (nome, objs) in por_arq.items():
        escrever_js(os.path.join(args.saida, "banco", arq), nome, objs, args.data)
    escrever_js(os.path.join(args.saida, "banco", "textos-base.js"),
                "Textos-base compartilhados (Língua Portuguesa e tabelas comuns)",
                t21 + t24 + t_apo, args.data, var="TEXTOS_BASE")
    img_src = os.path.join(d_pro, "2024 - Q16 curva S.png")
    if os.path.exists(img_src):
        shutil.copyfile(img_src, os.path.join(args.saida, "img", "2024-q16-curva-s.png"))
    else:
        relatorio["avisos"].append("imagem da 2024 Q16 não encontrada")

    # dados para o relatório
    with open(os.path.join(args.saida, "tools", ".ultima-importacao.json"), "w", encoding="utf-8") as f:
        json.dump({"avisos": relatorio["avisos"],
                   "por_secao": {"%s-%02d" % k: v for k, v in sorted(relatorio["por_secao"].items())},
                   "titulos": {m: {str(k): v for k, v in t.items()} for m, t in titulos.items()}},
                  f, ensure_ascii=False, indent=1)
    import relatorio as R  # noqa: E402
    R.gerar(todas, relatorio, args.saida)
    print("Questões importadas: %d" % len(todas))
    print("Em dúvida: %d" % sum(1 for q in todas if q["status"] == "duvida"))
    for a in relatorio["avisos"]:
        print("AVISO:", a)


if __name__ == "__main__":
    main()
