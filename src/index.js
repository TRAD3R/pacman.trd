import Enemy from "./persons/enemy";
import player from "./persons/player";
import powerdot from "./persons/powerdot";
import render from "./lib/render";

const canvas = document.createElement("canvas");
const context = canvas.getContext('2d');
const enemy = Enemy();
const dataLocal = localStorage.getItem("packman");
const data = dataLocal ? JSON.parse(dataLocal) : {pscore: 0, escore: 0};

const resizeCanvas = () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  render(context, canvas, player, enemy, powerdot, data);
  requestAnimationFrame(resizeCanvas);
};

resizeCanvas();
document.body.appendChild(canvas);