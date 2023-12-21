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

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", ["Pebbles"]]);

let flattenedArray = [].concat(...flintstones);
console.log(flattenedArray);
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
