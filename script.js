import { formatTime } from './utils.js';

const timerDisplay = document.getElementById('timer');
const inputSection = document.getElementById('input-section');

const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let totalSeconds = 0;
let timerInterval;

function updateTimer() {
    if (totalSeconds <= 0) {
        stopTimer();
        return;
    }
    totalSeconds--;
    timerDisplay.textContent = formatTime(totalSeconds);
}

function startTimer() {
    totalSeconds = hoursInput.value * 3600 + minutesInput.value * 60 + secondsInput.value;
    inputSection.style.display = 'none';
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    totalSeconds = 0;
    timerDisplay.textContent = formatTime(totalSeconds);
    inputSection.style.display = 'block';
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
}

startButton.addEventListener('click', startTimer);

stopButton.addEventListener('click', stopTimer);

resetButton.addEventListener('click', resetTimer);

timerDisplay.textContent = formatTime(totalSeconds);