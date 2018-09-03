"use strict";



function concatNPad(img, n) {
  if (n < 10) {
    n = "0" + n;
  }
  let result = img.replace("#", n);

  return result;
}

console.log(concatNPad("image#.jpg", 3));

console.log(concatNPad("image#.jpg", 12));

console.log(concatNPad("image#.jpg", 123));

console.log(concatNPad("#_chapter.txt", 1));

console.log(concatNPad("#_chapter.txt", 10));

console.log(concatNPad("myfile_backup.#", 39));

console.log(concatNPad("myfile_backup.#", 2018));