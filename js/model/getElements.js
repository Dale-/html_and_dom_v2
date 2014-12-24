function GetElements() {
}

GetElements.getElements = function() {
  var score = 0;
  var value = '';
  var progress = 0;

  _.forEach(Answers.getAnswers(), function(answer) {
    var answerName = answer.name;
    documentObject = $('[name='+answerName+']');
    score += answer.getScore(documentObject);
  });
  return score;
};

module.GetElements = GetElements;
