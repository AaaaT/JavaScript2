//'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;
  // Replace this comment and the next line with your code
  for(let i=0; i < arr.length; i++){
    for (let j=0; j < arr[i].length; j++){
      product = product * arr[i][j];
    }
  }
  console.log(arr, product);

  return product;
}

const result = multiplyAll([[3, 4], [5, 6], [7, 8]]);
console.log(result); // 20160

// Do not change or remove anything below this line
module.exports = multiplyAll;

