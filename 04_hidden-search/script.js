const search = document.getElementsByClassName('search')[0]
const btn = document.getElementsByClassName('btn')[0]
const input = document.getElementsByClassName('input')[0]

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    // input.focus()
})