# -*- coding: utf-8 -*-
"""Verificação dos cálculos de Serviços (agente 4)."""
from comum import confere

if __name__ == "__main__":
    assert 2 ** 24 == 16_777_216
    confere("srv-vxlan-calc", "16.777.216 segmentos, sobre UDP 4789")
    disp = 495 / (495 + 5)
    assert disp == 0.99 and round((1 - 5 / 495) * 100, 2) == 98.99
    confere("srv-mtbf", "99,00%")
    print("verif_serv: tudo certo")
