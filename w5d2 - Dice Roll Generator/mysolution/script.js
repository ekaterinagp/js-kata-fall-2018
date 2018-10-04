"use strict";

const rollHandler = {
  totalRolls: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
};

const firstHorse = document.getElementById("first");
const secondHorse = document.getElementById("second");
const thirdHorse = document.getElementById("third");
const fourthHorse = document.getElementById("fourth");
const fifthHorse = document.getElementById("fifth");
const sixthHorse = document.getElementById("sixth");
const startBtn = document.querySelector(".startBtn");
const winner = document.querySelector(".winner");
// winner.innerHTML = "And the winner is..." + " ";
const firework = document.querySelector(".fire");
let myInterval;

startBtn.addEventListener("click", function() {
  myInterval = setInterval(makeRoll, 1000);
});

function makeRoll() {
  let roll = Math.floor(Math.random() * (7 - 1)) + 1;
  console.log("roll:", roll);
  rollHandler[roll]++;
  rollHandler.totalRolls++;
  console.log("rollHandler:", rollHandler);

  firstHorse.style.left = moveHorse(1);
  secondHorse.style.left = moveHorse(2);
  thirdHorse.style.left = moveHorse(3);
  fourthHorse.style.left = moveHorse(4);
  fifthHorse.style.left = moveHorse(5);
  sixthHorse.style.left = moveHorse(6);

  // if(moveHourse(n))
}

function moveHorse(horseNumber) {
  let newNumber = rollHandler[horseNumber] * 110;
  if (newNumber >= 900) {
    clearInterval(myInterval);
    // firework.classList.remove("hidden");
    winner.innerHTML =
      "And the winner is...\nThe horse number " + horseNumber + "!";
    winner.classList.remove("hidden");
    return;
  }
  return newNumber + "px";
}
