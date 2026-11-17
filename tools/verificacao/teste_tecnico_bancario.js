/* Testa o perfil Banestes 2026 – Técnico Bancário (questões reaproveitadas via banco/tecnico-bancario.js). */
const { chromium } = require('playwright');
const URL = 'file://' + process.cwd() + '/index.html';
(async () => {
  const b = await chromium.launch(); let falhas = 0;
  const ok = (c, m) => { console.log((c ? 'OK   ' : 'FALHA') + ' ' + m); if (!c) falhas++; };
  const p = await (await b.newContext()).newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('dialog', d => d.accept());
  await p.goto(URL); await p.waitForSelector('#np-nome');
  const cartoes = await p.$$eval('.grade-concursos [data-concurso]', xs => xs.map(x => x.dataset.concurso + ': ' + x.textContent));
  ok(cartoes.length === 2 && cartoes.some(t => t.startsWith('banestes-2026-tecnico-bancario') && t.includes('70 questões por prova')) && cartoes.some(t => t.startsWith('banestes-2027') && t.includes('80 questões por prova')),
    'criação de perfil mostra os dois concursos do Banestes: ' + cartoes.join(' || '));
  const insts = await p.$$eval('.grade-concursos .inst', xs => xs.map(x => x.textContent));
  ok(insts.length === 1 && insts[0] === 'Banestes', 'os dois agrupados em Banestes');
  // perfil de TI primeiro (para checar depois que as questões não foram alteradas)
  await p.click('[data-concurso="banestes-2027-analista-ti"]'); await p.fill('#np-nome', 'TI'); await p.click('[data-acao="criar-perfil"]');
  await p.waitForSelector('[data-acao="simulado-completo"]');
  const antes = await p.evaluate(() => ({ n: FP.dados.todas.length, u: FP.dados.unidade(FP.dados.porId['RLE-0001']) }));
  await p.goto(URL + '#/novo-perfil'); await p.waitForSelector('#np-nome');
  await p.click('[data-concurso="banestes-2026-tecnico-bancario"]'); await p.fill('#np-nome', 'Técnico'); await p.click('[data-acao="criar-perfil"]');
  await p.waitForSelector('[data-acao="simulado-completo"]');
  const home = await p.textContent('main');
  ok(home.includes('Técnico Bancário') && home.includes('70 questões (30 Gerais + 40 Específicos)'), 'início descreve a prova do Técnico Bancário');
  const info = await p.evaluate(() => {
    const c = {}; FP.dados.todas.forEach(q => { const u = FP.dados.unidade(q); c[u] = (c[u] || 0) + 1; });
    return { c, n: FP.dados.todas.length, unidades: FP.dados.unidades.map(u => u.nome), semEixo: FP.dados.todas.every(q => q.eixo === null || q.eixo === undefined),
      mf: FP.dados.porId['RLE-0001'] && FP.dados.unidade(FP.dados.porId['RLE-0001']) };
  });
  ok(info.n > 600, 'banco do Técnico tem ' + info.n + ' questões');
  ok(Object.keys(info.c).every(u => info.unidades.includes(u)), 'toda questão está numa matéria do edital: ' + JSON.stringify(info.c));
  ok(info.semEixo, 'nenhuma questão com eixo de TI');
  ok(!info.c['Vendas, Negociação e Atendimento'], 'Vendas, Negociação e Atendimento ainda sem questões');
  // simulado completo
  await p.click('[data-acao="simulado-completo"]'); await p.waitForSelector('[data-acao="entregar"]');
  const sim = await p.evaluate(() => { const ids = FP.store.perfil().emAndamento.itens.map(i => i.id); const c = {};
    ids.forEach(id => { const q = FP.dados.porId[id]; c[q.bloco] = (c[q.bloco] || 0) + 1; }); return { n: ids.length, c, unicos: new Set(ids).size }; });
  ok(sim.n === 70 && sim.c.gerais === 30 && sim.c.especificos === 40 && sim.unicos === 70, 'simulado com 70 questões (30 + 40), sem repetição: ' + JSON.stringify(sim.c));
  // perfil de TI continua igual
  await p.selectOption('#perfil', 'TI'); await p.waitForTimeout(300);
  const depois = await p.evaluate(() => ({ n: FP.dados.todas.length, u: FP.dados.unidade(FP.dados.porId['RLE-0001']) }));
  ok(depois.n === antes.n && depois.u === antes.u && depois.u === 'Raciocínio Lógico e Estatística', 'voltar ao perfil de TI mantém banco e matérias originais (' + depois.n + ')');
  await p.selectOption('#perfil', 'Técnico'); await p.waitForTimeout(300);
  ok(await p.evaluate(() => FP.dados.unidade(FP.dados.porId['RLE-0001'])) === info.mf, 'e o Técnico de novo reclassifica (' + info.mf + ')');
  await p.goto(URL + '#/treino'); await p.waitForSelector('#f-unidade');
  const ops = await p.$$eval('#f-unidade option', xs => xs.map(x => x.textContent));
  ok(ops.some(t => /Matemática Financeira/.test(t)) && ops.some(t => /Conhecimentos Bancários/.test(t)), 'treino lista as matérias do Técnico');
  ok(errs.length === 0, 'sem erros de console ' + errs.join(' | '));
  await b.close(); console.log('FALHAS: ' + falhas); process.exit(falhas ? 1 : 0);
})();
