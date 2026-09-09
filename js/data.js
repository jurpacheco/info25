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
                materia: "História/Biologia",
                titulo: "Ideologias/Aula Prática",
                assunto: "Apresentação de Cartaz/Tipos sanguíneos",
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
                assunto: "Ideologia / Logaritmos / Genetica ",
                data: "2026-09-18",
                conteudo: [
                  "HISTÓRIA: Confeccionar um cartaz sobre a ideologia que seu grupo recebeu.",
                  "MATEMÁTICA: Definição de Logarítmo e Propriedades operatórias.",
                  "BIOLOGIA: Herença não mendaliana."
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