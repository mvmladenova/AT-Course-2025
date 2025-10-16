// Exercise 1: String and number variables with string interpolation
const name: string = 'Maya Mladenova';
const age: number = 25;
console.log(`Hello! I am ${name}, ${age} years old`);

// Exercise 2: Number operations
const num1: number = 15;
const num2: number = 7;

const addition: number = num1 + num2;
const subtraction: number = num1 - num2;

console.log(`Addition: ${num1} + ${num2} = ${addition}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtraction}`);

// Exercise 3: Number range check
const num: number = 30;
const isWithinRange: boolean = num >= 10 && num <= 50; // Fixed logical operator from || to &&

console.log(`Is ${num} within 10 to 50? ${isWithinRange ? 'Yes' : 'No'}`);
