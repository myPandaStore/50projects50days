const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const author_name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    // @ts-ignore
    header.innerHTML = 
    `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />`
    // @ts-ignore
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    // @ts-ignore
    excerpt.innerHTML = 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    // @ts-ignore
    profile_img.innerHTML = 
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    // @ts-ignore
    author_name.innerHTML = 'John Doe'
    // @ts-ignore
    date.innerHTML = 'oct 09, 2020'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}