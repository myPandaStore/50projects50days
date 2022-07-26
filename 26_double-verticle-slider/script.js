const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
// @ts-ignore
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

// @ts-ignore
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

// @ts-ignore
upButton.addEventListener('click', () => changeSlide('up'))
// @ts-ignore
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    // @ts-ignore
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    // @ts-ignore
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    // @ts-ignore
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

