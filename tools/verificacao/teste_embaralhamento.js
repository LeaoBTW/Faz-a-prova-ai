const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({viewport:{width:390,height:800}});
  const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  const URL='file://' + process.cwd() + '/index.html';
  await p.goto(URL+'#/treino'); await p.waitForSelector('#f-unidade');
  await p.evaluate(()=>{ const t=FP.sorteio.treino; FP.sorteio.treino=function(){const r=t.apply(this,arguments); window.__fila=r; return r;}; });
  await p.selectOption('#f-unidade','Língua Portuguesa'); await p.selectOption('#f-limite','10');
  await p.click('[data-acao="comecar-treino"]');
  let ok=0, emb=0, bad=0;
  for (let n=0;n<10;n++){
    await p.waitForSelector('.alts');
    const gab = await p.evaluate(()=>{ const t=document.querySelector('.questao'); return null; });
    // acha o id pelo estado: clica a alternativa correta pela letra original
    const res = await p.evaluate(()=>{
      const bs=[...document.querySelectorAll('.alts [data-letra]')];
      return bs.map(b=>[b.dataset.letra,b.dataset.exib]);
    });
    const q = await p.evaluate(n=>{ const f=window.__fila[n]; return typeof f==='string'?f:f.id; }, n);
    const g = await p.evaluate(id=>FP.dados.porId[id]&&FP.dados.porId[id].gabarito, q);
    await p.click(`.alts [data-letra="${g}"]`);
    await p.waitForSelector('.comentario');
    const info = await p.evaluate(()=>({fb:document.querySelector('.feedback').innerText, gabTxt:document.querySelector('.comentario .gab strong').innerText, exibCorreta:document.querySelector('.alt.correta').dataset.exib, nota:!!document.querySelector('.nota-ordem')}));
    if (info.fb.includes('acertou') && (info.gabTxt===info.exibCorreta || info.gabTxt.charAt(0)===info.exibCorreta)) ok++; else bad++;
    if (res.some(([o,e])=>o!==e)) { emb++; if(!info.nota) bad++; }
    if (await p.$('[data-acao="proxima"]')) await p.click('[data-acao="proxima"]'); else break;
  }
  console.log({ok,emb,bad,errs});
  await b.close();
})();
