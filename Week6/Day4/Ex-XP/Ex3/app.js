const { readFile, writeFile } = require("./fileManager");

function main() {
  try {
    readFile("HelloWorld.txt");
    writeFile("ByeWorld.txt", "Writing to the file");
  } catch (error) {
    console.error("An error occurred:", err);
  }
}

main();
