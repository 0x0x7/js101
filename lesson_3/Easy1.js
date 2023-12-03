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

/*
** Using the following string, create a new string that contains all lowercase
** letters except for the first character, which should be capitalized.
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

/*
** We can use method chaining to first retrieve the first character of the string
** using charAt() and make it uppercase using toUpperCase(). We use the + operator
** to concatenate the first character with the rest of the string where substring(1)
** gives us the rest of the characters starting from index 1 to the end turned to
** lower case using toLowerCase():
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
let x = munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(x); // The munsters are creepy and spooky.

/* Questions 5:
** What will the following code output?
*/
```js
console.log(false == '0');
console.log(false === '0');
```

/* The non strict equality operator (==) coerces the values to the same time before
** comparing them. The strict equality operator (===) evaluates as true when the two
** expressions on either side have the same type and value.
*/

```js
console.log(false == '0'); // true
console.log(false === '0'); // false
```

// Question 6:
// We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

// We can use Object.assign() method to copy additionalAges object properties to ages object:

console.log(Object.assign(ages, additionalAges));
