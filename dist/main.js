/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearProjectForm": () => (/* binding */ clearProjectForm),
/* harmony export */   "myProjectList": () => (/* binding */ myProjectList)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");


const projectForm = document.querySelector('.project-form');
const projectNameInput = document.getElementById('project-name');
const projectSubmitBtn = document.querySelector('.project-submit-btn');
const myProjectList = [];

const project = (name) => ({ name });

const testProject = project('Programming');
const testProject2 = project('Home');
const testProject3 = project('Reading');
myProjectList.push(testProject, testProject2, testProject3);

function addProject() {
    const name = projectNameInput.value;

    const newProject = project(name);
    myProjectList.push(newProject);
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayProject)(newProject);
    return newProject;
}

function clearProjectForm() {
    projectNameInput.value = '';
}

projectSubmitBtn.addEventListener('click', (e) => {
    if (!projectForm.checkValidity()) {
        projectForm.reportValidity();
    } else {
        addProject();
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.closeProjectForm)();
        e.preventDefault();
    }
});



/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTaskForm": () => (/* binding */ clearTaskForm),
/* harmony export */   "myTaskList": () => (/* binding */ myTaskList)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");



const contentHeader = document.querySelector('.content-heading');
const titleInput = document.getElementById('title');
const detailsInput = document.getElementById('details');
const dueDateInput = document.getElementById('due-date');
const isImportantInput = document.getElementById('is-important');
const addTaskForm = document.querySelector('.task-form');
const addTaskBtn = document.querySelector('.submit-btn');
const myTaskList = [];

const task = (title, details, dueDate, isImportant, isComplete, taskProject) => ({ title, details, dueDate, isImportant, isComplete, taskProject });

const testTask = task('This task is due this week', 'Details of the task', '2023-04-27', false, false);
const testTask2 = task('This task is due today', 'This task has details', '2023-04-25', false, false);
const testTask3 = task('This task is important', 'This task also has details', '2023-04-29', true, false);
const testTask4 = task('This task is due next week', '', '2023-05-05', false, false);
const testTask5 = task('This task is due next week but within 7 days', '', '2023-05-01', false, false);
const testTask6 = task('This task is due exactly 7 days from now', '', '2023-05-02', true, false);
const testTask7 = task('This task is due a day after 7 days', '', '2023-05-03', false, false);
const testTask8 = task('This task has no due date', '', '', false, false);
const testTask9 = task('PROGRAMMING TASK', '', '', false, false, 'Programming');
const testTask10 = task('PROGRAMMING TASK 2', '', '', false, false, 'Programming');
const testTask11 = task('HOME TASK', '', '', false, false, 'Home');
const testTask12 = task('HOME TASK 2', '', '', false, false, 'Home');
const testTask13 = task('READING TASK', '', '', false, false, 'Reading');
const testTask14 = task('READING TASK 2', '', '', false, false, 'Reading');

myTaskList.push(testTask, testTask2, testTask3, testTask4, testTask5, testTask6, testTask7, testTask8, testTask9, testTask10, testTask11, testTask12, testTask13, testTask14);

function addTask() {
    const title = titleInput.value;
    const details = detailsInput.value;
    const dueDate = dueDateInput.value;
    const isImportant = isImportantInput.checked;
    const isComplete = false;
    let taskProject = '';

    _createProject__WEBPACK_IMPORTED_MODULE_1__.myProjectList.forEach((project) => {
        if (contentHeader.textContent === project.name) {
            taskProject = project.name;
        }
    });

    const newTask = task(title, details, dueDate, isImportant, isComplete, taskProject);
    myTaskList.push(newTask);
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.updateTaskDisplay)();
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
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.closeTaskForm)();
        e.preventDefault();
    }
});



/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeProjectForm": () => (/* binding */ closeProjectForm),
/* harmony export */   "closeTaskForm": () => (/* binding */ closeTaskForm),
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks),
/* harmony export */   "displayImportant": () => (/* binding */ displayImportant),
/* harmony export */   "displayProject": () => (/* binding */ displayProject),
/* harmony export */   "displayThisWeek": () => (/* binding */ displayThisWeek),
/* harmony export */   "displayToday": () => (/* binding */ displayToday),
/* harmony export */   "initialProjectDisplay": () => (/* binding */ initialProjectDisplay),
/* harmony export */   "updateTaskDisplay": () => (/* binding */ updateTaskDisplay)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTask */ "./src/editTask.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _editProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editProject */ "./src/editProject.js");






const mainContent = document.querySelector('.main-content');
const contentHeader = document.querySelector('.content-heading');
const toDoContainer = document.querySelector('.todo-container');
const taskForm = document.querySelector('.task-form');
const editTaskForm = document.querySelector('.edit-task-form');
const cancelBtn = document.querySelector('.cancel-btn');
const projectForm = document.querySelector('.project-form');
const addProjectBtn = document.querySelector('.project-btn');
const projectCancelBtn = document.querySelector('.project-cancel-btn');
const projectLinkContainer = document.querySelector('.project-links');
const editProjectForm = document.querySelector('.edit-project-form');
const titleInput = document.getElementById('title');
const projectNameInput = document.getElementById('project-name');

// highlight the selected navigation tab
function highlightSelected(selectedTab) {
    _index__WEBPACK_IMPORTED_MODULE_0__.tabs.forEach((tab) => {
        tab.classList.remove('selected');
    });

    selectedTab.classList.toggle('selected');
}

// open/close the form to add new tasks
function openTaskForm() {
    taskForm.style.display = 'block';
    titleInput.focus();
}

function closeTaskForm() {
    taskForm.style.display = 'none';
    (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.clearTaskForm)();
}

cancelBtn.onclick = closeTaskForm;

// open/close the form to add new projects

function openProjectForm() {
    projectForm.style.display = 'block';
    projectNameInput.focus();
}

function closeProjectForm() {
    projectForm.style.display = 'none';
    (0,_createProject__WEBPACK_IMPORTED_MODULE_3__.clearProjectForm)();
}

addProjectBtn.onclick = openProjectForm;
projectCancelBtn.onclick = closeProjectForm;


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

// function to display task details
function displayDetails(task, taskDiv) {
    if (taskDiv.lastChild.className != 'details-display' && task.details) {
        const detailsDisplay = document.createElement('div');
        detailsDisplay.classList.add('details-display');
        detailsDisplay.textContent = task.details;
        taskDiv.appendChild(detailsDisplay);
    } else if (taskDiv.lastChild.className === 'details-display' && task.details) {
        taskDiv.removeChild(taskDiv.lastChild);
    }
}

// function to display a singular task
function displayTask(task) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    toDoContainer.appendChild(taskDiv);

    const taskMain = document.createElement('div');
    taskMain.classList.add('task-main');
    taskDiv.appendChild(taskMain);

    const taskLeft = document.createElement('div');
    taskLeft.classList.add('task-left');
    taskMain.appendChild(taskLeft);

    const taskStatus = document.createElement('div');
    taskStatus.classList.add('task-status');
    taskLeft.appendChild(taskStatus);

    const taskIncomplete = document.createElement('img');
    taskIncomplete.classList.add('task-incomplete');
    taskIncomplete.src = './images/circle-unfilled.svg';

    const taskComplete = document.createElement('img');
    taskComplete.src = './images/circle-filled.svg';

    const titleDisplay = document.createElement('div');
    titleDisplay.classList.add('title-display');
    titleDisplay.textContent = task.title;
    taskLeft.appendChild(titleDisplay);

    if (task.isComplete) {
    taskStatus.appendChild(taskComplete);
    titleDisplay.style.setProperty('text-decoration', 'line-through');
    } else {
        taskStatus.appendChild(taskIncomplete);
    }

    taskStatus.onclick = _editTask__WEBPACK_IMPORTED_MODULE_2__.toggleComplete.bind(this, taskIncomplete, taskStatus, titleDisplay, task);

    if (task.details) {
        const expandTask = document.createElement('img');
        expandTask.src = './images/expand-task.svg';
        taskLeft.appendChild(expandTask);
        expandTask.title = 'Click task to show details';
        expandTask.classList.add('expand-task');
    }
    
    const taskRight = document.createElement('div');
    taskRight.classList.add('task-right');
    taskMain.appendChild(taskRight);

    const dueDateDisplay = document.createElement('div');
    taskRight.appendChild(dueDateDisplay);

    if (!task.dueDate) {
        dueDateDisplay.textContent = 'No Due Date';
    } else {
        dueDateDisplay.textContent = task.dueDate;
    }

    const priorityStatus = document.createElement('button');
    priorityStatus.classList.add('priority-status');
    taskRight.appendChild(priorityStatus);

    const noPriority = document.createElement('img');
    noPriority.src = './images/star-unfilled.svg';

    const priority = document.createElement('img');
    priority.src = './images/star-filled.svg';

    if (task.isImportant) {
        priorityStatus.appendChild(priority);
        priorityStatus.classList.add('priority');
    } else {
        priorityStatus.appendChild(noPriority);
        priorityStatus.classList.add('no-priority');
    }

    priorityStatus.onclick = _editTask__WEBPACK_IMPORTED_MODULE_2__.togglePriority.bind(this, priorityStatus, task);

    const taskEditBtn = document.createElement('button')
    taskEditBtn.classList.add('task-edit-btn');
    taskRight.appendChild(taskEditBtn);

    const editBtnImg = document.createElement('img');
    editBtnImg.src = './images/edit.svg';
    taskEditBtn.appendChild(editBtnImg);

    taskEditBtn.onclick = _editTask__WEBPACK_IMPORTED_MODULE_2__.editTask.bind(this, task, taskDiv, toDoContainer);

    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.classList.add('task-delete-btn');
    taskRight.appendChild(taskDeleteBtn);

    const deleteBtnImg = document.createElement('img');
    deleteBtnImg.src = './images/trash.svg';
    taskDeleteBtn.appendChild(deleteBtnImg);

    const currentIndex = _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.indexOf(task);

    taskDeleteBtn.onclick = _editTask__WEBPACK_IMPORTED_MODULE_2__.deleteTask.bind(this, currentIndex);

    taskDiv.onclick = displayDetails.bind(this, task, taskDiv);
}

// function to clear display 
function clearDisplay() {
    while (toDoContainer.firstChild && toDoContainer.firstChild.className != 'edit-task-form') {
        toDoContainer.removeChild(toDoContainer.firstChild);
    }

    while(toDoContainer.lastChild && toDoContainer.lastChild.className != 'edit-task-form') {
        toDoContainer.removeChild(toDoContainer.lastChild);
    }

    editTaskForm.style.display = 'none';
}

// function to update the task list display
function updateTaskDisplay() {
    clearDisplay();

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
        _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.forEach((task) => {
            // console.log(task);
            displayTask(task);
        });
    } else if (contentHeader.textContent === 'Today') {
        const tasksToday = _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.filter(task => task.dueDate === currentDate);
        tasksToday.forEach((task) => {
            displayTask(task);
        });
    } else if (contentHeader.textContent === 'This Week') {
        const currentWeekEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);

        const tasksThisWeek = _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.filter(task => {
            const taskDateArray = task.dueDate.split('-');
            const taskYear = taskDateArray[0];
            const taskMonth = parseInt(taskDateArray[1], 10) - 1;
            const taskDay = taskDateArray[2];
            const taskDate = new Date(taskYear, taskMonth, taskDay);
            return (taskDate >= date && taskDate <= currentWeekEnd) || (task.dueDate === currentDate);
        });

        tasksThisWeek.forEach((task) => {
            displayTask(task);
        });
    } else if (contentHeader.textContent === 'Important') {
        const tasksImportant = _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.filter(task => task.isImportant);
        tasksImportant.forEach((task) => {
            displayTask(task);
        });
    } else {
        const tasksByProject = _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.filter(task => task.taskProject === contentHeader.textContent);
        tasksByProject.forEach((task) => {
            displayTask(task);
        })
    }
}

function displayProject(project) {
    const projectLink = document.createElement('div');
    projectLink.classList.add('project-link');
    projectLinkContainer.appendChild(projectLink);

    const projectNameDisplay = document.createElement('div');
    projectNameDisplay.classList.add('project-name-display');
    projectNameDisplay.textContent = project.name;
    projectLink.appendChild(projectNameDisplay);

    const projectLinkBtns = document.createElement('div');
    projectLinkBtns.classList.add('project-link-btns');
    projectLink.appendChild(projectLinkBtns);

    const projectEditBtn = document.createElement('button');
    projectEditBtn.classList.add('project-edit-btn');
    projectLinkBtns.appendChild(projectEditBtn);

    const projectEditImg = document.createElement('img');
    projectEditImg.src = './images/edit.svg';
    projectEditBtn.appendChild(projectEditImg);

    const projectDeleteBtn = document.createElement('button');
    projectDeleteBtn.classList.add('project-delete-btn');
    projectLinkBtns.appendChild(projectDeleteBtn);

    const projectDeleteImg = document.createElement('img');
    projectDeleteImg.src = './images/trash.svg';
    projectDeleteBtn.appendChild(projectDeleteImg);

    _index__WEBPACK_IMPORTED_MODULE_0__.tabs.push(projectLink);

    projectLink.onclick = function() {
        removeTaskBtn();
        displayTaskBtn();
        highlightSelected(projectLink);
        contentHeader.textContent = projectLink.firstChild.textContent;
        updateTaskDisplay();
        closeTaskForm();
    }

    projectEditBtn.onclick = _editProject__WEBPACK_IMPORTED_MODULE_4__.editProject.bind(this, project, projectLink, projectLinkContainer, projectNameDisplay, contentHeader);

    projectDeleteBtn.onclick = _editProject__WEBPACK_IMPORTED_MODULE_4__.deleteProject.bind(this, project, projectLink, projectLinkContainer, contentHeader);
}

// CAN REMOVE THIS ONCE FINISHED AND DELETE TEST PROJECTS
function initialProjectDisplay() {
    _createProject__WEBPACK_IMPORTED_MODULE_3__.myProjectList.forEach((project) => {
        displayProject(project);
    });
}

// functions to display appropriate tasks for chosen tab
function displayAllTasks() {
    removeTaskBtn();
    displayTaskBtn();
    highlightSelected(_index__WEBPACK_IMPORTED_MODULE_0__.allTasks);
    contentHeader.textContent = 'All Tasks';
    updateTaskDisplay();
    closeTaskForm();
}

function displayToday() {
    removeTaskBtn();
    highlightSelected(_index__WEBPACK_IMPORTED_MODULE_0__.today);
    contentHeader.textContent = 'Today';
    updateTaskDisplay();
    closeTaskForm();
}

function displayThisWeek() {
    removeTaskBtn();
    highlightSelected(_index__WEBPACK_IMPORTED_MODULE_0__.thisWeek);
    contentHeader.textContent = 'This Week';
    updateTaskDisplay();
    closeTaskForm();
}

function displayImportant() {
    removeTaskBtn();
    highlightSelected(_index__WEBPACK_IMPORTED_MODULE_0__.important);
    contentHeader.textContent = 'Important';
    updateTaskDisplay();
    closeTaskForm();
}



/***/ }),

/***/ "./src/editProject.js":
/*!****************************!*\
  !*** ./src/editProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "editProject": () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTask */ "./src/editTask.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");





const editProjectForm = document.querySelector('.edit-project-form');
const editProjectNameInput = document.querySelector('.edit-project-name-input');
const editProjectSubmitBtn = document.querySelector('.edit-project-submit-btn');
const editProjectCancelBtn = document.querySelector('.edit-project-cancel-btn');

function openEditProjectForm() {
    editProjectForm.style.display = 'block';
}

function clearEditProjectForm() {
    editProjectNameInput.value = '';
}

function showHiddenProject() {
    const openProject = document.querySelector('.editing-project');
    openProject.classList.toggle('editing-project');
}

function closeEditProjectForm() {
    editProjectForm.style.display = 'none';
    clearEditProjectForm();
    showHiddenProject();
}

function autofillProjectInfo(project) {
    editProjectNameInput.value = project.name;
}

function editProject(project, projectLink, projectLinkContainer, projectNameDisplay, contentHeader) {
    (0,_editTask__WEBPACK_IMPORTED_MODULE_0__.ignoreEvent)();

    if (editProjectForm.style.display === '' || editProjectForm.style.display === 'none') {
        projectLink.classList.toggle('editing-project');
        openEditProjectForm();
        projectLinkContainer.insertBefore(editProjectForm, projectLink);
        autofillProjectInfo(project);
        editProjectNameInput.focus();
    } else {
        showHiddenProject();
        projectLink.classList.toggle('editing-project');
        projectLinkContainer.insertBefore(editProjectForm, projectLink);
        autofillProjectInfo(project);
        editProjectNameInput.focus();
    }

    editProjectSubmitBtn.onclick = function(e) {
        if (!editProjectForm.checkValidity()) {
            editProjectForm.reportValidity();
        } else {
            if (project.name === contentHeader.textContent) {
                contentHeader.textContent = editProjectNameInput.value;
            }
            project.name = editProjectNameInput.value;
            projectNameDisplay.textContent = project.name;

            
            closeEditProjectForm();
            e.preventDefault();
        }
    }

    editProjectCancelBtn.onclick = closeEditProjectForm;
}

function deleteProject(project, projectLink, projectLinkContainer, contentHeader) {
    (0,_editTask__WEBPACK_IMPORTED_MODULE_0__.ignoreEvent)();

    for (let i = _createTask__WEBPACK_IMPORTED_MODULE_3__.myTaskList.length - 1; i >= 0; i--) {
        const task = _createTask__WEBPACK_IMPORTED_MODULE_3__.myTaskList[i];
        if (task.taskProject === project.name) {
            _createTask__WEBPACK_IMPORTED_MODULE_3__.myTaskList.splice(_createTask__WEBPACK_IMPORTED_MODULE_3__.myTaskList.indexOf(task), 1);
            (0,_display__WEBPACK_IMPORTED_MODULE_2__.updateTaskDisplay)();
        }
    }

    if (project.name === contentHeader.textContent) {
        (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();
    }

    _createProject__WEBPACK_IMPORTED_MODULE_1__.myProjectList.splice(_createProject__WEBPACK_IMPORTED_MODULE_1__.myProjectList.indexOf(project), 1);
    projectLinkContainer.removeChild(projectLink);
}



/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "ignoreEvent": () => (/* binding */ ignoreEvent),
/* harmony export */   "toggleComplete": () => (/* binding */ toggleComplete),
/* harmony export */   "togglePriority": () => (/* binding */ togglePriority)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");



const editTaskForm = document.querySelector('.edit-task-form');
const editTitleInput = document.getElementById('edit-title');
const editDetailsInput = document.getElementById('edit-details');
const editDueDateInput = document.getElementById('edit-due-date');
const editIsImportantInput = document.getElementById('edit-is-important');
const editSubmitBtn = document.querySelector('.edit-submit-btn');
const editCancelBtn = document.querySelector('.edit-cancel-btn');

// function to ignore taskDiv onclick event when buttons within the taskDiv are clicked
function ignoreEvent(e) {
    if (!e) {
        e = window.event;
    }
    e.stopPropagation();
}

function toggleComplete(status, statusContainer, title, task) {
    ignoreEvent();

    if (status.classList.value === 'task-incomplete') {
        status.classList.toggle('task-incomplete');
        statusContainer.removeChild(statusContainer.lastChild);

        const taskComplete = document.createElement('img');
        taskComplete.src = './images/circle-filled.svg';
        statusContainer.appendChild(taskComplete);

        title.style.setProperty('text-decoration', 'line-through');

        task.isComplete = true;
    } else {
        status.classList.toggle('task-incomplete');
        statusContainer.removeChild(statusContainer.lastChild);

        const taskIncomplete = document.createElement('img');
        taskIncomplete.src = './images/circle-unfilled.svg';
        statusContainer.appendChild(taskIncomplete);

        title.style.setProperty('text-decoration', 'none');

        task.isComplete = false;
    }
}

function togglePriority(statusContainer, task) {
    ignoreEvent();

    if (statusContainer.classList.value === 'priority-status priority') {
        statusContainer.classList.toggle('priority');
        statusContainer.classList.toggle('no-priority');
        statusContainer.removeChild(statusContainer.lastChild);

        const noPriority = document.createElement('img');
        noPriority.src = './images/star-unfilled.svg';
        statusContainer.appendChild(noPriority);

        task.isImportant = false;
    } else if (statusContainer.classList.value === 'priority-status no-priority') {
        statusContainer.classList.toggle('no-priority');
        statusContainer.classList.toggle('priority');
        statusContainer.removeChild(statusContainer.lastChild);

        const priority = document.createElement('img');
        priority.src = './images/star-filled.svg';
        statusContainer.appendChild(priority);

        task.isImportant = true;
    }
}

function openEditTaskForm() {
    editTaskForm.style.display = 'block';
    editTitleInput.focus();
}

function clearEditTaskForm() {
    editTitleInput.value = '';
    editDetailsInput.value = '';
    editDueDateInput.value = '';
    editIsImportantInput.checked = false;
}

function showHiddenTask() {
    const openTask = document.querySelector('.editing-task');
    openTask.classList.toggle('editing-task');
}

function closeEditTaskForm() {
    editTaskForm.style.display = 'none';
    clearEditTaskForm();
    showHiddenTask();
}

function autofillTaskInfo(task) {
    editTitleInput.value = task.title;
    editDueDateInput.value = task.dueDate;
    editIsImportantInput.checked = task.isImportant;
    if (task.details) {
        editDetailsInput.value = task.details;
    } else {
        editDetailsInput.value = '';
    }
}

function editTask(task, taskDiv, toDoContainer) {
    ignoreEvent();

    if (editTaskForm.style.display === 'none') {
        taskDiv.classList.toggle('editing-task');
        openEditTaskForm();
        toDoContainer.insertBefore(editTaskForm, taskDiv);
        autofillTaskInfo(task);
        editTitleInput.focus();
    } else {
        showHiddenTask();
        taskDiv.classList.toggle('editing-task');
        toDoContainer.insertBefore(editTaskForm, taskDiv);
        autofillTaskInfo(task);
        editTitleInput.focus();
    }

    editSubmitBtn.onclick = function(e) {
        if (!editTaskForm.checkValidity()) {
            editTaskForm.reportValidity();
        } else {
            task.title = editTitleInput.value;
            task.details = editDetailsInput.value;
            task.dueDate = editDueDateInput.value;
            task.isImportant = editIsImportantInput.checked;

            closeEditTaskForm();
            (0,_display__WEBPACK_IMPORTED_MODULE_1__.updateTaskDisplay)();
            e.preventDefault();
        }
    };
    
    editCancelBtn.onclick = closeEditTaskForm;
}

function deleteTask(index) {
    ignoreEvent();
    _createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList.splice(index, 1);
    (0,_display__WEBPACK_IMPORTED_MODULE_1__.updateTaskDisplay)();
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTasks": () => (/* binding */ allTasks),
/* harmony export */   "important": () => (/* binding */ important),
/* harmony export */   "tabs": () => (/* binding */ tabs),
/* harmony export */   "thisWeek": () => (/* binding */ thisWeek),
/* harmony export */   "today": () => (/* binding */ today)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");


const allTasks = document.getElementById('all-tasks');
const today = document.getElementById('today');
const thisWeek = document.getElementById('this-week');
const important = document.getElementById('important');
const tabs = [allTasks, today, thisWeek, important];

(0,_display__WEBPACK_IMPORTED_MODULE_0__.initialProjectDisplay)();
(0,_display__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)();

allTasks.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks);
today.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayToday);
thisWeek.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayThisWeek);
important.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayImportant);



// TO DO

// UPDATE FORM UI FOR INPUTS AND INPUT BUTTON SIZES

// MAYBE INVERT COLORS ON EDIT AND TRASH BUTTONS ON SIDEBAR

// MAYBE ADD DRAG TO REORDER PROJECTS?????

// MAYBE ADD WHERE YOU CAN SORT BY DUE DATE????

// MOVE TASK TO BOTTOM IF COMPLETED???

// figure out how to wrap long words on resize????


// FINISH UI

// ADD MOBILE SUPPORT

// ADD LOCAL STORAGE

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwyREFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDBEQUFpQjtBQUNyQixJQUFJLDJEQUFpQjtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpvSDs7QUFFcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrREFBcUI7QUFDckIseURBQWU7O0FBRWYsbUNBQW1DLHFEQUFlO0FBQ2xELGdDQUFnQyxrREFBWTtBQUM1QyxtQ0FBbUMscURBQWU7QUFDbEQsb0NBQW9DLHNEQUFnQjs7QUFFQzs7QUFFckQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9zZVByb2plY3RGb3JtLCBkaXNwbGF5UHJvamVjdCB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG5jb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xuY29uc3QgcHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXN1Ym1pdC1idG4nKTtcbmNvbnN0IG15UHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiAoeyBuYW1lIH0pO1xuXG5jb25zdCB0ZXN0UHJvamVjdCA9IHByb2plY3QoJ1Byb2dyYW1taW5nJyk7XG5jb25zdCB0ZXN0UHJvamVjdDIgPSBwcm9qZWN0KCdIb21lJyk7XG5jb25zdCB0ZXN0UHJvamVjdDMgPSBwcm9qZWN0KCdSZWFkaW5nJyk7XG5teVByb2plY3RMaXN0LnB1c2godGVzdFByb2plY3QsIHRlc3RQcm9qZWN0MiwgdGVzdFByb2plY3QzKTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KG5hbWUpO1xuICAgIG15UHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBkaXNwbGF5UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybSgpIHtcbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG59XG5cbnByb2plY3RTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghcHJvamVjdEZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHByb2plY3RGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgICAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59KTtcblxuZXhwb3J0IHsgbXlQcm9qZWN0TGlzdCwgY2xlYXJQcm9qZWN0Rm9ybSB9IiwiaW1wb3J0IHsgY2xvc2VUYXNrRm9ybSwgdXBkYXRlVGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBteVByb2plY3RMaXN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuXG5jb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaGVhZGluZycpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuY29uc3QgZGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpO1xuY29uc3QgaXNJbXBvcnRhbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1pbXBvcnRhbnQnKTtcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG5jb25zdCBteVRhc2tMaXN0ID0gW107XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlLCB0YXNrUHJvamVjdCkgPT4gKHsgdGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlLCB0YXNrUHJvamVjdCB9KTtcblxuY29uc3QgdGVzdFRhc2sgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIHRoaXMgd2VlaycsICdEZXRhaWxzIG9mIHRoZSB0YXNrJywgJzIwMjMtMDQtMjcnLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2syID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSB0b2RheScsICdUaGlzIHRhc2sgaGFzIGRldGFpbHMnLCAnMjAyMy0wNC0yNScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazMgPSB0YXNrKCdUaGlzIHRhc2sgaXMgaW1wb3J0YW50JywgJ1RoaXMgdGFzayBhbHNvIGhhcyBkZXRhaWxzJywgJzIwMjMtMDQtMjknLCB0cnVlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazQgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIG5leHQgd2VlaycsICcnLCAnMjAyMy0wNS0wNScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazUgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIG5leHQgd2VlayBidXQgd2l0aGluIDcgZGF5cycsICcnLCAnMjAyMy0wNS0wMScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazYgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIGV4YWN0bHkgNyBkYXlzIGZyb20gbm93JywgJycsICcyMDIzLTA1LTAyJywgdHJ1ZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s3ID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSBhIGRheSBhZnRlciA3IGRheXMnLCAnJywgJzIwMjMtMDUtMDMnLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s4ID0gdGFzaygnVGhpcyB0YXNrIGhhcyBubyBkdWUgZGF0ZScsICcnLCAnJywgZmFsc2UsIGZhbHNlKTtcbmNvbnN0IHRlc3RUYXNrOSA9IHRhc2soJ1BST0dSQU1NSU5HIFRBU0snLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ1Byb2dyYW1taW5nJyk7XG5jb25zdCB0ZXN0VGFzazEwID0gdGFzaygnUFJPR1JBTU1JTkcgVEFTSyAyJywgJycsICcnLCBmYWxzZSwgZmFsc2UsICdQcm9ncmFtbWluZycpO1xuY29uc3QgdGVzdFRhc2sxMSA9IHRhc2soJ0hPTUUgVEFTSycsICcnLCAnJywgZmFsc2UsIGZhbHNlLCAnSG9tZScpO1xuY29uc3QgdGVzdFRhc2sxMiA9IHRhc2soJ0hPTUUgVEFTSyAyJywgJycsICcnLCBmYWxzZSwgZmFsc2UsICdIb21lJyk7XG5jb25zdCB0ZXN0VGFzazEzID0gdGFzaygnUkVBRElORyBUQVNLJywgJycsICcnLCBmYWxzZSwgZmFsc2UsICdSZWFkaW5nJyk7XG5jb25zdCB0ZXN0VGFzazE0ID0gdGFzaygnUkVBRElORyBUQVNLIDInLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ1JlYWRpbmcnKTtcblxubXlUYXNrTGlzdC5wdXNoKHRlc3RUYXNrLCB0ZXN0VGFzazIsIHRlc3RUYXNrMywgdGVzdFRhc2s0LCB0ZXN0VGFzazUsIHRlc3RUYXNrNiwgdGVzdFRhc2s3LCB0ZXN0VGFzazgsIHRlc3RUYXNrOSwgdGVzdFRhc2sxMCwgdGVzdFRhc2sxMSwgdGVzdFRhc2sxMiwgdGVzdFRhc2sxMywgdGVzdFRhc2sxNCk7XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBpc0ltcG9ydGFudCA9IGlzSW1wb3J0YW50SW5wdXQuY2hlY2tlZDtcbiAgICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgbGV0IHRhc2tQcm9qZWN0ID0gJyc7XG5cbiAgICBteVByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgdGFza1Byb2plY3QgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBpc0ltcG9ydGFudCwgaXNDb21wbGV0ZSwgdGFza1Byb2plY3QpO1xuICAgIG15VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIHJldHVybiBuZXdUYXNrO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICBkZXRhaWxzSW5wdXQudmFsdWUgPSAnJztcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICBpc0ltcG9ydGFudElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRUYXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgYWRkVGFza0Zvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRUYXNrKCk7XG4gICAgICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBteVRhc2tMaXN0LCBjbGVhclRhc2tGb3JtIH0iLCJpbXBvcnQgeyBhbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnQsIHRhYnMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IG15VGFza0xpc3QsIGNsZWFyVGFza0Zvcm0gfSBmcm9tICcuL2NyZWF0ZVRhc2snO1xuaW1wb3J0IHsgdG9nZ2xlQ29tcGxldGUsIHRvZ2dsZVByaW9yaXR5LCBlZGl0VGFzaywgZGVsZXRlVGFzayB9IGZyb20gJy4vZWRpdFRhc2snO1xuaW1wb3J0IHsgbXlQcm9qZWN0TGlzdCwgY2xlYXJQcm9qZWN0Rm9ybSB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5pbXBvcnQgeyBlZGl0UHJvamVjdCwgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vZWRpdFByb2plY3QnO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1oZWFkaW5nJyk7XG5jb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybScpO1xuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1idG4nKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWJ0bicpO1xuY29uc3QgcHJvamVjdENhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhbmNlbC1idG4nKTtcbmNvbnN0IHByb2plY3RMaW5rQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlua3MnKTtcbmNvbnN0IGVkaXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtZm9ybScpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKTtcblxuLy8gaGlnaGxpZ2h0IHRoZSBzZWxlY3RlZCBuYXZpZ2F0aW9uIHRhYlxuZnVuY3Rpb24gaGlnaGxpZ2h0U2VsZWN0ZWQoc2VsZWN0ZWRUYWIpIHtcbiAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB9KTtcblxuICAgIHNlbGVjdGVkVGFiLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG59XG5cbi8vIG9wZW4vY2xvc2UgdGhlIGZvcm0gdG8gYWRkIG5ldyB0YXNrc1xuZnVuY3Rpb24gb3BlblRhc2tGb3JtKCkge1xuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyVGFza0Zvcm0oKTtcbn1cblxuY2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZVRhc2tGb3JtO1xuXG4vLyBvcGVuL2Nsb3NlIHRoZSBmb3JtIHRvIGFkZCBuZXcgcHJvamVjdHNcblxuZnVuY3Rpb24gb3BlblByb2plY3RGb3JtKCkge1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHByb2plY3ROYW1lSW5wdXQuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0Rm9ybSgpIHtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyUHJvamVjdEZvcm0oKTtcbn1cblxuYWRkUHJvamVjdEJ0bi5vbmNsaWNrID0gb3BlblByb2plY3RGb3JtO1xucHJvamVjdENhbmNlbEJ0bi5vbmNsaWNrID0gY2xvc2VQcm9qZWN0Rm9ybTtcblxuXG4vLyBjcmVhdGUgYW5kIGRpc3BsYXkgdGhlIGJ1dHRvbiB0byBhZGQgbmV3IHRhc2tzXG5mdW5jdGlvbiBkaXNwbGF5VGFza0J0bigpIHtcbiAgICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0J0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ0bicpO1xuXG4gICAgY29uc3QgYnRuSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBidG5JbWFnZS5zcmMgPSAnLi9pbWFnZXMvcGx1cy5zdmcnO1xuXG4gICAgY29uc3QgYnRuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0blRleHQudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gICAgdGFza0J0bi5vbmNsaWNrID0gb3BlblRhc2tGb3JtO1xuXG4gICAgdGFza0J0bi5hcHBlbmRDaGlsZChidG5JbWFnZSk7XG4gICAgdGFza0J0bi5hcHBlbmRDaGlsZChidG5UZXh0KTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrQnRuKTtcbn1cblxuLy8gcmVtb3ZlIHRoZSBidXR0b24gdG8gYWRkIG5ldyB0YXNrIChmb3IgcGFnZXMgd2hlcmUgeW91IGNhbm5vdCBhZGQgbmV3IHRhc2spXG5mdW5jdGlvbiByZW1vdmVUYXNrQnRuKCkge1xuICAgIGlmIChtYWluQ29udGVudC5sYXN0Q2hpbGQuY2xhc3NOYW1lID09PSAndGFzay1idG4nKSB7XG4gICAgICAgIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiB0byBkaXNwbGF5IHRhc2sgZGV0YWlsc1xuZnVuY3Rpb24gZGlzcGxheURldGFpbHModGFzaywgdGFza0Rpdikge1xuICAgIGlmICh0YXNrRGl2Lmxhc3RDaGlsZC5jbGFzc05hbWUgIT0gJ2RldGFpbHMtZGlzcGxheScgJiYgdGFzay5kZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHNEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtZGlzcGxheScpO1xuICAgICAgICBkZXRhaWxzRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2suZGV0YWlscztcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGlzcGxheSk7XG4gICAgfSBlbHNlIGlmICh0YXNrRGl2Lmxhc3RDaGlsZC5jbGFzc05hbWUgPT09ICdkZXRhaWxzLWRpc3BsYXknICYmIHRhc2suZGV0YWlscykge1xuICAgICAgICB0YXNrRGl2LnJlbW92ZUNoaWxkKHRhc2tEaXYubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgYSBzaW5ndWxhciB0YXNrXG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrKSB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbiAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG4gICAgY29uc3QgdGFza01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTWFpbi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1haW4nKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tNYWluKTtcblxuICAgIGNvbnN0IHRhc2tMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0xlZnQuY2xhc3NMaXN0LmFkZCgndGFzay1sZWZ0Jyk7XG4gICAgdGFza01haW4uYXBwZW5kQ2hpbGQodGFza0xlZnQpO1xuXG4gICAgY29uc3QgdGFza1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMnKTtcbiAgICB0YXNrTGVmdC5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcblxuICAgIGNvbnN0IHRhc2tJbmNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGFza0luY29tcGxldGUuY2xhc3NMaXN0LmFkZCgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgdGFza0luY29tcGxldGUuc3JjID0gJy4vaW1hZ2VzL2NpcmNsZS11bmZpbGxlZC5zdmcnO1xuXG4gICAgY29uc3QgdGFza0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGFza0NvbXBsZXRlLnNyYyA9ICcuL2ltYWdlcy9jaXJjbGUtZmlsbGVkLnN2Zyc7XG5cbiAgICBjb25zdCB0aXRsZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgndGl0bGUtZGlzcGxheScpO1xuICAgIHRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGl0bGVEaXNwbGF5KTtcblxuICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICB0YXNrU3RhdHVzLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZSk7XG4gICAgdGl0bGVEaXNwbGF5LnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1N0YXR1cy5hcHBlbmRDaGlsZCh0YXNrSW5jb21wbGV0ZSk7XG4gICAgfVxuXG4gICAgdGFza1N0YXR1cy5vbmNsaWNrID0gdG9nZ2xlQ29tcGxldGUuYmluZCh0aGlzLCB0YXNrSW5jb21wbGV0ZSwgdGFza1N0YXR1cywgdGl0bGVEaXNwbGF5LCB0YXNrKTtcblxuICAgIGlmICh0YXNrLmRldGFpbHMpIHtcbiAgICAgICAgY29uc3QgZXhwYW5kVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBleHBhbmRUYXNrLnNyYyA9ICcuL2ltYWdlcy9leHBhbmQtdGFzay5zdmcnO1xuICAgICAgICB0YXNrTGVmdC5hcHBlbmRDaGlsZChleHBhbmRUYXNrKTtcbiAgICAgICAgZXhwYW5kVGFzay50aXRsZSA9ICdDbGljayB0YXNrIHRvIHNob3cgZGV0YWlscyc7XG4gICAgICAgIGV4cGFuZFRhc2suY2xhc3NMaXN0LmFkZCgnZXhwYW5kLXRhc2snKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGFza1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1JpZ2h0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcmlnaHQnKTtcbiAgICB0YXNrTWFpbi5hcHBlbmRDaGlsZCh0YXNrUmlnaHQpO1xuXG4gICAgY29uc3QgZHVlRGF0ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZHVlRGF0ZURpc3BsYXkpO1xuXG4gICAgaWYgKCF0YXNrLmR1ZURhdGUpIHtcbiAgICAgICAgZHVlRGF0ZURpc3BsYXkudGV4dENvbnRlbnQgPSAnTm8gRHVlIERhdGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGR1ZURhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW9yaXR5U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktc3RhdHVzJyk7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5U3RhdHVzKTtcblxuICAgIGNvbnN0IG5vUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBub1ByaW9yaXR5LnNyYyA9ICcuL2ltYWdlcy9zdGFyLXVuZmlsbGVkLnN2Zyc7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByaW9yaXR5LnNyYyA9ICcuL2ltYWdlcy9zdGFyLWZpbGxlZC5zdmcnO1xuXG4gICAgaWYgKHRhc2suaXNJbXBvcnRhbnQpIHtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmFwcGVuZENoaWxkKG5vUHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eVN0YXR1cy5jbGFzc0xpc3QuYWRkKCduby1wcmlvcml0eScpO1xuICAgIH1cblxuICAgIHByaW9yaXR5U3RhdHVzLm9uY2xpY2sgPSB0b2dnbGVQcmlvcml0eS5iaW5kKHRoaXMsIHByaW9yaXR5U3RhdHVzLCB0YXNrKTtcblxuICAgIGNvbnN0IHRhc2tFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0YXNrRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQtYnRuJyk7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKHRhc2tFZGl0QnRuKTtcblxuICAgIGNvbnN0IGVkaXRCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlZGl0QnRuSW1nLnNyYyA9ICcuL2ltYWdlcy9lZGl0LnN2Zyc7XG4gICAgdGFza0VkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEJ0bkltZyk7XG5cbiAgICB0YXNrRWRpdEJ0bi5vbmNsaWNrID0gZWRpdFRhc2suYmluZCh0aGlzLCB0YXNrLCB0YXNrRGl2LCB0b0RvQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlLWJ0bicpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnRuKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ0bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlbGV0ZUJ0bkltZy5zcmMgPSAnLi9pbWFnZXMvdHJhc2guc3ZnJztcbiAgICB0YXNrRGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bkltZyk7XG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBteVRhc2tMaXN0LmluZGV4T2YodGFzayk7XG5cbiAgICB0YXNrRGVsZXRlQnRuLm9uY2xpY2sgPSBkZWxldGVUYXNrLmJpbmQodGhpcywgY3VycmVudEluZGV4KTtcblxuICAgIHRhc2tEaXYub25jbGljayA9IGRpc3BsYXlEZXRhaWxzLmJpbmQodGhpcywgdGFzaywgdGFza0Rpdik7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGNsZWFyIGRpc3BsYXkgXG5mdW5jdGlvbiBjbGVhckRpc3BsYXkoKSB7XG4gICAgd2hpbGUgKHRvRG9Db250YWluZXIuZmlyc3RDaGlsZCAmJiB0b0RvQ29udGFpbmVyLmZpcnN0Q2hpbGQuY2xhc3NOYW1lICE9ICdlZGl0LXRhc2stZm9ybScpIHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b0RvQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHdoaWxlKHRvRG9Db250YWluZXIubGFzdENoaWxkICYmIHRvRG9Db250YWluZXIubGFzdENoaWxkLmNsYXNzTmFtZSAhPSAnZWRpdC10YXNrLWZvcm0nKSB7XG4gICAgICAgIHRvRG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9Eb0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG4vLyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHRhc2sgbGlzdCBkaXNwbGF5XG5mdW5jdGlvbiB1cGRhdGVUYXNrRGlzcGxheSgpIHtcbiAgICBjbGVhckRpc3BsYXkoKTtcblxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBjdXJyZW50RGF0ZTtcbiAgICBpZiAobW9udGggPCAxMCkge1xuICAgICAgICBjdXJyZW50RGF0ZSA9IGAke3llYXJ9LTAke21vbnRofS0ke2RheX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnREYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICB9XG5cbiAgICBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ0FsbCBUYXNrcycpIHtcbiAgICAgICAgbXlUYXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09ICdUb2RheScpIHtcbiAgICAgICAgY29uc3QgdGFza3NUb2RheSA9IG15VGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5kdWVEYXRlID09PSBjdXJyZW50RGF0ZSk7XG4gICAgICAgIHRhc2tzVG9kYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFdlZWtFbmQgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkgKyA3KTtcblxuICAgICAgICBjb25zdCB0YXNrc1RoaXNXZWVrID0gbXlUYXNrTGlzdC5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZUFycmF5ID0gdGFzay5kdWVEYXRlLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrWWVhciA9IHRhc2tEYXRlQXJyYXlbMF07XG4gICAgICAgICAgICBjb25zdCB0YXNrTW9udGggPSBwYXJzZUludCh0YXNrRGF0ZUFycmF5WzFdLCAxMCkgLSAxO1xuICAgICAgICAgICAgY29uc3QgdGFza0RheSA9IHRhc2tEYXRlQXJyYXlbMl07XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2tZZWFyLCB0YXNrTW9udGgsIHRhc2tEYXkpO1xuICAgICAgICAgICAgcmV0dXJuICh0YXNrRGF0ZSA+PSBkYXRlICYmIHRhc2tEYXRlIDw9IGN1cnJlbnRXZWVrRW5kKSB8fCAodGFzay5kdWVEYXRlID09PSBjdXJyZW50RGF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhc2tzVGhpc1dlZWsuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ0ltcG9ydGFudCcpIHtcbiAgICAgICAgY29uc3QgdGFza3NJbXBvcnRhbnQgPSBteVRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suaXNJbXBvcnRhbnQpO1xuICAgICAgICB0YXNrc0ltcG9ydGFudC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFza3NCeVByb2plY3QgPSBteVRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2sudGFza1Byb2plY3QgPT09IGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQpO1xuICAgICAgICB0YXNrc0J5UHJvamVjdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGluaycpO1xuICAgIHByb2plY3RMaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3ROYW1lRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUtZGlzcGxheScpO1xuICAgIHByb2plY3ROYW1lRGlzcGxheS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBwcm9qZWN0TGluay5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZURpc3BsYXkpO1xuXG4gICAgY29uc3QgcHJvamVjdExpbmtCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdExpbmtCdG5zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGluay1idG5zJyk7XG4gICAgcHJvamVjdExpbmsuYXBwZW5kQ2hpbGQocHJvamVjdExpbmtCdG5zKTtcblxuICAgIGNvbnN0IHByb2plY3RFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdEVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0LWJ0bicpO1xuICAgIHByb2plY3RMaW5rQnRucy5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEJ0bik7XG5cbiAgICBjb25zdCBwcm9qZWN0RWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3RFZGl0SW1nLnNyYyA9ICcuL2ltYWdlcy9lZGl0LnN2Zyc7XG4gICAgcHJvamVjdEVkaXRCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRJbWcpO1xuXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtYnRuJyk7XG4gICAgcHJvamVjdExpbmtCdG5zLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG4pO1xuXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3REZWxldGVJbWcuc3JjID0gJy4vaW1hZ2VzL3RyYXNoLnN2Zyc7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlSW1nKTtcblxuICAgIHRhYnMucHVzaChwcm9qZWN0TGluayk7XG5cbiAgICBwcm9qZWN0TGluay5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICAgICAgZGlzcGxheVRhc2tCdG4oKTtcbiAgICAgICAgaGlnaGxpZ2h0U2VsZWN0ZWQocHJvamVjdExpbmspO1xuICAgICAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdExpbmsuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgIH1cblxuICAgIHByb2plY3RFZGl0QnRuLm9uY2xpY2sgPSBlZGl0UHJvamVjdC5iaW5kKHRoaXMsIHByb2plY3QsIHByb2plY3RMaW5rLCBwcm9qZWN0TGlua0NvbnRhaW5lciwgcHJvamVjdE5hbWVEaXNwbGF5LCBjb250ZW50SGVhZGVyKTtcblxuICAgIHByb2plY3REZWxldGVCdG4ub25jbGljayA9IGRlbGV0ZVByb2plY3QuYmluZCh0aGlzLCBwcm9qZWN0LCBwcm9qZWN0TGluaywgcHJvamVjdExpbmtDb250YWluZXIsIGNvbnRlbnRIZWFkZXIpO1xufVxuXG4vLyBDQU4gUkVNT1ZFIFRISVMgT05DRSBGSU5JU0hFRCBBTkQgREVMRVRFIFRFU1QgUFJPSkVDVFNcbmZ1bmN0aW9uIGluaXRpYWxQcm9qZWN0RGlzcGxheSgpIHtcbiAgICBteVByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG59XG5cbi8vIGZ1bmN0aW9ucyB0byBkaXNwbGF5IGFwcHJvcHJpYXRlIHRhc2tzIGZvciBjaG9zZW4gdGFiXG5mdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGRpc3BsYXlUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQoYWxsVGFza3MpO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZGF5KCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZCh0b2RheSk7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUaGlzV2VlaygpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQodGhpc1dlZWspO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUltcG9ydGFudCgpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQoaW1wb3J0YW50KTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlBbGxUYXNrcywgZGlzcGxheVRvZGF5LCBkaXNwbGF5VGhpc1dlZWssIGRpc3BsYXlJbXBvcnRhbnQsIGNsb3NlVGFza0Zvcm0sIHVwZGF0ZVRhc2tEaXNwbGF5LCBjbG9zZVByb2plY3RGb3JtLCBpbml0aWFsUHJvamVjdERpc3BsYXksIGRpc3BsYXlQcm9qZWN0IH0iLCJpbXBvcnQgeyBpZ25vcmVFdmVudCB9IGZyb20gXCIuL2VkaXRUYXNrXCI7XG5pbXBvcnQgeyBteVByb2plY3RMaXN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzLCB1cGRhdGVUYXNrRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IG15VGFza0xpc3QgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cbmNvbnN0IGVkaXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtZm9ybScpO1xuY29uc3QgZWRpdFByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LW5hbWUtaW5wdXQnKTtcbmNvbnN0IGVkaXRQcm9qZWN0U3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1zdWJtaXQtYnRuJyk7XG5jb25zdCBlZGl0UHJvamVjdENhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtY2FuY2VsLWJ0bicpO1xuXG5mdW5jdGlvbiBvcGVuRWRpdFByb2plY3RGb3JtKCkge1xuICAgIGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gY2xlYXJFZGl0UHJvamVjdEZvcm0oKSB7XG4gICAgZWRpdFByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gc2hvd0hpZGRlblByb2plY3QoKSB7XG4gICAgY29uc3Qgb3BlblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdGluZy1wcm9qZWN0Jyk7XG4gICAgb3BlblByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy1wcm9qZWN0Jyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRWRpdFByb2plY3RGb3JtKCkge1xuICAgIGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyRWRpdFByb2plY3RGb3JtKCk7XG4gICAgc2hvd0hpZGRlblByb2plY3QoKTtcbn1cblxuZnVuY3Rpb24gYXV0b2ZpbGxQcm9qZWN0SW5mbyhwcm9qZWN0KSB7XG4gICAgZWRpdFByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3QsIHByb2plY3RMaW5rLCBwcm9qZWN0TGlua0NvbnRhaW5lciwgcHJvamVjdE5hbWVEaXNwbGF5LCBjb250ZW50SGVhZGVyKSB7XG4gICAgaWdub3JlRXZlbnQoKTtcblxuICAgIGlmIChlZGl0UHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PT0gJycgfHwgZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXByb2plY3QnKTtcbiAgICAgICAgb3BlbkVkaXRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICBwcm9qZWN0TGlua0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFByb2plY3RGb3JtLCBwcm9qZWN0TGluayk7XG4gICAgICAgIGF1dG9maWxsUHJvamVjdEluZm8ocHJvamVjdCk7XG4gICAgICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0hpZGRlblByb2plY3QoKTtcbiAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy1wcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RMaW5rQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0UHJvamVjdEZvcm0sIHByb2plY3RMaW5rKTtcbiAgICAgICAgYXV0b2ZpbGxQcm9qZWN0SW5mbyhwcm9qZWN0KTtcbiAgICAgICAgZWRpdFByb2plY3ROYW1lSW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBlZGl0UHJvamVjdFN1Ym1pdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIWVkaXRQcm9qZWN0Rm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0Rm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gY29udGVudEhlYWRlci50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSBlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2plY3QubmFtZSA9IGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgcHJvamVjdE5hbWVEaXNwbGF5LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsb3NlRWRpdFByb2plY3RGb3JtKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0UHJvamVjdENhbmNlbEJ0bi5vbmNsaWNrID0gY2xvc2VFZGl0UHJvamVjdEZvcm07XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCwgcHJvamVjdExpbmssIHByb2plY3RMaW5rQ29udGFpbmVyLCBjb250ZW50SGVhZGVyKSB7XG4gICAgaWdub3JlRXZlbnQoKTtcblxuICAgIGZvciAobGV0IGkgPSBteVRhc2tMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBteVRhc2tMaXN0W2ldO1xuICAgICAgICBpZiAodGFzay50YXNrUHJvamVjdCA9PT0gcHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICBteVRhc2tMaXN0LnNwbGljZShteVRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xuICAgICAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQpIHtcbiAgICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgfVxuXG4gICAgbXlQcm9qZWN0TGlzdC5zcGxpY2UobXlQcm9qZWN0TGlzdC5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICBwcm9qZWN0TGlua0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0TGluayk7XG59XG5cbmV4cG9ydCB7IGVkaXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH0iLCJpbXBvcnQgeyBteVRhc2tMaXN0IH0gZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuaW1wb3J0IHsgdXBkYXRlVGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybScpO1xuY29uc3QgZWRpdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpO1xuY29uc3QgZWRpdERldGFpbHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRldGFpbHMnKTtcbmNvbnN0IGVkaXREdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kdWUtZGF0ZScpO1xuY29uc3QgZWRpdElzSW1wb3J0YW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1pcy1pbXBvcnRhbnQnKTtcbmNvbnN0IGVkaXRTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1zdWJtaXQtYnRuJyk7XG5jb25zdCBlZGl0Q2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY2FuY2VsLWJ0bicpO1xuXG4vLyBmdW5jdGlvbiB0byBpZ25vcmUgdGFza0RpdiBvbmNsaWNrIGV2ZW50IHdoZW4gYnV0dG9ucyB3aXRoaW4gdGhlIHRhc2tEaXYgYXJlIGNsaWNrZWRcbmZ1bmN0aW9uIGlnbm9yZUV2ZW50KGUpIHtcbiAgICBpZiAoIWUpIHtcbiAgICAgICAgZSA9IHdpbmRvdy5ldmVudDtcbiAgICB9XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGUoc3RhdHVzLCBzdGF0dXNDb250YWluZXIsIHRpdGxlLCB0YXNrKSB7XG4gICAgaWdub3JlRXZlbnQoKTtcblxuICAgIGlmIChzdGF0dXMuY2xhc3NMaXN0LnZhbHVlID09PSAndGFzay1pbmNvbXBsZXRlJykge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGFza0NvbXBsZXRlLnNyYyA9ICcuL2ltYWdlcy9jaXJjbGUtZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGUpO1xuXG4gICAgICAgIHRpdGxlLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG5cbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCB0YXNrSW5jb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrSW5jb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLXVuZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5jb21wbGV0ZSk7XG5cbiAgICAgICAgdGl0bGUuc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdub25lJyk7XG5cbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQcmlvcml0eShzdGF0dXNDb250YWluZXIsIHRhc2spIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgaWYgKHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudmFsdWUgPT09ICdwcmlvcml0eS1zdGF0dXMgcHJpb3JpdHknKSB7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdwcmlvcml0eScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tcHJpb3JpdHknKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXR1c0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuXG4gICAgICAgIGNvbnN0IG5vUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbm9Qcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci11bmZpbGxlZC5zdmcnO1xuICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kQ2hpbGQobm9Qcmlvcml0eSk7XG5cbiAgICAgICAgdGFzay5pc0ltcG9ydGFudCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ3ByaW9yaXR5LXN0YXR1cyBuby1wcmlvcml0eScpIHtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ25vLXByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdwcmlvcml0eScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhdHVzQ29udGFpbmVyLmxhc3RDaGlsZCk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcHJpb3JpdHkuc3JjID0gJy4vaW1hZ2VzL3N0YXItZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgdGFzay5pc0ltcG9ydGFudCA9IHRydWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvcGVuRWRpdFRhc2tGb3JtKCkge1xuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBlZGl0VGl0bGVJbnB1dC5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBjbGVhckVkaXRUYXNrRm9ybSgpIHtcbiAgICBlZGl0VGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGVkaXREZXRhaWxzSW5wdXQudmFsdWUgPSAnJztcbiAgICBlZGl0RHVlRGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgZWRpdElzSW1wb3J0YW50SW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzaG93SGlkZGVuVGFzaygpIHtcbiAgICBjb25zdCBvcGVuVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0aW5nLXRhc2snKTtcbiAgICBvcGVuVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXRhc2snKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VFZGl0VGFza0Zvcm0oKSB7XG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJFZGl0VGFza0Zvcm0oKTtcbiAgICBzaG93SGlkZGVuVGFzaygpO1xufVxuXG5mdW5jdGlvbiBhdXRvZmlsbFRhc2tJbmZvKHRhc2spIHtcbiAgICBlZGl0VGl0bGVJbnB1dC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgZWRpdER1ZURhdGVJbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICBlZGl0SXNJbXBvcnRhbnRJbnB1dC5jaGVja2VkID0gdGFzay5pc0ltcG9ydGFudDtcbiAgICBpZiAodGFzay5kZXRhaWxzKSB7XG4gICAgICAgIGVkaXREZXRhaWxzSW5wdXQudmFsdWUgPSB0YXNrLmRldGFpbHM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWRpdERldGFpbHNJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZWRpdFRhc2sodGFzaywgdGFza0RpdiwgdG9Eb0NvbnRhaW5lcikge1xuICAgIGlnbm9yZUV2ZW50KCk7XG5cbiAgICBpZiAoZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmctdGFzaycpO1xuICAgICAgICBvcGVuRWRpdFRhc2tGb3JtKCk7XG4gICAgICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrRm9ybSwgdGFza0Rpdik7XG4gICAgICAgIGF1dG9maWxsVGFza0luZm8odGFzayk7XG4gICAgICAgIGVkaXRUaXRsZUlucHV0LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0hpZGRlblRhc2soKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXRhc2snKTtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tGb3JtLCB0YXNrRGl2KTtcbiAgICAgICAgYXV0b2ZpbGxUYXNrSW5mbyh0YXNrKTtcbiAgICAgICAgZWRpdFRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBlZGl0U3VibWl0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICghZWRpdFRhc2tGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgZWRpdFRhc2tGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLnRpdGxlID0gZWRpdFRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0YXNrLmRldGFpbHMgPSBlZGl0RGV0YWlsc0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGFzay5kdWVEYXRlID0gZWRpdER1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRhc2suaXNJbXBvcnRhbnQgPSBlZGl0SXNJbXBvcnRhbnRJbnB1dC5jaGVja2VkO1xuXG4gICAgICAgICAgICBjbG9zZUVkaXRUYXNrRm9ybSgpO1xuICAgICAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZWRpdENhbmNlbEJ0bi5vbmNsaWNrID0gY2xvc2VFZGl0VGFza0Zvcm07XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soaW5kZXgpIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuICAgIG15VGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xufVxuXG5leHBvcnQgeyB0b2dnbGVDb21wbGV0ZSwgdG9nZ2xlUHJpb3JpdHksIGVkaXRUYXNrLCBkZWxldGVUYXNrLCBpZ25vcmVFdmVudCB9IiwiaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzLCBkaXNwbGF5VG9kYXksIGRpc3BsYXlUaGlzV2VlaywgZGlzcGxheUltcG9ydGFudCwgaW5pdGlhbFByb2plY3REaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5JztcblxuY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXRhc2tzJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpO1xuY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy13ZWVrJyk7XG5jb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW50Jyk7XG5jb25zdCB0YWJzID0gW2FsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudF07XG5cbmluaXRpYWxQcm9qZWN0RGlzcGxheSgpO1xuZGlzcGxheUFsbFRhc2tzKCk7XG5cbmFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFsbFRhc2tzKTtcbnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRvZGF5KTtcbnRoaXNXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRoaXNXZWVrKTtcbmltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlJbXBvcnRhbnQpO1xuXG5leHBvcnQgeyBhbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnQsIHRhYnMgfVxuXG4vLyBUTyBET1xuXG4vLyBVUERBVEUgRk9STSBVSSBGT1IgSU5QVVRTIEFORCBJTlBVVCBCVVRUT04gU0laRVNcblxuLy8gTUFZQkUgSU5WRVJUIENPTE9SUyBPTiBFRElUIEFORCBUUkFTSCBCVVRUT05TIE9OIFNJREVCQVJcblxuLy8gTUFZQkUgQUREIERSQUcgVE8gUkVPUkRFUiBQUk9KRUNUUz8/Pz8/XG5cbi8vIE1BWUJFIEFERCBXSEVSRSBZT1UgQ0FOIFNPUlQgQlkgRFVFIERBVEU/Pz8/XG5cbi8vIE1PVkUgVEFTSyBUTyBCT1RUT00gSUYgQ09NUExFVEVEPz8/XG5cbi8vIGZpZ3VyZSBvdXQgaG93IHRvIHdyYXAgbG9uZyB3b3JkcyBvbiByZXNpemU/Pz8/XG5cblxuLy8gRklOSVNIIFVJXG5cbi8vIEFERCBNT0JJTEUgU1VQUE9SVFxuXG4vLyBBREQgTE9DQUwgU1RPUkFHRSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=