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
