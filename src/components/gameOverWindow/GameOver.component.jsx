import React, { useState } from 'react';
import * as S from './styled.component';
import BestScore from '../bestScore/BestScore.component';

const GameOver = ({ parameters, updateIsGameOver, saveItem }) => {
  function newGame(event) {
    event.keyCode === 32 ? updateIsGameOver(false) : null;
    parameters.score = 0;
    window.removeEventListener('keydown', newGame);
  }
  window.addEventListener('keydown', newGame);

  const [isBestScore, updateIsBestScore] = useState(false);

  function ToggleBestScore(props) {
    if (props.isBestScore) {
      return (
        <BestScore
          parameters={parameters}
          updateIsBestScore={updateIsBestScore}
          saveItem={saveItem}
        />
      );
    } else {
      return (
        <>
          <S.Score>Your score: {parameters.score} </S.Score>
          <S.BestScoreBtn onClick={() => props.updateIsBestScore(true)}>
            Best Score
          </S.BestScoreBtn>
          <S.TextPressSpace>press SPACE to restart</S.TextPressSpace>
        </>
      );
    }
  }
  return (
    <S.GameOver parameters={parameters}>
      <ToggleBestScore
        isBestScore={isBestScore}
        updateIsBestScore={updateIsBestScore}
      />
    </S.GameOver>
  );
};

export default GameOver;
