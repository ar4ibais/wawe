$(function() {
    Fancybox.bind();

    $('.header__mob-btn').on('click', function() {
        $('.menu').toggleClass('active')
        $('body').toggleClass('active')
    })

    $('.blog__slider').slick({
        arrows: false,
        dots: true
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 50) {
            // document.querySelector('.header__top').classList.addClass('active')
            $('.header__top').addClass('active')
        } else {
            // document.querySelector('.header__top').classList.removeClass('active')
            $('.header__top').removeClass('active')
        }
    })

    var mixer = mixitup('.gallery__images');
});