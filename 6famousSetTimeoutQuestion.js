//Question 4 : Block scope and setTimeOut
for (var i = 0; i < 3; i++) {
    setTimeout(function () { // var is fn scope and setTimeout only runs after complete code has run successfully
      console.log(i); //3, 3, 3 after every 1 sec
    }, i * 1000);
  } 
  
  //solution using let 
  for (let i = 0; i < 3; i++) { // let is block scope .  {i = 0}   {i = 1}   {i = 2}
    setTimeout(function () {    // after code run succesfully it will look into scope of i variable
      console.log("using let", i); //0, 1, 2 after every 1 sec
    }, i * 1000);
  }
  
  //solution using closures without using let. Here we are capturing the value of i after every iteration inside the
  //function scope,  and passing it as a parameter (index) to the function inside setTimeout.
  
  for (var i = 0; i < 3; i++) {
    (function (idx) {
      setTimeout(function () {
        console.log("using var", idx); //0, 1, 2 after every 1 sec
      }, idx * 1000);
    })(i);
  }

  //  OR
  for (var i = 0; i < 3; i++) {
    function inner(i){
        setTimeout(function () { 
            console.log(i); 
        }, i * 1000);
    }
    inner(i)
 } 
 
 
  //-----------Question  5: Create a private counter using closures--------
  function counter() {
    let _counter = 0;
    function add(increment) {
      _counter += increment;
    }
    function retrieve() {
      return "Counter value is " + _counter;
    }
    return {
      add,
      retrieve,
    };
  }
  
  let count = counter();
  count.add(10);
  count.add(31);
  console.log(count.retrieve()); // Counter value is 41 
  //Here we are not directly manipulating the _counter var, we are using a function.
  
  // Q6 : what is module pattern
  var Module = (function () {
    function privateMethod() {
      //do something
      console.log("private method"); // private variable total is hidden from the outside but can be 
    } // modified and accessed through the public functions.
  
    return {
      publicMethod: function () {
        console.log("public method");
      },
    };
  })();
  
  Module.privateMethod(); //It will not run, as private method can't be returned
  Module.publicMethod();

// The module pattern in JavaScript is a way of structuring code to encapsulate related functionalities 
// in a single unit, called a module. It provides a method to create private and public members within a
//  module, allowing you to control the access to certain parts of your code.
// Module Pattern Example
const Calculator = (function() {
    // Private members
    let total = 0;
  
    function add(number) {
      total += number;
    }
    function getTotal() {
      return total;
    }
  
    // Public members
    return {
      add: add,
      getTotal: getTotal
    };
  })();
  
  // Using the module
  Calculator.add(5);
  Calculator.add(3);
  console.log(Calculator.getTotal()); // Outputs: 8
 //  Calculator is a module that keeps track of a total. add is a private function, and getTotal is a 
//  public function. The private variable total is hidden from the outside but can be modified and 
//  accessed through the public functions. 


// Q7 - Make the below code run once--------------
  
  let channel;
  function subscribeTheChannel() {
    channel = "Divyanshu code";
    console.log(`Subscribe to ${channel}`);
  } 
  subscribeTheChannel(); // Subscribe to Divyanshu code
  subscribeTheChannel(); // Subscribe to Divyanshu code
  subscribeTheChannel(); // Subscribe to Divyanshu code
  subscribeTheChannel(); // Subscribe to Divyanshu code
  subscribeTheChannel(); // Subscribe to Divyanshu code
  
  //Solution
  let channel1;
  function subscribeMyChannel() {
    let count = 0;
    return function () {
      if (count > 0) {
        console.log("Already subscribed to Divyanshu Coder");
      } else {
        channel1 = "Divyanshu Code";
        console.log(`Subscribe to ${channel1}`);
        count++;
      }
    };
  }
  let sub = subscribeMyChannel();
  sub();
  sub();
  sub();
  sub();
  
// Q8 : Once Polyfill
  function once(func, context) {
    let ran;
    return function () {
      if (func) {
        ran = func.apply(context || this, arguments);
        func = null;
      }
      return ran;
    };
  } 
  const printHelloOnce = once((a, b) => console.log("Hellow once", a, b)); 
  printHelloOnce(99, 33);
  printHelloOnce(2, 3);
  printHelloOnce(9, 3);
  printHelloOnce(2, 3);// Hellow once 99 33
  //Here, if we run this printHelloOnce many times also, it will run only once.
  
  // Q9 : Memoized polyfill----------------------------------------
  
  //Let's create the memoized function
  function myMemoize(func, context) {
    //res object would be like
    // res = {
    //    "4,5":20
    //}
  
    const res = {};
    return function (...args) {
      var argsCache = JSON.stringify(args);
      if (!res[argsCache]) {
        res[argsCache] = func.call(context || this, ...args);
      }
      return res[argsCache];
    };
  }
  
  const clumsyProduct = (num1, num2) => {
    for (let i = 1; i < 100000000; i++) {}
  
    return num1 * num2;
  };
  
  console.time("clumsyProduct First call");
  console.log(clumsyProduct(9467, 7649)); // 72413083
  console.timeEnd("clumsyProduct First call"); // clumsyProduct First call: 100.577ms
  
  console.time("clumsyProduct second call");
  console.log(clumsyProduct(9467, 7649)); // 72413083
  console.timeEnd("clumsyProduct second call"); // clumsyProduct second call: 99.212ms
  
  const memoizedFn = myMemoize(clumsyProduct);
  
  console.log("-----------------memoized result below---------------");
  
  console.time("memoizedFn First call");
  console.log(memoizedFn(4534, 7654));  // 34703236
  console.timeEnd("memoizedFn First call"); // memoizedFn First call: 39.663ms
  
  console.time("memoizedFn Second call");
  console.log(memoizedFn(4534, 7654));  // 34703236
  console.timeEnd("memoizedFn Second call"); // memoizedFn Second call: 0.715ms