// ? removing preloader
// ? ====================================================
window.addEventListener("load", function () {
   const preloader = document.querySelector("#preloader");
   preloader.classList.add("hide");
})

// ? isotope filtering
// ? ====================================================
$('.coursesSlider').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 4,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
   appendDots: $("#courseSliderDots"),
   prevArrow: $("#coursesArrow .left"),
   nextArrow: $("#coursesArrow .right"),
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
});

$(".filterBtn").on("click", function () {
   $(".filterBtn").removeClass("is-checked");
   $(this).addClass("is-checked");

   // get filter value
   const data = $(this).attr("data-filter");

   // filter
   $('.coursesSlider').slick('slickUnfilter');
   $('.coursesSlider').slick('slickFilter', data);
})

function filterCourse(className) {

}


// ? Hero attached slider
// ? ====================================================
// $('.hero-slider').slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    arrows: false,
//    fade: true,
//    // asNavFor: '.hero-slider-ill'
// });
// $('.hero-slider-ill').slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    arrows: false,
//    // asNavFor: '.hero-slider',
//    dots: false,
// });

$('.hero-slider').slick({
   dots: true,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 3000,
   appendDots: $('#heroSliderDots'),
   asNavFor: $(".hero-slider-ill"),
   fade: true
});
$('.hero-slider-ill').slick({
   asNavFor: $(".hero-slider"),
   arrows: false,
   dots: false
});

// ? teacher slider
// ? ====================================================
$('.teacherSlider').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 1000,
   appendDots: $('#teacherSliderDots'),
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
         }
      }
   ]
});


// ? testimonials slider
// ? ====================================================
$('.testimonialsSlider').slick({
   slidesToShow: 5,
   slidesToScroll: 1,
   dots: false,
   centerMode: true,
   focusOnSelect: true,
   prevArrow: $("#testimonialsArrow .left"),
   nextArrow: $("#testimonialsArrow .right"),
   autoplay: true,
   autoplaySpeed: 2000,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 4,
         }
      },
      {
         breakpoint: 900,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
});