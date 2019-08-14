'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

//x is 9  and does not change after the f1 function is executed but it does if I console.log(f1(x)), I do not know why. Maybe because x was defined outside of the f1 function scope

//y is returned after going through the f2 function where the value of y(that is an object containing x) is changed by adding 1 to x. 9+1=10
