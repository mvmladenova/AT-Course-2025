// // Basic Arrays and operations with them

// // 1. Array Declaration : Number Array
// let number: number [] = [1, 2, 3, 4, 5];
// console.log(number);

// // 2. Array Declaration : String Array
// let names: string [] = ["Maya", "John", "Jane"];
// console.log(names); 

// // 3. Array Declaration : Mixed Array (Number and String)
// let mixed: (number | string) [] = [1, "Maya", 2, "John", 3, "Jane"];
// console.log(mixed);

// // 4. Array Declaration : Tuple
// let tuple: [number, string] = [1, "Maya"];
// console.log(tuple);

// // Accessing Array Elements
// console.log("\n--- Accessing Array Elements ---");

// // 1. Accessing by index (0-based)
// console.log("First number:", number[0]);  // 1
// console.log("Second name:", names[1]);    // "John"

// // 2. Accessing the last element
// console.log("Last number:", number[number.length - 1]);  // 5
// console.log("Last name:", names[names.length - 1]);      // "Jane"

// // 3. Accessing tuple elements
// console.log("Tuple first element (number):", tuple[0]);  // 1
// console.log("Tuple second element (string):", tuple[1]); // "Maya"

// // 4. Accessing mixed array elements
// console.log("First element (number):", mixed[0]);  // 1
// console.log("Second element (string):", mixed[1]); // "Maya"

// // 5. Iterating through arrays
// console.log("\n--- Iterating Through Arrays ---");
// console.log("Numbers:");
// for (let i = 0; i < number.length; i++) {
//     console.log(`  number[${i}]:`, number[i]);
// }

// console.log("\nNames:");
// for (const name of names) {
//     console.log("  ", name);
// }

// // 6. Using forEach
// console.log("\nMixed array elements:");
// mixed.forEach((item, index) => {
//     console.log(`  mixed[${index}]:`, item, `(type: ${typeof item})`);
// });

// // 7. Array destructuring
// const [firstNumber, secondNumber] = number;
// console.log("\nDestructured first two numbers:", firstNumber, secondNumber);

// const [firstName, ...otherNames] = names;
// console.log("First name:", firstName);
// console.log("Other names:", otherNames);

// // 8. Checking if an element exists
// console.log("\n--- Checking Elements ---");
// console.log("Is 'Maya' in names?", names.includes("Maya"));  // true
// console.log("Is index 2 in numbers?", 2 in number);           // true

// Array Methods
console.log("\n--- Array Methods ---");
const originalArray: number [] = [1, 4, 9, 16];
const newArray = originalArray.map((x) => x * 2);

console.log("Original array:", originalArray);
console.log("New array:", newArray);


let numsArray: number [] = [1, 2, 3, 4];
let stringArray: string [] = ["Maya", "John", "Jane"];
let combineArray: (string | number) [] = [1, "Maya", "John", 2];


// method map()
let multiplyNums = numsArray.map((num: number) => num * 2);
let mapNames = stringArray.map((curName: string) => `Hello ${curName}`);
let checkTypeOf = combineArray.map((element: number | string) => {
    if(typeof element === "number") {
        return element + 5;
    } else {
        return `Welcome ${element}`;
    }
});
console.log(mapNames);
console.log(checkTypeOf);
