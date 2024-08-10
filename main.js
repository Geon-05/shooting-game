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

function loadImage() {
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

let keysDown = {};
function setupkeyboardListener() {
  document.addEventListener("keydown", function (event) {
    keysDown[event.key] = true;
    console.log("키다운 객체에 들어간 값은?", keysDown);
  });
  document.addEventListener("keyup", function (event) {
    delete keysDown[event.key];
    console.log("버튼 클릭후", keysDown);
  });
}

function update() {
  // 우주선의 좌표값이 무한대로 업데이트가 되는게 아닌! 경기장 안에서만 있게 하려면?
  if ("ArrowRight" in keysDown) {
    spaceshipX += 5; // 우주선의 속도
  } // right botten
  if ("ArrowLeft" in keysDown) {
    spaceshipX -= 5;
  } // left botten
  if ("ArrowUp" in keysDown) {
    spaceshipY -= 5;
  } // up botten
  if ("ArrowDown" in keysDown) {
    spaceshipY += 5;
  } // down botten

  // 이동제한
  if (spaceshipX <= 0) {
    spaceshipX = 0;
  }
  if (spaceshipX >= canvas.width - 60) {
    spaceshipX = canvas.width - 60;
  }
  if (spaceshipY >= canvas.height - 60) {
    spaceshipY = canvas.height - 60;
  }
  if (spaceshipY <= canvas.height - 160) {
    spaceshipY = canvas.height - 160;
  }
}

function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}

function main() {
  update();
  render();
  requestAnimationFrame(main);
}

loadImage();
setupkeyboardListener();
main();
