const decrease = document.getElementById('decrease');
const size = document.getElementById(`size`);
const increase = document.getElementById('increase');
const color = document.getElementById('color');
const clear = document.getElementById('clear');


const canvas = document.querySelector('canvas');

const ctx = canvas.getContext("2d");



let drawing = false;
let oldX, oldY;
let linesize = size.textContent;
let linecolor = color.value;

canvas.addEventListener('mousedown', (e) => {

    drawing = true;
    oldX = e.offsetX;
    oldY = e.offsetY;


    ctx.beginPath();
    ctx.arc(oldX, oldY, linesize, 0, Math.PI * 2)
    ctx.fillStyle = linecolor
    ctx.fill()
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        const newX = e.offsetX;
        const newY = e.offsetY;
        drawcycle(newX, newY);

        drawline(oldX, oldY, newX, newY);
        oldX = newX
        oldY = newY;
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    oldX = undefined;
    oldY = undefined;

});


function drawcycle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, linesize, 0, Math.PI * 2);
    ctx.fillStyle = linecolor;
    ctx.fill();
}

function drawline(oldX, oldY, newX, newY) {
    ctx.beginPath();
    ctx.lineWidth = linesize * 2;
    ctx.strokeStyle = linecolor;
    ctx.moveTo(oldX, oldY);
    ctx.lineTo(newX, newY);
    ctx.stroke();

}



decrease.addEventListener('click', (e) => {
    linesize = +size.textContent;
    if (linesize > 5) linesize -= 5;
    size.textContent = linesize;

})

increase.addEventListener('click', (e) => {
    linesize = +size.textContent;
    if (linesize < 50) linesize += 5;
    size.textContent = linesize;

})

color.addEventListener('change', (e) => {
    linecolor = color.value;
})

clear.addEventListener('click', (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

