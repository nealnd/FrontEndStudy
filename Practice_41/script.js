const codes = document.querySelectorAll('.code');
codes[0].focus();
codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {

            // After the keydown event finishes,
            //  the browser automatically inserts the
            //   character that corresponds to the key
            //   you pressed into the input field.This
            //   is part of the browser's default behavior,
            //   which happens after the keydown event.

            // e.preventDefault() stops the browser from automatically inserting the key into the input field
            e.preventDefault();

            setTimeout(() => {
                codes[index].value = e.key;
                if (index + 1 < codes.length) {
                    codes[index + 1].focus();
                }
            }, 10);
        }
        else if (e.key === 'Backspace') {
            setTimeout(() => { codes[index - 1].focus() }, 10)
        }
    });
});

// const codes = document.querySelectorAll('.code')

// codes[0].focus()

// codes.forEach((code, idx) => {
//     code.addEventListener('keydown', (e) => {
//         if (e.key >= 0 && e.key <= 9) {
//             codes[idx].value = ''
//             setTimeout(() => codes[idx + 1].focus(), 10)
//         } else if (e.key === 'Backspace') {
//             setTimeout(() => codes[idx - 1].focus(), 10)
//         }
//     })
// })
