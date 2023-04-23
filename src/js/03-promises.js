import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Get input values and parse to integers
  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  // Check if values are not valid
  if (isNaN(delay) || isNaN(step) || isNaN(amount) || delay <= 0 || step < 0 || amount < 0) {
    return Notiflix.Report.warning(
      'Error!',
      'Incorrect input values. Enter positive numbers',
      'Try again'
    );
  }

  // Disable submit button
  submitBtn.disabled = true;

  try {
    // Create promises and show notifications
    const promises = Array.from({ length: amount }, (_, i) => createPromise(i, delay + step * i));
    await Promise.all(promises.map((p) =>
      p.then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }).catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    ));

    // Enable submit button
    submitBtn.disabled = false;
  } catch (error) {
    // Handle unexpected errors
    Notiflix.Notify.failure('An unexpected error occurred. Please try again later.');
    console.error(error);
  }
});

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        res({ position, delay });
      } else {
        // Reject
        rej({ position, delay });
      }
    }, delay);
  });
}
