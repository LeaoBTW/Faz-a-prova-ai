# -*- coding: utf-8 -*-
"""Infraestrutura das questões de reforço (temas do edital com poucas questões).

Cada dados_*.py define QUESTOES com chamadas Q(...). A alternativa correta é escrita
primeiro; gerar.py distribui a posição do gabarito de forma equilibrada e determinística.
"""
import json
import os

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(os.path.dirname(AQUI))
SECOES = json.load(open(os.path.join(AQUI, "secoes.json"), encoding="utf-8"))
EIXOS = {
    "PROC": "Processo de desenvolvimento de software", "PROG": "Programação",
    "GOV": "Gestão e Governança de TI", "BD": "Banco de Dados",
    "WEB": "Desenvolvimento web e mobile", "SEG": "Segurança da Informação",
    "ARQ": "Arquitetura de sistemas", "DEVOPS": "DevOps e DevSecOps",
    "SO": "Sistemas Operacionais", "REDES": "Redes de computadores",
    "SERV": "Serviços e gerenciamento de redes", "NUVEM": "Computação em nuvem",
}


def Q(eixo, ref, topico, enun, certa, erradas, exp, dif=2, tags=None, ver=None):
    """ver = (linguagem, codigo, saida_esperada) para conferência por execução."""
    assert eixo in EIXOS, eixo
    assert ref in SECOES, ref
    assert len(erradas) == 4, enun[:60]
    return dict(eixo=eixo, ref=ref, topico=topico, enun=enun.strip(), certa=certa.strip(),
                erradas=[e.strip() for e in erradas], exp=exp.strip(), dif=dif,
                tags=tags or [], ver=ver)


def bloco(ling, codigo):
    return "```" + ling + "\n" + codigo.strip("\n") + "\n```"
