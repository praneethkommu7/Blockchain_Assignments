// 1. Are Higher Order functions and Call back functions the same ? If not,
// briefly explain about both functions.

// ans: higher order functions and call back functions are not same. Higher order functions and callback functions are different. Higher order functions is a function that takes another function as an argument and can also return a function as a value. where callback functions a function that is passed to another function.

// 2. Is filter a Higher Order function in Javascript ? If yes, why ?

// ans: filter is a inbuilt higher order funtion in javascript as it can take a function as input ans can also return a function. array methods as map, filter and reduce are inbuilt higher order funtions of javascript.

// 3. Give an example of a Higher Order function and a call back function
// used in the same program.

function calculate(operation, numbers) {
    let total = 1
  for (const number of numbers) {
    total = operation(total, number);
  }
  return operation == sum ? total - 1 : total;
}
function sum(n1, n2) {
  return n1 + n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
console.log(calculate(sum, [1, 2, 4, 8])); 
console.log(calculate(multiply, [1, 2, 4, 8]));

// 4. Carefully check the example below:
// a) What will be the output of this program ?
// b) Which function is a Higher Order function here ?

const names= ['John', 'Tina','Kale','Max']
function useFunction(arr,fn){
    for(let i=0; i<arr.length; i++){
    fn(arr[I]);
    }
}
function argFn (name){
    console.log("Hello " + name );
}

useFunction(names,argFn);

// a: ans. output of this program gives an error as the 'I' is not declared in the program 
// b: ans. useFunction is a higher order funtion as it is taking a function argFn as arguement