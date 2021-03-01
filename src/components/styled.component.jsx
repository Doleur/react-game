import styled from 'styled-components';

export const GameWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: #9e826f;
  width: ${(props) => props.parameters.width}px;
  height: ${(props) => props.parameters.height}px;
  align-items: flex-end;
  padding: 10px;
`;
