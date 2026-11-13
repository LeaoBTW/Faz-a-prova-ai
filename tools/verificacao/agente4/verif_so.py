# -*- coding: utf-8 -*-
"""Verificação dos cálculos de Sistemas Operacionais (agente 4)."""
from collections import deque

from comum import confere


def fcfs(b):
    t, w = 0, {}
    for p in b:
        w[p] = t
        t += b[p]
    return w


def sjf(b):
    t, w = 0, {}
    for p in sorted(b, key=lambda k: b[k]):
        w[p] = t
        t += b[p]
    return w


def rr(b, q):
    rem, fila, t, fim = dict(b), deque(b), 0, {}
    while fila:
        p = fila.popleft()
        r = min(q, rem[p])
        t += r
        rem[p] -= r
        if rem[p]:
            fila.append(p)
        else:
            fim[p] = t
    return {p: fim[p] - b[p] for p in b}


def srtf(procs):
    t, rem, fim = 0, {p: b for p, (a, b) in procs.items()}, {}
    while rem:
        prontos = [p for p in rem if procs[p][0] <= t]
        if not prontos:
            t += 1
            continue
        p = min(prontos, key=lambda x: (rem[x], procs[x][0]))
        rem[p] -= 1
        t += 1
        if rem[p] == 0:
            del rem[p]
            fim[p] = t
    return {p: fim[p] - a - b for p, (a, b) in procs.items()}


def sjf_np_chegada(procs):
    t, feitos, w = 0, set(), {}
    while len(feitos) < len(procs):
        prontos = [p for p in procs if p not in feitos and procs[p][0] <= t]
        if not prontos:
            t += 1
            continue
        p = min(prontos, key=lambda x: procs[x][1])
        w[p] = t - procs[p][0]
        t += procs[p][1]
        feitos.add(p)
    return w


def media(w):
    return sum(w.values()) / len(w)


def faltas(seq, n, alg):
    mem, f = [], 0
    for i, x in enumerate(seq):
        if x in mem:
            if alg == "LRU":
                mem.remove(x)
                mem.append(x)
            continue
        f += 1
        if len(mem) == n:
            if alg in ("FIFO", "LRU"):
                mem.pop(0)
            else:
                fut = seq[i + 1:]
                mem.remove(max(mem, key=lambda m: fut.index(m) if m in fut else len(seq)))
        mem.append(x)
    return f


def banqueiro_seguro(total, maximo, aloc, ordem):
    disp = total - sum(aloc.values())
    for p in ordem:
        if maximo[p] - aloc[p] > disp:
            return False
        disp += aloc[p]
    return True


if __name__ == "__main__":
    b = {"P1": 6, "P2": 8, "P3": 7, "P4": 3}
    assert media(sjf(b)) == 7.0 and media(fcfs(b)) == 10.25
    confere("so-sjf", "7,0 e 10,25")

    b2 = {"P1": 10, "P2": 4, "P3": 6}
    assert abs(media(rr(b2, 4)) - 26 / 3) < 1e-9
    assert media(fcfs(b2)) == 8.0 and abs(media(sjf(b2)) - 14 / 3) < 1e-9
    confere("so-rr", "8,67")

    p = {"P1": (0, 8), "P2": (1, 4), "P3": (2, 9), "P4": (3, 5)}
    assert media(srtf(p)) == 6.5
    assert media(sjf_np_chegada(p)) == 7.75
    fc = {"P1": 0, "P2": 8 - 1, "P3": 12 - 2, "P4": 21 - 3}
    assert media(fc) == 8.75
    confere("so-srtf", "6,50")

    s = [2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2]
    assert (faltas(s, 3, "FIFO"), faltas(s, 3, "LRU"), faltas(s, 3, "OPT")) == (9, 7, 6)
    confere("so-paginas", "9, 7 e 6")

    pag, desl = divmod(3300, 1024)
    assert (pag, desl) == (3, 228) and 7 * 1024 + desl == 7396
    confere("so-traducao", "7.396")

    maximo = {"P0": 8, "P1": 6, "P2": 9, "P3": 4}
    aloc = {"P0": 3, "P1": 2, "P2": 4, "P3": 2}
    assert banqueiro_seguro(14, maximo, aloc, ["P3", "P0", "P1", "P2"])
    assert not banqueiro_seguro(14, maximo, aloc, ["P0", "P1", "P2", "P3"])
    assert not banqueiro_seguro(14, maximo, aloc, ["P2", "P3", "P0", "P1"])
    confere("so-banqueiro", "<P3, P0, P1, P2>")
    print("verif_so: tudo certo")
