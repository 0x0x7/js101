// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to the calculator");
let readline = require('readline-sync');

prompt("enter the first number");
let firstNum = readline.question();

while (invalidNumber(firstNum)) {
  prompt("Please enter a valid number");
  firstNum = readline.question();
}

prompt("enter the second number");
let secondNum = readline.question();

while (invalidNumber(secondNum)) {
  prompt("Please enter a valid number");
  secondNum = readline.question();
}

prompt("what operation would you perform? select a number:\n1) add 2) multiply 3) subtract 4) divide");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Enter 1, 2, 3 or 4');
  operation = readline.question();
}

let result;
switch (operation) {
  case '1':
    result = Number(firstNum) + Number(secondNum);
    break;
  case '2':
    result = Number(firstNum) * Number(secondNum);
    break;
  case '3':
    result = Number(firstNum) - Number(secondNum);
    break;
  case '4':
    result = Number(firstNum) / Number(secondNum);
    break;
}
prompt(`the result is ${result}`);
