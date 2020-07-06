var mySwiper = new Swiper ('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    768: {
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    },
    576: {  
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    },
    320: {  
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    }

  }
});

$(document).ready(function() {
  var form = $('.form');
  var btn = $('.btn');
  var overlay = $('.overlay');

  btn.on('click', function() {
    form.css('display', 'block');
    overlay.css('display', 'block');
    $('body').addClass('lock');
  });

  $(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
      form.fadeOut();
      overlay.css('display', 'none');
      $('body').removeClass('lock');
		}
  });

  $(document).mouseup(function (e){ 
		if (!form.is(e.target) && form.has(e.target).length === 0) { 
      form.fadeOut(); 
      overlay.css('display', 'none');
      $('body').removeClass('lock');
		}
	});

  $('.mobile-menu').click(function() {
    $('.mobile-menu, .header-nav').toggleClass('active');
    });

  $('input[type="tel"]').inputmask({"mask":"(+7) (999) 999 9999"});

  $('form').submit(function() {
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function() {
      th.trigger('reset');
      th.fadeOut();
      $('.thanks__popup').fadeIn();
    });
    return false;
  });
  

  $('.thanks__popup-btn').click(function() {
    $('.thanks__popup').fadeOut();
  });

  $(document).mouseup(function (e){ 
		if (!$('.thanks__popup').is(e.target) && $('.thanks__popup').has(e.target).length === 0) { 
      $('.thanks__popup').fadeOut(); 
		}
	});
});