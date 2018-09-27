import config from '../config';
import functions from "./functions";

let issetEnemy = false;

export default (context, canvas, player, enemy, powerdot, data, image) => {
  // background
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Score
  context.fillStyle = 'white';
  context.fillText(`Человек ${data.pscore} : ${data.escore} Сопливчик`, 2, 20);

  if(player.x + player.size >= powerdot.x && player.y + player.size >= powerdot.y
      && player.x <= powerdot.x + powerdot.size && player.y <= powerdot.y + powerdot.size){
    powerdot.powerUp = false;
    powerdot.pCountDown = 500;
    powerdot.enemyNum = enemy.pacX;
    enemy.pacX = 384;
  }

  if(!powerdot.powerUp){
    powerdot.x = functions.mathRandom(canvas.width);
    powerdot.y = functions.mathRandom(canvas.height);
    powerdot.powerUp = true;
  }

  if(!issetEnemy){
    enemy.pacX = functions.mathRandom(5) * 64;
    enemy.speed = functions.mathRandom(5);
    console.log(enemy);
    enemy.x = functions.mathRandom(canvas.width);
    enemy.y = functions.mathRandom(canvas.height);
    issetEnemy = true;
  }else{
    context.fillStyle = "#ffff00";
    context.beginPath();
    // powerdot.x = functions.mathRandom(canvas.width);
    // powerdot.y = functions.mathRandom(canvas.height);
    context.arc(powerdot.x, powerdot.y, powerdot.size, 0, Math.PI * 2, true);
    context.fill();
  }


  if(enemy.moving <= 0){
    enemy.moving = functions.mathRandom(30) * 3;
    enemy.speed = functions.mathRandom(3);

    enemy.dirX = 0;
    enemy.dirY = 0;

    if(enemy.moving % 2){
      enemy.dirX = player.x < enemy.x ? -enemy.speed : enemy.speed;
    }else{
      enemy.dirY = player.y < enemy.y ? -enemy.speed : enemy.speed;
    }
  }

  enemy.moving--;
  enemy.x += enemy.dirX;
  enemy.y += enemy.dirY;

  enemy.pacY = enemy.pacY === 0 ? 32 : 0;


  // Persons
  context.drawImage(image, player.pacX, player.pacY, config.image.sizeX, config.image.sizeY, player.x, player.y, player.size, player.size);
  context.drawImage(image, enemy.pacX, enemy.pacY, config.image.sizeX, config.image.sizeY, enemy.x, enemy.y, enemy.size, enemy.size);
}