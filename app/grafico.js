/* Gráfico de linha em SVG próprio, com dica ao passar o mouse/tocar. */
(function () {
  "use strict";
  var FP = window.FP;
  var NS = "http://www.w3.org/2000/svg";

  function s(tag, attrs, pai) {
    var el = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    if (pai) pai.appendChild(el);
    return el;
  }

  /* pontos: [{y, rotulo, detalhe}] em ordem de tempo.
     op: {ymin, ymax, ticks:[...], fmt(y), referencias:[{y, rotulo}], faixa:[a,b], titulo} */
  FP.grafico = function (pontos, op) {
    op = op || {};
    var W = 640, H = 240, m = { l: 40, r: 16, t: 16, b: 30 };
    var caixa = FP.h("div", { class: "grafico" });
    if (!pontos.length) {
      caixa.appendChild(FP.h("p", { class: "vazio" }, "Sem dados ainda."));
      return caixa;
    }
    var svg = s("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": op.titulo || "Gráfico de evolução" });
    caixa.appendChild(svg);
    var ymin = op.ymin != null ? op.ymin : 0, ymax = op.ymax != null ? op.ymax : 10;
    var n = pontos.length;
    function X(i) { return n === 1 ? (m.l + W - m.r) / 2 : m.l + (i * (W - m.l - m.r)) / (n - 1); }
    function Y(v) { return m.t + (1 - (v - ymin) / (ymax - ymin)) * (H - m.t - m.b); }
    var fmt = op.fmt || function (v) { return FP.fmtNum(v, 1); };
    if (op.faixa) {
      s("rect", { x: m.l, y: Y(op.faixa[1]), width: W - m.l - m.r, height: Y(op.faixa[0]) - Y(op.faixa[1]), class: "g-faixa" }, svg);
    }
    (op.ticks || [ymin, (ymin + ymax) / 2, ymax]).forEach(function (t) {
      s("line", { x1: m.l, x2: W - m.r, y1: Y(t), y2: Y(t), class: "g-grade" }, svg);
      var tx = s("text", { x: m.l - 6, y: Y(t) + 4, class: "g-eixo", "text-anchor": "end" }, svg);
      tx.textContent = fmt(t);
    });
    (op.referencias || []).forEach(function (rf) {
      s("line", { x1: m.l, x2: W - m.r, y1: Y(rf.y), y2: Y(rf.y), class: "g-ref" }, svg);
      var tx = s("text", { x: W - m.r - 4, y: Y(rf.y) - 5, class: "g-rotulo-ref", "text-anchor": "end" }, svg);
      tx.textContent = rf.rotulo;
    });
    // rótulos do eixo x (no máximo ~6)
    var passo = Math.max(1, Math.ceil(n / 6));
    pontos.forEach(function (p, i) {
      if (i % passo === 0 || i === n - 1) {
        var tx = s("text", { x: X(i), y: H - 8, class: "g-eixo", "text-anchor": "middle" }, svg);
        tx.textContent = p.rotulo;
      }
    });
    var d = pontos.map(function (p, i) { return (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(p.y).toFixed(1); }).join(" ");
    s("path", { d: d, class: "g-linha" }, svg);
    var dica = FP.h("div", { class: "g-dica", role: "status" });
    caixa.appendChild(dica);
    var cursor = s("line", { x1: 0, x2: 0, y1: m.t, y2: H - m.b, class: "g-cursor", visibility: "hidden" }, svg);
    var marcas = pontos.map(function (p, i) {
      return s("circle", { cx: X(i), cy: Y(p.y), r: 4.5, class: "g-ponto" }, svg);
    });
    var ultimo = marcas[n - 1];
    ultimo.setAttribute("r", 5.5);
    var lblUlt = s("text", { x: Math.min(X(n - 1), W - m.r - 2), y: Y(pontos[n - 1].y) - 10, class: "g-rotulo", "text-anchor": n > 1 ? "end" : "middle" }, svg);
    lblUlt.textContent = fmt(pontos[n - 1].y);
    var area = s("rect", { x: m.l, y: m.t, width: W - m.l - m.r, height: H - m.t - m.b, fill: "transparent" }, svg);
    function mostrar(ev) {
      var r = svg.getBoundingClientRect();
      var px = ((ev.clientX - r.left) / r.width) * W;
      var i = n === 1 ? 0 : Math.round(((px - m.l) / (W - m.l - m.r)) * (n - 1));
      i = Math.max(0, Math.min(n - 1, i));
      cursor.setAttribute("x1", X(i)); cursor.setAttribute("x2", X(i));
      cursor.setAttribute("visibility", "visible");
      marcas.forEach(function (c, k) { c.classList.toggle("ativo", k === i); });
      var p = pontos[i];
      dica.innerHTML = "<strong>" + FP.esc(fmt(p.y)) + "</strong> · " + FP.esc(p.detalhe || p.rotulo);
      dica.style.left = Math.min(Math.max((X(i) / W) * 100, 15), 85) + "%";
      dica.classList.add("visivel");
    }
    function esconder() {
      cursor.setAttribute("visibility", "hidden");
      marcas.forEach(function (c) { c.classList.remove("ativo"); });
      dica.classList.remove("visivel");
    }
    area.addEventListener("pointermove", mostrar);
    area.addEventListener("pointerdown", mostrar);
    area.addEventListener("pointerleave", esconder);
    return caixa;
  };

  /* Barra horizontal simples de percentual */
  FP.barra = function (pct) {
    var b = FP.h("span", { class: "barra", "aria-hidden": "true" });
    var f = FP.h("span", { class: "barra-cheia" + (pct >= 60 ? " boa" : pct >= 40 ? " media" : " fraca") });
    f.style.width = Math.max(0, Math.min(100, pct)) + "%";
    b.appendChild(f);
    return b;
  };
})();
