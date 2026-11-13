# Esquema das questões

Cada questão é um objeto passado para `BANCO.push(...)` dentro de um arquivo `banco/*.js`.
O objeto deve ser **JSON válido**: chaves e textos entre aspas duplas, sem comentários dentro
do objeto e sem vírgula sobrando. Comentários `//` ou `/* */` fora do `push` são permitidos.
Assim o mesmo arquivo funciona no navegador (inclusive abrindo o `index.html` por `file://`)
e no validador em Python.

```js
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-BD-V001",
  "concursos": ["banestes-2027-analista-ti"],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Banco de Dados",
  "topico": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
  "ref_apostila": {
    "modulo": "05",
    "secao": "7",
    "titulo": "SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)",
    "link": "[[05 - Bancos de Dados e Linguagens#7. SQL – DML e consultas (SELECT, JOINs, agrupamento, subconsultas, NULL)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Simulado FCC 1 – Q3",
    "id_pai": "ESP-BD-0016",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere as tabelas `FORNECEDOR(id, nome)` e ...",
  "imagem": null,
  "alternativas": { "A": "...", "B": "...", "C": "...", "D": "...", "E": "..." },
  "gabarito": "D",
  "comentario": "Por que D está certa e por que cada outra está errada ...",
  "tags": ["SQL", "LEFT JOIN"],
  "embaralhavel": false,
  "status": "rascunho",
  "validacao": { "por": "agente-3", "em": "2026-11-14", "obs": "" },
  "versao": 1
});
```

## Campos

| Campo | Obrigatório | Valores / regra |
|---|---|---|
| `id` | sim | Único. Gerais: `LP-0001`, `RLE-0001`, `ATU-0001`, `ETI-0001`. Específicos: `ESP-<SIGLA>-0001`. Variações: mesmo prefixo com `V` (`LP-V001`, `ESP-BD-V001`). |
| `concursos` | sim | Lista; deve conter `"banestes-2027-analista-ti"`. |
| `banca_estilo` | não | `"FCC"`, `"FGV"`, `"ACCESS"`, `"Cebraspe"` ou `null`. |
| `bloco` | sim | `"gerais"` ou `"especificos"`. |
| `materia` | sim | Gerais: `Língua Portuguesa`, `Raciocínio Lógico e Estatística`, `Atualidades do Mercado Financeiro e Digital`, `Ética, Compliance e ESG`. Específicos: `Desenvolvimento de Sistemas`. |
| `eixo` | sim | `null` nos Gerais; nos Específicos, um dos 12 eixos (tabela abaixo). |
| `topico` | sim | Texto livre curto (o app agrupa por ele no treino e nos relatórios). |
| `ref_apostila` | sim | `modulo` ("01"–"07"), `secao` (número da seção `##`), `titulo` e `link` no formato wiki do Obsidian `[[arquivo#seção]]`. |
| `origem.tipo` | sim | `"prova_real"`, `"apostila"`, `"simulado"` ou `"variacao"`. |
| `origem.fonte` | sim | Referência legível: `"Banestes 2024 (ACCESS) – Q47"`, `"Apostila 05 §27 – Q3"`, `"Simulado FCC 1 – Q12"`. Variações repetem a fonte da questão-pai. |
| `origem.id_pai` | variações | id da questão de onde a variação nasceu (define a "família"; o sorteio usa no máximo uma questão por família). |
| `origem.anulada` | sim | `true` só para questões anuladas pela banca (ficam fora dos simulados). |
| `origem.prova`, `origem.numero` | provas reais | `"banestes-2021"` / `"banestes-2024"` e o número original (usados no modo "Refazer prova real"). |
| `formato` | sim | `"multipla_5"` (A–E), `"multipla_4"` (A–D, só a prova ACCESS 2024) ou `"certo_errado"`. |
| `dificuldade` | sim | 1 fácil · 2 média · 3 difícil. |
| `texto_base` | sim | `null` ou id de um texto em `banco/textos-base.js` (`TEXTOS_BASE.push({"id", "fonte", "texto"})`). |
| `enunciado` | sim | Markdown simples: `**negrito**`, `*itálico*`, `` `código` ``, blocos ```` ``` ````, tabelas, listas, citações. HTML é exibido como texto (exceto `<u>`). |
| `imagem` | sim | `null` ou caminho relativo (`"img/2024-q16-curva-s.png"`). |
| `alternativas` | sim | Objeto `{ "A": ..., "E": ... }` (5 distintas) em `multipla_5`; A–D em `multipla_4`; `null` em `certo_errado`. Aceita Markdown. |
| `gabarito` | sim | Letra da alternativa; `"C"` (certo) ou `"E"` (errado) em `certo_errado`; `null` só em anulada. |
| `comentario` | sim | Markdown; pode ser `""` quando a fonte não traz comentário. |
| `tags` | sim | Lista de textos (ex.: `"ingles"`, `"datado"`, `"certo-errado"`). |
| `embaralhavel` | sim | `true` se a ordem das alternativas pode mudar (hoje o app não embaralha). |
| `status` | sim | `"rascunho"`, `"validada"`, `"rejeitada"` ou `"duvida"`. Só `validada` entra no app. |
| `validacao` | não | `{ "por", "em", "obs" }`. |
| `versao` | sim | Inteiro, começa em 1. |

## Eixos dos Específicos

| Sigla | Eixo | Arquivo | Questões por prova |
|---|---|---|---|
| PROC | Processo de desenvolvimento de software | `esp-processo.js` | 7 |
| PROG | Programação | `esp-programacao.js` | 7 |
| GOV | Gestão e Governança de TI | `esp-governanca.js` | 6 |
| BD | Banco de Dados | `esp-bd.js` | 6 |
| WEB | Desenvolvimento web e mobile | `esp-web.js` | 5 |
| SEG | Segurança da Informação | `esp-seguranca.js` | 4 |
| ARQ | Arquitetura de sistemas | `esp-arquitetura.js` | 3 |
| DEVOPS | DevOps e DevSecOps | `esp-devops.js` | 3 |
| SO | Sistemas Operacionais | `esp-so.js` | 3 |
| REDES | Redes de computadores | `esp-redes.js` | 3 |
| SERV | Serviços e gerenciamento de redes | `esp-servicos.js` | 2 |
| NUVEM | Computação em nuvem | `esp-nuvem.js` | 1 |

## Regras de uso no app

- **Simulados** (completo, mini): só `status: "validada"`, `anulada: false` e formato de múltipla escolha.
- **Treino e caderno de erros**: aceitam também `certo_errado`; anuladas só se o usuário marcar a opção (com aviso).
- **Refazer prova real**: usa `origem.prova` e `origem.numero`, inclusive as anuladas (que contam como acerto, como na prova).
- Um arquivo novo em `banco/` precisa de uma linha `<script src="banco/arquivo.js"></script>` no `index.html`
  (os três arquivos de variações já estão incluídos).

## Validação

```
python3 tools/validar_banco.py
```

Confere campos obrigatórios, ids únicos e no padrão, matéria/eixo válidos, 5 alternativas distintas
e gabarito válido em `multipla_5`, `id_pai` existente, texto-base e imagem existentes. Sai com código 1
se houver erro. Roda no GitHub Actions a cada push e pull request (`.github/workflows/validar.yml`).
