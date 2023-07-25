// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const MESSAGES = require('./calculator_messages.json');


function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);
let readline = require('readline-sync');

while (true) {
  prompt(MESSAGES['firstNum']);
  let firstNum = readline.question();

  while (invalidNumber(firstNum)) {
    prompt(MESSAGES['validNum']);
    firstNum = readline.question();
  }

  prompt(MESSAGES['secondNum']);
  let secondNum = readline.question();

  while (invalidNumber(secondNum)) {
    prompt(MESSAGES['validNum']);
    secondNum = readline.question();
  }

  prompt(MESSAGES['operation']);
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
  prompt(MESSAGES['newCalculation']);
  let answer = readline.question();

  if (answer !== 'y') break;
}
