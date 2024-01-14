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
// in a language where the function can be treated like a variable. in these cases function can be passed
// in another function can be used, manupulated and return from those function
function displaySquare(fn){
    console.log(fn(5))
}
displaySquare(square);//25


//Q4 what is IIFE(Immediately invoked function expression)
//IIFE is a way to create a function and run it right away without having to call it separately
(function square2(num){
    console.log(num*num);
})(10);//100

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



































