import { saveItem } from '../constants/constants';
const numberOfBestScore = 10;

export function checkBestScore(score) {
  if (saveItem.bestScore.length >= numberOfBestScore) {
    if (saveItem.bestScore[9] >= score) return;
    saveItem.bestScore.pop();
  }

  saveItem.bestScore.push(score);
  saveItem.bestScore.sort((a, b) => {
    return b - a;
  });
  if (saveItem.bestScore === []) {
    return;
  }
}
