// 캔버스 세팅

let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameOverImage;
// 우주선 좌표
let spaceshipX = canvas.width / 2 - 30;
let spaceshipY = canvas.height - 60;

function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src = "images/background.jpg";
 
    spaceshipImage = new Image();
    spaceshipImage.src = "images/spaceship.png";
 
    bulletImage = new Image();
    bulletImage.src = "images/bullet.png";
 
    enemyImage = new Image();
    enemyImage.src = "images/enemy.png";
 
    gameOverImage = new Image();
    gameOverImage.src = "images/gameover.jpg";
}

function setupkeyboardListener() {
    document.addEventListener("keydown",function(event){
        console.log("무슨 키가 눌렸어?", event.key)
    })
}

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}


function main(){
    render();
    requestAnimationFrame(main);
}


loadImage();
setupkeyboardListener();
main();