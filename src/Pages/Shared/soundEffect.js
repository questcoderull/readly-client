//   side effects
export const playSoundSuccess = () => {
  const audio = new Audio("/sound.wav");
  audio.play();
};

export const playSoundAlert = () => {
  const audio = new Audio("/nitification.mp3");
  audio.play();
};
