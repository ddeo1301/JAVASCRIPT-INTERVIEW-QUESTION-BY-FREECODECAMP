// Using Object Literal Syntax
let person = {
    name: "John",
    age: 30,
    isStudent: false,
    greet: function() {
        console.log("Hello!");
    }
};

// Using Object Constructor
let person1 = new Object();
person1.name = "John";
person1.age = 30;
person1.isStudent = false;
person1.greet = function() {
    console.log("Hello!");
};

// Accessing Properties
console.log(person.name);         // Output: John
console.log(person['age']);       // Output: 30

// Adding and Modifying Properties
person.city = "New York";
person['age'] = 31;
console.log(person.city);         // Output: New York
console.log(person.age);          // Output: 31

// Methods:
person.sayHello = function() {
    console.log("Hello, I'm " + this.name + "!");
};
person.sayHello();  // Output: Hello, I'm John!

// Deleting Properties:
delete person.isStudent;
console.log(person.isStudent);    // Output: undefined

// Object Methods:
// Object.keys(): Returns an array of a given object's own property names.
let keys = Object.keys(person);
console.log(keys);  // Output: ['name', 'age', 'city', 'sayHello']
// Object.values(): Returns an array of a given object's own property values.
let values = Object.values(person);
console.log(values);  // Output: ['John', 31, 'New York', [Function: sayHello]]

// Example with Nested Objects:
let student = {
    name: "Alice",
    age: 25,
    courses: ['Math', 'Physics'],
    address: {
        city: 'London',
        postalCode: 'SW1A 1AA'
    }
};
console.log(student.address.city);  // Output: London
for (let x in student) {
    console.log(student[x]);
//     Alice
//     25
//    [ 'Math', 'Physics' ]
//    { city: 'London', postalCode: 'SW1A 1AA' }
}



// OBJECT SET
// A JS Set is a collection of unique values. Each value can only occur once in a Set and can hold any 
// value of any data type.......
// new Set() :- Creates a new Set
// add() :- Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists
// clear()	Removes all elements from a Set
// forEach()	Invokes a callback for each element
// values()	Returns an Iterator with all the values in a Set
// keys()	Same as values()
// entries()	Returns an Iterator with the [value,value] pairs from a Set

// Create Variables
const a = "a";
const b = "b";
const c = "c";
// Create a Set
const letters = new Set();
// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
// forEach
letters.forEach(x => console.log(x)); // a     b      c


// A Set has no keys..........entries() returns [value,value] pairs instead of [key,value] pairs.
// Create an Iterator
const myIterator = letters.values();
// List all Values
let text = "";
for (const entry of myIterator) {
  text += entry;
}
console.log(text);// abc



// JAVASCRIPT MAPS
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.

// new Map()	Creates a new Map object
// set()	Sets the value for a key in a Map          // fruits.get("apples");
// get()	Gets the value for a key in a Map          // fruits.size;
// clear()	Removes all the elements from a Map        // fruits.clear();
// delete()	Removes a Map element specified by a key   // fruits.delete("apples");
// has()	Returns true if a key exists in a Map      // fruits.has("apples");

// forEach()	Invokes a callback for each key/value pair in a Map
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// keys()	Returns an iterator object with the keys in a Map
// values()	Returns an iterator object of the values in a Map

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
fruits.set("apples1", 500);
fruits.set("bananas1", 300);
// The set() method can also be used to change existing Map values:
fruits.set("oranges", 1200);
console.log(fruits);
// Map(6) {
//     'apples' => 500,
//     'bananas' => 300,
//     'oranges' => 200,
//     'apples1' => 500,
//     'bananas1' => 300,
//     'oranges1' => 200
//   }


// List all entries
// The forEach() method invokes a callback for each key/value pair in a Map:
let text1 = "";
fruits.forEach (function(value, key) {
  text1 += key + ' = ' + value;
})
console.log(text1); // apples = 500bananas = 300oranges = 1200apples1 = 500bananas1 = 300

// The entries() method returns an iterator object with the [key,values] in a Map:
// List all entries
let text2 = "";
for (const x of fruits.entries()) {
  text2 += x;
}
console.log(text2); // apples,500 bananas,300 oranges,1200 apples1,500 bananas1,300

// The keys() method returns an iterator object with the keys in a Map:
// List all keys
let text3 = "";
for (const x of fruits.keys()) {
  text3 += x;
}
console.log(text3); // apples bananas oranges apples1 bananas1

// The values() method returns an iterator object with the values in a Map:
 // You can use the values() method to sum the values in a Map:
// List all values
let text4 = "";
let sum = 0;
for (const x of fruits.values()) {
  text4 += x;
  sum += x;
}
console.log(text4);  // 500 300 1200 500 
console.log(sum);    // 2800
