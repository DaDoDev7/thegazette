var halfWindow = window.innerHeight / 2;
var navigation = document.querySelector(".top-button");

window.addEventListener("scroll", function(){
  var scrolled = window.scrollY;
  if(scrolled >= halfWindow){
      navigation.classList.remove('hide');
  } else {
      navigation.classList.add('hide');
  }
  
})

// var topButton = document.querySelector("#return-to-top");
// topButton.addEventListener("click", function() {
// var top = document.querySelector("#return-to-top").getBoundingClientRect().top;
// window.scroll({
//     top: top, 
//     left: 0, 
//     behavior: 'smooth' 
//   });
// });

var swiper = new Swiper(".mySwiper", {
    
    centeredSlides: false,
    slidesPerView: 3,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
