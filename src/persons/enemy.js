/**
 * Assets of enemies
 * @param x     - start position X
 * @param y     - start position Y
 * @param pacX  - image start position X
 * @param pacY  - image start position Y
 * @param dirX
 * @param dirY
 * @param size  - image size
 * @param speed - speed
 * @returns {{x: number, y: number, pacX: number, pacY: number, dirX: number, dirY: number, size: number, speed: number}}
 */
export default (x = 110, y = 320, pacX = 0, pacY = 0, dirX = 0, dirY = 0, size = 32, speed = 5) => {
  return {x, y, pacX, pacY, dirX, dirY, size, speed};
}