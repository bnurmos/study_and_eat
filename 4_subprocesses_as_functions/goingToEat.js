function checkForStudy(DidYouFinishStudy) {
  console.log("did you finish your study?", DidYouFinishStudy);
  if (!DidYouFinishStudy) {
    console.log("go and finish it!");
  }
}
function checkIfFoodIsLeft(IsAnyFoodLeft) {
  console.log("do you have anything to eat in the fridge?", IsAnyFoodLeft);
  if (!IsAnyFoodLeft) {
    console.log("go to a food store and buy some food");
  }
}

function eatSomeFood() {
  console.log("eat your food");
}


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


