'use script';

const formatDigit = (digit) => digit < 10 ? `0${digit}` : digit;

const updateDisplay = (time) => {
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const days = document.getElementById('days');


    const qtdSeconds = time % 60;
    const qtdMinutes = Math.floor(time % (60 * 60) / 60);
    const qtdHours = Math.floor(time % (60 * 60 * 24) / (60 * 60));
    const qtdDays = Math.floor(time / (60 * 60 * 24));


    seconds.textContent = formatDigit(qtdSeconds);
    minutes.textContent = formatDigit(qtdMinutes);
    hours.textContent = formatDigit(qtdHours);
    days.textContent = formatDigit(qtdDays);
}

const countDown = (time) => {
    const stopCount = () => clearInterval(interval);
    const count = () => {
        if (time === 0) {
            stopCount();
        }
        updateDisplay(time);
        time--;
    }
    const interval = setInterval(count, 1000);
}

const timeLeft = () => {
    // 1 de janeiro de 1970 - javascript reference
    const eventDate = new Date('2023-08-10 20:00:00');
    const today = Date.now();
    return Math.floor((eventDate - today) / 1000)
}


countDown(timeLeft());