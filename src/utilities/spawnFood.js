import { parameters } from '../constants/constants';

export function spawnFood(snakeBlocksPositions) {
  let isValidPos = true;

  let leftPos =
    Math.floor(
      Math.random() *
        ((parameters.width - parameters.snakeBlockSize) /
          parameters.snakeBlockSize +
          1)
    ) * parameters.snakeBlockSize;
  let topPos =
    Math.floor(
      Math.random() *
        ((parameters.height - parameters.snakeBlockSize) /
          parameters.snakeBlockSize +
          1)
    ) * parameters.snakeBlockSize;

  for (let i = 0; i < snakeBlocksPositions.length; i++) {
    if (
      snakeBlocksPositions[i].leftPos === leftPos &&
      snakeBlocksPositions[i].topPos === topPos
    ) {
      isValidPos = false;
      break;
    }
    if (!isValidPos) {
      spawnFood(snakeBlocksPositions);
    }
  }
  return { leftPos, topPos };
}
