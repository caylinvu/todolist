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

const testTask = task('This task is due this week', 'Details of the task', '2023-04-22', false, false);
const testTask2 = task('This task is due today', 'This task has details', '2023-04-21', false, false);
const testTask3 = task('This task is important', 'This task also has details', '2023-04-25', true, false);
const testTask4 = task('This task is due next week', '', '2023-04-29', false, false);
const testTask5 = task('This task is due next week but within 7 days', '', '2023-04-25', false, false);
const testTask6 = task('This task is due exactly 7 days from now', '', '2023-04-28', true, false);
const testTask7 = task('This task is due a day after 7 days', '', '2023-04-29', false, false);
const testTask8 = task('This task has no due date', '', '', false, false);
myTaskList.push(testTask, testTask2, testTask3, testTask4, testTask5, testTask6, testTask7, testTask8);

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

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
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

// FIGURE OUT WHY TASK DELETE BUTTON ISN'T WORKING CORRECTLY

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9zZVByb2plY3RGb3JtLCBkaXNwbGF5UHJvamVjdCB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG5jb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xuY29uc3QgcHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXN1Ym1pdC1idG4nKTtcbmNvbnN0IG15UHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiAoeyBuYW1lIH0pO1xuXG5jb25zdCB0ZXN0UHJvamVjdCA9IHByb2plY3QoJ1Byb2dyYW1taW5nJyk7XG5jb25zdCB0ZXN0UHJvamVjdDIgPSBwcm9qZWN0KCdIb21lJyk7XG5jb25zdCB0ZXN0UHJvamVjdDMgPSBwcm9qZWN0KCdSZWFkaW5nJyk7XG5teVByb2plY3RMaXN0LnB1c2godGVzdFByb2plY3QsIHRlc3RQcm9qZWN0MiwgdGVzdFByb2plY3QzKTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KG5hbWUpO1xuICAgIG15UHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBkaXNwbGF5UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybSgpIHtcbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG59XG5cbnByb2plY3RTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghcHJvamVjdEZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHByb2plY3RGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgICAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59KTtcblxuZXhwb3J0IHsgbXlQcm9qZWN0TGlzdCwgY2xlYXJQcm9qZWN0Rm9ybSB9IiwiaW1wb3J0IHsgY2xvc2VUYXNrRm9ybSwgdXBkYXRlVGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBteVByb2plY3RMaXN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuXG5jb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaGVhZGluZycpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuY29uc3QgZGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpO1xuY29uc3QgaXNJbXBvcnRhbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1pbXBvcnRhbnQnKTtcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG5jb25zdCBteVRhc2tMaXN0ID0gW107XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlLCB0YXNrUHJvamVjdCkgPT4gKHsgdGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlLCB0YXNrUHJvamVjdCB9KTtcblxuY29uc3QgdGVzdFRhc2sgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIHRoaXMgd2VlaycsICdEZXRhaWxzIG9mIHRoZSB0YXNrJywgJzIwMjMtMDQtMjInLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2syID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSB0b2RheScsICdUaGlzIHRhc2sgaGFzIGRldGFpbHMnLCAnMjAyMy0wNC0yMScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazMgPSB0YXNrKCdUaGlzIHRhc2sgaXMgaW1wb3J0YW50JywgJ1RoaXMgdGFzayBhbHNvIGhhcyBkZXRhaWxzJywgJzIwMjMtMDQtMjUnLCB0cnVlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazQgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIG5leHQgd2VlaycsICcnLCAnMjAyMy0wNC0yOScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazUgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIG5leHQgd2VlayBidXQgd2l0aGluIDcgZGF5cycsICcnLCAnMjAyMy0wNC0yNScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazYgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIGV4YWN0bHkgNyBkYXlzIGZyb20gbm93JywgJycsICcyMDIzLTA0LTI4JywgdHJ1ZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s3ID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSBhIGRheSBhZnRlciA3IGRheXMnLCAnJywgJzIwMjMtMDQtMjknLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s4ID0gdGFzaygnVGhpcyB0YXNrIGhhcyBubyBkdWUgZGF0ZScsICcnLCAnJywgZmFsc2UsIGZhbHNlKTtcbm15VGFza0xpc3QucHVzaCh0ZXN0VGFzaywgdGVzdFRhc2syLCB0ZXN0VGFzazMsIHRlc3RUYXNrNCwgdGVzdFRhc2s1LCB0ZXN0VGFzazYsIHRlc3RUYXNrNywgdGVzdFRhc2s4KTtcblxuZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZGV0YWlscyA9IGRldGFpbHNJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGlzSW1wb3J0YW50ID0gaXNJbXBvcnRhbnRJbnB1dC5jaGVja2VkO1xuICAgIGNvbnN0IGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICBsZXQgdGFza1Byb2plY3QgPSAnJztcblxuICAgIG15UHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gcHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICB0YXNrUHJvamVjdCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2sodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlLCB0YXNrUHJvamVjdCk7XG4gICAgbXlUYXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0Zvcm0oKSB7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGRldGFpbHNJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGlzSW1wb3J0YW50SW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xufVxuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZFRhc2tGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBhZGRUYXNrRm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFRhc2soKTtcbiAgICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IG15VGFza0xpc3QsIGNsZWFyVGFza0Zvcm0gfSIsImltcG9ydCB7IGFsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudCwgdGFicyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgbXlUYXNrTGlzdCwgY2xlYXJUYXNrRm9ybSB9IGZyb20gJy4vY3JlYXRlVGFzayc7XG5pbXBvcnQgeyB0b2dnbGVDb21wbGV0ZSwgdG9nZ2xlUHJpb3JpdHksIGVkaXRUYXNrLCBkZWxldGVUYXNrIH0gZnJvbSAnLi9lZGl0VGFzayc7XG5pbXBvcnQgeyBteVByb2plY3RMaXN0LCBjbGVhclByb2plY3RGb3JtIH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0JztcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG5jb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaGVhZGluZycpO1xuY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5jb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWZvcm0nKTtcbmNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnRuJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1idG4nKTtcbmNvbnN0IHByb2plY3RDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYW5jZWwtYnRuJyk7XG5jb25zdCBwcm9qZWN0TGlua0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpbmtzJyk7XG5cbi8vIGhpZ2hsaWdodCB0aGUgc2VsZWN0ZWQgbmF2aWdhdGlvbiB0YWJcbmZ1bmN0aW9uIGhpZ2hsaWdodFNlbGVjdGVkKHNlbGVjdGVkVGFiKSB7XG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG5cbiAgICBzZWxlY3RlZFRhYi5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xufVxuXG4vLyBvcGVuL2Nsb3NlIHRoZSBmb3JtIHRvIGFkZCBuZXcgdGFza3NcbmZ1bmN0aW9uIG9wZW5UYXNrRm9ybSgpIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyVGFza0Zvcm0oKTtcbn1cblxuY2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZVRhc2tGb3JtO1xuXG4vLyBvcGVuL2Nsb3NlIHRoZSBmb3JtIHRvIGFkZCBuZXcgcHJvamVjdHNcblxuZnVuY3Rpb24gb3BlblByb2plY3RGb3JtKCkge1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJQcm9qZWN0Rm9ybSgpO1xufVxuXG5hZGRQcm9qZWN0QnRuLm9uY2xpY2sgPSBvcGVuUHJvamVjdEZvcm07XG5wcm9qZWN0Q2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZVByb2plY3RGb3JtO1xuXG5cbi8vIGNyZWF0ZSBhbmQgZGlzcGxheSB0aGUgYnV0dG9uIHRvIGFkZCBuZXcgdGFza3NcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrQnRuKCkge1xuICAgIGNvbnN0IHRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnRuJyk7XG5cbiAgICBjb25zdCBidG5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJ0bkltYWdlLnNyYyA9ICcuL2ltYWdlcy9wbHVzLnN2Zyc7XG5cbiAgICBjb25zdCBidG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuVGV4dC50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgICB0YXNrQnRuLm9uY2xpY2sgPSBvcGVuVGFza0Zvcm07XG5cbiAgICB0YXNrQnRuLmFwcGVuZENoaWxkKGJ0bkltYWdlKTtcbiAgICB0YXNrQnRuLmFwcGVuZENoaWxkKGJ0blRleHQpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRhc2tCdG4pO1xufVxuXG4vLyByZW1vdmUgdGhlIGJ1dHRvbiB0byBhZGQgbmV3IHRhc2sgKGZvciBwYWdlcyB3aGVyZSB5b3UgY2Fubm90IGFkZCBuZXcgdGFzaylcbmZ1bmN0aW9uIHJlbW92ZVRhc2tCdG4oKSB7XG4gICAgaWYgKG1haW5Db250ZW50Lmxhc3RDaGlsZC5jbGFzc05hbWUgPT09ICd0YXNrLWJ0bicpIHtcbiAgICAgICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgdGFzayBkZXRhaWxzXG5mdW5jdGlvbiBkaXNwbGF5RGV0YWlscyh0YXNrLCB0YXNrRGl2KSB7XG4gICAgaWYgKHRhc2tEaXYubGFzdENoaWxkLmNsYXNzTmFtZSAhPSAnZGV0YWlscy1kaXNwbGF5JyAmJiB0YXNrLmRldGFpbHMpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1kaXNwbGF5Jyk7XG4gICAgICAgIGRldGFpbHNEaXNwbGF5LnRleHRDb250ZW50ID0gdGFzay5kZXRhaWxzO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRldGFpbHNEaXNwbGF5KTtcbiAgICB9IGVsc2UgaWYgKHRhc2tEaXYubGFzdENoaWxkLmNsYXNzTmFtZSA9PT0gJ2RldGFpbHMtZGlzcGxheScgJiYgdGFzay5kZXRhaWxzKSB7XG4gICAgICAgIHRhc2tEaXYucmVtb3ZlQ2hpbGQodGFza0Rpdi5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gZGlzcGxheSBhIHNpbmd1bGFyIHRhc2tcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2spIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICBjb25zdCB0YXNrTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tNYWluLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbWFpbicpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza01haW4pO1xuXG4gICAgY29uc3QgdGFza0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTGVmdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxlZnQnKTtcbiAgICB0YXNrTWFpbi5hcHBlbmRDaGlsZCh0YXNrTGVmdCk7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1N0YXR1cy5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cycpO1xuICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRhc2tTdGF0dXMpO1xuXG4gICAgY29uc3QgdGFza0luY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0YXNrSW5jb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWluY29tcGxldGUnKTtcbiAgICB0YXNrSW5jb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLXVuZmlsbGVkLnN2Zyc7XG5cbiAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0YXNrQ29tcGxldGUuc3JjID0gJy4vaW1hZ2VzL2NpcmNsZS1maWxsZWQuc3ZnJztcblxuICAgIGNvbnN0IHRpdGxlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGl0bGVEaXNwbGF5KTtcblxuICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICB0YXNrU3RhdHVzLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZSk7XG4gICAgdGl0bGVEaXNwbGF5LnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1N0YXR1cy5hcHBlbmRDaGlsZCh0YXNrSW5jb21wbGV0ZSk7XG4gICAgfVxuXG4gICAgdGFza1N0YXR1cy5vbmNsaWNrID0gdG9nZ2xlQ29tcGxldGUuYmluZCh0aGlzLCB0YXNrSW5jb21wbGV0ZSwgdGFza1N0YXR1cywgdGl0bGVEaXNwbGF5LCB0YXNrKTtcbiAgICBcbiAgICBjb25zdCB0YXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrUmlnaHQuY2xhc3NMaXN0LmFkZCgndGFzay1yaWdodCcpO1xuICAgIHRhc2tNYWluLmFwcGVuZENoaWxkKHRhc2tSaWdodCk7XG5cbiAgICBjb25zdCBkdWVEYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZChkdWVEYXRlRGlzcGxheSk7XG5cbiAgICBpZiAoIXRhc2suZHVlRGF0ZSkge1xuICAgICAgICBkdWVEYXRlRGlzcGxheS50ZXh0Q29udGVudCA9ICdObyBEdWUgRGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZHVlRGF0ZURpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpb3JpdHlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcmlvcml0eVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1zdGF0dXMnKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTdGF0dXMpO1xuXG4gICAgY29uc3Qgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5vUHJpb3JpdHkuc3JjID0gJy4vaW1hZ2VzL3N0YXItdW5maWxsZWQuc3ZnJztcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJpb3JpdHkuc3JjID0gJy4vaW1hZ2VzL3N0YXItZmlsbGVkLnN2Zyc7XG5cbiAgICBpZiAodGFzay5pc0ltcG9ydGFudCkge1xuICAgICAgICBwcmlvcml0eVN0YXR1cy5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuYXBwZW5kQ2hpbGQobm9Qcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ25vLXByaW9yaXR5Jyk7XG4gICAgfVxuXG4gICAgcHJpb3JpdHlTdGF0dXMub25jbGljayA9IHRvZ2dsZVByaW9yaXR5LmJpbmQodGhpcywgcHJpb3JpdHlTdGF0dXMsIHRhc2spO1xuXG4gICAgY29uc3QgdGFza0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRhc2tFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWRpdC1idG4nKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQodGFza0VkaXRCdG4pO1xuXG4gICAgY29uc3QgZWRpdEJ0bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGVkaXRCdG5JbWcuc3JjID0gJy4vaW1hZ2VzL2VkaXQuc3ZnJztcbiAgICB0YXNrRWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0QnRuSW1nKTtcblxuICAgIHRhc2tFZGl0QnRuLm9uY2xpY2sgPSBlZGl0VGFzay5iaW5kKHRoaXMsIHRhc2ssIHRhc2tEaXYsIHRvRG9Db250YWluZXIpO1xuXG4gICAgY29uc3QgdGFza0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tEZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUtYnRuJyk7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xuXG4gICAgY29uc3QgZGVsZXRlQnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZGVsZXRlQnRuSW1nLnNyYyA9ICcuL2ltYWdlcy90cmFzaC5zdmcnO1xuICAgIHRhc2tEZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuSW1nKTtcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IG15VGFza0xpc3QuaW5kZXhPZih0YXNrKTtcblxuICAgIHRhc2tEZWxldGVCdG4ub25jbGljayA9IGRlbGV0ZVRhc2suYmluZCh0aGlzLCBjdXJyZW50SW5kZXgpO1xuXG4gICAgdGFza0Rpdi5vbmNsaWNrID0gZGlzcGxheURldGFpbHMuYmluZCh0aGlzLCB0YXNrLCB0YXNrRGl2KTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gY2xlYXIgZGlzcGxheSBcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcbiAgICB3aGlsZSAodG9Eb0NvbnRhaW5lci5maXJzdENoaWxkICYmIHRvRG9Db250YWluZXIuZmlyc3RDaGlsZC5jbGFzc05hbWUgIT0gJ2VkaXQtdGFzay1mb3JtJykge1xuICAgICAgICB0b0RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvRG9Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUodG9Eb0NvbnRhaW5lci5sYXN0Q2hpbGQgJiYgdG9Eb0NvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NOYW1lICE9ICdlZGl0LXRhc2stZm9ybScpIHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b0RvQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdGFzayBsaXN0IGRpc3BsYXlcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tEaXNwbGF5KCkge1xuICAgIGNsZWFyRGlzcGxheSgpO1xuXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IGN1cnJlbnREYXRlO1xuICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICAgIGN1cnJlbnREYXRlID0gYCR7eWVhcn0tMCR7bW9udGh9LSR7ZGF5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudERhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgIH1cblxuICAgIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSAnQWxsIFRhc2tzJykge1xuICAgICAgICBteVRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ1RvZGF5Jykge1xuICAgICAgICBjb25zdCB0YXNrc1RvZGF5ID0gbXlUYXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLmR1ZURhdGUgPT09IGN1cnJlbnREYXRlKTtcbiAgICAgICAgdGFza3NUb2RheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSAnVGhpcyBXZWVrJykge1xuICAgICAgICBjb25zdCBjdXJyZW50V2Vla0VuZCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSArIDcpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tzVGhpc1dlZWsgPSBteVRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlQXJyYXkgPSB0YXNrLmR1ZURhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tZZWFyID0gdGFza0RhdGVBcnJheVswXTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tNb250aCA9IHBhcnNlSW50KHRhc2tEYXRlQXJyYXlbMV0sIDEwKSAtIDE7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF5ID0gdGFza0RhdGVBcnJheVsyXTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFza1llYXIsIHRhc2tNb250aCwgdGFza0RheSk7XG4gICAgICAgICAgICByZXR1cm4gKHRhc2tEYXRlID49IGRhdGUgJiYgdGFza0RhdGUgPD0gY3VycmVudFdlZWtFbmQpIHx8ICh0YXNrLmR1ZURhdGUgPT09IGN1cnJlbnREYXRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFza3NUaGlzV2Vlay5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSAnSW1wb3J0YW50Jykge1xuICAgICAgICBjb25zdCB0YXNrc0ltcG9ydGFudCA9IG15VGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5pc0ltcG9ydGFudCk7XG4gICAgICAgIHRhc2tzSW1wb3J0YW50LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YXNrc0J5UHJvamVjdCA9IG15VGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay50YXNrUHJvamVjdCA9PT0gY29udGVudEhlYWRlci50ZXh0Q29udGVudCk7XG4gICAgICAgIHRhc2tzQnlQcm9qZWN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saW5rJyk7XG4gICAgcHJvamVjdExpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdE5hbWVEaXNwbGF5LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIHByb2plY3RMaW5rLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGlzcGxheSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlua0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TGlua0J0bnMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saW5rLWJ0bnMnKTtcbiAgICBwcm9qZWN0TGluay5hcHBlbmRDaGlsZChwcm9qZWN0TGlua0J0bnMpO1xuXG4gICAgY29uc3QgcHJvamVjdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVkaXQtYnRuJyk7XG4gICAgcHJvamVjdExpbmtCdG5zLmFwcGVuZENoaWxkKHByb2plY3RFZGl0QnRuKTtcblxuICAgIGNvbnN0IHByb2plY3RFZGl0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvamVjdEVkaXRJbWcuc3JjID0gJy4vaW1hZ2VzL2VkaXQuc3ZnJztcbiAgICBwcm9qZWN0RWRpdEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEltZyk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS1idG4nKTtcbiAgICBwcm9qZWN0TGlua0J0bnMuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvamVjdERlbGV0ZUltZy5zcmMgPSAnLi9pbWFnZXMvdHJhc2guc3ZnJztcbiAgICBwcm9qZWN0RGVsZXRlQnRuLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVJbWcpO1xuXG4gICAgdGFicy5wdXNoKHByb2plY3RMaW5rKTtcblxuICAgIHByb2plY3RMaW5rLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVtb3ZlVGFza0J0bigpO1xuICAgICAgICBkaXNwbGF5VGFza0J0bigpO1xuICAgICAgICBoaWdobGlnaHRTZWxlY3RlZChwcm9qZWN0TGluayk7XG4gICAgICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0TGluay5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgICAgICBjbG9zZVRhc2tGb3JtKCk7XG4gICAgfVxufVxuXG4vLyBDQU4gUkVNT1ZFIFRISVMgT05DRSBGSU5JU0hFRCBBTkQgREVMRVRFIFRFU1QgUFJPSkVDVFNcbmZ1bmN0aW9uIGluaXRpYWxQcm9qZWN0RGlzcGxheSgpIHtcbiAgICBteVByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG59XG5cbi8vIGZ1bmN0aW9ucyB0byBkaXNwbGF5IGFwcHJvcHJpYXRlIHRhc2tzIGZvciBjaG9zZW4gdGFiXG5mdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGRpc3BsYXlUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQoYWxsVGFza3MpO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZGF5KCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZCh0b2RheSk7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUaGlzV2VlaygpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQodGhpc1dlZWspO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUltcG9ydGFudCgpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQoaW1wb3J0YW50KTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlBbGxUYXNrcywgZGlzcGxheVRvZGF5LCBkaXNwbGF5VGhpc1dlZWssIGRpc3BsYXlJbXBvcnRhbnQsIGNsb3NlVGFza0Zvcm0sIHVwZGF0ZVRhc2tEaXNwbGF5LCBjbG9zZVByb2plY3RGb3JtLCBpbml0aWFsUHJvamVjdERpc3BsYXksIGRpc3BsYXlQcm9qZWN0IH0iLCJpbXBvcnQgeyBteVRhc2tMaXN0IH0gZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuaW1wb3J0IHsgdXBkYXRlVGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybScpO1xuY29uc3QgZWRpdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpO1xuY29uc3QgZWRpdERldGFpbHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRldGFpbHMnKTtcbmNvbnN0IGVkaXREdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kdWUtZGF0ZScpO1xuY29uc3QgZWRpdElzSW1wb3J0YW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1pcy1pbXBvcnRhbnQnKTtcbmNvbnN0IGVkaXRTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1zdWJtaXQtYnRuJyk7XG5jb25zdCBlZGl0Q2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY2FuY2VsLWJ0bicpO1xuXG4vLyBmdW5jdGlvbiB0byBpZ25vcmUgdGFza0RpdiBvbmNsaWNrIGV2ZW50IHdoZW4gYnV0dG9ucyB3aXRoaW4gdGhlIHRhc2tEaXYgYXJlIGNsaWNrZWRcbmZ1bmN0aW9uIGlnbm9yZUV2ZW50KGUpIHtcbiAgICBpZiAoIWUpIHtcbiAgICAgICAgZSA9IHdpbmRvdy5ldmVudDtcbiAgICB9XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGUoc3RhdHVzLCBzdGF0dXNDb250YWluZXIsIHRpdGxlLCB0YXNrKSB7XG4gICAgaWdub3JlRXZlbnQoKTtcblxuICAgIGlmIChzdGF0dXMuY2xhc3NMaXN0LnZhbHVlID09PSAndGFzay1pbmNvbXBsZXRlJykge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGFza0NvbXBsZXRlLnNyYyA9ICcuL2ltYWdlcy9jaXJjbGUtZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGUpO1xuXG4gICAgICAgIHRpdGxlLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG5cbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCB0YXNrSW5jb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrSW5jb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLXVuZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5jb21wbGV0ZSk7XG5cbiAgICAgICAgdGl0bGUuc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdub25lJyk7XG5cbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQcmlvcml0eShzdGF0dXNDb250YWluZXIsIHRhc2spIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgaWYgKHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudmFsdWUgPT09ICdwcmlvcml0eS1zdGF0dXMgcHJpb3JpdHknKSB7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdwcmlvcml0eScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tcHJpb3JpdHknKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXR1c0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuXG4gICAgICAgIGNvbnN0IG5vUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbm9Qcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci11bmZpbGxlZC5zdmcnO1xuICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kQ2hpbGQobm9Qcmlvcml0eSk7XG5cbiAgICAgICAgdGFzay5pc0ltcG9ydGFudCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ3ByaW9yaXR5LXN0YXR1cyBuby1wcmlvcml0eScpIHtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ25vLXByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdwcmlvcml0eScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhdHVzQ29udGFpbmVyLmxhc3RDaGlsZCk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcHJpb3JpdHkuc3JjID0gJy4vaW1hZ2VzL3N0YXItZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgdGFzay5pc0ltcG9ydGFudCA9IHRydWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvcGVuRWRpdFRhc2tGb3JtKCkge1xuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gY2xlYXJFZGl0VGFza0Zvcm0oKSB7XG4gICAgZWRpdFRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICBlZGl0RGV0YWlsc0lucHV0LnZhbHVlID0gJyc7XG4gICAgZWRpdER1ZURhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGVkaXRJc0ltcG9ydGFudElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2hvd0hpZGRlblRhc2soKSB7XG4gICAgY29uc3Qgb3BlblRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdGluZy10YXNrJyk7XG4gICAgb3BlblRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy10YXNrJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRWRpdFRhc2tGb3JtKCkge1xuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyRWRpdFRhc2tGb3JtKCk7XG4gICAgc2hvd0hpZGRlblRhc2soKTtcbn1cblxuZnVuY3Rpb24gYXV0b2ZpbGxUYXNrSW5mbyh0YXNrKSB7XG4gICAgZWRpdFRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIGVkaXREdWVEYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgZWRpdElzSW1wb3J0YW50SW5wdXQuY2hlY2tlZCA9IHRhc2suaXNJbXBvcnRhbnQ7XG4gICAgaWYgKHRhc2suZGV0YWlscykge1xuICAgICAgICBlZGl0RGV0YWlsc0lucHV0LnZhbHVlID0gdGFzay5kZXRhaWxzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVkaXREZXRhaWxzSW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRhc2tEaXYsIHRvRG9Db250YWluZXIpIHtcbiAgICBpZ25vcmVFdmVudCgpO1xuXG4gICAgaWYgKGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXRhc2snKTtcbiAgICAgICAgb3BlbkVkaXRUYXNrRm9ybSgpO1xuICAgICAgICB0b0RvQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza0Zvcm0sIHRhc2tEaXYpO1xuICAgICAgICBhdXRvZmlsbFRhc2tJbmZvKHRhc2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dIaWRkZW5UYXNrKCk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy10YXNrJyk7XG4gICAgICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrRm9ybSwgdGFza0Rpdik7XG4gICAgICAgIGF1dG9maWxsVGFza0luZm8odGFzayk7XG4gICAgfVxuXG4gICAgZWRpdFN1Ym1pdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIWVkaXRUYXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGVkaXRUYXNrRm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFzay50aXRsZSA9IGVkaXRUaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGFzay5kZXRhaWxzID0gZWRpdERldGFpbHNJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRhc2suZHVlRGF0ZSA9IGVkaXREdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gZWRpdElzSW1wb3J0YW50SW5wdXQuY2hlY2tlZDtcblxuICAgICAgICAgICAgY2xvc2VFZGl0VGFza0Zvcm0oKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGVkaXRDYW5jZWxCdG4ub25jbGljayA9IGNsb3NlRWRpdFRhc2tGb3JtO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGluZGV4KSB7XG4gICAgaWdub3JlRXZlbnQoKTtcbiAgICBteVRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbn1cblxuZXhwb3J0IHsgdG9nZ2xlQ29tcGxldGUsIHRvZ2dsZVByaW9yaXR5LCBlZGl0VGFzaywgZGVsZXRlVGFzayB9IiwiaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzLCBkaXNwbGF5VG9kYXksIGRpc3BsYXlUaGlzV2VlaywgZGlzcGxheUltcG9ydGFudCwgaW5pdGlhbFByb2plY3REaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5JztcblxuY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXRhc2tzJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpO1xuY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy13ZWVrJyk7XG5jb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW50Jyk7XG5jb25zdCB0YWJzID0gW2FsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudF07XG5cbmluaXRpYWxQcm9qZWN0RGlzcGxheSgpO1xuZGlzcGxheUFsbFRhc2tzKCk7XG5cbmFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFsbFRhc2tzKTtcbnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRvZGF5KTtcbnRoaXNXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRoaXNXZWVrKTtcbmltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlJbXBvcnRhbnQpO1xuXG5leHBvcnQgeyBhbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnQsIHRhYnMgfVxuXG4vLyBUTyBET1xuXG4vLyBGSUdVUkUgT1VUIFdIWSBUQVNLIERFTEVURSBCVVRUT04gSVNOJ1QgV09SS0lORyBDT1JSRUNUTFlcblxuLy8gQUREIEZVTkNUSU9OQUxJVFkgVE8gVEFTSyBFRElUIEFORCBERUxFVEUgQlVUVE9OUyEhISEhXG5cblxuLy8gQUREIEFVVE8gRk9DVVMgVE8gRk9STVNcblxuLy8gQUREIFBMQUNFSE9MREVSUyBPTiBGT1JNU1xuXG4vLyBBREQgQ0hBUkFDVEVSIExJTUlUIFRPIEZPUk0gRklFTERTXG5cbi8vIEFERCBOT1RFIFNBWUlORyBVIENBTiBDTElDSyBUQVNLIFRPIFNIT1cgREVUQUlMU1xuXG4vLyBNQVlCRSBDSEFOR0UgRURJVCBTVUJNSVQgQlVUVE9OIFRPIFNBWSBcIlVQREFURVwiXG5cbi8vIFVQREFURSBGT1JNIFVJIEZPUiBJTlBVVFMgQU5EIElOUFVUIEJVVFRPTiBTSVpFU1xuXG4vLyBNQVlCRSBJTlZFUlQgQ09MT1JTIE9OIEVESVQgQU5EIFRSQVNIIEJVVFRPTlMgT04gU0lERUJBUlxuXG4vLyBNQVlCRSBBREQgRFJBRyBUTyBSRU9SREVSIFBST0pFQ1RTPz8/Pz9cblxuLy8gTUFZQkUgQUREIFdIRVJFIFlPVSBDQU4gU09SVCBCWSBEVUUgREFURT8/Pz9cblxuXG5cblxuLy8gRklOSVNIIFVJXG5cbi8vIEFERCBNT0JJTEUgU1VQUE9SVFxuXG4vLyBBREQgTE9DQUwgU1RPUkFHRSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=