/* Question 1:
** Will the below code raise an error?
*/

let numbers = [1, 2, 3];
numbers[6] = 5;

/*
** The code above will not raise an error. This behaviour in JavaScript arrays
** is called 'sparse arrays' where the value is assigned to an index larger
** than the current length of the array. All indexes in between will output
** 'undefined'but will be empty without holding any value.
*/

// Bonus: What will this line return?
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];

//This will return 'undefined' since index 4 is between 3 and 6 therefore empty.

/*
** Question 2:
** How can you determine whether a given string ends with an
** exclamation mark (!)?
*/

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc? It's undefined"; // false

/*
** This one is pretty self explanatory. endsWith() method will help us check
** whether a string ends with a ! or not:
*/

console.log(str1.endsWith("!")); // true
console.log(str2.endsWith(undefined)); // false

/* Question 3:
** Determine whether the following object of people and their age
** contains an entry for 'Spot'.
*/

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// We use Object.hasOwnProperty() method to find out whether 'Spot' is a
// property of the ages object or not.

console.log(ages.hasOwnProperty('Spot')); // false
