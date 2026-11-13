/* Correção, nota pelo edital, comparação com 2024 e relatórios em Markdown. */
(function () {
  "use strict";
  var FP = window.FP;
  var D = FP.dados;
  var CO = (FP.correcao = {});

  /* Posição aproximada no resultado de um concurso anterior (config.historico) a partir
     do percentual (interpolação linear). Sem histórico na config, devolve null. */
  CO.posicaoHistorica = function (pct) {
    var hst = D.historico;
    if (!hst) return null;
    var ano = hst.ano;
    var t = hst.posicoes.slice().sort(function (a, b) { return b.percentual - a.percentual; });
    if (pct >= t[0].percentual) return { posicao: 1, texto: "acima do 1º colocado de " + ano + " (" + t[0].percentual + "%)" };
    var ult = t[t.length - 1];
    if (pct < ult.percentual) return { posicao: null, texto: "abaixo do último aprovado de " + ano + " (" + ult.percentual + "%)" };
    for (var i = 0; i < t.length - 1; i++) {
      var a = t[i], b = t[i + 1];
      if (pct <= a.percentual && pct >= b.percentual) {
        var f = (a.percentual - pct) / (a.percentual - b.percentual || 1);
        var pos = Math.round(a.posicao + f * (b.posicao - a.posicao));
        return { posicao: pos, texto: "≈ " + pos + "º lugar (entre " + a.rotulo + " e " + b.rotulo + ")" };
      }
    }
    return { posicao: null, texto: "–" };
  };

  function soma(obj, chave, acertou) {
    var x = obj[chave] || (obj[chave] = { total: 0, acertos: 0 });
    x.total++;
    if (acertou) x.acertos++;
  }

  /* sessao: {tipo, prova, itens:[{id, resp, tempo, mudancas, marcas}], decorrido, limite} */
  CO.corrigir = function (sessao) {
    var r = { acertos: 0, total: 0, blocos: {},
      porMateria: {}, porEixo: {}, porTopico: {}, itens: [], brancos: 0, mudancas: 0, tempoTotal: 0,
      marcas: { chutei: 0, chuteiAcertos: 0, revisar: 0, suspeito: 0 } };
    var real = sessao.tipo === "prova_real";
    D.blocos.forEach(function (b) { r.blocos[b.id] = r[b.id] = { total: 0, acertos: 0 }; });
    sessao.itens.forEach(function (it) {
      var q = D.porId[it.id];
      if (!q) return;
      var anul = D.anulada(q);
      var acertou = anul ? real : it.resp != null && it.resp === q.gabarito;
      if (it.resp == null) r.brancos++;
      r.total++;
      if (acertou) r.acertos++;
      var bl = r.blocos[q.bloco] || (r.blocos[q.bloco] = r[q.bloco] = { total: 0, acertos: 0 });
      bl.total++;
      if (acertou) bl.acertos++;
      soma(r.porMateria, q.materia, acertou);
      if (q.eixo) soma(r.porEixo, q.eixo, acertou);
      soma(r.porTopico, D.unidade(q) + " › " + q.topico, acertou);
      r.mudancas += it.mudancas || 0;
      r.tempoTotal += it.tempo || 0;
      var m = it.marcas || {};
      if (m.chutei) { r.marcas.chutei++; if (acertou) r.marcas.chuteiAcertos++; }
      if (m.revisar) r.marcas.revisar++;
      if (m.suspeito) r.marcas.suspeito++;
      r.itens.push({ id: it.id, resp: it.resp, gabarito: q.gabarito, acertou: acertou, anulada: anul, tempo: it.tempo || 0,
        mudancas: it.mudancas || 0, marcas: m });
    });
    // nota = média ponderada das notas dos blocos (cada uma de 0 a 10), pesos da config
    var somaPesos = 0, somaNotas = 0;
    D.blocos.forEach(function (b) {
      var x = r.blocos[b.id];
      x.nota = x.total ? (10 * x.acertos) / x.total : null;
      if (x.nota != null) { somaPesos += b.peso; somaNotas += b.peso * x.nota; }
    });
    var nota = somaPesos ? somaNotas / somaPesos : 0;
    r.G = r.blocos.gerais ? r.blocos.gerais.nota : null;
    r.E = r.blocos.especificos ? r.blocos.especificos.nota : null;
    r.nota = nota;
    r.pontos = (nota / 10) * D.pontosTotal;
    r.pontosTotal = D.pontosTotal;
    r.pontos90 = r.pontos; // compatibilidade com históricos antigos
    r.percentual = nota * 10;
    r.aprovado = nota >= D.config.nota_minima;
    // pontuação original (2024: Específicos peso 2, total 110)
    var pr = sessao.prova && (D.config.provas_reais || []).filter(function (p) { return p.id === sessao.prova; })[0];
    if (pr && pr.pontuacao_original) {
      var po = r.gerais.acertos + pr.pontuacao_original.especificos_peso * r.especificos.acertos;
      var tot = r.gerais.total + pr.pontuacao_original.especificos_peso * r.especificos.total;
      r.original = { pontos: po, total: tot, percentual: (100 * po) / tot };
    } else if (real) {
      r.original = { pontos: r.acertos, total: r.total, percentual: (100 * r.acertos) / r.total };
    }
    var hst = D.historico;
    r.posicao = CO.posicaoHistorica(r.original && hst && sessao.prova === hst.prova_original ? r.original.percentual : r.percentual);
    return r;
  };

  /* Desempenho de um bloco num resultado (aceita históricos antigos sem r.blocos). */
  CO.bloco = function (r, b) {
    var x = (r.blocos && r.blocos[b.id]) || r[b.id] || { total: 0, acertos: 0 };
    return { total: x.total, acertos: x.acertos, nota: x.total ? (10 * x.acertos) / x.total : null };
  };
  CO.tagsMd = function () {
    var t = D.config.tags_obsidian || [(D.config.instituicao || "concurso").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\W+/g, "-")];
    return "tags:\n" + t.concat(["simulado"]).map(function (x) { return "  - " + x; }).join("\n");
  };

  CO.nomeTipo = function (s) {
    if (s.tipo === "completo") return "Simulado completo";
    if (s.tipo === "mini") return "Mini-simulado (" + s.itens.length + ")";
    if (s.tipo === "prova_real") {
      var p = (D.config.provas_reais || []).filter(function (x) { return x.id === s.prova; })[0];
      return "Prova real – " + (p ? p.nome : s.prova);
    }
    return s.tipo;
  };

  function linha(cols) { return "| " + cols.join(" | ") + " |"; }

  CO.nomeArquivo = function (s) {
    var n = String(s.numero || 1);
    while (n.length < 2) n = "0" + n;
    return FP.dataISO(s.fim) + " Simulado " + n + ".md";
  };

  /* Nota .md de um simulado (para o vault do Obsidian). */
  CO.notaMd = function (s) {
    var r = s.resultado;
    var L = [];
    L.push("---");
    L.push("title: " + CO.nomeArquivo(s).replace(/\.md$/, ""));
    L.push("tipo: " + CO.nomeTipo(s));
    L.push("data: " + FP.dataISO(s.fim));
    L.push("perfil: " + JSON.stringify(s.perfil || ""));
    L.push("nota: " + r.nota.toFixed(2));
    L.push(CO.tagsMd());
    L.push("---");
    L.push("");
    L.push("# " + CO.nomeTipo(s) + " – " + FP.dataBR(s.fim));
    L.push("");
    L.push("Voltar: [[Painel]]" + (D.config.nota_edital ? " · [[" + D.config.nota_edital + "]]" : ""));
    L.push("");
    L.push("| | |");
    L.push("|---|---|");
    L.push(linha(["**Nota final**", "**" + FP.fmtNum(r.nota) + "** (mínimo " + FP.fmtNum(D.config.nota_minima) + ")" + (r.aprovado ? " ✅" : " ❌")]));
    if (D.blocos.length > 1) D.blocos.forEach(function (b) {
      var x = CO.bloco(r, b);
      L.push(linha([b.curto + " (0–10)", x.nota == null ? "–" : FP.fmtNum(x.nota) + " (" + x.acertos + "/" + x.total + ")"]));
    });
    L.push(linha(["Pontos (de " + FP.fmtNum(D.pontosTotal, 0) + ")", FP.fmtNum(r.pontos != null ? r.pontos : r.pontos90, 1)]));
    L.push(linha(["Acertos", r.acertos + "/" + r.total + " (" + FP.pct(r.acertos, r.total) + "%), em branco: " + r.brancos]));
    if (r.original) L.push(linha(["Pontuação no formato original", FP.fmtNum(r.original.pontos, 0) + "/" + r.original.total + " (" + FP.fmtNum(r.original.percentual, 1) + "%)"]));
    if (r.posicao && D.historico) L.push(linha(["Posição aproximada em " + D.historico.ano, r.posicao.texto]));
    L.push(linha(["Tempo", FP.fmtTempo(s.decorrido) + " de " + FP.fmtTempo(s.limite) + " (média " + FP.fmtTempo(r.tempoTotal / Math.max(1, r.total)) + " por questão)"]));
    L.push(linha(["Respostas trocadas", String(r.mudancas)]));
    L.push(linha(["Chutes", r.marcas.chutei + " (acertou " + r.marcas.chuteiAcertos + ")"]));
    L.push("");
    L.push("## Por matéria");
    L.push("");
    L.push("| Matéria | Acertos | % |");
    L.push("|---|---|---|");
    Object.keys(r.porMateria).forEach(function (k) {
      var x = r.porMateria[k];
      L.push(linha([k, x.acertos + "/" + x.total, FP.pct(x.acertos, x.total) + "%"]));
    });
    if (Object.keys(r.porEixo).length) {
      L.push("");
      L.push("## Por eixo");
      L.push("");
      L.push("| Eixo | Acertos | % |");
      L.push("|---|---|---|");
      D.unidades.filter(function (u) { return u.eixo; }).forEach(function (e) {
        var x = r.porEixo[e.nome];
        if (x) L.push(linha([e.nome, x.acertos + "/" + x.total, FP.pct(x.acertos, x.total) + "%"]));
      });
    }
    var erradas = r.itens.filter(function (i) { return !i.acertou; });
    L.push("");
    L.push("## Questões erradas (" + erradas.length + ")");
    L.push("");
    erradas.forEach(function (i, k) {
      var q = D.porId[i.id];
      var n = s.itens.map(function (x) { return x.id; }).indexOf(i.id) + 1;
      L.push("- **Q" + n + "** `" + q.id + "` – " + (q.eixo || q.materia) + " › " + q.topico + " · marcou **" + (D.exibida(q, s.id, i.resp) || "em branco") +
        "**, gabarito **" + D.exibida(q, s.id, q.gabarito) + "** · " + q.origem.fonte + " · revisar " + q.ref_apostila.link);
    });
    var marcadas = r.itens.filter(function (i) { return i.marcas && (i.marcas.revisar || i.marcas.suspeito || i.marcas.chutei); });
    if (marcadas.length) {
      L.push("");
      L.push("## Marcadas");
      L.push("");
      marcadas.forEach(function (i) {
        var q = D.porId[i.id];
        var m = [];
        if (i.marcas.chutei) m.push("chutei");
        if (i.marcas.revisar) m.push("revisar");
        if (i.marcas.suspeito) m.push("gabarito suspeito");
        L.push("- `" + q.id + "` (" + m.join(", ") + ") – " + q.topico + " · " + (i.acertou ? "acertou" : "errou") + " · " + q.ref_apostila.link);
      });
    }
    var topErr = Object.keys(r.porTopico).map(function (k) { return [k, r.porTopico[k]]; })
      .filter(function (x) { return x[1].acertos < x[1].total; })
      .sort(function (a, b) { return (b[1].total - b[1].acertos) - (a[1].total - a[1].acertos); }).slice(0, 10);
    if (topErr.length) {
      L.push("");
      L.push("## Tópicos para revisar");
      L.push("");
      topErr.forEach(function (x) { L.push("- " + x[0] + ": errou " + (x[1].total - x[1].acertos) + " de " + x[1].total); });
    }
    L.push("");
    L.push("*Gerado pelo Faz a prova AI" + (FP.HOMOLOG ? " (homologação)" : "") + ".*");
    return L.join("\n") + "\n";
  };

  /* Painel.md: evolução de todos os simulados do perfil */
  CO.painelMd = function () {
    var p = FP.store.perfil();
    var multi = D.blocos.length > 1, hst = D.historico;
    var cab = ["Data", "Simulado", "Tipo", "Nota"].concat(multi ? D.blocos.map(function (b) { return b.curto; }) : []).concat(["Acertos"]).concat(hst ? ["Posição " + hst.ano] : []);
    var L = ["---", "title: Painel do simulador", CO.tagsMd(), "---", "",
      "# Painel do simulador – " + FP.store.nomePerfil(), "",
      "Atualizado em " + FP.dataBR(new Date()) + ". Meta: nota " + D.config.meta_nota.map(function (x) { return FP.fmtNum(x, 1); }).join(" a ") +
      "; mínimo " + FP.fmtNum(D.config.nota_minima) + ".", "",
      linha(cab), linha(cab.map(function () { return "---"; }))];
    p.simulados.forEach(function (s) {
      var r = s.resultado;
      L.push(linha([FP.dataISO(s.fim), "[[" + CO.nomeArquivo(s).replace(/\.md$/, "") + "]]", CO.nomeTipo(s), FP.fmtNum(r.nota)]
        .concat(multi ? D.blocos.map(function (b) { var x = CO.bloco(r, b); return x.nota == null ? "–" : FP.fmtNum(x.nota); }) : [])
        .concat([r.acertos + "/" + r.total]).concat(hst ? [r.posicao ? r.posicao.texto : "–"] : [])));
    });
    var cad = Object.keys(p.caderno).length;
    L.push("");
    L.push("Caderno de erros: " + cad + " questões. Gabaritos suspeitos marcados: " + Object.keys(p.suspeitas).length + ".");
    var susp = Object.keys(p.suspeitas);
    if (susp.length) {
      L.push("");
      L.push("## Gabaritos para conferir");
      L.push("");
      susp.forEach(function (id) {
        var q = D.porId[id];
        if (q) L.push("- `" + id + "` – " + q.origem.fonte + " – gabarito " + q.gabarito + " – " + q.ref_apostila.link);
      });
    }
    return L.join("\n") + "\n";
  };
})();
