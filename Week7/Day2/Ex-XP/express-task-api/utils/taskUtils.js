const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "../data/tasks.json");

const readTasksFromFile = () => {
  try {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading tasks from file", error);
    return [];
  }
};

const writeTaskToFile = (tasks) => {
  try {
    fs.writeFileSync(filepath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error("Error writing tasks to file", error);
  }
};

module.exports = { readTasksFromFile, writeTaskToFile };
