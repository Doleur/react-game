import styled from 'styled-components'

export const GameWrapper = styled.div`
    position: relative;
    display: flex;
    background-color: rgb(173, 173, 173);
    width:${props => props.parameters.width}px;
    height: ${props => props.parameters.height}px;
    align-items: flex-end;
    padding: 10px;
`;

