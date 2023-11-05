
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    centeredSlides: false,
    spaceBetween: 20,
    loop: false,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        640: {
          slidesPerView: 3.6,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1240: {
          slidesPerView:7,
          spaceBetween: 10,
        },
        },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  