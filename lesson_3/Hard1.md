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
