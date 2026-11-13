# Log do agente 2 – Variações dos Conhecimentos Gerais

Gerado por `tools/verificacao/agente2/gerar.py` em 2026-11-13. Arquivo do banco: `banco/variacoes-gerais.js`.
As questões saem do gerador como `status: "rascunho"` e recebem o status final (validada/rejeitada/dúvida) da validação do agente 5 (`tools/verificacao/validacao-agente5.json`; ver `docs/relatorio-validacao.md`).

## Resumo

| Matéria | Cota | Criadas | Variações | Inéditas | A | B | C | D | E |
|---|---|---|---|---|---|---|---|---|---|
| Língua Portuguesa | 91 | 94 | 65 | 29 | 19 | 19 | 18 | 19 | 19 |
| Raciocínio Lógico e Estatística | 103 | 106 | 100 | 6 | 22 | 21 | 21 | 21 | 21 |
| Atualidades do Mercado Financeiro e Digital | 47 | 51 | 29 | 22 | 11 | 10 | 10 | 10 | 10 |
| Ética, Compliance e ESG | 75 | 80 | 42 | 38 | 16 | 16 | 16 | 16 | 16 |

## Como verificar

- `python3 tools/verificacao/agente2/gerar.py` refaz todas as contas de RLE (cada questão calcula a resposta e os distratores em Python e confere com `assert`) e regrava o banco e este log.
- `python3 tools/validar_banco.py` confere o esquema.
- Português: cada questão aplica uma regra da apostila 01 (seção indicada) e o comentário explica a regra e o erro de cada alternativa.
- Atualidades e Ética: conferidas contra a apostila 03 (seções indicadas, revisão de nov/2026); fatos datados têm a tag `datado`.

## Língua Portuguesa

| id | pai / fonte | tipo de variação | verificação |
|---|---|---|---|
| LP-V001 | LP-0004 (Variação de Banestes 2021 (FGV) – Q4) | interpretação: nova frase com a mesma estrutura de deslocamento de causa | Regra conferida na apostila 01 §1 |
| LP-V002 | LP-0004 (Variação de Banestes 2021 (FGV) – Q4) | interpretação: nova frase, mesmo tipo de inferência | Regra conferida na apostila 01 §1 |
| LP-V003 | LP-0006 (Variação de Banestes 2021 (FGV) – Q6) | interpretação: novas manchetes e inferências | Regra conferida na apostila 01 §1 |
| LP-V004 | LP-0031 (Variação de Apostila 01 §1 – Q1) | interpretação: texto curto novo | Regra conferida na apostila 01 §1 |
| LP-V005 | LP-0032 (Variação de Apostila 01 §1 – Q2) | interpretação: texto curto novo, ressalva do autor | Regra conferida na apostila 01 §1 |
| LP-V006 | LP-0033 (Variação de Apostila 01 §1 – Q3) | interpretação: novo marcador de pressuposição (deixar de) | Regra conferida na apostila 01 §1 |
| LP-V007 | LP-0033 (Variação de Apostila 01 §1 – Q3) | interpretação: operador argumentativo 'até' | Regra conferida na apostila 01 §1 |
| LP-V008 | LP-0014 (Variação de Banestes 2021 (FGV) – Q14) | interpretação: nova frase, mesma estratégia | Regra conferida na apostila 01 §1 |
| LP-V009 | LP-0015 (Variação de Banestes 2021 (FGV) – Q15) | interpretação: novas frases | Regra conferida na apostila 01 §1 |
| LP-V010 | LP-0007 (Variação de Banestes 2021 (FGV) – Q7) | conceito: novos conectivos e frases | Regra conferida na apostila 01 §2 |
| LP-V011 | LP-0007 (Variação de Banestes 2021 (FGV) – Q7) | conceito: inverte o pedido (incorreta) com novas frases | Regra conferida na apostila 01 §2 |
| LP-V012 | LP-0035 (Variação de Apostila 01 §2 – Q1) | conceito: novo conectivo adversativo | Regra conferida na apostila 01 §2 |
| LP-V013 | LP-0038 (Variação de Apostila 01 §2 – Q4) | conceito: nova locução condicional | Regra conferida na apostila 01 §2 |
| LP-V014 | LP-0010 (Variação de Banestes 2021 (FGV) – Q10) | redação: novas frases, mesma relação concessiva | Regra conferida na apostila 01 §6 |
| LP-V015 | LP-0010 (Variação de Banestes 2021 (FGV) – Q10) | redação: novas frases, relação causal | Regra conferida na apostila 01 §6 |
| LP-V016 | LP-0011 (Variação de Banestes 2021 (FGV) – Q11) | conceito: troca da conjunção (ou → e) e do valor pedido | Regra conferida na apostila 01 §11 |
| LP-V017 | LP-0011 (Variação de Banestes 2021 (FGV) – Q11) | conceito: mesmo conectivo, novo valor pedido | Regra conferida na apostila 01 §11 |
| LP-V018 | LP-0039 (Variação de Apostila 01 §2 – Q5) | conceito: nova frase | Regra conferida na apostila 01 §2 |
| LP-V019 | Inédita – Apostila 01 §2 | inédita (intertextualidade em publicidade) | Regra conferida na apostila 01 §2 |
| LP-V020 | LP-0008 (Variação de Banestes 2021 (FGV) – Q8) | conceito: novas regras e títulos | Regra conferida na apostila 01 §15 |
| LP-V021 | LP-0013 (Variação de Banestes 2021 (FGV) – Q13) | conceito: novo cenário | Regra conferida na apostila 01 §9 |
| LP-V022 | LP-0066 (Variação de Apostila 01 §8 – Q1) | conceito: novo texto (normativo) | Regra conferida na apostila 01 §8 |
| LP-V023 | Inédita – Apostila 01 §12 | inédita (denotação × conotação) | Regra conferida na apostila 01 §12 |
| LP-V024 | LP-0019 (Variação de Banestes 2024 (ACCESS) – Q4) | conceito: nova frase | Regra conferida na apostila 01 §6 |
| LP-V025 | LP-0019 (Variação de Banestes 2024 (ACCESS) – Q4) | conceito: contraste aposto × vocativo | Regra conferida na apostila 01 §6 |
| LP-V026 | LP-0025 (Variação de Banestes 2024 (ACCESS) – Q10) | conceito: nova oração-modelo | Regra conferida na apostila 01 §6 |
| LP-V027 | LP-0025 (Variação de Banestes 2024 (ACCESS) – Q10) | conceito: troca da classificação pedida | Regra conferida na apostila 01 §6 |
| LP-V028 | LP-0026 (Variação de Banestes 2024 (ACCESS) – Q11) | conceito: nova frase sobre o relativo 'que' | Regra conferida na apostila 01 §6 |
| LP-V029 | LP-0057 (Variação de Apostila 01 §6 – Q3) | conceito: novo verbo regente | Regra conferida na apostila 01 §6 |
| LP-V030 | LP-0020 (Variação de Banestes 2024 (ACCESS) – Q5) | conceito: nova enumeração | Regra conferida na apostila 01 §6 |
| LP-V031 | LP-0058 (Variação de Apostila 01 §6 – Q4) | conceito: nova frase | Regra conferida na apostila 01 §6 |
| LP-V032 | LP-0058 (Variação de Apostila 01 §6 – Q4) | conceito: inverte (assinale a incorreta) | Regra conferida na apostila 01 §6 |
| LP-V033 | LP-0061 (Variação de Apostila 01 §6 – Q7) | conceito: contraste restritiva × explicativa com novo par | Regra conferida na apostila 01 §6 |
| LP-V034 | Inédita – Apostila 01 §6 | inédita (ponto e vírgula) | Regra conferida na apostila 01 §6 |
| LP-V035 | LP-0062 (Variação de Apostila 01 §7 – Q1) | conceito: nova frase | Regra conferida na apostila 01 §7 |
| LP-V036 | LP-0064 (Variação de Apostila 01 §7 – Q3) | conceito: nova pergunta | Regra conferida na apostila 01 §7 |
| LP-V037 | LP-0063 (Variação de Apostila 01 §7 – Q2) | conceito: novo trecho narrativo | Regra conferida na apostila 01 §7 |
| LP-V038 | LP-0080 (Variação de Apostila 01 §11 – Q1) | conceito: nova frase | Regra conferida na apostila 01 §11 |
| LP-V039 | LP-0081 (Variação de Apostila 01 §11 – Q2) | conceito: novos verbos | Regra conferida na apostila 01 §11 |
| LP-V040 | LP-0083 (Variação de Apostila 01 §11 – Q4) | conceito: troca do valor pedido (certeza) | Regra conferida na apostila 01 §11 |
| LP-V041 | LP-0085 (Variação de Apostila 01 §11 – Q6) | conceito: novas frases | Regra conferida na apostila 01 §11 |
| LP-V042 | Inédita – Apostila 01 §6 | inédita (colocação pronominal) | Regra conferida na apostila 01 §6 |
| LP-V043 | Inédita – Apostila 01 §6 | inédita (substituição por pronome) | Regra conferida na apostila 01 §6 |
| LP-V044 | LP-0086 (Variação de Apostila 01 §12 – Q1) | conceito: novo exemplo | Regra conferida na apostila 01 §12 |
| LP-V045 | LP-0087 (Variação de Apostila 01 §12 – Q2) | conceito: novos pares de parônimos | Regra conferida na apostila 01 §12 |
| LP-V046 | LP-0088 (Variação de Apostila 01 §12 – Q3) | conceito: nova fonte de ambiguidade (reduzida de gerúndio) | Regra conferida na apostila 01 §12 |
| LP-V047 | LP-0090 (Variação de Apostila 01 §12 – Q5) | conceito: nova figura (paradoxo) | Regra conferida na apostila 01 §12 |
| LP-V048 | Inédita – Apostila 01 §12 | inédita (reconhecimento de figuras) | Regra conferida na apostila 01 §12 |
| LP-V049 | Inédita – Apostila 01 §12 | inédita (sinestesia) | Regra conferida na apostila 01 §12 |
| LP-V050 | Inédita – Apostila 01 §12 | inédita (sinonímia e antonímia) | Regra conferida na apostila 01 §12 |
| LP-V051 | Inédita – Apostila 01 §12 | inédita (sinonímia) | Regra conferida na apostila 01 §12 |
| LP-V052 | LP-0075 (Variação de Apostila 01 §10 – Q1) | conceito: novos exemplos | Regra conferida na apostila 01 §10 |
| LP-V053 | LP-0076 (Variação de Apostila 01 §10 – Q2) | conceito: novos exemplos | Regra conferida na apostila 01 §10 |
| LP-V054 | LP-0093 (Variação de Apostila 01 §13 – Q2) | conceito: novos exemplos | Regra conferida na apostila 01 §13 |
| LP-V055 | LP-0097 (Variação de Apostila 01 §14 – Q1) | conceito: novas palavras | Regra conferida na apostila 01 §14 |
| LP-V056 | LP-0098 (Variação de Apostila 01 §14 – Q2) | conceito: novas palavras | Regra conferida na apostila 01 §14 |
| LP-V057 | LP-0101 (Variação de Apostila 01 §14 – Q5) | conceito: novas palavras | Regra conferida na apostila 01 §14 |
| LP-V058 | LP-0028 (Variação de Banestes 2024 (ACCESS) – Q13) | conceito: inverte para 'correta' com novas palavras | Regra conferida na apostila 01 §14 |
| LP-V059 | LP-0103 (Variação de Apostila 01 §14 – Q7) | conceito: nova frase | Regra conferida na apostila 01 §14 |
| LP-V060 | LP-0104 (Variação de Apostila 01 §14 – Q8) | conceito: inverte (assinale a correta) | Regra conferida na apostila 01 §14 |
| LP-V061 | LP-0100 (Variação de Apostila 01 §14 – Q4) | conceito: novas frases | Regra conferida na apostila 01 §14 |
| LP-V062 | LP-0100 (Variação de Apostila 01 §14 – Q4) | conceito: inverte (assinale a incorreta) | Regra conferida na apostila 01 §14 |
| LP-V063 | Inédita – Apostila 01 §14 | inédita (crase com nomes de lugar e 'casa') | Regra conferida na apostila 01 §14 |
| LP-V064 | Inédita – Apostila 01 §14 | inédita (crase e mudança de sentido) | Regra conferida na apostila 01 §14 |
| LP-V065 | Inédita – Apostila 01 §14 | inédita (crase facultativa) | Regra conferida na apostila 01 §14 |
| LP-V066 | LP-0111 (Variação de Apostila 01 §15 – Q7) | Certo/Errado → A–E com 5 afirmações | Regra conferida na apostila 01 §6 |
| LP-V067 | Inédita – Apostila 01 §6 | inédita (concordância verbal – casos especiais) | Regra conferida na apostila 01 §6 |
| LP-V068 | Inédita – Apostila 01 §6 | inédita (haver/fazer impessoais) | Regra conferida na apostila 01 §6 |
| LP-V069 | Inédita – Apostila 01 §6 | inédita (concordância com porcentagem) | Regra conferida na apostila 01 §6 |
| LP-V070 | Inédita – Apostila 01 §6 | inédita (concordância nominal) | Regra conferida na apostila 01 §6 |
| LP-V071 | Inédita – Apostila 01 §6 | inédita (concordância nominal – palavras variáveis) | Regra conferida na apostila 01 §6 |
| LP-V072 | Inédita – Apostila 01 §6 | inédita (bastante adjetivo × advérbio) | Regra conferida na apostila 01 §6 |
| LP-V073 | Inédita – Apostila 01 §6 | inédita (regência verbal) | Regra conferida na apostila 01 §6 |
| LP-V074 | Inédita – Apostila 01 §6 | inédita (regência verbal – assinale a incorreta) | Regra conferida na apostila 01 §6 |
| LP-V075 | Inédita – Apostila 01 §6 | inédita (regência com relativos) | Regra conferida na apostila 01 §6 |
| LP-V076 | Inédita – Apostila 01 §6 | inédita (regência nominal) | Regra conferida na apostila 01 §6 |
| LP-V077 | LP-0105 (Variação de Apostila 01 §15 – Q1) | voz passiva com outro tempo composto (futuro do presente composto) | Regra conferida na apostila 01 §15 |
| LP-V078 | LP-0105 (Variação de Apostila 01 §15 – Q1) | sentido inverso: da passiva analítica para a ativa | Regra conferida na apostila 01 §15 |
| LP-V079 | Inédita – Apostila 01 §15 | inédita (identificação da voz passiva sintética) | Regra conferida na apostila 01 §15 |
| LP-V080 | Inédita – Apostila 01 §6 | inédita (concordância com o pronome se) | Regra conferida na apostila 01 §6 |
| LP-V081 | LP-0106 (Variação de Apostila 01 §15 – Q2) | lacunas: futuro do subjuntivo + futuro do presente | Regra conferida na apostila 01 §15 |
| LP-V082 | LP-0106 (Variação de Apostila 01 §15 – Q2) | novas frases (pretérito + imperfeito do subjuntivo; "caso" + futuro) | Regra conferida na apostila 01 §15 |
| LP-V083 | LP-0107 (Variação de Apostila 01 §15 – Q3) | plural de compostos com pares de palavras | Regra conferida na apostila 01 §15 |
| LP-V084 | Inédita – Apostila 01 §15 | inédita (plural dos nomes em -ão) | Regra conferida na apostila 01 §15 |
| LP-V085 | LP-0108 (Variação de Apostila 01 §15 – Q4) | outros derivados de ver/ter/vir/haver | Regra conferida na apostila 01 §15 |
| LP-V086 | LP-0108 (Variação de Apostila 01 §15 – Q4) | formato invertido (assinale a forma incorreta) | Regra conferida na apostila 01 §15 |
| LP-V087 | LP-0109 (Variação de Apostila 01 §15 – Q5) | outros adjetivos com superlativo erudito | Regra conferida na apostila 01 §15 |
| LP-V088 | LP-0110 (Variação de Apostila 01 §15 – Q6) | mesma estrutura com conectivo causal | Regra conferida na apostila 01 §6 |
| LP-V089 | Inédita – Apostila 01 §6 | inédita (classificação de oração adverbial) | Regra conferida na apostila 01 §6 |
| LP-V090 | Inédita – Apostila 01 §6 | inédita (coordenada conclusiva → subordinada causal) | Regra conferida na apostila 01 §6 |
| LP-V091 | LP-0112 (Variação de Apostila 01 §15 – Q8) | C/E convertida em múltipla escolha (datação pelo contexto) | Regra conferida na apostila 01 §15 |
| LP-V092 | LP-0113 (Variação de Apostila 01 §15 – Q9) | C/E convertida em múltipla escolha (outros substantivos de gênero vacilante) | Regra conferida na apostila 01 §15 |
| LP-V093 | Inédita – Apostila 01 §1 | inédita (texto curto novo) | Regra conferida na apostila 01 §1 |
| LP-V094 | Inédita – Apostila 01 §1 | inédita (pressuposto marcado por advérbio) | Regra conferida na apostila 01 §1 |

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
| ATU-V001 | ATU-0001 (Variação de Banestes 2021 (FGV) – Q17) | mesma ideia (segmentos do SFN) cobrada pela característica da intermediação | Conferido na apostila 03 §1 (revisão nov/2026) |
| ATU-V002 | ATU-0033 (Variação de Apostila 03 §1 – Q4) | C/E convertida em múltipla escolha (primário × secundário com caso) | Conferido na apostila 03 §1 (revisão nov/2026) |
| ATU-V003 | ATU-0007 (Variação de Banestes 2021 (FGV) – Q24) | mesma estrutura em três camadas, segmento da previdência fechada | Conferido na apostila 03 §1 (revisão nov/2026) |
| ATU-V004 | ATU-0007 (Variação de Banestes 2021 (FGV) – Q24) | pegadinha clássica: previdência aberta vendida em banco | Conferido na apostila 03 §4 (revisão nov/2026) |
| ATU-V005 | ATU-0035 (Variação de Apostila 03 §2 – Q1) | composição do CMN com distratores de formações antigas | Conferido na apostila 03 §2 (revisão nov/2026) |
| ATU-V006 | ATU-0002 (Variação de Banestes 2021 (FGV) – Q18) | mesma competência com distratores de outros órgãos | Conferido na apostila 03 §3 (revisão nov/2026) |
| ATU-V007 | ATU-0002 (Variação de Banestes 2021 (FGV) – Q18) | funções do BCB cobradas pela descrição | Conferido na apostila 03 §3 (revisão nov/2026) |
| ATU-V008 | ATU-0003 (Variação de Banestes 2021 (FGV) – Q20) | operação de mercado aberto pelo lado contracionista | Conferido na apostila 03 §3 (revisão nov/2026) |
| ATU-V009 | ATU-0003 (Variação de Banestes 2021 (FGV) – Q20) | operação de mercado aberto pelo lado expansionista | Conferido na apostila 03 §3 (revisão nov/2026) |
| ATU-V010 | ATU-0026 (Variação de Simulado FCC 1 – Q31) | pergunta invertida (meta de inflação × meta da Selic) | Conferido na apostila 03 §2 (revisão nov/2026) |
| ATU-V011 | ATU-0029 (Variação de Simulado FCC 1 – Q39) | efeitos da Selic pelo lado da redução | Conferido na apostila 03 §3 (revisão nov/2026) |
| ATU-V012 | ATU-0037 (Variação de Apostila 03 §2 – Q3) | C/E convertida em caso numérico (contagem dos 6 meses consecutivos) | Conferido na apostila 03 §2 (revisão nov/2026); contagem feita em Python |
| ATU-V013 | ATU-0044 (Variação de Apostila 03 §3 – Q5) | C/E convertida em múltipla escolha (regras do mandato) | Conferido na apostila 03 §3 (revisão nov/2026) |
| ATU-V014 | Inédita – Apostila 03 §3 | inédita (funcionamento do Copom) | Conferido na apostila 03 §3 (revisão nov/2026) |
| ATU-V015 | Inédita – Apostila 03 §3 | inédita (decisão recente do Copom – nov/2026) | Conferido na apostila 03 §3 (revisão nov/2026) |
| ATU-V016 | ATU-0011 (Variação de Banestes 2024 (ACCESS) – Q33) | compulsório cobrado por cálculo do multiplicador | Conferido na apostila 03 §3 (revisão nov/2026); conta feita em Python |
| ATU-V017 | ATU-0011 (Variação de Banestes 2024 (ACCESS) – Q33) | efeito qualitativo da alteração do compulsório | Conferido na apostila 03 §3 (revisão nov/2026) |
| ATU-V018 | ATU-0055 (Variação de Apostila 03 §6 – Q1) | mesma regra com Selic abaixo de 8,5% (muda o ramo da regra) | Conferido na apostila 03 §6 (revisão nov/2026); conta feita em Python |
| ATU-V019 | ATU-0012 (Variação de Banestes 2024 (ACCESS) – Q34) | SCD × SEP cobradas pela definição | Conferido na apostila 03 §5 (revisão nov/2026) |
| ATU-V020 | ATU-0012 (Variação de Banestes 2024 (ACCESS) – Q34) | contraste entre tipos de fintech (IP × IF) | Conferido na apostila 03 §5 (revisão nov/2026) |
| ATU-V021 | Inédita – Apostila 03 §5 | inédita (cooperativas de crédito) | Conferido na apostila 03 §5 (revisão nov/2026) |
| ATU-V022 | Inédita – Apostila 03 §6 | inédita (correspondentes) | Conferido na apostila 03 §6 (revisão nov/2026) |
| ATU-V023 | ATU-0013 (Variação de Banestes 2024 (ACCESS) – Q35) | CDI cobrado pela taxa de referência (Selic × DI) | Conferido na apostila 03 §3 (revisão nov/2026) |
| ATU-V024 | ATU-0047 (Variação de Apostila 03 §4 – Q3) | C/E convertida em múltipla escolha (ON × PN) | Conferido na apostila 03 §4 (revisão nov/2026) |
| ATU-V025 | ATU-0017 (Variação de Banestes 2024 (ACCESS) – Q39) | Basileia cobrada pelos pilares | Conferido na apostila 03 §7 (revisão nov/2026) |
| ATU-V026 | ATU-0017 (Variação de Banestes 2024 (ACCESS) – Q39) | Basileia cobrada pela evolução dos acordos | Conferido na apostila 03 §7 (revisão nov/2026) |
| ATU-V027 | Inédita – Apostila 03 §7 | inédita (decomposição do spread) | Conferido na apostila 03 §7 (revisão nov/2026) |
| ATU-V028 | Inédita – Apostila 03 §7 | inédita (medidas de redução do spread – assinale a exceção) | Conferido na apostila 03 §7 (revisão nov/2026) |
| ATU-V029 | Inédita – Apostila 03 §7 | inédita (política fiscal × monetária) | Conferido na apostila 03 §7 (revisão nov/2026) |
| ATU-V030 | Inédita – Apostila 03 §7 | inédita (regra fiscal vigente) | Conferido na apostila 03 §7 (revisão nov/2026) |
| ATU-V031 | ATU-0028 (Variação de Simulado FCC 1 – Q35) | FGC cobrado por caso numérico com produtos não cobertos | Conferido na apostila 03 §6 (revisão nov/2026); conta feita em Python |
| ATU-V032 | ATU-0028 (Variação de Simulado FCC 1 – Q35) | pergunta invertida (produto sem cobertura) | Conferido na apostila 03 §6 (revisão nov/2026) |
| ATU-V033 | ATU-0069 (Variação de Apostila 03 §8 – Q5) | C/E convertida em múltipla escolha (MED × MED 2.0) | Conferido na apostila 03 §8 (revisão nov/2026) |
| ATU-V034 | Inédita – Apostila 03 §8 | inédita (regras gerais do Pix) | Conferido na apostila 03 §8 (revisão nov/2026) |
| ATU-V035 | Inédita – Apostila 03 §8 | inédita (infraestrutura do Pix) | Conferido na apostila 03 §8 (revisão nov/2026) |
| ATU-V036 | Inédita – Apostila 03 §8 | inédita (funcionalidades do Pix) | Conferido na apostila 03 §8 (revisão nov/2026) |
| ATU-V037 | ATU-0025 (Variação de Banestes 2024 (ACCESS) – Q50) | Open Finance cobrado pelas fases de implantação | Conferido na apostila 03 §8 (revisão nov/2026) |
| ATU-V038 | ATU-0027 (Variação de Simulado FCC 1 – Q34) | Open Finance cobrado pelas regras do consentimento | Conferido na apostila 03 §8 (revisão nov/2026) |
| ATU-V039 | Inédita – Apostila 03 §8 | inédita (escala e participação do Open Finance – jul/2026) | Conferido na apostila 03 §8 (revisão nov/2026) |
| ATU-V040 | Inédita – Apostila 03 §8 | inédita (estágio atual do Drex – nov/2026) | Conferido na apostila 03 §8 (revisão nov/2026) |
| ATU-V041 | Inédita – Apostila 03 §8 | inédita (marco dos criptoativos) | Conferido na apostila 03 §8 (revisão nov/2026) |
| ATU-V042 | ATU-0068 (Variação de Apostila 03 §8 – Q4) | conceito de Christensen cobrado por exemplo | Conferido na apostila 03 §8 (revisão nov/2026) |
| ATU-V043 | Inédita – Apostila 03 §8 | inédita (modelos de negócio digitais) | Conferido na apostila 03 §8 (revisão nov/2026) |
| ATU-V044 | Inédita – Apostila 03 §8 | inédita (sandbox regulatório) | Conferido na apostila 03 §8 (revisão nov/2026) |
| ATU-V045 | Inédita – Apostila 03 §17 | inédita (ouvidoria) | Conferido na apostila 03 §17 (revisão nov/2026) |
| ATU-V046 | Inédita – Apostila 03 §17 | inédita (superendividamento) | Conferido na apostila 03 §17 (revisão nov/2026) |
| ATU-V047 | Inédita – Apostila 03 §6 | inédita (limites de encargos) | Conferido na apostila 03 §6 (revisão nov/2026) |
| ATU-V048 | Inédita – Apostila 03 §21 | inédita (ENEF) | Conferido na apostila 03 §21 (revisão nov/2026) |
| ATU-V049 | Inédita – Apostila 03 §17 | inédita (risco climático físico × de transição) | Conferido na apostila 03 §17 (revisão nov/2026) |
| ATU-V050 | Inédita – Apostila 03 §17 | inédita (greenwashing) | Conferido na apostila 03 §17 (revisão nov/2026) |
| ATU-V051 | ATU-0074 (Variação de Apostila 03 §17 – Q7) | C/E convertida em múltipla escolha (estágio 3) | Conferido na apostila 03 §17 (revisão nov/2026) |

## Ética, Compliance e ESG

| id | pai / fonte | tipo de variação | verificação |
|---|---|---|---|
| ETI-V001 | ETI-0003 (Variação de Banestes 2024 (ACCESS) – Q46) | tipo penal da lavagem com distratores de outros crimes financeiros | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V002 | ETI-0006 (Variação de Simulado FCC 1 – Q32) | outra técnica de colocação (compra de bens e mistura com faturamento) | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V003 | ETI-0008 (Variação de Apostila 03 §9 – Q1) | fase cobrada por caso (empréstimo de regresso) | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V004 | ETI-0008 (Variação de Apostila 03 §9 – Q1) | fases cobradas por afirmações conceituais | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V005 | ETI-0009 (Variação de Apostila 03 §9 – Q2) | evolução da lei cobrada pelas gerações | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V006 | ETI-0009 (Variação de Apostila 03 §9 – Q2) | caso concreto com contravenção como antecedente | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V007 | ETI-0010 (Variação de Apostila 03 §9 – Q3) | C/E convertida em múltipla escolha (vedação de tipping off) | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V008 | ETI-0011 (Variação de Apostila 03 §9 – Q4) | sanções do art. 12 cobradas pela exceção | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V009 | ETI-0012 (Variação de Apostila 03 §9 – Q5) | C/E convertida em múltipla escolha (natureza e limites do COAF) | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V010 | ETI-0012 (Variação de Apostila 03 §9 – Q5) | competência do COAF para setores sem regulador | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V011 | ETI-0013 (Variação de Apostila 03 §9 – Q6) | C/E convertida em múltipla escolha (causas de aumento) | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V012 | Inédita – Apostila 03 §9 | inédita (autonomia, dolo e competência) | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V013 | Inédita – Apostila 03 §9 | inédita (colaboração premiada) | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V014 | Inédita – Apostila 03 §9 | inédita (acesso a dados cadastrais) | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V015 | Inédita – Apostila 03 §9 | inédita (contexto internacional) | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V016 | Inédita – Apostila 03 §9 | inédita (pessoas obrigadas) | Conferido na apostila 03 §9 (revisão nov/2026) |
| ETI-V017 | Inédita – Apostila 03 §9 | inédita (prazo de guarda de registros) | Conferido na apostila 03 §9 (revisão nov/2026) e §10 |
| ETI-V018 | ETI-0007 (Variação de Simulado FCC 1 – Q33) | comunicação ao COAF cobrada pelos prazos da Circular | Conferido na apostila 03 §10 (revisão nov/2026) |
| ETI-V019 | ETI-0014 (Variação de Apostila 03 §10 – Q1) | AIR cobrada pelos perfis e pela periodicidade | Conferido na apostila 03 §10 (revisão nov/2026) |
| ETI-V020 | ETI-0015 (Variação de Apostila 03 §10 – Q2) | PEP cobrado por caso (prazo de 5 anos) | Conferido na apostila 03 §10 (revisão nov/2026) |
| ETI-V021 | ETI-0015 (Variação de Apostila 03 §10 – Q2) | PEP cobrado pelo conceito de familiar | Conferido na apostila 03 §10 (revisão nov/2026) |
| ETI-V022 | ETI-0016 (Variação de Apostila 03 §10 – Q3) | comunicação automática cobrada por caso com valores | Conferido na apostila 03 §10 (revisão nov/2026); valores comparados com os limites |
| ETI-V023 | ETI-0016 (Variação de Apostila 03 §10 – Q3) | C/E convertida em múltipla escolha (carteiras autocustodiadas) | Conferido na apostila 03 §10 (revisão nov/2026) |
| ETI-V024 | ETI-0017 (Variação de Apostila 03 §10 – Q4) | beneficiário final cobrado pelo percentual máximo | Conferido na apostila 03 §10 (revisão nov/2026) |
| ETI-V025 | ETI-0018 (Variação de Apostila 03 §10 – Q5) | C/E convertida em múltipla escolha (ABR) | Conferido na apostila 03 §10 (revisão nov/2026) |
| ETI-V026 | Inédita – Apostila 03 §10 | inédita (etapas do KYC) | Conferido na apostila 03 §10 (revisão nov/2026) |
| ETI-V027 | Inédita – Apostila 03 §10 | inédita (provisionamento de saque em espécie) | Conferido na apostila 03 §10 (revisão nov/2026) |
| ETI-V028 | Inédita – Apostila 03 §10 | inédita (avaliação de efetividade) | Conferido na apostila 03 §10 (revisão nov/2026) |
| ETI-V029 | Inédita – Apostila 03 §10 | inédita (indícios de lavagem) | Conferido na apostila 03 §10 (revisão nov/2026) |
| ETI-V030 | Inédita – Apostila 03 §10 | inédita (política de PLD/FT) | Conferido na apostila 03 §10 (revisão nov/2026) |
| ETI-V031 | ETI-0019 (Variação de Apostila 03 §11 – Q1) | gestão fraudulenta × temerária com as penas | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V032 | ETI-0020 (Variação de Apostila 03 §11 – Q2) | pergunta invertida (o que viola o sigilo) | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V033 | ETI-0021 (Variação de Apostila 03 §11 – Q3) | C/E convertida em múltipla escolha (evasão de divisas) | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V034 | ETI-0022 (Variação de Apostila 03 §11 – Q4) | acesso aos dados por outro órgão (Fisco × CPI) | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V035 | ETI-0023 (Variação de Apostila 03 §11 – Q5) | C/E convertida em caso (eliminação × guarda obrigatória) | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V036 | Inédita – Apostila 03 §11 | inédita (operar instituição sem autorização) | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V037 | Inédita – Apostila 03 §11 | inédita (ação penal e competência) | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V038 | Inédita – Apostila 03 §11 | inédita (dado sensível) | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V039 | Inédita – Apostila 03 §11 | inédita (controlador × operador) | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V040 | Inédita – Apostila 03 §11 | inédita (sanções da LGPD) | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V041 | Inédita – Apostila 03 §11 | inédita (revisão de decisão automatizada) | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V042 | Inédita – Apostila 03 §11 | inédita (bases legais da LGPD) | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V043 | Inédita – Apostila 03 §11 | inédita (caso de TI) | Conferido na apostila 03 §11 (revisão nov/2026) e §12 |
| ETI-V044 | Inédita – Apostila 03 §11 | inédita (incidente de segurança) | Conferido na apostila 03 §11 (revisão nov/2026) |
| ETI-V045 | ETI-0001 (Variação de Banestes 2021 (FGV) – Q16) | mesmo princípio com distratores de outros princípios do Guia | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V046 | ETI-0001 (Variação de Banestes 2021 (FGV) – Q16) | abrangência do Guia (enunciado da questão-pai virou o foco) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V047 | ETI-0024 (Variação de Apostila 03 §12 – Q1) | outro princípio (idoneidade) com distratores próximos | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V048 | ETI-0025 (Variação de Apostila 03 §12 – Q2) | par temperança × tolerância pelo lado inverso | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V049 | Inédita – Apostila 03 §12 | inédita (sigilo × discrição) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V050 | ETI-0026 (Variação de Apostila 03 §12 – Q3) | C/E convertida em caso (conivência) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V051 | ETI-0027 (Variação de Apostila 03 §12 – Q4) | regra de presentes cobrada por caso com soma no ano civil | Conferido na apostila 03 §12 (revisão nov/2026); soma conferida em Python |
| ETI-V052 | ETI-0028 (Variação de Apostila 03 §12 – Q5) | C/E convertida em múltipla escolha (composição paritária) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V053 | ETI-0028 (Variação de Apostila 03 §12 – Q5) | Conselho cobrado pelas regras de mandato e deliberação | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V054 | ETI-0029 (Variação de Apostila 03 §12 – Q6) | caso de favoritismo (variação do nepotismo) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V055 | ETI-0005 (Variação de Banestes 2024 (ACCESS) – Q49) | Conselho cobrado pelas atribuições e canais | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V056 | Inédita – Apostila 03 §12 | inédita (cyberbullying) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V057 | Inédita – Apostila 03 §12 | inédita (conflito de interesses) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V058 | Inédita – Apostila 03 §12 | inédita (hierarquia) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V059 | Inédita – Apostila 03 §12 | inédita (relacionamento com clientes e imprensa) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V060 | Inédita – Apostila 03 §12 | inédita (Título II do Guia) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V061 | Inédita – Apostila 03 §12 | inédita (administração financeira pessoal) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V062 | Inédita – Apostila 03 §12 | inédita (ética × moral) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V063 | Inédita – Apostila 03 §12 | inédita (valores institucionais) | Conferido na apostila 03 §12 (revisão nov/2026) |
| ETI-V064 | ETI-0030 (Variação de Apostila 03 §17 – Q5) | Lei Anticorrupção cobrada por caso com multa e integridade | Conferido na apostila 03 §17 (revisão nov/2026) |
| ETI-V065 | ETI-0030 (Variação de Apostila 03 §17 – Q5) | Lei Anticorrupção cobrada pela leniência | Conferido na apostila 03 §17 (revisão nov/2026) |
| ETI-V066 | ETI-0031 (Variação de Apostila 03 §17 – Q6) | três linhas cobradas pela primeira linha | Conferido na apostila 03 §17 (revisão nov/2026) |
| ETI-V067 | ETI-0035 (Variação de Apostila 03 §21 – Q3) | três linhas cobradas pelo papel da auditoria | Conferido na apostila 03 §21 (revisão nov/2026) |
| ETI-V068 | ETI-0032 (Variação de Apostila 03 §17 – Q8) | dimensões do ESG (pai cobrava risco de transição) | Conferido na apostila 03 §17 (revisão nov/2026) e §21 |
| ETI-V069 | ETI-0033 (Variação de Apostila 03 §21 – Q1) | C/E convertida em múltipla escolha (ODS) | Conferido na apostila 03 §21 (revisão nov/2026) |
| ETI-V070 | ETI-0034 (Variação de Apostila 03 §21 – Q2) | outra norma do quadro (canal de denúncias) | Conferido na apostila 03 §21 (revisão nov/2026) |
| ETI-V071 | Inédita – Apostila 03 §17 | inédita (política de conformidade) | Conferido na apostila 03 §17 (revisão nov/2026) |
| ETI-V072 | Inédita – Apostila 03 §17 | inédita (controles internos) | Conferido na apostila 03 §17 (revisão nov/2026) |
| ETI-V073 | Inédita – Apostila 03 §21 | inédita (princípios do IBGC) | Conferido na apostila 03 §21 (revisão nov/2026) |
| ETI-V074 | Inédita – Apostila 03 §21 | inédita (conflito de interesses – caso) | Conferido na apostila 03 §21 (revisão nov/2026) |
| ETI-V075 | Inédita – Apostila 03 §17 | inédita (pilares do programa de integridade) | Conferido na apostila 03 §17 (revisão nov/2026) |
| ETI-V076 | Inédita – Apostila 03 §17 | inédita (controle interno de TI) | Conferido na apostila 03 §17 (revisão nov/2026) |
| ETI-V077 | Inédita – Apostila 03 §17 | inédita (PRSAC) | Conferido na apostila 03 §17 (revisão nov/2026) |
| ETI-V078 | ETI-0032 (Variação de Apostila 03 §17 – Q8) | risco de transição cobrado por caso | Conferido na apostila 03 §17 (revisão nov/2026) |
| ETI-V079 | Inédita – Apostila 03 §21 | inédita (sigla ESG) | Conferido na apostila 03 §21 (revisão nov/2026) |
| ETI-V080 | Inédita – Apostila 03 §17 | inédita (Lei das Estatais) | Conferido na apostila 03 §17 (revisão nov/2026) |

## Observações sobre questões importadas

- ATU-0011 (Banestes 2024, Q33): o gabarito oficial (D) descreve o compulsório como "reservas de emergência" que as instituições usam em crises "a critério do Banco Central". A apostila 03 §3.6 apresenta o compulsório sobretudo como instrumento de controle da liquidez (reduz o multiplicador). A questão importada não foi alterada; as variações ATU (compulsório) cobram a visão da apostila.
- Questões de prova importadas de Atualidades (ATU-0001 a ATU-0025) estão com `comentario` vazio. As variações geradas a partir delas trazem comentário completo. ATU-0004, ATU-0005, ATU-0010 e ATU-0021 estão anuladas e não foram usadas como pai.
- Questões de prova importadas de Ética (ETI-0001 a ETI-0005) estão com `comentario` vazio; as variações geradas a partir delas trazem comentário completo.
- ETI-0004 (Banestes 2024, Q48 – "consciência ambiental" e os 4 Rs) cobra trecho literal do Guia que não está descrito na apostila 03 §12; por isso não foi usada como pai. Vale conferir no texto oficial do Guia.
