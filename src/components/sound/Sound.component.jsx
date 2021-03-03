import React from 'react';
import useSound from 'use-sound';
import * as S from './styled.component';

const Sound = ({ settings, numberSound, volume }) => {
  const [play, { stop, isPlaying }] = useSound(settings.sounds[numberSound], {
    volume: volume,
    loop: true
  });

  const handlePlayingSound = () => {
    isPlaying ? stop() : play();
  };

  return (
    <S.SettingsItemSound isPause={isPlaying} onClick={handlePlayingSound} />
  );
};

export default Sound;
