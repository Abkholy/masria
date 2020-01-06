function owlCarouselInit() {
    var owl = $("#carousel");
    owl.owlCarousel({
        loop: true,
        nav: false,
        center: true,
        rtl: isRTL(),
        responsive: {
         
            0: {
                items: 1,
                        },
           
            500: {
                items: 2,
                center:true,

            },
            900: {
                items: 3,
                stagePadding: 160

            },
            1400: {
                items: 5,
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


}


function isRTL(){
    let lang = document.getElementsByTagName("body")[0].lang;
    if (lang === 'ar') {
        return true;
    } else {
        return false;

    }
}



$(document).ready(function runAll() {
    owlCarouselInit();

});