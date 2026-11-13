# -*- coding: utf-8 -*-
"""Verificação das questões de Segurança com execução real (agente 4)."""
import hashlib
import sqlite3

from comum import confere


def remover(versao, id_conta):
    con = sqlite3.connect(":memory:")
    cur = con.cursor()
    cur.execute("CREATE TABLE conta(id INTEGER PRIMARY KEY, titular TEXT)")
    cur.executemany("INSERT INTO conta VALUES (?, ?)", [(i, "t%d" % i) for i in range(10, 15)])
    if versao == 1:
        cur.execute("DELETE FROM conta WHERE id = " + id_conta)
    else:
        cur.execute("DELETE FROM conta WHERE id = ?", (id_conta,))
    return cur.rowcount


def dv_cpf(base9):
    d = [int(c) for c in base9]
    for n in (10, 11):
        s = sum(x * p for x, p in zip(d, range(n, 1, -1)))
        r = (s * 10) % 11 % 10
        d.append(r)
    return "".join(map(str, d))


if __name__ == "__main__":
    assert (remover(1, "10 OR 1=1"), remover(2, "10 OR 1=1")) == (5, 0)
    confere("seg-sqli-python", "5 e 0")

    assert len(hashlib.sha256(b"remessa").hexdigest()) == 64
    confere("seg-hash-propriedades", "64 caracteres hexadecimais")

    # Demonstração: hash SHA-256 sem chave de CPF é revertido por força bruta
    alvo_cpf = dv_cpf("123456" + "789")
    alvo = hashlib.sha256(alvo_cpf.encode()).hexdigest()
    achado = None
    for i in range(123_000_000, 123_999_999 + 1):  # subconjunto de 1 milhão de bases
        c = dv_cpf("%09d" % i)
        if hashlib.sha256(c.encode()).hexdigest() == alvo:
            achado = c
            break
    assert achado == alvo_cpf
    print("    hash do CPF revertido por força bruta: %s" % achado)
    confere("seg-hash-cpf", "SHA-256 sem chave")

    dias = ["dom", "seg", "ter", "qua", "qui", "sex"]
    falha = "sex"
    necessarios = ["completo dom"] + ["incr " + d for d in dias[1:dias.index(falha)]]
    assert len(necessarios) == 5
    confere("seg-backup-incremental", "segunda, terça, quarta e quinta-feira")
    print("verif_seg: tudo certo")
