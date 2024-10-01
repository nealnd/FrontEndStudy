const img = document.querySelector('.img');
const number = document.querySelector('.number');
let times = 0;

img.addEventListener('dblclick', (e) => {
    times++;
    number.textContent = `${times}`;
    const heart = document.createElement('i');
    heart.className += `fa-solid fa-heart`;

    heart.style.left = `${e.offsetX}px`;
    heart.style.top = `${e.offsetY}px`;
    img.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 1000);
})


// a way to achieve a doubleclick

// loveMe.addEventListener('click', (e) => {
//     if (clickTime === 0) {
//         clickTime = new Date().getTime()
//     } else {
//         if ((new Date().getTime() - clickTime) < 800) {
//             createHeart(e)
//             clickTime = 0
//         } else {
//             clickTime = new Date().getTime()
//         }
//     }
// })