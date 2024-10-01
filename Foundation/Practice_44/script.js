const slide = document.getElementById('slide');
const number = document.querySelector('.number');

number.textContent = slide.value;

slide.addEventListener('mousemove', () => {
    number.textContent = slide.value;
    number.style.left = `calc(${slide.value}% - 20px)`
})

slide.addEventListener('click', () => {
    number.textContent = slide.value;
    number.style.left = `calc(${slide.value}% - 20px)`
})