
function owlCarouselInit() {
    var owl = $("#carousel");
    owl.owlCarousel({
        loop: true,
        items:1,
        rtl:isRTL(),
        freeDrag: true,
        responsiveClass: true,
        freeDrag: false,
        dots: true,
        responsive: {
         
            0: {
                items: 1,
                margin:0,
                center:false,

          },
           
            500: {
                items: 1.8,
                margin:40,
                stagePadding: 80,

                center:true,

            },
            900: {
                items: 3,
                margin:30,
                stagePadding: 110

            },
            1050: {
                items: 4,
                margin:60,
                stagePadding: 140

            },
            1400: {
                items: 5,
                margin:80,

                stagePadding: 120

            }
        }
        
    });
    // Go to the next item
    $('#carousel .customNextBtn').click(function (e) {
        e.preventDefault();
        owl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('#carousel .customPrevBtn').click(function (e) {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        e.preventDefault();
        owl.trigger('prev.owl.carousel', [300]);
    });
    // $('.owl-dot').click(function () {
    //     owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    //   });
}





    function owlInit() {
        var owlImage = $("#owl-ima");
        owlImage.owlCarousel({
            loop: true,
            items:1,
            rtl:isRTL(),
            responsiveClass: true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    dots: false,
                    loop:true,
                },
                600:{
                    items:3,
                    nav:false,
                    margin:20,
                    dots: false,
                    loop:true,
        
                },
                1000:{
                    items:4,
                    nav:false,
                    margin:20,
                    loop:true,
                    dots: false
                },
                1400:{
                    items:5,
                    nav:false,
                    margin:20,
                    loop:true,
                    dots: false
                }
            }
            
        });
        // Go to the next item
        $('#owl-ima .customNextBtn').click(function (e) {
            e.preventDefault();
            owlImage.trigger('next.owl.carousel');
        });
        // Go to the previous item
        $('#owl-ima .customPrevBtn').click(function (e) {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            e.preventDefault();
            owlImage.trigger('prev.owl.carousel', [300]);
        });
     
    }

  



    
    function bestProjectOwl() {
        var bestProjectOwl = $("#bestProjectCaurousel");
        bestProjectOwl.owlCarousel({
            loop: true,
            dots:false,
            nav:false,
            items:1,
            rtl:isRTL()
        });
        $('#bestProjectCaurousel .customNextButton').click(function (e) {
            e.preventDefault();
            bestProjectOwl.trigger('next.owl.carousel');
        });
        // Go to the previous item
        $('#bestProjectCaurousel .customPrevButton').click(function (e) {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            e.preventDefault();
            bestProjectOwl.trigger('prev.owl.carousel', [300]);
        });
     
    }

    function isRTL(){
        let lang = document.getElementsByTagName("body")[0].lang;
        if (lang === 'ar') {
            return true;
        } else {
            return false;
    
        }
    }

    

    $(document).ready(function runAll(){
        owlCarouselInit();
        owlInit();
        bestProjectOwl();
    });
