import React from 'react';
import * as S from './styled.component';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GameOver from '../gameOverWindow/GameOver.component';

const BestScore = ({ parameters }) => {
  return (
    <Router>
      <S.Back><Link to="/">Back</Link></S.Back>

      <Switch>
        <Route path="/">
          <GameOver parameters={parameters} />
        </Route>
      </Switch>
    </Router>
  );
};

export default BestScore;
