import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formInput = document.querySelector('.form');
formInput.addEventListener('submit', startCreatePromise);

function startCreatePromise(evnt) {
  evnt.preventDefault();
  let delay = Number(formInput.delay.value);
  const step = Number(formInput.step.value);
  const amount = Number(formInput.amount.value);
  let position = 0;

  const intervalId = setInterval(() => {
    position += 1;

    if (amount < position) {
      clearInterval(intervalId);
      return;
    }
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
          clickToClose: true,
          useIcon: false,
          fontSize: '16px',
          position: 'left-bottom',
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
          clickToClose: true,
          useIcon: false,
          fontSize: '16px',
          position: 'left-bottom',
        });
      });
    delay += step;
  }, step);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
