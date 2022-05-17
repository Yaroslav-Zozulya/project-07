import API from './fetchAPI';
import renderMovie from './renderMovie';
import loader from './loader';
import { darkModeImageText } from '/js/darkMode';
import { trendingMoviesPagination } from './pagination/trendingMoviesPagination';
import { lazyLoad } from './lazyLoadImg';
import { refs } from './refs';
const ref = {
  containerMovies: document.querySelector('.collection'),
};

function appendGallery(data) {
  ref.containerMovies.innerHTML = data;
  darkModeImageText();
}

function displayTrandingMovie(page) {
  loader.addLoader();
  refs.input.value = '';
  if (!Number.isInteger(page)) {
    page = 1;
  }

  if (localStorage.hasOwnProperty('currentPage')) {
    page = Number(localStorage.getItem('currentPage'));
  }

  API.getMoviesByTrending(page)
    .then(trendingMoviesPagination)
    .then(renderMovie)
    .then(appendGallery)
    .then(lazyLoad)
    .finally(loader.removeLoader);
}

export default displayTrandingMovie;
