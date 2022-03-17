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


