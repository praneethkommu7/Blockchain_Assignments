function triangle(n) {
  if (n < 1) return 0;
  let sum = 0;
  let dots = 1;
  for (let i = 1; i <= n; i++) {
    sum += dots;
    dots += i + 1;
  }
  return sum;
}
console.log(triangle(1)); // output: 1
console.log(triangle(6)); // output: 56
