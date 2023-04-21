const projectNameInput = document.getElementById('project-name');
const myProjectList = [];

const project = (name) => ({ name });

function addProject() {
    const name = name;

    const newProject = project(name);
    myProjectList.push(newProject);
    // display all projects here
    return newProject;
}

function clearProjectForm() {
    projectNameInput.value = '';
}

export { myProjectList, clearProjectForm }