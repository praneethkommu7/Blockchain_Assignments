// 1. Can we put duplicate values in the set object ?

// ans: set allows only unique values to be stored it does not allows duplicate elements


// 2. Write the syntax for
// a) Creating new set object
// b) Adding new element to set object
// c) Deleting element from set object

const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);

letters.delete("c");

console.log(letters);

// 3. Create a set object with four random numbers from 0 to 10. Check if this
// newly created set object has 8 in it. Use set object methods.

const set1 = new Set();
set1.add(3);
set1.add(5);
set1.add(8);
set1.add(6);
console.log(set1);

console.log(set1.has(8));