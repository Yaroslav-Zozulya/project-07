// import Swiper bundle with all modules installed
import Swiper, { Navigation, Pagination } from 'swiper';

export const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  slidesPerView: 5,
  spaceBetween: 12,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
