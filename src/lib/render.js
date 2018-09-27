export default (context, canvas, player, enemy, powerdot, data) => {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'white';
  context.fillText(`Человек ${data.pscore} : ${data.escore} Сопливчик`, 2, 20);
}