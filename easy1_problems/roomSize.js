/*
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

// Import readline-sync library
let readLineSync = require('readline-sync');

const SQFT = 10.7639;

// Require length:
let length = readLineSync.question("What's the length of your room in meters: ");

// Require width:
let width = readLineSync.question("What's the width of your room in meters: ");

// Do calculation
let sqm = length * width;
let sqft = sqm * SQFT;

// Log it
console.log(`Your room is ${sqm.toFixed(2)} square meters, or (${sqft.toFixed(2)} square feet).`);
