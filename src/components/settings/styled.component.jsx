import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
  @media (max-width: 990px) {
    width: 500px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Settings = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  text-shadow: rgb(71, 71, 71) 1px 1px 1px, rgb(71, 71, 71) -1px -1px 1px,
    rgb(71, 71, 71) -1px 1px 1px, rgb(71, 71, 71) 1px -1px 1px;
  @media (max-width: 990px) {
    width: 230px;
  }
`;

export const SettingsItem = styled.div`
  display: flex;
  padding-top: 10px;
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  text-shadow: rgb(71, 71, 71) 1px 1px 1px, rgb(71, 71, 71) -1px -1px 1px,
    rgb(71, 71, 71) -1px 1px 1px, rgb(71, 71, 71) 1px -1px 1px;
`;

export const SettingsItemColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const SettingsItemDifficulty = styled.div`
  padding: 0 5px;
  font-size: 18px;
  color: #ffffff;
  text-shadow: rgb(71, 71, 71) 1px 1px 1px, rgb(71, 71, 71) -1px -1px 1px,
    rgb(71, 71, 71) -1px 1px 1px, rgb(71, 71, 71) 1px -1px 1px;
  &:hover {
    cursor: pointer;
    color: #33ff00;
    transform: scale(1.2);
  }
`;

export const SettingsItemSize = styled.div`
  padding: 0 5px;
  font-size: 18px;
  color: #ffffff;
  text-shadow: rgb(71, 71, 71) 1px 1px 1px, rgb(71, 71, 71) -1px -1px 1px,
    rgb(71, 71, 71) -1px 1px 1px, rgb(71, 71, 71) 1px -1px 1px;
  &:hover {
    cursor: pointer;
    color: #33ff00;
    transform: scale(1.2);
  }
`;

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

export const Volume = styled.div`
  width: 20px;
  height: 20px;
  background-image: ${(props) =>
    props.isPlus
      ? 'url(../../assets/img/vUp.png)'
      : 'url(../../assets/img/vDown.png)'};
  background-size: cover;
  margin: 0 5px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
