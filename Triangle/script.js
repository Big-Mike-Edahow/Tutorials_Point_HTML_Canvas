// script.js

// Get the HTML Canvas element, and it's 2d context.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Define the triangle's properties.
const triangleBase = 200;
const canvasCenterX = canvas.width / 2;
const canvasCenterY = canvas.height / 2;

// Calculate the height of an equilateral triangle.
const halfSize = triangleBase / 2;
const height = triangleBase * Math.sqrt(3) / 2;

// Define the three vertices of the triangle relative to the canvas center.
const point1X = canvasCenterX;
const point1Y = canvasCenterY - height / 2; // Top point
const point2X = canvasCenterX - halfSize;
const point2Y = canvasCenterY + height / 2; // Bottom-left point
const point3X = canvasCenterX + halfSize;
const point3Y = canvasCenterY + height / 2; // Bottom-right point

// Draw and close the triangle.
ctx.beginPath();
ctx.moveTo(point1X, point1Y);
ctx.lineTo(point2X, point2Y);
ctx.lineTo(point3X, point3Y);
ctx.closePath();

// Set the fill style to blue and fill the path.
ctx.fillStyle = "blue";
ctx.fill();
