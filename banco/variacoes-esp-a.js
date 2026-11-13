/*
 * Variações (esp-a) — agente 3: Processo, Programação, Governança, Banco de Dados e Web.
 * Gerado por tools/verificacao/agente3/gerar.py a partir de q_*.py (não edite à mão).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 */
window.BANCO = window.BANCO || [];

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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
    "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET]]"
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
    "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET]]"
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
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
  "status": "rascunho",
  "validacao": {
    "por": "agente-3",
    "em": "2026-11-14",
    "obs": ""
  },
  "versao": 1
});

