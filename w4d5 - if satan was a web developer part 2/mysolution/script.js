"use strict";

let phoneNumber = document.getElementById("phoneNumber");
const noBtn = document.getElementById("noButton");
let lastNumber;

noBtn.addEventListener("click", getRandomNumber);

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 9999999);

  if (lastNumber === randomNumber) {
    console.log("I am same");
    getRandomNumber();
    return;
  }
  lastNumber = randomNumber;
  phoneNumber.innerHTML = randomNumber;

}