// 1. Carefully observe this example.
// a) Is the InnerFunction() a closure?
// b) What is output of this program

// function OuterFunction() {
//   var outerVariable = 100;
//   function InnerFunction() {
//     alert(outerVariable);
//   }
//   return InnerFunction;
// }
// var innerFunc = OuterFunction();
// innerFunc();

// ans: -> a : Yes the InnerFunction() is a closure. a closure is the combination of a function bundled together with references to its surroundings means its lexical environment
// ans: -> b : the output of this program in alert ==> 100


// 2. What is the difference between a closure and a scope ?
// ans: scope in javascript defines what variables we have access to.there are two kinds of scopes which are local scope and global scope. global scope variables have access everywhere whereas in local scope variables are accessible only within the function or space in which variables are declared.
// closure in javascript is a function within a function along with its lexical environment variables 

// 3. What is a lexical scope and how is it related to closure?
// ans: lexical scope is simply is the place the item got created the scope of the item created in that place will be local and outside that (function) place no one can access that item only the place and child funtions can access the items created is that scope. a closure is the function created in the function and this child function can access the the parent functions scope items in other words the elements created in the parent function can be accessed by child function. so the closure is a function and with access to its lexical scope items.

// 4. Output of following closure ?
// for (var i = 0; i < 3; i++) {
// setTimeout(function log() {
// console.log(i); // What is logged?
// }, 1000);
// }

// ans: output of this code will be 3,3,3 it is because of the setTimeout it is a closure. javascript runs synchronously but setTimeout is async by the end of the timer i will be incremented and i now points to the 3 closure stores reference to the variables so by the time the timer completes i will be now 3 and for three time 3 will be printed to avoid this we should use let instead of var because let have block scope everytime new i will be created.