'use strict';
let date = new Date();
let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const cMonth = date.getMonth(); //the value of current month, never change

//get 20 years value
let years = [];
for (let i = 2010; i < 2030; i++) {
  years.push(i);
}

window.onload = function () {
  renderDate();

  document.getElementById('prevMonth').onclick = function () {
    date.setMonth(date.getMonth() - 1);
    renderDate();
  };
  document.getElementById('nextMonth').onclick = function () {
    date.setMonth(date.getMonth() + 1);
    renderDate();
  };

  document.getElementById('curMonth').onclick = function () {
    document.querySelector('.bottom').classList.toggle('hide');
    document.querySelector('.bottom-show-month').classList.toggle('active');
    renderMonth();
  };

  document.querySelector('.bottom-show-month').onclick = function (e) {
    document.querySelector('.bottom-show-month').classList.remove('active');
    document.querySelector('.bottom').classList.remove('hide');
    const monthIndex = months.findIndex(
      (value) => value === e.target.innerHTML
    );
    renderDateBySelection(monthIndex);
    console.log(years);
  };
};

function renderDate() {
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth();
  let currentDay = date.getDate();

  //get the value => each month's first day is on which week
  let week = new Date(currentYear, currentMonth, 1).getDay();
  // get how many days every month = the last day every month
  let days = new Date(currentYear, currentMonth + 1, -1).getDate() + 1;

  document.getElementById('year').innerHTML = currentYear;
  document.getElementById('curMonth').innerHTML = months[currentMonth];

  let dayText = '';
  for (let i = 0; i < week; i++) {
    dayText += '<li></li>';
  }
  for (let i = 1; i <= days; i++) {
    if (i === currentDay && currentMonth === cMonth) {
      dayText += '<li id=active class=active-style>' + i + '</li>';
    } else {
      dayText += '<li>' + i + '</li>';
    }
  }

  document.getElementById('day').innerHTML = dayText;
}

function renderMonth() {
  let monthText = '';
  for (let i = 0; i < months.length; i++) {
    if (months[i] === months[cMonth]) {
      monthText += '<li class = month-highlight>' + months[i] + '</li>';
    } else {
      monthText += '<li>' + months[i] + '</li>';
    }
  }
  document.querySelector('.bottom-show-month').innerHTML = monthText;
}

function renderDateBySelection(month) {
  let currentYear = date.getFullYear();
  let currentDay = date.getDate();
  let week = new Date(currentYear, month, 1).getDay();
  let days = new Date(currentYear, month + 1, -1).getDate() + 1;

  document.getElementById('curMonth').innerHTML = months[month];

  let dayText = '';
  for (let i = 0; i < week; i++) {
    dayText += '<li></li>';
  }
  for (let i = 1; i <= days; i++) {
    if (i === currentDay && month === cMonth) {
      dayText += '<li id=active class=active-style>' + i + '</li>';
    } else {
      dayText += '<li>' + i + '</li>';
    }
  }
  document.getElementById('day').innerHTML = dayText;
}
