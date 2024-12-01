let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};
displayGroceries();

const cloneGroceries = () => {
  let user = client;
  // the client variable is a primitive data type , so when we set user = client, user become a copy of client , so the variables doesn't affect each other

  client = "Betty";
  console.log(user); // John
  console.log(client); //Betty

  let shopping = groceries;

  shopping.totalPrice = "35$";
  shopping.paid = false;
  console.log(groceries.totalPrice);
  console.log(shopping.totalPrice);

  console.log(groceries.paid);
  console.log(shopping.paid);

  //Here the shopping variable is assigned the groceries object , both refer to the same object in memory (this is a pass by reference)
  //which means that when we change the shopping.totalPrice will change also groceries.totalPrice because they are referencing the same object
  //same for all the values of each object
};

cloneGroceries();
