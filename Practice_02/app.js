const button_next = document.getElementById('next')
const button_prev = document.getElementById('prev')
let i = 0;
const bars = document.querySelectorAll('.container .bar');
const numbers = document.querySelectorAll('.container p')


button_next.addEventListener('click', () => {

    i++;
    if (i >= bars.length) i = bars.length;
    changebottoncolor();
    bars[i - 1].classList.add('active');

    numbers[i].classList.add('active');
})


button_prev.addEventListener('click', () => {
    i--;
    if (i <= 0) i = 0;
    changebottoncolor();
    bars[i].classList.remove('active');
    numbers[i + 1].classList.remove('active');
})





function changebottoncolor() {
    if (i == 0) button_prev.classList.remove('active');
    else if (i == 3) button_next.classList.remove('active');
    else {
        button_prev.classList.add('active');
        button_next.classList.add('active');
    }
}