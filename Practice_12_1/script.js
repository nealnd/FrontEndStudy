const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        //parentnode, childnode
        toggle.parentNode.classList.toggle('active')

    })
})