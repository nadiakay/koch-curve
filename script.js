var canvas = document.createElement("canvas");
var w = (canvas.width = window.innerWidth);
var h = (canvas.height = window.innerHeight);
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

var seq = ["0"];
var pos = { x: 10, y: 10 };
var angle = 0; // in degrees
var nStep = 0,
  endStep = 1000,
  stepLen = 10;

init();

function init() {
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);

  var ticks = 0;

  var timer = setInterval(() => {
    if (nStep < endStep) render();
  }, 100);
}

function render() {
  console.log("render");
  if (nStep >= seq.length) seq = seq.concat(complement(seq));
  if (seq[nStep] == "0") {
    step();
    angle += 60;
  } else angle += 180;
  nStep++;
}

function step() {
  pos.x += stepLen * Math.cos(angle * (Math.PI / 180));
  pos.y += stepLen * Math.sin(angle * (Math.PI / 180));
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function complement(seq) {
  console.log("seq", seq);
  var comp = [];
  for (var i = 0; i < seq.length; i++) {
    if (seq[i] == "0") comp[i] = "1";
    else comp[i] = "0";
  }
  console.log("complement: ", comp);
  return comp;
}
