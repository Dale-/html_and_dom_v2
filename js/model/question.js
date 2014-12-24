function Question(name, answer, defaultScore) {
  this.name = name;
  this.answer = answer;
  this.defaultScore = defaultScore;
}

Question.prototype.getScore = function() {
};

module.Question = Question;
