let divs = document.querySelectorAll("div");
let btn = document.querySelector("button");
let sat = "70%";
let lightness = "70%";

function generateColors() {
  for (let i = 0; i < divs.length; i++) {

    divs[i].style.backgroundColor = "hsl(" +
      Math.floor(Math.random() * 360) +
      "," +
      sat + "," +
      lightness + ")";
  }

}

btn.addEventListener('click', function() {
  generateColors();
});