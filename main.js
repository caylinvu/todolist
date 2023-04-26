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

const testTask = task('This task is due this week', 'Details of the task', '2023-04-29', false, false);
const testTask2 = task('This task is due today', 'This task has details', '2023-04-26', false, false);
const testTask3 = task('This task is important', 'This task also has details', '2023-06-22', true, false);
const testTask4 = task('This task is due next week', '', '2023-05-05', false, false);
const testTask5 = task('This task is due next week but within 7 days', '', '2023-05-01', false, false);
const testTask6 = task('This task is due exactly 7 days from now', '', '2023-05-03', true, false);
const testTask7 = task('This task is due a day after 7 days', '', '2023-05-04', false, false);
const testTask8 = task('This task has no due date', '', '', false, false);
const testTask9 = task('PROGRAMMING TASK', '', '', false, false, 'Programming');
const testTask10 = task('PROGRAMMING TASK 2', '', '2023-07-21', false, false, 'Programming');
const testTask11 = task('HOME TASK', '', '', false, false, 'Home');
const testTask12 = task('HOME TASK 2', '', '2023-06-01', false, false, 'Home');
const testTask13 = task('READING TASK', '', '', false, false, 'Reading');
const testTask14 = task('READING TASK 2', '', '2023-09-10', false, false, 'Reading');

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
    // taskIncomplete.classList.add('task-incomplete');
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
        taskIncomplete.classList.add('task-incomplete');
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
    // const isCompleteArray = [];
    for (let i = _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.length - 1; i >= 0; i--) {
        const task = _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList[i];
        if (task.isComplete) {
            _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.splice(_createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.indexOf(task), 1);
        }
    }

    _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.sort((a, b) => {
        let x;
        let y;

        if (!a.dueDate) {
            x = new Date('100000');
        } else {
            x = new Date(a.dueDate);
        }

        if (!b.dueDate) {
            y = new Date('100000');
        } else {
            y = new Date(b.dueDate);
        }

        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
    });

    _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.push.apply(_createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList, _editTask__WEBPACK_IMPORTED_MODULE_2__.isCompleteArray);

    // move complete tasks to the bottom of list
    // for (let i = myTaskList.length - 1; i >= 0; i--) {
    //     const task = myTaskList[i];
    //     if (task.isComplete) {
    //         myTaskList.push(myTaskList.splice(myTaskList.indexOf(task), 1)[0]);
    //     }
    // }
    
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
/* harmony export */   "isCompleteArray": () => (/* binding */ isCompleteArray),
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
const isCompleteArray = [];

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

        isCompleteArray.push(_createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList.splice(_createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList.indexOf(task), 1)[0]);

        (0,_display__WEBPACK_IMPORTED_MODULE_1__.updateTaskDisplay)();

    } else {
        status.classList.toggle('task-incomplete');
        statusContainer.removeChild(statusContainer.lastChild);

        const taskIncomplete = document.createElement('img');
        taskIncomplete.src = './images/circle-unfilled.svg';
        statusContainer.appendChild(taskIncomplete);

        title.style.setProperty('text-decoration', 'none');

        task.isComplete = false;

        isCompleteArray.splice(isCompleteArray.indexOf(task), 1);

        (0,_display__WEBPACK_IMPORTED_MODULE_1__.updateTaskDisplay)();
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

// MAYBE ADD WHERE YOU CAN SORT BY DUE DATE????
// SORT BY DUE DATE AT BEGINNING OF UPDATE DISPLAY FUNCTION, THEN PUSH COMPLETED TASKS TO BOTTOM, THEN UPDATE DISPLAY

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9zZVByb2plY3RGb3JtLCBkaXNwbGF5UHJvamVjdCB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG5jb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xuY29uc3QgcHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXN1Ym1pdC1idG4nKTtcbmNvbnN0IG15UHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiAoeyBuYW1lIH0pO1xuXG5jb25zdCB0ZXN0UHJvamVjdCA9IHByb2plY3QoJ1Byb2dyYW1taW5nJyk7XG5jb25zdCB0ZXN0UHJvamVjdDIgPSBwcm9qZWN0KCdIb21lJyk7XG5jb25zdCB0ZXN0UHJvamVjdDMgPSBwcm9qZWN0KCdSZWFkaW5nJyk7XG5teVByb2plY3RMaXN0LnB1c2godGVzdFByb2plY3QsIHRlc3RQcm9qZWN0MiwgdGVzdFByb2plY3QzKTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KG5hbWUpO1xuICAgIG15UHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBkaXNwbGF5UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybSgpIHtcbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG59XG5cbnByb2plY3RTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghcHJvamVjdEZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHByb2plY3RGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgICAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59KTtcblxuZXhwb3J0IHsgbXlQcm9qZWN0TGlzdCwgY2xlYXJQcm9qZWN0Rm9ybSB9IiwiaW1wb3J0IHsgY2xvc2VUYXNrRm9ybSwgdXBkYXRlVGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBteVByb2plY3RMaXN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuXG5jb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaGVhZGluZycpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuY29uc3QgZGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpO1xuY29uc3QgaXNJbXBvcnRhbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1pbXBvcnRhbnQnKTtcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG5jb25zdCBteVRhc2tMaXN0ID0gW107XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlLCB0YXNrUHJvamVjdCkgPT4gKHsgdGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlLCB0YXNrUHJvamVjdCB9KTtcblxuY29uc3QgdGVzdFRhc2sgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIHRoaXMgd2VlaycsICdEZXRhaWxzIG9mIHRoZSB0YXNrJywgJzIwMjMtMDQtMjknLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2syID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSB0b2RheScsICdUaGlzIHRhc2sgaGFzIGRldGFpbHMnLCAnMjAyMy0wNC0yNicsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazMgPSB0YXNrKCdUaGlzIHRhc2sgaXMgaW1wb3J0YW50JywgJ1RoaXMgdGFzayBhbHNvIGhhcyBkZXRhaWxzJywgJzIwMjMtMDYtMjInLCB0cnVlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazQgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIG5leHQgd2VlaycsICcnLCAnMjAyMy0wNS0wNScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazUgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIG5leHQgd2VlayBidXQgd2l0aGluIDcgZGF5cycsICcnLCAnMjAyMy0wNS0wMScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazYgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIGV4YWN0bHkgNyBkYXlzIGZyb20gbm93JywgJycsICcyMDIzLTA1LTAzJywgdHJ1ZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s3ID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSBhIGRheSBhZnRlciA3IGRheXMnLCAnJywgJzIwMjMtMDUtMDQnLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s4ID0gdGFzaygnVGhpcyB0YXNrIGhhcyBubyBkdWUgZGF0ZScsICcnLCAnJywgZmFsc2UsIGZhbHNlKTtcbmNvbnN0IHRlc3RUYXNrOSA9IHRhc2soJ1BST0dSQU1NSU5HIFRBU0snLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ1Byb2dyYW1taW5nJyk7XG5jb25zdCB0ZXN0VGFzazEwID0gdGFzaygnUFJPR1JBTU1JTkcgVEFTSyAyJywgJycsICcyMDIzLTA3LTIxJywgZmFsc2UsIGZhbHNlLCAnUHJvZ3JhbW1pbmcnKTtcbmNvbnN0IHRlc3RUYXNrMTEgPSB0YXNrKCdIT01FIFRBU0snLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ0hvbWUnKTtcbmNvbnN0IHRlc3RUYXNrMTIgPSB0YXNrKCdIT01FIFRBU0sgMicsICcnLCAnMjAyMy0wNi0wMScsIGZhbHNlLCBmYWxzZSwgJ0hvbWUnKTtcbmNvbnN0IHRlc3RUYXNrMTMgPSB0YXNrKCdSRUFESU5HIFRBU0snLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ1JlYWRpbmcnKTtcbmNvbnN0IHRlc3RUYXNrMTQgPSB0YXNrKCdSRUFESU5HIFRBU0sgMicsICcnLCAnMjAyMy0wOS0xMCcsIGZhbHNlLCBmYWxzZSwgJ1JlYWRpbmcnKTtcblxubXlUYXNrTGlzdC5wdXNoKHRlc3RUYXNrLCB0ZXN0VGFzazIsIHRlc3RUYXNrMywgdGVzdFRhc2s0LCB0ZXN0VGFzazUsIHRlc3RUYXNrNiwgdGVzdFRhc2s3LCB0ZXN0VGFzazgsIHRlc3RUYXNrOSwgdGVzdFRhc2sxMCwgdGVzdFRhc2sxMSwgdGVzdFRhc2sxMiwgdGVzdFRhc2sxMywgdGVzdFRhc2sxNCk7XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBpc0ltcG9ydGFudCA9IGlzSW1wb3J0YW50SW5wdXQuY2hlY2tlZDtcbiAgICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgbGV0IHRhc2tQcm9qZWN0ID0gJyc7XG5cbiAgICBteVByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgdGFza1Byb2plY3QgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBpc0ltcG9ydGFudCwgaXNDb21wbGV0ZSwgdGFza1Byb2plY3QpO1xuICAgIG15VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIHJldHVybiBuZXdUYXNrO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICBkZXRhaWxzSW5wdXQudmFsdWUgPSAnJztcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICBpc0ltcG9ydGFudElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRUYXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgYWRkVGFza0Zvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRUYXNrKCk7XG4gICAgICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBteVRhc2tMaXN0LCBjbGVhclRhc2tGb3JtIH0iLCJpbXBvcnQgeyBhbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnQsIHRhYnMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IG15VGFza0xpc3QsIGNsZWFyVGFza0Zvcm0gfSBmcm9tICcuL2NyZWF0ZVRhc2snO1xuaW1wb3J0IHsgdG9nZ2xlQ29tcGxldGUsIHRvZ2dsZVByaW9yaXR5LCBlZGl0VGFzaywgZGVsZXRlVGFzaywgaXNDb21wbGV0ZUFycmF5IH0gZnJvbSAnLi9lZGl0VGFzayc7XG5pbXBvcnQgeyBteVByb2plY3RMaXN0LCBjbGVhclByb2plY3RGb3JtIH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0JztcbmltcG9ydCB7IGVkaXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH0gZnJvbSAnLi9lZGl0UHJvamVjdCc7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuY29uc3QgY29udGVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWhlYWRpbmcnKTtcbmNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1mb3JtJyk7XG5jb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ0bicpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYnRuJyk7XG5jb25zdCBwcm9qZWN0Q2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FuY2VsLWJ0bicpO1xuY29uc3QgcHJvamVjdExpbmtDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saW5rcycpO1xuY29uc3QgZWRpdFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1mb3JtJyk7XG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5jb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xuXG4vLyBoaWdobGlnaHQgdGhlIHNlbGVjdGVkIG5hdmlnYXRpb24gdGFiXG5mdW5jdGlvbiBoaWdobGlnaHRTZWxlY3RlZChzZWxlY3RlZFRhYikge1xuICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgc2VsZWN0ZWRUYWIuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbn1cblxuLy8gb3Blbi9jbG9zZSB0aGUgZm9ybSB0byBhZGQgbmV3IHRhc2tzXG5mdW5jdGlvbiBvcGVuVGFza0Zvcm0oKSB7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGl0bGVJbnB1dC5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVRhc2tGb3JtKCkge1xuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJUYXNrRm9ybSgpO1xufVxuXG5jYW5jZWxCdG4ub25jbGljayA9IGNsb3NlVGFza0Zvcm07XG5cbi8vIG9wZW4vY2xvc2UgdGhlIGZvcm0gdG8gYWRkIG5ldyBwcm9qZWN0c1xuXG5mdW5jdGlvbiBvcGVuUHJvamVjdEZvcm0oKSB7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJQcm9qZWN0Rm9ybSgpO1xufVxuXG5hZGRQcm9qZWN0QnRuLm9uY2xpY2sgPSBvcGVuUHJvamVjdEZvcm07XG5wcm9qZWN0Q2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZVByb2plY3RGb3JtO1xuXG5cbi8vIGNyZWF0ZSBhbmQgZGlzcGxheSB0aGUgYnV0dG9uIHRvIGFkZCBuZXcgdGFza3NcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrQnRuKCkge1xuICAgIGNvbnN0IHRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnRuJyk7XG5cbiAgICBjb25zdCBidG5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJ0bkltYWdlLnNyYyA9ICcuL2ltYWdlcy9wbHVzLnN2Zyc7XG5cbiAgICBjb25zdCBidG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuVGV4dC50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgICB0YXNrQnRuLm9uY2xpY2sgPSBvcGVuVGFza0Zvcm07XG5cbiAgICB0YXNrQnRuLmFwcGVuZENoaWxkKGJ0bkltYWdlKTtcbiAgICB0YXNrQnRuLmFwcGVuZENoaWxkKGJ0blRleHQpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRhc2tCdG4pO1xufVxuXG4vLyByZW1vdmUgdGhlIGJ1dHRvbiB0byBhZGQgbmV3IHRhc2sgKGZvciBwYWdlcyB3aGVyZSB5b3UgY2Fubm90IGFkZCBuZXcgdGFzaylcbmZ1bmN0aW9uIHJlbW92ZVRhc2tCdG4oKSB7XG4gICAgaWYgKG1haW5Db250ZW50Lmxhc3RDaGlsZC5jbGFzc05hbWUgPT09ICd0YXNrLWJ0bicpIHtcbiAgICAgICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgdGFzayBkZXRhaWxzXG5mdW5jdGlvbiBkaXNwbGF5RGV0YWlscyh0YXNrLCB0YXNrRGl2KSB7XG4gICAgaWYgKHRhc2tEaXYubGFzdENoaWxkLmNsYXNzTmFtZSAhPSAnZGV0YWlscy1kaXNwbGF5JyAmJiB0YXNrLmRldGFpbHMpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1kaXNwbGF5Jyk7XG4gICAgICAgIGRldGFpbHNEaXNwbGF5LnRleHRDb250ZW50ID0gdGFzay5kZXRhaWxzO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRldGFpbHNEaXNwbGF5KTtcbiAgICB9IGVsc2UgaWYgKHRhc2tEaXYubGFzdENoaWxkLmNsYXNzTmFtZSA9PT0gJ2RldGFpbHMtZGlzcGxheScgJiYgdGFzay5kZXRhaWxzKSB7XG4gICAgICAgIHRhc2tEaXYucmVtb3ZlQ2hpbGQodGFza0Rpdi5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gZGlzcGxheSBhIHNpbmd1bGFyIHRhc2tcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2spIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICBjb25zdCB0YXNrTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tNYWluLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbWFpbicpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza01haW4pO1xuXG4gICAgY29uc3QgdGFza0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTGVmdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxlZnQnKTtcbiAgICB0YXNrTWFpbi5hcHBlbmRDaGlsZCh0YXNrTGVmdCk7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1N0YXR1cy5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cycpO1xuICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRhc2tTdGF0dXMpO1xuXG4gICAgY29uc3QgdGFza0luY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAvLyB0YXNrSW5jb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWluY29tcGxldGUnKTtcbiAgICB0YXNrSW5jb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLXVuZmlsbGVkLnN2Zyc7XG5cbiAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0YXNrQ29tcGxldGUuc3JjID0gJy4vaW1hZ2VzL2NpcmNsZS1maWxsZWQuc3ZnJztcblxuICAgIGNvbnN0IHRpdGxlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1kaXNwbGF5Jyk7XG4gICAgdGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICB0YXNrTGVmdC5hcHBlbmRDaGlsZCh0aXRsZURpc3BsYXkpO1xuXG4gICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgICB0YXNrU3RhdHVzLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZSk7XG4gICAgICAgIHRpdGxlRGlzcGxheS5zdHlsZS5zZXRQcm9wZXJ0eSgndGV4dC1kZWNvcmF0aW9uJywgJ2xpbmUtdGhyb3VnaCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tTdGF0dXMuYXBwZW5kQ2hpbGQodGFza0luY29tcGxldGUpO1xuICAgICAgICB0YXNrSW5jb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWluY29tcGxldGUnKTtcbiAgICB9XG5cbiAgICB0YXNrU3RhdHVzLm9uY2xpY2sgPSB0b2dnbGVDb21wbGV0ZS5iaW5kKHRoaXMsIHRhc2tJbmNvbXBsZXRlLCB0YXNrU3RhdHVzLCB0aXRsZURpc3BsYXksIHRhc2spO1xuXG4gICAgaWYgKHRhc2suZGV0YWlscykge1xuICAgICAgICBjb25zdCBleHBhbmRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGV4cGFuZFRhc2suc3JjID0gJy4vaW1hZ2VzL2V4cGFuZC10YXNrLnN2Zyc7XG4gICAgICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKGV4cGFuZFRhc2spO1xuICAgICAgICBleHBhbmRUYXNrLnRpdGxlID0gJ0NsaWNrIHRhc2sgdG8gc2hvdyBkZXRhaWxzJztcbiAgICAgICAgZXhwYW5kVGFzay5jbGFzc0xpc3QuYWRkKCdleHBhbmQtdGFzaycpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB0YXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrUmlnaHQuY2xhc3NMaXN0LmFkZCgndGFzay1yaWdodCcpO1xuICAgIHRhc2tNYWluLmFwcGVuZENoaWxkKHRhc2tSaWdodCk7XG5cbiAgICBjb25zdCBkdWVEYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZChkdWVEYXRlRGlzcGxheSk7XG5cbiAgICBpZiAoIXRhc2suZHVlRGF0ZSkge1xuICAgICAgICBkdWVEYXRlRGlzcGxheS50ZXh0Q29udGVudCA9ICdObyBEdWUgRGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZHVlRGF0ZURpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpb3JpdHlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcmlvcml0eVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1zdGF0dXMnKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTdGF0dXMpO1xuXG4gICAgY29uc3Qgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5vUHJpb3JpdHkuc3JjID0gJy4vaW1hZ2VzL3N0YXItdW5maWxsZWQuc3ZnJztcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJpb3JpdHkuc3JjID0gJy4vaW1hZ2VzL3N0YXItZmlsbGVkLnN2Zyc7XG5cbiAgICBpZiAodGFzay5pc0ltcG9ydGFudCkge1xuICAgICAgICBwcmlvcml0eVN0YXR1cy5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuYXBwZW5kQ2hpbGQobm9Qcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ25vLXByaW9yaXR5Jyk7XG4gICAgfVxuXG4gICAgcHJpb3JpdHlTdGF0dXMub25jbGljayA9IHRvZ2dsZVByaW9yaXR5LmJpbmQodGhpcywgcHJpb3JpdHlTdGF0dXMsIHRhc2spO1xuXG4gICAgY29uc3QgdGFza0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRhc2tFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWRpdC1idG4nKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQodGFza0VkaXRCdG4pO1xuXG4gICAgY29uc3QgZWRpdEJ0bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGVkaXRCdG5JbWcuc3JjID0gJy4vaW1hZ2VzL2VkaXQuc3ZnJztcbiAgICB0YXNrRWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0QnRuSW1nKTtcblxuICAgIHRhc2tFZGl0QnRuLm9uY2xpY2sgPSBlZGl0VGFzay5iaW5kKHRoaXMsIHRhc2ssIHRhc2tEaXYsIHRvRG9Db250YWluZXIpO1xuXG4gICAgY29uc3QgdGFza0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tEZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUtYnRuJyk7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xuXG4gICAgY29uc3QgZGVsZXRlQnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZGVsZXRlQnRuSW1nLnNyYyA9ICcuL2ltYWdlcy90cmFzaC5zdmcnO1xuICAgIHRhc2tEZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuSW1nKTtcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IG15VGFza0xpc3QuaW5kZXhPZih0YXNrKTtcblxuICAgIHRhc2tEZWxldGVCdG4ub25jbGljayA9IGRlbGV0ZVRhc2suYmluZCh0aGlzLCBjdXJyZW50SW5kZXgpO1xuXG4gICAgdGFza0Rpdi5vbmNsaWNrID0gZGlzcGxheURldGFpbHMuYmluZCh0aGlzLCB0YXNrLCB0YXNrRGl2KTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gY2xlYXIgZGlzcGxheSBcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcbiAgICB3aGlsZSAodG9Eb0NvbnRhaW5lci5maXJzdENoaWxkICYmIHRvRG9Db250YWluZXIuZmlyc3RDaGlsZC5jbGFzc05hbWUgIT0gJ2VkaXQtdGFzay1mb3JtJykge1xuICAgICAgICB0b0RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvRG9Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUodG9Eb0NvbnRhaW5lci5sYXN0Q2hpbGQgJiYgdG9Eb0NvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NOYW1lICE9ICdlZGl0LXRhc2stZm9ybScpIHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b0RvQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdGFzayBsaXN0IGRpc3BsYXlcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tEaXNwbGF5KCkge1xuICAgIGNsZWFyRGlzcGxheSgpO1xuICAgIC8vIGNvbnN0IGlzQ29tcGxldGVBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBteVRhc2tMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBteVRhc2tMaXN0W2ldO1xuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICBteVRhc2tMaXN0LnNwbGljZShteVRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbXlUYXNrTGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGxldCB4O1xuICAgICAgICBsZXQgeTtcblxuICAgICAgICBpZiAoIWEuZHVlRGF0ZSkge1xuICAgICAgICAgICAgeCA9IG5ldyBEYXRlKCcxMDAwMDAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHggPSBuZXcgRGF0ZShhLmR1ZURhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFiLmR1ZURhdGUpIHtcbiAgICAgICAgICAgIHkgPSBuZXcgRGF0ZSgnMTAwMDAwJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ID0gbmV3IERhdGUoYi5kdWVEYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh4IDwgeSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoeCA+IHkpIHJldHVybiAxO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIG15VGFza0xpc3QucHVzaC5hcHBseShteVRhc2tMaXN0LCBpc0NvbXBsZXRlQXJyYXkpO1xuXG4gICAgLy8gbW92ZSBjb21wbGV0ZSB0YXNrcyB0byB0aGUgYm90dG9tIG9mIGxpc3RcbiAgICAvLyBmb3IgKGxldCBpID0gbXlUYXNrTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIC8vICAgICBjb25zdCB0YXNrID0gbXlUYXNrTGlzdFtpXTtcbiAgICAvLyAgICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgIC8vICAgICAgICAgbXlUYXNrTGlzdC5wdXNoKG15VGFza0xpc3Quc3BsaWNlKG15VGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSlbMF0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIFxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBjdXJyZW50RGF0ZTtcbiAgICBpZiAobW9udGggPCAxMCkge1xuICAgICAgICBjdXJyZW50RGF0ZSA9IGAke3llYXJ9LTAke21vbnRofS0ke2RheX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnREYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICB9XG5cbiAgICBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ0FsbCBUYXNrcycpIHtcbiAgICAgICAgbXlUYXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09ICdUb2RheScpIHtcbiAgICAgICAgY29uc3QgdGFza3NUb2RheSA9IG15VGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5kdWVEYXRlID09PSBjdXJyZW50RGF0ZSk7XG4gICAgICAgIHRhc2tzVG9kYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFdlZWtFbmQgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkgKyA3KTtcblxuICAgICAgICBjb25zdCB0YXNrc1RoaXNXZWVrID0gbXlUYXNrTGlzdC5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZUFycmF5ID0gdGFzay5kdWVEYXRlLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrWWVhciA9IHRhc2tEYXRlQXJyYXlbMF07XG4gICAgICAgICAgICBjb25zdCB0YXNrTW9udGggPSBwYXJzZUludCh0YXNrRGF0ZUFycmF5WzFdLCAxMCkgLSAxO1xuICAgICAgICAgICAgY29uc3QgdGFza0RheSA9IHRhc2tEYXRlQXJyYXlbMl07XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2tZZWFyLCB0YXNrTW9udGgsIHRhc2tEYXkpO1xuICAgICAgICAgICAgcmV0dXJuICh0YXNrRGF0ZSA+PSBkYXRlICYmIHRhc2tEYXRlIDw9IGN1cnJlbnRXZWVrRW5kKSB8fCAodGFzay5kdWVEYXRlID09PSBjdXJyZW50RGF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhc2tzVGhpc1dlZWsuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ0ltcG9ydGFudCcpIHtcbiAgICAgICAgY29uc3QgdGFza3NJbXBvcnRhbnQgPSBteVRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suaXNJbXBvcnRhbnQpO1xuICAgICAgICB0YXNrc0ltcG9ydGFudC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFza3NCeVByb2plY3QgPSBteVRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2sudGFza1Byb2plY3QgPT09IGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQpO1xuICAgICAgICB0YXNrc0J5UHJvamVjdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGluaycpO1xuICAgIHByb2plY3RMaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3ROYW1lRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUtZGlzcGxheScpO1xuICAgIHByb2plY3ROYW1lRGlzcGxheS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBwcm9qZWN0TGluay5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZURpc3BsYXkpO1xuXG4gICAgY29uc3QgcHJvamVjdExpbmtCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdExpbmtCdG5zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGluay1idG5zJyk7XG4gICAgcHJvamVjdExpbmsuYXBwZW5kQ2hpbGQocHJvamVjdExpbmtCdG5zKTtcblxuICAgIGNvbnN0IHByb2plY3RFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdEVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0LWJ0bicpO1xuICAgIHByb2plY3RMaW5rQnRucy5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEJ0bik7XG5cbiAgICBjb25zdCBwcm9qZWN0RWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3RFZGl0SW1nLnNyYyA9ICcuL2ltYWdlcy9lZGl0LnN2Zyc7XG4gICAgcHJvamVjdEVkaXRCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRJbWcpO1xuXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtYnRuJyk7XG4gICAgcHJvamVjdExpbmtCdG5zLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG4pO1xuXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3REZWxldGVJbWcuc3JjID0gJy4vaW1hZ2VzL3RyYXNoLnN2Zyc7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlSW1nKTtcblxuICAgIHRhYnMucHVzaChwcm9qZWN0TGluayk7XG5cbiAgICBwcm9qZWN0TGluay5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICAgICAgZGlzcGxheVRhc2tCdG4oKTtcbiAgICAgICAgaGlnaGxpZ2h0U2VsZWN0ZWQocHJvamVjdExpbmspO1xuICAgICAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdExpbmsuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgIH1cblxuICAgIHByb2plY3RFZGl0QnRuLm9uY2xpY2sgPSBlZGl0UHJvamVjdC5iaW5kKHRoaXMsIHByb2plY3QsIHByb2plY3RMaW5rLCBwcm9qZWN0TGlua0NvbnRhaW5lciwgcHJvamVjdE5hbWVEaXNwbGF5LCBjb250ZW50SGVhZGVyKTtcblxuICAgIHByb2plY3REZWxldGVCdG4ub25jbGljayA9IGRlbGV0ZVByb2plY3QuYmluZCh0aGlzLCBwcm9qZWN0LCBwcm9qZWN0TGluaywgcHJvamVjdExpbmtDb250YWluZXIsIGNvbnRlbnRIZWFkZXIpO1xufVxuXG4vLyBDQU4gUkVNT1ZFIFRISVMgT05DRSBGSU5JU0hFRCBBTkQgREVMRVRFIFRFU1QgUFJPSkVDVFNcbmZ1bmN0aW9uIGluaXRpYWxQcm9qZWN0RGlzcGxheSgpIHtcbiAgICBteVByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG59XG5cbi8vIGZ1bmN0aW9ucyB0byBkaXNwbGF5IGFwcHJvcHJpYXRlIHRhc2tzIGZvciBjaG9zZW4gdGFiXG5mdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGRpc3BsYXlUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQoYWxsVGFza3MpO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZGF5KCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZCh0b2RheSk7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUaGlzV2VlaygpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQodGhpc1dlZWspO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUltcG9ydGFudCgpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQoaW1wb3J0YW50KTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlBbGxUYXNrcywgZGlzcGxheVRvZGF5LCBkaXNwbGF5VGhpc1dlZWssIGRpc3BsYXlJbXBvcnRhbnQsIGNsb3NlVGFza0Zvcm0sIHVwZGF0ZVRhc2tEaXNwbGF5LCBjbG9zZVByb2plY3RGb3JtLCBpbml0aWFsUHJvamVjdERpc3BsYXksIGRpc3BsYXlQcm9qZWN0IH0iLCJpbXBvcnQgeyBpZ25vcmVFdmVudCB9IGZyb20gXCIuL2VkaXRUYXNrXCI7XG5pbXBvcnQgeyBteVByb2plY3RMaXN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzLCB1cGRhdGVUYXNrRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IG15VGFza0xpc3QgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cbmNvbnN0IGVkaXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtZm9ybScpO1xuY29uc3QgZWRpdFByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LW5hbWUtaW5wdXQnKTtcbmNvbnN0IGVkaXRQcm9qZWN0U3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1zdWJtaXQtYnRuJyk7XG5jb25zdCBlZGl0UHJvamVjdENhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtY2FuY2VsLWJ0bicpO1xuXG5mdW5jdGlvbiBvcGVuRWRpdFByb2plY3RGb3JtKCkge1xuICAgIGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gY2xlYXJFZGl0UHJvamVjdEZvcm0oKSB7XG4gICAgZWRpdFByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gc2hvd0hpZGRlblByb2plY3QoKSB7XG4gICAgY29uc3Qgb3BlblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdGluZy1wcm9qZWN0Jyk7XG4gICAgb3BlblByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy1wcm9qZWN0Jyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRWRpdFByb2plY3RGb3JtKCkge1xuICAgIGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyRWRpdFByb2plY3RGb3JtKCk7XG4gICAgc2hvd0hpZGRlblByb2plY3QoKTtcbn1cblxuZnVuY3Rpb24gYXV0b2ZpbGxQcm9qZWN0SW5mbyhwcm9qZWN0KSB7XG4gICAgZWRpdFByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3QsIHByb2plY3RMaW5rLCBwcm9qZWN0TGlua0NvbnRhaW5lciwgcHJvamVjdE5hbWVEaXNwbGF5LCBjb250ZW50SGVhZGVyKSB7XG4gICAgaWdub3JlRXZlbnQoKTtcblxuICAgIGlmIChlZGl0UHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PT0gJycgfHwgZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXByb2plY3QnKTtcbiAgICAgICAgb3BlbkVkaXRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICBwcm9qZWN0TGlua0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFByb2plY3RGb3JtLCBwcm9qZWN0TGluayk7XG4gICAgICAgIGF1dG9maWxsUHJvamVjdEluZm8ocHJvamVjdCk7XG4gICAgICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0hpZGRlblByb2plY3QoKTtcbiAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy1wcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RMaW5rQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0UHJvamVjdEZvcm0sIHByb2plY3RMaW5rKTtcbiAgICAgICAgYXV0b2ZpbGxQcm9qZWN0SW5mbyhwcm9qZWN0KTtcbiAgICAgICAgZWRpdFByb2plY3ROYW1lSW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBlZGl0UHJvamVjdFN1Ym1pdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIWVkaXRQcm9qZWN0Rm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0Rm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gY29udGVudEhlYWRlci50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSBlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2plY3QubmFtZSA9IGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgcHJvamVjdE5hbWVEaXNwbGF5LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsb3NlRWRpdFByb2plY3RGb3JtKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0UHJvamVjdENhbmNlbEJ0bi5vbmNsaWNrID0gY2xvc2VFZGl0UHJvamVjdEZvcm07XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCwgcHJvamVjdExpbmssIHByb2plY3RMaW5rQ29udGFpbmVyLCBjb250ZW50SGVhZGVyKSB7XG4gICAgaWdub3JlRXZlbnQoKTtcblxuICAgIGZvciAobGV0IGkgPSBteVRhc2tMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBteVRhc2tMaXN0W2ldO1xuICAgICAgICBpZiAodGFzay50YXNrUHJvamVjdCA9PT0gcHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICBteVRhc2tMaXN0LnNwbGljZShteVRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xuICAgICAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQpIHtcbiAgICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgfVxuXG4gICAgbXlQcm9qZWN0TGlzdC5zcGxpY2UobXlQcm9qZWN0TGlzdC5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICBwcm9qZWN0TGlua0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0TGluayk7XG59XG5cbmV4cG9ydCB7IGVkaXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH0iLCJpbXBvcnQgeyBteVRhc2tMaXN0IH0gZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuaW1wb3J0IHsgdXBkYXRlVGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybScpO1xuY29uc3QgZWRpdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpO1xuY29uc3QgZWRpdERldGFpbHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRldGFpbHMnKTtcbmNvbnN0IGVkaXREdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kdWUtZGF0ZScpO1xuY29uc3QgZWRpdElzSW1wb3J0YW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1pcy1pbXBvcnRhbnQnKTtcbmNvbnN0IGVkaXRTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1zdWJtaXQtYnRuJyk7XG5jb25zdCBlZGl0Q2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY2FuY2VsLWJ0bicpO1xuY29uc3QgaXNDb21wbGV0ZUFycmF5ID0gW107XG5cbi8vIGZ1bmN0aW9uIHRvIGlnbm9yZSB0YXNrRGl2IG9uY2xpY2sgZXZlbnQgd2hlbiBidXR0b25zIHdpdGhpbiB0aGUgdGFza0RpdiBhcmUgY2xpY2tlZFxuZnVuY3Rpb24gaWdub3JlRXZlbnQoZSkge1xuICAgIGlmICghZSkge1xuICAgICAgICBlID0gd2luZG93LmV2ZW50O1xuICAgIH1cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0ZShzdGF0dXMsIHN0YXR1c0NvbnRhaW5lciwgdGl0bGUsIHRhc2spIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgaWYgKHN0YXR1cy5jbGFzc0xpc3QudmFsdWUgPT09ICd0YXNrLWluY29tcGxldGUnKSB7XG4gICAgICAgIHN0YXR1cy5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrLWluY29tcGxldGUnKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXR1c0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrQ29tcGxldGUuc3JjID0gJy4vaW1hZ2VzL2NpcmNsZS1maWxsZWQuc3ZnJztcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZSk7XG5cbiAgICAgICAgdGl0bGUuc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKTtcblxuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0cnVlO1xuXG4gICAgICAgIGlzQ29tcGxldGVBcnJheS5wdXNoKG15VGFza0xpc3Quc3BsaWNlKG15VGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSlbMF0pO1xuXG4gICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCB0YXNrSW5jb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrSW5jb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLXVuZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5jb21wbGV0ZSk7XG5cbiAgICAgICAgdGl0bGUuc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdub25lJyk7XG5cbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAgICAgaXNDb21wbGV0ZUFycmF5LnNwbGljZShpc0NvbXBsZXRlQXJyYXkuaW5kZXhPZih0YXNrKSwgMSk7XG5cbiAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVByaW9yaXR5KHN0YXR1c0NvbnRhaW5lciwgdGFzaykge1xuICAgIGlnbm9yZUV2ZW50KCk7XG5cbiAgICBpZiAoc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ3ByaW9yaXR5LXN0YXR1cyBwcmlvcml0eScpIHtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCduby1wcmlvcml0eScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhdHVzQ29udGFpbmVyLmxhc3RDaGlsZCk7XG5cbiAgICAgICAgY29uc3Qgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBub1ByaW9yaXR5LnNyYyA9ICcuL2ltYWdlcy9zdGFyLXVuZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChub1ByaW9yaXR5KTtcblxuICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnZhbHVlID09PSAncHJpb3JpdHktc3RhdHVzIG5vLXByaW9yaXR5Jykge1xuICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tcHJpb3JpdHknKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci1maWxsZWQuc3ZnJztcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5FZGl0VGFza0Zvcm0oKSB7XG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGVkaXRUaXRsZUlucHV0LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRWRpdFRhc2tGb3JtKCkge1xuICAgIGVkaXRUaXRsZUlucHV0LnZhbHVlID0gJyc7XG4gICAgZWRpdERldGFpbHNJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGVkaXREdWVEYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICBlZGl0SXNJbXBvcnRhbnRJbnB1dC5jaGVja2VkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNob3dIaWRkZW5UYXNrKCkge1xuICAgIGNvbnN0IG9wZW5UYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRpbmctdGFzaycpO1xuICAgIG9wZW5UYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmctdGFzaycpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUVkaXRUYXNrRm9ybSgpIHtcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjbGVhckVkaXRUYXNrRm9ybSgpO1xuICAgIHNob3dIaWRkZW5UYXNrKCk7XG59XG5cbmZ1bmN0aW9uIGF1dG9maWxsVGFza0luZm8odGFzaykge1xuICAgIGVkaXRUaXRsZUlucHV0LnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBlZGl0RHVlRGF0ZUlucHV0LnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgIGVkaXRJc0ltcG9ydGFudElucHV0LmNoZWNrZWQgPSB0YXNrLmlzSW1wb3J0YW50O1xuICAgIGlmICh0YXNrLmRldGFpbHMpIHtcbiAgICAgICAgZWRpdERldGFpbHNJbnB1dC52YWx1ZSA9IHRhc2suZGV0YWlscztcbiAgICB9IGVsc2Uge1xuICAgICAgICBlZGl0RGV0YWlsc0lucHV0LnZhbHVlID0gJyc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBlZGl0VGFzayh0YXNrLCB0YXNrRGl2LCB0b0RvQ29udGFpbmVyKSB7XG4gICAgaWdub3JlRXZlbnQoKTtcblxuICAgIGlmIChlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy10YXNrJyk7XG4gICAgICAgIG9wZW5FZGl0VGFza0Zvcm0oKTtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tGb3JtLCB0YXNrRGl2KTtcbiAgICAgICAgYXV0b2ZpbGxUYXNrSW5mbyh0YXNrKTtcbiAgICAgICAgZWRpdFRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93SGlkZGVuVGFzaygpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmctdGFzaycpO1xuICAgICAgICB0b0RvQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza0Zvcm0sIHRhc2tEaXYpO1xuICAgICAgICBhdXRvZmlsbFRhc2tJbmZvKHRhc2spO1xuICAgICAgICBlZGl0VGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIGVkaXRTdWJtaXRCdG4ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCFlZGl0VGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBlZGl0VGFza0Zvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2sudGl0bGUgPSBlZGl0VGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRhc2suZGV0YWlscyA9IGVkaXREZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUgPSBlZGl0RHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGFzay5pc0ltcG9ydGFudCA9IGVkaXRJc0ltcG9ydGFudElucHV0LmNoZWNrZWQ7XG5cbiAgICAgICAgICAgIGNsb3NlRWRpdFRhc2tGb3JtKCk7XG4gICAgICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBlZGl0Q2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZUVkaXRUYXNrRm9ybTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpbmRleCkge1xuICAgIGlnbm9yZUV2ZW50KCk7XG4gICAgbXlUYXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG59XG5cbmV4cG9ydCB7IHRvZ2dsZUNvbXBsZXRlLCB0b2dnbGVQcmlvcml0eSwgZWRpdFRhc2ssIGRlbGV0ZVRhc2ssIGlnbm9yZUV2ZW50LCBpc0NvbXBsZXRlQXJyYXkgfSIsImltcG9ydCB7IGRpc3BsYXlBbGxUYXNrcywgZGlzcGxheVRvZGF5LCBkaXNwbGF5VGhpc1dlZWssIGRpc3BsYXlJbXBvcnRhbnQsIGluaXRpYWxQcm9qZWN0RGlzcGxheSB9IGZyb20gJy4vZGlzcGxheSc7XG5cbmNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC10YXNrcycpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbmNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtd2VlaycpO1xuY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydGFudCcpO1xuY29uc3QgdGFicyA9IFthbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnRdO1xuXG5pbml0aWFsUHJvamVjdERpc3BsYXkoKTtcbmRpc3BsYXlBbGxUYXNrcygpO1xuXG5hbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBbGxUYXNrcyk7XG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlUb2RheSk7XG50aGlzV2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlUaGlzV2Vlayk7XG5pbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5SW1wb3J0YW50KTtcblxuZXhwb3J0IHsgYWxsVGFza3MsIHRvZGF5LCB0aGlzV2VlaywgaW1wb3J0YW50LCB0YWJzIH1cblxuLy8gVE8gRE9cblxuLy8gTUFZQkUgQUREIFdIRVJFIFlPVSBDQU4gU09SVCBCWSBEVUUgREFURT8/Pz9cbi8vIFNPUlQgQlkgRFVFIERBVEUgQVQgQkVHSU5OSU5HIE9GIFVQREFURSBESVNQTEFZIEZVTkNUSU9OLCBUSEVOIFBVU0ggQ09NUExFVEVEIFRBU0tTIFRPIEJPVFRPTSwgVEhFTiBVUERBVEUgRElTUExBWVxuXG4vLyBGSU5JU0ggVUlcblxuLy8gQUREIE1PQklMRSBTVVBQT1JUXG5cbi8vIEFERCBMT0NBTCBTVE9SQUdFIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==