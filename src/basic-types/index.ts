// Print a welcome message to the console
console.log("Hello World");

// Declare a variable that can be reassigned
let firstName = '';
// Declare a constant (cannot be reassigned)
const age = 25;
// Print the values to the console
console.log(firstName);
console.log(age);

// TypeScript will infer the types automatically, but we can explicitly declare them:
 let name: string = "Maya";
 //const age: number = 25;
 console.log(name);

// Boolean type - stores true/false values
let isTrue: boolean = 5 > 7;  // false, because 5 is not greater than 7
console.log("Boolean example:", isTrue);

// Null type - represents the intentional absence of any object value
let sinder: null = null;  // explicitly set to null
console.log("Null example:", sinder);

// Undefined type - variable declared but not assigned a value
let undefinedValue: undefined; // type is 'undefined' and value is 'undefined'
console.log("Undefined example:", undefinedValue);

// Any type - disables type checking for this variable
let street: any = "Main Street";  // can be reassigned to any type
console.log("Any type example:", street);

// Unknown type - similar to 'any' but type-safe, needs type checking before use
let postelCode: unknown = 12345;
console.log("Unknown type example:", postelCode);

// Array of strings - fixed type array
let names: string[] = ["Maya", "John", "Jane"];
console.log("String array:", names);

// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Number array:", numbers);

// Array of booleans
let flags: boolean[] = [true, false, true];
console.log("Boolean array:", flags);

// Array with 'any' type - can contain any type of elements
let mixedArray: any[] = [1, "Maya", true];
console.log("Mixed array (any type):", mixedArray);

// Union type array - can contain strings or numbers
let nameAgeArray: (string | number)[] = ["Maya", 25, "John", 30];
console.log("Union type array (string | number):", nameAgeArray);

// Tuple - fixed-length array where each position has a specific type
let person: [string, number] = ["Maya", 25];  // name (string) and age (number)
console.log("Simple tuple (name, age):", person);

// Tuple with three elements
let personDetails: [string, number, boolean] = ["Maya", 25, true];  // name, age, isActive
console.log("Tuple with boolean:", personDetails);

// Another tuple example with different types
let familyMember: [string, string, number] = ["Maya", "John", 25];  // name, relation, age
console.log("Family member tuple:", familyMember);

// ===== LOGICAL OPERATORS =====
console.log("\n===== LOGICAL OPERATORS =====");

/**
 * LOGICAL AND (&&)
 * Returns the first falsy value or the last truthy value if all are truthy
 * Only evaluates the second operand if necessary (short-circuit evaluation)
 */
console.log("\n1. Logical AND (&&):");
console.log("true && true =", true && true);      // true (both are true)
console.log("true && false =", true && false);    // false (second is false)
console.log("false && true =", false && true);    // false (first is false, second not evaluated)
console.log("false && false =", false && false);  // false (first is false, second not evaluated)
console.log("1 && 0 =", 1 && 0);                  // 0 (first is truthy, returns second)
console.log("1 && 'hello' =", 1 && 'hello');      // 'hello' (both are truthy, returns last)

/**
 * LOGICAL OR (||)
 * Returns the first truthy value or the last falsy value if all are falsy
 * Only evaluates the second operand if necessary (short-circuit evaluation)
 */
console.log("\n2. Logical OR (||):");
console.log("true || true =", true || true);      // true (first is true, second not evaluated)
console.log("true || false =", true || false);    // true (first is true, second not evaluated)
console.log("false || true =", false || true);    // true (second is true)
console.log("false || false =", false || false);  // false (both are false)
console.log("0 || 'default' =", 0 || 'default');  // 'default' (first is falsy, returns second)

/**
 * LOGICAL NOT (!)
 * Converts the operand to boolean and returns the inverse
 */
console.log("\n3. Logical NOT (!):");
console.log("!true =", !true);        // false (inverts true to false)
console.log("!false =", !false);      // true (inverts false to true)
console.log("!0 =", !0);              // true (0 is falsy, inverts to true)
console.log("!1 =", !1);              // false (1 is truthy, inverts to false)
console.log("Boolean('hello') =", Boolean('hello')); // true (non-empty string)
