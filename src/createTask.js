import { closeTaskForm, displayAllTasks } from "./display";

const titleInput = document.getElementById('title');
const detailsInput = document.getElementById('details');
const dueDateInput = document.getElementById('due-date');
const isImportantInput = document.getElementById('is-important');
const addTaskForm = document.querySelector('.task-form');
const addTaskBtn = document.querySelector('.submit-btn');
const myTaskList = [];

const task = (title, description, dueDate, isImportant) => ({ title, description, dueDate, isImportant });

const testTask = task('This task is due this week', 'Details of the task', '2023-04-20', false);
const testTask2 = task('This task is due today', '', '2023-04-18', false);
const testTask3 = task('This task is important', '', '2023-04-19', true);
const testTask4 = task('This task is due next week', '', '2023-04-28', false);
const testTask5 = task('This task is due next week but within 7 days', '', '2023-04-24', false);
myTaskList.push(testTask, testTask2, testTask3, testTask4, testTask5);

function addTask() {
    const title = titleInput.value;
    const description = detailsInput.value;
    const dueDate = dueDateInput.value;
    const isImportant = isImportantInput.checked;

    const newTask = task(title, description, dueDate, isImportant);
    myTaskList.push(newTask);
/*     console.log(newTask);
    console.log(myTaskList); */
    displayAllTasks();
    return newTask;
}

function clearTaskForm() {
    titleInput.value = '';
    detailsInput.value = '';
    dueDateInput.value = '';
    isImportantInput.checked = false;
}

addTaskBtn.addEventListener('click', (e) => {
    if (!addTaskForm.checkValidity()) {
        addTaskForm.reportValidity();
    } else {
        addTask();
        closeTaskForm();
        clearTaskForm();
        e.preventDefault();
    }
});

export { myTaskList, clearTaskForm }