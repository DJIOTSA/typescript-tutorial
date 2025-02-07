"use strict";
// Run: tsc index.ts | tsc index.ts --watch: to compile the file
Object.defineProperty(exports, "__esModule", { value: true });
// Number
let num = 1090;
console.log(num);
// Boolean
let status = true;
console.log(status);
// String
let name = "John Doe";
console.log(name);
// Object
let person = { name: "toto", age: 12 };
console.log(person);
// Array
let fruits = ["apple", "banana", "orange"];
console.log(fruits);
let numeric = [1, 3, 4, 5];
console.log(numeric);
// Tuple
let tuple = ["Hello", 123];
console.log(tuple);
// Function
const userID = () => {
    return 123;
};
console.log(userID());
function sum(a, b) {
    return a + b;
}
console.log(sum(-1.545, 2234));
const a = {
    username: "djiotsa",
    age: 123,
    email: "123@123.123",
    userName: () => name,
};
const { username, age, email } = a;
console.log({ username, age, email });
console.log(a.userName());
// Class
class MyClass {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
const User1 = new MyClass("John Doe", 123);
console.log("User1 name is: ", User1.getName());
// Array Methods
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
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
let fruits1 = ["apple", "banana", "orange"];
let fruits2 = ["mango", "grape", "pear"];
console.log(fruits1, fruits2);
let allFruits = fruits1.concat(fruits2);
console.log(allFruits);
// Slice an array
let slicedFruits = allFruits.slice(1, 3);
console.log(slicedFruits);
// Map an array
let mappedFruits = allFruits.map((fruit) => fruit.toUpperCase());
console.log(mappedFruits);
let mappedNumbers = numbers.map((number) => number * number);
console.log(mappedNumbers);
// Filter an array
let filteredFruits = allFruits.filter((fruit) => fruit.length > 5);
console.log(filteredFruits);
// reduce an array
let reducedNumbers = numbers.reduce((acc, number) => acc + number, 0);
console.log(reducedNumbers);
let reducedFruits = allFruits.reduce((acc, fruit) => acc + " " + fruit, "");
console.log(reducedFruits);
let sumOfNumbers = numbers.reduce((acc, number) => acc + number, 0);
console.log(sumOfNumbers);
let maxNumber = numbers.reduce((acc, number) => Math.max(acc, number), 0);
console.log(maxNumber);
// foreach an array
let foreachFruits = allFruits.forEach((fruit) => console.log(fruit));
let foreachNumbers = numbers.forEach((number) => console.log(number));
// find an array
let foundFruit = allFruits.find((fruit) => fruit === "banana");
console.log(foundFruit);
let foundNumber = numbers.find((number) => number === 3);
console.log(foundNumber);
// findIndex an array
let foundIndexFruit = allFruits.findIndex((fruit) => fruit === "banana");
console.log(foundIndexFruit);
// inheritance
class Parent {
    name;
    setName(name) {
        this.name = name;
    }
}
class Child extends Parent {
    age;
    setAge(age) {
        this.age = age;
    }
    sayName() {
        console.log("Your name is ", this.name);
    }
}
const name1 = new Child();
name1.setName("djiotsa");
name1.sayName();
// Modules
const login_1 = require("./login");
const signup_1 = require("./signup");
let newLogin = login_1.MyLogin.login();
newLogin;
let newSignup = signup_1.MySignup.signup();
newSignup;
// explicit, annotations
let a1 = 123;
function add(a, b) {
    return a + b;
}
// void
function log(message) {
    console.log(message);
}
log("Hello world!");
// // Any and Unknown
// let data: any;
// data = 123;
// data = "Hello";
// data = true;
// data = { name: "John Doe", age: 123 };
// console.log(data);
// let value: string = data;
// console.log(value);
// let data1: unknown;
// data1 = 123;
// data1 = "Hello";
// // this will throw an error: Type 'unknown' is not assignable to type 'number'.
// let value1: number = data1;
// console.log(value1);
// // this will not throw an error: Type 'unknown' is not assignable to type 'string'.
// let value2: string = data1;
// console.log(value2);
// private, public, protected
class Student {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getEmail() {
        return this.email;
    }
    getNameLength() {
        return this.name.length;
    }
}
const student1 = new Student("John Doe", 123, "123@123.123");
console.log(student1);
console.log(student1.getName());
console.log(student1.getAge());
console.log(student1.getEmail());
student1.setName("djiotsa");
console.log(student1.getName());
// this will throw an error: Property 'age' is protected and only accessible within class 'Student' and its subclasses.
// student1.name= "toto";
// student1.age = 123;
student1.email = "123@123.123";
console.log(student1.getName());
console.log(student1.getAge());
console.log(student1.getEmail());
// this will throw an error: Property 'getNameLength' is private and only accessible within class 'Student'.
// student1.getNameLength();
// constructors
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Hello ${this.name}, you are ${this.age} years old`);
    }
}
const person1 = new Person("dongmo", 10);
person1.greeting();
