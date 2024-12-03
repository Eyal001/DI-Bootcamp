const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);
// this will extract the values of the 'person' object with destructuring  so it will print all the values from the person object

// ex 2

function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({ first: "Elie", last: "Schoppik" });

// ex 3

const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);
console.log(usersArray);
const updatedAarray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(updatedAarray);

//ex 4

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member); // It will return Object

// ex 5

// 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// }

// ex 6

// [2] === [2] False : two different instances and different references in memory so they're not equal.
// {} === {} : Same

// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5 };

// object1.number = 4; // Here the object1 and all objects which have the same reference as object1 will to change
// console.log(object2.number); //Output : 4 Same reference to object1
// console.log(object3.number); //Output : 4 Same reference to Object2 so the same as Object 1
// console.log(object4.number); //Output : 5 Not the same reference, it has its own value which already defined

// 2.

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound(soundType) {
    return `${soundType} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Mooooo"));
