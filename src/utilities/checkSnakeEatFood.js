import { spawnFood } from './spawnFood';
import { parameters } from '../constants/constants';

export function checkSnakeEatFood(
  snakeBlocksPositions,
  foodPos,
  updateFoodPos
) {
  let head = snakeBlocksPositions[0];

  if (head.leftPos === foodPos.leftPos && head.topPos === foodPos.topPos) {
    updateFoodPos(spawnFood(snakeBlocksPositions));
    // updateScore((prevCount) => prevCount + 1);
    parameters.score += 1;
    return true;
  }
  return false;
}
