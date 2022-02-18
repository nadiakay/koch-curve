var canvas = document.createElement("canvas");
var w = (canvas.width = window.innerWidth);
var h = (canvas.height = window.innerHeight);
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

var seq = ["0"];
var pos = (w / 2, h / 2);
var angle = 0;
var nStep = 0,
  endStep = 20;

init();

function init() {
  ctx.strokeStyle = "white";

  var ticks = 0;

  var timer = setInterval(() => {
    if (nStep < endStep) render();
  }, 1000);
}

function render() {
  console.log("render");
  if (nStep >= seq.length) seq = seq.concat(complement(seq));
  nStep++;
}

function step() {
  var dx = cos(step_len),
    dy = sin(step_len);
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
