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

// FIGURE OUT WHY TASK DELETE BUTTON ISN'T WORKING CORRECTLY

// ADD FUNCTIONALITY TO TASK EDIT AND DELETE BUTTONS!!!!!


// ADD AUTO FOCUS TO FORMS

// ADD PLACEHOLDERS ON FORMS

// ADD CHARACTER LIMIT TO FORM FIELDS

// ADD NOTE SAYING U CAN CLICK TASK TO SHOW DETAILS

// MAYBE CHANGE EDIT SUBMIT BUTTON TO SAY "UPDATE"

// UPDATE FORM UI FOR INPUTS AND INPUT BUTTON SIZES

// MAYBE INVERT COLORS ON EDIT AND TRASH BUTTONS ON SIDEBAR

// MAYBE ADD DRAG TO REORDER PROJECTS?????

// MAYBE ADD WHERE YOU CAN SORT BY DUE DATE????




// FINISH UI

// ADD MOBILE SUPPORT

// ADD LOCAL STORAGE