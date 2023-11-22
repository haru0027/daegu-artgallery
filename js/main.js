$(document).ready(function () {
    const lag = $('.language >a')
    const lagafter = $('.language >a::after')
    lag.click(function () {
        $('.lan').toggleClass('show')
    })

    $('.lan li a').click(function () {
        $('.lan li a').removeClass('orange')
        $(this).addClass('orange')
    })
    $('.lan li a').eq(0).trigger('click')

    $('.find a').click(function () {
        $('.findbox').toggleClass('show')
        $(this).toggleClass('close')
    })
    $('.stop').click(function () {
        $(this).toggleClass('play')
    })

    // collection slide
    let collection_slide = new Swiper(".collection-slide", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        loop: true,
        pagination: {
            el: ".collection-pager",
            type: "fraction",
        },
        navigation: {
            nextEl: ".collection-next",
            prevEl: ".collection-prev",
        },
        spaceBetween: 50,
        slidesPerView: '4',
    });

    $('.collection-stop').click(function () {
        $(this).toggleClass('play')
        let collection = $(this).hasClass('play')
        if (collection) {
            collection_slide.autoplay.stop()
        } else {
            collection_slide.autoplay.start()
        }
    })
    //   banner slide
    let banner_slide = new Swiper(".banner-slide", {
        spaceBetween: 30,
        effect: "fade",
        pagination: {
            el: ".banner-pager",
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
        loop: true,
    });
    $('<span class="banner-stop"></span').appendTo('.banner-pager')

    $('.banner-stop').click(function () {
        $(this).toggleClass('play')
        let banner = $(this).hasClass('play')
        if (banner) {
            banner_slide.autoplay.stop()
        } else {
            banner_slide.autoplay.start()
        }
    })
    // edu-slide
    let edu_slide = new Swiper(".edu-slide", {
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".edu-next",
            prevEl: ".edu-prev",
        },
        loop: true,
        slideWidth: 414,
        slidesPerView: 4,
        spaceBetween: 15,
    });
    $('.edu-stop').click(function () {
        $(this).toggleClass('play')
        let edu = $(this).hasClass('play')
        if (edu) {
            edu_slide.autoplay.stop()
        } else {
            edu_slide.autoplay.start()
        }
    })

    $('.hamburger').click(function () {
        // $('.ham-content').addClass('view')
        $('.ham-content').show()
    })
    
    $('header button.hamX').click(function () {
    //    $('.ham-content').find('.view').removeClass('.ham-crontent')
       $('.ham-content').addClass('view')
    })
})