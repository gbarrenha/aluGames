let jogos = [
  { id: 1, nome: `Monopoly`, imagem: `monopoly.png`, alugado: false },
  { id: 2, nome: `Ticket to Ride`, imagem: `ticket_to_ride.png`, alugado: false },
  { id: 3, nome: `Takenoko`, imagem: `takenoko.png`, alugado: false },
];

let jogosSalvos = localStorage.getItem(`jogos`);
if (jogosSalvos) {
  jogos = JSON.parse(jogosSalvos);
}

function renderizarJogos() {
  let lista = document.getElementById(`lista-jogos`);
  lista.innerHTML = ``;

  jogos.forEach((jogo) => {
    lista.innerHTML += `
      <li class="dashboard__items__item" id="game-${jogo.id}">
        <div class="dashboard__item__img ${jogo.alugado ? `dashboard__item__img--rented` : ``}">
        <img src="img/${jogo.imagem}" alt="${jogo.nome}">
        </div>
        <p class="dashboard__item__name">${jogo.nome}</p>
        <button class="dashboard__item__button ${jogo.alugado ? "dashboard__item__button--return" : ""}" 
        onclick="alterarStatus(${jogo.id})">
          ${jogo.alugado ? `Devolver` : `Alugar`}
        </button>
      </li>
      `;
  });
}

renderizarJogos();

function alterarStatus(id) {
  let jogo = jogos.find((jogo) => jogo.id === id);
  if (!jogo) return;

  if (jogo.alugado) {
    if (!confirm(`Tem certeza que deseja ${jogo.alugado ? `devolver` : `alugar`} o jogo "${jogo.nome}"?`)) return;
  }

  jogo.alugado = !jogo.alugado;
  localStorage.setItem(`jogos`, JSON.stringify(jogos));
  renderizarJogos();
}
