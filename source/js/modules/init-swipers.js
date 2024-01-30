import {initSliderHero} from './hero-swiper';
import {initSliderReviews} from './reviews-swiper';
import {initSliderNews} from './news-swiper';
import {initSliderPrograms} from './programs-swiper';

const initSliders = () => {
  initSliderHero();
  initSliderReviews();
  initSliderNews();
  //initSliderPrograms();
};


export {initSliders};
