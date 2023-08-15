// Log all odd numbers from 1 to 99, inclusive, to the console,
// with each number on a separate line.

// Using a for loop
function defOdd(intt) {
  return intt % 2 === 1;
}

for (let i = 1; i < 99; i++) {
  if (defOdd(i)) {
    console.log(i);
  }
}

// Using the while loop
function isOdd(int) {
  return int % 2 === 1;
}

let number = 1;

while (number <= 99) {
  if (isOdd(number)) {
    console.log(number)
  }
  number++;
}

// Using the forEach method
const numbers = [];
for (let i = 1; i < 99; i++) {
  numbers.push(i);
}

numbers.forEach(number => {
  if (number % 2 === 1) {
    console.log(number);
  }
})
