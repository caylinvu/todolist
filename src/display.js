import { allTasks, today, thisWeek, important, tabs } from './index';
import { myTaskList } from './createTask';

const mainContent = document.querySelector('.main-content');
const contentHeader = document.querySelector('.content-heading');
const taskForm = document.querySelector('.task-form');
const cancelBtn = document.querySelector('.cancel-btn');

// highlight the selected navigation tab
function highlightSelected(selectedTab) {
    tabs.forEach((tab) => {
        tab.classList.remove('selected');
    });

    selectedTab.classList.toggle('selected');
}

// open/close the form to add new tasks
function openTaskForm() {
    taskForm.style.display = 'block';
}

function closeTaskForm() {
    taskForm.style.display = 'none';
}

cancelBtn.onclick = closeTaskForm;

// create and display the button to add new tasks
function displayTaskBtn() {
    const taskBtn = document.createElement('button');
    taskBtn.classList.add('task-btn');

    const btnImage = document.createElement('img');
    btnImage.src = './images/plus.svg';

    const btnText = document.createElement('div');
    btnText.textContent = 'Add Task';

    taskBtn.onclick = openTaskForm;

    taskBtn.appendChild(btnImage);
    taskBtn.appendChild(btnText);
    mainContent.appendChild(taskBtn);
}

// remove the button to add new task (for pages where you cannot add new task)
function removeTaskBtn() {
    if (mainContent.lastChild.className === 'task-btn') {
        mainContent.removeChild(mainContent.lastChild);
    }
}

// functions to display appropriate tasks for chosen tab
function displayAllTasks() {
    removeTaskBtn();
    displayTaskBtn();
    highlightSelected(allTasks);
    contentHeader.textContent = 'All Tasks';
}

function displayToday() {
    removeTaskBtn();
    highlightSelected(today);
    contentHeader.textContent = 'Today';
}

function displayThisWeek() {
    removeTaskBtn();
    highlightSelected(thisWeek);
    contentHeader.textContent = 'This Week';
}

function displayImportant() {
    removeTaskBtn();
    highlightSelected(important);
    contentHeader.textContent = 'Important';
}

export { displayAllTasks, displayToday, displayThisWeek, displayImportant, closeTaskForm }