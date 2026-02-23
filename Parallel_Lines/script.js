// script.js

// Get the HTML Canvas element and it's 2d context.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw two parallel lines.
ctx.lineWidth = 5.0;
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(20, 20);
ctx.lineTo(300, 20);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(20, 220);
ctx.lineTo(300, 220);
ctx.stroke();
