// Using a for loop:
const array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Using the forEach method:
const array = [1, 2, 3];

array.forEach(function (element) {
  console.log(element);
});

// Using the for...of loop:
const array = [1, 2, 3];

for (let element of array) {
  console.log(element);
}

// Using the map method:
const array = [1, 2, 3];

const newArray = array.map(function (element) {
  return element * 2;
});

console.log(newArray);
