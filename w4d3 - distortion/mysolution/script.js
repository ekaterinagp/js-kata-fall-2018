"use strict";


let endpoint = "https://kea-alt-del.dk/kata-distortion/";
let template = document.querySelector("template").content;
let queue = document.querySelector("section");

function queueUpdate() {
  fetch(endpoint).then(e => e.json())
    .then(showQueue)
    .catch(error => {
      console.log("fetch: error: ", error);
    })

}
setInterval(function() {
  queueUpdate();
}, 11000);

function init() {
  window.addEventListener("DOMContentLoaded", queueUpdate(), false);
}

init();

function showQueue(peopleinQueue) {
  console.log("showQueue is called. people :", peopleinQueue);
  let clone = template.cloneNode(true);
  clone.querySelector(".barName").textContent = peopleinQueue.name;
  clone.querySelector(".inLine").textContent = peopleinQueue.inQueue;
  clone.querySelector(".loggedTime").textContent = peopleinQueue.loggedAt;
  queue.appendChild(clone);

}