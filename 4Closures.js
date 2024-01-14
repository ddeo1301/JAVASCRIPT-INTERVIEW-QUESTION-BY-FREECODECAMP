// CLOSURES(page 80)
// a scope refers to current context of our code. it can be either globally or locally. 
// a lexicle scope in JS means that a variable defines outside a fn can be accessible inside another fn
// defined after variable declaration but not viceversa

// Closures is a fn bundled together(enclosed) along with its lexicle environment(sorrounding state) i.e
// closures gives us the access to an outer fn scope from an inner fn 
// Closures are created everytime fn is created.
// 1)
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y; 
}
var z = x();
console.log(z);// [Function: y]
z(); // 7

// 2)
function xx(){
    var a = 9;
    return function y(){
        console.log(a);
    }
}
var z = xx();
console.log(z);// [Function: y]
z(); // 9

// 3)
function xxx(){
    let a = 10;
    function y(){
        console.log(a); 
    }
    a = 50;
    return y;
}
const zz = xxx();
console.log(zz()); // 50    // undefined

// 4)
function xxxx(){
    let a = 10;
    function y(){
        console.log(a); 
    }
    y();
}
xxxx(); // 10

// 5)
function xxxxx(){
    let a = 10;
    function y(){
        console.log(a); 
    }
    console.log(y());
}
xxxxx(); // 10  // undefined
console.log(xxxxx()); // 10  // undefined  // undefined


// Closure scope Chain
// every closure has 3 scopes :-  1)  Local Scope(Own Scope)   2) Outer Function Scope   3) Global Scope
var e = 10;
function sum(a){
    return function(b){
        return function(c){
            //outer scope
            return function(d){
                // local scope
                return a + b + c + d + e;
            }
        }
    }
}
//1st method of invoking scope chain functions
const sum1 = sum(2);
const sum2 = sum1(3);
const sum3 = sum2(4);
const result = sum3(5);
console.log(result);

//Another way of invoking scope chain functions: shorter way
console.log(sum(2)(3)(4)(5)); // 24



// Q10 :  Difference between closures and scope
// whenever we are creating fn inside another fn, then inner fn is closure. this fn is usually returned
// so we can use outer fn in later time
// SCOPE in js is what variable we are accessed to 