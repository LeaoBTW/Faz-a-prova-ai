# -*- coding: utf-8 -*-
"""Unifica os nomes de tópico do banco.

Os tópicos vêm de fontes diferentes (importação, variações, reforço) e ficaram fragmentados:
"CMN: funções", "CMN: composição", "Competências do CMN"... Este script agrupa esses nomes em
temas e grava banco/topicos.js, com o mapa {unidade: {tópico original: tema}}. O app aplica o
mapa ao carregar (FP.dados.aplicarTopicos); os arquivos das questões não são alterados.

Uso: python3 tools/topicos.py             (regrava banco/topicos.js e mostra a contagem por tema)
     python3 tools/topicos.py --conferir  (falha se houver tópico sem tema ou se o arquivo estiver desatualizado)

Ao acrescentar questões com um tópico novo, inclua uma regra abaixo (ou reutilize um nome de
tópico já mapeado) e rode o script. Em cada unidade vale a primeira regra cujo padrão casa.
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

SAIDA = os.path.join(RAIZ, "banco", "topicos.js")

REGRAS = {
    "Língua Portuguesa": [
        (r"[Cc]rase|Ortografia|Acentuação", "Ortografia, acentuação e crase"),
        (r"Vozes do verbo|Complemento do edital 2027|Tempos verbais", "Vozes do verbo, tempos e modos, flexão"),
        (r"Interpretação|Inferência|Ideia principal|Tese|Informatividade|Estrutura argumentativa|Descrição",
         "Interpretação e compreensão de textos"),
        (r"Coesão|Coerência|Intertextualidade|Conectivos|Conjunções", "Coesão, coerência e conectivos"),
        (r"Estrutura da frase|Orações|Pronome relativo|Aposto|Tipologia da frase|Clareza",
         "Sintaxe, pontuação e reescrita de frases"),
        (r"Classes de palavras", "Classes de palavras"),
        (r"formação de palavras|Vocabulário|Neologismos|Estrangeirismos", "Formação de palavras e vocabulário"),
        (r"Semântica|Campo lexical", "Semântica: sinonímia, sentido figurado e ambiguidade"),
        (r"Tipos de discurso", "Tipos de discurso"),
        (r"Tipos textuais|Tipologia textual|Gêneros|Modos de organização", "Tipos e gêneros textuais"),
        (r"Elementos da comunicação|Registros e funções", "Comunicação, registros e funções da linguagem"),
    ],
    "Raciocínio Lógico e Estatística": [
        (r"Juros|[Cc]apitalização contínua", "Juros simples e compostos, taxas e capitalização"),
        (r"Matemática financeira|data focal", "Matemática financeira: descontos, rendas, amortização, VPL e TIR"),
        (r"Estatística|Média|Gráficos|Tabelas", "Estatística, gráficos e tabelas"),
        (r"Probabilidade", "Probabilidade"),
        (r"combinatória|Anagramas", "Análise combinatória"),
        (r"Porcentage", "Porcentagem"),
        (r"Razão|Divisão proporcional|Escala|Medidas|Velocidade", "Razão, proporção, regra de três e medidas"),
        (r"Conjuntos numéricos|Equaç|Problemas aritméticos|Frações|desigualdades",
         "Números, frações, equações e problemas"),
        (r"Conjuntos", "Conjuntos e diagramas de Venn"),
        (r"Silogismos", "Silogismos e argumentos"),
        (r"Lógica proposicional|Equivalências|Negação|Quantificadores|Dedução",
         "Lógica proposicional, equivalências e negações"),
        (r"Relações arbitrárias|Associação|parentesco|Sequências", "Associação lógica e sequências"),
        (r"Geometria|Plano cartesiano|Matrizes", "Geometria, plano cartesiano e matrizes"),
    ],
    "Atualidades do Mercado Financeiro e Digital": [
        (r"CMN|[Óó]rgãos normativos", "CMN e órgãos normativos"),
        (r"^SFN|Sistema Financeiro Nacional", "Sistema Financeiro Nacional: estrutura"),
        (r"Banco Central|Copom|Selic|Política monetária|compulsório|CDI",
         "Banco Central, Copom, Selic e política monetária"),
        (r"CVM", "CVM e mercado de capitais"),
        (r"Instituições financeiras|Tipos de bancos|Correspondentes", "Instituições financeiras e tipos de bancos"),
        (r"Produtos e serviços|FGC|Fundos|Crédito Direto", "Produtos e serviços bancários, fundos e FGC"),
        (r"Ruptura|Open|Fintechs|Criptoativos|Tendências", "Pix, Open Finance, fintechs e moedas digitais"),
        (r"Dinâmica|Basileia", "Mercado bancário: spread, riscos e Basileia"),
        (r"Seguros|Complemento", "Educação financeira, consumidor, seguros e ESG"),
    ],
    "Ética, Compliance e ESG": [
        (r"Guia de Conduta", "Guia de Conduta Ética do Banestes"),
        (r"Prevenção à lavagem|Coaf", "Prevenção à lavagem: KYC, PEP e comunicações ao Coaf"),
        (r"Lavagem", "Lavagem de dinheiro: conceito, fases e Lei 9.613/1998"),
        (r"Crimes contra o SFN", "Crimes contra o SFN, sigilo bancário e LGPD"),
        (r"[Éé]tica|Complemento|Seguros", "Ética, compliance, governança corporativa e ESG"),
    ],
    "Processo de desenvolvimento de software": [
        (r"BPMN", "BPMN"),
        (r"UML|Cenários", "UML 2.5 e casos de uso"),
        (r"Scrum|Kanban|Métodos ágeis|XP", "Métodos ágeis: Scrum, Kanban e XP"),
        (r"[Rr]equisitos|JAD|[Ee]licitação|[Rr]astreabilidade", "Engenharia de requisitos e rastreabilidade"),
        (r"Prototipação", "Prototipação e usabilidade"),
        (r"[Tt]este|Verificação e validação", "Testes de software"),
        (r"Qualidade|25010|CMMI|MPS|12207", "Qualidade e processos: ISO 25010, CMMI, MPS.BR e ISO 12207"),
        (r"Ciclo de vida|Processo Unificado", "Ciclo de vida e modelos de processo"),
        (r"Métricas", "Métricas e estimativas"),
        (r"configuração|Versionamento semântico|Revisão de código|Arquitetura e práticas",
         "Gestão de configuração, versionamento e code review"),
        (r"low-code|semiestruturados|Dicionário", "Low-code, dados semiestruturados e documentação"),
        (r"Inglês", "Inglês técnico"),
    ],
    "Programação": [
        (r"[Aa]cesso a banco", "Acesso a banco de dados (JDBC, PDO)"),
        (r"^Java\b(?!Script)", "Java"),
        (r"Python", "Python"),
        (r"C#|\.NET|ASP", "C# e .NET"),
        (r"^C:|^C\+\+|Linguagem C", "C e C++"),
        (r"PHP|JavaScript", "PHP e JavaScript"),
        (r"Análise e projeto|Herança|Polimorfismo|Sobrescrita|SOLID", "Orientação a objetos e SOLID"),
        (r"Padrões", "Padrões de projeto (GoF) e MVC"),
        (r"Algoritmos|Complexidade|Estruturas de dados|Recursão|Tabela hash",
         "Algoritmos, estruturas de dados e complexidade"),
        (r"Hardware|Tipos de dados|Complemento a dois|IDE", "Fundamentos: compilação, tipos e representação de dados"),
        (r"Git|DevOps", "Git, GitFlow e code review"),
        (r"TDD|BDD|Testes", "Testes automatizados, TDD e BDD"),
        (r"assistentes|Arquitetura e práticas", "Assistentes de código com IA e boas práticas"),
    ],
    "Gestão e Governança de TI": [
        (r"COBIT", "COBIT 2019"),
        (r"TOGAF|PETIC|complementar|Interoperabilidade|Redação", "Planejamento de TIC, TOGAF e padronização"),
        (r"ITIL|níveis de serviço|SLA|Melhoria contínua", "ITIL e gestão de serviços (SLA e OLA)"),
        (r"38500|20000", "ISO/IEC 38500 e ISO/IEC 20000"),
        (r"PMBOK|portfólio", "PMBOK 8ª edição, projetos e portfólio"),
        (r"14\.133|13\.303|IN SGD|Contrat|Critérios de desempenho", "Contratações de TIC (Lei 14.133/2021)"),
        (r"31000", "Gestão de riscos: ISO 31000"),
        (r"Gestão financeira", "Gestão financeira de TI: TCO, ROI, CAPEX, OPEX e FinOps"),
        (r".", "Governança de TIC: conceitos, alinhamento e stakeholders"),
    ],
    "Banco de Dados": [
        (r"CTE|Funções de janela", "SQL: CTE e funções de janela"),
        (r"SQL – DDL|Chaves estrangeiras", "SQL: DDL, DCL e TCL"),
        (r"views|Views", "SQL: views, índices, triggers e procedures"),
        (r"^SQL|JOIN", "SQL: consultas (SELECT, JOIN, agrupamento e subconsultas)"),
        (r"PL/|ODBC", "PL/SQL, PL/pgSQL e SGBDs (PostgreSQL, Oracle e H2)"),
        (r"Transações|isolamento|Recuperação", "Transações, concorrência e recuperação"),
        (r"Dependências|Normalização", "Normalização"),
        (r"Conceitos, SGBD|Álgebra", "Conceitos de SGBD e álgebra relacional"),
        (r"Modelagem|Modelo relacional|Restrições", "Modelagem (MER) e modelo relacional"),
        (r"Data Mining|Exploração de dados", "Data mining e machine learning"),
        (r"[Dd]ata", "Data warehouse, data lake e OLAP"),
        (r"Governança", "Governança e qualidade de dados"),
        (r"NoSQL", "NoSQL"),
        (r"Otimização|Índices", "Índices e otimização de consultas"),
    ],
    "Desenvolvimento web e mobile": [
        (r"HTML", "HTML5"),
        (r"CSS|Bootstrap|responsivo", "CSS3, Bootstrap 5 e design responsivo"),
        (r"TypeScript", "TypeScript"),
        (r"JavaScript|[Jj][Qq]uery|Ajax", "JavaScript, DOM, jQuery e Ajax"),
        (r"Angular|React|Vue|Front-end", "Frameworks front-end (React, Angular, Vue) e Node.js"),
        (r"Interoperabilidade|Protocolos|Métodos HTTP", "Web Services, SOAP, REST e HTTP"),
        (r"XML", "XML e XML Schema"),
        (r"OpenAPI|Versionamento|Design de APIs|Governança de APIs|^REST", "APIs: OpenAPI, versionamento, design e governança"),
        (r"Programação web|Servidores|intranet", "Web: cliente-servidor, servidores e portais"),
        (r"[Aa]cessibilidade|usabilidade|Nielsen|Prototipação", "UX, usabilidade e acessibilidade (WCAG)"),
    ],
    "Segurança da Informação": [
        (r"LGPD", "LGPD"),
        (r"Criptografia|hash|Assinatura|Certificado|SSL", "Criptografia, hash, assinatura e certificado digital"),
        (r"OWASP|SQL injection|XSS", "OWASP Top 10 e segurança de aplicações"),
        (r"IAM|Controle de acesso", "Controle de acesso, IAM, OAuth 2.0 e OIDC"),
        (r"Gestão de|27017|27001|Res\. CMN|Backup", "Normas e gestão: ISO 27001/27002, riscos e incidentes"),
        (r"Sistemas de proteção|Mecanismos de defesa|SOC|VPN|Defesa em profundidade|sem fio",
         "Proteção de redes: firewall, IDS/IPS, VPN, Zero Trust e Wi-Fi"),
        (r"princípios|Ataques e ameaças", "Princípios, ameaças e ataques (malware, DoS e DDoS)"),
    ],
    "Arquitetura de sistemas": [
        (r"resiliência", "Padrões de resiliência: API Gateway, circuit breaker e Service Discovery"),
        (r"Microsserviços|microsserviços", "Microsserviços"),
        (r"DDD|Arquitetura e práticas", "DDD, arquitetura hexagonal e sistemas legados"),
        (r"Interoperabilidade|Objetos distribuídos", "SOA, Web Services e objetos distribuídos"),
        (r"Padrões de projeto", "MVC, camadas e padrões de projeto"),
        (r"cloud-native|Nuvem", "Arquiteturas cloud-native"),
    ],
    "DevOps e DevSecOps": [
        (r"DevSecOps", "DevSecOps: segurança no pipeline"),
        (r"DevOps|regressão|Testes", "CI/CD, pipelines e infraestrutura como código"),
        (r"Kubernetes|Estratégias de implantação", "Kubernetes e estratégias de implantação"),
        (r"Observabilidade|Monitoramento", "Observabilidade e monitoramento"),
        (r"Virtualização", "Contêineres e Docker"),
    ],
    "Sistemas Operacionais": [
        (r"[Mm]emória", "Gerenciamento de memória"),
        (r"Sistemas operacionais|Conceito|Deadlock|Sincronização|entrada e saída",
         "Processos, threads, escalonamento, sincronização e deadlock"),
        (r"arquivos|Armazenamento", "Sistemas de arquivos e armazenamento"),
        (r"Linux|Hardening|Automação", "Linux, hardening e automação"),
        (r"Windows|Active Directory|PowerShell", "Windows, Active Directory e PowerShell"),
        (r"Virtualização|Containers", "Virtualização e contêineres"),
    ],
    "Redes de computadores": [
        (r"Endereçamento", "Endereçamento IPv4/IPv6 e sub-redes"),
        (r"Cabeamento", "Cabeamento estruturado e fibra óptica"),
        (r"IEEE", "Padrões IEEE 802: Ethernet, VLAN e Wi-Fi"),
        (r"roteamento|MPLS|SDN|VoIP", "Roteamento (OSPF e BGP), MPLS, SDN e VXLAN"),
        (r"Protocolos|ARP|DHCP|SSH|IPsec|TCP e UDP", "Protocolos TCP/IP: TCP, UDP, DNS, DHCP, IPsec e SSH"),
        (r"Redes:|Modelo OSI|Classificação|Comutação", "Modelos OSI e TCP/IP, tipos de rede e comutação"),
    ],
    "Serviços e gerenciamento de redes": [
        (r"Monitoramento|SNMP|logs", "Monitoramento, SNMP e logs"),
        (r"Servidores web", "Servidores web e de aplicação"),
        (r"VoIP|Multicast", "VoIP, QoS e multicast"),
        (r"avaliação de desempenho|Níveis de serviço", "Desempenho e níveis de serviço (RFC 2544 e RFC 2889)"),
        (r"Serviços de|VPN|usuários", "Serviços de rede: e-mail, DHCP, proxy, VPN e usuários"),
    ],
    "Computação em nuvem": [
        (r"Computação em nuvem|Modelos de", "Modelos de serviço e de implantação"),
        (r"Nuvem na prática|Escalabilidade|Serviços gerenciados", "Escalabilidade, disponibilidade e serviços gerenciados"),
        (r"migração|Governança", "Migração, governança e custos de nuvem"),
        (r"Rancher", "Rancher e Kubernetes"),
        (r"Inglês", "Inglês técnico"),
    ],
}


MATERIAS_SO_TB = {"Matemática/Raciocínio Lógico e Quantitativo", "Atualidades do Mercado Financeiro",
                  "Conhecimentos Bancários e Securitários", "Matemática Financeira",
                  "Noções de Probabilidade e Estatística", "Noções de Informática e Comportamentos Digitais",
                  "Vendas, Negociação e Atendimento"}


def tema(unidade, topico):
    # matérias que só existem no Técnico Bancário: os tópicos já vêm de uma lista fechada
    # (tools/tecnico/comum.py) e ficam como estão
    if unidade in MATERIAS_SO_TB:
        return topico
    # o tópico já é o nome de um tema (ex.: questões da prova real do Técnico Bancário)
    if topico in {nome for _, nome in REGRAS.get(unidade, [])}:
        return topico
    for padrao, nome in REGRAS.get(unidade, []):
        if re.search(padrao, topico):
            return nome
    return None


def montar():
    questoes, _, _ = V.carregar(RAIZ)
    mapa = collections.OrderedDict()
    cont = collections.defaultdict(collections.Counter)
    sem = set()
    for q in questoes:
        u = q.get("eixo") or q.get("materia")
        t = q.get("topico") or ""
        novo = tema(u, t)
        if novo is None:
            sem.add((u, t))
            continue
        mapa.setdefault(u, {})[t] = novo
        if q.get("status") == "validada":
            cont[u][novo] += 1
    return mapa, cont, sem


def texto(mapa):
    ordenado = collections.OrderedDict((u, collections.OrderedDict(sorted(mapa[u].items()))) for u in REGRAS if u in mapa)
    return ("/*\n * Temas unificados: mapa {unidade: {tópico original: tema}} aplicado pelo app ao carregar\n"
            " * (FP.dados.aplicarTopicos). Gerado por tools/topicos.py (não editar à mão).\n */\n"
            "window.TOPICOS = " + json.dumps(ordenado, ensure_ascii=False, indent=1) + ";\n")


def main():
    mapa, cont, sem = montar()
    for u, t in sorted(sem):
        print("SEM TEMA: %s | %s" % (u, t))
    novo = texto(mapa)
    if "--conferir" in sys.argv:
        atual = open(SAIDA, encoding="utf-8").read() if os.path.exists(SAIDA) else ""
        if sem or atual != novo:
            print("banco/topicos.js desatualizado: rode python3 tools/topicos.py")
            sys.exit(1)
        print("OK: banco/topicos.js em dia.")
        return
    if sem:
        sys.exit(1)
    with open(SAIDA, "w", encoding="utf-8") as f:
        f.write(novo)
    for u in REGRAS:
        print("\n%s (%d temas, de %d tópicos)" % (u, len(cont[u]), len(mapa.get(u, {}))))
        for nome, n in sorted(cont[u].items(), key=lambda x: -x[1]):
            print("  %4d  %s" % (n, nome))


if __name__ == "__main__":
    main()
