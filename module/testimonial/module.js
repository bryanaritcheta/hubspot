$(document).ready(function() {
    $(".testimonial-carousel").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: false,
        arrows: true,
        prevArrow: $(".testimonial-carousel-controls .prev"),
        nextArrow: $(".testimonial-carousel-controls .next"),
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ]
    });
});