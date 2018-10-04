"use strict";

let hoursSpan = document.querySelector(".hours");
let minutesSpan = document.querySelector(".minutes");
let secondsSpan = document.querySelector(".seconds");

function convertTime(time, spanElement, name) {
  spanElement.querySelector("#" + name + "1").classList = "";
  spanElement.querySelector("#" + name + "2").classList = "";

  if (time < 10) {
    spanElement.querySelector("#" + name + "1").classList.add("digit0");
    spanElement.querySelector("#" + name + "1").classList.add("digit");
    spanElement.querySelector("#" + name + "2").classList.add("digit" + time);
    spanElement.querySelector("#" + name + "2").classList.add("digit");
  } else {
    let timeString = time.toString();
    let timeArray = timeString.split("");
    console.log(timeArray);
    spanElement.querySelector("#" + name + "1").classList.add("digit");
    spanElement.querySelector("#" + name + "2").classList.add("digit");
    spanElement
      .querySelector("#" + name + "1")
      .classList.add("digit" + timeArray[0]);
    spanElement
      .querySelector("#" + name + "2")
      .classList.add("digit" + timeArray[1]);
  }
}

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  convertTime(hours, hoursSpan, "hours");
  convertTime(minutes, minutesSpan, "minutes");
  convertTime(seconds, secondsSpan, "seconds");
}, 1000);

const body = document.querySelector("body");
let sat = "70%";
let lightness = "70%";
let lastNumber;

function changeColor() {
  console.log("function changeColor called");
  let randomNumber = getRandomNumber();
  console.log("randomNumber: ", randomNumber, ". lastNumber :", lastNumber);
  if (randomNumber === lastNumber) {
    console.log("I am the same");
    changeColor();
    return;
  }
  lastNumber = randomNumber;
  body.style.backgroundColor =
    "hsl(" + randomNumber + "," + sat + "," + lightness + ")";
}

setInterval(function() {
  changeColor();
}, 2000);

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 360);
  return randomNumber;
}
