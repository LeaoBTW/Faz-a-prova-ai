# -*- coding: utf-8 -*-
"""Verificação dos cálculos/simulações de Arquitetura (agente 4)."""
from comum import confere


def backoff_total(timeout_s, tentativas_extra, espera_ms):
    tentativas = 1 + tentativas_extra
    esperas = sum(espera_ms * 2 ** i for i in range(tentativas_extra))
    return tentativas * timeout_s + esperas / 1000


def circuit_breaker(instantes, falha, limiar=3, aberto_por=10):
    estado, falhas, abriu = "fechado", 0, None
    chamadas, erros = [], []
    for t in instantes:
        if estado == "aberto" and t - abriu >= aberto_por:
            estado = "semiaberto"
        if estado == "aberto":
            continue  # bloqueada sem chamar o serviço
        chamadas.append(t)
        ok = not falha(t)
        if not ok:
            erros.append(t)
        if estado == "semiaberto":
            estado, falhas = ("fechado", 0) if ok else ("aberto", falhas)
            if not ok:
                abriu = t
        elif ok:
            falhas = 0
        else:
            falhas += 1
            if falhas >= limiar:
                estado, abriu = "aberto", t
    return chamadas, erros


if __name__ == "__main__":
    total = backoff_total(2, 4, 100)
    assert abs(total - 11.5) < 1e-9
    confere("arq-backoff-calc", "11,5 s")

    ch, er = circuit_breaker(range(0, 31, 2), lambda t: 4 <= t <= 19)
    assert ch == [0, 2, 4, 6, 8, 18, 28, 30] and er == [4, 6, 8, 18], (ch, er)
    confere("arq-cb-sim", "%d e %d" % (len(ch), len(er)))
    sem_cb = [t for t in range(0, 31, 2) if 4 <= t <= 19]
    assert len(sem_cb) == 8  # distrator A: 16 chamadas e 8 falhas sem disjuntor

    d = 0.999 * 0.995 * 0.999
    assert round(d * 100, 2) == 99.30
    confere("arq-disponibilidade-serie", "99,30%")
    print("verif_arq: tudo certo")
