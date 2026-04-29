// script.js

function main() {
  // Get the HTML Canvas element, and it's 2d context.
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Draw a circle.
  ctx.beginPath();
  ctx.arc(100, 100, 50, 1 * Math.PI, 5 * Math.PI);
  ctx.stroke();
}

main();
