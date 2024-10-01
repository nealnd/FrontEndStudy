

const choices = document.querySelectorAll('.choice');
class Position {
    constructor(left, size) {
        this.left = left;
        this.size = size;
    }
}
const map = new Map();

let animationFrameId;
let currentchoice = null;

function slidemove(circle, isactive, choice, left, size) {
    if (isactive) {
        left += 50 / 300 * 10;
        size = size < 1.1 ? (size + 0.1 / 150 * 10) : (size - 0.1 / 150 * 10);

        circle.style.transform = `translateX(${left}px) scale(${size})`;


        map.set(choice, new Position(left, size));

        if (left < 50) {
            animationFrameId = requestAnimationFrame(() => slidemove(circle, isactive, choice, left, size));
        } else {
            circle.style.transform = `translateX(50px) scale(1)`;
        }
    } else {
        left -= 50 / 300 * 10;
        size = size < 1.1 ? (size + 0.1 / 150 * 10) : (size - 0.1 / 150 * 10);

        circle.style.transform = `translateX(${left}px) scale(${size})`;


        map.set(choice, new Position(left, size));

        if (left > 0) {
            animationFrameId = requestAnimationFrame(() => slidemove(circle, isactive, choice, left, size));
        } else {
            circle.style.transform = `translateX(0px) scale(1)`;
        }
    }
}

choices.forEach(choice => {
    if (!map.has(choice))
        map.set(choice, new Position(0, 1));

    choice.addEventListener('click', () => {
        const circle = choice.querySelector('i');
        if (currentchoice === circle)
            cancelAnimationFrame(animationFrameId);

        currentchoice = circle;


        slidemove(circle, choice.classList.toggle('active'), choice, map.get(choice).left, map.get(choice).size);
    });
});