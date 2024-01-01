// let captains = ["Dhoni", "Rohit", "Shubman"];
// let captainsMeetup = " ";
// captains.forEach((names, index) => {
//   captainsMeetup += names;
//   if (index < captains.length - 1) {
//     captainsMeetup += ", ";
//   } else {
//     captainsMeetup += ".";
//   }
// });
// console.log("The captains are:", captainsMeetup);

let a = 1;
let b = 2;

function foo(a) {
  a = 3;
  b = 4;
  return a + b;
}

console.log(foo(b));
console.log(a);
console.log(b);
