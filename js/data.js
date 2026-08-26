/* ============================================================
   DADOS DO CALENDÁRIO — TURMA INFO 25 (IFSC)
   ------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar no dia a dia.
   Não é preciso saber programar: basta seguir os exemplos abaixo,
   copiando e colando blocos { } para criar novas semanas, provas
   ou meses.

   COMO FUNCIONA:
   - Cada MÊS tem uma lista de SEMANAS.
   - Cada SEMANA tem uma "faixa" (o texto do intervalo de dias,
     ex: "17–21") e um objeto "provas" com o que tem em cada dia.
   - As chaves de "provas" são: seg, ter, qua, qui, sex.
   - Um dia sem prova/conteúdo simplesmente não aparece dentro de
     "provas" (ou pode ser omitido).

   PARA ADICIONAR UMA PROVA/CONTEÚDO, use este modelo:

   qui: {
     materia: "Português",              // nome da matéria (aparece em negrito)
     titulo: "Prova de Português",      // título mostrado na célula e no card
     assunto: "Morfologia",             // linha de baixo, mais clara
     data: "2026-08-20",                // data real (AAAA-MM-DD) -> usada na contagem regressiva
     conteudo: [                        // lista do conteúdo cobrado (aparece ao clicar)
       "Tópico 1",
       "Tópico 2"
     ],
     anexo: null                        // ou: { nome: "Lista de exercícios", link: "anexos/lista1.pdf" }
   }

   PARA ADICIONAR UM NOVO MÊS: copie um bloco inteiro de mês
   (de "{ nome: ... }" até o fechamento "}," correspondente) e
   cole depois do último mês da lista "meses", ajustando o nome
   e as semanas. A aba do mês aparece sozinha no site.

   PARA ADICIONAR UM ANEXO (arquivo PDF, imagem, doc etc.):
   1. Coloque o arquivo dentro da pasta "anexos/" do repositório.
   2. No campo "anexo", escreva:
      anexo: { nome: "Nome que aparece no botão", link: "anexos/nome-do-arquivo.pdf" }
   ============================================================ */

const DADOS = {
  turma: "Turma Info 25",
  instituicao: "IFSC — Câmpus Garopaba",

  // -----------------------------------------------------------
  // CALENDÁRIO DE PROVAS, POR MÊS
  // -----------------------------------------------------------
  meses: [
    {
      nome: "Agosto",
      semanas: [
        { faixa: "3–7",   provas: {} },
        { faixa: "10–14", provas: {} },
        {
          faixa: "17–21",
          provas: {
            qui: {
              materia: "Português",
              titulo: "Prova de Português",
              assunto: "Morfologia",
              data: "2026-08-20",
              conteudo: [
                "Classes de palavras: substantivo, adjetivo, verbo, advérbio",
                "Flexões de gênero, número e grau",
                "Processos de formação de palavras (derivação e composição)"
              ],
              anexo: null
            }
          }
        },
        { faixa: "23–28", provas: {} },
        { faixa: "dia 31", provas: {} }
      ]
    },
    {
      nome: "Setembro",
      semanas: [
        {
          faixa: "31–04",
          provas: {
            qua: {
              materia: "PES",
              titulo: "Prova de PES",
              assunto: "Desde linguagem Python até Funções",
              data: "2026-09-02",
              conteudo: [
                "Introdução à linguagem Python: variáveis e tipos de dados",
                "Estruturas condicionais (if / elif / else)",
                "Estruturas de repetição (for / while)",
                "Definição e uso de funções"
              ],
              anexo: null
            }
          }
        },
        { faixa: "07–11", provas: {} },
        { faixa: "14–18", provas: {} },
        { faixa: "21–25", provas: {} },
        { faixa: "28–2",  provas: {} }
      ]
    }
  ],

  // -----------------------------------------------------------
  // HORÁRIO SEMANAL DE AULAS
  // Cada dia é uma lista com 4 posições, uma para cada horário
  // definido em "horarios". Deixe "" para um horário vago.
  // -----------------------------------------------------------
  horario: {
    horarios: ["8:00–9:50", "10:10–12:00", "13:30–15:20", "15:40–17:30"],
    dias: {
      seg: ["Química", "Filosofia", "", ""],
      ter: ["", "", "MCC", "BD"],
      qua: ["PES", "PES", "", ""],
      qui: ["EDF", "História", "Português", "Artes"],
      sex: ["Matemática", "Geografia", "PI", "Biologia"]
    }
  }
};
