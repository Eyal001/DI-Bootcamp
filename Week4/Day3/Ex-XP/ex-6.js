const div = document.getElementById("navBar");
div.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const newTextNode = document.createTextNode("Logout");

newLi.appendChild(newTextNode);

const ul = document.querySelector("ul");
ul.appendChild(newLi);

const fstElem = ul.firstElementChild;
const scdElem = ul.lastElementChild;

console.log(fstElem.textContent);
console.log(scdElem.textContent);
