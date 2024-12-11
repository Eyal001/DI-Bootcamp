const fs = require("fs");
const path = require("path");

fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.error(`Error reading directory:`, err);
    return;
  }

  console.log("Files in the directory:");
  files.forEach((file) => {
    console.log(file);
  });
});
