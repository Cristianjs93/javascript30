window.addEventListener('keydown', (e) => {
  const keyCode = e.code;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach((key) =>
  key.addEventListener('transitionend', () => key.classList.remove('playing'))
);
