# -*- coding: utf-8 -*-
"""Infraestrutura das questões criadas só para o Banestes 2026 – Técnico Bancário.

Cada dados_*.py define QUESTOES (inéditas, com TQ(...)) ou, no caso da prova real, PROVA e TEXTOS.
Inéditas: a alternativa correta é escrita primeiro; gerar.py distribui a posição do gabarito.
Os tópicos vêm de uma lista fechada por matéria (TOPICOS), para o treino agrupar bem.
"""
import json
import os

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(os.path.dirname(AQUI))
SECOES = json.load(open(os.path.join(RAIZ, "tools", "reforco", "secoes.json"), encoding="utf-8"))
CONCURSO = "banestes-2026-tecnico-bancario"

MATERIAS = {
    "LP": ("Língua Portuguesa", "gerais"),
    "MAT": ("Matemática/Raciocínio Lógico e Quantitativo", "gerais"),
    "ATU": ("Atualidades do Mercado Financeiro", "gerais"),
    "ETI": ("Ética, Compliance e ESG", "gerais"),
    "CB": ("Conhecimentos Bancários e Securitários", "especificos"),
    "MF": ("Matemática Financeira", "especificos"),
    "PE": ("Noções de Probabilidade e Estatística", "especificos"),
    "INF": ("Noções de Informática e Comportamentos Digitais", "especificos"),
    "VNA": ("Vendas, Negociação e Atendimento", "especificos"),
}

# Tópicos permitidos nas inéditas (matérias novas). LP/MAT/ATU/ETI/MF usam os temas de tools/topicos.py.
TOPICOS = {
    "VNA": [
        "Atendimento: conceitos, qualidade e satisfação do cliente",
        "Comunicação interpessoal e atendimento presencial e digital",
        "Comportamento do consumidor de produtos financeiros",
        "Técnicas de vendas e pós-venda",
        "Prospecção, fidelização e retenção de clientes",
        "Negociação: conceitos, etapas, estratégias e técnicas",
        "CRM, marketing de relacionamento e experiência do cliente",
        "Adequação de produtos ao perfil do cliente",
        "Ética e transparência na venda de produtos financeiros",
        "Reclamações, conflitos e mediação",
        "Canais de atendimento e transformação digital",
        "Metas, segmentação e gestão de carteira",
    ],
    "CB": [
        "Seguros: conceitos, princípios e participantes",
        "Seguros pessoais e empresariais: modalidades",
        "Previdência complementar aberta: PGBL e VGBL",
        "Títulos de capitalização",
        "Consórcio",
        "Bancassurance",
        "Regulação e supervisão: CNSP, Susep, CMN e Bacen",
        "Produtos bancários: contas, crédito, cartões e meios de pagamento",
        "Captação, intermediação e aplicação de recursos",
        "Mercado financeiro e de capitais: instrumentos",
        "Portabilidade",
        "Resolução CMN nº 4.966/2021",
        "Câmbio e garantias",
        "Prevenção à lavagem de dinheiro e Coaf",
        "Proteção do consumidor e educação financeira",
    ],
    "INF": [
        "Google Workspace: Gmail, Calendar, Meet e Chat",
        "Google Workspace: Drive, Docs, Sheets, Slides e Forms",
        "Gemini e IA no Google Workspace",
        "Inteligência artificial, aprendizado de máquina e IA generativa",
        "IA no setor bancário: crédito, fraude, riscos e vieses",
        "Hardware, software e sistemas operacionais (Windows e Linux)",
        "Internet, intranet, navegadores e mecanismos de busca",
        "Correio eletrônico",
        "Golpes digitais: phishing, engenharia social e malware",
        "Senhas, autenticação e boas práticas de segurança",
        "LGPD no setor bancário",
        "Computação em nuvem e redes",
        "Aplicativos de escritório (Word, Excel, PowerPoint)",
    ],
    "PE": [
        "Conceitos de estatística, população e amostragem",
        "Tabelas, gráficos e distribuições de frequência",
        "Medidas de tendência central",
        "Medidas de dispersão e coeficiente de variação",
        "Probabilidade: conceitos e cálculo",
        "Probabilidade condicional e independência",
        "Distribuição normal",
    ],
}


def TQ(sigla, topico, enun, certa, erradas, exp, dif=2, tags=None, ref=None, ver=None, embaralhavel=True):
    """Questão inédita. ref = "03/17" (seção da apostila, opcional). ver = (código Python que imprime
    o resultado, saída esperada) para conferir cálculos por execução."""
    assert sigla in MATERIAS, sigla
    assert sigla not in TOPICOS or topico in TOPICOS[sigla], (sigla, topico)
    assert ref is None or ref in SECOES, ref
    assert len(erradas) == 4, enun[:60]
    return dict(sigla=sigla, topico=topico, enun=enun.strip(), certa=certa.strip(),
                erradas=[e.strip() for e in erradas], exp=exp.strip(), dif=dif, tags=tags or [],
                ref=ref, ver=ver, embaralhavel=embaralhavel)


def PQ(numero, sigla, topico, enun, alternativas, gabarito, comentario, dif=2, texto_base=None,
       anulada=False, imagem=None, tags=None, ref=None, obs=""):
    """Questão de prova real, transcrita na ordem e com as letras originais."""
    assert sigla in MATERIAS, sigla
    assert sigla not in TOPICOS or topico in TOPICOS[sigla], (sigla, topico)
    assert ref is None or ref in SECOES, ref
    assert sorted(alternativas) == list("ABCDE"), numero
    assert anulada or gabarito in alternativas, numero
    return dict(numero=numero, sigla=sigla, topico=topico, enun=enun.strip(),
                alternativas={k: v.strip() for k, v in alternativas.items()}, gabarito=gabarito,
                comentario=comentario.strip(), dif=dif, texto_base=texto_base, anulada=anulada,
                imagem=imagem, tags=tags or [], ref=ref, obs=obs)


def TEXTO(id_, fonte, texto):
    return dict(id=id_, fonte=fonte, texto=texto.strip())
