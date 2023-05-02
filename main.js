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
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");



const projectForm = document.querySelector('.project-form');
const projectNameInput = document.getElementById('project-name');
const projectSubmitBtn = document.querySelector('.project-submit-btn');
const myProjectList = [];

const project = (name) => ({ name });

function addProject() {
    const name = projectNameInput.value;

    const newProject = project(name);
    myProjectList.push(newProject);
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayProject)(newProject);
    (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();
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
/* harmony export */   "myTaskList": () => (/* binding */ myTaskList),
/* harmony export */   "saveToLocalStorage": () => (/* binding */ saveToLocalStorage)
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

function saveToLocalStorage() {
    localStorage.setItem("myTaskList", JSON.stringify(myTaskList));
    localStorage.setItem("myProjectList", JSON.stringify(_createProject__WEBPACK_IMPORTED_MODULE_1__.myProjectList));
}

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
    saveToLocalStorage();
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
const titleInput = document.getElementById('title');
const projectNameInput = document.getElementById('project-name');
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

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

    taskDeleteBtn.onclick = _editTask__WEBPACK_IMPORTED_MODULE_2__.deleteTask.bind(this, currentIndex, task);

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

    // if a task is complete, remove it from the task list
    for (let i = _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.length - 1; i >= 0; i--) {
        const task = _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList[i];
        if (task.isComplete) {
            _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.splice(_createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.indexOf(task), 1);
        }
    }

    // sort the tasks that are incomplete
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

    localStorage.setItem("uncompletedTaskList", JSON.stringify(_createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList));

    // append the completed tasks to the bottom of the sorted incomplete tasks
    _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.push.apply(_createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList, _editTask__WEBPACK_IMPORTED_MODULE_2__.isCompleteArray);

    // saveToLocalStorage();
    
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let currentDate;
    if (month < 10 && day > 10) {
        currentDate = `${year}-0${month}-${day}`;
    } else if (month < 10 && day < 10) {
        currentDate = `${year}-0${month}-0${day}`;
    } else if (month > 10 && day < 10) {
        currentDate = `${year}-${month}-0${day}`;
    } else {
        currentDate = `${year}-${month}-${day}`;
    }

    if (contentHeader.textContent === 'All Tasks') {
        _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.forEach((task) => {
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

function openMenu() {
    sidebar.classList.add('show-sidebar');
}

function closeMenu() {
    sidebar.classList.remove('show-sidebar');
}

menuBtn.addEventListener('click', () => {
    if (sidebar.classList.value === 'sidebar') {
        openMenu();
        console.log('hello');
    } else {
        closeMenu();
    }
});



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
            console.log(project.name);
            
            closeEditProjectForm();
            localStorage.setItem("myProjectList", JSON.stringify(_createProject__WEBPACK_IMPORTED_MODULE_1__.myProjectList));
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

    for (let i = _editTask__WEBPACK_IMPORTED_MODULE_0__.isCompleteArray.length - 1; i >= 0; i--) {
        const completedTask = _editTask__WEBPACK_IMPORTED_MODULE_0__.isCompleteArray[i];
        if (completedTask.taskProject === project.name) {
            _editTask__WEBPACK_IMPORTED_MODULE_0__.isCompleteArray.splice(_editTask__WEBPACK_IMPORTED_MODULE_0__.isCompleteArray.indexOf(completedTask), 1);
            localStorage.setItem("isCompleteArray", JSON.stringify(_editTask__WEBPACK_IMPORTED_MODULE_0__.isCompleteArray));
            (0,_display__WEBPACK_IMPORTED_MODULE_2__.updateTaskDisplay)();
        }
    }

    if (project.name === contentHeader.textContent) {
        (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();
    }

    _createProject__WEBPACK_IMPORTED_MODULE_1__.myProjectList.splice(_createProject__WEBPACK_IMPORTED_MODULE_1__.myProjectList.indexOf(project), 1);
    projectLinkContainer.removeChild(projectLink);
    localStorage.setItem("myProjectList", JSON.stringify(_createProject__WEBPACK_IMPORTED_MODULE_1__.myProjectList));
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

    localStorage.setItem("isCompleteArray", JSON.stringify(isCompleteArray));
    // saveToLocalStorage();
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
    if (isCompleteArray) {
        localStorage.setItem("uncompletedTaskList", JSON.stringify(_createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList));
        localStorage.setItem("isCompleteArray", JSON.stringify(isCompleteArray));
    } else {
        localStorage.setItem("myTaskList", JSON.stringify(_createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList));
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
            if (isCompleteArray) {
                localStorage.setItem("uncompletedTaskList", JSON.stringify(_createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList));
                localStorage.setItem("isCompleteArray", JSON.stringify(isCompleteArray));
            } else {
                localStorage.setItem("myTaskList", JSON.stringify(_createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList));
            }
            e.preventDefault();
        }
    };

    editCancelBtn.onclick = closeEditTaskForm;
}

function deleteTask(index, task) {
    ignoreEvent();
    _createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList.splice(index, 1);

    if (isCompleteArray.includes(task)) {
        isCompleteArray.splice(isCompleteArray.indexOf(task), 1);
    }

    (0,_display__WEBPACK_IMPORTED_MODULE_1__.updateTaskDisplay)();

    if (isCompleteArray) {
        localStorage.setItem("uncompletedTaskList", JSON.stringify(_createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList));
        localStorage.setItem("isCompleteArray", JSON.stringify(isCompleteArray));
    } else {
        localStorage.setItem("myTaskList", JSON.stringify(_createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList));
    }
    // saveToLocalStorage();
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
/* harmony export */   "getLocalStorage": () => (/* binding */ getLocalStorage),
/* harmony export */   "important": () => (/* binding */ important),
/* harmony export */   "tabs": () => (/* binding */ tabs),
/* harmony export */   "thisWeek": () => (/* binding */ thisWeek),
/* harmony export */   "today": () => (/* binding */ today)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTask */ "./src/editTask.js");





const allTasks = document.getElementById('all-tasks');
const today = document.getElementById('today');
const thisWeek = document.getElementById('this-week');
const important = document.getElementById('important');
const tabs = [allTasks, today, thisWeek, important];

// LOCAL STORAGE

// Pulls isCompleteArray from local storage to get current completed tasks
function getCompletedTasks() {
    const storedCompletedTasks = JSON.parse(localStorage.getItem("isCompleteArray"));
    _editTask__WEBPACK_IMPORTED_MODULE_3__.isCompleteArray.length = 0;
    _editTask__WEBPACK_IMPORTED_MODULE_3__.isCompleteArray.push.apply(_editTask__WEBPACK_IMPORTED_MODULE_3__.isCompleteArray, storedCompletedTasks);
}

// Pulls uncompletedTaskList from local storage to get current uncompleted tasks
function getUncompletedTasks() {
    const storedUncompletedTasks = JSON.parse(localStorage.getItem("uncompletedTaskList"));
    _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.length = 0;
    _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.push.apply(_createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList, storedUncompletedTasks);
}

// Pulls myTaskList and myProjectList from local storage to get stored tasks and projects
// If the isCompleteArray is NOT empty, pulls completed and uncompleted task lists from local storage
function getLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem("myTaskList"));
    _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.length = 0;
    _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.push.apply(_createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList, storedTasks);

    if (_editTask__WEBPACK_IMPORTED_MODULE_3__.isCompleteArray) {
        getCompletedTasks();
        getUncompletedTasks();
    }

    const storedProjects = JSON.parse(localStorage.getItem("myProjectList"));
    _createProject__WEBPACK_IMPORTED_MODULE_2__.myProjectList.length = 0;
    _createProject__WEBPACK_IMPORTED_MODULE_2__.myProjectList.push.apply(_createProject__WEBPACK_IMPORTED_MODULE_2__.myProjectList, storedProjects);
}

// Initial pull from local storage and page display
getLocalStorage();
(0,_display__WEBPACK_IMPORTED_MODULE_0__.initialProjectDisplay)();
(0,_display__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)();

// Event listeners for home category tabs
allTasks.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks);
today.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayToday);
thisWeek.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayThisWeek);
important.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayImportant);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXRUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb3NlUHJvamVjdEZvcm0sIGRpc3BsYXlQcm9qZWN0IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XG5jb25zdCBwcm9qZWN0U3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc3VibWl0LWJ0bicpO1xuY29uc3QgbXlQcm9qZWN0TGlzdCA9IFtdO1xuXG5jb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+ICh7IG5hbWUgfSk7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChuYW1lKTtcbiAgICBteVByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgZGlzcGxheVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdEZvcm0oKSB7XG4gICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5wcm9qZWN0U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXByb2plY3RGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBwcm9qZWN0Rm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFByb2plY3QoKTtcbiAgICAgICAgY2xvc2VQcm9qZWN0Rm9ybSgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IG15UHJvamVjdExpc3QsIGNsZWFyUHJvamVjdEZvcm0gfSIsImltcG9ydCB7IGNsb3NlVGFza0Zvcm0sIHVwZGF0ZVRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgbXlQcm9qZWN0TGlzdCB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcblxuY29uc3QgY29udGVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWhlYWRpbmcnKTtcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbmNvbnN0IGRldGFpbHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzJyk7XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKTtcbmNvbnN0IGlzSW1wb3J0YW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtaW1wb3J0YW50Jyk7XG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ0bicpO1xuY29uc3QgbXlUYXNrTGlzdCA9IFtdO1xuXG5jb25zdCB0YXNrID0gKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBpc0ltcG9ydGFudCwgaXNDb21wbGV0ZSwgdGFza1Byb2plY3QpID0+ICh7IHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBpc0ltcG9ydGFudCwgaXNDb21wbGV0ZSwgdGFza1Byb2plY3QgfSk7XG5cbmZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15VGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkobXlUYXNrTGlzdCkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlQcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBpc0ltcG9ydGFudCA9IGlzSW1wb3J0YW50SW5wdXQuY2hlY2tlZDtcbiAgICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgbGV0IHRhc2tQcm9qZWN0ID0gJyc7XG5cbiAgICBteVByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgdGFza1Byb2plY3QgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBpc0ltcG9ydGFudCwgaXNDb21wbGV0ZSwgdGFza1Byb2plY3QpO1xuICAgIG15VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiBuZXdUYXNrO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICBkZXRhaWxzSW5wdXQudmFsdWUgPSAnJztcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICBpc0ltcG9ydGFudElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRUYXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgYWRkVGFza0Zvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRUYXNrKCk7XG4gICAgICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBteVRhc2tMaXN0LCBjbGVhclRhc2tGb3JtLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSIsImltcG9ydCB7IGFsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudCwgdGFicyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgbXlUYXNrTGlzdCwgY2xlYXJUYXNrRm9ybSB9IGZyb20gJy4vY3JlYXRlVGFzayc7XG5pbXBvcnQgeyB0b2dnbGVDb21wbGV0ZSwgdG9nZ2xlUHJpb3JpdHksIGVkaXRUYXNrLCBkZWxldGVUYXNrLCBpc0NvbXBsZXRlQXJyYXkgfSBmcm9tICcuL2VkaXRUYXNrJztcbmltcG9ydCB7IG15UHJvamVjdExpc3QsIGNsZWFyUHJvamVjdEZvcm0gfSBmcm9tICcuL2NyZWF0ZVByb2plY3QnO1xuaW1wb3J0IHsgZWRpdFByb2plY3QsIGRlbGV0ZVByb2plY3QgfSBmcm9tICcuL2VkaXRQcm9qZWN0JztcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG5jb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaGVhZGluZycpO1xuY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5jb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWZvcm0nKTtcbmNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnRuJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1idG4nKTtcbmNvbnN0IHByb2plY3RDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYW5jZWwtYnRuJyk7XG5jb25zdCBwcm9qZWN0TGlua0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpbmtzJyk7XG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5jb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbi8vIGhpZ2hsaWdodCB0aGUgc2VsZWN0ZWQgbmF2aWdhdGlvbiB0YWJcbmZ1bmN0aW9uIGhpZ2hsaWdodFNlbGVjdGVkKHNlbGVjdGVkVGFiKSB7XG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG5cbiAgICBzZWxlY3RlZFRhYi5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xufVxuXG4vLyBvcGVuL2Nsb3NlIHRoZSBmb3JtIHRvIGFkZCBuZXcgdGFza3NcbmZ1bmN0aW9uIG9wZW5UYXNrRm9ybSgpIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjbGVhclRhc2tGb3JtKCk7XG59XG5cbmNhbmNlbEJ0bi5vbmNsaWNrID0gY2xvc2VUYXNrRm9ybTtcblxuLy8gb3Blbi9jbG9zZSB0aGUgZm9ybSB0byBhZGQgbmV3IHByb2plY3RzXG5cbmZ1bmN0aW9uIG9wZW5Qcm9qZWN0Rm9ybSgpIHtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBwcm9qZWN0TmFtZUlucHV0LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjbGVhclByb2plY3RGb3JtKCk7XG59XG5cbmFkZFByb2plY3RCdG4ub25jbGljayA9IG9wZW5Qcm9qZWN0Rm9ybTtcbnByb2plY3RDYW5jZWxCdG4ub25jbGljayA9IGNsb3NlUHJvamVjdEZvcm07XG5cblxuLy8gY3JlYXRlIGFuZCBkaXNwbGF5IHRoZSBidXR0b24gdG8gYWRkIG5ldyB0YXNrc1xuZnVuY3Rpb24gZGlzcGxheVRhc2tCdG4oKSB7XG4gICAgY29uc3QgdGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1idG4nKTtcblxuICAgIGNvbnN0IGJ0bkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYnRuSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL3BsdXMuc3ZnJztcblxuICAgIGNvbnN0IGJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5UZXh0LnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgIHRhc2tCdG4ub25jbGljayA9IG9wZW5UYXNrRm9ybTtcblxuICAgIHRhc2tCdG4uYXBwZW5kQ2hpbGQoYnRuSW1hZ2UpO1xuICAgIHRhc2tCdG4uYXBwZW5kQ2hpbGQoYnRuVGV4dCk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0J0bik7XG59XG5cbi8vIHJlbW92ZSB0aGUgYnV0dG9uIHRvIGFkZCBuZXcgdGFzayAoZm9yIHBhZ2VzIHdoZXJlIHlvdSBjYW5ub3QgYWRkIG5ldyB0YXNrKVxuZnVuY3Rpb24gcmVtb3ZlVGFza0J0bigpIHtcbiAgICBpZiAobWFpbkNvbnRlbnQubGFzdENoaWxkLmNsYXNzTmFtZSA9PT0gJ3Rhc2stYnRuJykge1xuICAgICAgICBtYWluQ29udGVudC5yZW1vdmVDaGlsZChtYWluQ29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gZGlzcGxheSB0YXNrIGRldGFpbHNcbmZ1bmN0aW9uIGRpc3BsYXlEZXRhaWxzKHRhc2ssIHRhc2tEaXYpIHtcbiAgICBpZiAodGFza0Rpdi5sYXN0Q2hpbGQuY2xhc3NOYW1lICE9ICdkZXRhaWxzLWRpc3BsYXknICYmIHRhc2suZGV0YWlscykge1xuICAgICAgICBjb25zdCBkZXRhaWxzRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxzRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWRpc3BsYXknKTtcbiAgICAgICAgZGV0YWlsc0Rpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrLmRldGFpbHM7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpc3BsYXkpO1xuICAgIH0gZWxzZSBpZiAodGFza0Rpdi5sYXN0Q2hpbGQuY2xhc3NOYW1lID09PSAnZGV0YWlscy1kaXNwbGF5JyAmJiB0YXNrLmRldGFpbHMpIHtcbiAgICAgICAgdGFza0Rpdi5yZW1vdmVDaGlsZCh0YXNrRGl2Lmxhc3RDaGlsZCk7XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiB0byBkaXNwbGF5IGEgc2luZ3VsYXIgdGFza1xuZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzaykge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuICAgIGNvbnN0IHRhc2tNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza01haW4uY2xhc3NMaXN0LmFkZCgndGFzay1tYWluJyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTWFpbik7XG5cbiAgICBjb25zdCB0YXNrTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tMZWZ0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGVmdCcpO1xuICAgIHRhc2tNYWluLmFwcGVuZENoaWxkKHRhc2tMZWZ0KTtcblxuICAgIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzJyk7XG4gICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGFza1N0YXR1cyk7XG5cbiAgICBjb25zdCB0YXNrSW5jb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIC8vIHRhc2tJbmNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5jb21wbGV0ZScpO1xuICAgIHRhc2tJbmNvbXBsZXRlLnNyYyA9ICcuL2ltYWdlcy9jaXJjbGUtdW5maWxsZWQuc3ZnJztcblxuICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRhc2tDb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLWZpbGxlZC5zdmcnO1xuXG4gICAgY29uc3QgdGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWRpc3BsYXknKTtcbiAgICB0aXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRpdGxlRGlzcGxheSk7XG5cbiAgICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICAgIHRhc2tTdGF0dXMuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlKTtcbiAgICAgICAgdGl0bGVEaXNwbGF5LnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1N0YXR1cy5hcHBlbmRDaGlsZCh0YXNrSW5jb21wbGV0ZSk7XG4gICAgICAgIHRhc2tJbmNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5jb21wbGV0ZScpO1xuICAgIH1cblxuICAgIHRhc2tTdGF0dXMub25jbGljayA9IHRvZ2dsZUNvbXBsZXRlLmJpbmQodGhpcywgdGFza0luY29tcGxldGUsIHRhc2tTdGF0dXMsIHRpdGxlRGlzcGxheSwgdGFzayk7XG5cbiAgICBpZiAodGFzay5kZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IGV4cGFuZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZXhwYW5kVGFzay5zcmMgPSAnLi9pbWFnZXMvZXhwYW5kLXRhc2suc3ZnJztcbiAgICAgICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQoZXhwYW5kVGFzayk7XG4gICAgICAgIGV4cGFuZFRhc2sudGl0bGUgPSAnQ2xpY2sgdGFzayB0byBzaG93IGRldGFpbHMnO1xuICAgICAgICBleHBhbmRUYXNrLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC10YXNrJyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRhc2tSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tSaWdodC5jbGFzc0xpc3QuYWRkKCd0YXNrLXJpZ2h0Jyk7XG4gICAgdGFza01haW4uYXBwZW5kQ2hpbGQodGFza1JpZ2h0KTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGR1ZURhdGVEaXNwbGF5KTtcblxuICAgIGlmICghdGFzay5kdWVEYXRlKSB7XG4gICAgICAgIGR1ZURhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gJ05vIER1ZSBEYXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBkdWVEYXRlRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmlvcml0eVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXN0YXR1cycpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eVN0YXR1cyk7XG5cbiAgICBjb25zdCBub1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbm9Qcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci11bmZpbGxlZC5zdmcnO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci1maWxsZWQuc3ZnJztcblxuICAgIGlmICh0YXNrLmlzSW1wb3J0YW50KSB7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcmlvcml0eVN0YXR1cy5hcHBlbmRDaGlsZChub1ByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgnbm8tcHJpb3JpdHknKTtcbiAgICB9XG5cbiAgICBwcmlvcml0eVN0YXR1cy5vbmNsaWNrID0gdG9nZ2xlUHJpb3JpdHkuYmluZCh0aGlzLCBwcmlvcml0eVN0YXR1cywgdGFzayk7XG5cbiAgICBjb25zdCB0YXNrRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGFza0VkaXRCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0LWJ0bicpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZCh0YXNrRWRpdEJ0bik7XG5cbiAgICBjb25zdCBlZGl0QnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWRpdEJ0bkltZy5zcmMgPSAnLi9pbWFnZXMvZWRpdC5zdmcnO1xuICAgIHRhc2tFZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRCdG5JbWcpO1xuXG4gICAgdGFza0VkaXRCdG4ub25jbGljayA9IGVkaXRUYXNrLmJpbmQodGhpcywgdGFzaywgdGFza0RpdiwgdG9Eb0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0YXNrRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZS1idG4nKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ0bik7XG5cbiAgICBjb25zdCBkZWxldGVCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVCdG5JbWcuc3JjID0gJy4vaW1hZ2VzL3RyYXNoLnN2Zyc7XG4gICAgdGFza0RlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVCdG5JbWcpO1xuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gbXlUYXNrTGlzdC5pbmRleE9mKHRhc2spO1xuXG4gICAgdGFza0RlbGV0ZUJ0bi5vbmNsaWNrID0gZGVsZXRlVGFzay5iaW5kKHRoaXMsIGN1cnJlbnRJbmRleCwgdGFzayk7XG5cbiAgICB0YXNrRGl2Lm9uY2xpY2sgPSBkaXNwbGF5RGV0YWlscy5iaW5kKHRoaXMsIHRhc2ssIHRhc2tEaXYpO1xufVxuXG4vLyBmdW5jdGlvbiB0byBjbGVhciBkaXNwbGF5IFxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCkge1xuICAgIHdoaWxlICh0b0RvQ29udGFpbmVyLmZpcnN0Q2hpbGQgJiYgdG9Eb0NvbnRhaW5lci5maXJzdENoaWxkLmNsYXNzTmFtZSAhPSAnZWRpdC10YXNrLWZvcm0nKSB7XG4gICAgICAgIHRvRG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9Eb0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSh0b0RvQ29udGFpbmVyLmxhc3RDaGlsZCAmJiB0b0RvQ29udGFpbmVyLmxhc3RDaGlsZC5jbGFzc05hbWUgIT0gJ2VkaXQtdGFzay1mb3JtJykge1xuICAgICAgICB0b0RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvRG9Db250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuLy8gZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB0YXNrIGxpc3QgZGlzcGxheVxuZnVuY3Rpb24gdXBkYXRlVGFza0Rpc3BsYXkoKSB7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG5cbiAgICAvLyBpZiBhIHRhc2sgaXMgY29tcGxldGUsIHJlbW92ZSBpdCBmcm9tIHRoZSB0YXNrIGxpc3RcbiAgICBmb3IgKGxldCBpID0gbXlUYXNrTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCB0YXNrID0gbXlUYXNrTGlzdFtpXTtcbiAgICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgbXlUYXNrTGlzdC5zcGxpY2UobXlUYXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNvcnQgdGhlIHRhc2tzIHRoYXQgYXJlIGluY29tcGxldGVcbiAgICBteVRhc2tMaXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgbGV0IHg7XG4gICAgICAgIGxldCB5O1xuXG4gICAgICAgIGlmICghYS5kdWVEYXRlKSB7XG4gICAgICAgICAgICB4ID0gbmV3IERhdGUoJzEwMDAwMCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IG5ldyBEYXRlKGEuZHVlRGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWIuZHVlRGF0ZSkge1xuICAgICAgICAgICAgeSA9IG5ldyBEYXRlKCcxMDAwMDAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHkgPSBuZXcgRGF0ZShiLmR1ZURhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHggPCB5KSByZXR1cm4gLTE7XG4gICAgICAgIGlmICh4ID4geSkgcmV0dXJuIDE7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1bmNvbXBsZXRlZFRhc2tMaXN0XCIsIEpTT04uc3RyaW5naWZ5KG15VGFza0xpc3QpKTtcblxuICAgIC8vIGFwcGVuZCB0aGUgY29tcGxldGVkIHRhc2tzIHRvIHRoZSBib3R0b20gb2YgdGhlIHNvcnRlZCBpbmNvbXBsZXRlIHRhc2tzXG4gICAgbXlUYXNrTGlzdC5wdXNoLmFwcGx5KG15VGFza0xpc3QsIGlzQ29tcGxldGVBcnJheSk7XG5cbiAgICAvLyBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICBcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgY3VycmVudERhdGU7XG4gICAgaWYgKG1vbnRoIDwgMTAgJiYgZGF5ID4gMTApIHtcbiAgICAgICAgY3VycmVudERhdGUgPSBgJHt5ZWFyfS0wJHttb250aH0tJHtkYXl9YDtcbiAgICB9IGVsc2UgaWYgKG1vbnRoIDwgMTAgJiYgZGF5IDwgMTApIHtcbiAgICAgICAgY3VycmVudERhdGUgPSBgJHt5ZWFyfS0wJHttb250aH0tMCR7ZGF5fWA7XG4gICAgfSBlbHNlIGlmIChtb250aCA+IDEwICYmIGRheSA8IDEwKSB7XG4gICAgICAgIGN1cnJlbnREYXRlID0gYCR7eWVhcn0tJHttb250aH0tMCR7ZGF5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudERhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgIH1cblxuICAgIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSAnQWxsIFRhc2tzJykge1xuICAgICAgICBteVRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09ICdUb2RheScpIHtcbiAgICAgICAgY29uc3QgdGFza3NUb2RheSA9IG15VGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5kdWVEYXRlID09PSBjdXJyZW50RGF0ZSk7XG4gICAgICAgIHRhc2tzVG9kYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFdlZWtFbmQgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkgKyA3KTtcblxuICAgICAgICBjb25zdCB0YXNrc1RoaXNXZWVrID0gbXlUYXNrTGlzdC5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZUFycmF5ID0gdGFzay5kdWVEYXRlLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrWWVhciA9IHRhc2tEYXRlQXJyYXlbMF07XG4gICAgICAgICAgICBjb25zdCB0YXNrTW9udGggPSBwYXJzZUludCh0YXNrRGF0ZUFycmF5WzFdLCAxMCkgLSAxO1xuICAgICAgICAgICAgY29uc3QgdGFza0RheSA9IHRhc2tEYXRlQXJyYXlbMl07XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2tZZWFyLCB0YXNrTW9udGgsIHRhc2tEYXkpO1xuICAgICAgICAgICAgcmV0dXJuICh0YXNrRGF0ZSA+PSBkYXRlICYmIHRhc2tEYXRlIDw9IGN1cnJlbnRXZWVrRW5kKSB8fCAodGFzay5kdWVEYXRlID09PSBjdXJyZW50RGF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhc2tzVGhpc1dlZWsuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ0ltcG9ydGFudCcpIHtcbiAgICAgICAgY29uc3QgdGFza3NJbXBvcnRhbnQgPSBteVRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suaXNJbXBvcnRhbnQpO1xuICAgICAgICB0YXNrc0ltcG9ydGFudC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFza3NCeVByb2plY3QgPSBteVRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2sudGFza1Byb2plY3QgPT09IGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQpO1xuICAgICAgICB0YXNrc0J5UHJvamVjdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGluaycpO1xuICAgIHByb2plY3RMaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3ROYW1lRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUtZGlzcGxheScpO1xuICAgIHByb2plY3ROYW1lRGlzcGxheS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBwcm9qZWN0TGluay5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZURpc3BsYXkpO1xuXG4gICAgY29uc3QgcHJvamVjdExpbmtCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdExpbmtCdG5zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGluay1idG5zJyk7XG4gICAgcHJvamVjdExpbmsuYXBwZW5kQ2hpbGQocHJvamVjdExpbmtCdG5zKTtcblxuICAgIGNvbnN0IHByb2plY3RFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdEVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0LWJ0bicpO1xuICAgIHByb2plY3RMaW5rQnRucy5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEJ0bik7XG5cbiAgICBjb25zdCBwcm9qZWN0RWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3RFZGl0SW1nLnNyYyA9ICcuL2ltYWdlcy9lZGl0LnN2Zyc7XG4gICAgcHJvamVjdEVkaXRCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRJbWcpO1xuXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtYnRuJyk7XG4gICAgcHJvamVjdExpbmtCdG5zLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG4pO1xuXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3REZWxldGVJbWcuc3JjID0gJy4vaW1hZ2VzL3RyYXNoLnN2Zyc7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlSW1nKTtcblxuICAgIHRhYnMucHVzaChwcm9qZWN0TGluayk7XG5cbiAgICBwcm9qZWN0TGluay5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICAgICAgZGlzcGxheVRhc2tCdG4oKTtcbiAgICAgICAgaGlnaGxpZ2h0U2VsZWN0ZWQocHJvamVjdExpbmspO1xuICAgICAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdExpbmsuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgIH1cblxuICAgIHByb2plY3RFZGl0QnRuLm9uY2xpY2sgPSBlZGl0UHJvamVjdC5iaW5kKHRoaXMsIHByb2plY3QsIHByb2plY3RMaW5rLCBwcm9qZWN0TGlua0NvbnRhaW5lciwgcHJvamVjdE5hbWVEaXNwbGF5LCBjb250ZW50SGVhZGVyKTtcblxuICAgIHByb2plY3REZWxldGVCdG4ub25jbGljayA9IGRlbGV0ZVByb2plY3QuYmluZCh0aGlzLCBwcm9qZWN0LCBwcm9qZWN0TGluaywgcHJvamVjdExpbmtDb250YWluZXIsIGNvbnRlbnRIZWFkZXIpO1xufVxuXG4vLyBDQU4gUkVNT1ZFIFRISVMgT05DRSBGSU5JU0hFRCBBTkQgREVMRVRFIFRFU1QgUFJPSkVDVFNcbmZ1bmN0aW9uIGluaXRpYWxQcm9qZWN0RGlzcGxheSgpIHtcbiAgICBteVByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG59XG5cbi8vIGZ1bmN0aW9ucyB0byBkaXNwbGF5IGFwcHJvcHJpYXRlIHRhc2tzIGZvciBjaG9zZW4gdGFiXG5mdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGRpc3BsYXlUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQoYWxsVGFza3MpO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZGF5KCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZCh0b2RheSk7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUaGlzV2VlaygpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQodGhpc1dlZWspO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUltcG9ydGFudCgpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQoaW1wb3J0YW50KTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2hvdy1zaWRlYmFyJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctc2lkZWJhcicpO1xufVxuXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChzaWRlYmFyLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ3NpZGViYXInKSB7XG4gICAgICAgIG9wZW5NZW51KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3NlTWVudSgpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBkaXNwbGF5QWxsVGFza3MsIGRpc3BsYXlUb2RheSwgZGlzcGxheVRoaXNXZWVrLCBkaXNwbGF5SW1wb3J0YW50LCBjbG9zZVRhc2tGb3JtLCB1cGRhdGVUYXNrRGlzcGxheSwgY2xvc2VQcm9qZWN0Rm9ybSwgaW5pdGlhbFByb2plY3REaXNwbGF5LCBkaXNwbGF5UHJvamVjdCB9IiwiaW1wb3J0IHsgaWdub3JlRXZlbnQgLCBpc0NvbXBsZXRlQXJyYXkgfSBmcm9tIFwiLi9lZGl0VGFza1wiO1xuaW1wb3J0IHsgbXlQcm9qZWN0TGlzdCB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlBbGxUYXNrcywgdXBkYXRlVGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBteVRhc2tMaXN0IH0gZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG5jb25zdCBlZGl0UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1uYW1lLWlucHV0Jyk7XG5jb25zdCBlZGl0UHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3Qtc3VibWl0LWJ0bicpO1xuY29uc3QgZWRpdFByb2plY3RDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LWNhbmNlbC1idG4nKTtcblxuZnVuY3Rpb24gb3BlbkVkaXRQcm9qZWN0Rm9ybSgpIHtcbiAgICBlZGl0UHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRWRpdFByb2plY3RGb3JtKCkge1xuICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIHNob3dIaWRkZW5Qcm9qZWN0KCkge1xuICAgIGNvbnN0IG9wZW5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRpbmctcHJvamVjdCcpO1xuICAgIG9wZW5Qcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmctcHJvamVjdCcpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUVkaXRQcm9qZWN0Rm9ybSgpIHtcbiAgICBlZGl0UHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjbGVhckVkaXRQcm9qZWN0Rm9ybSgpO1xuICAgIHNob3dIaWRkZW5Qcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIGF1dG9maWxsUHJvamVjdEluZm8ocHJvamVjdCkge1xuICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gcHJvamVjdC5uYW1lO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0LCBwcm9qZWN0TGluaywgcHJvamVjdExpbmtDb250YWluZXIsIHByb2plY3ROYW1lRGlzcGxheSwgY29udGVudEhlYWRlcikge1xuICAgIGlnbm9yZUV2ZW50KCk7XG5cbiAgICBpZiAoZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09ICcnIHx8IGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy1wcm9qZWN0Jyk7XG4gICAgICAgIG9wZW5FZGl0UHJvamVjdEZvcm0oKTtcbiAgICAgICAgcHJvamVjdExpbmtDb250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRQcm9qZWN0Rm9ybSwgcHJvamVjdExpbmspO1xuICAgICAgICBhdXRvZmlsbFByb2plY3RJbmZvKHByb2plY3QpO1xuICAgICAgICBlZGl0UHJvamVjdE5hbWVJbnB1dC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dIaWRkZW5Qcm9qZWN0KCk7XG4gICAgICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmctcHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0TGlua0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFByb2plY3RGb3JtLCBwcm9qZWN0TGluayk7XG4gICAgICAgIGF1dG9maWxsUHJvamVjdEluZm8ocHJvamVjdCk7XG4gICAgICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgZWRpdFByb2plY3RTdWJtaXRCdG4ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCFlZGl0UHJvamVjdEZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBlZGl0UHJvamVjdEZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gZWRpdFByb2plY3ROYW1lSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0Lm5hbWUgPSBlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lRGlzcGxheS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QubmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsb3NlRWRpdFByb2plY3RGb3JtKCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15UHJvamVjdExpc3RcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWRpdFByb2plY3RDYW5jZWxCdG4ub25jbGljayA9IGNsb3NlRWRpdFByb2plY3RGb3JtO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QsIHByb2plY3RMaW5rLCBwcm9qZWN0TGlua0NvbnRhaW5lciwgY29udGVudEhlYWRlcikge1xuICAgIGlnbm9yZUV2ZW50KCk7XG5cbiAgICBmb3IgKGxldCBpID0gbXlUYXNrTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCB0YXNrID0gbXlUYXNrTGlzdFtpXTtcbiAgICAgICAgaWYgKHRhc2sudGFza1Byb2plY3QgPT09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgbXlUYXNrTGlzdC5zcGxpY2UobXlUYXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gaXNDb21wbGV0ZUFycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFRhc2sgPSBpc0NvbXBsZXRlQXJyYXlbaV07XG4gICAgICAgIGlmIChjb21wbGV0ZWRUYXNrLnRhc2tQcm9qZWN0ID09PSBwcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgICAgIGlzQ29tcGxldGVBcnJheS5zcGxpY2UoaXNDb21wbGV0ZUFycmF5LmluZGV4T2YoY29tcGxldGVkVGFzayksIDEpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0NvbXBsZXRlQXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoaXNDb21wbGV0ZUFycmF5KSk7XG4gICAgICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3QubmFtZSA9PT0gY29udGVudEhlYWRlci50ZXh0Q29udGVudCkge1xuICAgICAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgICB9XG5cbiAgICBteVByb2plY3RMaXN0LnNwbGljZShteVByb2plY3RMaXN0LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgIHByb2plY3RMaW5rQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RMaW5rKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15UHJvamVjdExpc3RcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0TGlzdCkpO1xufVxuXG5leHBvcnQgeyBlZGl0UHJvamVjdCwgZGVsZXRlUHJvamVjdCB9IiwiaW1wb3J0IHsgbXlUYXNrTGlzdCB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcbmltcG9ydCB7IHVwZGF0ZVRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5jb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWZvcm0nKTtcbmNvbnN0IGVkaXRUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUnKTtcbmNvbnN0IGVkaXREZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kZXRhaWxzJyk7XG5jb25zdCBlZGl0RHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZHVlLWRhdGUnKTtcbmNvbnN0IGVkaXRJc0ltcG9ydGFudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtaXMtaW1wb3J0YW50Jyk7XG5jb25zdCBlZGl0U3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtc3VibWl0LWJ0bicpO1xuY29uc3QgZWRpdENhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNhbmNlbC1idG4nKTtcbmNvbnN0IGlzQ29tcGxldGVBcnJheSA9IFtdO1xuXG4vLyBmdW5jdGlvbiB0byBpZ25vcmUgdGFza0RpdiBvbmNsaWNrIGV2ZW50IHdoZW4gYnV0dG9ucyB3aXRoaW4gdGhlIHRhc2tEaXYgYXJlIGNsaWNrZWRcbmZ1bmN0aW9uIGlnbm9yZUV2ZW50KGUpIHtcbiAgICBpZiAoIWUpIHtcbiAgICAgICAgZSA9IHdpbmRvdy5ldmVudDtcbiAgICB9XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGUoc3RhdHVzLCBzdGF0dXNDb250YWluZXIsIHRpdGxlLCB0YXNrKSB7XG4gICAgaWdub3JlRXZlbnQoKTtcblxuICAgIGlmIChzdGF0dXMuY2xhc3NMaXN0LnZhbHVlID09PSAndGFzay1pbmNvbXBsZXRlJykge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGFza0NvbXBsZXRlLnNyYyA9ICcuL2ltYWdlcy9jaXJjbGUtZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGUpO1xuXG4gICAgICAgIHRpdGxlLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG5cbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgICBpc0NvbXBsZXRlQXJyYXkucHVzaChteVRhc2tMaXN0LnNwbGljZShteVRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpWzBdKTtcblxuICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2staW5jb21wbGV0ZScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhdHVzQ29udGFpbmVyLmxhc3RDaGlsZCk7XG5cbiAgICAgICAgY29uc3QgdGFza0luY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGFza0luY29tcGxldGUuc3JjID0gJy4vaW1hZ2VzL2NpcmNsZS11bmZpbGxlZC5zdmcnO1xuICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luY29tcGxldGUpO1xuXG4gICAgICAgIHRpdGxlLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbm9uZScpO1xuXG4gICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlzQ29tcGxldGVBcnJheS5zcGxpY2UoaXNDb21wbGV0ZUFycmF5LmluZGV4T2YodGFzayksIDEpO1xuXG4gICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0NvbXBsZXRlQXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoaXNDb21wbGV0ZUFycmF5KSk7XG4gICAgLy8gc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVByaW9yaXR5KHN0YXR1c0NvbnRhaW5lciwgdGFzaykge1xuICAgIGlnbm9yZUV2ZW50KCk7XG5cbiAgICBpZiAoc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ3ByaW9yaXR5LXN0YXR1cyBwcmlvcml0eScpIHtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCduby1wcmlvcml0eScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhdHVzQ29udGFpbmVyLmxhc3RDaGlsZCk7XG5cbiAgICAgICAgY29uc3Qgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBub1ByaW9yaXR5LnNyYyA9ICcuL2ltYWdlcy9zdGFyLXVuZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChub1ByaW9yaXR5KTtcblxuICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnZhbHVlID09PSAncHJpb3JpdHktc3RhdHVzIG5vLXByaW9yaXR5Jykge1xuICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tcHJpb3JpdHknKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci1maWxsZWQuc3ZnJztcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlzQ29tcGxldGVBcnJheSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVuY29tcGxldGVkVGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkobXlUYXNrTGlzdCkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzQ29tcGxldGVBcnJheVwiLCBKU09OLnN0cmluZ2lmeShpc0NvbXBsZXRlQXJyYXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15VGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkobXlUYXNrTGlzdCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRUYXNrRm9ybSgpIHtcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZWRpdFRpdGxlSW5wdXQuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJFZGl0VGFza0Zvcm0oKSB7XG4gICAgZWRpdFRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICBlZGl0RGV0YWlsc0lucHV0LnZhbHVlID0gJyc7XG4gICAgZWRpdER1ZURhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGVkaXRJc0ltcG9ydGFudElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2hvd0hpZGRlblRhc2soKSB7XG4gICAgY29uc3Qgb3BlblRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdGluZy10YXNrJyk7XG4gICAgb3BlblRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy10YXNrJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRWRpdFRhc2tGb3JtKCkge1xuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyRWRpdFRhc2tGb3JtKCk7XG4gICAgc2hvd0hpZGRlblRhc2soKTtcbn1cblxuZnVuY3Rpb24gYXV0b2ZpbGxUYXNrSW5mbyh0YXNrKSB7XG4gICAgZWRpdFRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIGVkaXREdWVEYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgZWRpdElzSW1wb3J0YW50SW5wdXQuY2hlY2tlZCA9IHRhc2suaXNJbXBvcnRhbnQ7XG4gICAgaWYgKHRhc2suZGV0YWlscykge1xuICAgICAgICBlZGl0RGV0YWlsc0lucHV0LnZhbHVlID0gdGFzay5kZXRhaWxzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVkaXREZXRhaWxzSW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRhc2tEaXYsIHRvRG9Db250YWluZXIpIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgaWYgKGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXRhc2snKTtcbiAgICAgICAgb3BlbkVkaXRUYXNrRm9ybSgpO1xuICAgICAgICB0b0RvQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza0Zvcm0sIHRhc2tEaXYpO1xuICAgICAgICBhdXRvZmlsbFRhc2tJbmZvKHRhc2spO1xuICAgICAgICBlZGl0VGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dIaWRkZW5UYXNrKCk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy10YXNrJyk7XG4gICAgICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrRm9ybSwgdGFza0Rpdik7XG4gICAgICAgIGF1dG9maWxsVGFza0luZm8odGFzayk7XG4gICAgICAgIGVkaXRUaXRsZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgZWRpdFN1Ym1pdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIWVkaXRUYXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGVkaXRUYXNrRm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFzay50aXRsZSA9IGVkaXRUaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGFzay5kZXRhaWxzID0gZWRpdERldGFpbHNJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRhc2suZHVlRGF0ZSA9IGVkaXREdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gZWRpdElzSW1wb3J0YW50SW5wdXQuY2hlY2tlZDtcblxuICAgICAgICAgICAgY2xvc2VFZGl0VGFza0Zvcm0oKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgICAgICAgICBpZiAoaXNDb21wbGV0ZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1bmNvbXBsZXRlZFRhc2tMaXN0XCIsIEpTT04uc3RyaW5naWZ5KG15VGFza0xpc3QpKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzQ29tcGxldGVBcnJheVwiLCBKU09OLnN0cmluZ2lmeShpc0NvbXBsZXRlQXJyYXkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteVRhc2tMaXN0XCIsIEpTT04uc3RyaW5naWZ5KG15VGFza0xpc3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBlZGl0Q2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZUVkaXRUYXNrRm9ybTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpbmRleCwgdGFzaykge1xuICAgIGlnbm9yZUV2ZW50KCk7XG4gICAgbXlUYXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgaWYgKGlzQ29tcGxldGVBcnJheS5pbmNsdWRlcyh0YXNrKSkge1xuICAgICAgICBpc0NvbXBsZXRlQXJyYXkuc3BsaWNlKGlzQ29tcGxldGVBcnJheS5pbmRleE9mKHRhc2spLCAxKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuXG4gICAgaWYgKGlzQ29tcGxldGVBcnJheSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVuY29tcGxldGVkVGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkobXlUYXNrTGlzdCkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzQ29tcGxldGVBcnJheVwiLCBKU09OLnN0cmluZ2lmeShpc0NvbXBsZXRlQXJyYXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15VGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkobXlUYXNrTGlzdCkpO1xuICAgIH1cbiAgICAvLyBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IHsgdG9nZ2xlQ29tcGxldGUsIHRvZ2dsZVByaW9yaXR5LCBlZGl0VGFzaywgZGVsZXRlVGFzaywgaWdub3JlRXZlbnQsIGlzQ29tcGxldGVBcnJheSB9IiwiaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzLCBkaXNwbGF5VG9kYXksIGRpc3BsYXlUaGlzV2VlaywgZGlzcGxheUltcG9ydGFudCwgaW5pdGlhbFByb2plY3REaXNwbGF5LCB1cGRhdGVUYXNrRGlzcGxheSB9IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgeyBteVRhc2tMaXN0IH0gZnJvbSAnLi9jcmVhdGVUYXNrJztcbmltcG9ydCB7IG15UHJvamVjdExpc3QgfSBmcm9tICcuL2NyZWF0ZVByb2plY3QnO1xuaW1wb3J0IHsgaXNDb21wbGV0ZUFycmF5IH0gZnJvbSAnLi9lZGl0VGFzayc7XG5cbmNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC10YXNrcycpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbmNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtd2VlaycpO1xuY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydGFudCcpO1xuY29uc3QgdGFicyA9IFthbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnRdO1xuXG4vLyBMT0NBTCBTVE9SQUdFXG5cbi8vIFB1bGxzIGlzQ29tcGxldGVBcnJheSBmcm9tIGxvY2FsIHN0b3JhZ2UgdG8gZ2V0IGN1cnJlbnQgY29tcGxldGVkIHRhc2tzXG5mdW5jdGlvbiBnZXRDb21wbGV0ZWRUYXNrcygpIHtcbiAgICBjb25zdCBzdG9yZWRDb21wbGV0ZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0NvbXBsZXRlQXJyYXlcIikpO1xuICAgIGlzQ29tcGxldGVBcnJheS5sZW5ndGggPSAwO1xuICAgIGlzQ29tcGxldGVBcnJheS5wdXNoLmFwcGx5KGlzQ29tcGxldGVBcnJheSwgc3RvcmVkQ29tcGxldGVkVGFza3MpO1xufVxuXG4vLyBQdWxscyB1bmNvbXBsZXRlZFRhc2tMaXN0IGZyb20gbG9jYWwgc3RvcmFnZSB0byBnZXQgY3VycmVudCB1bmNvbXBsZXRlZCB0YXNrc1xuZnVuY3Rpb24gZ2V0VW5jb21wbGV0ZWRUYXNrcygpIHtcbiAgICBjb25zdCBzdG9yZWRVbmNvbXBsZXRlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVuY29tcGxldGVkVGFza0xpc3RcIikpO1xuICAgIG15VGFza0xpc3QubGVuZ3RoID0gMDtcbiAgICBteVRhc2tMaXN0LnB1c2guYXBwbHkobXlUYXNrTGlzdCwgc3RvcmVkVW5jb21wbGV0ZWRUYXNrcyk7XG59XG5cbi8vIFB1bGxzIG15VGFza0xpc3QgYW5kIG15UHJvamVjdExpc3QgZnJvbSBsb2NhbCBzdG9yYWdlIHRvIGdldCBzdG9yZWQgdGFza3MgYW5kIHByb2plY3RzXG4vLyBJZiB0aGUgaXNDb21wbGV0ZUFycmF5IGlzIE5PVCBlbXB0eSwgcHVsbHMgY29tcGxldGVkIGFuZCB1bmNvbXBsZXRlZCB0YXNrIGxpc3RzIGZyb20gbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IHN0b3JlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15VGFza0xpc3RcIikpO1xuICAgIG15VGFza0xpc3QubGVuZ3RoID0gMDtcbiAgICBteVRhc2tMaXN0LnB1c2guYXBwbHkobXlUYXNrTGlzdCwgc3RvcmVkVGFza3MpO1xuXG4gICAgaWYgKGlzQ29tcGxldGVBcnJheSkge1xuICAgICAgICBnZXRDb21wbGV0ZWRUYXNrcygpO1xuICAgICAgICBnZXRVbmNvbXBsZXRlZFRhc2tzKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlQcm9qZWN0TGlzdFwiKSk7XG4gICAgbXlQcm9qZWN0TGlzdC5sZW5ndGggPSAwO1xuICAgIG15UHJvamVjdExpc3QucHVzaC5hcHBseShteVByb2plY3RMaXN0LCBzdG9yZWRQcm9qZWN0cyk7XG59XG5cbi8vIEluaXRpYWwgcHVsbCBmcm9tIGxvY2FsIHN0b3JhZ2UgYW5kIHBhZ2UgZGlzcGxheVxuZ2V0TG9jYWxTdG9yYWdlKCk7XG5pbml0aWFsUHJvamVjdERpc3BsYXkoKTtcbmRpc3BsYXlBbGxUYXNrcygpO1xuXG4vLyBFdmVudCBsaXN0ZW5lcnMgZm9yIGhvbWUgY2F0ZWdvcnkgdGFic1xuYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWxsVGFza3MpO1xudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VG9kYXkpO1xudGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VGhpc1dlZWspO1xuaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUltcG9ydGFudCk7XG5cbmV4cG9ydCB7IGFsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudCwgdGFicywgZ2V0TG9jYWxTdG9yYWdlIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9