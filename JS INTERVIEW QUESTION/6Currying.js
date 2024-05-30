//CURRYING
// currying is a function that takes 1 argument at a time and returns a new fn expecting the next argument
// Technique of transforming a function that takes multiple arguments into a sequence of functions, each with a
//  single argument.
function f(a){
    return function(b){
        return `${a}  ${b}`;
    };
}
console.log(f(5));     // [Function (anonymous)]
console.log(f(5)(6));  // 5  6


function add(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
  }
add(1)(2)(3); // returns 6
  


// why should we use currying
// It helps us to create a higher-order function
// reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
// useful in building modular and reusable code
// avoid passing the same variable multiple times
// code more readable


// Some commonly used timing features of Node.js include:
//setTimeout: Executes a callback function after a specified delay.
//setInterval: Repeatedly executes a callback function with a fixed time interval.
//setImmediate: Executes a callback function immediately after the current event loop iteration completes.
//process.nextTick: Defers the execution of a callback function until the next iteration of the event loop.


// Abstraction: Hiding unnecessary details and exposing relevant information. It simplifies complex systems
//  by providing a generalized view.
// Encapsulation: Bundling data and methods into a class, controlling access to them. It ensures data
//  integrity and hides implementation details.


// DELETE: Removes specific rows from a table based on conditions. It is a logged operation and can be
//  rolled back.
// TRUNCATE: Removes all rows from a table. It is faster than DELETE, deallocates space, and resets table
//  identity values. TRUNCATE cannot be rolled back as it is not logged.


// The different HTTP methods are:
// 1. GET: Used to retrieve data from a server. It should be used when you want to fetch information without
//  making any modifications.
// 2. POST: Used to send data to a server to create a new resource. It should be used when you want to 
// submit data to the server, like submitting a form.
// 3. PUT: Used to send data to a server to update an existing resource. It should be used when you want
//  to modify an existing resource completely.
// 4. DELETE: Used to delete a specified resource on the server.'