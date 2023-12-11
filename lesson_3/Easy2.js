/* Question 1: Given a string, return a new string that replaces every
 ** occurrence of the word "important" with "urgent":
 */

let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// Solution:
advice.replace("important", "urgent");

/* Question 2:
The Array.prototype.reverse method reverses the order of elements in an array,
and Array.prototype.sort can rearrange the elements in a variety of ways,
including descending. Both of these methods mutate the original array as
shown below. Write two distinct ways of reversing the array without
mutating the original array. Use reverse for the first solution,
and sort for the second.
*/

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Solution:

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice().reverse()); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

// Using the spread syntax to sort the array in descending order:

let numbers = [1, 2, 3, 4, 5];
console.log([...numbers].sort((num1, num2) => num2 - num1); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

// Question 3: Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

// Solution:

console.log(numbers.includes(8)); // false
console.log(numbers.includes(4)); // true

// Question 4: Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

// Solution:

console.log(famousWords + "Four score and "); // 'seven years ago...Four score and '
console.log(famousWords.concat("Four score and ")); // 'seven years ago...Four score and '
