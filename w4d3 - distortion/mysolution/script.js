"use strict";

let endpoint = "https://kea-alt-del.dk/kata-distortion/";
// let template = document.querySelector("template").content;
let queue = document.querySelector("svg");
const NS = "http://www.w3.org/2000/svg";
let lineArray = [];
let barName = document.querySelector(".barName");
let empName = document.querySelector(".employee");
let orderNow = document.querySelector(".orderNow");
let peopleNumberNow = document.querySelector(".peopleNumber");
let weBusy = document.querySelector(".weAreBusy");

function queueUpdate() {
  fetch(endpoint)
    .then(e => e.json())
    .then(showQueue)
    .catch(error => {
      console.log("fetch: error: ", error);
    });
}
setInterval(function() {
  queueUpdate();
}, 10000);

function init() {
  window.addEventListener("DOMContentLoaded", queueUpdate());
}

init();

function showQueue(peopleinQueue) {
  console.log("showQueue is called. people :", peopleinQueue);

  if (lineArray.length > 10) {
    queue.innerHTML = " ";
    lineArray = [];
  }

  barName.textContent = peopleinQueue.name;
  empName.textContent = peopleinQueue.personel;
  peopleNumberNow.textContent = peopleinQueue.inQueue;

  // let peopleNumber = Number(peopleinQueue.inQueue);
  // console.log("to number :", peopleNumber);
  lineArray.push(peopleinQueue);
  const rect = document.createElementNS(NS, "rect");

  if (lineArray.length <= 1) {
    rect.setAttribute("x", 0);
  } else {
    rect.setAttribute("x", (lineArray.length - 1) * 8);
  }
  rect.setAttribute("y", 100 - Number(peopleinQueue.inQueue));
  rect.setAttribute("width", 6);
  rect.setAttribute("height", Number(peopleinQueue.inQueue));
  rect.classList.add(".trans");
  if (peopleinQueue.inQueue < 11) {
    rect.style.fill = "green";
    orderNow.classList.add("show");
  } else {
    rect.style.fill = "red";
    orderNow.classList.remove("show");
  }
  if (peopleinQueue.inQueue > 18) {
    weBusy.classList.add("show");
  } else {
    weBusy.classList.remove("show");
  }
  // let clone = template.cloneNode(true);
  // clone.querySelector(".barName").textContent = peopleinQueue.name;
  // clone.querySelector(".inLine").textContent = peopleinQueue.inQueue;
  // clone.querySelector(".loggedTime").textContent = peopleinQueue.loggedAt;
  queue.appendChild(rect);
}
