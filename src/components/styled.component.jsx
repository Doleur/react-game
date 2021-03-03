import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(../assets/img/main_back.jpg);
  background-size: cover;
  @media (max-height: 768px) {
    height: 100%;
  }
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
  @media (max-width: 990px) {
    width: 760px;
    height: 600px;
    background-image: none;
  }
  @media (max-width: 768px) {
    width: 460px;
    height: 460px;
  }
`;

export const GameWrapper = styled.div`
  position: relative;
  display: flex;
  background: url(../assets/img/back_green_${(props) =>
    props.parameters.snakeBlockSize}.png);
  width: 900px;
  height: 600px;
  padding: 10px;
  @media (max-width: 990px) {
    width: 750px;
    height: 450px;
  }
  @media (max-width: 768px) {
    width: 450px;
    height: 450px;
  }
`;

export const Score = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
  text-shadow: rgb(71, 71, 71) 1px 1px 1px, rgb(71, 71, 71) -1px -1px 1px,
    rgb(71, 71, 71) -1px 1px 1px, rgb(71, 71, 71) 1px -1px 1px;
`;
