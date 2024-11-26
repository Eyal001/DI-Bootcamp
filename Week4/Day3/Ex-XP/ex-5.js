const container = document.getElementById("container");
console.log(container);

const fstList = document.querySelectorAll(".list")[0];
const scdList = document.querySelectorAll(".list")[1];

const peteToRichard = fstList.querySelector("li:nth-child(2)");
peteToRichard.textContent = "Richard";

const scdElem = scdList.querySelector("li:nth-child(2)");

scdElem.remove();

const liFromFstUl = fstList.querySelector("li:nth-child(1)");
const liFromScdUl = scdList.querySelector("li:nth-child(1)");

liFromFstUl.textContent = "Eyal";
liFromScdUl.textContent = "Eyal";

fstList.classList.add("student_list");
scdList.classList.add("student_list");

fstList.classList.add("university");
fstList.classList.add("attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "20px";

const danLi = scdList.querySelector("li:last-child");
danLi.style.display = "none";

const richard = fstList.querySelector("li:nth-child(2)");
richard.style.border = "3px solid black ";

document.body.style.fontSize = "28px";
