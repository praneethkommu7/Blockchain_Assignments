function rightShift(num, shift) {
  // Base case: shift is zero
  if (shift === 0) {
    return num;
  }

  // Recursive case: shift is greater than zero
  return rightShift(num / 2, shift - 1);
}
console.log(rightShift(16, 2)); // Output: 4
console.log(rightShift(32, 3)); // Output: 4
console.log(rightShift(128, 4)); // Output: 8
