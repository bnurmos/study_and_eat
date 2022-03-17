const typeOfFood = ["Hot dog", "Tomato soup", "Sushi"];

const numOfFoodChoices = typeOfFood.length;
const randomIndex = Math.floor(numOfFoodChoices * Math.random());
console.log(randomIndex)
const randomFood = typeOfFood[randomIndex];



const typeOfFood = ["Hot dog", "Tomato soup", "Sushi"];
const soupFoodsIndex = typeOfFood.indexOf("Tomato soup");
// console.log(soupFoodsIndex)
 typeOfFood.forEach(function (Food) {
  console.log("eatting", Food);
});