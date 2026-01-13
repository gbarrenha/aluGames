function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(`.dashboard__item__image`);
  let botao = gameClicado.querySelector(`.dashboard__item__botao`);
  let nomeJogo = gameClicado.querySelector(`.dashboard__item__name`);

  alert(nomeJogo.textContent);
}
