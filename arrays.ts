// ===== ARRAYS IN TYPESCRIPT =====

// 1. Basic Array Declaration
let names: string[] = ["Maya", "John", "Jane"];
console.log("String array:", names);

// 2. Array Methods
// map() - creates a new array by transforming each element with a callback function
// Basic usage: Convert names to their lengths
let namesLength: number[] = names.map(name => name.length);
console.log("Names length:", namesLength);

// map() with index - second parameter is the current index
const namesWithIndex = names.map((name, index) => `${index + 1}. ${name}`);
console.log("Names with index:", namesWithIndex);

// map() with thisArg - using 'this' context
const user = {
  prefix: 'User:',
  processNames: function(names: string[]) {
    return names.map((name) => {
      return `${this.prefix} ${name.toUpperCase()}`;
    }, this); // 'this' refers to the user object
  }
};
console.log("Processed names with prefix:", user.processNames(names));

// Practical example: Working with array of objects
const users = [
  { id: 1, name: 'Maya', age: 25 },
  { id: 2, name: 'John', age: 30 },
  { id: 3, name: 'Jane', age: 28 }
];

// Extract specific properties
const userNames = users.map(user => user.name);
console.log("User names:", userNames);

// Transform objects
const userDisplay = users.map(user => ({
  userId: user.id,
  fullName: `${user.name} (${user.age} years old)`
}));
console.log("User display info:", userDisplay);

// Chaining map with other array methods
const formattedUsers = users
  .filter(user => user.age > 25)
  .map(user => ({
    ...user,
    name: user.name.toUpperCase(),
    isAdult: user.age >= 18
  }));
console.log("Formatted adult users:", formattedUsers);

// filter() - creates new array with elements that pass test
let filteredNames: string[] = names.filter(name => name.length > 3);
console.log("Filtered names:", filteredNames);

// 3. Different Array Types
// Number array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Number array:", numbers);

// Boolean array
let flags: boolean[] = [true, false, true];
console.log("Boolean array:", flags);

// Mixed type array (union type)
let mixedArray: (string | number)[] = ["Maya", 25, "John", 30];
console.log("Mixed array (string | number):", mixedArray);

// 4. Tuples (Fixed-length arrays with specific types)
// Basic tuple
let person: [string, number] = ["Maya", 25];
console.log("Person tuple:", person);

// Tuple with three elements
let personDetails: [string, number, boolean] = ["Maya", 25, true];
console.log("Person details tuple:", personDetails);

// 5. Array Methods - Part 2
// Adding/Removing Elements
let fruits: string[] = ["apple", "banana"];
fruits.push("orange");      // Add to end
fruits.unshift("kiwi");     // Add to beginning
console.log("After adding elements:", fruits);

let last = fruits.pop();    // Remove from end
let first = fruits.shift(); // Remove from beginning
console.log(`Removed: ${first}, ${last}`);
console.log("After removing elements:", fruits);

// 6. Array Destructuring
const [firstFruit, secondFruit, ...restFruits] = ["apple", "banana", "orange", "mango"];
console.log(`First: ${firstFruit}, Second: ${secondFruit}, Rest: ${restFruits}`);

// 7. Spread Operator
const moreNumbers = [...numbers, 6, 7, 8];
console.log("Spread operator example:", moreNumbers);

// 8. Array Methods - Part 3
// find() - returns first element that passes test
const found = numbers.find(num => num > 3);
console.log("First number > 3:", found);

// some() - tests if any element passes test
const hasEven = numbers.some(num => num % 2 === 0);
console.log("Has even number?", hasEven);

// every() - tests if all elements pass test
const allPositive = numbers.every(num => num > 0);
console.log("All numbers positive?", allPositive);

// 9. Multi-dimensional Arrays
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrix);
const element = matrix[1]?.[2] ?? 'Element not found';
console.log("Element at [1][2]:", element);

// 10. Array Methods - Part 4
// reduce() - reduces array to single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);

// sort() - sorts elements (modifies original array)
const sortedNames = [...names].sort();
console.log("Sorted names:", sortedNames);

// 11. Array Utility Methods
// slice() - returns portion of array (doesn't modify original)
const sliced = numbers.slice(1, 3);
console.log("Sliced array (1-3):", sliced);

// splice() - adds/removes elements (modifies original array)
const removed = numbers.splice(1, 2, 10, 11);
console.log("Removed elements:", removed);
console.log("After splice:", numbers);

// 12. Array.from() - creates array from array-like or iterable
const nameArray = Array.from("Maya");
console.log("Array from string:", nameArray);

// 13. Array.isArray() - checks if value is an array
console.log("Is names an array?", Array.isArray(names));

// 14. forEach() - executes function for each element
console.log("Iterating with forEach:");
names.forEach((name, index) => {
    console.log(`Name at index ${index}: ${name}`);
});

// 15. findIndex() - returns index of first element that passes test
const index = names.findIndex(name => name === "John");
console.log("Index of 'John':", index);

// 16. flat() - flattens nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
const flatArray = nested.flat(2);
console.log("Flattened array:", flatArray);

// 17. flatMap() - maps then flattens result
const phrases = ["hello world", "goodbye moon"];
const words = phrases.flatMap(phrase => phrase.split(" "));
console.log("FlatMapped words:", words);

// 18. Readonly Arrays
const readOnlyNames: readonly string[] = ["Alice", "Bob"];
// readOnlyNames.push("Charlie"); // Error: Property 'push' does not exist on type 'readonly string[]'

// 19. Type Aliases for Arrays
type StringArray = string[];
const colors: StringArray = ["red", "green", "blue"];
console.log("Colors array:", colors);

// 20. Array Length and Indexing
console.log(`Number of names: ${names.length}`);
console.log(`First name: ${names[0]}`);
console.log(`Last name: ${names[names.length - 1]}`);

// ===== END OF ARRAYS TUTORIAL =====
