import { displayAllTasks, displayToday, displayThisWeek, displayImportant } from './display';

const allTasks = document.getElementById('all-tasks');
const today = document.getElementById('today');
const thisWeek = document.getElementById('this-week');
const important = document.getElementById('important');
const tabs = [allTasks, today, thisWeek, important];

displayAllTasks();

allTasks.addEventListener('click', displayAllTasks);
today.addEventListener('click', displayToday);
thisWeek.addEventListener('click', displayThisWeek);
important.addEventListener('click', displayImportant);

export { allTasks, today, thisWeek, important, tabs }

// TO DO

// CREATE FUNCTION TO DISPLAY AN OBJECT

// LOOP THROUGH ARRAY TO DISPLAY ALL OBJECTS FOR ALL TASKS

// FILTER THROUGH ARRAY TO DISPLAY OBJECTS FOR OTHER TABS

// CREATE FUNCTION FOR NEW PROJECT

// ADD HIDDEN FORM FOR NEW PROJECT

// TIE PROJECT FORM INPUTS TO NEWPROJECT FUNCTION