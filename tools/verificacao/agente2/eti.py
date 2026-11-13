# -*- coding: utf-8 -*-
"""Ética, Compliance e ESG – variações e inéditas (agente 2).

Base: apostila 03 (revisão de nov/2026) §9 (lavagem), §10 (PLD nas instituições),
§11 (crimes contra o SFN, sigilo, LGPD), §12 (Guia de Conduta Ética do Banestes),
§17 (compliance, anticorrupção, ESG) e §21 (complemento 2027). Nenhum artigo de lei
foi criado: os dispositivos citados são os que a apostila transcreve ou resume.
"""
from base import Q

M = "ETI"


def V(sec):
    return "Conferido na apostila 03 §%s (revisão nov/2026)" % sec


# =====================================================================
# §9 Lavagem de dinheiro – pais ETI-0003, 0006, 0008, 0009, 0010, 0011, 0012, 0013
# =====================================================================
Q(M, "9", """Nos termos do art. 1º da Lei 9.613/1998, comete o crime de lavagem de dinheiro quem""",
  ("oculta ou dissimula a natureza, origem, localização, disposição, movimentação ou propriedade de bens, direitos ou valores provenientes, direta ou indiretamente, de infração penal.", "É o tipo do art. 1º, com pena de reclusão de 3 a 10 anos e multa."),
  [("deixa de recolher tributo devido sobre operações financeiras.", "Sonegação não é, por si, lavagem (pode ser crime antecedente)."),
   ("gere fraudulentamente instituição financeira.", "Crime contra o SFN (Lei 7.492/1986, art. 4º)."),
   ("utiliza informação privilegiada para negociar ações.", "Insider trading: crime da Lei 6.385/1976 (art. 27-D)."),
   ("faz operar instituição financeira sem autorização do Banco Central.", "Crime contra o SFN (Lei 7.492/1986, art. 16).")],
  pai="ETI-0003", dif=1, tags=["lavagem de dinheiro", "Lei 9.613/1998"], var="tipo penal da lavagem com distratores de outros crimes financeiros", verif=V("9"))

Q(M, "9", """Um traficante usa dinheiro em espécie para comprar joias e um veículo de luxo, pagando à vista, e mistura parte dos valores ao faturamento de um restaurante que lida com muito dinheiro vivo. Essas condutas são típicas da fase de""",
  ("colocação.", "Colocação (placement): introduzir o dinheiro ilícito na economia, por exemplo com compra de bens em espécie e mistura com negócios que lidam com dinheiro vivo."),
  [("ocultação.", "Ocultação: criar camadas de transações (transferências sucessivas, offshores) para dificultar o rastreamento."),
   ("integração.", "Integração: reincorporar os recursos à economia com aparência lícita (investimentos, empréstimos simulados)."),
   ("estratificação.", "Outro nome da ocultação (layering)."),
   ("compensação.", "Não é fase do modelo do GAFI.")],
  pai="ETI-0006", tags=["lavagem de dinheiro", "fases da lavagem"], var="outra técnica de colocação (compra de bens e mistura com faturamento)", verif=V("9"))

Q(M, "9", """Uma offshore controlada por um político "empresta" a ele o dinheiro que antes havia sido remetido ao exterior, e ele usa o valor, declarado como empréstimo, para comprar uma fazenda. Essa etapa corresponde à fase de""",
  ("integração.", "O \"empréstimo de regresso\" e a compra declarada do bem reincorporam os recursos à economia formal com aparência lícita."),
  [("colocação.", "Colocação é a entrada inicial do dinheiro ilícito no sistema."),
   ("ocultação.", "A remessa à offshore foi ocultação; o retorno como empréstimo é integração."),
   ("conversão.", "Não é fase do modelo do GAFI."),
   ("fracionamento.", "Fracionamento (smurfing) é técnica de colocação.")],
  pai="ETI-0008", tags=["lavagem de dinheiro", "fases da lavagem"], var="fase cobrada por caso (empréstimo de regresso)", verif=V("9"))

Q(M, "9", """Considerando as fases da lavagem de dinheiro, é correto afirmar:""",
  ("a colocação é a fase em que o criminoso está mais vulnerável à detecção, porque o dinheiro ainda está próximo da origem.", "Na colocação o dinheiro costuma estar em espécie e ligado à origem ilícita."),
  [("o crime só se consuma quando as três fases ocorrem, na ordem colocação, ocultação e integração.", "As fases não precisam ocorrer todas nem na ordem; a lei pune a ocultação ou dissimulação em qualquer momento."),
   ("o smurfing (fracionamento de depósitos) é técnica típica da integração.", "É técnica de colocação."),
   ("a ocultação consiste em investir os recursos em negócios legítimos.", "Isso é integração."),
   ("a integração é a fase mais vulnerável, pois o dinheiro já tem aparência lícita.", "Com aparência lícita, a detecção fica mais difícil.")],
  pai="ETI-0008", dif=2, tags=["lavagem de dinheiro", "fases da lavagem"], var="fases cobradas por afirmações conceituais", verif=V("9"))

Q(M, "9", """Na classificação doutrinária das "gerações" de leis de lavagem, a Lei 9.613/1998, na redação dada pela Lei 12.683/2012, é considerada de""",
  ("terceira geração, pois qualquer infração penal pode ser antecedente da lavagem.", "A Lei 12.683/2012 extinguiu o rol taxativo de crimes antecedentes."),
  [("primeira geração, pois só o tráfico de drogas pode ser antecedente.", "Modelo da Convenção de Viena (1988)."),
   ("segunda geração, pois mantém rol taxativo de crimes antecedentes.", "Era a situação da redação original de 1998."),
   ("terceira geração, pois apenas crimes cometidos por organização criminosa podem ser antecedentes.", "Qualquer infração penal pode ser antecedente."),
   ("quarta geração, pois dispensa a existência de infração antecedente.", "Continua sendo necessária uma infração penal antecedente.")],
  pai="ETI-0009", tags=["lavagem de dinheiro", "crime antecedente"], var="evolução da lei cobrada pelas gerações", verif=V("9"))

Q(M, "9", """Os lucros obtidos com a exploração do jogo do bicho, que é contravenção penal, são depositados em contas de terceiros e convertidos em imóveis para dissimular sua origem. Pela Lei 9.613/1998 em vigor,""",
  ("pode haver crime de lavagem, pois desde a Lei 12.683/2012 qualquer infração penal, inclusive contravenção, pode ser antecedente.", "O tipo do art. 1º fala em \"infração penal\", gênero que abrange crimes e contravenções."),
  [("não há lavagem, porque contravenção penal não pode ser infração antecedente.", "Isso valia antes de 2012, quando o rol era taxativo."),
   ("só haveria lavagem se a contravenção tivesse sido praticada por organização criminosa.", "Não há essa exigência."),
   ("a lavagem depende de prévia condenação pela contravenção.", "O processo da lavagem é autônomo e exige apenas indícios suficientes da infração antecedente."),
   ("há apenas crime contra o Sistema Financeiro Nacional.", "A conduta descrita é a do art. 1º da Lei 9.613/1998.")],
  pai="ETI-0009", tags=["lavagem de dinheiro", "crime antecedente"], var="caso concreto com contravenção como antecedente", verif=V("9"))

Q(M, "9", """Ao comunicar ao COAF uma operação suspeita de um cliente, a instituição financeira""",
  ("deve abster-se de dar ciência do fato a qualquer pessoa, inclusive ao próprio cliente.", "A vedação de tipping off está no art. 11 da Lei 9.613/1998."),
  [("deve informar o cliente, para que ele possa apresentar justificativas.", "Avisar o cliente é vedado (tipping off)."),
   ("precisa de autorização judicial prévia para enviar a comunicação.", "A comunicação é dever legal e não depende de ordem judicial."),
   ("responde civilmente perante o cliente se a suspeita não se confirmar, ainda que tenha agido de boa-fé.", "Comunicações de boa-fé não geram responsabilidade civil ou administrativa."),
   ("deve encerrar imediatamente a conta do cliente e avisá-lo do motivo.", "Não há essa obrigação, e avisar o motivo violaria a vedação de tipping off.")],
  pai="ETI-0010", dif=1, tags=["PLD", "COAF", "tipping off"], var="C/E convertida em múltipla escolha (vedação de tipping off)", verif=V("9"))

Q(M, "9", """**Não** é sanção administrativa prevista no art. 12 da Lei 9.613/1998 para as pessoas obrigadas que descumprirem seus deveres:""",
  ("reclusão de 3 a 10 anos.", "Reclusão é pena criminal (do crime de lavagem, art. 1º), aplicada pelo Judiciário, não sanção administrativa."),
  [("advertência.", "Sanção administrativa prevista."),
   ("multa pecuniária de até R$ 20 milhões, entre outros limites.", "Prevista: não superior ao dobro da operação, ao dobro do lucro ou a R$ 20 milhões."),
   ("inabilitação temporária de administradores por até 10 anos.", "Sanção administrativa prevista."),
   ("cassação ou suspensão da autorização de funcionamento.", "Sanção administrativa prevista.")],
  pai="ETI-0011", tags=["lavagem de dinheiro", "sanções administrativas"], var="sanções do art. 12 cobradas pela exceção", verif=V("9"))

Q(M, "9", """Sobre o Conselho de Controle de Atividades Financeiras (COAF), é correto afirmar:""",
  ("é a Unidade de Inteligência Financeira do Brasil, vinculado administrativamente ao Banco Central pela Lei 13.974/2020, e produz Relatórios de Inteligência Financeira para as autoridades competentes.", "O COAF faz inteligência financeira; não investiga, não julga e não bloqueia contas por conta própria."),
  [("é vinculado ao Ministério da Justiça e tem competência para julgar os crimes de lavagem.", "É vinculado ao BCB, e o julgamento cabe ao Poder Judiciário."),
   ("pode quebrar o sigilo bancário e bloquear contas por decisão própria.", "Não tem esse poder; encaminha RIFs às autoridades."),
   ("é o órgão que fiscaliza os bancos quanto ao cumprimento das regras de PLD.", "Quem fiscaliza os bancos é o BCB; o COAF fiscaliza setores sem regulador próprio."),
   ("tem seu presidente nomeado pelo Ministro da Fazenda.", "O presidente do COAF é escolhido e nomeado pelo presidente do BCB.")],
  pai="ETI-0012", tags=["COAF", "PLD"], var="C/E convertida em múltipla escolha (natureza e limites do COAF)", verif=V("9"))

Q(M, "9", """Uma loja de joias e objetos de arte, que não tem órgão regulador próprio, está sujeita aos deveres de prevenção à lavagem de dinheiro. A regulação e a fiscalização desse setor, nesse aspecto, cabem""",
  ("ao COAF.", "O COAF regula e fiscaliza os setores obrigados que não têm regulador próprio (joias, arte, bens de luxo, factoring)."),
  [("ao Banco Central.", "O BCB fiscaliza as instituições que autoriza a funcionar."),
   ("à CVM.", "A CVM cuida do mercado de valores mobiliários."),
   ("à SUSEP.", "A SUSEP cuida de seguros, capitalização e previdência aberta."),
   ("à Receita Federal.", "A Receita não é o regulador de PLD desses setores.")],
  pai="ETI-0012", dif=2, tags=["COAF", "pessoas obrigadas"], var="competência do COAF para setores sem regulador", verif=V("9"))

Q(M, "9", """Pela Lei 9.613/1998 (art. 1º, §4º), a pena do crime de lavagem é aumentada de 1/3 a 2/3 quando o crime é cometido""",
  ("de forma reiterada, por intermédio de organização criminosa ou por meio da utilização de ativo virtual.", "A hipótese do ativo virtual foi incluída pela Lei 14.478/2022."),
  [("por pessoa que colabore espontaneamente com as autoridades.", "Colaboração gera redução de pena (de 1/3 a 2/3), não aumento."),
   ("na forma culposa, por negligência do agente.", "Não existe lavagem culposa."),
   ("por meio de depósitos em espécie de qualquer valor.", "Não é causa de aumento prevista."),
   ("contra instituição financeira oficial.", "Essa causa de aumento é do art. 19 da Lei 7.492/1986 (financiamento obtido mediante fraude).")],
  pai="ETI-0013", tags=["lavagem de dinheiro", "causa de aumento"], var="C/E convertida em múltipla escolha (causas de aumento)", verif=V("9"))

Q(M, "9", """Sobre as características jurídicas do crime de lavagem de dinheiro, é correto afirmar:""",
  ("o processo e o julgamento independem do processo da infração antecedente, e a lavagem é punível ainda que seja desconhecido o autor dessa infração.", "Autonomia (art. 2º, II e §1º): basta haver indícios suficientes da infração antecedente."),
  [("é admitida a modalidade culposa, por negligência na verificação da origem dos bens.", "É crime doloso; a jurisprudência admite dolo eventual (cegueira deliberada), mas não culpa."),
   ("o autor do crime antecedente nunca pode responder também por lavagem.", "O Brasil admite a autolavagem, quando há atos autônomos de ocultação."),
   ("a competência é sempre da Justiça Federal.", "Em regra é da Justiça Estadual; é federal nas hipóteses do art. 2º, III."),
   ("a denúncia exige condenação definitiva pela infração antecedente.", "Basta haver indícios suficientes da infração antecedente.")],
  pai=None, dif=3, tags=["lavagem de dinheiro", "autonomia"], var="inédita (autonomia, dolo e competência)", verif=V("9"))

Q(M, "9", """Pela Lei 9.613/1998, o autor, coautor ou partícipe que colaborar espontaneamente com as autoridades, prestando esclarecimentos que levem à apuração das infrações, à identificação dos autores ou à localização dos bens,""",
  ("pode ter a pena reduzida de 1/3 a 2/3, começar a cumpri-la em regime aberto ou semiaberto, ou o juiz pode deixar de aplicá-la ou substituí-la por restritiva de direitos.", "É a colaboração premiada do art. 1º, §5º."),
  [("terá a pena aumentada de 1/3 a 2/3.", "Aumento é para crime reiterado, por organização criminosa ou com ativo virtual."),
   ("fica isento de pena apenas se devolver em dobro os valores lavados.", "A lei não faz essa exigência."),
   ("só pode receber benefício se o crime antecedente for tráfico de drogas.", "Não há essa limitação."),
   ("não recebe benefício algum, pois a lavagem é crime hediondo.", "A lei prevê expressamente benefícios à colaboração.")],
  pai=None, tags=["lavagem de dinheiro", "colaboração premiada"], var="inédita (colaboração premiada)", verif=V("9"))

Q(M, "9", """Pelo art. 17-B da Lei 9.613/1998, a autoridade policial e o Ministério Público têm acesso, **independentemente de autorização judicial**,""",
  ("exclusivamente aos dados cadastrais (qualificação pessoal, filiação e endereço) mantidos por instituições financeiras, empresas telefônicas, provedores e administradoras de cartão, entre outros.", "A movimentação financeira continua protegida pelo sigilo e exige ordem judicial, salvo exceções da LC 105/2001."),
  [("aos extratos de movimentação financeira de qualquer investigado.", "A movimentação exige autorização judicial, salvo exceções."),
   ("ao conteúdo das comunicações telefônicas do investigado.", "Interceptação depende de ordem judicial."),
   ("aos dados fiscais completos fornecidos pela Receita Federal.", "O dispositivo trata só de dados cadastrais."),
   ("a nenhuma informação, pois todo acesso depende de ordem judicial.", "O art. 17-B permite o acesso direto aos dados cadastrais.")],
  pai=None, dif=2, tags=["lavagem de dinheiro", "sigilo", "dados cadastrais"], var="inédita (acesso a dados cadastrais)", verif=V("9"))

Q(M, "9", """Sobre o contexto internacional de prevenção à lavagem de dinheiro e ao financiamento do terrorismo, é correto afirmar:""",
  ("o GAFI/FATF publica as 40 Recomendações, padrão internacional de PLD/FTP, e o Brasil é membro desde 2000.", "O GAFI foi criado em 1989 pelo G7 e avalia os países por avaliações mútuas."),
  [("o COAF é a autoridade internacional que avalia os países quanto à PLD.", "O COAF é a UIF brasileira; quem avalia os países é o GAFI."),
   ("pela Lei 13.810/2019, as sanções do Conselho de Segurança da ONU só são cumpridas após decisão judicial transitada em julgado.", "A lei exige cumprimento imediato, com indisponibilidade de ativos sem demora."),
   ("o Grupo de Egmont é a rede de bancos centrais responsável pelos Acordos de Basileia.", "Egmont é a rede mundial de unidades de inteligência financeira."),
   ("a ENCCLA é um organismo internacional ligado à ONU.", "A ENCCLA é uma estratégia brasileira (2003) que articula órgãos públicos nacionais.")],
  pai=None, tags=["PLD", "GAFI", "financiamento do terrorismo"], var="inédita (contexto internacional)", verif=V("9"))

Q(M, "9", """Estão sujeitas aos deveres de prevenção à lavagem de dinheiro previstos na Lei 9.613/1998 (identificar clientes, manter registros e comunicar operações), entre outras,""",
  ("as instituições financeiras, as seguradoras, as administradoras de consórcio, as pessoas que comercializam imóveis e as que comercializam joias e objetos de arte.", "O art. 9º alcança setores financeiros e não financeiros com risco de uso para lavagem."),
  [("somente as instituições autorizadas a funcionar pelo Banco Central.", "A lista do art. 9º é bem mais ampla."),
   ("apenas os bancos públicos e as sociedades de economia mista.", "Não há restrição à natureza pública."),
   ("somente as pessoas jurídicas com faturamento superior a R$ 20 milhões.", "Não há critério de faturamento."),
   ("apenas as corretoras de valores, por serem fiscalizadas pela CVM.", "Corretoras estão incluídas, mas não são as únicas.")],
  pai=None, dif=1, tags=["PLD", "pessoas obrigadas"], var="inédita (pessoas obrigadas)", verif=V("9"))

Q(M, "9", """Quanto aos registros das operações, a Lei 9.613/1998 fixa prazo mínimo de conservação de cadastros e registros, prazo que, para as instituições autorizadas pelo Banco Central, a Circular 3.978/2020 ampliou. Esses prazos são, respectivamente, de""",
  ("5 anos e 10 anos.", "A lei fixa no mínimo 5 anos a partir do encerramento da conta ou da conclusão da transação; a Circular 3.978/2020 exige 10 anos."),
  [("10 anos e 20 anos.", "A lei fixa 5 anos, e a Circular, 10."),
   ("2 anos e 5 anos.", "Prazos menores que os previstos."),
   ("5 anos e 5 anos.", "A Circular ampliou o prazo para 10 anos."),
   ("10 anos e 5 anos.", "Ordem trocada: a Circular é mais rigorosa que a lei.")],
  pai=None, tags=["PLD", "registros"], var="inédita (prazo de guarda de registros)", verif=V("9") + " e §10")

# =====================================================================
# §10 PLD nas instituições – pais ETI-0007, 0014, 0015, 0016, 0017, 0018
# =====================================================================
Q(M, "10", """Pela Circular BCB 3.978/2020, depois de selecionada uma operação atípica pelo sistema de monitoramento, a instituição deve concluir a análise em até ____ e, decidindo comunicar a operação como suspeita, deve fazê-lo ao COAF até ____.

Preenchem corretamente as lacunas:""",
  ("45 dias contados da seleção – o dia útil seguinte ao da decisão de comunicar", "A decisão de comunicar ou não deve ser fundamentada e documentada."),
  [("24 horas – 30 dias após a decisão", "Os prazos estão invertidos e não correspondem à Circular."),
   ("30 dias – o quinto dia útil do mês seguinte", "Não são os prazos da Circular."),
   ("45 dias contados da seleção – 10 dias úteis após o encerramento do ano civil", "Esse segundo prazo é o da declaração de não ocorrência."),
   ("90 dias – o dia útil seguinte ao da decisão de comunicar", "O prazo de análise é de 45 dias.")],
  pai="ETI-0007", tags=["PLD", "Circular 3.978/2020", "comunicação ao COAF"], var="comunicação ao COAF cobrada pelos prazos da Circular", verif=V("10"))

Q(M, "10", """Sobre a avaliação interna de risco (AIR) exigida pela Circular BCB 3.978/2020, é correto afirmar:""",
  ("deve considerar, no mínimo, os perfis de risco dos clientes, da instituição, das operações e produtos e das atividades de funcionários, parceiros e terceirizados, e ser revisada a cada 2 anos.", "A AIR classifica o risco em categorias, considerando probabilidade e impacto, e deve ser documentada."),
  [("deve considerar apenas o perfil de risco dos clientes.", "São quatro perfis mínimos."),
   ("é dispensada nas instituições que adotam a abordagem baseada em risco.", "A AIR é justamente a base da abordagem baseada em risco."),
   ("deve ser revisada mensalmente e aprovada pelo COAF.", "Revisão a cada 2 anos (ou em mudanças significativas); não há aprovação do COAF."),
   ("considera apenas o impacto financeiro, sem avaliar probabilidade.", "Considera probabilidade e impacto (financeiro, jurídico, reputacional e socioambiental).")],
  pai="ETI-0014", tags=["PLD", "avaliação interna de risco"], var="AIR cobrada pelos perfis e pela periodicidade", verif=V("10"))

Q(M, "10", """Um ex-deputado federal deixou o mandato há 3 anos e deseja abrir conta em um banco. De acordo com a regulamentação de PLD, o banco deve""",
  ("tratá-lo como pessoa exposta politicamente (PEP), com diligência reforçada, pois a condição persiste por 5 anos após o término da função.", "Ser PEP não impede o relacionamento, mas exige supervisão mais rigorosa e aprovação de nível hierárquico superior."),
  [("recusar a abertura da conta, pois instituições não podem manter contas de PEP.", "Não há proibição de relacionamento com PEP."),
   ("tratá-lo como cliente comum, pois deixou de ser PEP ao fim do mandato.", "A condição persiste por 5 anos."),
   ("comunicar automaticamente a abertura da conta ao COAF como operação suspeita.", "Ser PEP não é presunção de ilicitude."),
   ("exigir autorização do Tribunal Superior Eleitoral para abrir a conta.", "Não há essa exigência.")],
  pai="ETI-0015", tags=["PLD", "PEP"], var="PEP cobrado por caso (prazo de 5 anos)", verif=V("10"))

Q(M, "10", """Para fins da Circular BCB 3.978/2020, é considerado **familiar** de uma pessoa exposta politicamente:""",
  ("o irmão.", "Familiares: parentes na linha reta ou colateral até o segundo grau (pais, filhos, avós, netos e irmãos), cônjuge, companheiro(a) e enteado(a)."),
  [("o primo.", "Colateral de quarto grau: fora do conceito."),
   ("o tio.", "Colateral de terceiro grau: fora do conceito."),
   ("o sobrinho.", "Colateral de terceiro grau: fora do conceito."),
   ("o amigo de infância sem vínculo de negócios.", "Não é familiar nem estreito colaborador.")],
  pai="ETI-0015", dif=2, tags=["PLD", "PEP"], var="PEP cobrado pelo conceito de familiar", verif=V("10"))

Q(M, "10", """Considere as seguintes operações realizadas em um banco em nov/2026:

I. depósito em espécie de R$ 52.000,00 na conta de uma empresa;
II. Pix de R$ 80.000,00 entre contas de mesma titularidade;
III. saque em espécie de R$ 45.000,00;
IV. venda de US$ 8.000,00 em espécie a um turista.

Deve ser objeto de comunicação **automática** ao COAF, independentemente de análise, apenas a operação""",
  ("I.", "Pela Circular 3.978/2020 (art. 49, redação da Res. BCB 591/2026, vigente desde 1º/10/2026), comunicam-se automaticamente operações em espécie de R$ 50.000,00 ou mais e câmbio em espécie de US$ 10.000,00 ou mais. Só I atinge o limite."),
  [("II.", "Pix não é operação em espécie; só seria comunicado se a análise apontasse suspeita."),
   ("III.", "Saque em espécie abaixo de R$ 50.000,00."),
   ("IV.", "Câmbio em espécie abaixo de US$ 10.000,00."),
   ("I e II.", "O Pix não entra na comunicação automática por valor.")],
  pai="ETI-0016", dif=2, tags=["PLD", "comunicação automática", "datado"], var="comunicação automática cobrada por caso com valores", verif=V("10") + "; valores comparados com os limites")

Q(M, "10", """Com a Resolução BCB 591/2026 (que revogou e reproduziu a Res. BCB 588/2026), em vigor desde 1º/10/2026, passou a ser objeto de comunicação automática ao COAF a transferência de ativos virtuais""",
  ("de ou para carteiras autocustodiadas, de valor igual ou superior ao equivalente a US$ 10.000,00.", "Dado conferido na apostila 03 §10 (revisão de nov/2026)."),
  [("de qualquer valor, entre corretoras autorizadas pelo Banco Central.", "A regra trata de carteiras autocustodiadas e tem limite de valor."),
   ("de ou para carteiras autocustodiadas, de valor igual ou superior a R$ 50.000,00.", "O limite é em dólar: US$ 10 mil."),
   ("somente quando o cliente for pessoa exposta politicamente.", "A comunicação automática independe de o cliente ser PEP."),
   ("de valor igual ou superior a US$ 1.000.000,00.", "O limite é US$ 10 mil.")],
  pai="ETI-0016", tags=["PLD", "ativos virtuais", "comunicação automática", "datado"], var="C/E convertida em múltipla escolha (carteiras autocustodiadas)", verif=V("10"))

Q(M, "10", """Na identificação do beneficiário final de uma pessoa jurídica cliente, a Circular BCB 3.978/2020 determina que a instituição defina um percentual mínimo de participação para caracterizar influência significativa. Esse percentual""",
  ("não pode ser superior a 25%.", "A instituição deve identificar a cadeia societária até a pessoa natural; o percentual que fixar não pode passar de 25%."),
  [("deve ser de exatamente 50% mais uma ação.", "Não é preciso deter o controle para ser beneficiário final."),
   ("não pode ser inferior a 51%.", "Inverte a regra: o percentual tem teto de 25%."),
   ("é livremente fixado pela instituição, sem limite.", "Há teto de 25%."),
   ("é de 10% para pessoas físicas e 25% para jurídicas.", "A Circular não faz essa distinção.")],
  pai="ETI-0017", tags=["PLD", "KYC", "beneficiário final"], var="beneficiário final cobrado pelo percentual máximo", verif=V("10"))

Q(M, "10", """A abordagem baseada em risco, adotada pela Circular BCB 3.978/2020, significa que a instituição""",
  ("deve conhecer seus riscos e aplicar controles mais rigorosos onde o risco é maior e simplificados onde é menor.", "Substituiu a lógica de aplicar a mesma regra a todos os clientes."),
  [("deve aplicar exatamente os mesmos controles a todos os clientes, sem distinção.", "É o oposto da abordagem baseada em risco."),
   ("pode deixar de monitorar clientes classificados como de baixo risco.", "O monitoramento continua; os controles podem ser simplificados, não eliminados."),
   ("transfere ao COAF a classificação de risco de seus clientes.", "A classificação é feita pela própria instituição, com base na AIR."),
   ("só precisa analisar operações de clientes PEP.", "Todos os clientes são classificados; PEP é um dos fatores de risco.")],
  pai="ETI-0018", dif=1, tags=["PLD", "abordagem baseada em risco"], var="C/E convertida em múltipla escolha (ABR)", verif=V("10"))

Q(M, "10", """Nos procedimentos de "conheça seu cliente" (KYC) da Circular BCB 3.978/2020, a etapa que consiste em **enquadrar o cliente em uma das categorias de risco** definidas na avaliação interna, reavaliando-o ao longo do relacionamento, é a""",
  ("classificação.", "KYC: identificação (dados cadastrais), qualificação (capacidade financeira, condição de PEP) e classificação (categoria de risco)."),
  [("identificação.", "Obtenção e verificação dos dados cadastrais."),
   ("qualificação.", "Coleta de informações compatíveis com o perfil de risco, como renda e patrimônio."),
   ("comunicação.", "Etapa de envio de informações ao COAF."),
   ("devida diligência simplificada.", "Não é etapa do KYC; é forma de tratamento para baixo risco.")],
  pai=None, tags=["PLD", "KYC"], var="inédita (etapas do KYC)", verif=V("10"))

Q(M, "10", """Um cliente pretende sacar R$ 70.000,00 em espécie. Pela regulamentação de PLD do Banco Central,""",
  ("o saque deve ser provisionado com antecedência mínima de 3 dias úteis, e o próprio pedido de provisionamento é objeto de comunicação automática ao COAF.", "Saques em espécie de R$ 50.000,00 ou mais exigem provisionamento; o pedido é comunicado (Circular 3.978/2020, com a redação da Res. BCB 591/2026, vigente desde 1º/10/2026; regra conferida na apostila 03 §10, revisão de nov/2026)."),
  [("o saque é proibido, pois a lei veda saques em espécie acima de R$ 50.000,00.", "Não há proibição, há provisionamento e comunicação."),
   ("o banco deve exigir autorização judicial para liberar o valor.", "Não há essa exigência."),
   ("o saque só é comunicado se o cliente for PEP.", "A comunicação do provisionamento é automática, por valor."),
   ("o banco deve avisar o cliente de que a operação será comunicada como suspeita.", "Comunicação automática não se confunde com suspeita, e é vedado avisar o cliente sobre comunicações.")],
  pai=None, tags=["PLD", "provisionamento de saque", "datado"], var="inédita (provisionamento de saque em espécie)", verif=V("10"))

Q(M, "10", """Sobre a avaliação de efetividade da política, dos procedimentos e dos controles de PLD prevista na Circular BCB 3.978/2020, é correto afirmar:""",
  ("é anual, documentada em relatório com data-base de 31 de dezembro, encaminhado ao comitê de auditoria (se houver) e ao conselho de administração até 31 de março do ano seguinte.", "As deficiências identificadas geram plano de ação e relatórios de acompanhamento."),
  [("é feita a cada 5 anos pelo COAF.", "É anual e feita pela própria instituição."),
   ("é dispensada quando a instituição não fez comunicações no ano.", "A avaliação de efetividade é obrigatória."),
   ("é encaminhada à CVM até 31 de janeiro.", "Destina-se aos órgãos internos de governança, até 31 de março."),
   ("substitui a auditoria interna, que deixa de verificar o cumprimento das normas de PLD.", "A auditoria interna também deve verificar periodicamente o cumprimento.")],
  pai=None, dif=3, tags=["PLD", "avaliação de efetividade"], var="inédita (avaliação de efetividade)", verif=V("10"))

Q(M, "10", """Merece especial atenção, como possível indício de lavagem de dinheiro, a seguinte situação:""",
  ("uma conta que recebe muitos depósitos de origens diversas e, em seguida, transfere quase todo o saldo a terceiros (conta de passagem).", "Exemplo de situação atípica (Carta Circular 4.001/2020)."),
  [("um aposentado que recebe o benefício mensal e paga suas contas de consumo.", "Movimentação compatível com o perfil."),
   ("uma empresa que paga a folha de salários na data habitual.", "Movimentação compatível com a atividade."),
   ("um cliente que atualiza seus dados cadastrais quando solicitado.", "Comportamento esperado."),
   ("um cliente que faz aplicações compatíveis com a renda declarada.", "Movimentação compatível com a capacidade financeira.")],
  pai=None, dif=1, tags=["PLD", "situações atípicas"], var="inédita (indícios de lavagem)", verif=V("10"))

Q(M, "10", """Pela Circular BCB 3.978/2020, a política de prevenção à lavagem de dinheiro e ao financiamento do terrorismo da instituição deve""",
  ("ser aprovada pelo conselho de administração (ou, na falta dele, pela diretoria), documentada, mantida atualizada e divulgada a funcionários, parceiros e terceirizados.", "A instituição também indica ao BCB um diretor responsável pelo cumprimento da Circular."),
  [("ser aprovada pelo COAF antes de entrar em vigor.", "A aprovação é interna (conselho ou diretoria)."),
   ("ser mantida em sigilo, sem divulgação aos funcionários.", "Deve ser divulgada a funcionários, parceiros e terceirizados."),
   ("ser idêntica para todas as instituições, conforme modelo do Banco Central.", "Deve ser compatível com o perfil de risco da própria instituição."),
   ("dispensar a indicação de diretor responsável quando houver área de compliance.", "A indicação de diretor responsável é obrigatória.")],
  pai=None, tags=["PLD", "governança de PLD"], var="inédita (política de PLD/FT)", verif=V("10"))

# =====================================================================
# §11 Crimes contra o SFN, sigilo bancário e LGPD – pais ETI-0019, 0020, 0021, 0022, 0023
# =====================================================================
Q(M, "11", """Na Lei 7.492/1986, a diferença entre gestão fraudulenta e gestão temerária de instituição financeira está em que""",
  ("a fraudulenta envolve dolo de enganar (pena de 3 a 12 anos), e a temerária consiste em gerir de forma imprudente, assumindo riscos excessivos (pena de 2 a 8 anos).", "Art. 4º, caput (fraudulenta) e parágrafo único (temerária)."),
  [("as duas têm a mesma pena, de 2 a 6 anos.", "As penas são diferentes."),
   ("a temerária é mais grave e tem pena de 3 a 12 anos.", "A mais grave é a fraudulenta."),
   ("só a fraudulenta é crime; a temerária é apenas infração administrativa.", "As duas são crimes."),
   ("a fraudulenta só se aplica a bancos públicos.", "Aplica-se a qualquer instituição financeira.")],
  pai="ETI-0019", tags=["crimes contra o SFN", "Lei 7.492/1986"], var="gestão fraudulenta × temerária com as penas", verif=V("11"))

Q(M, "11", """Pela Lei Complementar 105/2001, **constitui** quebra indevida de sigilo bancário:""",
  ("o funcionário informar o saldo da conta de um cliente a um parente dele, sem consentimento do titular.", "Fora das hipóteses legais, a revelação de dados das operações é crime (art. 10, reclusão de 1 a 4 anos)."),
  [("a troca de informações entre instituições financeiras, para fins cadastrais, por meio de centrais de risco.", "Expressamente não constitui violação (art. 1º, §3º)."),
   ("a comunicação às autoridades de indícios de ilícitos, como as comunicações ao COAF.", "Expressamente não constitui violação."),
   ("a revelação de informações com o consentimento expresso do titular.", "Não é violação; é o fundamento do Open Finance."),
   ("o fornecimento de informações ao Banco Central no exercício da fiscalização.", "O sigilo não é oponível ao BCB e à CVM na fiscalização.")],
  pai="ETI-0020", tags=["sigilo bancário", "LC 105/2001"], var="pergunta invertida (o que viola o sigilo)", verif=V("11"))

Q(M, "11", """Manter no exterior depósitos não declarados à repartição federal competente configura, na Lei 7.492/1986,""",
  ("crime de evasão de divisas (art. 22, parágrafo único).", "O art. 22 pune a operação de câmbio não autorizada para evasão e, no parágrafo único, a saída de divisas sem autorização e a manutenção de depósitos não declarados no exterior."),
  [("gestão temerária (art. 4º, parágrafo único).", "Refere-se à administração imprudente de instituição financeira."),
   ("operação de instituição financeira sem autorização (art. 16).", "Refere-se a quem faz operar instituição sem autorização."),
   ("apenas infração administrativa, sem repercussão penal.", "É crime."),
   ("crime de lavagem de dinheiro, necessariamente.", "Pode haver lavagem se houver ocultação de bens de infração penal, mas o tipo descrito é o de evasão de divisas.")],
  pai="ETI-0021", dif=1, tags=["crimes contra o SFN", "evasão de divisas"], var="C/E convertida em múltipla escolha (evasão de divisas)", verif=V("11"))

Q(M, "11", """Pela Lei Complementar 105/2001, as autoridades fiscais (União, Estados, DF e Municípios) podem examinar documentos e registros de contas bancárias, **sem ordem judicial**,""",
  ("quando houver processo administrativo ou procedimento fiscal em curso e o exame for considerado indispensável.", "Art. 6º; o STF entendeu (2016) que há transferência do sigilo ao Fisco, que continua obrigado a mantê-lo."),
  [("a qualquer tempo, sem necessidade de procedimento instaurado.", "Exige processo ou procedimento fiscal em curso."),
   ("apenas após aprovação do plenário de uma CPI.", "Essa é a regra das CPIs (art. 4º)."),
   ("somente com consentimento do contribuinte.", "O art. 6º dispensa o consentimento nas condições que prevê."),
   ("em nenhuma hipótese, pois todo acesso depende de ordem judicial.", "O art. 6º autoriza o acesso nas condições previstas.")],
  pai="ETI-0022", tags=["sigilo bancário", "LC 105/2001", "Fisco"], var="acesso aos dados por outro órgão (Fisco × CPI)", verif=V("11"))

Q(M, "11", """Um ex-cliente pede ao banco, com base na LGPD, a eliminação imediata de todos os registros de suas operações, inclusive os mantidos para fins de prevenção à lavagem de dinheiro. O banco deve""",
  ("manter os registros que é obrigado a guardar por 10 anos (Circular 3.978/2020), pois o tratamento se apoia no cumprimento de obrigação legal ou regulatória.", "LGPD, sigilo bancário e PLD convivem; o direito de eliminação não alcança dados de guarda obrigatória."),
  [("eliminar imediatamente todos os dados, pois o direito do titular prevalece sobre normas regulatórias.", "Dados de guarda obrigatória não podem ser eliminados a pedido."),
   ("eliminar os dados e comunicar o fato ao COAF.", "A eliminação não é devida."),
   ("pedir autorização da ANPD para manter os dados.", "A guarda decorre de obrigação legal, sem necessidade de autorização da ANPD."),
   ("transferir os dados ao cliente e apagá-los de seus sistemas.", "A guarda é obrigatória pela regulação de PLD.")],
  pai="ETI-0023", tags=["LGPD", "PLD", "sigilo bancário"], var="C/E convertida em caso (eliminação × guarda obrigatória)", verif=V("11"))

Q(M, "11", """Uma pessoa física passa a captar dinheiro do público prometendo rendimentos elevados e a "aplicar" os recursos, sem qualquer autorização do Banco Central. Pela Lei 7.492/1986, essa conduta pode configurar o crime de""",
  ("fazer operar instituição financeira sem autorização (art. 16), por equiparação de quem capta recursos de terceiros.", "Inclui \"bancos clandestinos\", pirâmides que captam do público e doleiros; pena de 1 a 4 anos."),
  [("gestão temerária, que só exige risco excessivo.", "Gestão temerária pressupõe instituição financeira regularmente gerida pelo agente."),
   ("evasão de divisas.", "Não há operação de câmbio ou saída de divisas no caso."),
   ("lavagem de dinheiro, exclusivamente.", "Pode haver outros crimes, mas a conduta descrita é a do art. 16."),
   ("nenhum crime, pois a lei só alcança pessoas jurídicas.", "A lei equipara a instituição financeira quem exerce as atividades descritas.")],
  pai=None, tags=["crimes contra o SFN", "Lei 7.492/1986"], var="inédita (operar instituição sem autorização)", verif=V("11"))

Q(M, "11", """Nos crimes contra o Sistema Financeiro Nacional (Lei 7.492/1986), a ação penal é""",
  ("pública incondicionada, promovida pelo Ministério Público Federal perante a Justiça Federal.", "Art. 26; o BCB e a CVM devem informar o MPF ao verificarem indícios de crime (art. 28)."),
  [("privada, promovida pela instituição lesada.", "A ação é pública incondicionada."),
   ("pública condicionada à representação do Banco Central.", "Não depende de representação."),
   ("pública incondicionada, promovida pelo Ministério Público Estadual perante a Justiça Estadual.", "A competência é federal."),
   ("de competência exclusiva do COAF.", "O COAF não promove ações penais.")],
  pai=None, dif=1, tags=["crimes contra o SFN", "competência"], var="inédita (ação penal e competência)", verif=V("11"))

Q(M, "11", """Pela LGPD (Lei 13.709/2018), é exemplo de **dado pessoal sensível** tratado por um banco:""",
  ("a biometria facial usada para autenticar o cliente no aplicativo.", "Dado biométrico é sensível (art. 5º, II); pode ser tratado para prevenção à fraude e segurança do titular."),
  [("o número da conta corrente do cliente.", "Dado pessoal, mas não sensível."),
   ("o endereço residencial do cliente.", "Dado pessoal comum."),
   ("o saldo médio da conta.", "Dado pessoal (e protegido por sigilo bancário), mas não está no rol de sensíveis."),
   ("o e-mail cadastrado como chave Pix.", "Dado pessoal comum.")],
  pai=None, dif=1, tags=["LGPD", "dado sensível"], var="inédita (dado sensível)", verif=V("11"))

Q(M, "11", """Um banco contrata um provedor de nuvem que armazena e processa dados de clientes conforme as instruções do banco. Pela LGPD, o banco e o provedor são, respectivamente,""",
  ("controlador e operador.", "Controlador decide sobre o tratamento; operador trata os dados em nome do controlador."),
  [("operador e controlador.", "Inverte os papéis."),
   ("encarregado e controlador.", "Encarregado (DPO) é o canal entre controlador, titulares e ANPD."),
   ("titular e operador.", "Titular é a pessoa natural a quem os dados se referem."),
   ("controlador e encarregado.", "O provedor não é o canal de comunicação com titulares e ANPD.")],
  pai=None, dif=1, tags=["LGPD", "agentes de tratamento"], var="inédita (controlador × operador)", verif=V("11"))

Q(M, "11", """Sobre as sanções administrativas da LGPD (art. 52), é correto afirmar que a multa simples pode chegar a""",
  ("2% do faturamento da pessoa jurídica no Brasil, limitada a R$ 50 milhões por infração.", "Também há advertência, multa diária, publicização, bloqueio e eliminação dos dados e suspensão do tratamento."),
  [("20% do faturamento bruto, sem limite em reais.", "Confunde com a multa da Lei Anticorrupção (0,1% a 20%)."),
   ("R$ 20 milhões por infração.", "Confunde com o teto da multa da Lei 9.613/1998."),
   ("10% do faturamento, limitada a R$ 100 milhões por infração.", "Percentual e teto errados."),
   ("2% do faturamento mundial, sem limite.", "A base é o faturamento no Brasil, com teto de R$ 50 milhões por infração.")],
  pai=None, tags=["LGPD", "sanções"], var="inédita (sanções da LGPD)", verif=V("11"))

Q(M, "11", """Um cliente tem o crédito negado por um modelo automatizado de score e quer entender e contestar a decisão. Pela LGPD, ele tem direito a""",
  ("solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado (art. 20).", "Ponto importante para modelos de crédito com IA: exige explicabilidade e governança de modelos."),
  [("obter crédito automaticamente, pois a decisão automatizada é proibida.", "A lei não proíbe decisões automatizadas; garante a revisão."),
   ("exigir a eliminação de todos os seus dados de crédito do banco.", "Há dados de guarda obrigatória e a base de proteção do crédito."),
   ("nada, pois a LGPD não se aplica a dados financeiros.", "A LGPD se aplica, convivendo com o sigilo bancário."),
   ("conhecer o código-fonte do modelo, em qualquer caso.", "A lei garante informação e revisão, não acesso irrestrito ao código.")],
  pai=None, tags=["LGPD", "decisão automatizada"], var="inédita (revisão de decisão automatizada)", verif=V("11"))

Q(M, "11", """Para tratar os dados cadastrais de um cliente nos procedimentos de "conheça seu cliente" e enviá-los quando exigido pelo Banco Central e pela Receita Federal, a base legal da LGPD aplicável ao banco é, principalmente,""",
  ("o cumprimento de obrigação legal ou regulatória.", "KYC, PLD e envio de dados a reguladores decorrem de obrigação legal (art. 7º)."),
  [("o consentimento do titular, que pode ser revogado a qualquer momento.", "Se dependesse de consentimento, a revogação impediria o cumprimento da regulação."),
   ("o legítimo interesse do banco em oferecer novos produtos.", "Marketing não é a finalidade do KYC."),
   ("a tutela da saúde.", "Não guarda relação com o caso."),
   ("a realização de estudos por órgão de pesquisa.", "Não guarda relação com o caso.")],
  pai=None, tags=["LGPD", "bases legais", "KYC"], var="inédita (bases legais da LGPD)", verif=V("11"))

Q(M, "11", """Um desenvolvedor de um banco, por curiosidade, consulta na base de produção o extrato de um vizinho. Essa conduta""",
  ("pode configurar quebra de sigilo bancário (LC 105/2001), infração à LGPD e violação do Guia de Conduta Ética, recomendando controles de acesso por necessidade de conhecer e trilhas de auditoria.", "Exemplo citado na apostila para mostrar a ligação entre TI, sigilo e ética."),
  [("é permitida, pois o desenvolvedor tem acesso técnico à base.", "Acesso técnico não autoriza consulta sem necessidade de trabalho."),
   ("só seria irregular se os dados fossem divulgados a terceiros.", "A própria consulta indevida já viola sigilo, zelo e legalidade."),
   ("é regular se o vizinho também for empregado do banco.", "Não altera a ilicitude."),
   ("é apenas questão de produtividade, sem repercussão ética ou legal.", "Há repercussão ética, disciplinar e legal.")],
  pai=None, dif=1, tags=["sigilo bancário", "LGPD", "conduta ética"], var="inédita (caso de TI)", verif=V("11") + " e §12")

Q(M, "11", """Um banco sofre incidente de segurança que expõe dados de clientes, com risco relevante aos titulares. Pela LGPD e pelo regulamento da ANPD, o banco deve""",
  ("comunicar o incidente à ANPD e aos titulares afetados, no prazo de 3 dias úteis previsto no regulamento.", "Dado conferido na apostila 03 §11."),
  [("comunicar o incidente apenas se houver vazamento de dados sensíveis.", "Basta haver risco ou dano relevante aos titulares."),
   ("comunicar o incidente somente ao Banco Central, que repassa à ANPD.", "A comunicação é feita à ANPD e aos titulares."),
   ("manter o incidente em sigilo para preservar a reputação.", "A ocultação viola a LGPD."),
   ("comunicar o incidente em até 90 dias.", "O prazo regulamentar é de 3 dias úteis.")],
  pai=None, tags=["LGPD", "incidente de segurança"], var="inédita (incidente de segurança)", verif=V("11"))

# =====================================================================
# §12 Guia de Conduta Ética do Banestes – pais ETI-0001, 0005, 0024, 0025, 0026, 0027, 0028, 0029
# =====================================================================
Q(M, "12", """Segundo o Guia de Conduta Ética do Sistema Financeiro Banestes, o princípio da **prudência** consiste em""",
  ("agir com atenção e cuidado, evitando ações que possam colocar em risco as atribuições, o patrimônio ou a imagem do SFB.", "É a ética da cautela: avaliar riscos antes de agir e não assumir compromissos temerários."),
  [("agir com honestidade e retidão, recusando vantagens indevidas.", "Definição de probidade."),
   ("reunir competência técnica, legal e moral.", "Definição de idoneidade."),
   ("manter o endividamento pessoal sob controle.", "Princípio da administração financeira pessoal."),
   ("exercer as funções com moderação, sem abusar das prerrogativas do cargo.", "Definição de temperança.")],
  pai="ETI-0001", dif=1, tags=["Guia de Conduta Ética", "princípios éticos"], var="mesmo princípio com distratores de outros princípios do Guia", verif=V("12"))

Q(M, "12", """O Guia de Conduta Ética do Sistema Financeiro Banestes aplica-se""",
  ("a administradores, membros de conselhos e comitês, empregados, estagiários e prestadores de serviço das empresas do SFB, que devem aderir formalmente ao Guia.", "A adesão se dá pelo Termo de Adesão; quem deixa o SFB continua sujeito quanto a atos que causem dano à instituição."),
  [("somente aos empregados concursados do Banestes S.A.", "Abrange também administradores, conselheiros, estagiários, prestadores e as demais empresas do SFB."),
   ("apenas aos profissionais das áreas de mercado financeiro e de capitais.", "Esses seguem também os Títulos II e III, mas o Guia vale para todos."),
   ("aos clientes do banco, que assinam o Termo de Adesão ao abrir conta.", "O Guia rege os profissionais, não os clientes."),
   ("somente aos administradores, pois os demais seguem apenas o Manual de Recursos Humanos.", "Aplica-se a todos os níveis.")],
  pai="ETI-0001", tags=["Guia de Conduta Ética", "abrangência"], var="abrangência do Guia (enunciado da questão-pai virou o foco)", verif=V("12"))

Q(M, "12", """Segundo o Guia de Conduta Ética do Banestes, o princípio da **idoneidade** significa""",
  ("reunir competência técnica, legal e moral, condição essencial para ocupar cargos e funções.", "Não confundir com aptidão (não assumir função para a qual não está preparado) e capacitação (manter-se atualizado)."),
  [("não assumir funções para as quais não se esteja preparado.", "Definição de aptidão."),
   ("manter-se atualizado profissionalmente.", "Definição de capacitação."),
   ("cumprir os deveres com assiduidade e pontualidade.", "Definição de responsabilidade."),
   ("conservar bens e documentos e usá-los apenas para fins institucionais.", "Definição de zelo.")],
  pai="ETI-0024", tags=["Guia de Conduta Ética", "princípios éticos"], var="outro princípio (idoneidade) com distratores próximos", verif=V("12"))

Q(M, "12", """No Guia de Conduta Ética do Banestes, o princípio que consiste em **aceitar críticas e formas diferentes de pensar e agir** é o da""",
  ("tolerância.", "Não confundir com temperança, que é moderação e não abuso das prerrogativas do cargo."),
  [("temperança.", "Temperança é moderação no exercício das funções."),
   ("discrição.", "Discrição é guardar reserva sobre fatos conhecidos no cargo."),
   ("liberdade de expressão.", "Liberdade de expressão é dar sugestões e críticas com responsabilidade e respeito."),
   ("equidade.", "Equidade é promover ambiente justo e imparcial.")],
  pai="ETI-0025", tags=["Guia de Conduta Ética", "princípios éticos"], var="par temperança × tolerância pelo lado inverso", verif=V("12"))

Q(M, "12", """Sobre os princípios de **sigilo** e **discrição** no Guia de Conduta Ética do Banestes, é correto afirmar:""",
  ("o sigilo refere-se à confidencialidade das operações bancárias e das informações estratégicas, inclusive sobre ex-clientes; a discrição, à reserva sobre fatos conhecidos no cargo, sem divulgar informações falsas nem fomentar intrigas.", "A banca costuma trocar as definições dos dois princípios."),
  [("o sigilo deixa de valer para informações de ex-clientes.", "O sigilo inclui ex-clientes."),
   ("sigilo e discrição são sinônimos no Guia.", "São princípios distintos."),
   ("a discrição refere-se às operações bancárias, e o sigilo, aos boatos internos.", "Inverte as definições."),
   ("o sigilo proíbe a cooperação com órgãos fiscalizadores.", "O princípio da cooperação inclui colaborar com os órgãos fiscalizadores.")],
  pai=None, tags=["Guia de Conduta Ética", "princípios éticos", "sigilo"], var="inédita (sigilo × discrição)", verif=V("12"))

Q(M, "12", """Um analista percebe que um colega altera parâmetros do sistema de monitoramento de PLD para que um cliente não gere alertas, mas prefere não comunicar o fato. Segundo o Guia de Conduta Ética do Banestes, o analista""",
  ("é considerado conivente, pois quem deixa de comunicar conduta contrária ao Guia de que tenha conhecimento passa a ser conivente com ela.", "A comunicação pode ser feita ao Conselho de Conduta Ética ou à área de compliance, inclusive de forma anônima."),
  [("não tem responsabilidade, pois apenas o colega praticou a conduta.", "A omissão em comunicar torna o profissional conivente."),
   ("só deve comunicar se tiver provas documentais completas.", "O Guia exige a comunicação de condutas de que tenha conhecimento."),
   ("deve comunicar diretamente à imprensa.", "O relacionamento com a imprensa é feito só por porta-vozes autorizados; há canais internos."),
   ("só pode comunicar se identificar-se, pois o anonimato é vedado.", "O anonimato é permitido.")],
  pai="ETI-0026", tags=["Guia de Conduta Ética", "dever de comunicar", "PLD"], var="C/E convertida em caso (conivência)", verif=V("12"))

_presentes = [80, 60]
assert sum(_presentes) > 100
Q(M, "12", """Um mesmo fornecedor oferece a um empregado do Banestes um presente de R$ 80,00 em março e outro de R$ 60,00 em dezembro do mesmo ano. Segundo o Guia de Conduta Ética,""",
  ("como a soma no ano civil (R$ 140,00) ultrapassa R$ 100,00 por ofertante, o presente deve ser comunicado por escrito ao Conselho de Conduta Ética, que o destinará a instituição filantrópica.", "O limite é de R$ 100,00 por ano civil, somados os presentes da mesma pessoa física ou jurídica ofertante."),
  [("os dois presentes podem ser aceitos, pois cada um é inferior a R$ 100,00.", "O limite considera a soma no ano civil, por ofertante."),
   ("só o presente de dezembro é permitido, por ser data comemorativa, sem limite de valor.", "Presentes em datas comemorativas também se submetem ao limite."),
   ("o empregado deve devolver os dois presentes e comunicar o fornecedor ao COAF.", "Não há comunicação ao COAF; o excesso é comunicado ao Conselho."),
   ("os presentes podem ser aceitos se forem declarados ao superior imediato, sem limite de valor.", "Há limite de R$ 100,00 por ano civil e por ofertante.")],
  pai="ETI-0027", tags=["Guia de Conduta Ética", "presentes e brindes"], var="regra de presentes cobrada por caso com soma no ano civil", verif=V("12") + "; soma conferida em Python")

Q(M, "12", """O Conselho de Conduta Ética do Sistema Financeiro Banestes é composto por""",
  ("3 titulares e 3 suplentes indicados pela Diretoria e 3 titulares e 3 suplentes eleitos pelos empregados, em composição paritária.", "São 12 pessoas no total; os membros não são remunerados pela função."),
  [("membros indicados exclusivamente pela Diretoria.", "Metade é eleita pelos empregados."),
   ("6 titulares eleitos pelos empregados, sem suplentes.", "A composição é paritária, com titulares e suplentes."),
   ("3 titulares indicados pelo Conselho de Administração e 3 indicados pelo sindicato.", "Não há indicação pelo Conselho de Administração nem pelo sindicato."),
   ("membros do comitê de auditoria e da ouvidoria.", "Não é essa a composição.")],
  pai="ETI-0028", dif=1, tags=["Guia de Conduta Ética", "Conselho de Conduta Ética"], var="C/E convertida em múltipla escolha (composição paritária)", verif=V("12"))

Q(M, "12", """Sobre o funcionamento do Conselho de Conduta Ética do Sistema Financeiro Banestes, é correto afirmar:""",
  ("os membros eleitos têm mandato de 2 anos, com direito a uma reeleição, e o coordenador, designado pela Diretoria entre os titulares, tem mandato de 1 ano.", "As deliberações são por maioria da totalidade dos membros, e o coordenador tem voto de qualidade no empate."),
  [("os membros eleitos têm mandato de 4 anos, vedada a reeleição.", "Mandato de 2 anos, com uma reeleição."),
   ("os membros recebem remuneração adicional pela função.", "Não são remunerados pela função."),
   ("o coordenador é eleito pelos empregados para mandato de 2 anos.", "É designado pela Diretoria, com mandato de 1 ano."),
   ("as deliberações exigem unanimidade.", "Basta a maioria da totalidade dos membros.")],
  pai="ETI-0028", dif=3, tags=["Guia de Conduta Ética", "Conselho de Conduta Ética"], var="Conselho cobrado pelas regras de mandato e deliberação", verif=V("12"))

Q(M, "12", """Uma gerente do Banestes concede uma promoção a um amigo próximo por afinidade pessoal, e não por mérito, preterindo colegas mais qualificados. Segundo o Guia de Conduta Ética, essa conduta configura""",
  ("favoritismo, conduta inadequada tratada pelo Guia junto com o nepotismo.", "O Guia veda conceder vantagens a pessoas próximas por favor e não por mérito."),
  [("conduta permitida, pois a gerente tem poder hierárquico para promover.", "O poder hierárquico não autoriza favorecimento."),
   ("nepotismo, porque envolve amigo próximo.", "Nepotismo refere-se a cônjuge, companheiro ou parentes até o terceiro grau; aqui há favoritismo."),
   ("assédio moral.", "Assédio moral é a exposição repetitiva a situações humilhantes."),
   ("incompatibilidade de atividades.", "Refere-se a atividades paralelas que prejudiquem o trabalho.")],
  pai="ETI-0029", tags=["Guia de Conduta Ética", "nepotismo e favoritismo"], var="caso de favoritismo (variação do nepotismo)", verif=V("12"))

Q(M, "12", """Segundo o Guia de Conduta Ética do Banestes, quanto às denúncias de condutas contrárias ao Guia, é correto afirmar:""",
  ("o anonimato é permitido, e compete ao Conselho de Conduta Ética proteger os denunciantes contra retaliação.", "Canais: e-mail, correspondência, intranet, canal externo no site e reunião presencial, entre outros."),
  [("a denúncia anônima é vedada e será arquivada.", "O anonimato é permitido."),
   ("as denúncias só podem ser feitas pessoalmente ao Diretor-Presidente.", "Há diversos canais."),
   ("acusar colega sabendo-o inocente é conduta aceitável, se feita de boa-fé aparente.", "Denúncia falsa é conduta inadequada."),
   ("o Guia fixa penas próprias, como multa, aplicadas pelo Conselho.", "O Guia não fixa penas próprias; aplicam-se as sanções do Manual de RH e normas internas.")],
  pai="ETI-0005", tags=["Guia de Conduta Ética", "canal de denúncias"], var="Conselho cobrado pelas atribuições e canais", verif=V("12"))

Q(M, "12", """Um empregado publica em rede social montagens de fotos e mensagens depreciativas sobre um colega, de forma intencional e repetida. Segundo o Guia de Conduta Ética do Banestes, essa conduta caracteriza""",
  ("cyberbullying.", "Bullying praticado por meios digitais; viola também o princípio do respeito e a Política de Conduta nas Mídias Sociais."),
  [("liberdade de expressão.", "Esse princípio exige críticas com responsabilidade e respeito."),
   ("conflito de interesses.", "Refere-se ao julgamento profissional afetado por interesses pessoais."),
   ("incompatibilidade de atividades.", "Refere-se a atividades paralelas que prejudiquem o trabalho."),
   ("assédio sexual.", "Envolve coerção para obter favorecimento sexual.")],
  pai=None, dif=1, tags=["Guia de Conduta Ética", "condutas inadequadas"], var="inédita (cyberbullying)", verif=V("12"))

Q(M, "12", """Segundo o Guia de Conduta Ética do Banestes, é exemplo de **conflito de interesses** que o profissional deve evitar:""",
  ("tomar empréstimo pessoal de um cliente atendido por ele na agência.", "O Guia cita tomar empréstimos de clientes ou fornecedores, dirigir ou prestar serviços a eles e buscar tratamento preferencial."),
  [("participar de treinamento oferecido pelo banco.", "Atende ao princípio da capacitação."),
   ("priorizar a oferta de produtos do SFB ao cliente, sem induzi-lo a erro.", "Expressão do princípio da lealdade."),
   ("comunicar ao Conselho uma conduta irregular de colega.", "É dever do profissional."),
   ("recusar presente de fornecedor acima do limite anual.", "Conduta adequada.")],
  pai=None, dif=1, tags=["Guia de Conduta Ética", "conflito de interesses"], var="inédita (conflito de interesses)", verif=V("12"))

Q(M, "12", """O princípio da **hierarquia**, no Guia de Conduta Ética do Banestes, significa""",
  ("cumprir as determinações dos superiores, respeitando o estatuto, as normas internas e o próprio Guia, o que não obriga a cumprir ordem antiética ou ilegal.", "A hierarquia está limitada pelas normas e pelo próprio Guia."),
  [("cumprir qualquer ordem do superior, ainda que contrária às normas internas.", "A hierarquia não alcança ordens ilegais ou antiéticas."),
   ("aceitar críticas e formas diferentes de pensar.", "Definição de tolerância."),
   ("colaborar com os órgãos fiscalizadores.", "Definição de cooperação."),
   ("priorizar os produtos e serviços do SFB.", "Parte do princípio da lealdade.")],
  pai=None, tags=["Guia de Conduta Ética", "princípios éticos"], var="inédita (hierarquia)", verif=V("12"))

Q(M, "12", """Sobre o relacionamento dos profissionais do SFB com clientes e com a imprensa, o Guia de Conduta Ética do Banestes estabelece que""",
  ("não se deve prometer resultados futuros ou ausência de risco ao cliente, e o relacionamento com a imprensa é formal, feito apenas por porta-vozes autorizados.", "Também se exige atender com cortesia e clareza e não induzir o cliente a erro."),
  [("o gerente pode garantir rentabilidade a clientes de fundos conservadores.", "É vedado prometer resultados ou ausência de risco."),
   ("qualquer empregado pode dar entrevistas em nome do banco, desde que fora do expediente.", "Só porta-vozes autorizados falam com a imprensa."),
   ("as solicitações negativas não precisam ser respondidas aos clientes.", "As respostas, inclusive negativas, devem ser tempestivas."),
   ("o empregado pode agir em nome do cliente mediante simples autorização verbal.", "Exige-se autorização formal.")],
  pai=None, tags=["Guia de Conduta Ética", "relacionamento com clientes"], var="inédita (relacionamento com clientes e imprensa)", verif=V("12"))

Q(M, "12", """Pelo Título II do Guia de Conduta Ética do Banestes, o profissional que atua no mercado financeiro e de capitais (tesouraria, gestão de recursos, distribuição de investimentos) deve, entre outros deveres,""",
  ("não usar informação privilegiada em benefício próprio ou de terceiros, não prometer rentabilidade e comunicar ao superior imediato situações de conflito de interesses.", "Também assina o Termo de Responsabilidade e Compromisso."),
  [("negociar livremente valores mobiliários com base em informações ainda não divulgadas ao mercado.", "Uso de informação privilegiada é vedado (e pode ser crime)."),
   ("garantir rentabilidade mínima aos investidores para fidelizá-los.", "É vedado prometer rentabilidade."),
   ("deixar de observar os princípios gerais do Guia, substituídos pelo Título II.", "Os princípios gerais continuam valendo."),
   ("comunicar conflitos de interesses apenas à imprensa.", "A comunicação é ao superior imediato.")],
  pai=None, tags=["Guia de Conduta Ética", "mercado de capitais", "informação privilegiada"], var="inédita (Título II do Guia)", verif=V("12"))

Q(M, "12", """No Guia de Conduta Ética do Banestes, o princípio da **administração financeira pessoal** orienta o profissional a""",
  ("manter o endividamento pessoal sob controle.", "Um bancário superendividado fica vulnerável a pressões e fraudes."),
  [("aplicar seus recursos apenas em produtos do SFB.", "O princípio não impõe onde investir."),
   ("evitar qualquer tipo de empréstimo pessoal.", "Não há proibição de crédito; a ideia é o controle do endividamento."),
   ("declarar seu patrimônio ao Conselho de Conduta Ética anualmente.", "Não há essa obrigação no princípio."),
   ("administrar as finanças dos clientes de forma discricionária.", "Não guarda relação com o princípio.")],
  pai=None, dif=1, tags=["Guia de Conduta Ética", "princípios éticos"], var="inédita (administração financeira pessoal)", verif=V("12"))

Q(M, "12", """Sobre ética, moral e códigos de conduta, é correto afirmar:""",
  ("a moral é o conjunto de normas e valores aceitos por um grupo social em determinado tempo, e a ética é a reflexão sobre esses fundamentos do agir certo ou errado.", "No ambiente corporativo, o código de conduta formaliza valores, princípios e condutas esperadas e vedadas."),
  [("ética e moral são sinônimos perfeitos, sem qualquer distinção conceitual.", "A ética reflete sobre a moral."),
   ("o código de conduta é facultativo para empresas estatais como o Banestes.", "É obrigatório pela Lei 13.303/2016 (art. 9º, §1º)."),
   ("a moral é universal e imutável, válida igualmente em todas as épocas.", "A moral varia conforme o grupo e o tempo."),
   ("o código de conduta substitui as leis aplicáveis à instituição.", "O código complementa, não substitui, a legislação.")],
  pai=None, dif=1, tags=["ética", "moral", "código de conduta"], var="inédita (ética × moral)", verif=V("12"))

Q(M, "12", """Os valores institucionais declarados no Guia de Conduta Ética do Banestes (versão de 2020) são:""",
  ("foco no cliente, inovação, comprometimento, rentabilidade, ética e respeito e valorização dos empregados.", "A missão menciona o desenvolvimento sustentável do Espírito Santo, e a visão, ser o melhor banco de varejo do estado."),
  [("lucro máximo, expansão nacional, competitividade e redução de custos.", "Não são os valores do Guia."),
   ("legalidade, impessoalidade, moralidade, publicidade e eficiência.", "São os princípios da administração pública (LIMPE), citados no relacionamento com o setor público."),
   ("integridade, transparência, equidade, responsabilização e sustentabilidade.", "São os princípios de governança do IBGC."),
   ("ser o maior banco de investimento do Brasil.", "Não corresponde à missão, visão ou valores do Guia.")],
  pai=None, tags=["Guia de Conduta Ética", "missão, visão e valores"], var="inédita (valores institucionais)", verif=V("12"))

# =====================================================================
# §17 e §21 – Compliance, anticorrupção, governança e ESG – pais ETI-0030 a ETI-0035
# =====================================================================
Q(M, "17", """Uma empresa é processada com base na Lei 12.846/2013 porque um representante pagou propina a um servidor público para obter um contrato. Sobre o caso, é correto afirmar:""",
  ("a empresa responde objetivamente, e a multa administrativa pode variar de 0,1% a 20% do faturamento bruto do exercício anterior ao processo, podendo ser reduzida se houver programa de integridade efetivo.", "A lei também prevê acordo de leniência e alcança atos contra a administração pública nacional ou estrangeira."),
  [("a empresa só responde se ficar provado o dolo de seus diretores.", "A responsabilidade da pessoa jurídica é objetiva."),
   ("a lei prevê pena de reclusão para a pessoa jurídica.", "A responsabilidade da PJ é civil e administrativa."),
   ("a multa é fixa, de R$ 20 milhões.", "Confunde com o teto da multa da Lei 9.613/1998."),
   ("a lei não se aplica, pois o ato foi praticado por representante, e não por empregado.", "A PJ responde pelos atos lesivos praticados em seu interesse ou benefício.")],
  pai="ETI-0030", tags=["anticorrupção", "Lei 12.846/2013"], var="Lei Anticorrupção cobrada por caso com multa e integridade", verif=V("17"))

Q(M, "17", """Na Lei 12.846/2013 (Lei Anticorrupção), o acordo de leniência""",
  ("pode ser celebrado com a pessoa jurídica que colabore efetivamente com as investigações, e a existência de programa de integridade efetivo também é considerada para reduzir a sanção.", "Leniência e programa de integridade são os dois mecanismos de redução citados pela apostila."),
  [("garante a extinção de todas as sanções, inclusive a reparação do dano.", "A reparação do dano não é afastada."),
   ("é instrumento exclusivo de pessoas físicas acusadas de corrupção.", "A lei trata da pessoa jurídica."),
   ("é celebrado pelo COAF.", "O COAF não celebra acordos de leniência."),
   ("só se aplica a atos contra a administração pública estrangeira.", "A lei alcança atos contra a administração nacional e estrangeira.")],
  pai="ETI-0030", dif=2, tags=["anticorrupção", "acordo de leniência", "programa de integridade"], var="Lei Anticorrupção cobrada pela leniência", verif=V("17"))

Q(M, "17", """No Modelo das Três Linhas (IIA, 2020), a área de concessão de crédito de um banco, que é dona dos riscos de suas operações e executa os controles do dia a dia, situa-se na""",
  ("primeira linha.", "1ª linha: áreas de negócio e operação; 2ª: riscos e compliance; 3ª: auditoria interna."),
  [("segunda linha.", "É a das funções de riscos e compliance, que apoiam e monitoram a 1ª linha."),
   ("terceira linha.", "É a auditoria interna, avaliação independente."),
   ("linha externa, ao lado da auditoria independente.", "Auditoria externa e reguladores atuam de fora do modelo."),
   ("quarta linha.", "O modelo tem três linhas.")],
  pai="ETI-0031", dif=1, tags=["três linhas", "controles internos"], var="três linhas cobradas pela primeira linha", verif=V("17"))

Q(M, "21", """Sobre o Modelo das Três Linhas, é correto afirmar:""",
  ("a auditoria interna, na terceira linha, faz avaliação independente e reporta ao conselho ou ao comitê de auditoria, enquanto a auditoria externa e os reguladores atuam de fora.", "A independência da 3ª linha é a sua característica central."),
  [("a auditoria interna integra a primeira linha, pois executa os controles operacionais.", "Os controles operacionais são da 1ª linha; a auditoria é a 3ª."),
   ("compliance e gestão de riscos formam a terceira linha.", "Formam a segunda linha."),
   ("a auditoria externa é a terceira linha do modelo.", "A auditoria externa atua de fora."),
   ("a segunda linha é responsável pela execução direta das operações de negócio.", "Execução é papel da primeira linha.")],
  pai="ETI-0035", tags=["três linhas", "auditoria interna"], var="três linhas cobradas pelo papel da auditoria", verif=V("21"))

Q(M, "17", """Na classificação ESG, temas como diversidade, relação com comunidades, direitos dos trabalhadores e inclusão e educação financeira dos clientes pertencem à dimensão""",
  ("social (S).", "O \"S\" trata de pessoas, diversidade, comunidades e clientes; inclusão e educação financeira ficam nele."),
  [("ambiental (E).", "Trata de emissões, uso de recursos e risco climático."),
   ("de governança (G).", "Trata de ética, transparência e funcionamento do conselho."),
   ("climática de transição.", "É uma classe de risco climático, não dimensão do ESG."),
   ("de compliance regulatório, fora do ESG.", "Os temas citados são do pilar social.")],
  pai="ETI-0032", dif=1, tags=["ESG", "social"], var="dimensões do ESG (pai cobrava risco de transição)", verif=V("17") + " e §21")

Q(M, "21", """Sobre a Agenda 2030 da ONU, é correto afirmar:""",
  ("foi adotada em 2015 e reúne 17 Objetivos de Desenvolvimento Sustentável e 169 metas, como o ODS 13, ação contra a mudança global do clima.", "Outros exemplos: ODS 1 (erradicação da pobreza) e ODS 8 (trabalho decente e crescimento econômico)."),
  [("reúne 8 objetivos e deve ser cumprida até 2015.", "Confunde com os antigos Objetivos de Desenvolvimento do Milênio."),
   ("é composta por 10 princípios voltados às empresas signatárias.", "São os 10 princípios do Pacto Global."),
   ("é um conjunto de diretrizes para financiamento de projetos por bancos.", "Descreve os Princípios do Equador."),
   ("reúne 17 objetivos e 169 metas, mas trata apenas de temas ambientais.", "Abrange temas sociais, econômicos e ambientais.")],
  pai="ETI-0033", dif=1, tags=["Agenda 2030", "ODS", "ESG"], var="C/E convertida em múltipla escolha (ODS)", verif=V("21"))

Q(M, "21", """A norma do CMN que trata do canal para comunicação de indícios de ilicitude (canal de denúncias) nas instituições financeiras, revogando a Resolução 4.567/2017, é a""",
  ("Resolução CMN 4.859/2020.", "O canal deve permitir comunicações com proteção ao denunciante e sigilo."),
  [("Resolução CMN 4.595/2017.", "Trata da política de conformidade (compliance)."),
   ("Resolução CMN 4.945/2021.", "Trata da PRSAC."),
   ("Resolução CMN 4.968/2021.", "Trata do sistema de controles internos."),
   ("Circular BCB 3.978/2020.", "Trata da prevenção à lavagem de dinheiro.")],
  pai="ETI-0034", tags=["canal de denúncias", "compliance", "normas do CMN"], var="outra norma do quadro (canal de denúncias)", verif=V("21"))

Q(M, "17", """Pela Resolução CMN 4.595/2017, a política de conformidade (compliance) das instituições financeiras deve""",
  ("ser aprovada pelo conselho de administração, com função de conformidade independente que reporte à alta administração.", "A independência evita que a área de negócio controle quem a fiscaliza."),
  [("ser aprovada pelo COAF e executada pela auditoria externa.", "A aprovação é interna, e a função é da própria instituição."),
   ("ficar subordinada à área comercial, para alinhar-se às metas de vendas.", "Comprometeria a independência da função."),
   ("substituir a auditoria interna.", "São funções distintas (2ª e 3ª linhas)."),
   ("ser adotada apenas pelos bancos públicos.", "Aplica-se às instituições financeiras em geral.")],
  pai=None, tags=["compliance", "Res. 4.595/2017"], var="inédita (política de conformidade)", verif=V("17"))

Q(M, "17", """A norma que exige das instituições financeiras um **sistema de controles internos** proporcional ao porte e aos riscos, com segregação de funções, testes periódicos e auditoria interna, substituindo a antiga Resolução 2.554/1998, é a""",
  ("Resolução CMN 4.968/2021.", "Trata do sistema de controles internos."),
  [("Resolução CMN 4.557/2017.", "Gerenciamento integrado de riscos e de capital."),
   ("Resolução CMN 4.595/2017.", "Política de conformidade."),
   ("Resolução BCB 139/2021.", "Relatório GRSAC."),
   ("Resolução CMN 4.966/2021.", "Instrumentos financeiros e perda esperada.")],
  pai=None, tags=["controles internos", "normas do CMN"], var="inédita (controles internos)", verif=V("17"))

Q(M, "21", """Os princípios de governança corporativa do Código das Melhores Práticas do IBGC (6ª edição, 2023) são:""",
  ("integridade, transparência, equidade, responsabilização (accountability) e sustentabilidade.", "Princípios da 6ª edição do Código do IBGC."),
  [("legalidade, impessoalidade, moralidade, publicidade e eficiência.", "Princípios da administração pública (CF, art. 37)."),
   ("transparência, segurança, qualidade dos dados e reciprocidade.", "Parte dos princípios do Open Finance."),
   ("finalidade, adequação, necessidade e livre acesso.", "Princípios da LGPD."),
   ("lucratividade, crescimento, eficiência e inovação.", "Não são princípios do IBGC.")],
  pai=None, dif=1, tags=["governança corporativa", "IBGC"], var="inédita (princípios do IBGC)", verif=V("21"))

Q(M, "21", """Um analista de TI participa da escolha de um fornecedor de software e descobre que o irmão é sócio de uma das empresas concorrentes. Segundo as boas práticas de compliance, a conduta esperada é""",
  ("declarar o conflito de interesses e afastar-se da decisão.", "Conflito de interesses: interesse pessoal que pode influenciar indevidamente decisão profissional."),
  [("continuar no processo, desde que vote a favor de outra empresa.", "A permanência mantém o conflito."),
   ("manter o fato em sigilo para não atrasar a contratação.", "O conflito deve ser declarado."),
   ("informar o irmão sobre as propostas dos concorrentes.", "Seria uso indevido de informação e grave violação ética."),
   ("pedir ao irmão que retire a proposta, sem informar a instituição.", "O conflito deve ser comunicado formalmente.")],
  pai=None, dif=1, tags=["conflito de interesses", "compliance"], var="inédita (conflito de interesses – caso)", verif=V("21"))

Q(M, "17", """São pilares de um programa de integridade efetivo, entre outros,""",
  ("apoio da alta administração (tone at the top), avaliação de riscos, código de conduta, treinamento, canal de denúncias com anonimato e não retaliação, due diligence de terceiros e medidas disciplinares.", "São os pilares listados na apostila 03 §17."),
  [("metas de vendas agressivas e remuneração variável sem controles.", "Isso aumenta o risco de condutas impróprias."),
   ("canal de denúncias que exija identificação obrigatória do denunciante.", "O canal deve admitir anonimato e garantir não retaliação."),
   ("dispensa de due diligence de fornecedores de pequeno porte.", "A due diligence de terceiros é pilar do programa."),
   ("treinamento apenas para a diretoria.", "O treinamento deve alcançar a organização.")],
  pai=None, dif=1, tags=["programa de integridade", "compliance"], var="inédita (pilares do programa de integridade)", verif=V("17"))

Q(M, "17", """Em um banco, o desenvolvedor que escreve o código de um sistema não pode aprovar sua própria mudança nem implantá-la em produção. Esse controle aplica o princípio de""",
  ("segregação de funções.", "Controle interno clássico, que em TI vira perfis de acesso e controle de mudanças."),
  [("rodízio de férias.", "Controle diferente, usado para detectar fraudes que dependem da presença do empregado."),
   ("conheça seu cliente.", "Procedimento de PLD."),
   ("suitability.", "Adequação de investimentos ao perfil do cliente."),
   ("disciplina de mercado.", "Pilar 3 de Basileia II.")],
  pai=None, dif=1, tags=["controles internos", "segregação de funções", "TI"], var="inédita (controle interno de TI)", verif=V("17"))

Q(M, "17", """Pela Resolução CMN 4.945/2021, a Política de Responsabilidade Social, Ambiental e Climática (PRSAC) das instituições financeiras deve""",
  ("ser aprovada pelo conselho de administração, observar os princípios de proporcionalidade e relevância e contar com plano de ação para sua implementação.", "A PRSAC substituiu a antiga PRSA (Res. 4.327/2014)."),
  [("ser aprovada pela CVM antes de sua divulgação.", "A aprovação é interna, pelo conselho."),
   ("tratar apenas de riscos ambientais, sem incluir os sociais e climáticos.", "Inclui riscos social, ambiental e climático."),
   ("ser idêntica para todas as instituições, independentemente de porte.", "Observa proporcionalidade."),
   ("substituir a divulgação do relatório GRSAC.", "O GRSAC é exigido à parte (Res. BCB 139/2021).")],
  pai=None, tags=["ESG", "PRSAC", "finanças sustentáveis"], var="inédita (PRSAC)", verif=V("17"))

Q(M, "17", """Um banco reduz o financiamento a usinas termelétricas a carvão por causa de novas regras de emissões e da queda de demanda por energia fóssil, que podem desvalorizar esses ativos. Pela Res. CMN 4.943/2021, esse tipo de risco é classificado como risco climático""",
  ("de transição.", "Decorre de mudanças regulatórias e de mercado rumo a uma economia de baixo carbono."),
  [("físico.", "Decorre de eventos climáticos extremos, como enchentes e secas."),
   ("operacional.", "Perdas por falhas de processos, pessoas, sistemas ou eventos externos."),
   ("de liquidez.", "Incapacidade de honrar obrigações sem perdas significativas."),
   ("reputacional, sem relação com o clima.", "O caso é expressamente ligado à transição climática.")],
  pai="ETI-0032", dif=2, tags=["ESG", "risco climático"], var="risco de transição cobrado por caso", verif=V("17"))

Q(M, "21", """A sigla ESG refere-se a""",
  ("Environmental, Social and Governance: critérios ambientais, sociais e de governança.", "No Brasil, a regulação bancária fala em riscos social, ambiental e climático."),
  [("Economic, Sustainable and Green: critérios econômicos, sustentáveis e verdes.", "Não é o significado da sigla."),
   ("Ethics, Security and Governance: ética, segurança e governança.", "Não é o significado da sigla."),
   ("Environmental, Solidarity and Growth: meio ambiente, solidariedade e crescimento.", "Não é o significado da sigla."),
   ("Equity, Social and Governance: equidade, sociedade e governança.", "O \"E\" é de Environmental (ambiental).")],
  pai=None, dif=1, tags=["ESG"], var="inédita (sigla ESG)", verif=V("21"))

Q(M, "17", """Pela Lei 13.303/2016 (Lei das Estatais), aplicável ao Banestes como sociedade de economia mista, a empresa deve, entre outros requisitos de governança,""",
  ("ter código de conduta e integridade, área de compliance e de riscos e comitê de auditoria estatutário.", "O código deve prever canal de denúncias, proteção ao denunciante, sanções e treinamento periódico."),
  [("dispensar código de conduta, por já estar sujeita à fiscalização do Banco Central.", "O código é obrigatório."),
   ("submeter seu código de conduta à aprovação do COAF.", "Não há essa exigência."),
   ("contratar empregados sem concurso público, para agilizar a gestão.", "O concurso decorre do art. 37, II, da CF."),
   ("extinguir o conselho de administração.", "O conselho é órgão típico de governança.")],
  pai=None, tags=["governança corporativa", "Lei 13.303/2016", "compliance"], var="inédita (Lei das Estatais)", verif=V("17"))

OBS = [
    "Questões de prova importadas de Ética (ETI-0001 a ETI-0005) estão com `comentario` vazio; as variações geradas a partir delas trazem comentário completo.",
    "ETI-0004 (Banestes 2024, Q48 – \"consciência ambiental\" e os 4 Rs) cobra trecho literal do Guia que não está descrito na apostila 03 §12; por isso não foi usada como pai. Vale conferir no texto oficial do Guia.",
]
