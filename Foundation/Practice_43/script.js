const btns = document.querySelectorAll('.buttons button')
const sendReview = document.querySelector('.btn');
const container = document.querySelector('.container');
let rate = "Satisfied";

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        removeactive();
        btn.classList.add('active');
        rate = btn.textContent;
    })
})

function removeactive() {
    btns.forEach(btn => {
        btn.classList.remove('active');
    })
}

sendReview.addEventListener('click', () => {
    container.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${rate}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})