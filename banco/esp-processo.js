/*
 * Específicos – Processo de desenvolvimento de software
 * Gerado por tools/importar.py a partir das fontes do vault (2026-11-13).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 * Rodar o importador de novo sobrescreve este arquivo.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-PROC-0001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Scrum x Kanban",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q52",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 52
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Observe o quadro comparativo a seguir, publicado em sites ligados ao estudo e à investigação de diferentes estratégias/metodologias para implementar um sistema ágil de desenvolvimento ou gestão de projetos.\n\n| Aspectos | X | Y |\n|---|---|---|\n| *Ritmo* | Sprints | Fluxo contínuo |\n| *Funções* | Funções bem definidas | Sem funções necessárias |\n| *Entregas* | Final de cada sprint | Entrega contínua |\n| *Mudanças* | Evitar durante sprint | A qualquer momento |\n\nÉ correto identificar que X e Y representam, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "Crystal e Scrum;",
    "B": "Extreme Programming e Crystal;",
    "C": "Kanban e Lean;",
    "D": "Lean e Extreme Programming;",
    "E": "Scrum e Kanban."
  },
  "gabarito": "E",
  "comentario": "",
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
  "id": "ESP-PROC-0002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Requisitos funcionais",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q57",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 57
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma mudança no processo de abertura de contas de um banco gerou a necessidade de desenvolvimento de novas funcionalidades na aplicação web destinada aos novos clientes. Assim, foi definido que, para pedido de abertura de conta por meio da aplicação web, o novo cliente deve fazer o upload de um conjunto de documentos em formato digital. Marta é a responsável pela triagem de pedidos de novas contas e utiliza um sistema informatizado de uso interno do banco para conferir todos os documentos enviados digitalmente.\n\nNo contexto de engenharia de requisitos, a conferência de documentos realizada por Marta, por meio do sistema informatizado de uso interno do banco, representa um requisito:",
  "imagem": null,
  "alternativas": {
    "A": "analítico;",
    "B": "funcional;",
    "C": "de proteção;",
    "D": "de produto;",
    "E": "de confiança."
  },
  "gabarito": "B",
  "comentario": "",
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
  "id": "ESP-PROC-0003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Requisitos não funcionais",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q58",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 58
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Os clientes do banco EraDigital podem atualizar seus endereços eletrônicos (e-mail) por meio do aplicativo para dispositivos móveis EraDigApp. No EraDigApp, o cliente se autentica e preenche o campo \"Novo e-mail\" destinado ao cadastro de um novo endereço eletrônico que permite a entrada de quaisquer caracteres alfanuméricos e em qualquer ordem, ou seja, sem seguir uma regra de formação.\n\nNo contexto de engenharia de requisitos, a falta de controle do EraDigApp em relação à entrada de endereços eletrônicos caracteriza falhas na especificação de requisitos de:",
  "imagem": null,
  "alternativas": {
    "A": "manutenibilidade;",
    "B": "reparabilidade;",
    "C": "usabilidade;",
    "D": "confiabilidade;",
    "E": "vulnerabilidade."
  },
  "gabarito": "C",
  "comentario": "",
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
  "id": "ESP-PROC-0004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML: diagrama de atividades",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q59",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 59
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Gabriela está trabalhando na especificação de Casos de Uso para um novo sistema e constatou que o comportamento de um dos Casos de Uso requer a execução sistemática de procedimentos para controle e fluxo de dados, definidos por normas organizacionais da empresa que utilizará o sistema.\n\nCom base na especificação da UML 2.5.1, para modelar o comportamento do Caso de Uso em questão, Gabriela deverá utilizar o diagrama de:",
  "imagem": null,
  "alternativas": {
    "A": "sequência;",
    "B": "atividades;",
    "C": "temporização;",
    "D": "causa e efeito;",
    "E": "ocorrências."
  },
  "gabarito": "B",
  "comentario": "",
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
  "id": "ESP-PROC-0005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Elicitação de requisitos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q64",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 64
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O levantamento de requisitos é uma etapa crucial no desenvolvimento de sistemas, pois é nessa fase que as necessidades do sistema são identificadas. Dentre as técnicas utilizadas para otimizar os resultados obtidos pelas entrevistas, assinale a alternativa correta.",
  "imagem": null,
  "alternativas": {
    "A": "Diagramas de sequência são utilizados para representar interações entre objetos do sistema.",
    "B": "A prototipação rápida é usada para criar várias versões do sistema e validar os requisitos com os desenvolvedores.",
    "C": "A modelagem de processos de negócio é empregada para representar fluxos de trabalho e atividades dentro da organização.",
    "D": "O brainstorming estimula que as partes interessadas apresentem suas ideias sobre o sistema e como devem ser priorizadas."
  },
  "gabarito": "D",
  "comentario": "",
  "tags": [
    "4-alternativas"
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
  "id": "ESP-PROC-0006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "JAD",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q65",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 65
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No contexto de projetos que utilizam o Desenvolvimento de Aplicações Rápidas (RAD), a JAD (Joint Application Development) é uma técnica crucial para o levantamento de requisitos. Com base nisso, assinale a alternativa correta que descreve a JAD:",
  "imagem": null,
  "alternativas": {
    "A": "Trata-se de oficinas de trabalho onde desenvolvedores e usuários discutem sobre o projeto e suas necessidades.",
    "B": "É um conjunto eficiente de técnicas que aceleram a implementação de ideias.",
    "C": "Aumenta a colaboração entre os desenvolvedores e os usuários, uma vez que estabelece um cronograma de trabalho.",
    "D": "É baseada em entrevistas e dinâmicas sociais em que os usuários interagem entre si para fornecer informações relevantes para os desenvolvedores."
  },
  "gabarito": "A",
  "comentario": "",
  "tags": [
    "4-alternativas"
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
  "id": "ESP-PROC-0007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Validação de requisitos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q66",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 66
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considerando a importância da engenharia de requisitos para o desenvolvimento de sistemas, marque a alternativa que associa corretamente com atividade de “Validação” com seu respectivo objetivo:",
  "imagem": null,
  "alternativas": {
    "A": "Levantar as necessidades para eliminar os requisitos do sistema.",
    "B": "Refere-se a garantir que o sistema atenda às necessidades do cliente e às expectativas do usuário.",
    "C": "Validação: comparar a implementação o código desenvolvido.",
    "D": "Garantir recursos humanos do projeto."
  },
  "gabarito": "B",
  "comentario": "",
  "tags": [
    "4-alternativas"
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
  "id": "ESP-PROC-0008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Elicitação de requisitos não funcionais",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q67",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 67
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual das seguintes técnicas de elicitação de requisitos, marque a alternativa mais apropriada para capturar requisitos não funcionais, como requisitos de desempenho, segurança e usabilidade.",
  "imagem": null,
  "alternativas": {
    "A": "Análise de documentos.",
    "B": "Entrevistas.",
    "C": "Questionários.",
    "D": "Workshops colaborativos."
  },
  "gabarito": "D",
  "comentario": "",
  "tags": [
    "4-alternativas"
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
  "id": "ESP-PROC-0009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Cenários e casos de uso",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q68",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 68
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Utilizar de estratégias como cenários, histórias de uso, aproxima o profissional de TI, com seu cliente e facilita a tarefa de elicitação de requisitos. Marque a alternativa que corresponde corretamente a técnicas de elicitação de requisitos descrita.",
  "imagem": null,
  "alternativas": {
    "A": "Entrevistas.",
    "B": "Observação.",
    "C": "Prototipação.",
    "D": "Casos de uso."
  },
  "gabarito": "D",
  "comentario": "",
  "tags": [
    "4-alternativas"
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
  "id": "ESP-PROC-0010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Matriz de rastreabilidade",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q69",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 69
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A Matriz de Rastreabilidade de Requisitos (MRR) é amplamente utilizada no gerenciamento de requisitos de software. Assinale a alternativa que representa corretamente seu significado.",
  "imagem": null,
  "alternativas": {
    "A": "A MRR é uma ferramenta para gerenciar os custos associados aos requisitos do projeto.",
    "B": "A MRR é uma técnica para priorizar requisitos com base em sua importância para o sucesso do projeto.",
    "C": "A MRR é uma estrutura para rastrear a relação entre requisitos, desde sua origem até sua implementação e teste.",
    "D": "A MRR é uma metodologia para identificar e corrigir inconsistências entre os requisitos do sistema."
  },
  "gabarito": "C",
  "comentario": "",
  "tags": [
    "4-alternativas"
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
  "id": "ESP-PROC-0011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Prototipação",
  "ref_apostila": {
    "modulo": "06",
    "secao": "14",
    "titulo": "Prototipação e engenharia de usabilidade",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#14. Prototipação e engenharia de usabilidade]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q70",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 70
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A prototipação melhora a comunicação entre desenvolvedores e stakeholders, pois permite que os usuários visualizem e interajam com um modelo funcional do sistema. Isso leva a uma melhor compreensão dos requisitos e reduz o risco de mal-entendidos. Na construção dos protótipos o profissional de TI, enfrenta diversas dificuldades. Marque a alternativa que representa corretamente uma dificuldade para implantar a prototipação.",
  "imagem": null,
  "alternativas": {
    "A": "Dificuldade em desenvolver protótipos que sejam representativos o suficiente do sistema final.",
    "B": "Aumento dos custos de desenvolvimento devido à necessidade de criar múltiplos protótipos.",
    "C": "Falta de suporte da equipe de TI, durante o processo de prototipação.",
    "D": "Limitações nas linguagens de programação para capturar requisitos não funcionais por meio de protótipos."
  },
  "gabarito": "A",
  "comentario": "",
  "tags": [
    "4-alternativas"
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
  "id": "ESP-PROC-0012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML: diagramas estruturais",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q72",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 72
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A UML inclui diagrama, que mostra a estrutura estática do sistema, instâncias específicas, componentes físicos do sistema e suas interações. Marque a alternativa que contém corretamente os principais tipos de diagramas de estrutura estática na UML.",
  "imagem": null,
  "alternativas": {
    "A": "Diagrama de classe, diagrama de objeto e diagrama de atividade.",
    "B": "Diagrama de caso de uso, diagrama de componente e diagrama de implementação.",
    "C": "Diagrama de pacote, diagrama de perfil e diagrama de classe.",
    "D": "Diagrama de classe, diagrama de objeto e diagrama de componente."
  },
  "gabarito": "D",
  "comentario": "",
  "tags": [
    "4-alternativas"
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
  "id": "ESP-PROC-0013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Engenharia de requisitos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q76",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 76
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No desenvolvimento de Sistemas, os \"Requisitos\" definem o que um sistema deverá fazer. As atividades relacionadas com a descoberta e entendimento dos requisitos de um sistema são chamadas de?",
  "imagem": null,
  "alternativas": {
    "A": "Elicitação de Requisitos.",
    "B": "Engenharia de Requisitos.",
    "C": "Requisitos Funcionais.",
    "D": "Requisitos Não-Funcionais."
  },
  "gabarito": "A",
  "comentario": "",
  "tags": [
    "4-alternativas"
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
  "id": "ESP-PROC-0014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Scrum: artefatos e compromissos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q13",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 13
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo o Guia do Scrum (2020), cada artefato tem um compromisso associado. O compromisso do **Incremento** é:",
  "imagem": null,
  "alternativas": {
    "A": "a Meta do Produto.",
    "B": "a Meta da Sprint.",
    "C": "a Visão do Produto.",
    "D": "a Definição de Pronto.",
    "E": "o Critério de Aceite."
  },
  "gabarito": "D",
  "comentario": "Guia 2020: Backlog do Produto → Meta do Produto; Backlog da Sprint → Meta da Sprint; Incremento → Definição de Pronto\n\nRevisar: Módulo 06, Scrum",
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
  "id": "ESP-PROC-0015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Kanban: limite de WIP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q14",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 14
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No método Kanban, a prática que mais contribui para reduzir o tempo de ciclo e expor gargalos no fluxo é:",
  "imagem": null,
  "alternativas": {
    "A": "limitar o trabalho em progresso (WIP) em cada etapa.",
    "B": "estimar todas as tarefas em pontos de história antes de iniciar.",
    "C": "trabalhar em iterações de duração fixa.",
    "D": "definir um Scrum Master responsável pelo quadro.",
    "E": "aumentar o número de tarefas iniciadas simultaneamente."
  },
  "gabarito": "A",
  "comentario": "Limitar o WIP é a prática central do Kanban. Iterações fixas, pontos de história e Scrum Master são do Scrum, não exigências do Kanban\n\nRevisar: Módulo 06, Kanban",
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
  "id": "ESP-PROC-0016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML: composição",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q15",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 15
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um diagrama de classes UML, a relação entre `Pedido` e `ItemPedido`, em que os itens não existem sem o pedido e são destruídos junto com ele, é representada por:",
  "imagem": null,
  "alternativas": {
    "A": "agregação, com losango vazio do lado de `Pedido`.",
    "B": "composição, com losango preenchido do lado de `Pedido`.",
    "C": "generalização, com seta de triângulo vazio apontando para `Pedido`.",
    "D": "dependência, com seta tracejada apontando para `ItemPedido`.",
    "E": "realização, com seta tracejada e triângulo vazio."
  },
  "gabarito": "B",
  "comentario": "Composição (losango preenchido no lado do todo): a parte não existe sem o todo. Na agregação (losango vazio) a parte existe independentemente\n\nRevisar: Módulo 06, UML",
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
  "id": "ESP-PROC-0017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML: include e extend",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q16",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 16
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No caso de uso \"Realizar Pix\", a etapa \"Autenticar com token\" é **sempre** executada, enquanto \"Agendar Pix\" só ocorre quando o cliente escolhe uma data futura. Os relacionamentos adequados a partir de \"Realizar Pix\" são, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "«extend» e «include».",
    "B": "generalização e «include».",
    "C": "«include» e «extend».",
    "D": "«include» e generalização.",
    "E": "associação e «extend»."
  },
  "gabarito": "C",
  "comentario": "«include» = comportamento obrigatório, sempre executado. «extend» = comportamento opcional/condicional\n\nRevisar: Módulo 06, UML",
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
  "id": "ESP-PROC-0018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Testes: análise de valor limite",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q17",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 17
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um campo aceita valores de transferência entre R$ 0,01 e R$ 1.000,00, inclusive. Aplicando a técnica de **análise de valor limite**, os valores de teste mais adequados são:",
  "imagem": null,
  "alternativas": {
    "A": "R$ 500,00 apenas.",
    "B": "R$ 0,01 e R$ 1.000,00 apenas.",
    "C": "R$ –1,00, R$ 500,00 e R$ 2.000,00.",
    "D": "R$ 0,00 e R$ 1.000,01 apenas.",
    "E": "R$ 0,00, R$ 0,01, R$ 1.000,00 e R$ 1.000,01."
  },
  "gabarito": "E",
  "comentario": "Valor limite testa os limites e os valores imediatamente fora deles: 0,00 e 0,01; 1.000,00 e 1.000,01\n\nRevisar: Módulo 06, Testes",
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
  "id": "ESP-PROC-0019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Requisitos não funcionais",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q19",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 19
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "É exemplo de requisito **não funcional**:",
  "imagem": null,
  "alternativas": {
    "A": "O sistema deve permitir que o cliente consulte o extrato dos últimos 90 dias.",
    "B": "O sistema deve responder às consultas de saldo em até 2 segundos em 95% das requisições.",
    "C": "O sistema deve permitir o cadastro de chaves Pix.",
    "D": "O sistema deve emitir comprovante após cada transferência.",
    "E": "O sistema deve bloquear o cartão quando o cliente solicitar."
  },
  "gabarito": "B",
  "comentario": "Desempenho (tempo de resposta) é requisito não funcional. As demais descrevem funções do sistema\n\nRevisar: Módulo 06, Requisitos",
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
  "id": "ESP-PROC-0020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Ciclo de vida e modelos de processo de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "1",
    "titulo": "Ciclo de vida e modelos de processo de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#1. Ciclo de vida e modelos de processo de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §1 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um projeto de software no qual o cliente tem apenas uma ideia geral dos objetivos e não consegue detalhar entradas, processamento e saídas, o modelo de processo mais indicado para esclarecer os requisitos é:",
  "imagem": null,
  "alternativas": {
    "A": "cascata.",
    "B": "prototipação.",
    "C": "modelo V.",
    "D": "RAD.",
    "E": "codifica-remenda."
  },
  "gabarito": "B",
  "comentario": "A prototipação é recomendada quando o cliente define objetivos gerais, mas não detalha os requisitos. O protótipo serve de mecanismo para identificar os requisitos.",
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
  "id": "ESP-PROC-0021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Ciclo de vida e modelos de processo de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "1",
    "titulo": "Ciclo de vida e modelos de processo de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#1. Ciclo de vida e modelos de processo de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §1 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No modelo em espiral de Boehm, cada volta da espiral é dividida em setores, e um deles é dedicado especificamente à avaliação e redução de riscos, característica que o diferencia dos demais modelos clássicos.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Os quatro setores (Sommerville) são definição de objetivos, avaliação e redução de riscos, desenvolvimento e validação, e planejamento. A análise explícita de riscos é a marca do modelo espiral.",
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
  "id": "ESP-PROC-0022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Ciclo de vida e modelos de processo de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "1",
    "titulo": "Ciclo de vida e modelos de processo de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#1. Ciclo de vida e modelos de processo de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §1 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No modelo V, a fase de teste que valida o projeto da arquitetura (a interação entre os módulos) é o teste de:",
  "imagem": null,
  "alternativas": {
    "A": "unidade.",
    "B": "integração.",
    "C": "sistema.",
    "D": "aceitação.",
    "E": "regressão."
  },
  "gabarito": "B",
  "comentario": "No V, o projeto arquitetural corresponde ao teste de integração; requisitos do sistema ao teste de sistema; requisitos do usuário ao de aceitação; projeto detalhado ao de unidade.",
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
  "id": "ESP-PROC-0023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Ciclo de vida e modelos de processo de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "1",
    "titulo": "Ciclo de vida e modelos de processo de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#1. Ciclo de vida e modelos de processo de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §1 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma alteração em um sistema bancário para atender a uma nova resolução do Banco Central, sem que haja defeito no software, caracteriza manutenção:",
  "imagem": null,
  "alternativas": {
    "A": "corretiva.",
    "B": "preventiva.",
    "C": "adaptativa.",
    "D": "perfectiva.",
    "E": "emergencial."
  },
  "gabarito": "C",
  "comentario": "Adequação a mudanças no ambiente externo (legislação, normas, plataforma) é manutenção adaptativa.",
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
  "id": "ESP-PROC-0024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Ciclo de vida e modelos de processo de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "1",
    "titulo": "Ciclo de vida e modelos de processo de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#1. Ciclo de vida e modelos de processo de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §1 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O modelo RAD é especialmente recomendado para sistemas com alto risco técnico, como aqueles que utilizam tecnologia nova, pois sua rapidez permite descobrir os problemas cedo.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Pressman afirma que o RAD **não** é adequado quando os riscos técnicos são altos (por exemplo, uso intenso de tecnologia nova) nem quando o sistema não pode ser modularizado.",
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
  "id": "ESP-PROC-0025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Processo Unificado (UP/RUP)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "2",
    "titulo": "Processo Unificado (UP/RUP)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#2. Processo Unificado (UP/RUP)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §2 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No RUP, a fase em que se busca estabelecer uma arquitetura sólida e executável, eliminando os riscos de maior prioridade, e que termina com o marco Arquitetura do Ciclo de Vida (LCA), é a fase de:",
  "imagem": null,
  "alternativas": {
    "A": "Concepção.",
    "B": "Elaboração.",
    "C": "Construção.",
    "D": "Transição.",
    "E": "Implantação."
  },
  "gabarito": "B",
  "comentario": "A Elaboração estabiliza a arquitetura e ataca os riscos mais altos; seu marco é o LCA (Lifecycle Architecture).",
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
  "id": "ESP-PROC-0026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Processo Unificado (UP/RUP)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "2",
    "titulo": "Processo Unificado (UP/RUP)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#2. Processo Unificado (UP/RUP)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §2 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No RUP, as disciplinas são executadas em sequência, de modo que a disciplina de Teste só se inicia após a conclusão da disciplina de Implementação.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "As fases são sequenciais, mas as disciplinas ocorrem de forma iterativa e com sobreposição; testes acontecem em todas as iterações, inclusive na Elaboração.",
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
  "id": "ESP-PROC-0027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Processo Unificado (UP/RUP)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "2",
    "titulo": "Processo Unificado (UP/RUP)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#2. Processo Unificado (UP/RUP)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §2 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São disciplinas de suporte do RUP:",
  "imagem": null,
  "alternativas": {
    "A": "Requisitos, Análise e Design, Implementação.",
    "B": "Modelagem de Negócio, Teste, Implantação.",
    "C": "Gerenciamento de Configuração e Mudança, Gerenciamento de Projeto, Ambiente.",
    "D": "Implantação, Ambiente, Teste.",
    "E": "Gerenciamento de Projeto, Requisitos, Ambiente."
  },
  "gabarito": "C",
  "comentario": "As três disciplinas de suporte são Gerenciamento de Configuração e Mudança, Gerenciamento de Projeto e Ambiente. Implantação é de engenharia.",
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
  "id": "ESP-PROC-0028",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Processo Unificado (UP/RUP)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "2",
    "titulo": "Processo Unificado (UP/RUP)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#2. Processo Unificado (UP/RUP)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §2 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "As três características essenciais do Processo Unificado são ser:",
  "imagem": null,
  "alternativas": {
    "A": "orientado a documentos, sequencial e centrado em testes.",
    "B": "dirigido por casos de uso, centrado na arquitetura, iterativo e incremental.",
    "C": "dirigido por riscos, baseado em protótipos descartáveis e sem documentação.",
    "D": "dirigido por testes, centrado no cliente e com entregas diárias.",
    "E": "dirigido por funcionalidades, com dono de classe e inspeções."
  },
  "gabarito": "B",
  "comentario": "É a tríade clássica do UP. A alternativa E descreve o FDD.",
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
  "id": "ESP-PROC-0029",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Processo Unificado (UP/RUP)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "2",
    "titulo": "Processo Unificado (UP/RUP)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#2. Processo Unificado (UP/RUP)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §2 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Os testes beta, a conversão de bases de dados operacionais e o treinamento dos usuários são atividades características da fase de Transição do RUP.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "São atividades típicas da Transição, que termina com o marco de lançamento do produto (Product Release).",
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
  "id": "ESP-PROC-0030",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD",
  "ref_apostila": {
    "modulo": "06",
    "secao": "3",
    "titulo": "Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#3. Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §3 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo o Manifesto Ágil, valoriza-se mais:",
  "imagem": null,
  "alternativas": {
    "A": "processos e ferramentas do que indivíduos e interações.",
    "B": "software em funcionamento do que negociação de contratos.",
    "C": "colaboração com o cliente do que negociação de contratos.",
    "D": "seguir um plano do que responder a mudanças.",
    "E": "documentação abrangente do que software em funcionamento."
  },
  "gabarito": "C",
  "comentario": "É o terceiro valor. A alternativa B mistura pares: software em funcionamento é valorizado mais que documentação abrangente.",
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
  "id": "ESP-PROC-0031",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD",
  "ref_apostila": {
    "modulo": "06",
    "secao": "3",
    "titulo": "Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#3. Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §3 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "De acordo com os princípios ágeis, a principal medida de progresso de um projeto é o percentual do cronograma cumprido.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "O 7º princípio diz que software funcionando é a principal medida de progresso.",
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
  "id": "ESP-PROC-0032",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD",
  "ref_apostila": {
    "modulo": "06",
    "secao": "3",
    "titulo": "Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#3. Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §3 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No FDD, a prática que atribui a cada classe um desenvolvedor responsável por sua consistência e desempenho, em contraste com a propriedade coletiva do código do XP, é:",
  "imagem": null,
  "alternativas": {
    "A": "programador-chefe.",
    "B": "dono de classe.",
    "C": "equipe de funcionalidade.",
    "D": "inspeção.",
    "E": "arquiteto-chefe."
  },
  "gabarito": "B",
  "comentario": "O dono de classe (class owner) é prática do FDD.",
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
  "id": "ESP-PROC-0033",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD",
  "ref_apostila": {
    "modulo": "06",
    "secao": "3",
    "titulo": "Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#3. Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §3 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São valores da Extreme Programming (2ª edição):",
  "imagem": null,
  "alternativas": {
    "A": "comunicação, simplicidade, feedback, coragem e respeito.",
    "B": "foco, abertura, coragem, compromisso e respeito.",
    "C": "transparência, inspeção e adaptação.",
    "D": "indivíduos, software, colaboração e mudança.",
    "E": "eliminar desperdício, adiar decisões e entregar rápido."
  },
  "gabarito": "A",
  "comentario": "São os cinco valores do XP. A alternativa B traz os valores do **Scrum**; C, os pilares do Scrum; E, princípios Lean.",
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
  "id": "ESP-PROC-0034",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD",
  "ref_apostila": {
    "modulo": "06",
    "secao": "3",
    "titulo": "Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#3. Métodos ágeis: Manifesto, XP, Lean, Crystal, FDD]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §3 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na família Crystal, a escolha da metodologia depende do tamanho da equipe e da criticidade do sistema, e o Crystal Clear destina-se a equipes pequenas, valorizando a comunicação osmótica.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Crystal varia por cor conforme tamanho e criticidade; Crystal Clear é para equipes de até cerca de 6–8 pessoas, com entregas frequentes, melhoria reflexiva e comunicação osmótica.",
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
  "id": "ESP-PROC-0035",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Scrum (Guia 2020) e Kanban",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §4 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo o Guia do Scrum 2020, o compromisso associado ao Backlog do Produto, ao Sprint Backlog e ao Incremento são, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "Definição de Pronto, Meta da Sprint e Meta do Produto.",
    "B": "Meta do Produto, Meta da Sprint e Definição de Pronto.",
    "C": "Meta da Sprint, Meta do Produto e Definição de Pronto.",
    "D": "Visão do Produto, Plano da Sprint e Critério de Aceitação.",
    "E": "Meta do Produto, Definição de Pronto e Meta da Sprint."
  },
  "gabarito": "B",
  "comentario": "Backlog do Produto → Meta do Produto; Sprint Backlog → Meta da Sprint; Incremento → Definição de Pronto.",
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
  "id": "ESP-PROC-0036",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Scrum (Guia 2020) e Kanban",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §4 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Conforme o Guia do Scrum, a Daily Scrum é um evento de 15 minutos destinado aos Developers, que devem obrigatoriamente responder às perguntas: o que fiz ontem, o que farei hoje e quais impedimentos enfrento.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "As três perguntas foram retiradas do guia 2020. Os Developers escolhem a estrutura e as técnicas que quiserem, desde que o foco seja o progresso rumo à Meta da Sprint.",
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
  "id": "ESP-PROC-0037",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Scrum (Guia 2020) e Kanban",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §4 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A respeito do cancelamento de uma Sprint, é correto afirmar que:",
  "imagem": null,
  "alternativas": {
    "A": "pode ser feito por qualquer membro do Time Scrum.",
    "B": "é decidido pelo Scrum Master quando há impedimentos.",
    "C": "somente o Product Owner tem autoridade para cancelá-la, o que pode ocorrer se a Meta da Sprint se tornar obsoleta.",
    "D": "depende de votação dos stakeholders na Sprint Review.",
    "E": "não é permitido pelo Guia do Scrum."
  },
  "gabarito": "C",
  "comentario": "Só o PO pode cancelar a Sprint, e isso faz sentido quando a Meta da Sprint se torna obsoleta.",
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
  "id": "ESP-PROC-0038",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Scrum (Guia 2020) e Kanban",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §4 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um quadro Kanban, o time tem, em média, 15 itens em andamento e conclui 5 itens por semana. Pela Lei de Little, o tempo médio de ciclo é:",
  "imagem": null,
  "alternativas": {
    "A": "0,33 semana.",
    "B": "3 semanas.",
    "C": "5 semanas.",
    "D": "10 semanas.",
    "E": "75 semanas."
  },
  "gabarito": "B",
  "comentario": "Tempo de ciclo = WIP ÷ throughput = 15 ÷ 5 = 3 semanas.",
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
  "id": "ESP-PROC-0039",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Scrum (Guia 2020) e Kanban",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §4 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Scrum, o refinamento do Backlog do Produto é um dos eventos formais, com timebox de no máximo 10% da duração da Sprint.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Refinamento é atividade contínua, não evento. O limite de 10% era sugestão do guia de 2017 e foi retirado em 2020.",
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
  "id": "ESP-PROC-0040",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Scrum (Guia 2020) e Kanban",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §4 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na Sprint Planning, segundo o Guia 2020, são abordados os tópicos:",
  "imagem": null,
  "alternativas": {
    "A": "quem, quando e onde.",
    "B": "por que a Sprint é valiosa, o que pode ser feito e como o trabalho será realizado.",
    "C": "o que foi feito, o que será feito e quais os impedimentos.",
    "D": "visão, roadmap e release.",
    "E": "custo, prazo e escopo."
  },
  "gabarito": "B",
  "comentario": "Os três tópicos: por quê (Meta da Sprint), o quê (itens selecionados) e como (plano dos Developers).",
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
  "id": "ESP-PROC-0041",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Métricas e estimativas de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "5",
    "titulo": "Métricas e estimativas de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#5. Métricas e estimativas de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §5 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na Análise de Pontos de Função, uma funcionalidade que envia dados para fora da fronteira da aplicação, contendo cálculo de totais, é classificada como:",
  "imagem": null,
  "alternativas": {
    "A": "Entrada Externa.",
    "B": "Consulta Externa.",
    "C": "Saída Externa.",
    "D": "Arquivo de Interface Externa.",
    "E": "Arquivo Lógico Interno."
  },
  "gabarito": "C",
  "comentario": "Há processamento adicional (cálculo) → Saída Externa. Sem cálculo e sem dado derivado seria Consulta Externa.",
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
  "id": "ESP-PROC-0042",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Métricas e estimativas de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "5",
    "titulo": "Métricas e estimativas de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#5. Métricas e estimativas de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §5 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um Arquivo de Interface Externa é um grupo de dados logicamente relacionados mantido pela própria aplicação que está sendo contada.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "O AIE é **referenciado** pela aplicação, mas **mantido por outra** aplicação. Mantido pela própria aplicação é o ALI.",
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
  "id": "ESP-PROC-0043",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Métricas e estimativas de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "5",
    "titulo": "Métricas e estimativas de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#5. Métricas e estimativas de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §5 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na contagem IFPUG, um ALI com 2 tipos de registro e 30 tipos de dados, de complexidade média, contribui com:",
  "imagem": null,
  "alternativas": {
    "A": "5 PF.",
    "B": "7 PF.",
    "C": "10 PF.",
    "D": "15 PF.",
    "E": "4 PF."
  },
  "gabarito": "C",
  "comentario": "ALI: baixa 7, média 10, alta 15. (TR 2–5 com TD 20–50 resulta em média.)",
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
  "id": "ESP-PROC-0044",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Métricas e estimativas de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "5",
    "titulo": "Métricas e estimativas de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#5. Métricas e estimativas de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §5 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No COCOMO básico, o modo de projeto caracterizado por equipes pequenas e experientes, trabalhando em ambiente familiar com requisitos pouco rígidos, é o modo:",
  "imagem": null,
  "alternativas": {
    "A": "embutido.",
    "B": "semidestacado.",
    "C": "orgânico.",
    "D": "pós-arquitetura.",
    "E": "composição de aplicação."
  },
  "gabarito": "C",
  "comentario": "Orgânico. O embutido tem restrições rígidas; o semidestacado é intermediário. D e E são submodelos do COCOMO II.",
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
  "id": "ESP-PROC-0045",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Métricas e estimativas de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "5",
    "titulo": "Métricas e estimativas de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#5. Métricas e estimativas de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §5 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O grafo de fluxo de um módulo tem 11 arestas e 9 nós. A complexidade ciclomática é:",
  "imagem": null,
  "alternativas": {
    "A": "2.",
    "B": "3.",
    "C": "4.",
    "D": "9.",
    "E": "20."
  },
  "gabarito": "C",
  "comentario": "V(G) = E − N + 2 = 11 − 9 + 2 = 4.",
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
  "id": "ESP-PROC-0046",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Métricas e estimativas de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "5",
    "titulo": "Métricas e estimativas de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#5. Métricas e estimativas de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §5 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Planning Poker, as cartas são reveladas simultaneamente para reduzir o efeito de ancoragem, e os participantes com as estimativas extremas explicam seus motivos antes de nova rodada.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "É a dinâmica do Planning Poker.",
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
  "id": "ESP-PROC-0047",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §6 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo a ISO/IEC 25010:2011, testabilidade e modularidade são subcaracterísticas de:",
  "imagem": null,
  "alternativas": {
    "A": "portabilidade.",
    "B": "confiabilidade.",
    "C": "manutenibilidade.",
    "D": "usabilidade.",
    "E": "compatibilidade."
  },
  "gabarito": "C",
  "comentario": "Manutenibilidade (2011): modularidade, reusabilidade, analisabilidade, modificabilidade, testabilidade. (Na revisão de 2023, testabilidade continua em manutenibilidade.)",
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
  "id": "ESP-PROC-0048",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §6 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A verificação responde à pergunta \"estamos construindo o produto certo?\", enquanto a validação responde a \"estamos construindo o produto corretamente?\".",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Está invertido. Verificação: produto construído corretamente (de acordo com a especificação). Validação: produto certo (atende às necessidades do usuário).",
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
  "id": "ESP-PROC-0049",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §6 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No CMMI (v1.3, representação por estágios), o nível em que os processos são controlados por meio de técnicas estatísticas e quantitativas é o:",
  "imagem": null,
  "alternativas": {
    "A": "nível 2 – Gerenciado.",
    "B": "nível 3 – Definido.",
    "C": "nível 4 – Gerenciado Quantitativamente.",
    "D": "nível 5 – Em Otimização.",
    "E": "nível 1 – Inicial."
  },
  "gabarito": "C",
  "comentario": "Nível 4. O nível 5 foca em melhoria contínua e inovação.",
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
  "id": "ESP-PROC-0050",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §6 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A respeito do MPS.BR, assinale a correta.",
  "imagem": null,
  "alternativas": {
    "A": "Possui cinco níveis de maturidade, de 1 a 5.",
    "B": "Seu nível inicial é o A – Em Otimização.",
    "C": "Possui sete níveis, de G (Parcialmente Gerenciado) a A (Em Otimização), e foi concebido para ser compatível com o CMMI e normas ISO.",
    "D": "Foi desenvolvido pelo SEI da Carnegie Mellon.",
    "E": "Avalia apenas a qualidade do produto, e não do processo."
  },
  "gabarito": "C",
  "comentario": "Sete níveis (G a A), criado pela SOFTEX, compatível com CMMI e ISO; avalia processos.",
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
  "id": "ESP-PROC-0051",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §6 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Inspeções e walkthroughs são técnicas estáticas de verificação que podem ser aplicadas a documentos de requisitos e de projeto, antes da existência do código.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "São técnicas estáticas, aplicáveis a qualquer artefato legível.",
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
  "id": "ESP-PROC-0052",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Engenharia de requisitos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §13 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo Sommerville, um requisito que estabelece que o sistema deve ser desenvolvido utilizando determinada linguagem de programação e seguindo o processo padrão da empresa é classificado como requisito não funcional:",
  "imagem": null,
  "alternativas": {
    "A": "de produto, de eficiência.",
    "B": "de produto, de dependabilidade.",
    "C": "organizacional, de desenvolvimento.",
    "D": "externo, regulatório.",
    "E": "externo, ético."
  },
  "gabarito": "C",
  "comentario": "Restrições sobre o processo de desenvolvimento e a linguagem são requisitos organizacionais de desenvolvimento.",
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
  "id": "ESP-PROC-0053",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Engenharia de requisitos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §13 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A etnografia é uma técnica de observação em que o analista se insere no ambiente de trabalho dos usuários, sendo eficaz para descobrir requisitos implícitos que refletem a forma real como as pessoas trabalham; contudo, por si só, não é adequada para identificar novas funcionalidades a serem acrescentadas ao sistema.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Sommerville afirma que a etnografia revela requisitos implícitos e de cooperação, mas, por focar no trabalho atual, não é boa para inovações; recomenda combiná-la com prototipação.",
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
  "id": "ESP-PROC-0054",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Engenharia de requisitos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §13 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A rastreabilidade que permite, partindo de um caso de teste ou de um trecho de código, identificar o requisito que lhe deu origem e o stakeholder que o solicitou, é denominada rastreabilidade:",
  "imagem": null,
  "alternativas": {
    "A": "para frente.",
    "B": "para trás.",
    "C": "horizontal.",
    "D": "temporal.",
    "E": "de projeto."
  },
  "gabarito": "B",
  "comentario": "Rastreabilidade para trás (backward): do artefato derivado para o requisito e sua origem.",
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
  "id": "ESP-PROC-0055",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Engenharia de requisitos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §13 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São verificações realizadas durante a validação de requisitos, segundo Sommerville:",
  "imagem": null,
  "alternativas": {
    "A": "validade, consistência, completude, realismo e verificabilidade.",
    "B": "coesão, acoplamento, herança e polimorfismo.",
    "C": "disponibilidade, integridade e confidencialidade.",
    "D": "unidade, integração, sistema e aceitação.",
    "E": "concepção, elaboração, construção e transição."
  },
  "gabarito": "A",
  "comentario": "São as cinco verificações de validação.",
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
  "id": "ESP-PROC-0056",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Engenharia de requisitos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §13 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A técnica JAD (Joint Application Design) consiste na aplicação de questionários a um grande número de usuários dispersos geograficamente, dispensando reuniões presenciais.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "JAD é baseado em workshops/sessões conjuntas facilitadas com usuários e desenvolvedores. A descrição é de questionários.",
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
  "id": "ESP-PROC-0057",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Engenharia de requisitos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §13 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O critério INVEST, aplicado a histórias de usuário, indica que elas devem ser:",
  "imagem": null,
  "alternativas": {
    "A": "Implementadas, Novas, Visíveis, Exatas, Simples e Testadas.",
    "B": "Independentes, Negociáveis, Valiosas, Estimáveis, Pequenas e Testáveis.",
    "C": "Integradas, Normatizadas, Validadas, Especificadas, Seguras e Traduzidas.",
    "D": "Iterativas, Numeradas, Versionadas, Executáveis, Simples e Tipadas.",
    "E": "Independentes, Nítidas, Verificadas, Escritas, Sequenciais e Temporais."
  },
  "gabarito": "B",
  "comentario": "INVEST de Bill Wake.",
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
  "id": "ESP-PROC-0058",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Prototipação e engenharia de usabilidade",
  "ref_apostila": {
    "modulo": "06",
    "secao": "14",
    "titulo": "Prototipação e engenharia de usabilidade",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#14. Prototipação e engenharia de usabilidade]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §14 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O método de avaliação em que especialistas simulam, passo a passo, a execução de uma tarefa por um usuário novato, perguntando, a cada ação, se ele saberá o que fazer e se perceberá que está progredindo, é:",
  "imagem": null,
  "alternativas": {
    "A": "avaliação heurística.",
    "B": "teste A/B.",
    "C": "percurso cognitivo.",
    "D": "card sorting.",
    "E": "grupo focal."
  },
  "gabarito": "C",
  "comentario": "Percurso cognitivo.",
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
  "id": "ESP-PROC-0059",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Prototipação e engenharia de usabilidade",
  "ref_apostila": {
    "modulo": "06",
    "secao": "14",
    "titulo": "Prototipação e engenharia de usabilidade",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#14. Prototipação e engenharia de usabilidade]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §14 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No protótipo vertical, implementa-se um subconjunto reduzido de funcionalidades em profundidade, incluindo várias camadas do sistema, enquanto o horizontal cobre muitas funcionalidades de forma superficial.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "É a distinção entre protótipo vertical e horizontal.",
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
  "id": "ESP-PROC-0060",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Prototipação e engenharia de usabilidade",
  "ref_apostila": {
    "modulo": "06",
    "secao": "14",
    "titulo": "Prototipação e engenharia de usabilidade",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#14. Prototipação e engenharia de usabilidade]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §14 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma dificuldade típica da prototipação é:",
  "imagem": null,
  "alternativas": {
    "A": "impossibilidade de obter feedback do usuário.",
    "B": "o cliente perceber o protótipo como versão quase final e pressionar por sua entrada em produção.",
    "C": "a obrigatoriedade de implementar todos os requisitos não funcionais no protótipo.",
    "D": "a impossibilidade de usar papel ou ferramentas de desenho.",
    "E": "a eliminação da necessidade de validação de requisitos."
  },
  "gabarito": "B",
  "comentario": "Expectativas irreais do cliente são a dificuldade mais citada.",
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
  "id": "ESP-PROC-0061",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML 2.5",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §15 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São diagramas comportamentais de interação da UML 2.5:",
  "imagem": null,
  "alternativas": {
    "A": "classes, objetos, pacotes e componentes.",
    "B": "sequência, comunicação, tempo e visão geral de interação.",
    "C": "casos de uso, atividades e máquina de estados.",
    "D": "implantação, estrutura composta e perfil.",
    "E": "sequência, atividades, casos de uso e classes."
  },
  "gabarito": "B",
  "comentario": "Os quatro diagramas de interação. Casos de uso, atividades e máquina de estados são comportamentais, mas não de interação.",
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
  "id": "ESP-PROC-0062",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML 2.5",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §15 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um diagrama de casos de uso, o relacionamento «extend» representa um comportamento obrigatório, sempre executado pelo caso de uso base, enquanto o «include» representa comportamento opcional.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "É o contrário: «include» é obrigatório (sempre executado); «extend» é condicional/opcional.",
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
  "id": "ESP-PROC-0063",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML 2.5",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §15 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um diagrama de classes, a relação em que a parte não existe sem o todo e o todo é responsável pelo ciclo de vida das partes é representada por:",
  "imagem": null,
  "alternativas": {
    "A": "linha tracejada com seta aberta.",
    "B": "losango vazio no lado do todo.",
    "C": "losango preenchido no lado do todo.",
    "D": "triângulo vazio apontando para o todo.",
    "E": "linha tracejada com triângulo vazio."
  },
  "gabarito": "C",
  "comentario": "Composição: losango preenchido no todo. Losango vazio é agregação.",
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
  "id": "ESP-PROC-0064",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML 2.5",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §15 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No diagrama de atividades, o elemento que encerra apenas o fluxo que o alcança, sem encerrar os demais fluxos concorrentes da atividade, é o:",
  "imagem": null,
  "alternativas": {
    "A": "nó final de atividade.",
    "B": "nó final de fluxo.",
    "C": "nó de união (join).",
    "D": "nó de decisão.",
    "E": "nó inicial."
  },
  "gabarito": "B",
  "comentario": "Final de fluxo (círculo com X). O final de atividade encerra tudo.",
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
  "id": "ESP-PROC-0065",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML 2.5",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §15 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um diagrama de máquina de estados, o rótulo de uma transição segue o formato evento [guarda] / ação, de modo que a transição ocorre quando o evento acontece e a condição de guarda é verdadeira.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Formato evento [guarda] / ação.",
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
  "id": "ESP-PROC-0066",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML 2.5",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §15 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No diagrama de sequência, o fragmento combinado utilizado para representar comportamento alternativo do tipo \"se-senão\", com múltiplos operandos e condições de guarda, é o:",
  "imagem": null,
  "alternativas": {
    "A": "opt.",
    "B": "loop.",
    "C": "par.",
    "D": "alt.",
    "E": "ref."
  },
  "gabarito": "D",
  "comentario": "alt. O opt é o \"se\" sem \"senão\".",
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
  "id": "ESP-PROC-0067",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML 2.5",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §15 – Q7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O diagrama UML que mostra a configuração física dos nós de processamento em tempo de execução e os artefatos implantados neles é o diagrama de:",
  "imagem": null,
  "alternativas": {
    "A": "componentes.",
    "B": "pacotes.",
    "C": "implantação.",
    "D": "estrutura composta.",
    "E": "objetos."
  },
  "gabarito": "C",
  "comentario": "Diagrama de implantação (deployment).",
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
  "id": "ESP-PROC-0068",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Testes de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §16 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na integração incremental descendente (top-down), os módulos de nível inferior ainda não implementados são substituídos por:",
  "imagem": null,
  "alternativas": {
    "A": "drivers.",
    "B": "stubs.",
    "C": "oráculos.",
    "D": "mutantes.",
    "E": "controladores de teste."
  },
  "gabarito": "B",
  "comentario": "Stubs substituem módulos chamados (inferiores) no top-down. Drivers (controladores) substituem os chamadores no bottom-up.",
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
  "id": "ESP-PROC-0069",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Testes de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §16 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Obter 100% de cobertura de instruções garante 100% de cobertura de decisões (ramos).",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "O inverso é verdadeiro: 100% de decisões implica 100% de instruções. Um `if` sem `else` pode ter todas as instruções cobertas sem que o ramo falso seja exercitado.",
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
  "id": "ESP-PROC-0070",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Testes de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §16 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um campo aceita valores inteiros de 1 a 100. Pela análise de valor-limite com dois valores, os valores a testar são:",
  "imagem": null,
  "alternativas": {
    "A": "1 e 100.",
    "B": "0, 1, 100 e 101.",
    "C": "0, 50 e 101.",
    "D": "2, 50 e 99.",
    "E": "−1, 0, 1, 100."
  },
  "gabarito": "B",
  "comentario": "Com dois valores: cada limite e seu vizinho fora da partição: 0, 1, 100, 101.",
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
  "id": "ESP-PROC-0071",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Testes de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §16 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O teste beta é conduzido por usuários finais em seus próprios ambientes, normalmente sem a presença do desenvolvedor, enquanto o teste alfa é conduzido por usuários nas instalações do desenvolvedor.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Alfa: no ambiente do desenvolvedor, com observação. Beta: no ambiente do usuário, sem o desenvolvedor.",
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
  "id": "ESP-PROC-0072",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Testes de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §16 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Após a correção de um defeito, a reexecução de testes previamente aprovados, para verificar se a alteração não introduziu novos defeitos em partes que já funcionavam, denomina-se teste de:",
  "imagem": null,
  "alternativas": {
    "A": "confirmação.",
    "B": "fumaça.",
    "C": "regressão.",
    "D": "estresse.",
    "E": "aceitação."
  },
  "gabarito": "C",
  "comentario": "Regressão. A confirmação (reteste) verifica se o próprio defeito foi corrigido.",
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
  "id": "ESP-PROC-0073",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Testes de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §16 – Q8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O teste de estresse avalia o comportamento do sistema sob a carga normal esperada de produção, ao passo que o teste de carga submete o sistema a condições acima de seus limites para encontrar o ponto de ruptura.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "As definições estão trocadas: carga = condições esperadas; estresse = além dos limites.",
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
  "id": "ESP-PROC-0074",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Desenvolvimento low-code e no-code",
  "ref_apostila": {
    "modulo": "06",
    "secao": "17",
    "titulo": "Desenvolvimento low-code e no-code",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#17. Desenvolvimento low-code e no-code]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §17 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma área de negócios do banco criou, sem apoio da TI e sem escrever código, um aplicativo de controle de visitas a clientes. Esse cenário caracteriza",
  "imagem": null,
  "alternativas": {
    "A": "desenvolvimento low-code por desenvolvedores profissionais.",
    "B": "desenvolvimento no-code por desenvolvedores cidadãos, com risco de shadow IT.",
    "C": "desenvolvimento orientado a modelos com geração de código-fonte em C.",
    "D": "arquitetura de microsserviços.",
    "E": "programação em pares."
  },
  "gabarito": "B",
  "comentario": "Sem código e feito pela área de negócio é no-code por desenvolvedor cidadão; fora do controle da TI é shadow IT.",
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
  "id": "ESP-PROC-0075",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Desenvolvimento low-code e no-code",
  "ref_apostila": {
    "modulo": "06",
    "secao": "17",
    "titulo": "Desenvolvimento low-code e no-code",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#17. Desenvolvimento low-code e no-code]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §17 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Plataformas low-code dispensam governança porque já trazem componentes de segurança prontos.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Componentes prontos não substituem governança: controle de acesso a dados, ambientes, revisão e catálogo continuam necessários.",
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
  "id": "ESP-PROC-0076",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Desenvolvimento low-code e no-code",
  "ref_apostila": {
    "modulo": "06",
    "secao": "17",
    "titulo": "Desenvolvimento low-code e no-code",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#17. Desenvolvimento low-code e no-code]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §17 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "É risco típico da adoção de plataformas low-code:",
  "imagem": null,
  "alternativas": {
    "A": "impossibilidade de criar interfaces gráficas.",
    "B": "dependência do fornecedor da plataforma (vendor lock-in).",
    "C": "obrigação de usar linguagem de máquina.",
    "D": "proibição de integração com APIs.",
    "E": "aumento obrigatório do tempo de entrega."
  },
  "gabarito": "B",
  "comentario": "O lock-in é o risco clássico, porque a aplicação fica presa ao modelo e ao runtime da plataforma.",
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
  "id": "ESP-PROC-0077",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA…",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §18 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo o versionamento semântico, uma biblioteca na versão 3.4.2 que recebe uma nova funcionalidade compatível com as versões anteriores deve passar para a versão:",
  "imagem": null,
  "alternativas": {
    "A": "3.4.3.",
    "B": "3.5.0.",
    "C": "3.5.2.",
    "D": "4.0.0.",
    "E": "4.4.2."
  },
  "gabarito": "B",
  "comentario": "Funcionalidade compatível sobe o MINOR e zera o PATCH: 3.5.0.",
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
  "id": "ESP-PROC-0078",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Inglês técnico",
  "ref_apostila": {
    "modulo": "06",
    "secao": "19",
    "titulo": "Inglês técnico",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#19. Inglês técnico]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §19 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-APO-06-19",
  "enunciado": "Segundo o texto,",
  "imagem": null,
  "alternativas": {
    "A": "a nova versão da API é incompatível com as versões anteriores.",
    "B": "os endpoints legados já foram removidos.",
    "C": "os endpoints legados serão marcados como obsoletos no próximo trimestre e, por fim, removidos.",
    "D": "os desenvolvedores são proibidos de migrar suas aplicações.",
    "E": "os endpoints antigos serão mantidos indefinidamente."
  },
  "gabarito": "C",
  "comentario": "*Will be deprecated next quarter* = serão marcados como obsoletos no próximo trimestre; *eventually ... removed* = por fim, removidos. A nova versão é *backward compatible* (compatível com as anteriores).",
  "tags": [
    "ingles"
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
  "id": "ESP-PROC-0079",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Inglês técnico",
  "ref_apostila": {
    "modulo": "06",
    "secao": "19",
    "titulo": "Inglês técnico",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#19. Inglês técnico]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §19 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-APO-06-19",
  "enunciado": "No texto, a palavra *eventually* pode ser traduzida, sem alteração de sentido, por:",
  "imagem": null,
  "alternativas": {
    "A": "eventualmente.",
    "B": "ocasionalmente.",
    "C": "por fim.",
    "D": "talvez.",
    "E": "atualmente."
  },
  "gabarito": "C",
  "comentario": "*Eventually* é falso cognato: significa \"por fim, finalmente\".",
  "tags": [
    "ingles"
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
  "id": "ESP-PROC-0080",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Inglês técnico",
  "ref_apostila": {
    "modulo": "06",
    "secao": "19",
    "titulo": "Inglês técnico",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#19. Inglês técnico]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §19 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma especificação técnica em inglês, o termo *should* indica requisito obrigatório, equivalente a *must*.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "*Should* é recomendação; obrigação é *must* ou *shall* (RFC 2119).",
  "tags": [
    "ingles",
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
