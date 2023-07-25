// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(msg, lang = 'en') {
  return MESSAGES[lang][msg];
}

prompt(messages('welcome'), LANGUAGE);
let readline = require('readline-sync');

while (true) {
  prompt(messages('firstNum'), LANGUAGE);
  let firstNum = readline.question();

  while (invalidNumber(firstNum)) {
    prompt(messages('validNum'), LANGUAGE);
    firstNum = readline.question();
  }

  prompt(messages('secondNum'), LANGUAGE);
  let secondNum = readline.question();

  while (invalidNumber(secondNum)) {
    prompt(messages('validNum'), LANGUAGE);
    secondNum = readline.question();
  }

  prompt(messages('operation'), LANGUAGE);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('choice'), LANGUAGE);
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
  prompt(messages('result'), LANGUAGE);
  prompt(messages('newCalculation'), LANGUAGE);
  let answer = readline.question();

  if (answer !== 'y') break;
}
