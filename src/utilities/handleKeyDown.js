export function handleKeyDown(event, moveDirection, updateMoveDirection) {
  // if (isGameOver && event.keyCode === 32) {
  //   this.resetGame()
  //   return
  // }

  let newDirection;
  switch (event.keyCode) {
    case 37:
    case 65:
      newDirection = moveDirection === 'right' ? 'right' : 'left';
      break;
    case 38:
    case 87:
      newDirection = moveDirection === 'down' ? 'down' : 'up';
      break;
    case 39:
    case 68:
      newDirection = moveDirection === 'left' ? 'left' : 'right';
      break;
    case 40:
    case 83:
      newDirection = moveDirection === 'up' ? 'up' : 'down';
      break;
    default:
      return;
  }
  if (moveDirection === newDirection) return;

  updateMoveDirection(newDirection);
}
