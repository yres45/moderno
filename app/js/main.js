$(function(){

    $('.rate-star').rateYo({
        rating:5,
        starWidth:"12px",
        readOnly:true
    });

    $('.product-slider__inner').slick({
        dots:true,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll:3,
        responsive:[
            {
            breakpoint:1900,
            settings:{
                slidesToShow:3,
                slidestpScroll:3,
                infinite:true,
                dots:true
            }

        },
        {
            breakpoint:1441,
            settings:{
                slidesToShow:2,
                slidestpScroll:1,
                
            }

        },
        {
            breakpoint:801,
            settings:{
                slidesToShow:1,
                slidestpScroll:1,
                
            }

        },

        ]

    });

    $('.product-one__tabs .tab, .settings__taabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs, .settings__taabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs, .settings__taabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
    $(".js-range-slider").ionRangeSlider({
       
            type: "double",            
            min: 0,
            max: 1000,
            from: 0,
            to: 600,
            prefix: "$"
        
    });

   

$('.icon-th-list').on('click',function(){
    $('.products__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');

});

$('input[type="file"],select').styler();

$('.icon-th-large').on('click',function(){
    $('.products__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');

});

// .menu__btn
$('.menu__btn').on('click',function(){
    $('.menu__list').slideToggle();
});

$('.header__btn-menu').on('click',function(){
    $('.header__box').toggleClass('active');
});
    

    var mixer = mixitup ('.products__inner-box');

    

});