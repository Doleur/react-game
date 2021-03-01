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
        '/head.png) 0% 0% / cover'
      : props.isEnd
      ? '#8DC73F'
      : '#8DC73F'
  }
}))`
  position: absolute;
  z-index: ${(props) => (props.isHead ? '5' : '0')};
`;

// 'url(../../assets/img/snakeBody/' +
//         props.blockPosition.direction +
//         '/end.png) 0% 0% / cover'

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
