import { myTaskList , saveToLocalStorage } from "./createTask";
import { updateTaskDisplay } from "./display";
import { getLocalStorage, getCurrentStatus } from ".";

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

        isCompleteArray.push(myTaskList.splice(myTaskList.indexOf(task), 1)[0]);

        updateTaskDisplay();

    } else {
        status.classList.toggle('task-incomplete');
        statusContainer.removeChild(statusContainer.lastChild);

        const taskIncomplete = document.createElement('img');
        taskIncomplete.src = './images/circle-unfilled.svg';
        statusContainer.appendChild(taskIncomplete);

        title.style.setProperty('text-decoration', 'none');

        task.isComplete = false;

        isCompleteArray.splice(isCompleteArray.indexOf(task), 1);

        updateTaskDisplay();
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
        localStorage.setItem("separatedTaskList", JSON.stringify(myTaskList));
        localStorage.setItem("isCompleteArray", JSON.stringify(isCompleteArray));
    } else {
        localStorage.setItem("myTaskList", JSON.stringify(myTaskList));
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
            updateTaskDisplay();
            if (isCompleteArray) {
                localStorage.setItem("separatedTaskList", JSON.stringify(myTaskList));
                localStorage.setItem("isCompleteArray", JSON.stringify(isCompleteArray));
            } else {
                localStorage.setItem("myTaskList", JSON.stringify(myTaskList));
            }
            e.preventDefault();
        }
    };

    editCancelBtn.onclick = closeEditTaskForm;
}

function deleteTask(index, task) {
    ignoreEvent();
    myTaskList.splice(index, 1);

    if (isCompleteArray.includes(task)) {
        isCompleteArray.splice(isCompleteArray.indexOf(task), 1);
    }

    updateTaskDisplay();

    if (isCompleteArray) {
        localStorage.setItem("separatedTaskList", JSON.stringify(myTaskList));
        localStorage.setItem("isCompleteArray", JSON.stringify(isCompleteArray));
    } else {
        localStorage.setItem("myTaskList", JSON.stringify(myTaskList));
    }
    // saveToLocalStorage();
}

export { toggleComplete, togglePriority, editTask, deleteTask, ignoreEvent, isCompleteArray }