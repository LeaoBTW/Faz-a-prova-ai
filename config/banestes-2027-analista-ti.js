/*
 * Configuração do concurso: Banestes – Edital 01/2027 (FCC)
 * Cargo 04 – Analista de TI – Desenvolvimento de Sistemas.
 * Para outro concurso, copie este arquivo, troque o id e carregue-o no index.html.
 */
window.CONFIGS = window.CONFIGS || {};
window.CONFIGS["banestes-2027-analista-ti"] = {
  id: "banestes-2027-analista-ti",
  nome: "Banestes 2027 – Analista de TI (Desenvolvimento de Sistemas)",
  banca: "FCC",
  edital: "01/2027",
  data_prova: "2027-02-21",
  tempo_min: 240,              // 4 horas
  minutos_por_questao_mini: 3, // mini-simulado: tempo proporcional
  nota_minima: 6.0,
  meta_nota: [7.5, 8.0],
  desconto_por_erro: false,
  alternativas: 5,

  // 4.1 Estrutura da prova
  blocos: [
    {
      id: "gerais", nome: "Conhecimentos Gerais", peso: 1, pontos_por_questao: 1,
      materias: [
        { nome: "Língua Portuguesa", questoes: 10, sigla: "LP" },
        { nome: "Raciocínio Lógico e Estatística", questoes: 10, sigla: "RLE" },
        { nome: "Atualidades do Mercado Financeiro e Digital", questoes: 5, sigla: "ATU" },
        { nome: "Ética, Compliance e ESG", questoes: 5, sigla: "ETI" }
      ]
    },
    {
      id: "especificos", nome: "Conhecimentos Específicos", peso: 2, pontos_por_questao: 1.2,
      materias: [
        { nome: "Desenvolvimento de Sistemas", questoes: 50, sigla: "ESP" }
      ]
    }
  ],

  // 4.2 Divisão dos 50 Específicos por eixo (proposta editável; o edital não fixa)
  eixos: [
    { nome: "Processo de desenvolvimento de software", sigla: "PROC", questoes: 7 },
    { nome: "Programação", sigla: "PROG", questoes: 7 },
    { nome: "Gestão e Governança de TI", sigla: "GOV", questoes: 6 },
    { nome: "Banco de Dados", sigla: "BD", questoes: 6 },
    { nome: "Desenvolvimento web e mobile", sigla: "WEB", questoes: 5 },
    { nome: "Segurança da Informação", sigla: "SEG", questoes: 4 },
    { nome: "Arquitetura de sistemas", sigla: "ARQ", questoes: 3 },
    { nome: "DevOps e DevSecOps", sigla: "DEVOPS", questoes: 3 },
    { nome: "Sistemas Operacionais", sigla: "SO", questoes: 3 },
    { nome: "Redes de computadores", sigla: "REDES", questoes: 3 },
    { nome: "Serviços e gerenciamento de redes", sigla: "SERV", questoes: 2 },
    { nome: "Computação em nuvem", sigla: "NUVEM", questoes: 1 }
  ],

  // Nota = (Gerais + 2 × Específicos) / 3, cada bloco de 0 a 10.
  // Em pontos: Gerais 1 por questão, Específicos 1,2 por questão, total 90 (nota = pontos ÷ 9).
  pontos_total: 90,

  // Resultado de 2024 (Instituto ACCESS, cargo 304) para comparar o percentual de acerto.
  posicoes_2024: [
    { posicao: 1, percentual: 84, rotulo: "1º colocado" },
    { posicao: 10, percentual: 81, rotulo: "10º" },
    { posicao: 50, percentual: 74, rotulo: "50º" },
    { posicao: 100, percentual: 71, rotulo: "100º" },
    { posicao: 242, percentual: 65, rotulo: "242º (vagas de ampla concorrência)" },
    { posicao: 439, percentual: 59, rotulo: "439º (número de vagas de CR de 2024)" },
    { posicao: 652, percentual: 50, rotulo: "último aprovado (652º)" }
  ],
  presentes_2024: 1138,

  // Provas reais disponíveis no modo "Refazer prova real"
  provas_reais: [
    { id: "banestes-2021", nome: "Banestes 2021 (FGV)", questoes: 60, tempo_min: 240,
      observacao: "5 alternativas. Anuladas: Q21 e Q22 (contam como acerto)." },
    { id: "banestes-2024", nome: "Banestes 2024 (Instituto ACCESS)", questoes: 80, tempo_min: 240,
      observacao: "4 alternativas. Anuladas: Q12, Q32 e Q43 (contam como acerto). Pontuação original: 110 pontos (Específicos peso 2).",
      pontuacao_original: { especificos_peso: 2, total: 110 } }
  ],

  // Caderno de erros: intervalos de revisão (dias) e acertos seguidos para sair.
  caderno: { intervalos_dias: [1, 3, 7], acertos_para_sair: 2 }
};
