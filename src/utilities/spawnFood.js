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

  function checkValidPosFood(leftPos, topPos) {
    for (let i = 0; i < snakeBlocksPositions.length; i++) {
      if (
        snakeBlocksPositions[i].leftPos === leftPos &&
        snakeBlocksPositions[i].topPos === topPos
      ) {
        return false;
      }
    }
    return true;
  }

  while (!checkValidPosFood(leftPos, topPos)) {
    leftPos =
      Math.floor(
        Math.random() *
          ((parameters.width - parameters.snakeBlockSize) /
            parameters.snakeBlockSize +
            1)
      ) * parameters.snakeBlockSize;
    topPos =
      Math.floor(
        Math.random() *
          ((parameters.height - parameters.snakeBlockSize) /
            parameters.snakeBlockSize +
            1)
      ) * parameters.snakeBlockSize;
  }
  return { leftPos, topPos };
}
