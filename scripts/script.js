// update copyright year at bottom of page
var current_year = new Date().getFullYear()
$("#year_copyright").text(current_year);

// implement smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 50
  }, 500);
});