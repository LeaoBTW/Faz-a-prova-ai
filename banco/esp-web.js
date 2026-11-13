/*
 * Específicos – Desenvolvimento web e mobile
 * Gerado por tools/importar.py a partir das fontes do vault (2026-11-13).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 * Rodar o importador de novo sobrescreve este arquivo.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-WEB-0001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JavaScript e DOM",
  "ref_apostila": {
    "modulo": "05",
    "secao": "19",
    "titulo": "JavaScript",
    "link": "[[05 - Bancos de Dados e Linguagens#19. JavaScript]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q39",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 39
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o comando JavaScript a seguir.\n\n```js\ndocument.getElementById('demo').innerHTML = Date()\n```\n\nNuma página web na qual esse código seja aplicado, o elemento que é compatível com a estrutura do comando para receber a data corrente é:",
  "imagem": null,
  "alternativas": {
    "A": "<p \"demo\">H</p>",
    "B": "<p class=\"demo\">H</p>",
    "C": "<p id=\"demo\">H</p>",
    "D": "<p js=\"demo\">H</p>",
    "E": "<p onclick=\"demo\">H</p>"
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
  "id": "ESP-WEB-0002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Ajax",
  "ref_apostila": {
    "modulo": "05",
    "secao": "20",
    "titulo": "jQuery, Ajax (XMLHttpRequest/fetch) e JSON",
    "link": "[[05 - Bancos de Dados e Linguagens#20. jQuery, Ajax (XMLHttpRequest/fetch) e JSON]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q40",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 40
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No contexto das aplicações web, Ajax é uma tecnologia que destina-se primordialmente a:",
  "imagem": null,
  "alternativas": {
    "A": "criptografar dados que são transmitidos pela rede;",
    "B": "enviar e receber dados do servidor sem precisar recarregar a página inteira;",
    "C": "evitar ataques por meio de aplicativo web;",
    "D": "implementar mecanismos de login de duas etapas;",
    "E": "controlar aplicativos web que operam em diferentes plataformas."
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
  "id": "ESP-WEB-0003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Métodos HTTP",
  "ref_apostila": {
    "modulo": "05",
    "secao": "16",
    "titulo": "Programação web: cliente x servidor e HTTP",
    "link": "[[05 - Bancos de Dados e Linguagens#16. Programação web: cliente x servidor e HTTP]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q42",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 42
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No contexto dos métodos disponíveis pelo protocolo HTTP, a lista que contém apenas métodos válidos é:",
  "imagem": null,
  "alternativas": {
    "A": "GET, POST, PUT;",
    "B": "GET, PUT, SEND;",
    "C": "POST, READ, WRITE;",
    "D": "PUT, SET, WRITE;",
    "E": "SEND, INPUT, OUTPUT."
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
  "id": "ESP-WEB-0004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Ajax (XMLHttpRequest)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "20",
    "titulo": "jQuery, Ajax (XMLHttpRequest/fetch) e JSON",
    "link": "[[05 - Bancos de Dados e Linguagens#20. jQuery, Ajax (XMLHttpRequest/fetch) e JSON]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q44",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 44
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Numa aplicação web, considere o caso em que um arquivo intitulado xpto.txt é obtido do servidor sem que a página inteira seja recarregada.\n\nA estrutura básica correta do código para o uso da tecnologia Ajax nesse caso é:",
  "imagem": null,
  "alternativas": {
    "A": "```\nconst xhttp = new XMLHttpRequest();\nxhttp.open(\"GET\", \"xpto.txt\");\nxhttp.send();\n```",
    "B": "```\nconst xhttp = new HttpRequest();\nxhttp.onload = function() { ... }\nxhttp.open(\"GET\", \" xpto.txt \");\nxhttp.send();\n```",
    "C": "```\nconst xhttp = new XMLHttpRequest();\nxhttp.open = function() { ... }\nxhttp.send(\"GET\", \" xpto.txt \");\nxhttp.onload();\n```",
    "D": "```\nconst xhttp = new XMLHttpRequest();\nxhttp.onload = function(){ ... }\nxhttp.open(\"GET\", \" xpto.txt \");\nxhttp.send();\n```",
    "E": "```\nconst xhttp = new XMLRequest();\nxhttp.onload(\"GET\", \" xpto.txt \");\nxhttp.send();\n```"
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
  "id": "ESP-WEB-0005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Seletores CSS",
  "ref_apostila": {
    "modulo": "05",
    "secao": "18",
    "titulo": "CSS3",
    "link": "[[05 - Bancos de Dados e Linguagens#18. CSS3]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q45",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 45
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No contexto do uso de CSS para aplicar estilos a elementos HTML numa página web, o seletor universal, que referencia todos os elementos, é identificado pelo símbolo:",
  "imagem": null,
  "alternativas": {
    "A": "#",
    "B": "%",
    "C": "&",
    "D": "*",
    "E": "@"
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
  "id": "ESP-WEB-0006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "XML: elementos",
  "ref_apostila": {
    "modulo": "05",
    "secao": "21",
    "titulo": "XML (sintaxe, DTD, XSD, XPath)",
    "link": "[[05 - Bancos de Dados e Linguagens#21. XML (sintaxe, DTD, XSD, XPath)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q46",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 46
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Com referência à sintaxe do formato XML, um elemento (XML element) pode conter:",
  "imagem": null,
  "alternativas": {
    "A": "atributos, texto e formato;",
    "B": "atributos, texto e outros elementos XML;",
    "C": "atributos, texto, outros elementos XML e arrays;",
    "D": "texto, formato e outros elementos XML;",
    "E": "texto, outros elementos XML e arrays."
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
  "id": "ESP-WEB-0007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "jQuery: seletores e eventos",
  "ref_apostila": {
    "modulo": "05",
    "secao": "20",
    "titulo": "jQuery, Ajax (XMLHttpRequest/fetch) e JSON",
    "link": "[[05 - Bancos de Dados e Linguagens#20. jQuery, Ajax (XMLHttpRequest/fetch) e JSON]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q56",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 56
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Analise o fragmento de código jQuery a seguir.\n\n```js\n$(\"#x1\").click(function(){\n$(\"#x2\").html(\"<b>Hello world!</b>\");\n});\n```\n\nNuma página web, esse trecho faz com que um clique:",
  "imagem": null,
  "alternativas": {
    "A": "em qualquer elemento cuja tag é x1, cause uma alteração no conteúdo de todos os elementos com a tag x2;",
    "B": "em qualquer elemento da classe x1, cause uma alteração no conteúdo do elemento cujo id é x2;",
    "C": "no elemento cujo atributo id é x1, cause uma alteração no conteúdo de todos os elementos da classe x2;",
    "D": "no elemento cujo atributo id é x1, cause uma alteração no conteúdo do elemento cujo id é x2;",
    "E": "no elemento cujo atributo id é x1, cause uma alteração no conteúdo de todos os elementos com a tag x2."
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
  "id": "ESP-WEB-0008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Ajax",
  "ref_apostila": {
    "modulo": "05",
    "secao": "20",
    "titulo": "jQuery, Ajax (XMLHttpRequest/fetch) e JSON",
    "link": "[[05 - Bancos de Dados e Linguagens#20. jQuery, Ajax (XMLHttpRequest/fetch) e JSON]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q56",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 56
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Entre as inúmeras opções de desenvolvimento de uma página dinâmica, contamos com o uso do Asynchronous JavaScript and XML – AJAX, onde é comun utilizado em formulários de pesquisa em tempo real, em sistemas de chat online, em sistemas de comentários dinâmicos em blogs, entre muitas outras aplicações web, utilizado para atualizar apenas parte da página Web. Referente ao AJAX, marque a alternativa correta.",
  "imagem": null,
  "alternativas": {
    "A": "O AJAX baseia-se em tecnologias já disponíveis no lado servidor, entre elas a linguagem C#.",
    "B": "O AJAX baseia-se em tecnologias hibridas, entre elas a linguagem Java.",
    "C": "O AJAX baseia-se em tecnologias já disponíveis no lado cliente da navegação Web, entre elas a linguagem JavaScript.",
    "D": "O AJAX baseia-se em tecnologias já disponíveis no lado servidor, entre elas a linguagem de marcação de página HTML."
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
  "id": "ESP-WEB-0009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Formulários HTML e validação",
  "ref_apostila": {
    "modulo": "05",
    "secao": "17",
    "titulo": "HTML5",
    "link": "[[05 - Bancos de Dados e Linguagens#17. HTML5]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q58",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 58
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considerando os princípios fundamentais do desenvolvimento web, temos a importância dos formulários na interação entre usuários e servidores, analise as afirmações a seguir e marque a alternativa correta no uso e a validação de formulários em HTML.",
  "imagem": null,
  "alternativas": {
    "A": "Por ser o único elemento que viabiliza a interação com o servidor, o formulário deve permanecer isolado em uma página web, sem qualquer outra tag de conteúdo.",
    "B": "A validação é um processo que pode ocorrer tanto no lado cliente quanto no lado servidor.",
    "C": "Ao enviar dados para um servidor, é suficiente utilizar os campos presentes no próprio formulário, sem a necessidade de especificar qualquer ação adicional.",
    "D": "Quando for necessário enviar os dados para um servidor, basta utilizar os campos do próprio formulário, através da tag principal sendtoserver."
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
  "id": "ESP-WEB-0010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "CSS3: @font-face",
  "ref_apostila": {
    "modulo": "05",
    "secao": "18",
    "titulo": "CSS3",
    "link": "[[05 - Bancos de Dados e Linguagens#18. CSS3]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q60",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 60
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considerando o avanço proporcionado pela CSS3 no campo de design de páginas da web, especialmente no que diz respeito à utilização de novos tipos de fontes por meio da regra @font-face, avalie as afirmativas a seguir e selecione a alternativa que apresenta as opções corretas.\n\nI. Por meio da regra @font-face, é viável incorporar novas fontes nas páginas web, permitindo que o navegador as localize conforme necessário.\n\nII. A única desvantagem da nova regra, @font-face, é descontinuar as famílias de fontes que não possuíam total suporte pelos navegadores.\n\nIII. A regra @font-face não manteve o suporte à declaração font-family. Com isso, não é possível indicar uma ou várias fontes alternativas caso a preferencial não esteja disponível.\n\nIV. A regra @font-face permite que novas fontes sejam criadas e utilizadas em páginas. Essa regra informa ao browser o local onde a fonte a ser utilizada se encontra, permitindo ainda que seja verificado se o usuário já possui a fonte em questão.",
  "imagem": null,
  "alternativas": {
    "A": "Apenas III e IV.",
    "B": "Apenas I e II.",
    "C": "Apenas I e IV.",
    "D": "I, II, III e IV."
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
  "id": "ESP-WEB-0011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Avaliação de usabilidade",
  "ref_apostila": {
    "modulo": "06",
    "secao": "14",
    "titulo": "Prototipação e engenharia de usabilidade",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#14. Prototipação e engenharia de usabilidade]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q71",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 71
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre métodos para avaliação de usabilidade, marque a alternativa correta, que corresponde as definições: “é realizada por especialistas em usabilidade que avaliam o sistema com base em diretrizes e heurísticas” e “envolve a interação direta dos usuários com o sistema em um ambiente controlado”.",
  "imagem": null,
  "alternativas": {
    "A": "Testes de Usabilidade e Inspeção de Usabilidade.",
    "B": "Testes de Usabilidade e Pensar em Voz Alta.",
    "C": "Inspeção de Usabilidade e Análise de Tarefas.",
    "D": "Questionários de Satisfação do Usuário e Pensar em Voz Alta."
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
  "id": "ESP-WEB-0012",
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
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q10",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 10
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre APIs REST sobre HTTP, considere:\n\nI. O método GET é seguro e idempotente.\nII. O método POST é idempotente, pois repetir a mesma requisição sempre produz o mesmo efeito no servidor.\nIII. O método PUT é idempotente.\nIV. O código de status 201 indica que um novo recurso foi criado.\n\nEstá correto o que se afirma APENAS em",
  "imagem": null,
  "alternativas": {
    "A": "I, III e IV.",
    "B": "I e II.",
    "C": "II e IV.",
    "D": "I, II e III.",
    "E": "III e IV."
  },
  "gabarito": "A",
  "comentario": "POST não é idempotente: repetir pode criar dois recursos (dois Pix). GET é seguro e idempotente; PUT e DELETE são idempotentes; 201 = Created\n\nRevisar: Módulo 06, REST",
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
  "id": "ESP-WEB-0013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Heurísticas de Nielsen",
  "ref_apostila": {
    "modulo": "06",
    "secao": "14",
    "titulo": "Prototipação e engenharia de usabilidade",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#14. Prototipação e engenharia de usabilidade]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q20",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 20
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Antes de concluir uma transferência, o aplicativo do banco mostra uma tela com destinatário e valor e pede confirmação, para evitar que o cliente envie dinheiro à pessoa errada. Essa decisão de projeto atende principalmente à heurística de Nielsen de:",
  "imagem": null,
  "alternativas": {
    "A": "flexibilidade e eficiência de uso.",
    "B": "estética e design minimalista.",
    "C": "reconhecimento em vez de memorização.",
    "D": "prevenção de erros.",
    "E": "ajuda e documentação."
  },
  "gabarito": "D",
  "comentario": "Pedir confirmação antes de uma ação de difícil reversão é prevenção de erros\n\nRevisar: Módulo 06, Usabilidade",
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
  "id": "ESP-WEB-0014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "React: useEffect",
  "ref_apostila": {
    "modulo": "07",
    "secao": "5",
    "titulo": "React",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#5. React]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q29",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 29
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o componente React abaixo.\n\n```jsx\nfunction Saldo({ contaId }) {\n  const [saldo, setSaldo] = useState(null);\n  useEffect(() => {\n    fetch(`/api/contas/${contaId}/saldo`).then(r => r.json()).then(setSaldo);\n  }, [contaId]);\n  return <p>{saldo === null ? \"Carregando...\" : saldo}</p>;\n}\n```\n\nÉ correto afirmar que a requisição é feita:",
  "imagem": null,
  "alternativas": {
    "A": "antes da primeira renderização, e apenas uma vez.",
    "B": "depois de toda renderização, inclusive as causadas por `setSaldo`.",
    "C": "somente quando o componente é desmontado.",
    "D": "após a primeira renderização e sempre que `contaId` mudar.",
    "E": "nunca, porque `useEffect` não aceita funções assíncronas."
  },
  "gabarito": "D",
  "comentario": "Efeitos rodam depois da renderização; com `[contaId]`, rodam na montagem e quando `contaId` muda. `setSaldo` re-renderiza, mas não dispara o efeito de novo\n\nRevisar: Módulo 07, React",
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
  "id": "ESP-WEB-0015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "TypeScript e Angular",
  "ref_apostila": {
    "modulo": "07",
    "secao": "6",
    "titulo": "Angular",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#6. Angular]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q30",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 30
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre TypeScript e Angular, considere:\n\nI. O TypeScript é um superconjunto do JavaScript e seus tipos são verificados em tempo de compilação.\nII. No Angular, `[(ngModel)]` implementa a ligação de dados nos dois sentidos (two-way binding).\nIII. `*ngIf` e `*ngFor` são diretivas de atributo, pois alteram apenas a aparência dos elementos.\nIV. Um serviço com `@Injectable({ providedIn: 'root' })` tem uma única instância para toda a aplicação.\n\nEstá correto o que se afirma APENAS em",
  "imagem": null,
  "alternativas": {
    "A": "I e III.",
    "B": "II e III.",
    "C": "I, II e III.",
    "D": "III e IV.",
    "E": "I, II e IV."
  },
  "gabarito": "E",
  "comentario": "III está errada: `*ngIf` e `*ngFor` são diretivas **estruturais** (adicionam e removem elementos). As demais estão corretas\n\nRevisar: Módulo 07, TypeScript e Angular",
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
  "id": "ESP-WEB-0016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Protocolos e serviços, Web Services e VPN",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §16 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma API REST, um cliente autenticado tenta excluir um recurso para o qual não tem permissão. O código HTTP mais adequado para a resposta é:",
  "imagem": null,
  "alternativas": {
    "A": "401",
    "B": "403",
    "C": "404",
    "D": "500",
    "E": "302"
  },
  "gabarito": "B",
  "comentario": "403 Forbidden: o cliente está autenticado, mas não autorizado. 401 seria para falta de autenticação.",
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
  "id": "ESP-WEB-0017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Protocolos e serviços, Web Services e VPN",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §16 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em relação aos web services SOAP, o documento XML que descreve as operações disponíveis, os tipos de dados e o endereço do serviço é o:",
  "imagem": null,
  "alternativas": {
    "A": "UDDI",
    "B": "WSDL",
    "C": "XSLT",
    "D": "JSON Schema",
    "E": "Envelope SOAP"
  },
  "gabarito": "B",
  "comentario": "WSDL é o contrato do serviço. UDDI é o registro para descoberta; o Envelope é a estrutura da mensagem.",
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
  "id": "ESP-WEB-0018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Programação web: cliente x servidor e HTTP",
  "ref_apostila": {
    "modulo": "05",
    "secao": "16",
    "titulo": "Programação web: cliente x servidor e HTTP",
    "link": "[[05 - Bancos de Dados e Linguagens#16. Programação web: cliente x servidor e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §16 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O código de status HTTP que indica que o recurso solicitado foi criado com sucesso é:",
  "imagem": null,
  "alternativas": {
    "A": "200",
    "B": "201",
    "C": "204",
    "D": "301",
    "E": "304"
  },
  "gabarito": "B",
  "comentario": "201 Created (200 é sucesso genérico; 204 sem conteúdo).",
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
  "id": "ESP-WEB-0019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Programação web: cliente x servidor e HTTP",
  "ref_apostila": {
    "modulo": "05",
    "secao": "16",
    "titulo": "Programação web: cliente x servidor e HTTP",
    "link": "[[05 - Bancos de Dados e Linguagens#16. Programação web: cliente x servidor e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §16 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O método POST é mais seguro que o GET porque criptografa os dados enviados ao servidor, dispensando o uso de HTTPS.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "POST não criptografa; só o TLS (HTTPS) protege o conteúdo.",
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
  "id": "ESP-WEB-0020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Programação web: cliente x servidor e HTTP",
  "ref_apostila": {
    "modulo": "05",
    "secao": "16",
    "titulo": "Programação web: cliente x servidor e HTTP",
    "link": "[[05 - Bancos de Dados e Linguagens#16. Programação web: cliente x servidor e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §16 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São métodos HTTP idempotentes, mas não seguros:",
  "imagem": null,
  "alternativas": {
    "A": "GET e HEAD",
    "B": "POST e PATCH",
    "C": "PUT e DELETE",
    "D": "OPTIONS e TRACE",
    "E": "POST e PUT"
  },
  "gabarito": "C",
  "comentario": "PUT e DELETE alteram estado (não seguros), mas são idempotentes.",
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
  "id": "ESP-WEB-0021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Programação web: cliente x servidor e HTTP",
  "ref_apostila": {
    "modulo": "05",
    "secao": "16",
    "titulo": "Programação web: cliente x servidor e HTTP",
    "link": "[[05 - Bancos de Dados e Linguagens#16. Programação web: cliente x servidor e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §16 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um usuário autenticado tenta acessar um recurso para o qual não possui permissão. O código HTTP mais apropriado para a resposta é:",
  "imagem": null,
  "alternativas": {
    "A": "400",
    "B": "401",
    "C": "403",
    "D": "404",
    "E": "500"
  },
  "gabarito": "C",
  "comentario": "403 Forbidden. 401 indica falta de autenticação válida.",
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
  "id": "ESP-WEB-0022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Programação web: cliente x servidor e HTTP",
  "ref_apostila": {
    "modulo": "05",
    "secao": "16",
    "titulo": "Programação web: cliente x servidor e HTTP",
    "link": "[[05 - Bancos de Dados e Linguagens#16. Programação web: cliente x servidor e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §16 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O atributo de cookie que impede seu acesso por scripts executados no navegador, mitigando o roubo de sessão por XSS, é:",
  "imagem": null,
  "alternativas": {
    "A": "Secure",
    "B": "HttpOnly",
    "C": "SameSite",
    "D": "Domain",
    "E": "Max-Age"
  },
  "gabarito": "B",
  "comentario": "HttpOnly. Secure só restringe a HTTPS; SameSite mitiga CSRF.",
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
  "id": "ESP-WEB-0023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Programação web: cliente x servidor e HTTP",
  "ref_apostila": {
    "modulo": "05",
    "secao": "16",
    "titulo": "Programação web: cliente x servidor e HTTP",
    "link": "[[05 - Bancos de Dados e Linguagens#16. Programação web: cliente x servidor e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §16 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considerando a política de mesma origem, qual das URLs tem a mesma origem que `https://app.banco.com.br/home`?",
  "imagem": null,
  "alternativas": {
    "A": "http://app.banco.com.br/home",
    "B": "https://api.banco.com.br/home",
    "C": "https://app.banco.com.br:8443/home",
    "D": "https://app.banco.com.br/conta?x=1",
    "E": "https://banco.com.br/home"
  },
  "gabarito": "D",
  "comentario": "Mesmo esquema (https), host (app.banco.com.br) e porta (443 implícita); caminho e query não importam.",
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
  "id": "ESP-WEB-0024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "HTML5",
  "ref_apostila": {
    "modulo": "05",
    "secao": "17",
    "titulo": "HTML5",
    "link": "[[05 - Bancos de Dados e Linguagens#17. HTML5]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §17 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No HTML5, para que um formulário possa enviar arquivos por meio de `<input type=\"file\">`, deve-se utilizar:",
  "imagem": null,
  "alternativas": {
    "A": "method=\"get\" e enctype=\"text/plain\"",
    "B": "method=\"post\" e enctype=\"multipart/form-data\"",
    "C": "method=\"put\"",
    "D": "apenas o atributo multiple",
    "E": "enctype=\"application/json\""
  },
  "gabarito": "B",
  "comentario": "Upload exige POST + multipart/form-data.",
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
  "id": "ESP-WEB-0025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "HTML5",
  "ref_apostila": {
    "modulo": "05",
    "secao": "17",
    "titulo": "HTML5",
    "link": "[[05 - Bancos de Dados e Linguagens#17. HTML5]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §17 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um formulário HTML, campos com o atributo `disabled` não têm seus valores enviados ao servidor na submissão, enquanto campos `readonly` têm.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "disabled não é enviado; readonly é.",
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
  "id": "ESP-WEB-0026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "HTML5",
  "ref_apostila": {
    "modulo": "05",
    "secao": "17",
    "titulo": "HTML5",
    "link": "[[05 - Bancos de Dados e Linguagens#17. HTML5]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §17 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O elemento HTML5 destinado a representar um conteúdo independente e autocontido, como uma notícia ou postagem de blog, é:",
  "imagem": null,
  "alternativas": {
    "A": "section",
    "B": "aside",
    "C": "article",
    "D": "div",
    "E": "main"
  },
  "gabarito": "C",
  "comentario": "article.",
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
  "id": "ESP-WEB-0027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "HTML5",
  "ref_apostila": {
    "modulo": "05",
    "secao": "17",
    "titulo": "HTML5",
    "link": "[[05 - Bancos de Dados e Linguagens#17. HTML5]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §17 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São tipos de input introduzidos no HTML5:",
  "imagem": null,
  "alternativas": {
    "A": "text, password e hidden",
    "B": "email, date e range",
    "C": "checkbox, radio e file",
    "D": "submit, reset e image",
    "E": "button, text e number apenas"
  },
  "gabarito": "B",
  "comentario": "email, date, range (e url, tel, number, color, search...). Os demais já existiam.",
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
  "id": "ESP-WEB-0028",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "HTML5",
  "ref_apostila": {
    "modulo": "05",
    "secao": "17",
    "titulo": "HTML5",
    "link": "[[05 - Bancos de Dados e Linguagens#17. HTML5]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §17 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O atributo do elemento `<script>` que faz o navegador baixar o script em paralelo e executá-lo somente após o término da análise do documento, preservando a ordem entre scripts, é:",
  "imagem": null,
  "alternativas": {
    "A": "async",
    "B": "defer",
    "C": "lazy",
    "D": "type=\"module\" apenas",
    "E": "nomodule"
  },
  "gabarito": "B",
  "comentario": "defer. (Scripts `type=\"module\"` também são diferidos por padrão, mas o atributo pedido é defer.)",
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
  "id": "ESP-WEB-0029",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "CSS3",
  "ref_apostila": {
    "modulo": "05",
    "secao": "18",
    "titulo": "CSS3",
    "link": "[[05 - Bancos de Dados e Linguagens#18. CSS3]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §18 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere `.caixa { box-sizing: content-box; width: 300px; padding: 20px; border: 2px solid #000; margin: 10px; }`. A largura visível da caixa, de borda a borda, é:",
  "imagem": null,
  "alternativas": {
    "A": "300px",
    "B": "322px",
    "C": "340px",
    "D": "344px",
    "E": "364px"
  },
  "gabarito": "D",
  "comentario": "300 + 2×20 + 2×2 = 344px (a margem não conta para a largura visível).",
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
  "id": "ESP-WEB-0030",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "CSS3",
  "ref_apostila": {
    "modulo": "05",
    "secao": "18",
    "titulo": "CSS3",
    "link": "[[05 - Bancos de Dados e Linguagens#18. CSS3]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §18 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O seletor `#rodape a` possui especificidade maior que o seletor `.menu .item .link a`.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "`#rodape a` = (1,0,1); `.menu .item .link a` = (0,3,1). Um ID vence qualquer quantidade de classes.",
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
  "id": "ESP-WEB-0031",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "CSS3",
  "ref_apostila": {
    "modulo": "05",
    "secao": "18",
    "titulo": "CSS3",
    "link": "[[05 - Bancos de Dados e Linguagens#18. CSS3]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §18 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Flexbox, com `flex-direction: row`, a propriedade que alinha os itens ao longo do eixo principal (horizontal) é:",
  "imagem": null,
  "alternativas": {
    "A": "align-items",
    "B": "align-content",
    "C": "justify-content",
    "D": "flex-wrap",
    "E": "align-self"
  },
  "gabarito": "C",
  "comentario": "justify-content atua no eixo principal; align-items no transversal.",
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
  "id": "ESP-WEB-0032",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "CSS3",
  "ref_apostila": {
    "modulo": "05",
    "secao": "18",
    "titulo": "CSS3",
    "link": "[[05 - Bancos de Dados e Linguagens#18. CSS3]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §18 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A regra CSS3 que permite utilizar fontes personalizadas, baixadas do servidor, mesmo que não estejam instaladas no computador do usuário, é:",
  "imagem": null,
  "alternativas": {
    "A": "@import",
    "B": "@media",
    "C": "@font-face",
    "D": "@keyframes",
    "E": "@supports"
  },
  "gabarito": "C",
  "comentario": "@font-face.",
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
  "id": "ESP-WEB-0033",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "CSS3",
  "ref_apostila": {
    "modulo": "05",
    "secao": "18",
    "titulo": "CSS3",
    "link": "[[05 - Bancos de Dados e Linguagens#18. CSS3]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §18 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual seletor seleciona apenas os elementos `<li>` que são filhos diretos de `<ul class=\"menu\">`?",
  "imagem": null,
  "alternativas": {
    "A": "`ul.menu li`",
    "B": "`ul.menu > li`",
    "C": "`ul.menu + li`",
    "D": "`ul.menu ~ li`",
    "E": "`ul .menu li`"
  },
  "gabarito": "B",
  "comentario": "`>` = filho direto. O espaço (A) pega descendentes em qualquer nível; `+` e `~` são irmãos; E tem um espaço indevido (`.menu` dentro de `ul`).",
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
  "id": "ESP-WEB-0034",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "CSS3",
  "ref_apostila": {
    "modulo": "05",
    "secao": "18",
    "titulo": "CSS3",
    "link": "[[05 - Bancos de Dados e Linguagens#18. CSS3]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §18 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Dois parágrafos consecutivos: o primeiro com `margin-bottom: 25px` e o segundo com `margin-top: 40px`. O espaço vertical entre eles será:",
  "imagem": null,
  "alternativas": {
    "A": "15px",
    "B": "25px",
    "C": "40px",
    "D": "65px",
    "E": "32,5px"
  },
  "gabarito": "C",
  "comentario": "Colapso de margens verticais: prevalece a maior (40px).",
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
  "id": "ESP-WEB-0035",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JavaScript",
  "ref_apostila": {
    "modulo": "05",
    "secao": "19",
    "titulo": "JavaScript",
    "link": "[[05 - Bancos de Dados e Linguagens#19. JavaScript]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §19 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual a saída do código?\n```javascript\nlet x = \"5\";\nlet y = 3;\nconsole.log(x + y, x - y, x * y);\n```",
  "imagem": null,
  "alternativas": {
    "A": "8 2 15",
    "B": "\"53\" 2 15",
    "C": "53 \"2\" \"15\"",
    "D": "NaN 2 15",
    "E": "8 \"2\" 15"
  },
  "gabarito": "B",
  "comentario": "`\"5\" + 3` concatena → \"53\" (impresso como 53); `-` e `*` convertem para número → 2 e 15.",
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
  "id": "ESP-WEB-0036",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JavaScript",
  "ref_apostila": {
    "modulo": "05",
    "secao": "19",
    "titulo": "JavaScript",
    "link": "[[05 - Bancos de Dados e Linguagens#19. JavaScript]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §19 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em JavaScript, uma variável declarada com `const` que referencia um objeto não permite que as propriedades desse objeto sejam alteradas.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "`const` impede a reatribuição da variável; as propriedades do objeto podem ser alteradas (salvo `Object.freeze`).",
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
  "id": "ESP-WEB-0037",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JavaScript",
  "ref_apostila": {
    "modulo": "05",
    "secao": "19",
    "titulo": "JavaScript",
    "link": "[[05 - Bancos de Dados e Linguagens#19. JavaScript]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §19 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual a saída?\n```javascript\nconsole.log(\"início\");\nsetTimeout(() => console.log(\"timeout\"), 0);\nPromise.resolve().then(() => console.log(\"promise\"));\nconsole.log(\"fim\");\n```",
  "imagem": null,
  "alternativas": {
    "A": "início, timeout, promise, fim",
    "B": "início, fim, timeout, promise",
    "C": "início, fim, promise, timeout",
    "D": "início, promise, fim, timeout",
    "E": "promise, início, fim, timeout"
  },
  "gabarito": "C",
  "comentario": "Síncrono primeiro (início, fim), depois microtarefa (promise), depois macrotarefa (timeout).",
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
  "id": "ESP-WEB-0038",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JavaScript",
  "ref_apostila": {
    "modulo": "05",
    "secao": "19",
    "titulo": "JavaScript",
    "link": "[[05 - Bancos de Dados e Linguagens#19. JavaScript]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §19 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre funções `async` em JavaScript, é correto afirmar que:",
  "imagem": null,
  "alternativas": {
    "A": "sempre retornam uma Promise.",
    "B": "bloqueiam a thread principal até o término do await.",
    "C": "não podem conter try/catch.",
    "D": "só podem ser arrow functions.",
    "E": "retornam undefined quando há await."
  },
  "gabarito": "A",
  "comentario": "Toda função async retorna Promise; o await não bloqueia a thread.",
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
  "id": "ESP-WEB-0039",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JavaScript",
  "ref_apostila": {
    "modulo": "05",
    "secao": "19",
    "titulo": "JavaScript",
    "link": "[[05 - Bancos de Dados e Linguagens#19. JavaScript]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §19 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual a saída?\n```javascript\nfunction f() {\n  var a = 1;\n  if (true) { var a = 2; let b = 3; }\n  console.log(a, typeof b);\n}\nf();\n```",
  "imagem": null,
  "alternativas": {
    "A": "1 number",
    "B": "2 number",
    "C": "1 undefined",
    "D": "2 undefined",
    "E": "ReferenceError"
  },
  "gabarito": "D",
  "comentario": "`var a` é de escopo de função: a redeclaração no bloco altera a mesma variável → 2. `b` (let) só existe no bloco; `typeof` de identificador não declarado retorna \"undefined\" sem erro.",
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
  "id": "ESP-WEB-0040",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JavaScript",
  "ref_apostila": {
    "modulo": "05",
    "secao": "19",
    "titulo": "JavaScript",
    "link": "[[05 - Bancos de Dados e Linguagens#19. JavaScript]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §19 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O método do DOM que retorna uma lista estática de todos os elementos que correspondem a um seletor CSS é:",
  "imagem": null,
  "alternativas": {
    "A": "getElementById",
    "B": "getElementsByClassName",
    "C": "querySelector",
    "D": "querySelectorAll",
    "E": "getElementsByTagName"
  },
  "gabarito": "D",
  "comentario": "querySelectorAll → NodeList estática. getElementsBy* retornam HTMLCollection viva.",
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
  "id": "ESP-WEB-0041",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JQuery, Ajax (XMLHttpRequest/fetch) e JSON",
  "ref_apostila": {
    "modulo": "05",
    "secao": "20",
    "titulo": "jQuery, Ajax (XMLHttpRequest/fetch) e JSON",
    "link": "[[05 - Bancos de Dados e Linguagens#20. jQuery, Ajax (XMLHttpRequest/fetch) e JSON]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §20 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No objeto XMLHttpRequest, o valor de `readyState` que indica que a operação foi concluída é:",
  "imagem": null,
  "alternativas": {
    "A": "0",
    "B": "1",
    "C": "2",
    "D": "3",
    "E": "4"
  },
  "gabarito": "E",
  "comentario": "4 = DONE.",
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
  "id": "ESP-WEB-0042",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JQuery, Ajax (XMLHttpRequest/fetch) e JSON",
  "ref_apostila": {
    "modulo": "05",
    "secao": "20",
    "titulo": "jQuery, Ajax (XMLHttpRequest/fetch) e JSON",
    "link": "[[05 - Bancos de Dados e Linguagens#20. jQuery, Ajax (XMLHttpRequest/fetch) e JSON]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §20 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O documento `{'banco': 'Banestes', 'ativo': true,}` é um JSON válido.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Aspas simples e vírgula final são inválidas em JSON.",
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
  "id": "ESP-WEB-0043",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JQuery, Ajax (XMLHttpRequest/fetch) e JSON",
  "ref_apostila": {
    "modulo": "05",
    "secao": "20",
    "titulo": "jQuery, Ajax (XMLHttpRequest/fetch) e JSON",
    "link": "[[05 - Bancos de Dados e Linguagens#20. jQuery, Ajax (XMLHttpRequest/fetch) e JSON]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §20 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em jQuery, para associar um tratador de clique a itens `li` de uma lista `#menu`, inclusive itens adicionados dinamicamente após o carregamento da página, deve-se usar:",
  "imagem": null,
  "alternativas": {
    "A": "`$(\"#menu li\").click(fn)`",
    "B": "`$(\"#menu\").on(\"click\", \"li\", fn)`",
    "C": "`$(\"li\").bind(\"click\", fn)`",
    "D": "`$(\"#menu li\").one(\"click\", fn)`",
    "E": "`$(\"#menu\").trigger(\"click\")`"
  },
  "gabarito": "B",
  "comentario": "Delegação com `.on(evento, seletor, handler)` no ancestral.",
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
  "id": "ESP-WEB-0044",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JQuery, Ajax (XMLHttpRequest/fetch) e JSON",
  "ref_apostila": {
    "modulo": "05",
    "secao": "20",
    "titulo": "jQuery, Ajax (XMLHttpRequest/fetch) e JSON",
    "link": "[[05 - Bancos de Dados e Linguagens#20. jQuery, Ajax (XMLHttpRequest/fetch) e JSON]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §20 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre a Fetch API, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "a Promise retornada é rejeitada quando o servidor responde com status 404.",
    "B": "a Promise retornada só é rejeitada em falhas de rede, sendo necessário verificar `response.ok` para erros HTTP.",
    "C": "usa obrigatoriamente callbacks `onreadystatechange`.",
    "D": "não permite enviar requisições POST.",
    "E": "retorna diretamente o objeto JSON da resposta."
  },
  "gabarito": "B",
  "comentario": "fetch não rejeita em erros HTTP; verifica-se `response.ok`/`status`. E é preciso chamar `response.json()`.",
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
  "id": "ESP-WEB-0045",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JQuery, Ajax (XMLHttpRequest/fetch) e JSON",
  "ref_apostila": {
    "modulo": "05",
    "secao": "20",
    "titulo": "jQuery, Ajax (XMLHttpRequest/fetch) e JSON",
    "link": "[[05 - Bancos de Dados e Linguagens#20. jQuery, Ajax (XMLHttpRequest/fetch) e JSON]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §20 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São tipos de valores válidos em JSON:",
  "imagem": null,
  "alternativas": {
    "A": "string, number, boolean, null, objeto e array",
    "B": "string, number, date, function e undefined",
    "C": "apenas string e number",
    "D": "string, number, boolean, undefined e NaN",
    "E": "objeto, array, comentário e string"
  },
  "gabarito": "A",
  "comentario": "Os seis tipos do JSON.",
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
  "id": "ESP-WEB-0046",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "JQuery, Ajax (XMLHttpRequest/fetch) e JSON",
  "ref_apostila": {
    "modulo": "05",
    "secao": "20",
    "titulo": "jQuery, Ajax (XMLHttpRequest/fetch) e JSON",
    "link": "[[05 - Bancos de Dados e Linguagens#20. jQuery, Ajax (XMLHttpRequest/fetch) e JSON]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §20 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual o valor exibido?\n```javascript\nconsole.log(JSON.stringify({ a: 1, b: undefined, c: [undefined] }));\n```",
  "imagem": null,
  "alternativas": {
    "A": "`{\"a\":1,\"b\":undefined,\"c\":[undefined]}`",
    "B": "`{\"a\":1,\"c\":[null]}`",
    "C": "`{\"a\":1,\"b\":null,\"c\":[null]}`",
    "D": "`{\"a\":1,\"c\":[]}`",
    "E": "erro"
  },
  "gabarito": "B",
  "comentario": "Propriedade com undefined é omitida; em array, undefined vira null.",
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
  "id": "ESP-WEB-0047",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "XML (sintaxe, DTD, XSD, XPath)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "21",
    "titulo": "XML (sintaxe, DTD, XSD, XPath)",
    "link": "[[05 - Bancos de Dados e Linguagens#21. XML (sintaxe, DTD, XSD, XPath)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §21 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre documentos XML, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "todo documento bem formado é válido.",
    "B": "todo documento válido é bem formado.",
    "C": "XML não diferencia maiúsculas de minúsculas nos nomes de elementos.",
    "D": "atributos podem ter valores sem aspas.",
    "E": "um documento pode ter vários elementos raiz."
  },
  "gabarito": "B",
  "comentario": "Validade pressupõe boa formação; o inverso não vale. XML é case-sensitive, exige aspas e raiz única.",
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
  "id": "ESP-WEB-0048",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "XML (sintaxe, DTD, XSD, XPath)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "21",
    "titulo": "XML (sintaxe, DTD, XSD, XPath)",
    "link": "[[05 - Bancos de Dados e Linguagens#21. XML (sintaxe, DTD, XSD, XPath)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §21 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma DTD, a declaração `<!ELEMENT conta (titular+, saldo?)>` indica que o elemento conta deve conter um ou mais elementos titular, seguidos opcionalmente de um elemento saldo.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "`+` = um ou mais; `?` = zero ou um; vírgula = sequência.",
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
  "id": "ESP-WEB-0049",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "XML (sintaxe, DTD, XSD, XPath)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "21",
    "titulo": "XML (sintaxe, DTD, XSD, XPath)",
    "link": "[[05 - Bancos de Dados e Linguagens#21. XML (sintaxe, DTD, XSD, XPath)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §21 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em relação à DTD, uma vantagem do XML Schema (XSD) é:",
  "imagem": null,
  "alternativas": {
    "A": "ser escrito em sintaxe não XML, mais compacta.",
    "B": "suportar tipos de dados como inteiros, decimais e datas, além de namespaces.",
    "C": "permitir a declaração de entidades gerais.",
    "D": "não permitir restrição de cardinalidade.",
    "E": "ser obrigatório para que o documento seja bem formado."
  },
  "gabarito": "B",
  "comentario": "Tipos de dados e namespaces. XSD é escrito em XML e não declara entidades.",
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
  "id": "ESP-WEB-0050",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "XML (sintaxe, DTD, XSD, XPath)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "21",
    "titulo": "XML (sintaxe, DTD, XSD, XPath)",
    "link": "[[05 - Bancos de Dados e Linguagens#21. XML (sintaxe, DTD, XSD, XPath)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §21 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": "TB-APO-05-21-2",
  "enunciado": "Considerando o XML do exemplo da seção 21.2 (sem namespaces), a expressão XPath que retorna as descrições dos lançamentos cujo atributo tipo vale \"D\" é:",
  "imagem": null,
  "alternativas": {
    "A": "`//lancamento[tipo='D']/descricao`",
    "B": "`//lancamento[@tipo='D']/descricao`",
    "C": "`/lancamento/@tipo='D'/descricao`",
    "D": "`//descricao[@tipo='D']`",
    "E": "`//lancamento[0]/descricao`"
  },
  "gabarito": "B",
  "comentario": "Atributo exige `@`; a letra A procuraria um elemento filho chamado tipo; índices começam em 1.",
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
  "id": "ESP-WEB-0051",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "XML (sintaxe, DTD, XSD, XPath)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "21",
    "titulo": "XML (sintaxe, DTD, XSD, XPath)",
    "link": "[[05 - Bancos de Dados e Linguagens#21. XML (sintaxe, DTD, XSD, XPath)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §21 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No XSD, o compositor que exige que todos os elementos filhos apareçam, em qualquer ordem, no máximo uma vez cada, é:",
  "imagem": null,
  "alternativas": {
    "A": "xs:sequence",
    "B": "xs:choice",
    "C": "xs:all",
    "D": "xs:group",
    "E": "xs:any"
  },
  "gabarito": "C",
  "comentario": "xs:all.",
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
  "id": "ESP-WEB-0052",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "XML (sintaxe, DTD, XSD, XPath)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "21",
    "titulo": "XML (sintaxe, DTD, XSD, XPath)",
    "link": "[[05 - Bancos de Dados e Linguagens#21. XML (sintaxe, DTD, XSD, XPath)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §21 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O modelo de processamento de XML baseado em eventos, que lê o documento sequencialmente sem carregá-lo inteiro em memória, é o:",
  "imagem": null,
  "alternativas": {
    "A": "DOM",
    "B": "SAX",
    "C": "XPath",
    "D": "XSLT",
    "E": "DTD"
  },
  "gabarito": "B",
  "comentario": "SAX.",
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
  "id": "ESP-WEB-0053",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §10 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um documento WSDL 1.1, o elemento que associa as operações abstratas de um portType a um protocolo e formato de dados concretos, como SOAP sobre HTTP, é:",
  "imagem": null,
  "alternativas": {
    "A": "types.",
    "B": "message.",
    "C": "binding.",
    "D": "service.",
    "E": "port."
  },
  "gabarito": "C",
  "comentario": "O binding liga o portType (abstrato) a protocolo e formato concretos. O port informa o endereço; o service agrupa ports.",
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
  "id": "ESP-WEB-0054",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §10 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma mensagem SOAP, os elementos Envelope e Header são obrigatórios, enquanto o elemento Body é opcional.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Envelope e Body são obrigatórios; Header é opcional.",
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
  "id": "ESP-WEB-0055",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §10 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Dos métodos HTTP a seguir, é idempotente, mas não é seguro:",
  "imagem": null,
  "alternativas": {
    "A": "GET.",
    "B": "HEAD.",
    "C": "POST.",
    "D": "PUT.",
    "E": "OPTIONS."
  },
  "gabarito": "D",
  "comentario": "PUT é idempotente, mas altera o estado (não é seguro). GET, HEAD e OPTIONS são seguros e idempotentes; POST não é nenhum dos dois.",
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
  "id": "ESP-WEB-0056",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §10 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No UDDI, as informações técnicas sobre como invocar os serviços, incluindo referências às suas especificações, correspondem às:",
  "imagem": null,
  "alternativas": {
    "A": "páginas brancas.",
    "B": "páginas amarelas.",
    "C": "páginas verdes.",
    "D": "páginas azuis.",
    "E": "páginas de rosto."
  },
  "gabarito": "C",
  "comentario": "Páginas verdes = informações técnicas. Brancas = dados da empresa; amarelas = categorização.",
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
  "id": "ESP-WEB-0057",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §10 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma API retorna determinado código quando o usuário está autenticado, mas não tem permissão para acessar o recurso solicitado. Esse código é:",
  "imagem": null,
  "alternativas": {
    "A": "400.",
    "B": "401.",
    "C": "403.",
    "D": "404.",
    "E": "500."
  },
  "gabarito": "C",
  "comentario": "403 Forbidden. O 401 indica falta de autenticação válida.",
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
  "id": "ESP-WEB-0058",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §10 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Entre as restrições do estilo arquitetural REST definidas por Roy Fielding estão cliente-servidor, ausência de estado, cache, interface uniforme e sistema em camadas, sendo o código sob demanda uma restrição opcional.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "São as seis restrições; o code on demand é a única opcional.",
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
  "id": "ESP-WEB-0059",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §10 – Q7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um documento XML que segue todas as regras sintáticas da linguagem, como possuir um único elemento raiz e ter todas as tags corretamente aninhadas e fechadas, mas que não foi verificado contra um XSD, é classificado como:",
  "imagem": null,
  "alternativas": {
    "A": "válido.",
    "B": "bem formado.",
    "C": "inválido e malformado.",
    "D": "canônico.",
    "E": "assinado."
  },
  "gabarito": "B",
  "comentario": "Bem formado. Válido exige conformidade com DTD ou XSD.",
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
  "id": "ESP-WEB-0060",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
  "ref_apostila": {
    "modulo": "06",
    "secao": "10",
    "titulo": "Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#10. Interoperabilidade: SOA, Web Services, XML, XSLT, WSDL, SOAP, UDDI, REST e HTTP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §10 – Q8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em XSLT, para implementar uma lógica de seleção com várias alternativas, incluindo uma alternativa padrão, utilizam-se os elementos:",
  "imagem": null,
  "alternativas": {
    "A": "xsl:if e xsl:else.",
    "B": "xsl:choose, xsl:when e xsl:otherwise.",
    "C": "xsl:for-each e xsl:sort.",
    "D": "xsl:template e xsl:apply-templates.",
    "E": "xsl:switch e xsl:case."
  },
  "gabarito": "B",
  "comentario": "xsl:choose/xsl:when/xsl:otherwise. Não existem xsl:else, xsl:switch nem xsl:case.",
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
  "id": "ESP-WEB-0061",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Prototipação e engenharia de usabilidade",
  "ref_apostila": {
    "modulo": "06",
    "secao": "14",
    "titulo": "Prototipação e engenharia de usabilidade",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#14. Prototipação e engenharia de usabilidade]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §14 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Segundo a ISO 9241-11, usabilidade é o grau em que um produto pode ser usado por usuários específicos para atingir objetivos específicos com:",
  "imagem": null,
  "alternativas": {
    "A": "funcionalidade, confiabilidade e portabilidade.",
    "B": "eficácia, eficiência e satisfação, em um contexto de uso específico.",
    "C": "facilidade de aprendizado, memorização e baixa taxa de erros.",
    "D": "consistência, feedback e prevenção de erros.",
    "E": "disponibilidade, integridade e confidencialidade."
  },
  "gabarito": "B",
  "comentario": "Eficácia, eficiência e satisfação em um contexto de uso. A alternativa C traz atributos de Nielsen.",
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
  "id": "ESP-WEB-0062",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Prototipação e engenharia de usabilidade",
  "ref_apostila": {
    "modulo": "06",
    "secao": "14",
    "titulo": "Prototipação e engenharia de usabilidade",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#14. Prototipação e engenharia de usabilidade]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §14 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um sistema que exige confirmação do usuário antes de excluir definitivamente um favorecido atende à heurística de Nielsen denominada \"ajudar os usuários a reconhecer, diagnosticar e se recuperar de erros\".",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Pedir confirmação **antes** é **prevenção de erros** (heurística 5). A heurística 9 trata de mensagens que ajudam a se recuperar **depois** do erro.",
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
  "id": "ESP-WEB-0063",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Prototipação e engenharia de usabilidade",
  "ref_apostila": {
    "modulo": "06",
    "secao": "14",
    "titulo": "Prototipação e engenharia de usabilidade",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#14. Prototipação e engenharia de usabilidade]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §14 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A respeito dos métodos de avaliação de usabilidade, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "a avaliação heurística exige a participação de usuários finais reais.",
    "B": "o protocolo \"pensar em voz alta\" é aplicado em testes com usuários, que verbalizam seus pensamentos enquanto executam tarefas.",
    "C": "no percurso cognitivo, avaliadores trabalham em grupo desde o início, sem roteiro de tarefas.",
    "D": "testes de usabilidade só podem ser feitos com o sistema totalmente implementado.",
    "E": "a escala de severidade de Nielsen vai de 1 (catástrofe) a 10 (cosmético)."
  },
  "gabarito": "B",
  "comentario": "O pensar em voz alta é aplicado em testes com usuários. A avaliação heurística dispensa usuários; o percurso cognitivo segue tarefas definidas; testes podem usar protótipos (até de papel); a escala de severidade vai de 0 a 4.",
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
  "id": "ESP-WEB-0064",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "TypeScript",
  "ref_apostila": {
    "modulo": "07",
    "secao": "3",
    "titulo": "TypeScript",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#3. TypeScript]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §3 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o TypeScript, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "é uma linguagem interpretada diretamente pelos navegadores, que substitui o JavaScript.",
    "B": "é um superconjunto do JavaScript que adiciona tipagem estática opcional e é transpilado para JavaScript.",
    "C": "exige que todas as variáveis tenham o tipo declarado explicitamente, pois não possui inferência de tipos.",
    "D": "realiza verificação de tipos em tempo de execução, lançando exceções quando um tipo é violado.",
    "E": "foi criado pelo Google para o desenvolvimento do framework Angular."
  },
  "gabarito": "B",
  "comentario": "É superset do JS, com tipagem estática opcional, transpilado pelo `tsc`. Tem inferência (C errada), os tipos são apagados na compilação (D errada) e foi criado pela Microsoft (E errada).",
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
  "id": "ESP-WEB-0065",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "TypeScript",
  "ref_apostila": {
    "modulo": "07",
    "secao": "3",
    "titulo": "TypeScript",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#3. TypeScript]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §3 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere:\n   ```ts\n   let v: unknown = \"123\";\n   let t = v.length;\n   ```\n   O compilador TypeScript:",
  "imagem": null,
  "alternativas": {
    "A": "aceita o código e `t` vale 3.",
    "B": "aceita o código e `t` vale undefined.",
    "C": "acusa erro, pois é necessário estreitar o tipo de `v` antes de acessar `length`.",
    "D": "acusa erro, pois `unknown` não aceita receber strings.",
    "E": "converte `v` automaticamente para `number`."
  },
  "gabarito": "C",
  "comentario": "`unknown` exige narrowing (`if (typeof v === \"string\")`) antes do uso. Com `any`, o código compilaria.",
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
  "id": "ESP-WEB-0066",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "TypeScript",
  "ref_apostila": {
    "modulo": "07",
    "secao": "3",
    "titulo": "TypeScript",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#3. TypeScript]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §3 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em TypeScript, um objeto pode ser atribuído a uma variável cujo tipo é uma interface mesmo sem que a classe do objeto declare `implements` dessa interface, desde que possua as propriedades exigidas.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "A tipagem é estrutural: vale a forma do objeto, não a declaração `implements`.",
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
  "id": "ESP-WEB-0067",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "TypeScript",
  "ref_apostila": {
    "modulo": "07",
    "secao": "3",
    "titulo": "TypeScript",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#3. TypeScript]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §3 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O tipo utilitário que gera, a partir de `Cliente`, um tipo com todas as propriedades opcionais é:",
  "imagem": null,
  "alternativas": {
    "A": "`Required<Cliente>`.",
    "B": "`Readonly<Cliente>`.",
    "C": "`Partial<Cliente>`.",
    "D": "`Pick<Cliente>`.",
    "E": "`Record<Cliente>`."
  },
  "gabarito": "C",
  "comentario": "`Partial<T>` torna tudo opcional.",
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
  "id": "ESP-WEB-0068",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "TypeScript",
  "ref_apostila": {
    "modulo": "07",
    "secao": "3",
    "titulo": "TypeScript",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#3. TypeScript]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §3 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um campo declarado como `private` em uma classe TypeScript:",
  "imagem": null,
  "alternativas": {
    "A": "fica inacessível também no JavaScript gerado, em tempo de execução.",
    "B": "pode ser acessado por subclasses.",
    "C": "tem o acesso restrito verificado pelo compilador, mas continua acessível no JavaScript gerado.",
    "D": "é equivalente a `readonly`.",
    "E": "só pode ser usado em classes abstratas."
  },
  "gabarito": "C",
  "comentario": "`private` é checado só na compilação. Para privacidade real em tempo de execução, usa-se `#campo`. Subclasses acessam `protected`, não `private`.",
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
  "id": "ESP-WEB-0069",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas",
  "ref_apostila": {
    "modulo": "07",
    "secao": "4",
    "titulo": "Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#4. Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §4 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma Single-Page Application (SPA):",
  "imagem": null,
  "alternativas": {
    "A": "cada clique em um link provoca o carregamento de uma nova página HTML completa gerada pelo servidor.",
    "B": "a página é carregada uma única vez e o conteúdo é atualizado dinamicamente por JavaScript, geralmente consumindo APIs que retornam JSON.",
    "C": "não é possível usar rotas com URLs diferentes.",
    "D": "todo o HTML é gerado no momento do build e não há JavaScript no navegador.",
    "E": "a renderização ocorre exclusivamente no servidor, o que elimina a necessidade de APIs."
  },
  "gabarito": "B",
  "comentario": "É a definição de SPA. A descreve uma MPA; D descreve SSG; E descreve SSR puro.",
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
  "id": "ESP-WEB-0070",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas",
  "ref_apostila": {
    "modulo": "07",
    "secao": "4",
    "titulo": "Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#4. Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §4 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O componente de uma PWA que funciona como proxy entre a aplicação e a rede, permitindo cache e funcionamento offline, é o:",
  "imagem": null,
  "alternativas": {
    "A": "Web App Manifest.",
    "B": "Service Worker.",
    "C": "DOM virtual.",
    "D": "Web Socket.",
    "E": "Local Storage."
  },
  "gabarito": "B",
  "comentario": "O Service Worker intercepta as requisições e controla o cache. O manifest só descreve o app (nome, ícones).",
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
  "id": "ESP-WEB-0071",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas",
  "ref_apostila": {
    "modulo": "07",
    "secao": "4",
    "titulo": "Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#4. Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §4 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O Node.js utiliza um modelo de E/S não bloqueante baseado em event loop, sendo especialmente indicado para tarefas que fazem uso intensivo de CPU na thread principal.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "O modelo é ótimo para E/S intensiva. Tarefas de CPU pesadas bloqueiam o event loop e prejudicam todas as requisições.",
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
  "id": "ESP-WEB-0072",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas",
  "ref_apostila": {
    "modulo": "07",
    "secao": "4",
    "titulo": "Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#4. Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §4 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No `package.json`, a dependência `\"express\": \"~4.18.2\"` permite que o npm instale:",
  "imagem": null,
  "alternativas": {
    "A": "qualquer versão 4.x.x.",
    "B": "apenas 4.18.2.",
    "C": "versões de 4.18.2 até antes de 4.19.0.",
    "D": "qualquer versão maior que 4.18.2.",
    "E": "versões 5.x."
  },
  "gabarito": "C",
  "comentario": "O til (`~`) aceita só correções (patch) dentro da mesma versão menor. O circunflexo (`^`) aceitaria qualquer 4.x.x a partir de 4.18.2.",
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
  "id": "ESP-WEB-0073",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas",
  "ref_apostila": {
    "modulo": "07",
    "secao": "4",
    "titulo": "Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#4. Front-end moderno: SPA, SSR, PWA, Node.js e ferramentas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §4 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A técnica de renderização em que o servidor gera o HTML da página a cada requisição e, no navegador, o JavaScript associa eventos ao HTML recebido é chamada de:",
  "imagem": null,
  "alternativas": {
    "A": "CSR com tree shaking.",
    "B": "SSG.",
    "C": "SSR com hidratação.",
    "D": "polyfill.",
    "E": "code splitting."
  },
  "gabarito": "C",
  "comentario": "SSR gera o HTML no servidor; a hidratação \"ativa\" esse HTML no cliente.",
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
  "id": "ESP-WEB-0074",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "React",
  "ref_apostila": {
    "modulo": "07",
    "secao": "5",
    "titulo": "React",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#5. React]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §5 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em React, o mecanismo que compara a nova árvore de elementos com a anterior e aplica no DOM real apenas as alterações necessárias é conhecido como:",
  "imagem": null,
  "alternativas": {
    "A": "two-way data binding.",
    "B": "reconciliação com DOM virtual.",
    "C": "injeção de dependência.",
    "D": "hidratação.",
    "E": "service worker."
  },
  "gabarito": "B",
  "comentario": "Reconciliação (diffing) entre árvores do DOM virtual. Two-way binding é característico do Angular (`ngModel`); hidratação é do SSR.",
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
  "id": "ESP-WEB-0075",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "React",
  "ref_apostila": {
    "modulo": "07",
    "secao": "5",
    "titulo": "React",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#5. React]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §5 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere:\n   ```jsx\n   useEffect(() => { carregarDados(); }, []);\n   ```\n   A função `carregarDados` será executada:",
  "imagem": null,
  "alternativas": {
    "A": "antes da primeira renderização.",
    "B": "após cada renderização do componente.",
    "C": "uma única vez, após a montagem do componente.",
    "D": "somente quando o componente for desmontado.",
    "E": "nunca, pois o array de dependências está vazio."
  },
  "gabarito": "C",
  "comentario": "Com array vazio, o efeito roda uma vez, depois da montagem (efeitos rodam após a renderização, nunca antes).",
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
  "id": "ESP-WEB-0076",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "React",
  "ref_apostila": {
    "modulo": "07",
    "secao": "5",
    "titulo": "React",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#5. React]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §5 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em React, um componente filho pode alterar diretamente as props recebidas do componente pai para atualizar a interface.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Props são somente leitura. Para mudar algo do pai, o filho chama uma função recebida por prop.",
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
  "id": "ESP-WEB-0077",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "React",
  "ref_apostila": {
    "modulo": "07",
    "secao": "5",
    "titulo": "React",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#5. React]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §5 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre JSX, assinale a afirmativa correta.",
  "imagem": null,
  "alternativas": {
    "A": "É interpretado diretamente pelo navegador como HTML.",
    "B": "Usa o atributo `class` para definir classes CSS.",
    "C": "Permite inserir expressões JavaScript entre chaves e é transformado em chamadas de função JavaScript.",
    "D": "Permite usar instruções `for` diretamente dentro da marcação.",
    "E": "Exige que nomes de componentes comecem com letra minúscula."
  },
  "gabarito": "C",
  "comentario": "JSX é transformado em JavaScript e aceita expressões entre chaves. Usa `className`, não aceita `for` direto (usa-se `map`) e componentes começam com maiúscula.",
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
  "id": "ESP-WEB-0078",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "React",
  "ref_apostila": {
    "modulo": "07",
    "secao": "5",
    "titulo": "React",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#5. React]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §5 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Viola as regras dos hooks do React:",
  "imagem": null,
  "alternativas": {
    "A": "chamar `useState` no início de um componente de função.",
    "B": "chamar `useEffect` dentro de um hook personalizado chamado `useSaldo`.",
    "C": "chamar `useState` dentro de um `if` que depende de uma prop.",
    "D": "chamar `useContext` em um componente de função.",
    "E": "chamar dois `useState` seguidos no mesmo componente."
  },
  "gabarito": "C",
  "comentario": "Hooks não podem ser chamados condicionalmente: a ordem das chamadas precisa ser a mesma em toda renderização.",
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
  "id": "ESP-WEB-0079",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Angular",
  "ref_apostila": {
    "modulo": "07",
    "secao": "6",
    "titulo": "Angular",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#6. Angular]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §6 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Angular, a sintaxe `[(ngModel)]=\"valor\"` representa:",
  "imagem": null,
  "alternativas": {
    "A": "interpolação.",
    "B": "property binding.",
    "C": "event binding.",
    "D": "two-way data binding.",
    "E": "diretiva estrutural."
  },
  "gabarito": "D",
  "comentario": "\"Banana in a box\": combina property binding `[ ]` e event binding `( )`, ou seja, ligação nos dois sentidos.",
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
  "id": "ESP-WEB-0080",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Angular",
  "ref_apostila": {
    "modulo": "07",
    "secao": "6",
    "titulo": "Angular",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#6. Angular]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §6 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São diretivas estruturais do Angular, que alteram o DOM adicionando ou removendo elementos:",
  "imagem": null,
  "alternativas": {
    "A": "`ngClass` e `ngStyle`.",
    "B": "`*ngIf` e `*ngFor`.",
    "C": "`@Input` e `@Output`.",
    "D": "`ngOnInit` e `ngOnDestroy`.",
    "E": "`routerLink` e `router-outlet`."
  },
  "gabarito": "B",
  "comentario": "Estruturais usam `*` e mudam a estrutura do DOM. `ngClass` e `ngStyle` são diretivas de atributo.",
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
  "id": "ESP-WEB-0081",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Angular",
  "ref_apostila": {
    "modulo": "07",
    "secao": "6",
    "titulo": "Angular",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#6. Angular]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §6 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um serviço anotado com `@Injectable({ providedIn: 'root' })` tem uma única instância compartilhada por toda a aplicação.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "O registro no injetor raiz gera um singleton (e o serviço é tree-shakable).",
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
  "id": "ESP-WEB-0082",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Angular",
  "ref_apostila": {
    "modulo": "07",
    "secao": "6",
    "titulo": "Angular",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#6. Angular]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §6 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O método do ciclo de vida indicado para cancelar assinaturas de Observables e liberar recursos antes de o componente ser removido é:",
  "imagem": null,
  "alternativas": {
    "A": "`ngOnInit`.",
    "B": "`ngOnChanges`.",
    "C": "`ngAfterViewInit`.",
    "D": "`ngDoCheck`.",
    "E": "`ngOnDestroy`."
  },
  "gabarito": "E",
  "comentario": "`ngOnDestroy` é chamado antes da destruição; é onde se faz `unsubscribe`. Uma alternativa é usar o pipe `async`, que cancela sozinho.",
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
  "id": "ESP-WEB-0083",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Desenvolvimento web e mobile",
  "topico": "Angular",
  "ref_apostila": {
    "modulo": "07",
    "secao": "6",
    "titulo": "Angular",
    "link": "[[07 - Nuvem, TypeScript e Front-end moderno#6. Angular]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 07 §6 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma busca de clientes, a cada tecla digitada uma nova requisição é disparada e respostas antigas chegam depois das novas. O operador RxJS que cancela a requisição anterior quando um novo termo chega é:",
  "imagem": null,
  "alternativas": {
    "A": "`map`.",
    "B": "`filter`.",
    "C": "`switchMap`.",
    "D": "`tap`.",
    "E": "`catchError`."
  },
  "gabarito": "C",
  "comentario": "`switchMap` troca para o novo Observable e cancela o anterior. Junto com `debounceTime`, é o padrão para campos de busca.",
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
  "id": "ESP-WEB-0084",
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
    "tipo": "apostila",
    "fonte": "Apostila 07 §7 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Os quatro princípios das WCAG são:",
  "imagem": null,
  "alternativas": {
    "A": "disponível, íntegro, confidencial e autêntico.",
    "B": "perceptível, operável, compreensível e robusto.",
    "C": "legível, navegável, responsivo e seguro.",
    "D": "simples, consistente, eficiente e eficaz.",
    "E": "visível, audível, tátil e cognitivo."
  },
  "gabarito": "B",
  "comentario": "POUR: perceptível, operável, compreensível e robusto. A traz propriedades de segurança da informação.",
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
  "id": "ESP-WEB-0085",
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
    "tipo": "apostila",
    "fonte": "Apostila 07 §7 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na WCAG 2.2, o critério de nível AA \"Tamanho do alvo (mínimo)\" exige, como regra, área de toque de pelo menos",
  "imagem": null,
  "alternativas": {
    "A": "16 × 16 pixels CSS.",
    "B": "24 × 24 pixels CSS.",
    "C": "44 × 44 pixels CSS.",
    "D": "48 × 48 pixels físicos.",
    "E": "1 cm²."
  },
  "gabarito": "B",
  "comentario": "24 × 24 pixels CSS. O valor 44 × 44 é do critério 2.5.5 (AAA), da 2.1.",
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
  "id": "ESP-WEB-0086",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
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
    "tipo": "apostila",
    "fonte": "Apostila 07 §7 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A ABNT NBR 17225:2025 classifica seus itens em requisitos e recomendações, sem adotar os níveis A, AA e AAA.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "São 146 itens, divididos em requisitos e recomendações.",
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
  "id": "ESP-WEB-0087",
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
    "tipo": "apostila",
    "fonte": "Apostila 07 §7 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para atender ao nível AA da WCAG, o contraste mínimo entre texto de tamanho normal e fundo é:",
  "imagem": null,
  "alternativas": {
    "A": "2:1.",
    "B": "3:1.",
    "C": "4,5:1.",
    "D": "7:1.",
    "E": "10:1."
  },
  "gabarito": "C",
  "comentario": "4,5:1 para texto normal no AA; 3:1 para texto grande; 7:1 no AAA.",
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
  "id": "ESP-WEB-0088",
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
    "tipo": "apostila",
    "fonte": "Apostila 07 §7 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Foi removido na WCAG 2.2 o critério:",
  "imagem": null,
  "alternativas": {
    "A": "1.1.1 Conteúdo não textual.",
    "B": "2.1.1 Teclado.",
    "C": "4.1.1 Análise (Parsing).",
    "D": "1.4.3 Contraste.",
    "E": "2.4.7 Foco visível."
  },
  "gabarito": "C",
  "comentario": "O 4.1.1 foi considerado obsoleto e removido na 2.2.",
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
