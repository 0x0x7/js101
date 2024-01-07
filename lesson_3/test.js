const numbers = [1, 2, 3, 4, 5];
function modify(param) {
  param += [1];
  return param;
}

console.log(modify(numbers));
console.log(numbers);
