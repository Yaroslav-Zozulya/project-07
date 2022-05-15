import { Notify } from 'notiflix/build/notiflix-notify-aio';

import renderMovie from './renderMovie';
import API from './fetchAPI';
import checkQuery from './helpers/checkQuery';
import loader from './loader';
import { refs } from './refs';
import { darkModeImageText } from '/js/darkMode';
import { searchPagination } from './pagination/trendingMoviesPagination';

function appendGallery(data) {
  refs.containerMovies.innerHTML = data;
  darkModeImageText();
}

export function findMovies(page) {
  refs.containerMovies.innerHTML = '';

  loader.addLoader();
  API.getMoviesByQuery(refs.input.value, page)
    .then(searchPagination)
    .then(renderMovie)
    .then(appendGallery)
    .catch(error => {
      console.log(error);
    })
    .finally(loader.removeLoader);
}

function onShowGalleryMovie(event) {
  event.preventDefault();

  const value = refs.input.value.trim();

  if (!checkQuery(value)) {
    Notify.failure('Enter only A-z letters or numbers, please');
    return;
  }
  findMovies();
}

export default onShowGalleryMovie;
