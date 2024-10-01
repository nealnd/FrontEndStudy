// const numbers = document.querySelectorAll('.number');
// const time = 6;



// numbers.forEach(number => {
//     let target = number.getAttribute('data');
//     let data = 0;
//     const handle = setInterval(() => {
//         data += target / time / 1000 * 5;
//         if (data < target) {
//             number.innerHTML = `${Math.ceil(data)}`;
//         }
//         else number.innerHTML = `${target}`;
//     },5)

//     setTimeout(() => {
//         clearInterval(handle);
//     },time*1000)
// })


//another method-----------------------------------------------------

// const numbers = document.querySelectorAll('.number');

// numbers.forEach(number => {
//     number.innerText = `0`;
//     const updataNumber = () => {
//         const target = +number.getAttribute('data');
//         const c = +number.innerText;
//         const increment = target / 200;
//         if (c < target) {
//             number.innerText = `${Math.ceil(c + increment)}`;
//             setTimeout(updataNumber, 1);

//         }
//         else {
//             number.innerText = target;
//         }
//     }

//     updataNumber();
// })


//another style--------------------------------------------------------------

// function updataNumber(number) {
//     const target = +number.getAttribute('data');
//     const increment = target / 200;


//     function update() {
//         const current = +number.innerText;
//         if (current < target) {
//             number.innerText = `${Math.ceil(current + increment)}`;
//             setTimeout(update, 1);
//         } else {
//             number.innerText = target;
//         }
//     }

//     update();
// }

// const numbers = document.querySelectorAll('.number');

// numbers.forEach(number => {
//     number.innerText = '0';
//     updataNumber(number);
// });



const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.innerText = '0';
    const target = +number.getAttribute('data');
    const increment = target / 200; // Define the increment based on target

    const interval = setInterval(() => {
        const current = +number.innerText;
        if (current < target) {
            number.innerText = `${Math.ceil(current + increment)}`;
        } else {
            number.innerText = target;
            clearInterval(interval); // Stop the interval when the target is reached
        }
    }, 10); // Interval time in milliseconds
});