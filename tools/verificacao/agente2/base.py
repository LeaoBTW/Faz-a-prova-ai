# -*- coding: utf-8 -*-
"""Base comum do agente 2 (variações dos Conhecimentos Gerais).

Cada módulo de matéria (lp.py, rle.py, atu.py, eti.py) chama Q(...) para cadastrar
questões. O gerador (gerar.py) monta os objetos do banco, distribui o gabarito
de forma equilibrada entre A–E, embaralha os distratores com semente fixa e
escreve banco/variacoes-gerais.js e docs/log-agente2.md.

As contas de RLE são feitas em Python no próprio rle.py (com assert), então
rodar `python3 tools/verificacao/agente2/gerar.py` já refaz toda a verificação.
"""
import os
import re

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
APOSTILA = os.environ.get(
    "APOSTILA_DIR",
    "/tmp/claude-0/-home-user/37b48098-d7f1-5e22-8c73-c1ddd7b6cb6c/scratchpad/fontes/apostila")

MODULOS = {
    "01": "01 - Língua Portuguesa",
    "02": "02 - Raciocínio Lógico e Matemático",
    "03": "03 - Conhecimentos Bancários e Governança de TIC",
}

# Títulos das seções (## N. Título) – copiados da apostila para montar ref_apostila
# sem depender do arquivo da apostila em tempo de execução.
SECOES = {
    "01": {
        "1": "Interpretação e compreensão de textos; organização estrutural",
        "2": "Coesão, coerência e intertextualidade ⭐",
        "3": "Modos de organização discursiva (descrição, narração, exposição, argumentação, injunção) ⭐",
        "4": "Tipos textuais (informativo, publicitário, propagandístico, normativo, didático, divinatório); textos literários e não literários",
        "5": "Tipologia da frase",
        "6": "Estrutura da frase: deslocamento, substituição, modificação e correção; norma culta; pontuação; sintaxe de termos e orações; ordem direta e inversa ⭐",
        "7": "Tipos de discurso",
        "8": "Registros e funções da linguagem",
        "9": "Elementos da comunicação",
        "10": "Estrutura e formação de palavras; abreviações",
        "11": "Classes de palavras (aspectos morfológicos, sintáticos, semânticos e textuais; modalizadores)",
        "12": "Semântica (sentido próprio e figurado, sinônimos, antônimos, parônimos, hiperônimos, polissemia, ambiguidade); dicionários",
        "13": "Vocabulário: neologismos, arcaísmos, estrangeirismos, latinismos ⭐",
        "14": "Ortografia, acentuação gráfica e crase ⭐",
        "15": "Complemento do edital 2027: vozes do verbo, correlação de tempos e modos, flexão, contexto histórico e redação",
    },
    "02": {
        "1": "Lógica proposicional e tabelas-verdade",
        "2": "Equivalências e negações (De Morgan, condicional)",
        "3": "Quantificadores e negação de \"todo/algum/nenhum\"",
        "4": "Silogismos, argumentos e diagramas lógicos",
        "5": "Conjuntos e diagramas de Venn",
        "6": "Conjuntos numéricos e operações",
        "7": "Porcentagem e variações sucessivas",
        "8": "Juros simples e compostos",
        "9": "Razão, proporção, regra de três e divisão proporcional",
        "10": "Medidas e conversões (incluindo escala)",
        "11": "Velocidade média e problemas de movimento",
        "12": "Equações e problemas aritméticos",
        "13": "Relações arbitrárias e associação lógica",
        "14": "Sequências (numéricas, de letras e de figuras)",
        "15": "Análise combinatória (contagem)",
        "16": "Probabilidade",
        "17": "Geometria plana (e noções de volumes)",
        "18": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
        "19": "Gráficos e tabelas (incluindo curva S)",
        "20": "Plano cartesiano",
        "21": "Matrizes básicas (e determinantes)",
        "22": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
        "23": "Estatística inferencial básica (amostragem, distribuição normal, correlação)",
        "24": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
        "25": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
    },
    "03": {
        "1": "Sistema Financeiro Nacional: conceito, estrutura e segmentos",
        "2": "Órgãos normativos: CMN, CNSP e CNPC",
        "3": "Banco Central do Brasil, Copom, Selic e política monetária",
        "4": "CVM, mercado de capitais e supervisores de seguros e previdência",
        "5": "Instituições financeiras e tipos de bancos (inclui o Banestes)",
        "6": "Produtos e serviços bancários, fundos de investimento e FGC",
        "7": "Dinâmica do mercado bancário: intermediação, spread, política monetária x fiscal, Basileia",
        "8": "Ruptura digital no setor bancário: Pix, Open Finance, fintechs, bancos digitais, criptoativos e Drex",
        "9": "Lavagem de dinheiro: conceito, fases, Lei 9.613/1998 e COAF",
        "10": "Prevenção à lavagem de dinheiro nas instituições: Circular 3.978/2020, KYC, PEP e comunicações",
        "11": "Crimes contra o SFN (Lei 7.492/1986), sigilo bancário (LC 105/2001) e LGPD",
        "12": "Guia de Conduta Ética do Sistema Financeiro Banestes",
        "17": "Complementos FCC: seguros, previdência, capitalização, suitability, consumidor, compliance, ESG e Res. 4.966",
        "21": "Complemento do edital 2027: ética, compliance, governança corporativa e ESG",
    },
}

MATERIAS = {
    "LP": ("Língua Portuguesa", "01"),
    "RLE": ("Raciocínio Lógico e Estatística", "02"),
    "ATU": ("Atualidades do Mercado Financeiro e Digital", "03"),
    "ETI": ("Ética, Compliance e ESG", "03"),
}

QUESTOES = []  # lista de specs (dicts)


def ref(modulo, secao):
    titulo = SECOES[modulo][secao]
    t_limpo = titulo.replace(" ⭐", "")
    return {
        "modulo": modulo,
        "secao": secao,
        "titulo": t_limpo,
        "link": "[[%s#%s. %s]]" % (MODULOS[modulo], secao, titulo),
    }


def Q(mat, secao, enunciado, correta, erradas, explic="", pai=None, topico=None,
      dif=2, tags=None, var="", verif="", ordem=False, modulo=None):
    """Cadastra uma questão.

    mat      – LP, RLE, ATU ou ETI
    secao    – número da seção da apostila (string)
    correta  – (texto, explicação) da alternativa correta
    erradas  – lista de 4 tuplas (texto, explicação do erro)
    explic   – explicação geral (vai no início do comentário)
    pai      – id da questão-pai (variação) ou None (inédita)
    var      – descrição do tipo de variação (vai para o log)
    verif    – como foi verificado (vai para o log)
    ordem    – True se a ordem das alternativas importa (ex.: valores crescentes)
    """
    assert mat in MATERIAS, mat
    assert len(erradas) == 4, (mat, enunciado[:60])
    textos = [correta[0]] + [e[0] for e in erradas]
    assert len(set(textos)) == 5, ("alternativas repetidas", textos)
    QUESTOES.append(dict(mat=mat, secao=str(secao), enunciado=enunciado.strip(),
                         correta=correta, erradas=erradas, explic=explic.strip(),
                         pai=pai, topico=topico, dif=dif, tags=list(tags or []),
                         var=var, verif=verif, ordem=ordem,
                         modulo=modulo or MATERIAS[mat][1]))


# ---------- formatação numérica (padrão brasileiro) ----------

def brl(x, casas=2):
    """R$ 1.234,56"""
    return "R$ " + num(x, casas)


def num(x, casas=2):
    s = ("{:,.%df}" % casas).format(x)
    return s.replace(",", "X").replace(".", ",").replace("X", ".")


def pct(x, casas=2):
    """x em fração (0,0125 -> 1,25%)"""
    return num(x * 100, casas) + "%"
