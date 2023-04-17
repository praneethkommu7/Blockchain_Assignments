function changeEnough(change, totalDue) {
  const quarters = change[0];
  const dimes = change[1];
  const nickels = change[2];
  const pennies = change[3];

  const totalChange =
    quarters * 0.25 + dimes * 0.1 + nickels * 0.05 + pennies * 0.01;

  return totalChange >= totalDue;
}

// example usage
console.log(changeEnough([2, 100, 0, 0], 14.11)); // false
console.log(changeEnough([0, 0, 20, 5], 0.75)); // true
console.log(changeEnough([30, 40, 20, 5], 12.55)); // true
