"use strict"
const addBtn = document.querySelector(".add")
function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="noteChild">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="noteText"></div>
    <textarea></textarea>
    `
    const deleteBtn = document.querySelector('.delete')
    deleteBtn.addEventListener('click' () => {
        note.remove
    })
    document.body.appendChild(note)
}