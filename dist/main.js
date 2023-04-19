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

const task = (title, description, dueDate, isImportant, isComplete) => ({ title, description, dueDate, isImportant, isComplete });

const testTask = task('This task is due this week', 'Details of the task', '2023-04-20', false, false);
const testTask2 = task('This task is due today', '', '2023-04-19', false, false);
const testTask3 = task('This task is important', '', '2023-04-22', true, false);
const testTask4 = task('This task is due next week', '', '2023-04-28', false, false);
const testTask5 = task('This task is due next week but within 7 days', '', '2023-04-24', false, false);
const testTask6 = task('This task is due exactly 7 days from now', '', '2023-04-26', true, false);
const testTask7 = task('This task is due a day after 7 days', '', '2023-04-27', false, false);
myTaskList.push(testTask, testTask2, testTask3, testTask4, testTask5, testTask6, testTask7);

function addTask() {
    const title = titleInput.value;
    const description = detailsInput.value;
    const dueDate = dueDateInput.value;
    const isImportant = isImportantInput.checked;
    const isComplete = false;

    const newTask = task(title, description, dueDate, isImportant, isComplete);
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
/* harmony export */   "displayToday": () => (/* binding */ displayToday)
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
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "toggleComplete": () => (/* binding */ toggleComplete),
/* harmony export */   "togglePriority": () => (/* binding */ togglePriority)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");


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

function editTask(task, taskDiv, toDoContainer) {
    taskDiv.classList.toggle('editing-task');

    const editTaskForm = document.querySelector('.edit-task-form');
    editTaskForm.style.display = 'block';
    toDoContainer.insertBefore(editTaskForm, taskDiv);

    const editTitleInput = document.getElementById('edit-title');
    const editDetailsInput = document.getElementById('edit-details');
    const editDueDateInput = document.getElementById('edit-due-date');
    const editIsImportantInput = document.getElementById('edit-is-important');
    const editSubmitBtn = document.querySelector('.edit-submit-btn');
    const editCancelBtn = document.querySelector('.edit-cancel-btn');

    editTitleInput.value = task.title;
    editDetailsInput.value = task.details;
    editDueDateInput.value = task.dueDate;
    editIsImportantInput.checked = task.isImportant;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkU2Rjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBZTs7QUFFZixtQ0FBbUMscURBQWU7QUFDbEQsZ0NBQWdDLGtEQUFZO0FBQzVDLG1DQUFtQyxxREFBZTtBQUNsRCxvQ0FBb0Msc0RBQWdCOztBQUVDOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXRUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb3NlVGFza0Zvcm0sIGRpc3BsYXlBbGxUYXNrcyB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuY29uc3QgZGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpO1xuY29uc3QgaXNJbXBvcnRhbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1pbXBvcnRhbnQnKTtcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG5jb25zdCBteVRhc2tMaXN0ID0gW107XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpc0ltcG9ydGFudCwgaXNDb21wbGV0ZSkgPT4gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpc0ltcG9ydGFudCwgaXNDb21wbGV0ZSB9KTtcblxuY29uc3QgdGVzdFRhc2sgPSB0YXNrKCdUaGlzIHRhc2sgaXMgZHVlIHRoaXMgd2VlaycsICdEZXRhaWxzIG9mIHRoZSB0YXNrJywgJzIwMjMtMDQtMjAnLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2syID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSB0b2RheScsICcnLCAnMjAyMy0wNC0xOScsIGZhbHNlLCBmYWxzZSk7XG5jb25zdCB0ZXN0VGFzazMgPSB0YXNrKCdUaGlzIHRhc2sgaXMgaW1wb3J0YW50JywgJycsICcyMDIzLTA0LTIyJywgdHJ1ZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s0ID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSBuZXh0IHdlZWsnLCAnJywgJzIwMjMtMDQtMjgnLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s1ID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSBuZXh0IHdlZWsgYnV0IHdpdGhpbiA3IGRheXMnLCAnJywgJzIwMjMtMDQtMjQnLCBmYWxzZSwgZmFsc2UpO1xuY29uc3QgdGVzdFRhc2s2ID0gdGFzaygnVGhpcyB0YXNrIGlzIGR1ZSBleGFjdGx5IDcgZGF5cyBmcm9tIG5vdycsICcnLCAnMjAyMy0wNC0yNicsIHRydWUsIGZhbHNlKTtcbmNvbnN0IHRlc3RUYXNrNyA9IHRhc2soJ1RoaXMgdGFzayBpcyBkdWUgYSBkYXkgYWZ0ZXIgNyBkYXlzJywgJycsICcyMDIzLTA0LTI3JywgZmFsc2UsIGZhbHNlKTtcbm15VGFza0xpc3QucHVzaCh0ZXN0VGFzaywgdGVzdFRhc2syLCB0ZXN0VGFzazMsIHRlc3RUYXNrNCwgdGVzdFRhc2s1LCB0ZXN0VGFzazYsIHRlc3RUYXNrNyk7XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGV0YWlsc0lucHV0LnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgaXNJbXBvcnRhbnQgPSBpc0ltcG9ydGFudElucHV0LmNoZWNrZWQ7XG4gICAgY29uc3QgaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpc0ltcG9ydGFudCwgaXNDb21wbGV0ZSk7XG4gICAgbXlUYXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgIGRpc3BsYXlBbGxUYXNrcygpO1xuICAgIHJldHVybiBuZXdUYXNrO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICBkZXRhaWxzSW5wdXQudmFsdWUgPSAnJztcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICBpc0ltcG9ydGFudElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRUYXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgYWRkVGFza0Zvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRUYXNrKCk7XG4gICAgICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICAgICAgY2xlYXJUYXNrRm9ybSgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IG15VGFza0xpc3QsIGNsZWFyVGFza0Zvcm0gfSIsImltcG9ydCB7IGFsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudCwgdGFicyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgbXlUYXNrTGlzdCwgY2xlYXJUYXNrRm9ybSB9IGZyb20gJy4vY3JlYXRlVGFzayc7XG5pbXBvcnQgeyB0b2dnbGVDb21wbGV0ZSwgdG9nZ2xlUHJpb3JpdHksIGVkaXRUYXNrIH0gZnJvbSAnLi9lZGl0VGFzayc7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuY29uc3QgY29udGVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWhlYWRpbmcnKTtcbmNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1mb3JtJyk7XG5jb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ0bicpO1xuXG4vLyBoaWdobGlnaHQgdGhlIHNlbGVjdGVkIG5hdmlnYXRpb24gdGFiXG5mdW5jdGlvbiBoaWdobGlnaHRTZWxlY3RlZChzZWxlY3RlZFRhYikge1xuICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgc2VsZWN0ZWRUYWIuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbn1cblxuLy8gb3Blbi9jbG9zZSB0aGUgZm9ybSB0byBhZGQgbmV3IHRhc2tzXG5mdW5jdGlvbiBvcGVuVGFza0Zvcm0oKSB7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjbGVhclRhc2tGb3JtKCk7XG59XG5cbmNhbmNlbEJ0bi5vbmNsaWNrID0gY2xvc2VUYXNrRm9ybTtcblxuLy8gY3JlYXRlIGFuZCBkaXNwbGF5IHRoZSBidXR0b24gdG8gYWRkIG5ldyB0YXNrc1xuZnVuY3Rpb24gZGlzcGxheVRhc2tCdG4oKSB7XG4gICAgY29uc3QgdGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1idG4nKTtcblxuICAgIGNvbnN0IGJ0bkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYnRuSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL3BsdXMuc3ZnJztcblxuICAgIGNvbnN0IGJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5UZXh0LnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgIHRhc2tCdG4ub25jbGljayA9IG9wZW5UYXNrRm9ybTtcblxuICAgIHRhc2tCdG4uYXBwZW5kQ2hpbGQoYnRuSW1hZ2UpO1xuICAgIHRhc2tCdG4uYXBwZW5kQ2hpbGQoYnRuVGV4dCk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0J0bik7XG59XG5cbi8vIHJlbW92ZSB0aGUgYnV0dG9uIHRvIGFkZCBuZXcgdGFzayAoZm9yIHBhZ2VzIHdoZXJlIHlvdSBjYW5ub3QgYWRkIG5ldyB0YXNrKVxuZnVuY3Rpb24gcmVtb3ZlVGFza0J0bigpIHtcbiAgICBpZiAobWFpbkNvbnRlbnQubGFzdENoaWxkLmNsYXNzTmFtZSA9PT0gJ3Rhc2stYnRuJykge1xuICAgICAgICBtYWluQ29udGVudC5yZW1vdmVDaGlsZChtYWluQ29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gZGlzcGxheSBhIHNpbmd1bGFyIHRhc2tcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2ssIGluZGV4KSB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbiAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG4gICAgY29uc3QgdGFza0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTGVmdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxlZnQnKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tMZWZ0KTtcblxuICAgIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzJyk7XG4gICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGFza1N0YXR1cyk7XG5cbiAgICBjb25zdCB0YXNrSW5jb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRhc2tJbmNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5jb21wbGV0ZScpO1xuICAgIHRhc2tJbmNvbXBsZXRlLnNyYyA9ICcuL2ltYWdlcy9jaXJjbGUtdW5maWxsZWQuc3ZnJztcblxuICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRhc2tDb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLWZpbGxlZC5zdmcnO1xuXG4gICAgY29uc3QgdGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICB0YXNrTGVmdC5hcHBlbmRDaGlsZCh0aXRsZURpc3BsYXkpO1xuXG4gICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgIHRhc2tTdGF0dXMuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlKTtcbiAgICB0aXRsZURpc3BsYXkuc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrU3RhdHVzLmFwcGVuZENoaWxkKHRhc2tJbmNvbXBsZXRlKTtcbiAgICB9XG5cbiAgICB0YXNrU3RhdHVzLm9uY2xpY2sgPSB0b2dnbGVDb21wbGV0ZS5iaW5kKHRoaXMsIHRhc2tJbmNvbXBsZXRlLCB0YXNrU3RhdHVzLCB0aXRsZURpc3BsYXksIHRhc2spO1xuICAgIFxuICAgIGNvbnN0IHRhc2tSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tSaWdodC5jbGFzc0xpc3QuYWRkKCd0YXNrLXJpZ2h0Jyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrUmlnaHQpO1xuXG4gICAgY29uc3QgZHVlRGF0ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZHVlRGF0ZURpc3BsYXkpO1xuXG4gICAgaWYgKCF0YXNrLmR1ZURhdGUpIHtcbiAgICAgICAgZHVlRGF0ZURpc3BsYXkudGV4dENvbnRlbnQgPSAnTm8gRHVlIERhdGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGR1ZURhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW9yaXR5U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktc3RhdHVzJyk7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5U3RhdHVzKTtcblxuICAgIGNvbnN0IG5vUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBub1ByaW9yaXR5LnNyYyA9ICcuL2ltYWdlcy9zdGFyLXVuZmlsbGVkLnN2Zyc7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByaW9yaXR5LnNyYyA9ICcuL2ltYWdlcy9zdGFyLWZpbGxlZC5zdmcnO1xuXG4gICAgaWYgKHRhc2suaXNJbXBvcnRhbnQpIHtcbiAgICAgICAgcHJpb3JpdHlTdGF0dXMuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5U3RhdHVzLmFwcGVuZENoaWxkKG5vUHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eVN0YXR1cy5jbGFzc0xpc3QuYWRkKCduby1wcmlvcml0eScpO1xuICAgIH1cblxuICAgIHByaW9yaXR5U3RhdHVzLm9uY2xpY2sgPSB0b2dnbGVQcmlvcml0eS5iaW5kKHRoaXMsIHByaW9yaXR5U3RhdHVzLCB0YXNrKTtcblxuICAgIGNvbnN0IHRhc2tFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0YXNrRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQtYnRuJyk7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKHRhc2tFZGl0QnRuKTtcblxuICAgIGNvbnN0IGVkaXRCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlZGl0QnRuSW1nLnNyYyA9ICcuL2ltYWdlcy9lZGl0LnN2Zyc7XG4gICAgdGFza0VkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEJ0bkltZyk7XG5cbiAgICB0YXNrRWRpdEJ0bi5vbmNsaWNrID0gZWRpdFRhc2suYmluZCh0aGlzLCB0YXNrLCB0YXNrRGl2LCB0b0RvQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlLWJ0bicpO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnRuKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ0bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlbGV0ZUJ0bkltZy5zcmMgPSAnLi9pbWFnZXMvdHJhc2guc3ZnJztcbiAgICB0YXNrRGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bkltZyk7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGNsZWFyIGRpc3BsYXkgXG5mdW5jdGlvbiBjbGVhckRpc3BsYXkoKSB7XG4gICAgd2hpbGUgKHRvRG9Db250YWluZXIuZmlyc3RDaGlsZCAmJiB0b0RvQ29udGFpbmVyLmZpcnN0Q2hpbGQuY2xhc3NOYW1lICE9ICdlZGl0LXRhc2stZm9ybScpIHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b0RvQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHdoaWxlKHRvRG9Db250YWluZXIubGFzdENoaWxkICYmIHRvRG9Db250YWluZXIubGFzdENoaWxkLmNsYXNzTmFtZSAhPSAnZWRpdC10YXNrLWZvcm0nKSB7XG4gICAgICAgIHRvRG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9Eb0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG4vLyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHRhc2sgbGlzdCBkaXNwbGF5XG5mdW5jdGlvbiB1cGRhdGVUYXNrRGlzcGxheSgpIHtcbiAgICBjbGVhckRpc3BsYXkoKTtcblxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBjdXJyZW50RGF0ZTtcbiAgICBpZiAobW9udGggPCAxMCkge1xuICAgICAgICBjdXJyZW50RGF0ZSA9IGAke3llYXJ9LTAke21vbnRofS0ke2RheX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnREYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICB9XG5cbiAgICBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ0FsbCBUYXNrcycpIHtcbiAgICAgICAgbXlUYXNrTGlzdC5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFzayk7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ1RvZGF5Jykge1xuICAgICAgICBjb25zdCB0YXNrc1RvZGF5ID0gbXlUYXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLmR1ZURhdGUgPT09IGN1cnJlbnREYXRlKTtcbiAgICAgICAgdGFza3NUb2RheS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzaywgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT09ICdUaGlzIFdlZWsnKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXZWVrRW5kID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpICsgNyk7XG5cbiAgICAgICAgY29uc3QgdGFza3NUaGlzV2VlayA9IG15VGFza0xpc3QuZmlsdGVyKHRhc2sgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGVBcnJheSA9IHRhc2suZHVlRGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgY29uc3QgdGFza1llYXIgPSB0YXNrRGF0ZUFycmF5WzBdO1xuICAgICAgICAgICAgY29uc3QgdGFza01vbnRoID0gcGFyc2VJbnQodGFza0RhdGVBcnJheVsxXSwgMTApIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXkgPSB0YXNrRGF0ZUFycmF5WzJdO1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrWWVhciwgdGFza01vbnRoLCB0YXNrRGF5KTtcbiAgICAgICAgICAgIHJldHVybiAodGFza0RhdGUgPj0gZGF0ZSAmJiB0YXNrRGF0ZSA8PSBjdXJyZW50V2Vla0VuZCkgfHwgKHRhc2suZHVlRGF0ZSA9PT0gY3VycmVudERhdGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0YXNrc1RoaXNXZWVrLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ0ltcG9ydGFudCcpIHtcbiAgICAgICAgY29uc3QgdGFza3NJbXBvcnRhbnQgPSBteVRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suaXNJbXBvcnRhbnQpO1xuICAgICAgICB0YXNrc0ltcG9ydGFudC5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzaywgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9ucyB0byBkaXNwbGF5IGFwcHJvcHJpYXRlIHRhc2tzIGZvciBjaG9zZW4gdGFiXG5mdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGRpc3BsYXlUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQoYWxsVGFza3MpO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZGF5KCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZCh0b2RheSk7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUaGlzV2VlaygpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQodGhpc1dlZWspO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUltcG9ydGFudCgpIHtcbiAgICByZW1vdmVUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQoaW1wb3J0YW50KTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICBjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlBbGxUYXNrcywgZGlzcGxheVRvZGF5LCBkaXNwbGF5VGhpc1dlZWssIGRpc3BsYXlJbXBvcnRhbnQsIGNsb3NlVGFza0Zvcm0gfSIsImltcG9ydCB7IG15VGFza0xpc3QgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlKHN0YXR1cywgc3RhdHVzQ29udGFpbmVyLCB0aXRsZSwgdGFzaykge1xuICAgIGlmIChzdGF0dXMuY2xhc3NMaXN0LnZhbHVlID09PSAndGFzay1pbmNvbXBsZXRlJykge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGFza0NvbXBsZXRlLnNyYyA9ICcuL2ltYWdlcy9jaXJjbGUtZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGUpO1xuXG4gICAgICAgIHRpdGxlLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG5cbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbmNvbXBsZXRlJyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCB0YXNrSW5jb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrSW5jb21wbGV0ZS5zcmMgPSAnLi9pbWFnZXMvY2lyY2xlLXVuZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5jb21wbGV0ZSk7XG5cbiAgICAgICAgdGl0bGUuc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdub25lJyk7XG5cbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQcmlvcml0eShzdGF0dXNDb250YWluZXIsIHRhc2spIHtcbiAgICBpZiAoc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ3ByaW9yaXR5LXN0YXR1cyBwcmlvcml0eScpIHtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCduby1wcmlvcml0eScpO1xuICAgICAgICBzdGF0dXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhdHVzQ29udGFpbmVyLmxhc3RDaGlsZCk7XG5cbiAgICAgICAgY29uc3Qgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBub1ByaW9yaXR5LnNyYyA9ICcuL2ltYWdlcy9zdGFyLXVuZmlsbGVkLnN2Zyc7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChub1ByaW9yaXR5KTtcblxuICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnZhbHVlID09PSAncHJpb3JpdHktc3RhdHVzIG5vLXByaW9yaXR5Jykge1xuICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tcHJpb3JpdHknKTtcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0dXNDb250YWluZXIubGFzdENoaWxkKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcmlvcml0eS5zcmMgPSAnLi9pbWFnZXMvc3Rhci1maWxsZWQuc3ZnJztcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRhc2tEaXYsIHRvRG9Db250YWluZXIpIHtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmctdGFzaycpO1xuXG4gICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1mb3JtJyk7XG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrRm9ybSwgdGFza0Rpdik7XG5cbiAgICBjb25zdCBlZGl0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlJyk7XG4gICAgY29uc3QgZWRpdERldGFpbHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRldGFpbHMnKTtcbiAgICBjb25zdCBlZGl0RHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZHVlLWRhdGUnKTtcbiAgICBjb25zdCBlZGl0SXNJbXBvcnRhbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWlzLWltcG9ydGFudCcpO1xuICAgIGNvbnN0IGVkaXRTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1zdWJtaXQtYnRuJyk7XG4gICAgY29uc3QgZWRpdENhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNhbmNlbC1idG4nKTtcblxuICAgIGVkaXRUaXRsZUlucHV0LnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBlZGl0RGV0YWlsc0lucHV0LnZhbHVlID0gdGFzay5kZXRhaWxzO1xuICAgIGVkaXREdWVEYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgZWRpdElzSW1wb3J0YW50SW5wdXQuY2hlY2tlZCA9IHRhc2suaXNJbXBvcnRhbnQ7XG5cbn1cblxuZXhwb3J0IHsgdG9nZ2xlQ29tcGxldGUsIHRvZ2dsZVByaW9yaXR5LCBlZGl0VGFzayB9IiwiaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzLCBkaXNwbGF5VG9kYXksIGRpc3BsYXlUaGlzV2VlaywgZGlzcGxheUltcG9ydGFudCB9IGZyb20gJy4vZGlzcGxheSc7XG5cbmNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC10YXNrcycpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbmNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtd2VlaycpO1xuY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydGFudCcpO1xuY29uc3QgdGFicyA9IFthbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnRdO1xuXG5kaXNwbGF5QWxsVGFza3MoKTtcblxuYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWxsVGFza3MpO1xudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VG9kYXkpO1xudGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VGhpc1dlZWspO1xuaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUltcG9ydGFudCk7XG5cbmV4cG9ydCB7IGFsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudCwgdGFicyB9XG5cbi8vIFRPIERPXG5cbi8vIEFERCBGVU5DVElPTkFMSVRZIFRPIEFMTCBCVVRUT05TIE9OIEEgVEFTSyBESVZcbi8vIFBSSU9SSVRZIEJVVFRPTlxuLy8gRURJVCBCVVRUT05cbi8vIFRSQVNIIEJVVFRPTlxuXG4vLyBBREQgV0hFUkUgWU9VIENBTiBDTElDSyBPTiBUQVNLIFRPIFNFRSBERVRBSUxTXG5cbi8vIEFERCBBTklNQVRJT04gV0hFTiBDTElDS0lORyBPTiBUQVNLXG5cbi8vIENSRUFURSBGVU5DVElPTiBGT1IgTkVXIFBST0pFQ1RcblxuLy8gQUREIEhJRERFTiBGT1JNIEZPUiBORVcgUFJPSkVDVFxuXG4vLyBUSUUgUFJPSkVDVCBGT1JNIElOUFVUUyBUTyBORVdQUk9KRUNUIEZVTkNUSU9OIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==