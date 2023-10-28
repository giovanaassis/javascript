const txtMinutes = document.getElementById('minutes')
const txtSeconds = document.getElementById('seconds')
const txtMiliseconds = document.getElementById('miliseconds')
const startBtn = document.getElementById('startBtn')
const pauseBtn = document.getElementById('pauseBtn')
const resumeBtn = document.getElementById('resumeBtn')
const resetBtn = document.getElementById('resetBtn')

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;


function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            miliseconds += 10

        if (miliseconds === 1000) {
            seconds ++
            miliseconds = 0
        }
        if (seconds === 60) {
            minutes++
            seconds = 0
        }

        txtMinutes.textContent = formatTime(minutes)
        txtSeconds.textContent = formatTime(seconds)
        txtMiliseconds.textContent = formatMiliseconds(miliseconds)

        }
    }, 10)

    startBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

const formatTime = (time) => { return time < 10 ? `0${time}` : time; }

const formatMiliseconds = (time) => {
    return time < 100 ? `${time}`.padStart(3,'0') : time
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'block';
}

function resumeTimer() {
    isPaused = false;
    resumeBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function resetTimer() {
    clearInterval(interval)
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    txtMiliseconds.textContent = '000'
    txtSeconds.textContent = '00'
    txtMinutes.textContent = '00'

    startBtn.style.display = 'block'
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'none'
}

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resumeBtn.addEventListener('click', resumeTimer)
resetBtn.addEventListener('click', resetTimer)