const canvas = document.getElementById("juego");
const ctx = canvas.getContext("2d");

// crear imagen
const naveImg = new Image();
naveImg.src = "imagenes/naveJuego.png";

// crear imagen del Asteroide
const asteroideGrande = new Image();
asteroideGrande.src = "imagenes/sprites.png";

var elChocaNaves;
var miNave;

asteroideGrande.onload = function () {
  elChocaNaves = new componenteAst(
    150,
    150,
    window.innerWidth / 2 - 150 / 2,
    window.innerHeight * -1 + 400,
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
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;

  this.frameX = 0;     // columna del sprite
  this.frameY = 0;     // fila (si hay varias animaciones)
  this.frameWidth = 1024;  // ancho de cada frame en la imagen
  this.frameHeight = 1024; // alto de cada frame
  this.totalFrames = 4;  // cantidad de frames

  this.actualizar = function () {
    ctx.drawImage(
      naveImg,
      this.frameX * this.frameWidth, // sx
      this.frameY * this.frameHeight, // sy
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  };

this.contador = 0;

this.animar = function () {
  this.contador++;
  if (this.contador % 1 === 0) { // cambia cada 5 frames
    this.frameX++;
    if (this.frameX >= this.totalFrames) {
      this.frameX = 0;
    }
  }
};

  this.nuevaPosicion = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function componenteAst(width, height, x, y) {
  this.width = width;
  this.height = height;
  //this.angle = 0;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 1;
  this.contador = 0;

  this.frameX = 0;     // columna del sprite
  this.frameY = 0;     // fila (si hay varias animaciones)
  this.frameWidth = 170;  // ancho de cada frame en la imagen
  this.frameHeight = 165; // alto de cada frame
  this.totalFrames = 4;  // cantidad de frames


  this.actualizarAst = function () {
    //ctx.save();
    //ctx.translate(this.width / 2, -this.height / 2);
    //ctx.rotate(this.angle);
    ctx.drawImage(
    asteroideGrande,
    this.frameX * this.frameWidth,
    this.frameY * this.frameHeight,
    this.frameWidth,
    this.frameHeight,
    this.x,
    this.y,
    this.width,
    this.height
    );
    ctx.restore();
  };

  this.animar = function () {
  this.contador++;
  if (this.contador % 25 === 0) { // cambia cada 5 frames
    this.frameX++;
    if (this.frameX >= this.totalFrames) {
      this.frameX = 0;
    }
  }
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

  elChocaNaves.animar();
  
  elChocaNaves.angle += 1 * Math.PI /180;
  elChocaNaves.actualizarAst();
  miNave.actualizar();
}
