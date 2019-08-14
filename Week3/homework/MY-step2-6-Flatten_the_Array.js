'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// const flattenArray2d = (arr) => arr.flat()
// const flattenArray3d = (arr) => arr.flat(2) //depth of 2

// const flattenArray2d = flatten
// const flattenArray3d = flatten


function flattenArray2d(arr) {
  let flattenArr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flattenArr2.push(arr[i][j])
    }
  }
  return flattenArr2;
}

function flattenArray3d(arr) {
  const flattenArr3 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let l = 0; l < arr[i][j].length; l++) {
        flattenArr3.push(arr[i][j][l]);
      }
    }
  }
  return flattenArr3;
}


//Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};