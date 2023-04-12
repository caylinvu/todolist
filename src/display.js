function displayTaskBtn() {
    const mainContent = document.querySelector('.main-content');

    const taskBtn = document.createElement('button');
    taskBtn.classList.add('task-btn');

    const btnImage = document.createElement('img');
    btnImage.src = './images/plus.svg';

    const btnText = document.createElement('div');
    btnText.textContent = 'Add Task';

    taskBtn.appendChild(btnImage);
    taskBtn.appendChild(btnText);
    mainContent.appendChild(taskBtn);
}

function displayAllTasks() {
    const contentHeader = document.querySelector('.content-heading');
    contentHeader.textContent = 'All Tasks';
    displayTaskBtn();
}

export { displayAllTasks }