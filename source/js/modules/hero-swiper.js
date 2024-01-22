import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const heroSlider = document.querySelector('[data-swiper="slider"]');
const heroSliderPagination = document.querySelector('[data-button="pagination-slider"]');

const setSliderHero = () => new Swiper(heroSlider, {
  pagination: {
    el: heroSliderPagination,
    clickable: true,
    type: 'bullets',
    bulletElement: 'div',
    bulletClass: 'hero-slider__pagination-bullet',
    bulletActiveClass: 'is-active',
  },
  loop: true,
  breakpoints: {
    1440: {
      allowTouchMove: true,
    },
  },
});

const initSliders = () => {
  if (document.body.contains(heroSlider)) {
    setSliderHero();
  }
};

export {initSliders};
