import { ignoreEvent } from "./editTask";
import { myProjectList } from "./createProject";
import { displayAllTasks, updateTaskDisplay } from "./display";
import { myTaskList , saveToLocalStorage } from "./createTask";

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
    ignoreEvent();

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
    ignoreEvent();

    for (let i = myTaskList.length - 1; i >= 0; i--) {
        const task = myTaskList[i];
        if (task.taskProject === project.name) {
            myTaskList.splice(myTaskList.indexOf(task), 1);
            updateTaskDisplay();
        }
    }

    if (project.name === contentHeader.textContent) {
        displayAllTasks();
    }

    myProjectList.splice(myProjectList.indexOf(project), 1);
    projectLinkContainer.removeChild(projectLink);
}

export { editProject, deleteProject }