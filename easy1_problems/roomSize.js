/*
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

let readLineSync = require('readline-sync');

const SQFT = 10.7639;

let length = readLineSync.question("What's the length of your room in meters: ");
let width = readLineSync.question("What's the width of your room in meters: ");

let areaSqm = length * width;
let areaSqft = areaSqm * SQFT;

console.log(`Your room is ${areaSqm.toFixed(2)} square meters, or (${areaSqft.toFixed(2)} square feet).`);
