const coffeeMenu = require("./coffee_data.js");
const drinkNames = coffeeMenu.map((drink) => drink.name);
console.log(drinkNames);

const underFive = coffeeMenu.filter((drink) => drink.price <= 5);

console.log(underFive);

const evenNumber = coffeeMenu.filter((drink) => drink.price % 2 === 0);
console.log(evenNumber);

const totalDrinks = coffeeMenu.reduce((acc, drink) => acc + drink.price, 0);

console.log(totalDrinks);

const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal === true);

console.log(seasonalDrinks);

coffeeMenu.forEach((drink) => {
  if (drink.seasonal) {
    console.log(`${drink.name} with imported beans`);
  }
});
