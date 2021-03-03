import styled from 'styled-components';

export const SettingsItemSound = styled.div`
  width: 20px;
  height: 20px;
  background-image: ${(props) =>
    props.isPause
      ? 'url(../../assets/img/pause.png)'
      : 'url(../../assets/img/play.png)'};
  background-size: cover;
  border-radius: 5px;
  margin: 0 5px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
