/* Montagem das provas (regras da seção 4.3 do plano):
   1. prioriza questões nunca vistas; só repete quando o banco da unidade acaba;
   2. no máximo uma questão por família (original + variações) em cada prova;
   3. mistura origens (prova real, apostila, simulado, variação);
   4. distribui o gabarito entre as letras e evita sequências longas da mesma letra;
   5. só questões validadas, não anuladas e de múltipla escolha. */
(function () {
  "use strict";
  var FP = window.FP;
  var D = FP.dados;
  var SO = (FP.sorteio = {});

  /* Distribui `total` questões pelas unidades, proporcional à prova (maiores restos). */
  SO.distribuir = function (total) {
    var us = D.unidades;
    var soma = us.reduce(function (s, u) { return s + u.questoes; }, 0);
    if (total === soma) return us.map(function (u) { return { u: u, n: u.questoes }; });
    var lista = us.map(function (u) {
      var exato = (u.questoes * total) / soma;
      return { u: u, n: Math.floor(exato), resto: exato - Math.floor(exato) };
    });
    var falta = total - lista.reduce(function (s, x) { return s + x.n; }, 0);
    lista.slice().sort(function (a, b) { return b.resto - a.resto || b.u.questoes - a.u.questoes; })
      .slice(0, falta).forEach(function (x) { x.n++; });
    return lista;
  };

  /* Intercala os candidatos por tipo de origem para misturar fontes. */
  function misturarOrigens(lista) {
    var grupos = {};
    lista.forEach(function (q) { (grupos[q.origem.tipo] = grupos[q.origem.tipo] || []).push(q); });
    var chaves = FP.embaralhar(Object.keys(grupos));
    var out = [];
    var algum = true;
    while (algum) {
      algum = false;
      chaves.forEach(function (k) {
        if (grupos[k].length) { out.push(grupos[k].shift()); algum = true; }
      });
    }
    return out;
  }

  function ordenarCandidatos(pool, perfil) {
    var novas = [], vistas = [];
    pool.forEach(function (q) { (perfil.questoes[q.id] ? vistas : novas).push(q); });
    novas = misturarOrigens(FP.embaralhar(novas));
    vistas = FP.embaralhar(vistas).sort(function (a, b) {
      var sa = perfil.questoes[a.id], sb = perfil.questoes[b.id];
      return (sa.u || "").localeCompare(sb.u || "");
    });
    return { novas: novas, vistas: vistas };
  }

  /* Escolhe n questões favorecendo as letras de gabarito menos usadas. */
  function escolher(candidatos, n, familias, contLetra, escolhidas) {
    var janela = 6;
    var lista = candidatos.slice();
    while (escolhidas.length < n && lista.length) {
      var vistas = [];
      for (var i = 0; i < lista.length && vistas.length < janela; i++) {
        if (!familias[D.familia(lista[i])]) vistas.push(i);
      }
      if (!vistas.length) break;
      var melhor = vistas[0];
      vistas.forEach(function (idx) {
        if ((contLetra[lista[idx].gabarito] || 0) < (contLetra[lista[melhor].gabarito] || 0)) melhor = idx;
      });
      var q = lista.splice(melhor, 1)[0];
      familias[D.familia(q)] = true;
      contLetra[q.gabarito] = (contLetra[q.gabarito] || 0) + 1;
      escolhidas.push(q);
      // remove do início os já bloqueados por família, para a janela andar
      lista = lista.filter(function (x) { return !familias[D.familia(x)]; });
    }
    return escolhidas;
  }

  /* Reordena para não haver mais de 2 gabaritos iguais seguidos (quando possível). */
  SO.evitarSequencias = function (lista, anteriores) {
    var resto = lista.slice();
    var out = [];
    var hist = (anteriores || []).slice(-2);
    while (resto.length) {
      var idx = 0;
      if (hist.length === 2 && hist[0] === hist[1]) {
        for (var i = 0; i < resto.length; i++) { if (resto[i].gabarito !== hist[1]) { idx = i; break; } }
      }
      var q = resto.splice(idx, 1)[0];
      out.push(q);
      hist.push(q.gabarito);
      if (hist.length > 2) hist.shift();
    }
    return out;
  };

  /* Monta uma prova com `total` questões. Devolve {questoes:[ids], avisos:[]} */
  SO.montar = function (total, perfil) {
    var dist = SO.distribuir(total);
    var familias = {}, contLetra = {}, avisos = [];
    var usadas = {};
    var porUnidade = {};
    D.todas.forEach(function (q) {
      if (!D.usavelSimulado(q)) return;
      var u = D.unidade(q);
      (porUnidade[u] = porUnidade[u] || []).push(q);
    });
    var resultado = [];
    var faltas = { gerais: 0, especificos: 0 };
    dist.forEach(function (d) {
      if (!d.n) { resultado.push({ u: d.u, qs: [] }); return; }
      var pool = porUnidade[d.u.nome] || [];
      var c = ordenarCandidatos(pool, perfil);
      var esc = escolher(c.novas, d.n, familias, contLetra, []);
      if (esc.length < d.n) {
        if (c.vistas.length) avisos.push(d.u.nome + ": banco de questões não vistas acabou; repetindo questões já vistas.");
        escolher(c.vistas, d.n, familias, contLetra, esc);
      }
      if (esc.length < d.n) faltas[d.u.bloco] += d.n - esc.length;
      esc.forEach(function (q) { usadas[q.id] = true; });
      resultado.push({ u: d.u, qs: esc });
    });
    // completa faltas com outras unidades do mesmo bloco
    ["gerais", "especificos"].forEach(function (bloco) {
      if (!faltas[bloco]) return;
      var pool = D.todas.filter(function (q) { return q.bloco === bloco && D.usavelSimulado(q) && !usadas[q.id]; });
      var c = ordenarCandidatos(pool, perfil);
      var extra = escolher(c.novas.concat(c.vistas), faltas[bloco], familias, contLetra, []);
      if (extra.length) {
        avisos.push("Faltaram " + faltas[bloco] + " questões em alguns eixos/matérias de " + bloco + "; completadas com outras do mesmo bloco.");
        resultado.push({ u: { nome: "Complemento (" + bloco + ")", bloco: bloco }, qs: extra });
      }
      if (extra.length < faltas[bloco]) avisos.push("O banco não tem questões suficientes para completar a prova.");
    });
    // ordena: Gerais (matérias na ordem) e Específicos; evita sequências de letras
    var ids = [];
    var ant = [];
    var gerais = resultado.filter(function (r) { return r.u.bloco === "gerais"; });
    var esp = resultado.filter(function (r) { return r.u.bloco === "especificos"; });
    gerais.concat(esp).forEach(function (r) {
      var ord = SO.evitarSequencias(FP.embaralhar(r.qs), ant);
      ord.forEach(function (q) { ids.push(q.id); ant.push(q.gabarito); });
    });
    return { questoes: ids, avisos: avisos };
  };

  /* Treino: filtra e ordena (não vistas primeiro). */
  SO.treino = function (filtro, perfil) {
    var lista = D.todas.filter(function (q) {
      if (!D.usavelTreino(q)) return false;
      if (D.anulada(q) && !filtro.anuladas) return false;
      if (q.formato === "certo_errado" && !filtro.certoErrado) return false;
      if (filtro.bloco && q.bloco !== filtro.bloco) return false;
      if (filtro.unidade && D.unidade(q) !== filtro.unidade) return false;
      if (filtro.topico && q.topico !== filtro.topico) return false;
      if (filtro.origem && q.origem.tipo !== filtro.origem) return false;
      if (filtro.naoVistas && perfil.questoes[q.id]) return false;
      return true;
    });
    var c = ordenarCandidatos(lista, perfil);
    var out = c.novas.concat(c.vistas).map(function (q) { return q.id; });
    if (filtro.limite) out = out.slice(0, filtro.limite);
    return out;
  };
})();
