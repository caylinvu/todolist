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

const testProject = project('Programming');
const testProject2 = project('Home');
const testProject3 = project('Reading');
myProjectList.push(testProject, testProject2, testProject3);

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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTask */ "./src/editTask.js");





const contentHeader = document.querySelector('.content-heading');
const titleInput = document.getElementById('title');
const detailsInput = document.getElementById('details');
const dueDateInput = document.getElementById('due-date');
const isImportantInput = document.getElementById('is-important');
const addTaskForm = document.querySelector('.task-form');
const addTaskBtn = document.querySelector('.submit-btn');
const myTaskList = [];

const task = (title, details, dueDate, isImportant, isComplete, taskProject) => ({ title, details, dueDate, isImportant, isComplete, taskProject });

const testTask = task('This task is due this week', 'Details of the task', '2023-05-05', false, false);
const testTask2 = task('This task is due today', 'This task has details', '2023-05-01', false, false);
const testTask3 = task('This task is important', 'This task also has details', '2023-06-22', true, false);
const testTask4 = task('This task is due next week', '', '2023-05-12', false, false);
const testTask5 = task('This task is due next week but within 7 days', '', '2023-05-07', false, false);
const testTask6 = task('This task is due exactly 7 days from now', '', '2023-05-08', true, false);
const testTask7 = task('This task is due a day after 7 days', '', '2023-05-09', false, false);
const testTask8 = task('This task has no due date', '', '', false, false);
const testTask9 = task('PROGRAMMING TASK', '', '', false, false, 'Programming');
const testTask10 = task('PROGRAMMING TASK 2', '', '2023-07-21', false, false, 'Programming');
const testTask11 = task('HOME TASK', '', '', false, false, 'Home');
const testTask12 = task('HOME TASK 2', '', '2023-06-01', false, false, 'Home');
const testTask13 = task('READING TASK', '', '', false, false, 'Reading');
const testTask14 = task('READING TASK 2', '', '2023-09-10', false, false, 'Reading');

myTaskList.push(testTask, testTask2, testTask3, testTask4, testTask5, testTask6, testTask7, testTask8, testTask9, testTask10, testTask11, testTask12, testTask13, testTask14);

// localStorage.clear();
// console.log(localStorage);

function saveToLocalStorage() {
    localStorage.setItem("myTaskList", JSON.stringify(myTaskList));
    // localStorage.setItem("isCompleteArray", JSON.stringify(isCompleteArray));
    localStorage.setItem("myProjectList", JSON.stringify(_createProject__WEBPACK_IMPORTED_MODULE_1__.myProjectList));

    (0,___WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)();
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
const editProjectForm = document.querySelector('.edit-project-form');
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

    localStorage.setItem("separatedTaskList", JSON.stringify(_createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList));

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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");




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
        localStorage.setItem("separatedTaskList", JSON.stringify(_createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList));
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
                localStorage.setItem("separatedTaskList", JSON.stringify(_createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList));
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
        localStorage.setItem("separatedTaskList", JSON.stringify(_createTask__WEBPACK_IMPORTED_MODULE_0__.myTaskList));
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
/* harmony export */   "getCurrentStatus": () => (/* binding */ getCurrentStatus),
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
// localStorage.clear();

function getCurrentStatus() {
    const storedCompletedTasks = JSON.parse(localStorage.getItem("isCompleteArray"));
    _editTask__WEBPACK_IMPORTED_MODULE_3__.isCompleteArray.length = 0;
    _editTask__WEBPACK_IMPORTED_MODULE_3__.isCompleteArray.push.apply(_editTask__WEBPACK_IMPORTED_MODULE_3__.isCompleteArray, storedCompletedTasks);
    console.log(storedCompletedTasks);
}

function getSeparatedTaskList() {
    const separatedTaskList = JSON.parse(localStorage.getItem("separatedTaskList"));
    _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.length = 0;
    _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.push.apply(_createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList, separatedTaskList);
    console.log(_createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList);
}

function getLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem("myTaskList"));
    _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.length = 0;
    _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.push.apply(_createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList, storedTasks);
    console.log(storedTasks);

    if (_editTask__WEBPACK_IMPORTED_MODULE_3__.isCompleteArray) {
        getCurrentStatus();
        getSeparatedTaskList();
    }

    const storedProjects = JSON.parse(localStorage.getItem("myProjectList"));
    _createProject__WEBPACK_IMPORTED_MODULE_2__.myProjectList.length = 0;
    _createProject__WEBPACK_IMPORTED_MODULE_2__.myProjectList.push.apply(_createProject__WEBPACK_IMPORTED_MODULE_2__.myProjectList, storedProjects);
    console.log(storedProjects);
}

getLocalStorage();
(0,_display__WEBPACK_IMPORTED_MODULE_0__.initialProjectDisplay)();
(0,_display__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)();

allTasks.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks);
today.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayToday);
thisWeek.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayThisWeek);
important.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayImportant);



// TO DO

// FINISH UI

// ADD MOBILE SUPPORT

// CLEAN UP CODE

// SEND TO NADINE

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZWRpdFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZWRpdFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvc2VQcm9qZWN0Rm9ybSwgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKTtcbmNvbnN0IHByb2plY3RTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zdWJtaXQtYnRuJyk7XG5jb25zdCBteVByb2plY3RMaXN0ID0gW107XG5cbmNvbnN0IHByb2plY3QgPSAobmFtZSkgPT4gKHsgbmFtZSB9KTtcblxuY29uc3QgdGVzdFByb2plY3QgPSBwcm9qZWN0KCdQcm9ncmFtbWluZycpO1xuY29uc3QgdGVzdFByb2plY3QyID0gcHJvamVjdCgnSG9tZScpO1xuY29uc3QgdGVzdFByb2plY3QzID0gcHJvamVjdCgnUmVhZGluZycpO1xubXlQcm9qZWN0TGlzdC5wdXNoKHRlc3RQcm9qZWN0LCB0ZXN0UHJvamVjdDIsIHRlc3RQcm9qZWN0Myk7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChuYW1lKTtcbiAgICBteVByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgZGlzcGxheVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdEZvcm0oKSB7XG4gICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5wcm9qZWN0U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXByb2plY3RGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBwcm9qZWN0Rm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFByb2plY3QoKTtcbiAgICAgICAgY2xvc2VQcm9qZWN0Rm9ybSgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IG15UHJvamVjdExpc3QsIGNsZWFyUHJvamVjdEZvcm0gfSIsImltcG9ydCB7IGNsb3NlVGFza0Zvcm0sIHVwZGF0ZVRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgbXlQcm9qZWN0TGlzdCB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBpc0NvbXBsZXRlQXJyYXkgfSBmcm9tIFwiLi9lZGl0VGFza1wiO1xuXG5jb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaGVhZGluZycpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuY29uc3QgZGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpO1xuY29uc3QgaXNJbXBvcnRhbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1pbXBvcnRhbnQnKTtcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG5jb25zdCBteVRhc2tMaXN0ID0gW107XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlLCB0YXNrUHJvamVjdCkgPT4gKHsgdGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlLCB0YXNrUHJvamVjdCB9KTtcblxuY29uc3QgdGVzdFRhc2sgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIHRoaXMgd2VlaycsICdEZXRhaWxzIG9mIHRoZSB0YXNrJywgJzIwMjMtMDUtMDUnLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2syID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSB0b2RheScsICdUaGlzIHRhc2sgaGFzIGRldGFpbHMnLCAnMjAyMy0wNS0wMScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazMgPSB0YXNrKCdUaGlzIHRhc2sgaXMgaW1wb3J0YW50JywgJ1RoaXMgdGFzayBhbHNvIGhhcyBkZXRhaWxzJywgJzIwMjMtMDYtMjInLCB0cnVlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazQgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIG5leHQgd2VlaycsICcnLCAnMjAyMy0wNS0xMicsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazUgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIG5leHQgd2VlayBidXQgd2l0aGluIDcgZGF5cycsICcnLCAnMjAyMy0wNS0wNycsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazYgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIGV4YWN0bHkgNyBkYXlzIGZyb20gbm93JywgJycsICcyMDIzLTA1LTA4JywgdHJ1ZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s3ID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSBhIGRheSBhZnRlciA3IGRheXMnLCAnJywgJzIwMjMtMDUtMDknLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s4ID0gdGFzaygnVGhpcyB0YXNrIGhhcyBubyBkdWUgZGF0ZScsICcnLCAnJywgZmFsc2UsIGZhbHNlKTtcbmNvbnN0IHRlc3RUYXNrOSA9IHRhc2soJ1BST0dSQU1NSU5HIFRBU0snLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ1Byb2dyYW1taW5nJyk7XG5jb25zdCB0ZXN0VGFzazEwID0gdGFzaygnUFJPR1JBTU1JTkcgVEFTSyAyJywgJycsICcyMDIzLTA3LTIxJywgZmFsc2UsIGZhbHNlLCAnUHJvZ3JhbW1pbmcnKTtcbmNvbnN0IHRlc3RUYXNrMTEgPSB0YXNrKCdIT01FIFRBU0snLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ0hvbWUnKTtcbmNvbnN0IHRlc3RUYXNrMTIgPSB0YXNrKCdIT01FIFRBU0sgMicsICcnLCAnMjAyMy0wNi0wMScsIGZhbHNlLCBmYWxzZSwgJ0hvbWUnKTtcbmNvbnN0IHRlc3RUYXNrMTMgPSB0YXNrKCdSRUFESU5HIFRBU0snLCAnJywgJycsIGZhbHNlLCBmYWxzZSwgJ1JlYWRpbmcnKTtcbmNvbnN0IHRlc3RUYXNrMTQgPSB0YXNrKCdSRUFESU5HIFRBU0sgMicsICcnLCAnMjAyMy0wOS0xMCcsIGZhbHNlLCBmYWxzZSwgJ1JlYWRpbmcnKTtcblxubXlUYXNrTGlzdC5wdXNoKHRlc3RUYXNrLCB0ZXN0VGFzazIsIHRlc3RUYXNrMywgdGVzdFRhc2s0LCB0ZXN0VGFzazUsIHRlc3RUYXNrNiwgdGVzdFRhc2s3LCB0ZXN0VGFzazgsIHRlc3RUYXNrOSwgdGVzdFRhc2sxMCwgdGVzdFRhc2sxMSwgdGVzdFRhc2sxMiwgdGVzdFRhc2sxMywgdGVzdFRhc2sxNCk7XG5cbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcblxuZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlUYXNrTGlzdFwiLCBKU09OLnN0cmluZ2lmeShteVRhc2tMaXN0KSk7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0NvbXBsZXRlQXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoaXNDb21wbGV0ZUFycmF5KSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteVByb2plY3RMaXN0XCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdExpc3QpKTtcblxuICAgIGdldExvY2FsU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBkZXRhaWxzID0gZGV0YWlsc0lucHV0LnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgaXNJbXBvcnRhbnQgPSBpc0ltcG9ydGFudElucHV0LmNoZWNrZWQ7XG4gICAgY29uc3QgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIGxldCB0YXNrUHJvamVjdCA9ICcnO1xuXG4gICAgbXlQcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSBwcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgICAgIHRhc2tQcm9qZWN0ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZXdUYXNrID0gdGFzayh0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgaXNJbXBvcnRhbnQsIGlzQ29tcGxldGUsIHRhc2tQcm9qZWN0KTtcbiAgICBteVRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gbmV3VGFzaztcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRm9ybSgpIHtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gJyc7XG4gICAgZGV0YWlsc0lucHV0LnZhbHVlID0gJyc7XG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgaXNJbXBvcnRhbnRJbnB1dC5jaGVja2VkID0gZmFsc2U7XG59XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghYWRkVGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGFkZFRhc2tGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkVGFzaygpO1xuICAgICAgICBjbG9zZVRhc2tGb3JtKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59KTtcblxuZXhwb3J0IHsgbXlUYXNrTGlzdCwgY2xlYXJUYXNrRm9ybSwgc2F2ZVRvTG9jYWxTdG9yYWdlIH0iLCJpbXBvcnQgeyBhbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnQsIHRhYnMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IG15VGFza0xpc3QsIGNsZWFyVGFza0Zvcm0gfSBmcm9tICcuL2NyZWF0ZVRhc2snO1xuaW1wb3J0IHsgdG9nZ2xlQ29tcGxldGUsIHRvZ2dsZVByaW9yaXR5LCBlZGl0VGFzaywgZGVsZXRlVGFzaywgaXNDb21wbGV0ZUFycmF5IH0gZnJvbSAnLi9lZGl0VGFzayc7XG5pbXBvcnQgeyBteVByb2plY3RMaXN0LCBjbGVhclByb2plY3RGb3JtIH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0JztcbmltcG9ydCB7IGVkaXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH0gZnJvbSAnLi9lZGl0UHJvamVjdCc7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuY29uc3QgY29udGVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWhlYWRpbmcnKTtcbmNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1mb3JtJyk7XG5jb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ0bicpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYnRuJyk7XG5jb25zdCBwcm9qZWN0Q2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FuY2VsLWJ0bicpO1xuY29uc3QgcHJvamVjdExpbmtDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saW5rcycpO1xuY29uc3QgZWRpdFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1mb3JtJyk7XG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5jb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbi8vIGhpZ2hsaWdodCB0aGUgc2VsZWN0ZWQgbmF2aWdhdGlvbiB0YWJcbmZ1bmN0aW9uIGhpZ2hsaWdodFNlbGVjdGVkKHNlbGVjdGVkVGFiKSB7XG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG5cbiAgICBzZWxlY3RlZFRhYi5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xufVxuXG4vLyBvcGVuL2Nsb3NlIHRoZSBmb3JtIHRvIGFkZCBuZXcgdGFza3NcbmZ1bmN0aW9uIG9wZW5UYXNrRm9ybSgpIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjbGVhclRhc2tGb3JtKCk7XG59XG5cbmNhbmNlbEJ0bi5vbmNsaWNrID0gY2xvc2VUYXNrRm9ybTtcblxuLy8gb3Blbi9jbG9zZSB0aGUgZm9ybSB0byBhZGQgbmV3IHByb2plY3RzXG5cbmZ1bmN0aW9uIG9wZW5Qcm9qZWN0Rm9ybSgpIHtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBwcm9qZWN0TmFtZUlucHV0LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjbGVhclByb2plY3RGb3JtKCk7XG59XG5cbmFkZFByb2plY3RCdG4ub25jbGljayA9IG9wZW5Qcm9qZWN0Rm9ybTtcbnByb2plY3RDYW5jZWxCdG4ub25jbGljayA9IGNsb3NlUHJvamVjdEZvcm07XG5cblxuLy8gY3JlYXRlIGFuZCBkaXNwbGF5IHRoZSBidXR0b24gdG8gYWRkIG5ldyB0YXNrc1xuZnVuY3Rpb24gZGlzcGxheVRhc2tCdG4oKSB7XG4gICAgY29uc3QgdGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1idG4nKTtcblxuICAgIGNvbnN0IGJ0bkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYnRuSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL3BsdXMuc3ZnJztcblxuICAgIGNvbnN0IGJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5UZXh0LnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgIHRhc2tCdG4ub25jbGljayA9IG9wZW5UYXNrRm9ybTtcblxuICAgIHRhc2tCdG4uYXBwZW5kQ2hpbGQoYnRuSW1hZ2UpO1xuICAgIHRhc2tCdG4uYXBwZW5kQ2hpbGQoYnRuVGV4dCk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0J0bik7XG59XG5cbi8vIHJlbW92ZSB0aGUgYnV0dG9uIHRvIGFkZCBuZXcgdGFzayAoZm9yIHBhZ2VzIHdoZXJlIHlvdSBjYW5ub3QgYWRkIG5ldyB0YXNrKVxuZnVuY3Rpb24gcmVtb3ZlVGFza0J0bigpIHtcbiAgICBpZiAobWFpbkNvbnRlbnQubGFzdENoaWxkLmNsYXNzTmFtZSA9PT0gJ3Rhc2stYnRuJykge1xuICAgICAgICBtYWluQ29udGVudC5yZW1vdmVDaGlsZChtYWluQ29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gZGlzcGxheSB0YXNrIGRldGFpbHNcbmZ1bmN0aW9uIGRpc3BsYXlEZXRhaWxzKHRhc2ssIHRhc2tEaXYpIHtcbiAgICBpZiAodGFza0Rpdi5sYXN0Q2hpbGQuY2xhc3NOYW1lICE9ICdkZXRhaWxzLWRpc3BsYXknICYmIHRhc2suZGV0YWlscykge1xuICAgICAgICBjb25zdCBkZXRhaWxzRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxzRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWRpc3BsYXknKTtcbiAgICAgICAgZGV0YWlsc0Rpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrLmRldGFpbHM7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpc3BsYXkpO1xuICAgIH0gZWxzZSBpZiAodGFza0Rpdi5sYXN0Q2hpbGQuY2xhc3NOYW1lID09PSAnZGV0YWlscy1kaXNwbGF5JyAmJiB0YXNrLmRldGFpbHMpIHtcbiAgICAgICAgdGFza0Rpdi5yZW1vdmVDaGlsZCh0YXNrRGl2Lmxhc3RDaGlsZCk7XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiB0byBkaXNwbGF5IGEgc2luZ3VsYXIgdGFza1xuZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzaykge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuICAgIGNvbnN0IHRhc2tNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza01haW4uY2xhc3NMaXN0LmFkZCgndGFzay1tYWluJyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTWFpbik7XG5cbiAgICBjb25zdCB0YXNrTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tMZWZ0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGVmdCcpO1xuICAgIHRhc2tNYWluLmFwcGVuZENoaWxkKHRhc2tMZWZ0KTtcblxuICAgIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzJyk7XG4gICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGFza1N0YXR1cyk7XG5cbiAgICBjb25zdCB0YXNrSW5jb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIC8vIHRhc2tJbmNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5jb21wbGV0ZScpO1xuICAgIHRhc2tJbmNvbXBsZXRlLnNyYyA9ICcuL2ltYWdlcy9jaXJjbGUtdW5maWxsZWQuc3ZnJztcblxuICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRhc2tDb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLWZpbGxlZC5zdmcnO1xuXG4gICAgY29uc3QgdGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWRpc3BsYXknKTtcbiAgICB0aXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRpdGxlRGlzcGxheSk7XG5cbiAgICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICAgIHRhc2tTdGF0dXMuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlKTtcbiAgICAgICAgdGl0bGVEaXNwbGF5LnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1N0YXR1cy5hcHBlbmRDaGlsZCh0YXNrSW5jb21wbGV0ZSk7XG4gICAgICAgIHRhc2tJbmNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5jb21wbGV0ZScpO1xuICAgIH1cblxuICAgIHRhc2tTdGF0dXMub25jbGljayA9IHRvZ2dsZUNvbXBsZXRlLmJpbmQodGhpcywgdGFza0luY29tcGxldGUsIHRhc2tTdGF0dXMsIHRpdGxlRGlzcGxheSwgdGFzayk7XG5cbiAgICBpZiAodGFzay5kZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IGV4cGFuZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZXhwYW5kVGFzay5zcmMgPSAnLi9pbWFnZXMvZXhwYW5kLXRhc2suc3ZnJztcbiAgICAgICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQoZXhwYW5kVGFzayk7XG4gICAgICAgIGV4cGFuZFRhc2sudGl0bGUgPSAnQ2xpY2sgdGFzayB0byBzaG93IGRldGFpbHMnO1xuICAgICAgICBleHBhbmRUYXNrLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC10YXNrJyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRhc2tSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tSaWdodC5jbGFzc0xpc3QuYWRkKCd0YXNrLXJpZ2h0Jyk7XG4gICAgdGFza01haW4uYXBwZW5kQ2hpbGQodGFza1JpZ2h0KTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGR1ZURhdGVEaXNwbGF5KTtcblxuICAgIGlmICghdGFzay5kdWVEYXRlKSB7XG4gICAgICAgIGR1ZURhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gJ05vIER1ZSBEYXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBkdWVEYXRlRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmlvcml0eVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXN0YXR1cycpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eVN0YXR1cyk7XG5cbiAgICBjb25zdCBub1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbm9Qcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci11bmZpbGxlZC5zdmcnO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci1maWxsZWQuc3ZnJztcblxuICAgIGlmICh0YXNrLmlzSW1wb3J0YW50KSB7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcmlvcml0eVN0YXR1cy5hcHBlbmRDaGlsZChub1ByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgnbm8tcHJpb3JpdHknKTtcbiAgICB9XG5cbiAgICBwcmlvcml0eVN0YXR1cy5vbmNsaWNrID0gdG9nZ2xlUHJpb3JpdHkuYmluZCh0aGlzLCBwcmlvcml0eVN0YXR1cywgdGFzayk7XG5cbiAgICBjb25zdCB0YXNrRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGFza0VkaXRCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0LWJ0bicpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZCh0YXNrRWRpdEJ0bik7XG5cbiAgICBjb25zdCBlZGl0QnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWRpdEJ0bkltZy5zcmMgPSAnLi9pbWFnZXMvZWRpdC5zdmcnO1xuICAgIHRhc2tFZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRCdG5JbWcpO1xuXG4gICAgdGFza0VkaXRCdG4ub25jbGljayA9IGVkaXRUYXNrLmJpbmQodGhpcywgdGFzaywgdGFza0RpdiwgdG9Eb0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0YXNrRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZS1idG4nKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ0bik7XG5cbiAgICBjb25zdCBkZWxldGVCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVCdG5JbWcuc3JjID0gJy4vaW1hZ2VzL3RyYXNoLnN2Zyc7XG4gICAgdGFza0RlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVCdG5JbWcpO1xuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gbXlUYXNrTGlzdC5pbmRleE9mKHRhc2spO1xuXG4gICAgdGFza0RlbGV0ZUJ0bi5vbmNsaWNrID0gZGVsZXRlVGFzay5iaW5kKHRoaXMsIGN1cnJlbnRJbmRleCwgdGFzayk7XG5cbiAgICB0YXNrRGl2Lm9uY2xpY2sgPSBkaXNwbGF5RGV0YWlscy5iaW5kKHRoaXMsIHRhc2ssIHRhc2tEaXYpO1xufVxuXG4vLyBmdW5jdGlvbiB0byBjbGVhciBkaXNwbGF5IFxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCkge1xuICAgIHdoaWxlICh0b0RvQ29udGFpbmVyLmZpcnN0Q2hpbGQgJiYgdG9Eb0NvbnRhaW5lci5maXJzdENoaWxkLmNsYXNzTmFtZSAhPSAnZWRpdC10YXNrLWZvcm0nKSB7XG4gICAgICAgIHRvRG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9Eb0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSh0b0RvQ29udGFpbmVyLmxhc3RDaGlsZCAmJiB0b0RvQ29udGFpbmVyLmxhc3RDaGlsZC5jbGFzc05hbWUgIT0gJ2VkaXQtdGFzay1mb3JtJykge1xuICAgICAgICB0b0RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvRG9Db250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuLy8gZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB0YXNrIGxpc3QgZGlzcGxheVxuZnVuY3Rpb24gdXBkYXRlVGFza0Rpc3BsYXkoKSB7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG5cbiAgICAvLyBpZiBhIHRhc2sgaXMgY29tcGxldGUsIHJlbW92ZSBpdCBmcm9tIHRoZSB0YXNrIGxpc3RcbiAgICBmb3IgKGxldCBpID0gbXlUYXNrTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCB0YXNrID0gbXlUYXNrTGlzdFtpXTtcbiAgICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgbXlUYXNrTGlzdC5zcGxpY2UobXlUYXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNvcnQgdGhlIHRhc2tzIHRoYXQgYXJlIGluY29tcGxldGVcbiAgICBteVRhc2tMaXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgbGV0IHg7XG4gICAgICAgIGxldCB5O1xuXG4gICAgICAgIGlmICghYS5kdWVEYXRlKSB7XG4gICAgICAgICAgICB4ID0gbmV3IERhdGUoJzEwMDAwMCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IG5ldyBEYXRlKGEuZHVlRGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWIuZHVlRGF0ZSkge1xuICAgICAgICAgICAgeSA9IG5ldyBEYXRlKCcxMDAwMDAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHkgPSBuZXcgRGF0ZShiLmR1ZURhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHggPCB5KSByZXR1cm4gLTE7XG4gICAgICAgIGlmICh4ID4geSkgcmV0dXJuIDE7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZXBhcmF0ZWRUYXNrTGlzdFwiLCBKU09OLnN0cmluZ2lmeShteVRhc2tMaXN0KSk7XG5cbiAgICAvLyBhcHBlbmQgdGhlIGNvbXBsZXRlZCB0YXNrcyB0byB0aGUgYm90dG9tIG9mIHRoZSBzb3J0ZWQgaW5jb21wbGV0ZSB0YXNrc1xuICAgIG15VGFza0xpc3QucHVzaC5hcHBseShteVRhc2tMaXN0LCBpc0NvbXBsZXRlQXJyYXkpO1xuXG4gICAgLy8gc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IGN1cnJlbnREYXRlO1xuICAgIGlmIChtb250aCA8IDEwICYmIGRheSA+IDEwKSB7XG4gICAgICAgIGN1cnJlbnREYXRlID0gYCR7eWVhcn0tMCR7bW9udGh9LSR7ZGF5fWA7XG4gICAgfSBlbHNlIGlmIChtb250aCA8IDEwICYmIGRheSA8IDEwKSB7XG4gICAgICAgIGN1cnJlbnREYXRlID0gYCR7eWVhcn0tMCR7bW9udGh9LTAke2RheX1gO1xuICAgIH0gZWxzZSBpZiAobW9udGggPiAxMCAmJiBkYXkgPCAxMCkge1xuICAgICAgICBjdXJyZW50RGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LTAke2RheX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnREYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICB9XG5cbiAgICBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ0FsbCBUYXNrcycpIHtcbiAgICAgICAgbXlUYXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSAnVG9kYXknKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzVG9kYXkgPSBteVRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suZHVlRGF0ZSA9PT0gY3VycmVudERhdGUpO1xuICAgICAgICB0YXNrc1RvZGF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09ICdUaGlzIFdlZWsnKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXZWVrRW5kID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpICsgNyk7XG5cbiAgICAgICAgY29uc3QgdGFza3NUaGlzV2VlayA9IG15VGFza0xpc3QuZmlsdGVyKHRhc2sgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGVBcnJheSA9IHRhc2suZHVlRGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgY29uc3QgdGFza1llYXIgPSB0YXNrRGF0ZUFycmF5WzBdO1xuICAgICAgICAgICAgY29uc3QgdGFza01vbnRoID0gcGFyc2VJbnQodGFza0RhdGVBcnJheVsxXSwgMTApIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXkgPSB0YXNrRGF0ZUFycmF5WzJdO1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrWWVhciwgdGFza01vbnRoLCB0YXNrRGF5KTtcbiAgICAgICAgICAgIHJldHVybiAodGFza0RhdGUgPj0gZGF0ZSAmJiB0YXNrRGF0ZSA8PSBjdXJyZW50V2Vla0VuZCkgfHwgKHRhc2suZHVlRGF0ZSA9PT0gY3VycmVudERhdGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0YXNrc1RoaXNXZWVrLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09ICdJbXBvcnRhbnQnKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzSW1wb3J0YW50ID0gbXlUYXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLmlzSW1wb3J0YW50KTtcbiAgICAgICAgdGFza3NJbXBvcnRhbnQuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhc2tzQnlQcm9qZWN0ID0gbXlUYXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLnRhc2tQcm9qZWN0ID09PSBjb250ZW50SGVhZGVyLnRleHRDb250ZW50KTtcbiAgICAgICAgdGFza3NCeVByb2plY3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpbmsnKTtcbiAgICBwcm9qZWN0TGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TmFtZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lLWRpc3BsYXknKTtcbiAgICBwcm9qZWN0TmFtZURpc3BsYXkudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdExpbmsuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVEaXNwbGF5KTtcblxuICAgIGNvbnN0IHByb2plY3RMaW5rQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RMaW5rQnRucy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpbmstYnRucycpO1xuICAgIHByb2plY3RMaW5rLmFwcGVuZENoaWxkKHByb2plY3RMaW5rQnRucyk7XG5cbiAgICBjb25zdCBwcm9qZWN0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdC1idG4nKTtcbiAgICBwcm9qZWN0TGlua0J0bnMuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRCdG4pO1xuXG4gICAgY29uc3QgcHJvamVjdEVkaXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9qZWN0RWRpdEltZy5zcmMgPSAnLi9pbWFnZXMvZWRpdC5zdmcnO1xuICAgIHByb2plY3RFZGl0QnRuLmFwcGVuZENoaWxkKHByb2plY3RFZGl0SW1nKTtcblxuICAgIGNvbnN0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlLWJ0bicpO1xuICAgIHByb2plY3RMaW5rQnRucy5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnRuKTtcblxuICAgIGNvbnN0IHByb2plY3REZWxldGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9qZWN0RGVsZXRlSW1nLnNyYyA9ICcuL2ltYWdlcy90cmFzaC5zdmcnO1xuICAgIHByb2plY3REZWxldGVCdG4uYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUltZyk7XG5cbiAgICB0YWJzLnB1c2gocHJvamVjdExpbmspO1xuXG4gICAgcHJvamVjdExpbmsub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgICAgIGRpc3BsYXlUYXNrQnRuKCk7XG4gICAgICAgIGhpZ2hsaWdodFNlbGVjdGVkKHByb2plY3RMaW5rKTtcbiAgICAgICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3RMaW5rLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0RWRpdEJ0bi5vbmNsaWNrID0gZWRpdFByb2plY3QuYmluZCh0aGlzLCBwcm9qZWN0LCBwcm9qZWN0TGluaywgcHJvamVjdExpbmtDb250YWluZXIsIHByb2plY3ROYW1lRGlzcGxheSwgY29udGVudEhlYWRlcik7XG5cbiAgICBwcm9qZWN0RGVsZXRlQnRuLm9uY2xpY2sgPSBkZWxldGVQcm9qZWN0LmJpbmQodGhpcywgcHJvamVjdCwgcHJvamVjdExpbmssIHByb2plY3RMaW5rQ29udGFpbmVyLCBjb250ZW50SGVhZGVyKTtcbn1cblxuLy8gQ0FOIFJFTU9WRSBUSElTIE9OQ0UgRklOSVNIRUQgQU5EIERFTEVURSBURVNUIFBST0pFQ1RTXG5mdW5jdGlvbiBpbml0aWFsUHJvamVjdERpc3BsYXkoKSB7XG4gICAgbXlQcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xufVxuXG4vLyBmdW5jdGlvbnMgdG8gZGlzcGxheSBhcHByb3ByaWF0ZSB0YXNrcyBmb3IgY2hvc2VuIHRhYlxuZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tzKCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBkaXNwbGF5VGFza0J0bigpO1xuICAgIGhpZ2hsaWdodFNlbGVjdGVkKGFsbFRhc2tzKTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ0FsbCBUYXNrcyc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RheSgpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQodG9kYXkpO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgY2xvc2VUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGhpc1dlZWsoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGhpZ2hsaWdodFNlbGVjdGVkKHRoaXNXZWVrKTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbXBvcnRhbnQoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGhpZ2hsaWdodFNlbGVjdGVkKGltcG9ydGFudCk7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgY2xvc2VUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBvcGVuTWVudSgpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3Nob3ctc2lkZWJhcicpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXNpZGViYXInKTtcbn1cblxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoc2lkZWJhci5jbGFzc0xpc3QudmFsdWUgPT09ICdzaWRlYmFyJykge1xuICAgICAgICBvcGVuTWVudSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZU1lbnUoKTtcbiAgICB9XG59KTtcblxuZXhwb3J0IHsgZGlzcGxheUFsbFRhc2tzLCBkaXNwbGF5VG9kYXksIGRpc3BsYXlUaGlzV2VlaywgZGlzcGxheUltcG9ydGFudCwgY2xvc2VUYXNrRm9ybSwgdXBkYXRlVGFza0Rpc3BsYXksIGNsb3NlUHJvamVjdEZvcm0sIGluaXRpYWxQcm9qZWN0RGlzcGxheSwgZGlzcGxheVByb2plY3QgfSIsImltcG9ydCB7IGlnbm9yZUV2ZW50IH0gZnJvbSBcIi4vZWRpdFRhc2tcIjtcbmltcG9ydCB7IG15UHJvamVjdExpc3QgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MsIHVwZGF0ZVRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgbXlUYXNrTGlzdCAsIHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcblxuY29uc3QgZWRpdFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1mb3JtJyk7XG5jb25zdCBlZGl0UHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtbmFtZS1pbnB1dCcpO1xuY29uc3QgZWRpdFByb2plY3RTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LXN1Ym1pdC1idG4nKTtcbmNvbnN0IGVkaXRQcm9qZWN0Q2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1jYW5jZWwtYnRuJyk7XG5cbmZ1bmN0aW9uIG9wZW5FZGl0UHJvamVjdEZvcm0oKSB7XG4gICAgZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbGVhckVkaXRQcm9qZWN0Rm9ybSgpIHtcbiAgICBlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBzaG93SGlkZGVuUHJvamVjdCgpIHtcbiAgICBjb25zdCBvcGVuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0aW5nLXByb2plY3QnKTtcbiAgICBvcGVuUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXByb2plY3QnKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VFZGl0UHJvamVjdEZvcm0oKSB7XG4gICAgZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJFZGl0UHJvamVjdEZvcm0oKTtcbiAgICBzaG93SGlkZGVuUHJvamVjdCgpO1xufVxuXG5mdW5jdGlvbiBhdXRvZmlsbFByb2plY3RJbmZvKHByb2plY3QpIHtcbiAgICBlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IHByb2plY3QubmFtZTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3QocHJvamVjdCwgcHJvamVjdExpbmssIHByb2plY3RMaW5rQ29udGFpbmVyLCBwcm9qZWN0TmFtZURpc3BsYXksIGNvbnRlbnRIZWFkZXIpIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgaWYgKGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnJyB8fCBlZGl0UHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmctcHJvamVjdCcpO1xuICAgICAgICBvcGVuRWRpdFByb2plY3RGb3JtKCk7XG4gICAgICAgIHByb2plY3RMaW5rQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0UHJvamVjdEZvcm0sIHByb2plY3RMaW5rKTtcbiAgICAgICAgYXV0b2ZpbGxQcm9qZWN0SW5mbyhwcm9qZWN0KTtcbiAgICAgICAgZWRpdFByb2plY3ROYW1lSW5wdXQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93SGlkZGVuUHJvamVjdCgpO1xuICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdExpbmtDb250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRQcm9qZWN0Rm9ybSwgcHJvamVjdExpbmspO1xuICAgICAgICBhdXRvZmlsbFByb2plY3RJbmZvKHByb2plY3QpO1xuICAgICAgICBlZGl0UHJvamVjdE5hbWVJbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIGVkaXRQcm9qZWN0U3VibWl0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICghZWRpdFByb2plY3RGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgZWRpdFByb2plY3RGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5uYW1lID09PSBjb250ZW50SGVhZGVyLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvamVjdC5uYW1lID0gZWRpdFByb2plY3ROYW1lSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZURpc3BsYXkudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2xvc2VFZGl0UHJvamVjdEZvcm0oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVkaXRQcm9qZWN0Q2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZUVkaXRQcm9qZWN0Rm9ybTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0LCBwcm9qZWN0TGluaywgcHJvamVjdExpbmtDb250YWluZXIsIGNvbnRlbnRIZWFkZXIpIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IG15VGFza0xpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgdGFzayA9IG15VGFza0xpc3RbaV07XG4gICAgICAgIGlmICh0YXNrLnRhc2tQcm9qZWN0ID09PSBwcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgICAgIG15VGFza0xpc3Quc3BsaWNlKG15VGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3QubmFtZSA9PT0gY29udGVudEhlYWRlci50ZXh0Q29udGVudCkge1xuICAgICAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgICB9XG5cbiAgICBteVByb2plY3RMaXN0LnNwbGljZShteVByb2plY3RMaXN0LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgIHByb2plY3RMaW5rQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RMaW5rKTtcbn1cblxuZXhwb3J0IHsgZWRpdFByb2plY3QsIGRlbGV0ZVByb2plY3QgfSIsImltcG9ydCB7IG15VGFza0xpc3QgLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgeyB1cGRhdGVUYXNrRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSwgZ2V0Q3VycmVudFN0YXR1cyB9IGZyb20gXCIuXCI7XG5cbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybScpO1xuY29uc3QgZWRpdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpO1xuY29uc3QgZWRpdERldGFpbHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRldGFpbHMnKTtcbmNvbnN0IGVkaXREdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kdWUtZGF0ZScpO1xuY29uc3QgZWRpdElzSW1wb3J0YW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1pcy1pbXBvcnRhbnQnKTtcbmNvbnN0IGVkaXRTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1zdWJtaXQtYnRuJyk7XG5jb25zdCBlZGl0Q2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY2FuY2VsLWJ0bicpO1xuY29uc3QgaXNDb21wbGV0ZUFycmF5ID0gW107XG5cbi8vIGZ1bmN0aW9uIHRvIGlnbm9yZSB0YXNrRGl2IG9uY2xpY2sgZXZlbnQgd2hlbiBidXR0b25zIHdpdGhpbiB0aGUgdGFza0RpdiBhcmUgY2xpY2tlZFxuZnVuY3Rpb24gaWdub3JlRXZlbnQoZSkge1xuICAgIGlmICghZSkge1xuICAgICAgICBlID0gd2luZG93LmV2ZW50O1xuICAgIH1cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0ZShzdGF0dXMsIHN0YXR1c0NvbnRhaW5lciwgdGl0bGUsIHRhc2spIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgaWYgKHN0YXR1cy5jbGFzc0xpc3QudmFsdWUgPT09ICd0YXNrLWluY29tcGxldGUnKSB7XG4gICAgICAgIHN0YXR1cy5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrLWluY29tcGxldGUnKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXR1c0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrQ29tcGxldGUuc3JjID0gJy4vaW1hZ2VzL2NpcmNsZS1maWxsZWQuc3ZnJztcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZSk7XG5cbiAgICAgICAgdGl0bGUuc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKTtcblxuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0cnVlO1xuXG4gICAgICAgIGlzQ29tcGxldGVBcnJheS5wdXNoKG15VGFza0xpc3Quc3BsaWNlKG15VGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSlbMF0pO1xuXG4gICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCB0YXNrSW5jb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrSW5jb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLXVuZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5jb21wbGV0ZSk7XG5cbiAgICAgICAgdGl0bGUuc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdub25lJyk7XG5cbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAgICAgaXNDb21wbGV0ZUFycmF5LnNwbGljZShpc0NvbXBsZXRlQXJyYXkuaW5kZXhPZih0YXNrKSwgMSk7XG5cbiAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzQ29tcGxldGVBcnJheVwiLCBKU09OLnN0cmluZ2lmeShpc0NvbXBsZXRlQXJyYXkpKTtcbiAgICAvLyBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJpb3JpdHkoc3RhdHVzQ29udGFpbmVyLCB0YXNrKSB7XG4gICAgaWdub3JlRXZlbnQoKTtcblxuICAgIGlmIChzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnZhbHVlID09PSAncHJpb3JpdHktc3RhdHVzIHByaW9yaXR5Jykge1xuICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgncHJpb3JpdHknKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ25vLXByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCBub1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIG5vUHJpb3JpdHkuc3JjID0gJy4vaW1hZ2VzL3N0YXItdW5maWxsZWQuc3ZnJztcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vUHJpb3JpdHkpO1xuXG4gICAgICAgIHRhc2suaXNJbXBvcnRhbnQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudmFsdWUgPT09ICdwcmlvcml0eS1zdGF0dXMgbm8tcHJpb3JpdHknKSB7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCduby1wcmlvcml0eScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgncHJpb3JpdHknKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXR1c0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHByaW9yaXR5LnNyYyA9ICcuL2ltYWdlcy9zdGFyLWZpbGxlZC5zdmcnO1xuICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgIHRhc2suaXNJbXBvcnRhbnQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNDb21wbGV0ZUFycmF5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2VwYXJhdGVkVGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkobXlUYXNrTGlzdCkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzQ29tcGxldGVBcnJheVwiLCBKU09OLnN0cmluZ2lmeShpc0NvbXBsZXRlQXJyYXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15VGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkobXlUYXNrTGlzdCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRUYXNrRm9ybSgpIHtcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZWRpdFRpdGxlSW5wdXQuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJFZGl0VGFza0Zvcm0oKSB7XG4gICAgZWRpdFRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICBlZGl0RGV0YWlsc0lucHV0LnZhbHVlID0gJyc7XG4gICAgZWRpdER1ZURhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGVkaXRJc0ltcG9ydGFudElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2hvd0hpZGRlblRhc2soKSB7XG4gICAgY29uc3Qgb3BlblRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdGluZy10YXNrJyk7XG4gICAgb3BlblRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy10YXNrJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRWRpdFRhc2tGb3JtKCkge1xuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyRWRpdFRhc2tGb3JtKCk7XG4gICAgc2hvd0hpZGRlblRhc2soKTtcbn1cblxuZnVuY3Rpb24gYXV0b2ZpbGxUYXNrSW5mbyh0YXNrKSB7XG4gICAgZWRpdFRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIGVkaXREdWVEYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgZWRpdElzSW1wb3J0YW50SW5wdXQuY2hlY2tlZCA9IHRhc2suaXNJbXBvcnRhbnQ7XG4gICAgaWYgKHRhc2suZGV0YWlscykge1xuICAgICAgICBlZGl0RGV0YWlsc0lucHV0LnZhbHVlID0gdGFzay5kZXRhaWxzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVkaXREZXRhaWxzSW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRhc2tEaXYsIHRvRG9Db250YWluZXIpIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgaWYgKGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXRhc2snKTtcbiAgICAgICAgb3BlbkVkaXRUYXNrRm9ybSgpO1xuICAgICAgICB0b0RvQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza0Zvcm0sIHRhc2tEaXYpO1xuICAgICAgICBhdXRvZmlsbFRhc2tJbmZvKHRhc2spO1xuICAgICAgICBlZGl0VGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dIaWRkZW5UYXNrKCk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy10YXNrJyk7XG4gICAgICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrRm9ybSwgdGFza0Rpdik7XG4gICAgICAgIGF1dG9maWxsVGFza0luZm8odGFzayk7XG4gICAgICAgIGVkaXRUaXRsZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgZWRpdFN1Ym1pdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIWVkaXRUYXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGVkaXRUYXNrRm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFzay50aXRsZSA9IGVkaXRUaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGFzay5kZXRhaWxzID0gZWRpdERldGFpbHNJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRhc2suZHVlRGF0ZSA9IGVkaXREdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gZWRpdElzSW1wb3J0YW50SW5wdXQuY2hlY2tlZDtcblxuICAgICAgICAgICAgY2xvc2VFZGl0VGFza0Zvcm0oKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgICAgICAgICBpZiAoaXNDb21wbGV0ZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZXBhcmF0ZWRUYXNrTGlzdFwiLCBKU09OLnN0cmluZ2lmeShteVRhc2tMaXN0KSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0NvbXBsZXRlQXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoaXNDb21wbGV0ZUFycmF5KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlUYXNrTGlzdFwiLCBKU09OLnN0cmluZ2lmeShteVRhc2tMaXN0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZWRpdENhbmNlbEJ0bi5vbmNsaWNrID0gY2xvc2VFZGl0VGFza0Zvcm07XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soaW5kZXgsIHRhc2spIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuICAgIG15VGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIGlmIChpc0NvbXBsZXRlQXJyYXkuaW5jbHVkZXModGFzaykpIHtcbiAgICAgICAgaXNDb21wbGV0ZUFycmF5LnNwbGljZShpc0NvbXBsZXRlQXJyYXkuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcblxuICAgIGlmIChpc0NvbXBsZXRlQXJyYXkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZXBhcmF0ZWRUYXNrTGlzdFwiLCBKU09OLnN0cmluZ2lmeShteVRhc2tMaXN0KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXNDb21wbGV0ZUFycmF5XCIsIEpTT04uc3RyaW5naWZ5KGlzQ29tcGxldGVBcnJheSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlUYXNrTGlzdFwiLCBKU09OLnN0cmluZ2lmeShteVRhc2tMaXN0KSk7XG4gICAgfVxuICAgIC8vIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xufVxuXG5leHBvcnQgeyB0b2dnbGVDb21wbGV0ZSwgdG9nZ2xlUHJpb3JpdHksIGVkaXRUYXNrLCBkZWxldGVUYXNrLCBpZ25vcmVFdmVudCwgaXNDb21wbGV0ZUFycmF5IH0iLCJpbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MsIGRpc3BsYXlUb2RheSwgZGlzcGxheVRoaXNXZWVrLCBkaXNwbGF5SW1wb3J0YW50LCBpbml0aWFsUHJvamVjdERpc3BsYXksIHVwZGF0ZVRhc2tEaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5JztcbmltcG9ydCB7IG15VGFza0xpc3QgfSBmcm9tICcuL2NyZWF0ZVRhc2snO1xuaW1wb3J0IHsgbXlQcm9qZWN0TGlzdCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5pbXBvcnQgeyBpc0NvbXBsZXRlQXJyYXkgfSBmcm9tICcuL2VkaXRUYXNrJztcblxuY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXRhc2tzJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpO1xuY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy13ZWVrJyk7XG5jb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW50Jyk7XG5jb25zdCB0YWJzID0gW2FsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudF07XG5cbi8vIExPQ0FMIFNUT1JBR0Vcbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50U3RhdHVzKCkge1xuICAgIGNvbnN0IHN0b3JlZENvbXBsZXRlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQ29tcGxldGVBcnJheVwiKSk7XG4gICAgaXNDb21wbGV0ZUFycmF5Lmxlbmd0aCA9IDA7XG4gICAgaXNDb21wbGV0ZUFycmF5LnB1c2guYXBwbHkoaXNDb21wbGV0ZUFycmF5LCBzdG9yZWRDb21wbGV0ZWRUYXNrcyk7XG4gICAgY29uc29sZS5sb2coc3RvcmVkQ29tcGxldGVkVGFza3MpO1xufVxuXG5mdW5jdGlvbiBnZXRTZXBhcmF0ZWRUYXNrTGlzdCgpIHtcbiAgICBjb25zdCBzZXBhcmF0ZWRUYXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXBhcmF0ZWRUYXNrTGlzdFwiKSk7XG4gICAgbXlUYXNrTGlzdC5sZW5ndGggPSAwO1xuICAgIG15VGFza0xpc3QucHVzaC5hcHBseShteVRhc2tMaXN0LCBzZXBhcmF0ZWRUYXNrTGlzdCk7XG4gICAgY29uc29sZS5sb2cobXlUYXNrTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCBzdG9yZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVRhc2tMaXN0XCIpKTtcbiAgICBteVRhc2tMaXN0Lmxlbmd0aCA9IDA7XG4gICAgbXlUYXNrTGlzdC5wdXNoLmFwcGx5KG15VGFza0xpc3QsIHN0b3JlZFRhc2tzKTtcbiAgICBjb25zb2xlLmxvZyhzdG9yZWRUYXNrcyk7XG5cbiAgICBpZiAoaXNDb21wbGV0ZUFycmF5KSB7XG4gICAgICAgIGdldEN1cnJlbnRTdGF0dXMoKTtcbiAgICAgICAgZ2V0U2VwYXJhdGVkVGFza0xpc3QoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVByb2plY3RMaXN0XCIpKTtcbiAgICBteVByb2plY3RMaXN0Lmxlbmd0aCA9IDA7XG4gICAgbXlQcm9qZWN0TGlzdC5wdXNoLmFwcGx5KG15UHJvamVjdExpc3QsIHN0b3JlZFByb2plY3RzKTtcbiAgICBjb25zb2xlLmxvZyhzdG9yZWRQcm9qZWN0cyk7XG59XG5cbmdldExvY2FsU3RvcmFnZSgpO1xuaW5pdGlhbFByb2plY3REaXNwbGF5KCk7XG5kaXNwbGF5QWxsVGFza3MoKTtcblxuYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWxsVGFza3MpO1xudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VG9kYXkpO1xudGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VGhpc1dlZWspO1xuaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUltcG9ydGFudCk7XG5cbmV4cG9ydCB7IGFsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudCwgdGFicywgZ2V0TG9jYWxTdG9yYWdlLCBnZXRDdXJyZW50U3RhdHVzIH1cblxuLy8gVE8gRE9cblxuLy8gRklOSVNIIFVJXG5cbi8vIEFERCBNT0JJTEUgU1VQUE9SVFxuXG4vLyBDTEVBTiBVUCBDT0RFXG5cbi8vIFNFTkQgVE8gTkFESU5FIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==