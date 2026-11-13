#!/bin/sh
# Confere: cherry-pick traz só o commit escolhido de release/2.4 para develop.
set -e
D=$(mktemp -d); cd "$D"; git init -q -b develop .
git config user.email t@t; git config user.name t
echo base > a.txt; git add .; git commit -qm base
git checkout -qb release/2.4
echo ajuste > b.txt; git add .; git commit -qm "ajuste de versão"
echo correcao > c.txt; git add .; git commit -qm "correção"
H=$(git rev-parse HEAD)
git checkout -q develop
git cherry-pick "$H" >/dev/null
ls | tr '\n' ' '; echo
cd /; rm -rf "$D"
