# -*- coding: utf-8 -*-
"""Relaciona as questões do banco ao concurso Banestes 2026 – Técnico Bancário (edital 01/2026, FCC).

O banco foi montado para o Analista de TI (2027). Boa parte dele também cai na prova de Técnico
Bancário, mas em outras matérias: juros e descontos vão para Matemática Financeira, estatística e
probabilidade para Noções de Probabilidade e Estatística, CMN/Bacen/produtos para Conhecimentos
Bancários, LGPD e golpes digitais para Noções de Informática etc.

Este script aplica as regras abaixo a cada questão e grava banco/tecnico-bancario.js com o mapa
{id: sigla da matéria do Técnico Bancário}. O app (FP.dados.init) inclui essas questões quando o
perfil é do Técnico Bancário e as mostra na matéria indicada; os arquivos das questões não mudam.
Questões criadas só para o Técnico Bancário usam "concursos": ["banestes-2026-tecnico-bancario"] e
o próprio nome da matéria; não precisam de regra.

Uso: python3 tools/tecnico_bancario.py             (regrava o arquivo e mostra as contagens)
     python3 tools/tecnico_bancario.py --conferir  (falha se o arquivo estiver desatualizado)

Regra: para cada questão vale a primeira linha de REGRAS cuja unidade (eixo ou matéria) e tema
(nome unificado de tools/topicos.py) casam; depois EXCLUIR tira questões pelo enunciado.
"""
import collections
import json
import os
import re
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(AQUI)
sys.path.insert(0, AQUI)
import validar_banco as V  # noqa: E402
import topicos as T  # noqa: E402

CONCURSO = "banestes-2026-tecnico-bancario"
SAIDA = os.path.join(RAIZ, "banco", "tecnico-bancario.js")

# Matérias do edital (siglas da config/banestes-2026-tecnico-bancario.js) e questões por prova
MATERIAS = collections.OrderedDict([
    ("LP", ("Língua Portuguesa", 10)),
    ("MAT", ("Matemática/Raciocínio Lógico e Quantitativo", 10)),
    ("ATU", ("Atualidades do Mercado Financeiro", 5)),
    ("ETI", ("Ética, Compliance e ESG", 5)),
    ("CB", ("Conhecimentos Bancários e Securitários", 15)),
    ("MF", ("Matemática Financeira", 5)),
    ("PE", ("Noções de Probabilidade e Estatística", 5)),
    ("INF", ("Noções de Informática e Comportamentos Digitais", 5)),
    ("VNA", ("Vendas, Negociação e Atendimento", 10)),
])

# (unidade no banco, regex do tema unificado, sigla de destino ou None = fora do edital)
REGRAS = [
    ("Língua Portuguesa", r".", "LP"),

    ("Raciocínio Lógico e Estatística", r"^Juros|^Matemática financeira", "MF"),
    ("Raciocínio Lógico e Estatística", r"^Estatística|^Probabilidade", "PE"),
    # geometria analítica e matrizes não estão no programa de nível médio
    ("Raciocínio Lógico e Estatística", r"^Geometria", None),
    ("Raciocínio Lógico e Estatística", r".", "MAT"),

    # Atualidades: conjuntura, Copom/Selic, inovação (Pix, Open Finance) e educação financeira/ESG.
    # O restante (estrutura do SFN, instituições, produtos, mercado) é Conhecimentos Bancários.
    ("Atualidades do Mercado Financeiro e Digital", r"^Banco Central, Copom|^Pix, Open Finance|^Educação financeira", "ATU"),
    ("Atualidades do Mercado Financeiro e Digital", r".", "CB"),

    # PLD/FT e Coaf são tema explícito de Conhecimentos Bancários; o resto de Ética fica em Ética.
    ("Ética, Compliance e ESG", r"^Prevenção à lavagem", "CB"),
    ("Ética, Compliance e ESG", r".", "ETI"),

    # Informática de nível médio: LGPD, golpes e malware, conceitos de nuvem.
    ("Segurança da Informação", r"^LGPD|^Princípios, ameaças", "INF"),
    ("Computação em nuvem", r"^Modelos de serviço", "INF"),
]

# Questões técnicas demais para o nível médio, mesmo dentro de um tema aproveitado
EXCLUIR = re.compile(r"SQL injection|CSRF|\bIDS\b|\bIPS\b|SYN flood|reflexão e amplificação|amplificação|"
                     r"three-way|handshake|botnet de IoT|XSS", re.I)


def destino(q):
    u = q.get("eixo") or q.get("materia")
    tema = T.tema(u, q.get("topico") or "") or q.get("topico") or ""
    for unidade, padrao, sigla in REGRAS:
        if unidade == u and re.search(padrao, tema):
            if sigla and sigla != "LP" and EXCLUIR.search(q.get("enunciado") or ""):
                return None, tema
            return sigla, tema
    return None, tema


def montar():
    questoes, _, erros = V.carregar(RAIZ)
    if erros:
        raise SystemExit("\n".join(erros))
    mapa = collections.OrderedDict()
    cont = collections.defaultdict(collections.Counter)
    proprias = collections.Counter()
    for q in sorted(questoes, key=lambda x: x["id"]):
        if q.get("status") != "validada":
            continue
        if CONCURSO in (q.get("concursos") or []):
            proprias[q.get("materia")] += 1
            continue
        sigla, tema = destino(q)
        if sigla:
            mapa[q["id"]] = sigla
            cont[sigla][tema] += 1
    return mapa, cont, proprias


def texto(mapa):
    return ("/*\n * Questões do banco que valem para o Banestes 2026 – Técnico Bancário: {id: sigla da matéria}.\n"
            " * Aplicado por FP.dados.init. Gerado por tools/tecnico_bancario.py (não editar à mão).\n */\n"
            "window.CLASSIFICACAO = window.CLASSIFICACAO || {};\n"
            "window.CLASSIFICACAO[" + json.dumps(CONCURSO) + "] = " +
            json.dumps(mapa, ensure_ascii=False, indent=0).replace("\n", "") + ";\n")


def main():
    mapa, cont, proprias = montar()
    novo = texto(mapa)
    if "--conferir" in sys.argv:
        atual = open(SAIDA, encoding="utf-8").read() if os.path.exists(SAIDA) else ""
        if atual != novo:
            print("banco/tecnico-bancario.js desatualizado: rode python3 tools/tecnico_bancario.py")
            sys.exit(1)
        print("OK: banco/tecnico-bancario.js em dia (%d questões)." % len(mapa))
        return
    with open(SAIDA, "w", encoding="utf-8") as f:
        f.write(novo)
    total = 0
    for sigla, (nome, por_prova) in MATERIAS.items():
        n = sum(cont[sigla].values()) + proprias[nome]
        total += n
        print("\n%-4s %s: %d questões (%d por prova, %.0f provas)" % (sigla, nome, n, por_prova, n / por_prova))
        for tema, k in cont[sigla].most_common():
            print("      %4d  %s" % (k, tema))
        if proprias[nome]:
            print("      %4d  (criadas para o Técnico Bancário)" % proprias[nome])
    print("\nTotal: %d questões" % total)


if __name__ == "__main__":
    main()
