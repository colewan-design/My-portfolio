// Smooth scrolling
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});

document.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
      if (isInViewport(section)) {
        section.classList.add('active');
      }
    });
  });
  
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY === 0) {
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.add('transparent');
    }
  });
  
  
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  