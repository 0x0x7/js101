*Question 1*
Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

```js
let advice =
  "Few things in life are as important as house training your pet dinosaur.";
```

*Answer*
advice.replace("important", "urgent");

*Question 2*
The Array.prototype.reverse method reverses the order of elements in an array,
and Array.prototype.sort can rearrange the elements in a variety of ways,
including descending. Both of these methods mutate the original array as
shown below. Write two distinct ways of reversing the array without
mutating the original array. Use reverse for the first solution,
and sort for the second.

```js
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
```

*Answer*
```js
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice().reverse()); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]
```

Using the spread syntax to sort the array in descending order:

```js
let numbers = [1, 2, 3, 4, 5];
console.log([...numbers].sort((num1, num2) => num2 - num1); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]
```

*Question 3*
Given a number and an array, determine whether the number is included in the array.

```js
let nums = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true
```

*Answer 3*

```js
console.log(nums.includes(8)); // false
console.log(nums.includes(4)); // true
```
*Question 4*
Starting with the string:

```js
let famousWords = "seven years ago...";
```

Show two different ways to put the expected "Four score and " in front of it.

*Answer 4*
```js
console.log(famousWords + "Four score and "); // 'seven years ago...Four score and '
console.log(famousWords.concat("Four score and ")); // 'seven years ago...Four score and '
```

*Question 5*
Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

*Answer*
```js
let x = [1, 2, 3, 4, 5];
x.splice(2, 1);
console.log(x); // [1, 2, 4, 5]
```

*Question 6*
Suppose we build an array like this:

```js
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
```

This code will create a nested array that looks like this:

```js
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
```

Nesting data structures like we do here is commonplace in JavaScript and programming in general. We'll explore this in much greater depth in a future Lesson.

Create a new array that contains all of the above values, but in an un-nested format:

```js
['Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles']
```

*Answer*
1. We can use concat() with the spread operator to flatten an array that's only one level nested:

```js
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let flattenedArray = [].concat(...flintoses);
console.log(flattenedArray);

[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
```

2. Using the forEach() method:

3. Using the flat() method:

*Question 7*
Consider the following object:
```js
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
```

Create an array from this object that contains only two elements: Barney's name and Barney's number:

['Barney', 2]

*Answer 7*
```js
Object.entries(flintstones).filter(check => check[0] === 'Barney').shift();
```

*Question 8*
How would you check whether the objects assigned to variables numbers and table below are arrays?

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

*Answer 8*
```js
console.log(isArray(numbers)); // true
console.log(isArray(table)); // false
```

*Question 9*
Back in the stone age (before CSS), we used spaces to align things on the screen.

If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

```js
let title = "Flintstone Family Members";
```

*Answer 9*
First we determine the spaces by substracting length of the string from the given width:

```js
let padding = Math.floor((40 - title.length) / 2);
```

Then we use padStart():

```js
title.padStart(padding + title.length);
```

*Question 10*
Write a one-line expression to count the number of lower-case t characters in each of the following strings:

```js
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
```

*Answer 10*
```js
statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;
```
