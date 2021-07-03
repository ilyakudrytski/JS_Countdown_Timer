const vacation = "1 Aug 2021";
console.log(vacation);
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const countdown = () => {
    const vacationDate = new Date(vacation);
    const currentDate = new Date();
    const totalSecs = (vacationDate - currentDate) / 1000;

    const days = Math.floor(totalSecs / 3600 / 24);
    const hours = Math.floor(totalSecs / 3600) % 24;
    const mins = Math.floor(totalSecs / 60) % 60;
    const secs = Math.floor(totalSecs) % 60;


    daysEl.innerText = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = mins;
    secondsEl.innerHTML = secs;
}
countdown()

setInterval(countdown, 1000)