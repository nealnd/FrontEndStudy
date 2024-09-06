const items = document.querySelectorAll('.container .item');
let active = document.querySelector('.container .active');


items.forEach(item => {
    item.addEventListener('click', () => {
        if (item != active) {
            active.classList.remove('active');
            item.classList.add('active');
            active = item;
        }
    })
})


