#!/usr/bin/env bash
# Verificação (bash real) das questões de permissões e pipeline do Linux — agente 4.
set -euo pipefail
d=$(mktemp -d); trap 'rm -rf "$d"' EXIT; cd "$d"

# so-umask: umask 007 -> arquivo 660, diretório 770
( umask 007; touch extrato.csv; mkdir relatorios )
[ "$(stat -c %A extrato.csv)" = "-rw-rw----" ]
[ "$(stat -c %A relatorios)" = "drwxrwx---" ]
echo "ok  so-umask: rw-rw---- e rwxrwx---"

# so-sgid: chmod 2775 -> drwxrwsr-x
mkdir cambio; chmod 2775 cambio
[ "$(stat -c %A cambio)" = "drwxrwsr-x" ]
echo "ok  so-sgid: drwxrwsr-x"

# so-pipe-shell: shell mais usado e quantidade
cat > passwd <<'P'
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
ana:x:1001:1001:Ana:/home/ana:/bin/bash
joao:x:1002:1002:Joao:/home/joao:/bin/bash
nginx:x:990:990:nginx:/var/lib/nginx:/usr/sbin/nologin
bia:x:1003:1003:Bia:/home/bia:/bin/bash
P
saida=$(cut -d: -f7 passwd | sort | uniq -c | sort -rn | head -1 | tr -s ' ')
[ "$saida" = " 4 /bin/bash" ]
echo "ok  so-pipe-shell: '$saida' (shell mais usado + contagem)"
echo "verif_so.sh: tudo certo"
