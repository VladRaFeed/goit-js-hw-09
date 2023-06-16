import Notiflix from 'notiflix';

const firstDelay = document.querySelector('[name=delay]')
const delayStep = document.querySelector('[name=step]')
const amount = document.querySelector('[name=amount]')
const createBtn = document.querySelector('.submit_button')
const form = document.querySelector('.form');

// createBtn.addEventListener('click', createPromise)



function createPromise(position, delay) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

  const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
    
      resolve({ position, delay })
      
    } else {
      
      reject({ position, delay })
      
  }

    }, delay)

  })
}



const formSubmitEl = document.querySelector('.form')
  
form.addEventListener('submit', formSubmit) 
  
function formSubmit(e) {
  e.preventDefault();

  const amountValue = Number(amount.value);

  const firstDelayValue = Number(firstDelay.value);
  
  const delayStepValue = Number(delayStep.value);
  
  for (let i = 0; i < amountValue; i++) {

    const position = i + 1

    const delay = firstDelayValue + (i * delayStepValue)

    createPromise(position, delay).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    })
    
  }
}

