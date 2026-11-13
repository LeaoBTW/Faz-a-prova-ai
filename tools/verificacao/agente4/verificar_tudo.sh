#!/usr/bin/env bash
# Regera banco/variacoes-esp-b.js e roda todas as verificações do agente 4.
set -euo pipefail
cd "$(dirname "$0")"
python3 gerar.py
for s in verif_arq verif_devops verif_so verif_redes verif_serv verif_seg verif_nuvem; do python3 "$s.py"; done
./verif_so.sh
