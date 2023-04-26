import { displayAllTasks, displayToday, displayThisWeek, displayImportant, initialProjectDisplay } from './display';

const allTasks = document.getElementById('all-tasks');
const today = document.getElementById('today');
const thisWeek = document.getElementById('this-week');
const important = document.getElementById('important');
const tabs = [allTasks, today, thisWeek, important];

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