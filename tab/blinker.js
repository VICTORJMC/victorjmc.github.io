function blinker() {

  if ($('input[type=text]').attr('placeholder')) {
    // get the placeholder text
    $('input[type=text]').attr('placeholder', '');
  } else {
    $('input[type=text]').attr('placeholder', 'COMPLETA');
  }

  setTimeout(blinker, 1000);

}