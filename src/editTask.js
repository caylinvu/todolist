import { myTaskList } from "./createTask";

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

export { toggleComplete, togglePriority, editTask }