const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

const getRandomHexColor = function() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const changeColor = function() {
   document.body.style.backgroundColor = getRandomHexColor();
};

startBtn.addEventListener('click', function() {
   startBtn.disabled = true;
   intervalId = setInterval(changeColor, 1000);
});

stopBtn.addEventListener('click', function() {
   startBtn.disabled = false;
   clearInterval(intervalId);
});

