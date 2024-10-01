const left = document.querySelector('.ps');
const right = document.querySelector('.xbox');

left.addEventListener('mouseenter', () => {
    left.style.width = '75%';
    right.style.width = '25%';
})

left.addEventListener('mouseleave', () => {
    left.style.width = '50%';
    right.style.width = '50%';
})

right.addEventListener('mouseenter', () => {
    right.style.width = '75%';
    left.style.width = '25%';
})

right.addEventListener('mouseleave', () => {
    right.style.width = '50%';
    left.style.width = '50%';
})