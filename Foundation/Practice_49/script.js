const todoText = document.getElementById('input');

const lists = JSON.parse(localStorage.getItem('lists'))

if (lists) {
    lists.forEach(list => addTodoList(list.text, list.complete))
}


function addTodoList(list, complete) {
    if (list !== '') {
        const temp = document.createElement('div');
        if (temp.className === ``)
            temp.classList.add('todoList');
        if (complete)
            temp.classList.add('complete');
        temp.textContent = list;
        todoText.parentElement.appendChild(temp);
    }

}


todoText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodoList(todoText.value);
        todoText.value = ``;
        updataLS();
    }

})

todoText.parentElement.addEventListener('click', (e) => {

    completetodo(e.target);
    updataLS();
})

todoText.parentElement.addEventListener('contextmenu', (e) => {
    deletetodo(e.target);
    updataLS();
})

function updataLS() {
    const todoLists = document.querySelectorAll('.todoList')

    const lists = []

    todoLists.forEach(todoList => lists.push({
        text: todoList.textContent,
        complete: todoList.classList.contains('complete')
    }));

    localStorage.setItem('lists', JSON.stringify(lists))
}

function completetodo(element) {
    if (element.classList.contains('todoList')) {
        element.classList.toggle('complete');
    }

}

function deletetodo(element) {
    if (element.classList.contains('todoList')) {
        element.remove();
    }
}