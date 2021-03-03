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
        props.saveItem.numberTheme +
        '.png) 0% 0% / cover'
      : props.snakeColor[props.saveItem.numberTheme]
  }
}))`
  position: absolute;
  z-index: ${(props) => (props.isHead ? '5' : '0')};
`;
// transition: all 0.1s ease-out;

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

export const SnakeSound = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 5px;
  z-index: 10;
  background: url(../../assets/img/${(props) =>
      props.isSnakeSound ? 'iconAm' : 'iconNotAm'}.png)
    0% 0% / cover;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
