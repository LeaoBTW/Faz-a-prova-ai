/*
 * Específicos – Sistemas Operacionais
 * Gerado por tools/importar.py a partir das fontes do vault (2026-11-13).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 * Rodar o importador de novo sobrescreve este arquivo.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-SO-0001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Conceito de sistema operacional",
  "ref_apostila": {
    "modulo": "04",
    "secao": "8",
    "titulo": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#8. Sistemas operacionais: funções, processos, threads, escalonamento e deadlock]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q79",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 79
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um computador moderno consiste em um ou mais processadores, memória principal, discos, impressoras, um teclado, um mouse, um monitor, interfaces de rede e vários outros dispositivos de entrada e saída. Juntamente com os componentes de hardware, temos um software chamado de “Sistema Operacional”. Referente ao Sistema Operacional, marque a alternativa que representa corretamente o que é Sistema Operacional.",
  "imagem": null,
  "alternativas": {
    "A": "Um software que cria gráficos e imagens.",
    "B": "Um dispositivo de hardware essencial para a execução de programas.",
    "C": "Uma interface de usuário para acessar a internet.",
    "D": "Um conjunto de programas que controla o funcionamento do computador"
  },
  "gabarito": "D",
  "comentario": "",
  "tags": [
    "4-alternativas"
  ],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Deadlock: condições de Coffman",
  "ref_apostila": {
    "modulo": "04",
    "secao": "8",
    "titulo": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#8. Sistemas operacionais: funções, processos, threads, escalonamento e deadlock]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q27",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 27
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "NÃO é uma das condições necessárias para a ocorrência de deadlock (condições de Coffman):",
  "imagem": null,
  "alternativas": {
    "A": "exclusão mútua.",
    "B": "posse e espera.",
    "C": "não preempção.",
    "D": "espera circular.",
    "E": "preempção de recursos pelo sistema operacional."
  },
  "gabarito": "E",
  "comentario": "A condição de Coffman é a **não** preempção. Permitir preempção é justamente uma forma de prevenir deadlock\n\nRevisar: Módulo 04, SO",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Organização de computadores e hierarquia de memória",
  "ref_apostila": {
    "modulo": "04",
    "secao": "1",
    "titulo": "Organização de computadores e hierarquia de memória",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#1. Organização de computadores e hierarquia de memória]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §1 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No ciclo de busca de uma instrução, o registrador que contém o endereço da próxima instrução a ser executada é o:",
  "imagem": null,
  "alternativas": {
    "A": "IR",
    "B": "MAR",
    "C": "PC",
    "D": "MBR",
    "E": "ACC"
  },
  "gabarito": "C",
  "comentario": "O PC (*Program Counter*) guarda o endereço da próxima instrução. O IR guarda a instrução em execução; o MAR guarda o endereço sendo acessado na memória (que recebe o valor do PC durante a busca, mas não é \"o\" registrador da próxima instrução); o MBR guarda o dado lido/escrito.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Organização de computadores e hierarquia de memória",
  "ref_apostila": {
    "modulo": "04",
    "secao": "1",
    "titulo": "Organização de computadores e hierarquia de memória",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#1. Organização de computadores e hierarquia de memória]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §1 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em relação à hierarquia de memória, é correto afirmar que:",
  "imagem": null,
  "alternativas": {
    "A": "a memória cache é normalmente implementada com DRAM, por ser mais barata.",
    "B": "a localidade espacial justifica que a cache transfira blocos de várias palavras.",
    "C": "quanto mais próximo da CPU, maior a capacidade do nível de memória.",
    "D": "os registradores ficam entre a cache L1 e a L2.",
    "E": "a política write-through dispensa a escrita na memória principal."
  },
  "gabarito": "B",
  "comentario": "A localidade espacial (itens vizinhos tendem a ser usados em seguida) justifica trazer blocos inteiros. (a) cache usa SRAM; (c) é o contrário, quanto mais perto, menor; (d) registradores estão no topo, acima da L1; (e) write-through escreve na cache e na memória simultaneamente.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Organização de computadores e hierarquia de memória",
  "ref_apostila": {
    "modulo": "04",
    "secao": "1",
    "titulo": "Organização de computadores e hierarquia de memória",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#1. Organização de computadores e hierarquia de memória]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §1 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um sistema possui barramento de endereços de 24 bits e memória endereçada por byte. A capacidade máxima de memória endereçável é:",
  "imagem": null,
  "alternativas": {
    "A": "24 MB",
    "B": "16 MiB",
    "C": "4 GiB",
    "D": "64 KiB",
    "E": "1 MiB"
  },
  "gabarito": "B",
  "comentario": "2²⁴ = 16.777.216 bytes = 16 MiB.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Organização de computadores e hierarquia de memória",
  "ref_apostila": {
    "modulo": "04",
    "secao": "1",
    "titulo": "Organização de computadores e hierarquia de memória",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#1. Organização de computadores e hierarquia de memória]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §1 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A técnica de E/S em que um controlador transfere um bloco de dados diretamente entre o dispositivo e a memória, interrompendo a CPU apenas ao final da transferência, é:",
  "imagem": null,
  "alternativas": {
    "A": "E/S programada",
    "B": "polling",
    "C": "DMA",
    "D": "E/S mapeada em memória",
    "E": "interrupção de software"
  },
  "gabarito": "C",
  "comentario": "DMA (acesso direto à memória). Na E/S programada a CPU faz polling; na E/S por interrupção a CPU ainda transfere cada palavra.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Organização de computadores e hierarquia de memória",
  "ref_apostila": {
    "modulo": "04",
    "secao": "1",
    "titulo": "Organização de computadores e hierarquia de memória",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#1. Organização de computadores e hierarquia de memória]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §1 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um arranjo com 4 discos de 1 TB que tolera a falha de qualquer um dos discos e oferece 3 TB úteis corresponde a:",
  "imagem": null,
  "alternativas": {
    "A": "RAID 0",
    "B": "RAID 1",
    "C": "RAID 5",
    "D": "RAID 6",
    "E": "RAID 10"
  },
  "gabarito": "C",
  "comentario": "RAID 5 com n = 4: (n−1) × 1 TB = 3 TB úteis e tolera 1 falha. RAID 6 daria 2 TB; RAID 10 e RAID 1, 2 TB; RAID 0, 4 TB sem tolerância.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
  "ref_apostila": {
    "modulo": "04",
    "secao": "8",
    "titulo": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#8. Sistemas operacionais: funções, processos, threads, escalonamento e deadlock]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §8 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No diagrama de estados de processos, a transição que NÃO ocorre é:",
  "imagem": null,
  "alternativas": {
    "A": "pronto → executando",
    "B": "executando → bloqueado",
    "C": "bloqueado → pronto",
    "D": "bloqueado → executando",
    "E": "executando → pronto"
  },
  "gabarito": "D",
  "comentario": "Um processo desbloqueado vai para a fila de prontos; só o escalonador o leva a executar.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
  "ref_apostila": {
    "modulo": "04",
    "secao": "8",
    "titulo": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#8. Sistemas operacionais: funções, processos, threads, escalonamento e deadlock]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §8 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "As threads de um mesmo processo compartilham:",
  "imagem": null,
  "alternativas": {
    "A": "pilha e contador de programa.",
    "B": "registradores e pilha.",
    "C": "espaço de endereçamento, incluindo código, dados globais e arquivos abertos.",
    "D": "apenas os registradores de uso geral.",
    "E": "nada; cada thread possui espaço de endereçamento próprio."
  },
  "gabarito": "C",
  "comentario": "Cada thread tem PC, registradores e pilha próprios; o espaço de endereçamento é compartilhado.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
  "ref_apostila": {
    "modulo": "04",
    "secao": "8",
    "titulo": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#8. Sistemas operacionais: funções, processos, threads, escalonamento e deadlock]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §8 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Quatro processos chegam no instante 0 com bursts P1 = 8, P2 = 4, P3 = 9 e P4 = 5. Pelo algoritmo SJF não preemptivo, o tempo médio de espera é:",
  "imagem": null,
  "alternativas": {
    "A": "7,5",
    "B": "8,5",
    "C": "9,75",
    "D": "6,5",
    "E": "10,25"
  },
  "gabarito": "A",
  "comentario": "Ordem SJF: P2 (4), P4 (5), P1 (8), P3 (9). Esperas: P2 = 0, P4 = 4, P1 = 9, P3 = 17 → soma 30 → média 7,5.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
  "ref_apostila": {
    "modulo": "04",
    "secao": "8",
    "titulo": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#8. Sistemas operacionais: funções, processos, threads, escalonamento e deadlock]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §8 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A estratégia de impor uma ordem global de numeração aos recursos, exigindo que os processos os requisitem em ordem crescente, previne o deadlock ao eliminar a condição de:",
  "imagem": null,
  "alternativas": {
    "A": "exclusão mútua",
    "B": "posse e espera",
    "C": "não preempção",
    "D": "espera circular",
    "E": "inanição"
  },
  "gabarito": "D",
  "comentario": "A ordenação dos recursos torna impossível o ciclo de espera.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
  "ref_apostila": {
    "modulo": "04",
    "secao": "8",
    "titulo": "Sistemas operacionais: funções, processos, threads, escalonamento e deadlock",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#8. Sistemas operacionais: funções, processos, threads, escalonamento e deadlock]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §8 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre escalonamento Round-Robin, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "é não preemptivo.",
    "B": "com quantum muito grande, aproxima-se do FCFS.",
    "C": "é o algoritmo que garante o menor tempo médio de espera.",
    "D": "dispensa troca de contexto.",
    "E": "é inadequado para sistemas de tempo compartilhado."
  },
  "gabarito": "B",
  "comentario": "Se o quantum é maior que qualquer burst, cada processo roda até o fim na ordem de chegada → FCFS. O SJF é que minimiza a espera média; RR é preemptivo e ideal para tempo compartilhado.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Gerência de memória",
  "ref_apostila": {
    "modulo": "04",
    "secao": "9",
    "titulo": "Gerência de memória",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#9. Gerência de memória]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §9 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na paginação, ocorre fragmentação ______; na segmentação, fragmentação ______.",
  "imagem": null,
  "alternativas": {
    "A": "externa; interna",
    "B": "interna; externa",
    "C": "interna; interna",
    "D": "externa; externa",
    "E": "nenhuma; interna"
  },
  "gabarito": "B",
  "comentario": "Páginas de tamanho fixo desperdiçam espaço dentro da última página (interna); segmentos de tamanho variável criam buracos entre si (externa).",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Gerência de memória",
  "ref_apostila": {
    "modulo": "04",
    "secao": "9",
    "titulo": "Gerência de memória",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#9. Gerência de memória]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §9 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um sistema com páginas de 4 KB e endereços lógicos de 32 bits, o número de bits do deslocamento e o número máximo de páginas por processo são, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "12 e 2²⁰",
    "B": "20 e 2¹²",
    "C": "10 e 2²²",
    "D": "12 e 2³²",
    "E": "4 e 2²⁸"
  },
  "gabarito": "A",
  "comentario": "4 KB = 2¹² → 12 bits de deslocamento; 32 − 12 = 20 bits de página → 2²⁰ páginas.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Gerência de memória",
  "ref_apostila": {
    "modulo": "04",
    "secao": "9",
    "titulo": "Gerência de memória",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#9. Gerência de memória]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §9 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Com 3 quadros inicialmente vazios e a sequência de referências 1, 2, 3, 1, 4, 2, 5, o número de faltas de página com FIFO e com LRU é, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "5 e 5",
    "B": "5 e 6",
    "C": "6 e 5",
    "D": "6 e 6",
    "E": "7 e 6"
  },
  "gabarito": "B",
  "comentario": "FIFO: 1F 2F 3F 1(acerto) 4F[sai 1] 2(acerto) 5F[sai 2] → 5 faltas. LRU: 1F 2F 3F 1(acerto) 4F[sai 2, o menos recente] 2F[sai 3] 5F[sai 1] → 6 faltas. (Exemplo de que, em sequências específicas, o LRU pode perder do FIFO.)",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Gerência de memória",
  "ref_apostila": {
    "modulo": "04",
    "secao": "9",
    "titulo": "Gerência de memória",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#9. Gerência de memória]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §9 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O fenômeno em que o aumento do número de quadros disponíveis provoca aumento do número de faltas de página é denominado:",
  "imagem": null,
  "alternativas": {
    "A": "thrashing",
    "B": "anomalia de Belady",
    "C": "fragmentação externa",
    "D": "localidade de referência",
    "E": "working set"
  },
  "gabarito": "B",
  "comentario": "Anomalia de Belady, típica do FIFO.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Gerência de memória",
  "ref_apostila": {
    "modulo": "04",
    "secao": "9",
    "titulo": "Gerência de memória",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#9. Gerência de memória]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §9 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre memória virtual, é INCORRETO afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "permite a execução de programas maiores que a memória física.",
    "B": "a falta de página provoca uma interrupção tratada pelo sistema operacional.",
    "C": "o algoritmo ótimo de substituição é amplamente implementado nos SOs comerciais por ter o menor número de faltas.",
    "D": "a TLB armazena traduções recentes de páginas para quadros.",
    "E": "o thrashing ocorre quando os processos passam mais tempo paginando do que executando."
  },
  "gabarito": "C",
  "comentario": "O algoritmo ótimo é irrealizável (exige conhecer referências futuras); serve apenas como referência teórica.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas de arquivos",
  "ref_apostila": {
    "modulo": "04",
    "secao": "10",
    "titulo": "Sistemas de arquivos",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#10. Sistemas de arquivos]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §10 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um usuário não consegue copiar um arquivo de vídeo de 6 GB para um pendrive, embora haja 30 GB livres. A causa mais provável é o pendrive estar formatado em:",
  "imagem": null,
  "alternativas": {
    "A": "NTFS",
    "B": "exFAT",
    "C": "FAT32",
    "D": "ext4",
    "E": "ReFS"
  },
  "gabarito": "C",
  "comentario": "O FAT32 limita cada arquivo a 4 GB − 1 byte. Solução: formatar em exFAT ou NTFS.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas de arquivos",
  "ref_apostila": {
    "modulo": "04",
    "secao": "10",
    "titulo": "Sistemas de arquivos",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#10. Sistemas de arquivos]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §10 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No NTFS, a estrutura que contém um registro para cada arquivo e diretório do volume, podendo inclusive armazenar o conteúdo de arquivos pequenos, é a:",
  "imagem": null,
  "alternativas": {
    "A": "FAT",
    "B": "MFT",
    "C": "tabela de i-nodes",
    "D": "superbloco",
    "E": "GPT"
  },
  "gabarito": "B",
  "comentario": "A Master File Table; arquivos pequenos ficam residentes no próprio registro.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas de arquivos",
  "ref_apostila": {
    "modulo": "04",
    "secao": "10",
    "titulo": "Sistemas de arquivos",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#10. Sistemas de arquivos]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §10 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um sistema Linux, o arquivo `relatorio.txt` possui um hard link `rel2` e um link simbólico `rel3`. Se `relatorio.txt` for removido:",
  "imagem": null,
  "alternativas": {
    "A": "`rel2` e `rel3` deixam de funcionar.",
    "B": "`rel2` continua dando acesso ao conteúdo e `rel3` fica quebrado.",
    "C": "`rel3` continua dando acesso ao conteúdo e `rel2` fica quebrado.",
    "D": "ambos continuam funcionando normalmente.",
    "E": "o sistema impede a remoção enquanto houver links."
  },
  "gabarito": "B",
  "comentario": "O hard link aponta para o mesmo i-node (o conteúdo persiste enquanto houver links); o simbólico guarda o caminho, que deixa de existir.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas de arquivos",
  "ref_apostila": {
    "modulo": "04",
    "secao": "10",
    "titulo": "Sistemas de arquivos",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#10. Sistemas de arquivos]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §10 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O journaling em sistemas de arquivos como ext4 e NTFS tem como principal objetivo:",
  "imagem": null,
  "alternativas": {
    "A": "criptografar os dados em repouso.",
    "B": "compactar os arquivos automaticamente.",
    "C": "permitir a recuperação rápida da consistência do sistema de arquivos após falhas.",
    "D": "substituir as rotinas de backup.",
    "E": "eliminar a fragmentação."
  },
  "gabarito": "C",
  "comentario": "Journaling garante consistência (principalmente dos metadados) após quedas; não é backup nem criptografia.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Sistemas de arquivos",
  "ref_apostila": {
    "modulo": "04",
    "secao": "10",
    "titulo": "Sistemas de arquivos",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#10. Sistemas de arquivos]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §10 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Unix/Linux, o i-node de um arquivo NÃO armazena:",
  "imagem": null,
  "alternativas": {
    "A": "as permissões",
    "B": "o UID do dono",
    "C": "o tamanho",
    "D": "o nome do arquivo",
    "E": "os ponteiros para os blocos de dados"
  },
  "gabarito": "D",
  "comentario": "O nome fica na entrada de diretório (nome → nº do i-node). Por isso um mesmo i-node pode ter vários nomes (hard links).",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Windows Server",
  "ref_apostila": {
    "modulo": "04",
    "secao": "11",
    "titulo": "Windows Server",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#11. Windows Server]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §11 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Active Directory, o conjunto de uma ou mais árvores de domínios que compartilham um esquema comum, a configuração e o catálogo global é denominado:",
  "imagem": null,
  "alternativas": {
    "A": "site",
    "B": "unidade organizacional",
    "C": "floresta",
    "D": "domínio raiz",
    "E": "partição"
  },
  "gabarito": "C",
  "comentario": "A floresta é o limite de segurança e compartilha esquema, configuração e GC.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0024",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Windows Server",
  "ref_apostila": {
    "modulo": "04",
    "secao": "11",
    "titulo": "Windows Server",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#11. Windows Server]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §11 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A ordem de processamento das GPOs em um computador membro de domínio é:",
  "imagem": null,
  "alternativas": {
    "A": "domínio, site, UO, local",
    "B": "local, site, domínio, UO",
    "C": "UO, domínio, site, local",
    "D": "site, local, domínio, UO",
    "E": "local, domínio, site, UO"
  },
  "gabarito": "B",
  "comentario": "LSDOU: Local, Site, Domínio, UO. A última aplicada (a UO mais próxima) prevalece em conflitos, salvo GPO imposta (Enforced).",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0025",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Windows Server",
  "ref_apostila": {
    "modulo": "04",
    "secao": "11",
    "titulo": "Windows Server",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#11. Windows Server]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §11 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Para garantir que uma impressora de rede receba sempre o mesmo endereço IP do servidor DHCP, o administrador deve configurar:",
  "imagem": null,
  "alternativas": {
    "A": "uma exclusão",
    "B": "um superescopo",
    "C": "uma reserva baseada no endereço MAC",
    "D": "a opção 006",
    "E": "um agente de retransmissão"
  },
  "gabarito": "C",
  "comentario": "Reserva = IP fixo para um MAC. Exclusão impede a distribuição; a opção 006 define os DNS.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0026",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Windows Server",
  "ref_apostila": {
    "modulo": "04",
    "secao": "11",
    "titulo": "Windows Server",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#11. Windows Server]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §11 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "As funções FSMO que existem uma única vez em toda a floresta são:",
  "imagem": null,
  "alternativas": {
    "A": "RID Master e PDC Emulator",
    "B": "Schema Master e Domain Naming Master",
    "C": "Infrastructure Master e RID Master",
    "D": "PDC Emulator e Schema Master",
    "E": "Domain Naming Master e Infrastructure Master"
  },
  "gabarito": "B",
  "comentario": "Schema Master e Domain Naming Master são por floresta; RID, PDC Emulator e Infrastructure, por domínio.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0027",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Windows Server",
  "ref_apostila": {
    "modulo": "04",
    "secao": "11",
    "titulo": "Windows Server",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#11. Windows Server]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §11 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um usuário possui permissão NTFS \"Controle Total\" em uma pasta compartilhada cuja permissão de compartilhamento para o grupo Todos é \"Leitura\". Ao acessar a pasta pela rede, sua permissão efetiva será:",
  "imagem": null,
  "alternativas": {
    "A": "Controle Total",
    "B": "Modificar",
    "C": "Leitura",
    "D": "Nenhuma",
    "E": "Gravação"
  },
  "gabarito": "C",
  "comentario": "Pela rede vale a mais restritiva entre a permissão de compartilhamento e a NTFS.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0028",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Linux",
  "ref_apostila": {
    "modulo": "04",
    "secao": "12",
    "titulo": "Linux",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#12. Linux]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §12 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em um sistema Linux, o comando `chmod 640 dados.csv` atribui ao arquivo as permissões:",
  "imagem": null,
  "alternativas": {
    "A": "rw-r-----",
    "B": "rwxr-----",
    "C": "rw-rw----",
    "D": "r--rw----",
    "E": "rw-r--r--"
  },
  "gabarito": "A",
  "comentario": "6 = rw-, 4 = r--, 0 = ---.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0029",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Linux",
  "ref_apostila": {
    "modulo": "04",
    "secao": "12",
    "titulo": "Linux",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#12. Linux]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §12 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O diretório do padrão FHS destinado aos arquivos de configuração do sistema e o destinado a arquivos de log são, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "/conf e /log",
    "B": "/etc e /var/log",
    "C": "/usr e /tmp",
    "D": "/sys e /proc",
    "E": "/opt e /srv"
  },
  "gabarito": "B",
  "comentario": "/etc guarda configurações; /var/log, os logs (dados variáveis).",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0030",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Linux",
  "ref_apostila": {
    "modulo": "04",
    "secao": "12",
    "titulo": "Linux",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#12. Linux]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §12 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Considere o comando `ps aux | grep java | wc -l`. Ele:",
  "imagem": null,
  "alternativas": {
    "A": "encerra todos os processos Java.",
    "B": "conta quantas linhas da lista de processos contêm a palavra \"java\".",
    "C": "exibe o uso de memória dos processos Java.",
    "D": "cria um arquivo chamado wc com a lista de processos.",
    "E": "executa os três comandos de forma independente, sem relação entre si."
  },
  "gabarito": "B",
  "comentario": "O pipe encadeia: lista os processos, filtra as linhas com \"java\" e conta as linhas (incluindo, em geral, a própria linha do `grep`).",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0031",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Linux",
  "ref_apostila": {
    "modulo": "04",
    "secao": "12",
    "titulo": "Linux",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#12. Linux]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §12 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O bit especial que, aplicado ao diretório /tmp, impede que um usuário apague arquivos de outros usuários, é o:",
  "imagem": null,
  "alternativas": {
    "A": "SUID",
    "B": "SGID",
    "C": "sticky bit",
    "D": "umask",
    "E": "noexec"
  },
  "gabarito": "C",
  "comentario": "Sticky bit (`drwxrwxrwt`, 1777).",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0032",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Linux",
  "ref_apostila": {
    "modulo": "04",
    "secao": "12",
    "titulo": "Linux",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#12. Linux]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §12 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Com umask 027, um diretório recém-criado terá as permissões:",
  "imagem": null,
  "alternativas": {
    "A": "750",
    "B": "640",
    "C": "755",
    "D": "700",
    "E": "027"
  },
  "gabarito": "A",
  "comentario": "777 − 027 = 750 (rwxr-x---). Para arquivo seria 666 − 027 → 640.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0033",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Virtualização e contêineres",
  "ref_apostila": {
    "modulo": "04",
    "secao": "13",
    "titulo": "Virtualização e contêineres",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#13. Virtualização e contêineres]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §13 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "São exemplos de hipervisores do tipo 1 (bare-metal):",
  "imagem": null,
  "alternativas": {
    "A": "VirtualBox e VMware Workstation",
    "B": "VMware ESXi e Microsoft Hyper-V",
    "C": "Docker e Kubernetes",
    "D": "QEMU e Parallels Desktop",
    "E": "VMware Fusion e VirtualBox"
  },
  "gabarito": "B",
  "comentario": "ESXi e Hyper-V rodam diretamente sobre o hardware. VirtualBox, Workstation, Fusion e Parallels são tipo 2; Docker/Kubernetes não são hipervisores.",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});

BANCO.push({
  "id": "ESP-SO-0034",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Sistemas Operacionais",
  "topico": "Virtualização e contêineres",
  "ref_apostila": {
    "modulo": "04",
    "secao": "13",
    "titulo": "Virtualização e contêineres",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#13. Virtualização e contêineres]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §13 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Na paravirtualização:",
  "imagem": null,
  "alternativas": {
    "A": "o SO convidado não precisa de qualquer modificação.",
    "B": "o SO convidado é modificado para se comunicar com o hipervisor por meio de hypercalls.",
    "C": "toda instrução é emulada por software, inclusive as não privilegiadas.",
    "D": "não existe hipervisor.",
    "E": "usa-se exclusivamente em contêineres."
  },
  "gabarito": "B",
  "comentario": "O SO convidado \"sabe\" que é virtualizado e usa hypercalls (Xen é o exemplo clássico).",
  "tags": [],
  "embaralhavel": false,
  "status": "validada",
  "validacao": {
    "por": "importador",
    "em": "2026-11-13",
    "obs": ""
  },
  "versao": 1
});
