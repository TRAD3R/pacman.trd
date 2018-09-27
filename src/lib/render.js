import config from '../config';

export default (context, canvas, player, enemy, powerdot, data, image) => {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'white';
  context.fillText(`Человек ${data.pscore} : ${data.escore} Сопливчик`, 2, 20);

  context.drawImage(image, player.pacX, player.pacY, config.image.sizeX, config.image.sizeY, player.x, player.y, player.size, player.size);
}