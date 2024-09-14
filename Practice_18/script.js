const units = [
    `url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')`,
    `url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80')`,
    `url('https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')`,
    `url('https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80')`,
    `url('https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')`
];

const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');
const unit = document.querySelector('.unit');
const body = document.querySelector('body');
let index = 0;

left.addEventListener('click', () => {
    index--;
    if (index < 0) index = units.length - 1;
    unit.style.backgroundImage = units[index];

    body.style.backgroundImage = units[index];

})

right.addEventListener('click', () => {
    index++;
    if (index > units.length - 1) index = 0;
    unit.style.backgroundImage = units[index];
    body.style.backgroundImage = units[index];
})