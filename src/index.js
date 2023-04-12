// DISPLAY CONTROLLER (PUT IN OWN MODULE)
function initialDisplay() {
    const contentHeader = document.querySelector('.content-heading');
    contentHeader.textContent = 'All Tasks';
}

initialDisplay();

// CREATE TASKS (PUT IN OWN MODULE)
const myList = [];

const toDoItem = (title, description, dueDate, isImportant) => ({ title, description, dueDate, isImportant });

function addToDoItem() {
    const title = prompt('title?', '');
    const description = prompt('description?', '');
    const dueDate = prompt('duedate?', '');
    const isImportant = prompt('is important?', '');

    const newItem = toDoItem(title, description, dueDate, isImportant);
    myList.push(newItem);
    console.log(newItem);
    console.log(myList);
    return newItem;
}

addToDoItem();