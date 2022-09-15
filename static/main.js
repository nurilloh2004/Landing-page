$('.time-slider-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  infinite: true,
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
});

$('.about-products-slider-content').slick();


$('.features-slider-contents').slick();

const search_img = document.querySelectorAll('.map');
const search_btn = document.querySelectorAll('.location-btn');


search_btn.forEach((button, index) => {
  button.addEventListener("click", () => {
  search_img[index].classList.toggle("active");
  })
})

$('.location-btn').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
})


const building_map = document.querySelectorAll('.building-map');
const building_btn = document.querySelectorAll('.building-map-btn');


building_btn.forEach((button, index) => {
  button.addEventListener("click", () => {
  building_map[index].classList.toggle("active");
  })
})

$('.building-map-btn').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
})

$('.first-entrance').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
})

var selector = '.layaut-dropdown a';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function(){
  $('.layaut-select-floor-main a').click(function(){
    $('.lay-out-select-content a').removeClass("active");
    $(this).addClass("active");
});
});

$(document).ready(function(){
  $('.layaut-flat-main a').click(function(){
    $('.layaut-flat-content a').removeClass("active");
    $(this).addClass("active");
});
});

$('.layout-flat-btn-1').click(function(){
  $(".layout-flat-inside").addClass('active')
})

$('.building-map-btn').click(function(){
  $(".building-infor-btn").addClass('active')
})

$('.first-entrance').click(function(){
  $(".layouts-inside-drop").addClass('active')
})

$('.first-floor-btn').click(function(){
  $(".layout-inside").addClass('active')
})



$(".Click-here").on('click', function() {
  $(".custom-model-main").addClass('model-open');
}); 
$(".close-btn, .bg-overlay").click(function(){
  $(".custom-model-main").removeClass('model-open');
});

   


$(".building-info-btn-9").on('click', function() {
  $(".garage-model-main").addClass('model-open');
}); 
$(".close-btn, .bg-overlay").click(function(){
  $(".garage-model-main").removeClass('model-open');
});
// $('.building-infor-btn').click(function(){
//   $(".layaut-drp-btn-content .active").removeClass('active')
// })

// $('.building-infor-btn').click(function(){
//   $(".first-entrance-content .active").removeClass('active')
// })

// $('.building-info-btn-1').click(function(){
//   $(".first-entrance").addClass('active')
// })

// $('.building-infor-btn').click(function(){
//   $(".layouts-inside-drop").addClass('active')
// })

// $('.building-info-btn-2').click(function(){
//   $(".layaut-drop-btn-1").addClass('active')
// })

// $('.building-info-btn-3').click(function(){
//   $(".layaut-drop-btn-2").addClass('active')
// })

// $('.building-info-btn-3').click(function(){
//   $(".layaut-drop-btn-2").addClass('active')
// })

// $('.building-info-btn-4').click(function(){
//   $(".layaut-drop-btn-3").addClass('active')
// })

// $('.building-info-btn-5').click(function(){
//   $(".layaut-drop-btn-4").addClass('active')
// })
// $('.building-info-btn-6').click(function(){
//   $(".layaut-drop-btn-5").addClass('active')
// })

// $('.building-info-btn-7').click(function(){
//   $(".layaut-drop-btn-6").addClass('active')
// })


$('.complex-btn').click(function(){
  $(".complex-txt-1").addClass('active')
 })
 $('.complex-btn').click(function(){
  $(".complex-txt-2").addClass('active')
 })
 $('.complex-btn').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
})

////////////////////// flat and floor content///////////////////////////
$(document).ready(function(){
  $('.content-d').click(function(){
      const value = $(this).attr('data-filter');
      if(value == 'map-building-box-1'){
          $('.map-building-box').not('.'+value).hide('1000');
           $('.map-building-box').filter('.'+value).show('map-building-box-1');
      }
      else{
          $('.map-building-box').not('.'+value).hide('1000');
          $('.map-building-box').filter('.'+value).show('1000');
      }
  })

  $('.content-d').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
  })
})


$('.burger').click(function (event) {
  $('.burger,.navbar-btns').toggleClass('active');
  $('.burger,.burger-nav-call-btn').toggleClass('active');
  $('body').toggleClass('lock');
});
  


AOS.init();