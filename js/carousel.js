window.onload = function () {
    $(function () {

        $('.owl-carousel').owlCarousel({
            
            loop: true,
            nav: true,
            navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
            dots: true,
            autoplay:true,
            responsive: {
                0: {
                   items: 1, 
                   margin: 10,
                   dotsEach: 2
                }, 
                768:{
                    items:2,
                    margin: 10
                   
                },
                1500: {
                    items: 3,
                    margin: 1
                }
                    
            }
            
        });
    });
}