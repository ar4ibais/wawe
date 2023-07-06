$(function() {
    Fancybox.bind();

    $('.header__mob-btn').on('click', function() {
        $('.menu').toggleClass('active')
    })

    $('.blog__slider').slick({
        arrows: false,
        dots: true
    });

    var mixer = mixitup('.gallery__images');
});