const countdown = document.querySelector('.nums span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.getElementById('replay');

let up = 3;

startAnim();

// Define it outside so the function reference stays the same
function handleAnimationEnd() {
    if (countdown.classList.contains('in')) {
        countdown.classList.remove('in');
        countdown.classList.add('out');
    } else if (countdown.classList.contains('out')) {
        countdown.classList.remove('out');
        up--;
        if (up >= 0) {
            countdown.textContent = up;
            countdown.classList.add('in');
        } else {
            counter.classList.add('hide');
            final.classList.add('show');
        }
    }
}

function startAnim() {
    countdown.textContent = up;
    countdown.classList.add('in');

    countdown.removeEventListener('animationend', handleAnimationEnd);
    countdown.addEventListener('animationend', handleAnimationEnd);

}

replay.addEventListener('click', () => {
    counter.classList.remove('hide');
    final.classList.remove('show');
    up = 3;
    startAnim();
});
