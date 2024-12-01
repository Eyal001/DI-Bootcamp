// // #1
// function funcOne() {
//   const a = 5;
//   if (a > 1) {
//     a = 3;
//   }
//   alert(`inside the funcOne function ${a}`);
// }

// 3 because within the if , it's reassigned to 3

// #1.1 - run in the console:
// funcOne();
// #1.2 What will happen if the variable is declared
// with const instead of let ?

// It will throw a TypeError because we want to reassigned a const value, a const can't be reassign

//#2
// const a = 0;
// function funcTwo() {
//   a = 5;
// }

// function funcThree() {
//   alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree();
// funcTwo();
// funcThree();
// #2.2 What will happen if the variable is declared
// with const instead of let ?
//On the first call of functhree a is equal to 0 and at the call of functwo it will throw an error for the same reason of the first exercice , we can't reassign a const value so after this it will break the code

//#3
// function funcFour() {
//   window.a = "hello";
// }

// function funcFive() {
//   alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour();
// funcFive();
//The alert will display inside the funcFive function hello because window.a was set to "hello" inside of funcfour
//#4
// let a = 1;
// function funcSix() {
//   let a = "test";
//   alert(`inside the funcSix function ${a}`);
// }

// #4.1 - run in the console:
// funcSix();
// #4.2 What will happen if the variable is declared
// with const instead of let ?
// The alert will display "inside the funcsix function test" because inside the function we have our local variable let equal to test, but outside of this function wa have a global variable set to 1
// Same for the const because they have de same scoping rules, (inside the brackets)
//#5
// let a = 2;
// if (true) {
//   let a = 5;
//   alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
// with const instead of let ?
//The result will be the same, const and let have the same scoping rules so the variable inside the bracket is independant from the global variable.
//The variable inside the bracket is equal to 5 so print 5 and outside equal to 2 and print 2
