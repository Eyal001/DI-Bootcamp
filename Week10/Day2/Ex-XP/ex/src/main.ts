// ex 1

class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(
    name: string,
    salary: number,
    postion: string,
    department: string
  ) {
    this.name = name;
    this.salary = salary;
    this.position = postion;
    this.department = department;
  }

  getEmployeeInfo(): string {
    return `Employee: ${this.name}, Position: ${this.position}`;
  }
}

const employee = new Employee("John", 5000, "Web Developer", "Engeneering");
console.log(employee.getEmployeeInfo());

// ex 2

class Product {
  readonly id: number;
  public name: string;
  public price: Number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  getProductInfo(): string {
    return `Product: ${this.name} costs $${this.price}`;
  }
}

const product = new Product(1, "Laptop", 1000);
console.log(product.getProductInfo());

// product.id = 12  gives me this error : Cannot assign to 'id' because it is a read-only property

// ex 3

class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): string {
    return "Some generic animal sound";
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): string {
    return "Bark";
  }
}

const dog = new Dog("Mickey");
console.log(dog.makeSound());

// ex 4

class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }
  static substract(a: number, b: number): number {
    return a - b;
  }
}

console.log(Calculator.add(5, 3));
console.log(Calculator.substract(5, 3));

// ex 5

interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(`User Details: 
    ID: ${user.id},
    Name: ${user.name},
    Email: ${user.email},
    Membership Level: ${user.membershipLevel || "NONE"}`);
}

const premiumUser: PremiumUser = {
  id: 1,
  name: "John",
  email: "John@email.com",
  membershipLevel: "Platinum",
};
printUserDetails(premiumUser);
