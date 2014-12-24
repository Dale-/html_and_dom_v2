var _ = require('lodash');
var $ = require('jquery');

function SingleChoice(name, answer, defaultScore) {
  Question.call(this, name, answer, defaultScore);
}

SingleChoice.prototype = Object.create(Question.prototype);

SingleChoice.prototype.constructor = SingleChoice;

SingleChoice.prototype.getScore = function(documentObject) {
  var selectedObject = _.find(documentObject, { checked: true });
  var value = selectedObject ? selectedObject.value : '';

  return this.answer === value ? this.defaultScore : 0;
};

module.SingleChoice = SingleChoice;
