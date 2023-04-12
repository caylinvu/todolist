const myList = [];

const toDoItem = (title, description, dueDate, isImportant) => ({ title, description, dueDate, isImportant });

function addToDoItem() {
    const title = prompt('title?', '');
    const description = prompt('description?', '');
    const dueDate = prompt('duedate?', '');
    const isImportant = prompt('is important?', '');

    const newItem = toDoItem(title, description, dueDate, isImportant);
    myList.push(newItem);
    return newItem;
}

export { myList, addToDoItem }