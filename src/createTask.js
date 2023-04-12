const myTaskList = [];

const task = (title, description, dueDate, isImportant) => ({ title, description, dueDate, isImportant });

function addTask() {
    const title = prompt('title?', '');
    const description = prompt('description?', '');
    const dueDate = prompt('duedate?', '');
    const isImportant = prompt('is important?', '');

    const newTask = task(title, description, dueDate, isImportant);
    myTaskList.push(newTask);
    return newTask;
}

export { myTaskList, addTask }