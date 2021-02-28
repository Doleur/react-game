import React, { useState, useEffect } from 'react';
import * as S from './styled.component';
import { createSnake } from '../../utilities/createSnake';
import { moveSnake } from '../../utilities/moveSnake';
import { handleKeyDown } from '../../utilities/handleKeyDown';
import { checkTarget } from '../../utilities/checkTarget';

const Snake = ({ parameters, spawnFoodPos }) => {
  const [snakeBlocksPositions, updateSnakeBlocksPositions] = useState(
    createSnake()
  );
  const [foodPos, updateFoodPos] = useState(spawnFoodPos);
  const [isGameOver, updateIsGameOver] = useState(false);
  const [moveDirection, updateMoveDirection] = useState('right');
  const handleKey = (event) => {
    handleKeyDown(event, moveDirection, updateMoveDirection);
  };
  useEffect(() => {
    if (isGameOver) {
      return;
    }
    window.addEventListener('keydown', handleKey);
    setTimeout(() => {
      updateIsGameOver(
        checkTarget(snakeBlocksPositions, foodPos, updateFoodPos)
      );
      moveSnake(
        snakeBlocksPositions,
        updateSnakeBlocksPositions,
        moveDirection
      );
    }, 100);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [snakeBlocksPositions]);
  return (
    <>
      {snakeBlocksPositions.map((blockPosition, index) => (
        <S.SnakeBlock
          key={index}
          blockPosition={blockPosition}
          parameters={parameters}
          isHead={index === 0}
          isJopa={snakeBlocksPositions.length - 1 === index}
        />
      ))}
      <S.SnakeBlock blockPosition={foodPos} parameters={parameters} />
    </>
  );
};

export default Snake;
