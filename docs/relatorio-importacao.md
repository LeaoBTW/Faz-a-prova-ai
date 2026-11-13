# Relatório de importação

Gerado por `tools/importar.py`. Fontes: apostila (módulos 01 a 07), provas reais Banestes 2021 (FGV) e 2024 (Instituto ACCESS) e Simulado FCC 1. Nenhuma questão foi inventada nem teve o conteúdo alterado; o importador só tirou a formatação de Markdown do vault (checkboxes, etiquetas "(Estilo FCC)", "( ) Certo ( ) Errado" e a indentação).

## Resumo

- **Total importado: 912 questões** (713 múltipla escolha A–E, 80 com 4 alternativas da prova ACCESS 2024, 119 Certo/Errado).
- Anuladas (prova real, ficam fora dos simulados): 5 (2021: Q21, Q22; 2024: Q12, Q32, Q43).
- Em "duvida": 0.
- Usáveis em simulado (múltipla escolha, validada, não anulada): 788.
- Textos-base: questões de Português da 2024 (3 textos), tabelas T1–T3 da 2021 (Q47–Q51) e 4 trechos da apostila (base CLIENTE/CONTA de 05 §7, log de 05 §10.5, XML de 05 §21.2 e trecho em inglês de 06 §19).

**Conferência da leitura:** em cada seção "Questões de fixação" o número de questões lidas é igual ao número de respostas no callout de gabarito, sem número repetido nem gabarito sobrando. As provas têm 60 (2021), 80 (2024) e 40 (FCC 1) questões, todas lidas.

**Não importado:** Apostila 05 §26 ("Bateria de exercícios: qual a saída do código"): 33 exercícios abertos (S1–S6, P1–P7, JS1–JS6, J1–J5, C1–C3, CS1–CS3, ASP1, H1–H2) sem alternativas; não foram importados porque o banco só aceita múltipla escolha ou Certo/Errado. São boa matéria-prima para variações de código (agentes 3 e 4).

## Por fonte

| Fonte | LP | RLE | Atual. | Ética | Específicos | Total |
|---|---|---|---|---|---|---|
| Banestes 2021 (FGV) | 15 | 10 | 8 | 2 | 25 | 60 |
| Banestes 2024 (ACCESS) | 15 | 15 | 17 | 3 | 30 | 80 |
| Simulado FCC 1 |  |  | 4 | 2 | 34 | 40 |
| Apostila 01 | 83 |  |  |  |  | 83 |
| Apostila 02 |  | 126 |  |  |  | 126 |
| Apostila 03 |  |  | 46 | 28 | 38 | 112 |
| Apostila 04 |  |  |  |  | 129 | 129 |
| Apostila 05 |  |  |  |  | 141 | 141 |
| Apostila 06 |  |  |  |  | 106 | 106 |
| Apostila 07 |  |  |  |  | 35 | 35 |
| **Total** | 113 | 151 | 75 | 35 | 538 | 912 |

## Por matéria e eixo

| Matéria / eixo | Por prova | Total | Múltipla A–E | 4 alternativas | Certo/Errado | Anuladas | Usáveis em simulado |
|---|---|---|---|---|---|---|---|
| Língua Portuguesa | 10 | 113 | 95 | 15 | 3 | 1 | 109 |
| Raciocínio Lógico e Estatística | 10 | 151 | 132 | 15 | 4 |  | 147 |
| Atualidades do Mercado Financeiro e Digital | 5 | 75 | 40 | 17 | 18 | 4 | 53 |
| Ética, Compliance e ESG | 5 | 35 | 22 | 3 | 10 |  | 25 |
| Processo de desenvolvimento de software (PROC) | 7 | 80 | 49 | 9 | 22 |  | 58 |
| Programação (PROG) | 7 | 84 | 70 | 6 | 8 |  | 76 |
| Gestão e Governança de TI (GOV) | 6 | 44 | 30 | 3 | 11 |  | 33 |
| Banco de Dados (BD) | 6 | 107 | 87 | 4 | 16 |  | 91 |
| Desenvolvimento web e mobile (WEB) | 5 | 88 | 70 | 4 | 14 |  | 74 |
| Segurança da Informação (SEG) | 4 | 36 | 34 | 1 | 1 |  | 35 |
| Arquitetura de sistemas (ARQ) | 3 | 10 | 6 |  | 4 |  | 6 |
| DevOps e DevSecOps (DEVOPS) | 3 | 7 | 5 |  | 2 |  | 5 |
| Sistemas Operacionais (SO) | 3 | 34 | 33 | 1 |  |  | 34 |
| Redes de computadores (REDES) | 3 | 23 | 20 | 2 | 1 |  | 22 |
| Serviços e gerenciamento de redes (SERV) | 2 | 14 | 11 |  | 3 |  | 11 |
| Computação em nuvem (NUVEM) | 1 | 11 | 9 |  | 2 |  | 9 |
| **Total** | 80 | 912 | 713 | 80 | 119 | 5 | 788 |

Bloco Gerais: 374 · Bloco Específicos: 538.

## Por tópico (resumo)

Os 6 tópicos com mais questões em cada matéria/eixo (lista completa no app, aba Banco).

- **Língua Portuguesa** (43 tópicos): Vozes do verbo, correlação de tempos e modos, flexão, contexto histórico e redação (9); Ortografia, acentuação gráfica e crase (8); Estrutura da frase: deslocamento, substituição, modificação e correção (7); Classes de palavras (aspectos morfológicos, sintáticos, semânticos e textuais (6); Semântica (6); Elementos da comunicação (5)
- **Raciocínio Lógico e Estatística** (50 tópicos): Desvio médio, data focal, séries não uniformes e Sistema Misto (7); Matemática financeira para a FCC (6); Estatística inferencial básica (6); Lógica proposicional e tabelas-verdade (5); Equivalências e negações (De Morgan, condicional) (5); Quantificadores e negação de "todo/algum/nenhum" (5)
- **Atualidades do Mercado Financeiro e Digital** (36 tópicos): Seguros, previdência, capitalização, suitability, consumidor, compliance, ESG e Res. 4.966 (6); Sistema Financeiro Nacional: conceito, estrutura e segmentos (5); Órgãos normativos: CMN, CNSP e CNPC (5); Banco Central do Brasil, Copom, Selic e política monetária (5); CVM, mercado de capitais e supervisores de seguros e previdência (5); Instituições financeiras e tipos de bancos (inclui o Banestes) (5)
- **Ética, Compliance e ESG** (12 tópicos): Lavagem de dinheiro: conceito, fases, Lei 9.613/1998 e COAF (6); Guia de Conduta Ética do Sistema Financeiro Banestes (6); Prevenção à lavagem de dinheiro nas instituições: Circular 3.978/2020, KYC, PEP e comun… (5); Crimes contra o SFN, sigilo bancário e LGPD (5); Seguros, previdência, capitalização, suitability, consumidor, compliance, ESG e Res. 4.966 (3); Ética, compliance, governança corporativa e ESG (3)
- **Processo de desenvolvimento de software** (30 tópicos): Engenharia de requisitos (7); UML 2.5 (7); Scrum (Guia 2020) e Kanban (6); Métricas e estimativas de software (6); Testes de software (6); Ciclo de vida e modelos de processo de software (5)
- **Programação** (34 tópicos): Python (6); Java (6); C# e ASP/ASP.NET (6); Análise e projeto orientados a objetos (6); Hardware e software (5); Tipos de dados e representação numérica e textual (5)
- **Gestão e Governança de TI** (13 tópicos): Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC (6); COBIT 2019 (6); ITIL 4 (e notas sobre a ITIL Version 5) (6); ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK (6); Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022 (5); Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX… (5)
- **Banco de Dados** (33 tópicos): SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL) (6); Transações, ACID e controle de concorrência (6); Data Warehouse, OLAP e ETL (6); Exploração de dados e machine learning (5); Conceitos, SGBD e arquitetura em três níveis (5); Modelagem de dados: conceitual, lógica e física (5)
- **Desenvolvimento web e mobile** (28 tópicos): Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP (8); Programação web: cliente x servidor e HTTP (6); CSS3 (6); JavaScript (6); JQuery, Ajax (XMLHttpRequest/fetch) e JSON (6); XML (sintaxe, DTD, XSD, XPath) (6)
- **Segurança da Informação** (12 tópicos): Segurança: princípios, vulnerabilidades e ataques (6); Criptografia, hash, assinatura digital e certificação digital (6); OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs (6); LGPD – Lei Geral de Proteção de Dados (6); Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/… (5); LGPD: anonimização (1)
- **Arquitetura de sistemas** (4 tópicos): Microsserviços (5); Padrões de projeto GoF, MVC e arquitetura em camadas (2); Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA… (2); Microsserviços: Saga (1)
- **DevOps e DevSecOps** (2 tópicos): DevOps, CI/CD, IaC, contêineres e Git (4); Virtualização e contêineres (3)
- **Sistemas Operacionais** (9 tópicos): Organização de computadores e hierarquia de memória (5); Sistemas operacionais: funções, processos, threads, escalonamento e deadlock (5); Gerência de memória (5); Sistemas de arquivos (5); Windows Server (5); Linux (5)
- **Redes de computadores** (8 tópicos): Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless (5); Endereçamento IPv4/IPv6 e sub-redes (5); Cabeamento estruturado, fibra óptica e testes de desempenho (5); Protocolos e serviços, Web Services e VPN (4); Modelo OSI: camada de aplicação (1); Modelo OSI: camada de sessão (1)
- **Serviços e gerenciamento de redes** (3 tópicos): Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana (5); Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP (5); VoIP, ToIP, QoS e multicast (4)
- **Computação em nuvem** (3 tópicos): Computação em nuvem: definição NIST, características, modelos de serviço e de implantação (5); Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, s… (5); Modelos de serviço (PaaS) (1)

## Questões em "duvida"

Nenhuma. Todas as questões tiveram enunciado, alternativas e gabarito lidos sem ambiguidade; por isso todas entraram como `validada` (validação estrutural do importador). A conferência de conteúdo (resolver cada questão, checar comentários) é tarefa do agente 5.

Observações que não impedem o uso:

- As 80 questões da prova 2024 (ACCESS) têm só 4 alternativas (formato `multipla_4`); entram nos simulados normalmente.
- As provas reais 2021 e 2024 não têm gabarito comentado (só a letra). O Simulado FCC 1 tem comentário.
- Algumas questões da apostila não têm comentário no gabarito (só a letra ou "Certo"/"Errado").
- O código Python da 2021 Q53 e o JavaScript da Q54 estão sem indentação no caderno transcrito; o texto foi mantido como está na fonte.

## Tabela de cotas para os agentes 2 a 4

Regra: **meta = max(10 × questões por prova, alvo da tabela 7.2 proporcionalizado)**. Nos Gerais, os alvos são LP 200, RLE 250, Atualidades 100 e Ética 100. Nos Específicos, os 800 foram distribuídos pelos eixos na proporção da tabela 4.2 (16 por questão de prova, sempre acima do mínimo de 10×). **Cota = meta − existentes** (múltipla escolha, validada, não anulada; mínimo 0). As Certo/Errado não contam como existentes, mas são as primeiras candidatas a conversão (5 afirmações → 1 questão A–E).

| Agente | Matéria / eixo | Por prova | Meta | Existentes | C/E (candidatas) | **Cota** | Faixa de ids |
|---|---|---|---|---|---|---|---|
| Agente 2 | Língua Portuguesa | 10 | 200 | 109 | 3 | **91** | `LP-V001`…`LP-V999` |
| Agente 2 | Raciocínio Lógico e Estatística | 10 | 250 | 147 | 4 | **103** | `RLE-V001`…`RLE-V999` |
| Agente 2 | Atualidades do Mercado Financeiro e Digital | 5 | 100 | 53 | 18 | **47** | `ATU-V001`…`ATU-V999` |
| Agente 2 | Ética, Compliance e ESG | 5 | 100 | 25 | 10 | **75** | `ETI-V001`…`ETI-V999` |
| Agente 3 | Processo de desenvolvimento de software | 7 | 112 | 58 | 22 | **54** | `ESP-PROC-V001`…`ESP-PROC-V999` |
| Agente 3 | Programação | 7 | 112 | 76 | 8 | **36** | `ESP-PROG-V001`…`ESP-PROG-V999` |
| Agente 3 | Gestão e Governança de TI | 6 | 96 | 33 | 11 | **63** | `ESP-GOV-V001`…`ESP-GOV-V999` |
| Agente 3 | Banco de Dados | 6 | 96 | 91 | 16 | **5** | `ESP-BD-V001`…`ESP-BD-V999` |
| Agente 3 | Desenvolvimento web e mobile | 5 | 80 | 74 | 14 | **6** | `ESP-WEB-V001`…`ESP-WEB-V999` |
| Agente 4 | Arquitetura de sistemas | 3 | 48 | 6 | 4 | **42** | `ESP-ARQ-V001`…`ESP-ARQ-V999` |
| Agente 4 | DevOps e DevSecOps | 3 | 48 | 5 | 2 | **43** | `ESP-DEVOPS-V001`…`ESP-DEVOPS-V999` |
| Agente 4 | Sistemas Operacionais | 3 | 48 | 34 | 0 | **14** | `ESP-SO-V001`…`ESP-SO-V999` |
| Agente 4 | Redes de computadores | 3 | 48 | 22 | 1 | **26** | `ESP-REDES-V001`…`ESP-REDES-V999` |
| Agente 4 | Serviços e gerenciamento de redes | 2 | 32 | 11 | 3 | **21** | `ESP-SERV-V001`…`ESP-SERV-V999` |
| Agente 4 | Segurança da Informação | 4 | 64 | 35 | 1 | **29** | `ESP-SEG-V001`…`ESP-SEG-V999` |
| Agente 4 | Computação em nuvem | 1 | 16 | 9 | 2 | **7** | `ESP-NUVEM-V001`…`ESP-NUVEM-V999` |

- **Agente 2**: 316 questões no total → `banco/variacoes-gerais.js` (branch `variacoes-gerais`).
- **Agente 3**: 164 questões no total → `banco/variacoes-esp-a.js` (branch `variacoes-esp-a`).
- **Agente 4**: 182 questões no total → `banco/variacoes-esp-b.js` (branch `variacoes-esp-b`).
- **Total a criar: 662.**

Regras de id e arquivo:

- Variações usam o sufixo `V` e numeração própria por matéria/eixo: `LP-V001`, `RLE-V001`, `ATU-V001`, `ETI-V001`, `ESP-BD-V001`, `ESP-NUVEM-V001` etc. Os originais usam `LP-0001`, `ESP-BD-0001`. Como cada matéria/eixo pertence a um único agente, não há colisão.
- Cada agente grava só no seu arquivo (`banco/variacoes-gerais.js`, `banco/variacoes-esp-a.js`, `banco/variacoes-esp-b.js`), que já existe vazio e já é carregado pelo `index.html`.
- Toda variação: `origem.tipo = "variacao"`, `origem.fonte` igual à da questão-pai, `origem.id_pai` com o id da questão-pai, `status = "rascunho"`, `formato = "multipla_5"`.
- Prioridade: eixos com maior cota relativa e tópicos novos do edital 2027 (PMBOK 8, Lei 14.133, low-code, PL/pgSQL, WCAG, ISO 27035, monitoramento).

## Certo/Errado por matéria/eixo (candidatas a conversão)

- **Língua Portuguesa** (3): `LP-0111`, `LP-0112`, `LP-0113`
- **Raciocínio Lógico e Estatística** (4): `RLE-0134`, `RLE-0140`, `RLE-0147`, `RLE-0148`
- **Atualidades do Mercado Financeiro e Digital** (18): `ATU-0033`, `ATU-0034`, `ATU-0037`, `ATU-0039`, `ATU-0042`, `ATU-0044`, `ATU-0047`, `ATU-0049`, `ATU-0052`, `ATU-0054`, `ATU-0057`, `ATU-0059`, `ATU-0062`, `ATU-0064`, `ATU-0067`, `ATU-0069`, `ATU-0072`, `ATU-0074`
- **Ética, Compliance e ESG** (10): `ETI-0010`, `ETI-0012`, `ETI-0013`, `ETI-0016`, `ETI-0018`, `ETI-0021`, `ETI-0023`, `ETI-0026`, `ETI-0028`, `ETI-0033`
- **Processo de desenvolvimento de software** (22): `ESP-PROC-0021`, `ESP-PROC-0024`, `ESP-PROC-0026`, `ESP-PROC-0029`, `ESP-PROC-0031`, `ESP-PROC-0034`, `ESP-PROC-0036`, `ESP-PROC-0039`, `ESP-PROC-0042`, `ESP-PROC-0046`, `ESP-PROC-0048`, `ESP-PROC-0051`, `ESP-PROC-0053`, `ESP-PROC-0056`, `ESP-PROC-0059`, `ESP-PROC-0062`, `ESP-PROC-0065`, `ESP-PROC-0069`, `ESP-PROC-0071`, `ESP-PROC-0073`, `ESP-PROC-0075`, `ESP-PROC-0080`
- **Programação** (8): `ESP-PROG-0042`, `ESP-PROG-0048`, `ESP-PROG-0054`, `ESP-PROG-0059`, `ESP-PROG-0067`, `ESP-PROG-0070`, `ESP-PROG-0073`, `ESP-PROG-0076`
- **Gestão e Governança de TI** (11): `ESP-GOV-0009`, `ESP-GOV-0011`, `ESP-GOV-0016`, `ESP-GOV-0018`, `ESP-GOV-0021`, `ESP-GOV-0023`, `ESP-GOV-0027`, `ESP-GOV-0029`, `ESP-GOV-0033`, `ESP-GOV-0037`, `ESP-GOV-0042`
- **Banco de Dados** (16): `ESP-BD-0026`, `ESP-BD-0031`, `ESP-BD-0036`, `ESP-BD-0041`, `ESP-BD-0046`, `ESP-BD-0051`, `ESP-BD-0056`, `ESP-BD-0062`, `ESP-BD-0067`, `ESP-BD-0073`, `ESP-BD-0078`, `ESP-BD-0083`, `ESP-BD-0088`, `ESP-BD-0094`, `ESP-BD-0099`, `ESP-BD-0105`
- **Desenvolvimento web e mobile** (14): `ESP-WEB-0019`, `ESP-WEB-0025`, `ESP-WEB-0030`, `ESP-WEB-0036`, `ESP-WEB-0042`, `ESP-WEB-0048`, `ESP-WEB-0054`, `ESP-WEB-0058`, `ESP-WEB-0062`, `ESP-WEB-0066`, `ESP-WEB-0071`, `ESP-WEB-0076`, `ESP-WEB-0081`, `ESP-WEB-0086`
- **Segurança da Informação** (1): `ESP-SEG-0034`
- **Arquitetura de sistemas** (4): `ESP-ARQ-0003`, `ESP-ARQ-0005`, `ESP-ARQ-0008`, `ESP-ARQ-0010`
- **DevOps e DevSecOps** (2): `ESP-DEVOPS-0005`, `ESP-DEVOPS-0007`
- **Redes de computadores** (1): `ESP-REDES-0020`
- **Serviços e gerenciamento de redes** (3): `ESP-SERV-0003`, `ESP-SERV-0008`, `ESP-SERV-0012`
- **Computação em nuvem** (2): `ESP-NUVEM-0004`, `ESP-NUVEM-0009`
