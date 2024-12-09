// ex 1

fetch(
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    console.log(data);
    console.log(`Here's the Gif: ${data}`);
  })
  .catch(function (error) {
    console.log(`We got the error ${error}`);
  });
console.log("Work Done ...");

// ex 2

fetch(
  "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=1"
)
  .then((reponse) => {
    if (reponse.ok) {
      return reponse.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    console.log("Results for 'sun' starting from the second position: ");
    console.log(data.data);
  })
  .catch((error) => console.log(error))
  .finally(console.log("Request sent..."));

// ex 3

const getStarship = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
  } catch (error) {
    console.log("Error occured: ", error);
  }
};
getStarship();

// ex 4

// The code should print "calling" immediately, and after 2 seconds, it should print "resolved".
