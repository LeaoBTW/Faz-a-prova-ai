# -*- coding: utf-8 -*-
"""Gera docs/relatorio-importacao.md (chamado pelo importador)."""
import collections
import os
import re

import catalogo as C

METAS_GERAIS = {"LP": 200, "RLE": 250, "ATU": 100, "ETI": 100}
META_ESPECIFICOS = 800

AGENTES = {
    "Agente 2": {"codigos": ["LP", "RLE", "ATU", "ETI"], "arquivo": "banco/variacoes-gerais.js",
                 "branch": "variacoes-gerais"},
    "Agente 3": {"codigos": ["PROC", "PROG", "GOV", "BD", "WEB"], "arquivo": "banco/variacoes-esp-a.js",
                 "branch": "variacoes-esp-a"},
    "Agente 4": {"codigos": ["ARQ", "DEVOPS", "SO", "REDES", "SERV", "SEG", "NUVEM"],
                 "arquivo": "banco/variacoes-esp-b.js", "branch": "variacoes-esp-b"},
}

EXERCICIOS_ABERTOS = ("Apostila 05 §26 (\"Bateria de exercícios: qual a saída do código\"): 33 exercícios "
                      "abertos (S1–S6, P1–P7, JS1–JS6, J1–J5, C1–C3, CS1–CS3, ASP1, H1–H2) sem alternativas; "
                      "não foram importados porque o banco só aceita múltipla escolha ou Certo/Errado. "
                      "São boa matéria-prima para variações de código (agentes 3 e 4).")


def codigo(q):
    if q["bloco"] == "gerais":
        return C.COD_POR_MATERIA[q["materia"]]
    return C.SIGLA_POR_EIXO[q["eixo"]]


def nome_cod(cod):
    if cod in C.GERAIS:
        return C.GERAIS[cod][0]
    return C.EIXOS[cod][0]


def por_prova(cod):
    return C.GERAIS_POR_PROVA.get(cod) or C.EIXOS[cod][2]


def metas():
    m = {}
    for cod, alvo in METAS_GERAIS.items():
        m[cod] = max(10 * por_prova(cod), alvo)
    total_esp = sum(v[2] for v in C.EIXOS.values())
    for sig, (_n, _a, n) in C.EIXOS.items():
        m[sig] = max(10 * n, round(META_ESPECIFICOS * n / total_esp))
    return m


def tabela(cabec, linhas):
    out = ["| " + " | ".join(cabec) + " |", "|" + "|".join("---" for _ in cabec) + "|"]
    for l in linhas:
        out.append("| " + " | ".join(str(x) for x in l) + " |")
    return "\n".join(out)


def gerar(todas, rel, raiz):
    codigos = list(C.GERAIS) + list(C.EIXOS)
    usaveis = collections.Counter()  # múltipla escolha validada e não anulada
    total = collections.Counter()
    ce = collections.Counter()
    m4 = collections.Counter()
    anul = collections.Counter()
    ce_ids = collections.defaultdict(list)
    topicos = collections.defaultdict(collections.Counter)
    fontes = collections.Counter()
    fontes_cod = collections.defaultdict(collections.Counter)
    duvidas = []
    for q in todas:
        cod = codigo(q)
        total[cod] += 1
        topicos[cod][q["topico"]] += 1
        org = q["origem"]
        if org["tipo"] == "apostila":
            f = "Apostila " + q["ref_apostila"]["modulo"]
        else:
            f = re.sub(r"\s*–\s*Q\d+$", "", org["fonte"])
        fontes[f] += 1
        fontes_cod[f][cod] += 1
        if q["formato"] == "certo_errado":
            ce[cod] += 1
            ce_ids[cod].append(q["id"])
        if q["formato"] == "multipla_4":
            m4[cod] += 1
        if org.get("anulada"):
            anul[cod] += 1
        if q["status"] == "duvida":
            duvidas.append(q)
        if q["formato"] != "certo_errado" and q["status"] == "validada" and not org.get("anulada"):
            usaveis[cod] += 1
    M = metas()
    L = []
    L.append("# Relatório de importação")
    L.append("")
    L.append("Gerado por `tools/importar.py`. Fontes: apostila (módulos 01 a 07), provas reais Banestes 2021 (FGV) e "
             "2024 (Instituto ACCESS) e Simulado FCC 1. Nenhuma questão foi inventada nem teve o conteúdo alterado; "
             "o importador só tirou a formatação de Markdown do vault (checkboxes, etiquetas \"(Estilo FCC)\", "
             "\"( ) Certo ( ) Errado\" e a indentação).")
    L.append("")
    L.append("## Resumo")
    L.append("")
    L.append("- **Total importado: %d questões** (%d múltipla escolha A–E, %d com 4 alternativas da prova ACCESS 2024, "
             "%d Certo/Errado)." % (len(todas), sum(1 for q in todas if q["formato"] == "multipla_5"),
                                     sum(m4.values()), sum(ce.values())))
    L.append("- Anuladas (prova real, ficam fora dos simulados): %d (2021: Q21, Q22; 2024: Q12, Q32, Q43)." % sum(anul.values()))
    L.append("- Em \"duvida\": %d." % len(duvidas))
    L.append("- Usáveis em simulado (múltipla escolha, validada, não anulada): %d." % sum(usaveis.values()))
    L.append("- Textos-base: questões de Português da 2024 (3 textos), tabelas T1–T3 da 2021 (Q47–Q51) e 4 trechos "
             "da apostila (base CLIENTE/CONTA de 05 §7, log de 05 §10.5, XML de 05 §21.2 e trecho em inglês de 06 §19).")
    L.append("")
    L.append("**Conferência da leitura:** em cada seção \"Questões de fixação\" o número de questões lidas é igual ao "
             "número de respostas no callout de gabarito, sem número repetido nem gabarito sobrando. "
             "As provas têm 60 (2021), 80 (2024) e 40 (FCC 1) questões, todas lidas.")
    L.append("")
    L.append("**Não importado:** " + EXERCICIOS_ABERTOS)
    L.append("")
    if rel["avisos"]:
        L.append("**Avisos do importador:**")
        L.append("")
        for a in rel["avisos"]:
            L.append("- " + a)
        L.append("")

    L.append("## Por fonte")
    L.append("")
    cab = ["Fonte", "LP", "RLE", "Atual.", "Ética", "Específicos", "Total"]
    linhas = []
    ordem = ["Banestes 2021 (FGV)", "Banestes 2024 (ACCESS)", "Simulado FCC 1"] + ["Apostila %s" % m for m in C.MODULOS]
    for f in ordem:
        fc = fontes_cod[f]
        esp = sum(v for k, v in fc.items() if k in C.EIXOS)
        linhas.append([f, fc["LP"] or "", fc["RLE"] or "", fc["ATU"] or "", fc["ETI"] or "", esp or "", fontes[f]])
    tot = [sum(total[c] for c in C.EIXOS)]
    linhas.append(["**Total**", total["LP"], total["RLE"], total["ATU"], total["ETI"], tot[0], len(todas)])
    L.append(tabela(cab, linhas))
    L.append("")
    L.append("## Por matéria e eixo")
    L.append("")
    cab = ["Matéria / eixo", "Por prova", "Total", "Múltipla A–E", "4 alternativas", "Certo/Errado", "Anuladas", "Usáveis em simulado"]
    linhas = []
    for cod in codigos:
        mult5 = total[cod] - ce[cod] - m4[cod]
        linhas.append([nome_cod(cod) + ("" if cod in C.GERAIS else " (" + cod + ")"), por_prova(cod), total[cod],
                       mult5, m4[cod] or "", ce[cod] or "", anul[cod] or "", usaveis[cod]])
    linhas.append(["**Total**", 80, len(todas), sum(total[c] - ce[c] - m4[c] for c in codigos), sum(m4.values()),
                   sum(ce.values()), sum(anul.values()), sum(usaveis.values())])
    L.append(tabela(cab, linhas))
    L.append("")
    L.append("Bloco Gerais: %d · Bloco Específicos: %d." % (sum(total[c] for c in C.GERAIS), tot[0]))
    L.append("")

    L.append("## Por tópico (resumo)")
    L.append("")
    L.append("Os 6 tópicos com mais questões em cada matéria/eixo (lista completa no app, aba Banco).")
    L.append("")
    for cod in codigos:
        top = topicos[cod].most_common(6)
        L.append("- **%s** (%d tópicos): %s" % (nome_cod(cod), len(topicos[cod]),
                                               "; ".join("%s (%d)" % (t, n) for t, n in top)))
    L.append("")

    L.append("## Questões em \"duvida\"")
    L.append("")
    if duvidas:
        for q in duvidas:
            L.append("- `%s` (%s): %s" % (q["id"], q["origem"]["fonte"], q["validacao"]["obs"]))
    else:
        L.append("Nenhuma. Todas as questões tiveram enunciado, alternativas e gabarito lidos sem ambiguidade; por isso "
                 "todas entraram como `validada` (validação estrutural do importador). A conferência de conteúdo "
                 "(resolver cada questão, checar comentários) é tarefa do agente 5.")
    L.append("")
    L.append("Observações que não impedem o uso:")
    L.append("")
    L.append("- As 80 questões da prova 2024 (ACCESS) têm só 4 alternativas (formato `multipla_4`); entram nos simulados normalmente.")
    L.append("- As provas reais 2021 e 2024 não têm gabarito comentado (só a letra). O Simulado FCC 1 tem comentário.")
    L.append("- Algumas questões da apostila não têm comentário no gabarito (só a letra ou \"Certo\"/\"Errado\").")
    L.append("- O código Python da 2021 Q53 e o JavaScript da Q54 estão sem indentação no caderno transcrito; "
             "o texto foi mantido como está na fonte.")
    L.append("")

    L.append("## Tabela de cotas para os agentes 2 a 4")
    L.append("")
    L.append("Regra: **meta = max(10 × questões por prova, alvo da tabela 7.2 proporcionalizado)**. Nos Gerais, os alvos "
             "são LP 200, RLE 250, Atualidades 100 e Ética 100. Nos Específicos, os 800 foram distribuídos pelos eixos "
             "na proporção da tabela 4.2 (16 por questão de prova, sempre acima do mínimo de 10×). "
             "**Cota = meta − existentes** (múltipla escolha, validada, não anulada; mínimo 0). As Certo/Errado não "
             "contam como existentes, mas são as primeiras candidatas a conversão (5 afirmações → 1 questão A–E).")
    L.append("")
    cab = ["Agente", "Matéria / eixo", "Por prova", "Meta", "Existentes", "C/E (candidatas)", "**Cota**", "Faixa de ids"]
    linhas = []
    tot_cota = collections.Counter()
    for ag, info in AGENTES.items():
        for cod in info["codigos"]:
            cota = max(0, M[cod] - usaveis[cod])
            tot_cota[ag] += cota
            pref = C.GERAIS[cod][2] if cod in C.GERAIS else "ESP-" + cod
            linhas.append([ag, nome_cod(cod), por_prova(cod), M[cod], usaveis[cod], ce[cod], "**%d**" % cota,
                           "`%s-V001`…`%s-V999`" % (pref, pref)])
    L.append(tabela(cab, linhas))
    L.append("")
    for ag, info in AGENTES.items():
        L.append("- **%s**: %d questões no total → `%s` (branch `%s`)." % (ag, tot_cota[ag], info["arquivo"], info["branch"]))
    L.append("- **Total a criar: %d.**" % sum(tot_cota.values()))
    L.append("")
    L.append("Regras de id e arquivo:")
    L.append("")
    L.append("- Variações usam o sufixo `V` e numeração própria por matéria/eixo: `LP-V001`, `RLE-V001`, `ATU-V001`, "
             "`ETI-V001`, `ESP-BD-V001`, `ESP-NUVEM-V001` etc. Os originais usam `LP-0001`, `ESP-BD-0001`. Como cada "
             "matéria/eixo pertence a um único agente, não há colisão.")
    L.append("- Cada agente grava só no seu arquivo (`banco/variacoes-gerais.js`, `banco/variacoes-esp-a.js`, "
             "`banco/variacoes-esp-b.js`), que já existe vazio e já é carregado pelo `index.html`.")
    L.append("- Toda variação: `origem.tipo = \"variacao\"`, `origem.fonte` igual à da questão-pai, `origem.id_pai` com o id da "
             "questão-pai, `status = \"rascunho\"`, `formato = \"multipla_5\"`.")
    L.append("- Prioridade: eixos com maior cota relativa e tópicos novos do edital 2027 (PMBOK 8, Lei 14.133, low-code, "
             "PL/pgSQL, WCAG, ISO 27035, monitoramento).")
    L.append("")

    L.append("## Certo/Errado por matéria/eixo (candidatas a conversão)")
    L.append("")
    for cod in codigos:
        if ce_ids[cod]:
            L.append("- **%s** (%d): %s" % (nome_cod(cod), len(ce_ids[cod]), ", ".join("`%s`" % i for i in ce_ids[cod])))
    L.append("")
    caminho = os.path.join(raiz, "docs", "relatorio-importacao.md")
    os.makedirs(os.path.dirname(caminho), exist_ok=True)
    texto = "\n".join(L)
    texto = re.sub(r"\n{3,}", "\n\n", texto)
    with open(caminho, "w", encoding="utf-8", newline="\n") as f:
        f.write(texto.rstrip() + "\n")
