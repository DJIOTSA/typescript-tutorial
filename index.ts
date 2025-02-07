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

const a: Details = { username: "djiotsa", age: 123, email: "123@123.123", userName: () => name };
const { username, age, email } = a;
console.log({username, age, email});
console.log(a. userName());

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
console.log("User1 name is: ",User1.getName());


// Array Methods
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8,];
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