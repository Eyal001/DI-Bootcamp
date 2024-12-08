const cleanAndSort = (word) => {
  return word.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
};

const isAnagram = (word1, word2) => {
  return cleanAndSort(word1) === cleanAndSort(word2);
};

console.log(isAnagram("The Morse Code", "Here come dots")); // true
