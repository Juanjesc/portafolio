$(function () {

    $('.owl-carousel').owlCarousel({
        
        loop: true,
        nav: true,
        navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
        dots: true,
        autoplay:true,
        autoplayHoverPause: true,
        dotsEach: 3,
        responsive: {
            0: {
                items: 1, 
                margin: 10,
                dotsEach: 2
            }, 
            1220:{
                items:2,
                margin: 10
                
            },
            1800: {
                items: 3,
                margin: 1
            }  
        }
    });
});
