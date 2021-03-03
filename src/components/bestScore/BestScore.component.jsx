import React from 'react';
import * as S from './styled.component';

const BestScore = ({ updateIsBestScore, saveItem }) => {
  return (
    <>
      <S.HeadBestScore>Best Score</S.HeadBestScore>
      {saveItem.bestScore.map((score, index) => (
        <S.BestScoreItem key={index}>
          {index + 1 + '. ' + score + ' score'}
        </S.BestScoreItem>
      ))}
      <S.Back onClick={() => updateIsBestScore(false)}>Back</S.Back>
    </>
  );
};

export default BestScore;
