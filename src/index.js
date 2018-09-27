import Enemy from "./persons/enemy";
import player from "./persons/player";
import powerdot from "./persons/powerdot";
import render from "./lib/render";

const canvas = document.createElement("canvas");
const context = canvas.getContext('2d');

const image = new Image();
image.src = "img/pac.png";
image.onload = () => {
  window.addEventListener('resize', resizeCanvas, false);
  resizeCanvas();
};


const enemy = Enemy();
const dataLocal = localStorage.getItem("packman");
const data = dataLocal ? JSON.parse(dataLocal) : {pscore: 0, escore: 0};

const resizeCanvas = () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  render(context, canvas, player, enemy, powerdot, data, image);
  requestAnimationFrame(resizeCanvas);  // заново отрисовывает объект после каждого шага
};

document.body.appendChild(canvas);