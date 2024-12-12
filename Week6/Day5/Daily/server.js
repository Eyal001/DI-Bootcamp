const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.json());
app.use(express.static("public"));

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🐱", name: "Cat" },
];

let playerScore = 0;

const getRandomOptions = () => {
  const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const options = [correctEmoji];

  while (options.length < 4) {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    if (!options.some((option) => option.name === randomEmoji.name)) {
      options.push(randomEmoji);
    }
  }

  options.sort(() => Math.random() - 0.5);

  return { correctEmoji, options };
};

app.get("/game", (req, res) => {
  const { correctEmoji, options } = getRandomOptions();
  res.json({ emoji: correctEmoji.emoji, options });
});

app.post("/submit-guess", (req, res) => {
  const { guess, correctName } = req.body;

  if (guess === correctName) {
    playerScore++;
    res.json({ correct: true, message: "Correct Answer! Well done!" });
  } else {
    res.json({
      correct: false,
      message: `Incorrect, the correct answer was ${correctName}.`,
    });
  }
});

app.get("/score", (req, res) => {
  res.json({ score: playerScore });
});

app.post("/");
