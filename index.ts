// Run: tsc index.ts | tsc index.ts --watch: to compile the file

// Path: index.js: to run the compiled file
export {};

// Number
let num: number = 1090;
console.log(num);

// Boolean
let status: boolean = true;
console.log(status);

// String
let name: string = "John Doe";
console.log(name);

// Object
let person: { name: string; age: number } = { name: "toto", age: 12 };
console.log(person);

// Array
let fruits: Array<string> = ["apple", "banana", "orange"];
console.log(fruits);

let numeric: Array<Number> = [1, 3, 4, 5];
console.log(numeric);

// Tuple
let tuple: [string, number] = ["Hello", 123];
console.log(tuple);

// Function
const userID = (): number => {
  return 123;
};
console.log(userID());

function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(-1.545, 2234));

// Interface
interface Details {
  username: string;
  age: number;
  email: string;
  userName(): string;
}

const a: Details = {
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
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }
}

const User1 = new MyClass("John Doe", 123);
console.log("User1 name is: ", User1.getName());

// Array Methods
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
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
let fruits1: string[] = ["apple", "banana", "orange"];
let fruits2: string[] = ["mango", "grape", "pear"];
console.log(fruits1, fruits2);
let allFruits: string[] = fruits1.concat(fruits2);
console.log(allFruits);
// Slice an array
let slicedFruits: string[] = allFruits.slice(1, 3);
console.log(slicedFruits);
// Map an array
let mappedFruits: string[] = allFruits.map((fruit) => fruit.toUpperCase());
console.log(mappedFruits);
let mappedNumbers: number[] = numbers.map((number) => number * number);
console.log(mappedNumbers);
// Filter an array
let filteredFruits: string[] = allFruits.filter((fruit) => fruit.length > 5);
console.log(filteredFruits);
// reduce an array
let reducedNumbers: number = numbers.reduce((acc, number) => acc + number, 0);
console.log(reducedNumbers);
let reducedFruits: string = allFruits.reduce(
  (acc, fruit) => acc + " " + fruit,
  ""
);
console.log(reducedFruits);
let sumOfNumbers: number = numbers.reduce((acc, number) => acc + number, 0);
console.log(sumOfNumbers);
let maxNumber: number = numbers.reduce(
  (acc, number) => Math.max(acc, number),
  0
);
console.log(maxNumber);
// foreach an array
let foreachFruits: void = allFruits.forEach((fruit) => console.log(fruit));
let foreachNumbers: void = numbers.forEach((number) => console.log(number));
// find an array
let foundFruit: string = allFruits.find((fruit) => fruit === "banana");
console.log(foundFruit);
let foundNumber: number = numbers.find((number) => number === 3);
console.log(foundNumber);
// findIndex an array
let foundIndexFruit: number = allFruits.findIndex(
  (fruit) => fruit === "banana"
);
console.log(foundIndexFruit);

// inheritance

class Parent {
  name: string;
  setName(name: string): void {
    this.name = name;
  }
}

class Child extends Parent {
  age: number;
  setAge(age: number): void {
    this.age = age;
  }

  sayName(): void {
    console.log("Your name is ", this.name);
  }
}

const name1 = new Child();
name1.setName("djiotsa");
name1.sayName();

// Modules
import { MyLogin } from "./login";
import { MySignup } from "./signup";

let newLogin = MyLogin.login();
newLogin;
let newSignup = MySignup.signup();
newSignup;

// explicit, annotations
let a1: number = 123;
function add(a: number, b: number): number {
  return a + b;
}

// void
function log(message: string): void {
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
  private name: string;
  protected age: number;
  public email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getEmail(): string {
    return this.email;
  }

  private getNameLength(): number {
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

class Person{
  constructor(public name: string, public age: number){}

  greeting(): void{
    console.log(`Hello ${this.name}, you are ${this.age} years old`);
  }
}

const person1 = new Person("dongmo", 10);
person1.greeting();