import React from 'react';
import * as S from './styled.component';
// import BestScore from '../bestScore/BestScore.component';

const GameOver = ({ parameters, updateIsGameOver }) => {
  function newGame(event){
    event.keyCode === 32 ? updateIsGameOver(false) : null;
    parameters.score = 0;
    window.removeEventListener('keydown', newGame);
  }
  window.addEventListener('keydown', newGame);
  return (
    <S.GameOver parameters={parameters}>
      <S.Score>Your score: {parameters.score} </S.Score>
      <S.BestScoreBtn>Best Score</S.BestScoreBtn>
      <S.TextPressSpace>press SPACE to restart</S.TextPressSpace>
    </S.GameOver>
  );
};

export default GameOver;
