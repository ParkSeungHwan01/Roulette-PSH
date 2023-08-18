const roulette = document.querySelector('.roulette');
const spinButton = document.getElementById('spinButton');

function getRandomRotation() {
  const min = 720;
  const max = 1440;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spinRoulette() {
  spinButton.disabled = true;

  const rotation = getRandomRotation();

  roulette.style.transition = 'transform 4s ease-out';
  roulette.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    roulette.style.transition = 'none';
    roulette.style.transform = `rotate(${rotation % 360}deg)`;
    spinButton.disabled = false;
  }, 4000);
}

spinButton.addEventListener('click', spinRoulette);
