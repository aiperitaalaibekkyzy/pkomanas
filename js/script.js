var menuBlock = document.querySelector(".navbar-toggler");
var menuSpan = document.querySelector(".inner");
menuBlock.addEventListener("click", function() {
  // Toggle class "is-active"
  menuBlock.classList.toggle("is-active");
  menuSpan.classList.toggle("is-active");
  // Do something else, like open/close menu
});

$(function(){
  $('.search-btn , .X').on("click", function(e) {
    e.stopPropagation();
    var searchBlock = $('.search-block');
    var searchFormBlock = $('.search-form-block')
    searchBlock.toggleClass('search-block-active');
    searchFormBlock.toggleClass('search-form-active');
  });

  $('.searchFormOpen, .searchFormClose').on('click', function (e) {
    console.log(1)
    e.preventDefault();
    var searchForm = $('.searchForm'),
        searchFormToggler = $('.searchFormToggler');
    searchForm.toggleClass('display-block');
    searchFormToggler.toggleClass('active');
  });
});


$('.popup-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  closeOnContentClick: true,
  mainClass: 'mfp-img-mobile',
  zoom: {
    enabled: true,
    duration: 300 
  },
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  },
  image: {
    titleSrc: function(item) {
      return item.el.attr('title');
    }
  }
  
})

$(document).ready(function(){
  $('.section-slider').slick({
    dots: true,
    arrows: false,
    speed: 2400,
    autoplay:true
  }),

  $('.services-slide').slick({
    dots: true,
    arrows: false,
    speed: 2000,
    autoplay:true
  }),

  $('.about-slider').slick({
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 2000,
    autoplay:true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
})

$(document).ready(function() {
  jQuery('img').each(function() {
    var data = $(this).attr('alt');
    $(this)
      .wrap("<div class='new'></div>")
      .parent('.new')
      .attr('data-alt', data)
    ;
  });
});

jQuery(document).ready(function()
{
  
  jQuery('#fontsize1, #fontsizetool1').click( function(){
    jQuery('body').css('font-size','16px');
    jQuery('body').removeClass('fontsize1').removeClass('fontsize2').removeClass('fontsize3');
    jQuery('body').addClass('fontsize1');
    Cookie.write( 'mod_fontsize', '1', { duration: 365 } );
  });

  jQuery('#fontsize2, #fontsizetool2').click( function(){
      jQuery('body').css('font-size','19px');
      jQuery('body').removeClass('fontsize1').removeClass('fontsize2').removeClass('fontsize3');
      jQuery('body').addClass('fontsize2');
      Cookie.write( 'mod_fontsize', '2', { duration: 365 } );
  });

  jQuery('#fontsize3, #fontsizetool3').click( function(){
      jQuery('body').css('font-size','23px');
      jQuery('body').removeClass('fontsize1').removeClass('fontsize2').removeClass('fontsize3');
      jQuery('body').addClass('fontsize3');
      Cookie.write( 'mod_fontsize', '3', { duration: 365 } );
  });

  jQuery('#letter-spacing1').click( function(){
      jQuery('body').css('letter-spacing','0px');
      jQuery('body').removeClass('letter-spacing1').removeClass('letter-spacing2').removeClass('letter-spacing3');
      jQuery('body').addClass('letter-spacing1');
      Cookie.write( 'mod_letterspacing', '0', { duration: 365 } );
  });

  jQuery('#letter-spacing2').click( function(){
      jQuery('body').css('letter-spacing','1px');
      jQuery('body').removeClass('letter-spacing1').removeClass('letter-spacing2').removeClass('letter-spacing3');
      jQuery('body').addClass('letter-spacing2');
      Cookie.write( 'mod_letterspacing', '1', { duration: 365 } );
  });

  jQuery('#letter-spacing3').click( function(){
      jQuery('body').css('letter-spacing','2px');
      jQuery('body').removeClass('letter-spacing1').removeClass('letter-spacing2').removeClass('letter-spacing3');
      jQuery('body').addClass('letter-spacing3');
      Cookie.write( 'mod_letterspacing', '2', { duration: 365 } );
  });

  jQuery('#black-white').click( function(){
      jQuery('body').removeClass('grayscale').removeClass('without-images');
      jQuery('body').addClass('grayscale');
      Cookie.write( 'mod_imgcolor', 'grayscale', { duration: 365 } );
  });

  jQuery('#color-images').click( function(){
      jQuery('body').removeClass('grayscale').removeClass('without-images');
      Cookie.write( 'mod_imgcolor', '', { duration: 365 } );
  });

  jQuery('#without-images').click( function(){
      jQuery('body').removeClass('grayscale').removeClass('without-images');
      jQuery('body').addClass('without-images');
      jQuery('img').each(function() {
        var data = $(this).attr('alt');
        $(this)
          .attr('data-alt', data)
        ;
      });
      Cookie.write( 'mod_imgcolor', 'without-images', { duration: 365 } );
  });

  jQuery('#standart-version').click( function(event) {
      event.preventDefault();
      jQuery('.visibility-tool').removeClass('standart-version').removeClass('visually-impared');
      jQuery('.visibility-tool').addClass('standart-version');
      jQuery('body').removeClass('visually-impared-version');

      jQuery('body').removeAttr( 'style' );
      jQuery('body').removeClass('without-images fontsize2 fontsize3 letter-spacing3 letterspacing2 letter-spacing1 grayscale');

      jQuery('body').addClass('standart-version');
      jQuery('.header').removeClass('header-top');
      jQuery('.visibility-tool').slideUp(500);
      jQuery('#new-cover').addClass('plane');
      Cookie.write( 'mod_visuallyimpared', 'standart-version', { duration: 365 } );
  });

  jQuery('#visually-impared-version').click( function(event) {
      event.preventDefault();
      jQuery('.visibility-tool').removeClass('standart-version').removeClass('visually-impared-version');
      jQuery('.visibility-tool').addClass('visually-impared-version');
      jQuery('body').removeClass('standart-version');
      jQuery('body').addClass('visually-impared-version');
      jQuery('.visibility-tool').slideDown(500);
      jQuery('.header').addClass('header-top');
      Cookie.write( 'mod_visuallyimpared', 'visually-impared-version', { duration: 365 } );
  });

  jQuery('body').removeClass();
  if (Cookie.read( 'mod_visuallyimpared' )=='visually-impared-version') {
      jQuery('body').css('font-size', 9+Cookie.read( 'mod_fontsize')*1+'px' );
      jQuery('body').css('letter-spacing', Cookie.read( 'mod_letterspacing')+'px' );
      jQuery('body').addClass('fontsize' + Cookie.read('mod_fontsize')).addClass('letter-spacing' + Cookie.read('mod_letterspacing')).addClass(Cookie.read('mod_imgcolor'));
  }else{
      jQuery('body').addClass('standart-version');
      jQuery('.visibility-tool').slideUp(500);
      Cookie.write( 'mod_visuallyimpared', 'standart-version', { duration: 365 } );
  }
  jQuery('.visibility-tool').addClass(Cookie.read( 'mod_visuallyimpared'));
  jQuery('body').addClass( Cookie.read( 'mod_visuallyimpared' ) );

});
