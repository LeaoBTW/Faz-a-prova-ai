# -*- coding: utf-8 -*-
"""Verificação dos cálculos e do YAML de DevOps (agente 4)."""
import math
import re

import yaml

from comum import confere, correta_por_chave

if __name__ == "__main__":
    # taxa de falha de mudanças
    assert 6 / 40 == 0.15
    confere("dev-dora-cfr", "15%")
    # error budget de 99,9% em 30 dias
    minutos = 30 * 24 * 60 * (1 - 0.999)
    assert abs(minutos - 43.2) < 1e-6
    confere("dev-error-budget", "43,2 minutos")
    assert abs(30 * 24 * 60 * 0.0001 - 4.32) < 1e-9          # distrator 99,99%
    assert abs(365 * 24 * 0.001 - 8.76) < 1e-9               # distrator anual
    # HPA
    assert math.ceil(4 * 90 / 60) == 6
    confere("dev-hpa-calc", "6.")
    # YAML do GitLab CI: estrutura conferida com PyYAML
    _, _, q = correta_por_chave("dev-gitlab-yaml")
    bloco = re.search(r"```yaml\n(.*?)```", q["enun"], re.S).group(1)
    cfg = yaml.safe_load(bloco)
    assert cfg["stages"] == ["build", "test", "deploy"]
    assert cfg["producao"]["rules"][0]["when"] == "manual"
    assert cfg["producao"]["stage"] == "deploy"
    assert cfg["producao"]["rules"][0]["if"] == '$CI_COMMIT_BRANCH == "main"'
    confere("dev-gitlab-yaml", "aguarda acionamento manual")
    print("verif_devops: tudo certo")
