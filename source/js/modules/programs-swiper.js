import Swiper from 'swiper';
import {Navigation, Scrollbar, Keyboard} from 'swiper/modules';

const programsSlider = document.querySelector('[data-swiper="programs"]');

const setSliderPrograms = () =>
  new Swiper(programsSlider, {
    modules: [Navigation, Scrollbar, Keyboard],
    direction: 'horizontal',
    navigation: {
      nextEl: '[data-button="programs-next"]',
      prevEl: '[data-button="programs-prev"]',
    },
    scrollbar: {
      el: '.programs__slider-scrollba',
      hide: false,
      dragSize: 392,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
        scrollbar: {
          dragSize: 324,
        },
      },
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
    },
  });


const initSliderPrograms = () => {
  if (document.body.contains(programsSlider)) {
    setSliderPrograms();
  }
};
export {initSliderPrograms};
