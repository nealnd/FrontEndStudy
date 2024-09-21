const lists = document.querySelectorAll('li');
const imgs = document.querySelectorAll('.image');

lists.forEach((list, index) => {
    list.addEventListener('click', () => {
        deactive(index);
        showimg(index);
        list.classList.add('active');

    })
})

function showimg(index) {
    imgs.forEach(img => {
        img.classList.remove('show');
    })
    imgs[index].classList.add('show');
}

function deactive(index) {
    lists.forEach(list => {
        list.classList.remove('active');
    })
}