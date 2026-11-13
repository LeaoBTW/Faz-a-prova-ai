/*
 * Específicos – Serviços e gerenciamento de redes
 * Gerado por tools/importar.py a partir das fontes do vault (2026-11-13).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 * Rodar o importador de novo sobrescreve este arquivo.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-SERV-0001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §22 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Prometheus, a coleta de métricas ocorre predominantemente",
  "imagem": null,
  "alternativas": {
    "A": "por envio dos alvos ao servidor via SNMP trap.",
    "B": "por raspagem (scrape) periódica, pelo servidor, de endpoints HTTP que expõem métricas.",
    "C": "por leitura direta dos arquivos de log com grok.",
    "D": "por consultas SQL ao banco de cada aplicação.",
    "E": "exclusivamente pelo Pushgateway."
  },
  "gabarito": "B",
  "comentario": "Modelo pull: o servidor busca as métricas em `/metrics`.",
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
  "id": "ESP-SERV-0002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §22 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No pipeline do Logstash, a etapa responsável por transformar e enriquecer os eventos, por exemplo extraindo campos com grok, é:",
  "imagem": null,
  "alternativas": {
    "A": "input.",
    "B": "filter.",
    "C": "output.",
    "D": "codec.",
    "E": "index."
  },
  "gabarito": "B",
  "comentario": "Filter transforma; input recebe; output envia.",
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
  "id": "ESP-SERV-0003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §22 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O Grafana é um banco de séries temporais que substitui o Prometheus no armazenamento de métricas.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "E",
  "comentario": "Grafana só visualiza; o armazenamento fica com Prometheus ou outra fonte.",
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
  "id": "ESP-SERV-0004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §22 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Zabbix, a expressão que define quando um problema deve ser sinalizado com base nos valores coletados é chamada de:",
  "imagem": null,
  "alternativas": {
    "A": "item.",
    "B": "trigger.",
    "C": "template.",
    "D": "host group.",
    "E": "proxy."
  },
  "gabarito": "B",
  "comentario": "Trigger é a condição de alerta; item é o que se coleta.",
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
  "id": "ESP-SERV-0005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
  "ref_apostila": {
    "modulo": "04",
    "secao": "22",
    "titulo": "Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#22. Monitoramento e observabilidade: Zabbix, ELK, Fluentd, Prometheus e Grafana]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §22 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Os três pilares da observabilidade são:",
  "imagem": null,
  "alternativas": {
    "A": "disponibilidade, integridade e confidencialidade.",
    "B": "logs, métricas e traces.",
    "C": "CPU, memória e disco.",
    "D": "latência, tráfego e erros.",
    "E": "agentes, proxies e servidores."
  },
  "gabarito": "B",
  "comentario": "Logs, métricas e traces. D são três dos quatro sinais de ouro.",
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
  "id": "ESP-SERV-0006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "VoIP, ToIP, QoS e multicast",
  "ref_apostila": {
    "modulo": "04",
    "secao": "24",
    "titulo": "VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#24. VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §24 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O protocolo de sinalização de VoIP padronizado pelo IETF, baseado em texto e com métodos como INVITE e BYE, é o:",
  "imagem": null,
  "alternativas": {
    "A": "H.323.",
    "B": "RTP.",
    "C": "SIP.",
    "D": "MGCP.",
    "E": "RTCP."
  },
  "gabarito": "C",
  "comentario": "SIP é do IETF e baseado em texto. H.323 é da ITU-T. RTP transporta mídia, não sinaliza.",
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
  "id": "ESP-SERV-0007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "VoIP, ToIP, QoS e multicast",
  "ref_apostila": {
    "modulo": "04",
    "secao": "24",
    "titulo": "VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#24. VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §24 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em uma rede com QoS DiffServ, o tráfego de voz costuma ser marcado com a classe:",
  "imagem": null,
  "alternativas": {
    "A": "Best Effort (DSCP 0).",
    "B": "AF11.",
    "C": "EF (DSCP 46).",
    "D": "CS1.",
    "E": "AF41."
  },
  "gabarito": "C",
  "comentario": "EF (Expedited Forwarding, DSCP 46) é a classe de baixa latência para voz.",
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
  "id": "ESP-SERV-0008",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "VoIP, ToIP, QoS e multicast",
  "ref_apostila": {
    "modulo": "04",
    "secao": "24",
    "titulo": "VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#24. VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §24 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O IGMP é usado por hosts IPv4 para informar ao roteador local seu interesse em participar de grupos multicast.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "IGMP funciona entre hosts e roteador local; entre roteadores usa-se PIM.",
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
  "id": "ESP-SERV-0009",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "VoIP, ToIP, QoS e multicast",
  "ref_apostila": {
    "modulo": "04",
    "secao": "24",
    "titulo": "VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#24. VoIP, ToIP, QoS e multicast; SDN, NFV e VXLAN]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §24 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A tecnologia de overlay que encapsula quadros Ethernet em UDP e oferece identificador de segmento de 24 bits é:",
  "imagem": null,
  "alternativas": {
    "A": "VLAN 802.1Q.",
    "B": "MPLS.",
    "C": "VXLAN.",
    "D": "GRE.",
    "E": "PPPoE."
  },
  "gabarito": "C",
  "comentario": "VXLAN usa VNI de 24 bits e UDP 4789. VLAN tem ID de 12 bits.",
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
  "id": "ESP-SERV-0010",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "25",
    "titulo": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#25. Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §25 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Apache HTTP Server, o MPM que usa múltiplas threads por processo e trata conexões keep-alive de forma assíncrona é o:",
  "imagem": null,
  "alternativas": {
    "A": "prefork.",
    "B": "worker.",
    "C": "event.",
    "D": "winnt.",
    "E": "itk."
  },
  "gabarito": "C",
  "comentario": "O event é derivado do worker, com tratamento assíncrono de keep-alive.",
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
  "id": "ESP-SERV-0011",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "25",
    "titulo": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#25. Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §25 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No IIS, o recurso que isola aplicações em processos de trabalho distintos, aumentando estabilidade e segurança, é o:",
  "imagem": null,
  "alternativas": {
    "A": "VirtualHost.",
    "B": "pool de aplicativos.",
    "C": "binding.",
    "D": ".htaccess.",
    "E": "MPM."
  },
  "gabarito": "B",
  "comentario": "Application pools isolam aplicações em processos `w3wp.exe` separados.",
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
  "id": "ESP-SERV-0012",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "25",
    "titulo": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#25. Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §25 – Q3",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "O JBoss EAP é a distribuição comercial com suporte da Red Hat baseada no projeto open source WildFly.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "",
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
  "id": "ESP-SERV-0013",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "25",
    "titulo": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#25. Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §25 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No WildFly, o modo que permite administrar centralizadamente várias instâncias de servidor a partir de um controlador é o:",
  "imagem": null,
  "alternativas": {
    "A": "standalone.",
    "B": "domain.",
    "C": "cluster-only.",
    "D": "embedded.",
    "E": "bootable jar."
  },
  "gabarito": "B",
  "comentario": "O modo domain tem domain controller e host controllers.",
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
  "id": "ESP-SERV-0014",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "Serviços e gerenciamento de redes",
  "topico": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
  "ref_apostila": {
    "modulo": "04",
    "secao": "25",
    "titulo": "Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#25. Servidores web e de aplicação: Apache HTTP Server, IIS, WildFly e JBoss EAP]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §25 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Diferentemente do WildFly, o Apache Tomcat é classificado como:",
  "imagem": null,
  "alternativas": {
    "A": "servidor de aplicação Jakarta EE completo.",
    "B": "contêiner de servlets, que implementa apenas parte das especificações Jakarta EE.",
    "C": "servidor de banco de dados.",
    "D": "balanceador de carga de camada 4.",
    "E": "servidor de e-mail."
  },
  "gabarito": "B",
  "comentario": "Tomcat é contêiner de servlet/JSP, não implementa o Jakarta EE completo.",
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
