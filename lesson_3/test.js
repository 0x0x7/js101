const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num, index, arr) => {
  console.log(`Value: ${num}, Index: ${index}, Array: ${arr}`);
  return num * 2;
});
// Logs value, index, and the whole array for each element
