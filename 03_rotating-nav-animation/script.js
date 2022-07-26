const myOpen = document.getElementById('open')
const myClose = document.getElementById('close')
const container = document.querySelector('.container')

myOpen.addEventListener('click', ()=> container.classList.add('show-nav'))

myClose.addEventListener('click', () => container.classList.remove('show-nav'))