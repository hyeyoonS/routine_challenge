import { formatTime } from './utils.js';

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timeElapsed = 0;
let timerInterval;

function updateTimer() {
    timeElapsed++;
    timerDisplay.textContent = formatTime(timeElapsed);
}

startButton.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timeElapsed = 0;
    timerDisplay.textContent = formatTime(timeElapsed);
});

timerDisplay.textContent = formatTime(timeElapsed);