const container = document.querySelector('.container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
let num = 500;


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

for (let i = 0; i < num; i++) {
    const temp = document.createElement('div');
    temp.className = `square`;
    container.appendChild(temp);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor();
    })
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = ` rgb(29, 29, 29)`;
    })

})