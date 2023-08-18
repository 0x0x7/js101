function leapYear(check) {
  return (check % 4 === 0) || (check % 100 !== 0 && check % 400 === 0);
}

console.log(leapYear(2019)); // false
console.log(leapYear(2020)); // true
console.log(leapYear(2021)); // false
console.log(leapYear(2022)); // false
