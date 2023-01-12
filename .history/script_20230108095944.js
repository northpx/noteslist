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
    // const editBtn = note.querySelector('.edit')
    // const deleteBtn = note.querySelector('.delete')
    // const main = note.querySelector('.noteText')
    // const textArea = note.querySelector('textarea')


    document.body.appendChild(note)
}