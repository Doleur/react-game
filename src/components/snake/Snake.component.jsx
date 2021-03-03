import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import * as S from './styled.component';
import { createSnake } from '../../utilities/createSnake';
import { moveSnake } from '../../utilities/moveSnake';
import { handleKeyDown } from '../../utilities/handleKeyDown';
import { checkGameOver } from '../../utilities/checkGameOver';
import { checkSnakeEatFood } from '../../utilities/checkSnakeEatFood';
import { checkBestScore } from '../../utilities/checkBestScore';
import { saveGame } from '../../utilities/saveGame';
import { checkParameters } from '../../utilities/checkParameters';

const Snake = ({
  parameters,
  snakeColor,
  spawnFoodPos,
  updateIsGameOver,
  saveItem,
  settings
}) => {
  const [snakeBlocksPositions, updateSnakeBlocksPositions] = useState(
    createSnake('right')
  );
  const [foodPos, updateFoodPos] = useState(spawnFoodPos);
  const [moveDirection, updateMoveDirection] = useState('right');
  const [isSnakeSound, updateIsSnakeSound] = useState('true');

  const [play] = useSound('../../assets/audio/am.mp3', {
    volume: 0.5
  });

  const handleKey = (event) => {
    handleKeyDown(event, moveDirection, updateMoveDirection);
  };
  useEffect(() => {
    checkParameters();
    if (checkGameOver(snakeBlocksPositions, foodPos, updateFoodPos)) {
      updateIsGameOver(true);
      checkBestScore(parameters.score);
      saveGame();
      return;
    }
    window.addEventListener('keydown', handleKey);
    setTimeout(() => {
      let newSnakeBlocksPositions = [...snakeBlocksPositions];
      if (checkSnakeEatFood(snakeBlocksPositions, foodPos, updateFoodPos)) {
        if (isSnakeSound) {
          play();
        }
        newSnakeBlocksPositions.push(foodPos);
      }
      moveSnake(
        newSnakeBlocksPositions,
        updateSnakeBlocksPositions,
        moveDirection
      );
      saveGame();
    }, settings.difficultyGame[saveItem.numberDifficultyGame]);
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
          snakeColor={snakeColor}
          settings={settings}
          saveItem={saveItem}
          isHead={index === 0}
          isEnd={snakeBlocksPositions.length - 1 === index}
        />
      ))}
      <S.FoodBlock blockPosition={foodPos} parameters={parameters} />
      <S.Score>Score: {parameters.score} </S.Score>
      <S.SnakeSound
        isSnakeSound={isSnakeSound}
        onClick={() => updateIsSnakeSound(!isSnakeSound)}
      />
    </>
  );
};

export default Snake;
