"use strict";

let allTweets = document.querySelector("#allTweets");

let template = document.querySelector("#singleTweet").content;

let fetchButton = document.querySelector("button");

let input = document.querySelector("#input");


function fetchTweets() {
  console.log("fetched called");
  let endpoint = "https://kea-alt-del.dk/twitter/api/?count=50";
  let input = document.querySelector("#input").value;
  if (input) {
    endpoint = "https://kea-alt-del.dk/twitter/api/?count=50&hashtag=" + input;
  }
  fetch(endpoint)
    .then(e => e.json())
    .then(showTweets)
    .catch(error => {
      console.log("fetch: error: ", error);
    })

}

fetchButton.addEventListener('click', function() {
  clearBox();
  fetchTweets()
});
console.log("button pressed");

function clearBox(allTweets) {
  document.querySelector("#allTweets").innerHTML = "";
}

fetchTweets();

function showTweets(response) {
  console.log(response);
  response.statuses.forEach(showSingleTweet);

}

function showSingleTweet(tweet) {
  console.log("show single tweet is called. tweet: ",
    tweet);
  let clone = template.cloneNode(true);
  clone.querySelector("#userName").textContent = tweet.user.name;
  clone.querySelector("#location").textContent = tweet.user.location;
  clone.querySelector("#textTweet").textContent = tweet.text;
  allTweets.appendChild(clone);
}