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
    powerdot.enemyEat = true;
  }

  if(!powerdot.powerUp){
    powerdot.x = functions.mathRandom(canvas.width);
    powerdot.y = functions.mathRandom(canvas.height);
    powerdot.powerUp = true;
  }

  if(powerdot.enemyEat){
    powerdot.pCountDown--;
    if(powerdot.pCountDown <= 0){
      powerdot.enemyEat = false;
      enemy.pacX = powerdot.enemyNum;
    }
  }

  if(player.x + player.size >= enemy.x && player.y + player.size >= enemy.y
    && player.x <= enemy.x + enemy.size && player.y <= enemy.y + enemy.size){
    if(powerdot.enemyEat){
      enemy.x = functions.mathRandom(canvas.width);
      enemy.y = functions.mathRandom(canvas.height);
      data.pscore++;
      powerdot.enemyEat = false;
      issetEnemy = false;
    }else{
      player.x = 10;
      player.y = 30;
      data.escore++;
    }

  }

  if(!issetEnemy){
    enemy.pacX = functions.mathRandom(5) * 64;
    enemy.speed = functions.mathRandom(5);
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
  if(powerdot.enemyEat){
    enemy.x -= enemy.dirX;
    enemy.y -= enemy.dirY;
  }else{
    enemy.x += enemy.dirX;
    enemy.y += enemy.dirY;
  }

  enemy.pacY = enemy.pacY === 0 ? 32 : 0;


  // Persons
  context.drawImage(image, player.pacX, player.pacY, config.image.sizeX, config.image.sizeY, player.x, player.y, player.size, player.size);
  context.drawImage(image, enemy.pacX, enemy.pacY, config.image.sizeX, config.image.sizeY, enemy.x, enemy.y, enemy.size, enemy.size);

  return data;
}