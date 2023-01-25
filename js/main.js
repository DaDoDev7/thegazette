document.getElementById("top-button").addEventListener("click", function(){
    window.scroll({
        top: document.body.scrollHeight,
        behavior:"smooth"
    });
});


var swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
