import genres from '../../data/genres.json';
import './swiper';

const refs = {
  container: document.querySelector('.swiper-wrapper'),
};

function createGenresMarkup(genres) {
  return genres
    .map(
      ({ id, name, icon }) =>
        `<div class="filter__swiper-slide swiper-slide"><button class="btn-genre" type="button" data-id=${id} data-name=${name}><i class="genre-icon ${icon}"></i>${name}</div>`,
    )
    .join('');
}

function renderGenres() {
  refs.container.innerHTML = createGenresMarkup(genres.genres);
}

export default renderGenres;
