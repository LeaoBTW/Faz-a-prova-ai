# -*- coding: utf-8 -*-
"""Matemática financeira (RLE) – variações e inéditas do agente 2.

Todos os valores das alternativas são calculados aqui (nada digitado à mão);
os asserts conferem os valores-chave e a função Q confere que as 5 alternativas são distintas.
"""
import math

from base import Q, brl, num, pct

M = "RLE"
VER = "Python: tools/verificacao/agente2/rle_fin.py"


def R(v):
    return brl(v) + "."


def P(v, casas=2, suf=""):
    return pct(v, casas) + suf + "."


def r2(x):
    return round(x + 1e-12, 2)


# =====================================================================
# Juros simples – pai RLE-0061
# =====================================================================
C, i, t = 8000, 0.0125, 18
J = C * i * t
Jc = C * ((1 + i) ** t - 1)
assert J == 1800
Q(M, "8", """Um capital de R$ 8.000,00 foi aplicado a juros simples de 1,25% ao mês durante 1 ano e meio.

Os juros obtidos foram de""",
  (R(J), f"J = C·i·t = 8.000 × 0,0125 × 18 = **{brl(J)}** (1 ano e meio = 18 meses)."),
  [(R(Jc), "Usou juros compostos: 8.000 × (1,0125¹⁸ − 1)."),
   (R(C + J), "É o montante (capital + juros), não os juros."),
   (R(C * i * 1.5), "Usou o prazo em anos (1,5) com a taxa mensal."),
   (R(C * i * 12), "Considerou apenas 12 meses.")],
  pai="RLE-0061", dif=1, tags=["juros simples"], var="cálculo: novos valores e prazo em anos", verif=VER)

C, M_, t = 12000, 14160, 8
i = (M_ - C) / (C * t)
ic = (M_ / C) ** (1 / t) - 1
assert abs(i - 0.0225) < 1e-12
Q(M, "8", """Um capital de R$ 12.000,00, aplicado a juros simples durante 8 meses, produziu montante de R$ 14.160,00.

A taxa mensal da aplicação foi de""",
  (P(i, suf=" ao mês"), f"J = 14.160 − 12.000 = 2.160 = 12.000 × i × 8 ⇒ i = 2.160/96.000 = **2,25% a.m.**"),
  [(P((M_ - C) / C, suf=" ao mês"), "É a taxa do período inteiro (18%), não a mensal."),
   (P(ic, suf=" ao mês"), "Calculou a taxa composta equivalente: (14.160/12.000)^(1/8) − 1."),
   (P((M_ - C) / (M_ * t), suf=" ao mês"), "Dividiu os juros pelo montante, e não pelo capital."),
   (P((M_ - C) / C / 12, suf=" ao mês"), "Dividiu a taxa do período por 12, como se o prazo fosse de um ano.")],
  pai="RLE-0061", dif=1, tags=["juros simples", "taxa"], var="cálculo: pergunta inversa (achar a taxa)", verif=VER)

C, i, dias = 18000, 0.03, 50
J = C * i / 30 * dias
Jexato = C * i * 12 / 365 * dias
Jc = C * ((1 + i) ** (dias / 30) - 1)
assert J == 900
Q(M, "8", """Um empréstimo de R$ 18.000,00 foi contratado a juros simples de 3% ao mês, por 50 dias. Considere o mês comercial de 30 dias.

Os juros devidos ao final do prazo são""",
  (R(J), f"Taxa diária = 3%/30 = 0,1% a.d. J = 18.000 × 0,001 × 50 = **{brl(J)}**."),
  [(R(Jexato), "Usou juros exatos (ano civil de 365 dias), contrariando o enunciado."),
   (R(r2(Jc)), "Usou juros compostos com prazo fracionário (1,03^(50/30))."),
   (R(C * i * 2), "Arredondou o prazo para 2 meses."),
   (R(C * i), "Considerou apenas 1 mês.")],
  pai="RLE-0061", dif=2, tags=["juros simples", "prazo em dias"], var="cálculo: prazo em dias (mês comercial)", verif=VER)

# =====================================================================
# Juros compostos – pai RLE-0062
# =====================================================================
C, i, t = 15000, 0.02, 4
Mc = C * (1 + i) ** t
assert r2(Mc) == 16236.48
Q(M, "8", """Um capital de R$ 15.000,00 é aplicado a juros compostos de 2% ao mês por 4 meses. Considere 1,02⁴ = 1,082432.

O montante ao final do prazo é""",
  (R(r2(Mc)), "M = 15.000 × 1,082432 = **R$ 16.236,48**."),
  [(R(C * (1 + i * t)), "Usou juros simples: 15.000 × 1,08."),
   (R(r2(Mc - C)), "São só os juros, não o montante."),
   (R(r2(C * (1 + i) ** 5)), "Capitalizou 5 períodos."),
   (R(C * (1 + i)), "Aplicou a taxa uma única vez.")],
  pai="RLE-0062", dif=1, tags=["juros compostos", "montante"], var="cálculo: novos valores", verif=VER)

M_, i, t = 26620, 0.10, 3
C = M_ / (1 + i) ** t
assert round(C, 6) == 20000
Q(M, "8", """Quanto deve ser aplicado hoje, a juros compostos de 10% ao ano, para resgatar R$ 26.620,00 daqui a 3 anos?""",
  (R(C), "C = 26.620 / 1,1³ = 26.620 / 1,331 = **R$ 20.000,00**."),
  [(R(r2(M_ / (1 + i * t))), "Usou juros simples: 26.620 / 1,3."),
   (R(r2(M_ * (1 - i) ** t)), "Multiplicou por 0,9³ (desconto comercial), que não é o inverso da capitalização."),
   (R(M_ / (1 + i) ** 2), "Descontou apenas 2 períodos."),
   (R(r2(M_ * (1 - i * t))), "Fez 26.620 × (1 − 0,30), desconto comercial simples.")],
  pai="RLE-0062", dif=1, tags=["juros compostos", "valor presente"], var="cálculo: pergunta inversa (achar o capital)", verif=VER)

C, M_, t = 10000, 12544, 2
i = (M_ / C) ** (1 / t) - 1
assert abs(i - 0.12) < 1e-12
Q(M, "8", """Um investimento de R$ 10.000,00 transformou-se em R$ 12.544,00 após 2 meses, no regime de juros compostos.

A taxa mensal de juros foi de""",
  (P(i, suf=" ao mês"), "(1 + i)² = 1,2544 ⇒ 1 + i = 1,12 ⇒ **i = 12% a.m.**"),
  [(P((M_ - C) / C / t, suf=" ao mês"), "Usou juros simples: 25,44%/2."),
   (P((M_ - C) / C, suf=" ao mês"), "É a taxa do período de 2 meses."),
   ("1,12% ao mês.", "Confundiu o fator (1,12) com a taxa."),
   (P((M_ - C) / C / 4, suf=" ao mês"), "Dividiu a taxa do período por 4, sem fundamento.")],
  pai="RLE-0062", dif=2, tags=["juros compostos", "taxa"], var="cálculo: pergunta inversa (achar a taxa)", verif=VER)

# =====================================================================
# Prazo em juros simples – pai RLE-0063
# =====================================================================
i = 0.06
t = 3 / i
assert round(t, 9) == 50
Q(M, "8", """No regime de juros simples, à taxa de 6% ao mês, em quanto tempo um capital quadruplica?""",
  ("50 meses.", "M = 4C ⇒ J = 3C ⇒ C × 0,06 × t = 3C ⇒ t = 3/0,06 = **50 meses**."),
  [(num(4 / i) + " meses.", "Usou J = 4C (confundiu montante com juros)."),
   (num(2 / i) + " meses.", "É o prazo para triplicar (J = 2C)."),
   (num(1 / i) + " meses.", "É o prazo para dobrar (J = C)."),
   (num(math.log(4) / math.log(1 + i)) + " meses.", "Usou juros compostos: ln 4 / ln 1,06.")],
  pai="RLE-0063", dif=1, tags=["juros simples", "prazo"], var="cálculo: troca de 'triplicar' por 'quadruplicar'", verif=VER)

r = 0.6
i = r / 30
assert abs(i - 0.02) < 1e-12
Q(M, "8", """Um capital aplicado a juros simples rendeu, em 2 anos e 6 meses, juros iguais a 3/5 do próprio capital.

A taxa mensal dessa aplicação foi de""",
  (P(i, suf=" ao mês"), "J = 0,6C = C × i × 30 ⇒ i = 0,6/30 = **2% a.m.** (2 anos e 6 meses = 30 meses)."),
  [(P(r / 25, suf=" ao mês"), "Leu \"2,5 anos\" como 25 meses."),
   (P(r / 24, suf=" ao mês"), "Usou só os 2 anos (24 meses)."),
   (P(r / 36, suf=" ao mês"), "Usou 3 anos (36 meses)."),
   (P(1.6 ** (1 / 30) - 1, suf=" ao mês"), "Calculou a taxa composta: 1,6^(1/30) − 1.")],
  pai="RLE-0063", dif=2, tags=["juros simples", "taxa"], var="cálculo: achar a taxa a partir da fração de juros", verif=VER)

# =====================================================================
# Taxas equivalentes, nominal e efetiva – pai RLE-0064
# =====================================================================
i = 1.03 ** 3 - 1
Q(M, "8", """A taxa trimestral equivalente, no regime de juros compostos, a 3% ao mês é de, aproximadamente,""",
  (P(i), "(1,03)³ − 1 = 1,092727 − 1 ≈ **9,27% a.t.**"),
  [(P(0.09), "É a taxa proporcional (regime simples): 3 × 3%."),
   (P(1.03 ** (1 / 3) - 1), "Extraiu a raiz cúbica, quando deveria elevar ao cubo."),
   (P(1.03 ** 12 - 1), "É a taxa anual equivalente."),
   (P(1.03 ** 2 - 1), "É a taxa bimestral equivalente.")],
  pai="RLE-0064", dif=1, tags=["taxas equivalentes"], var="cálculo: novos valores (mensal → trimestral)", verif=VER)

i = 1.44 ** 0.5 - 1
assert abs(i - 0.2) < 1e-12
Q(M, "8", """No regime de juros compostos, a taxa semestral equivalente a 44% ao ano é""",
  (P(i), "(1 + i)² = 1,44 ⇒ 1 + i = 1,2 ⇒ **20% a.s.**"),
  [(P(0.22), "É a taxa proporcional (44%/2), própria do regime simples."),
   (P(1.44 ** (1 / 12) - 1), "É a taxa mensal equivalente."),
   (P(1.44 ** 2 - 1), "Elevou ao quadrado em vez de extrair a raiz."),
   (P(1.44 ** 0.25 - 1), "É a taxa trimestral equivalente.")],
  pai="RLE-0064", dif=1, tags=["taxas equivalentes"], var="cálculo: sentido inverso (anual → semestral)", verif=VER)

ief = 1.03 ** 12 - 1
Q(M, "8", """Um banco anuncia uma taxa de 36% ao ano com capitalização mensal. Considere 1,03¹² ≈ 1,4258.

A taxa efetiva anual dessa operação é de, aproximadamente,""",
  (P(ief), "Taxa nominal → efetiva do período de capitalização: 36%/12 = 3% a.m. Efetiva anual: 1,03¹² − 1 ≈ **42,58% a.a.**"),
  [(P(0.36), "É a taxa nominal, não a efetiva."),
   (P(1.09 ** 4 - 1), "Usou capitalização trimestral (9% a.t.)."),
   (P(1.03 ** 6 - 1), "Capitalizou só 6 meses (é a efetiva semestral)."),
   (P(0.03), "É a taxa efetiva mensal.")],
  pai="RLE-0064", dif=2, tags=["taxa nominal", "taxa efetiva"], var="cálculo: troca para conversão nominal → efetiva", verif=VER)

ief = 1.08 ** 3 - 1
Q(M, "8", """Uma aplicação paga taxa nominal de 24% ao semestre, com capitalização bimestral.

A taxa efetiva semestral dessa aplicação é de, aproximadamente,""",
  (P(ief), "Um semestre tem 3 bimestres: 24%/3 = 8% ao bimestre. Efetiva semestral: 1,08³ − 1 ≈ **25,97%**."),
  [(P(0.24), "É a taxa nominal."),
   (P(0.08), "É a taxa efetiva bimestral."),
   (P(1.08 ** 6 - 1), "É a taxa efetiva anual (6 bimestres)."),
   (P(1.04 ** 6 - 1), "Dividiu por 6 (mensal) e capitalizou 6 vezes, como se a capitalização fosse mensal.")],
  pai="RLE-0064", dif=2, tags=["taxa nominal", "taxa efetiva"], var="cálculo: nominal → efetiva com outro período", verif=VER)

# =====================================================================
# Taxa real (Fisher) – pais RLE-0065 e RLE-0151
# =====================================================================
ir = 1.134 / 1.05 - 1
assert abs(ir - 0.08) < 1e-12
Q(M, "25", """Uma aplicação rendeu 13,4% em um ano no qual a inflação foi de 5%.

A taxa real de rendimento no período foi de""",
  (P(ir), "Fisher: (1 + r) = 1,134 / 1,05 = 1,08 ⇒ **r = 8%**."),
  [(P(0.084), "Subtraiu as taxas (13,4% − 5%), o que é só aproximação."),
   (P(1.134 * 1.05 - 1), "Multiplicou os fatores em vez de dividir."),
   (P(0.05), "É a inflação."),
   (P(0.134), "É a taxa nominal (aparente).")],
  pai="RLE-0151", dif=1, tags=["taxa real", "Fisher"], var="cálculo: novos valores", verif=VER)

inom = 1.06 * 1.04 - 1
Q(M, "25", """Um investidor deseja ganho real de 6% ao ano. Para uma inflação esperada de 4% ao ano, a taxa nominal mínima que a aplicação deve oferecer é""",
  (P(inom), "(1 + i) = 1,06 × 1,04 = 1,1024 ⇒ **i = 10,24% a.a.**"),
  [(P(0.10), "Somou as taxas, aproximação que ignora o produto 6% × 4%."),
   (P(1.06 / 1.04 - 1), "Dividiu os fatores (isso daria a taxa real, não a nominal)."),
   (P(0.02), "Subtraiu as taxas."),
   (P(0.24), "Multiplicou 6 por 4.")],
  pai="RLE-0151", dif=2, tags=["taxa real", "Fisher"], var="cálculo: pergunta inversa (achar a nominal)", verif=VER)

ir = 1.045 / 1.066 - 1
Q(M, "25", """Uma aplicação rendeu 4,5% em um período em que a inflação acumulada foi de 6,6%.

É correto afirmar que a taxa real do período foi de, aproximadamente,""",
  (P(ir), "1,045 / 1,066 ≈ 0,9803 ⇒ r ≈ **−1,97%**: houve perda real de poder de compra."),
  [(P(0.045 - 0.066), "Subtraiu as taxas (aproximação)."),
   (P(1.066 / 1.045 - 1), "Inverteu a divisão e obteve taxa positiva."),
   (P(1.045 * 1.066 - 1), "Multiplicou os fatores."),
   (P(-0.066), "Considerou apenas a inflação.")],
  pai="RLE-0065", dif=2, tags=["taxa real", "Fisher", "juro real negativo"], var="cálculo: caso de juro real negativo", verif=VER)

# =====================================================================
# Capitalização contínua – pai RLE-0150
# =====================================================================
Mcont = 8000 * 1.2214
assert abs(8000 * math.exp(0.2) - Mcont) < 1
Q(M, "25", """Um capital de R$ 8.000,00 é aplicado a 10% ao ano, com capitalização contínua, por 2 anos. Considere e^0,2 = 1,2214.

O montante ao final do prazo é de, aproximadamente,""",
  (R(Mcont), "M = C·e^(i·t) = 8.000 × e^0,2 = 8.000 × 1,2214 = **R$ 9.771,20**."),
  [(R(8000 * 1.1 ** 2), "Usou capitalização anual discreta (1,1²)."),
   (R(8000 * 1.2), "Usou juros simples."),
   (R(r2(8000 * (1 + 0.1 / 12) ** 24)), "Usou capitalização mensal discreta (taxa nominal 10% a.a.)."),
   (R(Mcont - 8000), "São só os juros.")],
  pai="RLE-0150", dif=2, tags=["capitalização contínua"], var="cálculo: novos valores", verif=VER)

ief = 1.1275 - 1
assert abs(math.exp(0.12) - 1.1275) < 1e-4
Q(M, "25", """Uma taxa de 12% ao ano com capitalização contínua equivale a qual taxa efetiva anual? Considere e^0,12 ≈ 1,1275.""",
  (P(ief), "i_ef = e^0,12 − 1 ≈ **12,75% a.a.**"),
  [(P(0.12), "Confundiu a taxa contínua com a efetiva."),
   (P(1.01 ** 12 - 1), "Usou capitalização mensal de 1% a.m."),
   (P(math.log(1.12)), "Fez o caminho inverso (ln 1,12), que dá a taxa contínua equivalente a 12% efetivos."),
   (P(math.exp(0.06) - 1), "Usou meio ano (e^0,06 − 1).")],
  pai="RLE-0150", dif=2, tags=["capitalização contínua", "taxa efetiva"], var="cálculo: troca do que se pede (taxa efetiva equivalente)", verif=VER)

t = 0.693 / 0.08
Q(M, "25", """Com capitalização contínua à taxa de 8% ao ano, em quanto tempo um capital dobra? Considere ln 2 ≈ 0,693.""",
  (num(t) + " anos.", "2 = e^(0,08t) ⇒ 0,08t = ln 2 ⇒ t = 0,693/0,08 ≈ **8,66 anos**."),
  [(num(1 / 0.08) + " anos.", "Usou juros simples (i·t = 1)."),
   (num(math.log(2) / math.log(1.08)) + " anos.", "Usou capitalização anual discreta (ln 2 / ln 1,08)."),
   (num(t / 2) + " anos.", "Dividiu por 2 sem motivo."),
   (num(2 / 0.08) + " anos.", "Usou i·t = 2 (triplicar no regime simples).")],
  pai="RLE-0150", dif=2, tags=["capitalização contínua", "prazo"], var="cálculo: pergunta inversa (tempo de duplicação)", verif=VER)

# =====================================================================
# Descontos simples – inéditas (apostila 02 §8.7 e §22.1)
# =====================================================================
N, d, t = 15000, 0.025, 4
A = N * (1 - d * t)
assert A == 13500
Q(M, "8", """Um título de valor nominal R$ 15.000,00 foi descontado em um banco 4 meses antes do vencimento, com desconto **comercial simples** à taxa de 2,5% ao mês.

O valor líquido recebido pelo cliente foi""",
  (R(A), "D = N·d·t = 15.000 × 0,025 × 4 = 1.500; A = 15.000 − 1.500 = **R$ 13.500,00**."),
  [(R(r2(N / (1 + d * t))), "Usou desconto racional simples: 15.000/1,1."),
   (R(r2(N * (1 - d) ** t)), "Usou desconto comercial composto: 15.000 × 0,975⁴."),
   (R(N * d * t), "É o valor do desconto, não o valor líquido."),
   (R(N * (1 - d * 3)), "Usou 3 meses de antecipação.")],
  pai=None, dif=1, tags=["desconto simples", "desconto comercial"], var="inédita (desconto comercial simples)", verif=VER)

N, i, t = 22000, 0.02, 5
A = N / (1 + i * t)
D = N - A
assert round(D, 6) == 2000
Q(M, "8", """Um título de R$ 22.000,00 é resgatado 5 meses antes do vencimento, com desconto **racional simples** (por dentro) à taxa de 2% ao mês.

O valor do desconto concedido é""",
  (R(D), "A = N/(1 + i·t) = 22.000/1,10 = 20.000; D = 22.000 − 20.000 = **R$ 2.000,00**."),
  [(R(N * i * t), "Usou desconto comercial (por fora): 22.000 × 0,10."),
   (R(A), "É o valor atual, não o desconto."),
   (R(r2(N - N / (1 + i) ** t)), "Usou desconto racional composto."),
   (R(r2(D / (1 + i * t))), "Descontou novamente o próprio desconto (2.000/1,1).")],
  pai=None, dif=1, tags=["desconto simples", "desconto racional"], var="inédita (desconto racional simples)", verif=VER)

N, d, t = 10000, 0.04, 2
D = N * d * t
A = N - D
ief = D / (A * t)
iefc = (N / A) ** (1 / t) - 1
Q(M, "22", """Uma duplicata de R$ 10.000,00 foi descontada 2 meses antes do vencimento, com desconto comercial simples de 4% ao mês.

A taxa mensal de juros simples efetivamente cobrada na operação (sobre o valor recebido) é de, aproximadamente,""",
  (P(ief, suf=" ao mês"), f"D = 10.000 × 0,04 × 2 = 800; A = 9.200. Taxa efetiva: 800 = 9.200 × i × 2 ⇒ i = 800/18.400 ≈ **4,35% a.m.**, maior que a taxa de desconto."),
  [(P(0.04, suf=" ao mês"), "É a taxa de desconto, que incide sobre o valor nominal, não sobre o valor recebido."),
   (P(D / A, suf=" ao mês"), "É a taxa do período de 2 meses."),
   (P(iefc, suf=" ao mês"), "Calculou a taxa composta equivalente (10.000/9.200)^(1/2) − 1."),
   (P(0.04 / 1.04, suf=" ao mês"), "Fez d/(1 + d), relação que vale para um único período e no sentido inverso.")],
  pai=None, dif=3, tags=["desconto simples", "taxa efetiva"], var="inédita (taxa efetiva do desconto comercial)", verif=VER)

N, i, t = 12600, 0.02, 3
Dc = N * i * t
Dr = N - N / (1 + i * t)
assert r2(Dc - Dr) == r2(Dr * i * t)
Q(M, "8", """Um título de R$ 12.600,00 vence em 3 meses. A taxa de desconto simples é de 2% ao mês.

A diferença entre o desconto comercial e o desconto racional, ambos simples, é de, aproximadamente,""",
  (R(r2(Dc - Dr)), f"Dc = 12.600 × 0,06 = {brl(Dc)}; Ar = 12.600/1,06 ≈ {brl(N/1.06)}; Dr ≈ {brl(Dr)}. Diferença ≈ **{brl(Dc - Dr)}** (= Dr × i × t)."),
  [(R(Dc), "É o desconto comercial."),
   (R(r2(Dr)), "É o desconto racional."),
   (R(r2(Dc * i * t)), "Aplicou i·t sobre o desconto comercial (a relação correta é Dc − Dr = Dr·i·t)."),
   (R(r2(Dc + Dr)), "Somou os dois descontos.")],
  pai=None, dif=3, tags=["desconto simples", "comercial x racional"], var="inédita (relação entre descontos comercial e racional)", verif=VER)

# =====================================================================
# Descontos compostos – pai RLE-0131
# =====================================================================
N, i, t = 13310, 0.10, 3
A = N / (1 + i) ** t
assert round(A, 6) == 10000
Q(M, "22", """Um título de R$ 13.310,00 é resgatado 3 meses antes do vencimento, com desconto **racional composto** à taxa de 10% ao mês.

O valor recebido é""",
  (R(A), "A = N/(1 + i)ᵗ = 13.310/1,331 = **R$ 10.000,00**."),
  [(R(r2(N * 0.9 ** 3)), "Usou desconto comercial composto: 13.310 × 0,9³."),
   (R(r2(N / 1.3)), "Usou desconto racional simples: 13.310/1,3."),
   (R(r2(N * 0.7)), "Usou desconto comercial simples: 13.310 × 0,7."),
   (R(N - A), "É o valor do desconto.")],
  pai="RLE-0131", dif=1, tags=["desconto composto", "desconto racional"], var="cálculo: novos valores", verif=VER)

N, d, t = 20000, 0.05, 2
A = N * (1 - d) ** t
assert round(A, 6) == 18050
Q(M, "22", """Um título de R$ 20.000,00 é descontado 2 meses antes do vencimento, com desconto **comercial composto** à taxa de 5% ao mês.

O valor atual do título é""",
  (R(A), "A = N·(1 − d)ᵗ = 20.000 × 0,95² = 20.000 × 0,9025 = **R$ 18.050,00**."),
  [(R(r2(N / 1.05 ** 2)), "Usou desconto racional composto: 20.000/1,1025."),
   (R(N * (1 - d * t)), "Usou desconto comercial simples."),
   (R(r2(N / (1 + d * t))), "Usou desconto racional simples."),
   (R(N - A), "É o valor do desconto.")],
  pai="RLE-0131", dif=2, tags=["desconto composto", "desconto comercial"], var="cálculo: troca da modalidade (comercial composto)", verif=VER)

N, i, t = 23328, 0.08, 2
A = N / (1 + i) ** t
D = N - A
assert round(A, 6) == 20000
Q(M, "22", """Um título de R$ 23.328,00 é liquidado 2 meses antes do vencimento, com desconto racional composto à taxa de 8% ao mês.

O valor do desconto obtido é""",
  (R(D), "A = 23.328/1,08² = 23.328/1,1664 = 20.000; D = 23.328 − 20.000 = **R$ 3.328,00**."),
  [(R(r2(N * (1 - 0.92 ** 2))), "Usou desconto comercial composto."),
   (R(r2(N * i * t)), "Usou desconto comercial simples."),
   (R(r2(N - N / 1.16)), "Usou desconto racional simples."),
   (R(A), "É o valor atual, não o desconto.")],
  pai="RLE-0131", dif=2, tags=["desconto composto", "desconto racional"], var="cálculo: pede o desconto em vez do valor atual", verif=VER)

# =====================================================================
# Prestações (Price / rendas) – pai RLE-0132
# =====================================================================
PV, i = 2100, 0.10
PMT = PV / (1 / 1.1 + 1 / 1.21)
assert round(PMT, 6) == 1210
Q(M, "22", """Um empréstimo de R$ 2.100,00 será pago em 2 prestações mensais iguais, a primeira 1 mês após a contratação, à taxa de juros compostos de 10% ao mês (sistema Price).

O valor de cada prestação é""",
  (R(PMT), "2.100 = P/1,1 + P/1,21 = P × (1,1 + 1)/1,21 = P × 2,1/1,21 ⇒ **P = R$ 1.210,00**."),
  [(R(PV * 1.1 / 2), "Aplicou juros de um só mês sobre o total e dividiu por 2."),
   (R(r2(PV * 1.21 / 2)), "Capitalizou o total por 2 meses e dividiu por 2."),
   (R(PV / 2), "Dividiu o valor sem juros."),
   (R(r2(PV / (1 + 1 / 1.1))), "Considerou a 1ª prestação na data zero (série antecipada).")],
  pai="RLE-0132", dif=2, tags=["Price", "série uniforme"], var="cálculo: novos valores", verif=VER)

PV, i = 3310, 0.10
fat_ant = 1 + 1 / 1.1 + 1 / 1.21
fat_post = 1 / 1.1 + 1 / 1.21 + 1 / 1.331
P_ant = PV / fat_ant
P_post = PV / fat_post
assert round(P_ant, 6) == 1210 and round(P_post, 6) == 1331
Q(M, "22", """Um equipamento de R$ 3.310,00 será pago em 3 prestações mensais iguais, **sendo a primeira no ato da compra**, à taxa de juros compostos de 10% ao mês.

O valor de cada prestação é""",
  (R(P_ant), "Série antecipada: 3.310 = P × (1 + 1/1,1 + 1/1,21) = P × 3,31/1,21 ⇒ **P = R$ 1.210,00**."),
  [(R(P_post), "Tratou a série como postecipada (sem entrada)."),
   (R(r2(PV / 3)), "Dividiu o preço em 3 parcelas sem juros."),
   (R(r2(PV * 1.1 / 3)), "Acrescentou 10% sobre o total e dividiu por 3."),
   (R(r2(PV * 1.21 / 3)), "Capitalizou o total por 2 meses e dividiu por 3.")],
  pai="RLE-0132", dif=2, tags=["série antecipada", "rendas"], var="cálculo: série antecipada (com entrada)", verif=VER)

PMT, i, n = 1000, 0.02, 3
FV = PMT * ((1 + i) ** n - 1) / i
assert r2(FV) == 3060.40
Q(M, "22", """Um poupador deposita R$ 1.000,00 ao final de cada mês, durante 3 meses, em uma aplicação que rende juros compostos de 2% ao mês.

Imediatamente após o 3º depósito, o saldo acumulado é""",
  (R(r2(FV)), "FV = 1.000 × 1,02² + 1.000 × 1,02 + 1.000 = 1.040,40 + 1.020 + 1.000 = **R$ 3.060,40**."),
  [(R(PMT * n), "Ignorou os juros."),
   (R(r2(FV * 1.02)), "Tratou como série antecipada (multiplicou por 1,02)."),
   (R(PMT * (1 + 0.04 + 1 + 0.02 + 1)), "Usou juros simples (1.040 + 1.020 + 1.000)."),
   (R(r2(PMT * (1 - 1.02 ** -3) / 0.02)), "Calculou o valor presente da série, e não o montante.")],
  pai="RLE-0132", dif=2, tags=["rendas", "valor futuro"], var="cálculo: troca para montante de série uniforme", verif=VER)

# =====================================================================
# Sistema Price: juros, amortização e saldo – pai RLE-0136
# =====================================================================
PV, i, PMT = 80000, 0.015, 3200
j1 = PV * i
a1 = PMT - j1
s1 = PV - a1
j2 = s1 * i
a2 = PMT - j2
assert (j1, a1, s1) == (1200, 2000, 78000) and r2(a2) == 2030
Q(M, "22", """Um financiamento de R$ 80.000,00 é pago pelo sistema Price, com taxa de 1,5% ao mês e prestação mensal de R$ 3.200,00.

O valor da amortização contida na **segunda** prestação é""",
  (R(r2(a2)), f"1ª: juros = 1,5% × 80.000 = 1.200; amortização = 2.000; saldo = 78.000. 2ª: juros = 1,5% × 78.000 = 1.170; amortização = 3.200 − 1.170 = **{brl(a2)}** (= 2.000 × 1,015)."),
  [(R(a1), "É a amortização da 1ª prestação; no Price ela cresce a cada período."),
   (R(r2(j2)), "São os juros da 2ª prestação."),
   (R(j1), "São os juros da 1ª prestação."),
   (R(r2(a1 * 1.015 ** 2)), "É a amortização da 3ª prestação.")],
  pai="RLE-0136", dif=2, tags=["Price", "amortização"], var="cálculo: pede a amortização da 2ª prestação", verif=VER)

PV, i, PMT = 60000, 0.02, 2500
s1 = PV - (PMT - PV * i)
assert s1 == 58700
Q(M, "22", """Um financiamento de R$ 60.000,00 pelo sistema Price, à taxa de 2% ao mês, tem prestação mensal de R$ 2.500,00.

O saldo devedor imediatamente após o pagamento da 1ª prestação é""",
  (R(s1), "Juros = 2% × 60.000 = 1.200; amortização = 2.500 − 1.200 = 1.300; saldo = 60.000 − 1.300 = **R$ 58.700,00**."),
  [(R(PV - PMT), "Abateu a prestação inteira do saldo, esquecendo que parte dela é juros."),
   (R(PV + PV * i - 0), "Somou os juros ao saldo e não abateu a prestação."),
   (R(PV - PV * i), "Abateu do saldo apenas os juros."),
   (R(PV * 1.02 - PMT * 1.02), "Capitalizou também a prestação.")],
  pai="RLE-0136", dif=1, tags=["Price", "saldo devedor"], var="cálculo: pede o saldo devedor", verif=VER)

PV, i, n = 10000, 0.01, 12
PMT = PV * i / (1 - (1 + i) ** -n)
j_tot = PMT * n - PV
sac_j = sum((PV - PV / n * k) * i for k in range(n))
assert r2(PMT) == 888.49 and r2(sac_j) == 650
Q(M, "22", """Um empréstimo de R$ 10.000,00 será quitado em 12 prestações mensais a 1% ao mês. Considere que, no sistema Price, a prestação é de R$ 888,49.

Comparando o sistema Price com o SAC (mesmo valor, prazo e taxa), é correto afirmar que o total de juros pagos""",
  (f"no Price é de aproximadamente {brl(r2(PMT) * 12 - PV)}, maior que os {brl(sac_j)} do SAC.",
   f"Price: 12 × 888,49 − 10.000 = {brl(r2(PMT)*12 - PV)}. SAC: juros sobre saldos que caem 833,33 por mês: 1% × (10.000 + 9.166,67 + … + 833,33) = 1% × 65.000 = {brl(sac_j)}. O SAC devolve o principal mais depressa e paga menos juros."),
  [(f"é igual nos dois sistemas, pois a taxa é a mesma.", "A taxa é a mesma, mas os saldos devedores diferem; o total de juros não é igual."),
   (f"no SAC é de aproximadamente {brl(r2(PMT) * 12 - PV)}, maior que o do Price.", "Inverteu os sistemas."),
   (f"no Price é de {brl(PV * i * n)}, igual ao de juros simples sobre o valor total.", "Calculou juros simples sobre 10.000 por 12 meses, ignorando as amortizações."),
   (f"no SAC é de {brl(PV * i * n / 2)}, exatamente metade do Price.", "Valor e relação sem fundamento: o SAC dá R$ 650,00.")],
  pai="RLE-0136", dif=3, tags=["Price", "SAC", "comparação"], var="conceito/cálculo: comparação Price × SAC", verif=VER)

# =====================================================================
# SAC e SAM – pai RLE-0144
# =====================================================================
PV, n, i = 36000, 6, 0.02
A = PV / n
p3 = A + (PV - 2 * A) * i
assert p3 == 6480
Q(M, "22", """Um financiamento de R$ 36.000,00 será pago em 6 prestações mensais pelo Sistema de Amortização Constante (SAC), à taxa de 2% ao mês.

O valor da **terceira** prestação é""",
  (R(p3), "Amortização = 36.000/6 = 6.000. Saldo antes da 3ª: 36.000 − 2 × 6.000 = 24.000. Juros = 2% × 24.000 = 480. Prestação = **R$ 6.480,00**."),
  [(R(A + PV * i), "É a 1ª prestação (juros sobre o saldo inicial)."),
   (R(A + (PV - A) * i), "É a 2ª prestação."),
   (R(A + (PV - 3 * A) * i), "É a 4ª prestação (usou o saldo após 3 amortizações)."),
   (R(A), "É só a amortização, sem juros.")],
  pai="RLE-0144", dif=2, tags=["SAC"], var="cálculo: troca para SAC e para a 3ª prestação", verif=VER)

PV, n, i = 30000, 5, 0.02
price = PV * i / (1 - (1 + i) ** -n)
sac1 = PV / n + PV * i
sam1 = (sac1 + r2(price)) / 2
assert r2(price) == 6364.75
Q(M, "24", """Um financiamento de R$ 30.000,00 será pago em 5 prestações mensais pelo Sistema de Amortização Misto (SAM), à taxa de 2% ao mês. Nas mesmas condições, a prestação do sistema Price é de R$ 6.364,75.

O valor da 1ª prestação no SAM é""",
  (R(r2(sam1)), f"1ª prestação SAC = 30.000/5 + 2% × 30.000 = 6.000 + 600 = 6.600. SAM = (6.600 + 6.364,75)/2 = **{brl(sam1)}**."),
  [(R(sac1), "É a 1ª prestação do SAC."),
   (R(r2(price)), "É a prestação do Price."),
   (R(PV / n), "É só a amortização do SAC."),
   (R(r2(sac1 + r2(price)) - PV / n), "Somou SAC e Price e subtraiu a amortização, sem fundamento.")],
  pai="RLE-0144", dif=2, tags=["SAM", "sistema misto"], var="cálculo: novos valores", verif=VER)

PV, n, i = 50000, 10, 0.01
A = PV / n
p = [A + (PV - k * A) * i for k in range(n)]
assert p[0] == 5500 and p[-1] == 5050 and r2(p[0] - p[1]) == 50
Q(M, "22", """Um empréstimo de R$ 50.000,00 é amortizado pelo SAC em 10 prestações mensais, com juros de 1% ao mês.

É correto afirmar que""",
  ("as prestações decrescem R$ 50,00 por mês, e a última é de R$ 5.050,00.",
   "Amortização = 5.000. Juros caem 1% × 5.000 = 50 a cada mês. 1ª = 5.000 + 500 = 5.500; última = 5.000 + 1% × 5.000 = **5.050**."),
  [("as prestações são iguais a R$ 5.500,00.", "No SAC as prestações não são constantes."),
   ("a amortização cresce R$ 50,00 por mês.", "No SAC a amortização é constante (R$ 5.000,00)."),
   ("os juros da 1ª prestação são de R$ 50,00.", "Os juros da 1ª são 1% × 50.000 = R$ 500,00."),
   ("a última prestação é de R$ 5.000,00, sem juros.", "Ainda há juros sobre o saldo de R$ 5.000,00 (R$ 50,00).")],
  pai="RLE-0144", dif=2, tags=["SAC"], var="cálculo/conceito: comportamento das prestações no SAC", verif=VER)

# Conversão das C/E sobre sistemas de amortização – pai RLE-0134 (C/E)
Q(M, "22", """Sobre sistemas de amortização de empréstimos, assinale a alternativa correta.""",
  ("No sistema Price, a parcela de juros decresce e a de amortização cresce ao longo do tempo.",
   "No Price a prestação é constante; como o saldo cai, os juros caem e a amortização (prestação − juros) cresce."),
  [("No SAC, as prestações são iguais e os juros, decrescentes.", "No SAC a **amortização** é constante e as prestações decrescem."),
   ("No SAC, a amortização cresce em progressão geométrica de razão (1 + i).", "Isso ocorre com a amortização do Price; no SAC ela é constante."),
   ("Para mesmo valor, prazo e taxa, o Price paga menos juros totais que o SAC.", "É o contrário: o SAC devolve o principal mais cedo e paga menos juros."),
   ("No SAM, a prestação é a soma das prestações do SAC e do Price no mesmo período.", "No SAM a prestação é a **média aritmética** das duas.")],
  explic="Questão A–E montada a partir da afirmação Certo/Errado da apostila (Q4 do §22) e de outras quatro afirmações do mesmo tópico.",
  pai="RLE-0134", dif=1, tags=["SAC", "Price", "SAM", "conversão C/E"], var="Certo/Errado → A–E com 5 afirmações", verif="Conferido com a apostila 02 §22.4.")

# =====================================================================
# VPL e TIR – pai RLE-0133 e inéditas
# =====================================================================
I0, f1, f2 = 25000, 13200, 17424
pv = f1 / 1.1 + f2 / 1.21
vpl = pv - I0
assert round(vpl, 6) == 1400
Q(M, "22", """Um projeto exige investimento de R$ 25.000,00 hoje e gera entradas de R$ 13.200,00 em 1 ano e de R$ 17.424,00 em 2 anos. A taxa mínima de atratividade (TMA) é de 10% ao ano.

É correto afirmar que""",
  (f"o VPL é de {brl(vpl)} e o projeto deve ser aceito, pois sua TIR supera 10% ao ano.",
   f"VPL = −25.000 + 13.200/1,1 + 17.424/1,21 = −25.000 + 12.000 + 14.400 = **{brl(vpl)}** > 0 ⇒ aceitar; VPL positivo à TMA implica TIR > TMA."),
  [(f"o VPL é de {brl(f1 + f2 - I0)} e o projeto deve ser aceito.", "Somou os fluxos sem descontá-los."),
   ("o VPL é nulo e a TIR do projeto é de 10% ao ano.", "O VPL a 10% é positivo; a TIR é maior que 10%."),
   (f"o VPL é de −{brl(vpl)} e o projeto deve ser rejeitado.", "Inverteu o sinal do VPL."),
   ("o projeto deve ser rejeitado, pois a TIR é inferior à TMA.", "Com VPL positivo à TMA, a TIR é superior à TMA.")],
  pai="RLE-0133", dif=2, tags=["VPL", "TIR", "análise de investimentos"], var="cálculo: novos valores (VPL positivo)", verif=VER)

I0, f1, f2 = 20000, 8800, 12100
vpl = -I0 + f1 / 1.1 + f2 / 1.21
assert round(vpl, 6) == -2000
Q(M, "22", """Uma empresa avalia um projeto com investimento inicial de R$ 20.000,00 e entradas de R$ 8.800,00 ao final do 1º ano e de R$ 12.100,00 ao final do 2º ano, com TMA de 10% ao ano.

O valor presente líquido do projeto é""",
  ("−R$ 2.000,00.", "VPL = −20.000 + 8.800/1,1 + 12.100/1,21 = −20.000 + 8.000 + 10.000 = **−R$ 2.000,00** (rejeitar)."),
  [(R(f1 + f2 - I0), "Somou os fluxos sem descontá-los (900)."),
   ("R$ 2.000,00.", "Inverteu o sinal."),
   ("−R$ 1.000,00.", "Descontou os dois fluxos por um único período (−20.000 + 8.000 + 11.000)."),
   (R(r2(f1 / 1.1 + f2 / 1.21)), "É o valor presente das entradas, sem subtrair o investimento.")],
  pai="RLE-0133", dif=2, tags=["VPL"], var="cálculo: novos valores (VPL negativo)", verif=VER)
assert round(-I0 + f1 / 1.1 + f2 / 1.1, 6) == -1000

I0, f = 10000, 4000
vpl = -I0 + f * (1 / 1.1 + 1 / 1.21 + 1 / 1.331)
assert r2(vpl) == -52.59
Q(M, "22", """Um projeto de automação custa R$ 10.000,00 hoje e gera economia de R$ 4.000,00 ao final de cada um dos próximos 3 anos. A TMA da empresa é de 10% ao ano. Considere 1/1,1 + 1/1,21 + 1/1,331 ≈ 2,4869.

É correto afirmar que""",
  (f"o VPL é de aproximadamente −R$ 52,40 e o projeto deve ser rejeitado, embora o payback simples seja de 2,5 anos.",
   "VPL = −10.000 + 4.000 × 2,4869 ≈ −52,40 (com o fator exato, −52,59). Como VPL < 0, rejeita-se. O payback simples (10.000/4.000 = 2,5 anos) ignora o valor do dinheiro no tempo."),
  [("o VPL é de R$ 2.000,00 e o projeto deve ser aceito.", "Somou os fluxos sem descontar (12.000 − 10.000)."),
   ("o projeto deve ser aceito, pois o payback simples é menor que o prazo do projeto.", "O critério do VPL indica rejeição; payback simples não considera o desconto."),
   ("a TIR do projeto é superior a 10% ao ano.", "Com VPL negativo à TMA, a TIR é inferior a 10%."),
   ("o VPL é nulo e o projeto é indiferente.", "O VPL é ligeiramente negativo.")],
  pai="RLE-0133", dif=3, tags=["VPL", "payback"], var="cálculo/conceito: três fluxos e confronto VPL × payback", verif=VER)
assert abs(-10000 + 4000 * 2.4869 + 52.40) < 0.01

# TIR – inéditas (apostila 02 §22.5)
tir = (12100 / 10000) ** 0.5 - 1
assert abs(tir - 0.10) < 1e-12
Q(M, "22", """Um investimento de R$ 10.000,00 hoje produz um único retorno de R$ 12.100,00 daqui a 2 anos.

A taxa interna de retorno (TIR) desse investimento é""",
  (P(tir, 0, " ao ano"), "A TIR zera o VPL: 10.000 = 12.100/(1 + r)² ⇒ (1 + r)² = 1,21 ⇒ **r = 10% a.a.**"),
  [(P(0.21, 0, " ao ano"), "É o retorno do período de 2 anos."),
   (P(0.105, 1, " ao ano"), "Dividiu os 21% por 2 (taxa simples)."),
   (P(1 - 1 / 1.1, 2, " ao ano"), "Calculou 1 − 1/1,1 (taxa de desconto comercial equivalente)."),
   (P(0.121, 1, " ao ano"), "Confundiu o valor de resgate com a taxa.")],
  pai=None, dif=1, tags=["TIR"], var="inédita (TIR com fluxo único)", verif=VER)

x = (-1 + math.sqrt(1 + 4 * 1000 / 600)) / 2
tir = 1 / x - 1
assert 0.13 < tir < 0.131
Q(M, "22", """Um projeto exige R$ 1.000,00 hoje e devolve R$ 600,00 ao final de cada um dos 2 anos seguintes.

A taxa interna de retorno desse projeto está""",
  ("entre 12% e 14% ao ano.", f"A TIR resolve 1.000 = 600/(1 + r) + 600/(1 + r)². Teste: a 12%, VPL = 600/1,12 + 600/1,2544 − 1.000 ≈ +14,03 > 0; a 14%, VPL ≈ −12,00 < 0. Logo a TIR (≈ {pct(tir)}) está **entre 12% e 14%**."),
  [("entre 0% e 10% ao ano.", "A 10% o VPL ainda é positivo (≈ +41,32), então a TIR é maior que 10%."),
   ("entre 10% e 12% ao ano.", "A 12% o VPL ainda é positivo."),
   ("entre 14% e 20% ao ano.", "A 14% o VPL já é negativo."),
   ("acima de 20% ao ano.", "Confundiu 20% (ganho total de 200 sobre 1.000) com a TIR.")],
  pai=None, dif=3, tags=["TIR", "VPL"], var="inédita (TIR por tentativa)", verif=VER)
v = lambda r: 600 / (1 + r) + 600 / (1 + r) ** 2 - 1000
assert round(v(0.12), 2) == 14.03 and round(v(0.14), 2) == -12.0 and round(v(0.10), 2) == 41.32

# =====================================================================
# Equivalência de capitais (data focal) – pai RLE-0145
# =====================================================================
x = 4000 / 1.05 + 4000 / 1.05 ** 2
Q(M, "24", """Uma empresa deve dois pagamentos de R$ 4.000,00, com vencimentos em 2 e 3 meses. Ela propõe substituí-los por um único pagamento no mês 1. Com juros compostos de 5% ao mês, o valor desse pagamento único é de, aproximadamente,""",
  (R(r2(x)), f"Data focal no mês 1: 4.000/1,05 + 4.000/1,05² ≈ 3.809,52 + 3.628,12 = **{brl(x)}**."),
  [(R(8000), "Somou os valores sem considerar os juros."),
   (R(r2(4000 / 1.05 ** 2 + 4000 / 1.05 ** 3)), "Levou os valores para a data zero, e não para o mês 1."),
   (R(r2(8000 / 1.05)), "Descontou os dois pagamentos por um único mês."),
   (R(r2(4000 / 1.10 + 4000 / 1.15)), "Usou juros simples (1,10 e 1,15) – no regime simples o resultado depende da data focal.")],
  pai="RLE-0145", dif=2, tags=["equivalência de capitais", "data focal"], var="cálculo: novos valores e data focal antes dos vencimentos", verif=VER)

pv = 10000 + 12100 / 1.21
P_ = pv / (1 / 1.1 + 1 / 1.21)
assert round(pv, 6) == 20000 and r2(P_) == 11523.81
Q(M, "24", """Uma dívida é composta por R$ 10.000,00 vencíveis hoje e R$ 12.100,00 vencíveis em 2 meses. O devedor deseja substituí-la por dois pagamentos iguais, em 1 e 2 meses. Com juros compostos de 10% ao mês, cada pagamento será de, aproximadamente,""",
  (R(r2(P_)), f"Valor da dívida hoje: 10.000 + 12.100/1,21 = 20.000. Dois pagamentos iguais: 20.000 = P/1,1 + P/1,21 = P × 1,735537 ⇒ **P ≈ {brl(P_)}**."),
  [(R(11050), "Somou os valores nominais e dividiu por 2."),
   (R(10000), "Dividiu o valor presente (20.000) por 2, sem juros."),
   (R(r2(20000 * 1.1 / 2)), "Capitalizou o valor presente por 1 mês e dividiu por 2."),
   (R(r2(20000 * 1.21 / 2)), "Capitalizou o valor presente por 2 meses e dividiu por 2.")],
  pai="RLE-0145", dif=3, tags=["equivalência de capitais", "data focal"], var="cálculo: substituição por dois pagamentos iguais", verif=VER)

# =====================================================================
# Séries não uniformes – pai RLE-0146
# =====================================================================
pv = 2200 / 1.1 + 3630 / 1.21 + 1331 / 1.331
assert round(pv, 6) == 6000
Q(M, "24", """Um contrato prevê três recebimentos: R$ 2.200,00 em 1 mês, R$ 3.630,00 em 2 meses e R$ 1.331,00 em 3 meses. À taxa de juros compostos de 10% ao mês, o valor presente desses recebimentos é""",
  (R(pv), "2.200/1,1 + 3.630/1,21 + 1.331/1,331 = 2.000 + 3.000 + 1.000 = **R$ 6.000,00**."),
  [(R(2200 + 3630 + 1331), "Somou os valores nominais."),
   (R(r2((2200 + 3630 + 1331) / 1.331)), "Descontou o total por 3 meses."),
   (R(r2((2200 + 3630 + 1331) / 1.1)), "Descontou o total por 1 mês."),
   (R(r2(2200 / 1.1 + 3630 / 1.2 + 1331 / 1.3)), "Usou desconto racional simples (1,1; 1,2; 1,3).")],
  pai="RLE-0146", dif=2, tags=["série não uniforme", "valor presente"], var="cálculo: três parcelas", verif=VER)

fv = 1000 * 1.1 ** 3 + 2000 * 1.1 ** 2 + 3000 * 1.1
assert round(fv, 6) == 7051
Q(M, "24", """Um poupador deposita R$ 1.000,00 hoje, R$ 2.000,00 daqui a 1 mês e R$ 3.000,00 daqui a 2 meses, em uma aplicação a juros compostos de 10% ao mês.

O saldo dessa aplicação no mês 3 será""",
  (R(fv), "1.000 × 1,1³ + 2.000 × 1,1² + 3.000 × 1,1 = 1.331 + 2.420 + 3.300 = **R$ 7.051,00**."),
  [(R(6000), "Somou os depósitos sem juros."),
   (R(r2(1000 * 1.1 ** 2 + 2000 * 1.1 + 3000)), "Calculou o saldo no mês 2."),
   (R(r2(6000 * 1.1 ** 3)), "Capitalizou todos os depósitos por 3 meses."),
   (R(r2(1000 * 1.3 + 2000 * 1.2 + 3000 * 1.1)), "Usou juros simples.")],
  pai="RLE-0146", dif=2, tags=["série não uniforme", "valor futuro"], var="cálculo: troca para valor futuro", verif=VER)

# =====================================================================
# Perpetuidade – pai RLE-0135
# =====================================================================
pv = 2500 / 0.008
assert round(pv, 6) == 312500
Q(M, "22", """Um imóvel comercial gera aluguel líquido de R$ 2.500,00 por mês, indefinidamente. Se a taxa de desconto é de 0,8% ao mês, o valor presente desse fluxo é""",
  (R(pv), "Perpetuidade: PV = PMT/i = 2.500/0,008 = **R$ 312.500,00**."),
  [(R(2500 / 0.08), "Usou 8% em vez de 0,8%."),
   (R(2500 / 0.0008), "Usou 0,08% em vez de 0,8%."),
   (R(2500 * 12), "Somou apenas 12 meses de aluguel."),
   (R(r2(2500 * 0.008 * 1000)), "Multiplicou o aluguel pela taxa, sem fundamento.")],
  pai="RLE-0135", dif=1, tags=["perpetuidade", "rendas"], var="cálculo: novos valores", verif=VER)
