# -*- coding: utf-8 -*-
"""Catálogo de matérias, eixos e classificação das questões.

Usado pelo importador e pelo validador. Só biblioteca padrão.
"""

CONCURSO = "banestes-2027-analista-ti"

# Matérias dos Conhecimentos Gerais: código -> (nome, arquivo, prefixo de id)
GERAIS = {
    "LP": ("Língua Portuguesa", "gerais-lp.js", "LP"),
    "RLE": ("Raciocínio Lógico e Estatística", "gerais-rle.js", "RLE"),
    "ATU": ("Atualidades do Mercado Financeiro e Digital", "gerais-atualidades.js", "ATU"),
    "ETI": ("Ética, Compliance e ESG", "gerais-etica.js", "ETI"),
}

MATERIA_ESPECIFICOS = "Desenvolvimento de Sistemas"

# 12 eixos do Anexo IV: sigla -> (nome, arquivo, questões por prova)
EIXOS = {
    "PROC": ("Processo de desenvolvimento de software", "esp-processo.js", 7),
    "PROG": ("Programação", "esp-programacao.js", 7),
    "GOV": ("Gestão e Governança de TI", "esp-governanca.js", 6),
    "BD": ("Banco de Dados", "esp-bd.js", 6),
    "WEB": ("Desenvolvimento web e mobile", "esp-web.js", 5),
    "SEG": ("Segurança da Informação", "esp-seguranca.js", 4),
    "ARQ": ("Arquitetura de sistemas", "esp-arquitetura.js", 3),
    "DEVOPS": ("DevOps e DevSecOps", "esp-devops.js", 3),
    "SO": ("Sistemas Operacionais", "esp-so.js", 3),
    "REDES": ("Redes de computadores", "esp-redes.js", 3),
    "SERV": ("Serviços e gerenciamento de redes", "esp-servicos.js", 2),
    "NUVEM": ("Computação em nuvem", "esp-nuvem.js", 1),
}

GERAIS_POR_PROVA = {"LP": 10, "RLE": 10, "ATU": 5, "ETI": 5}

NOMES_EIXOS = [v[0] for v in EIXOS.values()]
NOMES_MATERIAS = [v[0] for v in GERAIS.values()] + [MATERIA_ESPECIFICOS]
SIGLA_POR_EIXO = {v[0]: k for k, v in EIXOS.items()}
COD_POR_MATERIA = {v[0]: k for k, v in GERAIS.items()}

FORMATOS = ("multipla_5", "multipla_4", "certo_errado")
TIPOS_ORIGEM = ("prova_real", "apostila", "simulado", "variacao")
STATUS = ("rascunho", "validada", "rejeitada", "duvida")
BLOCOS = ("gerais", "especificos")

MODULOS = {
    "01": "01 - Língua Portuguesa",
    "02": "02 - Raciocínio Lógico e Matemático",
    "03": "03 - Conhecimentos Bancários e Governança de TIC",
    "04": "04 - Fundamentos, SO, Redes e Segurança",
    "05": "05 - Bancos de Dados e Linguagens",
    "06": "06 - Engenharia de Software, Requisitos e Desenvolvimento",
    "07": "07 - Nuvem, TypeScript e Front-end moderno",
}

# Classificação padrão de cada seção (## N.) da apostila.
# Valor: código de matéria geral (LP, RLE, ATU, ETI) ou sigla de eixo.
# Quando é uma função, decide por palavras-chave no texto da questão.
import re


def _tem(texto, padrao):
    return re.search(padrao, texto, re.I) is not None


def _m03_s17(t):
    if _tem(t, r"compliance|anticorrup|12\.846|tr[eê]s linhas|ESG|clim[aá]tic|socioambiental|sustentab|[ée]tic|integridade|corrup|den[uú]ncia|governan[cç]a corporativa|conflito de interesse"):
        return "ETI"
    return "ATU"


def _m03_s21(t):
    if _tem(t, r"educa[cç][aã]o financeira|inclus[aã]o financeira|consumidor|superendivid|portabilidade|cr[eé]dito consignado"):
        return "ATU"
    return "ETI"


def _m04_s13(t):
    if _tem(t, r"docker|kubernetes|cont[eê]iner|container|\bpod\b|imagem|orquestr|dockerfile|compose|helm|registry"):
        return "DEVOPS"
    return "SO"


def _m04_s16(t):
    if _tem(t, r"\bVPN|IPsec|TLS|SSL"):
        return "SEG" if _tem(t, r"VPN") else "REDES"
    if _tem(t, r"SOAP|WSDL|UDDI|web service|REST\b|RESTful"):
        return "WEB"
    if _tem(t, r"SNMP|MIB|proxy|e-?mail|SMTP|POP3?|IMAP|DHCP"):
        return "SERV" if _tem(t, r"SNMP|MIB|proxy") else "REDES"
    return "REDES"


def _m04_s24(t):
    if _tem(t, r"SDN|NFV|VXLAN|OpenFlow|plano de controle|spine|leaf"):
        return "REDES"
    return "SERV"


def _m06_s9(t):
    if _tem(t, r"\bMVC\b|camadas|arquitetura|\bMVP\b|MVVM"):
        return "ARQ"
    return "PROG"


def _m06_s10(t):
    if _tem(t, r"\bSOA\b|ESB|barramento|orquestra|coreograf"):
        return "ARQ"
    return "WEB"


def _m06_s12(t):
    if _tem(t, r"\bgit\b|commit|branch|merge|rebase|gitflow|pull request"):
        return "PROG"
    return "DEVOPS"


def _m06_s14(t):
    if _tem(t, r"usabilidade|heur[ií]stic|Nielsen|acessibilidade|\bUX\b|ergonom"):
        return "WEB"
    return "PROC"


def _m06_s16(t):
    if _tem(t, r"\bTDD\b|\bBDD\b|JUnit|xUnit|NUnit|pytest|pir[aâ]mide de testes|Gherkin"):
        return "PROG"
    return "PROC"


def _m06_s18(t):
    if _tem(t, r"versionamento sem[aâ]ntico|SemVer|MAJOR|\d+\.\d+\.\d+"):
        return "PROC"
    if _tem(t, r"\bgit|gitflow"):
        return "PROG"
    if _tem(t, r"\bIA\b|intelig[eê]ncia artificial|assistente|copilot|LLM"):
        return "PROG"
    return "ARQ"


def _m06_s19(t):
    # Inglês técnico: eixo mais próximo pelo assunto do trecho.
    if _tem(t, r"\bAPI\b|endpoint|REST|HTTP"):
        return "WEB"
    if _tem(t, r"deploy|pipeline|container|Kubernetes|CI/CD|continuous"):
        return "DEVOPS"
    if _tem(t, r"database|query|SQL|table"):
        return "BD"
    if _tem(t, r"security|vulnerab|encrypt|password|attack|firewall"):
        return "SEG"
    if _tem(t, r"cloud|serverless"):
        return "NUVEM"
    if _tem(t, r"\bcode\b|function|variable|compile|bug|class"):
        return "PROG"
    return "PROC"


SECOES = {
    "01": {n: "LP" for n in range(1, 16)},
    "02": {n: "RLE" for n in range(1, 26)},
    "03": {1: "ATU", 2: "ATU", 3: "ATU", 4: "ATU", 5: "ATU", 6: "ATU", 7: "ATU", 8: "ATU",
           9: "ETI", 10: "ETI", 11: "ETI", 12: "ETI",
           13: "GOV", 14: "GOV", 15: "GOV", 16: "GOV",
           17: _m03_s17, 18: "GOV", 19: "GOV", 20: "GOV", 21: _m03_s21},
    "04": {1: "SO", 2: "PROG", 3: "PROG", 4: "PROG", 5: "PROG", 6: "BD", 7: "BD",
           8: "SO", 9: "SO", 10: "SO", 11: "SO", 12: "SO", 13: _m04_s13,
           14: "REDES", 15: "REDES", 16: _m04_s16, 17: "SEG", 18: "SEG", 19: "SEG", 20: "SEG",
           21: "SEG", 22: "SERV", 23: "REDES", 24: _m04_s24, 25: "SERV"},
    "05": {**{n: "BD" for n in range(1, 16)},
               **{16: "WEB", 17: "WEB", 18: "WEB", 19: "WEB", 20: "WEB", 21: "WEB",
                  22: "PROG", 23: "PROG", 24: "PROG", 25: "PROG", 26: "PROG", 27: "BD"}},
    "06": {1: "PROC", 2: "PROC", 3: "PROC", 4: "PROC", 5: "PROC", 6: "PROC", 7: "PROG",
           8: "PROG", 9: _m06_s9, 10: _m06_s10, 11: "ARQ", 12: _m06_s12, 13: "PROC",
           14: _m06_s14, 15: "PROC", 16: _m06_s16, 17: "PROC", 18: _m06_s18, 19: _m06_s19},
    "07": {1: "NUVEM", 2: "NUVEM", 3: "WEB", 4: "WEB", 5: "WEB", 6: "WEB", 7: "WEB"},
}

# ---------------------------------------------------------------------------
# Provas e simulado: classificação manual de cada questão.
# (código, tópico, módulo da apostila, seção da apostila)
# código = LP | RLE | ATU | ETI | sigla de eixo
# ---------------------------------------------------------------------------
PROVA_2021 = {
    1: ("LP", "Coerência e lógica textual", "01", 2),
    2: ("LP", "Descrição e ponto de vista do observador", "01", 3),
    3: ("LP", "Estrutura argumentativa", "01", 3),
    4: ("LP", "Inferência e interpretação de textos", "01", 1),
    5: ("LP", "Interpretação de textos", "01", 1),
    6: ("LP", "Inferência", "01", 1),
    7: ("LP", "Conectivos e valor semântico", "01", 2),
    8: ("LP", "Tempos verbais e voz passiva em títulos", "01", 4),
    9: ("LP", "Estrangeirismos", "01", 13),
    10: ("LP", "Conectivos e reorganização de períodos", "01", 6),
    11: ("LP", "Conjunções coordenativas", "01", 11),
    12: ("LP", "Campo lexical", "01", 12),
    13: ("LP", "Elementos da comunicação", "01", 9),
    14: ("LP", "Clareza e objetividade", "01", 1),
    15: ("LP", "Informatividade", "01", 1),
    16: ("ETI", "Guia de Conduta Ética do Banestes", "03", 12),
    17: ("ATU", "SFN: estrutura e mercados", "03", 1),
    18: ("ATU", "Banco Central e política monetária", "03", 3),
    19: ("ETI", "Lavagem de dinheiro (Lei 9.613/1998)", "03", 9),
    20: ("ATU", "Copom e operações de mercado aberto", "03", 3),
    21: ("ATU", "Correspondentes bancários", "03", 5),
    22: ("ATU", "Competências do CMN", "03", 2),
    23: ("ATU", "Selic e mercado aberto", "03", 3),
    24: ("ATU", "SFN: órgãos normativos", "03", 2),
    25: ("ATU", "Criptoativos", "03", 8),
    26: ("RLE", "Medidas e conversões de área", "02", 10),
    27: ("RLE", "Equivalências lógicas (condicional)", "02", 2),
    28: ("RLE", "Problemas aritméticos (distribuição)", "02", 12),
    29: ("RLE", "Associação lógica", "02", 13),
    30: ("RLE", "Porcentagem", "02", 7),
    31: ("RLE", "Dedução com condicionais", "02", 1),
    32: ("RLE", "Problemas aritméticos (paridade)", "02", 12),
    33: ("RLE", "Anagramas e ordem alfabética", "02", 15),
    34: ("RLE", "Média e mediana", "02", 18),
    35: ("RLE", "Probabilidade com dados", "02", 16),
    36: ("PROG", "Algoritmos de ordenação", "04", 5),
    37: ("BD", "Transações ACID e bloqueios", "05", 9),
    38: ("PROG", "Tabela hash e complexidade", "04", 4),
    39: ("WEB", "JavaScript e DOM", "05", 19),
    40: ("WEB", "Ajax", "05", 20),
    41: ("BD", "Dependências funcionais", "05", 4),
    42: ("WEB", "Métodos HTTP", "05", 16),
    43: ("PROG", "Complemento a dois", "04", 3),
    44: ("WEB", "Ajax (XMLHttpRequest)", "05", 20),
    45: ("WEB", "Seletores CSS", "05", 18),
    46: ("WEB", "XML: elementos", "05", 21),
    47: ("BD", "SQL: produto cartesiano e GROUP BY", "05", 7),
    48: ("BD", "SQL: NOT EXISTS e NULL", "05", 7),
    49: ("BD", "Chaves estrangeiras (DDL)", "05", 6),
    50: ("BD", "SQL: DELETE com subconsulta", "05", 7),
    51: ("BD", "SQL: comparação com NULL", "05", 7),
    52: ("PROC", "Scrum x Kanban", "06", 4),
    53: ("PROG", "Python: listas e laços", "05", 22),
    54: ("PROG", "JavaScript: closures e iteradores", "05", 19),
    55: ("PROG", "C#: propriedades get/set", "05", 25),
    56: ("WEB", "jQuery: seletores e eventos", "05", 20),
    57: ("PROC", "Requisitos funcionais", "06", 13),
    58: ("PROC", "Requisitos não funcionais", "06", 13),
    59: ("PROC", "UML: diagrama de atividades", "06", 15),
    60: ("SEG", "LGPD: anonimização", "04", 20),
}
ANULADAS_2021 = {21, 22}
TEXTOS_2021 = {"TB-2021-T1": range(47, 52)}

PROVA_2024 = {
    1: ("LP", "Tipologia textual", "01", 3),
    2: ("LP", "Tese do texto", "01", 1),
    3: ("LP", "Coesão e coerência", "01", 2),
    4: ("LP", "Aposto", "01", 6),
    5: ("LP", "Pontuação e crase", "01", 6),
    6: ("LP", "Intertextualidade", "01", 2),
    7: ("LP", "Ideia principal", "01", 1),
    8: ("LP", "Gêneros textuais: notícia", "01", 4),
    9: ("LP", "Inferência", "01", 1),
    10: ("LP", "Orações subordinadas substantivas", "01", 6),
    11: ("LP", "Pronome relativo e orações adjetivas", "01", 11),
    12: ("LP", "Períodos, locuções verbais e crase", "01", 6),
    13: ("LP", "Acentuação gráfica", "01", 14),
    14: ("LP", "Ortografia e origem das palavras", "01", 10),
    15: ("LP", "Neologismos", "01", 13),
    16: ("RLE", "Gráficos: curva S", "02", 19),
    17: ("RLE", "Frações", "02", 6),
    18: ("RLE", "Raciocínio com desigualdades", "02", 12),
    19: ("RLE", "Tabelas, média e porcentagem", "02", 19),
    20: ("RLE", "Probabilidade sem reposição", "02", 16),
    21: ("RLE", "Problemas aritméticos", "02", 12),
    22: ("RLE", "Escala", "02", 10),
    23: ("RLE", "Velocidade média", "02", 11),
    24: ("RLE", "Equação do 1º grau", "02", 12),
    25: ("RLE", "Raciocínio lógico (parentesco)", "02", 13),
    26: ("RLE", "Porcentagens sucessivas", "02", 7),
    27: ("RLE", "Negação de 'todo'", "02", 3),
    28: ("RLE", "Conjuntos", "02", 5),
    29: ("RLE", "Silogismos", "02", 4),
    30: ("RLE", "Divisão proporcional", "02", 9),
    31: ("ATU", "SFN: operadores", "03", 1),
    32: ("ATU", "Competências do Banco Central", "03", 3),
    33: ("ATU", "Depósito compulsório", "03", 3),
    34: ("ATU", "Fintechs: SCD e SEP", "03", 8),
    35: ("ATU", "CDI e mercado interbancário", "03", 6),
    36: ("ATU", "Crédito Direto ao Consumidor", "03", 6),
    37: ("ATU", "Fundos de investimento", "03", 6),
    38: ("ATU", "Tipos de bancos", "03", 5),
    39: ("ATU", "Índice de Basileia", "03", 7),
    40: ("ATU", "Tendências do mercado bancário", "03", 7),
    41: ("ATU", "CMN: funções", "03", 2),
    42: ("ATU", "CMN: composição", "03", 2),
    43: ("ATU", "Copom", "03", 3),
    44: ("ATU", "Banco Central e política monetária", "03", 3),
    45: ("ATU", "CVM", "03", 4),
    46: ("ETI", "Lavagem de dinheiro (Lei 9.613/1998)", "03", 9),
    47: ("ATU", "Criptoativos", "03", 8),
    48: ("ETI", "Guia de Conduta Ética: consciência ambiental", "03", 12),
    49: ("ETI", "Guia de Conduta Ética: Conselho de Conduta", "03", 12),
    50: ("ATU", "Open banking / Open Finance", "03", 8),
    51: ("BD", "Restrições de integridade", "05", 3),
    52: ("BD", "Views", "05", 8),
    53: ("BD", "Chaves estrangeiras: ON UPDATE CASCADE", "05", 6),
    54: ("BD", "INNER JOIN x OUTER JOIN", "05", 7),
    55: ("SEG", "SQL injection e consultas parametrizadas", "04", 19),
    56: ("WEB", "Ajax", "05", 20),
    57: ("PROG", "Python: PyQt", "05", 22),
    58: ("WEB", "Formulários HTML e validação", "05", 17),
    59: ("PROG", "C++: laços e vetores", "05", 24),
    60: ("WEB", "CSS3: @font-face", "05", 18),
    61: ("PROG", "Polimorfismo", "06", 8),
    62: ("PROG", "Herança e abstração", "06", 8),
    63: ("PROG", "ASP clássico", "05", 25),
    64: ("PROC", "Elicitação de requisitos", "06", 13),
    65: ("PROC", "JAD", "06", 13),
    66: ("PROC", "Validação de requisitos", "06", 13),
    67: ("PROC", "Elicitação de requisitos não funcionais", "06", 13),
    68: ("PROC", "Cenários e casos de uso", "06", 13),
    69: ("PROC", "Matriz de rastreabilidade", "06", 13),
    70: ("PROC", "Prototipação", "06", 14),
    71: ("WEB", "Avaliação de usabilidade", "06", 14),
    72: ("PROC", "UML: diagramas estruturais", "06", 15),
    73: ("PROG", "IDE", "04", 2),
    74: ("REDES", "Modelo OSI: camada de aplicação", "04", 14),
    75: ("REDES", "Modelo OSI: camada de sessão", "04", 14),
    76: ("PROC", "Engenharia de requisitos", "06", 13),
    77: ("GOV", "Stakeholders", "03", 13),
    78: ("GOV", "TIC no ambiente de negócios", "03", 13),
    79: ("SO", "Conceito de sistema operacional", "04", 8),
    80: ("GOV", "Benefícios da governança de TIC", "03", 13),
}
ANULADAS_2024 = {12, 32, 43}
TEXTOS_2024 = {"TB-2024-T1": range(1, 5), "TB-2024-T2": range(5, 8), "TB-2024-T3": range(8, 10)}
IMAGENS_2024 = {16: "img/2024-q16-curva-s.png"}

SIMULADO_FCC1 = {
    1: ("PROG", "Java: exceções e finally", "05", 23),
    2: ("BD", "SQL: GROUP BY e HAVING", "05", 7),
    3: ("BD", "SQL: LEFT JOIN e COUNT", "05", 7),
    4: ("BD", "Normalização (3FN)", "05", 4),
    5: ("BD", "Níveis de isolamento", "05", 9),
    6: ("PROG", "Python: argumento padrão mutável", "05", 22),
    7: ("PROG", "Sobrescrita e sobrecarga", "06", 8),
    8: ("PROG", "Padrões GoF: Strategy", "06", 9),
    9: ("PROG", "SOLID: inversão de dependência", "06", 8),
    10: ("WEB", "REST: idempotência e status HTTP", "06", 10),
    11: ("ARQ", "Microsserviços: Saga", "06", 11),
    12: ("PROG", "Git: revert", "06", 12),
    13: ("PROC", "Scrum: artefatos e compromissos", "06", 4),
    14: ("PROC", "Kanban: limite de WIP", "06", 4),
    15: ("PROC", "UML: composição", "06", 15),
    16: ("PROC", "UML: include e extend", "06", 15),
    17: ("PROC", "Testes: análise de valor limite", "06", 16),
    18: ("PROG", "TDD", "06", 16),
    19: ("PROC", "Requisitos não funcionais", "06", 13),
    20: ("WEB", "Heurísticas de Nielsen", "06", 14),
    21: ("SEG", "SQL injection", "04", 19),
    22: ("SEG", "Assinatura digital", "04", 18),
    23: ("SEG", "OWASP Top 10: quebra de controle de acesso", "04", 19),
    24: ("SEG", "LGPD: controlador e operador", "04", 20),
    25: ("REDES", "TCP e UDP", "04", 16),
    26: ("PROG", "Estruturas de dados e complexidade", "04", 4),
    27: ("SO", "Deadlock: condições de Coffman", "04", 8),
    28: ("NUVEM", "Modelos de serviço (PaaS)", "07", 1),
    29: ("WEB", "React: useEffect", "07", 5),
    30: ("WEB", "TypeScript e Angular", "07", 6),
    31: ("ATU", "Copom e Selic", "03", 3),
    32: ("ETI", "Lavagem de dinheiro: fases", "03", 9),
    33: ("ETI", "Lavagem de dinheiro: comunicação ao Coaf", "03", 10),
    34: ("ATU", "Open Finance", "03", 8),
    35: ("ATU", "FGC", "03", 6),
    36: ("GOV", "COBIT 2019: domínios", "03", 14),
    37: ("GOV", "ITIL 4: cadeia de valor", "03", 15),
    38: ("GOV", "ITIL: gerenciamento de problemas", "03", 15),
    39: ("ATU", "Política monetária e Selic", "03", 3),
    40: ("SEG", "Res. CMN 4.893/2021: segurança cibernética", "07", 2),
}
