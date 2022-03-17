function checkForStudy(DidYouFinishStudy) {
  console.log("did you finish your study?", DidYouFinishStudy);
  if (!DidYouFinishStudy) {
    console.log("go and finish it!");
  }
}

module.exports = {
  checkForStudy
};
