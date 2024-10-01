const message = document.querySelector('.message');
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

const colors = [` rebeccapurple`,
    `green`,
    `red`
]

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const unit = document.createElement('div');
    unit.className = `unit`;
    unit.style.height = `50px`;
    unit.style.color = colors[Math.floor(Math.random() * colors.length)]
    unit.textContent = messages[Math.floor(Math.random() * messages.length)]
    message.appendChild(unit);
    setTimeout(() => {
        unit.remove();
    }, 3000)
})


