function checkIfFoodIsLeft(IsAnyFoodLeft) {
  console.log("do you have anything to eat in the fridge?", IsAnyFoodLeft);
  if (!IsAnyFoodLeft) {
    console.log("go to a food store and buy some food");
  }
}
function eatSomeFood() {
  const randomFood = chooseRandomSprinkles(coffeeSprinkles);
  addFoodToFridge(randomFood);
  //console.log("eat your food");
}
module.exports = { checkIfFoodIsLeft, eatSomeFood };
