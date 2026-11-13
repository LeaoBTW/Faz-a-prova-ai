/* Testa perfil atrelado a concurso: primeira visita, criação e migração do histórico antigo. */
const { chromium } = require('playwright');
(async () => {
  const URL = 'file://' + process.cwd() + '/index.html';
  const b = await chromium.launch(); let falhas = 0;
  const ok = (c, m) => { console.log((c ? 'OK   ' : 'FALHA') + ' ' + m); if (!c) falhas++; };
  // 1) primeira visita
  let ctx = await b.newContext({ viewport: { width: 390, height: 800 } }); let p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto(URL); await p.waitForTimeout(500);
  ok(p.url().endsWith('#/novo-perfil'), 'primeira visita abre a criação de perfil');
  ok(await p.$('[data-concurso="banestes-2027-analista-ti"][aria-checked="true"]') !== null, 'Banestes listado e selecionado');
  await p.click('[data-acao="criar-perfil"]');
  ok((await p.textContent('.erro')).includes('nome'), 'exige nome');
  await p.fill('#np-nome', 'Leão'); await p.click('[data-acao="criar-perfil"]'); await p.waitForTimeout(300);
  const st = await p.evaluate(() => JSON.parse(localStorage.getItem(FP.CHAVE)));
  ok(st.perfilAtual === 'Leão' && st.perfis['Leão'].concurso === 'banestes-2027-analista-ti' && !st.perfis['Padrão'], 'perfil criado com o concurso e "Padrão" vazio descartado');
  ok((await p.textContent('#perfil')).includes('Leão · Banestes 2027'), 'seletor mostra nome · concurso');
  ok((await p.textContent('main')).includes('Banestes 2027'), 'início mostra o concurso');
  await p.reload(); await p.waitForTimeout(300);
  ok(!p.url().includes('novo-perfil'), 'segunda visita não pede perfil de novo');
  ok(errs.length === 0, 'sem erros de console ' + errs.join(' | '));
  await ctx.close();
  // 2) migração do formato antigo (perfil sem concurso)
  ctx = await b.newContext(); p = await ctx.newPage();
  await p.goto(URL); await p.evaluate(() => { localStorage.setItem(FP.CHAVE, JSON.stringify({ versao: 1, perfilAtual: 'Padrão', perfis: { 'Padrão': { simulados: [], treinos: [], questoes: { 'LP-0001': { v: 1, a: 1, e: 0 } }, caderno: {}, suspeitas: {}, contador: 0 } } })); });
  await p.goto(URL + '#/'); await p.reload(); await p.waitForTimeout(300);
  const m = await p.evaluate(() => ({ c: FP.store.perfil().concurso, q: Object.keys(FP.store.perfil().questoes).length, cfg: FP.dados.config.id, url: location.hash }));
  ok(m.c === 'banestes-2027-analista-ti' && m.q === 1 && m.cfg === m.c && m.url !== '#/novo-perfil', 'histórico antigo vira perfil do Banestes sem perder dados');
  await ctx.close(); await b.close();
  console.log('FALHAS: ' + falhas); process.exit(falhas ? 1 : 0);
})();
