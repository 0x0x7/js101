*Question 1*
Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   The Flintstones Rock!
    ...

*Answer 1*
We use the for loop to set a condition where if the count is less that or equal to 9, it must increment. Inside the body of the loop, we use the string method repeat() which takes an empty string to add a space and

```js
for (let count = 0; count <= 9; count++) {
  console.log(" ".repeat(count) + "The Flintstones Rock!");
}
```

*Question 2*
Starting with the string:

```js
let munstersDescription = "The Munsters are creepy and spooky.";
```

Return a new string that swaps the case of all of the letters:

```js
`tHE mUNSTERS ARE CREEPY AND SPOOKY.`;
```

*Answer 2*
First we use the `split("")` method with empty strings turn each character of the string to an array element to make it easy to iterate on. Then we use the `map()` method, and declare an inline function as part of the parameter with an `if else` block that checks if the character is lowercase, it should return uppercase, or if it's uppercase, it should return lowercase. Finally we use the `join("")` method with empty strings to return the string.

```js
const x = munstersDescription.split("").map(function(character) {
  if (character === character.toUpperCase) {
    return character.toLowerCase();
  } else {
    return character.toUpperCase();
  }
}).join("");

console.log(x);
```

*Question 4*
Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer `push()` or `concat()` for modifying the buffer?".

Is there a difference between these implementations, other than the method she used to add an element to the buffer? You may assume that newElement will always be a primitive value.

```js
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
```

*Answer 4*
The first implementation uses `push()` method which will mutate the argument / caller while the second uses `concat()` which will not mutate the caller, and that's the major difference between the two implementations.

*Question 5*
What will the following two lines of code output?

```js
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
```

*Answer 5*
The lines above demonstrates precision issues inhereted in binary representation of decimals in JavaScript that can lead to unexpected results like `0.89...` and `false` in this example.

*Question 6*
What do you think the following code will output?

```js
let nanArray = [NaN];

console.log(nanArray[0] === NaN);
```

Bonus:

How can you reliably test if a value is NaN?

*Answer 6*
The code above will outpute `false` because NaN is a special numeric value and you can't use, and it can't be compared using == or === operators. In order to test if a value is NaN, we can use `Number.isNaN()` method.

```js
console.log(isNaN(nanArray[0])); // true
```

*Question 7*
What is the output of the following code?

```js
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);
```

*Answer 7*
The code above will output 34. The last line logs the global `answer` variable which is also used as argument for the `messWithIt` function, but since the value is primitive, it's passed by value e.g. the function receives a copy of it, and the original value remains unmutated.

*Question 8*
One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:

```js
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
```

After writing this function, he typed the following code:

```js
messWithDemographics(munsters);
```

Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?

*Answer 8*
Yes, the munsters family data is mutated forever because Spot modfied the object's values (nested objects in this case) instead of reassigning it to a new object in the function scope. This is in place mutation and is reflected in the original object hence mutated family data.

*Question 9*
Function and method calls can take expressions as arguments. Suppose we define a function named rps as follows, which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players.

```js
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
```

What does the following code output?

```js
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
```

*Answer 9*
The code above outputs "paper".

*Question 10*
Consider these two simple functions:

```js
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
```

What will the following function invocation return?

```js
bar(foo());
```

*Answer 10*
The function invocation with first go to the `foo()` function, and return yes. It will then invoke the `bar()` function, and pass the return value `yes` of the `foo()` function to the `bar()` function as argument. `param` at this point is holding `yes` as it's value where the strict equality operator checks if `yes` is equal to `no` which is false, and therefore the ternary operator will return `no`.
