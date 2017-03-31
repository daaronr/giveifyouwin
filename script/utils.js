$(document).ready(setUp);

function setUp () {
  $('#faq-body').hide();
  addFaqFunctionality();
}

function addFaqFunctionality () {
  $('#faq-heading').click( function(event) {
    if( $('#faq-body').is(":visible") ) {
        $('#faq-body').hide();
        $('#minus').hide();
        $('#plus').show();
    } else {
        $('#faq-body').show();
        $('#plus').hide();
        $('#minus').show();
    }
  });

  $('#faq-close').click( function(event) {
    $('#faq-body').hide();
    $('#minus').hide();
    $('#plus').show();
  });
}
