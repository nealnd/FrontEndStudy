const resetBtn = document.getElementById('reset');
const playBtn = document.getElementById('play');
const circle = document.querySelector('.circle');
const progressBar = document.querySelector('.progress-bar');
const Time = document.getElementById('time');

let isplaying = false;
let totalSecond = 60;
let currentSecond = totalSecond;
let interval;

formatTime(totalSecond);
caldegree(totalSecond);

playBtn.addEventListener('click', () => {
    isplaying = !isplaying;
    const playIcon = playBtn.querySelector('i');
    playBtn.classList.toggle('pause');
    playIcon.classList.toggle('fa-play');
    playIcon.classList.toggle('fa-pause');
    if (isplaying) {
        interval = setInterval(() => {
            timerun();
        }, 1000)
    }
    else {
        clearInterval(interval);
    }
})

resetBtn.addEventListener('click', () => {
    resettime();
})

function timerun() {
    if (isplaying) {
        currentSecond -= 1;
        if (currentSecond <= 0) {
            clearInterval(interval);
            resettime();
        }
        formatTime(currentSecond);
        caldegree(currentSecond);

    }
}


function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let newSeconds = seconds % 60;
    minutes = (minutes >= 10 ? `${minutes}` : `0${minutes}`);
    newSeconds = (newSeconds >= 10 ? `${newSeconds}` : `0${newSeconds}`);
    Time.textContent = `${minutes}:${newSeconds}`;
}

function caldegree(seconds) {
    let newSeconds = 60 - seconds % 60;
    progressBar.style.background = `conic-gradient(rgb(55 65 81) ${(newSeconds === 60 ? 0 : newSeconds) / 60 * 360}deg, rgb(255 255 255) ${(newSeconds === 60 ? 0 : newSeconds) / 60 * 360}deg 360deg)`;
    circle.style.left = `${progressBar.clientWidth / 2 * (1 + Math.sin(newSeconds / 60 * 2 * Math.PI))}px`;
    circle.style.top = `${progressBar.clientHeight / 2 * (1 - Math.cos(newSeconds / 60 * 2 * Math.PI))}px`;
}

function resettime() {
    currentSecond = totalSecond;
    const playIcon = playBtn.querySelector('i');
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    playBtn.classList.remove('pause');
    clearInterval(interval);
    caldegree(currentSecond);
    formatTime(currentSecond);
    isplaying = false;
}