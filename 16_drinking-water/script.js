const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
    // @ts-ignore
    else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        // @ts-ignore
        percentage.style.visibility = 'hidden'
        // @ts-ignore
        percentage.style.height = 0
    } else {
        // @ts-ignore
        percentage.style.visibility = 'visible'
        // @ts-ignore
        percentage.style.height = `${fullCups / totalCups * 330}px`
        // @ts-ignore
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        // @ts-ignore
        remained.style.visibility = 'hidden'
        // @ts-ignore
        remained.style.height = 0
    } else {
        // @ts-ignore
        remained.style.visibility = 'visible'
        // @ts-ignore
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}