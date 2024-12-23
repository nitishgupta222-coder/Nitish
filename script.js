var swiper = new Swiper(".mySwiper", {
  loop : true,
  effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    fadeEffect: {
      crossFade: true,
    }
  });