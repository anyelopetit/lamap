function takeBtn($btn1, $btn2, $btn3){
  $btn1.css('background-color','inherit');
  $btn2.css('color','#000');
  if($btn3){$btn3.removeClass('fa-spin');}
};
function giveBtn($button1, $button2, $button3){
  $button1.css('background-color','#0095FF');
  $button2.css('color','#FFF');
  if($button3){$button3.addClass('fa-spin');}
};
$(document).ready(function(){
  //LEFT BUTTON EFFECT
  $('.left-button').click(function(){
    giveBtn($(this),$('.left-button b'),$('.left-button .fa-gear'));

    //Give back to right button its start effect
    takeBtn($('.right-button'),$('.right-button b'),$('.right-button .fa-refresh'));

    //Give back to middle button its start effect
    takeBtn($('.middle-button'),$('.middle-button b'),null);
  });

  //MIDDLE BUTTON EFFECT
  $('.middle-button').click(function(){
    giveBtn($(this),$('.middle-button b'));

    //Give back to right button its start effect
    takeBtn($('.right-button'),$('.right-button b'),$('.right-button .fa-refresh'));

    //Give back to left button its start effect
    takeBtn($('.left-button'),$('.left-button b'),$('.left-button .fa-gear'));
  });

  //LEFT BUTTON EFFECT
  $('.right-button').click(function(){
    //Add color and effect to selected button
    giveBtn($(this),$('.right-button b'),$('.right-button .fa-refresh'));

    //Give back to left button its start effect
    takeBtn($('.left-button'),$('.left-button b'),$('.left-button .fa-gear'));

    //Give back to middle button its start effect
    takeBtn($('.middle-button'),$('.middle-button b'),null);
  });
});
