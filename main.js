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

const task = (title, description, dueDate, isImportant) => ({ title, description, dueDate, isImportant });

function addTask() {
    const title = titleInput.value;
    const description = detailsInput.value;
    const dueDate = dueDateInput.value;
    const isImportant = isImportantInput.checked;

    const newTask = task(title, description, dueDate, isImportant);
    myTaskList.push(newTask);
/*     console.log(newTask);
    console.log(myTaskList); */
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)();
    return newTask;
}

addTaskBtn.addEventListener('click', (e) => {
    if (!addTaskForm.checkValidity()) {
        addTaskForm.reportValidity();
    } else {
        addTask();
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.closeTaskForm)();
        e.preventDefault();

        titleInput.value = '';
        detailsInput.value = '';
        dueDateInput.value = '';
        isImportantInput.checked = false;
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



const mainContent = document.querySelector('.main-content');
const contentHeader = document.querySelector('.content-heading');
const toDoContainer = document.querySelector('.todo-container');
const taskForm = document.querySelector('.task-form');
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

    const taskStatus = document.createElement('div');
    taskDiv.appendChild(taskStatus);

    const taskIncomplete = document.createElement('img');
    taskIncomplete.src = './images/circle-unfilled.svg';
    taskStatus.appendChild(taskIncomplete);

    const titleDisplay = document.createElement('div');
    titleDisplay.textContent = task.title;
    taskDiv.appendChild(titleDisplay);

    const dueDateDisplay = document.createElement('div');
    dueDateDisplay.textContent = task.dueDate;
    taskDiv.appendChild(dueDateDisplay);

    const priorityStatus = document.createElement('div');
    taskDiv.appendChild(priorityStatus);

    const noPriority = document.createElement('img');
    noPriority.src = './images/star-unfilled.svg';
    priorityStatus.appendChild(noPriority);

    const editBtn = document.createElement('img');
    editBtn.src = './images/edit.svg';
    taskDiv.appendChild(editBtn);

    const deleteBtn = document.createElement('img');
    deleteBtn.src = './images/trash.svg';
    taskDiv.appendChild(deleteBtn);
}

// function to update the task list display
function updateTaskDisplay() {
    while (toDoContainer.firstChild) {
        toDoContainer.removeChild(toDoContainer.firstChild);
    }

    if (contentHeader.textContent === 'All Tasks') {
        _createTask__WEBPACK_IMPORTED_MODULE_1__.myTaskList.forEach((task, index) => {
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
}

function displayToday() {
    removeTaskBtn();
    highlightSelected(_index__WEBPACK_IMPORTED_MODULE_0__.today);
    contentHeader.textContent = 'Today';
}

function displayThisWeek() {
    removeTaskBtn();
    highlightSelected(_index__WEBPACK_IMPORTED_MODULE_0__.thisWeek);
    contentHeader.textContent = 'This Week';
}

function displayImportant() {
    removeTaskBtn();
    highlightSelected(_index__WEBPACK_IMPORTED_MODULE_0__.important);
    contentHeader.textContent = 'Important';
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

// CREATE FUNCTION TO DISPLAY AN OBJECT

// LOOP THROUGH ARRAY TO DISPLAY ALL OBJECTS FOR ALL TASKS

// FILTER THROUGH ARRAY TO DISPLAY OBJECTS FOR OTHER TABS

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhEQUE4RCwwQ0FBMEM7O0FBRXhHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLElBQUkseURBQWU7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxRQUFRLHVEQUFhO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNvRTtBQUMzQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxnREFBWTtBQUNoQjtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDJEQUFrQjtBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRDQUFRO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHlDQUFLO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiw0Q0FBUTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQVM7QUFDL0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakk2Rjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBZTs7QUFFZixtQ0FBbUMscURBQWU7QUFDbEQsZ0NBQWdDLGtEQUFZO0FBQzVDLG1DQUFtQyxxREFBZTtBQUNsRCxvQ0FBb0Msc0RBQWdCOztBQUVDOztBQUVyRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb3NlVGFza0Zvcm0sIGRpc3BsYXlBbGxUYXNrcyB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuY29uc3QgZGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpO1xuY29uc3QgaXNJbXBvcnRhbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1pbXBvcnRhbnQnKTtcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG5jb25zdCBteVRhc2tMaXN0ID0gW107XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpc0ltcG9ydGFudCkgPT4gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpc0ltcG9ydGFudCB9KTtcblxuZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBpc0ltcG9ydGFudCA9IGlzSW1wb3J0YW50SW5wdXQuY2hlY2tlZDtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaXNJbXBvcnRhbnQpO1xuICAgIG15VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbi8qICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKTtcbiAgICBjb25zb2xlLmxvZyhteVRhc2tMaXN0KTsgKi9cbiAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgICByZXR1cm4gbmV3VGFzaztcbn1cblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRUYXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgYWRkVGFza0Zvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRUYXNrKCk7XG4gICAgICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgZGV0YWlsc0lucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBpc0ltcG9ydGFudElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG59KTtcblxuZXhwb3J0IHsgbXlUYXNrTGlzdCB9IiwiaW1wb3J0IHsgYWxsVGFza3MsIHRvZGF5LCB0aGlzV2VlaywgaW1wb3J0YW50LCB0YWJzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBteVRhc2tMaXN0IH0gZnJvbSAnLi9jcmVhdGVUYXNrJztcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG5jb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaGVhZGluZycpO1xuY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5jb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ0bicpO1xuXG4vLyBoaWdobGlnaHQgdGhlIHNlbGVjdGVkIG5hdmlnYXRpb24gdGFiXG5mdW5jdGlvbiBoaWdobGlnaHRTZWxlY3RlZChzZWxlY3RlZFRhYikge1xuICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgc2VsZWN0ZWRUYWIuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbn1cblxuLy8gb3Blbi9jbG9zZSB0aGUgZm9ybSB0byBhZGQgbmV3IHRhc2tzXG5mdW5jdGlvbiBvcGVuVGFza0Zvcm0oKSB7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuY2FuY2VsQnRuLm9uY2xpY2sgPSBjbG9zZVRhc2tGb3JtO1xuXG4vLyBjcmVhdGUgYW5kIGRpc3BsYXkgdGhlIGJ1dHRvbiB0byBhZGQgbmV3IHRhc2tzXG5mdW5jdGlvbiBkaXNwbGF5VGFza0J0bigpIHtcbiAgICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0J0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ0bicpO1xuXG4gICAgY29uc3QgYnRuSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBidG5JbWFnZS5zcmMgPSAnLi9pbWFnZXMvcGx1cy5zdmcnO1xuXG4gICAgY29uc3QgYnRuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0blRleHQudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gICAgdGFza0J0bi5vbmNsaWNrID0gb3BlblRhc2tGb3JtO1xuXG4gICAgdGFza0J0bi5hcHBlbmRDaGlsZChidG5JbWFnZSk7XG4gICAgdGFza0J0bi5hcHBlbmRDaGlsZChidG5UZXh0KTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrQnRuKTtcbn1cblxuLy8gcmVtb3ZlIHRoZSBidXR0b24gdG8gYWRkIG5ldyB0YXNrIChmb3IgcGFnZXMgd2hlcmUgeW91IGNhbm5vdCBhZGQgbmV3IHRhc2spXG5mdW5jdGlvbiByZW1vdmVUYXNrQnRuKCkge1xuICAgIGlmIChtYWluQ29udGVudC5sYXN0Q2hpbGQuY2xhc3NOYW1lID09PSAndGFzay1idG4nKSB7XG4gICAgICAgIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiB0byBkaXNwbGF5IGEgc2luZ3VsYXIgdGFza1xuZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzaywgaW5kZXgpIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcblxuICAgIGNvbnN0IHRhc2tJbmNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGFza0luY29tcGxldGUuc3JjID0gJy4vaW1hZ2VzL2NpcmNsZS11bmZpbGxlZC5zdmcnO1xuICAgIHRhc2tTdGF0dXMuYXBwZW5kQ2hpbGQodGFza0luY29tcGxldGUpO1xuXG4gICAgY29uc3QgdGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlRGlzcGxheSk7XG5cbiAgICBjb25zdCBkdWVEYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZURpc3BsYXkpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5U3RhdHVzKTtcblxuICAgIGNvbnN0IG5vUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBub1ByaW9yaXR5LnNyYyA9ICcuL2ltYWdlcy9zdGFyLXVuZmlsbGVkLnN2Zyc7XG4gICAgcHJpb3JpdHlTdGF0dXMuYXBwZW5kQ2hpbGQobm9Qcmlvcml0eSk7XG5cbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWRpdEJ0bi5zcmMgPSAnLi9pbWFnZXMvZWRpdC5zdmcnO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVCdG4uc3JjID0gJy4vaW1hZ2VzL3RyYXNoLnN2Zyc7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xufVxuXG4vLyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHRhc2sgbGlzdCBkaXNwbGF5XG5mdW5jdGlvbiB1cGRhdGVUYXNrRGlzcGxheSgpIHtcbiAgICB3aGlsZSAodG9Eb0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRvRG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9Eb0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PT0gJ0FsbCBUYXNrcycpIHtcbiAgICAgICAgbXlUYXNrTGlzdC5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzaywgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9ucyB0byBkaXNwbGF5IGFwcHJvcHJpYXRlIHRhc2tzIGZvciBjaG9zZW4gdGFiXG5mdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGRpc3BsYXlUYXNrQnRuKCk7XG4gICAgaGlnaGxpZ2h0U2VsZWN0ZWQoYWxsVGFza3MpO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kYXkoKSB7XG4gICAgcmVtb3ZlVGFza0J0bigpO1xuICAgIGhpZ2hsaWdodFNlbGVjdGVkKHRvZGF5KTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ1RvZGF5Jztcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRoaXNXZWVrKCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZCh0aGlzV2Vlayk7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW1wb3J0YW50KCkge1xuICAgIHJlbW92ZVRhc2tCdG4oKTtcbiAgICBoaWdobGlnaHRTZWxlY3RlZChpbXBvcnRhbnQpO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50Jztcbn1cblxuZXhwb3J0IHsgZGlzcGxheUFsbFRhc2tzLCBkaXNwbGF5VG9kYXksIGRpc3BsYXlUaGlzV2VlaywgZGlzcGxheUltcG9ydGFudCwgY2xvc2VUYXNrRm9ybSB9IiwiaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzLCBkaXNwbGF5VG9kYXksIGRpc3BsYXlUaGlzV2VlaywgZGlzcGxheUltcG9ydGFudCB9IGZyb20gJy4vZGlzcGxheSc7XG5cbmNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC10YXNrcycpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbmNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtd2VlaycpO1xuY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydGFudCcpO1xuY29uc3QgdGFicyA9IFthbGxUYXNrcywgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnRdO1xuXG5kaXNwbGF5QWxsVGFza3MoKTtcblxuYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWxsVGFza3MpO1xudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VG9kYXkpO1xudGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VGhpc1dlZWspO1xuaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUltcG9ydGFudCk7XG5cbmV4cG9ydCB7IGFsbFRhc2tzLCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudCwgdGFicyB9XG5cbi8vIFRPIERPXG5cbi8vIENSRUFURSBGVU5DVElPTiBUTyBESVNQTEFZIEFOIE9CSkVDVFxuXG4vLyBMT09QIFRIUk9VR0ggQVJSQVkgVE8gRElTUExBWSBBTEwgT0JKRUNUUyBGT1IgQUxMIFRBU0tTXG5cbi8vIEZJTFRFUiBUSFJPVUdIIEFSUkFZIFRPIERJU1BMQVkgT0JKRUNUUyBGT1IgT1RIRVIgVEFCU1xuXG4vLyBDUkVBVEUgRlVOQ1RJT04gRk9SIE5FVyBQUk9KRUNUXG5cbi8vIEFERCBISURERU4gRk9STSBGT1IgTkVXIFBST0pFQ1RcblxuLy8gVElFIFBST0pFQ1QgRk9STSBJTlBVVFMgVE8gTkVXUFJPSkVDVCBGVU5DVElPTiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=