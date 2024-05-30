// CALLBACK  FUNCTION
// A callback function is a function that is passed as an argument to another function and is executed at
// later  point of time.   It allows us to specify what should happen after a certain operation completes.
// Callbacks are commonly used in asynchronous operations, like reading a file or making a network request.
function fetchData(callback) {
    setTimeout(() => {
        const data = 'Hello, world!';
        callback(data);
    }, 1000);
}
function processData(data) {
    console.log('Data:', data);
}
fetchData(processData);
// -------------------------------------------------------------------------------------

function findMax(a, b, callback) {
    return callback(a, b);
  }
  
  function maxValue(x, y) {
    return x > y ? x : y;
  }
  
  let max = findMax(10, 20, maxValue);
  console.log(max); // Output: 20
  
  // callback function in JavaScript is a function that is passed as an argument to another function and is executed
  // after the first function has completed its task. It allows for asynchronous execution, ensuring that certain 
  // code runs only after a specific task is finished. Callback functions are commonly used in scenarios like 
  // handling asynchronous events such as network requests or file I/O.
  function calculateSquare(num, callback) {
    return callback(num);
  }
  function square(x) {
    return x * x;
  }
  let result = calculateSquare(5, square);
  console.log(result); // Output: 25
    //whenever we return a function from another fn, we need to assign to another variable and invoke that.

// CALLBACK HELL (PYRAMID OF DOOM)
// INVERSION OF CONTROL
// doSomething(function(result) {
//     doSomethingElse(result, function(newResult) {
//         doYetAnotherThing(newResult, function(finalResult) {
//             // And it goes on...
//         });
//     });
// });



// PROMISES
// A promise is an object that represents the eventual completion or failure of an asynchronous operation.
// It has states: pending, resolved (fulfilled), or rejected.
// Promises simplify the handling of asynchronous code and make it more readable.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Hello, world!';
            resolve(data); // Operation succeeded
            // or reject('Error message'); // Operation failed
        }, 1000);
    });
}
fetchData()
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error:', error));

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
let promise = new Promise(function(resolve, reject) {
    resolve(2);
  });
  
  promise
    .then(function(result) {
      return result * 2;
    })
    .then(function(result) {
      return result * 2;
    })
    .then(function(result) {
      console.log(result); // Output: 8
    });


// ASYNC AWAIT
// handle asynchronous operations in a more synchronous and readable way. 
// Async/Await is a way to handle asynchronous operations in programming. 
// async and await are keywords used to work with promises in a more synchronous-looking way.
// async is used before a function declaration to indicate that the function returns a promise.
// await is used inside an async function to wait for a promise to resolve before moving on.
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Hello, world!';
            resolve(data);
        }, 1000);
    });
}   
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}
processData();
// ----------------------------------------------------------
// ----------------------------------------------------------
function calculateSquareAsync(x, callback) {
    setTimeout(() => {
        callback(x * x);
    }, 1000); // Simulate a delay of 1 second
}

console.log('Start');
calculateSquareAsync(5, (result) => {
    console.log('Square is:', result); // Output: Square is: 25 (after 1 second)
});
console.log('End');

// callbacks are functions passed as arguments to handle asynchronous operations, promises provide a 
// cleaner way to work with asynchronous code, and async/await syntax simplifies the use of promises,
// making code look more like traditional synchronous code.  