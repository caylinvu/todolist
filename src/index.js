import { displayAllTasks, displayToday, displayThisWeek, displayImportant, initialProjectDisplay } from './display';
import { myTaskList } from './createTask';

const allTasks = document.getElementById('all-tasks');
const today = document.getElementById('today');
const thisWeek = document.getElementById('this-week');
const important = document.getElementById('important');
const tabs = [allTasks, today, thisWeek, important];


// for (let i = myTaskList.length - 1; i >= 0; i--) {
//     const task = myTaskList[i];
//     if (!task.dueDate) {
//         myTaskList.push(myTaskList.splice(myTaskList.indexOf(task), 1)[0]);
//     }
// }

// myTaskList.sort((a, b) => (new Date(a.dueDate)) - (new Date(b.dueDate)));

initialProjectDisplay();
displayAllTasks();

allTasks.addEventListener('click', displayAllTasks);
today.addEventListener('click', displayToday);
thisWeek.addEventListener('click', displayThisWeek);
important.addEventListener('click', displayImportant);

export { allTasks, today, thisWeek, important, tabs }

// TO DO

// MAYBE ADD WHERE YOU CAN SORT BY DUE DATE????
// SORT BY DUE DATE AT BEGINNING OF UPDATE DISPLAY FUNCTION, THEN PUSH COMPLETED TASKS TO BOTTOM, THEN UPDATE DISPLAY

// FINISH UI

// ADD MOBILE SUPPORT

// ADD LOCAL STORAGE