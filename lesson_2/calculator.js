// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

console.log("Welcome to GHAATOL calculator");
let readline = require('readline-sync');
console.log("enter the first number");
let firstNum = readline.question();
console.log("enter the second number");
let secondNum = readline.question();
console.log("what operation would you perform? select a number:\n1) add 2) multiply 3) subtract 4) divide");
let result;
let input = readline.question();
if (input === '1') {
  result = Number(firstNum) + Number(secondNum);
} else if (input === '2') {
  result = Number(firstNum) * Number(secondNum);
} else if (input === '3') {
  result = Number(firstNum) - Number(secondNum);
} else {
  result = Number(firstNum) / Number(secondNum);
}
console.log(`the result is ${result}`);
