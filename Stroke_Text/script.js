// script.js

// Get the HTML Canvas element, and it's 2d context.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the font size, color, and width.
ctx.font = "180px serif";
ctx.strokeStyle = "black";
ctx.lineWidth = 5;

// Draw the text "hi".
ctx.strokeText("hi", 100, 225);
