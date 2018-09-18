const mainDiv = document.querySelector("#mainDiv");
let sat = "70%";
let lightness = "70%";
let lastNumber;


function changeColor() {
  console.log("function changeColor called");
  let randomNumber = getRandomNumber();
  console.log("randomNumber: ", randomNumber, ". lastNumber :", lastNumber);
  if (randomNumber === lastNumber) {
    console.log("I am the same");
    changeColor();
    return;
  }
  lastNumber = randomNumber;
  mainDiv.style.backgroundColor = "hsl(" +
    randomNumber +
    "," +
    sat + "," +
    lightness + ")";
}

setInterval(function() {
  changeColor();
}, 2000);

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 360);
  return randomNumber;
}