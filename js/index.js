const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let min = dateToday.getMinutes();
    let second = dateToday.getSeconds();

    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = second;
})

