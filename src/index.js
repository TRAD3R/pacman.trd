import Enemy from "./persons/enemy";
import player from "./persons/player";
import powerdot from "./persons/powerdot";
import render from "./lib/render";
import move from "./lib/move";

const canvas = document.createElement("canvas");
const context = canvas.getContext('2d');

const image = new Image();
image.src = "img/pac.png";
image.onload = () => {
  window.addEventListener('resize', resizeCanvas, false);
  resizeCanvas();
};


const enemy = new Enemy();
const dataLocal = localStorage.getItem("packman");
const data = dataLocal ? JSON.parse(dataLocal) : {pscore: 0, escore: 0};

// Catch key clicks
const keyClick = {};
document.addEventListener('keydown', ({keyCode}) => {
  keyClick[keyCode] = true;
  move(canvas, player, keyClick);
});
document.addEventListener('keyup', ({keyCode}) => delete keyClick[keyCode]);

// Draw game
const resizeCanvas = () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  render(context, canvas, player, enemy, powerdot, data, image);
  requestAnimationFrame(resizeCanvas);  // заново отрисовывает объект после каждого шага
};

document.body.appendChild(canvas);