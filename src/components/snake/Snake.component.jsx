import React, { useState, useEffect } from 'react';
import * as S from './styled.component';
import { createSnake } from '../../utilities/createSnake';
import { moveSnake } from '../../utilities/moveSnake';
import { handleKeyDown } from '../../utilities/handleKeyDown';
import { checkGameOver } from '../../utilities/checkGameOver';
import { checkSnakeEatFood } from '../../utilities/checkSnakeEatFood';

const Snake = ({ parameters, spawnFoodPos }) => {
  const [snakeBlocksPositions, updateSnakeBlocksPositions] = useState(
    createSnake('right')
  );
  const [foodPos, updateFoodPos] = useState(spawnFoodPos);
  const [moveDirection, updateMoveDirection] = useState('right');

  const handleKey = (event) => {
    handleKeyDown(event, moveDirection, updateMoveDirection);
  };
  useEffect(() => {
    if (checkGameOver(snakeBlocksPositions, foodPos, updateFoodPos)) {
      return;
    }
    window.addEventListener('keydown', handleKey);
    setTimeout(() => {
      let newSnakeBlocksPositions = [...snakeBlocksPositions];
      if (checkSnakeEatFood(snakeBlocksPositions, foodPos, updateFoodPos)) {
        newSnakeBlocksPositions.push(foodPos);
      }
      moveSnake(
        newSnakeBlocksPositions,
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
          isEnd={snakeBlocksPositions.length - 1 === index}
        />
      ))}
      <S.FoodBlock blockPosition={foodPos} parameters={parameters} />
    </>
  );
};

export default Snake;
