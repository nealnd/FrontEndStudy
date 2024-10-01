const number = document.querySelector('.number');
let bg = document.querySelector('.bg');
let percentage = 0;

// The setInterval() method repeats a given function at every given time-interval
let int = setInterval(changenumber, 30);

function changenumber() {

    percentage++;

    //The clearInterval() method stops the executions of the function specified in the setInterval() method.
    if (percentage > 99)
        clearInterval(int);

    // use template string
    number.innerText = `${percentage}%`;
    number.style.opacity = 1 - percentage / 100;

    // use template string
    bg.style.filter = `blur(${30 - percentage / 100 * 30}px)`

}