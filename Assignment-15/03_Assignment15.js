function secondDerivative(b, m) {
  const f = (x) => Math.pow(x, b) + x * Math.exp(b * m);
  const h = 0.0001; // step size
  const df = (x) => (f(x + h) - f(x - h)) / (2 * h); // first derivative
  const d2f = (x) => (df(x + h) - df(x - h)) / (2 * h); // second derivative
  return d2f(m);
}
console.log(secondDerivative(2, 3)); // output: 4.294998859444316
