const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;

// console.log(btnStart)
// console.log(btnStop)

btnStop.disabled = true

btnStart.addEventListener('click', onStartBtnClick);
btnStop.addEventListener('click', onStopBtnClick)

function onStartBtnClick() {
    body.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    btnStart.disabled = true
    btnStop.disabled = false
}

function onStopBtnClick() {
    clearInterval(timerId)
    btnStart.disabled = false
    btnStop.disabled = true
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}