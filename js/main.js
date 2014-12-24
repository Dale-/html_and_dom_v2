var CheckEmpty = require('./model/check-empty');
var GetElements = require('./model/getElements');
var _ = require('lodash');

$(document).ready(function(){
  $('#submit').on('click',function(){
    return checkForm();
  });
});

function checkForm() {
  alert('sssss');

  if(!CheckEmpty.checkHead()) {
    $('#myModal').modal('show');
    return false;
  }

  var score = GetElements.getElements();
  $('#get_score').val(score);
  $('#score').modal({
    keyboard: $('div.modal-body').text(score)
  });

  return false;
}
