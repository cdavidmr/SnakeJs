var draw = function () {
  var game = document.getElementById('myGame');
  var ctx = game.getContext('2d');

  var currentPosition = [game.width / 2, game.height / 2];
  var direction;
  var moveLeft = true;
  var moveRight = true;
  var moveDown = true;
  var moveUp = true;
  var snakeSize = 10;
  var reset = false;

  var drawWall = function () {
    ctx.beginPath();
    ctx.strokeRect(4, 4, game.width - 8, game.height - 8)
    ctx.closePath();
  }

  var drawSnake = function (x, y) {
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(x, y, snakeSize, snakeSize);
    ctx.fill();
    ctx.closePath();
  }

  var directionSnake = function (e) {
    switch (e.keyCode) {
      // left
      case 65:
      case 37:
        if (moveLeft) {
          console.log('left');
          direction = 'left';
          // set new position, and draw square at that position.
          currentPosition[0] = currentPosition[0] - 2;
          drawSnake(currentPosition[0], currentPosition[1]);
          reset = false;
        }
        break;

      // up
      case 87:
      case 38:
        if (moveUp) {
          console.log('up');
          direction = 'up';
          currentPosition[1] = currentPosition[1] - 2;
          drawSnake(currentPosition[0], currentPosition[1]);
          reset = false;
        }
        break;

      // right
      case 68:
      case 39:
        if (moveRight) {
          console.log('right');
          direction = 'right';
          currentPosition[0] = currentPosition[0] + 2;
          drawSnake(currentPosition[0], currentPosition[1]);
          reset = false;
        }
        break;

      // down
      case 83:
      case 40:
        if (moveDown) {
          console.log('down');
          direction = 'down';
          currentPosition[1] = currentPosition[1] + 2;
          drawSnake(currentPosition[0], currentPosition[1]);
          reset = false;
        }
        break;

      default:
        break;
    }
  }



  var moveSnake = function () {

    if (!reset) {
      switch (direction) {
        case 'up':
          if (currentPosition[1] > snakeSize) {
            moveLeft = true;
            moveRight = true;
            moveDown = false;
            moveUp = false;
            currentPosition[1] = currentPosition[1] - snakeSize - 1;
            drawSnake(currentPosition[0], currentPosition[1]);
          } else {
            gameOver();
          }
          break;

        case 'down':
          if (currentPosition[1] < game.height - snakeSize - 8) {
            moveLeft = true;
            moveRight = true;
            moveDown = false;
            moveUp = false;
            currentPosition[1] = currentPosition[1] + snakeSize + 1;
            drawSnake(currentPosition[0], currentPosition[1]);
          } else {
            gameOver();
          }
          break;

        case 'left':
          if (currentPosition[0] > snakeSize) {
            moveLeft = false;
            moveRight = false;
            moveDown = true;
            moveUp = true;
            currentPosition[0] = currentPosition[0] - snakeSize - 1;
            drawSnake(currentPosition[0], currentPosition[1]);
          } else {
            gameOver();
          }
          break;

        case 'right':
          if (currentPosition[0] < game.width - snakeSize - 8) {
            moveLeft = false;
            moveRight = false;
            moveDown = true;
            moveUp = true;
            currentPosition[0] = currentPosition[0] + snakeSize + 1;
            drawSnake(currentPosition[0], currentPosition[1]);
          } else {
            gameOver();
          }
          break;
      }
    }
  }



  var play = function () {
    ctx.clearRect(0, 0, game.width, game.height);

    drawWall();
    drawSnake(currentPosition[0], currentPosition[1]);
    moveSnake();

  }


  var gameOver = function () {
    currentPosition = [game.width / 2, game.height / 2];
    direction;
    moveLeft = true;
    moveRight = true;
    moveDown = true;
    moveUp = true;
    snakeSize = 10;
    reset = true;
  }

  window.addEventListener("keydown", directionSnake, false);
  setInterval(play, 200);

}
window.addEventListener("load", draw, false);