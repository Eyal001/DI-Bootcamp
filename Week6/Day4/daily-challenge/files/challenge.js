const greet = require("../greeting");
const displayColorfulMessage = require("../colorful-message");
const readFileContent = require("./read-file");

console.log(greet("Eyal"));
displayColorfulMessage();
readFileContent();
