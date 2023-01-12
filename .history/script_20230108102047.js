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
    <div class="noteText">
    <textarea></textarea></div>

    `;
    const deleteBtn = note.querySelector('.deleteBtn');
    const editBtn = note.querySelector('.editBtn');
    const textarea = note.querySelector('textarea');

    deleteBtn.addEventListener('click', () => {
        note.remove();
    });
    editBtn.addEventListener('click', ()=>{
        textarea.focus();
    })
    document.body.appendChild(note);
}