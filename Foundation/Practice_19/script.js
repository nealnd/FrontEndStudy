
const time = document.querySelector('.time');
const dates = document.querySelector('.date');
const hour_bar = document.querySelector('.hour_bar');
const minute_bar = document.querySelector('.minute_bar');
const second_bar = document.querySelector('.second_bar');
const mode = document.querySelector('button');
const html = document.querySelector('html');


mode.addEventListener('click', () => {
    mode.classList.toggle('dark');
    if (mode.classList.contains('dark')) mode.innerHTML = `Light Mode`;
    else mode.innerHTML = `Dark Mode`;
    html.classList.toggle('dark');

})

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

setInterval(() => {
    const Localtime = new Date();
    const month = Localtime.getMonth();
    const day = Localtime.getDay();
    const date = Localtime.getDate();
    const hours = Localtime.getHours();
    const minutes = Localtime.getMinutes();
    const seconds = Localtime.getSeconds();
    const apm = hours > 12 ? "PM" : "AM";
    const hours_show = hours % 12;
    time.innerText = `${hours_show}:${minutes < 10 ? "0" + minutes.toString() : minutes} ${apm}`;
    dates.innerHTML = `
    ${week[day].toUpperCase()},
    ${months[month]}
    <span class='days'>${date}</span>
    
    `;

    hour_bar.style.transform = `translate(-50%, -100%) rotate(${hours_show / 12 * 360 + minutes / 60 * 30
        }deg)`;
    minute_bar.style.transform = `translate(-50%, -100%) rotate(${minutes / 60 * 360}deg)`

    second_bar.style.transform = `translate(-50%, -100%) rotate(${seconds / 60 * 360}deg)`;



}, 1000)