//Q8 Hoisting(PAge 78)
//Hoisting in JS is a phenomenon by which we can access function and variables before it is being initialized
getName();// Divyanshu
console.log(x);// undefined
function getName(){
    console.log("Divyanshu")
}
var x = 5;

//Q9 Hoisting output based question
//Hoisting 1st initializes the complete code then it will come to local scope and it is going to initialize
// local scope as well. when we have variable in the current scope we are not going to check global scope.
// creates a seperate execution context for that function / local scope.
var x = 21;
var fun = function(){
    console.log(x); // undefined
    var x = 20;
}
fun();


//Q10 Params vs Arguments
function square(x, y, z){ // params :- placeholders in the function definition,
    console.log(x + y + z);// here x, y, z are params
}
square(5, 6, 7);// Argument(5,6,7) :- actual values passed to those placeholders when the function is called.



// q10.1 spread vs rest
// Expands elements of an array or properties of an object.
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

function mul(...nums){ // Here we are using then its called REST OPERATOR
    console.log(nums[0] * nums[1] * nums[2]);//Used to collect multiple elements (like function 
}// arguments or remaining array elements) into a single array or object.
function multiply(num1, num2, num3){
   console.log(num1 * num2 * num3);
}
var arr = [4, 5, 6];//Used to spread elements (like array elements or object properties) into a new array or object.
multiply(...arr);  // 120. Here we are using then its called SPREAD OPERATOR.
mul(...arr);// 120

//When we use rest operator or spread operator then it should always be the last one
// Rest Operator: Collects multiple elements or properties into a single array or object.
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

const fn = (a, x, y, ...numbers) => {
    console.log(x, y, numbers);
}
fn(5, 6, 7, 8, 9, 2, 3, 4);// 6 7  [8, 9, 2, 3, 4]


// Q12 Callback Function
// is a fn passed into another fn as an argument, which is then invoked inside the outer fn to complete
// some kind of routine or actions
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