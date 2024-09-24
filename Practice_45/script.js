const menu = document.querySelector('.menu');
const navE = document.querySelector('nav');
const rednav = document.querySelector('.rednav');
const whitenav = document.querySelector('.whitenav');
const closeBtn = whitenav.querySelector('button');

menu.addEventListener('click', () => {
    navE.classList.add('active');
    rednav.classList.add('active');
    whitenav.classList.add('active');
    navE.style.transitionDelay = `0.2s`;
    rednav.style.transitionDelay = `0.4s`;
    whitenav.style.transitionDelay = `0.6s`;
})
closeBtn.addEventListener('click', () => {
    navE.classList.remove('active');
    rednav.classList.toggle('active');
    whitenav.classList.toggle('active');
    navE.style.transitionDelay = `0.6s`;
    rednav.style.transitionDelay = `0.4s`;
    whitenav.style.transitionDelay = `0.2s`;
})