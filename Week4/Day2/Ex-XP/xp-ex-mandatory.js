//ex1

const people = ["Greg", "Mary", "Devon", "James"];
// people.splice(0, 1);
// console.log(people);

// people.splice(2, 1, "Jason");
// console.log(people);

// people.push("Eyal");
// console.log(people);

// const marysIndex = people.indexOf("Mary");
// console.log(marysIndex);

// sliced_arr = people.slice(1, -1);
// console.log(sliced_arr);

// const indexFoo = people.indexOf("Foo");
// console.log(indexFoo); // It's the default return value of the method when the paramater is not in the array

// const lastElement = people[people.length - 1];
// console.log(lastElement);

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// for (let i = 0; i < people.length; i++) {
//   if (people[i] == "Devon") break;

//   console.log(people[i]);
// }

// ex2

// const colors = ["Blue", "Red", "Yellow", "Brown", "Green"];
// const suffixes = ["st", "nd", "rd"];

// for (let i = 0; i < colors.length; i++) {
//   suffixe = suffixes[i];
//   if (i >= 3) suffixe = "th";
//   console.log("My " + (i + 1) + suffixe + " choice is " + colors[i]);
// }

// ex3

// userPhoneNum = prompt("Please type your phone number:");

// while (userPhoneNum < 10) {
//   console.log("Please try again, the number is smaller than 10");
//   userPhoneNum = prompt("Type your phone number again");
// }

// console.log(typeof userPhoneNum); // string

// ex4
// const building = {
//   numberOfFloors: 4,
//   numberOfAptByFloor: {
//     firstFloor: 3,
//     secondFloor: 4,
//     thirdFloor: 9,
//     fourthFloor: 2,
//   },
//   nameOfTenants: ["Sarah", "Dan", "David"],
//   numberOfRoomsAndRent: {
//     sarah: [3, 990],
//     dan: [4, 1000],
//     david: [1, 500],
//   },
// };
// console.log(building.numberOfFloors);

// console.log(building.numberOfAptByFloor.firstFloor);
// console.log(building.numberOfAptByFloor.thirdFloor);

// console.log(building.nameOfTenants[1]);
// console.log(building.numberOfRoomsAndRent.dan[0]);

// const sarahRent = building.numberOfRoomsAndRent.sarah[1]
// const danRent = building.numberOfRoomsAndRent.dan[1]
// const davidRent = building.numberOfRoomsAndRent.david[1]

// if ((sarahRent + davidRent) > danRent){
//   building.numberOfRoomsAndRent.dan[1] = 1200
// }
// console.log(building.numberOfRoomsAndRent.dan[1])

// ex5

// const family = {
//   father: "John",
//   mother: "Sandra",
//   child: "Tom",
// };

// for (let key in family) {
//   console.log(key);
// }

// for (let key in family) {
//   console.log(family[key]);
// }

// ex6

// const details = {
//   my: "name",
//   is: "Rudolf",
//   the: "reindeer",
// };
// sentence = "";
// for (let key in details) {
//   sentence += key + " ";
//   sentence += details[key] + " ";
// }
// console.log(sentence);

// ex7

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// firstLetters = names.map((name) => name[0]);
// firstLetters.sort();
// const societyName = firstLetters.join("");
// console.log(societyName);
