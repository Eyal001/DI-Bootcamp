window.onload = function () {
  document.getElementById("button").addEventListener("click", fetchData);
};

const fetchData = async () => {
  let num = Math.floor(Math.random() * (83 - 1) + 1);
  let characterInfoElement = document.getElementById("characterInfo");
  let loadingElement = document.getElementById("loading");

  characterInfoElement.innerHTML = `
      <div id="loading">
        <i class="fa-solid fa-spinner fa-spin-pulse"></i> Loading...
      </div>`;

  try {
    const response = await fetch(`https://www.swapi.tech/api/people/${num}`);
    if (!response.ok) {
      throw new Error(`Http error! Status: ${response.status}`);
    }
    const data = await response.json();
    const character = data.result.properties;
    const homeWorldUrl = character.homeworld;

    const homeWorldResp = await fetch(homeWorldUrl);
    if (!homeWorldResp.ok) {
      throw new Error(
        `Http error while fetching homeworld! Status: ${homeWorldResp.status}`
      );
    }
    const planetData = await homeWorldResp.json();
    const planetName = planetData.result.properties.name;

    const characterHTML = `
      <h1>${character.name}</h1>
      <p><strong>Height:</strong> ${character.height} cm</p>
      <p><strong>Gender:</strong> ${character.gender}</p>
      <p><strong>Birth Year:</strong> ${character.birth_year}</p>
      <p><strong>Home World:</strong> ${planetName}</p>
    `;
    characterInfoElement.innerHTML = characterHTML;
  } catch (error) {
    characterInfoElement.innerHTML = `<p> oh No! That person isnt available</p>`;
  }
};
