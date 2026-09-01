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
              titulo: "Prova de Língua Portuguesa",
              assunto: "Morfologia e Romantismo",
              data: "2026-08-20",
              conteudo: [
                "Morfologia do português - estrutura da palavra",
                "Romantismo brasileiro: poesia",
                "Estudos gramaticais: morfologia do português",
                "Estrutura das palavras: radical, vogal temática, tema, desinências, afixos",
                "Prefixos, radicais e sufixos (Prefixos, Radicais, Sufixos)",
                "Atividade de morfologia - estrutura da palavra"
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
              titulo: "Prova de Python",
              assunto: "Módulo Básico de Python",
              data: "2026-09-02",
              conteudo: [
                "Entrada e Saída de Dados (input / print)",
                "Conversão de Tipos de Dados (int / float)",
                "Operadores Aritméticos",
                "Operador Resto da Divisão (%)",
                "Operadores Relacionais e Lógicos (and, or, not)",
                "Estruturas Condicionais (if, elif, else)",
                "Estruturas de Repetição (while / for)",
                "Validação de Entrada de Dados",
                "Listas (append, not in, sort)",
                "Dicionários (Chave-Valor)"
              ],
              anexo: null
            },
            qui: {
              materia: "Português",
              titulo: "Recuperação de Língua Portuguesa",
              assunto: "Morfologia e Romantismo",
              data: "2026-09-03",
              conteudo: [
                "Morfologia do português - estrutura da palavra",
                "Romantismo brasileiro: poesia"
              ],
              anexo: null
            }
          }
        },
        {
          faixa: "07–11",
          provas: {
            sex: {
              materia: "Filosofia",
              titulo: "Trabalhos Ideologia - Apresentação",
              assunto: "Apresentação de Cartaz",
              data: "2026-09-11",
              conteudo: [
                "Confeccionar um cartaz sobre a ideologia que seu grupo recebeu, a explicando, em casos de ideologias erradas e as defendendo no caso das outras ideologias."
              ],
              anexo: null
            }
          }
        },
        {
          faixa: "14–18",
          provas: {
            ter: {
              materia: "MCC",
              titulo: "Apresentação de Slides",
              assunto: "Distribuições Linux",
              data: "2026-09-15",
              conteudo: [
                "Trabalho em dupla ou trio",
                "Escolher uma distribuição Linux",
                "Nome e Logo",
                "País e Ano",
                "Baseado em qual distro",
                "Objetivo",
                "Gerenciador de pacote",
                "Propriedade",
                "Comunidade",
                "Vantagem e desvantagem"
              ],
              anexo: null
            },
            sex: {
              materia: "Filosofia",
              titulo: "Trabalhos Ideologia - Apresentação",
              assunto: "Apresentação de Cartaz",
              data: "2026-09-18",
              conteudo: [
                "Confeccionar um cartaz sobre a ideologia que seu grupo recebeu, a explicando, em casos de ideologias erradas e as defendendo no caso das outras ideologias."
              ],
              anexo: null
            }
          }
        },
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