import config from '../config';

export default (context, canvas, player, enemy, powerdot, data, image) => {
  // background
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Score
  context.fillStyle = 'white';
  context.fillText(`Человек ${data.pscore} : ${data.escore} Сопливчик`, 2, 20);

  // Persons
  context.drawImage(image, player.pacX, player.pacY, config.image.sizeX, config.image.sizeY, player.x, player.y, player.size, player.size);
  context.drawImage(image, enemy.pacX, enemy.pacY, config.image.sizeX, config.image.sizeY, enemy.x, enemy.y, enemy.size, enemy.size);
}