window.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
});

const startBtn = document.getElementById('start');
const insects = document.querySelectorAll('.insect');
const bodys = document.querySelector('body');
const gameend = document.querySelector('.gameend');
const Time = document.querySelector('.time');
const Score = document.querySelector('.score');
const message = document.querySelector('.message');

let imgsrc;
let seconds = 0;
let score = 0;



startBtn.addEventListener('click', () => {
    window.scrollTo(0, window.innerHeight)
})

insects.forEach(insect => {
    insect.addEventListener('click', () => {
        window.scrollTo(0, 2 * window.innerHeight)
        imgsrc = insect.querySelector('img').src;
        setTimeout(() => { addimg(imgsrc) }, 1000);
        setInterval(() => {
            timeincrease();
        }, 1000)

    })
})

function addimg(imgsrc) {
    const temp = document.createElement('img');
    temp.src = imgsrc;
    temp.style.position = `absolute`;
    temp.style.left = `${Math.random() * (window.innerWidth - 200) + 100}px`;
    temp.style.top = `${Math.random() * (window.innerHeight - 200) + 100}px`;
    temp.style.transform = `rotate(${Math.random() * 360}deg)`;
    temp.style.cursor = `pointer`;
    gameend.appendChild(temp);

    temp.addEventListener('click', () => {
        temp.remove();
        increaseScore();
        setTimeout(() => { addimg(imgsrc) }, 1000);
        setTimeout(() => { addimg(imgsrc) }, 2000);
    })
}

function timeincrease() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    Time.textContent = `Time: ${m}:${s}`;
    seconds++;
}

function increaseScore() {
    score++;
    if (score > 19) {
        message.classList.add('visible')
    }
    Score.textContent = `Score: ${score}`;
}