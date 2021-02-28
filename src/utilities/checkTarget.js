import { spawnFood } from './spawnFood';

export function checkTarget(snakeBlocksPositions, foodPos, updateFoodPos) {
  let head = snakeBlocksPositions[0];

  if (head.leftPos === foodPos.leftPos && head.topPos === foodPos.topPos) {
    updateFoodPos(spawnFood(snakeBlocksPositions));
  }

  for (let i = 1; i < snakeBlocksPositions.length; i++) {
    if (
      head.leftPos === snakeBlocksPositions[i].leftPos &&
      head.topPos === snakeBlocksPositions[i].topPos
    )
      return true;
  }
}
