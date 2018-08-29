"use strict"

let webAlert = document.querySelector("div");
let btnHide = document.querySelector("button");

function showAlert() {
  webAlert.classList.add("slide");
}
// ES5
setTimeout(function() {
  showAlert();
});
// ES6
// setTimeout(() => {
//   showAlert();no need for number? (something to do with loading?)
// });



btnHide.addEventListener("click", function() {
  webAlert.classList.remove("slide")
});