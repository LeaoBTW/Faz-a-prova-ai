#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Agente 3 – recalcula os números usados nos gabaritos de PROC e GOV."""
import json
import re

ok = 0


def confere(desc, obtido, esperado):
    global ok
    assert obtido == esperado, "%s: obtido %r, esperado %r" % (desc, obtido, esperado)
    ok += 1
    print("OK    cálculo  %-48s %r" % (desc, obtido))


# --- PROC: Lei de Little (WIP = vazão × tempo de ciclo)
confere("PROC Little: WIP p/ ciclo de 2 semanas a 8/sem", 8 * 2, 16)
confere("PROC Little: ciclo atual 24/8 (semanas)", 24 / 8, 3.0)
confere("PROC Little: WIP = 3 itens/dia × 5 dias", 3 * 5, 15)


# --- PROC: valor limite com três valores por fronteira (6 a 48)
def bva3(a, b):
    return sorted({a - 1, a, a + 1, b - 1, b, b + 1})


confere("PROC BVA 3 valores [6, 48]", bva3(6, 48), [5, 6, 7, 47, 48, 49])
# partição: 1 caso cobrindo as classes válidas + 1 por classe inválida (3)
confere("PROC partição de equivalência (1 válida + 3 inválidas)", 1 + 3, 4)
# --- PROC: complexidade ciclomática V = E - N + 2P
confere("PROC ciclomática 14 - 11 + 2×1", 14 - 11 + 2 * 1, 5)


# --- PROC: versionamento semântico
def bump_major(v):
    M, m, p = map(int, v.split("."))
    return "%d.0.0" % (M + 1)


def chave(v):
    """Precedência SemVer 2.0.0 (sem metadados de build)."""
    base, _, pre = v.partition("-")
    nums = tuple(map(int, base.split(".")))
    if not pre:
        return nums, (1,)
    ids = tuple((0, int(i), "") if i.isdigit() else (1, 0, i) for i in pre.split("."))
    return nums, (0,) + ids


confere("PROC semver: quebra de compatibilidade em 2.7.3", bump_major("2.7.3"), "3.0.0")
confere("PROC semver: 1.0.0-rc.1 < 1.0.0", chave("1.0.0-rc.1") < chave("1.0.0"), True)
confere("PROC semver: 1.10.0 > 1.9.0", chave("1.10.0") > chave("1.9.0"), True)
confere("PROC semver: 1.0.0-alpha < 1.0.0-alpha.1", chave("1.0.0-alpha") < chave("1.0.0-alpha.1"), True)

# --- PROC: o JSON da questão é sintaticamente válido, tem número sem aspas e contas com campos diferentes
doc = json.loads('{"cliente": {"cpf": "12345678909", "nome": "Ana"}, "contas": ['
                 '{"numero": "0001-2", "tipo": "corrente", "saldo": 1500.75}, {"numero": "0007-9", "tipo": "poupanca"}]}')
confere("PROC JSON: saldo é número", isinstance(doc["contas"][0]["saldo"], float), True)
confere("PROC JSON: contas com campos distintos", set(doc["contas"][0]) != set(doc["contas"][1]), True)
obrig = ["numero", "tipo"]  # 'schema' mínimo: campos obrigatórios de cada conta
confere("PROC JSON: campos obrigatórios presentes", all(all(c in k for c in obrig) for k in doc["contas"]), True)

# --- GOV: SLA 99,5% em 30 dias
minutos = round(30 * 24 * 60 * (1 - 0.995))
confere("GOV SLA 99,5%/30 dias (h, min)", divmod(minutos, 60), (3, 36))


# --- GOV: ROI = (ganho - custo) / custo
def roi(ganho, custo):
    return round((ganho - custo) / custo * 100, 1)


confere("GOV ROI 340 / 250", roi(340, 250), 36.0)
confere("GOV ROI 3×150 / 400", roi(3 * 150, 400), 12.5)
confere("GOV ROI P1 180/120", roi(180, 120), 50.0)
confere("GOV ROI P2 420/300", roi(420, 300), 40.0)
confere("GOV lucro absoluto P2 > P1", (420 - 300) > (180 - 120), True)
# --- GOV: TCO em 4 anos
confere("GOV TCO 60 + 4×(15+10) + 5", 60 + 4 * (15 + 10) + 5, 165)
# --- GOV: COBIT 2019 tem 40 objetivos (EDM 5, APO 14, BAI 11, DSS 6, MEA 4)
confere("GOV COBIT 2019: total de objetivos", 5 + 14 + 11 + 6 + 4, 40)
print("%d conferências de cálculo OK." % ok)
