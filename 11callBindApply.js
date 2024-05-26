// call(): Invokes a function with a given this value and arguments provided individually.
//     func.call(thisArg, arg1, arg2, ...)
        function multiply(a, b) {
            return a * b;
        }
        
        const result1 = multiply.call(null, 2, 3); // 2 * 3 = 6
        const result2 = multiply.call(null, 4, 5); // 4 * 5 = 20
        console.log(result1); // Output: 6
        console.log(result2); // Output: 20
// When the function doesn't use this, specifying null makes it clear that the function does not rely on any 
// specific context.
  

// apply(): Invokes a function with a given this value and arguments provided as an array.
//     func.apply(thisArg, [argsArray])
        const result3 = multiply.apply(null, [2, 3]); // 2 * 3 = 6
        const result4 = multiply.apply(null, [4, 5]); // 4 * 5 = 20

        console.log(result3); // Output: 6
        console.log(result4); // Output: 20


// bind(): Creates a new function with a fixed this value and optionally pre-set arguments
//         func.bind(thisArg, arg1, arg2, ...)
const multiplyBy2 = multiply.bind(null, 2); // Pre-set the first argument to 2

const result5 = multiplyBy2(3); // 2 * 3 = 6
const result6 = multiplyBy2(5); // 2 * 5 = 10
console.log(result5); // Output: 6
console.log(result6); // Output: 10







let name = {
    firstName: "Divyanshu",
    lastName: "Deo",
    printFullName: function(){
        console.log(this.firstName + "  " + this.lastName);
    }
}
name.printFullName(); // Divyanshu  Deo

let printFullName1 = function(){
    console.log(this.firstName + "  " + this.lastName);
}

let printFullName2 = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}

let name2 = {
    firstName: "Swati",
    lastName: "surbhi"
}

// function borrowing(using call method we can do fn borrowing)
// we can borrow fn from other object and use it with the data of some other object

name.printFullName.call(name2); // Swati  surbhi
//name2 i.e 1st argument is the reference or what we want this of name to be pointing to
printFullName1.call(name2); // Swati  surbhi
printFullName2.call(name2, "Bhagalpur", "Bihar"); // Swati surbhi from Bhagalpur, Bihar
// 1st parameter is always reference to the this variable and the later argument can be the argument of 
// the fn which we pass individually

printFullName2.apply(name, ["Bhagalpur", "Bihar"]); // Divyanshu Deo from Bhagalpur, Bihar
// 1st parameter is always reference to the this variable and 2nd argument is the list of argument what
//  we have to pass in the fn

let printMyName = printFullName2.bind(name2, "Bhagalpur", "Bihar"); // instead of directly calling the fn ,
// bind methods binds this method printFullName with object and returns the copy of the object which can
// be called later
console.log(printMyName);  // [Function: bound printFullName2]
printMyName(); // Swati surbhi from Bhagalpur, Bihar


