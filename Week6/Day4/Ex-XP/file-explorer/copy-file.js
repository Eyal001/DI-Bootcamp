const fs = require("fs");

const filePath = "source.txt";
const destinationFilePath = "destination.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error(`Error reading ${sourceFilePath}:`, err);
    return;
  }

  fs.writeFile(destinationFilePath, data, (err) => {
    if (err) {
      console.log(`Error writing to ${destinationFilePath}:`, err);
      return;
    }
  });
});
