/*
 * Específicos – Programação
 * Gerado por tools/importar.py a partir das fontes do vault (2026-11-13).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 * Rodar o importador de novo sobrescreve este arquivo.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-PROG-0001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Algoritmos de ordenação",
  "ref_apostila": {
    "modulo": "04",
    "secao": "5",
    "titulo": "Complexidade de algoritmos, busca e ordenação",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#5. Complexidade de algoritmos, busca e ordenação]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q36",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 36
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere um processo de ordenação dos elementos do array [16,8,6,14,12,4] em ordem crescente. Supõe-se um algoritmo que percorra o array repetidamente até que esteja ordenado, sem utilização de memória auxiliar para os elementos do array (in place).\n\nA lista a seguir mostra a disposição dos elementos no array após cada ciclo de iteração.\n\n```\n[8, 6, 14, 12, 4, 16]\n[6, 8, 12, 4, 14, 16]\n[6, 8, 4, 12, 14, 16]\n[6, 4, 8, 12, 14, 16]\n[4, 6, 8, 12, 14, 16]\n```\n\nNesse caso, é correto concluir que foi utilizado o algoritmo:",
  "imagem": null,
  "alternativas": {
    "A": "Bubble Sort;",
    "B": "Insertion Sort;",
    "C": "QuickSort;",
    "D": "Selection Sort;",
    "E": "Shellsort."
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
  "id": "ESP-PROG-0002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Tabela hash e complexidade",
  "ref_apostila": {
    "modulo": "04",
    "secao": "4",
    "titulo": "Estruturas de dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#4. Estruturas de dados]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q38",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 38
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "João pretende armazenar uma coleção de dados referentes a cerca de um milhão de pessoas. Cada pessoa tem como chave de acesso um número inteiro sequencial, que não se repete.\n\nEmpregando uma estrutura de Tabela Hash, João conseguiria obter, praticamente, acesso com complexidade:",
  "imagem": null,
  "alternativas": {
    "A": "O(1)",
    "B": "O(log N)",
    "C": "O(N)",
    "D": "O(N log N)",
    "E": "O(N²)"
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
  "id": "ESP-PROG-0003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Complemento a dois",
  "ref_apostila": {
    "modulo": "04",
    "secao": "3",
    "titulo": "Tipos de dados e representação numérica e textual",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#3. Tipos de dados e representação numérica e textual]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q43",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 43
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere a representação de números decimais inteiros na notação binária de complemento a dois.\n\nNuma palavra de 6 bits, o número -31 seria representado como:",
  "imagem": null,
  "alternativas": {
    "A": "000001",
    "B": "011110",
    "C": "011111",
    "D": "100000",
    "E": "100001"
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
  "id": "ESP-PROG-0004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
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
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q53",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 53
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código Python 2.7 a seguir.\n\n```python\ndef ABC(L, n):\nwhile True:\nif len(L) >= n:\nreturn L\nelse:\nL.append(len(L) ** 2)\nprint ABC([20],10)\n```\n\nO resultado da execução desse código é:",
  "imagem": null,
  "alternativas": {
    "A": "[1, 4, 9, 16, 25, 36, 49, 64]",
    "B": "[1, 4, 9, 16, 25, 36, 49, 64, 81]",
    "C": "[20, 1, 4, 9, 16, 25, 36, 49, 64]",
    "D": "[20, 1, 4, 9, 16, 25, 36, 49, 64, 81]",
    "E": "[20, 4, 9, 16, 25, 36, 49, 64, 81]"
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
  "id": "ESP-PROG-0005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "JavaScript: closures e iteradores",
  "ref_apostila": {
    "modulo": "05",
    "secao": "19",
    "titulo": "JavaScript",
    "link": "[[05 - Bancos de Dados e Linguagens#19. JavaScript]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q54",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 54
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Analise o script JS a seguir.\n\n```html\n<script>\nfunction xpto() {\nlet n = 0;\nreturn {next:\nfunction()\n{\nif (n < 10) {\nn += 2;\nreturn {value:n/2, done:false}}\nelse {\nreturn {value: -1, done: true}}\n}\n}\n}\nsaida = \"\"\nconst n = xpto();\nx = n.next();\nwhile (x.done == false) {\nsaida += x.value + \"/\";\nx = n.next();\n}\nalert(saida);\n</script>\n```\n\nO resultado da execução desse código é:",
  "imagem": null,
  "alternativas": {
    "A": "-1/-2/-3/-4/-5/",
    "B": "0/1/2/3/4/5/",
    "C": "1/2/3/4/5/",
    "D": "5/4/3/2/1/",
    "E": "5/4/3/2/1/0"
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
  "id": "ESP-PROG-0006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C#: propriedades get/set",
  "ref_apostila": {
    "modulo": "05",
    "secao": "25",
    "titulo": "C# e ASP/ASP.NET",
    "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2021 (FGV) – Q55",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2021",
    "numero": 55
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código C# a seguir.\n\n```csharp\nusing System;\nnamespace MinhaProva\n{ class Exemplo\n{ static void Main(string[] args)\n{ Pessoa Ex = new Pessoa();\nEx.Nome = \"Joana\";\nConsole.WriteLine(Ex.Nome);\n} } }\n```\n\nA implementação correta da classe referida no código acima é:",
  "imagem": null,
  "alternativas": {
    "A": "```\nnamespace MinhaProva\n{ class Exemplo\n{ private string nome;\npublic string Nome\n{ get { return nome; }\nset { nome = value; }\n} } }\n```",
    "B": "```\nnamespace MinhaProva\n{ class Pessoa\n{ private string nome;\npublic string Nome\n{ get { return nome; }\nset { nome = value; }\n} } }\n```",
    "C": "```\nnamespace MinhaProva\n{ class Pessoa\n{ private string nome;\npublic string Nome\n{ get return nome;\nset nome = value; }\n} } }\n```",
    "D": "```\nnamespace MinhaProva\n{ class Pessoa\n{ private string nome;\npublic string Nome\n{ get() { return nome; }\nset(string value) { nome = value; }\n} } }\n```",
    "E": "```\nnamespace MinhaProva\n{ class Pessoa\n{ private string nome;\npublic string Nome\n{ public get string { return nome; }\npublic set string { nome = value; }\n} } }\n\n```"
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
  "id": "ESP-PROG-0007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python: PyQt",
  "ref_apostila": {
    "modulo": "05",
    "secao": "22",
    "titulo": "Python",
    "link": "[[05 - Bancos de Dados e Linguagens#22. Python]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q57",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 57
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um desenvolvedor de software em uma empresa de tecnologia, durante seu trabalho, adiciona ao seu código a biblioteca “PyQt”, que oferece uma gama de recursos importantes para o desenvolvimento, assim sendo marque a opção que contem a alternativa correta sobre a função da biblioteca PyQt.",
  "imagem": null,
  "alternativas": {
    "A": "fornecer uma interface de linha de comando para o usuário",
    "B": "facilitar a comunicação entre servidores e clientes em aplicações web.",
    "C": "criar e controlar os componentes da interface gráfica.",
    "D": "simplificar a criação de APIs RESTful em Python"
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
  "id": "ESP-PROG-0008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C++: laços e vetores",
  "ref_apostila": {
    "modulo": "05",
    "secao": "24",
    "titulo": "C++",
    "link": "[[05 - Bancos de Dados e Linguagens#24. C++]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q59",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 59
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O trecho do código abaixo, foi desenvolvimento na linguagem C++, analise esse código e marque a opção que contém o resultado correto quando ele for executado.\n\n```cpp\nint main() {\nint v[20] = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19}, i;\nfor (i = 0; i < 10 ; i++) {\nif (v[i] % 2 == 0) {\ncout << v[i] << \" \";\n}\n}\nreturn 0;\n```",
  "imagem": null,
  "alternativas": {
    "A": "2 4 6 8 10;",
    "B": "2 4 6 8 10 12 14 16 18",
    "C": "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19",
    "D": "0 2 4 6 8"
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
  "id": "ESP-PROG-0009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Polimorfismo",
  "ref_apostila": {
    "modulo": "06",
    "secao": "8",
    "titulo": "Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#8. Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q61",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 61
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um ambiente de desenvolvimento de software orientado a objetos, práticas de programação em Java, são fundamentais para o trabalho do desenvolver, podemos destacar a utilização do “polimorfismo”, em certas situações, sendo assim marque a alternativa correta que contem a principal vantagem do uso do polimorfismo, em programação orientada a objetos.",
  "imagem": null,
  "alternativas": {
    "A": "Redução do acoplamento entre classes, promovendo uma arquitetura mais flexível e adaptável.",
    "B": "Fortalecimento da coesão entre classes, garantindo uma melhor organização e estruturação do código-fonte.",
    "C": "Simplificação da implementação de herança múltipla, permitindo que uma classe herde comportamentos de múltiplas superclasses.",
    "D": "Facilitação da implementação de métodos estáticos, otimizando o desempenho e a eficiência do código em tempo de execução."
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
  "id": "ESP-PROG-0010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Herança e abstração",
  "ref_apostila": {
    "modulo": "06",
    "secao": "8",
    "titulo": "Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#8. Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q62",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 62
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Com base nos conceitos essenciais de programação orientada a objetos em Java, em relação entre herança e abstração, destacando como esses dois conceitos estão interligados e contribuem para a modelagem e organização eficientes de sistemas complexos, marque a opção que apresenta corretamente esse conceito.",
  "imagem": null,
  "alternativas": {
    "A": "Herança é um tipo de abstração em Java.",
    "B": "Abstração é um tipo de herança em Java.",
    "C": "Herança e abstração são conceitos independentes em Java.",
    "D": "Herança e abstração são mutuamente exclusivas em Java."
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
  "id": "ESP-PROG-0011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "ASP clássico",
  "ref_apostila": {
    "modulo": "05",
    "secao": "25",
    "titulo": "C# e ASP/ASP.NET",
    "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q63",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 63
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Marque a alternativa correta sobre a linguagem que o código abaixo foi desenvolvido.\n\n```asp\n<form method=\"post\" action=\"\">\n<label for=\"nome\">Nome:</label>\n<input type=\"text\" id=\"nome\" name=\"nome\" required>\n<input type=\"submit\" value=\"Enviar\">\n</form>\n<%\nIf Request.ServerVariables(\"REQUEST_METHOD\") = \"POST\" Then\nDim nome\nnome = Request.Form(\"nome\")\nResponse.Write \"Olá, \" & nome & \"! Bem-vindo ao nosso site.\"\nEnd If\n%>\n```",
  "imagem": null,
  "alternativas": {
    "A": "Java",
    "B": "C++",
    "C": "Python",
    "D": "ASP"
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
  "id": "ESP-PROG-0012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "IDE",
  "ref_apostila": {
    "modulo": "04",
    "secao": "2",
    "titulo": "Hardware e software; linguagens, compiladores, interpretadores e máquinas virtuais",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#2. Hardware e software; linguagens, compiladores, interpretadores e máquinas virtuais]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q73",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 73
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O ambiente de desenvolvimento e a escolha da linguagem de programação é fundamental para o sucesso de um projeto de software, influenciando diretamente sua “qualidade e eficiência”, assim no mundo da programação comumente chamamos o ambiente de desenvolvimento de IDE. Assinale a alternativa que corresponde corretamente ao significado de IDE.",
  "imagem": null,
  "alternativas": {
    "A": "Ambiente de Desenvolvimento Instalado.",
    "B": "Ambiente de Desenvolvimento Inspecionado.",
    "C": "Ambiente de Desenvolvimento Integrado.",
    "D": "Ambiente de Desenvolvimento Interpretado."
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
  "id": "ESP-PROG-0013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java: exceções e finally",
  "ref_apostila": {
    "modulo": "05",
    "secao": "23",
    "titulo": "Java",
    "link": "[[05 - Bancos de Dados e Linguagens#23. Java]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q1",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 1
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código Java abaixo.\n\n```java\nclass Conta {\n    double saldo = 100;\n    void sacar(double v) {\n        if (v > saldo) throw new IllegalArgumentException(\"Saldo insuficiente\");\n        saldo -= v;\n    }\n}\n\npublic class Teste {\n    public static void main(String[] args) {\n        Conta c = new Conta();\n        try {\n            c.sacar(30);\n            c.sacar(80);\n        } catch (IllegalArgumentException e) {\n            System.out.print(\"Erro \");\n        } finally {\n            System.out.print(c.saldo);\n        }\n    }\n}\n```\n\nAo ser executado, o programa imprime:",
  "imagem": null,
  "alternativas": {
    "A": "70.0",
    "B": "Erro 70.0",
    "C": "Erro -10.0",
    "D": "-10.0",
    "E": "Erro 100.0"
  },
  "gabarito": "B",
  "comentario": "O primeiro saque deixa 70; o segundo (80 > 70) lança a exceção antes de subtrair. O `catch` imprime \"Erro \" e o `finally` sempre roda, imprimindo 70.0\n\nRevisar: Módulo 05, Java",
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
  "id": "ESP-PROG-0014",
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
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q6",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 6
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o código Python abaixo.\n\n```python\nsaldos = {\"ana\": 100, \"bia\": 50}\n\ndef ajusta(d, k, v=[]):\n    v.append(k)\n    d[k] = d.get(k, 0) + 10\n    return len(v)\n\najusta(saldos, \"ana\")\nprint(ajusta(saldos, \"caio\"), saldos[\"caio\"], len(saldos))\n```\n\nA saída é:",
  "imagem": null,
  "alternativas": {
    "A": "1 10 3",
    "B": "1 10 2",
    "C": "2 10 3",
    "D": "2 0 3",
    "E": "O programa lança `KeyError`."
  },
  "gabarito": "C",
  "comentario": "O valor padrão `v=[]` é criado uma vez e compartilhado entre chamadas: na segunda chamada `len(v)` é 2. \"caio\" é criado com 0 + 10 = 10, e o dicionário passa a ter 3 chaves\n\nRevisar: Módulo 05, Python",
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
  "id": "ESP-PROG-0015",
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
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q7",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 7
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em orientação a objetos, uma subclasse `ContaPoupanca` redefine o método `calcularRendimento()` herdado de `Conta`, com a mesma assinatura, e a classe `Conta` possui dois métodos `depositar(double valor)` e `depositar(double valor, String historico)`. Esses dois recursos são, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "sobrecarga e sobrescrita.",
    "B": "encapsulamento e herança múltipla.",
    "C": "sobrescrita e encapsulamento.",
    "D": "sobrecarga e polimorfismo paramétrico.",
    "E": "sobrescrita e sobrecarga."
  },
  "gabarito": "E",
  "comentario": "Mesma assinatura na subclasse = sobrescrita (override). Mesmo nome com parâmetros diferentes na mesma classe = sobrecarga (overload)\n\nRevisar: Módulo 06, OO",
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
  "id": "ESP-PROG-0016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Padrões GoF: Strategy",
  "ref_apostila": {
    "modulo": "06",
    "secao": "9",
    "titulo": "Padrões de projeto GoF, MVC e arquitetura em camadas",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#9. Padrões de projeto GoF, MVC e arquitetura em camadas]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q8",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 8
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O sistema de tarifas do banco precisa calcular a tarifa de transferência de formas diferentes (Pix, TED, DOC agendado), permitindo trocar o algoritmo de cálculo em tempo de execução, sem condicionais espalhados pelo código. O padrão de projeto GoF mais adequado é:",
  "imagem": null,
  "alternativas": {
    "A": "Singleton.",
    "B": "Adapter.",
    "C": "Composite.",
    "D": "Strategy.",
    "E": "Facade."
  },
  "gabarito": "D",
  "comentario": "Strategy encapsula uma família de algoritmos intercambiáveis. Singleton garante instância única; Adapter converte interfaces; Facade simplifica um subsistema\n\nRevisar: Módulo 06, Padrões",
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
  "id": "ESP-PROG-0017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "SOLID: inversão de dependência",
  "ref_apostila": {
    "modulo": "06",
    "secao": "8",
    "titulo": "Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#8. Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q9",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 9
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "\"Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações.\" Esse enunciado corresponde ao princípio SOLID da:",
  "imagem": null,
  "alternativas": {
    "A": "Responsabilidade Única (SRP).",
    "B": "Inversão de Dependência (DIP).",
    "C": "Substituição de Liskov (LSP).",
    "D": "Segregação de Interfaces (ISP).",
    "E": "Aberto/Fechado (OCP)."
  },
  "gabarito": "B",
  "comentario": "É a definição do DIP (Dependency Inversion Principle)\n\nRevisar: Módulo 06, SOLID",
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
  "id": "ESP-PROG-0018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Git: revert",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q12",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 12
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um commit com defeito já foi enviado (push) ao repositório remoto compartilhado pela equipe. Para desfazer suas alterações **sem reescrever o histórico**, criando um novo commit que reverte as mudanças, o Analista deve usar:",
  "imagem": null,
  "alternativas": {
    "A": "`git reset --hard HEAD~1`",
    "B": "`git commit --amend`",
    "C": "`git rebase -i HEAD~2`",
    "D": "`git stash`",
    "E": "`git revert <hash-do-commit>`"
  },
  "gabarito": "E",
  "comentario": "`git revert` cria um commit inverso, seguro em histórico já publicado. `reset --hard`, `--amend` e `rebase` reescrevem o histórico\n\nRevisar: Módulo 06, DevOps e Git",
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
  "id": "ESP-PROG-0019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "TDD",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q18",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 18
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Desenvolvimento Guiado por Testes (TDD), a sequência correta do ciclo é:",
  "imagem": null,
  "alternativas": {
    "A": "escrever um teste que falha, escrever o código mínimo para o teste passar e refatorar.",
    "B": "escrever o código, escrever o teste e refatorar.",
    "C": "refatorar, escrever o teste e escrever o código.",
    "D": "escrever todos os testes do sistema, depois todo o código.",
    "E": "escrever o código, executar testes manuais e documentar."
  },
  "gabarito": "A",
  "comentario": "Vermelho (teste falhando), verde (código mínimo), refatorar\n\nRevisar: Módulo 06, Testes",
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
  "id": "ESP-PROG-0020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Estruturas de dados e complexidade",
  "ref_apostila": {
    "modulo": "04",
    "secao": "4",
    "titulo": "Estruturas de dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#4. Estruturas de dados]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q26",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 26
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre estruturas de dados e complexidade de algoritmos, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "a busca binária tem complexidade O(log n) e pode ser aplicada a qualquer vetor, ordenado ou não.",
    "B": "o Quicksort tem complexidade O(n log n) no pior caso.",
    "C": "em uma pilha, o primeiro elemento inserido é o primeiro a ser removido.",
    "D": "em uma tabela hash bem dimensionada, a busca tem custo médio O(1).",
    "E": "a busca em uma árvore binária de busca é sempre O(log n), mesmo que a árvore esteja desbalanceada."
  },
  "gabarito": "D",
  "comentario": "Hash tem busca média O(1). Busca binária exige vetor ordenado; Quicksort é O(n²) no pior caso; pilha é LIFO; árvore desbalanceada pode chegar a O(n)\n\nRevisar: Módulo 04, Estruturas de dados",
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
  "id": "ESP-PROG-0021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Hardware e software",
  "ref_apostila": {
    "modulo": "04",
    "secao": "2",
    "titulo": "Hardware e software; linguagens, compiladores, interpretadores e máquinas virtuais",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#2. Hardware e software; linguagens, compiladores, interpretadores e máquinas virtuais]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §2 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A fase do compilador responsável por agrupar caracteres do programa-fonte em tokens é a análise:",
  "imagem": null,
  "alternativas": {
    "A": "sintática",
    "B": "semântica",
    "C": "léxica",
    "D": "de fluxo",
    "E": "de otimização"
  },
  "gabarito": "C",
  "comentario": "O analisador léxico (scanner) gera tokens. O sintático verifica a gramática; o semântico, o significado (tipos, declarações).",
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
  "id": "ESP-PROG-0022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Hardware e software",
  "ref_apostila": {
    "modulo": "04",
    "secao": "2",
    "titulo": "Hardware e software; linguagens, compiladores, interpretadores e máquinas virtuais",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#2. Hardware e software; linguagens, compiladores, interpretadores e máquinas virtuais]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §2 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere as afirmativas: I. O ligador combina módulos objeto e resolve referências externas. II. O interpretador gera um arquivo executável independente antes da execução. III. Na plataforma Java, o compilador gera bytecode que é executado pela JVM, que pode usar compilação JIT. Está correto o que se afirma em:",
  "imagem": null,
  "alternativas": {
    "A": "I apenas",
    "B": "II apenas",
    "C": "I e III apenas",
    "D": "II e III apenas",
    "E": "I, II e III"
  },
  "gabarito": "C",
  "comentario": "II está errada: o interpretador executa diretamente, sem gerar executável independente.",
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
  "id": "ESP-PROG-0023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Hardware e software",
  "ref_apostila": {
    "modulo": "04",
    "secao": "2",
    "titulo": "Hardware e software; linguagens, compiladores, interpretadores e máquinas virtuais",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#2. Hardware e software; linguagens, compiladores, interpretadores e máquinas virtuais]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §2 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um programa Java, o uso de uma variável que não foi declarada será detectado na fase de análise:",
  "imagem": null,
  "alternativas": {
    "A": "léxica",
    "B": "sintática",
    "C": "semântica",
    "D": "de geração de código",
    "E": "somente em execução"
  },
  "gabarito": "C",
  "comentario": "Verificar se um identificador foi declarado é tarefa da análise semântica (consulta à tabela de símbolos). Sintaticamente, `x = y + 1;` é válido mesmo que `y` não exista.",
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
  "id": "ESP-PROG-0024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Hardware e software",
  "ref_apostila": {
    "modulo": "04",
    "secao": "2",
    "titulo": "Hardware e software; linguagens, compiladores, interpretadores e máquinas virtuais",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#2. Hardware e software; linguagens, compiladores, interpretadores e máquinas virtuais]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §2 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O código intermediário gerado pelo compilador C# e executado pelo CLR é denominado:",
  "imagem": null,
  "alternativas": {
    "A": "bytecode Java",
    "B": "CIL/MSIL",
    "C": "assembly x86",
    "D": "WebAssembly",
    "E": "P-code"
  },
  "gabarito": "B",
  "comentario": "CIL (*Common Intermediate Language*), antes chamada MSIL. O JIT da CLR a converte em código nativo.",
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
  "id": "ESP-PROG-0025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Hardware e software",
  "ref_apostila": {
    "modulo": "04",
    "secao": "2",
    "titulo": "Hardware e software; linguagens, compiladores, interpretadores e máquinas virtuais",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#2. Hardware e software; linguagens, compiladores, interpretadores e máquinas virtuais]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §2 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre firmware, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "é um tipo de hardware programável.",
    "B": "é software armazenado em memória não volátil que controla um dispositivo em baixo nível, como a UEFI.",
    "C": "é sinônimo de sistema operacional.",
    "D": "só existe em computadores pessoais.",
    "E": "é sempre armazenado em DRAM."
  },
  "gabarito": "B",
  "comentario": "Firmware é software embarcado em memória não volátil (flash, ROM). Está em roteadores, SSDs, impressoras, celulares etc.",
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
  "id": "ESP-PROG-0026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Tipos de dados e representação numérica e textual",
  "ref_apostila": {
    "modulo": "04",
    "secao": "3",
    "titulo": "Tipos de dados e representação numérica e textual",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#3. Tipos de dados e representação numérica e textual]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §3 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O número decimal 172 em hexadecimal e em octal é, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "AC e 254",
    "B": "BC e 274",
    "C": "AC e 274",
    "D": "CA e 254",
    "E": "AB e 253"
  },
  "gabarito": "A",
  "comentario": "172/16 = 10 r12 → A, C → **AC**. Em binário: 1010 1100 → grupos de 3: 010 101 100 → **254₈**. Confere: 2·64 + 5·8 + 4 = 172.",
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
  "id": "ESP-PROG-0027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Tipos de dados e representação numérica e textual",
  "ref_apostila": {
    "modulo": "04",
    "secao": "3",
    "titulo": "Tipos de dados e representação numérica e textual",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#3. Tipos de dados e representação numérica e textual]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §3 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em complemento de 2 com 8 bits, a representação de −37 é:",
  "imagem": null,
  "alternativas": {
    "A": "1010 0101",
    "B": "1101 1010",
    "C": "1101 1011",
    "D": "0010 0101",
    "E": "1110 0101"
  },
  "gabarito": "C",
  "comentario": "+37 = 0010 0101; inverte → 1101 1010; soma 1 → **1101 1011**. A alternativa B é o complemento de 1.",
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
  "id": "ESP-PROG-0028",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Tipos de dados e representação numérica e textual",
  "ref_apostila": {
    "modulo": "04",
    "secao": "3",
    "titulo": "Tipos de dados e representação numérica e textual",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#3. Tipos de dados e representação numérica e textual]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §3 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No padrão IEEE 754 de precisão simples, os campos de sinal, expoente e fração possuem, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "1, 11 e 52 bits",
    "B": "1, 8 e 23 bits",
    "C": "1, 7 e 24 bits",
    "D": "2, 8 e 22 bits",
    "E": "1, 10 e 21 bits"
  },
  "gabarito": "B",
  "comentario": "1 + 8 + 23 = 32 bits, bias 127. A opção A (1, 11, 52) é a precisão dupla.",
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
  "id": "ESP-PROG-0029",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Tipos de dados e representação numérica e textual",
  "ref_apostila": {
    "modulo": "04",
    "secao": "3",
    "titulo": "Tipos de dados e representação numérica e textual",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#3. Tipos de dados e representação numérica e textual]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §3 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre codificação de caracteres, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "o UTF-8 utiliza sempre dois bytes por caractere.",
    "B": "o ASCII padrão utiliza 8 bits e representa 256 caracteres acentuados.",
    "C": "o UTF-8 é compatível com o ASCII, pois os caracteres de 0 a 127 são codificados em um único byte idêntico.",
    "D": "Unicode e UTF-8 são sinônimos.",
    "E": "o UTF-32 usa de 1 a 4 bytes."
  },
  "gabarito": "C",
  "comentario": "UTF-8 é retrocompatível com ASCII. É de tamanho variável (1 a 4 bytes); ASCII tem 7 bits; Unicode é o repertório e UTF-8 uma de suas codificações; UTF-32 é fixo em 4 bytes.",
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
  "id": "ESP-PROG-0030",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Tipos de dados e representação numérica e textual",
  "ref_apostila": {
    "modulo": "04",
    "secao": "3",
    "titulo": "Tipos de dados e representação numérica e textual",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#3. Tipos de dados e representação numérica e textual]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §3 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em 8 bits, complemento de 2, a soma 0111 0000 + 0011 0000:",
  "imagem": null,
  "alternativas": {
    "A": "resulta em 160, sem overflow.",
    "B": "gera overflow, pois dois positivos resultaram em um padrão negativo.",
    "C": "gera carry para fora e, por isso, overflow.",
    "D": "resulta em −96 corretamente.",
    "E": "não pode ser feita em complemento de 2."
  },
  "gabarito": "B",
  "comentario": "112 + 48 = 160 > 127. O resultado 1010 0000 tem bit de sinal 1 (seria −96): dois positivos geraram negativo → overflow. Não há carry para fora nesse caso, mostrando que carry e overflow são coisas diferentes.",
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
  "id": "ESP-PROG-0031",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Estruturas de dados",
  "ref_apostila": {
    "modulo": "04",
    "secao": "4",
    "titulo": "Estruturas de dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#4. Estruturas de dados]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §4 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere uma pilha inicialmente vazia e a sequência: push(A), push(B), pop(), push(C), push(D), pop(), push(E). O elemento no topo e a quantidade de elementos na pilha são, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "E e 3",
    "B": "D e 4",
    "C": "E e 4",
    "D": "A e 3",
    "E": "C e 2"
  },
  "gabarito": "A",
  "comentario": "[A] → [A,B] → pop B → [A] → [A,C] → [A,C,D] → pop D → [A,C] → [A,C,E]. Topo E, 3 elementos.",
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
  "id": "ESP-PROG-0032",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Estruturas de dados",
  "ref_apostila": {
    "modulo": "04",
    "secao": "4",
    "titulo": "Estruturas de dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#4. Estruturas de dados]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §4 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma árvore binária de busca, inserem-se, nesta ordem, as chaves 50, 30, 70, 20, 40, 60, 80. O percurso em pós-ordem resulta em:",
  "imagem": null,
  "alternativas": {
    "A": "20, 30, 40, 50, 60, 70, 80",
    "B": "50, 30, 20, 40, 70, 60, 80",
    "C": "20, 40, 30, 60, 80, 70, 50",
    "D": "50, 30, 70, 20, 40, 60, 80",
    "E": "80, 70, 60, 50, 40, 30, 20"
  },
  "gabarito": "C",
  "comentario": "Árvore: raiz 50; 30 (filhos 20, 40); 70 (filhos 60, 80). Pós-ordem (E-D-R): 20, 40, 30, 60, 80, 70, 50. A alternativa A é o em-ordem; B, a pré-ordem; D, o percurso em nível.",
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
  "id": "ESP-PROG-0033",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Estruturas de dados",
  "ref_apostila": {
    "modulo": "04",
    "secao": "4",
    "titulo": "Estruturas de dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#4. Estruturas de dados]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §4 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre tabelas hash, é INCORRETO afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "colisões ocorrem quando chaves distintas são mapeadas para a mesma posição.",
    "B": "o encadeamento separado trata colisões mantendo listas em cada posição.",
    "C": "o tempo médio de busca é O(1), mas o pior caso é O(n).",
    "D": "a tabela hash mantém as chaves ordenadas, permitindo consultas por faixa eficientes.",
    "E": "o aumento do fator de carga tende a aumentar o número de colisões."
  },
  "gabarito": "D",
  "comentario": "A tabela hash não preserva ordem; consultas por faixa são ineficientes. Para isso usam-se árvores (BST balanceada, B+).",
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
  "id": "ESP-PROG-0034",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Estruturas de dados",
  "ref_apostila": {
    "modulo": "04",
    "secao": "4",
    "titulo": "Estruturas de dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#4. Estruturas de dados]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §4 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma árvore AVL, inserem-se 10, 20 e 30, nessa ordem. Para manter o balanceamento é necessária uma:",
  "imagem": null,
  "alternativas": {
    "A": "rotação dupla à direita",
    "B": "rotação simples à esquerda",
    "C": "rotação simples à direita",
    "D": "divisão (split) do nó",
    "E": "nenhuma rotação"
  },
  "gabarito": "B",
  "comentario": "Caso direita-direita: rotação simples à esquerda; 20 vira raiz.",
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
  "id": "ESP-PROG-0035",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Estruturas de dados",
  "ref_apostila": {
    "modulo": "04",
    "secao": "4",
    "titulo": "Estruturas de dados",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#4. Estruturas de dados]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §4 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um max-heap armazenado em vetor com índice inicial 0 tem o elemento de índice 4. Seu pai e seus filhos estão, respectivamente, nos índices:",
  "imagem": null,
  "alternativas": {
    "A": "2; 8 e 9",
    "B": "1; 9 e 10",
    "C": "2; 9 e 10",
    "D": "1; 8 e 9",
    "E": "3; 9 e 10"
  },
  "gabarito": "B",
  "comentario": "Pai = ⌊(4 − 1)/2⌋ = 1; filhos = 2·4 + 1 = 9 e 2·4 + 2 = 10.",
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
  "id": "ESP-PROG-0036",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Complexidade de algoritmos, busca e ordenação",
  "ref_apostila": {
    "modulo": "04",
    "secao": "5",
    "titulo": "Complexidade de algoritmos, busca e ordenação",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#5. Complexidade de algoritmos, busca e ordenação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §5 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A função f(n) = 5n³ + 100n² log n + 7 pertence a:",
  "imagem": null,
  "alternativas": {
    "A": "O(n²)",
    "B": "Θ(n² log n)",
    "C": "Θ(n³)",
    "D": "Ω(n⁴)",
    "E": "O(n log n)"
  },
  "gabarito": "C",
  "comentario": "O termo dominante é n³; constantes e termos menores são desprezados. Também é O(n⁴), mas não Ω(n⁴).",
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
  "id": "ESP-PROG-0037",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Complexidade de algoritmos, busca e ordenação",
  "ref_apostila": {
    "modulo": "04",
    "secao": "5",
    "titulo": "Complexidade de algoritmos, busca e ordenação",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#5. Complexidade de algoritmos, busca e ordenação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §5 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Dentre os algoritmos abaixo, aquele que garante complexidade O(n log n) no pior caso e é estável é o:",
  "imagem": null,
  "alternativas": {
    "A": "quicksort",
    "B": "heapsort",
    "C": "merge sort",
    "D": "selection sort",
    "E": "insertion sort"
  },
  "gabarito": "C",
  "comentario": "Merge sort: Θ(n log n) sempre e estável. Heapsort também garante n log n, mas não é estável; quicksort tem pior caso O(n²).",
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
  "id": "ESP-PROG-0038",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Complexidade de algoritmos, busca e ordenação",
  "ref_apostila": {
    "modulo": "04",
    "secao": "5",
    "titulo": "Complexidade de algoritmos, busca e ordenação",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#5. Complexidade de algoritmos, busca e ordenação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §5 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma busca binária sobre um vetor ordenado de 4.096 elementos, o número máximo de comparações com a chave é aproximadamente:",
  "imagem": null,
  "alternativas": {
    "A": "12 ou 13",
    "B": "64",
    "C": "2.048",
    "D": "4.096",
    "E": "24"
  },
  "gabarito": "A",
  "comentario": "log₂ 4096 = 12; no pior caso ⌊log₂ n⌋ + 1 = 13 comparações. Ordem de grandeza: ~12.",
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
  "id": "ESP-PROG-0039",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Complexidade de algoritmos, busca e ordenação",
  "ref_apostila": {
    "modulo": "04",
    "secao": "5",
    "titulo": "Complexidade de algoritmos, busca e ordenação",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#5. Complexidade de algoritmos, busca e ordenação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §5 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O trecho `for (i = n; i > 1; i = i / 2) for (j = 0; j < n; j++) x++;` tem complexidade:",
  "imagem": null,
  "alternativas": {
    "A": "O(n)",
    "B": "O(log n)",
    "C": "O(n log n)",
    "D": "O(n²)",
    "E": "O(2ⁿ)"
  },
  "gabarito": "C",
  "comentario": "O laço externo roda log₂ n vezes (i dividido por 2); o interno, n vezes → O(n log n).",
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
  "id": "ESP-PROG-0040",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Complexidade de algoritmos, busca e ordenação",
  "ref_apostila": {
    "modulo": "04",
    "secao": "5",
    "titulo": "Complexidade de algoritmos, busca e ordenação",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#5. Complexidade de algoritmos, busca e ordenação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §5 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere as afirmativas: I. O insertion sort tem complexidade O(n) no melhor caso. II. O quicksort atinge O(n²) quando os pivôs escolhidos geram partições muito desbalanceadas. III. A busca binária pode ser aplicada eficientemente a uma lista simplesmente encadeada ordenada. Está correto o que se afirma em:",
  "imagem": null,
  "alternativas": {
    "A": "I apenas",
    "B": "I e II apenas",
    "C": "II e III apenas",
    "D": "I e III apenas",
    "E": "I, II e III"
  },
  "gabarito": "B",
  "comentario": "III é falsa: sem acesso direto ao meio, a busca binária em lista encadeada perde a vantagem (achar o meio custa O(n)).",
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
  "id": "ESP-PROG-0041",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python",
  "ref_apostila": {
    "modulo": "05",
    "secao": "22",
    "titulo": "Python",
    "link": "[[05 - Bancos de Dados e Linguagens#22. Python]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §22 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual a saída?\n```python\nprint(7 // 2, 7 % 2, 7 / 2, 2 ** 3)\n```",
  "imagem": null,
  "alternativas": {
    "A": "3 1 3 8",
    "B": "3 1 3.5 8",
    "C": "3.5 1 3.5 6",
    "D": "4 1 3.5 8",
    "E": "3 0 3.5 9"
  },
  "gabarito": "B",
  "comentario": "`//` = 3; `%` = 1; `/` = 3.5 (sempre float); `**` = 8.",
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
  "id": "ESP-PROG-0042",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python",
  "ref_apostila": {
    "modulo": "05",
    "secao": "22",
    "titulo": "Python",
    "link": "[[05 - Bancos de Dados e Linguagens#22. Python]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §22 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em Python, tuplas são mutáveis e listas são imutáveis.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "É o contrário: listas mutáveis, tuplas imutáveis.",
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
  "id": "ESP-PROG-0043",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python",
  "ref_apostila": {
    "modulo": "05",
    "secao": "22",
    "titulo": "Python",
    "link": "[[05 - Bancos de Dados e Linguagens#22. Python]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §22 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual a saída?\n```python\na = [1, 2, 3]\nb = a\nb.append(4)\nc = a[:]\nc.append(5)\nprint(len(a), len(b), len(c))\n```",
  "imagem": null,
  "alternativas": {
    "A": "3 4 5",
    "B": "4 4 5",
    "C": "4 4 4",
    "D": "5 5 5",
    "E": "3 3 4"
  },
  "gabarito": "B",
  "comentario": "`b` aponta para a mesma lista que `a` (4 elementos); `c` é cópia, com 5.",
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
  "id": "ESP-PROG-0044",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python",
  "ref_apostila": {
    "modulo": "05",
    "secao": "22",
    "titulo": "Python",
    "link": "[[05 - Bancos de Dados e Linguagens#22. Python]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §22 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No PyQt, o mecanismo que permite conectar a ação de clicar em um botão a um método da aplicação é:",
  "imagem": null,
  "alternativas": {
    "A": "listeners e adapters",
    "B": "sinais e slots",
    "C": "callbacks de DOM",
    "D": "delegates do .NET",
    "E": "eventos de banco de dados"
  },
  "gabarito": "B",
  "comentario": "Sinais e slots (`clicked.connect(...)`).",
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
  "id": "ESP-PROG-0045",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python",
  "ref_apostila": {
    "modulo": "05",
    "secao": "22",
    "titulo": "Python",
    "link": "[[05 - Bancos de Dados e Linguagens#22. Python]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §22 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Usando o módulo sqlite3, a forma correta de executar uma consulta parametrizada, prevenindo SQL Injection, é:",
  "imagem": null,
  "alternativas": {
    "A": "`cur.execute(\"SELECT * FROM t WHERE id = \" + id)`",
    "B": "`cur.execute(f\"SELECT * FROM t WHERE id = {id}\")`",
    "C": "`cur.execute(\"SELECT * FROM t WHERE id = ?\", (id,))`",
    "D": "`cur.execute(\"SELECT * FROM t WHERE id = %s\" % id)`",
    "E": "`cur.execute(\"SELECT * FROM t WHERE id = ?\" + str(id))`"
  },
  "gabarito": "C",
  "comentario": "Marcador `?` e parâmetros em tupla. As demais montam o SQL por concatenação/formatação.",
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
  "id": "ESP-PROG-0046",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Python",
  "ref_apostila": {
    "modulo": "05",
    "secao": "22",
    "titulo": "Python",
    "link": "[[05 - Bancos de Dados e Linguagens#22. Python]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §22 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual a saída?\n```python\ndef f(x, lst=[]):\n    lst.append(x)\n    return len(lst)\nprint(f(1), f(2), f(3, []))\n```",
  "imagem": null,
  "alternativas": {
    "A": "1 1 1",
    "B": "1 2 1",
    "C": "1 2 3",
    "D": "1 2 2",
    "E": "erro"
  },
  "gabarito": "B",
  "comentario": "A lista padrão é compartilhada: f(1) → 1, f(2) → 2; f(3, []) usa uma lista nova → 1.",
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
  "id": "ESP-PROG-0047",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java",
  "ref_apostila": {
    "modulo": "05",
    "secao": "23",
    "titulo": "Java",
    "link": "[[05 - Bancos de Dados e Linguagens#23. Java]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §23 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em Java, sobre classes abstratas e interfaces, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "uma classe pode estender várias classes abstratas.",
    "B": "interfaces podem ter atributos de instância privados.",
    "C": "uma classe abstrata pode possuir construtores e métodos concretos.",
    "D": "uma interface pode ser instanciada com new diretamente.",
    "E": "toda classe abstrata deve possuir ao menos um método abstrato."
  },
  "gabarito": "C",
  "comentario": "Classe abstrata pode ter construtor e métodos concretos. Herança de classe é simples; interfaces só têm constantes; abstrata pode não ter métodos abstratos.",
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
  "id": "ESP-PROG-0048",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java",
  "ref_apostila": {
    "modulo": "05",
    "secao": "23",
    "titulo": "Java",
    "link": "[[05 - Bancos de Dados e Linguagens#23. Java]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §23 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em Java, o modificador `protected` restringe o acesso exclusivamente às subclasses, impedindo o acesso por outras classes do mesmo pacote.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "`protected` permite acesso no mesmo pacote **e** em subclasses de outros pacotes.",
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
  "id": "ESP-PROG-0049",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java",
  "ref_apostila": {
    "modulo": "05",
    "secao": "23",
    "titulo": "Java",
    "link": "[[05 - Bancos de Dados e Linguagens#23. Java]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §23 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual a saída?\n```java\nclass A { String nome() { return \"A\"; } }\nclass B extends A { String nome() { return \"B\"; } }\npublic class T {\n    public static void main(String[] a) {\n        A obj = new B();\n        System.out.println(obj.nome() + (obj instanceof A) + (obj instanceof B));\n    }\n}\n```",
  "imagem": null,
  "alternativas": {
    "A": "Atruefalse",
    "B": "Btruetrue",
    "C": "Atruetrue",
    "D": "Bfalsetrue",
    "E": "erro de compilação"
  },
  "gabarito": "B",
  "comentario": "Ligação dinâmica executa `B.nome()`; o objeto é instância de A e de B.",
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
  "id": "ESP-PROG-0050",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java",
  "ref_apostila": {
    "modulo": "05",
    "secao": "23",
    "titulo": "Java",
    "link": "[[05 - Bancos de Dados e Linguagens#23. Java]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §23 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A coleção Java que não admite elementos duplicados e mantém os elementos em ordem crescente é:",
  "imagem": null,
  "alternativas": {
    "A": "ArrayList",
    "B": "HashSet",
    "C": "LinkedList",
    "D": "TreeSet",
    "E": "HashMap"
  },
  "gabarito": "D",
  "comentario": "TreeSet (Set ordenado).",
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
  "id": "ESP-PROG-0051",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java",
  "ref_apostila": {
    "modulo": "05",
    "secao": "23",
    "titulo": "Java",
    "link": "[[05 - Bancos de Dados e Linguagens#23. Java]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §23 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São exceções verificadas (checked) em Java:",
  "imagem": null,
  "alternativas": {
    "A": "NullPointerException e ArithmeticException",
    "B": "IOException e SQLException",
    "C": "ClassCastException e IllegalArgumentException",
    "D": "OutOfMemoryError e StackOverflowError",
    "E": "NumberFormatException e IOException"
  },
  "gabarito": "B",
  "comentario": "IOException e SQLException são checked; as demais são RuntimeException ou Error.",
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
  "id": "ESP-PROG-0052",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Java",
  "ref_apostila": {
    "modulo": "05",
    "secao": "23",
    "titulo": "Java",
    "link": "[[05 - Bancos de Dados e Linguagens#23. Java]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §23 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual a saída?\n```java\nString s1 = \"abc\";\nString s2 = new String(\"abc\");\nSystem.out.println((s1 == s2) + \" \" + s1.equals(s2) + \" \" + (7 / 2) + \" \" + (7 % -3));\n```",
  "imagem": null,
  "alternativas": {
    "A": "true true 3 1",
    "B": "false true 3 1",
    "C": "false true 3.5 -1",
    "D": "false false 3 1",
    "E": "false true 3 -1"
  },
  "gabarito": "B",
  "comentario": "`==` compara referências (false); equals → true; 7/2 = 3; 7 % −3 = 1 (sinal do dividendo, 7).",
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
  "id": "ESP-PROG-0053",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C++",
  "ref_apostila": {
    "modulo": "05",
    "secao": "24",
    "titulo": "C++",
    "link": "[[05 - Bancos de Dados e Linguagens#24. C++]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §24 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual a saída?\n```cpp\nint a = 5;\nint* p = &a;\nint& r = a;\n*p = 8;\nr = r + 2;\ncout << a << \" \" << *p;\n```",
  "imagem": null,
  "alternativas": {
    "A": "5 5",
    "B": "8 8",
    "C": "10 10",
    "D": "8 10",
    "E": "7 7"
  },
  "gabarito": "C",
  "comentario": "p e r referem-se a `a`: `*p = 8` → a = 8; `r = r + 2` → a = 10; `*p` = 10.",
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
  "id": "ESP-PROG-0054",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C++",
  "ref_apostila": {
    "modulo": "05",
    "secao": "24",
    "titulo": "C++",
    "link": "[[05 - Bancos de Dados e Linguagens#24. C++]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §24 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em C++, para que uma chamada de método por meio de um ponteiro para a classe base execute a versão sobrescrita na classe derivada, o método deve ser declarado como virtual na classe base.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Sem `virtual`, a ligação é estática (pelo tipo do ponteiro).",
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
  "id": "ESP-PROG-0055",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C++",
  "ref_apostila": {
    "modulo": "05",
    "secao": "24",
    "titulo": "C++",
    "link": "[[05 - Bancos de Dados e Linguagens#24. C++]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §24 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma classe C++ que possui pelo menos uma função declarada como `virtual void f() = 0;` é:",
  "imagem": null,
  "alternativas": {
    "A": "uma classe final",
    "B": "uma classe abstrata, que não pode ser instanciada",
    "C": "uma classe template",
    "D": "uma interface obrigatoriamente sem atributos",
    "E": "uma struct"
  },
  "gabarito": "B",
  "comentario": "Função virtual pura torna a classe abstrata.",
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
  "id": "ESP-PROG-0056",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C++",
  "ref_apostila": {
    "modulo": "05",
    "secao": "24",
    "titulo": "C++",
    "link": "[[05 - Bancos de Dados e Linguagens#24. C++]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §24 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para liberar a memória de um vetor alocado com `int* v = new int[10];` utiliza-se:",
  "imagem": null,
  "alternativas": {
    "A": "free(v)",
    "B": "delete v",
    "C": "delete[] v",
    "D": "v = nullptr",
    "E": "dispose(v)"
  },
  "gabarito": "C",
  "comentario": "Arrays alocados com `new[]` são liberados com `delete[]`.",
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
  "id": "ESP-PROG-0057",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C++",
  "ref_apostila": {
    "modulo": "05",
    "secao": "24",
    "titulo": "C++",
    "link": "[[05 - Bancos de Dados e Linguagens#24. C++]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §24 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual a saída?\n```cpp\nvoid f(int x, int& y) { x++; y++; }\nint main() { int a = 1, b = 1; f(a, b); cout << a << b; }\n```",
  "imagem": null,
  "alternativas": {
    "A": "11",
    "B": "12",
    "C": "21",
    "D": "22",
    "E": "erro"
  },
  "gabarito": "B",
  "comentario": "`x` é cópia (a continua 1); `y` é referência (b vira 2).",
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
  "id": "ESP-PROG-0058",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C# e ASP/ASP.NET",
  "ref_apostila": {
    "modulo": "05",
    "secao": "25",
    "titulo": "C# e ASP/ASP.NET",
    "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §25 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em C#, considere: `public decimal Saldo { get; private set; }`. É correto afirmar que:",
  "imagem": null,
  "alternativas": {
    "A": "a propriedade é somente escrita.",
    "B": "a propriedade pode ser lida por qualquer classe, mas só pode ser alterada dentro da própria classe.",
    "C": "o código não compila, pois propriedades autoimplementadas exigem campo de apoio explícito.",
    "D": "a propriedade pode ser alterada por classes derivadas.",
    "E": "`value` não pode ser usado em propriedades autoimplementadas, logo a propriedade é constante."
  },
  "gabarito": "B",
  "comentario": "get público, set privado: leitura externa, escrita apenas interna (nem as derivadas alteram, pois `private`).",
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
  "id": "ESP-PROG-0059",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C# e ASP/ASP.NET",
  "ref_apostila": {
    "modulo": "05",
    "secao": "25",
    "titulo": "C# e ASP/ASP.NET",
    "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §25 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No ASP clássico, o código delimitado por `<% %>` é executado no navegador do cliente, após o download da página.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "É executado **no servidor**; o cliente recebe só o HTML gerado.",
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
  "id": "ESP-PROG-0060",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C# e ASP/ASP.NET",
  "ref_apostila": {
    "modulo": "05",
    "secao": "25",
    "titulo": "C# e ASP/ASP.NET",
    "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §25 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No ASP clássico, para obter o valor de um campo enviado por um formulário com `method=\"post\"`, utiliza-se:",
  "imagem": null,
  "alternativas": {
    "A": "`Request.QueryString(\"campo\")`",
    "B": "`Request.Form(\"campo\")`",
    "C": "`Response.Form(\"campo\")`",
    "D": "`Session.Form(\"campo\")`",
    "E": "`Server.Form(\"campo\")`"
  },
  "gabarito": "B",
  "comentario": "Request.Form para POST; QueryString para GET.",
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
  "id": "ESP-PROG-0061",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C# e ASP/ASP.NET",
  "ref_apostila": {
    "modulo": "05",
    "secao": "25",
    "titulo": "C# e ASP/ASP.NET",
    "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §25 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em C#, para que um método da classe base possa ser sobrescrito na classe derivada com ligação dinâmica, a base e a derivada devem usar, respectivamente, os modificadores:",
  "imagem": null,
  "alternativas": {
    "A": "abstract e new",
    "B": "virtual e override",
    "C": "sealed e override",
    "D": "static e virtual",
    "E": "override e virtual"
  },
  "gabarito": "B",
  "comentario": "`virtual` na base, `override` na derivada (`new` apenas oculta).",
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
  "id": "ESP-PROG-0062",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C# e ASP/ASP.NET",
  "ref_apostila": {
    "modulo": "05",
    "secao": "25",
    "titulo": "C# e ASP/ASP.NET",
    "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §25 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre namespaces em C#, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "cada namespace deve corresponder a um único assembly.",
    "B": "a diretiva using permite referenciar tipos de um namespace sem o nome totalmente qualificado.",
    "C": "namespaces não podem ser aninhados.",
    "D": "namespaces definem a estrutura física de diretórios obrigatoriamente, como em Java.",
    "E": "a instrução using(...) { } serve para importar namespaces dentro de métodos."
  },
  "gabarito": "B",
  "comentario": "A diretiva using importa namespaces; namespaces podem se aninhar e se espalhar por vários assemblies; a instrução `using(...)` é para descarte de recursos.",
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
  "id": "ESP-PROG-0063",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "C# e ASP/ASP.NET",
  "ref_apostila": {
    "modulo": "05",
    "secao": "25",
    "titulo": "C# e ASP/ASP.NET",
    "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 05 §25 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No ASP.NET Web Forms, a sintaxe `<%# Eval(\"Nome\") %>` é utilizada para:",
  "imagem": null,
  "alternativas": {
    "A": "comentário de servidor",
    "B": "diretiva de página",
    "C": "expressão de data binding",
    "D": "inclusão de arquivo",
    "E": "escrita com codificação HTML"
  },
  "gabarito": "C",
  "comentario": "`<%# %>` = data binding; `<%-- --%>` comentário; `<%@ %>` diretiva; `<%: %>` escrita codificada.",
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
  "id": "ESP-PROG-0064",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Algoritmos e lógica de programação",
  "ref_apostila": {
    "modulo": "06",
    "secao": "7",
    "titulo": "Algoritmos e lógica de programação",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#7. Algoritmos e lógica de programação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §7 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o pseudocódigo:\n   ```\n   x <- 10\n   y <- 3\n   enquanto x > 0 faca\n       x <- x - y\n       y <- y + 1\n   fimenquanto\n   escreva(x, y)\n   ```\n   A saída é:",
  "imagem": null,
  "alternativas": {
    "A": "0 5.",
    "B": "-2 6.",
    "C": "-8 7.",
    "D": "-4 6.",
    "E": "1 5."
  },
  "gabarito": "B",
  "comentario": "Teste de mesa: início x = 10, y = 3. 1ª volta: x = 10 − 3 = 7; y = 4. 2ª: x = 7 − 4 = 3; y = 5. 3ª: x = 3 − 5 = −2; y = 6. Como −2 > 0 é falso, o laço termina. Saída: **−2 6**.",
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
  "id": "ESP-PROG-0065",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Algoritmos e lógica de programação",
  "ref_apostila": {
    "modulo": "06",
    "secao": "7",
    "titulo": "Algoritmos e lógica de programação",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#7. Algoritmos e lógica de programação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §7 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre estruturas de repetição, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "o laço `enquanto` executa seu bloco pelo menos uma vez.",
    "B": "o laço `repita...até` testa a condição antes de executar o bloco.",
    "C": "o laço `do...while` executa o bloco pelo menos uma vez, pois testa a condição ao final.",
    "D": "o laço `para` só pode ser usado quando o número de repetições é desconhecido.",
    "E": "toda repetição exige o uso de `goto`."
  },
  "gabarito": "C",
  "comentario": "`do...while` testa ao final, logo executa ao menos uma vez. `enquanto` pode executar zero vezes; `repita...até` testa no fim; `para` é usado quando o número de repetições é conhecido.",
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
  "id": "ESP-PROG-0066",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Algoritmos e lógica de programação",
  "ref_apostila": {
    "modulo": "06",
    "secao": "7",
    "titulo": "Algoritmos e lógica de programação",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#7. Algoritmos e lógica de programação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §7 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em Python, qual é a saída de `print(17 // 5, 17 % 5, -17 // 5)`?",
  "imagem": null,
  "alternativas": {
    "A": "3 2 -3.",
    "B": "3 2 -4.",
    "C": "3.4 2 -3.4.",
    "D": "3 2 -3.4.",
    "E": "4 2 -4."
  },
  "gabarito": "B",
  "comentario": "17 // 5 = 3; 17 % 5 = 2; −17 // 5 = −4 (Python arredonda a divisão inteira para baixo, em direção a −∞).",
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
  "id": "ESP-PROG-0067",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Algoritmos e lógica de programação",
  "ref_apostila": {
    "modulo": "06",
    "secao": "7",
    "titulo": "Algoritmos e lógica de programação",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#7. Algoritmos e lógica de programação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §7 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em Java, como os objetos são passados por referência, um método que recebe um objeto e lhe atribui um novo objeto (`param = new Conta()`) faz com que a variável original do chamador passe a apontar para o novo objeto.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Java sempre passa por valor; para objetos, passa-se uma cópia da referência. Reatribuir o parâmetro não altera a variável do chamador (alterar atributos do objeto, sim).",
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
  "id": "ESP-PROG-0068",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Algoritmos e lógica de programação",
  "ref_apostila": {
    "modulo": "06",
    "secao": "7",
    "titulo": "Algoritmos e lógica de programação",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#7. Algoritmos e lógica de programação]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §7 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual o valor retornado por `g(5)`?\n   ```python\n   def g(n):\n       if n <= 1:\n           return 1\n       return g(n - 1) + g(n - 2)\n   ```",
  "imagem": null,
  "alternativas": {
    "A": "5.",
    "B": "8.",
    "C": "13.",
    "D": "3.",
    "E": "1."
  },
  "gabarito": "B",
  "comentario": "g(0) = g(1) = 1; g(2) = 2; g(3) = 3; g(4) = 5; g(5) = 8.",
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
  "id": "ESP-PROG-0069",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Análise e projeto orientados a objetos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "8",
    "titulo": "Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#8. Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §8 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em orientação a objetos, a definição de vários métodos com o mesmo nome, mas com listas de parâmetros diferentes, em uma mesma classe, é denominada:",
  "imagem": null,
  "alternativas": {
    "A": "sobrescrita.",
    "B": "sobrecarga.",
    "C": "herança múltipla.",
    "D": "encapsulamento.",
    "E": "agregação."
  },
  "gabarito": "B",
  "comentario": "Sobrecarga (overloading). Sobrescrita é redefinir, na subclasse, um método herdado com a mesma assinatura.",
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
  "id": "ESP-PROG-0070",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Análise e projeto orientados a objetos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "8",
    "titulo": "Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#8. Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §8 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A composição é um tipo de associação todo-parte em que a parte pode existir independentemente do todo e ser compartilhada entre vários todos.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Isso descreve a **agregação**. Na composição, a parte depende do todo (ciclo de vida) e pertence a um único todo.",
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
  "id": "ESP-PROG-0071",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Análise e projeto orientados a objetos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "8",
    "titulo": "Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#8. Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §8 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O princípio SOLID segundo o qual módulos de alto nível não devem depender de módulos de baixo nível, mas ambos de abstrações, é o:",
  "imagem": null,
  "alternativas": {
    "A": "SRP.",
    "B": "OCP.",
    "C": "LSP.",
    "D": "ISP.",
    "E": "DIP."
  },
  "gabarito": "E",
  "comentario": "Princípio da Inversão de Dependência.",
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
  "id": "ESP-PROG-0072",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Análise e projeto orientados a objetos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "8",
    "titulo": "Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#8. Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §8 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Assinale a alternativa que apresenta a combinação desejável em um bom projeto de software:",
  "imagem": null,
  "alternativas": {
    "A": "alto acoplamento e alta coesão.",
    "B": "baixo acoplamento e baixa coesão.",
    "C": "baixo acoplamento e alta coesão.",
    "D": "alto acoplamento e baixa coesão.",
    "E": "acoplamento de conteúdo e coesão coincidental."
  },
  "gabarito": "C",
  "comentario": "Baixo acoplamento e alta coesão.",
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
  "id": "ESP-PROG-0073",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Análise e projeto orientados a objetos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "8",
    "titulo": "Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#8. Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §8 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Se uma subclasse sobrescreve um método da superclasse lançando uma exceção em situações nas quais a superclasse funcionava normalmente, há violação do Princípio da Substituição de Liskov.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "A subclasse deixa de ser substituível pela superclasse: viola o LSP.",
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
  "id": "ESP-PROG-0074",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Análise e projeto orientados a objetos",
  "ref_apostila": {
    "modulo": "06",
    "secao": "8",
    "titulo": "Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#8. Análise e projeto orientados a objetos (pilares, acoplamento, coesão, SOLID)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §8 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O tipo de coesão em que os elementos de um módulo são agrupados porque são executados no mesmo intervalo de tempo, como rotinas de inicialização, é a coesão:",
  "imagem": null,
  "alternativas": {
    "A": "funcional.",
    "B": "sequencial.",
    "C": "temporal.",
    "D": "comunicacional.",
    "E": "coincidental."
  },
  "gabarito": "C",
  "comentario": "Coesão temporal.",
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
  "id": "ESP-PROG-0075",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Padrões de projeto GoF, MVC e arquitetura em camadas",
  "ref_apostila": {
    "modulo": "06",
    "secao": "9",
    "titulo": "Padrões de projeto GoF, MVC e arquitetura em camadas",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#9. Padrões de projeto GoF, MVC e arquitetura em camadas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §9 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O padrão de projeto que permite acrescentar responsabilidades a um objeto dinamicamente, sendo uma alternativa flexível ao uso de subclasses para estender funcionalidades, é o:",
  "imagem": null,
  "alternativas": {
    "A": "Adapter.",
    "B": "Decorator.",
    "C": "Facade.",
    "D": "Proxy.",
    "E": "Composite."
  },
  "gabarito": "B",
  "comentario": "Decorator. O Adapter muda a interface; o Proxy controla o acesso; a Facade simplifica um subsistema.",
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
  "id": "ESP-PROG-0076",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Padrões de projeto GoF, MVC e arquitetura em camadas",
  "ref_apostila": {
    "modulo": "06",
    "secao": "9",
    "titulo": "Padrões de projeto GoF, MVC e arquitetura em camadas",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#9. Padrões de projeto GoF, MVC e arquitetura em camadas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §9 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Os padrões Factory Method, Abstract Factory, Builder, Prototype e Singleton pertencem à categoria dos padrões estruturais do GoF.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Esses cinco são os padrões **criacionais**.",
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
  "id": "ESP-PROG-0077",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Padrões de projeto GoF, MVC e arquitetura em camadas",
  "ref_apostila": {
    "modulo": "06",
    "secao": "9",
    "titulo": "Padrões de projeto GoF, MVC e arquitetura em camadas",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#9. Padrões de projeto GoF, MVC e arquitetura em camadas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §9 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um sistema bancário precisa notificar automaticamente o app do cliente, o serviço de antifraude e o serviço de e-mail sempre que o saldo de uma conta mudar. O padrão mais adequado é:",
  "imagem": null,
  "alternativas": {
    "A": "Strategy.",
    "B": "Singleton.",
    "C": "Observer.",
    "D": "Builder.",
    "E": "Visitor."
  },
  "gabarito": "C",
  "comentario": "Observer: dependência um-para-muitos com notificação automática.",
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
  "id": "ESP-PROG-0078",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Padrões de projeto GoF, MVC e arquitetura em camadas",
  "ref_apostila": {
    "modulo": "06",
    "secao": "9",
    "titulo": "Padrões de projeto GoF, MVC e arquitetura em camadas",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#9. Padrões de projeto GoF, MVC e arquitetura em camadas]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §9 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O padrão que define o esqueleto de um algoritmo em uma operação, deixando que subclasses redefinam certos passos sem alterar sua estrutura, é o:",
  "imagem": null,
  "alternativas": {
    "A": "Strategy.",
    "B": "Template Method.",
    "C": "State.",
    "D": "Command.",
    "E": "Chain of Responsibility."
  },
  "gabarito": "B",
  "comentario": "Template Method (escopo de classe, usa herança). O Strategy troca o algoritmo inteiro por composição.",
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
  "id": "ESP-PROG-0079",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §12 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em Git, o comando que baixa as atualizações do repositório remoto sem integrá-las automaticamente ao branch local é:",
  "imagem": null,
  "alternativas": {
    "A": "git pull.",
    "B": "git push.",
    "C": "git fetch.",
    "D": "git merge.",
    "E": "git commit."
  },
  "gabarito": "C",
  "comentario": "git fetch. O git pull faz fetch + merge.",
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
  "id": "ESP-PROG-0080",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §12 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Git Flow, as correções urgentes de produção são feitas em branches do tipo:",
  "imagem": null,
  "alternativas": {
    "A": "feature, criados a partir de develop.",
    "B": "release, criados a partir de main.",
    "C": "hotfix, criados a partir de main (master).",
    "D": "develop, criados a partir de feature.",
    "E": "hotfix, criados a partir de develop."
  },
  "gabarito": "C",
  "comentario": "Hotfix sai de main/master e depois é integrado em main e develop.",
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
  "id": "ESP-PROG-0081",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Testes de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §16 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No TDD, a sequência correta do ciclo é:",
  "imagem": null,
  "alternativas": {
    "A": "escrever o código, escrever o teste, refatorar.",
    "B": "refatorar, escrever o teste que falha, escrever o código.",
    "C": "escrever um teste que falha, escrever o código mínimo para passar, refatorar.",
    "D": "escrever todos os testes do sistema, implementar todo o sistema, executar os testes.",
    "E": "escrever o código, depurar, documentar."
  },
  "gabarito": "C",
  "comentario": "Vermelho (teste que falha), verde (código mínimo), refatorar.",
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
  "id": "ESP-PROG-0082",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Testes de software",
  "ref_apostila": {
    "modulo": "06",
    "secao": "16",
    "titulo": "Testes de software",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#16. Testes de software]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §16 – Q7",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "De acordo com a pirâmide de testes de Mike Cohn, deve haver:",
  "imagem": null,
  "alternativas": {
    "A": "mais testes de interface do que de unidade.",
    "B": "a mesma quantidade de testes em todas as camadas.",
    "C": "muitos testes de unidade na base, menos testes de serviço/integração e poucos testes de interface no topo.",
    "D": "apenas testes manuais no topo e nenhum teste automatizado.",
    "E": "somente testes de aceitação escritos em Gherkin."
  },
  "gabarito": "C",
  "comentario": "Base larga de unidade, meio de serviço, topo estreito de UI.",
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
  "id": "ESP-PROG-0083",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA…",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §18 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No GitFlow, uma correção urgente em produção é feita em um ramo",
  "imagem": null,
  "alternativas": {
    "A": "feature, criado a partir de develop e integrado só em develop.",
    "B": "hotfix, criado a partir de main e integrado em main e em develop.",
    "C": "release, criado a partir de main e descartado após o deploy.",
    "D": "develop, integrado diretamente em produção.",
    "E": "trunk, sem revisão."
  },
  "gabarito": "B",
  "comentario": "Hotfix nasce da main e volta para main e develop.",
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
  "id": "ESP-PROG-0084",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Programação",
  "topico": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA…",
  "ref_apostila": {
    "modulo": "06",
    "secao": "18",
    "titulo": "Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#18. Arquitetura e práticas complementares: hexagonal, legados, versionamento semântico, IA no desenvolvimento]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §18 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "É prática adequada no uso de assistentes de código baseados em IA em uma instituição financeira:",
  "imagem": null,
  "alternativas": {
    "A": "colar dados reais de clientes no prompt para obter respostas mais precisas.",
    "B": "dispensar revisão e testes do código gerado, por ser produzido por modelo treinado.",
    "C": "submeter o código sugerido a revisão humana, testes e análise de segurança, sem expor dados sensíveis.",
    "D": "usar qualquer ferramenta gratuita disponível na internet.",
    "E": "publicar chaves de API no código para facilitar a geração."
  },
  "gabarito": "C",
  "comentario": "Revisão humana, testes e proteção de dados são essenciais.",
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
