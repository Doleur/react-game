import styled from 'styled-components';

export const SnakeBlock = styled.div.attrs((props) => ({
  style: {
    width: props.parameters.snakeBlockSize + 'px',
    height: props.parameters.snakeBlockSize + 'px',
    left: props.blockPosition.leftPos + 'px',
    top: props.blockPosition.topPos + 'px',
    background: props.isHead
      ? 'url(../../assets/img/snakeBody/' +
        props.blockPosition.direction +
        '/head_' +
        props.snakeTheme.numberTheme +
        '.png) 0% 0% / cover'
      : props.snakeTheme.colors[props.snakeTheme.numberTheme]
  }
}))`
  position: absolute;
  z-index: ${(props) => (props.isHead ? '5' : '0')};
`;

export const FoodBlock = styled.div.attrs((props) => ({
  style: {
    width: props.parameters.snakeBlockSize + 'px',
    height: props.parameters.snakeBlockSize + 'px',
    left: props.blockPosition.leftPos + 'px',
    top: props.blockPosition.topPos + 'px'
  }
}))`
  position: absolute;
  background: url(../../assets/img/mouse.png) 0% 0% / cover;
`;

export const Score = styled.div`
  position: absolute;
  z-index: 10;
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
  text-shadow: rgb(71, 71, 71) 1px 1px 1px, rgb(71, 71, 71) -1px -1px 1px,
    rgb(71, 71, 71) -1px 1px 1px, rgb(71, 71, 71) 1px -1px 1px;
`;
