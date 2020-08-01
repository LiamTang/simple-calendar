"use strict";

window.onload = function () {
  renderDate();
};
function renderDate() {
  let date = new Date();
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth();
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
  let dayText = "";
  for (let i = 0; i < 30; i++) {
    dayText += "<li>" + i + "</li>";
  }

  document.getElementById("year").innerHTML = currentYear;
  document.getElementById("month").innerHTML = months[currentMonth];
  document.getElementById("day").innerHTML = dayText;
}
