// Import readlinesync

const readLineSync = require('readline-sync');

let tipCal = () => {
  // Get user inputs
  let billAmount = parseFloat(readLineSync.question("Enter bill amount here: "));
  let tipAmount = parseFloat(readLineSync.question("How much do you want to tip? "));

  // Do calculation on user inputs
  let tipCalculation = billAmount * (tipAmount / 100);
  let totalBill = billAmount + tipCalculation;

  // Display calculation
  console.log(`You want to tip $${tipCalculation}`)
  console.log(`Your total bill therefore is $${totalBill}`);
}

tipCal();
