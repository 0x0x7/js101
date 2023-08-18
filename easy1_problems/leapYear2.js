/*
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752,
which was a leap year. Prior to 1752, they used the Julian Calendar.
Under the Julian Calendar, leap years occur in any year that is evenly
divisible by 4.

Using this information, update the function from the previous exercise
to determine leap years both before and after 1752.
*/

function leapYear(check) {
  return (check % 4 === 0) || (check % 100 !== 0 && check % 400 === 0);
}

console.log(leapYear(2019)); // false
console.log(leapYear(2020)); // true
console.log(leapYear(2021)); // false
console.log(leapYear(2022)); // false
