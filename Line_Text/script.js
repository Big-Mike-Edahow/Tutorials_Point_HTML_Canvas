// script.js

// Get the HTML Canvas element, and it's 2d context.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw the letter h with lines.
ctx.lineWidth = 5.0;
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(50, 50);
ctx.lineTo(50, 200);
ctx.lineTo(50, 125);
ctx.lineTo(100, 125);
ctx.lineTo(100, 200);
ctx.stroke();
ctx.closePath();

// Draw the letter i with lines.
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(200, 100);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.closePath();
// Dot the i.
ctx.fillStyle = "black";
ctx.fillRect(197, 80, 6, 6);
