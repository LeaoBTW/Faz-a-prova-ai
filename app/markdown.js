/* Mini-renderizador de Markdown: negrito, itálico, código, blocos de código,
   tabelas, listas, citações e títulos. Todo HTML do texto é escapado
   (só <u>...</u> é preservado, usado em provas para sublinhado). */
(function () {
  "use strict";
  var FP = window.FP;
  var esc = FP.esc;

  function inline(t) {
    var codes = [];
    t = String(t == null ? "" : t).replace(/`([^`\n]+)`/g, function (_, c) {
      codes.push(c);
      return "\u0000" + (codes.length - 1) + "\u0000";
    });
    t = esc(t);
    t = t.replace(/&lt;u&gt;([\s\S]*?)&lt;\/u&gt;/g, "<u>$1</u>");
    t = t.replace(/\*\*\*([^*\n]+?)\*\*\*/g, "<strong><em>$1</em></strong>");
    t = t.replace(/\*\*([^\n]+?)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/(^|[^*\w\\])\*(?![\s*])([^*\n]+?)\*(?![\w*])/g, "$1<em>$2</em>");
    t = t.replace(/\[([^\]\n]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    t = t.replace(/\[\[([^\]\n]+)\]\]/g, '<span class="wiki">$1</span>');
    t = t.replace(/\u0000(\d+)\u0000/g, function (_, n) { return "<code>" + esc(codes[+n]) + "</code>"; });
    return t;
  }

  var RE_FENCE = /^\s*```/;
  var RE_LISTA = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/;
  var RE_TAB = /^\s*\|.*\|\s*$/;
  var RE_SEP = /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/;

  function celulas(l) {
    var s = l.trim();
    if (s.charAt(0) === "|") s = s.slice(1);
    if (s.charAt(s.length - 1) === "|") s = s.slice(0, -1);
    // divide por | fora de `código`
    var out = [], cur = "", emCod = false;
    for (var i = 0; i < s.length; i++) {
      var ch = s.charAt(i);
      if (ch === "`") emCod = !emCod;
      if (ch === "\\" && s.charAt(i + 1) === "|") { cur += "|"; i++; continue; }
      if (ch === "|" && !emCod) { out.push(cur.trim()); cur = ""; } else cur += ch;
    }
    out.push(cur.trim());
    return out;
  }

  function inicioBloco(l, prox) {
    return RE_FENCE.test(l) || /^\s*>/.test(l) || /^#{1,6}\s/.test(l) || RE_LISTA.test(l) ||
      (RE_TAB.test(l) && prox != null && RE_SEP.test(prox));
  }

  function md(src) {
    if (src == null || src === "") return "";
    var L = String(src).replace(/\r/g, "").split("\n");
    var out = [];
    var i = 0;
    while (i < L.length) {
      var l = L[i];
      if (RE_FENCE.test(l)) {
        var lang = l.trim().slice(3).trim();
        var buf = [];
        i++;
        while (i < L.length && !RE_FENCE.test(L[i])) { buf.push(L[i]); i++; }
        i++;
        out.push('<pre class="codigo"' + (lang ? ' data-lang="' + esc(lang) + '"' : "") + "><code>" + esc(buf.join("\n")) + "</code></pre>");
        continue;
      }
      if (!l.trim()) { i++; continue; }
      if (RE_TAB.test(l) && i + 1 < L.length && RE_SEP.test(L[i + 1])) {
        var cab = celulas(l);
        i += 2;
        var linhas = [];
        while (i < L.length && RE_TAB.test(L[i])) { linhas.push(celulas(L[i])); i++; }
        var h = '<div class="tabela-wrap"><table class="md-tabela"><thead><tr>' +
          cab.map(function (c) { return "<th>" + inline(c) + "</th>"; }).join("") + "</tr></thead><tbody>";
        linhas.forEach(function (r) {
          h += "<tr>" + r.map(function (c) { return "<td>" + inline(c) + "</td>"; }).join("") + "</tr>";
        });
        out.push(h + "</tbody></table></div>");
        continue;
      }
      var mh = l.match(/^(#{1,6})\s+(.*)$/);
      if (mh) { out.push('<p class="md-titulo">' + inline(mh[2]) + "</p>"); i++; continue; }
      if (/^\s*>/.test(l)) {
        var q = [];
        while (i < L.length && /^\s*>/.test(L[i])) { q.push(L[i].replace(/^\s*> ?/, "")); i++; }
        out.push("<blockquote>" + md(q.join("\n")) + "</blockquote>");
        continue;
      }
      var ml = l.match(RE_LISTA);
      if (ml) {
        var ordenada = /\d/.test(ml[2]);
        var itens = [];
        var inicio = ordenada ? parseInt(ml[2], 10) : 1;
        while (i < L.length) {
          var m2 = L[i].match(RE_LISTA);
          if (m2 && (/\d/.test(m2[2]) === ordenada)) { itens.push([m2[3]]); i++; continue; }
          if (L[i].trim() && /^\s{2,}/.test(L[i]) && itens.length && !RE_FENCE.test(L[i])) {
            itens[itens.length - 1].push(L[i].trim()); i++; continue;
          }
          break;
        }
        var tag = ordenada ? "ol" : "ul";
        out.push("<" + tag + (ordenada && inicio !== 1 ? ' start="' + inicio + '"' : "") + ">" +
          itens.map(function (it) { return "<li>" + it.map(inline).join("<br>") + "</li>"; }).join("") + "</" + tag + ">");
        continue;
      }
      var par = [];
      while (i < L.length && L[i].trim() && !(par.length && inicioBloco(L[i], L[i + 1]))) {
        par.push(L[i].replace(/\s+$/, ""));
        i++;
      }
      out.push("<p>" + par.map(inline).join("<br>") + "</p>");
    }
    return out.join("\n");
  }

  FP.md = md;
  FP.mdInline = inline;
})();
