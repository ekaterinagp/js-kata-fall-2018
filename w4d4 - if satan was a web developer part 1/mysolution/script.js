"use strict";


let plusBtn = document.getElementById("plusBtn");
let firstPart = document.getElementById("firstPart");
let secondPart = document.getElementById("secondPart");



plusBtn.addEventListener('click', addNumber);

function addNumber() {
  let newFirst = +firstPart.innerHTML;
  let newSecond = +secondPart.innerHTML;
  newSecond++;
  secondPart.innerHTML = newSecond;
  console.log('addNumber: newFirst: ', newFirst);
  console.log('addNumber: newSecond: ', newSecond);


  if (newSecond > "9999") {
    newFirst++;
    firstPart.innerHTML = newFirst;
    console.log('addNumber: newFirst: ', newFirst);

    newSecond = 0;
    newSecond = "000" + newSecond;
    secondPart.innerHTML = newSecond;
    console.log('addNumber: newSecond: ', newSecond);
  } else if (newSecond <= 9) {
    newSecond = "000" + newSecond;
    secondPart.innerHTML = newSecond;
  } else if (newSecond <= 99) {
    newSecond = "00" + newSecond;
    secondPart.innerHTML = newSecond;
  } else if (newSecond <= 999) {
    newSecond = "0" + newSecond;
    secondPart.innerHTML = newSecond;
  }

}