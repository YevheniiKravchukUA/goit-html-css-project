import Swiper, {
  Navigation,
  Pagination,
  Keyboard,
  EffectCoverflow,
} from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Keyboard, EffectCoverflow],

  direction: 'horizontal',
  navigation: {
    nextEl: '.gallery__slider-button--next',
    prevEl: '.gallery__slider-button--prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  loop: true,
  simulateTouch: false,
  slideToClickedSlide: true,
  watchOverflow: true,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: 2,

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 10,
    scale: 0.7,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 10,
        scale: 0.7,
      },
    },

    768: {
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 32,
        scale: 0.6,
      },
    },
  },
});
