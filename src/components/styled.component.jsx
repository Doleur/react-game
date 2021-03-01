import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: url(../assets/img/main_back.jpg);
  background-size: cover;
`;

export const Board = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  width: 983px;
  height: 656px;
  background-image: url(../assets/img/board_back.png);
  background-size: cover;
`;

export const GameWrapper = styled.div`
  position: relative;
  display: flex;
  background: url(../assets/img/back_green.png);
  width: ${(props) => props.parameters.width}px;
  height: ${(props) => props.parameters.height}px;
  padding: 10px;
`;
