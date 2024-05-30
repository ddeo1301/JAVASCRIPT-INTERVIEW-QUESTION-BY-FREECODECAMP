//Question 1 - implement sum(2)(6)(1)
function curry(a) {
    return function (b) {
        console.log(a+b)
      return function (c) {
        console.log(a + b + c);
      };
    };
}
curry(2)(6); // 9
curry(2)(6)(1); // 8   9 
  

//Question 2 :
/*
  evaluate("sum")(2)(4)
  evaluate("subtract")(2)(4);
  evaluate("multiply")(2)(4);
  evaluate("divide")(2)(4);
 */ 
  
function evaluate(operation) {
   return function (a) {
     return function (b) {
        if(operation === "sum") return a + b;
        else if(operation === "multiply") return a * b;
        else if(operation === "divide") return a / b;
        else if(operation === "substract") return a - b;
        else return "Invalid Operations"
     }     
   };
};
const mul = evaluate("multiply")
console.log(mul(3)(5));  // 15
  
  // Q3 : Infinite currying 
  //Infinite currying -> multiply(1)(2)(3)(4).....(n)()
  
  function multiply(a) {
    return function (b) {
      if (b) return multiply(a * b);
      return a;
    };
  }
  
  console.log(multiply(2)(3)(4)(5)(6)()); // 720

  
  //?Q4 : Currying vs partial application-------------------
  // Partial application transformed a fn into another fn with small no of arguments received 
  //The number of functions returned would be less than the arguments
  function sum(a) {
    return function (b, c) {
      return a + b + c;
    };
  }
  //first way of implementation
  let x = sum(5);
  console.log(x(6, 11)); // 22
  console.log(x(16, 11)); // 32
  //second way of implementation
  console.log(sum(5)(6, 11)); //22
  
  //?-------------Question 5 - Manipulating DOM---------------------
  
  function updateElement(id) {
    return function (content) {
      document.querySelector(`#${id}`).textContent = content;
    };
  }
  const updateHeader = updateElement("heading");
  updateHeader("Subscribe to Divyanshu Code");
  setTimeout(() => updateHeader("Subscribe to Divyanshu Vlogs"), 1000);
  setTimeout(() => updateHeader("Hello Divyanshu"), 2000);
 

//Q6 : converting normal function to curried function------------
  
  function curry(func) {
    return function curriedFunc(...args) {
      if (args.length >= func.length) {
        return func(...args);
      } else {
        return function (...next) {
          return curriedFunc(...args, ...next);
        };
      }
    };
  }
  
  const sum1 = (a, b, c, d) => a + b + c + d;
  const totalSum = curry(sum1);
  console.log(totalSum(1, 2, 3, 4)); // 10