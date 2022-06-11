import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  modals();
  sliders('.main-slider-item', 'vertical');
  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  forms();
  mask('input[name="phone"]');
  showMoreStyles('.button-styles', '.styles-2');
});
