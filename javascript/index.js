"use strict";
let date = new Date();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const cMonth = date.getMonth(); //the value of current month, never change

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

  document.getElementById("month").onclick = function () {
    renderMonth();
    document.querySelector(".show-week").classList.toggle("hide");
    document.querySelector(".show-month").classList.toggle("active");
    const monthShow = document.querySelector(".show-month");
    monthShow.onclick = function () {};
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

  document.getElementById("year").innerHTML = currentYear;
  document.getElementById("month").innerHTML = months[currentMonth];

  let dayText = "";
  for (let i = 0; i < week; i++) {
    dayText += "<li></li>";
  }
  for (let i = 1; i <= days; i++) {
    if (i === currentDay && currentMonth === cMonth) {
      dayText += "<li id=active class=active-style>" + i + "</li>";
    } else {
      dayText += "<li>" + i + "</li>";
    }
  }

  document.getElementById("day").innerHTML = dayText;
}

function renderMonth() {
  let monthText = "";
  for (let i = 0; i < months.length; i++) {
    if (months[i] === document.getElementById("month").innerHTML) {
      monthText += "<li class=month-highlight>" + months[i] + "</li>";
    } else {
      monthText += "<li>" + months[i] + "</li>";
    }
  }
  document.querySelector(".show-month").innerHTML = monthText;
}
