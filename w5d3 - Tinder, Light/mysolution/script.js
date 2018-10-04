"use strict";

let tinder = document.querySelector("#tinder");
let endpoint = "males.json";
let males = [];
let currentPosition = 0;
let noBtn = document.querySelector("#next");
let yesBtn = document.querySelector("#yes");
let match = document.querySelector(".match");
let button = document.querySelectorAll("button");

yesBtn.addEventListener("click", function() {
  let duration = 0.3,
    delay = 0.08;
  TweenMax.to(yesBtn, duration, {
    scaleY: 1.6,
    ease: Expo.easeOut
  });

  TweenMax.to(yesBtn, duration, {
    scaleX: 1.2,
    scaleY: 1,
    ease: Back.easeOut,
    easeParams: [3],
    delay: delay
  });
  TweenMax.to(yesBtn, duration * 1.25, {
    scaleX: 1,
    scaleY: 1,
    ease: Back.easeOut,
    easeParams: [6],
    delay: delay * 3
  });
});

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
    document.querySelector("#name").textContent =
      males[currentPosition].name.first +
      " " +
      males[currentPosition].name.last;
    document.querySelector("#location").textContent =
      "Location:" +
      " " +
      males[currentPosition].location.city +
      " " +
      males[currentPosition].location.state +
      " " +
      males[currentPosition].location.postcode;

    document
      .querySelector("#image")
      .setAttribute("src", males[currentPosition].picture.medium);
    document.querySelector("#age").textContent =
      "Age" + " " + males[currentPosition].dob.age + " " + "y.o.";
  } else {
    currentPosition = 0;
    displayMale();
  }
}

noBtn.addEventListener("click", moveToNext);

function moveToNext() {
  currentPosition++;
  displayMale();
}

yesBtn.addEventListener("click", sayYes);

function sayYes() {
  if (males[currentPosition].inToYou == true) {
    match.classList.remove("hidden");

    TweenMax.to(match, 0.5, {
      scale: 2,
      repeat: -1,
      yoyo: true
    });

    setTimeout(() => {
      match.classList.add("hidden");
      moveToNext();
    }, 3000);
  } else {
    moveToNext();
  }
}

fetchData();
