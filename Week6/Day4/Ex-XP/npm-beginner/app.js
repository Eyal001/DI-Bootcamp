const chalk = require("chalk");

console.log(chalk.blue("Hello, this is a blue message!"));
console.log(chalk.red.bold("This is a bold red message."));
console.log(chalk.green.underline("This is an underlined green message."));
console.log(
  chalk.yellow.bgBlue("This is a yellow message with a blue background.")
);
console.log(chalk.magenta("This is a magenta message."));
console.log(chalk.cyan.bold.italic("This is a bold and italic cyan message."));
