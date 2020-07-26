$(document).ready(function() {
    // run function on initial page load
    start();
});

function start() {
  $('.mousey').click(function(){
    $('.tl').addClass('tlanimate');
    $('.tr').addClass('tranimate');
    $('.bl').addClass('blanimate');
    $('.br').addClass('branimate');
    $('section').fadeOut(1000);
  })
}
