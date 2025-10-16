// Functions
// 1. Function Declaration
function greet(name: string): string {
    return `Hello, ${name}!`;
}
// Function call
greet("Maya")

function displaPersonalData(name: string, age: number): string {
    return `My name is ${name} and I am ${age} years old.`;
}
console.log(displaPersonalData("Maya", 25 ));

const personalData: string = displaPersonalData("Tester", 35);
console.log(personalData);

function greatingVoid(): void {
    console.log("Hello, void!");
}
    greatingVoid();

    function devideNumbers(a: number, b: number): number {
        return a / b;
    }
    console.log(devideNumbers(10, 2));

    // Arrow Function
const add = (a: number, b: number): number => {
    return a + b;
};
    console.log(add(10, 2));

    // short version of arrow function
    const sub = (a: number, b: number): number => a - b;
    console.log(sub(10, 2));

    //mutiple parameters function with 2 different types
       /**
     * Greets a person by name and optionally includes their age in the greeting.
     * 
     * @param {string} name - The name of the person to greet (required)
     * @param {number} [age] - The age of the person (optional)
     * @returns {string} A greeting message
     * 
     * @example
     * // Returns "Hello, Maya! You are 35 years old."
     * greetA("Maya", 35);
     * 
     * @example
     * // Returns "Hello, Maya!"
     * greetA("Maya");
     */
    function greetA(name: string, age?: number): string {
        // Check if age is provided (not undefined, null, 0, or empty string)
        if (age) {
            // If age exists, return greeting with name and age
            return `Hello, ${name}! You are ${age} years old.`;
        }
        // If no age is provided, return greeting with just the name
        return `Hello, ${name}!`;
    }
    
    // Example usage:
    console.log(greetA("Maya", 35));  // With age
    console.log(greetA("Maya"));      // Without age
    
    // Note about the age check:
    // The condition `if (age)` will be false for:
    // - undefined (when age is not provided)
    // - null
    // - 0
    // - "" (empty string)
    // - false
    // - NaN

    // optional parameters function with default value
    function greetB(name: string, age?: number): string {
        if (age) {
            return `Hello, ${name}! You are ${age} years old.`;
        }
        return `Hello, ${name}!`;
    }
        