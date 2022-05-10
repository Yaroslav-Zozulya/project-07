import genres from '../data/genres.json';
import createSwiper from './swiper';

const refs = {
  container: document.querySelector('.swiper-wrapper'),
};

const ACTIVE_CLASS = 'btn-genre--active';
const genres_ids = [];

refs.container.addEventListener('click', ({ target }) => {
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  // Если жанр ещё не выбран, то вешаем класс и добавляем id жанра в массив
  if (!target.classList.contains(ACTIVE_CLASS)) {
    target.classList.add(ACTIVE_CLASS);
    genres_ids.push(target.dataset.id);
    return;
  }
  // Иначе удаляем класс, снимаем фокус с кнопки и удаляем id жанра из массива
  target.classList.remove(ACTIVE_CLASS);
  target.blur();
  genres_ids.splice(genres_ids.indexOf(target.dataset.id), 1);
});

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
