const tarot = [
 {
    nome: "O Louco",
    numero: "",
    imagem: "images/tarot/louco.jpg",
    descricao: "Espírito • Criança • Liberdade",
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
    descricao: "Instrospeção • Reflexão • Escuta",
    chakra:"azul-claro",
    energia:"Feminino",
    tiragem14:true
  }
  ,{
    nome: "A Rainha",
    numero: "III",
    imagem: "images/tarot/rainha.jpg",
    descricao: "Intuição • Audácia • Inspiração",
    chakra:"indigo",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "O Rei",
    numero: "IIII",
    imagem: "images/tarot/rei.jpg",
    descricao: "Visão Estratégica • Autoridade • Ideais",
    chakra:"indigo",
    energia:"Feminino",
    tiragem14:true
  }
  ,{
    nome: "O Papa",
    numero: "V",
    imagem: "images/tarot/papa.jpg",
    descricao: "Espiritualidade • Verbo • Fé ",
    chakra:"azul-claro",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "Os Enamorados",
    numero: "VI",
    imagem: "images/tarot/enamorados.jpg",
    descricao: "Escolha • Vínculos • Relacionamento Interno ",
    tiragem14:false
  }
  ,{
    nome: "O Carro",
    numero: "VII",
    imagem: "images/tarot/carro.jpg",
    descricao: "Protagonista • Início • Guerreiro",
    chakra:"verde",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "A Justiça",
    numero: "VIII",
    imagem: "images/tarot/justica.jpg",
    descricao: "Justiça • Equilibrio • Coerência",
    tiragem14:false
  }
  ,{
    nome: "O Eremita",
    numero: "VIIII",
    imagem: "images/tarot/eremita.jpg",
    descricao: "Sábio • Maturidade • Discernimento ",
    chakra:"verde",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "Roda da Fortuna ",
    numero: "X",
    imagem: "images/tarot/rodafortuna.jpg",
    descricao: "Prosperidade • Merecimento • Ritmo ",
    chakra:"amarelo",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "A Força",
    numero: "XI",
    imagem: "images/tarot/forca.jpg",
    descricao: "Serviço • Disciplina • Reinos naturais ",
    chakra:"amarelo",
    energia:"Feminino",
    tiragem14:true
  }
  ,{
    nome: "O Pendurado",
    numero: "XII",
    imagem: "images/tarot/pendurado.jpg",
    descricao: "Perspetiva • Reviravolta • Rendição",
    tiragem14:false
  }
  ,{
    nome: "Carta sem nome",
    numero: "XIII",
    imagem: "images/tarot/semnome.jpg",
    descricao: "Desapego • Mudança radical • Desilusão", 
    tiragem14:false
  }
  ,{
    nome: "A Temperança",
    numero: "XIIII",
    imagem: "images/tarot/temperanca.jpg",
    descricao: "Conhecimento sagrado • Transmutação • Comunicação",
    chakra:"laranja",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "O Diabo",
    numero: "XV",
    imagem: "images/tarot/diabo.jpg",
    descricao: "Manipulação • Controlo • Prisões",
    tiragem14:false
  }
  ,{
    nome: "A Torre",
    numero: "XVI",
    imagem: "images/tarot/torre.jpg",
    descricao: "Reset • Colapso do ego • Crise",
    tiragem14:false
  }
  ,{
    nome: "A Estrela Guia",
    numero: "XVII",
    imagem: "images/tarot/estrela.jpg",
    descricao: "Esperança • Pureza • Autenticidade",
    chakra:"laranja",
    energia:"Feminino",
    tiragem14:true
  }
  ,{
    nome: "A Lua",
    numero: "XVIII",
    imagem: "images/tarot/lua.jpg",
    descricao: "Padrões emocionais • Raizes (Mãe) • Memórias ",
    tiragem14:false
  }
  ,{
    nome: "O Sol",
    numero: "XVIIII",
    imagem: "images/tarot/sol.jpg",
    descricao: "Carências ancestrais • Raizes (Pai) • Proteção",
    tiragem14:false
  }
  ,{
    nome: "O Julgamento",
    numero: "XX",
    imagem: "images/tarot/julgamento.jpg",
    descricao: "Superação • Rodar da chave • Novo chamado",
    chakra:"vermelho",
    energia:"Masculino",
    tiragem14:true
  }
  ,{
    nome: "O Mundo",
    numero: "XXI",
    imagem: "images/tarot/mundo.jpg",
    descricao: "Pendências • Portal • Integração",
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
