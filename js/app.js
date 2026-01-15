let jogos = [
  { id: 1, nome: `Monopoly`, imagem: `monopoly.png`, alugado: false },
  { id: 2, nome: `Ticket to Ride`, imagem: `ticket_to_ride.png`, alugado: false },
  { id: 3, nome: `Takenoko`, imagem: `takenoko.png`, alugado: false },
];

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
        <a href="#" class="dashboard__item__button ${jogo.alugado ? `dashboard__item__button--return` : ``}" onclick="alterarStatus(${jogo.id})">
          ${jogo.alugado ? `Devolver` : `Alugar`}
        </a>
      </li>
      `;
  });
}

renderizarJogos();

function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(`.dashboard__item__img`);
  let botao = gameClicado.querySelector(`.dashboard__item__button`);
  let nomeJogo = gameClicado.querySelector(`.dashboard__item__name`);

  if (imagem.classList.contains(`dashboard__item__img--rented`)) {
    if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
      imagem.classList.remove(`dashboard__item__img--rented`);
      botao.classList.remove(`dashboard__item__button--return`);
      botao.textContent = `Alugar`;
    }
  } else {
    imagem.classList.add(`dashboard__item__img--rented`);
    botao.classList.add(`dashboard__item__button--return`);
    botao.textContent = `Devolver`;
  }
}
