// Q1 what will be logged to console ?
//Question 1
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; //shadowing. local variable will shadow global variable
    console.log(count); //1
  }
  console.log(count); //0
})();


//Question 2
// we can create a closure to keep a value passed to a fn createBase even after the inner fn is returned
function createBase(n) {
  //Here the outer function will act as a base function,and once we initialized n with 6,
  //here, it will always be constant,6
  return function (num) {
    console.log(n + num);
  };
}
var addSix = createBase(6); //Here we are initializing outer fn with 6, it will always be 6, and we'll be
// invoking inner fn, with new values each time
addSix(10); //16
addSix(21); //27


//Question 3 - Time optimization : optimize the below code
function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}
console.time("6");
find(6); // 36
console.timeEnd("6"); // 6: 24.675ms

console.time("50");
find(50); // 144
console.timeEnd("50"); // 50: 26.315ms


// optimized code with the help of closure
function optimizedFind() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const opt = optimizedFind();

console.time("6");
opt(6);// 36
console.timeEnd("6");// 6: 0.53ms

console.time("50");
opt(50); // 2500
console.timeEnd("50"); //50: 0.482ms