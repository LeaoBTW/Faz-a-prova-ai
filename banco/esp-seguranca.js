/*
 * Específicos – Segurança da Informação
 * Gerado por tools/importar.py a partir das fontes do vault (2026-11-13).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 * Rodar o importador de novo sobrescreve este arquivo.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-SEG-0001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "LGPD: anonimização",
  "ref_apostila": {
    "modulo": "04",
    "secao": "20",
    "titulo": "LGPD – Lei Geral de Proteção de Dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#20. LGPD – Lei Geral de Proteção de Dados]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q60",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 60
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O banco de dados gerenciado por Paulo possui os dados a seguir.\n\n| id_pessoa | nome | genero | dt_nasc | endereco |\n|---|---|---|---|---|\n| ea5d0c10 | João | Masculino | 15/08/25 | R. N. Silva 12 CEP 20320-190 |\n| 00fc771f | Luiza | Feminino | 06/08/16 | Av. Carlos 30 CEP 22040-320 |\n| e2c5f2dd | Heitor | Masculino | 30/06/07 | R. Trind 22 CEP 72000-100 |\n\nPara atender a Lei Geral de Proteção de Dados Pessoais (LGPD), Paulo realizou um tratamento nos dados para perder a possibilidade de associação, direta ou indireta, a um indivíduo, e gerou a tabela abaixo.\n\n| id_pessoa | nome | genero | dt_nasc | endereco |\n|---|---|---|---|---|\n| d1b2d23f | REMOVIDO | M | 80 - | CEP 20320-190 |\n| c9ee2d5b | REMOVIDO | F | 0 - 20 | CEP 22040-320 |\n| 7a16ca062 | REMOVIDO | M | 0 - 20 | CEP 72000-100 |\n\nÀ luz da LGPD, o tratamento realizado por Paulo foi:",
  "imagem": null,
  "alternativas": {
    "A": "bloqueio;",
    "B": "anonimização;",
    "C": "difusão;",
    "D": "classificação;",
    "E": "extração."
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
  "id": "ESP-SEG-0002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
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
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q55",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 55
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um profissional de TI, está implementando um script Python para remover registros de uma tabela no banco de dados. O script usa “placeholders” e “parâmetros” para criar o comando SQL de remoção. Marque a opção que justifique corretamente a principal razão para usar placeholders e parametros em seu comando de remoção.",
  "imagem": null,
  "alternativas": {
    "A": "Para evitar a duplicação de registros na tabela.",
    "B": "Para manter a integridade dos dados na tabela.",
    "C": "Gerenciar e garantir a portabilidade do código.",
    "D": "Para proteger contra injeções de SQL."
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
  "id": "ESP-SEG-0003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "SQL injection",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q21",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 21
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um trecho de código monta a consulta assim: `\"SELECT * FROM cliente WHERE cpf = '\" + cpf + \"'\"`. A principal medida para eliminar a vulnerabilidade presente é:",
  "imagem": null,
  "alternativas": {
    "A": "criptografar a coluna `cpf` no banco de dados.",
    "B": "usar HTTPS entre o navegador e o servidor.",
    "C": "usar consultas parametrizadas (prepared statements).",
    "D": "ocultar mensagens de erro do usuário.",
    "E": "aumentar o tamanho máximo do campo `cpf`."
  },
  "gabarito": "C",
  "comentario": "É SQL Injection: a concatenação deixa o dado virar comando. Consultas parametrizadas separam código de dado. As outras medidas não resolvem a causa\n\nRevisar: Módulo 04, Segurança",
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
  "id": "ESP-SEG-0004",
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
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q22",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 22
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na assinatura digital de um documento com criptografia assimétrica:",
  "imagem": null,
  "alternativas": {
    "A": "o remetente cifra o documento com a chave pública do destinatário, garantindo autenticidade.",
    "B": "o remetente cifra o hash do documento com a chave pública dele, e o destinatário verifica com a chave privada do remetente.",
    "C": "remetente e destinatário compartilham a mesma chave secreta.",
    "D": "garante-se a confidencialidade do conteúdo, mas não a integridade.",
    "E": "o remetente cifra o hash do documento com a chave privada dele, e qualquer pessoa verifica com a chave pública do remetente."
  },
  "gabarito": "E",
  "comentario": "Assina-se o hash com a chave privada do remetente (autenticidade, integridade, não repúdio); verifica-se com a chave pública dele. Cifrar com a chave pública do destinatário dá confidencialidade, não assinatura\n\nRevisar: Módulo 04, Criptografia",
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
  "id": "ESP-SEG-0005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "OWASP Top 10: quebra de controle de acesso",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q23",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 23
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um cliente logado acessa `https://app.banco/api/contas/1001/extrato`, troca o número para `1002` e consegue ver o extrato de outra pessoa. Segundo o OWASP Top 10, essa falha se enquadra principalmente em:",
  "imagem": null,
  "alternativas": {
    "A": "Quebra de Controle de Acesso (Broken Access Control).",
    "B": "Falhas Criptográficas.",
    "C": "Injeção.",
    "D": "Componentes Vulneráveis e Desatualizados.",
    "E": "Falhas de Registro e Monitoramento."
  },
  "gabarito": "A",
  "comentario": "Acessar recurso de outro usuário trocando o identificador (IDOR) é Quebra de Controle de Acesso, a primeira do OWASP Top 10\n\nRevisar: Módulo 04, OWASP",
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
  "id": "ESP-SEG-0006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "LGPD: controlador e operador",
  "ref_apostila": {
    "modulo": "04",
    "secao": "20",
    "titulo": "LGPD – Lei Geral de Proteção de Dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#20. LGPD – Lei Geral de Proteção de Dados]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q24",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 24
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O Banestes contrata uma empresa de computação em nuvem para hospedar o sistema de cadastro de clientes, e essa empresa trata os dados pessoais apenas conforme as instruções do banco. Segundo a LGPD, o banco e a empresa de nuvem são, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "operador e controlador.",
    "B": "controlador e operador.",
    "C": "encarregado e operador.",
    "D": "controlador e encarregado.",
    "E": "titular e controlador."
  },
  "gabarito": "B",
  "comentario": "Quem decide sobre o tratamento é o controlador (banco); quem trata em nome dele é o operador (nuvem). Encarregado é o canal com titulares e ANPD\n\nRevisar: Módulo 04, LGPD",
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
  "id": "ESP-SEG-0007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Res. CMN 4.893/2021: segurança cibernética",
  "ref_apostila": {
    "modulo": "07",
    "secao": "2",
    "titulo": "Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#2. Nuvem na prática: responsabilidade compartilhada, elasticidade, alta disponibilidade, serverless, custos e nuvem no setor bancário]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q40",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 40
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo a Resolução CMN 4.893/2021, a política de segurança cibernética das instituições financeiras deve:",
  "imagem": null,
  "alternativas": {
    "A": "ser aprovada pelo conselho de administração ou, na sua inexistência, pela diretoria da instituição.",
    "B": "ser mantida em sigilo inclusive para os funcionários da instituição.",
    "C": "proibir a contratação de qualquer serviço de computação em nuvem.",
    "D": "ser elaborada e aprovada pelo Banco Central para cada instituição.",
    "E": "dispensar procedimentos de resposta a incidentes quando houver seguro cibernético."
  },
  "gabarito": "A",
  "comentario": "A política deve ser aprovada pelo conselho de administração ou, na falta dele, pela diretoria, e ser divulgada aos funcionários. A norma regula, e não proíbe, a nuvem\n\nRevisar: Módulo 03, Res. CMN 4.893",
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
  "id": "ESP-SEG-0008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Segurança: princípios, vulnerabilidades e ataques",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §17 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O princípio da segurança que garante que o autor de uma mensagem não possa negar tê-la enviado é:",
  "imagem": null,
  "alternativas": {
    "A": "confidencialidade",
    "B": "disponibilidade",
    "C": "não repúdio",
    "D": "integridade",
    "E": "legalidade"
  },
  "gabarito": "C",
  "comentario": "Não repúdio (irretratabilidade), obtido com assinatura digital.",
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
  "id": "ESP-SEG-0009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Segurança: princípios, vulnerabilidades e ataques",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §17 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um malware que se propaga automaticamente pela rede explorando vulnerabilidades, sem necessidade de um arquivo hospedeiro nem de ação do usuário, é classificado como:",
  "imagem": null,
  "alternativas": {
    "A": "vírus",
    "B": "worm",
    "C": "cavalo de Troia",
    "D": "rootkit",
    "E": "spyware"
  },
  "gabarito": "B",
  "comentario": "Worm: autônomo e autorreplicante via rede. O vírus depende de hospedeiro; o trojan se disfarça e não se replica.",
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
  "id": "ESP-SEG-0010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Segurança: princípios, vulnerabilidades e ataques",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §17 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um usuário autenticado no internet banking acessa, em outra aba, uma página maliciosa que submete automaticamente um formulário de transferência ao banco, aproveitando o cookie de sessão. Esse ataque é denominado:",
  "imagem": null,
  "alternativas": {
    "A": "XSS refletido",
    "B": "SQL injection",
    "C": "CSRF",
    "D": "clickjacking",
    "E": "pharming"
  },
  "gabarito": "C",
  "comentario": "CSRF: a requisição forjada usa a sessão autenticada da vítima. Defesa: token anti-CSRF, SameSite, confirmação da transação.",
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
  "id": "ESP-SEG-0011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Segurança: princípios, vulnerabilidades e ataques",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §17 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A medida mais eficaz para prevenir SQL injection é:",
  "imagem": null,
  "alternativas": {
    "A": "ocultar mensagens de erro do banco.",
    "B": "usar consultas parametrizadas (prepared statements).",
    "C": "criptografar o banco de dados.",
    "D": "usar HTTPS.",
    "E": "bloquear o caractere de aspas no navegador por JavaScript."
  },
  "gabarito": "B",
  "comentario": "Consultas parametrizadas separam código e dados. Ocultar erros ajuda pouco (há injeção cega); validação no cliente é contornável; HTTPS e criptografia não tratam a injeção.",
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
  "id": "ESP-SEG-0012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Segurança: princípios, vulnerabilidades e ataques",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §17 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma política de backup usa um backup completo semanal e backups diários que copiam apenas o que foi alterado desde o último backup completo. Para restaurar os dados após uma falha, são necessários:",
  "imagem": null,
  "alternativas": {
    "A": "apenas o último backup diário.",
    "B": "o backup completo e todos os backups diários desde então.",
    "C": "o backup completo e o último backup diário (diferencial).",
    "D": "apenas o backup completo.",
    "E": "todos os backups completos já feitos."
  },
  "gabarito": "C",
  "comentario": "\"Alterado desde o último completo\" define o diferencial: basta o completo + o último diferencial.",
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
  "id": "ESP-SEG-0013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Segurança: princípios, vulnerabilidades e ataques",
  "ref_apostila": {
    "modulo": "04",
    "secao": "17",
    "titulo": "Segurança: princípios, vulnerabilidades e ataques",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#17. Segurança: princípios, vulnerabilidades e ataques]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §17 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre IDS e IPS, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "o IDS bloqueia ativamente o tráfego malicioso em linha.",
    "B": "o IPS apenas gera alertas, sem intervir no tráfego.",
    "C": "a detecção por anomalia é capaz de identificar ataques desconhecidos, porém tende a gerar mais falsos positivos.",
    "D": "a detecção por assinatura detecta com facilidade ataques zero-day.",
    "E": "IDS e IPS substituem o firewall."
  },
  "gabarito": "C",
  "comentario": "O IDS detecta e alerta; o IPS bloqueia em linha; assinaturas não pegam zero-day; e eles complementam, não substituem, o firewall.",
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
  "id": "ESP-SEG-0014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Criptografia, hash, assinatura digital e certificação digital",
  "ref_apostila": {
    "modulo": "04",
    "secao": "18",
    "titulo": "Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#18. Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §18 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Ana deseja enviar a Bruno uma mensagem que somente Bruno possa ler. Utilizando criptografia assimétrica, Ana deve cifrar a mensagem com:",
  "imagem": null,
  "alternativas": {
    "A": "a sua chave privada",
    "B": "a sua chave pública",
    "C": "a chave pública de Bruno",
    "D": "a chave privada de Bruno",
    "E": "uma chave simétrica derivada da chave privada de Bruno"
  },
  "gabarito": "C",
  "comentario": "Sigilo: cifra-se com a chave pública do destinatário, e só a privada dele decifra.",
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
  "id": "ESP-SEG-0015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Criptografia, hash, assinatura digital e certificação digital",
  "ref_apostila": {
    "modulo": "04",
    "secao": "18",
    "titulo": "Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#18. Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §18 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na assinatura digital, o emissor:",
  "imagem": null,
  "alternativas": {
    "A": "cifra o documento inteiro com a chave pública do destinatário.",
    "B": "calcula o hash do documento e o cifra com sua própria chave privada.",
    "C": "calcula o hash e o cifra com a chave pública da AC.",
    "D": "cifra o documento com uma chave simétrica e envia a chave junto.",
    "E": "garante, com isso, a confidencialidade do documento."
  },
  "gabarito": "B",
  "comentario": "Hash do documento cifrado com a chave privada do emissor. Assinatura não dá confidencialidade.",
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
  "id": "ESP-SEG-0016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Criptografia, hash, assinatura digital e certificação digital",
  "ref_apostila": {
    "modulo": "04",
    "secao": "18",
    "titulo": "Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#18. Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §18 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre algoritmos criptográficos, assinale a correta:",
  "imagem": null,
  "alternativas": {
    "A": "AES é assimétrico e utiliza chaves de 2048 bits.",
    "B": "RSA é simétrico e baseado em curvas elípticas.",
    "C": "SHA-256 é uma função hash que produz resumo de 256 bits e não é reversível.",
    "D": "DES é considerado seguro por utilizar chave de 168 bits.",
    "E": "MD5 é recomendado para armazenamento de senhas."
  },
  "gabarito": "C",
  "comentario": "AES é simétrico (chaves de 128/192/256 bits); RSA é assimétrico baseado em fatoração; DES usa 56 bits e é inseguro; MD5 é quebrado e rápido demais para senhas.",
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
  "id": "ESP-SEG-0017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Criptografia, hash, assinatura digital e certificação digital",
  "ref_apostila": {
    "modulo": "04",
    "secao": "18",
    "titulo": "Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#18. Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §18 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na ICP-Brasil, a entidade que desempenha o papel de Autoridade Certificadora Raiz é:",
  "imagem": null,
  "alternativas": {
    "A": "o Serpro",
    "B": "a Receita Federal",
    "C": "o ITI",
    "D": "o Banco Central",
    "E": "o Comitê Gestor da Internet (CGI.br)"
  },
  "gabarito": "C",
  "comentario": "O ITI (autarquia federal vinculada à Casa Civil) é a AC Raiz; o Comitê Gestor define políticas.",
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
  "id": "ESP-SEG-0018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Criptografia, hash, assinatura digital e certificação digital",
  "ref_apostila": {
    "modulo": "04",
    "secao": "18",
    "titulo": "Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#18. Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §18 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A Autoridade de Registro (AR) é responsável por:",
  "imagem": null,
  "alternativas": {
    "A": "emitir e revogar certificados digitais.",
    "B": "assinar a LCR.",
    "C": "receber solicitações, identificar e validar os solicitantes e encaminhar os pedidos à AC.",
    "D": "gerar a chave privada do titular e guardá-la.",
    "E": "credenciar as autoridades certificadoras."
  },
  "gabarito": "C",
  "comentario": "A AR identifica e valida; quem emite e revoga é a AC; quem credencia é a AC Raiz (ITI).",
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
  "id": "ESP-SEG-0019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Criptografia, hash, assinatura digital e certificação digital",
  "ref_apostila": {
    "modulo": "04",
    "secao": "18",
    "titulo": "Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#18. Criptografia, hash, assinatura digital e certificação digital (ICP-Brasil)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §18 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O certificado ICP-Brasil do tipo A3 caracteriza-se por:",
  "imagem": null,
  "alternativas": {
    "A": "armazenar a chave privada em arquivo no computador, com validade de 1 ano.",
    "B": "armazenar a chave privada em hardware criptográfico, como token ou cartão inteligente.",
    "C": "ser destinado exclusivamente a carimbo do tempo.",
    "D": "dispensar a identificação do titular.",
    "E": "ser emitido diretamente pela AC Raiz ao usuário final."
  },
  "gabarito": "B",
  "comentario": "A3: chave em hardware (token, smart card, HSM). A1 é em software, com validade de 1 ano. A AC Raiz não emite para usuário final.",
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
  "id": "ESP-SEG-0020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §19 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na edição 2025 do OWASP Top 10, a categoria que ocupa a primeira posição é:",
  "imagem": null,
  "alternativas": {
    "A": "Injection",
    "B": "Cryptographic Failures",
    "C": "Broken Access Control",
    "D": "Security Misconfiguration",
    "E": "Software Supply Chain Failures"
  },
  "gabarito": "C",
  "comentario": "Broken Access Control lidera desde 2021 e continua em 1º em 2025.",
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
  "id": "ESP-SEG-0021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §19 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um usuário autenticado altera, na requisição `GET /api/clientes/5501/cartoes`, o identificador 5501 para 5502 e obtém os cartões de outro cliente. Segundo o OWASP API Security Top 10 2023, trata-se de:",
  "imagem": null,
  "alternativas": {
    "A": "API2 – Broken Authentication",
    "B": "API1 – Broken Object Level Authorization",
    "C": "API4 – Unrestricted Resource Consumption",
    "D": "API8 – Security Misconfiguration",
    "E": "API10 – Unsafe Consumption of APIs"
  },
  "gabarito": "B",
  "comentario": "BOLA: falta de verificação de autorização no nível do objeto (o IDOR das APIs).",
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
  "id": "ESP-SEG-0022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §19 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A técnica de teste que analisa o código-fonte sem executar a aplicação, podendo ser integrada ao pipeline logo após o commit, é o:",
  "imagem": null,
  "alternativas": {
    "A": "DAST",
    "B": "pentest caixa-preta",
    "C": "SAST",
    "D": "RASP",
    "E": "fuzzing em produção"
  },
  "gabarito": "C",
  "comentario": "SAST: estático, caixa-branca, cedo no ciclo. DAST testa a aplicação em execução.",
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
  "id": "ESP-SEG-0023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §19 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No OAuth 2.0, o fluxo recomendado para a comunicação entre dois serviços backend, sem a participação de um usuário, é o:",
  "imagem": null,
  "alternativas": {
    "A": "Implicit",
    "B": "Resource Owner Password Credentials",
    "C": "Client Credentials",
    "D": "Authorization Code sem PKCE",
    "E": "Device Code"
  },
  "gabarito": "C",
  "comentario": "Client Credentials (máquina a máquina). Implicit e Password são desaconselhados.",
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
  "id": "ESP-SEG-0024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §19 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o JSON Web Token (JWT) assinado (JWS), é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "seu payload é cifrado, garantindo confidencialidade.",
    "B": "é composto por header, payload e signature, codificados em Base64URL; o payload pode ser lido por qualquer um que obtenha o token.",
    "C": "o algoritmo \"none\" deve ser aceito para compatibilidade.",
    "D": "a claim \"exp\" indica o emissor do token.",
    "E": "o uso de HS256 exige par de chaves pública e privada."
  },
  "gabarito": "B",
  "comentario": "JWS só codifica (Base64URL) e assina; não cifra. \"none\" deve ser rejeitado; \"exp\" é a expiração (o emissor é \"iss\"); HS256 usa segredo simétrico (HMAC).",
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
  "id": "ESP-SEG-0025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
  "ref_apostila": {
    "modulo": "04",
    "secao": "19",
    "titulo": "OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#19. OWASP Top 10, OWASP API Security Top 10, testes de segurança e segurança de APIs]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §19 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São novidades da edição 2025 do OWASP Top 10 as categorias:",
  "imagem": null,
  "alternativas": {
    "A": "Injection e XSS",
    "B": "Software Supply Chain Failures e Mishandling of Exceptional Conditions",
    "C": "SSRF e Insecure Design",
    "D": "CSRF e Clickjacking",
    "E": "Broken Authentication e Sensitive Data Exposure"
  },
  "gabarito": "B",
  "comentario": "A03 Software Supply Chain Failures e A10 Mishandling of Exceptional Conditions. O SSRF foi absorvido pelo A01.",
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
  "id": "ESP-SEG-0026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "LGPD – Lei Geral de Proteção de Dados",
  "ref_apostila": {
    "modulo": "04",
    "secao": "20",
    "titulo": "LGPD – Lei Geral de Proteção de Dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#20. LGPD – Lei Geral de Proteção de Dados]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §20 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "De acordo com a LGPD, é considerado dado pessoal sensível:",
  "imagem": null,
  "alternativas": {
    "A": "o número da conta-corrente do cliente.",
    "B": "o endereço residencial.",
    "C": "o dado biométrico vinculado a uma pessoa natural.",
    "D": "o CNPJ de uma empresa.",
    "E": "o histórico de transações financeiras."
  },
  "gabarito": "C",
  "comentario": "Biometria vinculada a pessoa natural é sensível (art. 5º, II). Dados financeiros e cadastrais são pessoais, mas não sensíveis; CNPJ não é dado pessoal.",
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
  "id": "ESP-SEG-0027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "LGPD – Lei Geral de Proteção de Dados",
  "ref_apostila": {
    "modulo": "04",
    "secao": "20",
    "titulo": "LGPD – Lei Geral de Proteção de Dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#20. LGPD – Lei Geral de Proteção de Dados]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §20 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do controlador é denominada:",
  "imagem": null,
  "alternativas": {
    "A": "encarregado",
    "B": "titular",
    "C": "operador",
    "D": "autoridade nacional",
    "E": "agente de pesquisa"
  },
  "gabarito": "C",
  "comentario": "Operador (art. 5º, VII). O encarregado é o canal de comunicação; o controlador decide.",
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
  "id": "ESP-SEG-0028",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "LGPD – Lei Geral de Proteção de Dados",
  "ref_apostila": {
    "modulo": "04",
    "secao": "20",
    "titulo": "LGPD – Lei Geral de Proteção de Dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#20. LGPD – Lei Geral de Proteção de Dados]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §20 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Constitui base legal prevista no art. 7º da LGPD para o tratamento de dados pessoais, mas NÃO prevista no art. 11 para dados sensíveis:",
  "imagem": null,
  "alternativas": {
    "A": "cumprimento de obrigação legal ou regulatória",
    "B": "proteção da vida ou da incolumidade física",
    "C": "legítimo interesse do controlador",
    "D": "exercício regular de direitos em processo judicial",
    "E": "tutela da saúde"
  },
  "gabarito": "C",
  "comentario": "Legítimo interesse (e também proteção do crédito) não existe para dados sensíveis.",
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
  "id": "ESP-SEG-0029",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "LGPD – Lei Geral de Proteção de Dados",
  "ref_apostila": {
    "modulo": "04",
    "secao": "20",
    "titulo": "LGPD – Lei Geral de Proteção de Dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#20. LGPD – Lei Geral de Proteção de Dados]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §20 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre anonimização e pseudonimização, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "os dados pseudonimizados deixam de ser dados pessoais.",
    "B": "os dados anonimizados não são considerados dados pessoais, salvo quando o processo de anonimização puder ser revertido com esforços razoáveis.",
    "C": "a pseudonimização é irreversível por definição.",
    "D": "a substituição do CPF por seu hash SHA-256 sem chave garante anonimização.",
    "E": "a LGPD não menciona pseudonimização."
  },
  "gabarito": "B",
  "comentario": "Art. 12. Dados pseudonimizados continuam pessoais; a pseudonimização é reversível com a informação adicional; hash sem chave de CPF é reversível por força bruta; a pseudonimização é definida no art. 13, § 4º.",
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
  "id": "ESP-SEG-0030",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "LGPD – Lei Geral de Proteção de Dados",
  "ref_apostila": {
    "modulo": "04",
    "secao": "20",
    "titulo": "LGPD – Lei Geral de Proteção de Dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#20. LGPD – Lei Geral de Proteção de Dados]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §20 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A multa simples prevista na LGPD é de até:",
  "imagem": null,
  "alternativas": {
    "A": "2% do faturamento global, sem limite.",
    "B": "4% do faturamento global ou 20 milhões de euros.",
    "C": "2% do faturamento da pessoa jurídica de direito privado, grupo ou conglomerado no Brasil no último exercício, excluídos os tributos, limitada a R$ 50 milhões por infração.",
    "D": "R$ 50 milhões por dia, sem relação com o faturamento.",
    "E": "10% do lucro líquido."
  },
  "gabarito": "C",
  "comentario": "Art. 52, II. A alternativa B descreve o GDPR europeu.",
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
  "id": "ESP-SEG-0031",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "LGPD – Lei Geral de Proteção de Dados",
  "ref_apostila": {
    "modulo": "04",
    "secao": "20",
    "titulo": "LGPD – Lei Geral de Proteção de Dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#20. LGPD – Lei Geral de Proteção de Dados]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §20 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O princípio da LGPD segundo o qual o tratamento deve limitar-se ao mínimo necessário para a realização de suas finalidades, com dados pertinentes, proporcionais e não excessivos, é o da:",
  "imagem": null,
  "alternativas": {
    "A": "adequação",
    "B": "finalidade",
    "C": "necessidade",
    "D": "prevenção",
    "E": "qualidade dos dados"
  },
  "gabarito": "C",
  "comentario": "Necessidade (minimização). Adequação é a compatibilidade com as finalidades informadas.",
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
  "id": "ESP-SEG-0032",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/…",
  "ref_apostila": {
    "modulo": "04",
    "secao": "21",
    "titulo": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#21. Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §21 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo a ISO 31000:2018, o \"processo de avaliação de riscos\" compreende:",
  "imagem": null,
  "alternativas": {
    "A": "identificação, análise e avaliação de riscos.",
    "B": "planejamento, execução e encerramento.",
    "C": "tratamento, aceitação e transferência.",
    "D": "monitoramento, auditoria e relato.",
    "E": "prevenção, detecção e correção."
  },
  "gabarito": "A",
  "comentario": "Identificação, análise e avaliação formam o processo de avaliação de riscos; o tratamento vem depois.",
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
  "id": "ESP-SEG-0033",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/…",
  "ref_apostila": {
    "modulo": "04",
    "secao": "21",
    "titulo": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#21. Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §21 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Contratar um seguro cibernético para cobrir perdas por vazamento de dados é, na ISO/IEC 27005, uma opção de tratamento do tipo:",
  "imagem": null,
  "alternativas": {
    "A": "modificar.",
    "B": "reter.",
    "C": "evitar.",
    "D": "compartilhar.",
    "E": "aceitar residualmente."
  },
  "gabarito": "D",
  "comentario": "Seguro e terceirização são compartilhamento do risco.",
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
  "id": "ESP-SEG-0034",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/…",
  "ref_apostila": {
    "modulo": "04",
    "secao": "21",
    "titulo": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#21. Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §21 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A Revisão 3 do NIST SP 800-61 organiza a resposta a incidentes segundo as funções do NIST Cybersecurity Framework 2.0, em lugar do ciclo de quatro fases da revisão anterior.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "A Rev. 3 (abr/2025) adota as seis funções do CSF 2.0.",
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
  "id": "ESP-SEG-0035",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/…",
  "ref_apostila": {
    "modulo": "04",
    "secao": "21",
    "titulo": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#21. Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §21 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na ISO/IEC 27035-1:2023, a fase em que se decide se um evento de segurança deve ser tratado como incidente é:",
  "imagem": null,
  "alternativas": {
    "A": "planejar e preparar.",
    "B": "detectar e reportar.",
    "C": "avaliar e decidir.",
    "D": "responder.",
    "E": "aprender lições."
  },
  "gabarito": "C",
  "comentario": "Em \"avaliar e decidir\" o evento é classificado e se decide se é incidente.",
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
  "id": "ESP-SEG-0036",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Segurança da Informação",
  "topico": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/…",
  "ref_apostila": {
    "modulo": "04",
    "secao": "21",
    "titulo": "Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#21. Gestão de riscos e incidentes: ISO 31000, ISO/IEC 27005, 27035, NIST SP 800-61r3 e ISO/IEC 27017]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §21 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A norma que complementa a ISO/IEC 27002 com controles específicos para provedores e clientes de serviços em nuvem, como segregação em ambientes virtuais e remoção de ativos ao fim do contrato, é a:",
  "imagem": null,
  "alternativas": {
    "A": "ISO/IEC 27001.",
    "B": "ISO/IEC 27005.",
    "C": "ISO/IEC 27017.",
    "D": "ISO/IEC 27035.",
    "E": "ISO 22301."
  },
  "gabarito": "C",
  "comentario": "A ISO/IEC 27017 é o código de prática de segurança para nuvem. A 22301 trata de continuidade de negócios.",
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
