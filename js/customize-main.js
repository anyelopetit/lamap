function action(btn){
  // Set color and animation to selected button
  btn.css({'background-color':'#0095FF','color':'#FFF'});
  btn.find('.can-spin').addClass('fa-spin');

  // Set inherit color and animation to unselected buttons
  var cousins = btn.parent().siblings().children();
  cousins.css({'background-color':'inherit','color':'#000'});
  cousins.find('.can-spin').removeClass('fa-spin');
};
<<<<<<< HEAD

$(document).ready(function(){
  //LEFT BUTTON
  $('.left-button').click(function(){
    action($(this));
  });

  //MIDDLE BUTTON
  $('.middle-button').click(function(){
    action($(this));
  });

  //LEFT BUTTON
  $('.right-button').click(function(){
    action($(this));
  });
=======

$(document).ready(function(){
  // DEFAULT ACTIVE
  action($('.left-button'));
  //LEFT BUTTON
  $('.left-button').click(function(){ action($(this)); });

  //MIDDLE BUTTON
  $('.middle-button').click(function(){ action($(this)); });

  //LEFT BUTTON
  $('.right-button').click(function(){ action($(this)); });
>>>>>>> adf4422be4576224ca983b8d4a8a3f8ef9e0f496
});
