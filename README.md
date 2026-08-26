# Calendário — Turma Info 25

Site estático (HTML/CSS/JS puro, sem back-end) para a turma acompanhar o
calendário de provas e o horário semanal. Só quem tem acesso de escrita
ao repositório no GitHub consegue mudar o conteúdo — não existe login
nem painel de admin, e é isso que garante que só você edita: quem só
visualiza o site nunca vê um botão de editar.

## Como publicar no GitHub Pages

1. Crie um repositório novo no seu GitHub (ex: `calendario-info25`).
2. Suba todos os arquivos desta pasta para a raiz do repositório
   (`index.html`, `css/`, `js/`, `anexos/`).
3. No repositório, vá em **Settings → Pages**.
4. Em "Branch", selecione `main` (ou `master`) e a pasta `/ (root)`, clique em **Save**.
5. Em alguns minutos o GitHub te dá um link do tipo
   `https://jurpacheco.github.io/calendario-info25/` — esse é o link
   para mandar pra turma.

Qualquer atualização: edite o arquivo, dê commit e push (ou edite direto
pelo site do GitHub, no ícone de lápis) — o site atualiza sozinho.

## Como adicionar uma prova ou conteúdo

Abra `js/data.js`. Lá dentro tem comentários explicando cada campo,
mas o resumo é: ache a semana certa dentro do mês e escreva o dia
(`seg`, `ter`, `qua`, `qui` ou `sex`) com um bloco assim:

```js
qui: {
  materia: "Português",
  titulo: "Prova de Português",
  assunto: "Morfologia",
  data: "2026-08-20",
  conteudo: [
    "Tópico 1",
    "Tópico 2"
  ],
  anexo: null
}
```

- `data` precisa estar no formato `AAAA-MM-DD` — é ela que faz o número
  grande e apagado aparecer na célula (dias que faltam para a prova).
- `conteudo` é a lista que aparece quando alguém toca na prova.
- `anexo` pode virar um link para um PDF/documento (veja abaixo).

## Como adicionar um mês novo

Dentro de `js/data.js`, copie um bloco de mês inteiro (de `{ nome: ...`
até o `}` que fecha ele), cole depois do último mês da lista `meses` e
troque o nome e as semanas. A aba do mês novo aparece sozinha no site,
não precisa mexer em mais nada.

## Como anexar um arquivo (PDF, lista de exercícios, etc.)

1. Coloque o arquivo dentro da pasta `anexos/`.
2. No campo `anexo` da prova, escreva:

```js
anexo: { nome: "Lista de exercícios", link: "anexos/lista1.pdf" }
```

Um botão para baixar/abrir o arquivo aparece automaticamente no card
da prova.

## Estrutura dos arquivos

```
index.html      → estrutura da página
css/style.css   → toda a estética (cores, fontes, layout)
js/data.js      → ⭐ único arquivo que você edita no dia a dia
js/app.js       → lógica que desenha o calendário (não precisa mexer)
anexos/         → onde ficam os arquivos anexados às provas
```
