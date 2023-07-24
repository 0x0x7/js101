// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt("Welcome to the calculator");
let readline = require('readline-sync');

prompt("enter the first number");
let firstNum = readline.question();

prompt("enter the second number");
let secondNum = readline.question();

prompt("what operation would you perform? select a number:\n1) add 2) multiply 3) subtract 4) divide");
let operation = readline.question();

let result;
if (operation === '1') {
  result = Number(firstNum) + Number(secondNum);
} else if (operation === '2') {
  result = Number(firstNum) * Number(secondNum);
} else if (operation === '3') {
  result = Number(firstNum) - Number(secondNum);
} else {
  result = Number(firstNum) / Number(secondNum);
}
prompt(`the result is ${result}`);
