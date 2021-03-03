export const parameters = {
  width: 450,
  height: 450,
  startSnakeSize: 6,
  snakeBlockSize: 30,
  score: 0
};

export const saveItem = {
  bestScore: [],
  numberTheme: 1,
  numberSound: 0,
  snakeBlockSize: parameters.snakeBlockSize,
  numberDifficultyGame: 0
};

export const snakeColor = [
  '#53230C',
  '#5B5343',
  '#3A61FF',
  '#4C00FF',
  '#1D9122',
  '#770D00',
  '#FF21EC'
];

export const settings = {
  sounds: [
    '../../assets/audio/WispXMint_(holidaymp3.ru).mp3',
    '../../assets/audio/NOMA_-_Brain_Power.mp3',
    '../../assets/audio/mocart_-_rekviem-k626.mp3',
    '../../assets/audio/s4.mp3'
  ],
  difficultyGame: [100, 70, 40]
};
