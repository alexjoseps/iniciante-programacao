// Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
// Diametro é o raio * 2
// Raio é a distancia do ponto central até a borda
let diametroBolinha = 15;
let raioBolinha = diametroBolinha / 2;

// Variáveis de velocidade
let velocidadeBolinhaX = 6;
let velocidadeBolinhaY = velocidadeBolinhaX;

// Variáveis raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

let colidiu = false;

// Variáveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeOponenteY;
let chanceDeErrar = 0;

// Variáveis placar
let meusPontos = 0;
let pontosOponente = 0;

// Variáveis sons do jogo
let somRaquetada;
let somPonto;
let somFundo;

function preload() {
  // somFundo = loadSound("trilha.mp3");
  // somRaquetada = loadSound("raquetada.mp3");
  // somPonto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  // somFundo.loop();
}

function draw() {
  background(0);
  mostraBolinha()
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  // verificaColisaoRaquete();
  verificaColisaoRaqueteLib(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaqueteLib(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcarPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentaBolinha() {
  xBolinha += velocidadeBolinhaX;
  yBolinha += velocidadeBolinhaY;
}

function verificaColisaoBorda() {
  let ultrapassouComprimento = (xBolinha + raioBolinha) > width || (xBolinha - raioBolinha) < 0;
  let ultrapassouAltura = (yBolinha + raioBolinha) > height || (yBolinha - raioBolinha) < 0;
  
  if (ultrapassouComprimento) {
    velocidadeBolinhaX *= -1;
  }
  if (ultrapassouAltura) {
    velocidadeBolinhaY *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

// function verificaColisaoRaquete() {
//   let bateuNaRaquete = (xBolinha - raioBolinha) < (xRaquete + comprimentoRaquete) &&
//       (yBolinha - raioBolinha) < (yRaquete + alturaRaquete)  && 
//       (yBolinha + raioBolinha) > yRaquete;
  
//   if (bateuNaRaquete) {
//     velocidadeBolinhaX *= -1;
//     somRaquetada.play();
//   }
// }

function verificaColisaoRaqueteLib(x, y) {
  colidiu = collideRectCircle(x, 
                              y, 
                              comprimentoRaquete, 
                              alturaRaquete, 
                              xBolinha, 
                              yBolinha, 
                              raioBolinha);
  
  if (colidiu) {
    velocidadeBolinhaX *= -1;
    // somRaquetada.play();
  }
}

function movimentaRaqueteOponente() {
  velocidadeOponenteY = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 50;
  yRaqueteOponente += velocidadeOponenteY + chanceDeErrar;
  
  calculaChanceDeErrar();
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 2
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 2
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function incluirPlacar() {
  textSize(16);
  textAlign(CENTER);
  stroke(255);

  fill(color(255, 140, 0));
  rect(145, 10, 30, 20, 5);
  fill(255);
  text(meusPontos, 160, 25);

  fill(color(255, 140, 0));
  rect(445, 10, 30, 20, 5);
  fill(255);
  text(pontosOponente, 460, 25);
}

function marcarPonto() {
  if (xBolinha > 590) {
    meusPontos++;
    // somPonto.play();
  }
  
  if (xBolinha < 10) {
    pontosOponente++;
    // somPonto.play();
  }
}



