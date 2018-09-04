"use strict";

function displayElement(element) {
  console.log(element.textContent);

}

function listMethods(id) {
  console.log(id);
  let section = document.getElementById(id);
  //option: const elements=section.querySelectorAll("ul>li");
  let elements = section.getElementsByTagName("UL")[0].getElementsByTagName("LI");
  console.log(elements);
  let arEl = Array.prototype.slice.call(elements);

  //   FOREACH LOOP

  //   arEl.forEach(element => {
  //     displayElement(element);
  //   });


  //FOR LOOP

  for (let i = 0; i < arEl.length; i++) {
    const element = arEl[i];
    displayElement(element);
  }
}




listMethods("modify");
listMethods("info");
listMethods("newarray");

// TODO: Create listMethods function