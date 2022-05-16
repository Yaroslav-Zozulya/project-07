// import Swiper bundle with all modules installed
import Swiper, { Pagination } from 'swiper';

export default new Swiper('.filter__swiper', {
  modules: [Pagination],

  freeMode: true,
  watchSlidesProgress: true,
  watchOverflow: true,

  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  
  pagination: {
    el: '.filter__swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 12,
    },
    250: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 12,
    },
    320: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 5,
      slidesPerGroup: 3,
      spaceBetween: 12,
    },
  },
});
