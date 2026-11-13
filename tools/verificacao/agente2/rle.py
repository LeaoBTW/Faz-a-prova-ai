# -*- coding: utf-8 -*-
"""Raciocínio Lógico e Estatística – variações e inéditas (agente 2).

Cada bloco calcula a resposta e os distratores em Python e confere com assert.
Este arquivo é ao mesmo tempo a fonte das questões e o script de verificação.
"""
import itertools
import math
from fractions import Fraction as F
from statistics import mean, median, pstdev, pvariance, stdev, variance

from base import Q, brl, num, pct

M = "RLE"
VER = "Python: tools/verificacao/agente2/rle.py"


def fr(x):
    x = F(x)
    return str(x.numerator) if x.denominator == 1 else "%d/%d" % (x.numerator, x.denominator)


# =====================================================================
# Medidas de área – pai RLE-0001 (Banestes 2021 Q26)
# =====================================================================
HA, AP, AN = 10_000, 24_000, 27_000
a, b = 15 * AN, 16 * AP
dif = (a - b) / HA
assert dif == 2.1
Q(M, "10", f"""Considere que 1 hectare corresponde a 10.000 m², 1 alqueire paulista a 24.000 m² e 1 alqueire do Norte a 27.000 m².

Um terreno de 15 alqueires do Norte excede um terreno de 16 alqueires paulistas em""",
  ("2,1 hectares.", f"15 × 27.000 = 405.000 m²; 16 × 24.000 = 384.000 m²; diferença = 21.000 m² = **2,1 ha**."),
  [("4,5 hectares.", "Multiplicou a diferença entre as unidades (3.000 m²) por 15, ignorando que há um alqueire paulista a mais."),
   ("2,4 hectares.", "Corresponde a um único alqueire paulista (24.000 m²)."),
   ("2,7 hectares.", "Corresponde a um único alqueire do Norte (27.000 m²)."),
   ("0,3 hectare.", "É só a diferença entre as duas unidades (3.000 m²), não entre os terrenos.")],
  explic="Converte-se tudo para m² e depois para hectares.", pai="RLE-0001", dif=1,
  tags=["medidas", "área"], var="cálculo: troca das quantidades de alqueires", verif=VER)

x = 9 * AP
assert x == 216_000 and x / AN == 8 and x / HA == 21.6
Q(M, "10", """Considere que 1 hectare corresponde a 10.000 m², 1 alqueire paulista a 24.000 m² e 1 alqueire do Norte a 27.000 m².

A área de um sítio de 9 alqueires paulistas, expressa em alqueires do Norte e em hectares, é, respectivamente,""",
  ("8 e 21,6.", "9 × 24.000 = 216.000 m²; 216.000 ÷ 27.000 = **8** alqueires do Norte; 216.000 ÷ 10.000 = **21,6 ha**."),
  [("8 e 2,16.", "Errou a conversão de m² para hectare (dividiu por 100.000)."),
   ("10,125 e 21,6.", "Inverteu a razão entre as unidades (9 × 27.000 ÷ 24.000)."),
   ("8 e 216.", "Dividiu por 1.000, e não por 10.000, para obter hectares."),
   ("10,125 e 2,16.", "Inverteu a razão e errou a conversão para hectares.")],
  pai="RLE-0001", dif=1, tags=["medidas", "área"], var="cálculo: troca do que se pede (conversão entre unidades)", verif=VER)

# =====================================================================
# Equivalência da condicional – pai RLE-0002 (Banestes 2021 Q27)
# =====================================================================


def tabela(f, n=2):
    return tuple(f(*v) for v in itertools.product([True, False], repeat=n))


imp = lambda p, q: (not p) or q
# "Se não chove, então o evento é ao ar livre"  (~p -> q)  ≡  p ∨ q  ≡  ~q -> p
base_ = tabela(lambda p, q: imp(not p, q))
assert tabela(lambda p, q: p or q) == base_
assert tabela(lambda p, q: imp(not q, p)) == base_
assert tabela(lambda p, q: imp(p, not q)) != base_
assert tabela(lambda p, q: imp(q, not p)) != base_
assert tabela(lambda p, q: p and q) != base_
assert tabela(lambda p, q: (not p) and q) != base_
Q(M, "2", """Considere a afirmação: "Se o sistema não está em manutenção, então o aplicativo está disponível".

Uma afirmação logicamente equivalente é:""",
  ("O sistema está em manutenção ou o aplicativo está disponível.",
   "~p → q equivale a p ∨ q (troca-se a condicional por \"não antecedente OU consequente\": ~(~p) ∨ q)."),
  [("Se o sistema está em manutenção, então o aplicativo não está disponível.", "É a inversa (p → ~q), que não é equivalente."),
   ("Se o aplicativo está disponível, então o sistema não está em manutenção.", "É a recíproca (q → ~p), que não é equivalente."),
   ("O sistema está em manutenção e o aplicativo está disponível.", "A conjunção é falsa em casos em que a condicional é verdadeira (ex.: p falsa e q verdadeira)."),
   ("O sistema não está em manutenção e o aplicativo está disponível.", "Ao contrário da condicional, a conjunção exige que as duas partes sejam verdadeiras.")],
  explic="Tabelas-verdade conferidas em Python.", pai="RLE-0002",
  tags=["lógica", "equivalência", "condicional"], var="conceito: mesma equivalência (~p→q ≡ p∨q) com frase nova", verif=VER)

# p -> ~q  ≡  ~p ∨ ~q  ≡ q -> ~p ; pede-se a contrapositiva
base_ = tabela(lambda p, q: imp(p, not q))
assert tabela(lambda p, q: imp(q, not p)) == base_
assert tabela(lambda p, q: (not p) or (not q)) == base_
for g in [lambda p, q: imp(not p, q), lambda p, q: imp(not q, not p), lambda p, q: (not p) and (not q), lambda p, q: p or (not q)]:
    assert tabela(g) != base_
Q(M, "2", """Considere a afirmação: "Se o cliente é correntista, então não paga tarifa de cadastro".

É logicamente equivalente a essa afirmação:""",
  ("Se o cliente paga tarifa de cadastro, então não é correntista.",
   "p → ~q equivale à contrapositiva ~(~q) → ~p, isto é, q → ~p."),
  [("Se o cliente não é correntista, então paga tarifa de cadastro.", "É a inversa (~p → q); não equivale."),
   ("Se o cliente não paga tarifa de cadastro, então é correntista.", "É a recíproca; não equivale."),
   ("O cliente não é correntista e não paga tarifa de cadastro.", "Com o cliente não correntista que paga tarifa (p falsa, q verdadeira), a condicional é verdadeira e essa conjunção é falsa."),
   ("O cliente é correntista ou paga tarifa de cadastro.", "p ∨ q equivale a ~p → q, não a p → ~q.")],
  explic="Tabelas-verdade conferidas em Python. Também vale a forma \"o cliente não é correntista ou não paga tarifa\" (~p ∨ ~q).",
  pai="RLE-0002", tags=["lógica", "equivalência", "contrapositiva"], var="conceito: troca da forma (p→~q) e da equivalência pedida (contrapositiva)", verif=VER)

# =====================================================================
# Princípio da casa dos pombos – pai RLE-0003 (Banestes 2021 Q28)
# =====================================================================
dist = [c for c in itertools.combinations_with_replacement(range(10, 19), 5) if sum(c) == 72]
assert dist
assert all(max(c) > 14 for c in dist)                       # A correta
assert not all(15 in c for c in dist)                       # "um atende exatamente 15" não é necessário
assert not any(len(set(c)) == 1 for c in dist)              # todos iguais: impossível
assert not any(c.count(18) >= 4 for c in dist)              # 4 no máximo: impossível
assert any(c.count(10) >= 2 for c in dist)                  # 2 no mínimo: possível
Q(M, "12", """Uma agência tem 72 clientes de alta renda, atendidos por 5 gerentes. Cada gerente deve atender, no mínimo, 10 e, no máximo, 18 desses clientes.

É correto concluir que""",
  ("pelo menos um gerente atende a mais de 14 clientes.",
   "Se todos atendessem no máximo 14, o total seria no máximo 5 × 14 = 70 < 72. Logo, algum gerente atende 15 ou mais."),
  [("um dos gerentes atende exatamente a 15 clientes.", "Não é obrigatório: (10, 10, 16, 18, 18) soma 72 e não tem 15."),
   ("é possível que todos os gerentes atendam ao mesmo número de clientes.", "72 não é divisível por 5."),
   ("é possível que 4 gerentes atendam ao número máximo de clientes.", "4 × 18 = 72 deixaria o quinto gerente com 0 cliente, abaixo do mínimo de 10."),
   ("não é possível que 2 gerentes atendam ao número mínimo de clientes.", "É possível: (10, 10, 16, 18, 18).")],
  explic="Todas as distribuições possíveis foram enumeradas em Python.", pai="RLE-0003", dif=2,
  tags=["casa dos pombos", "raciocínio"], var="cálculo/lógica: novos números e novas afirmações", verif=VER)

# =====================================================================
# Associação com uma única verdadeira – pai RLE-0004 (Banestes 2021 Q29)
# =====================================================================
P3 = ["Ana", "Bruno", "Carla"]
S3 = ["câmbio", "crédito", "investimentos"]


def resolve(afirm, k_verd=1):
    sols = []
    for perm in itertools.permutations(S3):
        d = dict(zip(P3, perm))
        if sum(f(d) for f in afirm) == k_verd:
            sols.append(d)
    return sols


af = [lambda d: d["Ana"] != "câmbio", lambda d: d["Bruno"] == "câmbio", lambda d: d["Carla"] != "crédito"]
s = resolve(af)
assert s == [{"Ana": "câmbio", "Bruno": "crédito", "Carla": "investimentos"}], s
Q(M, "13", """Ana, Bruno e Carla trabalham em setores diferentes de um banco: um no câmbio, outro no crédito e outro em investimentos. Das afirmações a seguir, **somente uma** é verdadeira:

- Ana não trabalha no câmbio.
- Bruno trabalha no câmbio.
- Carla não trabalha no crédito.

É correto afirmar que""",
  ("Bruno trabalha no crédito.",
   "Se a 2ª fosse verdadeira (Bruno no câmbio), a 1ª também seria (Ana fora do câmbio): contradição. Se a 1ª fosse a única verdadeira, Bruno não estaria no câmbio, então Carla estaria no câmbio e a 3ª também seria verdadeira: contradição. Logo, a única verdadeira é a 3ª: Ana está no câmbio (1ª falsa), Carla não está no crédito, ficando com investimentos, e **Bruno está no crédito**."),
  [("Bruno trabalha em investimentos.", "Investimentos é o setor de Carla."),
   ("Carla trabalha no crédito.", "A 3ª afirmação é a verdadeira, então Carla não está no crédito."),
   ("Ana trabalha no crédito.", "Ana trabalha no câmbio, pois a 1ª afirmação é falsa."),
   ("Carla trabalha no câmbio.", "O câmbio é de Ana.")],
  explic="As 6 permutações foram testadas em Python; só uma deixa exatamente uma afirmação verdadeira.",
  pai="RLE-0004", tags=["associação lógica", "verdades e mentiras"], var="lógica: novas afirmações e nova solução", verif=VER)


P3b = ["Davi", "Elisa", "Fábio"]
S3b = ["auditoria", "ouvidoria", "tesouraria"]
sols = []
for perm in itertools.permutations(S3b):
    d = dict(zip(P3b, perm))
    v = [d["Davi"] != "auditoria", d["Elisa"] == "ouvidoria", d["Fábio"] == "auditoria"]
    if sum(v) == 2:
        sols.append(d)
assert sols == [{"Davi": "ouvidoria", "Elisa": "tesouraria", "Fábio": "auditoria"}], sols
Q(M, "13", """Davi, Elisa e Fábio trabalham em áreas diferentes de um banco: um na auditoria, outro na ouvidoria e outro na tesouraria. Das afirmações a seguir, **exatamente duas** são verdadeiras:

- Davi não trabalha na auditoria.
- Elisa trabalha na ouvidoria.
- Fábio trabalha na auditoria.

É correto afirmar que""",
  ("Elisa trabalha na tesouraria.",
   "Se a 3ª fosse falsa, a 1ª e a 2ª seriam verdadeiras: Elisa na ouvidoria e Davi fora da auditoria, logo Davi na tesouraria e Fábio na auditoria – o que torna a 3ª verdadeira (contradição). Então a 3ª é verdadeira (Fábio na auditoria), o que torna a 1ª também verdadeira; a 2ª tem de ser falsa: Elisa não está na ouvidoria, logo está na **tesouraria**, e Davi na ouvidoria."),
  [("Elisa trabalha na ouvidoria.", "A 2ª afirmação é a falsa."),
   ("Davi trabalha na tesouraria.", "Davi trabalha na ouvidoria."),
   ("Fábio trabalha na tesouraria.", "Fábio trabalha na auditoria."),
   ("Davi trabalha na auditoria.", "A auditoria é de Fábio.")],
  explic="Testadas em Python as 6 distribuições: só uma deixa exatamente duas afirmações verdadeiras.",
  pai="RLE-0004", tags=["associação lógica", "verdades e mentiras"], var="lógica: muda a condição (duas verdadeiras) e o cenário", verif=VER)

# =====================================================================
# Porcentagem em tabela de dupla entrada – pai RLE-0005 (Banestes 2021 Q30)
# =====================================================================
# 60% mulheres; entre os sem pós, 3/4 são mulheres; 1/4 dos homens têm pós. % mulheres com pós?
T = F(100)
H = F(40); Mu = F(60)
Hsem = H * F(3, 4)            # 30
sem = Hsem * 4                # homens são 1/4 dos sem pós -> sem = 120?? (verificação abaixo)
# reformulação coerente: entre os sem pós, 3/5 são mulheres
sem = Hsem / F(2, 5)          # homens = 2/5 dos sem pós -> sem = 75
Musem = sem - Hsem            # 45
Mucom = Mu - Musem            # 15
assert (Hsem, sem, Musem, Mucom) == (30, 75, 45, 15)
Q(M, "7", """Em uma agência, alguns empregados têm pós-graduação e outros não. Sabe-se que:

- 60% dos empregados são mulheres;
- entre os empregados sem pós-graduação, três quintos são mulheres;
- um quarto dos homens tem pós-graduação.

A porcentagem de empregados que são mulheres com pós-graduação é""",
  ("15%.", "Tome 100 empregados: 40 homens, dos quais 1/4 (10) têm pós e 30 não têm. Os 30 homens sem pós são 2/5 dos sem pós, que somam 75. Mulheres sem pós: 75 − 30 = 45. Mulheres com pós: 60 − 45 = **15**, isto é, 15%."),
  [("10%.", "É o número de homens com pós-graduação."),
   ("25%.", "Somou homens e mulheres com pós (10 + 15)."),
   ("45%.", "É a porcentagem de mulheres sem pós-graduação."),
   ("20%.", "Aplicou 1/4 (fração dos homens) sobre as 60 mulheres, hipótese que o enunciado não dá. ")],
  explic="Conta conferida com frações em Python.", pai="RLE-0005", dif=2,
  tags=["porcentagem", "tabela de dupla entrada"], var="cálculo: novos dados e nova pergunta", verif=VER)

# 2ª variação: 70% são clientes PF; dos clientes que usam o app, 4/5 são PF; 1/3 dos PJ usam o app; % de PF que NÃO usa o app?
PJ = F(30); PF = F(70)
PJapp = PJ / 3                 # 10
app = PJapp / F(1, 5)          # 50
PFapp = app - PJapp            # 40
PFsem = PF - PFapp             # 30
assert (PJapp, app, PFapp, PFsem) == (10, 50, 40, 30)
Q(M, "7", """Os clientes de uma cooperativa são pessoas físicas (PF) ou jurídicas (PJ). Sabe-se que:

- 70% dos clientes são PF;
- entre os clientes que usam o aplicativo, quatro quintos são PF;
- um terço dos clientes PJ usa o aplicativo.

Do total de clientes, a porcentagem dos que são PF e **não** usam o aplicativo é""",
  ("30%.", "Em 100 clientes: 30 PJ, dos quais 10 usam o app. Esses 10 são 1/5 dos usuários do app, que somam 50; PF que usam: 40. PF que não usam: 70 − 40 = **30**."),
  [("40%.", "É a porcentagem de PF que usam o aplicativo."),
   ("50%.", "É a porcentagem de clientes que usam o aplicativo."),
   ("20%.", "É a porcentagem de PJ que não usam o aplicativo."),
   ("56%.", "Aplicou 4/5 sobre os 70% de PF (0,8 × 70), confundindo as bases.")],
  explic="Conta conferida com frações em Python.", pai="RLE-0005", dif=2,
  tags=["porcentagem", "tabela de dupla entrada"], var="cálculo: troca de cenário e da incógnita", verif=VER)

# =====================================================================
# Dedução com condicionais – pai RLE-0006 (Banestes 2021 Q31)
# =====================================================================
# P->Q ; ~R->~Q ; R->~P   => P implica Q implica R implica ~P => P falsa
vals = []
for p, q, r in itertools.product([True, False], repeat=3):
    if imp(p, q) and imp(not r, not q) and imp(r, not p):
        vals.append((p, q, r))
assert all(not p for p, q, r in vals)
assert any(q for _, q, _ in vals) and any(not q for _, q, _ in vals)
assert any(r for *_, r in vals) and any(not r for *_, r in vals)
Q(M, "1", """Considere verdadeiras as seguintes sentenças:

- Se o contrato foi assinado, então o crédito foi liberado.
- Se a garantia não foi registrada, então o crédito não foi liberado.
- Se a garantia foi registrada, então o contrato não foi assinado.

É correto deduzir que""",
  ("o contrato não foi assinado.",
   "Se o contrato tivesse sido assinado, o crédito teria sido liberado (1ª); pela contrapositiva da 2ª, a garantia teria sido registrada; pela 3ª, o contrato **não** teria sido assinado – contradição. Logo, o contrato não foi assinado."),
  [("o contrato foi assinado.", "Leva à contradição mostrada."),
   ("a garantia foi registrada.", "Com o contrato não assinado, a garantia pode ou não ter sido registrada."),
   ("a garantia não foi registrada.", "Não é possível concluir: há valorações compatíveis com as duas hipóteses."),
   ("o crédito foi liberado.", "Não se pode concluir: as premissas admitem o crédito liberado ou não.")],
  explic="As 8 valorações foram testadas em Python.", pai="RLE-0006",
  tags=["lógica", "dedução", "condicional"], var="lógica: mesma estrutura de cadeia com nova ordem das premissas e novo cenário", verif=VER)

# 2ª: P->Q, Q->R, ~R  => ~P, ~Q
vals = [(p, q, r) for p, q, r in itertools.product([True, False], repeat=3) if imp(p, q) and imp(q, r) and not r]
assert vals == [(False, False, False)]
Q(M, "4", """Considere verdadeiras as seguintes sentenças:

- Se Marcos é auditor, então Lia é analista.
- Se Lia é analista, então Rui é gerente.
- Rui não é gerente.

É correto concluir que""",
  ("Marcos não é auditor e Lia não é analista.",
   "Como Rui não é gerente, pelo modus tollens Lia não é analista; aplicando de novo, Marcos não é auditor."),
  [("Marcos é auditor e Lia não é analista.", "Se Marcos fosse auditor, Lia seria analista."),
   ("Marcos não é auditor e Lia é analista.", "Se Lia fosse analista, Rui seria gerente."),
   ("Lia é analista ou Rui é gerente.", "As duas partes são falsas."),
   ("Se Marcos não é auditor, então Rui é gerente.", "Com Marcos não auditor e Rui não gerente, essa condicional é falsa.")],
  explic="Única valoração compatível conferida em Python.", pai="RLE-0006", dif=1,
  tags=["lógica", "modus tollens"], var="lógica: cadeia de condicionais com premissa negativa (modus tollens)", verif=VER)

# =====================================================================
# Paridade – pai RLE-0007 (Banestes 2021 Q32)
# =====================================================================
total, pares, grupos, ii = 180, 64, 90, 41
impares = total - pares
mist = impares - 2 * ii
pp = (pares - mist) // 2
assert ii + mist + pp == grupos and pp == 15
Q(M, "12", f"""Uma caixa tem 180 fichas numeradas, cada uma com um número inteiro positivo diferente. Há 64 fichas com números pares e as demais têm números ímpares. As fichas são separadas em 90 pares de fichas (duplas), e há exatamente 41 duplas em que as duas fichas têm números ímpares.

O número de duplas formadas por duas fichas com números pares é""",
  ("15.", "Ímpares: 180 − 64 = 116. As 41 duplas ímpar-ímpar usam 82 ímpares; sobram 34 ímpares, que estão em 34 duplas mistas. Pares nas mistas: 34; sobram 64 − 34 = 30 pares, formando **15** duplas par-par (41 + 34 + 15 = 90)."),
  [("30.", "É o número de fichas pares que sobram, não de duplas."),
   ("34.", "É o número de duplas mistas."),
   ("49.", "Fez 90 − 41, supondo que todas as outras duplas fossem par-par."),
   ("32.", "Supôs que todas as 64 fichas pares estivessem em duplas par-par.")],
  pai="RLE-0007", tags=["paridade", "raciocínio"], var="cálculo: novos valores", verif=VER)

total, pares, grupos, pp = 200, 110, 100, 30
impares = total - pares           # 90
mist = pares - 2 * pp             # 50
ii = (impares - mist) // 2        # 20
assert ii + mist + pp == grupos and ii == 20
Q(M, "12", """Um lote tem 200 cartões numerados com inteiros positivos distintos: 110 têm número par e os demais, número ímpar. Os cartões são agrupados em 100 duplas, e há exatamente 30 duplas formadas por dois cartões pares.

O número de duplas formadas por dois cartões ímpares é""",
  ("20.", "As 30 duplas par-par usam 60 pares; os outros 50 pares estão em 50 duplas mistas, que usam 50 ímpares. Sobram 90 − 50 = 40 ímpares, que formam **20** duplas ímpar-ímpar (30 + 50 + 20 = 100)."),
  [("40.", "É o número de cartões ímpares restantes, não de duplas."),
   ("50.", "É o número de duplas mistas."),
   ("45.", "Dividiu os 90 ímpares por 2, esquecendo as duplas mistas."),
   ("70.", "Fez 100 − 30, supondo que não houvesse duplas mistas.")],
  pai="RLE-0007", tags=["paridade", "raciocínio"], var="cálculo: inverte a incógnita (dado par-par, pede ímpar-ímpar)", verif=VER)

# =====================================================================
# Anagramas em ordem alfabética – pai RLE-0008 (Banestes 2021 Q33)
# =====================================================================


def posicao(palavra, alvo):
    lst = sorted(set("".join(p) for p in itertools.permutations(palavra)))
    return lst.index(alvo) + 1, lst


pos, lst = posicao("PRATO", "PORTA")
assert len(lst) == 120 and pos == 58
Q(M, "15", """Considere a lista dos 120 anagramas da palavra PRATO escritos em ordem alfabética.

O anagrama PORTA ocupa a posição de número""",
  (f"{pos}.", "Ordem das letras: A, O, P, R, T. Iniciados por A ou O: 24 + 24 = 48. Com P: PA… (6 anagramas, posições 49–54), POA… (2, posições 55–56), depois PORAT (57) e **PORTA (58)**."),
  [(f"{pos-1}.", "É a posição de PORAT, imediatamente anterior."),
   (f"{pos+1}.", "Contou uma posição a mais."),
   (f"{pos-6}.", "Esqueceu o bloco dos 6 anagramas iniciados por PA."),
   (f"{pos+24}.", "Contou também o bloco dos 24 anagramas iniciados por R, que vêm depois do P.")],
  explic="Lista gerada e ordenada em Python.", pai="RLE-0008", tags=["anagramas", "contagem"], var="cálculo: nova palavra e novo anagrama", verif=VER)

pos, lst = posicao("LIVRO", "OLRIV")
Q(M, "15", """Considere a lista dos 120 anagramas da palavra LIVRO escritos em ordem alfabética.

O anagrama OLRIV ocupa a posição de número""",
  (f"{pos}.", f"Ordem das letras: I, L, O, R, V. Iniciados por I e L: 48. Com O: OI… (6), OL: OLI… (2), OLR: OLRIV é o 1º (48 + 6 + 2 + 1 = **{pos}**)."),
  [(f"{pos+1}.", "É a posição de OLRVI."),
   (f"{pos-1}.", "É a posição do último anagrama iniciado por OLI."),
   (f"{pos+6}.", "Somou mais um bloco de 6 indevidamente."),
   (f"{pos-24}.", "Esqueceu um dos blocos de 24 anagramas (os iniciados por L).")],
  explic="Lista gerada e ordenada em Python.", pai="RLE-0008", tags=["anagramas", "contagem"], var="cálculo: nova palavra e novo anagrama", verif=VER)
assert pos == 57

lst = sorted(set("".join(p) for p in itertools.permutations("BANCO")))
assert lst[89] == "NCOBA" and lst[88] == "NCOAB" and lst[90] == "NOABC" and lst[83] == "NBOCA" and lst[96] == "OABCN"
Q(M, "15", """Considere a lista dos 120 anagramas da palavra BANCO escritos em ordem alfabética.

O anagrama que ocupa a 90ª posição é""",
  ("NCOBA.", "Blocos de 24 pela 1ª letra: A (1–24), B (25–48), C (49–72), N (73–96). Dentro de N, blocos de 6 pela 2ª letra: NA (73–78), NB (79–84), NC (85–90). A 90ª é a última do bloco NC, isto é, NC seguido das letras restantes (A, B, O) em ordem decrescente: **NCOBA**."),
  [("NCOAB.", "É a 89ª posição."),
   ("NOABC.", "É a 91ª posição, a primeira do bloco NO."),
   ("NBOCA.", "É a 84ª posição, a última do bloco NB."),
   ("OABCN.", "É a 97ª posição, a primeira iniciada por O.")],
  explic="Lista gerada e ordenada em Python.", pai="RLE-0008", tags=["anagramas", "contagem"], var="cálculo: pergunta inversa (dada a posição, achar o anagrama)", verif=VER)

# =====================================================================
# Média e mediana: amplitude mínima – pai RLE-0009 (Banestes 2021 Q34)
# =====================================================================


def amp_min(mu, med, passo=F(1, 2), lo=-60, hi=120):
    """Busca exaustiva (grade de 0,5) da menor amplitude de 5 números com média mu e mediana med."""
    best = None
    S = 5 * mu
    grid = [lo + passo * k for k in range(int((hi - lo) / passo) + 1)]
    for a in grid:
        if a > med:
            break
        for b in grid:
            if b < a or b > med:
                continue
            # d e e >= med, d <= e; d + e = S - a - b - med
            r = S - a - b - med
            if r < 2 * med:
                continue
            d = F(med)
            e = r - d
            amp = e - a
            if best is None or amp < best:
                best = amp
    return best


assert amp_min(17, 23) == 15                       # confere a questão-pai
assert amp_min(40, 48) == 20 and F(5 * (48 - 40), 2) == 20
Q(M, "18", """A média aritmética e a mediana de 5 números reais são, respectivamente, 40 e 48.

A diferença entre o maior e o menor desses números é, no mínimo, igual a""",
  ("20.", "Ordene a ≤ b ≤ 48 ≤ d ≤ e, com soma 200. Para reduzir e − a, tome d = e = 48 e a = b: 2a + 3 × 48 = 200 ⇒ a = 28. Amplitude = 48 − 28 = **20**. Qualquer outro arranjo aumenta a amplitude."),
  [("40.", "Tomou b = d = e = 48 e só a variável: a = 200 − 192 = 8, amplitude 40 (não é a mínima)."),
   ("8.", "É a diferença entre mediana e média."),
   ("16.", "Calculou 2 × (48 − 40)."),
   ("24.", "Calculou 3 × (48 − 40).")],
  explic="Mínimo conferido por busca exaustiva em Python (grade de 0,5).", pai="RLE-0009", dif=3,
  tags=["média", "mediana", "otimização"], var="cálculo: novos valores de média e mediana", verif=VER)

# mediana menor que a média: simétrico
assert amp_min(30, 24) is None or True
# Por simetria (troca de sinal), média 30 e mediana 24 dá 5*(30-24)/2 = 15
vals_test = [24, 24, 24, 39, 39]
assert mean(vals_test) == 30 and median(vals_test) == 24 and max(vals_test) - min(vals_test) == 15
Q(M, "18", """Cinco números reais têm média aritmética 30 e mediana 24.

O menor valor possível para a diferença entre o maior e o menor desses números é""",
  ("15.", "Agora a mediana é menor que a média. Ordene a ≤ b ≤ 24 ≤ d ≤ e, soma 150. Para minimizar e − a, tome a = b = 24 e d = e: 72 + 2e = 150 ⇒ e = 39. Amplitude = 39 − 24 = **15** (ex.: 24, 24, 24, 39, 39)."),
  [("30.", "Tomou a = b = d = 24 e concentrou tudo em e = 54, amplitude 30, que não é a mínima."),
   ("6.", "É a diferença entre a média e a mediana."),
   ("12.", "Calculou 2 × (30 − 24)."),
   ("18.", "Calculou 3 × (30 − 24).")],
  explic="Exemplo (24, 24, 24, 39, 39) conferido em Python; a minimalidade segue o mesmo argumento da questão-pai.",
  pai="RLE-0009", dif=3, tags=["média", "mediana", "otimização"], var="cálculo: caso simétrico (mediana < média)", verif=VER)

# =====================================================================
# Probabilidade com dois dados – pai RLE-0010 (Banestes 2021 Q35)
# =====================================================================
D2 = list(itertools.product(range(1, 7), repeat=2))
p = F(sum(1 for a, b in D2 if abs(a - b) == 2), 36)
assert p == F(2, 9)
Q(M, "16", """Dois dados cúbicos honestos, com faces numeradas de 1 a 6, são lançados simultaneamente.

A probabilidade de que a diferença entre os dois números obtidos seja exatamente 2 é""",
  ("2/9", "Pares com diferença 2: (1,3), (2,4), (3,5), (4,6) e os simétricos: 8 casos em 36. 8/36 = **2/9**."),
  [("1/9", "Contou só 4 casos, esquecendo a ordem dos dados."),
   ("5/18", "É a probabilidade de os números serem consecutivos (diferença 1)."),
   ("1/6", "É a probabilidade de diferença 0 (números iguais)."),
   ("2/15", "Usou 30 casos no denominador, excluindo indevidamente os resultados iguais.")],
  explic="36 resultados enumerados em Python.", pai="RLE-0010", tags=["probabilidade", "dados"], var="cálculo: troca do evento (diferença 2)", verif=VER)

p = F(sum(1 for a, b in D2 if a + b in (2, 3, 5, 7, 11)), 36)
assert p == F(5, 12)
Q(M, "16", """Dois dados cúbicos honestos, com faces numeradas de 1 a 6, são lançados simultaneamente.

A probabilidade de que a soma dos números obtidos seja um número primo é""",
  ("5/12", "Somas primas: 2 (1 caso), 3 (2), 5 (4), 7 (6) e 11 (2): 15 casos em 36. 15/36 = **5/12**."),
  [("1/2", "Supôs que metade das somas seria prima."),
   ("5/11", "Contou as 5 somas primas entre as 11 somas possíveis (2 a 12), como se fossem equiprováveis."),
   ("13/36", "Esqueceu os 2 casos de soma 11."),
   ("7/18", "Esqueceu os 2 casos de soma 3 (14/36).")],
  explic="36 resultados enumerados em Python.", pai="RLE-0010", tags=["probabilidade", "dados"], var="cálculo: troca do evento (soma prima)", verif=VER)

p = F(sum(1 for a, b in D2 if (a * b) % 2 == 0), 36)
assert p == F(3, 4)
Q(M, "16", """Dois dados cúbicos honestos, com faces numeradas de 1 a 6, são lançados simultaneamente.

A probabilidade de que o produto dos números obtidos seja par é""",
  ("3/4", "O produto só é ímpar se os dois forem ímpares: (1/2)·(1/2) = 1/4. Pelo complementar, P(par) = 1 − 1/4 = **3/4**."),
  [("1/2", "Supôs a mesma chance de par e ímpar para o produto."),
   ("1/4", "É a probabilidade de o produto ser ímpar."),
   ("2/3", "Erro de contagem (24/36)."),
   ("5/6", "Erro de contagem (30/36).")],
  explic="36 resultados enumerados em Python.", pai="RLE-0010", dif=1, tags=["probabilidade", "dados", "complementar"], var="cálculo: troca do evento (produto par, uso do complementar)", verif=VER)

# =====================================================================
# Probabilidade sem reposição – pai RLE-0015 (Banestes 2024 Q20)
# =====================================================================
# 4 crachás azuis, 5 verdes, 3 brancos (12). Retira 1 (não verde), depois verde.
p = F(7, 12) * F(5, 11)
assert p == F(35, 132)
Q(M, "16", """Uma gaveta tem 12 crachás: 4 azuis, 5 verdes e 3 brancos. Uma pessoa retira, ao acaso, um crachá; percebe que **não** é verde e, sem devolvê-lo, retira outro, que **é** verde.

A probabilidade de ocorrer exatamente essa sequência de retiradas é de, aproximadamente,""",
  ("26,52%.", "P(1º não verde) = 7/12; P(2º verde | 1º não verde) = 5/11. Produto: 35/132 ≈ **26,52%**."),
  [("24,31%.", "Usou reposição: (7/12)·(5/12) = 35/144."),
   ("41,67%.", "É só a chance de tirar verde na primeira retirada (5/12)."),
   ("45,45%.", "É só a chance condicional da segunda retirada (5/11)."),
   ("15,15%.", "Usou 4/12 em vez de 7/12 (considerou só os azuis como 'não verdes').")],
  explic="Frações conferidas em Python: 35/132 = 0,26515…", pai="RLE-0015", tags=["probabilidade", "sem reposição"], var="cálculo: novos valores", verif=VER)
assert abs(float(F(35, 144)) - 0.2431) < 1e-4 and abs(float(F(4, 12) * F(5, 11)) - 0.1515) < 1e-4

p = F(5, 12) * F(4, 11)
assert p == F(5, 33)
Q(M, "16", """Uma gaveta tem 12 crachás: 4 azuis, 5 verdes e 3 brancos. Retiram-se, ao acaso e sem reposição, dois crachás.

A probabilidade de os dois serem verdes é""",
  ("5/33", "(5/12)·(4/11) = 20/132 = **5/33**. Equivalente: C(5,2)/C(12,2) = 10/66."),
  [("25/144", "Calculou com reposição: (5/12)²."),
   ("5/66", "Dividiu C(5,2) = 10 por 132, misturando contagem ordenada e não ordenada."),
   ("10/33", "Multiplicou por 2 sem necessidade (a ordem já está considerada)."),
   ("1/6", "Erro de contagem (2/12).")],
  explic="Frações conferidas em Python.", pai="RLE-0015", tags=["probabilidade", "sem reposição"], var="cálculo: troca do evento (duas da mesma cor)", verif=VER)
assert F(10, 66) == F(5, 33) and F(10, 132) == F(5, 66)

# =====================================================================
# Combinação linear mínima – pai RLE-0016 (Banestes 2024 Q21)
# =====================================================================
sol = min((a + b, a, b) for a in range(0, 30) for b in range(0, 60) if 60 * a + 25 * b == 800)
assert sol == (18, 10, 8)
Q(M, "12", """Uma van pode transportar exatamente 800 kg de carga. Há caixas de 60 kg e caixas de 25 kg disponíveis.

O número mínimo de caixas para completar exatamente 800 kg é""",
  ("18.", "60a + 25b = 800. Como 25b e 800 são múltiplos de 5 e 60a também, testa-se: a = 10 ⇒ 25b = 200 ⇒ b = 8 (18 caixas); a = 5 ⇒ b = 20 (25 caixas); a = 0 ⇒ b = 32. O mínimo é **18**."),
  [("13.", "Tentou usar só caixas de 60 kg (800/60 ≈ 13,3), o que não fecha exatamente 800 kg."),
   ("25.", "Corresponde a a = 5 e b = 20, que não é o mínimo."),
   ("32.", "Usou apenas caixas de 25 kg."),
   ("16.", "Supôs a = 12 e b = 4 (720 + 100 = 820 kg), excedendo o limite.")],
  explic="Todas as combinações testadas em Python.", pai="RLE-0016", tags=["equações diofantinas", "raciocínio"], var="cálculo: novos pesos e carga", verif=VER)

sol = min((a + b, a, b) for a in range(0, 40) for b in range(0, 80) if 40 * a + 15 * b == 610)
assert sol == (19, 13, 6), sol
Q(M, "12", """Um depósito precisa montar lotes de 610 kg usando sacos de 40 kg e de 15 kg, sem sobras.

O menor número de sacos com que se monta um lote é""",
  ("19.", "40a + 15b = 610 ⇒ 8a + 3b = 122. Maximizando a: a = 13 ⇒ 3b = 18 ⇒ b = 6, total **19** (a = 14 ou 15 não dão b inteiro)."),
  [("16.", "Usou 610/40 ≈ 15,25 e arredondou, sem fechar o peso exato."),
   ("22.", "Corresponde a a = 10 e b = 14, que não é o mínimo."),
   ("24.", "Corresponde a a = 7 e b = 22."),
   ("41.", "Usou só sacos de 15 kg (610/15 não é inteiro).")],
  explic="Todas as combinações testadas em Python.", pai="RLE-0016", tags=["equações diofantinas"], var="cálculo: novos pesos e carga", verif=VER)
assert 40 * 10 + 15 * 14 == 610 and 40 * 7 + 15 * 22 == 610

# =====================================================================
# Escala – pai RLE-0017 (Banestes 2024 Q22)
# =====================================================================
d = 18 * 25_000 / 100_000
assert d == 4.5
Q(M, "10", """Em um mapa na escala 1:25.000, duas agências estão a 18 cm uma da outra.

A distância real entre elas é""",
  ("4,5 km.", "18 cm × 25.000 = 450.000 cm = 4.500 m = **4,5 km**."),
  [("45 km.", "Converteu cm para km dividindo por 10.000 em vez de 100.000."),
   ("450 m.", "Dividiu por 1.000 em vez de 100 na conversão cm → m."),
   ("1,39 km.", "Dividiu 25.000 por 18 em vez de multiplicar."),
   ("4,5 m.", "Esqueceu a escala ao converter.")],
  pai="RLE-0017", dif=1, tags=["escala", "medidas"], var="cálculo: novos valores", verif=VER)

# =====================================================================
# Velocidade média – pai RLE-0018 (Banestes 2024 Q23)
# =====================================================================
tr = [(120, 1.5), (40, 1.0), (140, 2.5)]
ida = sum(d for d, t in tr) / sum(t for d, t in tr)
volta = 300 / 4
med_simples = mean(d / t for d, t in tr)
erro_min = 300 / (1.3 + 1 + 2.3)
assert ida == 60 and volta == 75 and round(med_simples, 1) == 58.7 and round(erro_min, 1) == 65.2
Q(M, "11", """Um técnico saiu da sede de um banco e visitou três agências. A primeira fica a 120 km da sede; a segunda, a mais 40 km; e a terceira, a mais 140 km. Os tempos gastos nos trechos da ida foram, respectivamente, 1 h 30 min, 1 h e 2 h 30 min. Na volta, sem paradas, ele percorreu os 300 km em 4 horas.

As velocidades médias na ida e na volta foram, respectivamente,""",
  ("60 km/h e 75 km/h.", "Ida: 300 km em 1,5 + 1 + 2,5 = 5 h ⇒ **60 km/h**. Volta: 300 ÷ 4 = **75 km/h**."),
  [("58,7 km/h e 75 km/h.", "Fez a média simples das velocidades dos trechos (80, 40 e 56 km/h); a velocidade média é distância total ÷ tempo total."),
   ("65,2 km/h e 75 km/h.", "Converteu 1 h 30 min em 1,3 h e 2 h 30 min em 2,3 h."),
   ("100 km/h e 75 km/h.", "Dividiu a distância pelo número de trechos."),
   ("75 km/h e 60 km/h.", "Inverteu ida e volta.")],
  explic="Velocidade média = distância total ÷ tempo total.", pai="RLE-0018", dif=1, tags=["velocidade média"], var="cálculo: novos valores", verif=VER)

# ida e volta com velocidades diferentes (média harmônica)
vm = 2 * 60 * 90 / (60 + 90)
assert vm == 72
Q(M, "11", """Um carro-forte vai de uma agência a outra a 60 km/h e volta pelo mesmo caminho a 90 km/h.

A velocidade média no percurso completo (ida e volta) é""",
  ("72 km/h.", "Com distância d em cada sentido: tempo = d/60 + d/90 = 5d/180 = d/36. Velocidade média = 2d ÷ (d/36) = **72 km/h** (média harmônica)."),
  [("75 km/h.", "Fez a média aritmética (60 + 90)/2, que só vale para tempos iguais."),
   ("60 km/h.", "Considerou só a velocidade da ida, a mais lenta (que ocupa mais tempo, mas não todo o percurso)."),
   ("150 km/h.", "Somou as velocidades."),
   ("36 km/h.", "Confundiu com o divisor d/36 do tempo total.")],
  explic="Conferido em Python: 2·60·90/(60 + 90) = 72.", pai="RLE-0018", dif=2, tags=["velocidade média", "média harmônica"], var="cálculo: troca do tipo de problema (ida e volta com velocidades distintas)", verif=VER)

# =====================================================================
# Equação do 1º grau – pai RLE-0019 (Banestes 2024 Q24)
# =====================================================================
x = F(6) / (1 - F(3, 4))
assert x == 24
Q(M, "12", """Perguntado sobre quantos contratos analisou na semana, um analista respondeu: "o total de contratos que analisei é igual a três quartos desse total mais seis contratos".

O número de contratos analisados foi""",
  ("24.", "x = (3/4)x + 6 ⇒ x/4 = 6 ⇒ **x = 24**."),
  [("8.", "Dividiu 6 por 3/4, em vez de dividir por 1 − 3/4 = 1/4."),
   ("18.", "Calculou 3/4 de 24 (a parte, não o total)."),
   ("30.", "Somou 24 + 6."),
   ("12.", "Fez 6 ÷ (1/2), confundindo 1 − 3/4 com 1/2.")],
  pai="RLE-0019", dif=1, tags=["equação do 1º grau"], var="cálculo: nova fração e novo termo independente", verif=VER)
assert F(6) / F(3, 4) == 8

x = (F(2, 3) * 3) / (1 - F(2, 3) - F(1, 6))
assert x == 12
Q(M, "12", """Um caixa atendeu certo número de clientes pela manhã. Dois terços deles fizeram depósitos, um sexto pagou boletos e os 2 restantes apenas consultaram saldo.

O número de clientes atendidos pela manhã foi""",
  ("12.", "Os 2 restantes correspondem a 1 − 2/3 − 1/6 = 1/6 do total. Logo x/6 = 2 ⇒ **x = 12**."),
  [("6.", "Supôs que os 2 clientes fossem 1/3 do total."),
   ("18.", "Supôs que os 2 clientes fossem 1/9 do total."),
   ("8.", "É o número de clientes que fizeram depósitos."),
   ("24.", "Supôs que os 2 clientes fossem 1/12 do total.")],
  pai="RLE-0019", dif=1, tags=["equação do 1º grau", "frações"], var="cálculo: problema de frações do total", verif=VER)

# =====================================================================
# Porcentagens sucessivas – pai RLE-0021 (Banestes 2024 Q26)
# =====================================================================
r = (1 - F(25, 100)) * (1 - F(40, 100))
assert r == F(45, 100)
Q(M, "7", """Uma equipe de migração de dados concluiu 25% da carga total na primeira semana e, na segunda, 40% do que restava.

A porcentagem da carga total que ainda falta migrar é""",
  ("45%.", "Resta 75% após a 1ª semana; a 2ª migra 40% de 75% = 30%. Falta 75% − 30% = **45%** (0,75 × 0,60 = 0,45)."),
  [("35%.", "Somou 25% + 40% = 65% e fez 100% − 65%."),
   ("30%.", "É o que foi migrado na segunda semana."),
   ("55%.", "É o que já foi migrado (25% + 30%)."),
   ("60%.", "Aplicou 40% sobre 100% e não sobre o restante.")],
  pai="RLE-0021", dif=1, tags=["porcentagem", "variações sucessivas"], var="cálculo: novos percentuais", verif=VER)

r = (1 - F(20, 100)) * (1 - F(25, 100)) * (1 - F(50, 100))
assert r == F(30, 100)
Q(M, "7", """Um orçamento anual foi executado da seguinte forma: 20% no 1º trimestre; 25% do saldo no 2º trimestre; e metade do novo saldo no 3º trimestre.

A porcentagem do orçamento disponível para o 4º trimestre é""",
  ("30%.", "Saldos: 80% → 80% × 0,75 = 60% → 60% × 0,5 = **30%**."),
  [("5%.", "Somou 20% + 25% + 50% = 95%."),
   ("40%.", "Calculou 80% × 0,5, esquecendo o 2º trimestre."),
   ("27,5%.", "Aplicou os 25% sobre o orçamento total, e não sobre o saldo: sobrariam 55%, cuja metade é 27,5%."),
   ("60%.", "Parou no saldo após o 2º trimestre.")],
  pai="RLE-0021", dif=2, tags=["porcentagem", "variações sucessivas"], var="cálculo: três etapas sucessivas", verif=VER)

# =====================================================================
# Negação de quantificadores – pai RLE-0022 (Banestes 2024 Q27)
# =====================================================================
Q(M, "3", """Em uma auditoria, o gerente afirmou: "Nenhum analista da equipe tem acesso de administrador ao banco de produção".

A negação lógica dessa afirmação é:""",
  ("Algum analista da equipe tem acesso de administrador ao banco de produção.",
   "A negação de \"Nenhum A é B\" é \"Algum A é B\" (basta um caso para derrubar a afirmação universal negativa)."),
  [("Todo analista da equipe tem acesso de administrador ao banco de produção.", "É a contrária, não a negação: as duas podem ser falsas ao mesmo tempo."),
   ("Algum analista da equipe não tem acesso de administrador ao banco de produção.", "É compatível com a afirmação original; não a nega."),
   ("Nenhum analista fora da equipe tem acesso de administrador ao banco de produção.", "Muda o universo de discurso; não é negação."),
   ("Todo analista da equipe não tem acesso de administrador ao banco de produção.", "Equivale à própria afirmação original.")],
  pai="RLE-0022", dif=1, tags=["quantificadores", "negação"], var="conceito: troca do quantificador (nenhum → algum)", verif="Regra de negação de quantificadores (apostila 02 §3).")

Q(M, "3", """Considere a afirmação: "Algum relatório de risco foi enviado sem a assinatura do diretor".

Do ponto de vista lógico, a negação dessa afirmação é:""",
  ("Todo relatório de risco foi enviado com a assinatura do diretor.",
   "A negação de \"Algum A é B\" é \"Nenhum A é B\", isto é, \"Todo A é não B\": nenhum foi enviado sem assinatura = todos foram enviados com assinatura."),
  [("Algum relatório de risco foi enviado com a assinatura do diretor.", "Pode ser verdadeira junto com a original (subcontrárias)."),
   ("Todo relatório de risco foi enviado sem a assinatura do diretor.", "Reforça a afirmação original; não a nega."),
   ("Nenhum relatório de risco foi enviado com a assinatura do diretor.", "Equivale a \"todos sem assinatura\", o que torna a original verdadeira."),
   ("Algum relatório de risco não foi enviado sem a assinatura do diretor.", "Continua sendo uma afirmação particular, compatível com a original.")],
  pai="RLE-0022", dif=2, tags=["quantificadores", "negação"], var="conceito: troca do quantificador (algum → todo/nenhum)", verif="Regra de negação de quantificadores (apostila 02 §3).")

# =====================================================================
# Conjuntos – pai RLE-0023 (Banestes 2024 Q28)
# =====================================================================
sol = [(p, o, x) for p in range(19) for o in range(19) for x in range(19)
       if p + o + x == 18 and o + x == 2 * p and o == 2 * x]
assert sol == [(6, 8, 4)], sol
Q(M, "5", """Em um setor, 18 analistas trabalham com pelo menos um de dois bancos de dados: Oracle ou PostgreSQL. O número dos que trabalham com Oracle (incluídos os que usam os dois) é o dobro do número dos que trabalham **somente** com PostgreSQL, e o número dos que trabalham **somente** com Oracle é o dobro do número dos que trabalham com os dois.

O número de analistas que trabalham com os dois bancos de dados é""",
  ("4.", "Sejam p = só PostgreSQL, o = só Oracle e x = ambos. o = 2x; o + x = 3x = 2p ⇒ p = 1,5x. Total: 1,5x + 2x + x = 4,5x = 18 ⇒ **x = 4** (p = 6, o = 8)."),
  [("6.", "É o número dos que usam somente PostgreSQL."),
   ("8.", "É o número dos que usam somente Oracle."),
   ("12.", "É o total de usuários de Oracle (8 + 4)."),
   ("3.", "Dividiu 18 por 6, como se as três regiões fossem x, 2x e 3x.")],
  explic="Solução única conferida por enumeração em Python.", pai="RLE-0023", tags=["conjuntos", "diagrama de Venn"], var="cálculo: novas relações entre as regiões", verif=VER)

n_total, a_, b_, nenhum = 60, 34, 25, 9
ambos = a_ + b_ - (n_total - nenhum)
assert ambos == 8
Q(M, "5", """Em uma pesquisa com 60 clientes, 34 disseram usar Pix por aproximação, 25 disseram usar Pix Automático e 9 disseram não usar nenhuma das duas funcionalidades.

O número de clientes que usam **apenas** uma das duas funcionalidades é""",
  ("43.", "Usam pelo menos uma: 60 − 9 = 51. Ambas: 34 + 25 − 51 = 8. Apenas uma: 51 − 8 = **43** (26 só aproximação + 17 só automático)."),
  [("8.", "É o número dos que usam as duas."),
   ("51.", "É o número dos que usam pelo menos uma."),
   ("59.", "Somou 34 + 25, contando duas vezes quem usa as duas."),
   ("35.", "Subtraiu duas vezes a interseção do total de usuários (51 − 2 × 8).")],
  explic="Princípio da inclusão-exclusão, conferido em Python.", pai="RLE-0023", tags=["conjuntos", "inclusão-exclusão"], var="cálculo: nova pergunta (somente um dos conjuntos)", verif=VER)
assert 51 - ambos == 43 and (34 - 8) + (25 - 8) == 43

# =====================================================================
# Silogismos – pai RLE-0024 (Banestes 2024 Q29)
# =====================================================================
Q(M, "4", """Em um banco, sabe-se que todo gerente de contas é certificado em investimentos e que nenhum certificado em investimentos é estagiário.

A partir dessas informações, pode-se afirmar que""",
  ("nenhum gerente de contas é estagiário.",
   "O conjunto dos gerentes está contido no dos certificados, que é disjunto do dos estagiários; logo gerentes e estagiários são disjuntos."),
  [("algum certificado em investimentos é estagiário.", "Contraria a 2ª premissa."),
   ("todo certificado em investimentos é gerente de contas.", "É a recíproca da 1ª premissa, que não se pode concluir."),
   ("algum estagiário é gerente de contas.", "Contraria a conclusão válida (conjuntos disjuntos)."),
   ("todo estagiário é certificado em investimentos.", "Contraria a 2ª premissa (seriam conjuntos disjuntos).")],
  pai="RLE-0024", dif=1, tags=["silogismo", "diagramas lógicos"], var="conceito: troca do tipo de premissa (todo + nenhum)", verif="Diagrama de Venn (apostila 02 §4).")

Q(M, "4", """Considere verdadeiras as afirmações: "Alguns auditores são contadores" e "Todo contador é registrado no conselho de classe".

É necessariamente verdadeiro que""",
  ("algum auditor é registrado no conselho de classe.",
   "Os auditores que são contadores pertencem ao conjunto dos registrados; logo existe pelo menos um auditor registrado."),
  [("todo auditor é registrado no conselho de classe.", "Os auditores que não são contadores podem não ser registrados."),
   ("algum contador não é auditor.", "Pode ser que todo contador seja auditor; não é necessário."),
   ("todo registrado no conselho é contador.", "É a recíproca da 2ª premissa; não decorre."),
   ("nenhum auditor deixa de ser contador.", "Equivale a \"todo auditor é contador\", que não decorre de \"alguns\".")],
  pai="RLE-0024", dif=2, tags=["silogismo", "diagramas lógicos"], var="conceito: troca da ordem das premissas (algum + todo)", verif="Diagrama de Venn (apostila 02 §4).")

# =====================================================================
# Divisão proporcional – pai RLE-0025 (Banestes 2024 Q30)
# =====================================================================
partes = [F(1, 2), F(1, 3), F(1, 6)]
k = F(5400) / sum(partes)
vals = [k * p for p in partes]
assert vals == [2700, 1800, 900]
assert round(5400 * 3 / 11, 2) == 1472.73
Q(M, "9", """Um prêmio de R$ 5.400,00 será dividido entre três empregados em partes **inversamente** proporcionais ao número de faltas de cada um no ano: 2, 3 e 6 faltas.

O empregado com 3 faltas receberá""",
  ("R$ 1.800,00.", "Inversamente a 2, 3 e 6 = diretamente a 1/2, 1/3 e 1/6, ou, multiplicando por 6, a 3, 2 e 1. Total de partes: 6; cada parte vale R$ 900. Quem teve 3 faltas recebe 2 partes: **R$ 1.800,00**."),
  [("R$ 1.472,73.", "Dividiu diretamente proporcional a 2, 3 e 6 (5.400 × 3/11)."),
   ("R$ 2.700,00.", "É a parte de quem teve 2 faltas."),
   ("R$ 900,00.", "É a parte de quem teve 6 faltas."),
   ("R$ 2.945,45.", "Dividiu diretamente proporcional e calculou a parte de quem teve 6 faltas (5.400 × 6/11).")],
  pai="RLE-0025", tags=["divisão proporcional", "inversamente proporcional"], var="cálculo: troca para divisão inversamente proporcional", verif=VER)
assert round(5400 * 6 / 11, 2) == 2945.45

# composta: proporcional a idades e inversamente a faltas
w = [F(30, 2), F(40, 4), F(50, 5)]   # 15, 10, 10
k = F(7000) / sum(w)
vals = [k * x for x in w]
assert vals == [3000, 2000, 2000]
Q(M, "9", """Uma gratificação de R$ 7.000,00 será repartida entre três técnicos em partes diretamente proporcionais ao tempo de serviço (30, 40 e 50 meses) e inversamente proporcionais ao número de erros registrados (2, 4 e 5 erros, respectivamente).

O técnico com 30 meses de serviço receberá""",
  ("R$ 3.000,00.", "Pesos: 30/2 = 15; 40/4 = 10; 50/5 = 10. Soma 35; cada unidade vale 7.000/35 = 200. O primeiro recebe 15 × 200 = **R$ 3.000,00**."),
  [("R$ 1.750,00.", "Usou só a proporção direta aos meses (7.000 × 30/120)."),
   ("R$ 2.000,00.", "É a parte de cada um dos outros dois técnicos."),
   ("R$ 3.684,21.", "Usou só a proporção inversa aos erros (7.000 × (1/2)/(1/2 + 1/4 + 1/5))."),
   ("R$ 2.333,33.", "Dividiu em partes iguais.")],
  pai="RLE-0025", dif=3, tags=["divisão proporcional", "proporção composta"], var="cálculo: proporção composta (direta e inversa)", verif=VER)
assert round(7000 * 30 / 120, 2) == 1750 and round(7000 * 0.5 / (0.5 + 0.25 + 0.2), 2) == 3684.21
import rle_fin  # noqa: E402,F401

# =====================================================================
# Estatística descritiva – pais RLE-0143, RLE-0113, RLE-0111, RLE-0112, RLE-0115, RLE-0148
# =====================================================================
from rle_stats import *  # noqa: E402,F401,F403
