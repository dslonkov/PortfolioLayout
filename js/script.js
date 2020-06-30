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
      },
    },
    576: {  
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    },
    320: {  
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
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

  $('input[type="tel"]').inputmask({"mask":"(+9) (999) 999 9999"});

  $('form').each(function() {
    $(this).validate({
      rules: {
        телефон: {
          required: true
        },
          имя: {
            required: true
          },
      },
      messages: {
        телефон: {
          required: "Введите номер телефона!"
        },
        имя: {
          required: "Введите имя!"
        }
      }
    });
  });

  $('form').submit(function() {
		var th = $(this);
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: th.serialize()
		}).done(function() {
			alert('Заявка отправлена!');
			setTimeout(function() {
        th.fadeOut();
        overlay.css('display', 'none');
				th.trigger("reset");
			}, 100);
		});
		return false;
	});
});