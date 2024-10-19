const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  if (!seconds) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = 'all 0.05s';
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  if (!minutes) {
    minHand.style.transition = 'none';
  } else {
    minHand.style.transition = 'all 0.05s';
  }
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  if (!hours) {
    hourHand.style.transition = 'none';
  } else {
    hourHand.style.transition = 'all 0.05s';
  }
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
