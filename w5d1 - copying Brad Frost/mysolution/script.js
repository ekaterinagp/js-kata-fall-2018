"use strict";

let allBubbles = document.querySelectorAll(".bubble");
let sat = "70%";
let lightness = "70%";


for (let i = 0; i < allBubbles.length; i++) {


  if (i % 2 === 0) {
    let yRandom = Math.floor(Math.random() * 100);
    let xRandom = Math.floor(Math.random() * 500);
    console.log("yRandom:", yRandom);
    console.log("xRandom:", xRandom);
    allBubbles[i].style.top = yRandom + "px";
    allBubbles[i].style.left = xRandom + "px";
  } else {
    let yRandom = Math.floor(Math.random() * 500);
    let xRandom = Math.floor(Math.random() * 100);
    console.log("yRandom:", yRandom);
    console.log("xRandom:", xRandom);
    allBubbles[i].style.top = yRandom + "px";
    allBubbles[i].style.left = xRandom + "px";

  }

  allBubbles[i].addEventListener('mouseover', function() {
    console.log("mouseover:allBubbles[i]", allBubbles[i]);
    let randomNumber = getRandomNumber();
    allBubbles[i].style.backgroundColor = "hsl(" +
      randomNumber +
      "," +
      sat + "," +
      lightness + ")";
    console.log("allBubbles.bc:", allBubbles[i].style.backgroundColor);
  });

  let randomNumber = getRandomNumber();
  allBubbles[i].style.backgroundColor = "hsl(" +
    randomNumber +
    "," +
    sat + "," +
    lightness + ")";
  let randomSize = Math.floor(Math.random() * 70);
  allBubbles[i].style.width = randomSize + "px";
  allBubbles[i].style.height = randomSize + "px";
}









function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 360);
  return randomNumber;
}