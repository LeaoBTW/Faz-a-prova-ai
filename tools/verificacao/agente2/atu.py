# -*- coding: utf-8 -*-
"""Atualidades do Mercado Financeiro e Digital – variações e inéditas (agente 2).

Base: apostila 03 (revisão de nov/2026), §1–8, §17 e §21. Fatos datados levam a tag
"datado" e a data no comentário. Contas simples (FGC, multiplicador, poupança, meta
contínua) são feitas aqui com assert.
"""
from base import Q, num

M = "ATU"


def V(sec):
    return "Conferido na apostila 03 §%s (revisão nov/2026)" % sec


# =====================================================================
# SFN: estrutura e segmentos – pais ATU-0001, ATU-0007, ATU-0033, ATU-0035
# =====================================================================
Q(M, "1", """No Sistema Financeiro Nacional, a operação em que a instituição capta recursos em nome próprio (por exemplo, em CDB) e os empresta em nome próprio, assumindo o risco de inadimplência do tomador, é típica do mercado""",
  ("de crédito, por meio da intermediação financeira.", "Na intermediação financeira (mercado de crédito) o banco fica devedor do aplicador e credor do tomador; se o tomador não pagar, o banco continua devendo ao depositante."),
  [("de capitais, em que a instituição assume o risco do emissor.", "No mercado de capitais a relação é direta entre emissor e investidor; a instituição apenas distribui e custodia, e o risco é do investidor."),
   ("monetário, voltado ao financiamento de longo prazo das empresas.", "O mercado monetário é de curtíssimo prazo e serve ao controle da liquidez."),
   ("cambial, que converte moeda estrangeira em moeda nacional.", "O mercado de câmbio trata da troca de moedas, não da captação e empréstimo descritos."),
   ("secundário de ações, em que a companhia recebe os recursos.", "No secundário os investidores negociam entre si; a companhia não recebe recursos.")],
  pai="ATU-0001", tags=["SFN", "mercado de crédito", "intermediação financeira"], var="mesma ideia (segmentos do SFN) cobrada pela característica da intermediação", verif=V("1"))

Q(M, "1", """Uma companhia aberta realiza uma oferta pública inicial de ações (IPO). Meses depois, um investidor que comprou ações na oferta as vende a outro investidor na B3. Sobre essas duas operações, é correto afirmar:""",
  ("no IPO, mercado primário, os recursos vão para a companhia; na venda posterior, mercado secundário, os recursos vão para o investidor vendedor.", "A empresa só recebe recursos no primário. O secundário dá liquidez e forma preço, mas o dinheiro passa de um investidor a outro."),
  [("nas duas operações os recursos são destinados à companhia emissora.", "No secundário a companhia não recebe nada."),
   ("o IPO ocorre no mercado secundário e a revenda, no primário.", "Inverte os conceitos."),
   ("as duas operações pertencem ao mercado de crédito e são supervisionadas apenas pelo BCB.", "Ações são valores mobiliários (mercado de capitais), sob supervisão da CVM."),
   ("a revenda na B3 é vedada antes do vencimento das ações.", "Ações não têm vencimento e podem ser negociadas no secundário.")],
  pai="ATU-0033", tags=["mercado de capitais", "mercado primário", "mercado secundário"], var="C/E convertida em múltipla escolha (primário × secundário com caso)", verif=V("1"))

Q(M, "1", """São, respectivamente, o órgão normativo e a entidade supervisora do segmento de previdência complementar **fechada** (fundos de pensão):""",
  ("CNPC e PREVIC.", "O Conselho Nacional de Previdência Complementar edita as normas, e a PREVIC fiscaliza as entidades fechadas (Lei 12.154/2009)."),
  [("CNSP e SUSEP.", "São o normativo e o supervisor de seguros, capitalização e previdência **aberta**."),
   ("PREVIC e CNPC.", "Ordem trocada: a PREVIC é supervisora, o CNPC é normativo."),
   ("CMN e Banco Central.", "Normativo e supervisor do segmento de moeda, crédito, capitais e câmbio."),
   ("CNSP e PREVIC.", "O CNSP não regula a previdência fechada.")],
  pai="ATU-0007", tags=["SFN", "órgãos normativos", "previdência complementar"], var="mesma estrutura em três camadas, segmento da previdência fechada", verif=V("1"))

Q(M, "4", """Um cliente contrata um plano VGBL vendido na agência de um banco. Esse produto é regulado e fiscalizado, respectivamente, por:""",
  ("CNSP e SUSEP.", "Previdência aberta (PGBL e VGBL) pertence ao segmento de seguros privados: normas do CNSP e supervisão da SUSEP."),
  [("CNPC e PREVIC.", "Esses cuidam só da previdência fechada (fundos de pensão)."),
   ("CMN e Banco Central, porque o produto é vendido em agência bancária.", "O canal de venda não muda o segmento do produto."),
   ("CMN e CVM.", "O VGBL não é valor mobiliário."),
   ("CNSP e PREVIC.", "A PREVIC não fiscaliza previdência aberta.")],
  pai="ATU-0007", tags=["SFN", "previdência aberta", "SUSEP"], var="pegadinha clássica: previdência aberta vendida em banco", verif=V("4"))

Q(M, "2", """Integram o Conselho Monetário Nacional (CMN), na composição dada pela Lei 9.069/1995 e vigente em 2026:""",
  ("o Ministro da Fazenda, que o preside, o Ministro do Planejamento e Orçamento e o Presidente do Banco Central.", "São apenas três membros. Desde 2023 voltou a formação Fazenda + Planejamento e Orçamento + BCB."),
  [("o Presidente do Banco Central, que o preside, o Ministro da Fazenda e o Presidente da CVM.", "O presidente do CMN é o Ministro da Fazenda, e o presidente da CVM não é membro (participa da Comoc)."),
   ("o Ministro da Economia, o Secretário Especial de Fazenda e o Presidente do Banco Central.", "Formação de 2019–2022, já superada."),
   ("os nove membros da Diretoria Colegiada do Banco Central.", "Essa é a composição do Copom, não do CMN."),
   ("representantes de bancos, de trabalhadores e do governo, em número superior a vinte.", "Formação anterior ao Plano Real.")],
  pai="ATU-0035", tags=["CMN", "órgãos normativos"], var="composição do CMN com distratores de formações antigas", verif=V("2"))

# =====================================================================
# Banco Central, Copom, Selic e política monetária – pais ATU-0002, ATU-0003, ATU-0026, ATU-0029, ATU-0037, ATU-0044
# =====================================================================
Q(M, "3", """Compete ao Banco Central do Brasil, dentro das diretrizes do CMN,""",
  ("executar a política monetária, utilizando instrumentos como operações de mercado aberto, recolhimento compulsório e redesconto.", "O BCB é o executor da política monetária; o CMN fixa a meta de inflação e os limites dos instrumentos."),
  [("fixar a meta de inflação e o intervalo de tolerância.", "Atribuição do CMN."),
   ("executar a política fiscal, definindo tributos e gastos públicos.", "Política fiscal é conduzida pelo governo e pelo Congresso."),
   ("registrar ofertas públicas de ações e fiscalizar companhias abertas.", "Atribuição da CVM."),
   ("fiscalizar seguradoras e sociedades de capitalização.", "Atribuição da SUSEP.")],
  pai="ATU-0002", tags=["Banco Central", "política monetária"], var="mesma competência com distratores de outros órgãos", verif=V("3"))

Q(M, "3", """Ao manter as contas de reservas bancárias das instituições, receber os recolhimentos compulsórios e atuar como emprestador de última instância, o Banco Central exerce a função de""",
  ("banco dos bancos.", "É a função clássica de banco dos bancos: reservas, compulsório e redesconto (assistência de liquidez)."),
  [("banqueiro do governo.", "Refere-se à guarda das disponibilidades da União (Conta Única do Tesouro)."),
   ("banco emissor.", "Refere-se ao monopólio da emissão de moeda."),
   ("gestor das reservas internacionais.", "Refere-se à administração das reservas em moeda estrangeira."),
   ("agente operador do FGTS.", "Função da Caixa Econômica Federal, não do BCB.")],
  pai="ATU-0002", tags=["Banco Central", "funções do BCB"], var="funções do BCB cobradas pela descrição", verif=V("3"))

Q(M, "3", """Diante de pressões inflacionárias, o Banco Central quer **reduzir** a liquidez do sistema por meio de operações de mercado aberto, de modo a sustentar a taxa Selic efetiva junto à meta. Para isso, ele""",
  ("vende títulos públicos federais, retirando reservas dos bancos.", "Quando o BCB vende títulos, os bancos pagam com reservas, que saem do mercado: política contracionista."),
  [("compra títulos públicos federais, injetando reservas nos bancos.", "Comprar títulos injeta liquidez: efeito expansionista."),
   ("reduz a alíquota do recolhimento compulsório.", "Libera recursos para empréstimo: efeito expansionista, e não é operação de mercado aberto."),
   ("emite papel-moeda para comprar títulos do Tesouro no mercado primário.", "O BCB não financia o Tesouro e emitir moeda amplia a liquidez."),
   ("concede empréstimos diretos ao Tesouro Nacional.", "Vedado pela CF, art. 164, §1º.")],
  pai="ATU-0003", tags=["open market", "política monetária"], var="operação de mercado aberto pelo lado contracionista", verif=V("3"))

Q(M, "3", """Quando o Banco Central **compra** títulos públicos federais no mercado aberto, o efeito esperado é""",
  ("aumentar a liquidez do sistema, pressionando para baixo a taxa de juros de curtíssimo prazo.", "O BCB paga os títulos creditando reservas aos bancos: injeta liquidez (efeito expansionista)."),
  [("reduzir a liquidez, pressionando para cima a taxa de juros.", "Esse é o efeito da venda de títulos."),
   ("financiar diretamente o déficit do Tesouro.", "Compra no secundário regula a liquidez; financiamento direto ao Tesouro é vedado."),
   ("elevar automaticamente a meta da Selic definida pelo Copom.", "A meta é decidida pelo Copom; a operação serve para manter a taxa efetiva perto dela."),
   ("aumentar o recolhimento compulsório dos bancos.", "Compulsório é outro instrumento, alterado por norma.")],
  pai="ATU-0003", dif=1, tags=["open market", "política monetária"], var="operação de mercado aberto pelo lado expansionista", verif=V("3"))

Q(M, "2", """No Sistema Financeiro Nacional, a fixação da **meta de inflação** e do seu intervalo de tolerância compete""",
  ("ao Conselho Monetário Nacional.", "O CMN fixa a meta (hoje 3,0% ± 1,5 p.p., pelo Decreto 12.079/2024); o Copom/BCB persegue a meta definindo a Selic."),
  [("ao Comitê de Política Monetária (Copom).", "O Copom define a meta da Selic, não a meta de inflação."),
   ("à Diretoria Colegiada do Banco Central.", "A diretoria executa a política para atingir a meta."),
   ("ao IBGE, que calcula o IPCA.", "O IBGE apenas mede a inflação."),
   ("à Comissão de Valores Mobiliários.", "A CVM cuida do mercado de valores mobiliários.")],
  pai="ATU-0026", dif=1, tags=["CMN", "meta de inflação", "Copom"], var="pergunta invertida (meta de inflação × meta da Selic)", verif=V("2"))

Q(M, "3", """Em regra, uma **redução** da meta da taxa Selic tende a""",
  ("baratear o crédito, estimular consumo e investimento e reduzir a rentabilidade das aplicações pós-fixadas.", "Juros menores reduzem o custo de captação e de empréstimo e diminuem o rendimento de aplicações atreladas à Selic/CDI."),
  [("valorizar o real, por atrair mais capital estrangeiro.", "Juros menores tendem a reduzir a atração de capital externo, o que pressiona o real para baixo."),
   ("elevar o custo de captação dos bancos.", "Ocorre o contrário."),
   ("reduzir automaticamente a meta de inflação fixada pelo CMN.", "A meta de inflação não é alterada pela decisão do Copom."),
   ("aumentar a inadimplência por encarecer as prestações.", "Encarecimento das prestações decorre de alta dos juros.")],
  pai="ATU-0029", tags=["Selic", "política monetária", "canais de transmissão"], var="efeitos da Selic pelo lado da redução", verif=V("3"))

# meta contínua: verificação mês a mês
_ipca = [("janeiro", 4.6), ("fevereiro", 4.8), ("março", 4.4), ("abril", 4.6), ("maio", 4.7),
         ("junho", 4.9), ("julho", 4.8), ("agosto", 4.6), ("setembro", 4.7), ("outubro", 4.3)]
_seq, _mes = 0, None
for _m, _v in _ipca:
    _seq = _seq + 1 if (_v > 4.5 or _v < 1.5) else 0
    if _seq == 6 and _mes is None:
        _mes = _m
assert _mes == "setembro"
Q(M, "2", """Pelo regime de meta contínua (Decreto 12.079/2024), com meta de 3,0% e tolerância de ±1,5 ponto percentual, suponha a seguinte inflação acumulada em 12 meses (IPCA) em um ano hipotético:

| Mês | jan | fev | mar | abr | mai | jun | jul | ago | set | out |
|---|---|---|---|---|---|---|---|---|---|---|
| IPCA 12 meses (%) | @@ |

A meta passa a ser considerada descumprida no mês de""".replace("@@", " | ".join(num(v, 1) for _, v in _ipca)),
  ("setembro.", "Descumprimento = 6 meses consecutivos fora do intervalo (1,5% a 4,5%). Março (4,4%) quebra a sequência; de abril a setembro são 6 meses seguidos acima de 4,5%."),
  [("junho.", "Conta seis meses desde janeiro, ignorando que março (4,4%) estava dentro do intervalo."),
   ("janeiro.", "Um único mês fora do intervalo não basta: são necessários seis consecutivos."),
   ("abril.", "Abril apenas inicia a sequência de meses fora do intervalo."),
   ("outubro.", "Em outubro a inflação voltou ao intervalo; o descumprimento já ocorrera em setembro.")],
  pai="ATU-0037", dif=3, tags=["meta de inflação", "meta contínua", "CMN"], var="C/E convertida em caso numérico (contagem dos 6 meses consecutivos)", verif=V("2") + "; contagem feita em Python")

Q(M, "3", """Conforme a Lei Complementar 179/2021, o mandato do presidente do Banco Central""",
  ("é de 4 anos, admite uma recondução e começa em 1º de janeiro do terceiro ano do mandato do Presidente da República.", "O descasamento entre os mandatos reforça a autonomia do BCB."),
  [("é de 4 anos, coincidente com o mandato do Presidente da República.", "O mandato começa no terceiro ano do mandato presidencial, justamente para não coincidir."),
   ("é de 5 anos, vedada a recondução.", "Essa é a regra dos dirigentes da CVM."),
   ("é por prazo indeterminado, podendo o presidente do BCB ser exonerado a qualquer tempo pelo Presidente da República.", "A exoneração só ocorre nas hipóteses da lei (inclusive desempenho insuficiente, com aprovação do Senado)."),
   ("é de 2 anos, com uma recondução, e o nome é escolhido pelo CMN.", "A nomeação é do Presidente da República, após aprovação do Senado.")],
  pai="ATU-0044", tags=["Banco Central", "autonomia", "LC 179/2021"], var="C/E convertida em múltipla escolha (regras do mandato)", verif=V("3"))

Q(M, "3", """Sobre o Comitê de Política Monetária (Copom), é correto afirmar:""",
  ("é formado pelo presidente e pelos oito diretores do Banco Central e realiza oito reuniões ordinárias por ano, com divulgação da ata na terça-feira seguinte.", "Reuniões em dois dias, cerca de 45 em 45 dias; o comunicado sai no fim do segundo dia e a ata na terça seguinte."),
  [("é órgão normativo do SFN e edita resoluções sobre a meta de inflação.", "É comitê interno do BCB; quem fixa a meta de inflação é o CMN."),
   ("é formado pelo Ministro da Fazenda, pelo Ministro do Planejamento e pelo presidente do BCB.", "Essa é a composição do CMN."),
   ("reúne-se mensalmente, e a ata é publicada no mesmo dia da decisão.", "São 8 reuniões por ano; a ata sai na terça-feira seguinte."),
   ("publica trimestralmente o Relatório de Estabilidade Monetária, que substituiu o Relatório de Inflação.", "O relatório trimestral passou a se chamar Relatório de Política Monetária (2025).")],
  pai=None, tags=["Copom"], var="inédita (funcionamento do Copom)", verif=V("3"))

Q(M, "3", """Na reunião de 04/11/2026, o Copom""",
  ("manteve a meta da taxa Selic em 13,75% ao ano, interrompendo a sequência de cortes do ciclo iniciado em 2026.", "Dado conferido na apostila 03 §3 (revisão de nov/2026): em 16/09/2026 a Selic foi de 14,00% para 13,75%; em 04/11/2026 foi mantida em 13,75%."),
  [("reduziu a meta da Selic de 14,00% para 13,75% ao ano.", "Esse corte ocorreu na reunião de 16/09/2026."),
   ("elevou a meta da Selic para 14,25% ao ano.", "Não houve alta; a taxa foi mantida."),
   ("manteve a meta da Selic em 15% ao ano.", "A Selic ficou em 15% durante boa parte de 2025, não em nov/2026."),
   ("reduziu a meta da Selic para 13,50% ao ano, no sexto corte consecutivo.", "Os cortes foram interrompidos; a taxa ficou em 13,75%.")],
  pai=None, dif=2, tags=["Selic", "Copom", "datado"], var="inédita (decisão recente do Copom – nov/2026)", verif=V("3"))

# =====================================================================
# Compulsório e multiplicador – pai ATU-0011
# =====================================================================
_dep, _r = 1000, 0.25
_tot = _dep / _r
assert round(_tot) == 4000
Q(M, "3", """Em um modelo simplificado em que o público não retém papel-moeda e os bancos emprestam tudo o que podem, mantendo apenas o recolhimento compulsório de 25% sobre os depósitos à vista, um depósito inicial de R$ 1.000,00 pode gerar, no máximo, depósitos totais no sistema de""",
  ("R$ 4.000,00.", "Multiplicador ≈ 1/r = 1/0,25 = 4; 4 × R$ 1.000,00 = R$ 4.000,00."),
  [("R$ 5.000,00.", "Seria o resultado com compulsório de 20% (1/0,20 = 5)."),
   ("R$ 1.250,00.", "Divide o depósito por 0,80 (parcela livre), em vez de usar o multiplicador 1/r."),
   ("R$ 250,00.", "Este é apenas o valor recolhido sobre o depósito inicial."),
   ("R$ 750,00.", "É só a parcela emprestada na primeira rodada, sem o efeito multiplicador.")],
  pai="ATU-0011", tags=["compulsório", "multiplicador bancário"], var="compulsório cobrado por cálculo do multiplicador", verif=V("3") + "; conta feita em Python")

Q(M, "3", """Uma elevação da alíquota do recolhimento compulsório sobre depósitos à vista tende a""",
  ("reduzir o multiplicador bancário e a capacidade de os bancos criarem moeda escritural, com efeito contracionista.", "Mais recursos ficam retidos no BCB, sobrando menos para empréstimos."),
  [("ampliar o volume de crédito disponível na economia.", "Efeito de uma redução do compulsório."),
   ("reduzir a taxa de juros cobrada pelos bancos.", "Com menos recursos livres, a tendência é de crédito mais caro."),
   ("aumentar o multiplicador bancário.", "O multiplicador (≈ 1/r) cai quando r sobe."),
   ("ser considerada medida de política fiscal.", "Compulsório é instrumento de política monetária.")],
  pai="ATU-0011", dif=1, tags=["compulsório", "política monetária"], var="efeito qualitativo da alteração do compulsório", verif=V("3"))

# =====================================================================
# Poupança – pai ATU-0055
# =====================================================================
_selic = 0.08
_poup = 0.70 * _selic
assert abs(_poup - 0.056) < 1e-12
Q(M, "6", """Pela regra da Lei 12.703/2012, se a meta da taxa Selic estivesse em 8,00% ao ano, a caderneta de poupança renderia""",
  ("70% da meta Selic, ou seja, 5,6% ao ano, mais a TR.", "Com a meta Selic igual ou menor que 8,5% a.a., a poupança rende 70% da meta + TR: 0,70 × 8% = 5,6% a.a."),
  [("0,5% ao mês mais a TR.", "Regra para meta Selic acima de 8,5% a.a. (caso de nov/2026, com a Selic em 13,75%)."),
   ("8,00% ao ano mais a TR.", "A poupança não rende 100% da Selic."),
   ("5,6% ao mês mais a TR.", "O percentual de 5,6% é anual, não mensal."),
   ("6,17% ao ano mais a TR.", "Equivale a 0,5% ao mês capitalizado, regra que não se aplica com Selic de 8%.")],
  pai="ATU-0055", tags=["poupança", "Selic"], var="mesma regra com Selic abaixo de 8,5% (muda o ramo da regra)", verif=V("6") + "; conta feita em Python")

# =====================================================================
# Fintechs e instituições de pagamento – pai ATU-0012
# =====================================================================
Q(M, "5", """A fintech de crédito que realiza operações de empréstimo **exclusivamente com capital próprio**, por meio de plataforma eletrônica, sem captar recursos do público, é a""",
  ("Sociedade de Crédito Direto (SCD).", "A SCD empresta só com capital próprio; pode ceder os créditos, mas não capta do público."),
  [("Sociedade de Empréstimo entre Pessoas (SEP).", "A SEP faz a intermediação (peer-to-peer) entre credores e devedores."),
   ("instituição de pagamento emissora de moeda eletrônica.", "Gere contas de pagamento pré-pagas e não concede empréstimos (salvo autorização como IF)."),
   ("instituição de pagamento credenciadora.", "Credencia estabelecimentos para aceitar cartões (as \"maquininhas\")."),
   ("sociedade prestadora de serviços de ativos virtuais (SPSAV).", "Atua com criptoativos (intermediação, custódia, corretagem).")],
  pai="ATU-0012", dif=1, tags=["fintechs", "SCD", "SEP"], var="SCD × SEP cobradas pela definição", verif=V("5"))

Q(M, "5", """Sobre as instituições de pagamento disciplinadas pela Lei 12.865/2013, é correto afirmar:""",
  ("são reguladas pelo Banco Central, mas não são instituições financeiras, e o saldo em conta de pagamento não tem cobertura do FGC.", "Elas mantêm contas de pagamento pré-pagas; o saldo deve ficar em títulos públicos ou no BCB e não é garantido pelo FGC."),
  [("são instituições financeiras monetárias e criam moeda escritural.", "Não captam depósitos à vista; quem cria moeda escritural são bancos comerciais/múltiplos, Caixa e cooperativas."),
   ("são supervisionadas pela CVM.", "A regulação é do Banco Central."),
   ("o saldo das contas de pagamento é garantido pelo FGC até R$ 250 mil.", "Conta de pagamento de IP não tem cobertura do FGC."),
   ("podem conceder empréstimos com recursos captados do público, independentemente de outra autorização.", "Para emprestar com recursos de terceiros é preciso ser instituição financeira.")],
  pai="ATU-0012", tags=["instituições de pagamento", "fintechs", "FGC"], var="contraste entre tipos de fintech (IP × IF)", verif=V("5"))

Q(M, "5", """Sobre as cooperativas de crédito, é correto afirmar:""",
  ("são instituições financeiras monetárias, sem fins lucrativos, supervisionadas pelo Banco Central, e seus associados contam com a garantia do FGCoop.", "Captam depósitos à vista dos associados (LC 130/2009, alterada pela LC 196/2022); o FGCoop cobre até R$ 250 mil, como o FGC."),
  [("não podem captar depósitos à vista, apenas a prazo.", "Captam depósitos à vista e a prazo dos associados."),
   ("são fiscalizadas pela SUSEP, por terem natureza de seguro mútuo.", "A supervisão é do Banco Central."),
   ("distribuem lucro aos acionistas na forma de dividendos.", "O resultado positivo são as sobras, distribuídas aos cooperados ou reinvestidas."),
   ("estão cobertas pelo FGC dos bancos, sem fundo garantidor próprio.", "As cooperativas têm o FGCoop.")],
  pai=None, tags=["cooperativas de crédito", "FGCoop"], var="inédita (cooperativas de crédito)", verif=V("5"))

Q(M, "6", """Os correspondentes no País (Res. CMN 4.935/2021), como casas lotéricas, farmácias e supermercados,""",
  ("prestam serviços em nome da instituição contratante, como recebimentos e encaminhamento de propostas de crédito, ampliando a capilaridade do atendimento.", "Atuam por conta e sob responsabilidade do banco contratante; são importantes no interior."),
  [("são instituições financeiras autônomas, autorizadas pelo BCB a captar depósitos.", "O correspondente não é instituição financeira e não capta em nome próprio."),
   ("concedem crédito com recursos próprios e assumem o risco do tomador.", "Apenas encaminham propostas; a operação é da instituição contratante."),
   ("são supervisionados pela CVM.", "A norma é do CMN e a contratante responde perante o BCB."),
   ("só podem operar em municípios sem agência bancária.", "Não existe essa restrição.")],
  pai=None, dif=1, tags=["correspondentes bancários", "inclusão financeira"], var="inédita (correspondentes)", verif=V("6"))

# =====================================================================
# Mercado interbancário, CVM e ações – pais ATU-0013, ATU-0047
# =====================================================================
Q(M, "3", """A taxa média dos empréstimos interbancários de um dia, lastreados em Certificados de Depósito Interfinanceiro e registrados na B3, que serve de referência para o CDB "100% do CDI", é a""",
  ("Taxa DI.", "Taxa DI/CDI: operações interbancárias lastreadas em CDI, registradas na B3; anda muito próxima da Selic."),
  [("Taxa Selic efetiva.", "É a média das compromissadas de um dia lastreadas em títulos públicos, registradas no Selic."),
   ("meta da taxa Selic.", "Valor definido pelo Copom, não uma média de mercado."),
   ("Taxa Referencial (TR).", "A TR compõe a remuneração da poupança."),
   ("Taxa de Longo Prazo (TLP).", "Referência dos financiamentos do BNDES.")],
  pai="ATU-0013", tags=["CDI", "taxa DI", "mercado interbancário"], var="CDI cobrado pela taxa de referência (Selic × DI)", verif=V("3"))

Q(M, "4", """Sobre os tipos de ações previstos na Lei 6.404/1976, é correto afirmar:""",
  ("as ordinárias conferem direito a voto, e as preferenciais conferem preferência no recebimento de dividendos ou no reembolso do capital, em geral sem voto ou com voto restrito.", "ON = voto; PN = preferência (sem voto ou com voto restrito). Na B3, ON termina em 3 e PN em 4, 5, 6."),
  [("as preferenciais conferem direito a voto, e as ordinárias, preferência nos dividendos.", "Inverte os direitos."),
   ("as units são títulos de dívida conversíveis em ações.", "Units são pacotes de ações (ON + PN)."),
   ("as preferenciais podem representar até 90% do total de ações nas companhias novas.", "O limite é de 50% do total."),
   ("o detentor de debêntures torna-se sócio da companhia, com direito a voto.", "O debenturista é credor, não sócio.")],
  pai="ATU-0047", tags=["mercado de capitais", "ações"], var="C/E convertida em múltipla escolha (ON × PN)", verif=V("4"))

# =====================================================================
# Basileia e riscos – pai ATU-0017
# =====================================================================
Q(M, "7", """No Acordo de Basileia II, o Pilar 3 corresponde""",
  ("à disciplina de mercado, com exigências de transparência e divulgação de informações.", "Pilar 1: requisitos mínimos de capital; Pilar 2: processo de supervisão; Pilar 3: disciplina de mercado."),
  [("aos requisitos mínimos de capital para os riscos de crédito, mercado e operacional.", "É o Pilar 1."),
   ("ao processo de supervisão e à avaliação interna da adequação de capital.", "É o Pilar 2."),
   ("aos indicadores de liquidez LCR e NSFR.", "Introduzidos por Basileia III."),
   ("ao recolhimento compulsório sobre depósitos à vista.", "Instrumento de política monetária, não pilar de Basileia.")],
  pai="ATU-0017", tags=["Basileia", "regulação prudencial"], var="Basileia cobrada pelos pilares", verif=V("7"))

Q(M, "7", """Entre as inovações de Basileia III, adotada após a crise de 2008, inclui-se""",
  ("a criação de indicadores de liquidez (LCR e NSFR) e de colchões adicionais de capital.", "Basileia III melhorou a qualidade do capital, criou colchões (conservação, contracíclico, sistêmico), índice de alavancagem e LCR/NSFR."),
  [("a primeira exigência de capital mínimo de 8% dos ativos ponderados pelo risco.", "Isso veio com Basileia I (1988)."),
   ("a estruturação da regulação em três pilares.", "Os três pilares são de Basileia II (2004)."),
   ("a eliminação da exigência de capital para o risco operacional.", "O risco operacional continua no Pilar 1."),
   ("a substituição do índice de Basileia pelo recolhimento compulsório.", "São instrumentos com finalidades diferentes.")],
  pai="ATU-0017", dif=2, tags=["Basileia", "regulação prudencial"], var="Basileia cobrada pela evolução dos acordos", verif=V("7"))

Q(M, "7", """Segundo o Relatório de Economia Bancária do Banco Central, o componente que costuma ter o **maior peso** na decomposição do spread do crédito livre no Brasil é""",
  ("o custo da inadimplência.", "A ordem de grandeza típica: inadimplência (maior), despesas administrativas, tributos e FGC, margem financeira."),
  [("a margem financeira (lucro) dos bancos.", "É relevante, mas não costuma ser o maior componente."),
   ("o custo do recolhimento compulsório.", "Afeta o spread, mas não é o principal componente."),
   ("a contribuição ao FGC.", "Entra no grupo de tributos e FGC, de peso menor."),
   ("o custo dos sistemas de pagamento, como o Pix.", "O Pix barateou pagamentos; não é componente relevante do spread.")],
  pai=None, tags=["spread bancário"], var="inédita (decomposição do spread)", verif=V("7"))

Q(M, "7", """**Não** é medida voltada à redução do spread bancário:""",
  ("o aumento das alíquotas do recolhimento compulsório.", "Compulsórios e direcionamentos estão entre os fatores que **elevam** o spread, pois reduzem os recursos livres."),
  [("o cadastro positivo com adesão automática (LC 166/2019).", "Melhora a informação sobre o tomador e reduz o risco."),
   ("a portabilidade de crédito.", "Aumenta a concorrência entre instituições."),
   ("o Open Finance.", "O cliente leva seus dados a outra instituição e obtém oferta melhor."),
   ("a duplicata escritural (Lei 13.775/2018).", "Melhora as garantias e reduz o risco do crédito.")],
  pai=None, tags=["spread bancário", "Open Finance"], var="inédita (medidas de redução do spread – assinale a exceção)", verif=V("7"))

Q(M, "7", """É exemplo de instrumento de **política fiscal**:""",
  ("a elevação da alíquota do IOF sobre operações de crédito.", "Tributo é instrumento fiscal, ainda que afete o crédito."),
  [("a venda de títulos públicos pelo Banco Central no mercado aberto.", "Instrumento de política monetária."),
   ("a alteração da alíquota do recolhimento compulsório.", "Instrumento de política monetária."),
   ("a mudança nas condições do redesconto.", "Instrumento de política monetária."),
   ("a sinalização do Copom sobre os próximos passos da Selic (forward guidance).", "Comunicação da política monetária.")],
  pai=None, dif=1, tags=["política fiscal", "política monetária"], var="inédita (política fiscal × monetária)", verif=V("7"))

Q(M, "7", """O regime fiscal instituído pela Lei Complementar 200/2023, chamado de Regime Fiscal Sustentável ("arcabouço fiscal"),""",
  ("substituiu o teto de gastos da EC 95/2016, limitando o crescimento da despesa a uma parcela do crescimento da receita, com metas de resultado primário.", "É a regra fiscal vigente em 2026, segundo a apostila 03 §7."),
  [("é a norma que fixa a meta de inflação perseguida pelo Banco Central.", "A meta de inflação é fixada pelo CMN (Decreto 12.079/2024)."),
   ("congelou as despesas primárias em termos reais por vinte anos.", "Essa era a regra do teto de gastos (EC 95/2016)."),
   ("autorizou o Banco Central a financiar diretamente o Tesouro.", "Vedado pela Constituição (art. 164, §1º)."),
   ("é instrumento de política monetária conduzido pelo Copom.", "Trata-se de regra de política fiscal.")],
  pai=None, tags=["política fiscal", "arcabouço fiscal"], var="inédita (regra fiscal vigente)", verif=V("7"))

# =====================================================================
# FGC – pai ATU-0028
# =====================================================================
_cobertos = 180_000 + 90_000          # CDB + poupança
_fgc = min(_cobertos, 250_000)
assert _fgc == 250_000
assert 180_000 + 90_000 + 50_000 == 320_000 and 180_000 + 90_000 + 50_000 + 30_000 == 350_000
Q(M, "6", """Paulo tem, em um mesmo conglomerado financeiro, R$ 180 mil em CDB, R$ 90 mil na poupança, R$ 50 mil em cotas de um fundo de renda fixa e R$ 30 mil em debêntures de uma empresa do grupo. Se o banco sofrer liquidação extrajudicial, o FGC garantirá a Paulo""",
  ("R$ 250 mil.", "Só CDB e poupança são cobertos: 180 + 90 = R$ 270 mil, limitado a R$ 250 mil por CPF por conglomerado. Os R$ 20 mil restantes viram crédito na massa liquidanda."),
  [("R$ 270 mil.", "Soma os créditos cobertos, mas ignora o limite de R$ 250 mil."),
   ("R$ 320 mil.", "Inclui indevidamente as cotas do fundo, que não têm cobertura (e são patrimônio segregado)."),
   ("R$ 350 mil.", "Inclui fundo e debêntures, que não têm cobertura do FGC."),
   ("R$ 500 mil.", "Aplica o limite por produto; o limite é por CPF e por conglomerado.")],
  pai="ATU-0028", tags=["FGC", "produtos bancários"], var="FGC cobrado por caso numérico com produtos não cobertos", verif=V("6") + "; conta feita em Python")

Q(M, "6", """**Não** possui cobertura do Fundo Garantidor de Créditos (FGC):""",
  ("a Letra Financeira (LF).", "Letras Financeiras, assim como fundos, debêntures, títulos públicos, CRI/CRA e PGBL/VGBL, não são cobertas."),
  [("a Letra de Crédito do Agronegócio (LCA).", "Coberta pelo FGC."),
   ("o Recibo de Depósito Bancário (RDB).", "Depósito a prazo, coberto."),
   ("a letra de câmbio emitida por financeira.", "Coberta pelo FGC."),
   ("o saldo em conta de depósito à vista.", "Coberto pelo FGC.")],
  pai="ATU-0028", dif=2, tags=["FGC", "produtos bancários"], var="pergunta invertida (produto sem cobertura)", verif=V("6"))

# =====================================================================
# Pix – pai ATU-0069 e inéditas
# =====================================================================
Q(M, "8", """Sobre o Mecanismo Especial de Devolução (MED) do Pix, é correto afirmar, conforme a situação em nov/2026:""",
  ("o MED 2.0, obrigatório desde 02/02/2026, permite rastrear valores fraudados em múltiplas camadas de contas e devolvê-los a partir das contas para onde foram transferidos.", "Dado conferido na apostila 03 §8 (revisão de nov/2026). O MED (2021) permite bloquear e devolver valores em caso de fraude ou falha operacional."),
  [("o MED só se aplica a falhas operacionais das instituições, não a fraudes.", "O MED cobre fraude e falha operacional."),
   ("o MED permite devolver valores em caso de simples desacordo comercial com o vendedor.", "Desacordo comercial não é hipótese do MED."),
   ("o MED 2.0 é opcional para as instituições participantes do Pix.", "É obrigatório desde 02/02/2026."),
   ("o MED 2.0 alcança apenas a primeira conta que recebeu o valor.", "A novidade do MED 2.0 é justamente rastrear várias camadas de contas.")],
  pai="ATU-0069", tags=["Pix", "MED", "fraudes", "datado"], var="C/E convertida em múltipla escolha (MED × MED 2.0)", verif=V("8"))

Q(M, "8", """Sobre o Pix, é correto afirmar:""",
  ("pessoa física pode cadastrar até 5 chaves por conta, e pessoa jurídica, até 20.", "Chaves: CPF/CNPJ, e-mail, celular e chave aleatória. A participação é obrigatória para instituições com mais de 500 mil contas ativas."),
  [("é gerido pela Febraban e liquidado no STR.", "É criado e gerido pelo BCB e liquidado no SPI."),
   ("funciona apenas em dias úteis, no horário comercial.", "Funciona 24 horas por dia, 7 dias por semana."),
   ("é tarifado para pessoas físicas em todas as transferências.", "É gratuito para PF (e MEI) em transferências e compras, salvo situações específicas."),
   ("a participação é facultativa para todas as instituições, independentemente do porte.", "É obrigatória para instituições com mais de 500 mil contas ativas.")],
  pai=None, tags=["Pix"], var="inédita (regras gerais do Pix)", verif=V("8"))

Q(M, "8", """No arranjo Pix, a base de dados mantida pelo Banco Central que associa as chaves Pix às contas transacionais dos usuários é o""",
  ("DICT – Diretório de Identificadores de Contas Transacionais.", "Ao digitar a chave, a instituição consulta o DICT (via API) e obtém os dados do recebedor."),
  [("SPI – Sistema de Pagamentos Instantâneos.", "O SPI liquida as transações nas contas PI."),
   ("STR – Sistema de Transferência de Reservas.", "Liquida transferências entre contas de reservas (ex.: TED de alto valor)."),
   ("Selic – Sistema Especial de Liquidação e de Custódia.", "Custódia e liquidação de títulos públicos federais."),
   ("CIP/Núclea.", "Compensação de boletos, TED e cartões.")],
  pai=None, tags=["Pix", "SPB"], var="inédita (infraestrutura do Pix)", verif=V("8"))

Q(M, "8", """A funcionalidade do Pix, lançada em 16/06/2025, que permite débitos recorrentes (contas de consumo, assinaturas, mensalidades) autorizados uma única vez pelo pagador denomina-se""",
  ("Pix Automático.", "Dado conferido na apostila 03 §8 (revisão de nov/2026): concorrente do débito automático e do boleto."),
  [("Pix Cobrança.", "QR Code com vencimento, juros e multa, alternativa ao boleto."),
   ("Pix por aproximação.", "Pagamento por NFC a partir de carteira digital (fev/2025)."),
   ("Pix Troco.", "Saque de dinheiro em estabelecimento junto com uma compra."),
   ("Mecanismo Especial de Devolução.", "Serve para devolução em caso de fraude ou falha operacional.")],
  pai=None, dif=1, tags=["Pix", "Pix Automático", "datado"], var="inédita (funcionalidades do Pix)", verif=V("8"))

# =====================================================================
# Open Finance – pais ATU-0025, ATU-0027
# =====================================================================
Q(M, "8", """No Open Finance brasileiro, a fase que permitiu a **iniciação de transação de pagamento** (por exemplo, um Pix iniciado por outra instituição, sem abrir o aplicativo do banco) foi a""",
  ("fase 3.", "Fase 1: dados públicos; fase 2: dados cadastrais e transacionais; fase 3: iniciação de pagamento e encaminhamento de propostas de crédito; fase 4: investimentos, câmbio, seguros e previdência."),
  [("fase 1.", "Tratou só dos dados públicos das instituições."),
   ("fase 2.", "Tratou do compartilhamento de dados cadastrais e transacionais."),
   ("fase 4.", "Tratou de investimentos, câmbio, seguros, previdência e outros."),
   ("nenhuma, pois o Open Finance compartilha apenas dados, não serviços.", "O Open Finance compartilha dados **e** serviços.")],
  pai="ATU-0025", tags=["Open Finance"], var="Open Finance cobrado pelas fases de implantação", verif=V("8"))

Q(M, "8", """No Open Finance, o consentimento dado pelo cliente para o compartilhamento de dados""",
  ("deve ter finalidade determinada e prazo (em regra até 12 meses, renovável) e pode ser revogado a qualquer momento.", "Consentimento livre, informado, prévio e inequívoco, com finalidade e prazo; é o que torna o compartilhamento compatível com o sigilo bancário e a LGPD."),
  [("é concedido uma única vez e vale por prazo indeterminado para qualquer finalidade.", "Exige finalidade determinada e prazo."),
   ("é irrevogável durante o prazo contratado.", "Pode ser revogado a qualquer momento."),
   ("é dispensado quando os dados são compartilhados entre instituições do segmento S1.", "Não há dispensa: o compartilhamento sempre depende do consentimento."),
   ("deve ser autorizado pela CVM em cada operação.", "O Open Finance é regulado pelo BCB e pelo CMN; quem autoriza é o cliente.")],
  pai="ATU-0027", tags=["Open Finance", "consentimento"], var="Open Finance cobrado pelas regras do consentimento", verif=V("8"))

Q(M, "8", """Segundo a apostila de referência (dados de julho de 2026), sobre o Open Finance no Brasil é correto afirmar:""",
  ("o dashboard oficial registrava mais de 208 milhões de consentimentos ativos, e a participação é obrigatória para instituições dos segmentos S1 e S2.", "Dado conferido na apostila 03 §8 (revisão de nov/2026): mais de 208 milhões de consentimentos ativos em jul/2026."),
  [("a participação é obrigatória para todas as instituições autorizadas, inclusive as de pequeno porte.", "É obrigatória para S1 e S2; voluntária para as demais."),
   ("o Open Finance deixou de existir com a criação do Drex.", "Os dois convivem; o Drex é outro projeto."),
   ("o compartilhamento se restringe a dados bancários, por isso o nome Open Banking foi mantido.", "Em 2022 passou a se chamar Open Finance por abranger investimentos, câmbio, seguros e previdência."),
   ("o segmento de seguros participa por meio do próprio Open Finance, regulado pelo BCB.", "O segmento de seguros tem o Open Insurance, regulado pela SUSEP.")],
  pai=None, tags=["Open Finance", "datado"], var="inédita (escala e participação do Open Finance – jul/2026)", verif=V("8"))

# =====================================================================
# Drex, criptoativos, inovação – pai ATU-0068 e inéditas
# =====================================================================
Q(M, "8", """Sobre o Drex, considerando a situação em nov/2026, é correto afirmar:""",
  ("o Banco Central desligou a plataforma de testes baseada em DLT em nov/2025, e a primeira fase, prevista para o segundo semestre de 2026, é restrita a instituições e voltada à reconciliação de gravames.", "Dado conferido na apostila 03 §8 (revisão de nov/2026). Há também o PL 4.212/2025 em tramitação."),
  [("já está disponível para pagamentos do público em geral, substituindo o Pix.", "Não está disponível ao público e não substitui o Pix."),
   ("é uma criptomoeda descentralizada, sem controle do Banco Central.", "É infraestrutura regulada e controlada pelo BCB."),
   ("substituiu o papel-moeda, que deixou de ter curso legal.", "O Drex não substitui o dinheiro físico."),
   ("continua operando na plataforma Hyperledger Besu do piloto de 2023–2024, aberta ao varejo.", "A plataforma de testes em DLT foi desligada em nov/2025.")],
  pai=None, tags=["Drex", "CBDC", "datado"], var="inédita (estágio atual do Drex – nov/2026)", verif=V("8"))

Q(M, "8", """Sobre a regulação dos criptoativos no Brasil (Lei 14.478/2022 e Resoluções BCB 519, 520 e 521/2025, em vigor desde 02/02/2026), é correto afirmar:""",
  ("as sociedades prestadoras de serviços de ativos virtuais (SPSAV) dependem de autorização do Banco Central, mas ativos virtuais que sejam valores mobiliários continuam sob a CVM.", "Situação conferida na apostila 03 §8 (revisão de nov/2026): a 519 trata da autorização, a 520 cria as SPSAV (intermediária, custodiante, corretora) e a 521 enquadra certas operações no mercado de câmbio; vigência desde 02/02/2026."),
  [("os criptoativos passaram a ter curso legal e devem ser aceitos em pagamentos.", "Não são moeda de curso legal."),
   ("os saldos mantidos em corretoras de criptoativos têm cobertura do FGC.", "Criptoativos não têm cobertura do FGC."),
   ("a regulação das prestadoras foi atribuída à SUSEP.", "A regulação é do Banco Central (Decreto 11.563/2023)."),
   ("as SPSAV estão dispensadas das regras de prevenção à lavagem de dinheiro.", "Estão sujeitas às regras de PLD (inclusive comunicação de transferências com carteiras autocustodiadas).")],
  pai=None, tags=["criptoativos", "SPSAV", "datado"], var="inédita (marco dos criptoativos)", verif=V("8"))

Q(M, "8", """Segundo Clayton Christensen, é exemplo típico de **inovação disruptiva** no setor bancário:""",
  ("uma fintech que começa atendendo um público ignorado pelos grandes bancos, com produto mais simples e barato, e depois avança até disputar os clientes desses bancos.", "A disrupção começa na base do mercado (público pouco lucrativo ou desassistido) e sobe até ameaçar os líderes."),
  [("um grande banco que acrescenta novas funções ao seu aplicativo para clientes de alta renda.", "Melhoria para clientes existentes: inovação incremental (de sustentação)."),
   ("a redução do tempo de compensação de cheques por um banco tradicional.", "Aperfeiçoamento de processo existente."),
   ("a ampliação do horário de funcionamento das agências.", "Melhoria incremental no canal tradicional."),
   ("o lançamento de um cartão premium com mais benefícios para os clientes mais rentáveis.", "Foco nos clientes mais exigentes: inovação de sustentação.")],
  pai="ATU-0068", tags=["ruptura digital", "inovação disruptiva", "fintechs"], var="conceito de Christensen cobrado por exemplo", verif=V("8"))

Q(M, "8", """Um banco licenciado disponibiliza, por meio de APIs, sua infraestrutura regulada para que uma rede varejista ofereça contas e cartões com a marca própria do varejista. Esse modelo é conhecido como""",
  ("Banking as a Service (BaaS).", "No BaaS o banco fornece a infraestrutura e o licenciamento, e a empresa não financeira oferece os serviços com sua marca (embedded finance)."),
  [("sandbox regulatório.", "Ambiente de testes temporário, com regras flexibilizadas, autorizado pelo regulador."),
   ("Open Finance.", "Compartilhamento de dados e serviços entre instituições autorizadas mediante consentimento."),
   ("unbundling.", "Desagregação dos serviços que antes eram vendidos em pacote pelo banco."),
   ("correspondente no País.", "O correspondente presta serviços em nome do banco, sem oferecer produtos com marca própria.")],
  pai=None, tags=["ruptura digital", "BaaS"], var="inédita (modelos de negócio digitais)", verif=V("8"))

Q(M, "8", """O ambiente controlado em que o BCB, a CVM e a SUSEP autorizam, temporariamente e com regras flexibilizadas, o teste de produtos e serviços financeiros inovadores é denominado""",
  ("sandbox regulatório.", "No BCB, regulado pela Res. CMN 4.865/2020 e pela Res. BCB 29/2020."),
  [("LIFT – Laboratório de Inovações Financeiras e Tecnológicas.", "Iniciativa do BCB com a Fenasbac para desenvolver protótipos, sem flexibilização de regras para operar com clientes."),
   ("Agenda BC#.", "Agenda de inovação do BCB (inclusão, competitividade, transparência, educação, sustentabilidade)."),
   ("Banking as a Service.", "Modelo de negócio de oferta de infraestrutura bancária via API."),
   ("Open Insurance.", "Compartilhamento de dados no setor de seguros.")],
  pai=None, dif=1, tags=["ruptura digital", "sandbox regulatório"], var="inédita (sandbox regulatório)", verif=V("8"))

# =====================================================================
# Consumidor, educação e inclusão financeira – §17 e §21
# =====================================================================
Q(M, "17", """Um cliente registrou reclamação no SAC do banco e não obteve solução. Ao recorrer à ouvidoria da instituição, nos termos da Res. CMN 4.860/2020, ele deve receber resposta em até""",
  ("10 dias úteis, prorrogáveis excepcionalmente, com justificativa, por mais 10 dias úteis.", "A ouvidoria é a segunda instância de atendimento."),
  [("5 dias corridos, improrrogáveis.", "O prazo é de 10 dias úteis."),
   ("30 dias corridos, como no Código de Defesa do Consumidor.", "O CDC não fixa esse prazo para a ouvidoria."),
   ("10 dias úteis, improrrogáveis.", "Admite prorrogação excepcional e justificada."),
   ("24 horas, por se tratar de canal de última instância.", "A ouvidoria não tem esse prazo; e o cliente pode ainda recorrer a órgãos externos.")],
  pai=None, tags=["proteção do consumidor", "ouvidoria"], var="inédita (ouvidoria)", verif=V("17"))

Q(M, "17", """A Lei 14.181/2021 (Lei do Superendividamento), ao alterar o Código de Defesa do Consumidor,""",
  ("prevê a preservação do mínimo existencial e permite a repactuação das dívidas com todos os credores, em plano de pagamento de até 5 anos.", "Também consagra o crédito responsável: informar o CET e avaliar a capacidade de pagamento do consumidor."),
  [("perdoa automaticamente as dívidas bancárias de consumidores de baixa renda.", "Não há perdão automático; há repactuação."),
   ("aplica-se a pessoas jurídicas em recuperação judicial.", "Protege a pessoa física de boa-fé."),
   ("proíbe os bancos de conceder crédito consignado.", "Não há essa proibição."),
   ("limita os juros do cheque especial a 8% ao mês.", "Esse limite vem da Res. CMN 4.765/2019.")],
  pai=None, tags=["proteção do consumidor", "superendividamento"], var="inédita (superendividamento)", verif=V("17"))

Q(M, "6", """Sobre os limites de encargos em produtos de crédito para pessoa física, é correto afirmar:""",
  ("pela Lei 14.690/2023, desde janeiro de 2024 os juros e encargos do rotativo e do parcelamento da fatura do cartão não podem ultrapassar 100% do valor original da dívida.", "E os juros do cheque especial são limitados a 8% ao mês pela Res. CMN 4.765/2019."),
  [("os juros do rotativo do cartão estão limitados a 8% ao mês.", "O limite de 8% ao mês é do cheque especial."),
   ("os juros do cheque especial não têm qualquer limite.", "Limitados a 8% ao mês (Res. CMN 4.765/2019)."),
   ("os encargos do rotativo do cartão podem chegar a 300% do valor original.", "O teto é de 100% do valor original."),
   ("o limite de 100% aplica-se apenas ao crédito consignado.", "A regra da Lei 14.690/2023 trata do rotativo e do parcelamento da fatura.")],
  pai=None, tags=["proteção do consumidor", "cartão de crédito", "cheque especial"], var="inédita (limites de encargos)", verif=V("6"))

Q(M, "21", """A Estratégia Nacional de Educação Financeira (ENEF), renovada pelo Decreto 10.393/2020,""",
  ("é coordenada pelo Fórum Brasileiro de Educação Financeira (FBEF) e busca promover a educação financeira, securitária, previdenciária e fiscal da população.", "Educação e inclusão financeira são temas do \"S\" do ESG e da agenda de proteção ao consumidor."),
  [("é coordenada exclusivamente pela Febraban, sem participação de órgãos públicos.", "É coordenada pelo FBEF, que reúne órgãos públicos."),
   ("obriga os bancos a conceder crédito a todos os clientes que participarem de cursos.", "Não há essa obrigação."),
   ("substituiu as regras do CDC aplicáveis às instituições financeiras.", "O CDC continua aplicável (Súmula 297 do STJ)."),
   ("trata apenas da inclusão digital por meio do Pix.", "O escopo é amplo; o Pix é uma das ferramentas de inclusão.")],
  pai=None, tags=["educação financeira", "inclusão financeira"], var="inédita (ENEF)", verif=V("21"))

# =====================================================================
# Finanças sustentáveis e Res. 4.966 – pai ATU-0074 e inéditas
# =====================================================================
Q(M, "17", """Uma enchente destrói armazéns dados em garantia em operações de crédito rural, causando perdas a um banco. Pela classificação da Res. CMN 4.943/2021, trata-se de exemplo de risco""",
  ("climático físico.", "Risco climático físico: perdas por eventos climáticos extremos (enchentes, secas)."),
  [("climático de transição.", "Decorre de mudanças regulatórias e de mercado rumo a uma economia de baixo carbono."),
   ("de mercado.", "Perdas por variação de preços de ativos (juros, câmbio, ações)."),
   ("de liquidez.", "Incapacidade de honrar obrigações sem perdas significativas."),
   ("social.", "Ligado a violações de direitos e garantias fundamentais ou interesses comuns.")],
  pai=None, tags=["finanças sustentáveis", "risco climático", "ESG"], var="inédita (risco climático físico × de transição)", verif=V("17"))

Q(M, "17", """Uma instituição divulga como "investimento verde" um fundo que, na prática, não aplica critérios ambientais na escolha dos ativos. Essa prática é chamada de""",
  ("greenwashing.", "Propaganda \"verde\" enganosa, que gera risco reputacional e de conformidade."),
  [("green bond.", "Título de dívida cujos recursos financiam projetos com benefício ambiental."),
   ("Princípios do Equador.", "Diretrizes socioambientais para financiamento de projetos."),
   ("PRSAC.", "Política de Responsabilidade Social, Ambiental e Climática exigida pela Res. CMN 4.945/2021."),
   ("relatório GRSAC.", "Relatório de divulgação de riscos e oportunidades sociais, ambientais e climáticos (Res. BCB 139/2021).")],
  pai=None, dif=1, tags=["finanças sustentáveis", "greenwashing", "ESG"], var="inédita (greenwashing)", verif=V("17"))

Q(M, "17", """Pela Res. CMN 4.966/2021, em vigor desde 1º/1/2025, um crédito classificado como ativo com problema de recuperação (por exemplo, com atraso superior a 90 dias) fica no""",
  ("estágio 3, com provisão para a perda esperada de toda a vida do instrumento e sem reconhecimento de receita de juros ainda não recebida.", "Estágio 3: ativo problemático, perda esperada de vida inteira e stop accrual."),
  [("estágio 1, com provisão para a perda esperada dos próximos 12 meses.", "O estágio 1 é para créditos sem aumento significativo de risco."),
   ("estágio 2, por ter apenas aumento significativo do risco de crédito.", "Atraso superior a 90 dias caracteriza ativo problemático (estágio 3)."),
   ("nível H da antiga Res. 2.682/1999, com provisão de 100%.", "Os níveis AA a H foram substituídos pelo modelo de perda esperada."),
   ("estágio 3, com provisão baseada apenas na perda já incorrida.", "A 4.966 adota a lógica de perda esperada, não incorrida.")],
  pai="ATU-0074", tags=["Res. 4.966", "provisão", "perda esperada"], var="C/E convertida em múltipla escolha (estágio 3)", verif=V("17"))

OBS = [
    "ATU-0011 (Banestes 2024, Q33): o gabarito oficial (D) descreve o compulsório como \"reservas de emergência\" que as instituições usam em crises \"a critério do Banco Central\". A apostila 03 §3.6 apresenta o compulsório sobretudo como instrumento de controle da liquidez (reduz o multiplicador). A questão importada não foi alterada; as variações ATU (compulsório) cobram a visão da apostila.",
    "Questões de prova importadas de Atualidades (ATU-0001 a ATU-0025) estão com `comentario` vazio. As variações geradas a partir delas trazem comentário completo. ATU-0004, ATU-0005, ATU-0010 e ATU-0021 estão anuladas e não foram usadas como pai.",
]
