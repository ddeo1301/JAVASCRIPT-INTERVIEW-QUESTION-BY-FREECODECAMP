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