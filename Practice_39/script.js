const password = document.getElementById('password');
const backimg = document.querySelector('.backimg');

password.addEventListener('input', () => {
    let length = password.value.length;
    if (length <= 20)
        backimg.style.filter = `blur(${10 - length * 0.5}px)`;
})