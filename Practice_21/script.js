const active = document.querySelector('.active');
const units = document.querySelectorAll('.unit');



active.addEventListener('dragstart', (e) => {
    active.classList.add('hold');

})

active.addEventListener('drag', (e) => {

    active.style.opacity = `0`;


})

active.addEventListener('dragend', (e) => {
    active.style.opacity = `1`;
    active.classList.remove('hold');
    active.className = 'active';
})

units.forEach(unit => {
    unit.addEventListener('dragenter', (e) => {

        unit.classList.add('hovered')
    })

    unit.addEventListener('dragover', (e) => {
        e.preventDefault();
        unit.classList.add('hovered');
    })

    unit.addEventListener('dragleave', (e) => {

        unit.classList.remove('hovered');
    })

    unit.addEventListener('drop', (e) => {
        e.preventDefault();
        unit.classList.remove('hovered');
        unit.appendChild(active);
    })
})