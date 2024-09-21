const imgs = document.querySelector('.img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const imgNum = document.querySelectorAll('.img img');

let index = 0;


function move() {
    imgs.style.transform = `translateX(-${index * 500}px)`;
}



let interval;
start();
function start() {
    interval = setInterval(() => {
        switchImg(1);
    }, 2000);
}



prevBtn.addEventListener('click', () => {
    clearInterval(interval);
    switchImg(-1);
    start();
})

nextBtn.addEventListener('click', () => {
    clearInterval(interval);
    switchImg(1);
    start();
})

function switchImg(direction) {
    if (direction === 1) {

        index++;
        if (index === imgNum.length) index = 0;
        move();
    }
    else {
        index--;
        if (index === -1) index = imgNum.length - 1;
        move();
    }

}