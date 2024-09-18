const result = document.querySelector('.password');
const copied = document.querySelector('.copied');

const lengths = document.getElementById('length');


const upletter = document.getElementById('upletter');
const loletter = document.getElementById('loletter');
const number = document.getElementById('number');
const symbols = document.getElementById('symbols');

const generate = document.getElementById('generate');

function generateUp(up) {

    return up ? String.fromCharCode(Math.floor(Math.random() * 26) + 65) : "";
}

function generateLo(lo) {
    return lo ? String.fromCharCode(Math.floor(Math.random() * 26) + 97) : "";
}

function generateNum(num) {
    return num ? String.fromCharCode(Math.floor(Math.random() * 10) + 48) : "";
}

function generateSym(sym) {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return sym ? symbols[Math.floor(Math.random() * symbols.length)] : "";
}




generate.addEventListener('click', () => {
    let index = 0;
    const loops = [generateLo, generateUp, generateNum, generateSym];
    const parameter = [loletter.checked, upletter.checked, number.checked, symbols.checked];
    result.textContent = ``;
    while (index < lengths.value) {
        for (let i = 0; i < loops.length; i++) {
            result.textContent += loops[i](parameter[i]);
            index = result.textContent.length;
            if (index >= lengths.value) break;
        }
        if (index == 0) break;
    }
    if (result.textContent.length == 0) { copied.disabled = true; copied.style.backgroundColor = `grey` }
    else {
        copied.disabled = false;
        copied.style.backgroundColor = `rgb(59, 59, 152)`;
    }
})

copied.addEventListener('click', () => {
    if (result.textContent.length == 0) copied.disabled;
    navigator.clipboard.writeText(result.textContent);
    window.alert('Password copied to clipboard!')
})





