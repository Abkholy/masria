var map;
function initMap() {
    var cairo = {lat: 30.064742, lng: 31.249509};
  map = new google.maps.Map(document.getElementById('map'), 
  {
    center:cairo,
    zoom: 11,
    backgroundColor:'transparent',
    disableDefaultUI: true,
    keyboardShortcuts: true,
    mapTypeControl: false,
    panControl:true,
    
  });

var home1 = {lat: 30.001835, lng:31.317491};
  var infowindow = new google.maps.InfoWindow;
  infowindow.setContent('<b>الهضبة الوسطى</b>');

  var marker = new google.maps.Marker({map: map, position: home1});
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  
}



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
              items:5,
              stagePadding: 93

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

function page2() {
  for (let i = 0; i < 10; i++) {
    
    console.log('page' + i)

  }

}