let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((total, currentValue) => total + currentValue, 0);
let average = sum / arr.length;

console.log(sum); // Output: 15
console.log(average); // Output: 3
