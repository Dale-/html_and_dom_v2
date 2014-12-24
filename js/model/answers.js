var FillIn = require('./fill-in');
var SingleChoice = require('./single-choice');
var MultipleChoice = require('./multiple-choice');
var Judge = require('./true-or-false');
var ShortAnswer = require('./short-answer');

function Answers() {
}

Answers.getAnswers = function() {

  var shortAnswerText = '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物' +
                        '或概念的一种表达形式。可以是物理实体；可以是某种图形；' +
                        '或者是一种数学表达式。';

  return [
          new FillIn('1_1', ['统一建模语言'], 5),
          new FillIn('1_2', ['封装性', '继承性', '多态性'], 5),
          new SingleChoice('2_1', 'b', 5),
          new SingleChoice('2_2', 'a', 5),
          new MultipleChoice('3_1', 'abd', 10),
          new MultipleChoice('3_2', 'abc', 10),
          new Judge('4_1', 'false', 10),
          new Judge('4_2', 'true', 10),
          new ShortAnswer('5_1', shortAnswerText, 30)
         ];
};

module.exports = Answers;
