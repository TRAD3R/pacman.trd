export default (canvas, player, keyClick) => {
  if(37 in keyClick){
    player.x -= player.speed;
    player.pacY = 64;
  }else if(38 in keyClick){
    player.y -= player.speed;
    player.pacY = 96;
  }else if(39 in keyClick){
    player.x += player.speed;
    player.pacY = 0;
  }else if(40 in keyClick){
    player.y += player.speed;
    player.pacY = 32;
  }

  // open and close the mouth
  player.pacX = player.pacX === 320 ? 352 : 320;

  // move over window borders
  if(player.x < -30){
    player.x = canvas.width - 10;
  }else if(player.x > canvas.width){
    player.x = -20;
  }
  if(player.y < -30){
    player.y = canvas.height - 10;
  }else if(player.y > canvas.height){
    player.y = -20;
  }
}