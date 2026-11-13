/*
 * Variações (esp-a) — agente 3: Processo, Programação, Governança, Banco de Dados e Web.
 * Gerado por tools/verificacao/agente3/gerar.py a partir de q_*.py (não edite à mão).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-PROC-V001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "XP x Scrum",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q52",
    "id_pai": "ESP-PROC-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Observe o quadro comparativo entre duas abordagens ágeis.\n\n| Aspecto | X | Y |\n|---|---|---|\n| *Práticas de engenharia* | Prescreve programação em pares, TDD, refatoração e integração contínua | Não prescreve práticas de engenharia |\n| *Papéis* | Cliente, programador, coach (treinador) e tracker (rastreador) | Product Owner, Scrum Master e Developers |\n| *Ciclo* | Iterações curtas (ciclo semanal na 2ª edição) | Sprints de duração fixa de até um mês |\n| *Valores* | Comunicação, simplicidade, feedback, coragem e respeito | Compromisso, foco, abertura, respeito e coragem |\n\nÉ correto identificar que X e Y representam, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "Extreme Programming e Scrum.",
    "B": "Scrum e Kanban.",
    "C": "Crystal Clear e Scrum.",
    "D": "Lean e Kanban.",
    "E": "FDD e Extreme Programming."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** As práticas (pares, TDD, refatoração, integração contínua), os papéis de coach e tracker e os cinco valores (com respeito, da 2ª edição) identificam o XP. PO, Scrum Master, Developers e Sprints de até um mês identificam o Scrum.\n\n- **A** (correta): corresponde às características descritas.\n- **B** (errada): Kanban não tem papéis obrigatórios nem sprints; e X não é Scrum, que não prescreve práticas de engenharia.\n- **C** (errada): Crystal Clear enfatiza entregas frequentes, melhoria reflexiva e comunicação osmótica, não os papéis de coach e tracker.\n- **D** (errada): Lean trata de eliminar desperdícios; nenhuma das colunas descreve Lean ou Kanban.\n- **E** (errada): o FDD tem dono de classe e equipes de funcionalidades; e Y não é XP.\n\nRevisar: Apostila 06 §4 – Scrum (Guia 2020) e Kanban.",
  "tags": [
    "xp",
    "scrum",
    "agil",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q52",
    "id_pai": "ESP-PROC-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Comparando o Scrum (Guia 2020) com o Método Kanban, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o Kanban exige iterações de duração fixa, enquanto o Scrum trabalha em fluxo contínuo.",
    "B": "o Kanban exige os papéis de Product Owner e Scrum Master, assim como o Scrum.",
    "C": "no Kanban o limite de trabalho em progresso é explícito por etapa, enquanto no Scrum a limitação é indireta, definida pelo que cabe na Sprint.",
    "D": "no Scrum o quadro é persistente, ao passo que no Kanban ele é reiniciado a cada ciclo.",
    "E": "no Scrum, novos itens podem entrar na Sprint a qualquer momento, ainda que ponham em risco a Meta da Sprint."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O Kanban limita explicitamente o trabalho em progresso em cada etapa do fluxo; no Scrum a limitação é indireta, pelo que o time seleciona para caber na Sprint.\n\n- **A** (errada): é o contrário: Scrum usa Sprints fixas; Kanban, fluxo contínuo.\n- **B** (errada): o Kanban não impõe papéis; parte do processo e dos papéis atuais.\n- **C** (correta): é a diferença central apontada na comparação.\n- **D** (errada): no Scrum o quadro costuma ser reiniciado a cada Sprint; no Kanban é persistente.\n- **E** (errada): o Guia veda mudanças que ponham em risco a Meta da Sprint.\n\nRevisar: Apostila 06 §4 – Scrum (Guia 2020) e Kanban.",
  "tags": [
    "scrum",
    "kanban",
    "agil",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V003",
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
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q13",
    "id_pai": "ESP-PROC-0014",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Segundo o Guia do Scrum (2020), o compromisso associado ao **Backlog do Produto** é",
  "imagem": null,
  "alternativas": {
    "A": "a Meta da Sprint.",
    "B": "a Definição de Pronto.",
    "C": "a Definição de Preparado (Definition of Ready).",
    "D": "o gráfico de burndown.",
    "E": "a Meta do Produto."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Guia 2020: Backlog do Produto → Meta do Produto; Sprint Backlog → Meta da Sprint; Incremento → Definição de Pronto.\n\n- **A** (errada): é o compromisso do Sprint Backlog.\n- **B** (errada): é o compromisso do Incremento.\n- **C** (errada): não consta do Guia; é prática complementar.\n- **D** (errada): burndown é prática complementar, não artefato nem compromisso.\n- **E** (correta): é o compromisso do Backlog do Produto.\n\nRevisar: Apostila 06 §4 – Scrum (Guia 2020) e Kanban.",
  "tags": [
    "scrum",
    "artefatos",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Scrum: responsabilidades",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q13",
    "id_pai": "ESP-PROC-0014",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "De acordo com o Guia do Scrum (2020), é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o Scrum Master atribui as tarefas do Sprint Backlog aos Developers.",
    "B": "o Product Owner pode ser um comitê formado pelos principais stakeholders.",
    "C": "o Sprint Backlog pertence ao Product Owner, que o atualiza diariamente.",
    "D": "somente o Product Owner tem autoridade para cancelar a Sprint, o que pode ocorrer quando a Meta da Sprint se torna obsoleta.",
    "E": "a Daily Scrum exige a presença do Scrum Master e do Product Owner."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O Product Owner é uma pessoa, responsável por ordenar o Backlog do Produto, e é o único com autoridade para cancelar uma Sprint.\n\n- **A** (errada): o time é autogerenciável; o Scrum Master não distribui tarefas.\n- **B** (errada): o PO é uma pessoa, não um comitê.\n- **C** (errada): o Sprint Backlog é dos Developers.\n- **D** (correta): regra do Guia 2020.\n- **E** (errada): a Daily é dos Developers; SM e PO só participam como Developers se estiverem trabalhando em itens da Sprint.\n\nRevisar: Apostila 06 §4 – Scrum (Guia 2020) e Kanban.",
  "tags": [
    "scrum",
    "papeis",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Kanban: métricas",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q14",
    "id_pai": "ESP-PROC-0015",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Método Kanban, considere as métricas de fluxo. É correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o lead time é medido do ponto de vista do time, a partir do início do desenvolvimento.",
    "B": "o tempo de ciclo (cycle time) é medido a partir do início efetivo do trabalho e, por isso, é menor ou igual ao lead time.",
    "C": "o throughput é a quantidade de itens iniciados e ainda não concluídos.",
    "D": "a velocidade em story points é a métrica obrigatória do Kanban.",
    "E": "aumentar o WIP reduz o tempo de ciclo, desde que a vazão permaneça constante."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O lead time vai do pedido (ou do compromisso com o item) até a entrega ao cliente; o cycle time vai do início efetivo do trabalho até a conclusão. Por isso o cycle time é sempre menor ou igual ao lead time.\n\n- **A** (errada): lead time é medido do ponto de vista do cliente (pedido → entrega).\n- **B** (correta): definição das duas métricas.\n- **C** (errada): essa é a definição de WIP; throughput é a vazão (itens concluídos por período).\n- **D** (errada): velocidade é métrica típica do Scrum; o Kanban usa lead time, cycle time e throughput.\n- **E** (errada): pela Lei de Little, com vazão constante, mais WIP significa maior tempo de ciclo.\n\nRevisar: Apostila 06 §4 – Scrum (Guia 2020) e Kanban.",
  "tags": [
    "kanban",
    "metricas",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Kanban: diagrama de fluxo cumulativo",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q14",
    "id_pai": "ESP-PROC-0015",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um diagrama de fluxo cumulativo (CFD) de um quadro Kanban, a faixa correspondente à coluna \"Em teste\" vem se alargando semana após semana, enquanto a faixa \"Concluído\" cresce cada vez mais devagar. Essa situação indica",
  "imagem": null,
  "alternativas": {
    "A": "um gargalo na etapa de teste, com acúmulo de itens em andamento, que recomenda rever o limite de WIP dessa etapa.",
    "B": "aumento da vazão do time, já que há mais itens no quadro.",
    "C": "redução do tempo de ciclo médio, por causa do maior número de itens em teste.",
    "D": "que a Sprint deve ser cancelada pelo Product Owner.",
    "E": "que o diagrama está incorreto, pois as faixas de um CFD têm largura constante."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** No CFD, a distância vertical entre as faixas indica o WIP de cada etapa. Uma faixa que engorda revela acúmulo de itens naquela etapa, isto é, um gargalo. A resposta típica é limitar o WIP e atacar a restrição.\n\n- **A** (correta): faixa que se alarga = acúmulo = gargalo.\n- **B** (errada): a faixa \"Concluído\" cresce mais devagar: a vazão caiu.\n- **C** (errada): mais itens em andamento com vazão menor aumentam o tempo de ciclo.\n- **D** (errada): Kanban não trabalha com Sprints; cancelamento é regra do Scrum.\n- **E** (errada): as faixas variam justamente para mostrar o WIP de cada etapa ao longo do tempo.\n\nRevisar: Apostila 06 §4 – Scrum (Guia 2020) e Kanban.",
  "tags": [
    "kanban",
    "cfd",
    "metricas",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Kanban: Lei de Little",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §4 – Q4",
    "id_pai": "ESP-PROC-0038",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um time de sustentação tem, em média, 24 itens em andamento no quadro Kanban e conclui, em média, 8 itens por semana. Mantida a vazão, para que o tempo médio de ciclo passe a ser de 2 semanas, o WIP médio deve ser reduzido para",
  "imagem": null,
  "alternativas": {
    "A": "12 itens.",
    "B": "4 itens.",
    "C": "3 itens.",
    "D": "16 itens.",
    "E": "20 itens."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Lei de Little: tempo de ciclo = WIP ÷ vazão. Hoje: 24 ÷ 8 = 3 semanas. Para 2 semanas com vazão 8: WIP = 2 × 8 = 16 itens.\n\n- **A** (errada): divide o WIP atual por 2, como se o tempo de ciclo fosse proporcional à metade do WIP.\n- **B** (errada): divide a vazão pelo tempo-alvo (8 ÷ 2).\n- **C** (errada): é o tempo de ciclo atual (24 ÷ 8), não um WIP.\n- **D** (correta): 2 semanas × 8 itens/semana.\n- **E** (errada): reduz o WIP em apenas 4 itens, sem aplicar a Lei de Little.\n\nRevisar: Apostila 06 §4 – Scrum (Guia 2020) e Kanban.",
  "tags": [
    "kanban",
    "lei-de-little",
    "calculo",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Kanban: Lei de Little",
  "ref_apostila": {
    "modulo": "06",
    "secao": "4",
    "titulo": "Scrum (Guia 2020) e Kanban",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#4. Scrum (Guia 2020) e Kanban]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §4 – Q4",
    "id_pai": "ESP-PROC-0038",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O tempo médio de ciclo de uma equipe é de 5 dias úteis e ela conclui, em média, 3 itens por dia útil. Pela Lei de Little, o número médio de itens em andamento (WIP) é",
  "imagem": null,
  "alternativas": {
    "A": "8.",
    "B": "1,67.",
    "C": "15.",
    "D": "0,6.",
    "E": "2."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** WIP = tempo de ciclo × vazão = 5 × 3 = 15 itens.\n\n- **A** (errada): soma os valores (5 + 3) em vez de multiplicá-los.\n- **B** (errada): divide o tempo de ciclo pela vazão (5 ÷ 3).\n- **C** (correta): 5 dias × 3 itens/dia.\n- **D** (errada): divide a vazão pelo tempo de ciclo (3 ÷ 5).\n- **E** (errada): subtrai os valores (5 − 3).\n\nRevisar: Apostila 06 §4 – Scrum (Guia 2020) e Kanban.",
  "tags": [
    "kanban",
    "lei-de-little",
    "calculo",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q57",
    "id_pai": "ESP-PROC-0002",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Na revisão do processo de portabilidade de salário, definiu-se que o atendente deve poder anexar ao pedido o comprovante enviado pelo cliente e registrar, no sistema interno, o motivo de eventual recusa. Na engenharia de requisitos, essa definição corresponde a um requisito",
  "imagem": null,
  "alternativas": {
    "A": "não funcional de produto, da subcategoria eficiência.",
    "B": "funcional.",
    "C": "não funcional organizacional, da subcategoria de desenvolvimento.",
    "D": "não funcional externo, da subcategoria ética.",
    "E": "não funcional de produto, da subcategoria dependabilidade."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Anexar comprovante e registrar motivo de recusa são serviços que o sistema deve oferecer: requisitos funcionais.\n\n- **A** (errada): eficiência trata de desempenho e espaço, não de funções.\n- **B** (correta): descreve serviços que o sistema deve prestar.\n- **C** (errada): requisitos de desenvolvimento tratam de linguagem, processo e padrões a seguir.\n- **D** (errada): requisitos éticos derivam de valores da sociedade; o enunciado descreve funções.\n- **E** (errada): dependabilidade trata de confiabilidade e disponibilidade.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "requisitos-funcionais",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Requisitos de usuário x de sistema",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q57",
    "id_pai": "ESP-PROC-0002",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere as declarações a seguir.\n\nI. O sistema deve gerar relatório mensal das renegociações de dívida por agência.\nII. No último dia útil de cada mês, após as 18h, o sistema deve gerar, para cada agência, o total de contratos renegociados, o valor total e o prazo médio, disponibilizando o arquivo aos gerentes regionais.\n\nSegundo Sommerville, I e II são exemplos, respectivamente, de requisitos",
  "imagem": null,
  "alternativas": {
    "A": "de sistema e de usuário.",
    "B": "não funcional e funcional.",
    "C": "de negócio e de domínio.",
    "D": "volátil e permanente.",
    "E": "de usuário e de sistema."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Requisitos de usuário são declarações em linguagem natural, de alto nível, para clientes e gestores (I). Requisitos de sistema detalham as funções e restrições a implementar, para a equipe técnica (II).\n\n- **A** (errada): inverte os níveis.\n- **B** (errada): ambos descrevem a mesma função (gerar relatório), em níveis diferentes de detalhe.\n- **C** (errada): requisito de negócio é objetivo da organização (ex.: reduzir inadimplência); de domínio vem das regras da área de aplicação.\n- **D** (errada): a classificação pedida é por nível de detalhe, não por estabilidade.\n- **E** (correta): I é de alto nível; II detalha o que implementar.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "sommerville",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Requisitos não funcionais e ISO/IEC 25010",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q58",
    "id_pai": "ESP-PROC-0003",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No aplicativo de um banco, o cliente digita o valor de uma transferência e o envio ocorre imediatamente, sem tela de confirmação. Com frequência, clientes enviam valores errados por digitarem um zero a mais. Considerando o modelo de qualidade de produto da ISO/IEC 25010 (versão 2011), essa situação revela falha na especificação de requisitos de",
  "imagem": null,
  "alternativas": {
    "A": "usabilidade.",
    "B": "confiabilidade.",
    "C": "portabilidade.",
    "D": "compatibilidade.",
    "E": "manutenibilidade."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Proteção contra erros do usuário é subcaracterística de usabilidade (ISO/IEC 25010:2011). Uma confirmação antes de enviar evitaria o erro.\n\n- **A** (correta): a falta de proteção contra erros do usuário é falha de usabilidade.\n- **B** (errada): confiabilidade trata de maturidade, disponibilidade, tolerância a falhas e recuperabilidade do sistema.\n- **C** (errada): portabilidade trata de adaptabilidade, instalabilidade e substituibilidade.\n- **D** (errada): compatibilidade trata de coexistência e interoperabilidade.\n- **E** (errada): manutenibilidade trata da facilidade de modificar o produto.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "iso-25010",
    "usabilidade",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Requisitos não funcionais e ISO/IEC 25010",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q58",
    "id_pai": "ESP-PROC-0003",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A especificação do serviço de consulta de saldo diz apenas que \"a resposta deve ser rápida\". Em produção, nos horários de pico, a consulta leva até 9 segundos e os clientes reclamam. A falha da especificação refere-se, na ISO/IEC 25010, à característica",
  "imagem": null,
  "alternativas": {
    "A": "adequação funcional, quanto à completude funcional.",
    "B": "segurança, quanto à integridade.",
    "C": "usabilidade, quanto à apreensibilidade.",
    "D": "compatibilidade, quanto à coexistência.",
    "E": "eficiência de desempenho, quanto ao comportamento em relação ao tempo."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Tempo de resposta é subcaracterística (comportamento em relação ao tempo) de eficiência de desempenho. O requisito também estava mal escrito: RNF deve ser quantitativo e testável (ex.: até 2 s em 95% das requisições).\n\n- **A** (errada): a função existe e é executada; o problema é o tempo.\n- **B** (errada): integridade trata de impedir modificação indevida de dados.\n- **C** (errada): apreensibilidade é a facilidade de aprender a usar.\n- **D** (errada): coexistência trata de compartilhar ambiente com outros produtos sem prejuízo.\n- **E** (correta): tempo de resposta é desempenho.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "iso-25010",
    "desempenho",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Requisitos funcionais e não funcionais",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q19",
    "id_pai": "ESP-PROC-0019",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Entre os requisitos a seguir, aquele classificado como **funcional** é:",
  "imagem": null,
  "alternativas": {
    "A": "O sistema deve ser desenvolvido em C#, segundo o processo padrão da empresa.",
    "B": "O sistema deve permitir que o cliente emita a segunda via de um boleto vencido.",
    "C": "O sistema deve tratar os dados pessoais conforme a LGPD.",
    "D": "O sistema deve estar disponível 99,9% do tempo no horário comercial.",
    "E": "A geração do extrato deve ocorrer em até 3 segundos em 95% das solicitações."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Emitir segunda via de boleto é um serviço do sistema (funcional). Os demais são restrições de desempenho, desenvolvimento, legislação e disponibilidade.\n\n- **A** (errada): requisito não funcional organizacional (de desenvolvimento).\n- **B** (correta): descreve um serviço.\n- **C** (errada): requisito não funcional externo (legal).\n- **D** (errada): requisito não funcional de produto (confiabilidade/disponibilidade).\n- **E** (errada): requisito não funcional de produto (desempenho).\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "requisitos-funcionais",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Técnicas de elicitação",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q64",
    "id_pai": "ESP-PROC-0005",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Uma cooperativa de crédito precisa levantar a opinião de cerca de 2.000 associados, espalhados por dezenas de municípios, sobre funcionalidades desejadas no novo aplicativo, com baixo custo e resultados que possam ser tabulados. A técnica de elicitação mais adequada é",
  "imagem": null,
  "alternativas": {
    "A": "a etnografia.",
    "B": "o JAD.",
    "C": "a entrevista aberta.",
    "D": "o questionário.",
    "E": "a prototipação evolutiva."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Questionários alcançam muitos stakeholders dispersos geograficamente, a baixo custo, e geram dados quantitativos.\n\n- **A** (errada): exige observar o trabalho no local, inviável para 2.000 pessoas dispersas.\n- **B** (errada): reúne poucos representantes em workshops presenciais facilitados.\n- **C** (errada): é individual e sem roteiro; não escala para milhares de pessoas.\n- **D** (correta): é a técnica indicada para muitos stakeholders dispersos.\n- **E** (errada): serve para validar e refinar requisitos com usuários, não para pesquisa ampla de opinião.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "elicitacao",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q65",
    "id_pai": "ESP-PROC-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre a técnica JAD (Joint Application Design/Development), é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "baseia-se em questionários distribuídos a usuários dispersos, dispensando reuniões presenciais.",
    "B": "consiste na observação silenciosa do trabalho dos usuários em seu ambiente.",
    "C": "conta com um facilitador neutro e um escriba, que conduzem e documentam workshops em que usuários, gestores e desenvolvedores decidem em conjunto.",
    "D": "tem baixo custo, pois dispensa preparação e pode ser conduzida por qualquer participante.",
    "E": "é exclusiva de projetos que seguem o modelo em cascata."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O JAD é feito em workshops estruturados com facilitador neutro, escriba e patrocinador, reunindo usuários, gestores e desenvolvedores para tomar decisões em conjunto.\n\n- **A** (errada): descreve questionário, não JAD.\n- **B** (errada): descreve etnografia/observação.\n- **C** (correta): descreve os papéis e o objetivo do JAD.\n- **D** (errada): exige preparação e facilitador experiente; reunir todos é custoso.\n- **E** (errada): foi associada ao RAD e é usada em vários processos.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "elicitacao",
    "jad",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q66",
    "id_pai": "ESP-PROC-0007",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Durante a revisão do documento de requisitos de um sistema de crédito consignado, a equipe verificou se os requisitos podiam ser implementados com a tecnologia, o orçamento e o prazo disponíveis. Segundo Sommerville, essa verificação é a de",
  "imagem": null,
  "alternativas": {
    "A": "realismo.",
    "B": "validade.",
    "C": "consistência.",
    "D": "completude.",
    "E": "verificabilidade."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** As verificações de Sommerville são validade, consistência, completude, realismo e verificabilidade. Checar se é implementável com tecnologia, orçamento e prazo é a verificação de realismo.\n\n- **A** (correta): verifica se o requisito é exequível.\n- **B** (errada): verifica se o requisito reflete as necessidades reais dos usuários.\n- **C** (errada): verifica se há requisitos conflitantes ou contraditórios.\n- **D** (errada): verifica se todas as funções e restrições pretendidas foram incluídas.\n- **E** (errada): verifica se é possível escrever testes que demonstrem o atendimento.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "validacao",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Técnicas de elicitação",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q67",
    "id_pai": "ESP-PROC-0008",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Os atendentes de uma agência relatam em entrevistas que seguem rigorosamente o manual de abertura de contas. A equipe de requisitos, porém, suspeita de controles informais e atalhos que ninguém descreve. A técnica mais indicada para revelar como o trabalho é realmente feito é",
  "imagem": null,
  "alternativas": {
    "A": "a entrevista fechada.",
    "B": "a etnografia.",
    "C": "o questionário.",
    "D": "a análise de documentos.",
    "E": "o brainstorming."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** A etnografia (observação no ambiente de trabalho) revela requisitos implícitos e como o trabalho realmente ocorre, e não como as pessoas dizem que ocorre. Sommerville recomenda combiná-la com prototipação.\n\n- **A** (errada): repetiria o problema: os atendentes descreveriam o manual, não a prática.\n- **B** (correta): revela práticas reais e requisitos tácitos.\n- **C** (errada): também depende do que as pessoas declaram.\n- **D** (errada): o manual descreve o processo prescrito, não o real.\n- **E** (errada): gera ideias novas, mas não observa o trabalho existente.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "elicitacao",
    "etnografia",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Cenários",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q68",
    "id_pai": "ESP-PROC-0009",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma técnica de elicitação descreve exemplos de sessões de interação contendo: a situação no início, o fluxo normal de eventos, o que pode dar errado e como tratar, atividades concorrentes e o estado do sistema ao final. Trata-se de",
  "imagem": null,
  "alternativas": {
    "A": "matriz de rastreabilidade.",
    "B": "grupo focal.",
    "C": "análise de pontos de função.",
    "D": "modelo de Kano.",
    "E": "cenários."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Essa é a estrutura de cenários segundo Sommerville: as pessoas entendem mais facilmente exemplos concretos de interação do que descrições abstratas.\n\n- **A** (errada): relaciona requisitos com origem e artefatos; não descreve interações.\n- **B** (errada): é discussão moderada com um grupo de usuários.\n- **C** (errada): é técnica de medição de tamanho, não de elicitação.\n- **D** (errada): classifica requisitos pelo efeito na satisfação do cliente.\n- **E** (correta): a lista de elementos é a dos cenários.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "elicitacao",
    "cenarios",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Rastreabilidade de requisitos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q69",
    "id_pai": "ESP-PROC-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma auditoria interna encontrou, no sistema de cobrança, um trecho de código que aplica desconto automático a clientes de determinado segmento e perguntou quem solicitou essa regra e por quê. Para responder, a equipe precisa da rastreabilidade",
  "imagem": null,
  "alternativas": {
    "A": "para frente (forward), do requisito aos casos de teste.",
    "B": "horizontal, entre versões do mesmo caso de teste.",
    "C": "para trás (backward), do código ao requisito e à sua origem.",
    "D": "de desempenho, entre o tempo de resposta e a carga do servidor.",
    "E": "pós-requisitos, do requisito para os módulos de projeto."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** A rastreabilidade para trás (backward) vai do artefato (código, teste) ao requisito e deste à sua origem (stakeholder, norma). Ajuda a evitar funcionalidades não solicitadas (gold plating).\n\n- **A** (errada): responde se o requisito foi implementado e testado, não quem o pediu.\n- **B** (errada): relaciona artefatos do mesmo nível.\n- **C** (correta): responde \"por que este código existe?\".\n- **D** (errada): não é tipo de rastreabilidade.\n- **E** (errada): parte do requisito em direção aos artefatos, o sentido oposto ao necessário.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "rastreabilidade",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q69",
    "id_pai": "ESP-PROC-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o trecho da matriz de rastreabilidade de um sistema de cartões.\n\n| Requisito | Origem | Componente | Caso de teste |\n|---|---|---|---|\n| RF10 – Bloquear cartão por solicitação do cliente | Área de Cartões | BloqueioService | CT-031 |\n| RF11 – Avisar compra internacional por notificação | Prevenção a fraudes | NotificacaoService | — |\n| RNF03 – Autorização em até 1 s (p95) | SLA da bandeira | AutorizadorAPI | CT-PERF-07 |\n| — | — | CashbackService | CT-044 |\n\nA partir da matriz, é correto concluir que",
  "imagem": null,
  "alternativas": {
    "A": "todos os requisitos estão implementados e testados, e todo componente atende a algum requisito.",
    "B": "RNF03 não pode constar da matriz, pois requisitos não funcionais não são rastreáveis.",
    "C": "a matriz serve apenas para estimar custos, sem relação com análise de impacto.",
    "D": "RF11 não tem cobertura de teste e o CashbackService não se liga a nenhum requisito, o que pode indicar funcionalidade não solicitada.",
    "E": "RF10 deve ser removido, porque sua origem é uma área de negócio, e não um normativo."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** RF11 não tem caso de teste (lacuna de cobertura para frente). CashbackService e CT-044 não estão ligados a nenhum requisito: possível funcionalidade não solicitada, que a rastreabilidade para trás deve investigar.\n\n- **A** (errada): há um requisito sem teste e um componente sem requisito.\n- **B** (errada): RNFs também são rastreados (aqui, a um teste de desempenho).\n- **C** (errada): seus usos incluem análise de impacto, cobertura e auditoria.\n- **D** (correta): aponta as duas lacunas da matriz.\n- **E** (errada): a origem pode ser stakeholder, área de negócio ou norma.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "rastreabilidade",
    "matriz",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Engenharia de requisitos (Pressman)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q76",
    "id_pai": "ESP-PROC-0013",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo Pressman, a engenharia de requisitos compreende tarefas como concepção, levantamento, elaboração, negociação, especificação, validação e gestão. A tarefa em que se conciliam pedidos conflitantes dos stakeholders, priorizando requisitos e avaliando custos e riscos em busca de uma solução \"ganha-ganha\", é a",
  "imagem": null,
  "alternativas": {
    "A": "negociação.",
    "B": "concepção.",
    "C": "elaboração.",
    "D": "especificação.",
    "E": "validação."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Na negociação, conflitos entre o que se pede e o que é possível com os recursos são conciliados por priorização e avaliação de custos e riscos.\n\n- **A** (correta): é a tarefa descrita.\n- **B** (errada): estabelece o entendimento básico do problema e a comunicação inicial.\n- **C** (errada): refina a informação em um modelo de requisitos.\n- **D** (errada): registra os requisitos em documento, modelos ou protótipos.\n- **E** (errada): avalia a qualidade dos produtos de trabalho em busca de ambiguidades e erros.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "requisitos",
    "pressman",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
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
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q70",
    "id_pai": "ESP-PROC-0011",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre os tipos de protótipo usados na engenharia de requisitos, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o protótipo descartável é aproveitado como base do sistema final, evoluindo até a entrega.",
    "B": "protótipos de papel não servem para validar requisitos, pois não são executáveis.",
    "C": "o protótipo horizontal mostra muitas funcionalidades com pouca profundidade, e o vertical implementa poucas funcionalidades atravessando várias camadas.",
    "D": "a prototipação elimina o risco de os usuários criarem expectativas irreais sobre prazos.",
    "E": "o protótipo vertical é usado somente para avaliar a estética da interface."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O protótipo horizontal cobre muitas funções, mas com pouca profundidade (em geral, só a interface); o vertical implementa poucas funções em profundidade, atravessando várias camadas.\n\n- **A** (errada): isso é o protótipo evolutivo; o descartável é jogado fora após o uso.\n- **B** (errada): protótipos de baixa fidelidade são úteis e baratos para validar fluxos e telas.\n- **C** (correta): definições dos dois tipos.\n- **D** (errada): esse é justamente um risco típico da prototipação.\n- **E** (errada): o vertical vai em profundidade, inclusive nas camadas de negócio e dados.\n\nRevisar: Apostila 06 §14 – Prototipação e engenharia de usabilidade.",
  "tags": [
    "prototipacao",
    "requisitos",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML: diagrama de máquina de estados",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q59",
    "id_pai": "ESP-PROC-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um analista precisa modelar o ciclo de vida de uma proposta de crédito, que pode estar \"Em digitação\", \"Em análise\", \"Aprovada\", \"Recusada\" ou \"Contratada\", com as transições disparadas por eventos como \"enviar\", \"aprovar\" e \"assinar\", e condições de guarda. Segundo a UML 2.5, o diagrama mais adequado é o de",
  "imagem": null,
  "alternativas": {
    "A": "atividades.",
    "B": "implantação.",
    "C": "pacotes.",
    "D": "máquina de estados.",
    "E": "objetos."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O diagrama de máquina de estados mostra os estados de um objeto e as transições no formato evento [guarda] / ação.\n\n- **A** (errada): modela fluxos de ações e decisões de um processo, não o ciclo de estados de um objeto.\n- **B** (errada): mostra nós físicos e artefatos implantados.\n- **C** (errada): organiza elementos do modelo em pacotes.\n- **D** (correta): modela estados e transições de um objeto.\n- **E** (errada): mostra instâncias e ligações em um instante, sem transições.\n\nRevisar: Apostila 06 §15 – UML 2.5.",
  "tags": [
    "uml",
    "maquina-de-estados",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML: diagramas de interação",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q59",
    "id_pai": "ESP-PROC-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para documentar a ordem temporal das mensagens trocadas entre o aplicativo, a API de autenticação e o serviço de Pix durante um pagamento, incluindo um fragmento combinado `alt` para o caso de saldo insuficiente, deve-se usar, na UML 2.5, o diagrama de",
  "imagem": null,
  "alternativas": {
    "A": "casos de uso.",
    "B": "componentes.",
    "C": "máquina de estados.",
    "D": "classes.",
    "E": "sequência."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O diagrama de sequência enfatiza a ordem temporal das mensagens entre participantes (linhas de vida) e usa fragmentos combinados como alt, opt e loop.\n\n- **A** (errada): mostra atores e funcionalidades, sem a ordem das mensagens.\n- **B** (errada): é estrutural; mostra componentes e interfaces.\n- **C** (errada): mostra estados de um único objeto.\n- **D** (errada): é estrutural; mostra classes, atributos e relacionamentos.\n- **E** (correta): é o diagrama de interação centrado na ordem temporal das mensagens.\n\nRevisar: Apostila 06 §15 – UML 2.5.",
  "tags": [
    "uml",
    "sequencia",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML 2.5: classificação dos diagramas",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q72",
    "id_pai": "ESP-PROC-0012",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na UML 2.5, apresenta apenas diagramas **comportamentais** a alternativa:",
  "imagem": null,
  "alternativas": {
    "A": "classes, sequência e atividades.",
    "B": "casos de uso, atividades e comunicação.",
    "C": "componentes, implantação e pacotes.",
    "D": "objetos, máquina de estados e tempo.",
    "E": "estrutura composta, visão geral de interação e casos de uso."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Comportamentais: casos de uso, atividades, máquina de estados e os de interação (sequência, comunicação, visão geral de interação e tempo). Estruturais: classes, objetos, componentes, implantação, pacotes, estrutura composta e perfil.\n\n- **A** (errada): classes é estrutural.\n- **B** (correta): os três são comportamentais.\n- **C** (errada): os três são estruturais.\n- **D** (errada): objetos é estrutural.\n- **E** (errada): estrutura composta é estrutural.\n\nRevisar: Apostila 06 §15 – UML 2.5.",
  "tags": [
    "uml",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML: agregação",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q15",
    "id_pai": "ESP-PROC-0016",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Em um diagrama de classes, um `Funcionario` pertence a um `Departamento`, mas continua existindo se o departamento for extinto, podendo ser transferido para outro. Essa relação todo-parte é representada por",
  "imagem": null,
  "alternativas": {
    "A": "agregação, com losango vazio do lado de `Departamento`.",
    "B": "composição, com losango preenchido do lado de `Departamento`.",
    "C": "agregação, com losango vazio do lado de `Funcionario`.",
    "D": "generalização, com triângulo vazio apontando para `Departamento`.",
    "E": "dependência, com seta tracejada para `Funcionario`."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Na agregação a parte existe independentemente do todo: losango vazio no lado do todo. Na composição a parte não sobrevive ao todo: losango preenchido.\n\n- **A** (correta): a parte é independente do todo.\n- **B** (errada): a composição exige que a parte não exista sem o todo.\n- **C** (errada): o losango fica no lado do todo (Departamento).\n- **D** (errada): generalização é herança, não relação todo-parte.\n- **E** (errada): dependência indica uso temporário, não todo-parte.\n\nRevisar: Apostila 06 §15 – UML 2.5.",
  "tags": [
    "uml",
    "diagrama-de-classes",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML: realização",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q15",
    "id_pai": "ESP-PROC-0016",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No diagrama de classes de um sistema bancário, as classes `ContaCorrente` e `Aplicacao` implementam a interface `Tributavel`, que declara o método `calcularIR()`. Essa relação é representada por",
  "imagem": null,
  "alternativas": {
    "A": "generalização: linha contínua com triângulo vazio apontando para `Tributavel`.",
    "B": "composição: losango preenchido do lado de `Tributavel`.",
    "C": "associação: linha contínua simples entre as classes e a interface.",
    "D": "realização: linha tracejada com triângulo vazio apontando para `Tributavel`.",
    "E": "realização: linha tracejada com triângulo vazio apontando para `ContaCorrente` e `Aplicacao`."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** A realização liga um classificador que implementa um contrato (interface) à interface: linha tracejada com triângulo vazio apontando para a interface.\n\n- **A** (errada): a linha contínua indica herança entre classes, não implementação de interface.\n- **B** (errada): não há relação todo-parte.\n- **C** (errada): associação indica ligação estrutural entre instâncias, não contrato.\n- **D** (correta): notação da realização de interface.\n- **E** (errada): o triângulo aponta para a interface realizada.\n\nRevisar: Apostila 06 §15 – UML 2.5.",
  "tags": [
    "uml",
    "diagrama-de-classes",
    "interface",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V028",
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
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q16",
    "id_pai": "ESP-PROC-0017",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No diagrama de casos de uso de um caixa eletrônico, \"Sacar dinheiro\" sempre executa \"Validar senha\" e, apenas se o cliente pedir, executa \"Imprimir saldo\". Quanto à direção das setas tracejadas, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "as duas setas partem de \"Sacar dinheiro\", uma com «include» e outra com «extend».",
    "B": "a seta «include» vai de \"Sacar dinheiro\" para \"Validar senha\", e a seta «extend» vai de \"Imprimir saldo\" para \"Sacar dinheiro\".",
    "C": "a seta «extend» vai de \"Sacar dinheiro\" para \"Validar senha\", pois a validação é condicional.",
    "D": "a seta «include» vai de \"Validar senha\" para \"Sacar dinheiro\".",
    "E": "as duas setas apontam para \"Sacar dinheiro\", por ser o caso de uso principal."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** «include»: o caso base inclui o comportamento obrigatório, e a seta vai do base para o incluído. «extend»: o caso extensor acrescenta comportamento condicional ao base, e a seta vai do extensor para o base.\n\n- **A** (errada): no «extend» a seta parte do caso extensor.\n- **B** (correta): direções corretas dos dois relacionamentos.\n- **C** (errada): a validação é sempre executada; é «include».\n- **D** (errada): no «include» a seta vai do caso base para o incluído.\n- **E** (errada): a seta do «include» aponta para o caso incluído.\n\nRevisar: Apostila 06 §15 – UML 2.5.",
  "tags": [
    "uml",
    "casos-de-uso",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V029",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "UML: generalização de atores",
  "ref_apostila": {
    "modulo": "06",
    "secao": "15",
    "titulo": "UML 2.5",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#15. UML 2.5]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q16",
    "id_pai": "ESP-PROC-0017",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No sistema de uma agência, o ator `Gerente` pode fazer tudo o que o ator `Atendente` faz e, além disso, aprovar limites de crédito. No diagrama de casos de uso, o recurso adequado para representar essa situação é",
  "imagem": null,
  "alternativas": {
    "A": "um relacionamento «include» entre os dois atores.",
    "B": "um relacionamento «extend» de `Atendente` para `Gerente`.",
    "C": "uma generalização de `Gerente` para `Atendente`, com triângulo vazio apontando para `Atendente`.",
    "D": "uma generalização de `Atendente` para `Gerente`.",
    "E": "uma composição entre `Gerente` e `Atendente`."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** A generalização entre atores indica que o ator especializado herda as associações do ator geral: seta com triângulo vazio de Gerente para Atendente.\n\n- **A** (errada): «include» liga casos de uso, não atores.\n- **B** (errada): «extend» liga casos de uso, não atores.\n- **C** (correta): Gerente herda os casos de uso de Atendente.\n- **D** (errada): inverte o sentido: quem herda é o Gerente.\n- **E** (errada): composição não se aplica a atores em diagrama de casos de uso.\n\nRevisar: Apostila 06 §15 – UML 2.5.",
  "tags": [
    "uml",
    "casos-de-uso",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V030",
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
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q17",
    "id_pai": "ESP-PROC-0018",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um campo aceita o número de parcelas de um empréstimo, inteiro, de 6 a 48, inclusive. Aplicando a análise de valor limite com **três valores** por fronteira, o conjunto de valores de teste é",
  "imagem": null,
  "alternativas": {
    "A": "5, 6, 48 e 49.",
    "B": "6, 27 e 48.",
    "C": "6, 7, 47 e 48.",
    "D": "0, 6, 48 e 100.",
    "E": "5, 6, 7, 47, 48 e 49."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Com três valores, testa-se o limite e os dois vizinhos de cada fronteira: 5, 6, 7 e 47, 48, 49.\n\n- **A** (errada): é a versão com dois valores por fronteira.\n- **B** (errada): mistura limites com um representante central (partição de equivalência).\n- **C** (errada): testa só valores válidos, sem os inválidos imediatamente fora do intervalo.\n- **D** (errada): usa valores distantes das fronteiras, que não exercitam erros de < e <=.\n- **E** (correta): limite e vizinhos de cada lado.\n\nRevisar: Apostila 06 §16 – Testes de software.",
  "tags": [
    "testes",
    "valor-limite",
    "caixa-preta",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V031",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Testes: partição de equivalência",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q17",
    "id_pai": "ESP-PROC-0018",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O campo \"idade\" de um cadastro aceita inteiros de 18 a 70. Foram identificadas as classes: válida (18 a 70); inválida abaixo do limite (< 18); inválida acima do limite (> 70); e inválida não numérica. Seguindo a regra de que cada classe inválida deve ser testada isoladamente, o número mínimo de casos de teste é",
  "imagem": null,
  "alternativas": {
    "A": "4.",
    "B": "2.",
    "C": "3.",
    "D": "6.",
    "E": "53."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Um caso para a classe válida e um para cada classe inválida, isoladamente: 1 + 3 = 4.\n\n- **A** (correta): 1 válido + 3 inválidos isolados.\n- **B** (errada): testa um válido e junta todas as inválidas em um só caso, o que mascara defeitos.\n- **C** (errada): esquece a classe inválida não numérica ou a válida.\n- **D** (errada): aplica valor limite com dois valores (17, 18, 70, 71) mais dois representantes.\n- **E** (errada): testa todos os valores válidos, o que é teste exaustivo.\n\nRevisar: Apostila 06 §16 – Testes de software.",
  "tags": [
    "testes",
    "particao-de-equivalencia",
    "caixa-preta",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V032",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Testes: confirmação x regressão",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §16 – Q6",
    "id_pai": "ESP-PROC-0072",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Após a correção de um defeito no cálculo de juros do cheque especial, o testador executou novamente o mesmo caso de teste que havia falhado, para conferir se o defeito foi eliminado. Esse teste é denominado",
  "imagem": null,
  "alternativas": {
    "A": "teste de regressão.",
    "B": "teste de fumaça (smoke test).",
    "C": "teste de mutação.",
    "D": "teste exploratório.",
    "E": "teste de confirmação (reteste)."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Teste de confirmação (reteste) reexecuta o teste que falhou para confirmar a correção. Regressão reexecuta testes já aprovados para garantir que a mudança não quebrou outras partes.\n\n- **A** (errada): regressão reexecuta testes que já passavam, procurando efeitos colaterais.\n- **B** (errada): verifica rapidamente as funções críticas de um novo build.\n- **C** (errada): introduz alterações no código para medir a eficácia da suíte.\n- **D** (errada): projeta e executa testes ao mesmo tempo, sem roteiro prévio.\n- **E** (correta): verifica aquele defeito específico.\n\nRevisar: Apostila 06 §16 – Testes de software.",
  "tags": [
    "testes",
    "reteste",
    "regressao",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V033",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Testes não funcionais",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §16 – Q8",
    "id_pai": "ESP-PROC-0073",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para verificar se o serviço de extratos degrada ao longo do tempo, a equipe manteve uma carga constante, próxima à de produção, durante 12 horas seguidas, monitorando o consumo de memória e o tempo de resposta. Esse é um teste de",
  "imagem": null,
  "alternativas": {
    "A": "estresse.",
    "B": "pico (spike).",
    "C": "volume.",
    "D": "resistência (endurance ou soak).",
    "E": "usabilidade."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O teste de resistência (endurance, soak) aplica carga sustentada por longo período para revelar vazamentos de memória e degradação.\n\n- **A** (errada): vai além dos limites especificados para achar o ponto de ruptura.\n- **B** (errada): aplica aumentos súbitos de carga.\n- **C** (errada): usa grandes volumes de dados, não carga prolongada.\n- **D** (correta): carga sustentada por muito tempo.\n- **E** (errada): avalia a facilidade de uso com usuários reais.\n\nRevisar: Apostila 06 §16 – Testes de software.",
  "tags": [
    "testes",
    "desempenho",
    "nao-funcional",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V034",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Testes não funcionais",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §16 – Q8",
    "id_pai": "ESP-PROC-0073",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre os testes de desempenho, carga e estresse, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o teste de carga submete o sistema a condições muito acima do esperado, até que ele falhe.",
    "B": "o teste de estresse é aplicado com a carga normal de produção, por curto período.",
    "C": "o teste de estresse leva o sistema além dos limites especificados para identificar o ponto de ruptura e verificar se a falha e a recuperação ocorrem de modo adequado.",
    "D": "testes de desempenho são funcionais, pois verificam o que o sistema faz.",
    "E": "só é possível testar desempenho depois da implantação em produção."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O teste de carga usa a carga esperada (normal e de pico previsto). O de estresse ultrapassa os limites para descobrir o ponto de ruptura e verificar se o sistema falha e se recupera adequadamente.\n\n- **A** (errada): isso é estresse; carga usa o volume esperado.\n- **B** (errada): estresse ultrapassa os limites.\n- **C** (correta): definição de estresse.\n- **D** (errada): são não funcionais: verificam como o sistema se comporta.\n- **E** (errada): usam-se ambientes e ferramentas de teste (JMeter, k6, Gatling) antes da implantação.\n\nRevisar: Apostila 06 §16 – Testes de software.",
  "tags": [
    "testes",
    "desempenho",
    "estresse",
    "carga",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V035",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Tipos e níveis de teste",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §16 – Q5",
    "id_pai": "ESP-PROC-0071",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considerando os tipos de teste citados no edital, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o teste de aceitação é executado pelos desenvolvedores sobre cada método isolado.",
    "B": "o teste de integração verifica as interfaces e a comunicação entre componentes, enquanto o teste de sistema avalia o sistema completo frente aos requisitos funcionais e não funcionais.",
    "C": "o teste de segurança limita-se a verificar se o sistema exibe as telas corretas.",
    "D": "o teste de usabilidade dispensa usuários reais, bastando ferramentas automáticas.",
    "E": "testes unitários dependem de o sistema estar implantado em produção."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O teste de integração verifica interfaces e interações entre componentes; o de sistema avalia o sistema completo frente a requisitos funcionais e não funcionais; o de aceitação é conduzido por usuários para validar o atendimento ao negócio.\n\n- **A** (errada): isso descreve teste de unidade; aceitação é feita por usuários e clientes.\n- **B** (correta): descreve corretamente os dois níveis.\n- **C** (errada): teste de segurança busca vulnerabilidades (pentest, SAST, DAST, controle de acesso).\n- **D** (errada): usabilidade é avaliada com usuários reais (ou especialistas).\n- **E** (errada): testes unitários isolam a menor unidade testável e rodam no ambiente de desenvolvimento/CI.\n\nRevisar: Apostila 06 §16 – Testes de software.",
  "tags": [
    "testes",
    "niveis-de-teste",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V036",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Métricas: complexidade ciclomática",
  "ref_apostila": {
    "modulo": "06",
    "secao": "5",
    "titulo": "Métricas e estimativas de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#5. Métricas e estimativas de software]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §5 – Q5",
    "id_pai": "ESP-PROC-0045",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O grafo de fluxo de controle de um método, com um único componente conexo, tem 14 arestas e 11 nós. A complexidade ciclomática de McCabe é",
  "imagem": null,
  "alternativas": {
    "A": "5.",
    "B": "3.",
    "C": "4.",
    "D": "25.",
    "E": "27."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** V(G) = E − N + 2P = 14 − 11 + 2 · 1 = 5. Esse é também o número de caminhos independentes (caminho básico).\n\n- **A** (correta): 14 − 11 + 2.\n- **B** (errada): faz E − N, sem somar 2.\n- **C** (errada): soma 1 em vez de 2.\n- **D** (errada): soma arestas e nós.\n- **E** (errada): soma arestas, nós e 2.\n\nRevisar: Apostila 06 §5 – Métricas e estimativas de software.",
  "tags": [
    "metricas",
    "complexidade-ciclomatica",
    "calculo",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V037",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "ISO/IEC 25010 (revisão 2023)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §6 – Q1",
    "id_pai": "ESP-PROC-0047",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "No modelo de qualidade de produto da ISO/IEC 25010 revisado em 2023 (base da versão 25010:2024 citada no edital), com nove características, a subcaracterística **escalabilidade** pertence à característica",
  "imagem": null,
  "alternativas": {
    "A": "eficiência de desempenho.",
    "B": "flexibilidade.",
    "C": "capacidade de interação.",
    "D": "proteção (safety).",
    "E": "manutenibilidade."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Na revisão de 2023, portabilidade passou a se chamar flexibilidade, com as subcaracterísticas adaptabilidade, escalabilidade (nova), instalabilidade e substituibilidade.\n\n- **A** (errada): tem comportamento em relação ao tempo, utilização de recursos e capacidade.\n- **B** (correta): escalabilidade é subcaracterística nova de flexibilidade.\n- **C** (errada): substituiu a usabilidade; inclui engajamento, inclusividade e autodescritividade.\n- **D** (errada): trata de não causar danos a pessoas e ao ambiente.\n- **E** (errada): mantém modularidade, reusabilidade, analisabilidade, modificabilidade e testabilidade.\n\nRevisar: Apostila 06 §6 – Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V).",
  "tags": [
    "qualidade",
    "iso-25010",
    "2023",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V038",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Verificação e validação",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §6 – Q2",
    "id_pai": "ESP-PROC-0048",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre verificação e validação (V&V) de software, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "a verificação responde à pergunta \"estamos construindo o produto certo?\".",
    "B": "a validação confere a conformidade dos artefatos com a especificação da fase anterior.",
    "C": "a verificação só pode ser feita por meio da execução de testes.",
    "D": "inspeções e walkthroughs são técnicas estáticas de verificação que podem ser aplicadas a requisitos e modelos antes da existência do código.",
    "E": "na inspeção de Fagan, a reunião é conduzida pelo autor do artefato."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Verificação: \"estamos construindo o produto corretamente?\" (conformidade com a especificação). Validação: \"estamos construindo o produto certo?\" (necessidades reais). Revisões e inspeções são técnicas estáticas de verificação e podem ser aplicadas antes de existir código.\n\n- **A** (errada): essa é a pergunta da validação.\n- **B** (errada): isso é verificação.\n- **C** (errada): há verificação estática (revisões, inspeções, análise estática).\n- **D** (correta): afirmação correta.\n- **E** (errada): na inspeção quem conduz é o moderador; o autor conduz o walkthrough.\n\nRevisar: Apostila 06 §6 – Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V).",
  "tags": [
    "qualidade",
    "verificacao",
    "validacao",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V039",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "CMMI v2.0",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §6 – Q3",
    "id_pai": "ESP-PROC-0049",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em relação ao CMMI versão 2.0, citado no edital, é correto afirmar que ele",
  "imagem": null,
  "alternativas": {
    "A": "prescreve um processo detalhado, com papéis e artefatos obrigatórios, que deve ser seguido passo a passo.",
    "B": "tem sete níveis de maturidade, identificados pelas letras A a G.",
    "C": "organiza o conteúdo em áreas de prática, agrupadas em capacidades e categorias, e traz orientações para uso com métodos ágeis.",
    "D": "é mantido pela SOFTEX, com apoio do governo federal brasileiro.",
    "E": "eliminou os níveis de maturidade, mantendo apenas níveis de capacidade por processo."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** A v2.0 (2018) reorganizou o modelo em áreas de prática (practice areas), agrupadas em capacidades e em quatro categorias (Doing, Managing, Enabling, Improving), com práticas em níveis de evolução, e incluiu orientações para uso com métodos ágeis. Continua dizendo o que fazer, não como.\n\n- **A** (errada): o CMMI diz o quê, não como; não é processo nem metodologia.\n- **B** (errada): essa é a escala do MPS.BR.\n- **C** (correta): descreve a estrutura da v2.0.\n- **D** (errada): o CMMI é do CMMI Institute (ISACA); a SOFTEX mantém o MPS.BR.\n- **E** (errada): a v2.0 mantém níveis de maturidade.\n\nRevisar: Apostila 06 §6 – Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V).",
  "tags": [
    "qualidade",
    "cmmi",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V040",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "MPS.BR",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §6 – Q4",
    "id_pai": "ESP-PROC-0050",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o programa MPS.BR e o modelo MR-MPS-SW, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o nível A é o inicial e corresponde aproximadamente ao nível 1 do CMMI.",
    "B": "foi criado pelo SEI da Carnegie Mellon como alternativa ao CMMI para grandes empresas.",
    "C": "foi desenhado para ser incompatível com o CMMI e com as normas ISO.",
    "D": "seu método de avaliação é o SCAMPI, o mesmo do CMMI.",
    "E": "seus sete níveis vão de G, o inicial, a A, o mais alto, permitindo uma implantação mais gradual do que a dos cinco níveis do CMMI."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O MR-MPS-SW tem sete níveis, de G (Parcialmente Gerenciado, o inicial) a A (Em Otimização). Os níveis a mais em relação ao CMMI permitem implantação mais gradual, adequada a micro, pequenas e médias empresas.\n\n- **A** (errada): A é o mais alto (≈ nível 5 do CMMI).\n- **B** (errada): foi criado pela SOFTEX, com foco em micro, pequenas e médias empresas.\n- **C** (errada): foi desenhado para ser compatível com ambos.\n- **D** (errada): o método de avaliação do MPS.BR é o MA-MPS.\n- **E** (correta): afirmação correta.\n\nRevisar: Apostila 06 §6 – Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V).",
  "tags": [
    "qualidade",
    "mps-br",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V041",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "MR-MPS-SW 2023",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §6 (MR-MPS-SW 2021/2023)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "No MR-MPS-SW em sua versão 2021, mantida com ajustes no guia de 2023 citado no edital, o nível G (Parcialmente Gerenciado) passou a conter os processos",
  "imagem": null,
  "alternativas": {
    "A": "Gerência de Projetos e Engenharia de Requisitos.",
    "B": "Gerência de Projetos e Gerência de Requisitos, sem alteração em relação ao guia de 2012.",
    "C": "Gerência de Configuração, Garantia da Qualidade e Medição.",
    "D": "Verificação, Validação e Integração do Produto.",
    "E": "Gerência de Riscos e Gerência de Decisões."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Na reorganização de 2021, o nível G passou a ter Gerência de Projetos e Engenharia de Requisitos, processo que unificou a gerência e o desenvolvimento de requisitos. No guia clássico (2012/2016), o nível G tinha Gerência de Projetos e Gerência de Requisitos.\n\n- **A** (correta): composição do nível G na versão 2021/2023.\n- **B** (errada): esta era a composição do guia clássico; em 2021 a gerência de requisitos foi unificada na Engenharia de Requisitos.\n- **C** (errada): eram processos do nível F no guia clássico.\n- **D** (errada): eram processos do nível D no guia clássico.\n- **E** (errada): eram processos do nível C no guia clássico.\n\nRevisar: Apostila 06 §6 – Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V).",
  "tags": [
    "qualidade",
    "mps-br",
    "2023"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5: no MR-MPS-SW 2021 (mantido no guia 2023) o nível G tem Gerência de Projetos e Engenharia de Requisitos (fusão de GRE e DRE), como na apostila 06 §6.5. Revalidar se sair nova versão do guia SOFTEX."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V042",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "ISO/IEC/IEEE 12207:2021",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §6 (ISO/IEC/IEEE 12207)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "A ABNT NBR ISO/IEC/IEEE 12207:2021 organiza os processos do ciclo de vida do software em quatro grupos: processos de acordo, processos organizacionais de habilitação de projeto, processos de gestão técnica e processos técnicos. Pertencem ao grupo de processos de **acordo** os processos de",
  "imagem": null,
  "alternativas": {
    "A": "gestão de configuração e gestão de riscos.",
    "B": "gestão de portfólio e gestão de recursos humanos.",
    "C": "aquisição e fornecimento.",
    "D": "implementação e verificação.",
    "E": "planejamento de projeto e garantia da qualidade."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Os processos de acordo são Aquisição e Fornecimento, que regem a relação entre adquirente e fornecedor. Gestão de configuração e de riscos são de gestão técnica; gestão de portfólio e de recursos humanos são organizacionais; implementação e verificação são técnicos.\n\n- **A** (errada): pertencem ao grupo de gestão técnica.\n- **B** (errada): pertencem ao grupo organizacional de habilitação de projeto.\n- **C** (correta): são os dois processos do grupo de acordo.\n- **D** (errada): pertencem ao grupo de processos técnicos.\n- **E** (errada): pertencem ao grupo de gestão técnica.\n\nRevisar: Apostila 06 §6 – Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V).",
  "tags": [
    "12207",
    "ciclo-de-vida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5: os quatro grupos de processos da ISO/IEC/IEEE 12207:2017 (ABNT 2021) e o grupo de acordo (aquisição e fornecimento) estão corretos."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V043",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Gestão da configuração de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §6 (ISO/IEC/IEEE 12207 e gestão da configuração)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um projeto de software, a equipe identifica os itens de configuração (código, scripts de banco, documentos de requisitos), estabelece linhas de base (baselines), submete toda alteração a um controle formal de mudanças, registra o estado de cada item e realiza auditorias para confirmar que a versão liberada corresponde ao que foi aprovado. Essas atividades caracterizam a",
  "imagem": null,
  "alternativas": {
    "A": "garantia da qualidade, cujo foco é auditar se os processos de teste foram executados.",
    "B": "gestão da configuração de software.",
    "C": "gestão de portfólio, que seleciona e prioriza os projetos da organização.",
    "D": "integração contínua, que dispensa linhas de base por versionar tudo automaticamente.",
    "E": "engenharia de requisitos, que se limita à elicitação com os usuários."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Gestão da configuração: identificação de itens de configuração, baselines, controle de mudanças, registro (relato) de status e auditoria de configuração. Na 12207 é um processo de gestão técnica; no CMMI v1.3, a área CM é de nível 2.\n\n- **A** (errada): garantia da qualidade audita a aderência a processos e padrões, não controla versões e baselines.\n- **B** (correta): as atividades listadas são as da gestão da configuração.\n- **C** (errada): portfólio trata de investimentos, não de itens de configuração.\n- **D** (errada): a integração contínua usa o controle de versão, mas não substitui baselines e controle de mudanças.\n- **E** (errada): requisitos são apenas um dos itens sob controle de configuração.\n\nRevisar: Apostila 06 §6 – Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V).",
  "tags": [
    "gestao-de-configuracao",
    "12207"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V044",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Revisão de código (code review)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "6",
    "titulo": "Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#6. Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §6 (revisões técnicas e code review)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre boas práticas de revisão de código (code review) em pull requests, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "a revisão de código substitui os testes automatizados, pois é feita por um colega experiente.",
    "B": "o próprio autor deve aprovar seu pull request, pois conhece melhor a mudança.",
    "C": "a revisão só deve ocorrer após a implantação em produção, para avaliar o comportamento real.",
    "D": "o objetivo da revisão é exclusivamente encontrar defeitos, sem relação com a disseminação de conhecimento.",
    "E": "convém submeter mudanças pequenas e focadas e automatizar verificações de estilo, para que o revisor se concentre em lógica, segurança, testes e legibilidade."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Revisões são técnicas estáticas de verificação. Mudanças pequenas e focadas são revisadas com mais eficácia; questões de estilo devem ser automatizadas (linters, formatadores) para que a revisão humana se concentre em lógica, segurança, testes e legibilidade.\n\n- **A** (errada): revisão e testes são complementares.\n- **B** (errada): a revisão pressupõe outra pessoa.\n- **C** (errada): a revisão ocorre antes do merge.\n- **D** (errada): revisões também disseminam conhecimento e padrões na equipe.\n- **E** (correta): boa prática de code review.\n\nRevisar: Apostila 06 §6 – Qualidade de software (ISO/IEC 25010, CMMI, MPS.BR, V&V).",
  "tags": [
    "code-review",
    "pull-request",
    "qualidade"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V045",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §17 – Q3",
    "id_pai": "ESP-PROC-0076",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre a adoção de plataformas low-code e no-code em uma instituição financeira, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "no-code permite inserir scripts personalizados quando os componentes visuais não bastam.",
    "B": "low-code elimina a necessidade de testes, pois os componentes já vêm homologados.",
    "C": "sistemas do núcleo transacional são os mais indicados para low-code, pela necessidade de escala.",
    "D": "um centro de excelência pode definir padrões, ambientes separados e regras de acesso a dados para apoiar os desenvolvedores cidadãos.",
    "E": "o aprisionamento ao fornecedor (vendor lock-in) não ocorre, pois o código gerado é sempre portável."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Em bancos, low-code exige governança: ambientes separados, catálogo de aplicações, regras de acesso a dados, revisão da TI e, com frequência, um centro de excelência (CoE). Low-code permite estender com código; no-code não.\n\n- **A** (errada): permitir código é característica do low-code.\n- **B** (errada): testes continuam necessários.\n- **C** (errada): escalabilidade e desempenho limitados tornam o núcleo transacional um candidato ruim.\n- **D** (correta): é o modelo de governança descrito.\n- **E** (errada): lock-in é o risco clássico dessas plataformas.\n\nRevisar: Apostila 06 §17 – Desenvolvimento low-code e no-code.",
  "tags": [
    "low-code",
    "no-code",
    "governanca",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V046",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Versionamento semântico",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §18 – Q2",
    "id_pai": "ESP-PROC-0077",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Uma biblioteca interna de integração está na versão 2.7.3. A nova entrega remove um método público e altera a assinatura de outro, quebrando a compatibilidade com quem usa a biblioteca. Segundo o versionamento semântico, a nova versão deve ser",
  "imagem": null,
  "alternativas": {
    "A": "3.0.0.",
    "B": "2.8.0.",
    "C": "2.7.4.",
    "D": "3.7.3.",
    "E": "2.8.3."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Mudança incompatível na API pública incrementa MAJOR e zera MINOR e PATCH: 3.0.0.\n\n- **A** (correta): MAJOR + 1, demais zerados.\n- **B** (errada): seria uma funcionalidade compatível.\n- **C** (errada): seria uma correção compatível.\n- **D** (errada): não zera MINOR e PATCH.\n- **E** (errada): incrementa MINOR sem zerar PATCH; além disso, a mudança é incompatível.\n\nRevisar: Apostila 06 §18 – Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento.",
  "tags": [
    "versionamento-semantico",
    "semver",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V047",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Versionamento semântico",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §18 – Q2",
    "id_pai": "ESP-PROC-0077",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo a especificação do Versionamento Semântico 2.0.0, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "os metadados de build, como em 1.0.0+20261113, tornam essa versão mais recente que 1.0.0.",
    "B": "na fase 0.y.z, a API pública é considerada estável e não pode ter mudanças incompatíveis.",
    "C": "ao incrementar a versão MINOR, a versão MAJOR também deve ser incrementada.",
    "D": "a versão 1.0.0-rc.1 tem precedência menor que a versão 1.0.0.",
    "E": "a versão 1.10.0 é anterior à 1.9.0, pois a comparação é feita caractere a caractere."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Uma versão de pré-lançamento (com hífen) tem precedência menor que a versão normal associada: 1.0.0-rc.1 < 1.0.0. Metadados de build (com +) não afetam a precedência; versões 0.y.z indicam desenvolvimento inicial.\n\n- **A** (errada): metadados de build são ignorados na precedência.\n- **B** (errada): 0.y.z é desenvolvimento inicial; tudo pode mudar.\n- **C** (errada): MINOR sobe sozinho e zera apenas o PATCH.\n- **D** (correta): pré-lançamento vem antes da versão normal.\n- **E** (errada): a comparação é numérica: 10 > 9.\n\nRevisar: Apostila 06 §18 – Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento.",
  "tags": [
    "versionamento-semantico",
    "semver",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V048",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "BPMN: gateways",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §13 (BPMN, 13.10)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No processo de abertura de conta modelado em BPMN 2.0, após \"Receber documentos\", as tarefas \"Consultar bureau de crédito\" e \"Verificar lista de PEP\" devem ser executadas **ambas**, em qualquer ordem, e o processo só segue para \"Emitir parecer\" quando as duas terminarem. Os gateways de divisão e de junção adequados são do tipo",
  "imagem": null,
  "alternativas": {
    "A": "exclusivo (\"X\"), tanto na divisão quanto na junção.",
    "B": "inclusivo (\"O\") na divisão e exclusivo na junção.",
    "C": "baseado em eventos na divisão e paralelo na junção.",
    "D": "exclusivo na divisão e paralelo na junção.",
    "E": "paralelo (\"+\"), tanto na divisão quanto na junção."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O gateway paralelo (AND, \"+\") dispara todos os caminhos na divisão e, na junção, espera todos chegarem.\n\n- **A** (errada): o exclusivo segue um único caminho, conforme a condição.\n- **B** (errada): o inclusivo serve quando um ou mais caminhos podem ser seguidos conforme condições; aqui os dois são sempre executados.\n- **C** (errada): o baseado em eventos segue o caminho do primeiro evento que ocorrer.\n- **D** (errada): com divisão exclusiva só um ramo chega, e a junção paralela ficaria esperando para sempre.\n- **E** (correta): executa ambos os caminhos e sincroniza.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "bpmn",
    "modelagem-de-processos"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V049",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "BPMN: pools, lanes e fluxos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "13",
    "titulo": "Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#13. Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §13 (BPMN, 13.10)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre os elementos da notação BPMN 2.0, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o fluxo de sequência pode ligar atividades de pools diferentes, desde que haja um gateway entre elas.",
    "B": "a comunicação entre participantes representados em pools diferentes é feita por fluxo de mensagem, e não por fluxo de sequência.",
    "C": "lanes representam organizações distintas, e pools representam papéis dentro de uma mesma organização.",
    "D": "o evento de fim é representado por círculo de borda dupla.",
    "E": "objetos de dados e anotações alteram a ordem de execução das atividades."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O fluxo de sequência (linha contínua) fica dentro de um pool; a comunicação entre participantes diferentes (pools) usa fluxo de mensagem (linha tracejada com círculo na origem).\n\n- **A** (errada): fluxo de sequência nunca cruza a fronteira de pools.\n- **B** (correta): o fluxo de sequência não cruza pools.\n- **C** (errada): é o contrário: pool é participante; lane subdivide o pool (papel, setor).\n- **D** (errada): borda dupla é evento intermediário; o de fim tem borda grossa.\n- **E** (errada): artefatos são informação complementar e não alteram o fluxo.\n\nRevisar: Apostila 06 §13 – Engenharia de requisitos (conceitos, processo, elicitação, rastreabilidade).",
  "tags": [
    "bpmn",
    "modelagem-de-processos"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V050",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Modelagem de dados semiestruturados (XML e JSON)",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §18 (18.7, dados semiestruturados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o documento JSON a seguir, recebido de um parceiro.\n\n```json\n{\n  \"cliente\": {\"cpf\": \"12345678909\", \"nome\": \"Ana\"},\n  \"contas\": [\n    {\"numero\": \"0001-2\", \"tipo\": \"corrente\", \"saldo\": 1500.75},\n    {\"numero\": \"0007-9\", \"tipo\": \"poupanca\"}\n  ]\n}\n```\n\nSobre a modelagem e a validação desse tipo de dado, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o documento é inválido, porque todos os objetos de um array JSON precisam ter exatamente os mesmos campos.",
    "B": "JSON é um dado não estruturado, como imagens e áudio, e por isso não pode ser validado.",
    "C": "o documento é semiestruturado, pois a estrutura é autodescritiva e pode variar entre elementos, e pode ser validado por um JSON Schema que declare, por exemplo, os campos obrigatórios de cada conta.",
    "D": "a validação de documentos JSON é feita por meio de XSD, a mesma linguagem de esquema do XML.",
    "E": "o valor 1500.75 deveria estar entre aspas, pois JSON não possui tipo numérico."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** JSON e XML são semiestruturados: a estrutura é autodescritiva e pode variar entre registros (a segunda conta não tem \"saldo\"). JSON é validado por JSON Schema; XML, por XSD (ou DTD).\n\n- **A** (errada): a sintaxe JSON não exige isso; só um schema poderia exigir.\n- **B** (errada): JSON é semiestruturado e pode ser validado por JSON Schema.\n- **C** (correta): descreve a natureza e a validação do JSON.\n- **D** (errada): XSD valida XML; para JSON usa-se JSON Schema.\n- **E** (errada): JSON tem tipo número; aspas o transformariam em string.\n\nRevisar: Apostila 06 §18 – Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento.",
  "tags": [
    "json",
    "xml",
    "dados-semiestruturados"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V051",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Dicionário de dados e documentação técnica",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §18 (18.7, dicionário de dados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Em um projeto de banco de dados, o dicionário de dados deve conter, para cada campo,",
  "imagem": null,
  "alternativas": {
    "A": "nome, tipo, tamanho, descrição, domínio de valores, obrigatoriedade, participação em chaves, origem e responsável.",
    "B": "apenas o nome e o tipo, já que as regras de negócio ficam exclusivamente no código-fonte.",
    "C": "os valores atuais de todos os registros, para consulta rápida.",
    "D": "as senhas de acesso dos usuários que podem alterá-lo.",
    "E": "somente o plano de execução das consultas que usam o campo."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** O dicionário de dados descreve cada tabela e campo: nome, tipo, tamanho, descrição, domínio de valores, obrigatoriedade, chaves, origem e responsável.\n\n- **A** (correta): conteúdo típico do dicionário.\n- **B** (errada): descrição, domínio e obrigatoriedade também são essenciais.\n- **C** (errada): dicionário descreve metadados, não os dados em si.\n- **D** (errada): credenciais não pertencem ao dicionário de dados.\n- **E** (errada): plano de execução é informação do otimizador, não do dicionário.\n\nRevisar: Apostila 06 §18 – Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento.",
  "tags": [
    "dicionario-de-dados",
    "documentacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V052",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Rastreabilidade e qualidade de dados",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §18 (18.7, governança e qualidade de dados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um relatório regulatório apresentou valores divergentes dos do sistema contábil. Para descobrir de qual sistema de origem veio cada campo e por quais transformações ele passou até chegar ao relatório, a área de dados deve consultar a",
  "imagem": null,
  "alternativas": {
    "A": "normalização das tabelas, até a terceira forma normal.",
    "B": "matriz RACI do projeto.",
    "C": "política de backup incremental.",
    "D": "chave primária de cada tabela do relatório.",
    "E": "linhagem (lineage) dos dados."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Linhagem (lineage) é a rastreabilidade do dado: de onde veio e por quais transformações passou.\n\n- **A** (errada): normalização trata de redundância e anomalias, não de origem dos dados.\n- **B** (errada): define papéis e responsabilidades em atividades.\n- **C** (errada): trata de cópias para recuperação.\n- **D** (errada): identifica linhas, mas não informa origem nem transformações.\n- **E** (correta): registra origem e transformações.\n\nRevisar: Apostila 06 §18 – Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento.",
  "tags": [
    "governanca-de-dados",
    "linhagem",
    "rastreabilidade"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V053",
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
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §19 – Q1",
    "id_pai": "ESP-PROC-0078",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Leia o trecho a seguir.\n\n> *Code review is not only about finding bugs. Reviewers should also check whether a change follows the team's conventions and whether it is covered by automated tests. However, large pull requests are hard to review: reviewers tend to become less effective after a few hundred lines of code. Therefore, developers are encouraged to submit small, focused changes. Actually, many teams enforce a size limit in their pipelines, and a change that exceeds it must be split before it can be merged.*\n\nSegundo o texto,",
  "imagem": null,
  "alternativas": {
    "A": "o único objetivo da revisão de código é encontrar defeitos.",
    "B": "mudanças cobertas por testes automatizados dispensam a revisão.",
    "C": "revisores tendem a perder eficácia em pull requests muito grandes, razão pela qual se recomendam mudanças pequenas e focadas.",
    "D": "as pipelines das equipes impedem qualquer mudança de mais de cem linhas.",
    "E": "mudanças que excedem o limite de tamanho são integradas automaticamente."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O texto afirma que pull requests grandes são difíceis de revisar, pois os revisores perdem eficácia após algumas centenas de linhas; por isso, recomenda mudanças pequenas e focadas.\n\n- **A** (errada): o texto diz que a revisão não serve apenas para isso (*not only about finding bugs*).\n- **B** (errada): o texto diz que o revisor deve verificar se há testes, não que eles dispensem a revisão.\n- **C** (correta): síntese do segundo e do terceiro períodos.\n- **D** (errada): o texto fala em limite de tamanho, sem fixar valor, e em \"alguns centos\" de linhas para a perda de eficácia.\n- **E** (errada): devem ser divididas antes do merge (*must be split before it can be merged*).\n\nRevisar: Apostila 06 §19 – Inglês técnico.",
  "tags": [
    "ingles",
    "code-review",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V054",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Inglês técnico: falsos cognatos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "19",
    "titulo": "Inglês técnico",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#19. Inglês técnico]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §19 – Q2",
    "id_pai": "ESP-PROC-0079",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Leia o trecho a seguir.\n\n> *Code review is not only about finding bugs. Reviewers should also check whether a change follows the team's conventions and whether it is covered by automated tests. However, large pull requests are hard to review: reviewers tend to become less effective after a few hundred lines of code. Therefore, developers are encouraged to submit small, focused changes. Actually, many teams enforce a size limit in their pipelines, and a change that exceeds it must be split before it can be merged.*\n\nNo texto, as palavras *Actually* e *enforce* podem ser traduzidas, sem alteração de sentido, respectivamente, por",
  "imagem": null,
  "alternativas": {
    "A": "\"Atualmente\" e \"reforçam\".",
    "B": "\"Atualmente\" e \"impõem\".",
    "C": "\"Na verdade\" e \"dispensam\".",
    "D": "\"Na verdade\" e \"impõem\".",
    "E": "\"Eventualmente\" e \"executam\"."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** *Actually* é falso cognato: significa \"na verdade\" (\"atualmente\" seria *currently*). *To enforce* significa impor, aplicar (uma regra).\n\n- **A** (errada): *actually* não é \"atualmente\" e *enforce* não é \"reforçar\" no contexto.\n- **B** (errada): *actually* é falso cognato de \"atualmente\".\n- **C** (errada): *enforce* é impor, o oposto de dispensar.\n- **D** (correta): sentidos corretos no contexto.\n- **E** (errada): nenhum dos dois sentidos corresponde.\n\nRevisar: Apostila 06 §19 – Inglês técnico.",
  "tags": [
    "ingles",
    "falsos-cognatos",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROC-V055",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Processo de desenvolvimento de software",
  "topico": "Inglês técnico: verbos modais em requisitos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "19",
    "titulo": "Inglês técnico",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#19. Inglês técnico]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §19 – Q3",
    "id_pai": "ESP-PROC-0080",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere os requisitos de uma especificação em inglês:\n\nI. *The API MUST reject requests without a valid access token.*\nII. *The API SHOULD return error messages in Portuguese.*\nIII. *The client MAY cache the list of branches for up to 24 hours.*\n\nSegundo a convenção da RFC 2119, I, II e III expressam, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "obrigação, obrigação e proibição.",
    "B": "obrigação, recomendação e permissão (opcional).",
    "C": "recomendação, obrigação e permissão.",
    "D": "permissão, recomendação e obrigação.",
    "E": "obrigação, permissão e recomendação."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** MUST (e SHALL) = obrigação; SHOULD = recomendação (pode haver razão válida para não seguir); MAY = opcional/permitido.\n\n- **A** (errada): SHOULD não é obrigatório e MAY não proíbe.\n- **B** (correta): significado dos três modais.\n- **C** (errada): inverte MUST e SHOULD.\n- **D** (errada): inverte MUST e MAY.\n- **E** (errada): inverte SHOULD e MAY.\n\nRevisar: Apostila 06 §19 – Inglês técnico.",
  "tags": [
    "ingles",
    "requisitos",
    "rfc-2119",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python: fatiamento de listas",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício P1, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Considere o código Python 3 a seguir.\n\n```python\nx = [3, 6, 9, 12, 15, 18, 21]\nprint(x[2:5], x[::-3], x[-3])\n```\n\nAo ser executado, o código imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`[9, 12, 15] [21, 12, 3] 15`",
    "B": "`[9, 12, 15, 18] [21, 12, 3] 15`",
    "C": "`[6, 9, 12] [21, 12, 3] 15`",
    "D": "`[9, 12, 15] [3, 12, 21] 15`",
    "E": "`[9, 12, 15] [21, 12, 3] 12`"
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** `x[2:5]` pega os índices 2, 3 e 4 (o fim é exclusivo): [9, 12, 15]. `x[::-3]` percorre a lista de trás para a frente de 3 em 3, a partir do último elemento: 21, 12, 3. `x[-3]` é o antepenúltimo elemento: 15.\n\n- **A** (correta): corresponde à saída real do programa.\n- **B** (errada): trata o índice final do fatiamento como inclusivo; o 5 é exclusivo.\n- **C** (errada): considera que o primeiro índice é 1 (pega o 2º, o 3º e o 4º elementos); em Python o índice inicial é 0.\n- **D** (errada): inverte a ordem do resultado de `x[::-3]`; com passo negativo a fatia começa pelo fim.\n- **E** (errada): confunde `x[-3]` (antepenúltimo, 15) com o quarto elemento a partir do fim.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "python",
    "listas",
    "fatiamento",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python: classes, atributo de classe e herança",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício P3, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código Python 3 a seguir.\n\n```python\nclass A:\n    cont = 0\n    def __init__(self):\n        A.cont += 1\n        self.id = A.cont\nclass B(A):\n    def __str__(self):\n        return f\"B{self.id}\"\na = B(); b = A(); c = B(); d = A()\nprint(c, A.cont, isinstance(b, B))\n```\n\nAo ser executado, o código imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`B2 4 False`",
    "B": "`B3 2 False`",
    "C": "`B3 4 False`",
    "D": "`B3 4 True`",
    "E": "`<__main__.B object> 4 False`"
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** `B` herda o `__init__` de `A`, que incrementa o atributo de classe `A.cont` a cada objeto: a=B (1), b=A (2), c=B (3), d=A (4). `print(c)` usa `__str__` de B → `B3`; `A.cont` = 4; `b` é instância de `A`, não de `B` → False.\n\n- **A** (errada): conta apenas os objetos da classe B; o contador é compartilhado por A e B, e c foi o terceiro objeto criado.\n- **B** (errada): supõe que cada classe teria seu próprio contador; `A.cont` é um único atributo de classe.\n- **C** (correta): corresponde à saída real.\n- **D** (errada): inverte o sentido de `isinstance`: b foi criado por `A()` e não é instância da subclasse B.\n- **E** (errada): ignora o método `__str__` definido em B, que o `print` usa.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "python",
    "orientacao-a-objetos",
    "heranca",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python: recursão",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício P4, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código Python 3 a seguir.\n\n```python\ndef f(n):\n    if n <= 1:\n        return 1\n    return n * f(n - 3)\nprint(f(8), f(7))\n```\n\nAo ser executado, o código imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`40320 5040`",
    "B": "`0 28`",
    "C": "`384 105`",
    "D": "`80 4`",
    "E": "`80 28`"
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** f(8) = 8 · f(5) = 8 · 5 · f(2) = 8 · 5 · 2 · f(−1) = 80 · 1 = 80. f(7) = 7 · f(4) = 7 · 4 · f(1) = 28 · 1 = 28.\n\n- **A** (errada): calcula o fatorial comum (8! e 7!); a chamada recursiva subtrai 3, e não 1.\n- **B** (errada): supõe que f(−1) devolveria 0; o caso-base `n <= 1` vale para negativos e devolve 1.\n- **C** (errada): usa o duplo fatorial (passo 2): 8·6·4·2 e 7·5·3·1.\n- **D** (errada): para a recursão de f(7) cedo demais, em f(4).\n- **E** (correta): é o resultado das multiplicações até o caso-base n ≤ 1.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "python",
    "recursao",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python: tratamento de exceções",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício P5, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código Python 3 a seguir.\n\n```python\ntry:\n    print(\"a\", end=\"\")\n    x = int(\"15\")\n    print(\"b\", end=\"\")\n    y = 10 / (x - 15)\n    print(\"c\", end=\"\")\nexcept ValueError:\n    print(\"v\", end=\"\")\nexcept ZeroDivisionError:\n    print(\"z\", end=\"\")\nelse:\n    print(\"d\", end=\"\")\nfinally:\n    print(\"f\")\n```\n\nAo ser executado, o código imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`abcdf`",
    "B": "`avf`",
    "C": "`abzdf`",
    "D": "`abzf`",
    "E": "`abz`"
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Imprime `a`; `int(\"15\")` funciona e imprime `b`; `10 / (15 − 15)` lança ZeroDivisionError antes de imprimir `c`. O primeiro `except` compatível é o de ZeroDivisionError (`z`). O `else` só roda se não houver exceção; o `finally` sempre roda (`f`, com quebra de linha).\n\n- **A** (errada): ignora a divisão por zero; `10 / 0` lança exceção em Python (não resulta em infinito).\n- **B** (errada): supõe que `int(\"15\")` falharia; a string é numérica e a conversão funciona.\n- **C** (errada): executa o `else` mesmo após uma exceção tratada; o `else` só roda quando o bloco `try` termina sem exceção.\n- **D** (correta): segue exatamente o fluxo descrito.\n- **E** (errada): omite o `finally`, que é executado sempre, com ou sem exceção.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "python",
    "excecoes",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python: métodos de string",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício P6, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código Python 3 a seguir.\n\n```python\ns = \"Programacao\"\nprint(s.count(\"a\"), s.lower()[3:7], len(s.split(\"a\")))\n```\n\nAo ser executado, o código imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`3 gram 3`",
    "B": "`3 gram 4`",
    "C": "`2 gram 4`",
    "D": "`3 rama 4`",
    "E": "`3 ogra 4`"
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** \"Programacao\" tem três letras `a` (posições 5, 7 e 9). `lower()[3:7]` pega os índices 3 a 6 de \"programacao\": \"gram\". `split(\"a\")` gera ['Progr', 'm', 'c', 'o'], uma lista de 4 elementos.\n\n- **A** (errada): conta os separadores em vez das partes; três ocorrências de \"a\" geram quatro pedaços.\n- **B** (correta): confere com a execução.\n- **C** (errada): não conta a última letra `a` antes do `o` final.\n- **D** (errada): começa o fatiamento no índice 4; o caractere de índice 3 é o `g`.\n- **E** (errada): começa o fatiamento no índice 2; o índice 3 corresponde ao caractere `g`.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "python",
    "strings",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python: list comprehension e divisão inteira",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício P7, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código Python 3 a seguir.\n\n```python\nnums = [n * 2 for n in range(7) if n % 3 == 0]\nprint(nums, sum(nums), -9 // 4, -9 % 4)\n```\n\nAo ser executado, o código imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`[0, 6, 12] 18 -3 3`",
    "B": "`[6, 12] 18 -3 3`",
    "C": "`[0, 6, 12] 18 -2 -1`",
    "D": "`[0, 6, 12, 18] 36 -3 3`",
    "E": "`[0, 6, 12] 18 -2.25 3`"
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** `range(7)` gera 0 a 6; o filtro `n % 3 == 0` mantém 0, 3 e 6, multiplicados por 2: [0, 6, 12], soma 18. `-9 // 4` arredonda −2,25 para baixo: −3. O resto acompanha o sinal do divisor: −9 = 4 · (−3) + 3, logo `-9 % 4` = 3.\n\n- **A** (correta): é a saída real.\n- **B** (errada): exclui o 0, mas 0 % 3 == 0 é verdadeiro.\n- **C** (errada): trunca a divisão em direção a zero, como em C/Java; em Python `//` arredonda para −∞.\n- **D** (errada): inclui o 9 (n = 9) que está fora de `range(7)`.\n- **E** (errada): confunde `//` (divisão inteira) com `/` (divisão real).\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "python",
    "list-comprehension",
    "operadores",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java: passagem de parâmetros",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício J1, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o programa Java a seguir.\n\n```java\nstatic int f(int x) { x = x * 3; return x; }\nstatic void g(int[] v) { v[0] = 99; }\nstatic void h(int[] v) { v = new int[] {7, 7}; v[1] = 8; }\n\npublic static void main(String[] args) {\n    int a = 4; int[] v = {1, 2};\n    int b = f(a);\n    g(v);\n    h(v);\n    System.out.println(a + \" \" + b + \" \" + v[0] + \" \" + v[1]);\n}\n```\n\nAo ser executado, o programa imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`12 12 99 8`",
    "B": "`4 12 99 8`",
    "C": "`4 12 7 8`",
    "D": "`4 12 99 2`",
    "E": "`4 12 1 2`"
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Java passa tudo por valor. `f` recebe uma cópia de `a` (a continua 4) e devolve 12. `g` recebe a cópia da referência ao array e altera o conteúdo: v[0] = 99. `h` faz o parâmetro apontar para um novo array; a mudança `v[1] = 8` ocorre no array novo, e o array original continua com v[1] = 2.\n\n- **A** (errada): trata o primitivo e a reatribuição do array como passagem por referência.\n- **B** (errada): supõe que `v = new int[]{7, 7}` dentro de `h` alteraria o array do chamador.\n- **C** (errada): supõe que o array criado em `h` substituiria o original.\n- **D** (correta): reflete a passagem por valor do primitivo e da referência.\n- **E** (errada): supõe que `g` trabalharia com uma cópia do array; a cópia é só da referência, e o conteúdo é alterado.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "java",
    "passagem-de-parametros",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java: sobrescrita x ocultação de métodos estáticos",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício J2, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere o programa Java a seguir.\n\n```java\nclass Animal {\n    String som() { return \"...\"; }\n    static String tipo() { return \"Animal\"; }\n}\nclass Cao extends Animal {\n    String som() { return \"Au\"; }\n    static String tipo() { return \"Cao\"; }\n}\npublic class J2 {\n    public static void main(String[] args) {\n        Animal a = new Cao();\n        Cao c = new Cao();\n        System.out.println(a.som() + \" \" + a.tipo() + \" \" + c.tipo());\n    }\n}\n```\n\nAo ser executado, o programa imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`Au Cao Cao`",
    "B": "`... Animal Cao`",
    "C": "`Au Animal Cao`",
    "D": "`Au Animal Animal`",
    "E": "Erro de compilação, pois método estático não pode ser chamado por uma referência."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** `som()` é método de instância: a ligação é dinâmica e vale o tipo do objeto (Cao) → \"Au\". `tipo()` é estático: não é sobrescrito, apenas ocultado, e a chamada é resolvida pelo tipo declarado da referência: `a` é Animal → \"Animal\"; `c` é Cao → \"Cao\".\n\n- **A** (errada): trata o método estático como se fosse sobrescrito; static não tem polimorfismo.\n- **B** (errada): aplica ligação estática também ao método de instância `som()`.\n- **C** (correta): combina ligação dinâmica (instância) e estática (static).\n- **D** (errada): supõe que a chamada estática sempre usaria a superclasse; ela usa o tipo declarado da referência, que em `c` é Cao.\n- **E** (errada): chamar um método estático por meio de uma referência é permitido (gera apenas aviso em algumas IDEs).\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "java",
    "polimorfismo",
    "static",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java: laços, continue/break e finally",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício J3, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o programa Java a seguir.\n\n```java\nstatic int t() {\n    try { return 1; }\n    finally { System.out.print(\"F\"); }\n}\n\npublic static void main(String[] args) {\n    int x = 0;\n    for (int i = 0; i < 6; i++) {\n        if (i == 2) continue;\n        if (i == 5) break;\n        x += i;\n    }\n    System.out.println(x + \" \" + t());\n}\n```\n\nAo ser executado, o programa imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`8 1F`",
    "B": "`F8 1`",
    "C": "`F10 1`",
    "D": "`F15 1`",
    "E": "`F8 F`"
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Laço: i=0 soma 0; i=1 soma 1; i=2 é pulado (continue); i=3 soma 3; i=4 soma 4; i=5 sai (break) → x = 8. A expressão do `println` é avaliada antes da impressão; ao avaliar `t()`, o `finally` imprime \"F\" e só depois a função devolve 1. Resultado: `F8 1`.\n\n- **A** (errada): supõe que o finally rodaria depois da impressão; ele roda ao sair de `t()`, antes do println.\n- **B** (correta): o \"F\" sai antes porque é impresso durante a avaliação do argumento do println.\n- **C** (errada): soma também o i = 2, ignorando o `continue`.\n- **D** (errada): ignora o `break` e soma até i = 5.\n- **E** (errada): supõe que o finally substituiria o valor retornado; ele só imprime, e o retorno continua 1.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "java",
    "lacos",
    "excecoes",
    "finally",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java: coleções (List, Set, Map)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício J4, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o trecho de código Java a seguir, inserido em um programa que compila sem erros.\n\n```java\nList<Integer> l = new ArrayList<>(List.of(4, 2, 4, 9));\nSet<Integer> s = new TreeSet<>(l);\nMap<String, Integer> m = new HashMap<>();\nm.put(\"x\", 1); m.put(\"y\", 1); m.put(\"x\", 3);\nl.remove(2);\nSystem.out.println(l + \" \" + s + \" \" + m.get(\"x\") + \" \" + m.size());\n```\n\nAo ser executado, o programa imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`[2, 4, 9] [2, 4, 9] 3 2`",
    "B": "`[4, 2, 9] [2, 4, 9] 1 2`",
    "C": "`[4, 2, 9] [2, 4, 9] 3 3`",
    "D": "`[4, 2, 9] [4, 2, 4, 9] 3 2`",
    "E": "`[4, 2, 9] [2, 4, 9] 3 2`"
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** `l.remove(2)` em `List<Integer>` remove pelo **índice** 2 (o segundo 4): [4, 2, 9]. O TreeSet, criado antes da remoção, elimina duplicatas e ordena: [2, 4, 9]. No HashMap, o segundo `put` com a chave \"x\" substitui o valor: get(\"x\") = 3 e há 2 chaves.\n\n- **A** (errada): remove o valor 4 (primeira ocorrência) em vez do elemento de índice 2.\n- **B** (errada): supõe que `put` com chave repetida manteria o valor antigo.\n- **C** (errada): conta três chaves; a chave \"x\" foi apenas atualizada.\n- **D** (errada): ignora que o Set não admite duplicatas e que o TreeSet ordena os elementos.\n- **E** (correta): é a saída real.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "java",
    "colecoes",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java: operadores, incremento e concatenação",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício J5, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere o trecho de código Java a seguir, inserido em um programa que compila sem erros.\n\n```java\nint i = 5;\nint j = i-- * 2 + ++i;\nString s = 1 + 2 + \"a\" + 'b';\nchar c = 'x'; c -= 2;\nSystem.out.println(i + \" \" + j + \" \" + s + \" \" + c + \" \" + (7 / 2 * 2.0));\n```\n\nAo ser executado, o programa imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`5 15 3ab v 6.0`",
    "B": "`5 13 3ab v 7.0`",
    "C": "`5 15 12ab v 6.0`",
    "D": "`4 15 3ab v 6.0`",
    "E": "Erro de compilação em `c -= 2`, por perda de precisão."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** `i-- * 2` usa 5 (i passa a 4) → 10; `++i` volta i para 5 e vale 5 → j = 15. `1 + 2 + \"a\" + 'b'`: a soma 1 + 2 = 3 ocorre antes de surgir a String → \"3ab\". `c -= 2` faz cast implícito: 'x' − 2 = 'v'. `7 / 2` é divisão inteira (3) × 2.0 = 6.0.\n\n- **A** (correta): confere com a execução.\n- **B** (errada): usa o valor já decrementado (4) no primeiro termo (4·2 + 5) e faz 7/2 como divisão real (3,5 × 2.0).\n- **C** (errada): concatena 1 e 2 como texto; a soma acontece antes porque os dois primeiros operandos são int.\n- **D** (errada): esquece que `++i` restaurou o valor 5.\n- **E** (errada): os operadores compostos (`-=`) fazem conversão implícita para char; o erro só ocorreria em `c = c - 2`.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "java",
    "operadores",
    "strings",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C: ponteiros e aritmética de ponteiros",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício C2 adaptado de C++ para C)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o trecho de programa em linguagem C a seguir.\n\n```c\nint v[] = {5, 15, 25, 35, 45};\nint *p = v + 3;\n*p -= 5;\nint *q = p - 2;\nprintf(\"%d %d %d %d\\n\", *p, *q, (int)(p - q), v[3]);\n```\n\nAo ser executado, o programa imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`30 15 8 35`",
    "B": "`35 15 2 35`",
    "C": "`30 25 2 30`",
    "D": "`30 15 2 35`",
    "E": "`30 15 2 30`"
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** `p = v + 3` aponta para v[3] (35); `*p -= 5` muda v[3] para 30. `q = p - 2` aponta para v[1] (15). A diferença `p - q` é medida em elementos: 2. Como p aponta para v[3], `v[3]` também vale 30.\n\n- **A** (errada): mede a diferença em bytes (2 × 4) e supõe que v[3] não foi alterado pelo ponteiro.\n- **B** (errada): ignora a atribuição `*p -= 5`, que altera o próprio elemento do vetor.\n- **C** (errada): faz q apontar para v[2]; p − 2 a partir de v[3] é v[1].\n- **D** (errada): supõe que `*p` seria uma cópia; p aponta para o próprio v[3].\n- **E** (correta): é a saída do programa.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "c",
    "ponteiros",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C: passagem por valor e por ponteiro",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício C3 adaptado de C++ para C)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o trecho de programa em linguagem C a seguir.\n\n```c\nvoid f(int a, int *b, int c[]) {\n    a = 0;\n    *b = 0;\n    c[0] = 0;\n    c = NULL;\n}\n\nint main(void) {\n    int x = 1, y = 2, z[2] = {3, 4};\n    f(x, &y, z);\n    printf(\"%d %d %d %d\\n\", x, y, z[0], z[1]);\n    return 0;\n}\n```\n\nAo ser executado, o programa imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`0 0 0 4`",
    "B": "`1 0 0 4`",
    "C": "`1 2 0 4`",
    "D": "`1 0 3 4`",
    "E": "O programa falha em tempo de execução por causa de `c = NULL`."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Em C toda passagem é por valor. `a` é cópia de x (x continua 1). `b` recebe o endereço de y, e `*b = 0` altera y. O vetor decai para ponteiro: `c[0] = 0` altera z[0]; `c = NULL` muda apenas a cópia local do ponteiro, sem efeito em z. z[1] continua 4.\n\n- **A** (errada): supõe que a variável x seria alterada; ela foi passada por valor.\n- **B** (correta): corresponde à saída.\n- **C** (errada): supõe que `*b = 0` alteraria só a cópia; b contém o endereço de y.\n- **D** (errada): supõe que o vetor seria copiado inteiro; em C o nome do vetor é passado como ponteiro para o primeiro elemento.\n- **E** (errada): a atribuição troca só o valor do parâmetro local; nenhum acesso é feito por meio do ponteiro nulo.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "c",
    "ponteiros",
    "passagem-de-parametros",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C#: virtual/override x new",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício CS1, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere o código C# a seguir.\n\n```csharp\nclass A { public virtual string F() => \"A\"; public string G() => \"A\"; }\nclass B : A { public override string F() => \"B\"; public new string G() => \"B\"; }\nclass C : B { public override string F() => \"C\"; }\n\nclass Programa {\n    static void Main() {\n        A x = new C();\n        Console.WriteLine(x.F() + x.G() + ((B)x).G());\n    }\n}\n```\n\nAo ser executado, o programa imprime no console:",
  "imagem": null,
  "alternativas": {
    "A": "`CBB`",
    "B": "`AAB`",
    "C": "`BAB`",
    "D": "`CAB`",
    "E": "Erro de compilação, porque C não redefine G."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** `F` é `virtual` em A e `override` em B e C: a chamada usa o tipo do objeto (C) → \"C\". `G` em B usa `new` (ocultação), sem polimorfismo: por uma referência do tipo A executa A.G → \"A\"; após o cast para B executa B.G → \"B\".\n\n- **A** (errada): trata o `new` como se fosse `override`; com `new` a versão chamada depende do tipo da referência.\n- **B** (errada): trata F como método não virtual.\n- **C** (errada): ignora a sobrescrita de F na classe C.\n- **D** (correta): é a concatenação das três chamadas.\n- **E** (errada): C herda G de B normalmente; não há obrigação de redefinir.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "csharp",
    "polimorfismo",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C#: parâmetros ref e out",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício CS2, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código C# a seguir.\n\n```csharp\nstatic void Ajusta(ref int a, out int b, int c) {\n    a += c;\n    b = a * 2;\n    c = 0;\n}\n\nstatic void Main() {\n    int x = 3, z = 5;\n    Ajusta(ref x, out int y, z);\n    Console.WriteLine(x + \" \" + y + \" \" + z);\n}\n```\n\nAo ser executado, o programa imprime no console:",
  "imagem": null,
  "alternativas": {
    "A": "`3 16 5`",
    "B": "`8 16 0`",
    "C": "`8 16 5`",
    "D": "`8 6 5`",
    "E": "Erro de compilação, pois `out int y` não pode ser declarado na chamada."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** `ref` passa x por referência: a = 3 + 5 = 8 altera x. `out` exige atribuição no método: b = 8 · 2 = 16 vai para y. `c` é passado por valor: zerá-lo dentro do método não altera z (continua 5).\n\n- **A** (errada): trata `ref` como passagem por valor.\n- **B** (errada): supõe que a alteração de `c` voltaria para z; sem `ref` ou `out` a passagem é por valor.\n- **C** (correta): é a saída real.\n- **D** (errada): calcula b com o valor original de a (3 · 2); a já tinha sido alterado para 8.\n- **E** (errada): a declaração da variável `out` na própria chamada é permitida desde o C# 7.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "csharp",
    "passagem-de-parametros",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C#: propriedades com validação no set",
  "ref_apostila": {
    "modulo": "05",
    "secao": "26",
    "titulo": "Bateria de exercícios \"qual a saída do código\"",
    "link": "[[05 - Bancos de Dados e Linguagens#26. Bateria de exercícios \"qual a saída do código\"]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §26 (exercício CS3, valores alterados)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código C# a seguir.\n\n```csharp\npublic class Conta {\n    private decimal _saldo;\n    public decimal Saldo {\n        get => _saldo;\n        set { if (value >= 0) _saldo = value; }\n    }\n}\n\nclass Programa {\n    static void Main() {\n        var c = new Conta();\n        c.Saldo = 80;\n        c.Saldo -= 100;\n        c.Saldo += 15;\n        Console.WriteLine(c.Saldo);\n    }\n}\n```\n\nAo ser executado, o programa imprime no console:",
  "imagem": null,
  "alternativas": {
    "A": "`95`",
    "B": "`-5`",
    "C": "`15`",
    "D": "`0`",
    "E": "Erro de compilação, pois propriedades não aceitam operadores compostos."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** `Saldo = 80` grava 80. `Saldo -= 100` chama o get (80), calcula −20 e chama o set, que ignora valores negativos: o saldo continua 80. `Saldo += 15` → 95.\n\n- **A** (correta): o set descartou a atribuição negativa.\n- **B** (errada): ignora a validação do set (`value >= 0`).\n- **C** (errada): supõe que o set zeraria o saldo ao receber valor negativo.\n- **D** (errada): supõe que o valor inválido zeraria o campo e que o `+= 15` também seria descartado.\n- **E** (errada): `-=` e `+=` em propriedades chamam get e set normalmente.\n\nRevisar: Apostila 05 §26 – Bateria de exercícios \"qual a saída do código\".",
  "tags": [
    "csharp",
    "encapsulamento",
    "propriedades",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python: listas e laços",
  "ref_apostila": {
    "modulo": "05",
    "secao": "22",
    "titulo": "Python",
    "link": "[[05 - Bancos de Dados e Linguagens#22. Python]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q53",
    "id_pai": "ESP-PROG-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código Python 3 a seguir.\n\n```python\ndef acumula(L, n):\n    while True:\n        if len(L) >= n:\n            return L\n        else:\n            L.append(len(L) * 3)\n\nprint(acumula([5, 1], 6))\n```\n\nAo ser executado, o código imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`[6, 9, 12, 15]`",
    "B": "`[5, 1, 6, 9, 12, 15]`",
    "C": "`[5, 1, 9, 12, 15, 18]`",
    "D": "`[5, 1, 0, 3, 6, 9]`",
    "E": "`[5, 1, 6, 9, 12, 15, 18]`"
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** A função só retorna quando `len(L) >= 6`. Enquanto isso, acrescenta `len(L) * 3`, calculado **antes** do append: com 2 elementos acrescenta 6; com 3, 9; com 4, 12; com 5, 15. Com 6 elementos, retorna. A lista recebida (`[5, 1]`) é preservada no início.\n\n- **A** (errada): descarta os elementos iniciais; o append acrescenta ao fim da lista recebida.\n- **B** (correta): é a lista retornada.\n- **C** (errada): calcula o comprimento depois do append (3, 4, 5, 6).\n- **D** (errada): começa a contagem em 0 como se a lista estivesse vazia.\n- **E** (errada): faz uma iteração a mais; o teste `>=` encerra quando há 6 elementos.\n\nRevisar: Apostila 05 §22 – Python.",
  "tags": [
    "python",
    "listas",
    "qual-a-saida",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python: listas e laços",
  "ref_apostila": {
    "modulo": "05",
    "secao": "22",
    "titulo": "Python",
    "link": "[[05 - Bancos de Dados e Linguagens#22. Python]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q53",
    "id_pai": "ESP-PROG-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código Python 3 a seguir.\n\n```python\ndef serie(L, limite):\n    while sum(L) < limite:\n        L.append(sum(L))\n    return L\n\nprint(serie([1], 20))\n```\n\nAo ser executado, o código imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`[1, 1, 2, 4, 8]`",
    "B": "`[1, 2, 4, 8, 16]`",
    "C": "`[1, 1, 2, 4, 8, 16, 32]`",
    "D": "`[1, 1, 2, 3, 5, 8, 13]`",
    "E": "`[1, 1, 2, 4, 8, 16]`"
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** A cada volta, acrescenta a soma atual: soma 1 → [1, 1]; soma 2 → [1, 1, 2]; soma 4 → […, 4]; soma 8 → […, 8]; soma 16 → […, 16]. Agora a soma é 32, que não é menor que 20, e o laço termina.\n\n- **A** (errada): para quando a soma é 16; o teste `16 < 20` ainda é verdadeiro, então há mais um append.\n- **B** (errada): descarta o 1 inicial ou deixa de acrescentar a primeira soma.\n- **C** (errada): faz um append a mais; com soma 32 a condição já é falsa.\n- **D** (errada): aplica a sequência de Fibonacci, que soma só os dois últimos elementos.\n- **E** (correta): a soma 32 encerra o laço.\n\nRevisar: Apostila 05 §22 – Python.",
  "tags": [
    "python",
    "listas",
    "lacos",
    "qual-a-saida",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C#: propriedades get/set",
  "ref_apostila": {
    "modulo": "05",
    "secao": "25",
    "titulo": "C# e ASP/ASP.NET",
    "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q55",
    "id_pai": "ESP-PROG-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o trecho C# a seguir.\n\n```csharp\nvar c = new Cliente(\"Ana\");\nc.Limite = 500;\nConsole.WriteLine(c.Nome + \" \" + c.Limite);\n```\n\nPara que o trecho compile e imprima `Ana 500`, a classe `Cliente` pode ser implementada como:",
  "imagem": null,
  "alternativas": {
    "A": "```csharp\npublic class Cliente {\n    public string Nome { get; }\n    public decimal Limite { get; private set; }\n    public Cliente(string nome) { Nome = nome; }\n}\n```",
    "B": "```csharp\npublic class Cliente {\n    public string Nome { get; set; }\n    public decimal Limite { get; set; }\n}\n```",
    "C": "```csharp\npublic class Cliente {\n    public string Nome { get; }\n    public decimal Limite { get; set; }\n    public Cliente(string nome) { Nome = nome; }\n}\n```",
    "D": "```csharp\npublic class Cliente {\n    private decimal limite;\n    public string Nome { get; }\n    public decimal Limite { get return limite; set limite = value; }\n    public Cliente(string nome) { Nome = nome; }\n}\n```",
    "E": "```csharp\npublic class Cliente {\n    public string Nome { get; }\n    public decimal Limite { get; set; }\n    public void Cliente(string nome) { Nome = nome; }\n}\n```"
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O trecho precisa de um construtor com um parâmetro string, de `Nome` legível e de `Limite` com set público. Propriedade automática somente leitura (`{ get; }`) pode ser atribuída no construtor.\n\n- **A** (errada): o set privado impede `c.Limite = 500` fora da classe (erro CS0272).\n- **B** (errada): sem construtor com parâmetro, `new Cliente(\"Ana\")` não compila (CS1729).\n- **C** (correta): compila e imprime `Ana 500`.\n- **D** (errada): os acessores precisam de corpo entre chaves ou `=>`; `get return ...;` é erro de sintaxe.\n- **E** (errada): construtor não tem tipo de retorno; com `void` vira método com o nome da classe, o que é proibido (CS0542).\n\nRevisar: Apostila 05 §25 – C# e ASP/ASP.NET.",
  "tags": [
    "csharp",
    "propriedades",
    "encapsulamento",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java: exceções, múltiplos catch e finally",
  "ref_apostila": {
    "modulo": "05",
    "secao": "23",
    "titulo": "Java",
    "link": "[[05 - Bancos de Dados e Linguagens#23. Java]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q1",
    "id_pai": "ESP-PROG-0013",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o programa Java a seguir.\n\n```java\nclass Conta {\n    double saldo = 200;\n    void sacar(double v) {\n        if (v <= 0) throw new IllegalArgumentException(\"Valor inválido\");\n        if (v > saldo) throw new IllegalStateException(\"Saldo insuficiente\");\n        saldo -= v;\n    }\n}\n\npublic class V13a {\n    public static void main(String[] args) {\n        Conta c = new Conta();\n        try {\n            c.sacar(50);\n            c.sacar(-10);\n            c.sacar(30);\n        } catch (IllegalStateException e) {\n            System.out.print(\"S \");\n        } catch (IllegalArgumentException e) {\n            System.out.print(\"A \");\n        } finally {\n            System.out.print(c.saldo);\n        }\n    }\n}\n```\n\nAo ser executado, o programa imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`S 150.0`",
    "B": "`A 120.0`",
    "C": "`150.0`",
    "D": "`A 150.0`",
    "E": "`A 160.0`"
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O primeiro saque (50) deixa 150. O segundo (−10) lança IllegalArgumentException, e o terceiro saque não chega a ser executado. O catch de IllegalStateException não serve; o de IllegalArgumentException imprime \"A \". O finally imprime o saldo, 150.0.\n\n- **A** (errada): associa o valor negativo à exceção de saldo insuficiente.\n- **B** (errada): supõe que o saque de 30 seria executado depois do catch; o try é abandonado no ponto da exceção.\n- **C** (errada): ignora o catch, que trata a exceção lançada.\n- **D** (correta): é a saída real.\n- **E** (errada): aplica o saque negativo (150 − (−10)) antes de lançar a exceção; a verificação vem antes da subtração.\n\nRevisar: Apostila 05 §23 – Java.",
  "tags": [
    "java",
    "excecoes",
    "qual-a-saida",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java: exceções verificadas e finally",
  "ref_apostila": {
    "modulo": "05",
    "secao": "23",
    "titulo": "Java",
    "link": "[[05 - Bancos de Dados e Linguagens#23. Java]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q1",
    "id_pai": "ESP-PROG-0013",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere o programa Java a seguir.\n\n```java\nclass SaldoException extends Exception {\n    SaldoException(String m) { super(m); }\n}\n\nclass Conta {\n    int saldo = 100;\n    void sacar(int v) throws SaldoException {\n        if (v > saldo) throw new SaldoException(\"insuficiente\");\n        saldo -= v;\n    }\n}\n\npublic class V13b {\n    static int processa(Conta c, int v) {\n        try {\n            c.sacar(v);\n            return 1;\n        } catch (SaldoException e) {\n            return 2;\n        } finally {\n            c.saldo += 5;\n        }\n    }\n\n    public static void main(String[] args) {\n        Conta c = new Conta();\n        int r1 = processa(c, 60);\n        int r2 = processa(c, 60);\n        System.out.println(r1 + \" \" + r2 + \" \" + c.saldo);\n    }\n}\n```\n\nAo ser executado, o programa imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`1 2 50`",
    "B": "`1 1 -20`",
    "C": "`1 2 40`",
    "D": "`1 2 45`",
    "E": "Erro de compilação, pois `sacar` declara `throws` e `processa` não."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** 1ª chamada: saldo 100 ≥ 60 → saldo 40, `return 1`; antes de sair, o finally soma 5 → 45. 2ª chamada: 60 > 45 → SaldoException; o catch retorna 2 e o finally soma 5 → 50. Imprime `1 2 50`.\n\n- **A** (correta): o finally executa nas duas saídas, inclusive após `return`.\n- **B** (errada): supõe que a segunda chamada também sacaria, ignorando a exceção.\n- **C** (errada): supõe que o finally não roda quando há `return` no try ou no catch.\n- **D** (errada): aplica o finally só na chamada com exceção.\n- **E** (errada): `processa` trata a SaldoException no catch, então não precisa declará-la.\n\nRevisar: Apostila 05 §23 – Java.",
  "tags": [
    "java",
    "excecoes",
    "checked",
    "finally",
    "qual-a-saida",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python: argumento padrão mutável",
  "ref_apostila": {
    "modulo": "05",
    "secao": "22",
    "titulo": "Python",
    "link": "[[05 - Bancos de Dados e Linguagens#22. Python]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q6",
    "id_pai": "ESP-PROG-0014",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código Python 3 a seguir.\n\n```python\ndef registra(item, lista=[]):\n    lista.append(item)\n    return lista\n\na = registra(\"pix\")\nb = registra(\"ted\")\nc = registra(\"doc\", [])\nprint(len(a), len(b), len(c), a is b)\n```\n\nAo ser executado, o código imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`1 2 1 False`",
    "B": "`1 1 1 False`",
    "C": "`2 2 1 True`",
    "D": "`2 2 3 True`",
    "E": "`3 3 1 True`"
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O valor padrão `lista=[]` é criado uma única vez, na definição da função. As duas primeiras chamadas usam e devolvem a **mesma** lista, que termina com 2 itens; por isso `len(a)` e `len(b)` valem 2 e `a is b` é True. A terceira chamada recebe uma lista nova explícita, com 1 item.\n\n- **A** (errada): supõe que `a` guardaria uma cópia; ela referencia a lista padrão, que continuou crescendo.\n- **B** (errada): supõe que uma lista nova é criada a cada chamada sem argumento.\n- **C** (correta): a e b são o mesmo objeto.\n- **D** (errada): supõe que a lista explícita da terceira chamada se somaria à lista padrão.\n- **E** (errada): inclui \"doc\" na lista padrão; a terceira chamada usou outra lista.\n\nRevisar: Apostila 05 §22 – Python.",
  "tags": [
    "python",
    "argumento-padrao",
    "qual-a-saida",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python: argumento padrão (idioma None) e dicionários",
  "ref_apostila": {
    "modulo": "05",
    "secao": "22",
    "titulo": "Python",
    "link": "[[05 - Bancos de Dados e Linguagens#22. Python]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q6",
    "id_pai": "ESP-PROG-0014",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código Python 3 a seguir.\n\n```python\nlimites = {\"ana\": 500}\n\ndef ajusta(d, k, taxa, hist=None):\n    if hist is None:\n        hist = []\n    hist.append(k)\n    d[k] = d.get(k, 100) * taxa\n    return len(hist)\n\najusta(limites, \"ana\", 2)\nprint(ajusta(limites, \"bia\", 3), limites[\"ana\"], limites[\"bia\"], len(limites))\n```\n\nAo ser executado, o código imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`2 1000 300 2`",
    "B": "`1 1000 0 2`",
    "C": "`1 500 300 2`",
    "D": "`1 1000 300 2`",
    "E": "O programa lança `KeyError` ao acessar \"bia\"."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Com `hist=None`, uma lista nova é criada a cada chamada, então `len(hist)` é sempre 1. \"ana\" passa de 500 para 1000 (× 2). \"bia\" não existia: `get` devolve 100, × 3 = 300. O dicionário fica com 2 chaves.\n\n- **A** (errada): trata `hist` como lista compartilhada; o idioma `None` cria uma lista nova por chamada.\n- **B** (errada): usa 0 como padrão; o `get` recebeu 100 como valor padrão.\n- **C** (errada): esquece que a primeira chamada já dobrou o limite de \"ana\".\n- **D** (correta): é a saída real.\n- **E** (errada): a chave \"bia\" foi criada na segunda chamada, antes do acesso.\n\nRevisar: Apostila 05 §22 – Python.",
  "tags": [
    "python",
    "dicionarios",
    "argumento-padrao",
    "qual-a-saida",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java: sobrescrita e sobrecarga",
  "ref_apostila": {
    "modulo": "05",
    "secao": "23",
    "titulo": "Java",
    "link": "[[05 - Bancos de Dados e Linguagens#23. Java]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 05 §23 – Q3",
    "id_pai": "ESP-PROG-0049",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere o programa Java a seguir.\n\n```java\nclass Tarifa {\n    String calc(int v) { return \"T-int\"; }\n    String calc(double v) { return \"T-double\"; }\n}\nclass TarifaPix extends Tarifa {\n    @Override\n    String calc(int v) { return \"P-int\"; }\n}\npublic class V49 {\n    public static void main(String[] args) {\n        Tarifa t = new TarifaPix();\n        System.out.println(t.calc(10) + \" \" + t.calc(10.0) + \" \" + t.calc('A'));\n    }\n}\n```\n\nAo ser executado, o programa imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`T-int T-double T-int`",
    "B": "`P-int T-double T-double`",
    "C": "`P-int P-double P-int`",
    "D": "Erro de compilação na chamada `t.calc('A')`, pois não há versão para char.",
    "E": "`P-int T-double P-int`"
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** A sobrecarga é escolhida em tempo de compilação pelo tipo do argumento; a sobrescrita, em tempo de execução pelo tipo do objeto. `calc(10)` → versão int, sobrescrita em TarifaPix → \"P-int\". `calc(10.0)` → versão double, não sobrescrita → \"T-double\". `calc('A')`: char é promovido a int (conversão mais próxima) → \"P-int\".\n\n- **A** (errada): ignora a ligação dinâmica: o objeto é TarifaPix.\n- **B** (errada): promove char para double; a conversão de ampliação mais específica é para int.\n- **C** (errada): supõe que sobrescrever `calc(int)` sobrescreveria também `calc(double)`.\n- **D** (errada): char é promovido automaticamente a int.\n- **E** (correta): combina as duas resoluções.\n\nRevisar: Apostila 05 §23 – Java.",
  "tags": [
    "java",
    "sobrecarga",
    "sobrescrita",
    "polimorfismo",
    "qual-a-saida",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java: comparação de Strings e operadores inteiros",
  "ref_apostila": {
    "modulo": "05",
    "secao": "23",
    "titulo": "Java",
    "link": "[[05 - Bancos de Dados e Linguagens#23. Java]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 05 §23 – Q6",
    "id_pai": "ESP-PROG-0052",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere o trecho de código Java a seguir, inserido em um programa que compila sem erros.\n\n```java\nString a = \"Pix\";\nString b = \"Pi\" + \"x\";\nString c = new String(\"Pix\");\nString d = c.intern();\nSystem.out.println((a == b) + \" \" + (a == c) + \" \" + (a == d) + \" \" + (-7 / 2) + \" \" + (-7 % 3));\n```\n\nAo ser executado, o programa imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`false false true -3 -1`",
    "B": "`true false true -3 -1`",
    "C": "`true false false -3 -1`",
    "D": "`true false true -4 2`",
    "E": "`true true true -3 -1`"
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** `\"Pi\" + \"x\"` é constante de compilação e usa o mesmo literal do pool que `a` → true. `new String` cria outro objeto → false. `intern()` devolve a instância do pool → true. Em Java a divisão inteira trunca em direção a zero: −7/2 = −3; o resto tem o sinal do dividendo: −7 % 3 = −1.\n\n- **A** (errada): supõe que a concatenação de literais criaria novo objeto; o compilador a resolve como constante.\n- **B** (correta): é a saída.\n- **C** (errada): ignora o efeito de `intern()`.\n- **D** (errada): aplica as regras do Python (arredondar para −∞), não as do Java.\n- **E** (errada): supõe que `new String` reaproveitaria o objeto do pool.\n\nRevisar: Apostila 05 §23 – Java.",
  "tags": [
    "java",
    "strings",
    "operadores",
    "qual-a-saida",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python: operadores aritméticos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "7",
    "titulo": "Algoritmos e lógica de programação",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#7. Algoritmos e lógica de programação]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §7 – Q3",
    "id_pai": "ESP-PROG-0066",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Considere o código Python 3 a seguir.\n\n```python\nprint(23 // 4, 23 % 4, -23 // 4, -23 % 4, 23 / 4)\n```\n\nAo ser executado, o código imprime:",
  "imagem": null,
  "alternativas": {
    "A": "`5 3 -6 1 5.75`",
    "B": "`5 3 -5 -3 5.75`",
    "C": "`5 3 -6 1 5`",
    "D": "`5.75 3 -5.75 1 5.75`",
    "E": "`5 3 -6 -1 5.75`"
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** 23 // 4 = 5 e 23 % 4 = 3. −23 // 4 = ⌊−5,75⌋ = −6; o resto satisfaz −23 = 4 · (−6) + 1, logo 1. `/` é sempre divisão real: 5.75.\n\n- **A** (correta): é a saída.\n- **B** (errada): trunca em direção a zero, como Java e C; em Python o `//` arredonda para baixo.\n- **C** (errada): trata `/` como divisão inteira (comportamento do Python 2).\n- **D** (errada): confunde `//` com `/`.\n- **E** (errada): dá ao resto o sinal do dividendo; em Python o resto tem o sinal do divisor (4).\n\nRevisar: Apostila 06 §7 – Algoritmos e lógica de programação.",
  "tags": [
    "python",
    "operadores",
    "qual-a-saida",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Recursão",
  "ref_apostila": {
    "modulo": "06",
    "secao": "7",
    "titulo": "Algoritmos e lógica de programação",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#7. Algoritmos e lógica de programação]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §7 – Q5",
    "id_pai": "ESP-PROG-0068",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere a função recursiva em Python 3 a seguir.\n\n```python\ndef h(n):\n    if n <= 2:\n        return n\n    return h(n - 1) + 2 * h(n - 3)\n\nprint(h(6))\n```\n\nO valor impresso é:",
  "imagem": null,
  "alternativas": {
    "A": "32",
    "B": "10",
    "C": "8",
    "D": "12",
    "E": "13"
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Casos-base: h(0) = 0, h(1) = 1, h(2) = 2. h(3) = h(2) + 2·h(0) = 2; h(4) = h(3) + 2·h(1) = 4; h(5) = h(4) + 2·h(2) = 8; h(6) = h(5) + 2·h(3) = 8 + 4 = 12.\n\n- **A** (errada): usa h(n−2) no lugar de h(n−3): h(3) = 4, h(4) = 8, h(5) = 16, h(6) = 32.\n- **B** (errada): esquece o fator 2 no último passo: h(5) + h(3) = 8 + 2.\n- **C** (errada): para um passo antes; 8 é o valor de h(5).\n- **D** (correta): é o valor de h(6).\n- **E** (errada): trata os casos-base como se todos devolvessem 1: h(3) = 3, h(4) = 5, h(5) = 7, h(6) = 7 + 2·3 = 13.\n\nRevisar: Apostila 06 §7 – Algoritmos e lógica de programação.",
  "tags": [
    "recursao",
    "python",
    "qual-a-saida",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V028",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "PHP: arrays associativos e strings",
  "ref_apostila": {
    "modulo": "05",
    "secao": "16",
    "titulo": "Programação web: cliente x servidor e HTTP",
    "link": "[[05 - Bancos de Dados e Linguagens#16. Programação web: cliente x servidor e HTTP]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §16 (PHP no servidor)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o script PHP 8 a seguir.\n\n```php\n<?php\n$saldos = [\"ana\" => 100, \"bia\" => 40, \"caio\" => 75];\n$saldos[\"bia\"] += 20;\n$total = 0;\nforeach ($saldos as $nome => $v) {\n    if ($v >= 60) {\n        $total += $v;\n    }\n}\necho count($saldos) . \"-\" . $total . \"-\" . strtoupper(substr(\"banestes\", 2, 3));\n```\n\nAo ser executado, o script exibe:",
  "imagem": null,
  "alternativas": {
    "A": "`3-175-NES`",
    "B": "`3-235-NES`",
    "C": "`3-235-ANE`",
    "D": "`4-235-NES`",
    "E": "`3-235-NESTES`"
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** `$saldos[\"bia\"] += 20` → 60. O foreach soma os valores ≥ 60: 100 + 60 + 75 = 235. `count` = 3. `substr(\"banestes\", 2, 3)` começa no índice 2 e pega 3 caracteres: \"nes\" → `strtoupper` → \"NES\". O operador `.` concatena.\n\n- **A** (errada): não aplica o acréscimo de 20 a \"bia\" antes do laço (100 + 75).\n- **B** (correta): é a saída.\n- **C** (errada): conta o índice de `substr` a partir de 1.\n- **D** (errada): conta como novo elemento a linha `$saldos[\"bia\"] += 20`, que só altera uma chave existente.\n- **E** (errada): ignora o comprimento 3; só sem o terceiro argumento a substring iria até o fim.\n\nRevisar: Apostila 05 §16 – Programação web: cliente x servidor e HTTP.",
  "tags": [
    "php",
    "arrays",
    "strings",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V029",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "PHP: passagem por referência e operadores",
  "ref_apostila": {
    "modulo": "05",
    "secao": "16",
    "titulo": "Programação web: cliente x servidor e HTTP",
    "link": "[[05 - Bancos de Dados e Linguagens#16. Programação web: cliente x servidor e HTTP]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §16 (PHP no servidor)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o script PHP 8 a seguir.\n\n```php\n<?php\nfunction inc(&$x) { $x++; }\nfunction dobra($y) { $y *= 2; return $y; }\n\n$a = 1;\ninc($a);\n$b = dobra($a);\n$c = $b;\n$c++;\necho $a, \" \", $b, \" \", $c, \" \", intdiv(7, 2), \" \", 7 % 3, \" \", 7 / 2;\n```\n\nAo ser executado, o script exibe:",
  "imagem": null,
  "alternativas": {
    "A": "`1 2 3 3 1 3.5`",
    "B": "`4 4 5 3 1 3.5`",
    "C": "`2 4 5 3 1 3.5`",
    "D": "`2 5 5 3 1 3.5`",
    "E": "`2 4 5 3 1 3`"
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** `inc(&$x)` recebe por referência: $a passa a 2. `dobra` recebe cópia e devolve 4 ($a continua 2). `$c = $b` copia o valor 4; `$c++` → 5, sem alterar $b. `intdiv(7, 2)` = 3; `7 % 3` = 1; `7 / 2` = 3.5 (a divisão `/` em PHP retorna float quando não é exata).\n\n- **A** (errada): ignora o `&`, que faz a função alterar a variável original.\n- **B** (errada): supõe que `dobra` também alteraria $a; sem `&` a passagem é por valor.\n- **C** (correta): é a saída.\n- **D** (errada): supõe que `$c = $b` cria um vínculo entre as variáveis; para escalares é cópia.\n- **E** (errada): trata `/` como divisão inteira; para isso existe `intdiv`.\n\nRevisar: Apostila 05 §16 – Programação web: cliente x servidor e HTTP.",
  "tags": [
    "php",
    "passagem-de-parametros",
    "operadores",
    "qual-a-saida"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V030",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Sobrescrita e sobrecarga",
  "ref_apostila": {
    "modulo": "06",
    "secao": "8",
    "titulo": "Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#8. Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q7",
    "id_pai": "ESP-PROG-0015",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre sobrecarga (overloading) e sobrescrita (overriding) de métodos em Java, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "dois métodos de mesma classe podem ser sobrecarregados diferenciando-se apenas pelo tipo de retorno.",
    "B": "métodos estáticos podem ser sobrescritos e participam da ligação dinâmica.",
    "C": "a escolha entre versões sobrecarregadas ocorre em tempo de execução, conforme o tipo do objeto.",
    "D": "a anotação `@Override` é obrigatória para que a sobrescrita aconteça.",
    "E": "o método sobrescrito na subclasse não pode ter visibilidade mais restritiva que a do método da superclasse."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Na sobrescrita, a subclasse redefine um método herdado com a mesma assinatura; ela não pode reduzir a visibilidade (um método `public` não pode virar `protected`).\n\n- **A** (errada): o tipo de retorno não faz parte da assinatura; métodos que diferem só no retorno não compilam.\n- **B** (errada): métodos estáticos são ocultados (hiding), não sobrescritos; a chamada usa o tipo da referência.\n- **C** (errada): a sobrecarga é resolvida em tempo de compilação, pelos tipos declarados dos argumentos.\n- **D** (errada): a anotação é opcional; serve para o compilador acusar erro se o método não sobrescrever nada.\n- **E** (correta): regra da sobrescrita em Java: pode ampliar a visibilidade, nunca restringir.\n\nRevisar: Apostila 06 §8 – Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID).",
  "tags": [
    "java",
    "orientacao-a-objetos",
    "sobrecarga",
    "sobrescrita",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V031",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "SOLID: responsabilidade única",
  "ref_apostila": {
    "modulo": "06",
    "secao": "8",
    "titulo": "Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#8. Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q9",
    "id_pai": "ESP-PROG-0017",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A classe `ExtratoService` de um banco consulta os lançamentos no banco de dados, calcula o saldo do período, gera o PDF do extrato e envia o arquivo por e-mail ao cliente. Mudanças no layout do PDF, na regra de cálculo ou no provedor de e-mail obrigam a alterar a mesma classe. O princípio SOLID mais diretamente violado é o da",
  "imagem": null,
  "alternativas": {
    "A": "Responsabilidade Única (SRP).",
    "B": "Substituição de Liskov (LSP).",
    "C": "Segregação de Interfaces (ISP).",
    "D": "Aberto/Fechado (OCP).",
    "E": "Inversão de Dependência (DIP)."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** A classe tem vários motivos para mudar (persistência, regra de negócio, apresentação e comunicação). O SRP diz que uma classe deve ter uma única responsabilidade, ou um único motivo para mudar.\n\n- **A** (correta): vários motivos de mudança na mesma classe é a violação típica do SRP.\n- **B** (errada): o LSP trata de subtipos que não podem ser usados no lugar do tipo-base; não há herança no cenário.\n- **C** (errada): o ISP trata de interfaces grandes que obrigam clientes a depender de métodos que não usam.\n- **D** (errada): o OCP trata de estender comportamento sem modificar o código existente; o problema central aqui é o acúmulo de responsabilidades.\n- **E** (errada): o DIP trata de depender de abstrações e não de implementações concretas; o cenário não descreve essa dependência.\n\nRevisar: Apostila 06 §8 – Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID).",
  "tags": [
    "solid",
    "srp",
    "orientacao-a-objetos",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V032",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "SOLID: aberto/fechado e Liskov",
  "ref_apostila": {
    "modulo": "06",
    "secao": "8",
    "titulo": "Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#8. Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q9",
    "id_pai": "ESP-PROG-0017",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere as situações em um sistema de tarifas bancárias:\n\nI. Para incluir a tarifa do Pix Automático, a equipe criou uma nova classe que implementa a interface `Tarifa`, sem alterar as classes já existentes.\nII. A subclasse `ContaSalario`, derivada de `Conta`, lança exceção no método `transferir()`, que funciona normalmente na superclasse, quebrando trechos que recebem uma `Conta` qualquer.\n\nAs situações I e II correspondem, respectivamente, a",
  "imagem": null,
  "alternativas": {
    "A": "violação do princípio Aberto/Fechado e aplicação do princípio da Responsabilidade Única.",
    "B": "aplicação da Inversão de Dependência e violação da Segregação de Interfaces.",
    "C": "aplicação da Segregação de Interfaces e aplicação da Substituição de Liskov.",
    "D": "violação da Responsabilidade Única e violação da Inversão de Dependência.",
    "E": "aplicação do princípio Aberto/Fechado e violação do princípio da Substituição de Liskov."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** I estende o sistema sem modificar o código existente: aplicação do Aberto/Fechado. II é o exemplo clássico de violação de Liskov: o subtipo não pode substituir o tipo-base sem alterar o comportamento esperado.\n\n- **A** (errada): I não modifica código existente, e II não trata de responsabilidades.\n- **B** (errada): o ISP trata de interfaces grandes demais, não de subclasses que lançam exceção.\n- **C** (errada): II é uma violação, não uma aplicação.\n- **D** (errada): nenhuma das situações descreve esses problemas.\n- **E** (correta): descreve corretamente as duas situações.\n\nRevisar: Apostila 06 §8 – Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID).",
  "tags": [
    "solid",
    "ocp",
    "lsp",
    "orientacao-a-objetos",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V033",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Git: comandos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q12",
    "id_pai": "ESP-PROG-0018",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma correção feita no branch `release/2.4` precisa ser levada também ao branch `develop`, mas sem trazer os outros commits de `release/2.4`. O comando Git adequado, executado com `develop` como branch atual, é",
  "imagem": null,
  "alternativas": {
    "A": "`git merge release/2.4`",
    "B": "`git rebase release/2.4`",
    "C": "`git revert <hash-do-commit>`",
    "D": "`git cherry-pick <hash-do-commit>`",
    "E": "`git fetch origin release/2.4`"
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** `git cherry-pick <hash>` aplica, no branch atual, as mudanças de um commit específico de outro branch, criando um novo commit.\n\n- **A** (errada): integra todos os commits de release/2.4 que ainda não estão em develop.\n- **B** (errada): reaplica os commits de develop sobre a ponta de release/2.4, trazendo todo o histórico.\n- **C** (errada): cria um commit que desfaz a mudança, o contrário do pretendido.\n- **D** (correta): aplica apenas o commit escolhido.\n- **E** (errada): apenas baixa as referências remotas; não integra nada ao branch atual.\n\nRevisar: Apostila 06 §12 – DevOps, CI/CD, IaC, contêineres e Git.",
  "tags": [
    "git",
    "controle-de-versao",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V034",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "BDD",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q18",
    "id_pai": "ESP-PROG-0019",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o cenário a seguir, escrito para uma funcionalidade de transferência.\n\n```gherkin\nCenário: Transferência acima do limite diário\n  Dado que o cliente tem limite diário de R$ 5.000,00\n  E já transferiu R$ 4.500,00 hoje\n  Quando solicitar uma transferência de R$ 800,00\n  Então a transferência deve ser recusada\n  E o sistema deve exibir a mensagem \"Limite diário excedido\"\n```\n\nÉ correto afirmar que esse cenário",
  "imagem": null,
  "alternativas": {
    "A": "é um teste de unidade do TDD, que deve ser escrito depois do código de produção.",
    "B": "é um caso de uso UML, com fluxo principal e fluxos alternativos.",
    "C": "segue a estrutura Dado–Quando–Então do BDD e pode ser automatizado como especificação executável.",
    "D": "só pode ser compreendido pela equipe de desenvolvimento, por usar linguagem de programação.",
    "E": "dispensa a definição do resultado esperado, que é obtido observando o sistema em produção."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O cenário está em Gherkin, linguagem do BDD: Dado (contexto), Quando (ação), Então (resultado esperado). Ele descreve comportamento do ponto de vista do negócio e pode ser automatizado como especificação executável (Cucumber, SpecFlow/Reqnroll, Behave).\n\n- **A** (errada): no TDD o teste também vem antes do código; e o cenário é de comportamento (aceitação), não de unidade.\n- **B** (errada): casos de uso têm atores e fluxos; o texto usa as palavras-chave do Gherkin.\n- **C** (correta): descreve o papel do Gherkin no BDD.\n- **D** (errada): Gherkin é linguagem natural estruturada, pensada para negócio, testes e desenvolvimento.\n- **E** (errada): o passo \"Então\" declara justamente o resultado esperado.\n\nRevisar: Apostila 06 §16 – Testes de software.",
  "tags": [
    "bdd",
    "gherkin",
    "testes",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V035",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "GitFlow, pull request e code review",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §18 – Q4",
    "id_pai": "ESP-PROG-0083",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um fluxo GitFlow com pull requests e revisão de código, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "os ramos feature saem de main e são integrados diretamente em produção após o pull request.",
    "B": "o ramo release sai de develop e, ao final, é integrado em main e em develop, normalmente com uma tag de versão em main.",
    "C": "o pull request dispensa a execução da pipeline de CI, pois a revisão humana já garante a qualidade.",
    "D": "o ramo develop é descartado ao fim de cada versão e recriado a partir da próxima feature.",
    "E": "o ramo hotfix sai de develop e é integrado somente em develop."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** No GitFlow o ramo `release/` sai de `develop`, recebe só ajustes de estabilização e, ao final, é integrado em `main` (com tag de versão) e de volta em `develop`. O pull request permite revisão e validação pela pipeline antes do merge.\n\n- **A** (errada): features saem de develop e voltam para develop.\n- **B** (correta): descreve o ciclo do release no GitFlow.\n- **C** (errada): revisão e verificações automáticas são complementares; a pipeline deve passar antes do merge.\n- **D** (errada): develop é ramo permanente de integração.\n- **E** (errada): hotfix sai de main e volta para main e develop.\n\nRevisar: Apostila 06 §18 – Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento.",
  "tags": [
    "git",
    "gitflow",
    "pull-request",
    "code-review",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V036",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Uso responsável de assistentes de código com IA",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §18 – Q5",
    "id_pai": "ESP-PROG-0084",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um analista usou um assistente de código baseado em IA para gerar uma rotina de integração com a API de um parceiro. A sugestão chamou um método de biblioteca que não existe na versão usada pelo banco e reproduziu um trecho extenso de um projeto de código aberto. Diante disso, a conduta mais adequada é",
  "imagem": null,
  "alternativas": {
    "A": "revisar o código, conferir a documentação da biblioteca e a licença do trecho reproduzido, e validar a solução com testes e análise de segurança antes do merge.",
    "B": "aceitar a sugestão, pois a ferramenta foi treinada com código público e, portanto, isento de restrições de licença.",
    "C": "colar no prompt os dados reais de clientes usados na integração, para que a ferramenta corrija o erro com mais precisão.",
    "D": "desativar os testes automatizados que falharem, já que o código foi gerado por um modelo de linguagem.",
    "E": "trocar por qualquer outro assistente gratuito da internet até obter uma sugestão que compile."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Assistentes de IA podem \"alucinar\" APIs e reproduzir código com licença incompatível. A conduta correta é revisar e testar o código, conferir a documentação real e a licença do trecho, sem expor dados sensíveis e usando a ferramenta aprovada pela organização.\n\n- **A** (correta): segue as boas práticas de revisão humana, testes e cuidado com propriedade intelectual.\n- **B** (errada): código público pode ter licença com obrigações (ex.: copyleft).\n- **C** (errada): expor dados de clientes viola a LGPD e o sigilo bancário.\n- **D** (errada): testes continuam obrigatórios; a falha indica problema real.\n- **E** (errada): deve-se usar ferramenta aprovada pela política corporativa; compilar não garante correção nem segurança.\n\nRevisar: Apostila 06 §18 – Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento.",
  "tags": [
    "ia",
    "assistentes-de-codigo",
    "boas-praticas",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V037",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Arcabouço .NET",
  "ref_apostila": {
    "modulo": "05",
    "secao": "25",
    "titulo": "C# e ASP/ASP.NET",
    "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 05 §25 – Q5",
    "id_pai": "ESP-PROG-0062",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o arcabouço de desenvolvimento .NET, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o .NET 8 executa somente em Windows, assim como o .NET Framework 4.8.",
    "B": "o compilador C# gera código intermediário (IL), que o CLR converte em código nativo por meio do compilador JIT durante a execução.",
    "C": "o C# é interpretado linha a linha pelo CLR, sem etapa de compilação.",
    "D": "cada linguagem .NET possui um runtime próprio, de modo que C# e VB.NET não podem usar as mesmas bibliotecas.",
    "E": "o gerenciamento de memória exige liberar objetos manualmente com `delete`, como em C++."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O compilador C# gera código intermediário (IL/CIL), que o CLR compila para código nativo com o JIT na execução. Desde o .NET Core (unificado no .NET 5+), a plataforma é multiplataforma e de código aberto.\n\n- **A** (errada): o .NET moderno (Core e .NET 5+) roda em Windows, Linux e macOS.\n- **B** (correta): descreve o modelo de execução do .NET.\n- **C** (errada): há compilação para IL e depois compilação JIT (ou AOT).\n- **D** (errada): todas compartilham o CLR e as bibliotecas base, graças ao IL comum.\n- **E** (errada): o CLR tem coletor de lixo (garbage collector).\n\nRevisar: Apostila 05 §25 – C# e ASP/ASP.NET.",
  "tags": [
    "dotnet",
    "csharp",
    "clr",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-PROG-V038",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Acesso a banco de dados (JDBC)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "22",
    "titulo": "Python",
    "link": "[[05 - Bancos de Dados e Linguagens#22. Python]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 05 §22 – Q5",
    "id_pai": "ESP-PROG-0045",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um desenvolvedor Java precisa consultar as contas de um cliente cujo CPF é digitado pelo usuário, evitando injeção de SQL. Considerando a conexão `con` já aberta, o trecho adequado é",
  "imagem": null,
  "alternativas": {
    "A": "```java\nStatement st = con.createStatement();\nResultSet rs = st.executeQuery(\n    \"SELECT numero, saldo FROM conta WHERE cpf = '\" + cpf + \"'\");\n```",
    "B": "```java\nPreparedStatement ps = con.prepareStatement(\n    \"SELECT numero, saldo FROM conta WHERE cpf = '\" + cpf + \"'\");\nResultSet rs = ps.executeQuery();\n```",
    "C": "```java\nPreparedStatement ps = con.prepareStatement(\n    \"SELECT numero, saldo FROM conta WHERE cpf = ?\");\nps.setString(0, cpf);\nResultSet rs = ps.executeQuery();\n```",
    "D": "```java\nPreparedStatement ps = con.prepareStatement(\n    \"SELECT numero, saldo FROM conta WHERE cpf = ?\");\nps.setString(1, cpf);\nResultSet rs = ps.executeQuery();\n```",
    "E": "```java\nPreparedStatement ps = con.prepareStatement(\n    \"SELECT numero, saldo FROM conta WHERE cpf = ?\");\nps.setString(1, cpf);\nint rs = ps.executeUpdate();\n```"
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** `PreparedStatement` com o marcador `?` e `setString` envia o valor separado do comando SQL, o que impede injeção de SQL.\n\n- **A** (errada): concatena a entrada do usuário no SQL, abrindo caminho para injeção.\n- **B** (errada): usar PreparedStatement não protege se o valor já foi concatenado no texto do comando.\n- **C** (errada): os índices dos parâmetros JDBC começam em 1; `setString(0, ...)` lança SQLException.\n- **D** (correta): usa consulta parametrizada.\n- **E** (errada): `executeUpdate` é para INSERT, UPDATE e DELETE; uma consulta usa `executeQuery`, que devolve ResultSet.\n\nRevisar: Apostila 05 §22 – Python.",
  "tags": [
    "java",
    "jdbc",
    "sql-injection",
    "acesso-a-dados",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Stakeholders",
  "ref_apostila": {
    "modulo": "03",
    "secao": "13",
    "titulo": "Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#13. Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q77",
    "id_pai": "ESP-GOV-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Na governança de TI de um banco, considera-se parte interessada (stakeholder)",
  "imagem": null,
  "alternativas": {
    "A": "qualquer pessoa ou grupo que afete ou seja afetado pelas decisões e resultados da organização e de sua TI, como reguladores, clientes, fornecedores e áreas internas.",
    "B": "somente os acionistas controladores, que detêm o direito de voto.",
    "C": "somente a equipe técnica de TI, responsável por desenvolver e operar os sistemas.",
    "D": "somente os órgãos reguladores, como o Banco Central e a ANPD.",
    "E": "somente quem assina contratos com a organização."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Stakeholders são pessoas ou grupos que afetam ou são afetados pelas decisões e resultados da organização e de sua TI, internos (conselho, diretoria, áreas de negócio, TI, auditoria) ou externos (acionistas, reguladores, clientes, fornecedores, sociedade).\n\n- **A** (correta): definição ampla, com internos e externos.\n- **B** (errada): acionistas são apenas um dos grupos.\n- **C** (errada): a equipe de TI é um stakeholder interno entre vários.\n- **D** (errada): reguladores são stakeholders externos, mas não os únicos.\n- **E** (errada): clientes, usuários, sociedade e áreas internas também são partes interessadas.\n\nRevisar: Apostila 03 §13 – Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC.",
  "tags": [
    "governanca-de-ti",
    "stakeholders",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Stakeholders e cascata de objetivos",
  "ref_apostila": {
    "modulo": "03",
    "secao": "13",
    "titulo": "Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#13. Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q77",
    "id_pai": "ESP-GOV-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No COBIT 2019, as necessidades das partes interessadas são traduzidas em objetivos concretos por meio da cascata de objetivos. A sequência correta dessa cascata é",
  "imagem": null,
  "alternativas": {
    "A": "objetivos de governança e gestão → objetivos de alinhamento → objetivos corporativos → necessidades das partes interessadas.",
    "B": "necessidades das partes interessadas → objetivos de alinhamento → objetivos corporativos → componentes.",
    "C": "necessidades das partes interessadas → objetivos corporativos → objetivos de alinhamento → objetivos de governança e gestão.",
    "D": "fatores de design → áreas de foco → princípios → domínios.",
    "E": "objetivos corporativos → necessidades das partes interessadas → processos → métricas."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Necessidades das partes interessadas → objetivos corporativos (EG01–EG13) → objetivos de alinhamento (AG01–AG13) → objetivos de governança e gestão (os 40).\n\n- **A** (errada): inverte a cascata, que parte das necessidades.\n- **B** (errada): troca a ordem dos níveis e termina em componentes.\n- **C** (correta): ordem da cascata.\n- **D** (errada): não descreve a cascata de objetivos.\n- **E** (errada): a cascata começa pelas necessidades.\n\nRevisar: Apostila 03 §13 – Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC.",
  "tags": [
    "governanca-de-ti",
    "cobit",
    "stakeholders",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Alinhamento estratégico (Henderson e Venkatraman)",
  "ref_apostila": {
    "modulo": "03",
    "secao": "13",
    "titulo": "Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#13. Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q78",
    "id_pai": "ESP-GOV-0002",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Quando o Pix foi lançado, um banco enxergou na nova infraestrutura de pagamentos a oportunidade de criar produtos, como cobranças para o varejo e débitos recorrentes, alterando a própria estratégia de negócio a partir de uma capacidade de TI. No modelo de alinhamento estratégico de Henderson e Venkatraman, essa situação corresponde à perspectiva de",
  "imagem": null,
  "alternativas": {
    "A": "execução da estratégia.",
    "B": "transformação tecnológica.",
    "C": "nível de serviço.",
    "D": "integração funcional pura, sem relação com a estratégia.",
    "E": "potencial competitivo."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Na perspectiva de potencial competitivo, a estratégia de TI identifica oportunidades que alteram a estratégia de negócio.\n\n- **A** (errada): a TI apenas implementa uma estratégia de negócio já definida.\n- **B** (errada): parte da estratégia de negócio para a estratégia de TI e então para a infraestrutura de TI.\n- **C** (errada): foca em serviços de TI de qualidade, partindo da estratégia de TI para a infraestrutura de TI.\n- **D** (errada): integração funcional é uma dimensão do modelo, não uma perspectiva.\n- **E** (correta): a TI cria oportunidades e muda a estratégia do negócio.\n\nRevisar: Apostila 03 §13 – Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC.",
  "tags": [
    "governanca-de-ti",
    "alinhamento-estrategico",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "TIC no ambiente de negócios e BSC",
  "ref_apostila": {
    "modulo": "03",
    "secao": "13",
    "titulo": "Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#13. Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q78",
    "id_pai": "ESP-GOV-0002",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco usa o Balanced Scorecard para desdobrar sua estratégia. O objetivo \"reduzir o tempo de concessão de crédito para menos de 10 minutos\", com indicador de tempo médio de análise, pertence à perspectiva",
  "imagem": null,
  "alternativas": {
    "A": "financeira.",
    "B": "de clientes.",
    "C": "de aprendizado e crescimento.",
    "D": "de processos internos.",
    "E": "de conformidade regulatória, a quinta perspectiva do BSC."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** A perspectiva de processos internos pergunta em quais processos a organização deve ser excelente; tempo de concessão de crédito é indicador de processo.\n\n- **A** (errada): mede resultados para os acionistas, como lucro e ROE.\n- **B** (errada): mede satisfação, retenção e participação de mercado.\n- **C** (errada): mede capacitação, competências, clima e sistemas de informação.\n- **D** (correta): mede a excelência de um processo.\n- **E** (errada): o BSC tem quatro perspectivas; não há quinta perspectiva de conformidade.\n\nRevisar: Apostila 03 §13 – Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC.",
  "tags": [
    "governanca-de-ti",
    "bsc",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Benefícios da governança de TIC",
  "ref_apostila": {
    "modulo": "03",
    "secao": "13",
    "titulo": "Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#13. Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q80",
    "id_pai": "ESP-GOV-0003",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "É benefício esperado da implantação da governança de TI em uma instituição financeira:",
  "imagem": null,
  "alternativas": {
    "A": "eliminação da necessidade de auditorias internas e externas.",
    "B": "maior clareza de papéis e responsabilidades na tomada de decisões de TI, com prestação de contas.",
    "C": "transferência integral das decisões estratégicas de TI para o departamento técnico.",
    "D": "redução da transparência sobre custos, para preservar a autonomia das áreas.",
    "E": "garantia de que nenhum risco tecnológico se concretize."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Entre os benefícios estão alinhamento dos investimentos à estratégia, entrega de valor mensurável, gestão de riscos e conformidade, clareza de papéis, uso eficiente de recursos e confiança de acionistas e reguladores.\n\n- **A** (errada): a governança apoia, mas não elimina, as auditorias.\n- **B** (correta): accountability é benefício típico.\n- **C** (errada): governança é responsabilidade da alta administração.\n- **D** (errada): a governança aumenta a transparência de custos.\n- **E** (errada): a governança gerencia e otimiza riscos; não os elimina.\n\nRevisar: Apostila 03 §13 – Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC.",
  "tags": [
    "governanca-de-ti",
    "beneficios",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Objetivo da governança (criação de valor)",
  "ref_apostila": {
    "modulo": "03",
    "secao": "13",
    "titulo": "Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#13. Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q80",
    "id_pai": "ESP-GOV-0003",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo o COBIT 2019, o objetivo da governança é a criação de valor para as partes interessadas, que significa",
  "imagem": null,
  "alternativas": {
    "A": "realização de benefícios com otimização de riscos e de recursos.",
    "B": "maximização do lucro trimestral, independentemente dos riscos assumidos.",
    "C": "eliminação total dos riscos, mesmo com redução dos benefícios.",
    "D": "redução de custos de TI a qualquer preço.",
    "E": "cumprimento de prazos de projetos, sem relação com benefícios."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Criação de valor = realização de benefícios com otimização de riscos e otimização de recursos (refletidos em EDM02, EDM03 e EDM04).\n\n- **A** (correta): definição do COBIT.\n- **B** (errada): ignora a otimização de riscos.\n- **C** (errada): o COBIT fala em otimizar, não em eliminar riscos.\n- **D** (errada): otimizar recursos não é cortar custos a qualquer preço.\n- **E** (errada): o valor está nos benefícios, não só nos prazos.\n\nRevisar: Apostila 03 §13 – Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC.",
  "tags": [
    "governanca-de-ti",
    "cobit",
    "valor",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Responsabilidade pela governança de TI",
  "ref_apostila": {
    "modulo": "03",
    "secao": "13",
    "titulo": "Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#13. Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §13 – Q1",
    "id_pai": "ESP-GOV-0007",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Segundo o ITGI/ISACA, a governança de TI",
  "imagem": null,
  "alternativas": {
    "A": "é responsabilidade exclusiva do departamento de TI, sob liderança do CIO.",
    "B": "é sinônimo de gestão de serviços de TI e se esgota na operação da central de serviço.",
    "C": "é independente da governança corporativa, com a qual não guarda relação.",
    "D": "é de responsabilidade da alta administração e consiste em liderança, estruturas e processos que garantem que a TI sustente e estenda as estratégias da organização.",
    "E": "é uma norma certificável que substitui a governança corporativa."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** A governança de TI é responsabilidade da alta administração (conselho e diretoria) e consiste em liderança, estruturas organizacionais e processos que garantem que a TI sustente e estenda as estratégias e os objetivos da organização.\n\n- **A** (errada): o CIO participa, mas a responsabilidade é do conselho e da diretoria.\n- **B** (errada): isso é gestão de serviços (ITIL), não governança.\n- **C** (errada): é um subconjunto da governança corporativa.\n- **D** (correta): definição do ITGI.\n- **E** (errada): não é norma certificável nem substitui a governança corporativa.\n\nRevisar: Apostila 03 §13 – Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC.",
  "tags": [
    "governanca-de-ti",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Balanced Scorecard",
  "ref_apostila": {
    "modulo": "03",
    "secao": "13",
    "titulo": "Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#13. Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §13 – Q3",
    "id_pai": "ESP-GOV-0009",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o Balanced Scorecard (BSC) e sua adaptação para a TI, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o BSC usa apenas indicadores financeiros, por serem objetivos e auditáveis.",
    "B": "as perspectivas do BSC são independentes, sem relação de causa e efeito entre elas.",
    "C": "no IT Balanced Scorecard, a perspectiva financeira corresponde à contribuição corporativa e a de aprendizado e crescimento corresponde à orientação futura.",
    "D": "o BSC foi criado pela ISACA como parte do COBIT 5.",
    "E": "a perspectiva de clientes do BSC corresponde, no IT BSC, à excelência operacional."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O BSC, de Kaplan e Norton, equilibra indicadores financeiros e não financeiros nas quatro perspectivas ligadas por causa e efeito. No IT BSC, as perspectivas viram contribuição corporativa, orientação ao usuário, excelência operacional e orientação futura.\n\n- **A** (errada): o BSC equilibra financeiros e não financeiros.\n- **B** (errada): o mapa estratégico liga as perspectivas por causa e efeito.\n- **C** (correta): correspondência correta.\n- **D** (errada): foi criado por Kaplan e Norton (1992).\n- **E** (errada): clientes corresponde à orientação ao usuário; processos internos é que corresponde à excelência operacional.\n\nRevisar: Apostila 03 §13 – Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC.",
  "tags": [
    "governanca-de-ti",
    "bsc",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Alinhamento estratégico (Henderson e Venkatraman)",
  "ref_apostila": {
    "modulo": "03",
    "secao": "13",
    "titulo": "Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#13. Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §13 – Q4",
    "id_pai": "ESP-GOV-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco definiu como estratégia de negócio a abertura de contas 100% digital e, a partir dela, redesenhou seus processos organizacionais e ajustou a infraestrutura de TI para suportá-los, sem alterar a estratégia de TI. No modelo de Henderson e Venkatraman, trata-se da perspectiva de",
  "imagem": null,
  "alternativas": {
    "A": "potencial competitivo.",
    "B": "execução da estratégia.",
    "C": "nível de serviço.",
    "D": "transformação tecnológica.",
    "E": "ajuste estratégico reverso."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Execução da estratégia: estratégia de negócio → infraestrutura organizacional → infraestrutura de TI; a TI apoia a estratégia já definida.\n\n- **A** (errada): parte da estratégia de TI para mudar a estratégia de negócio.\n- **B** (correta): caminho negócio → organização → infraestrutura de TI.\n- **C** (errada): parte da estratégia de TI para a infraestrutura de TI.\n- **D** (errada): passa pela estratégia de TI antes da infraestrutura de TI.\n- **E** (errada): não é perspectiva do modelo.\n\nRevisar: Apostila 03 §13 – Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC.",
  "tags": [
    "governanca-de-ti",
    "alinhamento-estrategico",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Governança x gestão",
  "ref_apostila": {
    "modulo": "03",
    "secao": "13",
    "titulo": "Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#13. Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §13 – Q5",
    "id_pai": "ESP-GOV-0011",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considerando a distinção entre governança e gestão de TI, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "governança e gestão são sinônimos, pois ambas são exercidas pela diretoria de TI.",
    "B": "a gestão monitora, ao passo que a governança apenas planeja.",
    "C": "a governança é liderada pelo CEO, e a gestão, pelo presidente do conselho.",
    "D": "a governança define como executar os processos, e a gestão define o que deve ser feito.",
    "E": "a governança avalia, direciona e monitora, enquanto a gestão planeja, constrói, executa e monitora as atividades alinhadas à direção definida."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Governança (conselho) avalia, direciona e monitora (EDM); gestão (diretoria executiva) planeja, constrói, executa e monitora (PBRM). Ambas monitoram, em níveis diferentes.\n\n- **A** (errada): são distintas e exercidas por instâncias diferentes.\n- **B** (errada): ambas monitoram; quem planeja (PBRM) é a gestão.\n- **C** (errada): inverte: governança com o conselho; gestão com o CEO.\n- **D** (errada): inverte: governança define o quê e por quê; gestão, o como.\n- **E** (correta): EDM × PBRM.\n\nRevisar: Apostila 03 §13 – Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC.",
  "tags": [
    "governanca-de-ti",
    "governanca-x-gestao",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Arquétipos de Weill e Ross",
  "ref_apostila": {
    "modulo": "03",
    "secao": "13",
    "titulo": "Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#13. Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §13 – Q6",
    "id_pai": "ESP-GOV-0012",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um conglomerado financeiro, as decisões sobre infraestrutura de TI são tomadas em conjunto pelo comitê corporativo e pelos diretores das unidades de negócio (banco, seguradora e corretora), com participação da TI. Segundo Weill e Ross, esse arranjo corresponde ao arquétipo",
  "imagem": null,
  "alternativas": {
    "A": "federalista.",
    "B": "feudal.",
    "C": "monarquia de TI.",
    "D": "monarquia de negócio.",
    "E": "anarquia."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** No arquétipo federalista, as decisões combinam o nível corporativo e as unidades de negócio (com ou sem a TI).\n\n- **A** (correta): corporativo + unidades de negócio.\n- **B** (errada): cada unidade decide isoladamente.\n- **C** (errada): a TI decide sozinha.\n- **D** (errada): os executivos de negócio decidem pela organização, sem a divisão com as unidades.\n- **E** (errada): cada usuário ou pequeno grupo decide isoladamente.\n\nRevisar: Apostila 03 §13 – Governança de TIC: conceitos, objetivos, stakeholders, alinhamento estratégico e BSC.",
  "tags": [
    "governanca-de-ti",
    "weill-e-ross",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "COBIT 2019: domínios e objetivos",
  "ref_apostila": {
    "modulo": "03",
    "secao": "14",
    "titulo": "COBIT 2019",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#14. COBIT 2019]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q36",
    "id_pai": "ESP-GOV-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No COBIT 2019, o tratamento dos chamados de indisponibilidade do aplicativo e a posterior análise da causa raiz de falhas recorrentes correspondem, respectivamente, aos objetivos",
  "imagem": null,
  "alternativas": {
    "A": "BAI06 e BAI07.",
    "B": "EDM03 e APO12.",
    "C": "DSS04 e DSS05.",
    "D": "MEA01 e MEA03.",
    "E": "DSS02 e DSS03."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** DSS02 – Gerenciar requisições de serviço e incidentes; DSS03 – Gerenciar problemas.\n\n- **A** (errada): tratam de mudanças de TI e de aceitação e transição.\n- **B** (errada): tratam de riscos (governança e gestão).\n- **C** (errada): tratam de continuidade e de serviços de segurança.\n- **D** (errada): tratam de monitoramento de desempenho e conformidade externa.\n- **E** (correta): incidentes e problemas, no domínio DSS.\n\nRevisar: Apostila 03 §14 – COBIT 2019.",
  "tags": [
    "cobit",
    "dss",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "COBIT 2019: domínios",
  "ref_apostila": {
    "modulo": "03",
    "secao": "14",
    "titulo": "COBIT 2019",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#14. COBIT 2019]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q36",
    "id_pai": "ESP-GOV-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre os domínios do modelo central do COBIT 2019, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "os domínios APO e MEA são de governança, e os demais de gestão.",
    "B": "o domínio EDM é o único de governança, e o COBIT 2019 acrescentou, em relação ao COBIT 5, objetivos de gestão de dados, de projetos e de garantia (assurance).",
    "C": "a disponibilidade e a capacidade são tratadas no domínio DSS.",
    "D": "o domínio BAI trata da entrega e do suporte dos serviços em operação.",
    "E": "o COBIT 2019 tem 37 objetivos, os mesmos processos do COBIT 5."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** EDM é o único domínio de governança (5 objetivos); APO (14), BAI (11), DSS (6) e MEA (4) são de gestão. O COBIT 2019 acrescentou APO14 (dados), BAI11 (projetos) e MEA04 (garantia).\n\n- **A** (errada): só EDM é de governança.\n- **B** (correta): afirmação correta.\n- **C** (errada): ficam em BAI04.\n- **D** (errada): isso é DSS; BAI é construir, adquirir e implementar.\n- **E** (errada): são 40 objetivos.\n\nRevisar: Apostila 03 §14 – COBIT 2019.",
  "tags": [
    "cobit",
    "dominios",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "COBIT 2019: os 40 objetivos",
  "ref_apostila": {
    "modulo": "03",
    "secao": "14",
    "titulo": "COBIT 2019",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#14. COBIT 2019]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §14 – Q2",
    "id_pai": "ESP-GOV-0014",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No modelo central do COBIT 2019, o domínio que reúne o maior número de objetivos é",
  "imagem": null,
  "alternativas": {
    "A": "BAI – Construir, Adquirir e Implementar, com 14 objetivos.",
    "B": "DSS – Entregar, Servir e Suportar, com 11 objetivos.",
    "C": "EDM – Avaliar, Direcionar e Monitorar, com 6 objetivos.",
    "D": "APO – Alinhar, Planejar e Organizar, com 14 objetivos.",
    "E": "MEA – Monitorar, Avaliar e Medir, com 13 objetivos."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Distribuição: EDM 5, APO 14, BAI 11, DSS 6, MEA 4, total 40. O maior é APO.\n\n- **A** (errada): BAI tem 11.\n- **B** (errada): DSS tem 6.\n- **C** (errada): EDM tem 5 e não é o maior.\n- **D** (correta): maior domínio.\n- **E** (errada): MEA tem 4.\n\nRevisar: Apostila 03 §14 – COBIT 2019.",
  "tags": [
    "cobit",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "COBIT 2019: domínios e objetivos",
  "ref_apostila": {
    "modulo": "03",
    "secao": "14",
    "titulo": "COBIT 2019",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#14. COBIT 2019]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §14 – Q3",
    "id_pai": "ESP-GOV-0015",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O objetivo do COBIT 2019 relativo aos acordos de nível de serviço com os clientes de TI e o objetivo relativo à gestão dos fornecedores são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "DSS01 e DSS06.",
    "B": "BAI09 e BAI10.",
    "C": "APO09 e APO10.",
    "D": "APO05 e APO06.",
    "E": "MEA02 e MEA03."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** APO09 – Gerenciar acordos de serviço; APO10 – Gerenciar fornecedores.\n\n- **A** (errada): operações e controles de processos de negócio.\n- **B** (errada): ativos e configuração.\n- **C** (correta): acordos de serviço e fornecedores.\n- **D** (errada): portfólio e orçamento e custos.\n- **E** (errada): controle interno e conformidade com requisitos externos.\n\nRevisar: Apostila 03 §14 – COBIT 2019.",
  "tags": [
    "cobit",
    "apo",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "COBIT 2019: domínios e objetivos",
  "ref_apostila": {
    "modulo": "03",
    "secao": "14",
    "titulo": "COBIT 2019",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#14. COBIT 2019]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §14 – Q3",
    "id_pai": "ESP-GOV-0015",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No COBIT 2019, a reunião do comitê que aprova a mudança de versão do sistema de pagamentos e a posterior homologação e implantação dessa versão em produção estão associadas, respectivamente, aos objetivos",
  "imagem": null,
  "alternativas": {
    "A": "BAI06 e BAI07.",
    "B": "DSS02 e DSS03.",
    "C": "APO12 e APO13.",
    "D": "BAI02 e BAI03.",
    "E": "EDM01 e EDM02."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** BAI06 – Gerenciar mudanças de TI; BAI07 – Gerenciar a aceitação e a transição de mudanças de TI.\n\n- **A** (correta): mudanças e aceitação/transição.\n- **B** (errada): incidentes e problemas.\n- **C** (errada): riscos e segurança.\n- **D** (errada): definição de requisitos e construção de soluções.\n- **E** (errada): framework de governança e entrega de benefícios.\n\nRevisar: Apostila 03 §14 – COBIT 2019.",
  "tags": [
    "cobit",
    "bai",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "COBIT 2019: princípios",
  "ref_apostila": {
    "modulo": "03",
    "secao": "14",
    "titulo": "COBIT 2019",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#14. COBIT 2019]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §14 – Q4",
    "id_pai": "ESP-GOV-0016",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O COBIT 2019 distingue princípios do sistema de governança e princípios do framework de governança. É princípio do **framework** de governança:",
  "imagem": null,
  "alternativas": {
    "A": "prover valor às partes interessadas.",
    "B": "alinhado aos principais padrões.",
    "C": "sistema de governança dinâmico.",
    "D": "governança distinta da gestão.",
    "E": "sistema de governança de ponta a ponta."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Princípios do framework: baseado em modelo conceitual; aberto e flexível; alinhado aos principais padrões. Os outros itens são princípios do sistema de governança.\n\n- **A** (errada): princípio do sistema de governança.\n- **B** (correta): é um dos três princípios do framework.\n- **C** (errada): princípio do sistema de governança.\n- **D** (errada): princípio do sistema de governança.\n- **E** (errada): princípio do sistema de governança.\n\nRevisar: Apostila 03 §14 – COBIT 2019.",
  "tags": [
    "cobit",
    "principios",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "COBIT 2019: componentes",
  "ref_apostila": {
    "modulo": "03",
    "secao": "14",
    "titulo": "COBIT 2019",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#14. COBIT 2019]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §14 – Q5",
    "id_pai": "ESP-GOV-0017",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No COBIT 2019, o comitê de TI do conselho de administração e o comitê de mudanças (CAB) são exemplos do componente do sistema de governança denominado",
  "imagem": null,
  "alternativas": {
    "A": "processos.",
    "B": "cultura, ética e comportamento.",
    "C": "princípios, políticas e procedimentos.",
    "D": "serviços, infraestrutura e aplicações.",
    "E": "estruturas organizacionais."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Os sete componentes são: processos; estruturas organizacionais; princípios, políticas e procedimentos; informação; cultura, ética e comportamento; pessoas, habilidades e competências; serviços, infraestrutura e aplicações. Comitês são estruturas organizacionais.\n\n- **A** (errada): processos são, por exemplo, gestão de incidentes e de mudanças.\n- **B** (errada): exemplos: cultura de segurança, guia de conduta.\n- **C** (errada): exemplos: política de segurança cibernética.\n- **D** (errada): exemplos: data center, nuvem, core banking.\n- **E** (correta): comitês são estruturas.\n\nRevisar: Apostila 03 §14 – COBIT 2019.",
  "tags": [
    "cobit",
    "componentes",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "COBIT 2019: fatores de design",
  "ref_apostila": {
    "modulo": "03",
    "secao": "14",
    "titulo": "COBIT 2019",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#14. COBIT 2019]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §14 – Q5",
    "id_pai": "ESP-GOV-0017",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Um banco estadual, fortemente regulado e com cenário de ameaças cibernéticas elevado, customizou seu sistema de governança de I&T priorizando objetivos de riscos, segurança, continuidade e conformidade. No COBIT 2019, os elementos que justificam essa customização são os",
  "imagem": null,
  "alternativas": {
    "A": "componentes genéricos, que são idênticos para qualquer organização.",
    "B": "níveis de capacidade, que definem quais objetivos são obrigatórios por lei.",
    "C": "fatores de design, como perfil de risco, cenário de ameaças e requisitos de conformidade.",
    "D": "domínios de gestão APO e BAI, que substituem o domínio EDM em empresas reguladas.",
    "E": "princípios do framework, que determinam a contratação de auditoria externa."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Fatores de design (11, como perfil de risco, cenário de ameaças, requisitos de conformidade, papel da TI, porte) influenciam o desenho do sistema de governança e a prioridade dos objetivos.\n\n- **A** (errada): componentes podem ser variantes; e o que orienta a priorização são os fatores de design.\n- **B** (errada): capacidade mede o desempenho de processos; não define obrigatoriedade.\n- **C** (correta): justificam a priorização.\n- **D** (errada): EDM nunca é substituído.\n- **E** (errada): não tratam disso.\n\nRevisar: Apostila 03 §14 – COBIT 2019.",
  "tags": [
    "cobit",
    "fatores-de-design",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "COBIT 2019: gestão de desempenho",
  "ref_apostila": {
    "modulo": "03",
    "secao": "14",
    "titulo": "COBIT 2019",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#14. COBIT 2019]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §14 – Q6",
    "id_pai": "ESP-GOV-0018",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre a gestão de desempenho (CPM) do COBIT 2019, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "mede a capacidade dos processos com base na ISO/IEC 15504, como no COBIT 5.",
    "B": "tem níveis de capacidade de 1 a 3, iguais aos da representação contínua do CMMI 1.3.",
    "C": "certifica organizações que atingem o nível 5 de maturidade.",
    "D": "adota abordagem inspirada no CMMI, com níveis de capacidade de 0 a 5 aplicados a processos e níveis de maturidade aplicados a áreas de foco.",
    "E": "aplica níveis de maturidade a processos individuais e níveis de capacidade a áreas de foco."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O COBIT 2019 adotou abordagem inspirada no CMMI: níveis de capacidade de 0 a 5 para processos e níveis de maturidade de 0 a 5 para áreas de foco. O COBIT 5 é que usava a ISO/IEC 15504.\n\n- **A** (errada): o COBIT 2019 trocou a 15504 pela abordagem do CMMI.\n- **B** (errada): a escala do COBIT 2019 vai de 0 a 5.\n- **C** (errada): o COBIT não certifica organizações.\n- **D** (correta): descrição correta.\n- **E** (errada): é o contrário.\n\nRevisar: Apostila 03 §14 – COBIT 2019.",
  "tags": [
    "cobit",
    "capacidade",
    "maturidade",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ITIL 4: cadeia de valor de serviço",
  "ref_apostila": {
    "modulo": "03",
    "secao": "15",
    "titulo": "ITIL 4 (e notas sobre a ITIL Version 5)",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#15. ITIL 4 (e notas sobre a ITIL Version 5)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q37",
    "id_pai": "ESP-GOV-0005",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na cadeia de valor de serviço da ITIL 4, a única atividade que interage diretamente com as partes interessadas externas, funcionando como porta de entrada da demanda, é",
  "imagem": null,
  "alternativas": {
    "A": "engajar.",
    "B": "planejar.",
    "C": "desenho e transição.",
    "D": "obter/construir.",
    "E": "melhorar."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Engajar fornece entendimento das necessidades das partes interessadas e mantém o relacionamento com consumidores e fornecedores.\n\n- **A** (correta): é a interface com as partes externas.\n- **B** (errada): garante visão compartilhada e direção de melhoria.\n- **C** (errada): garante que produtos e serviços atendam a qualidade, custo e prazo.\n- **D** (errada): garante componentes disponíveis e conforme especificação.\n- **E** (errada): garante melhoria contínua em todas as atividades.\n\nRevisar: Apostila 03 §15 – ITIL 4 (e notas sobre a ITIL Version 5).",
  "tags": [
    "itil",
    "cadeia-de-valor",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ITIL 4: sistema de valor de serviço",
  "ref_apostila": {
    "modulo": "03",
    "secao": "15",
    "titulo": "ITIL 4 (e notas sobre a ITIL Version 5)",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#15. ITIL 4 (e notas sobre a ITIL Version 5)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q37",
    "id_pai": "ESP-GOV-0005",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Sistema de Valor de Serviço (SVS) da ITIL 4, são componentes do SVS:",
  "imagem": null,
  "alternativas": {
    "A": "organizações e pessoas, informação e tecnologia, parceiros e fornecedores, e fluxos de valor e processos.",
    "B": "planejar, melhorar, engajar, desenho e transição, obter/construir e entregar e suportar.",
    "C": "princípios orientadores, governança, cadeia de valor de serviço, práticas e melhoria contínua.",
    "D": "oportunidade, demanda e valor.",
    "E": "estratégia, desenho, transição, operação e melhoria contínua de serviço."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Os cinco componentes do SVS são princípios orientadores, governança, cadeia de valor de serviço, práticas e melhoria contínua. Oportunidade e demanda são entradas; valor é a saída.\n\n- **A** (errada): são as quatro dimensões.\n- **B** (errada): são as seis atividades da cadeia de valor.\n- **C** (correta): os cinco componentes.\n- **D** (errada): são entradas (oportunidade e demanda) e saída (valor).\n- **E** (errada): são os estágios do ciclo de vida da ITIL v3.\n\nRevisar: Apostila 03 §15 – ITIL 4 (e notas sobre a ITIL Version 5).",
  "tags": [
    "itil",
    "svs",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ITIL: incidente x problema",
  "ref_apostila": {
    "modulo": "03",
    "secao": "15",
    "titulo": "ITIL 4 (e notas sobre a ITIL Version 5)",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#15. ITIL 4 (e notas sobre a ITIL Version 5)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q38",
    "id_pai": "ESP-GOV-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Às 10h, clientes não conseguem acessar o internet banking. A central de serviço registra o caso como grave, e a equipe reinicia o servidor de autenticação, restabelecendo o acesso às 10h20. Na ITIL 4, a interrupção e o reinício do servidor são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "um problema e um erro conhecido.",
    "B": "uma requisição de serviço e uma mudança padrão.",
    "C": "um evento informativo e uma liberação.",
    "D": "um incidente e uma solução de contorno.",
    "E": "um incidente e uma mudança emergencial."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Incidente é interrupção não planejada ou redução da qualidade de um serviço. Reiniciar o servidor restaura o serviço sem resolver a causa: é solução de contorno (workaround).\n\n- **A** (errada): problema é a causa de incidentes; o reinício não é erro conhecido.\n- **B** (errada): a interrupção não é requisição.\n- **C** (errada): a interrupção é incidente; reinício não é liberação.\n- **D** (correta): restaurou o serviço sem eliminar a causa.\n- **E** (errada): reiniciar o servidor para restaurar o serviço é contorno, não mudança emergencial autorizada.\n\nRevisar: Apostila 03 §15 – ITIL 4 (e notas sobre a ITIL Version 5).",
  "tags": [
    "itil",
    "incidente",
    "workaround",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ITIL: gerenciamento de problemas",
  "ref_apostila": {
    "modulo": "03",
    "secao": "15",
    "titulo": "ITIL 4 (e notas sobre a ITIL Version 5)",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#15. ITIL 4 (e notas sobre a ITIL Version 5)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Simulado FCC 1 – Q38",
    "id_pai": "ESP-GOV-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A análise de falhas recorrentes no app identificou um vazamento de memória em uma biblioteca, ainda sem correção disponível; enquanto isso, a equipe reinicia o serviço de madrugada para evitar novas quedas. Na ITIL 4, a situação da causa identificada e não resolvida e o reinício programado são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "incidente grave e mudança padrão.",
    "B": "requisição de serviço e evento de aviso.",
    "C": "problema resolvido e liberação.",
    "D": "item de configuração e implantação.",
    "E": "erro conhecido e solução de contorno."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Erro conhecido é um problema analisado, mas ainda não resolvido. Solução de contorno reduz ou elimina o impacto enquanto não há resolução completa.\n\n- **A** (errada): a causa não é incidente; o reinício programado não é mudança padrão no sentido descrito.\n- **B** (errada): nenhum dos dois termos se aplica.\n- **C** (errada): o problema ainda não foi resolvido.\n- **D** (errada): não descrevem a situação.\n- **E** (correta): definições da prática de gerenciamento de problemas.\n\nRevisar: Apostila 03 §15 – ITIL 4 (e notas sobre a ITIL Version 5).",
  "tags": [
    "itil",
    "problema",
    "erro-conhecido",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ITIL 4: princípios orientadores",
  "ref_apostila": {
    "modulo": "03",
    "secao": "15",
    "titulo": "ITIL 4 (e notas sobre a ITIL Version 5)",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#15. ITIL 4 (e notas sobre a ITIL Version 5)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §15 – Q1",
    "id_pai": "ESP-GOV-0019",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma equipe pretende automatizar o processo de concessão de acessos, hoje com várias aprovações redundantes. Segundo o princípio orientador \"otimize e automatize\" da ITIL 4, deve-se",
  "imagem": null,
  "alternativas": {
    "A": "automatizar imediatamente todas as etapas atuais, inclusive as redundantes, para ganhar velocidade.",
    "B": "primeiro simplificar e padronizar o processo, eliminando etapas que não agregam valor, e depois automatizá-lo.",
    "C": "descartar o processo atual e construir um novo do zero, sem analisar o que já existe.",
    "D": "evitar qualquer automação, pois ela reduz a participação das pessoas.",
    "E": "documentar todas as etapas em detalhe antes de qualquer melhoria, como exige o oitavo princípio."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Primeiro otimizar (simplificar, padronizar, eliminar o que não agrega valor) e depois automatizar; automatizar um processo ruim só produz erros mais rápido.\n\n- **A** (errada): automatizaria o desperdício.\n- **B** (correta): ordem correta do princípio.\n- **C** (errada): contraria \"comece onde você está\".\n- **D** (errada): o princípio recomenda automatizar tarefas repetitivas.\n- **E** (errada): a ITIL 4 tem sete princípios; não há oitavo.\n\nRevisar: Apostila 03 §15 – ITIL 4 (e notas sobre a ITIL Version 5).",
  "tags": [
    "itil",
    "principios-orientadores",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ITIL 4: princípios orientadores",
  "ref_apostila": {
    "modulo": "03",
    "secao": "15",
    "titulo": "ITIL 4 (e notas sobre a ITIL Version 5)",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#15. ITIL 4 (e notas sobre a ITIL Version 5)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §15 – Q1",
    "id_pai": "ESP-GOV-0019",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São princípios orientadores da ITIL 4:",
  "imagem": null,
  "alternativas": {
    "A": "comece onde você está, progrida iterativamente com feedback e mantenha simples e prático.",
    "B": "foco no valor, foco na tecnologia e documente tudo.",
    "C": "planejar, engajar e melhorar.",
    "D": "utilidade, garantia e valor.",
    "E": "avaliar, direcionar e monitorar."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Os sete princípios: foco no valor; comece onde você está; progrida iterativamente com feedback; colabore e promova visibilidade; pense e trabalhe holisticamente; mantenha simples e prático; otimize e automatize.\n\n- **A** (correta): três dos sete princípios.\n- **B** (errada): foco na tecnologia e documente tudo não são princípios.\n- **C** (errada): são atividades da cadeia de valor.\n- **D** (errada): são conceitos-chave de serviço.\n- **E** (errada): são atividades da governança.\n\nRevisar: Apostila 03 §15 – ITIL 4 (e notas sobre a ITIL Version 5).",
  "tags": [
    "itil",
    "principios-orientadores",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ITIL 4: utilidade e garantia",
  "ref_apostila": {
    "modulo": "03",
    "secao": "15",
    "titulo": "ITIL 4 (e notas sobre a ITIL Version 5)",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#15. ITIL 4 (e notas sobre a ITIL Version 5)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §15 – Q4",
    "id_pai": "ESP-GOV-0022",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O aplicativo de um banco oferece consulta de saldo, Pix e contratação de crédito, mas fica indisponível em quase todas as noites de sexta-feira. Segundo a ITIL 4, esse serviço",
  "imagem": null,
  "alternativas": {
    "A": "tem garantia, mas carece de utilidade.",
    "B": "entrega valor pleno, pois as funcionalidades atendem ao propósito.",
    "C": "tem problema apenas de custo, sem relação com utilidade ou garantia.",
    "D": "tem utilidade, mas carece de garantia, de modo que o valor não se realiza plenamente.",
    "E": "deve ser tratado exclusivamente como requisição de serviço."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Utilidade = adequado ao propósito (o que o serviço faz). Garantia = adequado ao uso (disponibilidade, capacidade, segurança, continuidade). Valor exige as duas; aqui há utilidade e falta garantia.\n\n- **A** (errada): as funções existem (utilidade); o que falha é a disponibilidade (garantia).\n- **B** (errada): valor exige utilidade e garantia juntas.\n- **C** (errada): a indisponibilidade é questão de garantia.\n- **D** (correta): falta disponibilidade, que é aspecto de garantia.\n- **E** (errada): indisponibilidade gera incidentes, não requisições.\n\nRevisar: Apostila 03 §15 – ITIL 4 (e notas sobre a ITIL Version 5).",
  "tags": [
    "itil",
    "utilidade",
    "garantia",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V028",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ITIL 4: quatro dimensões",
  "ref_apostila": {
    "modulo": "03",
    "secao": "15",
    "titulo": "ITIL 4 (e notas sobre a ITIL Version 5)",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#15. ITIL 4 (e notas sobre a ITIL Version 5)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §15 – Q5",
    "id_pai": "ESP-GOV-0023",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Ao planejar a migração do internet banking para a nuvem, a equipe analisou o contrato e a estratégia de sourcing com o provedor. Na ITIL 4, esse aspecto pertence à dimensão",
  "imagem": null,
  "alternativas": {
    "A": "organizações e pessoas.",
    "B": "parceiros e fornecedores.",
    "C": "informação e tecnologia.",
    "D": "fluxos de valor e processos.",
    "E": "fatores externos PESTLE."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** A dimensão parceiros e fornecedores abrange relacionamentos com outras organizações envolvidas no serviço e a estratégia de sourcing.\n\n- **A** (errada): trata de estrutura, cultura, papéis e competências.\n- **B** (correta): abrange contratos e sourcing.\n- **C** (errada): trata de informação, conhecimento e tecnologias usadas.\n- **D** (errada): trata de como as partes trabalham de forma integrada.\n- **E** (errada): PESTLE são influências externas sobre as dimensões, não uma dimensão.\n\nRevisar: Apostila 03 §15 – ITIL 4 (e notas sobre a ITIL Version 5).",
  "tags": [
    "itil",
    "quatro-dimensoes",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V029",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ITIL 4: habilitação de mudança",
  "ref_apostila": {
    "modulo": "03",
    "secao": "15",
    "titulo": "ITIL 4 (e notas sobre a ITIL Version 5)",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#15. ITIL 4 (e notas sobre a ITIL Version 5)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §15 – Q6",
    "id_pai": "ESP-GOV-0024",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma vulnerabilidade crítica foi divulgada no servidor de aplicação que hospeda o sistema de Pix, e a correção precisa ser aplicada em poucas horas, com avaliação e autorização aceleradas. Na ITIL 4, essa mudança é classificada como",
  "imagem": null,
  "alternativas": {
    "A": "padrão.",
    "B": "normal.",
    "C": "emergencial.",
    "D": "requisição de serviço.",
    "E": "liberação programada."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Mudança emergencial: implementada o mais rápido possível (ex.: correção de falha de segurança), com avaliação e autorização aceleradas.\n\n- **A** (errada): padrão é de baixo risco, pré-autorizada e rotineira.\n- **B** (errada): segue o fluxo regular de avaliação e autorização.\n- **C** (correta): urgência com autorização acelerada.\n- **D** (errada): requisição não é mudança; é pedido predefinido de usuário.\n- **E** (errada): liberação torna disponível uma versão; não é tipo de mudança.\n\nRevisar: Apostila 03 §15 – ITIL 4 (e notas sobre a ITIL Version 5).",
  "tags": [
    "itil",
    "mudanca",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V030",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ITIL Version 5",
  "ref_apostila": {
    "modulo": "03",
    "secao": "15",
    "titulo": "ITIL 4 (e notas sobre a ITIL Version 5)",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#15. ITIL 4 (e notas sobre a ITIL Version 5)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 03 §15 (15.1, ITIL Version 5)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre a ITIL Version 5, citada no edital, e sua relação com a ITIL 4, é correto afirmar, segundo o cenário de novembro de 2026, que",
  "imagem": null,
  "alternativas": {
    "A": "substituiu imediatamente a ITIL 4, cujos conceitos de cadeia de valor e práticas deixaram de valer.",
    "B": "é publicada pela Axelos, que ainda detém a marca ITIL.",
    "C": "retomou o ciclo de vida em cinco estágios e os 26 processos da ITIL v3.",
    "D": "foi lançada em 2019, junto com o Sistema de Valor de Serviço.",
    "E": "é apresentada como evolução, e não ruptura, da ITIL 4, que continua válida e convive com a nova versão durante a transição."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Situação descrita na apostila (nov/2026): a PeopleCert começou a lançar a ITIL Version 5 em 2026, em fases, com a certificação Foundation já disponível; é apresentada como evolução, e não ruptura, da ITIL 4, descrita como nativa em IA, com perspectiva mais clara do ciclo de vida de produtos e serviços e um módulo de governança de IA. A ITIL 4 continua válida e convive com a nova versão, e segue sendo a base conceitual cobrada.\n\n- **A** (errada): a ITIL 4 segue válida e é a base conceitual.\n- **B** (errada): desde 2021 a ITIL pertence à PeopleCert.\n- **C** (errada): isso descreve a ITIL v3 (2007/2011).\n- **D** (errada): 2019 é o ano da ITIL 4; a Version 5 começou a sair em 2026.\n- **E** (correta): conforme a apostila (nov/2026).\n\nData de referência: novembro de 2026. Detalhes da Version 5 ainda estão sendo publicados em fases; a questão cobra apenas o que a apostila registra.\n\nRevisar: Apostila 03 §15 – ITIL 4 (e notas sobre a ITIL Version 5).",
  "tags": [
    "itil",
    "itil-5",
    "datado"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Item datado: afirma só o que está confirmado em nov/2026 (ITIL Version 5 da PeopleCert lançada em fases em 2026, evolução da ITIL 4, que segue válida), conforme apostila 03 §15. Revalidar perto da prova."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V031",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ITIL 4: melhoria contínua",
  "ref_apostila": {
    "modulo": "03",
    "secao": "15",
    "titulo": "ITIL 4 (e notas sobre a ITIL Version 5)",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#15. ITIL 4 (e notas sobre a ITIL Version 5)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 03 §15 (15.8, melhoria contínua)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O modelo de melhoria contínua da ITIL 4 tem sete passos. Após \"Qual é a visão?\" e \"Onde estamos agora?\", os passos seguintes são, na ordem,",
  "imagem": null,
  "alternativas": {
    "A": "Onde queremos estar? → Como chegamos lá? → Tome uma ação → Chegamos lá? → Como manter o impulso?",
    "B": "Tome uma ação → Onde queremos estar? → Como chegamos lá? → Chegamos lá? → Como manter o impulso?",
    "C": "Como chegamos lá? → Onde queremos estar? → Tome uma ação → Como manter o impulso? → Chegamos lá?",
    "D": "Planejar → Fazer → Checar → Agir → Padronizar.",
    "E": "Onde queremos estar? → Tome uma ação → Como manter o impulso? → Chegamos lá? → Como chegamos lá?"
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Sequência: Qual é a visão? → Onde estamos agora? → Onde queremos estar? → Como chegamos lá? → Tome uma ação → Chegamos lá? → Como manter o impulso? Os registros de oportunidades ficam no CIR (Continual Improvement Register).\n\n- **A** (correta): ordem correta.\n- **B** (errada): age antes de definir o alvo e o plano.\n- **C** (errada): inverte a definição do alvo com o plano e a verificação com a sustentação.\n- **D** (errada): mistura o PDCA com um passo inexistente.\n- **E** (errada): ordem embaralhada.\n\nRevisar: Apostila 03 §15 – ITIL 4 (e notas sobre a ITIL Version 5).",
  "tags": [
    "itil",
    "melhoria-continua"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V032",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ISO/IEC 38500: modelo EDM",
  "ref_apostila": {
    "modulo": "03",
    "secao": "16",
    "titulo": "ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#16. ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §16 – Q1",
    "id_pai": "ESP-GOV-0025",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na ISO/IEC 38500, a tarefa do órgão de governança que consiste em atribuir responsabilidades e orientar a preparação e a implementação de planos e políticas de TI é",
  "imagem": null,
  "alternativas": {
    "A": "avaliar.",
    "B": "monitorar.",
    "C": "planejar.",
    "D": "construir.",
    "E": "dirigir."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Avaliar: examinar o uso atual e futuro da TI. Dirigir: atribuir responsabilidades e orientar planos e políticas. Monitorar: acompanhar desempenho e conformidade.\n\n- **A** (errada): examina e julga o uso atual e futuro da TI.\n- **B** (errada): acompanha o desempenho e a conformidade.\n- **C** (errada): é atividade de gestão (PBRM), não tarefa do órgão de governança na 38500.\n- **D** (errada): é atividade de gestão.\n- **E** (correta): atribui responsabilidades e orienta planos e políticas.\n\nRevisar: Apostila 03 §16 – ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK.",
  "tags": [
    "iso-38500",
    "edm",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V033",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ISO/IEC 38500: princípios",
  "ref_apostila": {
    "modulo": "03",
    "secao": "16",
    "titulo": "ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#16. ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §16 – Q2",
    "id_pai": "ESP-GOV-0026",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O conselho de um banco exigiu que toda compra de soluções de TI seja feita por razões válidas, com base em análise apropriada e contínua, buscando equilíbrio entre benefícios, oportunidades, custos e riscos no curto e no longo prazo. Na ISO/IEC 38500 (edição 2015), essa exigência corresponde ao princípio",
  "imagem": null,
  "alternativas": {
    "A": "da estratégia.",
    "B": "do desempenho.",
    "C": "da conformidade.",
    "D": "da aquisição.",
    "E": "do comportamento humano."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O princípio da aquisição exige aquisições por razões válidas, com análise apropriada e contínua e equilíbrio entre benefícios, oportunidades, custos e riscos.\n\n- **A** (errada): trata de a estratégia de negócio considerar as capacidades da TI.\n- **B** (errada): trata de a TI ser adequada ao propósito, com nível e qualidade de serviço.\n- **C** (errada): trata de cumprir legislação e regulamentação.\n- **D** (correta): descrição literal do princípio.\n- **E** (errada): trata de respeitar as necessidades das pessoas no processo.\n\nRevisar: Apostila 03 §16 – ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK.",
  "tags": [
    "iso-38500",
    "principios",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V034",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "ISO/IEC 20000",
  "ref_apostila": {
    "modulo": "03",
    "secao": "16",
    "titulo": "ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#16. ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §16 – Q3",
    "id_pai": "ESP-GOV-0027",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre a ISO/IEC 20000-1:2018, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "é um guia de boas práticas não certificável, assim como a ITIL.",
    "B": "aplica-se apenas a provedores externos de serviços de TI de grande porte.",
    "C": "é norma de requisitos certificável para organizações e segue a estrutura de alto nível comum às normas de sistemas de gestão.",
    "D": "descreve como implementar cada processo, com procedimentos obrigatórios passo a passo.",
    "E": "substitui a ISO/IEC 27001 nas exigências de segurança da informação."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** A ISO/IEC 20000-1 especifica requisitos para um sistema de gestão de serviços (SGS) e é certificável para organizações; segue a estrutura de alto nível (Anexo SL), como ISO 9001 e ISO/IEC 27001. ITIL e COBIT não certificam organizações.\n\n- **A** (errada): a 20000-1 é certificável.\n- **B** (errada): aplica-se a qualquer provedor, interno ou externo, de qualquer porte.\n- **C** (correta): afirmação correta.\n- **D** (errada): diz o que deve existir (requisitos), não como implementar.\n- **E** (errada): são normas complementares e integráveis.\n\nRevisar: Apostila 03 §16 – ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK.",
  "tags": [
    "iso-20000",
    "itsm",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V035",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "PMBOK: evolução das edições",
  "ref_apostila": {
    "modulo": "03",
    "secao": "16",
    "titulo": "ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#16. ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §16 – Q4",
    "id_pai": "ESP-GOV-0028",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considerando a evolução do Guia PMBOK, é correto associar",
  "imagem": null,
  "alternativas": {
    "A": "a 7ª edição a 40 processos não prescritivos e 5 áreas de foco.",
    "B": "a 6ª edição a 10 áreas de conhecimento e 49 processos, e a 7ª edição a 12 princípios e 8 domínios de desempenho.",
    "C": "a 8ª edição a 12 princípios e 8 domínios de desempenho.",
    "D": "a 6ª edição a 6 princípios e 7 domínios de desempenho.",
    "E": "a 8ª edição a 10 áreas de conhecimento e 49 processos prescritivos."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** 6ª (2017): 5 grupos, 10 áreas, 49 processos. 7ª (2021): 12 princípios e 8 domínios, sem processos. 8ª (nov/2025): 6 princípios, 7 domínios, 5 áreas de foco e 40 processos não prescritivos.\n\n- **A** (errada): isso é a 8ª edição.\n- **B** (correta): associações corretas.\n- **C** (errada): isso é a 7ª edição.\n- **D** (errada): isso é a 8ª edição.\n- **E** (errada): isso é a 6ª edição.\n\nRevisar: Apostila 03 §16 – ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK.",
  "tags": [
    "pmbok",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V036",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "PMBOK: projeto, programa e portfólio",
  "ref_apostila": {
    "modulo": "03",
    "secao": "16",
    "titulo": "ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#16. ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §16 – Q6",
    "id_pai": "ESP-GOV-0030",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco agrupou os projetos \"novo app\", \"migração do core para a nuvem\" e \"Open Finance\", gerenciando-os de forma coordenada para obter benefícios que não seriam alcançados se cada um fosse gerenciado isoladamente. Esse agrupamento é um",
  "imagem": null,
  "alternativas": {
    "A": "programa.",
    "B": "portfólio, pois todo conjunto de projetos é um portfólio.",
    "C": "projeto único, pois tem início e fim definidos.",
    "D": "operação, pois os projetos se repetem continuamente.",
    "E": "PMO diretivo."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Programa: projetos relacionados gerenciados de forma coordenada para obter benefícios. Portfólio: projetos, programas e operações agrupados para atingir objetivos estratégicos. Operação: esforço contínuo e repetitivo.\n\n- **A** (correta): coordenação de projetos relacionados para obter benefícios.\n- **B** (errada): portfólio agrupa projetos, programas e operações por objetivos estratégicos; a coordenação para benefícios define o programa.\n- **C** (errada): são três projetos distintos.\n- **D** (errada): projetos são temporários e únicos.\n- **E** (errada): PMO é estrutura organizacional, não agrupamento de projetos.\n\nRevisar: Apostila 03 §16 – ISO/IEC 38500, ISO/IEC 20000 e noções de PMBOK.",
  "tags": [
    "pmbok",
    "programa",
    "portfolio",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V037",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "PMBOK – 8ª edição",
  "ref_apostila": {
    "modulo": "03",
    "secao": "18",
    "titulo": "PMBOK – 8ª edição",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#18. PMBOK – 8ª edição]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §18 – Q1",
    "id_pai": "ESP-GOV-0031",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre a 8ª edição do Guia PMBOK, publicada em novembro de 2025, é correto afirmar que ela",
  "imagem": null,
  "alternativas": {
    "A": "elimina os processos, como fizera a 7ª edição.",
    "B": "reintroduz processos, agora como referência flexível e não prescritiva, mantendo a visão por princípios e valor.",
    "C": "define a abordagem preditiva como a única adequada a setores regulados.",
    "D": "retoma as 10 áreas de conhecimento da 6ª edição.",
    "E": "reforça o papel do PMO como órgão de fiscalização, afastando-o de atividades de apoio."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** A 8ª edição sintetiza as anteriores: mantém princípios e valor (da 7ª) e reintroduz processos (40), agora não prescritivos; reforça a adaptação (tailoring), aceita abordagens preditiva, ágil e híbrida e traz orientações sobre IA.\n\n- **A** (errada): a 8ª reintroduziu processos.\n- **B** (correta): síntese da 8ª edição.\n- **C** (errada): o guia não escolhe uma abordagem como a certa.\n- **D** (errada): fala em domínios de desempenho e áreas de foco.\n- **E** (errada): o PMO passa a ter papel mais de apoio (coaching).\n\nRevisar: Apostila 03 §18 – PMBOK – 8ª edição.",
  "tags": [
    "pmbok",
    "pmbok-8",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V038",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "PMBOK – 8ª edição",
  "ref_apostila": {
    "modulo": "03",
    "secao": "18",
    "titulo": "PMBOK – 8ª edição",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#18. PMBOK – 8ª edição]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §18 – Q1",
    "id_pai": "ESP-GOV-0031",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Guia PMBOK 8ª edição, os números de princípios, domínios de desempenho, áreas de foco e processos são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "12, 8, 5 e 49.",
    "B": "6, 8, 10 e 49.",
    "C": "5, 10, 7 e 40.",
    "D": "6, 7, 5 e 40.",
    "E": "12, 7, 5 e 40."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** 8ª edição: 6 princípios, 7 domínios de desempenho, 5 áreas de foco e 40 processos.\n\n- **A** (errada): mistura a 7ª (12 e 8) com a 6ª (49).\n- **B** (errada): mistura edições.\n- **C** (errada): troca as quantidades.\n- **D** (correta): quantitativos da 8ª edição.\n- **E** (errada): 12 princípios são da 7ª edição.\n\nRevisar: Apostila 03 §18 – PMBOK – 8ª edição.",
  "tags": [
    "pmbok",
    "pmbok-8",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V039",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "PMBOK – 8ª edição: princípios",
  "ref_apostila": {
    "modulo": "03",
    "secao": "18",
    "titulo": "PMBOK – 8ª edição",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#18. PMBOK – 8ª edição]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §18 – Q2",
    "id_pai": "ESP-GOV-0032",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "NÃO é princípio do Guia PMBOK 8ª edição:",
  "imagem": null,
  "alternativas": {
    "A": "Adotar uma visão holística.",
    "B": "Integrar a sustentabilidade.",
    "C": "Navegar na complexidade.",
    "D": "Liderar com responsabilidade.",
    "E": "Construir uma cultura empoderada."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Os seis princípios: adotar uma visão holística; focar em valor; incorporar a qualidade; liderar com responsabilidade; integrar a sustentabilidade; construir uma cultura empoderada. \"Navegar na complexidade\" era princípio da 7ª edição.\n\n- **A** (errada): é princípio da 8ª edição.\n- **B** (errada): é princípio da 8ª edição (novidade).\n- **C** (correta): princípio da 7ª edição, não da 8ª.\n- **D** (errada): é princípio da 8ª edição.\n- **E** (errada): é princípio da 8ª edição.\n\nRevisar: Apostila 03 §18 – PMBOK – 8ª edição.",
  "tags": [
    "pmbok",
    "pmbok-8",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V040",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "PMBOK – 8ª edição: domínios",
  "ref_apostila": {
    "modulo": "03",
    "secao": "18",
    "titulo": "PMBOK – 8ª edição",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#18. PMBOK – 8ª edição]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §18 – Q2",
    "id_pai": "ESP-GOV-0032",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Guia PMBOK 8ª edição, o domínio de desempenho que trata de orçamento, custos, financiamento e valor econômico do projeto é",
  "imagem": null,
  "alternativas": {
    "A": "governança.",
    "B": "recursos.",
    "C": "medição.",
    "D": "entrega.",
    "E": "finanças."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Os sete domínios: governança, escopo, cronograma, finanças, partes interessadas, recursos e riscos. Orçamento e valor econômico ficam em finanças.\n\n- **A** (errada): trata de estrutura de decisão, papéis e conformidade.\n- **B** (errada): trata de pessoas, equipe, materiais e equipamentos.\n- **C** (errada): era domínio da 7ª edição.\n- **D** (errada): era domínio da 7ª edição.\n- **E** (correta): trata de orçamento, custos e valor econômico.\n\nRevisar: Apostila 03 §18 – PMBOK – 8ª edição.",
  "tags": [
    "pmbok",
    "pmbok-8",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V041",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "PMBOK – 8ª edição: domínios",
  "ref_apostila": {
    "modulo": "03",
    "secao": "18",
    "titulo": "PMBOK – 8ª edição",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#18. PMBOK – 8ª edição]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §18 – Q3",
    "id_pai": "ESP-GOV-0033",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São domínios de desempenho do Guia PMBOK 8ª edição:",
  "imagem": null,
  "alternativas": {
    "A": "governança, escopo, cronograma e riscos.",
    "B": "equipe, incerteza, entrega e medição.",
    "C": "iniciação, planejamento, execução e encerramento.",
    "D": "integração, qualidade, comunicações e aquisições.",
    "E": "valor, qualidade, sustentabilidade e cultura."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Domínios da 8ª: governança, escopo, cronograma, finanças, partes interessadas, recursos e riscos. Equipe, incerteza, entrega, medição e trabalho do projeto são da 7ª.\n\n- **A** (correta): todos são da 8ª edição.\n- **B** (errada): são domínios da 7ª edição.\n- **C** (errada): são áreas de foco da 8ª (antigos grupos de processos).\n- **D** (errada): são áreas de conhecimento da 6ª edição.\n- **E** (errada): lembram princípios, não domínios.\n\nRevisar: Apostila 03 §18 – PMBOK – 8ª edição.",
  "tags": [
    "pmbok",
    "pmbok-8",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V042",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "PMBOK – 8ª edição: áreas de foco",
  "ref_apostila": {
    "modulo": "03",
    "secao": "18",
    "titulo": "PMBOK – 8ª edição",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#18. PMBOK – 8ª edição]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §18 – Q4",
    "id_pai": "ESP-GOV-0034",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Guia PMBOK 8ª edição, as áreas de foco",
  "imagem": null,
  "alternativas": {
    "A": "substituem os domínios de desempenho, que deixaram de existir.",
    "B": "correspondem às 10 áreas de conhecimento da 6ª edição.",
    "C": "lembram os antigos grupos de processos e, junto com os domínios, organizam os 40 processos.",
    "D": "são exclusivas de projetos com abordagem ágil.",
    "E": "equivalem aos 12 princípios da 7ª edição."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** As cinco áreas de foco (iniciação, planejamento, execução, monitoramento e controle, encerramento) lembram os antigos grupos de processos; os 40 processos se distribuem por elas e pelos domínios.\n\n- **A** (errada): os domínios continuam (7).\n- **B** (errada): correspondem aos 5 grupos de processos.\n- **C** (correta): descrição correta.\n- **D** (errada): aplicam-se a qualquer abordagem.\n- **E** (errada): princípios e áreas de foco são coisas diferentes.\n\nRevisar: Apostila 03 §18 – PMBOK – 8ª edição.",
  "tags": [
    "pmbok",
    "pmbok-8",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V043",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Lei 14.133/2021: modalidades",
  "ref_apostila": {
    "modulo": "03",
    "secao": "19",
    "titulo": "Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#19. Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §19 – Q1",
    "id_pai": "ESP-GOV-0035",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um órgão público estadual pretende contratar uma solução de inovação tecnológica que ainda não sabe especificar, dialogando com licitantes previamente selecionados para desenvolver alternativas capazes de atender à necessidade. Pela Lei 14.133/2021, a modalidade adequada é",
  "imagem": null,
  "alternativas": {
    "A": "pregão.",
    "B": "diálogo competitivo.",
    "C": "concurso.",
    "D": "leilão.",
    "E": "tomada de preços."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O diálogo competitivo é destinado a contratações de inovação técnica ou tecnológica em que a Administração dialoga com licitantes pré-selecionados para desenvolver alternativas.\n\n- **A** (errada): para bens e serviços comuns, com especificações usuais de mercado.\n- **B** (correta): inovação com diálogo com licitantes pré-selecionados.\n- **C** (errada): escolha de trabalho técnico, científico ou artístico, com prêmio.\n- **D** (errada): alienação de bens.\n- **E** (errada): foi extinta pela Lei 14.133/2021.\n\nRevisar: Apostila 03 §19 – Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022.",
  "tags": [
    "lei-14133",
    "contratacoes-de-tic",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V044",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Lei 14.133/2021: critérios de julgamento",
  "ref_apostila": {
    "modulo": "03",
    "secao": "19",
    "titulo": "Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#19. Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §19 – Q1",
    "id_pai": "ESP-GOV-0035",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São critérios de julgamento previstos na Lei 14.133/2021:",
  "imagem": null,
  "alternativas": {
    "A": "menor preço, convite, concorrência e pregão.",
    "B": "melhor técnica, menor prazo, maior experiência e sorteio.",
    "C": "maior lance, menor lance, tomada de preços e leilão.",
    "D": "preço global, preço unitário, empreitada e tarefa.",
    "E": "menor preço, maior desconto, técnica e preço e maior retorno econômico."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Critérios: menor preço; maior desconto; melhor técnica ou conteúdo artístico; técnica e preço; maior lance (leilão); maior retorno econômico.\n\n- **A** (errada): convite foi extinto; concorrência e pregão são modalidades.\n- **B** (errada): menor prazo, maior experiência e sorteio não são critérios de julgamento.\n- **C** (errada): tomada de preços foi extinta; leilão é modalidade.\n- **D** (errada): são regimes de execução, não critérios de julgamento.\n- **E** (correta): constam do rol da lei.\n\nRevisar: Apostila 03 §19 – Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022.",
  "tags": [
    "lei-14133",
    "contratacoes-de-tic",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V045",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "IN SGD/ME 94/2022: artefatos",
  "ref_apostila": {
    "modulo": "03",
    "secao": "19",
    "titulo": "Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#19. Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §19 – Q2",
    "id_pai": "ESP-GOV-0036",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na IN SGD/ME 94/2022, o documento que dá início ao planejamento da contratação de TIC, formalizando a necessidade da área requisitante, é o",
  "imagem": null,
  "alternativas": {
    "A": "Estudo Técnico Preliminar (ETP).",
    "B": "Termo de Referência (TR).",
    "C": "Instrumento de Medição de Resultado (IMR).",
    "D": "Documento de Formalização da Demanda (DFD).",
    "E": "Plano Diretor de TIC (PDTIC)."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** O DFD (Documento de Formalização da Demanda) formaliza a necessidade; o ETP analisa soluções e justifica a escolhida; o TR detalha o objeto; o IMR mede resultados na gestão do contrato.\n\n- **A** (errada): vem depois e analisa as soluções.\n- **B** (errada): detalha o objeto e os modelos de execução e gestão.\n- **C** (errada): é usado na gestão do contrato.\n- **D** (correta): inicia o planejamento.\n- **E** (errada): é instrumento de planejamento tático do órgão, não artefato de uma contratação.\n\nRevisar: Apostila 03 §19 – Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022.",
  "tags": [
    "in-94-2022",
    "contratacoes-de-tic",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V046",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "IN SGD/ME 94/2022: fases e papéis",
  "ref_apostila": {
    "modulo": "03",
    "secao": "19",
    "titulo": "Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#19. Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §19 – Q2",
    "id_pai": "ESP-GOV-0036",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo a IN SGD/ME 94/2022, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "a gestão do contrato envolve o gestor do contrato e os fiscais técnico, requisitante e administrativo.",
    "B": "a contratação tem duas fases: licitação e pagamento.",
    "C": "a equipe de planejamento é formada apenas por integrantes técnicos de TI.",
    "D": "o mapa de gerenciamento de riscos é elaborado somente após a assinatura do contrato.",
    "E": "o alinhamento ao PDTIC é dispensado em contratações de TIC."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** A IN tem três fases: planejamento da contratação, seleção do fornecedor e gestão do contrato. A equipe de planejamento tem integrantes requisitante, técnico e administrativo; a gestão envolve o gestor e os fiscais técnico, requisitante e administrativo.\n\n- **A** (correta): papéis da fase de gestão.\n- **B** (errada): são três fases: planejamento, seleção e gestão.\n- **C** (errada): inclui integrantes requisitante, técnico e administrativo.\n- **D** (errada): é artefato da fase de planejamento.\n- **E** (errada): a IN exige alinhamento com o PDTIC.\n\nRevisar: Apostila 03 §19 – Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022.",
  "tags": [
    "in-94-2022",
    "contratacoes-de-tic",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V047",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Lei 13.303/2016 x Lei 14.133/2021",
  "ref_apostila": {
    "modulo": "03",
    "secao": "19",
    "titulo": "Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#19. Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §19 – Q3",
    "id_pai": "ESP-GOV-0037",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Quanto ao regime de licitações e contratos aplicável, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "a Lei 14.133/2021 aplica-se integralmente às empresas estatais, revogando a Lei 13.303/2016.",
    "B": "autarquias e fundações públicas seguem a Lei 13.303/2016.",
    "C": "a Lei 13.303/2016 rege apenas os municípios.",
    "D": "sociedades de economia mista, como bancos estaduais, seguem principalmente a Lei 13.303/2016, que a Lei 14.133/2021 ressalva.",
    "E": "sociedades de economia mista não precisam licitar."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** A Lei 14.133/2021 rege a administração direta, autárquica e fundacional; empresas públicas e sociedades de economia mista, como o Banestes, seguem principalmente a Lei 13.303/2016 (a 14.133 as exclui no art. 1º, § 1º).\n\n- **A** (errada): a 13.303 continua vigente para as estatais.\n- **B** (errada): seguem a Lei 14.133/2021.\n- **C** (errada): rege empresas públicas e sociedades de economia mista.\n- **D** (correta): regra correta.\n- **E** (errada): licitam, segundo a Lei 13.303/2016.\n\nRevisar: Apostila 03 §19 – Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022.",
  "tags": [
    "lei-14133",
    "lei-13303",
    "contratacoes-de-tic",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V048",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Contratos de TIC: pagamento por resultados",
  "ref_apostila": {
    "modulo": "03",
    "secao": "19",
    "titulo": "Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#19. Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §19 – Q4",
    "id_pai": "ESP-GOV-0038",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em contrato de desenvolvimento de software regido pela IN SGD/ME 94/2022, a entrega de um módulo atrasou e apresentou defeitos acima do nível mínimo pactuado. A consequência prevista no modelo de gestão do contrato é",
  "imagem": null,
  "alternativas": {
    "A": "o pagamento integral, pois o contrato remunera as horas efetivamente trabalhadas pela equipe.",
    "B": "a conversão automática do contrato em remuneração por postos de trabalho.",
    "C": "a revisão do PDTIC antes de qualquer medida contratual.",
    "D": "a dispensa de medição, por se tratar de serviço intelectual.",
    "E": "o ajuste (glosa) do pagamento conforme os indicadores do Instrumento de Medição de Resultado, sem prejuízo de sanções cabíveis."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O contrato deve prever pagamento por resultados, medido pelo IMR com níveis mínimos de serviço; quando não são atingidos, aplicam-se glosas (ajustes no pagamento) e, se for o caso, sanções.\n\n- **A** (errada): a regra é vedar a remuneração por horas trabalhadas.\n- **B** (errada): remuneração por postos é, em regra, vedada.\n- **C** (errada): o PDTIC é planejamento do órgão; a medida contratual é a glosa.\n- **D** (errada): a medição por resultados é exigida.\n- **E** (correta): pagamento vinculado a resultados.\n\nRevisar: Apostila 03 §19 – Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022.",
  "tags": [
    "in-94-2022",
    "imr",
    "contratacoes-de-tic",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V049",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Critérios de desempenho e conformidade em contratações de TIC",
  "ref_apostila": {
    "modulo": "03",
    "secao": "19",
    "titulo": "Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#19. Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §19 – Q4",
    "id_pai": "ESP-GOV-0038",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em contratações de serviços de TIC, constitui critério de desempenho adequado para compor o Instrumento de Medição de Resultado (IMR):",
  "imagem": null,
  "alternativas": {
    "A": "quantidade de horas registradas pelos profissionais alocados.",
    "B": "percentual de entregas no prazo e densidade de defeitos encontrados na homologação, com metas e faixas de ajuste de pagamento.",
    "C": "número de profissionais presentes nas dependências do órgão.",
    "D": "grau de satisfação pessoal do fiscal com a empresa, sem critério definido.",
    "E": "quantidade de reuniões realizadas com a equipe da contratada."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O IMR usa indicadores objetivos de resultado, como prazo de entrega, qualidade (defeitos), disponibilidade, com níveis mínimos e faixas de ajuste de pagamento.\n\n- **A** (errada): mede esforço, não resultado; remuneração por horas é vedada em regra.\n- **B** (correta): indicadores objetivos de resultado.\n- **C** (errada): equivale a postos de trabalho.\n- **D** (errada): não é objetivo nem mensurável.\n- **E** (errada): não mede resultado do serviço.\n\nRevisar: Apostila 03 §19 – Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022.",
  "tags": [
    "in-94-2022",
    "imr",
    "contratacoes-de-tic",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V050",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Lei 14.133/2021: fases da licitação",
  "ref_apostila": {
    "modulo": "03",
    "secao": "19",
    "titulo": "Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#19. Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §19 – Q5",
    "id_pai": "ESP-GOV-0039",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Pela Lei 14.133/2021, em regra, a fase de julgamento",
  "imagem": null,
  "alternativas": {
    "A": "sucede a habilitação de todos os licitantes, como regra obrigatória.",
    "B": "ocorre depois da homologação.",
    "C": "antecede a habilitação, de modo que só o licitante mais bem classificado tem os documentos de habilitação analisados.",
    "D": "antecede a divulgação do edital.",
    "E": "ocorre na fase preparatória, junto com o estudo técnico preliminar."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Ordem: preparatória → divulgação do edital → propostas e lances → julgamento → habilitação → recursal → homologação. A regra é julgar antes de habilitar.\n\n- **A** (errada): isso era a regra da lei antiga; agora é exceção.\n- **B** (errada): a homologação é a última fase.\n- **C** (correta): julgamento antes da habilitação.\n- **D** (errada): o julgamento depende das propostas, apresentadas após a divulgação.\n- **E** (errada): a fase preparatória é de planejamento.\n\nRevisar: Apostila 03 §19 – Contratações de TIC: Lei 14.133/2021 e IN SGD/ME 94/2022.",
  "tags": [
    "lei-14133",
    "contratacoes-de-tic",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V051",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "TOGAF: ADM",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §20 – Q1",
    "id_pai": "ESP-GOV-0040",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No ADM do TOGAF, a fase em que se elabora o plano detalhado de implementação e migração, priorizando os projetos e definindo as arquiteturas de transição, é a",
  "imagem": null,
  "alternativas": {
    "A": "Fase F – Planejamento da Migração.",
    "B": "Fase A – Visão da Arquitetura.",
    "C": "Fase D – Arquitetura de Tecnologia.",
    "D": "Fase G – Governança da Implementação.",
    "E": "Fase H – Gestão de Mudanças na Arquitetura."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Fases: Preliminar; A Visão; B Negócio; C Sistemas de Informação; D Tecnologia; E Oportunidades e Soluções; F Planejamento da Migração; G Governança da Implementação; H Gestão de Mudanças; centro: Gestão de Requisitos.\n\n- **A** (correta): plano de implementação e migração.\n- **B** (errada): define escopo, stakeholders e visão de alto nível.\n- **C** (errada): trata da arquitetura tecnológica.\n- **D** (errada): supervisiona a implementação conforme a arquitetura.\n- **E** (errada): trata de mudanças na arquitetura já implantada.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "togaf",
    "arquitetura-corporativa",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V052",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "TOGAF e arquitetura corporativa",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §20 – Q1",
    "id_pai": "ESP-GOV-0040",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o TOGAF e a arquitetura corporativa, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o TOGAF é publicado pela ISACA e integra o COBIT 2019.",
    "B": "o ADM é um ciclo sequencial e linear, executado uma única vez.",
    "C": "a arquitetura de sistemas de informação abrange negócio e tecnologia.",
    "D": "a arquitetura corporativa trata apenas da infraestrutura de servidores e redes.",
    "E": "os quatro domínios de arquitetura são negócio, dados, aplicação e tecnologia, e a gestão de requisitos fica no centro do ADM, alimentando todas as fases."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** O TOGAF (The Open Group; edição atual: TOGAF Standard, 10ª edição, 2022) trabalha com quatro domínios — negócio, dados, aplicação e tecnologia — e tem a gestão de requisitos no centro do ADM, alimentando todas as fases.\n\n- **A** (errada): é do The Open Group.\n- **B** (errada): é iterativo.\n- **C** (errada): abrange dados e aplicação.\n- **D** (errada): abrange negócio, dados, aplicações e tecnologia.\n- **E** (correta): afirmação correta.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "togaf",
    "arquitetura-corporativa",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V053",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "SLA, OLA e contratos de apoio",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §20 – Q2",
    "id_pai": "ESP-GOV-0041",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O provedor interno de TI de um banco prometeu às áreas de negócio disponibilidade de 99,9% para o internet banking. Para isso, firmou acordo com a operadora de telecomunicações que fornece os links de dados. Esse acordo com a operadora é um",
  "imagem": null,
  "alternativas": {
    "A": "acordo de nível de serviço (SLA).",
    "B": "acordo de nível operacional (OLA).",
    "C": "contrato de apoio (UC – Underpinning Contract).",
    "D": "requisito de nível de serviço (SLR).",
    "E": "termo de confidencialidade (NDA)."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** SLA: provedor × cliente. OLA: entre equipes internas do provedor. UC (contrato de apoio): provedor × fornecedor externo.\n\n- **A** (errada): o SLA é com o cliente (áreas de negócio).\n- **B** (errada): OLA é entre equipes internas.\n- **C** (correta): acordo com fornecedor externo.\n- **D** (errada): SLR expressa requisitos do cliente, antes do SLA.\n- **E** (errada): trata de sigilo, não de níveis de serviço.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "sla",
    "ola",
    "uc",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V054",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Gestão de níveis de serviço",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §20 – Q2",
    "id_pai": "ESP-GOV-0041",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O SLA do serviço de consulta de extratos estabelece disponibilidade mínima de 99,5% ao mês. Em um mês de 30 dias, o tempo máximo de indisponibilidade admitido, sem violar o SLA, é de",
  "imagem": null,
  "alternativas": {
    "A": "43 minutos e 12 segundos.",
    "B": "5 horas.",
    "C": "7 horas e 12 minutos.",
    "D": "3 horas e 36 minutos.",
    "E": "36 minutos."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Mês de 30 dias = 43.200 minutos. Indisponibilidade admitida = 0,5% × 43.200 = 216 minutos = 3 h 36 min.\n\n- **A** (errada): corresponde a 99,9% (0,1% do mês).\n- **B** (errada): arredonda 0,5% para 5 horas, sem a conta.\n- **C** (errada): corresponde a 99% (1% do mês).\n- **D** (correta): 0,5% de 43.200 min = 216 min.\n- **E** (errada): esquece as 3 horas, convertendo errado 216 min.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "sla",
    "calculo",
    "disponibilidade",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V055",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "PETIC e PDTIC",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §20 – Q3",
    "id_pai": "ESP-GOV-0042",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre os instrumentos de planejamento de TIC, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o PDTIC é instrumento estratégico que substitui o planejamento estratégico institucional.",
    "B": "o PETIC define objetivos e estratégias de TIC de longo prazo alinhados ao PEI, e o PDTIC, de nível tático, detalha necessidades, metas, ações, investimentos e riscos.",
    "C": "o PETIC é um plano operacional com a escala de plantão da equipe de TI.",
    "D": "o PDTIC dispensa o inventário de necessidades, que é feito apenas no ETP de cada contratação.",
    "E": "o PEI é elaborado pela área de TI a partir do PDTIC."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** PEI (estratégico da organização) → PETIC (estratégico de TIC, alinhado ao PEI) → PDTIC (tático: diagnóstico, inventário de necessidades, plano de metas e ações, investimentos, pessoal e riscos, para 2 a 4 anos).\n\n- **A** (errada): o PDTIC é tático e deriva do PEI/PETIC.\n- **B** (correta): hierarquia correta.\n- **C** (errada): é estratégico.\n- **D** (errada): o inventário de necessidades é parte do PDTIC.\n- **E** (errada): é o contrário: a TI se alinha ao PEI.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "petic",
    "pdtic",
    "planejamento-de-tic",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V056",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Gestão financeira de TI: CAPEX e OPEX",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §20 – Q4",
    "id_pai": "ESP-GOV-0043",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere os gastos de TI de um banco:\n\nI. Compra de servidores para o data center próprio.\nII. Assinatura mensal de uma plataforma SaaS de atendimento.\nIII. Aquisição de licença perpétua de um banco de dados.\nIV. Consumo de instâncias de nuvem cobradas por hora.\n\nSão classificados como CAPEX apenas os itens",
  "imagem": null,
  "alternativas": {
    "A": "I e III.",
    "B": "II e IV.",
    "C": "I, II e III.",
    "D": "III e IV.",
    "E": "I e IV."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** CAPEX: compra de ativos (servidores próprios, licenças perpétuas), depreciados ao longo do tempo. OPEX: custos recorrentes (assinaturas, nuvem pay-per-use, suporte).\n\n- **A** (correta): compra de ativos.\n- **B** (errada): são OPEX (recorrentes).\n- **C** (errada): a assinatura SaaS é OPEX.\n- **D** (errada): nuvem por hora é OPEX.\n- **E** (errada): nuvem por hora é OPEX; falta a licença perpétua.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "capex",
    "opex",
    "gestao-financeira-de-ti",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V057",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Gestão financeira de TI: ROI",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §20 – Q5",
    "id_pai": "ESP-GOV-0044",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um projeto de automação do atendimento custou R$ 250 mil e gerou ganhos de R$ 340 mil. O ROI do projeto é de",
  "imagem": null,
  "alternativas": {
    "A": "26,5%.",
    "B": "36%.",
    "C": "136%.",
    "D": "90%.",
    "E": "73,5%."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** ROI = (ganho − custo) ÷ custo = (340 − 250) ÷ 250 = 90 ÷ 250 = 0,36 = 36%.\n\n- **A** (errada): divide o lucro pelo ganho (90 ÷ 340).\n- **B** (correta): (340 − 250) ÷ 250.\n- **C** (errada): divide o ganho pelo custo (340 ÷ 250) sem subtrair o custo.\n- **D** (errada): usa o lucro em mil reais como se fosse percentual.\n- **E** (errada): divide o custo pelo ganho (250 ÷ 340).\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "roi",
    "calculo",
    "gestao-financeira-de-ti",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V058",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Gestão financeira de TI: ROI",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §20 – Q5",
    "id_pai": "ESP-GOV-0044",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A implantação de um sistema antifraude exigiu investimento de R$ 400 mil e deve gerar economia de R$ 150 mil por ano durante 3 anos. Desconsiderando o valor do dinheiro no tempo, o ROI do projeto ao final dos 3 anos é de",
  "imagem": null,
  "alternativas": {
    "A": "37,5%.",
    "B": "112,5%.",
    "C": "12,5%.",
    "D": "11,1%.",
    "E": "−62,5%."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Ganho total = 3 × 150 = 450 mil. ROI = (450 − 400) ÷ 400 = 50 ÷ 400 = 12,5%.\n\n- **A** (errada): usa o ganho de um único ano (150 ÷ 400).\n- **B** (errada): divide o ganho total pelo investimento sem subtrair o custo (450 ÷ 400).\n- **C** (correta): (450 − 400) ÷ 400.\n- **D** (errada): divide o lucro pelo ganho total (50 ÷ 450).\n- **E** (errada): considera apenas um ano de economia: (150 − 400) ÷ 400.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "roi",
    "calculo",
    "gestao-financeira-de-ti",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V059",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Gestão financeira de TI: ROI",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 03 §20 – Q5",
    "id_pai": "ESP-GOV-0044",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Dois projetos concorrem no portfólio de TI. O projeto P1 custa R$ 120 mil e gera ganho de R$ 180 mil; o projeto P2 custa R$ 300 mil e gera ganho de R$ 420 mil. Considerando apenas o ROI, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "P2 tem ROI maior, porque gera lucro absoluto maior.",
    "B": "os dois projetos têm o mesmo ROI, de 50%.",
    "C": "P1 tem ROI de 150% e P2 de 140%.",
    "D": "P1 tem ROI de 50%, superior aos 40% de P2, embora P2 gere maior lucro absoluto.",
    "E": "P1 tem ROI de 33% e P2 de 29%."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** ROI P1 = (180 − 120) ÷ 120 = 50%. ROI P2 = (420 − 300) ÷ 300 = 40%. P1 tem ROI maior, embora P2 tenha lucro absoluto maior (120 mil contra 60 mil).\n\n- **A** (errada): ROI é relativo ao custo: 40% < 50%.\n- **B** (errada): P2 tem 40%.\n- **C** (errada): divide ganho por custo sem subtrair o custo.\n- **D** (correta): contas corretas.\n- **E** (errada): divide o lucro pelo ganho, e não pelo custo.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "roi",
    "calculo",
    "portfolio",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V060",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Gestão financeira de TI: TCO",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 03 §20 (20.4, TCO)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para um servidor de banco de dados próprio, um banco estimou: aquisição de R$ 60 mil; licenças e suporte de R$ 15 mil por ano; energia e refrigeração de R$ 10 mil por ano; e custo de descarte de R$ 5 mil ao fim de 4 anos de uso. O custo total de propriedade (TCO) nos 4 anos é de",
  "imagem": null,
  "alternativas": {
    "A": "R$ 60 mil.",
    "B": "R$ 90 mil.",
    "C": "R$ 160 mil.",
    "D": "R$ 105 mil.",
    "E": "R$ 165 mil."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** TCO = aquisição + custos recorrentes no período + descarte = 60 + 4 × (15 + 10) + 5 = 60 + 100 + 5 = R$ 165 mil.\n\n- **A** (errada): considera só a aquisição; TCO inclui todos os custos do ciclo de vida.\n- **B** (errada): soma aquisição, um ano de custos recorrentes e descarte (60 + 25 + 5).\n- **C** (errada): esquece o custo de descarte.\n- **D** (errada): soma os custos anuais só uma vez e multiplica errado (60 + 15 + 10 + 20).\n- **E** (correta): 60 + 100 + 5.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "tco",
    "calculo",
    "gestao-financeira-de-ti"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V061",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Gestão financeira de TI: FinOps",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 03 §20 (20.4, FinOps)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A equipe de FinOps de um banco passou a etiquetar (tag) todos os recursos de nuvem por produto e centro de custo, publicando painéis de gasto para cada área. Depois, redimensionou instâncias superdimensionadas e desligou ambientes ociosos fora do horário comercial. Essas ações correspondem, respectivamente, às fases do FinOps",
  "imagem": null,
  "alternativas": {
    "A": "Informar e Otimizar.",
    "B": "Otimizar e Operar.",
    "C": "Operar e Informar.",
    "D": "Planejar e Executar.",
    "E": "Informar e Operar."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** FinOps: Informar (visibilidade e alocação de custos), Otimizar (rightsizing, instâncias reservadas, desligar ociosos) e Operar (governança contínua).\n\n- **A** (correta): visibilidade e depois otimização.\n- **B** (errada): a etiquetagem e os painéis são visibilidade (Informar).\n- **C** (errada): inverte e erra as duas fases.\n- **D** (errada): não são as fases do FinOps.\n- **E** (errada): rightsizing e desligar ociosos são Otimizar.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "finops",
    "nuvem",
    "gestao-financeira-de-ti"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V062",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Gestão de riscos de TI: ISO 31000:2018",
  "ref_apostila": {
    "modulo": "04",
    "secao": "21",
    "titulo": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#21. Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §21 (21.1, ISO 31000:2018)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo a ABNT NBR ISO 31000:2018, o processo de avaliação de riscos compreende",
  "imagem": null,
  "alternativas": {
    "A": "a identificação, o tratamento e a aceitação de riscos.",
    "B": "o escopo, o contexto e os critérios.",
    "C": "a identificação, a análise e a avaliação de riscos.",
    "D": "a comunicação, a consulta e o monitoramento.",
    "E": "a liderança, a integração e a concepção."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Processo: escopo, contexto e critérios → processo de avaliação de riscos (identificação, análise e avaliação) → tratamento; com comunicação e consulta, monitoramento e análise crítica, e registro e relato.\n\n- **A** (errada): tratamento é etapa posterior à avaliação.\n- **B** (errada): antecedem o processo de avaliação.\n- **C** (correta): as três etapas do processo de avaliação.\n- **D** (errada): são atividades contínuas que permeiam todo o processo.\n- **E** (errada): pertencem à estrutura (framework), não ao processo.\n\nRevisar: Apostila 04 §21 – Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017.",
  "tags": [
    "iso-31000",
    "riscos"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V063",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Gestão de riscos de TI: ISO 31000:2018",
  "ref_apostila": {
    "modulo": "04",
    "secao": "21",
    "titulo": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#21. Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 04 §21 (21.1, ISO 31000:2018)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre a ABNT NBR ISO 31000:2018, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "aplica-se exclusivamente a riscos de segurança da informação.",
    "B": "considera risco apenas como evento de efeito negativo.",
    "C": "é norma certificável de sistema de gestão de riscos.",
    "D": "tem como centro da estrutura a auditoria externa independente.",
    "E": "define risco como o efeito da incerteza nos objetivos, o qual pode ser positivo ou negativo."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** A norma tem três partes (princípios, estrutura e processo). Define risco como efeito da incerteza nos objetivos, que pode ser positivo ou negativo. Os princípios têm no centro a criação e proteção de valor; a estrutura tem no centro liderança e comprometimento.\n\n- **A** (errada): aplica-se a qualquer organização e tipo de risco; a de segurança é a ISO/IEC 27005.\n- **B** (errada): o efeito pode ser positivo ou negativo.\n- **C** (errada): é norma de diretrizes, não de requisitos certificáveis.\n- **D** (errada): o centro da estrutura é liderança e comprometimento.\n- **E** (correta): definição da norma.\n\nRevisar: Apostila 04 §21 – Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017.",
  "tags": [
    "iso-31000",
    "riscos"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V064",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Gestão de portfólio de projetos e produtos digitais",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 03 §20 (20.5, gestão de portfólio)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A gestão de portfólio de projetos e produtos digitais, em uma organização, consiste em",
  "imagem": null,
  "alternativas": {
    "A": "gerenciar o cronograma detalhado de um único projeto até seu encerramento.",
    "B": "manter o inventário de servidores e licenças de software.",
    "C": "registrar e tratar incidentes dos produtos já em operação.",
    "D": "selecionar, priorizar e balancear projetos e produtos conforme o valor e o alinhamento estratégico, acompanhando os investimentos ao longo do tempo.",
    "E": "aprovar automaticamente todos os projetos com ROI positivo, sem comparação entre eles."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Portfólio seleciona e prioriza projetos e produtos pelo valor e pelo alinhamento estratégico, balanceando investimentos e riscos; difere de gerenciar um projeto isolado. No COBIT 2019, corresponde a APO05.\n\n- **A** (errada): isso é gerenciamento de projeto.\n- **B** (errada): isso é gestão de ativos.\n- **C** (errada): isso é gerenciamento de incidentes.\n- **D** (correta): definição de gestão de portfólio.\n- **E** (errada): portfólio compara e prioriza, considerando estratégia, riscos e capacidade.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "portfolio",
    "governanca-de-ti"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V065",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Gestão de stakeholders e comunicação",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 03 §20 (20.5, stakeholders e comunicação)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na matriz poder × interesse usada na gestão de partes interessadas de um projeto de TI, um diretor com alto poder sobre o projeto, mas pouco interesse no dia a dia, deve, em regra, ser",
  "imagem": null,
  "alternativas": {
    "A": "gerenciado de perto, com reuniões diárias de acompanhamento.",
    "B": "mantido satisfeito, com informações objetivas nos marcos relevantes.",
    "C": "apenas monitorado, sem comunicação ativa.",
    "D": "mantido informado com detalhes técnicos de cada tarefa.",
    "E": "excluído da comunicação do projeto, por não demonstrar interesse."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Na matriz poder × interesse: alto poder e alto interesse → gerenciar de perto; alto poder e baixo interesse → manter satisfeito; baixo poder e alto interesse → manter informado; baixo poder e baixo interesse → monitorar.\n\n- **A** (errada): é o tratamento para alto poder e alto interesse.\n- **B** (correta): quadrante alto poder × baixo interesse.\n- **C** (errada): é o tratamento para baixo poder e baixo interesse.\n- **D** (errada): é o tratamento para baixo poder e alto interesse.\n- **E** (errada): o alto poder exige mantê-lo satisfeito.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "stakeholders",
    "comunicacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-GOV-V066",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Gestão e Governança de TI",
  "topico": "Redação técnica e normativa em TIC",
  "ref_apostila": {
    "modulo": "03",
    "secao": "20",
    "titulo": "Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps",
    "link": "[[03 - Conhecimentos Bancários e Governança de TIC#20. Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 03 §20 (20.5, redação técnica e normativa)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Na redação de uma norma interna de TIC ou de um documento de requisitos, é boa prática",
  "imagem": null,
  "alternativas": {
    "A": "usar \"deve\" para obrigações, definir os termos empregados e numerar os itens para permitir rastreabilidade.",
    "B": "usar sinônimos variados para o mesmo conceito, tornando o texto menos repetitivo.",
    "C": "empregar expressões vagas, como \"rápido\" e \"fácil\", para não engessar a implementação.",
    "D": "misturar vários requisitos na mesma frase, para reduzir o tamanho do documento.",
    "E": "evitar numeração, que dificulta a leitura corrida."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Redação técnica: clareza e objetividade, termos definidos, verbos no imperativo ou \"deve\" para obrigações, numeração rastreável e explicação do motivo (rationale).\n\n- **A** (correta): práticas citadas.\n- **B** (errada): a variação de termos gera ambiguidade; usa-se sempre o termo definido.\n- **C** (errada): requisitos devem ser objetivos e verificáveis.\n- **D** (errada): cada requisito deve ser individual e identificável.\n- **E** (errada): numeração permite referência e rastreabilidade.\n\nRevisar: Apostila 03 §20 – Governança e gestão de TI complementar: TOGAF, PETIC/PDTIC, SLA/OLA, TCO/ROI/CAPEX/OPEX/FinOps.",
  "tags": [
    "redacao-tecnica",
    "documentacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-BD-V001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "PL/pgSQL",
  "ref_apostila": {
    "modulo": "05",
    "secao": "27",
    "titulo": "PL/pgSQL, PostgreSQL 14/15, Oracle 19c e H2 Database",
    "link": "[[05 - Bancos de Dados e Linguagens#27. PL/pgSQL, PostgreSQL 14/15, Oracle 19c e H2 Database]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 05 §27 – Q1",
    "id_pai": "ESP-BD-0103",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Considere, no PostgreSQL, a tabela lancamento(cliente_id, valor) com as linhas (1, 200), (1, -50), (1, -30) e (2, 80), e o código a seguir.\n\n```sql\nCREATE OR REPLACE FUNCTION saldo_cliente(p_id INTEGER)\nRETURNS NUMERIC LANGUAGE plpgsql AS $$\nDECLARE\n    v_saldo NUMERIC := 0;\nBEGIN\n    SELECT SUM(valor) INTO v_saldo\n      FROM lancamento\n     WHERE cliente_id = p_id;\n    IF v_saldo IS NULL THEN\n        RETURN -1;\n    END IF;\n    RETURN v_saldo;\nEND;\n$$;\n\nSELECT saldo_cliente(1), saldo_cliente(3);\n```\n\nO resultado do último SELECT é, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "120 e -1.",
    "B": "120 e 0.",
    "C": "200 e -1.",
    "D": "120 e NULL.",
    "E": "120 e um erro de execução, pois o SELECT INTO não encontra linhas para o cliente 3."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Para o cliente 1, SUM(valor) = 200 − 50 − 30 = 120. Para o cliente 3, que não tem lançamentos, SUM sobre zero linhas devolve uma linha com NULL; o SELECT INTO atribui NULL a v_saldo e o IF devolve −1.\n\n- **A** (correta): 120 para o cliente 1; −1 porque SUM sem linhas é NULL.\n- **B** (errada): 0 seria o valor inicial de v_saldo, mas o SELECT INTO sobrescreve a variável com NULL.\n- **C** (errada): considera só o primeiro lançamento; SUM soma os três.\n- **D** (errada): o IF trata o NULL e retorna −1.\n- **E** (errada): uma agregação sem GROUP BY sempre devolve uma linha; não há erro.\n\nNo PL/pgSQL, um SELECT sem destino (INTO) dentro da função causaria erro; para descartar o resultado usa-se PERFORM.\n\nRevisar: Apostila 05 §27 – PL/pgSQL, PostgreSQL 14/15, Oracle 19c e H2 Database.",
  "tags": [
    "pl-pgsql",
    "postgresql",
    "sql",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-BD-V002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Funções de janela (ROW_NUMBER, RANK, DENSE_RANK)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §7 (7.10, funções de janela)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "A tabela conta(numero, saldo) contém as linhas (10, 500), (11, 300), (12, 500), (13, 100) e (14, 300). Considere a consulta a seguir.\n\n```sql\nSELECT numero,\n       ROW_NUMBER() OVER (ORDER BY saldo DESC, numero) AS rn,\n       RANK()       OVER (ORDER BY saldo DESC)         AS rk,\n       DENSE_RANK() OVER (ORDER BY saldo DESC)         AS drk\n  FROM conta\n WHERE numero = 13 OR numero = 14;\n```\n\nO resultado da consulta é:",
  "imagem": null,
  "alternativas": {
    "A": "14 | 4 | 3 | 2 e 13 | 5 | 5 | 3.",
    "B": "14 | 1 | 1 | 1 e 13 | 2 | 3 | 2.",
    "C": "14 | 1 | 1 | 1 e 13 | 2 | 2 | 2.",
    "D": "14 | 4 | 3 | 3 e 13 | 5 | 5 | 5.",
    "E": "apenas a linha 14 | 1 | 1 | 1, pois funções de janela reduzem o número de linhas."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** O WHERE é avaliado antes das funções de janela: só as contas 13 e 14 entram na janela. Ordenadas por saldo decrescente, 14 (300) fica em 1º e 13 (100) em 2º nas três funções, pois não há empate entre elas.\n\n- **A** (errada): seria o resultado se a janela fosse calculada sobre as cinco contas, antes do WHERE.\n- **B** (errada): sem empate, RANK não salta posições.\n- **C** (correta): a janela só enxerga as duas linhas filtradas.\n- **D** (errada): além de ignorar o WHERE, DENSE_RANK não deixa lacunas: seriam 2 e 3.\n- **E** (errada): funções de janela não agregam linhas, ao contrário do GROUP BY.\n\nPara numerar sobre a tabela inteira e só depois filtrar, coloca-se a consulta com as funções de janela numa subconsulta ou CTE e aplica-se o filtro fora dela.\n\nRevisar: Apostila 05 §7 – SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL).",
  "tags": [
    "sql",
    "funcoes-de-janela"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-BD-V003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "CTE (WITH) e consultas recursivas",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 05 §7 (7.10, CTE recursiva)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A tabela funcionario(id, nome, id_gerente) contém: (1, Ana, NULL), (2, Bia, 1), (3, Caio, 1), (4, Duda, 2), (5, Enzo, 2) e (6, Fabi, 4). Considere a consulta PostgreSQL a seguir.\n\n```sql\nWITH RECURSIVE hierarquia (id, nome, nivel) AS (\n    SELECT id, nome, 1 FROM funcionario WHERE id_gerente IS NULL\n    UNION ALL\n    SELECT f.id, f.nome, h.nivel + 1\n      FROM funcionario f JOIN hierarquia h ON f.id_gerente = h.id\n)\nSELECT nivel, COUNT(*) FROM hierarquia GROUP BY nivel ORDER BY nivel;\n```\n\nO resultado, no formato (nivel, quantidade), é:",
  "imagem": null,
  "alternativas": {
    "A": "(1, 1), (2, 5).",
    "B": "(1, 1), (2, 2), (3, 3).",
    "C": "(1, 6).",
    "D": "(1, 1), (2, 2), (3, 2), (4, 1), (5, 0).",
    "E": "(1, 1), (2, 2), (3, 2), (4, 1)."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** A parte âncora traz Ana (nível 1). A cada passo recursivo entram os subordinados do nível anterior: Bia e Caio (nível 2), Duda e Enzo (nível 3) e Fabi (nível 4). Resultado: (1,1), (2,2), (3,2), (4,1).\n\n- **A** (errada): a recursão incrementa o nível a cada geração; não agrupa todos os subordinados no nível 2.\n- **B** (errada): Fabi é subordinada de Duda, logo está no nível 4.\n- **C** (errada): só a âncora tem nível 1; as linhas recursivas recebem nivel + 1.\n- **D** (errada): a recursão para quando o passo não devolve linhas; não há nível 5.\n- **E** (correta): Ana; Bia e Caio; Duda e Enzo; Fabi.\n\nNo PostgreSQL e no MySQL a recursão exige WITH RECURSIVE; no Oracle também existe CONNECT BY PRIOR. O PostgreSQL 14 acrescentou as cláusulas SEARCH e CYCLE às CTEs recursivas.\n\nRevisar: Apostila 05 §7 – SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL).",
  "tags": [
    "sql",
    "cte",
    "recursividade"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-BD-V004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Data Warehouse, OLAP e ETL",
  "ref_apostila": {
    "modulo": "05",
    "secao": "13",
    "titulo": "Data Warehouse, OLAP e ETL",
    "link": "[[05 - Bancos de Dados e Linguagens#13. Data Warehouse, OLAP e ETL]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 05 §13 – Q2",
    "id_pai": "ESP-BD-0088",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre modelagem dimensional e os esquemas estrela e floco de neve, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "No esquema estrela, as tabelas de dimensão são normalizadas até a 3FN para evitar redundância.",
    "B": "O saldo de conta é uma medida aditiva, podendo ser somado em todas as dimensões, inclusive no tempo.",
    "C": "No processo de Kimball, as dimensões são identificadas antes da declaração do grão da tabela fato.",
    "D": "No esquema floco de neve, as dimensões são normalizadas em várias tabelas, o que reduz a redundância, mas aumenta o número de junções nas consultas.",
    "E": "Uma dimensão conformada é aquela armazenada na própria tabela fato, sem tabela própria."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** No floco de neve as dimensões são normalizadas (menos redundância, mais junções); no estrela são desnormalizadas. Saldo de conta é medida semiaditiva, o grão se declara antes das dimensões e uma dimensão conformada é compartilhada entre fatos.\n\n- **A** (errada): no estrela as dimensões são desnormalizadas.\n- **B** (errada): saldo é semiaditivo: não se soma ao longo do tempo.\n- **C** (errada): a ordem é: processo de negócio, grão, dimensões e fatos.\n- **D** (correta): característica do floco de neve.\n- **E** (errada): isso é dimensão degenerada; a conformada é compartilhada entre fatos.\n\nRevisar: Apostila 05 §13 – Data Warehouse, OLAP e ETL.",
  "tags": [
    "data-warehouse",
    "modelagem-dimensional",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-BD-V005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "PL/pgSQL, PostgreSQL 14/15, Oracle 19c e H2 Database",
  "ref_apostila": {
    "modulo": "05",
    "secao": "27",
    "titulo": "PL/pgSQL, PostgreSQL 14/15, Oracle 19c e H2 Database",
    "link": "[[05 - Bancos de Dados e Linguagens#27. PL/pgSQL, PostgreSQL 14/15, Oracle 19c e H2 Database]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 05 §27 – Q5",
    "id_pai": "ESP-BD-0107",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre os produtos de banco de dados citados no edital, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "O H2 Database só funciona em modo servidor TCP e não aceita SQL padrão via JDBC.",
    "B": "O PostgreSQL 15 introduziu o comando MERGE, que combina INSERT, UPDATE e DELETE conforme a junção com uma origem.",
    "C": "O Oracle 19c é uma versão de inovação de curto prazo, sem suporte estendido.",
    "D": "No PostgreSQL, procedimentos criados com CREATE PROCEDURE não podem executar COMMIT nem ROLLBACK.",
    "E": "O PostgreSQL 15 passou a conceder a todos os usuários (PUBLIC) o privilégio CREATE no schema public."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** O PostgreSQL 15 introduziu o comando MERGE; antes dele o upsert era feito com INSERT ... ON CONFLICT. O Oracle 19c é a versão de suporte de longo prazo da família 12.2, e o H2 é um banco em Java usado sobretudo em testes.\n\n- **A** (errada): o H2 tem modos embutido, servidor e em memória e aceita SQL via JDBC.\n- **B** (correta): novidade do PostgreSQL 15.\n- **C** (errada): é a versão de suporte de longo prazo da família 12.2.\n- **D** (errada): procedimentos podem controlar transações; funções é que não podem.\n- **E** (errada): foi o contrário: o 15 revogou esse privilégio de PUBLIC.\n\nRevisar: Apostila 05 §27 – PL/pgSQL, PostgreSQL 14/15, Oracle 19c e H2 Database.",
  "tags": [
    "postgresql",
    "oracle",
    "h2",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-WEB-V001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "REST: idempotência e status HTTP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 06 §10 – Q3",
    "id_pai": "ESP-WEB-0055",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O aplicativo de um banco envia POST /v1/transferencias e, por queda de conexão, não recebe a resposta. Para que o aplicativo possa reenviar a requisição sem risco de efetivar a transferência duas vezes, a solução adequada é",
  "imagem": null,
  "alternativas": {
    "A": "enviar no cabeçalho uma chave de idempotência gerada pelo cliente, que o servidor usa para reconhecer a repetição e devolver o resultado já processado.",
    "B": "trocar o método para GET, que é seguro e idempotente.",
    "C": "repetir a requisição imediatamente, já que o HTTP garante entrega única.",
    "D": "usar PATCH, que é sempre idempotente.",
    "E": "responder 202 Accepted, o que impede o cliente de reenviar a requisição."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** POST não é idempotente. APIs de pagamento usam uma chave de idempotência (cabeçalho Idempotency-Key) gerada pelo cliente: o servidor guarda a chave e, ao recebê-la de novo, devolve o resultado já processado em vez de criar outra transferência.\n\n- **A** (correta): padrão Idempotency-Key.\n- **B** (errada): GET não deve alterar estado; usá-lo para transferência viola a semântica HTTP.\n- **C** (errada): o HTTP não garante entrega única; o reenvio cria nova transferência.\n- **D** (errada): PATCH não é garantidamente idempotente.\n- **E** (errada): 202 indica processamento assíncrono; não evita duplicidade.\n\nRevisar: Apostila 06 §10 – Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP.",
  "tags": [
    "rest",
    "http",
    "idempotencia",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-WEB-V002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "OpenAPI e documentação de APIs REST",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §10 (10.8, OpenAPI)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A OpenAPI Specification (antigo Swagger), em projetos de APIs REST,",
  "imagem": null,
  "alternativas": {
    "A": "é um protocolo de transporte que substitui o HTTP nas APIs REST.",
    "B": "é obrigatória para que uma API seja considerada RESTful, segundo Fielding.",
    "C": "descreve, em JSON ou YAML, o contrato da API (caminhos, métodos, parâmetros, esquemas de dados e respostas), papel semelhante ao do WSDL nos serviços SOAP.",
    "D": "descreve apenas serviços SOAP e é publicada em registros UDDI.",
    "E": "define o formato binário Protocol Buffers usado pelo gRPC."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** A OpenAPI é um formato padronizado, em JSON ou YAML, para descrever o contrato de uma API REST (caminhos, métodos, parâmetros, esquemas e respostas). Serve de contrato de serviço, à semelhança do WSDL no SOAP, e permite gerar documentação, clientes e testes.\n\n- **A** (errada): OpenAPI é formato de descrição; o transporte continua HTTP.\n- **B** (errada): REST não exige descrição formal; OpenAPI é opcional.\n- **C** (correta): definição da OpenAPI.\n- **D** (errada): SOAP usa WSDL; OpenAPI é para APIs HTTP/REST.\n- **E** (errada): o contrato do gRPC fica em arquivos .proto.\n\nRevisar: Apostila 06 §10 – Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP.",
  "tags": [
    "rest",
    "openapi",
    "documentacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-WEB-V003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "REST: paginação, filtros e ordenação",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §10 (10.8, paginação, filtros e ordenação)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma API REST de extrato precisa devolver as transações de um período, 50 por página, da mais recente para a mais antiga. Segundo as boas práticas de projeto de URIs, a requisição adequada para obter a segunda página é",
  "imagem": null,
  "alternativas": {
    "A": "POST /v1/listarTransacoes com page=2 no corpo.",
    "B": "GET /v1/transacoes/pagina2/50/desc",
    "C": "DELETE /v1/transacoes?page=1, para que a próxima consulta comece na página 2.",
    "D": "GET /v1/getTransacoes?pagina=2, sem ordenação, pois REST proíbe parâmetros de ordenação.",
    "E": "GET /v1/transacoes?inicio=2026-10-01&page=2&size=50&sort=data,desc"
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Filtros, paginação e ordenação vão na query string de um recurso identificado por substantivo no plural, consultado com GET.\n\n- **A** (errada): usa verbo na URI e POST para leitura.\n- **B** (errada): parâmetros de paginação não são subrecursos.\n- **C** (errada): DELETE remove recursos; paginação não altera estado.\n- **D** (errada): verbo na URI e a ordenação pela query string é permitida.\n- **E** (correta): recurso no plural, GET e parâmetros na query string.\n\nRevisar: Apostila 06 §10 – Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP.",
  "tags": [
    "rest",
    "paginacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-WEB-V004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Versionamento de APIs",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 06 §18 (18.4, versionamento de APIs)",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A equipe de uma API pública de um banco precisa renomear um campo obrigatório da resposta, o que quebra clientes existentes. Segundo as práticas de versionamento de APIs e o versionamento semântico, deve-se",
  "imagem": null,
  "alternativas": {
    "A": "alterar a /v1 imediatamente, pois clientes devem acompanhar a última versão.",
    "B": "incrementar apenas a versão de correção (PATCH), já que é só um nome de campo.",
    "C": "incrementar a versão menor (MINOR), que no SemVer indica mudança incompatível.",
    "D": "publicar a mudança numa nova versão maior da API (por exemplo, /v2) e manter a /v1 durante um prazo de descontinuação comunicado aos clientes.",
    "E": "evitar qualquer versionamento, pois REST proíbe versões na URI e em cabeçalhos."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Mudança incompatível exige nova versão maior (por exemplo, de /v1 para /v2, na URI, em cabeçalho ou no media type), mantendo a versão antiga por um prazo de descontinuação (deprecation) comunicado aos clientes.\n\n- **A** (errada): quebra os clientes sem aviso.\n- **B** (errada): mudança incompatível incrementa a versão maior.\n- **C** (errada): MINOR indica funcionalidade compatível; incompatível é MAJOR.\n- **D** (correta): prática correta para mudança incompatível.\n- **E** (errada): a versão pode ir na URI, em cabeçalho ou no media type.\n\nRevisar: Apostila 06 §18 – Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento.",
  "tags": [
    "rest",
    "versionamento",
    "semver"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-WEB-V005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Acessibilidade digital: WCAG 2.1/2.2 e ABNT NBR 17225:2025",
  "ref_apostila": {
    "modulo": "07",
    "secao": "7",
    "titulo": "Acessibilidade digital: WCAG 2.1/2.2 e ABNT NBR 17225:2025",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#7. Acessibilidade digital: WCAG 2.1/2.2 e ABNT NBR 17225:2025]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 07 §7 – Q1",
    "id_pai": "ESP-WEB-0084",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre as WCAG 2.2, publicadas pelo W3C em outubro de 2023, é correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "substituiu os princípios perceptível, operável, compreensível e robusto por níveis de maturidade.",
    "B": "incluiu critério de nível AA que exige alvos de toque ou clique com pelo menos 24 × 24 pixels CSS, ou espaçamento equivalente.",
    "C": "acrescentou o critério 4.1.1 Análise (Parsing), que exige HTML sem erros de sintaxe.",
    "D": "reduziu o contraste mínimo de texto normal, no nível AA, para 3:1.",
    "E": "proíbe colar senhas nos campos de login, para evitar ataques automatizados."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** A WCAG 2.2 incluiu critérios como 2.5.8 (alvo mínimo de 24 × 24 pixels CSS, nível AA), 2.4.11 (foco não obscurecido) e 3.3.8 (autenticação acessível), e removeu o 4.1.1 (Análise). O contraste de texto normal no nível AA continua 4,5:1.\n\n- **A** (errada): os quatro princípios POUR continuam.\n- **B** (correta): critério 2.5.8.\n- **C** (errada): o 4.1.1 foi removido na 2.2.\n- **D** (errada): continua 4,5:1; 3:1 é para texto grande.\n- **E** (errada): a autenticação acessível pede justamente permitir colar a senha e usar gerenciadores.\n\nRevisar: Apostila 07 §7 – Acessibilidade digital: WCAG 2.1/2.2 e ABNT NBR 17225:2025.",
  "tags": [
    "acessibilidade",
    "wcag",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-WEB-V006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Acessibilidade digital: WCAG 2.1/2.2 e ABNT NBR 17225:2025",
  "ref_apostila": {
    "modulo": "07",
    "secao": "7",
    "titulo": "Acessibilidade digital: WCAG 2.1/2.2 e ABNT NBR 17225:2025",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#7. Acessibilidade digital: WCAG 2.1/2.2 e ABNT NBR 17225:2025]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 07 §7 – Q3",
    "id_pai": "ESP-WEB-0086",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A respeito da ABNT NBR 17225:2025, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "Classifica seus itens em requisitos, obrigatórios para a conformidade, e recomendações, sem adotar os níveis A, AA e AAA.",
    "B": "É uma tradução integral da WCAG 2.2, mantendo os níveis A, AA e AAA.",
    "C": "Aplica-se somente a sites de órgãos do governo federal, em substituição ao eMAG.",
    "D": "Recomenda o CAPTCHA visual como mecanismo preferencial, dispensando alternativas.",
    "E": "Trata apenas de contraste de cores, deixando de fora formulários e multimídia."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** A NBR 17225:2025 (março de 2025), elaborada sob coordenação do Ceweb.br, é a primeira norma brasileira de acessibilidade para conteúdo e aplicações web. Tem 146 itens classificados em requisitos e recomendações, sem os níveis A/AA/AAA, e dá suporte ao art. 63 da Lei Brasileira de Inclusão.\n\n- **A** (correta): estrutura da norma.\n- **B** (errada): não usa os níveis de conformidade da WCAG.\n- **C** (errada): o eMAG é o modelo do governo federal; a norma vale de forma geral.\n- **D** (errada): alerta que CAPTCHA deve ser usado com cautela e com alternativa.\n- **E** (errada): cobre teclado, imagens, cabeçalhos, formulários, multimídia e mais.\n\nRevisar: Apostila 07 §7 – Acessibilidade digital: WCAG 2.1/2.2 e ABNT NBR 17225:2025.",
  "tags": [
    "acessibilidade",
    "nbr-17225",
    "variacao"
  ],
  "embaralhavel": true,
  "status": "validada",
  "validacao": {
    "por": "agente-5",
    "em": "2026-11-13",
    "obs": "Conferida pelo agente 5 (resolvida sem o gabarito; criada por agente-3)."
  },
  "versao": 1
});

