import Swiper from 'swiper';
import {Navigation, Pagination, Keyboard, Grid} from 'swiper/modules';

const newsSlider = document.querySelector('[data-swiper="news"]');

const setSliderNews = () =>
  new Swiper(newsSlider, {
    modules: [Navigation, Pagination, Grid, Keyboard],
    loop: false,
    navigation: {
      nextEl: '[data-button="news-next"]',
      prevEl: '[data-button="news-prev"]',
    },
    pagination: {
      el: '.news__slider-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 32,
        grid: {
          rows: 1,
          fill: 'row',
        },
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,

        grid: {
          rows: 2,
          fill: 'column',
        },
        allowTouchMove: true,
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,

        grid: {
          rows: 2,
          fill: 'column',
        },
        allowTouchMove: true,
      },
    },
  });


const initSliderNews = () => {
  if (document.body.contains(newsSlider)) {
    setSliderNews();
  }
};

export {initSliderNews};
