// REDUCE:- method of array object used to reduce the arrray to one single value

const arr1 = [2, 3, 4, 5];
const mul = arr1.reduce((a, b) => {  // reducer fn accepts 2 params... 1st is accumulated value......2nd is
    console.log(a,  b);             // every array item. whatever value is returned in an iteration is passed
    return a * b;                   // as the accumulator to be used in the next iteration
})                // a*b is passed to a afte every iteration
console.log(mul);
// 2 3
// 6 4
// 24 5
// 120
const add = arr1.reduce((sum, value) => {
    console.log(sum,  value);
    return sum + value;
}, 9)
console.log(add);
// 9 2
// 11 3
// 14 4
// 18 5
// 23
const scores1 = [
    {name: "Divyanshu", goals: 30},
    {name: "Divyanshu Deo", goals: 80},
    {name: "Deekshanshu", goals: 130},
]
const totalGoals = scores1.reduce(
    (total, scorer) => total + scorer.goals, 0);

console.log(totalGoals); // 240


// MAP and FOREACH and FILTER
// map and filter new array m store hga while forEach usi array m km krega

// MAP :- takes a callback fn and run it against every element on the array and generate new array based 
// on existing array. MAP returns an array. the provided callback to map modifies the array element and 
// save them into the ew array upon completion that array get returned as the mapped arrays.
const numbers = [2, 4, 6, 8, 10];
const newArray = numbers.map((num) => num * 2);
console.log(newArray);  // [ 4, 8, 12, 16, 20 ]

// FOREACH :- takes a callback fn and run that callback fn on each element of array one by one. 
// forEach just loop over the array and executes the callback 
// array.forEach(function(currentValue, index, array) {
//     
//   }, thisArg);
numbers.forEach((num, idx) => numbers[idx] *= 2);
console.log(numbers);  // [ 4, 8, 12, 16, 20 ]
numbers.forEach((num) => console.log(num * 2)); // 8  16   24    32   40
console.log(numbers); // [ 4, 8, 12, 16, 20 ]

// FILTER:- let us provide a callback for every element and return filtered array. 
// filter executes the callback and check its return value. if the value is true element returns in the
// resulting array but if the return value is false it will be removed for the resulting array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newFilter = arr.filter((ele) => ele % 2 == 0);
console.log(newFilter); // [ 2, 4, 6, 8, 10 ]

const scores = [
        {name: "Divyanshu", goals: 30},
        {name: "Divyanshu Deo", goals: 180},
        {name: "Deekshanshu", goals: 80},

    ]
const newScores = scores.filter(player => player.goals < 100)
console.log(newScores);
// [
//     { name: 'Divyanshu', goals: 30 },
//     { name: 'Deekshanshu', goals: 80 }
//   ]
const newCity = scores.filter(p => p.name.includes("Divyanshu"));
console.log(newCity);
// [
//     { name: 'Divyanshu', goals: 30 },
//     { name: 'Divyanshu Deo', goals: 180 }
//   ]