*Question 1*
Will the below code raise an error?

```js
let numbers = [1, 2, 3];
numbers[6] = 5;
```

*Answer 1*
The code above will not raise an error. This behaviour in JavaScript arrays
is called 'sparse arrays' where the value is assigned to an index larger
than the current length of the array. All indexes in between will output
'undefined'but will be empty without holding any value.

Bonus Question:
What will this line return?

```js
numbers[4];
```

Answer:
This will return `'undefined'` since index 4 is between 3 and 6 therefore empty.

*Question 2*
How can you determine whether a given string ends with an exclamation mark (!)?

```js
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc? It's undefined"; // false
```

*Answer 2*
This one is pretty self explanatory. endsWith() method will help us check whether a string ends with a ! or not:

```js
console.log(str1.endsWith("!")); // true
console.log(str2.endsWith(undefined)); // false
```

*Question 3*
Determine whether the following object of people and their age
contains an entry for 'Spot'.

```js
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
```

*Answer 3*
We use Object.hasOwnProperty() method to find out whether 'Spot' is a property of the ages object or not.

```js
console.log(ages.hasOwnProperty("Spot")); // false
```

Using the following string, create a new string that contains all lowercase
letters except for the first character, which should be capitalized.

```js
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
```

We can use method chaining to first retrieve the first character of the string
using charAt() and make it uppercase using toUpperCase(). We use the + operator
to concatenate the first character with the rest of the string where substring(1) gives us the rest of the characters starting from index 1 to the end turned to lower case using toLowerCase():

```js
let munstersDescription = "the Munsters are CREEPY and Spooky.";
let x =
  munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(x); // The munsters are creepy and spooky.
```

*Questions 5*
What will the following code output?

```js
console.log(false == '0');
console.log(false === '0');
```

*Answer 5*
The non strict equality operator (==) coerces the values to the same time before
comparing them. The strict equality operator (===) evaluates as true when the two expressions on either side have the same type and value.

```js
console.log(false == '0'); // true
console.log(false === '0'); // false
```

*Question 6*
We have most of the Munster family in our ages object:

```js
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
```

Add entries for Marilyn and Spot to the object:

```js
let additionalAges = { Marilyn: 22, Spot: 237 };
```

*Answer 6*
We can use Object.assign() method to copy additionalAges object properties to ages object:

```js
console.log(Object.assign(ages, additionalAges));
{ Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10, Marilyn: 22, Spot: 237 }
```

*Question 7*
Determine whether the name Dino appears in the strings below -- check each string separately:

```js
let str1 = "Few things in life are as important as house training your
  pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
```

*Answer 7*
We can use includes() method to check whether a substring exist in the string or not.

This method return true or false based on the search result:

```js
console.log(str1.includes('Dino')) // false
console.log(str2.includes('Dino')) // true
```

*Question 8*
How can we add the family pet, "Dino", to the following array?

```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
```

To add additional elements to an array, we use push() method:

```js
flintstones.push("Dino"); // ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles", "Dino"]
```

*Answer 8*
The push() method will mutate the array in place, and return the mutated array.

Another alternative is the concat() method:

```js
flintstones.concat("Dino"); // ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles", "Dino"]
```

The concat() method doesn't mutate the original array, and return a copy of the updated array.

*Question 9*
In the previous problem, our first answer added 'Dino' to the array like this:

```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
```

How can we add multiple items to our array? ('Dino' and 'Hoppy').

*Answer 9*
We use the push method to add one or more elements to the end of the array:

```js
flintstones.push("Dino", "Hoppy");
```

*Question 10*
Return a new version of this sentence that ends just before the word house.

Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

```js
let advice = "Few things in life are as important as house training your pet dinosaur.";
```

Expected return value:
'Few things in life are as important as '

*Answer 10*
We use indexOf() to find the index for the substring 'house' and then use slice() to extract our desired portion of the string based on that index:

```js
console.log(advice.slice(0, advice.indexOf("house")));
```

Return value: 'Few things in life are as important as '
