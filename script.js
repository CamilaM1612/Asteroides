const canvas = document.getElementById("juego");
const ctx = canvas.getContext("2d");

// lienzo
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const x = canvas.width / 2;
const y = canvas.height / 2;

// crear imagen
const naveImg = new Image();
naveImg.src = "imagenes/Nave.png";

naveImg.onload = function () {
  startGame();
};

function startGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(naveImg, x, y, 60, 60);
}