# -*- coding: utf-8 -*-
"""Prova real: Banestes 2023 – Técnico Bancário (FGV), tipo 1, aplicada em 05/03/2023.

Transcrita do caderno tipo 1 (cnm201-tecnico-bancariocnm201-tipo-1.pdf) e do gabarito definitivo
(retificado em 03/04/2023; banestes-gabaritos-definitivos_0.pdf). Duração da prova: 4 horas.
Anuladas: 4, 16, 43 e 46. Ordem e letras originais.
"""
from comum import PQ

INFO = {"id": "banestes-2023-tb", "nome": "Banestes 2023 – Técnico Bancário (FGV)"}

TEXTOS = []

FIG = "A figura/quadro da prova não pôde ser extraída do PDF (só o texto); gabarito oficial mantido."

PROVA = [
# ---------------------------------------------------------------- Língua Portuguesa (1–12)
PQ(1, "LP", "Tipos e gêneros textuais",
   "Assinale o segmento textual abaixo que deve ser incluído entre os textos normativos.",
   {"A": "Gastos públicos podem também significar investimentos e não desperdício.",
    "B": "Todos os militares estão obrigados a respeitar os superiores.",
    "C": "Os caminhões foram amontoando-se na estrada até fecharem completamente o trânsito.",
    "D": "Todos estavam preocupados diante da ação policial, que costumava ser forte e rápida.",
    "E": "As ordens judiciais devem ser obedecidas."},
   "E",
   """**Gabarito: E.** Texto normativo (injuntivo/prescritivo) é o que **prescreve** uma conduta, ordenando o que deve ser feito: "As ordens judiciais **devem ser** obedecidas" é uma norma, com o verbo *dever* indicando obrigação.

- (A) é uma opinião, típica do texto argumentativo (defende que gasto público pode ser investimento).
- (B) **constata** uma situação ("estão obrigados"), informando um fato sobre os militares; a banca a tratou como descritiva/informativa, e não como a norma em si. É a distratora mais forte: o gabarito do cargo foi retificado em 2023 justamente nas questões 1 e 4.
- (C) narra uma sequência de ações no tempo (texto narrativo).
- (D) descreve um estado de espírito e um hábito passado (narrativo-descritivo).""",
   dif=2, obs="Questão citada no comunicado de retificação do gabarito definitivo (31/03/2023); vale o gabarito retificado (E)."),

PQ(2, "LP", "Classes de palavras",
   """Na descrição de uma paisagem, o autor do texto empregou os seguintes pares de palavras:

céu azul, mar agitado, aves ruidosas, ruído agradável, águas cálidas, atmosfera barroca, nuvens densas.

Entre todos os adjetivos empregados, os dois que pertencem a um grupo diferente dos demais, são""",
   {"A": "céu azul / mar agitado.",
    "B": "aves ruidosas / ruído agradável.",
    "C": "atmosfera barroca / nuvens densas.",
    "D": "ruído agradável / atmosfera barroca.",
    "E": "águas cálidas / aves ruidosas."},
   "D",
   """**Gabarito: D.** A maioria dos adjetivos é **objetiva**: indica características perceptíveis e verificáveis pelos sentidos (azul, agitado, ruidosas, cálidas, densas). Já **agradável** e **barroca** são **subjetivos/avaliativos**: exprimem uma impressão ou interpretação do observador ("agradável" é um julgamento pessoal; "atmosfera barroca" é uma caracterização figurada, opinativa).

- (A) azul e agitado são objetivos.
- (B) ruidosas é objetivo; só agradável é subjetivo.
- (C) densas é objetivo; só barroca é subjetivo.
- (E) cálidas e ruidosas são objetivos.""",
   dif=2),

PQ(3, "LP", "Tipos e gêneros textuais",
   """Os livros didáticos ensinam que os textos dissertativos discutem um tema, defendem uma opinião, contrariam uma ideia oposta, fornecem informações etc.

Assinale a frase que se estrutura pela oposição a um outro pensamento ou opinião.""",
   {"A": "Gastos públicos podem também significar investimentos e não desperdício.",
    "B": "Como diz a sabedoria popular, mais vale a quem Deus ajuda do que quem cedo madruga.",
    "C": "Economize para o futuro!",
    "D": "Uma única vela pode acender outras mil sem perder a sua força.",
    "E": "Amar profundamente em uma direção nos torna mais amorosos em todas as outras."},
   "A",
   """**Gabarito: A.** A frase se opõe explicitamente à ideia corrente de que gasto público é desperdício: "podem **também** significar investimentos **e não desperdício**". A negação de uma opinião contrária estrutura o argumento.

- (B) apenas cita um provérbio como argumento de autoridade (sabedoria popular), sem se construir contra outra opinião (aliás, ela reproduz um ditado já existente).
- (C) é um conselho/ordem (texto injuntivo).
- (D) e (E) são afirmações de tom aforístico que apresentam uma tese, mas não refutam um pensamento oposto.""",
   dif=2),

PQ(4, "LP", "Coesão, coerência e conectivos",
   """Em todas as frases abaixo há exemplos de coesão textual.

Assinale a frase em que a coesão é realizada por meio de uma forma pronominal.""",
   {"A": "Maria e Augusta estiveram na festa, mas nenhuma comentou os acontecimentos.",
    "B": "O menino falou alto, mas a menina não fez o mesmo.",
    "C": "O professor viajou muitas vezes, mas o diretor, nunca.",
    "D": "Comprou o livro, mas o livro não o atraiu tanto.",
    "E": "José estava atraído pela carreira médica, mas os amigos o fizeram mudar de ideia."},
   "ANULADA",
   """**Questão anulada** no gabarito definitivo.

Motivo provável: há **mais de uma** frase com coesão por forma pronominal. Em (A), o pronome indefinido **nenhuma** retoma "Maria e Augusta"; em (D), o pronome oblíquo **o** ("não **o** atraiu") retoma o sujeito oculto de "comprou"; em (E), **o** ("**o** fizeram mudar") retoma José. Em (B), "o mesmo" também funciona como forma pronominal substituindo "falar alto". Só (C) usa claramente outro mecanismo (elipse do verbo: "o diretor, [viajou] nunca"). Com várias respostas possíveis, a anulação era inevitável.""",
   dif=2, anulada=True, obs="Anulada no gabarito definitivo retificado (03/04/2023)."),

PQ(5, "LP", "Coesão, coerência e conectivos",
   """"É natural que os franceses considerem suas trufas as melhores, com uma teimosia própria dos compatriotas de Charles de Gaulle. Todo aquele versado na matéria sabe que o tartufo branco italiano, natural do país, é muito superior àquelas".

Nessa frase, dois termos que mantêm relações de coesão, são""",
   {"A": "teimosia / matéria.",
    "B": "àquelas / compatriotas.",
    "C": "franceses / compatriotas de Charles de Gaulle.",
    "D": "país / franceses.",
    "E": "natural / aquele."},
   "C",
   """**Gabarito: C.** "Compatriotas de Charles de Gaulle" é uma expressão que **retoma** "franceses" (coesão lexical por expressão equivalente/perífrase: De Gaulle era francês).

- (A) "matéria" retoma o assunto (trufas), não "teimosia".
- (B) "àquelas" retoma "trufas" (as trufas francesas), não "compatriotas".
- (D) "país" refere-se à Itália (o tartufo é natural do país = italiano), não aos franceses.
- (E) "natural" (adjetivo, "é natural que") e "aquele" (pessoa versada) não se referem um ao outro.""",
   dif=2),

PQ(6, "LP", "Interpretação e compreensão de textos",
   "De todas as notícias de jornais abaixo transcritas, assinale aquela que mostra uma inferência adequada.",
   {"A": "Houve um pequeno tremor de terra no Chile / os vinhos chilenos vão ter o preço reduzido.",
    "B": "Haverá eleição no próximo domingo / o candidato eleito vai ter o apoio do Congresso.",
    "C": "O combustível vai subir de preço / o preço dos veículos vai despencar.",
    "D": "O passageiro transportava seu computador / o passageiro estava com seu trabalho atrasado.",
    "E": "O motorista comprou novos óculos / óculos velhos trazem problemas de vários tipos."},
   "E",
   """**Gabarito: E.** Inferência adequada é a conclusão autorizada pelo enunciado. Se o motorista comprou óculos novos, é razoável inferir que os velhos lhe traziam algum problema (grau, desgaste, quebra), ou seja, "óculos velhos trazem problemas".

- (A) um tremor pequeno não permite concluir redução de preço dos vinhos (se algo, seria o contrário).
- (B) nada na notícia indica que o eleito terá apoio do Congresso.
- (C) a alta do combustível não leva necessariamente à queda forte ("despencar") do preço dos veículos.
- (D) carregar o computador não implica trabalho atrasado.""",
   dif=1),

PQ(7, "LP", "Coesão, coerência e conectivos",
   """As frases abaixo foram retiradas de para-choques de caminhões.

Assinale a frase que é acompanhada da causa adequada dessa frase, que dá coerência a ela.""",
   {"A": "Sou filho do dono do mundo / é filho de alguém muito rico.",
    "B": "Graças a Deus que só um dos candidatos pode ganhar! / caso contrário, após as eleições, continuariam brigando.",
    "C": "Os direitos do homem são três: ver, ouvir e calar / o homem tem autoridade fora de sua casa.",
    "D": "Seja realista, exija o impossível / declaração de apoio à monarquia.",
    "E": "Quem sabe sobe / o estudo e a cultura são fontes de progresso."},
   "E",
   """**Gabarito: E.** "Quem sabe sobe" se explica porque o conhecimento (estudo, cultura) leva ao progresso, à ascensão: a causa apresentada dá coerência à frase.

- (A) "dono do mundo" é Deus; a frase afirma ser filho de Deus, não de alguém rico.
- (B) o humor da frase está em que, se todos ganhassem, todos governariam (seria pior), e não em brigas pós-eleição.
- (C) a frase ironiza a falta de autoridade do homem (em casa só pode ver, ouvir e calar); a "causa" diz o oposto.
- (D) é um lema libertário (maio de 1968), sem relação com apoio à monarquia.""",
   dif=2),

PQ(8, "LP", "Formação de palavras e vocabulário",
   """Um aluno do ensino fundamental decidiu dar voz aos animais que estavam presentes em sua redação.

Assinale a opção em que o verbo utilizado está adequado ao nome do animal.""",
   {"A": "a galinha balia.",
    "B": "o peru bramia.",
    "C": "o lobo uivava.",
    "D": "a vaca rosnava.",
    "E": "o cavalo silvava."},
   "C",
   """**Gabarito: C.** O lobo **uiva**.

- (A) a galinha **cacareja**; quem bale é a ovelha/cabra.
- (B) o peru **gorgoleja/grugulha**; bramir é de feras como o tigre ou o veado.
- (D) a vaca **muge**; quem rosna é o cão.
- (E) o cavalo **relincha**; silvar é da serpente.""",
   dif=1),

PQ(9, "LP", "Tipos e gêneros textuais",
   """Veja a seguinte descrição:

"Fábio é um rapaz bonito: cabelo louro esvoaçante, esteticamente desgrenhado, olhos claros sobre um nariz afilado, lábios finos, tórax largo, cintura estreita e pernas alongadas, numa figura que em nada faz adivinhar sua bondade interior".

Sobre a estratégia descritiva desse texto, assinale a afirmativa correta.""",
   {"A": "As características fornecidas são todas do aspecto físico.",
    "B": "A descrição segue o plano do todo para as partes.",
    "C": "A estrutura descritiva vai de longe para perto.",
    "D": "A descrição mostra traços positivos e negativos de Fábio.",
    "E": "O personagem é descrito no tempo passado."},
   "B",
   """**Gabarito: B.** O texto começa por uma impressão geral do **todo** ("um rapaz bonito") e em seguida detalha as **partes** (cabelo, olhos, nariz, lábios, tórax, cintura, pernas).

- (A) falso: "bondade interior" é traço psicológico.
- (C) não há movimento de distância; a ordem é de cima para baixo (cabeça aos pés).
- (D) todos os traços citados são positivos (beleza, bondade).
- (E) os verbos estão no presente ("é", "faz").""",
   dif=2),

PQ(10, "LP", "Coesão, coerência e conectivos",
   "Assinale a opção com duas ações em sequência que mostram uma relação de causa e consequência.",
   {"A": "João olhou o cartaz e teve vontade de ir ao cinema.",
    "B": "Choveu durante a noite e as ruas ficaram alagadas.",
    "C": "Cada vez que via as fotos, começava a chorar.",
    "D": "Viu a paisagem e lembrou-se da cidade onde nascera.",
    "E": "Jogou na loteria e imaginou o que faria com aquela fortuna."},
   "B",
   """**Gabarito: B.** A chuva (causa) produziu, de forma objetiva e necessária, o alagamento das ruas (consequência).

- (A), (C) e (D): a primeira ação apenas **motiva** ou **desperta** uma reação subjetiva (vontade, choro, lembrança); é antes uma relação de estímulo/ocasião, que não decorre necessariamente do fato.
- (E): jogar na loteria não causa a fortuna; "imaginou" é uma ação posterior, sem relação causal real (ele nem ganhou).""",
   dif=2),

PQ(11, "LP", "Tipos e gêneros textuais",
   """Analise o texto a seguir:

"A rua estava cheia de gente, pois havia um festival de cinema na pequena cidade. Via-se logo que se tratava de pessoas que não conheciam o local. Entre esses visitantes, um estacionou o seu carro diante da porta da minha garagem. Tentei chamá-lo, mas o perdi no meio da aglomeração. Telefonei para a polícia local, mas não havia viatura disponível. Perdoei o transgressor mentalmente e fui dormir".

O segmento que serve de marco inicial da narrativa é:""",
   {"A": "A rua estava cheia de gente.",
    "B": "havia um festival de cinema na pequena cidade.",
    "C": "se tratava de pessoas que não conheciam o local.",
    "D": "um estacionou o seu carro diante da porta da minha garagem.",
    "E": "Tentei chamá-lo."},
   "D",
   """**Gabarito: D.** As três primeiras frases são **descritivas/explicativas** (situação inicial: rua cheia, festival, pessoas de fora). A narrativa propriamente dita, a sequência de ações, começa com o fato que desencadeia a história: um visitante **estacionou** diante da garagem. Daí decorrem as ações seguintes (tentei chamá-lo, telefonei, perdoei).

- (A), (B) e (C) são descrição do cenário, sem ação que dê início ao enredo.
- (E) já é a reação do narrador ao fato inicial.""",
   dif=2),

PQ(12, "LP", "Classes de palavras",
   "Assinale a frase abaixo em que o vocábulo **menos** mostra uma classe gramatical diferente das demais.",
   {"A": "O candidato estava com menos disposição para o estudo.",
    "B": "Os operários trabalham menos a cada ano.",
    "C": "Os atletas treinaram menos para essa prova.",
    "D": "Meus filhos sempre leram menos que os primos.",
    "E": "Os estrangeiros sempre se mostraram menos animados."},
   "A",
   """**Gabarito: A.** Em "menos **disposição**", *menos* acompanha um substantivo e o determina (indica quantidade): funciona como **pronome indefinido** (adjetivo).

Nas demais, *menos* é **advérbio de intensidade**: modifica verbos em (B) "trabalham menos", (C) "treinaram menos" e (D) "leram menos", e modifica o adjetivo "animados" em (E).""",
   dif=2),

# ---------------------------------------------------------------- Raciocínio Lógico-Matemático (13–25)
PQ(13, "MAT", "Razão, proporção, regra de três e medidas",
   """Sílvio foi de carro de Cachoeiro de Itapemirim até Vitória passando por Guarapari. Ele deu início a sua viagem às 6h13min e chegou ao seu destino às 8h48min.

Se o tempo gasto no trajeto de Guarapari até Vitória é 2/3 do tempo consumido de Cachoeiro de Itapemirim até Guarapari, conclui-se que Sílvio chegou a Guarapari às""",
   {"A": "6h44min.", "B": "7h15min.", "C": "7h31min.", "D": "7h46min.", "E": "7h50min."},
   "D",
   """**Gabarito: D.** Tempo total: 8h48 − 6h13 = 2h35min = **155 min**.

Seja x o tempo Cachoeiro→Guarapari; o trecho seguinte dura 2x/3. Então x + 2x/3 = 155 → 5x/3 = 155 → **x = 93 min** = 1h33min.

Chegada a Guarapari: 6h13 + 1h33 = **7h46min**. (Confere: o restante, 62 min = 2/3 de 93, leva até 8h48.)

- (A) 6h44 corresponderia a 31 min; (B), (C) e (E) não satisfazem a razão 2/3 (ex.: 7h50 daria 97 min e 58 min).""",
   dif=1),

PQ(14, "MAT", "Porcentagem",
   """Uma caixa continha apenas bolas pretas e brancas. 80% das bolas eram pretas. Foram então retiradas da caixa 5 bolas de cada cor, o que fez com que a porcentagem de bolas pretas remanescentes em seu interior subisse para 87,5%.

Com base nessas informações, pode-se afirmar que, antes da retirada, o número de bolas brancas na caixa estava entre""",
   {"A": "4 e 14.", "B": "14 e 24.", "C": "24 e 34.", "D": "34 e 44.", "E": "44 e 54."},
   "A",
   """**Gabarito: A.** Se há b brancas, há 4b pretas (80% pretas ⇔ pretas = 4 × brancas).

Depois: pretas = 4b − 5 e brancas = b − 5. Como 87,5% = 7/8, as pretas são 7 vezes as brancas:
4b − 5 = 7(b − 5) → 4b − 5 = 7b − 35 → 3b = 30 → **b = 10**.

Havia 10 brancas (e 40 pretas): 10 está entre 4 e 14. Conferência: restam 35 pretas e 5 brancas; 35/40 = 87,5%. As demais faixas não contêm 10.""",
   dif=2),

PQ(15, "MAT", "Geometria, plano cartesiano e matrizes",
   """A figura ilustra um hexágono convexo obtido a partir de dois cortes retilíneos sobre um quadrado de lado 7 cm.

[Figura: quadrado de lado 7 cm com dois cantos cortados por segmentos retos, formando um hexágono; as medidas dos cortes aparecem só no desenho, que não pôde ser transcrito.]

Se cada um desses cortes começou e terminou em pontos pertencentes a lados do quadrado, a área desse hexágono, em cm2, mede""",
   {"A": "34.", "B": "34,5.", "C": "35.", "D": "36,5.", "E": "37."},
   "E",
   """**Gabarito: E.** Cortar dois cantos do quadrado retira dois triângulos retângulos. Área do quadrado: 7² = 49 cm². Área do hexágono = 49 − (soma das áreas dos dois triângulos, cada uma = cateto × cateto ÷ 2). Pelo gabarito oficial, os dois triângulos somam 12 cm², e a área é 49 − 12 = **37 cm²**.

As medidas dos catetos só aparecem no desenho, que não pôde ser transcrito; as demais alternativas corresponderiam a retirar 15; 14,5; 14 ou 12,5 cm².""",
   dif=2, tags=["figura-ausente"], obs=FIG + " As medidas dos cortes só aparecem no desenho."),

PQ(16, "MAT", "Lógica proposicional, equivalências e negações",
   """Marcelinho disse a sua mãe: "Eu já fiz o dever de casa ou não lavei a louça".

Se Marcelinho mentiu, é correto concluir que ele""",
   {"A": "fez o dever de casa e lavou a louça.",
    "B": "fez o dever de casa ou lavou a louça.",
    "C": "não fez o dever de casa ou lavou a louça.",
    "D": "não fez o dever de casa e lavou a louça.",
    "E": "não fez o dever de casa e não lavou a louça."},
   "ANULADA",
   """**Questão anulada** no gabarito definitivo.

Pela lógica formal, se a disjunção "p ou ~q" é falsa, as duas partes são falsas: ~(p ∨ ~q) ≡ ~p ∧ q, isto é, "**não** fez o dever de casa **e** lavou a louça", que é a alternativa (D) (e era a resposta esperada).

Motivo provável da anulação: o advérbio **"já"** ("já fiz") altera o sentido da negação ("ainda não fez" não equivale exatamente a "não fez"), e nenhuma alternativa reproduz essa nuance. Para estudo, guarde a regra de De Morgan: negar "A ou B" dá "não A e não B".""",
   dif=1, anulada=True, obs="Anulada no gabarito definitivo; a resposta pela regra de De Morgan seria D."),

PQ(17, "MAT", "Conjuntos e diagramas de Venn",
   """Um material didático usado para ensinar crianças sobre sólidos é composto por 30 peças entre esferas, cubos e cilindros. Cada uma dessas peças tem cor única. A distribuição de peças e cores é apresentada no quadro a seguir.

[Quadro: quantidade de esferas, cubos e cilindros de cada cor (incluindo vermelho); os números não puderam ser transcritos.]

A quantidade de peças que não são vermelhas ou são cilindros é""",
   {"A": "19.", "B": "20.", "C": "23.", "D": "24.", "E": "27."},
   "B",
   """**Gabarito: B.** "Não vermelhas **ou** cilindros" é o complemento de "vermelhas **e** não cilindros". Assim, a resposta é 30 − (esferas vermelhas + cubos vermelhos). Pelo gabarito oficial (20), o quadro tem 10 peças vermelhas que não são cilindros: 30 − 10 = **20**.

Erros comuns: contar só as não vermelhas (esquecendo os cilindros vermelhos) ou somar as não vermelhas aos cilindros sem descontar a interseção (contagem dupla).""",
   dif=2, tags=["figura-ausente"], obs=FIG + " O quadro com a distribuição por cor não foi extraído; a explicação parte do gabarito oficial."),

PQ(18, "MAT", "Geometria, plano cartesiano e matrizes",
   """A figura ilustra duas peças planas idênticas formadas, cada uma, pela junção de três quadrados.

[Figura: duas peças iguais formadas por três quadrados unidos (triminós); as cinco alternativas são desenhos de figuras planas.]

Diversas novas figuras planas podem ser criadas por intermédio da união dessas peças sem que elas sejam sobrepostas.

Assinale a opção que apresenta uma forma plana que **não** pode ser criada nessas condições.""",
   {"A": "[Figura da alternativa A]", "B": "[Figura da alternativa B]", "C": "[Figura da alternativa C]",
    "D": "[Figura da alternativa D]", "E": "[Figura da alternativa E]"},
   "C",
   """**Gabarito: C.** Cada forma possível tem 6 quadrados e deve poder ser dividida em duas cópias da peça (que podem ser giradas ou espelhadas). Segundo o gabarito oficial, a forma da alternativa (C) é a única que não pode ser dividida assim; as outras quatro admitem a divisão.

As alternativas são só desenhos, que não puderam ser transcritos; para treinar, desenhe as duas peças e tente montar cada forma.""",
   dif=2, tags=["figura-ausente"], obs=FIG + " Alternativas são só desenhos."),

PQ(19, "MAT", "Números, frações, equações e problemas",
   """Alguns dos números que podem ser escritos na forma de fração apresentam periodicidade quando representados na forma decimal. Isto é, a partir de uma certa casa decimal, um dígito (ou uma sequência de dígitos) passa a se repetir infinitamente. Como exemplo, temos:

1/13 = 0,076923076923076923076…

Nessa representação decimal, o 1232º dígito após a vírgula é""",
   {"A": "7.", "B": "6.", "C": "3.", "D": "2.", "E": "0."},
   "A",
   """**Gabarito: A.** O período é **076923**, com 6 dígitos. 1232 = 6 × 205 + 2, ou seja, resto **2**. O 1232º dígito ocupa a 2ª posição do período: 0-**7**-6-9-2-3 → **7**.

- (E) 0 seria a posição de resto 1; (B) 6 seria resto 3; (C) 3 seria resto 0; (D) 2 seria resto 5.""",
   dif=1),

PQ(20, "MAT", "Razão, proporção, regra de três e medidas",
   """Um trem que se desloca com velocidade constante é capaz de percorrer 210 quilômetros em 3 horas e meia.

Se essa velocidade fosse aumentada em 10%, o trem seria capaz de percorrer, em 4 horas e 15 minutos, a distância máxima de""",
   {"A": "279,5km.", "B": "280,5km.", "C": "281,0km.", "D": "281,5km.", "E": "282,0km."},
   "B",
   """**Gabarito: B.** Velocidade: 210 ÷ 3,5 = 60 km/h. Com +10%: 66 km/h. Em 4h15min = 4,25 h: 66 × 4,25 = **280,5 km**.

As demais alternativas resultam de arredondamentos ou de usar 4,15 h em vez de 4,25 h.""",
   dif=1),

PQ(21, "MAT", "Lógica proposicional, equivalências e negações",
   """Sejam p, q e r proposições simples e ∼p, ∼q e ∼r, respectivamente, as suas negações. As seguintes proposições compostas têm valor lógico verdadeiro:

p ∨ q

q ∨ ∼r

r ∨ ∼p

Pode-se concluir que o conjunto de proposições simples logicamente verdadeiras é dado por""",
   {"A": "{p}.", "B": "{q}.", "C": "{r}.", "D": "{p, q}.", "E": "{q, r}."},
   "B",
   """**Gabarito: B.** Suponha q **falsa**. Então p ∨ q exige p verdadeira; q ∨ ∼r exige r falsa; e r ∨ ∼p ficaria F ∨ F = falsa. Contradição: logo **q é necessariamente verdadeira**.

Com q verdadeira, as duas primeiras proposições já são verdadeiras, e r ∨ ∼p admite (p, r) = (V, V), (F, V) ou (F, F). Portanto p e r podem ser verdadeiras ou falsas; a única certeza é q.

- (A), (C), (D) e (E) incluem p ou r, cujo valor não está determinado.""",
   dif=2),

PQ(22, "MAT", "Análise combinatória",
   "A quantidade de números inteiros e positivos formados por 2 algarismos cuja diferença vale 4 é igual a",
   {"A": "5.", "B": "6.", "C": "10.", "D": "11.", "E": "15."},
   "D",
   """**Gabarito: D.** Número de dois algarismos ab, com a ≠ 0 e |a − b| = 4.

- a − b = 4: 40, 51, 62, 73, 84, 95 → **6**.
- b − a = 4: 15, 26, 37, 48, 59 → **5** (04 não serve, pois não tem dois algarismos).

Total: 6 + 5 = **11**. (A) e (B) contam só um dos sentidos; (C) esquece um caso; (E) não tem base.""",
   dif=2),

PQ(23, "MAT", "Porcentagem",
   """Em um grupo de pessoas, há 16 homens. Ao todo, são 28 cidadãos brasileiros nesse grupo, entre os quais, 15 são mulheres. Sabe-se que 30% dos indivíduos do grupo não têm cidadania brasileira.

Com relação ao total de pessoas no grupo, pode-se afirmar que a porcentagem de indivíduos que são estrangeiros ou são mulheres é""",
   {"A": "22,5%.", "B": "45,0%.", "C": "67,5%.", "D": "75,0%.", "E": "90,0%."},
   "C",
   """**Gabarito: C.** Brasileiros = 70% do grupo: 28 = 0,7N → **N = 40**. Estrangeiros: 12. Mulheres: 40 − 16 = 24 (15 brasileiras + 9 estrangeiras).

Estrangeiros **ou** mulheres = 12 + 24 − 9 (estrangeiras, contadas duas vezes) = **27** → 27/40 = **67,5%**.

Equivalente: o complemento são os homens brasileiros, 28 − 15 = 13; 40 − 13 = 27.

- (A) 9/40 = só as mulheres estrangeiras; (B) 18/40; (D) 30/40; (E) 36/40 = soma sem descontar a interseção (12 + 24).""",
   dif=2),

PQ(24, "MAT", "Conjuntos e diagramas de Venn",
   """Sejam A e B dois conjuntos finitos tais que A∪B = {1, 2, 3, 4, 5, 6, 7} e {1, 2, 5} é o conjunto de elementos que estão em A e não estão em B.

O conjunto dos elementos que não estão em A ou estão em B é""",
   {"A": "{3, 4}.", "B": "{3, 6}.", "C": "{3, 4, 6}.", "D": "{4, 6, 7}.", "E": "{3, 4, 6, 7}."},
   "E",
   """**Gabarito: E.** "Não está em A **ou** está em B" é a negação de "está em A **e não** está em B". Dentro de A∪B, basta retirar A − B = {1, 2, 5}:

{1, 2, 3, 4, 5, 6, 7} − {1, 2, 5} = **{3, 4, 6, 7}**.

Note que todos esses elementos estão em B (pois estão na união e não em A − B), então o conjunto é o próprio B. As alternativas (A) a (D) omitem elementos de B.""",
   dif=2),

PQ(25, "PE", "Tabelas, gráficos e distribuições de frequência",
   """O gráfico a seguir ilustra informações sobre o consumo per capita anual de refrigerantes pela população norte-americana de 2010 a 2019.

[Gráfico: consumo per capita anual de refrigerantes nos EUA, em litros, ano a ano de 2010 a 2019; os valores não puderam ser transcritos.]

Fonte: veja.abril.br/economia. Acesso: janeiro de 2023

Com base nos valores apresentados, avalie as seguintes declarações:

I. A taxa média de redução do consumo per capita anual por ano se manteve constante entre os anos de 2016 e 2019.

II. A maior redução do consumo per capita em litros se deu de 2014 para 2016.

III. O consumo per capita anual em 2015 foi menor do que em 2014.

De acordo com os dados, está correto o que se afirma em""",
   {"A": "apenas I.", "B": "apenas II.", "C": "apenas I e II.", "D": "apenas II e III.", "E": "I, II e III."},
   "B",
   """**Gabarito: B.** Pelo gabarito oficial, só a afirmativa II é correta. Isso significa que, no gráfico da prova:

- **I. Falsa**: entre 2016 e 2019 as quedas anuais não foram iguais, então a taxa de redução não ficou constante.
- **II. Verdadeira**: a maior redução, em litros per capita, foi a de 2014 para 2016.
- **III. Falsa**: o consumo de 2015 não ficou abaixo do de 2014.

Assim, estão erradas as alternativas que incluem I ou III. (Os valores do gráfico não puderam ser transcritos.)""",
   dif=2, tags=["figura-ausente"], obs=FIG + " Os valores do gráfico não foram extraídos; a análise segue o gabarito oficial."),
# ---------------------------------------------------------------- Informática Básica (26–35)
PQ(26, "INF", "Aplicativos de escritório (Word, Excel, PowerPoint)",
   """Considere as seguintes afirmativas sobre o uso de colunas num documento MS Word 2016.

I. Na guia Layout de Página, é permitido usar o recurso Colunas para inserir numa forma retangular (caixa) um texto explicativo dividido em duas ou mais colunas.

II. Nove é o número máximo de colunas permitido num trecho.

III. É possível estabelecer larguras diferentes para cada coluna.

Está correto o que se afirma somente em""",
   {"A": "I.", "B": "II.", "C": "III.", "D": "I e II.", "E": "II e III."},
   "C",
   """**Gabarito: C.**

- **I. Errada**: o recurso Colunas (guia Layout) divide o texto **do corpo do documento ou de uma seção**; ele não é aplicado ao conteúdo de uma caixa de texto/forma.
- **II. Errada**: o limite não é fixo em nove; depende da largura da página e das margens (com página Carta/A4 e margens padrão, o Word aceita até cerca de 12–13 colunas, já que cada coluna tem largura mínima).
- **III. Correta**: em Colunas > Mais Colunas, basta desmarcar "Colunas de mesma largura" para definir largura e espaçamento de cada coluna.""",
   dif=2),

PQ(27, "INF", "Aplicativos de escritório (Word, Excel, PowerPoint)",
   """Os termos Animação e Transição são usados frequentemente em aplicativos dedicados à apresentação de slides.

Assinale a afirmativa correta a respeito das funções associadas a esses termos em alguns desses aplicativos.""",
   {"A": "Quando utilizados no PowerPoint e no Impress, são termos sinônimos, pois não há diferenças significativas entre as funções a eles associadas.",
    "B": "O PowerPoint não usa o termo Transição em sua interface.",
    "C": "O Impress não usa o termo Transição em sua interface.",
    "D": "A Transição estabelece a ordem dos slides durante uma apresentação.",
    "E": "A Animação aplica-se a elementos específicos de um slide."},
   "E",
   """**Gabarito: E.** **Animação** é o efeito aplicado a um **objeto** do slide (texto, imagem, forma: entrada, ênfase, saída, trajetória). **Transição** é o efeito na **passagem de um slide para o seguinte**.

- (A) os termos não são sinônimos: um age sobre objetos, o outro sobre a troca de slides.
- (B) e (C) PowerPoint (guia Transições) e Impress (painel Transição de slides) usam o termo.
- (D) a ordem dos slides é dada pela sua posição na apresentação (classificação de slides), não pela transição.""",
   dif=1),

PQ(28, "INF", "Aplicativos de escritório (Word, Excel, PowerPoint)",
   """João cuida de uma planilha MS Excel que contém dados de um relatório a ser impresso. Esses dados estão localizados em cinco regiões da planilha, preestabelecidas e distintas entre si. Porém, há outras regiões que estão preenchidas com dados auxiliares, que não devem aparecer no relatório impresso.

O trabalho de João é criar uma variedade de cenários manipulando os valores dos dados auxiliares e imprimir o relatório repetidamente de acordo com cada uma dessas variações introduzidas. Nesse processo, João usa comandos de selecionar/copiar/colar intensamente na manipulação dos dados auxiliares.

Para acelerar a impressão, de modo a não ter que selecionar os trechos visíveis a cada impressão, uma boa dica para João, nesse caso, é utilizar""",
   {"A": "o recurso Área de Impressão na guia Layout da Página.",
    "B": "o recurso Mala Direta na guia Inserir.",
    "C": "o recurso Segmentação de Dados na guia Inserir.",
    "D": "o recurso Tabela Dinâmica na guia Inserir.",
    "E": "uma nova planilha para cada versão do relatório."},
   "A",
   """**Gabarito: A.** Em Layout da Página > **Área de Impressão** > Definir Área de Impressão, João fixa as cinco regiões (seleção múltipla com Ctrl). A área fica salva na planilha e cada impressão sai só com elas, sem precisar selecionar de novo, mesmo depois de copiar e colar nos dados auxiliares.

- (B) Mala Direta é recurso do Word para cartas/etiquetas em série (e não fica na guia Inserir do Excel).
- (C) Segmentação de Dados filtra tabelas e tabelas dinâmicas; não define o que imprimir.
- (D) Tabela Dinâmica resume dados; não resolve a seleção da impressão.
- (E) criar uma planilha por versão multiplica o trabalho, o oposto do objetivo.""",
   dif=1),

PQ(29, "INF", "Aplicativos de escritório (Word, Excel, PowerPoint)",
   """Considere uma planilha (aba) Calc que exibe, nas células A1, B1, C1, A2, B2, C2, A3, B3, C3, respectivamente, os valores 60, 20, 65, 30, 45, 10, 25, 5, 30. Para todas as demais células da planilha, o valor é 0.

Dado que a célula C3 foi copiada da célula A1 por meio de Ctrl+C/Ctrl+V, assinale a fórmula originalmente contida na célula A1.""",
   {"A": "=A2+B1+$C2",
    "B": "=A$2+B1+C$2",
    "C": "=$A2+A3-B3+$C2",
    "D": "=$A$2+B1+$C2",
    "E": "=$A$2+$B$1+$C2"},
   "D",
   """**Gabarito: D.** A fórmula de A1 precisa dar **60** em A1 e, copiada para C3 (deslocamento de +2 colunas e +2 linhas; partes com $ não mudam), dar **30** em C3.

- (D) Em A1: A2+B1+C2 = 30+20+10 = **60** ✓. Em C3 vira =$A$2+D3+$C4 = 30+0+0 = **30** ✓.
- (A) Em A1: 30+20+10 = 60, mas em C3 vira =C4+D3+$C4 = 0.
- (B) Em A1: 60, mas em C3 vira =C$2+D3+E$2 = 10+0+0 = 10.
- (C) Em A1: 30+25−5+10 = 60, mas em C3 vira =$A4+C5−D5+$C4 = 0.
- (E) Em A1: 60, mas em C3 vira =$A$2+$B$1+$C4 = 30+20+0 = 50.""",
   dif=3),

PQ(30, "INF", "Hardware, software e sistemas operacionais (Windows e Linux)",
   """Considere as afirmativas a seguir a respeito de arquivos e pastas no contexto do Windows.

I. Um arquivo não pode ter tamanho zero.

II. Todo arquivo deve ter uma extensão como, por exemplo, "teste.docx".

III. O nome completo de um arquivo contém o caminho (path) das pastas que o contêm.

Está correto apenas o que se afirma em""",
   {"A": "I.", "B": "II.", "C": "III.", "D": "I e II.", "E": "II e III."},
   "C",
   """**Gabarito: C.**

- **I. Errada**: um arquivo pode ter 0 bytes (por exemplo, um arquivo de texto recém-criado e vazio).
- **II. Errada**: a extensão é opcional; o Windows aceita arquivos sem extensão (só não saberá com qual programa abri-los).
- **III. Correta**: o nome completo (caminho absoluto) inclui unidade e pastas, como C:\\Users\\Ana\\Documentos\\teste.docx.""",
   dif=1),

PQ(31, "INF", "Aplicativos de escritório (Word, Excel, PowerPoint)",
   """No contexto de um documento MS Word 2016, considere a imagem de um trecho exibido a seguir.

[Figura: trecho de documento Word com parágrafos numerados por linha; o parágrafo das linhas 3 e 4 tem formatação própria (como negrito, recuo na primeira linha e espaçamento antes/depois) e o das linhas 6 e 7 tem outra. Os detalhes da imagem não puderam ser transcritos.]

Considere ainda as seguintes operações executadas em sequência:

- Selecionar o parágrafo das linhas 3 e 4.
- Copiar o trecho selecionado.
- Clicar no recurso Pincel de Formatação.
- Aplicar a formatação ao parágrafo das linhas 6 e 7.

As únicas mudanças causadas por essas operações no parágrafo das linhas 6 e 7 são:""",
   {"A": "espaçamento inicial e final do parágrafo e recuo na linha inicial.",
    "B": "espaçamento inicial e final do parágrafo, letras em negrito e recuo na linha inicial.",
    "C": "letras em negrito e espaçamento inicial e final do parágrafo.",
    "D": "letras em negrito e recuo na linha inicial.",
    "E": "letras em negrito."},
   "B",
   """**Gabarito: B.** Quando o **parágrafo inteiro** (com a marca de parágrafo) está selecionado, o **Pincel de Formatação** copia tanto a formatação de **caractere** (ex.: negrito) quanto a de **parágrafo** (espaçamento antes/depois, recuo da primeira linha, alinhamento). Aplicado ao parágrafo das linhas 6 e 7, ele leva todas as diferenças que existiam: espaçamento, negrito e recuo. O "Copiar" (Ctrl+C) não interfere: só põe o texto na área de transferência.

- (A), (C), (D) e (E) listam apenas parte das mudanças, como se o pincel copiasse só caractere ou só parágrafo.""",
   dif=2, tags=["figura-ausente"], obs=FIG + " A imagem do trecho do Word não foi extraída; a explicação segue o gabarito oficial."),

PQ(32, "INF", "Hardware, software e sistemas operacionais (Windows e Linux)",
   """João conectou um pen drive no seu notebook com Windows, e precisa descobrir o espaço utilizado e a capacidade total desse dispositivo.

No Explorador de Arquivos, depois de clicar com o botão direito do mouse na identificação do pen drive, João deve escolher a opção""",
   {"A": "Gerenciamento.", "B": "Propriedades.", "C": "Resumo.", "D": "Segurança.", "E": "Utilização."},
   "B",
   """**Gabarito: B.** Em **Propriedades**, aba Geral, o Windows mostra espaço usado, espaço livre e capacidade, com gráfico de pizza.

- (A) Gerenciamento abre o Gerenciamento do Computador, não é a opção do menu do pen drive para ver uso.
- (C) e (E) não existem no menu de contexto.
- (D) Segurança é uma **aba** dentro de Propriedades (permissões NTFS), não mostra capacidade.""",
   dif=1),

PQ(33, "INF", "Internet, intranet, navegadores e mecanismos de busca",
   "No contexto dos navegadores de Internet, assinale a definição mais adequada para o termo cookie.",
   {"A": "Um arquivo armazenado no seu computador por um website, usado para registrar dados sobre a sua utilização.",
    "B": "Um arquivo que adiciona novas funcionalidades ao browser instalado na sua máquina.",
    "C": "Um histórico de navegação na web gravado pelo browser.",
    "D": "Um item de segurança que torna sua navegação mais segura por meio de criptografia.",
    "E": "Uma funcionalidade adicional instalada pelo browser, usualmente utilizada por websites comerciais."},
   "A",
   """**Gabarito: A.** Cookie é um pequeno arquivo de dados que o **site grava no computador** do usuário (via navegador) para lembrar sessão, preferências, carrinho de compras e hábitos de navegação.

- (B) e (E) descrevem extensões/complementos (plug-ins, add-ons).
- (C) descreve o histórico, que é registrado pelo navegador, não pelos sites.
- (D) descreve recursos como HTTPS/TLS; cookies não criptografam a navegação (e podem até afetar a privacidade).""",
   dif=1),

PQ(34, "INF", "Hardware, software e sistemas operacionais (Windows e Linux)",
   """No contexto do Windows, assinale a opção que permite examinar as janelas (e/ou programas) abertas e, a partir daí, escolher a janela que você deseja visualizar.""",
   {"A": "Alt + T", "B": "Alt + Tab", "C": "Ctlr + Alt + Delete", "D": "Ctrl + J", "E": "F1"},
   "B",
   """**Gabarito: B.** **Alt + Tab** exibe as janelas abertas em miniatura; mantendo Alt pressionado e tocando Tab, escolhe-se a janela desejada.

- (A) Alt + T aciona um menu/guia com a letra T no programa ativo, não alterna janelas.
- (C) Ctrl + Alt + Delete abre a tela de segurança (bloquear, trocar usuário, Gerenciador de Tarefas). (O "Ctlr" está assim, com erro de digitação, no original.)
- (D) Ctrl + J abre downloads/histórico em navegadores ou justifica texto no Word.
- (E) F1 abre a ajuda.""",
   dif=1),

PQ(35, "INF", "Internet, intranet, navegadores e mecanismos de busca",
   """Buscas na Internet por meio do Google permitem o uso de operadores, ou comandos especiais, que podem tornar o resultado mais preciso.

Assinale o operador usado para garantir que o resultado de uma busca contenha uma palavra específica.""",
   {"A": "-", "B": "\" \"", "C": "+", "D": "IN:", "E": "OR"},
   "C",
   """**Gabarito: C** (oficial). O sinal **+** antes de uma palavra era o operador clássico do Google para **exigir** aquele termo nos resultados (ex.: *banco +estadual*), e é o que a banca considerou.

Observação importante: o Google **descontinuou** o operador + em 2011 (passou a ser usado para perfis do Google+). Hoje, para exigir um termo exato, usam-se as **aspas** ("palavra"), que correspondem à alternativa (B). Em provas atuais, prefira as aspas, a menos que a questão fale do + como ela fez aqui.

- (A) o hífen **exclui** termos (ex.: *jaguar -carro*).
- (D) "IN:" não é operador do Google (existem *intitle:*, *inurl:*, *site:*).
- (E) OR procura **um ou outro** termo; não garante a presença de uma palavra específica.""",
   dif=2, obs="Discordância: pelo funcionamento atual do Google, as aspas (B) é que obrigam o termo; o + foi descontinuado em 2011. Mantido o gabarito oficial (C)."),

# ---------------------------------------------------------------- Conhecimentos Bancários (36–55)
PQ(36, "CB", "Regulação e supervisão: CNSP, Susep, CMN e Bacen",
   "Sobre o sistema financeiro nacional e o mercado bancário, assinale a instituição listada a seguir que é considerada uma instituição bancária.",
   {"A": "Caixa Econômica Federal.",
    "B": "Associação de poupança e empréstimo.",
    "C": "Sociedade de crédito, financiamento e investimento.",
    "D": "Sociedade de crédito imobiliário.",
    "E": "Sociedade de arrendamento mercantil."},
   "A",
   """**Gabarito: A.** Instituições **bancárias** são as que captam **depósitos à vista** (criam moeda escritural): bancos comerciais, bancos múltiplos com carteira comercial, caixas econômicas e cooperativas de crédito. A **Caixa Econômica Federal** capta depósitos à vista e funciona como banco.

- (B) APE: instituição do SBPE, capta poupança, mas não depósito à vista (não bancária).
- (C) financeira (SCFI): capta por letras de câmbio e financia bens/consumo; não bancária.
- (D) SCI: financia imóveis, capta por poupança e letras imobiliárias; não bancária.
- (E) leasing: faz arrendamento mercantil; não bancária.""",
   dif=1),

PQ(37, "CB", "Regulação e supervisão: CNSP, Susep, CMN e Bacen",
   "Entre as seguintes carteiras distribuídas entre as instituições do grupo Banestes, assinale a que é obrigatória para o Banestes ser classificado como um banco múltiplo.",
   {"A": "Investimento.",
    "B": "Distribuidora de Títulos e Valores Mobiliários.",
    "C": "Crédito, financiamento e investimento.",
    "D": "Crédito imobiliário.",
    "E": "Arrendamento mercantil."},
   "A",
   """**Gabarito: A.** O banco múltiplo deve ter no mínimo **duas carteiras**, sendo **uma delas obrigatoriamente comercial ou de investimento**. Entre as opções, só a carteira de **investimento** cumpre essa exigência.

- (B) DTVM não é carteira de banco múltiplo (é instituição separada).
- (C), (D) e (E) são carteiras possíveis (crédito/financiamento, imobiliária, leasing), mas apenas complementares: nenhuma delas basta para formar um banco múltiplo sem a comercial ou a de investimento.""",
   dif=2),

PQ(38, "CB", "Regulação e supervisão: CNSP, Susep, CMN e Bacen",
   """Sobre o Conselho Monetário Nacional (CMN) e o Comitê de Política Monetária (Copom), analise as afirmativas a seguir.

I. São objetivos do CMN a estabilidade da moeda e o desenvolvimento econômico e social do país.

II. São órgãos supervisores sob a esfera de competência do CMN: o Banco Central do Brasil (BCB), a Comissão de Valores Mobiliários (CVM) e a Superintendência de Seguros Privados (Susep).

III. A principal decisão de cada reunião do Copom é a definição da taxa de juros Selic pelo Banco Central do Brasil (BCB).

Está correto o que se afirma em""",
   {"A": "I, apenas.", "B": "I e II, apenas.", "C": "I e III, apenas.", "D": "II e III, apenas.", "E": "I, II e III."},
   "C",
   """**Gabarito: C.**

- **I. Correta**: o CMN formula a política da moeda e do crédito visando à estabilidade da moeda e ao desenvolvimento econômico e social.
- **II. Errada**: BCB e CVM são supervisores vinculados ao CMN, mas a **Susep** está sob o **CNSP** (Conselho Nacional de Seguros Privados), não sob o CMN.
- **III. Correta**: o Copom, órgão do Banco Central, define a **meta da taxa Selic** em cada reunião.""",
   dif=2),

PQ(39, "CB", "Regulação e supervisão: CNSP, Susep, CMN e Bacen",
   """Em relação ao Banco Central do Brasil (BCB), assinale (V) para a afirmativa verdadeira e (F) para a falsa.

( ) A partir da Lei Complementar nº 179/2021, o BCB passou a ter autonomia para contratar servidores e definir salários.

( ) O BCB tem a missão institucional de garantir a estabilidade do poder de compra da moeda, zelar por um sistema financeiro sólido, eficiente e competitivo, e fomentar o bem-estar econômico da sociedade.

( ) O BCB se submete a auditoria independente.

As afirmativas são, respectivamente,""",
   {"A": "F, F e F.", "B": "F, V e V.", "C": "F, F e V.", "D": "V, F e V.", "E": "V, V e V."},
   "B",
   """**Gabarito: B** (F, V, V).

- **F**: a LC 179/2021 deu ao BCB autonomia técnica, operacional, administrativa e financeira e mandatos fixos para a diretoria, mas **não** lhe permitiu contratar servidores e fixar salários livremente: os servidores seguem as regras do serviço público federal (concurso, remuneração definida em lei).
- **V**: é exatamente a missão institucional do BCB (estabilidade do poder de compra da moeda, sistema financeiro sólido, eficiente e competitivo, e bem-estar econômico).
- **V**: as demonstrações financeiras do BCB são auditadas por auditoria independente, além do controle do TCU.""",
   dif=2),

PQ(40, "CB", "Mercado financeiro e de capitais: instrumentos",
   "No mercado de capitais, as seguintes instituições são reguladas pela Comissão de Valores Mobiliários (CVM), à exceção de uma. Assinale-a.",
   {"A": "Bolsa de Valores.",
    "B": "Fundos de Investimento.",
    "C": "Sociedades de Capitalização.",
    "D": "Auditores Independentes.",
    "E": "Agências Classificadoras de Risco (Rating)."},
   "C",
   """**Gabarito: C.** **Sociedades de capitalização** pertencem ao mercado de seguros privados e são reguladas pelo **CNSP** e fiscalizadas pela **Susep**.

- (A) bolsas de valores (B3) são reguladas pela CVM.
- (B) fundos de investimento são regulados pela CVM (Resolução CVM 175).
- (D) auditores independentes de companhias abertas e fundos são registrados e fiscalizados pela CVM.
- (E) agências de rating que atuam no mercado de valores mobiliários se registram na CVM.""",
   dif=1),

PQ(41, "CB", "Seguros pessoais e empresariais: modalidades",
   "Em relação a seguros e previdência, assinale a afirmativa correta.",
   {"A": "No seguro de acidentes pessoais, o suicídio, ou sua tentativa, não é equiparado a acidente pessoal, para fins de pagamento de indenização.",
    "B": "No seguro prestamista que estabelece indenização para quitação, amortização ou pagamento de um determinado número de parcelas de uma dívida, podem estar incluídas coberturas de desemprego involuntário ou voluntário.",
    "C": "O seguro de automóvel na modalidade de valor de mercado referenciado estabelece o pagamento de quantia fixa estipulada pelas partes no ato da contratação do seguro.",
    "D": "Em seguro de automóveis, a seguradora não pode estabelecer um prazo máximo para o segurado comunicar o sinistro.",
    "E": "O \"seguro popular\" é igual ao \"microsseguro\", ambos são direcionados para as necessidades específicas das famílias de baixa renda."},
   "D",
   """**Gabarito: D.** A regulamentação da Susep para seguros de danos (inclusive auto) **veda** fixar prazo máximo para a comunicação do sinistro: o segurado deve avisar assim que souber, e a seguradora não pode negar a indenização só por um prazo contratual.

- (A) errada: nas normas de seguros de pessoas, o suicídio ou sua tentativa **é equiparado** a acidente pessoal para fins de indenização (respeitada a carência legal de dois anos do art. 798 do Código Civil).
- (B) errada: o prestamista pode cobrir **desemprego involuntário**; o desemprego voluntário (pedido de demissão) não é risco segurável.
- (C) errada: quantia fixa estipulada na contratação é o **valor determinado**; o **valor de mercado referenciado** paga o valor da tabela de referência (ex.: Fipe) na data do sinistro, multiplicado pelo fator de ajuste.
- (E) errada: "seguro popular" (produtos simples e baratos para o público em geral) e **microsseguro** (voltado especificamente à população de baixa renda, com regras próprias) não são a mesma coisa.""",
   dif=3),

PQ(42, "CB", "Previdência complementar aberta: PGBL e VGBL",
   "Em relação à previdência e aos seguros, assinale a afirmativa correta.",
   {"A": "Todos os planos de previdência complementar aberta dão direito ao resgate antecipado.",
    "B": "Os planos de previdência complementar aberta não são passíveis de portabilidade.",
    "C": "No Vida Gerador de Benefício Livres (VGBL), o imposto de renda incide sobre o valor total a ser resgatado ou recebido sob a forma de renda; já no Plano Gerador de Benefício Livres (PGBL), o imposto de renda incide apenas sobre os rendimentos.",
    "D": "Nos planos de fundos de pensão organizados por associações ou entidades de classe, estas associações ou entidades de classe têm de fazer contribuições conjuntamente às feitas pelos associados.",
    "E": "Nos planos de benefícios de contribuição definida (CD) dos fundos de pensão, não se tem assegurado o valor do benefício que o participante vai receber no futuro."},
   "E",
   """**Gabarito: E.** No plano de **contribuição definida**, o que se fixa é a contribuição; o benefício depende do saldo acumulado e da rentabilidade, então **não é garantido** de antemão.

- (A) errada: há planos/modalidades sem direito a resgate antecipado ou com carências e restrições (ex.: planos de benefício de risco, como pecúlio).
- (B) errada: PGBL e VGBL admitem **portabilidade** entre planos e seguradoras/EAPCs.
- (C) errada: é o **inverso**. No **PGBL** o IR incide sobre o **valor total** (porque as contribuições foram deduzidas do IR); no **VGBL**, só sobre os **rendimentos**.
- (D) errada: nos planos **instituídos** (por associações e entidades de classe), a contribuição do instituidor é **facultativa**; quem contribui obrigatoriamente é o participante.""",
   dif=2),

PQ(43, "CB", "Produtos bancários: contas, crédito, cartões e meios de pagamento",
   """Em relação aos produtos bancários, analise as afirmativas a seguir.

I. A remuneração dos depósitos de poupança composta pela Taxa Referencial (TR) acrescida de 0,5% ao mês só é aplicada enquanto a meta da taxa de juros Selic ao ano for superior a 8,5%.

II. O cartão de crédito pode ser emitido tanto por instituição financeira quanto por instituição de pagamento.

III. O crédito rural pode ser destinado a custeio, investimento, comercialização e industrialização de produtos agropecuários e de sua produção.

Está correto o que se afirma em""",
   {"A": "II, apenas.", "B": "I e II, apenas.", "C": "I e III, apenas.", "D": "II e III, apenas.", "E": "I, II e III."},
   "ANULADA",
   """**Questão anulada** no gabarito definitivo.

- **II** e **III** são corretas: cartões de crédito podem ser emitidos por instituições financeiras e por instituições de pagamento (emissoras de instrumento pós-pago); e o crédito rural tem as finalidades de custeio, investimento, comercialização e industrialização.
- **I** é ambígua: para depósitos feitos **a partir de 04/05/2012**, a regra é TR + 0,5% a.m. quando a meta Selic for superior a 8,5% a.a. (senão, TR + 70% da Selic), o que torna o item verdadeiro. Mas para depósitos **anteriores** a essa data a remuneração é **sempre** TR + 0,5% a.m., e então o "só" o torna falso.

Motivo provável da anulação: dependendo da leitura do item I, a resposta seria (D) ou (E).""",
   dif=2, anulada=True, ref="03/6", obs="Anulada no gabarito definitivo."),

PQ(44, "CB", "Mercado financeiro e de capitais: instrumentos",
   """Quanto a noções do mercado de capitais ("mercado de valores mobiliários"), assinale (V) para afirmativa verdadeira e (F) para a falsa.

( ) No mercado de capitais, os títulos (valores mobiliários) resultantes do investimento que estabelecem uma relação de crédito e débito entre as partes tomadora e poupadora, constituem-se em títulos patrimoniais ou de capital.

( ) No mercado de capitais, o investidor que adquiriu uma ação pode, passado um prazo pré-estabelecido, solicitar o resgate do valor da ação diretamente à empresa.

( ) No mercado de capitais, os investidores não podem adquirir os títulos (valores mobiliários) indiretamente.

As afirmativas são, respectivamente,""",
   {"A": "F, F e F.", "B": "F, V e V.", "C": "F, F e V.", "D": "V, F e F.", "E": "V, V e V."},
   "A",
   """**Gabarito: A** (F, F, F).

- **F**: títulos que criam relação de **crédito e débito** (o tomador deve ao poupador) são **títulos de dívida** (debêntures, notas comerciais). Títulos **patrimoniais** ou de capital (ações) tornam o investidor **sócio**, sem relação de dívida.
- **F**: ação não tem prazo nem resgate; o investidor sai **vendendo-a** no mercado secundário (bolsa), não pedindo resgate à companhia.
- **F**: é possível investir **indiretamente**, por meio de fundos de investimento, clubes de investimento, ETFs etc.""",
   dif=2),

PQ(45, "CB", "Câmbio e garantias",
   """Quanto a noções do mercado de câmbio, analise os itens a seguir.

I. O mercado de câmbio é regulamentado e fiscalizado pelo Banco Central do Brasil (BCB) em conjunto com a Comissão de Valores Mobiliários (CVM).

II. As taxas de compra e venda de moeda estrangeira no mercado de câmbio brasileiro são livremente pactuadas entre as partes.

III. As pessoas físicas e as pessoas jurídicas podem comprar e vender moeda estrangeira, sem limitação de valor, desde que observada a legislação, as diretrizes estabelecidas pelo Conselho Monetário Nacional (CMN) e a regulamentação editada pelo Banco Central do Brasil (BCB).

Está correto o que se afirma em""",
   {"A": "III, apenas.", "B": "I e II, apenas.", "C": "I e III, apenas.", "D": "II e III, apenas.", "E": "I, II e III."},
   "D",
   """**Gabarito: D.**

- **I. Errada**: o mercado de câmbio é regulamentado e fiscalizado pelo **Banco Central** (sob diretrizes do CMN); a CVM não participa (ela cuida de valores mobiliários).
- **II. Correta**: as taxas de câmbio são **livremente pactuadas** entre os agentes autorizados e seus clientes (câmbio flutuante).
- **III. Correta**: pessoas físicas e jurídicas podem comprar e vender moeda estrangeira sem limite de valor, desde que a operação seja legítima e cumpra as normas (identificação, fundamentação econômica, regras do CMN e do BCB).""",
   dif=2),

PQ(46, "CB", "Câmbio e garantias",
   "Em relação às garantias do Sistema Financeiro Nacional, assinale a afirmativa correta.",
   {"A": "No caso de título de crédito, se o devedor pagar ao credor primitivo antes de ser notificado ou tiver conhecimento da cessão a outro credor, fica desobrigado de ter de pagar ao novo credor.",
    "B": "A fiança não pode ser de valor inferior ao da obrigação principal.",
    "C": "No caso de aval, é permitido que o título de crédito seja objeto de aval parcial.",
    "D": "A alienação fiduciária se aplica apenas a bens móveis.",
    "E": "O penhor mercantil se aplica a coisa móvel ou imóvel que possa ser alienada."},
   "ANULADA",
   """**Questão anulada** no gabarito definitivo.

- (A) reproduz a regra da **cessão de crédito** (art. 292 do Código Civil: o devedor que paga ao credor primitivo antes de notificado da cessão fica desobrigado), mas a aplica a **título de crédito**, que circula por **endosso** e segue regras próprias (quem paga deve pagar ao portador legítimo). A afirmação é discutível.
- (B) errada: a fiança pode ser de valor **inferior** ao da obrigação principal (só não pode ser superior; art. 823 do CC).
- (C) discutível: o Código Civil (art. 897, parágrafo único) **veda o aval parcial**, mas a Lei Uniforme de Genebra (letra de câmbio e nota promissória) e a Lei do Cheque o **admitem**.
- (D) errada: a alienação fiduciária também se aplica a **imóveis** (Lei 9.514/1997).
- (E) errada: o penhor recai sobre bens **móveis**; imóvel é objeto de **hipoteca**.

Motivo provável da anulação: (A) e (C) podem ser consideradas corretas, conforme a lei aplicada.""",
   dif=3, anulada=True, obs="Anulada no gabarito definitivo."),

PQ(47, "CB", "Captação, intermediação e aplicação de recursos",
   """Um cliente do Banestes quer fazer uma aplicação financeira, mas exige que a aplicação conte com proteção do Fundo Garantidor de Crédito (FGC).

As opções a seguir apresentam aplicações que podem ser oferecidas a esse cliente, à exceção de uma. Assinale-a.""",
   {"A": "Depósito de poupança.",
    "B": "Recibo de Depósito Bancário (RDB).",
    "C": "Certificado de Depósito Bancário (CDB).",
    "D": "Fundos de Investimento.",
    "E": "Letras de câmbio."},
   "D",
   """**Gabarito: D.** **Fundos de investimento** não têm cobertura do FGC: as cotas pertencem ao cotista e o patrimônio do fundo é separado do da instituição; o risco é o dos ativos da carteira.

Têm cobertura do FGC (até R$ 250 mil por CPF/CNPJ por conglomerado, com teto global): (A) poupança, (B) RDB, (C) CDB e (E) letras de câmbio, além de depósitos à vista, LCI, LCA e LH, entre outros.""",
   dif=1, ref="03/6"),

PQ(48, "CB", "Proteção do consumidor e educação financeira",
   """Quanto à autorregulação bancária, analise os itens a seguir.

I. A autorregulação bancária vigente no Brasil constitui-se de um conjunto de compromissos básicos de adesão obrigatória, podendo ser complementado por outro conjunto de compromissos adicionais de adesão voluntária.

II. As sistemáticas de autorregulação bancária vigentes no Brasil têm eixos normativos de: relacionamento com o consumidor, prevenção a ilícitos e responsabilidade socioambiental.

III. As regras de autorregulação bancária são supervisionadas pelo Banco Central do Brasil (BCB).

Está correto o que se afirma em""",
   {"A": "I, apenas.", "B": "I e II, apenas.", "C": "I e III, apenas.", "D": "II e III, apenas.", "E": "I, II e III."},
   "B",
   """**Gabarito: B.**

- **I. Correta**: o Sistema de Autorregulação Bancária da Febraban tem normativos de adesão obrigatória para os bancos signatários e compromissos adicionais de adesão voluntária.
- **II. Correta**: os normativos se organizam em eixos como relacionamento com o consumidor, prevenção a ilícitos (PLD/FT, fraudes) e responsabilidade socioambiental.
- **III. Errada**: a autorregulação é **privada**: quem supervisiona o cumprimento são os órgãos da própria Febraban (Conselho de Autorregulação e Diretoria de Autorregulação), e não o Banco Central, que regula o sistema por normas próprias.""",
   dif=2),

PQ(49, "CB", "Prevenção à lavagem de dinheiro e Coaf",
   """Quanto a noções básicas sobre os crimes de lavagem ou ocultação de bens, direitos e valores, assinale (V) para a afirmativa verdadeira e (F) para a falsa.

( ) O fato de um cliente do Banestes tentar fechar um câmbio de exportação no qual o preço do produto exportado está por um valor de 40% do preço internacional do produto constitui situação que precisa ser tratada para a prevenção à lavagem de dinheiro e ao financiamento do terrorismo (PLD/FT).

( ) O fato de ocorrerem saques em espécie da conta de um cliente do Banestes que recebeu diversos depósitos por transferência eletrônica de várias origens em curto período de tempo constitui situação que precisa ser tratada para a prevenção à lavagem de dinheiro e ao financiamento do terrorismo (PLD/FT).

( ) Um cliente brasileiro do Banestes que é diretor presidente de uma grande empresa privada precisa ser tratado como pessoa exposta politicamente (PEP) constante nas normas de prevenção à lavagem de dinheiro e ao financiamento do terrorismo (PLD/FT) editadas pelos órgãos reguladores e fiscalizadores.

As afirmativas são, respectivamente,""",
   {"A": "F, F e F.", "B": "F, F e V.", "C": "V, F e F.", "D": "V, V e F.", "E": "V, V e V."},
   "D",
   """**Gabarito: D** (V, V, F).

- **V**: exportação com preço muito diferente do de mercado (subfaturamento) é indício clássico de lavagem via comércio exterior e deve ser analisada (e, se for o caso, comunicada ao Coaf).
- **V**: muitos créditos de origens diversas em pouco tempo seguidos de **saques em espécie** é típica movimentação para quebrar o rastro do dinheiro, situação listada como suspeita pelo BCB.
- **F**: PEP é quem exerce (ou exerceu nos últimos 5 anos) cargo, emprego ou função **pública relevante** (detentores de mandato eletivo, ministros, altos cargos do Executivo, membros de tribunais, dirigentes de partidos, presidentes de **estatais**, etc.). Presidente de empresa **privada**, por si só, não é PEP.""",
   dif=2, ref="03/9"),

PQ(50, "CB", "Prevenção à lavagem de dinheiro e Coaf",
   """Em relação à prevenção da utilização do sistema financeiro para os atos ilícitos, em conformidade com a Lei nº 9.613/1998, analise as afirmativas a seguir.

I. O Banestes, por ser considerado um banco de menor porte (segmento S3 da definição do Banco Central do Brasil), pode adotar políticas, procedimentos e controles internos para o cumprimento da obrigação de comunicação de atividades suspeitas proporcionalmente menores que os bancos maiores (S1 e S2).

II. As operações com indícios de ilicitudes devem ser comunicadas pelo Banestes ao Conselho de Controle de Atividades Financeiras (Coaf), atual Unidade de Inteligência Financeira (UIF), e ao cliente do Banestes a que se refira a operação.

III. Se o Banestes não cumprir com as obrigações relacionadas à lavagem ou à ocultação de bens, direitos e valores, poderá ter cassada ou suspensa sua autorização para funcionamento.

Está correto o que se afirma em""",
   {"A": "II, apenas.", "B": "I e II, apenas.", "C": "I e III, apenas.", "D": "II e III, apenas.", "E": "I, II e III."},
   "C",
   """**Gabarito: C.**

- **I. Correta**: a Lei 9.613/1998 (art. 10, III) manda adotar políticas, procedimentos e controles internos **compatíveis com o porte e o volume de operações**; a regulamentação do BCB (Circular 3.978/2020) adota a abordagem baseada em risco e a proporcionalidade.
- **II. Errada**: a comunicação vai ao **Coaf**, e é **vedado dar ciência ao cliente** (art. 11, II, da Lei 9.613/1998), sob pena de frustrar a investigação.
- **III. Correta**: entre as sanções do art. 12 da Lei 9.613/1998 está a **cassação ou suspensão da autorização** para funcionamento.""",
   dif=2, ref="03/9"),

PQ(51, "ETI", "Guia de Conduta Ética do Banestes",
   """Tendo por base as previsões do Guia de Conduta Ética do Banestes para o relacionamento com o cliente e os usuários, assinale (V) para afirmativa verdadeira e (F) para a falsa.

( ) É vedado induzir os clientes ou usuários a erro, assegurar ou sugerir a existência de garantia de resultados futuros ou a isenção de risco.

( ) Deve-se evitar a transferência de contas de clientes por motivo de movimentação no quadro de gerentes entre agências.

( ) Caso o cliente do Banestes seja cidadão dos Estados Unidos da América, o Banestes terá de fornecer dados da conta desse cliente ao Fisco norte americano (IRS) em cumprimento às regras do FATCA (Foreign Account Tax Compliance Act).

As afirmativas são, respectivamente,""",
   {"A": "F, F e F.", "B": "F, F e V.", "C": "V, F e F.", "D": "V, V e F.", "E": "V, V e V."},
   "E",
   """**Gabarito: E** (V, V, V).

- **V**: o Guia veda induzir clientes a erro e prometer ou sugerir garantia de rentabilidade futura ou ausência de risco (venda transparente, sem promessas enganosas).
- **V**: o Guia orienta a evitar transferir contas de clientes de uma agência para outra só porque o gerente mudou de agência: o cliente é do banco, não do gerente.
- **V**: pelo acordo Brasil–EUA (FATCA), as instituições financeiras brasileiras informam, via Receita Federal (e-Financeira), dados de contas de cidadãos e residentes fiscais norte-americanos, que são repassados ao IRS.""",
   dif=2),

PQ(52, "CB", "Produtos bancários: contas, crédito, cartões e meios de pagamento",
   """Em relação à ruptura digital no SFN (Sistema Financeiro Nacional) promovida pelas Fintechs de crédito; pelas IPs (Instituições de Pagamento); pelo "Open Finance" (sistema financeiro aberto); e pelo PIX, assinale a afirmativa correta.""",
   {"A": "As Fintechs de crédito não necessitam de autorização do Banco Central do Brasil (BCB) para operarem.",
    "B": "Em relação às Fintechs de crédito, a Sociedade de Empréstimo entre Pessoas (SEP) pode fazer captação de recursos do público, desde que eles estejam inteira e exclusivamente vinculados à operação de empréstimo.",
    "C": "As IPs podem conceder empréstimos e financiamentos a seus clientes.",
    "D": "No \"Open Finance\", é obrigatória a participação de todas as instituições autorizadas a funcionar pelo Banco Central do Brasil (BCB).",
    "E": "Empresas podem ser tarifadas no envio de pagamentos ou transferências via PIX, mas não podem ser tarifadas no recebimento de pagamentos ou transferências via PIX."},
   "B",
   """**Gabarito: B.** A **SEP** (plataforma *peer-to-peer*) só pode captar recursos de credores (investidores) quando eles estão **vinculados a uma operação de empréstimo específica** realizada pela plataforma.

- (A) errada: SCD e SEP são instituições financeiras e dependem de **autorização do BCB**.
- (C) errada: instituições de pagamento **não podem** conceder empréstimos e financiamentos (operação privativa de instituição financeira).
- (D) errada: a participação é obrigatória só para as instituições dos segmentos **S1 e S2** (para certos dados/serviços); para as demais é voluntária.
- (E) errada: pessoas **jurídicas** podem ser tarifadas tanto no envio quanto no **recebimento** de Pix; a gratuidade ampla vale para pessoas físicas e MEI/EI, com exceções.""",
   dif=2, ref="03/8"),

PQ(53, "CB", "Produtos bancários: contas, crédito, cartões e meios de pagamento",
   """Em relação à ruptura digital no SFN (Sistema Financeiro Nacional) promovida pelas Fintechs de crédito; pelas IPs (Instituições de Pagamento); pelo "Open Finance" (sistema financeiro aberto); e pelo PIX, assinale a afirmativa correta.""",
   {"A": "Em relação às Fintechs de crédito, a Sociedade de Crédito Direto (SCD) pode prestar os serviços de análise de crédito para terceiros, cobrança de crédito de terceiros, mas não pode realizar operações de crédito com recursos próprios.",
    "B": "As IPs não podem gerir conta de pagamento.",
    "C": "No \"Open Finance\", os clientes de produtos e serviços financeiros podem compartilhar suas informações entre diferentes instituições autorizadas pelo Banco Central do Brasil (BCB).",
    "D": "No \"Open Finance\", a movimentação de contas bancárias de uma instituição só pode ser realizada a partir do aplicativo ou site dessa instituição.",
    "E": "É indispensável cadastrar uma chave para fazer ou receber um PIX."},
   "C",
   """**Gabarito: C.** O Open Finance permite que o cliente, mediante **consentimento**, compartilhe seus dados e serviços entre instituições autorizadas pelo BCB.

- (A) errada: a SCD faz operações de crédito **exclusivamente com recursos próprios**; o item diz o contrário.
- (B) errada: gerir **conta de pagamento** (pré-paga) é justamente uma das atividades das instituições de pagamento emissoras de moeda eletrônica.
- (D) errada: com a **iniciação de pagamento**, um terceiro autorizado (iniciador) pode comandar um pagamento a partir da conta do cliente em outra instituição.
- (E) errada: é possível fazer e receber Pix sem chave, informando agência e conta (ou por QR Code).""",
   dif=2, ref="03/8", obs="O enunciado é idêntico ao da questão 52 no original; as alternativas mudam."),

PQ(54, "CB", "Produtos bancários: contas, crédito, cartões e meios de pagamento",
   """Em relação à ruptura digital no SFN (Sistema Financeiro Nacional) promovida pelo "Open Finance" (sistema financeiro aberto); e pelo PIX, assinale a afirmativa correta.""",
   {"A": "No \"Open Finance\", o compartilhamento de informações depende da concordância da instituição detentora dessas informações.",
    "B": "No \"Open Finance\", o compartilhamento de informações só pode ser interrompido ao final do prazo estabelecido para o compartilhamento.",
    "C": "O PIX funciona 24 horas por dia, sete dias por semana, exceto feriados.",
    "D": "O PIX é o pagamento instantâneo brasileiro criado pelo Banco Central do Brasil (BCB) em que os recursos são transferidos entre contas em poucos segundos.",
    "E": "No âmbito do PIX, aplicam-se aos microempreendedores individuais (MEI) e empresários individuais (EI) as mesmas regras de pessoa jurídica."},
   "D",
   """**Gabarito: D.** É a definição do Pix dada pelo próprio BCB: meio de pagamento instantâneo, criado pelo Banco Central, com transferência em poucos segundos, a qualquer hora.

- (A) errada: o compartilhamento depende do **consentimento do cliente**; a instituição detentora é obrigada a compartilhar, não precisa concordar.
- (B) errada: o cliente pode **revogar** o consentimento a qualquer momento.
- (C) errada: o Pix funciona 24/7 **inclusive** em feriados.
- (E) errada: em regra, MEI e EI têm o mesmo tratamento de **pessoa física** quanto à gratuidade do Pix (com exceções, como recebimentos por compras).""",
   dif=1, ref="03/8"),

PQ(55, "CB", "Proteção do consumidor e educação financeira",
   """Em relação ao que a Resolução CMN nº 4.949, de 30/09/2021, estabelece para o Banestes, assinale (V) para a afirmativa verdadeira e (F) para a falsa.

( ) O Banestes deve adotar o previsto na Resolução nas fases de contratação e de pós-contratação de produtos e de serviços, estando desobrigado na fase de pré-contratação.

( ) A necessidade de o Banestes assegurar a identificação dos usuários finais beneficiários de pagamento ou transferência em demonstrativos e extratos de contas de depósitos não se aplica para contas de pagamento pré-pagas.

( ) O Banestes não pode recusar o recebimento de documentos mediante pagamento por meio de cheque.

As afirmativas são, respectivamente,""",
   {"A": "F, F e F.", "B": "V, V e F", "C": "V, F e V", "D": "F, V e V", "E": "V, V e V."},
   "A",
   """**Gabarito: A** (F, F, F). A Resolução CMN 4.949/2021 trata dos princípios e procedimentos no **relacionamento com clientes e usuários**.

- **F**: a norma se aplica a **todas as fases**: oferta/pré-contratação, contratação e pós-contratação.
- **F**: a identificação dos beneficiários de pagamentos e transferências deve constar em demonstrativos e extratos tanto de contas de depósitos **quanto de contas de pagamento pré-pagas**.
- **F**: a instituição **pode** recusar cheque no recebimento de documentos (o cheque não tem curso forçado), desde que informe de forma clara e prévia ao público.""",
   dif=3),

# ---------------------------------------------------------------- Técnicas de Venda e Atendimento (56–70)
PQ(56, "VNA", "Prospecção, fidelização e retenção de clientes",
   """Uma preocupação das empresas é com a perda de clientes. Por isso, além de prospectar novos clientes para repor as eventuais perdas e fazer de tudo para manter os clientes ativos, as empresas também fazem esforços para reativar clientes perdidos ao longo do tempo, o que significa não os deixar sem contato frequente.

Entretanto, para que isso ocorra a contento, as empresas devem""",
   {"A": "fazer ações de marketing na mídia.",
    "B": "enviar felicitações em datas comemorativas.",
    "C": "manter atualizados os cadastros de clientes.",
    "D": "contratar empresas de ativação de clientes.",
    "E": "fazer promoções."},
   "C",
   """**Gabarito: C.** Para manter contato e reativar clientes perdidos, a condição básica é ter **cadastro atualizado** (telefone, e-mail, endereço, histórico): sem ele, nenhuma ação chega ao cliente.

- (A) e (E) são ações de massa, não garantem contato com cada cliente perdido.
- (B) é uma ação de relacionamento que **depende** de um cadastro correto.
- (D) terceirizar não é condição necessária e também dependeria dos dados cadastrais.""",
   dif=1),

PQ(57, "VNA", "Atendimento: conceitos, qualidade e satisfação do cliente",
   """Um conhecido provérbio diz que tudo o que se faz bem é objeto de trabalho prévio e de agir de forma metodológica, com foco nos resultados. Um bom exemplo em vendas é entender como a interação com os clientes mudou ao longo do tempo, passando do contato presencial a outras opções, inclusive digitais, usadas atualmente.

Em relação ao tema, avalie se, tanto no passado quanto hoje em dia, as boas práticas incluem:

I. concentrar a atenção em clientes indecisos.

II. dar mais atenção aos clientes com maior potencial de compra.

III. ter um projeto bem estruturado de atendimento aos clientes.

Está correto o que se afirma em""",
   {"A": "I, apenas.", "B": "II, apenas.", "C": "III, apenas.", "D": "I e II, apenas.", "E": "II e III, apenas."},
   "C",
   """**Gabarito: C.** O texto enfatiza trabalho prévio, método e foco em resultados: a boa prática permanente é ter um **projeto estruturado de atendimento** (III).

- **I. Errada**: concentrar a atenção nos indecisos desequilibra o atendimento e negligencia os demais clientes.
- **II. Errada** para a banca: todos os clientes devem ser bem atendidos; privilegiar apenas os de maior potencial de compra não é tratado como boa prática de atendimento em qualquer época (a segmentação define a abordagem, não o nível de atenção).""",
   dif=2),

PQ(58, "VNA", "CRM, marketing de relacionamento e experiência do cliente",
   """Nas empresas de referência do mercado, as ações comerciais são planejadas, coordenadas e controladas. Por exemplo, os bancos de dados de clientes têm registros dos contatos realizados, dos assuntos tratados, do histórico de transações etc.

Estes dados são convertidos em informações que permitem um planejamento comercial voltado a cada cliente, o que facilita, sobretudo, a estruturação das estratégias de""",
   {"A": "oferta de benefícios.",
    "B": "contatos do call-center.",
    "C": "seleção de pessoas na área comercial.",
    "D": "produção de brindes.",
    "E": "marketing de relacionamento."},
   "E",
   """**Gabarito: E.** Usar o banco de dados (CRM) para conhecer cada cliente e planejar ações individualizadas é a base do **marketing de relacionamento**, que busca relações duradouras e personalizadas.

- (A), (B) e (D) são ações pontuais que podem fazer parte da estratégia de relacionamento, mas não são o objetivo principal do uso dos dados.
- (C) seleção de pessoal é tema de gestão de pessoas, não decorre do histórico dos clientes.""",
   dif=1),

PQ(59, "VNA", "Ética e transparência na venda de produtos financeiros",
   """As empresas modernas tratam com muito cuidado de suas normas éticas e das normas de conduta de seus funcionários nos ambientes interno e externo, com especial atenção ao relacionamento com os pares e a sociedade e ao trato comercial, o que invariavelmente é registrado em códigos específicos, como os Códigos de Ética e de Conduta.

Essas regras compõem o que chamamos de""",
   {"A": "atributos morais.",
    "B": "liberdade de expressão.",
    "C": "visão empresarial.",
    "D": "designação comercial.",
    "E": "etiqueta empresarial."},
   "E",
   """**Gabarito: E.** **Etiqueta empresarial** (ou corporativa) é o conjunto de normas de comportamento e conduta esperadas dos profissionais no ambiente de trabalho e no relacionamento com colegas, clientes e sociedade, registradas em códigos de ética e conduta.

- (A) atributos morais são qualidades da pessoa, não regras da empresa.
- (B) liberdade de expressão é um direito, não um conjunto de normas de conduta.
- (C) visão empresarial é a aspiração de futuro da organização (planejamento estratégico).
- (D) designação comercial não é conceito usado para isso.""",
   dif=2),

PQ(60, "VNA", "Técnicas de vendas e pós-venda",
   """Produto é, no entendimento contemporâneo, a composição de um bem mais um serviço. Bem é uma coisa material e tangível, ou seja, algo que podemos ter, tocar e vender; já os serviços são imateriais e intangíveis, ou seja, não conseguimos pegar ou ter, mas podemos medi-los, atribuir valor. Por esse motivo, serviços também podem ser vendidos, o que comumente faz com que sejam chamados popularmente de produtos.

Um exemplo de um serviço (coisa intangível e imaterial) que pode ser medido e vendido é""",
   {"A": "uma nota de dinheiro.",
    "B": "um talão de cheques.",
    "C": "um equipamento.",
    "D": "um produto financeiro.",
    "E": "uma nota fiscal."},
   "D",
   """**Gabarito: D.** Um **produto financeiro** (conta, investimento, seguro, crédito) é um serviço: intangível, mas mensurável (taxas, rendimento, prazo) e vendável.

- (A), (B), (C) e (E) são objetos **materiais e tangíveis** (cédula, talão, equipamento, documento fiscal), ou seja, bens, não serviços.""",
   dif=1),

PQ(61, "VNA", "Atendimento: conceitos, qualidade e satisfação do cliente",
   """Instituições financeiras têm estratégias distintas para atrair e manter os seus clientes. Em comum, todas desenvolvem ações para satisfazer os seus clientes nos chamados Momentos da Verdade, que são todas as oportunidades de contato e interação da empresa com os clientes, inclusive quando há ações comerciais, dúvidas, reclamações etc.

Nestes momentos, os clientes""",
   {"A": "apresentam sugestões de melhorias e registram suas queixas.",
    "B": "julgam a qualidade dos produtos e serviços da empresa.",
    "C": "verificam os preços cobrados e os comparam com os da concorrência.",
    "D": "respondem a pesquisas de satisfação e a inquéritos estatísticos.",
    "E": "buscam novas oportunidades de relacionamento."},
   "B",
   """**Gabarito: B.** O conceito de **Momento da Verdade** (Jan Carlzon, SAS) é o instante de contato em que o cliente forma sua impressão e **avalia/julga** a qualidade da empresa e do serviço.

- (A), (C), (D) e (E) descrevem ações que podem ocorrer em alguns contatos, mas não definem o que acontece em **todos** os momentos da verdade; a essência é o julgamento do cliente.""",
   dif=1),

PQ(62, "VNA", "Metas, segmentação e gestão de carteira",
   """Equipes comerciais são formadas por pessoas. Um dos grandes desafios é motivá-las.

Com tal objetivo, a despeito das individualidades, é fundamental que os gestores criem o ambiente e o clima necessários à motivação, permitindo, por exemplo, que se estabeleçam""",
   {"A": "competições, menos com os concorrentes.",
    "B": "as bases para melhorar as remunerações.",
    "C": "metas comerciais mais fáceis de atingir.",
    "D": "relatórios de vendas mais compreensíveis.",
    "E": "alianças sinceras e produtivas entre colaboradores e seus líderes."},
   "E",
   """**Gabarito: E.** O clima motivacional se constrói com **confiança e parceria** entre líderes e equipe: alianças sinceras e produtivas.

- (A) competições internas (e não com os concorrentes) tendem a desagregar a equipe.
- (B) remuneração é fator importante, mas não é "ambiente e clima" criado pelo gestor no dia a dia.
- (C) metas fáceis não motivam; metas devem ser realistas e desafiadoras.
- (D) relatórios mais claros ajudam o controle, não a motivação.""",
   dif=1),

PQ(63, "VNA", "Metas, segmentação e gestão de carteira",
   """A gestão de carteiras de clientes exige análise, coerência e competência profissional, para que se perceba o que fazer com cada grupo de clientes, já que as demandas, as estratégias e as oportunidades de negócios podem ser bem diferentes.

Uma ação que os gestores comerciais de sucesso fazem para ampliar os resultados das suas carteiras é""",
   {"A": "enviar aos clientes, várias vezes por ano, ofertas de descontos.",
    "B": "entender quem pode ser um cliente fiel ou infiel para dosar os esforços comerciais com cada um.",
    "C": "mostrar que os produtos têm valor agregado e preços competitivos.",
    "D": "segmentar a base de clientes, entendendo características comuns ou aproximadas (econômicas, sociais etc.)",
    "E": "estabelecer metas desafiadoras."},
   "D",
   """**Gabarito: D.** O enunciado fala em perceber "o que fazer com **cada grupo** de clientes": isso é **segmentação**, agrupar clientes por características comuns (renda, perfil, comportamento) para definir abordagens e ofertas adequadas.

- (A) ofertas de descontos em massa não consideram as diferenças entre grupos.
- (B) classificar clientes só como fiéis ou infiéis é critério restrito e não é a segmentação da carteira.
- (C) mostrar valor e preço é argumento de venda, não gestão da carteira.
- (E) metas desafiadoras são ferramenta de gestão da equipe, não de análise da carteira.""",
   dif=1),

PQ(64, "VNA", "Técnicas de vendas e pós-venda",
   """As técnicas de vendas de produtos financeiros podem ser definidas como um conjunto de metodologias e práticas aplicadas em todas as etapas do processo de vendas. Elas têm como objetivos potencializar as chances de vendas e aumentar o número de fechamentos; nesse processo, há também etapas posteriores, como as que visam a""",
   {"A": "reter e fidelizar os clientes.",
    "B": "converter clientes.",
    "C": "prospectar vendas.",
    "D": "nutrir vendas.",
    "E": "captar novos clientes."},
   "A",
   """**Gabarito: A.** Após o fechamento vem o **pós-venda**, cujo objetivo é **reter e fidelizar** o cliente (acompanhamento, suporte, novas ofertas adequadas).

- (B) conversão é o próprio fechamento da venda.
- (C) e (E) prospecção e captação são etapas **anteriores** à venda.
- (D) "nutrir" (nutrição de leads) também é etapa anterior ao fechamento.""",
   dif=1),

PQ(65, "VNA", "CRM, marketing de relacionamento e experiência do cliente",
   """O mix de marketing, também chamado de 4 P's do marketing, é um conceito explorado desde a década de 1960, definindo estratégias comerciais das empresas. Ao longo do tempo, o P que representava a "praça" (ou o "ponto de venda") evoluiu para um conceito mais amplo que engloba o local onde as vendas ocorrem e a logística. O P que representa o Preço continua muito importante, assim como o P do produto.

O último P representa""",
   {"A": "a Promoção.", "B": "o Perfil do Cliente.", "C": "a Percepção.", "D": "a Promessa.", "E": "o Planejamento."},
   "A",
   """**Gabarito: A.** Os 4 Ps de McCarthy (difundidos por Kotler) são **Produto, Preço, Praça e Promoção**. Promoção abrange a comunicação: propaganda, promoção de vendas, relações públicas e venda pessoal.

(B), (C), (D) e (E) não integram o composto de marketing clássico.""",
   dif=1),

PQ(66, "VNA", "Reclamações, conflitos e mediação",
   """Há um consenso segundo o qual clientes que reclamam da qualidade dos serviços prestados também são importantes para as empresas.

Esse entendimento se explica pelo fato de que tais reclamações""",
   {"A": "permitem que se evitem processos judiciais.",
    "B": "podem provir de clientes que também são clientes de concorrentes.",
    "C": "acabam contaminando a impressão de outros clientes.",
    "D": "identificam clientes que devem ser evitados.",
    "E": "podem, se usadas corretamente, ser oportunidade de melhoria dos processos comerciais."},
   "E",
   """**Gabarito: E.** A reclamação é uma informação valiosa (*feedback* gratuito): bem tratada, mostra falhas e permite **melhorar processos**, além de ser chance de recuperar o cliente.

- (A) evitar ações judiciais pode ser um efeito, mas não é o motivo central da importância das reclamações.
- (B) ser cliente também da concorrência não explica a importância.
- (C) é um risco da reclamação mal tratada, não razão para valorizá-la.
- (D) clientes que reclamam não devem ser evitados; quem reclama ainda quer se relacionar com a empresa.""",
   dif=1),

PQ(67, "VNA", "Metas, segmentação e gestão de carteira",
   """Os orçamentos de vendas são realizados com base em técnicas de orçamentação que procuram estabelecer metas comerciais realistas, mas desafiadoras, para as equipes comerciais.

Metas são""",
   {"A": "indicadores de gestão.",
    "B": "objetivos abstratos do que se quer atingir.",
    "C": "planos de ação comercial.",
    "D": "valores a atingir em um espaço de tempo definido.",
    "E": "objetivos qualitativos do que se quer atingir."},
   "D",
   """**Gabarito: D.** Meta é o objetivo **quantificado e com prazo**: um valor a atingir em um período definido (ex.: R$ 500 mil em consórcio no trimestre).

- (A) indicadores medem o desempenho; a meta é o valor-alvo desse indicador.
- (B) e (E) objetivos abstratos ou qualitativos são justamente o que a meta concretiza em números.
- (C) planos de ação são o caminho para atingir a meta, não a meta.""",
   dif=1, obs="Questão citada no comunicado de retificação de 03/04/2023 (tipo 1, nº 67); vale o gabarito retificado (D)."),

PQ(68, "VNA", "Metas, segmentação e gestão de carteira",
   """A gestão comercial de vendas de serviços financeiros exige que os gestores acompanhem a performance do cumprimento das metas individuais e coletivas. Há inúmeras formas de incentivar as vendas, como, por exemplo, ações direcionadas ao relacionamento com os clientes. Entretanto, ações motivacionais estruturadas com as equipes internas são igualmente importantes.

Avalie se as afirmativas a seguir, acerca de tais ações internas, estão corretas.

I. Propiciam o reconhecimento dos melhores, aqueles que batem as metas.

II. Estimulam competições sadias que envolvam a equipe em disputas, desafios e premiações.

III. Permitem que os inevitáveis conflitos internos se potencializem, o que ajuda a equipe a superar as metas.

Está correto o que se afirma em""",
   {"A": "I, apenas.", "B": "II, apenas.", "C": "I e III, apenas.", "D": "II e III, apenas.", "E": "I, II e III."},
   "B",
   """**Gabarito: B** (oficial).

- **II. Correta**: ações motivacionais estruturadas estimulam **competição sadia**, com disputas, desafios e premiações que envolvem **toda a equipe**.
- **III. Errada**: potencializar conflitos internos prejudica o clima e o resultado; o gestor deve administrá-los, não estimulá-los.
- **I. Errada para a banca**: a leitura da FGV é que ações motivacionais **para a equipe** não se destinam apenas a reconhecer "os melhores, aqueles que batem as metas", o que excluiria a maioria e contraria a ideia de envolver todos.

Observação: o item I é discutível, pois reconhecer quem bate metas é prática comum de incentivo. Repare, porém, que não há alternativa "I e II, apenas": a banca considerou I errado.""",
   dif=2, obs="Discordância parcial: o item I (reconhecer quem bate metas) parece correto; mantido o gabarito oficial (B)."),

PQ(69, "VNA", "Comportamento do consumidor de produtos financeiros",
   """Os clientes compram produtos e serviços que tenham valor. Valor é um conceito que pode variar de pessoa para pessoa, mas quando as empresas compreendem o que ele significa para os clientes e passam a direcionar suas estratégias para cada vez mais criar valor, estabelecem os diferenciais que a fazem ser por eles preferidas.

Esses diferenciais são chamados de""",
   {"A": "vantagem competitiva.",
    "B": "independência comercial.",
    "C": "excelência em serviços.",
    "D": "foco no processo.",
    "E": "marketing de oportunidades."},
   "A",
   """**Gabarito: A.** Os diferenciais que fazem o cliente preferir a empresa à concorrência, por gerarem mais valor percebido, são a **vantagem competitiva** (Porter).

- (B) e (E) não são conceitos consagrados para isso.
- (C) excelência em serviços pode ser **uma fonte** de vantagem competitiva, mas não é o nome do diferencial.
- (D) foco no processo é orientação interna, oposta ao foco no valor para o cliente.""",
   dif=1),

PQ(70, "VNA", "Técnicas de vendas e pós-venda",
   """O correto entendimento das necessidades dos clientes e de como fazer para criar produtos e serviços de valor é tarefa fundamental dos gestores de vendas. Para alcançar esse objetivo, uma etapa importante do planejamento comercial é realizada por meio da análise da concorrência e das influências externas (oportunidades e ameaças), permitindo que a empresa possa compreender melhor os seus pontos fortes e fracos.

Chamamos essa etapa de estudo do mercado de""",
   {"A": "definição da visão comercial.",
    "B": "orçamentação comercial.",
    "C": "planejamento de metas comerciais.",
    "D": "análise ambiental.",
    "E": "definição de objetivos comerciais."},
   "D",
   """**Gabarito: D.** A **análise ambiental** examina o ambiente externo (concorrência, oportunidades e ameaças) e o interno (forças e fraquezas), como na matriz SWOT; é a etapa de diagnóstico do planejamento.

- (A) a visão é a aspiração de futuro, definida antes ou a partir do diagnóstico.
- (B), (C) e (E) orçamento, metas e objetivos vêm **depois** da análise ambiental, que lhes dá base.""",
   dif=1),
]
