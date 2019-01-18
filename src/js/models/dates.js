import { elements } from '../views/base';

// DATE ON HEADER
export let todayDate = new Date();
export let dayNr = todayDate.getDate();
export let month = todayDate.getMonth();
export let year = todayDate.getFullYear();

// console.log(todayDate);
// console.log(dayNr);

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/*
==================================================
 WEEK section
==================================================
 */



/*
getDate()	Returns the day of the month (from 1-31)
getDay()	Returns the day of the week (from 0-6)
getFullYear()	Returns the year
getHours()	Returns the hour (from 0-23)
getMilliseconds()	Returns the milliseconds (from 0-999)
getMinutes()	Returns the minutes (from 0-59)
getMonth()	Returns the month (from 0-11)
getSeconds()	Returns the seconds (from 0-59)
*/


// ===================================
//GET CURRENT WEEK NUMBER

//  Date.prototype.getWeek = function() {
//     var onejan = new Date(this.getFullYear(),0,1);
//     return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
//   }
  

  export const weekNr = dt => {
     var tdt = new Date(dt.valueOf());  // .valueOf returns a Number, representing the number of milliseconds between the date object and midnight January 1, 1970 UTCmiliseconds
     var dayn = (dt.getDay() + 6) % 7;
     tdt.setDate(tdt.getDate() - dayn + 3);
     var firstThursday = tdt.valueOf();
     tdt.setMonth(0, 1);
     if (tdt.getDay() !== 4) 
       {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        }
     return 1 + Math.ceil((firstThursday - tdt) / 604800000);
  }

  // weekNr = new Date().getWeek();


// ===================================
 //GET FIRST DAY OF THE CURRENT WEEK

export function startOfWeek(date, day) {  // doesn't work on Sunday
    var first = date.getDate() - (date.getDay() - day) +(date.getDay() === 0 ? -6 : 1);
    return new Date(date.setDate(first));
}

// (startOfWeek(new Date()).toString());



// ===================================
// create an array with tasks

const daysArray = [];

// create class Day 
class Day {
  constructor(date, task, done = false) {
    this.date = date;
    this.tasks = [{task: task, done: done}];
  }

  addTask(task, done = false) {
    this.tasks.push({task: task, done: done});
  }
}



// ===================================
 // GET DAYS OF THE CURRENT WEEK | display them

const getWeekDays = () => {
  //create an array with days in the week
  const weekDays = [];
  // weekDays = [{id: 0, day: "Mon 31 Dec"}, 
  //             {id: 1, day: "Tue 01 Jan"}, ...]

  // loop to get 7 days of the week
  for (let i = 0; i <= 6; i++) {
    const firstDay = startOfWeek(todayDate, i).toString();
    const day = firstDay.split(" ", 4);
    // push every day to the weekDays array as an object
    weekDays.push({id: i, day: `${day[0]} ${day[2]} ${day[1]}`, date: `${day[2]} ${day[1]} ${day[3]}`});
    firstDay++;
  }
  return weekDays;
}

export const displayWeekDays = () => {
  getWeekDays().forEach(el => {
    // console.log(el);
    const markup = `<div class="section__item" data-date="${el.date}">
                    <h3 class="header-3 section__item--title"> 
                      <span class="week__day">${el.day}</span>
                      <button class="button ">
                        <i class="fas fa-plus-circle button__add"></i>
                      </button>
                    </h3>
                    <h3 class="header-3 section__item--content"></h3>
                  </div>`;
    elements.weekDays.insertAdjacentHTML('beforeend', markup);
  });
}


// ===================================
 // go to next/previus week | display changed week





// ===================================
 // add new task after clicking on the plus/add button | display it

 export const hidePopupTask = () => {
  const popupTask = elements.popupTask;
  popupTask.classList.add("hide");
  popupTask.removeAttribute('data-date');
}

 
 export const openPopupTask = (e) => {
  const target = e.target;
  if (!target.matches(".button__add")) return;
  const popupTask = elements.popupTask;
  popupTask.classList.remove("hide");
  const date = target.parentNode.parentNode.parentNode.dataset.date;
  popupTask.dataset.date = date;
}

export function addTask(e) {
  e.preventDefault(); //prevent refreshing the page/Prevent a link from opening the URL
  const taskInputed = elements.popupTaskText.value;
  const dateOfCurrentDay = elements.popupTask.dataset.date;
  const createdCurrentDay = new Day(dateOfCurrentDay, taskInputed);
  // create day object
  const isInArray = daysArray.some(el => el.date == dateOfCurrentDay);
  
  // checking if the current day(clicked day) is in a daysArray OR if a daysArray is empty AND if the task was written
    if ((!isInArray || daysArray.length == 0) && taskInputed.length !== 0) {
      // push currentDay object into daysArray
      daysArray.push(createdCurrentDay);
      displayDaysTasks(dateOfCurrentDay, taskInputed, false);
    } else {
      daysArray.forEach(el => {
        // looking for current day in a daysArr AND checking if the task was written AND if the task was written before in the current day
        if (el.date == dateOfCurrentDay && taskInputed.length !== 0 && !el.tasks.some(el => el.task == taskInputed)) {
          // adding new task into current day
          console.log();
          el.addTask(taskInputed);
          displayDaysTasks(el.date, taskInputed, false);
        }
      })
    }

  console.table(daysArray);
 
  //reset an input(textarea)
  this.reset(); 
  hidePopupTask();
  }

const displayDaysTasks = (date, task, done) => {
  const weekDays = elements.weekDays.querySelectorAll('[data-date]'); // return <div class="section__item" data-date="14 Jan 2019">...</div>
  const taskUncheckedIcon = `"far fa-circle"`;
  const taskCheckedIcon = `"far fa-check-circle"`;
  let isDone;

  done ? isDone = taskCheckedIcon : isDone = taskUncheckedIcon; 

  const html = `<div class="section__item--goal">
                  <button class="button button__check">
                    <i class=${isDone}></i>
                  </button>
                  <p class="paragraph section__item--paragraph">${task}</p>
                  <button class="button button__edit button__hidden">
                    <i class="far fa-edit"></i>
                  </button>
                  <button class="button button__delete button__hidden">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>`

  weekDays.forEach(e => {
    if (e.dataset.date == date) {
      e.children[1].insertAdjacentHTML('beforeend', html);
    } 
  })

}

// ===================================
 // remove task | display it
export const deleteTask = (e) => {
  const target = e.target;
  const dayContent = target.parentNode.parentNode;
  if (target.classList.contains("button__delete"))  {
    dayContent.remove(elements.sectionItemContent);
  }
}


// ===================================
 // toggle checked/unchecked task | display it

 export const toggleTask = (e) => {
  const target = e.target;
  const checked = 'fa-check-circle';
  const unchecked = 'fa-circle';
  if (target.classList.contains(unchecked)) {
    target.classList.remove(unchecked);
    target.classList.add(checked);
  } else if (target.classList.contains(checked)) {
    target.classList.remove(checked);
    target.classList.add(unchecked);
  }
 }
