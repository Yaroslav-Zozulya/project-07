import Swiper, { Navigation, Pagination } from 'swiper';
import { darkModeTeamModal } from './darkMode';
import { refs } from './refs';
Swiper.use([Pagination, Navigation]);
const swiper = new Swiper('.team__swiper', {
  // Optional parameters
  loop: true,
  centeredSlidesBounds: true,
  spaceBetween: 10,
  pagination: {
    el: '.team__swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      spaceBetween: 10,
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});

refs.closeModalBtn.addEventListener('click', modalClose);

function openModalTeam(event) {
  event.preventDefault();

  document.addEventListener('keydown', closeOnEsc);
  refs.modalBackdrop.addEventListener('click', closeOnBackdrop);
  refs.modalBackdrop.classList.remove('is-hidden');
  darkModeTeamModal();
}

function modalClose(event) {
  refs.modalBackdrop.classList.add('is-hidden');
}

function closeOnEsc(event) {
  const key = event.key;

  if (key === 'Escape') {
    refs.modalBackdrop.classList.add('is-hidden');
    document.removeEventListener('keydown', closeOnEsc);
  }
}

function closeOnBackdrop(event) {
  if (event.target === refs.modalBackdrop) {
    refs.modalBackdrop.classList.add('is-hidden');
    refs.modalBackdrop.removeEventListener('click', closeOnBackdrop);
  }
}

export default openModalTeam;
