//ex1

// function displayNumbersDivisible(number) {
//   sum = 0;
//   for (let i = 0; i <= 500; i++) {
//     if (i % number === 0) {
//       console.log(i);
//       sum += i;
//     }
//   }
//   console.log("Sum : " + sum);
// }

// displayNumbersDivisible(45);

//ex2
// const stock = {
//   banana: 6,
//   apple: 0,
//   pear: 12,
//   orange: 32,
//   blueberry: 1,
// };

// const prices = {
//   banana: 4,
//   apple: 2,
//   pear: 1,
//   orange: 1.5,
//   blueberry: 10,
// };
// const shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//   totalPrice = 0;
//   for (let item of shoppingList) {
//     if (item in stock && stock[item] > 0) totalPrice += prices[item];
//     if (stock[item] <= 0) {
//       stock[item] == 0;
//     } else stock[item] -= 1;
//   }
//   return totalPrice;
// }

// console.log(myBill());
// console.log("Updated Stock:", stock);

// ex3

// function changeEnough(itemPrice, amountOfChange) {
//   listChange = [0.25, 0.1, 0.05, 0.01];
//   sumPocket = 0;
//   for (let i = 0; i < amountOfChange.length; i++) {
//     sumPocket += amountOfChange[i] * listChange[i];
//   }
//   if (itemPrice > sumPocket) return false;
//   else return true;
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0]));

//ex4

// function hotelCost() {
//   while (true) {
//     let nbNights = prompt(
//       "How many nights would you want to stay in the hotel ?"
//     );

//     nbNights = parseInt(nbNights);

//     if (!isNaN(nbNights) && nbNights > 0) {
//       return nbNights * 140;
//     } else alert("The input is invalid. Please type a number.");
//   }
// }

// function planeRideCost() {
//   while (true) {
//     let destination = prompt("What is your destination ?").trim().toLowerCase();
//     if (destination == "London") {
//       return 183;
//     } else if (destination == "Paris") {
//       return 220;
//     } else if (destination != "") {
//       return 300;
//     } else alert("Please enter a valid destination");
//   }
// }

// function rentalCarCost() {
//   while (true) {
//     let days = prompt("How many nights would you want to stay in the hotel ?");
//     days = parseInt(days);
//     if (!isNaN(days) && days > 0) {
//       let totalCost = 40 * days;
//       if (days < 10) {
//         totalCost -= totalCost * 0.05;
//       }
//       return totalCost;
//     } else alert("The input is invalid. Please type a number.");
//   }
// }

// function totalVacationCost() {
//   let hotelCostA = hotelCost();
//   let planeRideCostA = planeRideCost();
//   let rentalCarCostA = rentalCarCost();

//   let totalCost = hotelCostA + planeRideCostA + rentalCarCostA;
//   console.log(`The total cost is ${totalCost}`);
// }

// let totalCost = totalVacationCost();
// console.log(totalCost);

//ex5
//ex-5.js
//ex-5.html
