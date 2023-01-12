"use strict"
const addBtn = document.querySelector(".add");
const notes = JSON.parse(localStorage.getItem('notes'))

if(notes){
    notes.forEach(note => addNewNote(note))
}

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
        <textarea></textarea>
    </div>
    `;
    const deleteBtn = note.querySelector('.deleteBtn');
    const editBtn = note.querySelector('.editBtn');
    const textarea = note.querySelector('textarea');

    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    });
    editBtn.addEventListener('click', ()=>{
        textarea.focus();
        // updateLS();
    })
    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => notes.push(note.value));
    localStorage.setItem('notes', JSON.stringify(notes));
};