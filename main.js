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
const testTask2 = task('This task is due today', 'This task has details', '2023-04-24', false, false);
const testTask3 = task('This task is important', 'This task also has details', '2023-04-29', true, false);
const testTask4 = task('This task is due next week', '', '2023-05-03', false, false);
const testTask5 = task('This task is due next week but within 7 days', '', '2023-04-30', false, false);
const testTask6 = task('This task is due exactly 7 days from now', '', '2023-05-01', true, false);
const testTask7 = task('This task is due a day after 7 days', '', '2023-05-02', false, false);
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
}

function closeTaskForm() {
    taskForm.style.display = 'none';
    (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.clearTaskForm)();
}

cancelBtn.onclick = closeTaskForm;

// open/close the form to add new projects

function openProjectForm() {
    projectForm.style.display = 'block';
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
    } else {
        showHiddenProject();
        projectLink.classList.toggle('editing-project');
        projectLinkContainer.insertBefore(editProjectForm, projectLink);
        autofillProjectInfo(project);
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
    } else {
        showHiddenTask();
        taskDiv.classList.toggle('editing-task');
        toDoContainer.insertBefore(editTaskForm, taskDiv);
        autofillTaskInfo(task);
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

// ADD FUNCTIONALITY TO TASK EDIT AND DELETE BUTTONS!!!!!


// ADD AUTO FOCUS TO FORMS

// ADD PLACEHOLDERS ON FORMS

// ADD CHARACTER LIMIT TO FORM FIELDS

// ADD NOTE SAYING U CAN CLICK TASK TO SHOW DETAILS

// MAYBE CHANGE EDIT SUBMIT BUTTON TO SAY "UPDATE"

// UPDATE FORM UI FOR INPUTS AND INPUT BUTTON SIZES

// MAYBE INVERT COLORS ON EDIT AND TRASH BUTTONS ON SIDEBAR

// MAYBE ADD DRAG TO REORDER PROJECTS?????

// MAYBE ADD WHERE YOU CAN SORT BY DUE DATE????




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDJEQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMERBQWlCO0FBQ3JCLElBQUksMkRBQWlCO0FBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSW9IOztBQUVwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUFxQjtBQUNyQix5REFBZTs7QUFFZixtQ0FBbUMscURBQWU7QUFDbEQsZ0NBQWdDLGtEQUFZO0FBQzVDLG1DQUFtQyxxREFBZTtBQUNsRCxvQ0FBb0Msc0RBQWdCOztBQUVDOztBQUVyRDs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7Ozs7OztVQ2hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXRUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb3NlUHJvamVjdEZvcm0sIGRpc3BsYXlQcm9qZWN0IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XG5jb25zdCBwcm9qZWN0U3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc3VibWl0LWJ0bicpO1xuY29uc3QgbXlQcm9qZWN0TGlzdCA9IFtdO1xuXG5jb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+ICh7IG5hbWUgfSk7XG5cbmNvbnN0IHRlc3RQcm9qZWN0ID0gcHJvamVjdCgnUHJvZ3JhbW1pbmcnKTtcbmNvbnN0IHRlc3RQcm9qZWN0MiA9IHByb2plY3QoJ0hvbWUnKTtcbmNvbnN0IHRlc3RQcm9qZWN0MyA9IHByb2plY3QoJ1JlYWRpbmcnKTtcbm15UHJvamVjdExpc3QucHVzaCh0ZXN0UHJvamVjdCwgdGVzdFByb2plY3QyLCB0ZXN0UHJvamVjdDMpO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QobmFtZSk7XG4gICAgbXlQcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGRpc3BsYXlQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjbGVhclByb2plY3RGb3JtKCkge1xuICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJztcbn1cblxucHJvamVjdFN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgcHJvamVjdEZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRQcm9qZWN0KCk7XG4gICAgICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBteVByb2plY3RMaXN0LCBjbGVhclByb2plY3RGb3JtIH0iLCJpbXBvcnQgeyBjbG9zZVRhc2tGb3JtLCB1cGRhdGVUYXNrRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IG15UHJvamVjdExpc3QgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5cbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1oZWFkaW5nJyk7XG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5jb25zdCBkZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpO1xuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJyk7XG5jb25zdCBpc0ltcG9ydGFudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLWltcG9ydGFudCcpO1xuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKTtcbmNvbnN0IG15VGFza0xpc3QgPSBbXTtcblxuY29uc3QgdGFzayA9ICh0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgaXNJbXBvcnRhbnQsIGlzQ29tcGxldGUsIHRhc2tQcm9qZWN0KSA9PiAoeyB0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgaXNJbXBvcnRhbnQsIGlzQ29tcGxldGUsIHRhc2tQcm9qZWN0IH0pO1xuXG5jb25zdCB0ZXN0VGFzayA9IHRhc2soJ1RoaXMgdGFzayBpcyBkdWUgdGhpcyB3ZWVrJywgJ0RldGFpbHMgb2YgdGhlIHRhc2snLCAnMjAyMy0wNC0yNycsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazIgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIHRvZGF5JywgJ1RoaXMgdGFzayBoYXMgZGV0YWlscycsICcyMDIzLTA0LTI0JywgZmFsc2UsIGZhbHNlKTtcbmNvbnN0IHRlc3RUYXNrMyA9IHRhc2soJ1RoaXMgdGFzayBpcyBpbXBvcnRhbnQnLCAnVGhpcyB0YXNrIGFsc28gaGFzIGRldGFpbHMnLCAnMjAyMy0wNC0yOScsIHRydWUsIGZhbHNlKTtcbmNvbnN0IHRlc3RUYXNrNCA9IHRhc2soJ1RoaXMgdGFzayBpcyBkdWUgbmV4dCB3ZWVrJywgJycsICcyMDIzLTA1LTAzJywgZmFsc2UsIGZhbHNlKTtcbmNvbnN0IHRlc3RUYXNrNSA9IHRhc2soJ1RoaXMgdGFzayBpcyBkdWUgbmV4dCB3ZWVrIGJ1dCB3aXRoaW4gNyBkYXlzJywgJycsICcyMDIzLTA0LTMwJywgZmFsc2UsIGZhbHNlKTtcbmNvbnN0IHRlc3RUYXNrNiA9IHRhc2soJ1RoaXMgdGFzayBpcyBkdWUgZXhhY3RseSA3IGRheXMgZnJvbSBub3cnLCAnJywgJzIwMjMtMDUtMDEnLCB0cnVlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazcgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIGEgZGF5IGFmdGVyIDcgZGF5cycsICcnLCAnMjAyMy0wNS0wMicsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazggPSB0YXNrKCdUaGlzIHRhc2sgaGFzIG5vIGR1ZSBkYXRlJywgJycsICcnLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s5ID0gdGFzaygnUFJPR1JBTU1JTkcgVEFTSycsICcnLCAnJywgZmFsc2UsIGZhbHNlLCAnUHJvZ3JhbW1pbmcnKTtcbmNvbnN0IHRlc3RUYXNrMTAgPSB0YXNrKCdQUk9HUkFNTUlORyBUQVNLIDInLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ1Byb2dyYW1taW5nJyk7XG5jb25zdCB0ZXN0VGFzazExID0gdGFzaygnSE9NRSBUQVNLJywgJycsICcnLCBmYWxzZSwgZmFsc2UsICdIb21lJyk7XG5jb25zdCB0ZXN0VGFzazEyID0gdGFzaygnSE9NRSBUQVNLIDInLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ0hvbWUnKTtcbmNvbnN0IHRlc3RUYXNrMTMgPSB0YXNrKCdSRUFESU5HIFRBU0snLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ1JlYWRpbmcnKTtcbmNvbnN0IHRlc3RUYXNrMTQgPSB0YXNrKCdSRUFESU5HIFRBU0sgMicsICcnLCAnJywgZmFsc2UsIGZhbHNlLCAnUmVhZGluZycpO1xuXG5teVRhc2tMaXN0LnB1c2godGVzdFRhc2ssIHRlc3RUYXNrMiwgdGVzdFRhc2szLCB0ZXN0VGFzazQsIHRlc3RUYXNrNSwgdGVzdFRhc2s2LCB0ZXN0VGFzazcsIHRlc3RUYXNrOCwgdGVzdFRhc2s5LCB0ZXN0VGFzazEwLCB0ZXN0VGFzazExLCB0ZXN0VGFzazEyLCB0ZXN0VGFzazEzLCB0ZXN0VGFzazE0KTtcblxuZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZGV0YWlscyA9IGRldGFpbHNJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGlzSW1wb3J0YW50ID0gaXNJbXBvcnRhbnRJbnB1dC5jaGVja2VkO1xuICAgIGNvbnN0IGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICBsZXQgdGFza1Byb2plY3QgPSAnJztcblxuICAgIG15UHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gcHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICB0YXNrUHJvamVjdCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2sodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlLCB0YXNrUHJvamVjdCk7XG4gICAgbXlUYXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0Zvcm0oKSB7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGRldGFpbHNJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGlzSW1wb3J0YW50SW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xufVxuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZFRhc2tGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBhZGRUYXNrRm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFRhc2soKTtcbiAgICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IG15VGFza0xpc3QsIGNsZWFyVGFza0Zvcm0gfSIsImltcG9ydCB7IGFsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudCwgdGFicyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgbXlUYXNrTGlzdCwgY2xlYXJUYXNrRm9ybSB9IGZyb20gJy4vY3JlYXRlVGFzayc7XG5pbXBvcnQgeyB0b2dnbGVDb21wbGV0ZSwgdG9nZ2xlUHJpb3JpdHksIGVkaXRUYXNrLCBkZWxldGVUYXNrIH0gZnJvbSAnLi9lZGl0VGFzayc7XG5pbXBvcnQgeyBteVByb2plY3RMaXN0LCBjbGVhclByb2plY3RGb3JtIH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0JztcbmltcG9ydCB7IGVkaXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH0gZnJvbSAnLi9lZGl0UHJvamVjdCc7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuY29uc3QgY29udGVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWhlYWRpbmcnKTtcbmNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1mb3JtJyk7XG5jb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ0bicpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYnRuJyk7XG5jb25zdCBwcm9qZWN0Q2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FuY2VsLWJ0bicpO1xuY29uc3QgcHJvamVjdExpbmtDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saW5rcycpO1xuY29uc3QgZWRpdFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1mb3JtJyk7XG5cbi8vIGhpZ2hsaWdodCB0aGUgc2VsZWN0ZWQgbmF2aWdhdGlvbiB0YWJcbmZ1bmN0aW9uIGhpZ2hsaWdodFNlbGVjdGVkKHNlbGVjdGVkVGFiKSB7XG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG5cbiAgICBzZWxlY3RlZFRhYi5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xufVxuXG4vLyBvcGVuL2Nsb3NlIHRoZSBmb3JtIHRvIGFkZCBuZXcgdGFza3NcbmZ1bmN0aW9uIG9wZW5UYXNrRm9ybSgpIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyVGFza0Zvcm0oKTtcbn1cblxuY2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZVRhc2tGb3JtO1xuXG4vLyBvcGVuL2Nsb3NlIHRoZSBmb3JtIHRvIGFkZCBuZXcgcHJvamVjdHNcblxuZnVuY3Rpb24gb3BlblByb2plY3RGb3JtKCkge1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJQcm9qZWN0Rm9ybSgpO1xufVxuXG5hZGRQcm9qZWN0QnRuLm9uY2xpY2sgPSBvcGVuUHJvamVjdEZvcm07XG5wcm9qZWN0Q2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZVByb2plY3RGb3JtO1xuXG5cbi8vIGNyZWF0ZSBhbmQgZGlzcGxheSB0aGUgYnV0dG9uIHRvIGFkZCBuZXcgdGFza3NcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrQnRuKCkge1xuICAgIGNvbnN0IHRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnRuJyk7XG5cbiAgICBjb25zdCBidG5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJ0bkltYWdlLnNyYyA9ICcuL2ltYWdlcy9wbHVzLnN2Zyc7XG5cbiAgICBjb25zdCBidG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuVGV4dC50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgICB0YXNrQnRuLm9uY2xpY2sgPSBvcGVuVGFza0Zvcm07XG5cbiAgICB0YXNrQnRuLmFwcGVuZENoaWxkKGJ0bkltYWdlKTtcbiAgICB0YXNrQnRuLmFwcGVuZENoaWxkKGJ0blRleHQpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRhc2tCdG4pO1xufVxuXG4vLyByZW1vdmUgdGhlIGJ1dHRvbiB0byBhZGQgbmV3IHRhc2sgKGZvciBwYWdlcyB3aGVyZSB5b3UgY2Fubm90IGFkZCBuZXcgdGFzaylcbmZ1bmN0aW9uIHJlbW92ZVRhc2tCdG4oKSB7XG4gICAgaWYgKG1haW5Db250ZW50Lmxhc3RDaGlsZC5jbGFzc05hbWUgPT09ICd0YXNrLWJ0bicpIHtcbiAgICAgICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgdGFzayBkZXRhaWxzXG5mdW5jdGlvbiBkaXNwbGF5RGV0YWlscyh0YXNrLCB0YXNrRGl2KSB7XG4gICAgaWYgKHRhc2tEaXYubGFzdENoaWxkLmNsYXNzTmFtZSAhPSAnZGV0YWlscy1kaXNwbGF5JyAmJiB0YXNrLmRldGFpbHMpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1kaXNwbGF5Jyk7XG4gICAgICAgIGRldGFpbHNEaXNwbGF5LnRleHRDb250ZW50ID0gdGFzay5kZXRhaWxzO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRldGFpbHNEaXNwbGF5KTtcbiAgICB9IGVsc2UgaWYgKHRhc2tEaXYubGFzdENoaWxkLmNsYXNzTmFtZSA9PT0gJ2RldGFpbHMtZGlzcGxheScgJiYgdGFzay5kZXRhaWxzKSB7XG4gICAgICAgIHRhc2tEaXYucmVtb3ZlQ2hpbGQodGFza0Rpdi5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gZGlzcGxheSBhIHNpbmd1bGFyIHRhc2tcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2spIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICBjb25zdCB0YXNrTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tNYWluLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbWFpbicpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza01haW4pO1xuXG4gICAgY29uc3QgdGFza0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTGVmdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxlZnQnKTtcbiAgICB0YXNrTWFpbi5hcHBlbmRDaGlsZCh0YXNrTGVmdCk7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1N0YXR1cy5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cycpO1xuICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRhc2tTdGF0dXMpO1xuXG4gICAgY29uc3QgdGFza0luY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0YXNrSW5jb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWluY29tcGxldGUnKTtcbiAgICB0YXNrSW5jb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLXVuZmlsbGVkLnN2Zyc7XG5cbiAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0YXNrQ29tcGxldGUuc3JjID0gJy4vaW1hZ2VzL2NpcmNsZS1maWxsZWQuc3ZnJztcblxuICAgIGNvbnN0IHRpdGxlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGl0bGVEaXNwbGF5KTtcblxuICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICB0YXNrU3RhdHVzLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZSk7XG4gICAgdGl0bGVEaXNwbGF5LnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1N0YXR1cy5hcHBlbmRDaGlsZCh0YXNrSW5jb21wbGV0ZSk7XG4gICAgfVxuXG4gICAgdGFza1N0YXR1cy5vbmNsaWNrID0gdG9nZ2xlQ29tcGxldGUuYmluZCh0aGlzLCB0YXNrSW5jb21wbGV0ZSwgdGFza1N0YXR1cywgdGl0bGVEaXNwbGF5LCB0YXNrKTtcbiAgICBcbiAgICBjb25zdCB0YXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrUmlnaHQuY2xhc3NMaXN0LmFkZCgndGFzay1yaWdodCcpO1xuICAgIHRhc2tNYWluLmFwcGVuZENoaWxkKHRhc2tSaWdodCk7XG5cbiAgICBjb25zdCBkdWVEYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZChkdWVEYXRlRGlzcGxheSk7XG5cbiAgICBpZiAoIXRhc2suZHVlRGF0ZSkge1xuICAgICAgICBkdWVEYXRlRGlzcGxheS50ZXh0Q29udGVudCA9ICdObyBEdWUgRGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZHVlRGF0ZURpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpb3JpdHlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcmlvcml0eVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1zdGF0dXMnKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTdGF0dXMpO1xuXG4gICAgY29uc3Qgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5vUHJpb3JpdHkuc3JjID0gJy4vaW1hZ2VzL3N0YXItdW5maWxsZWQuc3ZnJztcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJpb3JpdHkuc3JjID0gJy4vaW1hZ2VzL3N0YXItZmlsbGVkLnN2Zyc7XG5cbiAgICBpZiAodGFzay5pc0ltcG9ydGFudCkge1xuICAgICAgICBwcmlvcml0eVN0YXR1cy5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuYXBwZW5kQ2hpbGQobm9Qcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ25vLXByaW9yaXR5Jyk7XG4gICAgfVxuXG4gICAgcHJpb3JpdHlTdGF0dXMub25jbGljayA9IHRvZ2dsZVByaW9yaXR5LmJpbmQodGhpcywgcHJpb3JpdHlTdGF0dXMsIHRhc2spO1xuXG4gICAgY29uc3QgdGFza0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRhc2tFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWRpdC1idG4nKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQodGFza0VkaXRCdG4pO1xuXG4gICAgY29uc3QgZWRpdEJ0bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGVkaXRCdG5JbWcuc3JjID0gJy4vaW1hZ2VzL2VkaXQuc3ZnJztcbiAgICB0YXNrRWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0QnRuSW1nKTtcblxuICAgIHRhc2tFZGl0QnRuLm9uY2xpY2sgPSBlZGl0VGFzay5iaW5kKHRoaXMsIHRhc2ssIHRhc2tEaXYsIHRvRG9Db250YWluZXIpO1xuXG4gICAgY29uc3QgdGFza0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tEZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUtYnRuJyk7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xuXG4gICAgY29uc3QgZGVsZXRlQnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZGVsZXRlQnRuSW1nLnNyYyA9ICcuL2ltYWdlcy90cmFzaC5zdmcnO1xuICAgIHRhc2tEZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuSW1nKTtcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IG15VGFza0xpc3QuaW5kZXhPZih0YXNrKTtcblxuICAgIHRhc2tEZWxldGVCdG4ub25jbGljayA9IGRlbGV0ZVRhc2suYmluZCh0aGlzLCBjdXJyZW50SW5kZXgpO1xuXG4gICAgdGFza0Rpdi5vbmNsaWNrID0gZGlzcGxheURldGFpbHMuYmluZCh0aGlzLCB0YXNrLCB0YXNrRGl2KTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gY2xlYXIgZGlzcGxheSBcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcbiAgICB3aGlsZSAodG9Eb0NvbnRhaW5lci5maXJzdENoaWxkICYmIHRvRG9Db250YWluZXIuZmlyc3RDaGlsZC5jbGFzc05hbWUgIT0gJ2VkaXQtdGFzay1mb3JtJykge1xuICAgICAgICB0b0RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvRG9Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUodG9Eb0NvbnRhaW5lci5sYXN0Q2hpbGQgJiYgdG9Eb0NvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NOYW1lICE9ICdlZGl0LXRhc2stZm9ybScpIHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b0RvQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdGFzayBsaXN0IGRpc3BsYXlcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tEaXNwbGF5KCkge1xuICAgIGNsZWFyRGlzcGxheSgpO1xuXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IGN1cnJlbnREYXRlO1xuICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICAgIGN1cnJlbnREYXRlID0gYCR7eWVhcn0tMCR7bW9udGh9LSR7ZGF5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudERhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgIH1cblxuICAgIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSAnQWxsIFRhc2tzJykge1xuICAgICAgICBteVRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ1RvZGF5Jykge1xuICAgICAgICBjb25zdCB0YXNrc1RvZGF5ID0gbXlUYXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLmR1ZURhdGUgPT09IGN1cnJlbnREYXRlKTtcbiAgICAgICAgdGFza3NUb2RheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSAnVGhpcyBXZWVrJykge1xuICAgICAgICBjb25zdCBjdXJyZW50V2Vla0VuZCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSArIDcpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tzVGhpc1dlZWsgPSBteVRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlQXJyYXkgPSB0YXNrLmR1ZURhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tZZWFyID0gdGFza0RhdGVBcnJheVswXTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tNb250aCA9IHBhcnNlSW50KHRhc2tEYXRlQXJyYXlbMV0sIDEwKSAtIDE7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF5ID0gdGFza0RhdGVBcnJheVsyXTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFza1llYXIsIHRhc2tNb250aCwgdGFza0RheSk7XG4gICAgICAgICAgICByZXR1cm4gKHRhc2tEYXRlID49IGRhdGUgJiYgdGFza0RhdGUgPD0gY3VycmVudFdlZWtFbmQpIHx8ICh0YXNrLmR1ZURhdGUgPT09IGN1cnJlbnREYXRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFza3NUaGlzV2Vlay5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSAnSW1wb3J0YW50Jykge1xuICAgICAgICBjb25zdCB0YXNrc0ltcG9ydGFudCA9IG15VGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5pc0ltcG9ydGFudCk7XG4gICAgICAgIHRhc2tzSW1wb3J0YW50LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YXNrc0J5UHJvamVjdCA9IG15VGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay50YXNrUHJvamVjdCA9PT0gY29udGVudEhlYWRlci50ZXh0Q29udGVudCk7XG4gICAgICAgIHRhc2tzQnlQcm9qZWN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saW5rJyk7XG4gICAgcHJvamVjdExpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdE5hbWVEaXNwbGF5LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIHByb2plY3RMaW5rLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGlzcGxheSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlua0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TGlua0J0bnMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saW5rLWJ0bnMnKTtcbiAgICBwcm9qZWN0TGluay5hcHBlbmRDaGlsZChwcm9qZWN0TGlua0J0bnMpO1xuXG4gICAgY29uc3QgcHJvamVjdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVkaXQtYnRuJyk7XG4gICAgcHJvamVjdExpbmtCdG5zLmFwcGVuZENoaWxkKHByb2plY3RFZGl0QnRuKTtcblxuICAgIGNvbnN0IHByb2plY3RFZGl0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvamVjdEVkaXRJbWcuc3JjID0gJy4vaW1hZ2VzL2VkaXQuc3ZnJztcbiAgICBwcm9qZWN0RWRpdEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEltZyk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS1idG4nKTtcbiAgICBwcm9qZWN0TGlua0J0bnMuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvamVjdERlbGV0ZUltZy5zcmMgPSAnLi9pbWFnZXMvdHJhc2guc3ZnJztcbiAgICBwcm9qZWN0RGVsZXRlQnRuLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVJbWcpO1xuXG4gICAgdGFicy5wdXNoKHByb2plY3RMaW5rKTtcblxuICAgIHByb2plY3RMaW5rLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVtb3ZlVGFza0J0bigpO1xuICAgICAgICBkaXNwbGF5VGFza0J0bigpO1xuICAgICAgICBoaWdobGlnaHRTZWxlY3RlZChwcm9qZWN0TGluayk7XG4gICAgICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0TGluay5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgICAgICBjbG9zZVRhc2tGb3JtKCk7XG4gICAgfVxuXG4gICAgcHJvamVjdEVkaXRCdG4ub25jbGljayA9IGVkaXRQcm9qZWN0LmJpbmQodGhpcywgcHJvamVjdCwgcHJvamVjdExpbmssIHByb2plY3RMaW5rQ29udGFpbmVyLCBwcm9qZWN0TmFtZURpc3BsYXksIGNvbnRlbnRIZWFkZXIpO1xuXG4gICAgcHJvamVjdERlbGV0ZUJ0bi5vbmNsaWNrID0gZGVsZXRlUHJvamVjdC5iaW5kKHRoaXMsIHByb2plY3QsIHByb2plY3RMaW5rLCBwcm9qZWN0TGlua0NvbnRhaW5lciwgY29udGVudEhlYWRlcik7XG59XG5cbi8vIENBTiBSRU1PVkUgVEhJUyBPTkNFIEZJTklTSEVEIEFORCBERUxFVEUgVEVTVCBQUk9KRUNUU1xuZnVuY3Rpb24gaW5pdGlhbFByb2plY3REaXNwbGF5KCkge1xuICAgIG15UHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcbn1cblxuLy8gZnVuY3Rpb25zIHRvIGRpc3BsYXkgYXBwcm9wcmlhdGUgdGFza3MgZm9yIGNob3NlbiB0YWJcbmZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgZGlzcGxheVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZChhbGxUYXNrcyk7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgY2xvc2VUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kYXkoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGhpZ2hsaWdodFNlbGVjdGVkKHRvZGF5KTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRoaXNXZWVrKCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZCh0aGlzV2Vlayk7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnO1xuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgY2xvc2VUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW1wb3J0YW50KCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZChpbXBvcnRhbnQpO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheUFsbFRhc2tzLCBkaXNwbGF5VG9kYXksIGRpc3BsYXlUaGlzV2VlaywgZGlzcGxheUltcG9ydGFudCwgY2xvc2VUYXNrRm9ybSwgdXBkYXRlVGFza0Rpc3BsYXksIGNsb3NlUHJvamVjdEZvcm0sIGluaXRpYWxQcm9qZWN0RGlzcGxheSwgZGlzcGxheVByb2plY3QgfSIsImltcG9ydCB7IGlnbm9yZUV2ZW50IH0gZnJvbSBcIi4vZWRpdFRhc2tcIjtcbmltcG9ydCB7IG15UHJvamVjdExpc3QgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MsIHVwZGF0ZVRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgbXlUYXNrTGlzdCB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcblxuY29uc3QgZWRpdFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1mb3JtJyk7XG5jb25zdCBlZGl0UHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtbmFtZS1pbnB1dCcpO1xuY29uc3QgZWRpdFByb2plY3RTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LXN1Ym1pdC1idG4nKTtcbmNvbnN0IGVkaXRQcm9qZWN0Q2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1jYW5jZWwtYnRuJyk7XG5cbmZ1bmN0aW9uIG9wZW5FZGl0UHJvamVjdEZvcm0oKSB7XG4gICAgZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbGVhckVkaXRQcm9qZWN0Rm9ybSgpIHtcbiAgICBlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBzaG93SGlkZGVuUHJvamVjdCgpIHtcbiAgICBjb25zdCBvcGVuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0aW5nLXByb2plY3QnKTtcbiAgICBvcGVuUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXByb2plY3QnKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VFZGl0UHJvamVjdEZvcm0oKSB7XG4gICAgZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJFZGl0UHJvamVjdEZvcm0oKTtcbiAgICBzaG93SGlkZGVuUHJvamVjdCgpO1xufVxuXG5mdW5jdGlvbiBhdXRvZmlsbFByb2plY3RJbmZvKHByb2plY3QpIHtcbiAgICBlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IHByb2plY3QubmFtZTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3QocHJvamVjdCwgcHJvamVjdExpbmssIHByb2plY3RMaW5rQ29udGFpbmVyLCBwcm9qZWN0TmFtZURpc3BsYXksIGNvbnRlbnRIZWFkZXIpIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgaWYgKGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnJyB8fCBlZGl0UHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmctcHJvamVjdCcpO1xuICAgICAgICBvcGVuRWRpdFByb2plY3RGb3JtKCk7XG4gICAgICAgIHByb2plY3RMaW5rQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0UHJvamVjdEZvcm0sIHByb2plY3RMaW5rKTtcbiAgICAgICAgYXV0b2ZpbGxQcm9qZWN0SW5mbyhwcm9qZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93SGlkZGVuUHJvamVjdCgpO1xuICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdExpbmtDb250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRQcm9qZWN0Rm9ybSwgcHJvamVjdExpbmspO1xuICAgICAgICBhdXRvZmlsbFByb2plY3RJbmZvKHByb2plY3QpO1xuICAgIH1cblxuICAgIGVkaXRQcm9qZWN0U3VibWl0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICghZWRpdFByb2plY3RGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgZWRpdFByb2plY3RGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5uYW1lID09PSBjb250ZW50SGVhZGVyLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvamVjdC5uYW1lID0gZWRpdFByb2plY3ROYW1lSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZURpc3BsYXkudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2xvc2VFZGl0UHJvamVjdEZvcm0oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVkaXRQcm9qZWN0Q2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZUVkaXRQcm9qZWN0Rm9ybTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0LCBwcm9qZWN0TGluaywgcHJvamVjdExpbmtDb250YWluZXIsIGNvbnRlbnRIZWFkZXIpIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IG15VGFza0xpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgdGFzayA9IG15VGFza0xpc3RbaV07XG4gICAgICAgIGlmICh0YXNrLnRhc2tQcm9qZWN0ID09PSBwcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgICAgIG15VGFza0xpc3Quc3BsaWNlKG15VGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3QubmFtZSA9PT0gY29udGVudEhlYWRlci50ZXh0Q29udGVudCkge1xuICAgICAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgICB9XG5cbiAgICBteVByb2plY3RMaXN0LnNwbGljZShteVByb2plY3RMaXN0LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgIHByb2plY3RMaW5rQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RMaW5rKTtcbn1cblxuZXhwb3J0IHsgZWRpdFByb2plY3QsIGRlbGV0ZVByb2plY3QgfSIsImltcG9ydCB7IG15VGFza0xpc3QgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgeyB1cGRhdGVUYXNrRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1mb3JtJyk7XG5jb25zdCBlZGl0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlJyk7XG5jb25zdCBlZGl0RGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGV0YWlscycpO1xuY29uc3QgZWRpdER1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWR1ZS1kYXRlJyk7XG5jb25zdCBlZGl0SXNJbXBvcnRhbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWlzLWltcG9ydGFudCcpO1xuY29uc3QgZWRpdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXN1Ym1pdC1idG4nKTtcbmNvbnN0IGVkaXRDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1jYW5jZWwtYnRuJyk7XG5cbi8vIGZ1bmN0aW9uIHRvIGlnbm9yZSB0YXNrRGl2IG9uY2xpY2sgZXZlbnQgd2hlbiBidXR0b25zIHdpdGhpbiB0aGUgdGFza0RpdiBhcmUgY2xpY2tlZFxuZnVuY3Rpb24gaWdub3JlRXZlbnQoZSkge1xuICAgIGlmICghZSkge1xuICAgICAgICBlID0gd2luZG93LmV2ZW50O1xuICAgIH1cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0ZShzdGF0dXMsIHN0YXR1c0NvbnRhaW5lciwgdGl0bGUsIHRhc2spIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgaWYgKHN0YXR1cy5jbGFzc0xpc3QudmFsdWUgPT09ICd0YXNrLWluY29tcGxldGUnKSB7XG4gICAgICAgIHN0YXR1cy5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrLWluY29tcGxldGUnKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXR1c0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrQ29tcGxldGUuc3JjID0gJy4vaW1hZ2VzL2NpcmNsZS1maWxsZWQuc3ZnJztcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZSk7XG5cbiAgICAgICAgdGl0bGUuc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKTtcblxuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXR1cy5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrLWluY29tcGxldGUnKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXR1c0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tJbmNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHRhc2tJbmNvbXBsZXRlLnNyYyA9ICcuL2ltYWdlcy9jaXJjbGUtdW5maWxsZWQuc3ZnJztcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbmNvbXBsZXRlKTtcblxuICAgICAgICB0aXRsZS5zdHlsZS5zZXRQcm9wZXJ0eSgndGV4dC1kZWNvcmF0aW9uJywgJ25vbmUnKTtcblxuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVByaW9yaXR5KHN0YXR1c0NvbnRhaW5lciwgdGFzaykge1xuICAgIGlnbm9yZUV2ZW50KCk7XG5cbiAgICBpZiAoc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ3ByaW9yaXR5LXN0YXR1cyBwcmlvcml0eScpIHtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCduby1wcmlvcml0eScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhdHVzQ29udGFpbmVyLmxhc3RDaGlsZCk7XG5cbiAgICAgICAgY29uc3Qgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBub1ByaW9yaXR5LnNyYyA9ICcuL2ltYWdlcy9zdGFyLXVuZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChub1ByaW9yaXR5KTtcblxuICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnZhbHVlID09PSAncHJpb3JpdHktc3RhdHVzIG5vLXByaW9yaXR5Jykge1xuICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tcHJpb3JpdHknKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci1maWxsZWQuc3ZnJztcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5FZGl0VGFza0Zvcm0oKSB7XG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbGVhckVkaXRUYXNrRm9ybSgpIHtcbiAgICBlZGl0VGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGVkaXREZXRhaWxzSW5wdXQudmFsdWUgPSAnJztcbiAgICBlZGl0RHVlRGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgZWRpdElzSW1wb3J0YW50SW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzaG93SGlkZGVuVGFzaygpIHtcbiAgICBjb25zdCBvcGVuVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0aW5nLXRhc2snKTtcbiAgICBvcGVuVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXRhc2snKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VFZGl0VGFza0Zvcm0oKSB7XG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJFZGl0VGFza0Zvcm0oKTtcbiAgICBzaG93SGlkZGVuVGFzaygpO1xufVxuXG5mdW5jdGlvbiBhdXRvZmlsbFRhc2tJbmZvKHRhc2spIHtcbiAgICBlZGl0VGl0bGVJbnB1dC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgZWRpdER1ZURhdGVJbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICBlZGl0SXNJbXBvcnRhbnRJbnB1dC5jaGVja2VkID0gdGFzay5pc0ltcG9ydGFudDtcbiAgICBpZiAodGFzay5kZXRhaWxzKSB7XG4gICAgICAgIGVkaXREZXRhaWxzSW5wdXQudmFsdWUgPSB0YXNrLmRldGFpbHM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWRpdERldGFpbHNJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZWRpdFRhc2sodGFzaywgdGFza0RpdiwgdG9Eb0NvbnRhaW5lcikge1xuICAgIGlnbm9yZUV2ZW50KCk7XG5cbiAgICBpZiAoZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmctdGFzaycpO1xuICAgICAgICBvcGVuRWRpdFRhc2tGb3JtKCk7XG4gICAgICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrRm9ybSwgdGFza0Rpdik7XG4gICAgICAgIGF1dG9maWxsVGFza0luZm8odGFzayk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0hpZGRlblRhc2soKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXRhc2snKTtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tGb3JtLCB0YXNrRGl2KTtcbiAgICAgICAgYXV0b2ZpbGxUYXNrSW5mbyh0YXNrKTtcbiAgICB9XG5cbiAgICBlZGl0U3VibWl0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICghZWRpdFRhc2tGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgZWRpdFRhc2tGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLnRpdGxlID0gZWRpdFRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0YXNrLmRldGFpbHMgPSBlZGl0RGV0YWlsc0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGFzay5kdWVEYXRlID0gZWRpdER1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRhc2suaXNJbXBvcnRhbnQgPSBlZGl0SXNJbXBvcnRhbnRJbnB1dC5jaGVja2VkO1xuXG4gICAgICAgICAgICBjbG9zZUVkaXRUYXNrRm9ybSgpO1xuICAgICAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZWRpdENhbmNlbEJ0bi5vbmNsaWNrID0gY2xvc2VFZGl0VGFza0Zvcm07XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soaW5kZXgpIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuICAgIG15VGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xufVxuXG5leHBvcnQgeyB0b2dnbGVDb21wbGV0ZSwgdG9nZ2xlUHJpb3JpdHksIGVkaXRUYXNrLCBkZWxldGVUYXNrLCBpZ25vcmVFdmVudCB9IiwiaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzLCBkaXNwbGF5VG9kYXksIGRpc3BsYXlUaGlzV2VlaywgZGlzcGxheUltcG9ydGFudCwgaW5pdGlhbFByb2plY3REaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5JztcblxuY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXRhc2tzJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpO1xuY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy13ZWVrJyk7XG5jb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW50Jyk7XG5jb25zdCB0YWJzID0gW2FsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudF07XG5cbmluaXRpYWxQcm9qZWN0RGlzcGxheSgpO1xuZGlzcGxheUFsbFRhc2tzKCk7XG5cbmFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFsbFRhc2tzKTtcbnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRvZGF5KTtcbnRoaXNXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRoaXNXZWVrKTtcbmltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlJbXBvcnRhbnQpO1xuXG5leHBvcnQgeyBhbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnQsIHRhYnMgfVxuXG4vLyBUTyBET1xuXG4vLyBBREQgRlVOQ1RJT05BTElUWSBUTyBUQVNLIEVESVQgQU5EIERFTEVURSBCVVRUT05TISEhISFcblxuXG4vLyBBREQgQVVUTyBGT0NVUyBUTyBGT1JNU1xuXG4vLyBBREQgUExBQ0VIT0xERVJTIE9OIEZPUk1TXG5cbi8vIEFERCBDSEFSQUNURVIgTElNSVQgVE8gRk9STSBGSUVMRFNcblxuLy8gQUREIE5PVEUgU0FZSU5HIFUgQ0FOIENMSUNLIFRBU0sgVE8gU0hPVyBERVRBSUxTXG5cbi8vIE1BWUJFIENIQU5HRSBFRElUIFNVQk1JVCBCVVRUT04gVE8gU0FZIFwiVVBEQVRFXCJcblxuLy8gVVBEQVRFIEZPUk0gVUkgRk9SIElOUFVUUyBBTkQgSU5QVVQgQlVUVE9OIFNJWkVTXG5cbi8vIE1BWUJFIElOVkVSVCBDT0xPUlMgT04gRURJVCBBTkQgVFJBU0ggQlVUVE9OUyBPTiBTSURFQkFSXG5cbi8vIE1BWUJFIEFERCBEUkFHIFRPIFJFT1JERVIgUFJPSkVDVFM/Pz8/P1xuXG4vLyBNQVlCRSBBREQgV0hFUkUgWU9VIENBTiBTT1JUIEJZIERVRSBEQVRFPz8/P1xuXG5cblxuXG4vLyBGSU5JU0ggVUlcblxuLy8gQUREIE1PQklMRSBTVVBQT1JUXG5cbi8vIEFERCBMT0NBTCBTVE9SQUdFIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==