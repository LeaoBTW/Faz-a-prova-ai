/*
 * Específicos – Banco de Dados
 * Gerado por tools/importar.py a partir das fontes do vault (2026-11-13).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 * Rodar o importador de novo sobrescreve este arquivo.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-BD-0001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Transações ACID e bloqueios",
  "ref_apostila": {
    "modulo": "05",
    "secao": "9",
    "titulo": "Transações, ACID e controle de concorrência",
    "link": "[[05 - Bancos de Dados e Linguagens#9. Transações, ACID e controle de concorrência]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q37",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 37
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere a propriedade de Isolamento das transações ACID nos sistemas gerenciadores de bancos de dados.\n\nUm mecanismo usualmente empregado para garantir a integridade dos dados em operações concorrentes atua por meio de operações de:",
  "imagem": null,
  "alternativas": {
    "A": "Cache;",
    "B": "Commit;",
    "C": "Lock;",
    "D": "Logging;",
    "E": "SyncPoint."
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
  "id": "ESP-BD-0002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Dependências funcionais",
  "ref_apostila": {
    "modulo": "05",
    "secao": "4",
    "titulo": "Dependências funcionais e normalização (1FN a 5FN, FNBC)",
    "link": "[[05 - Bancos de Dados e Linguagens#4. Dependências funcionais e normalização (1FN a 5FN, FNBC)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q41",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 41
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere um banco de dados que contém uma tabela com os atributos CPF, Nome, RG e Endereço, com milhões de registros. Sabe-se que cada pessoa tem seus próprios CPF e RG e um único nome, embora possa haver homônimos.\n\nSendo assim, a dependência funcional que NÃO existe entre os atributos dessa tabela é:",
  "imagem": null,
  "alternativas": {
    "A": "CPF → Nome",
    "B": "CPF → RG",
    "C": "Endereço → CPF",
    "D": "RG → Endereço",
    "E": "RG → Nome"
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
  "id": "ESP-BD-0003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL: produto cartesiano e GROUP BY",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q47",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 47
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-2021-T1",
  "enunciado": "Tomando como referência as tabelas T1, T2 e T3, descritas anteriormente, o comando SQL\n\n```sql\nselect t1.A, t2.C, sum(t3.E) soma\nfrom t1, t2, t3\nwhere t1.B > 2 and t2.D < 55 and t3.E > 19\ngroup by t1.A, t2.C\n```\n\nproduz um resultado que, sem contar a linha de títulos, exibe:",
  "imagem": null,
  "alternativas": {
    "A": "duas linhas;",
    "B": "três linhas;",
    "C": "quatro linhas;",
    "D": "seis linhas;",
    "E": "nove linhas."
  },
  "gabarito": "A",
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
  "id": "ESP-BD-0004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL: NOT EXISTS e NULL",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q48",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 48
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-2021-T1",
  "enunciado": "Tomando como referência as tabelas T1, T2 e T3, descritas anteriormente, o comando SQL\n\n```sql\nselect t1.*\nfrom T1\nwhere not exists\n(select * from T2, T3\nwhere t1.A = t3.A and t2.C = t3.C\nand t3.E is null)\n```\n\nproduz como resultado somente a(s) linha(s):",
  "imagem": null,
  "alternativas": {
    "A": "1, 3",
    "B": "1, 3 / 4, 2",
    "C": "4, 2",
    "D": "1, 3 / 2, 2 / 4, 2",
    "E": "2, 2 / 4, 2"
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
  "id": "ESP-BD-0005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Chaves estrangeiras (DDL)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "6",
    "titulo": "SQL – DDL, DCL e TCL",
    "link": "[[05 - Bancos de Dados e Linguagens#6. SQL – DDL, DCL e TCL]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q49",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 49
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-2021-T1",
  "enunciado": "Suponha que as tabelas T1 e T2, descritas anteriormente, tenham sido declaradas com as colunas A e C, respectivamente, definidas como chaves primárias.\n\nPara tanto, a definição de chaves estrangeiras na tabela T3 deveria ter como base o script:",
  "imagem": null,
  "alternativas": {
    "A": "```\nforeign key (A) references T1(A),\nforeign key (C) references T2(C)\n```",
    "B": "```\nforeign key (A, C) references T1(A), T2(C)\n```",
    "C": "```\nforeign key T1(A) for A,\nforeign key T2(C) for C\n```",
    "D": "```\nforeign key T1(A) for A, T2(C) for C\n```",
    "E": "```\nforeign key T1(A) references (A),\nforeign key T2(C) references (C)\n```"
  },
  "gabarito": "A",
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
  "id": "ESP-BD-0006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL: DELETE com subconsulta",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q50",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 50
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-2021-T1",
  "enunciado": "Para as tabelas T1 e T3, descritas anteriormente, a execução do comando SQL\n\n```sql\ndelete from T3\nwhere E = (select min(E) from T3)\nand (select count(*) from T3 t\nwhere t3.A = t.A) > 1\n```\n\ncausaria na instância da tabela T3 a:",
  "imagem": null,
  "alternativas": {
    "A": "preservação de todas as linhas;",
    "B": "remoção da linha 2, 110, 10;",
    "C": "remoção da linha 2, 120, 10;",
    "D": "remoção das linhas 2, 120, 10 / 2, 110, 10;",
    "E": "remoção de todas as linhas."
  },
  "gabarito": "D",
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
  "id": "ESP-BD-0007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL: comparação com NULL",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q51",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 51
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-2021-T1",
  "enunciado": "Para a tabela T3, descrita anteriormente, considere os comandos SQL a seguir.\n\n```sql\n-- I.\nselect * from T3 where E <> NULL\n-- II.\nselect * from T3 where not (E is NULL)\n-- III.\nselect * from T3 where not (E = NULL)\n```\n\nSobre esses comandos, executados com a instância da tabela T3 descrita anteriormente, é correto concluir que:",
  "imagem": null,
  "alternativas": {
    "A": "somente I e II produzem resultados equivalentes;",
    "B": "somente I e III produzem resultados equivalentes;",
    "C": "somente II e III produzem resultados equivalentes;",
    "D": "todos produzem resultados diferentes entre si;",
    "E": "todos produzem resultados equivalentes."
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
  "id": "ESP-BD-0008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Restrições de integridade",
  "ref_apostila": {
    "modulo": "05",
    "secao": "3",
    "titulo": "Modelo relacional, restrições de integridade e chaves",
    "link": "[[05 - Bancos de Dados e Linguagens#3. Modelo relacional, restrições de integridade e chaves]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q51",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 51
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para que o banco de dados possua integridade é necessário que o projetista garanta isso durante a etapa de criação do diagrama ER e do dicionário de dados. Assinale a alternativa correta que contém os três os níveis de integridade que devem ser observados:",
  "imagem": null,
  "alternativas": {
    "A": "Integridade da Entidade, Integridade de Domínio e Integridade Referencial.",
    "B": "Integridade de Relacionamento, Integridade de Domínio e Integridade Referencial.",
    "C": "Integridade da Cardinalidade, Integridade de Domínio e Integridade Referencial.",
    "D": "Integridade de Relacionamento, Integridade de Cardinalidade e Integridade Referencial."
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
  "id": "ESP-BD-0009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Views",
  "ref_apostila": {
    "modulo": "05",
    "secao": "8",
    "titulo": "SQL – views, índices, triggers e stored procedures",
    "link": "[[05 - Bancos de Dados e Linguagens#8. SQL – views, índices, triggers e stored procedures]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q52",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 52
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Ao executarmos o código abaixo, será criada uma VIEW, marque a opção que contém o resultado correto desta VIEW.\n\n```sql\ncreate view Cliente_Pedido (ID, NomeCompleto, SomaPedido)\nas\nselect a.ID, (a.Nome || ‘ ‘ || a.Sobrenome), sum(b.Valor) from Cliente a\njoin Pedido b on (b.ID_Cliente = a.ID)\ngroup by a.ID, a.Nome, a.Sobrenome;\n```",
  "imagem": null,
  "alternativas": {
    "A": "Será uma tabela virtual que lista o ID, o nome completo e a soma dos valores dos pedidos para cada cliente.",
    "B": "Será uma tabela virtual que agrupa o ID, o nome completo, por valores dos pedidos para cada cliente.",
    "C": "Será uma tabela virtual que lista o ID, o nome completo, que soma valores total de pedidos dos clientes.",
    "D": "Será uma tabela virtual que agrupa o ID, o nome completo, excluindo e a soma dos valores dos pedidos dos clientes."
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
  "id": "ESP-BD-0010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Chaves estrangeiras: ON UPDATE CASCADE",
  "ref_apostila": {
    "modulo": "05",
    "secao": "6",
    "titulo": "SQL – DDL, DCL e TCL",
    "link": "[[05 - Bancos de Dados e Linguagens#6. SQL – DDL, DCL e TCL]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q53",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 53
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Referente a criação Tabelas com SQL, observe o trecho abaixo:\n\n```sql\nCREATE TABLE registro_entrada (\n‘id’ INT(11) NOT NULL AUTO_INCREMENT ,\n‘valor_total’ DECIMAL(9,2) NULL DEFAULT '0.00' ,\n‘data_entrada’ DATE NULL DEFAULT NULL ,\n‘fornecedor_id’ INT NOT NULL ,\nPRIMARY KEY (‘id’) ,\nFOREIGN KEY (‘fornecedor_id’ )\nREFERENCES ‘supermercado’.’fornecedor’ (‘id’ )\nON DELETE CASCADE\nON UPDATE CASCADE\n)\n```\n\nEsse código contém uma instrução que indica, se um registro for atualizado na tabela pai, os registros correspondentes nesta tabela também serão atualizados. Marque a alternativa que contém corretamente essa instrução.",
  "imagem": null,
  "alternativas": {
    "A": "ON DELETE CASCADE",
    "B": "UPDATE CASCADE",
    "C": "REFERENCES ‘supermercado’.’fornecedor’ (‘id’ )",
    "D": "‘fornecedor_id’ INT NOT NULL ,"
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
  "id": "ESP-BD-0011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "INNER JOIN x OUTER JOIN",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q54",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 54
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No trabalho de manipulado de dados, é comum uso de diversos comandos e recursos SQL. Assim sendo, marque a alternativa correta que contem a diferença entre os tipos de junção INNER JOIN e OUTER JOIN.",
  "imagem": null,
  "alternativas": {
    "A": "INNER JOIN retorna apenas os registros que têm correspondência em ambas as tabelas, enquanto OUTER JOIN retorna todos os registros de ambas as tabelas, correspondentes ou não.",
    "B": "INNER JOIN retorna todos os registros de ambas as tabelas, correspondentes ou não, enquanto OUTER JOIN retorna apenas os registros que têm correspondência em ambas as tabelas.",
    "C": "INNER JOIN retorna todos os registros de ambas as tabelas, correspondentes ou não, enquanto OUTER JOIN retorna apenas os registros que têm correspondência em uma das tabelas.",
    "D": "INNER JOIN retorna apenas os registros que têm correspondência em uma das tabelas, enquanto OUTER JOIN retorna todos os registros de ambas as tabelas, correspondentes ou não."
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
  "id": "ESP-BD-0012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL: GROUP BY e HAVING",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q2",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 2
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um Analista precisa listar as contas cujo total de lançamentos de débito ultrapassa R$ 1.000,00. A tabela é `LANCAMENTO(id, conta, tipo, valor)`, em que `tipo` vale 'D' (débito) ou 'C' (crédito). O comando SQL correto é:",
  "imagem": null,
  "alternativas": {
    "A": "`SELECT conta, SUM(valor) FROM lancamento WHERE tipo = 'D' AND SUM(valor) > 1000 GROUP BY conta;`",
    "B": "`SELECT conta, SUM(valor) FROM lancamento GROUP BY conta HAVING tipo = 'D' AND valor > 1000;`",
    "C": "`SELECT conta, SUM(valor) FROM lancamento WHERE tipo = 'D' GROUP BY conta HAVING SUM(valor) > 1000;`",
    "D": "`SELECT conta, SUM(valor) FROM lancamento WHERE tipo = 'D' HAVING SUM(valor) > 1000;`",
    "E": "`SELECT conta, valor FROM lancamento WHERE tipo = 'D' ORDER BY SUM(valor) > 1000;`"
  },
  "gabarito": "C",
  "comentario": "Filtro de linhas (`tipo`) vai no WHERE; filtro sobre agregado (`SUM`) vai no HAVING, depois do GROUP BY. Função de agregação não pode ir no WHERE (A) e falta GROUP BY em D\n\nRevisar: Módulo 05, SQL",
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
  "id": "ESP-BD-0013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL: LEFT JOIN e COUNT",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q3",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 3
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere as tabelas `CLIENTE(id, nome)`, com 3 clientes, e `CONTA(id, cliente_id)`, em que a cliente Ana tem 2 contas, o cliente Bruno tem 1 conta e a cliente Carla não tem conta. O comando\n\n```sql\nSELECT c.nome, COUNT(t.id) AS qtd\nFROM cliente c LEFT JOIN conta t ON t.cliente_id = c.id\nGROUP BY c.nome;\n```\n\nretorna:",
  "imagem": null,
  "alternativas": {
    "A": "2 linhas: Ana 2 e Bruno 1.",
    "B": "3 linhas: Ana 2, Bruno 1 e Carla 1.",
    "C": "3 linhas: Ana 2, Bruno 1 e Carla NULL.",
    "D": "3 linhas: Ana 2, Bruno 1 e Carla 0.",
    "E": "1 linha com o total 3."
  },
  "gabarito": "D",
  "comentario": "O LEFT JOIN mantém Carla com colunas de `conta` nulas. `COUNT(t.id)` ignora nulos, logo dá 0. (`COUNT(*)` daria 1)\n\nRevisar: Módulo 05, SQL",
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
  "id": "ESP-BD-0014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Normalização (3FN)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "4",
    "titulo": "Dependências funcionais e normalização (1FN a 5FN, FNBC)",
    "link": "[[05 - Bancos de Dados e Linguagens#4. Dependências funcionais e normalização (1FN a 5FN, FNBC)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q4",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 4
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A relação `PEDIDO(num_pedido, data, cod_cliente, nome_cliente)` tem chave primária `num_pedido`, e `nome_cliente` depende funcionalmente de `cod_cliente`. Essa relação:",
  "imagem": null,
  "alternativas": {
    "A": "está na 2FN, mas não na 3FN, pois há dependência transitiva de `nome_cliente` em relação à chave.",
    "B": "não está na 1FN, pois possui atributos que se repetem entre linhas.",
    "C": "não está na 2FN, pois há dependência parcial da chave primária.",
    "D": "está na FNBC, pois toda relação com chave primária simples está na FNBC.",
    "E": "está na 3FN, pois `cod_cliente` é chave estrangeira."
  },
  "gabarito": "A",
  "comentario": "Chave simples não tem dependência parcial, então está na 2FN. Mas `num_pedido → cod_cliente → nome_cliente` é dependência transitiva, que viola a 3FN\n\nRevisar: Módulo 05, Normalização",
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
  "id": "ESP-BD-0015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Níveis de isolamento",
  "ref_apostila": {
    "modulo": "05",
    "secao": "9",
    "titulo": "Transações, ACID e controle de concorrência",
    "link": "[[05 - Bancos de Dados e Linguagens#9. Transações, ACID e controle de concorrência]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q5",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 5
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo o padrão ANSI/ISO SQL, o único nível de isolamento de transações que impede, além da leitura suja e da leitura não repetível, a ocorrência de **leituras fantasmas** é:",
  "imagem": null,
  "alternativas": {
    "A": "READ UNCOMMITTED.",
    "B": "SERIALIZABLE.",
    "C": "READ COMMITTED.",
    "D": "REPEATABLE READ.",
    "E": "SNAPSHOT COMMITTED."
  },
  "gabarito": "B",
  "comentario": "Só o SERIALIZABLE evita leitura fantasma. REPEATABLE READ evita leitura suja e não repetível, mas não fantasma. \"SNAPSHOT COMMITTED\" não existe no padrão\n\nRevisar: Módulo 05, Transações",
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
  "id": "ESP-BD-0016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Índices bitmap",
  "ref_apostila": {
    "modulo": "04",
    "secao": "6",
    "titulo": "Índices bitmap",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#6. Índices bitmap]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §6 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Índices bitmap são mais adequados para:",
  "imagem": null,
  "alternativas": {
    "A": "colunas de chave primária em sistemas OLTP.",
    "B": "colunas de baixa cardinalidade em ambientes de data warehouse.",
    "C": "colunas com alta frequência de atualização concorrente.",
    "D": "buscas por faixa em colunas numéricas de valores únicos.",
    "E": "substituir completamente índices B-tree em qualquer cenário."
  },
  "gabarito": "B",
  "comentario": "É o uso clássico: poucos valores distintos e consultas analíticas com muitos filtros.",
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
  "id": "ESP-BD-0017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Índices bitmap",
  "ref_apostila": {
    "modulo": "04",
    "secao": "6",
    "titulo": "Índices bitmap",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#6. Índices bitmap]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §6 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma tabela com 6 linhas, o bitmap de COR='azul' é 101001 e o de TAMANHO='P' é 100101. A consulta `COR='azul' AND TAMANHO='P'` retorna as linhas:",
  "imagem": null,
  "alternativas": {
    "A": "1 e 6",
    "B": "1, 3, 4 e 6",
    "C": "1 e 4",
    "D": "3 e 4",
    "E": "2 e 5"
  },
  "gabarito": "A",
  "comentario": "101001 AND 100101 = 100001 → linhas 1 e 6.",
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
  "id": "ESP-BD-0018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Índices bitmap",
  "ref_apostila": {
    "modulo": "04",
    "secao": "6",
    "titulo": "Índices bitmap",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#6. Índices bitmap]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §6 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma desvantagem dos índices bitmap é:",
  "imagem": null,
  "alternativas": {
    "A": "não permitir operações lógicas entre índices.",
    "B": "ocupar mais espaço que B-tree em colunas de baixa cardinalidade.",
    "C": "o custo e a contenção de bloqueio em operações de DML frequentes.",
    "D": "não poder ser usado com a cláusula WHERE.",
    "E": "não suportar consultas com COUNT."
  },
  "gabarito": "C",
  "comentario": "Atualizações exigem manutenção de bitmaps e podem bloquear muitas linhas; por isso o bitmap é evitado em OLTP.",
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
  "id": "ESP-BD-0019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Índices bitmap",
  "ref_apostila": {
    "modulo": "04",
    "secao": "6",
    "titulo": "Índices bitmap",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#6. Índices bitmap]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §6 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No esquema do exemplo, a operação `NOT (Sexo = F)` sobre o bitmap 10101001 resulta em:",
  "imagem": null,
  "alternativas": {
    "A": "10101001",
    "B": "01010110",
    "C": "11111111",
    "D": "00000000",
    "E": "01010111"
  },
  "gabarito": "B",
  "comentario": "Inverte bit a bit: 01010110 (que coincide com o bitmap de Sexo = M, já que não há NULL).",
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
  "id": "ESP-BD-0020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Exploração de dados e machine learning",
  "ref_apostila": {
    "modulo": "04",
    "secao": "7",
    "titulo": "Exploração de dados e machine learning",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#7. Exploração de dados e machine learning]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §7 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São exemplos de algoritmos de aprendizado supervisionado e não supervisionado, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "k-means e k-NN",
    "B": "árvore de decisão e k-means",
    "C": "Apriori e regressão linear",
    "D": "DBSCAN e Naive Bayes",
    "E": "PCA e k-means"
  },
  "gabarito": "B",
  "comentario": "Árvore de decisão é supervisionada; k-means, não supervisionado. A alternativa A está invertida.",
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
  "id": "ESP-BD-0021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Exploração de dados e machine learning",
  "ref_apostila": {
    "modulo": "04",
    "secao": "7",
    "titulo": "Exploração de dados e machine learning",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#7. Exploração de dados e machine learning]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §7 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um modelo apresenta acurácia de 99% no conjunto de treino e 70% no conjunto de teste. Esse comportamento caracteriza:",
  "imagem": null,
  "alternativas": {
    "A": "underfitting",
    "B": "overfitting",
    "C": "alto viés",
    "D": "vazamento de dados no teste",
    "E": "convergência ideal"
  },
  "gabarito": "B",
  "comentario": "Erro baixo no treino e alto no teste = sobreajuste (alta variância).",
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
  "id": "ESP-BD-0022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Exploração de dados e machine learning",
  "ref_apostila": {
    "modulo": "04",
    "secao": "7",
    "titulo": "Exploração de dados e machine learning",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#7. Exploração de dados e machine learning]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §7 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um modelo com VP = 30, FP = 20, FN = 10 e VN = 940, a precisão e a revocação valem, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "60% e 75%",
    "B": "75% e 60%",
    "C": "97% e 60%",
    "D": "60% e 97%",
    "E": "30% e 75%"
  },
  "gabarito": "A",
  "comentario": "Precisão = 30/(30+20) = 60%; revocação = 30/(30+10) = 75%.",
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
  "id": "ESP-BD-0023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Exploração de dados e machine learning",
  "ref_apostila": {
    "modulo": "04",
    "secao": "7",
    "titulo": "Exploração de dados e machine learning",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#7. Exploração de dados e machine learning]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §7 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o algoritmo k-NN, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "é um método de agrupamento não supervisionado que define k centroides.",
    "B": "constrói uma árvore de regras durante o treinamento.",
    "C": "é um método baseado em instâncias que classifica um novo exemplo pela classe majoritária dos k exemplos mais próximos.",
    "D": "dispensa a normalização dos atributos.",
    "E": "tem custo de predição constante, independentemente do tamanho da base."
  },
  "gabarito": "C",
  "comentario": "k-NN é supervisionado e \"preguiçoso\" (baseado em instâncias); exige normalização e tem predição custosa.",
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
  "id": "ESP-BD-0024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Exploração de dados e machine learning",
  "ref_apostila": {
    "modulo": "04",
    "secao": "7",
    "titulo": "Exploração de dados e machine learning",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#7. Exploração de dados e machine learning]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §7 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na regra de associação {A} → {B}, com suporte(A) = 40%, suporte(A,B) = 20% e suporte(B) = 25%, a confiança e o lift são:",
  "imagem": null,
  "alternativas": {
    "A": "50% e 2",
    "B": "20% e 0,8",
    "C": "50% e 1,25",
    "D": "80% e 2",
    "E": "62,5% e 1"
  },
  "gabarito": "A",
  "comentario": "Confiança = suporte(A,B)/suporte(A) = 20/40 = 50%; lift = confiança/suporte(B) = 0,50/0,25 = 2 (A aumenta em duas vezes a chance de B). Erro comum: dividir pelo suporte do antecedente no cálculo do lift.",
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
  "id": "ESP-BD-0025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Conceitos, SGBD e arquitetura em três níveis",
  "ref_apostila": {
    "modulo": "05",
    "secao": "1",
    "titulo": "Conceitos, SGBD e arquitetura em três níveis",
    "link": "[[05 - Bancos de Dados e Linguagens#1. Conceitos, SGBD e arquitetura em três níveis]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §1 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na arquitetura de três esquemas, a capacidade de modificar o esquema interno sem que seja necessário alterar o esquema conceitual é denominada:",
  "imagem": null,
  "alternativas": {
    "A": "independência lógica de dados.",
    "B": "independência física de dados.",
    "C": "transparência de distribuição.",
    "D": "normalização.",
    "E": "abstração externa."
  },
  "gabarito": "B",
  "comentario": "Alterar o nível interno sem afetar o conceitual é independência **física**. Independência lógica envolve alterar o conceitual sem afetar os externos.",
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
  "id": "ESP-BD-0026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Conceitos, SGBD e arquitetura em três níveis",
  "ref_apostila": {
    "modulo": "05",
    "secao": "1",
    "titulo": "Conceitos, SGBD e arquitetura em três níveis",
    "link": "[[05 - Bancos de Dados e Linguagens#1. Conceitos, SGBD e arquitetura em três níveis]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §1 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A independência lógica de dados é mais fácil de ser obtida que a independência física, pois as aplicações são pouco sensíveis à estrutura lógica dos dados.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "É o contrário: a independência lógica é **mais difícil**, porque aplicações dependem de nomes e estruturas lógicas.",
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
  "id": "ESP-BD-0027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Conceitos, SGBD e arquitetura em três níveis",
  "ref_apostila": {
    "modulo": "05",
    "secao": "1",
    "titulo": "Conceitos, SGBD e arquitetura em três níveis",
    "link": "[[05 - Bancos de Dados e Linguagens#1. Conceitos, SGBD e arquitetura em três níveis]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §1 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O conjunto de dados armazenados em um banco em determinado instante é chamado de:",
  "imagem": null,
  "alternativas": {
    "A": "esquema do banco.",
    "B": "intensão.",
    "C": "catálogo.",
    "D": "instância ou estado do banco.",
    "E": "metadado."
  },
  "gabarito": "D",
  "comentario": "Os dados em um instante formam a instância/estado/extensão. Esquema = intensão = descrição.",
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
  "id": "ESP-BD-0028",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Conceitos, SGBD e arquitetura em três níveis",
  "ref_apostila": {
    "modulo": "05",
    "secao": "1",
    "titulo": "Conceitos, SGBD e arquitetura em três níveis",
    "link": "[[05 - Bancos de Dados e Linguagens#1. Conceitos, SGBD e arquitetura em três níveis]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §1 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Assinale a alternativa que NÃO corresponde a uma vantagem da abordagem de banco de dados em relação ao processamento tradicional de arquivos:",
  "imagem": null,
  "alternativas": {
    "A": "controle de redundância.",
    "B": "compartilhamento de dados entre múltiplos usuários.",
    "C": "independência programa-dados.",
    "D": "eliminação de todo custo de processamento adicional em aplicações simples.",
    "E": "imposição de restrições de integridade."
  },
  "gabarito": "D",
  "comentario": "Em aplicações simples o SGBD **acrescenta** overhead (segurança, concorrência, recuperação); justamente por isso às vezes não compensa usá-lo.",
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
  "id": "ESP-BD-0029",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": null,
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Conceitos, SGBD e arquitetura em três níveis",
  "ref_apostila": {
    "modulo": "05",
    "secao": "1",
    "titulo": "Conceitos, SGBD e arquitetura em três níveis",
    "link": "[[05 - Bancos de Dados e Linguagens#1. Conceitos, SGBD e arquitetura em três níveis]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §1 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um SGBD, a linguagem que permite especificar consultas dizendo o que se deseja obter, sem indicar como obter, operando sobre conjuntos de registros, é uma DML:",
  "imagem": null,
  "alternativas": {
    "A": "procedural, de baixo nível.",
    "B": "não procedural, de alto nível.",
    "C": "de armazenamento (SDL).",
    "D": "de controle (DCL).",
    "E": "hierárquica."
  },
  "gabarito": "B",
  "comentario": "SQL é DML declarativa (não procedural), de alto nível, *set-at-a-time*.",
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
  "id": "ESP-BD-0030",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Modelagem de dados: conceitual, lógica e física",
  "ref_apostila": {
    "modulo": "05",
    "secao": "2",
    "titulo": "Modelagem de dados: conceitual, lógica e física; MER/DER; IDEF1X",
    "link": "[[05 - Bancos de Dados e Linguagens#2. Modelagem de dados: conceitual, lógica e física; MER/DER; IDEF1X]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §2 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No modelo entidade-relacionamento, uma entidade que não possui atributos suficientes para formar uma chave primária e que depende de outra entidade para sua identificação é denominada:",
  "imagem": null,
  "alternativas": {
    "A": "entidade associativa.",
    "B": "entidade fraca.",
    "C": "entidade genérica.",
    "D": "agregação.",
    "E": "categoria."
  },
  "gabarito": "B",
  "comentario": "Entidade fraca; identificada pela chave da proprietária + chave parcial.",
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
  "id": "ESP-BD-0031",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Modelagem de dados: conceitual, lógica e física",
  "ref_apostila": {
    "modulo": "05",
    "secao": "2",
    "titulo": "Modelagem de dados: conceitual, lógica e física; MER/DER; IDEF1X",
    "link": "[[05 - Bancos de Dados e Linguagens#2. Modelagem de dados: conceitual, lógica e física; MER/DER; IDEF1X]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §2 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma especialização disjunta e total, toda entidade da superclasse deve pertencer a exatamente uma das subclasses.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Disjunta = no máximo uma; total = pelo menos uma; juntas = exatamente uma.",
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
  "id": "ESP-BD-0032",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Modelagem de dados: conceitual, lógica e física",
  "ref_apostila": {
    "modulo": "05",
    "secao": "2",
    "titulo": "Modelagem de dados: conceitual, lógica e física; MER/DER; IDEF1X",
    "link": "[[05 - Bancos de Dados e Linguagens#2. Modelagem de dados: conceitual, lógica e física; MER/DER; IDEF1X]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §2 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No mapeamento de um relacionamento binário 1:N do modelo ER para o relacional, o procedimento padrão é:",
  "imagem": null,
  "alternativas": {
    "A": "criar uma tabela associativa com as chaves das duas entidades.",
    "B": "incluir a chave primária da entidade do lado N como chave estrangeira na entidade do lado 1.",
    "C": "incluir a chave primária da entidade do lado 1 como chave estrangeira na entidade do lado N.",
    "D": "fundir as duas entidades em uma única tabela.",
    "E": "criar uma tabela para o atributo multivalorado."
  },
  "gabarito": "C",
  "comentario": "A PK do lado \"1\" vai como FK para o lado \"N\".",
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
  "id": "ESP-BD-0033",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Modelagem de dados: conceitual, lógica e física",
  "ref_apostila": {
    "modulo": "05",
    "secao": "2",
    "titulo": "Modelagem de dados: conceitual, lógica e física; MER/DER; IDEF1X",
    "link": "[[05 - Bancos de Dados e Linguagens#2. Modelagem de dados: conceitual, lógica e física; MER/DER; IDEF1X]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §2 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na notação IDEF1X, um relacionamento em que a chave primária da entidade pai migra para a área de chave primária da entidade filha, tornando esta dependente, é representado por:",
  "imagem": null,
  "alternativas": {
    "A": "linha tracejada.",
    "B": "linha sólida.",
    "C": "losango vazado no pai.",
    "D": "círculo com duas linhas.",
    "E": "letra Z junto ao filho."
  },
  "gabarito": "B",
  "comentario": "Relacionamento identificador = linha sólida. A tracejada é não identificador.",
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
  "id": "ESP-BD-0034",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Modelagem de dados: conceitual, lógica e física",
  "ref_apostila": {
    "modulo": "05",
    "secao": "2",
    "titulo": "Modelagem de dados: conceitual, lógica e física; MER/DER; IDEF1X",
    "link": "[[05 - Bancos de Dados e Linguagens#2. Modelagem de dados: conceitual, lógica e física; MER/DER; IDEF1X]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §2 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um DER possui as entidades FUNCIONARIO, PROJETO e DEPARTAMENTO; FUNCIONARIO–PROJETO é M:N, DEPARTAMENTO–FUNCIONARIO é 1:N, e FUNCIONARIO tem o atributo multivalorado \"habilidades\". O número mínimo de tabelas no modelo relacional é:",
  "imagem": null,
  "alternativas": {
    "A": "3",
    "B": "4",
    "C": "5",
    "D": "6",
    "E": "7"
  },
  "gabarito": "C",
  "comentario": "3 entidades + 1 tabela para o M:N + 1 para o multivalorado = 5. O 1:N vira FK em FUNCIONARIO.",
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
  "id": "ESP-BD-0035",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Modelo relacional, restrições de integridade e chaves",
  "ref_apostila": {
    "modulo": "05",
    "secao": "3",
    "titulo": "Modelo relacional, restrições de integridade e chaves",
    "link": "[[05 - Bancos de Dados e Linguagens#3. Modelo relacional, restrições de integridade e chaves]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §3 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A restrição de integridade que estabelece que nenhum valor de chave primária pode ser nulo é chamada de integridade:",
  "imagem": null,
  "alternativas": {
    "A": "referencial.",
    "B": "de domínio.",
    "C": "de entidade.",
    "D": "semântica.",
    "E": "de transição."
  },
  "gabarito": "C",
  "comentario": "Integridade de entidade.",
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
  "id": "ESP-BD-0036",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Modelo relacional, restrições de integridade e chaves",
  "ref_apostila": {
    "modulo": "05",
    "secao": "3",
    "titulo": "Modelo relacional, restrições de integridade e chaves",
    "link": "[[05 - Bancos de Dados e Linguagens#3. Modelo relacional, restrições de integridade e chaves]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §3 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A operação de exclusão de tuplas pode violar as restrições de domínio, de chave, de integridade de entidade e de integridade referencial.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "A exclusão só pode violar a integridade referencial.",
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
  "id": "ESP-BD-0037",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Modelo relacional, restrições de integridade e chaves",
  "ref_apostila": {
    "modulo": "05",
    "secao": "3",
    "titulo": "Modelo relacional, restrições de integridade e chaves",
    "link": "[[05 - Bancos de Dados e Linguagens#3. Modelo relacional, restrições de integridade e chaves]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §3 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere a relação ALUNO(matricula, cpf, nome, email), em que matricula, cpf e email são únicos. Sobre chaves, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "ALUNO possui uma única chave candidata.",
    "B": "{matricula, nome} é uma chave candidata.",
    "C": "{cpf} e {email} são chaves candidatas; se {matricula} for escolhida como primária, as demais são alternativas.",
    "D": "superchaves não podem conter chaves candidatas.",
    "E": "a chave primária pode conter valores nulos se for composta."
  },
  "gabarito": "C",
  "comentario": "Há três chaves candidatas; {matricula, nome} é superchave, não mínima; a PK nunca admite nulos.",
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
  "id": "ESP-BD-0038",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Modelo relacional, restrições de integridade e chaves",
  "ref_apostila": {
    "modulo": "05",
    "secao": "3",
    "titulo": "Modelo relacional, restrições de integridade e chaves",
    "link": "[[05 - Bancos de Dados e Linguagens#3. Modelo relacional, restrições de integridade e chaves]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §3 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em SQL, a cláusula que faz com que, ao excluir um registro pai, a chave estrangeira dos registros filhos receba valor nulo é:",
  "imagem": null,
  "alternativas": {
    "A": "ON DELETE CASCADE",
    "B": "ON DELETE SET NULL",
    "C": "ON DELETE NO ACTION",
    "D": "ON UPDATE SET NULL",
    "E": "ON DELETE RESTRICT"
  },
  "gabarito": "B",
  "comentario": "`SET NULL`; `CASCADE` apagaria os filhos.",
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
  "id": "ESP-BD-0039",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Modelo relacional, restrições de integridade e chaves",
  "ref_apostila": {
    "modulo": "05",
    "secao": "3",
    "titulo": "Modelo relacional, restrições de integridade e chaves",
    "link": "[[05 - Bancos de Dados e Linguagens#3. Modelo relacional, restrições de integridade e chaves]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §3 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma relação possui 7 colunas e 150 linhas. Seu grau e sua cardinalidade são, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "150 e 7",
    "B": "7 e 150",
    "C": "7 e 7",
    "D": "150 e 150",
    "E": "1 e 150"
  },
  "gabarito": "B",
  "comentario": "Grau = colunas (7), cardinalidade = linhas (150).",
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
  "id": "ESP-BD-0040",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Dependências funcionais e normalização (1FN a 5FN, FNBC)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "4",
    "titulo": "Dependências funcionais e normalização (1FN a 5FN, FNBC)",
    "link": "[[05 - Bancos de Dados e Linguagens#4. Dependências funcionais e normalização (1FN a 5FN, FNBC)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §4 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma relação está na segunda forma normal quando está na primeira forma normal e:",
  "imagem": null,
  "alternativas": {
    "A": "não possui dependências transitivas.",
    "B": "todo atributo não chave depende funcionalmente de toda a chave primária, e não apenas de parte dela.",
    "C": "todo determinante é chave candidata.",
    "D": "não possui dependências multivaloradas.",
    "E": "todos os atributos são chaves."
  },
  "gabarito": "B",
  "comentario": "Sem dependência parcial. A letra A é 3FN; C é FNBC; D é 4FN.",
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
  "id": "ESP-BD-0041",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Dependências funcionais e normalização (1FN a 5FN, FNBC)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "4",
    "titulo": "Dependências funcionais e normalização (1FN a 5FN, FNBC)",
    "link": "[[05 - Bancos de Dados e Linguagens#4. Dependências funcionais e normalização (1FN a 5FN, FNBC)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §4 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Toda relação que está na terceira forma normal está, também, na forma normal de Boyce-Codd.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "É o contrário: toda FNBC está na 3FN; a 3FN admite DF cujo dependente é atributo primo.",
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
  "id": "ESP-BD-0042",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Dependências funcionais e normalização (1FN a 5FN, FNBC)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "4",
    "titulo": "Dependências funcionais e normalização (1FN a 5FN, FNBC)",
    "link": "[[05 - Bancos de Dados e Linguagens#4. Dependências funcionais e normalização (1FN a 5FN, FNBC)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §4 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Dada R(A, B, C, D) com F = {A → B, B → C, C → D}, é correto afirmar que:",
  "imagem": null,
  "alternativas": {
    "A": "R está na 3FN.",
    "B": "A é chave e R está na 2FN, mas não na 3FN.",
    "C": "R não está na 1FN.",
    "D": "{B, C} é chave candidata.",
    "E": "R está na FNBC."
  },
  "gabarito": "B",
  "comentario": "A⁺ = {A,B,C,D}, logo A é chave (simples → automaticamente 2FN). B → C e C → D são transitivas → não está na 3FN.",
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
  "id": "ESP-BD-0043",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Dependências funcionais e normalização (1FN a 5FN, FNBC)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "4",
    "titulo": "Dependências funcionais e normalização (1FN a 5FN, FNBC)",
    "link": "[[05 - Bancos de Dados e Linguagens#4. Dependências funcionais e normalização (1FN a 5FN, FNBC)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §4 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Pelos axiomas de Armstrong, se X → Y e WY → Z, então:",
  "imagem": null,
  "alternativas": {
    "A": "X → Z",
    "B": "W → Z",
    "C": "WX → Z",
    "D": "Y → W",
    "E": "XZ → W"
  },
  "gabarito": "C",
  "comentario": "Pseudotransitividade: WX → Z.",
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
  "id": "ESP-BD-0044",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Dependências funcionais e normalização (1FN a 5FN, FNBC)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "4",
    "titulo": "Dependências funcionais e normalização (1FN a 5FN, FNBC)",
    "link": "[[05 - Bancos de Dados e Linguagens#4. Dependências funcionais e normalização (1FN a 5FN, FNBC)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §4 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma relação contendo dois atributos multivalorados independentes entre si associados à mesma chave viola a:",
  "imagem": null,
  "alternativas": {
    "A": "1FN",
    "B": "2FN",
    "C": "3FN",
    "D": "4FN",
    "E": "FNBC"
  },
  "gabarito": "D",
  "comentario": "DMVs independentes = violação da 4FN (a relação pode até estar em FNBC).",
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
  "id": "ESP-BD-0045",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Álgebra relacional",
  "ref_apostila": {
    "modulo": "05",
    "secao": "5",
    "titulo": "Álgebra relacional",
    "link": "[[05 - Bancos de Dados e Linguagens#5. Álgebra relacional]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §5 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na álgebra relacional, a operação que seleciona um subconjunto de colunas de uma relação, eliminando tuplas duplicadas, é:",
  "imagem": null,
  "alternativas": {
    "A": "seleção (σ)",
    "B": "projeção (π)",
    "C": "junção natural",
    "D": "divisão",
    "E": "renomeação"
  },
  "gabarito": "B",
  "comentario": "Projeção atua nas colunas; seleção, nas linhas.",
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
  "id": "ESP-BD-0046",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Álgebra relacional",
  "ref_apostila": {
    "modulo": "05",
    "secao": "5",
    "titulo": "Álgebra relacional",
    "link": "[[05 - Bancos de Dados e Linguagens#5. Álgebra relacional]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §5 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O produto cartesiano entre uma relação com 5 tuplas e 3 atributos e outra com 4 tuplas e 2 atributos resulta em uma relação com 20 tuplas e 5 atributos.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Cardinalidade 5×4 = 20; grau 3+2 = 5.",
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
  "id": "ESP-BD-0047",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Álgebra relacional",
  "ref_apostila": {
    "modulo": "05",
    "secao": "5",
    "titulo": "Álgebra relacional",
    "link": "[[05 - Bancos de Dados e Linguagens#5. Álgebra relacional]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §5 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A operação da álgebra relacional adequada para responder \"quais clientes possuem contas em todas as agências da cidade de Vitória\" é:",
  "imagem": null,
  "alternativas": {
    "A": "união",
    "B": "diferença",
    "C": "divisão",
    "D": "semijunção",
    "E": "junção externa esquerda"
  },
  "gabarito": "C",
  "comentario": "\"Todas\" é o sinal clássico da divisão.",
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
  "id": "ESP-BD-0048",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Álgebra relacional",
  "ref_apostila": {
    "modulo": "05",
    "secao": "5",
    "titulo": "Álgebra relacional",
    "link": "[[05 - Bancos de Dados e Linguagens#5. Álgebra relacional]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §5 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A operação que retorna todas as tuplas da relação à esquerda, combinadas às correspondentes da direita, preenchendo com nulos quando não há correspondência, é:",
  "imagem": null,
  "alternativas": {
    "A": "junção natural",
    "B": "equijunção",
    "C": "junção externa esquerda",
    "D": "junção externa completa",
    "E": "produto cartesiano"
  },
  "gabarito": "C",
  "comentario": "Left outer join.",
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
  "id": "ESP-BD-0049",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Álgebra relacional",
  "ref_apostila": {
    "modulo": "05",
    "secao": "5",
    "titulo": "Álgebra relacional",
    "link": "[[05 - Bancos de Dados e Linguagens#5. Álgebra relacional]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §5 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual das operações NÃO é comutativa?",
  "imagem": null,
  "alternativas": {
    "A": "União",
    "B": "Interseção",
    "C": "Diferença",
    "D": "Junção natural",
    "E": "Seleção encadeada"
  },
  "gabarito": "C",
  "comentario": "R − S ≠ S − R. As demais são comutativas (a junção, a menos da ordem das colunas).",
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
  "id": "ESP-BD-0050",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – DDL, DCL e TCL",
  "ref_apostila": {
    "modulo": "05",
    "secao": "6",
    "titulo": "SQL – DDL, DCL e TCL",
    "link": "[[05 - Bancos de Dados e Linguagens#6. SQL – DDL, DCL e TCL]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §6 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São comandos da DDL, DML e DCL, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "CREATE, GRANT, UPDATE",
    "B": "ALTER, INSERT, REVOKE",
    "C": "DROP, COMMIT, GRANT",
    "D": "TRUNCATE, SELECT, ROLLBACK",
    "E": "INSERT, DELETE, GRANT"
  },
  "gabarito": "B",
  "comentario": "ALTER (DDL), INSERT (DML), REVOKE (DCL).",
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
  "id": "ESP-BD-0051",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – DDL, DCL e TCL",
  "ref_apostila": {
    "modulo": "05",
    "secao": "6",
    "titulo": "SQL – DDL, DCL e TCL",
    "link": "[[05 - Bancos de Dados e Linguagens#6. SQL – DDL, DCL e TCL]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §6 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O comando TRUNCATE TABLE remove todas as linhas da tabela, dispara os triggers de exclusão definidos para cada linha e permite o uso de cláusula WHERE.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "TRUNCATE não aceita WHERE e não dispara triggers de DELETE.",
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
  "id": "ESP-BD-0052",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – DDL, DCL e TCL",
  "ref_apostila": {
    "modulo": "05",
    "secao": "6",
    "titulo": "SQL – DDL, DCL e TCL",
    "link": "[[05 - Bancos de Dados e Linguagens#6. SQL – DDL, DCL e TCL]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §6 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em SQL, um usuário que recebeu um privilégio por meio de GRANT ... WITH GRANT OPTION pode:",
  "imagem": null,
  "alternativas": {
    "A": "apenas usar o privilégio, sem repassá-lo.",
    "B": "repassar o privilégio a outros usuários.",
    "C": "revogar privilégios do DBA.",
    "D": "criar novos usuários.",
    "E": "alterar a estrutura da tabela."
  },
  "gabarito": "B",
  "comentario": "GRANT OPTION permite repassar.",
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
  "id": "ESP-BD-0053",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – DDL, DCL e TCL",
  "ref_apostila": {
    "modulo": "05",
    "secao": "6",
    "titulo": "SQL – DDL, DCL e TCL",
    "link": "[[05 - Bancos de Dados e Linguagens#6. SQL – DDL, DCL e TCL]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §6 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere a restrição `CHECK (saldo >= 0)` em uma coluna que aceita nulos. A inserção de uma linha com saldo NULL:",
  "imagem": null,
  "alternativas": {
    "A": "é rejeitada, pois NULL >= 0 é falso.",
    "B": "é aceita, pois a condição resulta em desconhecido e o CHECK só rejeita resultados falsos.",
    "C": "converte NULL em zero.",
    "D": "dispara erro de integridade referencial.",
    "E": "é aceita apenas no Oracle."
  },
  "gabarito": "B",
  "comentario": "CHECK rejeita apenas FALSE; NULL ≥ 0 é UNKNOWN.",
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
  "id": "ESP-BD-0054",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – DDL, DCL e TCL",
  "ref_apostila": {
    "modulo": "05",
    "secao": "6",
    "titulo": "SQL – DDL, DCL e TCL",
    "link": "[[05 - Bancos de Dados e Linguagens#6. SQL – DDL, DCL e TCL]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §6 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma sessão Oracle, executa-se: `UPDATE conta SET saldo = 0 WHERE numero = 5; CREATE TABLE log_x (id NUMBER); ROLLBACK;`. Ao final:",
  "imagem": null,
  "alternativas": {
    "A": "o UPDATE é desfeito e a tabela log_x é removida.",
    "B": "o UPDATE é desfeito, mas a tabela permanece.",
    "C": "o UPDATE permanece efetivado e a tabela log_x existe.",
    "D": "nada é efetivado.",
    "E": "ocorre erro, pois não se pode usar DDL em transação."
  },
  "gabarito": "C",
  "comentario": "O CREATE TABLE (DDL) faz commit implícito, efetivando o UPDATE; o ROLLBACK não tem o que desfazer.",
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
  "id": "ESP-BD-0055",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §7 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-APO-05-07",
  "enunciado": "Qual o resultado de `SELECT COUNT(*), COUNT(cpf), COUNT(DISTINCT cpf) FROM conta;`?",
  "imagem": null,
  "alternativas": {
    "A": "4, 4, 3",
    "B": "4, 3, 2",
    "C": "4, 3, 3",
    "D": "3, 3, 2",
    "E": "4, 4, 4"
  },
  "gabarito": "B",
  "comentario": "COUNT(*) = 4; COUNT(cpf) ignora o NULL da conta 4 → 3 (111, 111, 222); DISTINCT → 2.",
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
  "id": "ESP-BD-0056",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §7 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": "TB-APO-05-07",
  "enunciado": "A consulta `SELECT nome FROM cliente WHERE cpf NOT IN (SELECT cpf FROM conta);` retorna os clientes Carla e Davi.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "A subconsulta retorna um NULL (conta 4), e `NOT IN` com NULL nunca é TRUE: resultado **vazio**. Use NOT EXISTS.",
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
  "id": "ESP-BD-0057",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §7 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-APO-05-07",
  "enunciado": "Quantas linhas retorna `SELECT c.nome, k.numero FROM cliente c FULL OUTER JOIN conta k ON k.cpf = c.cpf;`?",
  "imagem": null,
  "alternativas": {
    "A": "3",
    "B": "4",
    "C": "5",
    "D": "6",
    "E": "16"
  },
  "gabarito": "D",
  "comentario": "3 pares (Ana-1, Ana-2, Bruno-3) + Carla e Davi sem conta + conta 4 sem cliente = 6.",
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
  "id": "ESP-BD-0058",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §7 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-APO-05-07",
  "enunciado": "Sobre as cláusulas WHERE e HAVING, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "ambas podem conter funções de agregação.",
    "B": "HAVING é avaliada antes do GROUP BY.",
    "C": "WHERE filtra linhas antes do agrupamento; HAVING filtra grupos após o agrupamento.",
    "D": "HAVING só pode ser usada sem GROUP BY.",
    "E": "WHERE pode referenciar aliases definidos no SELECT."
  },
  "gabarito": "C",
  "comentario": "As demais estão erradas (WHERE não aceita agregação nem aliases; HAVING vem após GROUP BY).",
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
  "id": "ESP-BD-0059",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §7 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-APO-05-07",
  "enunciado": "O resultado de `SELECT agencia, SUM(saldo) FROM conta GROUP BY agencia HAVING COUNT(*) > 1;` é:",
  "imagem": null,
  "alternativas": {
    "A": "(10, 450)",
    "B": "(10, 500)",
    "C": "(10, 450), (20, 1500)",
    "D": "nenhuma linha",
    "E": "(20, 1500)"
  },
  "gabarito": "A",
  "comentario": "Só a agência 10 tem mais de uma conta; soma 500 + (−50) = 450.",
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
  "id": "ESP-BD-0060",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §7 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-APO-05-07",
  "enunciado": "Considere a expressão `(saldo > 0) OR (cidade = NULL)`, para uma linha com saldo = −50. O resultado lógico é:",
  "imagem": null,
  "alternativas": {
    "A": "TRUE",
    "B": "FALSE",
    "C": "UNKNOWN",
    "D": "NULL convertido em FALSE",
    "E": "erro de sintaxe"
  },
  "gabarito": "C",
  "comentario": "FALSE OR UNKNOWN = UNKNOWN (e `= NULL` é sempre UNKNOWN). Num WHERE, a linha não seria retornada.",
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
  "id": "ESP-BD-0061",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – views, índices, triggers e stored procedures",
  "ref_apostila": {
    "modulo": "05",
    "secao": "8",
    "titulo": "SQL – views, índices, triggers e stored procedures",
    "link": "[[05 - Bancos de Dados e Linguagens#8. SQL – views, índices, triggers e stored procedures]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §8 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma visão (view) em SQL:",
  "imagem": null,
  "alternativas": {
    "A": "sempre armazena fisicamente os dados retornados pela consulta.",
    "B": "é uma tabela virtual cuja definição fica no catálogo e cujo conteúdo é derivado das tabelas base no momento da consulta.",
    "C": "não pode ser usada como mecanismo de segurança.",
    "D": "é sempre atualizável.",
    "E": "só pode referenciar uma tabela."
  },
  "gabarito": "B",
  "comentario": "View comum não armazena dados (a materializada sim); é muito usada para segurança; nem sempre é atualizável.",
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
  "id": "ESP-BD-0062",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – views, índices, triggers e stored procedures",
  "ref_apostila": {
    "modulo": "05",
    "secao": "8",
    "titulo": "SQL – views, índices, triggers e stored procedures",
    "link": "[[05 - Bancos de Dados e Linguagens#8. SQL – views, índices, triggers e stored procedures]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §8 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma tabela, é possível ter vários índices clusterizados, desde que sobre colunas diferentes.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Só pode haver **um** índice clusterizado por tabela, pois ele define a ordem física das linhas.",
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
  "id": "ESP-BD-0063",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – views, índices, triggers e stored procedures",
  "ref_apostila": {
    "modulo": "05",
    "secao": "8",
    "titulo": "SQL – views, índices, triggers e stored procedures",
    "link": "[[05 - Bancos de Dados e Linguagens#8. SQL – views, índices, triggers e stored procedures]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §8 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um data warehouse, para colunas de baixa cardinalidade, como \"UF\" e \"sexo\", consultadas com combinações de filtros, o índice mais indicado é o:",
  "imagem": null,
  "alternativas": {
    "A": "hash",
    "B": "clustered",
    "C": "bitmap",
    "D": "full-text",
    "E": "esparso"
  },
  "gabarito": "C",
  "comentario": "Bitmap: baixa cardinalidade e operações AND/OR entre filtros.",
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
  "id": "ESP-BD-0064",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – views, índices, triggers e stored procedures",
  "ref_apostila": {
    "modulo": "05",
    "secao": "8",
    "titulo": "SQL – views, índices, triggers e stored procedures",
    "link": "[[05 - Bancos de Dados e Linguagens#8. SQL – views, índices, triggers e stored procedures]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §8 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No SQL Server, dentro de um trigger AFTER UPDATE, os valores anteriores e posteriores à alteração podem ser obtidos, respectivamente, nas pseudotabelas:",
  "imagem": null,
  "alternativas": {
    "A": "old e new",
    "B": "deleted e inserted",
    "C": "inserted e deleted",
    "D": ":OLD e :NEW",
    "E": "before e after"
  },
  "gabarito": "B",
  "comentario": "`deleted` contém os valores antigos; `inserted`, os novos.",
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
  "id": "ESP-BD-0065",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – views, índices, triggers e stored procedures",
  "ref_apostila": {
    "modulo": "05",
    "secao": "8",
    "titulo": "SQL – views, índices, triggers e stored procedures",
    "link": "[[05 - Bancos de Dados e Linguagens#8. SQL – views, índices, triggers e stored procedures]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §8 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para permitir operações de INSERT sobre uma view que contém junção entre várias tabelas, redirecionando-as às tabelas base, utiliza-se um trigger:",
  "imagem": null,
  "alternativas": {
    "A": "BEFORE",
    "B": "AFTER",
    "C": "INSTEAD OF",
    "D": "FOR EACH STATEMENT",
    "E": "DDL"
  },
  "gabarito": "C",
  "comentario": "INSTEAD OF substitui a operação sobre a view.",
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
  "id": "ESP-BD-0066",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Transações, ACID e controle de concorrência",
  "ref_apostila": {
    "modulo": "05",
    "secao": "9",
    "titulo": "Transações, ACID e controle de concorrência",
    "link": "[[05 - Bancos de Dados e Linguagens#9. Transações, ACID e controle de concorrência]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §9 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A propriedade ACID que garante que uma transação seja executada por completo ou não seja executada é a:",
  "imagem": null,
  "alternativas": {
    "A": "consistência",
    "B": "isolamento",
    "C": "atomicidade",
    "D": "durabilidade",
    "E": "serializabilidade"
  },
  "gabarito": "C",
  "comentario": "Atomicidade: tudo ou nada.",
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
  "id": "ESP-BD-0067",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Transações, ACID e controle de concorrência",
  "ref_apostila": {
    "modulo": "05",
    "secao": "9",
    "titulo": "Transações, ACID e controle de concorrência",
    "link": "[[05 - Bancos de Dados e Linguagens#9. Transações, ACID e controle de concorrência]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §9 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O protocolo de bloqueio em duas fases (2PL) básico garante a serializabilidade dos escalonamentos e impede a ocorrência de deadlocks.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "O 2PL garante serializabilidade, mas **não** impede deadlock (apenas o conservador o faz).",
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
  "id": "ESP-BD-0068",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Transações, ACID e controle de concorrência",
  "ref_apostila": {
    "modulo": "05",
    "secao": "9",
    "titulo": "Transações, ACID e controle de concorrência",
    "link": "[[05 - Bancos de Dados e Linguagens#9. Transações, ACID e controle de concorrência]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §9 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No nível de isolamento READ COMMITTED, podem ocorrer:",
  "imagem": null,
  "alternativas": {
    "A": "leituras sujas, apenas.",
    "B": "leituras não repetíveis e fantasmas.",
    "C": "apenas fantasmas.",
    "D": "nenhuma anomalia.",
    "E": "leituras sujas e fantasmas."
  },
  "gabarito": "B",
  "comentario": "READ COMMITTED evita só a leitura suja.",
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
  "id": "ESP-BD-0069",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Transações, ACID e controle de concorrência",
  "ref_apostila": {
    "modulo": "05",
    "secao": "9",
    "titulo": "Transações, ACID e controle de concorrência",
    "link": "[[05 - Bancos de Dados e Linguagens#9. Transações, ACID e controle de concorrência]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §9 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No esquema de prevenção de deadlock wait-die, quando uma transação mais nova solicita um item bloqueado por uma transação mais antiga:",
  "imagem": null,
  "alternativas": {
    "A": "a mais antiga é abortada.",
    "B": "a mais nova espera.",
    "C": "a mais nova é abortada e reiniciada posteriormente com o mesmo timestamp.",
    "D": "ambas são abortadas.",
    "E": "o bloqueio é compartilhado."
  },
  "gabarito": "C",
  "comentario": "Wait-die: nova \"morre\" (aborta), mantendo o timestamp; velha esperaria.",
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
  "id": "ESP-BD-0070",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Transações, ACID e controle de concorrência",
  "ref_apostila": {
    "modulo": "05",
    "secao": "9",
    "titulo": "Transações, ACID e controle de concorrência",
    "link": "[[05 - Bancos de Dados e Linguagens#9. Transações, ACID e controle de concorrência]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §9 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o escalonamento S: r1(A); w2(A); r2(B); w1(B); c1; c2. O grafo de precedência:",
  "imagem": null,
  "alternativas": {
    "A": "não possui arestas.",
    "B": "possui apenas a aresta T1→T2.",
    "C": "possui apenas a aresta T2→T1.",
    "D": "possui ciclo, logo S não é serializável por conflito.",
    "E": "é acíclico, logo S é serial."
  },
  "gabarito": "D",
  "comentario": "r1(A) antes de w2(A) → T1→T2; r2(B) antes de w1(B) → T2→T1. Ciclo → não serializável por conflito.",
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
  "id": "ESP-BD-0071",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Transações, ACID e controle de concorrência",
  "ref_apostila": {
    "modulo": "05",
    "secao": "9",
    "titulo": "Transações, ACID e controle de concorrência",
    "link": "[[05 - Bancos de Dados e Linguagens#9. Transações, ACID e controle de concorrência]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §9 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma transação T1 consulta todas as contas da agência 10 e obtém 5 linhas; T2 insere uma nova conta na agência 10 e confirma; T1 repete a consulta e obtém 6 linhas. Esse fenômeno é chamado:",
  "imagem": null,
  "alternativas": {
    "A": "leitura suja",
    "B": "atualização perdida",
    "C": "leitura fantasma",
    "D": "deadlock",
    "E": "leitura não repetível"
  },
  "gabarito": "C",
  "comentario": "Novas linhas no conjunto que satisfaz o predicado = fantasma.",
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
  "id": "ESP-BD-0072",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Recuperação (log, checkpoint)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "10",
    "titulo": "Recuperação (log, checkpoint)",
    "link": "[[05 - Bancos de Dados e Linguagens#10. Recuperação (log, checkpoint)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §10 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na técnica de recuperação baseada em atualização adiada, após uma falha, o algoritmo de recuperação é do tipo:",
  "imagem": null,
  "alternativas": {
    "A": "UNDO/REDO",
    "B": "UNDO/NO-REDO",
    "C": "NO-UNDO/REDO",
    "D": "NO-UNDO/NO-REDO",
    "E": "apenas checkpoint"
  },
  "gabarito": "C",
  "comentario": "Como nada é escrito no banco antes do commit, não há o que desfazer; só refazer as confirmadas.",
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
  "id": "ESP-BD-0073",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Recuperação (log, checkpoint)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "10",
    "titulo": "Recuperação (log, checkpoint)",
    "link": "[[05 - Bancos de Dados e Linguagens#10. Recuperação (log, checkpoint)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §10 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A regra write-ahead logging determina que as páginas de dados modificadas sejam gravadas no disco antes dos respectivos registros de log.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "É o oposto: o **log** é gravado **antes** das páginas de dados.",
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
  "id": "ESP-BD-0074",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Recuperação (log, checkpoint)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "10",
    "titulo": "Recuperação (log, checkpoint)",
    "link": "[[05 - Bancos de Dados e Linguagens#10. Recuperação (log, checkpoint)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §10 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O principal objetivo do checkpoint é:",
  "imagem": null,
  "alternativas": {
    "A": "liberar bloqueios.",
    "B": "reduzir a quantidade de log que precisa ser processada na recuperação.",
    "C": "eliminar a necessidade de backup.",
    "D": "impedir deadlocks.",
    "E": "garantir isolamento."
  },
  "gabarito": "B",
  "comentario": "Limita o ponto a partir do qual o log precisa ser analisado/refeito.",
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
  "id": "ESP-BD-0075",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Recuperação (log, checkpoint)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "10",
    "titulo": "Recuperação (log, checkpoint)",
    "link": "[[05 - Bancos de Dados e Linguagens#10. Recuperação (log, checkpoint)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §10 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-APO-05-10-5",
  "enunciado": "Com base no log do exemplo da seção 10.5, se a falha tivesse ocorrido imediatamente após t6, quais transações precisariam de UNDO na atualização imediata?",
  "imagem": null,
  "alternativas": {
    "A": "T1",
    "B": "T2",
    "C": "T3",
    "D": "T2 e T3",
    "E": "T3 e T4"
  },
  "gabarito": "C",
  "comentario": "Após t6, T1 e T2 confirmaram; T3 iniciou (t5) e não confirmou → UNDO de T3. T4 ainda não existia.",
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
  "id": "ESP-BD-0076",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Recuperação (log, checkpoint)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "10",
    "titulo": "Recuperação (log, checkpoint)",
    "link": "[[05 - Bancos de Dados e Linguagens#10. Recuperação (log, checkpoint)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §10 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A política de buffer em que páginas modificadas por transações ainda não confirmadas podem ser gravadas em disco é chamada:",
  "imagem": null,
  "alternativas": {
    "A": "force",
    "B": "no-force",
    "C": "steal",
    "D": "no-steal",
    "E": "shadow"
  },
  "gabarito": "C",
  "comentario": "Steal.",
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
  "id": "ESP-BD-0077",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Otimização de consultas",
  "ref_apostila": {
    "modulo": "05",
    "secao": "11",
    "titulo": "Otimização de consultas",
    "link": "[[05 - Bancos de Dados e Linguagens#11. Otimização de consultas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §11 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na otimização heurística de consultas, uma regra fundamental é:",
  "imagem": null,
  "alternativas": {
    "A": "executar os produtos cartesianos antes das seleções.",
    "B": "aplicar as operações de seleção e projeção o mais cedo possível na árvore de consulta.",
    "C": "postergar as seleções para o topo da árvore.",
    "D": "substituir junções por produtos cartesianos.",
    "E": "sempre usar varredura completa da tabela."
  },
  "gabarito": "B",
  "comentario": "Empurrar σ e π para baixo reduz tamanhos intermediários.",
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
  "id": "ESP-BD-0078",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Otimização de consultas",
  "ref_apostila": {
    "modulo": "05",
    "secao": "11",
    "titulo": "Otimização de consultas",
    "link": "[[05 - Bancos de Dados e Linguagens#11. Otimização de consultas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §11 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O otimizador baseado em custo utiliza estatísticas armazenadas no catálogo, como número de linhas e de valores distintos, para estimar o custo dos planos alternativos.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "É a definição de CBO.",
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
  "id": "ESP-BD-0079",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Otimização de consultas",
  "ref_apostila": {
    "modulo": "05",
    "secao": "11",
    "titulo": "Otimização de consultas",
    "link": "[[05 - Bancos de Dados e Linguagens#11. Otimização de consultas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §11 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O algoritmo de junção que constrói uma tabela de dispersão sobre a menor relação e depois percorre a maior relação procurando correspondências, sendo eficiente para junções por igualdade em grandes volumes, é o:",
  "imagem": null,
  "alternativas": {
    "A": "nested loops",
    "B": "sort-merge",
    "C": "hash join",
    "D": "index seek",
    "E": "bitmap join"
  },
  "gabarito": "C",
  "comentario": "Hash join (fases *build* e *probe*).",
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
  "id": "ESP-BD-0080",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Otimização de consultas",
  "ref_apostila": {
    "modulo": "05",
    "secao": "11",
    "titulo": "Otimização de consultas",
    "link": "[[05 - Bancos de Dados e Linguagens#11. Otimização de consultas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §11 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Oracle, o comando utilizado para gerar o plano de execução de uma consulta sem executá-la é:",
  "imagem": null,
  "alternativas": {
    "A": "SHOW PLAN",
    "B": "EXPLAIN PLAN FOR",
    "C": "SET STATISTICS IO ON",
    "D": "DESCRIBE",
    "E": "ANALYZE QUERY"
  },
  "gabarito": "B",
  "comentario": "`EXPLAIN PLAN FOR`; `SET STATISTICS IO` é do SQL Server.",
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
  "id": "ESP-BD-0081",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Otimização de consultas",
  "ref_apostila": {
    "modulo": "05",
    "secao": "11",
    "titulo": "Otimização de consultas",
    "link": "[[05 - Bancos de Dados e Linguagens#11. Otimização de consultas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §11 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A consulta `SELECT * FROM movimento WHERE TO_CHAR(data_mov, 'YYYY') = '2024'` não utiliza o índice B-tree existente na coluna data_mov porque:",
  "imagem": null,
  "alternativas": {
    "A": "índices não funcionam com datas.",
    "B": "a função aplicada à coluna torna o predicado não sargável.",
    "C": "SELECT * impede o uso de índices.",
    "D": "TO_CHAR é proibido em WHERE.",
    "E": "o índice só funciona com ORDER BY."
  },
  "gabarito": "B",
  "comentario": "A função sobre a coluna impede o uso do índice comum (seria preciso um índice baseado em função ou reescrever o predicado como faixa de datas).",
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
  "id": "ESP-BD-0082",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "ODBC/JDBC e particularidades Oracle e SQL Server",
  "ref_apostila": {
    "modulo": "05",
    "secao": "12",
    "titulo": "ODBC/JDBC e particularidades Oracle e SQL Server",
    "link": "[[05 - Bancos de Dados e Linguagens#12. ODBC/JDBC e particularidades Oracle e SQL Server]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §12 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No JDBC, a interface mais adequada para executar repetidamente um comando SQL parametrizado, prevenindo ataques de SQL Injection, é:",
  "imagem": null,
  "alternativas": {
    "A": "Statement",
    "B": "PreparedStatement",
    "C": "ResultSet",
    "D": "DriverManager",
    "E": "DatabaseMetaData"
  },
  "gabarito": "B",
  "comentario": "PreparedStatement: pré-compilado e parametrizado.",
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
  "id": "ESP-BD-0083",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "ODBC/JDBC e particularidades Oracle e SQL Server",
  "ref_apostila": {
    "modulo": "05",
    "secao": "12",
    "titulo": "ODBC/JDBC e particularidades Oracle e SQL Server",
    "link": "[[05 - Bancos de Dados e Linguagens#12. ODBC/JDBC e particularidades Oracle e SQL Server]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §12 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O driver JDBC do tipo 4 é escrito totalmente em Java e se comunica diretamente com o SGBD por meio do protocolo de rede nativo do banco.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Tipo 4 = \"thin\", Java puro, protocolo nativo.",
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
  "id": "ESP-BD-0084",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "ODBC/JDBC e particularidades Oracle e SQL Server",
  "ref_apostila": {
    "modulo": "05",
    "secao": "12",
    "titulo": "ODBC/JDBC e particularidades Oracle e SQL Server",
    "link": "[[05 - Bancos de Dados e Linguagens#12. ODBC/JDBC e particularidades Oracle e SQL Server]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §12 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No ODBC, o componente responsável por carregar o driver adequado e encaminhar a ele as chamadas da aplicação é o:",
  "imagem": null,
  "alternativas": {
    "A": "DSN",
    "B": "Driver Manager",
    "C": "Listener",
    "D": "Data Pump",
    "E": "Connection Pool"
  },
  "gabarito": "B",
  "comentario": "O Driver Manager.",
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
  "id": "ESP-BD-0085",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "ODBC/JDBC e particularidades Oracle e SQL Server",
  "ref_apostila": {
    "modulo": "05",
    "secao": "12",
    "titulo": "ODBC/JDBC e particularidades Oracle e SQL Server",
    "link": "[[05 - Bancos de Dados e Linguagens#12. ODBC/JDBC e particularidades Oracle e SQL Server]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §12 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No SQL Server, o banco de sistema que armazena as informações de jobs do SQL Server Agent e o histórico de backups é o:",
  "imagem": null,
  "alternativas": {
    "A": "master",
    "B": "model",
    "C": "msdb",
    "D": "tempdb",
    "E": "resource"
  },
  "gabarito": "C",
  "comentario": "msdb.",
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
  "id": "ESP-BD-0086",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "ODBC/JDBC e particularidades Oracle e SQL Server",
  "ref_apostila": {
    "modulo": "05",
    "secao": "12",
    "titulo": "ODBC/JDBC e particularidades Oracle e SQL Server",
    "link": "[[05 - Bancos de Dados e Linguagens#12. ODBC/JDBC e particularidades Oracle e SQL Server]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §12 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Oracle, o processo de background responsável por gravar o conteúdo do redo log buffer nos arquivos de redo log online é o:",
  "imagem": null,
  "alternativas": {
    "A": "DBWn",
    "B": "LGWR",
    "C": "SMON",
    "D": "PMON",
    "E": "CKPT"
  },
  "gabarito": "B",
  "comentario": "LGWR (Log Writer). DBWn grava blocos de dados.",
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
  "id": "ESP-BD-0087",
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
    "tipo": "apostila",
    "fonte": "Apostila 05 §13 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo Inmon, um Data Warehouse é uma coleção de dados:",
  "imagem": null,
  "alternativas": {
    "A": "orientada a aplicações, integrada, volátil e atual.",
    "B": "orientada por assunto, integrada, variante no tempo e não volátil.",
    "C": "normalizada, transacional, volátil e integrada.",
    "D": "orientada por assunto, departamental, atual e volátil.",
    "E": "desnormalizada, operacional e não integrada."
  },
  "gabarito": "B",
  "comentario": "As quatro características de Inmon.",
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
  "id": "ESP-BD-0088",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
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
    "tipo": "apostila",
    "fonte": "Apostila 05 §13 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No esquema floco de neve, as tabelas de dimensão são normalizadas, o que reduz a redundância, mas aumenta a quantidade de junções nas consultas.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Snowflake normaliza dimensões.",
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
  "id": "ESP-BD-0089",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
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
    "tipo": "apostila",
    "fonte": "Apostila 05 §13 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um analista visualiza o total de operações de crédito por região e passa a visualizá-lo por agência dentro de cada região. A operação OLAP realizada foi:",
  "imagem": null,
  "alternativas": {
    "A": "roll-up",
    "B": "drill-down",
    "C": "slice",
    "D": "pivot",
    "E": "drill-across"
  },
  "gabarito": "B",
  "comentario": "Mais detalhe = drill-down.",
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
  "id": "ESP-BD-0090",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
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
    "tipo": "apostila",
    "fonte": "Apostila 05 §13 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma dimensão de mudança lenta do tipo 2, quando um cliente muda de endereço:",
  "imagem": null,
  "alternativas": {
    "A": "o endereço antigo é sobrescrito.",
    "B": "uma nova linha é inserida na dimensão, preservando o histórico.",
    "C": "uma coluna \"endereço anterior\" é criada.",
    "D": "a tabela fato é atualizada.",
    "E": "o cliente é excluído."
  },
  "gabarito": "B",
  "comentario": "SCD tipo 2 insere nova versão (nova surrogate key, vigência).",
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
  "id": "ESP-BD-0091",
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
    "tipo": "apostila",
    "fonte": "Apostila 05 §13 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O saldo bancário diário armazenado em uma tabela fato é exemplo de medida:",
  "imagem": null,
  "alternativas": {
    "A": "aditiva",
    "B": "semiaditiva",
    "C": "não aditiva",
    "D": "degenerada",
    "E": "derivada de dimensão junk"
  },
  "gabarito": "B",
  "comentario": "Saldo não pode ser somado ao longo do tempo: semiaditivo.",
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
  "id": "ESP-BD-0092",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
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
    "tipo": "apostila",
    "fonte": "Apostila 05 §13 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A operação OLAP que seleciona um único valor de uma dimensão (ex.: ano = 2024), reduzindo a dimensionalidade do cubo, é:",
  "imagem": null,
  "alternativas": {
    "A": "dice",
    "B": "slice",
    "C": "drill-through",
    "D": "roll-up",
    "E": "pivot"
  },
  "gabarito": "B",
  "comentario": "Slice: um valor de uma dimensão. Dice: faixas em duas ou mais dimensões.",
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
  "id": "ESP-BD-0093",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Data Mining",
  "ref_apostila": {
    "modulo": "05",
    "secao": "14",
    "titulo": "Data Mining",
    "link": "[[05 - Bancos de Dados e Linguagens#14. Data Mining]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §14 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A tarefa de mineração que identifica grupos de clientes com comportamento semelhante, sem classes previamente definidas, é:",
  "imagem": null,
  "alternativas": {
    "A": "classificação",
    "B": "regressão",
    "C": "agrupamento (clustering)",
    "D": "associação",
    "E": "sumarização"
  },
  "gabarito": "C",
  "comentario": "Clustering é não supervisionado.",
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
  "id": "ESP-BD-0094",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Data Mining",
  "ref_apostila": {
    "modulo": "05",
    "secao": "14",
    "titulo": "Data Mining",
    "link": "[[05 - Bancos de Dados e Linguagens#14. Data Mining]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §14 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No processo KDD, a mineração de dados corresponde a uma das etapas, sendo precedida por seleção, pré-processamento e transformação dos dados.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Data mining é a etapa central do KDD.",
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
  "id": "ESP-BD-0095",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Data Mining",
  "ref_apostila": {
    "modulo": "05",
    "secao": "14",
    "titulo": "Data Mining",
    "link": "[[05 - Bancos de Dados e Linguagens#14. Data Mining]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §14 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em 200 transações, 40 contêm o produto A, e 30 contêm A e B. A confiança da regra A ⇒ B é:",
  "imagem": null,
  "alternativas": {
    "A": "15%",
    "B": "20%",
    "C": "30%",
    "D": "75%",
    "E": "133%"
  },
  "gabarito": "D",
  "comentario": "Confiança = 30/40 = 75%. (O suporte seria 30/200 = 15%.)",
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
  "id": "ESP-BD-0096",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Data Mining",
  "ref_apostila": {
    "modulo": "05",
    "secao": "14",
    "titulo": "Data Mining",
    "link": "[[05 - Bancos de Dados e Linguagens#14. Data Mining]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §14 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São algoritmos tipicamente usados em classificação:",
  "imagem": null,
  "alternativas": {
    "A": "k-means e DBSCAN",
    "B": "Apriori e FP-Growth",
    "C": "árvores de decisão e Naive Bayes",
    "D": "k-means e Apriori",
    "E": "PCA e DBSCAN"
  },
  "gabarito": "C",
  "comentario": "k-means/DBSCAN = agrupamento; Apriori/FP-Growth = associação.",
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
  "id": "ESP-BD-0097",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "Data Mining",
  "ref_apostila": {
    "modulo": "05",
    "secao": "14",
    "titulo": "Data Mining",
    "link": "[[05 - Bancos de Dados e Linguagens#14. Data Mining]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §14 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A fase do CRISP-DM em que se seleciona e aplica a técnica de modelagem é a:",
  "imagem": null,
  "alternativas": {
    "A": "primeira",
    "B": "segunda",
    "C": "terceira",
    "D": "quarta",
    "E": "sexta"
  },
  "gabarito": "D",
  "comentario": "Modelagem é a 4ª fase (negócio, dados, preparação, **modelagem**, avaliação, implantação).",
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
  "id": "ESP-BD-0098",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "NoSQL (chave-valor, documento, colunar, grafo",
  "ref_apostila": {
    "modulo": "05",
    "secao": "15",
    "titulo": "NoSQL (chave-valor, documento, colunar, grafo; CAP e BASE)",
    "link": "[[05 - Bancos de Dados e Linguagens#15. NoSQL (chave-valor, documento, colunar, grafo; CAP e BASE)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §15 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O tipo de banco NoSQL mais adequado para representar e consultar relacionamentos complexos entre entidades, como em redes sociais e detecção de fraudes baseada em vínculos, é o orientado a:",
  "imagem": null,
  "alternativas": {
    "A": "chave-valor",
    "B": "documentos",
    "C": "colunas",
    "D": "grafos",
    "E": "objetos"
  },
  "gabarito": "D",
  "comentario": "Grafos (nós e arestas com propriedades; travessias eficientes).",
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
  "id": "ESP-BD-0099",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "NoSQL (chave-valor, documento, colunar, grafo",
  "ref_apostila": {
    "modulo": "05",
    "secao": "15",
    "titulo": "NoSQL (chave-valor, documento, colunar, grafo; CAP e BASE)",
    "link": "[[05 - Bancos de Dados e Linguagens#15. NoSQL (chave-valor, documento, colunar, grafo; CAP e BASE)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §15 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo o teorema CAP, um sistema distribuído pode garantir simultaneamente consistência, disponibilidade e tolerância a partições, desde que utilize replicação síncrona.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "O CAP afirma justamente que não é possível garantir as três ao mesmo tempo; na presença de partição, sacrifica-se C ou A.",
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
  "id": "ESP-BD-0100",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "NoSQL (chave-valor, documento, colunar, grafo",
  "ref_apostila": {
    "modulo": "05",
    "secao": "15",
    "titulo": "NoSQL (chave-valor, documento, colunar, grafo; CAP e BASE)",
    "link": "[[05 - Bancos de Dados e Linguagens#15. NoSQL (chave-valor, documento, colunar, grafo; CAP e BASE)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §15 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No acrônimo BASE, a letra E refere-se a:",
  "imagem": null,
  "alternativas": {
    "A": "Escalabilidade elástica",
    "B": "Execução estrita",
    "C": "Consistência eventual (Eventual consistency)",
    "D": "Estado encapsulado",
    "E": "Esquema estruturado"
  },
  "gabarito": "C",
  "comentario": "*Eventually consistent*.",
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
  "id": "ESP-BD-0101",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "NoSQL (chave-valor, documento, colunar, grafo",
  "ref_apostila": {
    "modulo": "05",
    "secao": "15",
    "titulo": "NoSQL (chave-valor, documento, colunar, grafo; CAP e BASE)",
    "link": "[[05 - Bancos de Dados e Linguagens#15. NoSQL (chave-valor, documento, colunar, grafo; CAP e BASE)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §15 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "MongoDB e CouchDB são exemplos de bancos NoSQL do tipo:",
  "imagem": null,
  "alternativas": {
    "A": "chave-valor",
    "B": "documento",
    "C": "família de colunas",
    "D": "grafo",
    "E": "relacional distribuído"
  },
  "gabarito": "B",
  "comentario": "Documento (JSON/BSON).",
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
  "id": "ESP-BD-0102",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "NoSQL (chave-valor, documento, colunar, grafo",
  "ref_apostila": {
    "modulo": "05",
    "secao": "15",
    "titulo": "NoSQL (chave-valor, documento, colunar, grafo; CAP e BASE)",
    "link": "[[05 - Bancos de Dados e Linguagens#15. NoSQL (chave-valor, documento, colunar, grafo; CAP e BASE)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §15 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A técnica de distribuir horizontalmente os dados de uma coleção entre vários servidores, cada um responsável por um subconjunto das chaves, é denominada:",
  "imagem": null,
  "alternativas": {
    "A": "normalização",
    "B": "sharding",
    "C": "replicação síncrona",
    "D": "desnormalização",
    "E": "indexação bitmap"
  },
  "gabarito": "B",
  "comentario": "Sharding (particionamento horizontal); replicação copia os mesmos dados em vários nós.",
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
  "id": "ESP-BD-0103",
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
    "tipo": "apostila",
    "fonte": "Apostila 05 §27 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em PL/pgSQL, para executar uma função descartando o resultado de um SELECT, usa-se:",
  "imagem": null,
  "alternativas": {
    "A": "CALL.",
    "B": "PERFORM.",
    "C": "EXECUTE IMMEDIATE.",
    "D": "DBMS_OUTPUT.",
    "E": "RETURN NEXT."
  },
  "gabarito": "B",
  "comentario": "PERFORM executa a consulta e descarta o resultado. CALL chama procedimentos; EXECUTE IMMEDIATE é sintaxe Oracle.",
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
  "id": "ESP-BD-0104",
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
    "tipo": "apostila",
    "fonte": "Apostila 05 §27 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No PostgreSQL, um gatilho (trigger) é implementado por meio de",
  "imagem": null,
  "alternativas": {
    "A": "um bloco anônimo associado diretamente à tabela, sem função.",
    "B": "uma função que retorna o tipo trigger, associada à tabela pelo comando CREATE TRIGGER.",
    "C": "um package com procedimentos de gatilho.",
    "D": "uma visão materializada atualizada automaticamente.",
    "E": "um procedimento chamado por CALL a cada linha."
  },
  "gabarito": "B",
  "comentario": "No PostgreSQL o gatilho sempre chama uma função `RETURNS trigger`.",
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
  "id": "ESP-BD-0105",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
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
    "tipo": "apostila",
    "fonte": "Apostila 05 §27 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em PostgreSQL, procedimentos criados com CREATE PROCEDURE podem executar COMMIT e ROLLBACK em seu corpo, ao contrário das funções.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Desde o PostgreSQL 11, procedimentos podem controlar transações; funções não.",
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
  "id": "ESP-BD-0106",
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
    "tipo": "apostila",
    "fonte": "Apostila 05 §27 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O comando MERGE, que permite inserir, atualizar ou excluir linhas conforme a correspondência com uma tabela de origem, passou a ser suportado nativamente pelo PostgreSQL na versão:",
  "imagem": null,
  "alternativas": {
    "A": "9.5.",
    "B": "12.",
    "C": "13.",
    "D": "14.",
    "E": "15."
  },
  "gabarito": "E",
  "comentario": "MERGE chegou no PostgreSQL 15. Antes havia só `INSERT ... ON CONFLICT` (desde 9.5).",
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
  "id": "ESP-BD-0107",
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
    "tipo": "apostila",
    "fonte": "Apostila 05 §27 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma equipe Java quer executar testes de integração com um banco relacional que suba junto com a aplicação, em memória, sem instalar servidor. Uma escolha adequada é:",
  "imagem": null,
  "alternativas": {
    "A": "Oracle 19c multitenant.",
    "B": "H2 Database.",
    "C": "MongoDB Atlas.",
    "D": "Redis Cluster.",
    "E": "Cassandra."
  },
  "gabarito": "B",
  "comentario": "H2 roda embutido e em memória, ideal para testes. As demais opções são servidores ou NoSQL.",
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
