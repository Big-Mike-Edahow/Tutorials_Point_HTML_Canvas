// script.js

// Get the HTML Canvas element and it's 2d context.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw a quadratic curve.
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(40, 30);
ctx.quadraticCurveTo(160, 390, 280, 30);
ctx.stroke();
ctx.closePath();
