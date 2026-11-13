# -*- coding: utf-8 -*-
"""Língua Portuguesa – variações e inéditas (agente 2).

Todos os textos e frases foram escritos para estas questões (nenhum texto protegido copiado).
A regra aplicada em cada questão está na seção indicada da apostila 01 e é explicada no comentário.
"""
from base import Q

M = "LP"


def V(sec):
    return "Regra conferida na apostila 01 §%s" % sec


# =====================================================================
# Interpretação, inferência, pressupostos – pais LP-0004, LP-0006, LP-0031, LP-0032, LP-0033
# =====================================================================
Q(M, "1", """Observe a frase atribuída a um economista fictício:

"Não foi o crédito que ficou mais caro. Foi a nossa memória dos juros baixos que ficou curta demais."

Dessa frase, deduz-se que, segundo o autor,""",
  ("a percepção de encarecimento do crédito decorre, em parte, do esquecimento de que os juros já foram altos antes.",
   "O autor desloca a causa: o problema não estaria no crédito, mas na memória curta das pessoas, que tomam um período de juros baixos como referência."),
  [("o crédito ficou efetivamente mais caro, e a memória das pessoas confirma esse fato.", "Contradiz a primeira frase, que nega o encarecimento."),
   ("os juros baixos do passado eram artificiais e prejudicaram a economia.", "Extrapolação: o texto não avalia os juros do passado."),
   ("os bancos se aproveitam da falta de memória dos clientes para cobrar mais.", "Extrapolação: o texto não menciona os bancos nem má-fé."),
   ("as pessoas se lembram perfeitamente da trajetória dos juros.", "Contradiz a ideia de \"memória curta\".")],
  pai="LP-0004", tags=["inferência", "interpretação"], var="interpretação: nova frase com a mesma estrutura de deslocamento de causa", verif=V("1"))

Q(M, "1", """"Os aplicativos não nos tornaram mais impacientes; apenas eliminaram as filas que escondiam a nossa impaciência."

De acordo com o raciocínio da frase, é correto inferir que""",
  ("a impaciência já existia antes dos aplicativos, mas era menos visível.", "Se as filas \"escondiam\" a impaciência, ela já existia; os aplicativos só a tornaram aparente."),
  [("os aplicativos são a principal causa da impaciência contemporânea.", "A frase nega exatamente essa relação causal."),
   ("as filas tornavam as pessoas mais pacientes.", "As filas apenas escondiam a impaciência; não a reduziam."),
   ("os aplicativos deveriam recriar filas para educar os usuários.", "Extrapolação sem base no texto."),
   ("antes dos aplicativos ninguém demonstrava impaciência.", "Generalização indevida: o texto fala em impaciência escondida, não inexistente.")],
  pai="LP-0004", tags=["inferência", "interpretação"], var="interpretação: nova frase, mesmo tipo de inferência", verif=V("1"))

Q(M, "1", """De cada manchete a seguir, propõe-se uma inferência. A inferência é **adequada** em:""",
  ("\"Banco amplia horário de atendimento das agências no período de restituição do IR\" / o banco espera aumento da procura nesse período.",
   "A ampliação de horário em período específico pressupõe expectativa de maior demanda: inferência autorizada pelo enunciado."),
  [("\"Cresce o número de transações via Pix em cidades do interior\" / as agências do interior serão todas fechadas.", "Conclusão desproporcional, não autorizada pela manchete."),
   ("\"Copom mantém a taxa Selic\" / a inflação acabou no país.", "A manutenção da Selic não permite concluir o fim da inflação."),
   ("\"Golpes por mensagens falsas preocupam bancos\" / os bancos deixarão de usar aplicativos.", "Extrapolação sem relação lógica necessária."),
   ("\"Empresa lança curso gratuito de educação financeira\" / os cursos pagos de finanças serão proibidos.", "Não há relação entre a oferta gratuita e proibição de cursos pagos.")],
  pai="LP-0006", tags=["inferência", "manchetes"], var="interpretação: novas manchetes e inferências", verif=V("1"))

Q(M, "1", """Leia o texto:

"Nos últimos anos, o celular virou agência, cofre e carteira. A conveniência, porém, cobrou seu preço: quanto mais operações cabem na palma da mão, mais atraente ela se torna para quem vive de enganar. Educar o cliente, portanto, deixou de ser gentileza do banco e passou a ser parte da segurança."

A ideia central do texto é que""",
  ("a digitalização das operações exige que a educação do cliente seja tratada como medida de segurança.",
   "O texto parte da migração para o celular, aponta o aumento do risco e conclui (\"portanto\") que educar o cliente passou a ser parte da segurança."),
  [("o celular deve ser abandonado como canal bancário por ser inseguro.", "O texto não propõe abandonar o canal."),
   ("os bancos agiam por gentileza ao oferecer aplicativos.", "A \"gentileza\" refere-se à educação do cliente, e a ideia é justamente que ela deixou de ser mera gentileza."),
   ("a conveniência digital eliminou os golpes tradicionais.", "O texto afirma que os riscos aumentaram, não que desapareceram."),
   ("os clientes são os únicos responsáveis pelas fraudes digitais.", "Não há atribuição de responsabilidade exclusiva ao cliente.")],
  pai="LP-0031", tags=["interpretação", "ideia central", "texto inédito"], var="interpretação: texto curto novo", verif=V("1"))

Q(M, "1", """Leia o texto:

"Há quem diga que o dinheiro em espécie está com os dias contados. Talvez. Mas basta uma tempestade derrubar a energia de uma cidade para que a velha cédula recupere, por algumas horas, o prestígio que os aplicativos lhe tomaram."

Com base no texto, é correto afirmar que o autor""",
  ("relativiza a previsão de fim do dinheiro em espécie, lembrando situações em que ele volta a ser útil.",
   "O \"Talvez\" e o \"Mas\" introduzem a ressalva: em falhas de energia, a cédula volta a ser valorizada."),
  [("concorda integralmente com o fim próximo do dinheiro em espécie.", "O \"Talvez. Mas...\" mostra que ele não concorda integralmente."),
   ("defende que os aplicativos sejam proibidos durante tempestades.", "Extrapolação."),
   ("afirma que as cédulas são mais seguras que os meios digitais.", "O texto fala de utilidade em falhas, não de segurança."),
   ("prevê que as tempestades se tornarão mais frequentes.", "O texto usa a tempestade apenas como exemplo hipotético.")],
  pai="LP-0032", tags=["interpretação", "ponto de vista", "texto inédito"], var="interpretação: texto curto novo, ressalva do autor", verif=V("1"))

Q(M, "1", """Na frase "O aplicativo **deixou de** cobrar tarifa nas transferências", há um pressuposto. Ele é:""",
  ("Antes, o aplicativo cobrava tarifa nas transferências.", "\"Deixar de\" pressupõe que a ação ocorria antes."),
  [("O aplicativo nunca cobrou tarifa.", "Contradiz o pressuposto."),
   ("O aplicativo passará a cobrar outras tarifas.", "É uma suposição (subentendido possível), não pressuposto marcado no enunciado."),
   ("As transferências ficaram mais lentas.", "Não há marca linguística que sustente essa ideia."),
   ("Os clientes reclamaram das tarifas.", "Possível causa imaginada, não pressuposto.")],
  pai="LP-0033", dif=1, tags=["pressuposto"], var="interpretação: novo marcador de pressuposição (deixar de)", verif=V("1"))

Q(M, "1", """Considere a frase: "**Até** o estagiário percebeu a falha no relatório."

O termo destacado permite inferir que""",
  ("a falha era fácil de perceber, a ponto de ser notada por quem menos se esperaria.",
   "\"Até\" introduz o elemento mais improvável de uma escala, sugerindo que a falha era evidente."),
  [("o estagiário era o mais experiente da equipe.", "O efeito de \"até\" é o oposto: ele seria o menos provável."),
   ("ninguém além do estagiário percebeu a falha.", "\"Até\" sugere que outros também perceberam."),
   ("o relatório foi escrito pelo estagiário.", "Não há base para isso."),
   ("a falha só foi percebida no fim do prazo.", "\"Até\" aqui não tem valor temporal.")],
  pai="LP-0033", dif=2, tags=["pressuposto", "subentendido", "operador argumentativo"], var="interpretação: operador argumentativo 'até'", verif=V("1"))

# =====================================================================
# Clareza, informatividade, estratégias – pais LP-0014 e LP-0015
# =====================================================================
Q(M, "1", """"Alguns canais de atendimento (o aplicativo e o internet banking, por exemplo) funcionam mesmo fora do horário bancário."

Na frase, a preocupação com a clareza leva o enunciador a""",
  ("exemplificar, entre parênteses, para esclarecer a expressão genérica \"alguns canais\".", "Os parênteses trazem exemplos que concretizam o termo vago."),
  [("enumerar todos os canais de atendimento existentes.", "\"Por exemplo\" mostra que a lista não é exaustiva."),
   ("quantificar com precisão o número de canais.", "Não há quantificação."),
   ("definir tecnicamente o que é internet banking.", "Não há definição, só exemplo."),
   ("contrapor canais digitais e presenciais.", "Não há contraposição explícita.")],
  pai="LP-0014", dif=1, tags=["clareza", "exemplificação"], var="interpretação: nova frase, mesma estratégia", verif=V("1"))

Q(M, "1", """A frase que apresenta conteúdo informativo **mais completo e preciso** é:""",
  ("Por causa de uma falha no servidor, o aplicativo do banco ficou fora do ar das 9h às 11h de ontem (12).",
   "Informa o quê, quando (horário e data), onde (aplicativo do banco) e por quê (falha no servidor)."),
  [("O aplicativo do banco ficou fora do ar.", "Falta quando e por quê."),
   ("Houve problemas ontem.", "Vaga: não diz que problemas nem onde."),
   ("O sistema certamente voltará a falhar, devido à sua fragilidade.", "Traz opinião e previsão, não informação precisa."),
   ("O banco tem um aplicativo que às vezes falha.", "Genérica, sem data, causa ou duração.")],
  pai="LP-0015", dif=1, tags=["informatividade", "clareza"], var="interpretação: novas frases", verif=V("1"))

# =====================================================================
# Conectivos e valor semântico – pais LP-0007, LP-0035, LP-0038, LP-0010, LP-0011
# =====================================================================
Q(M, "2", """Em todas as frases há um conectivo destacado. Aquele cujo valor semântico está **corretamente** indicado é:""",
  ("<u>Como</u> o sistema estava fora do ar, o atendimento foi suspenso / causa.", "\"Como\" anteposto à principal, com sentido de \"já que\", exprime causa."),
  [("<u>Embora</u> chovesse, a agência abriu no horário / causa.", "\"Embora\" é concessivo."),
   ("O gerente falou <u>como</u> um professor / conformidade.", "Aqui \"como\" é comparativo."),
   ("Estude <u>para que</u> seja aprovado / consequência.", "\"Para que\" exprime finalidade."),
   ("<u>Conforme</u> os pedidos chegavam, a equipe os registrava / condição.", "\"Conforme\" aqui é proporcional (à medida que).")],
  pai="LP-0007", tags=["conectivos", "valor semântico"], var="conceito: novos conectivos e frases", verif=V("2"))

Q(M, "2", """Em todas as frases há um conectivo destacado. Aquele cujo valor semântico está **incorretamente** indicado é:""",
  ("O cliente pagou a fatura, <u>logo</u> o limite foi restabelecido / adversidade.", "\"Logo\" é conclusivo, não adversativo."),
  [("<u>Caso</u> o cartão seja bloqueado, ligue para a central / condição.", "Correta: \"caso\" é condicional."),
   ("<u>À medida que</u> a Selic sobe, o crédito encarece / proporção.", "Correta: proporcional."),
   ("Falou tão baixo <u>que</u> ninguém entendeu / consequência.", "Correta: \"tão... que\" é consecutivo."),
   ("<u>Ainda que</u> haja riscos, o projeto seguirá / concessão.", "Correta: \"ainda que\" é concessivo.")],
  pai="LP-0007", tags=["conectivos", "valor semântico"], var="conceito: inverte o pedido (incorreta) com novas frases", verif=V("2"))

Q(M, "2", """"O sistema é robusto; **no entanto**, exige monitoramento constante." O conectivo destacado pode ser substituído, sem alteração de sentido, por""",
  ("todavia.", "\"No entanto\" e \"todavia\" são adversativos."),
  [("portanto.", "Conclusivo."),
   ("porque.", "Causal/explicativo."),
   ("conforme.", "Conformativo."),
   ("à medida que.", "Proporcional.")],
  pai="LP-0035", dif=1, tags=["conectivos", "adversativas"], var="conceito: novo conectivo adversativo", verif=V("2"))

Q(M, "2", """Em "**Contanto que** o contrato seja assinado hoje, a liberação ocorrerá amanhã", a locução destacada expressa""",
  ("condição.", "\"Contanto que\" = desde que, caso: condição."),
  [("concessão.", "Concessão seria \"embora\", \"ainda que\"."),
   ("finalidade.", "Finalidade seria \"para que\", \"a fim de que\"."),
   ("tempo.", "Tempo seria \"quando\", \"assim que\"."),
   ("causa.", "Causa seria \"porque\", \"já que\".")],
  pai="LP-0038", dif=1, tags=["conectivos", "condição"], var="conceito: nova locução condicional", verif=V("2"))

Q(M, "6", """Observe as duas frases:

I – O banco lançou uma campanha de renegociação de dívidas na semana passada.
II – A inadimplência da carteira continuou subindo neste mês.

A forma mais coerente de reuni-las em um só período, mantendo a relação lógica entre os fatos, é:""",
  ("Embora o banco tenha lançado uma campanha de renegociação de dívidas na semana passada, a inadimplência da carteira continuou subindo neste mês.",
   "Esperava-se que a campanha reduzisse a inadimplência; como ela subiu, a relação é de concessão (\"embora\" + subjuntivo)."),
  [("O banco lançou uma campanha de renegociação na semana passada, por isso a inadimplência continuou subindo neste mês.", "Apresenta a campanha como causa do aumento, relação incoerente."),
   ("A inadimplência continuou subindo neste mês, porque o banco lançou uma campanha de renegociação na semana passada.", "Mesma incoerência causal."),
   ("Apesar de a inadimplência continuar subindo neste mês, o banco lançou uma campanha na semana passada.", "Inverte a cronologia e a relação de expectativa."),
   ("O banco lançou uma campanha de renegociação na semana passada, de modo que a inadimplência continuou subindo.", "Relação de consequência incoerente.")],
  pai="LP-0010", tags=["conectivos", "coerência", "reescrita"], var="redação: novas frases, mesma relação concessiva", verif=V("6"))

Q(M, "6", """Observe as duas frases:

I – O servidor principal apresentou falha às 14h.
II – O sistema de contingência assumiu as operações automaticamente.

A forma que une as frases de modo coerente, explicitando a relação entre os fatos, é:""",
  ("Como o servidor principal apresentou falha às 14h, o sistema de contingência assumiu as operações automaticamente.",
   "A falha é a causa da entrada da contingência: \"como\" anteposto exprime causa."),
  [("Embora o servidor principal tenha apresentado falha às 14h, o sistema de contingência assumiu as operações.", "Concessão é incoerente: a contingência entra justamente por causa da falha."),
   ("O sistema de contingência assumiu as operações, a fim de que o servidor apresentasse falha às 14h.", "Relação de finalidade absurda."),
   ("O servidor principal apresentou falha às 14h, mas o sistema de contingência assumiu as operações.", "\"Mas\" sugere oposição de expectativa que não existe."),
   ("Caso o sistema de contingência assuma as operações, o servidor apresentará falha às 14h.", "Inverte causa e efeito e muda o modo para hipótese.")],
  pai="LP-0010", tags=["conectivos", "coerência", "reescrita"], var="redação: novas frases, relação causal", verif=V("6"))

Q(M, "11", """Todas as frases apresentam a conjunção **e**. A frase em que ela tem valor **adversativo** é:""",
  ("Estudou meses para a prova e não conseguiu a aprovação.", "\"E\" equivale a \"mas\": oposição entre o esforço e o resultado."),
  [("O analista revisou o código e publicou a nova versão.", "Valor aditivo (sequência de ações)."),
   ("Choveu muito e as ruas alagaram.", "Valor de consequência/adição."),
   ("Comprei o notebook e o mouse.", "Adição de termos."),
   ("Ela abriu a conta e, depois, pediu o cartão.", "Sequência temporal (adição).")],
  pai="LP-0011", tags=["conjunções", "coordenação"], var="conceito: troca da conjunção (ou → e) e do valor pedido", verif=V("11"))

Q(M, "11", """Todas as frases apresentam a conjunção **ou**. A frase em que ela indica **retificação** (equivalência/esclarecimento) é:""",
  ("O Copom, ou Comitê de Política Monetária, reúne-se oito vezes por ano.", "\"Ou\" introduz outra forma de dizer a mesma coisa (esclarecimento)."),
  [("Pague hoje ou pague amanhã com multa.", "Alternância com exclusão."),
   ("Ou você confirma o código, ou a operação é cancelada.", "Alternativa excludente com valor de condição/ameaça."),
   ("Aceitamos cartão de débito ou de crédito.", "Alternância (qualquer um dos dois)."),
   ("Vamos revisar o contrato ou teremos problemas.", "Valor consecutivo/condicional (\"senão\").")],
  pai="LP-0011", tags=["conjunções", "coordenação"], var="conceito: mesmo conectivo, novo valor pedido", verif=V("11"))

# =====================================================================
# Coesão referencial – pai LP-0039
# =====================================================================
Q(M, "2", """"O diretor e a gerente discutiram o orçamento: **esta** defendeu cortes; **aquele**, novos investimentos."

Os pronomes destacados retomam, respectivamente,""",
  ("a gerente e o diretor.", "\"Esta\" retoma o termo mais próximo (a gerente); \"aquele\", o mais distante (o diretor)."),
  [("o diretor e a gerente.", "Inverteu a regra de proximidade."),
   ("o orçamento e o diretor.", "\"Esta\" é feminino e não pode retomar \"orçamento\"."),
   ("a gerente e o orçamento.", "\"Aquele\" refere-se a pessoa, o diretor, que defendeu investimentos."),
   ("os cortes e os investimentos.", "Os pronomes retomam pessoas, não as propostas.")],
  pai="LP-0039", dif=1, tags=["coesão", "pronomes demonstrativos"], var="conceito: nova frase", verif=V("2"))

# =====================================================================
# Intertextualidade – inédita
# =====================================================================
Q(M, "2", """Leia o anúncio fictício de uma fintech: "Investir ou não investir: eis a questão. Na dúvida, fale com um especialista."

É correto afirmar que o anúncio""",
  ("estabelece intertextualidade com uma fala célebre da literatura, adaptada com fins publicitários (paródia/paráfrase).",
   "Retoma o famoso \"Ser ou não ser, eis a questão\" (Hamlet), trocando os termos para o contexto de investimentos."),
  [("cita literalmente uma obra, com indicação de autoria, como numa citação acadêmica.", "Não há citação literal nem indicação de fonte."),
   ("não apresenta relação com outros textos.", "A relação com a fala de Hamlet é evidente."),
   ("é exemplo de discurso indireto livre.", "Não há fusão de vozes de narrador e personagem."),
   ("emprega linguagem exclusivamente denotativa e técnica.", "O texto explora a memória cultural do leitor, com efeito expressivo.")],
  pai=None, dif=2, tags=["intertextualidade"], var="inédita (intertextualidade em publicidade)", verif=V("2"))

# =====================================================================
# Títulos jornalísticos / tempo e voz – pai LP-0008
# =====================================================================
Q(M, "15", """Manuais de redação jornalística recomendam regras para títulos. A opção em que o título **segue corretamente** a regra indicada é:""",
  ("Prefira a voz ativa, que destaca o agente: \"Banco Central reduz a taxa Selic\".", "O título está na voz ativa, com o agente (Banco Central) como sujeito."),
  [("Use o presente para fato recente: \"Banco Central reduziu a taxa Selic\".", "O título usa o pretérito perfeito, e não o presente."),
   ("Evite a voz passiva: \"Taxa Selic é reduzida pelo Banco Central\".", "O título está justamente na voz passiva."),
   ("Não use futuro do presente para fato já ocorrido: \"Copom reduzirá a Selic na reunião de ontem\".", "Usa o futuro para fato passado."),
   ("Evite imprecisão: \"Alguém mexeu em alguma taxa\".", "O título é totalmente impreciso.")],
  pai="LP-0008", tags=["voz ativa", "tempos verbais", "títulos"], var="conceito: novas regras e títulos", verif=V("15"))

# =====================================================================
# Elementos da comunicação – pai LP-0013
# =====================================================================
Q(M, "9", """Um banco envia a idosos um comunicado sobre segurança cheio de termos como "token", "phishing" e "autenticação multifator", e muitos destinatários não compreendem a mensagem.

A falha de comunicação decorre principalmente de problema no(a)""",
  ("código, pouco compartilhado entre emissor e receptor.", "Os termos técnicos não são dominados pelo público: o código não é comum aos dois polos."),
  [("canal, pois a carta não chegou aos destinatários.", "A mensagem chegou; o problema foi de compreensão."),
   ("referente, que não existe no mundo real.", "O referente (segurança bancária) existe."),
   ("emissor, que não é identificável.", "O emissor (o banco) está identificado."),
   ("contexto, que impede o envio de cartas.", "Não há impedimento de envio.")],
  pai="LP-0013", dif=1, tags=["elementos da comunicação", "código"], var="conceito: novo cenário", verif=V("9"))

# =====================================================================
# Funções da linguagem – pai LP-0066
# =====================================================================
Q(M, "8", """"Art. 2º O cliente deverá atualizar seus dados cadastrais a cada doze meses." Nesse trecho de um regulamento, predomina a função""",
  ("referencial, com caráter normativo e impessoal.", "O foco está no conteúdo informado (o referente), em linguagem objetiva."),
  [("emotiva, centrada nos sentimentos do emissor.", "Não há marcas de subjetividade."),
   ("fática, voltada a testar o canal.", "Não há teste de contato."),
   ("poética, centrada na forma da mensagem.", "Não há exploração estética."),
   ("metalinguística, que explica o próprio código.", "O texto não fala da própria língua.")],
  pai="LP-0066", dif=1, tags=["funções da linguagem"], var="conceito: novo texto (normativo)", verif=V("8"))

# =====================================================================
# Denotação e conotação – inédita
# =====================================================================
Q(M, "12", """A palavra destacada está empregada em sentido **denotativo** em:""",
  ("O técnico trocou a **chave** da sala do servidor.", "\"Chave\" no sentido próprio: objeto que abre fechaduras."),
  [("A educação financeira é a **chave** para sair das dívidas.", "Sentido figurado: solução, meio."),
   ("O mercado **amanheceu** nervoso após o anúncio.", "Personificação: sentido conotativo."),
   ("Aquela reunião foi um **balde de água fria** na equipe.", "Expressão figurada (desânimo)."),
   ("O novo gerente é uma **fera** em negociações.", "Sentido figurado (muito competente).")],
  pai=None, dif=1, tags=["denotação", "conotação"], var="inédita (denotação × conotação)", verif=V("12"))

# =====================================================================
# Sintaxe: aposto, termos e orações – pais LP-0019, LP-0025, LP-0026, LP-0057
# =====================================================================
Q(M, "6", """No trecho "Vitória, **capital do Espírito Santo**, sedia o Banestes desde a sua fundação", o termo destacado exerce a função de""",
  ("aposto explicativo.", "Termo entre vírgulas que explica o substantivo \"Vitória\", ao qual equivale."),
  [("vocativo.", "Vocativo é chamamento ao interlocutor."),
   ("sujeito.", "O sujeito é \"Vitória\"."),
   ("adjunto adverbial de lugar.", "Não indica circunstância do verbo."),
   ("predicativo do sujeito.", "Não se liga ao sujeito por verbo de ligação.")],
  pai="LP-0019", dif=1, tags=["aposto", "termos acessórios"], var="conceito: nova frase", verif=V("6"))

Q(M, "6", """Em "O gerente, **meu amigo**, aprovou o crédito" e em "**Meu amigo**, aprove o crédito", os termos destacados são, respectivamente,""",
  ("aposto e vocativo.", "No 1º caso, explica \"o gerente\" (aposto); no 2º, chama o interlocutor (vocativo)."),
  [("vocativo e aposto.", "Inverteu as funções."),
   ("aposto nos dois casos.", "No 2º há chamamento, não explicação de outro termo."),
   ("vocativo nos dois casos.", "No 1º não há chamamento."),
   ("sujeito e vocativo.", "O sujeito da 1ª frase é \"O gerente\".")],
  pai="LP-0019", dif=2, tags=["aposto", "vocativo"], var="conceito: contraste aposto × vocativo", verif=V("6"))

Q(M, "6", """"É necessário **que todos os empregados concluam o treinamento**."

A oração destacada tem a mesma classificação sintática da oração destacada em:""",
  ("Convém **que o relatório seja revisado**.", "Ambas são subordinadas substantivas **subjetivas** (sujeito de \"é necessário\" e de \"convém\")."),
  [("O diretor exigiu **que o relatório fosse revisado**.", "Objetiva direta (objeto de \"exigiu\")."),
   ("Tenho certeza **de que o relatório será revisado**.", "Completiva nominal (complemento de \"certeza\")."),
   ("O problema é **que o relatório não foi revisado**.", "Predicativa."),
   ("O relatório **que foi revisado** está na mesa.", "Adjetiva restritiva.")],
  pai="LP-0025", tags=["orações subordinadas substantivas"], var="conceito: nova oração-modelo", verif=V("6"))

Q(M, "6", """Assinale a alternativa em que a oração destacada é subordinada substantiva **objetiva indireta**.""",
  ("O cliente precisa **de que o limite seja ampliado**.", "\"Precisar\" é VTI (de): a oração é o objeto indireto."),
  [("Espero **que o limite seja ampliado**.", "Objetiva direta."),
   ("É provável **que o limite seja ampliado**.", "Subjetiva."),
   ("A esperança dele era **que o limite fosse ampliado**.", "Predicativa."),
   ("O cliente tinha medo **de que o limite fosse reduzido**.", "Completiva nominal (complementa o nome \"medo\").")],
  pai="LP-0025", dif=3, tags=["orações subordinadas substantivas"], var="conceito: troca da classificação pedida", verif=V("6"))

Q(M, "6", """Em "As agências **que funcionam aos sábados** terão novo horário", a oração destacada é""",
  ("subordinada adjetiva restritiva, pois delimita quais agências terão novo horário.", "Sem vírgulas, restringe o antecedente \"agências\"."),
  [("subordinada adjetiva explicativa, pois todas as agências funcionam aos sábados.", "Seria explicativa se viesse entre vírgulas."),
   ("subordinada substantiva subjetiva.", "O \"que\" é pronome relativo, não conjunção integrante."),
   ("coordenada sindética explicativa.", "Não há coordenação."),
   ("subordinada adverbial causal.", "Não exprime causa.")],
  pai="LP-0026", tags=["orações adjetivas", "pronome relativo"], var="conceito: nova frase sobre o relativo 'que'", verif=V("6"))

Q(M, "6", """Em "O sistema **a que** me referi foi desativado", o pronome relativo exerce a função de""",
  ("objeto indireto.", "Quem se refere, refere-se a algo: \"referi-me ao sistema\"; o relativo, com a preposição, é OI de \"referi\"."),
  [("sujeito.", "O sujeito de \"referi\" é \"eu\" (oculto)."),
   ("objeto direto.", "\"Referir-se\" exige preposição."),
   ("complemento nominal.", "Complementa um verbo, não um nome."),
   ("adjunto adverbial.", "Não indica circunstância.")],
  pai="LP-0057", dif=2, tags=["pronome relativo", "regência"], var="conceito: novo verbo regente", verif=V("6"))

# =====================================================================
# Pontuação – pais LP-0020, LP-0058, LP-0061 e inédita
# =====================================================================
Q(M, "6", """No trecho "Planilhas, contratos, relatórios, tudo foi digitalizado", é correto afirmar que""",
  ("as vírgulas separam termos de uma enumeração, resumidos depois pelo aposto \"tudo\".", "\"Tudo\" é aposto resumitivo da enumeração; as vírgulas separam os itens."),
  [("as vírgulas podem ser retiradas sem prejuízo para a correção.", "Sem vírgulas, a enumeração ficaria truncada e incorreta."),
   ("\"planilhas\", \"contratos\" e \"relatórios\" são vocativos.", "Não há chamamento."),
   ("o sujeito da oração é indeterminado.", "O sujeito é \"tudo\" (que resume a enumeração)."),
   ("a vírgula antes de \"tudo\" é proibida.", "É obrigatória para isolar o aposto resumitivo.")],
  pai="LP-0020", tags=["pontuação", "enumeração", "aposto resumitivo"], var="conceito: nova enumeração", verif=V("6"))

Q(M, "6", """Assinale a alternativa **corretamente pontuada**.""",
  ("Na reunião de ontem, o diretor anunciou, com entusiasmo, a abertura de duas agências.", "Adjunto adverbial deslocado e intercalado separados por vírgulas; sem vírgula entre verbo e complemento."),
  [("Na reunião de ontem o diretor, anunciou com entusiasmo a abertura de duas agências.", "Vírgula entre sujeito e verbo."),
   ("Na reunião de ontem, o diretor anunciou com entusiasmo, a abertura de duas agências.", "Vírgula isolando só um lado do adjunto, separando verbo e objeto."),
   ("Na reunião, de ontem, o diretor anunciou com entusiasmo a abertura de duas agências.", "Separou o adjunto adnominal \"de ontem\" do seu núcleo."),
   ("Na reunião de ontem, o diretor anunciou com entusiasmo a abertura, de duas agências.", "Separou o complemento nominal do nome.")],
  pai="LP-0058", tags=["pontuação", "vírgula"], var="conceito: nova frase", verif=V("6"))

Q(M, "6", """Assinale a alternativa em que a pontuação está **incorreta**.""",
  ("Os clientes que, possuem conta-salário podem solicitar a portabilidade.", "Vírgula indevida entre o pronome relativo e o verbo da oração adjetiva."),
  [("Os clientes, que foram avisados com antecedência, compareceram.", "Correta: adjetiva explicativa entre vírgulas."),
   ("Se houver dúvidas, procure a ouvidoria.", "Correta: adverbial anteposta separada por vírgula."),
   ("O banco, no entanto, manteve as tarifas.", "Correta: conjunção deslocada entre vírgulas."),
   ("Brasília, 10 de novembro de 2026.", "Correta: vírgula entre local e data.")],
  pai="LP-0058", tags=["pontuação", "vírgula"], var="conceito: inverte (assinale a incorreta)", verif=V("6"))

Q(M, "6", """Considere as frases:

I. Os analistas que concluíram o curso receberam o certificado.
II. Os analistas, que concluíram o curso, receberam o certificado.

É correto afirmar que""",
  ("em I, apenas parte dos analistas concluiu o curso; em II, todos os analistas concluíram.", "Sem vírgulas, a adjetiva restringe; com vírgulas, explica, atribuindo a característica a todo o grupo."),
  [("as duas frases têm exatamente o mesmo sentido.", "A vírgula muda o sentido (restritiva × explicativa)."),
   ("em I, todos os analistas concluíram o curso.", "Inverteu: a restritiva indica que só alguns concluíram."),
   ("a frase II está incorreta, pois não se usa vírgula antes de \"que\".", "Antes de adjetiva explicativa a vírgula é obrigatória."),
   ("em II, a oração entre vírgulas é substantiva.", "É adjetiva explicativa.")],
  pai="LP-0061", tags=["pontuação", "orações adjetivas"], var="conceito: contraste restritiva × explicativa com novo par", verif=V("6"))

Q(M, "6", """O emprego do ponto e vírgula está correto em:""",
  ("O setor de crédito bateu a meta; o de investimentos, não.", "Separa orações coordenadas já com vírgula interna (elipse do verbo)."),
  [("O setor de crédito; bateu a meta.", "Separa sujeito e predicado."),
   ("Comprei; um notebook novo.", "Separa verbo e complemento."),
   ("Quando a reunião terminar; avise-me.", "Entre adverbial e principal usa-se vírgula."),
   ("Os relatórios; que estavam atrasados, chegaram.", "Pontuação incoerente na oração adjetiva.")],
  pai=None, dif=1, tags=["pontuação", "ponto e vírgula"], var="inédita (ponto e vírgula)", verif=V("6"))

# =====================================================================
# Discurso direto, indireto e indireto livre – pais LP-0062, LP-0064, LP-0063
# =====================================================================
Q(M, "7", """Transpondo para o discurso indireto a frase "A gerente afirmou: 'Eu assinarei o contrato amanhã'", obtém-se:""",
  ("A gerente afirmou que ela assinaria o contrato no dia seguinte.", "Futuro do presente → futuro do pretérito; 1ª → 3ª pessoa; \"amanhã\" → \"no dia seguinte\"."),
  [("A gerente afirmou que eu assinarei o contrato amanhã.", "Manteve pessoa, tempo e advérbio do discurso direto."),
   ("A gerente afirmou que ela assinará o contrato amanhã.", "Não fez a correlação de tempo nem a troca do advérbio."),
   ("A gerente afirmou que ela assinou o contrato no dia seguinte.", "Usou pretérito perfeito, mudando o sentido."),
   ("A gerente afirmou que ela assinaria o contrato ontem.", "\"Ontem\" altera a referência temporal.")],
  pai="LP-0062", tags=["discurso indireto"], var="conceito: nova frase", verif=V("7"))

Q(M, "7", """O cliente perguntou ao atendente: "Vocês já analisaram o meu pedido?". Em discurso indireto, a frase fica:""",
  ("O cliente perguntou ao atendente se eles já tinham analisado o seu pedido.", "Interrogativa direta → \"se\"; pretérito perfeito → mais-que-perfeito; \"meu\" → \"seu\"."),
  [("O cliente perguntou ao atendente: eles já analisaram o seu pedido?", "Mantém a estrutura de pergunta direta."),
   ("O cliente perguntou ao atendente que vocês já analisaram o meu pedido.", "Usa \"que\" em vez de \"se\" e não ajusta pessoas."),
   ("O cliente perguntou ao atendente se vocês já analisam o meu pedido.", "Muda o tempo para o presente e não ajusta pessoas."),
   ("O cliente perguntou ao atendente se eles analisariam o seu pedido.", "O futuro do pretérito altera o sentido (ação já ocorrida).")],
  pai="LP-0064", tags=["discurso indireto", "interrogativa indireta"], var="conceito: nova pergunta", verif=V("7"))

Q(M, "7", """"O analista encarou a tela por um longo minuto. Mais um erro em produção! Quem teria aprovado aquele código sem testes? Respirou fundo e abriu o chamado."

No trecho, as frases "Mais um erro em produção! Quem teria aprovado aquele código sem testes?" exemplificam o discurso""",
  ("indireto livre, pois os pensamentos do personagem se misturam à voz do narrador, sem verbo de elocução nem aspas.", "Não há travessão, aspas nem \"pensou que\"; a fala interior surge integrada à narração."),
  [("direto, pois reproduzem a fala do personagem entre aspas.", "Não há aspas nem travessão."),
   ("indireto, pois são introduzidas por verbo de elocução e conjunção.", "Não há verbo de elocução nem \"que\"/\"se\"."),
   ("direto, pois estão em primeira pessoa.", "Não há marca de 1ª pessoa nem de fala reproduzida."),
   ("indireto, pois o narrador é observador.", "O ponto de vista do narrador não define o tipo de discurso.")],
  pai="LP-0063", tags=["discurso indireto livre"], var="conceito: novo trecho narrativo", verif=V("7"))

# =====================================================================
# Classes de palavras, pronomes, "se", modalizadores – pais LP-0080, LP-0081, LP-0083, LP-0085
# =====================================================================
Q(M, "11", """Em "Segundo o boletim, o rombo **seria** de R$ 2 milhões", o futuro do pretérito foi empregado para""",
  ("indicar incerteza, atribuindo a informação a outra fonte.", "É o futuro do pretérito de distanciamento, típico do texto jornalístico."),
  [("expressar ação certa no futuro.", "Isso seria o futuro do presente (\"será\")."),
   ("indicar ação habitual no passado.", "Isso seria o pretérito imperfeito."),
   ("dar ordem ao leitor.", "Ordem é imperativo."),
   ("indicar ação concluída antes de outra no passado.", "Isso é o mais-que-perfeito.")],
  pai="LP-0080", dif=1, tags=["verbo", "futuro do pretérito", "modalização"], var="conceito: nova frase", verif=V("11"))

Q(M, "11", """Nas frases "**Alugam-se** salas comerciais" e "**Precisa-se** de técnicos", a palavra "se" é, respectivamente,""",
  ("partícula apassivadora e índice de indeterminação do sujeito.", "\"Alugar\" é VTD (salas são alugadas: passiva sintética); \"precisar\" é VTI (o \"se\" indetermina o sujeito)."),
  [("índice de indeterminação do sujeito nos dois casos.", "Com VTD, o \"se\" é apassivador."),
   ("partícula apassivadora nos dois casos.", "Com VTI não há passiva."),
   ("pronome reflexivo e conjunção condicional.", "Não há reflexividade nem condição."),
   ("índice de indeterminação e partícula apassivadora.", "Inverteu as classificações.")],
  pai="LP-0081", dif=2, tags=["pronome se", "voz passiva sintética"], var="conceito: novos verbos", verif=V("11"))

Q(M, "11", """O termo destacado expressa **certeza** do enunciador em:""",
  ("**Evidentemente**, o novo sistema exigirá treinamento.", "\"Evidentemente\" é modalizador epistêmico de certeza."),
  [("**Talvez** o novo sistema exija treinamento.", "Dúvida."),
   ("**Possivelmente** o novo sistema exigirá treinamento.", "Possibilidade."),
   ("**Infelizmente**, o novo sistema exigirá treinamento.", "Modalizador afetivo (avaliação), não de certeza."),
   ("O novo sistema **poderá** exigir treinamento.", "Possibilidade.")],
  pai="LP-0083", dif=1, tags=["modalizadores"], var="conceito: troca do valor pedido (certeza)", verif=V("11"))

Q(M, "11", """Assinale a frase que está de acordo com a norma-padrão quanto ao emprego dos pronomes.""",
  ("O gerente deixou o relatório para eu revisar.", "Antes de verbo no infinitivo, o sujeito é \"eu\" (para eu revisar)."),
  [("O gerente deixou o relatório para mim revisar.", "\"Mim\" não pode ser sujeito de infinitivo."),
   ("Entre eu e você não há divergências.", "Após preposição usa-se pronome oblíquo tônico: entre mim e você."),
   ("Isso é para mim fazer amanhã.", "Sujeito do infinitivo deve ser \"eu\"."),
   ("Ele trouxe os documentos para mim e para tu.", "Após preposição: \"para ti\".")],
  pai="LP-0085", dif=1, tags=["pronomes pessoais"], var="conceito: novas frases", verif=V("11"))

Q(M, "6", """Assinale a alternativa em que a colocação do pronome oblíquo está de acordo com a norma-padrão.""",
  ("Ninguém nos informou sobre a mudança de horário.", "Pronome indefinido \"ninguém\" atrai o pronome: próclise obrigatória."),
  [("Me informaram sobre a mudança de horário.", "Não se inicia período com pronome oblíquo átono na norma-padrão."),
   ("Não informaram-nos sobre a mudança de horário.", "A negação exige próclise."),
   ("Informarei-lhe sobre a mudança amanhã.", "Com futuro do presente, sem atrativo, usa-se mesóclise: informar-lhe-ei."),
   ("O cliente que informou-me a mudança já saiu.", "O pronome relativo exige próclise.")],
  pai=None, dif=2, tags=["colocação pronominal"], var="inédita (colocação pronominal)", verif=V("6"))

Q(M, "6", """A substituição do termo destacado por pronome está correta em:""",
  ("Entreguei **o relatório** ao diretor → Entreguei-o ao diretor.", "\"O relatório\" é objeto direto: pronome \"o\"."),
  [("Obedeço **às normas** → Obedeço-as.", "\"Obedecer\" é VTI: obedeço a elas."),
   ("Vamos pagar **a fatura** → Vamos pagar-la.", "Verbo terminado em r: pagá-la."),
   ("Avisaram **o cliente** → Avisaram-lo.", "Terminação nasal: avisaram-no."),
   ("Entreguei o relatório **ao diretor** → Entreguei-o o relatório.", "Objeto indireto de pessoa: entreguei-lhe o relatório.")],
  pai=None, dif=2, tags=["pronomes oblíquos", "reescrita"], var="inédita (substituição por pronome)", verif=V("6"))

# =====================================================================
# Semântica e figuras de linguagem – pais LP-0086, LP-0087, LP-0088, LP-0090 e inéditas
# =====================================================================
Q(M, "12", """Em "O **Planalto** vetou o projeto aprovado pelo Congresso", ocorre""",
  ("metonímia, pois o lugar (Palácio do Planalto) é usado pela instituição (Presidência).", "Relação de contiguidade: lugar pela instituição."),
  [("metáfora, pois há comparação implícita entre o planalto e o presidente.", "Não há semelhança, mas contiguidade."),
   ("hipérbole, pois há exagero intencional.", "Não há exagero."),
   ("antítese, pois há ideias opostas.", "Não há oposição."),
   ("eufemismo, pois o veto é suavizado.", "Não há suavização.")],
  pai="LP-0086", dif=1, tags=["figuras de linguagem", "metonímia"], var="conceito: novo exemplo", verif=V("12"))

Q(M, "12", """Assinale a frase em que o termo destacado está empregado **corretamente**.""",
  ("A **ratificação** do contrato foi feita pela diretoria, que o confirmou integralmente.", "Ratificar = confirmar."),
  [("O banco fez a **retificação** do contrato, confirmando-o sem nenhuma alteração.", "Retificar = corrigir; confirmar sem alteração é ratificar."),
   ("O cliente foi **descriminado** no atendimento por causa da idade.", "Tratar mal por preconceito é \"discriminar\"; \"descriminar\" é tirar o caráter de crime."),
   ("A reunião foi **adiada** sem **delongas**, ou seja, com muita demora.", "\"Sem delongas\" = sem demora."),
   ("O diretor **infligiu** a norma ao chegar atrasado.", "Desrespeitar norma é \"infringir\"; \"infligir\" é aplicar pena.")],
  pai="LP-0087", tags=["parônimos"], var="conceito: novos pares de parônimos", verif=V("12"))

Q(M, "12", """A frase que apresenta **ambiguidade** é:""",
  ("O gerente encontrou o cliente saindo da agência.", "Não fica claro quem saía da agência: o gerente ou o cliente."),
  [("O gerente, ao sair da agência, encontrou o cliente.", "O deslocamento deixa claro que o gerente saía."),
   ("O gerente encontrou o cliente que saía da agência.", "A oração adjetiva atribui a ação ao cliente."),
   ("Saindo da agência, o gerente encontrou o cliente.", "A reduzida anteposta refere-se ao sujeito \"o gerente\"."),
   ("O gerente encontrou o cliente quando este saía da agência.", "\"Este\" retoma o cliente sem ambiguidade.")],
  pai="LP-0088", dif=2, tags=["ambiguidade"], var="conceito: nova fonte de ambiguidade (reduzida de gerúndio)", verif=V("12"))

Q(M, "12", """Em "O silêncio da sala era **ensurdecedor**", há""",
  ("paradoxo, pois atribui ao silêncio uma qualidade contraditória com ele.", "Silêncio e ensurdecedor se opõem no mesmo ser e ao mesmo tempo."),
  [("antítese, pois opõe ideias em termos separados da frase sem contradição lógica.", "Na antítese, os opostos não se fundem no mesmo ser."),
   ("eufemismo, pois suaviza um fato desagradável.", "Não há suavização."),
   ("metonímia, pois troca o efeito pela causa.", "Não há troca por contiguidade."),
   ("pleonasmo, pois repete a mesma ideia.", "Há contradição, não repetição.")],
  pai="LP-0090", tags=["figuras de linguagem", "paradoxo"], var="conceito: nova figura (paradoxo)", verif=V("12"))

Q(M, "12", """Relacione a frase à figura de linguagem predominante. A correspondência correta é:""",
  ("\"Ele nos deixou no ano passado\", dito sobre um colega que morreu – eufemismo.", "Suaviza a ideia de morte."),
  [("\"Já pedi esse relatório mil vezes\" – ironia.", "É hipérbole (exagero)."),
   ("\"A bolsa acordou de mau humor\" – metonímia.", "É prosopopeia (personificação)."),
   ("\"Que ótimo: o sistema caiu de novo no dia do pagamento\" – hipérbole.", "É ironia (diz o contrário do que pensa)."),
   ("\"Rir é chorar com outros músculos\" – eufemismo.", "Há antítese/paradoxo entre rir e chorar, não suavização.")],
  pai=None, tags=["figuras de linguagem"], var="inédita (reconhecimento de figuras)", verif=V("12"))

Q(M, "12", """Em "Ouvi uma voz **macia** pelo telefone", ocorre""",
  ("sinestesia, pois se atribui a uma percepção auditiva uma qualidade tátil.", "Mistura de sentidos: audição (voz) e tato (macia)."),
  [("catacrese, pois falta palavra própria para designar a voz.", "Há palavras próprias; o efeito é expressivo."),
   ("hipérbole, pois há exagero.", "Não há exagero."),
   ("aliteração, pois há repetição de consoantes.", "Não há repetição sonora relevante."),
   ("anacoluto, pois há quebra sintática.", "A sintaxe está regular.")],
  pai=None, dif=1, tags=["figuras de linguagem", "sinestesia"], var="inédita (sinestesia)", verif=V("12"))

Q(M, "12", """O par de palavras que mantém relação de **antonímia** é:""",
  ("superávit / déficit.", "Sentidos opostos: sobra × falta de recursos."),
  [("receita / renda.", "Próximas no sentido (sinonímia aproximada)."),
   ("lucro / ganho.", "Sinônimos."),
   ("despesa / gasto.", "Sinônimos."),
   ("crédito / financiamento.", "Relação de hiperonímia/proximidade, não oposição.")],
  pai=None, dif=1, tags=["antonímia", "sinonímia"], var="inédita (sinonímia e antonímia)", verif=V("12"))

Q(M, "12", """Na frase "A diretoria considerou a proposta **exequível**", a palavra destacada pode ser substituída, sem prejuízo do sentido, por""",
  ("realizável.", "Exequível = que pode ser executado."),
  [("excessiva.", "Sentido diferente."),
   ("inviável.", "Antônimo."),
   ("exemplar.", "Sentido diferente."),
   ("onerosa.", "Significa custosa.")],
  pai=None, dif=1, tags=["sinonímia", "vocabulário"], var="inédita (sinonímia)", verif=V("12"))

# =====================================================================
# Formação de palavras, vocabulário – pais LP-0075, LP-0076, LP-0093
# =====================================================================
Q(M, "10", """A palavra formada por **parassíntese** é:""",
  ("entardecer.", "Prefixo e sufixo acrescentados simultaneamente a \"tarde\" (não existe \"entarde\" nem \"tardecer\")."),
  [("infelizmente.", "Prefixação e sufixação não simultâneas (existe \"infeliz\")."),
   ("desleal.", "Prefixação."),
   ("pontapé.", "Composição por justaposição."),
   ("saque (de sacar).", "Derivação regressiva.")],
  pai="LP-0075", dif=1, tags=["formação de palavras", "parassíntese"], var="conceito: novos exemplos", verif=V("10"))

Q(M, "10", """Assinale a alternativa em que **todas** as palavras foram formadas por derivação regressiva.""",
  ("ajuste, debate, resgate.", "Substantivos deverbais formados pela redução dos verbos ajustar, debater, resgatar."),
  [("ajustamento, debatedor, resgatável.", "Derivação sufixal."),
   ("ajustável, debatido, resgatado.", "Derivação sufixal (adjetivo em -vel) e particípios."),
   ("bancário, agência, tarifa.", "Não são deverbais regressivos."),
   ("passatempo, guarda-chuva, aguardente.", "Composição.")],
  pai="LP-0076", tags=["formação de palavras", "derivação regressiva"], var="conceito: novos exemplos", verif=V("10"))

Q(M, "13", """Em "Faça o **download** do extrato e confira o **cashback** da compra", as palavras destacadas são exemplos de""",
  ("estrangeirismos, empregados sem adaptação gráfica ao português.", "São termos do inglês usados na forma original."),
  [("neologismos semânticos criados a partir de palavras portuguesas.", "Não derivam de palavras portuguesas."),
   ("arcaísmos, palavras em desuso.", "São termos atuais."),
   ("latinismos de uso jurídico.", "Vêm do inglês, não do latim."),
   ("regionalismos capixabas.", "Não são marcas regionais.")],
  pai="LP-0093", dif=1, tags=["estrangeirismos"], var="conceito: novos exemplos", verif=V("13"))

# =====================================================================
# Ortografia, hífen, acentuação – pais LP-0097, LP-0098, LP-0101, LP-0103, LP-0104, LP-0028
# =====================================================================
Q(M, "14", """De acordo com a ortografia oficial, todas as palavras estão corretamente grafadas em:""",
  ("exceção, paralisação, ascensão, privilégio.", "Grafias corretas."),
  [("excessão, paralisação, ascensão, privilégio.", "Correto: exceção."),
   ("exceção, paralização, ascensão, privilégio.", "Correto: paralisação (de paralisar)."),
   ("exceção, paralisação, ascenção, privilégio.", "Correto: ascensão."),
   ("exceção, paralisação, ascensão, previlégio.", "Correto: privilégio.")],
  pai="LP-0097", dif=1, tags=["ortografia"], var="conceito: novas palavras", verif=V("14"))

Q(M, "14", """Assinale a alternativa em que **todas** as palavras estão grafadas conforme as regras do hífen do Acordo Ortográfico vigente.""",
  ("micro-ondas, autoestima, anti-inflacionário, coautor.", "Hífen quando o prefixo termina na mesma vogal que inicia o 2º elemento (micro-ondas, anti-inflacionário); sem hífen com vogais diferentes (autoestima); \"co\" aglutina (coautor)."),
  [("microondas, autoestima, anti-inflacionário, coautor.", "Vogais iguais exigem hífen: micro-ondas."),
   ("micro-ondas, auto-estima, anti-inflacionário, coautor.", "Vogais diferentes: autoestima, sem hífen."),
   ("micro-ondas, autoestima, antiinflacionário, coautor.", "Vogais iguais: anti-inflacionário."),
   ("micro-ondas, autoestima, anti-inflacionário, co-autor.", "O prefixo \"co\" aglutina: coautor.")],
  pai="LP-0098", tags=["hífen", "Acordo Ortográfico"], var="conceito: novas palavras", verif=V("14"))

Q(M, "14", """As palavras "baú", "saúde" e "juízes" são acentuadas porque""",
  ("têm \"i\" ou \"u\" tônicos que formam hiato com a vogal anterior e ficam sozinhos na sílaba (ou com \"s\").", "Regra do hiato: ba-ú, sa-ú-de, ju-í-zes."),
  [("são oxítonas terminadas em vogal.", "Só \"baú\" é oxítona; \"saúde\" e \"juízes\" são paroxítonas."),
   ("são paroxítonas terminadas em ditongo.", "Não terminam em ditongo."),
   ("são proparoxítonas.", "Nenhuma é proparoxítona."),
   ("têm acento diferencial.", "Não se trata de acento diferencial.")],
  pai="LP-0101", dif=1, tags=["acentuação", "hiato"], var="conceito: novas palavras", verif=V("14"))

Q(M, "14", """Assinale a alternativa em que a acentuação está **correta** em todas as palavras, segundo o Acordo Ortográfico vigente.""",
  ("ideia, heroico, feiura, voo, têm (eles).", "Ditongos abertos de paroxítonas sem acento; \"i/u\" após ditongo em paroxítona sem acento; \"oo\" sem acento; \"têm\" com acento diferencial de plural."),
  [("idéia, heroico, feiura, voo, têm (eles).", "\"Ideia\" perdeu o acento (ditongo aberto em paroxítona)."),
   ("ideia, heróico, feiura, voo, têm (eles).", "\"Heroico\" perdeu o acento."),
   ("ideia, heroico, feiúra, voo, têm (eles).", "\"Feiura\" perdeu o acento."),
   ("ideia, heroico, feiura, vôo, têm (eles).", "\"Voo\" perdeu o acento circunflexo.")],
  pai="LP-0028", tags=["acentuação", "Acordo Ortográfico"], var="conceito: inverte para 'correta' com novas palavras", verif=V("14"))

Q(M, "14", """"Os gerentes ___ dúvidas sobre o novo sistema e, por isso, ___ à reunião de amanhã; os clientes ___ nisso uma boa iniciativa."

Completam corretamente as lacunas, na ordem:""",
  ("têm – vêm – veem", "\"Ter\" e \"vir\" no plural levam circunflexo (têm, vêm); \"ver\" no plural é \"veem\", sem acento."),
  [("tem – vem – vêem", "Faltou o acento de plural em têm/vêm, e \"veem\" perdeu o acento."),
   ("têm – vêem – veem", "\"Vir\" na 3ª do plural é \"vêm\"."),
   ("têem – vêm – veem", "\"Têem\" não existe."),
   ("têm – vêm – vêm", "\"Ver\" na 3ª do plural é \"veem\".")],
  pai="LP-0103", dif=1, tags=["acentuação", "verbos ter/vir/ver"], var="conceito: nova frase", verif=V("14"))

Q(M, "14", """Assinale a alternativa em que o emprego de **porque / por que / porquê / por quê** está correto.""",
  ("Ninguém explicou por que o sistema caiu.", "\"Por que\" (separado, sem acento) = pelo qual motivo, em interrogativa indireta."),
  [("O sistema caiu porquê houve sobrecarga.", "Conjunção causal: \"porque\"."),
   ("Por quê o sistema caiu?", "No início de pergunta: \"Por que\"."),
   ("Quero saber o por que da demora.", "Substantivado: \"o porquê\"."),
   ("O sistema caiu, mas ninguém sabe porque.", "No fim da frase: \"por quê\".")],
  pai="LP-0104", dif=1, tags=["porquês"], var="conceito: inverte (assinale a correta)", verif=V("14"))

# =====================================================================
# Crase – pai LP-0100 e inéditas
# =====================================================================
Q(M, "14", """Assinale a alternativa em que o acento grave indicativo de crase está empregado **corretamente**.""",
  ("A agência funciona das 10h às 16h.", "Horas determinadas com \"das... às\": crase."),
  [("O cliente começou à reclamar.", "Não há crase antes de verbo."),
   ("Fizemos o pagamento à prazo.", "Não há crase antes de palavra masculina."),
   ("Entreguei o documento à ela.", "Não há crase antes de pronome pessoal."),
   ("Os relatórios foram enviados à várias filiais.", "\"A\" no singular antes de palavra no plural é só preposição.")],
  pai="LP-0100", dif=1, tags=["crase"], var="conceito: novas frases", verif=V("14"))

Q(M, "14", """Assinale a alternativa em que o acento grave está empregado **incorretamente**.""",
  ("O auditor ficou frente à frente com o gerente.", "Entre palavras repetidas não há crase: frente a frente."),
  [("Refiro-me àquela proposta de ontem.", "Correta: a + aquela."),
   ("A empresa à qual me candidatei respondeu.", "Correta: candidatar-se a + a qual."),
   ("Pagou a compra à vista.", "Correta: locução feminina."),
   ("Assistimos à palestra sobre Open Finance.", "Correta: assistir (= ver) é VTI com \"a\".")],
  pai="LP-0100", dif=2, tags=["crase"], var="conceito: inverte (assinale a incorreta)", verif=V("14"))

Q(M, "14", """Considere as frases:

I. Vou ___ Vitória na próxima semana.
II. Vou ___ Bahia nas férias.
III. Voltei ___ casa cedo.
IV. Fui ___ casa de meus pais.

Completam corretamente as lacunas, na ordem:""",
  ("a – à – a – à", "Vitória: volto de Vitória (sem artigo) → a. Bahia: volto da Bahia → à. Casa (lar, sem especificação) → a. Casa especificada (de meus pais) → à."),
  [("à – à – à – à", "Vitória e \"casa\" sem especificação não admitem artigo."),
   ("a – a – a – a", "Bahia e casa especificada admitem artigo: crase."),
   ("à – a – à – a", "Inverteu todas as situações."),
   ("a – à – à – a", "Trocou os casos da palavra \"casa\".")],
  pai=None, tags=["crase", "nomes de lugar"], var="inédita (crase com nomes de lugar e 'casa')", verif=V("14"))

Q(M, "14", """A presença ou ausência do acento grave altera o sentido da frase em:""",
  ("\"O cliente pagou a vista\" e \"O cliente pagou à vista\".", "Sem crase, \"a vista\" é objeto (pagou a vista, a paisagem/imóvel); com crase, é modo de pagamento (de uma só vez)."),
  [("\"Chegou às 9h\" e \"Chegou as 9h\".", "A segunda forma é simplesmente incorreta; não gera outro sentido aceitável."),
   ("\"Fui à agência\" e \"Fui a agência\".", "A segunda é incorreta, não outro sentido."),
   ("\"Obedeça às normas\" e \"Obedeça as normas\".", "A segunda é desvio de regência na norma-padrão."),
   ("\"Andou a cavalo\" e \"Andou à cavalo\".", "A segunda é incorreta (palavra masculina).")],
  pai=None, dif=3, tags=["crase", "mudança de sentido"], var="inédita (crase e mudança de sentido)", verif=V("14"))

Q(M, "14", """O emprego do sinal indicativo de crase é **facultativo** em:""",
  ("Entreguei o prêmio a/à minha colega de equipe.", "Antes de pronome possessivo feminino singular, o artigo é opcional."),
  [("Dirigiu-se a/à quem o chamou.", "Antes de \"quem\" não há crase."),
   ("Chegamos a/à uma conclusão importante.", "Antes de artigo indefinido \"uma\" não há crase (não se trata de hora)."),
   ("Ele saiu a/às pressas.", "Locução adverbial feminina: crase obrigatória (às pressas)."),
   ("Assisti a/à palestra do diretor.", "Assistir (ver) + palestra (com artigo): crase obrigatória.")],
  pai=None, dif=2, tags=["crase", "facultativa"], var="inédita (crase facultativa)", verif=V("14"))

# =====================================================================
# Concordância verbal e nominal – pai LP-0111 (C/E) e inéditas
# =====================================================================
Q(M, "6", """Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.""",
  ("Deve haver soluções para o problema.", "\"Haver\" (existir) é impessoal, e o auxiliar acompanha: \"deve haver\" no singular."),
  [("Devem haver soluções para o problema.", "Erro da afirmação Certo/Errado da apostila: o auxiliar não vai para o plural."),
   ("Fazem dois anos que a agência foi reformada.", "\"Fazer\" (tempo decorrido) é impessoal: faz dois anos."),
   ("Houveram muitas reclamações no trimestre.", "\"Haver\" (existir) fica no singular: houve."),
   ("Precisam-se de analistas de dados.", "Com VTI o \"se\" indetermina o sujeito: precisa-se.")],
  explic="Questão A–E montada a partir da afirmação Certo/Errado da apostila (\"Devem haver soluções...\") e de outros casos de verbos impessoais e do pronome \"se\".",
  pai="LP-0111", tags=["concordância verbal", "verbos impessoais", "conversão C/E"], var="Certo/Errado → A–E com 5 afirmações", verif=V("6"))

Q(M, "6", """Assinale a alternativa em que a concordância verbal está **incorreta**.""",
  ("Vende-se imóveis comerciais na região central.", "Passiva sintética: o verbo concorda com o sujeito paciente: vendem-se imóveis."),
  [("A maioria dos clientes aprovou o novo aplicativo.", "Correta: partitivo admite singular ou plural."),
   ("Mais de um cliente reclamou da tarifa.", "Correta: \"mais de um\" leva o verbo ao singular."),
   ("Fui eu que assinei o contrato.", "Correta: com \"que\", o verbo concorda com o antecedente \"eu\"."),
   ("Os Estados Unidos anunciaram novas tarifas.", "Correta: nome no plural com artigo leva o verbo ao plural.")],
  pai=None, tags=["concordância verbal"], var="inédita (concordância verbal – casos especiais)", verif=V("6"))

Q(M, "6", """"___ mais de dez anos que o banco não ___ problemas tão graves; entretanto, ___ no último trimestre falhas sérias de segurança."

Completam corretamente as lacunas, na ordem:""",
  ("Faz – enfrentava – houve", "\"Fazer\" (tempo) e \"haver\" (existir) são impessoais (singular); \"enfrentava\" concorda com \"o banco\"."),
  [("Fazem – enfrentava – houve", "\"Fazer\" indicando tempo é impessoal."),
   ("Faz – enfrentavam – houve", "O sujeito de \"enfrentar\" é \"o banco\" (singular)."),
   ("Faz – enfrentava – houveram", "\"Haver\" (existir) não vai ao plural."),
   ("Fazem – enfrentavam – houveram", "Três desvios de concordância.")],
  pai=None, dif=2, tags=["concordância verbal", "verbos impessoais"], var="inédita (haver/fazer impessoais)", verif=V("6"))

Q(M, "6", """"Trinta por cento dos clientes ___ o novo serviço, e 1% da carteira ___ cancelamento."

Completam corretamente as lacunas:""",
  ("aprovaram – pediu", "Porcentagem com especificador no plural (dos clientes) → plural; \"1% da carteira\" → singular."),
  [("aprovou – pediram", "Inverteu as concordâncias."),
   ("aprovou – pediu", "\"Trinta por cento dos clientes\" pede o plural."),
   ("aprovaram – pediram", "\"1% da carteira\" pede o singular."),
   ("aprovaria – pediriam", "Além de mudar o tempo, erra a concordância do segundo verbo.")],
  pai=None, dif=2, tags=["concordância verbal", "porcentagem"], var="inédita (concordância com porcentagem)", verif=V("6"))

Q(M, "6", """Assinale a alternativa que está de acordo com a norma-padrão quanto à concordância nominal.""",
  ("Seguem anexas as planilhas solicitadas, e as duas analistas ficaram meio preocupadas.", "\"Anexo\" é adjetivo e concorda (anexas); \"meio\" (= um pouco) é advérbio, invariável."),
  [("Seguem anexo as planilhas solicitadas.", "\"Anexo\" deve concordar: anexas (ou usar \"em anexo\")."),
   ("As analistas ficaram meias preocupadas.", "\"Meio\" advérbio não varia."),
   ("Havia menas reclamações neste mês.", "\"Menos\" é invariável."),
   ("É proibida entrada de pessoas estranhas.", "Sem determinante, a expressão fica invariável: é proibido entrada.")],
  pai=None, tags=["concordância nominal"], var="inédita (concordância nominal)", verif=V("6"))

Q(M, "6", """"A gerente disse '___' ao cliente; depois, ela ___ revisou os contratos, que estavam ___ ao processo, e saiu ao ___-dia e ___."

Completam corretamente as lacunas, na ordem:""",
  ("obrigada – mesma – anexos – meio – meia", "\"Obrigada\" e \"mesma\" concordam com \"ela\"; \"anexos\" com \"contratos\"; \"meio-dia e meia\" (meia hora)."),
  [("obrigado – mesma – anexos – meio – meia", "Mulher diz \"obrigada\"."),
   ("obrigada – mesmo – anexos – meio – meia", "\"Mesma\" concorda com \"ela\"."),
   ("obrigada – mesma – anexo – meio – meia", "\"Anexos\" concorda com \"contratos\"."),
   ("obrigada – mesma – anexos – meio – meio", "Meio-dia e meia (hora)." )],
  pai=None, dif=2, tags=["concordância nominal"], var="inédita (concordância nominal – palavras variáveis)", verif=V("6"))

Q(M, "6", """Assinale a alternativa em que a palavra **bastante** está empregada de acordo com a norma-padrão.""",
  ("Havia bastantes motivos para a mudança, e os técnicos estavam bastante seguros.", "Adjetivo (= muitos) varia: bastantes motivos; advérbio (modifica adjetivo) não varia: bastante seguros."),
  [("Havia bastante motivos para a mudança.", "Como adjetivo (= muitos), deve concordar: bastantes."),
   ("Os técnicos estavam bastantes seguros.", "Como advérbio, é invariável."),
   ("Eles trabalharam bastantes no projeto.", "Modificando verbo, é advérbio: bastante."),
   ("Havia bastante motivos e técnicos bastantes seguros.", "Dois desvios.")],
  pai=None, dif=2, tags=["concordância nominal", "bastante"], var="inédita (bastante adjetivo × advérbio)", verif=V("6"))

# =====================================================================
# Regência verbal e nominal – inéditas
# =====================================================================
Q(M, "6", """Assinale a alternativa em que a regência verbal está de acordo com a norma-padrão.""",
  ("Os candidatos aspiram a uma vaga no banco e preferem estabilidade a altos salários.", "Aspirar (desejar) é VTI com \"a\"; preferir algo a algo (sem \"mais\" nem \"do que\")."),
  [("Os candidatos aspiram uma vaga no banco.", "No sentido de desejar, \"aspirar\" exige \"a\"."),
   ("Prefiro mais estabilidade do que altos salários.", "\"Preferir\" não admite \"mais\" nem \"do que\"."),
   ("Assisti o jogo da seleção ontem.", "Assistir (ver) é VTI: assisti ao jogo."),
   ("A nova regra implica em custos maiores.", "Implicar (acarretar) é VTD na norma tradicional: implica custos.")],
  pai=None, tags=["regência verbal"], var="inédita (regência verbal)", verif=V("6"))

Q(M, "6", """Assinale a alternativa que **contraria** a norma-padrão quanto à regência verbal.""",
  ("Esqueci da senha do aplicativo.", "Não pronominal: \"esqueci a senha\"; pronominal: \"esqueci-me da senha\"."),
  [("O médico assistiu o paciente durante a noite.", "Correta: assistir (ajudar) é VTD."),
   ("Informei o cliente do novo prazo.", "Correta: informar alguém de algo."),
   ("Procedeu-se à auditoria das contas.", "Correta: proceder (realizar) é VTI com \"a\"."),
   ("Os empregados devem obedecer às normas internas.", "Correta: obedecer a.")],
  pai=None, dif=2, tags=["regência verbal"], var="inédita (regência verbal – assinale a incorreta)", verif=V("6"))

Q(M, "6", """"A sala ___ chegamos estava fechada, e o diretor ___ você se referiu não compareceu."

Completam corretamente as lacunas:""",
  ("a que – a quem", "Chegar a (a sala a que chegamos); referir-se a alguém (a quem)."),
  [("que – que", "Faltam as preposições exigidas pelos verbos."),
   ("em que – que", "Na norma-padrão, \"chegar\" pede \"a\"; \"referir-se\" pede \"a\"."),
   ("onde – de quem", "\"Onde\" indica lugar em que se está; \"referir-se\" pede \"a\"."),
   ("a que – de que", "\"Referir-se\" pede \"a\", e para pessoa usa-se \"quem\".")],
  pai=None, dif=2, tags=["regência verbal", "pronome relativo"], var="inédita (regência com relativos)", verif=V("6"))

Q(M, "6", """A regência nominal está de acordo com a norma-padrão em:""",
  ("A medida é compatível com as metas e favorável ao cliente.", "Compatível com; favorável a."),
  [("A medida é preferível do que a anterior.", "Preferível a: \"é preferível à anterior\"."),
   ("O sistema é passível a falhas.", "Passível de."),
   ("O analista é residente à Rua das Palmeiras.", "Residente em."),
   ("A decisão foi contrária com o parecer.", "Contrária a.")],
  pai=None, dif=2, tags=["regência nominal"], var="inédita (regência nominal)", verif=V("6"))

# =====================================================================
# Vozes do verbo – pai LP-0105 e inéditas
# =====================================================================
Q(M, "15", """Transpondo-se para a voz passiva a frase "A comissão **terá analisado** todos os pedidos até sexta-feira", a forma verbal resultante será:""",
  ("terão sido analisados.", "\"Terá analisado\" é futuro do presente composto; o auxiliar \"ser\" vai para o mesmo tempo (\"terá sido\") e concorda com o novo sujeito \"todos os pedidos\": terão sido analisados."),
  [("serão analisados.", "Futuro do presente simples: perde o aspecto de ação concluída do tempo composto."),
   ("teriam sido analisados.", "Futuro do pretérito composto: muda o tempo verbal."),
   ("terão analisado.", "Continua na voz ativa (falta o auxiliar \"ser\")."),
   ("tinham sido analisados.", "Pretérito mais-que-perfeito composto: muda o tempo verbal.")],
  pai="LP-0105", tags=["vozes do verbo", "voz passiva"], var="voz passiva com outro tempo composto (futuro do presente composto)", verif=V("15"))

Q(M, "15", """Passando-se para a voz ativa a frase "O relatório **foi revisado** pelos auditores externos", obtém-se, com correção e sem alteração de sentido:""",
  ("Os auditores externos revisaram o relatório.", "O agente da passiva vira sujeito e o \"ser\" no pretérito perfeito (\"foi\") indica que o verbo principal fica no pretérito perfeito: revisaram."),
  [("Os auditores externos revisavam o relatório.", "Pretérito imperfeito: muda o tempo verbal."),
   ("Revisou-se o relatório pelos auditores externos.", "Continua na voz passiva (sintética), e a passiva sintética não costuma trazer agente expresso."),
   ("Os auditores externos tinham revisado o relatório.", "Mais-que-perfeito composto: muda o tempo verbal."),
   ("Os auditores externos revisariam o relatório.", "Futuro do pretérito: muda o tempo e acrescenta hipótese.")],
  pai="LP-0105", tags=["vozes do verbo", "voz ativa"], var="sentido inverso: da passiva analítica para a ativa", verif=V("15"))

Q(M, "15", """Há voz passiva sintética (pronominal) em:""",
  ("Aprovaram-se as contas na assembleia de ontem.", "\"Se\" é pronome apassivador: VTD + se, com sujeito paciente \"as contas\" (= as contas foram aprovadas); o verbo concorda com o sujeito."),
  [("O técnico feriu-se ao abrir o gabinete do servidor.", "Voz reflexiva: o sujeito pratica e sofre a ação."),
   ("Os sócios cumprimentaram-se ao fim da reunião.", "Voz reflexiva recíproca (um cumprimentou o outro)."),
   ("Precisa-se de estagiários na área de dados.", "VTI + se: o \"se\" é índice de indeterminação do sujeito, e não há voz passiva."),
   ("O gerente queixou-se do atraso no sistema.", "\"Queixar-se\" é verbo pronominal; o \"se\" é parte integrante do verbo.")],
  pai=None, tags=["vozes do verbo", "pronome se", "voz passiva sintética"], var="inédita (identificação da voz passiva sintética)", verif=V("15"))

Q(M, "6", """A concordância verbal está de acordo com a norma-padrão em:""",
  ("Consertam-se computadores e alugam-se salas para treinamento.", "Passiva sintética: VTD + se concorda com o sujeito paciente no plural (computadores; salas)."),
  [("Aluga-se salas comerciais no centro.", "\"Salas\" é sujeito paciente: alugam-se."),
   ("Precisam-se de analistas com experiência.", "VTI + se: o verbo fica no singular (precisa-se de)."),
   ("Divulgou-se os resultados do concurso.", "\"Os resultados\" é sujeito paciente: divulgaram-se."),
   ("Fazem dez anos que a agência foi inaugurada.", "\"Fazer\" indicando tempo decorrido é impessoal: faz dez anos.")],
  pai=None, tags=["concordância verbal", "pronome se", "voz passiva sintética"], var="inédita (concordância com o pronome se)", verif=V("6"))

# =====================================================================
# Correlação de tempos e modos – pai LP-0106
# =====================================================================
Q(M, "15", """"Se o cliente ________ o contrato hoje, o crédito ________ liberado amanhã."

Preenchem as lacunas com correta correlação entre tempos e modos:""",
  ("assinar – será", "Futuro do subjuntivo na condicional (\"se assinar\") correlaciona-se com o futuro do presente do indicativo (\"será\")."),
  [("assinasse – será", "Imperfeito do subjuntivo pede futuro do pretérito (\"seria\")."),
   ("assinar – seria", "Futuro do subjuntivo pede futuro do presente (\"será\"), não futuro do pretérito."),
   ("assinaria – será", "Futuro do pretérito não cabe na oração introduzida por \"se\" condicional."),
   ("assine – fosse", "Depois de \"se\" condicional não se usa presente do subjuntivo, e \"fosse\" não fecha a correlação.")],
  pai="LP-0106", tags=["correlação de tempos e modos", "subjuntivo"], var="lacunas: futuro do subjuntivo + futuro do presente", verif=V("15"))

Q(M, "15", """Está correta a correlação entre tempos e modos verbais em:""",
  ("O gerente pediu que os clientes trouxessem os documentos originais.", "Verbo da principal no pretérito perfeito (\"pediu\") pede o imperfeito do subjuntivo na subordinada (\"trouxessem\")."),
  [("O gerente pede que os clientes trouxessem os documentos originais.", "Presente na principal pede presente do subjuntivo: \"tragam\"."),
   ("Se tivesse havido chuva, o evento será adiado.", "Mais-que-perfeito do subjuntivo pede futuro do pretérito composto: \"teria sido adiado\"."),
   ("Quando o cliente chegasse, será atendido pelo gerente.", "Futuro do presente na principal pede futuro do subjuntivo: \"quando o cliente chegar\"."),
   ("Caso houver dúvidas, procure o atendimento.", "\"Caso\" pede presente ou imperfeito do subjuntivo: \"caso haja dúvidas\".")],
  pai="LP-0106", dif=2, tags=["correlação de tempos e modos"], var="novas frases (pretérito + imperfeito do subjuntivo; \"caso\" + futuro)", verif=V("15"))

# =====================================================================
# Flexão nominal e verbal – pais LP-0107, LP-0108, LP-0109
# =====================================================================
Q(M, "15", """Os dois plurais estão corretos em:""",
  ("os cartões-postais – os guarda-roupas", "Substantivo + adjetivo: os dois elementos variam (cartões-postais); verbo + substantivo: só o substantivo varia (guarda-roupas)."),
  [("os guardas-roupas – os cartões-postais", "\"Guarda\" é verbo e não varia: guarda-roupas."),
   ("os cartão-postais – os vice-reis", "\"Cartão\" é substantivo e varia: cartões-postais (vice-reis está correto)."),
   ("os alto-falante – os guarda-chuvas", "Em \"alto-falante\" o segundo elemento varia: alto-falantes."),
   ("os vices-reis – as obras-primas", "\"Vice\" é prefixo e não varia: vice-reis (obras-primas está correto).")],
  pai="LP-0107", tags=["flexão nominal", "plural de compostos"], var="plural de compostos com pares de palavras", verif=V("15"))

Q(M, "15", """O plural dos substantivos está correto em todos os itens de:""",
  ("cidadãos – capitães – mãos", "Os plurais dos nomes em -ão são fixados pelo uso: cidadão > cidadãos; capitão > capitães; mão > mãos."),
  [("cidadões – capitães – mãos", "Cidadão faz cidadãos."),
   ("cidadãos – capitãos – mãos", "Capitão faz capitães."),
   ("cidadães – capitões – mãos", "Cidadão faz cidadãos e capitão faz capitães."),
   ("cidadãos – capitães – mães", "\"Mães\" é plural de \"mãe\"; o plural de \"mão\" é \"mãos\".")],
  pai=None, dif=1, tags=["flexão nominal", "plural"], var="inédita (plural dos nomes em -ão)", verif=V("15"))

Q(M, "15", """A forma verbal está de acordo com a norma-padrão em:""",
  ("Quando nós revirmos o contrato, você receberá a nova versão.", "\"Rever\" segue \"ver\": futuro do subjuntivo revir, revires, revir, revirmos..."),
  [("Se o gerente manter a proposta, o acordo sai hoje.", "\"Manter\" segue \"ter\": se o gerente mantiver."),
   ("Os sócios interviram na negociação.", "\"Intervir\" segue \"vir\": intervieram."),
   ("Se a empresa reaver os valores, informará os clientes.", "Futuro do subjuntivo de \"reaver\": reouver."),
   ("O fiscal deteu a carga no porto.", "\"Deter\" segue \"ter\": deteve.")],
  pai="LP-0108", tags=["flexão verbal", "verbos irregulares"], var="outros derivados de ver/ter/vir/haver", verif=V("15"))

Q(M, "15", """A forma verbal **contraria** a norma-padrão em:""",
  ("Se você dispor de tempo, revise o relatório.", "\"Dispor\" segue \"pôr\": se você dispuser."),
  [("Quando ele vier à agência, atenda-o com prioridade.", "Correta: futuro do subjuntivo de \"vir\" é \"vier\"."),
   ("Se nós virmos alguma falha, avisaremos a equipe.", "Correta: futuro do subjuntivo de \"ver\" é \"virmos\"."),
   ("O banco reouve os valores pagos indevidamente.", "Correta: pretérito perfeito de \"reaver\" é \"reouve\" (como \"houve\")."),
   ("Os gestores se precaveram contra novas fraudes.", "Correta: \"precaver\" é regular nas formas existentes (precaveram).")],
  pai="LP-0108", dif=3, tags=["flexão verbal", "verbos irregulares"], var="formato invertido (assinale a forma incorreta)", verif=V("15"))

Q(M, "15", """Todos os superlativos absolutos sintéticos estão na forma erudita em:""",
  ("fidelíssimo – amaríssimo – sacratíssimo", "Formas eruditas, formadas sobre o radical latino: fiel > fidelíssimo; amargo > amaríssimo; sagrado > sacratíssimo."),
  [("fielíssimo – amarguíssimo – sagradíssimo", "As três são formas populares."),
   ("fidelíssimo – amarguíssimo – sacratíssimo", "\"Amarguíssimo\" é popular; a erudita é \"amaríssimo\"."),
   ("fielíssimo – amaríssimo – sacratíssimo", "\"Fielíssimo\" é popular; a erudita é \"fidelíssimo\"."),
   ("fidelíssimo – amaríssimo – sagradíssimo", "\"Sagradíssimo\" é popular; a erudita é \"sacratíssimo\".")],
  pai="LP-0109", dif=3, tags=["flexão nominal", "grau do adjetivo"], var="outros adjetivos com superlativo erudito", verif=V("15"))

# =====================================================================
# Conectivos e reescrita – pai LP-0110 e inéditas
# =====================================================================
Q(M, "6", """Mantendo-se o sentido e a correção, a frase "**Como** o sistema estava instável, a migração foi adiada" pode ser reescrita como:""",
  ("Visto que o sistema estava instável, a migração foi adiada.", "\"Como\" anteposto à principal tem valor causal, assim como \"visto que\"."),
  [("Conquanto o sistema estivesse instável, a migração foi adiada.", "\"Conquanto\" é concessivo: o sentido passa a ser de oposição."),
   ("Contanto que o sistema estivesse instável, a migração foi adiada.", "\"Contanto que\" é condicional."),
   ("À medida que o sistema estava instável, a migração foi adiada.", "\"À medida que\" é proporcional."),
   ("Mesmo que o sistema estivesse instável, a migração foi adiada.", "\"Mesmo que\" é concessivo.")],
  pai="LP-0110", tags=["conectivos", "reescrita", "oração causal"], var="mesma estrutura com conectivo causal", verif=V("6"))

Q(M, "6", """Na frase "O analista estudou **tanto que** foi aprovado em primeiro lugar", a oração destacada estabelece com a anterior relação de:""",
  ("consequência.", "\"Tanto... que\" introduz oração subordinada adverbial consecutiva: a aprovação é consequência da intensidade do estudo."),
  [("causa.", "A causa é o estudo (oração principal); a oração introduzida por \"que\" traz o efeito."),
   ("comparação.", "Comparação pediria \"tanto quanto\" / \"tanto como\"."),
   ("finalidade.", "Finalidade pediria \"para que\" / \"a fim de que\"."),
   ("concessão.", "Não há oposição entre estudar e ser aprovado.")],
  pai=None, dif=1, tags=["subordinação", "oração consecutiva", "conectivos"], var="inédita (classificação de oração adverbial)", verif=V("6"))

Q(M, "6", """"O sistema é seguro; **portanto**, os clientes confiam nele."

Mantêm-se o sentido e a correção na seguinte reescrita, com subordinação:""",
  ("Os clientes confiam no sistema porque ele é seguro.", "\"Portanto\" (conclusiva) liga causa e consequência; na reescrita, a causa passa a oração subordinada causal (\"porque ele é seguro\")."),
  [("Embora o sistema seja seguro, os clientes confiam nele.", "Concessão: sugere oposição que não existe no original."),
   ("Os clientes confiam no sistema, mas ele é seguro.", "Adversativa: cria contraste incoerente."),
   ("O sistema é seguro, contanto que os clientes confiem nele.", "Condição: inverte a relação, a segurança passaria a depender da confiança."),
   ("Se os clientes confiam no sistema, ele é seguro.", "Inverte causa e efeito: a confiança vira condição da segurança.")],
  pai=None, tags=["coordenação", "subordinação", "reescrita", "conectivos"], var="inédita (coordenada conclusiva → subordinada causal)", verif=V("6"))

# =====================================================================
# Contexto histórico e gênero – pais LP-0112, LP-0113 (C/E → múltipla escolha)
# =====================================================================
Q(M, "15", """Um texto informa que um equipamento custava "40 mil cruzados" e que o pedido havia sido confirmado "por telex". Com base nessas marcas, é correto afirmar que o texto""",
  ("foi produzido antes da criação do real, em 1994, pois o cruzado circulou de 1986 a 1989.", "Marcas como a moeda vigente ajudam a situar o texto: o cruzado é dos anos 1980, anterior ao real."),
  [("foi produzido depois de 1994, pois o telex ainda era usado nessa época.", "A moeda citada já não existia em 1994; o raciocínio ignora a marca mais segura."),
   ("não pode ser datado, pois moedas e tecnologias não indicam a época do texto.", "Moedas e tecnologias são marcas do contexto histórico de produção."),
   ("é necessariamente da década de 1970, quando o telex era o principal meio de comunicação.", "O cruzado só foi criado em 1986."),
   ("foi produzido depois de 2000, já que menciona tecnologia de comunicação a distância.", "Telex e cruzado são marcas de época anteriores ao real.")],
  pai="LP-0112", tags=["contexto histórico", "interpretação"], var="C/E convertida em múltipla escolha (datação pelo contexto)", verif=V("15"))

Q(M, "15", """Estão corretas, quanto ao gênero, todas as expressões de:""",
  ("o grama de ouro – a cal – o dó", "\"Grama\" (unidade de massa) e \"dó\" (pena) são masculinos; \"cal\" é feminino."),
  [("a grama de ouro – a cal – o dó", "\"Grama\" como unidade de massa é masculino (a grama é a planta)."),
   ("o grama de ouro – o cal – o dó", "\"Cal\" é feminino: a cal."),
   ("o grama de ouro – a cal – a dó", "\"Dó\" é masculino: o dó."),
   ("a omoplata – o alface – o eclipse", "\"Alface\" é feminino: a alface.")],
  pai="LP-0113", dif=2, tags=["flexão nominal", "gênero"], var="C/E convertida em múltipla escolha (outros substantivos de gênero vacilante)", verif=V("15"))

# =====================================================================
# Interpretação – inéditas com texto curto
# =====================================================================
Q(M, "1", """Leia o texto:

"A popularização dos pagamentos instantâneos trouxe conveniência, mas também abriu espaço para golpes que exploram a pressa do usuário. Nenhuma tecnologia, por mais segura que seja, protege quem transfere dinheiro sem conferir o destinatário. Por isso, além de mecanismos de devolução, as instituições investem em campanhas que ensinam o cliente a desconfiar de urgências."

A ideia central do texto é que""",
  ("a segurança dos pagamentos instantâneos depende também do comportamento atento do usuário.", "O texto afirma que nenhuma tecnologia protege quem não confere o destinatário e, por isso, destaca a educação do cliente."),
  [("os pagamentos instantâneos são inseguros e devem ser evitados.", "Generalização: o texto reconhece a conveniência e não recomenda abandoná-los."),
   ("os mecanismos de devolução tornaram os golpes impossíveis.", "O texto apresenta a devolução como complemento, não como solução definitiva."),
   ("as campanhas educativas substituem os mecanismos tecnológicos de proteção.", "O texto diz \"além de\": as campanhas somam-se aos mecanismos."),
   ("os golpes decorrem exclusivamente de falhas da tecnologia.", "Contradiz o texto, que atribui os golpes à exploração da pressa do usuário.")],
  pai=None, tags=["interpretação", "ideia central"], var="inédita (texto curto novo)", verif=V("1"))

Q(M, "1", """Na frase "O banco **ainda** não lançou o novo aplicativo", o termo destacado permite inferir que""",
  ("existe a expectativa de que o aplicativo seja lançado.", "\"Ainda não\" pressupõe que o fato é esperado ou previsto para depois."),
  [("o aplicativo foi lançado e depois retirado.", "Nada no enunciado indica lançamento anterior."),
   ("o banco desistiu definitivamente do aplicativo.", "\"Ainda\" indica o contrário: a possibilidade continua aberta."),
   ("outros bancos já lançaram aplicativos semelhantes.", "Extrapolação: a frase não compara instituições."),
   ("o aplicativo será lançado na próxima semana.", "O pressuposto é de expectativa, sem data definida.")],
  pai=None, dif=1, tags=["interpretação", "pressuposto"], var="inédita (pressuposto marcado por advérbio)", verif=V("1"))
