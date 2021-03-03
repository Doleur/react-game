import React, { useState } from 'react';
import * as S from './styled.component';
import Snake from './snake/Snake.component';
import GameOver from './gameOverWindow/GameOver.component';
import Settings from './settings/Settings.component';
import {
  parameters,
  snakeColor,
  saveItem,
  settings
} from '../constants/constants';
import { spawnFood } from '../utilities/spawnFood';
import { createSnake } from '../utilities/createSnake';

const App = () => {
  let loadGame = JSON.parse(localStorage.getItem('saveItem'));
  if (loadGame) {
    saveItem.bestScore = loadGame.bestScore;
    saveItem.numberTheme = loadGame.numberTheme;
    saveItem.numberSound = loadGame.numberSound;
    saveItem.numberDifficultyGame = loadGame.numberDifficultyGame;
  }

  let spawnFoodPos = spawnFood(createSnake());

  const [isGameOver, updateIsGameOver] = useState(false);
  const [sizeBoard, updateSizeBoard] = useState(30);

  function GameWindow(props) {
    if (props.isGameOver) {
      return (
        <GameOver
          parameters={parameters}
          saveItem={saveItem}
          updateIsGameOver={updateIsGameOver}
        />
      );
    } else {
      return (
        <S.GameWrapper id="gameWrapper" parameters={parameters}>
          <Snake
            parameters={parameters}
            snakeColor={snakeColor}
            saveItem={saveItem}
            settings={settings}
            spawnFoodPos={spawnFoodPos}
            updateIsGameOver={updateIsGameOver}
          />
        </S.GameWrapper>
      );
    }
  }

  return (
    <S.Wrapper>
      <Settings
        parameters={parameters}
        snakeColor={snakeColor}
        saveItem={saveItem}
        settings={settings}
        sizeBoard={sizeBoard}
        updateSizeBoard={updateSizeBoard}
      />
      <S.Board parameters={parameters}>
        <GameWindow isGameOver={isGameOver} />
      </S.Board>
    </S.Wrapper>
  );
};

export default App;
