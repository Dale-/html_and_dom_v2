var _ = require('lodash');
var $ = require('jquery');

function CheckEmpty() {
}

CheckEmpty.checkHead = function() {
  var empty_count = 0;
  $('[name="head"]').each(function(){
    if(_.isEmpty(this.value)){
      var empty_value_id = $(this).attr('id');
      this.focus();
      $('#' + empty_value_id).parent().parent().addClass('has-warning');
      empty_count ++;
    } else {
      var unEmpty_value_id = $(this).attr('id');
      $('#' + unEmpty_value_id).parent().parent().removeClass('has-warning');
      $('#' + unEmpty_value_id).parent().parent().addClass('has-success');
    }
  });
  return empty_count === 0;
};

module.CheckEmpty = CheckEmpty;
