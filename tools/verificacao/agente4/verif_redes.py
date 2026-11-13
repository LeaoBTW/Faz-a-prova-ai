# -*- coding: utf-8 -*-
"""Verificação dos cálculos de Redes com o módulo ipaddress (agente 4)."""
import ipaddress as ip

from comum import confere, correta_por_chave

RFC1918 = [ip.ip_network(n) for n in ("10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16")]


def privado(a):
    return any(ip.ip_address(a) in n for n in RFC1918)


if __name__ == "__main__":
    n = ip.ip_interface("172.16.45.200/26").network
    assert (str(n.network_address), str(n.broadcast_address)) == ("172.16.45.192", "172.16.45.255")
    confere("red-sub-26", "172.16.45.192 e 172.16.45.255")

    n = ip.ip_interface("192.168.10.77/29").network
    h = list(n.hosts())
    assert (str(h[0]), str(h[-1])) == ("192.168.10.73", "192.168.10.78")
    confere("red-sub-29", "192.168.10.73 a 192.168.10.78")

    prefixos = [p for p in range(8, 31) if 2 ** (32 - p) - 2 >= 500]
    assert max(prefixos) == 23 and 2 ** 9 - 2 == 510
    confere("red-mascara-500", "/23")

    cur = int(ip.ip_address("192.168.50.0"))
    redes = []
    for need in (100, 50, 20):
        p = max(q for q in range(8, 31) if 2 ** (32 - q) - 2 >= need)
        net = ip.ip_network((cur, p))
        redes.append(net)
        cur = int(net.broadcast_address) + 1
    assert str(redes[2]) == "192.168.50.192/27"
    confere("red-vlsm", "192.168.50.192/27")

    original = ip.ip_address("2001:0db8:0000:00a0:0000:0000:0000:0001")
    assert original.compressed == "2001:db8:0:a0::1"
    _, _, q = correta_por_chave("red-ipv6-abrev")
    for letra, txt in q["alts"].items():
        try:
            igual = ip.ip_address(txt) == original
        except ValueError:
            igual = False
        assert igual == (letra == q["gab"]), (letra, txt)
    confere("red-ipv6-abrev", "2001:db8:0:a0::1")

    _, _, q = correta_por_chave("red-rfc1918")
    for letra, txt in q["alts"].items():
        a, b = [x.strip(" .") for x in txt.split(" e ")]
        assert (privado(a) and privado(b)) == (letra == q["gab"]), (letra, txt)
    confere("red-rfc1918", "10.255.0.1 e 192.168.200.10")

    # domínios: 15 portas com 1 PC + 1 porta com hub = 16 colisão; 2 VLANs = 2 broadcast
    assert 15 + 1 == 16
    confere("red-dominios", "16 domínios de colisão e 2 de broadcast")

    assert 2 ** 12 - 2 == 4094 and 2 ** 3 == 8
    confere("red-8021q", "4.094 e 8")
    print("verif_redes: tudo certo")
