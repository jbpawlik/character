$(document).ready(function() {
  $('form#superhero').submit(function(event) {
    event.preventDefault();

    const age = $('input:radio:checked[name=age]').val()

    if (age === 'minor') {
      $('#hero').text('Baby');
    } else if (age === 'adult') {
      $('#hero').text('Adult');
    } else if (age === 'senior') {
      $('#hero').text('Senior')
    }
    $('#whichsuperhero').show()
  })  
});
  
