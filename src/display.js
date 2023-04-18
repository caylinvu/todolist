import { allTasks, today, thisWeek, important, tabs } from './index';
import { myTaskList, clearTaskForm } from './createTask';

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
    clearTaskForm();
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

    const taskLeft = document.createElement('div');
    taskLeft.classList.add('task-left');
    taskDiv.appendChild(taskLeft);

    const taskStatus = document.createElement('div');
    taskStatus.classList.add('task-status');
    taskLeft.appendChild(taskStatus);

    const taskIncomplete = document.createElement('img');
    taskIncomplete.src = './images/circle-unfilled.svg';
    taskStatus.appendChild(taskIncomplete);

    const titleDisplay = document.createElement('div');
    titleDisplay.textContent = task.title;
    taskLeft.appendChild(titleDisplay);

    const taskRight = document.createElement('div');
    taskRight.classList.add('task-right');
    taskDiv.appendChild(taskRight);

    const dueDateDisplay = document.createElement('div');
    if (!task.dueDate) {
        dueDateDisplay.textContent = 'No Due Date';
    } else {
        dueDateDisplay.textContent = task.dueDate;
    }
    taskRight.appendChild(dueDateDisplay);

    const priorityStatus = document.createElement('button');
    priorityStatus.classList.add('priority-status');
    taskRight.appendChild(priorityStatus);

    const noPriority = document.createElement('img');
    noPriority.src = './images/star-unfilled.svg';

    const priority = document.createElement('img');
    priority.src = '/images/star-filled.svg';

    if (task.isImportant) {
        priorityStatus.appendChild(priority);
    } else {
        priorityStatus.appendChild(noPriority);
    }

    const taskEditBtn = document.createElement('button')
    taskEditBtn.classList.add('task-edit-btn');
    taskRight.appendChild(taskEditBtn);

    const editBtnImg = document.createElement('img');
    editBtnImg.src = './images/edit.svg';
    taskEditBtn.appendChild(editBtnImg);

    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.classList.add('task-delete-btn');
    taskRight.appendChild(taskDeleteBtn);

    const deleteBtnImg = document.createElement('img');
    deleteBtnImg.src = './images/trash.svg';
    taskDeleteBtn.appendChild(deleteBtnImg);
}

// function to update the task list display
function updateTaskDisplay() {
    while (toDoContainer.firstChild) {
        toDoContainer.removeChild(toDoContainer.firstChild);
    }

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let currentDate;
    if (month < 10) {
        currentDate = `${year}-0${month}-${day}`;
    } else {
        currentDate = `${year}-${month}-${day}`;
    }

    if (contentHeader.textContent === 'All Tasks') {
        myTaskList.forEach((task, index) => {
            // console.log(task);
            displayTask(task, index);
        });
    } else if (contentHeader.textContent === 'Today') {
        const tasksToday = myTaskList.filter(task => task.dueDate === currentDate);
        tasksToday.forEach((task, index) => {
            displayTask(task, index);
        });
    } else if (contentHeader.textContent === 'This Week') {

    } else if (contentHeader.textContent === 'Important') {
        const tasksImportant = myTaskList.filter(task => task.isImportant);
        tasksImportant.forEach((task, index) => {
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
    closeTaskForm();
}

function displayToday() {
    removeTaskBtn();
    highlightSelected(today);
    contentHeader.textContent = 'Today';
    updateTaskDisplay();
    closeTaskForm();
}

function displayThisWeek() {
    removeTaskBtn();
    highlightSelected(thisWeek);
    contentHeader.textContent = 'This Week';
    updateTaskDisplay();
    closeTaskForm();
}

function displayImportant() {
    removeTaskBtn();
    highlightSelected(important);
    contentHeader.textContent = 'Important';
    updateTaskDisplay();
    closeTaskForm();
}

export { displayAllTasks, displayToday, displayThisWeek, displayImportant, closeTaskForm }