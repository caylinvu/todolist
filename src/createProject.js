import { closeProjectForm } from "./display";

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
    console.log(newProject);
    console.log(myProjectList);
    // display all projects here
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