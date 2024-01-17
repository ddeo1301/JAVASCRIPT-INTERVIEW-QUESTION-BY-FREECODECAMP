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


// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// this is not a variable. It is a keyword. You cannot change the value of this.