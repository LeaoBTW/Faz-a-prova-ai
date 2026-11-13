# Faz a prova AI

App web de simulados e treino para o concurso **Banestes 2027 – Analista de TI (Desenvolvimento de Sistemas)**,
edital 01/2027 (FCC). Monta provas na proporção do edital, corrige com a nota oficial, guarda o histórico,
mostra a evolução e mantém um caderno de erros com revisão espaçada.

- **Site final:** https://leaobtw.github.io/Faz-a-prova-ai/
- **Homologação:** https://leaobtw.github.io/Faz-a-prova-ai/homolog/ (versão em teste; mostra a faixa
  "HOMOLOGAÇÃO" e guarda o histórico separado do site final)

É HTML + CSS + JavaScript puro, sem dependências nem CDN: funciona no GitHub Pages, no celular e offline,
abrindo o `index.html` de um clone local.

## O que tem

| Modo | Como funciona |
|---|---|
| Simulado completo | 80 questões (30 Gerais + 50 Específicos por eixo), cronômetro de 4 h, folha de respostas, correção só ao entregar. |
| Mini-simulado | 20 ou 40 questões na mesma proporção, 3 min por questão. |
| Treino | Por matéria, eixo, tópico ou origem; mostra o gabarito, o comentário e o link da apostila logo após responder. Aceita itens Certo/Errado. |
| Caderno de erros | Cada erro volta em 1, 3 e 7 dias; sai depois de 2 acertos seguidos. |
| Refazer prova real | Banestes 2021 (FGV) e 2024 (Instituto ACCESS) completas, na ordem original. |

Correção: **Nota = (Gerais + 2 × Específicos) ÷ 3**, cada bloco de 0 a 10 (mínimo 6,00), também em pontos de 90
(Gerais 1, Específicos 1,2), posição aproximada no resultado de 2024, desempenho por matéria, eixo e tópico,
tempo por questão, respostas trocadas e marcações ("chutei", "revisar", "acho que o gabarito está errado").

Histórico: fica no navegador (`localStorage`), com perfis por nome. Em **Dados** dá para exportar/importar
JSON (backup ou levar para outro aparelho). No Chrome/Edge do computador, dá para escolher uma pasta do vault
do Obsidian: a cada simulado o app grava `historico.json`, `Painel.md` e `AAAA-MM-DD Simulado NN.md`.
Em qualquer navegador há o botão **Baixar nota .md** no resultado.

## Como usar

1. Abra o site (ou o `index.html` local).
2. Crie seu perfil escolhendo o concurso (na primeira visita o app pede isso). Cada perfil é **pessoa + concurso**: para estudar outro concurso, crie outro perfil pelo seletor do topo.
3. Comece por um mini-simulado ou treino; faça o simulado completo com 4 h livres.
4. Depois de cada simulado, baixe a nota `.md` (ou deixe gravar na pasta do vault) e revise as erradas
   pelo link da apostila.
5. Exporte o histórico de vez em quando (Dados → Exportar).

Atalhos na prova e no treino: teclas **A–E** (ou 1–5) marcam a alternativa; **← →** navegam.

## Rodar localmente

Não precisa instalar nada:

```
git clone https://github.com/LeaoBTW/Faz-a-prova-ai.git
```

e abra `index.html` no navegador (duplo clique). Se preferir um servidor local:
`python3 -m http.server` na pasta e acesse http://localhost:8000.

## Branches e publicação

```
branch de trabalho ──PR──► homolog ──(teste no /homolog/)──PR──► main ──► site final
```

- Cada tarefa (ex.: `agente1-app-e-importacao`, `variacoes-gerais`) abre PR para **`homolog`**.
- Depois de testar em https://leaobtw.github.io/Faz-a-prova-ai/homolog/, abre-se PR de `homolog` para **`main`**.
- O workflow `.github/workflows/pages.yml` roda em push para `main` ou `homolog` (ou manualmente): faz checkout
  dos dois branches, monta `_site` com a `main` na raiz e a `homolog` em `_site/homolog/` (sem `.git`, `.github`,
  `tools` e `docs`) e publica no GitHub Pages. Em *Settings → Pages*, a fonte deve ser **GitHub Actions**.
- O workflow `.github/workflows/validar.yml` roda o validador do banco em todo push e pull request.

## Banco de questões

Hoje: **912 questões** importadas das fontes originais (apostila módulos 01–07, provas reais 2021 e 2024,
Simulado FCC 1). Detalhes, contagens e as cotas de variações em
[`docs/relatorio-importacao.md`](docs/relatorio-importacao.md).

### Adicionar ou corrigir questões

1. Edite o arquivo da matéria/eixo em `banco/` (ou o seu arquivo de variações) seguindo
   [`docs/esquema.md`](docs/esquema.md). O objeto em `BANCO.push(...)` deve ser JSON válido.
2. Use um id novo e único (variações: sufixo `V`, ex. `ESP-BD-V001`) e `status: "rascunho"` até a revisão.
3. Rode o validador:
   ```
   python3 tools/validar_banco.py
   ```
4. Abra o `index.html` e confira a questão no modo Treino.

### Reimportar das fontes

```
python3 tools/importar.py --fontes CAMINHO/DA/PASTA
```

A pasta deve ter `apostila/` (os `.md` dos módulos 01–07) e `provas/` (os três simulados e a imagem
`2024 - Q16 curva S.png`). O importador reescreve `banco/gerais-*.js`, `banco/esp-*.js`,
`banco/textos-base.js`, `img/` e `docs/relatorio-importacao.md`. Não toca nos arquivos `variacoes-*.js`.
Atenção: correções feitas à mão nos arquivos importados são perdidas ao reimportar.

## Estrutura

```
index.html                 o app (carrega os scripts abaixo, sem dependências externas)
app/                       util, markdown, dados, armazenamento, sorteio, correcao, grafico, telas, main + estilo.css
config/
  banestes-2027-analista-ti.js   estrutura da prova, eixos, pesos, tempo, mínimo e posições de 2024
banco/
  gerais-lp.js, gerais-rle.js, gerais-atualidades.js, gerais-etica.js
  esp-<eixo>.js            um arquivo por eixo dos Específicos
  variacoes-gerais.js, variacoes-esp-a.js, variacoes-esp-b.js   variações (agentes 2–4)
  textos-base.js           textos compartilhados por várias questões
img/                       figuras das questões
tools/
  importar.py              importador das fontes (Markdown do vault)
  catalogo.py              matérias, eixos e classificação das provas e seções da apostila
  relatorio.py             gera docs/relatorio-importacao.md
  validar_banco.py         validador do banco (usado no CI)
docs/
  esquema.md               formato das questões
  relatorio-importacao.md  contagens, dúvidas e cotas de variação
.github/workflows/         validar.yml (CI do banco) e pages.yml (publicação main + homolog)
```

O histórico de respostas **não** vai para o repositório: fica no navegador e, se você quiser, no vault.

## Adicionar outro concurso

1. Copie `config/banestes-2027-analista-ti.js` para `config/<id>.js`, troque `id`, `nome`, `nome_curto`, `instituicao`, `cargo`, banca, data, blocos/matérias e eixos.
2. Carregue o arquivo no `index.html` (junto dos outros `config/*.js`).
3. Marque as questões que valem para ele no campo `concursos` (questões sem esse campo valem para todos os concursos). Questões de um tópico em comum podem ser reaproveitadas listando os dois ids.
4. Ele aparece automaticamente na tela de criação de perfil, agrupado pela instituição.
