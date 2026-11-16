/* Testa a tela de pontos fortes e fracos (#/desempenho). */
const { chromium } = require('playwright');
(async () => {
  const URL = 'file://' + process.cwd() + '/index.html';
  const b = await chromium.launch(); let falhas = 0;
  const ok = (c, m) => { console.log((c ? 'OK   ' : 'FALHA') + ' ' + m); if (!c) falhas++; };
  const ctx = await b.newContext({ viewport: { width: 1200, height: 900 } }); const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('dialog', d => d.accept());
  await p.goto(URL); await p.waitForTimeout(300);
  await p.fill('#np-nome', 'Teste'); await p.click('[data-acao="criar-perfil"]'); await p.waitForTimeout(300);
  ok(await p.$('[data-acao="desempenho"]') !== null, 'início tem o cartão Pontos fortes e fracos');
  ok(await p.$('nav a[href="#/desempenho"]') !== null, 'menu tem o link Desempenho');
  await p.goto(URL + '#/desempenho'); await p.waitForTimeout(300);
  ok((await p.textContent('main')).includes('Ainda não há respostas'), 'perfil sem respostas mostra estado vazio');

  // Monta um histórico: tópico A (5 erros em 5), tópico B (5 acertos em 5), de unidades diferentes.
  const alvo = await p.evaluate(() => {
    const D = FP.dados, usar = q => D.usavelTreino(q) && !D.anulada(q);
    const grupos = {};
    D.todas.filter(usar).forEach(q => { const k = D.unidade(q) + '|' + q.topico; (grupos[k] = grupos[k] || []).push(q); });
    const ks = Object.keys(grupos).filter(k => grupos[k].length >= 5);
    const ruim = ks[0], bom = ks.find(k => k.split('|')[0] !== ruim.split('|')[0]);
    const p = FP.store.perfil();
    grupos[ruim].slice(0, 5).forEach(q => { p.questoes[q.id] = { v: 1, a: 0, e: 1 }; });
    grupos[bom].slice(0, 5).forEach(q => { p.questoes[q.id] = { v: 1, a: 1, e: 0 }; });
    FP.store.salvar();
    return { ruim: ruim.split('|'), bom: bom.split('|') };
  });
  await p.reload(); await p.waitForTimeout(300);
  const t = await p.textContent('main');
  ok(t.includes('50%') && t.includes('5/10'), 'resumo mostra acerto geral 50% (5/10)');
  const primeira = await p.getAttribute('.cartao-unidades tbody tr:first-child', 'data-unidade');
  ok(primeira === alvo.ruim[0], 'unidade com 0% aparece no topo por perda estimada (' + primeira + ')');
  ok((await p.textContent('#topicos-fracos')).includes(alvo.ruim[1]) && (await p.textContent('#topicos-fracos')).includes('fraco'), 'tópico ruim listado como fraco');
  ok((await p.textContent('#topicos-fortes')).includes(alvo.bom[1]) && (await p.textContent('#topicos-fortes')).includes('forte'), 'tópico bom listado como forte');
  ok(!(await p.textContent('#topicos-fortes')).includes(alvo.ruim[1]), 'tópico ruim não aparece nos fortes');
  // mínimo de respostas acima do que há: listas vazias
  await p.selectOption('#d-minimo', '10'); await p.waitForTimeout(100);
  ok((await p.textContent('#topicos-fracos')).includes('Nenhum tópico'), 'mínimo 10 esvazia os tópicos');
  ok((await p.textContent('.cartao-unidades')).includes('poucos dados'), 'unidades com menos respostas que o mínimo ficam como poucos dados');
  await p.selectOption('#d-minimo', '3'); await p.waitForTimeout(100);
  // Treinar o tópico fraco
  await p.click('#topicos-fracos [data-acao="treinar-topico"]'); await p.waitForTimeout(300);
  ok(p.url().endsWith('#/estudo'), 'Treinar abre o treino');
  const desc = await p.textContent('.barra-info strong');
  ok(desc.includes(alvo.ruim[1]), 'treino filtrado pelo tópico (' + desc + ')');
  const q = await p.textContent('.tags');
  ok(q.includes(alvo.ruim[1]), 'questão do treino é do tópico');
  await p.goto(URL + '#/desempenho'); await p.waitForTimeout(300);
  ok(await p.$('details.nao-vistos') !== null, 'lista de tópicos ainda não treinados');
  await p.screenshot({ path: process.env.SHOT || '/tmp/desempenho.png', fullPage: true });
  // celular sem rolagem horizontal da página
  await p.setViewportSize({ width: 390, height: 800 }); await p.waitForTimeout(200);
  const larg = await p.evaluate(() => document.documentElement.scrollWidth);
  ok(larg <= 390, 'sem rolagem horizontal no celular (' + larg + ')');
  ok(errs.length === 0, 'sem erros de console ' + errs.join(' | '));
  await b.close();
  console.log('FALHAS: ' + falhas); process.exit(falhas ? 1 : 0);
})();
