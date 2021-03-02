import React, { useState, useEffect } from 'react';
import * as S from './styled.component';
import { createSnake } from '../../utilities/createSnake';
import { moveSnake } from '../../utilities/moveSnake';
import { handleKeyDown } from '../../utilities/handleKeyDown';
import { checkGameOver } from '../../utilities/checkGameOver';
import { checkSnakeEatFood } from '../../utilities/checkSnakeEatFood';
import { checkBestScore } from '../../utilities/checkBestScore';

const Snake = ({ parameters, snakeTheme, spawnFoodPos, updateIsGameOver }) => {
  const [snakeBlocksPositions, updateSnakeBlocksPositions] = useState(
    createSnake('right')
  );
  const [foodPos, updateFoodPos] = useState(spawnFoodPos);
  const [moveDirection, updateMoveDirection] = useState('right');
  // const [score, updateScore] = useState(0);

  const handleKey = (event) => {
    handleKeyDown(event, moveDirection, updateMoveDirection);
  };
  useEffect(() => {
    if (checkGameOver(snakeBlocksPositions, foodPos, updateFoodPos)) {
      updateIsGameOver(true);
      checkBestScore(parameters.score);
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
          snakeTheme={snakeTheme}
          isHead={index === 0}
          isEnd={snakeBlocksPositions.length - 1 === index}
        />
      ))}
      <S.FoodBlock blockPosition={foodPos} parameters={parameters} />
      <S.Score>Score: {parameters.score} </S.Score>
    </>
  );
};

export default Snake;
