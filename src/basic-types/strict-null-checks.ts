// Example 1: Basic null assignment - FIXED
// let username: string = null; // This would cause an error
let username: string | null = null; // Correct way with union type

// Example 2: Correct way with union type - already correct
let username2: string | null = null;
username2 = "Alice";

// Example 3: Optional parameters
function greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}`);
}

// greet(null); // This would cause an error
greet("Alice"); // Correct way

// Example 4: Optional properties in interfaces
interface User {
    id: number;
    name: string;
    email?: string; // Optional property (string | undefined)
}

const user1: User = {
    id: 1,
    name: "Alice"
    // email is optional, so this is fine
};

// Example 5: Type guards
function printName(user: User | null) {
    if (user === null) {
        console.log("No user provided");
    } else {
        console.log(user.name); // TypeScript knows user is not null here
    }
}

// Example 6: Non-null assertion operator (use with caution!)
let maybeName: string | null = "Bob";
let nameLength = maybeName!.length; // We're telling TypeScript we know it's not null

// Example 7: Type assertion
let userInput: unknown = "Hello";
let strLength: number = (userInput as string).length;
