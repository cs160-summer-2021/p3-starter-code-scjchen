var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width  = window.innerWidth;
var height = window.innerHeight;

canvas.height = height;
canvas.width = width;

function start(e) {
  this.down = true;   
  this.X = e.touches[0].pageX;
  this.Y = e.touches[0].pageY;
}

function end() {
  this.down = false;          
}

function pencil(e) {
  if(this.down) {
    with(ctx) {
      beginPath();
      moveTo(this.X, this.Y);
      lineTo(e.touches[0].pageX, e.touches[0].pageY);
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#000000";
      stroke();
    }
    this.X = e.touches[0].pageX ;
    this.Y = e.touches[0].pageY ;
  }
}

canvas.addEventListener('touchstart', start, 0);
canvas.addEventListener('touchend', end, 0);
canvas.addEventListener('touchmove', pencil, 0);
