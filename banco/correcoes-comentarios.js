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
