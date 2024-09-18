const img = document.querySelector('.img');
const head = document.querySelector('h1');
const paragraph = document.querySelector('p');
const profile_img = document.querySelector('.profile-img');
const names = document.querySelector('.name');
const date = document.querySelector('.date');

setTimeout(showcontent, 2500);

function showcontent() {
    img.classList.remove('anim-bg');
    img.innerHTML = `
    <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80" alt="">
    `

    head.classList.remove('anim-text');
    head.textContent = `Lorem ipsum dolor sit amet`;

    paragraph.classList.remove('anim-text');
    paragraph.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis`;


    profile_img.classList.remove('anim-bg');
    profile_img.innerHTML = `
    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">
    `;


    names.classList.remove('anim-text');
    names.textContent = `John Doe`;


    date.classList.remove('anim-text');
    date.textContent = `Oct 08, 2020`;

}