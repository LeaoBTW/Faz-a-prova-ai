# Log do agente 2 – Variações dos Conhecimentos Gerais

Gerado por `tools/verificacao/agente2/gerar.py` em 2026-11-13. Arquivo do banco: `banco/variacoes-gerais.js`.
Todas as questões estão com `status: "rascunho"`.

## Resumo

| Matéria | Cota | Criadas | Variações | Inéditas | A | B | C | D | E |
|---|---|---|---|---|---|---|---|---|---|
| Língua Portuguesa | 91 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Raciocínio Lógico e Estatística | 103 | 106 | 100 | 6 | 22 | 21 | 21 | 21 | 21 |
| Atualidades do Mercado Financeiro e Digital | 47 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Ética, Compliance e ESG | 75 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Como verificar

- `python3 tools/verificacao/agente2/gerar.py` refaz todas as contas de RLE (cada questão calcula a resposta e os distratores em Python e confere com `assert`) e regrava o banco e este log.
- `python3 tools/validar_banco.py` confere o esquema.
- Português: cada questão aplica uma regra da apostila 01 (seção indicada) e o comentário explica a regra e o erro de cada alternativa.
- Atualidades e Ética: conferidas contra a apostila 03 (seções indicadas, revisão de nov/2026); fatos datados têm a tag `datado`.

## Língua Portuguesa

| id | pai / fonte | tipo de variação | verificação |
|---|---|---|---|

## Raciocínio Lógico e Estatística

| id | pai / fonte | tipo de variação | verificação |
|---|---|---|---|
| RLE-V001 | RLE-0001 (Variação de Banestes 2021 (FGV) – Q26) | cálculo: troca das quantidades de alqueires | Python: tools/verificacao/agente2/rle.py |
| RLE-V002 | RLE-0001 (Variação de Banestes 2021 (FGV) – Q26) | cálculo: troca do que se pede (conversão entre unidades) | Python: tools/verificacao/agente2/rle.py |
| RLE-V003 | RLE-0002 (Variação de Banestes 2021 (FGV) – Q27) | conceito: mesma equivalência (~p→q ≡ p∨q) com frase nova | Python: tools/verificacao/agente2/rle.py |
| RLE-V004 | RLE-0002 (Variação de Banestes 2021 (FGV) – Q27) | conceito: troca da forma (p→~q) e da equivalência pedida (contrapositiva) | Python: tools/verificacao/agente2/rle.py |
| RLE-V005 | RLE-0003 (Variação de Banestes 2021 (FGV) – Q28) | cálculo/lógica: novos números e novas afirmações | Python: tools/verificacao/agente2/rle.py |
| RLE-V006 | RLE-0004 (Variação de Banestes 2021 (FGV) – Q29) | lógica: novas afirmações e nova solução | Python: tools/verificacao/agente2/rle.py |
| RLE-V007 | RLE-0004 (Variação de Banestes 2021 (FGV) – Q29) | lógica: muda a condição (duas verdadeiras) e o cenário | Python: tools/verificacao/agente2/rle.py |
| RLE-V008 | RLE-0005 (Variação de Banestes 2021 (FGV) – Q30) | cálculo: novos dados e nova pergunta | Python: tools/verificacao/agente2/rle.py |
| RLE-V009 | RLE-0005 (Variação de Banestes 2021 (FGV) – Q30) | cálculo: troca de cenário e da incógnita | Python: tools/verificacao/agente2/rle.py |
| RLE-V010 | RLE-0006 (Variação de Banestes 2021 (FGV) – Q31) | lógica: mesma estrutura de cadeia com nova ordem das premissas e novo cenário | Python: tools/verificacao/agente2/rle.py |
| RLE-V011 | RLE-0006 (Variação de Banestes 2021 (FGV) – Q31) | lógica: cadeia de condicionais com premissa negativa (modus tollens) | Python: tools/verificacao/agente2/rle.py |
| RLE-V012 | RLE-0007 (Variação de Banestes 2021 (FGV) – Q32) | cálculo: novos valores | Python: tools/verificacao/agente2/rle.py |
| RLE-V013 | RLE-0007 (Variação de Banestes 2021 (FGV) – Q32) | cálculo: inverte a incógnita (dado par-par, pede ímpar-ímpar) | Python: tools/verificacao/agente2/rle.py |
| RLE-V014 | RLE-0008 (Variação de Banestes 2021 (FGV) – Q33) | cálculo: nova palavra e novo anagrama | Python: tools/verificacao/agente2/rle.py |
| RLE-V015 | RLE-0008 (Variação de Banestes 2021 (FGV) – Q33) | cálculo: nova palavra e novo anagrama | Python: tools/verificacao/agente2/rle.py |
| RLE-V016 | RLE-0008 (Variação de Banestes 2021 (FGV) – Q33) | cálculo: pergunta inversa (dada a posição, achar o anagrama) | Python: tools/verificacao/agente2/rle.py |
| RLE-V017 | RLE-0009 (Variação de Banestes 2021 (FGV) – Q34) | cálculo: novos valores de média e mediana | Python: tools/verificacao/agente2/rle.py |
| RLE-V018 | RLE-0009 (Variação de Banestes 2021 (FGV) – Q34) | cálculo: caso simétrico (mediana < média) | Python: tools/verificacao/agente2/rle.py |
| RLE-V019 | RLE-0010 (Variação de Banestes 2021 (FGV) – Q35) | cálculo: troca do evento (diferença 2) | Python: tools/verificacao/agente2/rle.py |
| RLE-V020 | RLE-0010 (Variação de Banestes 2021 (FGV) – Q35) | cálculo: troca do evento (soma prima) | Python: tools/verificacao/agente2/rle.py |
| RLE-V021 | RLE-0010 (Variação de Banestes 2021 (FGV) – Q35) | cálculo: troca do evento (produto par, uso do complementar) | Python: tools/verificacao/agente2/rle.py |
| RLE-V022 | RLE-0015 (Variação de Banestes 2024 (ACCESS) – Q20) | cálculo: novos valores | Python: tools/verificacao/agente2/rle.py |
| RLE-V023 | RLE-0015 (Variação de Banestes 2024 (ACCESS) – Q20) | cálculo: troca do evento (duas da mesma cor) | Python: tools/verificacao/agente2/rle.py |
| RLE-V024 | RLE-0016 (Variação de Banestes 2024 (ACCESS) – Q21) | cálculo: novos pesos e carga | Python: tools/verificacao/agente2/rle.py |
| RLE-V025 | RLE-0016 (Variação de Banestes 2024 (ACCESS) – Q21) | cálculo: novos pesos e carga | Python: tools/verificacao/agente2/rle.py |
| RLE-V026 | RLE-0017 (Variação de Banestes 2024 (ACCESS) – Q22) | cálculo: novos valores | Python: tools/verificacao/agente2/rle.py |
| RLE-V027 | RLE-0018 (Variação de Banestes 2024 (ACCESS) – Q23) | cálculo: novos valores | Python: tools/verificacao/agente2/rle.py |
| RLE-V028 | RLE-0018 (Variação de Banestes 2024 (ACCESS) – Q23) | cálculo: troca do tipo de problema (ida e volta com velocidades distintas) | Python: tools/verificacao/agente2/rle.py |
| RLE-V029 | RLE-0019 (Variação de Banestes 2024 (ACCESS) – Q24) | cálculo: nova fração e novo termo independente | Python: tools/verificacao/agente2/rle.py |
| RLE-V030 | RLE-0019 (Variação de Banestes 2024 (ACCESS) – Q24) | cálculo: problema de frações do total | Python: tools/verificacao/agente2/rle.py |
| RLE-V031 | RLE-0021 (Variação de Banestes 2024 (ACCESS) – Q26) | cálculo: novos percentuais | Python: tools/verificacao/agente2/rle.py |
| RLE-V032 | RLE-0021 (Variação de Banestes 2024 (ACCESS) – Q26) | cálculo: três etapas sucessivas | Python: tools/verificacao/agente2/rle.py |
| RLE-V033 | RLE-0022 (Variação de Banestes 2024 (ACCESS) – Q27) | conceito: troca do quantificador (nenhum → algum) | Regra de negação de quantificadores (apostila 02 §3). |
| RLE-V034 | RLE-0022 (Variação de Banestes 2024 (ACCESS) – Q27) | conceito: troca do quantificador (algum → todo/nenhum) | Regra de negação de quantificadores (apostila 02 §3). |
| RLE-V035 | RLE-0023 (Variação de Banestes 2024 (ACCESS) – Q28) | cálculo: novas relações entre as regiões | Python: tools/verificacao/agente2/rle.py |
| RLE-V036 | RLE-0023 (Variação de Banestes 2024 (ACCESS) – Q28) | cálculo: nova pergunta (somente um dos conjuntos) | Python: tools/verificacao/agente2/rle.py |
| RLE-V037 | RLE-0024 (Variação de Banestes 2024 (ACCESS) – Q29) | conceito: troca do tipo de premissa (todo + nenhum) | Diagrama de Venn (apostila 02 §4). |
| RLE-V038 | RLE-0024 (Variação de Banestes 2024 (ACCESS) – Q29) | conceito: troca da ordem das premissas (algum + todo) | Diagrama de Venn (apostila 02 §4). |
| RLE-V039 | RLE-0025 (Variação de Banestes 2024 (ACCESS) – Q30) | cálculo: troca para divisão inversamente proporcional | Python: tools/verificacao/agente2/rle.py |
| RLE-V040 | RLE-0025 (Variação de Banestes 2024 (ACCESS) – Q30) | cálculo: proporção composta (direta e inversa) | Python: tools/verificacao/agente2/rle.py |
| RLE-V041 | RLE-0061 (Variação de Apostila 02 §8 – Q1) | cálculo: novos valores e prazo em anos | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V042 | RLE-0061 (Variação de Apostila 02 §8 – Q1) | cálculo: pergunta inversa (achar a taxa) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V043 | RLE-0061 (Variação de Apostila 02 §8 – Q1) | cálculo: prazo em dias (mês comercial) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V044 | RLE-0062 (Variação de Apostila 02 §8 – Q2) | cálculo: novos valores | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V045 | RLE-0062 (Variação de Apostila 02 §8 – Q2) | cálculo: pergunta inversa (achar o capital) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V046 | RLE-0062 (Variação de Apostila 02 §8 – Q2) | cálculo: pergunta inversa (achar a taxa) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V047 | RLE-0063 (Variação de Apostila 02 §8 – Q3) | cálculo: troca de 'triplicar' por 'quadruplicar' | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V048 | RLE-0063 (Variação de Apostila 02 §8 – Q3) | cálculo: achar a taxa a partir da fração de juros | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V049 | RLE-0064 (Variação de Apostila 02 §8 – Q4) | cálculo: novos valores (mensal → trimestral) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V050 | RLE-0064 (Variação de Apostila 02 §8 – Q4) | cálculo: sentido inverso (anual → semestral) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V051 | RLE-0064 (Variação de Apostila 02 §8 – Q4) | cálculo: troca para conversão nominal → efetiva | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V052 | RLE-0064 (Variação de Apostila 02 §8 – Q4) | cálculo: nominal → efetiva com outro período | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V053 | RLE-0151 (Variação de Apostila 02 §25 – Q2) | cálculo: novos valores | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V054 | RLE-0151 (Variação de Apostila 02 §25 – Q2) | cálculo: pergunta inversa (achar a nominal) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V055 | RLE-0065 (Variação de Apostila 02 §8 – Q5) | cálculo: caso de juro real negativo | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V056 | RLE-0150 (Variação de Apostila 02 §25 – Q1) | cálculo: novos valores | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V057 | RLE-0150 (Variação de Apostila 02 §25 – Q1) | cálculo: troca do que se pede (taxa efetiva equivalente) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V058 | RLE-0150 (Variação de Apostila 02 §25 – Q1) | cálculo: pergunta inversa (tempo de duplicação) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V059 | Inédita – Apostila 02 §8 | inédita (desconto comercial simples) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V060 | Inédita – Apostila 02 §8 | inédita (desconto racional simples) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V061 | Inédita – Apostila 02 §22 | inédita (taxa efetiva do desconto comercial) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V062 | Inédita – Apostila 02 §8 | inédita (relação entre descontos comercial e racional) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V063 | RLE-0131 (Variação de Apostila 02 §22 – Q1) | cálculo: novos valores | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V064 | RLE-0131 (Variação de Apostila 02 §22 – Q1) | cálculo: troca da modalidade (comercial composto) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V065 | RLE-0131 (Variação de Apostila 02 §22 – Q1) | cálculo: pede o desconto em vez do valor atual | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V066 | RLE-0132 (Variação de Apostila 02 §22 – Q2) | cálculo: novos valores | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V067 | RLE-0132 (Variação de Apostila 02 §22 – Q2) | cálculo: série antecipada (com entrada) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V068 | RLE-0132 (Variação de Apostila 02 §22 – Q2) | cálculo: troca para montante de série uniforme | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V069 | RLE-0136 (Variação de Apostila 02 §22 – Q6) | cálculo: pede a amortização da 2ª prestação | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V070 | RLE-0136 (Variação de Apostila 02 §22 – Q6) | cálculo: pede o saldo devedor | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V071 | RLE-0136 (Variação de Apostila 02 §22 – Q6) | conceito/cálculo: comparação Price × SAC | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V072 | RLE-0144 (Variação de Apostila 02 §24 – Q2) | cálculo: troca para SAC e para a 3ª prestação | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V073 | RLE-0144 (Variação de Apostila 02 §24 – Q2) | cálculo: novos valores | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V074 | RLE-0144 (Variação de Apostila 02 §24 – Q2) | cálculo/conceito: comportamento das prestações no SAC | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V075 | RLE-0134 (Variação de Apostila 02 §22 – Q4) | Certo/Errado → A–E com 5 afirmações | Conferido com a apostila 02 §22.4. |
| RLE-V076 | RLE-0133 (Variação de Apostila 02 §22 – Q3) | cálculo: novos valores (VPL positivo) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V077 | RLE-0133 (Variação de Apostila 02 §22 – Q3) | cálculo: novos valores (VPL negativo) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V078 | RLE-0133 (Variação de Apostila 02 §22 – Q3) | cálculo/conceito: três fluxos e confronto VPL × payback | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V079 | Inédita – Apostila 02 §22 | inédita (TIR com fluxo único) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V080 | Inédita – Apostila 02 §22 | inédita (TIR por tentativa) | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V081 | RLE-0145 (Variação de Apostila 02 §24 – Q3) | cálculo: novos valores e data focal antes dos vencimentos | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V082 | RLE-0145 (Variação de Apostila 02 §24 – Q3) | cálculo: substituição por dois pagamentos iguais | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V083 | RLE-0146 (Variação de Apostila 02 §24 – Q4) | cálculo: três parcelas | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V084 | RLE-0146 (Variação de Apostila 02 §24 – Q4) | cálculo: troca para valor futuro | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V085 | RLE-0135 (Variação de Apostila 02 §22 – Q5) | cálculo: novos valores | Python: tools/verificacao/agente2/rle_fin.py |
| RLE-V086 | RLE-0143 (Variação de Apostila 02 §24 – Q1) | cálculo: novo conjunto | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V087 | RLE-0143 (Variação de Apostila 02 §24 – Q1) | cálculo: novo conjunto e duas medidas | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V088 | RLE-0148 (Variação de Apostila 02 §24 – Q6) | Certo/Errado → A–E com 5 afirmações | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V089 | RLE-0113 (Variação de Apostila 02 §18 – Q3) | cálculo: novo conjunto | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V090 | RLE-0113 (Variação de Apostila 02 §18 – Q3) | cálculo: troca para desvio padrão amostral | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V091 | RLE-0111 (Variação de Apostila 02 §18 – Q1) | cálculo: novo conjunto e três medidas | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V092 | RLE-0112 (Variação de Apostila 02 §18 – Q2) | cálculo: novas notas e pesos | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V093 | RLE-0115 (Variação de Apostila 02 §18 – Q5) | cálculo: novos valores | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V094 | RLE-0056 (Variação de Apostila 02 §7 – Q1) | cálculo: novos valores e pergunta relativa | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V095 | RLE-0057 (Variação de Apostila 02 §7 – Q2) | cálculo: novos valores | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V096 | RLE-0059 (Variação de Apostila 02 §7 – Q4) | conceito/cálculo: novo cenário (p.p. × %) | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V097 | RLE-0068 (Variação de Apostila 02 §9 – Q3) | cálculo: novos valores | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V098 | RLE-0068 (Variação de Apostila 02 §9 – Q3) | cálculo: regra de três simples inversa | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V099 | RLE-0098 (Variação de Apostila 02 §15 – Q3) | cálculo: combinação de dois grupos | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V100 | RLE-0098 (Variação de Apostila 02 §15 – Q3) | cálculo: contagem com restrição 'pelo menos um' | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V101 | RLE-0096 (Variação de Apostila 02 §15 – Q1) | cálculo: restrição de paridade e do zero | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V102 | RLE-0099 (Variação de Apostila 02 §15 – Q4) | cálculo: permutação circular com restrição | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V103 | RLE-0091 (Variação de Apostila 02 §14 – Q1) | cálculo: troca para soma dos termos | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V104 | RLE-0093 (Variação de Apostila 02 §14 – Q3) | cálculo: nova regra de formação (2x + 1) | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V105 | RLE-0031 (Variação de Apostila 02 §2 – Q1) | conceito: nova frase | Python: tools/verificacao/agente2/rle_stats.py |
| RLE-V106 | RLE-0035 (Variação de Apostila 02 §2 – Q5) | conceito: troca da forma da resposta (p ↔ ~q) | Python: tools/verificacao/agente2/rle_stats.py |

## Atualidades do Mercado Financeiro e Digital

| id | pai / fonte | tipo de variação | verificação |
|---|---|---|---|

## Ética, Compliance e ESG

| id | pai / fonte | tipo de variação | verificação |
|---|---|---|---|
