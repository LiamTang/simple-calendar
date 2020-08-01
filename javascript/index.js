"use strict";
let date = new Date();

window.onload = function () {
  renderDate();

  document.getElementById("prevMonth").onclick = function () {
    date.setMonth(date.getMonth() - 1);
    renderDate();
  };
  document.getElementById("nextMonth").onclick = function () {
    date.setMonth(date.getMonth() + 1);
    renderDate();
  };
};
function renderDate() {
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth();
  let currentDay = date.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //get the value => each month's first day is on which week
  let week = new Date(currentYear, currentMonth, 1).getDay();
  // get how many days every month = the last day every month
  let days = new Date(currentYear, currentMonth + 1, -1).getDate() + 1;

  let dayText = "";
  for (let i = 0; i < week; i++) {
    dayText += "<li></li>";
  }
  for (let i = 1; i <= days; i++) {
    if (i === currentDay) {
      dayText += "<li class=active>" + i + "</li>";
    } else {
      dayText += "<li class=hover>" + i + "</li>";
    }
  }
  document.getElementById("year").innerHTML = currentYear;
  document.getElementById("month").innerHTML = months[currentMonth];
  document.getElementById("day").innerHTML = dayText;
}
