const sec1 = document.getElementById('sec');
const min1 = document.getElementById('min');
const hours1 = document.getElementById('hours');
const days1 = document.getElementById('days');


const countfrom = "1 Jan 2024";
function countdown() {
    const newdate = new Date(countfrom);
    const currentDate = new Date();
    const totalsec = (newdate - currentDate) / 1000;
    const days = Math.floor(totalsec / 3600 / 24);
    const hours = Math.floor(totalsec / 3600) % 24;
    const mins = Math.floor(totalsec / 60) % 60;
    const sec = Math.floor(totalsec) % 60;


    days1.innerHTML = days;
    sec1.innerHTML = formatTime(sec);
    hours1.innerHTML = formatTime(hours);
    min1.innerHTML = formatTime(mins);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);

