//CURRYING
// currying is a function that takes 1 argument at a time and returns a new fn expecting the next argument
// currying is a technique in JavaScript where a function with multiple parameters is transformed into a 
//sequence of functions, each taking a single parameter. 
function f(a){
    return function(b){
        return `${a}  ${b}`;
    };
}
console.log(f(5));     // [Function (anonymous)]
console.log(f(5)(6));  // 5  6


// why should we use currying

// It helps us to create a higher-order function
// reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
// useful in building modular and reusable code
// avoid passing the same variable multiple times
// code more readable


