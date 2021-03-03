export function checkGameOver(snakeBlocksPositions) {
  let head = snakeBlocksPositions[0];

  for (let i = 1; i < snakeBlocksPositions.length; i++) {
    if (
      head.leftPos === snakeBlocksPositions[i].leftPos &&
      head.topPos === snakeBlocksPositions[i].topPos
    )
      return true;
  }
  return false;
}
