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
