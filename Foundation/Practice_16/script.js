const units = document.querySelectorAll('.unit');
const remained = document.querySelector('.remained');
const drinked = document.querySelector('.drinked');
units.forEach((unit, index) => {
    unit.addEventListener('click', () => {
        for (let i = 0; i < units.length; i++) {
            if (i <= index) units[i].classList.add('active');
            else units[i].classList.remove('active');
        }
        drinked.setAttribute('style', `flex-basis:${(index + 1) * 12.5}%`);
        remained.style.flexBasis = `${100 - (index + 1) * 12.5}%`;
        drinked.innerHTML = `<h3>${(index + 1) * 12.5}%</h3>`;
        if (index < units.length - 1) {
            remained.innerHTML = `
        <h3>${2 - (index + 1) * 0.25}L</h3>
        <p>remained</p>
        `
        }
        else remained.innerHTML = '';


    })
})