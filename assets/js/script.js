jQuery(function ($){

  const sliders = $('.custom-slider');
  sliders.each(function(i){
    const cols = $(this).data('cols') ? $(this).data('cols') : 1;
    const dots = $(this).data('dots') == false ? false : true;
    const navs = $(this).data('navs') == false ? false : true;
    const center = $(this).data('center') == false ? false : true;
    const cpadding = $(this).data('cpadding') ? $(this).data('cpadding') : '80px';

    $(this).slick(
      {
        dots: dots,
        rtl: false,
        arrows: navs,
        speed: 300,
        slidesToShow: cols,
        slidesToScroll: 1,
        // verticalSwiping: true,
        centerPadding: cpadding,
        centerMode: center,
        focusOnSelect: true,
        // fade: true,
        // variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="las la-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="las la-angle-right"></i></button>'
      }
    )

    $('#image-map area').on('click', function(e) {
      e.preventDefault();
      const id = $(this).attr('href');
      $(id).addClass('show').siblings().removeClass('show');
      const slideID = $(this).data('slideid');
      const slideTo = $('#map-slider .slide-item[data-slideid="'+ slideID +'"]').data('slick-index');
     $('#map-slider').slick('slickGoTo', slideTo);

    })

  });

});
