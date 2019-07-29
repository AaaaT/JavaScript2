/* eslint-disable */

    /*Sorting out Odd Numbers to see if it works*/
// const myNumbers = [1, 2, 3, 4];
// const OddNumbers = myNumbers.filter(myNumbers => myNumbers % 2 !== 0);


// console.log(OddNumbers);

    /*Using Filter and Map functions separately */

//const OddNumbers = myNumbers.filter(myNumbers => myNumbers % 2 !== 0); //Filter
// const doubleOddNumbers = OddNumbers.map( OddNumbers => OddNumbers*2); //Map

// console.log(OddNumbers); //==>[1,3]
// console.log(doubleOddNumbers); //==>[2,6]


    /*Combining the filter and map functions in one function*/

// const myNumbers = [1, 2, 3, 4];
// const doubleOddNumbers = myNumbers.filter(myNumbers => myNumbers % 2 !== 0).map(myNumbers => myNumbers*2);

// console.log(doubleOddNumbers);// ==> [2, 6]