'use strict';
/*-----------------------------------------------------------------------------------*/
// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  // Replace this comment and the next line with your code
  for (let i = 0; i < num; i++) {
    result += str;
  }
  console.log(str, num, result);

  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 2));

/*-----------------------------------------------------------------------------------*/
// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  // Replace this comment and the next line with your code
  while (num > 0) {
    result += str;
    num--;
  }
  console.log(str, num, result);

  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 5));

/*-----------------------------------------------------------------------------------*/

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  // Replace this comment and the next line with your code
  do {
    result += str;
  } while (result.length < str.length * num);
  console.log(str, num, result);

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 7));

/*-----------------------------------------------------------------------------------*/
// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
