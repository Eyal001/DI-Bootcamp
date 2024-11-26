const solarSystem = [
  {
    name: "Mercury",
    color: "gray",
  },
  {
    name: "Venus",
    color: "yellow",
  },
  {
    name: "Earth",
    color: "blue",
  },
  {
    name: "Mars",
    color: "red",
  },
  {
    name: "Jupiter",
    color: "orange",
  },
  {
    name: "Saturn",
    color: "goldenrod",
  },
  {
    name: "Uranus",
    color: "lightblue",
  },
  {
    name: "Neptune",
    color: "darkblue",
  },
];

const sectionPlanet = document.querySelector(".listPlanets");
solarSystem.forEach((planet) => {
  const div = document.createElement("div");
  div.classList.add("planet");
  div.style.backgroundColor = planet.color;
  div.textContent = planet.name;

  sectionPlanet.appendChild(div);
});
