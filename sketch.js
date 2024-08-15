let palavra;
let musica;
let imagem;

function setup() {
  createCanvas(1000, 800);
  palavra = marcos();
  musica.loop();
}

function preload(){
  imagem = loadImage("foto.jpg");
  musica = loadSound("musica.mp3");
}


function draw() {
  chocolate();
  marcos ();
  let maximo = width;
  let minimo = 0;
  
  let aparecer = map(mouseX, 0, width,1,palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 400,300);
}

function chocolate(){
  background("violet");
  image(imagem,0,0,1000,500);
  fill("black");
  textSize(64);
  textAlign(CENTER,CENTER);
}

function marcos(){
  let palavras = ["KOENIGSEGG" , "JESKO"];
  return random(palavras);
  
}

