/* =============================================================
   DADOS DO CALENDÁRIO — TURMA INFO 25 (IFSC)
   ============================================================= */

const DADOS = {
  turma: "Turma Info 25",
  instituicao: "IFSC — Câmpus Garopaba",

  meses: [
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
            ter: {
              materia: "Banco de Dados",
              titulo: "Prova de Assinalar",
              assunto: "SQL - DML",
              data: "2026-09-08",
              conteudo: [
                "Manipulando tabelas",
                "Introdução à SQL-DML"
              ],
              anexo: {
                nome: "Apresentação SQL-DML",
                link: "https://docs.google.com/presentation/d/1NufyxhGE6XRZG4R0G3ONJpQB1QzAbb8y0xexLUrO2Bw/edit?slide=id.p1#slide=id.p1"
              }
            },
            qua: {
              materia: "PES",
              titulo: "Recuperação da Prova",
              assunto: "Módulo Básico de Python",
              data: "2026-09-09",
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
            sex: {
              materia: "História / Biologia",
              titulo: "Apresentação de História / Aula Prática de Biologia",
              assunto: "Ideologia / Tipos Sanguíneos",
              data: "2026-09-11",
              conteudo: [
                "HISTÓRIA: Confeccionar um cartaz sobre a ideologia que seu grupo recebeu, a explicando, em casos de ideologias erradas e as defendendo no caso das outras ideologias.",
                "BIOLOGIA: Testes de tipagem sanguínea, a ver com genética."
              ],
              anexo: null
            }
          }
        },
        {
          faixa: "14–18",
          provas: {
            seg: {
              materia: "Filosofia",
              titulo: "Prova",
              assunto: "Maquiavel, Contratualismo",
              data: "2026-09-14",
              conteudo: [
                "Nicolau Maquiavel",
                "Thomas Hobbes",
                "John Locke",
                "Jean-Jacques Rousseau"
              ],
              anexo: null
            },
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
              materia: "História / Matemática / Biologia",
              titulo: "Apresentação de História / Prova de Matemática / Atividade de Biologia",
              assunto: "Ideologia / Logaritmos / Genética",
              data: "2026-09-18",
              conteudo: [
                "HISTÓRIA: Confeccionar um cartaz sobre a ideologia que seu grupo recebeu.",
                "MATEMÁTICA: Definição de Logarítmo e Propriedades operatórias.",
                "BIOLOGIA: Herança não mendeliana."
              ],
              anexo: null
            }
          }
        },
        {
          faixa: "21–25",
          provas: {
            seg: {
              materia: "Química",
              titulo: "Avaliação de química",
              assunto: "A definir",
              data: "2026-09-21",
              conteudo: [
                "Conteúdo a definir"
              ],
              anexo: null
            },
            qui: {
              materia: "História",
              titulo: "Avaliação de História",
              assunto: "A definir",
              data: "2026-09-24",
              conteudo: [
                "Conteúdo a definir"
              ],
              anexo: null
            }
          }
        },
        { faixa: "28–2", provas: {} }
      ]
    }
  ],

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