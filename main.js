/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


const titleInput = document.getElementById('title');
const detailsInput = document.getElementById('details');
const dueDateInput = document.getElementById('due-date');
const isImportantInput = document.getElementById('is-important');
const addTaskForm = document.querySelector('.task-form');
const addTaskBtn = document.querySelector('.submit-btn');
const myTaskList = [];

const task = (title, details, dueDate, isImportant, isComplete) => ({ title, details, dueDate, isImportant, isComplete });

const testTask = task('This task is due this week', 'Details of the task', '2023-04-22', false, false);
const testTask2 = task('This task is due today', 'This task has details', '2023-04-20', false, false);
const testTask3 = task('This task is important', 'This task also has details', '2023-04-22', true, false);
const testTask4 = task('This task is due next week', '', '2023-04-29', false, false);
const testTask5 = task('This task is due next week but within 7 days', '', '2023-04-25', false, false);
const testTask6 = task('This task is due exactly 7 days from now', '', '2023-04-27', true, false);
const testTask7 = task('This task is due a day after 7 days', '', '2023-04-28', false, false);
const testTask8 = task('This task has no due date', '', '', false, false);
myTaskList.push(testTask, testTask2, testTask3, testTask4, testTask5, testTask6, testTask7, testTask8);

function addTask() {
    const title = titleInput.value;
    const details = detailsInput.value;
    const dueDate = dueDateInput.value;
    const isImportant = isImportantInput.checked;
    const isComplete = false;

    const newTask = task(title, details, dueDate, isImportant, isComplete);
    myTaskList.push(newTask);
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)();
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
        clearTaskForm();
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
/* harmony export */   "closeTaskForm": () => (/* binding */ closeTaskForm),
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks),
/* harmony export */   "displayImportant": () => (/* binding */ displayImportant),
/* harmony export */   "displayThisWeek": () => (/* binding */ displayThisWeek),
/* harmony export */   "displayToday": () => (/* binding */ displayToday),
/* harmony export */   "updateTaskDisplay": () => (/* binding */ updateTaskDisplay)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTask */ "./src/editTask.js");




const mainContent = document.querySelector('.main-content');
const contentHeader = document.querySelector('.content-heading');
const toDoContainer = document.querySelector('.todo-container');
const taskForm = document.querySelector('.task-form');
const editTaskForm = document.querySelector('.edit-task-form');
const cancelBtn = document.querySelector('.cancel-btn');

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
    taskDiv.appendChild(taskRight);

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

    taskDeleteBtn.onclick = _editTask__WEBPACK_IMPORTED_MODULE_2__.deleteTask.bind(this, task, index);
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
        _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.forEach((task, index) => {
            // console.log(task);
            displayTask(task, index);
        });
    } else if (contentHeader.textContent === 'Today') {
        const tasksToday = _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.filter(task => task.dueDate === currentDate);
        tasksToday.forEach((task, index) => {
            displayTask(task, index);
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

        tasksThisWeek.forEach((task, index) => {
            displayTask(task, index);
        });
    } else if (contentHeader.textContent === 'Important') {
        const tasksImportant = _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.filter(task => task.isImportant);
        tasksImportant.forEach((task, index) => {
            displayTask(task, index);
        });
    }
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

function toggleComplete(status, statusContainer, title, task) {
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

function deleteTask(task, index) {
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

(0,_display__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)();

allTasks.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks);
today.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayToday);
thisWeek.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayThisWeek);
important.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_0__.displayImportant);



// TO DO

// ADD FUNCTIONALITY TO ALL BUTTONS ON A TASK DIV
// PRIORITY BUTTON
// EDIT BUTTON
// TRASH BUTTON

// ADD WHERE YOU CAN CLICK ON TASK TO SEE DETAILS

// ADD ANIMATION WHEN CLICKING ON TASK

// CREATE FUNCTION FOR NEW PROJECT

// ADD HIDDEN FORM FOR NEW PROJECT

// TIE PROJECT FORM INPUTS TO NEWPROJECT FUNCTION

// ADD PLACEHOLDERS ON FORMS

// FINISH UI

// ADD MOBILE SUPPORT

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRUFBc0Usa0RBQWtEOztBQUV4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHlEQUFlO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLFFBQVEsdURBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRvRTtBQUNaO0FBQ3lCOztBQUVsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksZ0RBQVk7QUFDaEI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLHlCQUF5QiwwREFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLDZCQUE2QiwwREFBbUI7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLG9EQUFhOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixzREFBZTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSyxJQUFJLE1BQU0sR0FBRyxJQUFJO0FBQy9DLE1BQU07QUFDTix5QkFBeUIsS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJO0FBQzlDOztBQUVBO0FBQ0EsUUFBUSwyREFBa0I7QUFDMUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ04sMkJBQTJCLDBEQUFpQjtBQUM1QztBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjs7QUFFQSw4QkFBOEIsMERBQWlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ04sK0JBQStCLDBEQUFpQjtBQUNoRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNENBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQix5Q0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDRDQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlPMEM7QUFDSTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDJEQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUFpQjtBQUNyQixJQUFJLDJEQUFpQjtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEk2Rjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBZTs7QUFFZixtQ0FBbUMscURBQWU7QUFDbEQsZ0NBQWdDLGtEQUFZO0FBQzVDLG1DQUFtQyxxREFBZTtBQUNsRCxvQ0FBb0Msc0RBQWdCOztBQUVDOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXRUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb3NlVGFza0Zvcm0sIGRpc3BsYXlBbGxUYXNrcyB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuY29uc3QgZGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpO1xuY29uc3QgaXNJbXBvcnRhbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1pbXBvcnRhbnQnKTtcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG5jb25zdCBteVRhc2tMaXN0ID0gW107XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlKSA9PiAoeyB0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgaXNJbXBvcnRhbnQsIGlzQ29tcGxldGUgfSk7XG5cbmNvbnN0IHRlc3RUYXNrID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSB0aGlzIHdlZWsnLCAnRGV0YWlscyBvZiB0aGUgdGFzaycsICcyMDIzLTA0LTIyJywgZmFsc2UsIGZhbHNlKTtcbmNvbnN0IHRlc3RUYXNrMiA9IHRhc2soJ1RoaXMgdGFzayBpcyBkdWUgdG9kYXknLCAnVGhpcyB0YXNrIGhhcyBkZXRhaWxzJywgJzIwMjMtMDQtMjAnLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2szID0gdGFzaygnVGhpcyB0YXNrIGlzIGltcG9ydGFudCcsICdUaGlzIHRhc2sgYWxzbyBoYXMgZGV0YWlscycsICcyMDIzLTA0LTIyJywgdHJ1ZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s0ID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSBuZXh0IHdlZWsnLCAnJywgJzIwMjMtMDQtMjknLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s1ID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSBuZXh0IHdlZWsgYnV0IHdpdGhpbiA3IGRheXMnLCAnJywgJzIwMjMtMDQtMjUnLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s2ID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSBleGFjdGx5IDcgZGF5cyBmcm9tIG5vdycsICcnLCAnMjAyMy0wNC0yNycsIHRydWUsIGZhbHNlKTtcbmNvbnN0IHRlc3RUYXNrNyA9IHRhc2soJ1RoaXMgdGFzayBpcyBkdWUgYSBkYXkgYWZ0ZXIgNyBkYXlzJywgJycsICcyMDIzLTA0LTI4JywgZmFsc2UsIGZhbHNlKTtcbmNvbnN0IHRlc3RUYXNrOCA9IHRhc2soJ1RoaXMgdGFzayBoYXMgbm8gZHVlIGRhdGUnLCAnJywgJycsIGZhbHNlLCBmYWxzZSk7XG5teVRhc2tMaXN0LnB1c2godGVzdFRhc2ssIHRlc3RUYXNrMiwgdGVzdFRhc2szLCB0ZXN0VGFzazQsIHRlc3RUYXNrNSwgdGVzdFRhc2s2LCB0ZXN0VGFzazcsIHRlc3RUYXNrOCk7XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBpc0ltcG9ydGFudCA9IGlzSW1wb3J0YW50SW5wdXQuY2hlY2tlZDtcbiAgICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdUYXNrID0gdGFzayh0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgaXNJbXBvcnRhbnQsIGlzQ29tcGxldGUpO1xuICAgIG15VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgICByZXR1cm4gbmV3VGFzaztcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRm9ybSgpIHtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gJyc7XG4gICAgZGV0YWlsc0lucHV0LnZhbHVlID0gJyc7XG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgaXNJbXBvcnRhbnRJbnB1dC5jaGVja2VkID0gZmFsc2U7XG59XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghYWRkVGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGFkZFRhc2tGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkVGFzaygpO1xuICAgICAgICBjbG9zZVRhc2tGb3JtKCk7XG4gICAgICAgIGNsZWFyVGFza0Zvcm0oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBteVRhc2tMaXN0LCBjbGVhclRhc2tGb3JtIH0iLCJpbXBvcnQgeyBhbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnQsIHRhYnMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IG15VGFza0xpc3QsIGNsZWFyVGFza0Zvcm0gfSBmcm9tICcuL2NyZWF0ZVRhc2snO1xuaW1wb3J0IHsgdG9nZ2xlQ29tcGxldGUsIHRvZ2dsZVByaW9yaXR5LCBlZGl0VGFzaywgZGVsZXRlVGFzayB9IGZyb20gJy4vZWRpdFRhc2snO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1oZWFkaW5nJyk7XG5jb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybScpO1xuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1idG4nKTtcblxuLy8gaGlnaGxpZ2h0IHRoZSBzZWxlY3RlZCBuYXZpZ2F0aW9uIHRhYlxuZnVuY3Rpb24gaGlnaGxpZ2h0U2VsZWN0ZWQoc2VsZWN0ZWRUYWIpIHtcbiAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB9KTtcblxuICAgIHNlbGVjdGVkVGFiLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG59XG5cbi8vIG9wZW4vY2xvc2UgdGhlIGZvcm0gdG8gYWRkIG5ldyB0YXNrc1xuZnVuY3Rpb24gb3BlblRhc2tGb3JtKCkge1xuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbG9zZVRhc2tGb3JtKCkge1xuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJUYXNrRm9ybSgpO1xufVxuXG5jYW5jZWxCdG4ub25jbGljayA9IGNsb3NlVGFza0Zvcm07XG5cbi8vIGNyZWF0ZSBhbmQgZGlzcGxheSB0aGUgYnV0dG9uIHRvIGFkZCBuZXcgdGFza3NcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrQnRuKCkge1xuICAgIGNvbnN0IHRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnRuJyk7XG5cbiAgICBjb25zdCBidG5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJ0bkltYWdlLnNyYyA9ICcuL2ltYWdlcy9wbHVzLnN2Zyc7XG5cbiAgICBjb25zdCBidG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuVGV4dC50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgICB0YXNrQnRuLm9uY2xpY2sgPSBvcGVuVGFza0Zvcm07XG5cbiAgICB0YXNrQnRuLmFwcGVuZENoaWxkKGJ0bkltYWdlKTtcbiAgICB0YXNrQnRuLmFwcGVuZENoaWxkKGJ0blRleHQpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRhc2tCdG4pO1xufVxuXG4vLyByZW1vdmUgdGhlIGJ1dHRvbiB0byBhZGQgbmV3IHRhc2sgKGZvciBwYWdlcyB3aGVyZSB5b3UgY2Fubm90IGFkZCBuZXcgdGFzaylcbmZ1bmN0aW9uIHJlbW92ZVRhc2tCdG4oKSB7XG4gICAgaWYgKG1haW5Db250ZW50Lmxhc3RDaGlsZC5jbGFzc05hbWUgPT09ICd0YXNrLWJ0bicpIHtcbiAgICAgICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgYSBzaW5ndWxhciB0YXNrXG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrLCBpbmRleCkge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuICAgIGNvbnN0IHRhc2tMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0xlZnQuY2xhc3NMaXN0LmFkZCgndGFzay1sZWZ0Jyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTGVmdCk7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1N0YXR1cy5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cycpO1xuICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRhc2tTdGF0dXMpO1xuXG4gICAgY29uc3QgdGFza0luY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0YXNrSW5jb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWluY29tcGxldGUnKTtcbiAgICB0YXNrSW5jb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLXVuZmlsbGVkLnN2Zyc7XG5cbiAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0YXNrQ29tcGxldGUuc3JjID0gJy4vaW1hZ2VzL2NpcmNsZS1maWxsZWQuc3ZnJztcblxuICAgIGNvbnN0IHRpdGxlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGl0bGVEaXNwbGF5KTtcblxuICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICB0YXNrU3RhdHVzLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZSk7XG4gICAgdGl0bGVEaXNwbGF5LnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1N0YXR1cy5hcHBlbmRDaGlsZCh0YXNrSW5jb21wbGV0ZSk7XG4gICAgfVxuXG4gICAgdGFza1N0YXR1cy5vbmNsaWNrID0gdG9nZ2xlQ29tcGxldGUuYmluZCh0aGlzLCB0YXNrSW5jb21wbGV0ZSwgdGFza1N0YXR1cywgdGl0bGVEaXNwbGF5LCB0YXNrKTtcbiAgICBcbiAgICBjb25zdCB0YXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrUmlnaHQuY2xhc3NMaXN0LmFkZCgndGFzay1yaWdodCcpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1JpZ2h0KTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGR1ZURhdGVEaXNwbGF5KTtcblxuICAgIGlmICghdGFzay5kdWVEYXRlKSB7XG4gICAgICAgIGR1ZURhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gJ05vIER1ZSBEYXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBkdWVEYXRlRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmlvcml0eVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXN0YXR1cycpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eVN0YXR1cyk7XG5cbiAgICBjb25zdCBub1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbm9Qcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci11bmZpbGxlZC5zdmcnO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci1maWxsZWQuc3ZnJztcblxuICAgIGlmICh0YXNrLmlzSW1wb3J0YW50KSB7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcmlvcml0eVN0YXR1cy5hcHBlbmRDaGlsZChub1ByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgnbm8tcHJpb3JpdHknKTtcbiAgICB9XG5cbiAgICBwcmlvcml0eVN0YXR1cy5vbmNsaWNrID0gdG9nZ2xlUHJpb3JpdHkuYmluZCh0aGlzLCBwcmlvcml0eVN0YXR1cywgdGFzayk7XG5cbiAgICBjb25zdCB0YXNrRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGFza0VkaXRCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0LWJ0bicpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZCh0YXNrRWRpdEJ0bik7XG5cbiAgICBjb25zdCBlZGl0QnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWRpdEJ0bkltZy5zcmMgPSAnLi9pbWFnZXMvZWRpdC5zdmcnO1xuICAgIHRhc2tFZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRCdG5JbWcpO1xuXG4gICAgdGFza0VkaXRCdG4ub25jbGljayA9IGVkaXRUYXNrLmJpbmQodGhpcywgdGFzaywgdGFza0RpdiwgdG9Eb0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0YXNrRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZS1idG4nKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ0bik7XG5cbiAgICBjb25zdCBkZWxldGVCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVCdG5JbWcuc3JjID0gJy4vaW1hZ2VzL3RyYXNoLnN2Zyc7XG4gICAgdGFza0RlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVCdG5JbWcpO1xuXG4gICAgdGFza0RlbGV0ZUJ0bi5vbmNsaWNrID0gZGVsZXRlVGFzay5iaW5kKHRoaXMsIHRhc2ssIGluZGV4KTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gY2xlYXIgZGlzcGxheSBcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcbiAgICB3aGlsZSAodG9Eb0NvbnRhaW5lci5maXJzdENoaWxkICYmIHRvRG9Db250YWluZXIuZmlyc3RDaGlsZC5jbGFzc05hbWUgIT0gJ2VkaXQtdGFzay1mb3JtJykge1xuICAgICAgICB0b0RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvRG9Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUodG9Eb0NvbnRhaW5lci5sYXN0Q2hpbGQgJiYgdG9Eb0NvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NOYW1lICE9ICdlZGl0LXRhc2stZm9ybScpIHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b0RvQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdGFzayBsaXN0IGRpc3BsYXlcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tEaXNwbGF5KCkge1xuICAgIGNsZWFyRGlzcGxheSgpO1xuXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IGN1cnJlbnREYXRlO1xuICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICAgIGN1cnJlbnREYXRlID0gYCR7eWVhcn0tMCR7bW9udGh9LSR7ZGF5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudERhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgIH1cblxuICAgIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSAnQWxsIFRhc2tzJykge1xuICAgICAgICBteVRhc2tMaXN0LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2ssIGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSAnVG9kYXknKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzVG9kYXkgPSBteVRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suZHVlRGF0ZSA9PT0gY3VycmVudERhdGUpO1xuICAgICAgICB0YXNrc1RvZGF5LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFdlZWtFbmQgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkgKyA3KTtcblxuICAgICAgICBjb25zdCB0YXNrc1RoaXNXZWVrID0gbXlUYXNrTGlzdC5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZUFycmF5ID0gdGFzay5kdWVEYXRlLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrWWVhciA9IHRhc2tEYXRlQXJyYXlbMF07XG4gICAgICAgICAgICBjb25zdCB0YXNrTW9udGggPSBwYXJzZUludCh0YXNrRGF0ZUFycmF5WzFdLCAxMCkgLSAxO1xuICAgICAgICAgICAgY29uc3QgdGFza0RheSA9IHRhc2tEYXRlQXJyYXlbMl07XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2tZZWFyLCB0YXNrTW9udGgsIHRhc2tEYXkpO1xuICAgICAgICAgICAgcmV0dXJuICh0YXNrRGF0ZSA+PSBkYXRlICYmIHRhc2tEYXRlIDw9IGN1cnJlbnRXZWVrRW5kKSB8fCAodGFzay5kdWVEYXRlID09PSBjdXJyZW50RGF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhc2tzVGhpc1dlZWsuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2ssIGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09PSAnSW1wb3J0YW50Jykge1xuICAgICAgICBjb25zdCB0YXNrc0ltcG9ydGFudCA9IG15VGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5pc0ltcG9ydGFudCk7XG4gICAgICAgIHRhc2tzSW1wb3J0YW50LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb25zIHRvIGRpc3BsYXkgYXBwcm9wcmlhdGUgdGFza3MgZm9yIGNob3NlbiB0YWJcbmZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgZGlzcGxheVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZChhbGxUYXNrcyk7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgY2xvc2VUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kYXkoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGhpZ2hsaWdodFNlbGVjdGVkKHRvZGF5KTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRoaXNXZWVrKCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZCh0aGlzV2Vlayk7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnO1xuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgY2xvc2VUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW1wb3J0YW50KCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZChpbXBvcnRhbnQpO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheUFsbFRhc2tzLCBkaXNwbGF5VG9kYXksIGRpc3BsYXlUaGlzV2VlaywgZGlzcGxheUltcG9ydGFudCwgY2xvc2VUYXNrRm9ybSwgdXBkYXRlVGFza0Rpc3BsYXkgfSIsImltcG9ydCB7IG15VGFza0xpc3QgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgeyB1cGRhdGVUYXNrRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1mb3JtJyk7XG5jb25zdCBlZGl0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlJyk7XG5jb25zdCBlZGl0RGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGV0YWlscycpO1xuY29uc3QgZWRpdER1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWR1ZS1kYXRlJyk7XG5jb25zdCBlZGl0SXNJbXBvcnRhbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWlzLWltcG9ydGFudCcpO1xuY29uc3QgZWRpdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXN1Ym1pdC1idG4nKTtcbmNvbnN0IGVkaXRDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1jYW5jZWwtYnRuJyk7XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlKHN0YXR1cywgc3RhdHVzQ29udGFpbmVyLCB0aXRsZSwgdGFzaykge1xuICAgIGlmIChzdGF0dXMuY2xhc3NMaXN0LnZhbHVlID09PSAndGFzay1pbmNvbXBsZXRlJykge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGFza0NvbXBsZXRlLnNyYyA9ICcuL2ltYWdlcy9jaXJjbGUtZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGUpO1xuXG4gICAgICAgIHRpdGxlLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG5cbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCB0YXNrSW5jb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrSW5jb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLXVuZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5jb21wbGV0ZSk7XG5cbiAgICAgICAgdGl0bGUuc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdub25lJyk7XG5cbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQcmlvcml0eShzdGF0dXNDb250YWluZXIsIHRhc2spIHtcbiAgICBpZiAoc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ3ByaW9yaXR5LXN0YXR1cyBwcmlvcml0eScpIHtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCduby1wcmlvcml0eScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhdHVzQ29udGFpbmVyLmxhc3RDaGlsZCk7XG5cbiAgICAgICAgY29uc3Qgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBub1ByaW9yaXR5LnNyYyA9ICcuL2ltYWdlcy9zdGFyLXVuZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChub1ByaW9yaXR5KTtcblxuICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnZhbHVlID09PSAncHJpb3JpdHktc3RhdHVzIG5vLXByaW9yaXR5Jykge1xuICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tcHJpb3JpdHknKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci1maWxsZWQuc3ZnJztcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5FZGl0VGFza0Zvcm0oKSB7XG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbGVhckVkaXRUYXNrRm9ybSgpIHtcbiAgICBlZGl0VGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGVkaXREZXRhaWxzSW5wdXQudmFsdWUgPSAnJztcbiAgICBlZGl0RHVlRGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgZWRpdElzSW1wb3J0YW50SW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzaG93SGlkZGVuVGFzaygpIHtcbiAgICBjb25zdCBvcGVuVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0aW5nLXRhc2snKTtcbiAgICBvcGVuVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nLXRhc2snKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VFZGl0VGFza0Zvcm0oKSB7XG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJFZGl0VGFza0Zvcm0oKTtcbiAgICBzaG93SGlkZGVuVGFzaygpO1xufVxuXG5mdW5jdGlvbiBhdXRvZmlsbFRhc2tJbmZvKHRhc2spIHtcbiAgICBlZGl0VGl0bGVJbnB1dC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgZWRpdER1ZURhdGVJbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICBlZGl0SXNJbXBvcnRhbnRJbnB1dC5jaGVja2VkID0gdGFzay5pc0ltcG9ydGFudDtcbiAgICBpZiAodGFzay5kZXRhaWxzKSB7XG4gICAgICAgIGVkaXREZXRhaWxzSW5wdXQudmFsdWUgPSB0YXNrLmRldGFpbHM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWRpdERldGFpbHNJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZWRpdFRhc2sodGFzaywgdGFza0RpdiwgdG9Eb0NvbnRhaW5lcikge1xuICAgIGlmIChlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZy10YXNrJyk7XG4gICAgICAgIG9wZW5FZGl0VGFza0Zvcm0oKTtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tGb3JtLCB0YXNrRGl2KTtcbiAgICAgICAgYXV0b2ZpbGxUYXNrSW5mbyh0YXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93SGlkZGVuVGFzaygpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmctdGFzaycpO1xuICAgICAgICB0b0RvQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza0Zvcm0sIHRhc2tEaXYpO1xuICAgICAgICBhdXRvZmlsbFRhc2tJbmZvKHRhc2spO1xuICAgIH1cblxuICAgIGVkaXRTdWJtaXRCdG4ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCFlZGl0VGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBlZGl0VGFza0Zvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2sudGl0bGUgPSBlZGl0VGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRhc2suZGV0YWlscyA9IGVkaXREZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUgPSBlZGl0RHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGFzay5pc0ltcG9ydGFudCA9IGVkaXRJc0ltcG9ydGFudElucHV0LmNoZWNrZWQ7XG5cbiAgICAgICAgICAgIGNsb3NlRWRpdFRhc2tGb3JtKCk7XG4gICAgICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBlZGl0Q2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZUVkaXRUYXNrRm9ybTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrLCBpbmRleCkge1xuICAgIG15VGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xufVxuXG5leHBvcnQgeyB0b2dnbGVDb21wbGV0ZSwgdG9nZ2xlUHJpb3JpdHksIGVkaXRUYXNrLCBkZWxldGVUYXNrIH0iLCJpbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MsIGRpc3BsYXlUb2RheSwgZGlzcGxheVRoaXNXZWVrLCBkaXNwbGF5SW1wb3J0YW50IH0gZnJvbSAnLi9kaXNwbGF5JztcblxuY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXRhc2tzJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpO1xuY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy13ZWVrJyk7XG5jb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW50Jyk7XG5jb25zdCB0YWJzID0gW2FsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudF07XG5cbmRpc3BsYXlBbGxUYXNrcygpO1xuXG5hbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBbGxUYXNrcyk7XG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlUb2RheSk7XG50aGlzV2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlUaGlzV2Vlayk7XG5pbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5SW1wb3J0YW50KTtcblxuZXhwb3J0IHsgYWxsVGFza3MsIHRvZGF5LCB0aGlzV2VlaywgaW1wb3J0YW50LCB0YWJzIH1cblxuLy8gVE8gRE9cblxuLy8gQUREIEZVTkNUSU9OQUxJVFkgVE8gQUxMIEJVVFRPTlMgT04gQSBUQVNLIERJVlxuLy8gUFJJT1JJVFkgQlVUVE9OXG4vLyBFRElUIEJVVFRPTlxuLy8gVFJBU0ggQlVUVE9OXG5cbi8vIEFERCBXSEVSRSBZT1UgQ0FOIENMSUNLIE9OIFRBU0sgVE8gU0VFIERFVEFJTFNcblxuLy8gQUREIEFOSU1BVElPTiBXSEVOIENMSUNLSU5HIE9OIFRBU0tcblxuLy8gQ1JFQVRFIEZVTkNUSU9OIEZPUiBORVcgUFJPSkVDVFxuXG4vLyBBREQgSElEREVOIEZPUk0gRk9SIE5FVyBQUk9KRUNUXG5cbi8vIFRJRSBQUk9KRUNUIEZPUk0gSU5QVVRTIFRPIE5FV1BST0pFQ1QgRlVOQ1RJT05cblxuLy8gQUREIFBMQUNFSE9MREVSUyBPTiBGT1JNU1xuXG4vLyBGSU5JU0ggVUlcblxuLy8gQUREIE1PQklMRSBTVVBQT1JUIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==