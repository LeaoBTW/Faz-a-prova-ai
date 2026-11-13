/* Teste de ponta a ponta do app (agente 5): 3 simulados completos, nota (G + 2E)/3 e nota .md,
 * treino em 3 eixos, caderno de erros, correções de banco/correcoes.js, rejeitadas fora e console limpo.
 * Uso: NODE_PATH=$(npm root -g) node tools/verificacao/teste_app_agente5.js  (Playwright + Chromium já instalados).
 * Usa um perfil novo do navegador; não grava nada no repositório. */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const URL = 'file://' + path.resolve(__dirname, '..', '..', 'index.html');
const REJ = ['ESP-WEB-0021','ESP-WEB-0057','RLE-0149','ESP-PROG-0081','ESP-NUVEM-0003'];
const out = []; const log = (...a) => { const s = a.join(' '); out.push(s); console.log(s); };
let falhas = 0; const ok = (c, msg) => { log((c ? 'OK   ' : 'FALHA') + ' ' + msg); if (!c) falhas++; };
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ acceptDownloads: true });
  const page = await ctx.newPage();
  const erros = [];
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') erros.push(m.type() + ': ' + m.text()); });
  page.on('pageerror', e => erros.push('pageerror: ' + e.message));
  page.on('dialog', d => d.accept());
  await page.goto(URL);
  // primeira visita: cria o perfil (perfil = pessoa + concurso)
  await page.waitForSelector('#np-nome');
  await page.fill('#np-nome', 'Teste');
  await page.click('[data-acao="criar-perfil"]');
  await page.waitForSelector('[data-acao="simulado-completo"]');

  // --- correções e rejeitadas ---
  const info = await page.evaluate((REJ) => {
    const D = FP.dados;
    const q4 = D.porId['ESP-PROG-0004'], lp1 = D.porId['LP-0001'], p6 = D.porId['ESP-PROG-0006'], s20 = D.porId['ESP-SEG-0020'];
    return { nCorr: (window.CORRECOES || []).length, aplicadas: (D.correcoesAplicadas || []).length, invalidas: (D.correcoesInvalidas || []).length,
      indent: q4.enunciado.includes('\n    while True:'), lp1: (lp1.comentario || '').startsWith('**Gabarito: B.**'),
      link: p6.ref_apostila.link.includes('|05 §25. C# e ASP'), owasp: s20.comentario.includes('OWASP Top 10:2021'),
      rejStatus: REJ.map(id => D.porId[id] && D.porId[id].status), rejUsavel: REJ.filter(id => D.usavelSimulado(D.porId[id]) || D.usavelTreino(D.porId[id])),
      total: D.todas.length, usaveis: D.todas.filter(D.usavelSimulado).length };
  }, REJ);
  log('Banco no app:', info.total, 'questões;', info.usaveis, 'usáveis em simulado');
  ok(info.nCorr > 0 && info.aplicadas === info.nCorr && info.invalidas === 0, `correcoes.js: ${info.aplicadas}/${info.nCorr} aplicadas, ${info.invalidas} inválidas`);
  ok(info.indent, 'ESP-PROG-0004 com indentação restaurada');
  ok(info.lp1, 'LP-0001 com comentário novo');
  ok(info.link, 'ESP-PROG-0006 com link 05 §25 corrigido (alias C#)');
  ok(info.owasp, 'ESP-SEG-0020 com nota OWASP 2021');
  ok(info.rejStatus.every(s => s === 'rejeitada') && info.rejUsavel.length === 0, 'rejeitadas fora de simulado e treino: ' + info.rejStatus.join(','));

  // --- comentário corrigido visível na tela (treino filtrado) ---
  // --- 3 simulados completos ---
  const taxas = [0.9, 0.6, 0.3];
  const vistos = new Set();
  for (let k = 0; k < 3; k++) {
    await page.goto(URL + '#/');
    await page.click('[data-acao="simulado-completo"]');
    await page.waitForSelector('[data-acao="entregar"]');
    const ids = await page.evaluate(() => FP.store.perfil().emAndamento.itens.map(i => i.id));
    ids.forEach(i => vistos.add(i));
    const comp = await page.evaluate(ids => { const c = {}; ids.forEach(id => { const q = FP.dados.porId[id]; const u = FP.dados.unidade(q); c[u] = (c[u] || 0) + 1; }); return c; }, ids);
    let brancos = 0;
    for (let i = 0; i < ids.length; i++) {
      const q = await page.evaluate(id => { const q = FP.dados.porId[id]; return { gab: q.gabarito, letras: FP.dados.letras(q) }; }, ids[i]);
      const r = ((i * 7919 + k * 31) % 100) / 100;
      let L;
      if (i % 37 === 5 && k === 1) { L = null; brancos++; }
      else if (r < taxas[k]) L = q.gab; else L = q.letras.find(x => x !== q.gab);
      if (L) await page.click(`.prova-area [data-letra="${L}"]`);
      if (i < ids.length - 1) await page.click('.prova-area [data-acao="proxima"]');
    }
    await page.click('[data-acao="entregar"]');
    await page.waitForSelector('[data-teste="nota"]');
    const res = await page.evaluate(() => {
      const p = FP.store.perfil(); const s = p.simulados[p.simulados.length - 1]; const r = s.resultado;
      // recalcula do zero
      let g = 0, gt = 0, e = 0, et = 0;
      s.itens.forEach(it => { const q = FP.dados.porId[it.id]; const a = it.resp != null && it.resp === q.gabarito; if (q.bloco === 'gerais') { gt++; if (a) g++; } else { et++; if (a) e++; } });
      const G = 10 * g / gt, E = 10 * e / et, nota = (G + 2 * E) / 3;
      return { n: s.itens.length, G, E, nota, rG: r.G, rE: r.E, rNota: r.nota, gt, et, g, e, brancos: r.brancos,
        tela: document.querySelector('[data-teste="nota"] strong').textContent, fmt: FP.fmtNum(nota), md: FP.correcao.notaMd(s), nome: FP.correcao.nomeArquivo(s),
        anul: s.itens.filter(it => FP.dados.anulada(FP.dados.porId[it.id])).length, rejeit: s.itens.filter(it => FP.dados.porId[it.id].status !== 'validada').length,
        dup: s.itens.length - new Set(s.itens.map(i => i.id)).size };
    });
    log(`Simulado ${k + 1}: ${res.n} questões (G ${res.gt}, E ${res.et}); composição ${JSON.stringify(comp)}`);
    ok(res.n === 80 && res.gt === 30 && res.et === 50, 'composição 30 Gerais + 50 Específicos');
    ok(res.rejeit === 0 && res.anul === 0 && res.dup === 0, 'sem rejeitadas, anuladas ou repetidas no simulado');
    ok(Math.abs(res.rNota - res.nota) < 1e-9 && Math.abs(res.rG - res.G) < 1e-9 && Math.abs(res.rE - res.E) < 1e-9,
      `nota = (G + 2E)/3 = (${res.G.toFixed(3)} + 2×${res.E.toFixed(3)})/3 = ${res.nota.toFixed(3)} (app ${res.rNota.toFixed(3)})`);
    ok(res.tela === res.fmt, `nota exibida na tela "${res.tela}" = "${res.fmt}"`);
    ok(res.md.includes('nota: ' + res.nota.toFixed(2)) && res.md.includes(res.fmt) && res.md.includes(`(${res.g}/${res.gt})`) && res.md.includes(`(${res.e}/${res.et})`),
      `nota .md (${res.nome}) traz nota ${res.nota.toFixed(2)}, Gerais ${res.g}/${res.gt} e Específicos ${res.e}/${res.et}`);
    if (k === 1) ok(res.brancos === brancos, `brancos contados: ${res.brancos}`);
    const [dl] = await Promise.all([page.waitForEvent('download'), page.click('text=Baixar nota .md')]);
    const p = await dl.path(); const conteudo = fs.readFileSync(p, 'utf8');
    ok(dl.suggestedFilename() === res.nome && conteudo === res.md, `download "${dl.suggestedFilename()}" idêntico à nota gerada`);
  }
  ok(REJ.every(id => !vistos.has(id)), 'nenhuma rejeitada nos 3 simulados');


  async function idAtual() {
    return await page.evaluate(() => { const m = document.querySelector('.barra-prova .progresso').textContent.match(/Questão (\d+) de/); return window.__fila[+m[1] - 1]; });
  }
  const patch = () => page.evaluate(() => {
    if (FP.__p) return; FP.__p = true;
    const t = FP.sorteio.treino; FP.sorteio.treino = function () { const r = t.apply(this, arguments); window.__fila = r; return r; };
    const e = FP.embaralhar; FP.embaralhar = function (a) { const r = e.apply(this, arguments); window.__fila = r; return r; };
  });
  // --- treino em 3 eixos ---
  for (const eixo of ['Banco de Dados', 'Segurança da Informação', 'Programação']) {
    await page.goto(URL + '#/treino');
    await page.waitForTimeout(100); await patch();
    await page.waitForTimeout(100); await patch();
    await page.waitForSelector('#f-unidade');
    await page.selectOption('#f-unidade', eixo);
    await page.selectOption('#f-limite', '10');
    await page.click('[data-acao="comecar-treino"]');
    await page.waitForSelector('.alts');
    let certas = 0, n = 0, unidOk = true, comOk = true;
    while (true) {
      const btns = await page.$$('.alts [data-letra]');
      const idx = n % 3 === 0 ? 1 : 0; // erra ~1/3 de propósito (escolhe 2ª alternativa) ou acerta
      const id = await idAtual();
      const info2 = await page.evaluate(id => { const q = FP.dados.porId[id]; return q ? { u: FP.dados.unidade(q), gab: q.gabarito, letras: FP.dados.letras(q), st: q.status } : null; }, id);
      if (!info2) { unidOk = false; break; }
      if (info2.u !== eixo || info2.st !== 'validada') unidOk = false;
      const L = idx === 1 ? info2.letras.find(x => x !== info2.gab) : info2.gab;
      await page.click(`.alts [data-letra="${L}"]`);
      await page.waitForSelector('.comentario');
      const temCom = await page.evaluate(() => document.querySelector('.comentario').innerText.length > 20);
      if (!temCom) comOk = false;
      n++; if (L === info2.gab) certas++;
      if (await page.$('[data-acao="proxima"]')) await page.click('[data-acao="proxima"]'); else { await page.click('[data-acao="concluir"]'); break; }
    }
    const resumo = await page.textContent('[data-teste="treino-resumo"]');
    ok(unidOk && n === 10 && resumo.startsWith(certas + ' de ' + n), `treino ${eixo}: ${n} questões do eixo, resumo "${resumo.trim()}"`);
    ok(comOk, `treino ${eixo}: comentário exibido após cada resposta`);
  }

  // --- comentário corrigido aparece na tela ---
  await page.evaluate(() => { });
  // --- caderno de erros ---
  await page.goto(URL + '#/caderno');
    await page.waitForTimeout(100); await patch();
  await page.waitForSelector('[data-acao="revisar-hoje"]');
  const cad = await page.evaluate(() => { const p = FP.store.perfil(); const ids = Object.keys(p.caderno); return { n: ids.length, venc: ids.filter(k => p.caderno[k].proxima <= FP.dataISO()).length, prox: ids.slice(0, 3).map(k => p.caderno[k].proxima) }; });
  log(`Caderno: ${cad.n} questões, ${cad.venc} vencidas hoje, próximas revisões ex.: ${cad.prox.join(', ')}`);
  ok(cad.n > 0, 'erros dos simulados e treinos foram para o caderno');
  const linhas = await page.$$eval('table.tabela tbody tr', t => t.length);
  ok(linhas === cad.n, `tabela do caderno lista ${linhas} questões`);
  await page.click('text=Revisar todas agora');
  await page.waitForSelector('.alts');
  let rev = 0;
  for (let i = 0; i < 5; i++) {
    const id = await idAtual();
    const gab = await page.evaluate(id => FP.dados.porId[id].gabarito, id);
    await page.click(`.alts [data-letra="${gab}"]`); rev++;
    if (await page.$('[data-acao="proxima"]')) await page.click('[data-acao="proxima"]'); else break;
  }
  await page.click('[data-acao="encerrar"]');
  const resumoCad = await page.textContent('[data-teste="treino-resumo"]');
  ok(resumoCad.startsWith(rev + ' de ' + rev), `revisão do caderno: "${resumoCad.trim()}"`);
  const seg = await page.evaluate(() => { const p = FP.store.perfil(); return Object.values(p.caderno).filter(c => (c.seguidos || 0) >= 1).length; });
  ok(seg >= Math.min(rev, 1), `acertos seguidos registrados no caderno (${seg})`);

  // --- comentário novo visível na tela: abre o treino de prova real LP e procura LP-0001 ---
  await page.goto(URL + '#/treino');
    await page.waitForTimeout(100); await patch();
  await page.waitForSelector('#f-unidade');
  await page.selectOption('#f-unidade', 'Língua Portuguesa');
  await page.selectOption('#f-origem', 'prova_real');
  await page.selectOption('#f-limite', '0');
  await page.click('[data-acao="comecar-treino"]');
  await page.waitForSelector('.alts');
  let achou = false;
  for (let i = 0; i < 60; i++) {
    const id = await idAtual();
    const gab = await page.evaluate(id => FP.dados.porId[id].gabarito || 'A', id);
    await page.click(`.alts [data-letra="${gab}"]`).catch(() => {});
    await page.waitForSelector('.comentario');
    if (id === 'LP-0001') { const t = await page.textContent('.comentario'); achou = t.includes('única frase sem duplo sentido'); break; }
    if (await page.$('[data-acao="proxima"]')) await page.click('[data-acao="proxima"]'); else break;
  }
  ok(achou, 'comentário escrito em correcoes.js aparece na tela (LP-0001)');

  ok(erros.length === 0, 'console sem erros/avisos' + (erros.length ? ': ' + erros.slice(0, 5).join(' | ') : ''));
  log('FALHAS:', falhas);
  
  await browser.close();
  process.exit(falhas ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
