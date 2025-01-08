// ex 1

// type Person = {
//   name: string;
//   age: number;
// };

// type Address = {
//   street: string;
//   city: string;
// };

// type PersonWithAddress = Person & Address;

// const personWithAddress: PersonWithAddress = {
//   name: "David",
//   age: 32,
//   street: "Shlomo Amelekh",
//   city: "Haifa",
// };

// console.log(personWithAddress);

// ex 2

function describeValue(value: number | string): string {
  if (typeof value === "number") {
    return "This is a number";
  }
  return "This is a string";
}

console.log(describeValue("Hello"));
console.log(describeValue(123));

// ex 3
let num: any = 12;
let str: string = num as string;
console.log(str);

// ex 4

function getFirstElement(arr: (string | number)[]): string {
  return arr[0] as string;
}

console.log(getFirstElement(["Hello", 123]));
console.log(getFirstElement([123, "Hello"]));

// ex 5

function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}
logLength("Hello");
logLength([1, 2, 3]);

// ex 6

type Person = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
  if (employee.position === "Manager") {
    return `${employee.name} is a Manager in the ${employee.department} department.`;
  } else if (employee.position === "Developer") {
    return `${employee.name} is a Developer in the ${employee.department} department.`;
  }
  return `${employee.name} works in the ${employee.department} department.`;
}

const manager: Employee = {
  name: "Alice",
  age: 40,
  position: "Manager",
  department: "HR",
};
const developer: Employee = {
  name: "Bob",
  age: 30,
  position: "Developer",
  department: "Engineering",
};
console.log(describeEmployee(manager));
console.log(describeEmployee(developer));

// ex 7

function formatInput<T extends { toString(): string }>(input: T): string {
  return input.toString();
}
console.log(formatInput(42));
console.log(formatInput(true));
