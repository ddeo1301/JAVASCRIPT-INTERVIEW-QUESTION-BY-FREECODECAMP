//Function in Javascript
// Q1 - what is function declaration or function defination or function statement  
// is reusable set of instruction that we define once and we can use it multiple times in code
function square(num){
    return num*num;
}
console.log(square(5))//25
function greet(){
    console.log("Hello divyanshu");
}
greet()//Hello Divyanshu


//Q2 - what is function expression
// when we store function inside a variable
const square1 = function(num){//this is called ananomous function i.e function which has no name
    return num*num;           // it can be assisgned to variable or can be passed as callback
}
console.log(square1(5))//25


//Q3 what are first class function
// JavaScript treats functions as first-class citizens, allowing them to store as variable, passing them as 
// argument, return them from other function and store them in data structure

  // 1. Assigning a Function to a Variable
  // You can store a function in a variable just like you store a number or string.
        let greet = function() {
            console.log("Hello!");
        }; 
        greet(); // Outputs: Hello!

  // 2. Passing a Function as an Argument :- 
  // You can pass a function to another function as an argument and create flexible and reusable code
        function add(a, b){
            return a + b;
        }
        function multiply(a, b){
            return a * b;
        }
        function calculate(operation, a, b){
            return operation(a,b);
        }
        let res1 = calculate(add, 5, 7);
        console.log(res1); // 12
        
        let res2 = calculate(operation, 2, 4);
        console.log(res2); // 8

  // 3. Returning a Function from Another Function :-  function that creates and returns another function.  
        function createMultiplier(factor) {
            return function(number) {
                return number * factor;
            };
        }
        let double = createMultiplier(2);
        let triple = createMultiplier(3);

        console.log(double(5)); // Outputs: 10
        console.log(triple(5)); // Outputs: 15

  // 4. Storing Functions in Data Structures :- You can store functions in arrays or objects.
        // In Array
        let actions = [
            function() { console.log("Run"); },
            function() { console.log("Jump"); }
        ];

        actions[0](); // Outputs: Run
        actions[1](); // Outputs: Jump

        // In object
        let operations = {
            add: function(a, b) {
                return a + b;
            },
            subtract: function(a, b) {
                return a - b;
            }
        };
        
        console.log(operations.add(5, 3)); // Outputs: 8
        console.log(operations.subtract(5, 3)); // Outputs: 2        
     


//Q4 what is IIFE(Immediately invoked function expression)
// IIFE is a way to create a function and run it right away without having to call it separately
// function that is defined and executed immediately after it is created.
        (function square2(num){
            console.log(num*num);
        })(10);//100

        // Example with Variables
        (function() {
            var name = "Alice";
            console.log("Hello, " + name); // Outputs: Hello, Alice
        })();

        console.log(name); // ReferenceError: name is not defined....... name is accesed only inside IIFE

        // With Parameters
        (function(message) {
            console.log(message);
        })("Hello from IIFE!"); // Outputs: Hello from IIFE!

        // ARROW FUNCTION
        (() => {
            console.log("Hello from Arrow Function IIFE!");
        })();

        // An IIFE is useful for:

        // Creating a private scope to avoid variable collisions.
        // Encapsulating code that only needs to run once.
        // Keeping the global namespace clean.
        // It’s a simple and powerful tool in JavaScript to manage scope and avoid polluting the global environment.


//Q5 IIFE output based question
(function(x){
    return function(y){// first it will search in this inner scope, when it will not get then it will
        console.log(x);// search in its parent scope. this happen because of closure
    }(2)
})(1); // 1


// Q6 Function scope
// area or context within which variables declared inside a function are accessible. local scope shadow 
// global scope


// Q7 Function scope - OUTPUT BASED QUESTION
for(let i = 0; i < 5; i++){
    setTimeout(function(){     // everytime this for loop runs it creates another block scope for this
        console.log(i);        // function.  0  1   2   3   4
    }, i*1000)                 // for var being function scope it would have printed 5   5   5   5    5
}

