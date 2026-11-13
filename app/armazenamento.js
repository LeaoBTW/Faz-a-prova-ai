/* Perfis, histórico (localStorage), exportar/importar JSON e gravação numa pasta
   do computador (File System Access API, quando o navegador suportar). */
(function () {
  "use strict";
  var FP = window.FP;

  /* Cada perfil é "pessoa + concurso": o campo concurso define banco, prova e histórico. */
  function concursoPadrao() { return Object.keys(window.CONFIGS || {})[0]; }
  function perfilVazio(concurso) {
    return { concurso: concurso || concursoPadrao(), criado: new Date().toISOString(), simulados: [], treinos: [], questoes: {}, caderno: {}, suspeitas: {},
      emAndamento: null, contador: 0 };
  }

  var S = (FP.store = { estado: null, disponivel: true });

  S.carregar = function () {
    var e = null;
    try {
      var txt = window.localStorage.getItem(FP.CHAVE);
      if (txt) e = JSON.parse(txt);
    } catch (err) {
      S.disponivel = false;
    }
    S.novo = !e || !e.perfis;
    if (!e || !e.perfis) e = { versao: 1, perfilAtual: "Padrão", perfis: {}, tema: null };
    if (!e.perfis[e.perfilAtual]) {
      var nomes = Object.keys(e.perfis);
      if (nomes.length) e.perfilAtual = nomes[0];
      else e.perfis[e.perfilAtual] = perfilVazio();
    }
    Object.keys(e.perfis).forEach(function (n) {
      var p = e.perfis[n], v = perfilVazio();
      Object.keys(v).forEach(function (k) { if (p[k] === undefined) p[k] = v[k]; });
      // perfil de um concurso que saiu do app: volta para o padrão em vez de quebrar
      if (!(window.CONFIGS || {})[p.concurso]) p.concurso = concursoPadrao();
    });
    S.estado = e;
    return e;
  };

  S.salvar = function () {
    try {
      window.localStorage.setItem(FP.CHAVE, JSON.stringify(S.estado));
      return true;
    } catch (err) {
      S.disponivel = false;
      FP.aviso("Não foi possível salvar no navegador. Exporte o histórico para não perder dados.");
      return false;
    }
  };

  S.perfil = function () { return S.estado.perfis[S.estado.perfilAtual]; };
  S.nomePerfil = function () { return S.estado.perfilAtual; };
  S.perfis = function () { return Object.keys(S.estado.perfis).sort(); };
  /* Ativa o concurso do perfil atual (recarrega o banco filtrado e a prova). */
  S.ativarConcurso = function () {
    FP.dados.duplicadas = [];
    FP.dados.init(S.perfil().concurso);
  };
  S.trocarPerfil = function (nome) {
    if (!S.estado.perfis[nome]) S.estado.perfis[nome] = perfilVazio();
    S.estado.perfilAtual = nome;
    S.salvar();
    S.ativarConcurso();
  };
  S.criarPerfil = function (nome, concurso) {
    if (S.estado.perfis[nome]) return false;
    S.estado.perfis[nome] = perfilVazio(concurso);
    S.trocarPerfil(nome);
    return true;
  };
  S.concursoDe = function (nome) {
    var c = (window.CONFIGS || {})[S.estado.perfis[nome].concurso];
    return c ? (c.nome_curto || c.nome) : "?";
  };
  S.excluirPerfil = function (nome) {
    delete S.estado.perfis[nome];
    if (!Object.keys(S.estado.perfis).length) S.estado.perfis["Padrão"] = perfilVazio();
    if (!S.estado.perfis[S.estado.perfilAtual]) S.estado.perfilAtual = Object.keys(S.estado.perfis)[0];
    S.salvar();
    S.ativarConcurso();
  };

  /* Registra uma resposta (qualquer modo): estatística por questão e caderno de erros. */
  S.registrarResposta = function (qid, acertou, resposta, revisaoCaderno) {
    var p = S.perfil();
    var st = p.questoes[qid] || (p.questoes[qid] = { v: 0, a: 0, e: 0 });
    st.v++;
    if (acertou) st.a++; else st.e++;
    st.u = new Date().toISOString();
    st.r = resposta || null;
    var cfg = FP.dados.config.caderno;
    var hoje = FP.dataISO();
    var c = p.caderno[qid];
    if (!acertou) {
      p.caderno[qid] = { desde: (c && c.desde) || hoje, etapa: 0, seguidos: 0, proxima: FP.somarDias(hoje, cfg.intervalos_dias[0]),
        erros: ((c && c.erros) || 0) + 1 };
    } else if (c && revisaoCaderno) {
      c.seguidos = (c.seguidos || 0) + 1;
      if (c.seguidos >= cfg.acertos_para_sair) {
        delete p.caderno[qid];
        return "saiu";
      }
      c.etapa = Math.min((c.etapa || 0) + 1, cfg.intervalos_dias.length - 1);
      c.proxima = FP.somarDias(hoje, cfg.intervalos_dias[c.etapa]);
    }
    return null;
  };

  S.marcarSuspeita = function (qid, ligado, contexto) {
    var p = S.perfil();
    if (ligado) p.suspeitas[qid] = { em: new Date().toISOString(), contexto: contexto || "" };
    else delete p.suspeitas[qid];
  };

  /* ---------- exportar / importar ---------- */
  S.exportar = function (todos) {
    var dados = { app: "faz-a-prova-ai", versao: 1, exportado_em: new Date().toISOString(), homologacao: FP.HOMOLOG };
    if (todos) dados.perfis = S.estado.perfis;
    else { dados.perfis = {}; dados.perfis[S.estado.perfilAtual] = S.perfil(); }
    return JSON.stringify(dados, null, 1);
  };

  function mesclarPerfil(dest, orig) {
    var ids = {};
    dest.simulados.forEach(function (s) { ids[s.id] = true; });
    (orig.simulados || []).forEach(function (s) { if (!ids[s.id]) dest.simulados.push(s); });
    dest.simulados.sort(function (a, b) { return (a.fim || "").localeCompare(b.fim || ""); });
    var tids = {};
    dest.treinos.forEach(function (t) { tids[t.id] = true; });
    (orig.treinos || []).forEach(function (t) { if (!tids[t.id]) dest.treinos.push(t); });
    Object.keys(orig.questoes || {}).forEach(function (k) {
      var a = dest.questoes[k], b = orig.questoes[k];
      if (!a || (b.v || 0) > (a.v || 0)) dest.questoes[k] = b;
    });
    Object.keys(orig.caderno || {}).forEach(function (k) {
      var a = dest.caderno[k], b = orig.caderno[k];
      if (!a || (b.proxima || "") > (a.proxima || "")) dest.caderno[k] = b;
    });
    Object.keys(orig.suspeitas || {}).forEach(function (k) { dest.suspeitas[k] = orig.suspeitas[k]; });
    dest.contador = Math.max(dest.contador || 0, orig.contador || 0, dest.simulados.length);
  }

  S.importar = function (texto) {
    var dados = JSON.parse(texto);
    var perfis = dados.perfis || (dados.simulados ? { "Importado": dados } : null);
    if (!perfis) throw new Error("Arquivo sem perfis.");
    var n = 0;
    Object.keys(perfis).forEach(function (nome) {
      if (!S.estado.perfis[nome]) S.estado.perfis[nome] = perfilVazio(perfis[nome].concurso);
      var dest = S.estado.perfis[nome];
      var v = perfilVazio(dest.concurso);
      Object.keys(v).forEach(function (k) { if (dest[k] === undefined) dest[k] = v[k]; });
      mesclarPerfil(dest, perfis[nome]);
      n++;
    });
    S.salvar();
    return n;
  };

  /* ---------- pasta do vault (File System Access API) ---------- */
  var P = (FP.pasta = {});
  P.suportado = function () { return typeof window.showDirectoryPicker === "function"; };

  function idb() {
    return new Promise(function (ok, erro) {
      var r = indexedDB.open("fazaprova-pasta", 1);
      r.onupgradeneeded = function () { r.result.createObjectStore("h"); };
      r.onsuccess = function () { ok(r.result); };
      r.onerror = function () { erro(r.error); };
    });
  }
  function chavePasta() { return (FP.HOMOLOG ? "homolog:" : "") + S.nomePerfil(); }

  P.obter = function () {
    if (!P.suportado() || !window.indexedDB) return Promise.resolve(null);
    return idb().then(function (db) {
      return new Promise(function (ok) {
        var r = db.transaction("h").objectStore("h").get(chavePasta());
        r.onsuccess = function () { ok(r.result || null); };
        r.onerror = function () { ok(null); };
      });
    }).catch(function () { return null; });
  };

  P.escolher = function () {
    return window.showDirectoryPicker({ mode: "readwrite", id: "fazaprova" }).then(function (h) {
      return idb().then(function (db) {
        return new Promise(function (ok) {
          var tx = db.transaction("h", "readwrite");
          tx.objectStore("h").put(h, chavePasta());
          tx.oncomplete = function () { ok(h); };
          tx.onerror = function () { ok(h); };
        });
      });
    });
  };

  P.esquecer = function () {
    return idb().then(function (db) {
      return new Promise(function (ok) {
        var tx = db.transaction("h", "readwrite");
        tx.objectStore("h").delete(chavePasta());
        tx.oncomplete = function () { ok(); };
      });
    }).catch(function () {});
  };

  /* pedir=true só dentro de um clique do usuário */
  P.permissao = function (h, pedir) {
    if (!h || !h.queryPermission) return Promise.resolve(false);
    return h.queryPermission({ mode: "readwrite" }).then(function (st) {
      if (st === "granted") return true;
      if (!pedir) return false;
      return h.requestPermission({ mode: "readwrite" }).then(function (s2) { return s2 === "granted"; });
    }).catch(function () { return false; });
  };

  P.gravar = function (h, nome, conteudo) {
    return h.getFileHandle(nome, { create: true }).then(function (fh) {
      return fh.createWritable().then(function (w) {
        return w.write(conteudo).then(function () { return w.close(); });
      });
    });
  };

  /* Grava historico.json, Painel.md e (opcional) a nota de um simulado. */
  P.gravarTudo = function (pedir, nota) {
    return P.obter().then(function (h) {
      if (!h) return { ok: false, motivo: "sem-pasta" };
      return P.permissao(h, pedir).then(function (perm) {
        if (!perm) return { ok: false, motivo: "sem-permissao" };
        var tarefas = [P.gravar(h, "historico.json", S.exportar(false)), P.gravar(h, "Painel.md", FP.correcao.painelMd())];
        if (nota) tarefas.push(P.gravar(h, nota.nome, nota.conteudo));
        return Promise.all(tarefas).then(function () { return { ok: true, pasta: h.name }; });
      });
    }).catch(function (e) { return { ok: false, motivo: String(e && e.message || e) }; });
  };
})();
