// script.js

// Get the HTML Canvas element and its 2D context.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the font style, size, and color.
ctx.font = "75px Arial";
ctx.fillStyle = "red";

// Align the text horizontally and vertically in the center.
ctx.textAlign = "center";
ctx.textBaseline = "middle";

// Calculate the center coordinates of the canvas.
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Draw the text at the center coordinates
ctx.fillText("Hello World!", centerX, centerY);
