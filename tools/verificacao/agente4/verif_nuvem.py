# -*- coding: utf-8 -*-
"""Verificação dos cálculos de Nuvem (agente 4)."""
from comum import confere

if __name__ == "__main__":
    paralelo = 1 - (1 - 0.995) ** 2
    assert round(paralelo * 100, 4) == 99.9975
    assert round(0.995 ** 2 * 100, 4) == 99.0025  # distrator: série
    confere("nuv-ha-paralelo", "99,9975%")
    print("verif_nuvem: tudo certo")
