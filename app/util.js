/* Utilidades gerais. Namespace global FP (Faz a prova). */
(function () {
  "use strict";
  var FP = (window.FP = window.FP || {});

  FP.HOMOLOG = /\/homolog(\/|$)/.test(window.location.pathname);
  FP.CHAVE = FP.HOMOLOG ? "fazaprova:homolog:v1" : "fazaprova:v1";
  FP.LETRAS = ["A", "B", "C", "D", "E"];

  FP.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* Cria elemento: FP.h("div", {class: "x", onclick: fn}, [filhos | texto]) */
  FP.h = function (tag, attrs, filhos) {
    var el = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k.indexOf("on") === 0 && typeof v === "function") el.addEventListener(k.slice(2), v);
      else if (k === "html") el.innerHTML = v;
      else if (k === "class") el.className = v;
      else if (v === true) el.setAttribute(k, "");
      else el.setAttribute(k, v);
    });
    [].concat(filhos == null ? [] : filhos).forEach(function (f) {
      if (f == null || f === false) return;
      el.appendChild(typeof f === "string" || typeof f === "number" ? document.createTextNode(String(f)) : f);
    });
    return el;
  };

  FP.embaralhar = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  FP.fmtTempo = function (seg) {
    seg = Math.max(0, Math.round(seg || 0));
    var h = Math.floor(seg / 3600), m = Math.floor((seg % 3600) / 60), s = seg % 60;
    var mm = (m < 10 ? "0" : "") + m, ss = (s < 10 ? "0" : "") + s;
    return h ? h + ":" + mm + ":" + ss : m + ":" + ss;
  };

  /* 240 → "4 h", 210 → "3 h 30 min", 90 → "1 h 30 min", 45 → "45 min" */
  FP.fmtDuracao = function (min) {
    var hh = Math.floor(min / 60), mm = min % 60;
    return (hh ? hh + " h" : "") + (hh && mm ? " " : "") + (mm ? mm + " min" : "");
  };

  FP.fmtNum = function (n, casas) {
    if (n == null || isNaN(n)) return "–";
    return Number(n).toFixed(casas == null ? 2 : casas).replace(".", ",");
  };

  FP.pct = function (a, b) { return b ? Math.round((100 * a) / b) : 0; };

  /* Datas locais em AAAA-MM-DD */
  FP.dataISO = function (d) {
    d = d ? new Date(d) : new Date();
    var m = d.getMonth() + 1, dia = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (dia < 10 ? "0" : "") + dia;
  };
  FP.somarDias = function (iso, dias) {
    var p = iso.split("-");
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + dias);
    return FP.dataISO(d);
  };
  FP.dataBR = function (d) {
    d = new Date(d);
    return d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  };

  FP.id = function () {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  };

  FP.baixar = function (nome, conteudo, tipo) {
    var blob = new Blob([conteudo], { type: tipo || "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = nome;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  };

  FP.copiar = function (texto) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(texto);
    var t = document.createElement("textarea");
    t.value = texto; document.body.appendChild(t); t.select();
    try { document.execCommand("copy"); } catch (e) { /* ignora */ }
    t.remove();
    return Promise.resolve();
  };

  /* Aviso breve no canto da tela */
  FP.aviso = function (msg) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("visivel");
    clearTimeout(FP._toast);
    FP._toast = setTimeout(function () { el.classList.remove("visivel"); }, 2600);
  };

  FP.contar = function (lista, fn) {
    var c = {};
    lista.forEach(function (x) { var k = fn(x); c[k] = (c[k] || 0) + 1; });
    return c;
  };
})();
