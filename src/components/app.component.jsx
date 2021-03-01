import React from 'react';
import * as S from './styled.component';
import Snake from './snake/Snake.component';
import { parameters, snakeTheme } from '../constants/constants';
import { spawnFood } from '../utilities/spawnFood';
import { createSnake } from '../utilities/createSnake';

const App = () => {
  let spawnFoodPos = spawnFood(createSnake());
  return (
    <S.Wrapper>
      <S.Board parameters={parameters}>
        <S.GameWrapper parameters={parameters}>
          <Snake
            parameters={parameters}
            snakeTheme={snakeTheme}
            spawnFoodPos={spawnFoodPos}
          />
        </S.GameWrapper>
      </S.Board>
    </S.Wrapper>
  );
};

export default App;
