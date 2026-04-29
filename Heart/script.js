// script.js

function main() {
  // Get the HTML Canvas element, and it's 2d context.
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Draw a Heart.
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(300, 300);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx.fillStyle = "red";
  ctx.fill();
}

main();
