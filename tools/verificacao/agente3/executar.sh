#!/bin/sh
# Executa um arquivo de código de tools/verificacao/agente3/codigo e imprime a saída.
# Uso: executar.sh ARQUIVO   (python3, javac/java, gcc, mcs/mono, php, node)
set -e
unset JAVA_TOOL_OPTIONS
cd "$(dirname "$0")/codigo"
f="$1"; T=$(mktemp -d)
case "$f" in
  *.py)   python3 -I "$f" ;;
  *.java) javac -d "$T" "$f" && java -cp "$T" "$(basename "$f" .java)" ;;
  *.c)    gcc -std=c11 -Wall -o "$T/a.out" "$f" && "$T/a.out" ;;
  *.cs)   mcs -nologo -out:"$T/a.exe" "$f" >/dev/null && mono "$T/a.exe" ;;
  *.php)  php "$f" ;;
  *.js)   node "$f" ;;
esac
rm -rf "$T"
