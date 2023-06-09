const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2024';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate)/1000;
    
    const days = Math.floor(seconds / 3600/ 24);
    const hours = Math.floor(seconds / 3600)%24;
    const minutes = Math.floor(seconds / 60) %60;
    const leftsecond = Math.floor(seconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(leftsecond);
    console.log(days)
}

function formatTime(time){
    return time < 10 ? `0${time}` :time
}
//initial
countdown();

setInterval(countdown, 1000);