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
});
