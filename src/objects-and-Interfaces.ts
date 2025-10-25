// How to declare interface(car)
interface Car{
    type: string;
    model: string;
    color: string;
    horsePower: number;
}


// How to declare object with interface(car)
const car: Car = {
    type: "Honda",
    model: "HR-V",
    color: "grey",
    horsePower: 120,
};

// console.log(car);

// How to declare object with interface(person)
interface Person{
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    hobbies: string[];
    greetings: () => string;
}

// How to declare object with method and array value
const person: Person = {
    firstName: "Maya",
    lastName: "Mladenova",
    age: 35,
    address: "Sofia, ul. Vasil Levski 123",
    hobbies: ["running", "traveling", "cooking"],
    greetings: function(){
        return "Hello, my name is " + this.firstName + " " + this.lastName;
    },
};

// How to access object properties:
person.lastName;
person.age;
person.firstName;
person["address"]

person.greetings();
person["greetings"]();

// How to update object properties:
person.firstName = "Yana";
person["age"] = 36;
//console.log(person);


// How to declare explice object type
const mouse: {name: string, favFood: string, age: number, city: string} = {
    name: "Jerry",
    favFood: "cheese",
    age: 3,
    city: "Sofia",
};

//console.log(mouse);

// Interface - optional parameters, read only and string literal types
interface User {
    name: string;
    email: string;
    role: string;
    // optional parameter
    job?: string;
    password?: string | number;
}
const user: User = {
    name: 'Marko',
    email: 'markotester@gmail.com',
    role: 'admin',
};

user.password = 'testing';
console.log(user);


// How to extend interface
interface userPermissions extends User {
    permissions: string[];
}

const userPermissions: userPermissions = {
    name: 'Marko',
    email: 'markotester@gmail.com',
    role: 'admin',
    permissions: ['read', 'write', 'delete']
};
console.log(userPermissions);