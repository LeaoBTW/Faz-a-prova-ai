# -*- coding: utf-8 -*-
"""Vendas, Negociação e Atendimento (Técnico Bancário) — inéditas estilo FCC."""
from comum import TQ

AT = "Atendimento: conceitos, qualidade e satisfação do cliente"
CO = "Comunicação interpessoal e atendimento presencial e digital"
CC = "Comportamento do consumidor de produtos financeiros"
TV = "Técnicas de vendas e pós-venda"
PF = "Prospecção, fidelização e retenção de clientes"
NE = "Negociação: conceitos, etapas, estratégias e técnicas"
CR = "CRM, marketing de relacionamento e experiência do cliente"
AD = "Adequação de produtos ao perfil do cliente"
ET = "Ética e transparência na venda de produtos financeiros"
RC = "Reclamações, conflitos e mediação"
CN = "Canais de atendimento e transformação digital"
MG = "Metas, segmentação e gestão de carteira"

QUESTOES = [
TQ("VNA", "Negociação: conceitos, etapas, estratégias e técnicas",
   "Em uma negociação, a melhor alternativa que cada parte tem caso o acordo não seja fechado, usada para definir até onde vale a pena ceder, é conhecida pela sigla",
   "BATNA (ou MAANA, em português).",
   ["ZOPA.", "SLA.", "CRM.", "NPS."],
   "**BATNA** (*Best Alternative to a Negotiated Agreement*), em português MAANA, é a melhor alternativa sem acordo: se a proposta for pior que ela, não vale fechar. **ZOPA** é a zona de possível acordo, a faixa onde os limites das partes se sobrepõem. **SLA** é acordo de nível de serviço. **CRM** é gestão do relacionamento com clientes. **NPS** mede a disposição do cliente em recomendar a empresa.", dif=1),
# ---------------- Atendimento ----------------
TQ("VNA", AT,
   "Segundo a abordagem clássica de marketing, a satisfação do cliente resulta, essencialmente, da comparação entre",
   "o desempenho percebido do serviço e as expectativas prévias do cliente.",
   ["o preço pago pelo cliente e o custo de produção do serviço para a empresa.",
    "o número de produtos contratados e a meta comercial do atendente.",
    "o tempo de relacionamento do cliente e a quantidade de reclamações registradas.",
    "a qualidade técnica do serviço e as normas internas da instituição."],
   "Para Kotler, **satisfação** é o sentimento resultante da comparação entre o **desempenho percebido** e as **expectativas**: se o desempenho fica abaixo, o cliente fica insatisfeito; se iguala, satisfeito; se supera, encantado.\n\n"
   "- Preço x custo de produção é uma relação de margem da empresa, não de satisfação.\n"
   "- Produtos contratados x meta medem resultado comercial do atendente.\n"
   "- Tempo de relacionamento e número de reclamações são indicadores relacionados, mas não definem a satisfação.\n"
   "- Normas internas são referência da empresa; a satisfação depende da percepção do cliente.", dif=1, tags=["satisfacao"]),

TQ("VNA", AT,
   "A expressão “momentos da verdade”, popularizada por Jan Carlzon ao reestruturar uma companhia aérea escandinava, refere-se",
   "a qualquer contato do cliente com a empresa em que ele forma impressão sobre o serviço.",
   ["apenas ao momento em que o cliente assina o contrato e efetiva a compra do produto.",
    "às auditorias internas que verificam se os atendentes cumpriram os procedimentos.",
    "ao momento em que o gerente revela ao cliente as tarifas e encargos ocultos da operação.",
    "às reuniões periódicas em que a equipe comercial confronta os resultados com as metas."],
   "**Momento da verdade** é qualquer episódio em que o cliente entra em contato com a empresa (um atendente, o aplicativo, a fila, um extrato, uma ligação) e forma opinião sobre ela. Carlzon defendia que a soma desses pequenos contatos define a imagem da organização.\n\n"
   "- Não se restringe à assinatura do contrato: ocorre antes, durante e depois da venda.\n"
   "- Auditoria interna é controle, não contato com o cliente.\n"
   "- Não há relação com “revelar encargos ocultos” (o que, aliás, seria falta de transparência).\n"
   "- Reuniões de metas são atividades internas da equipe.", dif=2, tags=["momentos-da-verdade"]),

TQ("VNA", AT,
   "Um cliente foi atendido com cordialidade pelo caixa, mas, ao chegar à agência, encontrou a porta giratória travando sem explicação, o ambiente desorganizado e o terminal de senhas sem funcionar. Do ponto de vista dos momentos da verdade, é correto afirmar que",
   "a impressão do cliente resulta do conjunto dos contatos, e falhas anteriores podem comprometer até um bom atendimento pessoal.",
   ["apenas o contato com o funcionário conta como momento da verdade; ambiente e equipamentos não influenciam a percepção.",
    "o atendimento cordial do caixa anula automaticamente as falhas anteriores, pois o último contato é o único avaliado.",
    "falhas de infraestrutura são responsabilidade da área de engenharia e não afetam a qualidade percebida do atendimento.",
    "momentos da verdade só ocorrem quando o cliente apresenta uma reclamação formal."],
   "O cliente avalia a **experiência completa**: estrutura física, equipamentos, sinalização e pessoas são todos pontos de contato. Um ciclo de serviço com vários momentos negativos tende a gerar percepção negativa, ainda que algum contato seja bom.\n\n"
   "- Ambiente e equipamentos também são momentos da verdade.\n"
   "- Um contato positivo não anula automaticamente os negativos; a avaliação é do conjunto.\n"
   "- Para o cliente, não importa qual área interna é responsável: a falha é da empresa.\n"
   "- Momentos da verdade ocorrem em todos os contatos, não só em reclamações.", dif=3, tags=["momentos-da-verdade"]),

TQ("VNA", AT,
   "Na escala SERVQUAL, que avalia a qualidade de serviços, a dimensão que corresponde à capacidade de executar o serviço prometido de forma correta e consistente, já na primeira vez, é a",
   "confiabilidade.",
   ["tangibilidade.", "empatia.", "responsividade.", "segurança."],
   "As cinco dimensões do SERVQUAL (Parasuraman, Zeithaml e Berry) são: **confiabilidade** (cumprir o prometido com precisão), **responsividade** (presteza e disposição para ajudar), **segurança** (competência e cortesia que transmitem confiança), **empatia** (atenção individualizada) e **tangíveis** (instalações, equipamentos, aparência).\n\n"
   "- Tangibilidade: aspectos físicos visíveis.\n- Empatia: cuidado individualizado.\n- Responsividade: rapidez e prontidão.\n- Segurança: conhecimento e cortesia que inspiram confiança.", dif=2, tags=["servqual", "qualidade"]),

TQ("VNA", AT,
   "Uma cliente pede ajuda ao atendente para entender uma cobrança, e ele interrompe o que está fazendo, atende prontamente e informa um prazo realista para a resposta. Na terminologia de qualidade em serviços (SERVQUAL), esse comportamento evidencia principalmente a dimensão",
   "responsividade.",
   ["tangibilidade.", "confiabilidade.", "perecibilidade.", "variabilidade."],
   "**Responsividade** é a disposição de ajudar o cliente e fornecer serviço com presteza, inclusive informando quando ele será executado.\n\n"
   "- Tangibilidade refere-se a instalações, equipamentos e materiais.\n"
   "- Confiabilidade é cumprir corretamente o que foi prometido; está relacionada, mas o foco da situação é a prontidão.\n"
   "- Perecibilidade e variabilidade são **características dos serviços** (ao lado de intangibilidade e inseparabilidade), não dimensões do SERVQUAL.", dif=2, tags=["servqual"]),

TQ("VNA", AT,
   "Considere as afirmativas sobre excelência no atendimento ao cliente bancário.\n\nI. Excelência no atendimento significa atender às necessidades do cliente e, sempre que possível, superar suas expectativas.\nII. Padronizar procedimentos ajuda a reduzir a variabilidade do serviço, mas não dispensa a sensibilidade para tratar cada cliente de forma individualizada.\nIII. Como o atendimento é responsabilidade exclusiva da linha de frente, as áreas de apoio não influenciam a qualidade percebida pelo cliente.\n\nEstá correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "II e III, apenas.", "III, apenas.", "I, II e III."],
   "**I** correta: excelência vai além de cumprir o básico; busca encantar. **II** correta: padrões dão consistência, mas o atendimento deve ser personalizado. **III** errada: há o conceito de **cliente interno** — as áreas de apoio (retaguarda, TI, compensação) atendem a linha de frente, e suas falhas chegam ao cliente final.\n\n"
   "Por isso, as combinações que incluem III ou que deixam de fora II estão erradas.", dif=2, tags=["excelencia", "cliente-interno"]),

TQ("VNA", AT,
   "No contexto da qualidade em serviços, o conceito de cliente interno indica que",
   "setores e colegas que dependem do trabalho de outros também são clientes, e atendê-los bem reflete no cliente externo.",
   ["somente os funcionários que possuem conta corrente no próprio banco são considerados clientes.",
    "o cliente externo deve ser atendido apenas por funcionários da área comercial, e nunca pelos demais.",
    "os acionistas da instituição são os únicos clientes cuja satisfação deve ser medida e acompanhada pela gestão.",
    "o cliente que frequenta a agência pessoalmente tem prioridade sobre o que usa canais digitais."],
   "**Cliente interno** é qualquer pessoa ou setor da organização que depende do trabalho de outro setor. A cadeia interna bem atendida produz bom serviço ao **cliente externo**.\n\n"
   "- Ter conta no banco não é o critério do conceito.\n- Todos os setores contribuem para o atendimento externo.\n- Acionistas são *stakeholders*, mas não são o foco do conceito.\n- Presencial e digital não têm hierarquia por esse conceito.", dif=2, tags=["cliente-interno"]),

TQ("VNA", AT,
   "Serviços apresentam características que os distinguem dos bens físicos. A característica segundo a qual o serviço não pode ser estocado — um horário de atendimento ocioso, por exemplo, não pode ser guardado para o dia seguinte — denomina-se",
   "perecibilidade.",
   ["intangibilidade.", "inseparabilidade.", "variabilidade.", "tangibilidade."],
   "As quatro características dos serviços (Kotler) são: **intangibilidade** (não pode ser visto ou tocado antes da compra), **inseparabilidade** (produção e consumo simultâneos, com participação do prestador e do cliente), **variabilidade** (a qualidade depende de quem presta, quando e onde) e **perecibilidade** (não pode ser estocado).\n\n"
   "- Intangibilidade, inseparabilidade e variabilidade descrevem outras características.\n- *Tangibilidade* não é característica dos serviços; é o oposto da intangibilidade.", dif=1, tags=["servicos", "caracteristicas"]),

TQ("VNA", AT,
   "Ao vender um seguro residencial, o atendente mostra ao cliente depoimentos de segurados, a apólice-modelo e o folheto com as coberturas, para que ele “visualize” o que está comprando. Essa estratégia busca reduzir o efeito de qual característica dos serviços?",
   "Intangibilidade.",
   ["Perecibilidade.", "Inseparabilidade.", "Sazonalidade.", "Elasticidade."],
   "Como o serviço é **intangível**, o cliente não consegue avaliá-lo antes da compra. As empresas procuram **tangibilizá-lo** com evidências físicas: documentos, ambiente, marca, depoimentos, certificados.\n\n"
   "- Perecibilidade é a impossibilidade de estocar.\n- Inseparabilidade é a produção e consumo simultâneos.\n- Sazonalidade é variação de demanda ao longo do tempo.\n- Elasticidade é sensibilidade da demanda ao preço; nenhuma delas é atacada por tornar o serviço visível.", dif=2, tags=["servicos", "intangibilidade"]),

TQ("VNA", AT,
   "Em uma agência, cada caixa conduz o atendimento de um jeito: uns conferem documentos com mais cuidado, outros são mais rápidos, e a avaliação dos clientes oscila conforme o funcionário. O gerente decide adotar roteiros padronizados e treinamento comum. Ele está tratando da característica dos serviços chamada",
   "variabilidade (ou heterogeneidade).",
   ["intangibilidade.", "perecibilidade.", "propriedade.", "inseparabilidade da marca."],
   "**Variabilidade** (heterogeneidade) significa que a qualidade do serviço depende de quem o presta, quando e onde. Padronização de processos, treinamento e monitoramento da satisfação são as formas clássicas de reduzi-la.\n\n"
   "- Intangibilidade: não se pode ver ou tocar o serviço.\n- Perecibilidade: o serviço não pode ser estocado.\n- “Propriedade” e “inseparabilidade da marca” não são características clássicas dos serviços (a característica é inseparabilidade entre produção e consumo).", dif=2, tags=["servicos", "variabilidade"]),

TQ("VNA", AT,
   "Considerando a legislação de atendimento prioritário, um técnico bancário que organiza a fila do atendimento presencial deve",
   "garantir prioridade a idosos, gestantes e pessoas com deficiência, entre outros, sem descuidar do atendimento aos demais.",
   ["oferecer prioridade apenas aos clientes com maior volume de investimentos, conforme a segmentação comercial.",
    "conceder prioridade somente quando o cliente prioritário apresentar requerimento por escrito.",
    "encaminhar os clientes prioritários exclusivamente aos terminais de autoatendimento.",
    "dispensar a prioridade quando a fila comum estiver longa, para não gerar reclamações."],
   "A lei assegura **atendimento prioritário** a grupos como idosos, gestantes, lactantes, pessoas com deficiência e pessoas com crianças de colo, entre outros. É um direito, não uma cortesia comercial.\n\n"
   "- Segmentação por renda pode definir modelos de atendimento, mas não substitui a prioridade legal.\n- Não se exige requerimento escrito.\n- Direcionar só para o autoatendimento nega o atendimento pessoal prioritário.\n- Fila longa não suspende o direito.", dif=2, tags=["atendimento-prioritario"]),

# ---------------- Comunicação ----------------
TQ("VNA", CO,
   "Durante o atendimento, o técnico bancário mantém contato visual, faz perguntas abertas e, ao final, diz: “Então, se entendi bem, o senhor quer reduzir a parcela do financiamento sem aumentar muito o prazo, é isso?”. Essa última fala é um exemplo de",
   "paráfrase, técnica de escuta ativa que confirma o entendimento da mensagem do cliente.",
   ["fechamento presumido, técnica de vendas que dá a venda como concluída.",
    "comunicação passiva, pois o atendente evita expor sua opinião.",
    "ruído de comunicação, pois repete o que o cliente já disse.",
    "barganha distributiva, pois o atendente apresenta uma contraproposta."],
   "Na **escuta ativa**, o ouvinte demonstra atenção e confirma a compreensão, por exemplo **parafraseando** (reformulando com suas palavras) o que ouviu. Isso evita mal-entendidos e faz o cliente se sentir compreendido.\n\n"
   "- Fechamento presumido seria tratar a contratação como decidida; a fala apenas confirma uma necessidade.\n- Comunicação passiva é deixar de expressar necessidades e opiniões próprias; aqui há participação ativa.\n- Ruído é interferência que distorce a mensagem; a paráfrase reduz ruídos.\n- Não há proposta nem disputa de valor.", dif=1, tags=["escuta-ativa"]),

TQ("VNA", CO,
   "Em relação à empatia no atendimento, é correto afirmar que ela consiste em",
   "procurar compreender a situação e os sentimentos do cliente pelo ponto de vista dele, sem precisar concordar com tudo.",
   ["concordar com tudo o que o cliente diz, para evitar qualquer conflito e preservar o relacionamento com ele.",
    "sentir pena do cliente e oferecer, por isso, condições excepcionais fora das normas.",
    "adotar o mesmo tom de voz do cliente, inclusive quando ele estiver exaltado.",
    "demonstrar simpatia por meio de sorrisos, independentemente do problema relatado."],
   "**Empatia** é colocar-se no lugar do outro para entender seu ponto de vista e suas emoções. Ser empático não obriga a atender a pedidos indevidos: é possível compreender a frustração e, ao mesmo tempo, explicar limites.\n\n"
   "- Concordar com tudo é submissão, não empatia.\n- Pena e concessões fora da norma não são empatia e geram risco.\n- Espelhar um cliente exaltado tende a escalar o conflito.\n- Sorrir é simpatia/cordialidade; empatia exige compreensão do problema.", dif=2, tags=["empatia"]),

TQ("VNA", CO,
   "Um cliente se queixa de uma tarifa. O atendente responde: “Entendo sua insatisfação. Essa tarifa está prevista no pacote que o senhor contratou, mas posso mostrar as opções de pacote mais adequadas ao seu uso”. Essa resposta caracteriza um estilo de comunicação",
   "assertivo: claro, respeitoso e propositivo, sem agressividade e sem submissão.",
   ["passivo, pois o atendente evita contrariar o cliente e cede ao pedido.",
    "agressivo, pois o atendente contradiz o cliente ao mencionar o contrato.",
    "passivo-agressivo, pois o atendente demonstra ironia ao oferecer outro pacote.",
    "manipulador, pois a oferta de outro pacote tem o objetivo oculto de aumentar a receita."],
   "A **comunicação assertiva** expressa fatos e posições de modo claro, honesto e respeitoso, reconhecendo o sentimento do outro, sem agredir e sem se omitir.\n\n"
   "- Passivo seria ceder sem fundamento ou não informar a regra.\n- Agressivo envolveria desqualificar ou confrontar o cliente.\n- Não há ironia na fala.\n- Não há elemento oculto: a oferta é transparente e ligada ao perfil de uso.", dif=2, tags=["assertividade"]),

TQ("VNA", CO,
   "Sobre comunicação verbal e não verbal no atendimento presencial, é correto afirmar:",
   "Gestos, postura e tom de voz também comunicam e, se contradizem as palavras, reduzem a credibilidade do atendente.",
   ["A comunicação não verbal é irrelevante no atendimento bancário, pois o que importa é a informação técnica.",
    "O tom de voz faz parte da comunicação verbal escrita e por isso não interfere na mensagem falada.",
    "Cruzar os braços e evitar contato visual costumam transmitir abertura e interesse pelo cliente.",
    "Falar de forma técnica, com siglas e jargões, garante que o cliente perceba a competência do atendente."],
   "A mensagem é composta pelas **palavras** e por **elementos não verbais** (expressão, gestos, postura, tom, ritmo). Incoerência entre eles gera desconfiança.\n\n"
   "- A comunicação não verbal é muito relevante.\n- O tom de voz é elemento paraverbal/não verbal da fala, e interfere fortemente.\n- Braços cruzados e ausência de contato visual costumam sinalizar fechamento ou desinteresse.\n- Jargões criam ruído; deve-se adequar a linguagem ao cliente.", dif=2, tags=["comunicacao-nao-verbal"]),

TQ("VNA", CO,
   "Ao explicar a um cliente idoso, com pouca familiaridade com finanças, o funcionamento de um CDB, o atendente usa termos como “marcação a mercado”, “indexador” e “liquidez D+0” sem explicá-los. No processo de comunicação, essa situação representa principalmente",
   "um ruído causado pela inadequação do código (linguagem) ao receptor.",
   ["um feedback adequado, pois o cliente recebeu toda a informação técnica.",
    "uma falha do canal, que deveria ter sido o aplicativo do banco.",
    "uma comunicação assertiva, porque usa termos precisos.",
    "uma escuta ativa, porque o atendente explicou o produto completo."],
   "No modelo de comunicação (emissor, mensagem, código, canal, receptor, feedback), **ruído** é tudo que dificulta a compreensão. Usar jargão com quem não domina o código impede a decodificação. O atendente deve adaptar a linguagem e verificar o entendimento.\n\n"
   "- Não houve *feedback* de compreensão.\n- O canal (presencial) não é o problema.\n- Assertividade exige clareza para o receptor; precisão técnica incompreensível não basta.\n- Escuta ativa é ouvir o cliente, não explicar o produto.", dif=2, tags=["ruido", "comunicacao"]),

TQ("VNA", CO,
   "Para que o feedback dado por um supervisor a um colaborador do atendimento seja eficaz, recomenda-se que ele seja",
   "específico, oportuno e focado em comportamentos observáveis, e não em características pessoais.",
   ["genérico, para não constranger o colaborador com exemplos concretos.",
    "dado somente na avaliação anual, para reunir todas as ocorrências.",
    "feito preferencialmente em público, para servir de exemplo à equipe.",
    "centrado na personalidade do colaborador, para que ele mude sua forma de ser."],
   "*Feedback* eficaz descreve **fatos e comportamentos concretos**, é dado **próximo ao fato** e visa à melhoria. Feedback corretivo deve ser preferencialmente privado.\n\n"
   "- Genérico não orienta a mudança.\n- Esperar a avaliação anual perde a oportunidade de correção.\n- Feedback corretivo em público humilha e gera defesa.\n- Julgar a personalidade é ataque pessoal; o foco é a conduta.", dif=1, tags=["feedback"]),

TQ("VNA", CO,
   "Considere as seguintes práticas no atendimento por chat do banco.\n\nI. Usar linguagem clara e cordial, evitando textos em letras maiúsculas, que podem soar como grito.\nII. Informar ao cliente, quando a solução depender de outra área, o prazo e a forma de retorno.\nIII. Solicitar a senha da conta pelo chat para agilizar a validação da identidade do cliente.\n\nSão boas práticas de atendimento digital as indicadas em",
   "I e II, apenas.",
   ["I, apenas.", "II, apenas.", "I e III, apenas.", "I, II e III."],
   "**I** correta: no texto, maiúsculas e tom seco são lidos como agressividade; a clareza é essencial. **II** correta: transparência sobre prazos e retorno reduz ansiedade e recontatos. **III** errada: o banco **nunca** deve solicitar senha ao cliente por chat, telefone ou e-mail; isso contraria regras de segurança e é justamente o que golpistas fazem.\n\nPor isso, qualquer alternativa que inclua III ou exclua I ou II está errada.", dif=1, tags=["atendimento-digital", "seguranca"]),

TQ("VNA", CO,
   "Para estabelecer rapport com um cliente no início do atendimento, a conduta mais adequada é",
   "criar sintonia e confiança, chamando-o pelo nome, mostrando interesse genuíno e ajustando-se ao ritmo dele.",
   ["apresentar imediatamente todos os produtos em campanha, para aproveitar o tempo do cliente.",
    "evitar conversar sobre assuntos que não sejam técnicos, para manter a formalidade máxima.",
    "contar histórias pessoais longas, para que o cliente conheça bem o atendente.",
    "concordar com todas as opiniões do cliente, inclusive sobre concorrentes, para agradá-lo."],
   "**Rapport** é a sintonia/confiança mútua que facilita a comunicação. Constrói-se com cordialidade, atenção, uso do nome, linguagem e ritmo adequados.\n\n"
   "- Despejar produtos antes de entender o cliente afasta e é venda empurrada.\n- Formalidade excessiva dificulta a aproximação.\n- Histórias pessoais longas desviam o foco do cliente.\n- Concordar com tudo é bajulação e compromete a credibilidade.", dif=1, tags=["rapport"]),

TQ("VNA", CO,
   "Em uma ligação, o cliente fala rapidamente e de forma confusa sobre um débito que não reconhece. A técnica de perguntas mais adequada para, primeiro, entender o contexto e, depois, confirmar dados específicos é",
   "começar com perguntas abertas para entender o relato e depois usar perguntas fechadas para confirmar dados.",
   ["usar apenas perguntas fechadas desde o início, para encurtar a ligação e reduzir o tempo médio de atendimento.",
    "evitar perguntas e transferir a ligação imediatamente para outro setor.",
    "fazer perguntas indutivas, sugerindo ao cliente que ele próprio esqueceu a compra realizada no cartão.",
    "usar somente perguntas abertas até o fim, sem confirmar nenhum dado específico."],
   "**Perguntas abertas** (“O que aconteceu?”, “Como percebeu o débito?”) exploram a situação; **perguntas fechadas** (“A data foi dia 10?”, “O valor é R$ 89,90?”) confirmam dados. A combinação, nessa ordem, é a mais eficiente.\n\n"
   "- Só perguntas fechadas podem deixar escapar informações relevantes.\n- Transferir sem entender gera recontato e frustração.\n- Perguntas indutivas culpam o cliente e enviesam a resposta.\n- Sem perguntas fechadas, faltam confirmações necessárias à solução.", dif=2, tags=["perguntas", "escuta-ativa"]),

TQ("VNA", CO,
   "Em atendimento por e-mail, um cliente envia mensagem irritada, com reclamações sobre vários assuntos. A resposta mais adequada do atendente é",
   "acolher a insatisfação, responder a cada ponto de forma organizada e indicar os próximos passos e prazos.",
   ["responder no mesmo tom, para demonstrar firmeza diante das acusações.",
    "responder apenas ao primeiro assunto, pois os demais devem ser objeto de novo e-mail do cliente ao banco.",
    "enviar resposta automática padrão, sem tratar os pontos, para ganhar tempo.",
    "aguardar que o cliente se acalme e responder somente se ele voltar a escrever."],
   "No atendimento digital escrito, recomenda-se **acolher** (reconhecer a emoção), **organizar** a resposta por tópicos, ser **claro** e **indicar próximos passos**, reduzindo novos contatos.\n\n"
   "- Revidar o tom escala o conflito.\n- Responder parcialmente obriga recontato e aumenta a insatisfação.\n- Resposta automática sem solução passa descaso.\n- Não responder é omissão no atendimento.", dif=2, tags=["atendimento-digital", "e-mail"]),
TQ("VNA", CO,
   "A diferença entre ouvir e escutar, frequentemente destacada em treinamentos de atendimento, consiste em que",
   "ouvir é captar os sons, enquanto escutar exige atenção intencional para compreender a mensagem e sua intenção.",
   ["ouvir exige concentração e interpretação, enquanto escutar é apenas captar sons de forma passiva.",
    "escutar é próprio do atendimento presencial, e ouvir é próprio do atendimento telefônico.",
    "não há diferença entre os termos, que são sinônimos perfeitos no contexto do atendimento.",
    "escutar significa preparar mentalmente a resposta enquanto o cliente ainda está falando."],
   "**Ouvir** é fisiológico (captar sons); **escutar** é um processo ativo de atenção e interpretação, base da **escuta ativa**.\n\n"
   "- A alternativa que inverte os conceitos está errada.\n- A distinção não depende do canal.\n- Em atendimento, a distinção é relevante, logo não são sinônimos.\n- Preparar a resposta enquanto o outro fala é uma barreira à escuta, não escuta.", dif=2, tags=["escuta-ativa"]),

# ---------------- Comportamento do consumidor ----------------
TQ("VNA", CC,
   "No modelo clássico do processo de decisão de compra, a sequência correta das etapas é:",
   "reconhecimento do problema, busca de informações, avaliação de alternativas, decisão de compra e comportamento pós-compra.",
   ["busca de informações, reconhecimento do problema, decisão de compra, avaliação de alternativas e comportamento pós-compra.",
    "avaliação de alternativas, reconhecimento do problema, busca de informações, comportamento pós-compra e decisão de compra.",
    "decisão de compra, busca de informações, reconhecimento do problema, avaliação de alternativas e comportamento pós-compra.",
    "reconhecimento do problema, decisão de compra, busca de informações, avaliação de alternativas e comportamento pós-compra."],
   "O modelo de cinco etapas (Kotler) começa quando o consumidor **reconhece uma necessidade/problema**, **busca informações**, **avalia alternativas**, **decide** e, depois, tem um **comportamento pós-compra** (satisfação, dissonância, recompra, recomendação).\n\n"
   "As demais alternativas embaralham a ordem: não se busca informação antes de reconhecer a necessidade, nem se decide antes de avaliar alternativas.", dif=2, tags=["processo-decisao"]),

TQ("VNA", CC,
   "Após contratar um plano de previdência, o cliente passa a se perguntar se não teria sido melhor aplicar em outro produto e procura o atendente para confirmar se fez a escolha certa. Esse desconforto após a compra é denominado",
   "dissonância cognitiva.",
   ["ancoragem.", "efeito manada.", "reconhecimento do problema.", "aversão à ambiguidade."],
   "**Dissonância cognitiva** pós-compra é o desconforto que surge quando o consumidor duvida da escolha feita. Um bom **pós-venda** (reforçar benefícios, esclarecer dúvidas) ajuda a reduzi-la.\n\n"
   "- Ancoragem é apegar-se a uma referência inicial ao avaliar valores.\n- Efeito manada é seguir o comportamento do grupo.\n- Reconhecimento do problema é a primeira etapa do processo, antes da compra.\n- Aversão à ambiguidade é preferir riscos conhecidos a desconhecidos; não descreve arrependimento pós-compra.", dif=2, tags=["dissonancia", "pos-venda"]),

TQ("VNA", CC,
   "Um investidor mantém uma ação que caiu muito, recusando-se a vendê-la “para não realizar o prejuízo”, mas vende rapidamente outra que subiu pouco. Em finanças comportamentais, esse comportamento está associado principalmente à",
   "aversão à perda (efeito disposição).",
   ["diversificação eficiente da carteira.", "ancoragem no preço de mercado atual.", "racionalidade ilimitada do investidor.", "heurística da disponibilidade de crédito."],
   "Pela **aversão à perda** (Kahneman e Tversky), a dor de perder é maior que o prazer de ganhar o mesmo valor. Daí o **efeito disposição**: vender cedo o que ganha e segurar demais o que perde.\n\n"
   "- Diversificação é técnica de redução de risco, não esse viés.\n- Na situação, o investidor se ancora no **preço de compra**, não no preço atual; e o fenômeno descrito é o efeito disposição.\n- Finanças comportamentais partem justamente da **racionalidade limitada**.\n- “Heurística da disponibilidade de crédito” não é o conceito aplicável.", dif=3, tags=["vieses", "financas-comportamentais"]),

TQ("VNA", CC,
   "Ao apresentar um empréstimo, o atendente informa primeiro uma taxa alta de outro produto e só depois apresenta a taxa do produto oferecido, que passa a parecer baixa ao cliente. O viés comportamental explorado nessa situação é a",
   "ancoragem.",
   ["aversão à perda.", "contabilidade mental.", "dissonância cognitiva.", "procrastinação."],
   "**Ancoragem** é a tendência de tomar a primeira informação numérica como referência para os julgamentos seguintes. Conhecer esse viés ajuda o profissional a **não** usá-lo de forma manipuladora e a apresentar comparações honestas (como o custo efetivo total).\n\n"
   "- Aversão à perda: peso maior das perdas que dos ganhos.\n- Contabilidade mental: tratar o dinheiro de forma diferente conforme a origem ou o destino.\n- Dissonância cognitiva: desconforto pós-decisão.\n- Procrastinação: adiar decisões.", dif=3, tags=["vieses", "ancoragem"]),

TQ("VNA", CC,
   "Um cliente mantém dinheiro aplicado na poupança rendendo pouco e, ao mesmo tempo, paga juros do cheque especial, porque considera que aquele dinheiro é “a reserva para a reforma da casa” e “não pode ser mexido”. Esse comportamento é explicado pelo viés da",
   "contabilidade mental.",
   ["ancoragem.", "excesso de confiança.", "aversão ao arrependimento.", "heurística da representatividade."],
   "Na **contabilidade mental** (Thaler), as pessoas separam o dinheiro em “contas” mentais conforme a origem ou finalidade e deixam de vê-lo como um todo. Aqui, o cliente paga juros altos enquanto mantém recursos que poderiam quitar a dívida — uma oportunidade de **orientação financeira**.\n\n"
   "- Ancoragem: referência numérica inicial.\n- Excesso de confiança: superestimar o próprio conhecimento.\n- Aversão ao arrependimento: evitar decisões por medo de se arrepender.\n- Representatividade: julgar pela semelhança com estereótipos.", dif=3, tags=["vieses", "educacao-financeira"]),

TQ("VNA", CC,
   "Considere as afirmativas sobre o comportamento do consumidor de produtos financeiros.\n\nI. Por serem intangíveis e de difícil avaliação prévia, produtos financeiros fazem a confiança na instituição e no atendente ter grande peso na decisão.\nII. Fatores culturais, sociais, pessoais e psicológicos influenciam a escolha de produtos financeiros.\nIII. O consumidor de produtos financeiros decide sempre de forma totalmente racional, maximizando o retorno esperado.\n\nEstá correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "II, apenas.", "II e III, apenas.", "I, II e III."],
   "**I** correta: a intangibilidade aumenta o risco percebido e torna a confiança decisiva. **II** correta: o modelo de Kotler aponta fatores culturais, sociais, pessoais e psicológicos. **III** errada: as finanças comportamentais mostram que decisões são afetadas por vieses e emoções (racionalidade limitada).\n\nAssim, as combinações que incluem III ou excluem I ou II estão erradas.", dif=3, tags=["fatores-influencia"]),

TQ("VNA", CC,
   "Pela hierarquia de necessidades de Maslow, um cliente que procura um seguro de vida e uma reserva de emergência para proteger a família está buscando satisfazer, predominantemente, necessidades de",
   "segurança.",
   ["autorrealização.", "estima.", "fisiológicas.", "sociais."],
   "Na pirâmide de Maslow (fisiológicas, **segurança**, sociais, estima e autorrealização), a proteção contra riscos e imprevistos corresponde às necessidades de **segurança**.\n\n"
   "- Autorrealização: desenvolvimento pleno do potencial.\n- Estima: reconhecimento e status (ex.: cartão de alta renda como símbolo).\n- Fisiológicas: alimentação, abrigo, sono.\n- Sociais: pertencimento e afeto.", dif=1, tags=["maslow", "necessidades"]),

TQ("VNA", CC,
   "Um cliente que pretende comprar um imóvel visita três bancos, compara o custo efetivo total, o prazo e o valor das parcelas de cada financiamento e monta uma planilha. No processo de decisão de compra, ele está na etapa de",
   "avaliação de alternativas.",
   ["reconhecimento do problema.", "comportamento pós-compra.", "decisão de compra.", "dissonância cognitiva."],
   "Ao comparar opções segundo critérios (CET, prazo, parcela), o consumidor está na **avaliação de alternativas**, etapa que sucede a busca de informações e antecede a decisão.\n\n"
   "- O reconhecimento do problema (precisa financiar o imóvel) já ocorreu.\n- O pós-compra só existe após a contratação.\n- A decisão ainda não foi tomada.\n- Dissonância cognitiva é um fenômeno pós-compra, não uma etapa.", dif=2, tags=["processo-decisao"]),

TQ("VNA", CC,
   "Muitos clientes permanecem anos no mesmo pacote de tarifas ou no mesmo investimento, mesmo havendo opções melhores, por simples comodidade de não mudar. Esse fenômeno é descrito como",
   "viés do status quo (inércia).",
   ["efeito manada.", "excesso de confiança.", "viés de confirmação.", "efeito halo."],
   "O **viés do status quo** é a preferência por manter a situação atual, mesmo quando a mudança traria benefícios. O atendente pode ajudar revisando periodicamente produtos e pacotes do cliente.\n\n"
   "- Efeito manada: imitar a maioria.\n- Excesso de confiança: superestimar as próprias habilidades.\n- Viés de confirmação: buscar só informações que confirmam crenças prévias.\n- Efeito halo: deixar que uma característica positiva contamine a avaliação geral.", dif=2, tags=["vieses"]),

TQ("VNA", CC,
   "Após notícias sobre ganhos expressivos com um criptoativo, vários clientes procuram a agência querendo investir nele “porque todo mundo está ganhando”, sem conhecer seus riscos. O comportamento descrito é típico do",
   "efeito manada.",
   ["viés do status quo.", "viés de aversão à perda.", "efeito dotação.", "planejamento financeiro racional."],
   "No **efeito manada**, o investidor segue o comportamento da maioria em vez de analisar o próprio objetivo e o risco. O atendente deve orientar com base no **perfil do cliente** e nos riscos do produto.\n\n"
   "- Status quo: preferir não mudar.\n- Aversão à perda: evitar perdas a qualquer custo; aqui o movimento é de busca por ganhos.\n- Efeito dotação: valorizar mais algo só por possuí-lo.\n- Não há planejamento racional, mas imitação.", dif=1, tags=["vieses"]),

TQ("VNA", CC,
   "Um jovem recém-contratado e um aposentado procuram a mesma agência. Ao identificar suas necessidades financeiras, o atendente deve considerar que",
   "o estágio no ciclo de vida muda as prioridades: o jovem tende a buscar crédito inicial e reserva; o aposentado, preservação e renda.",
   ["ambos devem receber a mesma oferta padrão, pois a necessidade financeira independe da idade.",
    "o aposentado deve ser direcionado a investimentos de alto risco, por ter mais tempo disponível para acompanhá-los.",
    "o jovem não deve receber orientação sobre reserva de emergência, pois ainda não tem patrimônio.",
    "a idade é o único fator relevante, devendo-se desconsiderar renda, objetivos e conhecimento financeiro."],
   "O **ciclo de vida** (fator pessoal) muda necessidades: acumulação na fase inicial, consolidação na fase intermediária e preservação/usufruto na aposentadoria. Ainda assim, renda, objetivos e tolerância a risco também devem ser avaliados.\n\n"
   "- Oferta padrão ignora necessidades distintas.\n- Tempo livre não define tolerância a risco; em geral, aposentados priorizam preservação.\n- Reserva de emergência é orientação básica justamente para quem está começando.\n- Idade não é o único fator.", dif=3, tags=["ciclo-de-vida", "necessidades"]),

# ---------------- Técnicas de vendas ----------------
TQ("VNA", TV,
   "A venda consultiva, cada vez mais adotada pelos bancos, caracteriza-se por",
   "partir do diagnóstico das necessidades do cliente para recomendar soluções adequadas a ele.",
   ["concentrar o esforço na apresentação do produto em campanha, independentemente do perfil do cliente.",
    "pressionar o cliente a decidir na hora, para evitar que ele compare com a concorrência.",
    "oferecer sempre o produto mais caro, pois ele tende a ter mais benefícios.",
    "dispensar o pós-venda, já que a recomendação inicial foi personalizada."],
   "Na **venda consultiva**, o foco é o **cliente**: ouvir, investigar, diagnosticar e só então propor soluções, construindo relacionamento de longo prazo.\n\n"
   "- Foco no produto da campanha é venda transacional/empurrada.\n- Pressão para decisão imediata contraria a lógica consultiva e a ética.\n- O produto mais caro nem sempre é o adequado.\n- O pós-venda é parte essencial do relacionamento consultivo.", dif=1, tags=["venda-consultiva"]),

TQ("VNA", TV,
   "No método SPIN de vendas, desenvolvido por Neil Rackham, as perguntas de implicação têm a finalidade de",
   "levar o cliente a perceber as consequências e o impacto de um problema ainda não resolvido.",
   ["levantar dados gerais sobre a situação atual do cliente, como renda e produtos que já possui.",
    "identificar dificuldades ou insatisfações do cliente com a situação atual.",
    "fazer o cliente expressar o valor ou o benefício que a solução trará.",
    "encerrar a conversa propondo a assinatura imediata do contrato."],
   "**SPIN**: **S**ituação (fatos e contexto), **P**roblema (dificuldades), **I**mplicação (consequências do problema, ampliando sua importância) e **N**ecessidade de solução (*need-payoff*, o valor da solução, dito pelo próprio cliente).\n\n"
   "- Dados gerais = perguntas de situação.\n- Dificuldades = perguntas de problema.\n- Valor da solução = perguntas de necessidade de solução.\n- O SPIN é um método de investigação, não uma técnica de fechamento.", dif=3, tags=["spin"]),

TQ("VNA", TV,
   "Durante uma conversa com uma comerciante, o atendente pergunta: “Se as vendas no cartão continuarem demorando 30 dias para cair na conta, como isso afeta o pagamento dos seus fornecedores?”. No método SPIN, essa é uma pergunta de",
   "implicação.",
   ["situação.", "problema.", "necessidade de solução.", "fechamento."],
   "A pergunta explora a **consequência** (impacto no pagamento a fornecedores) de um problema já identificado (demora no recebimento). Isso caracteriza **implicação**.\n\n"
   "- Situação seria “Quanto a senhora vende por mês no cartão?”.\n- Problema seria “O prazo de recebimento atrapalha?”.\n- Necessidade de solução seria “Em que ajudaria receber antes?”.\n- Fechamento não faz parte das quatro categorias do SPIN.", dif=3, tags=["spin"]),

TQ("VNA", TV,
   "O modelo AIDA, usado no planejamento de abordagens de venda e de comunicação, descreve as etapas que o cliente percorre na seguinte ordem:",
   "Atenção, Interesse, Desejo e Ação.",
   ["Abordagem, Investigação, Demonstração e Acompanhamento.",
    "Atenção, Informação, Decisão e Aprovação.",
    "Análise, Interesse, Diagnóstico e Ação.",
    "Ação, Interesse, Desejo e Atenção."],
   "**AIDA**: primeiro capturar a **Atenção**, despertar o **Interesse**, gerar o **Desejo** e levar à **Ação** (compra/contratação).\n\n"
   "As demais alternativas trocam termos (abordagem, informação, análise, diagnóstico) ou invertem a sequência, que deve começar pela atenção e terminar na ação.", dif=1, tags=["aida"]),

TQ("VNA", TV,
   "Um cliente diz: “Achei a anuidade desse cartão cara”. A forma mais adequada de tratar essa objeção, segundo as técnicas de vendas consultivas, é",
   "acolher a objeção, entender o que o cliente considera caro e mostrar o valor dos benefícios para o uso dele.",
   ["ignorar a objeção e continuar apresentando os benefícios do cartão, para manter o ritmo da apresentação.",
    "afirmar que todos os bancos cobram o mesmo valor de anuidade, encerrando o assunto.",
    "conceder isenção de anuidade sem consultar as políticas, para não perder a venda.",
    "contra-argumentar de imediato que o cliente está equivocado sobre o preço praticado pelo mercado."],
   "Objeções são **sinais de interesse** e de dúvida. O tratamento recomendado: **ouvir**, **compreender/esclarecer** o motivo, **responder** com valor (benefícios relevantes ao uso do cliente) ou alternativa e **confirmar** se a dúvida foi superada.\n\n"
   "- Ignorar a objeção faz o cliente sentir-se desconsiderado.\n- Generalizar sobre a concorrência pode ser falso e não trata a dúvida.\n- Conceder condição fora da política gera risco e precedente.\n- Contradizer o cliente cria confronto.", dif=2, tags=["objecoes"]),

TQ("VNA", TV,
   "Ao final de uma conversa sobre consórcio, o atendente pergunta ao cliente: “O senhor prefere o plano de 60 ou o de 80 meses?”. Essa técnica de fechamento é conhecida como",
   "fechamento por alternativa (escolha).",
   ["fechamento por urgência.", "fechamento por resumo de benefícios.", "pergunta de situação.", "tratamento de objeção por compensação."],
   "No **fechamento por alternativa**, o vendedor oferece duas opções válidas, ambas levando à contratação, facilitando a decisão. Deve ser usado após identificar a necessidade e sem pressionar.\n\n"
   "- Urgência envolve prazo ou escassez (“só hoje”).\n- Resumo de benefícios recapitula as vantagens antes de pedir a decisão.\n- Pergunta de situação é do SPIN e serve para levantar fatos.\n- Compensação é técnica de objeção que contrapõe vantagens a um ponto fraco admitido.", dif=2, tags=["fechamento"]),

TQ("VNA", TV,
   "Um cliente que acaba de financiar um veículo recebe a oferta de um seguro auto adequado ao bem financiado, de livre escolha e com a possibilidade de contratar em outra seguradora. Já outro cliente, que tem conta básica, é orientado a migrar para um pacote mais completo porque passou a usar mais serviços. Essas situações exemplificam, respectivamente,",
   "venda cruzada (cross-selling) e venda de maior valor (up-selling).",
   ["venda de maior valor (up-selling) e venda cruzada (cross-selling).", "venda casada e venda cruzada (cross-selling).", "venda casada e venda de maior valor (up-selling).", "retenção de clientes e reativação de clientes perdidos."],
   "**Cross-selling** é oferecer produto **complementar** (seguro para quem financiou veículo). **Up-selling** é oferecer versão **superior/mais completa** do que o cliente já usa (pacote melhor). Ambos são legítimos quando **responsáveis**: adequados à necessidade e com liberdade de escolha.\n\n"
   "- A ordem invertida está errada.\n- Não há venda casada, pois a contratação do seguro não é condição para o financiamento e o cliente pode escolher outra seguradora.\n- Retenção e reativação tratam de clientes em risco de saída ou já perdidos.", dif=3, tags=["cross-selling", "up-selling"]),

TQ("VNA", TV,
   "Considere as afirmativas sobre pós-venda em um banco.\n\nI. O pós-venda contribui para reduzir a dissonância cognitiva e aumentar a probabilidade de recompra e recomendação.\nII. Contatar o cliente após a contratação para verificar se o produto atende às expectativas é uma prática de pós-venda.\nIII. O pós-venda deve ser evitado, pois pode levar o cliente a desistir do produto contratado.\n\nEstá correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "III, apenas.", "II e III, apenas.", "I, II e III."],
   "**I** e **II** corretas: o acompanhamento pós-contratação reforça a decisão, resolve dúvidas e alimenta a **fidelização**. **III** errada: se o produto não atende, é melhor descobrir e ajustar do que perder o cliente e sua confiança; o pós-venda é base da retenção.\n\nAs combinações com III, ou sem I ou II, estão erradas.", dif=2, tags=["pos-venda"]),

TQ("VNA", TV,
   "Em uma venda pessoal de produtos bancários, a etapa de pré-abordagem (planejamento) consiste em",
   "levantar informações sobre o cliente e definir os objetivos do contato antes de realizá-lo.",
   ["apresentar o produto ao cliente e demonstrar seus benefícios de acordo com as necessidades dele.",
    "responder às objeções levantadas pelo cliente durante a apresentação do produto.",
    "pedir a decisão do cliente e formalizar o contrato com as condições negociadas.",
    "acompanhar a utilização do produto após a contratação, verificando a satisfação."],
   "O processo de venda pessoal costuma ser descrito como: prospecção e qualificação, **pré-abordagem**, abordagem, apresentação/demonstração, tratamento de objeções, fechamento e acompanhamento (pós-venda). Na pré-abordagem o vendedor **se prepara**: estuda o cliente (por exemplo, no CRM) e define objetivos.\n\n"
   "- Apresentação, objeções, fechamento e acompanhamento são etapas posteriores.", dif=2, tags=["processo-de-venda"]),

TQ("VNA", TV,
   "Diferentemente da venda transacional, a venda baseada em relacionamento tem como principal objetivo",
   "construir vínculo duradouro com o cliente, priorizando o valor ao longo do tempo em vez de apenas a transação imediata.",
   ["maximizar o número de produtos vendidos em cada atendimento, independentemente da necessidade.",
    "reduzir ao mínimo o tempo de cada atendimento, para aumentar o volume de clientes atendidos.",
    "concentrar os esforços apenas em clientes novos, que geram mais receita inicial.",
    "evitar contato com o cliente depois da venda, para não gerar custos."],
   "A **venda de relacionamento** busca confiança e satisfação contínuas, que geram **lealdade**, recompra e indicação, aumentando o valor do cliente ao longo do tempo.\n\n"
   "- Vender o máximo sem necessidade é contrário ao relacionamento e pode ser antiético.\n- Reduzir o tempo de atendimento é métrica de eficiência, não de relacionamento.\n- Relacionamento enfatiza a manutenção dos clientes atuais.\n- O pós-venda é parte do relacionamento.", dif=1, tags=["venda-relacionamento"]),

TQ("VNA", TV,
   "Um gerente percebe que, ao apresentar um investimento, falou durante vinte minutos sobre as características técnicas do produto, e o cliente perdeu o interesse. Segundo a técnica CVB (características, vantagens e benefícios), o mais eficaz seria",
   "traduzir as características em benefícios concretos para a necessidade específica do cliente.",
   ["aumentar o detalhamento técnico, para demonstrar domínio do produto.",
    "omitir as características, falando apenas das vantagens gerais do banco.",
    "apresentar todos os produtos semelhantes do portfólio ao mesmo tempo.",
    "focar a comparação nos defeitos dos produtos da concorrência."],
   "Na técnica **CVB**, a **característica** é o que o produto é (ex.: liquidez diária), a **vantagem** é o que ela permite (resgatar quando quiser) e o **benefício** é o ganho para aquele cliente (ter a reserva disponível numa emergência). Clientes compram benefícios.\n\n"
   "- Mais detalhe técnico agrava o problema.\n- Omitir características prejudica a informação clara.\n- Excesso de opções confunde.\n- Falar mal da concorrência é antiético e não mostra valor próprio.", dif=2, tags=["cvb", "apresentacao"]),
# ---------------- Prospecção, fidelização e retenção ----------------
TQ("VNA", PF,
   "No funil de vendas, a etapa de qualificação de prospects tem como objetivo",
   "verificar se o potencial cliente tem necessidade, capacidade e interesse, para priorizar os contatos mais promissores.",
   ["formalizar o contrato com o cliente que já decidiu pela compra e registrar a venda no sistema.",
    "enviar a mesma oferta a toda a base de clientes, sem distinção de perfil ou de necessidade.",
    "medir a satisfação do cliente após a contratação do produto, por meio de pesquisa.",
    "recuperar clientes que encerraram o relacionamento com o banco nos últimos meses."],
   "**Prospecção** identifica potenciais clientes (*leads*); a **qualificação** filtra quais têm perfil, necessidade e condições, para que o esforço comercial se concentre nos mais promissores.\n\n"
   "- Formalizar contrato é o fechamento.\n- Oferta indiscriminada é o oposto de qualificar.\n- Medir satisfação é pós-venda.\n- Recuperar ex-clientes é reativação (*win-back*).", dif=1, tags=["prospeccao", "funil"]),

TQ("VNA", PF,
   "Um banco conclui que manter os clientes atuais satisfeitos custa menos do que conquistar novos clientes. Essa constatação fundamenta",
   "o investimento em estratégias de retenção e fidelização como parte central da gestão comercial.",
   ["a eliminação de qualquer esforço de prospecção de novos clientes.",
    "a redução da qualidade do atendimento aos clientes antigos, que já estão conquistados.",
    "a concentração de todas as ofertas promocionais apenas em não correntistas.",
    "o encerramento das contas de clientes com baixo uso de produtos."],
   "A literatura de marketing aponta que **adquirir** um cliente costuma custar várias vezes mais do que **reter** um atual, e que clientes leais compram mais e indicam. Daí a importância da retenção.\n\n"
   "- Prospecção continua necessária para repor a base e crescer.\n- Reduzir a qualidade para os antigos estimula a evasão.\n- Dar vantagens só a novos clientes desvaloriza os atuais e incentiva o *churn*.\n- Encerrar contas de baixo uso não é estratégia de retenção.", dif=2, tags=["retencao"]),

TQ("VNA", PF,
   "Em um ano, uma carteira começou com 800 clientes e, ao longo do período, 48 deles encerraram o relacionamento. Considerando apenas esses dados, a taxa de churn (evasão) anual da carteira foi de",
   "6%.",
   ["4,8%.", "5,6%.", "8%.", "94%."],
   "**Churn** = clientes perdidos ÷ clientes no início do período = 48 ÷ 800 = 0,06 = **6%**. A taxa de retenção correspondente seria 94%, que é o complemento, e não o churn.\n\n"
   "- 4,8% resulta de dividir 48 por 1.000.\n- 5,6% e 8% não decorrem dos dados.\n- 94% é a retenção, não a evasão.", dif=1, tags=["churn", "calculo"],
   ver=("print(f'{48/800*100:g}%')", "6%")),

TQ("VNA", PF,
   "Um cliente satisfeito nem sempre é um cliente leal. Do ponto de vista do marketing de relacionamento, a lealdade se caracteriza por",
   "um vínculo de preferência e recompra duradouro, que resiste inclusive a ofertas da concorrência.",
   ["a simples ausência de reclamações registradas nos canais de atendimento.",
    "a contratação de um único produto, com pagamento das parcelas sempre em dia.",
    "a permanência do cliente apenas por causa de multa ou dificuldade de saída.",
    "a resposta positiva a uma única pesquisa de satisfação aplicada após o atendimento."],
   "**Lealdade** envolve **atitude** (preferência, confiança, disposição de recomendar) e **comportamento** (recompra, permanência). Clientes “presos” por barreiras de saída (*falsa lealdade*) tendem a sair quando a barreira cai.\n\n"
   "- Ausência de reclamação não demonstra preferência (muitos insatisfeitos não reclamam).\n- Um produto em dia indica adimplência, não lealdade.\n- Permanência forçada é falsa lealdade.\n- Uma pesquisa pontual mede satisfação momentânea.", dif=2, tags=["lealdade", "fidelizacao"]),

TQ("VNA", PF,
   "Ao analisar o CRM, o gerente identifica clientes que deixaram de movimentar a conta há meses e transferiram o salário para outro banco. A ação mais adequada para tentar reativá-los é",
   "contatá-los para entender os motivos da saída e oferecer proposta de valor que corrija as falhas apontadas.",
   ["encerrar imediatamente as contas inativas, para reduzir os custos operacionais da agência.",
    "enviar mensagens em massa com a mesma promoção a todos, sem investigar os motivos da saída.",
    "cobrar tarifas adicionais pela inatividade da conta, para estimular o retorno do cliente.",
    "aguardar que os clientes voltem espontaneamente, sem nenhuma ação específica da agência."],
   "A **reativação** (*win-back*) de clientes perdidos começa por **entender o motivo da saída** (preço, atendimento, produto, mudança de vida) e oferecer solução personalizada. Clientes já conhecidos costumam ter maior chance de retorno do que leads frios.\n\n"
   "- Encerrar as contas desperdiça o relacionamento existente.\n- Mensagens em massa ignoram as causas.\n- Cobrar mais afasta ainda mais o cliente.\n- A passividade não reverte a evasão.", dif=2, tags=["reativacao", "win-back"]),

TQ("VNA", PF,
   "O valor do tempo de vida do cliente (CLV – Customer Lifetime Value) é um conceito usado para",
   "estimar o valor que o cliente gera ao longo de todo o relacionamento, orientando o investimento nele.",
   ["calcular o tempo médio de espera do cliente na fila da agência e nos canais telefônicos.",
    "medir a idade média dos clientes de uma carteira para fins de segmentação demográfica.",
    "determinar o limite de crédito máximo de cada cliente com base em sua renda.",
    "registrar o número de reclamações feitas por um cliente durante o ano nos canais."],
   "O **CLV** projeta a contribuição (receitas menos custos) do cliente durante todo o relacionamento. Ajuda a decidir em quem e quanto investir, reforçando a lógica de relacionamento de longo prazo.\n\n"
   "- Tempo de fila é indicador operacional.\n- Idade média é dado demográfico.\n- Limite de crédito decorre de análise de risco.\n- Número de reclamações é indicador de qualidade.", dif=2, tags=["clv"]),

TQ("VNA", PF,
   "Pedir a clientes satisfeitos que indiquem amigos ou parceiros de negócio que possam se beneficiar dos produtos do banco é uma técnica de",
   "prospecção por indicação (referência).",
   ["retenção por barreira de saída.", "venda casada.", "pós-venda reativo.", "segmentação geográfica."],
   "A **prospecção por indicação** aproveita a confiança do cliente satisfeito; o novo contato chega com credibilidade transferida, o que aumenta a taxa de conversão.\n\n"
   "- Barreira de saída é custo para deixar a empresa, não geração de leads.\n- Venda casada é condicionar um produto a outro, prática abusiva.\n- Pós-venda reativo responde a demandas após a compra.\n- Segmentação geográfica divide o mercado por região.", dif=1, tags=["prospeccao", "indicacao"]),

TQ("VNA", PF,
   "Considere as afirmativas sobre o ciclo de vida do cliente.\n\nI. Envolve fases como aquisição, desenvolvimento (ampliação do relacionamento), retenção e, eventualmente, reativação.\nII. Cada fase demanda ações diferentes, como boas-vindas na entrada e monitoramento de sinais de evasão na maturidade.\nIII. Uma vez conquistado, o cliente dispensa novas ações de relacionamento, pois sua permanência é garantida.\n\nEstá correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "III, apenas.", "I e III, apenas.", "I, II e III."],
   "**I** e **II** corretas: a gestão do ciclo de vida acompanha o cliente da aquisição à retenção ou à reativação, com ações específicas (onboarding, oferta de novos produtos, prevenção de churn). **III** errada: sem relacionamento contínuo, o cliente tende a migrar para a concorrência.\n\nAs combinações com III ou sem I e II estão erradas.", dif=2, tags=["ciclo-de-vida-cliente"]),

TQ("VNA", PF,
   "O sistema de CRM sinaliza que um cliente reduziu fortemente as aplicações, cancelou o débito automático de contas e solicitou a portabilidade do salário. Para o gestor da carteira, esses dados indicam",
   "sinais de risco de evasão, que justificam ação proativa de retenção.",
   ["que o cliente está satisfeito e não precisa ser contatado.",
    "que o cliente deve ser incluído em campanha de prospecção de novos clientes.",
    "uma oportunidade de up-selling para cartão de maior anuidade.",
    "um caso de churn já consumado, sem possibilidade de reversão."],
   "Queda de movimentação, cancelamento de serviços e portabilidade são **indicadores preditivos de churn**. A retenção é mais eficaz quando **proativa**: contatar, entender o motivo e propor solução.\n\n"
   "- Os sinais apontam insatisfação ou mudança, não satisfação.\n- Ele ainda é cliente; prospecção é para não clientes.\n- Oferecer produto mais caro ignora o risco de saída.\n- A conta não foi encerrada; ainda há chance de reverter.", dif=2, tags=["churn", "retencao"]),

TQ("VNA", PF,
   "Um programa de fidelidade em que o cliente acumula pontos pelo uso do cartão e os troca por benefícios é uma ferramenta de relacionamento cujo principal objetivo é",
   "estimular a recompra e a permanência, recompensando o relacionamento.",
   ["substituir a qualidade do atendimento como fator de satisfação.",
    "aumentar o número de reclamações registradas pela ouvidoria.",
    "atrair exclusivamente clientes que nunca tiveram conta em banco.",
    "dispensar o banco de informar as regras de pontuação ao cliente."],
   "**Programas de fidelidade** recompensam a frequência e o volume de uso, criando incentivo à permanência. Funcionam melhor somados a bom atendimento e produtos adequados, e suas regras devem ser claras.\n\n"
   "- Recompensas não substituem a qualidade do serviço.\n- Aumentar reclamações não é objetivo.\n- O foco é o cliente atual, não somente desbancarizados.\n- Regras devem ser informadas com transparência.", dif=2, tags=["programa-fidelidade"]),

TQ("VNA", PF,
   "Na chamada escada (ou pirâmide) da lealdade, o cliente que, além de manter o relacionamento, defende espontaneamente a empresa e a recomenda a outras pessoas é denominado",
   "defensor (advogado ou divulgador).",
   ["prospect qualificado.", "experimentador de primeira compra.", "cliente eventual.", "suspect do mercado-alvo."],
   "Na escada da lealdade, o indivíduo evolui de *suspect* (pessoa do mercado-alvo) a *prospect* (potencial cliente qualificado), experimentador/cliente eventual, cliente regular, e chega a **defensor/advogado**, que recomenda ativamente a empresa — o objetivo máximo do marketing de relacionamento.\n\n"
   "- *Suspect* e *prospect* ainda não são clientes.\n- Experimentador e cliente eventual ainda não têm vínculo consolidado.", dif=2, tags=["lealdade"]),

# ---------------- Negociação ----------------
TQ("VNA", NE,
   "Segundo o método de negociação baseada em princípios, desenvolvido no Projeto de Negociação de Harvard por Fisher e Ury, são princípios da negociação:",
   "separar as pessoas do problema; concentrar-se nos interesses, não nas posições; inventar opções de ganhos mútuos; e insistir em critérios objetivos.",
   ["ancorar com a oferta mais extrema; ceder o mínimo possível; esconder a BATNA; e encerrar com ultimato.",
    "concentrar-se nas posições declaradas; evitar opções criativas; buscar vitória sobre o outro; e decidir pela pressão.",
    "tratar a relação e o problema como uma coisa só; ceder para preservar a amizade; evitar critérios; e dividir a diferença.",
    "identificar o mais forte; aceitar suas condições; minimizar o tempo de negociação; e evitar documentar o acordo."],
   "O livro *Como chegar ao sim* (Fisher, Ury e Patton) propõe quatro princípios: **separar as pessoas do problema**, **focar em interesses e não em posições**, **criar opções de ganho mútuo** e **usar critérios objetivos**. É a base da negociação **ganha-ganha**.\n\n"
   "- A primeira lista descreve barganha posicional dura.\n- A segunda é o oposto do método.\n- A terceira descreve a negociação “branda”, que o método também critica.\n- A quarta descreve submissão, não negociação por princípios.", dif=1, tags=["harvard", "fisher-ury"]),

TQ("VNA", NE,
   "Uma cliente exige “desconto de 50% na tarifa”. Ao conversar, o atendente descobre que sua preocupação real é o custo mensal total da conta, que subiu com o uso de serviços avulsos. Pelo método de Harvard, a atitude do atendente que melhor aplica o princípio de focar em interesses é",
   "buscar formas de reduzir o custo mensal da cliente, como um pacote adequado ao uso, em vez de discutir só o percentual.",
   ["recusar o pedido, pois a posição da cliente é incompatível com a tabela de tarifas vigente no banco.",
    "conceder o desconto de 50%, já que essa é a posição declarada pela cliente e deve ser respeitada.",
    "oferecer 25% de desconto, dividindo a diferença entre a posição da cliente e a do banco.",
    "transferir a negociação para outro atendente, para evitar desgaste pessoal com a cliente."],
   "**Posição** é o que a parte diz querer (50% de desconto); **interesse** é o motivo por trás (pagar menos por mês). Ao atender o interesse, surgem soluções que a posição esconde.\n\n"
   "- Recusar se prende à posição e encerra a negociação.\n- Ceder à posição pode ser indevido e não necessariamente resolve o problema.\n- Dividir a diferença é barganha posicional.\n- Transferir não resolve e não aplica o método.", dif=2, tags=["interesses-posicoes", "harvard"]),

TQ("VNA", NE,
   "Na venda de um imóvel retomado, o banco aceita, no mínimo, R$ 180.000,00, e o comprador está disposto a pagar, no máximo, R$ 210.000,00. Nessas condições, a zona de possível acordo (ZOPA) corresponde ao intervalo entre",
   "R$ 180.000,00 e R$ 210.000,00, com amplitude de R$ 30.000,00.",
   ["R$ 0,00 e R$ 180.000,00, com amplitude de R$ 180.000,00.",
    "R$ 195.000,00 e R$ 210.000,00, com amplitude de R$ 15.000,00.",
    "R$ 210.000,00 e R$ 240.000,00, com amplitude de R$ 30.000,00.",
    "não há ZOPA, porque o preço mínimo do vendedor é menor que o máximo do comprador."],
   "A **ZOPA** é a faixa entre o **valor de reserva do vendedor** (mínimo que aceita) e o **valor de reserva do comprador** (máximo que paga). Existe acordo possível porque 180 mil < 210 mil; a amplitude é 210.000 − 180.000 = **R$ 30.000,00**.\n\n"
   "- Abaixo de 180 mil o vendedor não aceita.\n- Começar em 195 mil corta indevidamente metade da faixa.\n- Acima de 210 mil o comprador não paga.\n- A ZOPA existe justamente quando o mínimo do vendedor é menor que o máximo do comprador.", dif=3, tags=["zopa", "calculo"],
   ver=("print(210000-180000)", "30000")),

TQ("VNA", NE,
   "A negociação distributiva diferencia-se da negociação integrativa porque, na distributiva,",
   "as partes disputam a divisão de um valor fixo, e o ganho de uma tende a ser a perda da outra.",
   ["as partes buscam ampliar o valor total em jogo, criando soluções de ganho mútuo.",
    "não há conflito de interesses, pois as partes têm objetivos idênticos.",
    "o relacionamento de longo prazo é sempre o principal objetivo.",
    "as partes compartilham todas as informações sobre seus limites desde o início."],
   "Na **distributiva** (ganha-perde, soma zero), discute-se como “repartir o bolo”, geralmente um só item, como preço. Na **integrativa** (ganha-ganha), as partes exploram interesses e múltiplas variáveis para “aumentar o bolo”.\n\n"
   "- Ampliar valor e ganhos mútuos é característica da integrativa.\n- Na distributiva há conflito direto de interesses.\n- Relacionamento de longo prazo é mais típico da integrativa.\n- Na distributiva, as partes costumam proteger seus limites.", dif=2, tags=["distributiva", "integrativa"]),

TQ("VNA", NE,
   "Uma empresa cliente pede redução da taxa de um capital de giro. O gerente, em vez de discutir só a taxa, propõe ajustar o prazo, oferecer domicílio bancário das vendas com cartão e incluir a folha de pagamento, o que reduz o risco para o banco e permite melhor taxa para a empresa. Essa abordagem caracteriza a negociação",
   "integrativa, pois amplia as variáveis negociadas para gerar valor a ambas as partes.",
   ["distributiva, pois a discussão envolve taxa de juros.",
    "posicional, pois o gerente se mantém fixo na taxa original.",
    "por evitação, pois o gerente se esquiva do pedido de redução da taxa.",
    "por acomodação, pois o gerente cede integralmente ao pedido do cliente."],
   "Ao incluir mais variáveis (prazo, domicílio, folha), o gerente cria **trocas de valor**: o banco reduz risco e amplia relacionamento, e a empresa obtém taxa melhor. É a lógica **integrativa** (ganha-ganha).\n\n"
   "- A presença de taxa não torna a negociação distributiva; o que importa é a busca de valor conjunto.\n- Não há rigidez na taxa original.\n- O gerente não se esquiva; enfrenta o pedido com alternativas.\n- Não houve concessão integral.", dif=3, tags=["integrativa", "ganha-ganha"]),

TQ("VNA", NE,
   "Na fase de preparação de uma negociação, é recomendável",
   "levantar informações, definir objetivos e limites e identificar a própria BATNA e a provável BATNA da outra parte.",
   ["evitar definir limites, para manter a flexibilidade total durante a conversa.",
    "deixar para conhecer os interesses da outra parte apenas no momento do fechamento.",
    "revelar logo de início à outra parte seu limite mínimo de aceitação, como gesto de boa-fé.",
    "concentrar-se em preparar argumentos para vencer a outra parte, ignorando alternativas."],
   "Boa **preparação** é a etapa mais determinante: conhecer o assunto, os próprios objetivos, o **valor de reserva**, a **BATNA**, e antecipar interesses e alternativas da outra parte.\n\n"
   "- Sem limites definidos, o negociador corre o risco de aceitar acordo pior que a alternativa.\n- Interesses devem ser explorados desde o início.\n- Revelar o limite mínimo de saída enfraquece a posição.\n- Focar só em “vencer” ignora o ganho mútuo e as alternativas.", dif=2, tags=["etapas", "preparacao"]),

TQ("VNA", NE,
   "Um cliente pessoa jurídica tem proposta formal de outro banco para antecipar recebíveis a uma taxa menor. Para esse cliente, a proposta do concorrente representa",
   "sua BATNA, que aumenta seu poder de negociação, pois ele só tende a aceitar uma oferta melhor do que essa alternativa.",
   ["a ZOPA, pois indica o intervalo exato em que o acordo será fechado.",
    "uma âncora sem efeito, pois propostas de concorrentes não influenciam negociações bancárias.",
    "uma objeção falsa, que deve ser ignorada pelo gerente.",
    "um critério objetivo que obriga o banco a igualar a taxa."],
   "A **BATNA/MAANA** é a melhor alternativa sem acordo. Quanto melhor a BATNA de uma parte, maior seu poder de barganha, porque ela pode abandonar a negociação.\n\n"
   "- ZOPA é a sobreposição dos limites das duas partes, não a alternativa de uma delas.\n- Propostas concorrentes influenciam, sim, a negociação.\n- Não há indício de que a objeção seja falsa; ignorá-la seria um erro.\n- O banco não é obrigado a igualar; pode agregar valor de outras formas ou não fechar.", dif=3, tags=["batna", "poder"]),

TQ("VNA", NE,
   "Em uma negociação, uma das partes faz a primeira oferta bem acima do esperado, para que todas as propostas seguintes sejam avaliadas em relação a esse valor. Essa tática se baseia no efeito de",
   "ancoragem.",
   ["reciprocidade de concessões.", "escuta ativa.", "critério objetivo.", "separação entre pessoas e problema."],
   "A **ancoragem** usa a primeira referência numérica para influenciar a percepção de valor de toda a negociação. Conhecê-la ajuda a não se deixar levar: o contraponto é usar **critérios objetivos** (preço de mercado, tabelas, laudos).\n\n"
   "- Reciprocidade é a tendência de retribuir concessões.\n- Escuta ativa é técnica de comunicação.\n- Critério objetivo é padrão independente da vontade das partes, oposto a uma âncora arbitrária.\n- Separar pessoas do problema é princípio de Harvard sobre relações.", dif=1, tags=["ancoragem", "taticas"]),

TQ("VNA", NE,
   "Ao renegociar uma dívida, cliente e banco divergem sobre o valor justo da parcela. O atendente propõe que o cálculo seja feito com base no comprometimento de renda comprovado e nas condições vigentes das linhas de renegociação, iguais para todos os clientes. Ele está aplicando o princípio de",
   "insistir em critérios objetivos.",
   ["separar as pessoas do problema.", "concentrar-se nas posições.", "ancoragem extrema.", "acomodação."],
   "**Critérios objetivos** são padrões independentes da vontade das partes (tabelas, regras públicas, preço de mercado, renda comprovada). Eles tornam o acordo mais justo e evitam disputa de vontades.\n\n"
   "- Separar pessoas do problema trata das emoções e da relação.\n- Concentrar-se em posições é o que o método recomenda evitar.\n- Ancoragem extrema é tática de barganha.\n- Acomodação seria ceder ao outro sem defender os próprios interesses.", dif=3, tags=["criterios-objetivos", "renegociacao"]),

TQ("VNA", NE,
   "Durante uma renegociação, o cliente se exalta e acusa o atendente de “não querer ajudar”. Segundo o princípio de separar as pessoas do problema, a conduta mais adequada é",
   "reconhecer a emoção do cliente, manter o respeito e trazer a conversa de volta à solução da dívida.",
   ["responder à acusação, defendendo-se pessoalmente antes de voltar ao assunto.",
    "encerrar a negociação até que o cliente peça desculpas pela acusação feita.",
    "conceder condições excepcionais de renegociação para acalmar o cliente e encerrar o conflito.",
    "ignorar as emoções do cliente e repetir a proposta inicial até que ele a aceite."],
   "**Separar as pessoas do problema** significa ser **suave com as pessoas e firme com o problema**: lidar com emoções e percepções (reconhecendo-as) sem que elas contaminem a análise da questão.\n\n"
   "- Defender-se pessoalmente desvia o foco para a relação.\n- Exigir desculpas trava a negociação.\n- Conceder para acalmar mistura emoção e mérito.\n- Ignorar emoções costuma aumentar a tensão.", dif=2, tags=["harvard", "emocoes"]),

TQ("VNA", NE,
   "Considere as afirmativas sobre estilos de administração de conflitos, conforme o modelo de Thomas-Kilmann.\n\nI. No estilo colaboração, busca-se uma solução que satisfaça plenamente os interesses de ambas as partes.\nII. No estilo acomodação, a pessoa abre mão dos próprios interesses para satisfazer os do outro.\nIII. No estilo competição, a pessoa busca dividir igualmente os ganhos, cedendo em parte.\n\nEstá correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "III, apenas.", "II e III, apenas.", "I, II e III."],
   "O modelo de Thomas-Kilmann tem cinco estilos: **competição** (assertivo e pouco cooperativo — impor), **colaboração** (assertivo e cooperativo — ganha-ganha), **compromisso** (ceder em parte, dividir), **evitação** (pouco assertivo e pouco cooperativo) e **acomodação** (cooperativo e pouco assertivo — ceder).\n\n**I** e **II** corretas. **III** errada: dividir e ceder em parte descreve o **compromisso**, não a competição.", dif=3, tags=["thomas-kilmann", "conflitos"]),

# ---------------- CRM e marketing de relacionamento ----------------
TQ("VNA", CR,
   "O CRM (Customer Relationship Management), no contexto bancário, pode ser definido como",
   "uma estratégia apoiada em tecnologia que integra dados dos clientes para personalizar e fortalecer o relacionamento.",
   ["um software usado exclusivamente pelo setor de cobrança para controlar inadimplentes.",
    "um indicador que mede a probabilidade de o cliente recomendar o banco a amigos e familiares.",
    "um canal de atendimento telefônico destinado ao registro e ao acompanhamento de reclamações.",
    "uma norma que obriga o banco a oferecer os mesmos produtos a todos os clientes."],
   "**CRM** combina **estratégia, processos e tecnologia**: coleta e integra informações dos clientes (cadastro, produtos, contatos, preferências) para personalizar ofertas e atendimento, reter e aumentar a rentabilidade.\n\n"
   "- Não se limita à cobrança nem é só software.\n- Indicador de recomendação é o NPS.\n- Canal de reclamações é o SAC/Ouvidoria.\n- O CRM serve justamente para diferenciar o tratamento, não para padronizar ofertas.", dif=1, tags=["crm"]),

TQ("VNA", CR,
   "O CRM costuma ser classificado em operacional, analítico e colaborativo. O CRM analítico corresponde",
   "à análise dos dados dos clientes, como a mineração de dados, para identificar padrões, propensões e riscos.",
   ["à automação das atividades de linha de frente, como registro de atendimentos e de vendas.",
    "à integração dos canais de contato para que o cliente interaja com a empresa por diferentes meios.",
    "ao controle contábil das receitas de tarifas de cada agência.",
    "à gestão da escala de trabalho dos atendentes."],
   "**Operacional**: automatiza processos de contato (vendas, atendimento, marketing). **Analítico**: trata e analisa os dados (*data mining*, *data warehouse*) para gerar conhecimento sobre o cliente. **Colaborativo**: integra canais e áreas para interação com o cliente.\n\n"
   "- Automação da linha de frente é o operacional.\n- Integração de canais é o colaborativo.\n- Controle contábil e escala de trabalho não são tipos de CRM.", dif=2, tags=["crm", "tipos"]),

TQ("VNA", CR,
   "Ao abrir o cadastro de um cliente, o atendente vê no sistema que ele teve um problema com o cartão na semana anterior, que já foi resolvido, e que tem um filho que completará 18 anos em breve. O uso dessas informações para personalizar o atendimento evidencia",
   "o uso do banco de dados de clientes no marketing de relacionamento, para atender de forma contextualizada.",
   ["uma violação automática do sigilo bancário, pois o atendente não pode consultar o histórico.",
    "uma estratégia de marketing de massa, com a mesma mensagem para todos.",
    "uma técnica de prospecção de clientes desconhecidos.",
    "um procedimento de cobrança preventiva."],
   "O **banco de dados** de clientes, integrado ao CRM, permite conhecer o histórico e o momento de vida do cliente, demonstrar cuidado (“vi que seu cartão teve problema, está tudo certo?”) e oferecer produtos pertinentes (ex.: conta para o filho). O uso deve respeitar finalidade, necessidade e segurança previstas na proteção de dados.\n\n"
   "- Consultar o histórico do próprio cliente para atendê-lo não é quebra de sigilo.\n- Marketing de massa é o oposto da personalização.\n- O cliente já é conhecido; não é prospecção.\n- Não há cobrança envolvida.", dif=2, tags=["banco-de-dados", "crm"]),

TQ("VNA", CR,
   "O Net Promoter Score (NPS) baseia-se na pergunta sobre a probabilidade, de 0 a 10, de o cliente recomendar a empresa. Nessa metodologia, os clientes são classificados como",
   "detratores (notas de 0 a 6), neutros ou passivos (7 e 8) e promotores (9 e 10).",
   ["detratores (0 a 4), neutros (5 a 7) e promotores (8 a 10).",
    "detratores (0 a 5), neutros (6 a 8) e promotores (9 e 10).",
    "detratores (0 a 6), neutros (7 a 9) e promotores (somente 10).",
    "detratores (0 a 3), neutros (4 a 6) e promotores (7 a 10)."],
   "No **NPS** (Fred Reichheld), **promotores** dão 9 ou 10, **neutros/passivos** dão 7 ou 8 e **detratores** dão de 0 a 6. O índice = % promotores − % detratores, variando de −100 a +100.\n\nAs demais faixas não correspondem à metodologia.", dif=1, tags=["nps"]),

TQ("VNA", CR,
   "Em uma pesquisa com 200 clientes de uma agência, 110 deram notas 9 ou 10, 50 deram notas 7 ou 8 e 40 deram notas de 0 a 6 à pergunta “Qual a probabilidade de você recomendar nosso banco?”. O NPS da agência é",
   "35.",
   ["55.", "80.", "20.", "75."],
   "Promotores = 110/200 = 55%; detratores = 40/200 = 20%. **NPS = 55 − 20 = 35**. Os neutros (25%) entram no total de respondentes, mas não na subtração.\n\n"
   "- 55 é só o percentual de promotores.\n- 80 soma promotores e neutros.\n- 20 é o percentual de detratores.\n- 75 soma promotores e detratores.", dif=2, tags=["nps", "calculo"],
   ver=("p=110/200*100; d=40/200*100; print(round(p-d))", "35")),

TQ("VNA", CR,
   "Experiência do cliente (Customer Experience – CX) pode ser entendida como",
   "a percepção global do cliente formada por todas as suas interações com a empresa, em todos os canais.",
   ["o tempo de relacionamento do cliente com o banco, contado desde a abertura da conta.",
    "o grau de conhecimento técnico que o cliente possui sobre produtos financeiros.",
    "a avaliação do atendimento feita apenas no momento da contratação de um produto.",
    "o conjunto de sistemas internos usados pelos atendentes para registrar os contatos."],
   "**CX** é a soma das percepções e emoções do cliente em toda a **jornada**: descoberta, contratação, uso, suporte, problemas e pós-venda, nos canais físicos e digitais.\n\n"
   "- Tempo de relacionamento é dado cadastral.\n- Conhecimento técnico do cliente é letramento financeiro.\n- A experiência não se limita ao momento da contratação.\n- Sistemas internos influenciam a CX, mas não a definem.", dif=2, tags=["cx", "jornada"]),

TQ("VNA", CR,
   "Um banco desenhou o mapa da jornada do cliente na contratação de crédito imobiliário, identificando cada etapa, ponto de contato, emoção do cliente e momento de frustração. O principal objetivo desse mapeamento é",
   "identificar pontos de dor e oportunidades de melhoria sob a ótica do cliente.",
   ["calcular a taxa de juros mais adequada para cada cliente.",
    "substituir as pesquisas de satisfação, que se tornam desnecessárias.",
    "definir as metas individuais de venda dos gerentes.",
    "eliminar todos os contatos humanos do processo."],
   "O **mapa da jornada** (*customer journey map*) descreve, do ponto de vista do cliente, as etapas, pontos de contato e emoções, revelando **pontos de dor** e “momentos da verdade” a melhorar.\n\n"
   "- Precificação é análise de crédito e mercado.\n- Pesquisas continuam úteis e alimentam o mapa.\n- Metas de vendas são outro instrumento de gestão.\n- O mapeamento pode até mostrar onde o contato humano é mais valorizado.", dif=2, tags=["jornada", "cx"]),

TQ("VNA", CR,
   "No marketing de relacionamento um a um (one-to-one), proposto por Peppers e Rogers, o modelo IDIC indica as etapas",
   "identificar, diferenciar, interagir e personalizar.",
   ["informar, decidir, implantar e controlar.",
    "investigar, diagnosticar, indicar e concluir.",
    "identificar, divulgar, induzir e captar.",
    "integrar, distribuir, influenciar e cobrar."],
   "O modelo **IDIC**: **Identificar** os clientes individualmente; **Diferenciar** por valor e necessidades; **Interagir** para aprender com eles; **Customizar/personalizar** produtos e serviços.\n\nAs demais sequências não correspondem ao modelo; algumas descrevem processos genéricos de decisão, venda ou cobrança.", dif=3, tags=["one-to-one", "idic"]),

TQ("VNA", CR,
   "Além do NPS, as empresas usam outros indicadores de experiência. O indicador que mede o grau de facilidade que o cliente teve para resolver sua demanda (por exemplo, “Quão fácil foi resolver seu problema hoje?”) é o",
   "CES (Customer Effort Score).",
   ["CSAT (Customer Satisfaction Score).", "CLV (Customer Lifetime Value).", "CAC (Custo de Aquisição de Cliente).", "Churn rate."],
   "O **CES** mede o **esforço** do cliente para resolver uma questão; menor esforço tende a gerar mais lealdade.\n\n"
   "- CSAT mede satisfação com uma interação ou produto.\n- CLV estima o valor do cliente no relacionamento.\n- CAC é o custo para conquistar um cliente.\n- Churn é a taxa de evasão.", dif=2, tags=["ces", "indicadores"]),

TQ("VNA", CR,
   "Considere as afirmativas sobre marketing de relacionamento.\n\nI. Seu foco está na criação de valor para o cliente e em relações de longo prazo, e não apenas em transações isoladas.\nII. A confiança e o comprometimento mútuos são elementos centrais do relacionamento.\nIII. Por ser voltado para o longo prazo, dispensa a coleta e o uso de informações sobre os clientes.\n\nEstá correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "II, apenas.", "I e III, apenas.", "I, II e III."],
   "**I** e **II** corretas: o marketing de relacionamento busca relações duradouras e mutuamente benéficas, baseadas em **confiança** e **comprometimento**. **III** errada: ele depende fortemente de **informação** sobre o cliente (CRM, bancos de dados) para personalizar o relacionamento.\n\nPor isso, as combinações com III ou sem I e II estão erradas.", dif=2, tags=["marketing-relacionamento"]),

TQ("VNA", CR,
   "No composto de marketing de serviços (7Ps), o elemento que reúne o ambiente da agência, a sinalização, os materiais impressos, o layout do aplicativo e a aparência dos funcionários, ajudando a tornar perceptível um serviço intangível, é",
   "a evidência física.",
   ["a promoção.", "o processo.", "a praça.", "o preço."],
   "Os **7Ps** de serviços são produto, preço, praça e promoção (os 4Ps clássicos) mais **pessoas**, **processos** e **evidência física** (*physical evidence*), acrescentados por Booms e Bitner. A **evidência física** compreende os elementos tangíveis que o cliente vê e que sinalizam a qualidade do serviço.\n\n"
   "- Promoção é a comunicação com o mercado (propaganda, campanhas, venda pessoal).\n- Processo é a forma como o serviço é executado e entregue.\n- Praça é a distribuição/canais.\n- Preço envolve tarifas, taxas e condições.", dif=2, tags=["7ps", "mix", "evidencia-fisica"]),
# ---------------- Adequação ao perfil ----------------
TQ("VNA", AD,
   "O dever de verificar a adequação de produtos de investimento ao perfil do cliente, conhecido como suitability, tem como finalidade",
   "assegurar que os produtos recomendados sejam compatíveis com os objetivos, a situação financeira e o conhecimento do cliente.",
   ["garantir rentabilidade mínima aos investimentos recomendados pelo banco.",
    "impedir que clientes de perfil conservador tenham acesso a qualquer informação sobre renda variável.",
    "transferir ao cliente toda a responsabilidade pela escolha do investimento.",
    "definir as metas de captação de cada agência."],
   "O **suitability** (dever de verificar a adequação) avalia **objetivos** (prazo, finalidade, tolerância a risco), **situação financeira** (renda, patrimônio, necessidade de liquidez) e **conhecimento/experiência** do cliente, para que a recomendação seja apropriada.\n\n"
   "- Não há garantia de rentabilidade.\n- O cliente pode e deve receber informações; o que se veda é recomendar produto inadequado.\n- O dever recai sobre quem recomenda/distribui, não é transferência de responsabilidade.\n- Metas comerciais não são finalidade do suitability.", dif=1, ref="03/17", tags=["suitability"]),

TQ("VNA", AD,
   "Uma cliente de 70 anos, aposentada, com perfil conservador e que precisa do dinheiro aplicado para complementar a renda mensal, pede orientação ao técnico bancário. A recomendação mais adequada, em princípio, é a de",
   "produtos de baixo risco e boa liquidez, compatíveis com a necessidade de renda e com o perfil conservador.",
   ["ações de empresas de crescimento, pela possibilidade de maior retorno no longo prazo.",
    "fundos multimercado alavancados, para compensar a baixa rentabilidade da poupança.",
    "título de capitalização de longo prazo, como forma de investimento com rendimento elevado.",
    "aplicações com carência longa e sem liquidez, que costumam pagar taxas maiores."],
   "Para perfil **conservador** com **necessidade de liquidez e renda**, são adequados produtos de **baixo risco** e resgate compatível com as necessidades (ex.: renda fixa com liquidez adequada).\n\n"
   "- Ações têm alta volatilidade, incompatível com o perfil e a necessidade de renda.\n- Fundos alavancados ampliam o risco.\n- Capitalização não é investimento: combina guarda de recursos e sorteios, e o resgate costuma render menos que aplicações financeiras (podendo ser inferior ao valor pago, se antecipado).\n- Carência longa conflita com a necessidade de dinheiro mensal.", dif=2, ref="03/17", tags=["suitability", "perfil-conservador"]),

TQ("VNA", AD,
   "Na avaliação de perfil do investidor (API), um cliente foi classificado como conservador, mas pede para aplicar parte relevante do patrimônio em um fundo de ações. Segundo as boas práticas de adequação, o atendente deve",
   "alertá-lo sobre a inadequação e, se ele quiser prosseguir por conta própria, obter sua declaração de ciência.",
   ["recusar a aplicação, pois o cliente conservador está proibido de investir em renda variável.",
    "realizar a aplicação sem qualquer comentário, pois a decisão final de investir é sempre do cliente.",
    "alterar o perfil do cliente no sistema para arrojado, a fim de liberar a operação.",
    "sugerir que o cliente faça a aplicação em nome de um parente com perfil arrojado."],
   "A regra de adequação **veda recomendar** produto inadequado, mas não proíbe o cliente de investir por conta própria. Nesse caso, a instituição deve **alertá-lo** e obter **declaração expressa** de que está ciente da inadequação.\n\n"
   "- Não há proibição absoluta de investir.\n- Executar sem alertar descumpre o dever de adequação.\n- Alterar o perfil sem nova avaliação real é fraude ao processo.\n- Usar terceiro para burlar o perfil é conduta antiética.", dif=3, ref="03/17", tags=["suitability", "api"]),

TQ("VNA", AD,
   "Considere as afirmativas sobre a avaliação do perfil do investidor.\n\nI. O perfil deve ser atualizado periodicamente, pois a situação financeira e os objetivos do cliente podem mudar.\nII. A avaliação considera, entre outros fatores, o horizonte de investimento e a tolerância a perdas.\nIII. Uma vez definido o perfil, o banco pode recomendar qualquer produto, já que a avaliação foi feita.\n\nEstá correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "II, apenas.", "II e III, apenas.", "I, II e III."],
   "**I** correta: mudanças de renda, idade e objetivos exigem **atualização** periódica do perfil. **II** correta: horizonte, objetivos, tolerância a risco/perdas, situação financeira e conhecimento compõem a avaliação. **III** errada: o perfil serve justamente para limitar as recomendações aos produtos **compatíveis** com ele.\n\nAs combinações com III ou sem I e II estão erradas.", dif=1, ref="03/17", tags=["suitability", "api"]),

TQ("VNA", AD,
   "Um cliente quer investir para uma viagem que fará em seis meses e não aceita correr o risco de ter menos dinheiro do que aplicou. Entre as opções abaixo, a mais coerente com seu objetivo e prazo é",
   "uma aplicação de renda fixa de baixo risco com vencimento ou liquidez compatível com o prazo da viagem.",
   ["um fundo de ações, que historicamente rende mais no longo prazo.",
    "um plano de previdência complementar, voltado para objetivos de curto prazo.",
    "um título de renda fixa prefixado com vencimento em dez anos, para vender antes do prazo.",
    "um consórcio de imóveis, pois permite resgatar o valor em seis meses."],
   "Objetivo de **curto prazo** e **baixa tolerância a perdas** pedem produto de baixo risco e liquidez ou vencimento compatível.\n\n"
   "- Ações são voláteis e indicadas para prazos longos.\n- Previdência é produto de longo prazo (acumulação para aposentadoria).\n- Vender antes do vencimento um título prefixado longo expõe à marcação a mercado, podendo haver perda.\n- Consórcio não é investimento e não garante a devolução em seis meses.", dif=3, tags=["adequacao", "objetivos"]),

TQ("VNA", AD,
   "Uma cliente com renda variável e sem nenhuma reserva procura o banco para investir em um produto de longo prazo. Segundo os princípios de educação e orientação financeira, o atendente deve, antes de tudo,",
   "orientá-la sobre a importância de formar uma reserva de emergência em aplicação de alta liquidez e baixo risco.",
   ["recomendar a aplicação de todos os recursos no produto de longo prazo, como ela pediu.",
    "oferecer um empréstimo para que ela invista um valor maior no longo prazo.",
    "sugerir a compra de um título de capitalização como reserva de emergência.",
    "recomendar que ela aplique em ações para crescer o patrimônio mais rápido."],
   "A **reserva de emergência** é a base do planejamento financeiro, especialmente para quem tem **renda variável**: protege contra imprevistos sem precisar resgatar investimentos de longo prazo com perdas ou recorrer a crédito caro.\n\n"
   "- Imobilizar tudo no longo prazo deixa a cliente sem proteção.\n- Tomar crédito para investir é inadequado e arriscado.\n- Capitalização não é instrumento adequado de reserva.\n- Ações não atendem à liquidez e segurança de uma reserva.", dif=1, tags=["educacao-financeira", "reserva-emergencia"]),

TQ("VNA", AD,
   "Um cliente usa com frequência o cheque especial para pagar despesas do mês. A orientação financeira mais adequada do atendente é",
   "explicar que o cheque especial é crédito caro, para emergências, e avaliar a troca por crédito mais barato que caiba no orçamento.",
   ["incentivar o uso contínuo do cheque especial, pois é prático e já está disponível na conta, sem nova contratação.",
    "aumentar o limite do cheque especial para que o cliente tenha mais folga no orçamento mensal.",
    "oferecer um cartão de crédito adicional para dividir os gastos entre os dois produtos e alongar os pagamentos.",
    "recomendar que o cliente pague apenas os juros do cheque especial todo mês, mantendo o saldo devedor."],
   "A **orientação financeira** responsável mostra o custo do crédito e propõe soluções sustentáveis: substituir dívida cara por mais barata, ajustar o orçamento e evitar o uso recorrente de crédito rotativo/emergencial.\n\n"
   "- Incentivar o uso contínuo aumenta o endividamento.\n- Ampliar o limite agrava o problema.\n- Mais um cartão aumenta o risco de superendividamento.\n- Pagar só os juros perpetua a dívida.", dif=2, tags=["educacao-financeira", "credito"]),

TQ("VNA", AD,
   "Ao recomendar um produto de crédito, além de verificar a capacidade de pagamento, o atendente deve informar ao cliente o Custo Efetivo Total (CET) porque esse indicador",
   "reúne juros e demais encargos e despesas, permitindo comparar o custo real de diferentes ofertas.",
   ["corresponde apenas à taxa de juros nominal informada no contrato.",
    "indica a rentabilidade que o banco obterá com o cliente ao longo do relacionamento.",
    "mostra o valor máximo de crédito que o cliente pode contratar.",
    "substitui a necessidade de informar o valor e o número das parcelas."],
   "O **CET** expressa o custo total da operação (juros, tarifas, tributos, seguros e outras despesas cobradas), em percentual anual. É a melhor base para **comparar** ofertas de crédito.\n\n"
   "- A taxa nominal é só um componente do CET.\n- Rentabilidade do banco com o cliente não é o CET.\n- Limite de crédito decorre da análise de risco.\n- O CET não substitui as demais informações essenciais, como parcelas e prazo.", dif=1, tags=["cet", "transparencia"]),

TQ("VNA", AD,
   "Um microempreendedor precisa de recursos para comprar uma máquina que aumentará sua produção ao longo de três anos. Considerando a adequação do produto à necessidade, a solução mais indicada tende a ser",
   "uma linha de financiamento de investimento com prazo compatível com o retorno da máquina.",
   ["o cheque especial empresarial, por ser de contratação mais rápida.",
    "o cartão de crédito empresarial, parcelando a compra no rotativo.",
    "um título de capitalização, sorteando o valor necessário.",
    "a antecipação de recebíveis de curtíssimo prazo, renovada mensalmente."],
   "Investimentos de longo prazo devem ser financiados com **crédito de prazo compatível** com o retorno do bem (linhas de investimento/financiamento de máquinas). Crédito de curto prazo e caro desequilibra o fluxo de caixa.\n\n"
   "- Cheque especial e rotativo do cartão são caros e de curto prazo.\n- Capitalização não é crédito e depende de sorteio.\n- Antecipação de recebíveis serve a necessidades de capital de giro, não para financiar investimento de três anos.", dif=2, tags=["adequacao", "credito-pj"]),

TQ("VNA", AD,
   "Entre os perfis de investidor normalmente utilizados pelas instituições financeiras, o investidor que aceita maior volatilidade e possibilidade de perdas no curto prazo em busca de retornos mais elevados no longo prazo é classificado como",
   "arrojado (agressivo).",
   ["conservador.", "moderado.", "qualificado.", "profissional."],
   "Os perfis usuais são **conservador** (prioriza segurança e liquidez), **moderado** (aceita algum risco em parte da carteira) e **arrojado/agressivo** (aceita alta volatilidade em busca de maior retorno).\n\n"
   "- Conservador e moderado aceitam menos risco.\n- Investidor **qualificado** e **profissional** são categorias regulatórias ligadas a patrimônio ou certificação, não perfis de risco do suitability.", dif=1, ref="03/17", tags=["perfil-investidor"]),

TQ("VNA", AD,
   "Na orientação a um cliente sobre o uso do cartão de crédito, é correto o atendente explicar que",
   "pagar só o mínimo da fatura faz o saldo restante ser financiado com juros elevados.",
   ["pagar o mínimo da fatura é a forma mais econômica de usar o cartão.",
    "o limite do cartão representa uma renda extra disponível todo mês para despesas.",
    "compras parceladas não comprometem o orçamento dos meses seguintes.",
    "o crédito rotativo não tem custo quando o cliente é correntista antigo."],
   "O saldo não pago da fatura entra no **crédito rotativo** ou em parcelamento com juros, que estão entre os mais altos do mercado. A orientação financeira recomenda pagar o total ou buscar alternativa mais barata.\n\n"
   "- Pagar o mínimo é a forma mais cara.\n- Limite não é renda; é crédito.\n- Parcelas comprometem a renda futura.\n- Tempo de relacionamento não elimina os juros.", dif=2, tags=["educacao-financeira", "cartao"]),

# ---------------- Ética e transparência ----------------
TQ("VNA", ET,
   "Ao conceder um empréstimo, o atendente condiciona sua liberação à contratação de um seguro de vida do próprio banco. Segundo o Código de Defesa do Consumidor, essa conduta",
   "configura venda casada, prática abusiva vedada ao fornecedor.",
   ["é permitida, desde que o seguro tenha valor inferior ao empréstimo.",
    "caracteriza cross-selling responsável, pois o seguro protege o cliente.",
    "é permitida quando o cliente tem perfil conservador.",
    "configura apenas infração às metas internas, sem repercussão legal."],
   "O CDC proíbe **condicionar o fornecimento de produto ou serviço ao fornecimento de outro** (venda casada), considerada **prática abusiva**. Oferecer o seguro é lícito; **exigi-lo** como condição, não.\n\n"
   "- O valor do seguro não torna lícita a imposição.\n- Cross-selling responsável pressupõe liberdade de escolha.\n- Perfil do cliente é irrelevante para a vedação.\n- Há repercussão legal (prática abusiva), além de ética.", dif=1, tags=["venda-casada", "cdc"]),

TQ("VNA", ET,
   "Um cliente, ao contratar um financiamento, precisa obrigatoriamente de um seguro do bem, conforme exigência da operação. Para não caracterizar venda casada, o banco deve",
   "permitir que o cliente escolha a seguradora, aceitando apólice de outra empresa que atenda à operação.",
   ["exigir que o seguro seja contratado com a seguradora do mesmo grupo econômico.",
    "embutir o seguro no contrato sem informar o cliente, por ser obrigatório.",
    "cobrar tarifa adicional de análise caso o cliente prefira contratar outra seguradora.",
    "recusar o financiamento a quem já possua seguro do bem contratado em outra empresa."],
   "Mesmo quando a proteção é exigida, a **liberdade de escolha** do fornecedor deve ser respeitada; impor a seguradora do grupo configura venda casada.\n\n"
   "- Exigir seguradora própria é a prática vedada.\n- Embutir sem informar viola o dever de informação.\n- Penalizar a escolha por outra seguradora é forma indireta de imposição.\n- Recusar quem já tem seguro adequado também é imposição.", dif=2, tags=["venda-casada", "liberdade-escolha"]),

TQ("VNA", ET,
   "Considere as condutas de um técnico bancário na oferta de produtos.\n\nI. Informar ao cliente de forma clara as taxas, os encargos, os riscos e as condições de resgate do produto.\nII. Omitir o custo de um seguro embutido no empréstimo, já que o cliente não perguntou.\nIII. Reconhecer quando o produto não é adequado ao cliente, mesmo que isso prejudique sua meta.\n\nSão condutas éticas e transparentes as descritas em",
   "I e III, apenas.",
   ["I, apenas.", "II, apenas.", "I e II, apenas.", "I, II e III."],
   "**I** correta: o direito à **informação adequada e clara** é básico do consumidor. **III** correta: a ética exige colocar o interesse do cliente acima da meta. **II** errada: omitir custo relevante viola o dever de informação; não cabe ao cliente adivinhar o que perguntar.\n\nPor isso, qualquer alternativa com II, ou sem I e III, está errada.", dif=2, tags=["transparencia", "etica"]),

TQ("VNA", ET,
   "Segundo as regras de prevenção ao superendividamento incorporadas ao Código de Defesa do Consumidor, na oferta de crédito é vedado ao fornecedor",
   "assediar ou pressionar o consumidor a contratar, sobretudo se idoso, analfabeto, doente ou vulnerável.",
   ["informar ao consumidor, previamente, o custo efetivo total e a taxa de juros da operação.",
    "avaliar de forma responsável a capacidade de pagamento do consumidor antes da contratação.",
    "entregar ao consumidor cópia do contrato de crédito após a contratação.",
    "esclarecer ao consumidor, de forma adequada, as consequências do inadimplemento."],
   "As regras de **superendividamento** reforçaram deveres de informação e de crédito responsável e vedaram práticas como **assédio ou pressão** para contratar, sobretudo a consumidores vulneráveis (idosos, analfabetos, doentes etc.).\n\n"
   "As demais alternativas descrevem **deveres** do fornecedor, e não condutas vedadas: informar o CET, avaliar a capacidade de pagamento, entregar cópia do contrato e esclarecer as consequências do atraso.", dif=3, tags=["superendividamento", "cdc"]),

TQ("VNA", ET,
   "Em uma campanha para bater a meta de previdência, um gerente orienta a equipe a dizer aos clientes que o plano “rende sempre mais que a poupança e não tem risco”, sem verificar o tipo de fundo. Essa orientação",
   "é antiética, pois induz o cliente a erro com informação enganosa sobre rentabilidade e risco.",
   ["é adequada, pois todo plano de previdência tem rentabilidade garantida.",
    "é aceitável, desde que a meta seja cumprida dentro do mês.",
    "configura apenas estratégia de persuasão, sem implicação ética.",
    "é correta, porque a previdência é sempre o melhor produto de longo prazo."],
   "Prometer rentabilidade superior e ausência de risco sem base é **informação enganosa**, contrária aos princípios de transparência e boa-fé. Rentabilidade passada não garante a futura e planos podem ter fundos com renda variável.\n\n"
   "- Previdência não tem rentabilidade garantida, em geral.\n- Meta não justifica informação falsa.\n- Persuasão ética não admite falsidade.\n- Não há produto “sempre melhor”; depende do perfil e objetivos.", dif=1, tags=["informacao-enganosa", "metas"]),

TQ("VNA", ET,
   "Um cliente contratou um seguro pelo telefone, por meio de ligação ativa do banco, e no dia seguinte decidiu desistir. Considerando o direito de arrependimento previsto no CDC para contratações fora do estabelecimento comercial, é correto afirmar que o cliente",
   "pode desistir no prazo de sete dias, com devolução dos valores eventualmente pagos.",
   ["não pode desistir, pois a contratação por telefone é definitiva.",
    "só pode desistir após o primeiro ano de vigência, sem devolução.",
    "pode desistir apenas se comprovar defeito no serviço.",
    "precisa ir pessoalmente à agência e pagar multa de cancelamento."],
   "O CDC garante o **direito de arrependimento** de **7 dias** (a contar da assinatura ou do recebimento) nas contratações **fora do estabelecimento comercial**, como telefone e internet, com devolução imediata e atualizada dos valores pagos.\n\n"
   "- A contratação a distância não é definitiva nesse prazo.\n- Não há exigência de esperar um ano.\n- O arrependimento independe de defeito.\n- Não se exige presença nem multa.", dif=3, tags=["arrependimento", "cdc"]),

TQ("VNA", ET,
   "A respeito da responsabilidade do profissional de atendimento na oferta de produtos financeiros, assinale a alternativa correta.",
   "A meta comercial não autoriza oferecer produto inadequado, pois a oferta deve observar boa-fé e transparência.",
   ["Cumprir a meta justifica omitir informações que possam desestimular a compra.",
    "Se o cliente assinou o contrato, eventuais omissões do atendente ficam afastadas.",
    "Produtos com maior comissão devem ser oferecidos prioritariamente, qualquer que seja o perfil do cliente.",
    "A responsabilidade pela adequação do produto é exclusiva do cliente."],
   "Boa-fé objetiva, transparência e **crédito/oferta responsável** orientam a venda de produtos financeiros. Metas são legítimas, mas não podem ser atingidas à custa do cliente.\n\n"
   "- Omitir informação viola o dever de informar.\n- A assinatura não convalida falha de informação ou prática abusiva.\n- Comissão não pode sobrepor-se à adequação.\n- A instituição tem dever de adequação; não é responsabilidade exclusiva do cliente.", dif=2, tags=["etica", "metas"]),

TQ("VNA", ET,
   "Um cliente pede ao atendente que explique o contrato de crédito consignado antes de assinar. Segundo o dever de informação, o atendente deve",
   "explicar, em linguagem acessível, total a pagar, parcelas, juros, CET, prazo e efeitos do atraso, conferindo o entendimento.",
   ["entregar o contrato e pedir que o cliente leia em casa e assine sem esclarecimentos.",
    "informar apenas o valor da parcela, que é o dado mais importante para o cliente aposentado.",
    "dizer que todas as condições são padronizadas e, portanto, não precisam ser explicadas.",
    "explicar apenas as cláusulas que favorecem o cliente, para não desestimular a contratação."],
   "O consumidor tem direito à **informação adequada e clara** sobre o produto, com especificação de quantidade, características, preço e riscos. No crédito, isso inclui CET, juros, total a pagar, parcelas e consequências do inadimplemento.\n\n"
   "- Entregar sem explicar descumpre o dever de informação quando o cliente pede esclarecimento.\n- A parcela isolada esconde o custo total.\n- Padronização não dispensa explicação.\n- Explicar só o que favorece é informação parcial e enganosa.", dif=1, tags=["informacao", "credito"]),

TQ("VNA", ET,
   "Um atendente percebe que uma cliente idosa está acompanhada de um parente que insiste para que ela contrate um empréstimo e transfira o valor para a conta dele, enquanto ela parece confusa e hesitante. A conduta mais adequada do atendente é",
   "falar diretamente com a cliente, verificar se ela entende e quer a operação e seguir os procedimentos para suspeita de abuso.",
   ["concluir a contratação rapidamente, pois o parente está acompanhando a cliente e conhece a situação dela.",
    "negociar as condições do empréstimo com o parente, que parece mais informado sobre o assunto.",
    "recusar-se a atender a cliente idosa sem dar explicações, encerrando o atendimento.",
    "sugerir que a cliente assine os documentos em branco para que o parente conclua a operação depois."],
   "Clientes idosos podem estar em **situação de vulnerabilidade**. A ética e as regras de crédito responsável exigem certificar-se da **vontade livre e informada** da própria cliente e acionar os procedimentos internos diante de indícios de abuso financeiro ou fraude.\n\n"
   "- Concluir rapidamente ignora sinais de coação.\n- O titular da operação é a cliente, não o parente.\n- Recusar sem explicação é discriminatório e não protege.\n- Assinatura em branco é prática gravemente irregular.", dif=2, tags=["vulnerabilidade", "idoso"]),

TQ("VNA", ET,
   "Sobre a publicidade de produtos e serviços financeiros, à luz do Código de Defesa do Consumidor, é correto afirmar que",
   "é enganosa a publicidade capaz de induzir o consumidor em erro, inclusive por omissão de dado essencial.",
   ["a publicidade só é enganosa quando contém informação inteiramente falsa.",
    "o fornecedor não fica vinculado à oferta veiculada, que tem caráter apenas informativo.",
    "a omissão de informações nunca configura publicidade enganosa.",
    "a publicidade abusiva e a enganosa são sinônimos no CDC."],
   "O CDC proíbe a publicidade **enganosa** (capaz de induzir em erro, total ou parcialmente falsa, **ou por omissão** de dado essencial) e a **abusiva** (discriminatória, que explore medo, superstição, a deficiência de julgamento da criança etc.). A oferta suficientemente precisa **vincula** o fornecedor.\n\n"
   "- Informação parcialmente falsa também é enganosa.\n- A oferta vincula o fornecedor.\n- Há enganosidade por omissão.\n- Abusiva e enganosa são categorias distintas.", dif=2, tags=["publicidade", "cdc"]),

TQ("VNA", ET,
   "Um técnico bancário recebe de um cliente, como agradecimento por ter conseguido aprovar rapidamente seu crédito, um presente de valor elevado. Considerando a ética no atendimento, a conduta adequada é",
   "recusar o presente com cordialidade ou seguir a política de brindes, evitando conflito de interesses.",
   ["aceitar o presente, pois o crédito já foi aprovado e não há mais interesse em jogo.",
    "aceitar e retribuir com redução de tarifas por conta própria, como gesto de gratidão.",
    "aceitar o presente desde que não conte a ninguém na agência, preservando a discrição.",
    "aceitar e prometer prioridade nos próximos pedidos de crédito do cliente."],
   "Presentes de valor relevante podem gerar **conflito de interesses** e comprometer a imparcialidade e a imagem da instituição. A conduta correta é seguir o código de conduta e a política de brindes, em regra recusando com cortesia.\n\n"
   "- Mesmo após a aprovação, o presente cria vínculo e expectativa futura.\n- Conceder vantagem por conta própria agrava a irregularidade.\n- Ocultar evidencia a impropriedade.\n- Prometer prioridade caracteriza favorecimento.", dif=1, tags=["conflito-de-interesses"]),
# ---------------- Reclamações, conflitos e mediação ----------------
TQ("VNA", RC,
   "Na gestão do atendimento, considera-se que as reclamações dos clientes devem ser tratadas como",
   "oportunidades de identificar falhas, melhorar processos e recuperar a confiança do cliente.",
   ["ameaças que devem ser evitadas, desestimulando o cliente a formalizá-las.",
    "problemas exclusivos do atendente que recebeu a reclamação.",
    "assuntos irrelevantes quando o cliente tem baixo volume de negócios.",
    "registros que só interessam ao setor jurídico do banco."],
   "A reclamação é um **feedback gratuito**: aponta falhas que muitos clientes insatisfeitos não relatam (simplesmente vão embora). Bem tratada, permite corrigir processos e pode até **aumentar** a lealdade do cliente.\n\n"
   "- Desestimular reclamações esconde problemas e aumenta a evasão.\n- A falha costuma ser de processo, e a solução é da organização.\n- Todo cliente tem direito a ter sua reclamação tratada.\n- Reclamações interessam à gestão como um todo, não só ao jurídico.", dif=1, tags=["reclamacoes"]),

TQ("VNA", RC,
   "Um cliente teve um débito em duplicidade. O banco reconheceu o erro rapidamente, estornou o valor, pediu desculpas e acompanhou o caso até a solução, e o cliente passou a avaliar o banco melhor do que antes do problema. Esse fenômeno é conhecido como",
   "paradoxo da recuperação de serviço.",
   ["dissonância cognitiva.", "efeito manada.", "venda consultiva.", "perecibilidade do serviço."],
   "O **paradoxo da recuperação de serviço** ocorre quando uma falha **bem resolvida** gera satisfação ou lealdade maior do que se a falha não tivesse ocorrido. Os elementos da boa recuperação são rapidez, reconhecimento, pedido de desculpas, solução e acompanhamento.\n\n"
   "- Dissonância cognitiva é a dúvida pós-compra.\n- Efeito manada é imitar o grupo.\n- Venda consultiva é técnica de vendas.\n- Perecibilidade é a impossibilidade de estocar o serviço.", dif=3, tags=["recuperacao-servico"]),

TQ("VNA", RC,
   "Um cliente chega exaltado à agência reclamando de um bloqueio no cartão. A sequência de condutas mais adequada para o atendente é",
   "ouvir sem interromper, acolher, apurar os fatos, propor solução ou próximos passos e confirmar o entendimento.",
   ["pedir que o cliente se acalme antes de qualquer conversa e, se ele não se acalmar, encerrar o atendimento.",
    "explicar imediatamente as normas de segurança do banco, mostrando que o bloqueio foi correto.",
    "transferir o cliente para outro colega, para evitar o desgaste.",
    "prometer o desbloqueio imediato, mesmo sem verificar o motivo do bloqueio."],
   "Diante de um cliente irritado, recomenda-se **escutar** (deixar desabafar), **acolher** a emoção com empatia, **entender** os fatos, **resolver** ou informar prazos e **confirmar** a satisfação.\n\n"
   "- Exigir calma de forma impositiva tende a irritar mais.\n- Justificar antes de ouvir passa a impressão de que o banco não se importa.\n- Transferir sem necessidade aumenta a frustração.\n- Prometer sem verificar pode gerar nova decepção e risco à segurança.", dif=2, tags=["cliente-irritado"]),

TQ("VNA", RC,
   "Em relação à estrutura de atendimento a demandas dos clientes de instituições financeiras, é correto afirmar que a Ouvidoria",
   "atua como última instância interna, tratando demandas não solucionadas nos canais primários, como agências e SAC.",
   ["é o primeiro canal que o cliente deve procurar para qualquer solicitação, como segunda via de boleto.",
    "é um órgão do Banco Central responsável por julgar os conflitos entre bancos e clientes.",
    "substitui o SAC, que deixa de existir nas instituições que possuem ouvidoria.",
    "só pode ser acionada por meio de ação judicial."],
   "A **Ouvidoria** é componente da própria instituição e atua como **segunda (e última) instância interna**: recebe demandas não resolvidas no atendimento primário (agência, SAC, canais digitais) e também atua como canal de mediação e de melhoria de processos.\n\n"
   "- Solicitações comuns devem ir aos canais primários.\n- A ouvidoria pertence à instituição, não ao Banco Central, e não julga.\n- Ouvidoria e SAC coexistem.\n- Não depende de ação judicial.", dif=1, tags=["ouvidoria", "sac"]),

TQ("VNA", RC,
   "Sobre a plataforma Consumidor.gov.br, é correto afirmar que",
   "é um serviço público e gratuito em que o consumidor registra reclamação e dialoga diretamente com empresas participantes.",
   ["é o canal interno de ouvidoria de cada banco, mantido e administrado pela própria instituição financeira.",
    "substitui o Poder Judiciário nas relações de consumo, e suas decisões têm força de sentença.",
    "é exclusivo para reclamações contra órgãos públicos federais, estaduais e municipais.",
    "obriga o consumidor a pagar uma taxa para registrar a reclamação contra a empresa."],
   "O **Consumidor.gov.br** é uma plataforma pública, gratuita, em que o consumidor registra a reclamação e a **empresa participante** responde diretamente, favorecendo a solução extrajudicial. As informações também subsidiam políticas públicas de defesa do consumidor.\n\n"
   "- Não é a ouvidoria interna dos bancos.\n- Não emite decisões judiciais.\n- Trata de relações de consumo com empresas.\n- O uso é gratuito.", dif=1, tags=["consumidor-gov"]),

TQ("VNA", RC,
   "Na resolução de conflitos, a mediação diferencia-se da arbitragem porque, na mediação,",
   "um terceiro imparcial facilita o diálogo para que as próprias partes construam a solução.",
   ["um terceiro escolhido pelas partes decide o conflito, e sua decisão é obrigatória.",
    "a solução é sempre imposta pelo juiz em processo judicial.",
    "uma das partes decide sozinha e comunica a decisão à outra.",
    "o terceiro representa os interesses de uma das partes contra a outra."],
   "Na **mediação**, o mediador é neutro e ajuda as partes a dialogar e encontrar uma solução própria. Na **arbitragem**, o árbitro **decide** e a decisão vincula as partes. Na **conciliação**, o terceiro pode sugerir soluções.\n\n"
   "- Terceiro que decide é árbitro.\n- Decisão judicial é jurisdição estatal.\n- Decisão unilateral não é mediação.\n- O mediador é imparcial, não representante de uma parte.", dif=2, tags=["mediacao", "arbitragem"]),

TQ("VNA", RC,
   "Considere as afirmativas sobre o tratamento de reclamações.\n\nI. Registrar a reclamação, informar um número de protocolo e um prazo de resposta contribui para a confiança do cliente.\nII. Analisar as causas recorrentes das reclamações permite corrigir processos e evitar novas ocorrências.\nIII. Se o cliente estiver errado, o atendente deve deixar isso claro de forma enfática, para evitar novas reclamações.\n\nEstá correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "II, apenas.", "I e III, apenas.", "I, II e III."],
   "**I** correta: protocolo e prazo dão transparência e rastreabilidade. **II** correta: a análise de **causa raiz** transforma reclamações em melhoria. **III** errada: mesmo que o cliente esteja equivocado, a explicação deve ser **respeitosa e clara**, sem confronto, preservando o relacionamento.\n\nAs combinações com III ou sem I e II estão erradas.", dif=2, tags=["reclamacoes", "protocolo"]),

TQ("VNA", RC,
   "Uma cliente reclama que um atendente foi grosseiro com ela. O supervisor que recebe a reclamação deve",
   "ouvir a cliente, desculpar-se, registrar o ocorrido e apurar os fatos de forma reservada com o colaborador.",
   ["defender o colaborador na frente da cliente, afirmando que ele nunca seria grosseiro.",
    "repreender o colaborador publicamente, na presença da cliente.",
    "ignorar a reclamação, pois não envolve produto ou serviço financeiro.",
    "oferecer à cliente vantagens financeiras em troca da retirada da reclamação registrada."],
   "O tratamento adequado combina **acolhimento** da cliente e **apuração** justa, de forma reservada, com o colaborador, seguida de medidas (orientação, treinamento ou outras).\n\n"
   "- Negar sem apurar desqualifica a cliente.\n- Repreender em público é inadequado e expõe o colaborador.\n- Comportamento no atendimento é parte do serviço.\n- Oferecer vantagem para retirar a reclamação é antiético e esconde o problema.", dif=1, tags=["reclamacoes", "supervisao"]),

TQ("VNA", RC,
   "Em uma negociação de dívida, o cliente e o banco chegam a um impasse. Um mediador sugere que, em vez de discutir quem tem razão sobre o atraso, ambos analisem o que cada um precisa: o cliente, de parcelas compatíveis com sua renda; o banco, de receber o crédito. Essa intervenção busca",
   "deslocar o foco das posições para os interesses, abrindo espaço para ganho mútuo.",
   ["reforçar a posição do banco, que é a parte mais forte da relação.",
    "encerrar a negociação e encaminhar o caso à cobrança judicial.",
    "atribuir a culpa do atraso ao cliente, para justificar encargos maiores.",
    "impor uma decisão final às partes, como faria um árbitro."],
   "Ao trocar a discussão de “quem tem razão” (posições) pela pergunta “o que cada um precisa” (interesses), a mediação favorece soluções **integrativas**, como uma renegociação viável.\n\n"
   "- O mediador é imparcial e não reforça uma das partes.\n- A intervenção busca justamente evitar o encerramento.\n- Atribuir culpa mantém o conflito.\n- Impor decisão é papel do árbitro, não do mediador.", dif=3, tags=["mediacao", "interesses-posicoes"]),

TQ("VNA", RC,
   "Estudos de atendimento indicam que muitos clientes insatisfeitos não reclamam, mas simplesmente deixam a empresa e relatam a experiência negativa a outras pessoas. Diante disso, é recomendável que o banco",
   "facilite os canais de reclamação e estimule o cliente a manifestar sua insatisfação.",
   ["dificulte o registro de reclamações para melhorar seus indicadores.",
    "considere satisfeitos todos os clientes que não registraram reclamação.",
    "responda apenas às reclamações feitas em redes sociais, que têm maior visibilidade.",
    "deixe de realizar pesquisas de satisfação, para não identificar insatisfeitos."],
   "Como a maioria dos insatisfeitos é **silenciosa**, a empresa deve tornar fácil reclamar e buscar ativamente feedback (pesquisas, canais acessíveis). Assim pode recuperar o cliente antes que ele saia.\n\n"
   "- Dificultar reclamações mascara problemas e aumenta a evasão.\n- Ausência de reclamação não prova satisfação.\n- Todos os canais merecem resposta, não só os de maior visibilidade.\n- Pesquisas são necessárias para conhecer os insatisfeitos.", dif=2, tags=["reclamacoes", "insatisfeito-silencioso"]),

# ---------------- Canais e transformação digital ----------------
TQ("VNA", CN,
   "A diferença entre as estratégias multicanal e omnichannel no atendimento bancário é que, no omnichannel,",
   "os canais são integrados, e o cliente pode iniciar uma demanda em um canal e concluí-la em outro sem repetir dados.",
   ["o banco concentra o atendimento em um único canal, geralmente o aplicativo, para reduzir custos.",
    "cada canal funciona de forma independente, com sistemas e informações próprias.",
    "o atendimento presencial é eliminado em favor do autoatendimento nos terminais e no aplicativo.",
    "o cliente é obrigado a usar o canal escolhido pelo banco para cada tipo de serviço."],
   "No **multicanal**, existem vários canais, mas eles operam de forma **isolada**. No **omnichannel**, os canais são **integrados** e compartilham dados, oferecendo experiência contínua.\n\n"
   "- Omnichannel envolve vários canais, não um só.\n- Canais independentes descrevem o multicanal.\n- O presencial pode integrar a estratégia omnichannel.\n- O cliente escolhe o canal de sua conveniência.", dif=2, tags=["omnichannel"]),

TQ("VNA", CN,
   "Um banco implantou um chatbot no aplicativo para responder dúvidas frequentes. Para preservar a qualidade do atendimento, é recomendável que",
   "haja transferência para atendimento humano quando o assistente virtual não resolver a demanda.",
   ["o chatbot seja o único canal disponível, para reduzir custos ao máximo.",
    "o chatbot solicite a senha do cliente para confirmar sua identidade.",
    "o cliente não seja informado de que está conversando com um assistente virtual.",
    "as respostas sejam longas e técnicas, para demonstrar a competência do banco."],
   "Chatbots aumentam a agilidade em demandas simples, mas a boa prática prevê **transbordo** para humano em casos complexos, transparência de que se trata de um robô e linguagem clara.\n\n"
   "- Canal único automatizado prejudica casos complexos.\n- Pedido de senha é risco de segurança.\n- Esconder que é robô fere a transparência.\n- Respostas longas e técnicas criam ruído.", dif=1, tags=["chatbot"]),

TQ("VNA", CN,
   "No composto de marketing (4Ps), os canais de atendimento e de distribuição de produtos bancários — agências, correspondentes, caixas eletrônicos, internet banking e aplicativo — correspondem ao P de",
   "praça.",
   ["produto.", "preço.", "promoção.", "pessoas."],
   "No mix de marketing, **praça** (*place*) refere-se à **distribuição**: como e onde o produto ou serviço chega ao cliente. Em bancos, são os canais físicos e digitais.\n\n"
   "- Produto é o que se oferece (conta, crédito, seguro).\n- Preço inclui tarifas e taxas.\n- Promoção é a comunicação (propaganda, campanhas).\n- Pessoas é um dos Ps adicionais dos serviços (7Ps), não o P dos canais.", dif=1, tags=["4ps", "praca"]),

TQ("VNA", CN,
   "Considere as afirmativas sobre a transformação digital no setor bancário.\n\nI. Os canais digitais permitem atendimento em qualquer horário e reduzem custos operacionais.\nII. A digitalização torna desnecessária a atenção a clientes com dificuldade de acesso à tecnologia.\nIII. O papel das agências tende a se deslocar de transações simples para atendimento consultivo e de maior complexidade.\n\nEstá correto o que se afirma em",
   "I e III, apenas.",
   ["I, apenas.", "II, apenas.", "I e II, apenas.", "I, II e III."],
   "**I** correta: canais digitais oferecem conveniência 24h e custo por transação menor. **III** correta: transações simples migram para o digital, e a agência foca em **consultoria** e casos complexos. **II** errada: a inclusão exige atenção a idosos, pessoas com pouca familiaridade digital e com deficiência, com canais acessíveis e apoio.\n\nAs combinações com II, ou sem I e III, estão erradas.", dif=1, tags=["transformacao-digital", "inclusao"]),

TQ("VNA", CN,
   "O termo “phygital”, usado no varejo e em bancos, refere-se à estratégia de",
   "integrar experiências físicas e digitais, como agendar pelo aplicativo e ser atendido na agência com o histórico à mão.",
   ["fechar todas as agências físicas e manter apenas o aplicativo como canal de relacionamento.",
    "oferecer produtos físicos, como talões e cartões, apenas nas agências, e serviços digitais só no app.",
    "substituir os atendentes por terminais de autoatendimento em todas as agências da rede.",
    "separar totalmente as equipes e os sistemas do digital e do presencial."],
   "**Phygital** (*physical* + *digital*) é a integração entre os mundos físico e digital, em linha com o omnichannel, oferecendo continuidade e conveniência.\n\n"
   "- Fechar todas as agências não é integração.\n- Restringir itens ao canal físico não é a ideia.\n- Substituir pessoas por máquinas não define o conceito.\n- Separar as equipes vai na direção oposta à integração.", dif=2, tags=["phygital", "omnichannel"]),

TQ("VNA", CN,
   "Um cliente idoso tem dificuldade em usar o caixa eletrônico e pede ajuda ao funcionário da agência. A conduta adequada é",
   "orientá-lo com paciência, deixando que ele mesmo digite a senha, sem vê-la nem pedi-la, e estimular sua autonomia.",
   ["pedir a senha ao cliente e realizar a operação no lugar dele, para agilizar a fila de espera.",
    "recusar a ajuda, pois o autoatendimento é de responsabilidade exclusiva do cliente.",
    "encaminhar o cliente a outra pessoa da fila que saiba usar o equipamento com mais facilidade.",
    "recomendar que ele deixe o cartão com o funcionário para operações futuras, evitando novas dificuldades."],
   "O autoatendimento deve ser acompanhado de **orientação** e **segurança**. O funcionário ajuda a navegar, mas a **senha é pessoal e intransferível** e não deve ser vista nem solicitada.\n\n"
   "- Pedir a senha expõe o cliente a risco e fere regras de segurança.\n- Recusar ajuda é mau atendimento e exclui o cliente.\n- Pedir ajuda a terceiros desconhecidos expõe o cliente a golpes.\n- Reter o cartão é irregular.", dif=2, tags=["autoatendimento", "seguranca"]),

TQ("VNA", CN,
   "Em um banco, o cliente começa a contestação de uma compra pelo aplicativo, liga para a central e o atendente já visualiza a contestação aberta e o histórico, sem pedir que ele repita tudo. Esse exemplo demonstra",
   "integração de canais em uma estratégia omnichannel, que reduz o esforço do cliente.",
   ["atendimento multicanal sem integração.", "falha de segurança, pois o atendente não deveria ver o histórico.", "venda cruzada de serviços digitais.", "terceirização do atendimento telefônico."],
   "O compartilhamento de dados e do histórico entre canais é a essência do **omnichannel** e reduz o **esforço do cliente** (indicador CES).\n\n"
   "- No multicanal sem integração, o cliente teria de repetir as informações.\n- Acessar o histórico do próprio cliente para atendê-lo é legítimo.\n- Não há oferta de produto.\n- Nada indica terceirização.", dif=2, tags=["omnichannel", "ces"]),

TQ("VNA", CN,
   "Um cliente recebe uma mensagem de texto, supostamente do banco, com um link para “atualizar o cadastro e evitar o bloqueio da conta” e procura a agência. A orientação correta do atendente é",
   "não clicar em links recebidos por mensagem, não informar senhas ou códigos e usar só os canais oficiais.",
   ["clicar no link apenas pelo computador, que é mais seguro que o celular contra vírus.",
    "responder à mensagem informando os dados, desde que não envie a senha do cartão.",
    "ignorar a mensagem e desligar o celular por 24 horas para bloquear o acesso dos golpistas.",
    "encaminhar a mensagem a amigos para verificar se eles também a receberam."],
   "Mensagens com links e senso de urgência são táticas típicas de **phishing/smishing** (engenharia social). A orientação é usar só os **canais oficiais** e nunca fornecer senhas, códigos ou tokens.\n\n"
   "- O dispositivo não torna o link seguro.\n- Qualquer dado pessoal pode ser usado em golpes.\n- Desligar o celular não resolve nem orienta.\n- Repassar a mensagem pode espalhar o golpe.", dif=2, tags=["seguranca-digital", "golpes"]),

TQ("VNA", CN,
   "Na transformação digital dos bancos, o uso de análise de dados e de inteligência artificial para oferecer ao cliente, no aplicativo, sugestões de produtos e alertas de gastos de acordo com seu comportamento exemplifica",
   "a personalização do atendimento digital em escala, apoiada em dados.",
   ["o marketing de massa, com mensagem única para todos os clientes.",
    "a eliminação da necessidade de proteção de dados pessoais.",
    "a venda casada digital, pois a sugestão aparece automaticamente.",
    "a substituição do suitability por algoritmos sem qualquer controle."],
   "Dados e IA permitem **hiperpersonalização**: ofertas e alertas relevantes para cada cliente, com escala digital. Isso deve respeitar a proteção de dados e as regras de adequação.\n\n"
   "- Marketing de massa é o oposto da personalização.\n- O uso de dados exige mais atenção à proteção de dados.\n- Sugerir não é condicionar; venda casada é imposição.\n- O dever de adequação continua existindo também no digital.", dif=3, tags=["personalizacao", "dados"]),

TQ("VNA", CN,
   "Ao atender por telefone, uma boa prática para manter a qualidade, considerando a ausência de contato visual, é",
   "identificar-se, usar tom cordial e claro, avisar antes de pausas e confirmar o entendimento ao final.",
   ["falar rápido para reduzir o tempo da ligação, independentemente do entendimento do cliente.",
    "deixar o cliente em espera sem aviso enquanto consulta outros setores.",
    "usar siglas internas para tornar a explicação mais curta.",
    "comer ou conversar com colegas durante a ligação, desde que o microfone esteja longe."],
   "No telefone, a **voz** carrega toda a comunicação: tom, ritmo e clareza são essenciais. Deve-se avisar antes de colocar em espera e verificar o entendimento.\n\n"
   "- Rapidez sem entendimento gera recontato.\n- Espera sem aviso parece abandono.\n- Siglas internas causam ruído.\n- Distrações são percebidas e demonstram desrespeito.", dif=1, tags=["telefone"]),

# ---------------- Metas, segmentação e gestão de carteira ----------------
TQ("VNA", MG,
   "Para que uma meta comercial seja bem formulada segundo o critério SMART, ela deve ser",
   "específica, mensurável, atingível, relevante e com prazo definido.",
   ["simples, motivadora, ampla, rígida e temporária.",
    "secreta, móvel, ambiciosa, relativa e trimestral.",
    "subjetiva, mensurável, arrojada, rápida e total.",
    "sustentável, mínima, aleatória, regional e técnica."],
   "**SMART**: *Specific* (específica), *Measurable* (mensurável), *Achievable* (atingível), *Relevant* (relevante) e *Time-bound* (temporal, com prazo). Exemplo: “aumentar em 10% a carteira de seguros residenciais da agência até 30 de junho”.\n\nAs outras alternativas usam palavras com as mesmas iniciais, mas que não compõem o critério (metas subjetivas, secretas ou aleatórias contrariam a boa gestão).", dif=1, tags=["metas", "smart"]),

TQ("VNA", MG,
   "Uma agência dividiu seus clientes pessoa física em grupos conforme a renda e o volume de investimentos, criando modelos de atendimento diferentes para cada grupo. Esse procedimento é chamado",
   "segmentação de clientes.",
   ["venda casada.", "posicionamento de preço.", "padronização total do atendimento.", "marketing de massa."],
   "**Segmentação** é dividir o mercado ou a base em grupos com características e necessidades semelhantes, para oferecer abordagem e produtos adequados a cada grupo. Bancos costumam segmentar por renda/investimentos, porte da empresa, ciclo de vida etc.\n\n"
   "- Venda casada é prática abusiva.\n- Posicionamento de preço é estratégia de preço, não divisão da base.\n- Padronização total ignora diferenças entre grupos.\n- Marketing de massa trata todos igualmente.", dif=1, tags=["segmentacao"]),

TQ("VNA", MG,
   "Sobre as bases de segmentação de mercado, associe corretamente: um banco que cria um produto para clientes que valorizam sustentabilidade e estilo de vida saudável está usando a segmentação",
   "psicográfica.",
   ["geográfica.", "demográfica.", "por porte.", "por volume de compras."],
   "Bases clássicas: **geográfica** (região, cidade), **demográfica** (idade, renda, sexo, ocupação), **psicográfica** (estilo de vida, valores, personalidade) e **comportamental** (uso, benefícios buscados, lealdade, volume de compras).\n\n"
   "- Geográfica e demográfica usam local e dados objetivos.\n- Porte é critério de empresas.\n- Volume de compras é critério comportamental.", dif=3, tags=["segmentacao"]),

TQ("VNA", MG,
   "Ao analisar sua carteira, um gerente constata que cerca de 20% dos clientes respondem por aproximadamente 80% da receita. Com base nesse princípio, a gestão mais adequada da carteira é",
   "priorizar os clientes de maior valor sem abandonar os demais, atendendo-os por canais eficientes e desenvolvendo seu potencial.",
   ["encerrar o relacionamento com os 80% de clientes de menor receita, para focar nos rentáveis.",
    "dedicar o mesmo tempo a todos os clientes, independentemente do valor que geram e de suas necessidades.",
    "concentrar todo o esforço nos clientes de menor receita, para equilibrar a carteira e reduzir dependência.",
    "ignorar a análise, pois a receita gerada pelos clientes não deve orientar a gestão de carteira."],
   "O **princípio de Pareto (80/20)** orienta a **priorização**: dedicar mais atenção a quem gera mais valor, sem descuidar dos demais, que podem ter **potencial de crescimento** e ser atendidos por canais eficientes.\n\n"
   "- Encerrar relacionamentos desperdiça potencial e prejudica a imagem.\n- Tratar todos igualmente ignora diferenças de valor e necessidades.\n- Inverter o foco não é racional.\n- A informação de receita é relevante para a gestão.", dif=3, tags=["pareto", "carteira"]),

TQ("VNA", MG,
   "Segundo a teoria dos dois fatores de Herzberg, aplicada à motivação de equipes comerciais, é correto afirmar que",
   "reconhecimento, responsabilidade e crescimento são fatores motivacionais, e salário e condições de trabalho, higiênicos.",
   ["salário é o principal fator motivacional, capaz de gerar satisfação duradoura por si só.",
    "fatores higiênicos, quando adequados, provocam motivação intensa e permanente na equipe.",
    "reconhecimento e crescimento profissional são fatores higiênicos, que apenas evitam a insatisfação.",
    "a motivação independe de qualquer fator ligado ao trabalho, sendo apenas traço de personalidade."],
   "Para **Herzberg**, os **fatores higiênicos** (salário, condições, políticas, supervisão) evitam a insatisfação, mas não motivam por si só. Os **fatores motivacionais** (reconhecimento, realização, responsabilidade, crescimento, o próprio trabalho) geram satisfação e motivação.\n\n"
   "- Salário é fator higiênico.\n- Fatores higiênicos apenas evitam a insatisfação.\n- Reconhecimento e crescimento são motivacionais.\n- A teoria liga a motivação justamente a fatores do trabalho.", dif=3, tags=["motivacao", "herzberg"]),

TQ("VNA", MG,
   "Um gestor quer manter a equipe comercial motivada ao longo do semestre. Entre as práticas abaixo, a mais adequada é",
   "fixar metas claras, desafiadoras e atingíveis, dar feedback frequente e reconhecer as conquistas.",
   ["definir metas inalcançáveis, para que a equipe sempre se esforce ao máximo.",
    "divulgar apenas os erros da equipe, para evitar acomodação.",
    "estimular a competição interna a qualquer custo, inclusive com venda de produtos inadequados.",
    "evitar dar feedback, para não interferir na autonomia dos vendedores."],
   "Metas **desafiadoras e atingíveis**, acompanhamento com **feedback** e **reconhecimento** são práticas consagradas de motivação. A pressão desmedida gera desmotivação e risco de condutas antiéticas.\n\n"
   "- Metas inalcançáveis frustram e estimulam atalhos.\n- Foco só nos erros desmotiva.\n- Competição sem limites leva a vendas inadequadas.\n- Ausência de feedback deixa a equipe sem direção.", dif=2, tags=["motivacao", "metas"]),

TQ("VNA", MG,
   "Na análise SWOT de uma agência, a abertura de uma nova fintech na cidade com tarifas zero e a chegada de uma grande indústria que contratará centenas de funcionários são, respectivamente,",
   "uma ameaça e uma oportunidade do ambiente externo.",
   ["uma fraqueza e uma força do ambiente interno.",
    "uma oportunidade e uma ameaça do ambiente externo.",
    "uma força e uma oportunidade.",
    "uma ameaça interna e uma força externa."],
   "Na **SWOT**, **forças** e **fraquezas** são fatores **internos**; **oportunidades** e **ameaças** são fatores **externos**. A fintech concorrente é **ameaça** externa; a nova indústria (potencial de folha de pagamento e novos clientes) é **oportunidade** externa.\n\n"
   "- Os dois fatos são externos, não internos.\n- A inversão (oportunidade e ameaça) está errada.\n- Força é fator interno.\n- Não existe “ameaça interna” nem “força externa” na matriz.", dif=3, tags=["swot", "analise-ambiental"]),

TQ("VNA", MG,
   "Diferencial competitivo, no contexto de serviços bancários, é",
   "uma característica valorizada pelo cliente, que distingue a instituição dos concorrentes e é difícil de copiar.",
   ["qualquer produto que todos os bancos oferecem com as mesmas condições e tarifas.",
    "o resultado de práticas de preço abaixo do custo mantidas indefinidamente para atrair clientes.",
    "a diferença entre a meta estabelecida e o resultado alcançado por uma agência.",
    "a ausência de concorrentes no mercado bancário local em que a agência atua."],
   "**Diferencial competitivo** é o que faz o cliente preferir uma empresa: algo **valorizado**, **distinto** e **sustentável** (difícil de imitar), como qualidade de atendimento, relacionamento, conhecimento regional, conveniência.\n\n"
   "- Produto igual ao de todos não diferencia.\n- Preço abaixo do custo não é sustentável.\n- Diferença entre meta e resultado é desvio de desempenho.\n- Ausência de concorrência é situação de mercado, não diferencial da empresa.", dif=1, tags=["diferencial-competitivo"]),

TQ("VNA", MG,
   "Uma agência tem meta mensal de 40 novos seguros residenciais. Até o dia 20, foram vendidos 26 seguros. Para cumprir exatamente a meta, a equipe precisa vender, até o fim do mês, quantos seguros a mais, e qual o percentual da meta já atingido?",
   "14 seguros; 65% da meta atingida.",
   ["14 seguros; 35% da meta atingida.", "16 seguros; 65% da meta atingida.", "26 seguros; 50% da meta atingida.", "12 seguros; 70% da meta atingida."],
   "Faltam 40 − 26 = **14** seguros. O percentual atingido é 26 ÷ 40 = 0,65 = **65%**.\n\n"
   "- 35% é o que falta, não o que foi atingido.\n- 16 seguros não corresponde à diferença.\n- 26 é o que já foi vendido; 50% não decorre dos dados.\n- 12 seguros e 70% resultam de contas erradas.", dif=1, tags=["metas", "calculo"],
   ver=("print(40-26, f'{26/40*100:g}%')", "14 65%")),

TQ("VNA", MG,
   "Na gestão de uma carteira de clientes, a análise da concorrência é importante porque",
   "permite conhecer ofertas, preços e diferenciais dos concorrentes, ajudando a posicionar o banco e prevenir perdas.",
   ["autoriza o gerente a divulgar informações negativas e não comprovadas sobre outros bancos.",
    "substitui a necessidade de conhecer as necessidades dos próprios clientes.",
    "serve apenas para copiar integralmente os produtos dos concorrentes, reduzindo custos.",
    "é irrelevante no setor bancário, que não tem concorrência efetiva entre as instituições."],
   "A **análise da concorrência** faz parte da análise do ambiente externo: mostra como o banco se compara e onde pode se diferenciar, além de sinalizar ameaças à carteira.\n\n"
   "- Difamar concorrentes é antiético.\n- Conhecer o cliente continua essencial.\n- Copiar integralmente não gera diferencial.\n- O setor bancário é competitivo, especialmente com bancos digitais e fintechs.", dif=2, tags=["concorrencia", "analise-ambiental"]),
]
