import { closeProjectForm, displayProject } from "./display";
import { saveToLocalStorage } from "./createTask";

const projectForm = document.querySelector('.project-form');
const projectNameInput = document.getElementById('project-name');
const projectSubmitBtn = document.querySelector('.project-submit-btn');
const myProjectList = [];

const project = (name) => ({ name });

function addProject() {
    const name = projectNameInput.value;

    const newProject = project(name);
    myProjectList.push(newProject);
    displayProject(newProject);
    saveToLocalStorage();
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
        closeProjectForm();
        e.preventDefault();
    }
});

export { myProjectList, clearProjectForm }