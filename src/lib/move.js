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
}