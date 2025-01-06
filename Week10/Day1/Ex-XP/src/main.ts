// ex1
console.log("Hello, World!");

//ex2

let age: number = 26;
let firstname: string = "Eyal";
console.log(age);
console.log(firstname);

// ex3

let id: string | number = 55;

console.log(id);
id = "Israel";

console.log(id);

// ex4

function CheckInput(num: number): string {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  }
  return "Zero";
}

console.log(CheckInput(5));
console.log(CheckInput(-3));
console.log(CheckInput(0));

// ex 5

function getDetails(name: string, age: number): [string, number, string] {
  return [name, age, `Hello ${name}! You are ${age} years old.`];
}
const details = getDetails("Alice", 25);
console.log(details);

// ex 6

type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return { name, age };
}
const person = createPerson("Dan", 22);
console.log(person);

// ex 7

// const inputElement = document.getElementById("element") as HTMLInputElement;

// inputElement.value = "Value of my element";
// console.log(inputElement.value);

// ex 8

function getAction(role: string): string {
  switch (role) {
    case "admin":
      return "Manage users and settings";
    case "editor":
      return "Edit content";
    case "viewer":
      return "View content";
    case "guest":
      return "Limited access";
    default:
      return "Invalid role";
  }
}

console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));

// ex 9

function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
  return "Hello, Guest!";
}
console.log(greet("Alice"));
console.log(greet());
