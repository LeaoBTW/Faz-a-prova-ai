/*
 * GERADO por tools/comentarios/montar.py a partir de tools/comentarios/*.txt. Não edite aqui.
 * Comentários revisados das questões importadas: justificam o gabarito e as alternativas erradas.
 * Aplicado depois de banco/correcoes.js (no app e em tools/validar_banco.py).
 */
window.CORRECOES = window.CORRECOES || [];

CORRECOES.push({
  "id": "ESP-ARQ-0001",
  "campos": {
    "comentario": "**Gabarito: C.** O padrão **Saga** substitui a transação distribuída (2PC) por uma sequência de transações locais; se uma etapa falha, transações de compensação desfazem as anteriores. Pode ser coreografada (eventos) ou orquestrada (um coordenador).\n\n- **A:** Circuit Breaker interrompe chamadas a um serviço que está falhando, para evitar falhas em cascata.\n- **B:** API Gateway é o ponto de entrada único dos clientes.\n- **D:** Strangler Fig é a migração gradual de um monolito para microsserviços.\n- **E:** Sidecar é um contêiner auxiliar ao lado do serviço (logs, proxy, segurança)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-ARQ-0002",
  "campos": {
    "comentario": "**Gabarito: C.** No MVC, o **Controller** recebe as entradas do usuário, aciona o Model e escolhe a View que será exibida.\n\n- **A:** A View apenas apresenta os dados.\n- **B:** O Model guarda os dados e as regras de negócio; não trata a entrada do usuário.\n- **D:** DAO é padrão de acesso a dados, não faz parte do trio MVC.\n- **E:** Presenter pertence ao padrão MVP, variação do MVC."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-ARQ-0003",
  "campos": {
    "comentario": "**Gabarito: Errado.** Em camadas **fechadas** (estritas), cada camada só pode usar a camada imediatamente inferior: a apresentação fala com o negócio, e o negócio fala com os dados. Pular camadas só é permitido na arquitetura em camadas **abertas** (relaxadas)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-ARQ-0004",
  "campos": {
    "comentario": "**Gabarito: B.** O **API Gateway** é o ponto de entrada único: roteia requisições, agrega respostas e centraliza preocupações transversais como autenticação, limitação de taxa e TLS.\n\n- **A:** Service Mesh cuida da comunicação **interna** serviço a serviço, por meio de proxies sidecar.\n- **C:** Circuit Breaker é padrão de resiliência contra falhas em cascata.\n- **D:** Event Store é o repositório de eventos do Event Sourcing.\n- **E:** Saga coordena transações distribuídas com compensação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-ARQ-0005",
  "campos": {
    "comentario": "**Gabarito: Errado.** A característica apontada por Lewis e Fowler é o gerenciamento **descentralizado** de dados: cada serviço tem seu próprio banco (*database per service*), podendo usar tecnologias diferentes (persistência poliglota), e aceita-se consistência eventual. Um banco único compartilhado acopla os serviços e é considerado antipadrão."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-ARQ-0006",
  "campos": {
    "comentario": "**Gabarito: C.** O **Circuit Breaker** conta as falhas; ao passar do limite, \"abre\" e rejeita as chamadas imediatamente por um tempo. Depois passa a semiaberto, testa algumas chamadas e, se derem certo, fecha de novo.\n\n- **A:** Bulkhead isola recursos (pools de threads, conexões) para que a falha de um serviço não esgote os dos demais.\n- **B:** Retry repete a chamada que falhou; sozinho, pode até agravar a sobrecarga.\n- **D:** Strangler Fig é migração gradual de legado.\n- **E:** Sidecar é um contêiner auxiliar acoplado ao serviço."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-ARQ-0007",
  "campos": {
    "comentario": "**Gabarito: B.** Transações locais encadeadas, com compensação em caso de falha e sem 2PC, definem o padrão **Saga** (coreografada ou orquestrada).\n\n- **A:** CQRS separa o modelo de escrita (comandos) do modelo de leitura (consultas).\n- **C:** API Composition resolve **consultas** que juntam dados de vários serviços, não a consistência de escrita.\n- **D:** Singleton é padrão de projeto GoF (instância única).\n- **E:** Database per service é a causa do problema (cada serviço com seu banco), não a solução de consistência."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-ARQ-0008",
  "campos": {
    "comentario": "**Gabarito: Certo.** É a definição do Strangler Fig (Martin Fowler): uma fachada intercepta as requisições e, funcionalidade por funcionalidade, passa a encaminhá-las para os novos serviços. O legado encolhe aos poucos até poder ser desligado, sem uma virada única e arriscada."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-ARQ-0009",
  "campos": {
    "comentario": "**Gabarito: B.** Na arquitetura hexagonal (portas e adaptadores), o núcleo define **portas** (interfaces) e cada tecnologia externa é ligada por um **adaptador** que implementa ou usa a porta. Assim o domínio não depende de banco, fila ou framework.\n\n- **A:** Camadas de apresentação, negócio e dados descrevem a arquitetura em camadas tradicional.\n- **C:** Chamar o driver JDBC dentro das entidades acopla o domínio à infraestrutura, o oposto do que o padrão prega.\n- **D:** ESB é o barramento central de integração típico de SOA.\n- **E:** Procedimentos armazenados colocam a lógica no banco de dados."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-ARQ-0010",
  "campos": {
    "comentario": "**Gabarito: Errado.** O Strangler Fig é justamente o contrário de uma substituição única (*big bang*): a troca é **gradual**. O novo sistema cresce em volta do legado e o \"estrangula\" aos poucos, funcionalidade por funcionalidade."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0001",
  "campos": {
    "comentario": "**Gabarito: C.** O isolamento exige que transações concorrentes não interfiram umas nas outras, e o mecanismo clássico para isso é o bloqueio (*lock*) de dados, como no protocolo de bloqueio em duas fases (2PL). Outra técnica usada pelos SGBDs é o controle multiversão (MVCC).\n\n- **A:** Cache é área de memória para acelerar o acesso a dados; não controla concorrência.\n- **B:** Commit confirma a transação; está ligado à atomicidade e à durabilidade.\n- **D:** Logging registra as alterações para permitir desfazer e refazer (atomicidade e durabilidade), não isola transações.\n- **E:** Syncpoint é um ponto de sincronização/confirmação, também ligado à recuperação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0002",
  "campos": {
    "comentario": "**Gabarito: C.** X → Y existe quando cada valor de X está associado a um único valor de Y. Várias pessoas podem morar no mesmo endereço, então um endereço não determina um único CPF.\n\n- **A:** Cada CPF pertence a uma única pessoa, que tem um único nome: CPF → Nome vale (homônimos não atrapalham, pois a dependência é do CPF para o nome, não o contrário).\n- **B:** Cada pessoa tem um CPF e um RG próprios: CPF → RG vale.\n- **D:** O RG identifica a pessoa, e a tabela guarda um endereço por pessoa: RG → Endereço vale.\n- **E:** Pelo mesmo motivo, RG → Nome vale."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0003",
  "campos": {
    "comentario": "**Gabarito: A.** Não há condição de junção, então o resultado é o produto cartesiano das linhas que passam nos filtros:\n\n- `t1.B > 2`: sobra só (1, 3).\n- `t2.D < 55`: sobram C = 100 e C = 120 (55 não é menor que 55).\n- `t3.E > 19`: sobram as linhas com E = 20 e E = 40 (NULL é descartado).\n\nSão 1 × 2 × 2 = 4 linhas antes do agrupamento. O `group by t1.A, t2.C` forma os grupos (1, 100) e (1, 120), cada um com soma 60: **duas linhas**. Quem esquece o agrupamento marca quatro (C); quem ignora os filtros chega a números maiores."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0004",
  "campos": {
    "comentario": "**Gabarito: B.** O `NOT EXISTS` mantém a linha de T1 quando a subconsulta não retorna nada. A subconsulta procura em T3 uma linha com o mesmo A, com E nulo e com C existente em T2. Só há uma linha de T3 com E nulo: (2, 100, NULL), e C = 100 existe em T2. Portanto apenas A = 2 é eliminado, e sobram (1, 3) e (4, 2).\n\n- **A:** Esquece (4, 2): A = 4 nem aparece em T3, logo a subconsulta é vazia e a linha é mantida.\n- **C:** Esquece (1, 3): as linhas de T3 com A = 1 têm E preenchido.\n- **D:** Inclui (2, 2), justamente a linha eliminada.\n- **E:** Inclui (2, 2) e deixa (1, 3) de fora."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0005",
  "campos": {
    "comentario": "**Gabarito: A.** T3 tem duas chaves estrangeiras independentes, uma para cada tabela, e cada uma é declarada em sua própria cláusula: `foreign key (coluna) references Tabela(coluna)`.\n\n- **B:** Uma única cláusula `foreign key` referencia uma única tabela; não se pode listar T1 e T2 no mesmo `references`.\n- **C:** `foreign key T1(A) for A` não é sintaxe SQL (não existe `for` nessa cláusula).\n- **D:** Mesmo erro da C, ainda juntando as duas tabelas.\n- **E:** Inverte a ordem: a coluna local vem depois de `foreign key` e a tabela referenciada depois de `references`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0006",
  "campos": {
    "comentario": "**Gabarito: D.** `min(E)` ignora o NULL e vale 10. As linhas com E = 10 são (2, 120, 10) e (2, 110, 10). A segunda condição conta quantas linhas de T3 têm o mesmo A da linha avaliada: para A = 2 são 3, maior que 1. As duas linhas atendem às duas condições e são removidas.\n\n- **A:** Há linhas que satisfazem o `where`, então há remoção.\n- **B e C:** Cada uma cita só uma das duas linhas com E = 10; o `delete` remove todas as que satisfazem a condição.\n- **E:** As linhas com E = 20, 40 e NULL não têm E = 10 (a comparação com NULL resulta em desconhecido) e permanecem."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0007",
  "campos": {
    "comentario": "**Gabarito: B.** Comparar com NULL usando `=` ou `<>` sempre resulta em UNKNOWN, e o `where` só aceita linhas com resultado TRUE.\n\n- **I:** `E <> NULL` é UNKNOWN para todas as linhas: retorna zero linhas.\n- **II:** `not (E is NULL)` usa o operador correto (`is`): retorna as 4 linhas com E preenchido.\n- **III:** `E = NULL` é UNKNOWN, e `not UNKNOWN` continua UNKNOWN: retorna zero linhas.\n\nAssim, só I e III são equivalentes (ambos vazios), e II é diferente."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0008",
  "campos": {
    "comentario": "**Gabarito: A.** As restrições de integridade clássicas do modelo relacional são: de **entidade** (a chave primária é única e não nula), de **domínio** (cada atributo só aceita valores válidos para seu tipo/domínio) e **referencial** (toda chave estrangeira aponta para uma chave existente ou é nula).\n\n- **B:** \"Integridade de relacionamento\" não é uma categoria clássica; o relacionamento entre tabelas é garantido pela integridade referencial.\n- **C:** Cardinalidade é uma propriedade dos relacionamentos no modelo ER, não um nível de integridade.\n- **D:** Junta os dois termos inexistentes e omite entidade e domínio."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0009",
  "campos": {
    "comentario": "**Gabarito: A.** A view é uma tabela virtual (consulta armazenada). Ela junta Cliente e Pedido, agrupa por cliente e devolve, para cada um, o ID, o nome completo (concatenação com `||`) e a soma dos valores dos pedidos (`sum(b.Valor)`). Como o `join` é interno, clientes sem pedido não aparecem.\n\n- **B:** O agrupamento é por cliente (ID, Nome, Sobrenome), não \"por valores dos pedidos\"; e a view lista uma soma.\n- **C:** Fala em soma total dos pedidos dos clientes, como se fosse um único total; a soma é calculada para cada cliente.\n- **D:** A view não exclui nada; a redação nem faz sentido."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0010",
  "campos": {
    "comentario": "**Gabarito: B.** A ação referencial `ON UPDATE CASCADE` propaga a alteração da chave na tabela pai (`fornecedor`) para as linhas filhas. A alternativa omite o \"ON\", mas é a única que corresponde a essa instrução.\n\n- **A:** `ON DELETE CASCADE` trata da exclusão: apagar o fornecedor apaga os registros filhos.\n- **C:** `REFERENCES` apenas indica a tabela e a coluna referenciadas pela chave estrangeira.\n- **D:** É só a definição da coluna `fornecedor_id` (inteira e obrigatória)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0011",
  "campos": {
    "comentario": "**Gabarito: A.** INNER JOIN retorna só as linhas com correspondência nas duas tabelas. OUTER JOIN preserva também as linhas sem correspondência: de uma tabela no LEFT/RIGHT ou das duas no FULL. A alternativa descreve o FULL OUTER JOIN, que é a leitura pretendida pela banca.\n\n- **B:** Inverte as duas definições.\n- **C:** Atribui ao INNER JOIN o comportamento do FULL OUTER e descreve mal o OUTER JOIN.\n- **D:** INNER JOIN exige correspondência em **ambas** as tabelas, não em uma delas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0012",
  "campos": {
    "comentario": "**Gabarito: C.** Filtro sobre linhas (`tipo = 'D'`) vai no WHERE; filtro sobre o resultado de uma agregação (`SUM(valor) > 1000`) vai no HAVING, depois do GROUP BY.\n\n- **A:** Função de agregação não pode aparecer no WHERE, que é avaliado antes do agrupamento.\n- **B:** No HAVING só cabem colunas do GROUP BY ou agregações; `tipo` e `valor` soltos são inválidos, e `valor > 1000` testaria cada lançamento, não o total.\n- **D:** Falta o GROUP BY: `conta` aparece no SELECT sem estar agrupada.\n- **E:** Não agrupa nem soma; ORDER BY só ordena, não filtra."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0013",
  "campos": {
    "comentario": "**Gabarito: D.** O LEFT JOIN mantém todos os clientes, inclusive Carla, cujas colunas de `conta` vêm nulas. `COUNT(t.id)` conta apenas valores não nulos, então dá 0 para Carla.\n\n- **A:** Seria o resultado de um INNER JOIN, que descarta Carla.\n- **B:** Carla 1 seria o resultado de `COUNT(*)`, que conta a linha mesmo com as colunas de `conta` nulas.\n- **C:** COUNT nunca retorna NULL; sem valores para contar, retorna 0.\n- **E:** Há GROUP BY por nome, então sai uma linha por cliente, não um total único."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0014",
  "campos": {
    "comentario": "**Gabarito: A.** Com chave primária simples não pode haver dependência parcial, logo a relação está na 2FN. Mas `num_pedido → cod_cliente → nome_cliente` é uma dependência transitiva de atributo não chave, o que viola a 3FN.\n\n- **B:** A 1FN proíbe atributos multivalorados ou compostos, não valores repetidos entre linhas.\n- **C:** Dependência parcial só existe com chave composta.\n- **D:** Chave simples garante a 2FN, não a FNBC; aqui `cod_cliente` é determinante sem ser chave candidata.\n- **E:** Ser chave estrangeira não elimina a dependência transitiva."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0015",
  "campos": {
    "comentario": "**Gabarito: B.** No padrão SQL, só o SERIALIZABLE impede os três fenômenos: leitura suja, leitura não repetível e leitura fantasma.\n\n- **A:** READ UNCOMMITTED permite os três fenômenos.\n- **C:** READ COMMITTED impede só a leitura suja.\n- **D:** REPEATABLE READ impede leitura suja e não repetível, mas ainda admite fantasmas (pegadinha clássica).\n- **E:** \"SNAPSHOT COMMITTED\" não existe no padrão."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0016",
  "campos": {
    "comentario": "**Gabarito: B.** O índice bitmap guarda um vetor de bits por valor distinto da coluna. Rende bem quando há poucos valores distintos (sexo, UF, situação) e consultas analíticas que combinam vários filtros com AND/OR, cenário típico de data warehouse.\n\n- **A:** Chave primária tem cardinalidade máxima (um bitmap por linha) e OLTP tem muita atualização; usa-se B-tree.\n- **C:** Atualização concorrente frequente é o ponto fraco do bitmap (manutenção cara e bloqueios amplos).\n- **D:** Valores únicos e busca por faixa são o caso de uso da B-tree.\n- **E:** Bitmap complementa a B-tree em cenários específicos; não a substitui."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0017",
  "campos": {
    "comentario": "**Gabarito: A.** Basta fazer o AND bit a bit, posição por posição:\n\n```\n101001  (COR = 'azul')\n100101  (TAMANHO = 'P')\n------\n100001\n```\n\nFicam ligados os bits 1 e 6, logo as linhas 1 e 6.\n\n- **B:** 1, 3, 4 e 6 é o resultado do OR (101101).\n- **C:** 1 e 4 são as linhas com bit 1 só no segundo bitmap, contando o 6 de fora.\n- **D:** 3 e 4 são as linhas em que os bitmaps diferem (XOR).\n- **E:** 2 e 5 são as linhas com bit 0 nos dois bitmaps."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0018",
  "campos": {
    "comentario": "**Gabarito: C.** Cada INSERT, UPDATE ou DELETE obriga a manter os bitmaps, e o bloqueio de um trecho de bitmap atinge muitas linhas de uma vez, gerando contenção. Por isso o bitmap é evitado em OLTP.\n\n- **A:** É o contrário: combinar índices com AND, OR e NOT é a grande vantagem do bitmap.\n- **B:** Em baixa cardinalidade o bitmap é compacto e costuma ocupar menos espaço que a B-tree.\n- **D:** É usado justamente para resolver filtros do WHERE.\n- **E:** COUNT é muito eficiente: basta contar os bits 1."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0019",
  "campos": {
    "comentario": "**Gabarito: B.** O NOT inverte cada bit: 10101001 vira 01010110. Como não há NULL, o resultado coincide com o bitmap de Sexo = M.\n\n- **A:** É o bitmap original, sem inversão.\n- **C:** Tudo 1 seria o OR do bitmap com seu complemento (todas as linhas).\n- **D:** Tudo 0 seria o AND do bitmap com seu complemento (nenhuma linha).\n- **E:** Erra o último bit: o original termina em 1, então o invertido termina em 0."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0020",
  "campos": {
    "comentario": "**Gabarito: B.** Árvore de decisão aprende com exemplos rotulados (supervisionado, classificação ou regressão); k-means agrupa dados sem rótulo (não supervisionado).\n\n- **A:** Ordem invertida: k-means é não supervisionado e k-NN é supervisionado.\n- **C:** Apriori (regras de associação) é não supervisionado e regressão linear é supervisionada: também invertido.\n- **D:** DBSCAN é agrupamento (não supervisionado) e Naive Bayes é classificador (supervisionado): invertido.\n- **E:** PCA (redução de dimensionalidade) e k-means são ambos não supervisionados."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0021",
  "campos": {
    "comentario": "**Gabarito: B.** Desempenho muito alto no treino e bem menor no teste indica que o modelo memorizou os dados de treino e não generaliza: sobreajuste (*overfitting*), associado a alta variância.\n\n- **A:** No underfitting o modelo é simples demais e vai mal já no treino.\n- **C:** Alto viés é a marca do underfitting; no overfitting o problema é alta variância.\n- **D:** Vazamento de dados do teste inflaria a acurácia de teste, em vez de derrubá-la.\n- **E:** No cenário ideal, treino e teste têm desempenhos próximos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0022",
  "campos": {
    "comentario": "**Gabarito: A.** Precisão = VP / (VP + FP) = 30 / 50 = 60% (dos que o modelo apontou como positivos, quantos eram). Revocação = VP / (VP + FN) = 30 / 40 = 75% (dos positivos reais, quantos o modelo achou).\n\n- **B:** Valores certos em ordem trocada.\n- **C e D:** 97% é a acurácia, (VP + VN) / total = 970 / 1000, inflada pela grande quantidade de negativos; não é precisão nem revocação.\n- **E:** 30% não corresponde a nenhuma das métricas (30 é só a contagem de VP)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0023",
  "campos": {
    "comentario": "**Gabarito: C.** O k-NN é supervisionado e \"preguiçoso\": não constrói modelo, guarda os exemplos e classifica o novo caso pela classe mais frequente entre os k vizinhos mais próximos.\n\n- **A:** Descreve o k-means (agrupamento com k centroides).\n- **B:** Descreve a árvore de decisão; o k-NN praticamente não tem fase de treino.\n- **D:** Como usa distância, atributos em escalas diferentes distorcem o resultado; normalizar é necessário.\n- **E:** A predição compara o novo exemplo com a base armazenada, então o custo cresce com o tamanho dela."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0024",
  "campos": {
    "comentario": "**Gabarito: A.** Confiança = suporte(A,B) / suporte(A) = 20% / 40% = 50%. Lift = confiança / suporte(B) = 0,50 / 0,25 = 2: a presença de A dobra a chance de B.\n\n- **B:** 20% é o suporte da regra, não a confiança; 0,8 sai de 20/25.\n- **C:** Confiança certa, mas 1,25 vem de dividir 0,50 por 0,40 (suporte do antecedente), erro comum.\n- **D:** 80% é suporte(A,B) / suporte(B), a confiança da regra inversa B → A.\n- **E:** 62,5% é suporte(B) / suporte(A), e lift 1 indicaria independência entre A e B."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0025",
  "campos": {
    "comentario": "**Gabarito: B.** Independência **física** é poder mudar o esquema interno (estruturas de armazenamento, índices, organização de arquivos) sem alterar o esquema conceitual.\n\n- **A:** Independência lógica é mudar o esquema conceitual sem alterar os esquemas externos nem os programas.\n- **C:** Transparência de distribuição é conceito de bancos de dados distribuídos.\n- **D:** Normalização é técnica de projeto para eliminar redundância.\n- **E:** \"Abstração externa\" não nomeia nenhum dos dois tipos de independência de dados."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0026",
  "campos": {
    "comentario": "**Gabarito: Errado.** É o contrário: a independência lógica é a **mais difícil** de alcançar. As aplicações referenciam diretamente nomes de tabelas, atributos e relacionamentos, então mudanças no esquema conceitual tendem a afetá-las. A independência física é mais fácil, porque trocar índices ou a organização de arquivos fica escondido atrás do esquema conceitual."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0027",
  "campos": {
    "comentario": "**Gabarito: D.** Os dados presentes no banco em um dado momento formam a **instância** (também chamada de estado ou extensão), que muda a cada atualização.\n\n- **A:** O esquema é a descrição da estrutura do banco, definida no projeto e raramente alterada.\n- **B:** Intensão é sinônimo de esquema; o conjunto de dados é a extensão.\n- **C:** O catálogo (dicionário de dados) armazena a descrição do banco, isto é, os metadados.\n- **E:** Metadados são \"dados sobre os dados\" (nomes, tipos, restrições), não o conteúdo armazenado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0028",
  "campos": {
    "comentario": "**Gabarito: D.** O SGBD **acrescenta** custo: hardware, software, treinamento e a sobrecarga de segurança, controle de concorrência, recuperação e integridade. Em aplicações simples e bem definidas, com um só usuário, arquivos comuns podem ser mais baratos e rápidos.\n\n- **A:** Controlar a redundância (e as inconsistências que ela causa) é vantagem clássica.\n- **B:** Compartilhamento com controle de concorrência é vantagem do SGBD.\n- **C:** A estrutura dos dados fica no catálogo, não nos programas: é a independência programa-dados.\n- **E:** As restrições de integridade são declaradas e impostas pelo próprio SGBD."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0029",
  "campos": {
    "comentario": "**Gabarito: B.** A DML de alto nível, ou não procedural (declarativa), diz **o que** se quer e trabalha um conjunto de registros por vez (*set-at-a-time*). É o caso da SQL.\n\n- **A:** A DML procedural, de baixo nível, diz **como** obter os dados e processa um registro por vez (*record-at-a-time*), embutida em linguagem hospedeira.\n- **C:** A SDL (linguagem de definição de armazenamento) especifica o esquema interno, não consultas.\n- **D:** A DCL controla permissões (GRANT, REVOKE).\n- **E:** \"Hierárquica\" designa um modelo de dados, não um tipo de DML."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0030",
  "campos": {
    "comentario": "**Gabarito: B.** A entidade fraca não tem chave própria: é identificada pela chave da entidade proprietária somada à sua chave parcial (por exemplo, DEPENDENTE em relação a FUNCIONARIO), por meio de um relacionamento identificador.\n\n- **A:** Entidade associativa é o relacionamento (em geral N:N) tratado como entidade para poder participar de outros relacionamentos.\n- **C:** Entidade genérica é a superclasse de uma generalização/especialização.\n- **D:** Agregação é a abstração que trata um relacionamento com suas entidades como uma entidade de nível mais alto.\n- **E:** Categoria (tipo união) é uma subclasse com superclasses de tipos diferentes."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0031",
  "campos": {
    "comentario": "**Gabarito: Certo.** São duas restrições independentes que se somam. **Disjunta**: cada entidade pertence a no máximo uma subclasse (o oposto é sobreposta). **Total**: cada entidade da superclasse pertence a pelo menos uma subclasse (o oposto é parcial). No máximo uma e pelo menos uma resultam em exatamente uma."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0032",
  "campos": {
    "comentario": "**Gabarito: C.** No 1:N, a chave primária do lado 1 é incluída como chave estrangeira na tabela do lado N, pois cada linha do lado N se liga a uma única linha do lado 1 (ex.: `FUNCIONARIO.cod_depto`).\n\n- **A:** Tabela associativa é o padrão do relacionamento N:N.\n- **B:** Invertido: a linha do lado 1 se relaciona com várias do lado N, e uma coluna não guarda vários valores.\n- **D:** Fundir as tabelas é opção apenas em alguns relacionamentos 1:1.\n- **E:** Tabela própria é o mapeamento de atributo multivalorado, outro caso."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0033",
  "campos": {
    "comentario": "**Gabarito: B.** No IDEF1X, o relacionamento **identificador** (a chave do pai migra para a chave primária do filho, que passa a ser entidade dependente, desenhada com cantos arredondados) é uma linha sólida.\n\n- **A:** Linha tracejada é o relacionamento não identificador: a chave do pai migra como atributo comum, fora da chave primária.\n- **C:** O losango na ponta do pai indica relacionamento não identificador opcional (a FK pode ser nula).\n- **D:** O círculo com linhas abaixo é o símbolo de generalização (categoria); duas linhas indicam categoria completa.\n- **E:** A letra Z junto ao filho indica cardinalidade zero ou um."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0034",
  "campos": {
    "comentario": "**Gabarito: C.** Contagem pelo mapeamento ER para relacional:\n\n- 3 tabelas para as entidades FUNCIONARIO, PROJETO e DEPARTAMENTO.\n- 1 tabela associativa para o relacionamento M:N entre FUNCIONARIO e PROJETO.\n- 1 tabela para o atributo multivalorado \"habilidades\".\n- O relacionamento 1:N não gera tabela: vira chave estrangeira em FUNCIONARIO.\n\nTotal: 3 + 1 + 1 = **5**. Quem esquece o multivalorado chega a 4; quem cria tabela também para o 1:N chega a 6."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0035",
  "campos": {
    "comentario": "**Gabarito: C.** A integridade de **entidade** determina que nenhum atributo da chave primária seja nulo, pois é ela que identifica cada tupla.\n\n- **A:** A integridade referencial exige que a chave estrangeira aponte para uma chave existente (ou seja nula).\n- **B:** A de domínio exige que o valor do atributo pertença ao domínio definido (tipo, faixa, formato).\n- **D:** Restrições semânticas são regras de negócio gerais (ex.: salário do funcionário não maior que o do chefe).\n- **E:** Restrições de transição tratam de mudanças de estado válidas (ex.: salário só pode aumentar)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0036",
  "campos": {
    "comentario": "**Gabarito: Errado.** A exclusão só pode violar a integridade **referencial**, quando a tupla removida é referenciada por chaves estrangeiras de outras tuplas. Remover uma linha não cria valor fora do domínio, chave duplicada nem chave primária nula. Quem pode violar os quatro tipos de restrição é a inserção (e a alteração)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0037",
  "campos": {
    "comentario": "**Gabarito: C.** Chave candidata é uma superchave mínima. Como matricula, cpf e email são únicos, há três candidatas; a escolhida vira primária e as outras são chaves alternativas (ou secundárias).\n\n- **A:** São três chaves candidatas, não uma.\n- **B:** {matricula, nome} identifica a tupla, mas não é mínima (nome sobra): é superchave, não candidata.\n- **D:** É o contrário: toda superchave contém ao menos uma chave candidata.\n- **E:** Nenhum atributo da chave primária pode ser nulo, seja ela simples ou composta (integridade de entidade)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0038",
  "campos": {
    "comentario": "**Gabarito: B.** `ON DELETE SET NULL` grava nulo na chave estrangeira dos filhos quando o pai é excluído (a coluna precisa aceitar nulos).\n\n- **A:** `ON DELETE CASCADE` exclui também os registros filhos.\n- **C:** `NO ACTION` impede a exclusão do pai enquanto houver filhos (é o comportamento padrão).\n- **D:** `ON UPDATE SET NULL` reage à atualização da chave do pai, não à exclusão.\n- **E:** `RESTRICT` também impede a exclusão, com verificação imediata."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0039",
  "campos": {
    "comentario": "**Gabarito: B.** **Grau** é o número de atributos (colunas) da relação: 7. **Cardinalidade** é o número de tuplas (linhas): 150.\n\n- **A:** Valores certos, mas em ordem trocada.\n- **C e D:** Repetem o mesmo número para as duas medidas, que contam coisas diferentes.\n- **E:** Grau 1 seria uma relação com uma única coluna."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0040",
  "campos": {
    "comentario": "**Gabarito: B.** A 2FN exige 1FN mais a ausência de **dependência parcial**: nenhum atributo não chave pode depender só de parte de uma chave composta.\n\n- **A:** Eliminar dependências transitivas é a exigência da 3FN.\n- **C:** Todo determinante ser chave candidata é a definição da FNBC.\n- **D:** Ausência de dependências multivaloradas não triviais é a 4FN.\n- **E:** Relação só com atributos de chave não é definição de forma normal alguma (embora uma relação assim atenda à 3FN)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0041",
  "campos": {
    "comentario": "**Gabarito: Errado.** A implicação é inversa: toda relação na FNBC está na 3FN, mas não o contrário. A 3FN tolera uma dependência X → A em que X não é superchave desde que A seja atributo primo (parte de alguma chave candidata); a FNBC não tolera, exigindo que todo determinante seja superchave."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0042",
  "campos": {
    "comentario": "**Gabarito: B.** O fecho de A é A⁺ = {A, B, C, D}, logo A é a chave. Sendo chave simples, não há dependência parcial e R está na 2FN. Porém B → C e C → D têm determinantes que não são chave e dependentes não primos (dependências transitivas), o que viola a 3FN.\n\n- **A:** As dependências transitivas impedem a 3FN.\n- **C:** Nada indica atributos multivalorados; a 1FN é pressuposta.\n- **D:** {B, C}⁺ = {B, C, D}, não alcança A, então não é chave.\n- **E:** Se não está na 3FN, também não está na FNBC, que é mais restritiva."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0043",
  "campos": {
    "comentario": "**Gabarito: C.** É a regra da **pseudotransitividade**: de X → Y, aumentando com W, obtém-se WX → WY; como WY → Z, por transitividade WX → Z.\n\n- **A:** X sozinho só determina Y; para chegar a Z falta W.\n- **B:** W sozinho não determina Y, então não basta para Z.\n- **D:** Nenhuma dependência dada tem W do lado direito.\n- **E:** Idem: nada permite derivar W a partir de outros atributos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0044",
  "campos": {
    "comentario": "**Gabarito: D.** Dois atributos multivalorados independentes na mesma relação (ex.: telefones e dependentes de um funcionário) geram dependências multivaloradas não triviais e combinações redundantes de valores. A 4FN exige separá-los em relações distintas.\n\n- **A:** Representados como uma tupla por combinação de valores, os atributos são atômicos e a 1FN é atendida.\n- **B, C e E:** Tratam de dependências funcionais (parciais, transitivas, determinante não chave). A relação pode ter só atributos de chave e estar até na FNBC, mesmo violando a 4FN."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0045",
  "campos": {
    "comentario": "**Gabarito: B.** A projeção (π) escolhe colunas e, como o resultado é um conjunto, elimina as tuplas que ficarem duplicadas.\n\n- **A:** A seleção (σ) filtra linhas por uma condição e mantém todas as colunas.\n- **C:** A junção natural combina tuplas de duas relações pelos atributos de mesmo nome.\n- **D:** A divisão retorna as tuplas relacionadas a **todas** as tuplas de outra relação.\n- **E:** A renomeação (ρ) só troca nomes de relação ou de atributos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0046",
  "campos": {
    "comentario": "**Gabarito: Certo.** O produto cartesiano combina cada tupla de uma relação com cada tupla da outra: a cardinalidade é o produto (5 × 4 = 20 tuplas) e o grau é a soma (3 + 2 = 5 atributos)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0047",
  "campos": {
    "comentario": "**Gabarito: C.** A divisão R ÷ S retorna os valores de R associados a **todas** as tuplas de S. Aqui, divide-se a relação (cliente, agência) pelo conjunto das agências de Vitória. A palavra \"todas\" é o sinal clássico.\n\n- **A:** União junta as tuplas de duas relações compatíveis.\n- **B:** Diferença retorna o que está em uma relação e não na outra (serve para \"os que não têm\").\n- **D:** Semijunção retorna as tuplas de R que casam com **alguma** tupla de S, não com todas.\n- **E:** Junção externa esquerda preserva as tuplas sem correspondência, preenchendo com nulos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0048",
  "campos": {
    "comentario": "**Gabarito: C.** A junção externa esquerda (*left outer join*) mantém todas as tuplas da relação da esquerda e completa com nulos os atributos da direita quando não há par.\n\n- **A:** A junção natural descarta as tuplas sem correspondência.\n- **B:** A equijunção (condição de igualdade) é junção interna e também as descarta.\n- **D:** A externa completa preserva as tuplas sem par dos **dois** lados.\n- **E:** O produto cartesiano combina tudo com tudo, sem condição e sem nulos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0049",
  "campos": {
    "comentario": "**Gabarito: C.** R − S (o que está em R e não em S) em geral é diferente de S − R.\n\n- **A:** R ∪ S = S ∪ R.\n- **B:** R ∩ S = S ∩ R.\n- **D:** A junção natural é comutativa (muda só a ordem das colunas, irrelevante na álgebra).\n- **E:** Seleções encadeadas comutam: σc1(σc2(R)) = σc2(σc1(R))."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0050",
  "campos": {
    "comentario": "**Gabarito: B.** ALTER é DDL (define estrutura), INSERT é DML (manipula dados) e REVOKE é DCL (controla permissões).\n\n- **A:** GRANT é DCL e UPDATE é DML: os dois últimos estão trocados.\n- **C:** COMMIT é controle de transação (DTL/TCL), não DML.\n- **D:** ROLLBACK é controle de transação, não DCL (SELECT é classificado como DML ou DQL).\n- **E:** INSERT é DML, não DDL."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0051",
  "campos": {
    "comentario": "**Gabarito: Errado.** O TRUNCATE remove todas as linhas, mas é um comando DDL: não aceita WHERE (para apagar só parte das linhas usa-se DELETE) e não dispara os triggers de DELETE por linha. Em geral é mais rápido que o DELETE porque não registra a remoção linha a linha."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0052",
  "campos": {
    "comentario": "**Gabarito: B.** `WITH GRANT OPTION` dá ao beneficiário o direito de conceder o mesmo privilégio a outros usuários.\n\n- **A:** É o que acontece no GRANT sem essa opção.\n- **C:** A opção só vale para o privilégio recebido; não permite revogar privilégios de terceiros.\n- **D:** Criar usuários depende de privilégio administrativo próprio.\n- **E:** Alterar a estrutura exige ser dono da tabela ou ter privilégio de ALTER."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0053",
  "campos": {
    "comentario": "**Gabarito: B.** `NULL >= 0` resulta em UNKNOWN, e a restrição CHECK só rejeita a linha quando a condição é FALSE. Para barrar nulos é preciso declarar NOT NULL. Note a diferença para o WHERE, que só aceita TRUE.\n\n- **A:** Comparação com NULL não dá falso, dá desconhecido.\n- **C:** O CHECK apenas valida; não converte valores (isso seria papel de DEFAULT ou COALESCE).\n- **D:** Não há chave estrangeira envolvida.\n- **E:** É o comportamento definido no padrão SQL, não uma particularidade do Oracle."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0054",
  "campos": {
    "comentario": "**Gabarito: C.** No Oracle, todo comando DDL faz um **commit implícito** antes e depois de executar. O `CREATE TABLE` confirma o UPDATE pendente e a própria criação da tabela; quando o ROLLBACK chega, não há mais nada a desfazer.\n\n- **A:** O UPDATE já foi confirmado pelo commit implícito, e DDL no Oracle não é desfeito por ROLLBACK.\n- **B:** A tabela de fato permanece, mas o UPDATE também.\n- **D:** As duas operações ficam efetivadas.\n- **E:** DDL pode ser executado a qualquer momento; o efeito é encerrar a transação corrente."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0055",
  "campos": {
    "comentario": "**Gabarito: B.** Na tabela CONTA:\n\n- `COUNT(*)` conta linhas: **4**.\n- `COUNT(cpf)` ignora nulos: a conta 4 tem cpf NULL, restam 111, 111 e 222: **3**.\n- `COUNT(DISTINCT cpf)` conta valores distintos não nulos: 111 e 222: **2**.\n\nA alternativa A esquece que COUNT(coluna) ignora NULL; a C esquece o DISTINCT (ou conta o NULL como valor); a D aplica o descarte do NULL também ao `COUNT(*)`; a E trata as três contagens como iguais."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0056",
  "campos": {
    "comentario": "**Gabarito: Errado.** A subconsulta devolve 111, 111, 222 e **NULL** (conta 4). `cpf NOT IN (111, 222, NULL)` equivale a `cpf <> 111 AND cpf <> 222 AND cpf <> NULL`, e a última comparação é sempre UNKNOWN, logo a condição nunca é TRUE: o resultado é **vazio**. Para obter Carla e Davi, use `NOT EXISTS` ou filtre a subconsulta com `WHERE cpf IS NOT NULL`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0057",
  "campos": {
    "comentario": "**Gabarito: D.** O FULL OUTER JOIN devolve os pares casados mais as linhas sem par dos dois lados:\n\n- Pares: Ana com a conta 1, Ana com a conta 2, Bruno com a conta 3 (3 linhas).\n- Clientes sem conta: Carla e Davi (2 linhas, com numero NULL).\n- Conta sem cliente: a conta 4, cujo cpf é NULL e não casa com ninguém (1 linha, com nome NULL).\n\nTotal: 3 + 2 + 1 = **6**. O INNER JOIN daria 3 (A); o RIGHT JOIN daria 4 (B); o LEFT JOIN daria 5 (C); 16 (E) é o produto cartesiano 4 × 4."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0058",
  "campos": {
    "comentario": "**Gabarito: C.** O WHERE filtra linhas antes do agrupamento; o HAVING filtra os grupos já formados e por isso pode usar funções de agregação. Ordem lógica: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY.\n\n- **A:** WHERE não aceita função de agregação, pois é avaliado antes de os grupos existirem.\n- **B:** HAVING é avaliada depois do GROUP BY.\n- **D:** HAVING normalmente acompanha o GROUP BY; sem ele, a tabela inteira é tratada como um único grupo.\n- **E:** O SELECT é avaliado depois do WHERE, então os aliases ainda não existem (só o ORDER BY pode usá-los)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0059",
  "campos": {
    "comentario": "**Gabarito: A.** Agrupando por agência: a 10 tem duas contas (500 e -50), a 20 e a 30 têm uma cada. O `HAVING COUNT(*) > 1` deixa só a agência 10, com soma 500 + (-50) = **450**.\n\n- **B:** 500 ignora o saldo negativo da conta 3.\n- **C:** A agência 20 tem só uma conta e é barrada pelo HAVING.\n- **D:** Existe um grupo com mais de uma linha, a agência 10.\n- **E:** A agência 20 tem o maior saldo, mas o filtro é pela quantidade de contas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0060",
  "campos": {
    "comentario": "**Gabarito: C.** Na lógica de três valores: `saldo > 0` com saldo -50 é FALSE; `cidade = NULL` é sempre UNKNOWN (o teste correto seria `IS NULL`). FALSE OR UNKNOWN = UNKNOWN. Em um WHERE, a linha não seria retornada.\n\n- **A:** O OR só daria TRUE se um dos lados fosse TRUE.\n- **B:** Só seria FALSE se os dois lados fossem FALSE.\n- **D:** Não há conversão: o resultado é UNKNOWN; apenas o efeito no WHERE é o mesmo de FALSE (a linha é descartada).\n- **E:** `= NULL` é sintaticamente válido, apenas inútil."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0061",
  "campos": {
    "comentario": "**Gabarito: B.** A view comum guarda só a definição (o SELECT) no catálogo; seus dados são obtidos das tabelas base toda vez que ela é consultada.\n\n- **A:** Quem armazena fisicamente o resultado é a view materializada.\n- **C:** É um mecanismo clássico de segurança: concede-se acesso à view, que expõe só certas linhas e colunas.\n- **D:** Views com agregação, DISTINCT, GROUP BY ou certas junções não são atualizáveis.\n- **E:** Pode referenciar várias tabelas e até outras views."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0062",
  "campos": {
    "comentario": "**Gabarito: Errado.** O índice clusterizado determina a ordem física em que as linhas ficam armazenadas, e uma tabela só pode estar ordenada fisicamente de uma maneira. Por isso há no máximo **um** índice clusterizado por tabela (que pode ter várias colunas); os demais são não clusterizados, e destes pode haver vários."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0063",
  "campos": {
    "comentario": "**Gabarito: C.** O bitmap mantém um vetor de bits por valor distinto; com poucos valores (UF, sexo) fica compacto, e filtros combinados são resolvidos com AND/OR entre os vetores.\n\n- **A:** Hash serve para busca por igualdade em um valor; não é a indicação para combinar filtros de baixa cardinalidade.\n- **B:** O índice clusterizado define a ordem física e só pode haver um por tabela.\n- **D:** Full-text indexa palavras em colunas de texto longo.\n- **E:** Índice esparso tem entradas só para parte dos registros (em geral uma por bloco) e exige arquivo ordenado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0064",
  "campos": {
    "comentario": "**Gabarito: B.** No SQL Server, o UPDATE é visto no trigger como uma exclusão seguida de inserção: `deleted` traz as linhas com os valores antigos e `inserted`, com os novos.\n\n- **A:** `OLD` e `NEW` são usados em outros SGBDs (MySQL, PostgreSQL).\n- **C:** Nomes certos, mas na ordem invertida.\n- **D:** `:OLD` e `:NEW` são do Oracle (PL/SQL).\n- **E:** `before` e `after` não são pseudotabelas; BEFORE/AFTER indicam o momento do disparo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0065",
  "campos": {
    "comentario": "**Gabarito: C.** O trigger INSTEAD OF é executado **no lugar** da operação e é o tipo aplicável a views: o código do trigger distribui o INSERT entre as tabelas base.\n\n- **A e B:** BEFORE e AFTER rodam antes ou depois da operação, que continua sendo executada (e falharia em uma view não atualizável).\n- **D:** FOR EACH STATEMENT define a granularidade do disparo (uma vez por comando), não a substituição da operação.\n- **E:** Trigger DDL dispara em comandos como CREATE, ALTER e DROP."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0066",
  "campos": {
    "comentario": "**Gabarito: C.** Atomicidade é o \"tudo ou nada\": ou todas as operações da transação são efetivadas ou nenhuma é.\n\n- **A:** Consistência: a transação leva o banco de um estado válido a outro estado válido.\n- **B:** Isolamento: transações concorrentes não interferem entre si.\n- **D:** Durabilidade: o que foi confirmado sobrevive a falhas.\n- **E:** Serializabilidade é critério de correção de escalonamentos concorrentes, não uma das quatro propriedades ACID."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0067",
  "campos": {
    "comentario": "**Gabarito: Errado.** O 2PL (fase de crescimento, em que só se adquirem bloqueios, seguida da fase de encolhimento, em que só se liberam) garante a serializabilidade por conflito, mas **não** evita deadlock: duas transações podem ficar esperando bloqueios uma da outra. Só a variante conservadora, que bloqueia todos os itens antes de começar, é livre de deadlock."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0068",
  "campos": {
    "comentario": "**Gabarito: B.** READ COMMITTED só lê dados confirmados, eliminando a leitura suja, mas ainda permite leitura não repetível e leitura fantasma.\n\n- **A:** A leitura suja é justamente o que esse nível impede.\n- **C:** Só fantasmas é o que resta no REPEATABLE READ.\n- **D:** Nenhuma anomalia corresponde ao SERIALIZABLE.\n- **E:** A leitura suja só ocorre em READ UNCOMMITTED."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0069",
  "campos": {
    "comentario": "**Gabarito: C.** No **wait-die**, a transação mais antiga pode esperar pela mais nova, mas a mais nova que pede item da mais antiga \"morre\": é abortada e reiniciada com o **mesmo timestamp**, para envelhecer e não sofrer inanição.\n\n- **A:** Abortar a mais antiga (que detém o item) quando a pedinte é mais velha é o comportamento do wound-wait.\n- **B:** No wait-die quem espera é a transação mais antiga; a mais nova esperar é o que ocorre no wound-wait.\n- **D:** Apenas uma transação é abortada.\n- **E:** O esquema trata de prioridade por timestamp, não do modo do bloqueio."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0070",
  "campos": {
    "comentario": "**Gabarito: D.** Há dois conflitos (operações de transações diferentes sobre o mesmo item, com ao menos uma escrita):\n\n- `r1(A)` antes de `w2(A)`: aresta T1 → T2.\n- `r2(B)` antes de `w1(B)`: aresta T2 → T1.\n\nAs duas arestas formam um ciclo, logo S não é serializável por conflito.\n\n- **A:** Existem dois conflitos, portanto duas arestas.\n- **B e C:** Cada uma enxerga só um dos conflitos.\n- **E:** O grafo tem ciclo; além disso, grafo acíclico significa serializável, não serial (serial é sem intercalação)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0071",
  "campos": {
    "comentario": "**Gabarito: C.** Leitura fantasma: a mesma consulta por predicado (agência = 10), repetida na transação, devolve linhas a mais (ou a menos) porque outra transação inseriu ou excluiu linhas que satisfazem o predicado.\n\n- **A:** Leitura suja é ler dado ainda não confirmado; aqui T2 confirmou.\n- **B:** Atualização perdida é uma escrita sobrepor a de outra transação.\n- **D:** Deadlock é espera circular por bloqueios.\n- **E:** Leitura não repetível é a **mesma linha** aparecer com valor diferente na releitura; aqui surgiu uma linha nova."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0072",
  "campos": {
    "comentario": "**Gabarito: C.** Na atualização adiada, nada é gravado no banco antes do commit. Transações não confirmadas não deixaram rastro no disco (NO-UNDO); as confirmadas podem não ter chegado ao disco e precisam ser refeitas pelo log (REDO).\n\n- **A:** UNDO/REDO é o da atualização imediata em sua forma geral.\n- **B:** UNDO/NO-REDO é o da atualização imediata quando tudo é gravado em disco antes do commit.\n- **D:** NO-UNDO/NO-REDO é o da paginação sombra (*shadow paging*).\n- **E:** Checkpoint só reduz o trabalho de recuperação; não é um algoritmo de recuperação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0073",
  "campos": {
    "comentario": "**Gabarito: Errado.** É o oposto: pelo *write-ahead logging* (WAL), o registro de **log** que descreve a alteração deve estar em disco **antes** de a página de dados modificada ser gravada. Assim, sempre existe a informação necessária para desfazer (UNDO) a alteração. Além disso, os registros de log da transação são gravados antes da conclusão do commit, permitindo o REDO."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0074",
  "campos": {
    "comentario": "**Gabarito: B.** No checkpoint, o SGBD grava em disco as páginas modificadas e registra o ponto no log. Na recuperação, as transações confirmadas antes dele não precisam ser refeitas, o que encurta o trecho de log a processar.\n\n- **A:** Bloqueios são liberados pelo controle de concorrência, ao fim das transações.\n- **C:** Backup continua necessário, por exemplo, para falhas de mídia.\n- **D:** Deadlock é tratado por prevenção, detecção ou timeout.\n- **E:** Isolamento é garantido por bloqueios ou multiversão, não por checkpoint."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0075",
  "campos": {
    "comentario": "**Gabarito: C.** Com a falha logo após t6, o log conteria: T1 confirmada (t3, antes do checkpoint), T2 confirmada (t6) e T3 iniciada (t5) sem commit. Na atualização imediata, desfaz-se (UNDO) quem estava ativo na falha: apenas **T3**.\n\n- **A:** T1 confirmou antes do checkpoint: não precisa de nada.\n- **B:** T2 confirmou depois do checkpoint: precisa de REDO, não de UNDO.\n- **D:** Mistura a T2 (REDO) com a T3 (UNDO).\n- **E:** T4 só começa em t7, depois da falha considerada."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0076",
  "campos": {
    "comentario": "**Gabarito: C.** **Steal**: o gerenciador de buffer pode \"roubar\" uma página suja de transação ainda não confirmada e gravá-la em disco. Isso obriga a ter UNDO na recuperação.\n\n- **A:** Force: as páginas alteradas são gravadas em disco no momento do commit (dispensa REDO).\n- **B:** No-force: o commit não obriga a gravar as páginas (exige REDO).\n- **D:** No-steal: página de transação não confirmada não vai para o disco (dispensa UNDO).\n- **E:** Shadow (paginação sombra) é uma técnica de recuperação, não uma política de buffer."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0077",
  "campos": {
    "comentario": "**Gabarito: B.** Seleções e projeções reduzem linhas e colunas; aplicá-las cedo (perto das folhas da árvore) diminui o tamanho dos resultados intermediários que alimentam as junções.\n\n- **A:** Produto cartesiano antes das seleções gera resultados intermediários enormes.\n- **C:** Deixar as seleções para o topo é exatamente o que a heurística evita.\n- **D:** O que se faz é o inverso: combinar produto cartesiano com seleção em uma junção.\n- **E:** A varredura completa é apenas um dos caminhos de acesso; com filtro seletivo, o índice costuma ser melhor."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0078",
  "campos": {
    "comentario": "**Gabarito: Certo.** O otimizador baseado em custo (CBO) gera planos alternativos e estima o custo de cada um (E/S, CPU) a partir de estatísticas do catálogo: número de linhas e de blocos, valores distintos por coluna, histogramas, altura dos índices. Escolhe o plano de menor custo estimado, e por isso estatísticas desatualizadas levam a planos ruins."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0079",
  "campos": {
    "comentario": "**Gabarito: C.** O hash join tem duas fases: *build* (monta a tabela hash com a relação menor) e *probe* (percorre a maior consultando a tabela). Só serve para junção por igualdade.\n\n- **A:** Nested loops percorre, para cada linha da relação externa, a interna; é bom com poucas linhas ou com índice na interna.\n- **B:** Sort-merge ordena as duas relações pela chave de junção e as intercala.\n- **D:** Index seek é um método de acesso a uma tabela via índice, não um algoritmo de junção.\n- **E:** Bitmap join é um tipo de índice (Oracle) sobre junção pré-calculada, não constrói tabela de dispersão."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0080",
  "campos": {
    "comentario": "**Gabarito: B.** `EXPLAIN PLAN FOR <consulta>` grava o plano na tabela PLAN_TABLE sem executar a consulta; depois ele é exibido com `DBMS_XPLAN.DISPLAY`.\n\n- **A:** `SHOW PLAN` não é comando do Oracle (lembra o `SET SHOWPLAN` do SQL Server).\n- **C:** `SET STATISTICS IO ON` é do SQL Server e mostra estatísticas de E/S de consultas executadas.\n- **D:** `DESCRIBE` mostra a estrutura (colunas e tipos) de uma tabela.\n- **E:** `ANALYZE QUERY` não existe; `ANALYZE` no Oracle coleta estatísticas de objetos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0081",
  "campos": {
    "comentario": "**Gabarito: B.** O índice B-tree guarda os valores de `data_mov`, não o resultado de `TO_CHAR(data_mov, 'YYYY')`. Com a função aplicada à coluna, o predicado deixa de ser sargável (não pode ser resolvido por busca no índice). Soluções: reescrever como faixa (`data_mov >= DATE '2024-01-01' AND data_mov < DATE '2025-01-01'`) ou criar um índice baseado em função.\n\n- **A:** Índices funcionam normalmente com datas.\n- **C:** `SELECT *` não impede o índice; só inviabiliza resolver a consulta apenas pelo índice (índice de cobertura).\n- **D:** Funções são permitidas no WHERE; o problema é só de desempenho.\n- **E:** Índices servem a filtros, junções e ordenação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0082",
  "campos": {
    "comentario": "**Gabarito: B.** O `PreparedStatement` é pré-compilado e recebe os valores por parâmetros (`?`), enviados separados do texto SQL. Isso permite reexecutar com eficiência e impede que a entrada do usuário seja interpretada como código (SQL Injection).\n\n- **A:** `Statement` executa SQL montado por concatenação de strings, vulnerável a injeção e recompilado a cada execução.\n- **C:** `ResultSet` representa o resultado de uma consulta.\n- **D:** `DriverManager` gerencia drivers e abre conexões.\n- **E:** `DatabaseMetaData` fornece informações sobre o banco (tabelas, versão, recursos)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0083",
  "campos": {
    "comentario": "**Gabarito: Certo.** O driver tipo 4 (*thin*) é Java puro e fala diretamente o protocolo de rede do SGBD, sem bibliotecas nativas nem middleware; é o mais usado hoje. Para comparar: tipo 1 é a ponte JDBC-ODBC, tipo 2 usa a API nativa do banco (parte em código nativo) e tipo 3 é Java puro que passa por um servidor intermediário."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0084",
  "campos": {
    "comentario": "**Gabarito: B.** No ODBC, a aplicação chama a API; o **Driver Manager** carrega o driver correspondente à fonte de dados e repassa a ele as chamadas; o driver fala com o SGBD.\n\n- **A:** O DSN (*Data Source Name*) é só o nome/configuração da fonte de dados (driver, servidor, banco).\n- **C:** Listener é o processo do Oracle que recebe as conexões de rede.\n- **D:** Data Pump é o utilitário de exportação e importação do Oracle.\n- **E:** Connection pool é o reaproveitamento de conexões abertas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0085",
  "campos": {
    "comentario": "**Gabarito: C.** O **msdb** é usado pelo SQL Server Agent (jobs, agendamentos, alertas, operadores) e guarda o histórico de backup e restauração.\n\n- **A:** master guarda as informações de nível de instância: logins, configurações e a lista dos bancos.\n- **B:** model é o modelo copiado para cada banco novo.\n- **D:** tempdb guarda objetos temporários e é recriado a cada inicialização.\n- **E:** resource é o banco oculto, somente leitura, com os objetos de sistema."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0086",
  "campos": {
    "comentario": "**Gabarito: B.** O LGWR (*Log Writer*) grava o redo log buffer nos arquivos de redo log online, por exemplo a cada commit.\n\n- **A:** DBWn (*Database Writer*) grava os blocos de dados alterados do buffer cache nos datafiles.\n- **C:** SMON (*System Monitor*) faz a recuperação da instância na inicialização e limpezas de segmentos temporários.\n- **D:** PMON (*Process Monitor*) limpa os recursos de processos de usuário que falharam.\n- **E:** CKPT sinaliza o checkpoint e atualiza os cabeçalhos dos datafiles e o control file."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0087",
  "campos": {
    "comentario": "**Gabarito: B.** Para Inmon, o DW é **orientado por assunto** (clientes, produtos, e não por aplicação), **integrado** (dados de várias fontes padronizados), **variante no tempo** (guarda histórico) e **não volátil** (os dados são carregados e consultados, não alterados a todo momento).\n\n- **A:** Orientado a aplicações, volátil e atual é o perfil dos sistemas transacionais (OLTP).\n- **C:** Normalizado, transacional e volátil também descreve OLTP.\n- **D:** Departamental lembra o data mart; atual e volátil contrariam a definição.\n- **E:** O DW não é operacional e a integração é uma de suas características centrais."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0088",
  "campos": {
    "comentario": "**Gabarito: Certo.** No floco de neve (*snowflake*), as dimensões são normalizadas em hierarquias de tabelas (por exemplo, produto, categoria e departamento). Isso reduz redundância e espaço, mas as consultas precisam de mais junções e ficam mais complexas. No esquema estrela, as dimensões são desnormalizadas e ligadas diretamente à tabela fato."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0089",
  "campos": {
    "comentario": "**Gabarito: B.** Ir de região para agência é descer na hierarquia, aumentando o nível de detalhe: drill-down.\n\n- **A:** Roll-up é o inverso: sobe na hierarquia e agrega (de agência para região).\n- **C:** Slice fixa um valor de uma dimensão, cortando uma fatia do cubo.\n- **D:** Pivot gira os eixos de visualização (troca linhas por colunas).\n- **E:** Drill-across combina, na mesma análise, fatos de tabelas fato diferentes por dimensões comuns."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0090",
  "campos": {
    "comentario": "**Gabarito: B.** A SCD tipo 2 insere uma nova linha na dimensão para a nova versão do cliente, com nova chave substituta e controle de vigência (datas de início e fim ou indicador de registro atual). O histórico completo é preservado.\n\n- **A:** Sobrescrever, perdendo o histórico, é o tipo 1.\n- **C:** Coluna com o valor anterior é o tipo 3 (histórico limitado).\n- **D:** A fato não é atualizada: os fatos antigos continuam apontando para a versão antiga da dimensão.\n- **E:** Nada é excluído."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0091",
  "campos": {
    "comentario": "**Gabarito: B.** Medida **semiaditiva** pode ser somada em algumas dimensões, mas não em todas. Saldos podem ser somados entre contas ou agências em uma mesma data, mas não ao longo do tempo (somar os saldos de 30 dias não significa nada; usa-se média ou último valor).\n\n- **A:** Aditiva soma em todas as dimensões (ex.: valor de vendas).\n- **C:** Não aditiva não pode ser somada em nenhuma (ex.: percentuais, taxas).\n- **D:** \"Degenerada\" qualifica dimensão (chave sem tabela própria, como o número da nota), não medida.\n- **E:** Dimensão junk agrupa indicadores e flags de baixa cardinalidade; não se relaciona com aditividade."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0092",
  "campos": {
    "comentario": "**Gabarito: B.** Slice fixa um único valor em uma dimensão e gera uma \"fatia\" do cubo, com uma dimensão a menos.\n\n- **A:** Dice seleciona valores ou faixas em duas ou mais dimensões, produzindo um subcubo.\n- **C:** Drill-through vai do dado agregado aos registros detalhados da fonte.\n- **D:** Roll-up sobe na hierarquia, agregando.\n- **E:** Pivot apenas gira os eixos de visualização."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0093",
  "campos": {
    "comentario": "**Gabarito: C.** Agrupamento (*clustering*) é tarefa descritiva e não supervisionada: os grupos são descobertos pela semelhança entre os registros, sem rótulos prévios.\n\n- **A:** Classificação atribui registros a classes já definidas, aprendidas de exemplos rotulados.\n- **B:** Regressão prevê um valor numérico contínuo.\n- **D:** Associação descobre itens que ocorrem juntos (regras do tipo \"quem compra A compra B\").\n- **E:** Sumarização produz descrições compactas dos dados (médias, totais, perfis)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0094",
  "campos": {
    "comentario": "**Gabarito: Certo.** No modelo de Fayyad, o KDD tem cinco etapas: seleção, pré-processamento (limpeza), transformação, **mineração de dados** e interpretação/avaliação. A mineração é a etapa em que os algoritmos extraem os padrões, mas não se confunde com o processo inteiro."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0095",
  "campos": {
    "comentario": "**Gabarito: D.** Confiança(A ⇒ B) = transações com A e B / transações com A = 30 / 40 = **75%**: das compras que têm A, três quartos também têm B.\n\n- **A:** 15% é o suporte da regra (30 / 200).\n- **B:** 20% é o suporte de A (40 / 200).\n- **C:** 30% apenas repete o número 30 como percentual.\n- **E:** 133% é a divisão invertida (40 / 30); confiança nunca passa de 100%."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0096",
  "campos": {
    "comentario": "**Gabarito: C.** Árvores de decisão e Naive Bayes são classificadores: aprendem com exemplos rotulados e atribuem uma classe a novos registros.\n\n- **A:** k-means e DBSCAN são algoritmos de agrupamento.\n- **B:** Apriori e FP-Growth mineram regras de associação.\n- **D:** Mistura agrupamento (k-means) e associação (Apriori).\n- **E:** PCA é redução de dimensionalidade e DBSCAN é agrupamento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0097",
  "campos": {
    "comentario": "**Gabarito: D.** As seis fases do CRISP-DM, em ordem: (1) entendimento do negócio, (2) entendimento dos dados, (3) preparação dos dados, (4) **modelagem**, (5) avaliação, (6) implantação.\n\n- **A:** A primeira é o entendimento do negócio.\n- **B:** A segunda é o entendimento dos dados.\n- **C:** A terceira é a preparação dos dados (em geral a mais demorada).\n- **E:** A sexta é a implantação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0098",
  "campos": {
    "comentario": "**Gabarito: D.** Bancos de grafos armazenam nós e arestas (relacionamentos) com propriedades e percorrem vínculos de forma eficiente, sem junções custosas. Exemplo: Neo4j.\n\n- **A:** Chave-valor faz busca simples pela chave (cache, sessões); não modela relacionamentos.\n- **B:** Documentos guardam agregados JSON autocontidos; relacionamentos entre documentos são trabalhosos.\n- **C:** Colunas (famílias de colunas) atendem grandes volumes com escrita intensa e consultas pela chave.\n- **E:** Orientado a objetos não é uma das quatro categorias NoSQL clássicas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0099",
  "campos": {
    "comentario": "**Gabarito: Errado.** O teorema CAP diz justamente que não se pode garantir as três propriedades ao mesmo tempo. Como partições de rede são inevitáveis em sistemas distribuídos, quando uma ocorre é preciso escolher entre consistência (CP, recusando operações) e disponibilidade (AP, respondendo com dados possivelmente desatualizados). A replicação síncrona favorece a consistência, mas sacrifica a disponibilidade durante a partição."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0100",
  "campos": {
    "comentario": "**Gabarito: C.** BASE = **B**asically **A**vailable (basicamente disponível), **S**oft state (estado flexível) e **E**ventual consistency (consistência eventual): as réplicas podem divergir por um tempo, mas convergem se não houver novas escritas. É o contraponto ao ACID.\n\n- **A, B, D e E:** São expressões inventadas; nenhuma faz parte do acrônimo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0101",
  "campos": {
    "comentario": "**Gabarito: B.** MongoDB (BSON) e CouchDB (JSON) armazenam documentos semiestruturados, com esquema flexível.\n\n- **A:** Chave-valor: Redis, DynamoDB, Riak.\n- **C:** Família de colunas: Cassandra, HBase.\n- **D:** Grafo: Neo4j.\n- **E:** Não são relacionais: não usam tabelas com esquema fixo nem junções como base do modelo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0102",
  "campos": {
    "comentario": "**Gabarito: B.** Sharding é o particionamento horizontal: os dados são divididos por uma chave (*shard key*) entre vários servidores, e cada um guarda uma parte. É a base da escalabilidade horizontal.\n\n- **A:** Normalização é técnica de projeto para reduzir redundância.\n- **C:** Replicação copia os **mesmos** dados em vários nós (disponibilidade), em vez de dividi-los.\n- **D:** Desnormalização introduz redundância para acelerar leituras.\n- **E:** Bitmap é um tipo de índice."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0103",
  "campos": {
    "comentario": "**Gabarito: B.** Em PL/pgSQL, um `SELECT` precisa de destino (`INTO`); para executar uma consulta ou função só pelo efeito, descartando o resultado, usa-se `PERFORM` no lugar de `SELECT` (ex.: `PERFORM minha_funcao(1);`).\n\n- **A:** `CALL` invoca procedimentos (`CREATE PROCEDURE`), não funções.\n- **C:** `EXECUTE IMMEDIATE` é o SQL dinâmico do Oracle; no PL/pgSQL usa-se apenas `EXECUTE`.\n- **D:** `DBMS_OUTPUT` é pacote do Oracle para exibir mensagens (no PostgreSQL usa-se `RAISE NOTICE`).\n- **E:** `RETURN NEXT` acrescenta uma linha ao resultado de uma função que retorna conjunto."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0104",
  "campos": {
    "comentario": "**Gabarito: B.** No PostgreSQL o gatilho é criado em duas etapas: primeiro uma função sem argumentos que retorna `trigger` (com acesso a `NEW` e `OLD`), depois o `CREATE TRIGGER`, que a associa à tabela e ao evento.\n\n- **A:** Não existe gatilho com corpo embutido no PostgreSQL; a função é obrigatória (corpo embutido é o estilo Oracle).\n- **C:** Packages são recurso do Oracle, inexistentes no PostgreSQL.\n- **D:** Visão materializada guarda resultado de consulta e é atualizada com `REFRESH`, não é gatilho.\n- **E:** O gatilho executa uma função, e não um procedimento chamado por `CALL`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0105",
  "campos": {
    "comentario": "**Gabarito: Certo.** Os procedimentos (`CREATE PROCEDURE`, chamados com `CALL`) surgiram no PostgreSQL 11 e podem executar COMMIT e ROLLBACK no próprio corpo. Funções rodam dentro da transação do comando que as chamou e não podem controlar transações."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0106",
  "campos": {
    "comentario": "**Gabarito: E.** O `MERGE` do padrão SQL foi incluído no PostgreSQL 15 (2022).\n\n- **A:** A versão 9.5 trouxe o `INSERT ... ON CONFLICT` (o \"upsert\"), que era a alternativa até então.\n- **B, C e D:** As versões 12, 13 e 14 ainda não tinham MERGE."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-BD-0107",
  "campos": {
    "comentario": "**Gabarito: B.** O H2 é um banco relacional escrito em Java que roda embutido na própria JVM e em memória (`jdbc:h2:mem:`), sem servidor para instalar; é escolha comum em testes de integração com Spring Boot.\n\n- **A:** Oracle 19c exige instalação e administração de um servidor.\n- **C:** MongoDB Atlas é serviço em nuvem de banco de documentos (NoSQL).\n- **D:** Redis é chave-valor em memória, mas não relacional.\n- **E:** Cassandra é NoSQL de família de colunas, distribuído."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-DEVOPS-0001",
  "campos": {
    "comentario": "**Gabarito: C.** Contêineres virtualizam o sistema operacional: todos usam o kernel do hospedeiro e isolam apenas processos, rede e sistema de arquivos. Por isso iniciam em segundos e ocupam pouco espaço.\n\n- **A:** Emular hardware completo (BIOS, dispositivos) é o que faz a máquina virtual.\n- **B:** SO convidado completo por instância também é característica da VM.\n- **D:** É o contrário: como compartilham o kernel, o isolamento dos contêineres é em geral mais fraco que o das VMs.\n- **E:** Contêineres não dependem de hipervisor; rodam direto sobre o kernel do hospedeiro."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-DEVOPS-0002",
  "campos": {
    "comentario": "**Gabarito: B.** **Namespaces** isolam o que o processo enxerga (PID, rede, pontos de montagem, usuários, hostname). **cgroups** limitam e contabilizam quanto o processo usa (CPU, memória, E/S). A ordem pedida é isolamento e depois limitação.\n\n- **A:** Traz os dois recursos certos, mas na ordem invertida.\n- **C:** `chroot` só troca a raiz do sistema de arquivos e SELinux é controle de acesso obrigatório; nenhum limita CPU e memória.\n- **D:** iptables é firewall e systemd é o gerenciador de serviços.\n- **E:** LVM gerencia volumes e OverlayFS é o sistema de arquivos em camadas das imagens."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-DEVOPS-0003",
  "campos": {
    "comentario": "**Gabarito: C.** `RUN` executa um comando **durante o build** e grava o resultado em uma nova camada da imagem (por exemplo, instalar pacotes).\n\n- **A:** `CMD` define o comando padrão quando o contêiner **inicia**; não roda no build.\n- **B:** `ENTRYPOINT` define o executável principal do contêiner, também em tempo de execução.\n- **D:** `EXPOSE` apenas documenta a porta que o contêiner escuta.\n- **E:** `VOLUME` declara um ponto de montagem para dados persistentes."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-DEVOPS-0004",
  "campos": {
    "comentario": "**Gabarito: C.** Na **implantação contínua** (*continuous deployment*), toda alteração que passa pelo pipeline vai para produção automaticamente, sem aprovação manual.\n\n- **A:** Integração contínua é integrar o código com frequência ao ramo principal, com build e testes automáticos; não trata da ida para produção.\n- **B:** Na entrega contínua (*continuous delivery*) o software fica sempre pronto para implantar, mas a ida para produção depende de uma decisão manual. É a pegadinha clássica.\n- **D:** Blue-green é uma estratégia de implantação com dois ambientes idênticos e troca de tráfego.\n- **E:** Feature toggle liga e desliga funcionalidades por configuração."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-DEVOPS-0005",
  "campos": {
    "comentario": "**Gabarito: Certo.** Contêineres virtualizam o sistema operacional e compartilham o kernel do hospedeiro; por isso são leves e iniciam rápido. O preço é um isolamento em geral mais fraco que o das máquinas virtuais, que têm kernel e SO próprios sobre um hipervisor. Todas as partes da afirmação estão corretas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-DEVOPS-0006",
  "campos": {
    "comentario": "**Gabarito: B.** No **canary release**, a nova versão recebe primeiro uma pequena fração do tráfego; se as métricas ficam boas, a fração aumenta até 100%.\n\n- **A:** Blue-green mantém dois ambientes completos e troca **todo** o tráfego de uma vez.\n- **C:** Recreate derruba a versão antiga e sobe a nova, com indisponibilidade.\n- **D:** Big bang troca tudo de uma vez para todos os usuários.\n- **E:** Cascata é modelo de ciclo de vida de desenvolvimento, não estratégia de implantação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-DEVOPS-0007",
  "campos": {
    "comentario": "**Gabarito: Certo.** Idempotência é exatamente isso: aplicar a mesma definição uma ou várias vezes leva ao mesmo estado final, sem efeitos acumulados. É o que permite reexecutar Terraform, Ansible ou manifestos do Kubernetes com segurança, e está ligada ao estilo declarativo (descreve-se o estado desejado, e não os passos)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0001",
  "campos": {
    "comentario": "**Gabarito: B.** *Stakeholders* são as partes interessadas: todas as pessoas, grupos ou organizações que afetam ou são afetados por um projeto ou pela organização (clientes, acionistas, empregados, fornecedores, reguladores, sociedade).\n\n- **A:** Acionistas, executivos e conselheiros são apenas alguns dos stakeholders; acionista, sozinho, é *shareholder*.\n- **C:** A equipe técnica é só uma parte dos interessados.\n- **D:** Órgãos fiscalizadores também são stakeholders, mas o conceito não se limita a eles."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0002",
  "campos": {
    "comentario": "**Gabarito: C.** O ERP (*Enterprise Resource Planning*) é um sistema de informação que integra os processos da empresa (finanças, compras, estoque, vendas, RH) em uma base única. É o exemplo clássico de TIC aplicada à gestão do negócio.\n\n- **A:** Entrega de comida é um serviço (um negócio em si), não uma aplicação de TIC à gestão empresarial.\n- **B:** Redes sociais de fotos são voltadas ao uso pessoal e ao entretenimento.\n- **D:** Máquina de lavar automática é um eletrodoméstico, automação de produto de consumo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0003",
  "campos": {
    "comentario": "**Gabarito: C.** A governança de TIC busca alinhar a TI ao negócio, entregar valor, gerir riscos e recursos e medir o desempenho. Com processos definidos e controlados, o resultado esperado é mais eficiência e eficácia nos processos de negócio.\n\n- **A:** A governança **aumenta** a transparência e a prestação de contas.\n- **B:** O esperado é otimizar custos e recursos, não aumentá-los.\n- **D:** Processos de mudança bem definidos reduzem a resistência e os riscos das mudanças tecnológicas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0004",
  "campos": {
    "comentario": "**Gabarito: E.** O COBIT 2019 separa governança de gestão. Os cinco objetivos de **governança** ficam no domínio EDM (Avaliar, Dirigir e Monitorar), de responsabilidade do conselho. Os 35 objetivos de gestão se distribuem pelos outros quatro domínios.\n\n- **A:** APO (14 objetivos) é domínio de gestão: estratégia, arquitetura, orçamento, riscos, segurança.\n- **B:** BAI (11 objetivos) é gestão: construção, aquisição e implantação de soluções.\n- **C:** DSS (6 objetivos) é gestão: operação e suporte dos serviços.\n- **D:** MEA (4 objetivos) é gestão: monitoramento de desempenho e conformidade."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0005",
  "campos": {
    "comentario": "**Gabarito: E.** A cadeia de valor de serviço da ITIL 4 tem seis atividades: planejar, melhorar, engajar, desenho e transição, obter/construir, e entregar e suportar. \"Operar e encerrar\" não existe.\n\n- **A:** Planejar é uma das seis atividades.\n- **B:** Engajar é uma das seis: relacionamento com as partes interessadas e entendimento da demanda.\n- **C:** Obter/construir é uma das seis: garante a disponibilidade dos componentes do serviço.\n- **D:** Entregar e suportar é uma das seis.\n\nNão confunda com as cinco fases do ciclo de vida da ITIL v3 (estratégia, desenho, transição, operação e melhoria contínua)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0006",
  "campos": {
    "comentario": "**Gabarito: B.** Na ITIL, **problema** é a causa, real ou potencial, de um ou mais incidentes. O registro trata da causa (certificado mal configurado) de várias falhas recorrentes; investigar e eliminar essa causa é papel do gerenciamento de problemas.\n\n- **A:** O gerenciamento de incidentes restaura o serviço o mais rápido possível a cada interrupção, sem buscar a causa raiz.\n- **C:** Requisição de serviço é um pedido comum do usuário (acesso, informação, troca de senha), não uma falha.\n- **D:** O gerenciamento de nível de serviço define e acompanha as metas acordadas com o cliente (SLA).\n- **E:** O gerenciamento de configuração mantém as informações sobre os itens de configuração e seus relacionamentos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0007",
  "campos": {
    "comentario": "**Gabarito: B.** Para o ITGI, a governança de TI é responsabilidade da **alta administração** (conselho de administração e diretoria executiva) e parte integrante da governança corporativa.\n\n- **A:** O departamento de TI cuida da gestão, do dia a dia; a governança não é assunto exclusivo dele.\n- **C:** Auditores externos avaliam e opinam, com independência; não respondem pela governança.\n- **D:** Usuários finais são partes interessadas, sem responsabilidade de direção.\n- **E:** O órgão regulador impõe normas de fora; a responsabilidade é interna à organização."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0008",
  "campos": {
    "comentario": "**Gabarito: D.** O ITGI define cinco áreas de foco da governança de TI: alinhamento estratégico, entrega de valor, gestão de riscos, gestão de recursos e mensuração de desempenho. Desenvolvimento ágil de software é abordagem de engenharia de software, não área de foco.\n\n- **A:** Alinhamento estratégico é área de foco: ligar os planos de TI aos do negócio.\n- **B:** Entrega de valor é área de foco: garantir que a TI entregue os benefícios prometidos.\n- **C:** Gestão de riscos é área de foco.\n- **E:** Mensuração de desempenho é área de foco (por exemplo, com o Balanced Scorecard).\n\nA quinta área, que a questão não lista, é a gestão de recursos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0009",
  "campos": {
    "comentario": "**Gabarito: Certo.** O Balanced Scorecard (Kaplan e Norton) traduz a estratégia em objetivos, indicadores, metas e iniciativas, distribuídos em quatro perspectivas ligadas por relações de causa e efeito: **financeira**, **clientes**, **processos internos** e **aprendizado e crescimento**. A ideia é equilibrar indicadores financeiros e não financeiros, de curto e de longo prazo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0010",
  "campos": {
    "comentario": "**Gabarito: C.** No modelo de alinhamento estratégico de Henderson e Venkatraman, a perspectiva de **potencial competitivo** parte da estratégia de TI: novas capacidades tecnológicas abrem oportunidades que alteram a estratégia de negócio e, depois, a infraestrutura organizacional.\n\n- **A:** Na execução da estratégia, a estratégia de negócio é a condutora e define a estrutura organizacional e a infraestrutura de TI (visão clássica).\n- **B:** Na transformação tecnológica, a estratégia de negócio conduz a estratégia de TI, que define a infraestrutura de TI.\n- **D:** No nível de serviço, a estratégia de TI define a infraestrutura de TI, com foco em atender bem a organização.\n- **E:** Integração funcional é uma dimensão do modelo (ligação entre negócio e TI), não uma das quatro perspectivas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0011",
  "campos": {
    "comentario": "**Gabarito: Errado.** São conceitos distintos, com responsáveis distintos. A **governança** avalia, dirige e monitora (EDM): define a direção e acompanha os resultados, e cabe ao conselho de administração e à alta direção. A **gestão** planeja, constrói, executa e monitora (PBRM) as atividades, seguindo a direção dada, e cabe à diretoria executiva e aos gestores. A separação entre governança e gestão é um princípio do COBIT."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0012",
  "campos": {
    "comentario": "**Gabarito: C.** No arquétipo **feudal** de Weill e Ross, cada unidade de negócio (ou processo) decide sozinha sobre a sua TI, conforme suas necessidades, sem coordenação central.\n\n- **A:** Na monarquia de TI, os executivos de TI decidem.\n- **B:** No federalismo, a decisão é compartilhada entre a alta direção corporativa e as unidades de negócio, com ou sem a TI.\n- **D:** No duopólio, executivos de TI decidem em acordo com outro grupo (alta direção ou líderes de unidades).\n- **E:** Na anarquia, cada usuário ou pequeno grupo decide por conta própria; o nível é o indivíduo, não a unidade de negócio."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0013",
  "campos": {
    "comentario": "**Gabarito: C.** **EDM** (Avaliar, Dirigir e Monitorar) é o único domínio de governança do COBIT 2019, com cinco objetivos.\n\n- **A:** APO (Alinhar, Planejar e Organizar) é domínio de gestão.\n- **B:** BAI (Construir, Adquirir e Implementar) é de gestão.\n- **D:** DSS (Entregar, Servir e Suportar) é de gestão.\n- **E:** MEA (Monitorar, Avaliar e Analisar) é de gestão. Cuidado: tem \"monitorar\" e \"avaliar\" no nome, mas trata do monitoramento feito pela gestão."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0014",
  "campos": {
    "comentario": "**Gabarito: C.** O modelo central do COBIT 2019 tem **40** objetivos: 5 de governança (EDM) e 35 de gestão (APO 14, BAI 11, DSS 6, MEA 4).\n\nDe onde vêm os distratores: 34 é o número de processos do COBIT 4.1; 37 é o número de processos do COBIT 5 (o 2019 acrescentou APO14 Dados Gerenciados, BAI11 Projetos Gerenciados e MEA04 Garantia Gerenciada); 41 e 45 não correspondem a nenhuma versão."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0015",
  "campos": {
    "comentario": "**Gabarito: B.** \"Disponibilidade e capacidade gerenciadas\" é o objetivo **BAI04**, do domínio Construir, Adquirir e Implementar. É pegadinha frequente, porque o tema parece operacional.\n\n- **A:** O DSS trata da operação: operações, requisições e incidentes, problemas, continuidade, serviços de segurança e controles de processos de negócio.\n- **C:** O APO trata de estratégia, arquitetura, orçamento, pessoas, fornecedores, riscos e segurança.\n- **D:** O MEA trata de monitoramento de desempenho, controle interno, conformidade e garantia.\n- **E:** O EDM é o domínio de governança."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0016",
  "campos": {
    "comentario": "**Gabarito: Certo.** O COBIT 2019 tem seis princípios para o sistema de governança: prover valor às partes interessadas, abordagem holística, **sistema de governança dinâmico**, governança distinta da gestão, **adaptado às necessidades da organização** e sistema de governança de ponta a ponta. Os dois citados são as novidades em relação aos cinco princípios do COBIT 5."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0017",
  "campos": {
    "comentario": "**Gabarito: E.** Os sete componentes do sistema de governança (os antigos \"habilitadores\" do COBIT 5) são: processos; estruturas organizacionais; princípios, políticas e procedimentos; informação; cultura, ética e comportamento; pessoas, habilidades e competências; e serviços, infraestrutura e aplicações. Acordo de nível de serviço com o Banco Central não é componente.\n\n- **A:** Processos são um dos sete componentes.\n- **B:** Estruturas organizacionais também.\n- **C:** Cultura, ética e comportamento também.\n- **D:** Informação também."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0018",
  "campos": {
    "comentario": "**Gabarito: Errado.** A escala de 0 a 5 está certa, mas a base não: no COBIT 2019, a capacidade dos processos segue um esquema baseado no **CMMI**. A ISO/IEC 15504 (SPICE) era a base do modelo de capacidade de processos do **COBIT 5**."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0019",
  "campos": {
    "comentario": "**Gabarito: D.** Os sete princípios orientadores da ITIL 4 são: foco no valor; comece onde você está; progrida iterativamente com feedback; colabore e promova visibilidade; pense e trabalhe de forma holística; mantenha simples e prático; otimize e automatize. \"Documente todos os processos antes de iniciar\" não existe e contraria dois deles: progredir iterativamente e manter simples e prático.\n\n- **A:** Foco no valor é princípio: tudo deve gerar valor para as partes interessadas.\n- **B:** Comece onde você está é princípio: aproveitar o que já existe antes de criar do zero.\n- **C:** Otimize e automatize é princípio: primeiro otimizar, depois automatizar.\n- **E:** Mantenha simples e prático é princípio: usar o mínimo de etapas necessário."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0020",
  "campos": {
    "comentario": "**Gabarito: B.** São as seis atividades da cadeia de valor de serviço, que se combinam em fluxos de valor para transformar demanda em valor: planejar, melhorar, engajar, desenho e transição, obter/construir, entregar e suportar.\n\n- **A:** São as cinco fases do ciclo de vida de serviço da ITIL v3.\n- **C:** Avaliar, direcionar e monitorar são as atividades de governança (ISO/IEC 38500 e domínio EDM do COBIT).\n- **D:** É o ciclo PDCA de Deming.\n- **E:** São as fases da prática de gerenciamento de problemas (identificação do problema, controle do problema e controle de erros)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0021",
  "campos": {
    "comentario": "**Gabarito: Certo.** São as definições da ITIL 4. **Incidente** é a interrupção não planejada ou a redução da qualidade de um serviço; **problema** é a causa, real ou potencial, de um ou mais incidentes; **erro conhecido** é um problema que já foi analisado, mas ainda não foi resolvido. Enquanto a solução definitiva não vem, usa-se uma **solução de contorno**, que reduz ou elimina o impacto."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0022",
  "campos": {
    "comentario": "**Gabarito: B.** **Garantia** (*warranty*) é a segurança de que o serviço atenderá aos requisitos acordados de disponibilidade, capacidade, continuidade e segurança: torna o serviço \"adequado ao uso\" e responde a \"como o serviço se comporta\".\n\n- **A:** É a definição de **utilidade** (*utility*): a funcionalidade oferecida, \"adequado ao propósito\", o que o serviço faz. O valor exige utilidade e garantia juntas.\n- **C:** Contratos com fornecedores pertencem à prática de gerenciamento de fornecedores.\n- **D:** Preço não é garantia; custos são tratados na gestão financeira do serviço.\n- **E:** Suporte jurídico não tem relação com o conceito."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0023",
  "campos": {
    "comentario": "**Gabarito: Certo.** A ITIL 4 define quatro dimensões que devem ser consideradas em conjunto em todo serviço: **organizações e pessoas** (estrutura, cultura, competências), **informação e tecnologia**, **parceiros e fornecedores**, e **fluxos de valor e processos**. Elas substituem os \"4 Ps\" da ITIL v3 (pessoas, processos, produtos e parceiros) e sofrem influência de fatores externos (modelo PESTLE)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0024",
  "campos": {
    "comentario": "**Gabarito: C.** A mudança **padrão** é de baixo risco, bem compreendida, documentada e **pré-autorizada**: pode ser executada sem nova avaliação nem autorização, em geral como requisição de serviço.\n\n- **A:** A mudança normal precisa ser agendada, avaliada e autorizada conforme o processo, caso a caso.\n- **B:** A mudança emergencial deve ser implementada o quanto antes (por exemplo, para resolver um incidente ou aplicar uma correção de segurança), com avaliação e autorização aceleradas.\n- **D:** \"Maior\" não é um dos três tipos de mudança da ITIL 4.\n- **E:** \"Significativa\" também não é um dos tipos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0025",
  "campos": {
    "comentario": "**Gabarito: B.** A ISO/IEC 38500 atribui ao órgão de governança três tarefas: **avaliar** o uso atual e futuro da TI, **dirigir** a preparação e a implementação de planos e políticas, e **monitorar** a conformidade e o desempenho. É o mesmo EDM do domínio de governança do COBIT.\n\n- **A:** Planejar, construir, executar e monitorar (PBRM) são as atividades da **gestão** no COBIT.\n- **C:** É o ciclo PDCA de melhoria contínua.\n- **D:** São etapas do processo de gestão de riscos.\n- **E:** Lembra os grupos de processos de gerenciamento de projetos do PMBOK."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0026",
  "campos": {
    "comentario": "**Gabarito: E.** Os seis princípios da ISO/IEC 38500:2015 são responsabilidade, estratégia, aquisição, desempenho, conformidade e comportamento humano. Automação não é princípio.\n\n- **A:** Responsabilidade é princípio: papéis e responsabilidades claros quanto à TI.\n- **B:** Estratégia é princípio: a estratégia do negócio considera as capacidades atuais e futuras da TI.\n- **C:** Aquisição é princípio: aquisições de TI feitas por razões válidas, com análise adequada.\n- **D:** Comportamento humano é princípio: respeito às necessidades das pessoas envolvidas.\n\nOs dois que a questão não lista são desempenho e conformidade. A edição de 2024 passou a adotar os 11 princípios da ISO 37000."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0027",
  "campos": {
    "comentario": "**Gabarito: Certo.** A ISO/IEC 20000-1 traz os **requisitos** para estabelecer, implementar, manter e melhorar continuamente um sistema de gestão de serviços (SGS). Por conter requisitos, é a parte certificável, e a certificação é dada a **organizações**. A parte 2 da norma traz orientações de aplicação e não é base de certificação. Lembre que a ITIL, por ser um conjunto de boas práticas, certifica pessoas, não organizações."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0028",
  "campos": {
    "comentario": "**Gabarito: A.** O PMBOK 6ª edição organiza seus 49 processos em cinco grupos de processos: iniciação, planejamento, execução, monitoramento e controle, e encerramento (e em 10 áreas de conhecimento).\n\n- **B:** Avaliar, dirigir e monitorar são as tarefas de governança da ISO/IEC 38500 e do COBIT.\n- **C:** São as fases do ciclo de vida de serviço da ITIL v3.\n- **D:** São parte das atividades da cadeia de valor de serviço da ITIL 4.\n- **E:** São áreas de conhecimento (e \"tempo\" passou a se chamar \"cronograma\" na 6ª edição), não grupos de processos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0029",
  "campos": {
    "comentario": "**Gabarito: Certo.** A edição de 2024 da ISO/IEC 38500 alinhou a governança de TI à norma de governança das organizações, a ISO 37000:2021. Com isso, os seis princípios da edição de 2015 (responsabilidade, estratégia, aquisição, desempenho, conformidade e comportamento humano) deram lugar aos onze princípios da ISO 37000, entre eles propósito, geração de valor, estratégia, supervisão e prestação de contas. As tarefas avaliar, dirigir e monitorar foram mantidas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0030",
  "campos": {
    "comentario": "**Gabarito: B.** Para o PMBOK, projeto é um esforço **temporário** (tem início e fim definidos) empreendido para criar um produto, serviço ou resultado **único**.\n\n- **A:** Esforço contínuo e repetitivo para manter o negócio define **operações**.\n- **C:** Operações rotineiras são o oposto de projeto.\n- **D:** A hierarquia é inversa: portfólio reúne programas e projetos; programa é um grupo de projetos relacionados.\n- **E:** Projetos existem em qualquer área, e nem toda atividade de TI é projeto (suporte e operação não são)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0031",
  "campos": {
    "comentario": "**Gabarito: B.** A 8ª edição do Guia PMBOK traz 6 princípios, 7 domínios de desempenho e 5 áreas de foco, e volta a apresentar processos (40), agora de forma não prescritiva.\n\n- **A:** 12 princípios e 8 domínios de desempenho são a estrutura da 7ª edição, que foi alterada.\n- **C:** 10 áreas de conhecimento e 49 processos são a estrutura da 6ª edição.\n- **D:** Quem deixou os processos de lado em favor de princípios foi a 7ª edição; a 8ª os retoma.\n- **E:** Os domínios de desempenho continuam (reduzidos a sete); não há \"grupos de entregáveis\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0032",
  "campos": {
    "comentario": "**Gabarito: B.** Os seis princípios da 8ª edição são: adotar uma visão holística, focar em valor, incorporar a qualidade aos processos e às entregas, ser um líder responsável, **integrar a sustentabilidade** em todas as áreas do projeto e construir uma cultura de empoderamento.\n\n- **A:** ITTOs (entradas, ferramentas e técnicas, saídas) são a forma de descrever processos, não um princípio.\n- **C:** Controlar o escopo é um processo, não um princípio.\n- **D:** O guia não privilegia abordagem alguma: preditiva, adaptativa ou híbrida, conforme o contexto.\n- **E:** Centralizar decisões no PMO contraria a ideia de cultura de empoderamento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0033",
  "campos": {
    "comentario": "**Gabarito: Certo.** Os sete domínios de desempenho da 8ª edição são Governança, Escopo, Cronograma, **Finanças**, Partes Interessadas, Recursos e Riscos. Os nomes lembram as antigas áreas de conhecimento. Não confunda com os oito domínios da 7ª edição (partes interessadas, equipe, abordagem de desenvolvimento e ciclo de vida, planejamento, trabalho do projeto, entrega, medição e incerteza)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0034",
  "campos": {
    "comentario": "**Gabarito: B.** As cinco áreas de foco da 8ª edição retomam os antigos grupos de processos: iniciação, planejamento, execução, monitoramento e controle, e encerramento.\n\n- **A:** Lembra as áreas de conhecimento antigas; na 8ª edição, escopo, cronograma e riscos aparecem como domínios de desempenho.\n- **C:** São domínios de desempenho da 7ª edição.\n- **D:** São temas dos princípios (valor, qualidade, liderança, sustentabilidade, cultura).\n- **E:** São abordagens de desenvolvimento e ciclos de vida."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0035",
  "campos": {
    "comentario": "**Gabarito: D.** O art. 28 da Lei 14.133/2021 prevê cinco modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo. **Tomada de preços** e convite, que existiam na Lei 8.666/1993, foram extintos (assim como o RDC como regime à parte).\n\n- **A:** O pregão é modalidade, obrigatória para bens e serviços comuns.\n- **B:** A concorrência é modalidade, para bens e serviços especiais e obras.\n- **C:** O diálogo competitivo é a modalidade nova, para contratações complexas em que a Administração dialoga com licitantes para definir a solução.\n- **E:** O leilão é modalidade, para alienação de bens."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0036",
  "campos": {
    "comentario": "**Gabarito: B.** O **Estudo Técnico Preliminar** (ETP) caracteriza a necessidade, levanta e compara as soluções disponíveis, estima custos e justifica a solução escolhida e a viabilidade da contratação.\n\n- **A:** O Termo de Referência vem depois do ETP e detalha o objeto, os requisitos, o modelo de execução e de gestão do contrato e os critérios de seleção do fornecedor.\n- **C:** O DFD abre o processo: a área requisitante apenas formaliza a demanda.\n- **D:** O IMR mede a qualidade do serviço já contratado e ajusta o pagamento.\n- **E:** A Ordem de Serviço é emitida na execução do contrato para solicitar o serviço à contratada."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0037",
  "campos": {
    "comentario": "**Gabarito: Certo.** O art. 1º, § 1º, da Lei 14.133/2021 exclui de sua abrangência as empresas públicas, as sociedades de economia mista e suas subsidiárias, que são regidas pela **Lei 13.303/2016** (Lei das Estatais), ressalvadas as disposições penais (art. 178). Um banco estadual constituído como sociedade de economia mista, como o Banestes, licita com base na Lei 13.303 e em seu regulamento interno de licitações e contratos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0038",
  "campos": {
    "comentario": "**Gabarito: C.** O **IMR** (Instrumento de Medição de Resultado) define indicadores, metas e níveis mínimos de qualidade do serviço e as faixas de ajuste: se o resultado fica abaixo do nível acordado, o pagamento é reduzido proporcionalmente. É o que permite pagar por resultado.\n\n- **A:** O ETP é documento do planejamento, que analisa a necessidade e escolhe a solução.\n- **B:** O DFD apenas formaliza a demanda da área requisitante.\n- **D:** O PDTIC é o plano diretor de TIC do órgão, instrumento de planejamento tático.\n- **E:** O mapa de riscos identifica e trata os riscos da contratação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0039",
  "campos": {
    "comentario": "**Gabarito: B.** O art. 17 da Lei 14.133/2021 fixa a sequência: preparatória; divulgação do edital; apresentação de propostas e lances; **julgamento**; **habilitação**; recursal; homologação. A marca da lei é o julgamento antes da habilitação (só se examinam os documentos do vencedor); a inversão é possível, mas exige justificativa.\n\n- **A:** Omite as fases preparatória e de divulgação e põe a habilitação em primeiro, ordem da antiga Lei 8.666.\n- **C:** Põe a habilitação antes do julgamento e a homologação antes da fase recursal.\n- **D:** Põe a habilitação antes da própria divulgação do edital.\n- **E:** Começa pelas propostas, antes de haver edital divulgado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0040",
  "campos": {
    "comentario": "**Gabarito: A.** A **Fase A, Visão da Arquitetura**, abre o ciclo do ADM: define o escopo, identifica as partes interessadas e suas preocupações, cria a visão de alto nível da arquitetura-alvo e obtém a aprovação para prosseguir.\n\n- **B:** A Fase B desenvolve a arquitetura de negócio (linha de base e alvo) em detalhe.\n- **C:** A Fase E identifica os projetos e as soluções que vão realizar a arquitetura.\n- **D:** A Fase G supervisiona a implementação para garantir a conformidade com a arquitetura.\n- **E:** A Fase H gerencia as mudanças na arquitetura depois de implantada."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0041",
  "campos": {
    "comentario": "**Gabarito: B.** O **OLA** (*Operational Level Agreement*, acordo de nível operacional) é firmado entre equipes **internas** do provedor (por exemplo, service desk, redes e banco de dados) para sustentar as metas do SLA.\n\n- **A:** O SLA é o acordo entre o provedor e o **cliente**.\n- **C:** O UC (*Underpinning Contract*, contrato de apoio) é firmado com **fornecedor externo**.\n- **D:** O NDA é um acordo de confidencialidade.\n- **E:** O SLR (*Service Level Requirement*) é o requisito de nível de serviço pedido pelo cliente, base para negociar o SLA."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0042",
  "campos": {
    "comentario": "**Gabarito: Certo.** O PDTIC (Plano Diretor de TIC) é o instrumento de planejamento **tático** que desdobra a estratégia do órgão (PEI e estratégia de TIC) em diagnóstico, planejamento e gestão dos recursos e processos de TIC. Entre seus conteúdos estão o inventário de necessidades priorizadas e o plano de metas e ações, além dos planos de gestão de pessoas, orçamentário e de gestão de riscos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0043",
  "campos": {
    "comentario": "**Gabarito: B.** Comprar servidores é investimento em ativos, **CAPEX** (despesa de capital), depreciado ao longo dos anos. Pagar a nuvem conforme o uso é despesa corrente, **OPEX** (despesa operacional). A troca reduz o CAPEX e aumenta o OPEX.\n\n- **A:** É o movimento inverso, de quem sai da nuvem para infraestrutura própria.\n- **C:** O TCO (custo total de propriedade) não desaparece; ele muda de composição e precisa ser comparado.\n- **D:** A natureza do gasto muda, logo os dois se alteram.\n- **E:** Depreciação decorre de ativos adquiridos (CAPEX); com a nuvem há menos ativos a depreciar."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-GOV-0044",
  "campos": {
    "comentario": "**Gabarito: B.** ROI = (ganho − custo) ÷ custo = (260 − 200) ÷ 200 = 60 ÷ 200 = 0,30 = **30%**.\n\nDe onde vêm os distratores: 23% é o lucro dividido pelo ganho (60 ÷ 260); 60 é o lucro em milhares de reais, não um percentual; 77% é o custo dividido pelo ganho (200 ÷ 260); 130% é o ganho dividido pelo custo (260 ÷ 200), sem descontar o investimento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-NUVEM-0001",
  "campos": {
    "comentario": "**Gabarito: A.** No **PaaS** (plataforma como serviço), o cliente implanta a própria aplicação e ajusta suas configurações; o provedor administra rede, servidores, sistema operacional, patches, runtime e escalabilidade.\n\n- **B:** No IaaS o cliente recebe máquinas virtuais, rede e armazenamento e precisa administrar o sistema operacional e o servidor de aplicação.\n- **C:** No SaaS o cliente só usa uma aplicação pronta do provedor; não implanta código próprio.\n- **D:** Nuvem comunitária é modelo de **implantação** (quem usa a nuvem), não de serviço.\n- **E:** Nuvem híbrida também é modelo de implantação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-NUVEM-0002",
  "campos": {
    "comentario": "**Gabarito: B.** O NIST (SP 800-145) define cinco características essenciais: **autoatendimento sob demanda**, **amplo acesso à rede**, **agrupamento de recursos** (*resource pooling*, multi-inquilino), **elasticidade rápida** e **serviço medido**.\n\n- **A:** Virtualização é tecnologia de base, multicloud é estratégia e pagamento antecipado contraria o serviço medido (paga-se pelo uso).\n- **C:** Mistura os três modelos de serviço (IaaS, PaaS, SaaS) com modelos de implantação (pública, privada).\n- **D:** Alta disponibilidade, criptografia e SLA não estão na lista do NIST.\n- **E:** O acesso é amplo, por redes padrão (não rede privada), e os recursos são agrupados e compartilhados (não dedicados)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-NUVEM-0004",
  "campos": {
    "comentario": "**Gabarito: Errado.** Pela definição do NIST, a nuvem híbrida é a composição de duas ou mais infraestruturas de nuvem (privada, comunitária ou pública) que **permanecem entidades distintas**, mas são ligadas por tecnologia padronizada ou proprietária que permite a portabilidade de dados e aplicações (por exemplo, *cloud bursting*). Também não há exigência de um único provedor: o caso típico combina a nuvem privada da organização com a pública de um fornecedor."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-NUVEM-0005",
  "campos": {
    "comentario": "**Gabarito: C.** A nuvem **comunitária** é de uso exclusivo de uma comunidade de organizações com preocupações em comum (missão, requisitos de segurança, política, conformidade regulatória). Pode ser gerida pelas próprias organizações ou por terceiros.\n\n- **A:** A nuvem pública é aberta ao público em geral.\n- **B:** A nuvem privada é de uso exclusivo de **uma única** organização.\n- **D:** A híbrida é a composição de duas ou mais nuvens distintas, interligadas.\n- **E:** Computação de borda (*edge*) é processamento próximo da origem dos dados, não um modelo de implantação do NIST."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-NUVEM-0006",
  "campos": {
    "comentario": "**Gabarito: C.** **Multicloud** é usar serviços de dois ou mais provedores de nuvem ao mesmo tempo, para reduzir a dependência de um fornecedor (*vendor lock-in*), aumentar a resiliência e aproveitar o melhor de cada um.\n\n- **A:** *Cloud bursting* é transbordar a carga da nuvem privada para a pública nos picos de demanda.\n- **B:** Nuvem comunitária é modelo de implantação compartilhado por organizações com interesses comuns.\n- **D:** *Fog computing* leva processamento e armazenamento a nós intermediários entre os dispositivos e a nuvem.\n- **E:** *Lift and shift* é migrar a aplicação para a nuvem como está, sem reescrevê-la."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-NUVEM-0007",
  "campos": {
    "comentario": "**Gabarito: C.** No IaaS o provedor responde pela segurança **da** nuvem (instalações físicas, hardware, rede, hipervisor) e o cliente pela segurança **na** nuvem: sistema operacional das máquinas virtuais (inclusive patches), aplicações, dados, contas e regras de firewall.\n\n- **A:** A segurança física do data center é sempre do provedor.\n- **B:** O hipervisor é mantido pelo provedor.\n- **D:** A troca de hardware defeituoso é do provedor.\n- **E:** Energia e redundância das zonas de disponibilidade são do provedor."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-NUVEM-0008",
  "campos": {
    "comentario": "**Gabarito: C.** **Elasticidade** é a capacidade de provisionar e liberar recursos de forma automática e rápida, acompanhando a carga para cima e para baixo, com cobrança pelo que foi usado. A diferença para a escalabilidade é o ajuste dinâmico nos dois sentidos.\n\n- **A:** Escalabilidade vertical é aumentar os recursos de uma mesma máquina (mais CPU, mais memória); não implica automatismo nem redução.\n- **B:** Alta disponibilidade é manter o serviço no ar, com redundância.\n- **D:** Tolerância a falhas é continuar operando mesmo quando um componente falha.\n- **E:** Portabilidade é poder mover a aplicação entre ambientes ou provedores."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-NUVEM-0009",
  "campos": {
    "comentario": "**Gabarito: Errado.** *Serverless* não quer dizer ausência de servidores: o código (por exemplo, funções em FaaS) executa em servidores do **provedor de nuvem**, não no navegador. \"Sem servidor\" significa que o cliente não provisiona nem administra servidores; o provedor aloca a capacidade sob demanda, escala automaticamente (inclusive a zero) e cobra pelo tempo de execução."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-NUVEM-0010",
  "campos": {
    "comentario": "**Gabarito: B.** O **RPO** (*Recovery Point Objective*) é o ponto no tempo até onde os dados precisam ser recuperados: a perda máxima tolerável de dados, medida em tempo. Um RPO de 1 hora exige backup ou replicação pelo menos a cada hora.\n\n- **A:** O RTO (*Recovery Time Objective*) é o tempo máximo aceitável para restabelecer o serviço após a interrupção.\n- **C:** O MTTR é o tempo médio de reparo.\n- **D:** O MTBF é o tempo médio entre falhas, medida de confiabilidade.\n- **E:** O SLA é o acordo de nível de serviço entre provedor e cliente."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-NUVEM-0011",
  "campos": {
    "comentario": "**Gabarito: C.** O fator III (Config) do Twelve-Factor App manda guardar no **ambiente** tudo o que varia entre implantações (credenciais, endereços de banco e de serviços), em variáveis de ambiente, com separação estrita entre configuração e código. Assim, o mesmo build roda em qualquer ambiente.\n\n- **A:** Constantes no código misturam configuração e código e expõem credenciais no repositório.\n- **B:** Arquivos versionados com o código têm o mesmo problema e acabam vazando segredos.\n- **D:** O endereço e a credencial do banco são justamente o que se precisa conhecer antes de acessá-lo.\n- **E:** Log é fluxo de eventos (fator XI), não lugar de configuração, e não deve conter segredos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0001",
  "campos": {
    "comentario": "**Gabarito: E.** A coluna X traz as marcas do **Scrum**: ritmo em sprints, papéis definidos (Product Owner, Scrum Master, Developers), entrega ao fim de cada sprint e mudanças evitadas durante a sprint. A coluna Y traz as do **Kanban**: fluxo contínuo, nenhum papel obrigatório, entrega contínua e mudanças a qualquer momento.\n\n- **A:** Crystal não se organiza obrigatoriamente em sprints com papéis fixos, e Scrum não é fluxo contínuo sem papéis.\n- **B:** XP tem iterações e papéis, mas Crystal não é o método do fluxo contínuo sem funções.\n- **C:** Kanban é a coluna Y, não a X; Lean é uma filosofia (eliminar desperdício), não um método com esse quadro.\n- **D:** Lean não prescreve sprints nem papéis, e XP trabalha em iterações curtas, não em fluxo contínuo sem funções."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0002",
  "campos": {
    "comentario": "**Gabarito: B.** Requisito funcional descreve um serviço que o sistema deve oferecer, algo que o usuário faz por meio dele. Conferir os documentos enviados é uma função que o sistema interno precisa disponibilizar a Marta.\n\n- **A:** \"Analítico\" não é categoria de requisito na engenharia de requisitos.\n- **C:** Proteção (*security*) é atributo de qualidade, logo requisito não funcional.\n- **D:** Requisito de produto, na classificação de Sommerville, é um tipo de requisito não funcional (desempenho, usabilidade, confiabilidade).\n- **E:** Confiança (*dependability*) também é atributo de qualidade, não uma função."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0003",
  "campos": {
    "comentario": "**Gabarito: C.** Para a banca, um campo que aceita qualquer sequência de caracteres deixa de prevenir erros do usuário, e prevenção de erros é um atributo de **usabilidade** (heurística de Nielsen; \"proteção contra erro do usuário\" na ISO 25010). A mesma falha também poderia ser lida como problema de integridade dos dados, mas o gabarito oficial é usabilidade.\n\n- **A:** Manutenibilidade é a facilidade de modificar o software, nada tem a ver com a entrada de dados.\n- **B:** Reparabilidade é a facilidade de corrigir o sistema depois de uma falha.\n- **D:** Confiabilidade é o sistema funcionar sem falhas ao longo do tempo; aqui nada falha, o sistema só aceita dado mal formado.\n- **E:** Vulnerabilidade é uma fraqueza de segurança, não uma categoria de requisito."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0004",
  "campos": {
    "comentario": "**Gabarito: B.** O **diagrama de atividades** modela o fluxo de controle e o fluxo de dados (objetos) de um procedimento passo a passo, como um fluxo de trabalho. É o indicado para detalhar um caso de uso regido por procedimentos e normas organizacionais.\n\n- **A:** O diagrama de sequência mostra a troca de mensagens entre objetos ao longo do tempo, não o procedimento com decisões e fluxo de dados.\n- **C:** O diagrama de temporização mostra a mudança de estado dos objetos em uma escala de tempo.\n- **D:** Causa e efeito (Ishikawa) é ferramenta de qualidade, não é diagrama da UML.\n- **E:** Não existe diagrama de ocorrências na UML 2.5.1."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0005",
  "campos": {
    "comentario": "**Gabarito: D.** O *brainstorming* é uma técnica de elicitação em grupo que complementa as entrevistas: as partes interessadas expõem livremente ideias sobre o sistema e depois ajudam a priorizá-las.\n\n- **A:** A frase é verdadeira, mas diagrama de sequência é modelagem de projeto, não técnica de levantamento.\n- **B:** O protótipo serve para validar requisitos com os **usuários**, não com os desenvolvedores.\n- **C:** Também é verdadeira em si, mas modelagem de processos de negócio representa fluxos da organização, não otimiza o resultado das entrevistas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0006",
  "campos": {
    "comentario": "**Gabarito: A.** JAD (*Joint Application Development*) consiste em oficinas (workshops) estruturadas, conduzidas por um facilitador, nas quais usuários e desenvolvedores discutem o projeto e definem juntos os requisitos.\n\n- **B:** Descrição vaga, mais próxima do próprio RAD; a JAD trata de levantar requisitos, não de acelerar a implementação.\n- **C:** A colaboração vem das sessões conjuntas, não do fato de se estabelecer um cronograma.\n- **D:** A JAD não se baseia em entrevistas nem em usuários interagindo só entre si: é reunião conjunta de usuários **e** desenvolvedores."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0007",
  "campos": {
    "comentario": "**Gabarito: B.** Validar é confirmar que os requisitos (e o sistema construído a partir deles) atendem às necessidades reais do cliente e às expectativas do usuário: \"estamos construindo o produto certo?\".\n\n- **A:** Levantar necessidades é elicitação, e o objetivo não é eliminar requisitos.\n- **C:** Comparar a implementação com o que foi especificado é **verificação** (\"estamos construindo certo o produto?\").\n- **D:** Garantir recursos humanos é assunto de gerência de projetos, não de engenharia de requisitos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0008",
  "campos": {
    "comentario": "**Gabarito: D.** Requisitos não funcionais envolvem várias áreas (negócio, segurança, infraestrutura, usuários) e exigem negociação entre elas. Os workshops colaborativos reúnem todos na mesma sessão e, por isso, a banca os considera os mais apropriados para desempenho, segurança e usabilidade.\n\n- **A:** A análise de documentos mostra o que já está registrado, e requisitos de qualidade raramente estão documentados.\n- **B:** A entrevista ouve uma pessoa por vez e tende a se concentrar nas funções que ela usa.\n- **C:** Questionários têm perguntas fechadas e não permitem discutir restrições e conflitos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0009",
  "campos": {
    "comentario": "**Gabarito: D.** Cenários e histórias de uso descrevem, passo a passo, a interação de um ator com o sistema para atingir um objetivo. Essa é a base da técnica de **casos de uso**.\n\n- **A:** Entrevista é conversa de perguntas e respostas com o interessado, sem a estrutura de cenários.\n- **B:** Na observação (etnografia) o analista acompanha o trabalho real do usuário, sem descrever cenários.\n- **C:** Na prototipação constrói-se uma versão preliminar do sistema para o usuário experimentar."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0010",
  "campos": {
    "comentario": "**Gabarito: C.** A matriz de rastreabilidade liga cada requisito à sua origem (quem pediu, qual necessidade) e aos artefatos derivados: projeto, código e casos de teste. Com ela se faz análise de impacto de mudanças e se confere se todo requisito foi implementado e testado.\n\n- **A:** Custos são tratados no gerenciamento de custos do projeto, não na matriz.\n- **B:** Priorização usa outras técnicas, como MoSCoW ou valor de negócio.\n- **D:** A matriz pode ajudar a perceber lacunas, mas não é metodologia de correção de inconsistências; isso é papel da análise e da validação de requisitos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0011",
  "campos": {
    "comentario": "**Gabarito: A.** A dificuldade clássica é construir um protótipo que represente bem o sistema final: como ele é simplificado (sem desempenho, segurança ou tratamento de erros reais), pode passar uma ideia errada e gerar expectativas falsas no usuário.\n\n- **B:** Protótipos devem ser baratos e rápidos; em geral reduzem o custo total ao evitar retrabalho.\n- **C:** Falta de apoio da equipe não é dificuldade própria da técnica.\n- **D:** A limitação para mostrar requisitos não funcionais vem da natureza simplificada do protótipo, não das linguagens de programação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0012",
  "campos": {
    "comentario": "**Gabarito: D.** Classe (estrutura estática), objeto (instâncias específicas) e componente (partes físicas e suas interfaces) são os três diagramas estruturais que o enunciado descreve.\n\n- **A:** O diagrama de atividade é comportamental.\n- **B:** O diagrama de caso de uso é comportamental.\n- **C:** Pacote, perfil e classe são todos estruturais, mas a lista não inclui os diagramas de objeto (instâncias) e de componente (componentes físicos) citados no enunciado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0013",
  "campos": {
    "comentario": "**Gabarito: A.** Elicitação (ou levantamento) é a atividade de descobrir e entender os requisitos junto às partes interessadas.\n\n- **B:** Engenharia de requisitos é o processo inteiro: elicitação, análise, especificação, validação e gerência.\n- **C:** Requisitos funcionais são um tipo de requisito (o que o sistema faz), não uma atividade.\n- **D:** Requisitos não funcionais são outro tipo de requisito (qualidades e restrições)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0014",
  "campos": {
    "comentario": "**Gabarito: D.** O Guia do Scrum 2020 associa um compromisso a cada artefato: Backlog do Produto, Meta do Produto; Backlog da Sprint, Meta da Sprint; Incremento, **Definição de Pronto** (descrição formal do estado do Incremento quando atende às medidas de qualidade exigidas).\n\n- **A:** A Meta do Produto é o compromisso do Backlog do Produto.\n- **B:** A Meta da Sprint é o compromisso do Backlog da Sprint.\n- **C:** Visão do Produto não é termo do Guia 2020.\n- **E:** Critério de aceite pertence a cada item (história), não é compromisso de artefato no Guia."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0015",
  "campos": {
    "comentario": "**Gabarito: A.** Limitar o WIP (trabalho em progresso) em cada coluna é a prática central do Kanban: com menos itens abertos, cada um termina mais rápido (menor tempo de ciclo) e a etapa que trava fica visível, pois o limite impede que se puxe trabalho novo.\n\n- **B:** Pontos de história são prática comum em times Scrum; o Kanban não exige estimativa.\n- **C:** Iterações de duração fixa são do Scrum; o Kanban trabalha em fluxo contínuo.\n- **D:** Scrum Master é papel do Scrum; o Kanban não prescreve papéis.\n- **E:** Iniciar mais tarefas ao mesmo tempo aumenta o WIP e o tempo de ciclo, o oposto do que se quer."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0016",
  "campos": {
    "comentario": "**Gabarito: B.** Na **composição** a parte depende do todo: não existe sem ele e é destruída junto. A notação é o losango preenchido na extremidade do todo (`Pedido`).\n\n- **A:** Na agregação (losango vazio) a parte existe independentemente do todo.\n- **C:** Generalização é herança (\"é um\"); `ItemPedido` não é um tipo de `Pedido`.\n- **D:** Dependência indica apenas que um elemento usa o outro, sem relação todo-parte nem ciclo de vida comum.\n- **E:** Realização liga uma classe à interface que ela implementa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0017",
  "campos": {
    "comentario": "**Gabarito: C.** **«include»** indica comportamento obrigatório, sempre executado pelo caso base (\"Autenticar com token\"). **«extend»** indica comportamento opcional, executado só sob uma condição (\"Agendar Pix\", quando há data futura).\n\n- **A:** Traz os dois relacionamentos na ordem invertida.\n- **B:** Generalização é herança entre casos de uso (um é versão especializada do outro), não execução obrigatória de uma etapa.\n- **D:** O primeiro está certo, mas agendar não é uma especialização de \"Realizar Pix\" no sentido pedido: é um comportamento condicional, logo «extend».\n- **E:** Associação liga ator a caso de uso, não um caso de uso a outro."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0018",
  "campos": {
    "comentario": "**Gabarito: E.** A análise de valor limite testa as fronteiras de cada partição e os valores imediatamente vizinhos, porque os defeitos se concentram ali (por exemplo, `<` no lugar de `<=`). Para o intervalo de 0,01 a 1.000,00: 0,00 (inválido) e 0,01 (válido) no limite inferior; 1.000,00 (válido) e 1.000,01 (inválido) no superior.\n\n- **A:** Um valor do meio do intervalo é típico de particionamento de equivalência, não testa limite.\n- **B:** Testa só os limites válidos, sem os vizinhos inválidos.\n- **C:** São valores representativos de cada partição, longe das fronteiras.\n- **D:** Testa só os vizinhos inválidos, sem os limites válidos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0019",
  "campos": {
    "comentario": "**Gabarito: B.** Requisito não funcional expressa qualidade ou restrição sobre como o sistema opera. Tempo de resposta (até 2 segundos em 95% das requisições) é requisito de **desempenho**, e está escrito de forma mensurável, como deve ser.\n\n- **A:** Consultar extrato é uma função do sistema.\n- **C:** Cadastrar chaves Pix é uma função.\n- **D:** Emitir comprovante é uma função.\n- **E:** Bloquear o cartão a pedido do cliente é uma função."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0020",
  "campos": {
    "comentario": "**Gabarito: B.** A prototipação é indicada quando o cliente define só os objetivos gerais e não detalha entradas, processamento e saídas: o protótipo é construído rápido, o cliente avalia e os requisitos vão sendo esclarecidos (Pressman).\n\n- **A:** O cascata exige requisitos bem compreendidos e estáveis desde o início.\n- **C:** O modelo V é uma variação do cascata, com a mesma exigência.\n- **D:** O RAD pede requisitos bem entendidos e escopo restrito para ser desenvolvido em ciclos muito curtos.\n- **E:** Codifica-remenda é a ausência de processo, não um modelo recomendável."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0021",
  "campos": {
    "comentario": "**Gabarito: Certo.** No modelo em espiral, cada volta passa por quatro setores (na descrição de Sommerville): definição de objetivos, avaliação e redução de riscos, desenvolvimento e validação, e planejamento da próxima volta. A análise explícita de riscos a cada ciclo é justamente o que distingue o espiral do cascata, do incremental e da prototipação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0022",
  "campos": {
    "comentario": "**Gabarito: B.** No modelo V cada fase de especificação tem um nível de teste correspondente. O projeto da arquitetura (como os módulos se relacionam) é validado pelo teste de **integração**.\n\n- **A:** O teste de unidade corresponde ao projeto detalhado de cada módulo.\n- **C:** O teste de sistema corresponde à especificação de requisitos do sistema.\n- **D:** O teste de aceitação corresponde aos requisitos do usuário.\n- **E:** Regressão não é um nível do V: é a reexecução de testes após uma mudança, em qualquer nível."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0023",
  "campos": {
    "comentario": "**Gabarito: C.** Manutenção **adaptativa** ajusta o software a mudanças no ambiente externo: legislação, normas, regras de negócio, plataforma. Uma nova resolução do Banco Central é o exemplo típico.\n\n- **A:** Corretiva corrige defeitos, e o enunciado diz que não há defeito.\n- **B:** Preventiva melhora a estrutura para evitar problemas futuros (por exemplo, refatoração).\n- **D:** Perfectiva acrescenta ou melhora funcionalidades e desempenho a pedido dos usuários, sem imposição externa.\n- **E:** Emergencial é uma correção feita fora do planejamento para restabelecer o serviço; não é o caso."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0024",
  "campos": {
    "comentario": "**Gabarito: Errado.** É o contrário: segundo Pressman, o RAD **não** é adequado quando os riscos técnicos são altos, como no uso intenso de tecnologia nova. Ele também não serve quando o sistema não pode ser modularizado ou exige alto desempenho por ajuste fino. O RAD funciona com requisitos bem compreendidos, escopo restrito e reúso de componentes, em ciclos de 60 a 90 dias. Para alto risco, o modelo indicado é o espiral."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0025",
  "campos": {
    "comentario": "**Gabarito: B.** Na **Elaboração** analisa-se o domínio, define-se e valida-se uma arquitetura executável e tratam-se os riscos de maior prioridade. O marco que a encerra é o LCA (*Lifecycle Architecture*).\n\n- **A:** A Concepção define escopo e viabilidade do negócio; marco LCO (*Lifecycle Objectives*).\n- **C:** A Construção desenvolve o produto sobre a arquitetura já estável; marco IOC (*Initial Operational Capability*).\n- **D:** A Transição entrega o produto aos usuários; marco PR (*Product Release*).\n- **E:** Implantação é uma disciplina do RUP, não uma de suas quatro fases."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0026",
  "campos": {
    "comentario": "**Gabarito: Errado.** No RUP quem é sequencial são as **fases** (Concepção, Elaboração, Construção, Transição). As disciplinas atravessam todas as fases, com intensidade variável, e se repetem a cada iteração (o gráfico das \"baleias\"). A disciplina de Teste, portanto, ocorre em todas as iterações, inclusive na Elaboração, em paralelo com a Implementação, e não só depois que ela termina."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0027",
  "campos": {
    "comentario": "**Gabarito: C.** O RUP tem nove disciplinas. As seis de engenharia são Modelagem de Negócio, Requisitos, Análise e Design, Implementação, Teste e Implantação. As três de **suporte** são Gerenciamento de Configuração e Mudança, Gerenciamento de Projeto e Ambiente.\n\n- **A:** As três são disciplinas de engenharia.\n- **B:** As três são disciplinas de engenharia.\n- **D:** Só Ambiente é de suporte; Implantação e Teste são de engenharia.\n- **E:** Requisitos é disciplina de engenharia."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0028",
  "campos": {
    "comentario": "**Gabarito: B.** A tríade clássica do Processo Unificado (Jacobson, Booch e Rumbaugh): dirigido por casos de uso (eles guiam requisitos, projeto e testes), centrado na arquitetura (definida cedo, na Elaboração) e iterativo e incremental.\n\n- **A:** O UP não é sequencial nem orientado a documentos; isso lembra o cascata.\n- **C:** O UP trata riscos cedo, mas não se define por protótipos descartáveis, e produz documentação (artefatos e modelos UML).\n- **D:** \"Dirigido por testes\" remete ao TDD e ao XP; entregas diárias não são do UP.\n- **E:** Funcionalidades, dono de classe e inspeções são características do FDD."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0029",
  "campos": {
    "comentario": "**Gabarito: Certo.** A Transição leva o produto ao ambiente dos usuários. Suas atividades típicas são testes beta, conversão das bases de dados operacionais, treinamento de usuários e do pessoal de suporte e ajustes finais. A fase termina com o marco *Product Release* (lançamento do produto)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0030",
  "campos": {
    "comentario": "**Gabarito: C.** Os quatro valores do Manifesto Ágil: indivíduos e interações mais que processos e ferramentas; software em funcionamento mais que documentação abrangente; **colaboração com o cliente mais que negociação de contratos**; responder a mudanças mais que seguir um plano.\n\n- **A:** Invertido: indivíduos e interações é que valem mais.\n- **B:** Mistura pares: software em funcionamento é comparado com documentação abrangente, não com contratos.\n- **D:** Invertido: responder a mudanças vale mais que seguir um plano.\n- **E:** Invertido: software em funcionamento vale mais que documentação abrangente."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0031",
  "campos": {
    "comentario": "**Gabarito: Errado.** O sétimo princípio do Manifesto Ágil afirma que **software funcionando** é a medida primária de progresso. Percentual de cronograma cumprido ou de documentos entregues não mostra valor real: só o que funciona e pode ser usado conta como avanço."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0032",
  "campos": {
    "comentario": "**Gabarito: B.** No FDD, o **dono de classe** (*class owner*) é o desenvolvedor individualmente responsável por uma classe: sua consistência, desempenho e integridade conceitual. É o oposto da propriedade coletiva do código do XP, em que qualquer um altera qualquer parte.\n\n- **A:** O programador-chefe lidera as equipes de funcionalidade e distribui o trabalho.\n- **C:** A equipe de funcionalidade é o grupo temporário, formado pelos donos das classes envolvidas, que implementa uma funcionalidade.\n- **D:** Inspeção é a prática de revisão de projeto e código para garantir a qualidade.\n- **E:** O arquiteto-chefe responde pelo projeto geral do sistema."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0033",
  "campos": {
    "comentario": "**Gabarito: A.** A 1ª edição do XP (Kent Beck) trazia quatro valores: comunicação, simplicidade, feedback e coragem. A 2ª edição acrescentou o **respeito**.\n\n- **B:** Foco, abertura, coragem, compromisso e respeito são os cinco valores do Scrum.\n- **C:** Transparência, inspeção e adaptação são os três pilares do Scrum.\n- **D:** São fragmentos dos valores do Manifesto Ágil.\n- **E:** São princípios do Lean Software Development."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0034",
  "campos": {
    "comentario": "**Gabarito: Certo.** A família Crystal (Alistair Cockburn) é organizada por cores (Clear, Yellow, Orange, Red), escolhidas conforme o tamanho da equipe e a criticidade do sistema. O Crystal Clear atende equipes pequenas (até cerca de 6 a 8 pessoas) trabalhando no mesmo espaço, com entregas frequentes, melhoria reflexiva e comunicação osmótica (a informação circula porque todos ouvem as conversas ao redor)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0035",
  "campos": {
    "comentario": "**Gabarito: B.** No Guia 2020 cada artefato tem um compromisso que dá foco e transparência: Backlog do Produto, **Meta do Produto**; Sprint Backlog, **Meta da Sprint**; Incremento, **Definição de Pronto**.\n\n- **A:** Associa os três compromissos certos, mas em ordem trocada (primeiro e terceiro invertidos).\n- **C:** Troca os dois primeiros.\n- **D:** Visão do Produto, Plano da Sprint e Critério de Aceitação não são compromissos do Guia.\n- **E:** Troca os dois últimos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0036",
  "campos": {
    "comentario": "**Gabarito: Errado.** O evento é mesmo de 15 minutos e destinado aos Developers, mas as três perguntas deixaram de ser obrigatórias: já eram só sugestão no Guia de 2017 e foram retiradas no de 2020. Os Developers escolhem a estrutura e as técnicas que quiserem, desde que a Daily foque no progresso em direção à Meta da Sprint e produza um plano para o próximo dia de trabalho."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0037",
  "campos": {
    "comentario": "**Gabarito: C.** Segundo o Guia do Scrum, uma Sprint pode ser cancelada se a Meta da Sprint se tornar obsoleta, e **somente o Product Owner** tem autoridade para isso.\n\n- **A:** Os demais membros podem recomendar, mas não decidir.\n- **B:** O Scrum Master remove impedimentos e apoia o time; não cancela a Sprint.\n- **D:** Stakeholders dão feedback na Sprint Review, sem votação nem poder de cancelamento.\n- **E:** O Guia prevê expressamente o cancelamento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0038",
  "campos": {
    "comentario": "**Gabarito: B.** Lei de Little: tempo médio de ciclo = WIP ÷ vazão (*throughput*) = 15 itens ÷ 5 itens por semana = **3 semanas**. Daí a lógica do Kanban: mantida a vazão, reduzir o WIP reduz o tempo de ciclo.\n\nDe onde vêm os distratores: 0,33 é a divisão invertida (5 ÷ 15); 5 é a própria vazão; 10 é a subtração 15 − 5; 75 é o produto 15 × 5."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0039",
  "campos": {
    "comentario": "**Gabarito: Errado.** O Scrum tem cinco eventos: a Sprint (que contém os demais), Sprint Planning, Daily Scrum, Sprint Review e Sprint Retrospective. O refinamento do Backlog do Produto é uma **atividade contínua**, não um evento, e não tem timebox. O limite de 10% da capacidade dos Developers era uma orientação do Guia de 2017, retirada na versão de 2020."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0040",
  "campos": {
    "comentario": "**Gabarito: B.** O Guia 2020 organiza a Sprint Planning em três tópicos: **por que** esta Sprint é valiosa (resulta na Meta da Sprint), **o que** pode ser feito (itens selecionados do Backlog do Produto) e **como** o trabalho será realizado (plano dos Developers). O tópico \"por quê\" foi a novidade de 2020.\n\n- **A:** Não são tópicos de nenhum evento do Scrum.\n- **C:** São as três perguntas antigas da Daily Scrum.\n- **D:** Visão, roadmap e release são planejamento de produto, fora do Guia.\n- **E:** É a restrição tripla da gerência tradicional de projetos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0041",
  "campos": {
    "comentario": "**Gabarito: C.** A **Saída Externa** (SE) envia dados para fora da fronteira e exige lógica de processamento adicional: cálculo, dado derivado ou atualização de arquivo. O cálculo de totais define a classificação.\n\n- **A:** A Entrada Externa processa dados que **entram** na fronteira, em geral para manter um ALI.\n- **B:** A Consulta Externa também envia dados para fora, mas é recuperação simples, sem cálculo nem dado derivado.\n- **D:** O AIE é função de dados: arquivo apenas referenciado, mantido por outra aplicação.\n- **E:** O ALI é função de dados: arquivo mantido pela própria aplicação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0042",
  "campos": {
    "comentario": "**Gabarito: Errado.** A definição dada é a do **ALI** (Arquivo Lógico Interno): dados mantidos dentro da fronteira da aplicação contada. O **AIE** (Arquivo de Interface Externa) é um grupo de dados apenas **referenciado** (lido) pela aplicação, mas mantido dentro da fronteira de outra aplicação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0043",
  "campos": {
    "comentario": "**Gabarito: C.** Um ALI vale 7 PF (complexidade baixa), **10 PF (média)** ou 15 PF (alta). Com 2 a 5 tipos de registro e 20 a 50 tipos de dados, a tabela do IFPUG dá complexidade média, logo 10 PF.\n\nDe onde vêm os distratores: 5, 7 e 10 são os pesos do AIE (baixa, média, alta), então 7 seria a resposta para um AIE médio ou um ALI baixo; 15 é o ALI de complexidade alta; 4 é o peso médio de uma Entrada Externa ou Consulta Externa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0044",
  "campos": {
    "comentario": "**Gabarito: C.** No COCOMO básico (Boehm, 1981) o modo **orgânico** é o de projetos pequenos e simples, com equipe pequena e experiente, ambiente conhecido e requisitos pouco rígidos.\n\n- **A:** O modo embutido tem restrições rígidas de hardware, software e operação (por exemplo, sistemas de tempo real).\n- **B:** O semidestacado é o intermediário: equipe de experiência mista e requisitos em parte rígidos.\n- **D:** Pós-arquitetura é submodelo do COCOMO II.\n- **E:** Composição de aplicação também é submodelo do COCOMO II."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0045",
  "campos": {
    "comentario": "**Gabarito: C.** Complexidade ciclomática de McCabe: V(G) = E − N + 2 = 11 − 9 + 2 = **4**. O valor indica o número de caminhos independentes e, portanto, o mínimo de casos de teste para cobrir todos eles. Outras formas de calcular: nós predicados + 1, ou número de regiões do grafo.\n\nDe onde vêm os distratores: 2 é E − N sem o \"+ 2\"; 3 é E − N + 1; 9 é o número de nós; 20 é E + N."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0046",
  "campos": {
    "comentario": "**Gabarito: Certo.** No Planning Poker cada participante escolhe em segredo uma carta (em geral da sequência de Fibonacci modificada) e todos revelam ao mesmo tempo. Assim ninguém é influenciado pela primeira estimativa dita em voz alta (ancoragem). Quando há divergência, quem deu o maior e o menor valor explica seus motivos e a rodada se repete até haver convergência."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0047",
  "campos": {
    "comentario": "**Gabarito: C.** Na ISO/IEC 25010:2011, a **manutenibilidade** tem cinco subcaracterísticas: modularidade, reusabilidade, analisabilidade, modificabilidade e testabilidade.\n\n- **A:** Portabilidade: adaptabilidade, instalabilidade e substituibilidade.\n- **B:** Confiabilidade: maturidade, disponibilidade, tolerância a falhas e recuperabilidade.\n- **D:** Usabilidade: reconhecimento de adequação, apreensibilidade, operabilidade, proteção contra erro do usuário, estética da interface e acessibilidade.\n- **E:** Compatibilidade: coexistência e interoperabilidade."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0048",
  "campos": {
    "comentario": "**Gabarito: Errado.** As perguntas estão trocadas. **Verificação**: \"estamos construindo o produto corretamente?\", isto é, de acordo com a especificação. **Validação**: \"estamos construindo o produto certo?\", isto é, aquele que atende às necessidades reais do usuário. A formulação é de Boehm."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0049",
  "campos": {
    "comentario": "**Gabarito: C.** No nível 4, **Gerenciado Quantitativamente**, a organização define objetivos quantitativos de qualidade e desempenho e controla os processos com técnicas estatísticas.\n\n- **A:** No nível 2 os processos são planejados e gerenciados por projeto (requisitos, planejamento, configuração, medição).\n- **B:** No nível 3 há um processo padrão da organização, adaptado a cada projeto.\n- **D:** O nível 5 foca em melhoria contínua, inovação e análise de causas, apoiado na base quantitativa do nível 4.\n- **E:** No nível 1 os processos são imprevisíveis e reativos (*ad hoc*)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0050",
  "campos": {
    "comentario": "**Gabarito: C.** O MPS.BR tem sete níveis de maturidade, de G (Parcialmente Gerenciado, o inicial) até A (Em Otimização, o mais alto), e foi concebido para ser compatível com o CMMI e com as normas ISO/IEC 12207 e 15504 (hoje série 33000).\n\n- **A:** Cinco níveis numerados de 1 a 5 são os do CMMI por estágios.\n- **B:** O nível A é o mais alto; o inicial é o G.\n- **D:** O MPS.BR é brasileiro, criado pela SOFTEX; o SEI criou o CMMI.\n- **E:** O modelo avalia a maturidade dos **processos** de software, não o produto."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0051",
  "campos": {
    "comentario": "**Gabarito: Certo.** Inspeções e walkthroughs são revisões: técnicas **estáticas**, que examinam o artefato sem executar nada. Por isso servem para qualquer documento legível (requisitos, modelos de projeto, planos de teste, código) e permitem achar defeitos antes de existir código, quando a correção é mais barata. A inspeção é a mais formal (papéis definidos, checklist, registro de defeitos); o walkthrough é conduzido pelo autor."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0052",
  "campos": {
    "comentario": "**Gabarito: C.** Sommerville divide os requisitos não funcionais em de produto, organizacionais e externos. Os **organizacionais** derivam de políticas e procedimentos da empresa e se subdividem em ambientais, operacionais e de **desenvolvimento** (linguagem de programação, processo e padrões a seguir).\n\n- **A:** Requisito de produto de eficiência trata do comportamento do software (desempenho, uso de espaço).\n- **B:** Requisito de produto de dependabilidade trata de confiabilidade e disponibilidade do software.\n- **D:** Requisito externo regulatório vem de órgão regulador, de fora da organização.\n- **E:** Requisito externo ético visa garantir que o sistema seja aceitável para os usuários e o público."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0053",
  "campos": {
    "comentario": "**Gabarito: Certo.** Na etnografia o analista se insere no ambiente dos usuários e observa o trabalho real. Segundo Sommerville, ela é eficaz para revelar requisitos implícitos (o que as pessoas fazem de fato, e não o que o processo formal diz) e requisitos de cooperação entre pessoas. Como olha para as práticas existentes, não é boa para descobrir novas funcionalidades nem requisitos organizacionais ou de domínio; por isso deve ser combinada com outras técnicas, como a prototipação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0054",
  "campos": {
    "comentario": "**Gabarito: B.** A rastreabilidade **para trás** (*backward*) parte do artefato derivado (código, caso de teste) e volta ao requisito e à sua origem, inclusive o stakeholder que o solicitou. Serve para justificar por que cada trecho existe.\n\n- **A:** Para frente (*forward*) é o sentido oposto: do requisito para o projeto, o código e os testes que o implementam.\n- **C:** Horizontal relaciona artefatos do mesmo nível, como requisitos que dependem uns dos outros.\n- **D:** \"Temporal\" não é tipo de rastreabilidade de requisitos.\n- **E:** A rastreabilidade de projeto (na classificação de Sommerville) liga requisitos aos módulos do projeto, sem chegar ao solicitante."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0055",
  "campos": {
    "comentario": "**Gabarito: A.** Sommerville lista cinco verificações na validação de requisitos: **validade** (atendem às necessidades reais), **consistência** (não se contradizem), **completude** (nada falta), **realismo** (são viáveis com orçamento, prazo e tecnologia) e **verificabilidade** (é possível testar se foram atendidos).\n\n- **B:** São conceitos de projeto e de orientação a objetos.\n- **C:** São os pilares da segurança da informação.\n- **D:** São os níveis de teste de software.\n- **E:** São as quatro fases do RUP."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0056",
  "campos": {
    "comentario": "**Gabarito: Errado.** A descrição é da técnica de **questionários**. JAD é o oposto: sessões conjuntas (workshops) estruturadas, conduzidas por um facilitador, em que usuários, gestores e desenvolvedores se reúnem para definir os requisitos e chegar a consenso, com registro feito por um escriba."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0057",
  "campos": {
    "comentario": "**Gabarito: B.** INVEST (Bill Wake) reúne as qualidades de uma boa história de usuário: *Independent* (independente), *Negotiable* (negociável), *Valuable* (valiosa), *Estimable* (estimável), *Small* (pequena) e *Testable* (testável).\n\nAs demais alternativas (A, C, D e E) são listas inventadas que só aproveitam as iniciais. Dica: uma história é um convite à conversa, por isso é negociável e não \"especificada\" ou \"normatizada\"; e ainda não foi feita, por isso é testável e não \"testada\" ou \"implementada\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0058",
  "campos": {
    "comentario": "**Gabarito: C.** No **percurso cognitivo** (*cognitive walkthrough*) especialistas percorrem a tarefa passo a passo, no papel de um usuário novato, e perguntam a cada ação se ele saberá o que fazer, se encontrará o controle e se entenderá o retorno recebido. O foco é a facilidade de aprendizado.\n\n- **A:** Na avaliação heurística os especialistas inspecionam a interface contra uma lista de princípios (como as 10 heurísticas de Nielsen), sem simular uma tarefa passo a passo.\n- **B:** O teste A/B compara duas versões com usuários reais e mede resultados.\n- **D:** No card sorting os usuários agrupam cartões para orientar a arquitetura da informação.\n- **E:** O grupo focal é uma discussão moderada com usuários para colher opiniões."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0059",
  "campos": {
    "comentario": "**Gabarito: Certo.** O protótipo **horizontal** cobre muitas funcionalidades de forma superficial, em geral só a camada de interface, sem lógica real por trás. O **vertical** escolhe poucas funcionalidades e as implementa em profundidade, atravessando as camadas (interface, regras de negócio, dados), o que permite testar viabilidade técnica e desempenho."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0060",
  "campos": {
    "comentario": "**Gabarito: B.** O problema mais citado (Pressman) é o cliente ver algo funcionando, achar que o sistema está quase pronto e pressionar para colocá-lo em produção, sem saber que o protótipo foi feito às pressas, sem qualidade, desempenho nem manutenibilidade.\n\n- **A:** Obter feedback do usuário é justamente a finalidade do protótipo.\n- **C:** O protótipo é simplificado; não precisa implementar os requisitos não funcionais.\n- **D:** Protótipos de baixa fidelidade usam exatamente papel e ferramentas de desenho.\n- **E:** O protótipo apoia a validação de requisitos, não a elimina."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0061",
  "campos": {
    "comentario": "**Gabarito: B.** Os diagramas de interação são um subgrupo dos comportamentais: **sequência**, **comunicação**, **tempo** (temporização) e **visão geral de interação**.\n\n- **A:** Classes, objetos, pacotes e componentes são diagramas estruturais.\n- **C:** Casos de uso, atividades e máquina de estados são comportamentais, mas não de interação.\n- **D:** Implantação, estrutura composta e perfil são estruturais.\n- **E:** Mistura um de interação (sequência), dois comportamentais comuns (atividades, casos de uso) e um estrutural (classes)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0062",
  "campos": {
    "comentario": "**Gabarito: Errado.** Os conceitos estão trocados. **«include»** é o comportamento obrigatório: o caso de uso base sempre executa o incluído (a seta parte do base para o incluído). **«extend»** é o comportamento opcional ou condicional, que só acontece em certas situações, em um ponto de extensão do caso base (a seta parte do caso estendido para o base)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0063",
  "campos": {
    "comentario": "**Gabarito: C.** A descrição é de **composição**: a parte não vive sem o todo, que controla seu ciclo de vida. Notação: losango preenchido na extremidade do todo.\n\n- **A:** Linha tracejada com seta aberta é dependência.\n- **B:** Losango vazio no lado do todo é agregação, em que a parte existe de forma independente.\n- **D:** Linha contínua com triângulo vazio é generalização (herança).\n- **E:** Linha tracejada com triângulo vazio é realização (implementação de interface)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0064",
  "campos": {
    "comentario": "**Gabarito: B.** O **nó final de fluxo** (círculo com um X) termina apenas o fluxo que chega a ele; os outros fluxos concorrentes continuam.\n\n- **A:** O nó final de atividade (círculo preto dentro de outro círculo) encerra a atividade inteira, com todos os fluxos.\n- **C:** O nó de união (*join*) sincroniza fluxos concorrentes em um só; não encerra nada.\n- **D:** O nó de decisão (losango) escolhe um entre vários caminhos conforme as guardas.\n- **E:** O nó inicial (círculo preto) é onde a atividade começa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0065",
  "campos": {
    "comentario": "**Gabarito: Certo.** O rótulo de uma transição tem a forma `evento [guarda] / ação`, com as três partes opcionais. O evento é o gatilho; a guarda é uma condição booleana avaliada quando o evento ocorre; se ela for verdadeira, a transição dispara, a ação é executada e o objeto passa ao estado de destino. Se a guarda for falsa, a transição não ocorre."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0066",
  "campos": {
    "comentario": "**Gabarito: D.** O fragmento **alt** (alternativas) tem dois ou mais operandos, cada um com sua condição de guarda (pode haver um `[else]`), e só um deles é executado: é o \"se-senão\".\n\n- **A:** `opt` tem um único operando, executado só se a guarda for verdadeira: é o \"se\" sem \"senão\".\n- **B:** `loop` repete o operando enquanto a condição valer.\n- **C:** `par` executa os operandos em paralelo.\n- **E:** `ref` faz referência a outra interação, definida em outro diagrama."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0067",
  "campos": {
    "comentario": "**Gabarito: C.** O diagrama de **implantação** (*deployment*) mostra os nós (dispositivos e ambientes de execução), as conexões entre eles e os artefatos (executáveis, bibliotecas, arquivos) implantados em cada um.\n\n- **A:** O de componentes mostra as partes modulares do software e suas interfaces, não o hardware.\n- **B:** O de pacotes mostra o agrupamento lógico dos elementos do modelo e suas dependências.\n- **D:** O de estrutura composta mostra a estrutura interna de um classificador (partes, portas, conectores).\n- **E:** O de objetos mostra instâncias de classes e seus vínculos em um dado momento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0068",
  "campos": {
    "comentario": "**Gabarito: B.** Na integração *top-down* começa-se pelo módulo principal e desce-se na hierarquia. Os módulos **chamados** que ainda não existem são simulados por **stubs** (pseudocontrolados), que devolvem respostas fixas ou simplificadas.\n\n- **A:** Drivers simulam o módulo **chamador**; são usados na integração *bottom-up*.\n- **C:** Oráculo é o mecanismo que informa o resultado esperado de um teste.\n- **D:** Mutantes são versões do programa com defeitos inseridos de propósito (teste de mutação).\n- **E:** Controlador de teste é outro nome para driver."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0069",
  "campos": {
    "comentario": "**Gabarito: Errado.** A implicação vale no sentido inverso: 100% de cobertura de decisões garante 100% de cobertura de instruções, mas não o contrário. Exemplo: em `if (x > 0) y = 1;` sem `else`, um único teste com `x = 5` executa todas as instruções, mas o resultado falso da decisão nunca é exercitado, e a cobertura de decisões fica em 50%."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0070",
  "campos": {
    "comentario": "**Gabarito: B.** Na análise de valor-limite com dois valores testa-se cada limite da partição válida e o vizinho imediato do lado de fora: 0 e 1 no limite inferior, 100 e 101 no superior. (Na variante de três valores entrariam também 2 e 99.)\n\n- **A:** Só os limites válidos, sem os vizinhos inválidos.\n- **C:** 50 é valor de meio de partição (particionamento de equivalência), e faltam os próprios limites 1 e 100.\n- **D:** Nenhum deles é limite: 2 e 99 são vizinhos internos e 50 é valor do meio.\n- **E:** Cobre o limite inferior, mas falta o 101 no superior, e −1 não é vizinho imediato de nenhum limite."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0071",
  "campos": {
    "comentario": "**Gabarito: Certo.** Os dois são testes de aceitação feitos por usuários. O **alfa** ocorre nas instalações do desenvolvedor, em ambiente controlado, com a equipe observando e registrando os problemas. O **beta** ocorre no ambiente real dos usuários, em geral sem o desenvolvedor presente; os próprios usuários relatam os problemas encontrados."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0072",
  "campos": {
    "comentario": "**Gabarito: C.** Teste de **regressão** é reexecutar testes que já passavam para conferir se uma mudança (correção ou evolução) não quebrou o que funcionava. É forte candidato à automação.\n\n- **A:** O teste de confirmação (reteste) reexecuta o teste que falhou, para ver se o próprio defeito foi corrigido.\n- **B:** O teste de fumaça é uma checagem rápida das funções principais para decidir se a versão está estável o bastante para ser testada.\n- **D:** O teste de estresse leva o sistema além dos limites de carga.\n- **E:** O teste de aceitação é feito pelo cliente ou usuário para decidir se aceita o sistema."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0073",
  "campos": {
    "comentario": "**Gabarito: Errado.** As definições estão trocadas. O teste de **carga** avalia o sistema sob a carga esperada de produção (normal e de pico previsto). O teste de **estresse** submete o sistema a condições acima dos limites especificados, ou com recursos reduzidos, para achar o ponto de ruptura e ver como ele falha e se recupera."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0074",
  "campos": {
    "comentario": "**Gabarito: B.** Sem escrever código, a ferramenta é **no-code**; quem construiu foi a área de negócio, isto é, **desenvolvedores cidadãos**; e, sem apoio nem conhecimento da TI, a solução é **shadow IT**, com riscos de segurança, vazamento de dados e falta de suporte.\n\n- **A:** Low-code ainda admite algum código e, aqui, não houve desenvolvedores profissionais.\n- **C:** MDD gera código a partir de modelos e exige perfil técnico; nada no cenário aponta para isso.\n- **D:** Microsserviços são um estilo de arquitetura, não uma forma de quem desenvolve.\n- **E:** Programação em pares é prática do XP, com dois programadores no mesmo código."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0075",
  "campos": {
    "comentario": "**Gabarito: Errado.** Componentes prontos de segurança não substituem a governança. Como o low-code facilita a criação de aplicações por muita gente, a governança fica ainda mais necessária: controle de acesso a dados e conectores, separação de ambientes (desenvolvimento, teste, produção), revisão e catálogo das aplicações, definição de responsáveis. Sem isso, proliferam aplicações sem dono e shadow IT."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0076",
  "campos": {
    "comentario": "**Gabarito: B.** A aplicação low-code fica presa ao modelo, aos componentes e ao ambiente de execução proprietários da plataforma. Migrar para outro fornecedor costuma exigir reescrever tudo: é o *vendor lock-in*.\n\n- **A:** Criar interfaces gráficas de forma visual é um dos pontos fortes do low-code.\n- **C:** O low-code reduz a escrita de código; não há linguagem de máquina.\n- **D:** As plataformas oferecem conectores e integração com APIs.\n- **E:** A promessa do low-code é justamente reduzir o tempo de entrega."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0077",
  "campos": {
    "comentario": "**Gabarito: B.** No versionamento semântico o formato é MAJOR.MINOR.PATCH. Funcionalidade nova **compatível** incrementa o MINOR e zera o PATCH: 3.4.2 passa a **3.5.0**.\n\n- **A:** 3.4.3 incrementa o PATCH, usado para correção de defeito compatível.\n- **C:** 3.5.2 sobe o MINOR, mas esquece de zerar o PATCH.\n- **D:** 4.0.0 incrementa o MAJOR, reservado para mudança incompatível com as versões anteriores.\n- **E:** 4.4.2 sobe o MAJOR sem zerar MINOR e PATCH, o que não é válido."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0078",
  "campos": {
    "comentario": "**Gabarito: C.** O texto diz que os endpoints legados *will be deprecated next quarter* (serão marcados como obsoletos no próximo trimestre) e que *eventually, the old endpoints will be removed* (por fim, serão removidos).\n\n- **A:** A nova versão é *backward compatible*, ou seja, compatível com as anteriores.\n- **B:** A remoção ainda vai acontecer (*will be removed*); nem a depreciação ocorreu.\n- **D:** O texto recomenda migrar o quanto antes (*should migrate as soon as possible*).\n- **E:** Os endpoints antigos serão removidos, não mantidos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0079",
  "campos": {
    "comentario": "**Gabarito: C.** *Eventually* é falso cognato: significa \"por fim\", \"no final\", \"com o tempo\". Indica algo que vai acontecer, só não se diz quando.\n\n- **A:** \"Eventualmente\" em português quer dizer \"de vez em quando\" ou \"por acaso\"; em inglês seria *occasionally* ou *possibly*.\n- **B:** \"Ocasionalmente\" é *occasionally*.\n- **D:** \"Talvez\" é *maybe* ou *perhaps*; o texto afirma que a remoção ocorrerá.\n- **E:** \"Atualmente\" é *currently*; cuidado com outro falso cognato, *actually*, que significa \"na verdade\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROC-0080",
  "campos": {
    "comentario": "**Gabarito: Errado.** Pela convenção da RFC 2119, usada em especificações técnicas, *should* indica **recomendação**: o esperado é seguir, mas pode haver motivo válido para não fazê-lo. Requisito obrigatório se expressa com *must* ou *shall* (e proibição com *must not*). *May* indica algo opcional."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0001",
  "campos": {
    "comentario": "**Gabarito: A.** No Bubble Sort, cada passada compara vizinhos e troca os que estão fora de ordem, levando o maior elemento ainda não posicionado para o fim. É o que se vê: após a 1ª passada o 16 está no fim; após a 2ª, o 14 é o penúltimo; e os demais elementos só se deslocam uma posição por vez.\n\n- **B:** O Insertion Sort mantém um prefixo ordenado que cresce a cada passo; a 1ª passada só trocaria 16 e 8, dando [8, 16, 6, 14, 12, 4].\n- **C:** O QuickSort particiona em torno de um pivô, não percorre o array todo trocando vizinhos.\n- **D:** O Selection Sort faz uma única troca por passada (o menor vai para o início, ou o maior para o fim).\n- **E:** O Shellsort compara elementos distantes (com saltos decrescentes)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0002",
  "campos": {
    "comentario": "**Gabarito: A.** Na tabela hash, a função de dispersão calcula diretamente a posição do elemento a partir da chave. Com chaves inteiras únicas e sequenciais quase não há colisões, e o acesso custa tempo constante, O(1), independentemente de haver um milhão de registros.\n\n- **B:** O(log N) é o custo da busca binária ou em árvore balanceada.\n- **C:** O(N) é o da busca sequencial (ou o pior caso do hash, com todas as chaves colidindo).\n- **D:** O(N log N) é típico de ordenação eficiente (Merge Sort, Heapsort).\n- **E:** O(N²) é típico de ordenações simples (Bubble, Selection, Insertion)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0003",
  "campos": {
    "comentario": "**Gabarito: E.** Em complemento a dois, parte-se do valor positivo, invertem-se os bits e soma-se 1: +31 = 011111; invertido, 100000; mais 1, **100001**. Conferindo de outro modo: 2⁶ - 31 = 33 = 100001.\n\n- **A:** 000001 é +1.\n- **B:** 011110 é +30.\n- **C:** 011111 é +31 (bit de sinal 0, número positivo).\n- **D:** 100000 é -32, o menor valor de 6 bits; é também o complemento a um de 31 (faltou somar 1)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0004",
  "campos": {
    "comentario": "**Gabarito: D.** A lista começa como [20] (tamanho 1). Enquanto o tamanho é menor que 10, acrescenta-se `len(L) ** 2`: com tamanho 1 entra 1, com 2 entra 4, e assim até tamanho 9, quando entra 81. Aí a lista tem 10 elementos e é retornada: [20, 1, 4, 9, 16, 25, 36, 49, 64, 81].\n\n- **A e B:** Perdem o 20, que é o elemento inicial e nunca é removido.\n- **C:** Tem só 9 elementos; o laço só para com 10 (`len(L) >= n`).\n- **E:** Pula o 1, que entra quando o tamanho é 1 (1² = 1)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0005",
  "campos": {
    "comentario": "**Gabarito: C.** `xpto()` devolve um objeto com `next()` que mantém `n` por closure. A cada chamada, se n < 10, soma 2 e devolve n/2: os valores são 1, 2, 3, 4 e 5 (n = 2, 4, 6, 8, 10). Na sexta chamada n = 10, a condição falha e vem `done: true`, encerrando o laço. Saída: `1/2/3/4/5/`.\n\n- **A:** O -1 só aparece no objeto final, que não é concatenado.\n- **B:** O incremento ocorre antes do cálculo, então o primeiro valor é 1, não 0.\n- **D e E:** Os valores saem em ordem crescente; nada no código inverte a sequência."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0006",
  "campos": {
    "comentario": "**Gabarito: B.** O `Main` faz `new Pessoa()` e usa a propriedade `Nome`. A classe deve se chamar `Pessoa` e ter a propriedade com os acessores na sintaxe do C#: `get { return nome; }` e `set { nome = value; }` (`value` é o parâmetro implícito do set).\n\n- **A:** Sintaxe correta, mas a classe se chama `Exemplo`; `Pessoa` continuaria sem definição.\n- **C:** Faltam as chaves no corpo dos acessores.\n- **D:** Acessores não têm parênteses nem parâmetros declarados.\n- **E:** `public get string` não existe: o tipo é declarado na propriedade, não no acessor."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0007",
  "campos": {
    "comentario": "**Gabarito: C.** PyQt é o conjunto de *bindings* Python para o framework Qt, usado para criar interfaces gráficas de desktop: janelas, botões, menus, caixas de diálogo e o tratamento de seus eventos.\n\n- **A:** Interface de linha de comando se faz com módulos como `argparse` ou `click`.\n- **B:** Comunicação cliente-servidor em aplicações web é papel de frameworks e bibliotecas web (Django, Flask, `requests`).\n- **D:** APIs RESTful em Python são criadas com Flask, FastAPI ou Django REST Framework."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0008",
  "campos": {
    "comentario": "**Gabarito: D.** O laço vai de i = 0 a i = 9 (`i < 10`), ou seja, percorre só os valores 0 a 9 do vetor, e imprime os pares seguidos de espaço: `0 2 4 6 8`. O zero é par (0 % 2 == 0).\n\n- **A:** Esquece o 0 e inclui o 10, que está em v[10], fora do laço.\n- **B:** Seria a saída (sem o 0) se o laço fosse até 20.\n- **C:** Imprime todos os elementos, ignorando o `if` e o limite do laço; além disso, o separador é espaço, não vírgula.\n\nO trecho omite o `#include <iostream>`, o `using namespace std` e a chave final, mas a intenção é clara."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0009",
  "campos": {
    "comentario": "**Gabarito: A.** Com polimorfismo, o código cliente trabalha com a superclasse ou interface e a implementação concreta é escolhida em tempo de execução. O cliente não depende das classes concretas (menor acoplamento), e novas implementações entram sem alterar o que já existe.\n\n- **B:** Coesão diz respeito ao foco das responsabilidades dentro de uma classe; não é o ganho característico do polimorfismo.\n- **C:** Java não permite herança múltipla de classes (só de interfaces), e polimorfismo não trata disso.\n- **D:** Métodos estáticos são resolvidos em tempo de compilação e não são polimórficos (não há sobrescrita de método estático)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0010",
  "campos": {
    "comentario": "**Gabarito: A.** Para a banca, a herança é uma forma de abstração: a superclasse (muitas vezes abstrata) reúne o que é comum, e as subclasses especializam. A redação é imprecisa (em geral se diz que a herança é um mecanismo que apoia a abstração), mas é a única alternativa que relaciona os dois conceitos de modo aceitável.\n\n- **B:** Inverte a relação: abstração é o conceito mais amplo, não um caso de herança.\n- **C:** Não são independentes: classes abstratas e interfaces só fazem sentido quando herdadas/implementadas.\n- **D:** Não são excludentes: usam-se juntas o tempo todo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0011",
  "campos": {
    "comentario": "**Gabarito: D.** O código é ASP clássico: os delimitadores `<% %>`, os objetos `Request` (`Request.Form`, `Request.ServerVariables`) e `Response.Write`, e a sintaxe VBScript (`Dim`, `If ... Then ... End If`, concatenação com `&`).\n\n- **A:** Em Java (JSP) também há `<% %>`, mas o código interno seria Java: `request.getParameter(\"nome\")`, ponto e vírgula, chaves.\n- **B:** C++ não é embutido em HTML dessa forma nem tem `Dim` ou `End If`.\n- **C:** Python não usa `Dim`, `Then` nem `End If`; os blocos são definidos por indentação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0012",
  "campos": {
    "comentario": "**Gabarito: C.** IDE é *Integrated Development Environment*, Ambiente de Desenvolvimento Integrado: reúne em um só programa editor de código, compilador ou interpretador, depurador e outras ferramentas (ex.: Eclipse, IntelliJ, Visual Studio).\n\n- **A, B e D:** \"Instalado\", \"Inspecionado\" e \"Interpretado\" são traduções inventadas para o \"I\", que vem de *Integrated*."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0013",
  "campos": {
    "comentario": "**Gabarito: B.** `sacar(30)` deixa o saldo em 70. Em `sacar(80)`, como 80 > 70, a exceção é lançada **antes** da subtração, e o saldo continua 70. O `catch` imprime \"Erro \" e o `finally`, que sempre executa, imprime o saldo: `Erro 70.0`.\n\n- **A:** Ignora que a exceção é capturada e o `catch` imprime \"Erro \".\n- **C:** Supõe que o segundo saque foi feito apesar da exceção.\n- **D:** Supõe o saque indevido e ainda ignora o `catch`.\n- **E:** Esquece que o primeiro saque, válido, já foi efetivado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0014",
  "campos": {
    "comentario": "**Gabarito: C.** O valor padrão `v=[]` é criado uma única vez, na definição da função, e é compartilhado entre as chamadas. Na primeira chamada `v` vira `[\"ana\"]`; na segunda, `[\"ana\", \"caio\"]`, e `len(v)` é **2**. Para \"caio\", `d.get(\"caio\", 0) + 10` dá **10**, e o dicionário passa a ter **3** chaves.\n\n- **A:** Supõe uma lista nova a cada chamada (daria 1).\n- **B:** Além disso, esquece que \"caio\" foi inserido no dicionário.\n- **D:** `get` devolve 0, mas o valor gravado é 0 + 10.\n- **E:** `d.get(k, 0)` não lança `KeyError`, e a chave já existe quando é lida no `print`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0015",
  "campos": {
    "comentario": "**Gabarito: E.** Redefinir na subclasse um método herdado, com a mesma assinatura, é **sobrescrita** (*override*, resolvida em tempo de execução). Ter na mesma classe métodos de mesmo nome com listas de parâmetros diferentes é **sobrecarga** (*overload*, resolvida em compilação).\n\n- **A:** Os dois termos certos, em ordem trocada.\n- **B:** Encapsulamento é ocultar o estado interno; herança múltipla é herdar de várias superclasses. Nenhum dos dois é descrito.\n- **C:** O primeiro está certo, mas o segundo recurso é sobrecarga.\n- **D:** O primeiro é sobrescrita; polimorfismo paramétrico são os tipos genéricos (`List<T>`)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0016",
  "campos": {
    "comentario": "**Gabarito: D.** O Strategy define uma família de algoritmos, encapsula cada um em uma classe com interface comum e permite trocá-los em tempo de execução. Cada forma de tarifa (Pix, TED, DOC) vira uma estratégia, sem `if`/`switch` espalhados.\n\n- **A:** Singleton garante uma única instância de uma classe.\n- **B:** Adapter converte a interface de uma classe em outra esperada pelo cliente.\n- **C:** Composite trata objetos individuais e composições em árvore de modo uniforme.\n- **E:** Facade oferece uma interface simplificada para um subsistema."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0017",
  "campos": {
    "comentario": "**Gabarito: B.** É o enunciado do Princípio da Inversão de Dependência (DIP), que se completa com: abstrações não devem depender de detalhes; detalhes devem depender de abstrações.\n\n- **A:** SRP: uma classe deve ter um único motivo para mudar.\n- **C:** LSP: objetos de uma subclasse devem poder substituir os da superclasse sem quebrar o programa.\n- **D:** ISP: clientes não devem depender de métodos que não usam (interfaces pequenas e específicas).\n- **E:** OCP: entidades abertas para extensão e fechadas para modificação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0018",
  "campos": {
    "comentario": "**Gabarito: E.** `git revert <hash>` cria um novo commit que aplica o inverso das alterações do commit indicado. O histórico publicado fica intacto, por isso é a opção segura em ramo compartilhado.\n\n- **A:** `git reset --hard HEAD~1` apaga o commit do histórico local e descarta as alterações; exigiria push forçado.\n- **B:** `git commit --amend` substitui o último commit por outro, reescrevendo o histórico.\n- **C:** `git rebase -i` edita, junta ou remove commits, também reescrevendo o histórico.\n- **D:** `git stash` guarda temporariamente alterações ainda não commitadas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0019",
  "campos": {
    "comentario": "**Gabarito: A.** O ciclo do TDD é vermelho, verde, refatorar: escreve-se um teste que falha (o código ainda não existe), depois o código mínimo para ele passar e, por fim, melhora-se o código mantendo os testes passando.\n\n- **B:** No TDD o teste vem **antes** do código de produção.\n- **C:** Só se refatora código que já existe e já passa nos testes.\n- **D:** O ciclo é incremental, um pequeno teste de cada vez, não tudo de uma vez.\n- **E:** Descreve desenvolvimento tradicional com teste manual, sem automação nem teste primeiro."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0020",
  "campos": {
    "comentario": "**Gabarito: D.** Com boa função de dispersão e fator de carga controlado, a tabela hash busca em tempo médio constante, O(1).\n\n- **A:** A busca binária é O(log n), mas exige vetor **ordenado**.\n- **B:** O Quicksort é O(n log n) no caso médio; no pior caso (pivôs ruins) é O(n²).\n- **C:** Pilha é LIFO: o último a entrar é o primeiro a sair. A descrição é de fila (FIFO).\n- **E:** Uma árvore binária de busca desbalanceada pode degenerar em lista, e a busca chega a O(n); O(log n) só é garantido em árvores balanceadas (AVL, rubro-negra)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0021",
  "campos": {
    "comentario": "**Gabarito: C.** O analisador léxico (*scanner*) lê os caracteres do fonte e os agrupa em tokens (identificadores, palavras reservadas, números, operadores), descartando espaços e comentários.\n\n- **A:** A análise sintática (*parser*) verifica se a sequência de tokens obedece à gramática e monta a árvore sintática.\n- **B:** A análise semântica verifica o significado: tipos compatíveis, variáveis declaradas, escopo.\n- **D:** A análise de fluxo é técnica usada na otimização de código.\n- **E:** A otimização melhora o código intermediário, bem depois da formação dos tokens."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0022",
  "campos": {
    "comentario": "**Gabarito: C.** Estão corretas I e III.\n\n- **I (certa):** o ligador (*linker*) junta os módulos objeto e as bibliotecas e resolve as referências externas (chamadas a funções definidas em outros módulos), gerando o executável.\n- **II (errada):** quem gera um executável antes da execução é o compilador (com o ligador). O interpretador traduz e executa o programa diretamente, instrução a instrução, sem produzir executável independente.\n- **III (certa):** o `javac` gera bytecode, executado pela JVM, que interpreta e também compila para código nativo, em tempo de execução, os trechos mais usados (JIT)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0023",
  "campos": {
    "comentario": "**Gabarito: C.** Verificar se um identificador foi declarado (e com que tipo) é tarefa da análise semântica, que consulta a tabela de símbolos.\n\n- **A:** A léxica só forma tokens; o nome da variável é um identificador válido.\n- **B:** A sintática só confere a estrutura; `x = y + 1;` obedece à gramática mesmo que `y` não exista.\n- **D:** A geração de código só ocorre depois que o programa passou pelas análises.\n- **E:** Java é compilada e de tipagem estática: o erro aparece na compilação (\"cannot find symbol\"), não na execução."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0024",
  "campos": {
    "comentario": "**Gabarito: B.** O compilador C# gera CIL (*Common Intermediate Language*), antes chamada MSIL. O CLR carrega esse código e o compilador JIT o converte em código nativo durante a execução.\n\n- **A:** Bytecode Java é o código intermediário da plataforma Java, executado pela JVM.\n- **C:** Assembly x86 é código de máquina de um processador específico, resultado do JIT, não o código intermediário.\n- **D:** WebAssembly é formato binário executado por navegadores.\n- **E:** P-code é o código intermediário de compiladores Pascal antigos (UCSD Pascal)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0025",
  "campos": {
    "comentario": "**Gabarito: B.** Firmware é software gravado em memória não volátil (ROM, EEPROM, flash) que controla o hardware em baixo nível. BIOS e UEFI são os exemplos clássicos.\n\n- **A:** É software, não hardware (hardware programável seria um FPGA, por exemplo).\n- **C:** O sistema operacional é carregado depois, pelo firmware; são camadas diferentes.\n- **D:** Está em roteadores, impressoras, SSDs, celulares, TVs e praticamente todo dispositivo eletrônico.\n- **E:** DRAM é volátil; o firmware precisa sobreviver ao desligamento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0026",
  "campos": {
    "comentario": "**Gabarito: A.** Hexadecimal: 172 ÷ 16 = 10, resto 12; 10 = A e 12 = C, logo **AC**. Octal: 172 ÷ 8 = 21, resto 4; 21 ÷ 8 = 2, resto 5; lendo de trás para a frente, **254** (conferindo: 2 × 64 + 5 × 8 + 4 = 172). Pelo binário: 1010 1100 = 010 101 100 = 254.\n\n- **B:** BC₁₆ e 274₈ valem 188.\n- **C:** Hexadecimal certo, octal errado (274₈ = 188).\n- **D:** CA₁₆ = 202: dígitos invertidos.\n- **E:** AB₁₆ e 253₈ valem 171."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0027",
  "campos": {
    "comentario": "**Gabarito: C.** +37 = 0010 0101. Invertendo os bits: 1101 1010. Somando 1: **1101 1011**. Conferindo: -128 + 64 + 16 + 8 + 2 + 1 = -37.\n\n- **A:** 1010 0101 é -37 em sinal-magnitude (só liga o bit de sinal).\n- **B:** 1101 1010 é o complemento de 1 (faltou somar 1); em complemento de 2 vale -38.\n- **D:** 0010 0101 é +37.\n- **E:** 1110 0101 vale -27."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0028",
  "campos": {
    "comentario": "**Gabarito: B.** Precisão simples (32 bits): 1 bit de sinal, 8 de expoente (com excesso, ou *bias*, de 127) e 23 de fração (mantissa).\n\n- **A:** 1, 11 e 52 é a precisão dupla (64 bits, *bias* 1023).\n- **C, D e E:** Não correspondem a nenhum formato do padrão; o sinal ocupa sempre 1 bit, e na precisão simples a divisão é 8 + 23."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0029",
  "campos": {
    "comentario": "**Gabarito: C.** No UTF-8, os códigos de 0 a 127 ocupam um único byte, igual ao do ASCII; por isso todo texto ASCII é também UTF-8 válido.\n\n- **A:** O UTF-8 tem tamanho variável, de 1 a 4 bytes por caractere.\n- **B:** O ASCII padrão tem 7 bits e 128 caracteres, sem acentos (os acentuados estão em extensões de 8 bits, como ISO 8859-1).\n- **D:** Unicode é o repertório que atribui um número (*code point*) a cada caractere; UTF-8 é uma das formas de codificar esses números em bytes.\n- **E:** O UTF-32 é fixo em 4 bytes; de 1 a 4 bytes é o UTF-8."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0030",
  "campos": {
    "comentario": "**Gabarito: B.** 0111 0000 = 112 e 0011 0000 = 48. A soma, 160, não cabe na faixa de 8 bits com sinal (-128 a 127). O padrão obtido, 1010 0000, tem bit de sinal 1 e seria lido como -96: dois positivos gerando um negativo é o sinal de **overflow**.\n\n- **A:** 160 só seria válido em 8 bits **sem** sinal.\n- **C:** Não há carry para fora do bit mais significativo aqui; e carry não é o mesmo que overflow.\n- **D:** -96 é o padrão que aparece, mas é um resultado incorreto.\n- **E:** A soma é feita normalmente; apenas o resultado estoura a faixa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0031",
  "campos": {
    "comentario": "**Gabarito: A.** Pilha é LIFO; acompanhando (topo à direita):\n\n```\npush(A) -> A\npush(B) -> A B\npop()   -> A        (sai B)\npush(C) -> A C\npush(D) -> A C D\npop()   -> A C      (sai D)\npush(E) -> A C E\n```\n\nTopo **E**, com **3** elementos. Em B, o D já foi removido; em C, a contagem ignora os dois `pop` (5 inserções menos 2 remoções dá 3); em D, A é a base, não o topo (confusão com fila); em E, esquece o último `push`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0032",
  "campos": {
    "comentario": "**Gabarito: C.** A árvore fica: raiz 50; à esquerda 30, com filhos 20 e 40; à direita 70, com filhos 60 e 80. Pós-ordem visita subárvore esquerda, subárvore direita e depois a raiz: 20, 40, 30, 60, 80, 70, 50.\n\n- **A:** É o percurso em ordem (esquerda, raiz, direita), que em uma BST dá as chaves ordenadas.\n- **B:** É a pré-ordem (raiz, esquerda, direita).\n- **D:** É o percurso em nível (largura), que aqui coincide com a ordem de inserção.\n- **E:** É a ordem decrescente (em ordem invertido)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0033",
  "campos": {
    "comentario": "**Gabarito: D.** É a afirmativa incorreta: a função de dispersão espalha as chaves sem preservar ordem, então a tabela hash não serve para consultas por faixa nem para percorrer em ordem. Para isso usam-se árvores (BST balanceada, B+).\n\n- **A:** Correta: é a definição de colisão.\n- **B:** Correta: no encadeamento separado, cada posição guarda uma lista com as chaves que colidiram (a alternativa é o endereçamento aberto).\n- **C:** Correta: O(1) em média; O(n) se todas as chaves caírem na mesma posição.\n- **E:** Correta: fator de carga = elementos / posições; quanto mais cheia a tabela, mais colisões."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0034",
  "campos": {
    "comentario": "**Gabarito: B.** Inserindo 10, 20 e 30, a árvore vira uma \"escada\" para a direita: o nó 10 fica com fator de balanceamento fora do limite (caso direita-direita). Corrige-se com uma rotação simples à esquerda em torno do 10: o 20 sobe para a raiz, com 10 à esquerda e 30 à direita.\n\n- **A:** Rotação dupla é para os casos em \"zigue-zague\" (esquerda-direita ou direita-esquerda), como 10, 30, 20.\n- **C:** Rotação simples à direita corrige o caso esquerda-esquerda (ex.: 30, 20, 10).\n- **D:** Divisão de nó é operação de árvore B, não de AVL.\n- **E:** Sem rotação, a diferença de alturas no nó 10 seria 2, violando a regra da AVL."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0035",
  "campos": {
    "comentario": "**Gabarito: B.** Com índices a partir de 0: pai(i) = ⌊(i - 1) / 2⌋ e filhos em 2i + 1 e 2i + 2. Para i = 4: pai = ⌊3 / 2⌋ = **1**; filhos = **9 e 10**.\n\n- **A:** Usa as fórmulas de índice inicial 1 (pai = ⌊i / 2⌋ = 2; filhos 2i e 2i + 1 = 8 e 9).\n- **C:** Pai pela fórmula de base 1, filhos pela de base 0.\n- **D:** Pai certo, filhos pela fórmula de base 1.\n- **E:** 3 é o irmão do nó 4 (ambos filhos do índice 1), não o pai."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0036",
  "campos": {
    "comentario": "**Gabarito: C.** O termo de maior crescimento é 5n³, pois n³ cresce mais rápido que n² log n. Desprezando constantes e termos menores, f(n) é Θ(n³), limite justo (superior e inferior).\n\n- **A:** n³ cresce mais que n², então f não é O(n²).\n- **B:** Θ(n² log n) considera só o segundo termo, que é dominado por n³.\n- **D:** Ω(n⁴) exigiria crescer pelo menos como n⁴; f é O(n⁴), mas não Ω(n⁴).\n- **E:** n log n é muito menor que n³."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0037",
  "campos": {
    "comentario": "**Gabarito: C.** O merge sort é Θ(n log n) em todos os casos e é estável (mantém a ordem relativa de chaves iguais), ao custo de memória auxiliar O(n).\n\n- **A:** Quicksort tem pior caso O(n²) e, nas implementações usuais, não é estável.\n- **B:** Heapsort garante O(n log n), mas não é estável.\n- **D:** Selection sort é O(n²) sempre e, na forma usual, não é estável.\n- **E:** Insertion sort é estável, mas O(n²) no pior caso."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0038",
  "campos": {
    "comentario": "**Gabarito: A.** A busca binária descarta metade do vetor a cada comparação. Como 4.096 = 2¹², são cerca de 12 divisões; no pior caso, ⌊log₂ n⌋ + 1 = 13 comparações.\n\n- **B:** 64 é a raiz quadrada de 4.096.\n- **C:** 2.048 é a metade do vetor (média de uma busca sequencial).\n- **D:** 4.096 é o pior caso da busca sequencial.\n- **E:** 24 é o dobro de log₂ n, sem relação com o algoritmo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0039",
  "campos": {
    "comentario": "**Gabarito: C.** O laço externo divide `i` por 2 a cada volta, partindo de n: executa cerca de log₂ n vezes. Para cada volta, o interno executa n vezes. Total: n × log n, ou seja, O(n log n).\n\n- **A:** O(n) conta só o laço interno.\n- **B:** O(log n) conta só o externo.\n- **D:** O(n²) valeria se o externo também fosse linear (`i--`).\n- **E:** Nada no trecho cresce exponencialmente."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0040",
  "campos": {
    "comentario": "**Gabarito: B.** Estão corretas I e II.\n\n- **I (certa):** com o vetor já ordenado, o insertion sort faz uma comparação por elemento e nenhum deslocamento: O(n).\n- **II (certa):** se o pivô é sempre o menor ou o maior elemento (ex.: vetor já ordenado com pivô na ponta), as partições ficam com 0 e n - 1 elementos e o custo é O(n²).\n- **III (errada):** a busca binária depende de acesso direto ao elemento do meio. Em lista encadeada, chegar ao meio custa O(n), e a vantagem se perde."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0041",
  "campos": {
    "comentario": "**Gabarito: B.** `7 // 2` é divisão inteira: 3. `7 % 2` é o resto: 1. `7 / 2` é a divisão real, que em Python 3 sempre dá float: 3.5. `2 ** 3` é potência: 8.\n\n- **A:** Trata `/` como divisão inteira (comportamento do Python 2 com inteiros).\n- **C:** Trata `//` como divisão real e `**` como multiplicação (2 × 3 = 6).\n- **D:** `//` arredonda para baixo (piso), não para cima.\n- **E:** O resto de 7 por 2 é 1, e 2³ é 8 (9 seria 3²)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0042",
  "campos": {
    "comentario": "**Gabarito: Errado.** É o contrário: listas (`[1, 2]`) são mutáveis, aceitam `append`, remoção e atribuição por índice; tuplas (`(1, 2)`) são imutáveis, e tentar alterar um elemento gera `TypeError`. Por serem imutáveis, tuplas podem servir de chave de dicionário (se seus elementos também forem imutáveis)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0043",
  "campos": {
    "comentario": "**Gabarito: B.** `b = a` não copia: os dois nomes apontam para a mesma lista, então o `append(4)` aparece em ambos (4 elementos). `c = a[:]` cria uma cópia (rasa) nesse momento, com 4 elementos; o `append(5)` afeta só `c`, que fica com 5.\n\n- **A:** Supõe que `b` é cópia independente de `a`.\n- **C:** Esquece o `append(5)` em `c`.\n- **D:** Supõe que `c` também é a mesma lista de `a`.\n- **E:** Ignora o `append(4)` feito por meio de `b`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0044",
  "campos": {
    "comentario": "**Gabarito: B.** No Qt/PyQt, os widgets emitem **sinais** (como `clicked`) e os métodos que os tratam são os **slots**; a ligação é feita com `botao.clicked.connect(self.metodo)`.\n\n- **A:** Listeners e adapters são o modelo de eventos do Java (Swing/AWT).\n- **C:** Callbacks de DOM pertencem ao JavaScript no navegador.\n- **D:** Delegates são o mecanismo de eventos do .NET (C#).\n- **E:** Eventos de banco de dados (triggers) não têm relação com interface gráfica."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0045",
  "campos": {
    "comentario": "**Gabarito: C.** Na consulta parametrizada, o SQL leva o marcador `?` e os valores vão em uma tupla separada, no segundo argumento de `execute`. O driver trata o valor como dado, nunca como código SQL.\n\n- **A:** Concatenação de strings: a entrada vira parte do comando (injeção).\n- **B:** A f-string tem o mesmo problema: interpola o valor no texto do SQL.\n- **D:** O operador `%` formata a string antes de enviá-la; também é interpolação.\n- **E:** Tem o `?`, mas concatena o valor em vez de passá-lo como parâmetro (e o comando fica inválido)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0046",
  "campos": {
    "comentario": "**Gabarito: B.** O valor padrão `lst=[]` é criado uma só vez, na definição da função, e reaproveitado. `f(1)` deixa a lista padrão com 1 elemento (retorna 1); `f(2)` usa a mesma lista, agora com 2 (retorna 2); `f(3, [])` recebe uma lista nova, com 1 elemento (retorna 1).\n\n- **A:** Supõe uma lista nova a cada chamada.\n- **C:** Supõe que a terceira chamada também usa a lista padrão.\n- **D:** Não corresponde a nenhum cenário: a lista nova tem só o 3.\n- **E:** O código é válido; valor padrão mutável é armadilha, não erro."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0047",
  "campos": {
    "comentario": "**Gabarito: C.** A classe abstrata não pode ser instanciada, mas pode ter construtores (chamados pelas subclasses via `super`), atributos e métodos concretos, além dos abstratos.\n\n- **A:** Java só permite herança simples de classes (`extends` de uma única classe), abstrata ou não.\n- **B:** Atributos de interface são sempre `public static final`, isto é, constantes.\n- **D:** Interface não é instanciável; `new` só com uma classe que a implemente (ou classe anônima).\n- **E:** Uma classe pode ser declarada `abstract` sem ter método abstrato algum; o inverso é que vale: tendo método abstrato, a classe tem de ser abstrata."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0048",
  "campos": {
    "comentario": "**Gabarito: Errado.** `protected` libera o acesso para as classes do **mesmo pacote** e também para as subclasses, mesmo de outros pacotes. Ele é mais permissivo que o acesso padrão (sem modificador), que vale só dentro do pacote. Ordem do mais restrito ao mais aberto: `private`, padrão (pacote), `protected`, `public`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0049",
  "campos": {
    "comentario": "**Gabarito: B.** A variável é do tipo A, mas o objeto é um B. Na sobrescrita vale o tipo do objeto (ligação dinâmica): `obj.nome()` devolve \"B\". O objeto é instância de B e, por herança, também de A: os dois `instanceof` dão `true`. Concatenando: `Btruetrue`.\n\n- **A e C:** Usam o método da classe da variável (A), como se a ligação fosse estática.\n- **D:** Todo B também é um A; `obj instanceof A` é verdadeiro.\n- **E:** Atribuir um B a uma variável A (upcast) e concatenar boolean com String são operações válidas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0050",
  "campos": {
    "comentario": "**Gabarito: D.** `TreeSet` é um `Set` (sem duplicados) implementado com árvore rubro-negra, que mantém os elementos na ordem natural (crescente) ou na de um `Comparator`.\n\n- **A:** `ArrayList` aceita duplicados e mantém a ordem de inserção.\n- **B:** `HashSet` não aceita duplicados, mas não garante ordem alguma.\n- **C:** `LinkedList` aceita duplicados e mantém a ordem de inserção.\n- **E:** `HashMap` guarda pares chave-valor, sem ordem (o mapa ordenado é o `TreeMap`)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0051",
  "campos": {
    "comentario": "**Gabarito: B.** Exceções verificadas (*checked*) herdam de `Exception` sem passar por `RuntimeException`; o compilador obriga a capturá-las ou declará-las com `throws`. `IOException` e `SQLException` são os exemplos típicos.\n\n- **A:** `NullPointerException` e `ArithmeticException` são `RuntimeException` (não verificadas).\n- **C:** `ClassCastException` e `IllegalArgumentException` também são `RuntimeException`.\n- **D:** `OutOfMemoryError` e `StackOverflowError` são `Error`, não verificados.\n- **E:** `IOException` é verificada, mas `NumberFormatException` é `RuntimeException`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0052",
  "campos": {
    "comentario": "**Gabarito: B.** `s1 == s2` compara referências: o literal está no pool de strings e `new String` cria outro objeto, logo `false`. `equals` compara o conteúdo: `true`. `7 / 2` entre inteiros trunca: 3. Em Java o resto tem o sinal do **dividendo**: `7 % -3` = 1 (7 = (-2) × (-3) + 1).\n\n- **A:** `==` só daria `true` se as duas variáveis apontassem para o mesmo objeto.\n- **C:** Divisão entre `int` não gera 3.5, e o resto não é -1.\n- **D:** `equals` compara conteúdo, que é igual.\n- **E:** -1 seria o resto de `-7 % 3`; aqui o dividendo é positivo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0053",
  "campos": {
    "comentario": "**Gabarito: C.** `p` guarda o endereço de `a` e `r` é uma referência (outro nome) para `a`: os três acessam a mesma posição de memória. `*p = 8` faz a = 8; `r = r + 2` faz a = 10. Tanto `a` quanto `*p` valem 10.\n\n- **A:** Ignora as duas alterações, como se `p` e `r` fossem cópias.\n- **B:** Considera só a escrita pelo ponteiro e ignora a soma feita pela referência.\n- **D:** `a` e `*p` são a mesma variável; não podem ter valores diferentes.\n- **E:** Soma 2 ao valor original (5), ignorando `*p = 8`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0054",
  "campos": {
    "comentario": "**Gabarito: Certo.** Em C++ a ligação padrão é estática: sem `virtual`, a chamada por ponteiro (ou referência) da classe base executa a versão da base, decidida pelo tipo do ponteiro em tempo de compilação. Com `virtual` na base, a escolha é feita em tempo de execução, pelo tipo real do objeto (via tabela de funções virtuais), e roda a versão da derivada."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0055",
  "campos": {
    "comentario": "**Gabarito: B.** `= 0` declara uma função virtual pura (sem implementação obrigatória na classe). Basta uma para a classe ser abstrata: não pode ser instanciada, e as derivadas precisam implementar a função para serem concretas.\n\n- **A:** `final` impede herança ou sobrescrita; é o oposto do que a classe abstrata pede.\n- **C:** Classe template é declarada com `template <typename T>`.\n- **D:** C++ não tem a construção \"interface\"; uma classe abstrata pode ter atributos e métodos concretos.\n- **E:** `struct` é uma classe com membros públicos por padrão; nada tem a ver com virtual pura."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0056",
  "campos": {
    "comentario": "**Gabarito: C.** O que é alocado com `new[]` deve ser liberado com `delete[]`, que desaloca o vetor inteiro (e chama o destrutor de cada elemento, quando há).\n\n- **A:** `free` faz par com `malloc`, não com `new`.\n- **B:** `delete` sem colchetes é para objeto único alocado com `new`; usá-lo em vetor tem comportamento indefinido.\n- **D:** Atribuir `nullptr` só perde o endereço; a memória continua alocada (vazamento).\n- **E:** `dispose` não existe em C++ (lembra o Pascal e o `Dispose` do .NET)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0057",
  "campos": {
    "comentario": "**Gabarito: B.** `x` é passado por valor: a função incrementa uma cópia e `a` continua 1. `y` é passado por referência (`int&`): o incremento atinge `b`, que vira 2. Como não há separador, a saída é `12`.\n\n- **A:** Supõe os dois parâmetros por valor.\n- **C:** Troca os papéis: quem muda é `b`, não `a`.\n- **D:** Supõe os dois parâmetros por referência.\n- **E:** O código é válido."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0058",
  "campos": {
    "comentario": "**Gabarito: B.** É uma propriedade autoimplementada com acessores de visibilidades diferentes: o `get` herda o `public` da propriedade e o `set` é `private`. Qualquer classe lê; só a própria classe altera.\n\n- **A:** Há `get` público, então pode ser lida (somente escrita seria ter apenas `set`).\n- **C:** Na propriedade autoimplementada o compilador cria o campo de apoio automaticamente.\n- **D:** `private` exclui também as classes derivadas; para elas seria `protected set`.\n- **E:** A propriedade não é constante: a própria classe pode atribuir valores a ela."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0059",
  "campos": {
    "comentario": "**Gabarito: Errado.** O código entre `<% %>` é executado **no servidor** (IIS) antes do envio da resposta. O navegador recebe apenas o HTML resultante e nunca vê o código ASP. O que roda no navegador é script de cliente, como o JavaScript em `<script>`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0060",
  "campos": {
    "comentario": "**Gabarito: B.** No ASP clássico, `Request.Form(\"campo\")` lê os campos enviados no corpo da requisição POST.\n\n- **A:** `Request.QueryString` lê os parâmetros da URL, usados no método GET.\n- **C:** `Response` é o objeto de saída (ex.: `Response.Write`); não tem coleção `Form`.\n- **D:** `Session` guarda dados da sessão do usuário entre requisições.\n- **E:** `Server` oferece utilitários do servidor (`Server.MapPath`, `Server.CreateObject`)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0061",
  "campos": {
    "comentario": "**Gabarito: B.** Em C# os métodos não são virtuais por padrão: a base precisa marcar o método com `virtual` (ou `abstract`) e a derivada, com `override`.\n\n- **A:** `abstract` na base até permite sobrescrita, mas `new` na derivada apenas **oculta** o método, sem ligação dinâmica.\n- **C:** `sealed` impede a sobrescrita.\n- **D:** Métodos `static` pertencem à classe e não podem ser sobrescritos.\n- **E:** Ordem invertida."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0062",
  "campos": {
    "comentario": "**Gabarito: B.** A diretiva `using Namespace;` no início do arquivo permite usar os tipos do namespace pelo nome simples (ex.: `Console` em vez de `System.Console`).\n\n- **A:** Um namespace pode estar espalhado por vários assemblies, e um assembly pode conter vários namespaces.\n- **C:** Namespaces podem ser aninhados (ex.: `System.Collections.Generic`).\n- **D:** Em C# o namespace é só organização lógica; não precisa refletir a estrutura de pastas.\n- **E:** A instrução `using (...) { }` garante o descarte (`Dispose`) de um recurso ao fim do bloco; não importa namespaces."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0063",
  "campos": {
    "comentario": "**Gabarito: C.** `<%# ... %>` é a expressão de vinculação de dados (*data binding*), avaliada quando o controle executa `DataBind()`; `Eval(\"Nome\")` lê o campo Nome do item atual.\n\n- **A:** Comentário de servidor é `<%-- ... --%>`.\n- **B:** Diretiva é `<%@ ... %>` (ex.: `<%@ Page ... %>`).\n- **D:** Inclusão de arquivo é `<!-- #include file=\"...\" -->`.\n- **E:** Escrita com codificação HTML é `<%: ... %>` (e `<%= ... %>` escreve sem codificar)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0064",
  "campos": {
    "comentario": "**Gabarito: B.** Teste de mesa, começando com x = 10 e y = 3:\n\n- 1ª volta: x = 10 - 3 = 7; y = 4.\n- 2ª volta: x = 7 - 4 = 3; y = 5.\n- 3ª volta: x = 3 - 5 = -2; y = 6.\n\nComo -2 > 0 é falso, o laço termina e a saída é **-2 6**. O teste só acontece no início de cada volta, por isso x chega a ficar negativo. A alternativa C corresponde a uma 4ª volta indevida; as demais vêm de erros de conta ou de parar o laço cedo demais."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0065",
  "campos": {
    "comentario": "**Gabarito: C.** O `do...while` testa a condição no final; o bloco executa ao menos uma vez.\n\n- **A:** O `enquanto` testa antes de entrar; se a condição já for falsa, executa zero vezes.\n- **B:** O `repita...até` testa no final (e repete até a condição ficar **verdadeira**).\n- **D:** O `para` é indicado justamente quando o número de repetições é conhecido.\n- **E:** A programação estruturada dispensa o `goto`: sequência, seleção e repetição bastam."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0066",
  "campos": {
    "comentario": "**Gabarito: B.** `17 // 5` = 3 e `17 % 5` = 2 (17 = 3 × 5 + 2). Em Python a divisão inteira arredonda para baixo, em direção a menos infinito: -17 / 5 = -3,4, cujo piso é **-4**.\n\n- **A:** -3 seria o truncamento em direção a zero, que é o comportamento de C e Java, não do Python.\n- **C e D:** `//` não devolve parte fracionária com operandos inteiros.\n- **E:** 17 // 5 é 3, não 4 (não arredonda para cima)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0067",
  "campos": {
    "comentario": "**Gabarito: Errado.** Java passa tudo **por valor**. No caso de objetos, o que se copia é a referência: parâmetro e variável do chamador apontam para o mesmo objeto, mas são variáveis distintas. `param = new Conta()` muda só a cópia local; a variável original continua apontando para o objeto antigo. Já alterar o estado do objeto pelo parâmetro (`param.depositar(10)`) é visível ao chamador."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0068",
  "campos": {
    "comentario": "**Gabarito: B.** É a recursão de Fibonacci com g(0) = g(1) = 1. Subindo: g(2) = 1 + 1 = 2; g(3) = 2 + 1 = 3; g(4) = 3 + 2 = 5; g(5) = 5 + 3 = **8**.\n\n- **A:** 5 é g(4), ou o Fibonacci de 5 na versão que começa com F(0) = 0.\n- **C:** 13 é g(6).\n- **D:** 3 é g(3).\n- **E:** 1 é só o caso base."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0069",
  "campos": {
    "comentario": "**Gabarito: B.** Sobrecarga (*overloading*): mesmo nome, assinaturas diferentes (número, tipo ou ordem dos parâmetros), na mesma classe; o compilador escolhe a versão pelos argumentos.\n\n- **A:** Sobrescrita é redefinir na subclasse um método herdado, com a mesma assinatura.\n- **C:** Herança múltipla é uma classe herdar de mais de uma superclasse.\n- **D:** Encapsulamento é ocultar o estado interno e expor operações controladas.\n- **E:** Agregação é uma associação todo-parte entre objetos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0070",
  "campos": {
    "comentario": "**Gabarito: Errado.** A descrição é da **agregação** (losango vazio na UML): a parte existe sem o todo e pode ser compartilhada, como um professor em vários departamentos. Na **composição** (losango cheio), a parte pertence a um único todo e tem o ciclo de vida preso a ele: destruído o todo, as partes também são, como os itens de um pedido."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0071",
  "campos": {
    "comentario": "**Gabarito: E.** É o DIP (*Dependency Inversion Principle*), o \"D\" do SOLID: depender de abstrações (interfaces), não de implementações concretas.\n\n- **A:** SRP: uma classe deve ter uma única responsabilidade (um só motivo para mudar).\n- **B:** OCP: aberto para extensão, fechado para modificação.\n- **C:** LSP: subtipos devem poder substituir seus tipos base.\n- **D:** ISP: várias interfaces específicas são melhores que uma interface geral."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0072",
  "campos": {
    "comentario": "**Gabarito: C.** **Acoplamento** mede a dependência entre módulos: quanto menor, menos uma mudança se propaga. **Coesão** mede o quanto os elementos de um módulo servem a um mesmo propósito: quanto maior, mais fácil entender e manter.\n\n- **A:** Acerta a coesão, erra o acoplamento.\n- **B:** Acerta o acoplamento, erra a coesão.\n- **D:** É a pior combinação possível.\n- **E:** Acoplamento de conteúdo (um módulo mexe no interior de outro) e coesão coincidental (elementos sem relação) são os piores níveis de cada escala."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0073",
  "campos": {
    "comentario": "**Gabarito: Certo.** Pelo LSP, o código que usa a superclasse deve continuar funcionando quando recebe um objeto da subclasse. Se a subclasse falha onde a superclasse funcionava (endurece as pré-condições ou lança exceções inesperadas), ela não é substituível. Exemplo clássico: uma subclasse `Pinguim` que lança exceção no método `voar()` herdado de `Ave`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0074",
  "campos": {
    "comentario": "**Gabarito: C.** Coesão temporal: os elementos estão juntos só porque rodam no mesmo momento (inicialização, encerramento), não porque cooperem em uma função.\n\n- **A:** Funcional (a melhor): todos os elementos contribuem para uma única tarefa bem definida.\n- **B:** Sequencial: a saída de um elemento é a entrada do seguinte.\n- **D:** Comunicacional: os elementos operam sobre os mesmos dados.\n- **E:** Coincidental (a pior): elementos agrupados sem relação alguma."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0075",
  "campos": {
    "comentario": "**Gabarito: B.** O Decorator envolve o objeto em outro com a mesma interface, que acrescenta comportamento antes ou depois de delegar a chamada. Os decoradores podem ser empilhados em tempo de execução, evitando uma explosão de subclasses.\n\n- **A:** O Adapter converte uma interface em outra; não acrescenta responsabilidades.\n- **C:** A Facade dá uma interface única e simples a um subsistema.\n- **D:** O Proxy tem a mesma interface do objeto real, mas serve para controlar o acesso a ele (remoto, sob demanda, proteção).\n- **E:** O Composite monta hierarquias todo-parte tratadas de modo uniforme."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0076",
  "campos": {
    "comentario": "**Gabarito: Errado.** Esses cinco são exatamente os padrões **criacionais** (tratam da criação de objetos). Os estruturais são sete: Adapter, Bridge, Composite, Decorator, Facade, Flyweight e Proxy. Os outros onze são comportamentais."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0077",
  "campos": {
    "comentario": "**Gabarito: C.** O Observer define uma dependência um-para-muitos: quando o sujeito (a conta) muda de estado, todos os observadores registrados (app, antifraude, e-mail) são notificados automaticamente, sem que a conta conheça suas classes concretas.\n\n- **A:** Strategy troca algoritmos intercambiáveis.\n- **B:** Singleton garante instância única.\n- **D:** Builder separa a construção passo a passo de um objeto complexo.\n- **E:** Visitor acrescenta operações a uma estrutura de objetos sem alterar suas classes."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0078",
  "campos": {
    "comentario": "**Gabarito: B.** No Template Method, a superclasse traz o método que fixa a sequência de passos, e as subclasses implementam ou redefinem alguns desses passos. Baseia-se em herança.\n\n- **A:** O Strategy troca o algoritmo **inteiro**, por composição, não passos de um esqueleto.\n- **C:** O State muda o comportamento do objeto conforme seu estado interno.\n- **D:** O Command encapsula uma requisição como objeto (filas, desfazer).\n- **E:** O Chain of Responsibility passa a requisição por uma cadeia de tratadores."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0079",
  "campos": {
    "comentario": "**Gabarito: C.** `git fetch` baixa os commits do remoto e atualiza as referências remotas (`origin/main`), sem tocar no branch local nem no diretório de trabalho.\n\n- **A:** `git pull` é fetch seguido de merge (ou rebase): integra automaticamente.\n- **B:** `git push` envia os commits locais ao remoto.\n- **D:** `git merge` integra um branch em outro, mas não baixa nada.\n- **E:** `git commit` grava as alterações preparadas no repositório local."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0080",
  "campos": {
    "comentario": "**Gabarito: C.** No Git Flow, o hotfix nasce de `main` (o código de produção), recebe a correção e é integrado de volta em `main` (com tag de versão) e em `develop`.\n\n- **A:** Feature é para funcionalidades novas, a partir de `develop`.\n- **B:** Release prepara uma versão e é criado a partir de `develop`, não de `main`.\n- **D:** `develop` é ramo permanente de integração, não é criado a partir de feature.\n- **E:** O tipo está certo, mas a origem não: `develop` contém código ainda não liberado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0082",
  "campos": {
    "comentario": "**Gabarito: C.** A pirâmide tem base larga de testes de unidade (rápidos, baratos e estáveis), uma camada intermediária de testes de serviço/integração e um topo estreito de testes de interface (lentos, caros e frágeis).\n\n- **A:** É a pirâmide invertida (o antipadrão \"casquinha de sorvete\").\n- **B:** A proposta é justamente de quantidades diferentes por camada.\n- **D:** A pirâmide trata de testes automatizados em todas as camadas.\n- **E:** Testes de aceitação são apenas uma parte, perto do topo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0083",
  "campos": {
    "comentario": "**Gabarito: B.** O hotfix parte de `main`, onde está o código de produção, e ao final é integrado em `main` (gerando nova versão) e também em `develop`, para que a correção não se perca na próxima release.\n\n- **A:** Feature serve a funcionalidades novas e não vai direto para produção.\n- **C:** Release nasce de `develop` e é integrado em `main` e `develop`.\n- **D:** `develop` é o ramo de integração; não vai diretamente para produção.\n- **E:** \"Trunk\" é termo do desenvolvimento baseado em tronco, outro modelo; e não se dispensa revisão."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-PROG-0084",
  "campos": {
    "comentario": "**Gabarito: C.** Código sugerido por IA pode conter erros, vulnerabilidades ou dependências inadequadas: deve passar pela mesma revisão, testes e análise de segurança do código escrito por pessoas, e os prompts não devem conter dados sensíveis.\n\n- **A:** Expor dados reais de clientes viola o sigilo bancário e a LGPD.\n- **B:** O modelo erra; a responsabilidade pelo código continua sendo da equipe.\n- **D:** A ferramenta precisa ser homologada pela instituição (segurança, privacidade, licenças).\n- **E:** Credenciais nunca vão no código nem em prompts; ficam em cofres de segredos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0001",
  "campos": {
    "comentario": "**Gabarito: B.** O HTTP é um protocolo da **camada de aplicação** (camada 7 do OSI), a que reúne os protocolos usados diretamente pelos programas do usuário (HTTP, SMTP, FTP, DNS). O enunciado reproduz a descrição clássica de Tanenbaum para essa camada.\n\n- **A:** A apresentação (6) trata da sintaxe e da semântica dos dados: conversão de formatos, compressão e criptografia.\n- **C:** O transporte (4) cuida da comunicação fim a fim entre processos (TCP, UDP); o HTTP roda sobre ele.\n- **D:** O enlace (2) entrega quadros entre nós vizinhos, com endereços MAC e detecção de erros."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0002",
  "campos": {
    "comentario": "**Gabarito: B.** Estabelecer, gerenciar e encerrar sessões (diálogos) entre aplicações, incluindo controle de diálogo e sincronização, é a função da **camada de sessão** (camada 5 do OSI).\n\n- **A:** A apresentação (6) cuida do formato dos dados: codificação, compressão e criptografia.\n- **C:** A física (1) transmite bits pelo meio: sinais, conectores e taxas.\n- **D:** A rede (3) faz endereçamento lógico e roteamento de pacotes entre redes."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0003",
  "campos": {
    "comentario": "**Gabarito: C.** Estão corretas I e III.\n\n- **I (certa):** O TCP é orientado a conexão e a abre com o *three-way handshake*: SYN, SYN-ACK, ACK.\n- **II (errada):** O UDP não garante entrega nem ordem; quem faz isso é o TCP, e por isso é ele o preferido em transferência de arquivos.\n- **III (certa):** O UDP tem cabeçalho de apenas 8 bytes, sem conexão nem retransmissão, o que serve a streaming, voz e consultas DNS comuns.\n\nAssim, caem as alternativas que incluem II (B, D e E) e a A, que omite a III."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0004",
  "campos": {
    "comentario": "**Gabarito: B.** A camada de **apresentação** (6) trata da representação dos dados: conversão de formatos e codificações, compressão e criptografia.\n\n- **A:** A sessão (5) controla o diálogo entre aplicações e a sincronização.\n- **C:** A aplicação (7) oferece os protocolos usados pelos programas (HTTP, SMTP, DNS).\n- **D:** O transporte (4) faz a entrega fim a fim, com segmentação e controle de fluxo e de erros.\n- **E:** O enlace (2) monta quadros e entrega entre nós adjacentes."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0005",
  "campos": {
    "comentario": "**Gabarito: B.** Cada porta de um switch é um domínio de colisão separado: 24 portas, 24 domínios. Já o broadcast é propagado por todas as portas da mesma VLAN; sem VLANs configuradas, há **1** domínio de broadcast.\n\n- **A:** Inverte os dois conceitos.\n- **C:** Haveria 24 domínios de broadcast só se cada porta estivesse em uma VLAN diferente (ou em um roteador).\n- **D:** Um único domínio de colisão é característica do **hub**.\n- **E:** O switch segmenta os domínios de colisão, não os elimina da contagem."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0006",
  "campos": {
    "comentario": "**Gabarito: C.** As redes Wi-Fi (IEEE 802.11) usam **CSMA/CA** (*collision avoidance*): a estação escuta o meio, espera um tempo aleatório e aguarda confirmação (ACK), pois o rádio não consegue detectar colisão enquanto transmite.\n\n- **A:** CSMA/CD (detecção de colisão) é da Ethernet cabeada em half-duplex.\n- **B:** Passagem de token é do Token Ring e do FDDI.\n- **D:** TDMA divide o canal em fatias de tempo; é usado em redes celulares como o GSM.\n- **E:** ALOHA puro transmite sem escutar o meio; é o precursor histórico, não o método do 802.11."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0007",
  "campos": {
    "comentario": "**Gabarito: C.** Wi-Fi 6 é o padrão **802.11ax** (2,4 e 5 GHz); o Wi-Fi 6E é a extensão dele para a faixa de 6 GHz. O Wi-Fi 7 é o 802.11be.\n\n- **A:** 802.11n é o Wi-Fi 4 (2,4 e 5 GHz).\n- **B:** 802.11ac é o Wi-Fi 5 (apenas 5 GHz).\n- **D:** 802.11g opera em 2,4 GHz, até 54 Mbps.\n- **E:** 802.11b opera em 2,4 GHz, até 11 Mbps."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0008",
  "campos": {
    "comentario": "**Gabarito: B.** O WPA3-Personal troca o PSK do WPA2 pelo **SAE** (*Simultaneous Authentication of Equals*, o handshake \"Dragonfly\"), que impede ataques de dicionário offline sobre o handshake capturado e oferece sigilo futuro (*forward secrecy*).\n\n- **A:** RC4 com vetor de inicialização de 24 bits é o WEP.\n- **C:** O WPA3-Enterprise usa justamente o 802.1X para autenticação.\n- **D:** Em redes abertas, o OWE (Wi-Fi Enhanced Open) acrescenta criptografia mesmo sem senha.\n- **E:** TKIP é do WPA original; o WPA3 usa AES (CCMP/GCMP)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0009",
  "campos": {
    "comentario": "**Gabarito: A.** /27 corresponde à máscara 255.255.255.224, com blocos de 32 endereços: 0, 32, 64, 96, 128, 160... O host .140 cai no bloco 128 a 159. Rede: 10.20.30.128; broadcast (último endereço do bloco): **10.20.30.159**; hosts úteis: .129 a .158.\n\n- **B:** .143 seria o broadcast com /28 (blocos de 16).\n- **C:** .191 seria o broadcast com /26 (bloco 128 a 191).\n- **D:** .255 seria o broadcast com /25 ou /24.\n- **E:** .127 é o broadcast do bloco anterior em /25 ou /26; o host .140 não pertence a ele."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0010",
  "campos": {
    "comentario": "**Gabarito: C.** As faixas privadas da RFC 1918 são 10.0.0.0/8, 172.16.0.0/12 (de 172.16.0.0 a 172.31.255.255) e 192.168.0.0/16. O endereço 172.20.5.4 está na segunda.\n\n- **A:** 172.32.x.x fica logo depois do fim da faixa (que termina em 172.31).\n- **B:** 192.169.x.x não é 192.168.x.x; é público.\n- **D:** 169.254.0.0/16 é link-local (APIPA, RFC 3927), não faz parte da RFC 1918.\n- **E:** 11.0.0.1 é público; a faixa privada é só 10.0.0.0/8."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0011",
  "campos": {
    "comentario": "**Gabarito: B.** Hosts úteis = 2ⁿ − 2, com n bits de host. Para 60 hosts são necessários 6 bits: 2⁶ − 2 = 62. Sobram 26 bits de rede: /26, máscara **255.255.255.192**.\n\n- **A:** /25 dá 126 hosts; atende, mas desperdiça endereços.\n- **C:** /27 dá só 30 hosts.\n- **D:** /28 dá 14 hosts.\n- **E:** /29 dá 6 hosts."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0012",
  "campos": {
    "comentario": "**Gabarito: E.** Regras de abreviação: zeros à esquerda de cada grupo podem ser omitidos e **uma única** sequência de grupos zerados pode virar \"::\". O endereço tem duas sequências de dois grupos zerados; comprimir a primeira dá a forma B e comprimir a segunda dá a forma C. As duas são válidas (a RFC 5952 recomenda, em caso de empate, comprimir a primeira, ou seja, a forma B).\n\n- **A:** Usa \"::\" duas vezes, o que é proibido por tornar o endereço ambíguo.\n- **B e C:** Cada uma é válida, mas isoladamente é resposta incompleta diante da E.\n- **D:** Elimina dois grupos de zeros sem \"::\", ficando com menos de 8 grupos: é outro endereço (inválido)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0013",
  "campos": {
    "comentario": "**Gabarito: D.** A incorreta é a D: o IPv6 **não tem broadcast**. A descoberta de vizinhos (NDP) usa mensagens ICMPv6 enviadas por multicast (por exemplo, para o endereço *solicited-node*).\n\n- **A:** Correta: endereços de 128 bits (contra 32 do IPv4).\n- **B:** Correta: o NDP assume a resolução de endereços feita pelo ARP no IPv4.\n- **C:** Correta: link-local usa o prefixo fe80::/10.\n- **E:** Correta: o cabeçalho base é fixo em 40 bytes; opções vão em cabeçalhos de extensão."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0014",
  "campos": {
    "comentario": "**Gabarito: B.** Portas padrão: 22 = SSH, 53 = DNS, 143 = IMAP e 443 = HTTPS.\n\n- **A:** Telnet é porta 23 e POP3 é 110.\n- **C:** DHCP usa 67 e 68 (UDP) e HTTP é 80.\n- **D:** FTP usa 21 (controle) e 20 (dados); SMTP é 25.\n- **E:** SNMP usa 161 e 162 (UDP) e LDAPS é 636."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0015",
  "campos": {
    "comentario": "**Gabarito: B.** O TCP é orientado a conexão e a estabelece com o *three-way handshake*: o cliente envia SYN, o servidor responde SYN-ACK e o cliente confirma com ACK.\n\n- **A:** O UDP não garante entrega nem ordem.\n- **C:** O DNS usa UDP na maioria das consultas e TCP em transferências de zona e respostas grandes (porta 53 em ambos).\n- **D:** O cabeçalho UDP tem 8 bytes; 20 bytes é o mínimo do cabeçalho TCP.\n- **E:** Para voz em tempo real prefere-se o UDP: retransmissões do TCP aumentam a latência."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0016",
  "campos": {
    "comentario": "**Gabarito: B.** O **ESP** (*Encapsulating Security Payload*) cifra a carga útil, dando confidencialidade (além de autenticação e integridade). No modo **túnel**, o pacote IP original inteiro é encapsulado em um novo pacote com novo cabeçalho IP, como nas VPNs site a site.\n\n- **A e D:** O AH só oferece autenticação e integridade, sem criptografia.\n- **C:** O IKE negocia chaves e associações de segurança; não cifra o tráfego de dados.\n- **E:** O ESP está certo, mas o modo transporte protege apenas a carga útil e mantém o cabeçalho IP original."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0017",
  "campos": {
    "comentario": "**Gabarito: C.** O **ARP** resolve um endereço IPv4 no endereço MAC correspondente dentro da rede local. Como não tem autenticação, aceita respostas forjadas: é o *ARP spoofing* (envenenamento de cache), base de ataques *man-in-the-middle*.\n\n- **A:** ICMP leva mensagens de controle e erro (ping, destino inalcançável).\n- **B:** DHCP distribui configuração IP aos hosts.\n- **D:** DNS traduz nomes em endereços IP; também sofre envenenamento de cache, mas não lida com MAC.\n- **E:** NDP faz o papel do ARP no IPv6, não no IPv4."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0018",
  "campos": {
    "comentario": "**Gabarito: C.** Nas normas de cabeamento estruturado (ANSI/TIA-568, ABNT NBR 14565), o canal horizontal em par trançado tem no máximo **100 m**: até 90 m de enlace permanente mais até 10 m de cordões (de equipamento e de área de trabalho).\n\n- **A:** 55 m é o alcance aproximado de 10GBASE-T sobre Cat 6.\n- **B:** 90 m é só o enlace permanente, sem os cordões.\n- **D e E:** 150 m e 300 m excedem o limite do par trançado; distâncias assim pedem fibra óptica."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0019",
  "campos": {
    "comentario": "**Gabarito: D.** O **Cat 6A** (classe EA) é especificado até 500 MHz e suporta 10GBASE-T em canal de 100 m.\n\n- **A:** Cat 5 vai a 100 MHz, para 100 Mbps.\n- **B:** Cat 5e, também de 100 MHz, suporta 1 Gbps.\n- **C:** Cat 6 vai a 250 MHz; chega a 10 Gbps só em distâncias reduzidas (cerca de 55 m).\n- **E:** Cat 3 vai a 16 MHz, usado em telefonia e 10 Mbps."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0020",
  "campos": {
    "comentario": "**Gabarito: Errado.** A descrição é da fibra **monomodo**: núcleo fino (cerca de 9 µm), fonte laser, um único modo de propagação e, por isso, baixa dispersão e alcance de dezenas de quilômetros. A multimodo tem núcleo mais largo (50 ou 62,5 µm), usa LED ou VCSEL, sofre dispersão modal e é indicada para curtas distâncias, como dentro de prédios e data centers."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0021",
  "campos": {
    "comentario": "**Gabarito: A.** A RFC 2544 define a metodologia de *benchmarking* de dispositivos de interconexão de redes, com os testes de vazão (*throughput*), latência, taxa de perda de quadros e quadros *back-to-back* (rajada), além de recuperação de sistema e de reset.\n\n- **B:** Jitter de voz, MOS e eco são métricas de qualidade de VoIP.\n- **C:** Disponibilidade web e tempo de resposta HTTP são monitoração de aplicações.\n- **D:** Atenuação, NEXT e perda de retorno são testes de certificação de cabeamento metálico.\n- **E:** Cobertura e interferência são tema de *site survey* de redes sem fio."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0022",
  "campos": {
    "comentario": "**Gabarito: C.** O **IEEE 802.1X** define o controle de acesso à rede baseado em porta: o suplicante se autentica via EAP junto ao autenticador (switch ou AP), que consulta um servidor de autenticação (em geral RADIUS) antes de liberar a porta.\n\n- **A:** 802.1D é o Spanning Tree Protocol (pontes).\n- **B:** 802.1Q é a marcação de VLANs (*tagging*).\n- **D:** 802.3af é Power over Ethernet (PoE).\n- **E:** 802.11ax é o Wi-Fi 6."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-REDES-0023",
  "campos": {
    "comentario": "**Gabarito: B.** Em SDN, o plano de controle (decisão de encaminhamento) é separado do plano de dados (encaminhamento dos pacotes) e fica centralizado em um controlador programável, que comanda os equipamentos por interfaces como o OpenFlow.\n\n- **A:** Virtualizar funções de rede (firewall, balanceador) em servidores comuns é NFV, conceito complementar, mas distinto.\n- **C:** SDN não substitui o IP; continua encaminhando pacotes IP.\n- **D:** Os switches continuam existindo como plano de dados.\n- **E:** SDN independe do meio físico."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0001",
  "campos": {
    "comentario": "**Gabarito: B.** Paulo removeu os nomes, trocou os identificadores, generalizou a data de nascimento em faixas e reduziu o endereço ao CEP para que o dado perca a possibilidade de associação, direta ou indireta, a um indivíduo. É a definição literal de **anonimização** (LGPD, art. 5º, XI).\n\n- **A:** Bloqueio é a suspensão temporária de qualquer operação de tratamento, com guarda do dado (art. 5º, XIII).\n- **C, D e E:** Difusão, classificação e extração são apenas exemplos de operações de tratamento listadas no art. 5º, X; nenhuma tem por objetivo impedir a identificação do titular."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0002",
  "campos": {
    "comentario": "**Gabarito: D.** Com placeholders, o comando SQL é enviado com marcadores e os valores seguem separados, como parâmetros. O banco os trata sempre como dados, nunca como parte do comando, o que impede **injeção de SQL**.\n\n- **A:** Duplicação se evita com chave primária ou restrição UNIQUE, e nem se aplica a uma remoção.\n- **B:** Integridade vem de restrições (chaves, CHECK) e transações, não da forma de passar valores.\n- **C:** Portabilidade pode ser um efeito colateral, mas não é a principal razão; o estilo do placeholder até varia entre drivers."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0003",
  "campos": {
    "comentario": "**Gabarito: C.** O código concatena a entrada do usuário no texto da consulta, permitindo **SQL injection** (por exemplo, `' OR '1'='1`). Consultas parametrizadas (*prepared statements*) separam código e dado: o valor nunca é interpretado como SQL.\n\n- **A:** Cifrar a coluna protege o dado em repouso, mas a consulta injetada continua sendo executada.\n- **B:** HTTPS protege o tráfego entre navegador e servidor; o ataque chega dentro desse canal.\n- **D:** Ocultar erros só dificulta; ainda há injeção cega.\n- **E:** O tamanho do campo não impede a injeção."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0004",
  "campos": {
    "comentario": "**Gabarito: E.** Assinar é calcular o hash do documento e cifrá-lo com a **chave privada do remetente**. Qualquer pessoa confere com a chave pública dele, obtendo autenticidade, integridade e não repúdio.\n\n- **A:** Cifrar com a chave pública do destinatário dá confidencialidade, não autenticidade.\n- **B:** Inverte as chaves: a privada assina e a pública verifica; a chave privada nunca é compartilhada.\n- **C:** Chave secreta compartilhada é criptografia simétrica.\n- **D:** É o contrário: a assinatura garante integridade e não oferece confidencialidade."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0005",
  "campos": {
    "comentario": "**Gabarito: A.** O sistema autenticou o usuário, mas não verificou se a conta 1002 pertence a ele. Acessar recurso alheio trocando o identificador (IDOR) é **Quebra de Controle de Acesso**, categoria A01 do OWASP Top 10 (2021).\n\n- **B:** Falhas criptográficas tratam de dados sem cifragem ou com algoritmos fracos.\n- **C:** Injeção ocorre quando dado não confiável é interpretado como comando (SQL, comandos do SO).\n- **D:** Refere-se ao uso de bibliotecas e componentes com vulnerabilidades conhecidas.\n- **E:** Trata da falta de logs e alertas para detectar ataques."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0006",
  "campos": {
    "comentario": "**Gabarito: B.** O **controlador** é quem toma as decisões sobre o tratamento (o banco); o **operador** é quem trata os dados em nome do controlador, seguindo suas instruções (a empresa de nuvem). LGPD, art. 5º, VI e VII.\n\n- **A:** Inverte os papéis.\n- **C e D:** O encarregado (DPO) é a pessoa indicada como canal de comunicação entre o controlador, os titulares e a ANPD; nem o banco nem a nuvem ocupam esse papel aqui.\n- **E:** Titular é a pessoa natural a quem os dados se referem (o cliente)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0007",
  "campos": {
    "comentario": "**Gabarito: A.** Pela Resolução CMN 4.893/2021, a política de segurança cibernética (e o plano de ação e de resposta a incidentes) deve ser aprovada pelo conselho de administração ou, na sua inexistência, pela diretoria da instituição.\n\n- **B:** A política deve ser divulgada aos funcionários e aos prestadores de serviço, e um resumo dela ao público.\n- **C:** A norma não proíbe a nuvem; estabelece requisitos para a contratação.\n- **D:** Cada instituição elabora e aprova a sua; o Banco Central fiscaliza.\n- **E:** Procedimentos de resposta a incidentes são obrigatórios; seguro não os dispensa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0008",
  "campos": {
    "comentario": "**Gabarito: C.** **Não repúdio** (irretratabilidade) é a garantia de que o autor não pode negar a autoria de uma mensagem ou transação. É obtido com assinatura digital, pois só o autor possui a chave privada.\n\n- **A:** Confidencialidade garante acesso só a quem é autorizado.\n- **B:** Disponibilidade garante que a informação esteja acessível quando necessária.\n- **D:** Integridade garante que a informação não foi alterada indevidamente.\n- **E:** Legalidade é a conformidade com leis e normas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0009",
  "campos": {
    "comentario": "**Gabarito: B.** O **worm** é um programa autônomo que se replica sozinho pela rede, explorando vulnerabilidades, sem arquivo hospedeiro e sem ação do usuário.\n\n- **A:** O vírus precisa se anexar a um arquivo ou programa hospedeiro e depende de sua execução.\n- **C:** O cavalo de Troia se disfarça de programa legítimo e não se replica.\n- **D:** O rootkit serve para esconder a presença do invasor e de outros malwares.\n- **E:** O spyware coleta informações do usuário (teclas, telas, hábitos)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0010",
  "campos": {
    "comentario": "**Gabarito: C.** No **CSRF** (*Cross-Site Request Forgery*), um site malicioso faz o navegador da vítima enviar uma requisição ao site em que ela está autenticada; o cookie de sessão vai junto e o servidor a aceita como legítima. Defesas: token anti-CSRF, cookies `SameSite` e confirmação da transação.\n\n- **A:** XSS injeta e executa script no navegador, dentro da página do site vulnerável.\n- **B:** SQL injection ataca o banco de dados pela entrada da aplicação.\n- **D:** Clickjacking engana o usuário para clicar em página sobreposta invisível (iframe).\n- **E:** Pharming redireciona para site falso, em geral adulterando o DNS."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0011",
  "campos": {
    "comentario": "**Gabarito: B.** Consultas parametrizadas (*prepared statements*) atacam a causa: o comando é compilado antes e os valores entram só como dados, sem chance de virar código SQL.\n\n- **A:** Ocultar erros ajuda pouco; a injeção cega (*blind*) funciona sem mensagens.\n- **C:** Criptografar o banco protege dados em repouso, não impede a execução da consulta injetada.\n- **D:** HTTPS protege o canal, não o conteúdo que a aplicação recebe.\n- **E:** Validação no navegador é contornável: o atacante envia a requisição direto ao servidor."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0012",
  "campos": {
    "comentario": "**Gabarito: C.** Copiar \"o que foi alterado desde o último backup **completo**\" define o backup **diferencial**, que é cumulativo. Para restaurar bastam o último completo e o último diferencial.\n\n- **A:** O diferencial sozinho não contém os dados que não mudaram.\n- **B:** Precisar do completo e de todos os diários desde então é a restauração do backup **incremental** (cada um copia só o que mudou desde o backup anterior).\n- **D:** Só o completo perderia as alterações da semana.\n- **E:** Completos antigos não são necessários."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0013",
  "campos": {
    "comentario": "**Gabarito: C.** A detecção por anomalia (comportamento) compara o tráfego com um perfil considerado normal; por isso percebe ataques novos, mas também acusa desvios legítimos, gerando mais falsos positivos.\n\n- **A:** O IDS é passivo: detecta e alerta. Quem bloqueia em linha é o IPS.\n- **B:** O IPS fica em linha e intervém no tráfego.\n- **D:** Assinaturas só reconhecem ataques já catalogados; não pegam *zero-day*.\n- **E:** IDS e IPS complementam o firewall, não o substituem."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0014",
  "campos": {
    "comentario": "**Gabarito: C.** Para sigilo, cifra-se com a **chave pública do destinatário**: só a chave privada de Bruno, que apenas ele possui, consegue decifrar.\n\n- **A:** Cifrar com a própria chave privada é a base da assinatura; qualquer um decifra com a chave pública de Ana.\n- **B:** Com a chave pública de Ana, só a própria Ana conseguiria ler.\n- **D:** Ana não tem acesso à chave privada de Bruno, que nunca é compartilhada.\n- **E:** Pelo mesmo motivo, nada pode ser derivado da chave privada de Bruno por Ana."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0015",
  "campos": {
    "comentario": "**Gabarito: B.** O emissor calcula o hash do documento e o cifra com sua **chave privada**; o resultado é a assinatura. O receptor decifra com a chave pública do emissor e compara com o hash que ele mesmo calcula.\n\n- **A:** Cifrar o documento com a chave pública do destinatário é sigilo, não assinatura.\n- **C:** A chave da AC serve para assinar certificados, e a AC assina com sua chave privada.\n- **D:** Descreve (mal) cifragem simétrica; enviar a chave junto anula o sigilo.\n- **E:** A assinatura dá autenticidade, integridade e não repúdio, mas não confidencialidade."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0016",
  "campos": {
    "comentario": "**Gabarito: C.** O SHA-256, da família SHA-2, gera um resumo de 256 bits e é uma função de mão única: não se recupera a entrada a partir do hash.\n\n- **A:** AES é **simétrico**, com chaves de 128, 192 ou 256 bits.\n- **B:** RSA é **assimétrico** e se baseia na dificuldade de fatorar números grandes; curvas elípticas são do ECC.\n- **D:** DES usa chave de 56 bits e é inseguro; 168 bits é o 3DES com três chaves.\n- **E:** MD5 tem colisões conhecidas e é rápido demais; para senhas usam-se bcrypt, scrypt, PBKDF2 ou Argon2, com sal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0017",
  "campos": {
    "comentario": "**Gabarito: C.** O **ITI** (Instituto Nacional de Tecnologia da Informação), autarquia federal, é a Autoridade Certificadora Raiz da ICP-Brasil: emite os certificados das ACs de primeiro nível, credencia e fiscaliza as entidades da cadeia.\n\n- **A e B:** Serpro e Receita Federal atuam como autoridades certificadoras da cadeia, abaixo da raiz.\n- **D:** O Banco Central não exerce o papel de AC Raiz.\n- **E:** O CGI.br trata da governança da internet no Brasil; quem define as políticas da ICP-Brasil é o Comitê Gestor da ICP-Brasil, outro órgão."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0018",
  "campos": {
    "comentario": "**Gabarito: C.** A AR é a interface com o usuário: recebe as solicitações, identifica e valida os solicitantes e encaminha os pedidos de emissão ou revogação à AC a que está vinculada.\n\n- **A:** Emitir e revogar certificados é atribuição da AC.\n- **B:** A Lista de Certificados Revogados (LCR) é emitida e assinada pela AC.\n- **D:** A chave privada é gerada e mantida sob controle exclusivo do titular.\n- **E:** Quem credencia as ACs é a AC Raiz (ITI)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0019",
  "campos": {
    "comentario": "**Gabarito: B.** No certificado **A3**, o par de chaves é gerado e armazenado em hardware criptográfico (token, cartão inteligente ou HSM), de onde a chave privada não pode ser copiada.\n\n- **A:** Descreve o A1: chave em arquivo (software) e validade de até 1 ano.\n- **C:** Certificados A são de assinatura; carimbo do tempo usa certificado do tipo T.\n- **D:** A identificação do titular é sempre exigida, feita pela AR.\n- **E:** A AC Raiz só emite certificados para ACs, nunca para usuário final."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0020",
  "campos": {
    "comentario": "**Gabarito: C.** *Broken Access Control* é a A01 desde a edição 2021 e manteve o primeiro lugar na edição 2025.\n\n- **A:** *Injection* foi a primeira até 2017; caiu para A03 em 2021 e A05 em 2025.\n- **B:** *Cryptographic Failures* era A02 em 2021 e passou a A04 em 2025.\n- **D:** *Security Misconfiguration* subiu de A05 (2021) para A02 (2025).\n- **E:** *Software Supply Chain Failures* é novidade de 2025, em A03.\n\n**Atenção (edital 2027):** o edital cita o OWASP Top 10:2021, cuja ordem é A01 Broken Access Control, A02 Cryptographic Failures, A03 Injection, A04 Insecure Design, A05 Security Misconfiguration, A06 Vulnerable and Outdated Components, A07 Identification and Authentication Failures, A08 Software and Data Integrity Failures, A09 Security Logging and Monitoring Failures e A10 SSRF."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0021",
  "campos": {
    "comentario": "**Gabarito: B.** A API autentica o usuário, mas não confere se o objeto pedido (cliente 5502) pertence a ele. É **BOLA** (*Broken Object Level Authorization*), a API1 do OWASP API Security Top 10 2023, equivalente ao IDOR das aplicações web.\n\n- **A:** API2 trata de falhas na autenticação (tokens fracos, força bruta); aqui o usuário está autenticado corretamente.\n- **C:** API4 é consumo irrestrito de recursos (falta de limites de taxa, tamanho, custo).\n- **D:** API8 é configuração insegura (padrões inseguros, CORS permissivo, erros detalhados).\n- **E:** API10 é confiar sem validação em dados de APIs de terceiros."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0022",
  "campos": {
    "comentario": "**Gabarito: C.** **SAST** (*Static Application Security Testing*) analisa código-fonte, bytecode ou binário sem executar a aplicação (caixa-branca), e por isso roda cedo no pipeline, logo após o commit.\n\n- **A:** DAST testa a aplicação **em execução**, de fora para dentro (caixa-preta).\n- **B:** Pentest caixa-preta também exige o sistema rodando e não usa o código-fonte.\n- **D:** RASP é proteção em tempo de execução, embutida na aplicação.\n- **E:** Fuzzing envia entradas malformadas a um programa em execução."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0023",
  "campos": {
    "comentario": "**Gabarito: C.** No fluxo **Client Credentials**, a própria aplicação se autentica no servidor de autorização com seu `client_id` e `client_secret` e recebe o token de acesso, sem usuário envolvido: é o fluxo máquina a máquina.\n\n- **A:** Implicit era para aplicações no navegador e hoje é desaconselhado (o token trafega pela URL).\n- **B:** Password exige as credenciais de um usuário e também é desaconselhado.\n- **D:** Authorization Code envolve login e consentimento de um usuário; e a recomendação atual é usá-lo com PKCE.\n- **E:** Device Code é para dispositivos sem navegador ou teclado, com o usuário autorizando em outro aparelho."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0024",
  "campos": {
    "comentario": "**Gabarito: B.** O JWT assinado (JWS) tem três partes separadas por ponto: `header.payload.signature`, em Base64URL. Base64URL é codificação, não criptografia: quem obtém o token lê o payload; a assinatura garante apenas integridade e autenticidade.\n\n- **A:** O payload só é cifrado no JWE, não no JWS.\n- **C:** O algoritmo `none` (sem assinatura) deve ser rejeitado; aceitá-lo é uma vulnerabilidade clássica.\n- **D:** `exp` é a data de expiração; o emissor é `iss`.\n- **E:** HS256 é HMAC com SHA-256 e usa segredo simétrico compartilhado; par de chaves é com RS256 ou ES256."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0025",
  "campos": {
    "comentario": "**Gabarito: B.** As duas categorias novas da edição 2025 são A03 *Software Supply Chain Failures* (ampliação de \"componentes vulneráveis e desatualizados\" para toda a cadeia de suprimentos) e A10 *Mishandling of Exceptional Conditions* (tratamento inadequado de erros e condições excepcionais).\n\n- **A:** *Injection* existe desde as primeiras edições e o XSS foi incorporado a ela em 2021.\n- **C:** SSRF e *Insecure Design* são novidades de 2021; em 2025 o SSRF foi absorvido por *Broken Access Control*.\n- **D:** CSRF saiu da lista em 2017 e clickjacking nunca foi categoria própria.\n- **E:** São nomes de categorias da edição 2017.\n\n**Atenção (edital 2027):** o edital cita o OWASP Top 10:2021, cuja ordem é A01 Broken Access Control, A02 Cryptographic Failures, A03 Injection, A04 Insecure Design, A05 Security Misconfiguration, A06 Vulnerable and Outdated Components, A07 Identification and Authentication Failures, A08 Software and Data Integrity Failures, A09 Security Logging and Monitoring Failures e A10 SSRF."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0026",
  "campos": {
    "comentario": "**Gabarito: C.** Dado pessoal sensível (LGPD, art. 5º, II) é o dado sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização religiosa, filosófica ou política, saúde, vida sexual, e o dado genético ou **biométrico**, quando vinculado a pessoa natural.\n\n- **A, B e E:** Conta-corrente, endereço e histórico financeiro são dados pessoais, mas não estão no rol de sensíveis.\n- **D:** CNPJ identifica pessoa jurídica; a LGPD protege dados de pessoas naturais."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0027",
  "campos": {
    "comentario": "**Gabarito: C.** **Operador** é a pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador (LGPD, art. 5º, VII).\n\n- **A:** O encarregado é o canal de comunicação entre controlador, titulares e ANPD.\n- **B:** O titular é a pessoa natural a quem os dados se referem.\n- **D:** A autoridade nacional (ANPD) zela pela lei, fiscaliza e aplica sanções.\n- **E:** \"Agente de pesquisa\" não é figura da LGPD; a lei fala em órgão de pesquisa, e os agentes de tratamento são controlador e operador."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0028",
  "campos": {
    "comentario": "**Gabarito: C.** O **legítimo interesse** do controlador (art. 7º, IX) não aparece no art. 11, que trata dos dados sensíveis; o mesmo vale para a proteção do crédito (art. 7º, X). O próprio art. 7º, IX já ressalva os direitos e liberdades fundamentais do titular.\n\n- **A:** Obrigação legal ou regulatória consta dos dois artigos (art. 11, II, \"a\").\n- **B:** Proteção da vida ou da incolumidade física também (art. 11, II, \"e\").\n- **D:** Exercício regular de direitos, inclusive em processo judicial, também (art. 11, II, \"d\").\n- **E:** Tutela da saúde também (art. 11, II, \"f\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0029",
  "campos": {
    "comentario": "**Gabarito: B.** É o texto do art. 12 da LGPD: dado anonimizado não é dado pessoal, salvo quando a anonimização for revertida ou puder ser revertida com esforços razoáveis, usando meios próprios.\n\n- **A:** Dado pseudonimizado continua sendo dado pessoal, pois pode ser reassociado ao titular.\n- **C:** A pseudonimização é reversível por quem detém a informação adicional mantida em separado.\n- **D:** O CPF tem só 11 dígitos; um hash sem chave pode ser revertido testando todas as combinações.\n- **E:** A lei define pseudonimização no art. 13, § 4º."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0030",
  "campos": {
    "comentario": "**Gabarito: C.** LGPD, art. 52, II: multa simples de até 2% do faturamento da pessoa jurídica de direito privado, grupo ou conglomerado no Brasil no último exercício, excluídos os tributos, limitada no total a R$ 50 milhões por infração.\n\n- **A:** A base é o faturamento no Brasil e existe teto de R$ 50 milhões.\n- **B:** Esses são os parâmetros do GDPR europeu.\n- **D:** A multa diária (art. 52, III) também respeita o limite total de R$ 50 milhões; não é R$ 50 milhões por dia.\n- **E:** A lei não usa lucro líquido como base."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0031",
  "campos": {
    "comentario": "**Gabarito: C.** Princípio da **necessidade** (art. 6º, III): limitação do tratamento ao mínimo necessário para as finalidades, com dados pertinentes, proporcionais e não excessivos. É a \"minimização de dados\".\n\n- **A:** Adequação é a compatibilidade do tratamento com as finalidades informadas ao titular.\n- **B:** Finalidade exige propósitos legítimos, específicos, explícitos e informados.\n- **D:** Prevenção é adotar medidas para evitar danos decorrentes do tratamento.\n- **E:** Qualidade dos dados garante exatidão, clareza, relevância e atualização."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0032",
  "campos": {
    "comentario": "**Gabarito: A.** Na ISO 31000:2018, o \"processo de avaliação de riscos\" (*risk assessment*) é o conjunto de três etapas: **identificação**, **análise** e **avaliação** de riscos.\n\n- **B:** Planejamento, execução e encerramento são fases de gerenciamento de projetos.\n- **C:** Tratamento vem depois da avaliação; aceitar e transferir são opções de tratamento.\n- **D:** Monitoramento e análise crítica, e registro e relato, são atividades que acompanham todo o processo, fora da avaliação.\n- **E:** Prevenção, detecção e correção são tipos de controle, não etapas da norma."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0033",
  "campos": {
    "comentario": "**Gabarito: D.** O seguro divide com outra parte (a seguradora) as consequências financeiras do risco: é **compartilhar** o risco, assim como a terceirização. As quatro opções de tratamento da ISO/IEC 27005 são modificar, reter, evitar e compartilhar.\n\n- **A:** Modificar é aplicar controles para reduzir a probabilidade ou o impacto.\n- **B:** Reter é aceitar conscientemente o risco, sem ação adicional.\n- **C:** Evitar é abandonar a atividade ou condição que gera o risco.\n- **E:** Aceitar o risco residual é decisão tomada após o tratamento, não uma opção de tratamento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0034",
  "campos": {
    "comentario": "**Gabarito: Certo.** A Revisão 3 do NIST SP 800-61 (2025) reorganizou as recomendações de resposta a incidentes segundo as seis funções do NIST CSF 2.0: Governar, Identificar, Proteger, Detectar, Responder e Recuperar. A Rev. 2 usava o ciclo de quatro fases: preparação; detecção e análise; contenção, erradicação e recuperação; e atividade pós-incidente."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0035",
  "campos": {
    "comentario": "**Gabarito: C.** As cinco fases da ISO/IEC 27035-1 são: planejar e preparar; detectar e reportar; **avaliar e decidir**; responder; e aprender lições. Na terceira, o evento é avaliado e classificado, e decide-se se constitui incidente de segurança da informação.\n\n- **A:** Planejar e preparar define política, plano e equipe antes de qualquer evento.\n- **B:** Detectar e reportar é perceber e registrar o evento.\n- **D:** Responder é conter, erradicar e recuperar, depois de confirmado o incidente.\n- **E:** Aprender lições é a melhoria feita após o encerramento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SEG-0036",
  "campos": {
    "comentario": "**Gabarito: C.** A **ISO/IEC 27017** é o código de prática de controles de segurança da informação para serviços em nuvem: complementa a 27002 com orientações e controles adicionais para provedores e clientes.\n\n- **A:** A 27001 traz os requisitos do sistema de gestão de segurança da informação (SGSI), a norma certificável.\n- **B:** A 27005 trata da gestão de riscos de segurança da informação.\n- **D:** A 27035 trata da gestão de incidentes de segurança.\n- **E:** A ISO 22301 é de gestão de continuidade de negócios."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0001",
  "campos": {
    "comentario": "**Gabarito: B.** O Prometheus usa o modelo *pull*: o servidor consulta periodicamente (*scrape*) endpoints HTTP dos alvos, em geral `/metrics`, onde a aplicação ou um *exporter* expõe as métricas em formato texto.\n\n- **A:** SNMP trap é envio (*push*) do dispositivo ao gerente, típico de ferramentas como o Zabbix; no Prometheus, SNMP só entra via exporter.\n- **C:** Ler logs com grok é função do Logstash; Prometheus trata de métricas, não de logs.\n- **D:** Ele não consulta bancos de aplicações por SQL; guarda os dados em seu próprio banco de séries temporais.\n- **E:** O Pushgateway é exceção, para jobs de curta duração que não vivem o bastante para serem raspados."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0002",
  "campos": {
    "comentario": "**Gabarito: B.** O pipeline do Logstash tem três etapas: *input*, *filter* e *output*. É no **filter** que os eventos são analisados, transformados e enriquecidos, com plugins como `grok` (extrai campos de texto), `mutate`, `date` e `geoip`.\n\n- **A:** *Input* recebe os eventos das fontes (arquivos, Beats, syslog, filas).\n- **C:** *Output* envia os eventos ao destino, como o Elasticsearch.\n- **D:** *Codec* apenas codifica e decodifica o formato dos dados na entrada ou na saída (JSON, multiline).\n- **E:** *Index* não é etapa do Logstash; é a estrutura de armazenamento do Elasticsearch."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0003",
  "campos": {
    "comentario": "**Gabarito: Errado.** O Grafana é uma ferramenta de **visualização**: monta painéis (*dashboards*) e alertas consultando fontes de dados externas. Ele não armazena as métricas; o banco de séries temporais é o próprio Prometheus (ou InfluxDB, Elasticsearch e outros), que o Grafana usa como *data source*. As duas ferramentas se complementam, uma não substitui a outra."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0004",
  "campos": {
    "comentario": "**Gabarito: B.** No Zabbix, a **trigger** é a expressão lógica avaliada sobre os valores coletados que define quando há um problema (por exemplo, uso de CPU acima de 90% por 5 minutos) e muda o estado para PROBLEM.\n\n- **A:** Item é a métrica coletada de um host; a trigger é avaliada sobre ele.\n- **C:** Template é um conjunto reutilizável de itens, triggers e gráficos aplicado a vários hosts.\n- **D:** Host group apenas agrupa hosts para organização e permissões.\n- **E:** Proxy coleta dados em nome do servidor em redes remotas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0005",
  "campos": {
    "comentario": "**Gabarito: B.** Os três pilares da observabilidade são **logs** (registros de eventos), **métricas** (valores numéricos ao longo do tempo) e **traces** (o caminho de uma requisição pelos serviços).\n\n- **A:** É a tríade CID da segurança da informação.\n- **C:** São recursos de infraestrutura que podem virar métricas, não os pilares.\n- **D:** Latência, tráfego e erros são três dos quatro \"sinais de ouro\" do SRE (falta a saturação).\n- **E:** São componentes de arquitetura de ferramentas de monitoração, como o Zabbix."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0006",
  "campos": {
    "comentario": "**Gabarito: C.** O **SIP** (*Session Initiation Protocol*) é o protocolo de sinalização do IETF, em texto e parecido com o HTTP, com métodos como INVITE (inicia a chamada), ACK, BYE (encerra) e REGISTER.\n\n- **A:** H.323 também faz sinalização, mas é uma recomendação da ITU-T, com mensagens binárias.\n- **B:** RTP transporta a mídia (voz e vídeo), não sinaliza.\n- **D:** MGCP é protocolo de controle de gateways de mídia, no modelo mestre e escravo.\n- **E:** RTCP acompanha o RTP com estatísticas de qualidade (perda, jitter)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0007",
  "campos": {
    "comentario": "**Gabarito: C.** A classe **EF** (*Expedited Forwarding*, DSCP 46) oferece baixa latência, baixo jitter e baixa perda, e é a marcação padrão para voz.\n\n- **A:** Best Effort (DSCP 0) é o tráfego sem prioridade.\n- **B:** AF11 é uma classe de encaminhamento assegurado de baixa prioridade, usada para dados.\n- **D:** CS1 costuma marcar tráfego de prioridade inferior (*scavenger*).\n- **E:** AF41 é normalmente usada para vídeo interativo, não para voz."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0008",
  "campos": {
    "comentario": "**Gabarito: Certo.** O IGMP (*Internet Group Management Protocol*) funciona entre os hosts IPv4 e o roteador da rede local: o host avisa que quer entrar em um grupo multicast ou sair dele, e o roteador passa a encaminhar o tráfego desse grupo para o segmento. Entre roteadores, o roteamento multicast usa protocolos como o PIM. No IPv6, o papel do IGMP é do MLD."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0009",
  "campos": {
    "comentario": "**Gabarito: C.** A **VXLAN** encapsula quadros Ethernet (camada 2) em UDP (porta 4789), criando redes sobrepostas sobre uma rede IP. Seu identificador, o VNI, tem 24 bits: cerca de 16 milhões de segmentos.\n\n- **A:** A VLAN 802.1Q não é overlay e tem ID de 12 bits (4.094 VLANs utilizáveis).\n- **B:** MPLS comuta por rótulos de 20 bits, inseridos entre as camadas 2 e 3, sem UDP.\n- **D:** GRE encapsula diretamente sobre IP (protocolo 47), sem UDP nem identificador de 24 bits.\n- **E:** PPPoE encapsula PPP em Ethernet, usado em acesso de banda larga."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0010",
  "campos": {
    "comentario": "**Gabarito: C.** O MPM **event** deriva do worker (vários processos com várias threads) e acrescenta uma thread dedicada a escutar as conexões *keep-alive* ociosas, liberando as threads de trabalho para outras requisições.\n\n- **A:** O prefork usa um processo por conexão, sem threads.\n- **B:** O worker usa threads, mas cada conexão keep-alive prende uma thread enquanto fica aberta.\n- **D:** O winnt é o MPM do Windows: um processo com várias threads.\n- **E:** O itk é um MPM de terceiros, baseado no prefork, que executa cada host virtual com usuário próprio."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0011",
  "campos": {
    "comentario": "**Gabarito: B.** No IIS, cada **pool de aplicativos** (*application pool*) roda em processos de trabalho próprios (`w3wp.exe`), com identidade e reciclagem independentes. Uma falha ou comprometimento em um pool não afeta os demais.\n\n- **A:** VirtualHost é a diretiva do Apache para hospedar vários sites.\n- **C:** Binding associa o site a IP, porta e nome de host.\n- **D:** `.htaccess` é o arquivo de configuração por diretório do Apache; no IIS o equivalente é o `web.config`.\n- **E:** MPM é o módulo de multiprocessamento do Apache."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0012",
  "campos": {
    "comentario": "**Gabarito: Certo.** O WildFly (antigo JBoss AS) é o projeto comunitário de código aberto, com ciclos rápidos de lançamento. O JBoss EAP (*Enterprise Application Platform*) é o produto da Red Hat construído a partir dele, estabilizado e vendido com assinatura de suporte, correções e certificações. A relação é a mesma que existe entre Fedora e RHEL."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0013",
  "campos": {
    "comentario": "**Gabarito: B.** No modo **domain**, um *domain controller* guarda a configuração central e a distribui aos *host controllers* de cada máquina, que gerenciam as instâncias organizadas em *server groups*.\n\n- **A:** No standalone, cada instância é um processo independente, com configuração própria.\n- **C:** \"Cluster-only\" não é modo de operação; clustering é um recurso que pode ser usado em standalone ou em domain.\n- **D:** Embedded executa o servidor dentro de outro processo, usado em testes e ferramentas.\n- **E:** Bootable JAR empacota aplicação e servidor em um único JAR executável."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SERV-0014",
  "campos": {
    "comentario": "**Gabarito: B.** O Tomcat é um **contêiner de servlets** (contêiner web): implementa só parte das especificações Jakarta EE, como Servlet, JSP (Jakarta Pages), Expression Language e WebSocket. Não traz, por exemplo, EJB nem JMS.\n\n- **A:** Servidor Jakarta EE completo é o caso do WildFly e do JBoss EAP.\n- **C:** Não é banco de dados; apenas pode oferecer *pools* de conexão a bancos.\n- **D:** Não é balanceador de carga; costuma ficar atrás de um (Apache httpd, nginx, HAProxy).\n- **E:** Não tem relação com serviço de e-mail."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0001",
  "campos": {
    "comentario": "**Gabarito: D.** O sistema operacional é o conjunto de programas que gerencia os recursos do computador (processador, memória, dispositivos de E/S, arquivos) e serve de intermediário entre o hardware, os aplicativos e o usuário.\n\n- **A:** Criar gráficos e imagens é função de aplicativos (editores de imagem), não do sistema operacional.\n- **B:** O sistema operacional é software, não um dispositivo de hardware.\n- **C:** Interface para acessar a internet é o navegador, um aplicativo que roda sobre o sistema operacional."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0002",
  "campos": {
    "comentario": "**Gabarito: E.** As quatro condições de Coffman, que precisam ocorrer juntas para haver deadlock, são: exclusão mútua, posse e espera, **não** preempção e espera circular. A preempção de recursos pelo sistema operacional é o oposto de uma delas e, na verdade, é uma forma de prevenir ou resolver o deadlock.\n\n- **A:** Exclusão mútua: o recurso só pode ser usado por um processo de cada vez.\n- **B:** Posse e espera: o processo segura recursos enquanto aguarda outros.\n- **C:** Não preempção: o recurso só é liberado voluntariamente por quem o detém.\n- **D:** Espera circular: há uma cadeia fechada de processos, cada um esperando recurso do seguinte."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0003",
  "campos": {
    "comentario": "**Gabarito: C.** O PC (*Program Counter*, contador de programa) guarda o endereço da próxima instrução a ser buscada e é incrementado a cada busca.\n\n- **A:** O IR (registrador de instrução) guarda a instrução que está sendo decodificada e executada.\n- **B:** O MAR (registrador de endereço de memória) guarda o endereço que está sendo acessado na memória; na busca ele recebe o valor do PC, mas é de uso geral para qualquer acesso.\n- **D:** O MBR (registrador de dados de memória) guarda o dado lido ou a escrever na memória.\n- **E:** O ACC (acumulador) guarda operandos e resultados da unidade aritmética."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0004",
  "campos": {
    "comentario": "**Gabarito: B.** Pela localidade espacial, posições vizinhas à que acabou de ser acessada tendem a ser usadas em seguida (vetores, instruções em sequência). Por isso a cache traz um bloco inteiro de palavras a cada falta.\n\n- **A:** A cache usa SRAM, mais rápida e mais cara; DRAM é a tecnologia da memória principal.\n- **C:** É o contrário: quanto mais perto da CPU, menor, mais rápido e mais caro por bit.\n- **D:** Os registradores estão no topo da hierarquia, dentro da CPU, acima da L1.\n- **E:** No *write-through* toda escrita vai à cache e à memória principal ao mesmo tempo; quem adia a escrita é o *write-back*."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0005",
  "campos": {
    "comentario": "**Gabarito: B.** Com n bits de endereço há 2ⁿ endereços, e cada um identifica um byte: 2²⁴ = 16.777.216 bytes = 2⁴ × 2²⁰ = **16 MiB**.\n\n- **A:** 24 MB confunde o número de bits com a capacidade.\n- **C:** 4 GiB é 2³², barramento de 32 bits.\n- **D:** 64 KiB é 2¹⁶, barramento de 16 bits.\n- **E:** 1 MiB é 2²⁰, barramento de 20 bits."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0006",
  "campos": {
    "comentario": "**Gabarito: C.** No DMA (acesso direto à memória), a CPU só informa ao controlador o endereço e a quantidade de dados; o controlador faz a transferência do bloco direto com a memória e gera uma única interrupção ao final.\n\n- **A:** Na E/S programada, a CPU comanda a transferência e fica presa testando o estado do dispositivo.\n- **B:** *Polling* é essa consulta repetida ao dispositivo (espera ocupada).\n- **D:** E/S mapeada em memória é uma forma de endereçar os registradores dos dispositivos, não uma técnica de transferência.\n- **E:** Interrupção de software (*trap*) é gerada por instrução do programa, como nas chamadas de sistema."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0007",
  "campos": {
    "comentario": "**Gabarito: C.** O RAID 5 distribui a paridade entre os discos e consome o equivalente a um disco: capacidade útil = (n - 1) × tamanho = 3 × 1 TB = 3 TB, tolerando a falha de um disco qualquer.\n\n- **A:** RAID 0 (distribuição sem redundância) daria 4 TB, mas não tolera falha alguma.\n- **B:** RAID 1 (espelhamento) duplica os dados; nunca aproveitaria 3 dos 4 TB.\n- **D:** RAID 6 usa dupla paridade: (n - 2) = 2 TB úteis, tolerando duas falhas.\n- **E:** RAID 10 (espelhamento mais distribuição) aproveita metade: 2 TB."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0008",
  "campos": {
    "comentario": "**Gabarito: D.** Um processo bloqueado, quando o evento que esperava ocorre (fim de E/S, por exemplo), vai para a fila de **prontos**. Só o escalonador escolhe quem passa de pronto a executando; não existe passagem direta de bloqueado para executando.\n\n- **A:** Pronto → executando: o escalonador despacha o processo.\n- **B:** Executando → bloqueado: o processo pede E/S ou espera um evento.\n- **C:** Bloqueado → pronto: o evento esperado aconteceu.\n- **E:** Executando → pronto: preempção (fim do quantum ou chegada de processo mais prioritário)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0009",
  "campos": {
    "comentario": "**Gabarito: C.** As threads de um processo compartilham o espaço de endereçamento: código, dados globais, *heap* e recursos como arquivos abertos. Cada thread tem só o que define seu fluxo de execução: contador de programa, registradores e pilha.\n\n- **A e B:** Pilha, contador de programa e registradores são individuais de cada thread.\n- **D:** Registradores não são compartilhados; fazem parte do contexto de cada thread.\n- **E:** Espaço de endereçamento próprio é característica de processos, não de threads do mesmo processo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0010",
  "campos": {
    "comentario": "**Gabarito: A.** No SJF (menor job primeiro) a ordem é P2 (4), P4 (5), P1 (8), P3 (9). Cada processo espera a soma dos bursts anteriores:\n\n- P2: 0\n- P4: 4\n- P1: 4 + 5 = 9\n- P3: 9 + 8 = 17\n\nMédia = (0 + 4 + 9 + 17) / 4 = 30 / 4 = **7,5**. Pelo FCFS, na ordem P1, P2, P3, P4, as esperas seriam 0, 8, 12 e 21, com média 10,25 (alternativa E). O SJF dá a menor espera média possível."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0011",
  "campos": {
    "comentario": "**Gabarito: D.** Se todo processo pede recursos em ordem crescente de numeração, nenhum processo que detém o recurso de número maior pode esperar por um de número menor: o ciclo de espera não se fecha.\n\n- **A:** Eliminar a exclusão mútua exigiria tornar os recursos compartilháveis, o que nem sempre é possível.\n- **B:** Posse e espera é eliminada exigindo que o processo peça todos os recursos de uma vez.\n- **C:** Não preempção é eliminada permitindo tomar recursos de um processo.\n- **E:** Inanição (*starvation*) não é condição de deadlock."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0012",
  "campos": {
    "comentario": "**Gabarito: B.** Se o quantum for maior que qualquer burst, nenhum processo é interrompido: cada um roda até o fim, na ordem de chegada, que é o comportamento do FCFS.\n\n- **A:** O Round-Robin é preemptivo: ao fim do quantum o processo volta para o fim da fila.\n- **C:** Quem minimiza o tempo médio de espera é o SJF; o RR privilegia o tempo de resposta.\n- **D:** Cada preempção exige troca de contexto (por isso quantum muito pequeno gera sobrecarga).\n- **E:** É o algoritmo típico de sistemas de tempo compartilhado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0013",
  "campos": {
    "comentario": "**Gabarito: B.** Na paginação, a memória é dividida em quadros de tamanho fixo; a última página do processo raramente fica cheia, e a sobra **dentro** dela é fragmentação interna. Na segmentação, os segmentos têm tamanho variável e, com alocações e liberações, surgem buracos **entre** eles: fragmentação externa.\n\n- **A:** Ordem invertida.\n- **C:** A segmentação pura aloca o tamanho exato do segmento, sem sobra interna.\n- **D:** A paginação não tem fragmentação externa: qualquer quadro livre serve.\n- **E:** A paginação tem fragmentação interna, e a da segmentação é externa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0014",
  "campos": {
    "comentario": "**Gabarito: A.** O deslocamento precisa endereçar cada byte da página: 4 KB = 2¹² bytes, logo **12 bits**. Os bits restantes do endereço identificam a página: 32 - 12 = 20 bits, ou seja, **2²⁰** páginas (cerca de 1 milhão).\n\n- **B:** Valores trocados entre deslocamento e número de página.\n- **C:** 10 bits de deslocamento corresponderiam a páginas de 1 KB.\n- **D:** 2³² é o total de bytes endereçáveis, não de páginas.\n- **E:** 4 bits de deslocamento seriam páginas de 16 bytes."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0015",
  "campos": {
    "comentario": "**Gabarito: B.** Sequência 1, 2, 3, 1, 4, 2, 5 com 3 quadros:\n\n- **FIFO** (sai a página carregada há mais tempo): 1, 2 e 3 são faltas; 1 é acerto; 4 é falta (sai 1); 2 é acerto; 5 é falta (sai 2). Total: **5**.\n- **LRU** (sai a página usada há mais tempo): 1, 2 e 3 são faltas; 1 é acerto; 4 é falta (sai 2, pois 1 acabou de ser usada); 2 é falta (sai 3); 5 é falta (sai 1). Total: **6**.\n\nA diferença está no acerto da página 1, que no LRU a \"renova\" e faz a página 2 ser a vítima. Nesta sequência o LRU perde do FIFO, o que pode acontecer em casos particulares."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0016",
  "campos": {
    "comentario": "**Gabarito: B.** Anomalia de Belady: em certos algoritmos, tipicamente o FIFO, dar mais quadros a um processo pode aumentar o número de faltas de página. Algoritmos de pilha, como LRU e ótimo, não sofrem disso.\n\n- **A:** *Thrashing* é a paginação excessiva, quando o sistema gasta mais tempo trocando páginas do que executando.\n- **C:** Fragmentação externa são buracos de memória livre entre áreas alocadas.\n- **D:** Localidade de referência é a tendência de acessar posições próximas ou recentes.\n- **E:** *Working set* é o conjunto de páginas que o processo usou em uma janela recente de tempo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0017",
  "campos": {
    "comentario": "**Gabarito: C.** É a afirmativa incorreta: o algoritmo ótimo substitui a página que demorará mais a ser usada, o que exige conhecer as referências futuras. Não é implementável na prática; serve apenas de referência teórica para comparar os outros algoritmos.\n\n- **A:** Correta: só parte do programa precisa estar na memória física a cada momento.\n- **B:** Correta: a falta de página (*page fault*) gera uma exceção, e o sistema operacional carrega a página do disco.\n- **D:** Correta: a TLB é uma cache de traduções de página para quadro, que evita consultar a tabela de páginas.\n- **E:** Correta: é a definição de *thrashing*."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0018",
  "campos": {
    "comentario": "**Gabarito: C.** O FAT32 limita o tamanho de cada arquivo a 4 GB (menos 1 byte), por mais espaço livre que haja no volume. A solução é formatar o pendrive em exFAT ou NTFS.\n\n- **A:** O NTFS aceita arquivos muito maiores que 6 GB.\n- **B:** O exFAT foi criado justamente para mídias removíveis sem o limite de 4 GB.\n- **D:** O ext4 (Linux) também aceita arquivos enormes.\n- **E:** O ReFS é o sistema de arquivos da Microsoft para grandes volumes em servidores, sem esse limite."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0019",
  "campos": {
    "comentario": "**Gabarito: B.** A MFT (*Master File Table*) tem ao menos um registro para cada arquivo e diretório do volume NTFS, com seus atributos; arquivos bem pequenos cabem no próprio registro (dados residentes).\n\n- **A:** A FAT é a tabela de alocação dos sistemas FAT16/FAT32/exFAT.\n- **C:** A tabela de i-nodes é a estrutura equivalente em sistemas Unix/Linux (ext4).\n- **D:** O superbloco guarda os metadados gerais de um sistema de arquivos Unix/Linux.\n- **E:** A GPT é um esquema de particionamento do disco, não uma estrutura do sistema de arquivos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0020",
  "campos": {
    "comentario": "**Gabarito: B.** O *hard link* é outro nome para o mesmo i-node: os dados só são liberados quando o último nome é removido, então `rel2` continua funcionando. O link simbólico guarda apenas o caminho `relatorio.txt`; removido esse nome, `rel3` aponta para algo que não existe (link quebrado).\n\n- **A:** Só o simbólico deixa de funcionar.\n- **C:** Papéis invertidos.\n- **D:** O simbólico depende do nome original.\n- **E:** A remoção é permitida: `rm` apenas apaga um nome e decrementa o contador de links do i-node."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0021",
  "campos": {
    "comentario": "**Gabarito: C.** O *journaling* registra em um diário (*journal*) as alterações antes de aplicá-las. Após uma queda de energia ou travamento, basta reprocessar o diário para deixar o sistema de arquivos consistente, sem verificar o disco inteiro (`fsck`, `chkdsk`).\n\n- **A:** Criptografia é outra função (EFS e BitLocker no Windows, LUKS no Linux).\n- **B:** Compactação é recurso opcional e independente.\n- **D:** O diário não guarda cópias dos arquivos; não substitui backup.\n- **E:** Não trata de fragmentação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0022",
  "campos": {
    "comentario": "**Gabarito: D.** O nome do arquivo fica na entrada de diretório, que associa o nome ao número do i-node. É por isso que um mesmo i-node pode ter vários nomes (*hard links*).\n\n- **A, B, C e E:** Tudo isso está no i-node, que guarda os metadados do arquivo: tipo e permissões, UID e GID, tamanho, datas, contador de links e os ponteiros para os blocos de dados."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0023",
  "campos": {
    "comentario": "**Gabarito: C.** A floresta reúne uma ou mais árvores de domínios com esquema, partição de configuração e catálogo global comuns; é o limite de segurança do Active Directory.\n\n- **A:** Site representa a topologia física (sub-redes IP bem conectadas) e orienta a replicação e o logon.\n- **B:** Unidade organizacional (UO) é um contêiner dentro de um domínio, usado para delegar administração e aplicar GPOs.\n- **D:** Domínio raiz é apenas o primeiro domínio criado na floresta.\n- **E:** Partição é uma divisão do banco do diretório para fins de replicação (esquema, configuração, domínio)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0024",
  "campos": {
    "comentario": "**Gabarito: B.** A ordem é **LSDOU**: Local, Site, Domínio, Unidade Organizacional (das UOs mais externas para as mais internas). Em caso de conflito vale a última aplicada, isto é, a da UO mais próxima do objeto, salvo quando uma GPO é marcada como imposta (*Enforced*).\n\n- **A, C, D e E:** Todas alteram a sequência. A diretiva local é sempre a primeira (e a mais fraca), e as de UO são as últimas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0025",
  "campos": {
    "comentario": "**Gabarito: C.** A reserva vincula um endereço IP do escopo ao endereço MAC do dispositivo: toda vez que a impressora pedir endereço, receberá o mesmo.\n\n- **A:** Exclusão retira endereços do escopo para que o servidor **não** os distribua (útil para IPs configurados manualmente).\n- **B:** Superescopo agrupa vários escopos para administrar várias sub-redes lógicas na mesma rede física.\n- **D:** A opção 006 informa os servidores DNS aos clientes.\n- **E:** O agente de retransmissão (*relay agent*) encaminha as requisições DHCP entre sub-redes."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0026",
  "campos": {
    "comentario": "**Gabarito: B.** Das cinco funções FSMO, duas são únicas na floresta: **Schema Master** (alterações no esquema) e **Domain Naming Master** (inclusão e remoção de domínios). As outras três existem uma vez em cada domínio: RID Master, PDC Emulator e Infrastructure Master.\n\n- **A:** As duas são funções de domínio.\n- **C:** Também são as duas de domínio.\n- **D:** PDC Emulator é de domínio.\n- **E:** Infrastructure Master é de domínio."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0027",
  "campos": {
    "comentario": "**Gabarito: C.** No acesso pela rede, aplicam-se as duas permissões (de compartilhamento e NTFS) e vale a **mais restritiva**: entre Leitura e Controle Total, fica Leitura.\n\n- **A:** Controle Total só valeria no acesso local (logado na própria máquina), em que a permissão de compartilhamento não se aplica.\n- **B e E:** Modificar e Gravação excedem o que o compartilhamento permite.\n- **D:** O usuário tem acesso: ambas as permissões concedem pelo menos leitura."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0028",
  "campos": {
    "comentario": "**Gabarito: A.** Cada dígito octal soma r = 4, w = 2 e x = 1, na ordem dono, grupo e outros: 6 = rw-, 4 = r--, 0 = ---. Resultado: `rw-r-----`.\n\n- **B:** `rwxr-----` é 740.\n- **C:** `rw-rw----` é 660.\n- **D:** `r--rw----` é 460 (dígitos do dono e do grupo trocados).\n- **E:** `rw-r--r--` é 644."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0029",
  "campos": {
    "comentario": "**Gabarito: B.** `/etc` guarda os arquivos de configuração do sistema, e `/var/log` os registros (logs); `/var` é o lugar dos dados variáveis.\n\n- **A:** `/conf` e `/log` não fazem parte do FHS.\n- **C:** `/usr` guarda programas e bibliotecas; `/tmp`, arquivos temporários.\n- **D:** `/sys` e `/proc` são sistemas de arquivos virtuais com informações do kernel, dos dispositivos e dos processos.\n- **E:** `/opt` recebe pacotes de software adicionais; `/srv`, dados de serviços oferecidos pelo sistema."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0030",
  "campos": {
    "comentario": "**Gabarito: B.** O pipe (`|`) liga a saída de um comando à entrada do seguinte: `ps aux` lista os processos, `grep java` deixa passar só as linhas que contêm \"java\" e `wc -l` conta essas linhas. Em geral a contagem inclui a linha do próprio `grep`.\n\n- **A:** Encerrar processos é com `kill`, `pkill` ou `killall`.\n- **C:** O resultado é apenas um número, não as colunas de uso de memória.\n- **D:** Nenhum arquivo é criado; para isso seria o redirecionamento `>`.\n- **E:** Os comandos são encadeados; independentes seriam se separados por `;`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0031",
  "campos": {
    "comentario": "**Gabarito: C.** Com o *sticky bit* em um diretório, só o dono do arquivo, o dono do diretório ou o root podem apagar ou renomear os arquivos dele, mesmo que todos tenham permissão de escrita. É o caso do `/tmp`: `drwxrwxrwt` (modo 1777).\n\n- **A:** SUID faz o executável rodar com as permissões do dono do arquivo.\n- **B:** SGID faz o executável rodar com o grupo do arquivo; em diretório, os arquivos criados herdam o grupo.\n- **D:** `umask` é a máscara que define as permissões padrão de novos arquivos.\n- **E:** `noexec` é opção de montagem que impede a execução de binários no sistema de arquivos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0032",
  "campos": {
    "comentario": "**Gabarito: A.** A umask retira permissões do valor base, que é 777 para diretórios: 777 com máscara 027 resulta em **750** (`rwxr-x---`): nada sai do dono, o grupo perde escrita e os outros perdem tudo.\n\n- **B:** 640 é o resultado para **arquivos**, cuja base é 666.\n- **C:** 755 é o resultado da umask 022.\n- **D:** 700 é o resultado da umask 077.\n- **E:** 027 é a própria máscara, não a permissão resultante."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0033",
  "campos": {
    "comentario": "**Gabarito: B.** Hipervisor tipo 1 (*bare-metal*) roda diretamente sobre o hardware, sem sistema operacional hospedeiro por baixo: VMware ESXi, Microsoft Hyper-V, Xen.\n\n- **A:** VirtualBox e VMware Workstation são tipo 2: rodam como aplicativos sobre um sistema operacional hospedeiro.\n- **C:** Docker é plataforma de contêineres e Kubernetes é orquestrador; não são hipervisores.\n- **D:** Parallels Desktop é tipo 2 (macOS), e o QEMU sozinho é emulador que roda sobre um sistema hospedeiro.\n- **E:** VMware Fusion e VirtualBox são tipo 2."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-SO-0034",
  "campos": {
    "comentario": "**Gabarito: B.** Na paravirtualização, o kernel do sistema convidado é alterado: ele \"sabe\" que é virtualizado e, em vez de executar instruções privilegiadas, pede os serviços ao hipervisor por *hypercalls*. O exemplo clássico é o Xen.\n\n- **A:** Convidado sem modificação é a virtualização total (completa).\n- **C:** Emular todas as instruções por software é emulação, bem mais lenta.\n- **D:** O hipervisor existe e é quem atende às *hypercalls*.\n- **E:** Contêineres compartilham o kernel do hospedeiro; são outra técnica."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0001",
  "campos": {
    "comentario": "**Gabarito: C.** `document.getElementById('demo')` procura o elemento cujo atributo `id` vale `demo`. Só `<p id=\"demo\">` atende; o `innerHTML` desse parágrafo passa a mostrar a data e hora correntes devolvidas por `Date()`.\n\n- **A:** `\"demo\"` solto na tag não define atributo nenhum; o HTML é inválido.\n- **B:** Por classe seria `getElementsByClassName('demo')` ou `querySelector('.demo')`.\n- **D:** `js` não é atributo HTML e não é consultado por `getElementById`.\n- **E:** `onclick` é um tratador de evento (código executado no clique), não um identificador."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0002",
  "campos": {
    "comentario": "**Gabarito: B.** Ajax (*Asynchronous JavaScript and XML*) permite que o JavaScript da página troque dados com o servidor em segundo plano (com `XMLHttpRequest` ou `fetch`) e atualize apenas parte da página, sem recarregá-la inteira.\n\n- **A:** Criptografia em trânsito é papel do TLS (HTTPS).\n- **C:** Ajax não é mecanismo de segurança; proteção contra ataques envolve validação, WAF e boas práticas de codificação.\n- **D:** Login em duas etapas é autenticação multifator (MFA).\n- **E:** Ajax não controla aplicativos multiplataforma; é só uma técnica de comunicação assíncrona no navegador."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0003",
  "campos": {
    "comentario": "**Gabarito: A.** GET, POST e PUT são métodos definidos no HTTP. A lista completa do padrão inclui ainda HEAD, DELETE, CONNECT, OPTIONS, TRACE e PATCH.\n\n- **B:** SEND não é método HTTP.\n- **C:** READ e WRITE não existem no HTTP (ler é GET; gravar é POST ou PUT).\n- **D:** SET e WRITE não existem.\n- **E:** Nenhum dos três (SEND, INPUT, OUTPUT) é método HTTP."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0004",
  "campos": {
    "comentario": "**Gabarito: D.** A estrutura básica do Ajax com `XMLHttpRequest` é: criar o objeto, definir o tratador `onload` (o que fazer quando a resposta chegar), chamar `open(método, url)` para configurar a requisição e `send()` para enviá-la.\n\n- **A:** A requisição até é enviada, mas não há `onload`: a resposta nunca é tratada, logo a estrutura está incompleta.\n- **B:** A classe `HttpRequest` não existe; o nome correto é `XMLHttpRequest`.\n- **C:** Troca os papéis: `open` é método (não se atribui função a ele), os parâmetros vão em `open` e não em `send`, e `onload` é um tratador chamado pelo navegador.\n- **E:** `XMLRequest` não existe e `onload` não recebe método e URL."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0005",
  "campos": {
    "comentario": "**Gabarito: D.** O asterisco `*` é o seletor universal do CSS: casa com qualquer elemento. Exemplo: `* { box-sizing: border-box; }`.\n\n- **A:** `#` seleciona por id (`#menu`).\n- **B:** `%` não é seletor; é unidade de medida relativa.\n- **C:** `&` não é seletor do CSS clássico; é o seletor de aninhamento (referência ao pai) em Sass e no CSS Nesting.\n- **E:** `@` inicia regras especiais (*at-rules*), como `@media`, `@import` e `@font-face`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0006",
  "campos": {
    "comentario": "**Gabarito: B.** Um elemento XML pode conter atributos (na tag de abertura), texto e outros elementos (filhos), ou ainda uma mistura deles, e também pode ser vazio.\n\n- **A:** \"Formato\" não é componente de um elemento XML; a apresentação fica por conta de CSS ou XSLT.\n- **C:** XML não tem arrays; listas são representadas pela repetição de elementos. Array é estrutura do JSON.\n- **D:** Inclui \"formato\" e omite os atributos.\n- **E:** Inclui arrays e omite os atributos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0007",
  "campos": {
    "comentario": "**Gabarito: D.** No jQuery os seletores seguem o CSS: `#x1` é o elemento de `id=\"x1\"`. `.click(função)` registra o tratador do clique, e `$(\"#x2\").html(...)` substitui o conteúdo HTML do elemento de `id=\"x2\"`.\n\n- **A:** Seleção por tag seria `$(\"x1\")` e `$(\"x2\")`, sem prefixo.\n- **B:** Seleção por classe seria `$(\".x1\")`.\n- **C:** A origem está certa, mas o destino é por id (`#x2`), não por classe (`.x2`).\n- **E:** A origem está certa, mas o destino não é por tag."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0008",
  "campos": {
    "comentario": "**Gabarito: C.** O Ajax não é uma tecnologia nova, e sim a combinação de recursos que já existem no navegador (lado cliente): JavaScript, o objeto `XMLHttpRequest` (ou `fetch`), o DOM, HTML/CSS e XML ou JSON como formato dos dados.\n\n- **A:** As tecnologias do Ajax são do lado cliente; o servidor pode usar qualquer linguagem, C# inclusive, mas isso não faz parte do Ajax.\n- **B:** Java não faz parte do Ajax (Java não é JavaScript), e não há \"tecnologias híbridas\" na definição.\n- **D:** HTML é interpretado no navegador, não é tecnologia do lado servidor."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0009",
  "campos": {
    "comentario": "**Gabarito: B.** A validação pode ser feita no cliente (atributos HTML5 como `required`, `pattern`, `type=\"email\"`, ou JavaScript), o que dá resposta rápida ao usuário, e deve ser repetida no servidor, porque a do cliente pode ser contornada.\n\n- **A:** O formulário convive com qualquer outro conteúdo da página e não é o único meio de falar com o servidor (há links e Ajax).\n- **C:** É preciso indicar para onde e como enviar: atributos `action` e `method` do `<form>`, mais um botão de envio ou script.\n- **D:** A tag `sendtoserver` não existe em HTML."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0010",
  "campos": {
    "comentario": "**Gabarito: C.** Estão corretas I e IV.\n\n- **I, correta:** `@font-face` declara uma fonte e o endereço do arquivo (`src: url(...)`); o navegador a baixa quando precisa.\n- **II, errada:** a regra não descontinua nenhuma família de fontes; as fontes do sistema seguem disponíveis.\n- **III, errada:** `font-family` continua valendo, inclusive com a lista de fontes alternativas (*fallback*), como em `font-family: MinhaFonte, Arial, sans-serif`.\n- **IV, correta:** além de `url(...)`, o `src` aceita `local(...)`, que usa a fonte já instalada no computador do usuário, se existir. (A regra não \"cria\" fontes, mas a banca aceitou a redação.)"
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0011",
  "campos": {
    "comentario": "**Gabarito: A.** A primeira definição (especialistas avaliando com base em diretrizes e heurísticas) é a **inspeção de usabilidade**; a segunda (usuários interagindo com o sistema em ambiente controlado) é o **teste de usabilidade**. A alternativa A é a única que reúne os dois métodos, ainda que em ordem inversa à das definições (o enunciado não diz \"respectivamente\").\n\n- **B:** Pensar em voz alta é um protocolo usado dentro do teste com usuários, não a avaliação por especialistas.\n- **C:** Análise de tarefas decompõe o trabalho do usuário em passos; não é interação em ambiente controlado.\n- **D:** Questionários de satisfação colhem a opinião dos usuários após o uso; não correspondem a nenhuma das definições."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0012",
  "campos": {
    "comentario": "**Gabarito: A.** Estão corretas I, III e IV.\n\n- **I, correta:** GET é seguro (não altera estado) e idempotente.\n- **II, errada:** POST **não** é idempotente; repetir a requisição pode criar dois recursos (dois Pix, dois pedidos).\n- **III, correta:** PUT substitui o recurso pelo conteúdo enviado; repetir a mesma requisição deixa o servidor no mesmo estado.\n- **IV, correta:** 201 Created indica criação de recurso, em geral com o cabeçalho `Location`.\n\nIdempotente é o método cujo efeito no servidor é o mesmo com uma ou com várias requisições iguais: GET, HEAD, OPTIONS, PUT e DELETE."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0013",
  "campos": {
    "comentario": "**Gabarito: D.** A tela de confirmação antes de uma ação de difícil reversão é o exemplo típico da heurística de **prevenção de erros**: melhor que uma boa mensagem de erro é um projeto que evita que o problema aconteça.\n\n- **A:** Flexibilidade e eficiência de uso trata de atalhos e personalização para usuários experientes.\n- **B:** Estética e design minimalista pede que só se mostre informação relevante.\n- **C:** Reconhecimento em vez de memorização pede opções visíveis, para o usuário não ter de lembrar informações de uma tela para outra.\n- **E:** Ajuda e documentação trata de material de apoio fácil de achar."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0014",
  "campos": {
    "comentario": "**Gabarito: D.** O `useEffect` roda **depois** que a renderização é aplicada à tela. Com o array de dependências `[contaId]`, ele roda após a primeira renderização (montagem) e de novo apenas quando `contaId` muda.\n\n- **A:** Efeitos nunca rodam antes da renderização; e o efeito se repete se `contaId` mudar.\n- **B:** Isso valeria sem array de dependências. Aqui, `setSaldo` provoca nova renderização, mas `contaId` não mudou, então o efeito não roda de novo.\n- **C:** Na desmontagem roda só a função de limpeza devolvida pelo efeito, que aqui nem existe.\n- **E:** A função passada ao `useEffect` não pode ser `async`, mas pode fazer chamadas assíncronas dentro dela, como este `fetch` com `.then`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0015",
  "campos": {
    "comentario": "**Gabarito: E.** Estão corretas I, II e IV.\n\n- **I, correta:** todo JavaScript válido é TypeScript válido; os tipos são checados na compilação e apagados no JavaScript gerado.\n- **II, correta:** `[(ngModel)]` (a \"banana na caixa\") combina property binding `[]` e event binding `()`.\n- **III, errada:** `*ngIf` e `*ngFor` são diretivas **estruturais**: adicionam e removem elementos do DOM. Diretivas de atributo (como `ngClass` e `ngStyle`) é que alteram aparência ou comportamento.\n- **IV, correta:** `providedIn: 'root'` registra o serviço no injetor raiz, como singleton da aplicação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0016",
  "campos": {
    "comentario": "**Gabarito: B.** **403 Forbidden**: o servidor sabe quem é o cliente (está autenticado), mas ele não tem permissão para a operação. É falha de autorização.\n\n- **A:** 401 Unauthorized indica falta de autenticação ou credenciais inválidas.\n- **C:** 404 Not Found indica recurso inexistente (às vezes usado para esconder a existência do recurso, mas não é o mais adequado aqui).\n- **D:** 500 é erro interno do servidor, e aqui o servidor funcionou corretamente.\n- **E:** 302 é redirecionamento temporário."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0017",
  "campos": {
    "comentario": "**Gabarito: B.** O **WSDL** (*Web Services Description Language*) é o contrato do serviço SOAP, em XML: descreve as operações, as mensagens e os tipos de dados, o protocolo de ligação e o endereço do serviço.\n\n- **A:** UDDI é o registro (catálogo) para publicar e descobrir serviços.\n- **C:** XSLT é linguagem de transformação de documentos XML.\n- **D:** JSON Schema descreve a estrutura de documentos JSON, fora do mundo SOAP.\n- **E:** O Envelope é o elemento raiz de cada mensagem SOAP (contém Header e Body), não a descrição do serviço."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0018",
  "campos": {
    "comentario": "**Gabarito: B.** **201 Created**: a requisição teve sucesso e um novo recurso foi criado; é a resposta típica de um POST de criação, com o cabeçalho `Location` apontando para o recurso.\n\n- **A:** 200 OK é sucesso genérico.\n- **C:** 204 No Content é sucesso sem corpo na resposta (comum em DELETE).\n- **D:** 301 Moved Permanently é redirecionamento permanente.\n- **E:** 304 Not Modified diz que a cópia em cache do cliente continua válida."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0019",
  "campos": {
    "comentario": "**Gabarito: Errado.** O POST não criptografa nada: apenas envia os dados no corpo da requisição, em vez de na URL como o GET. Em HTTP puro, o corpo trafega em texto claro e pode ser lido por quem interceptar o tráfego. Só o TLS (HTTPS) cifra a comunicação. A vantagem do POST é não deixar os dados expostos na URL, no histórico do navegador e nos logs."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0020",
  "campos": {
    "comentario": "**Gabarito: C.** Método **seguro** é o que não altera o estado do servidor (só leitura). **Idempotente** é aquele em que repetir a requisição produz o mesmo estado final. PUT e DELETE alteram estado (não seguros), mas repetir não muda o resultado (idempotentes).\n\n- **A:** GET e HEAD são seguros (e idempotentes).\n- **B:** POST e PATCH não são seguros nem idempotentes.\n- **D:** OPTIONS e TRACE são seguros.\n- **E:** PUT atende, mas POST não é idempotente."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0022",
  "campos": {
    "comentario": "**Gabarito: B.** Um cookie com **HttpOnly** não pode ser lido por JavaScript (`document.cookie`); assim, um script injetado por XSS não consegue roubar o cookie de sessão.\n\n- **A:** `Secure` faz o cookie ser enviado apenas em conexões HTTPS.\n- **C:** `SameSite` controla o envio do cookie em requisições vindas de outros sites; mitiga CSRF.\n- **D:** `Domain` define para quais hosts o cookie é enviado.\n- **E:** `Max-Age` define o tempo de vida do cookie, em segundos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0023",
  "campos": {
    "comentario": "**Gabarito: D.** A origem é o trio **esquema + host + porta**. `https://app.banco.com.br/conta?x=1` mantém `https`, `app.banco.com.br` e a porta 443 implícita; caminho e query string não fazem parte da origem.\n\n- **A:** Muda o esquema (`http`), e com ele a porta padrão (80).\n- **B:** Muda o host (`api` em vez de `app`); subdomínio diferente é outra origem.\n- **C:** Muda a porta (8443 em vez de 443).\n- **E:** Muda o host (`banco.com.br` não é igual a `app.banco.com.br`)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0024",
  "campos": {
    "comentario": "**Gabarito: B.** Para enviar arquivos, o formulário precisa de `method=\"post\"` (o conteúdo vai no corpo da requisição) e `enctype=\"multipart/form-data\"`, que divide o corpo em partes, uma por campo, e transporta o conteúdo binário do arquivo.\n\n- **A:** Com GET os dados vão na URL; só o nome do arquivo seria enviado. `text/plain` não transporta arquivos.\n- **C:** Formulários HTML só aceitam `get` e `post` (e `dialog`); `put` não é valor válido.\n- **D:** `multiple` apenas permite selecionar vários arquivos no `<input>`; não define a codificação do envio.\n- **E:** `application/json` não é um `enctype` válido de formulário HTML."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0025",
  "campos": {
    "comentario": "**Gabarito: Certo.** Campo `disabled` fica desabilitado: não recebe foco, não pode ser editado e **não** entra nos dados enviados. Campo `readonly` só não pode ser editado pelo usuário: continua recebendo foco e seu valor **é** enviado normalmente na submissão."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0026",
  "campos": {
    "comentario": "**Gabarito: C.** `<article>` representa um conteúdo completo e autocontido, que faria sentido sozinho se fosse distribuído ou reutilizado: notícia, postagem de blog, comentário.\n\n- **A:** `<section>` é um agrupamento temático de conteúdo, em geral com título, que faz parte de algo maior.\n- **B:** `<aside>` é conteúdo tangencial ao principal, como uma barra lateral.\n- **D:** `<div>` é contêiner genérico, sem significado semântico.\n- **E:** `<main>` marca o conteúdo principal da página, único por documento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0027",
  "campos": {
    "comentario": "**Gabarito: B.** O HTML5 acrescentou os tipos `email`, `url`, `tel`, `search`, `number`, `range`, `color`, `date`, `time`, `datetime-local`, `month` e `week`, com validação e controles nativos.\n\n- **A:** `text`, `password` e `hidden` já existiam no HTML 4.\n- **C:** `checkbox`, `radio` e `file` já existiam.\n- **D:** `submit`, `reset` e `image` já existiam.\n- **E:** Só `number` é do HTML5; `button` e `text` são antigos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0028",
  "campos": {
    "comentario": "**Gabarito: B.** Com `defer`, o script é baixado em paralelo com a análise do HTML e executado só depois que o documento foi todo analisado, na ordem em que os scripts aparecem na página.\n\n- **A:** Com `async` o download também é paralelo, mas o script executa assim que chega, interrompendo a análise e sem garantia de ordem.\n- **C:** `lazy` não é atributo de `<script>` (existe `loading=\"lazy\"` para imagens e iframes).\n- **D:** Scripts `type=\"module\"` são diferidos por padrão, mas o atributo que define esse comportamento, e que a questão pede, é `defer`.\n- **E:** `nomodule` marca um script alternativo para navegadores sem suporte a módulos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0029",
  "campos": {
    "comentario": "**Gabarito: D.** Com `content-box` (o padrão), `width` mede só o conteúdo; padding e borda são somados por fora. Largura visível = 300 + 2 × 20 (padding) + 2 × 2 (borda) = **344px**. A margem fica fora da borda e não entra.\n\nDe onde vêm os distratores: 300 seria a largura com `box-sizing: border-box`; 322 soma padding e borda de um lado só; 340 esquece a borda; 364 inclui indevidamente as margens (344 + 20), que é o espaço total ocupado no layout."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0030",
  "campos": {
    "comentario": "**Gabarito: Certo.** A especificidade é comparada por colunas (IDs, classes, elementos), da esquerda para a direita. `#rodape a` vale (1,0,1) e `.menu .item .link a` vale (0,3,1). A coluna dos IDs decide primeiro: um ID vence qualquer quantidade de classes, pois não há \"vai um\" entre colunas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0031",
  "campos": {
    "comentario": "**Gabarito: C.** `justify-content` distribui os itens ao longo do **eixo principal**, que com `flex-direction: row` é o horizontal (`flex-start`, `center`, `space-between` etc.).\n\n- **A:** `align-items` alinha os itens no eixo transversal (aqui, o vertical).\n- **B:** `align-content` distribui as **linhas** no eixo transversal, e só tem efeito quando há quebra de linha.\n- **D:** `flex-wrap` define se os itens quebram para outra linha.\n- **E:** `align-self` sobrescreve o `align-items` para um item específico."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0032",
  "campos": {
    "comentario": "**Gabarito: C.** `@font-face` define uma família de fonte e indica onde está o arquivo (`src: url(...)`); o navegador baixa a fonte e a usa mesmo que ela não esteja instalada no computador do usuário.\n\n- **A:** `@import` importa outra folha de estilos.\n- **B:** `@media` aplica estilos conforme características do dispositivo (media queries).\n- **D:** `@keyframes` define as etapas de uma animação.\n- **E:** `@supports` aplica estilos só se o navegador suportar determinada propriedade."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0033",
  "campos": {
    "comentario": "**Gabarito: B.** O combinador `>` seleciona apenas filhos diretos: `ul.menu > li` pega os `<li>` imediatamente dentro de `<ul class=\"menu\">`, e não os de listas aninhadas.\n\n- **A:** O espaço é o combinador de descendente: pega `<li>` em qualquer nível, inclusive de sublistas.\n- **C:** `+` seleciona o irmão imediatamente seguinte ao `ul.menu`.\n- **D:** `~` seleciona os irmãos seguintes ao `ul.menu`.\n- **E:** O espaço entre `ul` e `.menu` muda o sentido: procura `<li>` dentro de um elemento de classe `menu` que esteja dentro de um `<ul>`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0034",
  "campos": {
    "comentario": "**Gabarito: C.** Margens verticais adjacentes de blocos em fluxo normal **colapsam**: em vez de se somarem, prevalece a maior. Entre 25px e 40px, o espaço é de 40px. (Margens horizontais não colapsam, nem as de itens flex ou grid.)\n\nDe onde vêm os distratores: 15 é a diferença (40 − 25); 25 é a menor margem; 65 é a soma, o que ocorreria sem colapso; 32,5 é a média."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0035",
  "campos": {
    "comentario": "**Gabarito: B.** O operador `+` com uma string faz concatenação: `\"5\" + 3` resulta na string `\"53\"`. Os operadores `-` e `*` só existem para números, então a string é convertida: `\"5\" - 3` é `2` e `\"5\" * 3` é `15`.\n\n- **A:** Só valeria se `+` somasse numericamente; com string ele concatena.\n- **C:** Inverte os tipos: o primeiro resultado é string, e subtração e multiplicação devolvem números.\n- **D:** `NaN` só apareceria se a string não fosse numérica em uma operação aritmética (por exemplo, `\"a\" - 3`).\n- **E:** Novamente trata `+` como soma numérica."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0036",
  "campos": {
    "comentario": "**Gabarito: Errado.** `const` impede apenas a **reatribuição** da variável (ela não pode passar a apontar para outro valor). O objeto referenciado continua mutável: é possível alterar, criar e remover propriedades. Exemplo: `const c = {saldo: 1}; c.saldo = 2;` funciona; `c = {}` gera `TypeError`. Para impedir alterações no objeto usa-se `Object.freeze` (que é raso)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0037",
  "campos": {
    "comentario": "**Gabarito: C.** O laço de eventos executa primeiro todo o código síncrono (\"início\", \"fim\"). Com a pilha vazia, esvazia a fila de **microtarefas** (callbacks de Promise: \"promise\") e só depois pega a próxima **macrotarefa** (callback do `setTimeout`, mesmo com 0 ms: \"timeout\").\n\n- **A:** `setTimeout(..., 0)` não executa na hora; apenas agenda o callback.\n- **B:** Inverte a prioridade: microtarefas vêm antes das macrotarefas.\n- **D:** O `.then` nunca roda de forma síncrona; espera o código atual terminar.\n- **E:** Mesmo motivo: \"promise\" não pode sair antes do código síncrono."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0038",
  "campos": {
    "comentario": "**Gabarito: A.** Toda função `async` retorna uma Promise: se o código devolve um valor comum, ele é embrulhado em uma Promise resolvida; se lança exceção, a Promise é rejeitada.\n\n- **B:** `await` suspende só a função `async`; a thread principal segue livre para outras tarefas.\n- **C:** `try/catch` é justamente a forma usual de tratar rejeições com `await`.\n- **D:** Podem ser declarações, expressões de função, métodos ou arrow functions.\n- **E:** Retornam sempre uma Promise; ela resolve com `undefined` apenas se não houver `return`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0039",
  "campos": {
    "comentario": "**Gabarito: D.** `var` tem escopo de função: o `var a = 2` dentro do `if` redeclara a mesma variável `a` e muda seu valor para 2. `let b` tem escopo de bloco e não existe fora do `if`; `typeof` aplicado a identificador não declarado devolve `\"undefined\"`, sem lançar erro.\n\n- **A:** Trata `var` como se tivesse escopo de bloco e `b` como visível fora do bloco.\n- **B:** Acerta o `a`, mas `b` não é visível fora do bloco.\n- **C:** Acerta o `b`, mas o `var a` do bloco é a mesma variável da função.\n- **E:** Haveria `ReferenceError` em `console.log(b)`, mas `typeof b` é seguro."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0040",
  "campos": {
    "comentario": "**Gabarito: D.** `querySelectorAll(seletor)` devolve uma `NodeList` **estática** com todos os elementos que casam com o seletor CSS; ela não se atualiza se o DOM mudar depois.\n\n- **A:** `getElementById` devolve um único elemento, pelo id.\n- **B:** `getElementsByClassName` busca por classe (não por seletor CSS) e devolve uma `HTMLCollection` viva.\n- **C:** `querySelector` aceita seletor CSS, mas devolve só o primeiro elemento encontrado.\n- **E:** `getElementsByTagName` busca por nome de tag e devolve coleção viva."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0041",
  "campos": {
    "comentario": "**Gabarito: E.** `readyState` 4 (DONE) indica operação concluída; a resposta completa está disponível (normalmente se testa junto `status === 200`).\n\n- **A:** 0 (UNSENT): objeto criado, `open()` ainda não chamado.\n- **B:** 1 (OPENED): `open()` já foi chamado.\n- **C:** 2 (HEADERS_RECEIVED): `send()` chamado, cabeçalhos da resposta recebidos.\n- **D:** 3 (LOADING): corpo da resposta sendo recebido."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0042",
  "campos": {
    "comentario": "**Gabarito: Errado.** Há dois erros de sintaxe. JSON exige **aspas duplas** em chaves e strings (aspas simples não valem), e não admite **vírgula final** depois do último par. O correto é `{\"banco\": \"Banestes\", \"ativo\": true}`. O texto dado é um literal de objeto JavaScript válido, mas `JSON.parse` o rejeitaria."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0043",
  "campos": {
    "comentario": "**Gabarito: B.** É a **delegação de eventos**: o tratador fica no ancestral `#menu`, que já existe, e o segundo argumento (`\"li\"`) filtra o alvo. Como o clique sobe (*bubbling*) até `#menu`, itens criados depois também são atendidos.\n\n- **A:** Liga o tratador só aos `li` existentes no momento da chamada.\n- **C:** `.bind()` (obsoleto) também liga apenas aos elementos atuais, e ainda pega todos os `li` da página.\n- **D:** `.one()` executa o tratador uma única vez por elemento, e só nos existentes.\n- **E:** `.trigger()` dispara o evento, não registra tratador."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0044",
  "campos": {
    "comentario": "**Gabarito: B.** A Promise do `fetch` só é rejeitada quando a requisição não se completa (falha de rede, por exemplo). Respostas 404 ou 500 **resolvem** normalmente; o código precisa testar `response.ok` (verdadeiro para status 200 a 299) ou `response.status`.\n\n- **A:** Um 404 resolve a Promise, com `response.ok` igual a `false`.\n- **C:** `onreadystatechange` é do `XMLHttpRequest`; o `fetch` é baseado em Promises.\n- **D:** Basta passar `{ method: \"POST\", body: ... }` no segundo argumento.\n- **E:** Retorna um objeto `Response`; o JSON é obtido com `response.json()`, que devolve outra Promise."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0045",
  "campos": {
    "comentario": "**Gabarito: A.** JSON tem exatamente seis tipos de valor: string, number, boolean (`true`/`false`), `null`, objeto e array.\n\n- **B:** Não há tipo data (datas vão como string), nem função, nem `undefined`.\n- **C:** Faltam boolean, `null`, objeto e array.\n- **D:** `undefined` e `NaN` não existem em JSON.\n- **E:** JSON não admite comentários."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0046",
  "campos": {
    "comentario": "**Gabarito: B.** `JSON.stringify` trata `undefined` conforme o lugar: como valor de propriedade de objeto, a propriedade é **omitida** (some o `b`); dentro de array, vira **`null`**, para preservar as posições. Resultado: `{\"a\":1,\"c\":[null]}`.\n\n- **A:** `undefined` não existe em JSON e nunca aparece na saída.\n- **C:** A propriedade `b` é omitida, não convertida em `null`.\n- **D:** O elemento do array é convertido em `null`, não removido.\n- **E:** Não há erro; funções e símbolos recebem o mesmo tratamento de `undefined`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0047",
  "campos": {
    "comentario": "**Gabarito: B.** **Bem formado** é o documento que segue as regras de sintaxe do XML. **Válido** é o bem formado que, além disso, obedece a uma DTD ou a um XML Schema. Logo, todo válido é bem formado.\n\n- **A:** O inverso não vale: um documento pode ter sintaxe correta e violar o esquema, ou nem ter esquema.\n- **C:** XML diferencia maiúsculas de minúsculas: `<Conta>` e `<conta>` são elementos distintos.\n- **D:** Valores de atributos sempre vêm entre aspas (simples ou duplas).\n- **E:** Deve haver exatamente um elemento raiz."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0048",
  "campos": {
    "comentario": "**Gabarito: Certo.** No modelo de conteúdo de uma DTD, a vírgula indica sequência obrigatória (primeiro `titular`, depois `saldo`), `+` indica uma ou mais ocorrências e `?` indica zero ou uma. Os outros símbolos são `*` (zero ou mais) e `|` (escolha). Logo, `conta` tem um ou mais `titular`, seguidos opcionalmente de um `saldo`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0049",
  "campos": {
    "comentario": "**Gabarito: B.** O XSD oferece um sistema rico de tipos (`xs:integer`, `xs:decimal`, `xs:date`, além de restrições como faixas e padrões) e suporte a namespaces. A DTD trata praticamente tudo como texto e não conhece namespaces.\n\n- **A:** É o contrário: o XSD é escrito em XML (o que é outra vantagem); a DTD é que tem sintaxe própria.\n- **C:** Declarar entidades gerais é recurso da DTD, que o XSD não tem.\n- **D:** O XSD controla cardinalidade com precisão, por `minOccurs` e `maxOccurs`.\n- **E:** Boa formação é só sintaxe e não depende de esquema; o esquema serve para a validade."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0050",
  "campos": {
    "comentario": "**Gabarito: B.** `//lancamento` seleciona os elementos `lancamento` em qualquer nível; o predicado `[@tipo='D']` filtra pelo **atributo** `tipo` (atributos levam `@`); `/descricao` desce ao filho.\n\n- **A:** Sem `@`, `tipo` é lido como um elemento filho chamado `tipo`, que não existe.\n- **C:** Sintaxe incorreta: o caminho começa na raiz, que é `extrato` e não `lancamento`, e a comparação não está em um predicado.\n- **D:** O atributo `tipo` pertence a `lancamento`, não a `descricao`.\n- **E:** Não filtra por tipo, e em XPath as posições começam em 1: `[0]` não seleciona nada."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0051",
  "campos": {
    "comentario": "**Gabarito: C.** `xs:all` permite os elementos filhos em **qualquer ordem**, cada um no máximo uma vez (e todos obrigatórios, a menos que tenham `minOccurs=\"0\"`).\n\n- **A:** `xs:sequence` exige os filhos na ordem declarada.\n- **B:** `xs:choice` permite apenas um dentre os filhos declarados.\n- **D:** `xs:group` só define um grupo nomeado e reutilizável de elementos.\n- **E:** `xs:any` é um curinga que aceita elementos não declarados no esquema."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0052",
  "campos": {
    "comentario": "**Gabarito: B.** O **SAX** (*Simple API for XML*) lê o documento do início ao fim e dispara eventos (início de elemento, texto, fim de elemento) para o programa tratar. Não monta árvore em memória; por isso é rápido e adequado a arquivos grandes, mas só de leitura e sem voltar atrás.\n\n- **A:** O DOM carrega o documento inteiro em memória como uma árvore navegável e alterável.\n- **C:** XPath é linguagem para localizar nós em um documento.\n- **D:** XSLT é linguagem para transformar XML em outros formatos.\n- **E:** DTD define a estrutura permitida de um documento, para validação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0053",
  "campos": {
    "comentario": "**Gabarito: C.** O `binding` pega a interface abstrata (o `portType` e suas operações) e define como ela trafega na prática: protocolo (SOAP sobre HTTP) e formato/estilo das mensagens.\n\n- **A:** `types` define os tipos de dados, normalmente em XML Schema.\n- **B:** `message` define as mensagens trocadas (as partes de entrada e saída).\n- **D:** `service` agrupa um conjunto de `port`.\n- **E:** `port` associa um `binding` a um endereço de rede (o *endpoint*)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0054",
  "campos": {
    "comentario": "**Gabarito: Errado.** Está invertido. Em uma mensagem SOAP, o `Envelope` (elemento raiz) e o `Body` (carga útil: a chamada ou a resposta) são **obrigatórios**. O `Header` é **opcional** e, quando existe, vem antes do `Body`, levando metadados como segurança e transação. O elemento `Fault`, para erros, aparece dentro do `Body`."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0055",
  "campos": {
    "comentario": "**Gabarito: D.** O PUT altera o estado do servidor (cria ou substitui o recurso), logo não é seguro; mas enviar a mesma requisição várias vezes deixa o recurso no mesmo estado final, logo é idempotente. O DELETE está na mesma situação.\n\n- **A:** GET é seguro e idempotente.\n- **B:** HEAD é seguro e idempotente (igual ao GET, sem o corpo da resposta).\n- **C:** POST não é seguro nem idempotente.\n- **E:** OPTIONS é seguro e idempotente."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0056",
  "campos": {
    "comentario": "**Gabarito: C.** O registro UDDI é organizado como uma lista telefônica. As **páginas verdes** trazem as informações técnicas: como invocar o serviço, com interfaces, endereços e referências às especificações (como o WSDL).\n\n- **A:** As páginas brancas trazem os dados da empresa: nome, endereço, contatos, identificadores.\n- **B:** As páginas amarelas classificam empresas e serviços por categoria (ramo de atividade, tipo de produto, localização).\n- **D:** Páginas azuis não existem no UDDI.\n- **E:** Páginas de rosto também não existem no UDDI."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0058",
  "campos": {
    "comentario": "**Gabarito: Certo.** Fielding definiu seis restrições para o REST: cliente-servidor, ausência de estado (*stateless*: cada requisição traz tudo o que o servidor precisa), cache, interface uniforme, sistema em camadas e código sob demanda. Esta última (o servidor envia código executável ao cliente, como JavaScript) é a única **opcional**."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0059",
  "campos": {
    "comentario": "**Gabarito: B.** Seguir as regras de sintaxe do XML (raiz única, tags fechadas e bem aninhadas, atributos entre aspas, respeito a maiúsculas e minúsculas) torna o documento **bem formado**. Como não foi conferido contra um esquema, não se pode chamá-lo de válido.\n\n- **A:** Válido é o documento bem formado que também obedece a uma DTD ou a um XSD.\n- **C:** O documento cumpre a sintaxe, logo não é malformado; e sua validade nem foi testada.\n- **D:** Canônico é o XML normalizado pelo padrão C14N, usado para comparação e assinatura.\n- **E:** Assinado é o que recebeu assinatura digital (XML Signature)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0060",
  "campos": {
    "comentario": "**Gabarito: B.** O XSLT faz escolha múltipla com `xsl:choose`: cada `xsl:when` testa uma condição e `xsl:otherwise` é o caso padrão.\n\n- **A:** `xsl:if` existe, mas é condição simples, sem \"senão\"; `xsl:else` não existe.\n- **C:** `xsl:for-each` percorre um conjunto de nós e `xsl:sort` os ordena; são repetição, não seleção.\n- **D:** `xsl:template` define uma regra de transformação e `xsl:apply-templates` a aplica aos nós.\n- **E:** `xsl:switch` e `xsl:case` não existem."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0061",
  "campos": {
    "comentario": "**Gabarito: B.** A ISO 9241-11 define usabilidade pela tríade **eficácia** (o usuário consegue atingir o objetivo, com exatidão e completude), **eficiência** (recursos gastos para isso, como tempo e esforço) e **satisfação**, sempre em um **contexto de uso** específico.\n\n- **A:** São características de qualidade de produto de software (ISO 9126/25010).\n- **C:** São atributos de usabilidade de Nielsen (aprendizado, memorização, erros, eficiência, satisfação).\n- **D:** São princípios e heurísticas de projeto de interface.\n- **E:** São os pilares da segurança da informação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0062",
  "campos": {
    "comentario": "**Gabarito: Errado.** Pedir confirmação **antes** de uma ação destrutiva evita que o erro aconteça: é a heurística 5, **prevenção de erros**. A heurística 9 (ajudar os usuários a reconhecer, diagnosticar e se recuperar de erros) trata do que vem **depois** do erro: mensagens em linguagem clara, que indiquem o problema com precisão e sugiram uma solução."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0063",
  "campos": {
    "comentario": "**Gabarito: B.** No protocolo \"pensar em voz alta\" (*think aloud*), o usuário executa as tarefas dizendo o que pensa, o que espera e o que o confunde, e o avaliador observa. É técnica de teste com usuários.\n\n- **A:** A avaliação heurística é inspeção feita por especialistas (em geral 3 a 5), sem usuários.\n- **C:** O percurso cognitivo segue um roteiro de tarefas e ações definido de antemão.\n- **D:** Testes de usabilidade podem ser feitos com protótipos, até de papel, e quanto mais cedo melhor.\n- **E:** A escala de severidade de Nielsen vai de 0 (não é problema) a 4 (catástrofe); 1 é o problema cosmético."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0064",
  "campos": {
    "comentario": "**Gabarito: B.** O TypeScript é um superconjunto do JavaScript (todo JS válido é TS válido), acrescenta tipagem estática opcional e é transpilado para JavaScript pelo compilador `tsc`.\n\n- **A:** Os navegadores não executam TypeScript; executam o JavaScript gerado. Ele não substitui o JS.\n- **C:** Há inferência de tipos: `let x = 5` já é `number` sem anotação.\n- **D:** A verificação é só em tempo de compilação; os tipos são apagados e não existem em execução.\n- **E:** Foi criado pela Microsoft (Anders Hejlsberg); o Angular, do Google, apenas o adota."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0065",
  "campos": {
    "comentario": "**Gabarito: C.** `unknown` aceita qualquer valor, mas não permite nenhuma operação sobre ele antes de um estreitamento de tipo (*narrowing*), por exemplo `if (typeof v === \"string\") { t = v.length; }`, ou de uma asserção (`v as string`).\n\n- **A:** Seria o comportamento com `any`, que desliga a verificação.\n- **B:** O código nem compila; e, em execução, `\"123\".length` seria 3.\n- **D:** `unknown` é o tipo de topo: recebe qualquer valor, inclusive string.\n- **E:** O TypeScript não faz conversão de valores; só verifica tipos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0066",
  "campos": {
    "comentario": "**Gabarito: Certo.** O sistema de tipos do TypeScript é **estrutural** (*duck typing*): a compatibilidade é decidida pela forma do objeto, isto é, pelas propriedades e métodos que ele tem, e não pelo nome do tipo. Se o objeto possui tudo o que a interface exige, pode ser atribuído a ela, mesmo que sua classe não declare `implements`. (Em Java e C#, de tipagem nominal, isso não compilaria.)"
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0067",
  "campos": {
    "comentario": "**Gabarito: C.** `Partial<T>` cria um tipo com as mesmas propriedades de `T`, todas opcionais (`?`). É útil, por exemplo, em atualizações parciais.\n\n- **A:** `Required<T>` faz o oposto: torna todas obrigatórias.\n- **B:** `Readonly<T>` torna todas somente leitura.\n- **D:** `Pick<T, K>` seleciona algumas propriedades e exige o segundo parâmetro com as chaves.\n- **E:** `Record<K, T>` cria um tipo de objeto com chaves `K` e valores `T`; também exige dois parâmetros."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0068",
  "campos": {
    "comentario": "**Gabarito: C.** O modificador `private` do TypeScript só existe na compilação: o compilador acusa acessos indevidos, mas os tipos são apagados e, no JavaScript gerado, o campo é uma propriedade comum, acessível. Privacidade real em execução se obtém com os campos privados do ECMAScript (`#campo`).\n\n- **A:** É o contrário; isso valeria para `#campo`.\n- **B:** Subclasses acessam membros `protected`, não `private`.\n- **D:** `readonly` impede a reatribuição após a inicialização; não restringe visibilidade.\n- **E:** `private` pode ser usado em qualquer classe."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0069",
  "campos": {
    "comentario": "**Gabarito: B.** Em uma SPA, o navegador carrega uma única página (HTML, CSS e JavaScript) e, a partir daí, o JavaScript atualiza o conteúdo e troca as \"telas\" sem recarregar, buscando dados em APIs, em geral em JSON.\n\n- **A:** Descreve a aplicação multipágina tradicional (MPA).\n- **C:** O roteamento no cliente (History API) dá uma URL diferente a cada tela.\n- **D:** Descreve a geração de site estático (SSG), e mesmo assim sem JavaScript não haveria SPA.\n- **E:** Descreve renderização exclusiva no servidor (SSR puro), o oposto da SPA."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0070",
  "campos": {
    "comentario": "**Gabarito: B.** O **Service Worker** é um script que roda em segundo plano, separado da página, e intercepta as requisições de rede (evento `fetch`). Assim pode responder com o cache, o que permite funcionamento offline, além de notificações push e sincronização em segundo plano. Exige HTTPS.\n\n- **A:** O Web App Manifest é um JSON com nome, ícones, cores e modo de exibição; permite instalar o app.\n- **C:** DOM virtual é técnica de renderização de bibliotecas como o React.\n- **D:** WebSocket é canal de comunicação bidirecional persistente com o servidor.\n- **E:** Local Storage guarda pares chave-valor no navegador; não intercepta requisições."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0071",
  "campos": {
    "comentario": "**Gabarito: Errado.** A primeira parte está certa: o Node.js usa E/S não bloqueante com event loop em uma única thread principal. Por isso mesmo ele é indicado para cargas com **muita E/S** (APIs, acesso a banco, rede, arquivos) e **não** para uso intensivo de CPU: um cálculo pesado na thread principal trava o event loop e atrasa todas as outras requisições. Para CPU, usam-se *worker threads* ou processos separados."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0072",
  "campos": {
    "comentario": "**Gabarito: C.** O til (`~`) fixa MAJOR e MINOR e libera apenas o PATCH: `~4.18.2` equivale a `>=4.18.2 <4.19.0`.\n\n- **A:** Qualquer 4.x.x a partir de 4.18.2 é o que o circunflexo (`^4.18.2`) permite.\n- **B:** Versão exata seria `\"4.18.2\"`, sem prefixo.\n- **D:** Seria `>4.18.2`, que aceitaria até a 5.x.\n- **E:** Nem `~` nem `^` permitem troca de MAJOR."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0073",
  "campos": {
    "comentario": "**Gabarito: C.** No **SSR** (*server-side rendering*) o servidor monta o HTML a cada requisição, e a página aparece rápido e já com conteúdo. Na **hidratação**, o JavaScript carregado no navegador associa os tratadores de eventos e o estado a esse HTML, tornando-o interativo.\n\n- **A:** No CSR o HTML é gerado no navegador; tree shaking é a remoção de código não usado do bundle.\n- **B:** No SSG o HTML é gerado uma vez, no build, e não a cada requisição.\n- **D:** Polyfill é código que implementa um recurso moderno em navegadores antigos.\n- **E:** Code splitting divide o bundle em partes carregadas sob demanda."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0074",
  "campos": {
    "comentario": "**Gabarito: B.** A cada mudança de estado, o React gera uma nova árvore de elementos (o DOM virtual, em memória), compara com a anterior (*diffing*) e aplica no DOM real só as diferenças. Esse processo é a **reconciliação**.\n\n- **A:** Two-way data binding é a ligação nos dois sentidos, típica do Angular (`ngModel`); no React o fluxo de dados é unidirecional.\n- **C:** Injeção de dependência é o mecanismo de fornecimento de serviços, marca do Angular.\n- **D:** Hidratação é ativar no cliente o HTML gerado no servidor (SSR).\n- **E:** Service Worker é o proxy de rede das PWAs."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0075",
  "campos": {
    "comentario": "**Gabarito: C.** O array de dependências diz quando o efeito deve rodar de novo. Vazio (`[]`), não há dependência que mude: o efeito roda uma única vez, depois da primeira renderização (montagem). (Em desenvolvimento com `StrictMode`, o React executa o efeito duas vezes de propósito; em produção, uma.)\n\n- **A:** Efeitos sempre rodam depois da renderização, nunca antes.\n- **B:** Rodar após toda renderização é o comportamento **sem** o array de dependências.\n- **D:** Na desmontagem roda apenas a função de limpeza devolvida pelo efeito.\n- **E:** Array vazio não impede a execução inicial."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0076",
  "campos": {
    "comentario": "**Gabarito: Errado.** Props são **somente leitura**: o fluxo de dados no React é unidirecional, do pai para o filho. O filho não deve alterá-las. Para mudar um dado que pertence ao pai, o pai passa por prop uma função (callback, como `onChange`); o filho a chama, o pai atualiza seu estado e o novo valor desce como prop na próxima renderização."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0077",
  "campos": {
    "comentario": "**Gabarito: C.** JSX é uma extensão de sintaxe: aceita qualquer **expressão** JavaScript entre chaves e é transformado, por ferramentas como o Babel, em chamadas de função (`React.createElement` ou o runtime `jsx`).\n\n- **A:** O navegador não entende JSX; ele precisa ser transpilado.\n- **B:** Usa-se `className`, porque `class` é palavra reservada do JavaScript.\n- **D:** `for` e `if` são instruções, não expressões; dentro do JSX usa-se `map` e o operador ternário.\n- **E:** É o contrário: componentes começam com maiúscula; minúscula é interpretada como tag HTML."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0078",
  "campos": {
    "comentario": "**Gabarito: C.** Regras dos hooks: chamá-los só no nível superior (nunca dentro de condições, laços ou funções aninhadas) e só em componentes de função ou hooks personalizados. O React identifica cada hook pela **ordem** das chamadas; um `useState` dentro de `if` pode mudar essa ordem de uma renderização para outra.\n\n- **A:** Chamada no nível superior do componente: correto.\n- **B:** Hooks personalizados (nome iniciado por `use`) podem chamar outros hooks.\n- **D:** `useContext` em componente de função é uso normal.\n- **E:** Pode haver vários `useState` em sequência; a ordem se mantém."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0079",
  "campos": {
    "comentario": "**Gabarito: D.** `[(ngModel)]` (a \"banana na caixa\") combina property binding `[ ]`, que leva o valor do componente para a tela, com event binding `( )`, que traz a alteração da tela para o componente: ligação nos dois sentidos. Requer o `FormsModule`.\n\n- **A:** Interpolação é `{{ valor }}`, só do componente para a tela.\n- **B:** Property binding é `[propriedade]=\"valor\"`, um sentido só.\n- **C:** Event binding é `(evento)=\"metodo()\"`, da tela para o componente.\n- **E:** Diretivas estruturais são as com `*`, como `*ngIf`; `ngModel` é diretiva de atributo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0080",
  "campos": {
    "comentario": "**Gabarito: B.** Diretivas estruturais mudam a estrutura do DOM, criando ou removendo elementos, e são escritas com `*`: `*ngIf` (condicional) e `*ngFor` (repetição), além de `*ngSwitchCase`. Nas versões recentes do Angular há também a sintaxe de blocos `@if` e `@for`.\n\n- **A:** `ngClass` e `ngStyle` são diretivas de atributo: alteram aparência, não a estrutura.\n- **C:** `@Input` e `@Output` são decoradores para comunicação entre componentes pai e filho.\n- **D:** `ngOnInit` e `ngOnDestroy` são métodos do ciclo de vida.\n- **E:** `routerLink` e `router-outlet` são recursos do roteador."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0081",
  "campos": {
    "comentario": "**Gabarito: Certo.** `providedIn: 'root'` registra o serviço no injetor raiz da aplicação. Como o injetor cria uma instância e a reutiliza, todos os componentes e serviços que o injetam recebem o mesmo objeto (singleton). Essa forma de registro também permite *tree shaking*: se ninguém injetar o serviço, ele fica fora do bundle."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0082",
  "campos": {
    "comentario": "**Gabarito: E.** `ngOnDestroy` é chamado logo antes de o Angular destruir o componente; é o lugar de fazer `unsubscribe`, cancelar timers e liberar recursos, evitando vazamento de memória. (O pipe `async` no template cancela a assinatura sozinho.)\n\n- **A:** `ngOnInit` roda uma vez, na inicialização, depois do primeiro `ngOnChanges`; é onde se carregam os dados.\n- **B:** `ngOnChanges` roda quando mudam as propriedades `@Input`.\n- **C:** `ngAfterViewInit` roda depois que a view do componente e de seus filhos foi inicializada.\n- **D:** `ngDoCheck` roda a cada ciclo de detecção de mudanças."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0083",
  "campos": {
    "comentario": "**Gabarito: C.** `switchMap` mapeia cada valor para um novo Observable interno e, quando chega um valor novo, **cancela a assinatura do anterior**. Só a resposta do último termo digitado chega à tela, o que elimina a condição de corrida. Em buscas, costuma vir com `debounceTime` e `distinctUntilChanged`.\n\n- **A:** `map` apenas transforma cada valor emitido.\n- **B:** `filter` deixa passar só os valores que atendem a uma condição.\n- **D:** `tap` executa efeitos colaterais (como log) sem alterar o fluxo.\n- **E:** `catchError` trata erros do fluxo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0084",
  "campos": {
    "comentario": "**Gabarito: B.** Os quatro princípios das WCAG formam a sigla POUR: **perceptível** (a informação chega por algum sentido do usuário), **operável** (a interface pode ser usada, inclusive só com teclado), **compreensível** (conteúdo e operação são entendidos) e **robusto** (funciona com diferentes agentes e tecnologias assistivas).\n\n- **A:** São propriedades da segurança da informação.\n- **C:** Lista inventada; responsividade e segurança não são princípios das WCAG.\n- **D:** São qualidades de usabilidade, não os princípios das WCAG.\n- **E:** São canais sensoriais e cognitivos, não os princípios."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0085",
  "campos": {
    "comentario": "**Gabarito: B.** O critério 2.5.8, Tamanho do alvo (mínimo), novo na WCAG 2.2 e de nível AA, pede alvos de pelo menos **24 × 24 pixels CSS**, com exceções (por exemplo, espaçamento suficiente entre alvos, links em meio a texto, controle nativo do navegador).\n\n- **A:** 16 × 16 não consta do critério.\n- **C:** 44 × 44 pixels CSS é o critério 2.5.5, Tamanho do alvo (melhorado), de nível AAA, vindo da WCAG 2.1.\n- **D:** 48 × 48 é recomendação de guias de design de plataformas móveis, e as WCAG medem em pixels CSS, não físicos.\n- **E:** As WCAG não usam centímetros."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0086",
  "campos": {
    "comentario": "**Gabarito: Certo.** A ABNT NBR 17225:2025, norma brasileira de acessibilidade em conteúdo e aplicações web, baseia-se nas WCAG, mas organiza seus itens de outra forma: em **requisitos** (obrigatórios para a conformidade) e **recomendações** (boas práticas), em vez dos níveis de conformidade A, AA e AAA."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0087",
  "campos": {
    "comentario": "**Gabarito: C.** O critério 1.4.3, Contraste (mínimo), de nível AA, exige razão de contraste de pelo menos **4,5:1** entre texto de tamanho normal e fundo.\n\n- **A:** 2:1 não é limite de nenhum critério de contraste.\n- **B:** 3:1 é o mínimo AA para texto grande (18 pt, ou 14 pt em negrito) e para componentes de interface e elementos gráficos.\n- **D:** 7:1 é o exigido para texto normal no nível AAA (critério 1.4.6).\n- **E:** 10:1 não é exigido em nenhum nível."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ESP-WEB-0088",
  "campos": {
    "comentario": "**Gabarito: C.** O critério 4.1.1, Análise (*Parsing*), foi declarado obsoleto e removido na WCAG 2.2: navegadores e tecnologias assistivas atuais lidam bem com erros de marcação, e os problemas que restam já são cobertos por outros critérios.\n\n- **A:** 1.1.1 Conteúdo não textual (alternativa em texto) continua valendo, nível A.\n- **B:** 2.1.1 Teclado continua, nível A.\n- **D:** 1.4.3 Contraste (mínimo) continua, nível AA.\n- **E:** 2.4.7 Foco visível continua, nível AA."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0001",
  "campos": {
    "comentario": "**Gabarito: A.** O SFN transfere recursos de quem poupa para quem precisa por meio de quatro mercados: **monetário** (liquidez de curtíssimo prazo), **de crédito** (empréstimos e financiamentos), **de capitais** (ações e títulos de longo prazo) e **cambial** (troca de moedas). Só essa alternativa abrange o sistema inteiro.\n\n- **B:** Bancos comerciais são apenas um dos operadores, ligados sobretudo ao mercado de crédito.\n- **C:** O banco central regula e supervisiona; não é o canal da transferência de recursos.\n- **D:** As bolsas são só um ambiente de negociação do mercado de capitais.\n- **E:** A CVM é supervisora do mercado de valores mobiliários, não intermediária."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0002",
  "campos": {
    "comentario": "**Gabarito: C.** O BCB **executa** a política monetária (operações de mercado aberto, compulsório, redesconto) seguindo as diretrizes formuladas pelo CMN, além de emitir moeda e supervisionar as instituições financeiras.\n\n- **A:** A política fiscal (receitas e despesas públicas) é do Ministério da Fazenda e do Tesouro Nacional.\n- **B:** As bolsas de valores são reguladas pela CVM.\n- **D:** O superávit primário é meta fiscal, definida na lei de diretrizes orçamentárias e perseguida pelo governo.\n- **E:** Ofertas públicas iniciais de ações (IPO) são registradas e reguladas pela CVM."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0003",
  "campos": {
    "comentario": "**Gabarito: C.** Definida a meta da Selic, o BCB atua no **mercado aberto** (*open market*): compra e vende títulos públicos federais, em geral por operações compromissadas, para ajustar a liquidez das reservas bancárias e manter a Selic diária perto da meta.\n\n- **A:** Quem emite títulos públicos é o Tesouro Nacional.\n- **B:** A Lei de Responsabilidade Fiscal proíbe o BCB de emitir títulos próprios desde 2002.\n- **D:** A gestão da dívida pública é do Tesouro.\n- **E:** O BCB de fato administra as reservas internacionais, mas isso é política cambial, não o instrumento para cumprir a meta da Selic."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0004",
  "campos": {
    "comentario": "**Questão anulada.** As lotéricas atuam como **correspondentes no País**, contratadas por instituições financeiras (no caso, a Caixa). As regras dessa atividade são fixadas pelo CMN (Resolução 3.954/2011, substituída pela Resolução CMN 4.935/2021) e a supervisão cabe ao Banco Central. Como a norma é do CMN e a fiscalização é do BCB, as alternativas B e E são ambas defensáveis, e a rigor o correspondente é contratado pela instituição financeira, sem autorização caso a caso. Para a prova, guarde: quem regulamenta correspondentes é o CMN; quem supervisiona é o BCB."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0005",
  "campos": {
    "comentario": "**Questão anulada.** O enunciado fala em \"fiscalização\", mas o CMN é órgão **normativo**: não fiscaliza nada, apenas fixa diretrizes. Ele define a meta de inflação (D seria a resposta se o verbo fosse \"fixar\"); a meta da Selic é definida pelo Copom (C); a Selic diária resulta das operações do BCB no mercado aberto (B); o CDI é taxa de mercado entre bancos (A); e o superávit primário é meta fiscal (E). Sem alternativa correta, a questão foi anulada."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0006",
  "campos": {
    "comentario": "**Gabarito: A.** Selic diária (8%) acima da meta (6,25%) indica falta de dinheiro nas reservas bancárias. O BCB **compra** títulos, pagando em reservas: a liquidez aumenta e a taxa cai até a meta. Regra: comprar títulos injeta moeda e derruba os juros; vender títulos enxuga moeda e eleva os juros.\n\n- **B:** Vender títulos retira reservas e empurraria a taxa ainda mais para cima.\n- **C:** Reduzir a oferta de moeda também eleva os juros.\n- **D:** O ajuste é feito com reservas bancárias no mercado aberto, não com impressão de cédulas.\n- **E:** Superávit primário é política fiscal, fora da alçada da mesa do BCB."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0007",
  "campos": {
    "comentario": "**Gabarito: B.** O SFN tem três órgãos normativos: **CMN** (moeda, crédito, capitais e câmbio), **CNSP** (seguros privados) e **CNPC** (previdência complementar fechada).\n\n- **A:** A Casa da Moeda apenas fabrica cédulas e moedas; o BCB é supervisor.\n- **C:** Susep e BCB são entidades supervisoras.\n- **D:** BCB e CVM são supervisores, vinculados ao CMN.\n- **E:** Caixas econômicas e bolsas de valores são operadores."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0008",
  "campos": {
    "comentario": "**Gabarito: E.** No Comunicado 31.379/2017, o BCB alertou que as moedas virtuais não são emitidas nem garantidas por autoridade monetária, não têm garantia de conversão em moeda soberana e não são lastreadas em ativo real: seu valor decorre exclusivamente da confiança dos indivíduos no emissor.\n\n- **A:** Não há garantia de conversão em moedas soberanas.\n- **B:** Não são emitidas nem garantidas por autoridade monetária.\n- **C:** Não têm lastro em ativos reais de qualquer espécie.\n- **D:** Base monetária é conceito da moeda oficial (papel-moeda emitido mais reservas bancárias), sem relação com criptomoedas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0009",
  "campos": {
    "comentario": "**Gabarito: B.** Os operadores são as instituições que lidam diretamente com o público como intermediários financeiros: bancos, caixas econômicas, cooperativas de crédito, corretoras, seguradoras, bolsas.\n\n- **A:** Quem verifica o cumprimento das regras são as entidades supervisoras.\n- **C:** BCB e CVM são supervisores, não operadores.\n- **D:** Quem cria as regras de funcionamento do sistema são os órgãos normativos (CMN, CNSP, CNPC)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0010",
  "campos": {
    "comentario": "**Questão anulada.** Nenhuma alternativa traz competência do BCB.\n\n- **A:** Formular a política da moeda e do crédito é do CMN; o BCB a executa.\n- **B:** Intermediar recursos entre poupadores e tomadores e custodiar depósitos é papel dos bancos (operadores).\n- **C:** Normatizar e desenvolver o mercado de valores mobiliários é da CVM.\n- **D:** O BCB executa a política monetária, mas não a fiscal, que é do Ministério da Fazenda e do Tesouro."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0011",
  "campos": {
    "comentario": "**Gabarito: D.** O compulsório é a parcela dos depósitos que os bancos devem manter recolhida no BCB. Serve para controlar a liquidez (reduz o multiplicador bancário) e funciona como colchão de liquidez: em crises, como em 2008 e 2020, o BCB reduziu alíquotas e liberou esses recursos aos bancos, por decisão própria.\n\n- **A:** Crédito a microempreendedores e imobiliário é crédito direcionado, não finalidade do compulsório.\n- **B:** A liberação é decisão do BCB e não depende de calamidade pública nem de decreto federal.\n- **C:** O compulsório não é fonte exclusiva de crédito rural.\n\nA função mais citada em prova é o controle da liquidez e da expansão do crédito."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0012",
  "campos": {
    "comentario": "**Gabarito: A.** A **SEP** faz empréstimo entre pessoas (*peer-to-peer*) por plataforma eletrônica: aproxima credores e devedores e pode captar recursos do público, sempre vinculados à operação de empréstimo. A **SCD** concede crédito por plataforma eletrônica apenas com capital próprio, sem captar do público.\n\n- **B:** Inverte os papéis: quem atua como *peer-to-peer lending* é a SEP.\n- **C:** Nenhuma das duas tem essas funções; ambas são fintechs de crédito.\n- **D:** Não agem da mesma forma. O limite de R$ 15 mil existe, mas vale por credor em relação a um mesmo devedor na SEP, e não é o que as distingue."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0013",
  "campos": {
    "comentario": "**Gabarito: B.** O CDI (Certificado de Depósito Interbancário) é o título emitido por instituições financeiras para lastrear empréstimos de curtíssimo prazo entre elas. A taxa média dessas operações (taxa DI) é referência para aplicações de renda fixa.\n\n- **A:** O CDB capta recursos do público (depósito a prazo), é transferível.\n- **C:** A LTN (Tesouro Prefixado) é título público emitido pelo Tesouro Nacional.\n- **D:** O RDB também capta do público, mas é intransferível."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0014",
  "campos": {
    "comentario": "**Gabarito: C.** No CDC, o bem financiado costuma ficar em alienação fiduciária: o cliente tem a posse, e a financeira detém a propriedade até a quitação, podendo retomá-lo em caso de inadimplência.\n\n- **A:** Não existe essa faixa fixa de prazos; eles variam conforme o bem e a instituição.\n- **B:** Isso vale para o CDC prefixado; no pós-fixado as prestações variam com o indexador.\n- **D:** Arrendamento com valor residual garantido (VRG) é o leasing; o CDC é financiamento, e o bem já é comprado em nome do cliente."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0015",
  "campos": {
    "comentario": "**Gabarito: D.** Na classificação da CVM, o fundo de renda fixa tem como principal fator de risco a variação da taxa de juros, de índice de preços, ou de ambos.\n\n- **A:** A variação do preço das ações é o fator de risco dos fundos de ações.\n- **B:** Vários fatores de risco, sem compromisso de concentração, definem os fundos multimercado.\n- **C:** Inadimplência é risco de crédito: existe em fundos de crédito privado, mas não é o que define a classe renda fixa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0016",
  "campos": {
    "comentario": "**Gabarito: A.** O banco comercial é o intermediário financeiro clássico: capta depósitos à vista (só ele, a Caixa, cooperativas de crédito e bancos múltiplos com carteira comercial podem) e a prazo, e empresta a pessoas e empresas, sobretudo no curto e médio prazo.\n\n- **B:** O banco de investimento não capta depósitos à vista; capta a prazo e por repasses, para financiar médio e longo prazo.\n- **C:** O banco múltiplo reúne ao menos duas carteiras, sendo uma delas comercial ou de investimento; não se limita a câmbio.\n- **D:** O banco de câmbio faz operações de câmbio e de crédito vinculadas a elas (como financiamento à exportação e importação), não capital de giro ou fixo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0017",
  "campos": {
    "comentario": "**Gabarito: A.** O Índice de Basileia é a razão entre o patrimônio de referência (capital) e os ativos ponderados pelo risco. Mede a solvência: se o banco tem capital próprio suficiente para absorver perdas. No Brasil, o mínimo de patrimônio de referência é de 8% dos ativos ponderados, além dos adicionais de capital.\n\n- **B:** Não mede internacionalização nem capacidade cambial.\n- **C:** Não é indicador de conformidade (compliance) com normas do BCB e da CVM.\n- **D:** Não tem relação com o recolhimento compulsório, que é instrumento de política monetária."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0018",
  "campos": {
    "comentario": "**Gabarito: C.** A questão pede o que **não** é tendência. O movimento atual é de inclusão financeira (bancos digitais, Pix, Open Finance, microcrédito), que amplia o acesso ao crédito, e não de concentração da oferta nas classes mais ricas.\n\n- **A:** É tendência: fintechs e bancos digitais aumentaram a competição.\n- **B:** É tendência: há cada vez mais produtos e instrumentos de intermediação.\n- **D:** É tendência: os canais digitais de atendimento vêm sendo ampliados."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0019",
  "campos": {
    "comentario": "**Gabarito: B.** O CMN é o órgão normativo máximo do SFN: formula a política da moeda e do crédito, fixa as diretrizes das políticas monetária, creditícia e cambial e define a meta de inflação. Não executa nem fiscaliza.\n\n- **A:** Regular o mercado de capitais é atribuição da CVM.\n- **C:** Fiscalizar instituições financeiras é atribuição do BCB.\n- **D:** O orçamento público é política fiscal, a cargo do Executivo e do Congresso."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0020",
  "campos": {
    "comentario": "**Gabarito: C.** O CMN tem três membros: o Ministro da Fazenda (que o preside), o Ministro do Planejamento e Orçamento e o Presidente do Banco Central.\n\n- **A:** O Presidente da República não integra o CMN; falta o Presidente do BCB.\n- **B:** A Casa Civil não faz parte do CMN.\n- **D:** O Ministério da Economia existiu de 2019 a 2022; em 2023 foi desmembrado, e voltaram os ministérios da Fazenda e do Planejamento. Naquele período, o CMN era composto pelo Ministro da Economia, pelo Presidente do BCB e pelo Secretário Especial de Fazenda."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0021",
  "campos": {
    "comentario": "**Questão anulada.** O principal objetivo do Copom é **definir a meta da taxa Selic**, opção que não aparece.\n\n- **A:** Fiscalizar instituições financeiras é função do BCB como supervisor, não do comitê.\n- **B:** As metas de inflação são fixadas pelo CMN; o Copom usa a Selic para cumpri-las.\n- **C:** O mercado de capitais é regulado pela CVM.\n- **D:** As reservas internacionais são administradas pelo BCB, não pelo Copom."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0022",
  "campos": {
    "comentario": "**Gabarito: C.** Na política monetária, o BCB controla a quantidade de moeda e a liquidez da economia, por meio da emissão de moeda, das operações de mercado aberto, do compulsório e do redesconto. (O enunciado diz que o BCB \"formula\" a política monetária; a rigor, as diretrizes são do CMN e o BCB executa.)\n\n- **A:** Fiscalizar instituições é função de supervisão do BCB, não de política monetária.\n- **B:** O mercado de capitais é regulado pela CVM.\n- **D:** O orçamento público é política fiscal, do Executivo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0023",
  "campos": {
    "comentario": "**Gabarito: D.** A CVM (Lei 6.385/1976) regulamenta, fiscaliza e desenvolve o mercado de valores mobiliários: companhias abertas, ações, debêntures, fundos, bolsas. Também julga e pune irregularidades em processos administrativos sancionadores, como no caso Americanas.\n\n- **A:** Estabilidade macroeconômica é objetivo das políticas monetária e fiscal (BCB, CMN, Fazenda).\n- **B:** O câmbio é supervisionado pelo BCB.\n- **C:** Normas para serviços financeiros e bancários são do CMN e do BCB."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0024",
  "campos": {
    "comentario": "**Gabarito: C.** Criptoativos se apoiam em *blockchain*: um registro distribuído, protegido por criptografia, que valida e grava as transações sem autoridade central.\n\n- **A:** São descentralizados: não há controle governamental sobre as transações.\n- **B:** As transações ocorrem diretamente entre as partes (*peer-to-peer*), sem intermediário tradicional.\n- **D:** A volatilidade é alta, um dos principais riscos desses ativos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0025",
  "campos": {
    "comentario": "**Gabarito: D.** Open banking (hoje Open Finance) é o compartilhamento padronizado de dados e serviços entre instituições autorizadas pelo BCB, por meio de APIs, sempre com o consentimento do cliente, que é o dono dos dados.\n\n- **A:** A integração é entre as instituições participantes, não dos sistemas de gestão dos bancos com o BCB.\n- **B:** Não é plataforma internacional de câmbio ou de comércio exterior.\n- **C:** Não é sistema do BCB para crédito subsidiado; o BCB apenas regula o ecossistema."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0026",
  "campos": {
    "comentario": "**Gabarito: A.** O Copom, formado pelo presidente e pelos diretores do Banco Central, define a meta da taxa Selic, em oito reuniões por ano, para cumprir a meta de inflação.\n\n- **B:** Fiscalizar o mercado de valores mobiliários é atribuição da CVM.\n- **C:** A meta de inflação é fixada pelo CMN, que é o órgão normativo máximo do SFN; o Copom é um comitê do BCB.\n- **D:** Autorizar o funcionamento de bancos é atribuição do BCB, não do comitê.\n- **E:** O FGC é entidade privada, sem fins lucrativos, mantida pelas próprias instituições associadas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0027",
  "campos": {
    "comentario": "**Gabarito: A.** O Open Finance se baseia no consentimento: só com autorização expressa do cliente, para finalidade e prazo determinados, uma instituição pode receber de outra os dados cadastrais e transacionais dele.\n\n- **B:** Sem autorização não há compartilhamento; os dados pertencem ao cliente (e são protegidos por sigilo bancário e pela LGPD).\n- **C:** Open Finance e Pix são iniciativas distintas, que convivem; o Pix continua sendo o pagamento instantâneo.\n- **D:** É regulado pelo CMN e pelo BCB e envolve bancos, cooperativas, instituições de pagamento e outras.\n- **E:** Vai muito além de taxas públicas: abrange dados de clientes e serviços, como a iniciação de pagamentos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0028",
  "campos": {
    "comentario": "**Gabarito: B.** O FGC garante depósitos e títulos emitidos por instituições financeiras: depósitos à vista, poupança, CDB, RDB, LCI, LCA, letras de câmbio, entre outros. O limite é de R$ 250 mil por CPF ou CNPJ e por conglomerado, com teto de R$ 1 milhão a cada quatro anos.\n\n- **A:** Fundos e ações são investimentos de risco do próprio investidor, sem cobertura.\n- **C:** Títulos públicos são garantidos pelo Tesouro Nacional, não pelo FGC.\n- **D:** Debêntures são dívida de empresas, e criptoativos não têm garantia alguma.\n- **E:** Previdência privada (PGBL e VGBL) não tem cobertura do FGC."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0029",
  "campos": {
    "comentario": "**Gabarito: C.** A Selic é a taxa básica: quando sobe, o crédito fica mais caro, consumo e investimento caem, a demanda agregada diminui e a pressão sobre os preços se reduz. É política monetária contracionista.\n\n- **A:** Descreve o efeito de uma **queda** da Selic.\n- **B:** O objetivo e o efeito esperado são o oposto: conter a inflação.\n- **D:** Títulos pós-fixados atrelados à Selic ou ao CDI passam a render **mais**.\n- **E:** O compulsório é outro instrumento, alterado por decisão própria do BCB, sem ligação automática com a Selic."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0030",
  "campos": {
    "comentario": "**Gabarito: C.** A Susep supervisiona seguros, resseguros, capitalização e previdência complementar **aberta** (planos como PGBL e VGBL, vendidos a qualquer pessoa).\n\n- **A:** A Previc supervisiona a previdência **fechada** (fundos de pensão).\n- **B:** A CVM supervisiona o mercado de valores mobiliários.\n- **D:** O Banco Central supervisiona instituições financeiras e de pagamento.\n- **E:** O CNPC é órgão normativo (não supervisor) da previdência fechada."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0031",
  "campos": {
    "comentario": "**Gabarito: C.** O CNSP é o órgão normativo dos seguros privados, da capitalização e da previdência complementar aberta; a supervisão desse ramo cabe à Susep.\n\n- **A:** O CMN é órgão normativo; os supervisores do ramo de moeda e crédito são o BCB e a CVM.\n- **B:** A Previc é supervisora; o normativo da previdência fechada é o CNPC.\n- **D:** O Copom é um comitê do Banco Central; o órgão normativo máximo é o CMN.\n- **E:** Os fundos de pensão têm o CNPC como normativo e a Previc como supervisora."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0032",
  "campos": {
    "comentario": "**Gabarito: B.** No mercado de capitais, o investidor compra diretamente os títulos do emissor (ações, debêntures). Não há um banco entre os dois assumindo o risco: se o emissor não pagar, a perda é do investidor.\n\n- **A:** Captar e emprestar em nome próprio, assumindo o risco, é a intermediação típica do mercado de **crédito**.\n- **C:** Curtíssimo prazo é característica do mercado monetário; o de capitais é de médio e longo prazo.\n- **D:** Instituições financeiras participam como prestadoras de serviço: coordenação de ofertas, corretagem, custódia.\n- **E:** Controle da liquidez é função do mercado monetário."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0033",
  "campos": {
    "comentario": "**Gabarito: Errado.** No mercado secundário, os títulos já emitidos são negociados entre investidores: o dinheiro pago pelo comprador vai para o vendedor, não para a companhia. A empresa só capta recursos no mercado **primário**, quando emite as ações (como em um IPO). O secundário cumpre outro papel: dar liquidez aos papéis."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0034",
  "campos": {
    "comentario": "**Gabarito: Certo.** O mercado monetário reúne operações de curto e curtíssimo prazo, muitas de um dia, com títulos públicos. É nele que o Banco Central faz as operações de mercado aberto (compromissadas), regulando a liquidez das reservas bancárias para manter a Selic efetiva próxima da meta definida pelo Copom."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0035",
  "campos": {
    "comentario": "**Gabarito: B.** Pela Lei 9.069/1995 (art. 8º), o CMN tem três membros: Ministro da Fazenda (presidente do conselho), Ministro do Planejamento e Orçamento e presidente do Banco Central.\n\n- **A:** O presidente da CVM não integra o CMN; ele participa da Comoc, comissão técnica que assessora o conselho.\n- **C:** O Presidente da República não faz parte do CMN.\n- **D:** Presidente e diretores do BCB formam o Copom, não o CMN.\n- **E:** O presidente do BNDES não integra o conselho."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0036",
  "campos": {
    "comentario": "**Gabarito: C.** O CMN é normativo: fixa a meta de inflação e o intervalo de tolerância, que o Banco Central deve cumprir.\n\n- **A:** Executar a política monetária com operações de mercado aberto é do Banco Central.\n- **B:** A meta da Selic é definida pelo Copom, que se reúne a cada 45 dias, aproximadamente.\n- **D:** Fiscalizar companhias abertas é da CVM.\n- **E:** Recursos contra penalidades aplicadas pelo BCB e pela CVM são julgados pelo CRSFN (Conselho de Recursos do Sistema Financeiro Nacional)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0037",
  "campos": {
    "comentario": "**Gabarito: Certo.** O Decreto 12.079/2024 instituiu a meta contínua de inflação, em vigor desde 2025: a apuração deixou de seguir o ano-calendário e passou a considerar a inflação acumulada em 12 meses, mês a mês. A meta é tida como descumprida se esse índice ficar fora do intervalo de tolerância por seis meses consecutivos, caso em que o presidente do BCB deve explicar as razões em carta aberta ao Ministro da Fazenda."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0038",
  "campos": {
    "comentario": "**Gabarito: C.** A previdência complementar **aberta** tem o CNSP como órgão normativo e a Susep como supervisora, a mesma estrutura dos seguros e da capitalização.\n\n- **A:** O CNPC é o normativo da previdência **fechada** (fundos de pensão).\n- **B:** A Previc é supervisora, e também só da previdência fechada.\n- **D:** O CMN normatiza moeda, crédito, capitais e câmbio.\n- **E:** A CVM é supervisora do mercado de valores mobiliários."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0039",
  "campos": {
    "comentario": "**Gabarito: Certo.** O Banco Central exerce a Secretaria-Executiva do CMN: organiza as reuniões, prepara as pautas e publica as resoluções aprovadas pelo conselho. Além disso, o presidente do BCB é um dos três membros do CMN e o BCB coordena a Comoc, comissão técnica de assessoramento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0040",
  "campos": {
    "comentario": "**Gabarito: B.** Para conter a inflação, a política monetária deve ser contracionista. No mercado aberto, isso significa **vender** títulos públicos: os bancos pagam com reservas, a liquidez cai e os juros sobem.\n\n- **A:** Comprar títulos injeta moeda na economia (expansionista).\n- **C:** Reduzir o compulsório libera recursos para os bancos emprestarem; além disso, não é operação de mercado aberto.\n- **D:** Reduzir a taxa de redesconto barateia o socorro de liquidez aos bancos (expansionista) e também é outro instrumento.\n- **E:** Emitir papel-moeda aumenta a quantidade de moeda."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0041",
  "campos": {
    "comentario": "**Gabarito: C.** O Copom é a própria Diretoria Colegiada do Banco Central (presidente e oito diretores) e define a meta da taxa Selic.\n\n- **A:** Os membros do CMN são dois ministros e o presidente do BCB; o Copom é formado só por dirigentes do BCB.\n- **B:** A meta de inflação e o intervalo de tolerância são fixados pelo CMN.\n- **D:** São oito reuniões por ano (a cada 45 dias, aproximadamente), com dois dias de duração.\n- **E:** Pela LC 179/2021, o BCB é autarquia de natureza especial, sem vinculação a ministério."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0042",
  "campos": {
    "comentario": "**Gabarito: Certo.** O art. 1º da LC 179/2021 (lei da autonomia do Banco Central) fixa como objetivo fundamental assegurar a estabilidade de preços. O parágrafo único acrescenta, sem prejuízo desse objetivo, outros três: zelar pela estabilidade e pela eficiência do sistema financeiro, suavizar as flutuações do nível de atividade econômica e fomentar o pleno emprego."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0043",
  "campos": {
    "comentario": "**Gabarito: C.** A Selic efetiva (ou Selic diária) é a taxa média ponderada das operações compromissadas de um dia, lastreadas em títulos públicos federais e registradas no sistema Selic.\n\n- **A:** A taxa fixada pelo Copom é a **meta** Selic; a efetiva é a que se verifica no mercado e costuma ficar muito próxima dela.\n- **B:** A média das operações interbancárias com CDI é a taxa DI.\n- **D:** A taxa de redesconto é a cobrada pelo BCB nos empréstimos de liquidez aos bancos.\n- **E:** A poupança rende TR mais um percentual que depende da Selic, mas não é a Selic."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0044",
  "campos": {
    "comentario": "**Gabarito: Errado.** O mandato do presidente do Banco Central é de quatro anos, mas começa em 1º de janeiro do **terceiro** ano do mandato do Presidente da República (LC 179/2021). O descasamento é intencional: evita que cada novo governo troque de imediato o comando do BCB e reforça a autonomia da instituição. É permitida uma recondução."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0045",
  "campos": {
    "comentario": "**Gabarito: D.** A Lei 6.385/1976 (art. 2º) exclui do conceito de valor mobiliário os títulos da dívida pública e os títulos cambiais de responsabilidade de instituição financeira, exceto as debêntures. O CDB é título de captação bancária, sob a alçada do Banco Central.\n\n- **A:** Ações são valores mobiliários.\n- **B:** Debêntures também.\n- **C:** Cotas de fundos de investimento em valores mobiliários estão na lista da lei.\n- **E:** Contratos de opção e outros derivativos também são valores mobiliários."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0046",
  "campos": {
    "comentario": "**Gabarito: B.** Pelo art. 6º da Lei 6.385/1976, a CVM é dirigida por um presidente e quatro diretores, nomeados pelo Presidente da República após aprovação do Senado, com mandato de cinco anos, vedada a recondução (renova-se um quinto do colegiado a cada ano).\n\n- **A:** Presidente e oito diretores, com mandato de quatro anos, é a composição da Diretoria do Banco Central.\n- **C:** O colegiado formado por ministros (com o presidente do BCB) é o CMN.\n- **D:** O mandato é de cinco anos e não há recondução.\n- **E:** Os dirigentes são nomeados pelo Presidente da República, não eleitos pelo mercado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0047",
  "campos": {
    "comentario": "**Gabarito: Errado.** Está invertido. As ações **ordinárias** (ON) dão direito a voto nas assembleias. As **preferenciais** (PN) dão prioridade no recebimento de dividendos ou no reembolso do capital e, em regra, não têm voto ou o têm com restrições."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0048",
  "campos": {
    "comentario": "**Gabarito: C.** A Susep fiscaliza seguradoras, resseguradoras, sociedades de capitalização e entidades abertas de previdência complementar.\n\n- **A:** Fundos de pensão (previdência fechada) são fiscalizados pela Previc.\n- **B:** Companhias abertas são fiscalizadas pela CVM.\n- **D:** Cooperativas de crédito são fiscalizadas pelo Banco Central.\n- **E:** Bolsas de valores são fiscalizadas pela CVM."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0049",
  "campos": {
    "comentario": "**Gabarito: Certo.** Pelo art. 5º da Lei 6.385/1976 (redação da Lei 10.411/2002), a CVM é entidade autárquica em regime especial, vinculada ao Ministério da Fazenda, com personalidade jurídica e patrimônio próprios, autoridade administrativa independente, ausência de subordinação hierárquica, mandato fixo e estabilidade de seus dirigentes, além de autonomia financeira e orçamentária."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0050",
  "campos": {
    "comentario": "**Gabarito: B.** O banco múltiplo deve ter no mínimo duas carteiras, e uma delas tem de ser comercial ou de investimento (requisito clássico, vindo da Resolução CMN 2.099/1994). As carteiras possíveis são: comercial, de investimento, de desenvolvimento, de crédito imobiliário, de arrendamento mercantil e de crédito, financiamento e investimento.\n\n- **A:** Uma só carteira não forma banco múltiplo.\n- **C:** Bastam duas, e a de desenvolvimento é exclusiva de bancos públicos.\n- **D:** Não servem duas quaisquer: uma precisa ser comercial ou de investimento.\n- **E:** Não é preciso operar todas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0051",
  "campos": {
    "comentario": "**Gabarito: B.** Só as instituições chamadas monetárias (ou bancárias) captam depósitos à vista e, com isso, criam moeda escritural: bancos comerciais, bancos múltiplos com carteira comercial, Caixa Econômica Federal e cooperativas de crédito.\n\n- **A:** Bancos de investimento e financeiras não captam depósitos à vista.\n- **C:** BNDES e bancos de desenvolvimento se financiam com recursos de longo prazo e repasses.\n- **D:** Corretoras e distribuidoras intermedeiam títulos e valores mobiliários.\n- **E:** A SCD opera só com capital próprio, sem captar do público."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0052",
  "campos": {
    "comentario": "**Gabarito: Errado.** A carteira de desenvolvimento só pode ser operada por banco **público**. Bancos múltiplos privados podem ter as demais carteiras (comercial, investimento, crédito imobiliário, arrendamento mercantil e crédito, financiamento e investimento), mas não essa, e nenhuma autorização do Banco Central afasta a restrição."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0053",
  "campos": {
    "comentario": "**Gabarito: B.** A Caixa é empresa pública federal com funções próprias: agente operador do FGTS, monopólio do penhor civil, administração das loterias federais e papel central no crédito habitacional e no pagamento de benefícios sociais.\n\n- **A:** Emitir papel-moeda é competência do Banco Central.\n- **C:** A meta de inflação é fixada pelo CMN.\n- **D:** As cooperativas de crédito são fiscalizadas pelo Banco Central.\n- **E:** Coordenar ofertas públicas é atividade de bancos de investimento, corretoras e distribuidoras, sem exclusividade de ninguém."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0054",
  "campos": {
    "comentario": "**Gabarito: Certo.** O Banestes S.A. (Banco do Estado do Espírito Santo) é sociedade de economia mista, de capital aberto, organizada como banco múltiplo. Seu estatuto social (arts. 1º e 7º) determina que o Estado do Espírito Santo mantenha o controle acionário, com no mínimo 51% do capital votante."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0055",
  "campos": {
    "comentario": "**Gabarito: B.** Regra da Lei 12.703/2012 para depósitos feitos a partir de 4 de maio de 2012: se a meta Selic estiver **acima de 8,5% ao ano**, a poupança rende 0,5% ao mês + TR; se estiver em 8,5% ou abaixo, rende 70% da meta Selic + TR. Com a Selic em 13,75%, vale a primeira regra.\n\n- **A:** 70% da Selic + TR só se aplica com Selic igual ou inferior a 8,5%.\n- **C:** A poupança não é atrelada ao CDI.\n- **D:** IPCA mais juros é a remuneração de títulos como o Tesouro IPCA+.\n- **E:** A TR é só uma parte da remuneração."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0056",
  "campos": {
    "comentario": "**Gabarito: D.** Cotas de fundos de investimento não têm cobertura do FGC. O fundo é um condomínio com patrimônio separado do administrador, e o cotista assume o risco dos ativos da carteira.\n\n- **A:** O CDB é coberto.\n- **B:** A LCA é coberta, assim como a LCI.\n- **C:** A poupança é coberta.\n- **E:** A letra de câmbio, título de captação das financeiras, também é coberta.\n\nO limite é de R$ 250 mil por CPF ou CNPJ e por conglomerado financeiro."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0057",
  "campos": {
    "comentario": "**Gabarito: Certo.** No *vendor*, a empresa vendedora vende a prazo, mas recebe à vista do banco; o comprador paga ao banco, a prazo e com juros, e a vendedora costuma ser a garantidora da operação. No *compror* ocorre o inverso: quem contrata o financiamento é a empresa compradora, para pagar à vista seus fornecedores."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0058",
  "campos": {
    "comentario": "**Gabarito: B.** No desconto de duplicatas, o banco adianta o valor dos títulos a vencer, descontados os juros, e mantém o direito de regresso: se o sacado não pagar, cobra da empresa que descontou.\n\n- **A:** Factoring é fomento mercantil, feito por empresa não financeira, com compra definitiva dos créditos e, em regra, sem regresso.\n- **C:** *Hot money* é empréstimo de curtíssimo prazo para cobrir necessidades de caixa.\n- **D:** No compror, o banco financia as compras da empresa junto a seus fornecedores.\n- **E:** Conta garantida é limite de crédito rotativo vinculado à conta-corrente da empresa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0059",
  "campos": {
    "comentario": "**Gabarito: Certo.** O art. 1.368-C do Código Civil (incluído pela Lei 13.874/2019, a Lei da Liberdade Econômica) define o fundo de investimento como comunhão de recursos constituída sob a forma de condomínio de natureza especial. A regulação e a fiscalização cabem à CVM, hoje pela Resolução CVM 175/2022, o marco regulatório dos fundos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0060",
  "campos": {
    "comentario": "**Gabarito: C.** Política fiscal é a que usa receitas (tributos) e despesas públicas. É contracionista quando aumenta impostos e corta gastos, reduzindo a demanda agregada.\n\n- **A:** Selic é instrumento de política monetária, e reduzi-la é medida expansionista.\n- **B:** Aumentar o compulsório é contracionista, mas é política monetária.\n- **D:** Vender títulos no mercado aberto é política monetária contracionista.\n- **E:** Desvalorização do câmbio é política cambial."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0061",
  "campos": {
    "comentario": "**Gabarito: B.** Basileia II (2004) se apoia em três pilares: Pilar 1, requisitos mínimos de capital (para riscos de crédito, de mercado e operacional); Pilar 2, processo de revisão pela supervisão; Pilar 3, disciplina de mercado (transparência e divulgação de informações).\n\n- **A:** Crédito e mercado são tipos de risco tratados no Pilar 1, não os pilares.\n- **C e D:** Capital principal, índice de alavancagem e índices de liquidez (LCR e NSFR) são inovações de Basileia III.\n- **E:** São temas de governança e conformidade, não os pilares do acordo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0062",
  "campos": {
    "comentario": "**Gabarito: Certo.** Risco operacional é a possibilidade de perdas decorrentes de falha, deficiência ou inadequação de processos internos, pessoas e sistemas, ou de eventos externos. Falhas de TI e ataques cibernéticos entram nessa definição, que também inclui fraudes internas e externas e o risco legal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0063",
  "campos": {
    "comentario": "**Gabarito: B.** No Regime de Administração Especial Temporária (Decreto-Lei 2.321/1987), o Banco Central afasta os administradores e nomeia um conselho diretor, mas a instituição **continua funcionando normalmente**.\n\n- **A:** O encerramento das atividades ocorre na liquidação extrajudicial.\n- **C:** O FGC paga os depositantes quando há intervenção ou liquidação, não no RAET.\n- **D:** A suspensão da exigibilidade das obrigações é efeito da intervenção; no RAET as atividades seguem normais.\n- **E:** Quem decreta os regimes especiais é o Banco Central."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0064",
  "campos": {
    "comentario": "**Gabarito: Certo.** *Spread* é a diferença entre a taxa que o banco cobra nos empréstimos e a que paga na captação. Nas decomposições do Relatório de Economia Bancária do Banco Central, a inadimplência aparece historicamente como um dos maiores componentes, ao lado das despesas administrativas, dos tributos e FGC e da margem financeira (lucro)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0065",
  "campos": {
    "comentario": "**Gabarito: C.** O DICT (Diretório de Identificadores de Contas Transacionais) é a base do Banco Central que liga cada chave Pix aos dados da conta. A liquidação ocorre no SPI (Sistema de Pagamentos Instantâneos), em tempo real e em moeda de banco central.\n\n- **A:** O Pix funciona 24 horas por dia, todos os dias do ano.\n- **B:** É criado, gerido e operado pelo Banco Central, não pela Febraban nem pela B3.\n- **D:** As chaves podem ser CPF, CNPJ, e-mail, número de celular ou chave aleatória.\n- **E:** Pessoas jurídicas usam normalmente (a chave CNPJ existe para isso)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0066",
  "campos": {
    "comentario": "**Gabarito: B.** O consentimento é o núcleo do Open Finance: deve ser dado pelo cliente para finalidades determinadas, com prazo definido, e pode ser revogado a qualquer momento.\n\n- **A:** Sem autorização do titular não há compartilhamento.\n- **C:** O modelo é compatível com a LGPD, que tem o consentimento como uma das bases legais de tratamento de dados.\n- **D:** Participam instituições públicas e privadas.\n- **E:** A participação obrigatória alcança as instituições de maior porte (segmentos S1 e S2); para as demais, é voluntária."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0067",
  "campos": {
    "comentario": "**Gabarito: Certo.** A Lei 14.478/2022 é o marco legal dos ativos virtuais. O Decreto 11.563/2023 designou o Banco Central como regulador e supervisor das prestadoras de serviços de ativos virtuais, regulamentadas pelas Resoluções BCB 519, 520 e 521, de 2025. A lei preservou a competência da CVM sobre os ativos que se enquadrem como valores mobiliários."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0068",
  "campos": {
    "comentario": "**Gabarito: B.** Para Clayton Christensen, a inovação disruptiva começa com produtos mais simples, baratos ou acessíveis, voltados a clientes ignorados pelos líderes; com o tempo, melhora e toma o mercado principal. É o caminho das fintechs e dos bancos digitais.\n\n- **A:** Melhorar produtos para os clientes mais exigentes é inovação de sustentação.\n- **C:** Disrupção não depende de uma tecnologia específica.\n- **D:** Cortar custos internos sem mudar a oferta é ganho de eficiência.\n- **E:** Fusão de grandes bancos é consolidação de mercado, não inovação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0069",
  "campos": {
    "comentario": "**Gabarito: Certo.** O Mecanismo Especial de Devolução (MED) original só permitia bloquear recursos na conta que recebeu o Pix fraudulento, e os golpistas costumam esvaziá-la em minutos. O MED 2.0 segue o caminho do dinheiro por várias contas sucessivas, o que amplia a chance de bloqueio e devolução. Tornou-se obrigatório para os participantes em 2 de fevereiro de 2026."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0070",
  "campos": {
    "comentario": "**Gabarito: C.** Prêmio é o preço do seguro: o valor que o segurado paga à seguradora para ter a cobertura.\n\n- **A:** Sinistro é a ocorrência do evento coberto (o acidente, o roubo).\n- **B:** Indenização é o que a seguradora paga ao segurado ou beneficiário quando há sinistro.\n- **D:** Franquia é a parte do prejuízo que fica por conta do segurado.\n- **E:** Apólice é o documento que formaliza o contrato de seguro."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0071",
  "campos": {
    "comentario": "**Gabarito: B.** O atrativo do PGBL é deduzir as contribuições, até 12% da renda bruta tributável, o que só existe na declaração **completa**. Quem declara no modelo simplificado não aproveita a dedução e deve preferir o VGBL, em que o IR no resgate incide apenas sobre os rendimentos.\n\n- **A:** No PGBL o IR incide sobre o valor total resgatado (contribuições mais rendimentos).\n- **C:** A dedução de 12% não vale no modelo simplificado.\n- **D:** O VGBL não é isento: tributa os rendimentos.\n- **E:** Plano fechado (fundo de pensão) é restrito a empregados de uma empresa ou a associados de uma entidade."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0072",
  "campos": {
    "comentario": "**Gabarito: Certo.** Na tabela regressiva (Lei 11.053/2004), a alíquota do IR cai conforme o tempo de acumulação: 35% até 2 anos, 30% de 2 a 4, 25% de 4 a 6, 20% de 6 a 8, 15% de 8 a 10 e 10% acima de 10 anos. A tributação é definitiva na fonte. A alternativa é a tabela progressiva, que segue as faixas do IR mensal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0073",
  "campos": {
    "comentario": "**Gabarito: C.** A Resolução CVM 30/2021 trata da *suitability*: verificar se o produto é adequado ao perfil do cliente. Se o cliente ordenar operação inadequada, a instituição deve, antes da primeira operação com aquela categoria de ativo, alertá-lo da inadequação, com as causas da divergência, e obter declaração expressa de que está ciente.\n\n- **A:** A norma não manda recusar: a decisão final é do cliente.\n- **B:** O alerta e a declaração são formalidades obrigatórias.\n- **D:** O Coaf recebe comunicações de suspeita de lavagem de dinheiro, não de inadequação de perfil.\n- **E:** Alterar o perfil para \"encaixar\" a operação é irregular; o perfil decorre das informações do cliente."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0074",
  "campos": {
    "comentario": "**Gabarito: Certo.** A Resolução CMN 4.966/2021 adota o modelo de perda esperada em três estágios. Estágio 1: sem aumento significativo do risco de crédito desde a concessão, provisão pela perda esperada em 12 meses. Estágio 2: aumento significativo do risco, provisão pela perda esperada em toda a vida do instrumento. Estágio 3: ativo com problema de recuperação de crédito, também com perda esperada para a vida toda."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ATU-0075",
  "campos": {
    "comentario": "**Gabarito: C.** Condicionar o fornecimento de um produto ou serviço à compra de outro é venda casada, prática abusiva proibida pelo art. 39, I, do Código de Defesa do Consumidor. A regulação do CMN sobre relacionamento com clientes (Resolução 4.949/2021) também exige tratamento justo e adequado.\n\n- **A:** *Bancassurance* é a venda lícita de seguros, previdência e capitalização pelo canal bancário, sem imposição.\n- **B:** *Suitability* é a adequação do produto ao perfil do cliente.\n- **D:** Cosseguro é a divisão de um mesmo risco entre seguradoras.\n- **E:** Portabilidade é a transferência de uma operação ou de um plano para outra instituição."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0001",
  "campos": {
    "comentario": "**Gabarito: B.** No Guia de Conduta Ética do Banestes, prudência é agir com atenção e cuidado nos assuntos do trabalho, evitando ações que ponham em risco as atribuições, o patrimônio ou a imagem da instituição. É um princípio de conduta individual do profissional.\n\n- **A:** Defesa da concorrência em emissões de títulos é tema de regulação de mercado (CVM), não princípio de conduta.\n- **C:** Regulação prudencial do sistema financeiro é função do CMN e do Banco Central; a semelhança com \"prudência\" é só de nome.\n- **D:** Cumprir normas do BCB é dever de conformidade, não a definição de prudência.\n- **E:** Regras do mercado segurador cabem ao CNSP e à Susep."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0002",
  "campos": {
    "comentario": "**Gabarito: D.** O art. 1º da Lei 9.613/1998 define a lavagem: \"ocultar ou dissimular a natureza, origem, localização, disposição, movimentação ou propriedade de bens, direitos ou valores provenientes, direta ou indiretamente, de infração penal\".\n\n- **A:** Uso de informação privilegiada (*insider trading*) é crime contra o mercado de capitais (Lei 6.385/1976).\n- **B:** Fraude em demonstrativos contábeis é outro delito (por exemplo, crime contra o sistema financeiro).\n- **C:** Não recolher IOF é questão tributária.\n- **E:** Remeter recursos ao exterior é lícito se feito pelos canais legais; irregular, pode ser evasão de divisas (Lei 7.492/1986), não lavagem por si só."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0003",
  "campos": {
    "comentario": "**Gabarito: A.** A Lei 9.613/1998 tipifica os crimes de lavagem ou ocultação de bens, direitos e valores, impõe deveres de prevenção às instituições e criou o Coaf. Também serve de base à prevenção do financiamento do terrorismo, embora esse crime esteja tipificado na Lei 13.260/2016 (Lei Antiterrorismo).\n\n- **B:** A Lei 8.212/1991 trata do custeio da Seguridade Social.\n- **C:** A Lei 8.213/1991 trata dos benefícios da Previdência Social.\n- **D:** A Lei 9.605/1998 é a Lei de Crimes Ambientais."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0004",
  "campos": {
    "comentario": "**Gabarito: A.** Os \"Rs\" da consciência ambiental citados no Guia de Conduta Ética do Banestes são quatro: **reduzir, reutilizar, reciclar e repensar**. O enunciado é longo, mas a pergunta é só essa lista.\n\n- **B:** Omite reduzir e reutilizar e inclui \"restaurar\", que não consta.\n- **C:** Omite reduzir e repensar e inclui \"responsabilizar\", que não consta.\n- **D:** Traz só dois dos quatro; o \"somente\" torna a alternativa errada."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0005",
  "campos": {
    "comentario": "**Gabarito: D.** O Conselho de Conduta Ética do Banestes é paritário: 3 membros titulares e 3 suplentes indicados pela Diretoria, e 3 titulares e 3 suplentes eleitos pelos empregados do SFB (12 pessoas no total).\n\n- **A:** Erra os números (2 e 1) e quebra a paridade entre indicados e eleitos.\n- **B:** Mantém a paridade, mas com 2 membros de cada lado em vez de 3.\n- **C:** Erra o número e a origem: a indicação é da Diretoria, não do Conselho anterior."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0006",
  "campos": {
    "comentario": "**Gabarito: C.** A **colocação** (*placement*) é a primeira fase da lavagem: a entrada do dinheiro sujo no sistema econômico. Fracionar o valor em depósitos pequenos para fugir dos controles (*smurfing* ou estruturação) é técnica típica dessa fase.\n\n- **A:** Integração é a terceira fase: o dinheiro volta à economia com aparência lícita (compra de imóveis, empresas).\n- **B:** Ocultação (*layering*) é a segunda fase: sucessivas transferências e operações para apagar o rastro.\n- **D e E:** Reinvestimento e compensação não são fases da lavagem; as fases são colocação, ocultação e integração."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0007",
  "campos": {
    "comentario": "**Gabarito: D.** Pelo art. 11 da Lei 9.613/1998, as pessoas obrigadas comunicam as operações suspeitas ao Coaf, a Unidade de Inteligência Financeira do Brasil, no prazo de 24 horas, **abstendo-se de dar ciência** do ato a qualquer pessoa, inclusive ao cliente.\n\n- **A:** O destinatário é o Coaf, e avisar o cliente é proibido.\n- **B:** A CVM não é a destinatária, e o prazo é de 24 horas.\n- **C:** A comunicação é preventiva, feita diante da mera suspeita, sem depender de condenação.\n- **E:** Não vai à Receita Federal, e o cliente não recebe cópia."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0008",
  "campos": {
    "comentario": "**Gabarito: B.** A **ocultação** (*layering* ou estratificação) é a segunda fase: o dinheiro já inserido passa por várias camadas de transferências, contas e empresas de fachada, muitas vezes em paraísos fiscais, para quebrar a cadeia de evidências sobre a origem.\n\n- **A:** Colocação é a entrada do dinheiro no sistema financeiro.\n- **C:** Integração é o retorno dos recursos à economia formal, com aparência lícita.\n- **D:** Estruturação é o fracionamento de depósitos (*smurfing*), técnica da fase de colocação.\n- **E:** Conversão não é nome de fase da lavagem."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0009",
  "campos": {
    "comentario": "**Gabarito: C.** A Lei 12.683/2012 eliminou o rol de crimes antecedentes. Desde então, o art. 1º da Lei 9.613/1998 fala em bens provenientes de \"infração penal\", gênero que abrange crimes e contravenções (como o jogo do bicho). É a chamada lei de terceira geração.\n\n- **A:** Só o tráfico de drogas era o modelo das leis de primeira geração.\n- **B:** O rol taxativo era o modelo da redação original (segunda geração), revogado em 2012.\n- **D e E:** Não há restrição ao tipo de infração nem a quem a pratica."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0010",
  "campos": {
    "comentario": "**Gabarito: Errado.** O art. 11, II, da Lei 9.613/1998 manda comunicar a operação suspeita ao Coaf **sem dar ciência** a qualquer pessoa, inclusive àquela a quem a informação se refere. Avisar o cliente (*tipping off*) frustraria a investigação. Não há contraditório nessa etapa, que é de inteligência financeira, e a comunicação de boa-fé não gera responsabilidade civil ou administrativa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0011",
  "campos": {
    "comentario": "**Gabarito: C.** Pelo art. 12, II, da Lei 9.613/1998, a multa pecuniária é variável e não pode ser superior: (a) ao dobro do valor da operação; (b) ao dobro do lucro real obtido ou que presumivelmente seria obtido com a operação; ou (c) a **R$ 20.000.000,00**.\n\n- **A, B e D:** Valores que não constam da lei.\n- **E:** A lei não usa percentual do faturamento (critério da Lei Anticorrupção, 12.846/2013, que vai de 0,1% a 20% do faturamento bruto).\n\nAs demais sanções do art. 12 são advertência, inabilitação temporária por até dez anos e cassação ou suspensão da autorização."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0012",
  "campos": {
    "comentario": "**Gabarito: Certo.** O Coaf (Conselho de Controle de Atividades Financeiras) é a Unidade de Inteligência Financeira do Brasil: recebe, examina e analisa comunicações de operações suspeitas e produz relatórios de inteligência para as autoridades. Pela Lei 13.974/2020, está vinculado administrativamente ao Banco Central, com autonomia técnica e operacional. Antes, esteve nos ministérios da Fazenda, da Justiça e da Economia."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0013",
  "campos": {
    "comentario": "**Gabarito: Certo.** É o texto do art. 1º, § 4º, da Lei 9.613/1998: a pena (reclusão de 3 a 10 anos e multa) é aumentada de 1/3 a 2/3 se o crime for cometido de forma reiterada, por intermédio de organização criminosa ou por meio da utilização de ativo virtual. Essa última hipótese foi incluída pela Lei 14.478/2022, o marco legal dos criptoativos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0014",
  "campos": {
    "comentario": "**Gabarito: B.** A Circular BCB 3.978/2020 (art. 10) exige que a avaliação interna de risco (AIR) considere, no mínimo, quatro perfis de risco: dos clientes; da instituição (modelo de negócio e área geográfica de atuação); das operações, transações, produtos e serviços; e das atividades de funcionários, parceiros e prestadores de serviços terceirizados.\n\n- **A:** Os clientes são apenas um dos quatro perfis.\n- **C:** Produtos e serviços também são só um deles.\n- **D:** Controladores e Banco Central não são perfis da AIR.\n- **E:** PEPs e pessoas jurídicas são tipos de cliente, já incluídos no primeiro perfil."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0015",
  "campos": {
    "comentario": "**Gabarito: C.** São PEP os ocupantes de cargos públicos relevantes, no Brasil e no exterior, nos últimos cinco anos. A instituição deve aplicar diligência reforçada a eles e também a seus familiares e estreitos colaboradores.\n\n- **A:** Não há proibição de relacionamento, só controles mais rigorosos.\n- **B:** A condição perdura por cinco anos depois de a pessoa deixar o cargo.\n- **D:** Há PEPs brasileiras (chefes de Poder, ministros, parlamentares etc.) e estrangeiras.\n- **E:** Ser PEP não presume ilicitude; indica maior exposição ao risco."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0016",
  "campos": {
    "comentario": "**Gabarito: Certo.** Segundo a apostila 03 (§10), a regulamentação de PLD/FT passou a incluir, entre as comunicações automáticas ao Coaf (as que independem de análise de suspeição), as transferências de ativos virtuais de ou para carteiras autocustodiadas em valor igual ou superior ao equivalente a US$ 10 mil. A regra foi incluída pela Resolução BCB 588/2026, reproduzida pela Resolução BCB 591/2026, em vigor desde 1º/10/2026. É o mesmo tipo de comunicação objetiva das operações em espécie de valor elevado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0017",
  "campos": {
    "comentario": "**Gabarito: B.** Beneficiário final é sempre uma **pessoa natural**: aquela que, em última instância, possui, controla ou influencia significativamente o cliente pessoa jurídica. Para identificá-la, a instituição percorre a cadeia societária.\n\n- **A:** A pessoa jurídica é o cliente; busca-se quem está por trás dela.\n- **C:** O gerente é empregado do banco, sem relação com o conceito.\n- **D:** Não basta qualquer participação: a instituição fixa um percentual mínimo de referência, que não pode passar de 25%.\n- **E:** O procurador é representante e também deve ser identificado, mas não é o beneficiário final."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0018",
  "campos": {
    "comentario": "**Gabarito: Certo.** A Circular BCB 3.978/2020 substituiu regras uniformes pela abordagem baseada em risco: a instituição faz sua avaliação interna de risco, classifica clientes, produtos e operações em categorias e ajusta os controles. Riscos maiores pedem controles reforçados; riscos menores admitem controles simplificados."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0019",
  "campos": {
    "comentario": "**Gabarito: B.** A Lei 7.492/1986 (crimes contra o sistema financeiro nacional) pune, no art. 4º, parágrafo único, a gestão **temerária** com reclusão de 2 a 8 anos e multa.\n\n- **A:** É crime, não mera infração administrativa.\n- **C:** A gestão fraudulenta (art. 4º, *caput*) é mais grave: reclusão de 3 a 12 anos e multa.\n- **D:** Contravenção é infração de menor gravidade, sem pena de reclusão.\n- **E:** Os crimes dessa lei são de competência da Justiça Federal, com ação penal do Ministério Público Federal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0020",
  "campos": {
    "comentario": "**Gabarito: B.** O art. 1º, § 3º, IV, da LC 105/2001 diz que não viola o sigilo a comunicação, às autoridades competentes, da prática de ilícitos penais ou administrativos, com informações sobre operações que envolvam recursos de origem criminosa. É o que ampara as comunicações ao Coaf.\n\n- **A:** Extrato entregue a terceiro sem autorização do titular é quebra de sigilo.\n- **C:** Divulgar saldos de clientes viola o sigilo, qualquer que seja o motivo.\n- **D:** O Ministério Público, em regra, depende de ordem judicial; \"em qualquer caso\" torna a alternativa errada.\n- **E:** Vender cadastros viola o sigilo e a LGPD."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0021",
  "campos": {
    "comentario": "**Gabarito: Certo.** O art. 22 da Lei 7.492/1986 pune a evasão de divisas com reclusão de 2 a 6 anos e multa. O parágrafo único equipara ao crime quem promove, sem autorização legal, a saída de moeda ou divisa para o exterior, ou nele mantém depósitos não declarados à repartição federal competente. Ter conta no exterior é lícito; o crime está em não declarar."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0022",
  "campos": {
    "comentario": "**Gabarito: B.** Pelo art. 4º, §§ 1º e 2º, da LC 105/2001, as comissões parlamentares de inquérito podem obter informações sigilosas diretamente das instituições financeiras ou por meio do Banco Central e da CVM, desde que a solicitação seja aprovada previamente pelo plenário da Câmara, do Senado ou da própria CPI.\n\n- **A:** As CPIs têm poderes de investigação próprios das autoridades judiciais (CF, art. 58, § 3º).\n- **C:** Por isso mesmo, não dependem de ordem judicial.\n- **D:** O poder alcança instituições públicas e privadas.\n- **E:** O Coaf não é intermediário desses pedidos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0023",
  "campos": {
    "comentario": "**Gabarito: Errado.** O direito à eliminação de dados não é absoluto. O art. 16, I, da LGPD autoriza conservar os dados para cumprimento de obrigação legal ou regulatória pelo controlador, que também é base legal de tratamento (art. 7º, II). Como a regulamentação de PLD/FT obriga o banco a guardar os registros de operações por prazo mínimo, ele pode e deve recusar a eliminação enquanto a obrigação durar."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0024",
  "campos": {
    "comentario": "**Gabarito: B.** Prudência, no Guia, é atuar com atenção e cuidado, evitando ações que ponham em risco as atribuições, o patrimônio ou a imagem da instituição.\n\n- **A:** Temperança é exercer as funções com moderação, usando as prerrogativas do cargo só para cumprir os deveres.\n- **C:** Discrição é reserva quanto a informações e assuntos da instituição e dos clientes.\n- **D:** Lealdade é fidelidade à instituição e a seus objetivos.\n- **E:** Tolerância é aceitar críticas e formas diferentes de pensar."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0025",
  "campos": {
    "comentario": "**Gabarito: C.** Temperança é moderação: exercer as funções sem excessos e usar as prerrogativas do cargo apenas para o cumprimento dos deveres, nunca em benefício próprio.\n\n- **A:** Aceitar críticas e formas diferentes de pensar é tolerância.\n- **B:** Manter o endividamento sob controle é dever ligado à administração financeira pessoal.\n- **D:** Guardar sigilo sobre operações é dever de sigilo (e de discrição).\n- **E:** Cumprir determinações dos superiores decorre do respeito à hierarquia."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0026",
  "campos": {
    "comentario": "**Gabarito: Certo.** O Guia de Conduta Ética considera conivente o profissional que toma conhecimento de conduta contrária às suas disposições e deixa de comunicá-la. Ou seja, o dever não é só de não violar o Guia: é também de relatar as violações de que souber, pelos canais próprios (como o Conselho de Conduta Ética). A omissão é tratada como falta."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0027",
  "campos": {
    "comentario": "**Gabarito: C.** O Guia admite brindes promocionais de uso cotidiano e fixa um limite anual para presentes (segundo a apostila 03 §12, R$ 100,00 por ano civil, somados por ofertante). O que ultrapassar o limite deve ser comunicado por escrito ao Conselho de Conduta Ética, que destina o presente a instituições filantrópicas.\n\n- **A:** Declarar não basta: há limite de valor.\n- **B:** Brindes simples, como canetas e agendas, são permitidos.\n- **D:** Datas comemorativas não afastam o limite.\n- **E:** O limite não é de um salário mínimo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0028",
  "campos": {
    "comentario": "**Gabarito: Errado.** O Conselho de Conduta Ética é paritário: 3 titulares e 3 suplentes indicados pela Diretoria e 3 titulares e 3 suplentes eleitos pelos empregados do Sistema Financeiro Banestes. O erro está em \"exclusivamente\": metade do conselho vem do voto dos empregados."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0029",
  "campos": {
    "comentario": "**Gabarito: B.** O Guia trata como nepotismo, conduta inadequada e vedada, a contratação ou o favorecimento de cônjuge, companheiro ou parente até o terceiro grau (tios e sobrinhos, por exemplo), sobretudo em relação de subordinação.\n\n- **A:** O mérito do parente não afasta a vedação.\n- **C:** Incompatibilidade de atividades refere-se a atividades externas que conflitam com as funções no banco.\n- **D:** É o oposto: uso do cargo em favor de familiares.\n- **E:** O caso não tem relação com liberdade de expressão."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0030",
  "campos": {
    "comentario": "**Gabarito: B.** A Lei 12.846/2013 (Lei Anticorrupção) estabelece a responsabilidade **objetiva** da pessoa jurídica, nas esferas administrativa e civil, pelos atos lesivos praticados em seu interesse ou benefício: basta provar o ato e o nexo, sem discutir dolo ou culpa.\n\n- **A:** Culpa e dolo só importam para a responsabilização das pessoas físicas (dirigentes), que é subjetiva.\n- **C:** A lei não cria responsabilidade penal da empresa.\n- **D:** A empresa responde diretamente, independentemente da responsabilização dos indivíduos.\n- **E:** Alcança atos contra a administração pública nacional e estrangeira."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0031",
  "campos": {
    "comentario": "**Gabarito: B.** No modelo das três linhas (IIA), a segunda linha reúne as funções de gestão de riscos, controles internos e compliance, que apoiam e monitoram a primeira.\n\n- **A:** A primeira linha são as áreas de negócio e operacionais, donas dos riscos e dos controles do dia a dia.\n- **C:** A terceira linha é a auditoria interna, que avalia as outras duas com independência.\n- **D:** A auditoria externa é prestadora de avaliação externa, fora das três linhas.\n- **E:** A alta administração e o conselho formam o corpo de governança, a quem as linhas se reportam."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0032",
  "campos": {
    "comentario": "**Gabarito: B.** O risco climático **de transição** é a possibilidade de perdas ligadas à passagem para uma economia de baixo carbono: novas leis e regulações, mudanças tecnológicas, de mercado e de preferência dos consumidores.\n\n- **A:** O risco climático físico decorre de intempéries frequentes e severas ou de alterações ambientais de longo prazo (enchentes, secas, elevação do nível do mar).\n- **C:** O risco social envolve violação de direitos e garantias fundamentais ou atos lesivos ao interesse comum.\n- **D:** O risco operacional vem de falhas em processos, pessoas, sistemas ou de eventos externos.\n- **E:** O risco de liquidez é não conseguir honrar obrigações no vencimento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0033",
  "campos": {
    "comentario": "**Gabarito: Certo.** A Agenda 2030, adotada pelos países-membros da ONU em 2015, reúne 17 Objetivos de Desenvolvimento Sustentável (ODS), desdobrados em 169 metas, a serem alcançados até 2030. Abrangem temas como erradicação da pobreza, educação, igualdade de gênero, energia limpa e ação climática."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0034",
  "campos": {
    "comentario": "**Gabarito: B.** A Resolução CMN 4.945/2021 dispõe sobre a Política de Responsabilidade Social, Ambiental e Climática (PRSAC) e as ações para sua efetividade.\n\n- **A:** A Resolução CMN 4.595/2017 trata da política de conformidade (compliance).\n- **C:** A Circular BCB 3.978/2020 trata da prevenção à lavagem de dinheiro e ao financiamento do terrorismo.\n- **D:** A Lei 12.846/2013 é a Lei Anticorrupção, e nem é norma do CMN.\n- **E:** A Lei 9.613/1998 é a lei dos crimes de lavagem de dinheiro."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "ETI-0035",
  "campos": {
    "comentario": "**Gabarito: C.** A auditoria interna é a terceira linha: avalia, com independência e objetividade, a eficácia da governança, da gestão de riscos e dos controles, reportando-se ao conselho de administração ou ao comitê de auditoria.\n\n- **A:** A primeira linha são as áreas de negócio e operação, que gerenciam os riscos no dia a dia.\n- **B:** A segunda linha são as funções de gestão de riscos e compliance.\n- **D e E:** O modelo não tem linha zero nem quarta linha; a auditoria externa e os reguladores ficam fora das três linhas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0001",
  "campos": {
    "comentario": "**Gabarito: B.** É a única frase sem duplo sentido nem incoerência: \"voltar com nova disposição após o intervalo\" só admite uma leitura. O enunciado dá o modelo do defeito (\"marcar sob pressão\" dito no lugar de \"marcar com pressão\").\n\n- **A:** \"só jogou porque foi regularizado\" faz da regularização a única causa de ele jogar, como se bastasse o registro para ser escalado.\n- **C:** É impossível perder \"o mesmo gol\" de outra partida; o que se repete é um gol parecido.\n- **D:** O possessivo \"sua\" é ambíguo: a tática é do técnico ou do jogador?\n- **E:** \"os atrasados\" pode ser lido como salários atrasados ou como complemento mal construído, e \"numa única parcela\" contradiz a ideia de parcelamento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0002",
  "campos": {
    "comentario": "**Gabarito: C.** O observador declara estar \"do lado de fora e diante da porta central\", e por isso só descreve o que se vê desse ponto: a porta, o friso e as janelas da fachada. A limitação da descrição decorre do lugar físico de onde ele olha.\n\n- **A:** Nada no trecho indica estado emocional ou problema psicológico do observador.\n- **B:** Ele até arrisca hipóteses sobre o estilo da época; não é falta de conhecimento que restringe a descrição.\n- **D:** Não há menção a pressa ou a pouco tempo.\n- **E:** Não há sinal de desinteresse: ele descreve com detalhe tudo o que alcança ver."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0003",
  "campos": {
    "comentario": "**Gabarito: D.** A primeira frase qualifica a época como \"perigosa\" e a segunda justifica o alarme (o homem tem poder sobre a natureza sem ter controle sobre si). O convencimento se faz pela ameaça, isto é, pela intimidação pelo medo.\n\n- **A:** Não há testemunho de autoridade citado como argumento; o teólogo é o próprio autor da frase.\n- **B:** Não há dados nem elementos científicos.\n- **C:** O texto não fala em extinção da espécie nem em irresponsabilidade \"de muitos\".\n- **E:** A segunda frase explica a primeira (por que a época é perigosa); não se opõe a ela."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0004",
  "campos": {
    "comentario": "**Gabarito: E.** Para Chesterton, a sensação de que o mundo piorou vem de as coberturas jornalísticas terem \"melhorado muito\": hoje se noticia mais e melhor o que sempre aconteceu. Melhorar a cobertura é fazê-la com mais amplitude e precisão.\n\n- **A:** A frase fala em melhora da cobertura, não em exploração de temas escabrosos.\n- **B:** O autor nega justamente que os fatos ruins tenham aumentado.\n- **C:** Ele não diz que o mundo piorou pouco, e sim que não piorou.\n- **D:** A frase não trata de crimes nem de mudança de pauta da imprensa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0005",
  "campos": {
    "comentario": "**Gabarito: B.** É a única frase sem vocabulário negativo: \"grandes novidades\" valoriza o novo. Na canção de Cazuza o verso é irônico (museu e novidade se contradizem), mas, isolado como na questão, é o único que pode ser lido como visão positiva.\n\n- **A:** \"arco-íris de caos\" associa a modernidade à desordem.\n- **C:** \"objetivos confusos\" é crítica à época, apesar dos \"meios poderosos\".\n- **D:** \"asilo de lunáticos\" é imagem claramente negativa.\n- **E:** Afirma que a confusão é o estado normal de quem pensa hoje."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0006",
  "campos": {
    "comentario": "**Gabarito: A.** Inferência é uma conclusão plausível tirada do que foi dito. Se o governo quer arrecadar mais, é razoável concluir que pretende combater a sonegação, um dos meios diretos de aumentar a arrecadação.\n\n- **B:** Chuva forte no verão brasileiro não leva a maior procura pelo inverno europeu.\n- **C:** Assalto a banco na capital não permite concluir que haverá mais agências no interior.\n- **D:** Corrosão pede manutenção e recuperação dos viadutos, não necessariamente a construção de novos.\n- **E:** O calendário escolar (aulas até dezembro) nada diz sobre a qualidade da educação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0007",
  "campos": {
    "comentario": "**Gabarito: A.** Em \"Se Leonardo da Vinci terminou a sua carreira como músico...\", o \"se\" introduz um fato dado como certo e equivale a \"já que\", \"uma vez que\": valor de causa.\n\n- **B:** \"Se fossem livres\" é hipótese: valor de condição, não de explicação.\n- **C:** \"ir para Nova York\" indica destino (lugar), não finalidade.\n- **D:** Em \"saber se ele soa bem\", o \"se\" é conjunção integrante (interrogativa indireta), sem valor condicional.\n- **E:** \"com muito orgulho\" indica modo, não companhia."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0008",
  "campos": {
    "comentario": "**Gabarito: E.** A regra pede que não se use presente para fato de passado distante, e o título usa o pretérito perfeito: \"Índice subiu 20% há cinco anos\". Regra e título combinam.\n\n- **A:** \"serão vendidos\" é voz passiva analítica, justamente o que a regra desaconselha.\n- **B:** \"Polícia é acusada\" atribui à instituição o que seria ato de integrantes dela.\n- **C:** \"inaugura [...] daqui a dois anos\" usa o presente para ação distante no futuro.\n- **D:** \"Um morador de rua\" é impreciso: não identifica de quem se trata."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0009",
  "campos": {
    "comentario": "**Gabarito: B.** *Backup* é a cópia de segurança de arquivos, e a tradução dada (\"cópia de arquivo\") corresponde a esse sentido.\n\n- **A:** *Airbag* é a bolsa inflável que protege os ocupantes em colisões, não freio manual.\n- **C:** *Cartoon* é desenho humorístico ou desenho animado, não cartaz publicitário.\n- **D:** *On-line* significa conectado à rede, sem relação com mensagens secretas.\n- **E:** *Playback* é a reprodução de som previamente gravado, não a decoração."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0010",
  "campos": {
    "comentario": "**Gabarito: C.** Entrar em greve logo depois de receber aumento contraria o esperado, relação que pede conector concessivo: \"Embora a Prefeitura tenha concedido aumento [...], os professores decidiram entrar em greve\".\n\n- **A:** \"logo\" (conclusão) faz da greve consequência do aumento, o que é ilógico.\n- **B:** \"uma vez que\" (causa) diz que a greve ocorre por causa do aumento.\n- **D:** Inverte a concessão: o aumento (anteontem) é anterior à greve (hoje), não pode ter sido dado \"apesar\" dela.\n- **E:** \"de modo que\" (consequência) repete a incoerência de A."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0011",
  "campos": {
    "comentario": "**Gabarito: A.** Em \"falava inglês ou francês com facilidade\", o senhor domina as duas línguas: o \"ou\" é inclusivo e equivale a \"e\" (adição).\n\n- **B:** Comprará um carro só: alternativa com exclusão.\n- **C:** \"Ou... ou...\" repetido marca alternância enfática e excludente.\n- **D:** \"Rui Barbosa, ou a Águia de Haia\" traz outra denominação do mesmo ser: valor explicativo (equivalência).\n- **E:** \"ou seremos reprovados\" equivale a \"senão\": indica a consequência de não cumprir o que se propõe."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0012",
  "campos": {
    "comentario": "**Gabarito: D.** A frase reúne as duas exigências: usa termo do campo lexical da economia (\"comércio\") e apresenta visão negativa (o comércio \"opera contra os fracos\").\n\n- **A:** Fala da dificuldade de entender o presente; não condena a economia.\n- **B:** O tema é a inevitabilidade da morte e dos impostos, não uma avaliação da economia.\n- **C:** Critica a visão estreita do economista e amplia o problema; não é visão negativa da economia.\n- **E:** É ironia sobre os economistas e ainda chama a economia de \"muito útil\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0013",
  "campos": {
    "comentario": "**Gabarito: C.** Roberto chegou atrasado e perdeu as cenas que explicariam a recusa da heroína. A falha está no receptor, a quem faltam informações prévias (conhecimentos) para interpretar a mensagem.\n\n- **A:** O código (a língua e a linguagem do filme) é o mesmo para emissor e receptor.\n- **B:** Não há duplo sentido na cena; falta contexto.\n- **D:** A mensagem não é densa: seria compreendida por quem viu o início.\n- **E:** Roberto quer entender; o problema não é falta de colaboração."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0014",
  "campos": {
    "comentario": "**Gabarito: D.** A expressão vaga \"certos gêneros de filmes\" é esclarecida pelo trecho entre parênteses, marcado por \"por exemplo\": terror e ficção científica. A estratégia é a exemplificação.\n\n- **A:** Não há enumeração de aspectos da realidade, só dois exemplos de uma categoria.\n- **B:** Não há números; \"grande estresse\" é quantificação imprecisa.\n- **C:** Escolha de vocabulário adequado é genérica e não é o recurso que se destaca na frase.\n- **E:** Nenhum conceito é definido ou explicado; apenas se dão exemplos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0015",
  "campos": {
    "comentario": "**Gabarito: E.** A frase responde às perguntas básicas da informação: o quê (o rio transbordou), onde (rio Gavião, RS), quando (tarde de ontem, 28) e por quê (as chuvas).\n\n- **A:** Não diz qual deputado nem qual projeto.\n- **B:** Não diz que encontro é nem onde ocorrerá.\n- **C:** Traz só uma localização, e genérica.\n- **D:** Não identifica o pianista nem a sonata e acrescenta opinião (\"certamente agradará\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0016",
  "campos": {
    "comentario": "**Gabarito: A.** O texto defende uma tese (a neutralidade no jornalismo é uma \"impostura perigosa\"), sustenta-a com argumentos de autoridade (Philip Meyer, Cláudio Abramo) e fecha com conclusão (\"Em resumo\"). É a estrutura do tipo dissertativo-argumentativo.\n\n- **B:** Não há personagens agindo em tempo e espaço, nem sequência de fatos narrados.\n- **C:** O texto não constrói o retrato de um objeto, lugar ou pessoa.\n- **D:** Não dá instruções nem ordens ao leitor, marca do texto injuntivo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0017",
  "campos": {
    "comentario": "**Gabarito: B.** A tese está no primeiro parágrafo: a pretensa neutralidade é \"uma impostura perigosa que pode comprometer a base democrática do jornalismo\". Insistir na imparcialidade, portanto, prejudica a informação.\n\n- **A:** O texto nega que o jornalista deva pairar acima de tudo; ele é pessoa real, com lealdades.\n- **C:** Não há consenso: o texto mostra autores que desmascaram o mito da neutralidade.\n- **D:** O texto pede transparência sobre as próprias crenças, não fidelidade à reportagem antes de si mesmo e dos chefes."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0018",
  "campos": {
    "comentario": "**Gabarito: C.** O texto usa retomadas anafóricas explícitas, como \"essa pretensa neutralidade\", \"esse mito\", \"essa ideia\" e \"Ele\" (Cláudio Abramo), que garantem a coesão referencial e evitam repetições. (A redação da alternativa tem falha de concordância: o correto seria \"foram utilizados termos\".)\n\n- **A:** Sem operadores como \"No entanto\" e \"a fim de\", o sentido e a progressão do parágrafo se perdem.\n- **B:** Há conectivos ligando parágrafos: \"No entanto\", \"também\", \"Em resumo\".\n- **D:** Há repertório sociocultural: Philip Meyer, Katherine McAdams e Cláudio Abramo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0019",
  "campos": {
    "comentario": "**Gabarito: D.** \"renomado jornalista brasileiro\" vem entre vírgulas e explica o substantivo anterior, \"Cláudio Abramo\": é aposto explicativo.\n\n- **A:** O sujeito simples é \"Cláudio Abramo\"; o trecho grifado apenas o explica.\n- **B:** Não indica o instrumento com que se pratica a ação.\n- **C:** O adjunto adnominal se liga diretamente ao nome, sem pausa (como \"renomado\" em relação a \"jornalista\"); a expressão inteira, isolada por vírgulas, é aposto."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0020",
  "campos": {
    "comentario": "**Gabarito: D.** Regra: usa-se vírgula para separar termos coordenados de mesma função em uma enumeração (\"Livros, discos, vídeos\"). A banca chama esses termos de \"sujeitos compostos\"; a rigor é uma frase nominal, sem verbo expresso, mas a regra da vírgula é a mesma.\n\n- **A:** Sem as vírgulas a enumeração se desfaz e a pontuação fica incorreta.\n- **B:** \"à mancheia\" é locução adverbial com núcleo feminino, caso de crase obrigatória (como \"à vontade\", \"às pressas\").\n- **C:** Um termo não pode ser ao mesmo tempo indeterminado, inexistente e elíptico; os termos estão expressos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0021",
  "campos": {
    "comentario": "**Gabarito: D.** A estrofe dialoga com outros textos e autores: Fernando Pessoa, Guimarães Rosa (\"o Rosa\") e, no jogo \"a rosa\", alusões a outras obras e canções. É intertextualidade, ou seja, vários textos retomados e reescritos dentro de um só.\n\n- **A:** Guimarães Rosa é brasileiro (mineiro de Cordisburgo); só Fernando Pessoa é português.\n- **B:** Há intertextualidade evidente nas referências a Pessoa e a Rosa.\n- **C:** Amor e amizade não são sinônimos: o texto os compara em uma analogia (a poesia está para a prosa como o amor está para a amizade) e ainda os hierarquiza (\"esta lhe é superior\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0022",
  "campos": {
    "comentario": "**Gabarito: A.** A ideia central está nos versos \"Minha pátria é minha língua\" e \"A língua é minha pátria\": a identidade do falante está na língua, que ultrapassa fronteiras políticas (Portugal, Brasil, Luanda, Moçambique).\n\n- **B:** O texto não compara graus de dificuldade entre línguas (e \"Rússia\" é país, não língua).\n- **C:** São citados nomes estrangeiros, como Luís de Camões e Fernando Pessoa (portugueses) e Chevalier.\n- **D:** Os estrangeirismos aparecem como parte da mistura linguística, mas não são \"a maior representação\" da língua nem a base das figuras de linguagem."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0023",
  "campos": {
    "comentario": "**Gabarito: C.** O texto expõe fatos atuais de interesse público (data de estreia, elenco, direção) em linguagem objetiva e impessoal, sem opinião do autor: características do gênero notícia.\n\n- **A:** Não há tese nem defesa de ponto de vista, logo não é dissertativo-argumentativo.\n- **B:** A justificativa é falsa: ponto de vista do autor e entrevista não são requisitos que definam a reportagem; o texto é curto e factual, por isso é notícia.\n- **D:** Foi publicado em portal jornalístico e usa linguagem formal, não coloquial."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0024",
  "campos": {
    "comentario": "**Gabarito: B.** As três afirmativas extrapolam ou contradizem o texto.\n\n- **I:** Falsa. Arraes garantiu que \"a trama será original\", apenas \"respeitando o universo criado por Ariano Suassuna\"; não é totalmente baseada no livro.\n- **II:** Falsa. O texto nada diz sobre a reação de Suassuna (extrapolação).\n- **III:** Falsa. O segundo filme é dirigido por Guel Arraes **e** Flávia Lacerda, e a declaração sobre trama original vale só para o novo longa. Além disso, \"no qual\" está mal empregado (o correto seria \"o qual\" ou \"que\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0025",
  "campos": {
    "comentario": "**Gabarito: C.** Em \"É possível que não possamos comparecer\", a oração iniciada por \"que\" funciona como sujeito de \"é possível\": oração subordinada substantiva subjetiva (teste: \"Isso é possível\"). O mesmo ocorre em \"É importante que saibamos...\".\n\n- **A:** \"de que essa foi a melhor decisão\" completa o nome \"certeza\": completiva nominal.\n- **B:** Também é subjetiva, mas reduzida de infinitivo (\"não irmos\"), sem conjunção; a do enunciado é desenvolvida.\n- **D:** \"de que tudo se resolva\" completa o nome \"desejo\": completiva nominal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0026",
  "campos": {
    "comentario": "**Gabarito: C.** Só a afirmativa III está correta.\n\n- **I:** Falsa. O pronome relativo retoma um termo antecedente (o substantivo \"arboviroses\"), não uma oração; e a oração que ele introduz vem depois de vírgula, portanto é adjetiva **explicativa**, não restritiva.\n- **II:** Falsa. A invariabilidade de \"que\" não impede a troca por um relativo variável: \"que\" pode ser substituído por \"o qual\" e flexões, desde que concorde com o antecedente.\n- **III:** Verdadeira. Nos dois casos, \"que\" é pronome relativo (equivale a \"o qual\" e flexões) e introduz oração adjetiva."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0027",
  "campos": {
    "comentario": "**Questão anulada.** Pedia a alternativa incorreta, mas há duas. (A) é incorreta: \"tenha vindo\" é uma locução verbal (um só predicado), e as orações do período são subordinadas (\"que o mosquito tenha vindo\", \"que partiam\"), não coordenadas. (D) também é incorreta: só \"vem ocorrendo\" tem o principal no gerúndio; em \"tenha vindo\", \"vindo\" é particípio (tempo composto com \"ter\").\n\n- **B:** Correta: o trecho tem 4 períodos, cada um encerrado por ponto.\n- **C:** Correta: em \"associadas à introdução\" a crase é obrigatória (\"associadas\" pede a preposição \"a\" e \"introdução\" admite o artigo \"a\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0028",
  "campos": {
    "comentario": "**Gabarito: D.** A alternativa incorreta inverte a regra: os prefixos tônicos *pré-*, *pós-* e *pró-* levam acento **e** hífen (pré-escolar, pós-graduação); as formas átonas *pre-*, *pos-*, *pro-* se aglutinam, sem acento e sem hífen (prever, pospor, promover). E isso não é novidade do Acordo Ortográfico.\n\n- **A:** Correta: \"hífen\" é paroxítona terminada em -n; o plural \"hifens\" termina em -ens e não se acentua.\n- **B:** Correta: \"história\" pode ser vista como paroxítona terminada em ditongo crescente ou como proparoxítona aparente (his-tó-ri-a).\n- **C:** Correta: o Acordo eliminou o acento do i e do u tônicos depois de ditongo decrescente nas paroxítonas (feiura, baiuca, bocaiuva)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0029",
  "campos": {
    "comentario": "**Gabarito: A.** \"Cotidiano\" e \"quotidiano\" são formas variantes registradas no vocabulário oficial; a primeira é a mais usada no Brasil. (A alternativa termina com um \"porém\" solto, falha de redação da banca que não altera a resposta.)\n\n- **B:** \"Catorze\" e \"quatorze\" são ambas aceitas, mas \"quatorze\" é de uso brasileiro; em Portugal a forma corrente é \"catorze\".\n- **C:** *Akademía* é palavra grega (o jardim de Academo, onde Platão ensinava); ao português chegou pelo latim *academia*.\n- **D:** *Alter ego* é expressão latina (\"outro eu\"), não grega."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0030",
  "campos": {
    "comentario": "**Gabarito: B.** Neologismo literário (ou estilístico) é a palavra criada por escritores, poetas e compositores para obter efeito expressivo, como os inventos verbais de Guimarães Rosa.\n\n- **A:** Neologismo popular nasce do uso espontâneo dos falantes (gírias, por exemplo), não de um grupo específico; *youtuber* e *influencer* são empréstimos do inglês.\n- **C:** O estrangeirismo não precisa manter a grafia original: muitos são aportuguesados (sutiã, balé).\n- **D:** O nome usual é neologismo científico ou técnico; \"de ficção científica\" não é classificação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0031",
  "campos": {
    "comentario": "**Gabarito: B.** \"Barateado\" é verbo de mudança de estado e carrega um pressuposto: se o Pix barateou as transferências, antes elas custavam mais.\n\n- **A:** O texto diz que os golpes cresceram \"no mesmo período\", sem afirmar relação de causa.\n- **C:** Generalização indevida: crescimento dos golpes não significa que todos foram vítimas.\n- **D:** Contradiz o texto, que afirma que os golpes cresceram.\n- **E:** Extrapola: pede \"atenção redobrada\", não o abandono do Pix."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0032",
  "campos": {
    "comentario": "**Gabarito: C.** O conectivo conclusivo \"Diante disso\" e a posição no último parágrafo indicam conclusão. A frase é opinativa e propositiva (\"é urgente que as escolas ensinem\"): retoma a tese na forma de proposta de solução.\n\n- **A:** A contextualização do tema aparece na introdução.\n- **B:** Não há número nem dado de pesquisa.\n- **D:** Nenhum especialista ou instituição é citado.\n- **E:** Contra-argumentar é rebater posição contrária, o que o trecho não faz."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0033",
  "campos": {
    "comentario": "**Gabarito: B.** \"Voltar a\" é marcador de pressuposição: indica que a ação já ocorreu antes, foi interrompida e recomeçou. Logo, o banco cobrava a tarifa, parou e retomou a cobrança.\n\n- **A:** Se nunca tivesse cobrado, não poderia \"voltar a\" cobrar.\n- **C:** É juízo de valor que a frase não traz.\n- **D:** É suposição sobre o futuro, não informação implícita na frase.\n- **E:** Cobrança sem interrupção é incompatível com a ideia de retorno."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0034",
  "campos": {
    "comentario": "**Gabarito: C.** O autor apresenta a opinião dos especialistas e em seguida a rejeita (\"Discordo\"). É a posição contrária, trazida ao texto para ser refutada. A tese do autor é a de que o papel-moeda continua essencial onde há pouca conectividade.\n\n- **A:** A tese do autor é oposta à dos especialistas.\n- **B:** Argumento de autoridade reforça a tese; aqui a autoridade é contestada.\n- **D:** A fala abre o trecho como ponto de partida; não o conclui.\n- **E:** \"Dez anos\" é previsão, não dado estatístico."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0035",
  "campos": {
    "comentario": "**Gabarito: C.** \"Contudo\" é conjunção coordenativa adversativa (ideia de oposição), assim como \"entretanto\", \"mas\", \"porém\", \"todavia\" e \"no entanto\".\n\n- **A:** \"Portanto\" é conclusiva.\n- **B:** \"Porquanto\" é explicativa ou causal (equivale a \"porque\"); não confundir com \"conquanto\", que é concessiva.\n- **D:** \"Conforme\" é conformativa.\n- **E:** \"Logo\" é conclusiva."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0036",
  "campos": {
    "comentario": "**Gabarito: A.** Em \"A, mas B\", a informação que prevalece é B (\"exige atualização constante\"). Na reescrita concessiva, o \"embora\" (com verbo no subjuntivo) deve recair sobre a ideia mais fraca, A: \"Embora o sistema seja seguro, exige atualização constante\".\n\n- **B:** Inverte a ênfase: passa a prevalecer \"é seguro\".\n- **C:** Transforma a oposição em causa.\n- **D:** \"Portanto\" cria relação de conclusão.\n- **E:** \"Se\" cria relação de condição."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0037",
  "campos": {
    "comentario": "**Gabarito: C.** Paródia é a retomada de um texto com deformação e intenção crítica ou humorística. Oswald troca as \"palmeiras\" por \"palmares\" e inverte o tom ufanista de Gonçalves Dias.\n\n- **A:** A paráfrase reescreve o texto mantendo o mesmo sentido.\n- **B:** Citação é a transcrição literal de trecho alheio, com indicação da fonte.\n- **D:** Epígrafe é a citação posta na abertura de uma obra ou capítulo.\n- **E:** Plágio é a apropriação indevida de obra alheia como se fosse própria; aqui a referência é declarada e recriadora."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0038",
  "campos": {
    "comentario": "**Gabarito: C.** \"Desde que\" com verbo no subjuntivo (\"cumpra\") exprime condição e equivale a \"contanto que\", \"caso\".\n\n- **A:** Indica tempo quando vem com indicativo: \"desde que você chegou\".\n- **B:** Causa se exprime com \"porque\", \"já que\", \"visto que\".\n- **D:** Concessão se exprime com \"embora\", \"ainda que\", \"mesmo que\".\n- **E:** Finalidade se exprime com \"para que\", \"a fim de que\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0039",
  "campos": {
    "comentario": "**Gabarito: B.** Na retomada de dois termos já citados, \"este/esta\" refere-se ao mais próximo (o último mencionado, Marta) e \"aquele/aquela\" ao mais distante (o primeiro, Pedro). O gênero confirma: \"esta\" é feminino, \"aquele\" é masculino.\n\n- **A:** Inverte a ordem da referência.\n- **C, D e E:** \"Vaga\" não é retomada por nenhum dos pronomes: não faz sentido a vaga ser \"aprovada\" ou \"reprovado\", e \"aquele\" (masculino) não concorda com \"vaga\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0040",
  "campos": {
    "comentario": "**Gabarito: C.** O tipo injuntivo (ou instrucional) orienta o leitor a agir: verbos no imperativo (\"verifique\", \"faça\", \"não forneça\") e sequência de passos.\n\n- **A:** Narração relata fatos em sequência temporal, com personagens.\n- **B:** Descrição caracteriza seres, objetos ou ambientes.\n- **D:** Argumentação defende uma tese com argumentos.\n- **E:** Exposição explica um assunto de forma impessoal, sem dar ordens."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0041",
  "campos": {
    "comentario": "**Gabarito: B.** Gêneros são as formas concretas de texto que circulam socialmente (notícia, editorial, receita, conto, bula). Tipos são as sequências linguísticas, em número limitado: narração, descrição, injunção, exposição e argumentação.\n\n- **A:** \"Narração\" é tipo; conto e crônica são gêneros.\n- **C:** Os três são tipos.\n- **D:** \"Argumentação\" é tipo.\n- **E:** \"Exposição\" e \"narração\" são tipos; só verbete é gênero."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0042",
  "campos": {
    "comentario": "**Gabarito: B.** O trecho define um conceito (\"é um regime em que...\") com verbo no presente atemporal, linguagem impessoal e sem tomada de posição: sequência expositiva.\n\n- **A:** Não há fatos em sequência temporal nem personagens.\n- **C:** Não há tese defendida nem juízo de valor.\n- **D:** Não há ordens ou instruções ao leitor.\n- **E:** Não há troca de falas entre interlocutores."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0043",
  "campos": {
    "comentario": "**Gabarito: D.** Há juízo de valor (\"estratégia equivocada\") seguido de justificativa introduzida por \"pois\": tese mais argumento, marca da argumentação.\n\n- **A:** Narração: fatos em sequência temporal (\"foi fundado\", \"ampliou\").\n- **B:** Injunção: verbos no imperativo (\"abra\", \"preencha\").\n- **C:** Descrição: caracterização de um ambiente.\n- **E:** Exposição: definição de um conceito."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0044",
  "campos": {
    "comentario": "**Gabarito: C.** O narrador onisciente narra em terceira pessoa e conhece o interior das personagens: pensamentos, sentimentos, passado e futuro.\n\n- **A:** O narrador personagem participa da história e narra em primeira pessoa.\n- **B:** O observador, também em terceira pessoa, relata só o que se vê de fora, sem acesso ao pensamento.\n- **D:** O narrador testemunha é personagem secundária que conta, em primeira pessoa, o que presenciou.\n- **E:** O narrador protagonista conta a própria história em primeira pessoa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0045",
  "campos": {
    "comentario": "**Gabarito: C.** O texto anuncia um produto comercial (a conta Jovem Poupador) e usa o imperativo (\"Abra\", \"ensine\") para levar o leitor a contratá-lo: texto publicitário.\n\n- **A:** Texto normativo estabelece regras (leis, regulamentos).\n- **B:** A propaganda divulga ideias, causas ou comportamentos, sem fim comercial; aqui se vende um produto.\n- **D:** Texto divinatório faz previsões (horóscopo, por exemplo).\n- **E:** Texto didático tem a finalidade de ensinar um conteúdo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0046",
  "campos": {
    "comentario": "**Gabarito: B.** O texto não vende nada: difunde um comportamento de interesse social (doar sangue), com imperativo e argumento (\"pode salvar até quatro vidas\"). Propaganda divulga ideias e condutas; publicidade promove produtos e serviços.\n\n- **A:** Não há produto nem fim comercial.\n- **C:** Doar sangue não é obrigação legal; o texto convida, não impõe norma.\n- **D:** Não há previsão de futuro de base mística; \"pode salvar\" é informação.\n- **E:** A linguagem é denotativa e a finalidade é prática, não estética."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0047",
  "campos": {
    "comentario": "**Gabarito: B.** O texto divinatório (horóscopo) faz previsões com o futuro do presente (\"trará\"), apoia-se em base mística (a Lua no signo) e dá conselhos ao leitor no imperativo (\"Fique atento\").\n\n- **A:** Os verbos estão no futuro e no imperativo, e a linguagem não é técnica.\n- **C:** Artigos e incisos são marca do texto normativo.\n- **D:** Não há narração nem primeira pessoa; o texto se dirige ao leitor.\n- **E:** Não define conceitos nem tem base científica."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0048",
  "campos": {
    "comentario": "**Gabarito: C.** O texto não literário (notícia, manual, contrato) tem finalidade prática e busca objetividade: linguagem predominantemente denotativa e, em geral, uma só leitura possível.\n\n- **A:** Há versos não literários, como jingles e versinhos mnemônicos.\n- **B:** A literatura também é lírica (poemas) e dramática (peças).\n- **D:** O texto literário pode usar denotação; o que o define é o trabalho estético com a linguagem.\n- **E:** A crônica é gênero híbrido e muitas vezes literário (Rubem Braga, Fernando Sabino)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0049",
  "campos": {
    "comentario": "**Gabarito: B.** A divisão em artigos (\"Art. 3º\") e a linguagem impositiva (\"Compete ao candidato\") são marcas do texto normativo, como leis, regulamentos e editais.\n\n- **A:** O texto didático explica um conteúdo para ensinar; não fixa obrigações.\n- **C:** Não promove produto ou serviço.\n- **D:** Não há elaboração estética nem linguagem conotativa.\n- **E:** Não faz previsões."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0050",
  "campos": {
    "comentario": "**Gabarito: B.** Na interrogação indireta, a pergunta vem embutida em uma oração subordinada a um verbo como \"saber\", \"perguntar\", \"ignorar\", e a frase termina com ponto final: \"Ninguém sabe quem apagou o arquivo\".\n\n- **A:** Interrogação direta, com ponto de interrogação.\n- **C:** Interrogação direta.\n- **D:** Frase imperativa.\n- **E:** Frase exclamativa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0051",
  "campos": {
    "comentario": "**Gabarito: D.** A frase optativa exprime desejo, em geral com verbo no subjuntivo e expressões como \"oxalá\", \"tomara\", \"Deus queira\": \"Oxalá o mercado se recupere\".\n\n- **A:** A declarativa afirma um fato; aqui só se deseja que ele ocorra.\n- **B:** Não há pergunta.\n- **C:** A imperativa dá ordem, pedido ou conselho ao interlocutor.\n- **E:** A frase tem verbo (\"se recupere\"), portanto não é nominal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0052",
  "campos": {
    "comentario": "**Gabarito: B.** Conta-se uma oração para cada verbo ou locução verbal. \"deveria ter avisado\" é uma só locução (auxiliares + principal), núcleo da 1ª oração; \"ficaria\" é o verbo da 2ª, a subordinada \"de que o sistema ficaria fora do ar\".\n\n- **A:** Ignora a oração subordinada com \"ficaria\".\n- **C, D e E:** Contam separadamente os verbos da locução (\"deveria\", \"ter\", \"avisado\"), que formam um único núcleo verbal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0053",
  "campos": {
    "comentario": "**Gabarito: C.** O enunciado tem sentido completo e não tem verbo: é frase nominal. Frase é qualquer enunciado de sentido completo; oração é a que se organiza em torno de um verbo.\n\n- **A:** Período exige ao menos uma oração (um verbo); aqui não há nenhuma.\n- **B:** Sem verbo não há oração, com ou sem sujeito.\n- **D:** Não há pergunta.\n- **E:** Frase não exige verbo (\"Silêncio!\", \"Fogo!\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0054",
  "campos": {
    "comentario": "**Gabarito: A.** A pergunta retórica não espera resposta: o autor a usa para provocar o leitor e reforçar a crítica (ninguém aguenta tanta burocracia). É recurso argumentativo.\n\n- **B:** É interrogação direta, com ponto de interrogação.\n- **C:** Não exprime desejo.\n- **D:** Não há ordem nem proibição.\n- **E:** Há verbo (\"aguenta\"), logo não é frase nominal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0055",
  "campos": {
    "comentario": "**Gabarito: B.** O termo tem núcleo substantivo (\"instituição\"), refere-se a outro substantivo (\"O Banestes\") para explicá-lo e vem isolado por vírgulas: aposto explicativo.\n\n- **A:** Vocativo é chamamento do interlocutor (\"Clientes, atenção\").\n- **C:** O predicativo do sujeito se liga ao sujeito por meio do verbo (\"O Banestes é uma instituição capixaba\").\n- **D:** O adjunto adnominal acompanha o nome sem pausa (\"o banco capixaba\").\n- **E:** O aposto especificativo não vem entre vírgulas e individualiza o nome (\"o rio Doce\", \"o banco Banestes\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0056",
  "campos": {
    "comentario": "**Gabarito: C.** Em \"Sabe-se que...\", o \"se\" é partícula apassivadora (voz passiva sintética) e a oração \"que o sistema voltará em breve\" é o sujeito: \"Isso é sabido\".\n\n- **A:** Objetiva direta: completa o verbo transitivo direto \"espero\" (\"Espero isso\").\n- **B:** Completiva nominal: completa o substantivo \"certeza\".\n- **D:** Predicativa: vem depois de verbo de ligação (\"O problema é isso\").\n- **E:** Adjetiva restritiva, introduzida por pronome relativo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0057",
  "campos": {
    "comentario": "**Gabarito: C.** Para achar a função do relativo, troque-o pelo antecedente na oração adjetiva: \"falei-lhe **do projeto**\". O verbo \"falar\" rege a preposição \"de\" (falar de algo), e o termo preposicionado é objeto indireto. Por isso a preposição aparece antes do relativo: \"de que\".\n\n- **A:** O sujeito de \"falei\" é \"eu\" (oculto).\n- **B:** O objeto direto não seria preposicionado.\n- **D:** O relativo completa o verbo; não se liga a um nome.\n- **E:** Complemento nominal completa nome (substantivo, adjetivo, advérbio), não verbo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0058",
  "campos": {
    "comentario": "**Gabarito: C.** Regra: adjunto adverbial deslocado para o início da frase (\"No último trimestre\") é separado por vírgula, e não se separam por vírgula sujeito e verbo, nem verbo e complemento.\n\n- **A:** Vírgula entre o sujeito e o verbo.\n- **B:** Vírgula separa o núcleo do sujeito do seu adjunto (\"do setor de tecnologia\").\n- **D:** Vírgula entre o verbo e o objeto direto.\n- **E:** As vírgulas isolam \"de tecnologia\", que é parte restritiva do sujeito, e quebram a expressão \"setor de tecnologia\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0059",
  "campos": {
    "comentario": "**Gabarito: D.** Com verbo transitivo indireto (\"precisar de\"), o \"se\" é índice de indeterminação do sujeito e o verbo fica na 3ª pessoa do singular: \"Precisa-se de analistas\".\n\n- **A:** \"Haver\" no sentido de \"existir\" é impessoal e transmite a impessoalidade ao auxiliar: \"Deve haver soluções\".\n- **B:** \"Fazer\" indicando tempo decorrido é impessoal: \"Faz dez anos\".\n- **C:** Com verbo transitivo direto, o \"se\" é apassivador e o verbo concorda com o sujeito paciente: \"Vendem-se apartamentos\".\n- **E:** \"Haver\" impessoal fica no singular: \"Houve muitas reclamações\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0060",
  "campos": {
    "comentario": "**Gabarito: A.** Cada locução verbal vale por um verbo e forma uma oração: \"estavam aguardando\" (estar + gerúndio) e \"voltou a funcionar\" (voltar a + infinitivo). São duas orações, ligadas por \"quando\".\n\n- **B:** Conta cada verbo das locuções como uma oração.\n- **C:** Trata só uma das expressões como locução.\n- **D:** Ignora que há dois núcleos verbais e uma conjunção temporal.\n- **E:** Acerta o número de orações, mas nega as locuções."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0061",
  "campos": {
    "comentario": "**Gabarito: C.** Sem vírgulas, a oração adjetiva é restritiva: só os candidatos que estudaram com antecedência foram aprovados. Entre vírgulas, torna-se explicativa e passa a valer para todos: os candidatos (todos) estudaram com antecedência e foram aprovados.\n\n- **A:** O sentido muda, de parte para a totalidade.\n- **B:** A frase continua correta; só diz outra coisa.\n- **D:** A oração continua adjetiva (explicativa).\n- **E:** O \"que\" continua pronome relativo, retomando \"candidatos\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0062",
  "campos": {
    "comentario": "**Gabarito: B.** Na passagem ao discurso indireto: a fala vira oração introduzida por \"que\"; a 1ª pessoa passa à 3ª (eu, ele); o futuro do presente passa ao futuro do pretérito (corrigirei, corrigiria); e o advérbio se ajusta (amanhã, no dia seguinte).\n\n- **A:** Mantém \"eu\" e o futuro do presente.\n- **C:** Mantém o futuro do presente e \"amanhã\".\n- **D:** Os dois-pontos mantêm estrutura de discurso direto; falta o \"que\".\n- **E:** \"corrigiu\" transforma promessa futura em fato passado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0063",
  "campos": {
    "comentario": "**Gabarito: C.** No discurso indireto livre, o pensamento da personagem se mistura à voz do narrador: sem verbo de elocução, sem aspas ou travessão, sem \"que\", mas com a 3ª pessoa e as marcas emotivas da personagem (exclamação, interrogação, futuro do pretérito \"diria\").\n\n- **A:** O discurso direto teria aspas ou travessão e 1ª pessoa (\"O que direi ao conselho?\").\n- **B:** O indireto teria verbo de dizer e conjunção (\"pensou que...\").\n- **D:** Não se transcreve texto de outra fonte.\n- **E:** Aposto é termo da oração que explica um nome, não modo de reproduzir falas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0064",
  "campos": {
    "comentario": "**Gabarito: B.** A pergunta de resposta sim ou não vira oração interrogativa indireta introduzida por \"se\"; \"você\" passa a \"ele\"; o pretérito perfeito (\"trouxe\") passa ao mais-que-perfeito (\"tinha trazido\"); e some o ponto de interrogação.\n\n- **A:** Usa \"que\" em vez de \"se\" e não ajusta o tempo verbal.\n- **C:** Mantém \"você\" e o pretérito perfeito.\n- **D:** Os dois-pontos não cabem no discurso indireto.\n- **E:** Mantém o ponto de interrogação e usa o imperfeito (\"trazia\"), que muda o sentido."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0065",
  "campos": {
    "comentario": "**Gabarito: B.** As aspas marcam que as palavras são do entrevistado, e não do jornal: a responsabilidade pelo conteúdo fica com a fonte, o que também dá credibilidade ao relato.\n\n- **A:** O jornalista continua presente: escolhe, recorta e contextualiza a citação.\n- **C:** A citação não dá caráter literário à notícia.\n- **D:** O indireto livre dispensa aspas e verbo de dizer; é outra técnica.\n- **E:** O editorial expressa a opinião do veículo; citar uma fonte não muda o gênero."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0066",
  "campos": {
    "comentario": "**Gabarito: C.** A função conativa (ou apelativa) centra-se no receptor e procura influenciar seu comportamento: tratamento direto (\"Você\") e imperativos (\"Troque\", \"ganhe\").\n\n- **A:** A referencial informa objetivamente, com foco no assunto.\n- **B:** A emotiva centra-se no emissor e em seus sentimentos (1ª pessoa).\n- **D:** A fática testa ou mantém o canal (\"alô\", \"entendeu?\").\n- **E:** A metalinguística usa o código para falar do próprio código."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0067",
  "campos": {
    "comentario": "**Gabarito: B.** Quando o código fala de si mesmo (um poema sobre o fazer poético, um dicionário, um filme sobre cinema), predomina a função metalinguística.\n\n- **A:** A fática testa ou mantém o contato.\n- **C:** A referencial informa sobre o mundo exterior, de modo objetivo.\n- **D:** A conativa busca convencer o receptor.\n- **E:** A emotiva destaca os sentimentos do emissor; pode aparecer no poema, mas o que o define aqui é tratar da própria poesia."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0068",
  "campos": {
    "comentario": "**Gabarito: C.** Cumprimentos e fórmulas sociais servem só para abrir e manter o contato entre os interlocutores, sem informação nova: função fática, centrada no canal.\n\n- **A:** A poética trabalha a forma da mensagem (ritmo, sonoridade, imagens).\n- **B:** A referencial transmite informação sobre o assunto.\n- **D:** A metalinguística explica o código.\n- **E:** A conativa tenta influenciar o receptor, com ordens e apelos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0069",
  "campos": {
    "comentario": "**Gabarito: C.** O jargão é a linguagem própria de um grupo profissional; variações ligadas a grupos sociais (profissão, escolaridade, idade) são diastráticas.\n\n- **A:** Diacrônica é a variação ao longo do tempo (vossa mercê, você).\n- **B:** Diatópica é a variação regional (mandioca, aipim, macaxeira).\n- **D:** Diamésica é a variação conforme o meio, fala ou escrita.\n- **E:** Arcaísmo é palavra em desuso, o oposto desses termos recentes."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0070",
  "campos": {
    "comentario": "**Gabarito: B.** Para a sociolinguística, o critério é a adequação: usa-se a variedade que convém à situação comunicativa, ao interlocutor e ao gênero (formal em um ofício, informal em uma conversa).\n\n- **A:** Todas as variedades são legítimas do ponto de vista linguístico; a padrão é a de prestígio, exigida em situações formais.\n- **C:** Variação regional não é erro; tratá-la assim é preconceito linguístico.\n- **D:** A escrita também varia (um bilhete não se escreve como um contrato).\n- **E:** A gíria é variação diastrática (de grupo social); diacrônica é a variação histórica."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0071",
  "campos": {
    "comentario": "**Gabarito: C.** Canal é o meio físico pelo qual a mensagem chega ao receptor; no anúncio impresso, é o jornal em papel.\n\n- **A:** O código é a língua portuguesa escrita, mais as imagens.\n- **B:** O referente é o assunto: o produto ou serviço anunciado.\n- **D:** O emissor é o banco anunciante.\n- **E:** O receptor é o leitor do jornal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0072",
  "campos": {
    "comentario": "**Gabarito: B.** Emissor e receptor usam o mesmo código (o português), mas os termos técnicos não fazem parte do repertório do cliente. Essa diferença de vocabulário é um ruído semântico, que impede a compreensão.\n\n- **A:** O canal existe: o contrato escrito.\n- **C:** O referente existe: as condições do contrato.\n- **D:** Feedback é a resposta do receptor; não é ele que causa a incompreensão.\n- **E:** O contrato usa linguagem verbal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0073",
  "campos": {
    "comentario": "**Gabarito: B.** Segundo Jakobson, cada função se centra em um elemento da comunicação: emissor, emotiva; receptor, conativa; mensagem, poética; código, metalinguística; canal, fática; referente (contexto), referencial.\n\n- **A:** O código corresponde à função metalinguística.\n- **C:** O canal corresponde à função fática.\n- **D:** A mensagem corresponde à função poética.\n- **E:** O emissor corresponde à função emotiva."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0074",
  "campos": {
    "comentario": "**Gabarito: C.** Repetir a informação de duas formas é redundância intencional: se uma delas estiver ilegível, rasurada ou adulterada, a outra preserva a mensagem. É um modo de compensar ruídos.\n\n- **A:** Ruído é o que atrapalha a comunicação; a repetição é a defesa contra ele.\n- **B:** Feedback é a resposta do receptor ao emissor.\n- **D:** Metalinguagem é o código falando do código.\n- **E:** Algarismos e palavras são sinais escritos convencionais; o que a questão destaca é a repetição, não o tipo de código."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0075",
  "campos": {
    "comentario": "**Gabarito: C.** Na parassíntese, prefixo e sufixo se juntam ao radical ao mesmo tempo: e- + mud(o) + -ecer. Teste: tirando um dos afixos, a palavra não existe (\"emudo\", \"mudecer\").\n\n- **A:** in- + feliz + -mente é derivação prefixal e sufixal: \"infeliz\" e \"felizmente\" existem.\n- **B:** des- + leal: derivação prefixal.\n- **D:** feliz + -(i)dade: derivação sufixal.\n- **E:** re- + fazer: derivação prefixal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0076",
  "campos": {
    "comentario": "**Gabarito: A.** Na derivação regressiva, a palavra nova surge por redução da primitiva, em geral substantivos abstratos de ação tirados de verbos: pescar, pesca; atacar, ataque; debater, debate.\n\n- **B:** Composição por aglutinação: plano + alto, água + ardente, em + boa + hora.\n- **C:** Redução vocabular (abreviação) de motocicleta, fotografia, metropolitano.\n- **D:** Composição por justaposição.\n- **E:** Derivação imprópria: verbos usados como substantivos (\"o jantar\", \"o olhar\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0077",
  "campos": {
    "comentario": "**Gabarito: A.** Na derivação imprópria (ou conversão), a palavra muda de classe sem mudar de forma. O advérbio \"não\", precedido de artigo (\"o não\"), passa a funcionar como substantivo.\n\n- **B:** A regressiva reduz a palavra primitiva (pescar, pesca).\n- **C:** A composição une dois ou mais radicais.\n- **D:** O hibridismo junta elementos de línguas diferentes.\n- **E:** A abreviação encurta a palavra (fotografia, foto)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0078",
  "campos": {
    "comentario": "**Gabarito: C.** Hibridismo é a palavra formada por elementos de línguas diferentes: \"sambódromo\" une *samba* (origem africana) e o grego *drómos* (pista de corrida); \"burocracia\" une o francês *bureau* (escritório) e o grego *krátos* (poder).\n\n- **A:** A aglutinação é composição com perda fonética (planalto), sem exigir línguas diferentes.\n- **B:** A parassíntese acrescenta prefixo e sufixo ao mesmo tempo (entardecer).\n- **D:** A onomatopeia imita sons (tique-taque).\n- **E:** A regressiva reduz a palavra primitiva (atacar, ataque)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0079",
  "campos": {
    "comentario": "**Gabarito: C.** \"Bacen\" (Banco Central) é acrônimo: formado por partes das palavras e lido como palavra. A convenção usual é grafar só com inicial maiúscula as siglas pronunciáveis com mais de três letras (Bacen, Petrobras, Unesco).\n\n- **A:** O plural de siglas leva \"s\" minúsculo sem apóstrofo: CPFs.\n- **B:** Símbolos de unidades não têm plural nem ponto: 10 km.\n- **D:** A abreviatura mantém o acento se ele cai na parte conservada: pág., séc.\n- **E:** \"Moto\" é redução vocabular de \"motocicleta\", não sigla."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0080",
  "campos": {
    "comentario": "**Gabarito: C.** É o futuro do pretérito de distanciamento, típico do jornalismo: apresenta o fato como hipótese ainda não confirmada e deixa a responsabilidade com a fonte (\"Segundo fontes do mercado\").\n\n- **A:** Ação habitual no passado se exprime com o pretérito imperfeito (\"registrava\").\n- **B:** Ordem se exprime com o imperativo.\n- **D:** Fato concluído e certo pediria o pretérito perfeito (\"registrou\").\n- **E:** O futuro do pretérito de polidez aparece em pedidos (\"Gostaria de um café\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0081",
  "campos": {
    "comentario": "**Gabarito: B.** \"Vender\" é transitivo direto: o \"se\" é pronome apassivador, \"carros usados\" é sujeito paciente e o verbo vai ao plural (carros usados são vendidos). \"Tratar de\" é transitivo indireto: o \"se\" é índice de indeterminação do sujeito e o verbo fica no singular.\n\n- **A:** Inverte as duas classificações.\n- **C:** Não há ação reflexiva (os carros não vendem a si mesmos) nem conjunção.\n- **D:** Parte integrante ocorre em verbos pronominais, como \"queixar-se\" e \"arrepender-se\".\n- **E:** Verbo transitivo indireto não admite voz passiva; por isso \"trata-se\" não é apassivado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0082",
  "campos": {
    "comentario": "**Gabarito: C.** \"Possivelmente\" é modalizador epistêmico de dúvida (quase asseverativo): apresenta o conteúdo como hipótese, não como certeza.\n\n- **A:** \"Evidentemente\" exprime certeza (asseverativo).\n- **B:** \"Obrigatoriamente\" exprime obrigação (deôntico).\n- **D:** \"Lamentavelmente\" exprime avaliação afetiva do falante.\n- **E:** \"Certamente\" exprime certeza."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0083",
  "campos": {
    "comentario": "**Gabarito: B.** A modalização deôntica situa o conteúdo no campo do dever: obrigação, permissão, proibição. Em um regulamento, \"deve apresentar\" significa \"é obrigado a apresentar\".\n\n- **A:** Seria epistêmica se indicasse probabilidade (\"Ele deve estar no trânsito\").\n- **C:** A avaliativa exprime juízo de valor ou sentimento (\"felizmente\").\n- **D:** A asseverativa afirma certeza (\"sem dúvida\").\n- **E:** A delimitadora restringe o alcance da afirmação (\"do ponto de vista técnico\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0084",
  "campos": {
    "comentario": "**Gabarito: B.** \"Meio\" modificando adjetivo (\"preocupada\") equivale a \"um pouco\": é advérbio e fica invariável, mesmo diante de palavra feminina.\n\n- **A:** \"Meia\" é numeral fracionário e concorda com \"dúzia\".\n- **C:** \"Bastantes\" é pronome indefinido (equivale a \"muitas\") e concorda com \"razões\"; só é advérbio quando modifica verbo, adjetivo ou advérbio.\n- **D:** \"Sós\" é adjetivo (equivale a \"sozinhos\") e varia; \"só\" advérbio equivale a \"somente\".\n- **E:** \"Alto\" é adjetivo, predicativo do sujeito."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0085",
  "campos": {
    "comentario": "**Gabarito: B.** Pronome que funciona como sujeito de infinitivo fica no caso reto: \"para **eu** revisar\" (quem revisa sou eu). Depois de preposição, sem verbo de que seja sujeito, usa-se o oblíquo tônico: \"fácil para **mim**\".\n\n- **A:** Inverte os dois casos (\"mim\" não pode ser sujeito).\n- **C:** \"para mim revisar\" é o erro clássico.\n- **D:** \"fácil para eu\" está errado: pronome reto não fecha a frase regido de preposição.\n- **E:** \"me\" é oblíquo átono e não vem depois de preposição."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0086",
  "campos": {
    "comentario": "**Gabarito: B.** Metonímia é a troca de um termo por outro com o qual tem relação de proximidade. \"Brasília\" (o lugar, sede do poder) está no lugar do governo federal (a instituição).\n\n- **A:** A metáfora se baseia em semelhança, em comparação implícita.\n- **C:** Hipérbole é exagero intencional.\n- **D:** Antítese aproxima ideias opostas.\n- **E:** Eufemismo suaviza uma expressão desagradável."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0087",
  "campos": {
    "comentario": "**Gabarito: C.** \"Sessão\" é o tempo de duração de uma reunião ou espetáculo; \"seção\" (ou \"secção\") é parte, divisão; \"cessão\" é ato de ceder.\n\n- **A:** O correto é \"deferiu\" (atendeu, concedeu); \"diferir\" é adiar ou ser diferente.\n- **B:** O correto é \"vultoso\" (volumoso, de grande vulto); \"vultuoso\" é termo médico (rosto inchado e vermelho).\n- **D:** O correto é \"infringiu\" (violou); \"infligir\" é aplicar pena ou castigo.\n- **E:** O correto é \"iminente\" (prestes a acontecer); \"eminente\" é ilustre, elevado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0088",
  "campos": {
    "comentario": "**Gabarito: B.** O possessivo de 3ª pessoa \"seu\" pode referir-se a qualquer dos dois termos anteriores: relatório do analista ou do gerente. Desfaz-se a ambiguidade com \"dele\" ou reescrevendo a frase (\"o relatório do gerente\").\n\n- **A:** \"Analista\" tem sentido claro na frase.\n- **C:** A regência está correta: explicar algo a alguém.\n- **D:** O \"que\" é conjunção integrante (introduz o objeto direto de \"explicou\"), não pronome relativo.\n- **E:** Nenhuma vírgula resolveria a dupla referência."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0089",
  "campos": {
    "comentario": "**Gabarito: C.** Hiperônimo é o termo de sentido mais amplo, que engloba outros. \"Ferramenta\" é categoria geral que inclui o \"Pix\"; retomar por hiperônimo é recurso de coesão lexical.\n\n- **A:** Hipônimo é o termo específico; seria o caminho inverso (do geral para o particular).\n- **B:** Antonímia é relação de sentidos opostos.\n- **D:** Parônimos são palavras parecidas na forma e diferentes no sentido (eminente, iminente).\n- **E:** Homônimos têm a mesma pronúncia ou grafia e sentidos diferentes (sessão, seção)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0090",
  "campos": {
    "comentario": "**Gabarito: A.** Paradoxo é a união de ideias contraditórias em uma mesma afirmação sobre o mesmo ser: o silêncio (ausência de som) é ao mesmo tempo grito. A frase também contém metáfora, mas ela não está entre as opções.\n\n- **B:** Sinestesia mistura sensações de sentidos diferentes (\"voz doce\").\n- **C:** Aliteração é a repetição de sons consonantais.\n- **D:** Catacrese é a metáfora desgastada pelo uso (\"pé da mesa\").\n- **E:** Pleonasmo é a repetição de uma ideia (\"subir para cima\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0091",
  "campos": {
    "comentario": "**Gabarito: B.** O VOLP (Vocabulário Ortográfico da Língua Portuguesa), da Academia Brasileira de Letras, registra a grafia oficial, a classe gramatical e a flexão das palavras, e admite formas variantes (cotidiano e quotidiano, por exemplo).\n\n- **A:** Não é dicionário: não traz definições.\n- **C:** Continua em vigor e foi atualizado conforme o Acordo de 1990.\n- **D:** É publicado pela ABL, não pelo Banco Central.\n- **E:** Registra palavras de qualquer origem, inclusive estrangeirismos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0092",
  "campos": {
    "comentario": "**Gabarito: C.** Neologismo literário é a palavra criada por um autor com intenção expressiva. Bandeira funde \"te\" + \"adorar\" em um verbo novo para brincar com o nome \"Teodora\".\n\n- **A:** Arcaísmo é palavra antiga, em desuso; aqui há criação.\n- **B:** Estrangeirismo vem de outra língua; os elementos são portugueses.\n- **D:** Latinismo é palavra ou expressão latina usada em português.\n- **E:** Empréstimo semântico é dar a uma palavra existente um sentido tomado de outra língua."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0093",
  "campos": {
    "comentario": "**Gabarito: B.** *Upload* conserva a grafia e a pronúncia inglesas (estrangeirismo não adaptado, que se destaca em itálico). \"Deletou\" vem do inglês *delete*, já aportuguesado com a terminação verbal \"-ar\" e conjugado normalmente.\n\n- **A, C e D:** Não há latinismo nem arcaísmo: são termos recentes, vindos do inglês.\n- **E:** \"Deletar\" está adaptado à morfologia do português, portanto não é estrangeirismo \"não adaptado\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0094",
  "campos": {
    "comentario": "**Gabarito: A.** No neologismo semântico, uma palavra já existente ganha sentido novo: *mouse* (\"rato\", em inglês) passou a nomear o dispositivo apontador. Em português o termo é também estrangeirismo, mas o que a questão destaca é o sentido novo.\n\n- **B:** Arcaísmo é sentido ou palavra em desuso, o oposto do caso.\n- **C:** A palavra é inglesa, não latina.\n- **D:** Parônimos são palavras parecidas na forma, de sentidos diferentes.\n- **E:** A palavra não foi encurtada."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0095",
  "campos": {
    "comentario": "**Gabarito: B.** *Ipsis litteris* significa \"com as mesmas letras\", isto é, literalmente, e está bem empregado e bem grafado.\n\n- **A:** *Grosso modo* (\"de modo aproximado\") não admite a preposição \"a\".\n- **C:** A forma latina é *per capita*, sem acento.\n- **D:** O correto é *sine die* (\"sem data marcada\").\n- **E:** O correto é *sine qua non* (\"sem a qual não\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0096",
  "campos": {
    "comentario": "**Gabarito: B.** Arcaísmos são palavras ou construções que caíram em desuso: \"asinha\" (depressa), \"ledo\" (alegre) e \"mui\" (muito).\n\n- **A:** Neologismos são palavras novas.\n- **C:** Estrangeirismos vêm de outras línguas; estas são formas antigas do próprio português.\n- **D:** Latinismos são palavras ou expressões latinas usadas como tais (*habeas corpus*).\n- **E:** Gírias são expressões informais de grupos, em geral recentes."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0097",
  "campos": {
    "comentario": "**Gabarito: A.** Pelo Acordo Ortográfico: ditongos abertos *ei* e *oi* de paroxítonas perderam o acento (ideia, heroico); o hiato *oo* perdeu o circunflexo (voo); e o *i* e o *u* tônicos depois de ditongo, em paroxítonas, também (feiura).\n\n- **B:** As quatro estão na grafia antiga.\n- **C:** \"heróico\" mantém o acento abolido.\n- **D:** \"vôo\" e \"feiúra\" estão na grafia antiga.\n- **E:** \"idéia\" mantém o acento abolido.\n\nAtenção: oxítonas e monossílabos continuam acentuados (herói, papéis, céu)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0098",
  "campos": {
    "comentario": "**Gabarito: A.** Regras do hífen com prefixos: vogais iguais se separam (anti-inflacionário, micro-ondas); vogais diferentes se juntam (autoescola); prefixo terminado em vogal + palavra iniciada por *r* ou *s* junta e dobra a consoante (antissocial).\n\n- **B:** Erra as quatro.\n- **C:** Erra \"auto-escola\" e \"anti-social\".\n- **D:** Erra \"antiinflacionário\" e \"microondas\".\n- **E:** Erra \"microondas\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0099",
  "campos": {
    "comentario": "**Gabarito: B.** O plural usual é \"hifens\", sem acento: paroxítonas terminadas em *-ens* não se acentuam (itens, jovens, polens), embora as terminadas em *-n* sejam acentuadas (hífen, pólen).\n\n- **A:** \"hífens\" contraria justamente a regra do *-ens*.\n- **C:** \"Hífenes\" também é plural registrado e é proparoxítona; a banca, porém, cobra a forma \"hifens\", que é a usual e a que a regra de acentuação explica.\n- **D:** A forma está certa, mas a palavra é paroxítona (hi-fens), não oxítona.\n- **E:** Grafia errada, e a palavra tem duas sílabas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0100",
  "campos": {
    "comentario": "**Gabarito: C.** Usa-se crase na indicação de hora determinada: \"às 14h\" (preposição \"a\" + artigo \"as\"; compare com \"ao meio-dia\").\n\n- **A:** Não há crase antes de verbo: \"começou a chover\".\n- **B:** Não há crase antes de palavra masculina: \"a cavalo\".\n- **D:** Não há crase antes de pronome pessoal: \"a ela\".\n- **E:** \"Vitória\" (cidade) não admite artigo: \"volto de Vitória\", logo \"fui a Vitória\". Haveria crase com o nome especificado (\"à Vitória dos meus avós\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0101",
  "campos": {
    "comentario": "**Gabarito: B.** Regra do hiato: acentuam-se o *i* e o *u* tônicos que formam hiato com a vogal anterior e ficam sozinhos na sílaba ou seguidos de *s*: sa-í-da, pa-ís, ba-ú. (Exceções: antes de *nh*, como \"rainha\", e depois de ditongo em paroxítona, como \"feiura\".)\n\n- **A:** \"saída\" é paroxítona; \"país\" e \"baú\" são oxítonas.\n- **C:** Oxítonas terminadas em *i* e *u* não levam acento por essa regra (caqui, urubu).\n- **D:** Não há ditongo: as vogais ficam em sílabas separadas.\n- **E:** Só \"saída\" é paroxítona, e não termina em ditongo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0102",
  "campos": {
    "comentario": "**Gabarito: C.** O VOLP registra as duas formas de cada par. As grafias com *qu* ficam mais próximas da origem latina (*quotidianus*, *quattuordecim*); \"cotidiano\" e \"catorze\" refletem a pronúncia simplificada.\n\n- **A:** As formas com *qu* também são aceitas.\n- **B:** As formas com *c* são igualmente corretas e, no caso de \"cotidiano\", mais usadas no Brasil.\n- **D:** \"Quotidiano\" é palavra portuguesa de origem latina.\n- **E:** São variantes gráficas da mesma palavra, com o mesmo sentido."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0103",
  "campos": {
    "comentario": "**Gabarito: B.** \"Ter\" e \"vir\" na 3ª pessoa do plural levam acento circunflexo diferencial: eles **têm**, eles **vêm** (singular: tem, vem). \"Ver\" no plural é **veem**, sem acento desde o Acordo Ortográfico (assim como creem, leem, deem).\n\n- **A:** \"tem\" e \"vem\" são singular.\n- **C:** \"vem\" é singular e \"vêem\" é a grafia antiga.\n- **D:** \"tem\" é singular e \"vêm\" é do verbo vir, não de ver.\n- **E:** Troca os verbos: \"veem à reunião\" e \"vêm problema\" não fazem sentido."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0104",
  "campos": {
    "comentario": "**Gabarito: E.** No fim da frase (antes de pausa forte), usa-se \"por quê\", separado e com acento: \"Você saiu cedo por quê?\".\n\n- **A:** Correta: \"por que\" separado em pergunta direta.\n- **B:** Correta: \"por que\" separado em pergunta indireta (equivale a \"por que motivo\").\n- **C:** Correta: \"porque\" junto é conjunção causal ou explicativa.\n- **D:** Correta: \"porquê\" junto e acentuado é substantivo (equivale a \"motivo\") e vem com artigo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0105",
  "campos": {
    "comentario": "**Gabarito: B.** Na voz passiva, o verbo \"ser\" assume o tempo do verbo da ativa e o particípio concorda com o novo sujeito. \"Havia aprovado\" é pretérito mais-que-perfeito composto, logo: \"As novas regras **tinham (haviam) sido aprovadas** pela diretoria\".\n\n- **A:** \"foram aprovadas\" corresponde ao pretérito perfeito (\"aprovou\").\n- **C:** \"haviam aprovado\" continua na voz ativa.\n- **D:** \"teriam sido\" é futuro do pretérito composto (\"teria aprovado\").\n- **E:** \"eram aprovadas\" corresponde ao imperfeito (\"aprovava\")."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0106",
  "campos": {
    "comentario": "**Gabarito: C.** Hipótese irreal no passado: pretérito mais-que-perfeito do subjuntivo (\"tivesse encontrado\") combina com futuro do pretérito composto (\"teria sido refeito\").\n\n- **A:** Imperfeito do subjuntivo pede futuro do pretérito: \"corrigiria\".\n- **B:** \"Caso\" exige subjuntivo presente ou imperfeito: \"caso reclame, analisará\" ou \"caso reclamasse, analisaria\".\n- **D:** Com \"voltarão\", o correto é futuro do subjuntivo: \"quando o servidor reiniciar\".\n- **E:** Verbo principal no pretérito pede imperfeito do subjuntivo: \"que revisassem\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0107",
  "campos": {
    "comentario": "**Gabarito: C.** Em composto de substantivo + adjetivo (ou numeral), os dois elementos vão ao plural: obras-primas.\n\n- **A:** Verbo + substantivo: só o segundo varia, \"guarda-chuvas\".\n- **B:** Advérbio + particípio: só o segundo varia, \"abaixo-assinados\".\n- **D:** Verbo + substantivo: \"beija-flores\".\n- **E:** Prefixo + substantivo: \"vice-presidentes\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0108",
  "campos": {
    "comentario": "**Gabarito: B.** O futuro do subjuntivo de \"ver\" é \"vir\": \"quando você vir os resultados\" (já \"vier\" é do verbo \"vir\").\n\n- **A:** \"Propor\" segue \"pôr\": \"se a empresa propuser\".\n- **C:** \"Intervir\" segue \"vir\": \"o diretor interveio\".\n- **D:** \"Reaver\" segue \"haver\" nas formas em que este tem a letra *v*: \"reouveram\".\n- **E:** \"Mediar\" segue \"odiar\" (como ansiar, remediar, incendiar): \"eu medeio\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0109",
  "campos": {
    "comentario": "**Gabarito: A.** O superlativo absoluto sintético erudito parte do radical latino: amicíssimo (*amicus*), paupérrimo (*pauper*), celebérrimo (*celeber*).\n\n- **B:** \"amiguíssimo\" e \"pobríssimo\" são formas populares.\n- **C:** \"pobríssimo\" e \"negríssimo\" são populares (eruditas: paupérrimo, nigérrimo).\n- **D:** \"magríssimo\" é popular (erudita: macérrimo).\n- **E:** \"docíssimo\" e \"negríssimo\" são populares (eruditas: dulcíssimo, nigérrimo)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0110",
  "campos": {
    "comentario": "**Gabarito: C.** \"Conquanto\" é conjunção concessiva, sinônima de \"embora\", e também pede verbo no subjuntivo.\n\n- **A:** \"Porquanto\" é causal ou explicativa (equivale a \"porque\").\n- **B:** \"Desde que\" com subjuntivo exprime condição.\n- **D:** \"Mesmo que\" é concessiva, mas exige subjuntivo (\"mesmo que estivesse\"); \"estava\" é indicativo.\n- **E:** \"Contanto que\" exprime condição."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0111",
  "campos": {
    "comentario": "**Gabarito: Errado.** \"Haver\" no sentido de \"existir\" é impessoal (não tem sujeito) e fica na 3ª pessoa do singular; na locução verbal, essa impessoalidade passa ao auxiliar. O correto é \"**Deve haver** soluções para o problema\". Com \"existir\", que tem sujeito, o plural é obrigatório: \"Devem existir soluções\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0112",
  "campos": {
    "comentario": "**Gabarito: Errado.** As pistas situam o texto antes de 1994, não depois. O cruzado foi a moeda brasileira de 1986 a 1989 (seguido do cruzado novo, até 1990), e o telex é tecnologia de comunicação que caiu em desuso com o fax e a internet. O real só entrou em circulação em julho de 1994. Palavras que nomeiam realidades de uma época ajudam a datar o texto."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "LP-0113",
  "campos": {
    "comentario": "**Gabarito: Certo.** \"Alface\" é substantivo feminino (a alface); \"champanha\" (ou champanhe) e \"eclipse\" são masculinos (o champanha, o eclipse). São casos clássicos de gênero que a fala costuma trocar, como também \"o dó\", \"o guaraná\", \"a cal\" e \"a omoplata\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0001",
  "campos": {
    "comentario": "**Gabarito: D.** Converta tudo para m² e subtraia: 17 × 27.000 = 459.000 m² e 18 × 24.000 = 432.000 m². Diferença: 459.000 − 432.000 = 27.000 m². Como 1 hectare = 10.000 m², 27.000 ÷ 10.000 = **2,7 hectares**.\n\n- **A, B, C e E:** não saem da conta correta. Conferência: 17 × 27 = 459 e 18 × 24 = 432 (em milhares de m²); 459 − 432 = 27 mil m², que só pode ser 2,7 ha. O erro comum é trocar os valores dos dois alqueires ou errar a conversão para hectare."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0002",
  "campos": {
    "comentario": "**Gabarito: C.** A condicional \"se P então Q\" equivale a \"não P ou Q\". Aqui P = \"não tem cão\" e Q = \"caça com gato\"; negando P, fica \"**tem cão ou caça com gato**\". A outra equivalente seria a contrapositiva: \"se não caça com gato, então tem cão\".\n\n- **A:** \"Se tem cão então não caça com gato\" nega as duas partes sem inverter (é a inversa), não é equivalente.\n- **B:** Inverte a ordem e nega só uma parte; também não é equivalente.\n- **D:** A conjunção \"e\" exige as duas verdadeiras ao mesmo tempo, mais forte que a condicional.\n- **E:** Negou a parte errada: o correto é manter \"caça com gato\" afirmativo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0003",
  "campos": {
    "comentario": "**Gabarito: A.** Princípio da casa dos pombos: se todos os 6 consultores atendessem no máximo 14 clientes, o total seria no máximo 6 × 14 = 84, menor que 86. Logo pelo menos um atende mais de 14.\n\n- **B:** Não é obrigatório; por exemplo, 15, 15, 14, 14, 14, 14 soma 86 sem ninguém com 16.\n- **C:** 86 não é múltiplo de 6 (86 ÷ 6 = 14 e resto 2).\n- **D:** Três com 20 somam 60; sobram 26 para os outros três, mas o mínimo deles é 3 × 9 = 27. Impossível.\n- **E:** É possível: três com 9 somam 27; sobram 59 para os outros três, que podem atender 20, 20 e 19."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0004",
  "campos": {
    "comentario": "**Gabarito: A.** Teste quem trabalha com previdência. Se for Hugo, a 1ª e a 2ª afirmativas são verdadeiras (duas, não serve). Se for Mário, a 2ª e a 3ª são verdadeiras (não serve). Se for Lauro, a 1ª e a 2ª são falsas, então a 3ª tem de ser a verdadeira: Mário não é multimercado, logo Mário é ações e **Hugo é multimercado**.\n\n- **B:** Com Hugo na previdência haveria duas afirmativas verdadeiras.\n- **C e D:** Lauro trabalha com previdência.\n- **E:** Com Mário na previdência haveria duas afirmativas verdadeiras; Mário trabalha com ações."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0005",
  "campos": {
    "comentario": "**Gabarito: C.** Suponha 100 funcionários: 65 homens e 35 mulheres. Um quinto das mulheres tem curso superior: 35 ÷ 5 = 7; então 28 mulheres não têm. Entre os sem curso superior, 2/3 são homens, logo as 28 mulheres são 1/3 desse grupo: o grupo tem 84 pessoas, sendo 56 homens. Homens com curso superior: 65 − 56 = **9**, ou 9% dos funcionários.\n\n- **A:** 7% é a porcentagem de **mulheres** com curso superior.\n- **B, D e E:** não fecham as três condições. Conferência: sem superior = 56 + 28 = 84 e 56/84 = 2/3."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0006",
  "campos": {
    "comentario": "**Gabarito: C.** Suponha que Priscila é paulista. Pela 1ª, Joel é capixaba. Pela contrapositiva da 2ª (se Joel é capixaba, Gabriela é carioca), Gabriela é carioca. Pela 3ª, Priscila não é paulista: contradição. Logo **Priscila não é paulista**.\n\n- **A e B:** Com Priscila não paulista, as três sentenças ficam verdadeiras tanto com Gabriela carioca quanto com Gabriela não carioca e Joel não capixaba; nada se deduz sobre Gabriela.\n- **D:** Leva à contradição mostrada acima.\n- **E:** Joel pode ser capixaba (basta Gabriela ser carioca), então não é dedução necessária."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0007",
  "campos": {
    "comentario": "**Gabarito: E.** Ímpares: 222 − 87 = 135. Os 37 grupos ímpar-ímpar usam 37 × 2 = 74 ímpares; sobram 135 − 74 = 61 ímpares, cada um em um grupo misto, que consome 61 pares. Restam 87 − 61 = 26 pares, que formam 26 ÷ 2 = **13** grupos par-par. Conferência: 37 + 61 + 13 = 111 grupos.\n\n- **A:** 74 é o número de bolinhas ímpares nos grupos ímpar-ímpar.\n- **B:** 61 é o número de grupos mistos.\n- **C e D:** não correspondem a nenhuma etapa correta da conta (26 seria o número de bolinhas pares restantes, não de grupos)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0008",
  "campos": {
    "comentario": "**Gabarito: B.** Letras em ordem: A, B, C, N, O. Começando com A há 4! = 24 anagramas e com B outros 24: total 48. Em seguida vêm os que começam com C, depois A: CABNO (49º), CABON (50º) e **CANBO (51º)**, pois após CAB vem CAN, e as letras restantes B e O em ordem dão CANBO primeiro.\n\n- **A:** 50 é a posição de CABON.\n- **C:** 52 é a posição de CANOB.\n- **D e E:** 53 e 54 são CAOBN e CAONB."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0009",
  "campos": {
    "comentario": "**Gabarito: E.** A soma é 5 × 17 = 85 e, em ordem crescente, o 3º número é 23. O 4º e o 5º valem pelo menos 23 cada, então os dois menores somam no máximo 85 − 3 × 23 = 16, e o menor vale no máximo 8. Como o maior é pelo menos 23, a diferença é no mínimo 23 − 8 = **15**. Exemplo que atinge o mínimo: 8, 8, 23, 23, 23.\n\n- **A, B, C e D:** diferenças menores que 15 são impossíveis: exigiriam menor número acima de 8 ou maior abaixo de 23, o que quebra a soma 85 ou a mediana 23."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0010",
  "campos": {
    "comentario": "**Gabarito: A.** Há 6 × 6 = 36 resultados ordenados. Os pares consecutivos são (1,2), (2,3), (3,4), (4,5), (5,6) e seus inversos: 10 casos. Probabilidade: 10/36 = **5/18**.\n\n- **B:** 5/36 conta só uma ordem de cada par, esquecendo os inversos.\n- **C:** 1/3 = 12/36 conta casos demais.\n- **D:** 1/9 = 4/36 conta casos de menos.\n- **E:** 7/36 não corresponde à contagem correta de 10 casos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0011",
  "campos": {
    "comentario": "**Gabarito: A.** Na semana 18 o avanço realizado (cerca de 22%) está abaixo do planejado para a mesma semana (cerca de 35%): a obra está atrasada. A curva do intervalo 3 (projeção pelo caminho crítico) sobe mais rápido e encontra a curva planejada na semana 21.\n\n- **B:** O gráfico mostra avanço realizado antes da semana 18 (já na S17), então não é verdade que não houve progresso.\n- **C:** A projeção do intervalo 3 ultrapassa 35% antes da semana 20.\n- **D:** A obra está atrasada, não adiantada; a recuperação é só projetada para a S21."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0012",
  "campos": {
    "comentario": "**Gabarito: D.** Conte as partes cercadas por cada amigo. O 1º cerca metade do terreno e metade do restante (1/2 e 1/4): 2 partes, sobrando 1/4. O 2º cerca metade dessa sobra (1/8) e um terço do que ainda resta (1/3 de 1/8 = 1/24): mais 2 partes, sobrando 1/8 − 1/24 = 1/12. O 3º divide a sobra em 2 partes. Total: 2 + 2 + 2 = **6 partes**.\n\n- **A, B e C:** 12, 10 e 8 contam partes a mais; cada amigo criou exatamente 2 partes, e as frações (1/2, 1/4, 1/8, 1/24 e duas de 1/24) somam o terreno inteiro."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0013",
  "campos": {
    "comentario": "**Gabarito: C.** Se P1 + P2 + P3 > 1.000 mil e P1 = 100 mil, então P2 + P3 > 900 mil. É a única conclusão garantida, pois só se conhece a soma dos dois.\n\n- **A:** P2 pode faturar menos de 100 mil (ex.: P2 = 50 mil e P3 = 900 mil).\n- **B:** P3 sozinho não precisa passar de 900 mil (ex.: P2 = 500 mil e P3 = 450 mil).\n- **D:** Pelo mesmo exemplo de A, o produto 1 pode não ser o de menor faturamento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0014",
  "campos": {
    "comentario": "**Gabarito: D.** 10% de 50,1 = 5,01; o total cairia para 91,53 − 5,01 = 86,52 mil, valor próximo de 86 mil.\n\n- **A:** Desvio padrão pode ser calculado para qualquer conjunto com valores diferentes; além disso, a média dos seis itens é 91,53 ÷ 6 ≈ 15,26 mil, não 12,3 mil.\n- **B:** (0,23 + 23,5) ÷ 2 ≈ 11,87 mil, menor que 12,3 mil.\n- **C:** 0,9 ÷ 91,53 ≈ 0,98%, cerca de 1%, não 9%."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0015",
  "campos": {
    "comentario": "**Gabarito: B.** São 2 + 3 + 3 + 5 = 13 gravatas: 5 lisas e 8 não lisas. P(1ª não lisa) = 8/13; sem reposição, P(2ª lisa) = 5/12. Produto: 8/13 × 5/12 = 40/156 = 10/39 ≈ **25,64%**.\n\n- **A:** 16,02% é aproximadamente 5/13 × 5/12 (25/156), que usa 5 em vez de 8 na primeira retirada.\n- **C:** 27,78% = 5/18, que não corresponde a 13 gravatas.\n- **D:** 32,04% é o dobro do valor de A, também sem relação com o evento descrito."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0016",
  "campos": {
    "comentario": "**Gabarito: C.** Resolva 80a + 50b = 1.000, ou 8a + 5b = 100, com a e b inteiros não negativos. Como 5b e 100 são múltiplos de 5, a também é: (a, b) = (0, 20), (5, 12) ou (10, 4), com 20, 17 e 14 sacos. O mínimo é 10 de 80 kg e 4 de 50 kg: **14 sacos** (800 + 200 = 1.000 kg).\n\n- **A e B:** Com 10 ou 12 sacos não se chega a exatamente 1.000 kg (12 sacos de 80 kg dão 960 kg; 13 passam de 1.000).\n- **D:** 20 sacos de 50 kg dão 1.000 kg, mas não é o mínimo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0017",
  "campos": {
    "comentario": "**Gabarito: D.** Escala 1:12.000 significa que 1 cm no mapa vale 12.000 cm reais. 35 × 12.000 = 420.000 cm = 4.200 m = **4,2 km**.\n\n- **A:** 420 m é erro de conversão (uma casa decimal a menos).\n- **B e C:** 1.800 m e 3,6 km não saem de 35 × 12.000; 3,6 km corresponderia a 30 cm no mapa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0018",
  "campos": {
    "comentario": "**Gabarito: D.** Velocidade média = distância total ÷ tempo total. Ida: 120 + 50 + 250 = 420 km em 2 + 1 + 4 = 7 h, ou 420 ÷ 7 = **60 km/h**. Volta: os mesmos 420 km em 5 h, 420 ÷ 5 = **84 km/h**.\n\n- **A e C:** Erram a velocidade da ida (48 e 64 km/h não são 420 ÷ 7).\n- **B:** Acerta a ida, mas 72 km/h na volta daria 360 km em 5 h, não 420 km.\n\nCuidado: não se faz a média das velocidades dos trechos (60, 50 e 62,5 km/h); divide-se a distância total pelo tempo total."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0019",
  "campos": {
    "comentario": "**Gabarito: D.** Seja x o total: x = (7/8)x + 7/8. Então x − (7/8)x = 7/8, ou x/8 = 7/8, e x = **7**. Conferência: 7/8 de 7 = 49/8; 49/8 + 7/8 = 56/8 = 7.\n\n- **A, B e C:** não satisfazem a equação. Por exemplo, com 9: (7/8) × 9 + 7/8 = 70/8 = 8,75, diferente de 9."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0020",
  "campos": {
    "comentario": "**Gabarito: D.** A mesma pessoa pode ocupar mais de um papel. Com avô, pai e filho (3 pessoas): o avô e o pai são os dois pais; o pai e o filho são os dois filhos; o avô é o avô e o filho é o neto. Cada um recebe uma maçã: x = **3**.\n\n- **A, B e C:** 7, 6 e 5 contam cada papel como uma pessoa diferente (6 seria a soma 2 + 2 + 1 + 1); são possíveis, mas não são o menor valor."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0021",
  "campos": {
    "comentario": "**Gabarito: B.** No 1º dia percorre 30%; restam 70%. No 2º dia percorre 20% **do restante**: 0,20 × 70% = 14%. Falta 70% − 14% = **56%** (ou 0,7 × 0,8 = 0,56).\n\n- **A:** 60% não considera corretamente os dois descontos sucessivos.\n- **C:** 50% soma 30% + 20% como se os 20% fossem do trajeto inteiro.\n- **D:** 45% não sai de nenhuma leitura correta do enunciado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0022",
  "campos": {
    "comentario": "**Gabarito: D.** A negação de \"Todo A é B\" é \"Algum A não é B\" (basta um contraexemplo para a frase ser falsa).\n\n- **A:** \"Nenhum A é B\" é a proposição contrária, não a negação: as duas podem ser falsas ao mesmo tempo (quando só alguns são programadores).\n- **B:** \"Todo A não é B\" é outra forma de dizer \"nenhum\".\n- **C:** \"Algum A é B\" é compatível com a frase original, não a nega."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0023",
  "campos": {
    "comentario": "**Gabarito: C.** Sejam p = só Python, j = só Java e a = ambos. Dados: p + j + a = 12; Java (j + a) = 3p; a = j/2. Substituindo: j + j/2 = 3p, logo p = j/2. Então j/2 + j + j/2 = 2j = 12, j = 6, a = **3** e p = 3. Conferência: Java = 9 = 3 × 3.\n\n- **A, B e D:** com a = 1, 2 ou 4 teríamos j = 2, 4 ou 8 e p = 1, 2 ou 4, somando 4, 8 ou 16 analistas, e não 12."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0024",
  "campos": {
    "comentario": "**Gabarito: B.** \"Alguns programadores são especialistas em BD\" é uma proposição particular afirmativa, que pode ser invertida: existem especialistas em BD que são programadores.\n\n- **A:** Inverte a inclusão: todo desenvolvedor é programador, mas pode haver programador que não é desenvolvedor.\n- **C:** Generaliza \"alguns\" para \"todos\".\n- **D:** Os programadores especialistas em BD podem estar todos fora do grupo dos desenvolvedores; não há garantia."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0025",
  "campos": {
    "comentario": "**Gabarito: D.** Divisão proporcional: soma das idades 2 + 3 + 5 = 10 partes; cada parte vale 1.000 ÷ 10 = R$ 100. O mais velho (5 anos) recebe 5 × 100 = **R$ 500**.\n\n- **A:** R$ 300 é a parte do filho de 3 anos.\n- **B e C:** R$ 400 e R$ 450 não correspondem a nenhuma das partes (200, 300 e 500)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0026",
  "campos": {
    "comentario": "**Gabarito: B.** Proposição é uma frase declarativa que pode ser julgada verdadeira ou falsa. Item a item:\n\n- **I:** pergunta, não tem valor lógico.\n- **II:** declarativa com valor lógico (verdadeira): é proposição.\n- **III:** sentença aberta; depende do valor de x, então não é proposição.\n- **IV:** ordem (imperativa), não tem valor lógico.\n- **V:** declarativa com valor lógico (falsa): é proposição. Ser falsa não a impede de ser proposição.\n\nSão duas proposições (II e V). Quem marca 3 costuma incluir a sentença aberta III; quem marca 1 esquece que frase falsa também é proposição."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0027",
  "campos": {
    "comentario": "**Gabarito: C.** O número de linhas da tabela-verdade é 2ⁿ, em que n é a quantidade de proposições simples **distintas**. Aqui são p, q, r e s (a negação ~s não cria proposição nova): 2⁴ = **16**.\n\n- **A:** 4 = 2², seria para duas proposições.\n- **B:** 8 = 2³, seria para três (esquece uma das letras).\n- **D:** 32 = 2⁵, conta ~s como se fosse uma quinta proposição.\n- **E:** 64 = 2⁶, seria para seis proposições."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0028",
  "campos": {
    "comentario": "**Gabarito: C.** Comece pela premissa simples: \"a ouvidoria registra\" é falsa. Na 2ª premissa (reclama → registra), consequente falso obriga antecedente falso: o cliente não reclamou. Na 1ª (cai → reclama), de novo consequente falso: o sistema não caiu. É o modus tollens aplicado duas vezes.\n\n- **A:** Se o sistema tivesse caído, o cliente reclamaria e a ouvidoria registraria.\n- **B e D:** Se o cliente tivesse reclamado, a ouvidoria teria registrado, o que contradiz a 3ª premissa.\n- **E:** As premissas permitem concluir, como mostrado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0029",
  "campos": {
    "comentario": "**Gabarito: B.** Em \"p → q\", p é condição suficiente e q é condição **necessária**. Se a graduação é necessária para ser analista, ela fica no consequente: \"se é analista, então tem graduação em TI\".\n\n- **A:** Trata a graduação como condição suficiente (é a recíproca).\n- **C:** Inverte os papéis: diz que ser analista é que seria necessário.\n- **D:** O bicondicional exigiria que a graduação fosse necessária **e** suficiente.\n- **E:** É a inversa da correta (equivale à alternativa A), não à frase original; a contrapositiva certa seria \"se não tem graduação em TI, não é analista\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0030",
  "campos": {
    "comentario": "**Gabarito: C.** Uma condicional só é falsa com antecedente V e consequente F. Para p → (q → p) ser falsa, precisaríamos de p = V e (q → p) = F; mas (q → p) só é falsa com p = F. Como p não pode ser V e F ao mesmo tempo, a proposição nunca é falsa: é **tautologia**.\n\n- **A:** Contradição é sempre falsa; esta é sempre verdadeira.\n- **B:** Contingência teria linhas V e linhas F; aqui as quatro linhas dão V.\n- **D e E:** p e q assumem valor F em algumas linhas, enquanto a proposição é sempre V; logo não é equivalente a nenhuma delas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0031",
  "campos": {
    "comentario": "**Gabarito: C.** A negação de p → q é p ∧ ~q: mantém o antecedente **e** nega o consequente. Fica \"o cliente paga em dia e não recebe desconto\".\n\n- **A:** É a inversa (~p → ~q), outra condicional; não nega a original.\n- **B:** Negou a parte errada: ~p ∧ q.\n- **D:** ~p ∨ q é **equivalente** à condicional original, não a negação.\n- **E:** É a contrapositiva (~q → ~p), também equivalente à original."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0032",
  "campos": {
    "comentario": "**Gabarito: B.** p → q equivale a ~p ∨ q (regra \"nega a primeira ou mantém a segunda\", o mnemônico NEYMAR): \"Marta não é auditora ou Rui é contador\". A outra equivalente seria a contrapositiva: \"se Rui não é contador, Marta não é auditora\".\n\n- **A:** Recíproca (q → p), não equivalente.\n- **C:** p ∧ ~q é a **negação** da condicional.\n- **D:** Inversa (~p → ~q), não equivalente (equivale à recíproca).\n- **E:** p ∨ q não nega o antecedente."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0033",
  "campos": {
    "comentario": "**Gabarito: B.** Lei de De Morgan: ~(p ∨ r) ≡ ~p ∧ ~r. Aqui r = \"não joga damas\", cuja negação é \"joga damas\". Resultado: \"Lia **não** joga xadrez **e** joga damas\".\n\n- **A:** Negou as duas partes, mas manteve o \"ou\".\n- **C:** Trocou o conectivo e negou só a segunda parte.\n- **D:** Trocou o conectivo e negou só a primeira parte.\n- **E:** \"Se joga xadrez, joga damas\" equivale a \"não joga xadrez ou joga damas\", igual à alternativa A."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0034",
  "campos": {
    "comentario": "**Gabarito: B.** Por De Morgan, ~(p ∧ q) ≡ ~p ∨ ~q. E como \"~p ∨ r\" equivale a \"p → r\", temos ~p ∨ ~q ≡ p → ~q: \"se o servidor está online, o backup não foi feito\".\n\n- **A:** Erro clássico de De Morgan: negou as duas partes mas manteve o \"e\".\n- **C:** Não negou nenhuma das partes.\n- **D:** ~q → p equivale a \"q ou p\", que é a alternativa C.\n- **E:** O bicondicional ~p ↔ q é falso quando as duas são falsas (servidor offline e sem backup), caso em que a frase original é verdadeira."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0035",
  "campos": {
    "comentario": "**Gabarito: B.** A negação do bicondicional (p ↔ q) é a disjunção exclusiva \"ou p, ou q\": exatamente uma das duas é verdadeira. Também pode ser escrita como p ↔ ~q.\n\n- **A:** ~p ↔ ~q é **equivalente** ao bicondicional original, não a negação.\n- **C:** p ∧ q é um dos casos em que a original é verdadeira.\n- **D:** p → ~q é verdadeira quando ambas são falsas, caso em que a original também é verdadeira; não é a negação.\n- **E:** ~p ∧ ~q é o outro caso em que a original é verdadeira."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0036",
  "campos": {
    "comentario": "**Gabarito: C.** A negação de \"todo A é B\" é \"algum (pelo menos um) A não é B\": basta um contraexemplo.\n\n- **A e B:** Dizem \"nenhum fez\", que é a proposição contrária, mais forte que a negação (ambas podem ser falsas juntas).\n- **D:** \"Algum fez\" é compatível com \"todos fizeram\".\n- **E:** Muda o sujeito para funcionários de fora da TI, sobre os quais a frase original nada diz."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0037",
  "campos": {
    "comentario": "**Gabarito: B.** A negação de \"nenhum A é B\" é \"algum A é B\": basta um relatório atrasado para a frase original ser falsa.\n\n- **A:** \"Todos com atraso\" é a contrária, exagera a negação.\n- **C:** \"Algum não foi entregue com atraso\" é compatível com a frase original.\n- **D:** \"Nenhum no prazo\" equivale a \"todos com atraso\", como em A.\n- **E:** \"Todos no prazo\" é a própria frase original dita de outro modo."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0038",
  "campos": {
    "comentario": "**Gabarito: C.** \"Algum A é B\" e \"nenhum A é B\" são contraditórias: quando uma é falsa, a outra é verdadeira. Se é falso que algum auditor é economista, então nenhum auditor é economista.\n\n- **A:** \"Todo auditor é economista\" exigiria que auditores (existindo) fossem economistas, o oposto do que se sabe.\n- **B:** É a mesma proposição dada como falsa, apenas invertida.\n- **D:** Afirma que \"algum é\", o que é falso.\n- **E:** Nada se sabe sobre a existência de economistas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0039",
  "campos": {
    "comentario": "**Gabarito: B.** Para negar, troca-se \"existe\" por \"todo\" e nega-se o predicado. Por De Morgan, a negação de \"seguro e rápido\" é \"não é seguro **ou** não é rápido\". Resultado: \"todo sistema não é seguro ou não é rápido\".\n\n- **A:** Manteve o \"e\" (inseguro e lento), mais forte que a negação.\n- **C:** Manteve o \"existe\" e usou \"nem\" (e).\n- **D:** \"Nenhum é seguro\" é mais forte: a negação admite sistemas seguros, desde que não rápidos.\n- **E:** Fez De Morgan certo, mas manteve o quantificador \"algum\"."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0040",
  "campos": {
    "comentario": "**Gabarito: C.** O zero é o elemento neutro da adição: x + 0 = x vale para todo real.\n\n- **A:** Falha, por exemplo, com x = 0,5 (0,25 < 0,5), com x = 0 e com x = 1.\n- **B:** Nenhum quadrado de número real é negativo.\n- **D:** 1/x não existe para x = 0.\n- **E:** x² = −1 não tem solução real (só complexa)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0041",
  "campos": {
    "comentario": "**Gabarito: B.** Em diagramas: o conjunto dos gerentes está dentro do dos economistas, e o dos economistas não tem interseção com o dos engenheiros. Logo gerentes e engenheiros também não se tocam: nenhum gerente é engenheiro.\n\n- **A:** Um gerente engenheiro seria um economista engenheiro, o que a 2ª premissa proíbe.\n- **C:** Pelo mesmo motivo, nenhum engenheiro pode ser gerente.\n- **D:** Não existe economista que seja engenheiro.\n- **E:** A conclusão B é necessária."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0042",
  "campos": {
    "comentario": "**Gabarito: B.** Existe pelo menos um analista que é músico; como todo músico é criativo, esse analista é criativo. Logo alguns analistas são criativos.\n\n- **A:** Só se garante para os analistas músicos; pode haver analista não criativo.\n- **C:** Contradiz a conclusão necessária.\n- **D:** Inverte a 2ª premissa; pode haver criativo que não é músico.\n- **E:** Não é necessário: todos os criativos poderiam ser analistas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0043",
  "campos": {
    "comentario": "**Gabarito: C.** A forma \"p → q; q; logo p\" é a falácia da afirmação do consequente: o sistema pode ser seguro por outro motivo, sem estar atualizado.\n\n- **A:** Modus ponens afirma o **antecedente**: p → q; p; logo q.\n- **B:** Modus tollens nega o consequente: p → q; ~q; logo ~p.\n- **D:** O argumento é mesmo inválido, mas a negação do antecedente é outra falácia: p → q; ~p; logo ~q.\n- **E:** Silogismo disjuntivo parte de um \"ou\": p ∨ q; ~p; logo q."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0044",
  "campos": {
    "comentario": "**Gabarito: B.** Comece pela premissa simples: Carla vai. Em \"se Bruno vai, Carla não vai\", o consequente é falso, então o antecedente é falso: Bruno não vai. Na disjunção \"ou Ana, ou Bruno\" pelo menos um deve ir; como Bruno não vai, Ana vai.\n\n- **A e C:** Bruno ir tornaria falsa a 2ª premissa, já que Carla vai.\n- **D:** Deixaria a disjunção falsa e contradiz \"Carla vai\".\n- **E:** Contradiz diretamente a 3ª premissa."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0045",
  "campos": {
    "comentario": "**Gabarito: C.** Validade é propriedade da **forma** do argumento: ele é válido quando a verdade das premissas garante a da conclusão, isto é, é impossível ter premissas todas verdadeiras e conclusão falsa.\n\n- **A:** Premissas verdadeiras não bastam; a conclusão pode não decorrer delas.\n- **B:** Conclusão verdadeira pode aparecer em argumento inválido.\n- **D:** Tudo verdadeiro no mundo real não garante validade; e um argumento válido pode ter premissas falsas.\n- **E:** O número de premissas é irrelevante."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0046",
  "campos": {
    "comentario": "**Gabarito: D.** Um conjunto com n elementos tem 2ⁿ subconjuntos (cada elemento entra ou não entra). 2⁵ = **32**, incluindo o conjunto vazio e o próprio A.\n\n- **A:** 10 = 5 × 2 (ou C(5,2), só os subconjuntos de 2 elementos).\n- **B:** 25 = 5², troca base e expoente.\n- **C:** 31 exclui o vazio (subconjuntos não vazios).\n- **E:** 120 = 5!, que conta permutações, não subconjuntos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0047",
  "campos": {
    "comentario": "**Gabarito: C.** Estudam pelo menos um idioma: 50 − 12 = 38. Estudam os dois: 28 + 20 − 38 = 10. Apenas inglês: 28 − 10 = **18**. Conferência: 18 + 10 + 10 + 12 = 50.\n\n- **A:** 8 = 28 − 20, subtração sem considerar a interseção.\n- **B:** 10 é o número dos que estudam os dois (e também só espanhol).\n- **D:** 20 é o total de espanhol.\n- **E:** 28 é o total de inglês, incluindo quem também estuda espanhol."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0048",
  "campos": {
    "comentario": "**Gabarito: A.** A ∪ B = {1, 2, 3, 4, 5}. O complementar em U = {1, 2, 3, 4, 5, 6} é o que sobra: **{6}**.\n\n- **B:** {5, 6} é o complementar só de A.\n- **C:** {1, 2} é A − B.\n- **D:** Seria vazio apenas se A ∪ B = U.\n- **E:** {3, 4} é A ∩ B."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0049",
  "campos": {
    "comentario": "**Gabarito: C.** Usam pelo menos um: 100% − 10% = 90%. Pela união: 70 + 50 − x = 90, logo x = **30%**. Conferência: só Linux 40%, só Windows 20%, ambos 30%, nenhum 10%: total 100%.\n\n- **A:** 10% é quem não usa nenhum.\n- **B:** 20% é quem usa só Windows (ou 70 + 50 − 100, esquecendo os 10% de fora).\n- **D:** 40% é quem usa só Linux.\n- **E:** 50% é o total de Windows."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0050",
  "campos": {
    "comentario": "**Gabarito: C.** A interseção é mínima quando a união é máxima (todos os 120 clientes têm pelo menos um produto): 80 + 70 − 120 = **30**.\n\n- **A e B:** Com interseção 10 ou 20, a união seria 140 ou 130, mais que os 120 clientes.\n- **D:** 50 não é mínimo nem máximo.\n- **E:** 70 é o **máximo** possível (todos com cheque especial também têm cartão)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0051",
  "campos": {
    "comentario": "**Gabarito: D.** Todo natural n pode ser escrito como a fração n/1, então ℕ está contido em ℚ.\n\n- **A:** 0,333... é dízima periódica, igual a 1/3: racional.\n- **B:** √9 = 3, racional.\n- **C:** π é irracional (decimal infinito não periódico).\n- **E:** Contraexemplo: √2 + (−√2) = 0, que é racional."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0052",
  "campos": {
    "comentario": "**Gabarito: C.** Os alarmes coincidem a cada MMC(15, 20) minutos. 15 = 3 × 5 e 20 = 2² × 5, logo MMC = 2² × 3 × 5 = 60 min. 8h + 60 min = **9h**.\n\n- **A:** 35 = 15 + 20, soma dos períodos, que não é múltiplo de nenhum deles.\n- **B:** 45 min é múltiplo de 15, mas não de 20.\n- **D:** 80 min é múltiplo de 20, mas não de 15.\n- **E:** Às 10h (120 min) eles também tocam juntos, mas não pela primeira vez."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0053",
  "campos": {
    "comentario": "**Gabarito: C.** Após gastar 2/5 sobram 3/5. Gastando 1/3 do restante, sobram 2/3 de 3/5 = 2/5 da mesada. Então (2/5) × M = 120 e M = 120 × 5/2 = **R$ 300**. Conferência: gasta 120, sobram 180; gasta 60, sobram 120.\n\n- **A:** Com R$ 200 sobrariam R$ 80.\n- **B:** Com R$ 250 sobrariam R$ 100.\n- **D:** Com R$ 360 sobrariam R$ 144.\n- **E:** R$ 450 trataria o 1/3 como fração da mesada inteira (1 − 2/5 − 1/3 = 4/15; 120 ÷ 4/15 = 450)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0054",
  "campos": {
    "comentario": "**Gabarito: A.** Dízima composta: seja x = 1,2333... Então 10x = 12,333... e 100x = 123,333...; subtraindo, 90x = 111, x = 111/90 = **37/30** (simplificando por 3). Conferência: 37 ÷ 30 = 1,2333...\n\n- **B:** 123/99 = 1,2424..., seria a geratriz se o período fosse \"24\".\n- **C:** 123/90 = 1,3666...; o numerador correto é 123 − 12 = 111 (subtrai-se a parte que não se repete), e 111/90 simplifica para 37/30.\n- **D:** 12/9 = 1,333...\n- **E:** 37/33 = 1,1212..."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0055",
  "campos": {
    "comentario": "**Gabarito: D.** Fatore: 180 = 2² × 3² × 5¹. O número de divisores positivos é o produto dos expoentes somados de 1: (2 + 1)(2 + 1)(1 + 1) = 3 × 3 × 2 = **18**.\n\n- **A:** 9 = 3 × 3 esquece o fator 5.\n- **B:** 12 seria, por exemplo, de 2² × 3 × 5 = 60.\n- **C e E:** 15 e 20 não saem da fatoração correta."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0056",
  "campos": {
    "comentario": "**Gabarito: B.** Aumentos e descontos sucessivos se multiplicam: 4.000 × 1,15 = 4.600; 4.600 × 0,85 = **3.910**. O fator total é 1,15 × 0,85 = 0,9775, uma perda de 2,25%, porque o desconto incide sobre um valor maior que o original.\n\n- **A:** R$ 4.000 supõe que +15% e −15% se anulam, o que não acontece.\n- **C, D e E:** não saem da conta; R$ 4.090 teria o sinal trocado (o resultado fica abaixo, não acima, do preço inicial: 4.000 − 90 = 3.910)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0057",
  "campos": {
    "comentario": "**Gabarito: D.** Após 30% de desconto paga-se 70% do preço: 0,7 × P = 840, logo P = 840 ÷ 0,7 = **R$ 1.200**. Conferência: 30% de 1.200 = 360; 1.200 − 360 = 840.\n\n- **A:** R$ 1.092 = 840 × 1,3: erro clássico de somar 30% ao preço com desconto em vez de dividir por 0,7.\n- **B, C e E:** com esses preços, 70% daria 770, 826 e 875, e não 840."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0058",
  "campos": {
    "comentario": "**Gabarito: B.** Multiplique os fatores: 1,05 × 1,10 = 1,155, ou seja, aumento único de **15,5%**. O 0,5% extra vem dos 10% aplicados sobre os 5% do primeiro aumento (5% × 10% = 0,5%).\n\n- **A:** 15% apenas soma as taxas, ignorando o efeito \"aumento sobre aumento\".\n- **C:** 15,05% erra a casa decimal do termo cruzado (0,05 em vez de 0,5).\n- **D e E:** não correspondem a 1,05 × 1,10."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0059",
  "campos": {
    "comentario": "**Gabarito: D.** Variação relativa = (novo − antigo) ÷ antigo = (2,5 − 2) ÷ 2 = 0,25 = **25%**. Em pontos percentuais, o aumento foi de 0,5 p.p.; são medidas diferentes.\n\n- **A:** 0,5 é a variação em pontos percentuais, não a variação relativa.\n- **B:** 5% não sai de nenhuma das duas contas.\n- **C:** 20% divide pela taxa nova (0,5 ÷ 2,5) em vez da antiga.\n- **E:** 50% não corresponde a 0,5 ÷ 2."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0060",
  "campos": {
    "comentario": "**Gabarito: C.** Fator acumulado: 1,20 × 0,75 = 0,90. Então 0,90 × N = 18.000 e N = 18.000 ÷ 0,9 = **20.000**. Conferência: 20.000 × 1,2 = 24.000; 24.000 × 0,75 = 18.000.\n\n- **A:** 18.000 é o valor final.\n- **B:** Aproximadamente 18.000 ÷ 0,95, tratando +20% e −25% como queda de 5%.\n- **D:** 21.600 = 18.000 × 1,2, aplica o aumento ao valor final.\n- **E:** 22.500 = 18.000 ÷ 0,8, não corresponde ao fator 0,9."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0061",
  "campos": {
    "comentario": "**Gabarito: C.** Juros simples: J = C × i × t = 6.000 × 0,015 × 10. Por mês: 6.000 × 0,015 = 90; em 10 meses: 90 × 10 = **R$ 900**.\n\n- **A:** R$ 600 usaria taxa de 1% a.m.\n- **B:** R$ 750 usaria 1,25% a.m.\n- **D e E:** R$ 960 e R$ 1.050 usariam 1,6% e 1,75% a.m.; nenhum corresponde aos dados."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0062",
  "campos": {
    "comentario": "**Gabarito: C.** Juros compostos: M = C × (1 + i)ⁿ = 20.000 × 1,1³. Como 1,1² = 1,21 e 1,1³ = 1,331, M = 20.000 × 1,331 = **R$ 26.620**. Ano a ano: 22.000, 24.200, 26.620.\n\n- **A:** R$ 26.000 é o montante a juros **simples** (20.000 + 3 × 2.000).\n- **B, D e E:** não correspondem a 1,1³; lembre que o composto supera o simples em prazos maiores que um período, mas aqui só por 620."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0063",
  "campos": {
    "comentario": "**Gabarito: C.** Para triplicar, o montante é 3C, logo os juros são J = 2C. Em juros simples, J = C × i × t: 2C = C × 0,05 × t, então t = 2 ÷ 0,05 = **40 meses**.\n\n- **A:** 20 meses é o tempo para **dobrar** (J = C).\n- **E:** 60 meses = 3 ÷ 0,05 confunde montante com juros; em 60 meses o capital quadruplica.\n- **B e D:** em 30 e 50 meses os juros seriam 1,5C e 2,5C."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0064",
  "campos": {
    "comentario": "**Gabarito: C.** Um ano tem 2 semestres; no regime composto: (1 + 0,10)² − 1 = 1,21 − 1 = 0,21 = **21% a.a.**\n\n- **A:** 20% é a taxa proporcional (regime simples: 2 × 10%).\n- **B, D e E:** não correspondem a 1,1². O extra de 1% sobre os 20% vem dos juros sobre juros (10% de 10%)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0065",
  "campos": {
    "comentario": "**Gabarito: A.** Taxa real: (1 + nominal) ÷ (1 + inflação) − 1 = 1,12 ÷ 1,05 − 1 ≈ 1,0667 − 1 = **6,67%**. Conferência: 1,05 × 1,0667 ≈ 1,12.\n\n- **B:** 7% é a subtração simples (12 − 5), que só aproxima; o correto é dividir os fatores.\n- **C e D:** não saem de 1,12 ÷ 1,05.\n- **E:** 17% soma as taxas, o contrário do que se quer."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0066",
  "campos": {
    "comentario": "**Gabarito: D.** Soma das partes: 2 + 3 + 4 = 9. Constante: 4.500 ÷ 9 = 500. Partes: 1.000, 1.500 e 2.000. A maior é 4 × 500 = **R$ 2.000**.\n\n- **A:** R$ 1.000 é a menor parte.\n- **B:** R$ 1.500 é a parte do meio.\n- **C e E:** R$ 1.800 e R$ 2.250 (metade do total) não são nenhuma das partes."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0067",
  "campos": {
    "comentario": "**Gabarito: C.** Inversamente proporcional a 20, 30 e 60 é diretamente proporcional a 1/20, 1/30 e 1/60. Multiplicando por 60: 3, 2 e 1 (soma 6). Constante: 24.000 ÷ 6 = 4.000. O mais novo (20 anos) recebe 3 × 4.000 = **R$ 12.000**; os outros, 8.000 e 4.000.\n\n- **A:** R$ 4.000 é a parte do mais velho (60 anos).\n- **B:** R$ 8.000 é a parte do herdeiro de 30 anos.\n- **D e E:** não correspondem a nenhuma parte; na divisão **direta** o mais novo receberia 24.000 × 20/110 ≈ 4.364."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0068",
  "campos": {
    "comentario": "**Gabarito: D.** Regra de três composta. Menos impressoras, mais tempo (inversa): fator 8/5. Mais páginas, mais tempo (direta): fator 3.000/2.400 = 1,25. Tempo = 15 × 1,6 × 1,25 = **30 min**. Conferência: cada impressora faz 2.400 ÷ (8 × 15) = 20 páginas/min; 5 fazem 100 páginas/min; 3.000 ÷ 100 = 30.\n\n- **B:** 24 min = 15 × 8/5, ajusta só as impressoras e esquece as páginas.\n- **A, C e E:** não saem das proporções corretas (tratar impressoras como grandeza direta daria menos de 15 min)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0069",
  "campos": {
    "comentario": "**Gabarito: C.** Se x/y = 2/7, então x = 2k e y = 7k. x + y = 9k = 54, logo k = 6, x = 12 e y = 42. y − x = 5k = **30**.\n\n- **A:** 12 é o valor de x.\n- **E:** 42 é o valor de y.\n- **B e D:** 24 e 36 seriam 4k e 6k, que não correspondem a y − x."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0070",
  "campos": {
    "comentario": "**Gabarito: B.** Some as produtividades: o primeiro faz 1/10 do lote por hora e o segundo 1/15. Juntos: 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 do lote por hora, ou seja, **6 h**. Atalho: produto ÷ soma = 150 ÷ 25.\n\n- **A:** 5 h é a diferença dos tempos.\n- **C:** 7,5 h não corresponde a nenhuma conta válida.\n- **D:** 12,5 h é a média dos tempos; juntos eles têm de gastar menos que o mais rápido sozinho (10 h).\n- **E:** 25 h é a soma dos tempos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0071",
  "campos": {
    "comentario": "**Gabarito: C.** Distância real = distância no mapa × denominador da escala: 12 × 12.000 = 144.000 cm. Convertendo: 144.000 cm = 1.440 m = **1,44 km**.\n\n- **A:** 144 m erra a conversão de cm para m (dividiu por 1.000).\n- **B:** 1,2 km corresponderia a 10 cm no mapa.\n- **D e E:** 14,4 km e 144 km erram casas na conversão para km."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0072",
  "campos": {
    "comentario": "**Gabarito: C.** 1 hectare = 10.000 m² (um quadrado de 100 m de lado). 3,2 × 10.000 = **32.000 m²**.\n\n- **A:** Usa 1 ha = 100 m², que é a definição do are.\n- **B:** Usa 1 ha = 1.000 m².\n- **D:** Usa 1 ha = 100.000 m².\n- **E:** Usa 1 ha = 1.000.000 m², que é 1 km²."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0073",
  "campos": {
    "comentario": "**Gabarito: B.** Como 1 dm³ = 1 L, converta tudo para decímetros: 1,2 m = 12 dm; 80 cm = 8 dm; 50 cm = 5 dm. Volume = 12 × 8 × 5 = 480 dm³ = **480 L**. Em metros: 1,2 × 0,8 × 0,5 = 0,48 m³, e 1 m³ = 1.000 L.\n\n- **A e E:** 48 e 4,8 erram casas decimais para menos.\n- **C e D:** 4.800 e 48.000 erram para mais (por exemplo, usando 1 m³ = 10.000 L)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0074",
  "campos": {
    "comentario": "**Gabarito: A.** 2,6 h não são 2 h 60 min nem 2 h 06 min: 0,6 h = 0,6 × 60 = 36 min. Então 14h48 + 2h36 = 16h84 = **17h24**.\n\n- **B:** 17h14 trata 2,6 h como 2 h 26 min.\n- **C:** 17h08 não corresponde a nenhuma conversão válida (2 h 20 min).\n- **D:** 17h36 soma errado os minutos.\n- **E:** 16h54 trata 2,6 h como 2 h 06 min."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0075",
  "campos": {
    "comentario": "**Gabarito: C.** Escala = medida no desenho ÷ medida real, nas mesmas unidades. 60 m = 6.000 cm; 3 ÷ 6.000 = 1 ÷ 2.000. Escala **1:2.000**.\n\n- **A:** 1:20 divide 60 por 3 sem converter metros em centímetros.\n- **B e D:** 1:200 e 1:20.000 erram a conversão (1 m = 100 cm).\n- **E:** 1:600 não sai de 6.000 ÷ 3."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0076",
  "campos": {
    "comentario": "**Gabarito: A.** Velocidade média = distância total ÷ tempo total. Subida: 6 ÷ 12 = 0,5 h (30 min). Descida: 6 ÷ 36 = 1/6 h (10 min). Total: 12 km em 40 min = 2/3 h, ou 12 ÷ (2/3) = **18 km/h**. Para distâncias iguais vale a média harmônica: 2 × 12 × 36 ÷ (12 + 36) = 864 ÷ 48 = 18.\n\n- **D:** 24 km/h é a média aritmética das velocidades, pegadinha clássica: o ciclista passa mais tempo no trecho lento.\n- **B, C e E:** não correspondem a 12 km em 40 min."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0077",
  "campos": {
    "comentario": "**Gabarito: C.** Para passar de km/h para m/s divide-se por 3,6: 90 ÷ 3,6 = **25 m/s** (90 km/h = 90.000 m em 3.600 s).\n\n- **A:** 15 m/s equivalem a 54 km/h.\n- **B:** 20 m/s equivalem a 72 km/h.\n- **D:** 30 m/s equivalem a 108 km/h.\n- **E:** 324 = 90 × 3,6, multiplicou em vez de dividir."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0078",
  "campos": {
    "comentario": "**Gabarito: B.** Distância total: 240 + 160 = 400 km. Tempo total, contando a parada: 3 + 1 + 2 = 6 h. Velocidade média: 400 ÷ 6 ≈ **66,7 km/h**.\n\n- **A:** 60 km/h não corresponde aos dados (seriam 360 km em 6 h).\n- **C:** 70 km/h não sai de nenhuma conta válida.\n- **D:** 80 km/h ignora a parada (400 ÷ 5); também é a velocidade de cada trecho em movimento.\n- **E:** 100 km/h divide por 4 h."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0079",
  "campos": {
    "comentario": "**Gabarito: B.** Em sentidos opostos as velocidades se somam: afastam-se a 4 + 6 = 10 m/s. Tempo = 1.000 m ÷ 10 m/s = **100 s**. Conferência: um percorre 400 m e o outro 600 m.\n\n- **A:** 50 s daria só 500 m de separação.\n- **C:** 125 s não corresponde a 10 m/s.\n- **D:** 166 s é 1.000 ÷ 6, usa só a velocidade do mais rápido.\n- **E:** 250 s é 1.000 ÷ 4, usa só a do mais lento."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0080",
  "campos": {
    "comentario": "**Gabarito: B.** 54 km/h ÷ 3,6 = 15 m/s. Em 40 s o trem percorre 15 × 40 = 600 m. Para atravessar **totalmente**, ele percorre o túnel mais o próprio comprimento: túnel + 150 = 600, logo túnel = **450 m**.\n\n- **A:** 300 m subtrai o comprimento do trem duas vezes.\n- **C:** 600 m esquece de descontar o trem.\n- **D:** 750 m soma o trem em vez de subtrair.\n- **E:** 2.010 = 54 × 40 − 150, sem converter km/h para m/s."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0081",
  "campos": {
    "comentario": "**Gabarito: C.** Multiplique tudo pelo MMC 6: 3(x + 1) − 2(x − 3) = 12. Distribuindo: 3x + 3 − 2x + 6 = 12 (atenção: −2 × −3 = +6). Então x + 9 = 12 e x = **3**. Conferência: (3 + 1)/2 − (3 − 3)/3 = 2 − 0 = 2.\n\n- **A, B, D e E:** substituindo, o lado esquerdo dá 5/3 (x = 1), 11/6 (x = 2), 13/6 (x = 4) e 7/3 (x = 5), nenhum igual a 2."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0082",
  "campos": {
    "comentario": "**Gabarito: C.** Depois da segunda restam 3/5 do relatório. Na terça ele lê metade do restante, sobrando 1/2 × 3/5 = 3/10. Então (3/10) × x = 36 e x = **120 páginas**. Conferência: lê 48, restam 72; lê 36, restam 36.\n\n- **A:** Com 90 páginas faltariam 27.\n- **B:** Com 100 faltariam 30.\n- **D:** Com 150 faltariam 45.\n- **E:** Com 180 faltariam 54.\n\nErro comum: tratar o 1/2 como metade do relatório inteiro (1 − 2/5 − 1/2 = 1/10), o que daria 360 páginas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0083",
  "campos": {
    "comentario": "**Gabarito: C.** Sistema: c + m = 42 e 4c + 2m = 136. Atalho: se todos fossem motos, haveria 84 rodas; faltam 136 − 84 = 52, e cada carro acrescenta 2 rodas, logo 26 carros e 42 − 26 = **16 motos**. Conferência: 26 × 4 + 16 × 2 = 104 + 32 = 136.\n\n- **D:** 26 é o número de **carros**.\n- **A, B e E:** com 10, 14 ou 28 motos as rodas somariam 148, 140 ou 112."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0084",
  "campos": {
    "comentario": "**Gabarito: C.** Relações de Girard: soma das raízes = −b/a = −(−12)/3 = **4**. Conferência: dividindo por 3, x² − 4x + 3 = 0, raízes 1 e 3, soma 4.\n\n- **A:** −4 esquece o sinal de −b.\n- **B:** 3 é o **produto** das raízes (c/a = 9/3) e também uma das raízes.\n- **D:** 9 é o coeficiente c.\n- **E:** 12 é −b, sem dividir por a."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0085",
  "campos": {
    "comentario": "**Gabarito: C.** Hoje: r + s = 46. Há 5 anos: r − 5 = 2(s − 5), logo r = 2s − 5. Substituindo: 2s − 5 + s = 46, 3s = 51, s = 17 e r = **29**. Conferência: há 5 anos, 24 e 12 (o dobro).\n\n- **A, B, D e E:** com Rita de 27, 28, 30 ou 32 anos, Sofia teria 19, 18, 16 ou 14, e há 5 anos as idades seriam 22 e 14, 23 e 13, 25 e 11, 27 e 9: em nenhum caso uma é o dobro da outra."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0086",
  "campos": {
    "comentario": "**Gabarito: B.** Com avó, mãe e filha, a mãe ocupa dois papéis: é mãe (da filha) e filha (da avó). Assim há duas mães (avó e mãe) e duas filhas (mãe e filha) em apenas **3 pessoas**, o que bate com os 3 pratos.\n\n- **A:** Com 2 pessoas haveria só uma mãe e uma filha.\n- **C:** 4 pessoas pediriam 4 pratos; é a leitura ingênua (2 + 2).\n- **D e E:** contrariam o número de pratos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0087",
  "campos": {
    "comentario": "**Gabarito: B.** \"O ontem de amanhã\" é hoje (amanhã menos um dia). Logo hoje é sábado; amanhã é domingo e depois de amanhã é **segunda**.\n\n- **A:** Domingo é amanhã.\n- **C:** Terça vem um dia depois de depois de amanhã (três dias após hoje).\n- **D e E:** quinta e sexta são dias anteriores a hoje, não posteriores."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0088",
  "campos": {
    "comentario": "**Gabarito: C.** Davi não está em TI nem em Câmbio, então está em Crédito. Elisa não está em TI e Crédito já é de Davi, então está em Câmbio. Sobra TI para **Fábio**.\n\n- **A:** O enunciado diz que Davi não trabalha em Câmbio.\n- **B:** Crédito é de Davi; Elisa fica com Câmbio.\n- **D:** Crédito é de Davi; Fábio fica com TI.\n- **E:** O enunciado diz que Elisa não trabalha em TI."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0089",
  "campos": {
    "comentario": "**Gabarito: B.** Teste cada culpado. Se foi Y: X diz a verdade, Y mente e Z diz a verdade, exatamente um mentiroso (serve). Se foi X ou Z: X e Z mentem (acusam Y) e só Y diz a verdade, dois mentirosos (não serve). Logo foi **Y**. Outro caminho: X e Z dizem a mesma coisa; se mentissem seriam dois mentirosos, então dizem a verdade.\n\n- **A e C:** Nesses casos haveria dois mentirosos (X e Z).\n- **D:** Z está descartado pelo mesmo motivo.\n- **E:** A condição de exatamente um mentiroso determina o culpado."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0090",
  "campos": {
    "comentario": "**Gabarito: C.** Princípio da casa dos pombos, pensando no pior caso: é possível tirar 2 canetas de cada uma das 3 cores (6 canetas) sem ter 3 iguais. A 7ª caneta, de qualquer cor, completa um trio. Resposta: 2 × 3 + 1 = **7**.\n\n- **A:** Com 3 canetas elas podem ser uma de cada cor.\n- **B:** Com 6 ainda pode haver 2 de cada cor.\n- **D:** 10 também garante, mas não é o mínimo.\n- **E:** 19 seria o necessário para garantir 3 canetas **azuis** (pior caso: 7 pretas e 9 vermelhas antes), não 3 de uma mesma cor qualquer."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0091",
  "campos": {
    "comentario": "**Gabarito: C.** Termo geral da PA: aₙ = a₁ + (n − 1) × r, com a₁ = 7 e r = 12 − 7 = 5. a₃₀ = 7 + 29 × 5 = 7 + 145 = **152**.\n\n- **A:** 147 usa 28 × 5 (é o 29º termo).\n- **B:** 150 = 30 × 5, esquece o primeiro termo.\n- **D:** 155 não é termo da PA (os termos terminam em 2 ou 7).\n- **E:** 157 usa 30 × 5 em vez de 29 × 5 (é o 31º termo)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0092",
  "campos": {
    "comentario": "**Gabarito: C.** Os ímpares formam a PA 1, 3, 5, ..., com a₅₀ = 1 + 49 × 2 = 99. Soma = (a₁ + aₙ) × n ÷ 2 = (1 + 99) × 50 ÷ 2 = **2.500**. Atalho: a soma dos n primeiros ímpares é n².\n\n- **A:** 1.250 divide por 2 uma vez a mais.\n- **B:** 2.450 não corresponde à soma (seria a soma dos pares de 2 a 98).\n- **D:** 2.550 é a soma dos 50 primeiros **pares** (50 × 51).\n- **E:** 5.000 esquece de dividir por 2."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0093",
  "campos": {
    "comentario": "**Gabarito: D.** Cada termo é o dobro do anterior mais 1 (ou as diferenças dobram: 2, 4, 8, 16, 32). Então 31 × 2 + 1 = 31 + 32 = **63**. Os termos são 2ⁿ − 1: 1, 3, 7, 15, 31, 63.\n\n- **A:** 47 repete a diferença anterior (31 + 16).\n- **B:** 51 não segue nenhum padrão da sequência.\n- **C:** 62 só dobra, sem somar 1.\n- **E:** 64 é 2⁶, sem subtrair 1."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0094",
  "campos": {
    "comentario": "**Gabarito: A.** O ciclo tem 3 letras. 100 ÷ 3 = 33 ciclos completos (99 letras) e resto 1: a 100ª letra é a 1ª do ciclo, **A**.\n\n- **B:** B aparece nas posições de resto 2 (como a 101ª).\n- **C:** C aparece nas posições múltiplas de 3 (como a 99ª).\n- **D e E:** A sequência é periódica, então a posição determina a letra."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0095",
  "campos": {
    "comentario": "**Gabarito: C.** Termo geral da PG: aₙ = a₁ × qⁿ⁻¹, com a₁ = 2 e q = 6 ÷ 2 = 3. a₆ = 2 × 3⁵ = 2 × 243 = **486**. Termos: 2, 6, 18, 54, 162, 486.\n\n- **A:** 162 é o 5º termo.\n- **B:** 243 é 3⁵, sem multiplicar por a₁ = 2.\n- **D:** 729 é 3⁶.\n- **E:** 1.458 é o 7º termo (usa q⁶)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0096",
  "campos": {
    "comentario": "**Gabarito: C.** A ordem importa e não há repetição (arranjo): 5 opções para o 1º algarismo, 4 para o 2º, 3 para o 3º e 2 para o 4º. 5 × 4 × 3 × 2 = **120**.\n\n- **A:** 24 = 4!, como se houvesse só 4 algarismos disponíveis.\n- **B:** 60 = 5 × 4 × 3, números de 3 algarismos.\n- **D:** 625 = 5⁴, permite repetição.\n- **E:** 3.125 = 5⁵, cinco posições com repetição."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0097",
  "campos": {
    "comentario": "**Gabarito: D.** PROVA tem 5 letras distintas; os anagramas são as permutações: 5! = 5 × 4 × 3 × 2 × 1 = **120**.\n\n- **A:** 24 = 4!.\n- **B:** 60 = 5!/2, seria o caso de uma letra repetida duas vezes.\n- **C:** 100 não corresponde a nenhuma contagem.\n- **E:** 720 = 6!, para palavra de 6 letras distintas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0098",
  "campos": {
    "comentario": "**Gabarito: B.** Sem funções distintas a ordem não importa: combinação. C(7,4) = C(7,3) = (7 × 6 × 5) ÷ (3 × 2 × 1) = 210 ÷ 6 = **35**.\n\n- **A:** 28 = 7 × 4, multiplica os números do enunciado.\n- **C:** 210 = 7 × 6 × 5, esquece de dividir por 3!.\n- **D:** 840 = 7 × 6 × 5 × 4 é o arranjo, em que a ordem importaria.\n- **E:** 5.040 = 7!, permutação de todos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0099",
  "campos": {
    "comentario": "**Gabarito: C.** Na permutação circular só importa a posição relativa: fixa-se uma pessoa e permutam-se as outras. PC₆ = (6 − 1)! = 5! = **120**.\n\n- **A:** 36 = 6 × 6.\n- **B:** 60 seria 5!/2, quando também não se distingue o sentido (caso de colares).\n- **D:** 360 = 6!/2.\n- **E:** 720 = 6!, permutação em fila, que conta cada roda 6 vezes."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0100",
  "campos": {
    "comentario": "**Gabarito: A.** Princípio multiplicativo com repetição: 26 × 26 para as letras e 10 × 10 × 10 para os algarismos. 676 × 1.000 = **676.000**.\n\n- **B:** 468.000 = 26 × 25 × 10 × 9 × 8, sem repetição de letras nem de algarismos.\n- **C:** 67.600 usa só 2 algarismos (676 × 100).\n- **D:** 650.000 = 26 × 25 × 1.000, sem repetição de letras.\n- **E:** 6.760.000 usa 4 algarismos (676 × 10.000)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0101",
  "campos": {
    "comentario": "**Gabarito: B.** Sem reposição: P(1ª branca) = 4/10; P(2ª branca) = 3/9. Produto: 12/90 = **2/15**. Por combinação: C(4,2) ÷ C(10,2) = 6 ÷ 45 = 2/15.\n\n- **A:** 4/25 = (4/10)², seria **com** reposição.\n- **C:** 1/5 não corresponde ao evento.\n- **D:** 2/5 é só a probabilidade da primeira branca.\n- **E:** 4/15 é o dobro da correta (multiplica por 2 sem motivo: a ordem não gera casos novos quando as duas são brancas)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0102",
  "campos": {
    "comentario": "**Gabarito: B.** Dos 36 resultados ordenados, somam 8: (2,6), (3,5), (4,4), (5,3) e (6,2). São 5 casos: **5/36**.\n\n- **A:** 1/6 = 6/36 é a probabilidade da soma 7.\n- **C:** 1/9 = 4/36 é a da soma 5 ou da soma 9.\n- **D:** 7/36 não é probabilidade de nenhuma soma (o máximo é 6/36).\n- **E:** 1/12 = 3/36 é a da soma 4 ou 10 (ou conta só pares não ordenados)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0103",
  "campos": {
    "comentario": "**Gabarito: C.** P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Por serem independentes, P(A ∩ B) = 0,5 × 0,4 = 0,2. Então 0,5 + 0,4 − 0,2 = **0,7**. Conferência pelo complementar: 1 − 0,5 × 0,6 = 0,7.\n\n- **A:** 0,2 é a interseção.\n- **B:** 0,5 é só P(A).\n- **D:** 0,8 não corresponde à fórmula.\n- **E:** 0,9 soma sem subtrair a interseção (valeria só para eventos mutuamente exclusivos)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0104",
  "campos": {
    "comentario": "**Gabarito: A.** Há duas ordens possíveis: desenvolvimento e depois infraestrutura (8/12 × 4/11 = 32/132) ou o contrário (4/12 × 8/11 = 32/132). Soma: 64/132 = **16/33**. Por combinação: (8 × 4) ÷ C(12,2) = 32 ÷ 66 = 16/33.\n\n- **B:** 8/33 = 32/132 considera só uma das ordens.\n- **C, D e E:** 1/2, 1/3 e 2/3 não saem da conta (16/33 ≈ 0,485, perto mas diferente de 1/2)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0105",
  "campos": {
    "comentario": "**Gabarito: E.** Use o complementar: P(pelo menos uma menina) = 1 − P(nenhuma menina) = 1 − (1/2)³ = 1 − 1/8 = **7/8**.\n\n- **A:** 1/8 é a probabilidade de nenhuma menina (três meninos).\n- **B:** 3/8 é a de exatamente uma menina (ou exatamente duas).\n- **C:** 1/2 é a de pelo menos duas meninas.\n- **D:** 5/8 não corresponde a nenhum desses eventos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0106",
  "campos": {
    "comentario": "**Gabarito: C.** Pitágoras: h² = 9² + 12² = 81 + 144 = 225, logo h = **15 cm**. É o triângulo 3-4-5 multiplicado por 3.\n\n- **A:** 13 é a hipotenusa do triângulo 5-12-13.\n- **B e D:** 14² = 196 e 16² = 256, diferentes de 225.\n- **E:** 21 é a soma dos catetos; a hipotenusa é sempre menor que essa soma."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0107",
  "campos": {
    "comentario": "**Gabarito: C.** A diagonal é a hipotenusa do triângulo formado pelos lados: d² = 12² + 5² = 144 + 25 = 169, logo d = **13 m** (terno 5-12-13).\n\n- **A e B:** A diagonal tem de ser maior que o maior lado (12 m).\n- **D:** 15² = 225, não 169.\n- **E:** 17 é a soma dos lados."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0108",
  "campos": {
    "comentario": "**Gabarito: C.** Soma dos ângulos internos de um polígono de n lados: (n − 2) × 180°. Para o octógono (n = 8): 6 × 180° = **1.080°**.\n\n- **A:** 720° é do hexágono (n = 6).\n- **B:** 900° é do heptágono (n = 7).\n- **D:** 1.260° é do eneágono (n = 9).\n- **E:** 1.440° = 8 × 180°, esquece de subtrair 2 (é a soma do decágono)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0109",
  "campos": {
    "comentario": "**Gabarito: C.** Comprimento: 2πr = 12π, logo r = 6 cm. Área: πr² = π × 6² = **36π cm²**.\n\n- **A:** 12π repete o comprimento.\n- **B:** 24π = 2π × 12, mistura as fórmulas.\n- **D:** 72π é o dobro da área.\n- **E:** 144π usa r = 12 (confunde raio com diâmetro)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0110",
  "campos": {
    "comentario": "**Gabarito: B.** No mesmo instante os raios de sol formam triângulos semelhantes: altura ÷ sombra é constante. h/15 = 2/3, logo h = 15 × 2 ÷ 3 = **10 m**.\n\n- **A:** 7,5 m = 15 ÷ 2.\n- **C:** 12 m não satisfaz a proporção (12/15 = 0,8, diferente de 2/3).\n- **D:** 20 m não corresponde à proporção.\n- **E:** 22,5 m inverte a razão (15 × 3/2)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0111",
  "campos": {
    "comentario": "**Gabarito: C.** Primeiro ordene (rol): 1, 3, 4, 7, 8, 9. Com número par de dados, a mediana é a média dos dois centrais: (4 + 7) ÷ 2 = **5,5**.\n\n- **A e E:** 4 e 7 são os dois valores centrais, mas com n par tira-se a média deles.\n- **B:** 5 não corresponde a nenhuma medida do conjunto.\n- **D:** 6 não é a mediana (e a média aritmética é 32 ÷ 6 ≈ 5,33).\n\nErro comum: pegar os centrais sem ordenar (1 e 9), o que daria 5."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0112",
  "campos": {
    "comentario": "**Gabarito: B.** Média ponderada = soma de nota × peso dividida pela soma dos pesos: (7 × 1 + 6 × 1 + 8 × 2) ÷ (1 + 1 + 2) = 29 ÷ 4 = **7,25**.\n\n- **A:** 7 é a média aritmética simples (21 ÷ 3), ignorando os pesos.\n- **C, D e E:** não saem de 29 ÷ 4; dividir 29 por 3 (número de provas) daria 9,67."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0113",
  "campos": {
    "comentario": "**Gabarito: C.** Média: (1 + 3 + 5 + 7) ÷ 4 = 4. Desvios: −3, −1, 1, 3. Quadrados: 9, 1, 1, 9, soma 20. Variância populacional (divide por n): 20 ÷ 4 = **5**.\n\n- **A:** 2 é o desvio médio absoluto ((3 + 1 + 1 + 3) ÷ 4).\n- **B:** 4 é a média.\n- **D:** 6,67 é a variância **amostral** (20 ÷ 3, dividindo por n − 1).\n- **E:** 20 é a soma dos quadrados, sem dividir."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0114",
  "campos": {
    "comentario": "**Gabarito: C.** Somar uma constante desloca todos os valores e a média na mesma quantidade; os desvios em relação à média ficam iguais, então desvio padrão e variância **não se alteram**. A média, sim, aumenta 10.\n\n- **A:** Quem aumenta 10 unidades é a média (e a mediana e a moda).\n- **B:** Dobraria se os valores fossem **multiplicados** por 2.\n- **D:** Nem a variância muda com a soma de constante.\n- **E:** A dispersão não diminui."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0115",
  "campos": {
    "comentario": "**Gabarito: D.** Trabalhe com somas. Soma atual: 5 × 12 = 60. Soma necessária com 6 números: 6 × 13 = 78. O novo número é 78 − 60 = **18**.\n\n- **A:** Acrescentar 13 daria média 73 ÷ 6 ≈ 12,17.\n- **B:** 15 daria média 12,5.\n- **C:** 17 daria média ≈ 12,83.\n- **E:** 20 daria média ≈ 13,33."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0116",
  "campos": {
    "comentario": "**Gabarito: D.** O círculo inteiro (100%) tem 360°, então cada 1% vale 3,6°. 18 × 3,6 = **64,8°**.\n\n- **A:** 18° confunde porcentagem com graus.\n- **B:** 36° corresponde a 10%.\n- **C:** 54,8° é erro de conta (18 × 3 = 54, mais 18 × 0,6 = 10,8).\n- **E:** 72° corresponde a 20%."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0117",
  "campos": {
    "comentario": "**Gabarito: B.** Realizado (32%) abaixo do planejado (40%) indica atraso; a diferença entre dois percentuais se mede em pontos percentuais: 40 − 32 = **8 p.p.**\n\n- **A:** Estaria adiantado se o realizado superasse o planejado.\n- **C:** 32% é o **acumulado** até o fim do mês 3, não o executado só no mês 3.\n- **D:** 20% é o atraso relativo (8 ÷ 40), não 20 pontos percentuais.\n- **E:** A comparação das duas curvas permite concluir."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0118",
  "campos": {
    "comentario": "**Gabarito: C.** A curva S mostra o avanço acumulado no tempo; a inclinação é o avanço por unidade de tempo. Onde a curva é mais íngreme (em geral no meio do projeto), o ritmo de execução é maior.\n\n- **A:** Atraso se vê comparando realizado com planejado, não pela inclinação.\n- **B:** Menor produtividade aparece nos trechos mais achatados (início e fim).\n- **D:** No fim a curva achata ao se aproximar de 100%.\n- **E:** Interrupção seria um trecho horizontal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0119",
  "campos": {
    "comentario": "**Gabarito: C.** Os valores dados são acumulados; o avanço de um mês é a diferença para o mês anterior: 60% − 30% = **30%**. Avanços mensais: 10, 20, 30, 25 e 15 (soma 100).\n\n- **A:** 20% é o avanço do mês 2.\n- **B:** 25% é o avanço do mês 4.\n- **D:** 60% é o acumulado até o mês 3.\n- **E:** 90% soma os acumulados dos meses 2 e 3."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0120",
  "campos": {
    "comentario": "**Gabarito: B.** A diferença entre dois percentuais se mede em pontos percentuais: 30 − 20 = 10 p.p. Já a variação relativa é (30 − 20) ÷ 20 = 0,5 = 50%. As duas informações estão corretas e aparecem juntas na alternativa B.\n\n- **A:** \"Cresceu 10%\" confunde ponto percentual com porcentagem; 10% sobre 20% daria 22%.\n- **C:** 30% é o valor final, não o crescimento.\n- **D:** 1,5 é a razão 30 ÷ 20, não uma diferença em pontos percentuais.\n- **E:** 150% é o valor final como percentual do inicial; o crescimento é de 50%."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0121",
  "campos": {
    "comentario": "**Gabarito: B.** Os quadrantes são numerados no sentido anti-horário: 1º (+, +), 2º (−, +), 3º (−, −) e 4º (+, −). O ponto (−2, 5) tem x negativo e y positivo: **2º quadrante**.\n\n- **A:** No 1º quadrante x e y são positivos.\n- **C:** No 3º os dois são negativos.\n- **D:** No 4º, x é positivo e y negativo, como (2, −5).\n- **E:** Para estar no eixo y, a abscissa teria de ser 0."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0122",
  "campos": {
    "comentario": "**Gabarito: B.** Distância entre dois pontos: d = √(Δx² + Δy²). Δx = 5 − (−1) = 6 e Δy = 10 − 2 = 8. d = √(36 + 64) = √100 = **10** (terno 6-8-10).\n\n- **A:** 8 é só a diferença das ordenadas.\n- **C:** 12 não corresponde a nenhuma conta válida.\n- **D:** 14 soma os catetos (6 + 8) em vez de aplicar Pitágoras.\n- **E:** √52 = √(4² + 6²) vem de erros de sinal nas diferenças das coordenadas."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0123",
  "campos": {
    "comentario": "**Gabarito: A.** O ponto médio é a média das coordenadas: x = (2 + 8) ÷ 2 = 5 e y = (−4 + 6) ÷ 2 = 1. Ponto **(5, 1)**.\n\n- **B:** (6, 2) não corresponde às médias.\n- **C:** (3, 5) é a metade das **diferenças** (8 − 2 e 6 − (−4)).\n- **D:** (10, 2) é a soma das coordenadas, sem dividir por 2.\n- **E:** (5, −1) erra o sinal da ordenada."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0124",
  "campos": {
    "comentario": "**Gabarito: C.** Coeficiente angular: (7 − 3) ÷ (2 − 0) = 2. Como a reta passa por (0, 3), o coeficiente linear é 3: y = 2x + 3. Para x = 5: y = 2 × 5 + 3 = **13**.\n\n- **A:** 10 = 2 × 5, esquece o coeficiente linear.\n- **B, D e E:** 11, 15 e 17 são as ordenadas para x = 4, 6 e 7."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0125",
  "campos": {
    "comentario": "**Gabarito: C.** Simetria em relação à origem troca o sinal das **duas** coordenadas: (x, y) vira (−x, −y). Logo (4, −3) vira **(−4, 3)**.\n\n- **A:** (4, 3) é o simétrico em relação ao eixo x (troca só o sinal de y).\n- **B:** (−4, −3) é o simétrico em relação ao eixo y (troca só o sinal de x).\n- **D:** (−3, 4) é o simétrico em relação à reta y = x (troca as coordenadas de lugar).\n- **E:** (3, −4) é o simétrico em relação à reta y = −x."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0126",
  "campos": {
    "comentario": "**Gabarito: C.** O produto A·B existe quando o número de colunas de A é igual ao de linhas de B (3 = 3). O resultado tem as linhas de A e as colunas de B: **2 × 4**.\n\n- **A:** 2 × 3 é a ordem de A.\n- **B:** 3 × 3 usa os números \"de dentro\", que só servem para verificar se o produto existe.\n- **D:** 4 × 2 inverte linhas e colunas.\n- **E:** O produto existe; o que não existe é B·A (4 colunas contra 2 linhas)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0127",
  "campos": {
    "comentario": "**Gabarito: B.** Determinante 2 × 2: diagonal principal menos diagonal secundária. 3 × 4 − 5 × 2 = 12 − 10 = **2**.\n\n- **A:** −2 inverte a ordem da subtração.\n- **C:** 7 soma a diagonal principal (3 + 4), que é o traço.\n- **D:** 22 soma os produtos (12 + 10) em vez de subtrair.\n- **E:** 14 soma todos os elementos."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0128",
  "campos": {
    "comentario": "**Gabarito: C.** A diagonal principal tem os elementos com i = j: a₁₁ = 1 + 1 = 2, a₂₂ = 2 + 2 = 4 e a₃₃ = 3 + 3 = 6. Soma (traço): 2 + 4 + 6 = **12**.\n\n- **A:** 6 = 1 + 2 + 3, soma os índices uma vez só.\n- **B:** 9 é a soma da 1ª linha (2 + 3 + 4).\n- **D:** 15 é a soma da 3ª linha (4 + 5 + 6).\n- **E:** 18 não corresponde à diagonal."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0129",
  "campos": {
    "comentario": "**Gabarito: D.** Multiplicar a matriz por k multiplica **cada uma das n linhas** por k, então det(kA) = kⁿ × det A. Com n = 3: 2³ × 5 = 8 × 5 = **40**.\n\n- **A:** 10 = 2 × 5, valeria se só uma linha fosse multiplicada por 2.\n- **B:** 20 = 2² × 5, valeria para matriz 2 × 2.\n- **C:** 30 = 2 × 3 × 5, multiplica pela ordem em vez de usar potência.\n- **E:** 125 = 5³, eleva o determinante em vez do escalar."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0130",
  "campos": {
    "comentario": "**Gabarito: D.** O elemento c₂₁ é a linha 2 de A vezes a coluna 1 de B: (3, 4) · (0, 2) = 3 × 0 + 4 × 2 = **8**. A matriz completa é C = [[4, −1], [8, −1]].\n\n- **A:** 2 é o elemento b₂₁ de B.\n- **B:** 4 é o elemento c₁₁.\n- **C:** 6 não é elemento de C.\n- **E:** −1 é o valor de c₁₂ e de c₂₂."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0131",
  "campos": {
    "comentario": "**Gabarito: C.** No desconto racional (por dentro) composto, o valor atual é A = N ÷ (1 + i)ⁿ = 12.100 ÷ 1,1² = 12.100 ÷ 1,21 = **R$ 10.000**. Conferência: 10.000 × 1,21 = 12.100.\n\n- **A:** R$ 9.680 é o desconto **comercial simples**: 12.100 × (1 − 0,20).\n- **B:** R$ 9.801 é o desconto **comercial composto**: 12.100 × 0,9².\n- **D:** R$ 10.890 desconta 10% uma única vez (12.100 × 0,9).\n- **E:** R$ 11.000 desconta só um mês (12.100 ÷ 1,1)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0132",
  "campos": {
    "comentario": "**Gabarito: B.** O valor presente das duas prestações deve ser 1.000: P/1,1 + P/1,21 = 1.000. Multiplicando por 1,21: 1,1P + P = 1.210, logo 2,1P = 1.210 e P ≈ **R$ 576,19**. Conferência: 576,19 ÷ 1,1 ≈ 523,81 e 576,19 ÷ 1,21 ≈ 476,19; soma 1.000.\n\n- **A:** R$ 550 = 1.100 ÷ 2, considera juros de um só mês sobre tudo.\n- **C:** R$ 600 = 1.200 ÷ 2, juros simples de dois meses sobre todo o principal.\n- **D:** R$ 605 = 1.210 ÷ 2, capitaliza toda a dívida por dois meses, ignorando que a 1ª parcela amortiza antes.\n- **E:** R$ 610 não corresponde a nenhuma conta válida."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0133",
  "campos": {
    "comentario": "**Gabarito: B.** Traga os fluxos a valor presente pela TMA: 11.000 ÷ 1,1 = 10.000 e 12.100 ÷ 1,21 = 10.000. VPL = 10.000 + 10.000 − 20.000 = **0**. A TIR é a taxa que zera o VPL; como ele zera a 10%, TIR = 10% = TMA (o projeto é indiferente).\n\n- **A:** R$ 3.100 é a soma nominal (23.100 − 20.000), sem descontar os fluxos.\n- **C:** O VPL é zero, não negativo, e a TIR é igual a 10%.\n- **D:** 15,5% é 3.100 ÷ 20.000, o ganho nominal total, que não é a TIR.\n- **E:** Em 1 ano só voltam 11.000 dos 20.000; o payback simples ocorre durante o 2º ano."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0134",
  "campos": {
    "comentario": "**Gabarito: Errado.** No SAC o que é constante é a **amortização**. Como os juros incidem sobre o saldo devedor, que cai a cada período, os juros são decrescentes e as prestações (amortização + juros) também **decrescem**. Prestações iguais são a característica do sistema Price (francês), no qual os juros caem e a amortização cresce."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0135",
  "campos": {
    "comentario": "**Gabarito: C.** O valor presente de uma perpetuidade (renda infinita e constante) é PV = pagamento ÷ taxa = 300 ÷ 0,015 = **R$ 20.000**. Conferência: 1,5% de 20.000 = 300 por mês.\n\n- **A:** R$ 4.500 = 300 × 15, multiplica em vez de dividir.\n- **B:** R$ 15.000 usaria taxa de 2% a.m.\n- **D:** R$ 30.000 usaria taxa de 1% a.m.\n- **E:** R$ 45.000 não corresponde à fórmula."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0136",
  "campos": {
    "comentario": "**Gabarito: B.** Em qualquer sistema, prestação = juros + amortização, e os juros incidem sobre o saldo devedor. Juros da 1ª parcela: 2% × 50.000 = 1.000. Amortização: 2.000 − 1.000 = **R$ 1.000**.\n\n- **A:** Seria zero só se a prestação fosse igual aos juros (R$ 1.000).\n- **C:** R$ 1.500 não sai dos dados.\n- **D:** R$ 1.960 calcula os juros sobre a prestação (2% de 2.000 = 40), não sobre o saldo.\n- **E:** R$ 2.000 ignora os juros embutidos na prestação."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0137",
  "campos": {
    "comentario": "**Gabarito: C.** Na amostragem **estratificada** a população é dividida em grupos homogêneos (estratos) e sorteiam-se elementos **dentro de cada um**; aqui, com alocação proporcional ao tamanho do estrato.\n\n- **A:** Na aleatória simples sorteia-se direto da população inteira, sem dividir em grupos.\n- **B:** Na sistemática escolhe-se um elemento a cada k da lista (por exemplo, de 10 em 10).\n- **D:** Em conglomerados sorteiam-se alguns grupos inteiros (por exemplo, agências) e pesquisam-se seus elementos.\n- **E:** Por conveniência não há sorteio; é amostragem não probabilística."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0138",
  "campos": {
    "comentario": "**Gabarito: C.** O intervalo de 45 a 55 mil é a média mais ou menos 1 desvio padrão (50 ± 5). Pela regra empírica da normal, cerca de **68%** dos dados ficam em μ ± 1σ.\n\n- **A:** 34% é só um dos lados (entre a média e 1σ).\n- **B:** 50% é a parcela acima (ou abaixo) da média.\n- **D:** 95% corresponde a μ ± 2σ (40 a 60 mil).\n- **E:** 99,7% corresponde a μ ± 3σ (35 a 65 mil)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0139",
  "campos": {
    "comentario": "**Gabarito: C.** Z = (valor − média) ÷ desvio padrão = (80 − 70) ÷ 5 = **2**: a nota está 2 desvios padrão acima da média.\n\n- **A:** 0,5 inverte a divisão (5 ÷ 10).\n- **B:** Z = 1 seria a nota 75.\n- **D:** 10 é só a diferença para a média, sem dividir pelo desvio padrão.\n- **E:** 16 = 80 ÷ 5, esquece de subtrair a média."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0140",
  "campos": {
    "comentario": "**Gabarito: Errado.** O coeficiente de Pearson varia de −1 a +1; o sinal dá o sentido e o módulo dá a força da relação linear. r = −0,9 indica correlação **forte e negativa**: quando uma variável aumenta, a outra tende a diminuir. Ausência de relação linear corresponde a r próximo de 0."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0141",
  "campos": {
    "comentario": "**Gabarito: B.** Valores muito altos puxam a média para cima, mas quase não afetam a mediana. Média (8) maior que mediana (6) indica cauda alongada à direita: assimetria **positiva**, típica de salários.\n\n- **A:** Na distribuição simétrica, média e mediana coincidem.\n- **C:** Na assimetria à esquerda (negativa), a média é menor que a mediana.\n- **D:** A normal padrão é simétrica, com média 0.\n- **E:** A uniforme também é simétrica."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0142",
  "campos": {
    "comentario": "**Gabarito: C.** Erro padrão da média = σ ÷ √n = 40 ÷ √400 = 40 ÷ 20 = **2**.\n\n- **A:** 0,1 = 40 ÷ 400, divide por n em vez de √n.\n- **B:** 1 não corresponde à fórmula.\n- **D:** 4 = 40 ÷ 10, erra a raiz de 400.\n- **E:** 10 = 400 ÷ 40, inverte a conta."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0143",
  "campos": {
    "comentario": "**Gabarito: B.** Média: (1 + 3 + 5 + 7 + 9) ÷ 5 = 5. Desvios absolutos em relação à média: 4, 2, 0, 2, 4, soma 12. Desvio médio: 12 ÷ 5 = **2,4**.\n\n- **A:** 2,0 é a razão da sequência, não uma medida de dispersão.\n- **C:** 2,8 é aproximadamente o desvio padrão (√8 ≈ 2,83).\n- **D:** 4,0 é o maior desvio absoluto.\n- **E:** 8,0 é a variância populacional (16 + 4 + 0 + 4 + 16 = 40; 40 ÷ 5)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0144",
  "campos": {
    "comentario": "**Gabarito: C.** No Sistema de Amortização Misto, cada prestação é a média aritmética das prestações do SAC e do Price. 1ª do SAC: amortização 20.000 ÷ 5 = 4.000 mais juros 2% × 20.000 = 400, total 4.400. SAM: (4.400 + 4.243,17) ÷ 2 = 8.643,17 ÷ 2 ≈ **R$ 4.321,58**.\n\n- **A:** R$ 4.000 é só a amortização do SAC.\n- **B:** R$ 4.243,17 é a prestação Price.\n- **D:** R$ 4.400 é a 1ª prestação do SAC.\n- **E:** R$ 4.643,17 soma os juros (400) à prestação Price."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0145",
  "campos": {
    "comentario": "**Gabarito: C.** Leve cada título à data focal 3, capitalizando pelo tempo que falta. O do mês 1 anda 2 meses: 5.000 × 1,05² = 5.000 × 1,1025 = 5.512,50. O do mês 2 anda 1 mês: 5.000 × 1,05 = 5.250. Soma: **R$ 10.762,50**.\n\n- **A:** R$ 10.000 soma os valores sem juros.\n- **B:** R$ 10.500 capitaliza tudo por 1 mês só.\n- **D:** R$ 11.025 capitaliza os dois títulos por 2 meses (10.000 × 1,1025).\n- **E:** R$ 11.576,25 capitaliza os dois por 3 meses (10.000 × 1,05³)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0146",
  "campos": {
    "comentario": "**Gabarito: B.** Desconte cada parcela pelo seu prazo: 1.100 ÷ 1,1 = 1.000 e 2.420 ÷ 1,1² = 2.420 ÷ 1,21 = 2.000. Valor presente: 1.000 + 2.000 = **R$ 3.000**.\n\n- **A:** R$ 2.909,09 = 3.520 ÷ 1,21, desconta as duas parcelas por 2 meses.\n- **C:** R$ 3.200 = 3.520 ÷ 1,1, desconta as duas por 1 mês só.\n- **D:** R$ 3.520 é a soma nominal, sem desconto.\n- **E:** R$ 3.872 = 3.520 × 1,1, capitaliza em vez de descontar."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0147",
  "campos": {
    "comentario": "**Gabarito: Errado.** É nos juros **compostos** que a equivalência de capitais não depende da data focal: se dois conjuntos são equivalentes em uma data, são em qualquer outra. Nos juros simples, mudar a data focal muda o resultado, por isso as questões desse regime sempre informam a data focal a usar."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0148",
  "campos": {
    "comentario": "**Gabarito: Errado.** Somar uma constante a todos os valores aumenta a média na mesma constante, de modo que cada desvio (valor menos média) fica igual. Assim o desvio médio, a variância e o desvio padrão **não mudam**. Quem aumenta 10 unidades é a média. O desvio médio só mudaria com multiplicação: multiplicar os dados por k multiplica o desvio médio por |k|."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0150",
  "campos": {
    "comentario": "**Gabarito: C.** Na capitalização contínua, M = C × e^(i × t) = 5.000 × e^(0,08 × 3) = 5.000 × e^0,24 = 5.000 × 1,2712 = **R$ 6.356,00**.\n\n- **A:** R$ 6.200 é o montante a juros simples (5.000 × 1,24).\n- **B:** R$ 6.298,56 é a capitalização composta anual (5.000 × 1,08³).\n- **D e E:** não correspondem a nenhum regime com esses dados.\n\nA ordem ajuda a conferir: simples (6.200) < composta anual (6.298,56) < contínua (6.356)."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0151",
  "campos": {
    "comentario": "**Gabarito: B.** Taxa real: (1 + nominal) ÷ (1 + inflação) − 1 = 1,1025 ÷ 1,05 − 1 = 1,05 − 1 = **5%**. Conferência: 1,05 × 1,05 = 1,1025.\n\n- **A:** 4,75% não sai da fórmula de Fisher.\n- **C:** 5,25% é a subtração simples (10,25 − 5), apenas uma aproximação.\n- **D:** 5,5% não corresponde a nenhuma conta.\n- **E:** 15,76% multiplica os fatores (1,1025 × 1,05 ≈ 1,1576) em vez de dividir."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});

CORRECOES.push({
  "id": "RLE-0149",
  "campos": {
    "comentario": "**Gabarito: D.** O círculo completo tem 360° e representa 100%; o ângulo do setor é proporcional à participação: 0,18 × 360° = **64,8°** (cada 1% vale 3,6°).\n\n- **A:** 18° confunde porcentagem com graus.\n- **B:** 36° corresponde a 10% do total.\n- **C:** 54° corresponde a 15% (ou 18 × 3, esquecendo o 0,6).\n- **E:** 72° corresponde a 20%."
  },
  "motivo": "Revisão dos comentários (2026-11): justifica o gabarito e explica as alternativas erradas."
});
