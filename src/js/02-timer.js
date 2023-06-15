import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]')
const clearBtn = document.querySelector('[data-clear]')
const dataDays = document.querySelector('[data-days]')
const dataHours = document.querySelector('[data-hours]')
const dataMinutes = document.querySelector('[data-minutes]')
const dataSeconds = document.querySelector('[data-seconds]')

startBtn.addEventListener('click', timerStart)
clearBtn.addEventListener('click', timerClear)

let date = null;

let timerId = null;

startBtn.disabled = true
clearBtn.disabled = true

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        date = selectedDates[0].getTime()
        if (date < Date.now()) {
            startBtn.disabled = true;
            Notiflix.Notify.warning("Please choose a date in the future");
            return;
        }

        Notiflix.Notify.success("Good job!")
        startBtn.disabled = false

  },
};

flatpickr(input, options)

function timerStart() {

    startBtn.disabled = true
    clearBtn.disabled = false

    timerId = setInterval(() => {
        const currentTime = Date.now()
        const deltaTime = date - currentTime
        const convertedDate = convertMs(deltaTime)
        if (deltaTime < 900) {
            clearInterval(timerId)
        }
        dataDays.textContent = pad(convertedDate.days)
        dataHours.textContent = pad(convertedDate.hours)
        dataMinutes.textContent = pad(convertedDate.minutes)
        dataSeconds.textContent = pad(convertedDate.seconds)
    }, 1000);

 
}

function convertMs(deltaTime) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(deltaTime / day);
  // Remaining hours
  const hours = Math.floor((deltaTime % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((deltaTime % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((deltaTime % day) % hour) % minute) / second);
  
        return { days, hours, minutes, seconds };

    }

function pad(value) {
    return String(value).padStart(2, '0')
}

function timerClear() {
    clearInterval(timerId)
        dataDays.textContent = '00';
        dataHours.textContent = '00';
        dataMinutes.textContent = '00';
        dataSeconds.textContent = '00';
        startBtn.disabled = false;
        clearBtn.disabled = true;
        Notiflix.Notify.success("Successful cleaning!")
}