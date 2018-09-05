const animals = ["dog", "cat", "horse", "cat", "mouse", "dog", "cat", "cat", "dog"];
// const catsAt = findAll(animals, "cat");
// console.log(catsAt)



function findAll(arr, val) {
  var newArray = [],
    i;
  for (i = 0; i < arr.length; i++)
    if (arr[i] === val)
      newArray.push(i);
  return newArray;
}

let cats = findAll(animals, "cat");

console.log(cats);