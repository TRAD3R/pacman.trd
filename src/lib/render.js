import config from '../config';
import functions from "./functions";

export default (context, canvas, player, enemy, powerdot, data, image) => {
  // background
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Score
  context.fillStyle = 'white';
  context.fillText(`Человек ${data.pscore} : ${data.escore} Сопливчик`, 2, 20);

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

  enemy.pacX = enemy.pacX === 0 ? 32 : 0;
  enemy.pacY = enemy.pacY === 0 ? 32 : 0;


  // Persons
  context.drawImage(image, player.pacX, player.pacY, config.image.sizeX, config.image.sizeY, player.x, player.y, player.size, player.size);
  context.drawImage(image, enemy.pacX, enemy.pacY, config.image.sizeX, config.image.sizeY, enemy.x, enemy.y, enemy.size, enemy.size);
}