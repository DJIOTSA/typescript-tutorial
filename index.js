"use strict";
// Run: tsc index.ts | tsc index.ts --watch: to compile the file
Object.defineProperty(exports, "__esModule", { value: true });
// Number
var num = 1090;
console.log(num);
// Boolean
var status = true;
console.log(status);
// String
var name = "John Doe";
console.log(name);
// Object
var person = { name: "toto", age: 12 };
console.log(person);
// Array
var fruits = ["apple", "banana", "orange"];
console.log(fruits);
var numeric = [1, 3, 4, 5];
console.log(numeric);
// Tuple
var tuple = ["Hello", 123];
console.log(tuple);
// Function
var userID = function () {
    return 123;
};
console.log(userID());
function sum(a, b) {
    return a + b;
}
console.log(sum(-1.545, 2234));
var a = { username: "djiotsa", age: 123, email: "123@123.123", userName: function () { return name; } };
var username = a.username, age = a.age, email = a.email;
console.log({ username: username, age: age, email: email });
console.log(a.userName());
// Class
var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
    }
    MyClass.prototype.getName = function () {
        return this.name;
    };
    return MyClass;
}());
var User1 = new MyClass("John Doe", 123);
console.log("User1 name is: ", User1.getName());
// Array Methods
var numbers = [1, 2, 3, 4, 5, 6, 7, 8,];
console.log(numbers);
// Add to the end of the array
numbers.push(9);
console.log(numbers);
// Remove from the end of the array
numbers.pop();
console.log(numbers);
// Remove from the beginning of the array
numbers.shift();
console.log(numbers);
// Add to the beginning of the array
numbers.unshift(0);
console.log(numbers);
// Concatenate two arrays
var fruits1 = ["apple", "banana", "orange"];
var fruits2 = ["mango", "grape", "pear"];
console.log(fruits1, fruits2);
var allFruits = fruits1.concat(fruits2);
console.log(allFruits);
// Slice an array
var slicedFruits = allFruits.slice(1, 3);
console.log(slicedFruits);
