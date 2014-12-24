var _ = require('lodash');
var $ = require('jquery');
var CheckEmpty = require('.model/check-empty');
var GetElements = require('.model/getElements');

function checkForm() {

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
