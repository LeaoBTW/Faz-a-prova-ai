/*
 * Específicos – Redes de computadores
 * Gerado por tools/importar.py a partir das fontes do vault (2026-11-13).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 * Rodar o importador de novo sobrescreve este arquivo.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-REDES-0001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Modelo OSI: camada de aplicação",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q74",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 74
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O modelo OSI (Open Systems Interconnection) é um modelo conceitual que descreve as funcionalidades de comunicação de rede em sistemas de computadores. Nas suas camadas, possui uma camada que contém uma série de protocolos comumente necessários para os usuários. Um protocolo amplamente utilizado é o HTTP (HyperText Transfer Protocol), que constitui a base para a World Wide Web. Quando um navegador deseja uma página da Web, ele envia o nome da página desejada ao servidor, utilizando o HTTP. Marque a alternativa que corresponde corretamente a essa camada?",
  "imagem": null,
  "alternativas": {
    "A": "Camada de apresentação.",
    "B": "Camada de aplicação.",
    "C": "Camada de transporte.",
    "D": "Camada de enlace de dados."
  },
  "gabarito": "B",
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
  "id": "ESP-REDES-0002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Modelo OSI: camada de sessão",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "prova_real",
    "fonte": "Banestes 2024 (ACCESS) – Q75",
    "id_pai": null,
    "anulada": false,
    "prova": "banestes-2024",
    "numero": 75
  },
  "formato": "multipla_4",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A camada responsável por estabelecer, gerenciar e encerrar as conexões entre os aplicativos em diferentes dispositivos, por um certo período de comunicação e garantindo que as comunicações possam ser estabelecidas, mantidas e finalizadas de forma adequada. É a camada?",
  "imagem": null,
  "alternativas": {
    "A": "Camada de apresentação.",
    "B": "Camada de sessão.",
    "C": "Camada física.",
    "D": "Camada de rede."
  },
  "gabarito": "B",
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
  "id": "ESP-REDES-0003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "TCP e UDP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "simulado",
    "fonte": "Simulado FCC 1 – Q25",
    "id_pai": null,
    "anulada": false,
    "prova": "simulado-fcc-1",
    "numero": 25
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre os protocolos da camada de transporte da arquitetura TCP/IP, considere:\n\nI. O TCP é orientado a conexão e estabelece a conexão pelo three-way handshake (SYN, SYN-ACK, ACK).\nII. O UDP garante a entrega e a ordem dos segmentos, por isso é preferido em transferências de arquivos.\nIII. O UDP tem menor overhead e é usado em aplicações sensíveis à latência, como streaming e consultas DNS comuns.\n\nEstá correto o que se afirma APENAS em",
  "imagem": null,
  "alternativas": {
    "A": "I.",
    "B": "II.",
    "C": "I e III.",
    "D": "II e III.",
    "E": "I e II."
  },
  "gabarito": "C",
  "comentario": "II está errada: quem garante entrega e ordem é o TCP. UDP é sem conexão, com menos overhead\n\nRevisar: Módulo 04, Redes",
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
  "id": "ESP-REDES-0004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §14 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No modelo OSI, as funções de criptografia, compressão e conversão de formatos de dados pertencem à camada de:",
  "imagem": null,
  "alternativas": {
    "A": "sessão",
    "B": "apresentação",
    "C": "aplicação",
    "D": "transporte",
    "E": "enlace"
  },
  "gabarito": "B",
  "comentario": "Apresentação: sintaxe, criptografia, compressão. Sessão cuida de diálogo e sincronização.",
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
  "id": "ESP-REDES-0005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §14 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Um switch de 24 portas, sem VLANs configuradas, com 24 computadores conectados, apresenta:",
  "imagem": null,
  "alternativas": {
    "A": "1 domínio de colisão e 24 de broadcast",
    "B": "24 domínios de colisão e 1 de broadcast",
    "C": "24 domínios de colisão e 24 de broadcast",
    "D": "1 domínio de colisão e 1 de broadcast",
    "E": "nenhum domínio de colisão"
  },
  "gabarito": "B",
  "comentario": "Cada porta do switch é um domínio de colisão; sem VLANs, todas compartilham um domínio de broadcast.",
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
  "id": "ESP-REDES-0006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §14 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O método de acesso ao meio utilizado nas redes IEEE 802.11 é o:",
  "imagem": null,
  "alternativas": {
    "A": "CSMA/CD",
    "B": "token passing",
    "C": "CSMA/CA",
    "D": "TDMA",
    "E": "ALOHA puro"
  },
  "gabarito": "C",
  "comentario": "CSMA/CA (prevenção de colisões), pois em rádio não é possível detectá-las durante a transmissão. CSMA/CD é da Ethernet half-duplex.",
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
  "id": "ESP-REDES-0007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §14 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O padrão Wi-Fi que introduziu o uso da faixa de 6 GHz, comercialmente denominado Wi-Fi 6E, é uma extensão do:",
  "imagem": null,
  "alternativas": {
    "A": "802.11n",
    "B": "802.11ac",
    "C": "802.11ax",
    "D": "802.11g",
    "E": "802.11b"
  },
  "gabarito": "C",
  "comentario": "Wi-Fi 6 = 802.11ax; o 6E estende-o para 6 GHz. Wi-Fi 7 = 802.11be.",
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
  "id": "ESP-REDES-0008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
  "ref_apostila": {
    "modulo": "04",
    "secao": "14",
    "titulo": "Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#14. Redes: modelos OSI e TCP/IP, topologias, LAN, WAN e wireless]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §14 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o WPA3, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "utiliza RC4 com vetor de inicialização de 24 bits.",
    "B": "substitui a autenticação PSK pelo SAE, resistente a ataques de dicionário offline.",
    "C": "é incompatível com o padrão 802.1X.",
    "D": "dispensa qualquer tipo de criptografia em redes abertas.",
    "E": "baseia-se no protocolo TKIP."
  },
  "gabarito": "B",
  "comentario": "SAE (\"Dragonfly\"). RC4 com IV de 24 bits é o WEP; TKIP, o WPA; o WPA3-Enterprise usa 802.1X; o OWE criptografa redes abertas.",
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
  "id": "ESP-REDES-0009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Endereçamento IPv4/IPv6 e sub-redes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "15",
    "titulo": "Endereçamento IPv4/IPv6 e sub-redes",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#15. Endereçamento IPv4/IPv6 e sub-redes]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §15 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O endereço de broadcast da sub-rede à qual pertence o host 10.20.30.140/27 é:",
  "imagem": null,
  "alternativas": {
    "A": "10.20.30.159",
    "B": "10.20.30.143",
    "C": "10.20.30.191",
    "D": "10.20.30.255",
    "E": "10.20.30.127"
  },
  "gabarito": "A",
  "comentario": "/27 → bloco 32: 128–159. Rede 10.20.30.128, broadcast 10.20.30.159.",
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
  "id": "ESP-REDES-0010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Endereçamento IPv4/IPv6 e sub-redes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "15",
    "titulo": "Endereçamento IPv4/IPv6 e sub-redes",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#15. Endereçamento IPv4/IPv6 e sub-redes]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §15 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Qual dos endereços abaixo é privado segundo a RFC 1918?",
  "imagem": null,
  "alternativas": {
    "A": "172.32.10.1",
    "B": "192.169.1.1",
    "C": "172.20.5.4",
    "D": "169.254.10.10",
    "E": "11.0.0.1"
  },
  "gabarito": "C",
  "comentario": "172.20.x.x está em 172.16.0.0/12 (172.16–172.31). 172.32 está fora; 169.254 é link-local; 192.169 não é 192.168.",
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
  "id": "ESP-REDES-0011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Endereçamento IPv4/IPv6 e sub-redes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "15",
    "titulo": "Endereçamento IPv4/IPv6 e sub-redes",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#15. Endereçamento IPv4/IPv6 e sub-redes]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §15 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Uma rede necessita de sub-redes com até 60 hosts cada. A máscara mais econômica é:",
  "imagem": null,
  "alternativas": {
    "A": "255.255.255.128",
    "B": "255.255.255.192",
    "C": "255.255.255.224",
    "D": "255.255.255.240",
    "E": "255.255.255.248"
  },
  "gabarito": "B",
  "comentario": "/26 → 62 hosts úteis ≥ 60. /27 daria só 30.",
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
  "id": "ESP-REDES-0012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Endereçamento IPv4/IPv6 e sub-redes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "15",
    "titulo": "Endereçamento IPv4/IPv6 e sub-redes",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#15. Endereçamento IPv4/IPv6 e sub-redes]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §15 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A forma abreviada correta do endereço IPv6 2001:0db8:0000:0000:0001:0000:0000:0abc é:",
  "imagem": null,
  "alternativas": {
    "A": "2001:db8::1::abc",
    "B": "2001:db8::1:0:0:abc",
    "C": "2001:db8:0:0:1::abc",
    "D": "2001:db8::1:abc",
    "E": "Tanto (b) quanto (c) são representações válidas"
  },
  "gabarito": "E",
  "comentario": "As duas sequências de zeros têm o mesmo tamanho (2 grupos); pode-se comprimir qualquer uma delas (a RFC 5952 recomenda a primeira, ou seja, a forma b), mas ambas são válidas. A forma (a) é inválida (dois \"::\"), e (d) perde zeros, mudando o endereço.",
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
  "id": "ESP-REDES-0013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Endereçamento IPv4/IPv6 e sub-redes",
  "ref_apostila": {
    "modulo": "04",
    "secao": "15",
    "titulo": "Endereçamento IPv4/IPv6 e sub-redes",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#15. Endereçamento IPv4/IPv6 e sub-redes]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §15 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o IPv6, é INCORRETO afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "os endereços possuem 128 bits.",
    "B": "o protocolo NDP substitui as funções do ARP.",
    "C": "os endereços link-local iniciam com fe80::/10.",
    "D": "o broadcast é amplamente utilizado para descoberta de vizinhos.",
    "E": "o cabeçalho base tem tamanho fixo de 40 bytes."
  },
  "gabarito": "D",
  "comentario": "IPv6 não tem broadcast; usa multicast (mensagens NDP em ICMPv6).",
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
  "id": "ESP-REDES-0014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Protocolos e serviços, Web Services e VPN",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §16 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Os protocolos que utilizam, por padrão, as portas 22, 53, 143 e 443 são, respectivamente:",
  "imagem": null,
  "alternativas": {
    "A": "Telnet, DNS, POP3, HTTPS",
    "B": "SSH, DNS, IMAP, HTTPS",
    "C": "SSH, DHCP, IMAP, HTTP",
    "D": "FTP, DNS, SMTP, HTTPS",
    "E": "SSH, SNMP, IMAP, LDAPS"
  },
  "gabarito": "B",
  "comentario": "22 = SSH; 53 = DNS; 143 = IMAP; 443 = HTTPS.",
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
  "id": "ESP-REDES-0015",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Protocolos e serviços, Web Services e VPN",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §16 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Sobre o TCP e o UDP, é correto afirmar:",
  "imagem": null,
  "alternativas": {
    "A": "o UDP garante a entrega ordenada dos datagramas.",
    "B": "o TCP estabelece conexão por meio do three-way handshake SYN, SYN-ACK, ACK.",
    "C": "o DNS utiliza exclusivamente TCP.",
    "D": "o cabeçalho UDP possui no mínimo 20 bytes.",
    "E": "o TCP é preferível ao UDP em aplicações de voz em tempo real por ter menor latência."
  },
  "gabarito": "B",
  "comentario": "(a) UDP não garante ordem; (c) DNS usa UDP e TCP; (d) o cabeçalho UDP tem 8 bytes; (e) para voz em tempo real prefere-se UDP.",
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
  "id": "ESP-REDES-0016",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Protocolos e serviços, Web Services e VPN",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §16 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No IPsec, o protocolo que fornece confidencialidade por meio de criptografia da carga útil é o ______, e o modo que encapsula todo o pacote IP original em um novo pacote é o modo ______.",
  "imagem": null,
  "alternativas": {
    "A": "AH; transporte",
    "B": "ESP; túnel",
    "C": "IKE; transporte",
    "D": "AH; túnel",
    "E": "ESP; transporte"
  },
  "gabarito": "B",
  "comentario": "ESP cifra; o modo túnel encapsula o pacote inteiro (site a site). O AH só autentica.",
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
  "id": "ESP-REDES-0017",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Protocolos e serviços, Web Services e VPN",
  "ref_apostila": {
    "modulo": "04",
    "secao": "16",
    "titulo": "Protocolos e serviços, Web Services e VPN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#16. Protocolos e serviços, Web Services e VPN]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §16 – Q6",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O protocolo que permite descobrir o endereço MAC associado a um endereço IPv4 na rede local, e que é alvo de ataques de envenenamento de cache para interceptação de tráfego, é o:",
  "imagem": null,
  "alternativas": {
    "A": "ICMP",
    "B": "DHCP",
    "C": "ARP",
    "D": "DNS",
    "E": "NDP"
  },
  "gabarito": "C",
  "comentario": "ARP (ARP spoofing/poisoning). O NDP faz esse papel no IPv6.",
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
  "id": "ESP-REDES-0018",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Cabeamento estruturado, fibra óptica e testes de desempenho",
  "ref_apostila": {
    "modulo": "04",
    "secao": "23",
    "titulo": "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#23. Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §23 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No cabeamento horizontal em par trançado, o comprimento máximo do canal, incluindo cordões, é de",
  "imagem": null,
  "alternativas": {
    "A": "55 m.",
    "B": "90 m.",
    "C": "100 m.",
    "D": "150 m.",
    "E": "300 m."
  },
  "gabarito": "C",
  "comentario": "100 m de canal = até 90 m de enlace permanente + até 10 m de cordões.",
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
  "id": "ESP-REDES-0019",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Cabeamento estruturado, fibra óptica e testes de desempenho",
  "ref_apostila": {
    "modulo": "04",
    "secao": "23",
    "titulo": "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#23. Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §23 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A categoria de cabo de par trançado que suporta 10 Gbps em canal de 100 m, operando até 500 MHz, é:",
  "imagem": null,
  "alternativas": {
    "A": "Cat 5.",
    "B": "Cat 5e.",
    "C": "Cat 6.",
    "D": "Cat 6A.",
    "E": "Cat 3."
  },
  "gabarito": "D",
  "comentario": "Cat 6A (classe EA), 500 MHz. Cat 6 só chega a 10 Gbps em ~55 m.",
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
  "id": "ESP-REDES-0020",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Cabeamento estruturado, fibra óptica e testes de desempenho",
  "ref_apostila": {
    "modulo": "04",
    "secao": "23",
    "titulo": "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#23. Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §23 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A fibra multimodo, por ter núcleo mais fino e usar laser, é a mais indicada para enlaces de longa distância.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Quem tem núcleo fino e usa laser é a **monomodo**, indicada para longas distâncias.",
  "tags": [
    "certo-errado"
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
  "id": "ESP-REDES-0021",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Cabeamento estruturado, fibra óptica e testes de desempenho",
  "ref_apostila": {
    "modulo": "04",
    "secao": "23",
    "titulo": "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#23. Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §23 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A RFC 2544 define metodologia de teste que inclui, entre outras, as medições de:",
  "imagem": null,
  "alternativas": {
    "A": "vazão, latência, perda de quadros e quadros back-to-back.",
    "B": "jitter de voz, MOS e eco.",
    "C": "disponibilidade de serviços web e tempo de resposta HTTP.",
    "D": "atenuação, NEXT e perda de retorno em cabos.",
    "E": "cobertura e interferência em redes sem fio."
  },
  "gabarito": "A",
  "comentario": "São os testes básicos da RFC 2544. D são testes de certificação de cabeamento.",
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
  "id": "ESP-REDES-0022",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "Cabeamento estruturado, fibra óptica e testes de desempenho",
  "ref_apostila": {
    "modulo": "04",
    "secao": "23",
    "titulo": "Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#23. Cabeamento estruturado, fibra óptica e testes de desempenho (NBR 14565, RFC 2544/2889)]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §23 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O padrão IEEE que trata do controle de acesso à rede baseado em porta, com autenticação via EAP, é o:",
  "imagem": null,
  "alternativas": {
    "A": "802.1D.",
    "B": "802.1Q.",
    "C": "802.1X.",
    "D": "802.3af.",
    "E": "802.11ax."
  },
  "gabarito": "C",
  "comentario": "802.1X é controle de acesso por porta. 802.1Q é VLAN; 802.3af é PoE.",
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
  "id": "ESP-REDES-0023",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Redes de computadores",
  "topico": "VoIP, ToIP, QoS e multicast",
  "ref_apostila": {
    "modulo": "04",
    "secao": "24",
    "titulo": "VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#24. VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §24 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A característica central das redes definidas por software (SDN) é:",
  "imagem": null,
  "alternativas": {
    "A": "virtualizar firewalls em servidores x86.",
    "B": "separar o plano de controle do plano de dados, com controle centralizado programável.",
    "C": "substituir o IP por circuitos virtuais.",
    "D": "eliminar o uso de switches.",
    "E": "usar exclusivamente fibra monomodo."
  },
  "gabarito": "B",
  "comentario": "A descreve NFV.",
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
