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

  D.init = function (idConfig) {
    var cfg = (window.CONFIGS || {})[idConfig];
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
