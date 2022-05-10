// import Swiper bundle with all modules installed
import Swiper, { Navigation, Pagination } from 'swiper';

export default function createSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],

    freeMode: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 5,
        spaceBetween: 12,
      },
    },
  });
}
