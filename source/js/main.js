import {iosVhFix} from './utils/ios-vh-fix';
import {initSliders} from './modules/init-swipers';
import {initAccordions} from './accordion/init-accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initSliders();
    initAccordions();

  });
});
