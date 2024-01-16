"use strict";

// this in global scope
console.log(this); // {}  globalObject.    wherever JS run there is JS runtime environment.   in case of 
// browser global object is window. in node.js it is global.  


// this inside a fn
function x(){           // this keyword inside fn run diffrently in strict and non strict mode. 
    console.log(this);  // strict mode :- undefined      // non strict mode :- window
}                       
x();


// this in strict mode - (this substitution)
// if value of this keyword is undefined or null , this keyword will be replaced with globalObject only 
// in non strict mode


// this keyword value depends on how the fn is called (window)
x();        // undefined :- strict
//window.x(); // window :- strict


// this inside object's method
// if we make fn as a part of object then it is known as methods
const obj = {
    a: 10,
    x: function(){ // x is a method
        console.log(this);
    }
}
obj.x(); //  { a: 10, x: [Function: x] }


// call  apply  bind methods (sharing methods)  :- see  11callBindApply.js


// this inside arrow fn  :- see 3Arrow.js