function findMatchingElement(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return array1[i];
      }
    }
  }
  return null;
}

const array1 = ["a", "b", "c", "d"];
const array2 = ["e", "f", "g", "h", "a", "i", "j"];

console.log(findMatchingElement(array1, array2)); // "a"
