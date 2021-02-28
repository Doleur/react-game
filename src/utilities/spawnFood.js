import { parameters } from '../constants/constants';

export function spawnFood(snakeBlocksPositions) {
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
      spawnFood(snakeBlocksPositions);
    }
  }
  return { leftPos, topPos };
}
