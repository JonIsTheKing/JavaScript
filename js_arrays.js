// includes
// indexOf
// lastIndexOf
// toString
// join

// concat
// slice

// concat method joins one or more arrays
// adds an element to the array as well
// does not modify the array
// returns a new array
const odds = [1, 3, 9];
const evens = [2, 4, 6];
const numbers = odds.concat(evens, 96);
console.log(numbers);  // [1, 3, 9, 2, 4, 6, 96]


// includes checks if an element is present or not
// returns true if found, else false
// 2nd parameter - optional, start position, default is 0
const nums = [1, 2, 3, 4];
let isOnePresent = nums.includes(1);
console.log(isOnePresent);  // true
const isFivePresent = nums.includes(5);
console.log(isFivePresent); // false
isOnePresent = nums.includes(1, 1);
console.log(isOnePresent);  // false, since array search starts from index 1


// indexOf method returns the index of specified element
// 2nd optional parameter, start position, default is 0
// returns the first found position, if there are duplicates
// returns -1 if not found
const fruits = ['apple', 'banana', 'grapes'];
let appleIndex = fruits.indexOf('apple');
console.log(appleIndex);  // 0, since index of apple is zero
const kiwiIndex = fruits.indexOf('kiwi');
console.log(kiwiIndex);   // -1, since there is no kiwi
appleIndex = fruits.indexOf('apple', 1);
console.log(appleIndex);  // -1, since there is no apple from index 1


// lastIndexOf method returns the index of specified element from last position
// 2nd optional parameter, start position, default is last to first
// returns the first found position, if there are duplicates
// returns -1 if not found
const fruits = ['apple', 'banana', 'grapes', 'apple'];
let appleIndex = fruits.lastIndexOf('apple');
console.log(appleIndex);  // 3, since index of apple from last position is 3
const kiwiIndex = fruits.lastIndexOf('kiwi');
console.log(kiwiIndex);   // -1, since there is no kiwi
appleIndex = fruits.lastIndexOf('apple', 2);
console.log(appleIndex);  // 0, since there is apple at index 0 from position 2 to 0

// toString method returns the array as string
// separator is ,
// does not modify the original array
// returns a string
const names = ['John', 'Smith'];
let fullName = names.toString();
console.log(fullName); // John,Smith


// join method returns the array as string
// optional parameter is separator, default is ,
// does not modify the original array
// returns a string
const names = ['John', 'Smith'];
let fullName = names.join();
console.log(fullName); // John,Smith
fullName = names.join('-');
console.log(fullName); // John-Smith


// slice method returns a sub array from start to end-1
// two optional parameters
// 1st optional parameter - start, default is 0
// 2nd optional parameter - end, default is length of array-1
// returns a new array
const squares = [1, 4, 9, 16, 25];
let slicedArray = squares.slice(1);
console.log(slicedArray);  // [4, 9, 16, 25]
slicedArray = squares.slice(1, 3);
console.log(slicedArray);  // [4, 9], since excluding index 3
