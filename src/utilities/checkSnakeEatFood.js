import { spawnFood } from './spawnFood';

export function checkSnakeEatFood(
  snakeBlocksPositions,
  foodPos,
  updateFoodPos
) {
  let head = snakeBlocksPositions[0];

  if (head.leftPos === foodPos.leftPos && head.topPos === foodPos.topPos) {
    updateFoodPos(spawnFood(snakeBlocksPositions));
    return true;
  }
  return false;
}
