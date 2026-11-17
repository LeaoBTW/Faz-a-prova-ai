# -*- coding: utf-8 -*-
"""Conhecimentos Bancários e Securitários (Técnico Bancário) — inéditas estilo FCC.

Foco nos temas securitários (seguros, previdência aberta, capitalização, consórcio, bancassurance)
e nos bancários ainda pouco cobertos no banco (produtos, portabilidade, Res. CMN 4.966/2021, garantias).
"""
from comum import TQ

T_SEG = "Seguros: conceitos, princípios e participantes"
T_MOD = "Seguros pessoais e empresariais: modalidades"
T_PREV = "Previdência complementar aberta: PGBL e VGBL"
T_CAP = "Títulos de capitalização"
T_CONS = "Consórcio"
T_BANC = "Bancassurance"
T_REG = "Regulação e supervisão: CNSP, Susep, CMN e Bacen"
T_PROD = "Produtos bancários: contas, crédito, cartões e meios de pagamento"
T_CAPT = "Captação, intermediação e aplicação de recursos"
T_MERC = "Mercado financeiro e de capitais: instrumentos"
T_PORT = "Portabilidade"
T_4966 = "Resolução CMN nº 4.966/2021"
T_GAR = "Câmbio e garantias"
T_CDC = "Proteção do consumidor e educação financeira"

QUESTOES = [
# ---------------------------------------------------------------- Seguros: conceitos (10)
TQ("CB", T_SEG,
   "O princípio segundo o qual as contribuições de um grande número de segurados formam um fundo comum, capaz de pagar os prejuízos dos poucos que efetivamente sofrem sinistros, denomina-se",
   "mutualismo.",
   ["princípio indenitário.", "sub-rogação.", "retrocessão.", "princípio da boa-fé."],
   "O **mutualismo** é a base técnica do seguro: muitos pagam prêmios relativamente pequenos e o fundo formado paga os sinistros de poucos; a lei dos grandes números permite à seguradora estimar essas perdas. "
   "O **princípio indenitário** diz que, nos seguros de danos, a indenização não pode superar o prejuízo (o seguro não é fonte de lucro). "
   "A **sub-rogação** é a substituição da seguradora, depois de indenizar, nos direitos do segurado contra o causador do dano. "
   "A **retrocessão** é a cessão de riscos feita por um ressegurador a outro ressegurador ou a uma seguradora. "
   "A **boa-fé** impõe às partes lealdade e veracidade nas informações, e não trata da formação do fundo comum.",
   dif=1, tags=["seguros", "mutualismo"], ref="03/17"),

TQ("CB", T_SEG,
   "Em um seguro residencial, o incêndio que danifica a cozinha do segurado, evento previsto na apólice como coberto, é tecnicamente chamado de",
   "sinistro.",
   ["prêmio.", "franquia.", "endosso.", "risco excluído."],
   "**Sinistro** é a realização do risco coberto, isto é, o evento que gera o direito à indenização. "
   "**Prêmio** é o valor que o segurado paga à seguradora pela cobertura. "
   "**Franquia** é a parte do prejuízo que fica por conta do segurado. "
   "**Endosso** é o documento que altera uma apólice já emitida. "
   "**Risco excluído** é o evento que a apólice expressamente não cobre; o enunciado diz que o incêndio estava coberto.",
   dif=1, tags=["seguros"], ref="03/17"),

TQ("CB", T_SEG,
   "Mariana tem seguro de automóvel com franquia de R$ 3.000,00, aplicável a danos parciais. Em uma colisão coberta, o conserto do veículo foi orçado em R$ 7.500,00. Considerando apenas essas informações, a seguradora deverá indenizar",
   "R$ 4.500,00.",
   ["R$ 7.500,00.", "R$ 3.000,00.", "R$ 10.500,00.", "nada, porque houve franquia."],
   "A **franquia** é a participação obrigatória do segurado nos prejuízos: a seguradora paga apenas o que exceder esse valor. Logo, 7.500 − 3.000 = **R$ 4.500,00**. "
   "R$ 7.500,00 ignora a franquia. R$ 3.000,00 é justamente a parte que fica com a segurada. R$ 10.500,00 soma, em vez de subtrair, a franquia. "
   "Não pagar nada só aconteceria se o prejuízo fosse igual ou menor que a franquia, o que não é o caso.",
   dif=1, tags=["seguros", "franquia", "calculo"], ref="03/17",
   ver=("print(7500 - 3000)", "4500")),

TQ("CB", T_SEG,
   "Uma empresa contrata seguro de vida em grupo para seus empregados, assumindo perante a seguradora a representação do grupo segurado, inclusive o repasse dos prêmios. Nesse contrato, a empresa figura como",
   "estipulante.",
   ["corretora de seguros.", "beneficiária.", "seguradora líder.", "resseguradora."],
   "**Estipulante** é a pessoa (física ou jurídica) que contrata seguro em favor de um grupo e o representa perante a seguradora, como a empresa no seguro de vida em grupo. "
   "**Corretora** é a intermediária que angaria e promove os contratos, remunerada por comissão; não é a contratante. "
   "**Beneficiário** é quem recebe o capital no caso de morte do segurado, em regra os familiares indicados pelo empregado, e não a empresa. "
   "**Seguradora líder** é a que administra um cosseguro. "
   "**Resseguradora** é a que aceita riscos cedidos por seguradoras.",
   dif=2, tags=["seguros", "participantes"], ref="03/17"),

TQ("CB", T_SEG,
   "Considere as afirmativas sobre a distribuição de riscos no mercado de seguros.\n\n"
   "I. No cosseguro, duas ou mais seguradoras dividem diretamente um mesmo risco, cada uma responsável por sua cota, normalmente sob a administração de uma seguradora líder.\n"
   "II. No resseguro, a seguradora transfere parte de suas responsabilidades a um ressegurador, que passa a responder diretamente ao segurado pelo pagamento das indenizações.\n"
   "III. Retrocessão é a operação pela qual o ressegurador transfere parte dos riscos que aceitou a outros resseguradores ou a seguradoras.\n\n"
   "Está correto o que se afirma em",
   "I e III, apenas.",
   ["I, apenas.", "II, apenas.", "I e II, apenas.", "I, II e III."],
   "**I – correta.** O cosseguro é a divisão horizontal do mesmo risco entre seguradoras, com a líder conduzindo a apólice. "
   "**II – incorreta.** O resseguro é o “seguro da seguradora”: o segurado contrata e se relaciona apenas com a seguradora, que continua responsável perante ele; o ressegurador responde à seguradora. "
   "**III – correta.** Retrocessão é a cessão feita pelo ressegurador. "
   "Assim, só I e III estão corretas; as opções que incluem II ou excluem III estão erradas.",
   dif=2, tags=["seguros", "cosseguro", "resseguro"], ref="03/17"),

TQ("CB", T_SEG,
   "O profissional, pessoa física ou jurídica, que angaria e promove contratos de seguro entre o segurado e a seguradora, orientando o cliente e sendo remunerado por comissão, é o",
   "corretor de seguros.",
   ["estipulante.", "regulador de sinistros.", "atuário.", "ressegurador."],
   "O **corretor de seguros** é o intermediário legalmente habilitado que aproxima segurado e seguradora e recebe **comissão de corretagem**. "
   "O **estipulante** contrata o seguro em nome de um grupo, sem ser intermediário remunerado por comissão. "
   "O **regulador de sinistros** apura causas e prejuízos depois do sinistro. "
   "O **atuário** faz os cálculos de risco, prêmios e provisões. "
   "O **ressegurador** aceita riscos cedidos pelas seguradoras e não atende o segurado.",
   dif=1, tags=["seguros", "participantes"], ref="03/17"),

TQ("CB", T_SEG,
   "Ao preencher a proposta de seguro de automóvel, um cliente declara ser o único condutor do veículo, embora saiba que o carro é usado diariamente pelo filho de 19 anos, informação que elevaria o prêmio. Essa conduta",
   "viola o princípio da boa-fé, pois o segurado deve declarar com veracidade as circunstâncias que influem no risco ou no prêmio.",
   ["é irrelevante, pois cabe exclusivamente à seguradora verificar, por vistoria, quem dirige o veículo.",
    "viola apenas o princípio do mutualismo, sem qualquer reflexo sobre o direito à indenização.",
    "é permitida, porque o dever de boa-fé no contrato de seguro é imposto somente à seguradora.",
    "só teria consequências se o sinistro fosse causado pelo próprio segurado."],
   "O contrato de seguro exige **boa-fé e veracidade** de ambas as partes. Omitir ou falsear informação relevante para a análise do risco (como o perfil do condutor principal) pode levar à perda do direito à garantia ou a outras sanções previstas em lei e no contrato. "
   "A seguradora pode vistoriar, mas isso não afasta o dever do segurado de declarar a verdade. "
   "O problema não é de mutualismo, e a omissão tem, sim, reflexo sobre a indenização. "
   "O dever de boa-fé vale para **segurado e seguradora**. "
   "A omissão contamina a avaliação do risco como um todo, e não só os sinistros causados pelo próprio segurado.",
   dif=2, tags=["seguros", "boa-fe"], ref="03/17"),

TQ("CB", T_SEG,
   "Sobre o princípio indenitário, é correto afirmar que",
   "nos seguros de danos, a indenização não pode ultrapassar o valor do interesse segurado no momento do sinistro, já que o seguro não pode ser fonte de lucro.",
   ["nos seguros de pessoas, o capital segurado fica limitado à renda comprovada do segurado.",
    "o dono de um bem que vale R$ 100 mil pode receber R$ 150 mil em caso de perda total, se tiver contratado importância segurada maior.",
    "ele impede a contratação de mais de um seguro de vida sobre a mesma pessoa.",
    "ele torna proibida a previsão de franquia nos seguros de danos."],
   "O **princípio indenitário** rege os **seguros de danos**: a indenização repõe o prejuízo, sem enriquecer o segurado. "
   "Nos **seguros de pessoas** ele não se aplica do mesmo modo: o capital é livremente estipulado (a vida não tem preço) e não se vincula à renda; por isso, também é possível ter mais de um seguro de vida. "
   "Receber R$ 150 mil por um bem de R$ 100 mil seria lucro com o sinistro, justamente o que o princípio veda. "
   "A **franquia** é compatível com ele, pois reduz, e não aumenta, a indenização.",
   dif=2, tags=["seguros", "principio-indenitario"], ref="03/17"),

TQ("CB", T_SEG,
   "Depois da emissão da apólice de seguro de automóvel, o cliente troca de carro e pede que a cobertura passe a valer para o novo veículo. O documento emitido pela seguradora para formalizar essa alteração na apólice em vigor é o",
   "endosso.",
   ["aviso de sinistro.", "bilhete de seguro.", "nova proposta de resseguro.", "termo de sub-rogação."],
   "O **endosso** é o instrumento que altera uma apólice em vigor (troca de veículo, inclusão de condutor, mudança de endereço etc.). "
   "O **aviso de sinistro** é a comunicação do evento à seguradora. "
   "O **bilhete** é uma forma simplificada de contratar certos seguros, sem proposta, e não serve para alterar apólice. "
   "Resseguro é uma relação entre seguradora e ressegurador e nada tem a ver com o pedido do cliente. "
   "A **sub-rogação** é a substituição da seguradora nos direitos do segurado após indenizar.",
   dif=1, tags=["seguros", "apolice"], ref="03/17"),

TQ("CB", T_SEG,
   "O carro de Paulo, segurado, foi atingido por outro veículo cujo motorista avançou o sinal vermelho. A seguradora pagou o conserto e, em seguida, ajuizou ação contra o motorista culpado para reaver o valor pago. Essa cobrança é possível em razão",
   "da sub-rogação da seguradora nos direitos do segurado contra o causador do dano, até o valor pago.",
   ["do cosseguro, que autoriza a seguradora a dividir o prejuízo com o causador do dano.",
    "da retrocessão, que transfere o risco do segurado para o terceiro culpado.",
    "do mutualismo, que obriga todos os motoristas a contribuir para os sinistros alheios.",
    "da franquia, que transfere ao terceiro culpado a parte do prejuízo não indenizada."],
   "Nos seguros de danos, a seguradora que paga a indenização fica **sub-rogada** nos direitos do segurado contra o autor do dano, no limite do que pagou. (Nos seguros de pessoas, essa sub-rogação não ocorre.) "
   "**Cosseguro** é a divisão de um risco entre seguradoras, não com o causador. "
   "**Retrocessão** é cessão de riscos pelo ressegurador. "
   "O **mutualismo** envolve apenas os segurados que contribuem para o fundo, não terceiros. "
   "A **franquia** é a parte do prejuízo suportada pelo segurado; ela não cria direito de cobrança.",
   dif=3, tags=["seguros", "sub-rogacao"], ref="03/17"),

# ---------------------------------------------------------------- Seguros: modalidades (10)
TQ("CB", T_MOD,
   "Ao contratar um empréstimo pessoal, o cliente adere a um seguro que, em caso de sua morte ou invalidez, quita ou amortiza o saldo devedor junto ao banco credor. Trata-se do seguro",
   "prestamista.",
   ["garantia.", "de responsabilidade civil geral.", "de crédito à exportação.", "de lucros cessantes."],
   "O **seguro prestamista** cobre o pagamento da dívida do segurado (total ou parcial) em eventos como morte e invalidez e, conforme o contrato, desemprego; o credor é o primeiro beneficiário. "
   "O **seguro garantia** assegura o cumprimento de obrigações contratuais de um tomador (por exemplo, a execução de uma obra). "
   "O de **responsabilidade civil** cobre danos que o segurado cause a terceiros. "
   "O de **crédito à exportação** protege o exportador contra o não pagamento do importador. "
   "**Lucros cessantes** cobre o lucro que uma empresa deixa de obter durante a paralisação após sinistro.",
   dif=1, tags=["seguros", "prestamista"], ref="03/17"),

TQ("CB", T_MOD,
   "Roberto tinha apenas um seguro de acidentes pessoais, com cobertura de morte acidental, e faleceu em decorrência de uma doença cardíaca. Nessa situação,",
   "não há indenização, pois o seguro de acidentes pessoais não cobre a morte decorrente de doença.",
   ["os beneficiários recebem o capital, pois todo seguro de pessoas cobre morte por qualquer causa.",
    "os beneficiários recebem metade do capital, já que a doença é considerada acidente parcial.",
    "a indenização é paga somente se a doença tiver sido declarada na proposta.",
    "a seguradora deve converter o seguro em seguro de vida e pagar o capital com desconto."],
   "No **seguro de acidentes pessoais**, o evento coberto é o **acidente pessoal**: evento externo, súbito, involuntário e violento, que cause lesão física, morte ou invalidez. Morte natural (por doença) é coberta no **seguro de vida** com cobertura de morte por qualquer causa, e não no de acidentes pessoais. "
   "Nem todo seguro de pessoas cobre morte por qualquer causa; isso depende da cobertura contratada. "
   "Não existe “acidente parcial” para doença, nem conversão automática do seguro. "
   "Declarar a doença na proposta não transforma doença em acidente.",
   dif=2, tags=["seguros", "acidentes-pessoais"], ref="03/17"),

TQ("CB", T_MOD,
   "No seguro de automóvel, a cobertura que garante o reembolso das indenizações que o segurado for obrigado a pagar por danos materiais e corporais causados a outras pessoas em acidente com o veículo é denominada",
   "responsabilidade civil facultativa de veículos (RCF-V).",
   ["casco.", "acidentes pessoais de passageiros (APP).", "assistência 24 horas.", "cobertura compreensiva."],
   "A **RCF-V** cobre danos materiais e corporais que o segurado causar a **terceiros**. "
   "O **casco** protege o próprio veículo segurado (colisão, incêndio, roubo, conforme o contrato); a **cobertura compreensiva** é justamente o tipo mais amplo de cobertura de casco. "
   "A **APP** cobre morte ou invalidez dos **ocupantes** do veículo segurado. "
   "A **assistência 24 horas** é um serviço (guincho, chaveiro etc.), e não cobertura de danos a terceiros.",
   dif=2, tags=["seguros", "auto"], ref="03/17"),

TQ("CB", T_MOD,
   "Uma cliente quer contratar seguro residencial e pergunta ao gerente como as coberturas costumam ser organizadas. Está correta a orientação de que",
   "em regra, a cobertura básica abrange incêndio, raio e explosão, e roubo e danos elétricos são coberturas adicionais.",
   ["o seguro residencial cobre automaticamente qualquer dano ao imóvel, inclusive desgaste natural e falta de manutenção.",
    "o seguro residencial só pode ser contratado pelo proprietário, nunca pelo inquilino.",
    "a cobertura de roubo é sempre a cobertura básica, e incêndio é cobertura adicional opcional.",
    "a responsabilidade civil familiar só existe no seguro de automóvel."],
   "No mercado, o seguro residencial tem uma **cobertura básica** (tipicamente incêndio, raio e explosão) e **coberturas adicionais** escolhidas pelo cliente, como danos elétricos, roubo/furto qualificado, vendaval e responsabilidade civil familiar. "
   "Desgaste natural e falta de manutenção não são riscos cobertos, pois não são eventos súbitos e imprevistos. "
   "O inquilino também tem interesse segurável (seus bens e sua responsabilidade) e pode contratar. "
   "A lógica é a inversa: incêndio é básico, roubo é adicional. "
   "A **RC familiar** é, justamente, uma cobertura comum do seguro residencial.",
   dif=2, tags=["seguros", "residencial"], ref="03/17"),

TQ("CB", T_MOD,
   "Uma médica deseja proteger seu patrimônio contra indenizações que venha a ser condenada a pagar a pacientes por erros no exercício da profissão. O seguro indicado é o de",
   "responsabilidade civil profissional.",
   ["acidentes pessoais.", "vida em grupo.", "seguro garantia.", "lucros cessantes."],
   "O **seguro de responsabilidade civil** reembolsa as indenizações que o segurado deva pagar a terceiros por danos que lhes cause; na modalidade **profissional** (E&O), cobre erros e omissões no exercício da profissão. "
   "**Acidentes pessoais** e **vida em grupo** protegem a própria pessoa segurada, não terceiros prejudicados. "
   "O **seguro garantia** cobre o cumprimento de obrigações contratuais de um tomador perante um segurado. "
   "**Lucros cessantes** cobre perda de lucro de uma empresa paralisada por sinistro.",
   dif=2, tags=["seguros", "responsabilidade-civil"], ref="03/17"),

TQ("CB", T_MOD,
   "Uma construtora vence uma licitação, e o órgão público contratante exige garantia de que a obra será executada conforme o contrato. A construtora contrata um seguro garantia. Nesse seguro, é correto afirmar que",
   "a construtora é a tomadora e o órgão público é o segurado, a ser indenizado se o contrato for descumprido.",
   ["a construtora é a segurada e o órgão público é o tomador, que paga o prêmio.",
    "o órgão público é o estipulante e a construtora é a beneficiária da indenização.",
    "a seguradora indeniza a construtora se o órgão público atrasar os pagamentos da obra.",
    "trata-se de um seguro de pessoas, pois garante a atividade dos empregados da construtora."],
   "No **seguro garantia** há três partes: o **tomador** (quem deve cumprir a obrigação e contrata o seguro — a construtora), o **segurado** (o credor da obrigação — o órgão público) e a **seguradora**, que indeniza o segurado se o tomador descumprir o contrato. "
   "Inverter tomador e segurado está errado. "
   "Não há estipulante nem a construtora é beneficiária. "
   "O seguro garante a obrigação da construtora, e não os pagamentos do órgão público. "
   "É seguro de danos (patrimonial), e não de pessoas.",
   dif=2, tags=["seguros", "seguro-garantia"], ref="03/17"),

TQ("CB", T_MOD,
   "Sobre o seguro rural, é correto afirmar que",
   "pode cobrir lavouras e rebanhos contra seca, geada e granizo, admitindo subvenção federal ao prêmio.",
   ["cobre apenas máquinas e equipamentos agrícolas, excluídas as lavouras e os animais.",
    "é regulado e fiscalizado pela Comissão de Valores Mobiliários.",
    "só pode ser contratado por cooperativas agropecuárias, nunca por produtores individuais.",
    "não admite subvenção pública, por se tratar de seguro privado."],
   "O **seguro rural** reúne modalidades como agrícola, pecuário, de florestas e de benfeitorias e penhor rural, protegendo a produção contra riscos climáticos e outros. Existe o **Programa de Subvenção ao Prêmio do Seguro Rural (PSR)**, pelo qual o governo federal paga parte do prêmio. "
   "Não se restringe a máquinas: lavouras e rebanhos são o núcleo do seguro rural. "
   "Seguro é supervisionado pela **Susep**, e não pela CVM. "
   "Produtores individuais podem contratar. "
   "A subvenção existe justamente para baratear o seguro privado ao produtor.",
   dif=2, tags=["seguros", "seguro-rural"], ref="03/17"),

TQ("CB", T_MOD,
   "O microsseguro caracteriza-se por",
   "atender a população de baixa renda, com coberturas simples, prêmios baixos e linguagem acessível.",
   ["ser destinado exclusivamente a grandes empresas, para riscos de baixo valor.",
    "dispensar a supervisão da Susep, por envolver valores pequenos.",
    "cobrir apenas riscos de engenharia e de obras públicas.",
    "exigir, obrigatoriamente, vistoria prévia e perícia médica para qualquer contratação."],
   "O **microsseguro** busca a **inclusão securitária** de quem tem baixa renda: produtos simples, baratos, de fácil compreensão e oferecidos por canais acessíveis (inclusive correspondentes e meios remotos). "
   "Não é voltado a grandes empresas. "
   "Continua sendo seguro e, portanto, sujeito à regulação do CNSP e à supervisão da **Susep**. "
   "Não se limita a riscos de engenharia. "
   "Exigir vistoria e perícia em toda contratação contraria a simplicidade que o define.",
   dif=1, tags=["seguros", "microsseguro"], ref="03/17"),

TQ("CB", T_MOD,
   "Uma padaria ficou 40 dias fechada após um incêndio coberto pelo seguro empresarial. A cobertura que repõe o lucro que a empresa deixou de obter e as despesas fixas que continuou pagando durante a paralisação é a de",
   "lucros cessantes.",
   ["danos elétricos.", "responsabilidade civil de operações.", "vendaval.", "fidelidade de empregados."],
   "A cobertura de **lucros cessantes** indeniza a perda de lucro bruto e as despesas fixas durante o período em que a atividade fica interrompida por um sinistro coberto. "
   "**Danos elétricos** cobre estragos em equipamentos por variação de tensão. "
   "**RC de operações** cobre danos causados a terceiros pela atividade da empresa. "
   "**Vendaval** cobre danos físicos causados por ventos fortes. "
   "**Fidelidade** cobre prejuízos com desvios praticados por empregados. Nenhuma delas repõe o faturamento perdido.",
   dif=2, tags=["seguros", "empresarial"], ref="03/17"),

TQ("CB", T_MOD,
   "Considere as afirmativas sobre o seguro de vida.\n\n"
   "I. Em regra, o segurado pode indicar livremente os beneficiários e substituí-los durante a vigência do contrato.\n"
   "II. É lícito contratar mais de um seguro de vida sobre a mesma pessoa, com a mesma ou com diferentes seguradoras.\n"
   "III. No seguro de vida em grupo, cada segurado deve contratar diretamente com a seguradora, sendo vedada a figura do estipulante.\n\n"
   "Está correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "II, apenas.", "II e III, apenas.", "I, II e III."],
   "**I – correta.** A indicação de beneficiários é livre e, em regra, pode ser alterada pelo segurado. "
   "**II – correta.** Como a vida não tem valor de mercado, o capital é livremente estipulado e são admitidos vários seguros sobre a mesma pessoa. "
   "**III – incorreta.** O seguro em grupo é contratado justamente por um **estipulante** (empresa, associação), que representa o grupo. "
   "Por isso, só I e II estão corretas.",
   dif=3, tags=["seguros", "seguro-de-vida"], ref="03/17"),

# ---------------------------------------------------------------- Previdência aberta (10)
TQ("CB", T_PREV,
   "Luciana contribui para o INSS, faz a declaração completa do Imposto de Renda e teve, no ano, renda bruta tributável de R$ 150.000,00. Para aproveitar ao máximo o benefício fiscal, ela pretende aplicar em PGBL. O valor máximo de contribuições ao PGBL que ela poderá deduzir da base de cálculo do IR nesse ano é",
   "R$ 18.000,00.",
   ["R$ 15.000,00.", "R$ 30.000,00.", "R$ 12.000,00.", "R$ 150.000,00, sem limite."],
   "As contribuições ao **PGBL** podem ser deduzidas até **12% da renda bruta tributável** anual, desde que o contribuinte use a **declaração completa** e contribua para o regime geral (INSS) ou para regime próprio. Assim, 12% × 150.000 = **R$ 18.000,00**. "
   "R$ 15.000,00 corresponde a 10%; R$ 30.000,00, a 20%; R$ 12.000,00 confunde o percentual com um valor fixo. "
   "Não existe dedução ilimitada.",
   dif=2, tags=["previdencia", "pgbl", "ir", "calculo"], ref="03/17",
   ver=("print(int(150000 * 12 / 100))", "18000")),

TQ("CB", T_PREV,
   "Um cliente vai resgatar R$ 100.000,00 de um plano de previdência complementar, valor formado por R$ 70.000,00 de contribuições e R$ 30.000,00 de rendimentos. A base de cálculo do Imposto de Renda no resgate será de",
   "R$ 100.000,00 se o plano for PGBL, e de R$ 30.000,00 se for VGBL.",
   ["R$ 30.000,00 se o plano for PGBL, e de R$ 100.000,00 se for VGBL.",
    "R$ 30.000,00 em ambos os planos, pois só os rendimentos são tributados.",
    "R$ 100.000,00 em ambos os planos, pois todo resgate é tributado integralmente.",
    "zero em ambos, porque a previdência complementar é isenta de IR."],
   "No **PGBL**, as contribuições foram deduzidas da base do IR ao longo dos anos; por isso, no resgate ou no benefício, o imposto incide sobre o **valor total** (contribuições + rendimentos). No **VGBL**, não houve dedução, e o IR incide **somente sobre os rendimentos**. "
   "A primeira errada inverte os planos. As duas seguintes ignoram a diferença entre eles. "
   "Previdência complementar não é isenta: há IR no resgate e no recebimento da renda.",
   dif=2, tags=["previdencia", "pgbl", "vgbl", "ir"], ref="03/17"),

TQ("CB", T_PREV,
   "Um participante optou pela tabela regressiva de Imposto de Renda em seu plano de previdência. Ao resgatar recursos aportados há 5 anos e meio, a alíquota de IR aplicável a esses recursos será de",
   "25%.",
   ["35%.", "30%.", "20%.", "15%."],
   "Na **tabela regressiva** da previdência complementar, a alíquota cai conforme o tempo de permanência de cada aporte: **35%** até 2 anos; **30%** de 2 a 4 anos; **25%** de 4 a 6 anos; **20%** de 6 a 8 anos; **15%** de 8 a 10 anos; e **10%** acima de 10 anos. "
   "Com 5 anos e meio, o aporte está na faixa de 4 a 6 anos: **25%**. "
   "35% e 30% valem para prazos menores; 20% e 15%, para prazos maiores.",
   dif=2, tags=["previdencia", "tabela-regressiva"], ref="03/17"),

TQ("CB", T_PREV,
   "Considere as afirmativas sobre a tributação da previdência complementar aberta.\n\n"
   "I. Na tabela regressiva, a tributação é definitiva e a alíquota diminui conforme o prazo de permanência de cada contribuição no plano.\n"
   "II. Na tabela progressiva, há retenção na fonte e o imposto pode ser ajustado na declaração anual, conforme a renda total do contribuinte.\n"
   "III. Desde a Lei nº 14.803/2024, o participante pode escolher o regime de tributação até o momento do primeiro resgate ou da obtenção do benefício.\n\n"
   "Está correto o que se afirma em",
   "I, II e III.",
   ["I, apenas.", "I e II, apenas.", "II e III, apenas.", "III, apenas."],
   "**I – correta.** A regressiva é exclusiva na fonte (definitiva), com alíquotas de 35% a 10% conforme o tempo de cada aporte. "
   "**II – correta.** Na progressiva, o IR retido é antecipação e entra no ajuste anual, segundo a tabela mensal/anual comum do IR. "
   "**III – correta.** A Lei 14.803/2024 permitiu adiar a escolha do regime para o momento do primeiro resgate ou da concessão do benefício (antes, a escolha era feita no ingresso no plano). "
   "Como as três estão corretas, as demais combinações estão erradas.",
   dif=3, tags=["previdencia", "tributacao"], ref="03/17"),

TQ("CB", T_PREV,
   "Nos planos de previdência complementar aberta, o período em que o participante faz contribuições e os recursos são aplicados para formar a reserva, e o período em que ele passa a receber a renda contratada, denominam-se, respectivamente,",
   "fase de acumulação (ou diferimento) e fase de benefício (ou de concessão).",
   ["fase de carência e fase de resgate.", "fase de benefício e fase de acumulação.",
    "período de vigência e período de sinistro.", "fase de portabilidade e fase de amortização."],
   "Na **fase de acumulação** (diferimento), o participante contribui e a reserva rende; na **fase de benefício** (concessão), ele recebe a renda (vitalícia, temporária etc.) ou um pagamento único. "
   "**Carência** é o prazo em que não se pode resgatar ou portar, e o resgate pode ocorrer ainda na acumulação. "
   "A terceira opção inverte as fases. "
   "“Vigência” e “sinistro” são termos de seguros de danos. "
   "**Portabilidade** é a transferência da reserva entre planos, e não uma fase.",
   dif=1, tags=["previdencia"], ref="03/17"),

TQ("CB", T_PREV,
   "Insatisfeito com as taxas de seu PGBL, um cliente quer transferir a reserva acumulada para um PGBL de outra entidade aberta. Sobre essa portabilidade, é correto afirmar que",
   "os recursos passam diretamente entre as entidades, sem trânsito pela conta do cliente e sem IR.",
   ["o cliente deve primeiro resgatar o saldo, pagar o IR e depois aplicar o valor líquido no novo plano.",
    "ela só é permitida para planos da mesma entidade, nunca para outra empresa.",
    "ela só pode ser feita na fase de benefício, após o início do recebimento da renda.",
    "ela gera cobrança de IOF de 6% sobre o valor transferido."],
   "Na **portabilidade**, a reserva sai de um plano para outro **diretamente entre as entidades**, sem trânsito pela conta do participante; por não ser resgate, **não há IR** naquele momento, e o tempo de aplicação continua contando conforme as regras do regime escolhido. "
   "Resgatar e reaplicar seria um resgate tributado, e não portabilidade. "
   "É possível portar para outra entidade, não só dentro da mesma. "
   "A portabilidade é feita na fase de **acumulação**. "
   "Não há IOF de 6% nessa operação.",
   dif=2, tags=["previdencia", "portabilidade"], ref="03/17"),

TQ("CB", T_PREV,
   "Sobre as entidades de previdência complementar, é correto afirmar que",
   "as abertas atendem qualquer pessoa e são supervisionadas pela Susep; as fechadas, pela Previc.",
   ["as abertas são acessíveis apenas a empregados de uma empresa patrocinadora e são supervisionadas pela Previc.",
    "as fechadas são sociedades anônimas com fins lucrativos supervisionadas pelo Banco Central.",
    "abertas e fechadas são fiscalizadas pela CVM, pois aplicam recursos no mercado de capitais.",
    "as fechadas podem vender planos PGBL e VGBL nas agências bancárias a qualquer interessado."],
   "As **entidades abertas** (EAPC) — sociedades anônimas, ou seguradoras autorizadas a operar planos de previdência — vendem planos a qualquer pessoa, seguem normas do **CNSP** e são supervisionadas pela **Susep**. As **fechadas** (EFPC, fundos de pensão) não têm fins lucrativos, só atendem empregados de **patrocinadores** ou associados de **instituidores**, seguem normas do **CNPC** e são supervisionadas pela **Previc**. "
   "A primeira errada atribui às abertas características das fechadas. "
   "As fechadas não têm fins lucrativos e não são supervisionadas pelo BC. "
   "A CVM não fiscaliza essas entidades. "
   "PGBL e VGBL são produtos de entidades abertas e seguradoras, não de fundos de pensão.",
   dif=2, tags=["previdencia", "susep", "previc"], ref="03/17"),

TQ("CB", T_PREV,
   "Um cliente que faz declaração completa do IR já aplica, todo ano, o equivalente a 12% de sua renda bruta tributável em PGBL e deseja investir mais em previdência complementar. Para o valor adicional, a orientação mais adequada é o",
   "VGBL, pois o excedente não seria dedutível no PGBL, e no VGBL o IR incide só sobre os rendimentos.",
   ["PGBL, porque não há limite de dedução para quem já contribui ao INSS.",
    "PGBL, porque no resgate o IR incidiria apenas sobre os rendimentos.",
    "VGBL, porque esse plano é isento de IR no resgate.",
    "VGBL, porque suas contribuições podem ser deduzidas além do limite de 12%."],
   "Acima do limite de **12%**, contribuições ao PGBL não são dedutíveis; mesmo assim, seriam tributadas sobre o total no resgate. Por isso, para o excedente, o **VGBL** é mais vantajoso: não há dedução, mas o IR incide **só sobre os rendimentos**. "
   "Existe o limite de 12%, mesmo para quem contribui ao INSS. "
   "No PGBL, o IR incide sobre o valor total, não só sobre os rendimentos. "
   "O VGBL não é isento: os rendimentos são tributados. "
   "Contribuições ao VGBL não são dedutíveis.",
   dif=2, tags=["previdencia", "vgbl", "pgbl"], ref="03/17"),

TQ("CB", T_PREV,
   "A respeito do funcionamento dos planos PGBL e VGBL na fase de acumulação, é correto afirmar que",
   "os recursos são aplicados em fundos especialmente constituídos (FIE), sem a incidência de come-cotas.",
   ["há come-cotas em maio e novembro, como nos fundos de investimento comuns.",
    "a taxa de carregamento, quando cobrada, incide somente sobre os rendimentos obtidos.",
    "as reservas contam com a garantia do Fundo Garantidor de Créditos (FGC).",
    "a entidade pode usar livremente as reservas dos participantes para pagar suas próprias despesas."],
   "As reservas de PGBL e VGBL são aplicadas em **FIEs** (fundos exclusivos desses planos) e **não sofrem come-cotas**; o IR só incide no resgate ou no recebimento da renda, o que favorece o longo prazo. "
   "O come-cotas é próprio dos fundos de investimento comuns. "
   "A **taxa de carregamento** incide sobre as contribuições (ou sobre o resgate/portabilidade, conforme o plano), e não sobre os rendimentos. "
   "Previdência **não tem garantia do FGC**. "
   "As reservas pertencem aos participantes e são vinculadas aos planos, e a entidade não pode dispor delas livremente.",
   dif=3, tags=["previdencia", "fie"], ref="03/17"),

TQ("CB", T_PREV,
   "Ao planejar a fase de benefício de seu plano de previdência, um cliente quer receber uma renda mensal enquanto viver e, se falecer antes da esposa, que ela continue recebendo a renda até o fim da vida dela. A modalidade de renda que atende a esse objetivo é a",
   "renda vitalícia reversível ao cônjuge (ou beneficiário indicado).",
   ["renda temporária.", "renda por prazo certo.", "pagamento único do saldo acumulado.", "renda vitalícia simples, sem reversão."],
   "Na **renda vitalícia reversível**, o participante recebe enquanto viver e, após sua morte, a renda (total ou em percentual contratado) passa ao beneficiário indicado, como o cônjuge, também de forma vitalícia. "
   "A **renda temporária** é paga por prazo determinado, enquanto o participante estiver vivo. "
   "A **renda por prazo certo** é paga por prazo fixado, independentemente de sobrevivência, e não por toda a vida. "
   "O **pagamento único** encerra o plano. "
   "A **vitalícia simples** cessa com a morte do participante, sem nada à esposa.",
   dif=2, tags=["previdencia", "renda"], ref="03/17"),

# ---------------------------------------------------------------- Capitalização (6)
TQ("CB", T_CAP,
   "Um cliente pergunta ao atendente se um título de capitalização é “um bom investimento”. A resposta correta, alinhada às regras de transparência, é a de que o título de capitalização",
   "une reserva resgatável e participação em sorteios, e não deve ser apresentado como investimento.",
   ["é um investimento de renda fixa garantido pelo FGC, com rentabilidade superior à da poupança.",
    "é um seguro de vida, que paga indenização aos beneficiários em caso de morte do titular.",
    "garante sempre o resgate de valor superior ao total pago, em qualquer momento.",
    "é um valor mobiliário fiscalizado pela CVM e negociado na B3."],
   "O **título de capitalização** é um produto em que parte do pagamento forma uma **provisão para resgate** e parte custeia **sorteios** e despesas; seu atrativo é a chance de premiação ou uma finalidade específica (garantia, filantropia), e não a rentabilidade. Por isso, não deve ser vendido como investimento. "
   "Não tem garantia do FGC e costuma render menos que alternativas de renda fixa. "
   "Não é seguro de vida. "
   "Resgates antecipados podem devolver **menos** do que foi pago. "
   "É regulado pelo CNSP e fiscalizado pela **Susep**, e não pela CVM.",
   dif=1, tags=["capitalizacao"], ref="03/17"),

TQ("CB", T_CAP,
   "Para alugar um apartamento sem apresentar fiador, Carla adquiriu um título de capitalização cujo direito de resgate fica vinculado ao contrato de locação como garantia ao proprietário. A modalidade utilizada é a de",
   "instrumento de garantia.",
   ["filantropia premiável.", "compra programada.", "incentivo.", "tradicional."],
   "Na modalidade **instrumento de garantia**, o título serve para garantir uma obrigação, como a locação, em substituição a fiador ou caução. "
   "Na **filantropia premiável**, o direito de resgate é cedido a uma entidade beneficente. "
   "Na **compra programada**, o objetivo é acumular recursos para adquirir um bem ou serviço. "
   "Na de **incentivo**, o título está vinculado a uma promoção comercial. "
   "A **tradicional** visa formar reserva com direito a sorteios, sem a função de garantia.",
   dif=2, tags=["capitalizacao", "modalidades"], ref="03/17"),

TQ("CB", T_CAP,
   "Na modalidade de capitalização em que o titular cede o direito ao resgate a uma entidade beneficente, mas continua concorrendo aos sorteios, tem-se a",
   "filantropia premiável.",
   ["capitalização tradicional.", "compra programada.", "capitalização de incentivo.", "modalidade instrumento de garantia."],
   "Na **filantropia premiável**, o valor que seria resgatado é revertido a uma **entidade beneficente**, e o titular participa dos sorteios. "
   "Na **tradicional**, o próprio titular tem direito ao resgate ao final. "
   "A **compra programada** visa à aquisição de bens ou serviços. "
   "A de **incentivo** está ligada a promoções comerciais de empresas. "
   "O **instrumento de garantia** garante obrigações, como locações.",
   dif=2, tags=["capitalizacao", "modalidades"], ref="03/17"),

TQ("CB", T_CAP,
   "Uma rede de lojas adquire títulos de capitalização e cede aos clientes que fazem compras acima de certo valor o direito de participar dos sorteios, como forma de promover suas vendas. Essa é a modalidade",
   "incentivo.",
   ["filantropia premiável.", "instrumento de garantia.", "compra programada.", "tradicional."],
   "Na modalidade **incentivo**, o título é vinculado a um evento promocional: a empresa promotora o adquire e cede ao consumidor o direito ao sorteio, para estimular vendas ou a fidelização. "
   "Na **filantropia premiável**, o resgate é cedido a entidade beneficente. "
   "O **instrumento de garantia** serve para garantir obrigações. "
   "A **compra programada** visa à aquisição planejada de bens. "
   "A **tradicional** é adquirida pelo próprio titular para formar reserva e concorrer a sorteios.",
   dif=2, tags=["capitalizacao", "modalidades"], ref="03/17"),

TQ("CB", T_CAP,
   "Um cliente adquiriu um título de capitalização com prazo de carência de 12 meses e, no 3º mês, quer resgatar o valor pago. Sobre a situação, é correto afirmar que",
   "durante a carência não há resgate, e o resgate antecipado pode devolver menos do que foi pago.",
   ["o resgate é permitido a qualquer tempo, sempre pelo valor integral pago, corrigido pela inflação.",
    "a carência refere-se apenas ao prazo para o primeiro sorteio, sem efeito sobre o resgate.",
    "o cliente pode resgatar, mas perde o direito de reclamar à Susep.",
    "o resgate é garantido pelo FGC, que paga o valor ao cliente na data do pedido."],
   "**Carência** é o período em que o titular **não pode resgatar** o título. Além disso, o resgate antes do fim da vigência costuma devolver **menos** do que foi pago, pois parte das parcelas custeia sorteios e despesas (carregamento). "
   "Não há resgate integral e corrigido a qualquer tempo. "
   "A carência diz respeito ao resgate, e não ao primeiro sorteio. "
   "Resgatar não retira o direito de reclamar à Susep, supervisora do produto. "
   "Capitalização não tem cobertura do FGC.",
   dif=2, tags=["capitalizacao", "carencia"], ref="03/17"),

TQ("CB", T_CAP,
   "Considere as afirmativas sobre a composição dos pagamentos de um título de capitalização.\n\n"
   "I. A cota de capitalização é a parte destinada a formar a provisão que garante o valor de resgate.\n"
   "II. A cota de sorteio é a parte destinada a custear os prêmios sorteados.\n"
   "III. A cota de carregamento é a parte destinada a remunerar o titular com juros acima da poupança.\n\n"
   "Está correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "II, apenas.", "II e III, apenas.", "I, II e III."],
   "O pagamento de um título divide-se em **cota de capitalização** (forma a provisão matemática para resgate), **cota de sorteio** (custeia os prêmios) e **cota de carregamento** (cobre despesas administrativas, de comercialização e o resultado da sociedade de capitalização). "
   "**I e II** estão corretas. "
   "**III** está errada: o carregamento cobre custos, e não remunera o titular; é justamente uma das razões pelas quais capitalização não é investimento.",
   dif=3, tags=["capitalizacao"], ref="03/17"),

# ---------------------------------------------------------------- Consórcio (7)
TQ("CB", T_CONS,
   "Sobre o consórcio, regido pela Lei nº 11.795/2008, é correto afirmar que",
   "é um autofinanciamento em grupo, sem juros, e a administradora é remunerada pela taxa de administração.",
   ["é uma modalidade de financiamento bancário em que o consorciado paga juros remuneratórios à administradora.",
    "garante a todos os consorciados o recebimento do bem logo na primeira assembleia.",
    "é um investimento de renda fixa com garantia do FGC.",
    "é uma espécie de seguro, regulada pelo CNSP e fiscalizada pela Susep."],
   "O **consórcio** é a reunião de pessoas naturais e jurídicas em **grupo**, com prazo e número de cotas previamente fixados, promovida por uma **administradora**, para a aquisição isonômica de bens ou serviços por **autofinanciamento**. Não há juros; a administradora cobra **taxa de administração**. "
   "Não é financiamento com juros. "
   "A contemplação ocorre ao longo do grupo, por sorteio ou lance, e não para todos de imediato. "
   "Não é investimento nem tem FGC. "
   "Não é seguro: é supervisionado pelo **Banco Central**.",
   dif=1, tags=["consorcio"]),

TQ("CB", T_CONS,
   "O órgão responsável por autorizar o funcionamento e fiscalizar as administradoras de consórcio no Brasil é o(a)",
   "Banco Central do Brasil.",
   ["Superintendência de Seguros Privados (Susep).", "Comissão de Valores Mobiliários (CVM).",
    "Superintendência Nacional de Previdência Complementar (Previc).", "Conselho Nacional de Seguros Privados (CNSP)."],
   "Pela Lei 11.795/2008, compete ao **Banco Central** normatizar, autorizar, coordenar, supervisionar e fiscalizar as atividades do sistema de consórcios. "
   "A **Susep** supervisiona seguros, capitalização, previdência aberta e resseguro. "
   "A **CVM** cuida do mercado de valores mobiliários. "
   "A **Previc** supervisiona os fundos de pensão. "
   "O **CNSP** é o órgão normativo dos seguros privados, não do consórcio.",
   dif=1, tags=["consorcio", "bacen"], ref="03/4"),

TQ("CB", T_CONS,
   "Em um grupo de consórcio de veículos, Júlio quer ser contemplado antes de ser sorteado. Para isso, ele oferece antecipar o pagamento de parte das parcelas futuras na assembleia. Essa forma de contemplação denomina-se",
   "lance.",
   ["sorteio.", "portabilidade da cota.", "cessão do fundo de reserva.", "amortização compulsória."],
   "A contemplação, que dá ao consorciado o direito de usar o crédito, ocorre por **sorteio** ou por **lance**. No lance, o consorciado oferece antecipar parcelas, e o lance vencedor segue as regras do contrato (em regra, o maior percentual ofertado). "
   "O **sorteio** independe de oferta do consorciado. "
   "Não existe “portabilidade da cota” como forma de contemplação; a cota pode ser transferida a terceiro, mas isso não contempla ninguém. "
   "O **fundo de reserva** é do grupo e não é cedido a consorciado. "
   "“Amortização compulsória” não é forma de contemplação.",
   dif=1, tags=["consorcio", "contemplacao"]),

TQ("CB", T_CONS,
   "Um consórcio de carta de crédito de R$ 60.000,00 tem prazo de 60 meses, taxa de administração total de 15% e fundo de reserva de 2%, ambos calculados sobre o valor do crédito. Desconsiderando seguros e reajustes, o valor de cada parcela mensal é de",
   "R$ 1.170,00.",
   ["R$ 1.000,00.", "R$ 1.150,00.", "R$ 1.020,00.", "R$ 1.320,00."],
   "Soma-se ao crédito a taxa de administração e o fundo de reserva: 60.000 × (1 + 0,15 + 0,02) = 70.200. Dividindo por 60 meses: **R$ 1.170,00**. "
   "R$ 1.000,00 considera só o fundo comum (60.000 ÷ 60), sem custos. "
   "R$ 1.150,00 inclui apenas a taxa de administração. "
   "R$ 1.020,00 inclui apenas o fundo de reserva. "
   "R$ 1.320,00 decorre de erro de cálculo (como somar 32% em vez de 17%).",
   dif=2, tags=["consorcio", "calculo"],
   ver=("print(round(60000 * (1 + 0.15 + 0.02) / 60, 2))", "1170.0")),

TQ("CB", T_CONS,
   "Um cliente teme perder o dinheiro pago ao consórcio caso a administradora enfrente dificuldades financeiras. Conforme a Lei nº 11.795/2008, é correto informar que",
   "o grupo de consórcio é autônomo e tem patrimônio próprio, que não se confunde com o da administradora e não responde por obrigações dela.",
   ["os recursos do grupo integram o patrimônio da administradora e podem ser usados para pagar suas dívidas.",
    "os valores pagos são integralmente garantidos pelo FGC.",
    "a administradora pode aplicar os recursos do grupo em seu próprio capital de giro.",
    "o grupo é uma sociedade anônima cujos acionistas são os consorciados."],
   "A lei estabelece que o **grupo de consórcio** é **autônomo** em relação aos demais grupos e tem **patrimônio próprio**, distinto do da administradora, e os recursos não respondem por obrigações dela. Os bens e direitos do grupo constituem patrimônio separado. "
   "Por isso, é errado dizer que integram o patrimônio da administradora ou que podem financiar seu capital de giro. "
   "Consórcio **não tem FGC**. "
   "O grupo é sociedade **não personificada**, e não S.A.",
   dif=2, tags=["consorcio"]),

TQ("CB", T_CONS,
   "Uma consorciada não contemplada deixou de pagar as parcelas e foi excluída do grupo. Pela Lei nº 11.795/2008, a restituição dos valores que ela pagou ao fundo comum, observadas as deduções contratuais, ocorrerá",
   "quando sua cota for contemplada por sorteio, pois os excluídos concorrem aos sorteios para fins de restituição.",
   ["imediatamente, no dia útil seguinte ao pedido de exclusão, em valor integral corrigido.",
    "somente se ela conseguir um novo consorciado para assumir a cota.",
    "nunca, pois a desistência implica perda total dos valores pagos.",
    "por meio de lance, que a excluída deve oferecer em assembleia."],
   "Pela lei, o **consorciado excluído não contemplado** tem direito à restituição do que pagou ao fundo comum, e os excluídos **concorrem aos sorteios** para esse fim; contemplada a cota excluída, o valor é devolvido, com as deduções previstas (como multa contratual e taxa de administração). "
   "Não há devolução imediata e integral. "
   "Transferir a cota a terceiro é possível, mas não é condição para restituição. "
   "Perda total contrariaria a lei. "
   "O excluído não concorre por **lance**, apenas por sorteio.",
   dif=3, tags=["consorcio", "exclusao"]),

TQ("CB", T_CONS,
   "Considere as afirmativas sobre o consórcio.\n\n"
   "I. O fundo comum é formado pelas parcelas dos consorciados e é utilizado para pagar os créditos dos contemplados.\n"
   "II. O fundo de reserva, quando previsto no contrato, serve para proteger o grupo em situações como a insuficiência de recursos do fundo comum.\n"
   "III. A administradora deve pagar aos consorciados juros remuneratórios sobre as parcelas pagas, como ocorre em uma aplicação financeira.\n\n"
   "Está correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "II, apenas.", "I e III, apenas.", "I, II e III."],
   "**I – correta.** O **fundo comum** é a principal parcela da prestação e serve para atribuir os créditos aos contemplados. "
   "**II – correta.** O **fundo de reserva**, se previsto, protege o grupo (por exemplo, cobrindo insuficiência do fundo comum em razão de inadimplência). "
   "**III – incorreta.** Consórcio não é aplicação financeira e não paga juros remuneratórios aos consorciados. "
   "Logo, apenas I e II.",
   dif=2, tags=["consorcio"]),

# ---------------------------------------------------------------- Bancassurance (4)
TQ("CB", T_BANC,
   "O modelo de negócios em que um banco utiliza sua rede de agências, canais digitais e base de clientes para distribuir seguros, planos de previdência e títulos de capitalização, geralmente de empresas do mesmo conglomerado, é conhecido como",
   "bancassurance.",
   ["open finance.", "resseguro.", "mutualismo.", "securitização."],
   "**Bancassurance** é a integração entre atividade bancária e securitária: o banco aproveita sua capilaridade e o relacionamento com clientes para vender produtos de seguradoras, EAPCs e sociedades de capitalização. "
   "**Open finance** é o compartilhamento padronizado de dados e serviços entre instituições, com consentimento do cliente. "
   "**Resseguro** é a transferência de riscos da seguradora a um ressegurador. "
   "**Mutualismo** é o princípio técnico do seguro. "
   "**Securitização** é a conversão de recebíveis em títulos negociáveis.",
   dif=1, tags=["bancassurance"], ref="03/17"),

TQ("CB", T_BANC,
   "Ao aprovar um empréstimo, o gerente informa ao cliente que o crédito só será liberado se ele contratar o seguro prestamista da seguradora do próprio grupo do banco. Essa conduta",
   "caracteriza venda casada, vedada pelo CDC, pois o cliente é livre para contratar o seguro e escolher a seguradora.",
   ["é regular, pois o seguro prestamista protege o banco e por isso pode ser exigido da seguradora indicada por ele.",
    "é regular, desde que o prêmio do seguro seja inferior aos juros do empréstimo.",
    "caracteriza apenas infração ética, sem repercussão jurídica.",
    "é permitida quando o cliente for pessoa física de baixa renda."],
   "Condicionar o fornecimento de um produto (crédito) à aquisição de outro (seguro) é **venda casada**, prática abusiva vedada pelo **CDC**. O STJ firmou, em recurso repetitivo, que nos contratos bancários o consumidor **não pode ser compelido** a contratar seguro com a instituição financeira ou com seguradora por ela indicada. "
   "O fato de o seguro proteger o banco não autoriza a imposição. "
   "O valor do prêmio é irrelevante. "
   "Há, sim, repercussão jurídica (nulidade, devolução, sanções). "
   "A renda do cliente não torna a prática permitida, e consumidores vulneráveis merecem ainda mais proteção.",
   dif=2, tags=["bancassurance", "venda-casada"], ref="03/17"),

TQ("CB", T_BANC,
   "Entre as vantagens do bancassurance para os bancos e para as seguradoras, destaca-se",
   "a diversificação de receitas do banco e o acesso da seguradora a uma rede ampla e de baixo custo.",
   ["a eliminação da necessidade de supervisão da Susep sobre os seguros vendidos em agências.",
    "a possibilidade de o banco assumir diretamente os riscos dos seguros em seu balanço, dispensando a seguradora.",
    "a autorização para condicionar a abertura de conta à compra de um seguro.",
    "a dispensa da análise de adequação do produto ao perfil do cliente."],
   "No **bancassurance**, o banco diversifica receitas (comissões e resultados do grupo) e aumenta a **fidelização**, e a seguradora ganha uma rede de distribuição **capilar** e com custo menor de aquisição de clientes. "
   "A Susep continua supervisionando os produtos, qualquer que seja o canal de venda. "
   "O risco segurado é assumido pela **seguradora**, e não pelo banco. "
   "Condicionar abertura de conta a seguro é venda casada. "
   "A adequação ao perfil do cliente continua exigível.",
   dif=2, tags=["bancassurance"], ref="03/17"),

TQ("CB", T_BANC,
   "Um cliente de 62 anos, com perfil conservador e que precisará do dinheiro em seis meses para reformar a casa, procura a agência para aplicar suas economias. O gerente, pressionado por metas de previdência, sugere um VGBL com fundo de renda variável. À luz das boas práticas de comercialização em bancassurance, a conduta adequada seria",
   "avaliar a adequação ao perfil e ao prazo do cliente e oferecer alternativa compatível, com informação clara.",
   ["vender o VGBL, pois a meta comercial justifica a oferta, desde que o cliente assine o contrato.",
    "vender o VGBL e informar que o resgate em seis meses é isento de IR e livre de taxas.",
    "recusar qualquer atendimento ao cliente, por ser idoso.",
    "vender um título de capitalização como alternativa de investimento com rentabilidade garantida."],
   "Na venda de produtos financeiros e securitários, a instituição deve considerar **perfil, objetivos, prazo e situação financeira** do cliente e prestar informações claras (custos, riscos, carências, tributação). Para prazo curto e perfil conservador, um plano de previdência com renda variável é **inadequado**. "
   "Meta comercial não justifica vender produto inadequado, e a assinatura do cliente não supre a falta de orientação. "
   "Resgate de VGBL não é isento de IR, e pode haver taxas e carência. "
   "Recusar atendimento por idade seria discriminatório. "
   "Capitalização não é investimento e não tem rentabilidade garantida.",
   dif=2, tags=["bancassurance", "suitability"], ref="03/17"),

# ---------------------------------------------------------------- Regulação e supervisão (6)
TQ("CB", T_REG,
   "Uma cliente teve negado o pagamento de uma indenização de seguro residencial e, sem solução na seguradora e na ouvidoria, quer apresentar reclamação ao órgão federal que supervisiona as seguradoras. Ela deve procurar a",
   "Superintendência de Seguros Privados (Susep).",
   ["Comissão de Valores Mobiliários (CVM).", "Superintendência Nacional de Previdência Complementar (Previc).",
    "Agência Nacional de Saúde Suplementar (ANS).", "Conselho Monetário Nacional (CMN)."],
   "A **Susep** é a autarquia que fiscaliza seguradoras, sociedades de capitalização, entidades abertas de previdência complementar e resseguradores, recebendo inclusive reclamações de consumidores. "
   "A **CVM** supervisiona o mercado de valores mobiliários. "
   "A **Previc** fiscaliza fundos de pensão (previdência fechada). "
   "A **ANS** regula planos e seguros de saúde, não o seguro residencial. "
   "O **CMN** é órgão normativo do sistema financeiro, e não atende reclamações.",
   dif=1, tags=["regulacao", "susep"], ref="03/4"),

TQ("CB", T_REG,
   "Considere as afirmativas sobre os órgãos do Sistema Nacional de Seguros Privados e suas relações com o sistema financeiro.\n\n"
   "I. O Conselho Nacional de Seguros Privados (CNSP) é o órgão normativo que fixa as diretrizes e normas da política de seguros privados, capitalização e previdência complementar aberta.\n"
   "II. A Susep é autarquia que executa a política traçada pelo CNSP e fiscaliza as sociedades supervisionadas.\n"
   "III. As regras para a aplicação dos recursos garantidores das provisões técnicas de seguradoras, sociedades de capitalização e entidades abertas de previdência são estabelecidas pelo Conselho Monetário Nacional.\n\n"
   "Está correto o que se afirma em",
   "I, II e III.",
   ["I, apenas.", "I e II, apenas.", "II e III, apenas.", "II, apenas."],
   "**I – correta.** O **CNSP** é o órgão **normativo** dos seguros privados, da capitalização, da previdência aberta e do resseguro. "
   "**II – correta.** A **Susep** é a autarquia **executora e fiscalizadora**. "
   "**III – correta.** Como os recursos das provisões técnicas são aplicados no mercado financeiro, as diretrizes dessas aplicações são fixadas pelo **CMN**. "
   "Assim, as três estão corretas.",
   dif=3, tags=["regulacao", "cnsp", "cmn"], ref="03/2"),

TQ("CB", T_REG,
   "Os empregados de uma grande indústria participam do fundo de pensão patrocinado pela empresa. A normatização e a supervisão desse tipo de entidade cabem, respectivamente, ao",
   "Conselho Nacional de Previdência Complementar (CNPC) e à Superintendência Nacional de Previdência Complementar (Previc).",
   ["Conselho Nacional de Seguros Privados (CNSP) e à Superintendência de Seguros Privados (Susep).",
    "Conselho Monetário Nacional (CMN) e ao Banco Central do Brasil.",
    "Conselho Nacional de Previdência Complementar (CNPC) e à Susep.",
    "Conselho Monetário Nacional (CMN) e à Comissão de Valores Mobiliários (CVM)."],
   "Fundo de pensão é **entidade fechada** de previdência complementar (EFPC): o órgão normativo é o **CNPC** e a supervisão é da **Previc**. "
   "**CNSP/Susep** cuidam da previdência **aberta**, de seguros e da capitalização. "
   "**CMN/BC** cuidam das instituições financeiras e de pagamento. "
   "A combinação CNPC e Susep mistura os dois subsistemas. "
   "**CMN/CVM** remete ao mercado de valores mobiliários.",
   dif=2, tags=["regulacao", "previc", "cnpc"], ref="03/2"),

TQ("CB", T_REG,
   "Um cliente pergunta ao gerente qual órgão regula e fiscaliza o plano de saúde que ele pretende contratar, ofertado por uma seguradora especializada em saúde. A resposta correta é:",
   "a Agência Nacional de Saúde Suplementar (ANS).",
   ["a Superintendência de Seguros Privados (Susep).", "o Banco Central do Brasil.",
    "a Superintendência Nacional de Previdência Complementar (Previc).", "o Conselho Nacional de Seguros Privados (CNSP)."],
   "Planos privados de assistência à saúde, inclusive os oferecidos por **seguradoras especializadas em saúde**, são regulados e fiscalizados pela **ANS**. "
   "A **Susep** e o **CNSP** cuidam dos demais seguros privados, mas não da saúde suplementar. "
   "O **Banco Central** supervisiona instituições financeiras, de pagamento e consórcios. "
   "A **Previc** supervisiona fundos de pensão.",
   dif=2, tags=["regulacao", "ans"], ref="03/4"),

TQ("CB", T_REG,
   "Assinale a alternativa que relaciona corretamente o produto ao órgão responsável por sua supervisão.",
   "Consórcio — Banco Central do Brasil.",
   ["Título de capitalização — Banco Central do Brasil.", "Plano VGBL — Comissão de Valores Mobiliários.",
    "Fundo de pensão — Superintendência de Seguros Privados.", "Resseguro — Superintendência Nacional de Previdência Complementar."],
   "O **consórcio** é supervisionado pelo **Banco Central**. "
   "**Capitalização** é supervisionada pela **Susep**, e não pelo BC. "
   "O **VGBL** é seguro de pessoas com cobertura por sobrevivência, supervisionado pela **Susep**. "
   "**Fundo de pensão** é supervisionado pela **Previc**. "
   "**Resseguro** é supervisionado pela **Susep**.",
   dif=2, tags=["regulacao"], ref="03/4"),

TQ("CB", T_REG,
   "Sobre o Conselho Nacional de Seguros Privados (CNSP) e a Superintendência de Seguros Privados (Susep), é correto afirmar que",
   "o CNSP é órgão normativo colegiado, e a Susep é a autarquia que fiscaliza o mercado supervisionado.",
   ["a Susep é órgão normativo e o CNSP é a autarquia que fiscaliza as seguradoras.",
    "a Susep é um departamento do Banco Central, sem personalidade jurídica própria.",
    "o CNSP fixa a meta da taxa Selic para remunerar as provisões técnicas.",
    "a Susep fiscaliza as administradoras de consórcio e as instituições de pagamento."],
   "No Sistema Nacional de Seguros Privados, o **CNSP** é o órgão **normativo** (colegiado) e a **Susep** é a **autarquia** executora e **fiscalizadora**. "
   "A primeira errada inverte os papéis. "
   "A Susep tem personalidade jurídica própria e é vinculada ao Ministério da Fazenda, e não é departamento do BC. "
   "A meta da Selic é definida pelo **Copom**. "
   "Consórcios e instituições de pagamento são supervisionados pelo **Banco Central**.",
   dif=2, tags=["regulacao", "cnsp", "susep"], ref="03/2"),

# ---------------------------------------------------------------- Produtos bancários (8)
TQ("CB", T_PROD,
   "Um cliente mantém saldo em uma conta de pagamento pré-paga aberta em uma instituição de pagamento (IP) que não é banco. Sobre essa conta, é correto afirmar que",
   "os recursos não são depósitos, não têm FGC e devem ficar separados do patrimônio da IP.",
   ["os recursos são depósitos à vista, garantidos pelo FGC até R$ 250 mil.",
    "a IP pode emprestar livremente o saldo do cliente a outras pessoas, como faz um banco.",
    "a conta de pagamento é uma conta poupança, com rendimento mensal automático.",
    "por não ser banco, a IP não está sujeita à regulação do Banco Central."],
   "A **conta de pagamento** é mantida por **instituição de pagamento**; o saldo é **moeda eletrônica**, e não depósito, e por isso **não tem FGC**. Em contrapartida, os recursos dos usuários constituem patrimônio separado e devem ser aplicados conforme regras do BC (como títulos públicos ou depósito no próprio BC). "
   "Não são depósitos à vista. "
   "IP não faz intermediação financeira com o saldo dos clientes. "
   "Conta de pagamento não é poupança. "
   "IPs integram o SPB e são reguladas e supervisionadas pelo **Banco Central**.",
   dif=2, tags=["produtos", "conta-de-pagamento"], ref="03/6"),

TQ("CB", T_PROD,
   "Pelas normas do CMN sobre tarifas, a pessoa física titular de conta de depósitos à vista tem direito a um conjunto de serviços essenciais gratuitos. Entre eles, inclui-se",
   "o fornecimento de cartão de débito e a realização de até quatro saques por mês.",
   ["a emissão ilimitada de talões de cheque, independentemente do perfil do cliente.",
    "a concessão gratuita de limite de cheque especial e de cartão de crédito.",
    "um número ilimitado de saques e transferências mensais em qualquer canal.",
    "a isenção de juros nas operações de crédito pessoal contratadas na conta."],
   "Os **serviços essenciais** gratuitos da conta corrente de pessoa física incluem, entre outros, o fornecimento de **cartão de débito**, até **quatro saques** por mês, transferências entre contas na própria instituição em quantidade limitada, extratos mensais em número limitado e consultas pela internet; o fornecimento de folhas de cheque também é limitado e condicionado ao cliente reunir os requisitos para usar cheques. "
   "Talões ilimitados não estão entre os serviços gratuitos. "
   "Cheque especial e cartão de crédito são produtos de crédito, sujeitos a análise e encargos. "
   "Saques e transferências gratuitos são em número limitado. "
   "Isenção de tarifa não significa isenção de juros.",
   dif=2, tags=["produtos", "tarifas"], ref="03/6"),

TQ("CB", T_PROD,
   "Sobre o cheque especial, é correto afirmar que se trata de",
   "limite rotativo pré-aprovado na conta, com juros sobre o valor e o período efetivamente utilizados.",
   ["um empréstimo com parcelas fixas descontadas diretamente da folha de pagamento do cliente.",
    "uma modalidade de cheque garantido pelo FGC, sem cobrança de juros.",
    "um financiamento de longo prazo vinculado à aquisição de um bem, que fica alienado ao banco.",
    "uma linha de crédito que cobra juros sobre todo o limite disponível, mesmo que não utilizado."],
   "O **cheque especial** é crédito **rotativo** pré-aprovado: o cliente usa quando o saldo fica negativo e paga juros sobre o valor e os dias de utilização. Como é uma das linhas mais caras, deve ser usado só em emergências e por pouco tempo. "
   "Desconto em folha caracteriza o **consignado**. "
   "Não há relação com o FGC e há, sim, cobrança de juros. "
   "Financiamento de bem com alienação fiduciária é o **CDC** ou financiamento de veículos. "
   "Os juros incidem sobre o valor utilizado, e não sobre o limite total disponível.",
   dif=1, tags=["produtos", "credito"], ref="03/6"),

TQ("CB", T_PROD,
   "Considere as afirmativas sobre o crédito rotativo do cartão de crédito.\n\n"
   "I. Ao pagar valor inferior ao total da fatura, o saldo restante passa a ser financiado no crédito rotativo, sujeito a juros.\n"
   "II. O saldo financiado no rotativo não pode permanecer nessa modalidade indefinidamente, devendo a instituição oferecer ao cliente opção de parcelamento em condições mais vantajosas.\n"
   "III. Desde 2024, os juros e encargos do rotativo e do parcelamento da fatura não podem ultrapassar o valor original da dívida.\n\n"
   "Está correto o que se afirma em",
   "I, II e III.",
   ["I, apenas.", "I e II, apenas.", "I e III, apenas.", "II e III, apenas."],
   "**I – correta.** O pagamento parcial da fatura (acima do mínimo) leva o saldo para o **rotativo**. "
   "**II – correta.** Pelas normas do CMN, o saldo só pode ficar no rotativo até o vencimento da fatura seguinte; depois, a instituição deve oferecer **parcelamento** em condições mais vantajosas. "
   "**III – correta.** A Lei 14.690/2023 limitou, a partir de janeiro de 2024, o total de juros e encargos do rotativo e do parcelamento da fatura a **100% do valor original** da dívida. "
   "Por isso, todas estão corretas.",
   dif=3, tags=["produtos", "cartao", "rotativo"], ref="03/6"),

TQ("CB", T_PROD,
   "O crédito consignado costuma ter taxas de juros menores que as do crédito pessoal sem garantia porque",
   "as parcelas são descontadas na folha ou no benefício, o que reduz o risco de inadimplência.",
   ["o Banco Central subsidia integralmente os juros dessas operações de crédito.",
    "o tomador oferece um imóvel em hipoteca como garantia.",
    "o FGC garante o pagamento das parcelas em caso de desemprego do tomador.",
    "não há limite para o comprometimento da renda do tomador."],
   "No **consignado**, a parcela é **descontada na fonte** (salário, aposentadoria ou pensão), dentro de uma **margem consignável**, o que reduz muito o risco de crédito e permite juros menores. "
   "O BC não subsidia os juros. "
   "Não há hipoteca; o desconto em folha é a principal proteção do credor. "
   "O FGC protege depositantes e investidores em certos produtos, e não paga dívidas de tomadores. "
   "Existe limite de comprometimento da renda (a margem consignável).",
   dif=1, tags=["produtos", "consignado"], ref="03/6"),

TQ("CB", T_PROD,
   "Um produtor rural procura a agência para financiar a compra de um trator, que será usado por vários anos na propriedade. No crédito rural, essa operação enquadra-se na finalidade de",
   "investimento.",
   ["custeio.", "comercialização.", "industrialização.", "capital de giro de pessoa física."],
   "As finalidades do **crédito rural** são **custeio** (despesas normais de um ciclo produtivo, como sementes, adubos e defensivos), **investimento** (bens e serviços cujo uso se estende por vários ciclos, como máquinas, tratores e benfeitorias), **comercialização** (recursos para a fase de venda da produção) e **industrialização** (beneficiamento ou transformação da produção). "
   "O trator é bem durável: **investimento**. "
   "Custeio cobre insumos de um ciclo; comercialização e industrialização referem-se a fases posteriores à produção. "
   "“Capital de giro de pessoa física” não é finalidade do crédito rural.",
   dif=2, tags=["produtos", "credito-rural"], ref="03/6"),

TQ("CB", T_PROD,
   "Em um sábado à noite, um cliente precisa enviar dinheiro com urgência para a conta de um parente em outro banco, com crédito em poucos segundos. O meio de pagamento adequado é o",
   "Pix, que funciona 24 horas por dia, todos os dias, com liquidação em tempo real.",
   ["TED, que é processada em tempo real também aos fins de semana e feriados.",
    "boleto bancário, que é compensado instantaneamente.",
    "DOC, que é liquidado no mesmo dia, inclusive aos sábados.",
    "cheque nominal, que é compensado em até dez segundos."],
   "O **Pix** é o pagamento instantâneo do Banco Central: funciona **24 horas, 7 dias por semana**, e o dinheiro chega em segundos; para pessoas físicas, em regra, é gratuito. "
   "A **TED** só é processada em dias úteis e dentro da grade horária; feita no sábado, é agendada. "
   "O **boleto** é instrumento de cobrança, com compensação que não é instantânea. "
   "O **DOC** deixou de ser oferecido pelos bancos em 2024 e nunca foi liquidado aos sábados. "
   "O **cheque** depende de compensação, que leva pelo menos um dia útil.",
   dif=1, tags=["produtos", "pix", "meios-de-pagamento"], ref="03/8"),

TQ("CB", T_PROD,
   "Antes de contratar um crédito direto ao consumidor (CDC) para comprar um automóvel, o cliente deve ser informado do Custo Efetivo Total (CET) da operação. O CET",
   "expressa em taxa o custo total do crédito, incluindo juros, tarifas, tributos e seguros.",
   ["corresponde apenas à taxa de juros nominal do contrato, sem tarifas ou tributos.",
    "é o valor da parcela mensal, que deve ser igual em todos os bancos.",
    "só precisa ser informado após a assinatura do contrato, junto com o carnê.",
    "indica a rentabilidade que o cliente obteria se aplicasse o valor em CDB."],
   "O **CET** é a taxa que reúne **todos os encargos e despesas** da operação de crédito (juros, tarifas, IOF, seguros, registros etc.) e deve ser informado **antes da contratação**, permitindo ao cliente comparar ofertas de diferentes instituições. "
   "Não se limita à taxa de juros. "
   "Não é o valor da parcela, nem é uniforme entre bancos. "
   "Informá-lo só depois da assinatura frustraria sua finalidade comparativa. "
   "O CET mede custo de crédito, e não rentabilidade de aplicação.",
   dif=2, tags=["produtos", "cdc", "cet"], ref="03/6"),

# ---------------------------------------------------------------- Captação e intermediação (5)
TQ("CB", T_CAPT,
   "Para um banco comercial, os depósitos à vista representam uma fonte de recursos",
   "de baixo custo, pois em regra não são remunerados, embora sujeitos a recolhimento compulsório.",
   ["de alto custo, pois rendem juros diários iguais à taxa Selic ao correntista.",
    "de longo prazo, pois o depositante só pode sacá-los após um ano.",
    "isenta de qualquer regulação, por pertencer ao próprio banco.",
    "garantida pelo Tesouro Nacional, e não pelo FGC."],
   "Os **depósitos à vista** (saldos em conta corrente) não pagam remuneração ao cliente, sendo uma captação **barata** para o banco; por outro lado, estão sujeitos a **recolhimento compulsório** e podem ser sacados a qualquer momento. "
   "Não rendem Selic ao correntista. "
   "São de **curtíssimo prazo**, sacáveis a qualquer tempo. "
   "São regulados (compulsório, normas do CMN e BC) e pertencem aos depositantes, sendo passivo do banco. "
   "Contam com a garantia do **FGC**, nos limites legais, e não do Tesouro.",
   dif=1, tags=["captacao", "depositos"], ref="03/6"),

TQ("CB", T_CAPT,
   "Sobre o CDB e o RDB, títulos de captação a prazo emitidos por bancos, é correto afirmar que",
   "o CDB é transferível antes do vencimento e o RDB não, ambos com garantia do FGC.",
   ["o RDB pode ser negociado livremente na B3, enquanto o CDB é intransferível.",
    "nenhum dos dois tem garantia do FGC, por serem títulos de dívida privada.",
    "ambos são emitidos pelo Tesouro Nacional e têm risco soberano.",
    "são aplicações de renda variável, cuja rentabilidade depende do lucro do banco."],
   "**CDB** (Certificado de Depósito Bancário) e **RDB** (Recibo de Depósito Bancário) são **depósitos a prazo**. A diferença clássica é que o **CDB é transferível** (pode ser negociado antes do vencimento) e o **RDB não**. Ambos têm cobertura do **FGC**. "
   "A primeira errada inverte a característica. "
   "Ambos têm FGC. "
   "São emitidos por bancos, e não pelo Tesouro. "
   "São de **renda fixa** (pré ou pós-fixada), e não variável.",
   dif=1, tags=["captacao", "cdb", "rdb"], ref="03/6"),

TQ("CB", T_CAPT,
   "Sobre a Letra de Crédito Imobiliário (LCI) e a Letra de Crédito do Agronegócio (LCA), é correto afirmar que",
   "são lastreadas em créditos imobiliários e do agronegócio, respectivamente, e têm garantia do FGC.",
   ["são títulos públicos emitidos pelo Tesouro Nacional para financiar a habitação e a agricultura.",
    "são ações de empresas imobiliárias e agrícolas negociadas na B3.",
    "não contam com garantia do FGC por serem lastreadas em créditos.",
    "podem ser resgatadas a qualquer momento, sem prazo mínimo, como a poupança."],
   "**LCI** e **LCA** são títulos emitidos por instituições financeiras, **lastreados** em operações de crédito imobiliário e do agronegócio, respectivamente, e estão entre os produtos cobertos pelo **FGC**. "
   "Não são títulos públicos. "
   "São títulos de renda fixa, e não ações. "
   "O lastro não exclui a cobertura do FGC. "
   "Há prazos mínimos de carência fixados pelo CMN, diferentemente da poupança, que tem liquidez diária.",
   dif=2, tags=["captacao", "lci", "lca"], ref="03/6"),

TQ("CB", T_CAPT,
   "Na intermediação financeira, distinguem-se o mercado de crédito e o mercado de capitais. É correto afirmar que",
   "no crédito, o banco empresta em nome próprio e assume o risco; nos capitais, o investidor financia diretamente o emissor.",
   ["no mercado de capitais o banco assume o risco de crédito das empresas emissoras de ações, garantindo o retorno ao investidor.",
    "no mercado de crédito não há intermediação, pois poupador e tomador contratam diretamente entre si.",
    "os dois mercados são idênticos, diferenciando-se apenas pelo prazo das operações.",
    "o mercado de capitais é restrito a operações de curtíssimo prazo entre bancos."],
   "No **mercado de crédito**, o banco é intermediário **com risco próprio**: capta (depósitos, CDB) e empresta, ganhando o **spread**. No **mercado de capitais**, a relação é **direta** entre investidor e emissor (ações, debêntures), e a instituição atua como **prestadora de serviço** (estruturação, distribuição, custódia), sem garantir o retorno. "
   "O banco não garante o retorno de ações. "
   "No mercado de crédito há intermediação, e é justamente o que o define. "
   "A diferença não é só de prazo. "
   "Operações de curtíssimo prazo entre bancos caracterizam o **mercado monetário/interbancário**.",
   dif=2, tags=["intermediacao", "mercado-de-capitais"], ref="03/7"),

TQ("CB", T_CAPT,
   "A caderneta de poupança é uma das principais formas de captação dos bancos no Brasil. Uma característica relevante desses recursos é que",
   "parte relevante deve ser direcionada obrigatoriamente ao financiamento imobiliário.",
   ["podem ser aplicados livremente pelo banco em ações, sem qualquer direcionamento.",
    "não contam com garantia do FGC, por terem remuneração definida em lei.",
    "só podem ser captados pelo Tesouro Nacional.",
    "são integralmente repassados ao Banco Central, sem uso no crédito."],
   "Os depósitos de **poupança** têm **direcionamento obrigatório**: parcela relevante deve financiar operações **imobiliárias**, nos termos das normas do CMN (sistema SBPE), e outra parte é recolhida como compulsório. "
   "Não há aplicação livre em ações. "
   "A poupança **tem** cobertura do FGC. "
   "É captada por instituições financeiras autorizadas, e não pelo Tesouro. "
   "Apenas parte é recolhida ao BC; a maior parte financia crédito.",
   dif=2, tags=["captacao", "poupanca"], ref="03/6"),

# ---------------------------------------------------------------- Mercado financeiro e de capitais (5)
TQ("CB", T_MERC,
   "Um investidor adquiriu debêntures emitidas por uma companhia de energia. Nessa condição, ele passa a ser",
   "credor da companhia, com direito a juros e principal conforme a escritura.",
   ["sócio da companhia, com direito a voto nas assembleias.",
    "cotista de um fundo de investimento administrado pela companhia.",
    "depositante protegido pelo FGC até R$ 250 mil.",
    "titular de um título público federal com risco soberano."],
   "**Debênture** é **título de dívida** emitido por sociedade anônima: quem compra **empresta** à empresa e recebe juros e principal conforme a **escritura de emissão**. "
   "Sócio com direito a voto é o titular de **ações ordinárias**. "
   "Debênture não é cota de fundo. "
   "Debêntures **não** têm cobertura do FGC; o risco é o da empresa emissora. "
   "Título público federal é emitido pelo Tesouro Nacional.",
   dif=1, tags=["mercado-de-capitais", "debentures"], ref="03/6"),

TQ("CB", T_MERC,
   "Sobre o Tesouro Direto, é correto afirmar que",
   "oferece títulos públicos federais a pessoas físicas pela internet, com risco do Tesouro Nacional.",
   ["é um fundo de investimento administrado pelo Banco Central, garantido pelo FGC.",
    "negocia ações de empresas estatais federais em bolsa.",
    "só admite títulos prefixados, sem opções atreladas à Selic ou à inflação.",
    "é restrito a investidores qualificados, com aplicação mínima de R$ 1 milhão."],
   "O **Tesouro Direto** permite a pessoas físicas comprar **títulos públicos federais** (Tesouro Selic, Prefixado, IPCA+ etc.) pela internet, por meio de instituições habilitadas, com **custódia na B3**. O risco é o do **Tesouro Nacional** (risco soberano). "
   "Não é fundo nem tem FGC. "
   "Não negocia ações. "
   "Há títulos **pós-fixados** (Selic) e **híbridos** (IPCA+), além dos prefixados. "
   "É acessível ao público em geral, com valores mínimos baixos.",
   dif=2, tags=["mercado-de-capitais", "tesouro-direto"], ref="03/6"),

TQ("CB", T_MERC,
   "Uma empresa faz sua oferta pública inicial de ações (IPO) e, meses depois, essas ações passam a ser negociadas diariamente na bolsa entre investidores. Essas duas situações ocorrem, respectivamente, no",
   "mercado primário e no mercado secundário.",
   ["mercado secundário e no mercado primário.", "mercado de crédito e no mercado cambial.",
    "mercado monetário e no mercado primário.", "mercado de balcão e no mercado de crédito."],
   "No **mercado primário**, os títulos são vendidos pela primeira vez e os recursos vão para a **empresa emissora** (caso do IPO). No **mercado secundário**, os investidores negociam entre si títulos já emitidos, o que dá **liquidez**, sem novos recursos para a empresa. "
   "A primeira errada inverte os conceitos. "
   "Ações pertencem ao **mercado de capitais**, e não ao de crédito ou ao cambial. "
   "O **mercado monetário** trata de operações de curto prazo e liquidez. "
   "Balcão é um ambiente de negociação, e não se opõe ao primário nessa classificação.",
   dif=1, tags=["mercado-de-capitais", "ipo"], ref="03/4"),

TQ("CB", T_MERC,
   "Se o Banco Central eleva a alíquota do recolhimento compulsório sobre depósitos, o efeito esperado é",
   "a redução dos recursos disponíveis para empréstimos, contraindo o crédito.",
   ["o aumento dos recursos livres dos bancos, expandindo o crédito.",
    "a redução imediata da meta da taxa Selic.",
    "a elevação dos gastos públicos, por se tratar de instrumento de política fiscal.",
    "a garantia automática de todos os depósitos pelo FGC."],
   "O **compulsório** é a parcela dos depósitos que os bancos devem manter no Banco Central. Elevá-lo **retira recursos** que poderiam ser emprestados: é medida **contracionista** de política monetária. "
   "O efeito é o inverso de expandir o crédito. "
   "A meta Selic é decidida pelo **Copom** e não muda automaticamente com o compulsório. "
   "Compulsório é instrumento de política **monetária**, e não fiscal. "
   "Não tem relação com a garantia do FGC.",
   dif=2, tags=["mercado", "compulsorio"], ref="03/3"),

TQ("CB", T_MERC,
   "Um cliente pergunta a diferença entre fundo de investimento aberto e fechado. A resposta correta é que",
   "no aberto, o cotista pode pedir resgate; no fechado, sai em regra vendendo as cotas no mercado secundário.",
   ["no fechado, o resgate é diário; no aberto, só ocorre ao final do prazo de duração do fundo.",
    "o fundo fechado não pode ser negociado em bolsa, enquanto o aberto é negociado na B3.",
    "fundos abertos são garantidos pelo FGC e fundos fechados não.",
    "fundos fechados não são regulados pela CVM."],
   "No **fundo aberto**, as cotas podem ser emitidas e **resgatadas** conforme o regulamento. No **fundo fechado**, as cotas só são resgatadas ao fim do prazo (ou em situações previstas), e o investidor que quer sair antes **vende suas cotas** a outro investidor, muitas vezes em bolsa (como ocorre com muitos fundos imobiliários). "
   "A primeira errada inverte as características. "
   "É o fundo fechado que costuma ter cotas negociadas em bolsa. "
   "**Nenhum** fundo tem garantia do FGC. "
   "Ambos são regulados e supervisionados pela **CVM**.",
   dif=2, tags=["mercado-de-capitais", "fundos"], ref="03/6"),

# ---------------------------------------------------------------- Portabilidade (5)
TQ("CB", T_PORT,
   "Um cliente tem um empréstimo pessoal em um banco e recebeu de outra instituição proposta de juros menores para a mesma dívida. Ao usar a portabilidade de crédito,",
   "a nova instituição quita a dívida na original e o cliente passa a dever a ela, sem tarifa de portabilidade.",
   ["o cliente precisa quitar a dívida com recursos próprios antes de contratar na nova instituição.",
    "a instituição original pode cobrar tarifa de transferência de até 10% do saldo devedor.",
    "a portabilidade só é permitida para financiamentos imobiliários.",
    "a nova instituição empresta um valor maior que o saldo devedor, liberando a diferença ao cliente."],
   "Na **portabilidade de crédito**, a instituição proponente transfere os recursos diretamente à credora original, quitando a operação, e o cliente passa a ter a dívida com a nova instituição. A operação **não pode ter tarifa** cobrada do cliente pela portabilidade. "
   "O cliente não precisa ter os recursos para quitar antes. "
   "Não existe tarifa de 10%. "
   "A portabilidade vale para diversas modalidades (pessoal, consignado, veículos, imobiliário), e não só para o imobiliário. "
   "A nova operação não pode ter valor superior ao saldo devedor; liberar dinheiro novo seria refinanciamento, e não portabilidade.",
   dif=1, tags=["portabilidade", "credito"], ref="03/6"),

TQ("CB", T_PORT,
   "Considere as afirmativas sobre a portabilidade de crédito.\n\n"
   "I. O valor e o prazo da nova operação não podem ser superiores ao saldo devedor e ao prazo remanescente da operação original.\n"
   "II. A instituição credora original pode apresentar contraproposta ao cliente para tentar mantê-lo.\n"
   "III. A instituição original pode recusar a portabilidade se o cliente estiver adimplente há menos de um ano.\n\n"
   "Está correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "II, apenas.", "I e III, apenas.", "I, II e III."],
   "**I – correta.** Na portabilidade, a nova operação mantém o valor e não pode alongar o prazo além do remanescente; do contrário, seria refinanciamento. "
   "**II – correta.** A credora original pode fazer **contraproposta** para reter o cliente. "
   "**III – incorreta.** A portabilidade é um **direito** do cliente, e a instituição original não pode impedi-la por tempo de adimplência. "
   "Assim, apenas I e II.",
   dif=2, tags=["portabilidade", "credito"], ref="03/6"),

TQ("CB", T_PORT,
   "Um empregado recebe o salário em uma conta-salário aberta pelo empregador no Banco A, mas prefere movimentar seus recursos na conta corrente que mantém no Banco B. Por meio da portabilidade de salário,",
   "ele pode pedir a transferência automática e gratuita dos créditos para sua conta no Banco B.",
   ["ele deve pedir ao empregador que abra uma nova conta-salário no Banco B, com autorização do sindicato.",
    "o salário pode ser transferido para a conta de qualquer pessoa da família, mediante tarifa.",
    "a transferência só pode ser feita uma vez por ano, no mês de aniversário do trabalhador.",
    "o Banco A pode cobrar tarifa mensal pela transferência, por se tratar de serviço adicional."],
   "A **conta-salário** é aberta pelo empregador para pagar salários; o trabalhador pode pedir a **portabilidade**, para que os valores sejam transferidos automaticamente, **sem tarifa**, para outra conta **de sua titularidade**, em outra instituição. "
   "Não depende de nova conta-salário nem de autorização sindical. "
   "O destino deve ser conta do próprio titular. "
   "Não há a restrição de uma vez por ano. "
   "A transferência é gratuita.",
   dif=2, tags=["portabilidade", "salario"], ref="03/6"),

TQ("CB", T_PORT,
   "Uma cliente possui um PGBL e um VGBL em uma entidade aberta de previdência e deseja transferir as reservas para outra entidade. Sobre essa portabilidade, é correto afirmar que",
   "a reserva de PGBL vai para outro PGBL e a de VGBL para outro VGBL, sem mistura entre os dois tipos.",
   ["ela pode reunir as duas reservas em um único VGBL, pois ambos são planos de previdência.",
    "a portabilidade só é possível depois do início do recebimento da renda.",
    "a portabilidade entre entidades distintas é proibida, sendo permitida apenas a troca de fundo na mesma entidade.",
    "a portabilidade exige o resgate e o pagamento do IR antes da transferência."],
   "Na previdência aberta, a portabilidade ocorre **entre planos da mesma natureza** (PGBL para PGBL; VGBL para VGBL). Como o PGBL tem contribuições deduzidas e tributação sobre o total, e o VGBL tributa só os rendimentos, **não se misturam** as reservas. "
   "Por isso, não é possível juntar tudo em um VGBL. "
   "A portabilidade é feita na **fase de acumulação**. "
   "É permitida para outra entidade. "
   "Não há resgate nem IR na portabilidade.",
   dif=2, tags=["portabilidade", "previdencia"], ref="03/17"),

TQ("CB", T_PORT,
   "Na portabilidade de uma operação de crédito, a transferência dos recursos da instituição proponente para a instituição credora original é feita",
   "diretamente entre as instituições, por meio de transferência específica, sem que os recursos transitem pela conta do cliente.",
   ["por depósito na conta corrente do cliente, que deve repassá-los à credora original em até 30 dias.",
    "em espécie, entregue ao cliente no caixa da instituição proponente.",
    "por meio de boleto emitido pelo cliente em favor da instituição proponente.",
    "por cheque administrativo nominal ao cliente, endossável à credora original."],
   "Na **portabilidade de crédito**, a liquidação da operação original se dá por **transferência direta** entre as instituições (uma TED específica para portabilidade), **sem passar pela conta do cliente**. Isso evita desvio de finalidade e garante que a dívida original seja efetivamente quitada. "
   "Depósito na conta do cliente, entrega em espécie, boleto do cliente ou cheque nominal a ele fariam os recursos transitarem pelo cliente, o que descaracterizaria a portabilidade.",
   dif=3, tags=["portabilidade", "credito"], ref="03/6"),

# ---------------------------------------------------------------- Resolução CMN 4.966 (6)
TQ("CB", T_4966,
   "Pela Resolução CMN nº 4.966/2021, um banco que mantém uma carteira de empréstimos com o objetivo de receber os fluxos de caixa contratuais, os quais consistem somente em pagamentos de principal e juros, deve classificar esses ativos na categoria",
   "custo amortizado.",
   ["valor justo por meio do resultado (VJR).", "valor justo por meio de outros resultados abrangentes (VJORA).",
    "ativos mantidos para negociação.", "ativos com problema de recuperação de crédito."],
   "A 4.966 classifica os ativos financeiros conforme o **modelo de negócios** e as **características dos fluxos de caixa**. Se o objetivo é **manter para receber** os fluxos contratuais e estes são somente principal e juros, a categoria é **custo amortizado**. "
   "**VJORA** aplica-se quando o modelo é receber os fluxos **e também vender** os ativos. "
   "**VJR** é a categoria residual (por exemplo, ativos para negociação). "
   "“Mantidos para negociação” iriam para VJR, e não é o caso. "
   "“Ativo com problema de recuperação” não é categoria de mensuração, mas uma condição de risco de crédito (estágio 3).",
   dif=2, tags=["4966", "classificacao"], ref="03/17"),

TQ("CB", T_4966,
   "Na Resolução CMN nº 4.966/2021, os ativos financeiros classificados como valor justo por meio de outros resultados abrangentes (VJORA) têm as variações de valor justo reconhecidas",
   "no patrimônio líquido, em outros resultados abrangentes, até a baixa ou a venda do ativo.",
   ["diretamente no resultado do período, assim como ocorre com os ativos ao custo amortizado.",
    "apenas em notas explicativas, sem qualquer registro contábil.",
    "no passivo, como provisão para perdas esperadas.",
    "somente no momento da contratação, não sendo mais atualizadas depois."],
   "Em **VJORA**, as variações do valor justo vão para o **patrimônio líquido** (outros resultados abrangentes) e só passam ao resultado quando o ativo é baixado ou vendido. Em **VJR**, as variações afetam **diretamente o resultado**. "
   "Ativos ao **custo amortizado** não são remensurados a valor justo. "
   "Não se trata de mera nota explicativa. "
   "A provisão para perdas esperadas é outro mecanismo, e não o registro da variação do valor justo. "
   "O valor justo é atualizado periodicamente, e não só na contratação.",
   dif=3, tags=["4966", "vjora", "vjr"], ref="03/17"),

TQ("CB", T_4966,
   "A principal mudança trazida pela Resolução CMN nº 4.966/2021, em vigor desde 1º de janeiro de 2025, em relação à provisão para créditos de liquidação duvidosa da regra anterior, foi",
   "a adoção da perda esperada, prospectiva, no lugar da classificação AA a H baseada em perdas incorridas.",
   ["a eliminação de qualquer provisão para perdas nas operações de crédito.",
    "a obrigação de provisionar somente após 360 dias de atraso do devedor.",
    "a transferência da supervisão das provisões dos bancos para a Susep.",
    "a proibição de concessão de crédito a clientes sem histórico bancário."],
   "A 4.966 alinhou a contabilidade bancária ao padrão internacional (IFRS 9), adotando a **perda esperada**: o banco provisiona com base em estimativas **prospectivas** do risco, e não apenas depois que a perda se manifesta. Ela substituiu, entre outras, a Resolução 2.682/1999, que classificava as operações de AA a H. "
   "A provisão não foi eliminada; ao contrário, passou a ser constituída desde o início. "
   "Não existe regra de provisionar só após 360 dias. "
   "A supervisão continua com o **Banco Central**. "
   "A norma não proíbe crédito a clientes sem histórico.",
   dif=1, tags=["4966", "perda-esperada"], ref="03/17"),

TQ("CB", T_4966,
   "Pela Resolução CMN nº 4.966/2021, um empréstimo que, desde a concessão, apresentou aumento significativo do risco de crédito, mas ainda não é ativo com problema de recuperação, deve ser alocado no",
   "segundo estágio, com provisão pela perda esperada para toda a vida do instrumento.",
   ["primeiro estágio, com provisão para perda esperada de 12 meses.",
    "terceiro estágio, com baixa imediata do ativo a prejuízo.",
    "segundo estágio, sem necessidade de qualquer provisão.",
    "primeiro estágio, com provisão para toda a vida do instrumento, desde que o atraso seja inferior a 90 dias."],
   "Na lógica dos **três estágios**: o **1º** abrange ativos sem aumento significativo de risco (perda esperada de **12 meses**); o **2º**, ativos com **aumento significativo** do risco desde o reconhecimento inicial (perda esperada para **toda a vida**); o **3º**, ativos com **problema de recuperação** de crédito. Atraso **superior a 30 dias** é indicativo de aumento significativo de risco. "
   "O 1º estágio é para ativos sem aumento significativo. "
   "O 3º estágio é para ativos com problema de recuperação, e não implica baixa imediata. "
   "O 2º estágio exige provisão. "
   "Perda para toda a vida não caracteriza o 1º estágio.",
   dif=3, tags=["4966", "estagios"], ref="03/17"),

TQ("CB", T_4966,
   "Considere as afirmativas sobre o ativo com problema de recuperação de crédito, na Resolução CMN nº 4.966/2021.\n\n"
   "I. Um ativo com atraso superior a 90 dias é caracterizado como ativo com problema de recuperação de crédito.\n"
   "II. Indícios de que a obrigação não será integralmente honrada sem a execução de garantias, ou a reestruturação de dívida decorrente da deterioração do crédito, também podem caracterizar esse tipo de ativo.\n"
   "III. Enquanto o ativo estiver nessa condição, a instituição continua reconhecendo normalmente no resultado os juros contratuais ainda não recebidos.\n\n"
   "Está correto o que se afirma em",
   "I e II, apenas.",
   ["I, apenas.", "II, apenas.", "I e III, apenas.", "I, II e III."],
   "**I – correta.** Atraso superior a **90 dias** caracteriza o ativo com problema de recuperação (estágio 3). "
   "**II – correta.** Também o caracterizam indicativos de que a obrigação não será paga integralmente sem recorrer a garantias, assim como certas **reestruturações** por deterioração do crédito. "
   "**III – incorreta.** Para esses ativos vale o “**stop accrual**”: a instituição não reconhece no resultado receitas de juros ainda não recebidas. "
   "Portanto, I e II.",
   dif=3, tags=["4966", "estagio-3"], ref="03/17"),

TQ("CB", T_4966,
   "Um banco concede hoje um empréstimo a um cliente com excelente histórico, sem nenhum atraso. Sob a Resolução CMN nº 4.966/2021, em relação à provisão para perdas, é correto afirmar que o banco",
   "deve reconhecer provisão para perda esperada desde o início, no primeiro estágio.",
   ["está dispensado de provisionar até que ocorra o primeiro atraso.",
    "só deve provisionar se o cliente pedir renegociação.",
    "deve provisionar 100% do valor emprestado no primeiro dia.",
    "deve classificar o empréstimo no terceiro estágio até a primeira parcela ser paga."],
   "No modelo de **perda esperada**, a provisão existe desde o **reconhecimento inicial**: um crédito sem aumento de risco fica no **estágio 1**, com provisão correspondente à perda esperada para 12 meses, mesmo sem atraso. "
   "Esperar o atraso seria a lógica de perda **incorrida**, abandonada pela norma. "
   "Renegociação não é condição para provisionar. "
   "Provisão de 100% no primeiro dia não corresponde ao risco de um bom pagador. "
   "O 3º estágio é para ativos com problema de recuperação, não para créditos novos e adimplentes.",
   dif=2, tags=["4966", "estagio-1"], ref="03/17"),

# ---------------------------------------------------------------- Câmbio e garantias (4)
TQ("CB", T_GAR,
   "Sobre o aval e a fiança, garantias pessoais usuais em operações bancárias, é correto afirmar que",
   "o aval é garantia cambial dada no título, e a fiança é contratual, com benefício de ordem salvo renúncia.",
   ["o aval é dado em contrato separado e o fiador responde sempre solidariamente, sem benefício de ordem.",
    "aval e fiança são garantias reais, pois recaem sobre bens do garantidor.",
    "a fiança só pode ser prestada em notas promissórias e cheques.",
    "o avalista só pode ser cobrado depois de esgotados os bens do devedor principal."],
   "O **aval** é garantia **cambial**, lançada no próprio **título de crédito** (nota promissória, cédula de crédito bancário, cheque etc.); o avalista responde de forma autônoma, sem benefício de ordem. A **fiança** é garantia **contratual**: o fiador, em regra, tem **benefício de ordem** (pode exigir que primeiro se executem os bens do devedor), salvo se renunciar a ele, o que é comum nos contratos bancários. "
   "A primeira errada inverte as características. "
   "Ambas são garantias **pessoais** (fidejussórias), e não reais. "
   "Fiança não é instituto dos títulos de crédito. "
   "O avalista **não** tem benefício de ordem.",
   dif=2, tags=["garantias", "aval", "fianca"]),

TQ("CB", T_GAR,
   "Em um financiamento de veículo, o comprador fica com a posse e o uso do carro, mas a propriedade resolúvel do bem é transferida ao banco até a quitação da dívida. Essa garantia é a",
   "alienação fiduciária.",
   ["hipoteca.", "fiança.", "penhor comum.", "anticrese."],
   "Na **alienação fiduciária**, o devedor transfere ao credor a **propriedade resolúvel** do bem, mantendo a **posse direta**; quitada a dívida, a propriedade volta plena ao devedor. É a garantia típica de veículos e de muitos financiamentos imobiliários. "
   "A **hipoteca** recai sobre imóveis (e alguns bens, como navios e aeronaves), sem transferir a propriedade. "
   "A **fiança** é garantia pessoal. "
   "No **penhor comum**, o bem móvel é, em regra, entregue ao credor. "
   "Na **anticrese**, o credor recebe os frutos de um imóvel para se pagar.",
   dif=1, tags=["garantias", "alienacao-fiduciaria"]),

TQ("CB", T_GAR,
   "Uma cliente obtém um empréstimo entregando ao banco joias de ouro, que ficam guardadas na instituição até a quitação. Essa garantia real denomina-se",
   "penhor.",
   ["hipoteca.", "aval.", "alienação fiduciária de imóvel.", "caução de títulos públicos."],
   "O **penhor** é garantia real sobre **bem móvel**, com a entrega, em regra, da posse ao credor, como no penhor de joias. "
   "A **hipoteca** recai sobre imóveis, que ficam com o devedor. "
   "O **aval** é garantia pessoal em título de crédito. "
   "Joia não é imóvel, e na alienação fiduciária a posse direta fica com o devedor. "
   "Caução de títulos públicos usa títulos, e não joias.",
   dif=1, tags=["garantias", "penhor"]),

TQ("CB", T_GAR,
   "Uma cliente que vai viajar ao exterior compra dólares em espécie na agência de um banco autorizado a operar em câmbio. Sobre essa operação, é correto afirmar que",
   "o banco vende moeda estrangeira, com taxa livremente pactuada, observadas as regras do Banco Central.",
   ["o banco está comprando moeda estrangeira da cliente, em operação de exportação.",
    "a taxa de câmbio é fixada diariamente pelo Banco Central, e o banco não pode cobrar valor diferente.",
    "a operação é proibida para pessoas físicas, que só podem comprar moeda no exterior.",
    "qualquer estabelecimento comercial pode realizar a operação, sem autorização do Banco Central."],
   "Na perspectiva da instituição, quando o cliente compra moeda estrangeira, o banco **vende** câmbio. No Brasil, as taxas são **livremente pactuadas** entre as partes (regime flutuante), e as operações devem ser feitas com instituições **autorizadas pelo Banco Central**, conforme o marco legal do câmbio (Lei 14.286/2021) e a regulamentação do BC. "
   "Quem vende a moeda é o banco, e não há exportação. "
   "O BC não fixa a taxa de cada operação. "
   "Pessoas físicas podem comprar moeda estrangeira no País. "
   "Só instituições autorizadas podem operar câmbio.",
   dif=2, tags=["cambio"]),

# ---------------------------------------------------------------- Consumidor e educação financeira (4)
TQ("CB", T_CDC,
   "Um cliente afirma ao gerente que o Código de Defesa do Consumidor não se aplica aos bancos. De acordo com a Súmula 297 do Superior Tribunal de Justiça,",
   "o Código de Defesa do Consumidor é aplicável às instituições financeiras.",
   ["o CDC aplica-se apenas às cooperativas de crédito, e não aos bancos.",
    "o CDC não se aplica a operações de crédito, apenas a tarifas.",
    "as instituições financeiras submetem-se exclusivamente às normas do CMN, e não ao CDC.",
    "o CDC só se aplica aos bancos públicos."],
   "A **Súmula 297 do STJ** estabelece que “o Código de Defesa do Consumidor é aplicável às instituições financeiras”; o STF também reconheceu essa aplicação. "
   "Não há restrição às cooperativas nem só a tarifas. "
   "As normas do CMN e do BC convivem com o CDC, sem excluí-lo. "
   "Bancos públicos e privados estão igualmente sujeitos ao CDC.",
   dif=1, tags=["consumidor", "cdc"], ref="03/17"),

TQ("CB", T_CDC,
   "Nos termos da Lei nº 14.181/2021, que alterou o Código de Defesa do Consumidor, entende-se por superendividamento",
   "a impossibilidade manifesta de o consumidor pessoa natural, de boa-fé, pagar suas dívidas de consumo sem comprometer o mínimo existencial.",
   ["qualquer atraso superior a 90 dias em operação de crédito, independentemente da renda e da boa-fé do consumidor.",
    "a situação de empresas cujas dívidas superam o patrimônio líquido.",
    "o endividamento de consumidor que contraiu dívidas com o propósito de não pagá-las.",
    "a contratação, pelo consumidor, de mais de três empréstimos simultâneos em instituições diferentes."],
   "A lei define **superendividamento** como a **impossibilidade manifesta** de o consumidor **pessoa natural**, **de boa-fé**, pagar a totalidade de suas **dívidas de consumo** sem comprometer o **mínimo existencial**. "
   "Atraso de 90 dias, isoladamente, não caracteriza superendividamento. "
   "A proteção é para **pessoas naturais**, e não para empresas. "
   "Quem contrai dívidas com dolo de não pagar não está de boa-fé e fica fora da proteção. "
   "O número de empréstimos não é critério legal.",
   dif=2, tags=["consumidor", "superendividamento"], ref="03/17"),

TQ("CB", T_CDC,
   "Um consumidor superendividado pede a repactuação de suas dívidas em processo conciliatório com os credores, nos termos da Lei nº 14.181/2021. Entre as dívidas abaixo, pode ser incluída na repactuação a dívida decorrente de",
   "fatura de cartão de crédito e empréstimo pessoal sem garantia.",
   ["financiamento imobiliário.", "crédito rural.", "contrato de crédito com garantia real.",
    "contratação feita dolosamente, sem o propósito de pagar."],
   "A repactuação abrange **dívidas de consumo**, como cartão de crédito, empréstimo pessoal, crediário e contas de consumo. A lei **exclui** do processo de repactuação as dívidas oriundas de contratos com **garantia real**, de **financiamentos imobiliários** e de **crédito rural**, além das contraídas **dolosamente** sem o propósito de pagamento (sem boa-fé). "
   "Por isso, as quatro alternativas erradas trazem justamente hipóteses excluídas.",
   dif=3, tags=["consumidor", "superendividamento"], ref="03/17"),

TQ("CB", T_CDC,
   "Uma cliente tem R$ 5.000,00 aplicados na poupança e uma dívida de R$ 4.000,00 no rotativo do cartão de crédito. Do ponto de vista da educação financeira, a orientação mais adequada é",
   "quitar o rotativo com a poupança, pois os juros do cartão superam muito o rendimento, e depois refazer a reserva.",
   ["manter a dívida no rotativo e a aplicação na poupança, porque a poupança é isenta de IR.",
    "contratar um título de capitalização para concorrer a prêmios e quitar a dívida se for sorteada.",
    "pagar apenas o mínimo da fatura todo mês, para preservar a liquidez.",
    "resgatar a poupança e aplicar em renda variável, para tentar superar os juros do cartão."],
   "O **rotativo do cartão** tem juros muito mais altos que o rendimento da **poupança**: manter os dois significa pagar mais do que se ganha. O mais racional é **quitar a dívida cara** e, em seguida, reconstruir a **reserva de emergência**. "
   "A isenção de IR da poupança não compensa a diferença de taxas. "
   "Capitalização não é investimento e depender de sorteio não é planejamento. "
   "Pagar o mínimo prolonga a dívida e aumenta o custo total. "
   "Renda variável tem risco e não garante superar juros tão elevados.",
   dif=1, tags=["educacao-financeira"], ref="03/17"),
]
