/* Testa o app com um segundo concurso FICTÍCIO (injetado só no teste, não vai para o site):
   3 blocos com pesos 1 / 1,5 / 2, eixos só no 3º, sem histórico, sem provas reais e sem apostila. */
const { chromium } = require('playwright');
const URL = 'file://' + process.cwd() + '/index.html';
const CFG = {
  id: 'ficticio-2027-tecnico', nome: 'Banco Fictício 2027 – Técnico de TI', nome_curto: 'Fictício 2027 · Técnico',
  instituicao: 'Banco Fictício', cargo: 'Técnico de TI', banca: 'Banca X', edital: '99/2027', data_prova: '2027-05-30',
  tempo_min: 150, minutos_por_questao_mini: 3, nota_minima: 5, meta_nota: [7, 8], alternativas: 5, tem_apostila: false,
  blocos: [
    { id: 'basicos', nome: 'Conhecimentos Básicos', peso: 1, pontos_por_questao: 1,
      materias: [{ nome: 'Português', questoes: 6, sigla: 'POR' }, { nome: 'Matemática', questoes: 4, sigla: 'MAT' }] },
    { id: 'bancarios', nome: 'Conhecimentos Bancários', peso: 1.5, pontos_por_questao: 1.5,
      materias: [{ nome: 'Bancários', questoes: 10, sigla: 'BAN' }] },
    { id: 'informatica', nome: 'Informática', peso: 2, pontos_por_questao: 2,
      materias: [{ nome: 'Informática', questoes: 10, sigla: 'INF' }],
      eixos: [{ nome: 'Hardware', sigla: 'HW', questoes: 3 }, { nome: 'Software', sigla: 'SW', questoes: 7 }] }
  ],
  provas_reais: [], caderno: { intervalos_dias: [2, 5], acertos_para_sair: 3 }
};
function questoes() {
  const out = [], L = 'ABCDE';
  const unid = [['basicos', 'Português', null], ['basicos', 'Matemática', null], ['bancarios', 'Bancários', null],
    ['informatica', 'Informática', 'Hardware'], ['informatica', 'Informática', 'Software']];
  unid.forEach(([b, m, e], k) => { for (let i = 1; i <= 25; i++) out.push({
    id: 'FIC-' + k + '-' + i, concursos: [CFG.id], banca_estilo: 'X', bloco: b, materia: m, eixo: e, topico: 'Tópico ' + (i % 3),
    ref_apostila: { modulo: '', secao: '', link: '' }, origem: { tipo: 'simulado', fonte: 'Fictícia', id_pai: null, anulada: false },
    formato: 'multipla_5', dificuldade: 2, texto_base: null, enunciado: 'Questão fictícia ' + m + (e ? '/' + e : '') + ' nº ' + i, imagem: null,
    alternativas: { A: 'a' + i, B: 'b' + i, C: 'c' + i, D: 'd' + i, E: 'e' + i }, gabarito: L[(i + k) % 5], comentario: 'ok', tags: [],
    embaralhavel: true, status: 'validada', validacao: null, versao: 1 }); });
  return out;
}
(async () => {
  const b = await chromium.launch(); let falhas = 0;
  const ok = (c, m) => { console.log((c ? 'OK   ' : 'FALHA') + ' ' + m); if (!c) falhas++; };
  const ctx = await b.newContext({ acceptDownloads: true }); const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('dialog', d => d.accept());
  await p.addInitScript(([cfg, qs]) => {
    window.CONFIGS = window.CONFIGS || {}; window.CONFIGS[cfg.id] = cfg;
    window.BANCO = window.BANCO || []; qs.forEach(q => window.BANCO.push(q));
  }, [CFG, questoes()]);
  await p.goto(URL); await p.waitForSelector('#np-nome');
  const insts = await p.$$eval('.grade-concursos .inst', xs => xs.map(x => x.textContent));
  ok(insts.includes('Banestes') && insts.includes('Banco Fictício'), 'tela de perfil lista os dois concursos por instituição: ' + insts.join(', '));
  ok((await p.textContent('[data-concurso="ficticio-2027-tecnico"]')).includes('30 questões por prova · 125 no banco'), 'cartão do fictício mostra 30 por prova e 125 no banco');
  await p.click('[data-concurso="ficticio-2027-tecnico"]');
  await p.fill('#np-nome', 'Teste Fictício'); await p.click('[data-acao="criar-perfil"]');
  await p.waitForSelector('[data-acao="simulado-completo"]');
  const home = await p.textContent('main');
  ok(home.includes('Banco Fictício 2027'), 'início mostra o concurso fictício');
  ok(home.includes('30 questões (10 Básicos + 10 Bancários + 10 Informática)') && home.includes('2 h 30 min'), 'início descreve a prova pela config');
  ok(!home.includes('Refazer prova real') && !home.includes('apostila'), 'sem provas reais nem apostila');
  ok(home.includes('2 e 5 dias') && home.includes('3 acertos'), 'caderno usa os intervalos da config');
  ok(home.includes('125 questões'), 'banco do início tem só as 125 do fictício (nenhuma do Banestes)');
  // simulado completo
  await p.click('[data-acao="simulado-completo"]'); await p.waitForSelector('[data-acao="entregar"]');
  const ids = await p.evaluate(() => FP.store.perfil().emAndamento.itens.map(i => i.id));
  const comp = await p.evaluate(ids => { const c = {}; ids.forEach(id => { const u = FP.dados.unidade(FP.dados.porId[id]); c[u] = (c[u] || 0) + 1; }); return c; }, ids);
  ok(ids.length === 30 && comp['Português'] === 6 && comp['Matemática'] === 4 && comp['Bancários'] === 10 && comp['Hardware'] === 3 && comp['Software'] === 7,
    'simulado com 30 questões na distribuição da config ' + JSON.stringify(comp));
  ok(ids.every(id => id.startsWith('FIC-')), 'só questões do fictício');
  // acerta Básicos inteiro e Software; erra o resto  → Básicos 10, Bancários 0, Informática 7 → (10 + 0 + 2×7)/4,5 = 5,33
  for (let i = 0; i < ids.length; i++) {
    const q = await p.evaluate(id => { const q = FP.dados.porId[id]; return { gab: q.gabarito, b: q.bloco, e: q.eixo }; }, ids[i]);
    const certo = q.b === 'basicos' || q.e === 'Software';
    const L = certo ? q.gab : 'ABCDE'.split('').find(x => x !== q.gab);
    await p.click(`.prova-area [data-letra="${L}"]`);
    if (i < ids.length - 1) await p.click('.prova-area [data-acao="proxima"]');
  }
  await p.click('[data-acao="entregar"]'); await p.waitForSelector('[data-teste="nota"]');
  const res = await p.evaluate(() => { const pf = FP.store.perfil(); const s = pf.simulados[pf.simulados.length - 1];
    return { nota: s.resultado.nota, pontos: s.resultado.pontos, tot: s.resultado.pontosTotal, md: FP.correcao.notaMd(s), painel: FP.correcao.painelMd(),
      tela: document.querySelector('main').innerText }; });
  ok(Math.abs(res.nota - 24 / 4.5) < 1e-9, 'nota ponderada (10 + 1,5×0 + 2×7)/4,5 = 5,33 → app ' + res.nota.toFixed(4));
  ok(res.tot === 45 && Math.abs(res.pontos - 24) < 1e-9, 'pontos: 24 de 45 (10×1 + 0×1,5 + 7×2; total 10×1 + 10×1,5 + 10×2): ' + res.pontos.toFixed(2));
  ok(res.tela.includes('Básicos (0–10)') && res.tela.includes('Bancários (0–10)') && res.tela.includes('Informática (0–10)'), 'resultado mostra os 3 blocos');
  ok(res.tela.includes('Nota = (Básicos + 1,5 × Bancários + 2 × Informática) ÷ 4,5'), 'fórmula gerada pela config');
  ok(!/2024|Gerais|Específicos/.test(res.tela), 'resultado sem textos do Banestes (2024, Gerais, Específicos)');
  ok(res.tela.includes('Por eixo') && res.tela.includes('Software'), 'tabela de eixos do bloco Informática');
  ok(!/banestes|2024|Gerais/i.test(res.md) && res.md.includes('banco-ficticio'), 'nota .md sem Banestes e com tag do fictício');
  ok(!/banestes|2024/i.test(res.painel) && res.painel.includes('| Básicos | Bancários | Informática |'), 'Painel.md com colunas dos blocos');
  // treino e histórico
  await p.goto(URL + '#/treino'); await p.waitForSelector('#f-unidade');
  const grupos = await p.$$eval('#f-unidade optgroup', gs => gs.map(g => g.label));
  ok(JSON.stringify(grupos) === JSON.stringify(['Conhecimentos Básicos', 'Conhecimentos Bancários', 'Informática (eixos)']), 'treino agrupa por bloco: ' + grupos.join(' | '));
  await p.goto(URL + '#/historico'); await p.waitForSelector('#serie');
  const hist = await p.textContent('main');
  ok(!hist.includes('Posição 2024') && hist.includes('Conhecimentos Bancários'), 'histórico sem coluna de 2024 e com séries por bloco');
  // volta ao Banestes: perfil novo do Banestes não mistura
  await p.goto(URL + '#/novo-perfil'); await p.waitForSelector('#np-nome');
  await p.click('[data-concurso="banestes-2027-analista-ti"]'); await p.fill('#np-nome', 'Teste Banestes'); await p.click('[data-acao="criar-perfil"]');
  await p.waitForSelector('[data-acao="simulado-completo"]');
  const hb = await p.textContent('main');
  ok(hb.includes('80 questões (30 Gerais + 50 Específicos)') && hb.includes('4 h') && hb.includes('Refazer prova real'), 'perfil Banestes volta a mostrar a prova do Banestes');
  const nB = await p.evaluate(() => ({ fic: FP.dados.todas.filter(q => q.id.startsWith('FIC-')).length, sims: FP.store.perfil().simulados.length }));
  ok(nB.fic === 0 && nB.sims === 0, 'banco e histórico do Banestes sem nada do fictício');
  await p.selectOption('#perfil', 'Teste Fictício'); await p.waitForTimeout(300);
  ok((await p.textContent('main')).includes('Banco Fictício 2027') && await p.evaluate(() => FP.store.perfil().simulados.length) === 1, 'trocar de perfil no topo volta ao fictício com o histórico dele');
  ok(errs.length === 0, 'sem erros de console ' + errs.join(' | '));
  await b.close(); console.log('FALHAS: ' + falhas); process.exit(falhas ? 1 : 0);
})();
