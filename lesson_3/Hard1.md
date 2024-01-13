*Question 1*
Will the following functions return the same results?

```js
function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());
```

*Answer 1*
The two functions above `first()`, and `second()` do not return the same results due to the automatic semicolon insertion in JavaScript after the return statement in the `second()` function. The function will return `undefined` because it's not doing much after the `return` statement is closed by the engine.

*Question 2*
What does the last line in the following code output?

```js
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);
```

*Answer 2*
The last line `console.log(object);` in the code above will output the `first` property of the `object` object that contains an array of two elements: `{first: [1, 2]}` because we used the mutative `push()` method to add `2` to the end of the `numArray` which is holding a reference to the `object` object's value hence mutating the original value in place.

*Question 3*
Given the following similar sets of code, what will each code snippet print?

A)

```js
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

B)
```js
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

C)
```js
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

*Answer 3*
A) will output:
one is: ["one"]
two is: ["two"]
three is: ["three"]

That's because variable shadowing is in play, and only the global variables' values are in play.

B) will output:
one is: ["one"]
two is: ["two"]
three is: ["three"]

That's for the same reasons as A.

C) will output:
one is: ["two"]
two is: ["three"]
three is: ["one"]

That's because we are using the mutative `splice` method to remove initially provided values, and add new ones. The reasons this is mutation is reflecting in the original arrays is because of the pass by reference method JavaScript adopts for object values.

*Question 4*
Can you identify all of the variables, primitive values, and objects in the following code?

```js
function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);
```

*Answer 4*
Variables: boo, scare, myBoo (local var), halloweenCollection, and myBoo.
Objects: boo function, toUpperCase(), console, halloweenCollection
Primitive values: "111", object properties 6x, "greet" 2x, HAPPY HALLOWEEN!!! 2x, and undefined (function's return value).
