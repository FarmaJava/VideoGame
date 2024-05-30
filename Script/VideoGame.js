let PosX = 350;
let PosY = 500;
let RecorridoEnemy;

function setup() {
    createCanvas(800,600)
    background(100)
    noStroke()
    square(PosX, PosY, 50)
}

function draw(){

    RecorridoEnemy = random(0,730);
    fill(200)
    ellipse(RecorridoEnemy, -100, 70);
    
    // Limites de Movimiento
    if (PosX < 0){
     PosX = 0
    } else if ( PosX > 750) {
     PosX = 750
    }


    // Controles A y B
    if (keyIsDown(65)) {
     noStroke()
     fill(100)
     square(PosX, PosY, 50)

     PosX = PosX - 5

     noStroke()
     fill(90, 59, 97)
     square(PosX, PosY, 50)
    }
  
    if (keyIsDown(68)) {
     noStroke()
     fill(100)
     square(PosX, PosY, 50)

     PosX = PosX + 5

     noStroke()
     fill(39, 134, 93)
     square(PosX, PosY, 50)
    }
}