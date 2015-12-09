$(document).ready(function() {
 
  $("#pictures").owlCarousel({
    autoPlay: 4000,
    slideSpeed: 600,
    paginationSpeed: 800,
    singleItem: true,
    transitionStyle: "fade"
  });

  $("#services").owlCarousel({
    autoPlay: 4000,
    slideSpeed: 600,
    paginationSpeed: 800,
    singleItem: true,
    stopOnHover: true,
    transitionStyle: "fade"
  });
});

// $(".box").bgswitcher({
//   images: [
//     "../../img/fullimage8.jpg",
//     "../../img/fullimage1.jpg",
//     "../../img/fullimage2.jpg",
//     "../../img/fullimage3.jpg",
//     "../../img/fullimage4.jpg",
//     "../../img/fullimage5.jpg",
//     "../../img/fullimage6.jpg",
//     "../../img/fullimage7.jpg"    
//   ], // Background images
//   effect: "fade", // fade, blind, clip, slide, drop, hide
//   interval: 5000, // Interval of switching
//   loop: true, // Loop the switching
//   shuffle: false, // Shuffle the order of an images
//   duration: 2000, // Effect duration
//   easing: "swing" // Effe`ct easing
// });