function ShortAnswer(name, answer, defaultScore) {
  Question.call(this, name, answer, defaultScore);
}

ShortAnswer.prototype = Object.create(Question.prototype);

ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.getScore = function(documentObject) {

  return this.answer === documentObject[0].value ? this.defaultScore : 0;
};

module.ShortAnswer = ShortAnswer;
