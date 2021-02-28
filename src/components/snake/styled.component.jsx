import styled from 'styled-components';

export const SnakeBlock = styled.div.attrs((props) => ({
  style: {
    width: props.parameters.snakeBlockSize + 'px',
    height: props.parameters.snakeBlockSize + 'px',
    left: props.blockPosition.leftPos + 'px',
    top: props.blockPosition.topPos + 'px'
  }
}))`
  position: absolute;
  background-color: ${props => props.isHead ? 'red' : props.isJopa ? 'green' : '#000000'};
`;
