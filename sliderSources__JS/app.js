const upBtn = document.querySelector('.up-button') // получаем кнопки
const downBtn = document.querySelector('.down-button')

const sideBar = document.querySelector('.sidebar')

const container = document.querySelector('.container')

const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length // количество слайдов (div)

let activeSlideIndex = 0; // активный слайд

sideBar.style.top = `-${(slidesCount - 1)*100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
}) // кнопка

downBtn.addEventListener('click', () => {
    changeSlide('down')
}) // кнопка

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}