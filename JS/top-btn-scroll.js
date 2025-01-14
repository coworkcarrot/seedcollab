$(window).scroll(function(){

<<<<<<< HEAD
  if($(this).scrollTop()>800){ //800 넘으면 보임
      $(".top-btn-icon i").fadeIn(800); //0.8초
  }else{
      $(".top-btn-icon i").fadeOut('slow'); //800이하면 안보임, slow=느리게
  }
=======
    if($(this).scrollTop()>800){ //800 넘으면 보임
        $(".top-btn-icon i").fadeIn(800); //0.8초
    }else{
        $(".top-btn-icon i").fadeOut('slow'); //800이하면 안보임, slow=느리게
    }
>>>>>>> 8a083a1e6de8e61937d30e51ca8d1d00c1f21a55

});

$(function(){
<<<<<<< HEAD
  $("#top-btn").on({
      mouseenter: function(){
          $(this).animate({
              bottom: "60px"
          }, 400);
      },
      mouseleave: function(){
          $(this).animate({
              bottom: "50px"
          }, 400);
      }
  });
});
    
=======
    $("#top-btn").on({
        mouseenter: function(){
            $(this).animate({
                bottom: "60px"
            }, 400);
        },
        mouseleave: function(){
            $(this).animate({
                bottom: "50px"
            }, 400);
        }
    });
});
      
>>>>>>> 8a083a1e6de8e61937d30e51ca8d1d00c1f21a55
