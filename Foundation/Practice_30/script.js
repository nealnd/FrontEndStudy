const head = document.querySelector('h1');
const input = document.getElementById('speed');


let texts = "We Love Programming";

let speed = input.value;
let index = 0;
let interval;

// startInterval();
// input.addEventListener('change', () => {
//     speed = input.value;

//     //in the function setInterval will not renew speed
//     clearInterval(interval);
//     startInterval();
// })

// function startInterval() {
//     interval = setInterval(() => {
//         if (index == texts.length) {
//             index = 0;
//             head.textContent = '';
//         }
//         head.textContent += texts.charAt(index);
//         index++;


//     }, 1000 / speed)
// }


//another method
function writetext() {
    index++;
    head.textContent = texts.slice(0, index);
    if (index > texts.length) index = 0;
    setTimeout(writetext, 300 / speed);

}

writetext();
input.addEventListener('change', () => {

    speed = input.value;
})