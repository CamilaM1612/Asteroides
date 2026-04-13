const canvas = document.getElementById("juego");
const ctx = canvas.getContext("2d");

// crear imagen
const naveImg = new Image();
naveImg.src = "imagenes/naveJuego.png";

const miNave = {
    width: 70,
    height: 100,
    x: window.innerWidth / 2 - 70 / 2,
    y: window.innerHeight / 2 - 100 / 2,
    speedX: 0,
    speedY: 0
};

naveImg.onload = function () {
  miAreaJuego.start();
};


var miAreaJuego = {
    canvas: canvas,
    
    start: function (){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        
        this.intervalo = setInterval (actualizarArea, 20);
        
        window.addEventListener('keydown', function (e) {
            miAreaJuego.key = e.keyCode;
        });
        window.addEventListener('keyup', function (){
            miAreaJuego.key = false;
        });
    }, 
    clear : function (){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    }
}

function actualizarArea (){
    miAreaJuego.clear();

    miNave.speedX = 0;
    miNave.speedY = 0;

    if(miAreaJuego.key == 37){ miNave.speedX = -2;}
    if(miAreaJuego.key == 39){ miNave.speedX = 2;}
    if(miAreaJuego.key == 38){ miNave.speedY = -2;}
    if(miAreaJuego.key == 40){ miNave.speedY = 2;}
    
    miNave.x += miNave.speedX;
    miNave.y += miNave.speedY;

    ctx.drawImage(naveImg, miNave.x, miNave.y, miNave.width, miNave.height)
}