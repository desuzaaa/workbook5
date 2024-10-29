let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TO-DO: fill the array with 10 candies of various
  // price ranges
];

// Which candies costs less than $4.00?
// Which candies has "M&M" its name?
// Do we carry "Swedish Fish"?

let cheapCandy = (product) => {
  return products.filter(product => product.price < 4);
  

};
console.log(cheapCandy());



let ownChocolate = (product) => {
    return products.filter(product => product.product.includes ("M&M"));
    
}

console.log(ownChocolate());

let ownSwedishFish = (product) => {
    return products.find(product => product.product == "Swedish Fish")
}

console.log(ownSwedishFish());

