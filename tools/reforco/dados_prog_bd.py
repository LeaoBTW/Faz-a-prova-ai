# -*- coding: utf-8 -*-
from comum import Q, bloco

P, B = "PROG", "BD"

PHP1 = '''<?php
$a = "5";
$b = 3;
echo $a + $b, " ", $a . $b;'''
PHP2 = '''<?php
function soma(array $v) {
    $t = 0;
    foreach ($v as $k => $x) {
        if ($k % 2 == 0) {
            $t += $x;
        }
    }
    return $t;
}
echo soma([10, 20, 30, 40, 50]);'''
PHP3 = '''<?php
class A {
    public function quem() { return "A"; }
    public function fala() { return $this->quem(); }
}
class B extends A {
    public function quem() { return "B"; }
}
$o = new B();
echo $o->fala();
echo (1 === "1") ? "S" : "N";
echo (1 == "1") ? "S" : "N";'''
C1 = '''#include <stdio.h>
int main(void) {
    int v[5] = {2, 4, 6, 8, 10};
    int *p = v + 1;
    int s = 0;
    for (int i = 0; i < 3; i++) {
        s += *(p + i);
    }
    printf("%d %d", s, p[2]);
    return 0;
}'''
C2 = '''#include <stdio.h>
#include <string.h>
int main(void) {
    char s[] = "banestes";
    int n = 0;
    for (char *p = s; *p; p++) {
        if (*p == 'e') n++;
    }
    printf("%d %zu %zu", n, strlen(s), sizeof(s));
    return 0;
}'''
C3 = '''#include <stdio.h>
int main(void) {
    int a = 7, b = 2;
    double x = a / b;
    int c = a++ + b;
    printf("%.1f %d %d", x, c, a);
    return 0;
}'''
PY1 = '''def f(x):
    try:
        return 10 // x
    except ZeroDivisionError:
        return -1
    finally:
        print("fim", end=" ")

print(f(0), f(5))'''
SQL_CTE1 = '''WITH RECURSIVE n(i) AS (
    SELECT 1
    UNION ALL
    SELECT i + 2 FROM n WHERE i < 9
)
SELECT COUNT(*), SUM(i) FROM n;'''
SQL_CTE2_SETUP = '''CREATE TABLE venda(vendedor TEXT, valor INT);
INSERT INTO venda VALUES ('Ana',100),('Ana',300),('Bia',150),('Caio',50),('Caio',70),('Davi',400);'''
SQL_CTE2 = '''WITH total AS (
    SELECT vendedor, SUM(valor) AS t
    FROM venda
    GROUP BY vendedor
)
SELECT COUNT(*) FROM total
WHERE t > (SELECT AVG(t) FROM total);'''
SQL_W1_SETUP = '''CREATE TABLE nota(aluno TEXT, pontos INT);
INSERT INTO nota VALUES ('Ana',100),('Bia',90),('Caio',90),('Davi',80);'''
SQL_W1 = '''SELECT ROW_NUMBER() OVER (ORDER BY pontos DESC, aluno) AS a,
       RANK()       OVER (ORDER BY pontos DESC) AS b,
       DENSE_RANK() OVER (ORDER BY pontos DESC) AS c
FROM nota
ORDER BY pontos, aluno
LIMIT 1;'''
SQL_W2_SETUP = '''CREATE TABLE mov(agencia TEXT, dia INT, valor INT);
INSERT INTO mov VALUES ('A',1,10),('A',2,20),('B',1,5),('A',3,30),('B',2,15);'''
SQL_W2 = '''SELECT agencia, dia,
       SUM(valor) OVER (PARTITION BY agencia ORDER BY dia) AS acum
FROM mov;'''
SQL_W2_CHECK = '''SELECT group_concat(acum, ' ') FROM (SELECT agencia, dia, SUM(valor) OVER (PARTITION BY agencia ORDER BY dia) AS acum FROM mov) WHERE (agencia='A' AND dia=3) OR (agencia='B' AND dia=2) ORDER BY agencia;'''
SQL_W3_SETUP = '''CREATE TABLE fat(mes INT, valor INT);
INSERT INTO fat VALUES (1,100),(2,130),(3,120);'''
SQL_W3 = '''SELECT mes, valor - LAG(valor) OVER (ORDER BY mes) AS dif
FROM fat
ORDER BY mes;'''
SQL_W3_CHECK = '''SELECT group_concat(COALESCE(dif,'NULL'), ', ') FROM (SELECT mes, valor - LAG(valor) OVER (ORDER BY mes) AS dif FROM fat ORDER BY mes);'''

QUESTOES = [
Q(P, "05/16", "PHP",
  "Considere o código PHP a seguir.\n\n" + bloco("php", PHP1) + "\n\nA saída exibida é",
  "`8 53`", ["`53 53`", "`8 8`", "`53 8`", "um erro de tipo, pois `$a` é uma string."],
  "Em PHP, o operador `+` é **aritmético**: a string numérica \"5\" é convertida em número, resultando em 8. O operador `.` é de **concatenação**: o inteiro 3 vira texto, resultando em \"53\".",
  ver=("php", PHP1, "8 53")),
Q(P, "05/16", "PHP",
  "Considere o código PHP a seguir.\n\n" + bloco("php", PHP2) + "\n\nA saída exibida é",
  "`90`", ["`60`", "`150`", "`70`", "`40`"],
  "Em um array sem chaves explícitas, `$k` recebe os índices 0, 1, 2, 3, 4. A condição seleciona os índices pares (0, 2 e 4), cujos valores são 10, 30 e 50. A soma é 90. Quem soma os valores de índice ímpar chega a 60.",
  ver=("php", PHP2, "90"), tags=["calculo"]),
Q(P, "05/16", "PHP",
  "Considere o código PHP a seguir.\n\n" + bloco("php", PHP3) + "\n\nA saída exibida é",
  "`BNS`", ["`ANS`", "`BSS`", "`BSN`", "`ANN`"],
  "`$this->quem()` é resolvido em tempo de execução pelo tipo real do objeto (B): imprime \"B\". O operador `===` compara **valor e tipo**: inteiro 1 e string \"1\" são diferentes, logo \"N\". O operador `==` compara só o valor, com conversão de tipo: \"S\".",
  ver=("php", PHP3, "BNS"), dif=3),
Q(P, "05/16", "PHP: acesso a banco de dados (PDO)",
  "Em PHP, para executar no banco de dados uma consulta que recebe um valor digitado pelo usuário, a forma recomendada com a extensão PDO é",
  "preparar o comando com marcadores de parâmetro (`prepare`) e fornecer os valores na execução (`bindValue` ou `execute`).",
  ["concatenar o valor diretamente no texto SQL e chamar `query`.",
   "aplicar `htmlspecialchars` ao valor e concatená-lo no texto SQL.",
   "codificar o valor com `base64_encode` antes de concatená-lo no texto SQL.",
   "desabilitar as exceções do PDO para que comandos malformados sejam ignorados."],
  "Comandos preparados separam o **código SQL** dos **dados**, o que impede injeção de SQL. Concatenar o valor é a origem do problema. `htmlspecialchars` protege a saída HTML contra XSS, não o SQL. Base64 é codificação, não proteção."),
Q(P, "05/26", "Linguagem C",
  "Considere o programa em C a seguir.\n\n" + bloco("c", C1) + "\n\nA saída exibida é",
  "`18 8`", ["`12 6`", "`18 6`", "`12 8`", "`24 10`"],
  "`p = v + 1` aponta para `v[1]` (valor 4). O laço soma `p[0]`, `p[1]` e `p[2]`, isto é, 4 + 6 + 8 = 18. `p[2]` equivale a `v[3]`, que vale 8. Quem parte de `v[0]` chega a 12 e a 6.",
  ver=("c", C1, "18 8"), tags=["calculo"]),
Q(P, "05/26", "Linguagem C",
  "Considere o programa em C a seguir.\n\n" + bloco("c", C2) + "\n\nA saída exibida é",
  "`2 8 9`", ["`2 8 8`", "`2 9 9`", "`3 8 9`", "`2 9 8`"],
  "A palavra \"banestes\" tem duas letras \"e\". `strlen` conta os caracteres até o terminador: 8. `sizeof(s)` é o tamanho do vetor, que inclui o caractere nulo `'\\0'` do fim: 9.",
  ver=("c", C2, "2 8 9")),
Q(P, "05/26", "Linguagem C",
  "Considere o programa em C a seguir.\n\n" + bloco("c", C3) + "\n\nA saída exibida é",
  "`3.0 9 8`", ["`3.5 9 8`", "`3.0 10 8`", "`3.5 10 8`", "`3.0 9 7`"],
  "`a / b` é divisão **inteira** (7 / 2 = 3); só depois o resultado é convertido em `double`: 3.0. Em `a++ + b`, o pós-incremento usa o valor antigo de `a` (7), então `c` = 9, e depois `a` passa a 8.",
  ver=("c", C3, "3.0 9 8")),
Q(P, "05/22", "Python: tratamento de exceções",
  "Considere o código Python a seguir.\n\n" + bloco("python", PY1) + "\n\nA saída exibida é",
  "`fim fim -1 2`", ["`-1 2 fim fim`", "`fim -1 fim 2`", "`fim fim 0 2`", "`fim -1 2`"],
  "Os argumentos de `print` são avaliados antes da impressão. Em cada chamada de `f`, o bloco `finally` executa **mesmo havendo `return`**, imprimindo \"fim \". Em `f(0)` ocorre `ZeroDivisionError` e o retorno é -1; em `f(5)`, 10 // 5 = 2. Só então a linha final imprime \"-1 2\".",
  ver=("python", PY1, "fim fim -1 2"), dif=3),
Q(P, "05/12", "Acesso a banco de dados (JDBC)",
  "Em JDBC, o método da interface `Statement` indicado para executar comandos `INSERT`, `UPDATE` ou `DELETE`, e que retorna a **quantidade de linhas afetadas**, é",
  "`executeUpdate`", ["`executeQuery`", "`getResultSet`", "`next`", "`prepareCall`"],
  "`executeUpdate` retorna um `int` com o número de linhas afetadas. `executeQuery` é usado com `SELECT` e retorna um `ResultSet`. `next` avança o cursor do `ResultSet`. `prepareCall` pertence a `Connection` e cria um `CallableStatement` para procedimentos armazenados.", dif=1),
Q(P, "05/12", "Acesso a banco de dados (JDBC)",
  "Um desenvolvedor Java precisa executar várias vezes a mesma consulta, variando um valor informado pelo usuário, com proteção contra injeção de SQL. O recurso JDBC adequado é",
  "`PreparedStatement`, com marcadores `?` preenchidos por métodos `setXxx`.",
  ["`Statement`, com o valor concatenado ao texto do comando.",
   "`ResultSet`, com o cursor reposicionado a cada execução.",
   "`DriverManager`, com uma nova conexão aberta a cada execução.",
   "`DatabaseMetaData`, com o valor informado como propriedade da conexão."],
  "`PreparedStatement` pré-compila o comando e trata os parâmetros como **dados**, não como código SQL. `Statement` com concatenação é vulnerável. `ResultSet` representa o resultado; `DriverManager` obtém conexões; `DatabaseMetaData` descreve o banco."),
Q(P, "06/16", "BDD",
  "No desenvolvimento orientado a comportamento (BDD), os cenários são escritos",
  "em linguagem próxima à do negócio, no formato Dado–Quando–Então, e servem de especificação executável.",
  ["em código de teste unitário, antes de qualquer conversa com a área de negócio.",
   "apenas pela equipe de testes, depois que a funcionalidade é implantada.",
   "em diagramas de sequência UML, sem vínculo com testes automatizados.",
   "em linguagem SQL, para validar diretamente o estado do banco de dados."],
  "BDD descreve o comportamento esperado em cenários **Dado** (contexto), **Quando** (ação), **Então** (resultado), em linguagem compreensível por negócio e técnica (por exemplo, Gherkin). Ferramentas como Cucumber executam esses cenários como testes."),
Q(P, "06/16", "TDD",
  "No ciclo do desenvolvimento orientado a testes (TDD), a etapa de **refatoração**",
  "é feita com os testes passando e melhora a estrutura do código sem alterar seu comportamento.",
  ["ocorre antes de escrever o teste, para preparar o código que será testado.",
   "consiste em escrever um teste que falha.",
   "acrescenta funcionalidades que ainda não têm teste.",
   "dispensa a execução dos testes, pois o comportamento não muda."],
  "O ciclo é **vermelho** (escrever um teste que falha), **verde** (escrever o mínimo de código para passar) e **refatorar** (melhorar o código mantendo os testes verdes). Depois de refatorar, os testes são executados de novo para confirmar que nada quebrou.", dif=1),
Q(P, "06/18", "GitFlow, pull request e code review",
  "No fluxo de trabalho GitFlow, um ramo de **hotfix** é criado a partir do ramo",
  "principal (`main`) e, ao ser concluído, é integrado ao `main` e ao `develop`.",
  ["`develop` e, ao ser concluído, é integrado apenas ao `develop`.",
   "de `release` e, ao ser concluído, é integrado apenas ao ramo de `release`.",
   "principal (`main`) e, ao ser concluído, é integrado apenas ao `main`.",
   "de `feature` e, ao ser concluído, é integrado ao `develop` e ao ramo de `release`."],
  "O hotfix corrige um defeito urgente **em produção**: nasce do `main` (que reflete a produção) e volta para o `main`, com nova tag de versão, e para o `develop`, para que a correção não se perca na próxima versão."),
Q(P, "06/18", "GitFlow, pull request e code review",
  "No GitFlow, os ramos de **feature**",
  "partem do `develop` e são integrados de volta ao `develop`.",
  ["partem do `main` e são integrados de volta ao `main`.",
   "partem do `develop` e são integrados diretamente ao `main`.",
   "partem de um ramo de `release` e são integrados ao `main`.",
   "partem do `main` e são integrados ao `develop` e a um ramo de `hotfix`."],
  "No GitFlow, `main` guarda as versões de produção e `develop` reúne o trabalho da próxima versão. Cada funcionalidade é feita em um ramo `feature/*` criado a partir do `develop` e integrado de volta a ele. Ramos `release/*` saem do `develop` e vão para `main` e `develop`.", dif=1),
Q(P, "06/18", "GitFlow, pull request e code review",
  "Em plataformas de hospedagem de repositórios Git, um **pull request** (ou merge request) é",
  "uma solicitação para integrar as alterações de um ramo a outro, que permite revisão, discussão e verificações automáticas antes da integração.",
  ["o comando que baixa os commits do repositório remoto e os mescla ao ramo local.",
   "uma cópia completa do repositório na conta de outro usuário.",
   "um marcador imutável associado a um commit para identificar uma versão.",
   "o envio forçado de commits ao repositório remoto, que sobrescreve o histórico."],
  "O pull request propõe a integração e abre espaço para **code review** e para a execução do pipeline de CI. O comando que baixa e mescla é `git pull`; cópia do repositório em outra conta é *fork*; marcador de versão é *tag*; envio forçado é `git push --force`.", dif=1),
Q(P, "06/12", "Git: comandos",
  "No Git, a diferença entre `git fetch` e `git pull` é que",
  "`git fetch` apenas baixa os commits do repositório remoto, e `git pull` baixa e integra esses commits ao ramo atual.",
  ["`git fetch` envia os commits locais ao repositório remoto, e `git pull` os baixa.",
   "`git fetch` baixa e integra os commits ao ramo atual, e `git pull` apenas os baixa.",
   "`git fetch` atua sobre tags, e `git pull` atua sobre ramos.",
   "os dois comandos são equivalentes, e `git fetch` é apenas a forma abreviada."],
  "`git fetch` atualiza as referências remotas (como `origin/main`) sem alterar o ramo de trabalho. `git pull` equivale a `git fetch` seguido de `git merge` (ou de `git rebase`, conforme a configuração). Quem envia commits é `git push`.", dif=1),
Q(P, "06/12", "Git: comandos",
  "Um desenvolvedor precisa aplicar ao ramo atual **apenas um commit específico** que existe em outro ramo, sem trazer os demais commits desse ramo. O comando Git indicado é",
  "`git cherry-pick`", ["`git merge`", "`git stash`", "`git rebase`", "`git clone`"],
  "`git cherry-pick <commit>` reaplica no ramo atual as alterações de um commit escolhido. `git merge` e `git rebase` trazem o histórico do outro ramo. `git stash` guarda temporariamente alterações não confirmadas. `git clone` copia um repositório."),
Q(P, "06/18", "Uso responsável de assistentes de código com IA",
  "Uma equipe passa a usar um assistente de código baseado em inteligência artificial. Constitui uso **responsável** dessa ferramenta",
  "revisar e testar o código sugerido antes de integrá-lo, pois a responsabilidade pelo resultado continua sendo do desenvolvedor.",
  ["colar no assistente chaves de acesso e dados pessoais de clientes para obter respostas mais precisas.",
   "integrar as sugestões sem revisão, já que o código gerado por IA está livre de vulnerabilidades.",
   "dispensar a verificação de licenças, pois todo código gerado por IA é de domínio público.",
   "eliminar os testes automatizados dos trechos gerados pelo assistente, para ganhar produtividade."],
  "Sugestões de IA podem conter erros, vulnerabilidades e trechos com restrição de licença. O uso responsável exige **revisão humana, testes e análise de segurança**, além de não expor segredos, código confidencial ou dados pessoais à ferramenta.", dif=1),
Q(P, "06/8", "SOLID: segregação de interfaces",
  "Uma interface `Impressora` declara os métodos `imprimir`, `digitalizar` e `enviarFax`. A classe `ImpressoraSimples`, que só imprime, é obrigada a implementar os outros dois métodos lançando exceções. Esse projeto viola o princípio SOLID",
  "da segregação de interfaces.",
  ["da responsabilidade única.", "aberto/fechado.", "da substituição de Liskov.", "da inversão de dependência."],
  "O princípio da **segregação de interfaces** diz que nenhuma classe deve ser forçada a depender de métodos que não usa: interfaces grandes devem ser divididas em interfaces menores e específicas."),
Q(P, "05/23", "Java: interfaces e classes abstratas",
  "Na linguagem Java, é correto afirmar que uma classe",
  "pode implementar várias interfaces, mas estender diretamente apenas uma classe.",
  ["pode estender várias classes, mas implementar apenas uma interface.",
   "abstrata pode ser instanciada com `new`, desde que tenha construtor.",
   "que implementa uma interface não precisa implementar seus métodos abstratos, mesmo sendo concreta.",
   "abstrata não pode ter métodos com implementação."],
  "Java tem **herança simples de classes** e permite implementar **várias interfaces**. Classe abstrata não pode ser instanciada, mas pode ter métodos concretos e construtores. Uma classe concreta precisa implementar todos os métodos abstratos das interfaces que declara.", dif=1),

Q(B, "05/27", "PL/SQL (Oracle)",
  "Em um bloco PL/SQL anônimo, a **única seção obrigatória** é a",
  "executável, delimitada por `BEGIN` e `END`.",
  ["declarativa, iniciada por `DECLARE`.",
   "de tratamento de exceções, iniciada por `EXCEPTION`.",
   "de cabeçalho, iniciada por `CREATE`.",
   "de confirmação, encerrada por `COMMIT`."],
  "Um bloco PL/SQL tem a forma `DECLARE` (opcional), `BEGIN` ... (obrigatória), `EXCEPTION` (opcional), `END;`. O menor bloco válido tem apenas `BEGIN ... END;` com ao menos um comando.", dif=1),
Q(B, "05/27", "PL/SQL (Oracle)",
  "Em PL/SQL, a declaração `v_sal funcionario.salario%TYPE;` cria uma variável",
  "com o mesmo tipo de dado da coluna `salario` da tabela `funcionario`.",
  ["do tipo registro, com um campo para cada coluna da tabela `funcionario`.",
   "constante, cujo valor é o maior salário da tabela `funcionario`.",
   "do tipo cursor, que percorre os valores da coluna `salario`.",
   "global, compartilhada por todas as sessões do banco."],
  "`%TYPE` ancora o tipo da variável ao de uma coluna (ou de outra variável): se o tipo da coluna mudar, o código acompanha. Quem cria um **registro** com a estrutura da linha é `%ROWTYPE`."),
Q(B, "05/27", "PL/SQL (Oracle)",
  "Em um bloco PL/SQL, um comando `SELECT ... INTO` que encontra **três linhas** provoca a exceção predefinida",
  "`TOO_MANY_ROWS`", ["`NO_DATA_FOUND`", "`DUP_VAL_ON_INDEX`", "`ZERO_DIVIDE`", "`CURSOR_ALREADY_OPEN`"],
  "`SELECT ... INTO` deve retornar **exatamente uma linha**. Nenhuma linha gera `NO_DATA_FOUND`; mais de uma gera `TOO_MANY_ROWS`. `DUP_VAL_ON_INDEX` ocorre ao violar índice único."),
Q(B, "05/27", "PL/SQL (Oracle)",
  "Em um gatilho (*trigger*) Oracle de nível de linha, `BEFORE UPDATE`, os pseudorregistros `:OLD` e `:NEW` contêm, respectivamente,",
  "os valores da linha antes da atualização e os valores que ela terá depois da atualização.",
  ["os valores que a linha terá depois da atualização e os valores anteriores a ela.",
   "valores nulos e os valores que a linha terá depois da atualização.",
   "os valores da linha antes da atualização e valores nulos.",
   "o nome da tabela e o nome do usuário que executou o comando."],
  "Em `UPDATE`, `:OLD` guarda os valores anteriores e `:NEW` os novos; em gatilho `BEFORE`, `:NEW` pode até ser modificado. Em `INSERT`, `:OLD` é nulo; em `DELETE`, `:NEW` é nulo. Em PL/pgSQL os registros equivalentes são `OLD` e `NEW`, sem os dois-pontos."),
Q(B, "05/27", "PL/SQL (Oracle)",
  "Em PL/SQL, um **pacote** (*package*) é composto por",
  "uma especificação, com as declarações públicas, e um corpo, com as implementações e os elementos privados.",
  ["um gatilho e uma visão, criados na mesma transação.",
   "uma tabela temporária e os índices associados a ela.",
   "um bloco anônimo e uma sequência.",
   "um cursor explícito e as exceções que ele pode lançar."],
  "O pacote agrupa procedimentos, funções, tipos, cursores e variáveis relacionados. A **especificação** (`CREATE PACKAGE`) é a interface pública; o **corpo** (`CREATE PACKAGE BODY`) contém o código e o que é privado."),
Q(B, "05/7", "CTE (WITH) e consultas recursivas",
  "Considere a consulta a seguir, executada no PostgreSQL.\n\n" + bloco("sql", SQL_CTE1) + "\n\nO resultado é uma linha com os valores",
  "5 e 25.", ["4 e 16.", "5 e 15.", "9 e 45.", "6 e 36."],
  "A parte âncora gera 1. A parte recursiva soma 2 enquanto `i < 9`: 3, 5, 7 e 9 (o 9 é gerado a partir do 7; a partir do 9 a condição falha). São 5 linhas (1, 3, 5, 7, 9) e a soma é 25.",
  ver=("sql", "", SQL_CTE1, "5|25"), tags=["calculo"], dif=3),
Q(B, "05/7", "CTE (WITH) e consultas recursivas",
  "A tabela `venda(vendedor, valor)` contém as linhas (Ana, 100), (Ana, 300), (Bia, 150), (Caio, 50), (Caio, 70) e (Davi, 400). Considere a consulta:\n\n" + bloco("sql", SQL_CTE2) + "\n\nO valor retornado é",
  "2", ["1", "3", "4", "6"],
  "A CTE `total` soma as vendas por vendedor: Ana 400, Bia 150, Caio 120, Davi 400. A média desses totais é 1070 / 4 = 267,5. Estão acima da média Ana e Davi: 2 linhas. A CTE pode ser referenciada mais de uma vez na mesma consulta.",
  ver=("sql", SQL_CTE2_SETUP, SQL_CTE2, "2"), tags=["calculo"]),
Q(B, "05/7", "CTE (WITH) e consultas recursivas",
  "Sobre expressões de tabela comuns (CTEs) recursivas no PostgreSQL, é correto afirmar:",
  "são declaradas com `WITH RECURSIVE` e combinam um termo não recursivo e um termo recursivo por `UNION` ou `UNION ALL`.",
  ["são declaradas com `CONNECT BY`, cláusula padrão do SQL adotada pelo PostgreSQL.",
   "ficam armazenadas no catálogo do banco e podem ser usadas por outras sessões.",
   "o termo recursivo é avaliado uma única vez, antes do termo não recursivo.",
   "não podem ser usadas em comandos `SELECT`, apenas em `INSERT`."],
  "No PostgreSQL, a recursão exige a palavra `RECURSIVE`. Avalia-se primeiro o termo **não recursivo** (âncora); depois o termo recursivo é repetido sobre as linhas produzidas no passo anterior, até não gerar novas linhas. `CONNECT BY` é sintaxe do Oracle. A CTE existe apenas durante a consulta."),
Q(B, "05/7", "Funções de janela (window functions)",
  "A tabela `nota(aluno, pontos)` contém (Ana, 100), (Bia, 90), (Caio, 90) e (Davi, 80). Considere a consulta:\n\n" + bloco("sql", SQL_W1) + "\n\nOs valores de `a`, `b` e `c` na linha retornada são, respectivamente,",
  "4, 4 e 3.", ["4, 3 e 3.", "4, 4 e 4.", "3, 4 e 3.", "4, 3 e 4."],
  "A linha retornada é a de Davi (menor pontuação). `ROW_NUMBER` numera sem repetir: 4. `RANK` repete a posição nos empates e **pula** a seguinte (1, 2, 2, 4): 4. `DENSE_RANK` repete e **não pula** (1, 2, 2, 3): 3.",
  ver=("sql", SQL_W1_SETUP, SQL_W1, "4|4|3")),
Q(B, "05/7", "Funções de janela (window functions)",
  "A tabela `mov(agencia, dia, valor)` contém (A, 1, 10), (A, 2, 20), (B, 1, 5), (A, 3, 30) e (B, 2, 15). Considere a consulta:\n\n" + bloco("sql", SQL_W2) + "\n\nOs valores de `acum` nas linhas (A, 3) e (B, 2) são, respectivamente,",
  "60 e 20.", ["30 e 15.", "60 e 80.", "80 e 80.", "60 e 15."],
  "`PARTITION BY agencia` reinicia a soma a cada agência, e `ORDER BY dia` torna a soma **acumulada**. Agência A: 10, 30, 60. Agência B: 5, 20. A consulta devolve as 5 linhas, pois a função de janela não agrupa linhas.",
  ver=("sql", SQL_W2_SETUP, SQL_W2_CHECK, "60 20"), tags=["calculo"]),
Q(B, "05/7", "Funções de janela (window functions)",
  "A tabela `fat(mes, valor)` contém (1, 100), (2, 130) e (3, 120). Considere a consulta:\n\n" + bloco("sql", SQL_W3) + "\n\nOs valores de `dif` para os meses 1, 2 e 3 são, respectivamente,",
  "NULL, 30 e -10.", ["0, 30 e -10.", "30, -10 e NULL.", "100, 30 e -10.", "NULL, -30 e 10."],
  "`LAG(valor)` devolve o valor da linha **anterior** na ordem da janela. No primeiro mês não há linha anterior: `LAG` devolve NULL, e a subtração com NULL resulta em NULL. Mês 2: 130 − 100 = 30. Mês 3: 120 − 130 = −10.",
  ver=("sql", SQL_W3_SETUP, SQL_W3_CHECK, "NULL, 30, -10"), tags=["calculo"]),
Q(B, "05/7", "Funções de janela (window functions)",
  "Em SQL, a diferença entre usar `SUM(valor)` com `GROUP BY agencia` e `SUM(valor) OVER (PARTITION BY agencia)` é que",
  "com `GROUP BY` o resultado tem uma linha por agência, e com a função de janela todas as linhas originais são mantidas, cada uma com o total de sua agência.",
  ["com `GROUP BY` todas as linhas originais são mantidas, e com a função de janela o resultado tem uma linha por agência.",
   "a função de janela exige a cláusula `HAVING` para definir a partição.",
   "as duas formas produzem sempre o mesmo número de linhas.",
   "a função de janela é avaliada antes da cláusula `WHERE`."],
  "`GROUP BY` **colapsa** as linhas de cada grupo em uma só. A função de janela calcula sobre a partição, mas **preserva** cada linha. Funções de janela são avaliadas depois de `WHERE`, `GROUP BY` e `HAVING`; por isso não podem aparecer no `WHERE`."),
Q(B, "05/13", "Data lake, data warehouse e data mart",
  "Um repositório centralizado que armazena grandes volumes de dados **em seu formato bruto e nativo**, estruturados ou não, para uso posterior em análises exploratórias e ciência de dados, é denominado",
  "data lake.", ["data mart.", "data warehouse.", "cubo OLAP.", "banco de dados operacional (OLTP)."],
  "O **data lake** guarda dados brutos de qualquer formato, e o esquema é aplicado na leitura. O **data warehouse** guarda dados integrados, tratados e modelados para análise. O **data mart** é um recorte do DW por área ou assunto.", dif=1),
Q(B, "05/13", "Data lake, data warehouse e data mart",
  "Quanto ao momento em que a estrutura dos dados é definida, data warehouses e data lakes adotam, respectivamente, as abordagens",
  "*schema-on-write* e *schema-on-read*.",
  ["*schema-on-read* e *schema-on-write*.",
   "*schema-on-read* nos dois casos.",
   "*schema-on-write* nos dois casos.",
   "sem esquema e *schema-on-write*."],
  "No **data warehouse**, os dados são transformados e ajustados ao esquema **antes da carga** (*schema-on-write*, processo ETL). No **data lake**, os dados são carregados como estão e o esquema é aplicado **na consulta** (*schema-on-read*, processo ELT)."),
Q(B, "05/13", "Data lake, data warehouse e data mart",
  "Um **data mart** é",
  "um subconjunto de dados analíticos voltado a uma área de negócio ou a um assunto específico, como vendas ou crédito.",
  ["o banco transacional que registra as operações do dia a dia da organização.",
   "a área temporária em que os dados são limpos antes de serem carregados no data warehouse.",
   "um repositório de dados brutos sem esquema definido.",
   "o conjunto de metadados que descreve as tabelas do data warehouse."],
  "O data mart atende a um departamento ou assunto. Na abordagem de **Kimball** (*bottom-up*), o DW é formado pela união de data marts com dimensões conformadas; na de **Inmon** (*top-down*), os data marts derivam de um DW corporativo. A área temporária de limpeza é a *staging area*.", dif=1),
Q(B, "05/13", "Data lake, data warehouse e data mart",
  "Um data lake em que os dados são acumulados **sem catálogo, sem metadados e sem controle de qualidade**, a ponto de não se conseguir localizar ou confiar nas informações, é conhecido como",
  "data swamp.", ["data mart.", "data mesh.", "data lakehouse.", "data vault."],
  "**Data swamp** (pântano de dados) é o data lake degradado pela falta de governança. *Data lakehouse* combina o armazenamento do lake com recursos de gestão do warehouse. *Data mesh* é uma abordagem descentralizada por domínios. *Data vault* é uma técnica de modelagem."),
Q(B, "05/13", "Governança e qualidade de dados",
  "Em uma base de clientes, 12% dos registros estão com o campo CPF **em branco**. A dimensão de qualidade de dados afetada é a",
  "completude.", ["unicidade.", "consistência.", "atualidade.", "conformidade com o formato."],
  "**Completude**: os dados obrigatórios estão preenchidos. **Unicidade**: não há registros duplicados. **Consistência**: não há contradição entre bases ou campos. **Atualidade**: o dado está em dia. **Conformidade** (validade): o dado segue o formato e as regras definidas.", dif=1),
Q(B, "05/13", "Governança e qualidade de dados",
  "O mesmo cliente aparece com datas de nascimento **diferentes** no sistema de cadastro e no sistema de crédito. A dimensão de qualidade de dados afetada é a",
  "consistência.", ["completude.", "unicidade.", "atualidade.", "disponibilidade."],
  "Há **contradição** entre duas fontes sobre o mesmo fato: problema de consistência. Não é completude, pois o campo está preenchido, nem unicidade, pois não se trata de registro duplicado na mesma base.", dif=1),
Q(B, "05/13", "Governança e qualidade de dados",
  "Em governança de dados, a capacidade de identificar a **origem** de um dado e as **transformações** pelas quais ele passou até chegar a um relatório é denominada",
  "linhagem de dados (*data lineage*).",
  ["mascaramento de dados.", "particionamento de dados.", "replicação de dados.", "normalização de dados."],
  "A **linhagem** dá rastreabilidade: de onde o dado veio, por quais sistemas e regras passou e onde é usado. Ela apoia auditoria, análise de impacto e correção de problemas de qualidade."),
Q(B, "05/13", "Governança e qualidade de dados",
  "Em um programa de governança de dados, o papel de **curador de dados** (*data steward*) corresponde a",
  "cuidar, no dia a dia, das definições, das regras e da qualidade dos dados de um domínio, apoiando o responsável pelo dado.",
  ["administrar a instalação, o backup e o desempenho do sistema gerenciador de banco de dados.",
   "responder perante a autoridade de proteção de dados como canal de comunicação com os titulares.",
   "aprovar o orçamento anual da área de tecnologia da informação.",
   "desenvolver os painéis e relatórios usados pela diretoria."],
  "O **proprietário do dado** (*data owner*) responde pelo dado e decide sobre ele; o **curador** (*data steward*) operacionaliza as políticas: mantém glossário, regras e qualidade. Administrar o SGBD é papel do DBA; o canal com titulares e com a autoridade é o encarregado da LGPD."),
]
