# -*- coding: utf-8 -*-
"""RLE – estatística, porcentagem, regra de três, contagem, sequências e lógica (agente 2)."""
import itertools
import math
from fractions import Fraction as F
from statistics import mean, median, mode, pstdev, pvariance, stdev, variance

from base import Q, brl, num, pct

M = "RLE"
VER = "Python: tools/verificacao/agente2/rle_stats.py"


def dm(xs):
    m = mean(xs)
    return sum(abs(x - m) for x in xs) / len(xs)


# ---- desvio médio (pai RLE-0143) ----
xs = [2, 4, 6, 8, 10, 12]
assert mean(xs) == 7 and F(sum(abs(x - 7) for x in xs), 6) == 3
Q(M, "24", """O desvio médio do conjunto {2, 4, 6, 8, 10, 12} é""",
  ("3.", "Média = 42/6 = 7. Desvios absolutos: 5, 3, 1, 1, 3, 5 (soma 18). Desvio médio = 18/6 = **3**."),
  [("0.", "Somou os desvios com sinal (que sempre somam zero)."),
   ("3,6.", "Dividiu 18 por 5 (n − 1), o que não se faz no desvio médio."),
   (num(pstdev(xs)) + ".", "É o desvio padrão populacional (√(70/6))."),
   ("11,67.", "É a variância populacional (70/6).")],
  pai="RLE-0143", dif=1, tags=["desvio médio", "dispersão"], var="cálculo: novo conjunto", verif=VER)
assert num(pstdev(xs)) == "3,42" and round(pvariance(xs), 2) == 11.67

xs = [10, 12, 15, 15, 18, 20]
m = mean(xs)
assert m == 15 and sum(abs(x - m) for x in xs) == 16
Q(M, "24", """O tempo, em minutos, de atendimento de 6 clientes foi: 10, 12, 15, 15, 18 e 20.

Os valores aproximados do desvio médio e do desvio padrão populacional desses tempos são, respectivamente,""",
  (f"{num(dm(xs))} e {num(pstdev(xs))}.", f"Média = 15. Desvios absolutos: 5, 3, 0, 0, 3, 5 (soma 16) ⇒ DM = 16/6 ≈ **{num(dm(xs))}**. Quadrados: 25, 9, 0, 0, 9, 25 (soma 68) ⇒ variância = 68/6 ≈ 11,33 ⇒ desvio padrão ≈ **{num(pstdev(xs))}**."),
  [(f"{num(dm(xs))} e {num(pvariance(xs))}.", "O segundo valor é a variância, não o desvio padrão."),
   (f"{num(16/5)} e {num(stdev(xs))}.", "Dividiu por n − 1 = 5 nas duas medidas."),
   (f"0 e {num(pstdev(xs))}.", "Somou os desvios com sinal no desvio médio."),
   (f"{num(pstdev(xs))} e {num(dm(xs))}.", "Trocou as duas medidas.")],
  pai="RLE-0143", dif=2, tags=["desvio médio", "desvio padrão"], var="cálculo: novo conjunto e duas medidas", verif=VER)

# Conversão C/E (pai RLE-0148): propriedades das medidas de dispersão
Q(M, "24", """Considere um conjunto de dados numéricos e as medidas média, desvio médio, variância e desvio padrão. Assinale a alternativa correta.""",
  ("Multiplicando-se todos os valores por 3, o desvio padrão fica multiplicado por 3 e a variância, por 9.",
   "Multiplicar por k multiplica os desvios por k: o desvio padrão (e o desvio médio) fica × |k| e a variância × k²."),
  [("Somando-se 10 a todos os valores, o desvio médio aumenta 10 unidades.", "Somar constante desloca a média junto com os dados; os desvios não mudam (é a afirmação Certo/Errado da apostila, que é errada)."),
   ("Somando-se 10 a todos os valores, a variância aumenta 100 unidades.", "A variância não se altera com a soma de constante."),
   ("Multiplicando-se todos os valores por 3, a variância fica multiplicada por 3.", "A variância fica multiplicada por 3² = 9."),
   ("O desvio médio é sempre igual ao desvio padrão.", "Em geral são diferentes (o desvio padrão é maior ou igual ao desvio médio).")],
  explic="Questão A–E montada a partir da afirmação Certo/Errado da apostila (§24 Q6) e de outras propriedades do mesmo tópico; propriedades conferidas numericamente em Python.",
  pai="RLE-0148", dif=2, tags=["dispersão", "propriedades", "conversão C/E"], var="Certo/Errado → A–E com 5 afirmações", verif=VER)
ys = [1, 4, 6, 9]
assert dm([y + 10 for y in ys]) == dm(ys) and pvariance([y + 10 for y in ys]) == pvariance(ys)
assert abs(pstdev([3 * y for y in ys]) - 3 * pstdev(ys)) < 1e-9 and abs(pvariance([3 * y for y in ys]) - 9 * pvariance(ys)) < 1e-9
assert pstdev(ys) >= dm(ys)

# ---- variância (pai RLE-0113) ----
xs = [2, 4, 6, 8, 10]
assert pvariance(xs) == 8 and variance(xs) == 10
Q(M, "18", """A variância **populacional** do conjunto {2, 4, 6, 8, 10} é""",
  ("8.", "Média 6; desvios −4, −2, 0, 2, 4; quadrados 16, 4, 0, 4, 16 = 40; 40/5 = **8**."),
  [("10.", "É a variância amostral (40/4)."),
   ("40.", "É a soma dos quadrados dos desvios, sem dividir por n."),
   (num(pstdev(xs)) + ".", "É o desvio padrão populacional (√8)."),
   ("2,4.", "É o desvio médio (12/5).")],
  pai="RLE-0113", dif=1, tags=["variância"], var="cálculo: novo conjunto", verif=VER)
assert abs(dm(xs) - 2.4) < 1e-12

xs = [3, 5, 7, 9, 11]
assert variance(xs) == 10 and abs(stdev(xs) - math.sqrt(10)) < 1e-12
Q(M, "18", """Uma amostra de 5 contas apresentou os seguintes números de transações em um dia: 3, 5, 7, 9 e 11.

O desvio padrão **amostral** desses dados é de, aproximadamente,""",
  (num(stdev(xs)) + ".", f"Média 7; soma dos quadrados dos desvios = 16 + 4 + 0 + 4 + 16 = 40. Variância amostral = 40/(5 − 1) = 10; desvio padrão = √10 ≈ **{num(stdev(xs))}**."),
  [(num(pstdev(xs)) + ".", "Dividiu por n = 5 (desvio padrão populacional)."),
   ("10,00.", "É a variância amostral, não o desvio padrão."),
   ("8,00.", "É a variância populacional."),
   ("2,40.", "É o desvio médio.")],
  pai="RLE-0113", dif=2, tags=["desvio padrão", "amostra"], var="cálculo: troca para desvio padrão amostral", verif=VER)

# ---- mediana / média ponderada / média (pais RLE-0111, 0112, 0115) ----
xs = [12, 5, 9, 20, 7, 15, 9, 30]
assert median(xs) == 10.5 and mode(xs) == 9 and mean(xs) == 13.375
Q(M, "18", """Os valores, em milhares de reais, de 8 empréstimos concedidos em um dia foram: 12, 5, 9, 20, 7, 15, 9 e 30.

A mediana, a moda e a média desses valores são, respectivamente,""",
  ("10,5; 9 e 13,375.", "Ordenados: 5, 7, 9, 9, 12, 15, 20, 30. Mediana = (9 + 12)/2 = **10,5**; moda = **9**; média = 107/8 = **13,375**."),
  [("9; 9 e 13,375.", "Tomou o 4º valor como mediana, sem fazer a média dos dois centrais."),
   ("13,5; 9 e 13,375.", "Calculou a mediana sem ordenar os dados (média do 4º e 5º termos da lista original: 20 e 7)."),
   ("10,5; 30 e 13,375.", "Confundiu moda com o maior valor."),
   ("10,5; 9 e 15,29.", "Dividiu a soma por 7.")],
  pai="RLE-0111", dif=1, tags=["mediana", "moda", "média"], var="cálculo: novo conjunto e três medidas", verif=VER)
assert (20 + 7) / 2 == 13.5 and round(107 / 7, 2) == 15.29

notas = [(6, 2), (8, 3), (5, 1), (9, 4)]
mp = F(sum(n * p for n, p in notas), sum(p for _, p in notas))
inv = F(6 * 4 + 8 * 1 + 5 * 3 + 9 * 2, 10)
assert mp == F(77, 10) and mean([6, 8, 5, 9]) == 7 and inv == F(65, 10)
Q(M, "18", """Na avaliação de um fornecedor, foram atribuídas as notas: preço 6 (peso 2), qualidade 8 (peso 3), prazo 5 (peso 1) e suporte 9 (peso 4).

A média ponderada do fornecedor é""",
  ("7,7.", "Σ(nota × peso) = 6×2 + 8×3 + 5×1 + 9×4 = 12 + 24 + 5 + 36 = 77; Σ pesos = 10; média = **7,7**."),
  [("7,0.", "É a média aritmética simples (28/4)."),
   ("19,25.", "Dividiu 77 pelo número de notas (4), e não pela soma dos pesos."),
   ("6,5.", "Associou os pesos às notas em ordem inversa."),
   ("77.", "Não dividiu pela soma dos pesos.")],
  pai="RLE-0112", dif=1, tags=["média ponderada"], var="cálculo: novas notas e pesos", verif=VER)

s5 = 5 * 18
x = 6 * 20 - s5
assert x == 30
Q(M, "18", """A média aritmética dos saldos de 5 contas é R$ 18 mil. Uma sexta conta é incluída e a média dos 6 saldos passa a ser R$ 20 mil.

O saldo da sexta conta é""",
  ("R$ 30 mil.", "Soma inicial = 5 × 18 = 90; soma final = 6 × 20 = 120; sexta conta = 120 − 90 = **30** (mil reais)."),
  [("R$ 22 mil.", "Somou à nova média a diferença entre as médias (20 + 2)."),
   ("R$ 20 mil.", "Supôs que a nova conta fosse igual à nova média."),
   ("R$ 19 mil.", "Fez a média entre as duas médias."),
   ("R$ 38 mil.", "Calculou 20 + 18.")],
  pai="RLE-0115", dif=1, tags=["média"], var="cálculo: novos valores", verif=VER)

# =====================================================================
# Porcentagem – pais RLE-0056, RLE-0057, RLE-0059
# =====================================================================
p = 5000 * 1.2 * 0.8
assert p == 4800
Q(M, "7", """O preço de um software, de R$ 5.000,00, sofreu um aumento de 20% e, meses depois, um desconto de 20% sobre o novo preço.

Em relação ao preço inicial, o preço final ficou""",
  ("4% menor.", "5.000 × 1,2 × 0,8 = 5.000 × 0,96 = 4.800, isto é, **4% abaixo** do inicial."),
  [("igual ao inicial.", "Aumento e desconto de mesmo percentual não se anulam, pois incidem sobre bases diferentes."),
   ("4% maior.", "Errou o sinal: 1,2 × 0,8 = 0,96 < 1."),
   ("2% menor.", "Dividiu a variação por 2."),
   ("40% menor.", "Multiplicou 20% × 20% como se fossem 0,2 × 2.")],
  pai="RLE-0056", dif=1, tags=["porcentagem", "variações sucessivas"], var="cálculo: novos valores e pergunta relativa", verif=VER)

orig = 1173 / (1 - 0.15)
assert round(orig, 6) == 1380
Q(M, "7", """Após um desconto de 15%, uma tarifa passou a custar R$ 1.173,00.

O valor da tarifa antes do desconto era""",
  ("R$ 1.380,00.", "Valor com desconto = 0,85 × P ⇒ P = 1.173/0,85 = **R$ 1.380,00**."),
  [(brl(1173 * 1.15) + ".", "Acrescentou 15% ao valor com desconto (base errada)."),
   (brl(1173 * 0.85) + ".", "Aplicou novo desconto de 15%."),
   (brl(1173 + 150) + ".", "Somou R$ 150,00, como se 15% fossem um valor fixo."),
   (brl(1173 / 0.75) + ".", "Dividiu por 0,75, confundindo 15% com 25%.")],
  pai="RLE-0057", dif=1, tags=["porcentagem"], var="cálculo: novos valores", verif=VER)

Q(M, "7", """A inadimplência de uma carteira passou de 4% para 5% dos contratos.

É correto afirmar que a inadimplência aumentou""",
  ("1 ponto percentual, o que corresponde a um aumento relativo de 25%.", "Variação absoluta: 5% − 4% = 1 p.p. Variação relativa: 1/4 = **25%**."),
  [("1%, tanto em termos absolutos quanto relativos.", "Confunde ponto percentual com variação relativa."),
   ("25 pontos percentuais.", "A variação absoluta é de 1 p.p.; 25% é a relativa."),
   ("20%, em termos relativos.", "Dividiu 1 por 5 (base final) em vez de 4 (base inicial)."),
   ("1 ponto percentual, o que corresponde a um aumento relativo de 1,25%.", "Confundiu o fator 1,25 com a taxa de 25%.")],
  pai="RLE-0059", dif=1, tags=["porcentagem", "ponto percentual"], var="conceito/cálculo: novo cenário (p.p. × %)", verif=VER)
assert F(5 - 4, 4) == F(1, 4) and F(1, 5) == F(20, 100)

# =====================================================================
# Regra de três – pai RLE-0068
# =====================================================================
t = 20 * F(6, 4) * F(9000, 3600)
assert t == 75
Q(M, "9", """Seis servidores processam 3.600 transações em 20 minutos. Mantido o mesmo ritmo por servidor, em quanto tempo 4 servidores processam 9.000 transações?""",
  ("75 minutos.", "Tempo é inversamente proporcional ao nº de servidores e diretamente às transações: t = 20 × (6/4) × (9.000/3.600) = 20 × 1,5 × 2,5 = **75 min**."),
  [("33,3 minutos.", "Tratou servidores como diretamente proporcionais ao tempo (20 × 4/6 × 2,5)."),
   ("50 minutos.", "Considerou só a variação das transações (20 × 2,5)."),
   ("30 minutos.", "Considerou só a variação de servidores (20 × 1,5)."),
   ("12 minutos.", "Inverteu a razão das transações (20 × 1,5 × 3.600/9.000).")],
  pai="RLE-0068", dif=2, tags=["regra de três composta"], var="cálculo: novos valores", verif=VER)
assert 20 * F(4, 6) * F(5, 2) == F(100, 3) and 20 * F(3, 2) * F(2, 5) == 12

dias = F(12 * 15, 18)
assert dias == 10
Q(M, "9", """Uma equipe de 12 analistas concluiria a homologação de um sistema em 15 dias. Se a equipe for ampliada para 18 analistas, com a mesma produtividade individual, a homologação será concluída em""",
  ("10 dias.", "Analistas e dias são inversamente proporcionais: 12 × 15 = 18 × d ⇒ d = 180/18 = **10 dias**."),
  [("22,5 dias.", "Tratou como diretamente proporcionais (15 × 18/12)."),
   ("9 dias.", "Subtraiu 6 dias porque entraram 6 analistas."),
   ("12 dias.", "Reduziu 3 dias sem cálculo de proporção."),
   ("7,5 dias.", "Usou a razão 12/24 (dobrou a equipe) em vez de 12/18.")],
  pai="RLE-0068", dif=1, tags=["regra de três", "inversamente proporcional"], var="cálculo: regra de três simples inversa", verif=VER)

# =====================================================================
# Contagem – pais RLE-0098, RLE-0096, RLE-0099
# =====================================================================
c = math.comb(9, 3) * math.comb(5, 2)
assert c == 840
Q(M, "15", """Para formar uma comissão de auditoria, serão escolhidos 3 analistas de um grupo de 9 e 2 gerentes de um grupo de 5, sem distinção de funções dentro da comissão.

O número de comissões diferentes que podem ser formadas é""",
  ("840.", "C(9,3) × C(5,2) = 84 × 10 = **840** (princípio multiplicativo com combinações)."),
  [("94.", "Somou 84 + 10 em vez de multiplicar."),
   (num(math.perm(9, 3) * math.perm(5, 2), 0) + ".", "Usou arranjos, como se a ordem importasse."),
   (num(math.comb(14, 5), 0) + ".", "Escolheu 5 pessoas quaisquer entre 14, sem respeitar a composição."),
   (str(math.comb(9, 2) * math.comb(5, 3)) + ".", "Trocou as quantidades: 2 analistas e 3 gerentes (36 × 10).")],
  pai="RLE-0098", dif=2, tags=["combinação", "princípio multiplicativo"], var="cálculo: combinação de dois grupos", verif=VER)
assert math.perm(9, 3) * math.perm(5, 2) == 10080 and math.comb(14, 5) == 2002

tot = math.comb(10, 4) - math.comb(6, 4)
assert tot == 195
Q(M, "15", """De um grupo de 10 desenvolvedores, dos quais 4 são especialistas em segurança, serão escolhidos 4 para um projeto. O número de grupos possíveis com **pelo menos um** especialista em segurança é""",
  ("195.", "Total: C(10,4) = 210. Sem especialista: C(6,4) = 15. Pelo menos um: 210 − 15 = **195**."),
  [("210.", "É o total de grupos, sem a restrição."),
   ("15.", "É o número de grupos sem nenhum especialista."),
   (str(4 * math.comb(9, 3)) + ".", "Fixou um especialista e escolheu 3 entre os 9 restantes, contando grupos repetidos."),
   (str(4 * math.comb(6, 3)) + ".", "Contou apenas os grupos com exatamente um especialista.")],
  pai="RLE-0098", dif=2, tags=["combinação", "complementar"], var="cálculo: contagem com restrição 'pelo menos um'", verif=VER)
assert 4 * math.comb(9, 3) == 336 and 4 * math.comb(6, 3) == 80

n = 4 * 4 * 3  # números de 3 algarismos distintos com 0,1,...,4 (sem 0 na frente)
evens = sum(1 for p in itertools.permutations(range(5), 3) if p[0] != 0 and p[2] % 2 == 0)
assert n == 48 and evens == 30
Q(M, "15", """Com os algarismos 0, 1, 2, 3 e 4, quantos números **pares** de 3 algarismos distintos podem ser formados?""",
  ("30.", "Terminados em 0: 4 × 3 = 12. Terminados em 2 ou 4: para cada um, 3 escolhas para a centena (não 0 nem o final) e 3 para a dezena = 9; 2 × 9 = 18. Total **30** (conferido por enumeração)."),
  [("48.", "Contou todos os números de 3 algarismos distintos, pares ou ímpares."),
   ("36.", "Fez 3 × 4 × 3, sem tratar o caso do zero no final."),
   ("24.", "Fez 2 × 4 × 3, esquecendo os terminados em 0."),
   ("60.", "Usou arranjo de 5 tomados 3 a 3, permitindo o 0 na centena.")],
  pai="RLE-0096", dif=3, tags=["princípio multiplicativo", "arranjo"], var="cálculo: restrição de paridade e do zero", verif=VER)

# conferência por força bruta: rotações equivalentes
pessoas = "ABCDE"
cfg = set()
for p in itertools.permutations(pessoas):
    i0 = p.index("A")
    rot = p[i0:] + p[:i0]
    if abs(rot.index("B") - 0) in (1, 4):
        cfg.add(rot)
assert len(cfg) == 12
Q(M, "15", """De quantas maneiras 5 pessoas podem sentar-se em torno de uma mesa circular (posições que diferem só por rotação são consideradas iguais) se duas delas, Ana e Beto, devem ficar sempre lado a lado?""",
  ("12.", "Trata-se Ana e Beto como um bloco: 4 elementos em círculo ⇒ (4 − 1)! = 6; o bloco admite 2 ordens internas ⇒ 6 × 2 = **12**."),
  [("24.", "É o total de disposições circulares de 5 pessoas, sem a restrição: (5 − 1)!."),
   ("48.", "Usou 4! × 2, tratando a mesa como fila."),
   ("6.", "Esqueceu as 2 ordens internas do bloco."),
   ("120.", "Usou 5!, permutação linear sem restrição.")],
  pai="RLE-0099", dif=2, tags=["permutação circular"], var="cálculo: permutação circular com restrição", verif=VER)

# =====================================================================
# Sequências – pais RLE-0091 e RLE-0093
# =====================================================================
a1, r = 12, 7
a40 = a1 + 39 * r
s40 = (a1 + a40) * 40 // 2
assert a40 == 285 and s40 == 5940
Q(M, "14", """Uma agência atendeu 12 clientes no 1º dia de uma campanha e, a cada dia seguinte, 7 clientes a mais que no dia anterior.

Ao final do 40º dia, o total de clientes atendidos na campanha foi""",
  (num(s40, 0) + ".", f"PA com a₁ = 12 e r = 7: a₄₀ = 12 + 39 × 7 = 285. Soma = (12 + 285) × 40/2 = **{num(s40, 0)}**."),
  [(num(285, 0) + ".", "É o número de clientes atendidos só no 40º dia."),
   (num((12 + 12 + 40 * 7) * 40 // 2, 0) + ".", "Usou a₄₀ = 12 + 40 × 7 (contou uma razão a mais)."),
   (num(12 * 40 + 7 * 40, 0) + ".", "Somou 40 × 12 com 40 × 7, como se o acréscimo fosse fixo."),
   (num((12 + 285) * 40, 0) + ".", "Esqueceu de dividir por 2 na fórmula da soma.")],
  pai="RLE-0091", dif=2, tags=["progressão aritmética", "soma da PA"], var="cálculo: troca para soma dos termos", verif=VER)

seq = [2, 5, 11, 23, 47]
nxt = 2 * seq[-1] + 1
assert all(seq[k + 1] == 2 * seq[k] + 1 for k in range(4)) and nxt == 95
Q(M, "14", """Observe a sequência: 2, 5, 11, 23, 47, …

Mantido o padrão, o próximo termo é""",
  ("95.", "Cada termo é o dobro do anterior mais 1: 47 × 2 + 1 = **95**. (As diferenças 3, 6, 12, 24 dobram, então a próxima é 48.)"),
  [("71.", "Somou 24 à última diferença, como se ela crescesse em PA."),
   ("94.", "Apenas dobrou o último termo."),
   ("93.", "Dobrou e subtraiu 1."),
   ("63.", "Somou 16 ao último termo, sem identificar o padrão.")],
  pai="RLE-0093", dif=1, tags=["sequências", "recorrência"], var="cálculo: nova regra de formação (2x + 1)", verif=VER)
assert 47 + 24 == 71

# =====================================================================
# Negações (De Morgan / condicional / bicondicional) – pais RLE-0031 e RLE-0035
# =====================================================================
imp = lambda p, q: (not p) or q
ok = all((not imp(p, q)) == (p and not q) for p, q in itertools.product([True, False], repeat=2))
assert ok
Q(M, "2", """A negação da proposição "Se a senha expirou, então o acesso é bloqueado" é:""",
  ("A senha expirou e o acesso não é bloqueado.", "~(p → q) ≡ p ∧ ~q: a condicional só é falsa quando o antecedente é verdadeiro e o consequente, falso."),
  [("Se a senha não expirou, então o acesso não é bloqueado.", "É a inversa, não a negação."),
   ("A senha não expirou e o acesso é bloqueado.", "Negou o antecedente em vez do consequente."),
   ("Se o acesso é bloqueado, então a senha expirou.", "É a recíproca."),
   ("A senha não expirou ou o acesso é bloqueado.", "É equivalente à própria condicional (~p ∨ q), não à sua negação.")],
  pai="RLE-0031", dif=1, tags=["negação", "condicional"], var="conceito: nova frase", verif=VER)

bic = lambda p, q: p == q
ok = all((not bic(p, q)) == (p != q) for p, q in itertools.product([True, False], repeat=2))
ok2 = all((not bic(p, q)) == bic(p, not q) for p, q in itertools.product([True, False], repeat=2))
assert ok and ok2
Q(M, "2", """A negação da proposição "O pagamento é aprovado se, e somente se, o limite está disponível" é logicamente equivalente a:""",
  ("O pagamento é aprovado se, e somente se, o limite não está disponível.", "~(p ↔ q) ≡ p ↔ ~q (também equivale à disjunção exclusiva: ou p, ou q)."),
  [("O pagamento não é aprovado se, e somente se, o limite não está disponível.", "~p ↔ ~q equivale a p ↔ q (a própria proposição)."),
   ("O pagamento é aprovado e o limite não está disponível.", "É só um dos dois casos em que a bicondicional é falsa."),
   ("Se o pagamento é aprovado, então o limite não está disponível.", "Não cobre o caso em que o pagamento não é aprovado e o limite está disponível."),
   ("O pagamento não é aprovado ou o limite está disponível.", "Equivale a p → q, uma das metades da bicondicional.")],
  pai="RLE-0035", dif=2, tags=["negação", "bicondicional"], var="conceito: troca da forma da resposta (p ↔ ~q)", verif=VER)
