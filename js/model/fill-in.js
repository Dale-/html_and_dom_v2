function FillIn(name, answer, defaultScore) {
  Question.call(this, name, answer, defaultScore);
}

FillIn.prototype = Object.create(Question.prototype);

FillIn.prototype.constructor = FillIn;

FillIn.prototype.getScore = function(documentObject) {

  var score = 0;
  var answerArray = [];

  _.forEach(documentObject, function(input) {
    answerArray.push(input.value);
  });

  var _this = this;
  _.forEach(this.answer, function(array) {
    if(_.contains(answerArray, array)) {
      score += _this.defaultScore;
    }
  });
  return score;
};

module.FillIn = FillIn;
