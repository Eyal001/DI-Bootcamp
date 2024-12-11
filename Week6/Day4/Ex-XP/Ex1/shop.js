const products = require("./products");

function findProductByName(name) {
  const product = products.find((product) => product.name === name);
  if (product) {
    return product;
  } else {
    console.log(`Product ${name} not found.`);
    return null;
  }
}
console.log(findProductByName("Laptop"));
console.log(findProductByName("Coffee Maker"));
console.log(findProductByName("Smartphone"));
