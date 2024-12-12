let correctName = "";
let playerScore = 0;

const emojiContainer = document.getElementById("emoji");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

const fetchGameData = async () => {
  try {
    const response = await fetch("/game");
    const data = await response.json();
    const emoji = data.emoji;
    const options = data.options;

    emojiContainer.textContent = emoji;

    optionsContainer.innerHTML = "";
    options.forEach((option) => {
      const btn = document.createElement("button");
      btn.textContent = option.name;
      btn.onclick = () => {
        handleGuess(option.name, emoji);
        optionsContainer.querySelectorAll("button").forEach((button) => {
          button.disabled = true;
        });
      };
      optionsContainer.appendChild(btn);
    });

    const correctOption = options.find((option) => option.emoji === emoji);
    if (correctOption) {
      correctName = correctOption.name;
    } else {
      console.error("Emoji not found in options.");
    }
  } catch (error) {
    console.error("Error fetching game data:", error);
  }
};

const handleGuess = async (guess, emoji) => {
  try {
    const response = await fetch("/submit-guess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ guess, correctName }),
    });

    const data = await response.json();
    alert(data.message);

    if (data.correct) {
      playerScore++;
    }

    scoreElement.textContent = `Score: ${playerScore}`;
  } catch (error) {
    console.error("Error submitting guess:", error);
    alert("An error occurred while submitting your guess. Please try again.");
  }
};

document.addEventListener("DOMContentLoaded", fetchGameData);

nextBtn.onclick = fetchGameData;
