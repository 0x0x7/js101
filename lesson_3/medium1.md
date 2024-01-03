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
