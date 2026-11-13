/*
 * Variações (gerais) — gerado por tools/verificacao/agente2/gerar.py (agente 2).
 * Não edite à mão: altere lp.py, rle.py, atu.py ou eti.py e rode o gerador.
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "RLE-V001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Medidas e conversões (incluindo escala)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "10",
    "titulo": "Medidas e conversões (incluindo escala)",
    "link": "[[02 - Raciocínio Lógico e Matemático#10. Medidas e conversões (incluindo escala)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q26",
    "id_pai": "RLE-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Considere que 1 hectare corresponde a 10.000 m², 1 alqueire paulista a 24.000 m² e 1 alqueire do Norte a 27.000 m².\n\nUm terreno de 15 alqueires do Norte excede um terreno de 16 alqueires paulistas em",
  "imagem": null,
  "alternativas": {
    "A": "2,1 hectares.",
    "B": "4,5 hectares.",
    "C": "0,3 hectare.",
    "D": "2,4 hectares.",
    "E": "2,7 hectares."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Converte-se tudo para m² e depois para hectares.\n\n- **A (correta):** 15 × 27.000 = 405.000 m²; 16 × 24.000 = 384.000 m²; diferença = 21.000 m² = **2,1 ha**.\n- **B:** Multiplicou a diferença entre as unidades (3.000 m²) por 15, ignorando que há um alqueire paulista a mais.\n- **C:** É só a diferença entre as duas unidades (3.000 m²), não entre os terrenos.\n- **D:** Corresponde a um único alqueire paulista (24.000 m²).\n- **E:** Corresponde a um único alqueire do Norte (27.000 m²).",
  "tags": [
    "medidas",
    "área"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Medidas e conversões (incluindo escala)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "10",
    "titulo": "Medidas e conversões (incluindo escala)",
    "link": "[[02 - Raciocínio Lógico e Matemático#10. Medidas e conversões (incluindo escala)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q26",
    "id_pai": "RLE-0001",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Considere que 1 hectare corresponde a 10.000 m², 1 alqueire paulista a 24.000 m² e 1 alqueire do Norte a 27.000 m².\n\nA área de um sítio de 9 alqueires paulistas, expressa em alqueires do Norte e em hectares, é, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "8 e 216.",
    "B": "8 e 2,16.",
    "C": "10,125 e 2,16.",
    "D": "10,125 e 21,6.",
    "E": "8 e 21,6."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Dividiu por 1.000, e não por 10.000, para obter hectares.\n- **B:** Errou a conversão de m² para hectare (dividiu por 100.000).\n- **C:** Inverteu a razão e errou a conversão para hectares.\n- **D:** Inverteu a razão entre as unidades (9 × 27.000 ÷ 24.000).\n- **E (correta):** 9 × 24.000 = 216.000 m²; 216.000 ÷ 27.000 = **8** alqueires do Norte; 216.000 ÷ 10.000 = **21,6 ha**.",
  "tags": [
    "medidas",
    "área"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Equivalências e negações (De Morgan, condicional)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "2",
    "titulo": "Equivalências e negações (De Morgan, condicional)",
    "link": "[[02 - Raciocínio Lógico e Matemático#2. Equivalências e negações (De Morgan, condicional)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q27",
    "id_pai": "RLE-0002",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere a afirmação: \"Se o sistema não está em manutenção, então o aplicativo está disponível\".\n\nUma afirmação logicamente equivalente é:",
  "imagem": null,
  "alternativas": {
    "A": "Se o sistema está em manutenção, então o aplicativo não está disponível.",
    "B": "O sistema está em manutenção ou o aplicativo está disponível.",
    "C": "O sistema está em manutenção e o aplicativo está disponível.",
    "D": "O sistema não está em manutenção e o aplicativo está disponível.",
    "E": "Se o aplicativo está disponível, então o sistema não está em manutenção."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Tabelas-verdade conferidas em Python.\n\n- **A:** É a inversa (p → ~q), que não é equivalente.\n- **B (correta):** ~p → q equivale a p ∨ q (troca-se a condicional por \"não antecedente OU consequente\": ~(~p) ∨ q).\n- **C:** A conjunção é falsa em casos em que a condicional é verdadeira (ex.: p falsa e q verdadeira).\n- **D:** Ao contrário da condicional, a conjunção exige que as duas partes sejam verdadeiras.\n- **E:** É a recíproca (q → ~p), que não é equivalente.",
  "tags": [
    "lógica",
    "equivalência",
    "condicional"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Equivalências e negações (De Morgan, condicional)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "2",
    "titulo": "Equivalências e negações (De Morgan, condicional)",
    "link": "[[02 - Raciocínio Lógico e Matemático#2. Equivalências e negações (De Morgan, condicional)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q27",
    "id_pai": "RLE-0002",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere a afirmação: \"Se o cliente é correntista, então não paga tarifa de cadastro\".\n\nÉ logicamente equivalente a essa afirmação:",
  "imagem": null,
  "alternativas": {
    "A": "Se o cliente não paga tarifa de cadastro, então é correntista.",
    "B": "O cliente não é correntista e não paga tarifa de cadastro.",
    "C": "O cliente é correntista ou paga tarifa de cadastro.",
    "D": "Se o cliente paga tarifa de cadastro, então não é correntista.",
    "E": "Se o cliente não é correntista, então paga tarifa de cadastro."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Tabelas-verdade conferidas em Python. Também vale a forma \"o cliente não é correntista ou não paga tarifa\" (~p ∨ ~q).\n\n- **A:** É a recíproca; não equivale.\n- **B:** Com o cliente não correntista que paga tarifa (p falsa, q verdadeira), a condicional é verdadeira e essa conjunção é falsa.\n- **C:** p ∨ q equivale a ~p → q, não a p → ~q.\n- **D (correta):** p → ~q equivale à contrapositiva ~(~q) → ~p, isto é, q → ~p.\n- **E:** É a inversa (~p → q); não equivale.",
  "tags": [
    "lógica",
    "equivalência",
    "contrapositiva"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Equações e problemas aritméticos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "12",
    "titulo": "Equações e problemas aritméticos",
    "link": "[[02 - Raciocínio Lógico e Matemático#12. Equações e problemas aritméticos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q28",
    "id_pai": "RLE-0003",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma agência tem 72 clientes de alta renda, atendidos por 5 gerentes. Cada gerente deve atender, no mínimo, 10 e, no máximo, 18 desses clientes.\n\nÉ correto concluir que",
  "imagem": null,
  "alternativas": {
    "A": "um dos gerentes atende exatamente a 15 clientes.",
    "B": "é possível que 4 gerentes atendam ao número máximo de clientes.",
    "C": "pelo menos um gerente atende a mais de 14 clientes.",
    "D": "é possível que todos os gerentes atendam ao mesmo número de clientes.",
    "E": "não é possível que 2 gerentes atendam ao número mínimo de clientes."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Todas as distribuições possíveis foram enumeradas em Python.\n\n- **A:** Não é obrigatório: (10, 10, 16, 18, 18) soma 72 e não tem 15.\n- **B:** 4 × 18 = 72 deixaria o quinto gerente com 0 cliente, abaixo do mínimo de 10.\n- **C (correta):** Se todos atendessem no máximo 14, o total seria no máximo 5 × 14 = 70 < 72. Logo, algum gerente atende 15 ou mais.\n- **D:** 72 não é divisível por 5.\n- **E:** É possível: (10, 10, 16, 18, 18).",
  "tags": [
    "casa dos pombos",
    "raciocínio"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Relações arbitrárias e associação lógica",
  "ref_apostila": {
    "modulo": "02",
    "secao": "13",
    "titulo": "Relações arbitrárias e associação lógica",
    "link": "[[02 - Raciocínio Lógico e Matemático#13. Relações arbitrárias e associação lógica]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q29",
    "id_pai": "RLE-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Ana, Bruno e Carla trabalham em setores diferentes de um banco: um no câmbio, outro no crédito e outro em investimentos. Das afirmações a seguir, **somente uma** é verdadeira:\n\n- Ana não trabalha no câmbio.\n- Bruno trabalha no câmbio.\n- Carla não trabalha no crédito.\n\nÉ correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "Bruno trabalha em investimentos.",
    "B": "Bruno trabalha no crédito.",
    "C": "Carla trabalha no câmbio.",
    "D": "Ana trabalha no crédito.",
    "E": "Carla trabalha no crédito."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** As 6 permutações foram testadas em Python; só uma deixa exatamente uma afirmação verdadeira.\n\n- **A:** Investimentos é o setor de Carla.\n- **B (correta):** Se a 2ª fosse verdadeira (Bruno no câmbio), a 1ª também seria (Ana fora do câmbio): contradição. Se a 1ª fosse a única verdadeira, Bruno não estaria no câmbio, então Carla estaria no câmbio e a 3ª também seria verdadeira: contradição. Logo, a única verdadeira é a 3ª: Ana está no câmbio (1ª falsa), Carla não está no crédito, ficando com investimentos, e **Bruno está no crédito**.\n- **C:** O câmbio é de Ana.\n- **D:** Ana trabalha no câmbio, pois a 1ª afirmação é falsa.\n- **E:** A 3ª afirmação é a verdadeira, então Carla não está no crédito.",
  "tags": [
    "associação lógica",
    "verdades e mentiras"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Relações arbitrárias e associação lógica",
  "ref_apostila": {
    "modulo": "02",
    "secao": "13",
    "titulo": "Relações arbitrárias e associação lógica",
    "link": "[[02 - Raciocínio Lógico e Matemático#13. Relações arbitrárias e associação lógica]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q29",
    "id_pai": "RLE-0004",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Davi, Elisa e Fábio trabalham em áreas diferentes de um banco: um na auditoria, outro na ouvidoria e outro na tesouraria. Das afirmações a seguir, **exatamente duas** são verdadeiras:\n\n- Davi não trabalha na auditoria.\n- Elisa trabalha na ouvidoria.\n- Fábio trabalha na auditoria.\n\nÉ correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "Davi trabalha na auditoria.",
    "B": "Fábio trabalha na tesouraria.",
    "C": "Elisa trabalha na tesouraria.",
    "D": "Davi trabalha na tesouraria.",
    "E": "Elisa trabalha na ouvidoria."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Testadas em Python as 6 distribuições: só uma deixa exatamente duas afirmações verdadeiras.\n\n- **A:** A auditoria é de Fábio.\n- **B:** Fábio trabalha na auditoria.\n- **C (correta):** Se a 3ª fosse falsa, a 1ª e a 2ª seriam verdadeiras: Elisa na ouvidoria e Davi fora da auditoria, logo Davi na tesouraria e Fábio na auditoria – o que torna a 3ª verdadeira (contradição). Então a 3ª é verdadeira (Fábio na auditoria), o que torna a 1ª também verdadeira; a 2ª tem de ser falsa: Elisa não está na ouvidoria, logo está na **tesouraria**, e Davi na ouvidoria.\n- **D:** Davi trabalha na ouvidoria.\n- **E:** A 2ª afirmação é a falsa.",
  "tags": [
    "associação lógica",
    "verdades e mentiras"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Porcentagem e variações sucessivas",
  "ref_apostila": {
    "modulo": "02",
    "secao": "7",
    "titulo": "Porcentagem e variações sucessivas",
    "link": "[[02 - Raciocínio Lógico e Matemático#7. Porcentagem e variações sucessivas]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q30",
    "id_pai": "RLE-0005",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma agência, alguns empregados têm pós-graduação e outros não. Sabe-se que:\n\n- 60% dos empregados são mulheres;\n- entre os empregados sem pós-graduação, três quintos são mulheres;\n- um quarto dos homens tem pós-graduação.\n\nA porcentagem de empregados que são mulheres com pós-graduação é",
  "imagem": null,
  "alternativas": {
    "A": "10%.",
    "B": "25%.",
    "C": "20%.",
    "D": "15%.",
    "E": "45%."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Conta conferida com frações em Python.\n\n- **A:** É o número de homens com pós-graduação.\n- **B:** Somou homens e mulheres com pós (10 + 15).\n- **C:** Aplicou 1/4 (fração dos homens) sobre as 60 mulheres, hipótese que o enunciado não dá. \n- **D (correta):** Tome 100 empregados: 40 homens, dos quais 1/4 (10) têm pós e 30 não têm. Os 30 homens sem pós são 2/5 dos sem pós, que somam 75. Mulheres sem pós: 75 − 30 = 45. Mulheres com pós: 60 − 45 = **15**, isto é, 15%.\n- **E:** É a porcentagem de mulheres sem pós-graduação.",
  "tags": [
    "porcentagem",
    "tabela de dupla entrada"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Porcentagem e variações sucessivas",
  "ref_apostila": {
    "modulo": "02",
    "secao": "7",
    "titulo": "Porcentagem e variações sucessivas",
    "link": "[[02 - Raciocínio Lógico e Matemático#7. Porcentagem e variações sucessivas]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q30",
    "id_pai": "RLE-0005",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Os clientes de uma cooperativa são pessoas físicas (PF) ou jurídicas (PJ). Sabe-se que:\n\n- 70% dos clientes são PF;\n- entre os clientes que usam o aplicativo, quatro quintos são PF;\n- um terço dos clientes PJ usa o aplicativo.\n\nDo total de clientes, a porcentagem dos que são PF e **não** usam o aplicativo é",
  "imagem": null,
  "alternativas": {
    "A": "20%.",
    "B": "50%.",
    "C": "40%.",
    "D": "56%.",
    "E": "30%."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Conta conferida com frações em Python.\n\n- **A:** É a porcentagem de PJ que não usam o aplicativo.\n- **B:** É a porcentagem de clientes que usam o aplicativo.\n- **C:** É a porcentagem de PF que usam o aplicativo.\n- **D:** Aplicou 4/5 sobre os 70% de PF (0,8 × 70), confundindo as bases.\n- **E (correta):** Em 100 clientes: 30 PJ, dos quais 10 usam o app. Esses 10 são 1/5 dos usuários do app, que somam 50; PF que usam: 40. PF que não usam: 70 − 40 = **30**.",
  "tags": [
    "porcentagem",
    "tabela de dupla entrada"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Lógica proposicional e tabelas-verdade",
  "ref_apostila": {
    "modulo": "02",
    "secao": "1",
    "titulo": "Lógica proposicional e tabelas-verdade",
    "link": "[[02 - Raciocínio Lógico e Matemático#1. Lógica proposicional e tabelas-verdade]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q31",
    "id_pai": "RLE-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere verdadeiras as seguintes sentenças:\n\n- Se o contrato foi assinado, então o crédito foi liberado.\n- Se a garantia não foi registrada, então o crédito não foi liberado.\n- Se a garantia foi registrada, então o contrato não foi assinado.\n\nÉ correto deduzir que",
  "imagem": null,
  "alternativas": {
    "A": "o contrato não foi assinado.",
    "B": "o crédito foi liberado.",
    "C": "a garantia não foi registrada.",
    "D": "a garantia foi registrada.",
    "E": "o contrato foi assinado."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** As 8 valorações foram testadas em Python.\n\n- **A (correta):** Se o contrato tivesse sido assinado, o crédito teria sido liberado (1ª); pela contrapositiva da 2ª, a garantia teria sido registrada; pela 3ª, o contrato **não** teria sido assinado – contradição. Logo, o contrato não foi assinado.\n- **B:** Não se pode concluir: as premissas admitem o crédito liberado ou não.\n- **C:** Não é possível concluir: há valorações compatíveis com as duas hipóteses.\n- **D:** Com o contrato não assinado, a garantia pode ou não ter sido registrada.\n- **E:** Leva à contradição mostrada.",
  "tags": [
    "lógica",
    "dedução",
    "condicional"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Silogismos, argumentos e diagramas lógicos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "4",
    "titulo": "Silogismos, argumentos e diagramas lógicos",
    "link": "[[02 - Raciocínio Lógico e Matemático#4. Silogismos, argumentos e diagramas lógicos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q31",
    "id_pai": "RLE-0006",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Considere verdadeiras as seguintes sentenças:\n\n- Se Marcos é auditor, então Lia é analista.\n- Se Lia é analista, então Rui é gerente.\n- Rui não é gerente.\n\nÉ correto concluir que",
  "imagem": null,
  "alternativas": {
    "A": "Se Marcos não é auditor, então Rui é gerente.",
    "B": "Marcos não é auditor e Lia é analista.",
    "C": "Marcos não é auditor e Lia não é analista.",
    "D": "Marcos é auditor e Lia não é analista.",
    "E": "Lia é analista ou Rui é gerente."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Única valoração compatível conferida em Python.\n\n- **A:** Com Marcos não auditor e Rui não gerente, essa condicional é falsa.\n- **B:** Se Lia fosse analista, Rui seria gerente.\n- **C (correta):** Como Rui não é gerente, pelo modus tollens Lia não é analista; aplicando de novo, Marcos não é auditor.\n- **D:** Se Marcos fosse auditor, Lia seria analista.\n- **E:** As duas partes são falsas.",
  "tags": [
    "lógica",
    "modus tollens"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Equações e problemas aritméticos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "12",
    "titulo": "Equações e problemas aritméticos",
    "link": "[[02 - Raciocínio Lógico e Matemático#12. Equações e problemas aritméticos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q32",
    "id_pai": "RLE-0007",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma caixa tem 180 fichas numeradas, cada uma com um número inteiro positivo diferente. Há 64 fichas com números pares e as demais têm números ímpares. As fichas são separadas em 90 pares de fichas (duplas), e há exatamente 41 duplas em que as duas fichas têm números ímpares.\n\nO número de duplas formadas por duas fichas com números pares é",
  "imagem": null,
  "alternativas": {
    "A": "32.",
    "B": "49.",
    "C": "30.",
    "D": "15.",
    "E": "34."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Supôs que todas as 64 fichas pares estivessem em duplas par-par.\n- **B:** Fez 90 − 41, supondo que todas as outras duplas fossem par-par.\n- **C:** É o número de fichas pares que sobram, não de duplas.\n- **D (correta):** Ímpares: 180 − 64 = 116. As 41 duplas ímpar-ímpar usam 82 ímpares; sobram 34 ímpares, que estão em 34 duplas mistas. Pares nas mistas: 34; sobram 64 − 34 = 30 pares, formando **15** duplas par-par (41 + 34 + 15 = 90).\n- **E:** É o número de duplas mistas.",
  "tags": [
    "paridade",
    "raciocínio"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Equações e problemas aritméticos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "12",
    "titulo": "Equações e problemas aritméticos",
    "link": "[[02 - Raciocínio Lógico e Matemático#12. Equações e problemas aritméticos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q32",
    "id_pai": "RLE-0007",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um lote tem 200 cartões numerados com inteiros positivos distintos: 110 têm número par e os demais, número ímpar. Os cartões são agrupados em 100 duplas, e há exatamente 30 duplas formadas por dois cartões pares.\n\nO número de duplas formadas por dois cartões ímpares é",
  "imagem": null,
  "alternativas": {
    "A": "20.",
    "B": "40.",
    "C": "50.",
    "D": "70.",
    "E": "45."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** As 30 duplas par-par usam 60 pares; os outros 50 pares estão em 50 duplas mistas, que usam 50 ímpares. Sobram 90 − 50 = 40 ímpares, que formam **20** duplas ímpar-ímpar (30 + 50 + 20 = 100).\n- **B:** É o número de cartões ímpares restantes, não de duplas.\n- **C:** É o número de duplas mistas.\n- **D:** Fez 100 − 30, supondo que não houvesse duplas mistas.\n- **E:** Dividiu os 90 ímpares por 2, esquecendo as duplas mistas.",
  "tags": [
    "paridade",
    "raciocínio"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Análise combinatória (contagem)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "15",
    "titulo": "Análise combinatória (contagem)",
    "link": "[[02 - Raciocínio Lógico e Matemático#15. Análise combinatória (contagem)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q33",
    "id_pai": "RLE-0008",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere a lista dos 120 anagramas da palavra PRATO escritos em ordem alfabética.\n\nO anagrama PORTA ocupa a posição de número",
  "imagem": null,
  "alternativas": {
    "A": "82.",
    "B": "58.",
    "C": "59.",
    "D": "57.",
    "E": "52."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Lista gerada e ordenada em Python.\n\n- **A:** Contou também o bloco dos 24 anagramas iniciados por R, que vêm depois do P.\n- **B (correta):** Ordem das letras: A, O, P, R, T. Iniciados por A ou O: 24 + 24 = 48. Com P: PA… (6 anagramas, posições 49–54), POA… (2, posições 55–56), depois PORAT (57) e **PORTA (58)**.\n- **C:** Contou uma posição a mais.\n- **D:** É a posição de PORAT, imediatamente anterior.\n- **E:** Esqueceu o bloco dos 6 anagramas iniciados por PA.",
  "tags": [
    "anagramas",
    "contagem"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Análise combinatória (contagem)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "15",
    "titulo": "Análise combinatória (contagem)",
    "link": "[[02 - Raciocínio Lógico e Matemático#15. Análise combinatória (contagem)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q33",
    "id_pai": "RLE-0008",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere a lista dos 120 anagramas da palavra LIVRO escritos em ordem alfabética.\n\nO anagrama OLRIV ocupa a posição de número",
  "imagem": null,
  "alternativas": {
    "A": "63.",
    "B": "33.",
    "C": "58.",
    "D": "56.",
    "E": "57."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Lista gerada e ordenada em Python.\n\n- **A:** Somou mais um bloco de 6 indevidamente.\n- **B:** Esqueceu um dos blocos de 24 anagramas (os iniciados por L).\n- **C:** É a posição de OLRVI.\n- **D:** É a posição do último anagrama iniciado por OLI.\n- **E (correta):** Ordem das letras: I, L, O, R, V. Iniciados por I e L: 48. Com O: OI… (6), OL: OLI… (2), OLR: OLRIV é o 1º (48 + 6 + 2 + 1 = **57**).",
  "tags": [
    "anagramas",
    "contagem"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Análise combinatória (contagem)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "15",
    "titulo": "Análise combinatória (contagem)",
    "link": "[[02 - Raciocínio Lógico e Matemático#15. Análise combinatória (contagem)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q33",
    "id_pai": "RLE-0008",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere a lista dos 120 anagramas da palavra BANCO escritos em ordem alfabética.\n\nO anagrama que ocupa a 90ª posição é",
  "imagem": null,
  "alternativas": {
    "A": "NCOBA.",
    "B": "OABCN.",
    "C": "NBOCA.",
    "D": "NOABC.",
    "E": "NCOAB."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Lista gerada e ordenada em Python.\n\n- **A (correta):** Blocos de 24 pela 1ª letra: A (1–24), B (25–48), C (49–72), N (73–96). Dentro de N, blocos de 6 pela 2ª letra: NA (73–78), NB (79–84), NC (85–90). A 90ª é a última do bloco NC, isto é, NC seguido das letras restantes (A, B, O) em ordem decrescente: **NCOBA**.\n- **B:** É a 97ª posição, a primeira iniciada por O.\n- **C:** É a 84ª posição, a última do bloco NB.\n- **D:** É a 91ª posição, a primeira do bloco NO.\n- **E:** É a 89ª posição.",
  "tags": [
    "anagramas",
    "contagem"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "18",
    "titulo": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
    "link": "[[02 - Raciocínio Lógico e Matemático#18. Estatística descritiva (média, moda, mediana, variância e desvio padrão)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q34",
    "id_pai": "RLE-0009",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "A média aritmética e a mediana de 5 números reais são, respectivamente, 40 e 48.\n\nA diferença entre o maior e o menor desses números é, no mínimo, igual a",
  "imagem": null,
  "alternativas": {
    "A": "16.",
    "B": "20.",
    "C": "24.",
    "D": "8.",
    "E": "40."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Mínimo conferido por busca exaustiva em Python (grade de 0,5).\n\n- **A:** Calculou 2 × (48 − 40).\n- **B (correta):** Ordene a ≤ b ≤ 48 ≤ d ≤ e, com soma 200. Para reduzir e − a, tome d = e = 48 e a = b: 2a + 3 × 48 = 200 ⇒ a = 28. Amplitude = 48 − 28 = **20**. Qualquer outro arranjo aumenta a amplitude.\n- **C:** Calculou 3 × (48 − 40).\n- **D:** É a diferença entre mediana e média.\n- **E:** Tomou b = d = e = 48 e só a variável: a = 200 − 192 = 8, amplitude 40 (não é a mínima).",
  "tags": [
    "média",
    "mediana",
    "otimização"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "18",
    "titulo": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
    "link": "[[02 - Raciocínio Lógico e Matemático#18. Estatística descritiva (média, moda, mediana, variância e desvio padrão)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q34",
    "id_pai": "RLE-0009",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Cinco números reais têm média aritmética 30 e mediana 24.\n\nO menor valor possível para a diferença entre o maior e o menor desses números é",
  "imagem": null,
  "alternativas": {
    "A": "30.",
    "B": "6.",
    "C": "18.",
    "D": "12.",
    "E": "15."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** Exemplo (24, 24, 24, 39, 39) conferido em Python; a minimalidade segue o mesmo argumento da questão-pai.\n\n- **A:** Tomou a = b = d = 24 e concentrou tudo em e = 54, amplitude 30, que não é a mínima.\n- **B:** É a diferença entre a média e a mediana.\n- **C:** Calculou 3 × (30 − 24).\n- **D:** Calculou 2 × (30 − 24).\n- **E (correta):** Agora a mediana é menor que a média. Ordene a ≤ b ≤ 24 ≤ d ≤ e, soma 150. Para minimizar e − a, tome a = b = 24 e d = e: 72 + 2e = 150 ⇒ e = 39. Amplitude = 39 − 24 = **15** (ex.: 24, 24, 24, 39, 39).",
  "tags": [
    "média",
    "mediana",
    "otimização"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Probabilidade",
  "ref_apostila": {
    "modulo": "02",
    "secao": "16",
    "titulo": "Probabilidade",
    "link": "[[02 - Raciocínio Lógico e Matemático#16. Probabilidade]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q35",
    "id_pai": "RLE-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Dois dados cúbicos honestos, com faces numeradas de 1 a 6, são lançados simultaneamente.\n\nA probabilidade de que a diferença entre os dois números obtidos seja exatamente 2 é",
  "imagem": null,
  "alternativas": {
    "A": "5/18",
    "B": "2/15",
    "C": "2/9",
    "D": "1/9",
    "E": "1/6"
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** 36 resultados enumerados em Python.\n\n- **A:** É a probabilidade de os números serem consecutivos (diferença 1).\n- **B:** Usou 30 casos no denominador, excluindo indevidamente os resultados iguais.\n- **C (correta):** Pares com diferença 2: (1,3), (2,4), (3,5), (4,6) e os simétricos: 8 casos em 36. 8/36 = **2/9**.\n- **D:** Contou só 4 casos, esquecendo a ordem dos dados.\n- **E:** É a probabilidade de diferença 0 (números iguais).",
  "tags": [
    "probabilidade",
    "dados"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Probabilidade",
  "ref_apostila": {
    "modulo": "02",
    "secao": "16",
    "titulo": "Probabilidade",
    "link": "[[02 - Raciocínio Lógico e Matemático#16. Probabilidade]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q35",
    "id_pai": "RLE-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Dois dados cúbicos honestos, com faces numeradas de 1 a 6, são lançados simultaneamente.\n\nA probabilidade de que a soma dos números obtidos seja um número primo é",
  "imagem": null,
  "alternativas": {
    "A": "1/2",
    "B": "5/11",
    "C": "7/18",
    "D": "5/12",
    "E": "13/36"
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** 36 resultados enumerados em Python.\n\n- **A:** Supôs que metade das somas seria prima.\n- **B:** Contou as 5 somas primas entre as 11 somas possíveis (2 a 12), como se fossem equiprováveis.\n- **C:** Esqueceu os 2 casos de soma 3 (14/36).\n- **D (correta):** Somas primas: 2 (1 caso), 3 (2), 5 (4), 7 (6) e 11 (2): 15 casos em 36. 15/36 = **5/12**.\n- **E:** Esqueceu os 2 casos de soma 11.",
  "tags": [
    "probabilidade",
    "dados"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Probabilidade",
  "ref_apostila": {
    "modulo": "02",
    "secao": "16",
    "titulo": "Probabilidade",
    "link": "[[02 - Raciocínio Lógico e Matemático#16. Probabilidade]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2021 (FGV) – Q35",
    "id_pai": "RLE-0010",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Dois dados cúbicos honestos, com faces numeradas de 1 a 6, são lançados simultaneamente.\n\nA probabilidade de que o produto dos números obtidos seja par é",
  "imagem": null,
  "alternativas": {
    "A": "1/4",
    "B": "2/3",
    "C": "1/2",
    "D": "5/6",
    "E": "3/4"
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.** 36 resultados enumerados em Python.\n\n- **A:** É a probabilidade de o produto ser ímpar.\n- **B:** Erro de contagem (24/36).\n- **C:** Supôs a mesma chance de par e ímpar para o produto.\n- **D:** Erro de contagem (30/36).\n- **E (correta):** O produto só é ímpar se os dois forem ímpares: (1/2)·(1/2) = 1/4. Pelo complementar, P(par) = 1 − 1/4 = **3/4**.",
  "tags": [
    "probabilidade",
    "dados",
    "complementar"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Probabilidade",
  "ref_apostila": {
    "modulo": "02",
    "secao": "16",
    "titulo": "Probabilidade",
    "link": "[[02 - Raciocínio Lógico e Matemático#16. Probabilidade]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q20",
    "id_pai": "RLE-0015",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma gaveta tem 12 crachás: 4 azuis, 5 verdes e 3 brancos. Uma pessoa retira, ao acaso, um crachá; percebe que **não** é verde e, sem devolvê-lo, retira outro, que **é** verde.\n\nA probabilidade de ocorrer exatamente essa sequência de retiradas é de, aproximadamente,",
  "imagem": null,
  "alternativas": {
    "A": "15,15%.",
    "B": "24,31%.",
    "C": "26,52%.",
    "D": "41,67%.",
    "E": "45,45%."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Frações conferidas em Python: 35/132 = 0,26515…\n\n- **A:** Usou 4/12 em vez de 7/12 (considerou só os azuis como 'não verdes').\n- **B:** Usou reposição: (7/12)·(5/12) = 35/144.\n- **C (correta):** P(1º não verde) = 7/12; P(2º verde | 1º não verde) = 5/11. Produto: 35/132 ≈ **26,52%**.\n- **D:** É só a chance de tirar verde na primeira retirada (5/12).\n- **E:** É só a chance condicional da segunda retirada (5/11).",
  "tags": [
    "probabilidade",
    "sem reposição"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Probabilidade",
  "ref_apostila": {
    "modulo": "02",
    "secao": "16",
    "titulo": "Probabilidade",
    "link": "[[02 - Raciocínio Lógico e Matemático#16. Probabilidade]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q20",
    "id_pai": "RLE-0015",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma gaveta tem 12 crachás: 4 azuis, 5 verdes e 3 brancos. Retiram-se, ao acaso e sem reposição, dois crachás.\n\nA probabilidade de os dois serem verdes é",
  "imagem": null,
  "alternativas": {
    "A": "25/144",
    "B": "10/33",
    "C": "5/66",
    "D": "5/33",
    "E": "1/6"
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.** Frações conferidas em Python.\n\n- **A:** Calculou com reposição: (5/12)².\n- **B:** Multiplicou por 2 sem necessidade (a ordem já está considerada).\n- **C:** Dividiu C(5,2) = 10 por 132, misturando contagem ordenada e não ordenada.\n- **D (correta):** (5/12)·(4/11) = 20/132 = **5/33**. Equivalente: C(5,2)/C(12,2) = 10/66.\n- **E:** Erro de contagem (2/12).",
  "tags": [
    "probabilidade",
    "sem reposição"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Equações e problemas aritméticos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "12",
    "titulo": "Equações e problemas aritméticos",
    "link": "[[02 - Raciocínio Lógico e Matemático#12. Equações e problemas aritméticos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q21",
    "id_pai": "RLE-0016",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma van pode transportar exatamente 800 kg de carga. Há caixas de 60 kg e caixas de 25 kg disponíveis.\n\nO número mínimo de caixas para completar exatamente 800 kg é",
  "imagem": null,
  "alternativas": {
    "A": "18.",
    "B": "16.",
    "C": "32.",
    "D": "25.",
    "E": "13."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Todas as combinações testadas em Python.\n\n- **A (correta):** 60a + 25b = 800. Como 25b e 800 são múltiplos de 5 e 60a também, testa-se: a = 10 ⇒ 25b = 200 ⇒ b = 8 (18 caixas); a = 5 ⇒ b = 20 (25 caixas); a = 0 ⇒ b = 32. O mínimo é **18**.\n- **B:** Supôs a = 12 e b = 4 (720 + 100 = 820 kg), excedendo o limite.\n- **C:** Usou apenas caixas de 25 kg.\n- **D:** Corresponde a a = 5 e b = 20, que não é o mínimo.\n- **E:** Tentou usar só caixas de 60 kg (800/60 ≈ 13,3), o que não fecha exatamente 800 kg.",
  "tags": [
    "equações diofantinas",
    "raciocínio"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Equações e problemas aritméticos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "12",
    "titulo": "Equações e problemas aritméticos",
    "link": "[[02 - Raciocínio Lógico e Matemático#12. Equações e problemas aritméticos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q21",
    "id_pai": "RLE-0016",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um depósito precisa montar lotes de 610 kg usando sacos de 40 kg e de 15 kg, sem sobras.\n\nO menor número de sacos com que se monta um lote é",
  "imagem": null,
  "alternativas": {
    "A": "41.",
    "B": "19.",
    "C": "24.",
    "D": "16.",
    "E": "22."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Todas as combinações testadas em Python.\n\n- **A:** Usou só sacos de 15 kg (610/15 não é inteiro).\n- **B (correta):** 40a + 15b = 610 ⇒ 8a + 3b = 122. Maximizando a: a = 13 ⇒ 3b = 18 ⇒ b = 6, total **19** (a = 14 ou 15 não dão b inteiro).\n- **C:** Corresponde a a = 7 e b = 22.\n- **D:** Usou 610/40 ≈ 15,25 e arredondou, sem fechar o peso exato.\n- **E:** Corresponde a a = 10 e b = 14, que não é o mínimo.",
  "tags": [
    "equações diofantinas"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Medidas e conversões (incluindo escala)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "10",
    "titulo": "Medidas e conversões (incluindo escala)",
    "link": "[[02 - Raciocínio Lógico e Matemático#10. Medidas e conversões (incluindo escala)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q22",
    "id_pai": "RLE-0017",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Em um mapa na escala 1:25.000, duas agências estão a 18 cm uma da outra.\n\nA distância real entre elas é",
  "imagem": null,
  "alternativas": {
    "A": "1,39 km.",
    "B": "4,5 m.",
    "C": "450 m.",
    "D": "4,5 km.",
    "E": "45 km."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Dividiu 25.000 por 18 em vez de multiplicar.\n- **B:** Esqueceu a escala ao converter.\n- **C:** Dividiu por 1.000 em vez de 100 na conversão cm → m.\n- **D (correta):** 18 cm × 25.000 = 450.000 cm = 4.500 m = **4,5 km**.\n- **E:** Converteu cm para km dividindo por 10.000 em vez de 100.000.",
  "tags": [
    "escala",
    "medidas"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Velocidade média e problemas de movimento",
  "ref_apostila": {
    "modulo": "02",
    "secao": "11",
    "titulo": "Velocidade média e problemas de movimento",
    "link": "[[02 - Raciocínio Lógico e Matemático#11. Velocidade média e problemas de movimento]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q23",
    "id_pai": "RLE-0018",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um técnico saiu da sede de um banco e visitou três agências. A primeira fica a 120 km da sede; a segunda, a mais 40 km; e a terceira, a mais 140 km. Os tempos gastos nos trechos da ida foram, respectivamente, 1 h 30 min, 1 h e 2 h 30 min. Na volta, sem paradas, ele percorreu os 300 km em 4 horas.\n\nAs velocidades médias na ida e na volta foram, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "100 km/h e 75 km/h.",
    "B": "60 km/h e 75 km/h.",
    "C": "65,2 km/h e 75 km/h.",
    "D": "58,7 km/h e 75 km/h.",
    "E": "75 km/h e 60 km/h."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Velocidade média = distância total ÷ tempo total.\n\n- **A:** Dividiu a distância pelo número de trechos.\n- **B (correta):** Ida: 300 km em 1,5 + 1 + 2,5 = 5 h ⇒ **60 km/h**. Volta: 300 ÷ 4 = **75 km/h**.\n- **C:** Converteu 1 h 30 min em 1,3 h e 2 h 30 min em 2,3 h.\n- **D:** Fez a média simples das velocidades dos trechos (80, 40 e 56 km/h); a velocidade média é distância total ÷ tempo total.\n- **E:** Inverteu ida e volta.",
  "tags": [
    "velocidade média"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V028",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Velocidade média e problemas de movimento",
  "ref_apostila": {
    "modulo": "02",
    "secao": "11",
    "titulo": "Velocidade média e problemas de movimento",
    "link": "[[02 - Raciocínio Lógico e Matemático#11. Velocidade média e problemas de movimento]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q23",
    "id_pai": "RLE-0018",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um carro-forte vai de uma agência a outra a 60 km/h e volta pelo mesmo caminho a 90 km/h.\n\nA velocidade média no percurso completo (ida e volta) é",
  "imagem": null,
  "alternativas": {
    "A": "75 km/h.",
    "B": "150 km/h.",
    "C": "72 km/h.",
    "D": "36 km/h.",
    "E": "60 km/h."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Conferido em Python: 2·60·90/(60 + 90) = 72.\n\n- **A:** Fez a média aritmética (60 + 90)/2, que só vale para tempos iguais.\n- **B:** Somou as velocidades.\n- **C (correta):** Com distância d em cada sentido: tempo = d/60 + d/90 = 5d/180 = d/36. Velocidade média = 2d ÷ (d/36) = **72 km/h** (média harmônica).\n- **D:** Confundiu com o divisor d/36 do tempo total.\n- **E:** Considerou só a velocidade da ida, a mais lenta (que ocupa mais tempo, mas não todo o percurso).",
  "tags": [
    "velocidade média",
    "média harmônica"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V029",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Equações e problemas aritméticos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "12",
    "titulo": "Equações e problemas aritméticos",
    "link": "[[02 - Raciocínio Lógico e Matemático#12. Equações e problemas aritméticos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q24",
    "id_pai": "RLE-0019",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Perguntado sobre quantos contratos analisou na semana, um analista respondeu: \"o total de contratos que analisei é igual a três quartos desse total mais seis contratos\".\n\nO número de contratos analisados foi",
  "imagem": null,
  "alternativas": {
    "A": "12.",
    "B": "30.",
    "C": "8.",
    "D": "18.",
    "E": "24."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Fez 6 ÷ (1/2), confundindo 1 − 3/4 com 1/2.\n- **B:** Somou 24 + 6.\n- **C:** Dividiu 6 por 3/4, em vez de dividir por 1 − 3/4 = 1/4.\n- **D:** Calculou 3/4 de 24 (a parte, não o total).\n- **E (correta):** x = (3/4)x + 6 ⇒ x/4 = 6 ⇒ **x = 24**.",
  "tags": [
    "equação do 1º grau"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V030",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Equações e problemas aritméticos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "12",
    "titulo": "Equações e problemas aritméticos",
    "link": "[[02 - Raciocínio Lógico e Matemático#12. Equações e problemas aritméticos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q24",
    "id_pai": "RLE-0019",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um caixa atendeu certo número de clientes pela manhã. Dois terços deles fizeram depósitos, um sexto pagou boletos e os 2 restantes apenas consultaram saldo.\n\nO número de clientes atendidos pela manhã foi",
  "imagem": null,
  "alternativas": {
    "A": "12.",
    "B": "6.",
    "C": "24.",
    "D": "18.",
    "E": "8."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** Os 2 restantes correspondem a 1 − 2/3 − 1/6 = 1/6 do total. Logo x/6 = 2 ⇒ **x = 12**.\n- **B:** Supôs que os 2 clientes fossem 1/3 do total.\n- **C:** Supôs que os 2 clientes fossem 1/12 do total.\n- **D:** Supôs que os 2 clientes fossem 1/9 do total.\n- **E:** É o número de clientes que fizeram depósitos.",
  "tags": [
    "equação do 1º grau",
    "frações"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V031",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Porcentagem e variações sucessivas",
  "ref_apostila": {
    "modulo": "02",
    "secao": "7",
    "titulo": "Porcentagem e variações sucessivas",
    "link": "[[02 - Raciocínio Lógico e Matemático#7. Porcentagem e variações sucessivas]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q26",
    "id_pai": "RLE-0021",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Uma equipe de migração de dados concluiu 25% da carga total na primeira semana e, na segunda, 40% do que restava.\n\nA porcentagem da carga total que ainda falta migrar é",
  "imagem": null,
  "alternativas": {
    "A": "45%.",
    "B": "30%.",
    "C": "35%.",
    "D": "55%.",
    "E": "60%."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** Resta 75% após a 1ª semana; a 2ª migra 40% de 75% = 30%. Falta 75% − 30% = **45%** (0,75 × 0,60 = 0,45).\n- **B:** É o que foi migrado na segunda semana.\n- **C:** Somou 25% + 40% = 65% e fez 100% − 65%.\n- **D:** É o que já foi migrado (25% + 30%).\n- **E:** Aplicou 40% sobre 100% e não sobre o restante.",
  "tags": [
    "porcentagem",
    "variações sucessivas"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V032",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Porcentagem e variações sucessivas",
  "ref_apostila": {
    "modulo": "02",
    "secao": "7",
    "titulo": "Porcentagem e variações sucessivas",
    "link": "[[02 - Raciocínio Lógico e Matemático#7. Porcentagem e variações sucessivas]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q26",
    "id_pai": "RLE-0021",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um orçamento anual foi executado da seguinte forma: 20% no 1º trimestre; 25% do saldo no 2º trimestre; e metade do novo saldo no 3º trimestre.\n\nA porcentagem do orçamento disponível para o 4º trimestre é",
  "imagem": null,
  "alternativas": {
    "A": "5%.",
    "B": "30%.",
    "C": "40%.",
    "D": "60%.",
    "E": "27,5%."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** Somou 20% + 25% + 50% = 95%.\n- **B (correta):** Saldos: 80% → 80% × 0,75 = 60% → 60% × 0,5 = **30%**.\n- **C:** Calculou 80% × 0,5, esquecendo o 2º trimestre.\n- **D:** Parou no saldo após o 2º trimestre.\n- **E:** Aplicou os 25% sobre o orçamento total, e não sobre o saldo: sobrariam 55%, cuja metade é 27,5%.",
  "tags": [
    "porcentagem",
    "variações sucessivas"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V033",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Quantificadores e negação de \"todo/algum/nenhum\"",
  "ref_apostila": {
    "modulo": "02",
    "secao": "3",
    "titulo": "Quantificadores e negação de \"todo/algum/nenhum\"",
    "link": "[[02 - Raciocínio Lógico e Matemático#3. Quantificadores e negação de \"todo/algum/nenhum\"]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q27",
    "id_pai": "RLE-0022",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Em uma auditoria, o gerente afirmou: \"Nenhum analista da equipe tem acesso de administrador ao banco de produção\".\n\nA negação lógica dessa afirmação é:",
  "imagem": null,
  "alternativas": {
    "A": "Nenhum analista fora da equipe tem acesso de administrador ao banco de produção.",
    "B": "Algum analista da equipe não tem acesso de administrador ao banco de produção.",
    "C": "Todo analista da equipe não tem acesso de administrador ao banco de produção.",
    "D": "Todo analista da equipe tem acesso de administrador ao banco de produção.",
    "E": "Algum analista da equipe tem acesso de administrador ao banco de produção."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Muda o universo de discurso; não é negação.\n- **B:** É compatível com a afirmação original; não a nega.\n- **C:** Equivale à própria afirmação original.\n- **D:** É a contrária, não a negação: as duas podem ser falsas ao mesmo tempo.\n- **E (correta):** A negação de \"Nenhum A é B\" é \"Algum A é B\" (basta um caso para derrubar a afirmação universal negativa).",
  "tags": [
    "quantificadores",
    "negação"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Regra de negação de quantificadores (apostila 02 §3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V034",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Quantificadores e negação de \"todo/algum/nenhum\"",
  "ref_apostila": {
    "modulo": "02",
    "secao": "3",
    "titulo": "Quantificadores e negação de \"todo/algum/nenhum\"",
    "link": "[[02 - Raciocínio Lógico e Matemático#3. Quantificadores e negação de \"todo/algum/nenhum\"]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q27",
    "id_pai": "RLE-0022",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere a afirmação: \"Algum relatório de risco foi enviado sem a assinatura do diretor\".\n\nDo ponto de vista lógico, a negação dessa afirmação é:",
  "imagem": null,
  "alternativas": {
    "A": "Nenhum relatório de risco foi enviado com a assinatura do diretor.",
    "B": "Algum relatório de risco foi enviado com a assinatura do diretor.",
    "C": "Algum relatório de risco não foi enviado sem a assinatura do diretor.",
    "D": "Todo relatório de risco foi enviado com a assinatura do diretor.",
    "E": "Todo relatório de risco foi enviado sem a assinatura do diretor."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Equivale a \"todos sem assinatura\", o que torna a original verdadeira.\n- **B:** Pode ser verdadeira junto com a original (subcontrárias).\n- **C:** Continua sendo uma afirmação particular, compatível com a original.\n- **D (correta):** A negação de \"Algum A é B\" é \"Nenhum A é B\", isto é, \"Todo A é não B\": nenhum foi enviado sem assinatura = todos foram enviados com assinatura.\n- **E:** Reforça a afirmação original; não a nega.",
  "tags": [
    "quantificadores",
    "negação"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Regra de negação de quantificadores (apostila 02 §3)."
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V035",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Conjuntos e diagramas de Venn",
  "ref_apostila": {
    "modulo": "02",
    "secao": "5",
    "titulo": "Conjuntos e diagramas de Venn",
    "link": "[[02 - Raciocínio Lógico e Matemático#5. Conjuntos e diagramas de Venn]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q28",
    "id_pai": "RLE-0023",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um setor, 18 analistas trabalham com pelo menos um de dois bancos de dados: Oracle ou PostgreSQL. O número dos que trabalham com Oracle (incluídos os que usam os dois) é o dobro do número dos que trabalham **somente** com PostgreSQL, e o número dos que trabalham **somente** com Oracle é o dobro do número dos que trabalham com os dois.\n\nO número de analistas que trabalham com os dois bancos de dados é",
  "imagem": null,
  "alternativas": {
    "A": "8.",
    "B": "12.",
    "C": "4.",
    "D": "6.",
    "E": "3."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.** Solução única conferida por enumeração em Python.\n\n- **A:** É o número dos que usam somente Oracle.\n- **B:** É o total de usuários de Oracle (8 + 4).\n- **C (correta):** Sejam p = só PostgreSQL, o = só Oracle e x = ambos. o = 2x; o + x = 3x = 2p ⇒ p = 1,5x. Total: 1,5x + 2x + x = 4,5x = 18 ⇒ **x = 4** (p = 6, o = 8).\n- **D:** É o número dos que usam somente PostgreSQL.\n- **E:** Dividiu 18 por 6, como se as três regiões fossem x, 2x e 3x.",
  "tags": [
    "conjuntos",
    "diagrama de Venn"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V036",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Conjuntos e diagramas de Venn",
  "ref_apostila": {
    "modulo": "02",
    "secao": "5",
    "titulo": "Conjuntos e diagramas de Venn",
    "link": "[[02 - Raciocínio Lógico e Matemático#5. Conjuntos e diagramas de Venn]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q28",
    "id_pai": "RLE-0023",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma pesquisa com 60 clientes, 34 disseram usar Pix por aproximação, 25 disseram usar Pix Automático e 9 disseram não usar nenhuma das duas funcionalidades.\n\nO número de clientes que usam **apenas** uma das duas funcionalidades é",
  "imagem": null,
  "alternativas": {
    "A": "43.",
    "B": "59.",
    "C": "35.",
    "D": "8.",
    "E": "51."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.** Princípio da inclusão-exclusão, conferido em Python.\n\n- **A (correta):** Usam pelo menos uma: 60 − 9 = 51. Ambas: 34 + 25 − 51 = 8. Apenas uma: 51 − 8 = **43** (26 só aproximação + 17 só automático).\n- **B:** Somou 34 + 25, contando duas vezes quem usa as duas.\n- **C:** Subtraiu duas vezes a interseção do total de usuários (51 − 2 × 8).\n- **D:** É o número dos que usam as duas.\n- **E:** É o número dos que usam pelo menos uma.",
  "tags": [
    "conjuntos",
    "inclusão-exclusão"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V037",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Silogismos, argumentos e diagramas lógicos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "4",
    "titulo": "Silogismos, argumentos e diagramas lógicos",
    "link": "[[02 - Raciocínio Lógico e Matemático#4. Silogismos, argumentos e diagramas lógicos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q29",
    "id_pai": "RLE-0024",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Em um banco, sabe-se que todo gerente de contas é certificado em investimentos e que nenhum certificado em investimentos é estagiário.\n\nA partir dessas informações, pode-se afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "algum certificado em investimentos é estagiário.",
    "B": "nenhum gerente de contas é estagiário.",
    "C": "todo certificado em investimentos é gerente de contas.",
    "D": "todo estagiário é certificado em investimentos.",
    "E": "algum estagiário é gerente de contas."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** Contraria a 2ª premissa.\n- **B (correta):** O conjunto dos gerentes está contido no dos certificados, que é disjunto do dos estagiários; logo gerentes e estagiários são disjuntos.\n- **C:** É a recíproca da 1ª premissa, que não se pode concluir.\n- **D:** Contraria a 2ª premissa (seriam conjuntos disjuntos).\n- **E:** Contraria a conclusão válida (conjuntos disjuntos).",
  "tags": [
    "silogismo",
    "diagramas lógicos"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Diagrama de Venn (apostila 02 §4)."
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V038",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Silogismos, argumentos e diagramas lógicos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "4",
    "titulo": "Silogismos, argumentos e diagramas lógicos",
    "link": "[[02 - Raciocínio Lógico e Matemático#4. Silogismos, argumentos e diagramas lógicos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q29",
    "id_pai": "RLE-0024",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere verdadeiras as afirmações: \"Alguns auditores são contadores\" e \"Todo contador é registrado no conselho de classe\".\n\nÉ necessariamente verdadeiro que",
  "imagem": null,
  "alternativas": {
    "A": "algum contador não é auditor.",
    "B": "todo auditor é registrado no conselho de classe.",
    "C": "nenhum auditor deixa de ser contador.",
    "D": "algum auditor é registrado no conselho de classe.",
    "E": "todo registrado no conselho é contador."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Pode ser que todo contador seja auditor; não é necessário.\n- **B:** Os auditores que não são contadores podem não ser registrados.\n- **C:** Equivale a \"todo auditor é contador\", que não decorre de \"alguns\".\n- **D (correta):** Os auditores que são contadores pertencem ao conjunto dos registrados; logo existe pelo menos um auditor registrado.\n- **E:** É a recíproca da 2ª premissa; não decorre.",
  "tags": [
    "silogismo",
    "diagramas lógicos"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Diagrama de Venn (apostila 02 §4)."
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V039",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Razão, proporção, regra de três e divisão proporcional",
  "ref_apostila": {
    "modulo": "02",
    "secao": "9",
    "titulo": "Razão, proporção, regra de três e divisão proporcional",
    "link": "[[02 - Raciocínio Lógico e Matemático#9. Razão, proporção, regra de três e divisão proporcional]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q30",
    "id_pai": "RLE-0025",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um prêmio de R$ 5.400,00 será dividido entre três empregados em partes **inversamente** proporcionais ao número de faltas de cada um no ano: 2, 3 e 6 faltas.\n\nO empregado com 3 faltas receberá",
  "imagem": null,
  "alternativas": {
    "A": "R$ 2.945,45.",
    "B": "R$ 2.700,00.",
    "C": "R$ 1.800,00.",
    "D": "R$ 900,00.",
    "E": "R$ 1.472,73."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** Dividiu diretamente proporcional e calculou a parte de quem teve 6 faltas (5.400 × 6/11).\n- **B:** É a parte de quem teve 2 faltas.\n- **C (correta):** Inversamente a 2, 3 e 6 = diretamente a 1/2, 1/3 e 1/6, ou, multiplicando por 6, a 3, 2 e 1. Total de partes: 6; cada parte vale R$ 900. Quem teve 3 faltas recebe 2 partes: **R$ 1.800,00**.\n- **D:** É a parte de quem teve 6 faltas.\n- **E:** Dividiu diretamente proporcional a 2, 3 e 6 (5.400 × 3/11).",
  "tags": [
    "divisão proporcional",
    "inversamente proporcional"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V040",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Razão, proporção, regra de três e divisão proporcional",
  "ref_apostila": {
    "modulo": "02",
    "secao": "9",
    "titulo": "Razão, proporção, regra de três e divisão proporcional",
    "link": "[[02 - Raciocínio Lógico e Matemático#9. Razão, proporção, regra de três e divisão proporcional]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Banestes 2024 (ACCESS) – Q30",
    "id_pai": "RLE-0025",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Uma gratificação de R$ 7.000,00 será repartida entre três técnicos em partes diretamente proporcionais aos anos de serviço (30, 40 e 50 meses) e inversamente proporcionais ao número de erros registrados (2, 4 e 5 erros, respectivamente).\n\nO técnico com 30 meses de serviço receberá",
  "imagem": null,
  "alternativas": {
    "A": "R$ 3.684,21.",
    "B": "R$ 2.000,00.",
    "C": "R$ 2.333,33.",
    "D": "R$ 1.750,00.",
    "E": "R$ 3.000,00."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Usou só a proporção inversa aos erros (7.000 × (1/2)/(1/2 + 1/4 + 1/5)).\n- **B:** É a parte de cada um dos outros dois técnicos.\n- **C:** Dividiu em partes iguais.\n- **D:** Usou só a proporção direta aos meses (7.000 × 30/120).\n- **E (correta):** Pesos: 30/2 = 15; 40/4 = 10; 50/5 = 10. Soma 35; cada unidade vale 7.000/35 = 200. O primeiro recebe 15 × 200 = **R$ 3.000,00**.",
  "tags": [
    "divisão proporcional",
    "proporção composta"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V041",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q1",
    "id_pai": "RLE-0061",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um capital de R$ 8.000,00 foi aplicado a juros simples de 1,25% ao mês durante 1 ano e meio.\n\nOs juros obtidos foram de",
  "imagem": null,
  "alternativas": {
    "A": "R$ 9.800,00.",
    "B": "R$ 1.800,00.",
    "C": "R$ 1.200,00.",
    "D": "R$ 150,00.",
    "E": "R$ 2.004,62."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** É o montante (capital + juros), não os juros.\n- **B (correta):** J = C·i·t = 8.000 × 0,0125 × 18 = **R$ 1.800,00** (1 ano e meio = 18 meses).\n- **C:** Considerou apenas 12 meses.\n- **D:** Usou o prazo em anos (1,5) com a taxa mensal.\n- **E:** Usou juros compostos: 8.000 × (1,0125¹⁸ − 1).",
  "tags": [
    "juros simples"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V042",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q1",
    "id_pai": "RLE-0061",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um capital de R$ 12.000,00, aplicado a juros simples durante 8 meses, produziu montante de R$ 14.160,00.\n\nA taxa mensal da aplicação foi de",
  "imagem": null,
  "alternativas": {
    "A": "2,09% ao mês.",
    "B": "1,91% ao mês.",
    "C": "18,00% ao mês.",
    "D": "2,25% ao mês.",
    "E": "1,50% ao mês."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Calculou a taxa composta equivalente: (14.160/12.000)^(1/8) − 1.\n- **B:** Dividiu os juros pelo montante, e não pelo capital.\n- **C:** É a taxa do período inteiro (18%), não a mensal.\n- **D (correta):** J = 14.160 − 12.000 = 2.160 = 12.000 × i × 8 ⇒ i = 2.160/96.000 = **2,25% a.m.**\n- **E:** Dividiu a taxa do período por 12, como se o prazo fosse de um ano.",
  "tags": [
    "juros simples",
    "taxa"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V043",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q1",
    "id_pai": "RLE-0061",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um empréstimo de R$ 18.000,00 foi contratado a juros simples de 3% ao mês, por 50 dias. Considere o mês comercial de 30 dias.\n\nOs juros devidos ao final do prazo são",
  "imagem": null,
  "alternativas": {
    "A": "R$ 900,00.",
    "B": "R$ 887,67.",
    "C": "R$ 540,00.",
    "D": "R$ 1.080,00.",
    "E": "R$ 908,97."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** Taxa diária = 3%/30 = 0,1% a.d. J = 18.000 × 0,001 × 50 = **R$ 900,00**.\n- **B:** Usou juros exatos (ano civil de 365 dias), contrariando o enunciado.\n- **C:** Considerou apenas 1 mês.\n- **D:** Arredondou o prazo para 2 meses.\n- **E:** Usou juros compostos com prazo fracionário (1,03^(50/30)).",
  "tags": [
    "juros simples",
    "prazo em dias"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V044",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q2",
    "id_pai": "RLE-0062",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um capital de R$ 15.000,00 é aplicado a juros compostos de 2% ao mês por 4 meses. Considere 1,02⁴ = 1,082432.\n\nO montante ao final do prazo é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 16.561,21.",
    "B": "R$ 1.236,48.",
    "C": "R$ 16.200,00.",
    "D": "R$ 15.300,00.",
    "E": "R$ 16.236,48."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Capitalizou 5 períodos.\n- **B:** São só os juros, não o montante.\n- **C:** Usou juros simples: 15.000 × 1,08.\n- **D:** Aplicou a taxa uma única vez.\n- **E (correta):** M = 15.000 × 1,082432 = **R$ 16.236,48**.",
  "tags": [
    "juros compostos",
    "montante"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V045",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q2",
    "id_pai": "RLE-0062",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Quanto deve ser aplicado hoje, a juros compostos de 10% ao ano, para resgatar R$ 26.620,00 daqui a 3 anos?",
  "imagem": null,
  "alternativas": {
    "A": "R$ 18.634,00.",
    "B": "R$ 19.405,98.",
    "C": "R$ 20.000,00.",
    "D": "R$ 22.000,00.",
    "E": "R$ 20.476,92."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** Fez 26.620 × (1 − 0,30), desconto comercial simples.\n- **B:** Multiplicou por 0,9³ (desconto comercial), que não é o inverso da capitalização.\n- **C (correta):** C = 26.620 / 1,1³ = 26.620 / 1,331 = **R$ 20.000,00**.\n- **D:** Descontou apenas 2 períodos.\n- **E:** Usou juros simples: 26.620 / 1,3.",
  "tags": [
    "juros compostos",
    "valor presente"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V046",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q2",
    "id_pai": "RLE-0062",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um investimento de R$ 10.000,00 transformou-se em R$ 12.544,00 após 2 meses, no regime de juros compostos.\n\nA taxa mensal de juros foi de",
  "imagem": null,
  "alternativas": {
    "A": "1,12% ao mês.",
    "B": "12,00% ao mês.",
    "C": "6,36% ao mês.",
    "D": "12,72% ao mês.",
    "E": "25,44% ao mês."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** Confundiu o fator (1,12) com a taxa.\n- **B (correta):** (1 + i)² = 1,2544 ⇒ 1 + i = 1,12 ⇒ **i = 12% a.m.**\n- **C:** Dividiu a taxa do período por 4, sem fundamento.\n- **D:** Usou juros simples: 25,44%/2.\n- **E:** É a taxa do período de 2 meses.",
  "tags": [
    "juros compostos",
    "taxa"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V047",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q3",
    "id_pai": "RLE-0063",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "No regime de juros simples, à taxa de 6% ao mês, em quanto tempo um capital quadruplica?",
  "imagem": null,
  "alternativas": {
    "A": "66,67 meses.",
    "B": "16,67 meses.",
    "C": "33,33 meses.",
    "D": "50 meses.",
    "E": "23,79 meses."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Usou J = 4C (confundiu montante com juros).\n- **B:** É o prazo para dobrar (J = C).\n- **C:** É o prazo para triplicar (J = 2C).\n- **D (correta):** M = 4C ⇒ J = 3C ⇒ C × 0,06 × t = 3C ⇒ t = 3/0,06 = **50 meses**.\n- **E:** Usou juros compostos: ln 4 / ln 1,06.",
  "tags": [
    "juros simples",
    "prazo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V048",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q3",
    "id_pai": "RLE-0063",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um capital aplicado a juros simples rendeu, em 2 anos e 6 meses, juros iguais a 3/5 do próprio capital.\n\nA taxa mensal dessa aplicação foi de",
  "imagem": null,
  "alternativas": {
    "A": "2,00% ao mês.",
    "B": "2,40% ao mês.",
    "C": "1,58% ao mês.",
    "D": "2,50% ao mês.",
    "E": "1,67% ao mês."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** J = 0,6C = C × i × 30 ⇒ i = 0,6/30 = **2% a.m.** (2 anos e 6 meses = 30 meses).\n- **B:** Leu \"2,5 anos\" como 25 meses.\n- **C:** Calculou a taxa composta: 1,6^(1/30) − 1.\n- **D:** Usou só os 2 anos (24 meses).\n- **E:** Usou 3 anos (36 meses).",
  "tags": [
    "juros simples",
    "taxa"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V049",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q4",
    "id_pai": "RLE-0064",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "A taxa trimestral equivalente, no regime de juros compostos, a 3% ao mês é de, aproximadamente,",
  "imagem": null,
  "alternativas": {
    "A": "42,58%.",
    "B": "9,00%.",
    "C": "9,27%.",
    "D": "6,09%.",
    "E": "0,99%."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** É a taxa anual equivalente.\n- **B:** É a taxa proporcional (regime simples): 3 × 3%.\n- **C (correta):** (1,03)³ − 1 = 1,092727 − 1 ≈ **9,27% a.t.**\n- **D:** É a taxa bimestral equivalente.\n- **E:** Extraiu a raiz cúbica, quando deveria elevar ao cubo.",
  "tags": [
    "taxas equivalentes"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V050",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q4",
    "id_pai": "RLE-0064",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "No regime de juros compostos, a taxa semestral equivalente a 44% ao ano é",
  "imagem": null,
  "alternativas": {
    "A": "3,09%.",
    "B": "9,54%.",
    "C": "22,00%.",
    "D": "107,36%.",
    "E": "20,00%."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** É a taxa mensal equivalente.\n- **B:** É a taxa trimestral equivalente.\n- **C:** É a taxa proporcional (44%/2), própria do regime simples.\n- **D:** Elevou ao quadrado em vez de extrair a raiz.\n- **E (correta):** (1 + i)² = 1,44 ⇒ 1 + i = 1,2 ⇒ **20% a.s.**",
  "tags": [
    "taxas equivalentes"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V051",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q4",
    "id_pai": "RLE-0064",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um banco anuncia uma taxa de 36% ao ano com capitalização mensal. Considere 1,03¹² ≈ 1,4258.\n\nA taxa efetiva anual dessa operação é de, aproximadamente,",
  "imagem": null,
  "alternativas": {
    "A": "36,00%.",
    "B": "42,58%.",
    "C": "41,16%.",
    "D": "3,00%.",
    "E": "19,41%."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** É a taxa nominal, não a efetiva.\n- **B (correta):** Taxa nominal → efetiva do período de capitalização: 36%/12 = 3% a.m. Efetiva anual: 1,03¹² − 1 ≈ **42,58% a.a.**\n- **C:** Usou capitalização trimestral (9% a.t.).\n- **D:** É a taxa efetiva mensal.\n- **E:** Capitalizou só 6 meses (é a efetiva semestral).",
  "tags": [
    "taxa nominal",
    "taxa efetiva"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V052",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q4",
    "id_pai": "RLE-0064",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma aplicação paga taxa nominal de 24% ao semestre, com capitalização bimestral.\n\nA taxa efetiva semestral dessa aplicação é de, aproximadamente,",
  "imagem": null,
  "alternativas": {
    "A": "25,97%.",
    "B": "24,00%.",
    "C": "58,69%.",
    "D": "26,53%.",
    "E": "8,00%."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** Um semestre tem 3 bimestres: 24%/3 = 8% ao bimestre. Efetiva semestral: 1,08³ − 1 ≈ **25,97%**.\n- **B:** É a taxa nominal.\n- **C:** É a taxa efetiva anual (6 bimestres).\n- **D:** Dividiu por 6 (mensal) e capitalizou 6 vezes, como se a capitalização fosse mensal.\n- **E:** É a taxa efetiva bimestral.",
  "tags": [
    "taxa nominal",
    "taxa efetiva"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V053",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "25",
    "titulo": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
    "link": "[[02 - Raciocínio Lógico e Matemático#25. Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §25 – Q2",
    "id_pai": "RLE-0151",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Uma aplicação rendeu 13,4% em um ano no qual a inflação foi de 5%.\n\nA taxa real de rendimento no período foi de",
  "imagem": null,
  "alternativas": {
    "A": "5,00%.",
    "B": "8,40%.",
    "C": "19,07%.",
    "D": "8,00%.",
    "E": "13,40%."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** É a inflação.\n- **B:** Subtraiu as taxas (13,4% − 5%), o que é só aproximação.\n- **C:** Multiplicou os fatores em vez de dividir.\n- **D (correta):** Fisher: (1 + r) = 1,134 / 1,05 = 1,08 ⇒ **r = 8%**.\n- **E:** É a taxa nominal (aparente).",
  "tags": [
    "taxa real",
    "Fisher"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V054",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "25",
    "titulo": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
    "link": "[[02 - Raciocínio Lógico e Matemático#25. Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §25 – Q2",
    "id_pai": "RLE-0151",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um investidor deseja ganho real de 6% ao ano. Para uma inflação esperada de 4% ao ano, a taxa nominal mínima que a aplicação deve oferecer é",
  "imagem": null,
  "alternativas": {
    "A": "24,00%.",
    "B": "10,00%.",
    "C": "10,24%.",
    "D": "2,00%.",
    "E": "1,92%."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** Multiplicou 6 por 4.\n- **B:** Somou as taxas, aproximação que ignora o produto 6% × 4%.\n- **C (correta):** (1 + i) = 1,06 × 1,04 = 1,1024 ⇒ **i = 10,24% a.a.**\n- **D:** Subtraiu as taxas.\n- **E:** Dividiu os fatores (isso daria a taxa real, não a nominal).",
  "tags": [
    "taxa real",
    "Fisher"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V055",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "25",
    "titulo": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
    "link": "[[02 - Raciocínio Lógico e Matemático#25. Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §8 – Q5",
    "id_pai": "RLE-0065",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma aplicação rendeu 4,5% em um período em que a inflação acumulada foi de 6,6%.\n\nÉ correto afirmar que a taxa real do período foi de, aproximadamente,",
  "imagem": null,
  "alternativas": {
    "A": "2,01%.",
    "B": "11,40%.",
    "C": "-6,60%.",
    "D": "-2,10%.",
    "E": "-1,97%."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Inverteu a divisão e obteve taxa positiva.\n- **B:** Multiplicou os fatores.\n- **C:** Considerou apenas a inflação.\n- **D:** Subtraiu as taxas (aproximação).\n- **E (correta):** 1,045 / 1,066 ≈ 0,9803 ⇒ r ≈ **−1,97%**: houve perda real de poder de compra.",
  "tags": [
    "taxa real",
    "Fisher",
    "juro real negativo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V056",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "25",
    "titulo": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
    "link": "[[02 - Raciocínio Lógico e Matemático#25. Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §25 – Q1",
    "id_pai": "RLE-0150",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um capital de R$ 8.000,00 é aplicado a 10% ao ano, com capitalização contínua, por 2 anos. Considere e^0,2 = 1,2214.\n\nO montante ao final do prazo é de, aproximadamente,",
  "imagem": null,
  "alternativas": {
    "A": "R$ 9.680,00.",
    "B": "R$ 9.771,20.",
    "C": "R$ 1.771,20.",
    "D": "R$ 9.600,00.",
    "E": "R$ 9.763,13."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** Usou capitalização anual discreta (1,1²).\n- **B (correta):** M = C·e^(i·t) = 8.000 × e^0,2 = 8.000 × 1,2214 = **R$ 9.771,20**.\n- **C:** São só os juros.\n- **D:** Usou juros simples.\n- **E:** Usou capitalização mensal discreta (taxa nominal 10% a.a.).",
  "tags": [
    "capitalização contínua"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V057",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "25",
    "titulo": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
    "link": "[[02 - Raciocínio Lógico e Matemático#25. Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §25 – Q1",
    "id_pai": "RLE-0150",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma taxa de 12% ao ano com capitalização contínua equivale a qual taxa efetiva anual? Considere e^0,12 ≈ 1,1275.",
  "imagem": null,
  "alternativas": {
    "A": "12,00%.",
    "B": "11,33%.",
    "C": "6,18%.",
    "D": "12,68%.",
    "E": "12,75%."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Confundiu a taxa contínua com a efetiva.\n- **B:** Fez o caminho inverso (ln 1,12), que dá a taxa contínua equivalente a 12% efetivos.\n- **C:** Usou meio ano (e^0,06 − 1).\n- **D:** Usou capitalização mensal de 1% a.m.\n- **E (correta):** i_ef = e^0,12 − 1 ≈ **12,75% a.a.**",
  "tags": [
    "capitalização contínua",
    "taxa efetiva"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V058",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "25",
    "titulo": "Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)",
    "link": "[[02 - Raciocínio Lógico e Matemático#25. Complemento do edital 2027: capitalização contínua e taxa real (equação de Fisher)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §25 – Q1",
    "id_pai": "RLE-0150",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Com capitalização contínua à taxa de 8% ao ano, em quanto tempo um capital dobra? Considere ln 2 ≈ 0,693.",
  "imagem": null,
  "alternativas": {
    "A": "9,01 anos.",
    "B": "12,50 anos.",
    "C": "4,33 anos.",
    "D": "8,66 anos.",
    "E": "25,00 anos."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Usou capitalização anual discreta (ln 2 / ln 1,08).\n- **B:** Usou juros simples (i·t = 1).\n- **C:** Dividiu por 2 sem motivo.\n- **D (correta):** 2 = e^(0,08t) ⇒ 0,08t = ln 2 ⇒ t = 0,693/0,08 ≈ **8,66 anos**.\n- **E:** Usou i·t = 2 (triplicar no regime simples).",
  "tags": [
    "capitalização contínua",
    "prazo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V059",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 02 §8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um título de valor nominal R$ 15.000,00 foi descontado em um banco 4 meses antes do vencimento, com desconto **comercial simples** à taxa de 2,5% ao mês.\n\nO valor líquido recebido pelo cliente foi",
  "imagem": null,
  "alternativas": {
    "A": "R$ 13.500,00.",
    "B": "R$ 13.875,00.",
    "C": "R$ 13.636,36.",
    "D": "R$ 13.555,32.",
    "E": "R$ 1.500,00."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** D = N·d·t = 15.000 × 0,025 × 4 = 1.500; A = 15.000 − 1.500 = **R$ 13.500,00**.\n- **B:** Usou 3 meses de antecipação.\n- **C:** Usou desconto racional simples: 15.000/1,1.\n- **D:** Usou desconto comercial composto: 15.000 × 0,975⁴.\n- **E:** É o valor do desconto, não o valor líquido.",
  "tags": [
    "desconto simples",
    "desconto comercial"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V060",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 02 §8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um título de R$ 22.000,00 é resgatado 5 meses antes do vencimento, com desconto **racional simples** (por dentro) à taxa de 2% ao mês.\n\nO valor do desconto concedido é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 2.073,92.",
    "B": "R$ 2.200,00.",
    "C": "R$ 2.000,00.",
    "D": "R$ 1.818,18.",
    "E": "R$ 20.000,00."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** Usou desconto racional composto.\n- **B:** Usou desconto comercial (por fora): 22.000 × 0,10.\n- **C (correta):** A = N/(1 + i·t) = 22.000/1,10 = 20.000; D = 22.000 − 20.000 = **R$ 2.000,00**.\n- **D:** Descontou novamente o próprio desconto (2.000/1,1).\n- **E:** É o valor atual, não o desconto.",
  "tags": [
    "desconto simples",
    "desconto racional"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V061",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 02 §22",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Uma duplicata de R$ 10.000,00 foi descontada 2 meses antes do vencimento, com desconto comercial simples de 4% ao mês.\n\nA taxa mensal de juros simples efetivamente cobrada na operação (sobre o valor recebido) é de, aproximadamente,",
  "imagem": null,
  "alternativas": {
    "A": "3,85% ao mês.",
    "B": "8,70% ao mês.",
    "C": "4,26% ao mês.",
    "D": "4,35% ao mês.",
    "E": "4,00% ao mês."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Fez d/(1 + d), relação que vale para um único período e no sentido inverso.\n- **B:** É a taxa do período de 2 meses.\n- **C:** Calculou a taxa composta equivalente (10.000/9.200)^(1/2) − 1.\n- **D (correta):** D = 10.000 × 0,04 × 2 = 800; A = 9.200. Taxa efetiva: 800 = 9.200 × i × 2 ⇒ i = 800/18.400 ≈ **4,35% a.m.**, maior que a taxa de desconto.\n- **E:** É a taxa de desconto, que incide sobre o valor nominal, não sobre o valor recebido.",
  "tags": [
    "desconto simples",
    "taxa efetiva"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V062",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Juros simples e compostos",
  "ref_apostila": {
    "modulo": "02",
    "secao": "8",
    "titulo": "Juros simples e compostos",
    "link": "[[02 - Raciocínio Lógico e Matemático#8. Juros simples e compostos]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 02 §8",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Um título de R$ 12.600,00 vence em 3 meses. A taxa de desconto simples é de 2% ao mês.\n\nA diferença entre o desconto comercial e o desconto racional, ambos simples, é de, aproximadamente,",
  "imagem": null,
  "alternativas": {
    "A": "R$ 45,36.",
    "B": "R$ 713,21.",
    "C": "R$ 42,79.",
    "D": "R$ 1.469,21.",
    "E": "R$ 756,00."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** Aplicou i·t sobre o desconto comercial (a relação correta é Dc − Dr = Dr·i·t).\n- **B:** É o desconto racional.\n- **C (correta):** Dc = 12.600 × 0,06 = R$ 756,00; Ar = 12.600/1,06 ≈ R$ 11.886,79; Dr ≈ R$ 713,21. Diferença ≈ **R$ 42,79** (= Dr × i × t).\n- **D:** Somou os dois descontos.\n- **E:** É o desconto comercial.",
  "tags": [
    "desconto simples",
    "comercial x racional"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V063",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q1",
    "id_pai": "RLE-0131",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um título de R$ 13.310,00 é resgatado 3 meses antes do vencimento, com desconto **racional composto** à taxa de 10% ao mês.\n\nO valor recebido é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 10.000,00.",
    "B": "R$ 9.317,00.",
    "C": "R$ 10.238,46.",
    "D": "R$ 9.702,99.",
    "E": "R$ 3.310,00."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** A = N/(1 + i)ᵗ = 13.310/1,331 = **R$ 10.000,00**.\n- **B:** Usou desconto comercial simples: 13.310 × 0,7.\n- **C:** Usou desconto racional simples: 13.310/1,3.\n- **D:** Usou desconto comercial composto: 13.310 × 0,9³.\n- **E:** É o valor do desconto.",
  "tags": [
    "desconto composto",
    "desconto racional"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V064",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q1",
    "id_pai": "RLE-0131",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um título de R$ 20.000,00 é descontado 2 meses antes do vencimento, com desconto **comercial composto** à taxa de 5% ao mês.\n\nO valor atual do título é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 18.000,00.",
    "B": "R$ 18.050,00.",
    "C": "R$ 1.950,00.",
    "D": "R$ 18.181,82.",
    "E": "R$ 18.140,59."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** Usou desconto comercial simples.\n- **B (correta):** A = N·(1 − d)ᵗ = 20.000 × 0,95² = 20.000 × 0,9025 = **R$ 18.050,00**.\n- **C:** É o valor do desconto.\n- **D:** Usou desconto racional simples.\n- **E:** Usou desconto racional composto: 20.000/1,1025.",
  "tags": [
    "desconto composto",
    "desconto comercial"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V065",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q1",
    "id_pai": "RLE-0131",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um título de R$ 23.328,00 é liquidado 2 meses antes do vencimento, com desconto racional composto à taxa de 8% ao mês.\n\nO valor do desconto obtido é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 3.732,48.",
    "B": "R$ 20.000,00.",
    "C": "R$ 3.217,66.",
    "D": "R$ 3.583,18.",
    "E": "R$ 3.328,00."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Usou desconto comercial simples.\n- **B:** É o valor atual, não o desconto.\n- **C:** Usou desconto racional simples.\n- **D:** Usou desconto comercial composto.\n- **E (correta):** A = 23.328/1,08² = 23.328/1,1664 = 20.000; D = 23.328 − 20.000 = **R$ 3.328,00**.",
  "tags": [
    "desconto composto",
    "desconto racional"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V066",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q2",
    "id_pai": "RLE-0132",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um empréstimo de R$ 2.100,00 será pago em 2 prestações mensais iguais, a primeira 1 mês após a contratação, à taxa de juros compostos de 10% ao mês (sistema Price).\n\nO valor de cada prestação é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 1.155,00.",
    "B": "R$ 1.270,50.",
    "C": "R$ 1.050,00.",
    "D": "R$ 1.210,00.",
    "E": "R$ 1.100,00."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Aplicou juros de um só mês sobre o total e dividiu por 2.\n- **B:** Capitalizou o total por 2 meses e dividiu por 2.\n- **C:** Dividiu o valor sem juros.\n- **D (correta):** 2.100 = P/1,1 + P/1,21 = P × (1,1 + 1)/1,21 = P × 2,1/1,21 ⇒ **P = R$ 1.210,00**.\n- **E:** Considerou a 1ª prestação na data zero (série antecipada).",
  "tags": [
    "Price",
    "série uniforme"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V067",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q2",
    "id_pai": "RLE-0132",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um equipamento de R$ 3.310,00 será pago em 3 prestações mensais iguais, **sendo a primeira no ato da compra**, à taxa de juros compostos de 10% ao mês.\n\nO valor de cada prestação é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 1.210,00.",
    "B": "R$ 1.103,33.",
    "C": "R$ 1.335,03.",
    "D": "R$ 1.331,00.",
    "E": "R$ 1.213,67."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** Série antecipada: 3.310 = P × (1 + 1/1,1 + 1/1,21) = P × 3,31/1,21 ⇒ **P = R$ 1.210,00**.\n- **B:** Dividiu o preço em 3 parcelas sem juros.\n- **C:** Capitalizou o total por 2 meses e dividiu por 3.\n- **D:** Tratou a série como postecipada (sem entrada).\n- **E:** Acrescentou 10% sobre o total e dividiu por 3.",
  "tags": [
    "série antecipada",
    "rendas"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V068",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q2",
    "id_pai": "RLE-0132",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um poupador deposita R$ 1.000,00 ao final de cada mês, durante 3 meses, em uma aplicação que rende juros compostos de 2% ao mês.\n\nImediatamente após o 3º depósito, o saldo acumulado é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 3.121,61.",
    "B": "R$ 3.060,40.",
    "C": "R$ 2.883,88.",
    "D": "R$ 3.000,00.",
    "E": "R$ 3.060,00."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** Tratou como série antecipada (multiplicou por 1,02).\n- **B (correta):** FV = 1.000 × 1,02² + 1.000 × 1,02 + 1.000 = 1.040,40 + 1.020 + 1.000 = **R$ 3.060,40**.\n- **C:** Calculou o valor presente da série, e não o montante.\n- **D:** Ignorou os juros.\n- **E:** Usou juros simples (1.040 + 1.020 + 1.000).",
  "tags": [
    "rendas",
    "valor futuro"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V069",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q6",
    "id_pai": "RLE-0136",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um financiamento de R$ 80.000,00 é pago pelo sistema Price, com taxa de 1,5% ao mês e prestação mensal de R$ 3.200,00.\n\nO valor da amortização contida na **segunda** prestação é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 1.200,00.",
    "B": "R$ 1.170,00.",
    "C": "R$ 2.060,45.",
    "D": "R$ 2.000,00.",
    "E": "R$ 2.030,00."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** São os juros da 1ª prestação.\n- **B:** São os juros da 2ª prestação.\n- **C:** É a amortização da 3ª prestação.\n- **D:** É a amortização da 1ª prestação; no Price ela cresce a cada período.\n- **E (correta):** 1ª: juros = 1,5% × 80.000 = 1.200; amortização = 2.000; saldo = 78.000. 2ª: juros = 1,5% × 78.000 = 1.170; amortização = 3.200 − 1.170 = **R$ 2.030,00** (= 2.000 × 1,015).",
  "tags": [
    "Price",
    "amortização"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V070",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q6",
    "id_pai": "RLE-0136",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um financiamento de R$ 60.000,00 pelo sistema Price, à taxa de 2% ao mês, tem prestação mensal de R$ 2.500,00.\n\nO saldo devedor imediatamente após o pagamento da 1ª prestação é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 57.500,00.",
    "B": "R$ 58.650,00.",
    "C": "R$ 58.700,00.",
    "D": "R$ 61.200,00.",
    "E": "R$ 58.800,00."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** Abateu a prestação inteira do saldo, esquecendo que parte dela é juros.\n- **B:** Capitalizou também a prestação.\n- **C (correta):** Juros = 2% × 60.000 = 1.200; amortização = 2.500 − 1.200 = 1.300; saldo = 60.000 − 1.300 = **R$ 58.700,00**.\n- **D:** Somou os juros ao saldo e não abateu a prestação.\n- **E:** Abateu do saldo apenas os juros.",
  "tags": [
    "Price",
    "saldo devedor"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V071",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q6",
    "id_pai": "RLE-0136",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Um empréstimo de R$ 10.000,00 será quitado em 12 prestações mensais a 1% ao mês. Considere que, no sistema Price, a prestação é de R$ 888,49.\n\nComparando o sistema Price com o SAC (mesmo valor, prazo e taxa), é correto afirmar que o total de juros pagos",
  "imagem": null,
  "alternativas": {
    "A": "no SAC é de aproximadamente R$ 661,88, maior que o do Price.",
    "B": "no Price é de R$ 1.200,00, igual ao de juros simples sobre o valor total.",
    "C": "no SAC é de R$ 600,00, exatamente metade do Price.",
    "D": "no Price é de aproximadamente R$ 661,88, maior que os R$ 650,00 do SAC.",
    "E": "é igual nos dois sistemas, pois a taxa é a mesma."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Inverteu os sistemas.\n- **B:** Calculou juros simples sobre 10.000 por 12 meses, ignorando as amortizações.\n- **C:** Valor e relação sem fundamento: o SAC dá R$ 650,00.\n- **D (correta):** Price: 12 × 888,49 − 10.000 = R$ 661,88. SAC: juros sobre saldos que caem 833,33 por mês: 1% × (10.000 + 9.166,67 + … + 833,33) = 1% × 65.000 = R$ 650,00. O SAC devolve o principal mais depressa e paga menos juros.\n- **E:** A taxa é a mesma, mas os saldos devedores diferem; o total de juros não é igual.",
  "tags": [
    "Price",
    "SAC",
    "comparação"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V072",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §24 – Q2",
    "id_pai": "RLE-0144",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um financiamento de R$ 36.000,00 será pago em 6 prestações mensais pelo Sistema de Amortização Constante (SAC), à taxa de 2% ao mês.\n\nO valor da **terceira** prestação é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 6.480,00.",
    "B": "R$ 6.720,00.",
    "C": "R$ 6.000,00.",
    "D": "R$ 6.600,00.",
    "E": "R$ 6.360,00."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** Amortização = 36.000/6 = 6.000. Saldo antes da 3ª: 36.000 − 2 × 6.000 = 24.000. Juros = 2% × 24.000 = 480. Prestação = **R$ 6.480,00**.\n- **B:** É a 1ª prestação (juros sobre o saldo inicial).\n- **C:** É só a amortização, sem juros.\n- **D:** É a 2ª prestação.\n- **E:** É a 4ª prestação (usou o saldo após 3 amortizações).",
  "tags": [
    "SAC"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V073",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
  "ref_apostila": {
    "modulo": "02",
    "secao": "24",
    "titulo": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
    "link": "[[02 - Raciocínio Lógico e Matemático#24. Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §24 – Q2",
    "id_pai": "RLE-0144",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um financiamento de R$ 30.000,00 será pago em 5 prestações mensais pelo Sistema de Amortização Misto (SAM), à taxa de 2% ao mês. Nas mesmas condições, a prestação do sistema Price é de R$ 6.364,75.\n\nO valor da 1ª prestação no SAM é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 6.600,00.",
    "B": "R$ 6.364,75.",
    "C": "R$ 6.964,75.",
    "D": "R$ 6.000,00.",
    "E": "R$ 6.482,38."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** É a 1ª prestação do SAC.\n- **B:** É a prestação do Price.\n- **C:** Somou SAC e Price e subtraiu a amortização, sem fundamento.\n- **D:** É só a amortização do SAC.\n- **E (correta):** 1ª prestação SAC = 30.000/5 + 2% × 30.000 = 6.000 + 600 = 6.600. SAM = (6.600 + 6.364,75)/2 = **R$ 6.482,38**.",
  "tags": [
    "SAM",
    "sistema misto"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V074",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §24 – Q2",
    "id_pai": "RLE-0144",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um empréstimo de R$ 50.000,00 é amortizado pelo SAC em 10 prestações mensais, com juros de 1% ao mês.\n\nÉ correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "os juros da 1ª prestação são de R$ 50,00.",
    "B": "a amortização cresce R$ 50,00 por mês.",
    "C": "as prestações decrescem R$ 50,00 por mês, e a última é de R$ 5.050,00.",
    "D": "a última prestação é de R$ 5.000,00, sem juros.",
    "E": "as prestações são iguais a R$ 5.500,00."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** Os juros da 1ª são 1% × 50.000 = R$ 500,00.\n- **B:** No SAC a amortização é constante (R$ 5.000,00).\n- **C (correta):** Amortização = 5.000. Juros caem 1% × 5.000 = 50 a cada mês. 1ª = 5.000 + 500 = 5.500; última = 5.000 + 1% × 5.000 = **5.050**.\n- **D:** Ainda há juros sobre o saldo de R$ 5.000,00 (R$ 50,00).\n- **E:** No SAC as prestações não são constantes.",
  "tags": [
    "SAC"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V075",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q4",
    "id_pai": "RLE-0134",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Sobre sistemas de amortização de empréstimos, assinale a alternativa correta.",
  "imagem": null,
  "alternativas": {
    "A": "No SAC, a amortização cresce em progressão geométrica de razão (1 + i).",
    "B": "No sistema Price, a parcela de juros decresce e a de amortização cresce ao longo do tempo.",
    "C": "Para mesmo valor, prazo e taxa, o Price paga menos juros totais que o SAC.",
    "D": "No SAM, a prestação é a soma das prestações do SAC e do Price no mesmo período.",
    "E": "No SAC, as prestações são iguais e os juros, decrescentes."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Questão A–E montada a partir da afirmação Certo/Errado da apostila (Q4 do §22) e de outras quatro afirmações do mesmo tópico.\n\n- **A:** Isso ocorre com a amortização do Price; no SAC ela é constante.\n- **B (correta):** No Price a prestação é constante; como o saldo cai, os juros caem e a amortização (prestação − juros) cresce.\n- **C:** É o contrário: o SAC devolve o principal mais cedo e paga menos juros.\n- **D:** No SAM a prestação é a **média aritmética** das duas.\n- **E:** No SAC a **amortização** é constante e as prestações decrescem.",
  "tags": [
    "SAC",
    "Price",
    "SAM",
    "conversão C/E"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Conferido com a apostila 02 §22.4."
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V076",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q3",
    "id_pai": "RLE-0133",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um projeto exige investimento de R$ 25.000,00 hoje e gera entradas de R$ 13.200,00 em 1 ano e de R$ 17.424,00 em 2 anos. A taxa mínima de atratividade (TMA) é de 10% ao ano.\n\nÉ correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o VPL é de R$ 1.400,00 e o projeto deve ser aceito, pois sua TIR supera 10% ao ano.",
    "B": "o VPL é de R$ 5.624,00 e o projeto deve ser aceito.",
    "C": "o projeto deve ser rejeitado, pois a TIR é inferior à TMA.",
    "D": "o VPL é nulo e a TIR do projeto é de 10% ao ano.",
    "E": "o VPL é de −R$ 1.400,00 e o projeto deve ser rejeitado."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** VPL = −25.000 + 13.200/1,1 + 17.424/1,21 = −25.000 + 12.000 + 14.400 = **R$ 1.400,00** > 0 ⇒ aceitar; VPL positivo à TMA implica TIR > TMA.\n- **B:** Somou os fluxos sem descontá-los.\n- **C:** Com VPL positivo à TMA, a TIR é superior à TMA.\n- **D:** O VPL a 10% é positivo; a TIR é maior que 10%.\n- **E:** Inverteu o sinal do VPL.",
  "tags": [
    "VPL",
    "TIR",
    "análise de investimentos"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V077",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q3",
    "id_pai": "RLE-0133",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma empresa avalia um projeto com investimento inicial de R$ 20.000,00 e entradas de R$ 8.800,00 ao final do 1º ano e de R$ 12.100,00 ao final do 2º ano, com TMA de 10% ao ano.\n\nO valor presente líquido do projeto é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 900,00.",
    "B": "−R$ 1.000,00.",
    "C": "−R$ 2.000,00.",
    "D": "R$ 18.000,00.",
    "E": "R$ 2.000,00."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** Somou os fluxos sem descontá-los (900).\n- **B:** Descontou os dois fluxos por um único período (−20.000 + 8.000 + 11.000).\n- **C (correta):** VPL = −20.000 + 8.800/1,1 + 12.100/1,21 = −20.000 + 8.000 + 10.000 = **−R$ 2.000,00** (rejeitar).\n- **D:** É o valor presente das entradas, sem subtrair o investimento.\n- **E:** Inverteu o sinal.",
  "tags": [
    "VPL"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V078",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q3",
    "id_pai": "RLE-0133",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Um projeto de automação custa R$ 10.000,00 hoje e gera economia de R$ 4.000,00 ao final de cada um dos próximos 3 anos. A TMA da empresa é de 10% ao ano. Considere 1/1,1 + 1/1,21 + 1/1,331 ≈ 2,4869.\n\nÉ correto afirmar que",
  "imagem": null,
  "alternativas": {
    "A": "o VPL é de R$ 2.000,00 e o projeto deve ser aceito.",
    "B": "a TIR do projeto é superior a 10% ao ano.",
    "C": "o projeto deve ser aceito, pois o payback simples é menor que o prazo do projeto.",
    "D": "o VPL é de aproximadamente −R$ 52,40 e o projeto deve ser rejeitado, embora o payback simples seja de 2,5 anos.",
    "E": "o VPL é nulo e o projeto é indiferente."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Somou os fluxos sem descontar (12.000 − 10.000).\n- **B:** Com VPL negativo à TMA, a TIR é inferior a 10%.\n- **C:** O critério do VPL indica rejeição; payback simples não considera o desconto.\n- **D (correta):** VPL = −10.000 + 4.000 × 2,4869 ≈ −52,40 (com o fator exato, −52,59). Como VPL < 0, rejeita-se. O payback simples (10.000/4.000 = 2,5 anos) ignora o valor do dinheiro no tempo.\n- **E:** O VPL é ligeiramente negativo.",
  "tags": [
    "VPL",
    "payback"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V079",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 02 §22",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um investimento de R$ 10.000,00 hoje produz um único retorno de R$ 12.100,00 daqui a 2 anos.\n\nA taxa interna de retorno (TIR) desse investimento é",
  "imagem": null,
  "alternativas": {
    "A": "9,09% ao ano.",
    "B": "21% ao ano.",
    "C": "12,1% ao ano.",
    "D": "10,5% ao ano.",
    "E": "10% ao ano."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Calculou 1 − 1/1,1 (taxa de desconto comercial equivalente).\n- **B:** É o retorno do período de 2 anos.\n- **C:** Confundiu o valor de resgate com a taxa.\n- **D:** Dividiu os 21% por 2 (taxa simples).\n- **E (correta):** A TIR zera o VPL: 10.000 = 12.100/(1 + r)² ⇒ (1 + r)² = 1,21 ⇒ **r = 10% a.a.**",
  "tags": [
    "TIR"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V080",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Inédita – Apostila 02 §22",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Um projeto exige R$ 1.000,00 hoje e devolve R$ 600,00 ao final de cada um dos 2 anos seguintes.\n\nA taxa interna de retorno desse projeto está",
  "imagem": null,
  "alternativas": {
    "A": "entre 0% e 10% ao ano.",
    "B": "entre 12% e 14% ao ano.",
    "C": "acima de 20% ao ano.",
    "D": "entre 14% e 20% ao ano.",
    "E": "entre 10% e 12% ao ano."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** A 10% o VPL ainda é positivo (≈ +41,32), então a TIR é maior que 10%.\n- **B (correta):** A TIR resolve 1.000 = 600/(1 + r) + 600/(1 + r)². Teste: a 12%, VPL = 600/1,12 + 600/1,2544 − 1.000 ≈ +14,03 > 0; a 14%, VPL ≈ −12,00 < 0. Logo a TIR (≈ 13,07%) está **entre 12% e 14%**.\n- **C:** Confundiu 20% (ganho total de 200 sobre 1.000) com a TIR.\n- **D:** A 14% o VPL já é negativo.\n- **E:** A 12% o VPL ainda é positivo.",
  "tags": [
    "TIR",
    "VPL"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V081",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
  "ref_apostila": {
    "modulo": "02",
    "secao": "24",
    "titulo": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
    "link": "[[02 - Raciocínio Lógico e Matemático#24. Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §24 – Q3",
    "id_pai": "RLE-0145",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma empresa deve dois pagamentos de R$ 4.000,00, com vencimentos em 2 e 3 meses. Ela propõe substituí-los por um único pagamento no mês 1. Com juros compostos de 5% ao mês, o valor desse pagamento único é de, aproximadamente,",
  "imagem": null,
  "alternativas": {
    "A": "R$ 8.000,00.",
    "B": "R$ 7.619,05.",
    "C": "R$ 7.437,64.",
    "D": "R$ 7.114,62.",
    "E": "R$ 7.083,47."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** Somou os valores sem considerar os juros.\n- **B:** Descontou os dois pagamentos por um único mês.\n- **C (correta):** Data focal no mês 1: 4.000/1,05 + 4.000/1,05² ≈ 3.809,52 + 3.628,12 = **R$ 7.437,64**.\n- **D:** Usou juros simples (1,10 e 1,15) – no regime simples o resultado depende da data focal.\n- **E:** Levou os valores para a data zero, e não para o mês 1.",
  "tags": [
    "equivalência de capitais",
    "data focal"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V082",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
  "ref_apostila": {
    "modulo": "02",
    "secao": "24",
    "titulo": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
    "link": "[[02 - Raciocínio Lógico e Matemático#24. Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §24 – Q3",
    "id_pai": "RLE-0145",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Uma dívida é composta por R$ 10.000,00 vencíveis hoje e R$ 12.100,00 vencíveis em 2 meses. O devedor deseja substituí-la por dois pagamentos iguais, em 1 e 2 meses. Com juros compostos de 10% ao mês, cada pagamento será de, aproximadamente,",
  "imagem": null,
  "alternativas": {
    "A": "R$ 11.050,00.",
    "B": "R$ 12.100,00.",
    "C": "R$ 11.000,00.",
    "D": "R$ 10.000,00.",
    "E": "R$ 11.523,81."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Somou os valores nominais e dividiu por 2.\n- **B:** Capitalizou o valor presente por 2 meses e dividiu por 2.\n- **C:** Capitalizou o valor presente por 1 mês e dividiu por 2.\n- **D:** Dividiu o valor presente (20.000) por 2, sem juros.\n- **E (correta):** Valor da dívida hoje: 10.000 + 12.100/1,21 = 20.000. Dois pagamentos iguais: 20.000 = P/1,1 + P/1,21 = P × 1,735537 ⇒ **P ≈ R$ 11.523,81**.",
  "tags": [
    "equivalência de capitais",
    "data focal"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V083",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
  "ref_apostila": {
    "modulo": "02",
    "secao": "24",
    "titulo": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
    "link": "[[02 - Raciocínio Lógico e Matemático#24. Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §24 – Q4",
    "id_pai": "RLE-0146",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um contrato prevê três recebimentos: R$ 2.200,00 em 1 mês, R$ 3.630,00 em 2 meses e R$ 1.331,00 em 3 meses. À taxa de juros compostos de 10% ao mês, o valor presente desses recebimentos é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 6.048,85.",
    "B": "R$ 7.161,00.",
    "C": "R$ 6.510,00.",
    "D": "R$ 6.000,00.",
    "E": "R$ 5.380,17."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Usou desconto racional simples (1,1; 1,2; 1,3).\n- **B:** Somou os valores nominais.\n- **C:** Descontou o total por 1 mês.\n- **D (correta):** 2.200/1,1 + 3.630/1,21 + 1.331/1,331 = 2.000 + 3.000 + 1.000 = **R$ 6.000,00**.\n- **E:** Descontou o total por 3 meses.",
  "tags": [
    "série não uniforme",
    "valor presente"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V084",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
  "ref_apostila": {
    "modulo": "02",
    "secao": "24",
    "titulo": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
    "link": "[[02 - Raciocínio Lógico e Matemático#24. Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §24 – Q4",
    "id_pai": "RLE-0146",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um poupador deposita R$ 1.000,00 hoje, R$ 2.000,00 daqui a 1 mês e R$ 3.000,00 daqui a 2 meses, em uma aplicação a juros compostos de 10% ao mês.\n\nO saldo dessa aplicação no mês 3 será",
  "imagem": null,
  "alternativas": {
    "A": "R$ 7.051,00.",
    "B": "R$ 6.000,00.",
    "C": "R$ 7.986,00.",
    "D": "R$ 6.410,00.",
    "E": "R$ 7.000,00."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** 1.000 × 1,1³ + 2.000 × 1,1² + 3.000 × 1,1 = 1.331 + 2.420 + 3.300 = **R$ 7.051,00**.\n- **B:** Somou os depósitos sem juros.\n- **C:** Capitalizou todos os depósitos por 3 meses.\n- **D:** Calculou o saldo no mês 2.\n- **E:** Usou juros simples.",
  "tags": [
    "série não uniforme",
    "valor futuro"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V085",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "22",
    "titulo": "Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)",
    "link": "[[02 - Raciocínio Lógico e Matemático#22. Matemática financeira para a FCC (desconto composto, rendas, Price, VPL e TIR)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §22 – Q5",
    "id_pai": "RLE-0135",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Um imóvel comercial gera aluguel líquido de R$ 2.500,00 por mês, indefinidamente. Se a taxa de desconto é de 0,8% ao mês, o valor presente desse fluxo é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 30.000,00.",
    "B": "R$ 312.500,00.",
    "C": "R$ 20.000,00.",
    "D": "R$ 3.125.000,00.",
    "E": "R$ 31.250,00."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** Somou apenas 12 meses de aluguel.\n- **B (correta):** Perpetuidade: PV = PMT/i = 2.500/0,008 = **R$ 312.500,00**.\n- **C:** Multiplicou o aluguel pela taxa, sem fundamento.\n- **D:** Usou 0,08% em vez de 0,8%.\n- **E:** Usou 8% em vez de 0,8%.",
  "tags": [
    "perpetuidade",
    "rendas"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_fin.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V086",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
  "ref_apostila": {
    "modulo": "02",
    "secao": "24",
    "titulo": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
    "link": "[[02 - Raciocínio Lógico e Matemático#24. Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §24 – Q1",
    "id_pai": "RLE-0143",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "O desvio médio do conjunto {2, 4, 6, 8, 10, 12} é",
  "imagem": null,
  "alternativas": {
    "A": "3.",
    "B": "11,67.",
    "C": "3,42.",
    "D": "3,6.",
    "E": "0."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** Média = 42/6 = 7. Desvios absolutos: 5, 3, 1, 1, 3, 5 (soma 18). Desvio médio = 18/6 = **3**.\n- **B:** É a variância populacional (70/6).\n- **C:** É o desvio padrão populacional (√(70/6)).\n- **D:** Dividiu 18 por 5 (n − 1), o que não se faz no desvio médio.\n- **E:** Somou os desvios com sinal (que sempre somam zero).",
  "tags": [
    "desvio médio",
    "dispersão"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V087",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
  "ref_apostila": {
    "modulo": "02",
    "secao": "24",
    "titulo": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
    "link": "[[02 - Raciocínio Lógico e Matemático#24. Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §24 – Q1",
    "id_pai": "RLE-0143",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O tempo, em minutos, de atendimento de 6 clientes foi: 10, 12, 15, 15, 18 e 20.\n\nOs valores aproximados do desvio médio e do desvio padrão populacional desses tempos são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "2,67 e 11,33.",
    "B": "3,37 e 2,67.",
    "C": "3,20 e 3,69.",
    "D": "0 e 3,37.",
    "E": "2,67 e 3,37."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** O segundo valor é a variância, não o desvio padrão.\n- **B:** Trocou as duas medidas.\n- **C:** Dividiu por n − 1 = 5 nas duas medidas.\n- **D:** Somou os desvios com sinal no desvio médio.\n- **E (correta):** Média = 15. Desvios absolutos: 5, 3, 0, 0, 3, 5 (soma 16) ⇒ DM = 16/6 ≈ **2,67**. Quadrados: 25, 9, 0, 0, 9, 25 (soma 68) ⇒ variância = 68/6 ≈ 11,33 ⇒ desvio padrão ≈ **3,37**.",
  "tags": [
    "desvio médio",
    "desvio padrão"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V088",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
  "ref_apostila": {
    "modulo": "02",
    "secao": "24",
    "titulo": "Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto",
    "link": "[[02 - Raciocínio Lógico e Matemático#24. Complemento do edital 2027: desvio médio, data focal, séries não uniformes e Sistema Misto]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §24 – Q6",
    "id_pai": "RLE-0148",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere um conjunto de dados numéricos e as medidas média, desvio médio, variância e desvio padrão. Assinale a alternativa correta.",
  "imagem": null,
  "alternativas": {
    "A": "Multiplicando-se todos os valores por 3, a variância fica multiplicada por 3.",
    "B": "Multiplicando-se todos os valores por 3, o desvio padrão fica multiplicado por 3 e a variância, por 9.",
    "C": "Somando-se 10 a todos os valores, a variância aumenta 100 unidades.",
    "D": "Somando-se 10 a todos os valores, o desvio médio aumenta 10 unidades.",
    "E": "O desvio médio é sempre igual ao desvio padrão."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.** Questão A–E montada a partir da afirmação Certo/Errado da apostila (§24 Q6) e de outras propriedades do mesmo tópico; propriedades conferidas numericamente em Python.\n\n- **A:** A variância fica multiplicada por 3² = 9.\n- **B (correta):** Multiplicar por k multiplica os desvios por k: o desvio padrão (e o desvio médio) fica × |k| e a variância × k².\n- **C:** A variância não se altera com a soma de constante.\n- **D:** Somar constante desloca a média junto com os dados; os desvios não mudam (é a afirmação Certo/Errado da apostila, que é errada).\n- **E:** Em geral são diferentes (o desvio padrão é maior ou igual ao desvio médio).",
  "tags": [
    "dispersão",
    "propriedades",
    "conversão C/E"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V089",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "18",
    "titulo": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
    "link": "[[02 - Raciocínio Lógico e Matemático#18. Estatística descritiva (média, moda, mediana, variância e desvio padrão)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §18 – Q3",
    "id_pai": "RLE-0113",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "A variância **populacional** do conjunto {2, 4, 6, 8, 10} é",
  "imagem": null,
  "alternativas": {
    "A": "2,83.",
    "B": "10.",
    "C": "40.",
    "D": "8.",
    "E": "2,4."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** É o desvio padrão populacional (√8).\n- **B:** É a variância amostral (40/4).\n- **C:** É a soma dos quadrados dos desvios, sem dividir por n.\n- **D (correta):** Média 6; desvios −4, −2, 0, 2, 4; quadrados 16, 4, 0, 4, 16 = 40; 40/5 = **8**.\n- **E:** É o desvio médio (12/5).",
  "tags": [
    "variância"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V090",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "18",
    "titulo": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
    "link": "[[02 - Raciocínio Lógico e Matemático#18. Estatística descritiva (média, moda, mediana, variância e desvio padrão)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §18 – Q3",
    "id_pai": "RLE-0113",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma amostra de 5 contas apresentou os seguintes números de transações em um dia: 3, 5, 7, 9 e 11.\n\nO desvio padrão **amostral** desses dados é de, aproximadamente,",
  "imagem": null,
  "alternativas": {
    "A": "8,00.",
    "B": "2,83.",
    "C": "3,16.",
    "D": "2,40.",
    "E": "10,00."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** É a variância populacional.\n- **B:** Dividiu por n = 5 (desvio padrão populacional).\n- **C (correta):** Média 7; soma dos quadrados dos desvios = 16 + 4 + 0 + 4 + 16 = 40. Variância amostral = 40/(5 − 1) = 10; desvio padrão = √10 ≈ **3,16**.\n- **D:** É o desvio médio.\n- **E:** É a variância amostral, não o desvio padrão.",
  "tags": [
    "desvio padrão",
    "amostra"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V091",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "18",
    "titulo": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
    "link": "[[02 - Raciocínio Lógico e Matemático#18. Estatística descritiva (média, moda, mediana, variância e desvio padrão)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §18 – Q1",
    "id_pai": "RLE-0111",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Os valores, em milhares de reais, de 8 empréstimos concedidos em um dia foram: 12, 5, 9, 20, 7, 15, 9 e 30.\n\nA mediana, a moda e a média desses valores são, respectivamente,",
  "imagem": null,
  "alternativas": {
    "A": "13,5; 9 e 13,375.",
    "B": "9; 9 e 13,375.",
    "C": "10,5; 9 e 13,375.",
    "D": "10,5; 30 e 13,375.",
    "E": "10,5; 9 e 15,29."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** Calculou a mediana sem ordenar os dados (média do 4º e 5º termos da lista original: 20 e 7).\n- **B:** Tomou o 4º valor como mediana, sem fazer a média dos dois centrais.\n- **C (correta):** Ordenados: 5, 7, 9, 9, 12, 15, 20, 30. Mediana = (9 + 12)/2 = **10,5**; moda = **9**; média = 107/8 = **13,375**.\n- **D:** Confundiu moda com o maior valor.\n- **E:** Dividiu a soma por 7.",
  "tags": [
    "mediana",
    "moda",
    "média"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V092",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "18",
    "titulo": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
    "link": "[[02 - Raciocínio Lógico e Matemático#18. Estatística descritiva (média, moda, mediana, variância e desvio padrão)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §18 – Q2",
    "id_pai": "RLE-0112",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Na avaliação de um fornecedor, foram atribuídas as notas: preço 6 (peso 2), qualidade 8 (peso 3), prazo 5 (peso 1) e suporte 9 (peso 4).\n\nA média ponderada do fornecedor é",
  "imagem": null,
  "alternativas": {
    "A": "6,5.",
    "B": "7,0.",
    "C": "77.",
    "D": "7,7.",
    "E": "19,25."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Associou os pesos às notas em ordem inversa.\n- **B:** É a média aritmética simples (28/4).\n- **C:** Não dividiu pela soma dos pesos.\n- **D (correta):** Σ(nota × peso) = 6×2 + 8×3 + 5×1 + 9×4 = 12 + 24 + 5 + 36 = 77; Σ pesos = 10; média = **7,7**.\n- **E:** Dividiu 77 pelo número de notas (4), e não pela soma dos pesos.",
  "tags": [
    "média ponderada"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V093",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "18",
    "titulo": "Estatística descritiva (média, moda, mediana, variância e desvio padrão)",
    "link": "[[02 - Raciocínio Lógico e Matemático#18. Estatística descritiva (média, moda, mediana, variância e desvio padrão)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §18 – Q5",
    "id_pai": "RLE-0115",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "A média aritmética dos saldos de 5 contas é R$ 18 mil. Uma sexta conta é incluída e a média dos 6 saldos passa a ser R$ 20 mil.\n\nO saldo da sexta conta é",
  "imagem": null,
  "alternativas": {
    "A": "R$ 30 mil.",
    "B": "R$ 19 mil.",
    "C": "R$ 22 mil.",
    "D": "R$ 20 mil.",
    "E": "R$ 38 mil."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** Soma inicial = 5 × 18 = 90; soma final = 6 × 20 = 120; sexta conta = 120 − 90 = **30** (mil reais).\n- **B:** Fez a média entre as duas médias.\n- **C:** Somou à nova média a diferença entre as médias (20 + 2).\n- **D:** Supôs que a nova conta fosse igual à nova média.\n- **E:** Calculou 20 + 18.",
  "tags": [
    "média"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V094",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Porcentagem e variações sucessivas",
  "ref_apostila": {
    "modulo": "02",
    "secao": "7",
    "titulo": "Porcentagem e variações sucessivas",
    "link": "[[02 - Raciocínio Lógico e Matemático#7. Porcentagem e variações sucessivas]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §7 – Q1",
    "id_pai": "RLE-0056",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "O preço de um software, de R$ 5.000,00, sofreu um aumento de 20% e, meses depois, um desconto de 20% sobre o novo preço.\n\nEm relação ao preço inicial, o preço final ficou",
  "imagem": null,
  "alternativas": {
    "A": "4% maior.",
    "B": "igual ao inicial.",
    "C": "40% menor.",
    "D": "2% menor.",
    "E": "4% menor."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Errou o sinal: 1,2 × 0,8 = 0,96 < 1.\n- **B:** Aumento e desconto de mesmo percentual não se anulam, pois incidem sobre bases diferentes.\n- **C:** Multiplicou 20% × 20% como se fossem 0,2 × 2.\n- **D:** Dividiu a variação por 2.\n- **E (correta):** 5.000 × 1,2 × 0,8 = 5.000 × 0,96 = 4.800, isto é, **4% abaixo** do inicial.",
  "tags": [
    "porcentagem",
    "variações sucessivas"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V095",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Porcentagem e variações sucessivas",
  "ref_apostila": {
    "modulo": "02",
    "secao": "7",
    "titulo": "Porcentagem e variações sucessivas",
    "link": "[[02 - Raciocínio Lógico e Matemático#7. Porcentagem e variações sucessivas]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §7 – Q2",
    "id_pai": "RLE-0057",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Após um desconto de 15%, uma tarifa passou a custar R$ 1.173,00.\n\nO valor da tarifa antes do desconto era",
  "imagem": null,
  "alternativas": {
    "A": "R$ 997,05.",
    "B": "R$ 1.380,00.",
    "C": "R$ 1.564,00.",
    "D": "R$ 1.348,95.",
    "E": "R$ 1.323,00."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** Aplicou novo desconto de 15%.\n- **B (correta):** Valor com desconto = 0,85 × P ⇒ P = 1.173/0,85 = **R$ 1.380,00**.\n- **C:** Dividiu por 0,75, confundindo 15% com 25%.\n- **D:** Acrescentou 15% ao valor com desconto (base errada).\n- **E:** Somou R$ 150,00, como se 15% fossem um valor fixo.",
  "tags": [
    "porcentagem"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V096",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Porcentagem e variações sucessivas",
  "ref_apostila": {
    "modulo": "02",
    "secao": "7",
    "titulo": "Porcentagem e variações sucessivas",
    "link": "[[02 - Raciocínio Lógico e Matemático#7. Porcentagem e variações sucessivas]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §7 – Q4",
    "id_pai": "RLE-0059",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "A inadimplência de uma carteira passou de 4% para 5% dos contratos.\n\nÉ correto afirmar que a inadimplência aumentou",
  "imagem": null,
  "alternativas": {
    "A": "1 ponto percentual, o que corresponde a um aumento relativo de 25%.",
    "B": "25 pontos percentuais.",
    "C": "20%, em termos relativos.",
    "D": "1%, tanto em termos absolutos quanto relativos.",
    "E": "1 ponto percentual, o que corresponde a um aumento relativo de 1,25%."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** Variação absoluta: 5% − 4% = 1 p.p. Variação relativa: 1/4 = **25%**.\n- **B:** A variação absoluta é de 1 p.p.; 25% é a relativa.\n- **C:** Dividiu 1 por 5 (base final) em vez de 4 (base inicial).\n- **D:** Confunde ponto percentual com variação relativa.\n- **E:** Confundiu o fator 1,25 com a taxa de 25%.",
  "tags": [
    "porcentagem",
    "ponto percentual"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V097",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Razão, proporção, regra de três e divisão proporcional",
  "ref_apostila": {
    "modulo": "02",
    "secao": "9",
    "titulo": "Razão, proporção, regra de três e divisão proporcional",
    "link": "[[02 - Raciocínio Lógico e Matemático#9. Razão, proporção, regra de três e divisão proporcional]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §9 – Q3",
    "id_pai": "RLE-0068",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Seis servidores processam 3.600 transações em 20 minutos. Mantido o mesmo ritmo por servidor, em quanto tempo 4 servidores processam 9.000 transações?",
  "imagem": null,
  "alternativas": {
    "A": "12 minutos.",
    "B": "50 minutos.",
    "C": "75 minutos.",
    "D": "30 minutos.",
    "E": "33,3 minutos."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** Inverteu a razão das transações (20 × 1,5 × 3.600/9.000).\n- **B:** Considerou só a variação das transações (20 × 2,5).\n- **C (correta):** Tempo é inversamente proporcional ao nº de servidores e diretamente às transações: t = 20 × (6/4) × (9.000/3.600) = 20 × 1,5 × 2,5 = **75 min**.\n- **D:** Considerou só a variação de servidores (20 × 1,5).\n- **E:** Tratou servidores como diretamente proporcionais ao tempo (20 × 4/6 × 2,5).",
  "tags": [
    "regra de três composta"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V098",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Razão, proporção, regra de três e divisão proporcional",
  "ref_apostila": {
    "modulo": "02",
    "secao": "9",
    "titulo": "Razão, proporção, regra de três e divisão proporcional",
    "link": "[[02 - Raciocínio Lógico e Matemático#9. Razão, proporção, regra de três e divisão proporcional]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §9 – Q3",
    "id_pai": "RLE-0068",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Uma equipe de 12 analistas concluiria a homologação de um sistema em 15 dias. Se a equipe for ampliada para 18 analistas, com a mesma produtividade individual, a homologação será concluída em",
  "imagem": null,
  "alternativas": {
    "A": "22,5 dias.",
    "B": "12 dias.",
    "C": "7,5 dias.",
    "D": "9 dias.",
    "E": "10 dias."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Tratou como diretamente proporcionais (15 × 18/12).\n- **B:** Reduziu 3 dias sem cálculo de proporção.\n- **C:** Usou a razão 12/24 (dobrou a equipe) em vez de 12/18.\n- **D:** Subtraiu 6 dias porque entraram 6 analistas.\n- **E (correta):** Analistas e dias são inversamente proporcionais: 12 × 15 = 18 × d ⇒ d = 180/18 = **10 dias**.",
  "tags": [
    "regra de três",
    "inversamente proporcional"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V099",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Análise combinatória (contagem)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "15",
    "titulo": "Análise combinatória (contagem)",
    "link": "[[02 - Raciocínio Lógico e Matemático#15. Análise combinatória (contagem)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §15 – Q3",
    "id_pai": "RLE-0098",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para formar uma comissão de auditoria, serão escolhidos 3 analistas de um grupo de 9 e 2 gerentes de um grupo de 5, sem distinção de funções dentro da comissão.\n\nO número de comissões diferentes que podem ser formadas é",
  "imagem": null,
  "alternativas": {
    "A": "360.",
    "B": "10.080.",
    "C": "2.002.",
    "D": "840.",
    "E": "94."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Trocou as quantidades: 2 analistas e 3 gerentes (36 × 10).\n- **B:** Usou arranjos, como se a ordem importasse.\n- **C:** Escolheu 5 pessoas quaisquer entre 14, sem respeitar a composição.\n- **D (correta):** C(9,3) × C(5,2) = 84 × 10 = **840** (princípio multiplicativo com combinações).\n- **E:** Somou 84 + 10 em vez de multiplicar.",
  "tags": [
    "combinação",
    "princípio multiplicativo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V100",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Análise combinatória (contagem)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "15",
    "titulo": "Análise combinatória (contagem)",
    "link": "[[02 - Raciocínio Lógico e Matemático#15. Análise combinatória (contagem)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §15 – Q3",
    "id_pai": "RLE-0098",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "De um grupo de 10 desenvolvedores, dos quais 4 são especialistas em segurança, serão escolhidos 4 para um projeto. O número de grupos possíveis com **pelo menos um** especialista em segurança é",
  "imagem": null,
  "alternativas": {
    "A": "80.",
    "B": "195.",
    "C": "336.",
    "D": "210.",
    "E": "15."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** Contou apenas os grupos com exatamente um especialista.\n- **B (correta):** Total: C(10,4) = 210. Sem especialista: C(6,4) = 15. Pelo menos um: 210 − 15 = **195**.\n- **C:** Fixou um especialista e escolheu 3 entre os 9 restantes, contando grupos repetidos.\n- **D:** É o total de grupos, sem a restrição.\n- **E:** É o número de grupos sem nenhum especialista.",
  "tags": [
    "combinação",
    "complementar"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V101",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Análise combinatória (contagem)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "15",
    "titulo": "Análise combinatória (contagem)",
    "link": "[[02 - Raciocínio Lógico e Matemático#15. Análise combinatória (contagem)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §15 – Q1",
    "id_pai": "RLE-0096",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 3,
  "texto_base": null,
  "enunciado": "Com os algarismos 0, 1, 2, 3 e 4, quantos números **pares** de 3 algarismos distintos podem ser formados?",
  "imagem": null,
  "alternativas": {
    "A": "48.",
    "B": "30.",
    "C": "36.",
    "D": "60.",
    "E": "24."
  },
  "gabarito": "B",
  "comentario": "**Gabarito: B.**\n\n- **A:** Contou todos os números de 3 algarismos distintos, pares ou ímpares.\n- **B (correta):** Terminados em 0: 4 × 3 = 12. Terminados em 2 ou 4: para cada um, 3 escolhas para a centena (não 0 nem o final) e 3 para a dezena = 9; 2 × 9 = 18. Total **30** (conferido por enumeração).\n- **C:** Fez 3 × 4 × 3, sem tratar o caso do zero no final.\n- **D:** Usou arranjo de 5 tomados 3 a 3, permitindo o 0 na centena.\n- **E:** Fez 2 × 4 × 3, esquecendo os terminados em 0.",
  "tags": [
    "princípio multiplicativo",
    "arranjo"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V102",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Análise combinatória (contagem)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "15",
    "titulo": "Análise combinatória (contagem)",
    "link": "[[02 - Raciocínio Lógico e Matemático#15. Análise combinatória (contagem)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §15 – Q4",
    "id_pai": "RLE-0099",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "De quantas maneiras 5 pessoas podem sentar-se em torno de uma mesa circular (posições que diferem só por rotação são consideradas iguais) se duas delas, Ana e Beto, devem ficar sempre lado a lado?",
  "imagem": null,
  "alternativas": {
    "A": "6.",
    "B": "24.",
    "C": "120.",
    "D": "12.",
    "E": "48."
  },
  "gabarito": "D",
  "comentario": "**Gabarito: D.**\n\n- **A:** Esqueceu as 2 ordens internas do bloco.\n- **B:** É o total de disposições circulares de 5 pessoas, sem a restrição: (5 − 1)!.\n- **C:** Usou 5!, permutação linear sem restrição.\n- **D (correta):** Trata-se Ana e Beto como um bloco: 4 elementos em círculo ⇒ (4 − 1)! = 6; o bloco admite 2 ordens internas ⇒ 6 × 2 = **12**.\n- **E:** Usou 4! × 2, tratando a mesa como fila.",
  "tags": [
    "permutação circular"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V103",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Sequências (numéricas, de letras e de figuras)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "14",
    "titulo": "Sequências (numéricas, de letras e de figuras)",
    "link": "[[02 - Raciocínio Lógico e Matemático#14. Sequências (numéricas, de letras e de figuras)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §14 – Q1",
    "id_pai": "RLE-0091",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma agência atendeu 12 clientes no 1º dia de uma campanha e, a cada dia seguinte, 7 clientes a mais que no dia anterior.\n\nAo final do 40º dia, o total de clientes atendidos na campanha foi",
  "imagem": null,
  "alternativas": {
    "A": "760.",
    "B": "285.",
    "C": "11.880.",
    "D": "6.080.",
    "E": "5.940."
  },
  "gabarito": "E",
  "comentario": "**Gabarito: E.**\n\n- **A:** Somou 40 × 12 com 40 × 7, como se o acréscimo fosse fixo.\n- **B:** É o número de clientes atendidos só no 40º dia.\n- **C:** Esqueceu de dividir por 2 na fórmula da soma.\n- **D:** Usou a₄₀ = 12 + 40 × 7 (contou uma razão a mais).\n- **E (correta):** PA com a₁ = 12 e r = 7: a₄₀ = 12 + 39 × 7 = 285. Soma = (12 + 285) × 40/2 = **5.940**.",
  "tags": [
    "progressão aritmética",
    "soma da PA"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V104",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Sequências (numéricas, de letras e de figuras)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "14",
    "titulo": "Sequências (numéricas, de letras e de figuras)",
    "link": "[[02 - Raciocínio Lógico e Matemático#14. Sequências (numéricas, de letras e de figuras)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §14 – Q3",
    "id_pai": "RLE-0093",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "Observe a sequência: 2, 5, 11, 23, 47, …\n\nMantido o padrão, o próximo termo é",
  "imagem": null,
  "alternativas": {
    "A": "63.",
    "B": "94.",
    "C": "95.",
    "D": "71.",
    "E": "93."
  },
  "gabarito": "C",
  "comentario": "**Gabarito: C.**\n\n- **A:** Somou 16 ao último termo, sem identificar o padrão.\n- **B:** Apenas dobrou o último termo.\n- **C (correta):** Cada termo é o dobro do anterior mais 1: 47 × 2 + 1 = **95**. (As diferenças 3, 6, 12, 24 dobram, então a próxima é 48.)\n- **D:** Somou 24 à última diferença, como se ela crescesse em PA.\n- **E:** Dobrou e subtraiu 1.",
  "tags": [
    "sequências",
    "recorrência"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V105",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Equivalências e negações (De Morgan, condicional)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "2",
    "titulo": "Equivalências e negações (De Morgan, condicional)",
    "link": "[[02 - Raciocínio Lógico e Matemático#2. Equivalências e negações (De Morgan, condicional)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §2 – Q1",
    "id_pai": "RLE-0031",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 1,
  "texto_base": null,
  "enunciado": "A negação da proposição \"Se a senha expirou, então o acesso é bloqueado\" é:",
  "imagem": null,
  "alternativas": {
    "A": "A senha expirou e o acesso não é bloqueado.",
    "B": "A senha não expirou ou o acesso é bloqueado.",
    "C": "A senha não expirou e o acesso é bloqueado.",
    "D": "Se a senha não expirou, então o acesso não é bloqueado.",
    "E": "Se o acesso é bloqueado, então a senha expirou."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** ~(p → q) ≡ p ∧ ~q: a condicional só é falsa quando o antecedente é verdadeiro e o consequente, falso.\n- **B:** É equivalente à própria condicional (~p ∨ q), não à sua negação.\n- **C:** Negou o antecedente em vez do consequente.\n- **D:** É a inversa, não a negação.\n- **E:** É a recíproca.",
  "tags": [
    "negação",
    "condicional"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});

BANCO.push({
  "id": "RLE-V106",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "gerais",
  "materia": "Raciocínio Lógico e Estatística",
  "eixo": null,
  "topico": "Equivalências e negações (De Morgan, condicional)",
  "ref_apostila": {
    "modulo": "02",
    "secao": "2",
    "titulo": "Equivalências e negações (De Morgan, condicional)",
    "link": "[[02 - Raciocínio Lógico e Matemático#2. Equivalências e negações (De Morgan, condicional)]]"
  },
  "origem": {
    "tipo": "variacao",
    "fonte": "Variação de Apostila 02 §2 – Q5",
    "id_pai": "RLE-0035",
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A negação da proposição \"O pagamento é aprovado se, e somente se, o limite está disponível\" é logicamente equivalente a:",
  "imagem": null,
  "alternativas": {
    "A": "O pagamento é aprovado se, e somente se, o limite não está disponível.",
    "B": "O pagamento é aprovado e o limite não está disponível.",
    "C": "O pagamento não é aprovado se, e somente se, o limite não está disponível.",
    "D": "Se o pagamento é aprovado, então o limite não está disponível.",
    "E": "O pagamento não é aprovado ou o limite está disponível."
  },
  "gabarito": "A",
  "comentario": "**Gabarito: A.**\n\n- **A (correta):** ~(p ↔ q) ≡ p ↔ ~q (também equivale à disjunção exclusiva: ou p, ou q).\n- **B:** É só um dos dois casos em que a bicondicional é falsa.\n- **C:** ~p ↔ ~q equivale a p ↔ q (a própria proposição).\n- **D:** Não cobre o caso em que o pagamento não é aprovado e o limite está disponível.\n- **E:** Equivale a p → q, uma das metades da bicondicional.",
  "tags": [
    "negação",
    "bicondicional"
  ],
  "embaralhavel": true,
  "status": "rascunho",
  "validacao": {
    "por": "agente-2",
    "em": "2026-11-13",
    "obs": "Python: tools/verificacao/agente2/rle_stats.py"
  },
  "versao": 1
});
