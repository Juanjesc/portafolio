$(function () {

    $('.owl-carousel').owlCarousel({
        
        loop: true,
        nav: true,
        navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
        dots: true,
        autoplay:true,
        autoplayHoverPause: true,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1, 
                margin: 10,
                dotsEach: 1
            }, 
            1220:{
                items:2,
                margin: 10,
                dotsEach: 2
                
            },
            1800: {
                items: 3,
                margin: 1
            }  
        }
    });
});
