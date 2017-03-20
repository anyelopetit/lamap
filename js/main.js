$(document).ready(function(){
  $('.package-first-card').hover(
    function(){
        $('.package-first-card .card-header b').addClass('colorful-text');
    },
    function(){
        $('.package-first-card .card-header b').removeClass('colorful-text');
    }
  );

  $('.package-second-card').hover(
    function(){
        $('.package-second-card .card-header b').addClass('colorful-text');
    },
    function(){
        $('.package-second-card .card-header b').removeClass('colorful-text');
    }
  );
  $('.package-third-card').hover(
    function(){
        $('.package-third-card .card-header b').addClass('colorful-text');
    },
    function(){
        $('.package-third-card .card-header b').removeClass('colorful-text');
    }
  );
  $('.package-last-card').hover(
    function(){
        $('.package-last-card .card-header b').addClass('colorful-text');
    },
    function(){
        $('.package-last-card .card-header b').removeClass('colorful-text');
    }
  );

  //----- CAROUSEL FUNCTIONS
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
  $('.owl-next').html('<i class="fa fa-angle-right btn-slide"></i>').css('color:white');
  $('.owl-prev').html('<i class="fa fa-angle-left btn-slide"></i>');
  //----- END CAROUSEL FUNCTIONS
  

  //----- EFFECTS SERVICES
  $('.services-effect-1').hover(
    function(){
        $('.services-effect-1 div').addClass('icons-services2');
        $('.services-effect-1 h3').addClass('colorful-text');
    },
    function(){
        $('.services-effect-1 div').removeClass('icons-services2');
        $('.services-effect-1 h3').removeClass('colorful-text');
    }
  );

  $('.services-effect-2').hover(
    function(){
        $('.services-effect-2 div').addClass('icons-services2');
        $('.services-effect-2 h3').addClass('colorful-text');
    },
    function(){
        $('.services-effect-2 div').removeClass('icons-services2');
        $('.services-effect-2 h3').removeClass('colorful-text');
    }
  );

  $('.services-effect-3').hover(
    function(){
        $('.services-effect-3 div').addClass('icons-services2');
        $('.services-effect-3 h3').addClass('colorful-text');
    },
    function(){
        $('.services-effect-3 div').removeClass('icons-services2');
        $('.services-effect-3 h3').removeClass('colorful-text');
    }
  );

  $('.services-effect-4').hover(
    function(){
        $('.services-effect-4 div').addClass('icons-services2');
        $('.services-effect-4 h3').addClass('colorful-text');
    },
    function(){
        $('.services-effect-4 div').removeClass('icons-services2');
        $('.services-effect-4 h3').removeClass('colorful-text');
    }
  );
  //----- END EFFECTS SERVICES

});
