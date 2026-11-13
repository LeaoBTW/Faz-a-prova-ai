/*
 * Específicos – Arquitetura de sistemas
 * Gerado por tools/importar.py a partir das fontes do vault (2026-11-13).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 * Rodar o importador de novo sobrescreve este arquivo.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-ARQ-0001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Microsserviços: Saga",
  "ref_apostila": {
    "modulo": "06",
    "secao": "11",
    "titulo": "Microsserviços",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#11. Microsserviços]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q11",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 11
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma arquitetura de microsserviços, a abertura de um empréstimo envolve os serviços Crédito, Contratos e Contas, cada um com seu próprio banco de dados. Para manter a consistência sem usar commit em duas fases, executa-se uma sequência de transações locais e, se uma etapa falhar, transações de compensação desfazem as anteriores. Trata-se do padrão:",
  "imagem": null,
  "alternativas": {
    "A": "Circuit Breaker.",
    "B": "API Gateway.",
    "C": "Saga.",
    "D": "Strangler Fig.",
    "E": "Sidecar."
  },
  "gabarito": "C",
  "comentario": "Saga: transações locais encadeadas com compensação. Circuit Breaker evita falhas em cascata; Strangler Fig é para migrar monolitos\n\nRevisar: Módulo 06, Microsserviços",
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
  "id": "ESP-ARQ-0002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Padrões de projeto GoF, MVC e arquitetura em camadas",
  "ref_apostila": {
    "modulo": "06",
    "secao": "9",
    "titulo": "Padrões de projeto GoF, MVC e arquitetura em camadas",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#9. Padrões de projeto GoF, MVC e arquitetura em camadas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §9 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No padrão MVC, o componente responsável por receber as entradas do usuário e acionar as operações do modelo é:",
  "imagem": null,
  "alternativas": {
    "A": "a View.",
    "B": "o Model.",
    "C": "o Controller.",
    "D": "o DAO.",
    "E": "o Presenter."
  },
  "gabarito": "C",
  "comentario": "O Controller trata as entradas e aciona o Model.",
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
  "id": "ESP-ARQ-0003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Padrões de projeto GoF, MVC e arquitetura em camadas",
  "ref_apostila": {
    "modulo": "06",
    "secao": "9",
    "titulo": "Padrões de projeto GoF, MVC e arquitetura em camadas",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#9. Padrões de projeto GoF, MVC e arquitetura em camadas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §9 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma arquitetura em camadas fechada, a camada de apresentação pode acessar diretamente a camada de dados, sem passar pela camada de negócio.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Em camadas fechadas (estritas), cada camada só acessa a imediatamente inferior.",
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
  "id": "ESP-ARQ-0004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Microsserviços",
  "ref_apostila": {
    "modulo": "06",
    "secao": "11",
    "titulo": "Microsserviços",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#11. Microsserviços]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §11 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na arquitetura de microsserviços, o componente que atua como ponto de entrada único para os clientes, roteando requisições, agregando respostas e centralizando autenticação e limitação de taxa, é o:",
  "imagem": null,
  "alternativas": {
    "A": "Service Mesh.",
    "B": "API Gateway.",
    "C": "Circuit Breaker.",
    "D": "Event Store.",
    "E": "Saga."
  },
  "gabarito": "B",
  "comentario": "API Gateway. O service mesh trata da comunicação interna serviço a serviço.",
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
  "id": "ESP-ARQ-0005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Microsserviços",
  "ref_apostila": {
    "modulo": "06",
    "secao": "11",
    "titulo": "Microsserviços",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#11. Microsserviços]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §11 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma das características dos microsserviços, segundo Lewis e Fowler, é o gerenciamento centralizado de dados, com um único banco de dados compartilhado por todos os serviços para garantir consistência forte.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "A característica é o gerenciamento **descentralizado** de dados (banco por serviço, persistência poliglota), aceitando consistência eventual.",
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
  "id": "ESP-ARQ-0006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Microsserviços",
  "ref_apostila": {
    "modulo": "06",
    "secao": "11",
    "titulo": "Microsserviços",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#11. Microsserviços]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §11 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O padrão que, após um número de falhas consecutivas na chamada a um serviço remoto, passa a interromper imediatamente as novas chamadas por um período, evitando falhas em cascata, é o:",
  "imagem": null,
  "alternativas": {
    "A": "Bulkhead.",
    "B": "Retry.",
    "C": "Circuit Breaker.",
    "D": "Strangler Fig.",
    "E": "Sidecar."
  },
  "gabarito": "C",
  "comentario": "Circuit Breaker, com estados fechado, aberto e semiaberto.",
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
  "id": "ESP-ARQ-0007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Microsserviços",
  "ref_apostila": {
    "modulo": "06",
    "secao": "11",
    "titulo": "Microsserviços",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#11. Microsserviços]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §11 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para manter a consistência de uma operação de negócio que envolve vários microsserviços, cada um com seu banco de dados, sem usar commit em duas fases, utiliza-se uma sequência de transações locais com transações de compensação em caso de falha. Esse padrão é o:",
  "imagem": null,
  "alternativas": {
    "A": "CQRS.",
    "B": "Saga.",
    "C": "API Composition.",
    "D": "Singleton.",
    "E": "Database per service."
  },
  "gabarito": "B",
  "comentario": "Saga (coreografada ou orquestrada).",
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
  "id": "ESP-ARQ-0008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Microsserviços",
  "ref_apostila": {
    "modulo": "06",
    "secao": "11",
    "titulo": "Microsserviços",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#11. Microsserviços]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §11 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O padrão Strangler Fig permite migrar gradualmente um sistema monolítico para microsserviços, substituindo funcionalidades aos poucos até que o legado possa ser desativado.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "É a definição do Strangler Fig de Fowler.",
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
  "id": "ESP-ARQ-0009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA…",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §18 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na arquitetura hexagonal, o núcleo da aplicação comunica-se com bancos de dados, filas e interfaces externas por meio de",
  "imagem": null,
  "alternativas": {
    "A": "camadas físicas obrigatórias de apresentação, negócio e dados.",
    "B": "portas, implementadas por adaptadores específicos de cada tecnologia.",
    "C": "chamadas diretas ao driver JDBC dentro das entidades de domínio.",
    "D": "um ESB centralizado.",
    "E": "procedimentos armazenados."
  },
  "gabarito": "B",
  "comentario": "Portas (interfaces) e adaptadores (implementações) isolam o domínio.",
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
  "id": "ESP-ARQ-0010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA…",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §18 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O padrão Strangler Fig propõe substituir de uma só vez o sistema legado pelo novo, em uma única implantação.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "A substituição é **gradual**; o novo sistema \"estrangula\" o legado aos poucos.",
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
