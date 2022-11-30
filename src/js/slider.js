const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',

  loop: true,
  simulateTouch: false,
  slideToCleckedSlide: true,
  watchOverflow: true,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: 2,

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 32,
    scale: 0.6,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.gallery__slider-button--next',
    prevEl: '.gallery__slider-button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
