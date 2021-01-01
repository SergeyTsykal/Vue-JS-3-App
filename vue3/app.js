const input = document.querySelector('#input')
const addBtn = document.querySelector('#add')
const list = document.querySelector('#list')
const listBlock = document.querySelector('#list-block')
const noNotes = document.querySelector('#no-notes')
const count = document.querySelector('#count')

const notes = []

render()

addBtn.addEventListener('click', onAdd)
list.addEventListener('click', onRemove)

function onAdd() {
    if (input.value.length > 3) {
        notes.push(input.value)
        input.value = ''
        render()
    }
}

function onRemove(event) {
    const idx = event.target.dataset.idx
    if(event.target.dataset.idx) {
        notes.splice(+idx, 1)
        render()
    }
}

function render() {
    if (notes.length > 0) {
        noNotes.style.display = 'none'
        listBlock.style.display = 'block'
        list.innerHTML = ''
        notes.forEach((note, idx) => {
            const li = document.createElement('li')
            const btn = document.createElement('button')
            btn.classList.add('btn', 'danger')
            btn.textContent = 'удалить'
            btn.setAttribute('data-idx', idx)
            li.classList.add('list-item')
            li.textContent = note
            li.append(btn)
            list.append(li)
        })
        count.textContent = notes.length
    } else {
        noNotes.style.display = 'block'
        listBlock.style.display = 'none'
    }
}