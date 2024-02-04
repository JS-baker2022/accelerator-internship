import Swiper from 'swiper/bundle';
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css/bundle';


const heroSlider = document.querySelector('[data-swiper="slider"]');
const heroSliderPagination = document.querySelector('[data-button="pagination-slider"]');

const setSliderHero = () => new Swiper(heroSlider,{
  modules: [Pagination, Autoplay],
  pagination: {
    el: heroSliderPagination,
    clickable: true,
    type: 'bullets',
    bulletElement: 'span',
    bulletClass: 'hero-slider__pagination-bullet',
    bulletActiveClass: 'is-active',
  },
  on: {
    slideChangeTransitionStart: function () {
      setSliderHero.pagination.init();
      setSliderHero.pagination.render();
      setSliderHero.pagination.update();
    },
  },
  loop: true,
  breakpoints: {
    1440: {
      allowTouchMove: true,
    },
    768: {
      allowTouchMove: true,
    },
    320: {
      allowTouchMove: true,
    },
  },
});

const initSliderHero = () => {
  if (document.body.contains(heroSlider)) {
    setSliderHero();
  }
};

export {initSliderHero};
