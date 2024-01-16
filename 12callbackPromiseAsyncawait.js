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


// ASYNC AWAIT
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
// callbacks are functions passed as arguments to handle asynchronous operations, promises provide a 
// cleaner way to work with asynchronous code, and async/await syntax simplifies the use of promises,
// making code look more like traditional synchronous code.  