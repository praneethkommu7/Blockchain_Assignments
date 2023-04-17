
const arr = [1,2,3,4,5];

const evenArr = arr.filter(item => item % 2 == 0);

const oddArr = arr.filter(item => item % 2 != 0);

const eSum = evenArr.reduce((sum,val) => {
    return sum+=val;
})
console.log(eSum);

const oSum = oddArr.reduce((sum,val) => {
    return sum+=val;
})
console.log(oSum);

console.log('Difference : ' + (oSum-eSum));

console.log('Odd Elements : ' + oddArr.length);
console.log('Even Elements : ' + evenArr.length);

let avg = (eSum+oSum)/arr.length;
console.log('Average : ' + avg);

function gcd(a, b) {
  if (a == 0) return b;
  return gcd(b % a, a);
}

let GCD = gcd(eSum,oSum);
console.log('GCD : ' + GCD);