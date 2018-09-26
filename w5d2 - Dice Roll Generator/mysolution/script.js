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

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const total = document.getElementById("total");



setInterval(makeRoll, 1000);

function makeRoll() {

  let roll = Math.floor(Math.random() * (7 - 1)) + 1;
  console.log("roll:", roll);
  rollHandler[roll]++;
  rollHandler.totalRolls++;
  console.log("rollHandler:", rollHandler);
  one.innerHTML = rollHandler[1];
  two.innerHTML = rollHandler[2];
  three.innerHTML = rollHandler[3];
  four.innerHTML = rollHandler[4];
  five.innerHTML = rollHandler[5];
  six.innerHTML = rollHandler[6];
  total.innerHTML = rollHandler.totalRolls;


}