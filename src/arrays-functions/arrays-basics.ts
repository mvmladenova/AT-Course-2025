// // Basic Arrays and operations with them

// // 1. Array Declaration : Number Array
let number: number [] = [1, 2, 3, 4, 5];
console.log(number);

// // 2. Array Declaration : String Array
let names: string [] = ["Maya", "John", "Jane"];
console.log(names); 

// // 3. Array Declaration : Mixed Array (Number and String)
 let mixed: (number | string) [] = [1, "Maya", 2, "John", 3, "Jane"];
console.log(mixed);

// // 4. Array Declaration : Tuple
let tuple: [number, string] = [1, "Maya"];
console.log(tuple);

// // Accessing Array Elements
console.log("\n--- Accessing Array Elements ---");

// // 1. Accessing by index (0-based) console.log("First number:", number[0]);  // 1
console.log("Second name:", names[1]);    // "John"

// // 2. Accessing the last element
console.log("Last number:", number[number.length - 1]);  // 5
console.log("Last name:", names[names.length - 1]);      // "Jane"

// // 3. Accessing tuple elements
console.log("Tuple first element (number):", tuple[0]);  // 1
console.log("Tuple second element (string):", tuple[1]); // "Maya"

// // 4. Accessing mixed array elements
console.log("First element (number):", mixed[0]);  // 1
console.log("Second element (string):", mixed[1]); // "Maya"

// // 5. Iterating through arrays
console.log("\n--- Iterating Through Arrays ---");
console.log("Numbers:");
for (let i = 0; i < number.length; i++) {
    console.log(`  number[${i}]:`, number[i]);
}

console.log("\nNames:");
for (const name of names) {
    console.log("  ", name);
}

// // 6. Using forEach
console.log("\nMixed array elements:");
mixed.forEach((item, index) => {
    console.log(`  mixed[${index}]:`, item, `(type: ${typeof item})`);
});

// // 7. Array destructuring
const [firstNumber, secondNumber] = number;
console.log("\nDestructured first two numbers:", firstNumber, secondNumber);

const [firstName, ...otherNames] = names;
console.log("First name:", firstName);
console.log("Other names:", otherNames);

// 8. Checking if an element exists
console.log("\n--- Checking Elements ---");
console.log("Is 'Maya' in names?", names.includes("Maya"));  // true
console.log("Is index 2 in numbers?", 2 in number);           // true

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
console.log(multiplyNums);


// method filter
const words: string[] = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const filteredWords = words.filter((word) => word.length > 6);
console.log(filteredWords);

//method sort()
const months: string[] = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const arr1: number[] = [1, 30, 4, 21, 100000];
arr1.sort();
console.log(arr1);

// method push() - adds one or more elements to the end of an array and returns the new length
const fruits: string[] = ['apple', 'banana'];
console.log('\n--- push() Method ---');
console.log('Original array:', fruits);

// Add single element
const newLength = fruits.push('orange');
console.log('After push(\'orange\'):', fruits);
console.log('New length:', newLength);

// Add multiple elements
fruits.push('mango', 'grape');
console.log('After push(\'mango\', \'grape\'):', fruits);

// Push returns the new array length
const anotherLength = fruits.push('kiwi', 'pineapple', 'pear');
console.log('After pushing 3 more fruits:', fruits);
console.log('New array length:', anotherLength);

// Push with spread operator
const moreFruits = ['watermelon', 'peach'];
fruits.push(...moreFruits);
console.log('After pushing with spread operator:', fruits);

// method pop() - removes the last element from an array and returns it
const fruitsPop: string[] = ['apple', 'banana', 'orange'];
console.log('\n--- pop() Method ---');
console.log('Original array:', fruitsPop);
const removedFruitPop = fruitsPop.pop();
console.log('After pop():', fruitsPop);
console.log('Removed fruit:', removedFruitPop);

// method shift() - removes the first element from an array and returns it
const fruitsShift: string[] = ['apple', 'banana', 'orange'];
console.log('\n--- shift() Method ---');
console.log('Original array:', fruitsShift);
const removedFruitShift = fruitsShift.shift();
console.log('After shift():', fruitsShift);
console.log('Removed fruit:', removedFruitShift);

// method unshift() - adds one or more elements to the beginning of an array
const fruitsUnshift: string[] = ['apple', 'banana', 'orange'];
console.log('\n--- unshift() Method ---');
console.log('Original array:', fruitsUnshift);
const newLengthUnshift = fruitsUnshift.unshift('kiwi', 'mango');
console.log('After unshift():', fruitsUnshift);
console.log('New length:', newLengthUnshift);

// method slice() - returns a shallow copy of a portion of an array
const fruitsSlice: string[] = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log('\n--- slice() Method ---');
console.log('Original array:', fruitsSlice);
const slicedFruits = fruitsSlice.slice(1, 3);
console.log('Sliced array (index 1 to 3, not including 3):', slicedFruits);
console.log('Original array remains unchanged:', fruitsSlice);

// Additional slice examples
console.log('\n--- More slice() Examples ---');
console.log('Slice from index 2:', fruitsSlice.slice(2));
console.log('Last two fruits:', fruitsSlice.slice(-2));
console.log('Copy of array:', fruitsSlice.slice());