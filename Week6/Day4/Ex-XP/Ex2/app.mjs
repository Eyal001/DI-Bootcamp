import people from "./data.mjs";

function calculateAverageAge(people) {
  if (people.length === 0) {
    console.log("No people in the list.");
    return;
  }
  const totalAge = people.reduce((sum, person) => (sum += person.age), 0);
  const averageAge = totalAge / people.length;
  console.log(`The average age of people is: ${averageAge.toFixed(2)} years.`);
  return averageAge;
}
calculateAverageAge(people);
