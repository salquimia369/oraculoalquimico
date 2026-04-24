const tarot = [
 {
    nome: "O Louco",
    numero: "",
    imagem: "images/tarot/louco.jpg",
    descricao: "Espírito • Espontaneidade • Aventura",
    chakra:"violeta",
    energia:"Feminino",
    tiragem14:true
  }
  ,{
    nome: "O Alquimista",
    numero: "I",
    imagem: "images/tarot/mago.jpg",
    descricao: "Criatividade • Alquimista • Propósito",
    chakra:"violeta",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "A Papisa",
    numero: "II",
    imagem: "images/tarot/papisa.jpg",
    descricao: " - • - • - ",
    chakra:"azul-claro",
    energia:"Feminino",
    tiragem14:true
  }
  ,{
    nome: "A Rainha",
    numero: "III",
    imagem: "images/tarot/rainha.jpg",
    descricao: " - • - • - ",
    chakra:"indigo",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "O Rei",
    numero: "IIII",
    imagem: "images/tarot/rei.jpg",
    descricao: " - • - • - ",
    chakra:"indigo",
    energia:"Feminino",
    tiragem14:true
  }
  ,{
    nome: "O Papa",
    numero: "V",
    imagem: "images/tarot/papa.jpg",
    descricao: " - • - • - ",
    chakra:"azul-claro",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "Os Enamorados",
    numero: "VI",
    imagem: "images/tarot/enamorados.jpg",
    descricao: " - • - • - ",
    tiragem14:false
  }
  ,{
    nome: "O Carro",
    numero: "VII",
    imagem: "images/tarot/carro.jpg",
    descricao: "Movimento • Início • Guerreiro",
    chakra:"verde",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "A Justiça",
    numero: "VIII",
    imagem: "images/tarot/justica.jpg",
    descricao: " - • - • - ",
    tiragem14:false
  }
  ,{
    nome: "O Eremita",
    numero: "VIIII",
    imagem: "images/tarot/eremita.jpg",
    descricao: " - • - • - ",
    chakra:"verde",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "Roda da Fortuna ",
    numero: "X",
    imagem: "images/tarot/rodafortuna.jpg",
    descricao: " - • - • - ",
    chakra:"amarelo",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "A Força",
    numero: "XI",
    imagem: "images/tarot/forca.jpg",
    descricao: " - • - • - ",
    chakra:"amarelo",
    energia:"Feminino",
    tiragem14:true
  }
  ,{
    nome: "O Pendurado",
    numero: "XII",
    imagem: "images/tarot/pendurado.jpg",
    descricao: " - • - • - ",
    tiragem14:false
  }
  ,{
    nome: "Carta sem nome",
    numero: "XIII",
    imagem: "images/tarot/semnome.jpg",
    descricao: " - • - • - ",
    tiragem14:false
  }
  ,{
    nome: "A Temperança",
    numero: "XIIII",
    imagem: "images/tarot/temperanca.jpg",
    descricao: " - • - • - ",
    chakra:"laranja",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "O Diabo",
    numero: "XV",
    imagem: "images/tarot/diabo.jpg",
    descricao: " - • - • - ",
    tiragem14:false
  }
  ,{
    nome: "A Torre",
    numero: "XVI",
    imagem: "images/tarot/torre.jpg",
    descricao: " - • - • - ",
    tiragem14:false
  }
  ,{
    nome: "A Estrela Guia",
    numero: "XVII",
    imagem: "images/tarot/estrela.jpg",
    descricao: " - • - • - ",
    chakra:"laranja",
    energia:"Feminino",
    tiragem14:true
  }
  ,{
    nome: "A Lua",
    numero: "XVIII",
    imagem: "images/tarot/lua.jpg",
    descricao: " - • - • - ",
    tiragem14:false
  }
  ,{
    nome: "O Sol",
    numero: "XVIIII",
    imagem: "images/tarot/sol.jpg",
    descricao: " - • - • - ",
    tiragem14:false
  }
  ,{
    nome: "O Julgamento",
    numero: "XX",
    imagem: "images/tarot/julgamento.jpg",
    descricao: " - • - • - ",
    chakra:"vermelho",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "O Mundo",
    numero: "XXI",
    imagem: "images/tarot/mundo.jpg",
    descricao: " - • - • - ",
    chakra:"vermelho",
    energia:"Feminino",
    tiragem14:true
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
