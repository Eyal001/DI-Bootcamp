const lod = require("lodash");
const math = require("./math");

const a = 5;
const b = 3;

console.log(`Addition: ${a} + ${b} = ${math.add(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${math.multiply(a, b)}`);

const numbers = [2, 5, 8, 1, 3];

console.log(`Maximum number in the array: ${lod.max(numbers)}`);
