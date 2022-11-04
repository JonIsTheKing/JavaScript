// concat method joins one or more arrays
// adds an element to the array as well
// does not modify the array
// returns a new array
const odds = [1, 3, 9];
const evens = [2, 4, 6];
const numbers = odds.concat(evens, 96);
console.log(numbers);  // [1, 3, 9, 2, 4, 6, 96]

