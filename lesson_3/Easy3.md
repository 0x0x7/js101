*Question 1*
Write three different ways to remove all of the elements from the following array:

```js
let numbers = [1, 2, 3, 4];
```

*Answer 1*
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

*Answer 2*
The code above will output [1, 2, 34, 5] because the + operator coerces the arrays into a string before concatenating it.

*Question 3*
What will the following code output?

```js
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
```

*Answer 3*
The variable `str2` gets a copy of `str1`'s value "hello there", and gets a new value -"goodbye!" - in the following line. Since primitive values are passed as copies so `str2`'s reassignment will not mutate `str1`'s value therefore we'll get "hello there" logged at last.

*Question 4*
What will the following code output?

```js
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
```

*Answer 4*
Objects are passed by reference even if we use the slice() method to create a copy of it. The copy is still referencing to the original value therefore any mutational operation will change the original object so does `arr2[0].first = 42`. What we will get as an output is a mutated arr1 array:

[{ first: 42 }, { second: "value2" }, 3, 4, 5]]

*Question 5*
The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

```js
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
```

Try to come up with at least two different solutions.

*Answer 5*
1. Returning the condition itself:

```js
function isColorValid(color) {
    return color === "blue" || color === "green
  }
}
```

2. Using arrow functions
```js
let isColorValid = (color) => color === "blue" || color === "green"
```

3. Using includes() array method with arrow function:
```js
let isColorValid = (color) => ["blue", "green"].includes(color);
```

*Question 6*
Examine the following code carefully. Can you identify all of the variables, primitive values, and objects that exist when this code executes?

```js
let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);
```

*Answer 6*
In the code snippet above, we have 9 primitive values, 2 objects, and 6 variables.

Primitives: 1, 2, 3 as part of the arr array elements. 0, and 1 as part of the num variable. 1 in newNum variable, and 2 in the return statement. 1 in the newNum argument, and 2 as a result of the num * 2 expression.

Variables: arr, newArr, num, newNum, double, and num as the parameter.

Objects: arr array, and double function.
