const units = document.querySelectorAll('.unit');

checkUnite();
window.addEventListener('scroll', checkUnite);



function checkUnite() {
    const triggerBottom = window.innerHeight / 5 * 4;
    units.forEach(unit => {
        //  The Element.getBoundingClientRect() method 
        // returns a DOMRect object providing information 
        // about the size of an element and its position 
        // relative to the viewport.
        const uniteTop = unit.getBoundingClientRect().top

        if (uniteTop < triggerBottom) {
            unit.classList.add('active')
        } else {
            unit.classList.remove('active')
        }
    })

}
