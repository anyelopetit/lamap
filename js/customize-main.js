function action(btn){
  // Set color and animation to selected button
  btn.css({'background-color':'#0095FF','color':'#FFF'});
  btn.find('.can-spin').addClass('fa-spin');

  // Set inherit color and animation to unselected buttons
  var cousins = btn.parent().siblings().children();
  cousins.css({'background-color':'inherit','color':'#000'});
  cousins.find('.can-spin').removeClass('fa-spin');
};

$(document).ready(function(){
  // DEFAULT ACTIVE
  action($('.left-button'));
  //LEFT BUTTON
  $('.left-button').click(function(){ action($(this)); });

  //MIDDLE BUTTON
  $('.middle-button').click(function(){ action($(this)); });

  //LEFT BUTTON
  $('.right-button').click(function(){ action($(this)); });
});
