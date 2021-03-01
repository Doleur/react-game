import { parameters } from '../constants/constants';

export function createSnake(moveDirection) {
  let snake = [];

  let leftPos =
    Math.trunc(parameters.width / (2 * parameters.snakeBlockSize)) *
    parameters.snakeBlockSize;
  let topPos =
    Math.trunc(parameters.height / (2 * parameters.snakeBlockSize)) *
    parameters.snakeBlockSize;

  const snakeHead = { leftPos, topPos, direction: moveDirection };

  snake.push(snakeHead);

  for (let i = 1; i < parameters.startSnakeSize; i++) {
    leftPos -= parameters.snakeBlockSize;
    const snakeElement = { leftPos, topPos, direction: moveDirection };
    snake.push(snakeElement);
  }

  return snake;
}
