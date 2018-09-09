"use strict";

let hoursSpan = document.querySelector(".hours");
let minutesSpan = document.querySelector(".minutes");
let secondsSpan = document.querySelector(".seconds");

function convertTime(time, spanElement) {
  let allElements = spanElement.querySelectorAll('span');
  allElements.forEach((element) => {
    element.classList.add("hide");
  })
  // console.log(allElements);
  console.log('time: ', time);
  console.log('spanElement: ', spanElement);


  if (time < 10) {
    spanElement.querySelector(".digit0").classList.remove("hide");

    if (time === 0) {
      spanElement.querySelectorAll(".digit" + time)[1].classList.remove("hide");
    } else {
      spanElement.querySelector(".digit" + time).classList.remove("hide");
    }
  } else {

    let timeString = time.toString();
    let timeArray = timeString.split('');
    console.log(timeArray);

    if (timeArray[0] == timeArray[1]) {
      spanElement.querySelectorAll(".digit" + timeArray[0])[0].classList.remove("hide");
      spanElement.querySelectorAll(".digit" + timeArray[0])[1].classList.remove("hide");
      console.log('I am same digits: time: ', time);
    } else {
      console.log('I am 2 digits, above 10 and not same: ', time);
      spanElement.querySelector(".digit" + timeArray[0]).classList.remove("hide");
      spanElement.querySelector(".digit" + timeArray[1]).classList.remove("hide");
    }
  }

}

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
convertTime(hours, hoursSpan);
convertTime(minutes, minutesSpan);
convertTime(seconds, secondsSpan);

setInterval(() => {

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  convertTime(hours, hoursSpan);
  convertTime(minutes, minutesSpan);
  convertTime(seconds, secondsSpan);
}, 1000)