// Take user input for the array
let arr = prompt("Enter an array of numbers separated by commas:")
  .split(",")
  .map(Number);

// Use the map() method to square each element of the array
let squareArr = arr.map((num) => num * num);

// Use the map() method again to create a new array with the squared elements
let mapping = squareArr.map((num) => num);

// Display the squared array using console.log()
console.log(mapping);
