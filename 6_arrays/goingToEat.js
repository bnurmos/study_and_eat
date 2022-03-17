const {
  checkIfFoodIsLeft, 
  eatSomeFood
} = require("./foodStore");

const {
  checkForStudy
} = require("./study");

function finishStudy(DidYouFinishStudy, IsAnyFoodLeft) {
  console.log("start");
  checkForStudy(DidYouFinishStudy);
  checkIfFoodIsLeft(IsAnyFoodLeft);
  eatSomeFood();
  console.log("end");
}
const chocolateSprinkles = { name: "chocolate", cost: 0.5 };
const vanillaSprinkles = { name: "vanilla", cost: 0.35 };
const nutmegSprinkles = { name: "nutmeg", cost: 0.75 };
const podweredSugarSprinkles = { name: "powdered sugar", cost: 0.5 };

const coffeeSprinkles = [
  chocolateSprinkles,
  vanillaSprinkles,
  nutmegSprinkles,
  podweredSugarSprinkles,
];

function chooseRandomFood(typeOfFood) {
  const numOfFoodChoices = typeOfFood.length;
  const randomIndex = Math.floor(numOfFoodChoices * Math.random());
  const randomSprinkle = typeOfFood[randomIndex];
  return randomSprinkle;
}

function addFoodToFridge(food) {
  console.log("Adding", food.name, "food to my fridge.  They cost $", sprinkle.cost);
}

function makeCoffee(outOfCoffeeBeans, coffeePotIsDirty) {
  console.log("start");
  checkIfOutOfCoffeeBeans(outOfCoffeeBeans);
  grindCoffeeBeans();
  checkIfCoffeePotIsDirty(coffeePotIsDirty);
  addFilterToCoffeeMachine();
  addCoffeeGroundsToFilter();
  addWaterToCoffeeMaker();
  startCoffeeMaker();
  waitForCoffeeToBrew();
  const randomSprinkle = chooseRandomSprinkles(coffeeSprinkles);
  addSprinklesToCoffee(randomSprinkle);
  console.log("end");
}
//


console.log("\n");
console.log("Starting process with finished your study and go to a store");
finishStudy(true, false);
console.log("\n");
console.log("Starting process with don't finish your study and have some food");
finishStudy(false, true);
console.log("\n");
console.log("Starting process with don't finish your study and don't have some food");
finishStudy(false, false);
console.log("\n");
console.log("Starting process with finished your study and have some food");
finishStudy(true, true);



