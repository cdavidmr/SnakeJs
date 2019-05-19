var draw = function () {
  var game = document.getElementById('myGame');
  var ctx = game.getContext('2d');


  var ballRadius = 20;
  var x = game.width / 2;
  var y = game.height / 2;
  var dx = 2;
  var dy = -2;

  var play = function () {
    ctx.clearRect(0, 0, game.width+1, game.height+1);


    ctx.beginPath();
    // Draw wall
    ctx.strokeRect(6, 4, game.width - 12, game.height - 8)
    ctx.closePath();
    //End Wall

    // Create Snake
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2, true);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    if (x + dx > game.width - ballRadius - 7|| x + dx < ballRadius + 7) {
      dx = -dx;
    }
    if (y + dy > game.height - ballRadius - 5 || y + dy < ballRadius + 5) {
      dy = -dy;
    }
    x += dx;
    y += dy;
  }
  setInterval(play, 100);

}
window.addEventListener("load", draw, false);
