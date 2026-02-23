// script.js

// Get the HTML Canvas element and it's 2d context.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw a rhombus on the canvas.
ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(150, 200);
ctx.lineTo(300, 300);
ctx.lineTo(450, 200);
ctx.lineTo(300, 100);
ctx.fillStyle = "blue";
ctx.fill();
