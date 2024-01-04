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

*Question 5*
What will the following two lines of code output?

```js
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
```

*Answer 5*
The lines above demonstrates precision issues inhereted in binary representation of decimals in JavaScript that can lead to unexpected results like `0.89...` and `false` in this example.

*Question 6*

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
