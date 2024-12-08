// ex 1

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve("Number is less or equal to 10");
    } else {
      reject("Number is greater than 10");
    }
  });
}

compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// ex 2

function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 4000);
  });
}
delayedSuccess()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// ex 3

const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

resolvedPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

rejectedPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
