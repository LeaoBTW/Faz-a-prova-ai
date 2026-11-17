/*
 * Configuração do concurso: Banestes – Edital 01/2026 (FCC), nível médio
 * Cargo TB – Técnico Bancário.
 * As questões vêm do banco comum: banco/tecnico-bancario.js (gerado por tools/tecnico_bancario.py)
 * diz quais questões valem para este concurso e em qual matéria cada uma entra.
 */
window.CONFIGS = window.CONFIGS || {};
window.CONFIGS["banestes-2026-tecnico-bancario"] = {
  id: "banestes-2026-tecnico-bancario",
  nome: "Banestes 2026 – Técnico Bancário",
  nome_curto: "Banestes 2026 · Técnico Bancário",
  instituicao: "Banestes",
  cargo: "Técnico Bancário",
  banca: "FCC",
  edital: "01/2026",
  data_prova: "2027-01-24",
  tempo_min: 240,              // 4 horas
  minutos_por_questao_mini: 3,
  nota_minima: 6.0,
  meta_nota: [7.5, 8.0],
  desconto_por_erro: false,
  alternativas: 5,

  // Edital 01/2026, item 8.1: 30 Gerais (peso 1) + 40 Específicos (peso 2)
  blocos: [
    {
      id: "gerais", nome: "Conhecimentos Gerais", peso: 1, pontos_por_questao: 1,
      materias: [
        { nome: "Língua Portuguesa", questoes: 10, sigla: "LP" },
        { nome: "Matemática/Raciocínio Lógico e Quantitativo", questoes: 10, sigla: "MAT" },
        { nome: "Atualidades do Mercado Financeiro", questoes: 5, sigla: "ATU" },
        { nome: "Ética, Compliance e ESG", questoes: 5, sigla: "ETI" }
      ]
    },
    {
      id: "especificos", nome: "Conhecimentos Específicos", peso: 2, pontos_por_questao: 1.5,
      materias: [
        { nome: "Conhecimentos Bancários e Securitários", questoes: 15, sigla: "CB" },
        { nome: "Matemática Financeira", questoes: 5, sigla: "MF" },
        { nome: "Noções de Probabilidade e Estatística", questoes: 5, sigla: "PE" },
        { nome: "Noções de Informática e Comportamentos Digitais", questoes: 5, sigla: "INF" },
        { nome: "Vendas, Negociação e Atendimento", questoes: 10, sigla: "VNA" }
      ]
    }
  ],

  // Nota = (Gerais + 2 × Específicos) / 3, cada bloco de 0 a 10.
  // Em pontos: Gerais 1 por questão, Específicos 1,5 por questão, total 90 (nota = pontos ÷ 9).
  pontos_total: 90,

  tags_obsidian: ["banestes", "tecnico-bancario"],

  // Sem resultado anterior comparável (o concurso de 2022/2023 foi da FGV, com outra prova).
  historico: null,
  // Prova real do cargo (FGV, 2023): banco/tb-prova-2023.js, gerado por tools/tecnico/gerar.py
  provas_reais: [
    { id: "banestes-2023-tb", nome: "Banestes 2023 – Técnico Bancário (FGV)", questoes: 70, tempo_min: 240,
      observacao: "Banca FGV e edital anterior (Informática em Word/Excel; sem Atualidades, Ética, Matemática Financeira e Estatística como matérias próprias). Anuladas: Q4, Q16, Q43 e Q46 (contam como acerto). Q15, Q17, Q18, Q25 e Q31 dependem de figuras que não foram transcritas." }
  ],

  caderno: { intervalos_dias: [1, 3, 7], acertos_para_sair: 2 }
};
