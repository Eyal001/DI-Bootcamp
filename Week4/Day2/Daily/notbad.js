let sentence = "This dinner is not that bad ! You cook well";

let WordNot = sentence.indexOf("not");
let WordBad = sentence.indexOf("bad");

if (WordBad > WordNot && WordBad != -1 && WordNot != -1) {
  WordGood = "good";
  sentence =
    sentence.substring(0, WordNot) + WordGood + sentence.substring(WordBad + 3);
}
console.log(sentence);
