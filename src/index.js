import { displayAllTasks, displayToday, displayThisWeek, displayImportant, initialProjectDisplay, updateTaskDisplay } from './display';
import { myTaskList } from './createTask';
import { myProjectList } from './createProject';
import { isCompleteArray } from './editTask';

const allTasks = document.getElementById('all-tasks');
const today = document.getElementById('today');
const thisWeek = document.getElementById('this-week');
const important = document.getElementById('important');
const tabs = [allTasks, today, thisWeek, important];

// LOCAL STORAGE
// localStorage.clear();

function getCurrentStatus() {
    const storedCompletedTasks = JSON.parse(localStorage.getItem("isCompleteArray"));
    isCompleteArray.length = 0;
    isCompleteArray.push.apply(isCompleteArray, storedCompletedTasks);
    console.log(storedCompletedTasks);
}

function getSeparatedTaskList() {
    const separatedTaskList = JSON.parse(localStorage.getItem("separatedTaskList"));
    myTaskList.length = 0;
    myTaskList.push.apply(myTaskList, separatedTaskList);
    console.log(myTaskList);
}

function getLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem("myTaskList"));
    myTaskList.length = 0;
    myTaskList.push.apply(myTaskList, storedTasks);
    console.log(storedTasks);

    if (isCompleteArray) {
        getCurrentStatus();
        getSeparatedTaskList();
    }

    const storedProjects = JSON.parse(localStorage.getItem("myProjectList"));
    myProjectList.length = 0;
    myProjectList.push.apply(myProjectList, storedProjects);
    console.log(storedProjects);
}

getLocalStorage();
initialProjectDisplay();
displayAllTasks();

allTasks.addEventListener('click', displayAllTasks);
today.addEventListener('click', displayToday);
thisWeek.addEventListener('click', displayThisWeek);
important.addEventListener('click', displayImportant);

export { allTasks, today, thisWeek, important, tabs, getLocalStorage, getCurrentStatus }

// TO DO

// CLEAN UP CODE

// SEND TO NADINE