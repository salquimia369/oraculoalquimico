const tarot = [
  {
    nome: "O Carro",
    numero: "VII",
    imagem: "images/tarot/carro.jpg",
    descricao: "Movimento • Início • Guerreiro"
  }
];
container.innerHTML += `
  <div class="card tarot-card">
    <div class="tarot-header">
      <span class="tarot-numero">${carta.numero}</span>
      <h3>${carta.nome}</h3>
    </div>
    <img src="${carta.imagem}" />
    <p>${carta.descricao}</p>
  </div>
`;
