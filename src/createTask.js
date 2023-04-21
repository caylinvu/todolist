import { closeTaskForm, updateTaskDisplay } from "./display";
import { myProjectList } from "./createProject";

const contentHeader = document.querySelector('.content-heading');
const titleInput = document.getElementById('title');
const detailsInput = document.getElementById('details');
const dueDateInput = document.getElementById('due-date');
const isImportantInput = document.getElementById('is-important');
const addTaskForm = document.querySelector('.task-form');
const addTaskBtn = document.querySelector('.submit-btn');
const myTaskList = [];

const task = (title, details, dueDate, isImportant, isComplete, taskProject) => ({ title, details, dueDate, isImportant, isComplete, taskProject });

const testTask = task('This task is due this week', 'Details of the task', '2023-04-22', false, false);
const testTask2 = task('This task is due today', 'This task has details', '2023-04-20', false, false);
const testTask3 = task('This task is important', 'This task also has details', '2023-04-22', true, false);
const testTask4 = task('This task is due next week', '', '2023-04-29', false, false);
const testTask5 = task('This task is due next week but within 7 days', '', '2023-04-25', false, false);
const testTask6 = task('This task is due exactly 7 days from now', '', '2023-04-27', true, false);
const testTask7 = task('This task is due a day after 7 days', '', '2023-04-28', false, false);
const testTask8 = task('This task has no due date', '', '', false, false);
myTaskList.push(testTask, testTask2, testTask3, testTask4, testTask5, testTask6, testTask7, testTask8);

function addTask() {
    const title = titleInput.value;
    const details = detailsInput.value;
    const dueDate = dueDateInput.value;
    const isImportant = isImportantInput.checked;
    const isComplete = false;
    let taskProject = '';

    myProjectList.forEach((project) => {
        if (contentHeader.textContent === project.name) {
            taskProject = project.name;
        }
    });

    const newTask = task(title, details, dueDate, isImportant, isComplete, taskProject);
    myTaskList.push(newTask);
    updateTaskDisplay();
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
        e.preventDefault();
    }
});

export { myTaskList, clearTaskForm }