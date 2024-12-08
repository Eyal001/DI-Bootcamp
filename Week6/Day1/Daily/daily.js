// ex 1

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every((word) => typeof word === "string")) {
      const upperCasedWords = words.map((word) => word.toUpperCase());
      resolve(upperCasedWords);
    } else {
      reject("Not all elements in the array are strings");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      const sortedWords = words.sort();
      resolve(sortedWords);
    } else {
      reject("The array doesn't have more than 4 words");
    }
  });
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));

// ex 2
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;
function toJs() {
  return new Promise((resolve, reject) => {
    const morseObj = JSON.parse(morse);
    if (Object.keys(morseObj).length === 0) {
      reject("The morse object is empty.");
    } else {
      resolve(morseObj);
    }
  });
}

function toMorse(morseObj) {
  return new Promise((resolve, reject) => {
    const userInput = prompt(
      "Enter a word or a sentence to translate to Morse: "
    ).toLowerCase();
    const translationCode = [];
    for (let char of userInput) {
      if (morseObj[char]) {
        translationCode.push(morseObj[char]);
      } else {
        reject(`the character ${char} is not in the Morse object`);
      }
    }
    resolve(translationCode);
  });
}

function joinWords(morseTranslation) {
  return new Promise((resolve, reject) => {
    const morseOutput = morseTranslation.join("\n");
    console.log(morseOutput);
    resolve(morseOutput);
  });
}
toJs()
  .then((morseJS) => toMorse(morseJS))
  .then((morseTranslation) => joinWords(morseTranslation))
  .catch((error) => console.error(error));
