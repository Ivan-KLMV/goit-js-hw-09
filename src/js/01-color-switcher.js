function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

stopButton.setAttribute('disabled', true);
startButton.addEventListener('click', startChangeBGC);
stopButton.addEventListener('click', stopChangeBGC);

function startChangeBGC() {
  startButton.setAttribute('disabled', true);
  stopButton.removeAttribute('disabled');

  addBodyColor();

  timerId = setInterval(() => {
    addBodyColor();
  }, 1000);
}

function stopChangeBGC() {
  stopButton.setAttribute('disabled', true);
  startButton.removeAttribute('disabled');

  clearInterval(timerId);
}

function addBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
