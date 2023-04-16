import { displayAllTasks, displayToday, displayThisWeek, displayImportant } from './display';
import { addTask } from './createTask';

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

// ADD HIDDEN FORM FOR NEW TASK

// TIE TASK FORM INPUTS TO NEWTASK FUNCTION

// CREATE FUNCTION FOR NEW PROJECT

// ADD HIDDEN FORM FOR NEW PROJECT

// TIE PROJECT FORM INPUTS TO NEWPROJECT FUNCTION