import genres from '../data/genres.json';
import createSwiper from './swiper';

const refs = {
  container: document.querySelector('.swiper-wrapper'),
};

function createGenresMarkup(genres) {
  return genres
    .map(
      ({ id, name, icon }) =>
        `<div class="swiper-slide"><button class="btn-genre" type="button" data-id=${id}><i class="genre-icon ${icon}"></i>${name}</div>`,
    )
    .join('');
}

function renderGenres() {
  refs.container.innerHTML = createGenresMarkup(genres.genres);
  createSwiper();
}

export default renderGenres;
