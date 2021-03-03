import styled from 'styled-components';

export const GameOver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(../assets/img/gameover_back.jpg);
  width: ${(props) => props.parameters.width}px;
  height: ${(props) => props.parameters.height}px;
  padding: 10px;
`;

export const Score = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
  text-shadow: rgb(71, 71, 71) 1px 1px 1px, rgb(71, 71, 71) -1px -1px 1px,
    rgb(71, 71, 71) -1px 1px 1px, rgb(71, 71, 71) 1px -1px 1px;
`;

export const BestScoreBtn = styled.div`
  padding: 10px;
  margin: 20px 0;
  font-size: 30px;
  background-color: #2fc568;
  &:hover {
    cursor: pointer;
    background-color: #3eff88;
  }
`;

export const TextPressSpace = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: red;
  text-shadow: rgb(71, 71, 71) 1px 1px 1px, rgb(71, 71, 71) -1px -1px 1px,
    rgb(71, 71, 71) -1px 1px 1px, rgb(71, 71, 71) 1px -1px 1px;
`;
