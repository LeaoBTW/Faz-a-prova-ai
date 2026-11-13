/*
 * Correções do agente 5 (validador) sobre as questões IMPORTADAS (banco/gerais-*.js e banco/esp-*.js).
 * Esses arquivos são gerados por tools/importar.py; para não perder as correções numa reimportação,
 * elas ficam aqui e são aplicadas ao carregar:
 *   - no app, por app/dados.js (FP.dados.aplicarCorrecoes);
 *   - no validador, por tools/validar_banco.py (carregar/aplicar_correcoes).
 * Cada CORRECOES.push recebe um objeto JSON válido:
 *   {"id": "...", "campos": {"campo": valor, ...}, "motivo": "..."}
 * Cada campo listado substitui o campo inteiro da questão (objetos como ref_apostila vão completos).
 * As variações (banco/variacoes-*.js) NÃO são corrigidas aqui: corrija nos dados do gerador.
 */
window.CORRECOES = window.CORRECOES || [];

CORRECOES.push({
  "id": "ESP-PROG-0006",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0011",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0058",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0059",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0060",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0061",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0062",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0063",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});
