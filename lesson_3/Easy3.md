*Question 1*
Write three different ways to remove all of the elements from the following array:

```js
let numbers = [1, 2, 3, 4];
```

Solution:

1. Using the `.length` property:
numbers.length = 0; // This will reduce the array length to zero hence deleting all elements.

2. Using the `splice(`) method with `.length` property:

```js
numbers.splice(0, numbers.length);
```

This will start at index 0, and iterate the whole length of the array.

3. Using `While` loop, and `pop()` method with `.length` property:

```js
while (numbers.length > 0) {
  numbers.pop(); // Keep removing the elements until length is > 0
}
```

*Question 2*
What will the following code output?

```js
console.log([1, 2, 3] + [4, 5]);
```

Solution:
The code above will output [1, 2, 34, 5] because the + operator coerces the arrays into a string before concatenating it.
