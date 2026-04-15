const canvas = document.getElementById("juego");
const ctx = canvas.getContext("2d");

// crear imagen
const naveImg = new Image();
naveImg.src = "imagenes/naveJuego.png";

// crear imagen del Asteroide
const asteroideGrande = new Image();
asteroideGrande.src = "imagenes/asteroide.png";

var elChocaNaves;
var miNave;

asteroideGrande.onload = function () {
  elChocaNaves = new componenteAst(
    150,
    150,
    window.innerWidth / 2 - 150 / 2,
    window.innerHeight,
  );
};

naveImg.onload = function () {
  miNave = new componente(
    70,
    100,
    window.innerWidth / 2 - 70 / 2,
    window.innerHeight / 2 - 100 / 2,
  );
  miAreaJuego.start();
};

var miAreaJuego = {
  canvas: canvas,

  start: function () {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");

    this.intervalo = setInterval(actualizarArea, 20);

    window.addEventListener("keydown", function (e) {
      miAreaJuego.key = e.keyCode;
    });
    window.addEventListener("keyup", function () {
      miAreaJuego.key = false;
    });
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function componente(width, height, x, y) {
  this.width = width;
  this.height = height;
  this.angle = 0;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;

  this.actualizar = function () {
    ctx.drawImage(naveImg, this.x, this.y, this.width, this.height);
  };

  this.nuevaPosicion = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function componenteAst(width, height, x, y) {
  this.width = width;
  this.height = height;
  this.angle = 0;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = -1;

  this.actualizarAst = function () {
    ctx.drawImage(asteroideGrande, this.x, this.y, this.width, this.height);
  };

  this.nuevaPosicionAst = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function actualizarArea() {
  miAreaJuego.clear();

  miNave.speedX = 0;
  miNave.speedY = 0;

  if (miAreaJuego.key == 37) {
    miNave.speedX = -2;
  }
  if (miAreaJuego.key == 39) {
    miNave.speedX = 2;
  }
  if (miAreaJuego.key == 38) {
    miNave.speedY = -2;
  }
  if (miAreaJuego.key == 40) {
    miNave.speedY = 2;
  }

  elChocaNaves.nuevaPosicionAst();
  miNave.nuevaPosicion();
  // miNave.angle += 1 * Math.PI /180;

  elChocaNaves.actualizarAst();
  miNave.actualizar();
}
