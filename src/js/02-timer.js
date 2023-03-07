import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const currentDate = setInterval(() => {
  new Date();
}, 1000);
let selectedDate = '';
// console.log(currentDate.getTime());
const buttonStartCounterEl = document.querySelector('[data-start]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    setSelectedDate(selectedDates);
  },
};
buttonStartCounterEl.addEventListener('click', startCounter);
flatpickr('#datetime-picker', options);

function setSelectedDate(selectedDates) {
  console.log(currentDate);
  //   if (currentDate.getTime() > selectedDates[0].getTime()) {
  //     buttonStartCounterEl.setAttribute('disabled', true);
  //     return window.alert('Please choose a date in the future');
  //   }
  //   buttonStartCounterEl.removeAttribute('disabled');
  //   console.log(currentDate.getTime() < selectedDates[0].getTime());
  //   return (selectedDate = selectedDates[0]);
}
// console.log(selectedDates[0]);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function startCounter() {
  //   console.log(selectedDate.getTime() - currentDate.getTime());
  timerId = setInterval(() => {
    console.log(currentDate.getTime());
  }, 1000);
}
