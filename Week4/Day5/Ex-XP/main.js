const sidebar = document.getElementById("sidebar");
let selectedColor = "";
const colors = [
  "red",
  "orangered",
  "orange",
  "yellow",
  "yellowgreen",
  "lightgreen",
  "green",
  "turquoise",
  "cyan",
  "lightskyblue",
  "dodgerblue",
  "blue",
  "darkblue",
  "indigo",
  "darkmagenta",
  "violet",
  "lightpink",
  "lightgray",
  "gray",
  "black",
  "white",
];
colors.forEach((color) => {
  const square = document.createElement("div");
  const className = square.classList.add("carre");
  square.style.backgroundColor = color;
  square.style.width = "100%";
  square.style.height = "100px";
  square.style.display = "block";
  square.style.border = "1px solid black";
  square.style.borderRadius = "12px";
  square.style.cursor = "pointer";
  square.addEventListener("click", () => {
    selectedColor = square.style.backgroundColor;
  });

  sidebar.appendChild(square);
});
let isMouseDown = false;
const squaresGrid = 6000;
const grid = document.getElementById("grid");
for (let i = 0; i < squaresGrid; i++) {
  const miniSquare = document.createElement("div");
  miniSquare.style.backgroundColor = "white";
  miniSquare.style.border = "1px solid lightgray";
  grid.appendChild(miniSquare);
  miniSquare.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
  miniSquare.addEventListener("mousedown", () => {
    miniSquare.style.backgroundColor = selectedColor;
    isMouseDown = true;
  });
  miniSquare.addEventListener("mouseover", () => {
    if (isMouseDown) {
      miniSquare.style.backgroundColor = selectedColor;
    }
  });
}
document.getElementById("clear").addEventListener("click", () => {
  const miniSquares = grid.querySelectorAll("div");
  miniSquares.forEach((miniSquare) => {
    miniSquare.style.backgroundColor = "white";
  });
});
