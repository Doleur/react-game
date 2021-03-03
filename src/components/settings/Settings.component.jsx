import React, { useState } from 'react';
import * as S from './styled.component';
import Sound from '../sound/Sound.component';

const Settings = ({
  snakeColor,
  saveItem,
  parameters,
  settings,
  updateSizeBoard
}) => {
  const [volume, updateVolume] = useState(0.5);

  const plusVolume = () => {
    updateVolume(volume + 0.1);
  };

  const minusVolume = () => {
    updateVolume(volume - 0.1);
  };

  return (
    <>
      <S.SettingsWrapper>
        <S.Settings>
          <div>Sound</div>
          <S.SettingsItem>
            <Sound settings={settings} numberSound={0} volume={volume} />
            <Sound settings={settings} numberSound={1} volume={volume} />
            <Sound settings={settings} numberSound={2} volume={volume} />
            <Sound settings={settings} numberSound={3} volume={volume} />
            <S.Volume isPlus={true} onClick={plusVolume} />
            <S.Volume isPlus={false} onClick={minusVolume} />
          </S.SettingsItem>
        </S.Settings>
        <S.Settings>
          <div>Difficulty Game</div>
          <S.SettingsItem>
            <S.SettingsItemDifficulty
              onClick={() => (saveItem.numberDifficultyGame = 0)}
            >
              Easy
            </S.SettingsItemDifficulty>
            <S.SettingsItemDifficulty
              onClick={() => (saveItem.numberDifficultyGame = 1)}
            >
              Medium
            </S.SettingsItemDifficulty>
            <S.SettingsItemDifficulty
              onClick={() => (saveItem.numberDifficultyGame = 2)}
            >
              Hard
            </S.SettingsItemDifficulty>
          </S.SettingsItem>
        </S.Settings>
        <S.Settings>
          <div>Snake Color</div>
          <S.SettingsItem>
            {snakeColor.map((color, index) => (
              <S.SettingsItemColor
                key={index}
                color={color}
                onClick={() => (saveItem.numberTheme = index)}
              />
            ))}
          </S.SettingsItem>
        </S.Settings>
        <S.Settings>
          <div>Size Board</div>
          <S.SettingsItem>
            <S.SettingsItemSize
              onClick={() => {
                parameters.snakeBlockSize = 50;
                updateSizeBoard(50);
              }}
            >
              Small
            </S.SettingsItemSize>
            <S.SettingsItemSize
              onClick={() => {
                parameters.snakeBlockSize = 30;
                updateSizeBoard(30);
              }}
            >
              Normal
            </S.SettingsItemSize>
            <S.SettingsItemSize
              onClick={() => {
                parameters.snakeBlockSize = 10;
                updateSizeBoard(10);
              }}
            >
              Big
            </S.SettingsItemSize>
          </S.SettingsItem>
        </S.Settings>
      </S.SettingsWrapper>
    </>
  );
};

export default Settings;
