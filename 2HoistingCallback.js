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
const fn = (a, x, y, ...numbers) => {
    console.log(x, y, numbers);
}
fn(5, 6, 7, 8, 9, 2, 3, 4);// 6 7  [8, 9, 2, 3, 4]


// Q12 Callback Function
// is a fn passed into another fn as an argument, which is then invoked inside the outer fn to complete
// some kind of routine or actions
setTimeout(function () {
    //Here function is getting called inside the setTimeout fn. So, This is a callback fn.
    console.log("This is the callback fn inside setTimeout");
  }, 1 * 1000);
  
  function book() {
    return function () {
      console.log("logging from callback fn., book");
    };
  }
  const bk = book();
  bk(); //One way of calling the return fn
  book()(); //Another way of calling the return fn.
  //Here this inner function being returned by the outer fn is the callback.
  
  //Another example of callback fn
  function notMain() {
    console.log("Not main");
  }
  function main(fn) {
    return fn;
  }
  const fnToInvoke = main(notMain);
  fnToInvoke(); 
  //whenever we return a function from another fn, we need to assign
  //to another variable and invoke that.