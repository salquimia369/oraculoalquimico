const tarot = [
 {
    nome: "O Louco",
    numero: "-",
    imagem: "images/tarot/louco.jpg",
    descricao: "Espírito • Espontaneidade • Aventura"
  }
  ,{
    nome: "O Mago",
    numero: "I",
    imagem: "images/tarot/mago.jpg",
    descricao: "Criatividade • Alquimista • Propósito"
  }
  ,{
    nome: "A Papisa",
    numero: "II",
    imagem: "images/tarot/papisa.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "A Rainha",
    numero: "III",
    imagem: "images/tarot/rainha.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "O Rei",
    numero: "IIII",
    imagem: "images/tarot/rei.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "O Papa",
    numero: "V",
    imagem: "images/tarot/papa.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "Os Enamorados",
    numero: "VI",
    imagem: "images/tarot/enamorados.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "O Carro",
    numero: "VII",
    imagem: "images/tarot/carro.jpg",
    descricao: "Movimento • Início • Guerreiro"
  }
  ,{
    nome: "A Justiça",
    numero: "VIII",
    imagem: "images/tarot/justica.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "O Heremita",
    numero: "VIIII",
    imagem: "images/tarot/heremita.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "Roda da Fortuna ",
    numero: "X",
    imagem: "images/tarot/rodafortuna.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "A Força",
    numero: "XI",
    imagem: "images/tarot/forca.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "O Pendurado",
    numero: "XII",
    imagem: "images/tarot/pendurado.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "Carta sem nome",
    numero: "XIII",
    imagem: "images/tarot/semnome.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "A Temperança",
    numero: "XIIII",
    imagem: "images/tarot/temperanca.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "O Diabo",
    numero: "XV",
    imagem: "images/tarot/diabo.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "A Torre",
    numero: "XVI",
    imagem: "images/tarot/torre.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "A Estrela Guia",
    numero: "XVII",
    imagem: "images/tarot/estrela.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "A Lua",
    numero: "XVIII",
    imagem: "images/tarot/lua.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "O Sol",
    numero: "XVIIII",
    imagem: "images/tarot/sol.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "O Julgamento",
    numero: "XX",
    imagem: "images/tarot/julgamento.jpg",
    descricao: " - • - • - "
  }
  ,{
    nome: "O Mundo",
    numero: "XXI",
    imagem: "images/tarot/mundo.jpg",
    descricao: " - • - • - "
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
