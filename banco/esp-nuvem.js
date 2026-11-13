/*
 * Específicos – Computação em nuvem
 * Gerado por tools/importar.py a partir das fontes do vault (2026-11-13).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 * Rodar o importador de novo sobrescreve este arquivo.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-NUVEM-0001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Computação em nuvem",
  "topico": "Modelos de serviço (PaaS)",
  "ref_apostila": {
    "modulo": "07",
    "secao": "1",
    "titulo": "Computação em nuvem: definição NIST, características, modelos de serviço e de implantação",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#1. Computação em nuvem: definição NIST, características, modelos de serviço e de implantação]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q28",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 28
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma equipe publicará uma API sem administrar o sistema operacional, patches ou o servidor de aplicação: envia apenas o pacote da aplicação e define variáveis de ambiente, e o provedor cuida da escalabilidade. Segundo o NIST, esse modelo de serviço em nuvem é:",
  "imagem": null,
  "alternativas": {
    "A": "PaaS.",
    "B": "IaaS.",
    "C": "SaaS.",
    "D": "nuvem comunitária.",
    "E": "nuvem híbrida."
  },
  "gabarito": "A",
  "comentario": "O cliente cuida só da aplicação e da configuração; SO e runtime são do provedor: PaaS\n\nRevisar: Módulo 07, Nuvem",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-0002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Computação em nuvem",
  "topico": "Computação em nuvem: definição NIST, características, modelos de serviço e de implantação",
  "ref_apostila": {
    "modulo": "07",
    "secao": "1",
    "titulo": "Computação em nuvem: definição NIST, características, modelos de serviço e de implantação",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#1. Computação em nuvem: definição NIST, características, modelos de serviço e de implantação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §1 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo o NIST, são características essenciais da computação em nuvem:",
  "imagem": null,
  "alternativas": {
    "A": "virtualização, multicloud, autoatendimento, elasticidade e pagamento antecipado.",
    "B": "autoatendimento sob demanda, amplo acesso à rede, agrupamento de recursos, elasticidade rápida e serviço medido.",
    "C": "IaaS, PaaS, SaaS, nuvem pública e nuvem privada.",
    "D": "alta disponibilidade, criptografia, elasticidade, multi-inquilino e SLA.",
    "E": "acesso por rede privada, recursos dedicados, elasticidade, serviço medido e autoatendimento."
  },
  "gabarito": "B",
  "comentario": "São as cinco do NIST SP 800-145. A alternativa C mistura modelos de serviço e de implantação; A, D e E trazem itens que não estão na lista (virtualização, pagamento antecipado, recursos dedicados).",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-0003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Computação em nuvem",
  "topico": "Computação em nuvem: definição NIST, características, modelos de serviço e de implantação",
  "ref_apostila": {
    "modulo": "07",
    "secao": "1",
    "titulo": "Computação em nuvem: definição NIST, características, modelos de serviço e de implantação",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#1. Computação em nuvem: definição NIST, características, modelos de serviço e de implantação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §1 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma equipe do banco publicará uma API Java sem administrar sistema operacional, patches nem servidores de aplicação; ela só envia o pacote da aplicação e define variáveis de ambiente. O modelo de serviço é:",
  "imagem": null,
  "alternativas": {
    "A": "IaaS.",
    "B": "PaaS.",
    "C": "SaaS.",
    "D": "DaaS.",
    "E": "on-premises."
  },
  "gabarito": "B",
  "comentario": "O cliente controla só a aplicação e sua configuração; o provedor cuida do SO e do runtime. Isso é PaaS. Em IaaS ele administraria o SO.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-0004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Computação em nuvem",
  "topico": "Computação em nuvem: definição NIST, características, modelos de serviço e de implantação",
  "ref_apostila": {
    "modulo": "07",
    "secao": "1",
    "titulo": "Computação em nuvem: definição NIST, características, modelos de serviço e de implantação",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#1. Computação em nuvem: definição NIST, características, modelos de serviço e de implantação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §1 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na nuvem híbrida, as nuvens que a compõem deixam de ser entidades distintas e passam a formar uma infraestrutura única, administrada por um só provedor.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Pelo NIST, na híbrida as nuvens **continuam entidades únicas (distintas)**, unidas por tecnologia que permite portabilidade de dados e aplicações. Também não precisam ser de um só provedor.",
  "tags": [
    "certo-errado"
  ],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-0005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Computação em nuvem",
  "topico": "Computação em nuvem: definição NIST, características, modelos de serviço e de implantação",
  "ref_apostila": {
    "modulo": "07",
    "secao": "1",
    "titulo": "Computação em nuvem: definição NIST, características, modelos de serviço e de implantação",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#1. Computação em nuvem: definição NIST, características, modelos de serviço e de implantação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §1 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um conjunto de cooperativas de crédito contrata uma infraestrutura de nuvem de uso exclusivo delas, por terem os mesmos requisitos regulatórios. Trata-se de nuvem:",
  "imagem": null,
  "alternativas": {
    "A": "pública.",
    "B": "privada.",
    "C": "comunitária.",
    "D": "híbrida.",
    "E": "de borda."
  },
  "gabarito": "C",
  "comentario": "Nuvem de uso exclusivo de uma comunidade com interesses e requisitos comuns é comunitária.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-0006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Computação em nuvem",
  "topico": "Computação em nuvem: definição NIST, características, modelos de serviço e de implantação",
  "ref_apostila": {
    "modulo": "07",
    "secao": "1",
    "titulo": "Computação em nuvem: definição NIST, características, modelos de serviço e de implantação",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#1. Computação em nuvem: definição NIST, características, modelos de serviço e de implantação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §1 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A estratégia de usar simultaneamente serviços de dois provedores de nuvem pública para reduzir a dependência de um só fornecedor é chamada de:",
  "imagem": null,
  "alternativas": {
    "A": "cloud bursting.",
    "B": "nuvem comunitária.",
    "C": "multicloud.",
    "D": "fog computing.",
    "E": "lift and shift."
  },
  "gabarito": "C",
  "comentario": "Multicloud é o uso de vários provedores. Cloud bursting é transbordar da privada para a pública em picos.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-0007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Computação em nuvem",
  "topico": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, s…",
  "ref_apostila": {
    "modulo": "07",
    "secao": "2",
    "titulo": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#2. Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §2 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No modelo de responsabilidade compartilhada, em um serviço de IaaS, é responsabilidade do cliente:",
  "imagem": null,
  "alternativas": {
    "A": "a segurança física do data center.",
    "B": "a manutenção do hipervisor.",
    "C": "a aplicação de patches no sistema operacional das máquinas virtuais.",
    "D": "a substituição de discos defeituosos dos servidores.",
    "E": "a redundância de energia das zonas de disponibilidade."
  },
  "gabarito": "C",
  "comentario": "Em IaaS o cliente administra o sistema operacional da VM, inclusive patches. Data center, hipervisor, discos e energia são do provedor.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-0008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Computação em nuvem",
  "topico": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, s…",
  "ref_apostila": {
    "modulo": "07",
    "secao": "2",
    "titulo": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#2. Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §2 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A capacidade de um sistema em nuvem de aumentar e reduzir automaticamente os recursos alocados à medida que a carga varia, cobrando apenas pelo uso, é denominada:",
  "imagem": null,
  "alternativas": {
    "A": "escalabilidade vertical.",
    "B": "alta disponibilidade.",
    "C": "elasticidade.",
    "D": "tolerância a falhas.",
    "E": "portabilidade."
  },
  "gabarito": "C",
  "comentario": "Elasticidade é escalar para cima e para baixo de forma dinâmica. Escalabilidade vertical é só aumentar uma máquina.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-0009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Computação em nuvem",
  "topico": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, s…",
  "ref_apostila": {
    "modulo": "07",
    "secao": "2",
    "titulo": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#2. Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §2 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No modelo serverless, a aplicação dispensa servidores físicos, já que as funções são executadas diretamente no navegador do usuário.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Serverless roda em servidores do provedor; \"sem servidor\" significa que o cliente não gerencia servidores.",
  "tags": [
    "certo-errado"
  ],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-0010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Computação em nuvem",
  "topico": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, s…",
  "ref_apostila": {
    "modulo": "07",
    "secao": "2",
    "titulo": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#2. Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §2 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um plano de continuidade, a métrica que expressa a quantidade máxima de dados que a organização aceita perder, medida em tempo, é o:",
  "imagem": null,
  "alternativas": {
    "A": "RTO.",
    "B": "RPO.",
    "C": "MTTR.",
    "D": "MTBF.",
    "E": "SLA."
  },
  "gabarito": "B",
  "comentario": "RPO é o ponto de recuperação (perda de dados). RTO é o tempo para restabelecer o serviço.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-0011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Computação em nuvem",
  "topico": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, s…",
  "ref_apostila": {
    "modulo": "07",
    "secao": "2",
    "titulo": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#2. Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §2 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo o Twelve-Factor App, as configurações que variam entre ambientes (credenciais, endereço do banco de dados) devem ser armazenadas:",
  "imagem": null,
  "alternativas": {
    "A": "em constantes no código-fonte.",
    "B": "em arquivos versionados junto com o código.",
    "C": "em variáveis de ambiente.",
    "D": "no banco de dados da própria aplicação.",
    "E": "no log da aplicação."
  },
  "gabarito": "C",
  "comentario": "Fator III: configuração em variáveis de ambiente, separada do código.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});
