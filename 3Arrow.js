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

// 4 - this keyword
let user = {
    userName : "Divyanshu Coder",
    rc1: () => {  // arrow fn doesnt have its own this. it is going to use its parent this
        console.log("Subscribe to  " + this.userName);
    },
    rc2(){
        console.log("Subscribe to  " + this.userName);
    }
}
user.rc1();// Subscribe to  undefined
user.rc2();// Subscribe to  Divyanshu Coder

