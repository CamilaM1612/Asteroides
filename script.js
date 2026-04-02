const canvas = document.getElementById("juego");
const nave = canvas.getContext("2d");

//lienzo
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const x = canvas.width / 2;
const y = canvas.height /2;


nave.strokeStyle = "white";
nave.lineWidth = 5;
nave.strokeRect(x, y, 50, 50);

