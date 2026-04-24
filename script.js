function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/* REVEAL */
function revelarHTML(targetId, html) {
  const el = document.getElementById(targetId);

  const prevHeight = el.offsetHeight;
  el.style.minHeight = prevHeight + "px";

  /*window.scrollTo({
    top: el.offsetTop - 60,
    behavior: "smooth"
  });*/

  el.innerHTML = "";

  setTimeout(() => {
    el.innerHTML = `<div class="fade-in">${html}</div>`;

    setTimeout(() => {
      el.style.minHeight = "";
    }, 800);

  }, 700);
}

/* RESULTADO */
function mostrarResultado(html) {
  revelarHTML("resultado", `<div class="cards">${html}</div>`);
}

/* ORÁCULO COMPLETO */
function gerarOraculo() {
  const e = randomItem(elementos);
  const s = randomItem(substancias);
  const c = randomItem(chakras);
  const a = randomItem(arquetipos);

  mostrarResultado(`
    <div class="card substancia ${s.tipo}">
      <h4 class="card-label">Substância</h4>
      <h3>${s.simbolo} ${s.nome}</h3>
      <p>${s.descricao}</p>
    </div>

    <div class="card elemento ${e.tipo}">
      <h4 class="card-label">Elemento</h4>
      <h3>${e.simbolo} ${e.nome}</h3>
      <p>${e.descricao}</p>
    </div>
   
    <div class="card chakra ${c.cor}">
      <h4 class="card-label">Chakra</h4>
      <h3>${c.simbolo} ${c.nome} ${c.numero}</h3>
      <p>${c.descricao}</p>
    </div>

    <div class="card arquetipo ${a.cor}">
      <h4 class="card-label">Arquétipo</h4>
      <h3>${a.simbolo} ${a.nome}</h3>
      <p>${a.descricao}</p>
    </div>
  `);
}

/* INDIVIDUAIS */
function gerarElemento() {
  const e = randomItem(elementos);
  mostrarResultado(`
    <div class="card elemento ${e.tipo}">
      <h4 class="card-label">Elemento</h4>
      <h3>${e.simbolo} ${e.nome}</h3>
      <p>${e.descricao}</p>
    </div>
  `);
}

function gerarSubstancia() {
  const s = randomItem(substancias);
  mostrarResultado(`
    <div class="card substancia ${s.tipo}">
      <h4 class="card-label">Substância</h4>
      <h3>${s.simbolo} ${s.nome}</h3>
      <p>${s.descricao}</p>
    </div>
  `);
}

function gerarChakra() {
  const c = randomItem(chakras);
  mostrarResultado(`
    <div class="card chakra ${c.cor}">
      <h4 class="card-label">Chakra</h4>
      <h3>${c.numero} ${c.nome} ${c.simbolo}</h3>
      <p>${c.descricao}</p>
    </div>
  `);
}

function gerarArquetipo() {
  const a = randomItem(arquetipos);
  mostrarResultado(`
    <div class="card arquetipo ${a.cor}">
      <h4 class="card-label">Arquétipo</h4>
      <h3>${a.simbolo} ${a.nome}</h3>
      <p>${a.descricao}</p>
    </div>
  `);
}

/* TAROT */
function gerarTarot(n) {
  let html = `<div class="cards">`;

  let baralho = [...tarot]; // cópia

  for (let i = 0; i < n; i++) {

    let index;

    if (n === 1) {
      // completamente random (pode repetir entre tiragens)
      index = Math.floor(Math.random() * tarot.length);
      carta = tarot[index];
    } else {
      // sem repetição
      index = Math.floor(Math.random() * baralho.length);
      carta = baralho[index];
      baralho.splice(index, 1); // remove do baralho
    }

    html += `
      <div class="card tarot-card">
        <div class="tarot-header">
          <span class="tarot-numero">${carta.numero}</span>
          <h3>${carta.nome}</h3>
        </div>
        <img src="${carta.imagem}" onclick="abrirZoom('${carta.imagem}')" style="cursor:pointer;" />
        <p>${carta.descricao}</p>
      </div>
    `;
  }

  html += `</div>`;

  revelarHTML("tarot", html);
}

function gerarTiragem14() {

  const pool = tarot.filter(c => c.tiragem14);
  let baralho = [...pool];

  let html = `<div class="cards">`;

  for (let i = 0; i < 3; i++) {

    const index = Math.floor(Math.random() * baralho.length);
    const carta = baralho[index];

    baralho.splice(index, 1); // remove → sem repetição

    html += `
      <div class="card tarot chakra ${carta.chakra} ${carta.energia}">
        <div class="tarot-header">
          <span class="tarot-numero">${carta.numero}</span>
          <h3>${carta.nome}</h3>
        </div>
        <img src="${carta.imagem}" onclick="abrirZoom('${carta.imagem}')" />
        <p>${carta.descricao}</p>
      </div>
    `;
  }

  html += `</div>`;

  revelarHTML("tarot", html);
}

function abrirZoom(src) {
  const overlay = document.getElementById("zoom-overlay");
  const img = document.getElementById("zoom-img");

  img.src = src;
  overlay.style.display = "flex";
}

function fecharZoom() {
  document.getElementById("zoom-overlay").style.display = "none";
}
function limparTudo() {
  const res = document.getElementById("resultado");
  const tar = document.getElementById("tarot");

  res.innerHTML = `<div class="fade-in"><p>O espaço foi limpo, pronto para a próxima energia.</p></div>`;
  tar.innerHTML = "";

  setTimeout(() => {
    res.innerHTML = "";
  }, 9000);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}