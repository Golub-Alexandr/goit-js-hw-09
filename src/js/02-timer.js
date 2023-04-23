import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const dateTimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minField = document.querySelector('[data-minutes]');
const secField = document.querySelector('[data-seconds]');

let countInterval = null;
let targetDate = null;

Notiflix.Report.info(
   'Welcome!',
   'Please choose a date in the future and click on the "Start" button to begin counting down.',
   'Got it'
);

const updateTime = () => {
   const currentDate = new Date();
   const remainingTime = targetDate - currentDate;

   if (remainingTime < 0) {
      clearInterval(countInterval);
      startButton.disabled = true;
      dateTimePicker.disabled = false;
      Notiflix.Report.info(
            'Countdown ended',
            'Please choose a new date and click on "Start" to begin counting down again.',
            'OK'
      );
      return;
   }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, '0');
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, '0');
   const minutes = Math.floor((remainingTime / 1000 / 60) % 60)
      .toString()
      .padStart(2, '0');
   const seconds = Math.floor((remainingTime / 1000) % 60)
      .toString()
      .padStart(2, '0');

   daysField.textContent = days;
   hoursField.textContent = hours;
   minField.textContent = minutes;
   secField.textContent = seconds;
};

const startCountdown = () => {
   targetDate = new Date(dateTimePicker.value);
   countInterval = setInterval(updateTime, 1000);
   startButton.disabled = true;
   dateTimePicker.disabled = true;
};

flatpickr(dateTimePicker, {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,
   onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      const now = new Date();
      if (selectedDate < now) {
            Notiflix.Report.warning(
               'Invalid date',
               'Please choose a date in the future.',
               'OK'
            );
            startButton.disabled = true;
      } else {
            Notiflix.Report.success(
               'Great!',
               'The selected date is in the future. Click on "Start" to begin counting down.',
               'Ok'
            );
            startButton.disabled = false;
      }
   },
});

startButton.addEventListener('click', startCountdown);



