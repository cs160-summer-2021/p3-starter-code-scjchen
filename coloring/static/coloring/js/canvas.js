window.addEventListener('load', () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 1024;
  canvas.height= 1366;

  let painting = false;

  function start(e) {
    painting = true;
    pencil(e);
  }

  function end() {
    painting = false;
    ctx.beginPath();
  }

<<<<<<< HEAD
  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
=======

  function pencil(e){
    if(!painting) return;
    ctx.lineWidth = 3;
    ctx.lineCap = "square";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  function brush(e){
    if(!painting) return;
    ctx.lineWidth = 45;
    ctx.lineCap = "round";
>>>>>>> 56e073821cd19fc04fe5dc0dc58f38d762d0e123

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mouseup', end);
<<<<<<< HEAD
  canvas.addEventListener('mousemove', draw);
=======
  canvas.addEventListener('mousemove', pencil);


>>>>>>> 56e073821cd19fc04fe5dc0dc58f38d762d0e123
});
