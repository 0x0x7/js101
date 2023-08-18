// let localVar = () => {
//   let localVariable = 10;

//   if (localVariable === 11) {
//     localVariable - 1;
//   }
//   return localVariable;
// }

// localVar();

// localVariable = 0;
// console.log(localVariable);

let array = [];
function updateScore(score) {
  for (let i = 1; i <= 100; i++) {
    score.push(i);
  }
  return score;
}

let outcome = updateScore(array);
console.log(outcome);
