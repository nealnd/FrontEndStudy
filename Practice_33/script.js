
const container = document.querySelector('.container');
const addnote = document.querySelector('.add');


const notes = JSON.parse(localStorage.getItem('notes'))

if (lists) {
    lists.forEach(note => addNewNote(note))
}

function addNewNote(text = '') {
    const noteE = document.createElement('div');
    noteE.className += `note`;
    noteE.innerHTML = `

    <div class="head">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <textarea name="content" class="content">${text}</textarea>


`;

    container.appendChild(noteE);

    const editBtn = noteE.querySelector('.edit');
    const deleteBtn = noteE.querySelector('.delete');
    const contentArea = noteE.querySelector('.content');

    contentArea.addEventListener('input', () => {
        updateLS();
    })

    editBtn.addEventListener('click', () => {
        updateLS();
        contentArea.classList.toggle('readonly');
    })

    deleteBtn.addEventListener('click', () => {
        noteE.remove();
        updateLS();
    })
}

addnote.addEventListener('click', () => {
    addNewNote();


})

function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}


// <div class="note">
//     <div class="head">
//         <button class="edit"><i class="fas fa-edit"></i></button>
//         <button class="delete"><i class="fas fa-trash-alt"></i></button>
//     </div>
//     <textarea name="content" id="content"></textarea>
// </div>