var _ = require('lodash');
var $ = require('jquery');

function MultipleChoice(name, answer, defaultScore) {
  Question.call(this, name, answer, defaultScore);
}

MultipleChoice.prototype = Object.create(Question.prototype);

MultipleChoice.prototype.constructor = MultipleChoice;

MultipleChoice.prototype.getScore = function(documentObject) {
  var score = 0;

  var requestion = documentObject;
  var submitAnswer = '';
  _.forEach(requestion, function(req) {
    if(req.checked) {
      submitAnswer += req.value;
    }
  });

  return this.answer === submitAnswer ? this.defaultScore : 0;
};

module.MultipleChoice = MultipleChoice;
