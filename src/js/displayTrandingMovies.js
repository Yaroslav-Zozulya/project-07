import API from './fetchAPI';
import renderMovie from './renderMovie';
import loader from './loader';
import { darkModeImageText } from '/js/darkMode';
import { paginationInit } from './pagination';

const ref = {
  containerMovies: document.querySelector('.collection'),
};

function appendGallery(data) {
  ref.containerMovies.innerHTML = data;

  darkModeImageText();
}

function displayTrandingMovie(page) {
  loader.addLoader();

  if (!Number.isInteger(page)) {
    page = 1;
  }

  API.getMoviesByTrending(page)
    .then(paginationInit)
    .then(renderMovie)
    .then(appendGallery)
    .finally(loader.removeLoader);
}

export default displayTrandingMovie;
