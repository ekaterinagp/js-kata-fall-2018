"use strict";

let reviews = document.querySelectorAll("LI");

console.log(reviews);

for (let i = 0; i < reviews.length; i++) {
  // console.log(reviews[i]);
  let rate = reviews[i].querySelector("span").textContent;
  // console.log(rate);
  removeBadReview(reviews[i], rate);
}

function removeBadReview(review, rate) {
  if (rate < 6) {
    console.log(review);
    review.remove();
  }
}
