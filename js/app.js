/* ============================================================
   LÓGICA DO SITE
   Não precisa mexer aqui para adicionar provas/meses — isso é
   tudo feito em js/data.js. Este arquivo só sabe "desenhar" o
   que estiver escrito lá.
   ============================================================ */

const DIAS = ["seg", "ter", "qua", "qui", "sex"];
const DIA_LABEL = { seg: "Seg", ter: "Ter", qua: "Qua", qui: "Qui", sex: "Sex" };

const abasEl = document.getElementById("abas");
const conteudoEl = document.getElementById("conteudo");
const tituloTurmaEl = document.getElementById("tituloTurma");

let abaAtiva = 0; // índice: 0..N-1 = meses, "horario" = horário semanal

function init() {
  if (DADOS.turma) tituloTurmaEl.textContent = DADOS.turma;
  montarAbas();
  selecionarAba(0);
  document.getElementById("fechar").addEventListener("click", fecharModal);
  document.getElementById("overlay").addEventListener("click", (e) => {
    if (e.target.id === "overlay") fecharModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharModal();
  });
}

function montarAbas() {
  abasEl.innerHTML = "";

  DADOS.meses.forEach((mes, i) => {
    const btn = document.createElement("button");
    btn.className = "aba-btn";
    btn.textContent = mes.nome;
    btn.addEventListener("click", () => selecionarAba(i));
    abasEl.appendChild(btn);
  });

  const btnHorario = document.createElement("button");
  btnHorario.className = "aba-btn";
  btnHorario.textContent = "Horário semanal";
  btnHorario.addEventListener("click", () => selecionarAba("horario"));
  abasEl.appendChild(btnHorario);
}

function selecionarAba(aba) {
  abaAtiva = aba;

  [...abasEl.children].forEach((btn, i) => {
    const ehEsteMes = aba === i;
    const ehHorario = aba === "horario" && i === abasEl.children.length - 1;
    btn.classList.toggle("ativa", ehEsteMes || ehHorario);
  });

  if (aba === "horario") {
    renderHorario();
  } else {
    renderMes(DADOS.meses[aba]);
  }
}

/* ------------------------------------------------------------
   CALENDÁRIO MENSAL
   ------------------------------------------------------------ */
function renderMes(mes) {
  const wrap = document.createElement("div");

  const titulo = document.createElement("h2");
  titulo.className = "mes-titulo";
  titulo.textContent = mes.nome;
  wrap.appendChild(titulo);

  const gradeWrap = document.createElement("div");
  gradeWrap.className = "grade-wrap";

  const grade = document.createElement("div");
  grade.className = "grade";

  // canto vazio + cabeçalho dos dias
  grade.appendChild(criarDiv("cabecalho-dia canto", ""));
  DIAS.forEach((d) => grade.appendChild(criarDiv("cabecalho-dia", DIA_LABEL[d])));

  mes.semanas.forEach((semana, i) => {
    const rotulo = document.createElement("div");
    rotulo.className = "rotulo-semana";
    rotulo.innerHTML = `
      <span class="num">${String(i + 1).padStart(2, "0")}</span>
      <span class="faixa">${semana.faixa}</span>
    `;
    grade.appendChild(rotulo);

    DIAS.forEach((d) => {
      const prova = semana.provas ? semana.provas[d] : null;
      grade.appendChild(criarCelulaDia(prova));
    });
  });

  gradeWrap.appendChild(grade);
  wrap.appendChild(gradeWrap);

  conteudoEl.innerHTML = "";
  conteudoEl.appendChild(wrap);
}

function criarCelulaDia(prova) {
  const cel = document.createElement("div");
  cel.className = "celula-dia";

  if (!prova) return cel;

  cel.classList.add("tem-prova");
  cel.tabIndex = 0;
  cel.setAttribute("role", "button");
  cel.setAttribute("aria-label", `${prova.titulo}. Toque para ver o conteúdo.`);

  const materia = document.createElement("div");
  materia.className = "prova-materia";
  materia.textContent = prova.titulo || prova.materia;
  cel.appendChild(materia);

  if (prova.assunto) {
    const assunto = document.createElement("div");
    assunto.className = "prova-assunto";
    assunto.textContent = prova.assunto;
    cel.appendChild(assunto);
  }

  const dias = diasRestantes(prova.data);
  if (dias !== null && dias >= 0) {
    const badge = document.createElement("span");
    badge.className = "prova-contagem";
    badge.textContent = dias;
    cel.appendChild(badge);
  } else if (dias !== null && dias < 0) {
    cel.style.opacity = "0.6";
  }

  cel.addEventListener("click", () => abrirModal(prova));
  cel.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      abrirModal(prova);
    }
  });

  return cel;
}

function criarDiv(classe, texto) {
  const d = document.createElement("div");
  d.className = classe;
  d.textContent = texto;
  return d;
}

/* ------------------------------------------------------------
   HORÁRIO SEMANAL
   ------------------------------------------------------------ */
function renderHorario() {
  const wrap = document.createElement("div");

  const tituloWrap = document.createElement("div");
  tituloWrap.className = "horario-titulo-wrap";
  tituloWrap.innerHTML = `<div class="horario-script">✦ horário semanal ✦</div>`;
  wrap.appendChild(tituloWrap);

  const gradeWrap = document.createElement("div");
  gradeWrap.className = "grade-wrap";

  const grade = document.createElement("div");
  grade.className = "grade-horario";

  grade.appendChild(criarDiv("cabecalho-dia canto", ""));
  DIAS.forEach((d) => grade.appendChild(criarDiv("cabecalho-dia", DIA_LABEL[d])));

  DADOS.horario.horarios.forEach((h, linha) => {
    grade.appendChild(criarDiv("rotulo-horario", h));
    DIAS.forEach((d) => {
      const texto = (DADOS.horario.dias[d] && DADOS.horario.dias[d][linha]) || "";
      grade.appendChild(criarDiv("celula-horario", texto));
    });
  });

  gradeWrap.appendChild(grade);
  wrap.appendChild(gradeWrap);

  conteudoEl.innerHTML = "";
  conteudoEl.appendChild(wrap);
}

/* ------------------------------------------------------------
   CONTAGEM REGRESSIVA
   ------------------------------------------------------------ */
function diasRestantes(dataISO) {
  if (!dataISO) return null;
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const alvo = new Date(dataISO + "T00:00:00");
  const diffMs = alvo - hoje;
  return Math.round(diffMs / 86400000);
}

function formatarData(dataISO) {
  if (!dataISO) return "";
  const d = new Date(dataISO + "T00:00:00");
  const txt = d.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  return txt.charAt(0).toUpperCase() + txt.slice(1);
}

/* ------------------------------------------------------------
   MODAL
   ------------------------------------------------------------ */
function abrirModal(prova) {
  document.getElementById("modalMateria").textContent = prova.materia || "";
  document.getElementById("modalTitulo").textContent = prova.titulo || "";
  document.getElementById("modalData").textContent = formatarData(prova.data);

  const dias = diasRestantes(prova.data);
  const contagemEl = document.getElementById("modalContagem");
  if (dias === null) {
    contagemEl.style.display = "none";
  } else if (dias > 1) {
    contagemEl.style.display = "inline-block";
    contagemEl.textContent = `Faltam ${dias} dias`;
  } else if (dias === 1) {
    contagemEl.style.display = "inline-block";
    contagemEl.textContent = "É amanhã!";
  } else if (dias === 0) {
    contagemEl.style.display = "inline-block";
    contagemEl.textContent = "É hoje!";
  } else {
    contagemEl.style.display = "inline-block";
    contagemEl.textContent = "Prova já realizada";
  }

  const lista = document.getElementById("modalLista");
  lista.innerHTML = "";
  (prova.conteudo || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });

  const anexoEl = document.getElementById("modalAnexo");
  if (prova.anexo && prova.anexo.link) {
    anexoEl.href = prova.anexo.link;
    anexoEl.textContent = `📎 ${prova.anexo.nome || "Ver anexo"}`;
    anexoEl.classList.add("visivel");
  } else {
    anexoEl.classList.remove("visivel");
  }

  document.getElementById("overlay").classList.add("aberto");
}

function fecharModal() {
  document.getElementById("overlay").classList.remove("aberto");
}

init();
