import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';
import '../css/02-timer.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    setDate(selectedDates);
  },
};
const startButton = document.querySelector('[data-start]');
const timer = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let selectedDate = null;
let isActive = false;

flatpickr('#datetime-picker', options);

startButton.addEventListener('click', startCountDawn);

function setDate(selectedDates) {
  selectedDate = selectedDates[0].getTime();

  if (Date.now() > selectedDate) {
    selectedDate = null;
    startButton.setAttribute('disabled', true);

    // return window.alert('Please choose a date in the future');
    return Notify.failure('Please choose a date in the future');
  }

  startButton.removeAttribute('disabled');

  return selectedDate;
}

function startCountDawn() {
  if (selectedDate < Date.now() || isActive) {
    return;
  }

  isActive = true;

  const timerID = setInterval(() => {
    const deltaTime = selectedDate - Date.now();

    if (deltaTime <= 1000) {
      clearInterval(timerID);
    }
    const timeUnits = convertMs(deltaTime);
    setTimeUnits(timeUnits);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function setTimeUnits({ days, hours, minutes, seconds }) {
  timer.days.textContent = days;
  timer.hours.textContent = hours;
  timer.minutes.textContent = minutes;
  timer.seconds.textContent = seconds;
}
