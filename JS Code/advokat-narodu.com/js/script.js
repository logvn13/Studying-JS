//  анимация якоря
$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({
                scrollTop: top,
            },
            500
        );
    });
});

//  анимация якоря for mobile
$(document).ready(function() {
    $("#mobile_menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({
                scrollTop: top,
            },
            500
        );
    });
});

$(document).ready(function() {
    $("#footersergey").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({
                scrollTop: top,
            },
            500
        );
    });
});



//Слайдер Новостей
// SLider Слайдер
$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 3, // кол-во показывать
        slidesToScroll: 3, //количество перелистываемых слайдеров
        speed: 1000,
        infinite: false, //бесконечый слаайдер
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        touchThreshold: 5, //настройка перелистывания
        centerMode: false,
        variableWidth: false, //ширина итема - ширина контента
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 500
            }
        }]
    });
});