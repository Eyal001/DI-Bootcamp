const fs = require("fs");

function readFile(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}, err`);
      return;
    }
    console.log(`Content of the file ${filePath}: `);
    console.log(data);
  });
}

function writeFile(filePath, content) {
  fs.writeFile(filePath, content, "utf-8", (err) => {
    if (err) {
      console.error(`Error writing to file ${filePath} :`);
      return;
    }
    console.log(`Content successfully written to file ${filePath}`);
  });
}

module.exports = {
  readFile,
  writeFile,
};
