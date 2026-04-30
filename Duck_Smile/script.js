// script.js

function main() {
  // Get the HTML Canvas element, and it's 2d context.
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Draw a Duck Smile.
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
  ctx.moveTo(110, 75);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.arc(75, 75, 35, 0, Math.PI, false);
  ctx.moveTo(65, 65);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
  ctx.stroke();
}

main();
