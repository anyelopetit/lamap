$(document).ready(function(){

  //RIGHT BUTTON EFFECT
  $('.left-button').click(function(){
    $('.left-button .fa-gear').addClass('fa-spin');
    $(this).css('background-color','#0095FF');
    $('.left-button b').css('color','#FFF');
  });
  $('.left-button').blur(function(){
    $(this).css('background-color','inherit');
    $('.left-button b').css('color','#000');
    $('.left-button .fa-gear').removeClass('fa-spin');
  });

  //MIDDLE BUTTON EFFECT
  $('.middle-button').click(function(){
    $(this).css('background-color','#0095FF');
    $('.middle-button b').css('color','#FFF');
  });
  $('.middle-button').blur(function(){
    $(this).css('background-color','inherit');
    $('.middle-button b').css('color','#000');
  });

  //LEFT BUTTON EFFECT
  $('.right-button').click(function(){
    $(this).css('background-color','#0095FF');
    $('.right-button b').css('color','#FFF');
    $('.right-button .fa-refresh').addClass('fa-spin');
  });
  $('.right-button').blur(function(){
    $(this).css('background-color','inherit');
    $('.right-button b').css('color','#000');
    $('.right-button .fa-refresh').removeClass('fa-spin');
  });
});
