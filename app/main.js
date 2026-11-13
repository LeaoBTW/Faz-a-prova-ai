/* Ponto de entrada: carrega o banco, o estado salvo e a primeira tela. */
(function () {
  "use strict";
  var FP = window.FP;
  function iniciar() {
    if (FP.HOMOLOG) {
      document.documentElement.classList.add("homolog");
      var faixa = document.getElementById("faixa-homolog");
      if (faixa) faixa.hidden = false;
    }
    var topo = document.querySelector(".topo");
    function medir() { document.documentElement.style.setProperty("--topo-h", topo.offsetHeight + "px"); }
    medir();
    window.addEventListener("resize", medir);
    FP.store.carregar();
    FP.store.ativarConcurso();
    // primeira visita: cria o perfil escolhendo o concurso
    if (FP.store.novo && !/^#\/./.test(location.hash)) location.hash = "#/novo-perfil";
    FP.ui.iniciar(document.getElementById("app"));
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
