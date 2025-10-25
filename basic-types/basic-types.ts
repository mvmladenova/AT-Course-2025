// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMsg: string = "Welcome";
// Cannot assign to 'welcomeMsg' because it is a constant.
// welcomeMsg = "Welcome message"

// string
let message: string = "Hello Peter!";

// get length of string
let messageLenght: number = message.length;
// console.log(messageLenght)

// string interpolation
let messageDetaiils: string = `Text message lenght is ${messageLenght}`;
// console.log(messageDetaiils);

// number and number operations 
let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let divide: number = numOne / numTwo;
let modulo: number = numOne % numTwo;

// console.log(add, substract, multiply, divide, modulo);


// boolean (true or false)
// === string equality
// Compares both value and type
// No type conversion
// Returns true only if both value and type are the same
// Example: 5 === '5' → false (number vs string)
let areEqual: boolean = numOne === numTwo;
//console.log("areEqual", areEqual);

// == string equality
// Compares only value
// Type conversion
// Returns true if values are equal after type conversion
// Example: 5 == '5' → true (string '5' is converted to number 5)
let areEqual2: boolean = numOne == numTwo;
// console.log("areEqual", areEqual);
// console.log("areEqual2", areEqual2);

let isGreater: boolean = numOne > numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;

// console.log("isGreater", isGreater);
// console.log("isGreaterOrEqual", isGreaterOrEqual);

// logical operators
// && logical AND operator
let areEqualTo: boolean = numOne === 10 && numTwo === 6;
// console.log("areEqualTo", areEqualTo);

// || logical OR operator
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 5;
// console.log("isAnyNumEqualTo", isAnyNumEqualTo);

// ! logical NOT operator
let isNotEqual: boolean = numOne !== numTwo;
// console.log("isNotEqual", isNotEqual);

// Conditional (ternary) operator
let result: string = areEqual ? "Equal" : "Not equal";
// console.log("result", result);

// checking if number is positive or negative
let isPositiveNum: string = numOne > 0 ? "the number is positive" : "the number is negative";
// console.log("isPositiveNum", isPositiveNum);

// checking if number is positive or negative and using string interpolation
let isPositveNum2: string = numOne > 0 ? `The number ${numOne} is positive` : `The number ${numOne} is negative`;
// console.log("isPositveNum2", isPositveNum2);

// if else statement
if (numOne > 0) {
     //console.log("The number is positive");
} else {
     //console.log("The number is negative");
}



const numThree: number = 100;

if (numThree <= 10){
    console.log("The numThree is less or equal to 10");
} else if(numThree > 110){
    console.log("The numThree is greater than 110");
}else if (numThree > 50){
    console.log("The numThree is greater than 50");
} else{
    console.log("The numThree is between 11 and 50");
}