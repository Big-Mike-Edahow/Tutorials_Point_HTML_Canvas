// script.js

function main() {
  // Get the HTML Canvas element, and it's 2d context.
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Use Path 2d to draw a circle in a square.
  var rectangle = new Path2D();
  rectangle.rect(100, 100, 100, 100);
  var circle = new Path2D();
  circle.arc(150, 150, 25, 0, 2 * Math.PI);
  ctx.stroke(rectangle);
  ctx.fill(circle);
}

main();
