'use strict';

/* 1_1 Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.
Your solution could be something like this:

function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]


Rewrite the above doubleOddNumbers function using map and filter; don't forget to use =>. */

const myNumbers = [1, 2, 3, 4];

const OddNumbers = myNumbers.filter(myNumbers => myNumbers % 2 !== 0); //Filter
const doubleOddNumbers = OddNumbers.map( OddNumbers => OddNumbers*2); //Map

console.log(OddNumbers); //==>[1,3]
console.log(doubleOddNumbers); //==>[2,6

//console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
