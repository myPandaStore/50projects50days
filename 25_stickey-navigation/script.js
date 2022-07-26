const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    // @ts-ignore
    if (window.scrollY > nav.offsetHeight + 150) {
        // @ts-ignore
        nav.classList.add('active')
        // @ts-ignore
        console.log('nav.offsetHeight',nav.offsetHeight)
        console.log('window.scrollY',window.scrollY)
    } else {
        // @ts-ignore
        nav.classList.remove('active')
    }
}