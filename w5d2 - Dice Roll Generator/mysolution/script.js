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



setInterval(makeRoll, 1000000);

function makeRoll() {

  let roll = Math.floor(Math.random() * (7 - 1)) + 1;
  console.log("roll:", roll);
  rollHandler[roll]++;
  rollHandler.totalRolls++;
  console.log("rollHandler:", rollHandler);

}