# Relatório de validação (agente 5)

Validação do banco de questões do concurso **Banestes 2027 – Analista de TI (Desenvolvimento de Sistemas)**, feita em 13/11/2026 na branch `validacao`. O validador `python3 tools/validar_banco.py` passa sem erros, e o teste do app (`tools/verificacao/teste_app_agente5.js`) tem 0 falhas.

**Como as correções foram aplicadas:**

- **Variações** (`banco/variacoes-*.js`): corrigidas na fonte (`tools/verificacao/agente2|3|4/*.py`) e regeneradas. Depois da regeneração, os verificadores de cada agente continuam passando: `agente2/gerar.py` (asserts das contas de RLE), `agente3/verificar.py` e `agente4/verificar_tudo.sh`.
- **Status das variações:** a validação está em `tools/verificacao/validacao-agente5.json`. Os três geradores a aplicam com `tools/verificacao/validacao_agente5.py`. A questão recebe `validacao = {por: "agente-5", em: "2026-11-13", obs}`.
- **Importadas:** não foram reimportadas. As correções estão em `banco/correcoes.js` (`CORRECOES.push({id, campos, motivo})`), aplicado pelo app (`app/dados.js`, `D.aplicarCorrecoes`) e pelo validador. O validador recusa:
  - correção para id inexistente;
  - campo não corrigível;
  - alvo em `variacoes-*.js`;
  - status `rejeitada`/`duvida` sem `validacao.obs`.

## 1. Resumo

| | Quantidade |
|---|---|
| Questões no banco | 1.603 (691 variações + 912 importadas) |
| **Conferidas** | **1.057**: 691 variações (100%) + 366 importadas |
| Validadas | 1.597 |
| Corrigidas | 162 (3 variações na fonte + 159 importadas via `correcoes.js`) |
| **Rejeitadas** | **5** (duplicatas importadas) |
| **Dúvidas** | **0** (RLE-0011 resolvida na revisão final: a figura já estava anexada) |

**O que foi conferido em cada grupo:**

- **Variações:** todas (691) foram resolvidas sem olhar o gabarito.
  - 100% das de RLE financeira e das de "qual a saída" foram refeitas em Python ou executadas (Java, C, C++, C#, PHP, Node, PostgreSQL e SQLite).
- **Importadas de prova real (140 questões, 100%):** todas estavam com comentário vazio.
- **Demais importadas:**
  - as 12 de apostila com comentário vazio;
  - 100% das que têm código ("qual a saída", 19 questões, executadas);
  - 100% das de RLE financeira (27, recalculadas);
  - uma amostra estratificada de 21% das restantes (159 questões, semente fixa), com pelo menos 2 por eixo.
  - Cobertura por tipo de importada:

    | Tipo | Conferidas | % |
    |---|---|---|
    | Prova real | 140 de 140 | 100% |
    | Simulado FCC | 17 de 40 | 42% |
    | Apostila, múltipla escolha | 171 de 613 | 28% |
    | Apostila, Certo/Errado | 38 de 119 | 32% |

- **Correções:** "Corrigidas" conta as questões com qualquer mudança de conteúdo: comentário novo, enunciado, link, nota de versão ou correção de gabarito/enunciado das variações. Nenhum gabarito oficial foi alterado.
- **Resultado da amostra:** nenhum erro de gabarito nas importadas da amostra. Os problemas encontrados foram de forma (comentários vazios, indentação perdida, link quebrado) e duplicatas.

### Por matéria e eixo

| Matéria / eixo | Banco | Variações | Importadas | Conferidas (var. + imp.) | Corrigidas | Validadas | Rejeitadas | Dúvidas |
|---|---|---|---|---|---|---|---|---|
| Língua Portuguesa | 207 | 94 | 113 | 142 (94 + 48) | 31 | 207 | 0 | 0 |
| Raciocínio Lógico e Estatística | 257 | 106 | 151 | 179 (106 + 73) | 25 | 255 | 1 | 1 |
| Atualidades do Mercado Financeiro e Digital | 126 | 51 | 75 | 88 (51 + 37) | 26 | 126 | 0 | 0 |
| Ética, Compliance e ESG | 115 | 80 | 35 | 93 (80 + 13) | 6 | 115 | 0 | 0 |
| Arquitetura de sistemas | 55 | 45 | 10 | 48 (45 + 3) | 1 | 55 | 0 | 0 |
| Banco de Dados | 112 | 5 | 107 | 37 (5 + 32) | 11 | 112 | 0 | 0 |
| Computação em nuvem | 18 | 7 | 11 | 10 (7 + 3) | 0 | 17 | 1 | 0 |
| Desenvolvimento web e mobile | 94 | 6 | 88 | 41 (6 + 35) | 11 | 92 | 2 | 0 |
| DevOps e DevSecOps | 51 | 44 | 7 | 46 (44 + 2) | 0 | 51 | 0 | 0 |
| Gestão e Governança de TI | 110 | 66 | 44 | 85 (66 + 19) | 12 | 110 | 0 | 0 |
| Processo de desenvolvimento de software | 135 | 55 | 80 | 83 (55 + 28) | 13 | 135 | 0 | 0 |
| Programação | 122 | 38 | 84 | 81 (38 + 43) | 18 | 121 | 1 | 0 |
| Redes de computadores | 50 | 27 | 23 | 34 (27 + 7) | 2 | 50 | 0 | 0 |
| Segurança da Informação | 66 | 30 | 36 | 41 (30 + 11) | 4 | 66 | 0 | 0 |
| Serviços e gerenciamento de redes | 36 | 22 | 14 | 26 (22 + 4) | 1 | 36 | 0 | 0 |
| Sistemas Operacionais | 49 | 15 | 34 | 23 (15 + 8) | 1 | 49 | 0 | 0 |
| **Total** | 1603 | 691 | 912 | 1057 (691 + 366) | 162 | 1597 | 5 | 1 |

*Conferidas* = variações (todas) + importadas efetivamente conferidas (comentário escrito, código executado, conta refeita, amostra ou par de duplicata analisado). *Corrigidas* = questão validada com alguma mudança (inclui os 152 comentários novos).

## 2. Correções (id → o que mudou)

### 2.1 Variações (corrigidas na fonte e regeneradas)

| id | Arquivo-fonte | O que mudou |
|---|---|---|
| RLE-V040 | `agente2/rle.py` | "anos de serviço (30, 40 e 50 meses)" → "tempo de serviço (30, 40 e 50 meses)". Conta refeita (15:10:10 → R$ 3.000,00). |
| LP-V084 | `agente2/lp.py` | O enunciado ("o plural está correto em…") tornava correta também a alternativa "cidadãos – capitães – mães". Passou a ser "O plural dos substantivos *cidadão*, *capitão* e *mão* está correto, nessa ordem, em:", e a explicação foi ajustada. |
| ESP-ARQ-V033 | `agente4/dados_arq.py` | Circuit breaker: a chamada em t = 18 s era ambígua; numa leitura nenhuma alternativa estava certa. Acrescentado "(isto é, a partir do instante em que completa 10 s aberto)". Simulação refeita: 8 encaminhadas e 4 falhas. |

### 2.2 Importadas (via `banco/correcoes.js`, 165 entradas)

| Correção | ids | O que mudou |
|---|---|---|
| Link quebrado da apostila 05 §25 ("C# e ASP") | ESP-PROG-0006, 0011, 0058, 0059, 0060, 0061, 0062, 0063 | `ref_apostila.link` = `[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET\|05 §25. C# e ASP/ASP.NET]]`. No Obsidian, o "#" no alvo de cabeçalho corta o link; o alvo segue a regra do Obsidian (sem "#"), e o alias mostra o título certo. `tools/importar.py` (`link_wiki`) passou a gerar esse alias, então uma reimportação já sai certa. O agente 3 lê o banco com as correções, e as variações filhas herdaram o link corrigido. |
| Comentário vazio | 152 questões (lista abaixo) | Comentário curto escrito pelo agente 5, no padrão "**Gabarito: X.** justificativa + por que as outras erram". Nas anuladas, explica a anulação. |
| Indentação perdida na importação | ESP-PROG-0004 (Python 2.7), ESP-PROG-0005 (JS), ESP-PROG-0008 (C++) | Código reindentado sem mudar o conteúdo. No Python, a indentação é sintática e sem ela o código nem compila. Executados: `[20, 1, 4, …, 81]`, `1/2/3/4/5/`, `0 2 4 6 8`. |
| OWASP 2025 × 2021 | ESP-SEG-0020, ESP-SEG-0025 | Questões mantidas, com nota no comentário: o edital cita o OWASP Top 10:2021, e a nota lista a ordem A01–A10 da edição 2021. |
| Rejeição | ESP-WEB-0021, ESP-WEB-0057, RLE-0149, ESP-PROG-0081, ESP-NUVEM-0003 | `status: "rejeitada"` com `validacao.obs` (ver §3). |

Questões que receberam comentário:

- **LP (30):** LP-0001, LP-0002, LP-0003, LP-0004, LP-0005, LP-0006, LP-0007, LP-0008, LP-0009, LP-0010, LP-0011, LP-0012, LP-0013, LP-0014, LP-0015, LP-0016, LP-0017, LP-0018, LP-0019, LP-0020, LP-0021, LP-0022, LP-0023, LP-0024, LP-0025, LP-0026, LP-0027, LP-0028, LP-0029, LP-0030
- **RLE (25):** RLE-0001, RLE-0002, RLE-0003, RLE-0004, RLE-0005, RLE-0006, RLE-0007, RLE-0008, RLE-0009, RLE-0010, RLE-0011, RLE-0012, RLE-0013, RLE-0014, RLE-0015, RLE-0016, RLE-0017, RLE-0018, RLE-0019, RLE-0020, RLE-0021, RLE-0022, RLE-0023, RLE-0024, RLE-0025
- **ATU/ETI (32):** ATU-0001, ATU-0002, ATU-0003, ATU-0004, ATU-0005, ATU-0006, ATU-0007, ATU-0008, ATU-0009, ATU-0010, ATU-0011, ATU-0012, ATU-0013, ATU-0014, ATU-0015, ATU-0016, ATU-0017, ATU-0018, ATU-0019, ATU-0020, ATU-0021, ATU-0022, ATU-0023, ATU-0024, ATU-0025, ATU-0039, ETI-0001, ETI-0002, ETI-0003, ETI-0004, ETI-0005, ETI-0026
- **Específicos (65):** ESP-BD-0001, ESP-BD-0002, ESP-BD-0003, ESP-BD-0004, ESP-BD-0005, ESP-BD-0006, ESP-BD-0007, ESP-BD-0008, ESP-BD-0009, ESP-BD-0010, ESP-BD-0011, ESP-GOV-0001, ESP-GOV-0002, ESP-GOV-0003, ESP-GOV-0007, ESP-GOV-0009, ESP-GOV-0021, ESP-GOV-0023, ESP-GOV-0024, ESP-GOV-0026, ESP-GOV-0027, ESP-GOV-0029, ESP-GOV-0042, ESP-PROC-0001, ESP-PROC-0002, ESP-PROC-0003, ESP-PROC-0004, ESP-PROC-0005, ESP-PROC-0006, ESP-PROC-0007, ESP-PROC-0008, ESP-PROC-0009, ESP-PROC-0010, ESP-PROC-0011, ESP-PROC-0012, ESP-PROC-0013, ESP-PROG-0001, ESP-PROG-0002, ESP-PROG-0003, ESP-PROG-0004, ESP-PROG-0005, ESP-PROG-0006, ESP-PROG-0007, ESP-PROG-0008, ESP-PROG-0009, ESP-PROG-0010, ESP-PROG-0011, ESP-PROG-0012, ESP-REDES-0001, ESP-REDES-0002, ESP-SEG-0001, ESP-SEG-0002, ESP-SERV-0012, ESP-SO-0001, ESP-WEB-0001, ESP-WEB-0002, ESP-WEB-0003, ESP-WEB-0004, ESP-WEB-0005, ESP-WEB-0006, ESP-WEB-0007, ESP-WEB-0008, ESP-WEB-0009, ESP-WEB-0010, ESP-WEB-0011

### 2.3 Infraestrutura (arquivos alterados)

- `app/dados.js`: `D.aplicarCorrecoes` aplica `window.CORRECOES` antes de indexar e registra `correcoesAplicadas`/`correcoesInvalidas`.
- `index.html`: carrega `banco/correcoes.js` depois de `textos-base.js`.
- `tools/validar_banco.py`: lê e aplica `correcoes.js`, recusa correção inválida e exige `validacao.obs` em `rejeitada`/`duvida`.
- `tools/verificacao/validacao_agente5.py` + `validacao-agente5.json`: status final das variações, aplicado pelos três geradores.
- Logs dos agentes 2, 3 e 4: deixaram de dizer que tudo está "rascunho" e apontam para este relatório.

## 3. Rejeitadas (com motivo)

Todas são **quase-duplicatas** entre questões importadas. Ficou a melhor de cada par (ou trio): a mais contextualizada, ou a que é pai de uma variação.

| Rejeitada | Mantida | Motivo |
|---|---|---|
| ESP-WEB-0021 | ESP-WEB-0016 | Mesma pergunta (usuário autenticado sem permissão → 403) e mesmas alternativas. A 0016 está contextualizada em API REST. |
| ESP-WEB-0057 | ESP-WEB-0016 | Idem (trio 0016/0021/0057). |
| RLE-0149 | RLE-0116 | Setor de 18% → 64,8°, mesmo enunciado e quase as mesmas alternativas. Além disso, estava classificada em 02 §24 (desvio médio), e não em 02 §19 (gráficos). |
| ESP-PROG-0081 | ESP-PROG-0019 | Ciclo do TDD, mesmas alternativas em outra ordem. A 0019 é pai de ESP-PROG-V034. |
| ESP-NUVEM-0003 | ESP-NUVEM-0001 | Mesmo cenário (API publicada sem administrar SO → PaaS). A 0001 é pai de ESP-NUVEM-V001. |

Nenhuma variação foi rejeitada. O teste do app confirmou que as rejeitadas não entram em simulados nem em treinos (§8).

## 4. DÚVIDAS para o dono

### 4.1 Status `duvida` no banco (exige decisão)

| id | Por quê | Recomendação |
|---|---|---|
| **RLE-0011** (Banestes 2024, Q16, curva S) | Resolvida na revisão final: a figura `img/2024-q16-curva-s.png` já estava anexada; gabarito A conferido com o gráfico e comentário reescrito. | Nenhuma ação. |

### 4.2 Gabaritos oficiais discutíveis (mantidos, sem mudança)

Pela regra, gabarito oficial não se muda. Estes ficam registrados para o dono decidir se mantém a questão no treino. Todas continuam `validada`, e o comentário explica a leitura da banca.

| id | Gabarito oficial | Por quê | Recomendação |
|---|---|---|---|
| ESP-PROC-0003 (FGV 2021) | C (usabilidade) | Campo de e-mail sem validação de formato: a banca vê falha de usabilidade (prevenção de erros). Também se defende confiabilidade/integridade dos dados. | Manter; o comentário cita a outra leitura. |
| LP-0005 (FGV 2021) | B ("museu de grandes novidades") | No original de Cazuza o verso é irônico (negativo). Isolado, é o único sem vocabulário negativo. | Manter; o comentário avisa da ironia. |
| LP-0020 (ACCESS 2024) | D ("vírgulas obrigatórias para separar os sujeitos compostos") | Não há verbo: é uma enumeração, e "sujeitos" é impróprio. Ainda assim D é a única defensável. | Manter; o comentário explica. |
| LP-0025 (ACCESS 2024) | C | (B) "É possível não irmos…" também é oração subjetiva, só que reduzida de infinitivo. A banca exige a mesma forma (desenvolvida). | Manter; o comentário explica. |
| ATU-0011 (ACCESS 2024) | D (compulsório como "reserva de emergência") | Descrição incompleta: a função principal é o controle da liquidez (apostila 03 §3.6). As outras alternativas estão erradas. | Manter; as variações ATU-V016/V017 cobram a visão da apostila. |
| ESP-WEB-0011 (ACCESS 2024) | A | A alternativa lista os métodos em ordem inversa à das definições (o enunciado não diz "respectivamente"). | Manter. |

### 4.3 Pontos que dependem de fonte externa ou de decisão

| Assunto | Situação | Recomendação |
|---|---|---|
| **ETI-0004** (os "4 Rs" do Guia de Conduta do Banestes) | O trecho não está na apostila 03 §12 e não consegui conferir no texto oficial do Guia. O gabarito (reduzir, reutilizar, reciclar, repensar) é a única opção plausível. | Conferir no PDF do Guia (link no edital). |
| **ISO/IEC 27001:2024** | O edital cita "ABNT NBR ISO/IEC 27001:2024", mas a apostila 04 fala em 27001:2022. Nenhuma questão afirma algo específico de versão (conferido). | Atualizar a apostila (norma 2022 + Emenda 1:2024, que trata de mudança climática) e citar a edição 2024 ABNT. Nenhuma questão precisa mudar. |
| **Lei 15.352/2026 (ANPD agência)** | A apostila 04 §20.11 cita a lei, que converteu a MP 1.317/2025. A existência foi confirmada na web (texto publicado e notícia da sanção). Nenhuma questão do banco cita a lei. | Manter na apostila. |
| **Distribuição do gabarito nas importadas** | As importadas de apostila concentram o gabarito em B e C (ver §6), e o app não embaralha alternativas (`embaralhavel: false` em todas as 912). | Decidir se o app deve embaralhar as alternativas das importadas de apostila/simulado (as de prova real devem manter a ordem), ou marcar essas questões como `embaralhavel: true` e implementar o embaralhamento. |
| **Itens datados** (revalidar perto da prova, 01/02/2027) | Conferidos em nov/2026: ATU-V015 (Copom 04/11/2026, Selic 13,75%), ATU-V033, V036, V039, V040, V041; ETI-V022, V023, V027 e ETI-0016 (Res. BCB 591/2026); ESP-GOV-V030 (ITIL Version 5, só o que está confirmado); ESP-SEG-V018 (NIST SP 800-61 Rev. 3); ESP-PROC-V041 (MR-MPS-SW); ESP-WEB-0086 (NBR 17225:2025, "146 itens", não conferido na norma). | Revalidar em jan/2027 (Copom de dezembro, alíquotas de compulsório, resoluções do BCB). |
| **Sem execução real** (tag `nao_executado`) | ESP-DEVOPS-V005, V032 (Docker) e ESP-SO-V013 (PowerShell) foram conferidas com a documentação oficial, porque o container não tem Docker nem PowerShell. | Executar num ambiente com Docker/PowerShell se quiser confirmação prática. |

## 5. Duplicatas tratadas

- **Busca feita:** em todo o banco (1.603 questões), em duas passadas:
  1. similaridade de Jaccard por trigramas de enunciado, alternativas e ambos;
  2. `difflib` sobre o enunciado, dentro de cada matéria ou eixo, com limiar de 0,6.
- **Pares candidatos:** 398. Revisei os que tinham mesma resposta ou alternativas em comum.
- **Duplicatas reais:** 4 grupos, todos entre importadas. 5 questões rejeitadas (§3).
- **Mantidas de propósito:**
  - **Variação × pai com o mesmo enunciado-modelo e outra resposta**, por exemplo LP-0108/LP-V085, LP-0100/LP-V061, RLE-0131/RLE-V063, RLE-0132/RLE-V066, ATU-0056/ATU-V032. As alternativas e a resposta mudam, então a variação é real.
  - **ESP-PROC-V053 e V054**, que compartilham o mesmo trecho em inglês de propósito, com perguntas diferentes.
  - **Mesma lista de alternativas para perguntas diferentes:** ESP-REDES-0022/V023 (802.1X × 802.1D), ESP-SEG-0035/V019 (fases da 27035), ESP-PROG-0017/V031 (DIP × SRP), ESP-GOV-0013/0015 (domínios do COBIT).
  - **ESP-WEB-0020 × ESP-WEB-0055** (métodos idempotentes e não seguros, em par × um só) e **ESP-GOV-0005 × 0020** (cadeia de valor ITIL: EXCETO × lista): mesmo assunto, formatos diferentes.
- **Classificação das seções mistas:** conferidas questão por questão (199 questões em 03 §17, 03 §21, 04 §13, 04 §16, 04 §24, 06 §9, 06 §10, 06 §12, 06 §14, 06 §16, 06 §18 e 06 §19). A matéria ou eixo de cada uma condiz com o conteúdo cobrado, inclusive finanças sustentáveis em Atualidades, que o edital prevê. A única classificação errada encontrada foi RLE-0149 (rejeitada como duplicata).

## 6. Distribuição de gabarito (A–E)

Questões `validada` de múltipla escolha (as de 4 alternativas não têm E):

| Matéria / eixo | n | A | B | C | D | E | só variações (A/B/C/D/E) | só importadas (A/B/C/D/E) |
|---|---|---|---|---|---|---|---|---|
| Língua Portuguesa | 203 | 35 (17%) | 58 (29%) | 58 (29%) | 29 (14%) | 23 (11%) | 19/19/18/19/19 | 16/39/40/10/4 |
| Raciocínio Lógico e Estatística | 251 | 34 (14%) | 63 (25%) | 87 (35%) | 43 (17%) | 24 (10%) | 22/21/21/21/21 | 12/42/66/22/3 |
| Atualidades do Mercado Financeiro e Digital | 104 | 18 (17%) | 29 (28%) | 30 (29%) | 16 (15%) | 11 (11%) | 11/10/10/10/10 | 7/19/20/6/1 |
| Ética, Compliance e ESG | 105 | 18 (17%) | 29 (28%) | 23 (22%) | 19 (18%) | 16 (15%) | 16/16/16/16/16 | 2/13/7/3/0 |
| Arquitetura de sistemas | 51 | 9 (18%) | 12 (24%) | 12 (24%) | 9 (18%) | 9 (18%) | 9/9/9/9/9 | 0/3/3/0/0 |
| Banco de Dados | 96 | 11 (11%) | 42 (44%) | 30 (31%) | 11 (11%) | 2 (2%) | 1/1/1/1/1 | 10/41/29/10/1 |
| Computação em nuvem | 15 | 2 (13%) | 3 (20%) | 7 (47%) | 2 (13%) | 1 (7%) | 1/1/2/2/1 | 1/2/5/0/0 |
| Desenvolvimento web e mobile | 78 | 7 (9%) | 31 (40%) | 24 (31%) | 12 (15%) | 4 (5%) | 2/1/1/1/1 | 5/30/23/11/3 |
| DevOps e DevSecOps | 49 | 9 (18%) | 11 (22%) | 12 (24%) | 9 (18%) | 8 (16%) | 9/9/9/9/8 | 0/2/3/0/0 |
| Gestão e Governança de TI | 99 | 16 (16%) | 29 (29%) | 21 (21%) | 16 (16%) | 17 (17%) | 14/13/13/13/13 | 2/16/8/3/4 |
| Processo de desenvolvimento de software | 113 | 17 (15%) | 34 (30%) | 32 (28%) | 17 (15%) | 13 (12%) | 11/11/11/11/11 | 6/23/21/6/2 |
| Programação | 113 | 16 (14%) | 38 (34%) | 33 (29%) | 15 (13%) | 11 (10%) | 8/8/7/8/7 | 8/30/26/7/4 |
| Redes de computadores | 49 | 7 (14%) | 15 (31%) | 13 (27%) | 8 (16%) | 6 (12%) | 5/5/6/6/5 | 2/10/7/2/1 |
| Segurança da Informação | 65 | 9 (14%) | 16 (25%) | 25 (38%) | 8 (12%) | 7 (11%) | 6/6/6/6/6 | 3/10/19/2/1 |
| Serviços e gerenciamento de redes | 33 | 4 (12%) | 12 (36%) | 9 (27%) | 4 (12%) | 4 (12%) | 4/5/5/4/4 | 0/7/4/0/0 |
| Sistemas Operacionais | 49 | 7 (14%) | 17 (35%) | 14 (29%) | 7 (14%) | 4 (8%) | 3/3/3/3/3 | 4/14/11/4/1 |
| **Total** | 1473 | 219 (15%) | 439 (30%) | 430 (29%) | 225 (15%) | 160 (11%) | 141/138/138/139/135 | 78/301/292/86/25 |

- **Variações:** equilibradas, com cerca de 20% em cada letra.
- **Importadas:** concentradas em B e C, sobretudo em Banco de Dados (44% B), Web (40% B) e Sistemas Operacionais (35% B).
  - Nas de prova real a ordem é a oficial e não deve mudar.
  - Nas de apostila e simulado o viés vem da fonte.
  - Como o app não embaralha alternativas, quem chuta "B/C" é favorecido.
  - **Recomendação** (§4.3): embaralhar as alternativas dessas importadas no app.

## 7. Tópicos do edital (Anexo IV) sem questão

Busca por palavras-chave em tópico, enunciado, alternativas e comentário das questões validadas, eixo por eixo. Conferida à mão nos casos ambíguos.

| Eixo / matéria | Tópico do Anexo IV sem questão |
|---|---|
| Banco de Dados | PL/SQL (Oracle); data lake e data mart (só aparece data warehouse) |
| Desenvolvimento web e mobile | Bootstrap 5; React Native |
| Sistemas Operacionais | Sincronização (semáforos, mutex, região crítica); armazenamento terciário; Windows 11 |
| Segurança da Informação | Ataques DoS/DDoS; LGPD – tratamento de dados pelo Poder Público |
| Computação em nuvem | Governança de nuvem (landing zone, políticas, tags) |

**Cobertos só em outro eixo**, o que não chega a ser lacuna, mas vale equilibrar:

- governança e qualidade de dados: em Processo e Segurança, não em Banco de Dados;
- testes unitários e de integração: em Processo, não em Programação;
- Vue.js, servidores de aplicação e intranet/extranet: em outros eixos ou só no comentário;
- interoperabilidade no setor público: fora de Governança;
- Rancher e inglês técnico: fora de Nuvem.

Os demais tópicos do Anexo IV têm ao menos uma questão. Os Gerais estão cobertos.

## 8. Testes do app (Playwright, Chromium, `file://`)

Script: `tools/verificacao/teste_app_agente5.js`. Para executar: `NODE_PATH=$(npm root -g) node tools/verificacao/teste_app_agente5.js`.

**Resultado: 0 falhas.**

- **Correções:** as 165 entradas de `correcoes.js` foram aplicadas no app, sem nenhuma inválida. Conferido na tela:
  - indentação de ESP-PROG-0004;
  - comentário novo de LP-0001 (abrindo a questão no treino);
  - link C# de ESP-PROG-0006;
  - nota OWASP de ESP-SEG-0020.
- **Rejeitadas e dúvida:** fora de simulado e treino (`usavelSimulado`/`usavelTreino` = falso). Nenhuma apareceu nos 3 simulados. Há 1.473 questões usáveis em simulado.
- **3 simulados completos** de 80 questões (30 Gerais + 50 Específicos, na proporção do edital), sem anuladas, rejeitadas ou repetidas. Em todos, a nota do app bateu com a recalculada pela fórmula (G + 2E)/3, a nota exibida na tela bateu com o valor formatado, e o arquivo baixado pelo botão "Baixar nota .md" é idêntico à nota gerada:

  | Simulado | Gerais | Específicos | Conta | Nota | Arquivo .md |
  |---|---|---|---|---|---|
  | 1 | 26/30 | 46/50 | (8,667 + 2 × 9,2) / 3 | **9,02** | `2026-11-13 Simulado 01.md` |
  | 2 | 17/30 | 29/50 | (5,667 + 2 × 5,8) / 3 | **5,76** | `2026-11-13 Simulado 02.md` |
  | 3 | 9/30 | 14/50 | (3,0 + 2 × 2,8) / 3 | **2,87** | `2026-11-13 Simulado 03.md` |

  - Cada nota .md traz a nota final, Gerais e Específicos (acertos/total).
  - No simulado 2, os 3 brancos foram contados e não foram para o caderno.
- **Treino em 3 eixos:** Banco de Dados, Segurança da Informação e Programação, 10 questões cada. Todas eram do eixo escolhido e validadas, o comentário apareceu depois de cada resposta, e o resumo ("6 de 10 certas (60%)") bate com as respostas dadas.
- **Caderno de erros:**
  - Recebeu os 108 erros (8 + 31 + 57 dos simulados, sem os brancos, e 12 dos treinos), com próxima revisão em 14/11/2026. A tabela lista as 108.
  - "Revisar todas agora": 5 revisadas, "5 de 5 certas", e o contador de acertos seguidos foi atualizado.
- **Console:** nenhum erro ou aviso (`console.error`/`warning`/`pageerror`) em toda a execução.

## 9. Como refazer a validação

```bash
python3 tools/verificacao/agente2/gerar.py      # refaz as contas de RLE (asserts) e regrava variacoes-gerais.js
python3 tools/verificacao/agente3/gerar.py && python3 tools/verificacao/agente3/verificar.py
python3 tools/verificacao/agente4/gerar.py && bash tools/verificacao/agente4/verificar_tudo.sh
python3 tools/validar_banco.py                  # esquema + correcoes.js
NODE_PATH=$(npm root -g) node tools/verificacao/teste_app_agente5.js
```
