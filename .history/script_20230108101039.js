"use strict"
const addBtn = document.querySelector(".add");
addBtn.addEventListener('click', () => addNewNote());
function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="noteChild">
        <button class="editBtn"><i class="fas fa-edit"></i></button>
        <button class="deleteBtn"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="noteText"></div>
    <textarea></textarea>
    `;
    const deleteBtn = note.querySelector('.deleteBtn');
    const editBtn = note.querySelector('.editBtn')

    deleteBtn.addEventListener('click', () => {
        note.remove();
    });
    editBtn.addEventListener('click', ()=>{
        note.querySelector(te)
    })
    document.body.appendChild(note);
}