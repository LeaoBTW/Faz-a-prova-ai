/* Telas do app. Navegação por hash (#/inicio, #/treino, ...). */
(function () {
  "use strict";
  var FP = window.FP;
  var h = FP.h;
  var D = FP.dados;
  var S = FP.store;
  var UI = (FP.ui = {});

  var raiz;
  var relogio = null;
  var estudo = null; // sessão de treino/caderno (em memória)

  function main() { return raiz; }
  function limpar(titulo) {
    pararRelogio();
    raiz.innerHTML = "";
    document.title = (titulo ? titulo + " · " : "") + "Faz a prova AI" + (FP.HOMOLOG ? " (homologação)" : "");
    window.scrollTo(0, 0);
  }
  function ir(hash) {
    if (location.hash === hash) UI.rota(); else location.hash = hash;
  }
  UI.ir = ir;

  function botao(txt, fn, cls, extra) {
    var a = { class: "btn " + (cls || ""), type: "button", onclick: fn };
    Object.keys(extra || {}).forEach(function (k) { a[k] = extra[k]; });
    return h("button", a, txt);
  }
  function cartao(filhos, cls) { return h("section", { class: "cartao " + (cls || "") }, filhos); }
  function titulo(t, sub) {
    return h("div", { class: "titulo-tela" }, [h("h1", null, t), sub ? h("p", { class: "sub" }, sub) : null]);
  }

  /* ------------------------------------------------------------------ */
  /* Cabeçalho: perfis e tema                                            */
  /* ------------------------------------------------------------------ */
  UI.cabecalho = function () {
    var ca = document.getElementById("concurso-atual");
    if (ca && D.config) ca.textContent = (D.config.nome_curto || D.config.nome) + " ▾";
    var sel = document.getElementById("perfil");
    sel.innerHTML = "";
    S.perfis().forEach(function (n) {
      sel.appendChild(h("option", { value: n, selected: n === S.nomePerfil() }, n + " · " + S.concursoDe(n)));
    });
    sel.appendChild(h("option", { value: "__novo" }, "+ Novo perfil…"));
    sel.onchange = function () {
      if (sel.value === "__novo") { UI.cabecalho(); ir("#/novo-perfil"); return; }
      S.trocarPerfil(sel.value);
      if (/^#\/(prova|estudo|resultado)/.test(location.hash)) ir("#/"); else UI.rota();
    };
    var bt = document.getElementById("tema");
    var tema = S.estado.tema || "auto";
    bt.textContent = { auto: "Tema: automático", claro: "Tema: claro", escuro: "Tema: escuro" }[tema];
    bt.setAttribute("aria-label", "Tema: " + tema + ". Clique para trocar.");
    bt.onclick = function () {
      S.estado.tema = { auto: "claro", claro: "escuro", escuro: "auto" }[tema];
      S.salvar();
      UI.aplicarTema();
      UI.cabecalho();
    };
  };
  UI.aplicarTema = function () {
    var t = S.estado.tema;
    if (t === "claro") document.documentElement.setAttribute("data-theme", "light");
    else if (t === "escuro") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
  };

  /* ------------------------------------------------------------------ */
  /* Componentes de questão                                              */
  /* ------------------------------------------------------------------ */
  function refApostila(q) {
    var r = q.ref_apostila || {};
    return h("div", { class: "ref" }, [
      h("span", null, "📖 Apostila " + r.modulo + " · §" + r.secao + (r.titulo ? " " + r.titulo : "")),
      " ",
      botao("Copiar link do Obsidian", function () {
        FP.copiar(r.link).then(function () { FP.aviso("Link copiado: " + r.link); });
      }, "btn-mini")
    ]);
  }

  function cabecalhoQuestao(q, num, total) {
    var badges = [h("span", { class: "tag" }, D.unidade(q))];
    badges.push(h("span", { class: "tag leve" }, q.topico));
    badges.push(h("span", { class: "tag leve" }, q.origem.fonte));
    if (q.formato === "certo_errado") badges.push(h("span", { class: "tag alerta" }, "Certo/Errado"));
    if (D.anulada(q)) badges.push(h("span", { class: "tag erro" }, "Anulada"));
    if (q.status !== "validada") badges.push(h("span", { class: "tag alerta" }, q.status));
    return h("div", { class: "q-cab" }, [
      num ? h("span", { class: "q-num" }, "Questão " + num + (total ? " de " + total : "")) : null,
      h("div", { class: "tags" }, badges)
    ]);
  }

  function corpoQuestao(q) {
    var frag = h("div", { class: "q-corpo" });
    if (q.texto_base && D.textos[q.texto_base]) {
      var t = D.textos[q.texto_base];
      frag.appendChild(h("details", { class: "texto-base", open: true }, [
        h("summary", null, "Texto-base (" + t.fonte + ")"),
        h("div", { class: "md", html: FP.md(t.texto) })
      ]));
    }
    frag.appendChild(h("div", { class: "md enunciado", html: FP.md(q.enunciado) }));
    if (q.imagem) {
      frag.appendChild(h("figure", { class: "q-img" }, [h("img", { src: q.imagem, alt: "Figura da questão " + q.id, loading: "lazy" })]));
    }
    if (D.anulada(q)) frag.appendChild(h("p", { class: "aviso-anulada" }, "⚠ Questão anulada pela banca: conta como acerto na prova real e não entra nos simulados."));
    return frag;
  }

  /* Lista de alternativas. op: {resp, aoEscolher(letra), revelar: bool, semente}
     resp e aoEscolher usam sempre a letra ORIGINAL (a do gabarito); a tela mostra
     as letras A–E na ordem embaralhada definida por D.ordem(q, semente). */
  function alternativas(q, op) {
    var lista = h("div", { class: "alts", role: "radiogroup", "aria-label": "Alternativas" });
    var exib = D.letras(q);
    D.ordem(q, op.semente).forEach(function (L, i) {
      var texto = q.formato === "certo_errado" ? (L === "C" ? "Certo" : "Errado") : q.alternativas[L];
      var cls = "alt";
      if (op.resp === L) cls += " marcada";
      if (op.revelar) {
        if (L === q.gabarito) cls += " correta";
        else if (op.resp === L) cls += " errada";
      }
      var b = h("button", { type: "button", class: cls, role: "radio", "aria-checked": op.resp === L ? "true" : "false",
        disabled: op.revelar ? true : null, "data-letra": L, "data-exib": exib[i],
        onclick: function () { if (op.aoEscolher) op.aoEscolher(L); } }, [
        h("span", { class: "alt-letra" }, exib[i]),
        h("span", { class: "alt-texto md", html: FP.md(texto) })
      ]);
      lista.appendChild(b);
    });
    return lista;
  }

  /* Botão da alternativa pela letra que o usuário VÊ (teclado). */
  function botaoExibido(area, L) { return area.querySelector('[data-exib="' + L + '"]'); }

  function comentario(q, semente) {
    var c = q.comentario && q.comentario.trim();
    var ordem = D.ordem(q, semente), letras = D.letras(q);
    var trocou = ordem.join("") !== letras.join("");
    var gab = D.anulada(q) ? "anulada" : (q.formato === "certo_errado" ? (q.gabarito === "C" ? "Certo" : "Errado") : D.exibida(q, semente, q.gabarito));
    return h("div", { class: "comentario" }, [
      h("p", { class: "gab" }, ["Gabarito: ", h("strong", null, gab)]),
      trocou ? h("p", { class: "mudo nota-ordem" }, "As alternativas foram embaralhadas. O comentário usa as letras da ordem original: " +
        letras.map(function (L) { return L + " = " + D.exibida(q, semente, L) + " aqui"; }).join(" · ") + ".") : null,
      c ? h("div", { class: "md", html: FP.md(c) }) : h("p", { class: "mudo" }, "A fonte não traz comentário para esta questão. Revise a seção da apostila indicada."),
      refApostila(q)
    ]);
  }

  /* ------------------------------------------------------------------ */
  /* Início                                                              */
  /* ------------------------------------------------------------------ */
  UI.inicio = function () {
    limpar();
    var p = S.perfil();
    var cfg = D.config;
    var usaveis = D.todas.filter(D.usavelSimulado).length;
    var vistas = Object.keys(p.questoes).length;
    var hoje = FP.dataISO();
    var vencidas = Object.keys(p.caderno).filter(function (k) { return p.caderno[k].proxima <= hoje && D.porId[k]; }).length;
    var R = main();
    R.appendChild(titulo("Olá, " + S.nomePerfil(), cfg.nome + " · prova em " + new Date(cfg.data_prova + "T12:00:00").toLocaleDateString("pt-BR")));

    if (p.emAndamento) {
      var e = p.emAndamento;
      var resp = e.itens.filter(function (i) { return i.resp; }).length;
      R.appendChild(cartao([
        h("h2", null, "Simulado em andamento"),
        h("p", null, FP.correcao.nomeTipo(e) + " · " + resp + "/" + e.itens.length + " respondidas · tempo restante " + FP.fmtTempo(e.limite - e.decorrido)),
        h("div", { class: "acoes" }, [
          botao("Continuar", function () { ir("#/prova"); }, "primario"),
          botao("Descartar", function () {
            if (window.confirm("Descartar o simulado em andamento? As respostas serão perdidas.")) { p.emAndamento = null; S.salvar(); UI.inicio(); }
          }, "perigo")
        ])
      ], "destaque"));
    }

    var grade = h("div", { class: "grade-modos" });
    grade.appendChild(cartao([
      h("h2", null, "Simulado completo"),
      h("p", null, D.textoEstrutura() + " na proporção do edital, cronômetro de " + FP.fmtDuracao(cfg.tempo_min) + ", folha de respostas e correção só ao entregar."),
      botao("Começar simulado", function () { iniciarSimulado("completo", D.totalQuestoes); }, "primario", { "data-acao": "simulado-completo" })
    ], "modo"));
    grade.appendChild(cartao([
      h("h2", null, "Mini-simulado"),
      h("p", null, "Mesma proporção, " + cfg.minutos_por_questao_mini + " min por questão."),
      h("div", { class: "acoes" }, [
        botao("20 questões", function () { iniciarSimulado("mini", 20); }, "", { "data-acao": "mini-20" }),
        botao("40 questões", function () { iniciarSimulado("mini", 40); }, "", { "data-acao": "mini-40" })
      ])
    ], "modo"));
    grade.appendChild(cartao([
      h("h2", null, "Treino"),
      h("p", null, "Escolha " + (D.temEixos ? "matéria, eixo" : "matéria") + " ou tópico. O comentário aparece logo após cada resposta" + (cfg.tem_apostila === false ? "." : ", com o link para a apostila.")),
      botao("Treinar", function () { ir("#/treino"); }, "", { "data-acao": "treino" })
    ], "modo"));
    grade.appendChild(cartao([
      h("h2", null, "Caderno de erros"),
      h("p", null, Object.keys(p.caderno).length + " questões no caderno · " + vencidas + " para revisar hoje. Cada erro volta em " + cfg.caderno.intervalos_dias.join(", ").replace(/, (\d+)$/, " e $1") + " dias e sai após " + cfg.caderno.acertos_para_sair + " acertos seguidos."),
      botao("Abrir caderno", function () { ir("#/caderno"); }, "", { "data-acao": "caderno" })
    ], "modo"));
    if ((cfg.provas_reais || []).length) grade.appendChild(cartao([
      h("h2", null, "Refazer prova real"),
      h("p", null, "Provas completas, na ordem original, com o tempo da prova."),
      h("div", { class: "acoes" }, cfg.provas_reais.map(function (pr) {
        return botao(pr.nome, function () { iniciarProvaReal(pr.id); }, "", { "data-acao": "prova-" + pr.id });
      }))
    ], "modo"));
    grade.appendChild(cartao([
      h("h2", null, "Pontos fortes e fracos"),
      h("p", null, "Veja em que " + (D.temEixos ? "matérias, eixos" : "matérias") + " e tópicos você mais erra e onde já manda bem, e treine direto o que precisa."),
      botao("Ver desempenho", function () { ir("#/desempenho"); }, "", { "data-acao": "desempenho" })
    ], "modo"));
    grade.appendChild(cartao([
      h("h2", null, "Histórico e evolução"),
      h("p", null, p.simulados.length + " simulados feitos" + (p.simulados.length ? " · última nota " + FP.fmtNum(p.simulados[p.simulados.length - 1].resultado.nota) : "") + "."),
      botao("Ver histórico", function () { ir("#/historico"); }, "", { "data-acao": "historico" })
    ], "modo"));
    R.appendChild(grade);

    R.appendChild(cartao([
      h("h2", null, "Banco de questões"),
      h("p", null, D.todas.length + " questões (" + usaveis + " usáveis em simulado). Você já viu " + vistas + "."),
      h("div", { class: "acoes" }, [
        botao("Ver banco", function () { ir("#/banco"); }),
        botao("Dados, perfis e backup", function () { ir("#/dados"); })
      ])
    ]));
  };

  /* ------------------------------------------------------------------ */
  /* Prova (simulado completo, mini e prova real)                        */
  /* ------------------------------------------------------------------ */
  function novaSessao(tipo, ids, limite, extra) {
    var p = S.perfil();
    var s = { id: FP.id(), tipo: tipo, inicio: new Date().toISOString(), limite: limite, decorrido: 0, atual: 0,
      itens: ids.map(function (id) { return { id: id, resp: null, tempo: 0, mudancas: 0, marcas: {} }; }) };
    Object.keys(extra || {}).forEach(function (k) { s[k] = extra[k]; });
    p.emAndamento = s;
    S.salvar();
    ir("#/prova");
  }

  function podeComecar() {
    var p = S.perfil();
    return !p.emAndamento || window.confirm("Há um simulado em andamento. Descartá-lo e começar outro?");
  }

  function iniciarSimulado(tipo, total) {
    if (!podeComecar()) return;
    var m = FP.sorteio.montar(total, S.perfil());
    var limite = tipo === "completo" ? D.config.tempo_min * 60 : total * D.config.minutos_por_questao_mini * 60;
    novaSessao(tipo, m.questoes, limite, { avisos: m.avisos });
    if (m.avisos.length) FP.aviso(m.avisos[0]);
  }

  function iniciarProvaReal(idProva) {
    if (!podeComecar()) return;
    var pr = D.config.provas_reais.filter(function (x) { return x.id === idProva; })[0];
    var ids = D.provaReal(idProva).map(function (q) { return q.id; });
    novaSessao("prova_real", ids, (pr.tempo_min || D.config.tempo_min) * 60, { prova: idProva });
  }

  function pararRelogio() { if (relogio) { clearInterval(relogio); relogio = null; } document.onkeydown = null; }

  UI.prova = function () {
    var p = S.perfil();
    var s = p.emAndamento;
    if (!s) { ir("#/"); return; }
    limpar("Simulado");
    var R = main();
    var tempoEl = h("span", { class: "relogio", "aria-live": "off" });
    var progresso = h("span", { class: "progresso" });
    var folhaAberta = false;
    var folha = h("div", { class: "folha", hidden: true });
    var area = h("div", { class: "prova-area" });
    var barra = h("div", { class: "barra-prova" }, [
      h("div", { class: "barra-info" }, [h("strong", null, FP.correcao.nomeTipo(s)), progresso]),
      h("div", { class: "barra-acoes" }, [
        tempoEl,
        botao("Folha", function () {
          folhaAberta = !folhaAberta; folha.hidden = !folhaAberta; desenharFolha();
        }, "", { "data-acao": "folha" }),
        botao("Entregar", function () { entregar(false); }, "primario", { "data-acao": "entregar" })
      ])
    ]);
    R.appendChild(barra);
    R.appendChild(folha);
    R.appendChild(area);

    var ultimoTick = Date.now();
    var desdeSalvo = 0;
    function tick() {
      var agora = Date.now();
      var dt = Math.min(5, (agora - ultimoTick) / 1000);
      ultimoTick = agora;
      s.decorrido += dt;
      s.itens[s.atual].tempo += dt;
      desdeSalvo += dt;
      var resta = s.limite - s.decorrido;
      tempoEl.textContent = "⏱ " + FP.fmtTempo(resta);
      tempoEl.classList.toggle("acabando", resta < 600);
      if (desdeSalvo > 5) { S.salvar(); desdeSalvo = 0; }
      if (resta <= 0) { FP.aviso("Tempo esgotado. Simulado entregue."); entregar(true); }
    }
    pararRelogio();
    relogio = setInterval(tick, 1000);
    tempoEl.textContent = "⏱ " + FP.fmtTempo(s.limite - s.decorrido);

    function atualizarProgresso() {
      var n = s.itens.filter(function (i) { return i.resp; }).length;
      progresso.textContent = n + "/" + s.itens.length + " respondidas";
    }

    function desenharFolha() {
      if (folha.hidden) return;
      folha.innerHTML = "";
      var g = h("div", { class: "folha-grade" });
      var bloco = null;
      s.itens.forEach(function (it, i) {
        var q = D.porId[it.id];
        var nomeBloco = q && D.bloco(q.bloco) ? D.bloco(q.bloco).curto : "";
        if (nomeBloco !== bloco) { bloco = nomeBloco; g.appendChild(h("div", { class: "folha-sep" }, nomeBloco)); }
        var cls = "folha-item" + (it.resp ? " respondida" : "") + (i === s.atual ? " atual" : "") +
          (it.marcas.revisar ? " revisar" : "") + (it.marcas.chutei ? " chute" : "");
        g.appendChild(h("button", { type: "button", class: cls, title: "Questão " + (i + 1),
          onclick: function () { irPara(i); } }, [h("span", null, String(i + 1)), h("b", null, (D.porId[it.id] ? D.exibida(D.porId[it.id], s.id, it.resp) : it.resp) || "–")]));
      });
      var brancos = s.itens.filter(function (i) { return !i.resp; }).length;
      folha.appendChild(h("p", { class: "folha-legenda" }, "Em branco: " + brancos + " · ● respondida · ◆ revisar · ? chute"));
      folha.appendChild(g);
    }

    function irPara(i) {
      s.atual = Math.max(0, Math.min(s.itens.length - 1, i));
      desenhar();
      desenharFolha();
      window.scrollTo(0, 0);
    }

    function desenhar() {
      var it = s.itens[s.atual];
      var q = D.porId[it.id];
      area.innerHTML = "";
      atualizarProgresso();
      if (!q) {
        area.appendChild(cartao([h("p", null, "Questão " + it.id + " não está mais no banco."), botao("Próxima", function () { irPara(s.atual + 1); })]));
        return;
      }
      var c = cartao([], "questao");
      c.appendChild(cabecalhoQuestao(q, s.atual + 1, s.itens.length));
      c.appendChild(corpoQuestao(q));
      c.appendChild(alternativas(q, { resp: it.resp, semente: s.id, aoEscolher: function (L) {
        if (it.resp && it.resp !== L) it.mudancas++;
        it.resp = it.resp === L ? null : L;
        S.salvar();
        desenhar();
        desenharFolha();
      } }));
      var marcas = h("div", { class: "marcas" });
      [["chutei", "Chutei"], ["revisar", "Revisar depois"], ["suspeito", "Acho que o gabarito está errado"]].forEach(function (m) {
        marcas.appendChild(h("label", { class: "chip" + (it.marcas[m[0]] ? " ligado" : "") }, [
          h("input", { type: "checkbox", checked: !!it.marcas[m[0]], onchange: function (ev) {
            it.marcas[m[0]] = ev.target.checked; S.salvar(); desenhar(); desenharFolha();
          } }), " " + m[1]]));
      });
      c.appendChild(marcas);
      c.appendChild(h("div", { class: "nav-q" }, [
        botao("← Anterior", function () { irPara(s.atual - 1); }, "", { disabled: s.atual === 0 ? true : null, "data-acao": "anterior" }),
        botao(s.atual === s.itens.length - 1 ? "Ver folha" : "Próxima →", function () {
          if (s.atual === s.itens.length - 1) { folha.hidden = false; folhaAberta = true; desenharFolha(); window.scrollTo(0, 0); }
          else irPara(s.atual + 1);
        }, "primario", { "data-acao": "proxima" })
      ]));
      area.appendChild(c);
    }

    document.onkeydown = function (ev) {
      if (ev.target && /input|textarea|select/i.test(ev.target.tagName)) return;
      var k = ev.key.toUpperCase();
      var q = D.porId[s.itens[s.atual].id];
      if (!q) return;
      var letras = D.letras(q);
      if (letras.indexOf(k) >= 0 || /^[1-5]$/.test(k)) {
        var L = /^[1-5]$/.test(k) ? letras[+k - 1] : k;
        if (!L) return;
        var btn = botaoExibido(area, L);
        if (btn) btn.click();
      } else if (ev.key === "ArrowRight") irPara(s.atual + 1);
      else if (ev.key === "ArrowLeft") irPara(s.atual - 1);
    };

    function entregar(automatico) {
      if (!automatico) {
        var brancos = s.itens.filter(function (i) { return !i.resp; }).length;
        var msg = brancos ? "Há " + brancos + " questões em branco. Entregar mesmo assim?" : "Entregar o simulado e ver a correção?";
        if (!window.confirm(msg)) return;
      }
      pararRelogio();
      finalizar(s);
    }

    desenhar();
  };

  function finalizar(s) {
    var p = S.perfil();
    s.fim = new Date().toISOString();
    s.resultado = FP.correcao.corrigir(s);
    s.resultado.itens.forEach(function (r) {
      // em branco não conta como vista nem vai para o caderno de erros
      if (!r.anulada && r.resp != null) S.registrarResposta(r.id, r.acertou, r.resp, true);
      if (r.marcas && r.marcas.suspeito) S.marcarSuspeita(r.id, true, "Simulado de " + FP.dataISO(s.fim));
    });
    p.contador = (p.contador || 0) + 1;
    s.numero = p.contador;
    s.perfil = S.nomePerfil();
    delete s.atual;
    p.simulados.push(s);
    p.emAndamento = null;
    S.salvar();
    FP.pasta.gravarTudo(false, { nome: FP.correcao.nomeArquivo(s), conteudo: FP.correcao.notaMd(s) }).then(function (r) {
      if (r.ok) FP.aviso("Nota e histórico gravados na pasta " + r.pasta + ".");
    });
    ir("#/resultado/" + s.id);
  }

  /* ------------------------------------------------------------------ */
  /* Resultado                                                           */
  /* ------------------------------------------------------------------ */
  function tabelaDesempenho(titulo2, obj, ordem) {
    var chaves = ordem ? ordem.filter(function (k) { return obj[k]; }) : Object.keys(obj);
    if (!chaves.length) return null;
    var tb = h("table", { class: "tabela" }, [
      h("thead", null, h("tr", null, [h("th", null, titulo2), h("th", null, "Acertos"), h("th", null, "%"), h("th", { class: "col-barra" }, "")]))
    ]);
    var body = h("tbody");
    chaves.forEach(function (k) {
      var x = obj[k], pc = FP.pct(x.acertos, x.total);
      body.appendChild(h("tr", null, [h("td", null, k), h("td", null, x.acertos + "/" + x.total), h("td", null, pc + "%"),
        h("td", { class: "col-barra" }, FP.barra(pc))]));
    });
    tb.appendChild(body);
    return h("div", { class: "tabela-wrap" }, tb);
  }

  UI.resultado = function (id) {
    var p = S.perfil();
    var s = p.simulados.filter(function (x) { return x.id === id; })[0];
    if (!s) { ir("#/historico"); return; }
    limpar("Resultado");
    var r = s.resultado;
    var cfg = D.config;
    var R = main();
    R.appendChild(titulo("Resultado – " + FP.correcao.nomeTipo(s), FP.dataBR(s.fim) + " · simulado nº " + s.numero));

    var meta = cfg.meta_nota;
    R.appendChild(h("div", { class: "placar" }, [
      h("div", { class: "placar-nota " + (r.aprovado ? "ok" : "baixo"), "data-teste": "nota" }, [
        h("span", { class: "rot" }, "Nota final"),
        h("strong", null, FP.fmtNum(r.nota)),
        h("span", { class: "rot" }, r.aprovado ? "✔ acima do mínimo " + FP.fmtNum(cfg.nota_minima) : "✘ abaixo do mínimo " + FP.fmtNum(cfg.nota_minima)),
        h("span", { class: "rot" }, "meta: " + FP.fmtNum(meta[0], 1) + " a " + FP.fmtNum(meta[1], 1))
      ]),
      h("div", { class: "placar-itens" }, [
      ].concat(D.blocos.length > 1 ? D.blocos.map(function (b) {
        var x = FP.correcao.bloco(r, b);
        return item(b.curto + " (0–10)", x.nota == null ? "–" : FP.fmtNum(x.nota), x.acertos + "/" + x.total);
      }) : []).concat([
        item("Pontos (de " + FP.fmtNum(D.pontosTotal, 0) + ")", FP.fmtNum(r.pontos != null ? r.pontos : r.pontos90, 1),
          D.blocos.map(function (b) { return b.curto + " " + FP.fmtNum(b.ppq, b.ppq % 1 ? 1 : 0); }).join(" · ")),
        item("Acertos", r.acertos + "/" + r.total, FP.pct(r.acertos, r.total) + "% · " + r.brancos + " em branco"),
        r.original ? item("Formato original", FP.fmtNum(r.original.pontos, 0) + "/" + r.original.total, FP.fmtNum(r.original.percentual, 1) + "%") : null,
        r.posicao && D.historico ? item("Posição em " + D.historico.ano, r.posicao.posicao ? "≈ " + r.posicao.posicao + "º" : "–", r.posicao.texto) : null,
        item("Tempo", FP.fmtTempo(s.decorrido), "média " + FP.fmtTempo(r.tempoTotal / Math.max(1, r.total)) + " por questão"),
        item("Respostas trocadas", String(r.mudancas), "chutes: " + r.marcas.chutei + " (acertou " + r.marcas.chuteiAcertos + ")")
      ]))
    ]));
    var hst = D.historico;
    R.appendChild(h("p", { class: "nota-explica" }, D.textoFormula() + ". " +
      (hst ? "A posição compara seu percentual com o resultado de " + hst.ano + " (" + hst.posicoes.map(function (x) { return x.rotulo.split(" ")[0] + " " + x.percentual + "%"; }).join(", ") + ")" +
        (s.prova && s.prova === hst.prova_original && r.original ? ", usando a pontuação original de " + r.original.total + " pontos." : ".") : "")));

    var acoes = h("div", { class: "acoes" }, [
      botao("Baixar nota .md", function () {
        FP.baixar(FP.correcao.nomeArquivo(s), FP.correcao.notaMd(s), "text/markdown;charset=utf-8");
      }, "primario", { "data-acao": "baixar-md" }),
      FP.pasta.suportado() ? botao("Salvar na pasta do vault", function () {
        FP.pasta.gravarTudo(true, { nome: FP.correcao.nomeArquivo(s), conteudo: FP.correcao.notaMd(s) }).then(function (res) {
          if (res.ok) FP.aviso("Gravado em " + res.pasta + ".");
          else if (res.motivo === "sem-pasta") FP.aviso("Escolha a pasta em Dados, perfis e backup.");
          else FP.aviso("Não foi possível gravar: " + res.motivo);
        });
      }) : null,
      botao("Voltar ao início", function () { ir("#/"); })
    ]);
    R.appendChild(acoes);
    if (s.avisos && s.avisos.length) R.appendChild(cartao(s.avisos.map(function (a) { return h("p", { class: "mudo" }, "⚠ " + a); })));

    R.appendChild(cartao([h("h2", null, "Por matéria"), tabelaDesempenho("Matéria", r.porMateria, D.materias)]));
    var te = tabelaDesempenho("Eixo", r.porEixo, D.unidades.filter(function (u) { return u.eixo; }).map(function (e) { return e.nome; }));
    if (te) R.appendChild(cartao([h("h2", null, "Por eixo"), te]));
    var topicos = {};
    Object.keys(r.porTopico).sort(function (a, b) {
      var x = r.porTopico[a], y = r.porTopico[b];
      return (y.total - y.acertos) - (x.total - x.acertos) || a.localeCompare(b);
    }).forEach(function (k) { topicos[k] = r.porTopico[k]; });
    R.appendChild(cartao([h("details", null, [h("summary", null, "Por tópico (" + Object.keys(topicos).length + ")"), tabelaDesempenho("Tópico", topicos)])]));

    // tempo
    var lentas = r.itens.map(function (x, i) { return [i, x]; }).sort(function (a, b) { return b[1].tempo - a[1].tempo; }).slice(0, 5);
    R.appendChild(cartao([h("h2", null, "Tempo por questão"),
      h("p", null, "Total " + FP.fmtTempo(r.tempoTotal) + " · média " + FP.fmtTempo(r.tempoTotal / Math.max(1, r.total)) + ". Mais demoradas:"),
      h("ul", null, lentas.map(function (x) {
        var q = D.porId[x[1].id];
        return h("li", null, "Q" + (x[0] + 1) + " – " + FP.fmtTempo(x[1].tempo) + " – " + (q ? D.unidade(q) + " › " + q.topico : x[1].id) + (x[1].acertou ? " ✔" : " ✘"));
      }))]));

    // revisão
    var filtro = "erradas";
    var lista = h("div", { class: "revisao" });
    var seletor = h("div", { class: "segmentado", role: "tablist" });
    [["erradas", "Erradas"], ["marcadas", "Marcadas"], ["todas", "Todas"]].forEach(function (f) {
      seletor.appendChild(botao(f[1], function () { filtro = f[0]; desenharRevisao(); }, "", { "data-filtro": f[0] }));
    });
    function desenharRevisao() {
      [].forEach.call(seletor.children, function (b) { b.classList.toggle("ativo", b.getAttribute("data-filtro") === filtro); });
      lista.innerHTML = "";
      r.itens.forEach(function (x, i) {
        if (filtro === "erradas" && x.acertou) return;
        if (filtro === "marcadas" && !(x.marcas && (x.marcas.chutei || x.marcas.revisar || x.marcas.suspeito))) return;
        var q = D.porId[x.id];
        if (!q) return;
        var det = h("details", { class: "rev-item " + (x.acertou ? "ok" : "erro") }, [
          h("summary", null, [h("span", { class: "rev-n" }, "Q" + (i + 1)), " ",
            h("span", null, (x.acertou ? "✔ " : "✘ ") + D.unidade(q) + " › " + q.topico + " · marcou " + (D.exibida(q, s.id, x.resp) || "em branco") + " · gabarito " + (x.anulada ? "anulada" : D.exibida(q, s.id, q.gabarito)))])
        ]);
        det.addEventListener("toggle", function () {
          if (det.open && det.children.length === 1) {
            det.appendChild(cabecalhoQuestao(q));
            det.appendChild(corpoQuestao(q));
            det.appendChild(alternativas(q, { resp: x.resp, revelar: true, semente: s.id }));
            det.appendChild(comentario(q, s.id));
          }
        });
        lista.appendChild(det);
      });
      if (!lista.children.length) lista.appendChild(h("p", { class: "mudo" }, "Nenhuma questão neste filtro."));
    }
    R.appendChild(cartao([h("h2", null, "Revisão das questões"), seletor, lista]));
    desenharRevisao();
  };

  function item(rot, valor, detalhe) {
    return h("div", { class: "placar-item" }, [h("span", { class: "rot" }, rot), h("strong", null, valor), detalhe ? h("span", { class: "det" }, detalhe) : null]);
  }

  /* ------------------------------------------------------------------ */
  /* Treino e caderno (comentário imediato)                              */
  /* ------------------------------------------------------------------ */
  UI.treinoConfig = function () {
    limpar("Treino");
    var R = main();
    R.appendChild(titulo("Treino", "Escolha o que treinar. As questões nunca vistas vêm primeiro; o comentário aparece logo após a resposta."));
    var selU = h("select", { id: "f-unidade" }, [h("option", { value: "" }, "Todas as matérias e eixos")]);
    D.blocos.forEach(function (b) {
      var g = h("optgroup", { label: b.nome + (b.temEixos ? " (eixos)" : "") });
      D.unidades.filter(function (u) { return u.bloco === b.id; }).forEach(function (u) {
        var n = D.todas.filter(function (q) { return D.unidade(q) === u.nome && D.usavelTreino(q); }).length;
        g.appendChild(h("option", { value: u.nome }, u.nome + " (" + n + ")"));
      });
      selU.appendChild(g);
    });
    var selT = h("select", { id: "f-topico" });
    function encherTopicos() {
      selT.innerHTML = "";
      selT.appendChild(h("option", { value: "" }, "Todos os tópicos"));
      var t = D.topicos(selU.value || null);
      Object.keys(t).sort().forEach(function (k) { selT.appendChild(h("option", { value: k }, k + " (" + t[k] + ")")); });
    }
    selU.onchange = encherTopicos;
    encherTopicos();
    var selO = h("select", { id: "f-origem" }, [h("option", { value: "" }, "Todas as origens"), h("option", { value: "prova_real" }, "Provas reais"),
      h("option", { value: "apostila" }, "Apostila"), h("option", { value: "simulado" }, "Simulado / inéditas"), h("option", { value: "variacao" }, "Variações")]);
    var selN = h("select", { id: "f-limite" }, [10, 20, 30, 50, 0].map(function (n) { return h("option", { value: n, selected: n === 20 }, n ? n + " questões" : "Todas"); }));
    var ce = h("input", { type: "checkbox", id: "f-ce", checked: true });
    var nv = h("input", { type: "checkbox", id: "f-nv" });
    var an = h("input", { type: "checkbox", id: "f-an" });
    R.appendChild(cartao([
      h("div", { class: "form" }, [
        h("label", null, ["Matéria / eixo", selU]),
        h("label", null, ["Tópico", selT]),
        h("label", null, ["Origem", selO]),
        h("label", null, ["Quantidade", selN]),
        h("label", { class: "check" }, [ce, " Incluir itens Certo/Errado"]),
        h("label", { class: "check" }, [nv, " Só questões que nunca vi"]),
        h("label", { class: "check" }, [an, " Incluir questões anuladas (com aviso)"])
      ]),
      h("div", { class: "acoes" }, [botao("Começar treino", function () {
        var filtro = { unidade: selU.value || null, topico: selT.value || null, origem: selO.value || null,
          certoErrado: ce.checked, naoVistas: nv.checked, anuladas: an.checked, limite: +selN.value || 0 };
        var ids = FP.sorteio.treino(filtro, S.perfil());
        if (!ids.length) { FP.aviso("Nenhuma questão com esses filtros."); return; }
        var desc = [selU.value || "Todas", selT.value].filter(Boolean).join(" › ");
        estudo = { modo: "treino", desc: desc, fila: ids, idx: 0, resp: {}, inicio: new Date().toISOString() };
        ir("#/estudo");
      }, "primario", { "data-acao": "comecar-treino" })])
    ]));
  };

  UI.estudo = function () {
    if (!estudo) { ir("#/treino"); return; }
    limpar(estudo.modo === "caderno" ? "Caderno de erros" : "Treino");
    var R = main();
    var e = estudo;
    var feitas = Object.keys(e.resp).length;
    var acertos = Object.keys(e.resp).filter(function (k) { return e.resp[k].acertou; }).length;
    R.appendChild(h("div", { class: "barra-prova" }, [
      h("div", { class: "barra-info" }, [h("strong", null, (e.modo === "caderno" ? "Caderno de erros" : "Treino") + (e.desc ? " – " + e.desc : "")),
        h("span", { class: "progresso" }, "Questão " + (e.idx + 1) + " de " + e.fila.length + " · " + acertos + "/" + feitas + " certas")]),
      h("div", { class: "barra-acoes" }, [botao("Encerrar", function () { encerrarEstudo(); }, "", { "data-acao": "encerrar" })])
    ]));
    var q = D.porId[e.fila[e.idx]];
    var c = cartao([], "questao");
    c.appendChild(cabecalhoQuestao(q, e.idx + 1, e.fila.length));
    c.appendChild(corpoQuestao(q));
    var r = e.resp[q.id];
    c.appendChild(alternativas(q, { resp: r && r.resp, revelar: !!r, semente: e.inicio, aoEscolher: function (L) {
      if (e.resp[q.id]) return;
      var acertou = D.anulada(q) ? true : L === q.gabarito;
      e.resp[q.id] = { resp: L, acertou: acertou };
      var saiu = D.anulada(q) ? null : S.registrarResposta(q.id, acertou, L, true);
      S.salvar();
      if (saiu === "saiu") FP.aviso("Acertou 2 vezes seguidas: saiu do caderno de erros.");
      UI.estudo();
    } }));
    if (r) {
      c.appendChild(h("p", { class: "feedback " + (r.acertou ? "ok" : "erro"), role: "status" }, r.acertou ? "✔ Você acertou." : "✘ Você errou."));
      c.appendChild(comentario(q, e.inicio));
      var susp = !!S.perfil().suspeitas[q.id];
      c.appendChild(h("label", { class: "chip" + (susp ? " ligado" : "") }, [h("input", { type: "checkbox", checked: susp, onchange: function (ev) {
        S.marcarSuspeita(q.id, ev.target.checked, "Treino"); S.salvar(); UI.estudo();
      } }), " Acho que o gabarito está errado"]));
    }
    c.appendChild(h("div", { class: "nav-q" }, [
      botao("← Anterior", function () { e.idx--; UI.estudo(); }, "", { disabled: e.idx === 0 ? true : null }),
      e.idx < e.fila.length - 1 ? botao("Próxima →", function () { e.idx++; UI.estudo(); }, "primario", { "data-acao": "proxima" })
        : botao("Concluir", function () { encerrarEstudo(); }, "primario", { "data-acao": "concluir" })
    ]));
    R.appendChild(c);
    document.onkeydown = function (ev) {
      if (ev.target && /input|textarea|select/i.test(ev.target.tagName)) return;
      var k = ev.key.toUpperCase();
      var letras = D.letras(q);
      var L = /^[1-5]$/.test(k) ? letras[+k - 1] : (letras.indexOf(k) >= 0 ? k : null);
      if (L && !e.resp[q.id]) { var b = botaoExibido(raiz, L); if (b) b.click(); }
      else if (ev.key === "ArrowRight" && e.idx < e.fila.length - 1) { e.idx++; UI.estudo(); }
      else if (ev.key === "ArrowLeft" && e.idx > 0) { e.idx--; UI.estudo(); }
    };
  };

  function encerrarEstudo() {
    var e = estudo;
    if (!e) { ir("#/"); return; }
    var feitas = Object.keys(e.resp);
    var acertos = feitas.filter(function (k) { return e.resp[k].acertou; }).length;
    if (feitas.length) {
      S.perfil().treinos.push({ id: FP.id(), modo: e.modo, desc: e.desc, data: new Date().toISOString(), feitas: feitas.length, acertos: acertos });
      S.salvar();
    }
    estudo = null;
    limpar("Treino");
    main().appendChild(titulo(e.modo === "caderno" ? "Revisão concluída" : "Treino concluído"));
    main().appendChild(cartao([
      h("p", { class: "grande", "data-teste": "treino-resumo" }, acertos + " de " + feitas.length + " certas (" + FP.pct(acertos, feitas.length) + "%)."),
      h("p", null, "As erradas foram para o caderno de erros e voltam em 1 dia."),
      h("div", { class: "acoes" }, [botao("Novo treino", function () { ir("#/treino"); }, "primario"), botao("Caderno de erros", function () { ir("#/caderno"); }), botao("Início", function () { ir("#/"); })])
    ]));
  }

  UI.caderno = function () {
    limpar("Caderno de erros");
    var p = S.perfil();
    var hoje = FP.dataISO();
    var ids = Object.keys(p.caderno).filter(function (k) { return D.porId[k]; });
    var venc = ids.filter(function (k) { return p.caderno[k].proxima <= hoje; });
    var R = main();
    R.appendChild(titulo("Caderno de erros", "Cada erro volta em 1, 3 e 7 dias. A questão sai do caderno depois de 2 acertos seguidos."));
    function comecar(lista, desc) {
      estudo = { modo: "caderno", desc: desc, fila: FP.embaralhar(lista), idx: 0, resp: {}, inicio: new Date().toISOString() };
      ir("#/estudo");
    }
    R.appendChild(cartao([
      h("p", { class: "grande" }, venc.length + " para revisar hoje · " + ids.length + " no caderno"),
      h("div", { class: "acoes" }, [
        botao("Revisar as de hoje (" + venc.length + ")", function () { if (venc.length) comecar(venc, "vencidas"); else FP.aviso("Nada vencido hoje."); }, "primario", { "data-acao": "revisar-hoje" }),
        botao("Revisar todas agora", function () { if (ids.length) comecar(ids, "todas"); else FP.aviso("Caderno vazio."); })
      ])
    ]));
    if (ids.length) {
      ids.sort(function (a, b) { return p.caderno[a].proxima.localeCompare(p.caderno[b].proxima); });
      var tb = h("table", { class: "tabela" }, [h("thead", null, h("tr", null, [h("th", null, "Questão"), h("th", null, "Matéria/eixo › tópico"), h("th", null, "Próxima revisão"), h("th", null, "Acertos seguidos")]))]);
      var body = h("tbody");
      ids.forEach(function (k) {
        var q = D.porId[k], c = p.caderno[k];
        body.appendChild(h("tr", { class: c.proxima <= hoje ? "vencida" : "" }, [h("td", null, k), h("td", null, D.unidade(q) + " › " + q.topico),
          h("td", null, c.proxima.split("-").reverse().join("/")), h("td", null, (c.seguidos || 0) + "/" + D.config.caderno.acertos_para_sair)]));
      });
      tb.appendChild(body);
      R.appendChild(cartao([h("div", { class: "tabela-wrap" }, tb)]));
    }
  };

  /* ------------------------------------------------------------------ */
  /* Histórico e gráfico de evolução                                     */
  /* ------------------------------------------------------------------ */
  /* ------------------------------------------------------------------ */
  /* Pontos fortes e fracos                                              */
  /* ------------------------------------------------------------------ */
  // Agrega as estatísticas acumuladas do perfil (p.questoes: v/a/e por questão),
  // que somam simulados, treinos e caderno de erros.
  function agregarDesempenho(p) {
    var porUnidade = {}, porTopico = {}, total = { a: 0, v: 0, vistas: 0 };
    Object.keys(p.questoes).forEach(function (qid) {
      var q = D.porId[qid], st = p.questoes[qid];
      if (!q || D.anulada(q) || !st.v) return;
      var u = D.unidade(q), kt = u + "\u0001" + q.topico;
      var xu = porUnidade[u] || (porUnidade[u] = { a: 0, v: 0, vistas: 0 });
      var xt = porTopico[kt] || (porTopico[kt] = { unidade: u, topico: q.topico, a: 0, v: 0, vistas: 0 });
      [xu, xt, total].forEach(function (x) { x.a += st.a; x.v += st.v; x.vistas++; });
    });
    return { porUnidade: porUnidade, porTopico: porTopico, total: total };
  }

  function faixasDesempenho() {
    var cfg = D.config;
    var fraco = (cfg.nota_minima != null ? cfg.nota_minima : 6) * 10;
    var forte = (cfg.meta_nota ? cfg.meta_nota[0] : 7.5) * 10;
    return { fraco: fraco, forte: Math.max(forte, fraco) };
  }

  function situacao(pc, n, minimo, fx) {
    if (n < minimo) return h("span", { class: "tag leve" }, "poucos dados");
    if (pc < fx.fraco) return h("span", { class: "tag erro" }, "fraco");
    if (pc >= fx.forte) return h("span", { class: "tag ok" }, "forte");
    return h("span", { class: "tag alerta" }, "regular");
  }

  function treinarDireto(unidade, topico) {
    var ids = FP.sorteio.treino({ unidade: unidade, topico: topico || null, certoErrado: true, limite: 10 }, S.perfil());
    if (!ids.length) { FP.aviso("Nenhuma questão disponível para treino aqui."); return; }
    estudo = { modo: "treino", desc: [unidade, topico].filter(Boolean).join(" › "), fila: ids, idx: 0, resp: {}, inicio: new Date().toISOString() };
    ir("#/estudo");
  }

  UI.desempenho = function () {
    limpar("Pontos fortes e fracos");
    var p = S.perfil();
    var R = main();
    var fx = faixasDesempenho();
    var ag = agregarDesempenho(p);
    R.appendChild(titulo("Pontos fortes e fracos", "Seu aproveitamento por " + (D.temEixos ? "matéria, eixo" : "matéria") + " e tópico, somando simulados, treinos e caderno de erros."));

    if (!ag.total.v) {
      R.appendChild(cartao([
        h("h2", null, "Ainda não há respostas neste perfil"),
        h("p", null, "Faça um simulado ou alguns treinos. Conforme você responde, esta tela mostra o que você mais erra e o que já domina."),
        h("div", { class: "acoes" }, [
          botao("Mini-simulado de 20", function () { iniciarSimulado("mini", 20); }, "primario"),
          botao("Treinar", function () { ir("#/treino"); })
        ])
      ], "vazio-desempenho"));
      return;
    }

    var minimoSel = h("select", { id: "d-minimo", "aria-label": "Mínimo de respostas" }, [1, 3, 5, 10].map(function (n) {
      return h("option", { value: n }, "mín. " + n + (n === 1 ? " resposta" : " respostas"));
    }));
    var minimo = 3;
    try { minimo = +(sessionStorage.getItem("fazaprova:desempenho:minimo") || 3); } catch (e) { /* sem storage */ }
    minimoSel.value = String(minimo);
    var corpo = h("div");
    minimoSel.onchange = function () {
      try { sessionStorage.setItem("fazaprova:desempenho:minimo", minimoSel.value); } catch (e) { /* sem storage */ }
      desenhar();
    };

    var pcGeral = FP.pct(ag.total.a, ag.total.v);
    var usaveis = D.todas.filter(function (q) { return D.usavelTreino(q) && !D.anulada(q); }).length;
    R.appendChild(cartao([
      h("div", { class: "resumo-desempenho" }, [
        h("div", null, [h("strong", { class: "numero-grande" }, pcGeral + "%"), h("span", { class: "mudo pequeno" }, "acerto geral (" + ag.total.a + "/" + ag.total.v + " respostas)")]),
        h("div", null, [h("strong", { class: "numero-grande" }, String(ag.total.vistas)), h("span", { class: "mudo pequeno" }, "de " + usaveis + " questões já vistas")]),
        h("div", null, [h("strong", { class: "numero-grande" }, String(p.simulados.length)), h("span", { class: "mudo pequeno" }, "simulados · " + p.treinos.length + " treinos")])
      ]),
      h("p", { class: "mudo pequeno" }, "Fraco: abaixo de " + fx.fraco + "% (nota mínima do edital). Forte: " + fx.forte + "% ou mais (meta de nota). Entre os dois: regular."),
      h("div", { class: "linha-form" }, [h("span", { class: "pequeno" }, "Classificar só itens com pelo menos"), minimoSel])
    ]));
    R.appendChild(corpo);

    function desenhar() {
      corpo.innerHTML = "";
      var min = +minimoSel.value;

      // Por matéria / eixo, ordenado pelos pontos que o aproveitamento atual custaria na prova.
      var linhas = D.unidades.map(function (u) {
        var x = ag.porUnidade[u.nome] || { a: 0, v: 0, vistas: 0 };
        var b = D.bloco(u.bloco);
        var pc = x.v ? (100 * x.a) / x.v : null;
        var banco = D.todas.filter(function (q) { return D.unidade(q) === u.nome && D.usavelTreino(q) && !D.anulada(q); }).length;
        var perda = pc == null ? null : (1 - pc / 100) * u.questoes * (b ? b.ppq : 1);
        return { u: u, x: x, pc: pc, banco: banco, perda: perda };
      });
      linhas.sort(function (A, B) {
        var a = A.x.v >= min ? A.perda : -1, bb = B.x.v >= min ? B.perda : -1;
        return bb - a || B.u.questoes - A.u.questoes;
      });
      var tb = h("table", { class: "tabela tabela-desempenho" }, [h("thead", null, h("tr", null, [
        h("th", null, D.temEixos ? "Matéria / eixo" : "Matéria"), h("th", null, "Acertos"), h("th", null, "%"), h("th", { class: "col-barra" }, ""),
        h("th", null, "Situação"), h("th", { title: "Questões diferentes já vistas / disponíveis no banco" }, "Vistas"),
        h("th", { title: "Pontos que você perderia na prova com esse aproveitamento (questões da unidade × pontos por questão × % de erro)" }, "Perda estimada"), h("th", null, "")
      ]))]);
      var body = h("tbody");
      linhas.forEach(function (l) {
        var pcR = l.pc == null ? null : Math.round(l.pc);
        body.appendChild(h("tr", { "data-unidade": l.u.nome }, [
          h("td", null, [l.u.nome, h("span", { class: "mudo pequeno" }, " · " + l.u.questoes + " q. na prova")]),
          h("td", null, l.x.v ? l.x.a + "/" + l.x.v : "–"),
          h("td", null, pcR == null ? "–" : pcR + "%"),
          h("td", { class: "col-barra" }, pcR == null ? "" : FP.barra(pcR)),
          h("td", null, l.x.v ? situacao(l.pc, l.x.v, min, fx) : h("span", { class: "tag leve" }, "não visto")),
          h("td", null, l.x.vistas + "/" + l.banco),
          h("td", null, l.perda == null ? "–" : FP.fmtNum(l.perda, 1) + " pt"),
          h("td", null, botao("Treinar", function () { treinarDireto(l.u.nome); }, "btn-mini", { "data-acao": "treinar-unidade" }))
        ]));
      });
      tb.appendChild(body);
      corpo.appendChild(cartao([
        h("h2", null, "Por " + (D.temEixos ? "matéria e eixo" : "matéria")),
        h("p", { class: "mudo pequeno" }, "Ordenado por perda estimada: no topo está o que mais custa pontos na prova hoje, considerando peso e número de questões."),
        h("div", { class: "tabela-wrap" }, tb)
      ], "cartao-unidades"));

      // Tópicos
      var tops = Object.keys(ag.porTopico).map(function (k) {
        var t = ag.porTopico[k];
        t.pc = (100 * t.a) / t.v;
        return t;
      }).filter(function (t) { return t.v >= min; });
      var fracos = tops.filter(function (t) { return t.pc < fx.forte; })
        .sort(function (a, b) { return a.pc - b.pc || b.v - a.v; });
      var fortes = tops.filter(function (t) { return t.pc >= fx.forte; })
        .sort(function (a, b) { return b.pc - a.pc || b.v - a.v; });

      function listaTopicos(lista, id, vazio) {
        var limite = 10;
        var caixa = h("div", { id: id });
        function render() {
          caixa.innerHTML = "";
          if (!lista.length) { caixa.appendChild(h("p", { class: "mudo" }, vazio)); return; }
          var tb2 = h("table", { class: "tabela" }, [h("thead", null, h("tr", null, [h("th", null, "Tópico"), h("th", null, "Acertos"), h("th", null, "%"), h("th", { class: "col-barra" }, ""), h("th", null, "Situação"), h("th", null, "")]))]);
          var b2 = h("tbody");
          lista.slice(0, limite).forEach(function (t) {
            var pc = Math.round(t.pc);
            b2.appendChild(h("tr", { class: "linha-topico" }, [
              h("td", null, [h("span", { class: "mudo pequeno" }, t.unidade + " › "), t.topico]),
              h("td", null, t.a + "/" + t.v), h("td", null, pc + "%"), h("td", { class: "col-barra" }, FP.barra(pc)),
              h("td", null, situacao(t.pc, t.v, min, fx)),
              h("td", null, botao("Treinar", function () { treinarDireto(t.unidade, t.topico); }, "btn-mini", { "data-acao": "treinar-topico" }))
            ]));
          });
          tb2.appendChild(b2);
          caixa.appendChild(h("div", { class: "tabela-wrap" }, tb2));
          if (lista.length > limite) caixa.appendChild(botao("Mostrar todos (" + lista.length + ")", function () { limite = lista.length; render(); }, "btn-mini"));
        }
        render();
        return caixa;
      }

      corpo.appendChild(cartao([
        h("h2", null, "Tópicos para reforçar"),
        h("p", { class: "mudo pequeno" }, "Abaixo de " + fx.forte + "%, do pior para o melhor. O botão Treinar abre 10 questões do tópico, começando pelas que você nunca viu."),
        listaTopicos(fracos, "topicos-fracos", "Nenhum tópico abaixo de " + fx.forte + "% com pelo menos " + min + (min === 1 ? " resposta." : " respostas."))
      ], "cartao-fracos"));
      corpo.appendChild(cartao([
        h("h2", null, "Onde você está mandando bem"),
        h("p", { class: "mudo pequeno" }, fx.forte + "% ou mais de acerto."),
        listaTopicos(fortes, "topicos-fortes", "Ainda nenhum tópico com " + fx.forte + "% ou mais e pelo menos " + min + (min === 1 ? " resposta." : " respostas."))
      ], "cartao-fortes"));

      // O que ainda não foi visto
      var naoVistos = [];
      D.unidades.forEach(function (u) {
        var t = D.topicos(u.nome);
        Object.keys(t).sort().forEach(function (top) {
          if (!ag.porTopico[u.nome + "\u0001" + top]) {
            var n = D.todas.filter(function (q) { return D.unidade(q) === u.nome && q.topico === top && D.usavelTreino(q) && !D.anulada(q); }).length;
            if (n) naoVistos.push({ unidade: u.nome, topico: top, n: n });
          }
        });
      });
      if (naoVistos.length) {
        var lista = h("ul", { class: "lista-nao-vistos" });
        var porU = {};
        naoVistos.forEach(function (t) { (porU[t.unidade] = porU[t.unidade] || []).push(t); });
        Object.keys(porU).forEach(function (u) {
          lista.appendChild(h("li", null, [h("strong", null, u + ": ")].concat(porU[u].map(function (t, i) {
            return h("span", null, [i ? ", " : "", h("a", { href: "#/desempenho", onclick: function (ev) { ev.preventDefault(); treinarDireto(t.unidade, t.topico); } }, t.topico), h("span", { class: "mudo" }, " (" + t.n + ")")]);
          }))));
        });
        var det = h("details", { class: "nao-vistos" }, [h("summary", null, naoVistos.length + " tópicos que você ainda não treinou"), lista]);
        corpo.appendChild(cartao([h("h2", null, "Ainda sem respostas"), h("p", { class: "mudo pequeno" }, "Clique num tópico para treinar 10 questões dele."), det]));
      }
    }
    desenhar();
  };

  UI.historico = function () {
    limpar("Histórico");
    var p = S.perfil();
    var R = main();
    R.appendChild(titulo("Histórico e evolução", p.simulados.length + " simulados · " + p.treinos.length + " sessões de treino"));
    var sel = h("select", { id: "serie", "aria-label": "Série do gráfico" }, [h("option", { value: "__nota" }, "Nota final (0–10)")]);
    var gB = h("optgroup", { label: "Acerto por bloco (%)" }), gM = h("optgroup", { label: "Acerto por matéria (%)" }), gE = h("optgroup", { label: "Acerto por eixo (%)" });
    if (D.blocos.length > 1) D.blocos.forEach(function (b) { gB.appendChild(h("option", { value: "__bloco:" + b.id }, b.nome)); });
    D.materias.forEach(function (m) { gM.appendChild(h("option", { value: m }, m)); });
    D.unidades.filter(function (u) { return u.eixo; }).forEach(function (u) { gE.appendChild(h("option", { value: u.nome }, u.nome)); });
    [gB, gM, gE].forEach(function (g) { if (g.children.length) sel.appendChild(g); });
    var caixa = h("div");
    function desenhar() {
      caixa.innerHTML = "";
      var v = sel.value, pts = [];
      p.simulados.forEach(function (s) {
        var r = s.resultado, y = null;
        if (v === "__nota") y = r.nota;
        else if (v.indexOf("__bloco:") === 0) { var xb = FP.correcao.bloco(r, D.bloco(v.slice(8))); y = xb.total ? FP.pct(xb.acertos, xb.total) : null; }
        else {
          var x = r.porMateria[v] || r.porEixo[v];
          y = x ? (100 * x.acertos) / x.total : null;
        }
        if (y != null) pts.push({ y: y, rotulo: FP.dataISO(s.fim).slice(5).split("-").reverse().join("/"), detalhe: FP.correcao.nomeTipo(s) + " · " + FP.dataBR(s.fim) });
      });
      var nota = v === "__nota";
      caixa.appendChild(FP.grafico(pts, nota ? { ymin: 0, ymax: 10, ticks: [0, 2, 4, 6, 8, 10], faixa: D.config.meta_nota,
        referencias: [{ y: D.config.nota_minima, rotulo: "mínimo " + FP.fmtNum(D.config.nota_minima, 0) }], titulo: "Evolução da nota" }
        : { ymin: 0, ymax: 100, ticks: [0, 25, 50, 75, 100], fmt: function (y) { return Math.round(y) + "%"; },
          referencias: [{ y: 60, rotulo: "60%" }], titulo: "Evolução do acerto" }));
    }
    sel.onchange = desenhar;
    R.appendChild(cartao([h("div", { class: "linha-form" }, [h("h2", null, "Evolução"), sel]), caixa,
      h("p", { class: "mudo pequeno" }, "Faixa sombreada: meta de nota " + D.config.meta_nota.map(function (x) { return FP.fmtNum(x, 1); }).join(" a ") + ". Linha tracejada: referência.")]));
    desenhar();

    if (p.simulados.length) {
      var tb = h("table", { class: "tabela" }, [h("thead", null, h("tr", null, ["Nº", "Data", "Tipo", "Nota", "Acertos"].concat(D.historico ? ["Posição " + D.historico.ano] : []).concat([""]).map(function (t) { return h("th", null, t); })))]);
      var body = h("tbody");
      p.simulados.slice().reverse().forEach(function (s) {
        var r = s.resultado;
        body.appendChild(h("tr", null, [h("td", null, String(s.numero)), h("td", null, FP.dataBR(s.fim)), h("td", null, FP.correcao.nomeTipo(s)),
          h("td", null, h("strong", null, FP.fmtNum(r.nota))), h("td", null, r.acertos + "/" + r.total), D.historico ? h("td", null, r.posicao && r.posicao.posicao ? "≈ " + r.posicao.posicao + "º" : "–") : null,
          h("td", { class: "acoes-linha" }, [botao("Abrir", function () { ir("#/resultado/" + s.id); }, "btn-mini"),
            botao("Excluir", function () {
              if (!window.confirm("Excluir este simulado do histórico?")) return;
              p.simulados = p.simulados.filter(function (x) { return x.id !== s.id; }); S.salvar(); UI.historico();
            }, "btn-mini perigo")])]));
      });
      tb.appendChild(body);
      R.appendChild(cartao([h("h2", null, "Simulados"), h("div", { class: "tabela-wrap" }, tb)]));
    }
    if (p.treinos.length) {
      var tt = p.treinos.slice(-15).reverse();
      R.appendChild(cartao([h("h2", null, "Treinos recentes"), h("ul", null, tt.map(function (t) {
        return h("li", null, FP.dataBR(t.data) + " – " + (t.modo === "caderno" ? "Caderno" : "Treino") + (t.desc ? " (" + t.desc + ")" : "") + ": " + t.acertos + "/" + t.feitas);
      }))]));
    }
  };

  /* ------------------------------------------------------------------ */
  /* Banco                                                               */
  /* ------------------------------------------------------------------ */
  UI.banco = function () {
    limpar("Banco");
    var p = S.perfil();
    var R = main();
    var dup = D.duplicadas.length ? " · ⚠ ids repetidos ignorados: " + D.duplicadas.join(", ") : "";
    R.appendChild(titulo("Banco de questões", D.todas.length + " questões carregadas" + dup));
    var tb = h("table", { class: "tabela" }, [h("thead", null, h("tr", null, ["Matéria / eixo", "Por prova", "Total", "Usáveis em simulado", "C/E", "Vistas por você", "Seu acerto"].map(function (t) { return h("th", null, t); })))]);
    var body = h("tbody");
    D.unidades.forEach(function (u) {
      var qs = D.todas.filter(function (q) { return D.unidade(q) === u.nome; });
      var vistas = qs.filter(function (q) { return p.questoes[q.id]; });
      var a = 0, t = 0;
      vistas.forEach(function (q) { a += p.questoes[q.id].a; t += p.questoes[q.id].v; });
      body.appendChild(h("tr", null, [h("td", null, u.nome), h("td", null, String(u.questoes)), h("td", null, String(qs.length)),
        h("td", null, String(qs.filter(D.usavelSimulado).length)), h("td", null, String(qs.filter(function (q) { return q.formato === "certo_errado"; }).length)),
        h("td", null, String(vistas.length)), h("td", null, t ? FP.pct(a, t) + "%" : "–")]));
    });
    tb.appendChild(body);
    R.appendChild(cartao([h("div", { class: "tabela-wrap" }, tb)]));
    D.unidades.forEach(function (u) {
      var t = D.topicos(u.nome);
      var chaves = Object.keys(t).sort();
      R.appendChild(cartao([h("details", null, [h("summary", null, u.nome + " – " + chaves.length + " tópicos"),
        h("ul", { class: "lista-topicos" }, chaves.map(function (k) { return h("li", null, k + " (" + t[k] + ")"); }))])], "compacto"));
    });
    var susp = Object.keys(p.suspeitas).filter(function (k) { return D.porId[k]; });
    R.appendChild(cartao([h("h2", null, "Gabaritos suspeitos (" + susp.length + ")"),
      susp.length ? h("ul", null, susp.map(function (k) {
        var q = D.porId[k];
        return h("li", null, [k + " – " + q.origem.fonte + " – gabarito " + q.gabarito + " ",
          botao("Remover", function () { S.marcarSuspeita(k, false); S.salvar(); UI.banco(); }, "btn-mini")]);
      })) : h("p", { class: "mudo" }, "Nenhuma questão marcada como \"acho que o gabarito está errado\"."),
      susp.length ? botao("Baixar lista .md", function () {
        var L = ["# Gabaritos para conferir", ""].concat(susp.map(function (k) {
          var q = D.porId[k]; return "- `" + k + "` – " + q.origem.fonte + " – gabarito " + q.gabarito + " – " + q.ref_apostila.link;
        }));
        FP.baixar("Gabaritos para conferir.md", L.join("\n") + "\n", "text/markdown;charset=utf-8");
      }) : null]));
  };

  /* ------------------------------------------------------------------ */
  /* Dados: perfis, backup, pasta do vault                               */
  /* ------------------------------------------------------------------ */
  UI.dados = function () {
    limpar("Dados");
    var R = main();
    R.appendChild(titulo("Dados, perfis e backup", "O histórico fica só neste navegador" + (FP.HOMOLOG ? " (separado do site final, por ser homologação)" : "") + ". Exporte para guardar ou levar para outro aparelho."));
    R.appendChild(cartao([h("h2", null, "Perfis"),
      h("ul", null, S.perfis().map(function (n) {
        var pp = S.estado.perfis[n];
        return h("li", null, [h("strong", null, n), " · " + S.concursoDe(n) + " – " + pp.simulados.length + " simulados, " + Object.keys(pp.questoes).length + " questões vistas ",
          n === S.nomePerfil() ? h("span", { class: "tag" }, "atual") : botao("Usar", function () { S.trocarPerfil(n); UI.cabecalho(); UI.dados(); }, "btn-mini"),
          " ", botao("Excluir", function () {
            if (window.confirm("Excluir o perfil \"" + n + "\" e todo o histórico dele?")) { S.excluirPerfil(n); UI.cabecalho(); UI.dados(); }
          }, "btn-mini perigo")]);
      })),
      botao("Novo perfil", function () { ir("#/novo-perfil"); })]));
    var arq = h("input", { type: "file", accept: "application/json,.json", hidden: true, onchange: function (ev) {
      var f = ev.target.files[0];
      if (!f) return;
      var leitor = new FileReader();
      leitor.onload = function () {
        try { var n = S.importar(leitor.result); FP.aviso(n + " perfil(is) importado(s)."); UI.cabecalho(); UI.dados(); }
        catch (e) { FP.aviso("Arquivo inválido: " + e.message); }
      };
      leitor.readAsText(f);
    } });
    R.appendChild(cartao([h("h2", null, "Backup (JSON)"),
      h("p", null, "Importar mescla com o que já existe (não apaga nada)."),
      h("div", { class: "acoes" }, [
        botao("Exportar perfil atual", function () { FP.baixar("historico-" + S.nomePerfil().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w-]+/g, "_") + ".json", S.exportar(false), "application/json"); }, "primario"),
        botao("Exportar todos os perfis", function () { FP.baixar("historico-todos.json", S.exportar(true), "application/json"); }),
        botao("Importar JSON…", function () { arq.click(); }), arq
      ])]));
    var info = h("p", { class: "mudo" }, "Verificando…");
    var acoesPasta = h("div", { class: "acoes" });
    R.appendChild(cartao([h("h2", null, "Pasta do vault (Obsidian)"),
      h("p", null, "No Chrome ou Edge do computador, escolha uma vez a pasta (ex.: Concursos\\Simulador). A cada simulado o app grava ali o historico.json, o Painel.md e uma nota AAAA-MM-DD Simulado NN.md. No celular, use Exportar e o botão \"Baixar nota .md\" do resultado."),
      info, acoesPasta]));
    if (!FP.pasta.suportado()) {
      info.textContent = "Este navegador não permite gravar em pastas. Use Exportar e Baixar nota .md.";
    } else {
      FP.pasta.obter().then(function (hd) {
        info.textContent = hd ? "Pasta escolhida: " + hd.name : "Nenhuma pasta escolhida.";
        acoesPasta.appendChild(botao(hd ? "Trocar pasta" : "Escolher pasta", function () {
          FP.pasta.escolher().then(function () { FP.aviso("Pasta salva."); UI.dados(); }).catch(function () {});
        }, "primario"));
        if (hd) {
          acoesPasta.appendChild(botao("Gravar histórico e painel agora", function () {
            FP.pasta.gravarTudo(true, null).then(function (r) { FP.aviso(r.ok ? "Gravado em " + r.pasta + "." : "Não foi possível gravar: " + r.motivo); });
          }));
          acoesPasta.appendChild(botao("Esquecer pasta", function () { FP.pasta.esquecer().then(UI.dados); }, "perigo"));
        }
      });
    }
    if (!S.disponivel) R.appendChild(cartao([h("p", { class: "erro" }, "⚠ O navegador bloqueou o armazenamento local (modo privado?). Exporte antes de fechar a página.")]));
  };

  /* ------------------------------------------------------------------ */
  /* Escolha do concurso                                                  */
  /* ------------------------------------------------------------------ */
  UI.concursos = function () {
    limpar("Concursos");
    var R = main();
    R.appendChild(titulo("Escolha o concurso", "Cada concurso tem sua própria prova, banco de questões e histórico."));
    var grade = h("div", { class: "grade-concursos" });
    var cfgs = window.CONFIGS || {};
    // agrupa por instituição (ex.: Banestes, Bacen) para quando houver vários
    var porInst = {};
    Object.keys(cfgs).forEach(function (id) {
      var c = cfgs[id], inst = c.instituicao || "Outros";
      (porInst[inst] = porInst[inst] || []).push(c);
    });
    Object.keys(porInst).sort().forEach(function (inst) {
      grade.appendChild(h("h3", { class: "inst" }, inst));
      porInst[inst].forEach(function (c) {
        var n = (window.BANCO || []).filter(function (q) { return q && (!q.concursos || q.concursos.indexOf(c.id) >= 0) && q.status === "validada"; }).length;
        var total = 0;
        c.blocos.forEach(function (b) { (b.materias || []).forEach(function (m) { total += m.questoes; }); });
        (c.eixos || []).forEach(function (e) { total += e.questoes; });
        var ativo = D.config && D.config.id === c.id;
        grade.appendChild(cartao([
          h("h4", null, c.cargo || c.nome),
          h("p", { class: "mudo" }, [c.banca, " · edital ", c.edital, " · prova em ", new Date(c.data_prova + "T12:00:00").toLocaleDateString("pt-BR")]),
          h("p", null, total + " questões por prova · " + n + " questões no banco"),
          h("div", { class: "acoes" }, [botao(ativo ? "Continuar estudando" : "Estudar este concurso", function () {
            FP.trocarConcurso(c.id, true);
            ir("#/");
          }, "primario", { "data-acao": "concurso-" + c.id })])
        ], ativo ? "concurso ativo" : "concurso"));
      });
    });
    R.appendChild(grade);
    R.appendChild(h("p", { class: "mudo" }, "Novos concursos aparecem aqui quando forem adicionados ao app."));
  };

  /* ------------------------------------------------------------------ */
  /* Novo perfil: nome + concurso                                         */
  /* ------------------------------------------------------------------ */
  UI.novoPerfil = function () {
    limpar("Novo perfil");
    var R = main();
    var primeira = S.novo;
    R.appendChild(titulo(primeira ? "Bem-vindo! Crie seu perfil" : "Novo perfil",
      "Cada perfil estuda um concurso, com prova, banco de questões e histórico próprios. Para estudar outro concurso, crie outro perfil."));
    var cfgs = window.CONFIGS || {};
    var escolhido = Object.keys(cfgs)[0];
    var nomeIn = h("input", { type: "text", id: "np-nome", class: "campo", maxlength: "40", placeholder: "Ex.: Leão" });
    var lista = h("div", { class: "grade-concursos", role: "radiogroup", "aria-label": "Concurso" });
    function desenharLista() {
      lista.innerHTML = "";
      var porInst = {};
      Object.keys(cfgs).forEach(function (id) { var c = cfgs[id]; (porInst[c.instituicao || "Outros"] = porInst[c.instituicao || "Outros"] || []).push(c); });
      Object.keys(porInst).sort().forEach(function (inst) {
        lista.appendChild(h("h3", { class: "inst" }, inst));
        porInst[inst].forEach(function (c) {
          var n = (window.BANCO || []).filter(function (q) { return q && (!q.concursos || q.concursos.indexOf(c.id) >= 0) && q.status === "validada"; }).length;
          var total = 0;
          c.blocos.forEach(function (b) { (b.materias || []).forEach(function (m) { total += m.questoes; }); });
          (c.eixos || []).forEach(function (e) { total += e.questoes; });
          lista.appendChild(h("button", { type: "button", role: "radio", "aria-checked": escolhido === c.id ? "true" : "false",
            class: "cartao concurso" + (escolhido === c.id ? " ativo" : ""), "data-concurso": c.id,
            onclick: function () { escolhido = c.id; desenharLista(); } }, [
            h("strong", null, c.cargo || c.nome),
            h("span", { class: "mudo" }, c.banca + " · edital " + c.edital + " · prova em " + new Date(c.data_prova + "T12:00:00").toLocaleDateString("pt-BR")),
            h("span", null, total + " questões por prova · " + n + " no banco")
          ]));
        });
      });
    }
    desenharLista();
    var erro = h("p", { class: "erro", role: "alert" });
    R.appendChild(cartao([
      h("label", { for: "np-nome" }, h("strong", null, "Nome do perfil")), nomeIn,
      h("p", null, h("strong", null, "Concurso")), lista, erro,
      h("div", { class: "acoes" }, [
        botao("Criar perfil", function () {
          var nome = nomeIn.value.trim();
          if (!nome) { erro.textContent = "Digite um nome."; nomeIn.focus(); return; }
          if (S.estado.perfis[nome] && !(primeira && nome === S.nomePerfil())) { erro.textContent = "Já existe um perfil com esse nome."; return; }
          // primeira visita: o perfil "Padrão" vazio é substituído pelo novo
          var vazio = S.estado.perfis["Padrão"];
          var descartarPadrao = primeira && vazio && !vazio.simulados.length && !Object.keys(vazio.questoes).length && nome !== "Padrão";
          if (S.estado.perfis[nome]) { S.estado.perfis[nome].concurso = escolhido; S.trocarPerfil(nome); }
          else S.criarPerfil(nome, escolhido);
          if (descartarPadrao) delete S.estado.perfis["Padrão"];
          S.novo = false;
          S.salvar();
          FP.aviso("Perfil \"" + nome + "\" criado.");
          ir("#/");
        }, "primario", { "data-acao": "criar-perfil" }),
        primeira ? null : botao("Cancelar", function () { history.back(); })
      ])
    ]));
    nomeIn.focus();
  };

  /* ------------------------------------------------------------------ */
  UI.rota = function () {
    var hs = (location.hash || "#/").replace(/^#\/?/, "");
    var partes = hs.split("/");
    UI.cabecalho();
    [].forEach.call(document.querySelectorAll(".menu a"), function (a) {
      a.classList.toggle("ativo", a.getAttribute("href") === "#/" + partes[0]);
    });
    switch (partes[0]) {
      case "prova": return UI.prova();
      case "resultado": return UI.resultado(partes[1]);
      case "treino": return UI.treinoConfig();
      case "estudo": return UI.estudo();
      case "caderno": return UI.caderno();
      case "historico": return UI.historico();
      case "desempenho": return UI.desempenho();
      case "banco": return UI.banco();
      case "dados": return UI.dados();
      case "novo-perfil": return UI.novoPerfil();
      case "concursos": return UI.concursos();
      default: return UI.inicio();
    }
  };

  UI.iniciar = function (el) {
    raiz = el;
    window.addEventListener("hashchange", UI.rota);
    UI.aplicarTema();
    UI.rota();
  };
})();
