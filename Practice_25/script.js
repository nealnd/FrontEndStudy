const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    // offsetHeight property returns the viewable height of an element (in pixels), including padding, border and scrollbar, but not the margin.
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}