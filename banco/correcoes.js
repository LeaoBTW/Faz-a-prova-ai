/*
 * Correções do agente 5 (validador) sobre as questões IMPORTADAS (banco/gerais-*.js e banco/esp-*.js).
 * Esses arquivos são gerados por tools/importar.py; para não perder as correções numa reimportação,
 * elas ficam aqui e são aplicadas ao carregar:
 *   - no app, por app/dados.js (FP.dados.aplicarCorrecoes);
 *   - no validador, por tools/validar_banco.py (carregar/aplicar_correcoes).
 * Cada CORRECOES.push recebe um objeto JSON válido:
 *   {"id": "...", "campos": {"campo": valor, ...}, "motivo": "..."}
 * Cada campo listado substitui o campo inteiro da questão (objetos como ref_apostila vão completos).
 * As variações (banco/variacoes-*.js) NÃO são corrigidas aqui: corrija nos dados do gerador.
 */
window.CORRECOES = window.CORRECOES || [];

CORRECOES.push({
  "id": "ESP-PROG-0006",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    },
    "comentario": "**Gabarito: B.** O Main usa `new Pessoa()` e a propriedade `Nome`, então a classe deve se chamar Pessoa e ter a propriedade com `get { return nome; }` e `set { nome = value; }`. (A) define a classe errada; (C), (D) e (E) têm sintaxe inválida."
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\". Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROG-0011",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    },
    "comentario": "**Gabarito: D.** Os delimitadores `<% %>`, `Request.Form`, `Response.Write` e a sintaxe VBScript (`Dim`, `If ... Then ... End If`) são do ASP clássico."
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\". Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROG-0058",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0059",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0060",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0061",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0062",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0063",
  "campos": {
    "ref_apostila": {
      "modulo": "05",
      "secao": "25",
      "titulo": "C# e ASP/ASP.NET",
      "link": "[[05 - Bancos de Dados e Linguagens#25. C e ASP/ASP.NET|05 §25. C# e ASP/ASP.NET]]"
    }
  },
  "motivo": "Link da apostila 05 §25: o \"#\" de \"C#\" não pode ir no alvo do link do Obsidian (seria lido como subseção); o alvo segue sem ele e o texto exibido passa a mostrar \"C# e ASP/ASP.NET\"."
});

CORRECOES.push({
  "id": "ESP-PROG-0004",
  "campos": {
    "enunciado": "Considere o código Python 2.7 a seguir.\n\n```python\ndef ABC(L, n):\n    while True:\n        if len(L) >= n:\n            return L\n        else:\n            L.append(len(L) ** 2)\nprint ABC([20],10)\n```\n\nO resultado da execução desse código é:",
    "comentario": "**Gabarito: D.** A lista começa com [20] (tamanho 1) e recebe len(L)² enquanto o tamanho for menor que 10: 1, 4, 9, ..., 81. Resultado: [20, 1, 4, 9, 16, 25, 36, 49, 64, 81]."
  },
  "motivo": "Indentação do código restaurada (perdida na importação), sem alterar o conteúdo da prova. Em Python a indentação é sintática: sem ela o código nem compila. Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROG-0005",
  "campos": {
    "enunciado": "Analise o script JS a seguir.\n\n```html\n<script>\nfunction xpto() {\n  let n = 0;\n  return {next:\n    function()\n    {\n      if (n < 10) {\n        n += 2;\n        return {value:n/2, done:false}}\n      else {\n        return {value: -1, done: true}}\n    }\n  }\n}\nsaida = \"\"\nconst n = xpto();\nx = n.next();\nwhile (x.done == false) {\n  saida += x.value + \"/\";\n  x = n.next();\n}\nalert(saida);\n</script>\n```\n\nO resultado da execução desse código é:",
    "comentario": "**Gabarito: C.** A cada next(), n soma 2 e o valor é n/2: 1, 2, 3, 4, 5. Quando n chega a 10, a chamada seguinte retorna done: true e o laço termina. Saída: \"1/2/3/4/5/\"."
  },
  "motivo": "Indentação do código restaurada (perdida na importação), sem alterar o conteúdo da prova. Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROG-0008",
  "campos": {
    "enunciado": "O trecho do código abaixo, foi desenvolvimento na linguagem C++, analise esse código e marque a opção que contém o resultado correto quando ele for executado.\n\n```cpp\nint main() {\n    int v[20] = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19}, i;\n    for (i = 0; i < 10 ; i++) {\n        if (v[i] % 2 == 0) {\n            cout << v[i] << \" \";\n        }\n    }\n    return 0;\n```",
    "comentario": "**Gabarito: D.** O laço percorre v[0] a v[9] e imprime os pares: 0 2 4 6 8. (O trecho omite `#include <iostream>`, o `using namespace std` e a chave final, mas a intenção é clara.)"
  },
  "motivo": "Indentação do código restaurada (perdida na importação), sem alterar o conteúdo da prova. Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0001",
  "campos": {
    "comentario": "**Gabarito: B.** É a única frase sem duplo sentido nem incoerência. (A) \"só jogou porque foi regularizado\" sugere que a regularização bastou para escalá-lo; (C) é impossível perder \"o mesmo gol\" de outra partida; (D) \"sua tática\" é ambíguo (do técnico ou do jogador?); (E) \"os atrasados\" fica vago (salários atrasados?) e pode ser lido como \"os jogadores atrasados\"."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0002",
  "campos": {
    "comentario": "**Gabarito: C.** O observador diz estar \"do lado de fora e diante da porta central\": só descreve o que vê dessa posição. A limitação é o posicionamento físico; nada no trecho indica desinteresse, pressa ou falta de conhecimento."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0003",
  "campos": {
    "comentario": "**Gabarito: D.** O texto declara a época \"perigosa\" e justifica com o descontrole humano, buscando convencer pelo alarme (medo). Não cita autoridades (A), não traz dados científicos (B), não fala em extinção da espécie (C) e a segunda frase justifica a primeira, não se opõe a ela (E)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0004",
  "campos": {
    "comentario": "**Gabarito: E.** Para Chesterton, a impressão de piora vem de as coberturas jornalísticas terem melhorado, isto é, noticiarem mais e melhor o que já acontecia. (C) é errada porque o autor nega que o mundo tenha piorado; (A), (B) e (D) não decorrem da frase."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0005",
  "campos": {
    "comentario": "**Gabarito: B.** É a única frase sem vocabulário negativo: \"grandes novidades\" valoriza o novo. As demais falam em caos (A), objetivos confusos (C), asilo de lunáticos (D) e confusão (E). Observação: na canção de Cazuza o verso é irônico, mas, isolado como na questão, é o único que não expressa visão negativa."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0006",
  "campos": {
    "comentario": "**Gabarito: A.** Querer arrecadar mais leva naturalmente a combater a sonegação. As outras inferências não decorrem das manchetes: chuva no verão não leva turistas ao inverno europeu (B), assaltos não levam a abrir agências (C), corrosão pede recuperação, não novos viadutos (D), e o fim das aulas nada diz da qualidade do ensino (E)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0007",
  "campos": {
    "comentario": "**Gabarito: A.** Em (A), \"se\" equivale a \"já que\" (causa). Nas demais o valor indicado está errado: (B) \"se fossem livres\" é condição; (C) \"para Nova York\" indica direção/destino; (D) \"saber se ele soa bem\" é conjunção integrante (interrogativa indireta); (E) \"com muito orgulho\" indica modo."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0008",
  "campos": {
    "comentario": "**Gabarito: E.** \"Índice subiu 20% há cinco anos\" usa o pretérito para fato de passado distante, como manda a regra. Os demais títulos violam a própria regra citada: voz passiva em (A); \"Polícia\" (instituição) acusada no lugar dos policiais em (B); presente para ação daqui a dois anos em (C); \"um morador de rua\" impreciso em (D)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0009",
  "campos": {
    "comentario": "**Gabarito: B.** *Backup* é cópia de segurança de arquivos. *Airbag* é bolsa inflável de proteção (não freio), *cartoon* é desenho/caricatura, *on-line* é conectado à rede e *playback* é reprodução de som gravado."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0010",
  "campos": {
    "comentario": "**Gabarito: C.** Fazer greve logo depois de receber aumento é fato contrário ao esperado, o que pede conector concessivo (\"embora\"). Conclusão (A, E) e causa (B) tornam a relação ilógica, e (D) inverte a concessão."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0011",
  "campos": {
    "comentario": "**Gabarito: A.** Em (A) o senhor fala as duas línguas com facilidade: \"ou\" inclusivo, com valor de adição. Em (B) e (E) há alternância/exclusão, em (C) alternância enfática e em (D) \"ou\" introduz uma denominação equivalente (retificação/explicação)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0012",
  "campos": {
    "comentario": "**Gabarito: D.** \"Comércio\", \"fortes\" e \"fracos\" (operar contra) associam vocabulário econômico a uma visão negativa (exploração dos fracos). (A) e (C) não são negativas, (B) tem só \"impostos\" e é sobre inevitabilidade, e (E) é ironia sobre economistas, não sobre a economia."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0013",
  "campos": {
    "comentario": "**Gabarito: C.** Roberto perdeu o início do filme e não tem as informações anteriores necessárias para entender a cena: falta de repertório (conhecimento) do receptor. Código, ambiguidade e densidade da mensagem não são o problema."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0014",
  "campos": {
    "comentario": "**Gabarito: D.** O trecho entre parênteses (\"os filmes de terror ou de ficção científica, por exemplo\") exemplifica a noção vaga de \"certos gêneros\", tornando-a clara."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0015",
  "campos": {
    "comentario": "**Gabarito: E.** Informa o quê (transbordou), onde (rio Gavião, RS), quando (tarde de ontem, dia 28) e por quê (chuvas). As outras deixam lacunas (qual projeto, que encontro, onde) ou trazem opinião (D)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0016",
  "campos": {
    "comentario": "**Gabarito: A.** O texto defende uma tese (a neutralidade jornalística é uma impostura) com argumentos de autoridade (Meyer, Abramo) e conclusão: é dissertativo-argumentativo. Não narra fatos (B), não descreve (C) nem dá instruções (D)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0017",
  "campos": {
    "comentario": "**Gabarito: B.** A tese é que a busca pela neutralidade é uma \"impostura perigosa\" que compromete o jornalismo, isto é, a insistência na imparcialidade prejudica a informação. As demais deturpam o texto."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0018",
  "campos": {
    "comentario": "**Gabarito: C.** O texto retoma termos por anáforas (\"essa ideia\", \"Ele\", \"esse mito\"), evitando repetições. Há conectivos entre parágrafos (\"No entanto\", \"Em resumo\"), o que derruba (A) e (B), e há repertório (Meyer, Abramo), o que derruba (D)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0019",
  "campos": {
    "comentario": "**Gabarito: D.** \"renomado jornalista brasileiro\", entre vírgulas, explica o substantivo \"Cláudio Abramo\": aposto explicativo."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0020",
  "campos": {
    "comentario": "**Gabarito: D.** As vírgulas separam os termos enumerados (\"Livros, discos, vídeos\"), que funcionam como núcleos coordenados, e são obrigatórias. A crase de \"à mancheia\" (locução adverbial feminina) também é obrigatória, e não há sujeito indeterminado ou inexistente. A banca chama os termos de \"sujeitos compostos\"; a rigor, é uma enumeração sem verbo expresso."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0021",
  "campos": {
    "comentario": "**Gabarito: D.** O verso alude a Fernando Pessoa e a Guimarães Rosa (\"o Rosa\"): intertextualidade, vários textos dentro de um. Guimarães Rosa é brasileiro (A falsa), e amor e amizade são comparados, não sinônimos (C)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0022",
  "campos": {
    "comentario": "**Gabarito: A.** \"Minha pátria é minha língua\": a língua une falantes além das fronteiras políticas. As demais afirmações não estão no texto."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0023",
  "campos": {
    "comentario": "**Gabarito: C.** O texto relata fatos atuais (data de estreia, elenco, direção) sem opinião do autor: é notícia. Não é argumentativo (A) nem post de rede social (D)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0024",
  "campos": {
    "comentario": "**Gabarito: B.** I é falsa: Arraes diz que a trama será original. II é falsa: o texto não fala da reação de Suassuna. III é falsa: o segundo filme é dirigido por Guel Arraes e Flávia Lacerda, e a afirmação sobre o roteiro original refere-se só ao novo longa."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0025",
  "campos": {
    "comentario": "**Gabarito: C.** \"que não possamos comparecer\" é oração subordinada substantiva subjetiva desenvolvida (sujeito de \"é possível\"), como \"que saibamos o papel...\" em (C). (A) e (D) são completivas nominais, e (B), embora também subjetiva, é reduzida de infinitivo."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0026",
  "campos": {
    "comentario": "**Gabarito: C.** I é falsa: o \"que\" da linha 1 retoma o substantivo \"arboviroses\" e introduz oração adjetiva explicativa (após vírgula). II é falsa: a troca por um relativo variável é possível com a concordância adequada. III é verdadeira: os dois \"que\" são pronomes relativos."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0027",
  "campos": {
    "comentario": "**Questão anulada pela banca.** O trecho tem quatro períodos, a crase de \"associadas à introdução\" é obrigatória e há locuções verbais (\"tenha vindo\", \"vem ocorrendo\"), por isso (B) e (C) são verdadeiras. Já (A) é falsa (\"tenha vindo\" é uma locução, não duas orações coordenadas) e (D) também (só \"vem ocorrendo\" tem gerúndio; \"tenha vindo\" tem particípio). Com duas alternativas incorretas, a questão foi anulada."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0028",
  "campos": {
    "comentario": "**Gabarito: D (afirmação incorreta).** Os prefixos tônicos *pré*, *pós* e *pró* são acentuados e ligados por hífen (pré-escolar, pós-graduação), e os átonos se juntam sem hífen (prever, pospor). As demais estão corretas: hífen/hifens, \"história\" (paroxítona terminada em ditongo ou proparoxítona eventual) e o fim do acento em feiura e baiuca."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0029",
  "campos": {
    "comentario": "**Gabarito: A.** As duas grafias são aceitas (cotidiano/quotidiano). \"Quatorze\" também é usada no Brasil (B); *akademía* é grego, não latim (C); *alter ego* é expressão latina (D)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "LP-0030",
  "campos": {
    "comentario": "**Gabarito: B.** Neologismo literário (ou estilístico) é criado por escritores, poetas e compositores (ex.: Guimarães Rosa). Estrangeirismos costumam ser aportuguesados (sutiã, balé), o que derruba (C); os demais rótulos não correspondem à classificação usual (popular/semântico, técnico-científico)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0001",
  "campos": {
    "comentario": "**Gabarito: D.** 17 × 27.000 = 459.000 m² e 18 × 24.000 = 432.000 m². A diferença é 27.000 m² = 2,7 hectares."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0002",
  "campos": {
    "comentario": "**Gabarito: C.** \"Se ~p, então q\" equivale a \"p ou q\" (¬¬p ∨ q): \"Tem cão ou caça com gato\". (A) e (B) não são equivalentes (inversa e recíproca com negação), e (D) e (E) mudam a tabela-verdade."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0003",
  "campos": {
    "comentario": "**Gabarito: A.** 86 ÷ 6 ≈ 14,33: se todos atendessem no máximo 14, seriam no máximo 84 clientes, então pelo menos um atende mais de 14. (C) é falsa porque 86 não é múltiplo de 6; (D) é impossível (3 × 20 = 60 deixa 26 para três, abaixo de 3 × 9 = 27); (E) é falsa: 3 × 9 + 3 × 20 = 87 ≥ 86, então três podem atender o mínimo."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0004",
  "campos": {
    "comentario": "**Gabarito: A.** Testando as 6 distribuições, a única com exatamente uma afirmação verdadeira é Hugo–multimercado, Lauro–previdência, Mário–ações (só \"Mário não trabalha com multimercado\" é verdadeira)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0005",
  "campos": {
    "comentario": "**Gabarito: C.** Em 100 funcionários: 65 homens e 35 mulheres; 1/5 das mulheres (7) têm curso superior, logo 28 não têm. As mulheres são 1/3 dos sem curso superior, então estes são 84, dos quais 56 homens. Homens com curso superior: 65 − 56 = 9, ou seja, 9%."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0006",
  "campos": {
    "comentario": "**Gabarito: C.** Se Priscila fosse paulista, Joel seria capixaba (1ª); então Gabriela seria carioca (contrapositiva da 2ª); então Priscila não seria paulista (3ª), contradição. Logo Priscila não é paulista. Nada se pode afirmar sobre Gabriela e Joel."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0007",
  "campos": {
    "comentario": "**Gabarito: E.** Há 87 pares e 135 ímpares. Os 37 grupos ímpar-ímpar usam 74 ímpares; os 61 ímpares restantes formam 61 grupos mistos, consumindo 61 pares. Sobram 26 pares, que formam 13 grupos par-par."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0008",
  "campos": {
    "comentario": "**Gabarito: B.** Em ordem alfabética (A, B, C, N, O): começam com A ou B 2 × 24 = 48 anagramas. Com C: CA_ _ _ em ordem: CABNO (49), CABON (50), CANBO (51)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0009",
  "campos": {
    "comentario": "**Gabarito: E.** Soma = 5 × 17 = 85 e o termo do meio é 23. Os dois maiores somam pelo menos 46, então os dois menores somam no máximo 85 − 23 − 46 = 16, e o menor é no máximo 8; o maior é pelo menos 23. A diferença mínima é 23 − 8 = 15 (ex.: 8, 8, 23, 23, 23)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0010",
  "campos": {
    "comentario": "**Gabarito: A.** Os pares ordenados consecutivos são (1,2), (2,3), (3,4), (4,5), (5,6) e os inversos: 10 dos 36 resultados. 10/36 = 5/18."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0011",
  "campos": {
    "comentario": "**Gabarito: A.** No gráfico da prova, a curva realizada está abaixo da planejada na semana 18 (atraso) e o caminho crítico projetado volta a encontrar a curva planejada na semana 21. Observação: a figura original não foi reproduzida no banco; a questão depende do gráfico."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0012",
  "campos": {
    "comentario": "**Gabarito: D.** 1º amigo: 1/2 + 1/4 (2 partes), restam 1/4. 2º amigo: 1/8 + 1/3 de 1/8 = 1/24 (2 partes), restam 1/12. 3º amigo: divide o restante em 2 partes. Total: 2 + 2 + 2 = 6 partes."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0013",
  "campos": {
    "comentario": "**Gabarito: C.** Total > 1.000 mil e o produto 1 fatura 100 mil, logo produtos 2 + 3 > 900 mil. Não se sabe nada de cada um separadamente, nem se o produto 1 é o menor."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0014",
  "campos": {
    "comentario": "**Gabarito: D.** 10% de 50,1 = 5,01; 91,53 − 5,01 = 86,52 mil, próximo de 86 mil. (B): (0,23 + 23,5)/2 ≈ 11,87 < 12,3; (C): 0,9/91,53 ≈ 1%, não 9%; (A) não faz sentido, pois os valores variam em torno da média (≈ 15,26)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0015",
  "campos": {
    "comentario": "**Gabarito: B.** São 13 gravatas, 5 lisas e 8 não lisas. P(1ª não lisa e 2ª lisa) = 8/13 × 5/12 = 40/156 ≈ 25,64%."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0016",
  "campos": {
    "comentario": "**Gabarito: C.** 80a + 50b = 1.000 tem soluções (a, b) = (0, 20), (5, 12), (10, 4). O menor total de sacos é 10 + 4 = 14."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0017",
  "campos": {
    "comentario": "**Gabarito: D.** 35 cm × 12.000 = 420.000 cm = 4.200 m = 4,2 km."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0018",
  "campos": {
    "comentario": "**Gabarito: D.** Ida: (120 + 50 + 250) km ÷ (2 + 1 + 4) h = 420 ÷ 7 = 60 km/h. Volta: 420 ÷ 5 = 84 km/h."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0019",
  "campos": {
    "comentario": "**Gabarito: D.** x = 7x/8 + 7/8 ⇒ x/8 = 7/8 ⇒ x = 7."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0020",
  "campos": {
    "comentario": "**Gabarito: D.** Bastam três pessoas: avô, pai e filho. O pai é pai e filho; o avô é pai; o filho é filho e neto. Logo x = 3."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0021",
  "campos": {
    "comentario": "**Gabarito: B.** Após o 1º dia restam 70%; no 2º dia percorre 20% disso (14%), restando 70% × 0,8 = 56%."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0022",
  "campos": {
    "comentario": "**Gabarito: D.** A negação de \"Todo A é B\" é \"Algum A não é B\". \"Nenhum A é B\" (A) é a contrária, não a negação."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0023",
  "campos": {
    "comentario": "**Gabarito: C.** Sejam p = só Python, j = só Java e a = ambos. a = j/2 e j + a = 3p ⇒ p = j/2. Então p + j + a = 2j = 12 ⇒ j = 6 e a = 3."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0024",
  "campos": {
    "comentario": "**Gabarito: B.** \"Alguns programadores são especialistas em BD\" equivale a \"existem especialistas em BD que são programadores\". (A) inverte a inclusão; (C) e (D) não podem ser garantidas."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "RLE-0025",
  "campos": {
    "comentario": "**Gabarito: D.** Partes 2 + 3 + 5 = 10; cada parte vale R$ 100. O mais velho (5) recebe R$ 500."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0001",
  "campos": {
    "comentario": "**Gabarito: A.** A transferência de recursos entre superavitários e deficitários ocorre nos quatro mercados do SFN: monetário, de crédito, de capitais e cambial. Bancos, Banco Central, bolsas e CVM são participantes ou reguladores de partes desse sistema, não a explicação do todo."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0002",
  "campos": {
    "comentario": "**Gabarito: C.** O BCB executa a política monetária (open market, compulsório, redesconto), seguindo as diretrizes do CMN. Política fiscal e superávit primário são do Tesouro/Ministério da Fazenda; bolsas e ofertas públicas são reguladas pela CVM."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0003",
  "campos": {
    "comentario": "**Gabarito: C.** Para manter a Selic diária próxima da meta definida pelo Copom, o BCB compra e vende títulos públicos no mercado secundário: operações de mercado aberto (open market). Desde a LRF, o BCB não emite títulos próprios; a emissão de títulos públicos é do Tesouro."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0004",
  "campos": {
    "comentario": "**Questão anulada pela banca.** Lotéricas atuam como correspondentes no País, contratadas por instituições financeiras conforme regras do CMN e do BCB (Res. CMN 3.954/2011, hoje Res. CMN 4.935/2021). Como as duas instâncias participam da regulamentação, mais de uma alternativa pode ser defendida."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0005",
  "campos": {
    "comentario": "**Questão anulada pela banca.** O CMN não \"fiscaliza\" taxas: ele fixa a meta de inflação, enquanto o Copom define a meta da Selic e o BCB fiscaliza as instituições financeiras. Nenhuma alternativa corresponde corretamente à competência descrita."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0006",
  "campos": {
    "comentario": "**Gabarito: A.** Selic diária (8%) acima da meta (6,25%) indica falta de liquidez nas reservas bancárias. O BCB compra títulos, injetando reservas, o que derruba a taxa até a meta. Vender títulos (B) ou reduzir a moeda (C) elevaria ainda mais a taxa."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0007",
  "campos": {
    "comentario": "**Gabarito: B.** Os órgãos normativos do SFN são o CMN, o CNSP e o CNPC. BCB, CVM, Susep e Previc são supervisores; bancos, caixas e bolsas são operadores."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0008",
  "campos": {
    "comentario": "**Gabarito: E.** Criptomoedas não são emitidas nem garantidas por autoridade monetária, não têm lastro em ativos reais nem garantia de conversão em moeda soberana; seu valor depende da confiança dos usuários."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0009",
  "campos": {
    "comentario": "**Gabarito: B.** Operadores são as instituições que ofertam serviços financeiros e intermedeiam recursos (bancos, cooperativas, corretoras etc.). (A) e (C) descrevem supervisores; (D) descreve órgãos normativos."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0010",
  "campos": {
    "comentario": "**Questão anulada pela banca.** Formular a política da moeda e do crédito é competência do CMN (A); intermediar recursos é papel dos bancos (B); normatizar o mercado de valores mobiliários é da CVM (C); e o BCB não executa a política fiscal (D). Nenhuma alternativa está correta."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0011",
  "campos": {
    "comentario": "**Gabarito: D.** O recolhimento compulsório é instrumento de controle da liquidez (reduz o multiplicador bancário) e funciona como colchão de liquidez: em crises (2008, 2020) o BCB reduziu as alíquotas e liberou esses recursos aos bancos. (B) erra ao condicionar a liberação a decreto federal; (A) e (C) confundem compulsório com crédito direcionado. Observação: a apostila 03 §3.6 destaca a função de controle da liquidez, mais completa que a da alternativa oficial."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0012",
  "campos": {
    "comentario": "**Gabarito: A.** A SEP faz empréstimos entre pessoas (peer-to-peer) e pode captar recursos do público vinculados a cada operação; a SCD empresta apenas com capital próprio, sem captar do público. (B) inverte os papéis; o limite de R$ 15 mil por credor na SEP não torna as duas iguais (D)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0013",
  "campos": {
    "comentario": "**Gabarito: B.** O CDI (Certificado de Depósito Interbancário) lastreia empréstimos entre instituições financeiras. CDB e RDB captam do público, e LTN é título do Tesouro."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0014",
  "campos": {
    "comentario": "**Gabarito: C.** No CDC o bem costuma ficar alienado fiduciariamente à financeira, que pode retomá-lo em caso de inadimplência. Os prazos não têm esse limite fixo (A); no pós-fixado as prestações variam com o indexador (B); arrendamento com VRG é leasing (D)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0015",
  "campos": {
    "comentario": "**Gabarito: D.** Pela classificação da CVM, o principal fator de risco dos fundos de renda fixa é a variação da taxa de juros, do índice de preços ou de ambos. (A) descreve fundos de ações; (B), multimercado; (C) é risco de crédito, que não define a classe."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0016",
  "campos": {
    "comentario": "**Gabarito: A.** O banco comercial intermedeia recursos e capta depósitos à vista e a prazo. Banco de investimento não capta depósitos à vista (B); o múltiplo reúne carteiras, não só câmbio (C); o banco de câmbio não concede capital de giro ou fixo (D)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0017",
  "campos": {
    "comentario": "**Gabarito: A.** O Índice de Basileia relaciona o patrimônio de referência aos ativos ponderados pelo risco: mostra se o banco tem capital suficiente para absorver perdas. Não mede internacionalização, aderência normativa ou compulsório."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0018",
  "campos": {
    "comentario": "**Gabarito: C (não é tendência).** A tendência atual é ampliar o acesso (inclusão financeira, bancos digitais, Pix), não concentrar o crédito nos mais ricos. Competição, mais instrumentos de intermediação e canais digitais são tendências reais."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0019",
  "campos": {
    "comentario": "**Gabarito: B.** O CMN formula a política da moeda e do crédito (monetária, cambial e creditícia). Regular o mercado de capitais é da CVM; fiscalizar instituições financeiras é do BCB; o orçamento público é do Executivo."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0020",
  "campos": {
    "comentario": "**Gabarito: C.** O CMN é composto pelo Ministro da Fazenda (presidente), pelo Ministro do Planejamento e Orçamento e pelo Presidente do BCB. O \"Ministério da Economia\" deixou de existir em 2023."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0021",
  "campos": {
    "comentario": "**Questão anulada pela banca.** O objetivo do Copom é definir a meta da taxa Selic. As metas de inflação são fixadas pelo CMN (B), fiscalizar instituições é do BCB (A), o mercado de capitais é da CVM (C) e as reservas internacionais são administradas pelo BCB, não pelo Copom (D). Nenhuma alternativa está correta."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0022",
  "campos": {
    "comentario": "**Gabarito: C.** Na política monetária, o BCB controla a emissão de moeda e a liquidez da economia. Fiscalizar instituições é função de supervisão (não de política monetária), mercado de capitais é da CVM e orçamento é do Executivo."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0023",
  "campos": {
    "comentario": "**Gabarito: D.** A CVM regulamenta e fiscaliza o mercado de valores mobiliários, inclusive as ações de companhias abertas, e pune irregularidades (como no caso Americanas). Câmbio é do BCB, e normas bancárias são do CMN/BCB."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0024",
  "campos": {
    "comentario": "**Gabarito: C.** Criptoativos usam blockchain (registro distribuído e criptografia) para dar segurança às transações sem intermediário central. São descentralizados (A falsa), dispensam intermediários (B falsa) e são muito voláteis (D falsa)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0025",
  "campos": {
    "comentario": "**Gabarito: D.** Open banking (hoje Open Finance) é o compartilhamento padronizado de dados e serviços entre instituições, via APIs, mediante consentimento do cliente. Não é integração com o BCB (A), nem plataforma internacional (B), nem crédito subsidiado (C)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ATU-0039",
  "campos": {
    "comentario": "**Gabarito: Certo.** O Banco Central exerce a Secretaria-Executiva do CMN: organiza as reuniões e publica as resoluções (apostila 03 §2)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ETI-0001",
  "campos": {
    "comentario": "**Gabarito: B.** No Guia de Conduta Ética do Banestes, prudência é ter atenção e cuidado com os assuntos do trabalho, evitando riscos ao patrimônio e à imagem da instituição. As demais alternativas descrevem atribuições de órgãos reguladores (CVM, BCB, CNSP)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ETI-0002",
  "campos": {
    "comentario": "**Gabarito: D.** O art. 1º da Lei 9.613/1998 tipifica \"ocultar ou dissimular a natureza, origem, localização, disposição, movimentação ou propriedade de bens, direitos ou valores\" provenientes de infração penal. As outras condutas são crimes diferentes (insider trading, fraude contábil, crimes tributários e evasão de divisas) ou nem são crime por si sós."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ETI-0003",
  "campos": {
    "comentario": "**Gabarito: A.** A Lei 9.613/1998 trata dos crimes de lavagem de dinheiro e criou o COAF. As Leis 8.212 e 8.213/1991 são previdenciárias, e a 9.605/1998 é a dos crimes ambientais. (O financiamento do terrorismo tem lei própria, a Lei 13.260/2016, mas a 9.613 é a resposta esperada.)"
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ETI-0004",
  "campos": {
    "comentario": "**Gabarito: A.** Os \"Rs\" da consciência ambiental citados no Guia são reduzir, reutilizar, reciclar e repensar. As outras listas trocam ou omitem itens. Observação: esse trecho do Guia não está detalhado na apostila 03 §12."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ETI-0005",
  "campos": {
    "comentario": "**Gabarito: D.** O Conselho de Conduta Ética é paritário: 3 titulares e 3 suplentes indicados pela Diretoria e 3 titulares e 3 suplentes eleitos pelos empregados do SFB, 12 pessoas no total (apostila 03 §12.9)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ETI-0026",
  "campos": {
    "comentario": "**Gabarito: Certo.** O Guia considera conivente o profissional que tem conhecimento de conduta contrária às suas disposições e deixa de comunicá-la (apostila 03 §12.9)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-BD-0001",
  "campos": {
    "comentario": "**Gabarito: C.** O isolamento entre transações concorrentes é garantido por bloqueios (locks), como no protocolo de bloqueio em duas fases (ou por MVCC). Commit e logging servem à atomicidade e à durabilidade; cache e syncpoint não garantem isolamento."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-BD-0002",
  "campos": {
    "comentario": "**Gabarito: C.** Várias pessoas podem morar no mesmo endereço, então o endereço não determina o CPF. CPF e RG identificam a pessoa e, por isso, determinam nome, RG/CPF e endereço."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-BD-0003",
  "campos": {
    "comentario": "**Gabarito: A.** Executado no SQLite: o filtro deixa t1 = {(1,3)}, t2 = {(100,42), (120,33)} e t3 com E > 19 = {20, 40}. O produto agrupado por (t1.A, t2.C) gera 2 linhas: (1, 100, 60) e (1, 120, 60)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-BD-0004",
  "campos": {
    "comentario": "**Gabarito: B.** Só há uma linha de T3 com E nulo: (2, 100, NULL), e T2 tem C = 100. Assim, o NOT EXISTS elimina apenas A = 2, e o resultado é (1, 3) e (4, 2) (conferido no SQLite)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-BD-0005",
  "campos": {
    "comentario": "**Gabarito: A.** Cada chave estrangeira é declarada separadamente: `foreign key (coluna) references Tabela(coluna)`. As demais formas não existem em SQL."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-BD-0006",
  "campos": {
    "comentario": "**Gabarito: D.** min(E) = 10 (o NULL é ignorado). As linhas com E = 10 são (2, 120, 10) e (2, 110, 10), e A = 2 aparece mais de uma vez em T3, então ambas são removidas (conferido no SQLite)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-BD-0007",
  "campos": {
    "comentario": "**Gabarito: B.** Qualquer comparação com NULL (`= NULL`, `<> NULL`) resulta em UNKNOWN, e NOT UNKNOWN continua UNKNOWN: I e III não retornam linhas. II (`not (E is NULL)`) retorna as 4 linhas com E preenchido. Logo, só I e III são equivalentes."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-BD-0008",
  "campos": {
    "comentario": "**Gabarito: A.** As restrições de integridade clássicas do modelo relacional são de entidade (chave primária única e não nula), de domínio (valores válidos para o atributo) e referencial (chave estrangeira). \"Integridade de relacionamento\" ou \"de cardinalidade\" não são categorias usuais."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-BD-0009",
  "campos": {
    "comentario": "**Gabarito: A.** A view (tabela virtual) junta Cliente e Pedido e, para cada cliente (GROUP BY), mostra o ID, o nome completo (concatenação com `||`) e a soma dos valores dos pedidos. Os clientes sem pedidos ficam de fora, pois o JOIN é interno."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-BD-0010",
  "campos": {
    "comentario": "**Gabarito: B.** A cláusula `ON UPDATE CASCADE` propaga a atualização da chave na tabela pai para as linhas filhas. `ON DELETE CASCADE` (A) trata da exclusão. A alternativa oficial omite o \"ON\", mas é a única que corresponde à instrução."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-BD-0011",
  "campos": {
    "comentario": "**Gabarito: A.** INNER JOIN retorna só as linhas com correspondência nas duas tabelas. OUTER JOIN preserva também as linhas sem correspondência (de uma tabela no LEFT/RIGHT ou de ambas no FULL). A descrição da alternativa corresponde ao FULL OUTER JOIN, que é a leitura pretendida."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-GOV-0001",
  "campos": {
    "comentario": "**Gabarito: B.** Stakeholders são todas as partes interessadas ou afetadas por um projeto ou organização: clientes, acionistas, empregados, fornecedores, reguladores etc. As demais alternativas listam apenas alguns grupos."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-GOV-0002",
  "campos": {
    "comentario": "**Gabarito: C.** Um ERP integra os processos de negócio da empresa (finanças, compras, estoque, RH) e é exemplo típico de TIC aplicada aos negócios. As demais são serviços ou produtos, não aplicações de TIC à gestão do negócio."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-GOV-0003",
  "campos": {
    "comentario": "**Gabarito: C.** A governança de TIC busca melhorar a eficiência e a eficácia dos processos, alinhar a TI ao negócio e aumentar a transparência. As demais alternativas descrevem efeitos opostos."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-GOV-0007",
  "campos": {
    "comentario": "**Gabarito: B.** Para o ITGI, a governança de TI é responsabilidade da alta administração (conselho e diretoria executiva) e parte integrante da governança corporativa, não um assunto exclusivo da área de TI."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-GOV-0009",
  "campos": {
    "comentario": "**Gabarito: Certo.** As quatro perspectivas do Balanced Scorecard (Kaplan e Norton) são financeira, clientes, processos internos e aprendizado e crescimento."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-GOV-0021",
  "campos": {
    "comentario": "**Gabarito: Certo.** No ITIL 4, problema é a causa ou causa potencial de um ou mais incidentes, e erro conhecido é um problema já analisado e ainda não resolvido."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-GOV-0023",
  "campos": {
    "comentario": "**Gabarito: Certo.** As quatro dimensões do ITIL 4 são organizações e pessoas; informação e tecnologia; parceiros e fornecedores; fluxos de valor e processos."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-GOV-0024",
  "campos": {
    "comentario": "**Gabarito: C.** Mudança padrão é de baixo risco, bem compreendida e pré-autorizada, executada sem nova avaliação. A normal passa por avaliação e autorização; a emergencial precisa ser feita o quanto antes."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-GOV-0026",
  "campos": {
    "comentario": "**Gabarito: E.** Os seis princípios da ISO/IEC 38500:2015 são responsabilidade, estratégia, aquisição, desempenho, conformidade e comportamento humano. Automação não é princípio. (A edição 2024 passou a adotar 11 princípios da ISO 37000.)"
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-GOV-0027",
  "campos": {
    "comentario": "**Gabarito: Certo.** A ISO/IEC 20000-1 especifica requisitos de um sistema de gestão de serviços (SGS) e é certificável."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-GOV-0029",
  "campos": {
    "comentario": "**Gabarito: Certo.** A ISO/IEC 38500:2024 alinhou-se à ISO 37000:2021 e passou de seis para onze princípios (propósito, geração de valor, estratégia, supervisão, prestação de contas etc.), conforme a apostila 03 §16."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-GOV-0042",
  "campos": {
    "comentario": "**Gabarito: Certo.** O PDTIC é o instrumento de planejamento tático de TIC; contém, entre outros, o inventário de necessidades e o plano de metas e ações (além dos planos de pessoal, orçamentário e de riscos)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0001",
  "campos": {
    "comentario": "**Gabarito: E.** Sprints, papéis definidos, entrega ao fim do sprint e mudanças evitadas durante o sprint caracterizam o Scrum; fluxo contínuo, ausência de papéis obrigatórios, entrega contínua e mudanças a qualquer momento caracterizam o Kanban."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0002",
  "campos": {
    "comentario": "**Gabarito: B.** Conferir os documentos enviados é algo que o sistema interno deve permitir ao usuário fazer: um requisito funcional. Os demais rótulos referem-se a qualidades (requisitos não funcionais) ou não são categorias usuais."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0003",
  "campos": {
    "comentario": "**Gabarito: C.** Para a banca, o campo sem validação de formato deixa de prevenir erros do usuário, o que é uma falha de usabilidade (prevenção de erros é uma das heurísticas de Nielsen). Manutenibilidade e reparabilidade tratam da facilidade de alterar e corrigir o software. Observação: a falta de validação também pode ser lida como falha de integridade/confiabilidade dos dados, mas o gabarito oficial é usabilidade."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0004",
  "campos": {
    "comentario": "**Gabarito: B.** O diagrama de atividades da UML 2.5.1 modela fluxos de controle e de dados de procedimentos (fluxos de trabalho), adequado para detalhar o comportamento de um caso de uso. Causa e efeito (Ishikawa) e \"ocorrências\" não são diagramas UML."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0005",
  "campos": {
    "comentario": "**Gabarito: D.** O brainstorming complementa as entrevistas ao estimular as partes interessadas a expor ideias e prioridades. (A) é verdade, mas não é técnica de elicitação; (B) erra ao dizer que o protótipo valida requisitos com os desenvolvedores (é com os usuários); (C) descreve modelagem, não otimização de entrevistas."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0006",
  "campos": {
    "comentario": "**Gabarito: A.** JAD é uma técnica de oficinas (workshops) estruturadas, com facilitador, em que usuários e desenvolvedores definem juntos os requisitos. As demais alternativas são vagas ou descrevem outras técnicas."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0007",
  "campos": {
    "comentario": "**Gabarito: B.** Validar requisitos é confirmar que eles (e o sistema) atendem às necessidades reais do cliente e dos usuários (\"construir o produto certo\"). Comparar implementação e especificação é verificação."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0008",
  "campos": {
    "comentario": "**Gabarito: D.** Workshops colaborativos reúnem várias partes interessadas (negócio, segurança, infraestrutura, usuários) e favorecem a discussão de restrições e qualidades como desempenho, segurança e usabilidade. As outras técnicas também ajudam, mas a banca considera os workshops os mais apropriados."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0009",
  "campos": {
    "comentario": "**Gabarito: D.** Cenários e histórias de uso descrevem interações do usuário com o sistema, base da técnica de casos de uso."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0010",
  "campos": {
    "comentario": "**Gabarito: C.** A matriz de rastreabilidade liga cada requisito à sua origem e aos artefatos de projeto, código e testes, permitindo análise de impacto e conferência de cobertura."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0011",
  "campos": {
    "comentario": "**Gabarito: A.** A principal dificuldade é construir protótipos representativos o bastante do sistema final, sem que gerem expectativas erradas. (B) não é inerente (protótipos devem ser baratos), e (C) e (D) não são dificuldades típicas citadas na literatura."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0012",
  "campos": {
    "comentario": "**Gabarito: D.** Diagramas de classe, objeto e componente são estruturais. Atividade (A) e caso de uso (B) são comportamentais. Pacote e perfil (C) também são estruturais, mas a banca pede os principais, ligados a instâncias e componentes físicos."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROC-0013",
  "campos": {
    "comentario": "**Gabarito: A.** Descobrir e entender os requisitos é a elicitação (levantamento). Engenharia de requisitos é o processo inteiro (elicitação, análise, especificação, validação e gerência)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROG-0001",
  "campos": {
    "comentario": "**Gabarito: A.** Na primeira passada, o 16 \"borbulha\" até o fim por trocas entre vizinhos ([8, 6, 14, 12, 4, 16]); na segunda, o 14 vai para a penúltima posição, e assim por diante. Esse é o padrão do Bubble Sort."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROG-0002",
  "campos": {
    "comentario": "**Gabarito: A.** Com chaves inteiras únicas e boa função de hash (praticamente sem colisões), a busca na tabela hash é O(1) em média."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROG-0003",
  "campos": {
    "comentario": "**Gabarito: E.** +31 = 011111; invertendo os bits (100000) e somando 1, obtém-se 100001. Também se pode calcular 2⁶ − 31 = 33 = 100001."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROG-0007",
  "campos": {
    "comentario": "**Gabarito: C.** PyQt é o binding Python do framework Qt para criar interfaces gráficas (janelas, botões, widgets). Não é ferramenta de linha de comando, comunicação web ou APIs REST."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROG-0009",
  "campos": {
    "comentario": "**Gabarito: A.** O polimorfismo permite programar contra abstrações (interfaces/superclasses), reduzindo o acoplamento e facilitando trocar implementações. Java não tem herança múltipla de classes (C), e métodos estáticos não são polimórficos (D)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROG-0010",
  "campos": {
    "comentario": "**Gabarito: A.** Para a banca, a herança é uma forma de abstração: a superclasse (por vezes abstrata) captura o que é comum e as subclasses especializam. Os conceitos se complementam, não são independentes nem excludentes."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-PROG-0012",
  "campos": {
    "comentario": "**Gabarito: C.** IDE = Integrated Development Environment (Ambiente de Desenvolvimento Integrado): editor, compilador/interpretador, depurador e outras ferramentas num só ambiente."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-REDES-0001",
  "campos": {
    "comentario": "**Gabarito: B.** O HTTP é protocolo da camada de aplicação (7) do modelo OSI."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-REDES-0002",
  "campos": {
    "comentario": "**Gabarito: B.** Estabelecer, gerenciar e encerrar sessões (diálogos) entre aplicações é função da camada de sessão (5) do modelo OSI."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-SEG-0001",
  "campos": {
    "comentario": "**Gabarito: B.** Paulo removeu nomes, trocou os identificadores, generalizou a data de nascimento em faixas e manteve só o CEP, com o objetivo de impedir a associação a um indivíduo: anonimização (LGPD, art. 5º, XI). Bloqueio é suspensão temporária; difusão, classificação e extração são outras operações de tratamento."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-SEG-0002",
  "campos": {
    "comentario": "**Gabarito: D.** Com placeholders, os valores são enviados como parâmetros e nunca interpretados como parte do comando SQL, o que impede SQL injection."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-SERV-0012",
  "campos": {
    "comentario": "**Gabarito: Certo.** O JBoss EAP é a distribuição comercial, com suporte da Red Hat, baseada no projeto open source WildFly."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-SO-0001",
  "campos": {
    "comentario": "**Gabarito: D.** O sistema operacional é o conjunto de programas que gerencia o hardware (processador, memória, E/S) e oferece serviços aos programas e ao usuário. Não é hardware nem simples aplicativo."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-WEB-0001",
  "campos": {
    "comentario": "**Gabarito: C.** `getElementById('demo')` seleciona o elemento com atributo `id=\"demo\"`."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-WEB-0002",
  "campos": {
    "comentario": "**Gabarito: B.** Ajax troca dados com o servidor de forma assíncrona, atualizando partes da página sem recarregá-la inteira."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-WEB-0003",
  "campos": {
    "comentario": "**Gabarito: A.** GET, POST e PUT são métodos HTTP (assim como DELETE, PATCH, HEAD e OPTIONS). SEND, READ, WRITE, SET, INPUT e OUTPUT não existem no HTTP."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-WEB-0004",
  "campos": {
    "comentario": "**Gabarito: D.** O padrão é criar o `XMLHttpRequest`, definir o tratador `onload`, chamar `open(\"GET\", url)` e depois `send()`. (A) funciona mas não trata a resposta; (B) e (E) usam classes inexistentes; (C) inverte os papéis de open e send."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-WEB-0005",
  "campos": {
    "comentario": "**Gabarito: D.** `*` é o seletor universal. `#` seleciona por id; `@` inicia regras (at-rules) como `@media`."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-WEB-0006",
  "campos": {
    "comentario": "**Gabarito: B.** Um elemento XML pode ter atributos, texto e outros elementos (filhos). XML não tem \"arrays\" nem \"formato\" como componentes do elemento."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-WEB-0007",
  "campos": {
    "comentario": "**Gabarito: D.** `$(\"#x1\")` seleciona o elemento de id x1, e `.click()` associa o tratador; `$(\"#x2\").html(...)` substitui o conteúdo do elemento de id x2. Classe seria `.x1`; tag seria `x1` sem prefixo."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-WEB-0008",
  "campos": {
    "comentario": "**Gabarito: C.** O Ajax usa tecnologias do lado cliente já presentes no navegador: JavaScript, XMLHttpRequest/fetch, DOM, e XML ou JSON."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-WEB-0009",
  "campos": {
    "comentario": "**Gabarito: B.** A validação pode ser feita no cliente (atributos HTML5 como `required` e `pattern`, ou JavaScript) e deve ser repetida no servidor. O envio exige `action`/`method` ou script; a tag \"sendtoserver\" não existe."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-WEB-0010",
  "campos": {
    "comentario": "**Gabarito: C.** I e IV estão corretas: `@font-face` permite carregar fontes externas (`src: url(...)`, com `local(...)` para usar a fonte já instalada). II é falsa (não descontinua fontes), e III é falsa (`font-family` continua aceitando fontes alternativas)."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-WEB-0011",
  "campos": {
    "comentario": "**Gabarito: A.** A primeira definição (especialistas usando diretrizes e heurísticas) é inspeção de usabilidade, e a segunda (usuários interagindo em ambiente controlado) é teste de usabilidade. A alternativa A traz os dois métodos, ainda que em ordem inversa à das definições (o enunciado não diz \"respectivamente\")."
  },
  "motivo": "Comentário escrito pelo agente 5 (a questão importada estava com comentário vazio); gabarito oficial mantido."
});

CORRECOES.push({
  "id": "ESP-SEG-0020",
  "campos": {
    "comentario": "Broken Access Control lidera desde 2021 e continua em 1º em 2025.\n\n**Atenção (edital 2027):** o edital cita o OWASP Top 10:2021. Esta questão cobra a edição 2025, mantida para estudo; na 2021 a ordem é A01 Broken Access Control, A02 Cryptographic Failures, A03 Injection, A04 Insecure Design, A05 Security Misconfiguration, A06 Vulnerable and Outdated Components, A07 Identification and Authentication Failures, A08 Software and Data Integrity Failures, A09 Security Logging and Monitoring Failures e A10 SSRF."
  },
  "motivo": "Observação de versão: o edital 2027 cita o OWASP Top 10:2021; a questão (edição 2025) foi mantida com nota no comentário."
});

CORRECOES.push({
  "id": "ESP-SEG-0025",
  "campos": {
    "comentario": "A03 Software Supply Chain Failures e A10 Mishandling of Exceptional Conditions. O SSRF foi absorvido pelo A01.\n\n**Atenção (edital 2027):** o edital cita o OWASP Top 10:2021. Esta questão cobra a edição 2025, mantida para estudo; na 2021 a ordem é A01 Broken Access Control, A02 Cryptographic Failures, A03 Injection, A04 Insecure Design, A05 Security Misconfiguration, A06 Vulnerable and Outdated Components, A07 Identification and Authentication Failures, A08 Software and Data Integrity Failures, A09 Security Logging and Monitoring Failures e A10 SSRF."
  },
  "motivo": "Observação de versão: o edital 2027 cita o OWASP Top 10:2021; a questão (edição 2025) foi mantida com nota no comentário."
});

CORRECOES.push({
  "id": "ESP-WEB-0021",
  "campos": {
    "status": "rejeitada",
    "validacao": {
      "por": "agente-5",
      "em": "2026-11-13",
      "obs": "Quase-duplicata de ESP-WEB-0016 (mesma pergunta: usuário autenticado sem permissão → 403, com as mesmas alternativas). Mantida a ESP-WEB-0016, contextualizada em API REST."
    }
  },
  "motivo": "Rejeitada pelo agente 5: Quase-duplicata de ESP-WEB-0016 (mesma pergunta: usuário autenticado sem permissão → 403, com as mesmas alternativas). Mantida a ESP-WEB-0016, contextualizada em API REST."
});

CORRECOES.push({
  "id": "ESP-WEB-0057",
  "campos": {
    "status": "rejeitada",
    "validacao": {
      "por": "agente-5",
      "em": "2026-11-13",
      "obs": "Quase-duplicata de ESP-WEB-0016 (mesma pergunta: autenticado sem permissão → 403, com as mesmas alternativas de ESP-WEB-0021). Mantida a ESP-WEB-0016."
    }
  },
  "motivo": "Rejeitada pelo agente 5: Quase-duplicata de ESP-WEB-0016 (mesma pergunta: autenticado sem permissão → 403, com as mesmas alternativas de ESP-WEB-0021). Mantida a ESP-WEB-0016."
});

CORRECOES.push({
  "id": "RLE-0149",
  "campos": {
    "status": "rejeitada",
    "validacao": {
      "por": "agente-5",
      "em": "2026-11-13",
      "obs": "Duplicata de RLE-0116 (setor de 18% → 64,8°, mesmo enunciado e quase as mesmas alternativas); além disso, estava classificada em 02 §24 (desvio médio), e não em 02 §19 (gráficos). Mantida a RLE-0116."
    }
  },
  "motivo": "Rejeitada pelo agente 5: Duplicata de RLE-0116 (setor de 18% → 64,8°, mesmo enunciado e quase as mesmas alternativas); além disso, estava classificada em 02 §24 (desvio médio), e não em 02 §19 (gráficos). Mantida a RLE-0116."
});

CORRECOES.push({
  "id": "ESP-PROG-0081",
  "campos": {
    "status": "rejeitada",
    "validacao": {
      "por": "agente-5",
      "em": "2026-11-13",
      "obs": "Duplicata de ESP-PROG-0019 (ciclo do TDD, mesmas alternativas em outra ordem). Mantida a ESP-PROG-0019, que é pai da variação ESP-PROG-V034."
    }
  },
  "motivo": "Rejeitada pelo agente 5: Duplicata de ESP-PROG-0019 (ciclo do TDD, mesmas alternativas em outra ordem). Mantida a ESP-PROG-0019, que é pai da variação ESP-PROG-V034."
});

CORRECOES.push({
  "id": "ESP-NUVEM-0003",
  "campos": {
    "status": "rejeitada",
    "validacao": {
      "por": "agente-5",
      "em": "2026-11-13",
      "obs": "Quase-duplicata de ESP-NUVEM-0001 (mesmo cenário: API publicada sem administrar SO, só pacote e variáveis de ambiente → PaaS). Mantida a ESP-NUVEM-0001, que é pai de ESP-NUVEM-V001."
    }
  },
  "motivo": "Rejeitada pelo agente 5: Quase-duplicata de ESP-NUVEM-0001 (mesmo cenário: API publicada sem administrar SO, só pacote e variáveis de ambiente → PaaS). Mantida a ESP-NUVEM-0001, que é pai de ESP-NUVEM-V001."
});
