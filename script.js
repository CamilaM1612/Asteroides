const canvas = document.getElementById("juego");
const nave = canvas.getContext("2d");

//lienzo
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const x = canvas.width / 2 - 50/2;
const y = canvas.height /2 - 50/2;

//redondo
nave.strokeStyle = "white";
nave.lineWidth = 2;
nave.beginPath();
nave.arc(95, 50, 40, 0, 2 * Math.PI);
nave.stroke();

//cuadrado
nave.fillStyle = "white"
nave.font = "50px Arial";
nave.fillText("A",x,y);

