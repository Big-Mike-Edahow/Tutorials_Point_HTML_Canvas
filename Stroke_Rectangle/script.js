// script.js

// Get the HTML Canvas element and it's 2d context.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Variable declarations.
let x = 50;
let y = 50;
let width = 200;
let height = 200;

// Draw a stroked rectangle.
ctx.strokeRect(x, y, width, height);
