"use strict";
// Run: tsc index.ts | tsc index.ts --watch: to compile the file
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var a = {
    username: "djiotsa",
    age: 123,
    email: "123@123.123",
    userName: function () { return name; },
};
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
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
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
// Map an array
var mappedFruits = allFruits.map(function (fruit) { return fruit.toUpperCase(); });
console.log(mappedFruits);
var mappedNumbers = numbers.map(function (number) { return number * number; });
console.log(mappedNumbers);
// Filter an array
var filteredFruits = allFruits.filter(function (fruit) { return fruit.length > 5; });
console.log(filteredFruits);
// reduce an array
var reducedNumbers = numbers.reduce(function (acc, number) { return acc + number; }, 0);
console.log(reducedNumbers);
var reducedFruits = allFruits.reduce(function (acc, fruit) { return acc + " " + fruit; }, "");
console.log(reducedFruits);
var sumOfNumbers = numbers.reduce(function (acc, number) { return acc + number; }, 0);
console.log(sumOfNumbers);
var maxNumber = numbers.reduce(function (acc, number) { return Math.max(acc, number); }, 0);
console.log(maxNumber);
// foreach an array
var foreachFruits = allFruits.forEach(function (fruit) { return console.log(fruit); });
var foreachNumbers = numbers.forEach(function (number) { return console.log(number); });
// find an array
var foundFruit = allFruits.find(function (fruit) { return fruit === "banana"; });
console.log(foundFruit);
var foundNumber = numbers.find(function (number) { return number === 3; });
console.log(foundNumber);
// findIndex an array
var foundIndexFruit = allFruits.findIndex(function (fruit) { return fruit === "banana"; });
console.log(foundIndexFruit);
// inheritance
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setName = function (name) {
        this.name = name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.setAge = function (age) {
        this.age = age;
    };
    Child.prototype.sayName = function () {
        console.log("Your name is ", this.name);
    };
    return Child;
}(Parent));
var name1 = new Child();
name1.setName("djiotsa");
name1.sayName();
// Modules
var login_1 = require("./login");
var signup_1 = require("./signup");
var newLogin = login_1.MyLogin.login();
newLogin;
var newSignup = signup_1.MySignup.signup();
newSignup;
// explicit, annotations
var a1 = 123;
function add(a, b) {
    return a + b;
}
// void
function log(message) {
    console.log(message);
}
log("Hello world!");
// Any and Unknown
var data;
data = 123;
data = "Hello";
data = true;
data = { name: "John Doe", age: 123 };
console.log(data);
var value = data;
console.log(value);
var data1;
data1 = 123;
data1 = "Hello";
// // this will throw an error: Type 'unknown' is not assignable to type 'number'.
// let value1: number = data1;
// console.log(value1);
// // this will not throw an error: Type 'unknown' is not assignable to type 'string'.
// let value2: string = data1;
// console.log(value2);
// private, public, protected
var Student = /** @class */ (function () {
    function Student(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.getEmail = function () {
        return this.email;
    };
    return Student;
}());
var student1 = new Student("John Doe", 123, "123@123.123");
console.log(student1);
console.log(student1.getName());
console.log(student1.getAge());
console.log(student1.getEmail());
