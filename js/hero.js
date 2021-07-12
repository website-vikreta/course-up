// ? isotope filtering
// ? ====================================================

// init Isotope
var $coursesSlider = $('.coursesSlider').isotope({
   itemSelector: '.card',
   layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
   // show if number is greater than 50
   numberGreaterThan50: function () {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
   },
   // show if name ends with -ium
   ium: function () {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
   }
};
// bind filter button click
$('.filters-button-group').on('click', 'button', function () {
   var filterValue = $(this).attr('data-filter');
   // use filterFn if matches value
   filterValue = filterFns[filterValue] || filterValue;
   $coursesSlider.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
   var $buttonGroup = $(buttonGroup);
   $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
   });
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