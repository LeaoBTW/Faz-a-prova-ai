# -*- coding: utf-8 -*-
"""Infraestrutura do agente 4 (variações dos Específicos, parte B).

Cada arquivo dados_<eixo>.py define uma lista QUESTOES com chamadas Q(...).
gerar.py junta tudo, numera os ids (ESP-<SIGLA>-V001...) e grava banco/variacoes-esp-b.js.
Os scripts verif_*.py importam os dados e conferem cálculos/saídas com assert.
"""
import os
import re
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(AQUI)))
sys.path.insert(0, os.path.join(RAIZ, "tools"))

import catalogo as C  # noqa: E402
from importar import titulo_topico, link_wiki  # noqa: E402

# Títulos das seções "## N." da apostila usadas por este agente.
SECOES = {
    ("04", 1): "Organização de computadores e hierarquia de memória",
    ("04", 8): "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    ("04", 9): "Gerência de memória",
    ("04", 10): "Sistemas de arquivos",
    ("04", 11): "Windows Server",
    ("04", 12): "Linux",
    ("04", 13): "Virtualização e contêineres",
    ("04", 14): "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    ("04", 15): "Endereçamento IPv4/IPv6 e sub-redes",
    ("04", 16): "Protocolos e serviços, Web Services e VPN",
    ("04", 17): "Segurança: princípios, vulnerabilidades e ataques",
    ("04", 18): "Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)",
    ("04", 19): "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    ("04", 20): "LGPD – Lei Geral de Proteção de Dados",
    ("04", 21): "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017",
    ("04", 22): "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    ("04", 23): "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    ("04", 24): "VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN",
    ("04", 25): "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
    ("06", 9): "Padrões de projeto GoF, MVC e arquitetura em camadas",
    ("06", 10): "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    ("06", 11): "Microsserviços",
    ("06", 12): "DevOps, CI/CD, IaC, contêineres e Git",
    ("06", 16): "Testes de software",
    ("06", 18): "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    ("07", 1): "Computação em nuvem: definição NIST, características, modelos de serviço e de implantação",
    ("07", 2): "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário",
}

EIXO_POR_SIGLA = {k: v[0] for k, v in C.EIXOS.items()}


class Questao(dict):
    pass


def Q(eixo, mod, sec, enun, alts, gab, com, sub=None, pai=None, dif=2, top=None,
      tags=None, emb=True, k=None, mv=None):
    assert eixo in EIXO_POR_SIGLA, eixo
    assert (mod, sec) in SECOES, (mod, sec)
    assert isinstance(alts, (list, tuple)) and len(alts) == 5, enun[:60]
    assert gab in "ABCDE"
    com = com.strip()
    if mv and mv != gab:
        # troca a alternativa correta de posição com a letra `mv` e ajusta as referências do comentário
        alts = list(alts)
        i, j = "ABCDE".index(gab), "ABCDE".index(mv)
        alts[i], alts[j] = alts[j], alts[i]
        troca = {gab: mv, mv: gab}
        com = re.sub(r"\(([A-E])\)", lambda m: "(%s)" % troca.get(m.group(1), m.group(1)), com)
        com = re.sub(r"Gabarito: ([A-E])", lambda m: "Gabarito: %s" % troca.get(m.group(1), m.group(1)), com)
        gab = mv
    q = Questao(eixo=eixo, mod=mod, sec=sec, sub=sub or str(sec), enun=enun.strip(),
                alts=dict(zip("ABCDE", alts)), gab=gab, com=com, pai=pai,
                dif=dif, top=top, tags=list(tags or []), emb=emb, k=k)
    return q


def correta(q):
    return q["alts"][q["gab"]]


def carregar_pais():
    from validar_banco import carregar
    qs, _, _ = carregar(RAIZ)
    return {q["id"]: q for q in qs if not q["__arquivo"].startswith("variacoes-")}


def montar(q, qid, pais):
    titulo = SECOES[(q["mod"], q["sec"])]
    if q["pai"]:
        pai = pais[q["pai"]]
        origem = {"tipo": "variacao", "fonte": "Variação de " + pai["origem"]["fonte"],
                  "id_pai": q["pai"], "anulada": False}
        topico = q["top"] or pai["topico"]
    else:
        origem = {"tipo": "simulado", "fonte": "Inédita – Apostila %s §%s" % (q["mod"], q["sub"]),
                  "id_pai": None, "anulada": False}
        topico = q["top"] or titulo_topico(titulo)
    return {
        "id": qid,
        "concursos": [C.CONCURSO],
        "banca_estilo": "FCC",
        "bloco": "especificos",
        "materia": C.MATERIA_ESPECIFICOS,
        "eixo": EIXO_POR_SIGLA[q["eixo"]],
        "topico": topico,
        "ref_apostila": {"modulo": q["mod"], "secao": str(q["sec"]), "titulo": titulo,
                         "link": link_wiki(q["mod"], q["sec"], titulo)},
        "origem": origem,
        "formato": "multipla_5",
        "dificuldade": q["dif"],
        "texto_base": None,
        "enunciado": q["enun"],
        "imagem": None,
        "alternativas": q["alts"],
        "gabarito": q["gab"],
        "comentario": q["com"] + "\n\nRevisar: Apostila %s, §%s." % (q["mod"], q["sub"]),
        "tags": q["tags"],
        "embaralhavel": q["emb"],
        "status": "rascunho",
        "validacao": {"por": "agente-4", "em": "2026-11-13", "obs": ""},
        "versao": 1,
    }


def correta_por_chave(k):
    """Texto da alternativa correta da questão de chave k (para os scripts verif_*.py)."""
    from gerar import por_chave
    qid, q = por_chave()[k]
    return qid, q["alts"][q["gab"]], q


def confere(k, esperado):
    qid, txt, _ = correta_por_chave(k)
    assert esperado in txt, "%s (%s): esperado %r na alternativa correta %r" % (qid, k, esperado, txt)
    print("ok  %-14s %-24s -> %s" % (qid, k, esperado))
