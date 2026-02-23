// script.js

// Get the HTML Canvas element and it's 2d context.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw three bezier curves.
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.bezierCurveTo(150, 15, 300, 150, 350, 75);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.bezierCurveTo(150, 115, 300, 250, 350, 175);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(100, 300);
ctx.bezierCurveTo(150, 215, 300, 350, 350, 275);
ctx.stroke();
ctx.closePath();
