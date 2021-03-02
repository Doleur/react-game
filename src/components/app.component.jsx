import React, { useState } from 'react';
import * as S from './styled.component';
import Snake from './snake/Snake.component';
import GameOver from './gameOverWindow/GameOver.component';
// import BestScore from './bestScore/BestScore.component';
import { parameters, snakeTheme, saveItem } from '../constants/constants';
import { spawnFood } from '../utilities/spawnFood';
import { createSnake } from '../utilities/createSnake';

const App = () => {
  let spawnFoodPos = spawnFood(createSnake());

  const [isGameOver, updateIsGameOver] = useState(false);

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
        <S.GameWrapper parameters={parameters}>
          <Snake
            parameters={parameters}
            snakeTheme={snakeTheme}
            saveItem={saveItem}
            spawnFoodPos={spawnFoodPos}
            updateIsGameOver={updateIsGameOver}
          />
        </S.GameWrapper>
      );
    }
  }

  return (
    <S.Wrapper>
      <S.Board parameters={parameters}>
        <GameWindow isGameOver={isGameOver} />
      </S.Board>
    </S.Wrapper>
  );
};

export default App;
