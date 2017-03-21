$(document).ready(function(){

  //LEFT BUTTON EFFECT
  $('.left-button').click(function(){
    $(this).css('background-color','#0095FF');
    $('.left-button b').css('color','#FFF');
    $('.left-button .fa-gear').addClass('fa-spin');

    //Give back to right button its start effect
    $('.right-button .fa-refresh').removeClass('fa-spin');
    $('.right-button').css('background-color','inherit');
    $('.right-button b').css('color','#000');

    //Give back to middle button its start effect
    $('.middle-button').css('background-color','inherit');
    $('.middle-button b').css('color','#000');
  });

  //--- BLUR EFFECT FOR LEFT BUTTON
  /*$('.left-button').blur(function(){
    $(this).css('background-color','inherit');
    $('.left-button b').css('color','#000');
    //$('.left-button .fa-gear').removeClass('fa-spin');
  });*/

  //MIDDLE BUTTON EFFECT
  $('.middle-button').click(function(){
    $(this).css('background-color','#0095FF');
    $('.middle-button b').css('color','#FFF');

    //Give back to right button its start effect
    $('.right-button .fa-refresh').removeClass('fa-spin');
    $('.right-button').css('background-color','inherit');
    $('.right-button b').css('color','#000');

    //Give back to left button its start effect
    $('.left-button .fa-gear').removeClass('fa-spin');
    $('.left-button').css('background-color','inherit');
    $('.left-button b').css('color','#000');
  });


  //----- BLUR EVENT FOR MIDDLE BUTTON
  /*$('.middle-button').blur(function(){
    $(this).css('background-color','inherit');
    $('.middle-button b').css('color','#000');
  });*/

  //LEFT BUTTON EFFECT
  $('.right-button').click(function(){
    //Add color and effect to selected button
    $(this).css('background-color','#0095FF');
    $('.right-button b').css('color','#FFF');
    $('.right-button .fa-refresh').addClass('fa-spin');

    //Give back to left button its start effect
    $('.left-button .fa-gear').removeClass('fa-spin');
    $('.left-button').css('background-color','inherit');
    $('.left-button b').css('color','#000');
    
    //Give back to middle button its start effect
    $('.middle-button').css('background-color','inherit');
    $('.middle-button b').css('color','#000');
  });

  //--- BLUR EVENT FOR RIGHT BUTTON
  /*$('.right-button').blur(function(){
    $(this).css('background-color','inherit');
    $('.right-button b').css('color','#000');
    //$('.right-button .fa-refresh').removeClass('fa-spin');
  });*/
});
