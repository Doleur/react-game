import { parameters } from '../constants/constants';

// function moveHead() {
//   switch (this.state.direction) {
//     case 'left':
//       moveHeadLeft();
//       break;
//     case 'up':
//       moveHeadUp();
//       break;
//     case 'right':
//       moveHeadRight();
//       break;
//     default:
//       moveHeadDown();
//   }
// }

// function moveHeadLeft() {
//   let width = this.state.width;
//   let blockWidth = this.state.blockWidth;
//   let snake = this.state.snake;
//   snake[0].Xpos =
//     snake[0].Xpos <= 0 ? width - blockWidth : snake[0].Xpos - blockWidth;
//   this.setState({ snake });
// }

// function moveHeadUp() {
//   let height = this.state.height;
//   let blockHeight = this.state.blockHeight;
//   let snake = this.state.snake;
//   snake[0].Ypos =
//     snake[0].Ypos <= 0 ? height - blockHeight : snake[0].Ypos - blockHeight;
//   this.setState({ snake });
// }

// function moveHeadRight() {
//   let width = this.state.width;
//   let blockWidth = this.state.blockWidth;
//   let snake = this.state.snake;
//   snake[0].Xpos =
//     snake[0].Xpos >= width - blockWidth ? 0 : snake[0].Xpos + blockWidth;
//   this.setState({ snake });
// }

// function moveHeadDown() {
//   let height = this.state.height;
//   let blockHeight = this.state.blockHeight;
//   let snake = this.state.snake;
//   snake[0].Ypos =
//     snake[0].Ypos >= height - blockHeight ? 0 : snake[0].Ypos + blockHeight;
//   this.setState({ snake });
// }

export function moveSnake(
  snakeBlocksPositions,
  updateSnakeBlocksPositions,
  moveDirection
) {
  let newSnakeBlocksPositions = [...snakeBlocksPositions];

  let firstLeftPositionAfterHead = newSnakeBlocksPositions[0].leftPos;
  let firstTopPositionAfterHead = newSnakeBlocksPositions[0].topPos;

  switch (moveDirection) {
    case 'left':
      newSnakeBlocksPositions[0].leftPos =
        newSnakeBlocksPositions[0].leftPos <= 0
          ? parameters.width - parameters.snakeBlockSize
          : newSnakeBlocksPositions[0].leftPos - parameters.snakeBlockSize;
      break;
    case 'up':
      newSnakeBlocksPositions[0].topPos =
        newSnakeBlocksPositions[0].topPos <= 0
          ? parameters.height - parameters.snakeBlockSize
          : newSnakeBlocksPositions[0].topPos - parameters.snakeBlockSize;
      break;
    case 'right':
      newSnakeBlocksPositions[0].leftPos =
        newSnakeBlocksPositions[0].leftPos >=
        parameters.width - parameters.snakeBlockSize
          ? 0
          : newSnakeBlocksPositions[0].leftPos + parameters.snakeBlockSize;
      break;
    default:
      newSnakeBlocksPositions[0].topPos =
        newSnakeBlocksPositions[0].topPos >=
        parameters.height - parameters.snakeBlockSize
          ? 0
          : newSnakeBlocksPositions[0].topPos + parameters.snakeBlockSize;
  }

  for (let i = 1; i < newSnakeBlocksPositions.length; i++) {
    let secondLeftPositionAfterHead = newSnakeBlocksPositions[i].leftPos;
    let secondTopPositionAfterHead = newSnakeBlocksPositions[i].topPos;
    newSnakeBlocksPositions[i].leftPos = firstLeftPositionAfterHead;
    newSnakeBlocksPositions[i].topPos = firstTopPositionAfterHead;
    firstLeftPositionAfterHead = secondLeftPositionAfterHead;
    firstTopPositionAfterHead = secondTopPositionAfterHead;
  }
  updateSnakeBlocksPositions(newSnakeBlocksPositions);
}
