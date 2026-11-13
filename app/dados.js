/* Índice do banco de questões e da configuração do concurso. */
(function () {
  "use strict";
  var FP = window.FP;

  var D = (FP.dados = {
    todas: [],
    porId: {},
    textos: {},
    config: null,
    unidades: [], // matérias dos Gerais + eixos dos Específicos, na ordem da prova
    duplicadas: []
  });

  /* Aplica banco/correcoes.js (sobreposição às questões importadas, que são geradas
     por tools/importar.py): cada correção troca campos inteiros da questão de mesmo id. */
  D.aplicarCorrecoes = function () {
    var porId = {};
    (window.BANCO || []).forEach(function (q) { if (q && q.id && !porId[q.id]) porId[q.id] = q; });
    D.correcoesAplicadas = [];
    D.correcoesInvalidas = [];
    (window.CORRECOES || []).forEach(function (c) {
      var q = c && porId[c.id];
      if (!q || !c.campos) { D.correcoesInvalidas.push(c && c.id); return; }
      Object.keys(c.campos).forEach(function (k) { q[k] = c.campos[k]; });
      D.correcoesAplicadas.push(c.id);
    });
  };

  D.init = function (idConfig) {
    var cfg = (window.CONFIGS || {})[idConfig];
    D.aplicarCorrecoes();
    D.config = cfg;
    var vistos = {};
    D.todas = [];
    (window.BANCO || []).forEach(function (q) {
      if (!q || !q.id) return;
      if (vistos[q.id]) { D.duplicadas.push(q.id); return; }
      if (q.concursos && q.concursos.indexOf(cfg.id) < 0) return;
      vistos[q.id] = true;
      D.todas.push(q);
    });
    D.porId = vistos;
    D.todas.forEach(function (q) { D.porId[q.id] = q; });
    D.textos = {};
    (window.TEXTOS_BASE || []).forEach(function (t) { D.textos[t.id] = t; });
    D.unidades = [];
    cfg.blocos.forEach(function (b) {
      if (b.id === "gerais") {
        b.materias.forEach(function (m) {
          D.unidades.push({ nome: m.nome, sigla: m.sigla, bloco: "gerais", questoes: m.questoes });
        });
      }
    });
    cfg.eixos.forEach(function (e) {
      D.unidades.push({ nome: e.nome, sigla: e.sigla, bloco: "especificos", questoes: e.questoes });
    });
  };

  /* "Unidade" de distribuição: matéria (Gerais) ou eixo (Específicos) */
  D.unidade = function (q) { return q.bloco === "gerais" ? q.materia : q.eixo; };
  D.familia = function (q) { return (q.origem && q.origem.id_pai) || q.id; };
  D.anulada = function (q) { return !!(q.origem && q.origem.anulada); };
  D.ehMultipla = function (q) { return q.formato === "multipla_5" || q.formato === "multipla_4"; };
  D.usavelSimulado = function (q) { return q.status === "validada" && !D.anulada(q) && D.ehMultipla(q); };
  D.usavelTreino = function (q) { return q.status === "validada"; };
  D.letras = function (q) {
    if (q.formato === "certo_errado") return ["C", "E"];
    return Object.keys(q.alternativas || {}).sort();
  };
  /* Embaralhamento das alternativas.
     Prova real mantém a ordem original. Importadas da apostila/simulado e variações
     marcadas como embaralháveis trocam de ordem, exceto quando alguma alternativa
     depende da posição (ex.: "todas as anteriores", "(b)", "tanto ... quanto"). */
  var REF_POSICAO = /anteriores|acima|abaixo|alternativa|\(\s*[a-eA-E]\s*\)|(^|\s)[a-eA-E]\)|tanto .+ quanto/;
  D.embaralhavel = function (q) {
    if (!D.ehMultipla(q) || !q.origem || q.origem.tipo === "prova_real") return false;
    // variações e inéditas trazem a marcação do autor; as importadas usam só a regra abaixo
    var criada = q.origem.tipo === "variacao" || /^Inédita/.test(q.origem.fonte || "");
    if (criada && q.embaralhavel === false) return false;
    var alts = q.alternativas || {};
    for (var k in alts) if (REF_POSICAO.test(alts[k])) return false;
    return true;
  };
  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  /* Ordem de exibição: lista das letras ORIGINAIS na ordem em que aparecem.
     Determinística por (semente, id): a mesma prova sempre mostra a mesma ordem. */
  D.ordem = function (q, semente) {
    var letras = D.letras(q);
    if (!semente || !D.embaralhavel(q)) return letras;
    var a = letras.slice(), s = hash(semente + "|" + q.id) || 1;
    for (var i = a.length - 1; i > 0; i--) {
      s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0;
      var j = s % (i + 1);
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };
  /* Letra exibida para uma letra original. */
  D.exibida = function (q, semente, orig) {
    if (orig == null) return orig;
    var ordem = D.ordem(q, semente), letras = D.letras(q), i = ordem.indexOf(orig);
    return i < 0 ? orig : letras[i];
  };
  D.provaReal = function (idProva) {
    return D.todas.filter(function (q) { return q.origem && q.origem.prova === idProva && q.origem.tipo === "prova_real"; })
      .sort(function (a, b) { return a.origem.numero - b.origem.numero; });
  };
  D.topicos = function (filtro) {
    var c = {};
    D.todas.forEach(function (q) {
      if (filtro && D.unidade(q) !== filtro) return;
      c[q.topico] = (c[q.topico] || 0) + 1;
    });
    return c;
  };
  D.nomeOrigem = function (q) {
    return { prova_real: "Prova real", apostila: "Apostila", simulado: "Simulado", variacao: "Variação" }[q.origem.tipo] || q.origem.tipo;
  };
})();
