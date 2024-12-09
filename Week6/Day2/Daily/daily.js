const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const gifContainer = document.getElementById("gif-container");
const form = document.getElementById("gif");
const deleteAll = document.getElementById("deleteAll");

const createElement = (url, category) => {
  const gifDiv = document.createElement("div");
  const gifImg = document.createElement("img");
  gifImg.src = url;
  gifImg.alt = category;
  gifImg.width = 300;
  gifImg.height = 300;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => gifDiv.remove();
  gifDiv.appendChild(gifImg);

  return gifDiv;
};

const fetchGif = async (category) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${category}&rating=g&api_key=${apiKey}&limit=1`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch gif.");
    }
    const data = await response.json();

    if (data.data.length === 0) {
      throw new Error("No GIFs found for this category.");
    }

    const url = data.data[0].images.original.url;
    const gifElement = createElement(url, category);
    gifContainer.appendChild(gifElement);
  } catch (error) {
    console.log("Error occured: ", error);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const categoryInput = document.getElementById("fetchCat");
  const category = categoryInput.value;
  if (category) {
    fetchGif(category);
  }
  categoryInput.value = "";
});

deleteAll.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
