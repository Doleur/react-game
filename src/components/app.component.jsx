import React from 'react';
import * as S from './styled.component';
import Snake from './snake/Snake.component';
import { parameters } from '../constants/constants';
import { spawnFood } from '../utilities/spawnFood';

const App = () => {
  let spawnFoodPos = spawnFood([
    {
      leftPos: parameters.width / 2,
      topPos: parameters.height / 2
    }
  ]);
  return (
    <S.GameWrapper parameters={parameters}>
      <Snake parameters={parameters} spawnFoodPos={spawnFoodPos} />
    </S.GameWrapper>
  );
};

export default App;
