//  scope is certain region of program where it a defined variable exists and can be recognised and beyond
// this it is not recognised(page 78 to  80 of nb)
// var is fn scope where as let and const are block scope

// SHADOWING
var a = 100;
{
    var a = 20;
    console.log(a); // 20
}  // value of a is modified because they both are pointing to the same memory location but this is not the
console.log(a); // 20 .    case of let and const


//ILLEGAL SHADOWING
var b = 100;
{
    let b = 20;
    console.log(b); // 20
}  
console.log(b); // 100

let c = 70;
function x(){
    var c = 40;
    console.log(c); 
}
x(); // 40
console.log(c); // 70

const a = 10;
{
    const a = 20;
    console.log(a); // 20
}
console.log(a); // 10


// DECLARATION
var a1 ;
var a1; // var can declared and initialized again
//const b1;
//const b1; // const should be initialized and declared together
let c1 = 10;  // let cannot be redeclared again but their value can be changed throughout the execution 
c1 = 20; //  of the code within the same block(let can be reinitialized but not redeclared)

// everything in js happen inside an execution context. JS is synchronous single threaded language. JS can
// execute one sentence at a time. call stack maintains the order of execution of execution context


 // HOISTING : in JS is the phenomenon by which we can acceess function and variables even before we have
 // initialized it
// Hoisting 1st initializes the complete code then it will come to local scope and it is going to initialize
// local scope as well. when we have variable in the current scope we are not going to check global scope.
// creates a seperate execution context for that function / local scope.

// TEMPORAL DEAD ZONE :- is a time when variable like 'let' and 'const' was hoisted and when it is 
// initialized by some value. TDZ prevents variable from being accessed before they are initialized.
// with var it result undefined.  it is recommended to use 'let' and 'const' instead of 'var' to avoid
// hoisting related issue and to benefit from block scoping

// EX 1
var x = 21;
var fun = function(){
    console.log(x); 
    var x = 20;
}
fun(); // undefined

// EX 2
getName();// Divyanshu
console.log(x);// undefined
function getName(){
    console.log("Divyanshu")
}
var x = 5;

// EX 3
getName();// Divyanshu
console.log(x);// undefined
function getName(){                // here getName() is allocated as fn
    console.log("Divyanshu")
}
console.log(getName); // [Function: getName]
var x = 7;

// EX 4
var a;
var a = () => {
    return 100;
}
console.log(a()); // 100

// EX 5
console.log(a);
var a = () => {   // here a will behave as variable
    return 100;
}

// EX 6
console.log(a());  // TypeError: a is not a function
var a = () => {
    return 100;
}

