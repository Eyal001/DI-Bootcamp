// function winBattle(){
//   return true;
// }
// ex2
winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// ex3
const isString = (value) => typeof value === "string";

console.log(isString("hello"));
console.log(isString([1, 2, 3, 4]));

// ex4

const sum = (a, b) => a + b;
console.log(sum(2, 4));

// ex5

function kgToGrams(kg) {
  return kg * 1000;
}
console.log(kgToGrams(5));
const kgToGrams = function (kg) {
  return kg * 1000;
};
console.log(kgToGrams(5));

const kgToGrams = (kg) => kg * 1000;
console.log(kgToGrams(5));

// ex6

(function (nbChildren, partnerName, geoLoc, jobTitle) {
  paragraph = document.createElement("p");
  paragraph.innerText = `You will be a ${jobTitle} in ${geoLoc}, and married to ${partnerName} with ${nbChildren} kids.`;
  document.body.appendChild(paragraph);
})(5, "Jessica", "Tel Aviv", "Fullstack Devlopper");

// ex7

(function (username) {
  const navBar = document.getElementById("navbar");
  const myDiv = document.createElement("div");
  const profilePicture = document.createElement("img");
  profilePicture.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAppmGh87qQmWRfMPuieELLHz_2WdTbq7CQ&s";
  profilePicture.style.display = "flex";

  const userElem = document.createElement("p");
  userElem.textContent = `Welcome, ${username}`;

  myDiv.appendChild(profilePicture);
  myDiv.appendChild(userElem);
  navBar.appendChild(myDiv);
})("Eyal");

// ex8
function makeJuice(sizeDrink) {
  let ingredients = [];
  function addIngredients(ingredient1, ingredient2, ingredient3) {
    ingredients.push(ingredient1, ingredient2, ingredient3);
  }
  function displayJuice() {
    paragraph = document.createElement("p");
    paragraph.innerText = `The client wants a ${sizeDrink} juice, containing ${ingredients.join(
      ", "
    )}`;
    document.body.appendChild(paragraph);
  }
  addIngredients("apple", "banana", "orange");
  addIngredients("strawberry", "kiwi", "mango");

  displayJuice();
}
makeJuice("large");
