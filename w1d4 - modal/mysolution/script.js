"use strict";

let btnDetails = document.querySelectorAll(".details");
let modal = document.querySelector("#modal_container");
let closeBtn = document.querySelector("span");


btnDetails.forEach(function(e) {
  e.addEventListener("click", function() {
    modal.classList.remove("hidden")
  });

  closeBtn.addEventListener("click", function() {
    modal.classList.add("hidden")
  });
})



// function showModal() {
//   console.log("Show modal");


// }


// function hideModal() {
//   console.log("Hide modal");
// }