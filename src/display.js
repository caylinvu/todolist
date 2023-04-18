import { allTasks, today, thisWeek, important, tabs } from './index';
import { myTaskList } from './createTask';

const mainContent = document.querySelector('.main-content');
const contentHeader = document.querySelector('.content-heading');
const toDoContainer = document.querySelector('.todo-container');
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

// function to display a singular task
function displayTask(task, index) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    toDoContainer.appendChild(taskDiv);

    const taskStatus = document.createElement('div');
    taskDiv.appendChild(taskStatus);

    const taskIncomplete = document.createElement('img');
    taskIncomplete.src = './images/circle-unfilled.svg';
    taskStatus.appendChild(taskIncomplete);

    const titleDisplay = document.createElement('div');
    titleDisplay.textContent = task.title;
    taskDiv.appendChild(titleDisplay);

    const dueDateDisplay = document.createElement('div');
    dueDateDisplay.textContent = task.dueDate;
    taskDiv.appendChild(dueDateDisplay);

    const priorityStatus = document.createElement('div');
    taskDiv.appendChild(priorityStatus);

    const noPriority = document.createElement('img');
    noPriority.src = './images/star-unfilled.svg';
    priorityStatus.appendChild(noPriority);

    const editBtn = document.createElement('img');
    editBtn.src = './images/edit.svg';
    taskDiv.appendChild(editBtn);

    const deleteBtn = document.createElement('img');
    deleteBtn.src = './images/trash.svg';
    taskDiv.appendChild(deleteBtn);
}

// function to update the task list display
function updateTaskDisplay() {
    while (toDoContainer.firstChild) {
        toDoContainer.removeChild(toDoContainer.firstChild);
    }

    if (contentHeader.textContent === 'All Tasks') {
        myTaskList.forEach((task, index) => {
            displayTask(task, index);
        });
    }
}

// functions to display appropriate tasks for chosen tab
function displayAllTasks() {
    removeTaskBtn();
    displayTaskBtn();
    highlightSelected(allTasks);
    contentHeader.textContent = 'All Tasks';
    updateTaskDisplay();
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