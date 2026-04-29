// script.js

// Get the HTML Canvas element, and it's 2d context.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw a star on the canvas.
// R = radius. X = x coord. Y = y coord. N = points.
function star(R, X, Y, N) {
  ctx.beginPath();
  ctx.moveTo(X + R, Y);
  for (var i = 1; i <= N * 2; i++) {
    if (i % 2 == 0) {
      var theta = i * (Math.PI * 2) / (N * 2);
      var x = X + R * Math.cos(theta);
      var y = Y + R * Math.sin(theta);
    } else {
      var theta = i * (Math.PI * 2) / (N * 2);
      var x = X + R / 2 * Math.cos(theta);
      var y = Y + R / 2 * Math.sin(theta);
    }
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.fillStyle = "green";
  ctx.stroke();
}

star(125, 200, 175, 5);
