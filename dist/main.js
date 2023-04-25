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

// ADD CHARACTER LIMIT TO FORM FIELDS

// MAYBE CHANGE EDIT SUBMIT BUTTON TO SAY "UPDATE"

// UPDATE FORM UI FOR INPUTS AND INPUT BUTTON SIZES

// MAYBE INVERT COLORS ON EDIT AND TRASH BUTTONS ON SIDEBAR

// MAYBE ADD DRAG TO REORDER PROJECTS?????

// MAYBE ADD WHERE YOU CAN SORT BY DUE DATE????

// MOVE TASK TO BOTTOM IF COMPLETED???



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDJEQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMERBQWlCO0FBQ3JCLElBQUksMkRBQWlCO0FBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSm9IOztBQUVwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUFxQjtBQUNyQix5REFBZTs7QUFFZixtQ0FBbUMscURBQWU7QUFDbEQsZ0NBQWdDLGtEQUFZO0FBQzVDLG1DQUFtQyxxREFBZTtBQUNsRCxvQ0FBb0Msc0RBQWdCOztBQUVDOztBQUVyRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOzs7Ozs7VUN4Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9zZVByb2plY3RGb3JtLCBkaXNwbGF5UHJvamVjdCB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG5jb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xuY29uc3QgcHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXN1Ym1pdC1idG4nKTtcbmNvbnN0IG15UHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiAoeyBuYW1lIH0pO1xuXG5jb25zdCB0ZXN0UHJvamVjdCA9IHByb2plY3QoJ1Byb2dyYW1taW5nJyk7XG5jb25zdCB0ZXN0UHJvamVjdDIgPSBwcm9qZWN0KCdIb21lJyk7XG5jb25zdCB0ZXN0UHJvamVjdDMgPSBwcm9qZWN0KCdSZWFkaW5nJyk7XG5teVByb2plY3RMaXN0LnB1c2godGVzdFByb2plY3QsIHRlc3RQcm9qZWN0MiwgdGVzdFByb2plY3QzKTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KG5hbWUpO1xuICAgIG15UHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBkaXNwbGF5UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybSgpIHtcbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG59XG5cbnByb2plY3RTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghcHJvamVjdEZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHByb2plY3RGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgICAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59KTtcblxuZXhwb3J0IHsgbXlQcm9qZWN0TGlzdCwgY2xlYXJQcm9qZWN0Rm9ybSB9IiwiaW1wb3J0IHsgY2xvc2VUYXNrRm9ybSwgdXBkYXRlVGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBteVByb2plY3RMaXN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuXG5jb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaGVhZGluZycpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuY29uc3QgZGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpO1xuY29uc3QgaXNJbXBvcnRhbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1pbXBvcnRhbnQnKTtcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG5jb25zdCBteVRhc2tMaXN0ID0gW107XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlLCB0YXNrUHJvamVjdCkgPT4gKHsgdGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlLCB0YXNrUHJvamVjdCB9KTtcblxuY29uc3QgdGVzdFRhc2sgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIHRoaXMgd2VlaycsICdEZXRhaWxzIG9mIHRoZSB0YXNrJywgJzIwMjMtMDQtMjcnLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2syID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSB0b2RheScsICdUaGlzIHRhc2sgaGFzIGRldGFpbHMnLCAnMjAyMy0wNC0yNScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazMgPSB0YXNrKCdUaGlzIHRhc2sgaXMgaW1wb3J0YW50JywgJ1RoaXMgdGFzayBhbHNvIGhhcyBkZXRhaWxzJywgJzIwMjMtMDQtMjknLCB0cnVlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazQgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIG5leHQgd2VlaycsICcnLCAnMjAyMy0wNS0wNScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazUgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIG5leHQgd2VlayBidXQgd2l0aGluIDcgZGF5cycsICcnLCAnMjAyMy0wNS0wMScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazYgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIGV4YWN0bHkgNyBkYXlzIGZyb20gbm93JywgJycsICcyMDIzLTA1LTAyJywgdHJ1ZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s3ID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSBhIGRheSBhZnRlciA3IGRheXMnLCAnJywgJzIwMjMtMDUtMDMnLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s4ID0gdGFzaygnVGhpcyB0YXNrIGhhcyBubyBkdWUgZGF0ZScsICcnLCAnJywgZmFsc2UsIGZhbHNlKTtcbmNvbnN0IHRlc3RUYXNrOSA9IHRhc2soJ1BST0dSQU1NSU5HIFRBU0snLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ1Byb2dyYW1taW5nJyk7XG5jb25zdCB0ZXN0VGFzazEwID0gdGFzaygnUFJPR1JBTU1JTkcgVEFTSyAyJywgJycsICcnLCBmYWxzZSwgZmFsc2UsICdQcm9ncmFtbWluZycpO1xuY29uc3QgdGVzdFRhc2sxMSA9IHRhc2soJ0hPTUUgVEFTSycsICcnLCAnJywgZmFsc2UsIGZhbHNlLCAnSG9tZScpO1xuY29uc3QgdGVzdFRhc2sxMiA9IHRhc2soJ0hPTUUgVEFTSyAyJywgJycsICcnLCBmYWxzZSwgZmFsc2UsICdIb21lJyk7XG5jb25zdCB0ZXN0VGFzazEzID0gdGFzaygnUkVBRElORyBUQVNLJywgJycsICcnLCBmYWxzZSwgZmFsc2UsICdSZWFkaW5nJyk7XG5jb25zdCB0ZXN0VGFzazE0ID0gdGFzaygnUkVBRElORyBUQVNLIDInLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ1JlYWRpbmcnKTtcblxubXlUYXNrTGlzdC5wdXNoKHRlc3RUYXNrLCB0ZXN0VGFzazIsIHRlc3RUYXNrMywgdGVzdFRhc2s0LCB0ZXN0VGFzazUsIHRlc3RUYXNrNiwgdGVzdFRhc2s3LCB0ZXN0VGFzazgsIHRlc3RUYXNrOSwgdGVzdFRhc2sxMCwgdGVzdFRhc2sxMSwgdGVzdFRhc2sxMiwgdGVzdFRhc2sxMywgdGVzdFRhc2sxNCk7XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBpc0ltcG9ydGFudCA9IGlzSW1wb3J0YW50SW5wdXQuY2hlY2tlZDtcbiAgICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgbGV0IHRhc2tQcm9qZWN0ID0gJyc7XG5cbiAgICBteVByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgdGFza1Byb2plY3QgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBpc0ltcG9ydGFudCwgaXNDb21wbGV0ZSwgdGFza1Byb2plY3QpO1xuICAgIG15VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIHJldHVybiBuZXdUYXNrO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICBkZXRhaWxzSW5wdXQudmFsdWUgPSAnJztcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICBpc0ltcG9ydGFudElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRUYXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgYWRkVGFza0Zvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRUYXNrKCk7XG4gICAgICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBteVRhc2tMaXN0LCBjbGVhclRhc2tGb3JtIH0iLCJpbXBvcnQgeyBhbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnQsIHRhYnMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IG15VGFza0xpc3QsIGNsZWFyVGFza0Zvcm0gfSBmcm9tICcuL2NyZWF0ZVRhc2snO1xuaW1wb3J0IHsgdG9nZ2xlQ29tcGxldGUsIHRvZ2dsZVByaW9yaXR5LCBlZGl0VGFzaywgZGVsZXRlVGFzayB9IGZyb20gJy4vZWRpdFRhc2snO1xuaW1wb3J0IHsgbXlQcm9qZWN0TGlzdCwgY2xlYXJQcm9qZWN0Rm9ybSB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5pbXBvcnQgeyBlZGl0UHJvamVjdCwgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vZWRpdFByb2plY3QnO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1oZWFkaW5nJyk7XG5jb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybScpO1xuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1idG4nKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWJ0bicpO1xuY29uc3QgcHJvamVjdENhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhbmNlbC1idG4nKTtcbmNvbnN0IHByb2plY3RMaW5rQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlua3MnKTtcbmNvbnN0IGVkaXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtZm9ybScpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKTtcblxuLy8gaGlnaGxpZ2h0IHRoZSBzZWxlY3RlZCBuYXZpZ2F0aW9uIHRhYlxuZnVuY3Rpb24gaGlnaGxpZ2h0U2VsZWN0ZWQoc2VsZWN0ZWRUYWIpIHtcbiAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB9KTtcblxuICAgIHNlbGVjdGVkVGFiLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG59XG5cbi8vIG9wZW4vY2xvc2UgdGhlIGZvcm0gdG8gYWRkIG5ldyB0YXNrc1xuZnVuY3Rpb24gb3BlblRhc2tGb3JtKCkge1xuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyVGFza0Zvcm0oKTtcbn1cblxuY2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZVRhc2tGb3JtO1xuXG4vLyBvcGVuL2Nsb3NlIHRoZSBmb3JtIHRvIGFkZCBuZXcgcHJvamVjdHNcblxuZnVuY3Rpb24gb3BlblByb2plY3RGb3JtKCkge1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHByb2plY3ROYW1lSW5wdXQuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0Rm9ybSgpIHtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyUHJvamVjdEZvcm0oKTtcbn1cblxuYWRkUHJvamVjdEJ0bi5vbmNsaWNrID0gb3BlblByb2plY3RGb3JtO1xucHJvamVjdENhbmNlbEJ0bi5vbmNsaWNrID0gY2xvc2VQcm9qZWN0Rm9ybTtcblxuXG4vLyBjcmVhdGUgYW5kIGRpc3BsYXkgdGhlIGJ1dHRvbiB0byBhZGQgbmV3IHRhc2tzXG5mdW5jdGlvbiBkaXNwbGF5VGFza0J0bigpIHtcbiAgICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0J0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ0bicpO1xuXG4gICAgY29uc3QgYnRuSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBidG5JbWFnZS5zcmMgPSAnLi9pbWFnZXMvcGx1cy5zdmcnO1xuXG4gICAgY29uc3QgYnRuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0blRleHQudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gICAgdGFza0J0bi5vbmNsaWNrID0gb3BlblRhc2tGb3JtO1xuXG4gICAgdGFza0J0bi5hcHBlbmRDaGlsZChidG5JbWFnZSk7XG4gICAgdGFza0J0bi5hcHBlbmRDaGlsZChidG5UZXh0KTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrQnRuKTtcbn1cblxuLy8gcmVtb3ZlIHRoZSBidXR0b24gdG8gYWRkIG5ldyB0YXNrIChmb3IgcGFnZXMgd2hlcmUgeW91IGNhbm5vdCBhZGQgbmV3IHRhc2spXG5mdW5jdGlvbiByZW1vdmVUYXNrQnRuKCkge1xuICAgIGlmIChtYWluQ29udGVudC5sYXN0Q2hpbGQuY2xhc3NOYW1lID09PSAndGFzay1idG4nKSB7XG4gICAgICAgIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiB0byBkaXNwbGF5IHRhc2sgZGV0YWlsc1xuZnVuY3Rpb24gZGlzcGxheURldGFpbHModGFzaywgdGFza0Rpdikge1xuICAgIGlmICh0YXNrRGl2Lmxhc3RDaGlsZC5jbGFzc05hbWUgIT0gJ2RldGFpbHMtZGlzcGxheScgJiYgdGFzay5kZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHNEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtZGlzcGxheScpO1xuICAgICAgICBkZXRhaWxzRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2suZGV0YWlscztcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGlzcGxheSk7XG4gICAgfSBlbHNlIGlmICh0YXNrRGl2Lmxhc3RDaGlsZC5jbGFzc05hbWUgPT09ICdkZXRhaWxzLWRpc3BsYXknICYmIHRhc2suZGV0YWlscykge1xuICAgICAgICB0YXNrRGl2LnJlbW92ZUNoaWxkKHRhc2tEaXYubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgYSBzaW5ndWxhciB0YXNrXG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrKSB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbiAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG4gICAgY29uc3QgdGFza01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTWFpbi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1haW4nKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tNYWluKTtcblxuICAgIGNvbnN0IHRhc2tMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0xlZnQuY2xhc3NMaXN0LmFkZCgndGFzay1sZWZ0Jyk7XG4gICAgdGFza01haW4uYXBwZW5kQ2hpbGQodGFza0xlZnQpO1xuXG4gICAgY29uc3QgdGFza1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMnKTtcbiAgICB0YXNrTGVmdC5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcblxuICAgIGNvbnN0IHRhc2tJbmNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGFza0luY29tcGxldGUuY2xhc3NMaXN0LmFkZCgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgdGFza0luY29tcGxldGUuc3JjID0gJy4vaW1hZ2VzL2NpcmNsZS11bmZpbGxlZC5zdmcnO1xuXG4gICAgY29uc3QgdGFza0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGFza0NvbXBsZXRlLnNyYyA9ICcuL2ltYWdlcy9jaXJjbGUtZmlsbGVkLnN2Zyc7XG5cbiAgICBjb25zdCB0aXRsZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRpdGxlRGlzcGxheSk7XG5cbiAgICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgdGFza1N0YXR1cy5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGUpO1xuICAgIHRpdGxlRGlzcGxheS5zdHlsZS5zZXRQcm9wZXJ0eSgndGV4dC1kZWNvcmF0aW9uJywgJ2xpbmUtdGhyb3VnaCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tTdGF0dXMuYXBwZW5kQ2hpbGQodGFza0luY29tcGxldGUpO1xuICAgIH1cblxuICAgIHRhc2tTdGF0dXMub25jbGljayA9IHRvZ2dsZUNvbXBsZXRlLmJpbmQodGhpcywgdGFza0luY29tcGxldGUsIHRhc2tTdGF0dXMsIHRpdGxlRGlzcGxheSwgdGFzayk7XG5cbiAgICBpZiAodGFzay5kZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IGV4cGFuZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZXhwYW5kVGFzay5zcmMgPSAnLi9pbWFnZXMvZXhwYW5kLXRhc2suc3ZnJztcbiAgICAgICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQoZXhwYW5kVGFzayk7XG4gICAgICAgIGV4cGFuZFRhc2sudGl0bGUgPSAnQ2xpY2sgdGFzayB0byBzaG93IGRldGFpbHMnO1xuICAgICAgICBleHBhbmRUYXNrLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC10YXNrJyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRhc2tSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tSaWdodC5jbGFzc0xpc3QuYWRkKCd0YXNrLXJpZ2h0Jyk7XG4gICAgdGFza01haW4uYXBwZW5kQ2hpbGQodGFza1JpZ2h0KTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGR1ZURhdGVEaXNwbGF5KTtcblxuICAgIGlmICghdGFzay5kdWVEYXRlKSB7XG4gICAgICAgIGR1ZURhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gJ05vIER1ZSBEYXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBkdWVEYXRlRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmlvcml0eVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXN0YXR1cycpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eVN0YXR1cyk7XG5cbiAgICBjb25zdCBub1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbm9Qcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci11bmZpbGxlZC5zdmcnO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci1maWxsZWQuc3ZnJztcblxuICAgIGlmICh0YXNrLmlzSW1wb3J0YW50KSB7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcmlvcml0eVN0YXR1cy5hcHBlbmRDaGlsZChub1ByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgnbm8tcHJpb3JpdHknKTtcbiAgICB9XG5cbiAgICBwcmlvcml0eVN0YXR1cy5vbmNsaWNrID0gdG9nZ2xlUHJpb3JpdHkuYmluZCh0aGlzLCBwcmlvcml0eVN0YXR1cywgdGFzayk7XG5cbiAgICBjb25zdCB0YXNrRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGFza0VkaXRCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0LWJ0bicpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZCh0YXNrRWRpdEJ0bik7XG5cbiAgICBjb25zdCBlZGl0QnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWRpdEJ0bkltZy5zcmMgPSAnLi9pbWFnZXMvZWRpdC5zdmcnO1xuICAgIHRhc2tFZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRCdG5JbWcpO1xuXG4gICAgdGFza0VkaXRCdG4ub25jbGljayA9IGVkaXRUYXNrLmJpbmQodGhpcywgdGFzaywgdGFza0RpdiwgdG9Eb0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0YXNrRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZS1idG4nKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ0bik7XG5cbiAgICBjb25zdCBkZWxldGVCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVCdG5JbWcuc3JjID0gJy4vaW1hZ2VzL3RyYXNoLnN2Zyc7XG4gICAgdGFza0RlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVCdG5JbWcpO1xuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gbXlUYXNrTGlzdC5pbmRleE9mKHRhc2spO1xuXG4gICAgdGFza0RlbGV0ZUJ0bi5vbmNsaWNrID0gZGVsZXRlVGFzay5iaW5kKHRoaXMsIGN1cnJlbnRJbmRleCk7XG5cbiAgICB0YXNrRGl2Lm9uY2xpY2sgPSBkaXNwbGF5RGV0YWlscy5iaW5kKHRoaXMsIHRhc2ssIHRhc2tEaXYpO1xufVxuXG4vLyBmdW5jdGlvbiB0byBjbGVhciBkaXNwbGF5IFxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCkge1xuICAgIHdoaWxlICh0b0RvQ29udGFpbmVyLmZpcnN0Q2hpbGQgJiYgdG9Eb0NvbnRhaW5lci5maXJzdENoaWxkLmNsYXNzTmFtZSAhPSAnZWRpdC10YXNrLWZvcm0nKSB7XG4gICAgICAgIHRvRG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9Eb0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSh0b0RvQ29udGFpbmVyLmxhc3RDaGlsZCAmJiB0b0RvQ29udGFpbmVyLmxhc3RDaGlsZC5jbGFzc05hbWUgIT0gJ2VkaXQtdGFzay1mb3JtJykge1xuICAgICAgICB0b0RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvRG9Db250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuLy8gZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB0YXNrIGxpc3QgZGlzcGxheVxuZnVuY3Rpb24gdXBkYXRlVGFza0Rpc3BsYXkoKSB7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgY3VycmVudERhdGU7XG4gICAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICAgICAgY3VycmVudERhdGUgPSBgJHt5ZWFyfS0wJHttb250aH0tJHtkYXl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50RGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09ICdBbGwgVGFza3MnKSB7XG4gICAgICAgIG15VGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFzayk7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSAnVG9kYXknKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzVG9kYXkgPSBteVRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suZHVlRGF0ZSA9PT0gY3VycmVudERhdGUpO1xuICAgICAgICB0YXNrc1RvZGF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09ICdUaGlzIFdlZWsnKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXZWVrRW5kID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpICsgNyk7XG5cbiAgICAgICAgY29uc3QgdGFza3NUaGlzV2VlayA9IG15VGFza0xpc3QuZmlsdGVyKHRhc2sgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGVBcnJheSA9IHRhc2suZHVlRGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgY29uc3QgdGFza1llYXIgPSB0YXNrRGF0ZUFycmF5WzBdO1xuICAgICAgICAgICAgY29uc3QgdGFza01vbnRoID0gcGFyc2VJbnQodGFza0RhdGVBcnJheVsxXSwgMTApIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXkgPSB0YXNrRGF0ZUFycmF5WzJdO1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrWWVhciwgdGFza01vbnRoLCB0YXNrRGF5KTtcbiAgICAgICAgICAgIHJldHVybiAodGFza0RhdGUgPj0gZGF0ZSAmJiB0YXNrRGF0ZSA8PSBjdXJyZW50V2Vla0VuZCkgfHwgKHRhc2suZHVlRGF0ZSA9PT0gY3VycmVudERhdGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0YXNrc1RoaXNXZWVrLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09ICdJbXBvcnRhbnQnKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzSW1wb3J0YW50ID0gbXlUYXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLmlzSW1wb3J0YW50KTtcbiAgICAgICAgdGFza3NJbXBvcnRhbnQuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhc2tzQnlQcm9qZWN0ID0gbXlUYXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLnRhc2tQcm9qZWN0ID09PSBjb250ZW50SGVhZGVyLnRleHRDb250ZW50KTtcbiAgICAgICAgdGFza3NCeVByb2plY3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpbmsnKTtcbiAgICBwcm9qZWN0TGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TmFtZURpc3BsYXkudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdExpbmsuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVEaXNwbGF5KTtcblxuICAgIGNvbnN0IHByb2plY3RMaW5rQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RMaW5rQnRucy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpbmstYnRucycpO1xuICAgIHByb2plY3RMaW5rLmFwcGVuZENoaWxkKHByb2plY3RMaW5rQnRucyk7XG5cbiAgICBjb25zdCBwcm9qZWN0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdC1idG4nKTtcbiAgICBwcm9qZWN0TGlua0J0bnMuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRCdG4pO1xuXG4gICAgY29uc3QgcHJvamVjdEVkaXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9qZWN0RWRpdEltZy5zcmMgPSAnLi9pbWFnZXMvZWRpdC5zdmcnO1xuICAgIHByb2plY3RFZGl0QnRuLmFwcGVuZENoaWxkKHByb2plY3RFZGl0SW1nKTtcblxuICAgIGNvbnN0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlLWJ0bicpO1xuICAgIHByb2plY3RMaW5rQnRucy5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnRuKTtcblxuICAgIGNvbnN0IHByb2plY3REZWxldGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9qZWN0RGVsZXRlSW1nLnNyYyA9ICcuL2ltYWdlcy90cmFzaC5zdmcnO1xuICAgIHByb2plY3REZWxldGVCdG4uYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUltZyk7XG5cbiAgICB0YWJzLnB1c2gocHJvamVjdExpbmspO1xuXG4gICAgcHJvamVjdExpbmsub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgICAgIGRpc3BsYXlUYXNrQnRuKCk7XG4gICAgICAgIGhpZ2hsaWdodFNlbGVjdGVkKHByb2plY3RMaW5rKTtcbiAgICAgICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3RMaW5rLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0RWRpdEJ0bi5vbmNsaWNrID0gZWRpdFByb2plY3QuYmluZCh0aGlzLCBwcm9qZWN0LCBwcm9qZWN0TGluaywgcHJvamVjdExpbmtDb250YWluZXIsIHByb2plY3ROYW1lRGlzcGxheSwgY29udGVudEhlYWRlcik7XG5cbiAgICBwcm9qZWN0RGVsZXRlQnRuLm9uY2xpY2sgPSBkZWxldGVQcm9qZWN0LmJpbmQodGhpcywgcHJvamVjdCwgcHJvamVjdExpbmssIHByb2plY3RMaW5rQ29udGFpbmVyLCBjb250ZW50SGVhZGVyKTtcbn1cblxuLy8gQ0FOIFJFTU9WRSBUSElTIE9OQ0UgRklOSVNIRUQgQU5EIERFTEVURSBURVNUIFBST0pFQ1RTXG5mdW5jdGlvbiBpbml0aWFsUHJvamVjdERpc3BsYXkoKSB7XG4gICAgbXlQcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xufVxuXG4vLyBmdW5jdGlvbnMgdG8gZGlzcGxheSBhcHByb3ByaWF0ZSB0YXNrcyBmb3IgY2hvc2VuIHRhYlxuZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tzKCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBkaXNwbGF5VGFza0J0bigpO1xuICAgIGhpZ2hsaWdodFNlbGVjdGVkKGFsbFRhc2tzKTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ0FsbCBUYXNrcyc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RheSgpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQodG9kYXkpO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgY2xvc2VUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGhpc1dlZWsoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGhpZ2hsaWdodFNlbGVjdGVkKHRoaXNXZWVrKTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbXBvcnRhbnQoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGhpZ2hsaWdodFNlbGVjdGVkKGltcG9ydGFudCk7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgY2xvc2VUYXNrRm9ybSgpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5QWxsVGFza3MsIGRpc3BsYXlUb2RheSwgZGlzcGxheVRoaXNXZWVrLCBkaXNwbGF5SW1wb3J0YW50LCBjbG9zZVRhc2tGb3JtLCB1cGRhdGVUYXNrRGlzcGxheSwgY2xvc2VQcm9qZWN0Rm9ybSwgaW5pdGlhbFByb2plY3REaXNwbGF5LCBkaXNwbGF5UHJvamVjdCB9IiwiaW1wb3J0IHsgaWdub3JlRXZlbnQgfSBmcm9tIFwiLi9lZGl0VGFza1wiO1xuaW1wb3J0IHsgbXlQcm9qZWN0TGlzdCB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlBbGxUYXNrcywgdXBkYXRlVGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBteVRhc2tMaXN0IH0gZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG5jb25zdCBlZGl0UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1uYW1lLWlucHV0Jyk7XG5jb25zdCBlZGl0UHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3Qtc3VibWl0LWJ0bicpO1xuY29uc3QgZWRpdFByb2plY3RDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LWNhbmNlbC1idG4nKTtcblxuZnVuY3Rpb24gb3BlbkVkaXRQcm9qZWN0Rm9ybSgpIHtcbiAgICBlZGl0UHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRWRpdFByb2plY3RGb3JtKCkge1xuICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIHNob3dIaWRkZW5Qcm9qZWN0KCkge1xuICAgIGNvbnN0IG9wZW5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRpbmctcHJvamVjdCcpO1xuICAgIG9wZW5Qcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmctcHJvamVjdCcpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUVkaXRQcm9qZWN0Rm9ybSgpIHtcbiAgICBlZGl0UHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjbGVhckVkaXRQcm9qZWN0Rm9ybSgpO1xuICAgIHNob3dIaWRkZW5Qcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIGF1dG9maWxsUHJvamVjdEluZm8ocHJvamVjdCkge1xuICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gcHJvamVjdC5uYW1lO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0LCBwcm9qZWN0TGluaywgcHJvamVjdExpbmtDb250YWluZXIsIHByb2plY3ROYW1lRGlzcGxheSwgY29udGVudEhlYWRlcikge1xuICAgIGlnbm9yZUV2ZW50KCk7XG5cbiAgICBpZiAoZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09ICcnIHx8IGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy1wcm9qZWN0Jyk7XG4gICAgICAgIG9wZW5FZGl0UHJvamVjdEZvcm0oKTtcbiAgICAgICAgcHJvamVjdExpbmtDb250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRQcm9qZWN0Rm9ybSwgcHJvamVjdExpbmspO1xuICAgICAgICBhdXRvZmlsbFByb2plY3RJbmZvKHByb2plY3QpO1xuICAgICAgICBlZGl0UHJvamVjdE5hbWVJbnB1dC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dIaWRkZW5Qcm9qZWN0KCk7XG4gICAgICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmctcHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0TGlua0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFByb2plY3RGb3JtLCBwcm9qZWN0TGluayk7XG4gICAgICAgIGF1dG9maWxsUHJvamVjdEluZm8ocHJvamVjdCk7XG4gICAgICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgZWRpdFByb2plY3RTdWJtaXRCdG4ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCFlZGl0UHJvamVjdEZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBlZGl0UHJvamVjdEZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gZWRpdFByb2plY3ROYW1lSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0Lm5hbWUgPSBlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lRGlzcGxheS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbG9zZUVkaXRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWRpdFByb2plY3RDYW5jZWxCdG4ub25jbGljayA9IGNsb3NlRWRpdFByb2plY3RGb3JtO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QsIHByb2plY3RMaW5rLCBwcm9qZWN0TGlua0NvbnRhaW5lciwgY29udGVudEhlYWRlcikge1xuICAgIGlnbm9yZUV2ZW50KCk7XG5cbiAgICBmb3IgKGxldCBpID0gbXlUYXNrTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCB0YXNrID0gbXlUYXNrTGlzdFtpXTtcbiAgICAgICAgaWYgKHRhc2sudGFza1Byb2plY3QgPT09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgbXlUYXNrTGlzdC5zcGxpY2UobXlUYXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvamVjdC5uYW1lID09PSBjb250ZW50SGVhZGVyLnRleHRDb250ZW50KSB7XG4gICAgICAgIGRpc3BsYXlBbGxUYXNrcygpO1xuICAgIH1cblxuICAgIG15UHJvamVjdExpc3Quc3BsaWNlKG15UHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgcHJvamVjdExpbmtDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdExpbmspO1xufVxuXG5leHBvcnQgeyBlZGl0UHJvamVjdCwgZGVsZXRlUHJvamVjdCB9IiwiaW1wb3J0IHsgbXlUYXNrTGlzdCB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcbmltcG9ydCB7IHVwZGF0ZVRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5jb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWZvcm0nKTtcbmNvbnN0IGVkaXRUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUnKTtcbmNvbnN0IGVkaXREZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kZXRhaWxzJyk7XG5jb25zdCBlZGl0RHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZHVlLWRhdGUnKTtcbmNvbnN0IGVkaXRJc0ltcG9ydGFudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtaXMtaW1wb3J0YW50Jyk7XG5jb25zdCBlZGl0U3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtc3VibWl0LWJ0bicpO1xuY29uc3QgZWRpdENhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNhbmNlbC1idG4nKTtcblxuLy8gZnVuY3Rpb24gdG8gaWdub3JlIHRhc2tEaXYgb25jbGljayBldmVudCB3aGVuIGJ1dHRvbnMgd2l0aGluIHRoZSB0YXNrRGl2IGFyZSBjbGlja2VkXG5mdW5jdGlvbiBpZ25vcmVFdmVudChlKSB7XG4gICAgaWYgKCFlKSB7XG4gICAgICAgIGUgPSB3aW5kb3cuZXZlbnQ7XG4gICAgfVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlKHN0YXR1cywgc3RhdHVzQ29udGFpbmVyLCB0aXRsZSwgdGFzaykge1xuICAgIGlnbm9yZUV2ZW50KCk7XG5cbiAgICBpZiAoc3RhdHVzLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ3Rhc2staW5jb21wbGV0ZScpIHtcbiAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2staW5jb21wbGV0ZScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhdHVzQ29udGFpbmVyLmxhc3RDaGlsZCk7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLWZpbGxlZC5zdmcnO1xuICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlKTtcblxuICAgICAgICB0aXRsZS5zdHlsZS5zZXRQcm9wZXJ0eSgndGV4dC1kZWNvcmF0aW9uJywgJ2xpbmUtdGhyb3VnaCcpO1xuXG4gICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2staW5jb21wbGV0ZScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhdHVzQ29udGFpbmVyLmxhc3RDaGlsZCk7XG5cbiAgICAgICAgY29uc3QgdGFza0luY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGFza0luY29tcGxldGUuc3JjID0gJy4vaW1hZ2VzL2NpcmNsZS11bmZpbGxlZC5zdmcnO1xuICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luY29tcGxldGUpO1xuXG4gICAgICAgIHRpdGxlLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbm9uZScpO1xuXG4gICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJpb3JpdHkoc3RhdHVzQ29udGFpbmVyLCB0YXNrKSB7XG4gICAgaWdub3JlRXZlbnQoKTtcblxuICAgIGlmIChzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnZhbHVlID09PSAncHJpb3JpdHktc3RhdHVzIHByaW9yaXR5Jykge1xuICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgncHJpb3JpdHknKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ25vLXByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCBub1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIG5vUHJpb3JpdHkuc3JjID0gJy4vaW1hZ2VzL3N0YXItdW5maWxsZWQuc3ZnJztcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vUHJpb3JpdHkpO1xuXG4gICAgICAgIHRhc2suaXNJbXBvcnRhbnQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudmFsdWUgPT09ICdwcmlvcml0eS1zdGF0dXMgbm8tcHJpb3JpdHknKSB7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCduby1wcmlvcml0eScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgncHJpb3JpdHknKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXR1c0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHByaW9yaXR5LnNyYyA9ICcuL2ltYWdlcy9zdGFyLWZpbGxlZC5zdmcnO1xuICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgIHRhc2suaXNJbXBvcnRhbnQgPSB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRUYXNrRm9ybSgpIHtcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZWRpdFRpdGxlSW5wdXQuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJFZGl0VGFza0Zvcm0oKSB7XG4gICAgZWRpdFRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICBlZGl0RGV0YWlsc0lucHV0LnZhbHVlID0gJyc7XG4gICAgZWRpdER1ZURhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGVkaXRJc0ltcG9ydGFudElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2hvd0hpZGRlblRhc2soKSB7XG4gICAgY29uc3Qgb3BlblRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdGluZy10YXNrJyk7XG4gICAgb3BlblRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy10YXNrJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRWRpdFRhc2tGb3JtKCkge1xuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyRWRpdFRhc2tGb3JtKCk7XG4gICAgc2hvd0hpZGRlblRhc2soKTtcbn1cblxuZnVuY3Rpb24gYXV0b2ZpbGxUYXNrSW5mbyh0YXNrKSB7XG4gICAgZWRpdFRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIGVkaXREdWVEYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgZWRpdElzSW1wb3J0YW50SW5wdXQuY2hlY2tlZCA9IHRhc2suaXNJbXBvcnRhbnQ7XG4gICAgaWYgKHRhc2suZGV0YWlscykge1xuICAgICAgICBlZGl0RGV0YWlsc0lucHV0LnZhbHVlID0gdGFzay5kZXRhaWxzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVkaXREZXRhaWxzSW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRhc2tEaXYsIHRvRG9Db250YWluZXIpIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgaWYgKGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXRhc2snKTtcbiAgICAgICAgb3BlbkVkaXRUYXNrRm9ybSgpO1xuICAgICAgICB0b0RvQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza0Zvcm0sIHRhc2tEaXYpO1xuICAgICAgICBhdXRvZmlsbFRhc2tJbmZvKHRhc2spO1xuICAgICAgICBlZGl0VGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dIaWRkZW5UYXNrKCk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy10YXNrJyk7XG4gICAgICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrRm9ybSwgdGFza0Rpdik7XG4gICAgICAgIGF1dG9maWxsVGFza0luZm8odGFzayk7XG4gICAgICAgIGVkaXRUaXRsZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgZWRpdFN1Ym1pdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIWVkaXRUYXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGVkaXRUYXNrRm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFzay50aXRsZSA9IGVkaXRUaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGFzay5kZXRhaWxzID0gZWRpdERldGFpbHNJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRhc2suZHVlRGF0ZSA9IGVkaXREdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gZWRpdElzSW1wb3J0YW50SW5wdXQuY2hlY2tlZDtcblxuICAgICAgICAgICAgY2xvc2VFZGl0VGFza0Zvcm0oKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGVkaXRDYW5jZWxCdG4ub25jbGljayA9IGNsb3NlRWRpdFRhc2tGb3JtO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGluZGV4KSB7XG4gICAgaWdub3JlRXZlbnQoKTtcbiAgICBteVRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbn1cblxuZXhwb3J0IHsgdG9nZ2xlQ29tcGxldGUsIHRvZ2dsZVByaW9yaXR5LCBlZGl0VGFzaywgZGVsZXRlVGFzaywgaWdub3JlRXZlbnQgfSIsImltcG9ydCB7IGRpc3BsYXlBbGxUYXNrcywgZGlzcGxheVRvZGF5LCBkaXNwbGF5VGhpc1dlZWssIGRpc3BsYXlJbXBvcnRhbnQsIGluaXRpYWxQcm9qZWN0RGlzcGxheSB9IGZyb20gJy4vZGlzcGxheSc7XG5cbmNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC10YXNrcycpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbmNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtd2VlaycpO1xuY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydGFudCcpO1xuY29uc3QgdGFicyA9IFthbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnRdO1xuXG5pbml0aWFsUHJvamVjdERpc3BsYXkoKTtcbmRpc3BsYXlBbGxUYXNrcygpO1xuXG5hbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBbGxUYXNrcyk7XG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlUb2RheSk7XG50aGlzV2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlUaGlzV2Vlayk7XG5pbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5SW1wb3J0YW50KTtcblxuZXhwb3J0IHsgYWxsVGFza3MsIHRvZGF5LCB0aGlzV2VlaywgaW1wb3J0YW50LCB0YWJzIH1cblxuLy8gVE8gRE9cblxuLy8gQUREIENIQVJBQ1RFUiBMSU1JVCBUTyBGT1JNIEZJRUxEU1xuXG4vLyBNQVlCRSBDSEFOR0UgRURJVCBTVUJNSVQgQlVUVE9OIFRPIFNBWSBcIlVQREFURVwiXG5cbi8vIFVQREFURSBGT1JNIFVJIEZPUiBJTlBVVFMgQU5EIElOUFVUIEJVVFRPTiBTSVpFU1xuXG4vLyBNQVlCRSBJTlZFUlQgQ09MT1JTIE9OIEVESVQgQU5EIFRSQVNIIEJVVFRPTlMgT04gU0lERUJBUlxuXG4vLyBNQVlCRSBBREQgRFJBRyBUTyBSRU9SREVSIFBST0pFQ1RTPz8/Pz9cblxuLy8gTUFZQkUgQUREIFdIRVJFIFlPVSBDQU4gU09SVCBCWSBEVUUgREFURT8/Pz9cblxuLy8gTU9WRSBUQVNLIFRPIEJPVFRPTSBJRiBDT01QTEVURUQ/Pz9cblxuXG5cbi8vIEZJTklTSCBVSVxuXG4vLyBBREQgTU9CSUxFIFNVUFBPUlRcblxuLy8gQUREIExPQ0FMIFNUT1JBR0UiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9