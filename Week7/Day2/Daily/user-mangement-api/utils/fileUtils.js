const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "../data/users.json");
const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync(filepath, "utf-8");
    if (!data.trim()) {
      return [];
    }
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading users file", error);
    return [];
  }
};

const writeUsersToFile = (users) => {
  try {
    fs.writeFileSync(filepath, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error("Error writing users file", error);
  }
};

module.exports = { readUsersFromFile, writeUsersToFile };
