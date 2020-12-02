const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

canvas.onmousemove = function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
};

const drawSegment = ({a, b}) => {
  ctx.strokeStyle = '#999';

  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.stroke();
};

const drawShadow = ([a, ...points]) => {
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'black';

  ctx.beginPath();
  ctx.moveTo(a.x, a.y);

  points.forEach((a) => ctx.lineTo(a.x, a.y));

  ctx.fill();
  ctx.stroke();
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  shadowed
    .computeShadows(
      {
        topLeft: {x: 0, y: 0},
        bottomRight: {x: 640, y: 360},
      },
      segments,
      mouse,
    )
    .forEach(drawShadow);

  segments.forEach(drawSegment);
};

const drawLoop = () => {
  window.requestAnimationFrame(drawLoop);
  draw();
};

window.onload = drawLoop;
