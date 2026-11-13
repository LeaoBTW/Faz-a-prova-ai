# Log do agente 3 – variações dos Específicos (parte A)

Arquivo gerado: `banco/variacoes-esp-a.js` (por `tools/verificacao/agente3/gerar.py`). Todas as questões estão em `status: "rascunho"`.

## Resumo

| Eixo | Total | Variações | Inéditas | A | B | C | D | E |
|---|---|---|---|---|---|---|---|---|
| Processo de desenvolvimento de software | 55 | 46 | 9 | 11 | 11 | 11 | 11 | 11 |
| Programação | 38 | 20 | 18 | 8 | 8 | 7 | 8 | 7 |
| Gestão e Governança de TI | 66 | 57 | 9 | 14 | 13 | 13 | 13 | 13 |
| Banco de Dados | 5 | 3 | 2 | 1 | 1 | 1 | 1 | 1 |
| Desenvolvimento web e mobile | 6 | 3 | 3 | 2 | 1 | 1 | 1 | 1 |

## Verificação

Tudo em `tools/verificacao/agente3/` (reexecutável com `python3 tools/verificacao/agente3/verificar.py`):

- `q_proc.py`, `q_prog.py`, `q_gov.py`, `q_bdweb.py`: as questões, como dados; `gerar.py` monta `banco/variacoes-esp-a.js` e este log, distribuindo o gabarito por eixo (alternativa correta na letra menos usada) e conferindo que as 5 alternativas são distintas e que, nas questões de código, a correta é exatamente a saída executada e nenhum distrator coincide com ela.
- `executar.sh` + `codigo/`: todo código de "qual a saída" foi executado — Python 3.12 (`-I`), Java 21 (javac/java), C (gcc -std=c11), C# (mcs/mono, instalado via apt nesta sessão), PHP 8. `verificar.py` reexecuta cada um e compara com o gabarito (28 questões de PROG).
- `conf_codigo_extra.py`: as 5 alternativas de C# de ESP-PROG-V019 (`codigo/cs_v6/`, só A compila e imprime "Ana 500"; B–E falham com CS0272, CS1729, CS1043, CS0542); o trecho JDBC de `codigo/V45.java` foi só compilado (não há banco para executá-lo); o cherry-pick de `codigo/git_cherry.sh` roda num repositório Git temporário.
- `conf_sql.py` + `sql/`: as consultas de BD foram executadas no PostgreSQL 16 local (servidor de teste em /tmp, porta 5433; variáveis PGHOST/PGPORT/PGUSER) e, quando portáveis (janela e CTE recursiva), também no SQLite 3.
- `conf_calculos.py`: recalcula Lei de Little, análise de valor-limite, partição de equivalência, complexidade ciclomática, precedência SemVer, validade do JSON, SLA, ROI, TCO e a contagem de objetivos do COBIT.
- Questões conceituais: conferidas com a seção da apostila indicada na coluna "verificação"; quando o conteúdo vai além da apostila, isso está em `validacao.obs`.
- Nenhum código ficou sem execução (nenhuma tag `nao_executado`).


## Observações e dúvidas

Problemas encontrados em questões importadas (não alteradas, só anotadas):

- **ESP-PROG-0004**: o código Python do enunciado perdeu a indentação na importação, o que muda (ou quebra) o programa. As variações ESP-PROG-V017/V018 usam código reindentado e executado.
- **Apostila 05 §25**: o título da seção no link de referência aparece como "C e ASP/ASP.NET" — o importador remove o "#" de "C#".

Pontos a revisar na validação humana:

- **ESP-GOV-V030 (ITIL Version 5)**: tag `datado`; afirma só o que está confirmado em nov/2026 (evolução da ITIL 4, convivência na transição). Revalidar perto da prova.
- **ESP-PROC-V041 (MR-MPS-SW nível G)**: composição dos processos segundo a apostila; conferir com o guia SOFTEX vigente.
- **ESP-PROC-V042 (ISO/IEC/IEEE 12207)**: detalhe da norma além do texto da apostila.
- **ESP-GOV-V063 (ISO 31000 não certificável)** e **ESP-GOV-V065 (quadrantes da matriz poder × interesse)**: fatos consolidados que a apostila não explicita.
- **ESP-BD-V002**: explora a ordem de avaliação (WHERE antes das funções de janela), regra do padrão SQL não explícita na apostila; dificuldade 3.


## Questões criadas

| id | id_pai | fonte | tipo de variação | verificação |
|---|---|---|---|---|
| ESP-PROC-V001 | ESP-PROC-0001 | Variação de Banestes 2021 (FGV) – Q52 | conceito: troca das abordagens comparadas (Scrum×Kanban → XP×Scrum) com novo quadro | conferido com Apostila 06 §3.4 (XP) e §4 (Scrum, Guia 2020) |
| ESP-PROC-V002 | ESP-PROC-0001 | Variação de Banestes 2021 (FGV) – Q52 | conceito: de identificação por quadro para afirmações comparativas (assinale a correta) | conferido com Apostila 06 §4.7 |
| ESP-PROC-V003 | ESP-PROC-0014 | Variação de Simulado FCC 1 – Q13 | conceito: troca do artefato pedido (Incremento → Backlog do Produto) | conferido com Apostila 06 §4.4 |
| ESP-PROC-V004 | ESP-PROC-0014 | Variação de Simulado FCC 1 – Q13 | conceito: de compromissos para responsabilidades (accountabilities) | conferido com Apostila 06 §4.2 e §4.3 |
| ESP-PROC-V005 | ESP-PROC-0015 | Variação de Simulado FCC 1 – Q14 | conceito: de prática (WIP) para métricas (lead time × cycle time × throughput) | conferido com Apostila 06 §4.6 |
| ESP-PROC-V006 | ESP-PROC-0015 | Variação de Simulado FCC 1 – Q14 | conceito: de prática para leitura do CFD (cenário) | conferido com Apostila 06 §4.6 |
| ESP-PROC-V007 | ESP-PROC-0038 | Variação de Apostila 06 §4 – Q4 | cálculo: novos valores e pergunta invertida (WIP necessário para um tempo de ciclo-alvo) | recalculado em Python (conf_calculos.py) |
| ESP-PROC-V008 | ESP-PROC-0038 | Variação de Apostila 06 §4 – Q4 | cálculo: incógnita trocada (WIP em vez de tempo de ciclo) | recalculado em Python (conf_calculos.py) |
| ESP-PROC-V009 | ESP-PROC-0002 | Variação de Banestes 2021 (FGV) – Q57 | conceito: novo cenário bancário para classificar o requisito | conferido com Apostila 06 §13.3 |
| ESP-PROC-V010 | ESP-PROC-0002 | Variação de Banestes 2021 (FGV) – Q57 | conceito: de tipo (funcional) para nível (usuário × sistema) | conferido com Apostila 06 §13.2 |
| ESP-PROC-V011 | ESP-PROC-0003 | Variação de Banestes 2021 (FGV) – Q58 | conceito: novo cenário com a mesma resposta-tipo (proteção contra erros do usuário) | conferido com Apostila 06 §6.3 (subcaracterísticas de usabilidade) |
| ESP-PROC-V012 | ESP-PROC-0003 | Variação de Banestes 2021 (FGV) – Q58 | conceito: troca da característica pedida e do cenário | conferido com Apostila 06 §6.3 e §13.3 (RNF devem ser verificáveis) |
| ESP-PROC-V013 | ESP-PROC-0019 | Variação de Simulado FCC 1 – Q19 | conceito: inversão (pede-se o funcional entre não funcionais) | conferido com Apostila 06 §13.3 |
| ESP-PROC-V014 | ESP-PROC-0005 | Variação de Banestes 2024 (ACCESS) – Q64 | conceito: cenário novo e alternativas ampliadas para 5 | conferido com Apostila 06 §13.5 |
| ESP-PROC-V015 | ESP-PROC-0006 | Variação de Banestes 2024 (ACCESS) – Q65 | conceito: de definição para características (papéis, custos), com distratores novos | conferido com Apostila 06 §13.5 e ESP-PROC-0056 |
| ESP-PROC-V016 | ESP-PROC-0007 | Variação de Banestes 2024 (ACCESS) – Q66 | conceito: de objetivo da validação para o tipo de verificação | conferido com Apostila 06 §13.8 |
| ESP-PROC-V017 | ESP-PROC-0008 | Variação de Banestes 2024 (ACCESS) – Q67 | conceito: troca do tipo de requisito buscado (requisitos implícitos) e da técnica correta | conferido com Apostila 06 §13.5 e ESP-PROC-0053 |
| ESP-PROC-V018 | ESP-PROC-0009 | Variação de Banestes 2024 (ACCESS) – Q68 | conceito: inversão (da técnica para seus elementos) | conferido com Apostila 06 §13.5 |
| ESP-PROC-V019 | ESP-PROC-0010 | Variação de Banestes 2024 (ACCESS) – Q69 | conceito: da definição de matriz para tipos de rastreabilidade (cenário de auditoria) | conferido com Apostila 06 §13.9 |
| ESP-PROC-V020 | ESP-PROC-0010 | Variação de Banestes 2024 (ACCESS) – Q69 | conceito: da definição para análise de uma matriz (lacunas de cobertura) | conferido com Apostila 06 §13.9 (usos da matriz) |
| ESP-PROC-V021 | ESP-PROC-0013 | Variação de Banestes 2024 (ACCESS) – Q76 | conceito: troca da atividade pedida (elicitação → negociação) | conferido com Apostila 06 §13.4 |
| ESP-PROC-V022 | ESP-PROC-0011 | Variação de Banestes 2024 (ACCESS) – Q70 | conceito: de dificuldades para tipos de protótipo | conferido com Apostila 06 §14.1 e ESP-PROC-0059 |
| ESP-PROC-V023 | ESP-PROC-0004 | Variação de Banestes 2021 (FGV) – Q59 | conceito: troca do comportamento a modelar (fluxo de atividades → estados de um objeto) | conferido com Apostila 06 §15 e ESP-PROC-0065 |
| ESP-PROC-V024 | ESP-PROC-0004 | Variação de Banestes 2021 (FGV) – Q59 | conceito: troca do comportamento a modelar (ordem de mensagens entre objetos) | conferido com Apostila 06 §15 e ESP-PROC-0066 |
| ESP-PROC-V025 | ESP-PROC-0012 | Variação de Banestes 2024 (ACCESS) – Q72 | conceito: inversão (estruturais → comportamentais) com 5 alternativas | conferido com Apostila 06 §15.2 (14 diagramas) |
| ESP-PROC-V026 | ESP-PROC-0016 | Variação de Simulado FCC 1 – Q15 | conceito: troca do relacionamento pedido (composição → agregação) | conferido com Apostila 06 §15.4 |
| ESP-PROC-V027 | ESP-PROC-0016 | Variação de Simulado FCC 1 – Q15 | conceito: troca do relacionamento pedido (composição → realização de interface) | conferido com Apostila 06 §15.4 |
| ESP-PROC-V028 | ESP-PROC-0017 | Variação de Simulado FCC 1 – Q16 | conceito: do tipo de relacionamento para a direção das setas | conferido com Apostila 06 §15.3 |
| ESP-PROC-V029 | ESP-PROC-0017 | Variação de Simulado FCC 1 – Q16 | conceito: troca do relacionamento (include/extend → generalização entre atores) | conferido com Apostila 06 §15.3 |
| ESP-PROC-V030 | ESP-PROC-0018 | Variação de Simulado FCC 1 – Q17 | cálculo: novo intervalo e técnica de três valores (em vez de dois) | recalculado em Python (conf_calculos.py) |
| ESP-PROC-V031 | ESP-PROC-0018 | Variação de Simulado FCC 1 – Q17 | cálculo: de valor limite para partição de equivalência (número mínimo de casos) | recalculado em Python (conf_calculos.py) |
| ESP-PROC-V032 | ESP-PROC-0072 | Variação de Apostila 06 §16 – Q6 | conceito: troca do teste pedido (regressão → confirmação/reteste) | conferido com Apostila 06 §16.3 |
| ESP-PROC-V033 | ESP-PROC-0073 | Variação de Apostila 06 §16 – Q8 | conceito: troca do tipo de teste não funcional pedido | conferido com Apostila 06 §16.3 |
| ESP-PROC-V034 | ESP-PROC-0073 | Variação de Apostila 06 §16 – Q8 | conceito: de certo/errado para assinale a correta (definições corrigidas) | conferido com Apostila 06 §16.3 |
| ESP-PROC-V035 | ESP-PROC-0071 | Variação de Apostila 06 §16 – Q5 | conceito: agrupamento de afirmações sobre tipos e níveis de teste (assinale a correta) | conferido com Apostila 06 §16.2 e §16.3 |
| ESP-PROC-V036 | ESP-PROC-0045 | Variação de Apostila 06 §5 – Q5 | cálculo: novos valores de arestas e nós | recalculado em Python (conf_calculos.py) |
| ESP-PROC-V037 | ESP-PROC-0047 | Variação de Apostila 06 §6 – Q1 | conceito: troca da versão da norma (2011 → 2023) e da subcaracterística pedida | conferido com Apostila 06 §6.3 (tabela 2011 × 2023) |
| ESP-PROC-V038 | ESP-PROC-0048 | Variação de Apostila 06 §6 – Q2 | certo/errado → múltipla escolha com afirmações sobre V&V (inclui o conteúdo de ESP-PROC-0051) | conferido com Apostila 06 §6.2 |
| ESP-PROC-V039 | ESP-PROC-0049 | Variação de Apostila 06 §6 – Q3 | conceito: da versão 1.3 (níveis por estágios) para a estrutura da v2.0 | conferido com Apostila 06 §6.4 |
| ESP-PROC-V040 | ESP-PROC-0050 | Variação de Apostila 06 §6 – Q4 | conceito: novas afirmações sobre níveis e correspondência com o CMMI | conferido com Apostila 06 §6.5 |
| ESP-PROC-V041 | — | Inédita – Apostila 06 §6 (MR-MPS-SW 2021/2023) | inédita (tópico novo do edital 2027) | conferido com Apostila 06 §6.5 |
| ESP-PROC-V042 | — | Inédita – Apostila 06 §6 (ISO/IEC/IEEE 12207) | inédita (norma citada no edital 2027) | conferido com Apostila 06 §6.6 e com a estrutura da ISO/IEC/IEEE 12207:2017 (adotada pela ABNT em 2021) |
| ESP-PROC-V043 | — | Inédita – Apostila 06 §6 (ISO/IEC/IEEE 12207 e gestão da configuração) | inédita (gestão da configuração, tópico do edital 2027) | conferido com Apostila 06 §2.4 (disciplina de configuração e mudança) e §6.4 (CM no CMMI) |
| ESP-PROC-V044 | — | Inédita – Apostila 06 §6 (revisões técnicas e code review) | inédita (code review, tópico do edital 2027) | conferido com Apostila 06 §6.2 (revisões), §12.7 e §18.5 (pull request) |
| ESP-PROC-V045 | ESP-PROC-0076 | Variação de Apostila 06 §17 – Q3 | conceito: de riscos para governança e diferenças low-code × no-code | conferido com Apostila 06 §17 |
| ESP-PROC-V046 | ESP-PROC-0077 | Variação de Apostila 06 §18 – Q2 | cálculo/conceito: tipo de mudança trocado (compatível → incompatível) | regra conferida com Apostila 06 §18.4 e calculada em conf_calculos.py |
| ESP-PROC-V047 | ESP-PROC-0077 | Variação de Apostila 06 §18 – Q2 | conceito: de incremento de versão para regras de pré-lançamento, metadados e versão 0.y.z | conferido com Apostila 06 §18.4 e com a especificação semver.org; precedência testada em conf_calculos.py |
| ESP-PROC-V048 | — | Inédita – Apostila 06 §13 (BPMN, 13.10) | inédita (BPMN, tópico do edital 2027) | conferido com Apostila 06 §13.10 |
| ESP-PROC-V049 | — | Inédita – Apostila 06 §13 (BPMN, 13.10) | inédita (BPMN, tópico do edital 2027) | conferido com Apostila 06 §13.10 |
| ESP-PROC-V050 | — | Inédita – Apostila 06 §18 (18.7, dados semiestruturados) | inédita (dados semiestruturados, tópico do edital 2027) | conferido com Apostila 06 §18.7; JSON conferido com json.loads e jsonschema-like check em conf_calculos.py |
| ESP-PROC-V051 | — | Inédita – Apostila 06 §18 (18.7, dicionário de dados) | inédita (dicionário de dados, tópico do edital 2027) | conferido com Apostila 06 §18.7 |
| ESP-PROC-V052 | — | Inédita – Apostila 06 §18 (18.7, governança e qualidade de dados) | inédita (rastreabilidade de dados, tópico do edital 2027) | conferido com Apostila 06 §18.7 |
| ESP-PROC-V053 | ESP-PROC-0078 | Variação de Apostila 06 §19 – Q1 | conceito: texto técnico novo (code review) com questão de compreensão | texto original escrito pelo agente; compreensão conferida com Apostila 06 §19 |
| ESP-PROC-V054 | ESP-PROC-0079 | Variação de Apostila 06 §19 – Q2 | conceito: novos falsos cognatos (actually, enforce) em texto novo | conferido com Apostila 06 §19.2 e §19.3 |
| ESP-PROC-V055 | ESP-PROC-0080 | Variação de Apostila 06 §19 – Q3 | certo/errado → múltipla escolha com os três modais (MUST, SHOULD, MAY) | conferido com Apostila 06 §19.3 (RFC 2119) |
| ESP-PROG-V001 | — | Inédita – Apostila 05 §26 (exercício P1, valores alterados) | inédita a partir do exercício P1 (lista e índices trocados) | executado em python3 (codigo/p1.py) |
| ESP-PROG-V002 | — | Inédita – Apostila 05 §26 (exercício P3, valores alterados) | inédita a partir do exercício P3 (ordem e quantidade de objetos alteradas) | executado em python3 (codigo/p3.py) |
| ESP-PROG-V003 | — | Inédita – Apostila 05 §26 (exercício P4, valores alterados) | inédita a partir do exercício P4 (passo da recursão 3 em vez de 2) | executado em python3 (codigo/p4.py) |
| ESP-PROG-V004 | — | Inédita – Apostila 05 §26 (exercício P5, valores alterados) | inédita a partir do exercício P5 (exceção trocada por ZeroDivisionError e dois except) | executado em python3 (codigo/p5.py) |
| ESP-PROG-V005 | — | Inédita – Apostila 05 §26 (exercício P6, valores alterados) | inédita a partir do exercício P6 (string e métodos alterados) | executado em python3 (codigo/p6.py) |
| ESP-PROG-V006 | — | Inédita – Apostila 05 §26 (exercício P7, valores alterados) | inédita a partir do exercício P7 (filtro, expressão e operandos alterados) | executado em python3 (codigo/p7.py) |
| ESP-PROG-V007 | — | Inédita – Apostila 05 §26 (exercício J1, valores alterados) | inédita a partir do exercício J1 (novo método h que reatribui o parâmetro) | executado com javac/java 21 (codigo/J1.java) |
| ESP-PROG-V008 | — | Inédita – Apostila 05 §26 (exercício J2, valores alterados) | inédita a partir do exercício J2 (terceira chamada com referência do tipo Cao) | executado com javac/java 21 (codigo/J2.java) |
| ESP-PROG-V009 | — | Inédita – Apostila 05 §26 (exercício J3, valores alterados) | inédita a partir do exercício J3 (limites do laço alterados) | executado com javac/java 21 (codigo/J3.java) |
| ESP-PROG-V010 | — | Inédita – Apostila 05 §26 (exercício J4, valores alterados) | inédita a partir do exercício J4 (dados e chaves alterados) | executado com javac/java 21 (codigo/J4.java) |
| ESP-PROG-V011 | — | Inédita – Apostila 05 §26 (exercício J5, valores alterados) | inédita a partir do exercício J5 (pós-decremento, ordem da concatenação e char alterados) | executado com javac/java 21 (codigo/J5.java) |
| ESP-PROG-V012 | — | Inédita – Apostila 05 §26 (exercício C2 adaptado de C++ para C) | inédita adaptada do exercício C2 (C++ → C, vetor e deslocamentos alterados) | compilado com gcc -std=c11 e executado (codigo/c2.c) |
| ESP-PROG-V013 | — | Inédita – Apostila 05 §26 (exercício C3 adaptado de C++ para C) | inédita adaptada do exercício C3 (referência C++ trocada por vetor em C) | compilado com gcc -std=c11 e executado (codigo/c3.c) |
| ESP-PROG-V014 | — | Inédita – Apostila 05 §26 (exercício CS1, valores alterados) | inédita a partir do exercício CS1 (terceira classe C na hierarquia) | compilado com mcs e executado em mono (codigo/CS1.cs) |
| ESP-PROG-V015 | — | Inédita – Apostila 05 §26 (exercício CS2, valores alterados) | inédita a partir do exercício CS2 (terceiro parâmetro por valor) | compilado com mcs e executado em mono (codigo/CS2.cs) |
| ESP-PROG-V016 | — | Inédita – Apostila 05 §26 (exercício CS3, valores alterados) | inédita a partir do exercício CS3 (valores alterados e operador -=) | compilado com mcs e executado em mono (codigo/CS3.cs) |
| ESP-PROG-V017 | ESP-PROG-0004 | Variação de Banestes 2021 (FGV) – Q53 | código: lista inicial, expressão do append e limite trocados (Python 3) | executado em python3 (codigo/v4a.py) |
| ESP-PROG-V018 | ESP-PROG-0004 | Variação de Banestes 2021 (FGV) – Q53 | código: condição do while passa a usar sum() e o elemento acrescentado é a soma | executado em python3 (codigo/v4b.py) |
| ESP-PROG-V019 | ESP-PROG-0006 | Variação de Banestes 2021 (FGV) – Q55 | conceito/código: troca da propriedade completa por propriedades automáticas e construtor | as 5 classes compiladas com mcs; só a correta compila e imprime 'Ana 500' (codigo/cs_v6/) |
| ESP-PROG-V020 | ESP-PROG-0013 | Variação de Simulado FCC 1 – Q1 | código: duas exceções diferentes e múltiplos catch; valores trocados | executado com javac/java 21 (codigo/V13a.java) |
| ESP-PROG-V021 | ESP-PROG-0013 | Variação de Simulado FCC 1 – Q1 | código: exceção verificada própria (throws) e finally que altera estado após return | executado com javac/java 21 (codigo/V13b.java) |
| ESP-PROG-V022 | ESP-PROG-0014 | Variação de Simulado FCC 1 – Q6 | código: função que devolve a própria lista padrão; teste de identidade com `is` | executado em python3 (codigo/v14a.py) |
| ESP-PROG-V023 | ESP-PROG-0014 | Variação de Simulado FCC 1 – Q6 | código: idioma `hist=None` corrige o padrão mutável; dicionário com get e padrão | executado em python3 (codigo/v14b.py) |
| ESP-PROG-V024 | ESP-PROG-0049 | Variação de Apostila 05 §23 – Q3 | código: combina sobrecarga (int/double) e sobrescrita; argumento char promovido a int | executado com javac/java 21 (codigo/V49.java) |
| ESP-PROG-V025 | ESP-PROG-0052 | Variação de Apostila 05 §23 – Q6 | código: constante de compilação, new String e intern(); divisão e resto negativos | executado com javac/java 21 (codigo/V52.java) |
| ESP-PROG-V026 | ESP-PROG-0066 | Variação de Apostila 06 §7 – Q3 | cálculo/código: operandos trocados e inclusão do resto negativo e da divisão real | executado em python3 (codigo/v66.py) |
| ESP-PROG-V027 | ESP-PROG-0068 | Variação de Apostila 06 §7 – Q5 | cálculo/código: nova relação de recorrência h(n) = h(n−1) + 2·h(n−3) | executado em python3 (codigo/v68.py) |
| ESP-PROG-V028 | — | Inédita – Apostila 05 §16 (PHP no servidor) | inédita (PHP é citado no edital e em 05 §16) | executado com php 8 (codigo/php1.php) |
| ESP-PROG-V029 | — | Inédita – Apostila 05 §16 (PHP no servidor) | inédita (PHP: & na assinatura, cópia de valores, intdiv e /) | executado com php 8 (codigo/php2.php) |
| ESP-PROG-V030 | ESP-PROG-0015 | Variação de Simulado FCC 1 – Q7 | conceito: de identificação para regras (assinale a correta) | conferido com Apostila 06 §8 e 05 §23 e com o compilador javac (regras de override) |
| ESP-PROG-V031 | ESP-PROG-0017 | Variação de Simulado FCC 1 – Q9 | conceito: troca do princípio pedido (DIP → SRP) e cenário bancário | conferido com Apostila 06 §8.6 |
| ESP-PROG-V032 | ESP-PROG-0017 | Variação de Simulado FCC 1 – Q9 | conceito: dois princípios em cenário duplo (OCP respeitado; LSP violado) | conferido com Apostila 06 §8.6 e com ESP-PROG-0073 (C/E sobre LSP) |
| ESP-PROG-V033 | ESP-PROG-0018 | Variação de Simulado FCC 1 – Q12 | conceito: troca do cenário (revert → aplicar um único commit em outro branch) | conferido com Apostila 06 §12.7 e testado em repositório Git temporário (codigo/git_cherry.sh) |
| ESP-PROG-V034 | ESP-PROG-0019 | Variação de Simulado FCC 1 – Q18 | conceito: TDD → BDD (Gherkin), com cenário escrito | conferido com Apostila 06 §16.9 |
| ESP-PROG-V035 | ESP-PROG-0083 | Variação de Apostila 06 §18 – Q4 | conceito: de hotfix para o fluxo completo (release, feature, PR) | conferido com Apostila 06 §12.7 e §18.5 |
| ESP-PROG-V036 | ESP-PROG-0084 | Variação de Apostila 06 §18 – Q5 | conceito: troca do cenário (alucinação de API e licença) | conferido com Apostila 06 §18.6 |
| ESP-PROG-V037 | ESP-PROG-0062 | Variação de Apostila 05 §25 – Q5 | conceito: de namespaces para a plataforma (.NET, CLR, IL/JIT, multiplataforma) | conferido com Apostila 05 §25 e 04 §2 (CIL/CLR) |
| ESP-PROG-V038 | ESP-PROG-0045 | Variação de Apostila 05 §22 – Q5 | conceito/código: de Python sqlite3 para Java JDBC (consulta parametrizada) | conferido com Apostila 05 §12.2 (JDBC) e compilado com javac (codigo/V45.java) |
| ESP-GOV-V001 | ESP-GOV-0001 | Variação de Banestes 2024 (ACCESS) – Q77 | conceito: de definição genérica para abrangência (internos e externos) | conferido com Apostila 03 §13.6 |
| ESP-GOV-V002 | ESP-GOV-0001 | Variação de Banestes 2024 (ACCESS) – Q77 | conceito: de definição de stakeholder para o uso de suas necessidades no COBIT (cascata) | conferido com Apostila 03 §13.6 e §14.5 |
| ESP-GOV-V003 | ESP-GOV-0002 | Variação de Banestes 2024 (ACCESS) – Q78 | conceito: de exemplo genérico de TIC no negócio para perspectiva do modelo SAM | conferido com Apostila 03 §13.8 |
| ESP-GOV-V004 | ESP-GOV-0002 | Variação de Banestes 2024 (ACCESS) – Q78 | conceito: de exemplo de TIC no negócio para classificação de indicador no BSC | conferido com Apostila 03 §13.9 |
| ESP-GOV-V005 | ESP-GOV-0003 | Variação de Banestes 2024 (ACCESS) – Q80 | conceito: novas alternativas (5) e distratores que invertem benefícios | conferido com Apostila 03 §13.10 |
| ESP-GOV-V006 | ESP-GOV-0003 | Variação de Banestes 2024 (ACCESS) – Q80 | conceito: de benefícios para o objetivo-síntese do COBIT | conferido com Apostila 03 §13.5 e §14.4 (EDM02, EDM03, EDM04) |
| ESP-GOV-V007 | ESP-GOV-0007 | Variação de Apostila 03 §13 – Q1 | conceito: definição completa (responsável + componentes + finalidade) | conferido com Apostila 03 §13.3 |
| ESP-GOV-V008 | ESP-GOV-0009 | Variação de Apostila 03 §13 – Q3 | certo/errado → múltipla escolha com afirmações sobre BSC e IT BSC | conferido com Apostila 03 §13.9 |
| ESP-GOV-V009 | ESP-GOV-0010 | Variação de Apostila 03 §13 – Q4 | conceito: troca da perspectiva pedida (potencial competitivo → execução da estratégia) | conferido com Apostila 03 §13.8 |
| ESP-GOV-V010 | ESP-GOV-0011 | Variação de Apostila 03 §13 – Q5 | certo/errado → múltipla escolha com a distinção EDM × PBRM | conferido com Apostila 03 §13.4 |
| ESP-GOV-V011 | ESP-GOV-0012 | Variação de Apostila 03 §13 – Q6 | conceito: troca do arquétipo pedido (feudal → federalista) | conferido com Apostila 03 §13.7 |
| ESP-GOV-V012 | ESP-GOV-0004 | Variação de Simulado FCC 1 – Q36 | conceito: de domínio de governança para objetivos de gestão em cenário | conferido com Apostila 03 §14.4 e §14.9 |
| ESP-GOV-V013 | ESP-GOV-0004 | Variação de Simulado FCC 1 – Q36 | conceito: de identificação do domínio de governança para afirmações sobre os cinco domínios | conferido com Apostila 03 §14.4 |
| ESP-GOV-V014 | ESP-GOV-0014 | Variação de Apostila 03 §14 – Q2 | conceito/cálculo: de total de objetivos para a distribuição por domínio | conferido com Apostila 03 §14.4 (5 + 14 + 11 + 6 + 4 = 40) |
| ESP-GOV-V015 | ESP-GOV-0015 | Variação de Apostila 03 §14 – Q3 | conceito: troca do objetivo pedido (BAI04 → APO09/APO10) | conferido com Apostila 03 §14.4 |
| ESP-GOV-V016 | ESP-GOV-0015 | Variação de Apostila 03 §14 – Q3 | conceito: troca do cenário e dos objetivos pedidos (BAI06/BAI07) | conferido com Apostila 03 §14.9 |
| ESP-GOV-V017 | ESP-GOV-0016 | Variação de Apostila 03 §14 – Q4 | conceito: de princípios do sistema para princípios do framework | conferido com Apostila 03 §14.2 |
| ESP-GOV-V018 | ESP-GOV-0017 | Variação de Apostila 03 §14 – Q5 | conceito: de "exceto" para classificação de exemplos em componentes | conferido com Apostila 03 §14.3 |
| ESP-GOV-V019 | ESP-GOV-0017 | Variação de Apostila 03 §14 – Q5 | conceito: de componentes para fatores de design (cenário) | conferido com Apostila 03 §14.6 |
| ESP-GOV-V020 | ESP-GOV-0018 | Variação de Apostila 03 §14 – Q6 | certo/errado → múltipla escolha (a C/E-pai afirmava a base ISO/IEC 15504) | conferido com Apostila 03 §14.7 |
| ESP-GOV-V021 | ESP-GOV-0005 | Variação de Simulado FCC 1 – Q37 | conceito: de "exceto" para identificação da atividade pelo propósito | conferido com Apostila 03 §15.7 |
| ESP-GOV-V022 | ESP-GOV-0005 | Variação de Simulado FCC 1 – Q37 | conceito: de atividades da cadeia de valor para componentes do SVS | conferido com Apostila 03 §15.4 |
| ESP-GOV-V023 | ESP-GOV-0006 | Variação de Simulado FCC 1 – Q38 | conceito: troca do registro pedido (problema → incidente e solução de contorno) | conferido com Apostila 03 §15.10 (exemplo resolvido) |
| ESP-GOV-V024 | ESP-GOV-0006 | Variação de Simulado FCC 1 – Q38 | conceito: troca do conceito pedido (problema → erro conhecido e workaround) | conferido com Apostila 03 §15.10 |
| ESP-GOV-V025 | ESP-GOV-0019 | Variação de Apostila 03 §15 – Q1 | conceito: de "exceto" para aplicação de um princípio em cenário | conferido com Apostila 03 §15.5 |
| ESP-GOV-V026 | ESP-GOV-0019 | Variação de Apostila 03 §15 – Q1 | conceito: inversão (exceto → lista correta) | conferido com Apostila 03 §15.5 |
| ESP-GOV-V027 | ESP-GOV-0022 | Variação de Apostila 03 §15 – Q4 | conceito: troca do enfoque (definição de garantia → cenário com utilidade sem garantia) | conferido com Apostila 03 §15.2 (exemplo do app) |
| ESP-GOV-V028 | ESP-GOV-0023 | Variação de Apostila 03 §15 – Q5 | certo/errado → múltipla escolha com classificação de cenário nas quatro dimensões | conferido com Apostila 03 §15.3 |
| ESP-GOV-V029 | ESP-GOV-0024 | Variação de Apostila 03 §15 – Q6 | conceito: troca do tipo de mudança pedido (padrão → emergencial) | conferido com Apostila 03 §15.10 |
| ESP-GOV-V030 | — | Inédita – Apostila 03 §15 (15.1, ITIL Version 5) | inédita (tópico novo do edital 2027) | conferido com Apostila 03 §15.1 (situação em nov/2026) |
| ESP-GOV-V031 | — | Inédita – Apostila 03 §15 (15.8, melhoria contínua) | inédita (melhoria contínua, tópico do edital 2027) | conferido com Apostila 03 §15.8 |
| ESP-GOV-V032 | ESP-GOV-0025 | Variação de Apostila 03 §16 – Q1 | conceito: da lista de tarefas para a definição de uma delas (dirigir) | conferido com Apostila 03 §16.1 |
| ESP-GOV-V033 | ESP-GOV-0026 | Variação de Apostila 03 §16 – Q2 | conceito: de "exceto" para identificação de princípio em cenário | conferido com Apostila 03 §16.1 |
| ESP-GOV-V034 | ESP-GOV-0027 | Variação de Apostila 03 §16 – Q3 | certo/errado → múltipla escolha comparando 20000, ITIL e COBIT | conferido com Apostila 03 §16.2 |
| ESP-GOV-V035 | ESP-GOV-0028 | Variação de Apostila 03 §16 – Q4 | conceito: de grupos de processos da 6ª edição para comparação entre 6ª, 7ª e 8ª edições | conferido com Apostila 03 §16.3 e §18.1 |
| ESP-GOV-V036 | ESP-GOV-0030 | Variação de Apostila 03 §16 – Q6 | conceito: de definição de projeto para programa × portfólio × operação | conferido com Apostila 03 §16.3 |
| ESP-GOV-V037 | ESP-GOV-0031 | Variação de Apostila 03 §18 – Q1 | conceito: novas afirmações sobre o que mudou na 8ª edição | conferido com Apostila 03 §18.1 e §18.5 |
| ESP-GOV-V038 | ESP-GOV-0031 | Variação de Apostila 03 §18 – Q1 | cálculo/conceito: pergunta direta pelos quantitativos da 8ª edição | conferido com Apostila 03 §18.1 |
| ESP-GOV-V039 | ESP-GOV-0032 | Variação de Apostila 03 §18 – Q2 | conceito: inversão (é princípio → NÃO é princípio) | conferido com Apostila 03 §18.2 |
| ESP-GOV-V040 | ESP-GOV-0032 | Variação de Apostila 03 §18 – Q2 | conceito: de princípio para domínio de desempenho | conferido com Apostila 03 §18.3 |
| ESP-GOV-V041 | ESP-GOV-0033 | Variação de Apostila 03 §18 – Q3 | certo/errado → múltipla escolha com listas de domínios | conferido com Apostila 03 §18.3 e §16.3 |
| ESP-GOV-V042 | ESP-GOV-0034 | Variação de Apostila 03 §18 – Q4 | conceito: de lista para características das áreas de foco | conferido com Apostila 03 §18.4 |
| ESP-GOV-V043 | ESP-GOV-0035 | Variação de Apostila 03 §19 – Q1 | conceito: inversão (modalidade inexistente → modalidade adequada ao cenário) | conferido com Apostila 03 §19.2 |
| ESP-GOV-V044 | ESP-GOV-0035 | Variação de Apostila 03 §19 – Q1 | conceito: troca do objeto pedido (modalidades → critérios de julgamento) | conferido com Apostila 03 §19.2 (art. 33) |
| ESP-GOV-V045 | ESP-GOV-0036 | Variação de Apostila 03 §19 – Q2 | conceito: troca do artefato pedido (ETP → DFD) | conferido com Apostila 03 §19.3 |
| ESP-GOV-V046 | ESP-GOV-0036 | Variação de Apostila 03 §19 – Q2 | conceito: de artefato para fases e papéis da contratação | conferido com Apostila 03 §19.3 |
| ESP-GOV-V047 | ESP-GOV-0037 | Variação de Apostila 03 §19 – Q3 | certo/errado → múltipla escolha sobre quem segue cada lei | conferido com Apostila 03 §19.1 |
| ESP-GOV-V048 | ESP-GOV-0038 | Variação de Apostila 03 §19 – Q4 | conceito: de identificação do IMR para sua aplicação (glosa por descumprimento) | conferido com Apostila 03 §19.3 |
| ESP-GOV-V049 | ESP-GOV-0038 | Variação de Apostila 03 §19 – Q4 | conceito: de identificação do IMR para escolha de indicador adequado | conferido com Apostila 03 §19.3 |
| ESP-GOV-V050 | ESP-GOV-0039 | Variação de Apostila 03 §19 – Q5 | conceito: de sequência completa para a regra de inversão de fases | conferido com Apostila 03 §19.2 (art. 17) |
| ESP-GOV-V051 | ESP-GOV-0040 | Variação de Apostila 03 §20 – Q1 | conceito: troca da fase pedida (A → F) | conferido com Apostila 03 §20.1 |
| ESP-GOV-V052 | ESP-GOV-0040 | Variação de Apostila 03 §20 – Q1 | conceito: de fase do ADM para domínios BDAT e gestão de requisitos | conferido com Apostila 03 §20.1 |
| ESP-GOV-V053 | ESP-GOV-0041 | Variação de Apostila 03 §20 – Q2 | conceito: troca do acordo pedido (OLA → UC) | conferido com Apostila 03 §20.3 |
| ESP-GOV-V054 | ESP-GOV-0041 | Variação de Apostila 03 §20 – Q2 | cálculo: conversão de meta percentual de SLA em tempo de indisponibilidade | recalculado em Python (conf_calculos.py) |
| ESP-GOV-V055 | ESP-GOV-0042 | Variação de Apostila 03 §20 – Q3 | certo/errado → múltipla escolha relacionando PEI, PETIC e PDTIC | conferido com Apostila 03 §20.2 |
| ESP-GOV-V056 | ESP-GOV-0043 | Variação de Apostila 03 §20 – Q4 | conceito: de efeito da migração para classificação de itens em CAPEX/OPEX | conferido com Apostila 03 §20.4 |
| ESP-GOV-V057 | ESP-GOV-0044 | Variação de Apostila 03 §20 – Q5 | cálculo: novos valores de custo e ganho | recalculado em Python (conf_calculos.py) |
| ESP-GOV-V058 | ESP-GOV-0044 | Variação de Apostila 03 §20 – Q5 | cálculo: ganho distribuído em vários períodos (soma antes de aplicar a fórmula) | recalculado em Python (conf_calculos.py) |
| ESP-GOV-V059 | ESP-GOV-0044 | Variação de Apostila 03 §20 – Q5 | cálculo: comparação de ROI entre dois projetos | recalculado em Python (conf_calculos.py) |
| ESP-GOV-V060 | — | Inédita – Apostila 03 §20 (20.4, TCO) | inédita (TCO, tópico do edital 2027) | recalculado em Python (conf_calculos.py) |
| ESP-GOV-V061 | — | Inédita – Apostila 03 §20 (20.4, FinOps) | inédita (FinOps, tópico do edital 2027) | conferido com Apostila 03 §20.4 e Apostila 07 §2.6 |
| ESP-GOV-V062 | — | Inédita – Apostila 04 §21 (21.1, ISO 31000:2018) | inédita (ISO 31000, tópico do edital 2027) | conferido com Apostila 04 §21.1 |
| ESP-GOV-V063 | — | Inédita – Apostila 04 §21 (21.1, ISO 31000:2018) | inédita (ISO 31000, tópico do edital 2027) | conferido com Apostila 04 §21.1 |
| ESP-GOV-V064 | — | Inédita – Apostila 03 §20 (20.5, gestão de portfólio) | inédita (portfólio, tópico do edital 2027) | conferido com Apostila 03 §20.5, §16.3 e §14.9 (APO05) |
| ESP-GOV-V065 | — | Inédita – Apostila 03 §20 (20.5, stakeholders e comunicação) | inédita (stakeholders e comunicação, tópico do edital 2027) | conferido com Apostila 03 §20.5 (identificar, analisar poder × interesse, engajar e comunicar) |
| ESP-GOV-V066 | — | Inédita – Apostila 03 §20 (20.5, redação técnica e normativa) | inédita (redação técnica e normativa, tópico do edital 2027) | conferido com Apostila 03 §20.5 e Apostila 06 §13.7 |
| ESP-BD-V001 | ESP-BD-0103 | Variação de Apostila 05 §27 – Q1 | conceito → código: de PERFORM para execução de função PL/pgSQL com SELECT INTO e agregação sem linhas | executado no PostgreSQL 16 (sql/bd1_funcao.sql, conf_sql.py): 120\|-1 |
| ESP-BD-V002 | — | Inédita – Apostila 05 §7 (7.10, funções de janela) | inédita (funções de janela, tópico do edital 2027) | executado no PostgreSQL 16 e no SQLite (sql/bd2_janela.sql, conf_sql.py) |
| ESP-BD-V003 | — | Inédita – Apostila 05 §7 (7.10, CTE recursiva) | inédita (CTE recursiva, tópico do edital 2027) | executado no PostgreSQL 16 e no SQLite (sql/bd3_cte.sql, conf_sql.py) |
| ESP-BD-V004 | ESP-BD-0088 | Variação de Apostila 05 §13 – Q2 | certo/errado → múltipla escolha (afirmações sobre estrela, floco de neve, grão e tipos de medida) | conferido com Apostila 05 §13.3 e §13.4 |
| ESP-BD-V005 | ESP-BD-0107 | Variação de Apostila 05 §27 – Q5 | conceito: de escolha do H2 para testes para afirmações sobre PostgreSQL 15, Oracle 19c e H2 | conferido com Apostila 05 §27.2 a §27.4 |
| ESP-WEB-V001 | ESP-WEB-0055 | Variação de Apostila 06 §10 – Q3 | conceito: de classificar métodos (idempotente × seguro) para aplicar idempotência em POST de pagamento | conferido com Apostila 06 §10.9 (exemplo com Idempotency-Key) e §11 (retry exige idempotência) |
| ESP-WEB-V002 | — | Inédita – Apostila 06 §10 (10.8, OpenAPI) | inédita (OpenAPI, tópico do edital 2027) | conferido com Apostila 06 §10.1 e §10.8 |
| ESP-WEB-V003 | — | Inédita – Apostila 06 §10 (10.8, paginação, filtros e ordenação) | inédita (paginação de APIs, tópico do edital 2027) | conferido com Apostila 06 §10.8 (boas práticas de URIs) |
| ESP-WEB-V004 | — | Inédita – Apostila 06 §18 (18.4, versionamento de APIs) | inédita (versionamento de APIs, tópico do edital 2027) | conferido com Apostila 06 §18.4 e §10.8 |
| ESP-WEB-V005 | ESP-WEB-0084 | Variação de Apostila 07 §7 – Q1 | conceito: dos princípios POUR para as novidades e números da WCAG 2.2 | conferido com Apostila 07 §7.1 e §7.2 |
| ESP-WEB-V006 | ESP-WEB-0086 | Variação de Apostila 07 §7 – Q3 | certo/errado → múltipla escolha (afirmações sobre a NBR 17225) | conferido com Apostila 07 §7.3 |
