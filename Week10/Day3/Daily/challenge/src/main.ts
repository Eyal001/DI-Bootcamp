type User = {
  type: "user";
  name: string;
  age: number;
};

type Product = {
  type: "product";
  id: number;
  price: number;
};

type Order = {
  type: "order";
  orderId: string;
  amount: number;
};

function handleData(data: (User | Product | Order)[]): string[] {
  return data.map((item) => {
    switch (item.type) {
      case "user":
        return `Hello ${item.name}, you are ${item.age} years old.`;
      case "product":
        return `Product ID: ${item.id}, Price: $${item.price.toFixed(2)}.`;
      case "order":
        return `Order ID: ${item.orderId}, Amount: $${item.amount.toFixed(2)}.`;
      default:
        return "Unknown type of data.";
    }
  });
}

const dataArray = [
  { type: "user", name: "Alice", age: 30 },
  { type: "product", id: 101, price: 19.99 },
  { type: "order", orderId: "ORD123", amount: 250 },
  { type: "unknown", foo: "bar" },
];

const result = handleData(dataArray);
console.log(result);
