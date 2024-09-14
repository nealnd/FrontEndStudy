const button = document.querySelector('button');

let i = 1;
button.addEventListener('mouseup', (event) => {
    const temporary = document.querySelectorAll('.circle');
    temporary.forEach(temp => {
        temp.remove();
    })

    const circle = document.createElement('i');
    circle.classList.add('circle');

    button.appendChild(circle);

    circle.style.top = `${event.offsetY}px`;

    circle.style.left = `${event.offsetX}px`;

    setTimeout(() => {
        circle.remove();
    }, 1000)

})