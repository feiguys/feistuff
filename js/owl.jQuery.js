jQuery(document).ready(function($) {
    var owl = $('#header-carousel');
    owl.owlCarousel({
        nav: true,
        dots: true,
        items: 1,
        loop: true,
        navText: ["&#xf007","&#xf006"],
        autoplay: true,
        autoplayTimeout: 3000
    });

    var owl = $('#gallery-carousel');
    owl.owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        navText: ["&#xf007","&#xf006"],
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
        0: {
            items: 1
        },
        769: {
            items: 2
        },
        960: {
            items: 4
        }
        }
    });
})