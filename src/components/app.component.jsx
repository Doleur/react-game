import React from 'react';
import * as S from './styled.component';
import Snake from './snake/Snake.component';
import { parameters } from '../constants/constants';
import { spawnFood } from '../utilities/spawnFood';
import { createSnake } from '../utilities/createSnake';

const App = () => {
  let spawnFoodPos = spawnFood(createSnake());
  return (
    <S.GameWrapper parameters={parameters}>
      <Snake parameters={parameters} spawnFoodPos={spawnFoodPos} />
    </S.GameWrapper>
  );
};

export default App;
