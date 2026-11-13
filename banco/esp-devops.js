/*
 * Específicos – DevOps e DevSecOps
 * Gerado por tools/importar.py a partir das fontes do vault (2026-11-13).
 * Cada BANCO.push recebe um objeto JSON válido (chaves entre aspas) — ver docs/esquema.md.
 * Rodar o importador de novo sobrescreve este arquivo.
 */
window.BANCO = window.BANCO || [];

BANCO.push({
  "id": "ESP-DEVOPS-0001",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Virtualização e contêineres",
  "ref_apostila": {
    "modulo": "04",
    "secao": "13",
    "titulo": "Virtualização e contêineres",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#13. Virtualização e contêineres]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §13 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A principal diferença entre contêineres e máquinas virtuais é que os contêineres:",
  "imagem": null,
  "alternativas": {
    "A": "emulam o hardware completo, incluindo BIOS.",
    "B": "exigem um sistema operacional convidado completo para cada instância.",
    "C": "compartilham o kernel do sistema operacional hospedeiro, sendo mais leves.",
    "D": "oferecem isolamento mais forte que as VMs.",
    "E": "só podem ser executados em hipervisores tipo 2."
  },
  "gabarito": "C",
  "comentario": "Contêineres virtualizam o SO e compartilham o kernel; por isso são leves, mas com isolamento mais fraco que VMs.",
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
  "id": "ESP-DEVOPS-0002",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Virtualização e contêineres",
  "ref_apostila": {
    "modulo": "04",
    "secao": "13",
    "titulo": "Virtualização e contêineres",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#13. Virtualização e contêineres]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §13 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Linux, os recursos do kernel que fornecem, respectivamente, o isolamento da visão do processo e a limitação de uso de CPU e memória dos contêineres são:",
  "imagem": null,
  "alternativas": {
    "A": "cgroups e namespaces",
    "B": "namespaces e cgroups",
    "C": "chroot e SELinux",
    "D": "iptables e systemd",
    "E": "LVM e OverlayFS"
  },
  "gabarito": "B",
  "comentario": "Namespaces isolam (o que o processo vê); cgroups limitam (quanto o processo usa).",
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
  "id": "ESP-DEVOPS-0003",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FGV",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "Virtualização e contêineres",
  "ref_apostila": {
    "modulo": "04",
    "secao": "13",
    "titulo": "Virtualização e contêineres",
    "link": "[[04 - Fundamentos, SO, Redes e Segurança#13. Virtualização e contêineres]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 04 §13 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "No Docker, a instrução de Dockerfile executada durante a construção da imagem, gerando uma nova camada, é:",
  "imagem": null,
  "alternativas": {
    "A": "CMD",
    "B": "ENTRYPOINT",
    "C": "RUN",
    "D": "EXPOSE",
    "E": "VOLUME"
  },
  "gabarito": "C",
  "comentario": "RUN executa no build; CMD e ENTRYPOINT definem o que roda quando o contêiner inicia; EXPOSE só documenta a porta.",
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
  "id": "ESP-DEVOPS-0004",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "FCC",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §12 – Q1",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A prática em que toda alteração aprovada em todas as etapas automatizadas do pipeline é colocada automaticamente em produção, sem intervenção humana, denomina-se:",
  "imagem": null,
  "alternativas": {
    "A": "integração contínua.",
    "B": "entrega contínua.",
    "C": "implantação contínua.",
    "D": "blue-green deployment.",
    "E": "feature toggle."
  },
  "gabarito": "C",
  "comentario": "Implantação contínua (continuous deployment). Na entrega contínua a ida para produção depende de decisão manual.",
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
  "id": "ESP-DEVOPS-0005",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §12 – Q2",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Diferentemente das máquinas virtuais, os contêineres compartilham o kernel do sistema operacional hospedeiro, o que os torna mais leves e rápidos para iniciar, embora com isolamento em geral menos forte.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Contêineres virtualizam o SO e compartilham o kernel; VMs têm SO próprio e isolamento mais forte.",
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
  "id": "ESP-DEVOPS-0006",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "ACCESS",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §12 – Q4",
    "id_pai": null,
    "anulada": false
  },
  "formato": "multipla_5",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "A estratégia de implantação que libera a nova versão inicialmente para uma pequena parcela de usuários, ampliando gradualmente conforme o comportamento observado, é a:",
  "imagem": null,
  "alternativas": {
    "A": "blue-green.",
    "B": "canary.",
    "C": "recreate.",
    "D": "big bang.",
    "E": "cascata."
  },
  "gabarito": "B",
  "comentario": "Canary release.",
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
  "id": "ESP-DEVOPS-0007",
  "concursos": [
    "banestes-2027-analista-ti"
  ],
  "banca_estilo": "Cebraspe",
  "bloco": "especificos",
  "materia": "Desenvolvimento de Sistemas",
  "eixo": "DevOps e DevSecOps",
  "topico": "DevOps, CI/CD, IaC, contêineres e Git",
  "ref_apostila": {
    "modulo": "06",
    "secao": "12",
    "titulo": "DevOps, CI/CD, IaC, contêineres e Git",
    "link": "[[06 - Engenharia de Software, Requisitos e Desenvolvimento#12. DevOps, CI/CD, IaC, contêineres e Git]]"
  },
  "origem": {
    "tipo": "apostila",
    "fonte": "Apostila 06 §12 – Q5",
    "id_pai": null,
    "anulada": false
  },
  "formato": "certo_errado",
  "dificuldade": 2,
  "texto_base": null,
  "enunciado": "Em infraestrutura como código, a idempotência garante que aplicar repetidas vezes a mesma definição produza o mesmo estado final da infraestrutura.",
  "imagem": null,
  "alternativas": null,
  "gabarito": "C",
  "comentario": "Essa é a definição de idempotência em IaC.",
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
