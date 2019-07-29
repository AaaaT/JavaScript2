/*following the https://www.youtube.com/watch?v=rRgD1yVwIvE tutorial */

const shoppingCardItems = [
    {name:"yogurt", department: "Diary", producedON: 07, bestBefore: 09},
    {name:"white bun", department: "Bread", producedON: 09, bestBefore: 10},
    {name:"potato", department: "Vegetables", producedON: 01, bestBefore: 31},
    {name:"beef", department: "Meat", producedON: 05, bestBefore: 09},
    {name:"pizza", department: "Ready to Eat", producedON: 02, bestBefore: 08},
    {name:"wine", department: "Alcohol", producedON: 05, bestBefore: 30},
    {name:"onion", department: "Vegetables", producedON: 03, bestBefore: 31},
    {name:"schnapps", department: "Alcohol", producedON: 05, bestBefore: 28},
    {name:"apple",department: "Fruit", producedON: 02, bestBefore: 12},
    {name:"beer", department: "Alcohol", producedON: 01, bestBefore: 31},
    {name:"bell pepper", department: "Vegetables", producedON: 01, bestBefore: 16},
];
const ages = [34, 55, 6,  67, 28, 12, 15, 18, 30, 17, 17, 36, 51];

    //for loop
// for(let i=0; i< shoppingCardItems.length; i++) {
//     console.log(shoppingCardItems[i]);
// }

    //forEach
// shoppingCardItems.forEach(function(shoppingCardItems){
//     console.log(shoppingCardItems);
//     console.log(shoppingCardItems.name);
// });


    //filter
    //get 21 and older
// let canDrink = [];
// for (let i= 0; i < ages.length; i++){
//     if(ages[i] >=21) {
//         canDrink.push(ages[i]);
//     }
// }
        //or 
// const canDrink = ages.filter(function(age){
//     if(age >=21 ){
//         return true;
//     }
// })
        //or 
// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

    //filter best before for products

// const shopDepartments = shoppingCardItems.filter(function(shoppingCardItems){
// if(shoppingCardItems.department === "Vegetables"){
//     return true;
// }
// });

const shopDepartments = shoppingCardItems.filter(shoppingCardItems => shoppingCardItems.department === "Alcohol");

console.log(shopDepartments);

// Get products that were produced on 05th

const producedFifth = shoppingCardItems.filter(shoppingCardItems => (shoppingCardItems.producedON == 05));
console.log(producedFifth)

const isBestTenDays = shoppingCardItems.filter(shoppingCardItems => (shoppingCardItems.bestBefore - shoppingCardItems.producedON >= 10));
console.log(isBestTenDays)


    //map
//Create array of Shopping Card Item Names

const shoppingCardItemNames = shoppingCardItems.map(function(shoppingCardItems){
    return shoppingCardItems.name;
    //return 4; test
});

console.log(shoppingCardItemNames)

//sort
//reduce
