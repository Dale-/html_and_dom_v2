var _ = require('lodash');
var Question = require('./question');

function Judge(name, answer, defaultScore) {
  Question.call(this, name, answer, defaultScore);
}

Judge.prototype = Object.create(Question.prototype);

Judge.prototype.constructor = Judge;

Judge.prototype.getScore = function(documentObject) {

  var selectedObject = _.find(documentObject, { checked: true });
  var value = selectedObject ? selectedObject.value : '';

  return this.answer === value ? this.defaultScore : 0;
};

module.exports = Judge;
