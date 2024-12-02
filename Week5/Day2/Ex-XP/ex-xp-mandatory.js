// ex1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element, index) => {
  console.log(`${index + 1}# choice is ${element}.`);
});

if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}

// ex2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

function getOrdinal(index) {
  if (index >= 10 && index <= 20) {
    return "th";
  }
  return ordinal[index % 10 > 3 ? 0 : index % 10];
}

colors.forEach((color, index) => {
  let ordinal = getOrdinal(index + 1);
  console.log(`${index + 1}${ordinal} choice is ${color}.`);
});

// ex3

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ["bread", ...vegetables, "chicken", ...fruits];
// console.log(result);

// outcome: result = ['bread', "carrot", 'potato', 'chicken', 'apple', 'orange']

// ------2------
// const country = "USA";
// console.log([...country]);
// outcome: ['U', 'S', 'A']
//
// ex4
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
// 1.
const welcomeStudents = users.map((user) => `Hello ${user.firstName}`);
console.log(welcomeStudents);
// 2.
const fullStackResident = users.filter(
  (user) => user.role === "Full Stack Resident"
);
console.log(fullStackResident);
// 3.
const lastNamesFullStackResidents = users
  .filter((user) => user.role === "Full Stack Resident")
  .map((user) => user.lastName);

console.log(lastNamesFullStackResidents);

// ex5
const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

const str = epic.reduce((acc, curr) => `${acc} ${curr}`);
console.log(str);

//ex6

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

const passedStudent = students.filter((student) => student.isPassed === true);
console.log(passedStudent);

const congratMessage = passedStudent.map(
  (student) =>
    `Good job ${student.name} you passed the course in ${student.course}`
);

console.log(congratMessage);
