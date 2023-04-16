import { allTasks, today, thisWeek, important, tabs } from './index';

const mainContent = document.querySelector('.main-content');
const contentHeader = document.querySelector('.content-heading');
const taskForm = document.querySelector('.task-form');
const cancelBtn = document.querySelector('.cancel-btn');

function highlightSelected(selectedTab) {
    tabs.forEach((tab) => {
        tab.classList.remove('selected');
    });

    selectedTab.classList.toggle('selected');
}

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

function removeTaskBtn() {
    if (mainContent.lastChild.className === 'task-btn') {
        mainContent.removeChild(mainContent.lastChild);
    }
}

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

function openTaskForm() {
    taskForm.style.display = 'block';
}

function closeTaskForm() {
    taskForm.style.display = 'none';
}

cancelBtn.onclick = closeTaskForm;

export { displayAllTasks, displayToday, displayThisWeek, displayImportant }