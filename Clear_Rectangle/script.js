// script.js

// Get the HTML Canvas element and it's 2d context.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Clear rectangle.
ctx.fillRect(50, 50, 200, 200);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(50, 50, 50, 50);
