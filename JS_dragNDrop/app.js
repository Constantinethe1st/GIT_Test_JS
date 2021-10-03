const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart) // когда начали перетаскивание
item.addEventListener('dragend', dragend) // когда закончили

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) // элемент над placeholder
    placeholder.addEventListener('dragenter', dragenter) // заходим на территрию placeholder
    placeholder.addEventListener('dragleave', dragleave) // перетащили и вышли
    placeholder.addEventListener('drop', dragdrop) // отпустили
}

function dragstart(event) {
    event.target.classList.add('hold') // добавление класса
    setTimeout(() => event.target.classList.add('hide'), 0) // добавление класса
}

function dragend(event) {
    // event.target.classList.remove('hold') // удаление класса
    // event.target.classList.remove('hide') // удаление класса
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
    // console.log('dragover')
}

function dragenter(event) {
    event.target.classList.add('hovered')
    // console.log('dragenter')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    // console.log('dragleave')
}

function dragdrop(event) {
    // console.log('dragdrop')
    event.target.classList.remove('hovered')
    event.target.append(item)
}