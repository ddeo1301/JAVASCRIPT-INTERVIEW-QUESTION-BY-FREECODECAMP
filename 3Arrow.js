//Q13 Arrow function vs regular function

// 1 - SYNTAX
function square(num){
    return num * num;
}
const squareArrow = (num) =>{
    return num * num;
}

// 2 - Implicit "return" keyword
const squareArr = (num) => num * num;

// 3 - arguments
function fn(){
    console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
} 
fn(1,2,3);
const fnArr = () => {
    console.log(arguments); // we cannot have arguments keyword inside an arrow function
}
//fnArr(1,2,3);
// The reason why you cannot use the arguments keyword inside an arrow function is that arrow functions do not
// have their own this value, and they also do not have access to the arguments object.
// arguments object is a local variable available within all non-arrow functions. It contains an array-like object
// of the arguments passed to the function. However, arrow functions do not have their own arguments object. 
// Instead, they inherit the arguments object from their closest non-arrow function ancestor.


// 4 - this keyword
let user = {
    userName : "Divyanshu Coder",
    rc1: () => {  
        console.log("Subscribe to  " + this.userName);
    },
    rc2(){
        console.log("Subscribe to  " + this.userName);
    }
}
user.rc1();// Subscribe to  undefined
user.rc2();// Subscribe to  Divyanshu Coder

function Person() {
    this.age = 0;
  
    setInterval(() => {
      this.age++; // `this` properly refers to the Person instance
      console.log(this.age);
    }, 1000);
  }
  
  const p = new Person();
  


// arrow fn doesnt have its own this. it is going to use its parent this i.e they are going to take the
// value of the lexicle environment where they are enclosed.

// arrow fn don't provide their own binding instead it retains this value of the enclosing lexicle context
const obj = {
    a: 10,
    x: () => {              // this arrow fn is method of this object
        console.log(this);
    }
}
obj.x(); // {}  . this keyword will behave like it is in the global space. value will be window object


const obj2 = {
    a: 10,
    x: function () {
        const y = () => {       // now this arrow fn is not the method of this object but this arrow fn 
            console.log(this);  // is inside another fn which is the method of this object
        }
        y();
    }
}
obj2.x(); // { a: 10, x: [Function: x] }
