const board = document.querySelector('#board') // div c id="board"
const colors = ['#51ff00', '#00ff37', '#03fc66', '#03fc84', '#03fc94', '#35fc03', '#45fc03', '#7ffc03']
const squaresNumber = 500; // количество квадратов

for (let i=0; i < squaresNumber; i++) {
    const square = document.createElement('div') // создаю элемент div динамически
    square.classList.add('square') // создаю класс square для элемента

    square.addEventListener('mouseover', () => setColor(square)) // добавляем слушателя. setColor(square) - добавляю цвет.

    square.addEventListener('mouseleave', () => removeColor(square)) // добавляем слушателя. setColor(square) - убираем цвет.

    board.append(square) // добавляю элемент в html, в board
}

function setColor(element) { // функция для цвета
    const color = getRandomColor() // получаю цвет из функции getRandomColor
    element.style.backgroundColor = color // передаю значение
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` // передаю динамическое значение box-shadow
}

function removeColor(element) { // функция для цвета
    element.style.backgroundColor = '#1D1D1D'
    element.style.boxShadow = '0 0 2px #000000'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
} // функция случайного выбора цвета из массива colors