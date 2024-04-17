// Select the canvas element
const canvas = document.getElementById('draw');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Create a canvas context and define style
const context = canvas.getContext('2d');
context.lineJoin = 'round';
context.lineCap = 'round';

let isDrawing = false;
let lastOffsetX = 0;
let lastOffsetY = 0;
let hue = 0;
// Keeping track of X and Y position on screen
const updateLastXandY = (event) => {
  [lastOffsetX, lastOffsetY] = [event.offsetX, event.offsetY];
}
// Indicates if it should or not draw on screen
const changeDrawingState = (state) => {
  isDrawing = state;
  console.log(`Drawing is ${isDrawing}`);
}
// Uses canvas methods to create the lines
const draw = function(event) {
  if (!isDrawing) return;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.lineWidth = 10;
  context.beginPath();
  // Informs where the movement starts and where it ends
  context.moveTo(lastOffsetX, lastOffsetY);
  context.lineTo(event.offsetX, event.offsetY);
  // Actually draws;
  context.stroke();

  updateLastXandY(event);
  hue++;
  if (hue >= 360) hue = 0;
}
// Events to trigger when drawing
canvas.onmousemove = draw;
canvas.onmousedown = (event) => {
  changeDrawingState(true);
  updateLastXandY(event);
}
canvas.onmouseup = () => changeDrawingState(false);
canvas.onmouseleave = () => changeDrawingState(false);

/*
  Javascript30 Challenge by Wes Bos
  Challenge 06: Having fun with HTML Canvas!
  
  Code here presented was written by: Weslley Alencar
  https://linkedin.com/in/walencar
  https://github.com/synkodev
*/
