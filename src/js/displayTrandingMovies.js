import API from './fetchAPI';
import renderMovie from './renderMovie';
import loader from './loader';
import { darkModeImageText } from '/js/darkMode';
const ref = {
  containerMovies: document.querySelector('.collection'),
};

function appendGallery(data) {
  ref.containerMovies.innerHTML = data;

  darkModeImageText();
}

function displayTrandingMovie() {
  loader.addLoader();

  API.getMoviesByTrending()
    .then(data => {
      return renderMovie(data);
    })
    .then(appendGallery)
    .finally(loader.removeLoader);
}

export default displayTrandingMovie;
