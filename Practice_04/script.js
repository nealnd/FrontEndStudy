const container = document.querySelector('.container')
const search = document.getElementById('search')
const input = document.getElementById('input')

search.addEventListener('click', () => {
    container.classList.toggle('active')
    input.focus()

})
