"use strict";

let tinder = document.querySelector("#tinder");
let endpoint = "males.json";
let males = [];
let currentPosition = 0;
let noBtn = document.querySelector("#next");
let yesBtn = document.querySelector("#yes");
let match = document.querySelector(".match");

function saveData(data) {
  males = data.results;
  displayMale();
}


function fetchData() {
  fetch(endpoint)
    .then(e => e.json())
    .then(saveData)
    .catch(error => {
      console.log("fetch: error: ", error);
    });
}


function displayMale() {
  if (males[currentPosition]) {

    document.querySelector("#name").textContent = males[currentPosition].name.first + " " + males[currentPosition].name.last;
    document.querySelector("#location").textContent = males[currentPosition].location.city;
    document.querySelector("img").setAttribute("src", males[currentPosition].picture.medium);
    document.querySelector("#age").textContent = males[currentPosition].dob.age;

  } else {
    currentPosition = 0;
    displayMale();
  }



}

noBtn.addEventListener('click', moveToNext);

function moveToNext() {
  currentPosition++;
  displayMale();
}

yesBtn.addEventListener('click', sayYes);

function sayYes() {
  if (males[currentPosition].inToYou == true) {
    match.classList.remove("hidden");
    setTimeout(() => {
      match.classList.add("hidden");
      moveToNext();
    }, 2000);
  } else {
    moveToNext();
  }
}



fetchData();